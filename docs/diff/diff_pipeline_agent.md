# Pipeline / Agent — 完整差异

> Pipeline 是 AstrBot 的事件处理流水线（waking → whitelist → session → ratelimit → preprocess → process → result_decorate → respond）。本文记录 YUNGE 在这一层做的删减和插桩。

---

## 0. 文件清单

| 路径 | 真+/真- | 状态 | 角色 |
|---|---|---|---|
| `core/core_lifecycle.py` | +14 / -76 | 大改 | 删 subagent + 加 memory_model 注入 |
| `core/pipeline/scheduler.py` | +38 / -4 | 关键改造 | 自动写 conversation_store + 删 wecom_ai_bot 分支 |
| `core/pipeline/result_decorate/stage.py` | +9 / -201 | 大裁剪 | 删 t2i / TTS / forward / content_safety |
| `core/pipeline/process_stage/method/agent_request.py` | +4 / -2 | 微改 | 删 ThirdPartyAgentSubStage |
| `core/pipeline/__init__.py` | +0 / -18 | 删 | 删除 ContentSafetyCheckStage 导出 |
| `core/pipeline/bootstrap.py` | +0 / -2 | 删 | 同上的内置 stage 项 |
| `core/pipeline/stage_order.py` | +0 / -1 | 删 | 同上的执行顺序项 |
| `core/astr_agent_tool_exec.py` | +2 / -379 | 大裁剪 | 删 handoff/sub-agent 工具执行（保留主体 425 行） |
| `core/astr_main_agent.py` | +1 / -77 | 改 | 删 subagent 集成 + persona_error_reply + 简化 KB 拼接 |
| `core/astr_agent_run_util.py` | +4 / -13 | 改 | 配套裁剪 |
| `core/agent/runners/tool_loop_agent_runner.py` | +3 / -12 | 改 | 配套裁剪 |

---

## 1. core/core_lifecycle.py — 注入 MemoryModelManager + 删 subagent（真+14/-76）

| 行 | 改动 |
|---|---|
| `core_lifecycle.py:27` | 新增 `from miku.core.knowledge_base.memory_model import MemoryModelManager` |
| AstrBot 原 `core_lifecycle.py:36`（删） | 删除 `from astrbot.core.subagent_orchestrator import SubAgentOrchestrator` |
| AstrBot 原 `core_lifecycle.py:43`（删） | 删除 `from . import html_renderer` import 项 |
| AstrBot 原 `__init__:60`（删） | 删除 `self.subagent_orchestrator: SubAgentOrchestrator \| None = None` 字段 |
| AstrBot 原 `__init__:62`（删） | 删除 `self._default_chat_provider_warning_emitted = False` 字段 |
| AstrBot 原 `core_lifecycle.py:84-111`（删） | 删除整个 `_init_or_reload_subagent_orchestrator` 方法（28 行） |
| AstrBot 原 `core_lifecycle.py:113-149`（删） | 删除整个 `_warn_about_unset_default_chat_provider` 方法（37 行） |
| AstrBot 原 `core_lifecycle.py:159`（删） | 删除 `await html_renderer.initialize()` |
| `core_lifecycle.py:81` | `async def initialize` 方法定义 |
| AstrBot 原 `core_lifecycle.py:148-149` | `self.kb_manager = KnowledgeBaseManager(self.provider_manager)` 单参注入 |
| `core_lifecycle.py:152-156` | YUNGE 改为：先 `MemoryModelManager(self.astrbot_config)` 再 `KnowledgeBaseManager(self.memory_model_manager, provider_manager=self.provider_manager)` |
| AstrBot 原 `core_lifecycle.py:166`（删） | 删除 `await self._init_or_reload_subagent_orchestrator()` |
| AstrBot 原 `core_lifecycle.py:181`（删） | 删除 `PipelineContext(...)` 实参里的 `self.subagent_orchestrator` |
| `core_lifecycle.py:183` | `await self.provider_manager.initialize()` |
| `core_lifecycle.py:185` | 新增 `await self.memory_model_manager.initialize()` |
| `core_lifecycle.py:316-319` | 终止序列新增 `await self.memory_model_manager.terminate()`（在 provider/platform 之后、kb 之前） |
| `core_lifecycle.py:333-336` | 第二个终止路径同样补一行 |
| 多处 | `logger.info("AstrBot v" + VERSION)` → `logger.info("AstrBot AI v" + VERSION)`（启动横幅 cosmetic） |

---

## 2. core/pipeline/scheduler.py — conversation_store 自动写入（真+38/-4）

