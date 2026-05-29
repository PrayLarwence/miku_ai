# 杂项 (Misc) — 完整差异

> 本文盘点除 [diff_profile / diff_knowledge_base / diff_provider / diff_pipeline_agent / diff_platform / diff_dashboard_routes / diff_star / diff_computer / diff_db / diff_config](INDEX.md) 外的全部剩余改动：utils / cli / metrics / builtin_stars / 顶层 init 等。

---

## 0. 文件清单

### 0.1 新增文件（6 个）

| 路径 | 行数 | 角色 |
|---|---|---|
| `core/runtime_bootstrap.py` | 56 | 便携版运行时引导（CA 证书 + 路径） |
| `builtin_stars/session_controller/main.py` | 115 | 内置插件：会话控制 |
| `core/agent/__init__.py` | 1 | 空 init（PyInstaller 兼容） |
| `core/message/__init__.py` | 1 | 空 init |
| `core/tools/__init__.py` | 1 | 空 init |
| `core/utils/__init__.py` | 1 | 空 init |

### 0.2 删除文件（11 个）

| 路径 | 行数 | 角色 |
|---|---|---|
| `core/backup/__init__.py` | 26 | 备份模块入口 |
| `core/backup/constants.py` | 85 | 备份常量 |
| `core/backup/exporter.py` | 477 | 备份导出 |
| `core/backup/importer.py` | 973 | 备份导入 |
| `core/persona_error_reply.py` | 86 | persona 自定义错误消息 |
| `core/subagent_orchestrator.py` | 104 | sub-agent 编排器 |
| `core/utils/t2i/__init__.py` | 16 | t2i 入口 |
| `core/utils/t2i/local_strategy.py` | 926 | 本地 Playwright 渲染 |
| `core/utils/t2i/network_strategy.py` | 221 | 远端 t2i 服务 |
| `core/utils/t2i/renderer.py` | 61 | t2i 渲染器 |
| `core/utils/t2i/template_manager.py` | 115 | t2i 模板管理 |

> 总删除：3090 行。

### 0.3 修改文件（按改动量降序）

| 路径 | 真+/真- |
|---|---|
| `core/utils/metrics.py` | +18 / -151 |
| `builtin_stars/builtin_commands/commands/conversation.py` | +4 / -128 |
| `builtin_stars/astrbot/main.py` | 0 / -107 |
| `core/tools/computer_tools/shell.py` | +2 / -57 |
| `core/utils/io.py` | +24 / -19 |
| `cli/utils/plugin.py` | +21 / -20 |
| `core/utils/migra_helper.py` | +7 / -27 |
| `core/utils/network_utils.py` | +4 / -11 |
| `core/tools/message_tools.py` | +2 / -12 |
| `cli/utils/basic.py` | +2 / -9 |
| `core/__init__.py` | 0 / -6 |
| `api/__init__.py` | +1 / -2 |
| `core/cron/manager.py` | +1 / -1 |
| `core/utils/astrbot_path.py` | +1 / -1 |
| `core/utils/core_constraints.py` | +1 / -1 |
| `core/utils/desktop_core_lock.py` | +1 / -1 |
| `core/utils/http_ssl.py` | +1 / -1 |
| `core/utils/pip_installer.py` | +1 / -1 |
| `core/utils/requirements_utils.py` | +1 / -1 |
| `core/agent/context/compressor.py` | +1 / -1 |
| `builtin_stars/builtin_commands/commands/help.py` | +1 / -1 |
| `api/all.py` | 0 / -1 |

---

## 1. core/runtime_bootstrap.py — 新增 56 行

| 行 | 角色 |
|---|---|
| `runtime_bootstrap.py:18-41` | `_try_patch_aiohttp_ssl_context`：在便携包里给 aiohttp 注入随包 CA bundle，避免 PyInstaller 打包后 SSL 握手失败 |
| `runtime_bootstrap.py:43-53` | `configure_runtime_ca_bundle(log_obj=None)`：探测 `data/certs/cacert.pem` 路径并设 `SSL_CERT_FILE` 环境变量 |
| `runtime_bootstrap.py:55-56` | `initialize_runtime_bootstrap(log_obj=None)`：组合上面两个；启动入口（`launcher` / 主进程）调用一次 |

> 这是"YUNGE 便携版能用 https"的关键钩子。pip 包形态运行时往往不需要它（系统证书可用）。

---

## 2. builtin_stars/session_controller/main.py — 新增 115 行

