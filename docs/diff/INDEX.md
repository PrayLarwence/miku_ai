# YUNGE vs AstrBot — 差异完整对比（INDEX 主索引）

> **目的**：把 `E:\YUNGE-portable\miku\` 相对 `D:\AstrBot-master\AstrBot-master\astrbot\` 的全部
> 修改、新增、删除完整盘点出来，配以代码、行号、API 端点表，作为后续模块详细文档的总目录。
>
> **生成时间**：2026-05-28
> **上游基线**：AstrBot master 快照（D:\AstrBot-master\AstrBot-master\）
> **下游派生**：YUNGE-portable（E:\YUNGE-portable\）
> **包对应关系**：`miku/` ⟺ `astrbot/`（YUNGE 把整个包改名）
> **依赖文件**：`requirements.txt` 完全一致（只是 CRLF/LF 行尾不同）

---

## 0. TL;DR

| 项 | 数值 |
|---|---|
| 修改文件数（剔除纯改名） | **70** |
| 仅因 `astrbot→miku` 改名而 differ 的文件数 | 227 |
| YUNGE 新增文件/目录数 | **14** |
| AstrBot 独有（YUNGE 删除）文件/目录数 | **63** |
| 修改文件总改动 | **+683 / -4442** 行 |
| 新增 HTTP 端点 | **9** |
| 删除 HTTP 端点 | **33** |
| 共有 HTTP 端点（路径+方法+handler 名一致） | 154 |

**总体定性**：YUNGE = AstrBot **-第三方平台 -多余 Provider -OpenAPI -备份 -自动更新 -子代理 -T2I** + **画像/MBTI/对话知识库/本地模型扫描**。删多于增（净 -3759 行），核心新增点都集中在三处：

1. `dashboard/routes/` 加了 3 个路由文件（miku_api / model / profile）
2. `core/knowledge_base/` 加了 `personal_kb.py` `memory_model.py` 实现"对话沉淀知识库"
3. `core/conversation_store.py` 给前端 MBTI/时间线页提供数据访问

---

## 1. 模块文档导航（按主题展开）

> 每个模块文档都包含：相关文件清单、行号、完整代码片段、上下文 AstrBot 原生代码。

| 主题 | 主要差异点 | 详细文档 |
|---|---|---|
| Profile / MBTI / 对话画像 | 新增 `dashboard/routes/miku_api.py` `profile.py`，新增 `core/knowledge_base/personal_kb.py` `memory_model.py`，新增 `core/conversation_store.py` | [diff_profile.md](diff_profile.md) |
| 知识库 RAG（外部 KB） | 改写 `core/tools/knowledge_base_tools.py`（+146/-57），改 `kb_helper.py / kb_mgr.py` | [diff_knowledge_base.md](diff_knowledge_base.md) |
| Provider 与本地模型 | 重写 `core/provider/manager.py`（+100/-456），改 `anthropic_source.py / openai_source.py`，新增 `dashboard/routes/model.py` 本地模型扫描 | [diff_provider.md](diff_provider.md) |
| 配置裁剪 | `core/config/default.py` -1227/+30：删去全部第三方平台、TTS/STT、备份、subagent 配置项 | [diff_config.md](diff_config.md) |
| Pipeline / Agent | 改 `core/pipeline/scheduler.py / result_decorate / agent_request`，删 `astr_agent_tool_exec.py` 主体 | [diff_pipeline_agent.md](diff_pipeline_agent.md) |
| 平台层 | 删除全部 IM 平台源（QQ/微信/飞书/Telegram/Slack…），仅保留 WebChat | [diff_platform.md](diff_platform.md) |
| Dashboard 路由 | 新增 3、删除 7、改动若干 | [diff_dashboard_routes.md](diff_dashboard_routes.md) |
| Star / 插件框架 | 改 `core/star/context.py / star_manager.py / updator.py`，CLI 插件命令缩水 | [diff_star.md](diff_star.md) |
| Computer Use 沙盒 | 删 `shipyard_neo` 主体、`shell_background.py` | [diff_computer.md](diff_computer.md) |
| DB / 持久化 | 删 `core/db/po.py`、`core/db/sqlite.py` 大量原表，改 `core/db/__init__.py` | [diff_db.md](diff_db.md) |
| 其它（utils / cli / metrics） | 杂项裁剪 | [diff_misc.md](diff_misc.md) |

---

## 2. YUNGE 新增的 14 项文件/目录（清单）

> 完整代码请见对应模块文档。

| 路径 | 类型 | 行数 | 说明 |
|---|---|---|---|
| `core/conversation_store.py` | 文件 | ~ | 会话数据桥接层，给前端 MBTI/时间线读对话历史 |
| `core/knowledge_base/personal_kb.py` | 文件 | ~ | 对话沉淀知识库：从历史中抽取 8 类条目（兴趣/项目/技术栈/性格/学习/偏好/概念/关系） |
| `core/knowledge_base/memory_model.py` | 文件 | ~ | 对话画像数据模型 |
| `core/knowledge_base/__init__.py` | 文件 | ~ | 包导出 |
| `core/agent/__init__.py` | 文件 | ~ | 新加包导出 |
| `core/computer/__init__.py` | 文件 | ~ | 新加包导出 |
| `core/message/__init__.py` | 文件 | ~ | 新加包导出 |
| `core/runtime_bootstrap.py` | 文件 | ~ | 便携版运行时引导（写入数据目录、内嵌 Python 路径） |
| `core/tools/__init__.py` | 文件 | ~ | 新加包导出 |
| `core/utils/__init__.py` | 文件 | ~ | 新加包导出 |
| `dashboard/routes/miku_api.py` | 文件 | 381 | MBTI 分析、时间线 API（5 个端点） |
| `dashboard/routes/model.py` | 文件 | 85 | 本地 Ollama / vLLM 模型扫描（1 个端点） |
| `dashboard/routes/profile.py` | 文件 | 168 | 对话知识抽取与查询（3 个端点） |
| `builtin_stars/session_controller/` | 目录 | ~ | 会话控制内置插件（YUNGE 自加） |

---

## 3. YUNGE 删除（AstrBot 独有）的 63 项

按主题归类：

### 3.1 整个删除的"第三方 Agent 后端"
- `core/agent/runners/coze`
- `core/agent/runners/dashscope`
- `core/agent/runners/deerflow`
- `core/agent/runners/dify`

### 3.2 整个删除的"第三方 IM 平台"（核心裁剪点）
- `core/platform/sources/aiocqhttp`（QQ）
- `core/platform/sources/dingtalk`（钉钉）
- `core/platform/sources/discord`
- `core/platform/sources/kook`
- `core/platform/sources/lark`（飞书）
- `core/platform/sources/line`
- `core/platform/sources/mattermost`
- `core/platform/sources/misskey`
- `core/platform/sources/qqofficial`
- `core/platform/sources/qqofficial_webhook`
- `core/platform/sources/satori`
- `core/platform/sources/slack`
- `core/platform/sources/telegram`
- `core/platform/sources/wecom`（企业微信）
- `core/platform/sources/wecom_ai_bot`
- `core/platform/sources/weixin_oc`
- `core/platform/sources/weixin_official_account`（微信公众号）

### 3.3 删除的 Provider 源（全部 TTS/STT + 部分文本 Provider）
- `core/provider/sources/azure_tts_source.py`
- `core/provider/sources/dashscope_tts.py`
- `core/provider/sources/edge_tts_source.py`
- `core/provider/sources/fishaudio_tts_api_source.py`
- `core/provider/sources/gemini_tts_source.py`
- `core/provider/sources/genie_tts.py`
- `core/provider/sources/groq_source.py`
- `core/provider/sources/gsv_selfhosted_source.py`
- `core/provider/sources/gsvi_tts_source.py`
- `core/provider/sources/longcat_source.py`
- `core/provider/sources/mimo_stt_api_source.py`
- `core/provider/sources/mimo_tts_api_source.py`
- `core/provider/sources/minimax_token_plan_source.py`
- `core/provider/sources/minimax_tts_api_source.py`
- `core/provider/sources/oai_aihubmix_source.py`
- `core/provider/sources/openai_tts_api_source.py`
- `core/provider/sources/openrouter_source.py`
- `core/provider/sources/sensevoice_selfhosted_source.py`
- `core/provider/sources/volcengine_tts.py`
- `core/provider/sources/whisper_api_source.py`
- `core/provider/sources/whisper_selfhosted_source.py`
- `core/provider/sources/xai_source.py`
- `core/provider/sources/xinference_stt_provider.py`
- `core/provider/entites.py`（注：这是上游拼写错误的文件名，YUNGE 用 `entities.py`）

### 3.4 删除的核心模块
- `core/backup/__init__.py` `constants.py` `exporter.py` `importer.py`（备份功能整体移除）
- `core/computer/booters/shell_background.py`（沙盒后台 shell）
- `core/persona_error_reply.py`
- `core/pipeline/content_safety_check`（内容安全检查整个目录）
- `core/pipeline/process_stage/method/agent_sub_stages/third_party.py`（第三方 Agent 子阶段）
- `core/star/README.md`
- `core/subagent_orchestrator.py`（子代理编排）
- `core/utils/t2i`（文本转图片整个目录）

### 3.5 删除的 Dashboard 路由
- `dashboard/routes/api_key.py`（API 密钥管理）
- `dashboard/routes/backup.py`（备份）
- `dashboard/routes/live_chat.py`（实时聊天监听）
- `dashboard/routes/open_api.py`（对外 OpenAPI 兼容层）
- `dashboard/routes/subagent.py`（子代理）
- `dashboard/routes/t2i.py`（文本转图片）
- `dashboard/routes/update.py`（自动更新）

---

## 4. 修改文件全景表（70 个文件）

> 按修改量从大到小排序。`+/-` = 真实代码增减行（已剔除 `astrbot→miku` 改名噪音 + CRLF）。

| # | 文件（相对 `miku/` / `astrbot/`） | + | − | 说明（详见对应模块文档） |
|---|---|---:|---:|---|
| 1 | `core/config/default.py` | 30 | 1227 | 删除全部第三方平台/TTS/STT/备份配置 |
| 2 | `core/provider/manager.py` | 100 | 456 | 重写 Provider 管理器 |
| 3 | `core/astr_agent_tool_exec.py` | 2 | 379 | 删除工具执行循环主体 |
| 4 | `dashboard/routes/skills.py` | 11 | 233 | 删除文件管理类端点 |
| 5 | `core/pipeline/result_decorate/stage.py` | 9 | 201 | 删除 t2i / 转发等装饰逻辑 |
| 6 | `core/tools/knowledge_base_tools.py` | 146 | 57 | **重写为新版 RAG 工具** |
| 7 | `core/utils/metrics.py` | 18 | 151 | 简化指标 |
| 8 | `builtin_stars/builtin_commands/commands/conversation.py` | 4 | 128 | 删除多平台会话命令 |
| 9 | `core/computer/booters/shipyard_neo.py` | 7 | 113 | 删除 Neo 沙盒主体 |
| 10 | `dashboard/server.py` | 14 | 94 | 路由注册裁剪 |
| 11 | `builtin_stars/astrbot/main.py` | 0 | 107 | 删除多余处理 |
| 12 | `dashboard/routes/platform.py` | 21 | 84 | 平台路由裁剪 |
| 13 | `core/db/sqlite.py` | 0 | 95 | 删除多余表 |
| 14 | `core/computer/booters/shipyard.py` | 2 | 88 | 沙盒裁剪 |
| 15 | `core/core_lifecycle.py` | 14 | 76 | 启动流程裁剪 |
| 16 | `core/star/context.py` | 23 | 61 | 上下文裁剪 |
| 17 | `core/astr_main_agent.py` | 1 | 77 | 主 Agent 裁剪 |
| 18 | `core/updator.py` | 9 | 67 | 删除自动更新逻辑 |
| 19 | `dashboard/routes/config.py` | 2 | 69 | 配置路由裁剪 |
| 20 | `core/platform/manager.py` | 3 | 65 | 平台管理裁剪 |
| 21 | `core/star/star_manager.py` | 2 | 62 | 插件管理裁剪 |
| 22 | `core/tools/computer_tools/shell.py` | 2 | 57 | shell 工具裁剪 |
| 23 | `core/db/__init__.py` | 0 | 50 | 数据库导出裁剪 |
| 24 | `core/pipeline/scheduler.py` | 38 | 4 | **新增 webchat 定向逻辑** |
| 25 | `cli/utils/plugin.py` | 21 | 20 | CLI 插件工具改造 |
| 26 | `core/provider/sources/anthropic_source.py` | 11 | 30 | Anthropic 源调整 |
| 27 | `core/utils/io.py` | 23 | 18 | I/O 工具调整 |
| 28 | `core/db/po.py` | 0 | 37 | 删除 PO 模型 |
| 29 | `core/utils/migra_helper.py` | 7 | 27 | 迁移辅助裁剪 |
| 30 | `dashboard/routes/session_management.py` | 9 | 25 | 会话管理裁剪 |
| 31 | `dashboard/routes/conversation.py` | 32 | 0 | **新增对话路由能力** |
| 32 | `core/pipeline/process_stage/method/star_request.py` | 8 | 24 | star 请求裁剪 |
| 33 | `core/agent/runners/tool_loop_agent_runner.py` | 5 | 26 | 工具循环 runner 裁剪 |
| 34 | `core/utils/network_utils.py` | 5 | 24 | 网络工具裁剪 |
| 35 | `core/pipeline/process_stage/method/agent_request.py` | 6 | 22 | Agent 请求阶段裁剪 |
| 36 | `core/computer/computer_client.py` | 4 | 24 | computer 客户端裁剪 |
| 37 | `core/pipeline/__init__.py` | 1 | 25 | pipeline 导出裁剪 |
| 38 | `dashboard/routes/__init__.py` | 4 | 20 | 路由注册改写 |
| 39 | `core/pipeline/bootstrap.py` | 5 | 18 | 启动裁剪 |
| 40 | `core/pipeline/process_stage/method/agent_sub_stages/internal.py` | 8 | 14 | 内部子阶段调整 |
| 41 | `core/computer/booters/local.py` | 6 | 14 | local booter 裁剪 |
| 42 | `core/star/star.py` | 6 | 12 | star 基类调整 |
| 43 | `core/cron/manager.py` | 3 | 14 | 定时任务管理裁剪 |
| 44 | `cli/commands/cmd_plug.py` | 2 | 14 | CLI 插件命令裁剪 |
| 45 | `core/pipeline/stage_order.py` | 4 | 11 | 阶段顺序调整 |
| 46 | `dashboard/routes/auth.py` | 7 | 8 | 认证调整 |
| 47 | `core/star/star_tools.py` | 4 | 10 | star tools 调整 |
| 48 | `core/computer/booters/base.py` | 3 | 11 | base booter 调整 |
| 49 | `dashboard/routes/knowledge_base.py` | 4 | 8 | 知识库路由微调 |
| 50 | `core/__init__.py` | 5 | 6 | 包导出调整 |
| 51 | `core/computer/olayer/shell.py` | 4 | 6 | olayer shell 调整 |
| 52 | `core/star/updator.py` | 3 | 7 | star 更新器调整 |
| 53 | `cli/utils/basic.py` | 3 | 6 | CLI basic 工具 |
| 54 | `dashboard/routes/route.py` | 3 | 6 | 路由基类调整 |
| 55 | `core/star/base.py` | 4 | 4 | star base 调整 |
| 56 | `dashboard/routes/static_file.py` | 3 | 5 | 静态文件路由 |
| 57 | `core/provider/sources/openai_source.py` | 3 | 5 | OpenAI 源调整 |
| 58 | `dashboard/routes/plugin.py` | 3 | 5 | 插件路由 |
| 59 | `dashboard/routes/stat.py` | 3 | 4 | 统计路由 |
| 60 | `core/astr_agent_run_util.py` | 2 | 5 | Agent 运行辅助 |
| 61 | `core/platform/astr_message_event.py` | 2 | 4 | 消息事件 |
| 62 | `api/__init__.py` | 1 | 4 | api 包导出 |
| 63 | `api/all.py` | 2 | 2 | api 聚合 |
| 64 | `core/platform/platform.py` | 1 | 3 | 平台基类 |
| 65 | `core/tools/message_tools.py` | 1 | 3 | 消息工具 |
| 66 | `builtin_stars/astrbot/metadata.yaml` | 1 | 2 | 元数据 |
| 67 | `builtin_stars/builtin_commands/metadata.yaml` | 1 | 2 | 元数据 |
| 68 | `builtin_stars/builtin_commands/commands/help.py` | 1 | 1 | 帮助命令 |
| 69 | `core/knowledge_base/kb_helper.py` | 1 | 1 | KB 辅助 |
| 70 | `core/knowledge_base/kb_mgr.py` | 1 | 1 | KB 管理 |

---

## 5. HTTP API 端点全表

### 5.1 YUNGE 新增的 9 个端点（**这是核心扩展点**）

| 方法 | 路径 | Handler | 文件:行 | 功能 |
|---|---|---|---|---|
| GET  | `/miku/sessions` | `list_miku_sessions` | `dashboard/routes/miku_api.py:34` | 列出对话历史可分析的会话 |
| GET  | `/miku/session`  | `get_miku_session`   | `dashboard/routes/miku_api.py:35` | 取单会话原始消息 |
| POST | `/miku/analyze`  | `analyze_miku_mbti`  | `dashboard/routes/miku_api.py:36` | 对会话历史做 MBTI 倾向分析（LLM） |
| GET  | `/miku/result`   | `get_miku_mbti_result` | `dashboard/routes/miku_api.py:37` | 取已分析过的 MBTI 结果（带磁盘缓存） |
| GET  | `/miku/timeline` | `get_miku_timeline`  | `dashboard/routes/miku_api.py:38` | 按日/周/月聚合对话时间线（LLM 摘要） |
| GET  | `/model/scan`    | `scan_models`        | `dashboard/routes/model.py:33`     | 扫描本地 Ollama / vLLM 服务的可用模型 |
| POST | `/profile/knowledge/extract` | `extract_knowledge` | `dashboard/routes/profile.py:28` | 从对话历史抽取个人画像知识条目 |
| GET  | `/profile/knowledge/list`    | `list_knowledge`    | `dashboard/routes/profile.py:29` | 列出已抽取的知识条目 |
| GET  | `/profile/knowledge/stats`   | `knowledge_stats`   | `dashboard/routes/profile.py:30` | 知识条目统计（按类别） |

> 实际访问前缀均为 `/api`（如 `GET /api/miku/sessions`）。详细处理函数源码见 [diff_profile.md](diff_profile.md) 与 [diff_provider.md](diff_provider.md)。

### 5.2 YUNGE 删除的 33 个端点

| 方法 | 路径 | 来源文件:行 |
|---|---|---|
| GET  | `/apikey/list` | `api_key.py:20` |
| POST | `/apikey/create` | `api_key.py:21` |
| POST | `/apikey/revoke` | `api_key.py:22` |
| POST | `/apikey/delete` | `api_key.py:23` |
| GET  | `/backup/list` | `backup.py:111` |
| POST | `/backup/export` | `backup.py:112` |
| POST | `/backup/upload` | `backup.py:113` |
| POST | `/backup/upload/init` | `backup.py:114` |
| POST | `/backup/upload/chunk` | `backup.py:115` |
| POST | `/backup/upload/complete` | `backup.py:116` |
| POST | `/backup/upload/abort` | `backup.py:117` |
| POST | `/backup/check` | `backup.py:118` |
| POST | `/backup/import` | `backup.py:119` |
| GET  | `/backup/progress` | `backup.py:120` |
| GET  | `/backup/download` | `backup.py:121` |
| POST | `/backup/delete` | `backup.py:122` |
| POST | `/backup/rename` | `backup.py:123` |
| GET  | `/config/umo_abconf_routes` | `config.py:352` |
| POST | `/config/umo_abconf_route/update_all` | `config.py:353` |
| POST | `/config/umo_abconf_route/update` | `config.py:354` |
| POST | `/config/umo_abconf_route/delete` | `config.py:355` |
| GET  | `/skills/files` | `skills.py:83` |
| GET  | `/update/check` | `update.py:26` |
| GET  | `/update/releases` | `update.py:27` |
| POST | `/update/do` | `update.py:28` |
| POST | `/update/dashboard` | `update.py:29` |
| POST | `/update/pip-install` | `update.py:30` |
| POST | `/update/migration` | `update.py:31` |
| POST | `/v1/chat` | `open_api.py:44` |
| GET  | `/v1/chat/sessions` | `open_api.py:45` |
| GET  | `/v1/configs` | `open_api.py:46` |
| POST | `/v1/im/message` | `open_api.py:51` |
| GET  | `/v1/im/bots` | `open_api.py:52` |

### 5.3 共有的 154 个端点

handler 名称两边完全一致——意味着 YUNGE 没有改路由表层结构，只在端点的实现内部做了适配（这部分差异分散在 § 4 的 70 个修改文件中）。完整列表见 [routes_comparison.tsv](../diff_data/routes_comparison.tsv)。

---

## 6. "纯改名"227 个文件（不构成功能改动）

仅因 `astrbot → miku`（包名）/ `Miku/MIKU/Yunge/YUNGE` 等字符串替换而 differ。完整清单见 [renamed_only.txt](renamed_only.txt)。这一组**不进入后续模块文档的展开**。

---

## 7. 阅读建议

1. 关心**新增功能**（"YUNGE 自己加的"）：先读 [diff_profile.md](diff_profile.md) → [diff_knowledge_base.md](diff_knowledge_base.md) → [diff_provider.md](diff_provider.md) 的 model.py 部分
2. 关心**裁剪范围**（"YUNGE 砍掉了什么"）：读 [diff_config.md](diff_config.md) → [diff_platform.md](diff_platform.md) → [diff_dashboard_routes.md](diff_dashboard_routes.md)
3. 关心**核心 Pipeline 改动**：读 [diff_pipeline_agent.md](diff_pipeline_agent.md)

每个模块文档都含完整 diff、行号定位和上下文。

---

## 8. 数据可复现来源

本文档所有数字均来自机械分析，原始数据：

- `C:\Users\Larwance\.tmp_yunge_diff\diff_summary.txt`：`diff -rq` 原始输出（431 行）
- `C:\Users\Larwance\.tmp_yunge_diff\diff_real.tsv`：70 个真实修改文件 + 增减行数
- `C:\Users\Larwance\.tmp_yunge_diff\diff_renamed_only.txt`：227 个纯改名文件清单
- `C:\Users\Larwance\.tmp_yunge_diff\routes_comparison.tsv`：路由层全表

复现脚本：`C:\Users\Larwance\tmp_classify_diffs.py`、`tmp_extract_routes.py`。
