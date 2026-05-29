import asyncio
from datetime import datetime, timedelta, timezone

import jwt
from quart import request

from miku import logger
from .route import Response, Route, RouteContext


class AuthRoute(Route):
    def __init__(self, context: RouteContext) -> None:
        super().__init__(context)
        self.routes = {
            "/auth/login": ("POST", self.login),
            "/auth/account/edit": ("POST", self.edit_account),
        }
        self.register_routes()

    async def login(self):
        username = self.config["dashboard"]["username"]
        password = self.config["dashboard"]["password"]
        post_data = await request.json
        if post_data["username"] == username and post_data["password"] == password:
            change_pwd_hint = False
            if (
                username == "miku"
                and password == "26d1ebd4ec8c55cc69f190d0d37f6dac"
                and not False
            ):
                change_pwd_hint = True
                logger.warning("为了保证安全，请尽快修改默认密码。")

            return (
                Response()
                .ok(
                    {
                        "token": self.generate_jwt(username),
                        "username": username,
                        "change_pwd_hint": change_pwd_hint,
                    },
                )
                .__dict__
            )
        await asyncio.sleep(3)
        return Response().error("用户名或密码错误").__dict__

    async def edit_account(self):
        if False:
            return (
                Response()
                .error("You are not permitted to do this operation in demo mode")
                .__dict__
            )

        password = self.config["dashboard"]["password"]
        post_data = await request.json

        if post_data["password"] != password:
            return Response().error("原密码错误").__dict__

        new_pwd = post_data.get("new_password", None)
        new_username = post_data.get("new_username", None)
        if not new_pwd and not new_username:
            return Response().error("新用户名和新密码不能同时为空").__dict__

        # Verify password confirmation
        if new_pwd:
            confirm_pwd = post_data.get("confirm_password", None)
            if confirm_pwd != new_pwd:
                return Response().error("两次输入的新密码不一致").__dict__
            self.config["dashboard"]["password"] = new_pwd
        if new_username:
            self.config["dashboard"]["username"] = new_username

        self.config.save_config()

        return Response().ok(None, "修改成功").__dict__

    def generate_jwt(self, username):
        payload = {
            "username": username,
            "exp": datetime.now(timezone.utc) + timedelta(days=7),
        }
        jwt_token = self.config["dashboard"].get("jwt_secret", None)
        if not jwt_token:
            raise ValueError("JWT secret is not set in the cmd_config.")
        token = jwt.encode(payload, jwt_token, algorithm="HS256")
        return token