| 行 | 角色 |
|---|---|
| `session_controller/main.py:17` | `class Main(Star)`：内置插件，注册名 `session_controller` |
| `session_controller/main.py:20-22` | `__init__` |
| `session_controller/main.py:24-31` | `async def handle_session_control_agent(event)`：处理 `/new` `/end` 等会话切换指令 |
| `session_controller/main.py:33-` | `async def handle_empty_mention(event)`：用户只 @ 机器人不带文字时的回复（兜底欢迎语） |

---

## 3. builtin_stars/astrbot/main.py — 删 LTM 相关（真 0/-107）

`astrbot` 是 builtin_stars 里最核心的内置插件（聚合 LLM 调用 + LTM 长记忆）。YUNGE 删除 LTM（long-term memory）相关功能。

| 行 | 改动 |
|---|---|
| `astrbot/main.py:12` | `class Main(star.Star)` |
| `astrbot/main.py:13-19` | `__init__` |
| `astrbot/main.py:21` | `def ltm_enabled(event)`：（保留接口签名但内部 return False） |
| `astrbot/main.py:28-87` | `async def on_message(event)` |
| `astrbot/main.py:88-98` | `async def decorate_llm_req(...)` |
| `astrbot/main.py:99-109` | `async def record_llm_resp_to_ltm(...)`（保留签名作 noop） |
| `astrbot/main.py:110-` | `async def after_message_sent(event)` |
| AstrBot 原（删） | 删 LTM 实际写入 / 检索逻辑（约 100 行）：原本会把对话写到 `provider_ltm_settings` 配置的长期记忆 provider |

> 配套删除：`provider_ltm_settings` 在 default.py 仍保留（详见 [diff_config.md §1.3](diff_config.md)），但实际无写入。

---

## 4. core/utils/metrics.py — 改为本地 stub（真+18/-151）

`Metric` 类原本通过 `https://api.soulter.top/...` 上报指标到 AstrBot 官方分析后端。YUNGE 改为本地 stub。

| 行 | 改动 |
|---|---|
| `metrics.py:12` | `class Metric` |
| `metrics.py:16-42` | `def get_installation_id()`（保留：从 data/ 下读 `installation_id.txt`，没有就生成） |
| `metrics.py:43-` | `async def upload(**kwargs) -> None`：YUNGE 改为只 `logger.debug(...)` 记录，不发 HTTP 请求 |
| AstrBot 原 `metrics.py:` | 原本约 150 行：包含批量队列 / 后台 task / `aiohttp.post(URL, json=...)` / 错误重试等 |

> 可观察影响：`platform.py:141` 把 `Metric.upload` 改为 `await`（详见 [diff_platform.md §2](diff_platform.md)）；YUNGE 这边 `upload` 是即时 noop，所以不阻塞。

---

## 5. builtin_stars/builtin_commands/commands/conversation.py — 删大量历史命令（真+4/-128）

`/conversation` 这一组指令是 dashboard 没普及前给 IM 用户用的会话管理命令。

| 行 | 改动 |
|---|---|
| `conversation.py:13` | `class ConversationCommands` |
| `conversation.py:17` | `_get_current_persona_id(session_id)` |
| `conversation.py:31` | `async def reset(message)`（保留） |
| `conversation.py:92` | `async def stop(message)`（保留） |
| `conversation.py:112` | `async def new_conv(message)`（保留） |
| `conversation.py:130` | `async def stats(message)`（保留） |
| AstrBot 原（删） | 删 `/persona / /history / /clear / /list / /switch` 等 8 个会话管理命令（约 130 行） |

---

## 6. core/tools/computer_tools/shell.py — 配套裁剪（真+2/-57）

跟 [diff_computer.md](diff_computer.md) 配套：删除"后台命令"分支与 `delete_sandbox` 参数的传递。

---

## 7. core/utils/io.py — 路径与下载工具（真+24/-19）

| 行 | 改动 |
|---|---|
| 全文 | 增加便携模式下数据目录探测：优先用 `data/` 同目录的相对路径而非系统 `~/.astrbot`；下载工具的 `aiohttp` 客户端配套读 `runtime_bootstrap` 设置的 CA bundle |

---

## 8. cli/utils/plugin.py · cli/utils/basic.py — CLI 工具配套（共真+23/-29）

