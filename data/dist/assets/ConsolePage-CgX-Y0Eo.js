import { C as ConsoleDisplayer } from "./ConsoleDisplayer-VYA8ip5-.js";
import { u as useModuleI18n, c as createElementBlock, a as createBaseVNode, t as toDisplayString, $ as unref, b as createVNode, w as withCtx, d as createTextVNode, k as VAlert, a8 as VSwitch, s as VCard, a6 as VCardTitle, v as VCardText, j as VTextField, a9 as VCardActions, V as VSpacer, e as VBtn, a2 as mergeProps, ai as VDialog, B as axios, o as openBlock } from "./index-sVuaKD1b.js";
import "./eventsource-BRykmeMV.js";
const _hoisted_1 = { style: { "height": "100%" } };
const _hoisted_2 = { style: { "background-color": "var(--v-theme-surface)", "padding": "8px", "padding-left": "16px", "border-radius": "8px", "margin-bottom": "16px", "display": "flex", "flex-direction": "row", "align-items": "center", "justify-content": "space-between" } };
const _hoisted_3 = { class: "d-flex align-center" };
const _hoisted_4 = { class: "text-h5" };
const __default__ = {
  name: "ConsolePage",
  components: {
    ConsoleDisplayer
  },
  data() {
    return {
      autoScrollEnabled: true,
      pipDialog: false,
      pipInstallPayload: {
        package: "",
        mirror: ""
      },
      loading: false,
      status: ""
    };
  },
  watch: {
    autoScrollEnabled(val) {
      if (this.$refs.consoleDisplayer) {
        this.$refs.consoleDisplayer.autoScroll = val;
      }
    }
  },
  methods: {
    pipInstall() {
      this.loading = true;
      axios.post("/api/update/pip-install", this.pipInstallPayload).then((res) => {
        this.status = res.data.message;
        setTimeout(() => {
          this.status = "";
          this.pipDialog = false;
        }, 2e3);
      }).catch((err) => {
        this.status = err.response.data.message;
      }).finally(() => {
        this.loading = false;
      });
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const { tm } = useModuleI18n("features/console");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", null, [
            createBaseVNode("h4", null, toDisplayString(unref(tm)("title")), 1),
            createVNode(VAlert, {
              type: "info",
              variant: "tonal",
              density: "compact",
              class: "mt-2",
              style: { "max-width": "600px" }
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(tm)("debugHint.text")), 1)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_3, [
            createVNode(VSwitch, {
              modelValue: _ctx.autoScrollEnabled,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.autoScrollEnabled = $event),
              label: _ctx.autoScrollEnabled ? unref(tm)("autoScroll.enabled") : unref(tm)("autoScroll.disabled"),
              "hide-details": "",
              density: "compact",
              color: "primary",
              style: { "margin-right": "16px" }
            }, null, 8, ["modelValue", "label"]),
            createVNode(VDialog, {
              modelValue: _ctx.pipDialog,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.pipDialog = $event),
              width: "400"
            }, {
              activator: withCtx(({ props }) => [
                createVNode(VBtn, mergeProps({ variant: "plain" }, props), {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(tm)("pipInstall.button")), 1)
                  ]),
                  _: 2
                }, 1040)
              ]),
              default: withCtx(() => [
                createVNode(VCard, null, {
                  default: withCtx(() => [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createBaseVNode("span", _hoisted_4, toDisplayString(unref(tm)("pipInstall.dialogTitle")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: _ctx.pipInstallPayload.package,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.pipInstallPayload.package = $event),
                          label: unref(tm)("pipInstall.packageLabel"),
                          variant: "outlined"
                        }, null, 8, ["modelValue", "label"]),
                        createVNode(VTextField, {
                          modelValue: _ctx.pipInstallPayload.mirror,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.pipInstallPayload.mirror = $event),
                          label: unref(tm)("pipInstall.mirrorLabel"),
                          variant: "outlined"
                        }, null, 8, ["modelValue", "label"]),
                        createBaseVNode("small", null, toDisplayString(unref(tm)("pipInstall.mirrorHint")), 1),
                        createBaseVNode("div", null, [
                          createBaseVNode("small", null, toDisplayString(_ctx.status), 1)
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          color: "blue-darken-1",
                          variant: "text",
                          onClick: _ctx.pipInstall,
                          loading: _ctx.loading
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(tm)("pipInstall.installButton")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick", "loading"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ]),
        createVNode(ConsoleDisplayer, {
          ref: "consoleDisplayer",
          style: { "height": "calc(100vh - 220px)" }
        }, null, 512)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
