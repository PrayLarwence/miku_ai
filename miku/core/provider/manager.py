"""
ProviderManager —— 精简版：仅管理 CHAT_COMPLETION 类型 provider。

已剥离：
- speech_to_text / text_to_speech → 不再支持
- embedding / rerank → 迁移至 miku.core.knowledge_base.memory_model
- agent_runner → 不再支持
"""

import asyncio
import copy
import os
import traceback
from collections.abc import Callable
from typing import Protocol, runtime_checkable

from miku.core import astrbot_config, logger, sp
from miku.core.astrbot_config_mgr import AstrBotConfigManager
from miku.core.db import BaseDatabase
from miku.core.utils.error_redaction import safe_error

from ..persona_mgr import PersonaManager
from .entities import ProviderType
from .provider import Provider, Providers
from .register import llm_tools, provider_cls_map


@runtime_checkable
class HasInitialize(Protocol):
    async def initialize(self) -> None: ...


class ProviderManager:
    """仅管理 CHAT_COMPLETION 类型的大模型提供商。"""

    def __init__(
        self,
        acm: AstrBotConfigManager,
        db_helper: BaseDatabase,
        persona_mgr: PersonaManager,
    ) -> None:
        self.reload_lock = asyncio.Lock()
        self.resource_lock = asyncio.Lock()
        self.persona_mgr = persona_mgr
        self.acm = acm
        config = acm.confs["default"]
        self.providers_config: list = config["provider"]
        self.provider_sources_config: list = config.get("provider_sources", [])
        self.provider_settings: dict = config["provider_settings"]

        # 人格相关属性
        self.default_persona_name = persona_mgr.default_persona

        self.provider_insts: list[Provider] = []
        """加载的 Chat Completion Provider 实例"""

        self.inst_map: dict[str, Provider] = {}
        """Provider 实例映射. key: provider_id, value: Provider 实例"""

        self.llm_tools = llm_tools

        self.curr_provider_inst: Provider | None = None
        """当前默认的 Provider 实例"""

        self.db_helper = db_helper
        self._provider_change_callback: (
            Callable[[str, ProviderType, str | None], None] | None
        ) = None
        self._provider_change_hooks: list[
            Callable[[str, ProviderType, str | None], None]
        ] = []
        self._mcp_init_task: asyncio.Task | None = None

    # ── callback / hooks ──────────────────────────────────────────────

    def set_provider_change_callback(
        self,
        cb: Callable[[str, ProviderType, str | None], None] | None,
    ) -> None:
        self._provider_change_callback = cb

    def register_provider_change_hook(
        self,
        hook: Callable[[str, ProviderType, str | None], None],
    ) -> None:
        if hook not in self._provider_change_hooks:
            self._provider_change_hooks.append(hook)

    def _notify_provider_changed(
        self,
        provider_id: str,
        provider_type: ProviderType,
        umo: str | None,
    ) -> None:
        if self._provider_change_callback is not None:
            try:
                self._provider_change_callback(provider_id, provider_type, umo)
            except Exception as e:
                logger.warning(
                    "调用 provider 变更回调失败: provider_id=%s, type=%s, err=%s",
                    provider_id,
                    provider_type,
                    safe_error("", e),
                )
        for hook in list(self._provider_change_hooks):
            if hook is self._provider_change_callback:
                continue
            try:
                hook(provider_id, provider_type, umo)
            except Exception as e:
                logger.warning(
                    "调用 provider 变更钩子失败: provider_id=%s, type=%s, err=%s",
                    provider_id,
                    provider_type,
                    safe_error("", e),
                )

    # ── persona ────────────────────────────────────────────────────────

    @property
    def persona_configs(self) -> list:
        return self.persona_mgr.persona_v3_config

    @property
    def personas(self) -> list:
        return self.persona_mgr.personas_v3

    @property
    def selected_default_persona(self):
        return self.persona_mgr.selected_default_persona_v3

    # ── set / get provider ─────────────────────────────────────────────

    async def set_provider(
        self,
        provider_id: str,
        provider_type: ProviderType,
        umo: str | None = None,
    ) -> None:
        if provider_id not in self.inst_map:
            raise ValueError(f"提供商 {provider_id} 不存在，无法设置。")
        if umo:
            await sp.session_put(
                umo,
                f"provider_perf_{provider_type.value}",
                provider_id,
            )
            self._notify_provider_changed(provider_id, provider_type, umo)
            return

        prov = self.inst_map[provider_id]
        if provider_type == ProviderType.CHAT_COMPLETION and isinstance(
            prov, Provider
        ):
            self.curr_provider_inst = prov
            await sp.put_async(
                key="curr_provider",
                value=provider_id,
                scope="global",
                scope_id="global",
            )
            self._notify_provider_changed(provider_id, provider_type, umo)

    async def get_provider_by_id(self, provider_id: str) -> Provider | None:
        return self.inst_map.get(provider_id)

    def get_using_provider(
        self, provider_type: ProviderType, umo=None
    ) -> Provider | None:
        """获取正在使用的 chat completion provider。"""
        provider = None
        provider_id = None
        if umo:
            provider_id = sp.get(
                f"provider_perf_{provider_type.value}",
                None,
                scope="umo",
                scope_id=umo,
            )
            if provider_id:
                provider = self.inst_map.get(provider_id)
        if not provider:
            config = self.acm.get_conf(umo)
            if provider_type == ProviderType.CHAT_COMPLETION:
                provider_id = config["provider_settings"].get("default_provider_id")
                provider = self.inst_map.get(provider_id)
                if not provider:
                    provider = (
                        self.provider_insts[0] if self.provider_insts else None
                    )
            else:
                # 非 CHAT_COMPLETION 类型不再支持
                return None

        if not provider and provider_id:
            logger.warning(
                f"没有找到 ID 为 {provider_id} 的提供商。"
            )

        return provider

    # ── initialize ─────────────────────────────────────────────────────

    async def initialize(self) -> None:
        for provider_config in self.providers_config:
            try:
                await self.load_provider(provider_config)
            except Exception as e:
                logger.error(traceback.format_exc())
                logger.error(e)

        selected_provider_id = await sp.get_async(
            key="curr_provider",
            default=self.provider_settings.get("default_provider_id"),
            scope="global",
            scope_id="global",
        )

        temp_provider = (
            self.inst_map.get(selected_provider_id)
            if isinstance(selected_provider_id, str)
            else None
        )
        self.curr_provider_inst = (
            temp_provider if isinstance(temp_provider, Provider) else None
        )
        if not self.curr_provider_inst and self.provider_insts:
            self.curr_provider_inst = self.provider_insts[0]

        async def _init_mcp_clients_bg() -> None:
            try:
                await self.llm_tools.init_mcp_clients()
            except Exception:
                logger.error("MCP init background task failed", exc_info=True)

        if self._mcp_init_task is None or self._mcp_init_task.done():
            self._mcp_init_task = asyncio.create_task(
                _init_mcp_clients_bg(),
                name="provider-manager:mcp-init",
            )

    # ── dynamic import (chat_completion only) ──────────────────────────

    def dynamic_import_provider(self, type: str) -> None:
        """动态导入 chat_completion 提供商适配器模块。"""
        match type:
            case "openai_chat_completion":
                from .sources.openai_source import (  # noqa: F401
                    ProviderOpenAIOfficial as ProviderOpenAIOfficial,
                )
            case "zhipu_chat_completion":
                from .sources.zhipu_source import ProviderZhipu as ProviderZhipu  # noqa: F401
            case "anthropic_chat_completion":
                from .sources.anthropic_source import (  # noqa: F401
                    ProviderAnthropic as ProviderAnthropic,
                )
            case "kimi_code_chat_completion":
                from .sources.kimi_code_source import (  # noqa: F401
                    ProviderKimiCode as ProviderKimiCode,
                )
            case "googlegenai_chat_completion":
                from .sources.gemini_source import (  # noqa: F401
                    ProviderGoogleGenAI as ProviderGoogleGenAI,
                )

    # ── config helpers ─────────────────────────────────────────────────

    def get_merged_provider_config(self, provider_config: dict) -> dict:
        pc = copy.deepcopy(provider_config)
        provider_source_id = pc.get("provider_source_id", "")
        if provider_source_id:
            provider_source = None
            for ps in self.provider_sources_config:
                if ps.get("id") == provider_source_id:
                    provider_source = ps
                    break
            if provider_source:
                merged_config = {**provider_source, **pc}
                merged_config["id"] = pc["id"]
                pc = merged_config
        return pc

    def get_provider_config_by_id(
        self,
        provider_id: str,
        *,
        merged: bool = False,
    ) -> dict | None:
        for provider_config in self.providers_config:
            if provider_config.get("id") != provider_id:
                continue
            if merged:
                return self.get_merged_provider_config(provider_config)
            return copy.deepcopy(provider_config)
        return None

    def _resolve_env_key_list(self, provider_config: dict) -> dict:
        keys = provider_config.get("key", [])
        if not isinstance(keys, list):
            return provider_config
        resolved_keys = []
        for idx, key in enumerate(keys):
            if isinstance(key, str) and key.startswith("$"):
                env_key = key[1:]
                if env_key.startswith("{") and env_key.endswith("}"):
                    env_key = env_key[1:-1]
                if env_key:
                    env_val = os.getenv(env_key)
                    if env_val is None:
                        provider_id = provider_config.get("id")
                        logger.warning(
                            f"Provider {provider_id} 配置项 key[{idx}] 使用环境变量 {env_key} 但未设置。",
                        )
                        resolved_keys.append("")
                    else:
                        resolved_keys.append(env_val)
                else:
                    resolved_keys.append(key)
            else:
                resolved_keys.append(key)
        provider_config["key"] = resolved_keys
        return provider_config

    # ── load / reload / terminate ──────────────────────────────────────

    async def load_provider(self, provider_config: dict) -> None:
        provider_config = self.get_merged_provider_config(provider_config)

        # 只处理 chat_completion 类型
        ptype = provider_config.get("provider_type", "")
        if ptype != "chat_completion":
            return

        provider_config = self._resolve_env_key_list(provider_config)

        if not provider_config.get("enable"):
            logger.info(f"Provider {provider_config['id']} is disabled, skipping")
            return

        logger.info(
            "Loading model %s(%s) ...",
            provider_config["type"],
            provider_config["id"],
        )

        try:
            self.dynamic_import_provider(provider_config["type"])
        except (ImportError, ModuleNotFoundError) as e:
            logger.critical(
                f"加载 {provider_config['type']}({provider_config['id']}) 提供商适配器失败：{e}。",
                exc_info=True,
            )
            return
        except Exception as e:
            logger.critical(
                f"加载 {provider_config['type']}({provider_config['id']}) 提供商适配器失败：{e}。",
                exc_info=True,
            )
            return

        if provider_config["type"] not in provider_cls_map:
            logger.error(
                f"Provider adapter not found: {provider_config['type']}({provider_config['id']}).",
            )
            return

        provider_metadata = provider_cls_map[provider_config["type"]]
        try:
            cls_type = provider_metadata.cls_type
            if not cls_type:
                logger.error(f"无法找到 {provider_metadata.type} 的类")
                return

            provider_metadata.id = provider_config["id"]

            if not issubclass(cls_type, Provider):
                raise TypeError(
                    f"Provider class {cls_type} is not a subclass of Provider"
                )

            inst = cls_type(provider_config, self.provider_settings)

            if isinstance(inst, HasInitialize):
                await inst.initialize()

            self.provider_insts.append(inst)
            if (
                self.provider_settings.get("default_provider_id")
                == provider_config["id"]
            ):
                self.curr_provider_inst = inst
                logger.info(
                    f"Selected {provider_config['type']}({provider_config['id']}) as default chat model provider",
                )
            if not self.curr_provider_inst:
                self.curr_provider_inst = inst

            self.inst_map[provider_config["id"]] = inst
        except Exception as e:
            logger.error(
                f"实例化 {provider_config['type']}({provider_config['id']}) 提供商适配器失败：{e}",
            )
            raise Exception(
                f"实例化 {provider_config['type']}({provider_config['id']}) 提供商适配器失败：{e}",
            )

    async def reload(self, provider_config: dict) -> None:
        async with self.reload_lock:
            await self.terminate_provider(provider_config["id"])
            if provider_config.get("enable"):
                await self.load_provider(provider_config)

            self.providers_config = astrbot_config["provider"]
            self.provider_sources_config = astrbot_config.get("provider_sources", [])
            config_ids = [provider["id"] for provider in self.providers_config]
            logger.info(f"providers in user's config: {config_ids}")
            for key in list(self.inst_map.keys()):
                if key not in config_ids:
                    await self.terminate_provider(key)

            if len(self.provider_insts) == 0:
                self.curr_provider_inst = None
            elif self.curr_provider_inst is None and len(self.provider_insts) > 0:
                self.curr_provider_inst = self.provider_insts[0]
                logger.info(
                    f"自动选择 {self.curr_provider_inst.meta().id} 作为当前提供商适配器。",
                )

    def get_insts(self):
        return self.provider_insts

    async def terminate_provider(self, provider_id: str) -> None:
        if provider_id not in self.inst_map:
            return

        logger.info(f"终止 {provider_id} 提供商适配器({len(self.provider_insts)}) ...")

        prov_inst = self.inst_map[provider_id]
        if prov_inst in self.provider_insts:
            self.provider_insts.remove(prov_inst)

        if prov_inst == self.curr_provider_inst:
            self.curr_provider_inst = None

        if getattr(prov_inst, "terminate", None):
            await prov_inst.terminate()  # type: ignore

        logger.info(f"{provider_id} 提供商适配器已终止({len(self.provider_insts)})")
        del self.inst_map[provider_id]

    async def delete_provider(
        self, provider_id: str | None = None, provider_source_id: str | None = None
    ) -> None:
        async with self.resource_lock:
            target_prov_ids = []
            if provider_id:
                target_prov_ids.append(provider_id)
            else:
                for prov in self.providers_config:
                    if prov.get("provider_source_id") == provider_source_id:
                        target_prov_ids.append(prov.get("id"))
            config = self.acm.default_conf
            for tpid in target_prov_ids:
                await self.terminate_provider(tpid)
                config["provider"] = [
                    prov for prov in config["provider"] if prov.get("id") != tpid
                ]
            config.save_config()
            logger.info(f"Provider {target_prov_ids} 已从配置中删除。")

    async def update_provider(self, origin_provider_id: str, new_config: dict) -> None:
        async with self.resource_lock:
            npid = new_config.get("id", None)
            if not npid:
                raise ValueError("New provider config must have an 'id' field")
            config = self.acm.default_conf
            for provider in config["provider"]:
                if (
                    provider.get("id", None) == npid
                    and provider.get("id", None) != origin_provider_id
                ):
                    raise ValueError(f"Provider ID {npid} already exists")
            for idx, provider in enumerate(config["provider"]):
                if provider.get("id", None) == origin_provider_id:
                    config["provider"][idx] = new_config
                    break
            else:
                raise ValueError(f"Provider ID {origin_provider_id} not found")
            config.save_config()
            await self.reload(new_config)

    async def create_provider(self, new_config: dict) -> None:
        async with self.resource_lock:
            npid = new_config.get("id", None)
            if not npid:
                raise ValueError("New provider config must have an 'id' field")
            config = self.acm.default_conf
            for provider in config["provider"]:
                if provider.get("id", None) == npid:
                    raise ValueError(f"Provider ID {npid} already exists")
            config["provider"].append(new_config)
            config.save_config()
            await self.load_provider(new_config)
            self.providers_config = astrbot_config["provider"]

    async def terminate(self) -> None:
        if self._mcp_init_task and not self._mcp_init_task.done():
            self._mcp_init_task.cancel()
            try:
                await self._mcp_init_task
            except asyncio.CancelledError:
                pass

        for provider_inst in list(self.provider_insts):
            if hasattr(provider_inst, "terminate"):
                await provider_inst.terminate()  # type: ignore
        try:
            await self.llm_tools.disable_mcp_server()
        except Exception:
            logger.error("Error while disabling MCP servers", exc_info=True)
