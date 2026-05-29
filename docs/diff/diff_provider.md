# Provider 与本地模型 — 完整差异

> 用户视角对应：dashboard 模型配置页（chat completion）+ 本地 Ollama / vLLM 模型自动扫描。embedding/rerank 已剥离到 `MemoryModelManager`（详见 [diff_profile.md §5](diff_profile.md)）。

---

## 0. 文件清单

| 路径 | 真+/真- | 状态 | 角色 |
|---|---|---|---|
| `core/provider/manager.py` | +100 / -456 | 大裁剪 | 只管 chat completion，砍 STT/TTS/embed/rerank |
| `core/provider/sources/anthropic_source.py` | +11 / -30 | 改 | 回退多 tool_result 合并优化 |
| `core/provider/sources/openai_source.py` | +9 / -25 | 改 | 简化 httpx 客户端构造 |
| `dashboard/routes/model.py` | 新增 85 行 | 新文件 | 本地模型扫描端点 |
| `core/provider/sources/{23 个文件}` | 全删 | — | 见 §5 |

---

## 1. core/provider/manager.py — 只管 chat（+100/-456）

### 1.1 类与字段

| 行 | 角色 |
|---|---|
| `manager.py:1-8` | 模块顶部 docstring 说明"已剥离 STT/TTS/embed/rerank/agent_runner" |
| `manager.py:33` | `class ProviderManager` 类定义 |
| `manager.py:36-72` | `__init__`：只保留 `provider_settings / provider_insts / inst_map / llm_tools / curr_provider_inst / db_helper` |
| `manager.py:54` | `self.provider_insts: list[Provider]`（去掉 stt/tts/embed/rerank 4 个 list） |
| `manager.py:57` | `self.inst_map: dict[str, Provider]`（不再用 Union `Providers`） |
| `manager.py:62` | `self.curr_provider_inst: Provider \| None`（去掉 curr_stt / curr_tts） |

### 1.2 主要方法

| 行 | 方法 | 角色 |
|---|---|---|
| `manager.py:134-160` | `set_provider(provider_id, ptype)` | 简化为只处理 chat completion 类型 |
| `manager.py:164-165` | `get_provider_by_id` | 返回类型从 `Providers` 收窄为 `Provider` |
| `manager.py:179-200` | `get_using_provider` | 同上简化 |
| `manager.py:204-235` | `initialize` | 不再加载 stt/tts/embed/rerank；不再注册 agent runner；保留 MCP 后台初始化 |
| `manager.py:326-405` | `load_provider` | 动态 import 分支只剩 chat 类（删除 30+ case） |
| `manager.py:407-430` | `reload` | 配套简化 |

### 1.3 删除的整段方法（AstrBot 原生有，YUNGE 全删）

| 原 AstrBot 文件位置 | 角色 |
|---|---|
| `core/provider/manager.py` | `case "sensevoice_stt_selfhost"` 等 5 个 STT case |
| `core/provider/manager.py` | `case "openai_tts_api"` 等 13 个 TTS case |
| `core/provider/manager.py` | `case "openai_embedding"` 等 embedding case（迁到 `memory_model.py:48-74`） |
| `core/provider/manager.py` | `case "vllm_rerank"` 等 rerank case（同上迁出） |
| `core/provider/manager.py` | `case "coze" / "dify" / "deerflow" / "dashscope" / "agent_runner"` 第三方 agent 后端 |
| `core/provider/manager.py` | `curr_stt_provider_inst / curr_tts_provider_inst` 选取与持久化 |
| `core/provider/manager.py` | `get_async("curr_provider_stt") / ("curr_provider_tts")` 默认恢复 |

> 这些代码已经从 YUNGE 侧移除；保留它们的入口都在 [diff_profile.md §5 的 memory_model.py](diff_profile.md) 内。

---

## 2. core/provider/sources/anthropic_source.py — tool_result 合并回退（真+11/-30）

