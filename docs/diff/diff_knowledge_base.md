# 知识库 RAG — 完整差异

> 用户视角对应：dashboard 知识库页（外接 PDF/MD/TXT/URL 上传与检索）+ 对话主链路 system prompt 注入"个人画像 + 资料"两段。

---

## 0. 文件清单

| 路径 | 真+/真- | 状态 | 角色 |
|---|---|---|---|
| `core/tools/knowledge_base_tools.py` | +146 / -57 | 大改 | 拆为外接 KB + 个人 KB 两段检索 |
| `core/knowledge_base/kb_helper.py` | +11 / -5 | 改 | 构造函数从 ProviderManager → MemoryModelManager |
| `core/knowledge_base/kb_mgr.py` | +14 / -6 | 改 | 同上配套，4 处实例化全部更新 |
| `dashboard/routes/knowledge_base.py` | +2 / -2 | 微改 | 仅适配 |
| `core/knowledge_base/personal_kb.py` | 新增 291 行 | 详见 [diff_profile.md §4](diff_profile.md) |
| `core/knowledge_base/memory_model.py` | 新增 229 行 | 详见 [diff_profile.md §5](diff_profile.md) |

> 所有"真+/真-"已剔除 `astrbot ⇄ miku` 改名噪声。

---

## 1. core/tools/knowledge_base_tools.py — 拆分为四段（+146/-57）

### 1.1 顶部常量

| 行 | 角色 |
|---|---|
| `knowledge_base_tools.py:9` | 新增 `from miku.core.knowledge_base.personal_kb import PERSONAL_KB_NAME` |
| `knowledge_base_tools.py:13-15` | `_KNOWLEDGE_BASE_TOOL_CONFIG = {"kb_agentic_mode": True}`（保留） |
| `knowledge_base_tools.py:17-18` | 新增 `_PERSONAL_KB_TOP_K = 3` / `_PERSONAL_KB_FUSION_K = 10`（个人 KB 单独的检索预算） |

### 1.2 函数级拆分

AstrBot 原生：单一 `retrieve_knowledge_base` 一锅端（约 70 行）。
YUNGE 拆为：

| 行 | 函数 | 角色 |
|---|---|---|
| `knowledge_base_tools.py:21-26` | `check_all_kb` | 工具：检查列表里所有 KB 是否都为空（保留） |
| `knowledge_base_tools.py:28-61` | `_resolve_external_kb_names` | 解析会话级或全局级配置，返回 `(kb_names, top_k, top_k_fusion)` |
| `knowledge_base_tools.py:63-98` | `_retrieve_external_kb` | 外接资料库检索（PDF/MD/TXT/URL）；失败 log error 但不抛 |
| `knowledge_base_tools.py:100-146` | `_retrieve_personal_kb` | **新增**：从 `miku-personal` KB 检索用户画像；任何失败静默降级 |
| `knowledge_base_tools.py:148-176` | `retrieve_knowledge_base` | 对外入口：聚合"外接资料 + 个人画像"两段，按标签分隔后拼到 system prompt |
| `knowledge_base_tools.py:179` | `@builtin_tool` 装饰器（行号变了但保留） |
| `knowledge_base_tools.py:202` | `RetrieveKnowledgeBaseTool.call` 内部把上面对外入口包成工具调用 |

### 1.3 关键设计点

- **去重防双查**（`knowledge_base_tools.py:152`）：`kb_names=[n for n in kb_names if n != PERSONAL_KB_NAME]` 把 personal_kb 从外接列表里剔除，防止它两条路径都走一遍
- **prompt 标签**（`knowledge_base_tools.py:165-176`）：personal 段加 `[关于用户的相关信息（来自历史对话抽取，请作为事实参考）]`，外接段加 `[可能相关的资料（来自知识库检索）]`，两段空行分隔
- **个人 KB 短路条件**（`knowledge_base_tools.py:115-120`）：`init_error / doc_count==0 / chunk_count==0` 任一为真直接返 None，避免空查询
- **静默 vs 报错**：外接 KB 失败 `logger.error` 但不抛；个人 KB 失败仅 `logger.debug`（因为它是辅助上下文）

