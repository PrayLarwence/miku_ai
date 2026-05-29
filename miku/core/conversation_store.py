"""对话持久化模块 — Conversation Store

SQLite-based permanent conversation memory.
零依赖 (Python stdlib only), 线程安全, WAL 模式, 静默降级.

用途:
  1. 永久保存用户对话，重启不丢失
  2. 为 MBTI 分析 / 时间线提供数据源
  3. 为对话抽取知识库（personal_kb）提供原始语料

用法:
  from miku.core.conversation_store import get_store
  store = get_store()
  store.save(session_id="xxx", role="user", content="你好")
  history = store.get_history("xxx", limit=20)
"""

import os
import sqlite3
import threading

from miku.core.utils.astrbot_path import get_astrbot_data_path


class ConversationStore:
    """轻量级 SQLite 对话记忆库"""

    def __init__(self, db_path: str | None = None) -> None:
        if db_path is None:
            db_path = os.path.join(get_astrbot_data_path(), "conversation_history.db")
        self.db_path = db_path
        self._lock = threading.Lock()
        os.makedirs(os.path.dirname(self.db_path), exist_ok=True)
        self._init_db()

    def _get_conn(self) -> sqlite3.Connection:
        """获取数据库连接 (WAL 模式，高并发友好)"""
        conn = sqlite3.connect(self.db_path)
        conn.execute("PRAGMA journal_mode=WAL")
        conn.execute("PRAGMA synchronous=NORMAL")
        return conn

    def _init_db(self) -> None:
        """建表 & 索引 (幂等)"""
        with self._lock:
            conn = self._get_conn()
            conn.executescript("""
                CREATE TABLE IF NOT EXISTS messages (
                    id          INTEGER PRIMARY KEY AUTOINCREMENT,
                    session_id  TEXT    NOT NULL,
                    user_id     TEXT    DEFAULT '',
                    user_name   TEXT    DEFAULT '',
                    role        TEXT    NOT NULL CHECK(role IN ('user','assistant','system')),
                    content     TEXT    NOT NULL,
                    created_at  TEXT    NOT NULL DEFAULT (datetime('now','localtime'))
                );
                CREATE INDEX IF NOT EXISTS idx_msg_session ON messages(session_id);
                CREATE INDEX IF NOT EXISTS idx_msg_role    ON messages(role);
                CREATE INDEX IF NOT EXISTS idx_msg_created ON messages(created_at);
            """)
            conn.commit()
            conn.close()

    # ── 写入 ──────────────────────────────────────────────

    def save(
        self,
        session_id: str,
        role: str,
        content: str,
        user_id: str = "",
        user_name: str = "",
    ) -> None:
        """保存一条消息 (线程安全)"""
        if not content or not content.strip():
            return
        with self._lock:
            conn = self._get_conn()
            conn.execute(
                "INSERT INTO messages (session_id, user_id, user_name, role, content) "
                "VALUES (?, ?, ?, ?, ?)",
                (session_id, user_id, user_name, role, content.strip()),
            )
            conn.commit()
            conn.close()

    # ── 查询 ──────────────────────────────────────────────

    def get_history(self, session_id: str, limit: int = 100) -> list[dict]:
        """获取某个会话的最近 N 条消息 (按时间升序)"""
        conn = self._get_conn()
        conn.row_factory = sqlite3.Row
        rows = conn.execute(
            "SELECT * FROM messages WHERE session_id = ? "
            "ORDER BY id DESC LIMIT ?",
            (session_id, limit),
        ).fetchall()
        conn.close()
        return [dict(r) for r in reversed(rows)]

    def search(self, keyword: str, limit: int = 50) -> list[dict]:
        """按关键词搜索历史消息"""
        conn = self._get_conn()
        conn.row_factory = sqlite3.Row
        rows = conn.execute(
            "SELECT * FROM messages WHERE content LIKE ? "
            "ORDER BY id DESC LIMIT ?",
            (f"%{keyword}%", limit),
        ).fetchall()
        conn.close()
        return [dict(r) for r in rows]

    def get_recent_context(self, session_id: str, n: int = 20) -> list[dict]:
        """获取最近 N 条消息，用于构建 LLM 对话上下文"""
        return self.get_history(session_id, n)

    def count(self, session_id: str | None = None) -> int:
        """统计消息数量"""
        conn = self._get_conn()
        if session_id:
            row = conn.execute(
                "SELECT COUNT(*) FROM messages WHERE session_id = ?",
                (session_id,),
            ).fetchone()
        else:
            row = conn.execute("SELECT COUNT(*) FROM messages").fetchone()
        conn.close()
        return row[0] if row else 0

    def list_sessions(self) -> list[dict]:
        """列出所有会话 (按最近活跃排序)"""
        conn = self._get_conn()
        rows = conn.execute(
            "SELECT session_id, COUNT(*) AS msg_count, MAX(created_at) AS last_msg "
            "FROM messages GROUP BY session_id ORDER BY last_msg DESC"
        ).fetchall()
        conn.close()
        return [
            {"session_id": r[0], "msg_count": r[1], "last_msg": r[2]}
            for r in rows
        ]

    def get_session_display_name(self, session_id: str) -> str:
        """获取会话的显示名称（最早消息时间），查不到则回退到 session_id"""
        conn = self._get_conn()
        row = conn.execute(
            "SELECT created_at FROM messages WHERE session_id = ? "
            "ORDER BY id ASC LIMIT 1",
            (session_id,),
        ).fetchone()
        conn.close()
        if row and row[0]:
            return row[0]
        return session_id

    def export_session(self, session_id: str) -> list[dict]:
        """导出某个会话的全部消息 (用于分析)"""
        conn = self._get_conn()
        conn.row_factory = sqlite3.Row
        rows = conn.execute(
            "SELECT role, content, created_at FROM messages "
            "WHERE session_id = ? ORDER BY id ASC",
            (session_id,),
        ).fetchall()
        conn.close()
        return [dict(r) for r in rows]

    # ── 维护 ──────────────────────────────────────────────

    def delete_session(self, session_id: str) -> int:
        """删除某个 session 的所有消息，返回删除条数"""
        with self._lock:
            conn = self._get_conn()
            cur = conn.execute(
                "DELETE FROM messages WHERE session_id = ?",
                (session_id,),
            )
            deleted = cur.rowcount
            conn.commit()
            conn.close()
        return deleted

    def delete_sessions_by_cid(self, cid: str) -> int:
        """按 webchat 会话 cid 删除（session_id 形如 webchat!user!cid），返回删除条数"""
        if not cid:
            return 0
        with self._lock:
            conn = self._get_conn()
            cur = conn.execute(
                "DELETE FROM messages WHERE session_id LIKE ?",
                (f"%!{cid}",),
            )
            deleted = cur.rowcount
            conn.commit()
            conn.close()
        return deleted

    def vacuum(self) -> None:
        """压缩数据库文件"""
        with self._lock:
            conn = self._get_conn()
            conn.execute("VACUUM")
            conn.close()

    def stats(self) -> dict:
        """数据库统计"""
        conn = self._get_conn()
        total = conn.execute("SELECT COUNT(*) FROM messages").fetchone()[0]
        user_msgs = conn.execute(
            "SELECT COUNT(*) FROM messages WHERE role='user'"
        ).fetchone()[0]
        ai_msgs = conn.execute(
            "SELECT COUNT(*) FROM messages WHERE role='assistant'"
        ).fetchone()[0]
        sessions = conn.execute(
            "SELECT COUNT(DISTINCT session_id) FROM messages"
        ).fetchone()[0]
        conn.close()
        return {
            "total_messages": total,
            "user_messages": user_msgs,
            "assistant_messages": ai_msgs,
            "sessions": sessions,
        }


# ── 全局单例 ──────────────────────────────────────────

_store: ConversationStore | None = None


def get_store(db_path: str | None = None) -> ConversationStore:
    """获取全局单例"""
    global _store
    if _store is None:
        _store = ConversationStore(db_path)
    return _store
