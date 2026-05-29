from miku.core.config.astrbot_config import AstrBotConfig
from miku import logger
from miku.core.star.register import register_llm_tool as llm_tool

# event
from miku.core.message.message_event_result import (
    MessageEventResult,
    MessageChain,
    CommandResult,
    EventResultType,
)
from miku.core.platform import AstrMessageEvent

# star register
from miku.core.star.register import (
    register_command as command,
    register_command_group as command_group,
    register_event_message_type as event_message_type,
    register_regex as regex,
    register_platform_adapter_type as platform_adapter_type,
)
from miku.core.star.filter.event_message_type import (
    EventMessageTypeFilter,
    EventMessageType,
)
from miku.core.star.filter.platform_adapter_type import (
    PlatformAdapterTypeFilter,
    PlatformAdapterType,
)
from miku.core.star.register import (
    register_star as register,  # 注册插件（Star）
)
from miku.core.star import Context, Star
from miku.core.star.config import *


# provider
from miku.core.provider import Provider, ProviderMetaData
from miku.core.db.po import Personality

# platform
from miku.core.platform import (
    AstrMessageEvent,
    Platform,
    AstrBotMessage,
    MessageMember,
    MessageType,
    PlatformMetadata,
)

from miku.core.platform.register import register_platform_adapter

from .message_components import *