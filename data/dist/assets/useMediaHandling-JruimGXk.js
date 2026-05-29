import { D as defineComponent, u as useModuleI18n, L as ref, H as computed, J as watch, M as onMounted, c as createElementBlock, b as createVNode, ag as VListItem, w as withCtx, ah as VListItemTitle, d as createTextVNode, t as toDisplayString, $ as unref, aB as VListItemSubtitle, l as VIcon, ai as VDialog, s as VCard, a6 as VCardTitle, e as VBtn, v as VCardText, aj as VProgressCircular, h as createBlock, F as Fragment, r as renderList, i as createCommentVNode, af as VList, a9 as VCardActions, V as VSpacer, B as axios, o as openBlock, ap as pushScopeId, aq as popScopeId, a as createBaseVNode, _ as _export_sfc, ae as VMenu, j as VTextField, a7 as VTooltip, a2 as mergeProps, g as VChip, bm as useDisplay, R as onBeforeUnmount, a0 as withModifiers, T as normalizeClass, U as normalizeStyle, X as Transition, S as withDirectives, bn as vModelText, N as nextTick } from "./index-sVuaKD1b.js";
import { u as useCustomizerStore } from "./customizer-Cwj1g2HR.js";
import { u as useToast } from "./TemplateListEditor-B70spLPD.js";
import { _ as _sfc_main$3 } from "./StyledMenu.vue_vue_type_style_index_0_lang--2fIsi1a.js";
const RECENT_COMPOSITION_END_THRESHOLD_MS = 100;
function isComposingEnter(event, compositionActive, lastCompositionEndAt = null) {
  const hasLegacyCompositionKeyCode = typeof event.keyCode === "number" && event.keyCode === 229;
  const isAfterRecentCompositionEnd = typeof event.timeStamp === "number" && typeof lastCompositionEndAt === "number" && event.timeStamp >= lastCompositionEndAt && event.timeStamp - lastCompositionEndAt < RECENT_COMPOSITION_END_THRESHOLD_MS;
  return event.key === "Enter" && (compositionActive || event.isComposing || hasLegacyCompositionKeyCode || isAfterRecentCompositionEnd);
}
const CHAT_SELECTED_CONFIG_STORAGE_KEY = "chat.selectedConfigId";
function getFromLocalStorage(key, fallback) {
  try {
    if (typeof localStorage === "undefined") {
      return fallback;
    }
    const value = localStorage.getItem(key);
    return value == null ? fallback : value;
  } catch {
    return fallback;
  }
}
function setToLocalStorage(key, value) {
  try {
    if (typeof localStorage === "undefined") {
      return;
    }
    localStorage.setItem(key, value);
  } catch {
  }
}
function getStoredDashboardUsername() {
  return getFromLocalStorage("user", "").trim() || "guest";
}
function getStoredSelectedChatConfigId() {
  return getFromLocalStorage(CHAT_SELECTED_CONFIG_STORAGE_KEY, "").trim() || "default";
}
function setStoredSelectedChatConfigId(configId) {
  setToLocalStorage(CHAT_SELECTED_CONFIG_STORAGE_KEY, configId);
}
function buildWebchatUmoDetails(sessionId, isGroup = false) {
  const platformId = "webchat";
  const username = getStoredDashboardUsername();
  const messageType = isGroup ? "GroupMessage" : "FriendMessage";
  const sessionKey = `${platformId}!${username}!${sessionId}`;
  return {
    platformId,
    messageType,
    username,
    sessionKey,
    umo: `${platformId}:${messageType}:${sessionKey}`
  };
}
const _withScopeId = (n) => (pushScopeId("data-v-df4cbbeb"), n = n(), popScopeId(), n);
const _hoisted_1$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "选择配置文件", -1));
const _hoisted_2$2 = {
  key: 0,
  class: "text-center py-6"
};
const _hoisted_3$2 = {
  key: 0,
  class: "text-center text-body-2 text-medium-emphasis"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ConfigSelector",
  props: {
    sessionId: { default: null },
    platformId: { default: "webchat" },
    isGroup: { type: Boolean, default: false },
    initialConfigId: { default: null }
  },
  emits: ["config-changed"],
  setup(__props, { emit }) {
    const props = __props;
    const { tm } = useModuleI18n("features/chat");
    const configOptions = ref([]);
    const loadingConfigs = ref(false);
    const dialog = ref(false);
    const tempSelectedConfig = ref("");
    const selectedConfigId = ref("default");
    const agentRunnerType = ref("local");
    const saving = ref(false);
    const pendingSync = ref(false);
    const routingEntries = ref([]);
    ref({});
    const toast = useToast();
    const normalizedSessionId = computed(() => {
      var _a;
      const id = (_a = props.sessionId) == null ? void 0 : _a.trim();
      return id ? id : null;
    });
    computed(() => !!normalizedSessionId.value);
    const messageType = computed(() => props.isGroup ? "GroupMessage" : "FriendMessage");
    const username = computed(() => getStoredDashboardUsername());
    const sessionKey = computed(() => {
      if (!normalizedSessionId.value) {
        return null;
      }
      return `${props.platformId}!${username.value}!${normalizedSessionId.value}`;
    });
    const targetUmo = computed(() => {
      if (!sessionKey.value) {
        return null;
      }
      return `${props.platformId}:${messageType.value}:${sessionKey.value}`;
    });
    const selectedConfigLabel = computed(() => {
      const target = configOptions.value.find((item) => item.id === selectedConfigId.value);
      return (target == null ? void 0 : target.name) || selectedConfigId.value || "default";
    });
    function openDialog() {
      tempSelectedConfig.value = selectedConfigId.value;
      dialog.value = true;
    }
    function closeDialog() {
      dialog.value = false;
    }
    async function fetchConfigList() {
      var _a;
      loadingConfigs.value = true;
      try {
        const res = await axios.get("/api/config/abconfs");
        configOptions.value = ((_a = res.data.data) == null ? void 0 : _a.info_list) || [];
      } catch (error) {
        console.error("加载配置文件列表失败", error);
        configOptions.value = [];
      } finally {
        loadingConfigs.value = false;
      }
    }
    async function fetchRoutingEntries() {
      var _a;
      try {
        const res = await axios.get("/api/config/umo_abconf_routes");
        const routing = ((_a = res.data.data) == null ? void 0 : _a.routing) || {};
        routingEntries.value = Object.entries(routing).map(([pattern, confId]) => ({
          pattern,
          confId
        }));
      } catch (error) {
        console.error("获取配置路由失败", error);
        routingEntries.value = [];
      }
    }
    function matchesPattern(pattern, target) {
      const parts = pattern.split(":");
      const targetParts = target.split(":");
      if (parts.length !== 3 || targetParts.length !== 3) {
        return false;
      }
      return parts.every((part, index) => part === "" || part === "*" || part === targetParts[index]);
    }
    function resolveConfigId(umo) {
      if (!umo) {
        return "default";
      }
      for (const entry of routingEntries.value) {
        if (matchesPattern(entry.pattern, umo)) {
          return entry.confId;
        }
      }
      return "default";
    }
    async function getAgentRunnerType(confId) {
      return "local";
    }
    async function setSelection(confId) {
      const normalized = confId || "default";
      selectedConfigId.value = normalized;
      const runnerType = await getAgentRunnerType();
      agentRunnerType.value = runnerType;
      emit("config-changed", {
        configId: normalized,
        agentRunnerType: runnerType
      });
    }
    async function applySelectionToBackend(confId) {
      var _a, _b;
      if (!targetUmo.value) {
        pendingSync.value = true;
        return true;
      }
      saving.value = true;
      try {
        await axios.post("/api/config/umo_abconf_route/update", {
          umo: targetUmo.value,
          conf_id: confId
        });
        const filtered = routingEntries.value.filter((entry) => entry.pattern !== targetUmo.value);
        filtered.push({ pattern: targetUmo.value, confId });
        routingEntries.value = filtered;
        return true;
      } catch (error) {
        const err = error;
        console.error("更新配置文件失败", err);
        toast.error(((_b = (_a = err == null ? void 0 : err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "配置文件应用失败");
        return false;
      } finally {
        saving.value = false;
      }
    }
    async function confirmSelection() {
      if (!tempSelectedConfig.value) {
        return;
      }
      const previousId = selectedConfigId.value;
      await setSelection(tempSelectedConfig.value);
      setStoredSelectedChatConfigId(tempSelectedConfig.value);
      const applied = await applySelectionToBackend(tempSelectedConfig.value);
      if (!applied) {
        setStoredSelectedChatConfigId(previousId);
        await setSelection(previousId);
      }
      dialog.value = false;
    }
    async function syncSelectionForSession() {
      if (!targetUmo.value) {
        pendingSync.value = true;
        return;
      }
      if (pendingSync.value) {
        pendingSync.value = false;
        await applySelectionToBackend(selectedConfigId.value);
        return;
      }
      await fetchRoutingEntries();
      const resolved = resolveConfigId(targetUmo.value);
      await setSelection(resolved);
      setStoredSelectedChatConfigId(resolved);
    }
    watch(
      () => [props.sessionId, props.platformId, props.isGroup],
      async () => {
        await syncSelectionForSession();
      }
    );
    onMounted(async () => {
      await fetchConfigList();
      const stored = props.initialConfigId || getStoredSelectedChatConfigId();
      selectedConfigId.value = stored;
      await setSelection(stored);
      await syncSelectionForSession();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(VListItem, {
          class: "styled-menu-item",
          rounded: "md",
          onClick: openDialog,
          disabled: loadingConfigs.value || saving.value
        }, {
          prepend: withCtx(() => [
            createVNode(VIcon, {
              icon: "mdi-cog-outline",
              size: "small"
            })
          ]),
          append: withCtx(() => [
            createVNode(VIcon, {
              icon: "mdi-chevron-right",
              size: "small",
              class: "text-medium-emphasis"
            })
          ]),
          default: withCtx(() => [
            createVNode(VListItemTitle, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(tm)("config.title")), 1)
              ]),
              _: 1
            }),
            createVNode(VListItemSubtitle, { class: "text-caption" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(selectedConfigLabel.value), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["disabled"]),
        createVNode(VDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialog.value = $event),
          "max-width": "480"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "d-flex align-center justify-space-between" }, {
                  default: withCtx(() => [
                    _hoisted_1$2,
                    createVNode(VBtn, {
                      icon: "",
                      variant: "text",
                      onClick: closeDialog
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-close")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    loadingConfigs.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
                      createVNode(VProgressCircular, {
                        indeterminate: "",
                        color: "primary"
                      })
                    ])) : (openBlock(), createBlock(VList, {
                      key: 1,
                      class: "config-list",
                      density: "comfortable"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(configOptions.value, (config) => {
                          return openBlock(), createBlock(VListItem, {
                            key: config.id,
                            active: tempSelectedConfig.value === config.id,
                            rounded: "lg",
                            variant: "text",
                            onClick: ($event) => tempSelectedConfig.value = config.id
                          }, {
                            append: withCtx(() => [
                              tempSelectedConfig.value === config.id ? (openBlock(), createBlock(VIcon, {
                                key: 0,
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-check")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(config.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, { class: "text-caption text-grey" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(config.id), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["active", "onClick"]);
                        }), 128)),
                        configOptions.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_3$2, " 暂无可选配置，请先在配置页创建。 ")) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }))
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, null, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: closeDialog
                    }, {
                      default: withCtx(() => [
                        createTextVNode("取消")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      onClick: confirmSelection,
                      disabled: !tempSelectedConfig.value,
                      loading: saving.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 应用 ")
                      ]),
                      _: 1
                    }, 8, ["disabled", "loading"])
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
const ConfigSelector = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-df4cbbeb"]]);
const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = { key: 1 };
const _hoisted_3$1 = { class: "model-name" };
const _hoisted_4$1 = { class: "meta-icons" };
const _hoisted_5$1 = {
  key: 0,
  class: "empty-hint"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProviderModelMenu",
  setup(__props, { expose: __expose }) {
    const providerConfigs = ref([]);
    const selectedProviderId = ref("");
    const searchQuery = ref("");
    const menuOpen = ref(false);
    const filteredProviders = computed(() => {
      if (!searchQuery.value) {
        return providerConfigs.value;
      }
      const query = searchQuery.value.toLowerCase();
      return providerConfigs.value.filter(
        (p) => p.id.toLowerCase().includes(query) || p.model.toLowerCase().includes(query)
      );
    });
    function loadFromStorage() {
      const savedProvider = localStorage.getItem("selectedProvider");
      if (savedProvider) {
        selectedProviderId.value = savedProvider;
      }
    }
    function saveToStorage() {
      if (selectedProviderId.value) {
        localStorage.setItem("selectedProvider", selectedProviderId.value);
      }
    }
    function loadProviderConfigs() {
      axios.get("/api/config/provider/list", {
        params: { provider_type: "chat_completion" }
      }).then((response) => {
        if (response.data.status === "ok") {
          providerConfigs.value = (response.data.data || []).filter(
            (p) => p.enable !== false
          );
        }
      }).catch((error) => {
        console.error("获取提供商列表失败:", error);
      });
    }
    function selectProvider(provider) {
      selectedProviderId.value = provider.id;
      saveToStorage();
    }
    function supportsImageInput(provider) {
      var _a, _b;
      const inputs = ((_b = (_a = provider.model_metadata) == null ? void 0 : _a.modalities) == null ? void 0 : _b.input) || [];
      return inputs.includes("image");
    }
    function supportsAudioInput(provider) {
      var _a, _b;
      const inputs = ((_b = (_a = provider.model_metadata) == null ? void 0 : _a.modalities) == null ? void 0 : _b.input) || [];
      return inputs.includes("audio");
    }
    function supportsToolCall(provider) {
      var _a;
      return Boolean((_a = provider.model_metadata) == null ? void 0 : _a.tool_call);
    }
    function supportsReasoning(provider) {
      var _a;
      return Boolean((_a = provider.model_metadata) == null ? void 0 : _a.reasoning);
    }
    function getCurrentSelection() {
      const provider = providerConfigs.value.find((p) => p.id === selectedProviderId.value);
      return {
        providerId: selectedProviderId.value,
        modelName: (provider == null ? void 0 : provider.model) || ""
      };
    }
    function handleMenuToggle(isOpen) {
      if (isOpen) {
        loadProviderConfigs();
      }
    }
    onMounted(() => {
      loadFromStorage();
      loadProviderConfigs();
    });
    __expose({
      getCurrentSelection
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VMenu, {
        modelValue: menuOpen.value,
        "onUpdate:modelValue": [
          _cache[1] || (_cache[1] = ($event) => menuOpen.value = $event),
          handleMenuToggle
        ],
        "close-on-content-click": false,
        location: "top"
      }, {
        activator: withCtx(({ props: menuProps }) => [
          createVNode(VChip, mergeProps(menuProps, {
            class: "text-none provider-chip",
            variant: "outlined",
            size: "small"
          }), {
            default: withCtx(() => [
              createVNode(VIcon, {
                start: "",
                size: "14"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-creation")
                ]),
                _: 1
              }),
              selectedProviderId.value ? (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(selectedProviderId.value), 1)) : (openBlock(), createElementBlock("span", _hoisted_2$1, "Model"))
            ]),
            _: 2
          }, 1040)
        ]),
        default: withCtx(() => [
          createVNode(VCard, {
            class: "provider-menu-card",
            "min-width": "280",
            "max-width": "400"
          }, {
            default: withCtx(() => [
              createVNode(VCardText, { class: "pa-2" }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    modelValue: searchQuery.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                    placeholder: "Search...",
                    "hide-details": "",
                    variant: "plain",
                    flat: "",
                    density: "compact",
                    "prepend-inner-icon": "mdi-magnify",
                    class: "ml-2 mb-2 mr-2",
                    clearable: ""
                  }, null, 8, ["modelValue"]),
                  createVNode(VList, {
                    density: "compact",
                    nav: "",
                    class: "provider-menu-list"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(filteredProviders.value, (provider) => {
                        return openBlock(), createBlock(VListItem, {
                          key: provider.id,
                          active: selectedProviderId.value === provider.id,
                          onClick: ($event) => selectProvider(provider),
                          rounded: "lg",
                          class: "provider-menu-item"
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "text-body-2" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(provider.id), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, { class: "provider-subtitle" }, {
                              default: withCtx(() => [
                                createBaseVNode("span", _hoisted_3$1, toDisplayString(provider.model), 1),
                                createBaseVNode("span", _hoisted_4$1, [
                                  supportsImageInput(provider) ? (openBlock(), createBlock(VTooltip, {
                                    key: 0,
                                    text: "支持图像输入",
                                    location: "top"
                                  }, {
                                    activator: withCtx(({ props: tipProps }) => [
                                      createVNode(VIcon, mergeProps(tipProps, {
                                        size: "12",
                                        color: "grey"
                                      }), {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-eye-outline")
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  supportsAudioInput(provider) ? (openBlock(), createBlock(VTooltip, {
                                    key: 1,
                                    text: "支持音频输入",
                                    location: "top"
                                  }, {
                                    activator: withCtx(({ props: tipProps }) => [
                                      createVNode(VIcon, mergeProps(tipProps, {
                                        size: "12",
                                        color: "grey"
                                      }), {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-music-note-outline")
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  supportsToolCall(provider) ? (openBlock(), createBlock(VTooltip, {
                                    key: 2,
                                    text: "支持工具调用",
                                    location: "top"
                                  }, {
                                    activator: withCtx(({ props: tipProps }) => [
                                      createVNode(VIcon, mergeProps(tipProps, {
                                        size: "12",
                                        color: "grey"
                                      }), {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-wrench")
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  supportsReasoning(provider) ? (openBlock(), createBlock(VTooltip, {
                                    key: 3,
                                    text: "支持推理",
                                    location: "top"
                                  }, {
                                    activator: withCtx(({ props: tipProps }) => [
                                      createVNode(VIcon, mergeProps(tipProps, {
                                        size: "12",
                                        color: "grey"
                                      }), {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-brain")
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["active", "onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  providerConfigs.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_5$1, " No available models ")) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const ProviderModelMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cd1b6f45"]]);
const _hoisted_1 = ["onDragover", "onDragleave", "onDrop"];
const _hoisted_2 = {
  key: 0,
  class: "drop-overlay"
};
const _hoisted_3 = { class: "drop-overlay-content" };
const _hoisted_4 = { class: "drop-text" };
const _hoisted_5 = {
  key: 0,
  class: "reply-preview"
};
const _hoisted_6 = { class: "reply-content" };
const _hoisted_7 = { class: "reply-text" };
const _hoisted_8 = {
  key: 0,
  class: "attachments-preview"
};
const _hoisted_9 = ["src"];
const _hoisted_10 = {
  key: 0,
  class: "attachment-card audio-preview"
};
const _hoisted_11 = { class: "attachment-icon attachment-icon--audio" };
const _hoisted_12 = { class: "attachment-name" };
const _hoisted_13 = { class: "attachment-ext" };
const _hoisted_14 = { class: "attachment-name" };
const _hoisted_15 = ["disabled"];
const _hoisted_16 = { style: { "display": "flex", "justify-content": "space-between", "align-items": "center", "padding": "6px 14px" } };
const _hoisted_17 = { style: { "display": "flex", "justify-content": "flex-start", "margin-top": "4px", "align-items": "center", "gap": "8px", "min-width": "0", "flex": "1", "overflow": "hidden" } };
const _hoisted_18 = { style: { "display": "flex", "justify-content": "flex-end", "margin-top": "8px", "align-items": "center", "flex-shrink": "0" } };
const ctrlKeyLongPressThreshold = 300;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ChatInput",
  props: {
    prompt: {},
    stagedImagesUrl: {},
    stagedAudioUrl: {},
    stagedFiles: { default: () => [] },
    disabled: { type: Boolean },
    enableStreaming: { type: Boolean },
    isRecording: { type: Boolean },
    isRunning: { type: Boolean },
    sessionId: { default: null },
    currentSession: { default: null },
    configId: { default: null },
    replyTo: { default: null },
    sendShortcut: { default: "shift_enter" }
  },
  emits: ["update:prompt", "send", "stop", "toggleStreaming", "removeImage", "removeAudio", "removeFile", "startRecording", "stopRecording", "pasteImage", "fileSelect", "clearReply"],
  setup(__props, { expose: __expose, emit }) {
    const props = __props;
    const { tm } = useModuleI18n("features/chat");
    const isDark = computed(
      () => useCustomizerStore().uiTheme === "NormalTheme"
    );
    const inputField = ref(null);
    const imageInputRef = ref(null);
    const providerModelMenuRef = ref(
      null
    );
    const showProviderSelector = ref(true);
    const isReplyClosing = ref(false);
    const isDragging = ref(false);
    const isComposing = ref(false);
    const lastCompositionEndAt = ref(null);
    let dragLeaveTimeout = null;
    const localPrompt = computed({
      get: () => props.prompt,
      set: (value) => emit("update:prompt", value)
    });
    const sessionPlatformId = computed(
      () => {
        var _a;
        return ((_a = props.currentSession) == null ? void 0 : _a.platform_id) || "webchat";
      }
    );
    const sessionIsGroup = computed(() => {
      var _a;
      return Boolean((_a = props.currentSession) == null ? void 0 : _a.is_group);
    });
    const canSend = computed(() => {
      return props.prompt && props.prompt.trim() || props.stagedImagesUrl.length > 0 || props.stagedAudioUrl || props.stagedFiles && props.stagedFiles.length > 0;
    });
    const hasStagedAttachments = computed(() => {
      return props.stagedImagesUrl.length > 0 || props.stagedAudioUrl || props.stagedFiles && props.stagedFiles.length > 0;
    });
    const fileTypeStyles = {
      pdf: { color: "#d32f2f", icon: "mdi-file-pdf-box", label: "PDF" },
      txt: { color: "#1976d2", icon: "mdi-file-document-outline", label: "TXT" },
      md: { color: "#1976d2", icon: "mdi-language-markdown-outline", label: "MD" },
      markdown: {
        color: "#1976d2",
        icon: "mdi-language-markdown-outline",
        label: "MD"
      },
      doc: { color: "#2b579a", icon: "mdi-file-word-box", label: "DOC" },
      docx: { color: "#2b579a", icon: "mdi-file-word-box", label: "DOCX" },
      xls: { color: "#217346", icon: "mdi-file-excel-box", label: "XLS" },
      xlsx: { color: "#217346", icon: "mdi-file-excel-box", label: "XLSX" },
      csv: { color: "#217346", icon: "mdi-file-delimited-outline", label: "CSV" },
      ppt: { color: "#d24726", icon: "mdi-file-powerpoint-box", label: "PPT" },
      pptx: { color: "#d24726", icon: "mdi-file-powerpoint-box", label: "PPTX" },
      zip: { color: "#7b5e00", icon: "mdi-folder-zip-outline", label: "ZIP" },
      rar: { color: "#7b5e00", icon: "mdi-folder-zip-outline", label: "RAR" },
      "7z": { color: "#7b5e00", icon: "mdi-folder-zip-outline", label: "7Z" },
      tar: { color: "#7b5e00", icon: "mdi-folder-zip-outline", label: "TAR" },
      gz: { color: "#7b5e00", icon: "mdi-folder-zip-outline", label: "GZ" },
      json: { color: "#6a1b9a", icon: "mdi-code-json", label: "JSON" },
      yaml: { color: "#6a1b9a", icon: "mdi-code-braces", label: "YAML" },
      yml: { color: "#6a1b9a", icon: "mdi-code-braces", label: "YML" },
      js: { color: "#b8860b", icon: "mdi-language-javascript", label: "JS" },
      ts: { color: "#3178c6", icon: "mdi-language-typescript", label: "TS" },
      html: { color: "#e34c26", icon: "mdi-language-html5", label: "HTML" },
      css: { color: "#264de4", icon: "mdi-language-css3", label: "CSS" },
      py: { color: "#3776ab", icon: "mdi-language-python", label: "PY" },
      java: { color: "#b07219", icon: "mdi-language-java", label: "JAVA" },
      mp3: { color: "#00897b", icon: "mdi-file-music-outline", label: "MP3" },
      wav: { color: "#00897b", icon: "mdi-file-music-outline", label: "WAV" },
      flac: { color: "#00897b", icon: "mdi-file-music-outline", label: "FLAC" },
      mp4: { color: "#5e35b1", icon: "mdi-file-video-outline", label: "MP4" },
      mov: { color: "#5e35b1", icon: "mdi-file-video-outline", label: "MOV" },
      webm: { color: "#5e35b1", icon: "mdi-file-video-outline", label: "WEBM" }
    };
    function fileExtension(file) {
      var _a;
      const name = file.original_name || file.filename || "";
      const extension = ((_a = name.split(".").pop()) == null ? void 0 : _a.toLowerCase()) || "";
      return extension === name.toLowerCase() ? "" : extension;
    }
    function filePresentation(file) {
      const extension = fileExtension(file);
      return fileTypeStyles[extension] || {
        color: "#607d8b",
        icon: "mdi-file-document-outline",
        label: extension ? extension.slice(0, 4).toUpperCase() : "FILE"
      };
    }
    const ctrlKeyDown = ref(false);
    const ctrlKeyTimer = ref(null);
    function handleClearReply() {
      isReplyClosing.value = true;
    }
    function handleReplyAfterLeave() {
      emit("clearReply");
      isReplyClosing.value = false;
    }
    const { mobile } = useDisplay();
    function autoResize() {
      const el = inputField.value;
      if (!el) return;
      el.style.height = "auto";
      el.style.height = Math.min(el.scrollHeight, 200) + "px";
    }
    watch(localPrompt, () => {
      nextTick(autoResize);
    });
    function handleKeyDown(e) {
      const isEnter = e.key === "Enter";
      if (!isEnter) {
        if (e.ctrlKey && e.keyCode === 66) {
          e.preventDefault();
          if (ctrlKeyDown.value) return;
          ctrlKeyDown.value = true;
          ctrlKeyTimer.value = window.setTimeout(() => {
            if (ctrlKeyDown.value && !props.isRecording) {
              emit("startRecording");
            }
          }, ctrlKeyLongPressThreshold);
        }
        return;
      }
      if (isComposingEnter(e, isComposing.value, lastCompositionEndAt.value)) {
        return;
      }
      const isSendHotkey = e.ctrlKey || e.metaKey || (props.sendShortcut === "enter" ? !e.shiftKey : e.shiftKey);
      if (isSendHotkey) {
        e.preventDefault();
        if (canSend.value) {
          emit("send");
        }
        return;
      }
    }
    function handleCompositionStart() {
      isComposing.value = true;
      lastCompositionEndAt.value = null;
    }
    function handleCompositionEnd(e) {
      lastCompositionEndAt.value = e.timeStamp;
      clearCompositionState({ keepLastEndAt: true });
    }
    function clearCompositionState({ keepLastEndAt = false } = {}) {
      isComposing.value = false;
      if (!keepLastEndAt) {
        lastCompositionEndAt.value = null;
      }
    }
    function handleKeyUp(e) {
      if (e.keyCode === 66) {
        ctrlKeyDown.value = false;
        if (ctrlKeyTimer.value) {
          clearTimeout(ctrlKeyTimer.value);
          ctrlKeyTimer.value = null;
        }
        if (props.isRecording) {
          emit("stopRecording");
        }
      }
    }
    function handlePaste(e) {
      emit("pasteImage", e);
    }
    function handleDragOver(e) {
      var _a;
      if (dragLeaveTimeout) {
        clearTimeout(dragLeaveTimeout);
        dragLeaveTimeout = null;
      }
      if ((_a = e.dataTransfer) == null ? void 0 : _a.types.includes("Files")) {
        isDragging.value = true;
      }
    }
    function handleDragLeave(e) {
      dragLeaveTimeout = window.setTimeout(() => {
        isDragging.value = false;
      }, 50);
    }
    function handleDrop(e) {
      var _a;
      isDragging.value = false;
      const files = (_a = e.dataTransfer) == null ? void 0 : _a.files;
      if (files && files.length > 0) {
        emit("fileSelect", files);
      }
    }
    function triggerImageInput() {
      var _a;
      (_a = imageInputRef.value) == null ? void 0 : _a.click();
    }
    function handleFileSelect(event) {
      const target = event.target;
      const files = target.files;
      if (files) {
        emit("fileSelect", files);
      }
      target.value = "";
    }
    function handleRecordClick() {
      if (props.isRecording) {
        emit("stopRecording");
      } else {
        emit("startRecording");
      }
    }
    function handleConfigChange(payload) {
      const runnerType = (payload.agentRunnerType || "").toLowerCase();
      const isInternal = runnerType === "internal" || runnerType === "local";
      showProviderSelector.value = isInternal;
    }
    function getCurrentSelection() {
      var _a;
      if (!showProviderSelector.value) {
        return null;
      }
      return (_a = providerModelMenuRef.value) == null ? void 0 : _a.getCurrentSelection();
    }
    function focusInput() {
      if (!inputField.value) return;
      inputField.value.focus();
    }
    onMounted(() => {
      if (inputField.value) {
        inputField.value.addEventListener("paste", handlePaste);
      }
      document.addEventListener("keyup", handleKeyUp);
    });
    onBeforeUnmount(() => {
      if (inputField.value) {
        inputField.value.removeEventListener("paste", handlePaste);
      }
      clearCompositionState();
      document.removeEventListener("keyup", handleKeyUp);
    });
    __expose({
      getCurrentSelection,
      focusInput
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["input-area fade-in", { "is-dark": isDark.value }]),
        onDragover: withModifiers(handleDragOver, ["prevent"]),
        onDragleave: withModifiers(handleDragLeave, ["prevent"]),
        onDrop: withModifiers(handleDrop, ["prevent"])
      }, [
        createBaseVNode("div", {
          class: "input-container",
          style: normalizeStyle({
            width: "85%",
            maxWidth: "900px",
            margin: "0 auto",
            border: isDark.value ? "none" : "1px solid #e0e0e0",
            borderRadius: "24px",
            boxShadow: isDark.value ? "none" : "0px 2px 2px rgba(0, 0, 0, 0.1)",
            backgroundColor: isDark.value ? "#2d2d2d" : "transparent",
            position: "relative",
            transition: "min-height 0.2s ease, padding 0.2s ease"
          })
        }, [
          createVNode(Transition, { name: "fade" }, {
            default: withCtx(() => [
              isDragging.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createVNode(VIcon, {
                    size: "48",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-cloud-upload")
                    ]),
                    _: 1
                  }),
                  createBaseVNode("span", _hoisted_4, toDisplayString(unref(tm)("input.dropToUpload")), 1)
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(Transition, {
            name: "slideReply",
            onAfterLeave: handleReplyAfterLeave
          }, {
            default: withCtx(() => [
              props.replyTo && !isReplyClosing.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createVNode(VIcon, {
                    size: "small",
                    class: "reply-icon"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-reply")
                    ]),
                    _: 1
                  }),
                  createTextVNode(' "'),
                  createBaseVNode("span", _hoisted_7, toDisplayString(props.replyTo.selectedText), 1),
                  createTextVNode('" ')
                ]),
                createVNode(VBtn, {
                  onClick: handleClearReply,
                  class: "remove-reply-btn",
                  icon: "mdi-close",
                  size: "x-small",
                  color: "grey",
                  variant: "text"
                })
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(Transition, { name: "attachments" }, {
            default: withCtx(() => [
              hasStagedAttachments.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.stagedImagesUrl, (img, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: "img-" + index,
                    class: "attachment-card image-preview"
                  }, [
                    createBaseVNode("img", {
                      src: img,
                      class: "preview-image",
                      alt: "attachment preview"
                    }, null, 8, _hoisted_9),
                    createVNode(VBtn, {
                      onClick: ($event) => _ctx.$emit("removeImage", index),
                      class: "remove-attachment-btn",
                      icon: "mdi-close",
                      size: "x-small",
                      color: "error",
                      variant: "tonal"
                    }, null, 8, ["onClick"])
                  ]);
                }), 128)),
                _ctx.stagedAudioUrl ? (openBlock(), createElementBlock("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(VIcon, {
                      icon: "mdi-microphone",
                      size: "24"
                    })
                  ]),
                  createBaseVNode("span", _hoisted_12, toDisplayString(unref(tm)("voice.recording")), 1),
                  createVNode(VBtn, {
                    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("removeAudio")),
                    class: "remove-attachment-btn",
                    icon: "mdi-close",
                    size: "x-small",
                    color: "error",
                    variant: "tonal"
                  })
                ])) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.stagedFiles, (file, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: "file-" + index,
                    class: "attachment-card file-preview"
                  }, [
                    createBaseVNode("div", {
                      class: "attachment-icon",
                      style: normalizeStyle({ color: filePresentation(file).color })
                    }, [
                      createVNode(VIcon, {
                        icon: filePresentation(file).icon,
                        size: "24"
                      }, null, 8, ["icon"]),
                      createBaseVNode("span", _hoisted_13, toDisplayString(filePresentation(file).label), 1)
                    ], 4),
                    createBaseVNode("span", _hoisted_14, toDisplayString(file.original_name), 1),
                    createVNode(VBtn, {
                      onClick: ($event) => _ctx.$emit("removeFile", index),
                      class: "remove-attachment-btn",
                      icon: "mdi-close",
                      size: "x-small",
                      color: "error",
                      variant: "tonal"
                    }, null, 8, ["onClick"])
                  ]);
                }), 128))
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          withDirectives(createBaseVNode("textarea", {
            ref_key: "inputField",
            ref: inputField,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => localPrompt.value = $event),
            onKeydown: handleKeyDown,
            onCompositionstart: handleCompositionStart,
            onCompositionend: handleCompositionEnd,
            onCompositioncancel: handleCompositionEnd,
            onBlur: _cache[2] || (_cache[2] = ($event) => clearCompositionState()),
            disabled: _ctx.disabled,
            placeholder: "和未来聊天吧...",
            class: "chat-textarea",
            autocomplete: "off",
            autocorrect: "off",
            autocapitalize: "sentences",
            spellcheck: "false",
            style: { "width": "100%", "resize": "none", "outline": "none", "border": "1px solid var(--v-theme-border)", "border-radius": "12px", "padding": "12px 18px", "min-height": "34px", "max-height": "200px", "overflow-y": "auto", "font-family": "inherit", "font-size": "16px", "background-color": "var(--v-theme-surface)", "transition": "height 0.16s ease" }
          }, null, 40, _hoisted_15), [
            [vModelText, localPrompt.value]
          ]),
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("div", _hoisted_17, [
              createVNode(_sfc_main$3, {
                offset: "8",
                location: "top start",
                "close-on-content-click": false
              }, {
                activator: withCtx(({ props: activatorProps }) => [
                  createVNode(VBtn, mergeProps(activatorProps, {
                    icon: "mdi-plus",
                    variant: "outlined",
                    class: "input-neutral-btn input-outline-control"
                  }), null, 16)
                ]),
                default: withCtx(() => [
                  createVNode(VListItem, {
                    class: "styled-menu-item",
                    rounded: "md",
                    onClick: triggerImageInput
                  }, {
                    prepend: withCtx(() => [
                      createVNode(VIcon, {
                        icon: "mdi-file-upload",
                        size: "small"
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(tm)("input.upload")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(ConfigSelector, {
                    "session-id": _ctx.sessionId || null,
                    "platform-id": sessionPlatformId.value,
                    "is-group": sessionIsGroup.value,
                    "initial-config-id": props.configId,
                    onConfigChanged: handleConfigChange
                  }, null, 8, ["session-id", "platform-id", "is-group", "initial-config-id"]),
                  createVNode(VListItem, {
                    class: "styled-menu-item",
                    rounded: "md",
                    onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("toggleStreaming"))
                  }, {
                    prepend: withCtx(() => [
                      createVNode(VIcon, {
                        icon: "mdi-lightning-bolt",
                        size: "small"
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.enableStreaming ? unref(tm)("streaming.enabled") : unref(tm)("streaming.disabled")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              showProviderSelector.value ? (openBlock(), createBlock(ProviderModelMenu, {
                key: 0,
                ref_key: "providerModelMenuRef",
                ref: providerModelMenuRef
              }, null, 512)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("input", {
                type: "file",
                ref_key: "imageInputRef",
                ref: imageInputRef,
                onChange: handleFileSelect,
                style: { "display": "none" },
                multiple: ""
              }, null, 544),
              _ctx.disabled && !unref(mobile) ? (openBlock(), createBlock(VProgressCircular, {
                key: 0,
                indeterminate: "",
                size: "16",
                class: "mr-1",
                width: "1.5"
              })) : createCommentVNode("", true),
              createVNode(VBtn, {
                onClick: handleRecordClick,
                icon: "",
                variant: "text",
                class: "record-btn input-icon-btn"
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    icon: _ctx.isRecording ? "mdi-stop-circle" : "mdi-microphone",
                    variant: "text",
                    plain: ""
                  }, null, 8, ["icon"]),
                  createVNode(VTooltip, {
                    activator: "parent",
                    location: "top"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.isRecording ? unref(tm)("voice.speaking") : unref(tm)("voice.startRecording")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              _ctx.isRunning && !canSend.value ? (openBlock(), createBlock(VBtn, {
                key: 1,
                icon: "",
                onClick: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("stop")),
                variant: "tonal",
                class: "send-btn input-action-btn"
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    icon: "mdi-stop",
                    variant: "text",
                    plain: ""
                  }),
                  createVNode(VTooltip, {
                    activator: "parent",
                    location: "top"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(tm)("input.stopGenerating")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : (openBlock(), createBlock(VBtn, {
                key: 2,
                onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("send")),
                icon: "mdi-arrow-up",
                variant: "tonal",
                disabled: !canSend.value,
                class: "send-btn input-action-btn"
              }, null, 8, ["disabled"]))
            ])
          ])
        ], 4)
      ], 42, _hoisted_1);
    };
  }
});
const ChatInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f66861b2"]]);
function useMediaHandling() {
  const stagedAudioUrl = ref("");
  const stagedFiles = ref([]);
  const mediaCache = ref({});
  const pendingFileSignatures = /* @__PURE__ */ new Set();
  async function getFileSignature(file) {
    if (crypto == null ? void 0 : crypto.subtle) {
      const buffer = await file.arrayBuffer();
      const digest = await crypto.subtle.digest("SHA-256", buffer);
      const hash = Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
      return `sha256:${hash}`;
    }
    return `meta:${file.name}:${file.size}:${file.type}:${file.lastModified}`;
  }
  function isDuplicateFile(signature) {
    return pendingFileSignatures.has(signature) || stagedFiles.value.some((file) => file.signature === signature);
  }
  async function getMediaFile(filename) {
    if (mediaCache.value[filename]) {
      return mediaCache.value[filename];
    }
    try {
      const response = await axios.get("/api/chat/get_file", {
        params: { filename },
        responseType: "blob"
      });
      const blobUrl = URL.createObjectURL(response.data);
      mediaCache.value[filename] = blobUrl;
      return blobUrl;
    } catch (error) {
      console.error("Error fetching media file:", error);
      return "";
    }
  }
  async function uploadStagedFile(file) {
    const signature = await getFileSignature(file);
    if (isDuplicateFile(signature)) return;
    pendingFileSignatures.add(signature);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post("/api/chat/post_file", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      const { attachment_id, filename, type } = response.data.data;
      stagedFiles.value.push({
        attachment_id,
        filename,
        original_name: file.name,
        url: URL.createObjectURL(file),
        type,
        signature
      });
    } catch (err) {
      console.error("Error uploading file:", err);
    } finally {
      pendingFileSignatures.delete(signature);
    }
  }
  async function processAndUploadImage(file) {
    await uploadStagedFile(file);
  }
  async function processAndUploadFile(file) {
    await uploadStagedFile(file);
  }
  async function handlePaste(event) {
    var _a;
    const items = (_a = event.clipboardData) == null ? void 0 : _a.items;
    if (!items) return;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          await processAndUploadImage(file);
        }
      }
    }
  }
  function removeImage(index) {
    let imageCount = 0;
    for (let i = 0; i < stagedFiles.value.length; i++) {
      if (stagedFiles.value[i].type === "image") {
        if (imageCount === index) {
          const fileToRemove = stagedFiles.value[i];
          if (fileToRemove.url.startsWith("blob:")) {
            URL.revokeObjectURL(fileToRemove.url);
          }
          stagedFiles.value.splice(i, 1);
          return;
        }
        imageCount++;
      }
    }
  }
  function removeAudio() {
    stagedAudioUrl.value = "";
  }
  function removeFile(index) {
    let fileCount = 0;
    for (let i = 0; i < stagedFiles.value.length; i++) {
      if (stagedFiles.value[i].type !== "image") {
        if (fileCount === index) {
          const fileToRemove = stagedFiles.value[i];
          if (fileToRemove.url.startsWith("blob:")) {
            URL.revokeObjectURL(fileToRemove.url);
          }
          stagedFiles.value.splice(i, 1);
          return;
        }
        fileCount++;
      }
    }
  }
  function clearStaged(options = {}) {
    const { revokeUrls = true } = options;
    stagedAudioUrl.value = "";
    if (revokeUrls) {
      stagedFiles.value.forEach((file) => {
        if (file.url.startsWith("blob:")) {
          URL.revokeObjectURL(file.url);
        }
      });
    }
    stagedFiles.value = [];
  }
  function cleanupMediaCache() {
    Object.values(mediaCache.value).forEach((url) => {
      if (url.startsWith("blob:")) {
        URL.revokeObjectURL(url);
      }
    });
    mediaCache.value = {};
  }
  const stagedImagesUrl = computed(
    () => stagedFiles.value.filter((f) => f.type === "image").map((f) => f.url)
  );
  const stagedNonImageFiles = computed(
    () => stagedFiles.value.filter((f) => f.type !== "image")
  );
  return {
    stagedImagesUrl,
    stagedAudioUrl,
    stagedFiles,
    stagedNonImageFiles,
    getMediaFile,
    processAndUploadImage,
    processAndUploadFile,
    handlePaste,
    removeImage,
    removeAudio,
    removeFile,
    clearStaged,
    cleanupMediaCache
  };
}
export {
  ChatInput as C,
  buildWebchatUmoDetails as b,
  getStoredSelectedChatConfigId as g,
  useMediaHandling as u
};
