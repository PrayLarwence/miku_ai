# YUNGE

> AI 个人知识库助手 + Agent 能力

YUNGE 是一款面向个人的 AI 助手，定位"对话即知识沉淀"。基于 [AstrBot](https://github.com/AstrBotDevs/AstrBot) 架构二次开发，裁剪到单用户、单平台（WebChat）场景，专注三件事：

1. **聊得清楚** —— 多模型流式对话，Persona / 上下文 / 压缩齐全
2. **记得住** —— 你的资料和你聊过的事都会被沉淀进检索库，未来对话自动召回
3. **会动手** —— 通过工具调用、MCP、定时任务和可选 Computer Use 沙箱，让助手不止于"嘴上说"

中文版 / [English](README.md)

---

## 项目目标与定位

本项目是软件工程课程设计的产出。立项时的目标只有一句话：

> 做一个**带 Agent 能力的个人知识库助手**——能聊天、能记住自己看过的资料、能在对话里回忆、能调用工具完成事情。

最终交付围绕两条主线展开：

- **个人知识库**：外接资料（PDF / DOCX / Markdown / TXT / EPUB ...）+ 对话沉淀（LLM 自动抽取的画像条目）双源共享检索引擎
- **Agent 能力**：工具调用循环 + MCP 协议 + Computer Use + 定时任务

---

## 功能模块

| 模块 | 说明 |
|------|------|
| **WebChat 对话** | Vue 3 流式聊天界面，多模型切换 / Persona / 上下文压缩 / 历史持久化 |
| **外接知识库 (RAG)** | 上传 PDF / TXT / DOCX / Markdown / EPUB / Image，混合检索：FAISS 向量 + BM25 稀疏 + RRF 融合 + 可选 rerank |
| **对话知识库** | LLM 自动从历史会话抽取八类条目（兴趣 / 项目 / 技术栈 / 个性 / 学习 / 偏好 / 概念 / 关系），与外接库共享同一检索引擎 |
| **画像与时间线** | 基于对话历史生成 MBTI 倾向分析、日 / 周 / 月摘要时间线 |
| **Agent 工具循环** | 工具发现 → 调用 → 结果回灌的多轮 ReAct 循环，支持知识库检索 / 网络搜索 / Computer Use |
| **MCP 客户端** | 接入符合 Model Context Protocol 的外部工具服务 |
| **定时任务** | 主动型 Agent，按 cron 触发对话或工具调用 |
| **模型适配** | OpenAI / Anthropic / Gemini / DeepSeek / Ollama / 任何 OpenAI 兼容 API；Embedding 同样可热插拔 |

### 双知识库怎么协作

外接库与对话库底层共用 FAISS + KBHelper，但语义上分离：

- 每轮对话**自动**对对话库做一次独立检索（top_k=3），命中条目以「关于用户的相关信息」段注入 system_prompt
- 用户启用的外接库以「可能相关的资料」段注入
- LLM 据此区分「用户事实」与「参考资料」，互不稀释

---

## 技术栈

| 层级 | 技术 |
|------|------|
| 后端 | Python 3.12 + Quart（异步 Web） |
| 前端 | Vue 3 + Vuetify 3 + TypeScript + Vite |
| 持久化 | SQLite（会话 / 知识元数据 / 配置） |
| 向量检索 | FAISS（IndexFlatL2 + IndexIDMap） |
| 稀疏检索 | rank_bm25 + 中文分词 |
| Agent | 自研 ToolLoopAgentRunner + MCP Client |

---

## 快速开始

### 前置要求

- Windows 10/11
- Python 3.12+
- Node.js 18+ （首次构建前端需要）

### 一键安装（推荐）

```bash
setup.bat
```

脚本会：检测 Python → 创建 venv → 装依赖 → 构建前端。

### 手动安装

```bash
# 1. 后端依赖
pip install -r requirements.txt

# 2. 构建前端
cd dashboard
npm install
npm run build
cd ..

# 3. 部署前端产物到运行目录
xcopy dashboard\dist data\dist\ /e /i /q

# 4. 启动
python main.py
```

或直接双击 `_run_miku.bat`（向后兼容文件名）启动。

启动后访问 **http://localhost:16185**，默认账户 / 密码：`miku / miku`（请尽快修改）。

> **关于 Embedding 配置**：知识库需要至少配置一个 Embedding Provider 才能入库。可在「模型配置」页添加，常见可选：
>
> - 云端：OpenAI 兼容（含硅基流动 / 智谱 / 阿里百炼 / DeepSeek 等，多家有免费额度）
> - 云端：Gemini Embedding
> - 本地：Ollama + nomic-embed-text （`ollama pull nomic-embed-text`，base_url 填 `http://localhost:11434/v1`）

---

## 使用指南

1. 浏览器打开 http://localhost:16185 登录
2. **模型配置** → 添加聊天模型 + Embedding Provider 的 API Key
3. **聊天** → 与 LLM 对话，记录自动持久化
4. **知识库** → 上传文档构建外接库，可全局或会话级启用
5. **对话知识库** → 选会话点「提取知识」让 LLM 抽取画像条目；之后自动参与每轮检索
6. **人格画像** → 查看 MBTI 分析、对话时间线
7. **定时任务 / MCP** → 在「更多」菜单下配置主动行为或外部工具

---

## 项目结构

```
miku/
├── core/
│   ├── agent/                # Agent 工具循环 + MCP
│   ├── knowledge_base/       # 检索引擎（FAISS + BM25 + 融合）
│   ├── provider/             # LLM / Embedding / Rerank 适配
│   ├── conversation_store.py # 会话消息存储
│   └── ...
├── dashboard/routes/         # Quart REST API
└── ...

dashboard/                    # Vue 3 前端
data/                         # 运行时数据（SQLite / 上传 / 索引）
```

---

## 声明

- 基于 [AstrBot](https://github.com/AstrBotDevs/AstrBot)（AGPLv3）二次开发
- 软件工程课程设计交付，非 AstrBot 官方版本
- 上游：https://github.com/AstrBotDevs/AstrBot
