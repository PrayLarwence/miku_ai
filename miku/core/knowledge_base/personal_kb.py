"""个人知识库 — 对话历史抽取入口

设计：
- knowledge.db 作为元数据库，存 topic / content / category / confidence / source_session
- 原生 KB（kb_name=miku-personal）作为向量索引层，走 kb_helper.upload_document(pre_chunked_text=[...])
- AI 对话检索通过原生 retrieve；profile 页结构化展示仍直接查 knowledge.db
- 没有 embedding provider 时降级：只写 knowledge.db，跳过向量化
"""
import json
import sqlite3
from datetime import datetime
from pathlib import Path
from typing import Any

from miku.core import logger
from miku.core.utils.astrbot_path import get_astrbot_data_path

PERSONAL_KB_NAME = "miku-personal"
PERSONAL_KB_DESCRIPTION = "对话历史自动抽取的个人知识条目（Miku 课设特色）"
PERSONAL_KB_EMOJI = "🪄"

CATEGORIES = {
    "interest": "兴趣领域",
    "project": "项目追踪",
    "tech": "技术栈",
    "personality": "个性特征",
    "learning": "学习路径",
    "preference": "偏好习惯",
    "concept": "概念术语",
    "relationship": "人际关系",
}

EXTRACT_PROMPT = """你是一个知识提取助手。请分析以下用户与AI的对话片段，提取有价值的结构化知识。

请按 JSON 格式输出提取到的知识条目，每个条目包含：
- topic: 知识主题（简短标题）
- content: 知识内容（1-3句话概括）
- category: 分类（interest/project/tech/personality/learning/preference/concept/relationship）
- confidence: 置信度（0.0-1.0）

只提取有足够证据支撑的知识，不要编造。如果某段对话没有可提取的知识，返回空数组。

对话内容：
{conversation}

请输出 JSON 数组："""


