"""
精简版 Platform 路由 —— Miku AI 仅保留 WebChat，不提供外部平台管理 API。

保留:
    - GET /api/platform/stats → 返回空平台列表（仅 webchat 内部使用）
"""

from .route import Response, Route


class PlatformRoute(Route):
    """精简版平台路由"""

    def __init__(self, context) -> None:
        super().__init__(context)
        self._register_routes()

    def _register_routes(self) -> None:
        self.app.add_url_rule(
            "/api/platform/stats",
            view_func=self.get_platform_stats,
            methods=["GET"],
        )

    async def get_platform_stats(self):
        """返回空平台统计（Miku AI 仅运行 WebChat，无外部平台接入）。"""
        return Response().ok(
            {
                "platforms": [],
                "summary": {
                    "total": 0,
                    "running": 0,
                    "error": 0,
                    "total_errors": 0,
                },
            }
        ).__dict__
