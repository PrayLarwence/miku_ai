# 配置裁剪 — 完整差异

> `core/config/default.py` 是整个 AstrBot 默认配置的"超大字典+元数据"（既存 default 值，也存 dashboard 配置项 schema）。这一刀是 **真+30/-1227**：删除全部第三方平台、TTS/STT、subagent、t2i 渲染相关配置。

---

## 0. 文件清单

| 路径 | 真+/真- | 状态 |
|---|---|---|
| `core/config/default.py` | +30 / -1227 | 大裁剪 |
| `core/config/astrbot_config.py` | +1 / -1 | 微改（仅 import 改名） |

> AstrBot 总行数 4283，YUNGE 总行数 3086（净 -1197 行，剩余 +30 是改名后调整的少量空行）。

---

## 1. core/config/default.py — 顶层结构对照

`DEFAULT_CONFIG` 字典里的"顶层 key"层级被删 3 个、被瘦身 4 个。下面所有行号都指 **AstrBot 原文件**（`D:\AstrBot-master\AstrBot-master\astrbot\core\config\default.py`），YUNGE 侧对应位置见 `miku/core/config/default.py`。

### 1.1 完全删除的顶层 key（共 -21 行）

| 行 | Key | 角色 |
|---|---|---|
| `default.py:197-206` | `subagent_orchestrator` | sub-agent 编排器开关与 agent 列表（10 行） |
| `default.py:207-210` | `provider_stt_settings` | STT 总开关与默认 provider id（4 行） |
| `default.py:211-217` | `provider_tts_settings` | TTS 总开关、触发概率、默认 provider id（7 行） |

### 1.2 显著瘦身的顶层 key

| 行 | Key | 瘦身量 | 主要删除内容 |
|---|---|---|---|
| `default.py:101-191` | `provider_settings` | -10 行 | 删 `agent_runner_type`（third-party 选项被砍）、`coze_settings`、`dify_settings` 默认配置 |
| `default.py:260-271` | `platform_specific` | -11 行 | 删 17 个 IM 平台的预设 specific 字段（QQ/微信/钉钉/飞书等） |
| `default.py:1156-2912` | `provider_group`（dashboard 元数据） | -356 行 | 删 STT/TTS/embed/rerank 相关 provider 类型枚举与表单字段 |
| `default.py:3012-3763` | `ai_group`（dashboard 元数据） | -139 行 | 删 t2i / TTS 触发概率 / sub-agent 编排面板 / 第三方 agent runner 的所有表单 schema |

### 1.3 完全保留的顶层 key（结构无变化，只可能因前面 key 删除而行号位移）

`platform_settings / content_safety / admins_id / no_proxy / dashboard / platform / wake_prefix / persona / plugin_set / kb_names / kb_fusion_top_k / kb_final_top_k / kb_agentic_mode / disable_builtin_commands / log_level / log_file_* / temp_dir_max_size / trace_* / pip_install_arg / pypi_index_url / timezone / callback_api_base / default_kb_collection / t2i_word_threshold / t2i_strategy / t2i_endpoint / t2i_use_file_service / t2i_active_template / http_proxy / provider_sources / provider`

> **注**：`t2i_*` 配置项在 default.py 里**保留**了；YUNGE 删的是真正调用渲染的代码（`html_renderer.initialize()` 调用 + `result_decorate/stage.py` 触发逻辑，详见 [diff_pipeline_agent.md §1, §3](diff_pipeline_agent.md)）。default 里的字段被留作向后兼容老 yaml。

### 1.4 dashboard schema 顶层组（YUNGE 行号）

| 行 | Group | 说明 |
|---|---|---|
| `miku default.py:454-1854` | `provider_group` | dashboard "Provider" 标签页的字段 schema（瘦身 356 行） |
| `miku default.py:1856-1941` | `misc_config_group` | 杂项（保持） |
| `miku default.py:1954-2566` | `ai_group` | "AI 设置" 标签页 schema（瘦身 139 行） |
| `miku default.py:2567-2787` | `platform_group` | "平台" 标签页（保持，但 platform_specific 字段已变） |
| `miku default.py:2788-2804` | `plugin_group` | 插件管理（保持） |
| `miku default.py:2805-2935` | `ext_group` | 扩展（保持） |
| `miku default.py:2939-3072` | `system_group` | 系统（保持） |

---

## 2. core/config/astrbot_config.py — 微改（真+1/-1）

| 行 | 改动 |
|---|---|
| 全文 | 仅 `from astrbot.` → `from miku.` 类改名调整，无功能改动 |

---

## 3. 一句话总结

`default.py:197-217` 删 3 个顶层 key（subagent / STT / TTS）；`default.py:101-191` `260-271` 删条目内嵌的第三方 provider/平台预设；`default.py:1156-2912` `3012-3763` 删 dashboard schema 里 STT/TTS/sub-agent/t2i 表单（共 -495 行）。剩余结构完整保留，老 yaml 配置不会因为打开 YUNGE 直接报错。