| 行 | 改动 |
|---|---|
| `scheduler.py:5` | `from miku.core.platform.sources.webchat.webchat_event import WebChatMessageEvent` 保留 |
| AstrBot 原 `scheduler.py:6-8`（删） | 删除 `from .sources.wecom_ai_bot.wecomai_event import WecomAIBotMessageEvent` |
| `scheduler.py:10-13` | 新增 try/except import：`from miku.core.conversation_store import get_store as _get_conv_store`，失败赋 None |
| `scheduler.py:92-103` | 用户消息入口：`if _get_conv_store: try _get_conv_store().save(session_id=event.session_id, role="user", content=event.message_str, user_id=..., user_name=...)` 包 try/except 静默失败 |
| AstrBot 原 `scheduler.py:88-89` | 原是 `if isinstance(event, WebChatMessageEvent \| WecomAIBotMessageEvent):` |
| `scheduler.py:107` | YUNGE 改为 `if isinstance(event, WebChatMessageEvent):`（去掉 wecom 分支） |
| `scheduler.py:109-126` | 出口写 AI 回复：从 `event.get_result().chain` 收集 Plain.text，拼 `" ".join(...)` 后 `save(role="assistant")`，整段同样 try/except 兜底 |

---

## 3. core/pipeline/result_decorate/stage.py — 大裁剪（真+9/-201）

| 行 | 改动 |
|---|---|
| AstrBot 原 `stage.py:7`（删） | 删 `from astrbot.core import file_token_service, html_renderer, logger` 中的前两个 |
| AstrBot 原 `stage.py:8`（改） | `Image, Json, Node, Plain, Record, Reply` → 缩减为 `Image, Plain, Reply` |
| AstrBot 原 `stage.py:10`（删） | 删 `from astrbot.core.pipeline.content_safety_check.stage import ContentSafetyCheckStage` |
| `stage.py:21` | `class ResultDecorateStage(Stage)` |
| `stage.py:22-37` | YUNGE 版 `__init__`：只读取 `display_reasoning_text` 与 `words_count_threshold` |
| AstrBot 原 `__init__:30-60`（删） | 删除 `t2i_word_threshold / t2i_strategy / t2i_use_network / t2i_active_template / forward_threshold / tts_trigger_probability` 6 个字段加载（约 25 行） |
| `stage.py:33` | 新增 `self.show_reasoning = provider_cfg.get("display_reasoning_text", False)` |
| `stage.py:89` | `async def process(...)` 主体 |
| `stage.py:161` | 保留分段回复逻辑（`if len(comp.text) > self.words_count_threshold:`） |
| `stage.py:201` | 保留 reasoning_text 透出（`if self.show_reasoning`） |
| AstrBot 原 `process:` 内多段（删） | 删除 t2i 触发渲染、长消息合并 Node 转发、TTS Record 生成、ContentSafety 二次过滤、file_token URL 鉴权（约 145 行） |

---

## 4. core/pipeline/process_stage/method/agent_request.py — 强制 local（真+4/-2）

| 行 | 改动 |
|---|---|
| `agent_request.py:9` | `from .agent_sub_stages.internal import InternalAgentSubStage` |
| AstrBot 原 `agent_request.py:10`（删） | 删 `from .agent_sub_stages.third_party import ThirdPartyAgentSubStage` |
| `agent_request.py:26` | `agent_runner_type = self.config["provider_settings"]["agent_runner_type"]` |
| `agent_request.py:27-28` | `if agent_runner_type == "local":` 走 `InternalAgentSubStage` |
| `agent_request.py:30-33` | YUNGE 改 else 分支：打 error log "Unsupported agent_runner_type" + 兜底 `InternalAgentSubStage`（原本是 `ThirdPartyAgentSubStage`） |

---

## 5. core/pipeline/__init__.py & bootstrap.py — 删 ContentSafetyCheckStage 注册

| 行 | 改动 |
|---|---|
| AstrBot 原 `__init__.py:21`（删） | 删 `from .content_safety_check.stage import ContentSafetyCheckStage`（TYPE_CHECKING 块） |
| AstrBot 原 `__init__.py:32-34`（删） | 删 `_LAZY_EXPORTS` 里的 `"ContentSafetyCheckStage": (...)` 项 |
| AstrBot 原 `__init__.py:71-83`（删） | 删第二个 TYPE_CHECKING import 块整段（10 行重复 import） |
| AstrBot 原 `__init__.py:84`（删） | 删 `__all__` 里的 `"ContentSafetyCheckStage"` |
| `pipeline/__init__.py:30-33`（YUNGE） | 仅保留 `PreProcessStage` 等正常 stage |
| AstrBot 原 `bootstrap.py:11`（删） | 删 `_BUILTIN_STAGE_MODULES` 里的 `"astrbot.core.pipeline.content_safety_check.stage"` |
| AstrBot 原 `bootstrap.py:23`（删） | 删 `_EXPECTED_STAGE_NAMES` 里的 `"ContentSafetyCheckStage"` |
| `bootstrap.py:7-16` | YUNGE 版本 `_BUILTIN_STAGE_MODULES` 8 项（去掉 content_safety） |
| `bootstrap.py:18-27` | YUNGE 版本 `_EXPECTED_STAGE_NAMES` 8 项 |
| `core/pipeline/content_safety_check/`（整目录删除） | content_safety stage 主体连同关键词配置 |
| AstrBot 原 `core/pipeline/stage_order.py`（删 1 行） | 同上的执行顺序项 |

