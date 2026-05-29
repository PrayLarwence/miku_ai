import os

from miku.core.config import AstrBotConfig
from miku.core.config.default import DB_PATH
from miku.core.db.sqlite import SQLiteDatabase
from miku.core.file_token_service import FileTokenService
from miku.core.utils.pip_installer import (
    DependencyConflictError as DependencyConflictError,
)
from miku.core.utils.pip_installer import (
    PipInstaller,
)
from miku.core.utils.requirements_utils import (
    RequirementsPrecheckFailed as RequirementsPrecheckFailed,
)
from miku.core.utils.requirements_utils import (
    find_missing_requirements as find_missing_requirements,
)
from miku.core.utils.requirements_utils import (
    find_missing_requirements_or_raise as find_missing_requirements_or_raise,
)
from miku.core.utils.shared_preferences import SharedPreferences
from .log import LogBroker, LogManager  # noqa
from .utils.astrbot_path import get_astrbot_data_path

# 初始化数据存储文件夹
os.makedirs(get_astrbot_data_path(), exist_ok=True)

astrbot_config = AstrBotConfig()
logger = LogManager.GetLogger(log_name="astrbot")
LogManager.configure_logger(logger, astrbot_config)
LogManager.configure_trace_logger(astrbot_config)
db_helper = SQLiteDatabase(DB_PATH)
# 简单的偏好设置存储, 这里后续应该存储到数据库中, 一些部分可以存储到配置中
sp = SharedPreferences(db_helper=db_helper)
# 文件令牌服务
file_token_service = FileTokenService()
pip_installer = PipInstaller(
    astrbot_config.get("pip_install_arg", ""),
    astrbot_config.get("pypi_index_url", None),
)
