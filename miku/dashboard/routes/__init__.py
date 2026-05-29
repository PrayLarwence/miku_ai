from .auth import AuthRoute
from .chat import ChatRoute
from .chatui_project import ChatUIProjectRoute
from .command import CommandRoute
from .config import ConfigRoute
from .conversation import ConversationRoute
from .cron import CronRoute
from .file import FileRoute
from .knowledge_base import KnowledgeBaseRoute
from .log import LogRoute
from .miku_api import MikuApiRoute
from .model import ModelRoute
from .persona import PersonaRoute
from .platform import PlatformRoute
from .profile import ProfileRoute
from .plugin import PluginRoute
from .session_management import SessionManagementRoute
from .skills import SkillsRoute
from .stat import StatRoute
from .static_file import StaticFileRoute
from .tools import ToolsRoute

__all__ = [
    "AuthRoute",
    "ChatRoute",
    "ChatUIProjectRoute",
    "CommandRoute",
    "ConfigRoute",
    "ConversationRoute",
    "CronRoute",
    "FileRoute",
    "KnowledgeBaseRoute",
    "LogRoute",
    "MikuApiRoute",
    "ModelRoute",
    "PersonaRoute",
    "PlatformRoute",
    "ProfileRoute",
    "PluginRoute",
    "SessionManagementRoute",
    "StatRoute",
    "StaticFileRoute",
    "ToolsRoute",
    "SkillsRoute",
]