> **可观察影响**：YUNGE 不再做关键词过滤；如需合规拦截要么自己加阶段、要么在 LLM provider 层面接入。

---

## 6. core/astr_agent_tool_exec.py — 删 handoff / sub-agent 路径（真+2/-379）

> **澄清**：原 802 行 → 425 行，**没有**整体掏空，只是删除了和 handoff、sub-agent、computer-use handoff 相关的私有方法。主类 `FunctionToolExecutor` 与公开 `execute` API 保留。

| 行（YUNGE 侧） | 角色 |
|---|---|
| `astr_agent_tool_exec.py:35-50` | `class FunctionToolExecutor(BaseFunctionToolExecutor)` 主体保留 |
| `astr_agent_tool_exec.py:36-80` | `execute` 主分发（mcp / background_task / local）保留 |
| AstrBot 原（已删，YUNGE 无对应行） | `_collect_image_urls_from_args` |
| AstrBot 原（已删） | `_collect_image_urls_from_message` |
| AstrBot 原（已删） | `_collect_handoff_image_urls` |
| AstrBot 原（已删） | `_get_runtime_computer_tools` |
| AstrBot 原（已删） | `_build_handoff_toolset` |
| AstrBot 原（已删） | `_execute_handoff` |
| AstrBot 原（已删） | `_execute_handoff_background` |
| AstrBot 原（已删） | `_run_handoff_in_background` |
| AstrBot 原（已删） | `_do_handoff_background` |

总计删除 9 个 handoff/computer 相关方法。

---

## 7. core/astr_main_agent.py — 删 SubAgent 与 PersonaErrorReply 集成（真+1/-77）

| 行 | 改动 |
|---|---|
| AstrBot 原 `astr_main_agent.py:15`（删） | 删 `from astrbot.core.agent.handoff import HandoffTool` |
| AstrBot 原 `astr_main_agent.py:33-36`（删） | 删 `from astrbot.core.persona_error_reply import (extract_..., set_persona_custom_error_message_on_event)` |
| AstrBot 原（删） | `class PluginContext` 数据类删除 `subagent_orchestrator: dict = field(default_factory=dict)` 字段 |
| `astr_main_agent.py:222-230` | KB 注入：`kb_result = await retrieve_knowledge_base(...)` |
| `astr_main_agent.py:230` | YUNGE 简化为 `req.system_prompt += f"\n\n{kb_result}"`（原本前缀 `[Related Knowledge Base Results]:`） |
| AstrBot 原 `~393-395`（删） | 删 `set_persona_custom_error_message_on_event(event, extract_persona_custom_error_message_from_persona(persona))` 整段 + 兜底 `if req.system_prompt is None: req.system_prompt = ""` |
| AstrBot 原 `~457-516`（删） | 删整个 sub-agent handoff 注入块（约 60 行）：从 `orch_cfg = plugin_context.get_config().get("subagent_orchestrator", {})` 开始，遍历 agents 列表、收集 assigned_tools、通过 `so.handoffs` 加 handoff 工具、根据 `remove_main_duplicate_tools` 去重、拼 `router_system_prompt` 到 `req.system_prompt` |

> 配套删除文件 `core/persona_error_reply.py`（详见 INDEX §3.4）。
> KB 拼接简化的来源：`retrieve_knowledge_base` 内部已经加好了 `[关于用户的相关信息]` / `[可能相关的资料]` 标签（详见 [diff_knowledge_base.md §1.3](diff_knowledge_base.md)）。

---

## 8. core/astr_agent_run_util.py & tool_loop_agent_runner.py — 配套小改

| 路径 | 真+/真- | 主要删除 |
|---|---|---|
| `astr_agent_run_util.py` | +4 / -13 | 配套删除 handoff/sub-agent 工具收集 helper |
| `agent/runners/tool_loop_agent_runner.py` | +3 / -12 | 配套删除 handoff routing 分支 |

> 这两处的具体函数行号需要时按"`grep -n handoff` / `grep -n subagent`"在两侧仓库直接定位；改动模式与上面 §6 §7 一致。

---

## 9. 一句话总结

`core_lifecycle.py:152-156` 注入 MemoryModelManager；`scheduler.py:92-126` 在 webchat 入出口插桩自动写 conversation_store；`result_decorate/stage.py:22-37` 砍掉 t2i/TTS/forward/content_safety；`agent_request.py:30-33` 把 third-party agent 兜底为 local；`astr_agent_tool_exec.py` 删 9 个 handoff 方法；`astr_main_agent.py` 删 60 行 sub-agent handoff 注入。主链路 AstrMainAgent → tool_loop_agent_runner 没动。
