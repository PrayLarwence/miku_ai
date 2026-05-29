import json
import os

from quart import request

from miku.core import logger
from miku.core.core_lifecycle import AstrBotCoreLifecycle
from miku.core.provider.entities import ProviderType
from miku.core.utils.astrbot_path import get_astrbot_data_path

from .route import Response, Route, RouteContext


class ProfileRoute(Route):
    """对话知识抽取相关接口（个人知识库特色功能）。

    MBTI 与时间线相关接口已迁入 miku_api.py（带持久化与 LLM 摘要），
    本路由只保留对话历史 -> 个人画像知识条目的抽取与查询。
    """

    def __init__(
        self,
        context: RouteContext,
        core_lifecycle: AstrBotCoreLifecycle,
    ) -> None:
        super().__init__(context)
        self.routes = {
            "/profile/knowledge/extract": ("POST", self.extract_knowledge),
            "/profile/knowledge/list": ("GET", self.list_knowledge),
            "/profile/knowledge/stats": ("GET", self.knowledge_stats),
        }
        self.core_lifecycle = core_lifecycle
        self.provider_manager = core_lifecycle.provider_manager
        self.conv_mgr = core_lifecycle.conversation_manager
        self._data_dir = os.path.join(get_astrbot_data_path(), "profile")
        os.makedirs(self._data_dir, exist_ok=True)
        self.register_routes()

    # ─── 知识提取 ──────────────────────────────────────────────

    async def extract_knowledge(self):
        """从选定会话中提取知识条目，写入个人知识库。"""
        try:
            data = await request.get_json(silent=True) or {}
            session_id = data.get("session_id", None)

            if session_id:
                conversations_text = await self._gather_session_history(session_id)
            else:
                conversations_text = await self._gather_recent_history()

            if not conversations_text or not conversations_text.strip():
                return Response().error("没有足够的对话数据，请先进行一些对话~").__dict__

            provider = self.provider_manager.get_using_provider(
                ProviderType.CHAT_COMPLETION
            )
            if not provider:
                return Response().error("没有可用的 LLM provider").__dict__

            from miku.core.knowledge_base.personal_kb import (
                EXTRACT_PROMPT,
                PersonalKnowledgeStore,
            )
            store = PersonalKnowledgeStore(
                self.core_lifecycle.kb_manager,
                self.provider_manager,
            )

            prompt = EXTRACT_PROMPT.format(conversation=conversations_text[-8000:])
            system_prompt = "你是一个知识提取助手。请只输出 JSON 数组，不要加其他文字。"

            response = await provider.text_chat(prompt=prompt, system_prompt=system_prompt)
            raw_text = response.completion_text if hasattr(response, "completion_text") else str(response)
            entries = store.parse_response(raw_text)

            saved = 0
            for entry in entries:
                if entry.get("confidence", 0) < 0.3:
                    continue
                await store.save_entry(
                    topic=entry.get("topic", "未知"),
                    content=entry.get("content", ""),
                    category=entry.get("category", "interest"),
                    confidence=entry.get("confidence", 0.5),
                    source_session=session_id or "",
                )
                saved += 1

            store.log_extraction(session_id, saved)

            stats = store.stats()
            return Response().ok({"entries": entries, "saved": saved, "stats": stats}).__dict__
        except Exception as e:
            logger.error(f"知识提取失败: {e}")
            return Response().error(str(e)).__dict__

    async def list_knowledge(self):
        try:
            from miku.core.knowledge_base.personal_kb import PersonalKnowledgeStore
            store = PersonalKnowledgeStore(
                self.core_lifecycle.kb_manager,
                self.provider_manager,
            )
            category = request.args.get("category", None)
            query = request.args.get("query", None)
            entries = (
                await store.semantic_search(query, top_k=20)
                if query
                else store.list_entries(category=category)
            )
            stats = store.stats()
            return Response().ok({"entries": entries, "stats": stats}).__dict__
        except Exception as e:
            logger.error(f"获取知识失败: {e}")
            return Response().error(str(e)).__dict__

    async def knowledge_stats(self):
        try:
            from miku.core.knowledge_base.personal_kb import PersonalKnowledgeStore
            store = PersonalKnowledgeStore(
                self.core_lifecycle.kb_manager,
                self.provider_manager,
            )
            stats = store.stats()
            return Response().ok(stats).__dict__
        except Exception as e:
            logger.error(f"获取知识统计失败: {e}")
            return Response().error(str(e)).__dict__

    # ─── 内部辅助 ────────────────────────────────────────────────

    async def _gather_session_history(self, session_id: str) -> str:
        """收集指定会话的对话文本（数据源与 /api/miku/sessions 一致）"""
        try:
            from miku.core.conversation_store import get_store
            messages = get_store().export_session(session_id)
            texts = []
            for msg in messages:
                content = msg.get("content")
                role = msg.get("role", "unknown")
                if isinstance(content, str) and content.strip():
                    texts.append(f"[{role}]: {content[:300]}")
            return "\n".join(texts[-100:])
        except Exception as e:
            logger.warning(f"收集会话历史失败: {e}")
            return ""

    async def _gather_recent_history(self) -> str:
        """收集所有会话最近的对话文本"""
        try:
            from miku.core.conversation_store import get_store
            store = get_store()
            sessions = store.list_sessions()[:20]
            texts = []
            for s in sessions:
                sid = s.get("session_id")
                if not sid:
                    continue
                for msg in store.export_session(sid):
                    content = msg.get("content")
                    role = msg.get("role", "unknown")
                    if isinstance(content, str) and content.strip():
                        texts.append(f"[{role}]: {content[:300]}")
            return "\n".join(texts[-100:])
        except Exception as e:
            logger.warning(f"收集对话历史失败: {e}")
            return ""
