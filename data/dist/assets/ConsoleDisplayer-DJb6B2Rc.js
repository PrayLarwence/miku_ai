import { _ as _export_sfc, c as createElementBlock, b as createVNode, w as withCtx, F as Fragment, r as renderList, h as createBlock, d as createTextVNode, t as toDisplayString, g as VChip, ar as VChipGroup, V as VSpacer, e as VBtn, i as createCommentVNode, B as axios, as as useCommonStore, ap as pushScopeId, aq as popScopeId, a as createBaseVNode, o as openBlock } from "./index-BCHR8lhs.js";
import { e as eventsourceExports } from "./eventsource-BRykmeMV.js";
const _withScopeId = (n) => (pushScopeId("data-v-10fff2e3"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "console-displayer-wrapper",
  id: "console-wrapper"
};
const _hoisted_2 = {
  key: 0,
  class: "filter-controls mb-2"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  id: "term",
  style: { "background-color": "#1e1e1e", "padding": "16px", "border-radius": "8px", "overflow-y": "auto", "height": "100%" }
}, null, -1));
const __default__ = {
  name: "ConsoleDisplayer",
  data() {
    return {
      autoScroll: true,
      isFullscreen: false,
      logColorAnsiMap: {
        "\x1B[1;34m": "color: #6cb6d9; font-weight: bold;",
        "\x1B[1;36m": "color: #72c4cc; font-weight: bold;",
        "\x1B[1;33m": "color: #d4b95e; font-weight: bold;",
        "\x1B[31m": "color: #d46a6a;",
        "\x1B[1;31m": "color: #e06060; font-weight: bold;",
        "\x1B[0m": "color: inherit; font-weight: normal;",
        "\x1B[32m": "color: #6cc070;",
        "default": "color: #c8c8c8;"
      },
      logLevels: ["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"],
      selectedLevels: [0, 1, 2, 3, 4],
      levelColors: {
        "DEBUG": "grey",
        "INFO": "blue-lighten-3",
        "WARNING": "amber",
        "ERROR": "red",
        "CRITICAL": "purple"
      },
      localLogCache: [],
      eventSource: null,
      retryTimer: null,
      retryAttempts: 0,
      maxRetryAttempts: 10,
      baseRetryDelay: 1e3,
      lastEventId: null
    };
  },
  computed: {
    commonStore() {
      return useCommonStore();
    }
  },
  props: {
    historyNum: {
      type: String,
      default: "-1"
    },
    showLevelBtns: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    selectedLevels: {
      handler() {
        this.refreshDisplay();
      },
      deep: true
    }
  },
  async mounted() {
    await this.fetchLogHistory();
    this.connectSSE();
    document.addEventListener("fullscreenchange", this.handleFullscreenChange);
  },
  beforeUnmount() {
    document.removeEventListener("fullscreenchange", this.handleFullscreenChange);
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }
    if (this.retryTimer) {
      clearTimeout(this.retryTimer);
      this.retryTimer = null;
    }
    this.retryAttempts = 0;
  },
  methods: {
    connectSSE() {
      if (this.eventSource) {
        this.eventSource.close();
        this.eventSource = null;
      }
      console.log(`正在连接日志流... (尝试次数: ${this.retryAttempts})`);
      const token = localStorage.getItem("token");
      this.eventSource = new eventsourceExports.EventSourcePolyfill("/api/live-log", {
        headers: {
          "Authorization": token ? `Bearer ${token}` : ""
        },
        heartbeatTimeout: 3e5,
        withCredentials: true
      });
      this.eventSource.onopen = () => {
        console.log("日志流连接成功！");
        this.retryAttempts = 0;
        if (!this.lastEventId) {
          this.fetchLogHistory();
        }
      };
      this.eventSource.onmessage = (event) => {
        try {
          if (event.lastEventId) {
            this.lastEventId = event.lastEventId;
          }
          const payload = JSON.parse(event.data);
          this.processNewLogs([payload]);
        } catch (e) {
          console.error("解析日志失败:", e);
        }
      };
      this.eventSource.onerror = (err) => {
        if (err.status === 401) {
          console.error("鉴权失败 (401)，可能是 Token 过期了。");
        } else {
          console.warn("日志流连接错误:", err);
        }
        if (this.eventSource) {
          this.eventSource.close();
          this.eventSource = null;
        }
        if (this.retryAttempts >= this.maxRetryAttempts) {
          console.error("❌ 已达到最大重试次数，停止重连。请刷新页面重试。");
          return;
        }
        const delay = Math.min(
          this.baseRetryDelay * Math.pow(2, this.retryAttempts),
          3e4
        );
        console.log(`⏳ ${delay}ms 后尝试第 ${this.retryAttempts + 1} 次重连...`);
        if (this.retryTimer) {
          clearTimeout(this.retryTimer);
          this.retryTimer = null;
        }
        this.retryTimer = setTimeout(async () => {
          this.retryAttempts++;
          if (!this.lastEventId) {
            await this.fetchLogHistory();
          }
          this.connectSSE();
        }, delay);
      };
    },
    processNewLogs(newLogs) {
      if (!newLogs || newLogs.length === 0) return;
      let hasUpdate = false;
      newLogs.forEach((log) => {
        const exists = this.localLogCache.some(
          (existing) => existing.time === log.time && existing.data === log.data && existing.level === log.level
        );
        if (!exists) {
          this.localLogCache.push(log);
          hasUpdate = true;
          if (this.isLevelSelected(log.level)) {
            this.printLog(log.data);
          }
        }
      });
      if (hasUpdate) {
        this.localLogCache.sort((a, b) => a.time - b.time);
        const maxSize = this.commonStore.log_cache_max_len || 200;
        if (this.localLogCache.length > maxSize) {
          this.localLogCache.splice(0, this.localLogCache.length - maxSize);
        }
      }
    },
    async fetchLogHistory() {
      try {
        const res = await axios.get("/api/log-history");
        if (res.data.data.logs && res.data.data.logs.length > 0) {
          this.processNewLogs(res.data.data.logs);
        }
      } catch (err) {
        console.error("Failed to fetch log history:", err);
      }
    },
    getLevelColor(level) {
      return this.levelColors[level] || "grey";
    },
    isLevelSelected(level) {
      for (let i = 0; i < this.selectedLevels.length; ++i) {
        let level_ = this.logLevels[this.selectedLevels[i]];
        if (level_ === level) {
          return true;
        }
      }
      return false;
    },
    refreshDisplay() {
      const termElement = document.getElementById("term");
      if (termElement) {
        termElement.innerHTML = "";
        if (this.localLogCache && this.localLogCache.length > 0) {
          this.localLogCache.forEach((logItem) => {
            if (this.isLevelSelected(logItem.level)) {
              this.printLog(logItem.data);
            }
          });
        }
      }
    },
    toggleAutoScroll() {
      this.autoScroll = !this.autoScroll;
    },
    toggleFullscreen() {
      const container = document.getElementById("console-wrapper");
      if (!document.fullscreenElement) {
        container.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    },
    handleFullscreenChange() {
      this.isFullscreen = !!document.fullscreenElement;
    },
    printLog(log) {
      let ele = document.getElementById("term");
      if (!ele) {
        return;
      }
      let span = document.createElement("pre");
      let style = this.logColorAnsiMap["default"];
      for (let key in this.logColorAnsiMap) {
        if (log.startsWith(key)) {
          style = this.logColorAnsiMap[key];
          log = log.replace(key, "").replace("\x1B[0m", "");
          break;
        }
      }
      span.style = style;
      span.classList.add("console-log-line", "fade-in");
      span.innerText = `${log}`;
      ele.appendChild(span);
      if (this.autoScroll) {
        ele.scrollTop = ele.scrollHeight;
      }
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        __props.showLevelBtns ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(VChipGroup, {
            modelValue: _ctx.selectedLevels,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.selectedLevels = $event),
            column: "",
            multiple: ""
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.logLevels, (level) => {
                return openBlock(), createBlock(VChip, {
                  key: level,
                  color: _ctx.getLevelColor(level),
                  filter: "",
                  variant: "flat",
                  size: "small",
                  "text-color": level === "DEBUG" || level === "INFO" ? "black" : "white",
                  class: "font-weight-medium"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(level), 1)
                  ]),
                  _: 2
                }, 1032, ["color", "text-color"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(VSpacer),
          createVNode(VBtn, {
            icon: _ctx.isFullscreen ? "mdi-fullscreen-exit" : "mdi-fullscreen",
            variant: "text",
            density: "compact",
            class: "me-4 fullscreen-btn",
            onClick: _ctx.toggleFullscreen
          }, null, 8, ["icon", "onClick"])
        ])) : createCommentVNode("", true),
        _hoisted_3
      ]);
    };
  }
});
const ConsoleDisplayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-10fff2e3"]]);
export {
  ConsoleDisplayer as C
};
