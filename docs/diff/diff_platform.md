# 平台层 (Platform) — 完整差异

> YUNGE 是面向单用户便携部署，**只保留 webchat 一个平台适配器**。这一刀让安装体积、依赖树（aiocqhttp / lark-oapi / dingtalk-stream / telethon / 等）大幅缩小。

---

## 0. 文件清单

| 路径 | 真+/真- | 状态 | 角色 |
|---|---|---|---|
| `core/platform/manager.py` | +3 / -65 | 大裁剪 | 删 17 个适配器加载分支 |
| `core/platform/platform.py` | +1 / -4 | 微改 | `Metric.upload` 同步化 |
| `core/platform/astr_message_event.py` | +0 / -6 | 微改 | 删 `_force_stopped` 独立标志 |
| `core/platform/sources/{17 平台目录}` | 全删 | — | 见 §4 |

---

## 1. core/platform/manager.py — 适配器加载分支裁剪（真+3/-65）

`PlatformManager.load_platform()` 内嵌 `match platform_config["type"]: case "..."` 分支，每个 case 动态 import 对应平台 Adapter。AstrBot 18 个，YUNGE 1 个。

| 行 | 改动 |
|---|---|
| `manager.py:130` | `match platform_config["type"]:` |
| `manager.py:131-133` | YUNGE 仅保留 `case "webchat":` 分支 |
| AstrBot 原 `manager.py:131-198`（删） | 删除 17 个 case 分支：`aiocqhttp / qq_official / qq_official_webhook / lark / dingtalk / telegram / wecom / wecom_ai_bot / weixin_official_account / discord / misskey / weixin_oc / slack / satori / line / kook / mattermost`（约 65 行） |

> `PlatformManager` 类的"insert / get / select adapter"主体逻辑没动；YUNGE 框架层依然支持平台扩展，只是默认内置只剩 webchat。

---

## 2. core/platform/platform.py — Metric.upload 同步化（真+1/-4）

| 行 | 改动 |
|---|---|
| AstrBot 原 `platform.py:2`（删） | 删 `import asyncio`（不再需要 `create_task`） |
| AstrBot 原 `platform.py:141-143`（删） | 删 `asyncio.create_task(Metric.upload(...))` 三行 |
| `platform.py:141` | YUNGE 改为 `await Metric.upload(msg_event_tick=1, adapter_name=self.meta().name)` |

**影响**：原本 fire-and-forget；YUNGE 等指标上传完才继续。`Metric.upload` 在 YUNGE 实测多为 noop / 本地 stub（详见 [diff_misc.md](diff_misc.md) `utils/metrics.py`），所以阻塞影响小。

---

## 3. core/platform/astr_message_event.py — 删 `_force_stopped`（真+0/-6）

| 行 | 改动 |
|---|---|
| AstrBot 原 `__init__:55`（删） | 删 `self._force_stopped: bool = False` 字段 |
| `astr_message_event.py:337` | `def stop_event` |
| AstrBot 原 `stop_event:340`（删） | 删 `self._force_stopped = True` 行 |
| `astr_message_event.py:344` | `def continue_event` |
| AstrBot 原 `continue_event:348`（删） | 删 `self._force_stopped = False` 行 |
| `astr_message_event.py:351` | `def is_stopped` |
| AstrBot 原 `is_stopped:354-355`（删） | 删 `if self._force_stopped: return True` 短路 |

**影响**：原本 `_force_stopped` 是为防止 `clear_result()` 误把"已 stop"状态清掉的加固。YUNGE 删掉后，回到"通过 `_result.is_stopped()` 判断"的简单逻辑——若插件在 `stop_event()` 后再调 `clear_result()`，事件会"恢复传播"。

---

## 4. 删除的 17 个平台适配器目录

| # | 目录 | 平台 | 主要类 |
|---|---|---|---|
| 1 | `aiocqhttp/` | OneBot 协议（QQ go-cqhttp） | `AiocqhttpAdapter` |
| 2 | `qqofficial/` | QQ 官方机器人 API | `QQOfficialPlatformAdapter` |
| 3 | `qqofficial_webhook/` | QQ 官方 Webhook | `QQOfficialWebhookPlatformAdapter` |
| 4 | `lark/` | 飞书 | `LarkPlatformAdapter` |
| 5 | `dingtalk/` | 钉钉 | `DingtalkPlatformAdapter` |
| 6 | `telegram/` | Telegram Bot | `TelegramPlatformAdapter` |
| 7 | `wecom/` | 企业微信 | `WecomPlatformAdapter` |
| 8 | `wecom_ai_bot/` | 企业微信智能机器人 | `WecomAIBotAdapter` |
| 9 | `weixin_official_account/` | 微信公众号 | `WeixinOfficialAccountPlatformAdapter` |
| 10 | `discord/` | Discord | `DiscordPlatformAdapter` |
| 11 | `misskey/` | Misskey | `MisskeyPlatformAdapter` |
| 12 | `weixin_oc/` | 微信开放通信 | `WeixinOCAdapter` |
| 13 | `slack/` | Slack | `SlackAdapter` |
| 14 | `satori/` | Satori 协议 | `SatoriPlatformAdapter` |
| 15 | `line/` | LINE | `LinePlatformAdapter` |
| 16 | `kook/` | KOOK | `KookPlatformAdapter` |
| 17 | `mattermost/` | Mattermost | `MattermostPlatformAdapter` |

---

## 5. 一句话总结

`manager.py:131-133` 只剩 webchat case；`platform.py:141` Metric.upload 改 await；`astr_message_event.py:337-355` 删 `_force_stopped` 加固。配合删除 17 个平台目录，把 18 平台收敛为 1 平台。
