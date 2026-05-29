# Dashboard 路由（除 Profile 三新增外）— 完整差异

> 本文盘点除 [diff_profile.md](diff_profile.md) 中三个新增路由（miku_api / model / profile）之外的全部 dashboard 路由变化。

---

## 0. 文件清单

### 0.1 新增路由（3 个，详见 diff_profile.md / diff_provider.md）

| 路径 | 详见 |
|---|---|
| `dashboard/routes/miku_api.py` | [diff_profile.md §1](diff_profile.md) |
| `dashboard/routes/profile.py` | [diff_profile.md §2](diff_profile.md) |
| `dashboard/routes/model.py` | [diff_provider.md §4](diff_provider.md) |

### 0.2 删除路由（7 个）

| 路径 | 角色 |
|---|---|
| `dashboard/routes/api_key.py` | API Key 管理（dashboard 用户登录之外的程序化访问 token） |
| `dashboard/routes/backup.py` | 数据备份/恢复（zip 打包整个 data/） |
| `dashboard/routes/live_chat.py` | 实时对话（与 LLM 直推 WebSocket） |
| `dashboard/routes/open_api.py` | OpenAPI/Swagger 文档生成与第三方接入 |
| `dashboard/routes/subagent.py` | Sub-agent 编排管理 |
| `dashboard/routes/t2i.py` | T2I（text-to-image）模板与渲染配置 |
| `dashboard/routes/update.py` | 自动更新（检查上游版本 + 一键更新） |

### 0.3 修改路由（12 个，按改动量降序）

| 路径 | 真+/真- |
|---|---|
| `dashboard/routes/skills.py` | +11 / -233 |
| `dashboard/routes/platform.py` | +21 / -84 |
| `dashboard/routes/config.py` | +2 / -69 |
| `dashboard/routes/conversation.py` | +32 / 0 |
| `dashboard/routes/session_management.py` | +9 / -25 |
| `dashboard/routes/plugin.py` | +14 / -19 |
| `dashboard/routes/__init__.py` | +6 / -10 |
| `dashboard/routes/auth.py` | +6 / -9 |
| `dashboard/routes/route.py` | +9 / -2 |
| `dashboard/routes/stat.py` | +3 / -3 |
| `dashboard/routes/static_file.py` | +2 / -1 |
| `dashboard/routes/knowledge_base.py` | +2 / -2 |

---

## 1. dashboard/routes/__init__.py — 路由注册表（真+6/-10）

| 行 | 改动 |
|---|---|
| `__init__.py:1-21` | YUNGE 实际 import 列表（21 个） |
| `__init__.py:11` | 新增 `from .miku_api import MikuApiRoute` |
| `__init__.py:12` | 新增 `from .model import ModelRoute` |
| `__init__.py:15` | 新增 `from .profile import ProfileRoute` |
| `__init__.py:23-45` | `__all__` 列表对应同步 |
| AstrBot 原（删） | 删 `ApiKeyRoute / BackupRoute / LiveChatRoute / OpenApiRoute / SubAgentRoute / T2iRoute / UpdateRoute` 7 个 import + __all__ 项 |

---

## 2. dashboard/routes/route.py — 路由解析支持单/多方法（真+9/-2）

| 行 | 改动 |
|---|---|
| `route.py:32-46` | YUNGE 兼容 `routes` 表两种写法：`["GET", func]` 单方法 vs `[["GET", f1], ["POST", f2]]` 多方法 |
| `route.py:34` | 新增 `if len(definition) == 2 and isinstance(definition[0], str):` 判分支 |
| `route.py:35-37` | 单方法分支：`method, func = definition` 直接 `_add_rule` |
| `route.py:39-42` | 多方法分支：`for method, func in definition: _add_rule(...)` |
| `route.py:57` | 新增 `self.data = {}`（`Response` 类初始化新增字段） |

---

## 3. dashboard/routes/auth.py — 微改（真+6/-9）

| 行 | 改动 |
|---|---|
| `auth.py:11` | `class AuthRoute(Route)` |
| `auth.py:15-16` | 路由表保留 `/auth/login` + `/auth/account/edit` |
| AstrBot 原（删） | 删 `/auth/login_with_token`（API Key token 登录路径，配合 api_key.py 删除） |
| `auth.py:20` | `async def login` |
| `auth.py:48` | `async def edit_account` |
| `auth.py:80` | `def generate_jwt(self, username)` |

---

## 4. dashboard/routes/config.py — 删 UMO ABConf 路由（真+2/-69）

`config.py` 是 dashboard 最大的路由文件（1500+ 行），管理"AstrBot 配置 / Provider / Platform / 插件配置 / 上传配置文件"。YUNGE 删除了 UMO（unified message origin）配置路由的那一组。

| 行 | 改动 |
|---|---|
| `config.py:334` | `class ConfigRoute(Route)` |
| `config.py:346-378` | YUNGE 实际路由表（27 个端点） |
| AstrBot 原（删） | 删 4 个 `/config/umo_abconf_routes` 系列端点（GET 列表 / POST update_all / POST update / POST delete） |
| AstrBot 原（删） | 删对应 4 个方法：`get_uc_table / update_ucr_all / update_ucr / delete_ucr`（约 -65 行） |

> UMO ABConf 是 AstrBot 用来按"消息来源/会话"做配置覆盖的功能；YUNGE portable 单用户场景不需要。

---

## 5. dashboard/routes/platform.py — 精简平台路由（真+21/-84）

