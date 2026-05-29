"""Miku API — 为 conversation_store 架桥
========================================
把 miku.core.conversation_store 的对话数据暴露给前端 MBTI 分析页和时间线页。
"""

import asyncio
import json
import os
import re
import traceback
from collections import defaultdict

from quart import request

from miku.core import logger
from miku.core.conversation_store import get_store
from miku.core.core_lifecycle import AstrBotCoreLifecycle
from miku.core.db import BaseDatabase
from miku.core.provider.entities import ProviderType
from miku.core.utils.astrbot_path import get_astrbot_data_path

from .route import Response, Route, RouteContext


class MikuApiRoute(Route):
    def __init__(
        self,
        context: RouteContext,
        db_helper: BaseDatabase,
        core_lifecycle: AstrBotCoreLifecycle,
    ) -> None:
        super().__init__(context)
        self.routes = {
            "/miku/sessions": ("GET", self.list_miku_sessions),
            "/miku/session": ("GET", self.get_miku_session),
            "/miku/analyze": ("POST", self.analyze_miku_mbti),
            "/miku/result": ("GET", self.get_miku_mbti_result),
            "/miku/timeline": ("GET", self.get_miku_timeline),
        }
        self.db_helper = db_helper
        self.core_lifecycle = core_lifecycle
        self._profile_dir = os.path.join(get_astrbot_data_path(), "profile")
        os.makedirs(self._profile_dir, exist_ok=True)
        self.register_routes()

    # ── helpers ───────────────────────────────────────────────────────

    def _mbti_path(self, session_id: str) -> str:
        safe = re.sub(r"[^A-Za-z0-9_.-]", "_", session_id)[:120] or "default"
        return os.path.join(self._profile_dir, f"mbti_{safe}.json")

    def _load_mbti_cache(self, session_id: str) -> dict | None:
        path = self._mbti_path(session_id)
        if not os.path.exists(path):
            return None
        try:
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f)
        except (json.JSONDecodeError, OSError):
            return None

    def _save_mbti_cache(self, session_id: str, result: dict) -> None:
        try:
            with open(self._mbti_path(session_id), "w", encoding="utf-8") as f:
                json.dump(result, f, ensure_ascii=False, indent=2)
        except OSError as exc:
            logger.warning(f"MBTI 结果落盘失败（非致命）: {exc}")

    # ── GET /api/miku/sessions ────────────────────────────────────────

    async def list_miku_sessions(self):
        """返回 conversation_store 里所有会话列表"""
        try:
            store = get_store()
            sessions = store.list_sessions()
            for s in sessions:
                s["display_name"] = store.get_session_display_name(s["session_id"])
            return Response().ok({"sessions": sessions}).__dict__
        except Exception as e:
            logger.error(f"list_miku_sessions 失败: {e!s}\n{traceback.format_exc()}")
            return Response().error(f"获取会话列表失败: {e!s}").__dict__

    # ── GET /api/miku/session?session_id=xxx ──────────────────────────

    async def get_miku_session(self):
        """获取某个会话的全部消息"""
        try:
            session_id = request.args.get("session_id", "").strip()
            if not session_id:
                return Response().error("缺少参数: session_id").__dict__

            messages = get_store().export_session(session_id)
            return Response().ok({"messages": messages}).__dict__
        except Exception as e:
            logger.error(f"get_miku_session 失败: {e!s}\n{traceback.format_exc()}")
            return Response().error(f"获取会话消息失败: {e!s}").__dict__

    # ── POST /api/miku/analyze ────────────────────────────────────────

    async def analyze_miku_mbti(self):
        """读取会话消息，调用 LLM 分析 MBTI 性格"""
        try:
            data = await request.get_json()
            session_id = (data or {}).get("session_id", "").strip()
            if not session_id:
                return Response().error("缺少参数: session_id").__dict__

            messages = get_store().export_session(session_id)
            if not messages:
                return Response().error("该会话没有消息").__dict__

            # 构建对话文本（截取最近 80 条，避免 token 溢出）
            recent = messages[-80:]
            lines = []
            for m in recent:
                role_label = "用户" if m["role"] == "user" else "AI"
                lines.append(f"[{role_label}]: {m['content']}")
            dialogue = "\n".join(lines)

            prompt = f"""你是一位专业的 MBTI 性格分析师。请根据以下对话记录，分析用户的 MBTI 性格类型。

## 对话记录
{dialogue}

## 分析要求
请从以下四个维度逐一分析，给出每个维度的得分（0-100，表示倾向程度），然后判定最终的 16 型人格：

1. **E/I（外向/内向）**：E 得分越高越外向，I 得分越高越内向。score 表示 I 倾向百分比（0=完全E，100=完全I）
2. **S/N（实感/直觉）**：S 得分越高越实感，N 得分越高越直觉。score 表示 N 倾向百分比
3. **T/F（思考/情感）**：T 得分越高越思考，F 得分越高越情感。score 表示 F 倾向百分比
4. **J/P（判断/感知）**：J 得分越高越判断，P 得分越高越感知。score 表示 P 倾向百分比

最后给出 4 个字母的类型代码（如 INTJ、ENFP 等）。

请严格按以下 JSON 格式返回，不要包含其他内容：
```json
{{
  "typeCode": "INTJ",
  "typeName": "建筑师",
  "typeDesc": "富有想象力和战略性的思考者",
  "summary": "一段 100 字以内的综合分析",
  "dimensions": [
    {{"label": "E·外向 ───────────────────── I·内向", "left": "E", "right": "I", "score": 65, "color": "pink"}},
    {{"label": "S·实感 ───────────────────── N·直觉", "left": "S", "right": "N", "score": 70, "color": "teal"}},
    {{"label": "T·思考 ───────────────────── F·情感", "left": "T", "right": "F", "score": 55, "color": "amber"}},
    {{"label": "J·判断 ───────────────────── P·感知", "left": "J", "right": "P", "score": 60, "color": "indigo"}}
  ]
}}
```"""

            # 调用 LLM
            provider = self.core_lifecycle.provider_manager.get_using_provider(
                ProviderType.CHAT_COMPLETION
            )
            if not provider:
                return Response().error("没有可用的 LLM 提供商，请先在设置中配置模型").__dict__

            llm_resp = await provider.text_chat(prompt=prompt)

            raw_text = llm_resp.completion_text or ""
            logger.info(f"MBTI 分析原始返回: {raw_text[:300]}...")

            # 提取 JSON 块
            json_text = raw_text
            if "```json" in raw_text:
                json_text = raw_text.split("```json")[1].split("```")[0]
            elif "```" in raw_text:
                json_text = raw_text.split("```")[1].split("```")[0]

            try:
                result = json.loads(json_text.strip())
            except (json.JSONDecodeError, ValueError):
                logger.warning("LLM 返回非标准 JSON，尝试降级处理")
                # 降级：返回原始文本作为 summary
                result = {
                    "typeCode": "N/A",
                    "typeName": "分析中",
                    "typeDesc": "LLM 返回格式异常，请重试",
                    "summary": raw_text[:200],
                    "dimensions": [
                        {"label": "E·外向 ───────────────────── I·内向", "left": "E", "right": "I", "score": 50, "color": "pink"},
                        {"label": "S·实感 ───────────────────── N·直觉", "left": "S", "right": "N", "score": 50, "color": "teal"},
                        {"label": "T·思考 ───────────────────── F·情感", "left": "T", "right": "F", "score": 50, "color": "amber"},
                        {"label": "J·判断 ───────────────────── P·感知", "left": "J", "right": "P", "score": 50, "color": "indigo"},
                    ],
                }

            # 持久化（带时间戳，前端进页面可直读缓存避免重算）
            from datetime import datetime
            result["analyzed_at"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            result["session_id"] = session_id
            self._save_mbti_cache(session_id, result)

            return Response().ok(result).__dict__

        except Exception as e:
            logger.error(f"analyze_miku_mbti 失败: {e!s}\n{traceback.format_exc()}")
            return Response().error(f"MBTI 分析失败: {e!s}").__dict__

    # ── GET /api/miku/result?session_id=xxx ───────────────────────────

    async def get_miku_mbti_result(self):
        """读取上次分析的 MBTI 结果（不触发 LLM）"""
        try:
            session_id = request.args.get("session_id", "").strip()
            if not session_id:
                return Response().error("缺少参数: session_id").__dict__
            cached = self._load_mbti_cache(session_id)
            if not cached:
                return Response().ok({"cached": False, "result": None}).__dict__
            return Response().ok({"cached": True, "result": cached}).__dict__
        except Exception as e:
            logger.error(f"get_miku_mbti_result 失败: {e!s}\n{traceback.format_exc()}")
            return Response().error(f"读取 MBTI 缓存失败: {e!s}").__dict__

    # ── GET /api/miku/timeline ────────────────────────────────────────

    def _timeline_cache_path(self, granularity: str) -> str:
        return os.path.join(self._profile_dir, f"timeline_summary_{granularity}.json")

    def _load_timeline_summary_cache(self, granularity: str) -> dict[str, dict]:
        path = self._timeline_cache_path(granularity)
        if not os.path.exists(path):
            return {}
        try:
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f) or {}
        except (json.JSONDecodeError, OSError):
            return {}

    def _save_timeline_summary_cache(self, granularity: str, cache: dict) -> None:
        try:
            with open(self._timeline_cache_path(granularity), "w", encoding="utf-8") as f:
                json.dump(cache, f, ensure_ascii=False, indent=2)
        except OSError as exc:
            logger.warning(f"Timeline 摘要缓存落盘失败（非致命）: {exc}")

    async def _generate_slot_summary(self, slot_label: str, sample: str) -> str | None:
        try:
            provider = self.core_lifecycle.provider_manager.get_using_provider(
                ProviderType.CHAT_COMPLETION
            )
            if not provider:
                return None
            prompt = (
                f"请根据以下「{slot_label}」时段的对话样本，"
                "用一句话（30 字以内）概括用户在该时段的主要话题或活动倾向。"
                "请直接返回摘要文本，不要 JSON 或额外解释。\n\n"
                f"对话样本：\n{sample[:1500]}"
            )
            resp = await provider.text_chat(
                prompt=prompt,
                system_prompt="你是对话分析助手，请用简洁中文总结对话主题。",
            )
            text = (resp.completion_text or "").strip()
            return text[:100] if text else None
        except Exception as exc:  # noqa: BLE001
            logger.debug(f"Timeline 摘要 LLM 调用失败（非致命）: {exc}")
            return None

    async def get_miku_timeline(self):
        """获取时间线聚合数据"""
        try:
            granularity = request.args.get("granularity", "day").strip()
            with_summary = request.args.get("with_summary", "1").strip() not in {"0", "false", "False"}
            sessions = get_store().list_sessions()

            if not sessions:
                return Response().ok({"timeline": []}).__dict__

            groups: dict[str, dict] = defaultdict(
                lambda: {"count": 0, "sessions": []}
            )

            for s in sessions:
                dt_str = s.get("last_msg", "")
                if not dt_str:
                    continue
                try:
                    # last_msg 格式如 "2026-04-30 21:00:00"
                    parts = dt_str.split(" ")[0].split("-")
                    year, month, day = int(parts[0]), int(parts[1]), int(parts[2])
                except (ValueError, IndexError):
                    continue

                if granularity == "day":
                    key = f"{year}-{month:02d}-{day:02d}"
                elif granularity == "week":
                    import datetime
                    dt = datetime.date(year, month, day)
                    start = dt - datetime.timedelta(days=dt.weekday())
                    end = start + datetime.timedelta(days=6)
                    key = f"{start.strftime('%Y-%m-%d')} ~ {end.strftime('%Y-%m-%d')}"
                elif granularity == "month":
                    key = f"{year}-{month:02d}"
                else:
                    key = f"{year}-{month:02d}-{day:02d}"

                groups[key]["count"] += s.get("msg_count", 0)
                groups[key]["sessions"].append(s["session_id"])

            # mood 简单启发式：消息数多 → positive，中等 → neutral，少 → mixed
            mood_map = {
                "positive": {"emoji": "😊", "color": "success"},
                "neutral": {"emoji": "😐", "color": "info"},
                "negative": {"emoji": "😤", "color": "warning"},
                "mixed": {"emoji": "🤔", "color": "purple"},
            }

            timeline = []
            for date_key, data in sorted(groups.items(), reverse=True):
                cnt = data["count"]
                if cnt >= 50:
                    mood = "positive"
                elif cnt >= 20:
                    mood = "neutral"
                elif cnt >= 5:
                    mood = "mixed"
                else:
                    mood = "negative"

                timeline.append(
                    {
                        "date": date_key,
                        "count": cnt,
                        "sessions": data["sessions"],
                        "mood": mood,
                        "moodEmoji": mood_map[mood]["emoji"],
                        "moodColor": mood_map[mood]["color"],
                    }
                )

            if with_summary and timeline:
                store_inst = get_store()
                cache = self._load_timeline_summary_cache(granularity)
                cache_dirty = False
                pending: list[tuple[int, str, str]] = []  # (idx, cache_key, sample_text)

                for idx, item in enumerate(timeline):
                    cache_key = f"{item['date']}|{item['count']}"
                    cached_summary = cache.get(cache_key)
                    if cached_summary:
                        item["ai_summary"] = cached_summary
                        continue

                    samples: list[str] = []
                    for sid in item["sessions"][:3]:
                        try:
                            msgs = store_inst.export_session(sid) or []
                        except Exception:  # noqa: BLE001
                            msgs = []
                        for m in msgs[:5]:
                            role = "用户" if m.get("role") == "user" else "AI"
                            samples.append(f"[{role}]: {m.get('content', '')}")
                    if samples:
                        pending.append((idx, cache_key, "\n".join(samples)))

                # 并发跑 LLM 摘要
                if pending:
                    results = await asyncio.gather(
                        *[
                            self._generate_slot_summary(timeline[i]["date"], sample)
                            for i, _, sample in pending
                        ],
                        return_exceptions=True,
                    )
                    for (idx, cache_key, _), summary in zip(pending, results):
                        if isinstance(summary, Exception) or not summary:
                            continue
                        timeline[idx]["ai_summary"] = summary
                        cache[cache_key] = summary
                        cache_dirty = True

                if cache_dirty:
                    self._save_timeline_summary_cache(granularity, cache)

            return Response().ok({"timeline": timeline}).__dict__

        except Exception as e:
            logger.error(f"get_miku_timeline 失败: {e!s}\n{traceback.format_exc()}")
            return Response().error(f"获取时间线失败: {e!s}").__dict__
