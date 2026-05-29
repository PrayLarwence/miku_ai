import random
import re
import time
import traceback
from collections.abc import AsyncGenerator

from miku.core import logger
from miku.core.message.components import At, Image, Plain, Reply
from miku.core.message.message_event_result import ResultContentType
from miku.core.platform.astr_message_event import AstrMessageEvent
from miku.core.platform.message_type import MessageType
from miku.core.star.session_llm_manager import SessionServiceManager
from miku.core.star.star import star_map
from miku.core.star.star_handler import EventType, star_handlers_registry

from ..context import PipelineContext
from ..stage import Stage, register_stage, registered_stages


@register_stage
class ResultDecorateStage(Stage):
    async def initialize(self, ctx: PipelineContext) -> None:
        self.ctx = ctx
        self.reply_prefix = ctx.astrbot_config["platform_settings"]["reply_prefix"]
        self.reply_with_mention = ctx.astrbot_config["platform_settings"][
            "reply_with_mention"
        ]
        self.reply_with_quote = ctx.astrbot_config["platform_settings"][
            "reply_with_quote"
        ]

        provider_cfg = ctx.astrbot_config.get("provider_settings", {})
        self.show_reasoning = provider_cfg.get("display_reasoning_text", False)
        self.words_count_threshold = int(
            ctx.astrbot_config["platform_settings"]["segmented_reply"][
                "words_count_threshold"
            ],
        )
        self.enable_segmented_reply = ctx.astrbot_config["platform_settings"][
            "segmented_reply"
        ]["enable"]
        self.only_llm_result = ctx.astrbot_config["platform_settings"][
            "segmented_reply"
        ]["only_llm_result"]
        self.split_mode = ctx.astrbot_config["platform_settings"][
            "segmented_reply"
        ].get("split_mode", "regex")
        self.regex = ctx.astrbot_config["platform_settings"]["segmented_reply"]["regex"]
        self.split_words = ctx.astrbot_config["platform_settings"][
            "segmented_reply"
        ].get("split_words", ["。", "？", "！", "~", "…"])
        if self.split_words:
            escaped_words = sorted(
                [re.escape(word) for word in self.split_words], key=len, reverse=True
            )
            self.split_words_pattern = re.compile(
                f"(.*?({'|'.join(escaped_words)})|.+$)", re.DOTALL
            )
        else:
            self.split_words_pattern = None
        self.content_cleanup_rule = ctx.astrbot_config["platform_settings"][
            "segmented_reply"
        ]["content_cleanup_rule"]

        # 分段回复

    def _split_text_by_words(self, text: str) -> list[str]:
        """使用分段词列表分段文本"""
        if not self.split_words_pattern:
            return [text]

        segments = self.split_words_pattern.findall(text)
        result = []
        for seg in segments:
            if isinstance(seg, tuple):
                content = seg[0]
                if not isinstance(content, str):
                    continue
                for word in self.split_words:
                    if content.endswith(word):
                        content = content[: -len(word)]
                        break
                if content.strip():
                    result.append(content)
            elif seg and seg.strip():
                result.append(seg)
        return result if result else [text]

    async def process(
        self,
        event: AstrMessageEvent,
    ) -> None | AsyncGenerator[None, None]:
        result = event.get_result()
        if result is None or not result.chain:
            return

        if result.result_content_type == ResultContentType.STREAMING_RESULT:
            return

        is_stream = result.result_content_type == ResultContentType.STREAMING_FINISH

        # 发送消息前事件钩子
        handlers = star_handlers_registry.get_handlers_by_event_type(
            EventType.OnDecoratingResultEvent,
            plugins_name=event.plugins_name,
        )
        for handler in handlers:
            try:
                logger.debug(
                    f"hook(on_decorating_result) -> {star_map[handler.handler_module_path].name} - {handler.handler_name}",
                )
                if is_stream:
                    logger.warning(
                        "启用流式输出时，依赖发送消息前事件钩子的插件可能无法正常工作",
                    )
                await handler.handler(event)

                if (result := event.get_result()) is None or not result.chain:
                    logger.debug(
                        f"hook(on_decorating_result) -> {star_map[handler.handler_module_path].name} - {handler.handler_name} 将消息结果清空。",
                    )
            except BaseException:
                logger.error(traceback.format_exc())

            if event.is_stopped():
                logger.info(
                    f"{star_map[handler.handler_module_path].name} - {handler.handler_name} 终止了事件传播。",
                )
                return

        # 流式输出不执行下面的逻辑
        if is_stream:
            logger.info("流式输出已启用，跳过结果装饰阶段")
            return

        # 需要再获取一次。插件可能直接对 chain 进行了替换。
        result = event.get_result()
        if result is None:
            return

        if len(result.chain) > 0:
            # 回复前缀
            if self.reply_prefix:
                for comp in result.chain:
                    if isinstance(comp, Plain):
                        comp.text = self.reply_prefix + comp.text
                        break

            # 分段回复
            if self.enable_segmented_reply and event.get_platform_name() not in [
                "qq_official",
                "weixin_official_account",
                "dingtalk",
            ]:
                if (
                    self.only_llm_result and result.is_model_result()
                ) or not self.only_llm_result:
                    new_chain = []
                    for comp in result.chain:
                        if isinstance(comp, Plain):
                            if len(comp.text) > self.words_count_threshold:
                                # 不分段回复
                                new_chain.append(comp)
                                continue

                            # 根据 split_mode 选择分段方式
                            if self.split_mode == "words":
                                split_response = self._split_text_by_words(comp.text)
                            else:  # regex 模式
                                try:
                                    split_response = re.findall(
                                        self.regex,
                                        comp.text,
                                        re.DOTALL | re.MULTILINE,
                                    )
                                except re.error:
                                    logger.error(
                                        f"分段回复正则表达式错误，使用默认分段方式: {traceback.format_exc()}",
                                    )
                                    split_response = re.findall(
                                        r".*?[。？！~…]+|.+$",
                                        comp.text,
                                        re.DOTALL | re.MULTILINE,
                                    )

                            if not split_response:
                                new_chain.append(comp)
                                continue
                            for seg in split_response:
                                if self.content_cleanup_rule:
                                    seg = re.sub(self.content_cleanup_rule, "", seg)
                                if seg.strip():
                                    new_chain.append(Plain(seg))
                        else:
                            # 非 Plain 类型的消息段不分段
                            new_chain.append(comp)
                    result.chain = new_chain

            # 显示推理内容
            if (
                self.show_reasoning
                and event.get_extra("_llm_reasoning_content")
            ):
                reasoning_content = str(event.get_extra("_llm_reasoning_content"))
                result.chain.insert(0, Plain(f"{chr(0x1f914)} 思考: {{reasoning_content}}\n"))

            # at 回复 / 引用回复仅适用于纯文本或图文消息
            can_decorate = all(
                isinstance(item, (Plain, Image)) for item in result.chain
            )
            if can_decorate:
                # at 回复
                if (
                    self.reply_with_mention
                    and event.get_message_type() != MessageType.FRIEND_MESSAGE
                ):
                    result.chain.insert(
                        0,
                        At(qq=event.get_sender_id(), name=event.get_sender_name()),
                    )
                    if len(result.chain) > 1 and isinstance(result.chain[1], Plain):
                        result.chain[1].text = "\n" + result.chain[1].text

                # 引用回复
                if self.reply_with_quote:
                    result.chain.insert(0, Reply(id=event.message_obj.message_id))