`platform.py` 原本是"统一 Webhook 入口"，给 lark/dingtalk/wecom 等用 webhook 回调的平台提供单一接收口。YUNGE 删除全部外部平台后，这个文件被完全重写。

| 行 | 改动 |
|---|---|
| `platform.py:1-9` | YUNGE 顶部 docstring："精简版 Platform 路由 — AstrBot AI 仅保留 WebChat，不提供外部平台管理 API" |
| `platform.py:8` | 仅 `from .route import Response, Route` |
| AstrBot 原 `platform.py:6-10`（删） | 删 `from quart import request / from astrbot.core import logger / core_lifecycle import / Platform import / RouteContext import` |
| `platform.py:12` | `class PlatformRoute(Route)` |
| `platform.py:14-16` | YUNGE `__init__` 简化为 `def __init__(self, context)`（不再注入 core_lifecycle） |
| `platform.py:18-` | `_register_routes`：仅保留 `GET /platform/stats`，返回空平台列表 |
| AstrBot 原 `platform.py:27-` | 整段 `_register_webhook_routes` + `unified_webhook_callback` 方法被删（约 56 行） |
| AstrBot 原 | 删 `_find_platform_by_uuid` helper |

---

## 6. dashboard/routes/skills.py — 删插件文件浏览（真+11/-233）

`skills.py` 原本除了"列出 skill" 还提供"插件源码文件浏览/编辑"的端点。YUNGE 把后者全删。

| 行 | 改动 |
|---|---|
| `skills.py` | `class SkillsRoute(Route)`，路由表保留 `/skills/list / /skills/all` 等基础端点 |
| AstrBot 原（删） | 删路由 `/skills/files`（GET）+ 配套 3 个方法 `list_skill_files / get_skill_file / update_skill_file`（约 -230 行） |

> 这一刀让 dashboard 不再支持"在浏览器里直接改插件源码"的能力；YUNGE 的定位是"用现成插件"而非"在 dashboard 里开发插件"。

---

## 7. dashboard/routes/conversation.py — 加 profile artifacts 清理（真+32/0）

| 行 | 改动 |
|---|---|
| `conversation.py:15` | `class ConversationRoute` |
| `conversation.py:24-37` | 路由表保持 6 个端点（list / detail / update / delete / update_history / export） |
| `conversation.py:42` | `async def list_conversations` |
| `conversation.py:107` | `async def get_conv_detail` |
| `conversation.py:144` | `async def upd_conv` |
| `conversation.py:176` | `async def del_conv` |
| `conversation.py:247-275` | YUNGE 新增 `_purge_profile_artifacts(self, cid)`：当用户在 dashboard 删除会话时，**级联清理 conversation_store 里同 cid 的对话历史**（避免 MBTI 缓存指向已删除会话） |
| `conversation.py:254-255` | `from miku.core.conversation_store import get_store; get_store().delete_sessions_by_cid(cid)` |
| `conversation.py:277` | `async def update_history` |
| `conversation.py:324` | `async def export_conversations` |

> 这是 Profile 模块"读端"的清理钩子。`del_conv` 内部调用 `_purge_profile_artifacts(cid)`。

---

## 8. dashboard/routes/plugin.py — 改插件市场源 + 删 DEMO_MODE（真+14/-19）

| 行 | 改动 |
|---|---|
| `plugin.py:16` | YUNGE `from miku.core import file_token_service, logger`（去掉 `DEMO_MODE` import） |
| `plugin.py:114` `:141` | 把 `if DEMO_MODE:` 改为 `if False:`（保留语句结构但永远不进） |
| AstrBot 原（删） | 删 `md5_url = "https://api.soulter.top/astrbot/plugins-md5"` 等上游官方插件市场源 |
| YUNGE（加） | 替换为内置 / 默认空列表 / 自定义源（具体由 `plugin_set` 配置决定） |

> `DEMO_MODE` 是 AstrBot 在线 demo 站点用的"只读"开关；YUNGE 永远不在 demo 模式。

---

## 9. dashboard/routes/session_management.py — 配套精简（真+9/-25）

| 行 | 改动 |
|---|---|
| `session_management.py` | YUNGE 保留 list / get / delete / clear 几个核心端点 |
| AstrBot 原（删） | 删平台多账号切换相关字段、子 agent 会话隔离相关字段（具体行号需在 `D:\AstrBot-master\...\routes\session_management.py` 查 `subagent` / `multi_account` 关键字定位） |

---

## 10. dashboard/routes/stat.py · static_file.py · knowledge_base.py — 微改

| 路径 | 真+/真- | 主要改动 |
|---|---|---|
| `stat.py` | +3 / -3 | 仅适配 metric 接口签名变化 |
| `static_file.py` | +2 / -1 | 静态文件根目录路径常量小调 |
| `knowledge_base.py` | +2 / -2 | 仅 `from astrbot.` → `from miku.` 改名 |

---

## 11. 一句话总结

dashboard 共 18 个路由文件，YUNGE 净增 3 (`miku_api/profile/model`)、净删 7 (`api_key/backup/live_chat/open_api/subagent/t2i/update`)、改 12（含 `__init__.py`）；功能裁剪集中在"删除外部 Webhook 入口、删除官方插件市场源、删除 UMO ABConf 多源配置、删除浏览器内编辑插件源码"四块，新增的核心是 `conversation.py:247-275` 级联清理对话历史的钩子。
