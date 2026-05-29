import { V as VueMonacoEditor } from "./index-C8VKoOg6.js";
import { T as TemplateListEditor, C as ConfigItemRenderer, u as useToast } from "./TemplateListEditor-BdN-RGpI.js";
import { _ as _export_sfc, a5 as useI18n, u as useModuleI18n, H as computed, L as ref, C as resolveComponent, o as openBlock, c as createElementBlock, b as createVNode, w as withCtx, d as createTextVNode, t as toDisplayString, a as createBaseVNode, ah as VListItemTitle, i as createCommentVNode, aB as VListItemSubtitle, h as createBlock, k as VAlert, F as Fragment, r as renderList, aw as VExpandTransition, ab as VRow, ad as VCol, ag as VListItem, x as VDivider, v as VCardText, s as VCard, aC as VToolbar, e as VBtn, l as VIcon, aD as VToolbarTitle, $ as unref, V as VSpacer, aE as VToolbarItems, ai as VDialog, B as axios } from "./index-BCHR8lhs.js";
const _hoisted_1 = {
  key: 0,
  class: "config-section"
};
const _hoisted_2 = { class: "metadata-key" };
const _hoisted_3 = {
  key: 0,
  class: "important-hint"
};
const _hoisted_4 = {
  key: 0,
  class: "object-config"
};
const _hoisted_5 = {
  key: 0,
  class: "nested-object"
};
const _hoisted_6 = {
  key: 0,
  class: "nested-container"
};
const _hoisted_7 = {
  key: 1,
  class: "nested-object w-100"
};
const _hoisted_8 = {
  key: 0,
  class: "nested-container"
};
const _hoisted_9 = { class: "config-section mb-2" };
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { class: "property-key" };
const _hoisted_12 = { key: 1 };
const _hoisted_13 = {
  key: 0,
  class: "important-hint"
};
const _hoisted_14 = { key: 0 };
const _hoisted_15 = { class: "property-key" };
const _hoisted_16 = { key: 1 };
const _hoisted_17 = {
  key: 0,
  class: "important-hint"
};
const _hoisted_18 = {
  key: 1,
  class: "simple-config"
};
const _hoisted_19 = { class: "property-key" };
const _hoisted_20 = {
  key: 0,
  class: "important-hint"
};
const _sfc_main = {
  __name: "AstrBotConfig",
  props: {
    metadata: {
      type: Object,
      required: true
    },
    iterable: {
      type: Object,
      required: true
    },
    metadataKey: {
      type: String,
      required: true
    },
    pluginName: {
      type: String,
      default: ""
    },
    pathPrefix: {
      type: String,
      default: ""
    },
    isEditing: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const { tm, getRaw } = useModuleI18n("features/config-metadata");
    const translateIfKey = (value) => {
      if (!value || typeof value !== "string") return value;
      return getRaw(value) ? tm(value) : value;
    };
    const filteredIterable = computed(() => {
      if (!props.iterable) return {};
      const { hint, ...rest } = props.iterable;
      return rest;
    });
    const providerHint = computed(() => {
      var _a;
      const hint = (_a = props.iterable) == null ? void 0 : _a.hint;
      if (typeof hint !== "string" || !hint) return "";
      if (hint === "provider_group.provider.openai_embedding.hint" || hint === "provider_group.provider.gemini_embedding.hint") {
        return "";
      }
      return hint;
    });
    const getItemHint = (itemKey, itemMeta) => {
      var _a;
      if (itemMeta == null ? void 0 : itemMeta.hint) return itemMeta.hint;
      if (itemKey !== "embedding_api_base") return "";
      const providerType = (_a = props.iterable) == null ? void 0 : _a.type;
      if (providerType === "openai_embedding") {
        return getRaw("provider_group.provider.openai_embedding.hint") ? "provider_group.provider.openai_embedding.hint" : "";
      }
      if (providerType === "gemini_embedding") {
        return getRaw("provider_group.provider.gemini_embedding.hint") ? "provider_group.provider.gemini_embedding.hint" : "";
      }
      return "";
    };
    const dialog = ref(false);
    const currentEditingKey = ref("");
    const currentEditingLanguage = ref("json");
    const currentEditingTheme = ref("vs-light");
    let currentEditingKeyIterable = null;
    const loadingEmbeddingDim = ref(false);
    function openEditorDialog(key, value, theme, language) {
      currentEditingKey.value = key;
      currentEditingLanguage.value = language || "json";
      currentEditingTheme.value = theme || "vs-light";
      currentEditingKeyIterable = value;
      dialog.value = true;
    }
    function saveEditedContent() {
      dialog.value = false;
    }
    async function getEmbeddingDimensions(providerConfig) {
      var _a;
      if (loadingEmbeddingDim.value) return;
      loadingEmbeddingDim.value = true;
      try {
        const response = await axios.post("/api/config/provider/get_embedding_dim", {
          provider_config: providerConfig
        });
        if (response.data.status != "error" && ((_a = response.data.data) == null ? void 0 : _a.embedding_dimensions)) {
          console.log(response.data.data.embedding_dimensions);
          providerConfig.embedding_dimensions = response.data.data.embedding_dimensions;
          useToast().success("获取成功: " + response.data.data.embedding_dimensions);
        } else {
          useToast().error(response.data.message);
        }
      } catch (error) {
        console.error("Error getting embedding dimensions:", error);
      } finally {
        loadingEmbeddingDim.value = false;
      }
    }
    function getValueBySelector(obj, selector) {
      const keys = selector.split(".");
      let current = obj;
      for (const key of keys) {
        if (current && typeof current === "object" && key in current) {
          current = current[key];
        } else {
          return void 0;
        }
      }
      return current;
    }
    function shouldShowItem(itemMeta, itemKey) {
      if (!(itemMeta == null ? void 0 : itemMeta.condition)) {
        return true;
      }
      for (const [conditionKey, expectedValue] of Object.entries(itemMeta.condition)) {
        const actualValue = getValueBySelector(props.iterable, conditionKey);
        if (actualValue !== expectedValue) {
          return false;
        }
      }
      return true;
    }
    function getItemPath(key) {
      return props.pathPrefix ? `${props.pathPrefix}.${key}` : key;
    }
    function hasVisibleItemsAfter(items, currentIndex) {
      const itemEntries = Object.entries(items);
      for (let i = currentIndex + 1; i < itemEntries.length; i++) {
        const [itemKey, itemValue] = itemEntries[i];
        const itemMeta = props.metadata[props.metadataKey].items[itemKey];
        if (!(itemMeta == null ? void 0 : itemMeta.invisible) && shouldShowItem(itemMeta)) {
          return true;
        }
      }
      return false;
    }
    return (_ctx, _cache) => {
      var _a;
      const _component_AstrBotConfig = resolveComponent("AstrBotConfig", true);
      return openBlock(), createElementBlock(Fragment, null, [
        __props.iterable && ((_a = __props.metadata[__props.metadataKey]) == null ? void 0 : _a.type) === "object" ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(VListItemTitle, { class: "config-title" }, {
            default: withCtx(() => {
              var _a2;
              return [
                createTextVNode(toDisplayString(translateIfKey((_a2 = __props.metadata[__props.metadataKey]) == null ? void 0 : _a2.description)) + " ", 1),
                createBaseVNode("span", _hoisted_2, "(" + toDisplayString(__props.metadataKey) + ")", 1)
              ];
            }),
            _: 1
          }),
          createVNode(VListItemSubtitle, { class: "config-hint" }, {
            default: withCtx(() => {
              var _a2, _b, _c;
              return [
                ((_a2 = __props.metadata[__props.metadataKey]) == null ? void 0 : _a2.obvious_hint) && ((_b = __props.metadata[__props.metadataKey]) == null ? void 0 : _b.hint) ? (openBlock(), createElementBlock("span", _hoisted_3, "‼️")) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString(translateIfKey((_c = __props.metadata[__props.metadataKey]) == null ? void 0 : _c.hint)), 1)
              ];
            }),
            _: 1
          })
        ])) : createCommentVNode("", true),
        createVNode(VCardText, { class: "px-0 py-1" }, {
          default: withCtx(() => {
            var _a2, _b;
            return [
              ((_a2 = __props.metadata[__props.metadataKey]) == null ? void 0 : _a2.type) === "object" || ((_b = __props.metadata[__props.metadataKey]) == null ? void 0 : _b.config_template) ? (openBlock(), createElementBlock("div", _hoisted_4, [
                providerHint.value ? (openBlock(), createBlock(VAlert, {
                  key: 0,
                  type: "info",
                  variant: "tonal",
                  class: "mb-4",
                  border: "start",
                  density: "compact"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(translateIfKey(providerHint.value)), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(filteredIterable.value, (val, key, index) => {
                  var _a3, _b2, _c, _d, _e, _f, _g;
                  return openBlock(), createElementBlock("div", {
                    key,
                    class: "config-item"
                  }, [
                    ((_a3 = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _a3.type) === "object" ? (openBlock(), createElementBlock("div", _hoisted_5, [
                      __props.metadata[__props.metadataKey].items[key] && !((_b2 = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _b2.invisible) && shouldShowItem(__props.metadata[__props.metadataKey].items[key], key) ? (openBlock(), createElementBlock("div", _hoisted_6, [
                        createVNode(VExpandTransition, null, {
                          default: withCtx(() => [
                            createVNode(_component_AstrBotConfig, {
                              metadata: __props.metadata[__props.metadataKey].items,
                              iterable: __props.iterable[key],
                              metadataKey: key,
                              pluginName: __props.pluginName,
                              pathPrefix: getItemPath(key)
                            }, null, 8, ["metadata", "iterable", "metadataKey", "pluginName", "pathPrefix"])
                          ]),
                          _: 2
                        }, 1024)
                      ])) : createCommentVNode("", true)
                    ])) : ((_c = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _c.type) === "template_list" ? (openBlock(), createElementBlock("div", _hoisted_7, [
                      !((_d = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _d.invisible) && shouldShowItem(__props.metadata[__props.metadataKey].items[key], key) ? (openBlock(), createElementBlock("div", _hoisted_8, [
                        createBaseVNode("div", _hoisted_9, [
                          createVNode(VListItemTitle, { class: "config-title" }, {
                            default: withCtx(() => {
                              var _a4, _b3;
                              return [
                                ((_a4 = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _a4.description) ? (openBlock(), createElementBlock("span", _hoisted_10, [
                                  createTextVNode(toDisplayString(translateIfKey((_b3 = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _b3.description)) + " ", 1),
                                  createBaseVNode("span", _hoisted_11, "(" + toDisplayString(key) + ")", 1)
                                ])) : (openBlock(), createElementBlock("span", _hoisted_12, toDisplayString(key), 1))
                              ];
                            }),
                            _: 2
                          }, 1024),
                          createVNode(VListItemSubtitle, { class: "config-hint" }, {
                            default: withCtx(() => {
                              var _a4, _b3, _c2;
                              return [
                                ((_a4 = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _a4.obvious_hint) && ((_b3 = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _b3.hint) ? (openBlock(), createElementBlock("span", _hoisted_13, "‼️")) : createCommentVNode("", true),
                                createTextVNode(" " + toDisplayString(translateIfKey((_c2 = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _c2.hint)), 1)
                              ];
                            }),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode(TemplateListEditor, {
                          modelValue: __props.iterable[key],
                          "onUpdate:modelValue": ($event) => __props.iterable[key] = $event,
                          templates: ((_e = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _e.templates) || {},
                          class: "config-field"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "templates"])
                      ])) : createCommentVNode("", true)
                    ])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                      !((_f = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _f.invisible) && shouldShowItem(__props.metadata[__props.metadataKey].items[key], key) ? (openBlock(), createBlock(VRow, {
                        key: 0,
                        class: "config-row"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            class: "property-info"
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItem, { density: "compact" }, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "property-name" }, {
                                    default: withCtx(() => {
                                      var _a4, _b3;
                                      return [
                                        ((_a4 = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _a4.description) ? (openBlock(), createElementBlock("span", _hoisted_14, [
                                          createTextVNode(toDisplayString(translateIfKey((_b3 = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _b3.description)) + " ", 1),
                                          createBaseVNode("span", _hoisted_15, "(" + toDisplayString(key) + ")", 1)
                                        ])) : (openBlock(), createElementBlock("span", _hoisted_16, toDisplayString(key), 1))
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, { class: "property-hint" }, {
                                    default: withCtx(() => {
                                      var _a4;
                                      return [
                                        ((_a4 = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _a4.obvious_hint) && getItemHint(key, __props.metadata[__props.metadataKey].items[key]) ? (openBlock(), createElementBlock("span", _hoisted_17, "‼️")) : createCommentVNode("", true),
                                        createTextVNode(" " + toDisplayString(translateIfKey(getItemHint(key, __props.metadata[__props.metadataKey].items[key]))), 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            class: "config-input"
                          }, {
                            default: withCtx(() => {
                              var _a4;
                              return [
                                createVNode(ConfigItemRenderer, {
                                  modelValue: __props.iterable[key],
                                  "onUpdate:modelValue": ($event) => __props.iterable[key] = $event,
                                  "item-meta": __props.metadata[__props.metadataKey].items[key] || null,
                                  "plugin-name": __props.pluginName,
                                  "config-key": getItemPath(key),
                                  loading: loadingEmbeddingDim.value,
                                  "show-fullscreen-btn": !!((_a4 = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _a4.editor_mode),
                                  onGetEmbeddingDim: _cache[0] || (_cache[0] = ($event) => getEmbeddingDimensions(__props.iterable)),
                                  onOpenFullscreen: ($event) => {
                                    var _a5, _b3;
                                    return openEditorDialog(key, __props.iterable, (_a5 = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _a5.editor_theme, (_b3 = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _b3.editor_language);
                                  }
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "item-meta", "plugin-name", "config-key", "loading", "show-fullscreen-btn", "onOpenFullscreen"])
                              ];
                            }),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      hasVisibleItemsAfter(filteredIterable.value, index) && !((_g = __props.metadata[__props.metadataKey].items[key]) == null ? void 0 : _g.invisible) && shouldShowItem(__props.metadata[__props.metadataKey].items[key], key) ? (openBlock(), createBlock(VDivider, {
                        key: 1,
                        class: "config-divider"
                      })) : createCommentVNode("", true)
                    ], 64))
                  ]);
                }), 128))
              ])) : (openBlock(), createElementBlock("div", _hoisted_18, [
                createVNode(VRow, { class: "config-row" }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "7",
                      class: "property-info"
                    }, {
                      default: withCtx(() => [
                        createVNode(VListItem, { density: "compact" }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "property-name" }, {
                              default: withCtx(() => {
                                var _a3;
                                return [
                                  createTextVNode(toDisplayString((_a3 = __props.metadata[__props.metadataKey]) == null ? void 0 : _a3.description) + " ", 1),
                                  createBaseVNode("span", _hoisted_19, "(" + toDisplayString(__props.metadataKey) + ")", 1)
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(VListItemSubtitle, { class: "property-hint" }, {
                              default: withCtx(() => {
                                var _a3, _b2, _c;
                                return [
                                  ((_a3 = __props.metadata[__props.metadataKey]) == null ? void 0 : _a3.obvious_hint) && ((_b2 = __props.metadata[__props.metadataKey]) == null ? void 0 : _b2.hint) ? (openBlock(), createElementBlock("span", _hoisted_20, "‼️")) : createCommentVNode("", true),
                                  createTextVNode(" " + toDisplayString((_c = __props.metadata[__props.metadataKey]) == null ? void 0 : _c.hint), 1)
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "5",
                      class: "config-input"
                    }, {
                      default: withCtx(() => {
                        var _a3, _b2, _c;
                        return [
                          ((_a3 = __props.metadata[__props.metadataKey]) == null ? void 0 : _a3.type) === "template_list" && !((_b2 = __props.metadata[__props.metadataKey]) == null ? void 0 : _b2.invisible) ? (openBlock(), createBlock(TemplateListEditor, {
                            key: 0,
                            modelValue: __props.iterable[__props.metadataKey],
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => __props.iterable[__props.metadataKey] = $event),
                            templates: ((_c = __props.metadata[__props.metadataKey]) == null ? void 0 : _c.templates) || {},
                            class: "config-field"
                          }, null, 8, ["modelValue", "templates"])) : (openBlock(), createBlock(ConfigItemRenderer, {
                            key: 1,
                            modelValue: __props.iterable[__props.metadataKey],
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => __props.iterable[__props.metadataKey] = $event),
                            "item-meta": __props.metadata[__props.metadataKey],
                            "plugin-name": __props.pluginName,
                            "config-key": getItemPath(__props.metadataKey)
                          }, null, 8, ["modelValue", "item-meta", "plugin-name", "config-key"]))
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VDivider, { class: "my-2 config-divider" })
              ]))
            ];
          }),
          _: 1
        }),
        createVNode(VDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => dialog.value = $event),
          fullscreen: "",
          transition: "dialog-bottom-transition",
          scrollable: ""
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VToolbar, {
                  color: "primary",
                  dark: ""
                }, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      icon: "",
                      onClick: _cache[3] || (_cache[3] = ($event) => dialog.value = false)
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
                    }),
                    createVNode(VToolbarTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("core.common.editor.editingTitle")) + " - " + toDisplayString(currentEditingKey.value), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VSpacer),
                    createVNode(VToolbarItems, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "text",
                          onClick: saveEditedContent
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)("core.common.save")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCardText, { class: "pa-0" }, {
                  default: withCtx(() => [
                    createVNode(unref(VueMonacoEditor), {
                      theme: currentEditingTheme.value,
                      language: currentEditingLanguage.value,
                      style: { "height": "calc(100vh - 64px)" },
                      value: unref(currentEditingKeyIterable)[currentEditingKey.value],
                      "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(currentEditingKeyIterable)[currentEditingKey.value] = $event)
                    }, null, 8, ["theme", "language", "value"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
};
const AstrBotConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-977b1824"]]);
export {
  AstrBotConfig as A
};