---

## 2. core/knowledge_base/kb_helper.py — 构造函数重构（真+11/-5）

| 行 | 改动 |
|---|---|
| `kb_helper.py:14`（删） | 删除 `from astrbot.core.provider.manager import ProviderManager` |
| `kb_helper.py:32-33`（加） | `if TYPE_CHECKING: from .memory_model import MemoryModelManager`（避免循环导入） |
| `kb_helper.py:121-128` | `__init__` 主参从 `provider_manager: ProviderManager` 改为 `memory_model_manager: "MemoryModelManager"`；新增可选参 `provider_manager: "object" = None` |
| `kb_helper.py:132` | `self.memory_model_mgr = memory_model_manager` |
| `kb_helper.py:133` | `self.prov_mgr = provider_manager  # for LLM-based cleaning features` |
| `kb_helper.py:151` | embedding provider 查找：`prov_mgr.get_provider_by_id` → `memory_model_mgr.get_provider_by_id` |
| `kb_helper.py:163` | rerank 同上 |
| `kb_helper.py:609-612` | URL 上传入口：新增 `if self.prov_mgr is None: raise ValueError(...)`，老调用方不传 prov_mgr 时 fail-fast |
| `kb_helper.py:707` | LLM 清洗用的 provider 仍走 `self.prov_mgr.get_provider_by_id`（这条路保留 ProviderManager 依赖） |

**净意图**：embedding/rerank 这种 KB 自身需要的模型走专门的 `MemoryModelManager`；只有 URL 上传那套需要 LLM 清洗时才回头用 `ProviderManager`，所以保留为可选参。

---

## 3. core/knowledge_base/kb_mgr.py — 配套调整（真+14/-6）

`KBManager` 持有的字段以及每次实例化 `KBHelper` 时都要把两个 manager 都传过去。

| 行 | 改动 |
|---|---|
| `kb_mgr.py:2`（加） | `from typing import TYPE_CHECKING` |
| `kb_mgr.py:5`（删） | 删除 `from astrbot.core.provider.manager import ProviderManager` |
| `kb_mgr.py:17-18`（加） | `if TYPE_CHECKING: from .memory_model import MemoryModelManager` |
| `kb_mgr.py:25` | `class KnowledgeBaseManager` 不变 |
| `kb_mgr.py:29-37` | `__init__` 主参 `memory_model_manager`，副参 `provider_manager: "object" = None` |
| `kb_mgr.py:35-36` | 设两个属性：`self.memory_model_manager` + `self.provider_manager` |
| `kb_mgr.py:75-83` | 第 1 处实例化 KBHelper（`load_kbs` 路径），两个 manager 都传 |
| `kb_mgr.py:126-134` | 第 2 处（`reload_kb` 路径） |
| `kb_mgr.py:229-237` | 第 3 处（`create_kb` 路径） |

> 调用点：`core_lifecycle.py:151-155` 实例化 `KnowledgeBaseManager` 时把两个 manager 都注入。详见 `diff_pipeline_agent.md` §1.4。

---

## 4. dashboard/routes/knowledge_base.py — 微改（真+2/-2）

| 行 | 改动 |
|---|---|
| 全文 | 仅 `from astrbot.` → `from miku.` 等改名调整，无功能行为差异 |

---

## 5. 一句话总结

外接 KB / 个人 KB 双轨道由 `knowledge_base_tools.py:148-176` 拼装；embedding/rerank 解耦由 `kb_helper.py:121-133` + `kb_mgr.py:29-37` 完成；不动原生 RAG 引擎（chunking / FAISS / SQLite / parsers / sparse_retriever）。
