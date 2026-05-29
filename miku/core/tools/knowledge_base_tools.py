from pydantic import Field
from pydantic.dataclasses import dataclass

from miku.api import logger, sp
from miku.core.agent.run_context import ContextWrapper
from miku.core.agent.tool import FunctionTool, ToolExecResult
from miku.core.astr_agent_context import AstrAgentContext
from miku.core.knowledge_base.kb_helper import KBHelper
from miku.core.knowledge_base.personal_kb import PERSONAL_KB_NAME
from miku.core.star.context import Context
from miku.core.tools.registry import builtin_tool

_KNOWLEDGE_BASE_TOOL_CONFIG = {
    "kb_agentic_mode": True,
}

_PERSONAL_KB_TOP_K = 3
_PERSONAL_KB_FUSION_K = 10


def check_all_kb(kb_list: list[KBHelper | None]) -> bool:
    """检查是否所有的知识库都为空"""
    return not any(
        kb and (kb.kb.doc_count != 0 or kb.kb.chunk_count != 0) for kb in kb_list
    )


async def _resolve_external_kb_names(
    umo: str, context: Context
) -> tuple[list[str], int, int]:
    """读取用户配置的外接知识库列表与 top_k 设置。"""
    config = context.get_config(umo=umo)
    top_k_fusion = config.get("kb_fusion_top_k", 20)

    session_config = await sp.session_get(umo, "kb_config", default={})
    if session_config and "kb_ids" in session_config:
        kb_ids = session_config.get("kb_ids", [])
        if not kb_ids:
            logger.info(f"[知识库] 会话 {umo} 已被配置为不使用外接知识库")
            return [], session_config.get("top_k", 5), top_k_fusion

        top_k = session_config.get("top_k", 5)
        kb_mgr = context.kb_manager
        kb_names: list[str] = []
        invalid_kb_ids: list[str] = []
        for kb_id in kb_ids:
            kb_helper = await kb_mgr.get_kb(kb_id)
            if kb_helper:
                kb_names.append(kb_helper.kb.kb_name)
            else:
                invalid_kb_ids.append(kb_id)
        if invalid_kb_ids:
            logger.warning(
                f"[知识库] 会话 {umo} 配置的以下知识库无效: {invalid_kb_ids}",
            )
        return kb_names, top_k, top_k_fusion

    kb_names = list(config.get("kb_names", []) or [])
    top_k = config.get("kb_final_top_k", 5)
    return kb_names, top_k, top_k_fusion


async def _retrieve_external_kb(
    query: str,
    kb_names: list[str],
    context: Context,
    top_k: int,
    top_k_fusion: int,
) -> str | None:
    """外接文档知识库检索（用户上传的 PDF/MD/TXT 等）。"""
    if not kb_names:
        return None

    kb_mgr = context.kb_manager
    all_kbs = [await kb_mgr.get_kb_by_name(kb) for kb in kb_names]
    if check_all_kb(all_kbs):
        logger.debug("[知识库] 外接知识库全为空，跳过")
        return None

    try:
        kb_context = await kb_mgr.retrieve(
            query=query,
            kb_names=kb_names,
            top_k_fusion=top_k_fusion,
            top_m_final=top_k,
        )
    except Exception as exc:  # noqa: BLE001
        logger.error(f"[知识库] 外接知识库检索失败: {exc}")
        return None
    if not kb_context:
        return None
    text = kb_context.get("context_text") or ""
    if not text:
        return None
    results = kb_context.get("results", [])
    logger.debug(f"[知识库] 外接知识库命中 {len(results)} 条")
    return text


async def _retrieve_personal_kb(query: str, context: Context) -> str | None:
    """个人知识库检索（从对话历史抽取的用户画像条目）。

    任何失败都静默降级——这是辅助上下文，不能拖累主对话流程。
    """
    kb_mgr = context.kb_manager
    try:
        kb_helper = await kb_mgr.get_kb_by_name(PERSONAL_KB_NAME)
    except Exception as exc:  # noqa: BLE001
        logger.debug(f"[个人知识库] 不可用: {exc}")
        return None
    if not kb_helper:
        return None
    if kb_helper.init_error:
        logger.debug(f"[个人知识库] 初始化错误: {kb_helper.init_error}")
        return None
    if kb_helper.kb.doc_count == 0 or kb_helper.kb.chunk_count == 0:
        return None

    try:
        kb_context = await kb_mgr.retrieve(
            query=query,
            kb_names=[PERSONAL_KB_NAME],
            top_k_fusion=_PERSONAL_KB_FUSION_K,
            top_m_final=_PERSONAL_KB_TOP_K,
        )
    except Exception as exc:  # noqa: BLE001
        logger.debug(f"[个人知识库] 检索失败: {exc}")
        return None
    if not kb_context:
        return None

    results = kb_context.get("results", []) or []
    if not results:
        return None

    lines: list[str] = []
    for r in results:
        content = (r.get("content") or "").strip()
        if not content:
            continue
        lines.append(f"- {content}")
    if not lines:
        return None
    logger.debug(f"[个人知识库] 命中 {len(lines)} 条")
    return "\n".join(lines)


async def retrieve_knowledge_base(
    query: str,
    umo: str,
    context: Context,
) -> str | None:
    """检索知识库上下文，分别拼接外接资料与个人画像两段。"""
    kb_names, top_k, top_k_fusion = await _resolve_external_kb_names(umo, context)

    external_text = await _retrieve_external_kb(
        query=query,
        kb_names=[n for n in kb_names if n != PERSONAL_KB_NAME],
        context=context,
        top_k=top_k,
        top_k_fusion=top_k_fusion,
    )
    personal_text = await _retrieve_personal_kb(query=query, context=context)

    if not external_text and not personal_text:
        return None

    sections: list[str] = []
    if personal_text:
        sections.append(
            "[关于用户的相关信息（来自历史对话抽取，请作为事实参考）]\n"
            + personal_text
        )
    if external_text:
        sections.append("[可能相关的资料（来自知识库检索）]\n" + external_text)
    return "\n\n".join(sections)


@builtin_tool(config=_KNOWLEDGE_BASE_TOOL_CONFIG)
@dataclass
class KnowledgeBaseQueryTool(FunctionTool[AstrAgentContext]):
    name: str = "astr_kb_search"
    description: str = (
        "Query the knowledge base for facts or relevant context. "
        "Use this tool when the user's question requires factual information, "
        "definitions, background knowledge, or previously indexed content. "
        "Only send short keywords or a concise question as the query."
    )
    parameters: dict = Field(
        default_factory=lambda: {
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "A concise keyword query for the knowledge base.",
                },
            },
            "required": ["query"],
        }
    )

    async def call(
        self, context: ContextWrapper[AstrAgentContext], **kwargs
    ) -> ToolExecResult:
        query = kwargs.get("query", "")
        if not query:
            return "error: Query parameter is empty."
        result = await retrieve_knowledge_base(
            query=query,
            umo=context.context.event.unified_msg_origin,
            context=context.context.context,
        )
        if not result:
            return "No relevant knowledge found."
        return result


__all__ = [
    "KnowledgeBaseQueryTool",
    "check_all_kb",
    "retrieve_knowledge_base",
]