| 行 | 改动 |
|---|---|
| `anthropic_source.py:197` | `elif message["role"] == "tool":` 入口位置不变 |
| `anthropic_source.py:198-210` | YUNGE 简化为：每条 tool 消息单独 append 一条 `{"role": "user", "content": [{"type": "tool_result", ...}]}` |
| AstrBot 原 `anthropic_source.py:198-230` | 原本是"探测最近一条 user 是否已经全是 tool_result，如果是就追加到 last_content；否则才新建"的合并优化 |

**风险提示**：`tool_result` 合并是 Anthropic API 多工具并行调用时推荐的格式。回退后单 tool 走完整不影响；多 tool 并发可能被 Claude API 拒（"tool_use ids must be paired immediately"）。如果你启用 agentic 模式 + Anthropic + 多工具并行，建议把这段改回上游版本。

---

## 3. core/provider/sources/openai_source.py — httpx 简化（真+9/-25）

| 行 | 改动 |
|---|---|
| `openai_source.py:444` | YUNGE 直接 `return create_proxy_client("OpenAI", proxy)`（一行了事） |
| AstrBot 原 `openai_source.py:442-454` | 原本 try/except 探测 `from openai import _base_client as openai_base_client` 取出 SDK 内嵌的 `httpx_module`，再传给 `create_proxy_client` 共享同一个 httpx 实例 |

**影响**：低 QPS 场景无感；高并发场景上游可以共享连接池减少 socket 数，YUNGE 这边不行。

---

## 4. dashboard/routes/model.py — 新增本地模型扫描（85 行）

| 行 | 角色 |
|---|---|
| `model.py:29` | `class ModelRoute(Route)` |
| `model.py:30-35` | `__init__` + 路由表 `"/model/scan": ["GET", self.scan_models]` |
| `model.py:37-49` | `_fetch_ollama_models(host)`：GET `<host>/api/tags`，10s 超时，失败返 `[]` |
| `model.py:51-63` | `_fetch_vllm_models(host)`：GET `<host>/v1/models`，同样静默 |
| `model.py:65-85` | `GET /model/scan?target=ollama,vllm&ollama_host=...&vllm_host=...` ← `scan_models`：并发跑两个 fetch，合并去重输出 |

返回格式 `{status: "ok", data: {ollama: [...], vllm: [...], all: [...]}}`。

---

## 5. 删除的 23 个 sources 文件清单

> 全部位于 `astrbot/core/provider/sources/`（YUNGE 侧已删）。

### 5.1 TTS 类（13 个）

`azure_tts_source.py` / `dashscope_tts.py` / `edge_tts_source.py` / `fishaudio_tts_api_source.py` / `gemini_tts_source.py` / `genie_tts.py` / `gsv_selfhosted_source.py` / `gsvi_tts_source.py` / `mimo_tts_api_source.py` / `minimax_tts_api_source.py` / `openai_tts_api_source.py` / `volcengine_tts.py` / `minimax_token_plan_source.py`

### 5.2 STT 类（5 个）

`mimo_stt_api_source.py` / `sensevoice_selfhosted_source.py` / `whisper_api_source.py` / `whisper_selfhosted_source.py` / `xinference_stt_provider.py`

### 5.3 文本 LLM 类（5 个）

`groq_source.py` / `longcat_source.py` / `oai_aihubmix_source.py` / `openrouter_source.py` / `xai_source.py`

> **保留**的 chat/embed/rerank 源（YUNGE 侧仍存在）：`anthropic_source.py / openai_source.py / gemini_source.py / dify_source.py / openai_embedding_source.py / gemini_embedding_source.py / vllm_rerank_source.py / xinference_rerank_source.py / bailian_rerank_source.py / nvidia_rerank_source.py` 等。

---

## 6. 一句话总结

`manager.py:36-72` 的字段瘦身 + `manager.py:326-405` 的动态 import 分支收敛 + 23 个 source 文件删除，把 ProviderManager 收敛为"只管 chat completion"；新增 `model.py:65-85` 一个本地 Ollama/vLLM 扫描端点。Anthropic / OpenAI 适配器各做一处微改（前者疑似回退优化，后者简化连接池）。
