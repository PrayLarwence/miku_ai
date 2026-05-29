"""
MemoryModelManager —— 知识库专用嵌入/重排序模型管理器。

从 ProviderManager 中剥离出来的 embedding / rerank provider 加载逻辑，
由 knowledge_base 模块自行管理。
"""

import asyncio
import copy
import traceback
from collections.abc import Callable
from typing import Protocol, runtime_checkable

from miku.core import logger, sp
from miku.core.config.astrbot_config import AstrBotConfig
from miku.core.provider.entities import ProviderType
from miku.core.provider.provider import EmbeddingProvider, RerankProvider
from miku.core.provider.register import provider_cls_map


@runtime_checkable
class HasInitialize(Protocol):
    async def initialize(self) -> None: ...


class MemoryModelManager:
    """管理 embedding 和 rerank provider 的加载、卸载和查询。"""

    def __init__(
        self,
        config: AstrBotConfig,
    ) -> None:
        self.reload_lock = asyncio.Lock()
        self.resource_lock = asyncio.Lock()

        self.config = config
        self.providers_config: list = config["provider"]
        self.provider_sources_config: list = config.get("provider_sources", [])
        self.provider_settings: dict = config["provider_settings"]

        self.embedding_provider_insts: list[EmbeddingProvider] = []
        self.rerank_provider_insts: list[RerankProvider] = []
        self.inst_map: dict[str, EmbeddingProvider | RerankProvider] = {}

    # ── dynamic import (embedding / rerank only) ──────────────────────

    @staticmethod
    def dynamic_import_provider(type: str) -> None:
        """动态导入 embedding / rerank 适配器模块。"""
        match type:
            case "openai_embedding":
                from miku.core.provider.sources.openai_embedding_source import (  # noqa: F401
                    OpenAIEmbeddingProvider as OpenAIEmbeddingProvider,
                )
            case "gemini_embedding":
                from miku.core.provider.sources.gemini_embedding_source import (  # noqa: F401
                    GeminiEmbeddingProvider as GeminiEmbeddingProvider,
                )
            case "vllm_rerank":
                from miku.core.provider.sources.vllm_rerank_source import (  # noqa: F401
                    VLLMRerankProvider as VLLMRerankProvider,
                )
            case "xinference_rerank":
                from miku.core.provider.sources.xinference_rerank_source import (  # noqa: F401
                    XinferenceRerankProvider as XinferenceRerankProvider,
                )
            case "bailian_rerank":
                from miku.core.provider.sources.bailian_rerank_source import (  # noqa: F401
                    BailianRerankProvider as BailianRerankProvider,
                )
            case "nvidia_rerank":
                from miku.core.provider.sources.nvidia_rerank_source import (  # noqa: F401
                    NvidiaRerankProvider as NvidiaRerankProvider,
                )

    # ── config helpers ────────────────────────────────────────────────

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

    # ── lifecycle ────────────────────────────────────────────────────

    async def initialize(self) -> None:
        """初始化所有 embedding / rerank provider。"""
        for provider_config in self.providers_config:
            if not provider_config.get("enable"):
                continue
            ptype = provider_config.get("provider_type", "")
            if ptype not in (ProviderType.EMBEDDING.value, ProviderType.RERANK.value):
                continue
            try:
                await self.load_provider(provider_config)
            except Exception as e:
                logger.error(traceback.format_exc())
                logger.error(f"加载 embedding/rerank provider 失败: {e}")

    async def load_provider(self, provider_config: dict) -> None:
        provider_config = self.get_merged_provider_config(provider_config)

        if not provider_config.get("enable"):
            logger.info(
                f"MemoryModel provider {provider_config['id']} is disabled, skipping"
            )
            return

        logger.info(
            "Loading memory model %s(%s) ...",
            provider_config["type"],
            provider_config["id"],
        )

        try:
            self.dynamic_import_provider(provider_config["type"])
        except (ImportError, ModuleNotFoundError) as e:
            logger.critical(
                f"加载 {provider_config['type']}({provider_config['id']}) 失败：{e}。"
            )
            return
        except Exception as e:
            logger.critical(
                f"加载 {provider_config['type']}({provider_config['id']}) 失败：{e}。"
            )
            return

        if provider_config["type"] not in provider_cls_map:
            logger.error(
                f"Provider adapter not found: {provider_config['type']}({provider_config['id']})."
            )
            return

        provider_metadata = provider_cls_map[provider_config["type"]]
        try:
            cls_type = provider_metadata.cls_type
            if not cls_type:
                logger.error(f"无法找到 {provider_metadata.type} 的类")
                return

            provider_metadata.id = provider_config["id"]

            match provider_metadata.provider_type:
                case ProviderType.EMBEDDING:
                    if not issubclass(cls_type, EmbeddingProvider):
                        raise TypeError(
                            f"Provider class {cls_type} is not a subclass of EmbeddingProvider"
                        )
                    inst = cls_type(provider_config, self.provider_settings)
                    if isinstance(inst, HasInitialize):
                        await inst.initialize()
                    self.embedding_provider_insts.append(inst)

                case ProviderType.RERANK:
                    if not issubclass(cls_type, RerankProvider):
                        raise TypeError(
                            f"Provider class {cls_type} is not a subclass of RerankProvider"
                        )
                    inst = cls_type(provider_config, self.provider_settings)
                    if isinstance(inst, HasInitialize):
                        await inst.initialize()
                    self.rerank_provider_insts.append(inst)

                case _:
                    raise Exception(
                        f"未知的 memory model 类型：{provider_metadata.provider_type}"
                    )

            self.inst_map[provider_config["id"]] = inst
        except Exception as e:
            logger.error(
                f"实例化 {provider_config['type']}({provider_config['id']}) 失败：{e}",
            )
            raise Exception(
                f"实例化 {provider_config['type']}({provider_config['id']}) 失败：{e}",
            )

    async def reload(self, provider_config: dict) -> None:
        async with self.reload_lock:
            await self.terminate_provider(provider_config["id"])
            if provider_config.get("enable"):
                await self.load_provider(provider_config)

    async def terminate_provider(self, provider_id: str) -> None:
        if provider_id not in self.inst_map:
            return
        logger.info(f"终止 memory model {provider_id} ...")

        prov_inst = self.inst_map[provider_id]
        if prov_inst in self.embedding_provider_insts:
            self.embedding_provider_insts.remove(prov_inst)
        if prov_inst in self.rerank_provider_insts:
            self.rerank_provider_insts.remove(prov_inst)

        if getattr(prov_inst, "terminate", None):
            await prov_inst.terminate()  # type: ignore

        del self.inst_map[provider_id]
        logger.info(f"Memory model {provider_id} 已终止")

    async def terminate(self) -> None:
        for provider_id in list(self.inst_map.keys()):
            await self.terminate_provider(provider_id)
        self.embedding_provider_insts.clear()
        self.rerank_provider_insts.clear()
        self.inst_map.clear()

    # ── query ─────────────────────────────────────────────────────────

    async def get_provider_by_id(
        self, provider_id: str
    ) -> EmbeddingProvider | RerankProvider | None:
        """根据 ID 获取 embedding / rerank provider 实例。"""
        return self.inst_map.get(provider_id)

    def get_all_embedding_providers(self) -> list[EmbeddingProvider]:
        return list(self.embedding_provider_insts)

    def get_all_rerank_providers(self) -> list[RerankProvider]:
        return list(self.rerank_provider_insts)
