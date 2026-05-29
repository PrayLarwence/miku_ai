# Star / 插件框架 — 完整差异

> Star 是 AstrBot 的插件抽象层（Plugin = Star，每个插件是一个 `Star` 子类）。本文盘点 YUNGE 在这一层做的裁剪。

---

## 0. 文件清单

| 路径 | 真+/真- | 状态 |
|---|---|---|
| `core/star/base.py` | +1 / -32 | 改 |
| `core/star/context.py` | +24 / -62 | 改 |
| `core/star/star.py` | +0 / -5 | 微改 |
| `core/star/star_manager.py` | +3 / -63 | 改 |
| `core/star/star_tools.py` | +12 / -16 | 改 |
| `core/star/updator.py` | +9 / -17 | 改 |
| `core/updator.py` | +9 / -67 | 大改（原"在线更新"功能移除） |
| `cli/commands/cmd_plug.py` | +1 / -1 | 微改 |

---

## 1. core/star/base.py — 删 t2i / html_render 接口（真+1/-32）

`Star` 基类（实际是 `core/star/star.py:14` `class Star`）的伴生模块。AstrBot 原本在 `Star` 类上提供两个 helper 方法 `text_to_image()` 与 `html_render()`，给插件直接渲染图片用。YUNGE 移除。

| 行 | 改动 |
|---|---|
| AstrBot 原 `base.py:6`（删） | 删 `from astrbot.core import html_renderer` import |
| `base.py:11` | YUNGE `logger = logging.getLogger("miku")`（原为 `"astrbot"`） |
| AstrBot 原 `base.py:50-79`（删） | 删整个 `async def text_to_image(...)`（约 14 行）→ 调用 `html_renderer.render_t2i` |
| AstrBot 原 `base.py:65-79`（删） | 删整个 `async def html_render(tmpl, data, ...)`（约 8 行）→ 调用 `html_renderer.render_custom_template` |

**对插件的影响**：依赖 `await self.text_to_image(...)` 或 `await self.html_render(...)` 的旧插件在 YUNGE 上会抛 `AttributeError`。

---

## 2. core/star/context.py — 简化 Context API（真+24/-62）

`Context` 是 AstrBot 给插件的"工具袋"，每个 Star 实例通过 `self.context` 访问框架能力。

| 行 | 改动 |
|---|---|
| `context.py:50` | `class PlatformManagerProtocol(Protocol)` |
| `context.py:54` | `class Context` |
| `context.py:63` | `__init__` |
| `context.py:100` | `async def llm_generate` |
| `context.py:144` | `async def tool_loop_agent` |
| `context.py:258` | `async def get_current_chat_provider_id(umo)` |
| `context.py:275-289` | `get_registered_star / get_all_stars / get_llm_tool_manager / activate/deactivate_llm_tool` |
| `context.py:314` | `def get_provider_by_id(...)` |
| `context.py:335` | `def get_all_providers()` |
| `context.py:339` | `def get_all_tts_providers() -> list:`（返回空 list 兼容签名） |
| `context.py:343` | `def get_all_stt_providers() -> list:`（同上） |
| `context.py:347` | `def get_all_embedding_providers() -> list:`（同上） |
| `context.py:353` | `def get_using_provider(umo)` |
| `context.py:378` | `def get_using_tts_provider(umo)`（兼容 stub） |
| `context.py:382` | `def get_using_stt_provider(umo)`（兼容 stub） |
| `context.py:474` | `def register_web_api(...)` |
| AstrBot 原（删） | 删 sub-agent / handoff 相关接口；删 t2i 相关接口；删 STT/TTS provider 真正调用方法 |

> 关键点：`get_all_tts_providers / get_all_stt_providers / get_using_tts_provider / get_using_stt_provider` 的签名保留但实现改为返回空 list / None，避免大量插件因 `AttributeError` 直接挂掉，只是调用结果为空。

---

## 3. core/star/star.py — 微改（真+0/-5）

| 行 | 改动 |
|---|---|
| `star.py:14` | `class Star(CommandParserMixin, PluginKVStoreMixin)` |
| `star.py:23` | `__init__(context, config)` |
| `star.py:36-49` | `__init_subclass__ / initialize / terminate` |
| AstrBot 原（删） | 删 5 行 docstring 提及 "html_renderer / sub-agent" 的内容 |

---

## 4. core/star/star_manager.py — 改插件加载流程（真+3/-63）

`PluginManager` 是 dashboard 上"插件"页的后端实现，处理插件的 install / load / reload / uninstall / turn_on/off。

