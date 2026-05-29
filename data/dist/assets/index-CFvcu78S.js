import { _ as _export_sfc, c as createElementBlock, a as createBaseVNode, b as createVNode, V as VSpacer, w as withCtx, d as createTextVNode, e as VBtn, f as VSelect, t as toDisplayString, g as VChip, F as Fragment, r as renderList, h as createBlock, i as createCommentVNode, j as VTextField, k as VAlert, l as VIcon, o as openBlock } from "./index-C6xMvtNz.js";
const _sfc_main = {
  name: "KnowledgeConvPage",
  data() {
    return {
      entries: [],
      stats: null,
      loading: false,
      extracting: false,
      errorMsg: "",
      filterCategory: null,
      searchQuery: "",
      sessionId: null,
      sessions: [],
      categories: [
        { title: "兴趣领域", value: "interest" },
        { title: "项目追踪", value: "project" },
        { title: "技术栈", value: "tech" },
        { title: "个性特征", value: "personality" },
        { title: "学习路径", value: "learning" },
        { title: "偏好习惯", value: "preference" }
      ],
      catLabels: { interest: "兴趣", project: "项目", tech: "技术", personality: "个性", learning: "学习", preference: "偏好", concept: "概念", relationship: "关系" }
    };
  },
  mounted() {
    this.loadEntries();
    this.loadSessions();
  },
  computed: {
    sessionItems() {
      return Array.isArray(this.sessions) ? this.sessions.map(function(s) {
        return { text: s.display_name || s.session_id, value: s.session_id };
      }) : [];
    }
  },
  methods: {
    async loadSessions() {
      try {
        const r = await fetch("/api/conversation/list");
        const d = await r.json();
        this.sessions = Array.isArray(d.data) ? d.data : Array.isArray(d) ? d : [];
      } catch (e) {
      }
    },
    async loadEntries() {
      this.loading = true;
      this.errorMsg = "";
      try {
        const params = new URLSearchParams();
        if (this.filterCategory) params.set("category", this.filterCategory);
        if (this.searchQuery) params.set("query", this.searchQuery);
        const resp = await fetch("/api/profile/knowledge/list?" + params.toString());
        const data = await resp.json();
        if (data.status === "ok") {
          this.entries = data.data.entries || [];
          this.stats = data.data.stats;
        } else this.errorMsg = data.message || "加载失败";
      } catch (e) {
        this.errorMsg = "网络错误: " + e.message;
      } finally {
        this.loading = false;
      }
    },
    async doExtract() {
      this.extracting = true;
      this.errorMsg = "";
      try {
        const resp = await fetch("/api/profile/knowledge/extract", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ session_id: this.sessionId || null }) });
        const data = await resp.json();
        if (data.status === "ok") {
          this.stats = data.data.stats;
          await this.loadEntries();
        } else this.errorMsg = data.message || "提取失败";
      } catch (e) {
        this.errorMsg = "网络错误: " + e.message;
      } finally {
        this.extracting = false;
      }
    }
  }
};
const _hoisted_1 = { style: { "height": "100%", "display": "flex", "flex-direction": "column", "padding": "16px" } };
const _hoisted_2 = { class: "d-flex align-center mb-4" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("h1", {
    class: "text-h5 font-weight-bold",
    style: { "color": "#39c5bb" }
  }, "对话知识库"),
  /* @__PURE__ */ createBaseVNode("p", { class: "text-caption text-medium-emphasis" }, "AI 自动分析对话历史，提取结构化知识。与文档知识库互补。")
], -1);
const _hoisted_4 = {
  key: 0,
  class: "d-flex gap-2 mb-4 flex-wrap"
};
const _hoisted_5 = { class: "d-flex gap-2 mb-4" };
const _hoisted_6 = { style: { "flex": "1", "overflow-y": "auto" } };
const _hoisted_7 = {
  key: 0,
  class: "text-center pa-8 text-medium-emphasis"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", { class: "mt-3" }, '暂无知识条目。点击"提取知识"让 AI 分析对话。', -1);
const _hoisted_9 = { class: "d-flex justify-space-between align-center mb-1" };
const _hoisted_10 = { class: "text-body-2 font-weight-bold" };
const _hoisted_11 = { class: "d-flex gap-2" };
const _hoisted_12 = { class: "text-caption mb-0 text-medium-emphasis" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      createVNode(VSpacer),
      createVNode(VBtn, {
        "prepend-icon": "mdi-database-search",
        color: "#39c5bb",
        variant: "elevated",
        loading: $data.extracting,
        onClick: $options.doExtract
      }, {
        default: withCtx(() => [
          createTextVNode("提取知识")
        ]),
        _: 1
      }, 8, ["loading", "onClick"])
    ]),
    createVNode(VSelect, {
      modelValue: $data.sessionId,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.sessionId = $event),
      items: $options.sessionItems,
      "item-title": "text",
      "item-value": "value",
      label: "选择会话 (留空=全部)",
      variant: "outlined",
      density: "compact",
      "hide-details": "",
      style: { "max-width": "400px" },
      class: "mb-4",
      clearable: ""
    }, null, 8, ["modelValue", "items"]),
    $data.stats ? (openBlock(), createElementBlock("div", _hoisted_4, [
      createVNode(VChip, {
        size: "small",
        color: "#39c5bb",
        variant: "tonal"
      }, {
        default: withCtx(() => [
          createTextVNode("共 " + toDisplayString($data.stats.total_entries) + " 条", 1)
        ]),
        _: 1
      }),
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.stats.by_category, (cnt, cat) => {
        return openBlock(), createBlock(VChip, {
          size: "small",
          variant: "outlined",
          key: cat
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($data.catLabels[cat] || cat) + ": " + toDisplayString(cnt), 1)
          ]),
          _: 2
        }, 1024);
      }), 128))
    ])) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_5, [
      createVNode(VSelect, {
        modelValue: $data.filterCategory,
        "onUpdate:modelValue": [
          _cache[1] || (_cache[1] = ($event) => $data.filterCategory = $event),
          $options.loadEntries
        ],
        items: $data.categories,
        label: "分类",
        variant: "outlined",
        density: "compact",
        "hide-details": "",
        style: { "max-width": "160px" },
        clearable: ""
      }, null, 8, ["modelValue", "items", "onUpdate:modelValue"]),
      createVNode(VTextField, {
        modelValue: $data.searchQuery,
        "onUpdate:modelValue": [
          _cache[2] || (_cache[2] = ($event) => $data.searchQuery = $event),
          $options.loadEntries
        ],
        label: "搜索",
        variant: "outlined",
        density: "compact",
        "hide-details": "",
        style: { "max-width": "240px" },
        "prepend-inner-icon": "mdi-magnify",
        clearable: ""
      }, null, 8, ["modelValue", "onUpdate:modelValue"])
    ]),
    $data.errorMsg ? (openBlock(), createBlock(VAlert, {
      key: 1,
      type: "error",
      variant: "tonal",
      density: "compact",
      class: "mb-3"
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($data.errorMsg), 1)
      ]),
      _: 1
    })) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_6, [
      $data.entries.length === 0 && !$data.loading ? (openBlock(), createElementBlock("div", _hoisted_7, [
        createVNode(VIcon, {
          size: "48",
          color: "grey"
        }, {
          default: withCtx(() => [
            createTextVNode("mdi-database-off")
          ]),
          _: 1
        }),
        _hoisted_8
      ])) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.entries, (entry) => {
        return openBlock(), createElementBlock("div", {
          key: entry.id,
          class: "mb-2 pa-3",
          style: { "background": "var(--v-theme-surface-variant)", "border-radius": "8px", "border-left": "3px solid #39c5bb" }
        }, [
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("span", _hoisted_10, toDisplayString(entry.topic), 1),
            createBaseVNode("div", _hoisted_11, [
              createVNode(VChip, {
                size: "x-small",
                color: entry.confidence > 0.6 ? "#39c5bb" : "orange",
                variant: "tonal"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString((entry.confidence * 100).toFixed(0)) + "%", 1)
                ]),
                _: 2
              }, 1032, ["color"]),
              createVNode(VChip, {
                size: "x-small",
                variant: "outlined"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString($data.catLabels[entry.category] || entry.category), 1)
                ]),
                _: 2
              }, 1024)
            ])
          ]),
          createBaseVNode("p", _hoisted_12, toDisplayString(entry.content), 1)
        ]);
      }), 128))
    ])
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
