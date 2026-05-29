# YUNGE

> AI personal knowledge-base assistant with agent capabilities

YUNGE is a single-user AI assistant built around the idea that **conversations should turn into knowledge**. It's a fork of [AstrBot](https://github.com/AstrBotDevs/AstrBot), trimmed to one user / one platform (WebChat) and focused on three things:

1. **Talk clearly** — multi-model streaming chat with personas, context, compression
2. **Remember** — your documents and the things you've said both flow into a shared retrieval index
3. **Act** — tool-calling loop, MCP, scheduled tasks and an optional Computer Use sandbox

[中文](README_zh.md) / English

---

## Goal

Software-engineering course project. The original goal was a single sentence:

> Build an **AI personal knowledge-base assistant with agent capabilities** — chat, remember the materials it has read, recall during conversation, call tools to get things done.

The deliverable revolves around two threads:

- **Personal knowledge base**: external documents (PDF / DOCX / Markdown / TXT / EPUB / images) plus dialogue precipitate (LLM-extracted profile entries) sharing a single retrieval engine
- **Agent capabilities**: tool-calling loop, MCP protocol, Computer Use, scheduled tasks

---

## Modules

| Module | Description |
|------|------|
| **WebChat** | Vue 3 streaming chat UI — model switching, personas, context compression, persistent history |
| **External KB (RAG)** | Upload PDF / TXT / DOCX / Markdown / EPUB / images. Hybrid retrieval: FAISS dense + BM25 sparse + RRF fusion + optional reranker |
| **Conversation KB** | LLM auto-extracts eight categories of entries (interest / project / stack / personality / learning / preference / concept / relation) from history; shares the same retrieval engine as external KB |
| **Profile & Timeline** | MBTI tendency analysis and per-day/week/month summaries from dialogue history |
| **Agent loop** | Multi-round ReAct: tool discovery → call → result feedback. Knowledge retrieval, web search, Computer Use |
| **MCP client** | Connect to any Model Context Protocol-compliant external tool service |
| **Scheduler** | Proactive agent — cron-triggered conversation or tool calls |
| **Provider** | OpenAI / Anthropic / Gemini / DeepSeek / Ollama / any OpenAI-compatible API. Embedding providers are equally pluggable. |

### How the two KBs cooperate

External KB and conversation KB share a FAISS + KBHelper backend but are semantically separated:

- Each turn **automatically** queries the conversation KB (top_k=3); hits are injected into the system prompt as "relevant facts about the user"
- Enabled external KBs are injected as "potentially relevant material"
- The LLM thus distinguishes "user facts" from "reference material" without dilution

---

## Stack

| Layer | Tech |
|------|------|
| Backend | Python 3.12 + Quart (async) |
| Frontend | Vue 3 + Vuetify 3 + TypeScript + Vite |
| Persistence | SQLite (sessions / KB metadata / config) |
| Dense retrieval | FAISS (IndexFlatL2 + IndexIDMap) |
| Sparse retrieval | rank_bm25 + Chinese tokenization |
| Agent | Custom ToolLoopAgentRunner + MCP Client |

---

## Quick start

### Requirements

- Windows 10/11
- Python 3.12+
- Node.js 18+ (first-time frontend build)

### One-click install (recommended)

```bash
setup.bat
```

Detects Python → creates venv → installs deps → builds frontend.

### Manual

```bash
# 1. Backend
pip install -r requirements.txt

# 2. Frontend
cd dashboard
npm install
npm run build
cd ..

# 3. Stage frontend artifacts
xcopy dashboard\dist data\dist\ /e /i /q

# 4. Run
python main.py
```

Or double-click `_run_miku.bat` (kept for backward compatibility).

Open **http://localhost:16185** — default credentials `miku / miku` (change them).

> **Embedding setup**: the KB requires at least one Embedding provider configured. Common choices:
>
> - Cloud: any OpenAI-compatible endpoint (SiliconFlow / Zhipu / DashScope / DeepSeek; several offer free tiers)
> - Cloud: Gemini Embedding
> - Local: Ollama + nomic-embed-text (`ollama pull nomic-embed-text`, base_url `http://localhost:11434/v1`)

---

## How to use

1. Open http://localhost:16185 and log in
2. **Model Config** — add API keys for chat + embedding providers
3. **Chat** — talk to the LLM; history persists automatically
4. **Knowledge Base** — upload documents, enable per-session or globally
5. **Conversation KB** — pick a session, click "Extract knowledge"; extracted entries join future retrieval automatically
6. **Profile** — MBTI analysis and dialogue timeline
7. **Cron / MCP** — under the "More" menu, configure proactive behavior or external tools

---

## Layout

```
miku/
├── core/
│   ├── agent/                # Agent tool loop + MCP
│   ├── knowledge_base/       # Retrieval engine (FAISS + BM25 + fusion)
│   ├── provider/             # LLM / Embedding / Rerank adapters
│   ├── conversation_store.py # Session message store
│   └── ...
├── dashboard/routes/         # Quart REST API
└── ...

dashboard/                    # Vue 3 frontend
data/                         # Runtime data (SQLite / uploads / index)
```

---

## Notice

- Forked from [AstrBot](https://github.com/AstrBotDevs/AstrBot) (AGPLv3)
- Software-engineering course project — not an official AstrBot release
- Upstream: https://github.com/AstrBotDevs/AstrBot