| 行 | 改动 |
|---|---|
| `star_manager.py:62-66` | `class PluginVersionIncompatibleError / PluginDependencyInstallError` |
| `star_manager.py:83-91` | `class ImportDependencyRecoveryMode / ImportDependencyRecoveryState` |
| `star_manager.py:176` | `class PluginManager` |
| `star_manager.py:177-207` | `__init__` |
| `star_manager.py:766` | `async def reload(self, specified_plugin_name=None)` |
| `star_manager.py:822` | `async def load(...)` |
| `star_manager.py:1308` | `async def install_plugin(...)` |
| `star_manager.py:1421` | `async def uninstall_plugin(...)` |
| `star_manager.py:1596` | `async def update_plugin(...)` |
| `star_manager.py:1727` | `async def install_plugin_from_file(...)` |
| AstrBot 原（删） | 删 sub-agent 注册与卸载分支；删插件市场源拉取相关辅助；删 `text_to_image` 模板加载；删 60+ 行的 demo_mode 限流分支 |

---

## 5. core/star/star_tools.py — 改（真+12/-16）

| 文件 | 改动 |
|---|---|
| `star_tools.py` | 提供给插件的工具注册辅助；YUNGE 删除 sub-agent handoff 工具注册分支 |

---

## 6. core/star/updator.py — 改（真+9/-17）

`PluginUpdator` 类负责"插件市场拉取列表 + 单插件升级"。YUNGE 改插件市场源 / 删官方 soulter API 调用。

| 行 | 改动 |
|---|---|
| AstrBot 原 `updator.py` | 写死 `"https://api.soulter.top/astrbot/plugins"` 与 `https://api.soulter.top/astrbot/plugins-md5` 作为官方插件市场 |
| YUNGE | 改为本地 / 自托管的源；md5 校验逻辑保留 |

> 实际改动跨 `updator.py` 与 `dashboard/routes/plugin.py:246-` 两处（详见 [diff_dashboard_routes.md §8](diff_dashboard_routes.md)）。

---

## 7. core/updator.py — 在线更新功能整体移除（真+9/-67）

这是 `class AstrBotUpdator` 所在的文件（不是 `core/star/updator.py`）。原本继承 `RepoZipUpdator`，提供"检查 / 下载 / 解压 / 重启"完整的在线更新链路。YUNGE 删除整个在线更新，只保留"重启子进程"。

| 行 | 改动 |
|---|---|
| `updator.py:1-6` | YUNGE 顶部新增 docstring："运行时重启工具 — 在线更新功能已移除，保留类名 AstrBotUpdator 沿用上游引用关系，仅承担'重启 + 终止子进程'职责" |
| AstrBot 原 `updator.py:8`（删） | 删 `from astrbot.core.config.default import VERSION` |
| `updator.py:16` | YUNGE `from .zip_updator import RepoZipUpdator`（去掉 `ReleaseInfo`） |
| `updator.py:19` | `class AstrBotUpdator(RepoZipUpdator)` 类签名保留 |
| `updator.py:22` | `__init__` 简化（不再设 `ASTRBOT_RELEASE_API`） |
| `updator.py:26` | `def terminate_child_processes` |
| `updator.py:46-50` | `_is_option_arg / _collect_flag_values` |
| `updator.py:72-104` | `_resolve_webui_dir_arg / _build_frozen_reboot_args / _reset_pyinstaller_environment / _build_reboot_argv / _exec_reboot` |
| `updator.py:112` | `_reboot(delay=3)` |
| AstrBot 原 `updator.py:130-185`（删） | 删 `async def check_update`（10 行）、`async def get_releases`（2 行）、`async def update` 主体（45 行）—— 三个方法共 ~57 行 |

---

## 8. cli/commands/cmd_plug.py — 微改（真+1/-1）

| 行 | 改动 |
|---|---|
| `cmd_plug.py:87` | YUNGE 把生成的 `README.md` 模板里的 `[Documentation](https://docs.astrbot.app)` 改为 `[Help](/help)` |

> CLI 的 `astrbot plug new` 命令用来 scaffold 一个新插件骨架；YUNGE 把上游官方文档链接改成本地 help 路径。

---

## 9. 一句话总结

`base.py:50-79` 删 t2i + html_render 两个 Star 实例方法；`context.py:339-382` 把 STT/TTS provider 接口降级为兼容 stub；`updator.py:130-185` 移除整个在线更新链路（保留重启）；`star_manager.py` 删 sub-agent / demo_mode 分支；`cmd_plug.py:87` 改插件 scaffold 文档链接。整体框架契约保留，旧插件能加载但调 t2i / sub-agent / TTS 真实能力会拿到空结果。