class PersonalKnowledgeStore:
    """对话历史抽取的个人知识仓库。

    knowledge.db 存结构化元数据（前端展示）；同名条目写入 miku-personal KB 提供向量检索。
    """

    def __init__(self, kb_manager: Any, provider_manager: Any) -> None:
        self.kb_manager = kb_manager
        self.provider_manager = provider_manager
        self.knowledge_db_path = Path(get_astrbot_data_path()) / "knowledge.db"
        self._init_db()

    # ─── 元数据库 ──────────────────────────────────────────

    def _init_db(self) -> None:
        conn = sqlite3.connect(str(self.knowledge_db_path))
        conn.execute("""
            CREATE TABLE IF NOT EXISTS knowledge (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                topic TEXT NOT NULL,
                content TEXT NOT NULL,
                category TEXT NOT NULL DEFAULT 'interest',
                confidence REAL DEFAULT 0.5,
                source_session TEXT DEFAULT '',
                kb_doc_id TEXT DEFAULT '',
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL,
                is_active INTEGER DEFAULT 1
            )
        """)
        conn.execute("""
            CREATE TABLE IF NOT EXISTS extraction_log (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                session_id TEXT,
                extracted_count INTEGER DEFAULT 0,
                created_at TEXT NOT NULL,
                status TEXT DEFAULT 'success'
            )
        """)
        existing_cols = {row[1] for row in conn.execute("PRAGMA table_info(knowledge)").fetchall()}
        if "kb_doc_id" not in existing_cols:
            conn.execute("ALTER TABLE knowledge ADD COLUMN kb_doc_id TEXT DEFAULT ''")
        conn.commit()
        conn.close()

    # ─── 写入：双写 knowledge.db + 原生 KB ──────────────────

    async def save_entry(
        self,
        topic: str,
        content: str,
        category: str = "interest",
        confidence: float = 0.5,
        source_session: str = "",
    ) -> int:
        conn = sqlite3.connect(str(self.knowledge_db_path))
        now = datetime.now().isoformat()
        existing = conn.execute(
            "SELECT id FROM knowledge WHERE topic = ? AND category = ?",
            (topic, category),
        ).fetchone()
        if existing:
            conn.execute(
                "UPDATE knowledge SET content = ?, confidence = ?, updated_at = ?, is_active = 1 WHERE id = ?",
                (content, confidence, now, existing[0]),
            )
            entry_id = existing[0]
        else:
            cursor = conn.execute(
                """INSERT INTO knowledge (topic, content, category, confidence,
                   source_session, created_at, updated_at)
                   VALUES (?, ?, ?, ?, ?, ?, ?)""",
                (topic, content, category, confidence, source_session, now, now),
            )
            entry_id = cursor.lastrowid
        conn.commit()
        conn.close()

        await self._sync_to_kb(entry_id, topic, content, category, source_session)
        return entry_id

    async def _sync_to_kb(
        self,
        entry_id: int,
        topic: str,
        content: str,
        category: str,
        source_session: str,
    ) -> None:
        kb_helper = await self._ensure_personal_kb()
        if kb_helper is None:
            return
        cat_label = CATEGORIES.get(category, category)
        chunk_text = f"[{cat_label}] {topic}: {content}"
        try:
            doc = await kb_helper.upload_document(
                file_name=f"miku-personal-{entry_id}",
                file_content=None,
                file_type="txt",
                pre_chunked_text=[chunk_text],
            )
        except Exception as e:
            logger.warning(f"个人知识同步到原生 KB 失败（非致命）: {e}")
            return

        conn = sqlite3.connect(str(self.knowledge_db_path))
        conn.execute(
            "UPDATE knowledge SET kb_doc_id = ? WHERE id = ?",
            (doc.doc_id, entry_id),
        )
        conn.commit()
        conn.close()

    async def _ensure_personal_kb(self) -> Any:
        kb = await self.kb_manager.get_kb_by_name(PERSONAL_KB_NAME)
        if kb is not None:
            return kb if not kb.init_error else None

        embedding_provider_id = self._pick_embedding_provider_id()
        if not embedding_provider_id:
            logger.info("没有可用的 embedding provider，个人知识仅写入 knowledge.db，跳过向量索引")
            return None

        try:
            return await self.kb_manager.create_kb(
                kb_name=PERSONAL_KB_NAME,
                description=PERSONAL_KB_DESCRIPTION,
                emoji=PERSONAL_KB_EMOJI,
                embedding_provider_id=embedding_provider_id,
            )
        except Exception as e:
            logger.warning(f"创建个人知识库失败（非致命）: {e}")
            return None

    def _pick_embedding_provider_id(self) -> str | None:
        mm = getattr(self.kb_manager, "memory_model_manager", None)
        if mm is None:
            return None
        try:
            providers = mm.get_all_embedding_providers()
        except Exception:
            providers = []
        for p in providers:
            pid = getattr(p, "provider_id", None) or getattr(getattr(p, "meta", None), "id", None)
            if pid:
                return pid
        return None

    # ─── LLM 抽取 ──────────────────────────────────────────

    @staticmethod
    def parse_response(raw_text: str) -> list[dict]:
        text = raw_text.strip()
        if text.startswith("```"):
            lines = text.split("\n")
            text = "\n".join(lines[1:-1])
        try:
            data = json.loads(text)
            return data if isinstance(data, list) else []
        except json.JSONDecodeError:
            logger.warning(f"知识 JSON 解析失败: {text[:200]}")
            return []

    def log_extraction(self, session_id: str | None, count: int) -> None:
        conn = sqlite3.connect(str(self.knowledge_db_path))
        conn.execute(
            "INSERT INTO extraction_log (session_id, extracted_count, created_at) VALUES (?, ?, ?)",
            (session_id or "all", count, datetime.now().isoformat()),
        )
        conn.commit()
        conn.close()

    # ─── 读取：仍走 knowledge.db（结构化字段） ─────────────

    def list_entries(
        self,
        category: str | None = None,
        query: str | None = None,
        limit: int = 20,
    ) -> list[dict]:
        conn = sqlite3.connect(str(self.knowledge_db_path))
        conn.row_factory = sqlite3.Row
        sql = "SELECT * FROM knowledge WHERE is_active = 1"
        params: list[Any] = []
        if category:
            sql += " AND category = ?"
            params.append(category)
        if query:
            sql += " AND (topic LIKE ? OR content LIKE ?)"
            params.extend([f"%{query}%", f"%{query}%"])
        sql += " ORDER BY confidence DESC, updated_at DESC LIMIT ?"
        params.append(limit)
        rows = conn.execute(sql, params).fetchall()
        conn.close()
        return [dict(r) for r in rows]

    async def semantic_search(self, query: str, top_k: int = 5) -> list[dict]:
        """语义检索：先走原生 KB，按 file_name 反查 knowledge.db 补全结构化字段。"""
        if not query:
            return []
        try:
            results = await self.kb_manager.retrieve(
                query=query,
                kb_names=[PERSONAL_KB_NAME],
                top_m_final=top_k,
            )
        except Exception as e:
            logger.warning(f"个人知识语义检索失败，降级关键词查询: {e}")
            return self.list_entries(query=query, limit=top_k)

        hits = (results or {}).get("results", []) if isinstance(results, dict) else []
        if not hits:
            return self.list_entries(query=query, limit=top_k)

        doc_ids = [getattr(r, "doc_id", None) for r in hits]
        doc_ids = [d for d in doc_ids if d]
        if not doc_ids:
            return self.list_entries(query=query, limit=top_k)

        conn = sqlite3.connect(str(self.knowledge_db_path))
        conn.row_factory = sqlite3.Row
        placeholders = ",".join("?" * len(doc_ids))
        rows = conn.execute(
            f"SELECT * FROM knowledge WHERE kb_doc_id IN ({placeholders}) AND is_active = 1",
            doc_ids,
        ).fetchall()
        conn.close()
        by_doc = {r["kb_doc_id"]: dict(r) for r in rows}
        return [by_doc[d] for d in doc_ids if d in by_doc]

    def stats(self) -> dict:
        conn = sqlite3.connect(str(self.knowledge_db_path))
        total = conn.execute("SELECT COUNT(*) FROM knowledge WHERE is_active = 1").fetchone()[0]
        by_cat = conn.execute(
            "SELECT category, COUNT(*) FROM knowledge WHERE is_active = 1 GROUP BY category"
        ).fetchall()
        last_extract = conn.execute("SELECT MAX(created_at) FROM extraction_log").fetchone()[0]
        conn.close()
        return {
            "total_entries": total,
            "by_category": dict(by_cat),
            "last_extraction": last_extract,
        }
