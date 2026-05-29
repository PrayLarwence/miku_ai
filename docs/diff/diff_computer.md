# Computer Use 沙盒 — 完整差异

> Computer 是 AstrBot 给 LLM 提供"操作虚拟机/容器"的能力（Anthropic Computer Use 风格）。booters 目录下每个文件代表一种"启动器"：本地子进程、shipyard（容器编排）、shipyard_neo（远端 Bay 沙盒服务）。YUNGE 的改动主要是**降低默认超时**和**移除 shell 后台命令构造逻辑**。

---

## 0. 文件清单

| 路径 | 真+/真- | 状态 |
|---|---|---|
| `core/computer/__init__.py` | +1 / 0 | 新增空 init |
| `core/computer/booters/base.py` | +1 / -9 | 改 `shutdown` 签名 |
| `core/computer/booters/local.py` | +2 / -2 | 默认 timeout 300 → 30 |
| `core/computer/booters/shipyard.py` | +2 / -88 | 删 `ShipyardShellWrapper` 整段 |
| `core/computer/booters/shipyard_neo.py` | +7 / -113 | 大裁剪：删后台 shell + 删 readiness gate |
| `core/computer/booters/shell_background.py` | 全删 | 18 行 |
| `core/computer/computer_client.py` | +2 / -20 | 删 shipyard_neo 特殊清理分支 |
| `core/computer/olayer/shell.py` | +1 / -1 | 默认 timeout 300 → 30 |

---

## 1. core/computer/__init__.py — 新增空 init（+1 行）

YUNGE 加了一个空 `__init__.py`（AstrBot 原本是 namespace 包，无 `__init__.py`）。便携模式打包时显式 init 让 PyInstaller 等工具能识别。

---

## 2. core/computer/booters/base.py — 简化 shutdown 签名（真+1/-9）

| 行 | 改动 |
|---|---|
| `base.py:39` | YUNGE `async def shutdown(self) -> None: ...`（无参） |
| AstrBot 原 `base.py:39-47`（删） | 删除 9 行：原 `async def shutdown(self, **kwargs)` 接受任意 kwargs（用于 ShipyardNeoBooter 的 `delete_sandbox=True`） + docstring 解释 |

---

## 3. core/computer/booters/local.py — 默认 timeout 缩短（真+2/-2）

| 行 | 改动 |
|---|---|
| `local.py:93` | `timeout: int \| None = 30`（原 `300`） |
| `local.py:126` | `timeout=timeout`（原 `timeout=timeout or 300` 兜底默认） |

---

## 4. core/computer/booters/shipyard.py — 删 ShipyardShellWrapper（真+2/-88）

`ShipyardShellWrapper` 是把 shipyard 的 ShellComponent 包一层，提供"后台命令执行"。YUNGE 整段砍掉。

| 行 | 改动 |
|---|---|
| AstrBot 原 `shipyard.py:3`（删） | 删 `import shlex` |
| AstrBot 原 `shipyard.py:13`（删） | 删 `from .shell_background import build_detached_shell_command` |
| AstrBot 原 `shipyard.py:15-97`（删） | 删整个 `ShipyardShellWrapper` 类（约 83 行）：包含 `_maybe_model_dump` helper + `__init__` + `async def exec` 等 |

---

## 5. core/computer/booters/shipyard_neo.py — 大裁剪（真+7/-113）

| 行 | 改动 |
|---|---|
| AstrBot 原 `shipyard_neo.py:3`（删） | 删 `import asyncio` |
| AstrBot 原 `shipyard_neo.py:17`（删） | 删 `from .shell_background import build_detached_shell_command` |
| `shipyard_neo.py:99` | YUNGE 默认 `timeout: int \| None = 30`（原 300） |
| `shipyard_neo.py:119` | YUNGE 直接 inline 拼后台命令：`run_command = f"nohup sh -lc {shlex.quote(run_command)} >/tmp/astrbot_bg.log 2>&1 & echo $!"`（原本调 `build_detached_shell_command(run_command)`） |
| `shipyard_neo.py:123` | `timeout=timeout or 30`（原 `or 300`） |
| `shipyard_neo.py:139` | YUNGE 把后台运行返回的 stdout 简化为直接透传子进程 stdout（原本拼接 "Command is running in the background. pid=..."） |
| AstrBot 原 `shipyard_neo.py:442-444`（删） | 删 `_wait_until_ready` 调用（"Readiness gate: wait until sandbox session is READY" 的等待循环） |

---

## 6. core/computer/booters/shell_background.py — 整体删除（18 行）

整个文件删除。原本提供一个 helper：

```
def build_detached_shell_command(cmd: str) -> str:
    # nohup + setsid + redirect 标准化
```

YUNGE 在唯一调用方（`shipyard_neo.py:119`）改成 inline 写法后，这个文件就没用了。

---

## 7. core/computer/computer_client.py — 删 shipyard_neo 清理分支（真+2/-20）

| 行 | 改动 |
|---|---|
| AstrBot 原 `computer_client.py:448-463`（删） | 删 16 行：rebuild booter 前的 stale 资源清理逻辑（"Only ShipyardNeoBooter supports delete_sandbox; other booters are not backed by a remote sandbox manager"） |
| `computer_client.py:448` | YUNGE 改为单行注释 `# rebuild` |
| AstrBot 原 `computer_client.py:527-530`（删） | 删 4 行：另一处 shutdown 前的 `if booter_type == "shipyard_neo": await client.shutdown(delete_sandbox=True) else: await client.shutdown()` |

> 配合 §2 把 `shutdown` 签名简化为无参，这两处特殊分支不再需要。

---

## 8. core/computer/olayer/shell.py — 默认 timeout 缩短（真+1/-1）

| 行 | 改动 |
|---|---|
| `shell.py:16` | `timeout: int \| None = 30`（原 300） |

---

## 9. 一句话总结

YUNGE 把 Computer Use 默认超时从 5 分钟降到 30 秒（更适合便携调试）；删除 `shell_background.py` helper 与 `shipyard.py` 的 `ShipyardShellWrapper` 类（约 100 行）；删除 `shipyard_neo.py` 中 readiness 等待与详细的 pid 提示，inline 化后台命令构造；统一 `Booter.shutdown()` 签名，删除 `delete_sandbox` 特殊参数路径。
