import { _ as _export_sfc, o as openBlock, h as createBlock, w as withCtx, b as createVNode, s as VCard, v as VCardText, p as VTabs, n as VTab, l as VIcon, d as createTextVNode, t as toDisplayString, A as VWindow, c as createElementBlock, F as Fragment, r as renderList, q as VWindowItem, ab as VRow, ad as VCol, a as createBaseVNode, a6 as VCardTitle, k as VAlert, i as createCommentVNode, a9 as VCardActions, V as VSpacer, e as VBtn, ai as VDialog, u as useModuleI18n, a5 as useI18n, L as ref, M as onMounted, I as onUnmounted, $ as unref, aA as isRef, x as VDivider, ao as VContainer, j as VTextField, am as VSnackbar, B as axios, aY as mergeDynamicTranslations, ap as pushScopeId, aq as popScopeId, a7 as VTooltip, g as VChip, a2 as mergeProps } from "./index-IOsZtj6J.js";
import { g as getProviderIcon, b as getProviderDescription, u as useProviderSources, P as ProviderSourcesPanel, a as ProviderModelsPanel } from "./useProviderSources-e7eBv26P.js";
import { A as AstrBotConfig } from "./AstrBotConfig-_LTpBxq4.js";
import { I as ItemCard } from "./ItemCard-h96E7vs5.js";
import "./inputValue-BqQtgRan.js";
import "./StyledMenu.vue_vue_type_style_index_0_lang-NB5AjzPV.js";
import "./confirmDialog-DLjvXcW2.js";
import "./index-B5qN8oBY.js";
import "./TemplateListEditor-DBT5fSzq.js";
import "./PersonaForm-DxkuJRPi.js";
const AVAILABLE_PROVIDER_TABS = ["embedding", "rerank"];
const _sfc_main$1 = {
  name: "AddNewProvider",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    metadata: {
      type: Object,
      default: () => ({})
    },
    currentProviderType: {
      type: String,
      default: "chat_completion"
    }
  },
  emits: ["update:show", "select-template"],
  setup() {
    const { tm } = useModuleI18n("features/provider");
    return { tm };
  },
  data() {
    return {
      activeProviderTab: "chat_completion"
    };
  },
  computed: {
    showDialog: {
      get() {
        return this.show;
      },
      set(value) {
        this.$emit("update:show", value);
      }
    }
  },
  watch: {
    show(value) {
      if (value) {
        this.syncActiveProviderTab();
      }
    },
    currentProviderType() {
      if (this.showDialog) {
        this.syncActiveProviderTab();
      }
    }
  },
  methods: {
    syncActiveProviderTab() {
      this.activeProviderTab = AVAILABLE_PROVIDER_TABS.includes(this.currentProviderType) ? this.currentProviderType : "chat_completion";
    },
    closeDialog() {
      this.showDialog = false;
    },
    // 按提供商类型获取模板列表
    getTemplatesByType(type) {
      const templates = this.metadata.provider.config_template || {};
      const filtered = {};
      for (const [name, template] of Object.entries(templates)) {
        if (template.provider_type === type) {
          filtered[name] = template;
        }
      }
      return filtered;
    },
    // 从工具函数导入
    getProviderIcon,
    // 获取提供商简介
    getProviderDescription(template, name) {
      return getProviderDescription(template, name, this.tm);
    },
    // 选择提供商模板
    selectProviderTemplate(name) {
      this.$emit("select-template", name);
      this.closeDialog();
    }
  }
};
const _hoisted_1$1 = { class: "provider-card-content" };
const _hoisted_2$1 = { class: "provider-card-text" };
const _hoisted_3$1 = { class: "provider-card-logo" };
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = {
  key: 1,
  class: "provider-logo-fallback"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VDialog, {
    modelValue: $options.showDialog,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $options.showDialog = $event),
    "max-width": "1000px"
  }, {
    default: withCtx(() => [
      createVNode(VCard, {
        title: $setup.tm("dialogs.addProvider.title")
      }, {
        default: withCtx(() => [
          createVNode(VCardText, { style: { "overflow-y": "auto" } }, {
            default: withCtx(() => [
              createVNode(VTabs, {
                modelValue: $data.activeProviderTab,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.activeProviderTab = $event),
                grow: ""
              }, {
                default: withCtx(() => [
                  createVNode(VTab, {
                    value: "embedding",
                    class: "font-weight-medium px-3"
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { start: "" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-code-json")
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString($setup.tm("dialogs.addProvider.tabs.embedding")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, {
                    value: "rerank",
                    class: "font-weight-medium px-3"
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { start: "" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-compare-vertical")
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString($setup.tm("dialogs.addProvider.tabs.rerank")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              createVNode(VWindow, {
                modelValue: $data.activeProviderTab,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.activeProviderTab = $event),
                class: "mt-4"
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(Fragment, null, renderList(["chat_completion", "embedding", "rerank"], (tabType) => {
                    return createVNode(VWindowItem, {
                      key: tabType,
                      value: tabType
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, { class: "mt-1" }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList($options.getTemplatesByType(tabType), (template, name) => {
                              return openBlock(), createBlock(VCol, {
                                key: name,
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    variant: "outlined",
                                    hover: "",
                                    class: "provider-card",
                                    onClick: ($event) => $options.selectProviderTemplate(name)
                                  }, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_1$1, [
                                        createBaseVNode("div", _hoisted_2$1, [
                                          createVNode(VCardTitle, { class: "provider-card-title" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCardText, { class: "text-caption text-medium-emphasis provider-card-description" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString($options.getProviderDescription(template, name)), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        createBaseVNode("div", _hoisted_3$1, [
                                          $options.getProviderIcon(template.provider) ? (openBlock(), createElementBlock("img", {
                                            key: 0,
                                            src: $options.getProviderIcon(template.provider),
                                            class: "provider-logo-img"
                                          }, null, 8, _hoisted_4$1)) : (openBlock(), createElementBlock("div", _hoisted_5$1, toDisplayString(name[0].toUpperCase()), 1))
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)),
                            Object.keys($options.getTemplatesByType(tabType)).length === 0 ? (openBlock(), createBlock(VCol, {
                              key: 0,
                              cols: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(VAlert, {
                                  type: "info",
                                  variant: "tonal"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($setup.tm("dialogs.addProvider.noTemplates")), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(VCardActions, null, {
            default: withCtx(() => [
              createVNode(VSpacer),
              createVNode(VBtn, {
                text: "",
                onClick: $options.closeDialog
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString($setup.tm("dialogs.config.cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title"])
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
const AddNewProvider = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-07e5ed6f"]]);
const _withScopeId = (n) => (pushScopeId("data-v-26dcf540"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "model-config-page" };
const _hoisted_2 = { class: "text-h1 font-weight-bold mb-2 d-flex align-center" };
const _hoisted_3 = { class: "text-subtitle-1 text-medium-emphasis mb-4" };
const _hoisted_4 = { class: "px-2" };
const _hoisted_5 = { class: "d-flex justify-space-between align-center mb-4" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_7 = { key: 0 };
const _hoisted_8 = {
  key: 0,
  class: "provider-workbench"
};
const _hoisted_9 = { class: "provider-workbench__sidebar" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "provider-workbench__divider" }, null, -1));
const _hoisted_11 = { class: "provider-workbench__main" };
const _hoisted_12 = {
  key: 0,
  class: "provider-config-shell"
};
const _hoisted_13 = { class: "provider-config-header" };
const _hoisted_14 = { class: "provider-config-headline" };
const _hoisted_15 = { class: "provider-config-title" };
const _hoisted_16 = { class: "provider-config-subtitle" };
const _hoisted_17 = { class: "provider-config-actions" };
const _hoisted_18 = { class: "provider-config-body" };
const _hoisted_19 = { class: "provider-section" };
const _hoisted_20 = { class: "provider-section-head" };
const _hoisted_21 = { class: "provider-section-title" };
const _hoisted_22 = {
  key: 1,
  class: "provider-section"
};
const _hoisted_23 = { class: "provider-section-head" };
const _hoisted_24 = { class: "provider-section-title" };
const _hoisted_25 = { class: "provider-section provider-section--models" };
const _hoisted_26 = {
  key: 1,
  class: "provider-empty-state"
};
const _hoisted_27 = { class: "mt-2" };
const _hoisted_28 = { class: "text-grey mt-4" };
const _hoisted_29 = { key: 0 };
const _hoisted_30 = { key: 1 };
const _hoisted_31 = { class: "text-h4" };
const _hoisted_32 = { class: "text-body-1 text-medium-emphasis mb-4" };
const _hoisted_33 = {
  key: 0,
  class: "mt-6"
};
const _hoisted_34 = { class: "text-h5 mb-4" };
const _hoisted_35 = { class: "d-flex align-center mb-2" };
const _hoisted_36 = { class: "font-weight-bold" };
const _hoisted_37 = { class: "text-caption text-medium-emphasis" };
const _hoisted_38 = { key: 0 };
const _hoisted_39 = { key: 1 };
const _hoisted_40 = {
  key: 2,
  class: "text-error"
};
const _hoisted_41 = {
  key: 1,
  class: "mt-6 text-center"
};
const _hoisted_42 = { class: "text-grey mt-2" };
const _hoisted_43 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("small", { style: { "color": "gray" } }, "不建议修改 ID，可能会导致指向该模型的相关配置（如默认模型、插件相关配置等）失效。", -1));
const _sfc_main = {
  __name: "ModelConfigPage",
  setup(__props) {
    const { tm: tmProvider } = useModuleI18n("features/provider");
    useI18n();
    function tm(key, params) {
      let result = tmProvider(key, params);
      if (result && !result.startsWith("[MISSING:")) return result;
      const fallbacks = {
        "title": "模型配置",
        "subtitle": "管理平台连接、模型供应商与本地模型",
        "tabs.platform": "平台连接",
        "tabs.provider": "模型供应商",
        "tabs.localModel": "本地模型",
        "localModel.title": "检测本地模型",
        "localModel.description": "扫描本机运行的 Ollama、vLLM 等本地模型服务",
        "localModel.scanButton": "开始检测",
        "localModel.results": "检测结果",
        "localModel.source": "来源",
        "localModel.endpoint": "端点",
        "localModel.noResults": "未检测到本地模型",
        "memoryModel.title": "记忆库模型状态",
        "memoryModel.embedding": "Embedding",
        "memoryModel.rerank": "Rerank",
        "memoryModel.noEmbedding": "暂无 Embedding 供应商",
        "memoryModel.noRerank": "暂无 Rerank 供应商"
      };
      return fallbacks[key] || key;
    }
    const activeTab = ref("provider");
    const snackbar = ref({ show: false, message: "", color: "success" });
    function showMessage(message, color = "success") {
      snackbar.value = { show: true, message, color };
    }
    const config_data = ref({});
    const metadata = ref({});
    async function getConfig() {
      var _a, _b;
      try {
        const res = await axios.get("/api/config/get");
        config_data.value = res.data.data.config;
        metadata.value = res.data.data.metadata;
        const platformI18n = res.data.data.platform_i18n_translations;
        if (platformI18n && typeof platformI18n === "object") {
          mergeDynamicTranslations("features.config-metadata", platformI18n);
        }
      } catch (err) {
        showMessage(((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || err.message, "error");
      }
    }
    const {
      providers,
      selectedProviderType,
      selectedProviderSource,
      availableModels,
      loadingModels,
      savingSource,
      testingProviders,
      isSourceModified,
      configSchema,
      providerSourceSchema,
      manualModelId,
      modelSearch,
      providerTypes,
      availableSourceTypes,
      displayedProviderSources,
      filteredMergedModelEntries,
      filteredProviders,
      basicSourceConfig,
      advancedSourceConfig,
      manualProviderId,
      resolveSourceIcon,
      getSourceDisplayName,
      supportsImageInput,
      supportsAudioInput,
      supportsToolCall,
      supportsReasoning,
      formatContextLimit,
      selectProviderSource,
      addProviderSource,
      deleteProviderSource,
      saveProviderSource,
      fetchAvailableModels,
      addModelProvider,
      deleteProvider: deleteProviderFromSource,
      modelAlreadyConfigured,
      testProvider,
      loadConfig: loadProviderConfig
    } = useProviderSources({ tm: tmProvider, showMessage });
    const showAddProviderDialog = ref(false);
    const showProviderCfg = ref(false);
    const newSelectedProviderName = ref("");
    const newSelectedProviderConfig = ref({});
    const newProviderOriginalId = ref("");
    const updatingModeCfg = ref(false);
    const loadingCfg = ref(false);
    const providerStatuses = ref([]);
    const showProviderEditDialog = ref(false);
    const providerEditData = ref(null);
    const providerEditOriginalId = ref("");
    const showManualModelDialog = ref(false);
    const savingProviders = ref([]);
    function openProviderEdit(provider) {
      providerEditData.value = JSON.parse(JSON.stringify(provider));
      providerEditOriginalId.value = provider.id;
      showProviderEditDialog.value = true;
    }
    function openManualModelDialog() {
      if (!selectedProviderSource.value) {
        showMessage("请先选择一个提供商来源", "error");
        return;
      }
      manualModelId.value = "";
      showManualModelDialog.value = true;
    }
    async function confirmManualModel() {
      const modelId = manualModelId.value.trim();
      if (!selectedProviderSource.value) {
        showMessage("请先选择一个提供商来源", "error");
        return;
      }
      if (!modelId) {
        showMessage("请输入模型 ID", "error");
        return;
      }
      if (modelAlreadyConfigured(modelId)) {
        showMessage("该模型已配置", "error");
        return;
      }
      await addModelProvider(modelId);
      showManualModelDialog.value = false;
    }
    function getEmptyText() {
      return tmProvider("providers.empty.typed", { type: selectedProviderType.value });
    }
    function selectProviderTemplate(name) {
      newSelectedProviderName.value = name;
      newProviderOriginalId.value = "";
      showProviderCfg.value = true;
      updatingModeCfg.value = false;
      newSelectedProviderConfig.value = JSON.parse(JSON.stringify(configSchema.value.provider.config_template[name] || {}));
    }
    function configExistingProvider(provider) {
      var _a;
      newSelectedProviderName.value = provider.id;
      newProviderOriginalId.value = provider.id;
      newSelectedProviderConfig.value = {};
      let templates = configSchema.value.provider.config_template || {};
      let defaultConfig = {};
      for (let key in templates) {
        if (((_a = templates[key]) == null ? void 0 : _a.type) === provider.type) {
          defaultConfig = templates[key];
          break;
        }
      }
      const mergeConfigWithOrder = (target, source, reference) => {
        if (source && typeof source === "object" && !Array.isArray(source)) {
          for (let key in source) {
            if (source.hasOwnProperty(key)) {
              if (typeof source[key] === "object" && source[key] !== null) target[key] = Array.isArray(source[key]) ? [...source[key]] : { ...source[key] };
              else target[key] = source[key];
            }
          }
        }
        for (let key in reference) {
          if (typeof reference[key] === "object" && reference[key] !== null) {
            if (!(key in target)) target[key] = Array.isArray(reference[key]) ? [...reference[key]] : {};
            if (!Array.isArray(reference[key])) mergeConfigWithOrder(target[key], source && source[key] ? source[key] : {}, reference[key]);
          } else if (!(key in target)) target[key] = reference[key];
        }
      };
      if (defaultConfig) mergeConfigWithOrder(newSelectedProviderConfig.value, provider, defaultConfig);
      showProviderCfg.value = true;
      updatingModeCfg.value = true;
    }
    async function newProvider() {
      var _a, _b;
      loadingCfg.value = true;
      const wasUpdating = updatingModeCfg.value;
      try {
        if (wasUpdating) {
          const res = await axios.post("/api/config/provider/update", { id: newProviderOriginalId.value || newSelectedProviderName.value, config: newSelectedProviderConfig.value });
          if (res.data.status === "error") {
            showMessage(res.data.message || "更新失败!", "error");
            return;
          }
          showMessage(res.data.message || "更新成功!");
          updatingModeCfg.value = false;
        } else {
          const res = await axios.post("/api/config/provider/new", newSelectedProviderConfig.value);
          if (res.data.status === "error") {
            showMessage(res.data.message || "添加失败!", "error");
            return;
          }
          showMessage(res.data.message || "添加成功!");
        }
        showProviderCfg.value = false;
      } catch (err) {
        showMessage(((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || err.message, "error");
      } finally {
        loadingCfg.value = false;
        await loadProviderConfig();
      }
    }
    async function saveEditedProvider() {
      var _a, _b;
      if (!providerEditData.value) return;
      savingProviders.value.push(providerEditData.value.id);
      try {
        const res = await axios.post("/api/config/provider/update", { id: providerEditOriginalId.value || providerEditData.value.id, config: providerEditData.value });
        if (res.data.status === "error") throw new Error(res.data.message);
        showMessage(res.data.message || "保存成功");
        showProviderEditDialog.value = false;
        await loadProviderConfig();
      } catch (err) {
        showMessage(((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || err.message || "保存失败", "error");
      } finally {
        savingProviders.value = savingProviders.value.filter((id) => {
          var _a2;
          return id !== ((_a2 = providerEditData.value) == null ? void 0 : _a2.id);
        });
      }
    }
    async function copyProvider(providerToCopy) {
      var _a, _b;
      const newProviderConfig = JSON.parse(JSON.stringify(providerToCopy));
      const generateUniqueId = (baseId) => {
        let newId = `${baseId}_copy`;
        let counter = 1;
        const existingIds = providers.value.map((p) => p.id);
        while (existingIds.includes(newId)) {
          newId = `${baseId}_copy_${counter}`;
          counter++;
        }
        return newId;
      };
      newProviderConfig.id = generateUniqueId(providerToCopy.id);
      newProviderConfig.enable = false;
      loadingCfg.value = true;
      try {
        const res = await axios.post("/api/config/provider/new", newProviderConfig);
        showMessage(res.data.message || `成功复制并创建了 ${newProviderConfig.id}`);
        await loadProviderConfig();
      } catch (err) {
        showMessage(((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || err.message, "error");
      } finally {
        loadingCfg.value = false;
      }
    }
    async function toggleProviderEnableCard(provider, value) {
      var _a, _b;
      provider.enable = value;
      try {
        const res = await axios.post("/api/config/provider/update", { id: provider.id, config: provider });
        if (res.data.status === "error") throw new Error(res.data.message);
        showMessage(res.data.message || "状态更新成功");
      } catch (error) {
        showMessage(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message || "保存失败", "error");
      } finally {
        await loadProviderConfig();
      }
    }
    function toggleProviderEnable(provider) {
      toggleProviderEnableCard(provider, !provider.enable);
    }
    function deleteProviderCard(provider) {
      deleteProviderFromSource(provider);
    }
    function isProviderTesting(providerId) {
      return testingProviders.value.includes(providerId);
    }
    function getProviderStatus(providerId) {
      return providerStatuses.value.find((s) => s.id === providerId);
    }
    async function testSingleProvider(provider) {
      var _a, _b, _c;
      if (isProviderTesting(provider.id)) return;
      testingProviders.value.push(provider.id);
      const statusIndex = providerStatuses.value.findIndex((s) => s.id === provider.id);
      const pendingStatus = { id: provider.id, name: provider.id, status: "pending", error: null };
      if (statusIndex !== -1) providerStatuses.value.splice(statusIndex, 1, pendingStatus);
      else providerStatuses.value.unshift(pendingStatus);
      try {
        if (!provider.enable) throw new Error("该提供商未被用户启用");
        if (provider.provider_type === "agent_runner") {
          providerStatuses.value = providerStatuses.value.filter((s) => s.id !== provider.id);
          return;
        }
        const startTime = performance.now();
        const res = await axios.get(`/api/config/provider/check_one?id=${provider.id}`);
        if (res.data && res.data.status === "ok") {
          const index = providerStatuses.value.findIndex((s) => s.id === provider.id);
          if (index !== -1) providerStatuses.value.splice(index, 1, res.data.data);
          const latency = Math.max(0, Math.round(performance.now() - startTime));
          showMessage(`${provider.id} 测试成功 (${latency}ms)`);
        } else throw new Error(((_a = res.data) == null ? void 0 : _a.message) || `检查 ${provider.id} 失败`);
      } catch (err) {
        const errorMessage = ((_c = (_b = err.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message) || err.message || "Unknown error";
        const index = providerStatuses.value.findIndex((s) => s.id === provider.id);
        if (index !== -1) providerStatuses.value.splice(index, 1, { id: provider.id, name: provider.id, status: "unavailable", error: errorMessage });
      } finally {
        const index = testingProviders.value.indexOf(provider.id);
        if (index > -1) testingProviders.value.splice(index, 1);
      }
    }
    function getStatusText(status) {
      const messages = { available: "可用", unavailable: "不可用", pending: "检测中" };
      return messages[status] || status;
    }
    const scanningLocal = ref(false);
    const scanCompleted = ref(false);
    const localModels = ref([]);
    async function scanLocalModels() {
      var _a;
      scanningLocal.value = true;
      scanCompleted.value = false;
      localModels.value = [];
      try {
        const res = await axios.get("/api/model/scan");
        if (res.data && res.data.status === "ok") {
          localModels.value = ((_a = res.data.data) == null ? void 0 : _a.models) || [];
        } else {
          localModels.value = [];
        }
      } catch (err) {
        console.warn("/api/model/scan not available:", err);
        localModels.value = [{ id: "placeholder", name: "本地模型检测 API 尚未就绪", source: "N/A", endpoint: "N/A", available: false, error: "后端接口 /api/model/scan 待实现" }];
      } finally {
        scanningLocal.value = false;
        scanCompleted.value = true;
      }
    }
    onMounted(() => {
      getConfig();
      loadProviderConfig();
    });
    onUnmounted(() => {
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(VContainer, {
          fluid: "",
          class: "pa-0"
        }, {
          default: withCtx(() => [
            createVNode(VRow, { class: "d-flex justify-space-between align-center px-4 py-3 pb-6" }, {
              default: withCtx(() => [
                createBaseVNode("div", null, [
                  createBaseVNode("h1", _hoisted_2, [
                    createVNode(VIcon, { class: "me-2" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-chip")
                      ]),
                      _: 1
                    }),
                    createTextVNode(toDisplayString(tm("title")), 1)
                  ]),
                  createBaseVNode("p", _hoisted_3, toDisplayString(tm("subtitle")), 1)
                ])
              ]),
              _: 1
            }),
            createVNode(VTabs, {
              modelValue: activeTab.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeTab.value = $event),
              "bg-color": "transparent",
              class: "mb-6 px-2"
            }, {
              default: withCtx(() => [
                createVNode(VTab, {
                  value: "provider",
                  class: "font-weight-medium px-3"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { start: "" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-creation")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" " + toDisplayString(tm("tabs.provider")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VTab, {
                  value: "localModel",
                  class: "font-weight-medium px-3"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { start: "" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-desktop-tower")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" " + toDisplayString(tm("tabs.localModel")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"]),
            createVNode(VWindow, {
              modelValue: activeTab.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => activeTab.value = $event)
            }, {
              default: withCtx(() => [
                createVNode(VWindowItem, { value: "provider" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_4, [
                      createBaseVNode("div", _hoisted_5, [
                        _hoisted_6,
                        unref(selectedProviderType) !== "chat_completion" ? (openBlock(), createElementBlock("div", _hoisted_7, [
                          createVNode(VBtn, {
                            color: "primary",
                            "prepend-icon": "mdi-plus",
                            variant: "tonal",
                            rounded: "xl",
                            size: "x-large",
                            onClick: _cache[1] || (_cache[1] = ($event) => showAddProviderDialog.value = true)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(tm("providers.addProvider")), 1)
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode(VTabs, {
                        modelValue: unref(selectedProviderType),
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(selectedProviderType) ? selectedProviderType.value = $event : null),
                        "bg-color": "transparent",
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(providerTypes), (type) => {
                            return openBlock(), createBlock(VTab, {
                              key: type.value,
                              value: type.value,
                              class: "font-weight-medium px-3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(type.icon), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createTextVNode(" " + toDisplayString(type.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      unref(selectedProviderType) === "chat_completion" ? (openBlock(), createElementBlock("div", _hoisted_8, [
                        createBaseVNode("div", _hoisted_9, [
                          createVNode(ProviderSourcesPanel, {
                            "displayed-provider-sources": unref(displayedProviderSources),
                            "selected-provider-source": unref(selectedProviderSource),
                            "available-source-types": unref(availableSourceTypes),
                            tm,
                            "resolve-source-icon": unref(resolveSourceIcon),
                            "get-source-display-name": unref(getSourceDisplayName),
                            onAddProviderSource: unref(addProviderSource),
                            onSelectProviderSource: unref(selectProviderSource),
                            onDeleteProviderSource: unref(deleteProviderSource)
                          }, null, 8, ["displayed-provider-sources", "selected-provider-source", "available-source-types", "resolve-source-icon", "get-source-display-name", "onAddProviderSource", "onSelectProviderSource", "onDeleteProviderSource"])
                        ]),
                        _hoisted_10,
                        createBaseVNode("div", _hoisted_11, [
                          unref(selectedProviderSource) ? (openBlock(), createElementBlock("div", _hoisted_12, [
                            createBaseVNode("div", _hoisted_13, [
                              createBaseVNode("div", _hoisted_14, [
                                createBaseVNode("div", _hoisted_15, toDisplayString(unref(selectedProviderSource).id), 1),
                                createBaseVNode("div", _hoisted_16, toDisplayString(unref(selectedProviderSource).api_base || "N/A"), 1)
                              ]),
                              createBaseVNode("div", _hoisted_17, [
                                createVNode(VBtn, {
                                  color: "primary",
                                  "prepend-icon": "mdi-content-save-outline",
                                  loading: unref(savingSource),
                                  disabled: !unref(isSourceModified),
                                  variant: "tonal",
                                  rounded: "xl",
                                  onClick: unref(saveProviderSource)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(tm("providerSources.save")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["loading", "disabled", "onClick"])
                              ])
                            ]),
                            createVNode(VDivider),
                            createBaseVNode("div", _hoisted_18, [
                              createBaseVNode("section", _hoisted_19, [
                                createBaseVNode("div", _hoisted_20, [
                                  createBaseVNode("div", _hoisted_21, toDisplayString(tm("providers.settings")), 1)
                                ]),
                                unref(basicSourceConfig) ? (openBlock(), createBlock(AstrBotConfig, {
                                  key: 0,
                                  iterable: unref(basicSourceConfig),
                                  metadata: unref(providerSourceSchema),
                                  metadataKey: "provider",
                                  "is-editing": true
                                }, null, 8, ["iterable", "metadata"])) : createCommentVNode("", true)
                              ]),
                              unref(advancedSourceConfig) ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true),
                              unref(advancedSourceConfig) ? (openBlock(), createElementBlock("section", _hoisted_22, [
                                createBaseVNode("div", _hoisted_23, [
                                  createBaseVNode("div", _hoisted_24, toDisplayString(tm("providerSources.advancedConfig")), 1)
                                ]),
                                createVNode(AstrBotConfig, {
                                  iterable: unref(advancedSourceConfig),
                                  metadata: unref(providerSourceSchema),
                                  metadataKey: "provider",
                                  "is-editing": true
                                }, null, 8, ["iterable", "metadata"])
                              ])) : createCommentVNode("", true),
                              createVNode(VDivider),
                              createBaseVNode("section", _hoisted_25, [
                                createVNode(ProviderModelsPanel, {
                                  entries: unref(filteredMergedModelEntries),
                                  "available-count": unref(availableModels).length,
                                  "model-search": unref(modelSearch),
                                  "onUpdate:modelSearch": _cache[3] || (_cache[3] = ($event) => isRef(modelSearch) ? modelSearch.value = $event : null),
                                  "loading-models": unref(loadingModels),
                                  "is-source-modified": unref(isSourceModified),
                                  "supports-image-input": unref(supportsImageInput),
                                  "supports-audio-input": unref(supportsAudioInput),
                                  "supports-tool-call": unref(supportsToolCall),
                                  "supports-reasoning": unref(supportsReasoning),
                                  "format-context-limit": unref(formatContextLimit),
                                  "testing-providers": unref(testingProviders),
                                  tm,
                                  onFetchModels: unref(fetchAvailableModels),
                                  onOpenManualModel: openManualModelDialog,
                                  onOpenProviderEdit: openProviderEdit,
                                  onToggleProviderEnable: toggleProviderEnable,
                                  onTestProvider: unref(testProvider),
                                  onDeleteProvider: _ctx.deleteProvider,
                                  onAddModelProvider: unref(addModelProvider)
                                }, null, 8, ["entries", "available-count", "model-search", "loading-models", "is-source-modified", "supports-image-input", "supports-audio-input", "supports-tool-call", "supports-reasoning", "format-context-limit", "testing-providers", "onFetchModels", "onTestProvider", "onDeleteProvider", "onAddModelProvider"])
                              ])
                            ])
                          ])) : (openBlock(), createElementBlock("div", _hoisted_26, [
                            createVNode(VIcon, {
                              size: "48",
                              color: "grey-lighten-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-cursor-default-click")
                              ]),
                              _: 1
                            }),
                            createBaseVNode("p", _hoisted_27, toDisplayString(tm("providerSources.selectHint")), 1)
                          ]))
                        ])
                      ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        unref(filteredProviders).length === 0 ? (openBlock(), createBlock(VRow, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              class: "text-center pa-8"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "64",
                                  color: "grey-lighten-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-api-off")
                                  ]),
                                  _: 1
                                }),
                                createBaseVNode("p", _hoisted_28, toDisplayString(getEmptyText()), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VRow, { key: 1 }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredProviders), (provider, index) => {
                              return openBlock(), createBlock(VCol, {
                                key: index,
                                cols: "12",
                                md: "6",
                                lg: "4",
                                xl: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(ItemCard, {
                                    item: provider,
                                    "title-field": "id",
                                    "enabled-field": "enable",
                                    loading: isProviderTesting(provider.id),
                                    bglogo: unref(getProviderIcon)(provider.provider),
                                    "show-copy-button": true,
                                    onToggleEnabled: ($event) => toggleProviderEnableCard(provider, !provider.enable),
                                    onDelete: deleteProviderCard,
                                    onEdit: configExistingProvider,
                                    onCopy: copyProvider
                                  }, {
                                    "item-details": withCtx(({ item }) => [
                                      getProviderStatus(item.id) ? (openBlock(), createBlock(VTooltip, {
                                        key: 0,
                                        location: "top",
                                        "max-width": "300"
                                      }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode(VChip, mergeProps(props, {
                                            color: _ctx.getStatusColor(getProviderStatus(item.id).status),
                                            size: "small"
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                start: "",
                                                size: "small"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(getProviderStatus(item.id).status === "available" ? "mdi-check-circle" : getProviderStatus(item.id).status === "unavailable" ? "mdi-alert-circle" : "mdi-clock-outline"), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createTextVNode(" " + toDisplayString(getStatusText(getProviderStatus(item.id).status)), 1)
                                            ]),
                                            _: 2
                                          }, 1040, ["color"])
                                        ]),
                                        default: withCtx(() => [
                                          getProviderStatus(item.id).status === "unavailable" ? (openBlock(), createElementBlock("span", _hoisted_29, toDisplayString(getProviderStatus(item.id).error), 1)) : (openBlock(), createElementBlock("span", _hoisted_30, toDisplayString(getStatusText(getProviderStatus(item.id).status)), 1))
                                        ]),
                                        _: 2
                                      }, 1024)) : createCommentVNode("", true)
                                    ]),
                                    actions: withCtx(({ item }) => [
                                      createVNode(VBtn, {
                                        style: { "z-index": "100000" },
                                        variant: "tonal",
                                        color: "info",
                                        rounded: "xl",
                                        size: "small",
                                        loading: isProviderTesting(item.id),
                                        onClick: ($event) => testSingleProvider(item)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(tm("availability.test")), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["loading", "onClick"])
                                    ]),
                                    _: 2
                                  }, 1032, ["item", "loading", "bglogo", "onToggleEnabled"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        }))
                      ], 64))
                    ])
                  ]),
                  _: 1
                }),
                createVNode(VWindowItem, { value: "localModel" }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      elevation: "0",
                      class: "mt-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "d-flex align-center py-3 px-4" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { class: "me-2" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-desktop-tower")
                              ]),
                              _: 1
                            }),
                            createBaseVNode("span", _hoisted_31, toDisplayString(tm("localModel.title")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createBaseVNode("p", _hoisted_32, toDisplayString(tm("localModel.description")), 1),
                            createVNode(VBtn, {
                              color: "primary",
                              variant: "tonal",
                              rounded: "xl",
                              loading: scanningLocal.value,
                              "prepend-icon": "mdi-magnify-scan",
                              onClick: scanLocalModels
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(tm("localModel.scanButton")), 1)
                              ]),
                              _: 1
                            }, 8, ["loading"]),
                            localModels.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_33, [
                              createBaseVNode("h3", _hoisted_34, toDisplayString(tm("localModel.results")), 1),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(localModels.value, (model, idx) => {
                                    return openBlock(), createBlock(VCol, {
                                      key: idx,
                                      cols: "12",
                                      md: "6",
                                      lg: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          variant: "outlined",
                                          class: "local-model-card"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCardText, null, {
                                              default: withCtx(() => [
                                                createBaseVNode("div", _hoisted_35, [
                                                  createVNode(VIcon, {
                                                    color: model.available ? "success" : "error",
                                                    class: "me-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(model.available ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"]),
                                                  createBaseVNode("span", _hoisted_36, toDisplayString(model.name || model.id), 1)
                                                ]),
                                                createBaseVNode("div", _hoisted_37, [
                                                  model.source ? (openBlock(), createElementBlock("div", _hoisted_38, toDisplayString(tm("localModel.source")) + ": " + toDisplayString(model.source), 1)) : createCommentVNode("", true),
                                                  model.endpoint ? (openBlock(), createElementBlock("div", _hoisted_39, toDisplayString(tm("localModel.endpoint")) + ": " + toDisplayString(model.endpoint), 1)) : createCommentVNode("", true),
                                                  model.error ? (openBlock(), createElementBlock("div", _hoisted_40, toDisplayString(model.error), 1)) : createCommentVNode("", true)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ])) : !scanningLocal.value && scanCompleted.value ? (openBlock(), createElementBlock("div", _hoisted_41, [
                              createVNode(VIcon, {
                                size: "48",
                                color: "grey-lighten-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-magnify-close")
                                ]),
                                _: 1
                              }),
                              createBaseVNode("p", _hoisted_42, toDisplayString(tm("localModel.noResults")), 1)
                            ])) : createCommentVNode("", true)
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
          ]),
          _: 1
        }),
        createVNode(AddNewProvider, {
          show: showAddProviderDialog.value,
          "onUpdate:show": _cache[5] || (_cache[5] = ($event) => showAddProviderDialog.value = $event),
          metadata: unref(configSchema),
          "current-provider-type": unref(selectedProviderType),
          onSelectTemplate: selectProviderTemplate
        }, null, 8, ["show", "metadata", "current-provider-type"]),
        createVNode(VDialog, {
          modelValue: showManualModelDialog.value,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => showManualModelDialog.value = $event),
          "max-width": "400"
        }, {
          default: withCtx(() => [
            createVNode(VCard, {
              title: tm("models.manualDialogTitle")
            }, {
              default: withCtx(() => [
                createVNode(VCardText, { class: "py-4" }, {
                  default: withCtx(() => [
                    createVNode(VTextField, {
                      modelValue: unref(manualModelId),
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(manualModelId) ? manualModelId.value = $event : null),
                      label: tm("models.manualDialogModelLabel"),
                      flat: "",
                      variant: "solo-filled",
                      autofocus: "",
                      clearable: ""
                    }, null, 8, ["modelValue", "label"]),
                    createVNode(VTextField, {
                      "model-value": unref(manualProviderId),
                      flat: "",
                      variant: "solo-filled",
                      label: tm("models.manualDialogPreviewLabel"),
                      "persistent-hint": "",
                      hint: tm("models.manualDialogPreviewHint")
                    }, null, 8, ["model-value", "label", "hint"])
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: _cache[7] || (_cache[7] = ($event) => showManualModelDialog.value = false)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("取消")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      onClick: confirmManualModel
                    }, {
                      default: withCtx(() => [
                        createTextVNode("添加")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(VDialog, {
          modelValue: showProviderCfg.value,
          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => showProviderCfg.value = $event),
          width: "900",
          persistent: ""
        }, {
          default: withCtx(() => [
            createVNode(VCard, {
              title: updatingModeCfg.value ? tm("dialogs.config.editTitle") : tm("dialogs.config.addTitle") + ` ${newSelectedProviderName.value} ` + tm("dialogs.config.provider")
            }, {
              default: withCtx(() => [
                createVNode(VCardText, { class: "py-4" }, {
                  default: withCtx(() => [
                    createVNode(AstrBotConfig, {
                      iterable: newSelectedProviderConfig.value,
                      metadata: unref(configSchema),
                      metadataKey: "provider",
                      "is-editing": updatingModeCfg.value
                    }, null, 8, ["iterable", "metadata", "is-editing"])
                  ]),
                  _: 1
                }),
                createVNode(VDivider),
                createVNode(VCardActions, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      disabled: loadingCfg.value,
                      onClick: _cache[9] || (_cache[9] = ($event) => showProviderCfg.value = false)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(tm("dialogs.config.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    createVNode(VBtn, {
                      color: "primary",
                      loading: loadingCfg.value,
                      onClick: newProvider
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(tm("dialogs.config.save")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(VDialog, {
          modelValue: showProviderEditDialog.value,
          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => showProviderEditDialog.value = $event),
          width: "800"
        }, {
          default: withCtx(() => {
            var _a;
            return [
              createVNode(VCard, {
                title: ((_a = providerEditData.value) == null ? void 0 : _a.id) || tm("dialogs.config.editTitle")
              }, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "py-4" }, {
                    default: withCtx(() => [
                      _hoisted_43,
                      providerEditData.value ? (openBlock(), createBlock(AstrBotConfig, {
                        key: 0,
                        iterable: providerEditData.value,
                        metadata: unref(configSchema),
                        metadataKey: "provider",
                        "is-editing": true
                      }, null, 8, ["iterable", "metadata"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, { class: "pa-4" }, {
                    default: withCtx(() => {
                      var _a2, _b;
                      return [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          variant: "text",
                          disabled: savingProviders.value.includes((_a2 = providerEditData.value) == null ? void 0 : _a2.id),
                          onClick: _cache[11] || (_cache[11] = ($event) => showProviderEditDialog.value = false)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(tm("dialogs.config.cancel")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        createVNode(VBtn, {
                          color: "primary",
                          loading: savingProviders.value.includes((_b = providerEditData.value) == null ? void 0 : _b.id),
                          onClick: saveEditedProvider
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(tm("dialogs.config.save")), 1)
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])
            ];
          }),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(VSnackbar, {
          modelValue: snackbar.value.show,
          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => snackbar.value.show = $event),
          color: snackbar.value.color,
          timeout: 3e3,
          location: "top"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(snackbar.value.message), 1)
          ]),
          _: 1
        }, 8, ["modelValue", "color"])
      ]);
    };
  }
};
const ModelConfigPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-26dcf540"]]);
export {
  ModelConfigPage as default
};
