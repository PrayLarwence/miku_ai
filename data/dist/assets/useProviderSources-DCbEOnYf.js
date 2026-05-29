import { _ as _export_sfc, H as computed, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as createVNode, j as VTextField, w as withCtx, d as createTextVNode, e as VBtn, g as VChip, F as Fragment, r as renderList, h as createBlock, a2 as mergeProps, l as VIcon, i as createCommentVNode, a0 as withModifiers, a8 as VSwitch, a7 as VTooltip, x as VDivider, ag as VListItem, b7 as VAvatar, aa as VImg, f as VSelect, ah as VListItemTitle, T as normalizeClass, L as ref, J as watch, M as onMounted, B as axios, N as nextTick } from "./index-BCHR8lhs.js";
import { n as normalizeTextInput } from "./inputValue-BqQtgRan.js";
import { _ as _sfc_main$2 } from "./StyledMenu.vue_vue_type_style_index_0_lang-DLpCnJAE.js";
import { u as useConfirmDialog, a as askForConfirmation } from "./confirmDialog-CGjakbC1.js";
const _hoisted_1$1 = { class: "provider-models-panel" };
const _hoisted_2$1 = { class: "provider-models-toolbar" };
const _hoisted_3$1 = { class: "provider-models-title-wrap" };
const _hoisted_4$1 = { class: "provider-models-title" };
const _hoisted_5$1 = { class: "provider-models-subtitle" };
const _hoisted_6$1 = { class: "provider-models-toolbar__actions" };
const _hoisted_7$1 = { class: "provider-models-sections" };
const _hoisted_8$1 = { class: "provider-models-section" };
const _hoisted_9$1 = { class: "provider-models-section__head" };
const _hoisted_10$1 = { class: "provider-models-section__title" };
const _hoisted_11$1 = {
  key: 0,
  class: "provider-models-list"
};
const _hoisted_12$1 = ["onClick"];
const _hoisted_13$1 = { class: "provider-model-row__title" };
const _hoisted_14$1 = { class: "provider-model-row__subtitle" };
const _hoisted_15$1 = { class: "provider-model-row__meta" };
const _hoisted_16 = {
  key: 0,
  class: "provider-model-row__badge provider-model-row__badge--text"
};
const _hoisted_17 = {
  key: 1,
  class: "provider-models-empty"
};
const _hoisted_18 = { class: "provider-models-section provider-models-section--available" };
const _hoisted_19 = { class: "provider-models-section__head" };
const _hoisted_20 = { class: "provider-models-section__title" };
const _hoisted_21 = {
  key: 0,
  class: "provider-models-list"
};
const _hoisted_22 = ["onClick"];
const _hoisted_23 = { class: "provider-model-row__title provider-model-row__title--mono" };
const _hoisted_24 = { class: "provider-model-row__meta" };
const _hoisted_25 = {
  key: 0,
  class: "provider-model-row__badge provider-model-row__badge--text"
};
const _hoisted_26 = { class: "provider-model-row__actions" };
const _hoisted_27 = {
  key: 1,
  class: "provider-models-empty provider-models-empty--small"
};
const _sfc_main$1 = {
  __name: "ProviderModelsPanel",
  props: {
    entries: {
      type: Array,
      default: () => []
    },
    availableCount: {
      type: Number,
      default: 0
    },
    modelSearch: {
      type: String,
      default: ""
    },
    loadingModels: {
      type: Boolean,
      default: false
    },
    isSourceModified: {
      type: Boolean,
      default: false
    },
    supportsImageInput: {
      type: Function,
      required: true
    },
    supportsAudioInput: {
      type: Function,
      required: true
    },
    supportsToolCall: {
      type: Function,
      required: true
    },
    supportsReasoning: {
      type: Function,
      required: true
    },
    formatContextLimit: {
      type: Function,
      required: true
    },
    testingProviders: {
      type: Array,
      default: () => []
    },
    tm: {
      type: Function,
      required: true
    }
  },
  emits: [
    "update:modelSearch",
    "fetch-models",
    "open-manual-model",
    "open-provider-edit",
    "toggle-provider-enable",
    "test-provider",
    "delete-provider",
    "add-model-provider"
  ],
  setup(__props, { emit }) {
    const props = __props;
    const modelSearchProxy = computed({
      get: () => props.modelSearch,
      set: (val) => emit("update:modelSearch", normalizeTextInput(val))
    });
    const configuredEntries = computed(
      () => (props.entries || []).filter((entry) => entry.type === "configured")
    );
    const availableEntries = computed(
      () => (props.entries || []).filter((entry) => entry.type === "available")
    );
    const capabilityIcons = (metadata) => {
      const icons = [];
      if (props.supportsImageInput(metadata)) {
        icons.push({ icon: "mdi-image-outline" });
      }
      if (props.supportsAudioInput(metadata)) {
        icons.push({ icon: "mdi-music-note-outline" });
      }
      if (props.supportsToolCall(metadata)) {
        icons.push({ icon: "mdi-wrench-outline" });
      }
      if (props.supportsReasoning(metadata)) {
        icons.push({ icon: "mdi-brain" });
      }
      return icons;
    };
    const isProviderTesting = (providerId) => props.testingProviders.includes(providerId);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("h3", _hoisted_4$1, toDisplayString(__props.tm("models.title")), 1),
            createBaseVNode("small", _hoisted_5$1, toDisplayString(__props.tm("models.available")) + " " + toDisplayString(__props.availableCount), 1)
          ]),
          createBaseVNode("div", _hoisted_6$1, [
            createVNode(VTextField, {
              modelValue: modelSearchProxy.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelSearchProxy.value = $event),
              density: "compact",
              "prepend-inner-icon": "mdi-magnify",
              clearable: "",
              "hide-details": "",
              variant: "solo-filled",
              flat: "",
              class: "provider-models-search",
              placeholder: __props.tm("models.searchPlaceholder")
            }, null, 8, ["modelValue", "placeholder"]),
            createVNode(VBtn, {
              color: "primary",
              "prepend-icon": "mdi-download",
              loading: __props.loadingModels,
              variant: "tonal",
              rounded: "xl",
              onClick: _cache[1] || (_cache[1] = ($event) => emit("fetch-models"))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.isSourceModified ? __props.tm("providerSources.saveAndFetchModels") : __props.tm("providerSources.fetchModels")), 1)
              ]),
              _: 1
            }, 8, ["loading"]),
            createVNode(VBtn, {
              color: "primary",
              "prepend-icon": "mdi-pencil-plus",
              variant: "text",
              rounded: "xl",
              onClick: _cache[2] || (_cache[2] = ($event) => emit("open-manual-model"))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.tm("models.manualAddButton")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_7$1, [
          createBaseVNode("section", _hoisted_8$1, [
            createBaseVNode("div", _hoisted_9$1, [
              createBaseVNode("div", _hoisted_10$1, toDisplayString(__props.tm("models.configured")), 1),
              createVNode(VChip, {
                size: "x-small",
                variant: "tonal",
                label: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(configuredEntries.value.length), 1)
                ]),
                _: 1
              })
            ]),
            configuredEntries.value.length ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(configuredEntries.value, (entry) => {
                return openBlock(), createBlock(VTooltip, {
                  key: entry.provider.id,
                  location: "top",
                  "max-width": "400"
                }, {
                  activator: withCtx(({ props: tooltipProps }) => [
                    createBaseVNode("div", mergeProps(tooltipProps, { class: "provider-model-row" }), [
                      createBaseVNode("button", {
                        type: "button",
                        class: "provider-model-row__main",
                        onClick: ($event) => emit("open-provider-edit", entry.provider)
                      }, [
                        createBaseVNode("div", _hoisted_13$1, toDisplayString(entry.provider.id), 1),
                        createBaseVNode("div", _hoisted_14$1, toDisplayString(entry.provider.model), 1),
                        createBaseVNode("div", _hoisted_15$1, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(capabilityIcons(entry.metadata), (item) => {
                            return openBlock(), createElementBlock("span", {
                              key: item.icon,
                              class: "provider-model-row__badge"
                            }, [
                              createVNode(VIcon, { size: "14" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.icon), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]);
                          }), 128)),
                          __props.formatContextLimit(entry.metadata) ? (openBlock(), createElementBlock("span", _hoisted_16, toDisplayString(__props.formatContextLimit(entry.metadata)), 1)) : createCommentVNode("", true)
                        ])
                      ], 8, _hoisted_12$1),
                      createBaseVNode("div", {
                        class: "provider-model-row__actions",
                        onClick: _cache[3] || (_cache[3] = withModifiers(() => {
                        }, ["stop"]))
                      }, [
                        createVNode(VSwitch, {
                          modelValue: entry.provider.enable,
                          "onUpdate:modelValue": [($event) => entry.provider.enable = $event, ($event) => emit("toggle-provider-enable", entry.provider, $event)],
                          density: "compact",
                          inset: "",
                          "hide-details": "",
                          color: "primary",
                          class: "provider-model-row__switch"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VBtn, {
                          icon: "mdi-connection",
                          size: "small",
                          variant: "text",
                          disabled: !entry.provider.enable,
                          loading: isProviderTesting(entry.provider.id),
                          onClick: withModifiers(($event) => emit("test-provider", entry.provider), ["stop"])
                        }, null, 8, ["disabled", "loading", "onClick"]),
                        createVNode(VBtn, {
                          icon: "mdi-cog-outline",
                          size: "small",
                          variant: "text",
                          onClick: withModifiers(($event) => emit("open-provider-edit", entry.provider), ["stop"])
                        }, null, 8, ["onClick"]),
                        createVNode(VBtn, {
                          icon: "mdi-delete-outline",
                          size: "small",
                          variant: "text",
                          onClick: withModifiers(($event) => emit("delete-provider", entry.provider), ["stop"])
                        }, null, 8, ["onClick"])
                      ])
                    ], 16)
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("strong", null, toDisplayString(__props.tm("models.tooltips.providerId")) + ":", 1),
                      createTextVNode(" " + toDisplayString(entry.provider.id), 1)
                    ]),
                    createBaseVNode("div", null, [
                      createBaseVNode("strong", null, toDisplayString(__props.tm("models.tooltips.modelId")) + ":", 1),
                      createTextVNode(" " + toDisplayString(entry.provider.model), 1)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ])) : (openBlock(), createElementBlock("div", _hoisted_17, [
              createVNode(VIcon, {
                size: "36",
                color: "grey-lighten-1"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-package-variant-closed")
                ]),
                _: 1
              }),
              createBaseVNode("p", null, toDisplayString(__props.tm("models.empty")), 1)
            ]))
          ]),
          createVNode(VDivider),
          createBaseVNode("section", _hoisted_18, [
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("div", _hoisted_20, toDisplayString(__props.tm("models.available")), 1),
              createVNode(VChip, {
                size: "x-small",
                variant: "tonal",
                label: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(availableEntries.value.length), 1)
                ]),
                _: 1
              })
            ]),
            availableEntries.value.length ? (openBlock(), createElementBlock("div", _hoisted_21, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(availableEntries.value, (entry) => {
                return openBlock(), createBlock(VTooltip, {
                  key: entry.model,
                  location: "top",
                  "max-width": "400"
                }, {
                  activator: withCtx(({ props: tooltipProps }) => [
                    createBaseVNode("div", mergeProps(tooltipProps, { class: "provider-model-row" }), [
                      createBaseVNode("button", {
                        type: "button",
                        class: "provider-model-row__main",
                        onClick: ($event) => emit("add-model-provider", entry.model)
                      }, [
                        createBaseVNode("div", _hoisted_23, toDisplayString(entry.model), 1),
                        createBaseVNode("div", _hoisted_24, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(capabilityIcons(entry.metadata), (item) => {
                            return openBlock(), createElementBlock("span", {
                              key: item.icon,
                              class: "provider-model-row__badge"
                            }, [
                              createVNode(VIcon, { size: "14" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.icon), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]);
                          }), 128)),
                          __props.formatContextLimit(entry.metadata) ? (openBlock(), createElementBlock("span", _hoisted_25, toDisplayString(__props.formatContextLimit(entry.metadata)), 1)) : createCommentVNode("", true)
                        ])
                      ], 8, _hoisted_22),
                      createBaseVNode("div", _hoisted_26, [
                        createVNode(VBtn, {
                          icon: "mdi-plus",
                          size: "small",
                          variant: "text",
                          color: "primary",
                          onClick: withModifiers(($event) => emit("add-model-provider", entry.model), ["stop"])
                        }, null, 8, ["onClick"])
                      ])
                    ], 16)
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("strong", null, toDisplayString(__props.tm("models.tooltips.modelId")) + ":", 1),
                      createTextVNode(" " + toDisplayString(entry.model), 1)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ])) : (openBlock(), createElementBlock("div", _hoisted_27, [
              createVNode(VIcon, {
                size: "36",
                color: "grey-lighten-1"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-database-search-outline")
                ]),
                _: 1
              }),
              createBaseVNode("p", null, toDisplayString(__props.tm("models.noModelsFound")), 1)
            ]))
          ])
        ])
      ]);
    };
  }
};
const ProviderModelsPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cfd837f0"]]);
const _hoisted_1 = { class: "provider-sources-panel" };
const _hoisted_2 = { class: "provider-sources-head" };
const _hoisted_3 = { class: "provider-sources-head__copy" };
const _hoisted_4 = { class: "provider-sources-title" };
const _hoisted_5 = { class: "provider-sources-controls" };
const _hoisted_6 = { class: "provider-sources-mobile-select" };
const _hoisted_7 = { class: "provider-source-select-value" };
const _hoisted_8 = {
  key: 0,
  class: "provider-sources-list"
};
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "provider-source-item__content" };
const _hoisted_11 = { class: "provider-source-item__title" };
const _hoisted_12 = { class: "provider-source-item__subtitle" };
const _hoisted_13 = { class: "provider-source-item__actions" };
const _hoisted_14 = {
  key: 1,
  class: "provider-sources-empty"
};
const _hoisted_15 = { class: "provider-sources-empty__text" };
const _sfc_main = {
  __name: "ProviderSourcesPanel",
  props: {
    displayedProviderSources: {
      type: Array,
      default: () => []
    },
    selectedProviderSource: {
      type: Object,
      default: null
    },
    availableSourceTypes: {
      type: Array,
      default: () => []
    },
    tm: {
      type: Function,
      required: true
    },
    resolveSourceIcon: {
      type: Function,
      required: true
    },
    getSourceDisplayName: {
      type: Function,
      required: true
    }
  },
  emits: [
    "add-provider-source",
    "select-provider-source",
    "delete-provider-source"
  ],
  setup(__props, { emit }) {
    const props = __props;
    const selectedId = computed(() => {
      var _a;
      return ((_a = props.selectedProviderSource) == null ? void 0 : _a.id) || null;
    });
    const isActive = (source) => {
      if (source.isPlaceholder) return false;
      return selectedId.value !== null && selectedId.value === source.id;
    };
    const sourceBadge = (source) => source.provider || source.templateKey || "source";
    const sourceValue = (source) => source.isPlaceholder ? `template:${source.templateKey}` : `source:${source.id}`;
    const sourceOptions = computed(
      () => props.displayedProviderSources.map((source) => ({
        title: props.getSourceDisplayName(source),
        subtitle: source.api_base || sourceBadge(source),
        value: sourceValue(source),
        source
      }))
    );
    const selectedSourceValue = computed(() => {
      if (!props.selectedProviderSource) return null;
      return sourceValue(props.selectedProviderSource);
    });
    const emitAddSource = (type) => emit("add-provider-source", type);
    const emitSelectSource = (source) => emit("select-provider-source", source);
    const emitDeleteSource = (source) => emit("delete-provider-source", source);
    const selectSourceByValue = (value) => {
      const option = sourceOptions.value.find((item) => item.value === value);
      if (option == null ? void 0 : option.source) {
        emitSelectSource(option.source);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("h3", _hoisted_4, toDisplayString(__props.tm("providerSources.title")), 1)
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createVNode(VSelect, {
                "model-value": selectedSourceValue.value,
                items: sourceOptions.value,
                "item-title": "title",
                "item-value": "value",
                density: "compact",
                variant: "solo-filled",
                flat: "",
                "hide-details": "",
                placeholder: __props.tm("providerSources.selectHint"),
                "onUpdate:modelValue": selectSourceByValue
              }, {
                selection: withCtx(({ item }) => [
                  createBaseVNode("div", _hoisted_7, [
                    createVNode(VAvatar, {
                      size: "22",
                      rounded: "lg",
                      class: "provider-source-avatar"
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          ((_a = item.raw.source) == null ? void 0 : _a.provider) ? (openBlock(), createBlock(VImg, {
                            key: 0,
                            src: __props.resolveSourceIcon(item.raw.source),
                            alt: "provider logo",
                            cover: ""
                          }, null, 8, ["src"])) : (openBlock(), createBlock(VIcon, {
                            key: 1,
                            size: "14"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-creation")
                            ]),
                            _: 1
                          }))
                        ];
                      }),
                      _: 2
                    }, 1024),
                    createBaseVNode("span", null, toDisplayString(item.raw.title), 1)
                  ])
                ]),
                item: withCtx(({ props: itemProps, item }) => [
                  createVNode(VListItem, mergeProps(itemProps, {
                    subtitle: item.raw.subtitle
                  }), {
                    prepend: withCtx(() => [
                      createVNode(VAvatar, {
                        size: "24",
                        rounded: "lg",
                        class: "provider-source-avatar me-2"
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            ((_a = item.raw.source) == null ? void 0 : _a.provider) ? (openBlock(), createBlock(VImg, {
                              key: 0,
                              src: __props.resolveSourceIcon(item.raw.source),
                              alt: "provider logo",
                              cover: ""
                            }, null, 8, ["src"])) : (openBlock(), createBlock(VIcon, {
                              key: 1,
                              size: "14"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-creation")
                              ]),
                              _: 1
                            }))
                          ];
                        }),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1040, ["subtitle"])
                ]),
                _: 1
              }, 8, ["model-value", "items", "placeholder"])
            ]),
            createVNode(_sfc_main$2, null, {
              activator: withCtx(({ props: props2 }) => [
                createVNode(VBtn, mergeProps(props2, {
                  "prepend-icon": "mdi-plus",
                  color: "primary",
                  variant: "text",
                  size: "small",
                  rounded: "xl"
                }), {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.tm("providerSources.add")), 1)
                  ]),
                  _: 2
                }, 1040)
              ]),
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.availableSourceTypes, (sourceType) => {
                  return openBlock(), createBlock(VListItem, {
                    key: sourceType.value,
                    class: "styled-menu-item",
                    onClick: ($event) => emitAddSource(sourceType.value)
                  }, {
                    prepend: withCtx(() => [
                      createVNode(VAvatar, {
                        size: "18",
                        rounded: "0",
                        class: "me-2 provider-source-avatar"
                      }, {
                        default: withCtx(() => [
                          sourceType.icon ? (openBlock(), createBlock(VImg, {
                            key: 0,
                            src: sourceType.icon,
                            alt: "provider icon",
                            cover: ""
                          }, null, 8, ["src"])) : (openBlock(), createBlock(VIcon, {
                            key: 1,
                            size: "16"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-shape-outline")
                            ]),
                            _: 1
                          }))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(sourceType.label), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 128))
              ]),
              _: 1
            })
          ])
        ]),
        __props.displayedProviderSources.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_8, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.displayedProviderSources, (source) => {
            return openBlock(), createElementBlock("button", {
              key: source.isPlaceholder ? `template-${source.templateKey}` : source.id,
              type: "button",
              class: normalizeClass([
                "provider-source-item",
                {
                  "provider-source-item--active": isActive(source)
                }
              ]),
              onClick: ($event) => emitSelectSource(source)
            }, [
              createVNode(VAvatar, {
                size: "28",
                rounded: "lg",
                class: "provider-source-item__avatar provider-source-avatar"
              }, {
                default: withCtx(() => [
                  (source == null ? void 0 : source.provider) ? (openBlock(), createBlock(VImg, {
                    key: 0,
                    src: __props.resolveSourceIcon(source),
                    alt: "provider logo",
                    cover: ""
                  }, null, 8, ["src"])) : (openBlock(), createBlock(VIcon, {
                    key: 1,
                    size: "16"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-creation")
                    ]),
                    _: 1
                  }))
                ]),
                _: 2
              }, 1024),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, toDisplayString(__props.getSourceDisplayName(source)), 1),
                createBaseVNode("div", _hoisted_12, toDisplayString(source.api_base || sourceBadge(source)), 1)
              ]),
              createBaseVNode("div", _hoisted_13, [
                !source.isPlaceholder ? (openBlock(), createBlock(VBtn, {
                  key: 0,
                  icon: "mdi-delete-outline",
                  variant: "text",
                  size: "small",
                  onClick: withModifiers(($event) => emitDeleteSource(source), ["stop"])
                }, null, 8, ["onClick"])) : createCommentVNode("", true)
              ])
            ], 10, _hoisted_9);
          }), 128))
        ])) : (openBlock(), createElementBlock("div", _hoisted_14, [
          createVNode(VIcon, {
            size: "44",
            color: "grey-lighten-1"
          }, {
            default: withCtx(() => [
              createTextVNode("mdi-api-off")
            ]),
            _: 1
          }),
          createBaseVNode("p", _hoisted_15, toDisplayString(__props.tm("providerSources.empty")), 1)
        ]))
      ]);
    };
  }
};
const ProviderSourcesPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-88229678"]]);
function getProviderIcon(type) {
  const icons = {
    "openai": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/openai.svg",
    "azure": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/azure.svg",
    "xai": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/xai.svg",
    "anthropic": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/anthropic.svg",
    "ollama": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/ollama.svg",
    "google": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/gemini-color.svg",
    "deepseek": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/deepseek.svg",
    "modelscope": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/modelscope.svg",
    "zhipu": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/zhipu.svg",
    "nvidia": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/nvidia-color.svg",
    "siliconflow": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/siliconcloud.svg",
    "moonshot": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/kimi.svg",
    "kimi": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/kimi.svg",
    "kimi-code": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/kimi.svg",
    "longcat": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/longcat-color.svg",
    "ppio": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/ppio.svg",
    "dify": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/dify-color.svg",
    "coze": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@1.66.0/icons/coze.svg",
    "dashscope": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/alibabacloud-color.svg",
    "deerflow": "https://cdn.jsdelivr.net/gh/bytedance/deer-flow@main/frontend/public/images/deer.svg",
    "fastgpt": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/fastgpt-color.svg",
    "lm_studio": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/lmstudio.svg",
    "fishaudio": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/fishaudio.svg",
    "minimax": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/minimax.svg",
    "minimax-token-plan": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/minimax.svg",
    "mimo": "https://platform.xiaomimimo.com/favicon.874c9507.png",
    "302ai": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@1.53.0/icons/ai302-color.svg",
    "microsoft": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/microsoft.svg",
    "vllm": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/vllm.svg",
    "groq": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/groq.svg",
    "aihubmix": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/aihubmix-color.svg",
    "tokenpony": "https://tokenpony.cn/tokenpony-web/logo.png",
    "compshare": "https://compshare.cn/favicon.ico",
    "xinference": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/xinference-color.svg",
    "bailian": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/bailian-color.svg",
    "volcengine": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/volcengine-color.svg"
  };
  return icons[type] || "";
}
function getProviderDescription(template, name, tm) {
  if (name === "OpenAI") {
    return tm("providers.description.openai", { type: template.type });
  } else if (template.provider === "kimi-code") {
    return tm("providers.description.kimi_code");
  } else if (name === "vLLM Rerank") {
    return tm("providers.description.vllm_rerank", { type: template.type });
  }
  return tm("providers.description.default", { type: template.type });
}
function resolveDefaultTab(value) {
  const normalized = (value || "").toLowerCase();
  if (normalized.includes("embedding")) {
    return "embedding";
  }
  if (normalized.includes("rerank")) {
    return "rerank";
  }
  return "chat_completion";
}
function useProviderSources(options) {
  const { tm, showMessage } = options;
  const confirmDialog = useConfirmDialog();
  async function askForConfirmation$1(message) {
    return askForConfirmation(message, confirmDialog);
  }
  const config = ref({});
  const metadata = ref({});
  const providerSources = ref([]);
  const providers = ref([]);
  const selectedProviderType = ref(resolveDefaultTab(options.defaultTab));
  const selectedProviderSource = ref(null);
  const selectedProviderSourceOriginalId = ref(null);
  const editableProviderSource = ref(null);
  const availableModels = ref([]);
  const modelMetadata = ref({});
  const loadingModels = ref(false);
  const savingSource = ref(false);
  const testingProviders = ref([]);
  const isSourceModified = ref(false);
  const configSchema = ref({});
  const providerTemplates = ref({});
  const manualModelId = ref("");
  const modelSearch = ref("");
  let suppressSourceWatch = false;
  const providerTypes = computed(() => [
    { value: "chat_completion", label: tm("providers.tabs.chatCompletion"), icon: "mdi-message-text" },
    { value: "embedding", label: tm("providers.tabs.embedding"), icon: "mdi-code-json" },
    { value: "rerank", label: tm("providers.tabs.rerank"), icon: "mdi-compare-vertical" }
  ]);
  const availableSourceTypes = computed(() => {
    if (!providerTemplates.value || Object.keys(providerTemplates.value).length === 0) {
      return [];
    }
    const types = [];
    for (const [templateName, template] of Object.entries(providerTemplates.value)) {
      if (template.provider_type === selectedProviderType.value) {
        types.push({
          value: templateName,
          label: templateName,
          icon: getProviderIcon(template.provider)
        });
      }
    }
    return types;
  });
  const filteredProviderSources = computed(() => {
    if (!providerSources.value) return [];
    return providerSources.value.filter(
      (source) => source.provider_type === selectedProviderType.value || source.type && isTypeMatchingProviderType(source.type, selectedProviderType.value)
    );
  });
  const displayedProviderSources = computed(() => {
    return filteredProviderSources.value || [];
  });
  const sourceProviders = computed(() => {
    if (!selectedProviderSource.value || !providers.value) return [];
    return providers.value.filter((p) => p.provider_source_id === selectedProviderSource.value.id);
  });
  const existingModelsForSelectedSource = computed(() => {
    if (!selectedProviderSource.value) return /* @__PURE__ */ new Set();
    return new Set(sourceProviders.value.map((p) => p.model));
  });
  const sortedAvailableModels = computed(() => {
    const existing = existingModelsForSelectedSource.value;
    return [...availableModels.value || []].sort((a, b) => {
      const aName = typeof a === "string" ? a : a == null ? void 0 : a.name;
      const bName = typeof b === "string" ? b : b == null ? void 0 : b.name;
      const aExists = existing.has(aName);
      const bExists = existing.has(bName);
      if (aExists && !bExists) return -1;
      if (!aExists && bExists) return 1;
      return 0;
    });
  });
  const mergedModelEntries = computed(() => {
    const configuredEntries = (sourceProviders.value || []).map((provider) => ({
      type: "configured",
      provider,
      metadata: getModelMetadata(provider.model)
    }));
    const availableEntries = (sortedAvailableModels.value || []).filter((item) => {
      const name = typeof item === "string" ? item : item == null ? void 0 : item.name;
      return !existingModelsForSelectedSource.value.has(name);
    }).map((item) => {
      const name = typeof item === "string" ? item : item == null ? void 0 : item.name;
      return {
        type: "available",
        model: name,
        metadata: typeof item === "object" ? item == null ? void 0 : item.metadata : getModelMetadata(name)
      };
    });
    return [...configuredEntries, ...availableEntries];
  });
  const filteredMergedModelEntries = computed(() => {
    const term = normalizeTextInput(modelSearch.value).trim().toLowerCase();
    if (!term) return mergedModelEntries.value;
    return mergedModelEntries.value.filter((entry) => {
      var _a, _b, _c;
      if (entry.type === "configured") {
        const id = ((_a = entry.provider.id) == null ? void 0 : _a.toLowerCase()) || "";
        const model2 = ((_b = entry.provider.model) == null ? void 0 : _b.toLowerCase()) || "";
        return id.includes(term) || model2.includes(term);
      }
      const model = ((_c = entry.model) == null ? void 0 : _c.toLowerCase()) || "";
      return model.includes(term);
    });
  });
  const manualProviderId = computed(() => {
    if (!selectedProviderSource.value) return "";
    const modelId = manualModelId.value.trim();
    if (!modelId) return "";
    return `${selectedProviderSource.value.id}/${modelId}`;
  });
  const basicSourceConfig = computed(() => {
    if (!editableProviderSource.value) return null;
    const fields = ["id", "key", "api_base"];
    const basic = {};
    fields.forEach((field) => {
      Object.defineProperty(basic, field, {
        get() {
          return editableProviderSource.value[field];
        },
        set(val) {
          editableProviderSource.value[field] = val;
        },
        enumerable: true
      });
    });
    return basic;
  });
  const advancedSourceConfig = computed(() => {
    if (!editableProviderSource.value) return null;
    const excluded = /* @__PURE__ */ new Set(["id", "key", "api_base", "enable", "type", "provider_type", "provider"]);
    const advanced = {};
    for (const key of Object.keys(editableProviderSource.value)) {
      Object.defineProperty(advanced, key, {
        get() {
          return editableProviderSource.value[key];
        },
        set(val) {
          editableProviderSource.value[key] = val;
        },
        enumerable: !excluded.has(key)
      });
    }
    return advanced;
  });
  const filteredProviders = computed(() => {
    if (!providers.value || selectedProviderType.value === "chat_completion") {
      return [];
    }
    return providers.value.filter((provider) => getProviderType(provider) === selectedProviderType.value);
  });
  const providerSourceSchema = computed(() => {
    var _a, _b, _c, _d;
    if (!configSchema.value || !configSchema.value.provider) {
      return configSchema.value;
    }
    const customSchema = JSON.parse(JSON.stringify(configSchema.value));
    if ((_b = (_a = customSchema.provider) == null ? void 0 : _a.items) == null ? void 0 : _b.id) {
      customSchema.provider.items.id.hint = tm("providerSources.hints.id");
      customSchema.provider.items.key.hint = tm("providerSources.hints.key");
      customSchema.provider.items.api_base.hint = tm("providerSources.hints.apiBase");
    }
    if ((_d = (_c = customSchema.provider) == null ? void 0 : _c.items) == null ? void 0 : _d.proxy) {
      customSchema.provider.items.proxy.description = tm("providerSources.labels.proxy");
      customSchema.provider.items.proxy.hint = tm("providerSources.hints.proxy");
    }
    return customSchema;
  });
  watch(editableProviderSource, () => {
    if (suppressSourceWatch) return;
    if (!editableProviderSource.value) return;
    isSourceModified.value = true;
  }, { deep: true });
  function isTypeMatchingProviderType(type, providerType) {
    if (!type || !providerType) return false;
    if (providerType === "chat_completion") {
      return type.includes("chat_completion");
    }
    return type.includes(providerType);
  }
  function resolveSourceIcon(source) {
    if (!source) return "";
    return getProviderIcon(source.provider) || "";
  }
  function getSourceDisplayName(source) {
    if (!source) return "";
    if (source.isPlaceholder) return source.templateKey || source.id || "";
    return source.id;
  }
  function getModelMetadata(modelName) {
    var _a;
    if (!modelName) return null;
    return ((_a = modelMetadata.value) == null ? void 0 : _a[modelName]) || null;
  }
  function supportsImageInput(meta) {
    var _a;
    const inputs = ((_a = meta == null ? void 0 : meta.modalities) == null ? void 0 : _a.input) || [];
    return inputs.includes("image");
  }
  function supportsAudioInput(meta) {
    var _a;
    const inputs = ((_a = meta == null ? void 0 : meta.modalities) == null ? void 0 : _a.input) || [];
    return inputs.includes("audio");
  }
  function supportsToolCall(meta) {
    return Boolean(meta == null ? void 0 : meta.tool_call);
  }
  function supportsReasoning(meta) {
    return Boolean(meta == null ? void 0 : meta.reasoning);
  }
  function formatContextLimit(meta) {
    var _a;
    const ctx = (_a = meta == null ? void 0 : meta.limit) == null ? void 0 : _a.context;
    if (!ctx || typeof ctx !== "number") return "";
    if (ctx >= 1e6) return `${Math.round(ctx / 1e6)}M`;
    if (ctx >= 1e3) return `${Math.round(ctx / 1e3)}K`;
    return `${ctx}`;
  }
  function getProviderType(provider) {
    if (!provider) return void 0;
    if (provider.provider_type) {
      return provider.provider_type;
    }
    const oldVersionProviderTypeMapping = {
      openai_chat_completion: "chat_completion",
      anthropic_chat_completion: "chat_completion",
      googlegenai_chat_completion: "chat_completion",
      zhipu_chat_completion: "chat_completion",
      dashscope: "chat_completion",
      openai_whisper_api: "chat_completion",
      minimax_tts_api: "chat_completion"
    };
    return oldVersionProviderTypeMapping[provider.type];
  }
  function selectProviderSource(source) {
    if ((source == null ? void 0 : source.isPlaceholder) && source.templateKey) {
      addProviderSource(source.templateKey);
      return;
    }
    selectedProviderSource.value = source;
    selectedProviderSourceOriginalId.value = (source == null ? void 0 : source.id) || null;
    suppressSourceWatch = true;
    editableProviderSource.value = source ? ensureProviderSourceDefaults(JSON.parse(JSON.stringify(source))) : null;
    nextTick(() => {
      suppressSourceWatch = false;
    });
    availableModels.value = [];
    modelMetadata.value = {};
    isSourceModified.value = false;
  }
  function ensureProviderSourceDefaults(source) {
    if (!source || typeof source !== "object") {
      return source;
    }
    if (source.provider === "ollama" && source.ollama_disable_thinking === void 0) {
      source.ollama_disable_thinking = false;
    }
    return source;
  }
  function extractSourceFieldsFromTemplate(template) {
    const sourceFields = {};
    const excludeKeys = ["id", "enable", "model", "provider_source_id", "modalities", "custom_extra_body"];
    for (const [key, value] of Object.entries(template)) {
      if (!excludeKeys.includes(key)) {
        sourceFields[key] = value;
      }
    }
    return sourceFields;
  }
  function generateUniqueSourceId(baseId) {
    const existingIds = new Set(providerSources.value.map((s) => s.id));
    if (!existingIds.has(baseId)) return baseId;
    let counter = 1;
    let candidate = `${baseId}_${counter}`;
    while (existingIds.has(candidate)) {
      counter += 1;
      candidate = `${baseId}_${counter}`;
    }
    return candidate;
  }
  function addProviderSource(templateKey) {
    const template = providerTemplates.value[templateKey];
    if (!template) {
      showMessage("未找到对应的模板配置", "error");
      return;
    }
    const newId = generateUniqueSourceId(template.id);
    const newSource = ensureProviderSourceDefaults({
      ...extractSourceFieldsFromTemplate(template),
      id: newId,
      type: template.type,
      provider_type: template.provider_type,
      provider: template.provider,
      enable: true
    });
    providerSources.value.push(newSource);
    selectedProviderSource.value = newSource;
    selectedProviderSourceOriginalId.value = newId;
    editableProviderSource.value = JSON.parse(JSON.stringify(newSource));
    availableModels.value = [];
    modelMetadata.value = {};
    isSourceModified.value = true;
  }
  async function deleteProviderSource(source) {
    var _a;
    const confirmed = await askForConfirmation$1(
      tm("providerSources.deleteConfirm", { id: source.id })
    );
    if (!confirmed) return;
    try {
      await axios.post("/api/config/provider_sources/delete", { id: source.id });
      providers.value = providers.value.filter((p) => p.provider_source_id !== source.id);
      providerSources.value = providerSources.value.filter((s) => s.id !== source.id);
      if (((_a = selectedProviderSource.value) == null ? void 0 : _a.id) === source.id) {
        selectedProviderSource.value = null;
        selectedProviderSourceOriginalId.value = null;
        editableProviderSource.value = null;
      }
      showMessage(tm("providerSources.deleteSuccess"));
    } catch (error) {
      showMessage(error.message || tm("providerSources.deleteError"), "error");
    } finally {
      await loadConfig();
    }
  }
  async function saveProviderSource() {
    var _a, _b;
    if (!selectedProviderSource.value) return;
    savingSource.value = true;
    const originalId = selectedProviderSourceOriginalId.value || selectedProviderSource.value.id;
    try {
      const response = await axios.post("/api/config/provider_sources/update", {
        config: editableProviderSource.value,
        original_id: originalId
      });
      if (response.data.status !== "ok") {
        throw new Error(response.data.message);
      }
      if (editableProviderSource.value.id !== originalId) {
        providers.value = providers.value.map(
          (p) => p.provider_source_id === originalId ? { ...p, provider_source_id: editableProviderSource.value.id } : p
        );
        selectedProviderSourceOriginalId.value = editableProviderSource.value.id;
      }
      const idx = providerSources.value.findIndex((ps) => ps.id === originalId);
      if (idx !== -1) {
        providerSources.value[idx] = JSON.parse(JSON.stringify(editableProviderSource.value));
        selectedProviderSource.value = providerSources.value[idx];
      }
      suppressSourceWatch = true;
      editableProviderSource.value = selectedProviderSource.value;
      nextTick(() => {
        suppressSourceWatch = false;
      });
      isSourceModified.value = false;
      showMessage(response.data.message || tm("providerSources.saveSuccess"));
      return true;
    } catch (error) {
      showMessage(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message || tm("providerSources.saveError"), "error");
      return false;
    } finally {
      savingSource.value = false;
      loadConfig();
    }
  }
  async function fetchAvailableModels() {
    var _a, _b, _c;
    if (!selectedProviderSource.value) return;
    if (isSourceModified.value) {
      const saved = await saveProviderSource();
      if (!saved) {
        return;
      }
    }
    loadingModels.value = true;
    try {
      const sourceId = ((_a = editableProviderSource.value) == null ? void 0 : _a.id) || selectedProviderSource.value.id;
      const response = await axios.get("/api/config/provider_sources/models", {
        params: { source_id: sourceId }
      });
      if (response.data.status === "ok") {
        const metadataMap = response.data.data.model_metadata || {};
        modelMetadata.value = metadataMap;
        availableModels.value = (response.data.data.models || []).map((model) => ({
          name: model,
          metadata: (metadataMap == null ? void 0 : metadataMap[model]) || null
        }));
        if (availableModels.value.length === 0) {
          showMessage(tm("models.noModelsFound"), "info");
        }
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      modelMetadata.value = {};
      showMessage(((_c = (_b = error.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message) || error.message || tm("models.fetchError"), "error");
    } finally {
      loadingModels.value = false;
    }
  }
  async function addModelProvider(modelName) {
    var _a, _b, _c, _d;
    if (!selectedProviderSource.value) return;
    const sourceId = ((_a = editableProviderSource.value) == null ? void 0 : _a.id) || selectedProviderSource.value.id;
    const newId = `${sourceId}/${modelName}`;
    const metadata2 = getModelMetadata(modelName);
    let modalities;
    if (!metadata2) {
      modalities = ["text", "image", "audio", "tool_use"];
    } else {
      modalities = ["text"];
      if (supportsImageInput(metadata2)) {
        modalities.push("image");
      }
      if (supportsAudioInput(metadata2)) {
        modalities.push("audio");
      }
      if (supportsToolCall(metadata2)) {
        modalities.push("tool_use");
      }
    }
    let max_context_tokens = 0;
    if (((_b = metadata2 == null ? void 0 : metadata2.limit) == null ? void 0 : _b.context) && typeof metadata2.limit.context === "number") {
      max_context_tokens = metadata2.limit.context;
    }
    const newProvider = {
      id: newId,
      enable: false,
      provider_source_id: sourceId,
      model: modelName,
      modalities,
      custom_extra_body: {},
      max_context_tokens
    };
    try {
      const res = await axios.post("/api/config/provider/new", newProvider);
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      providers.value.push(newProvider);
      showMessage(res.data.message || tm("models.addSuccess", { model: modelName }));
    } catch (error) {
      showMessage(((_d = (_c = error.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message) || error.message || tm("providerSources.saveError"), "error");
    } finally {
      await loadConfig();
    }
  }
  function modelAlreadyConfigured(modelName) {
    return existingModelsForSelectedSource.value.has(modelName);
  }
  async function deleteProvider(provider) {
    const confirmed = await askForConfirmation$1(tm("models.deleteConfirm", { id: provider.id }));
    if (!confirmed) return;
    try {
      await axios.post("/api/config/provider/delete", { id: provider.id });
      providers.value = providers.value.filter((p) => p.id !== provider.id);
      showMessage(tm("models.deleteSuccess"));
    } catch (error) {
      showMessage(error.message || tm("models.deleteError"), "error");
    } finally {
      await loadConfig();
    }
  }
  async function testProvider(provider) {
    var _a, _b, _c, _d;
    testingProviders.value.push(provider.id);
    try {
      const startTime = performance.now();
      const response = await axios.get("/api/config/provider/check_one", { params: { id: provider.id } });
      if (response.data.status === "ok" && response.data.data.error === null) {
        const latency = Math.max(0, Math.round(performance.now() - startTime));
        showMessage(tm("models.testSuccessWithLatency", { id: provider.id, latency }));
      } else {
        throw new Error(((_a = response.data.data) == null ? void 0 : _a.error) || ((_b = response.data) == null ? void 0 : _b.message) || tm("models.testError"));
      }
    } catch (error) {
      showMessage(((_d = (_c = error.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message) || error.message || tm("models.testError"), "error");
    } finally {
      testingProviders.value = testingProviders.value.filter((id) => id !== provider.id);
    }
  }
  async function loadConfig() {
    loadProviderTemplate();
  }
  async function loadProviderTemplate() {
    var _a;
    try {
      const response = await axios.get("/api/config/provider/template");
      if (response.data.status === "ok") {
        configSchema.value = response.data.data.config_schema || {};
        if ((_a = configSchema.value.provider) == null ? void 0 : _a.config_template) {
          providerTemplates.value = configSchema.value.provider.config_template;
        }
        providerSources.value = response.data.data.provider_sources || [];
        providers.value = response.data.data.providers || [];
      }
    } catch (error) {
      console.error("Failed to load provider template:", error);
    }
  }
  function updateDefaultTab(value) {
    selectedProviderType.value = resolveDefaultTab(value);
  }
  onMounted(async () => {
    await loadProviderTemplate();
  });
  return {
    // state
    config,
    metadata,
    providerSources,
    providers,
    selectedProviderType,
    selectedProviderSource,
    selectedProviderSourceOriginalId,
    editableProviderSource,
    availableModels,
    modelMetadata,
    loadingModels,
    savingSource,
    testingProviders,
    isSourceModified,
    configSchema,
    providerTemplates,
    manualModelId,
    modelSearch,
    // computed
    providerTypes,
    availableSourceTypes,
    displayedProviderSources,
    sourceProviders,
    mergedModelEntries,
    filteredMergedModelEntries,
    filteredProviders,
    basicSourceConfig,
    advancedSourceConfig,
    manualProviderId,
    providerSourceSchema,
    // helpers
    resolveSourceIcon,
    getSourceDisplayName,
    getModelMetadata,
    supportsImageInput,
    supportsAudioInput,
    supportsToolCall,
    supportsReasoning,
    formatContextLimit,
    getProviderType,
    // methods
    updateDefaultTab,
    selectProviderSource,
    addProviderSource,
    deleteProviderSource,
    saveProviderSource,
    fetchAvailableModels,
    addModelProvider,
    deleteProvider,
    modelAlreadyConfigured,
    testProvider,
    loadConfig,
    loadProviderTemplate
  };
}
export {
  ProviderSourcesPanel as P,
  ProviderModelsPanel as a,
  getProviderDescription as b,
  getProviderIcon as g,
  useProviderSources as u
};
