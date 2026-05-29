import asyncio
import logging
import os
import socket
from datetime import datetime
from pathlib import Path
from typing import Protocol, cast

import jwt
import psutil
from flask.json.provider import DefaultJSONProvider
from hypercorn.asyncio import serve
from hypercorn.config import Config as HyperConfig
from quart import Quart, g, jsonify, request
from quart.logging import default_handler

from miku.core import logger
from miku.core.config.default import VERSION
from miku.core.core_lifecycle import AstrBotCoreLifecycle
from miku.core.db import BaseDatabase
from miku.core.utils.astrbot_path import get_astrbot_data_path
from miku.core.utils.datetime_utils import to_utc_isoformat
from miku.core.utils.io import get_local_ip_addresses

from .routes import *
from .routes.miku_api import MikuApiRoute
from .routes.model import ModelRoute
from .routes.platform import PlatformRoute
from .routes.profile import ProfileRoute
from .routes.route import Response, RouteContext
from .routes.session_management import SessionManagementRoute

# Static assets shipped inside the wheel (built during `hatch build`).
_BUNDLED_DIST = Path(__file__).parent / "dist"


class _AddrWithPort(Protocol):
    port: int


APP: Quart


def _parse_env_bool(value: str | None, default: bool) -> bool:
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


class AstrBotJSONProvider(DefaultJSONProvider):
    def default(self, obj):
        if isinstance(obj, datetime):
            return to_utc_isoformat(obj)
        return super().default(obj)


