import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, r as renderList, T as normalizeClass, t as toDisplayString, b as createVNode, w as withCtx, d as createTextVNode, i as createCommentVNode, e as VBtn, U as normalizeStyle, B as axios, aV as createStaticVNode, u as useModuleI18n, L as ref, M as onMounted, l as VIcon, $ as unref, a8 as VSwitch, h as createBlock } from "./index-BCHR8lhs.js";
import { e as eventsourceExports } from "./eventsource-BRykmeMV.js";
const _hoisted_1$1 = { class: "trace-wrapper" };
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<div class="trace-row trace-header" data-v-9f8163c3><div class="trace-cell time" data-v-9f8163c3>Time</div><div class="trace-cell span" data-v-9f8163c3>Event ID</div><div class="trace-cell umo" data-v-9f8163c3>UMO</div><div class="trace-cell sender" data-v-9f8163c3>Sender</div><div class="trace-cell outline" data-v-9f8163c3>Outline</div><div class="trace-cell fields" data-v-9f8163c3></div></div>', 1);
const _hoisted_3$1 = { class: "trace-row trace-event" };
const _hoisted_4$1 = { class: "trace-cell time" };
const _hoisted_5$1 = ["title"];
const _hoisted_6$1 = { class: "event-title" };
const _hoisted_7$1 = { class: "trace-cell umo" };
const _hoisted_8 = { class: "trace-cell sender" };
const _hoisted_9 = {
  class: "event-sub",
  style: { "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis" }
};
const _hoisted_10 = { class: "trace-cell outline" };
const _hoisted_11 = { class: "event-sub outline" };
const _hoisted_12 = { class: "trace-cell fields event-controls" };
const _hoisted_13 = {
  key: 0,
  class: "agent-dot"
};
const _hoisted_14 = {
  key: 0,
  class: "trace-records"
};
const _hoisted_15 = { class: "trace-record-time" };
const _hoisted_16 = { class: "trace-record-action" };
const _hoisted_17 = { class: "trace-record-fields" };
const _hoisted_18 = {
  key: 0,
  class: "event-more"
};
const _hoisted_19 = {
  key: 0,
  class: "trace-empty"
};
const __default__$1 = {
  name: "TraceDisplayer",
  props: {
    autoScroll: {
      type: Boolean,
      default: true
    },
    maxItems: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      events: [],
      eventIndex: {},
      highlightMap: {},
      highlightTimers: {},
      eventSource: null,
      retryTimer: null,
      retryAttempts: 0,
      maxRetryAttempts: 10,
      baseRetryDelay: 1e3,
      lastEventId: null,
      tableHeight: "auto"
    };
  },
  async mounted() {
    await this.fetchTraceHistory();
    this.connectSSE();
    this.updateTableHeight();
    window.addEventListener("resize", this.updateTableHeight);
  },
  beforeUnmount() {
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }
    if (this.retryTimer) {
      clearTimeout(this.retryTimer);
      this.retryTimer = null;
    }
    this.retryAttempts = 0;
    window.removeEventListener("resize", this.updateTableHeight);
  },
  methods: {
    updateTableHeight() {
      this.$nextTick(() => {
        const el = this.$refs.scrollEl;
        if (!el || typeof window === "undefined") return;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const offsetTop = el.getBoundingClientRect().top;
        const height = Math.max(viewportHeight - offsetTop, 0);
        this.tableHeight = `${height}px`;
      });
    },
    async fetchTraceHistory() {
      var _a, _b;
      try {
        const res = await axios.get("/api/log-history");
        const logs = ((_b = (_a = res.data) == null ? void 0 : _a.data) == null ? void 0 : _b.logs) || [];
        const traces = logs.filter((item) => item.type === "trace");
        this.processNewTraces(traces);
      } catch (err) {
        console.error("Failed to fetch trace history:", err);
      }
    },
    connectSSE() {
      if (this.eventSource) {
        this.eventSource.close();
        this.eventSource = null;
      }
      const token = localStorage.getItem("token");
      this.eventSource = new eventsourceExports.EventSourcePolyfill("/api/live-log", {
        headers: {
          Authorization: token ? `Bearer ${token}` : ""
        },
        heartbeatTimeout: 3e5,
        withCredentials: true
      });
      this.eventSource.onopen = () => {
        this.retryAttempts = 0;
        if (!this.lastEventId) {
          this.fetchTraceHistory();
        }
      };
      this.eventSource.onmessage = (event) => {
        try {
          if (event.lastEventId) {
            this.lastEventId = event.lastEventId;
          }
          const payload = JSON.parse(event.data);
          if ((payload == null ? void 0 : payload.type) !== "trace") {
            return;
          }
          this.processNewTraces([payload]);
        } catch (e) {
          console.error("Failed to parse trace payload:", e);
        }
      };
      this.eventSource.onerror = (err) => {
        if (this.eventSource) {
          this.eventSource.close();
          this.eventSource = null;
        }
        if (this.retryAttempts >= this.maxRetryAttempts) {
          console.error("Trace stream reached max retry attempts.");
          return;
        }
        const delay = Math.min(
          this.baseRetryDelay * Math.pow(2, this.retryAttempts),
          3e4
        );
        if (this.retryTimer) {
          clearTimeout(this.retryTimer);
          this.retryTimer = null;
        }
        this.retryTimer = setTimeout(async () => {
          this.retryAttempts++;
          if (!this.lastEventId) {
            await this.fetchTraceHistory();
          }
          this.connectSSE();
        }, delay);
      };
    },
    processNewTraces(newTraces) {
      if (!newTraces || newTraces.length === 0) return;
      let hasUpdate = false;
      const touched = /* @__PURE__ */ new Set();
      newTraces.forEach((trace) => {
        if (!trace.span_id) return;
        const recordKey = `${trace.time}-${trace.span_id}-${trace.action}`;
        let event = this.eventIndex[trace.span_id];
        if (!event) {
          event = {
            span_id: trace.span_id,
            name: trace.name,
            umo: trace.umo,
            sender_name: trace.sender_name,
            message_outline: trace.message_outline,
            first_time: trace.time,
            last_time: trace.time,
            collapsed: true,
            visibleCount: 20,
            records: [],
            hasAgentPrepare: trace.action === "astr_agent_prepare"
          };
          this.eventIndex[trace.span_id] = event;
          this.events.push(event);
          hasUpdate = true;
        }
        const exists = event.records.some((item) => item.key === recordKey);
        if (exists) return;
        event.records.push({
          time: trace.time,
          action: trace.action,
          fieldsText: this.formatFields(trace.fields),
          timeLabel: this.formatTime(trace.time),
          key: recordKey
        });
        if (trace.action === "astr_agent_prepare") {
          event.hasAgentPrepare = true;
        }
        if (!event.first_time || trace.time < event.first_time) {
          event.first_time = trace.time;
        }
        if (!event.last_time || trace.time > event.last_time) {
          event.last_time = trace.time;
        }
        if (!event.sender_name && trace.sender_name) {
          event.sender_name = trace.sender_name;
        }
        if (!event.message_outline && trace.message_outline) {
          event.message_outline = trace.message_outline;
        }
        touched.add(trace.span_id);
        hasUpdate = true;
      });
      if (hasUpdate) {
        this.events.forEach((event) => {
          event.records.sort((a, b) => b.time - a.time);
        });
        this.events.sort((a, b) => b.first_time - a.first_time);
        if (this.events.length > this.maxItems) {
          const overflow = this.events.length - this.maxItems;
          const removed = this.events.splice(this.maxItems, overflow);
          removed.forEach((event) => {
            delete this.eventIndex[event.span_id];
          });
        }
        touched.forEach((spanId) => {
          this.pulseEvent(spanId);
        });
      }
    },
    scrollToBottom() {
      const el = this.$refs.scrollEl;
      if (!el) return;
      el.scrollTop = el.scrollHeight;
    },
    toggleEvent(spanId) {
      const event = this.eventIndex[spanId];
      if (!event) return;
      event.collapsed = !event.collapsed;
    },
    showMore(spanId) {
      const event = this.eventIndex[spanId];
      if (!event) return;
      event.visibleCount = Math.min(event.records.length, event.visibleCount + 20);
    },
    pulseEvent(spanId) {
      if (!spanId) return;
      if (this.highlightTimers[spanId]) {
        clearTimeout(this.highlightTimers[spanId]);
      }
      this.highlightMap = { ...this.highlightMap, [spanId]: true };
      const remove = setTimeout(() => {
        const next = { ...this.highlightMap };
        delete next[spanId];
        this.highlightMap = next;
        const timers = { ...this.highlightTimers };
        delete timers[spanId];
        this.highlightTimers = timers;
      }, 1200);
      this.highlightTimers = { ...this.highlightTimers, [spanId]: remove };
    },
    getVisibleRecords(event) {
      if (!event.records.length) return [];
      return event.records.slice(0, event.visibleCount);
    },
    formatTime(ts) {
      if (!ts) return "";
      const date = new Date(ts * 1e3);
      const base = date.toLocaleString();
      const ms = String(date.getMilliseconds()).padStart(3, "0");
      return `${base}.${ms}`;
    },
    shortSpan(spanId) {
      if (!spanId) return "";
      return spanId.slice(0, 8);
    },
    formatFields(fields) {
      if (!fields) return "";
      try {
        const text = JSON.stringify(fields, null, 2);
        if (text.length > 2e3) {
          return `${text}`;
        }
        return text;
      } catch (e) {
        return String(fields);
      }
    }
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", {
          class: "trace-table",
          ref: "scrollEl",
          style: normalizeStyle({ height: _ctx.tableHeight })
        }, [
          _hoisted_2$1,
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.events, (event) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["trace-group", { highlight: _ctx.highlightMap[event.span_id] }]),
              key: event.span_id
            }, [
              createBaseVNode("div", _hoisted_3$1, [
                createBaseVNode("div", _hoisted_4$1, toDisplayString(_ctx.formatTime(event.first_time)), 1),
                createBaseVNode("div", {
                  class: "trace-cell span",
                  title: event.span_id
                }, [
                  createBaseVNode("div", _hoisted_6$1, toDisplayString(_ctx.shortSpan(event.span_id)), 1)
                ], 8, _hoisted_5$1),
                createBaseVNode("div", _hoisted_7$1, toDisplayString(event.umo), 1),
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, toDisplayString(event.sender_name || "-"), 1)
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, toDisplayString(event.message_outline || "-"), 1)
                ]),
                createBaseVNode("div", _hoisted_12, [
                  createVNode(VBtn, {
                    size: "x-small",
                    variant: "text",
                    color: "primary",
                    onClick: ($event) => _ctx.toggleEvent(event.span_id)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(event.collapsed ? "Expand" : "Collapse") + " ", 1),
                      event.hasAgentPrepare ? (openBlock(), createElementBlock("span", _hoisted_13)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])
              ]),
              !event.collapsed ? (openBlock(), createElementBlock("div", _hoisted_14, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getVisibleRecords(event), (record) => {
                  return openBlock(), createElementBlock("div", {
                    class: "trace-record",
                    key: record.key
                  }, [
                    createBaseVNode("div", _hoisted_15, toDisplayString(record.timeLabel), 1),
                    createBaseVNode("div", _hoisted_16, toDisplayString(record.action), 1),
                    createBaseVNode("pre", _hoisted_17, toDisplayString(record.fieldsText), 1)
                  ]);
                }), 128)),
                event.visibleCount < event.records.length ? (openBlock(), createElementBlock("div", _hoisted_18, [
                  createVNode(VBtn, {
                    size: "x-small",
                    variant: "tonal",
                    color: "primary",
                    onClick: ($event) => _ctx.showMore(event.span_id)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Show more ")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ], 2);
          }), 128)),
          _ctx.events.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_19, "No trace data yet.")) : createCommentVNode("", true)
        ], 4)
      ]);
    };
  }
});
const TraceDisplayer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9f8163c3"]]);
const _hoisted_1 = { style: { "height": "100%", "display": "flex", "flex-direction": "column" } };
const _hoisted_2 = { class: "trace-header" };
const _hoisted_3 = { class: "trace-info" };
const _hoisted_4 = { class: "trace-hint" };
const _hoisted_5 = { class: "trace-controls" };
const _hoisted_6 = { class: "switch-label" };
const _hoisted_7 = { style: { "flex": "1", "min-height": "0" } };
const __default__ = {
  name: "TracePage",
  components: {
    TraceDisplayer
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const { tm } = useModuleI18n("features/trace");
    const traceEnabled = ref(true);
    const loading = ref(false);
    const traceDisplayerKey = ref(0);
    const fetchTraceSettings = async () => {
      var _a, _b;
      try {
        const res = await axios.get("/api/trace/settings");
        if (((_a = res.data) == null ? void 0 : _a.status) === "ok") {
          traceEnabled.value = ((_b = res.data.data) == null ? void 0 : _b.trace_enable) ?? true;
        }
      } catch (err) {
        console.error("Failed to fetch trace settings:", err);
      }
    };
    const updateTraceSettings = async () => {
      loading.value = true;
      try {
        await axios.post("/api/trace/settings", {
          trace_enable: traceEnabled.value
        });
        traceDisplayerKey.value += 1;
      } catch (err) {
        console.error("Failed to update trace settings:", err);
      } finally {
        loading.value = false;
      }
    };
    onMounted(() => {
      fetchTraceSettings();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(VIcon, {
              size: "small",
              color: "info",
              class: "mr-2"
            }, {
              default: withCtx(() => [
                createTextVNode("mdi-information-outline")
              ]),
              _: 1
            }),
            createBaseVNode("span", _hoisted_4, toDisplayString(unref(tm)("hint")), 1)
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(VSwitch, {
              modelValue: traceEnabled.value,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => traceEnabled.value = $event),
                updateTraceSettings
              ],
              loading: loading.value,
              disabled: loading.value,
              color: "primary",
              "hide-details": "",
              density: "compact"
            }, {
              label: withCtx(() => [
                createBaseVNode("span", _hoisted_6, toDisplayString(traceEnabled.value ? unref(tm)("recording") : unref(tm)("paused")), 1)
              ]),
              _: 1
            }, 8, ["modelValue", "loading", "disabled"])
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          (openBlock(), createBlock(TraceDisplayer, { key: traceDisplayerKey.value }))
        ])
      ]);
    };
  }
});
const TracePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b788b856"]]);
export {
  TracePage as default
};
