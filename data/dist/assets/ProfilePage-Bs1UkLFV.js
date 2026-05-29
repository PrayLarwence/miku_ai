import { _ as _export_sfc, m as VueApexCharts, c as createElementBlock, b as createVNode, w as withCtx, n as VTab, d as createTextVNode, p as VTabs, q as VWindowItem, s as VCard, v as VCardText, f as VSelect, e as VBtn, t as toDisplayString, h as createBlock, x as VDivider, i as createCommentVNode, a as createBaseVNode, F as Fragment, r as renderList, y as VProgressLinear, k as VAlert, z as VBtnToggle, V as VSpacer, g as VChip, A as VWindow, B as axios, C as resolveComponent, o as openBlock } from "./index-BCHR8lhs.js";
const _sfc_main = {
  name: "ProfilePage",
  components: { VueApexCharts },
  data() {
    return {
      tab: "mbti",
      // MBTI
      sessionsLoading: false,
      sessions: [],
      selectedSessionId: null,
      mbtiLoading: false,
      mbtiResult: null,
      mbtiError: "",
      // Timeline
      timelineLoading: false,
      timelineData: null,
      timelineError: "",
      timelineGranularity: "day",
      // Knowledge
      knowledgeLoading: false,
      knowledgeEntries: [],
      knowledgeStats: null,
      knowledgeError: "",
      knowledgeCategory: null,
      knowledgeSessionId: null,
      knowledgeCategories: [
        { title: "兴趣领域", value: "interest" },
        { title: "项目追踪", value: "project" },
        { title: "技术栈", value: "tech" },
        { title: "个性特征", value: "personality" },
        { title: "学习路径", value: "learning" },
        { title: "偏好习惯", value: "preference" }
      ],
      catLabels: { interest: "兴趣", project: "项目", tech: "技术", personality: "个性", learning: "学习", preference: "偏好", concept: "概念", relationship: "关系" },
      dimLabels: {
        EI: { left: "I 内向", right: "E 外向" },
        SN: { left: "S 实感", right: "N 直觉" },
        TF: { left: "T 思考", right: "F 情感" },
        JP: { left: "J 判断", right: "P 感知" }
      }
    };
  },
  computed: {
    sessionItems() {
      return this.sessions.map((s) => ({
        text: s.display_name || s.session_id,
        value: s.session_id
      }));
    },
    /** 按日期升序排列的时间线数据（后端返回降序） */
    sortedTimeline() {
      var _a;
      if (!((_a = this.timelineData) == null ? void 0 : _a.timeline)) return [];
      const sorted = [...this.timelineData.timeline].sort((a, b) => a.date.localeCompare(b.date));
      return sorted;
    },
    /** 折线图 X 轴：日期列表 */
    chartCategories() {
      return this.sortedTimeline.map((s) => s.date);
    },
    /** 折线图数据系列 */
    chartSeries() {
      return [{
        name: "对话条数",
        data: this.sortedTimeline.map((s) => s.count ?? 0)
      }];
    },
    /** ApexCharts 配置 */
    chartOptions() {
      return {
        chart: {
          type: "line",
          toolbar: { show: true, tools: { download: true, zoom: true, pan: false } },
          zoom: { enabled: true },
          foreColor: "#999"
        },
        colors: ["#607d8b"],
        stroke: {
          curve: "smooth",
          width: 3
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            gradientToColors: ["#607d8b"],
            shadeIntensity: 0.2,
            type: "vertical",
            opacityFrom: 0.4,
            opacityTo: 0.05,
            stops: [0, 100]
          }
        },
        markers: {
          size: 4,
          colors: ["#607d8b"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: { size: 6 }
        },
        xaxis: {
          type: "category",
          categories: this.chartCategories,
          labels: {
            rotate: -45,
            style: { fontSize: "11px" }
          },
          title: { text: "日期", style: { fontSize: "13px" } }
        },
        yaxis: {
          title: { text: "对话条数", style: { fontSize: "13px" } },
          min: 0,
          labels: {
            formatter: (val) => Math.round(val)
          }
        },
        tooltip: {
          enabled: true,
          theme: "light",
          x: { show: true },
          y: {
            formatter: (val) => `${val} 条对话`
          }
        },
        grid: {
          borderColor: "#e8e8e8",
          strokeDashArray: 4
        },
        dataLabels: { enabled: false },
        legend: { show: false }
      };
    }
  },
  watch: {
    timelineGranularity() {
      this.loadTimeline();
    },
    selectedSessionId(newVal) {
      if (newVal) this.loadCachedMbti(newVal);
      else this.mbtiResult = null;
    }
  },
  mounted() {
    this.loadSessions();
  },
  methods: {
    async loadSessions() {
      var _a, _b, _c;
      this.sessionsLoading = true;
      try {
        const res = await axios.get("/api/miku/sessions");
        if (((_a = res.data) == null ? void 0 : _a.status) === "ok" && ((_c = (_b = res.data) == null ? void 0 : _b.data) == null ? void 0 : _c.sessions)) {
          this.sessions = res.data.data.sessions;
          if (this.sessions.length > 0) {
            this.selectedSessionId = this.sessions[0].session_id;
          }
        }
      } catch (e) {
      } finally {
        this.sessionsLoading = false;
      }
    },
    async runMbtiAnalysis() {
      var _a, _b, _c, _d;
      if (!this.selectedSessionId) return;
      this.mbtiLoading = true;
      this.mbtiError = "";
      this.mbtiResult = null;
      try {
        const res = await axios.post("/api/miku/analyze", {
          session_id: this.selectedSessionId
        });
        if (((_a = res.data) == null ? void 0 : _a.status) === "ok") {
          this.mbtiResult = this._adaptMbtiPayload(res.data.data);
        } else {
          this.mbtiError = ((_b = res.data) == null ? void 0 : _b.message) || "分析失败";
        }
      } catch (e) {
        this.mbtiError = ((_d = (_c = e.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message) || e.message || "请求失败";
      } finally {
        this.mbtiLoading = false;
      }
    },
    /** 切换 session 时静默读取上次缓存的 MBTI 结果，没有就清空 */
    async loadCachedMbti(sessionId) {
      var _a, _b;
      this.mbtiError = "";
      try {
        const res = await axios.get("/api/miku/result", { params: { session_id: sessionId } });
        if (((_a = res.data) == null ? void 0 : _a.status) === "ok" && ((_b = res.data.data) == null ? void 0 : _b.cached)) {
          this.mbtiResult = this._adaptMbtiPayload(res.data.data.result);
        } else {
          this.mbtiResult = null;
        }
      } catch (e) {
        this.mbtiResult = null;
      }
    },
    /** 把后端 typeCode + dimensions[] 数组形式转成本组件用的 {EI,SN,TF,JP} 对象形式 */
    _adaptMbtiPayload(raw) {
      if (!raw) return null;
      const dimsArr = Array.isArray(raw.dimensions) ? raw.dimensions : [];
      const code = (raw.typeCode || raw.mbti_type || "").toUpperCase();
      const dimsObj = {};
      const keys = ["EI", "SN", "TF", "JP"];
      keys.forEach((k, i) => {
        const d = dimsArr[i] || {};
        dimsObj[k] = {
          score: d.score ?? 50,
          label: d.right || d.label || k[1],
          summary: d.summary || ""
        };
      });
      return {
        mbti_type: code,
        type_name: raw.typeName || "",
        type_desc: raw.typeDesc || "",
        dimensions: dimsObj,
        overall_summary: raw.summary || raw.overall_summary || "",
        confidence_note: raw.confidence_note || "",
        analyzed_at: raw.analyzed_at || ""
      };
    },
    async loadTimeline() {
      var _a, _b, _c, _d;
      this.timelineLoading = true;
      this.timelineError = "";
      this.timelineData = null;
      try {
        const res = await axios.get("/api/miku/timeline", {
          params: { granularity: this.timelineGranularity }
        });
        if (((_a = res.data) == null ? void 0 : _a.status) === "ok") {
          this.timelineData = res.data.data;
        } else {
          this.timelineError = ((_b = res.data) == null ? void 0 : _b.message) || "加载失败";
        }
      } catch (e) {
        this.timelineError = ((_d = (_c = e.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message) || e.message || "请求失败";
      } finally {
        this.timelineLoading = false;
      }
    },
    async runKnowledgeExtract() {
      this.knowledgeLoading = true;
      this.knowledgeError = "";
      try {
        const resp = await fetch("/api/profile/knowledge/extract", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ session_id: this.knowledgeSessionId || null }) });
        const data = await resp.json();
        if (data.status === "ok") {
          this.knowledgeStats = data.data.stats;
          await this.loadKnowledge();
        } else this.knowledgeError = data.message || "提取失败";
      } catch (e) {
        this.knowledgeError = "网络错误: " + e.message;
      } finally {
        this.knowledgeLoading = false;
      }
    },
    async loadKnowledge() {
      try {
        const params = new URLSearchParams();
        if (this.knowledgeCategory) params.set("category", this.knowledgeCategory);
        const resp = await fetch("/api/profile/knowledge/list?" + params.toString());
        const data = await resp.json();
        if (data.status === "ok") {
          this.knowledgeEntries = data.data.entries || [];
          this.knowledgeStats = data.data.stats;
        }
      } catch (e) {
        this.knowledgeError = "加载失败: " + e.message;
      }
    }
  }
};
const _hoisted_1 = { style: { "height": "100%", "display": "flex", "flex-direction": "column", "padding": "16px" } };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  class: "text-h5 font-weight-bold mb-4",
  style: { "color": "rgb(var(--v-theme-primary))" }
}, "User Profile · 用户画像", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", {
  class: "text-body-2 mb-3",
  style: { "color": "var(--v-theme-secondaryText)" }
}, " 基于对话历史，由 AI 分析您的 MBTI 人格倾向。分析结果仅供娱乐参考～ ", -1);
const _hoisted_4 = { key: 1 };
const _hoisted_5 = {
  key: 0,
  class: "text-center mb-2"
};
const _hoisted_6 = {
  class: "text-h3 font-weight-bold",
  style: { "color": "rgb(var(--v-theme-primary))" }
};
const _hoisted_7 = {
  key: 0,
  class: "text-body-2 mt-1",
  style: { "color": "var(--v-theme-secondaryText)" }
};
const _hoisted_8 = { key: 0 };
const _hoisted_9 = {
  key: 1,
  class: "text-caption text-center mb-3",
  style: { "color": "var(--v-theme-secondaryText)", "opacity": "0.7" }
};
const _hoisted_10 = { class: "d-flex justify-space-between mb-1" };
const _hoisted_11 = { class: "text-caption font-weight-bold" };
const _hoisted_12 = {
  class: "text-caption",
  style: { "color": "rgb(var(--v-theme-secondary))" }
};
const _hoisted_13 = { class: "text-caption font-weight-bold" };
const _hoisted_14 = {
  class: "text-caption mt-1",
  style: { "color": "var(--v-theme-secondaryText)" }
};
const _hoisted_15 = {
  key: 4,
  class: "text-caption mt-2",
  style: { "color": "var(--v-theme-secondaryText)", "opacity": "0.7" }
};
const _hoisted_16 = { class: "d-flex align-center mb-4" };
const _hoisted_17 = {
  key: 0,
  style: { "min-height": "320px" }
};
const _hoisted_18 = {
  key: 1,
  class: "text-body-2",
  style: { "color": "var(--v-theme-secondaryText)" }
};
const _hoisted_19 = {
  key: 2,
  class: "text-body-2",
  style: { "color": "var(--v-theme-secondaryText)" }
};
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("p", {
  class: "text-body-2 mb-3",
  style: { "color": "var(--v-theme-secondaryText)" }
}, " AI 自动分析对话历史，提取兴趣、项目、技能等结构化知识，构建个人知识库。 ", -1);
const _hoisted_21 = { class: "d-flex gap-2 mb-3" };
const _hoisted_22 = { class: "mb-3" };
const _hoisted_23 = {
  key: 1,
  class: "d-flex gap-3 mb-3 flex-wrap"
};
const _hoisted_24 = { key: 2 };
const _hoisted_25 = { class: "d-flex justify-space-between align-center mb-1" };
const _hoisted_26 = { class: "text-caption font-weight-bold" };
const _hoisted_27 = {
  class: "text-caption mb-0",
  style: { "color": "var(--v-theme-secondaryText)" }
};
const _hoisted_28 = {
  key: 3,
  class: "text-caption",
  style: { "color": "var(--v-theme-secondaryText)" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VueApexCharts = resolveComponent("VueApexCharts");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(VTabs, {
      modelValue: $data.tab,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.tab = $event),
      color: "primary",
      class: "mb-4"
    }, {
      default: withCtx(() => [
        createVNode(VTab, { value: "mbti" }, {
          default: withCtx(() => [
            createTextVNode("MBTI 人格分析")
          ]),
          _: 1
        }),
        createVNode(VTab, { value: "timeline" }, {
          default: withCtx(() => [
            createTextVNode("时间线摘要")
          ]),
          _: 1
        }),
        createVNode(VTab, { value: "knowledge" }, {
          default: withCtx(() => [
            createTextVNode("知识画像")
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(VWindow, {
      modelValue: $data.tab,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.tab = $event),
      style: { "flex": "1", "overflow-y": "auto" }
    }, {
      default: withCtx(() => [
        createVNode(VWindowItem, { value: "mbti" }, {
          default: withCtx(() => [
            createVNode(VCard, {
              variant: "outlined",
              class: "pa-4",
              style: { "border-color": "rgba(var(--v-theme-primary), 0.27)" }
            }, {
              default: withCtx(() => [
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    _hoisted_3,
                    createVNode(VSelect, {
                      modelValue: $data.selectedSessionId,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.selectedSessionId = $event),
                      items: $options.sessionItems,
                      "item-title": "text",
                      "item-value": "value",
                      label: "选择会话",
                      variant: "outlined",
                      density: "compact",
                      loading: $data.sessionsLoading,
                      class: "mb-3",
                      "prepend-icon": "mdi-forum",
                      "hide-details": ""
                    }, null, 8, ["modelValue", "items", "loading"]),
                    createVNode(VBtn, {
                      color: "primary",
                      variant: "tonal",
                      loading: $data.mbtiLoading,
                      disabled: !$data.selectedSessionId,
                      onClick: $options.runMbtiAnalysis,
                      "prepend-icon": "mdi-brain"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($data.mbtiLoading ? "分析中…" : "开始 MBTI 分析"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled", "onClick"]),
                    $data.mbtiResult ? (openBlock(), createBlock(VDivider, {
                      key: 0,
                      class: "my-4"
                    })) : createCommentVNode("", true),
                    $data.mbtiResult ? (openBlock(), createElementBlock("div", _hoisted_4, [
                      $data.mbtiResult.mbti_type ? (openBlock(), createElementBlock("div", _hoisted_5, [
                        createBaseVNode("span", _hoisted_6, toDisplayString($data.mbtiResult.mbti_type), 1),
                        $data.mbtiResult.type_name ? (openBlock(), createElementBlock("div", _hoisted_7, [
                          createTextVNode(toDisplayString($data.mbtiResult.type_name), 1),
                          $data.mbtiResult.type_desc ? (openBlock(), createElementBlock("span", _hoisted_8, " · " + toDisplayString($data.mbtiResult.type_desc), 1)) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      $data.mbtiResult.analyzed_at ? (openBlock(), createElementBlock("div", _hoisted_9, " 上次分析：" + toDisplayString($data.mbtiResult.analyzed_at), 1)) : createCommentVNode("", true),
                      $data.mbtiResult.dimensions ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList($data.mbtiResult.dimensions, (dim, key) => {
                        var _a, _b;
                        return openBlock(), createElementBlock("div", {
                          key,
                          class: "mb-3"
                        }, [
                          createBaseVNode("div", _hoisted_10, [
                            createBaseVNode("span", _hoisted_11, toDisplayString(((_a = $data.dimLabels[key]) == null ? void 0 : _a.left) || ""), 1),
                            createBaseVNode("span", _hoisted_12, toDisplayString(dim.label), 1),
                            createBaseVNode("span", _hoisted_13, toDisplayString(((_b = $data.dimLabels[key]) == null ? void 0 : _b.right) || ""), 1)
                          ]),
                          createVNode(VProgressLinear, {
                            "model-value": dim.score,
                            color: dim.score > 50 ? "primary" : "secondary",
                            height: "10",
                            rounded: ""
                          }, null, 8, ["model-value", "color"]),
                          createBaseVNode("p", _hoisted_14, toDisplayString(dim.summary), 1)
                        ]);
                      }), 128)) : createCommentVNode("", true),
                      $data.mbtiResult.overall_summary ? (openBlock(), createBlock(VAlert, {
                        key: 3,
                        color: "primary",
                        variant: "tonal",
                        density: "compact",
                        class: "mt-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString($data.mbtiResult.overall_summary), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      $data.mbtiResult.confidence_note ? (openBlock(), createElementBlock("p", _hoisted_15, toDisplayString($data.mbtiResult.confidence_note), 1)) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    $data.mbtiError ? (openBlock(), createBlock(VAlert, {
                      key: 2,
                      type: "error",
                      variant: "tonal",
                      density: "compact",
                      class: "mt-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($data.mbtiError), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(VWindowItem, { value: "timeline" }, {
          default: withCtx(() => [
            createVNode(VCard, {
              variant: "outlined",
              class: "pa-4",
              style: { "border-color": "rgba(var(--v-theme-primary), 0.27)" }
            }, {
              default: withCtx(() => [
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_16, [
                      createVNode(VBtnToggle, {
                        modelValue: $data.timelineGranularity,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.timelineGranularity = $event),
                        mandatory: "",
                        density: "compact",
                        variant: "outlined",
                        color: "primary",
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            value: "day",
                            size: "x-small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("日")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "week",
                            size: "x-small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("周")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            value: "month",
                            size: "x-small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("月")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      createVNode(VBtn, {
                        color: "secondary",
                        variant: "tonal",
                        loading: $data.timelineLoading,
                        onClick: $options.loadTimeline,
                        "prepend-icon": "mdi-timeline-clock"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString($data.timelineLoading ? "加载中…" : "刷新时间线"), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"]),
                      createVNode(VSpacer),
                      $data.timelineData && $data.timelineData.timeline && $data.timelineData.timeline.length ? (openBlock(), createBlock(VChip, {
                        key: 0,
                        color: "primary",
                        variant: "tonal",
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 共 " + toDisplayString($data.timelineData.timeline.length) + " " + toDisplayString($data.timelineGranularity === "day" ? "天" : $data.timelineGranularity === "week" ? "周" : "月"), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    $data.timelineData && $data.timelineData.timeline && $data.timelineData.timeline.length ? (openBlock(), createElementBlock("div", _hoisted_17, [
                      createVNode(_component_VueApexCharts, {
                        type: "line",
                        height: "320",
                        options: $options.chartOptions,
                        series: $options.chartSeries
                      }, null, 8, ["options", "series"])
                    ])) : $data.timelineData && $data.timelineData.message ? (openBlock(), createElementBlock("p", _hoisted_18, toDisplayString($data.timelineData.message), 1)) : !$data.timelineLoading ? (openBlock(), createElementBlock("p", _hoisted_19, " 暂无时间线数据 ")) : createCommentVNode("", true),
                    $data.timelineError ? (openBlock(), createBlock(VAlert, {
                      key: 3,
                      type: "error",
                      variant: "tonal",
                      density: "compact",
                      class: "mt-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($data.timelineError), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(VWindowItem, { value: "knowledge" }, {
          default: withCtx(() => [
            createVNode(VCard, {
              variant: "outlined",
              class: "pa-4",
              style: { "border-color": "rgba(var(--v-theme-primary), 0.27)" }
            }, {
              default: withCtx(() => [
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    _hoisted_20,
                    createBaseVNode("div", _hoisted_21, [
                      createVNode(VSelect, {
                        modelValue: $data.knowledgeSessionId,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.knowledgeSessionId = $event),
                        items: $options.sessionItems,
                        "item-title": "text",
                        "item-value": "value",
                        label: "选择会话 (留空=全部)",
                        variant: "outlined",
                        density: "compact",
                        style: { "max-width": "300px" },
                        "hide-details": "",
                        clearable: ""
                      }, null, 8, ["modelValue", "items"]),
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "tonal",
                        loading: $data.knowledgeLoading,
                        onClick: $options.runKnowledgeExtract,
                        "prepend-icon": "mdi-database-search"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("提取知识")
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"])
                    ]),
                    createBaseVNode("div", _hoisted_22, [
                      createVNode(VSelect, {
                        modelValue: $data.knowledgeCategory,
                        "onUpdate:modelValue": [
                          _cache[4] || (_cache[4] = ($event) => $data.knowledgeCategory = $event),
                          $options.loadKnowledge
                        ],
                        items: $data.knowledgeCategories,
                        label: "分类筛选",
                        variant: "outlined",
                        density: "compact",
                        "hide-details": "",
                        style: { "max-width": "160px" },
                        clearable: ""
                      }, null, 8, ["modelValue", "items", "onUpdate:modelValue"])
                    ]),
                    $data.knowledgeError ? (openBlock(), createBlock(VAlert, {
                      key: 0,
                      type: "error",
                      variant: "tonal",
                      density: "compact",
                      class: "mb-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($data.knowledgeError), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    $data.knowledgeStats ? (openBlock(), createElementBlock("div", _hoisted_23, [
                      createVNode(VChip, {
                        size: "small",
                        color: "primary",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("共 " + toDisplayString($data.knowledgeStats.total_entries) + " 条知识", 1)
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.knowledgeStats.by_category, (cnt, cat) => {
                        return openBlock(), createBlock(VChip, {
                          key: cat,
                          size: "small",
                          variant: "outlined"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($data.catLabels[cat] || cat) + ": " + toDisplayString(cnt), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ])) : createCommentVNode("", true),
                    $data.knowledgeEntries.length ? (openBlock(), createElementBlock("div", _hoisted_24, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.knowledgeEntries, (entry) => {
                        return openBlock(), createElementBlock("div", {
                          key: entry.id,
                          class: "mb-2 pa-2",
                          style: { "background": "var(--v-theme-surface-variant)", "border-radius": "6px" }
                        }, [
                          createBaseVNode("div", _hoisted_25, [
                            createBaseVNode("span", _hoisted_26, toDisplayString(entry.topic), 1),
                            createVNode(VChip, {
                              size: "x-small",
                              color: entry.confidence > 0.6 ? "primary" : "orange"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString((entry.confidence * 100).toFixed(0)) + "%", 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createBaseVNode("p", _hoisted_27, toDisplayString(entry.content), 1)
                        ]);
                      }), 128))
                    ])) : (openBlock(), createElementBlock("p", _hoisted_28, '点击"提取知识"开始分析对话'))
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
    }, 8, ["modelValue"])
  ]);
}
const ProfilePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  ProfilePage as default
};
