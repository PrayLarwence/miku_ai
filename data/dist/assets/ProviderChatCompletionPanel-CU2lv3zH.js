import { _ as _export_sfc, u as useModuleI18n, L as ref, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, $ as unref, t as toDisplayString, w as withCtx, d as createTextVNode, e as VBtn, x as VDivider, h as createBlock, i as createCommentVNode, aA as isRef, l as VIcon, T as normalizeClass, s as VCard, v as VCardText, j as VTextField, a9 as VCardActions, V as VSpacer, ai as VDialog, am as VSnackbar, B as axios, ap as pushScopeId, aq as popScopeId } from "./index-BXuR6cgv.js";
import { A as AstrBotConfig } from "./AstrBotConfig-pBiDtOXb.js";
import { u as useProviderSources, P as ProviderSourcesPanel, a as ProviderModelsPanel } from "./useProviderSources-CCuuB4SC.js";
import "./index-vSHJWpH5.js";
import "./TemplateListEditor-CIYzKHuo.js";
import "./PersonaForm-C8yvoH1l.js";
import "./confirmDialog-CkMgMXQP.js";
import "./inputValue-BqQtgRan.js";
import "./StyledMenu.vue_vue_type_style_index_0_lang-2DD6mXzT.js";
const _withScopeId = (n) => (pushScopeId("data-v-e8189f6e"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "provider-chat-panel" };
const _hoisted_2 = { class: "provider-workbench__sidebar" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "provider-workbench__divider" }, null, -1));
const _hoisted_4 = { class: "provider-workbench__main" };
const _hoisted_5 = {
  key: 0,
  class: "provider-config-shell"
};
const _hoisted_6 = { class: "provider-config-header" };
const _hoisted_7 = { class: "provider-config-headline" };
const _hoisted_8 = { class: "provider-config-title" };
const _hoisted_9 = { class: "provider-config-subtitle" };
const _hoisted_10 = { class: "provider-config-actions" };
const _hoisted_11 = { class: "provider-config-body" };
const _hoisted_12 = { class: "provider-section" };
const _hoisted_13 = { class: "provider-section-head" };
const _hoisted_14 = { class: "provider-section-title" };
const _hoisted_15 = {
  key: 1,
  class: "provider-section"
};
const _hoisted_16 = { class: "provider-section-head" };
const _hoisted_17 = { class: "provider-section-title" };
const _hoisted_18 = { class: "provider-section provider-section--models" };
const _hoisted_19 = {
  key: 1,
  class: "provider-empty-state"
};
const _hoisted_20 = { class: "mt-2" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("small", { style: { "color": "gray" } }, "不建议修改 ID，可能会导致指向该模型的相关配置（如默认模型、插件相关配置等）失效。旧版本 AstrBot 的 “提供商 ID” 是下方的 “ID”。", -1));
const _sfc_main = {
  __name: "ProviderChatCompletionPanel",
  props: {
    showBorder: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    const { tm } = useModuleI18n("features/provider");
    const snackbar = ref({
      show: false,
      message: "",
      color: "success"
    });
    function showMessage(message, color = "success") {
      snackbar.value = { show: true, message, color };
    }
    const {
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
      availableSourceTypes,
      displayedProviderSources,
      filteredMergedModelEntries,
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
      deleteProvider,
      testProvider,
      toggleProviderEnable,
      loadConfig,
      modelAlreadyConfigured
    } = useProviderSources({
      defaultTab: "chat_completion",
      tm,
      showMessage
    });
    const showManualModelDialog = ref(false);
    const showProviderEditDialog = ref(false);
    const providerEditData = ref(null);
    const providerEditOriginalId = ref("");
    const savingProviders = ref([]);
    function openManualModelDialog() {
      if (!selectedProviderSource.value) {
        showMessage(tm("providerSources.selectHint"), "error");
        return;
      }
      manualModelId.value = "";
      showManualModelDialog.value = true;
    }
    async function confirmManualModel() {
      const modelId = manualModelId.value.trim();
      if (!selectedProviderSource.value) {
        showMessage(tm("providerSources.selectHint"), "error");
        return;
      }
      if (!modelId) {
        showMessage(tm("models.manualModelRequired"), "error");
        return;
      }
      if (modelAlreadyConfigured(modelId)) {
        showMessage(tm("models.manualModelExists"), "error");
        return;
      }
      await addModelProvider(modelId);
      showManualModelDialog.value = false;
    }
    function openProviderEdit(provider) {
      providerEditData.value = JSON.parse(JSON.stringify(provider));
      providerEditOriginalId.value = provider.id;
      showProviderEditDialog.value = true;
    }
    async function saveEditedProvider() {
      var _a, _b;
      if (!providerEditData.value) return;
      savingProviders.value.push(providerEditData.value.id);
      try {
        const res = await axios.post("/api/config/provider/update", {
          id: providerEditOriginalId.value || providerEditData.value.id,
          config: providerEditData.value
        });
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        showMessage(res.data.message || tm("providerSources.saveSuccess"));
        showProviderEditDialog.value = false;
        await loadConfig();
      } catch (err) {
        showMessage(((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || err.message || tm("providerSources.saveError"), "error");
      } finally {
        savingProviders.value = savingProviders.value.filter((id) => {
          var _a2;
          return id !== ((_a2 = providerEditData.value) == null ? void 0 : _a2.id);
        });
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: normalizeClass(["provider-workbench", { "provider-workbench--borderless": !props.showBorder }])
        }, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(ProviderSourcesPanel, {
              "displayed-provider-sources": unref(displayedProviderSources),
              "selected-provider-source": unref(selectedProviderSource),
              "available-source-types": unref(availableSourceTypes),
              tm: unref(tm),
              "resolve-source-icon": unref(resolveSourceIcon),
              "get-source-display-name": unref(getSourceDisplayName),
              onAddProviderSource: unref(addProviderSource),
              onSelectProviderSource: unref(selectProviderSource),
              onDeleteProviderSource: unref(deleteProviderSource)
            }, null, 8, ["displayed-provider-sources", "selected-provider-source", "available-source-types", "tm", "resolve-source-icon", "get-source-display-name", "onAddProviderSource", "onSelectProviderSource", "onDeleteProviderSource"])
          ]),
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            unref(selectedProviderSource) ? (openBlock(), createElementBlock("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("div", _hoisted_8, toDisplayString(unref(selectedProviderSource).id), 1),
                  createBaseVNode("div", _hoisted_9, toDisplayString(unref(selectedProviderSource).api_base || "N/A"), 1)
                ]),
                createBaseVNode("div", _hoisted_10, [
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
                      createTextVNode(toDisplayString(unref(tm)("providerSources.save")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled", "onClick"])
                ])
              ]),
              createVNode(VDivider),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("section", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("div", _hoisted_14, toDisplayString(unref(tm)("providers.settings")), 1)
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
                unref(advancedSourceConfig) ? (openBlock(), createElementBlock("section", _hoisted_15, [
                  createBaseVNode("div", _hoisted_16, [
                    createBaseVNode("div", _hoisted_17, toDisplayString(unref(tm)("providerSources.advancedConfig")), 1)
                  ]),
                  createVNode(AstrBotConfig, {
                    iterable: unref(advancedSourceConfig),
                    metadata: unref(providerSourceSchema),
                    metadataKey: "provider",
                    "is-editing": true
                  }, null, 8, ["iterable", "metadata"])
                ])) : createCommentVNode("", true),
                createVNode(VDivider),
                createBaseVNode("section", _hoisted_18, [
                  createVNode(ProviderModelsPanel, {
                    entries: unref(filteredMergedModelEntries),
                    "available-count": unref(availableModels).length,
                    "model-search": unref(modelSearch),
                    "onUpdate:modelSearch": _cache[0] || (_cache[0] = ($event) => isRef(modelSearch) ? modelSearch.value = $event : null),
                    "loading-models": unref(loadingModels),
                    "is-source-modified": unref(isSourceModified),
                    "supports-image-input": unref(supportsImageInput),
                    "supports-audio-input": unref(supportsAudioInput),
                    "supports-tool-call": unref(supportsToolCall),
                    "supports-reasoning": unref(supportsReasoning),
                    "format-context-limit": unref(formatContextLimit),
                    "testing-providers": unref(testingProviders),
                    tm: unref(tm),
                    onFetchModels: unref(fetchAvailableModels),
                    onOpenManualModel: openManualModelDialog,
                    onOpenProviderEdit: openProviderEdit,
                    onToggleProviderEnable: unref(toggleProviderEnable),
                    onTestProvider: unref(testProvider),
                    onDeleteProvider: unref(deleteProvider),
                    onAddModelProvider: unref(addModelProvider)
                  }, null, 8, ["entries", "available-count", "model-search", "loading-models", "is-source-modified", "supports-image-input", "supports-audio-input", "supports-tool-call", "supports-reasoning", "format-context-limit", "testing-providers", "tm", "onFetchModels", "onToggleProviderEnable", "onTestProvider", "onDeleteProvider", "onAddModelProvider"])
                ])
              ])
            ])) : (openBlock(), createElementBlock("div", _hoisted_19, [
              createVNode(VIcon, {
                size: "48",
                color: "grey-lighten-1"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-cursor-default-click")
                ]),
                _: 1
              }),
              createBaseVNode("p", _hoisted_20, toDisplayString(unref(tm)("providerSources.selectHint")), 1)
            ]))
          ])
        ], 2),
        createVNode(VDialog, {
          modelValue: showManualModelDialog.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => showManualModelDialog.value = $event),
          "max-width": "400"
        }, {
          default: withCtx(() => [
            createVNode(VCard, {
              title: unref(tm)("models.manualDialogTitle")
            }, {
              default: withCtx(() => [
                createVNode(VCardText, { class: "py-4" }, {
                  default: withCtx(() => [
                    createVNode(VTextField, {
                      modelValue: unref(manualModelId),
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(manualModelId) ? manualModelId.value = $event : null),
                      label: unref(tm)("models.manualDialogModelLabel"),
                      flat: "",
                      variant: "solo-filled",
                      autofocus: "",
                      clearable: ""
                    }, null, 8, ["modelValue", "label"]),
                    createVNode(VTextField, {
                      "model-value": unref(manualProviderId),
                      flat: "",
                      variant: "solo-filled",
                      label: unref(tm)("models.manualDialogPreviewLabel"),
                      "persistent-hint": "",
                      hint: unref(tm)("models.manualDialogPreviewHint")
                    }, null, 8, ["model-value", "label", "hint"])
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: _cache[2] || (_cache[2] = ($event) => showManualModelDialog.value = false)
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
          modelValue: showProviderEditDialog.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => showProviderEditDialog.value = $event),
          width: "800"
        }, {
          default: withCtx(() => {
            var _a;
            return [
              createVNode(VCard, {
                title: ((_a = providerEditData.value) == null ? void 0 : _a.id) || unref(tm)("dialogs.config.editTitle")
              }, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "py-4" }, {
                    default: withCtx(() => [
                      _hoisted_21,
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
                          onClick: _cache[4] || (_cache[4] = ($event) => showProviderEditDialog.value = false)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(tm)("dialogs.config.cancel")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        createVNode(VBtn, {
                          color: "primary",
                          loading: savingProviders.value.includes((_b = providerEditData.value) == null ? void 0 : _b.id),
                          onClick: saveEditedProvider
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(tm)("dialogs.config.save")), 1)
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
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => snackbar.value.show = $event),
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
const ProviderChatCompletionPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e8189f6e"]]);
export {
  ProviderChatCompletionPanel as default
};
