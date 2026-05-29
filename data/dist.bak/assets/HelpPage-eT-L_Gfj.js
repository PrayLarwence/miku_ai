import { D as defineComponent, u as useModuleI18n, c as createElementBlock, b as createVNode, w as withCtx, ao as VContainer, ab as VRow, ad as VCol, s as VCard, a as createBaseVNode, l as VIcon, d as createTextVNode, x as VDivider, k as VAlert, af as VList, ag as VListItem, e as VBtn, ap as pushScopeId, aq as popScopeId, o as openBlock, _ as _export_sfc } from "./index-C6xMvtNz.js";
const _withScopeId = (n) => (pushScopeId("data-v-7669a7e3"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "help-page" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "text-h3 font-weight-bold mb-2" }, "📖 Miku AI 帮助文档", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-body-1 text-medium-emphasis mb-6" }, " 欢迎使用 Miku AI Assistant！本文档将帮助您快速上手所有功能。 ", -1));
const _hoisted_4 = { class: "d-flex align-center mb-4" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "text-h4 font-weight-bold" }, "🚀 快速开始", -1));
const _hoisted_6 = { class: "help-content" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "如何启动", -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("ol", { class: "help-list" }, [
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
    /* @__PURE__ */ createTextVNode("在项目根目录下，"),
    /* @__PURE__ */ createBaseVNode("strong", null, "双击运行"),
    /* @__PURE__ */ createTextVNode(),
    /* @__PURE__ */ createBaseVNode("code", null, "_run_miku.bat"),
    /* @__PURE__ */ createTextVNode(" 文件。")
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
    /* @__PURE__ */ createTextVNode("等待启动完成，终端会显示 "),
    /* @__PURE__ */ createBaseVNode("code", null, "Miku AI vX.X.X 面板已就绪"),
    /* @__PURE__ */ createTextVNode(" 的提示。")
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
    /* @__PURE__ */ createTextVNode("打开浏览器，访问 "),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "http://localhost:16185",
      target: "_blank"
    }, "http://localhost:16185"),
    /* @__PURE__ */ createTextVNode("。")
  ])
], -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3 mt-4" }, "默认账户", -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("strong", null, "用户名：", -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("code", null, "miku", -1));
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("strong", null, "密码：", -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("code", null, "miku", -1));
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-body-1" }, "首次登录后建议在「设置」页面修改密码以确保安全。", -1));
const _hoisted_15 = { class: "d-flex align-center mb-4" };
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "text-h4 font-weight-bold" }, "⚙️ 模型配置", -1));
const _hoisted_17 = { class: "help-content" };
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-body-1 mb-3" }, "Miku AI 需要配置大语言模型（LLM）才能正常对话。支持所有兼容 OpenAI API 格式的模型服务商。", -1));
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "支持的模型类型", -1));
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("ul", { class: "help-list mb-4" }, [
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, [
    /* @__PURE__ */ createBaseVNode("strong", null, "OpenAI"),
    /* @__PURE__ */ createTextVNode(" — GPT-4o、GPT-4、GPT-3.5-turbo 等")
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, [
    /* @__PURE__ */ createBaseVNode("strong", null, "Anthropic"),
    /* @__PURE__ */ createTextVNode(" — Claude 3.5 Sonnet、Claude 3 Opus 等（通过 API 代理）")
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, [
    /* @__PURE__ */ createBaseVNode("strong", null, "Gemini"),
    /* @__PURE__ */ createTextVNode(" — Gemini 1.5 Pro、Gemini 1.5 Flash 等")
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, [
    /* @__PURE__ */ createBaseVNode("strong", null, "DeepSeek"),
    /* @__PURE__ */ createTextVNode(" — DeepSeek-V2、DeepSeek-R1 等")
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, [
    /* @__PURE__ */ createBaseVNode("strong", null, "兼容 OpenAI 的任何第三方 API"),
    /* @__PURE__ */ createTextVNode(" — 如 One API、LiteLLM 等代理服务")
  ])
], -1));
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "配置步骤", -1));
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("ol", { class: "help-list" }, [
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
    /* @__PURE__ */ createTextVNode("登录面板后，点击左侧导航栏的 "),
    /* @__PURE__ */ createBaseVNode("strong", null, "「设置」"),
    /* @__PURE__ */ createTextVNode("。")
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
    /* @__PURE__ */ createTextVNode("进入 "),
    /* @__PURE__ */ createBaseVNode("strong", null, "「模型提供商」"),
    /* @__PURE__ */ createTextVNode(" 选项卡。")
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
    /* @__PURE__ */ createTextVNode("点击 "),
    /* @__PURE__ */ createBaseVNode("strong", null, "「添加提供商」"),
    /* @__PURE__ */ createTextVNode(" 按钮。")
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
    /* @__PURE__ */ createTextVNode("填写以下信息： "),
    /* @__PURE__ */ createBaseVNode("ul", { class: "help-list mt-1" }, [
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "名称"),
        /* @__PURE__ */ createTextVNode('：任意标识名（如 "我的OpenAI"）')
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "API 地址"),
        /* @__PURE__ */ createTextVNode("：服务商的 API 端点（如 "),
        /* @__PURE__ */ createBaseVNode("code", null, "https://api.openai.com/v1"),
        /* @__PURE__ */ createTextVNode("）")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "API Key"),
        /* @__PURE__ */ createTextVNode("：您的密钥")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "模型列表"),
        /* @__PURE__ */ createTextVNode("：添加要使用的模型名称（如 "),
        /* @__PURE__ */ createBaseVNode("code", null, "gpt-4o"),
        /* @__PURE__ */ createTextVNode("）")
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
    /* @__PURE__ */ createTextVNode("点击 "),
    /* @__PURE__ */ createBaseVNode("strong", null, "「保存」"),
    /* @__PURE__ */ createTextVNode("，完成后即可在聊天页面选择该模型进行对话。")
  ])
], -1));
const _hoisted_23 = { class: "d-flex align-center mb-4" };
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "text-h4 font-weight-bold" }, "💬 Miku Chat 使用说明", -1));
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "help-content" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "如何开启聊天"),
  /* @__PURE__ */ createBaseVNode("ol", { class: "help-list mb-4" }, [
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
      /* @__PURE__ */ createTextVNode("在左侧导航栏点击 "),
      /* @__PURE__ */ createBaseVNode("strong", null, "「Miku Chat」"),
      /* @__PURE__ */ createTextVNode(" 进入聊天界面。")
    ]),
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
      /* @__PURE__ */ createTextVNode("在顶部选择已配置的"),
      /* @__PURE__ */ createBaseVNode("strong", null, "模型"),
      /* @__PURE__ */ createTextVNode("。")
    ]),
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
      /* @__PURE__ */ createTextVNode("在输入框中输入消息，按 "),
      /* @__PURE__ */ createBaseVNode("kbd", null, "Enter"),
      /* @__PURE__ */ createTextVNode(" 发送，或按 "),
      /* @__PURE__ */ createBaseVNode("kbd", null, "Shift+Enter"),
      /* @__PURE__ */ createTextVNode(" 换行。")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "初音未来人格特性"),
  /* @__PURE__ */ createBaseVNode("p", { class: "text-body-1 mb-3" }, "Miku Chat 内置了初音未来（初音ミク）的专属人格设定，对话时 AI 将以初音未来的身份与您交流，具有以下特点："),
  /* @__PURE__ */ createBaseVNode("ul", { class: "help-list mb-4" }, [
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, [
      /* @__PURE__ */ createTextVNode("🎤 活泼可爱的语气，标志性的 "),
      /* @__PURE__ */ createBaseVNode("em", null, '"Miku Miku ni shite ageru ♪"')
    ]),
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, "🎵 对音乐有丰富的知识和热情"),
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, "💚 初音绿主题色，沉浸式体验"),
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, "🤖 同时具备强大的 AI 推理能力，不只是角色扮演")
  ]),
  /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "知识库联动说明"),
  /* @__PURE__ */ createBaseVNode("p", { class: "text-body-1 mb-3" }, "在聊天时，您可以启用知识库让 AI 基于您上传的文档回答："),
  /* @__PURE__ */ createBaseVNode("ul", { class: "help-list" }, [
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, [
      /* @__PURE__ */ createTextVNode("在聊天输入框输入 "),
      /* @__PURE__ */ createBaseVNode("code", null, "/kb use <知识库名称>"),
      /* @__PURE__ */ createTextVNode(" 启用知识库")
    ]),
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, [
      /* @__PURE__ */ createTextVNode("输入 "),
      /* @__PURE__ */ createBaseVNode("code", null, "/kb list"),
      /* @__PURE__ */ createTextVNode(" 查看所有可用的知识库")
    ]),
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, [
      /* @__PURE__ */ createTextVNode("输入 "),
      /* @__PURE__ */ createBaseVNode("code", null, "/kb disable"),
      /* @__PURE__ */ createTextVNode(" 关闭知识库功能")
    ])
  ])
], -1));
const _hoisted_26 = { class: "d-flex align-center mb-4" };
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "text-h4 font-weight-bold" }, "🧠 人格画像", -1));
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "help-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "text-body-1 mb-3" }, "人格画像功能可以从您的对话历史中分析出您的性格倾向和行为模式，生成专属的用户画像。"),
  /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "MBTI 分析说明"),
  /* @__PURE__ */ createBaseVNode("p", { class: "text-body-1 mb-3" }, "系统会根据您在对话中的语言风格、表达方式和决策偏好，自动分析出您的 MBTI（迈尔斯-布里格斯类型指标）倾向，包括："),
  /* @__PURE__ */ createBaseVNode("ul", { class: "help-list mb-4" }, [
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, [
      /* @__PURE__ */ createBaseVNode("strong", null, "E/I"),
      /* @__PURE__ */ createTextVNode(" — 外向型 / 内向型")
    ]),
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, [
      /* @__PURE__ */ createBaseVNode("strong", null, "S/N"),
      /* @__PURE__ */ createTextVNode(" — 实感型 / 直觉型")
    ]),
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, [
      /* @__PURE__ */ createBaseVNode("strong", null, "T/F"),
      /* @__PURE__ */ createTextVNode(" — 思考型 / 情感型")
    ]),
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, [
      /* @__PURE__ */ createBaseVNode("strong", null, "J/P"),
      /* @__PURE__ */ createTextVNode(" — 判断型 / 感知型")
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "text-body-1 mb-3" }, "随着对话增多，分析结果会逐渐趋于稳定和准确。"),
  /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "时间线摘要说明"),
  /* @__PURE__ */ createBaseVNode("p", { class: "text-body-1 mb-3" }, "系统会按时间段（日/周/月）自动汇总您的对话摘要，生成时间线，方便您回顾："),
  /* @__PURE__ */ createBaseVNode("ul", { class: "help-list mb-4" }, [
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, "📅 每日摘要：当天对话的核心主题和关键信息"),
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, "📊 每周趋势：一周内关注话题的变化趋势"),
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-1" }, "📈 月度报告：综合性的对话行为分析和总结")
  ]),
  /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "如何查看"),
  /* @__PURE__ */ createBaseVNode("ol", { class: "help-list" }, [
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
      /* @__PURE__ */ createTextVNode("在左侧导航栏点击 "),
      /* @__PURE__ */ createBaseVNode("strong", null, "「人格画像」"),
      /* @__PURE__ */ createTextVNode("。")
    ]),
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
      /* @__PURE__ */ createTextVNode("页面会展示您的 "),
      /* @__PURE__ */ createBaseVNode("strong", null, "MBTI 分析结果"),
      /* @__PURE__ */ createTextVNode("（含各维度百分比）。")
    ]),
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
      /* @__PURE__ */ createTextVNode("下方为 "),
      /* @__PURE__ */ createBaseVNode("strong", null, "时间线"),
      /* @__PURE__ */ createTextVNode("，可按日/周/月切换查看。")
    ]),
    /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, "您可以手动刷新分析或查看详细统计数据。")
  ])
], -1));
const _hoisted_29 = { class: "d-flex align-center mb-4" };
const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "text-h4 font-weight-bold" }, "📚 知识库", -1));
const _hoisted_31 = { class: "help-content" };
const _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-body-1 mb-3" }, "知识库（RAG，检索增强生成）功能允许您上传文档，让 AI 在回答时参考文档内容，提供更加准确和专业的回答。", -1));
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "如何创建知识库", -1));
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("ol", { class: "help-list mb-4" }, [
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
    /* @__PURE__ */ createTextVNode("在左侧导航栏点击 "),
    /* @__PURE__ */ createBaseVNode("strong", null, "「知识库」"),
    /* @__PURE__ */ createTextVNode("。")
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
    /* @__PURE__ */ createTextVNode("点击 "),
    /* @__PURE__ */ createBaseVNode("strong", null, "「创建知识库」"),
    /* @__PURE__ */ createTextVNode(" 按钮。")
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
    /* @__PURE__ */ createTextVNode("输入知识库"),
    /* @__PURE__ */ createBaseVNode("strong", null, "名称"),
    /* @__PURE__ */ createTextVNode("和"),
    /* @__PURE__ */ createBaseVNode("strong", null, "描述"),
    /* @__PURE__ */ createTextVNode("（可选）。")
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
    /* @__PURE__ */ createTextVNode("选择一个 "),
    /* @__PURE__ */ createBaseVNode("strong", null, "嵌入模型（Embedding Model）"),
    /* @__PURE__ */ createTextVNode("，用于将文档转换为向量。")
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
    /* @__PURE__ */ createTextVNode("点击 "),
    /* @__PURE__ */ createBaseVNode("strong", null, "「创建」"),
    /* @__PURE__ */ createTextVNode(" 完成。")
  ])
], -1));
const _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "如何导入文档", -1));
const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("ol", { class: "help-list mb-4" }, [
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
    /* @__PURE__ */ createTextVNode("创建知识库后，点击进入该知识库的"),
    /* @__PURE__ */ createBaseVNode("strong", null, "详情页面"),
    /* @__PURE__ */ createTextVNode("。")
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
    /* @__PURE__ */ createTextVNode("点击 "),
    /* @__PURE__ */ createBaseVNode("strong", null, "「上传文档」"),
    /* @__PURE__ */ createTextVNode("，选择要导入的文件。")
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, [
    /* @__PURE__ */ createTextVNode("支持的格式："),
    /* @__PURE__ */ createBaseVNode("strong", null, "PDF"),
    /* @__PURE__ */ createTextVNode("、"),
    /* @__PURE__ */ createBaseVNode("strong", null, "TXT"),
    /* @__PURE__ */ createTextVNode("、"),
    /* @__PURE__ */ createBaseVNode("strong", null, "DOCX"),
    /* @__PURE__ */ createTextVNode("、"),
    /* @__PURE__ */ createBaseVNode("strong", null, "Markdown"),
    /* @__PURE__ */ createTextVNode("、"),
    /* @__PURE__ */ createBaseVNode("strong", null, "EPUB"),
    /* @__PURE__ */ createTextVNode(" 等。")
  ]),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, "上传后系统会自动对文档进行分块和向量化处理。"),
  /* @__PURE__ */ createBaseVNode("li", { class: "mb-2" }, "处理完成后，即可在聊天中启用该知识库。")
], -1));
const _hoisted_37 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("code", null, "text-embedding-3-large", -1));
const _hoisted_38 = { class: "d-flex align-center mb-4" };
const _hoisted_39 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "text-h4 font-weight-bold" }, "❓ 常见问题 FAQ", -1));
const _hoisted_40 = { class: "help-content" };
const _hoisted_41 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "Q1: 端口被占用怎么办？", -1));
const _hoisted_42 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-body-1 mb-4" }, [
  /* @__PURE__ */ createTextVNode(" 如果 "),
  /* @__PURE__ */ createBaseVNode("code", null, "16185"),
  /* @__PURE__ */ createTextVNode(" 端口被其他程序占用，请按以下步骤操作："),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" 1. 打开 "),
  /* @__PURE__ */ createBaseVNode("code", null, "data/cmd_config.json"),
  /* @__PURE__ */ createTextVNode(" 配置文件。"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" 2. 找到 "),
  /* @__PURE__ */ createBaseVNode("code", null, '"dashboard"'),
  /* @__PURE__ */ createTextVNode(" 下的 "),
  /* @__PURE__ */ createBaseVNode("code", null, '"port"'),
  /* @__PURE__ */ createTextVNode(" 字段，修改为其他端口（如 "),
  /* @__PURE__ */ createBaseVNode("code", null, "6199"),
  /* @__PURE__ */ createTextVNode("）。"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" 3. 保存文件后重新启动 Miku AI。"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" 4. 访问 "),
  /* @__PURE__ */ createBaseVNode("code", null, "http://localhost:新端口"),
  /* @__PURE__ */ createTextVNode(" 即可。 ")
], -1));
const _hoisted_43 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "Q2: 忘记密码怎么办？", -1));
const _hoisted_44 = { class: "text-body-1 mb-4" };
const _hoisted_45 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_46 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_47 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("code", null, "data/", -1));
const _hoisted_48 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("code", null, "miku.db", -1));
const _hoisted_49 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_50 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_51 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("strong", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "miku / miku")
], -1));
const _hoisted_52 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_53 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "Q3: AI 没有回复或回复异常怎么办？", -1));
const _hoisted_54 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-body-1 mb-4" }, [
  /* @__PURE__ */ createTextVNode(" 请检查以下几点："),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" 1. 确认已在「设置」中正确配置了模型提供商和 API Key。"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" 2. 检查 API Key 是否有效，余额是否充足。"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" 3. 确认网络连接正常，能够访问 API 服务地址。"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" 4. 查看终端日志，是否有报错信息。 ")
], -1));
const _hoisted_55 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "Q4: 如何切换界面语言？", -1));
const _hoisted_56 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-body-1 mb-4" }, " 目前 Miku AI 的 WebUI 主要支持中文界面。您可以在「设置」页面中的「界面设置」选项调整语言偏好。 ", -1));
const _hoisted_57 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "Q5: 如何更新到最新版本？", -1));
const _hoisted_58 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-body-1 mb-4" }, [
  /* @__PURE__ */ createTextVNode(" 请从项目 GitHub 仓库拉取最新代码，然后重新执行安装步骤（安装依赖 + 构建前端）。建议更新前备份 "),
  /* @__PURE__ */ createBaseVNode("code", null, "data/"),
  /* @__PURE__ */ createTextVNode(" 目录下的配置文件。 ")
], -1));
const _hoisted_59 = { class: "d-flex align-center mb-4" };
const _hoisted_60 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "text-h4 font-weight-bold" }, "📄 关于项目", -1));
const _hoisted_61 = { class: "help-content" };
const _hoisted_62 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-body-1 mb-3" }, [
  /* @__PURE__ */ createBaseVNode("strong", null, "Miku AI Assistant"),
  /* @__PURE__ */ createTextVNode(" 是一款以初音未来为主题的智能 AI 对话助手，专注于聊天对话、知识库检索与用户画像分析。 ")
], -1));
const _hoisted_63 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "开源声明", -1));
const _hoisted_64 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("strong", null, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://github.com/AstrBotDevs/AstrBot",
    target: "_blank"
  }, "AstrBot")
], -1));
const _hoisted_65 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3" }, "技术栈", -1));
const _hoisted_66 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text-h5 font-weight-bold mb-3 mt-4" }, "项目地址", -1));
const _hoisted_67 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-body-2 text-medium-emphasis" }, [
  /* @__PURE__ */ createTextVNode(" 🎵 Miku Miku ni shite ageru ♪"),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createBaseVNode("em", null, "世界第一的公主殿下，为你带来最智能的对话体验！")
], -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HelpPage",
  setup(__props) {
    useModuleI18n("features/help");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(VContainer, {
          fluid: "",
          class: "pa-6"
        }, {
          default: withCtx(() => [
            createVNode(VRow, null, {
              default: withCtx(() => [
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    _hoisted_2,
                    _hoisted_3
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(VRow, { class: "mb-6" }, {
              default: withCtx(() => [
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      class: "help-card pa-6",
                      elevation: "0",
                      border: ""
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_4, [
                          createVNode(VIcon, {
                            size: "32",
                            color: "primary",
                            class: "mr-3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-rocket-launch")
                            ]),
                            _: 1
                          }),
                          _hoisted_5
                        ]),
                        createVNode(VDivider, { class: "mb-4" }),
                        createBaseVNode("div", _hoisted_6, [
                          _hoisted_7,
                          _hoisted_8,
                          _hoisted_9,
                          createVNode(VAlert, {
                            type: "success",
                            variant: "tonal",
                            class: "mb-3",
                            icon: "mdi-account-key"
                          }, {
                            default: withCtx(() => [
                              _hoisted_10,
                              _hoisted_11,
                              createTextVNode("   |   "),
                              _hoisted_12,
                              _hoisted_13
                            ]),
                            _: 1
                          }),
                          _hoisted_14
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(VRow, { class: "mb-6" }, {
              default: withCtx(() => [
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      class: "help-card pa-6",
                      elevation: "0",
                      border: ""
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_15, [
                          createVNode(VIcon, {
                            size: "32",
                            color: "primary",
                            class: "mr-3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-brain")
                            ]),
                            _: 1
                          }),
                          _hoisted_16
                        ]),
                        createVNode(VDivider, { class: "mb-4" }),
                        createBaseVNode("div", _hoisted_17, [
                          _hoisted_18,
                          _hoisted_19,
                          _hoisted_20,
                          _hoisted_21,
                          _hoisted_22,
                          createVNode(VAlert, {
                            type: "info",
                            variant: "tonal",
                            class: "mt-3",
                            icon: "mdi-information-outline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 💡 提示：您可以添加多个模型提供商，在聊天时随时切换。如果使用代理服务，请确保 API 地址填写正确。 ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(VRow, { class: "mb-6" }, {
              default: withCtx(() => [
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      class: "help-card pa-6",
                      elevation: "0",
                      border: ""
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_23, [
                          createVNode(VIcon, {
                            size: "32",
                            color: "pink",
                            class: "mr-3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-chat-heart")
                            ]),
                            _: 1
                          }),
                          _hoisted_24
                        ]),
                        createVNode(VDivider, { class: "mb-4" }),
                        _hoisted_25
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(VRow, { class: "mb-6" }, {
              default: withCtx(() => [
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      class: "help-card pa-6",
                      elevation: "0",
                      border: ""
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_26, [
                          createVNode(VIcon, {
                            size: "32",
                            color: "primary",
                            class: "mr-3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-account-details")
                            ]),
                            _: 1
                          }),
                          _hoisted_27
                        ]),
                        createVNode(VDivider, { class: "mb-4" }),
                        _hoisted_28
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(VRow, { class: "mb-6" }, {
              default: withCtx(() => [
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      class: "help-card pa-6",
                      elevation: "0",
                      border: ""
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_29, [
                          createVNode(VIcon, {
                            size: "32",
                            color: "primary",
                            class: "mr-3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-book-open-variant")
                            ]),
                            _: 1
                          }),
                          _hoisted_30
                        ]),
                        createVNode(VDivider, { class: "mb-4" }),
                        createBaseVNode("div", _hoisted_31, [
                          _hoisted_32,
                          _hoisted_33,
                          _hoisted_34,
                          _hoisted_35,
                          _hoisted_36,
                          createVNode(VAlert, {
                            type: "warning",
                            variant: "tonal",
                            class: "mt-3",
                            icon: "mdi-alert-outline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" ⚠️ 注意：使用知识库前需要先配置好嵌入模型提供商。建议使用支持高维度的嵌入模型（如 "),
                              _hoisted_37,
                              createTextVNode("）以获得更好的检索效果。 ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(VRow, { class: "mb-6" }, {
              default: withCtx(() => [
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      class: "help-card pa-6",
                      elevation: "0",
                      border: ""
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_38, [
                          createVNode(VIcon, {
                            size: "32",
                            color: "orange",
                            class: "mr-3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-frequently-asked-questions")
                            ]),
                            _: 1
                          }),
                          _hoisted_39
                        ]),
                        createVNode(VDivider, { class: "mb-4" }),
                        createBaseVNode("div", _hoisted_40, [
                          _hoisted_41,
                          _hoisted_42,
                          _hoisted_43,
                          createBaseVNode("p", _hoisted_44, [
                            createTextVNode(" 如果忘记了登录密码，可以通过重置数据库方式恢复默认密码："),
                            _hoisted_45,
                            createTextVNode(" 1. 关闭正在运行的 Miku AI 程序。"),
                            _hoisted_46,
                            createTextVNode(" 2. 删除 "),
                            _hoisted_47,
                            createTextVNode(" 目录下的数据库文件（通常为 "),
                            _hoisted_48,
                            createTextVNode(" 或类似名称）。"),
                            _hoisted_49,
                            createTextVNode(" 3. 重新启动 Miku AI，系统会自动创建新的数据库。"),
                            _hoisted_50,
                            createTextVNode(" 4. 使用默认账户密码登录："),
                            _hoisted_51,
                            createTextVNode("。"),
                            _hoisted_52,
                            createVNode(VAlert, {
                              type: "warning",
                              variant: "tonal",
                              class: "mt-2",
                              icon: "mdi-alert"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" ⚠️ 注意：删除数据库会丢失所有已保存的配置、会话记录和用户数据，请谨慎操作。 ")
                              ]),
                              _: 1
                            })
                          ]),
                          _hoisted_53,
                          _hoisted_54,
                          _hoisted_55,
                          _hoisted_56,
                          _hoisted_57,
                          _hoisted_58
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(VRow, { class: "mb-6" }, {
              default: withCtx(() => [
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      class: "help-card pa-6",
                      elevation: "0",
                      border: ""
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_59, [
                          createVNode(VIcon, {
                            size: "32",
                            color: "pink",
                            class: "mr-3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-information")
                            ]),
                            _: 1
                          }),
                          _hoisted_60
                        ]),
                        createVNode(VDivider, { class: "mb-4" }),
                        createBaseVNode("div", _hoisted_61, [
                          _hoisted_62,
                          _hoisted_63,
                          createVNode(VAlert, {
                            type: "info",
                            variant: "tonal",
                            class: "mb-4",
                            icon: "mdi-scale-balance"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 本项目基于 "),
                              _hoisted_64,
                              createTextVNode("（AGPLv3 协议）进行二次开发，为私人项目，非官方版本。 ")
                            ]),
                            _: 1
                          }),
                          _hoisted_65,
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VList, {
                                    density: "compact",
                                    lines: "one"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, {
                                        "prepend-icon": "mdi-language-python",
                                        title: "Python + Quart",
                                        subtitle: "异步 Web 后端框架"
                                      }),
                                      createVNode(VListItem, {
                                        "prepend-icon": "mdi-vuejs",
                                        title: "Vue 3 + Vuetify 3",
                                        subtitle: "现代前端框架"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VList, {
                                    density: "compact",
                                    lines: "one"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, {
                                        "prepend-icon": "mdi-database",
                                        title: "SQLite",
                                        subtitle: "轻量数据存储"
                                      }),
                                      createVNode(VListItem, {
                                        "prepend-icon": "mdi-vector-arrange-below",
                                        title: "FAISS",
                                        subtitle: "向量检索引擎"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          _hoisted_66,
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "primary",
                            size: "large",
                            href: "https://github.com/hatsune-musubi-miku/miku_ai",
                            target: "_blank",
                            "prepend-icon": "mdi-github",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 前往 GitHub 仓库 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "mb-4" }),
                          _hoisted_67
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const HelpPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7669a7e3"]]);
export {
  HelpPage as default
};