class AstrBotDashboard:
    def __init__(
        self,
        core_lifecycle: AstrBotCoreLifecycle,
        db: BaseDatabase,
        shutdown_event: asyncio.Event,
        webui_dir: str | None = None,
    ) -> None:
        self.core_lifecycle = core_lifecycle
        self.config = core_lifecycle.astrbot_config
        self.db = db

        # Path priority:
        # 1. Explicit webui_dir argument
        # 2. data/dist/ (user-installed / manually updated dashboard)
        # 3. astrbot/dashboard/dist/ (bundled with the wheel)
        if webui_dir and os.path.exists(webui_dir):
            self.data_path = os.path.abspath(webui_dir)
        else:
            user_dist = os.path.join(get_astrbot_data_path(), "dist")
            if os.path.exists(user_dist):
                self.data_path = os.path.abspath(user_dist)
            elif _BUNDLED_DIST.exists():
                self.data_path = str(_BUNDLED_DIST)
                logger.info("Using bundled dashboard dist: %s", self.data_path)
            else:
                # Fall back to expected user path (will fail gracefully later)
                self.data_path = os.path.abspath(user_dist)

        self.app = Quart("dashboard", static_folder=self.data_path, static_url_path="/")
        APP = self.app  # noqa
        self.app.config["MAX_CONTENT_LENGTH"] = (
            128 * 1024 * 1024
        )  # 将 Flask 允许的最大上传文件体大小设置为 128 MB
        self.app.json = AstrBotJSONProvider(self.app)
        self.app.json.sort_keys = False
        self.app.before_request(self.auth_middleware)
        # token 用于验证请求
        logging.getLogger(self.app.name).removeHandler(default_handler)
        self.context = RouteContext(self.config, self.app)
        self.sr = StatRoute(self.context, db, core_lifecycle)
        self.pr = PluginRoute(
            self.context,
            core_lifecycle,
            core_lifecycle.plugin_manager,
        )
        self.command_route = CommandRoute(self.context)
        self.cr = ConfigRoute(self.context, core_lifecycle)
        self.lr = LogRoute(self.context, core_lifecycle.log_broker)
        self.sfr = StaticFileRoute(self.context)
        self.ar = AuthRoute(self.context)
        self.chat_route = ChatRoute(self.context, db, core_lifecycle)
        self.chatui_project_route = ChatUIProjectRoute(self.context, db)
        self.tools_root = ToolsRoute(self.context, core_lifecycle)
        self.skills_route = SkillsRoute(self.context, core_lifecycle)
        self.conversation_route = ConversationRoute(self.context, db, core_lifecycle)
        self.profile_route = ProfileRoute(self.context, core_lifecycle)
        self.file_route = FileRoute(self.context)
        self.session_management_route = SessionManagementRoute(
            self.context,
            db,
            core_lifecycle,
        )
        self.persona_route = PersonaRoute(self.context, db, core_lifecycle)
        self.cron_route = CronRoute(self.context, core_lifecycle)
        self.kb_route = KnowledgeBaseRoute(self.context, core_lifecycle)
        self.platform_route = PlatformRoute(self.context)
        self.model_route = ModelRoute(self.context)
        self.miku_api_route = MikuApiRoute(self.context, db, core_lifecycle)

        self.app.add_url_rule(
            "/api/plug/<path:subpath>",
            view_func=self.srv_plug_route,
            methods=["GET", "POST"],
        )

        self.shutdown_event = shutdown_event

        self._init_jwt_secret()

    async def srv_plug_route(self, subpath, *args, **kwargs):
        """插件路由"""
        registered_web_apis = self.core_lifecycle.star_context.registered_web_apis
        for api in registered_web_apis:
            route, view_handler, methods, _ = api
            if route == f"/{subpath}" and request.method in methods:
                return await view_handler(*args, **kwargs)
        return jsonify(Response().error("未找到该路由").__dict__)

    async def auth_middleware(self):
        if not request.path.startswith("/api"):
            return None
        allowed_endpoints = [
            "/api/auth/login",
            "/api/file",
            "/api/stat/start-time",
        ]
        if any(request.path.startswith(prefix) for prefix in allowed_endpoints):
            return None
        # 声明 JWT
        token = request.headers.get("Authorization")
        if not token:
            r = jsonify(Response().error("未授权").__dict__)
            r.status_code = 401
            return r
        token = token.removeprefix("Bearer ")
        try:
            payload = jwt.decode(token, self._jwt_secret, algorithms=["HS256"])
            g.username = payload["username"]
        except jwt.ExpiredSignatureError:
            r = jsonify(Response().error("Token 过期").__dict__)
            r.status_code = 401
            return r
        except jwt.InvalidTokenError:
            r = jsonify(Response().error("Token 无效").__dict__)
            r.status_code = 401
            return r

    def check_port_in_use(self, port: int) -> bool:
        """跨平台检测端口是否被占用"""
        try:
            # 创建 IPv4 TCP Socket
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            # 设置超时时间
            sock.settimeout(2)
            result = sock.connect_ex(("127.0.0.1", port))
            sock.close()
            # result 为 0 表示端口被占用
            return result == 0
        except Exception as e:
            logger.warning(f"检查端口 {port} 时发生错误: {e!s}")
            # 如果出现异常，保守起见认为端口可能被占用
            return True

    def get_process_using_port(self, port: int) -> str:
        """获取占用端口的进程详细信息"""
        try:
            for conn in psutil.net_connections(kind="inet"):
                if cast(_AddrWithPort, conn.laddr).port == port:
                    try:
                        process = psutil.Process(conn.pid)
                        # 获取详细信息
                        proc_info = [
                            f"进程名: {process.name()}",
                            f"PID: {process.pid}",
                            f"执行路径: {process.exe()}",
                            f"工作目录: {process.cwd()}",
                            f"启动命令: {' '.join(process.cmdline())}",
                        ]
                        return "\n           ".join(proc_info)
                    except (psutil.NoSuchProcess, psutil.AccessDenied) as e:
                        return f"无法获取进程详细信息(可能需要管理员权限): {e!s}"
            return "未找到占用进程"
        except Exception as e:
            return f"获取进程信息失败: {e!s}"

    def _init_jwt_secret(self) -> None:
        if not self.config.get("dashboard", {}).get("jwt_secret", None):
            # 如果没有设置 JWT 密钥，则生成一个新的密钥
            jwt_secret = os.urandom(32).hex()
            self.config["dashboard"]["jwt_secret"] = jwt_secret
            self.config.save_config()
            logger.info("Initialized random JWT secret for dashboard.")
        self._jwt_secret = self.config["dashboard"]["jwt_secret"]

    @staticmethod
    def _resolve_dashboard_ssl_config(
        ssl_config: dict,
    ) -> tuple[bool, dict[str, str]]:
        cert_file = (
            os.environ.get("DASHBOARD_SSL_CERT")
            or os.environ.get("ASTRBOT_DASHBOARD_SSL_CERT")
            or ssl_config.get("cert_file", "")
        )
        key_file = (
            os.environ.get("DASHBOARD_SSL_KEY")
            or os.environ.get("ASTRBOT_DASHBOARD_SSL_KEY")
            or ssl_config.get("key_file", "")
        )
        ca_certs = (
            os.environ.get("DASHBOARD_SSL_CA_CERTS")
            or os.environ.get("ASTRBOT_DASHBOARD_SSL_CA_CERTS")
            or ssl_config.get("ca_certs", "")
        )

        if not cert_file or not key_file:
            logger.warning(
                "dashboard.ssl.enable is set, but cert_file or key_file is missing. SSL disabled.",
            )
            return False, {}

        cert_path = Path(cert_file).expanduser()
        key_path = Path(key_file).expanduser()
        if not cert_path.is_file():
            logger.warning(
                f"dashboard.ssl.enable is set, but cert file is missing: {cert_path}. SSL disabled.",
            )
            return False, {}
        if not key_path.is_file():
            logger.warning(
                f"dashboard.ssl.enable is set, but key file is missing: {key_path}. SSL disabled.",
            )
            return False, {}

        resolved_ssl_config = {
            "certfile": str(cert_path.resolve()),
            "keyfile": str(key_path.resolve()),
        }

        if ca_certs:
            ca_path = Path(ca_certs).expanduser()
            if not ca_path.is_file():
                logger.warning(
                    f"dashboard.ssl.enable is set, but CA cert file is missing: {ca_path}. SSL disabled.",
                )
                return False, {}
            resolved_ssl_config["ca_certs"] = str(ca_path.resolve())

        return True, resolved_ssl_config

    def run(self):
        ip_addr = []
        dashboard_config = self.core_lifecycle.astrbot_config.get("dashboard", {})
        port = (
            str(dashboard_config.get("port", 6185))
            or os.environ.get("DASHBOARD_PORT", "").strip()
            or os.environ.get("ASTRBOT_DASHBOARD_PORT", "").strip()
        )
        host = (
            os.environ.get("DASHBOARD_HOST")
            or os.environ.get("ASTRBOT_DASHBOARD_HOST")
            or dashboard_config.get("host", "0.0.0.0")
        )
        enable = dashboard_config.get("enable", True)
        ssl_config = dashboard_config.get("ssl", {})
        if not isinstance(ssl_config, dict):
            ssl_config = {}
        ssl_enable = _parse_env_bool(
            os.environ.get("DASHBOARD_SSL_ENABLE")
            or os.environ.get("ASTRBOT_DASHBOARD_SSL_ENABLE"),
            bool(ssl_config.get("enable", False)),
        )
        resolved_ssl_config: dict[str, str] = {}
        if ssl_enable:
            ssl_enable, resolved_ssl_config = self._resolve_dashboard_ssl_config(
                ssl_config,
            )
        scheme = "https" if ssl_enable else "http"

        if not enable:
            logger.info("WebUI disabled.")
            return None

        logger.info("Starting WebUI at %s://%s:%s", scheme, host, port)
        if host == "0.0.0.0":
            logger.info(
                "WebUI listens on all interfaces. Check security. Set dashboard.host in data/cmd_config.json to change it.",
            )

        if host not in ["localhost", "127.0.0.1"]:
            try:
                ip_addr = get_local_ip_addresses()
            except Exception as _:
                pass
        if isinstance(port, str):
            port = int(port)

        if self.check_port_in_use(port):
            process_info = self.get_process_using_port(port)
            logger.error(
                f"错误：端口 {port} 已被占用\n"
                f"占用信息: \n           {process_info}\n"
                f"请确保：\n"
                f"1. 没有其他 Miku AI 实例正在运行\n"
                f"2. 端口 {port} 没有被其他程序占用\n"
                f"3. 如需使用其他端口，请修改配置文件",
            )

            raise Exception(f"端口 {port} 已被占用")

        parts = [f"\n ✨✨✨\n  Miku AI v{VERSION} 面板已就绪\n\n"]
        parts.append(f"   ➜  Local: {scheme}://localhost:{port}\n")
        for ip in ip_addr:
            parts.append(f"   ➜  Network: {scheme}://{ip}:{port}\n")
        parts.append("   ➜  默认账户/密码: miku / miku\n ✨✨✨\n")
        display = "".join(parts)

        if not ip_addr:
            display += (
                "Set dashboard.host in data/cmd_config.json to enable remote access.\n"
            )

        logger.info(display)

        # 配置 Hypercorn
        config = HyperConfig()
        config.bind = [f"{host}:{port}"]
        if ssl_enable:
            config.certfile = resolved_ssl_config["certfile"]
            config.keyfile = resolved_ssl_config["keyfile"]
            if "ca_certs" in resolved_ssl_config:
                config.ca_certs = resolved_ssl_config["ca_certs"]

        # 根据配置决定是否禁用访问日志
        disable_access_log = dashboard_config.get("disable_access_log", True)
        if disable_access_log:
            config.accesslog = None
        else:
            # 启用访问日志，使用简洁格式
            config.accesslog = "-"
            config.access_log_format = "%(h)s %(r)s %(s)s %(b)s %(D)s"

        return serve(self.app, config, shutdown_trigger=self.shutdown_trigger)

    async def shutdown_trigger(self) -> None:
        await self.shutdown_event.wait()
        logger.info("Miku AI WebUI 已经被关闭")
