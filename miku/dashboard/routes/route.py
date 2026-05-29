from dataclasses import dataclass

from quart import Quart

from miku.core.config.astrbot_config import AstrBotConfig


@dataclass
class RouteContext:
    config: AstrBotConfig
    app: Quart


class Route:
    routes: list | dict

    def __init__(self, context: RouteContext) -> None:
        self.app = context.app
        self.config = context.config

    def register_routes(self) -> None:
        def _add_rule(path, method, func) -> None:
            # 统一添加 /api 前缀
            full_path = f"/api{path}"
            self.app.add_url_rule(full_path, view_func=func, methods=[method])

        # 兼容字典和列表两种格式
        routes_to_register = (
            self.routes.items() if isinstance(self.routes, dict) else self.routes
        )

        for route, definition in routes_to_register:
            if isinstance(definition, list):
                # 判断是 [method, func] 还是 [[method, func], ...]
                if len(definition) == 2 and isinstance(definition[0], str):
                    # 单路由：["GET", func]
                    method, func = definition
                    _add_rule(route, method, func)
                else:
                    # 多路由：[[method, func], ...]
                    for method, func in definition:
                        _add_rule(route, method, func)
            else:
                method, func = definition
                _add_rule(route, method, func)


@dataclass
class Response:
    status: str | None = None
    message: str | None = None
    data: dict | list | None = None

    def error(self, message: str):
        self.status = "error"
        self.message = message
        self.data = {}
        return self

    def ok(self, data: dict | list | None = None, message: str | None = None):
        self.status = "ok"
        if data is None:
            data = {}
        self.data = data
        self.message = message
        return self
