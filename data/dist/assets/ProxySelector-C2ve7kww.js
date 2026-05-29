import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as createVNode, w as withCtx, at as VRadio, h as createBlock, e as VBtn, d as createTextVNode, i as createCommentVNode, au as VRadioGroup, F as Fragment, r as renderList, g as VChip, av as createSlots, j as VTextField, aw as VExpandTransition, B as axios, u as useModuleI18n } from "./index-IOsZtj6J.js";
const _sfc_main = {
  setup() {
    const { tm } = useModuleI18n("features/settings");
    return { tm };
  },
  data() {
    return {
      githubProxies: [
        "https://edgeone.gh-proxy.com",
        "https://hk.gh-proxy.com/",
        "https://gh-proxy.com/",
        "https://gh.llkk.cc"
      ],
      githubProxyRadioControl: "0",
      // the index of the selected proxy
      selectedGitHubProxy: "",
      radioValue: "0",
      // 0: 不使用, 1: 使用
      loadingTestingConnection: false,
      testingProxies: {},
      proxyStatus: {},
      initializing: true
    };
  },
  methods: {
    getProxyByControl(control) {
      const normalizedControl = String(control);
      if (normalizedControl === "-1") {
        return "";
      }
      const index = Number.parseInt(normalizedControl, 10);
      if (Number.isNaN(index)) {
        return "";
      }
      return this.githubProxies[index] || "";
    },
    async testSingleProxy(idx) {
      this.testingProxies[idx] = true;
      const proxy = this.githubProxies[idx];
      try {
        const response = await axios.post("/api/stat/test-ghproxy-connection", {
          proxy_url: proxy
        });
        console.log(response.data);
        if (response.status === 200) {
          this.proxyStatus[idx] = {
            available: true,
            latency: Math.round(response.data.data.latency)
          };
        } else {
          this.proxyStatus[idx] = {
            available: false,
            latency: 0
          };
        }
      } catch (error) {
        this.proxyStatus[idx] = {
          available: false,
          latency: 0
        };
      } finally {
        this.testingProxies[idx] = false;
      }
    },
    async testAllProxies() {
      this.loadingTestingConnection = true;
      const promises = this.githubProxies.map(
        (proxy, idx) => this.testSingleProxy(idx)
      );
      await Promise.all(promises);
      this.loadingTestingConnection = false;
    }
  },
  mounted() {
    this.initializing = true;
    const savedProxy = localStorage.getItem("selectedGitHubProxy") || "";
    const savedRadio = localStorage.getItem("githubProxyRadioValue") || "0";
    const savedControl = String(localStorage.getItem("githubProxyRadioControl") || "0");
    this.radioValue = savedRadio;
    this.githubProxyRadioControl = savedControl;
    if (savedRadio === "1") {
      if (savedControl !== "-1") {
        this.selectedGitHubProxy = this.getProxyByControl(savedControl);
      } else {
        this.selectedGitHubProxy = savedProxy;
      }
    } else {
      this.selectedGitHubProxy = "";
    }
    this.initializing = false;
  },
  watch: {
    selectedGitHubProxy: function(newVal, oldVal) {
      if (this.initializing) {
        return;
      }
      if (!newVal) {
        newVal = "";
      }
      localStorage.setItem("selectedGitHubProxy", newVal);
    },
    radioValue: function(newVal) {
      if (this.initializing) {
        return;
      }
      localStorage.setItem("githubProxyRadioValue", newVal);
      if (String(newVal) === "0") {
        this.selectedGitHubProxy = "";
      } else if (String(this.githubProxyRadioControl) !== "-1") {
        this.selectedGitHubProxy = this.getProxyByControl(this.githubProxyRadioControl);
      }
    },
    githubProxyRadioControl: function(newVal) {
      if (this.initializing) {
        return;
      }
      const normalizedVal = String(newVal);
      localStorage.setItem("githubProxyRadioControl", normalizedVal);
      if (String(this.radioValue) !== "1") {
        this.selectedGitHubProxy = "";
        return;
      }
      if (normalizedVal !== "-1") {
        this.selectedGitHubProxy = this.getProxyByControl(normalizedVal);
      }
    }
  }
};
const _hoisted_1 = {
  key: 0,
  style: { "margin-left": "16px" }
};
const _hoisted_2 = { class: "d-flex align-center" };
const _hoisted_3 = { class: "mr-2" };
const _hoisted_4 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("h5", null, toDisplayString($setup.tm("network.proxySelector.title")), 1),
    createVNode(VRadioGroup, {
      class: "mt-2",
      modelValue: $data.radioValue,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.radioValue = $event),
      "hide-details": "true"
    }, {
      default: withCtx(() => [
        createVNode(VRadio, {
          label: $setup.tm("network.proxySelector.noProxy"),
          value: "0"
        }, null, 8, ["label"]),
        createVNode(VRadio, { value: "1" }, {
          label: withCtx(() => [
            createBaseVNode("span", null, toDisplayString($setup.tm("network.proxySelector.useProxy")), 1),
            $data.radioValue === "1" ? (openBlock(), createBlock(VBtn, {
              key: 0,
              class: "ml-2",
              onClick: $options.testAllProxies,
              size: "x-small",
              variant: "tonal",
              loading: $data.loadingTestingConnection
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($setup.tm("network.proxySelector.testConnection")), 1)
              ]),
              _: 1
            }, 8, ["onClick", "loading"])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(VExpandTransition, null, {
      default: withCtx(() => [
        $data.radioValue === "1" ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(VRadioGroup, {
            modelValue: $data.githubProxyRadioControl,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.githubProxyRadioControl = $event),
            class: "mt-2",
            "hide-details": "true"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.githubProxies, (proxy, idx) => {
                return openBlock(), createBlock(VRadio, {
                  color: "success",
                  key: proxy,
                  value: String(idx)
                }, {
                  label: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, [
                      createBaseVNode("span", _hoisted_3, toDisplayString(proxy), 1),
                      $data.proxyStatus[idx] ? (openBlock(), createElementBlock("div", _hoisted_4, [
                        createVNode(VChip, {
                          color: $data.proxyStatus[idx].available ? "success" : "error",
                          size: "x-small",
                          class: "mr-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($data.proxyStatus[idx].available ? $setup.tm("network.proxySelector.available") : $setup.tm("network.proxySelector.unavailable")), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"]),
                        $data.proxyStatus[idx].available ? (openBlock(), createBlock(VChip, {
                          key: 0,
                          color: "info",
                          size: "x-small"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($data.proxyStatus[idx].latency) + "ms ", 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128)),
              createVNode(VRadio, {
                color: "primary",
                value: "-1",
                label: $setup.tm("network.proxySelector.custom")
              }, createSlots({ _: 2 }, [
                String($data.githubProxyRadioControl) === "-1" ? {
                  name: "label",
                  fn: withCtx(() => [
                    createVNode(VTextField, {
                      density: "compact",
                      modelValue: $data.selectedGitHubProxy,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.selectedGitHubProxy = $event),
                      variant: "outlined",
                      style: { "width": "100vw" },
                      placeholder: $setup.tm("network.proxySelector.custom"),
                      "hide-details": "true"
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["label"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    })
  ], 64);
}
const ProxySelector = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  ProxySelector as P
};
