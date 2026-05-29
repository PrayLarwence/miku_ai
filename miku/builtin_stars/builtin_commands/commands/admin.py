from miku.api import star
from miku.api.event import AstrMessageEvent, MessageChain
from miku.core.config.default import VERSION
from miku.core.utils.io import download_dashboard


class AdminCommands:
    def __init__(self, context: star.Context) -> None:
        self.context = context

    async def update_dashboard(self, event: AstrMessageEvent) -> None:
        """更新管理面板"""
        await event.send(MessageChain().message("⏳ Updating dashboard..."))
        await download_dashboard(version=f"v{VERSION}", latest=False)
        await event.send(MessageChain().message("✅ Dashboard updated successfully."))
