import { _ as _export_sfc, H as computed, h as createBlock, w as withCtx, b as createVNode, a as createBaseVNode, s as VCard, ai as VDialog, o as openBlock, D as defineComponent, u as useModuleI18n, a5 as useI18n, L as ref, M as onMounted, J as watch, c as createElementBlock, ao as VContainer, B as axios, ab as VRow, ad as VCol, t as toDisplayString, $ as unref, a_ as VTimeline, a$ as VTimelineItem, e as VBtn, d as createTextVNode, i as createCommentVNode, f as VSelect, l as VIcon, a6 as VCardTitle, v as VCardText, a9 as VCardActions, V as VSpacer, ap as pushScopeId, aq as popScopeId } from "./index-BXuR6cgv.js";
import ProviderChatCompletionPanel from "./ProviderChatCompletionPanel-CU2lv3zH.js";
import { u as useToast } from "./TemplateListEditor-CIYzKHuo.js";
import "./AstrBotConfig-pBiDtOXb.js";
import "./index-vSHJWpH5.js";
import "./useProviderSources-CCuuB4SC.js";
import "./inputValue-BqQtgRan.js";
import "./StyledMenu.vue_vue_type_style_index_0_lang-2DD6mXzT.js";
import "./confirmDialog-CkMgMXQP.js";
import "./PersonaForm-C8yvoH1l.js";
const _hoisted_1$1 = { class: "provider-config-dialog__body" };
const _sfc_main$1 = {
  __name: "ProviderConfigDialog",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const dialog = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VDialog, {
        modelValue: dialog.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialog.value = $event),
        "max-width": "1600"
      }, {
        default: withCtx(() => [
          createVNode(VCard, { class: "provider-config-dialog" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, [
                createVNode(ProviderChatCompletionPanel, {
                  class: "provider-config-dialog__page",
                  "show-border": false
                })
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
};
const ProviderConfigDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f395a84b"]]);
const _withScopeId = (n) => (pushScopeId("data-v-6b0f0266"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "welcome-page" };
const _hoisted_2 = { class: "text-h1 font-weight-bold mb-2 d-flex align-center" };
const _hoisted_3 = { class: "text-subtitle-1 text-medium-emphasis mb-0" };
const _hoisted_4 = { class: "mb-4 text-h3 font-weight-bold" };
const _hoisted_5 = { class: "pl-2" };
const _hoisted_6 = { class: "text-h6 font-weight-bold mb-1" };
const _hoisted_7 = { class: "text-body-2 text-medium-emphasis mb-3" };
const _hoisted_8 = { class: "d-flex align-center" };
const _hoisted_9 = {
  key: 0,
  class: "text-success d-flex align-center text-body-2 font-weight-medium ml-3"
};
const _hoisted_10 = { class: "pl-2" };
const _hoisted_11 = { class: "d-flex align-center mb-1" };
const _hoisted_12 = { class: "text-h6 font-weight-bold" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-body-2 font-weight-bold" }, "?", -1));
const _hoisted_14 = { class: "text-body-2 text-medium-emphasis mb-3" };
const _hoisted_15 = { class: "d-flex flex-wrap align-center ga-3" };
const _hoisted_16 = { class: "mb-4 text-h3 font-weight-bold" };
const _hoisted_17 = { class: "d-flex align-center mb-3" };
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-h6 font-weight-bold" }, "GitHub", -1));
const _hoisted_19 = { class: "text-body-2 text-medium-emphasis mb-0" };
const _hoisted_20 = { class: "d-flex align-center mb-3" };
const _hoisted_21 = { class: "text-h6 font-weight-bold" };
const _hoisted_22 = { class: "text-body-2 text-medium-emphasis mb-0" };
const _hoisted_23 = { class: "computer-access-help-list" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WelcomePage",
  setup(__props) {
    const { tm } = useModuleI18n("features/welcome");
    useI18n();
    const { success: showSuccess, error: showError } = useToast();
    const showProviderDialog = ref(false);
    const showComputerAccessHelpDialog = ref(false);
    const providerCountBeforeOpen = ref(0);
    const providerStepState = ref("pending");
    const computerAccessStepState = ref("pending");
    const computerAccessRuntime = ref("none");
    const savedComputerAccessRuntime = ref("none");
    const savingComputerAccess = ref(false);
    const springFestivalDates = {
      2025: "01-29",
      2026: "02-17",
      2027: "02-06",
      2028: "01-26",
      2029: "02-13",
      2030: "02-03"
    };
    function isSpringFestival() {
      const now = /* @__PURE__ */ new Date();
      const year = now.getFullYear();
      const dateStr = springFestivalDates[year];
      if (!dateStr) return false;
      const [month, day] = dateStr.split("-").map(Number);
      const festivalDate = new Date(year, month - 1, day);
      const start = new Date(festivalDate);
      start.setDate(festivalDate.getDate() - 5);
      const end = new Date(festivalDate);
      end.setDate(festivalDate.getDate() + 5);
      const nowTime = now.setHours(0, 0, 0, 0);
      const startTime = start.setHours(0, 0, 0, 0);
      const endTime = end.setHours(0, 0, 0, 0);
      return nowTime >= startTime && nowTime <= endTime;
    }
    function isExactSpringFestivalDay() {
      const now = /* @__PURE__ */ new Date();
      const year = now.getFullYear();
      const dateStr = springFestivalDates[year];
      if (!dateStr) return false;
      const [month, day] = dateStr.split("-").map(Number);
      const festivalDate = new Date(year, month - 1, day);
      const nowTime = new Date(now).setHours(0, 0, 0, 0);
      const festivalTime = festivalDate.setHours(0, 0, 0, 0);
      return nowTime === festivalTime;
    }
    const greetingEmoji = computed(() => {
      if (isExactSpringFestivalDay()) {
        return "🧨";
      }
      const hour = (/* @__PURE__ */ new Date()).getHours();
      if (hour >= 0 && hour < 5) {
        return "😴";
      }
      return "😊";
    });
    const greetingText = computed(() => {
      if (isSpringFestival()) {
        return tm("greeting.newYear");
      }
      const hour = (/* @__PURE__ */ new Date()).getHours();
      if (hour < 12) return tm("greeting.morning");
      if (hour < 18) return tm("greeting.afternoon");
      return tm("greeting.evening");
    });
    async function fetchDefaultConfig() {
      var _a, _b;
      const res = await axios.get("/api/config/abconf", { params: { id: "default" } });
      return ((_b = (_a = res.data) == null ? void 0 : _a.data) == null ? void 0 : _b.config) || {};
    }
    function getChatProvidersFromTemplatePayload(payload) {
      const providers = (payload == null ? void 0 : payload.providers) || [];
      const sources = (payload == null ? void 0 : payload.provider_sources) || [];
      const sourceMap = /* @__PURE__ */ new Map();
      sources.forEach((s) => sourceMap.set(s.id, s.provider_type));
      return providers.filter((provider) => {
        if (provider.provider_type) {
          return provider.provider_type === "chat_completion";
        }
        if (provider.provider_source_id) {
          const type = sourceMap.get(provider.provider_source_id);
          if (type === "chat_completion") return true;
        }
        return String(provider.type || "").includes("chat_completion");
      });
    }
    async function fetchChatProviders() {
      const response = await axios.get("/api/config/provider/template");
      if (response.data.status !== "ok") {
        throw new Error(response.data.message || tm("onboard.providerLoadFailed"));
      }
      return getChatProvidersFromTemplatePayload(response.data.data);
    }
    function pickDefaultProviderId(providers) {
      if (!providers.length) return "";
      const enabledProvider = providers.find((provider) => provider.enable !== false);
      return (enabledProvider || providers[0]).id || "";
    }
    async function syncDefaultConfigProviderIfNeeded() {
      const providers = await fetchChatProviders();
      if (!providers.length) return;
      const targetProviderId = pickDefaultProviderId(providers);
      if (!targetProviderId) return;
      const configData = await fetchDefaultConfig();
      if (!configData.provider_settings) {
        configData.provider_settings = {};
      }
      if (configData.provider_settings.default_provider_id === targetProviderId) return;
      configData.provider_settings.default_provider_id = targetProviderId;
      const updateRes = await axios.post("/api/config/astrbot/update", {
        conf_id: "default",
        config: configData
      });
      if (updateRes.data.status !== "ok") {
        throw new Error(updateRes.data.message || tm("onboard.providerUpdateFailed"));
      }
      showSuccess(tm("onboard.providerDefaultUpdated", { id: targetProviderId }));
    }
    function normalizeComputerAccessRuntime(runtime) {
      return runtime === "local" || runtime === "sandbox" ? "local" : "none";
    }
    function syncComputerAccessRuntime(configData) {
      const providerSettings = (configData == null ? void 0 : configData.provider_settings) || {};
      const currentRuntime = providerSettings == null ? void 0 : providerSettings.computer_use_runtime;
      const normalizedRuntime = normalizeComputerAccessRuntime(currentRuntime);
      computerAccessRuntime.value = normalizedRuntime;
      savedComputerAccessRuntime.value = normalizedRuntime;
      computerAccessStepState.value = currentRuntime === "local" || currentRuntime === "none" || currentRuntime === "sandbox" ? "completed" : "pending";
    }
    const computerAccessOptions = computed(() => [
      { title: tm("onboard.step3Allow"), value: "local" },
      { title: tm("onboard.step3Deny"), value: "none" }
    ]);
    async function saveComputerAccessRuntime() {
      var _a, _b;
      savingComputerAccess.value = true;
      try {
        const configData = await fetchDefaultConfig();
        if (!configData.provider_settings) {
          configData.provider_settings = {};
        }
        configData.provider_settings.computer_use_runtime = computerAccessRuntime.value;
        const updateRes = await axios.post("/api/config/astrbot/update", {
          conf_id: "default",
          config: configData
        });
        if (updateRes.data.status !== "ok") {
          throw new Error(updateRes.data.message || tm("onboard.computerAccessUpdateFailed"));
        }
        savedComputerAccessRuntime.value = computerAccessRuntime.value;
        computerAccessStepState.value = "completed";
        showSuccess(
          tm(
            computerAccessRuntime.value === "local" ? "onboard.computerAccessAllowed" : "onboard.computerAccessDenied"
          )
        );
      } catch (err) {
        showError(((_b = (_a = err == null ? void 0 : err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || (err == null ? void 0 : err.message) || tm("onboard.computerAccessUpdateFailed"));
      } finally {
        savingComputerAccess.value = false;
      }
    }
    onMounted(async () => {
      try {
        const providers = await fetchChatProviders();
        if (providers.length > 0) {
          providerStepState.value = "completed";
        }
      } catch (e) {
        console.error(e);
      }
      try {
        const defaultConfig = await fetchDefaultConfig();
        syncComputerAccessRuntime(defaultConfig);
      } catch (e) {
        console.error(e);
      }
    });
    async function openProviderDialog() {
      var _a, _b;
      try {
        const providers = await fetchChatProviders();
        providerCountBeforeOpen.value = providers.length;
        showProviderDialog.value = true;
      } catch (err) {
        showError(((_b = (_a = err == null ? void 0 : err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || (err == null ? void 0 : err.message) || tm("onboard.providerLoadFailed"));
      }
    }
    watch(showProviderDialog, async (visible, wasVisible) => {
      var _a, _b;
      if (!wasVisible || visible) return;
      try {
        const providers = await fetchChatProviders();
        if (providers.length > providerCountBeforeOpen.value) {
          providerStepState.value = "completed";
          await syncDefaultConfigProviderIfNeeded();
        }
      } catch (err) {
        showError(((_b = (_a = err == null ? void 0 : err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || (err == null ? void 0 : err.message) || tm("onboard.providerUpdateFailed"));
      }
    });
    watch(computerAccessRuntime, async (value, oldValue) => {
      if (value === oldValue) return;
      if (value === savedComputerAccessRuntime.value) return;
      if (savingComputerAccess.value) return;
      try {
        await saveComputerAccessRuntime();
      } catch {
        computerAccessRuntime.value = savedComputerAccessRuntime.value;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(VContainer, {
          fluid: "",
          class: "pa-0"
        }, {
          default: withCtx(() => [
            createVNode(VRow, { class: "px-4 py-3 pb-6" }, {
              default: withCtx(() => [
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createBaseVNode("h1", _hoisted_2, toDisplayString(greetingText.value) + " " + toDisplayString(greetingEmoji.value), 1),
                    createBaseVNode("p", _hoisted_3, toDisplayString(unref(tm)("subtitle")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(VRow, { class: "px-4" }, {
              default: withCtx(() => [
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      class: "welcome-card pa-6",
                      elevation: "0",
                      border: ""
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_4, toDisplayString(unref(tm)("onboard.title")), 1),
                        createVNode(VTimeline, {
                          align: "start",
                          side: "end",
                          density: "compact",
                          class: "welcome-timeline",
                          "truncate-line": "both"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTimelineItem, {
                              "dot-color": providerStepState.value === "completed" ? "success" : "primary",
                              icon: "mdi-numeric-1",
                              "fill-dot": "",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_5, [
                                  createBaseVNode("div", _hoisted_6, toDisplayString(unref(tm)("onboard.step1Title")), 1),
                                  createBaseVNode("p", _hoisted_7, toDisplayString(unref(tm)("onboard.step1Desc")), 1),
                                  createBaseVNode("div", _hoisted_8, [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      variant: "flat",
                                      rounded: "pill",
                                      class: "px-6",
                                      onClick: openProviderDialog
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(tm)("onboard.configure")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    providerStepState.value === "completed" ? (openBlock(), createElementBlock("div", _hoisted_9, toDisplayString(unref(tm)("onboard.completed")), 1)) : createCommentVNode("", true)
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["dot-color"]),
                            createVNode(VTimelineItem, {
                              "dot-color": computerAccessStepState.value === "completed" ? "success" : "primary",
                              icon: "mdi-numeric-2",
                              "fill-dot": "",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_10, [
                                  createBaseVNode("div", _hoisted_11, [
                                    createBaseVNode("div", _hoisted_12, toDisplayString(unref(tm)("onboard.step3Title")), 1),
                                    createVNode(VBtn, {
                                      icon: "",
                                      variant: "text",
                                      density: "comfortable",
                                      size: "small",
                                      class: "ml-1",
                                      onClick: _cache[0] || (_cache[0] = ($event) => showComputerAccessHelpDialog.value = true)
                                    }, {
                                      default: withCtx(() => [
                                        _hoisted_13
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createBaseVNode("p", _hoisted_14, toDisplayString(unref(tm)("onboard.step3Desc")), 1),
                                  createBaseVNode("div", _hoisted_15, [
                                    createVNode(VSelect, {
                                      modelValue: computerAccessRuntime.value,
                                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => computerAccessRuntime.value = $event),
                                      items: computerAccessOptions.value,
                                      "item-title": "title",
                                      "item-value": "value",
                                      label: unref(tm)("onboard.step3SelectLabel"),
                                      loading: savingComputerAccess.value,
                                      disabled: savingComputerAccess.value,
                                      "hide-details": "",
                                      density: "comfortable",
                                      variant: "outlined",
                                      class: "computer-access-select"
                                    }, null, 8, ["modelValue", "items", "label", "loading", "disabled"])
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["dot-color"])
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
            }),
            createVNode(VRow, { class: "px-4 mt-4" }, {
              default: withCtx(() => [
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      class: "welcome-card pa-6",
                      elevation: "0",
                      border: ""
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_16, toDisplayString(unref(tm)("resources.title")), 1),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  variant: "outlined",
                                  class: "h-100 pa-4 d-flex flex-column",
                                  href: "https://github.com/hatsune-musubi-miku/miku_ai",
                                  target: "_blank"
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_17, [
                                      createVNode(VIcon, {
                                        size: "32",
                                        class: "mr-3"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-github")
                                        ]),
                                        _: 1
                                      }),
                                      _hoisted_18
                                    ]),
                                    createBaseVNode("p", _hoisted_19, toDisplayString(unref(tm)("resources.githubDesc")), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  variant: "outlined",
                                  class: "h-100 pa-4 d-flex flex-column",
                                  to: "/help"
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_20, [
                                      createVNode(VIcon, {
                                        size: "32",
                                        class: "mr-3"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-book-open-variant")
                                        ]),
                                        _: 1
                                      }),
                                      createBaseVNode("span", _hoisted_21, toDisplayString(unref(tm)("resources.docsTitle")), 1)
                                    ]),
                                    createBaseVNode("p", _hoisted_22, toDisplayString(unref(tm)("resources.docsDesc")), 1)
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
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(ProviderConfigDialog, {
          modelValue: showProviderDialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => showProviderDialog.value = $event)
        }, null, 8, ["modelValue"]),
        createVNode(VDialog, {
          modelValue: showComputerAccessHelpDialog.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => showComputerAccessHelpDialog.value = $event),
          "max-width": "640"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "text-h3 font-weight-bold pa-4" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(tm)("onboard.step3HelpTitle")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createBaseVNode("ol", _hoisted_23, [
                      createBaseVNode("li", null, toDisplayString(unref(tm)("onboard.step3HelpItem1")), 1),
                      createBaseVNode("li", null, toDisplayString(unref(tm)("onboard.step3HelpItem2")), 1),
                      createBaseVNode("li", null, toDisplayString(unref(tm)("onboard.step3HelpItem3")), 1)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, { class: "px-6 pb-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      color: "primary",
                      variant: "text",
                      onClick: _cache[3] || (_cache[3] = ($event) => showComputerAccessHelpDialog.value = false)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(tm)("onboard.step3HelpClose")), 1)
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
    };
  }
});
const WelcomePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6b0f0266"]]);
export {
  WelcomePage as default
};