| 路径 | 主要改动 |
|---|---|
| `cli/utils/plugin.py` | 改插件市场源（与 [diff_star.md §6](diff_star.md) 一致），删 sub-agent 注册分支 |
| `cli/utils/basic.py` | 删官方更新检查与上游 GitHub release URL |

---

## 9. core/utils/migra_helper.py — 迁移助手（真+7/-27）

`migra_helper` 负责老数据库 schema 升级。YUNGE 删除：

- ApiKey 表的迁移分支（配合 [diff_db.md](diff_db.md)）
- t2i 模板缓存清理
- backup zip 旧目录清理

保留：基础 sqlite ALTER 与 KB 表 schema 升级。

---

## 10. core/utils/network_utils.py · core/tools/message_tools.py — 微改

| 路径 | 主要改动 |
|---|---|
| `core/utils/network_utils.py` (+4/-11) | 删第三方平台代理探测分支（QQ / 飞书 webhook 健康检查） |
| `core/tools/message_tools.py` (+2/-12) | 删 `SendImage` 工具中的 t2i 自动转图片分支 |

---

## 11. 顶层 1-行 cosmetic 改动

下面这些文件改动量都是 +1/-1，几乎都是把 logger 名 `"astrbot"` 改为 `"miku"`，或把 docstring 里的 `AstrBot` 改为 `AstrBot AI`：

`core/cron/manager.py` / `core/utils/astrbot_path.py` / `core/utils/core_constraints.py` / `core/utils/desktop_core_lock.py` / `core/utils/http_ssl.py` / `core/utils/pip_installer.py` / `core/utils/requirements_utils.py` / `core/agent/context/compressor.py` / `builtin_stars/builtin_commands/commands/help.py`

---

## 12. core/__init__.py · api/__init__.py · api/all.py — 顶层 init 微改

| 路径 | 改动 |
|---|---|
| `core/__init__.py` (0/-6) | 删除 `html_renderer` / `subagent_orchestrator` / `backup` 等模块的顶层 import（避免 ImportError） |
| `api/__init__.py` (+1/-2) | 配套调整对外暴露 |
| `api/all.py` (0/-1) | 删一个被裁掉的符号导出 |

---

## 13. 删除的 5 个独立模块

### 13.1 `core/backup/`（4 个文件，1561 行）

整个备份子系统被移除：

- `core/backup/__init__.py`（26 行）：包入口
- `core/backup/constants.py`（85 行）：备份格式版本、清单 schema
- `core/backup/exporter.py`（477 行）：导出 data/ 全量为 zip
- `core/backup/importer.py`（973 行）：从 zip 恢复 data/

> 配套：dashboard `routes/backup.py` 也删除（详见 [diff_dashboard_routes.md §0.2](diff_dashboard_routes.md)）。

### 13.2 `core/persona_error_reply.py`（86 行）

提供"persona 自定义错误消息"机制（在 LLM 调用失败时让 persona 用配置好的语气回复错误而不是抛 stacktrace）。详见 [diff_pipeline_agent.md §7.4](diff_pipeline_agent.md) 调用方删除位置。

### 13.3 `core/subagent_orchestrator.py`（104 行）

子代理编排器：根据配置把多个 sub-agent 注册成 handoff 工具。详见 [diff_pipeline_agent.md §1, §7](diff_pipeline_agent.md) 与 [diff_dashboard_routes.md §0.2](diff_dashboard_routes.md)。

### 13.4 `core/utils/t2i/`（5 个文件，1339 行）

文本转图片整个目录：

- `__init__.py`（16 行）
- `local_strategy.py`（926 行）：本地 Playwright 启动浏览器渲染
- `network_strategy.py`（221 行）：调用远端 t2i 服务
- `renderer.py`（61 行）：策略路由
- `template_manager.py`（115 行）：HTML 模板加载与版本

> 配套：dashboard `routes/t2i.py`、`core/star/base.py` 的 `text_to_image / html_render` 方法、`core/pipeline/result_decorate/stage.py` 的渲染触发都对应删除。

---

## 14. 一句话总结

新增 6 个文件（核心 `runtime_bootstrap.py:55` 与 `session_controller/main.py:17`）；删除 11 个文件（备份/persona_error_reply/subagent_orchestrator/t2i 共 3090 行）；改 23 个文件（净 -413 行），核心改动是 `metrics.py:43` Metric.upload 本地 stub 化、`builtin_stars/astrbot/main.py` 删 LTM 实际写入、`builtin_commands/conversation.py` 删 8 个 IM 命令。