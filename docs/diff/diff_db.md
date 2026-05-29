# DB / 持久化 — 完整差异

> AstrBot 用 sqlite + sqlmodel 做主元数据存储。YUNGE 这一层的改动只有一件事：删除 `ApiKey` 表与对应的 7 个 CRUD 方法（配合 [diff_dashboard_routes.md §0.2](diff_dashboard_routes.md) 删除 `dashboard/routes/api_key.py`）。

---

## 0. 文件清单

| 路径 | 真+/真- | 状态 |
|---|---|---|
| `core/db/po.py` | 0 / -37 | 改 |
| `core/db/__init__.py` | 0 / -50 | 改 |
| `core/db/sqlite.py` | 0 / -95 | 改 |

> 三个文件总行数：AstrBot 3538 → YUNGE 3356，共减 182 行（CRLF/LF 影响已剔除）。

---

## 1. core/db/po.py — 删 ApiKey 表定义（真 0/-37）

| 行 | 改动 |
|---|---|
| `po.py:9` | `class TimestampMixin(SQLModel)` 保留 |
| AstrBot 原 `po.py:348-384`（删） | 删整个 `class ApiKey(TimestampMixin, SQLModel, table=True)` 类（约 37 行）：包含 `id / name / key_hash / created_at / last_used_at / revoked` 等字段 |

---

## 2. core/db/__init__.py — 删 BaseDatabase 抽象方法（真 0/-50）

`BaseDatabase` 是 sqlite/postgres 等具体实现的抽象基类，定义所有 async 方法签名。YUNGE 把 ApiKey 那一组 7 个方法的抽象签名删掉。

| 行 | 改动 |
|---|---|
| `__init__.py:32` | `class BaseDatabase(abc.ABC)` |
| AstrBot 原 `__init__.py:356-368`（删） | 删 `async def create_api_key(...)` 抽象方法 |
| AstrBot 原 `__init__.py:369-373`（删） | 删 `async def list_api_keys(self) -> list[ApiKey]` |
| AstrBot 原 `__init__.py:374-378`（删） | 删 `async def get_api_key_by_id(self, key_id) -> ApiKey \| None` |
| AstrBot 原 `__init__.py:379-383`（删） | 删 `async def get_active_api_key_by_hash(self, key_hash) -> ApiKey \| None` |
| AstrBot 原 `__init__.py:384-388`（删） | 删 `async def touch_api_key(self, key_id)` |
| AstrBot 原 `__init__.py:389-396`（删） | 删 `async def revoke_api_key(self, key_id) -> bool` |
| AstrBot 原 `__init__.py:397-401`（删） | 删 `async def delete_api_key(self, key_id) -> bool` |
| 全文 | `from .po import ApiKey` import 删除 |

---

## 3. core/db/sqlite.py — 删 SQLiteDatabase 实现（真 0/-95）

| 行 | 改动 |
|---|---|
| `sqlite.py:43` | `class SQLiteDatabase(BaseDatabase)` |
| AstrBot 原 `sqlite.py:823-848`（删） | 删 `async def create_api_key(...)` 实现（约 26 行） |
| AstrBot 原 `sqlite.py:849-857`（删） | 删 `async def list_api_keys` 实现 |
| AstrBot 原 `sqlite.py:858-879`（删） | 删 `async def get_api_key_by_id` 实现（含 `get_active_api_key_by_hash` 内联，约 22 行） |
| AstrBot 原 `sqlite.py:880-890`（删） | 删 `async def touch_api_key` 实现 |
| AstrBot 原 `sqlite.py:891-903`（删） | 删 `async def revoke_api_key` 实现 |
| AstrBot 原 `sqlite.py:904-917`（删） | 删 `async def delete_api_key` 实现 |
| 表创建处 | `ApiKey.metadata.create_all(...)` 调用配套删除（YUNGE 不再创建 api_keys 表） |

---

## 4. 副作用与迁移注意

- **老 yaml 数据库无破坏**：YUNGE 启动时不会主动 drop `api_keys` 表；旧表会保留但无代码访问，相当于死表。
- **dashboard 路由对应**：`dashboard/routes/api_key.py` 已整个删除（见 [diff_dashboard_routes.md §0.2](diff_dashboard_routes.md)）。前端如果还残留"API Key"菜单项，请求会 404。
- **登录路径影响**：原 `auth.py` 的 `/auth/login_with_token` 端点也一并删除（见 [diff_dashboard_routes.md §3](diff_dashboard_routes.md)）。如果之前依赖 token 登录的脚本会失效，改用密码登录或重新发 JWT。

---

## 5. 一句话总结

`po.py:348-384` 删 `class ApiKey`；`__init__.py:356-401` 删 7 个抽象方法签名；`sqlite.py:823-917` 删对应实现。共减 182 行，无新增，配套删除 dashboard `api_key.py` + `auth.py` 的 token 登录路由。
