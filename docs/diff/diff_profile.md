# Profile / MBTI / 对话画像 — 完整差异

> 用户视角对应：dashboard 上的 **Profile** 页面 / **Miku 对话分析** 页面（MBTI、时间线、个人知识抽取）。

所有路径如未特别说明，**YUNGE** 侧基于 `E:\YUNGE-portable\miku\`，**AstrBot** 侧基于 `D:\AstrBot-master\AstrBot-master\astrbot\`。

---

## 0. 文件清单

| # | 路径 | 总行数 | 状态 | 角色 |
|---|---|---|---|---|
| 1 | `dashboard/routes/miku_api.py` | 381 | 新增 | Miku 五端点（sessions/session/analyze/result/timeline） |
| 2 | `dashboard/routes/profile.py` | 168 | 新增 | Profile 三端点（extract/list/stats） |
| 3 | `core/conversation_store.py` | 237 | 新增 | 对话 SQLite 持久化层 |
| 4 | `core/knowledge_base/personal_kb.py` | 291 | 新增 | "对话画像" 双写 KB |
| 5 | `core/knowledge_base/memory_model.py` | 229 | 新增 | embedding/rerank 子管理器 |
| 6 | `dashboard/routes/__init__.py` | 45 | 改 | 路由表注册新增三项 |
| 7 | `dashboard/server.py` | 374 | 改 | 路由实例化注入 |

---

## 1. dashboard/routes/miku_api.py — 新增（381 行）

| 行 | 角色 |
|---|---|
| `miku_api.py:21-31` | `MikuApiRoute.__init__` 注入 db / core_lifecycle |
| `miku_api.py:33-39` | 路由表，5 个端点 |
| `miku_api.py:48-50` | `_mbti_path(session_id)`：MBTI 缓存文件路径 helper |
| `miku_api.py:52-60` | `_load_mbti_cache(session_id)`：读缓存 |
| `miku_api.py:62-69` | `_save_mbti_cache(session_id, result)`：写缓存 |
| `miku_api.py:71-83` | `GET /miku/sessions` ← `list_miku_sessions`：从 conversation_store 列出所有会话 |
| `miku_api.py:85-98` | `GET /miku/session?session_id=...` ← `get_miku_session`：单会话历史 |
| `miku_api.py:100-200` | `POST /miku/analyze` ← `analyze_miku_mbti`：跑 MBTI prompt → LLM → 落 JSON 缓存 |
| `miku_api.py:202-216` | `GET /miku/result?session_id=...` ← `get_miku_mbti_result`：读 MBTI 缓存 |
| `miku_api.py:218-219` | `_timeline_cache_path(granularity)`：时间线缓存路径 |
| `miku_api.py:221-229` | `_load_timeline_summary_cache` |
| `miku_api.py:231-236` | `_save_timeline_summary_cache` |
| `miku_api.py:238-259` | `_generate_slot_summary(label, sample)`：单时间槽 → LLM 摘要 |
| `miku_api.py:261-381` | `GET /miku/timeline?granularity=day\|week\|month` ← `get_miku_timeline`：按时间槽分桶 + 每桶生成摘要 |

**MBTI 缓存机制**（`miku_api.py:48-69`）：每次 analyze 都把结果按 `session_id` 落到 `data/miku_mbti_cache/<session_id>.json`，下次 GET /miku/result 直接命中缓存，避免重复跑 LLM。

**时间线缓存**（`miku_api.py:218-236`）：按 `granularity` 维度落缓存，键是 `slot_label`（例如 `2026-05-28`、`2026-W22`、`2026-05`）；同一 slot 内对话有更新才重算。

---

## 2. dashboard/routes/profile.py — 新增（168 行）

| 行 | 角色 |
|---|---|
| `profile.py:21-31` | `ProfileRoute.__init__` 注入 core_lifecycle，初始化 PersonalKnowledgeStore |
| `profile.py:27-31` | 路由表，3 个端点 |
| `profile.py:41-96` | `POST /profile/knowledge/extract` ← `extract_knowledge`：从指定会话 / 全量历史抽取知识 |
| `profile.py:98-116` | `GET /profile/knowledge/list?category=...&query=...` ← `list_knowledge` |
| `profile.py:118-131` | `GET /profile/knowledge/stats` ← `knowledge_stats`：分类统计 + 最后抽取时间 |
| `profile.py:133-147` | `_gather_session_history(session_id)`：从 conversation_store 拉单 session 全文 |
| `profile.py:149-167` | `_gather_recent_history()`：跨 session 拉最近 N 条 |

`extract_knowledge` 调用链（`profile.py:41-96`）：
1. 拉对话历史（`_gather_session_history` 或 `_gather_recent_history`）
2. 用 `EXTRACT_PROMPT`（在 `personal_kb.py:33`）格式化喂给 LLM
3. 返回的 JSON 用 `PersonalKnowledgeStore.parse_response`（`personal_kb.py:200`）解析
4. 每条调用 `save_entry`（`personal_kb.py:96`）双写 knowledge.db + miku-personal KB

---

## 3. core/conversation_store.py — 新增（237 行，零依赖 SQLite 持久层）

| 行 | 角色 |
|---|---|
| `conversation_store.py:28-34` | `__init__(db_path=None)`：默认落到 `data/conversation_history.db` |
| `conversation_store.py:36-41` | `_get_conn`：WAL + synchronous=NORMAL |
| `conversation_store.py:43-63` | `_init_db`：建 `messages` 表 + 3 个索引（session_id / role / created_at） |
| `conversation_store.py:66-86` | `save(session_id, role, content, user_id, user_name)`：线程安全写入 |
| `conversation_store.py:89-99` | `get_history(session_id, limit=100)`：按 id desc 取 N 条再反转 |
| `conversation_store.py:101-111` | `search(keyword, limit=50)`：LIKE 全文搜 |
| `conversation_store.py:113-115` | `get_recent_context(session_id, n=20)`：包装 get_history，给 LLM 上下文用 |
| `conversation_store.py:117-128` | `count(session_id=None)` |
| `conversation_store.py:130-141` | `list_sessions()`：按最近活跃排序 |
| `conversation_store.py:143-154` | `get_session_display_name(session_id)`：拿最早消息时间作为显示名 |
| `conversation_store.py:156-166` | `export_session(session_id)`：单 session 全量导出 |
| `conversation_store.py:170-181` | `delete_session(session_id)` |
| `conversation_store.py:183-196` | `delete_sessions_by_cid(cid)`：按 webchat 会话 cid 模糊删（适配 `webchat!user!cid` 格式） |
| `conversation_store.py:198-203` | `vacuum()` |
| `conversation_store.py:205-225` | `stats()`：返回 total/user/assistant/sessions 计数 |
| `conversation_store.py:230-237` | `get_store(db_path=None)` 全局单例工厂 |

**写入端**：scheduler 自动写（详见 `diff_pipeline_agent.md` §2）；不需要业务代码主动调。

---

## 4. core/knowledge_base/personal_kb.py — 新增（291 行，对话画像知识库）

| 行 | 角色 |
|---|---|
| `personal_kb.py:18-20` | KB 名常量 `miku-personal` / 描述 / emoji |
| `personal_kb.py:22-31` | `CATEGORIES` 八分类（interest/project/tech/personality/learning/preference/concept/relationship） |
| `personal_kb.py:33-46` | `EXTRACT_PROMPT` LLM 抽取模板 |
| `personal_kb.py:55-59` | `__init__` 持有 kb_manager + provider_manager + knowledge.db 路径 |
| `personal_kb.py:63-92` | `_init_db`：建 `knowledge` 主表 + `extraction_log` 日志表 + ALTER 兼容老表 `kb_doc_id` |
| `personal_kb.py:96-128` | `save_entry(topic, content, ...)`：upsert knowledge.db + 调 `_sync_to_kb` 同步原生 KB |
| `personal_kb.py:130-160` | `_sync_to_kb`：调 `kb_helper.upload_document(pre_chunked_text=[...])` 落向量索引，把 `doc_id` 回写 knowledge.db |
| `personal_kb.py:162-181` | `_ensure_personal_kb`：lazy 创建 `miku-personal` KB；没 embedding provider 就返回 None |
| `personal_kb.py:183-195` | `_pick_embedding_provider_id`：从 `kb_manager.memory_model_manager` 取第一个可用的 |
| `personal_kb.py:200-210` | `parse_response(raw_text)`：JSON 解析（去掉 \`\`\` 围栏，失败返 []） |
| `personal_kb.py:212-219` | `log_extraction(session_id, count)`：写 extraction_log |
| `personal_kb.py:223-243` | `list_entries(category, query, limit)`：knowledge.db 关键字 + 分类过滤 |
| `personal_kb.py:245-277` | `semantic_search(query, top_k=5)`：先走原生 KB 向量检索，按 doc_id 反查 knowledge.db 补结构化字段 |
| `personal_kb.py:279-291` | `stats()`：返回总数 / 分类计数 / 最后抽取时间 |

**降级策略**：embedding provider 不可用时（`personal_kb.py:166-170`）直接 return None，只写 knowledge.db 跳过向量化。

---

## 5. core/knowledge_base/memory_model.py — 新增（229 行，embedding/rerank 子管理器）

| 行 | 角色 |
|---|---|
| `memory_model.py:22-23` | `HasInitialize` Protocol（鸭子类型，判断 provider 是否需要 await initialize） |
| `memory_model.py:26-43` | `MemoryModelManager.__init__`：从 AstrBotConfig 解析出 provider/sources/settings 三段配置；持有 `embedding_provider_insts / rerank_provider_insts / inst_map` 三态 |
| `memory_model.py:48-74` | `dynamic_import_provider(type)`：白名单仅 6 类（openai_embedding / gemini_embedding / vllm_rerank / xinference_rerank / bailian_rerank / nvidia_rerank） |
| `memory_model.py:78-91` | `get_merged_provider_config`：合并 provider_source 模板和具体 provider 配置 |
| `memory_model.py:95-107` | `initialize()`：扫所有 enabled 的 EMBEDDING/RERANK 类 provider 跑 load_provider |
| `memory_model.py:109-185` | `load_provider(config)`：动态 import + 类型校验 + 实例化 + 注册到对应列表与 inst_map |
| `memory_model.py:187-191` | `reload(config)` |
| `memory_model.py:193-208` | `terminate_provider(provider_id)`：从列表移除 + 调实例的 terminate |
| `memory_model.py:210-215` | `terminate()`：批量终止 |
| `memory_model.py:219-223` | `get_provider_by_id(provider_id)` |
| `memory_model.py:225-228` | `get_all_embedding_providers()` / `get_all_rerank_providers()` |

**剥离意图**：上游 `provider/manager.py` 的 ProviderManager 啥都管，YUNGE 把 embedding/rerank 这一类拆出来交给 KB 模块自管。详见 `diff_provider.md` §1 和 `diff_pipeline_agent.md` §1.4。

---

## 6. dashboard/routes/__init__.py — 路由汇总改写

| 行 | 改动 |
|---|---|
| `__init__.py:1` | 删除 `from .api_key import ApiKeyRoute` |
| `__init__.py:1-2` | 删除 `from .backup import BackupRoute` |
| 同位 | 删除 `from .open_api import OpenApiRoute` |
| 同位 | 删除 `from .subagent import SubAgentRoute` |
| 同位 | 删除 `from .update import UpdateRoute` |
| `__init__.py:11` | 新增 `from .miku_api import MikuApiRoute` |
| `__init__.py:12` | 新增 `from .model import ModelRoute` |
| `__init__.py:14` | 新增 `from .profile import ProfileRoute` |
| `__init__.py:18-45` | `__all__` 同步增删 |

**对比基线**：AstrBot 原版 `dashboard/routes/__init__.py:1-49`（49 行），YUNGE 缩到 45 行。

---

## 7. dashboard/server.py — 路由实例化注入

| YUNGE 行 | 改动 |
|---|---|
| `server.py:26` | `from .routes.miku_api import MikuApiRoute` |
| `server.py:27` | `from .routes.model import ModelRoute` |
| `server.py:29` | `from .routes.profile import ProfileRoute` |
| `server.py:113` | 新增 `self.profile_route = ProfileRoute(self.context, core_lifecycle)` |
| `server.py:123` | `PlatformRoute(self.context)` 改签名（去掉 core_lifecycle 参数） |
| `server.py:124` | 新增 `self.model_route = ModelRoute(self.context)` |
| `server.py:125` | 新增 `self.miku_api_route = MikuApiRoute(self.context, db, core_lifecycle)` |

| AstrBot 原行 | 已被删除 |
|---|---|
| `server.py:100-104` | `self.ur = UpdateRoute(...)` |
| `server.py:116` | `self.api_key_route = ApiKeyRoute(self.context, db)` |
| `server.py:118-123` | `self.open_api_route = OpenApiRoute(...)` |
| `server.py:126` | `self.subagent_route = SubAgentRoute(...)` |
| `server.py:137` | `self.t2i_route = T2iRoute(...)` |
| `server.py:140` | `self.backup_route = BackupRoute(...)` |
| `server.py:141` | `self.live_chat_route = LiveChatRoute(...)` |
| `server.py:33` (import) | `from .routes.t2i import T2iRoute` |
| `server.py:28` (import) | `from .routes.backup import BackupRoute` |
| `server.py:34` (import) | `from .routes.subagent import SubAgentRoute` |

---

## 8. 上下游耦合速查

| 来源 | 调用方向 | 目标 |
|---|---|---|
| `miku_api.py` | `from miku.core.conversation_store import get_store` | conversation_store 单例 |
| `miku_api.py` | `provider_manager.get_using_provider(ProviderType.CHAT_COMPLETION)` | 找当前默认 chat provider 跑 MBTI prompt |
| `profile.py` | `from miku.core.knowledge_base.personal_kb import PersonalKnowledgeStore, EXTRACT_PROMPT` | 知识抽取入口 |
| `profile.py` | `core_lifecycle.kb_manager` | 注入 PersonalKnowledgeStore |
| `personal_kb.py` | `kb_manager.get_kb_by_name / create_kb / retrieve` | 走原生 KB 引擎（详见 `diff_knowledge_base.md`） |
| `personal_kb.py:184` | `kb_manager.memory_model_manager.get_all_embedding_providers()` | memory_model.py |
| `scheduler.py` | `get_store().save(...)` 入口 + 出口 hook | conversation_store 写入端（详见 `diff_pipeline_agent.md` §2） |

---

## 9. 一句话总结

新增 5 个文件共 1306 行，从写入端（scheduler hook）到存储（conversation_store + knowledge.db + miku-personal KB）到上层端点（8 个 API）打通"对话画像"全链路，不动 AstrBot 主对话路径。
