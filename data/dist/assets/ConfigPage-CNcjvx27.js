import { _ as _export_sfc, u as useModuleI18n, L as ref, H as computed, J as watch, M as onMounted, R as onBeforeUnmount, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, $ as unref, b as createVNode, aj as VProgressCircular, h as createBlock, w as withCtx, d as createTextVNode, g as VChip, F as Fragment, r as renderList, a2 as mergeProps, a7 as VTooltip, i as createCommentVNode, B as axios, a5 as useI18n, v as VCardText, ah as VListItemTitle, aB as VListItemSubtitle, ab as VRow, ag as VListItem, ad as VCol, x as VDivider, l as VIcon, s as VCard, aC as VToolbar, e as VBtn, aD as VToolbarTitle, V as VSpacer, aE as VToolbarItems, ai as VDialog, n as VTab, p as VTabs, ao as VContainer, bo as VTabsWindowItem, U as normalizeStyle, bp as VTabsWindow, T as normalizeClass, k as VAlert, C as resolveComponent, D as defineComponent, bd as reactive, be as VOverlay, N as nextTick, a6 as VCardTitle, a9 as VCardActions, b9 as WaitingForRestart, f as VSelect, j as VTextField, aR as VBanner, bq as VSlideYTransition, af as VList, am as VSnackbar } from "./index-Chcpfqng.js";
import { M as MarkdownIt } from "./index-CYlPdpJH.js";
import { V as VueMonacoEditor } from "./index-BixEDlUI.js";
import { T as TemplateListEditor, C as ConfigItemRenderer } from "./TemplateListEditor-BfZeH0Mp.js";
import { h as he, j as useMessages, _ as _sfc_main$6, R as RefNode, c as ReasoningBlock, d as _sfc_main$7, I as IPythonToolBlock, T as ToolCallItem, e as ToolCallCard, g as messageBlocks, i as displayParts } from "./useMessages-DGqgwFcm.js";
import { u as useMediaHandling, b as buildWebchatUmoDetails, C as ChatInput } from "./useMediaHandling-BcmRRPzA.js";
import { u as useCustomizerStore } from "./customizer-BzxovCAs.js";
import { r as restartAstrBot } from "./restartAstrBot-DMSMLLi8.js";
import { a as askForConfirmation, u as useConfirmDialog } from "./confirmDialog-B44ViVrb.js";
import { n as normalizeTextInput } from "./inputValue-BqQtgRan.js";
import "./PersonaForm-W_aO9x4p.js";
import "./shiki-BxHi4c-e.js";
import "./StyledMenu.vue_vue_type_style_index_0_lang-DijVCElC.js";
const _hoisted_1$5 = { class: "persona-preview-card" };
const _hoisted_2$4 = { class: "preview-header" };
const _hoisted_3$4 = {
  key: 0,
  class: "preview-loading"
};
const _hoisted_4$4 = { class: "text-grey" };
const _hoisted_5$4 = {
  key: 1,
  class: "preview-empty"
};
const _hoisted_6$3 = { class: "text-grey" };
const _hoisted_7$3 = {
  key: 2,
  class: "preview-empty"
};
const _hoisted_8$3 = { class: "text-grey" };
const _hoisted_9$3 = {
  key: 3,
  class: "preview-content"
};
const _hoisted_10$3 = { class: "section-title" };
const _hoisted_11$3 = { class: "prompt-content" };
const _hoisted_12$3 = { class: "section-title mt-3" };
const _hoisted_13$3 = { class: "chip-wrap tools-wrap" };
const _hoisted_14$3 = {
  key: 1,
  class: "text-grey tool-meta"
};
const _hoisted_15$3 = { key: 0 };
const _hoisted_16$3 = { key: 1 };
const _hoisted_17$2 = {
  key: 2,
  class: "text-grey"
};
const _hoisted_18$2 = { class: "section-title mt-3" };
const _hoisted_19$1 = { class: "chip-wrap" };
const _hoisted_20$1 = {
  key: 2,
  class: "text-grey"
};
const _sfc_main$5 = {
  __name: "PersonaQuickPreview",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const { tm } = useModuleI18n("core.shared");
    const loading = ref(false);
    const personaData = ref(null);
    const toolMetaMap = ref({});
    const availableSkills = ref([]);
    const defaultPersonaData = {
      persona_id: "default",
      system_prompt: "You are a helpful and friendly assistant.",
      tools: null,
      skills: null
    };
    const normalizedTools = computed(() => {
      var _a;
      return Array.isArray((_a = personaData.value) == null ? void 0 : _a.tools) ? personaData.value.tools : [];
    });
    const normalizedSkills = computed(() => {
      var _a;
      return Array.isArray((_a = personaData.value) == null ? void 0 : _a.skills) ? personaData.value.skills : [];
    });
    const allToolsCount = computed(
      () => Object.values(toolMetaMap.value).filter((tool) => tool.origin !== "builtin").length
    );
    const allSkillsCount = computed(() => availableSkills.value.length);
    const resolvedTools = computed(
      () => normalizedTools.value.map((toolName) => {
        const meta = toolMetaMap.value[toolName] || {};
        return {
          name: toolName,
          origin: meta.origin || "",
          origin_name: meta.origin_name || "",
          active: meta.active
        };
      })
    );
    async function loadToolsMeta() {
      var _a, _b;
      try {
        const response = await axios.get("/api/tools/list");
        if (((_a = response.data) == null ? void 0 : _a.status) === "ok") {
          const tools = ((_b = response.data) == null ? void 0 : _b.data) || [];
          const nextMap = {};
          for (const tool of tools) {
            if (!(tool == null ? void 0 : tool.name)) {
              continue;
            }
            nextMap[tool.name] = {
              origin: tool.origin || "",
              origin_name: tool.origin_name || "",
              active: tool.active
            };
          }
          toolMetaMap.value = nextMap;
        }
      } catch (error) {
        console.error("Failed to load tools metadata:", error);
        toolMetaMap.value = {};
      }
    }
    async function loadSkillsMeta() {
      var _a, _b;
      try {
        const response = await axios.get("/api/skills");
        if (((_a = response.data) == null ? void 0 : _a.status) === "ok") {
          const payload = ((_b = response.data) == null ? void 0 : _b.data) || [];
          if (Array.isArray(payload)) {
            availableSkills.value = payload.filter((skill) => skill.active !== false);
          } else {
            const skills = payload.skills || [];
            availableSkills.value = skills.filter((skill) => skill.active !== false);
          }
        } else {
          availableSkills.value = [];
        }
      } catch (error) {
        console.error("Failed to load skills metadata:", error);
        availableSkills.value = [];
      }
    }
    async function loadPersonaPreview(personaId) {
      var _a, _b;
      if (!personaId) {
        personaData.value = null;
        return;
      }
      if (personaId === "default") {
        personaData.value = defaultPersonaData;
        return;
      }
      loading.value = true;
      try {
        const response = await axios.get("/api/persona/list");
        if (((_a = response.data) == null ? void 0 : _a.status) === "ok") {
          const personas = ((_b = response.data) == null ? void 0 : _b.data) || [];
          personaData.value = personas.find((item) => item.persona_id === personaId) || null;
        } else {
          personaData.value = null;
        }
      } catch (error) {
        console.error("Failed to load persona preview:", error);
        personaData.value = null;
      } finally {
        loading.value = false;
      }
    }
    function handlePersonaSaved() {
      if (props.modelValue) {
        loadPersonaPreview(props.modelValue);
      }
    }
    watch(
      () => props.modelValue,
      (newValue) => {
        loadPersonaPreview(newValue);
      },
      { immediate: true }
    );
    loadToolsMeta();
    loadSkillsMeta();
    onMounted(() => {
      window.addEventListener("astrbot:persona-saved", handlePersonaSaved);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("astrbot:persona-saved", handlePersonaSaved);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("small", null, toDisplayString(unref(tm)("personaQuickPreview.title")), 1)
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_3$4, [
          createVNode(VProgressCircular, {
            indeterminate: "",
            size: "18",
            width: "2",
            color: "primary",
            class: "mr-2"
          }),
          createBaseVNode("small", _hoisted_4$4, toDisplayString(unref(tm)("personaQuickPreview.loading")), 1)
        ])) : !__props.modelValue ? (openBlock(), createElementBlock("div", _hoisted_5$4, [
          createBaseVNode("small", _hoisted_6$3, toDisplayString(unref(tm)("personaQuickPreview.noPersonaSelected")), 1)
        ])) : !personaData.value ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
          createBaseVNode("small", _hoisted_8$3, toDisplayString(unref(tm)("personaQuickPreview.personaNotFound")), 1)
        ])) : (openBlock(), createElementBlock("div", _hoisted_9$3, [
          createBaseVNode("div", _hoisted_10$3, toDisplayString(unref(tm)("personaQuickPreview.systemPromptLabel")), 1),
          createBaseVNode("pre", _hoisted_11$3, toDisplayString(personaData.value.system_prompt || ""), 1),
          createBaseVNode("div", _hoisted_12$3, toDisplayString(unref(tm)("personaQuickPreview.toolsLabel")), 1),
          createBaseVNode("div", _hoisted_13$3, [
            personaData.value.tools === null ? (openBlock(), createBlock(VChip, {
              key: 0,
              size: "small",
              color: "success",
              variant: "tonal",
              label: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(tm)("personaQuickPreview.allToolsWithCount", { count: allToolsCount.value })), 1)
              ]),
              _: 1
            })) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(resolvedTools.value, (tool) => {
              return openBlock(), createElementBlock("div", {
                key: tool.name,
                class: "tool-item"
              }, [
                createVNode(VChip, {
                  size: "small",
                  color: tool.active === false ? "warning" : "primary",
                  variant: "outlined",
                  label: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(tool.name), 1)
                  ]),
                  _: 2
                }, 1032, ["color"]),
                tool.active === false ? (openBlock(), createBlock(VTooltip, {
                  key: 0,
                  location: "top"
                }, {
                  activator: withCtx(({ props: tooltipProps }) => [
                    createBaseVNode("small", mergeProps({ class: "text-warning tool-inactive" }, tooltipProps), toDisplayString(unref(tm)("personaQuickPreview.toolInactive")), 17)
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" " + toDisplayString(unref(tm)("personaQuickPreview.toolInactiveTooltip")), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                tool.origin || tool.origin_name ? (openBlock(), createElementBlock("small", _hoisted_14$3, [
                  tool.origin ? (openBlock(), createElementBlock("span", _hoisted_15$3, toDisplayString(unref(tm)("personaQuickPreview.originLabel")) + ": " + toDisplayString(tool.origin), 1)) : createCommentVNode("", true),
                  tool.origin_name ? (openBlock(), createElementBlock("span", _hoisted_16$3, " | " + toDisplayString(unref(tm)("personaQuickPreview.originNameLabel")) + ": " + toDisplayString(tool.origin_name), 1)) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ]);
            }), 128)),
            personaData.value.tools !== null && normalizedTools.value.length === 0 ? (openBlock(), createElementBlock("small", _hoisted_17$2, toDisplayString(unref(tm)("personaQuickPreview.noTools")), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_18$2, toDisplayString(unref(tm)("personaQuickPreview.skillsLabel")), 1),
          createBaseVNode("div", _hoisted_19$1, [
            personaData.value.skills === null ? (openBlock(), createBlock(VChip, {
              key: 0,
              size: "small",
              color: "success",
              variant: "tonal",
              label: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(tm)("personaQuickPreview.allSkillsWithCount", { count: allSkillsCount.value })), 1)
              ]),
              _: 1
            })) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(normalizedSkills.value, (skillName) => {
              return openBlock(), createBlock(VChip, {
                key: skillName,
                size: "small",
                color: "primary",
                variant: "outlined",
                label: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(skillName), 1)
                ]),
                _: 2
              }, 1024);
            }), 128)),
            personaData.value.skills !== null && normalizedSkills.value.length === 0 ? (openBlock(), createElementBlock("small", _hoisted_20$1, toDisplayString(unref(tm)("personaQuickPreview.noSkills")), 1)) : createCommentVNode("", true)
          ])
        ]))
      ]);
    };
  }
};
const PersonaQuickPreview = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-ced9e961"]]);
const _hoisted_1$4 = {
  key: 0,
  class: "important-hint"
};
const _hoisted_2$3 = ["innerHTML"];
const _hoisted_3$3 = {
  key: 1,
  class: "object-config"
};
const _hoisted_4$3 = { class: "property-key" };
const _hoisted_5$3 = {
  key: 0,
  class: "important-hint"
};
const _hoisted_6$2 = ["innerHTML"];
const _hoisted_7$2 = {
  key: 0,
  class: "selected-plugins-full-width"
};
const _hoisted_8$2 = { class: "plugins-header" };
const _hoisted_9$2 = { class: "text-grey" };
const _hoisted_10$2 = { class: "d-flex flex-wrap ga-2 mt-2" };
const _hoisted_11$2 = {
  key: 0,
  class: "collapsed-config-section"
};
const _hoisted_12$2 = { class: "collapsed-config-toggle-row" };
const _hoisted_13$2 = { key: 0 };
const _hoisted_14$2 = { class: "property-key" };
const _hoisted_15$2 = {
  key: 0,
  class: "important-hint"
};
const _hoisted_16$2 = ["innerHTML"];
const _hoisted_17$1 = {
  key: 0,
  class: "selected-plugins-full-width"
};
const _hoisted_18$1 = { class: "plugins-header" };
const _hoisted_19 = { class: "text-grey" };
const _hoisted_20 = { class: "d-flex flex-wrap ga-2 mt-2" };
const _sfc_main$4 = {
  __name: "AstrBotConfigV4",
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
    searchKeyword: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const { tm } = useModuleI18n("features/config-metadata");
    const { tm: tmConfig } = useModuleI18n("features/config");
    const hintMarkdown = new MarkdownIt({
      linkify: true,
      breaks: true
    });
    const translateIfKey = (value) => {
      if (!value || typeof value !== "string") return value;
      return tm(value);
    };
    const renderHint = (value) => {
      const text = translateIfKey(value);
      if (!text) return "";
      return hintMarkdown.renderInline(text);
    };
    const dialog = ref(false);
    const showCollapsedItems = ref(false);
    const currentEditingKey = ref("");
    const currentEditingLanguage = ref("json");
    const currentEditingTheme = ref("vs-light");
    let currentEditingKeyIterable = null;
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
    function setValueBySelector(obj, selector, value) {
      const keys = selector.split(".");
      let current = obj;
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key] || typeof current[key] !== "object") {
          current[key] = {};
        }
        current = current[key];
      }
      current[keys[keys.length - 1]] = value;
    }
    function createSelectorModel(selector) {
      return computed({
        get() {
          return getValueBySelector(props.iterable, selector);
        },
        set(value) {
          setValueBySelector(props.iterable, selector, value);
        }
      });
    }
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
    function shouldShowItem(itemMeta, itemKey) {
      if (itemMeta == null ? void 0 : itemMeta.condition) {
        for (const [conditionKey, expectedValue] of Object.entries(itemMeta.condition)) {
          const actualValue = getValueBySelector(props.iterable, conditionKey);
          if (actualValue !== expectedValue) {
            return false;
          }
        }
      }
      const keyword = String(props.searchKeyword || "").trim().toLowerCase();
      if (!keyword) {
        return true;
      }
      const searchableText = [
        itemKey,
        translateIfKey((itemMeta == null ? void 0 : itemMeta.description) || ""),
        translateIfKey((itemMeta == null ? void 0 : itemMeta.hint) || "")
      ].join(" ").toLowerCase();
      return searchableText.includes(keyword);
    }
    function getVisibleItemEntries(collapsed = false) {
      var _a, _b;
      const sectionItems = ((_b = (_a = props.metadata) == null ? void 0 : _a[props.metadataKey]) == null ? void 0 : _b.items) || {};
      return Object.entries(sectionItems).filter(([itemKey, itemMeta]) => {
        const isCollapsed = Boolean(itemMeta == null ? void 0 : itemMeta.collapsed);
        return isCollapsed === collapsed && shouldShowItem(itemMeta, itemKey);
      });
    }
    function hasCollapsedItems() {
      return getVisibleItemEntries(true).length > 0;
    }
    function hasVisibleEntriesAfter(entries, currentIndex) {
      return currentIndex < entries.length - 1;
    }
    function areCollapsedItemsVisible() {
      if (!hasCollapsedItems()) {
        return false;
      }
      if (String(props.searchKeyword || "").trim()) {
        return true;
      }
      return showCollapsedItems.value;
    }
    function toggleCollapsedItems() {
      showCollapsedItems.value = !showCollapsedItems.value;
    }
    function shouldShowSection() {
      var _a, _b;
      const sectionMeta = props.metadata[props.metadataKey];
      if (!(sectionMeta == null ? void 0 : sectionMeta.condition)) {
        return true;
      }
      for (const [conditionKey, expectedValue] of Object.entries(sectionMeta.condition)) {
        const actualValue = getValueBySelector(props.iterable, conditionKey);
        if (actualValue !== expectedValue) {
          return false;
        }
      }
      const sectionItems = ((_b = (_a = props.metadata) == null ? void 0 : _a[props.metadataKey]) == null ? void 0 : _b.items) || {};
      const hasVisibleItems = Object.entries(sectionItems).some(([itemKey, itemMeta]) => shouldShowItem(itemMeta, itemKey));
      return hasVisibleItems;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        shouldShowSection() ? (openBlock(), createBlock(VCard, {
          key: 0,
          style: { "margin-bottom": "16px", "padding-bottom": "8px", "background-color": "rgb(var(--v-theme-background))" },
          rounded: "md",
          variant: "outlined"
        }, {
          default: withCtx(() => {
            var _a, _b;
            return [
              ((_a = __props.metadata[__props.metadataKey]) == null ? void 0 : _a.type) === "object" ? (openBlock(), createBlock(VCardText, {
                key: 0,
                class: "config-section",
                style: { "padding-bottom": "8px" }
              }, {
                default: withCtx(() => [
                  createVNode(VListItemTitle, { class: "config-title" }, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createTextVNode(toDisplayString(translateIfKey((_a2 = __props.metadata[__props.metadataKey]) == null ? void 0 : _a2.description)), 1)
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(VListItemSubtitle, { class: "config-hint" }, {
                    default: withCtx(() => {
                      var _a2, _b2, _c;
                      return [
                        ((_a2 = __props.metadata[__props.metadataKey]) == null ? void 0 : _a2.obvious_hint) && ((_b2 = __props.metadata[__props.metadataKey]) == null ? void 0 : _b2.hint) ? (openBlock(), createElementBlock("span", _hoisted_1$4, "‼️")) : createCommentVNode("", true),
                        createBaseVNode("span", {
                          innerHTML: renderHint((_c = __props.metadata[__props.metadataKey]) == null ? void 0 : _c.hint)
                        }, null, 8, _hoisted_2$3)
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              ((_b = __props.metadata[__props.metadataKey]) == null ? void 0 : _b.type) === "object" ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(getVisibleItemEntries(false), ([itemKey, itemMeta], index) => {
                  return openBlock(), createElementBlock("div", {
                    key: itemKey,
                    class: "config-item"
                  }, [
                    !(itemMeta == null ? void 0 : itemMeta.invisible) ? (openBlock(), createBlock(VRow, {
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
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(translateIfKey(itemMeta == null ? void 0 : itemMeta.description) || itemKey) + " ", 1),
                                    createBaseVNode("span", _hoisted_4$3, "(" + toDisplayString(itemKey) + ")", 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, { class: "property-hint" }, {
                                  default: withCtx(() => [
                                    (itemMeta == null ? void 0 : itemMeta.obvious_hint) && (itemMeta == null ? void 0 : itemMeta.hint) ? (openBlock(), createElementBlock("span", _hoisted_5$3, "‼️")) : createCommentVNode("", true),
                                    createBaseVNode("span", {
                                      innerHTML: renderHint(itemMeta == null ? void 0 : itemMeta.hint)
                                    }, null, 8, _hoisted_6$2)
                                  ]),
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
                          default: withCtx(() => [
                            (itemMeta == null ? void 0 : itemMeta.type) === "template_list" ? (openBlock(), createBlock(TemplateListEditor, {
                              key: 0,
                              modelValue: createSelectorModel(itemKey).value,
                              "onUpdate:modelValue": ($event) => createSelectorModel(itemKey).value = $event,
                              templates: (itemMeta == null ? void 0 : itemMeta.templates) || {},
                              class: "config-field"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "templates"])) : (openBlock(), createBlock(ConfigItemRenderer, {
                              key: 1,
                              modelValue: createSelectorModel(itemKey).value,
                              "onUpdate:modelValue": ($event) => createSelectorModel(itemKey).value = $event,
                              "item-meta": itemMeta || null,
                              "show-fullscreen-btn": !!(itemMeta == null ? void 0 : itemMeta.editor_mode),
                              onOpenFullscreen: ($event) => openEditorDialog(itemKey, __props.iterable, itemMeta == null ? void 0 : itemMeta.editor_theme, itemMeta == null ? void 0 : itemMeta.editor_language)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "item-meta", "show-fullscreen-btn", "onOpenFullscreen"]))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true),
                    !(itemMeta == null ? void 0 : itemMeta.invisible) && (itemMeta == null ? void 0 : itemMeta._special) === "select_plugin_set" ? (openBlock(), createBlock(VRow, {
                      key: 1,
                      class: "plugin-set-display-row"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          class: "plugin-set-display"
                        }, {
                          default: withCtx(() => [
                            createSelectorModel(itemKey).value && createSelectorModel(itemKey).value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_7$2, [
                              createBaseVNode("div", _hoisted_8$2, [
                                createBaseVNode("small", _hoisted_9$2, toDisplayString(unref(t)("core.shared.pluginSetSelector.selectedPluginsLabel")), 1)
                              ]),
                              createBaseVNode("div", _hoisted_10$2, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(createSelectorModel(itemKey).value || [], (plugin) => {
                                  return openBlock(), createBlock(VChip, {
                                    key: plugin,
                                    size: "small",
                                    label: "",
                                    color: "primary",
                                    variant: "outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(plugin === "*" ? unref(t)("core.shared.pluginSetSelector.allPluginsLabel") : plugin), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true),
                    !(itemMeta == null ? void 0 : itemMeta.invisible) && (itemMeta == null ? void 0 : itemMeta._special) === "select_persona" && itemKey === "provider_settings.default_personality" ? (openBlock(), createBlock(VRow, {
                      key: 2,
                      class: "persona-preview-row"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          class: "persona-preview-display"
                        }, {
                          default: withCtx(() => [
                            createVNode(PersonaQuickPreview, {
                              "model-value": createSelectorModel(itemKey).value
                            }, null, 8, ["model-value"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true),
                    hasVisibleEntriesAfter(getVisibleItemEntries(false), index) ? (openBlock(), createBlock(VDivider, {
                      key: 3,
                      class: "config-divider"
                    })) : createCommentVNode("", true)
                  ]);
                }), 128)),
                hasCollapsedItems() ? (openBlock(), createElementBlock("div", _hoisted_11$2, [
                  createBaseVNode("div", _hoisted_12$2, [
                    createBaseVNode("span", {
                      class: "collapsed-config-toggle",
                      onClick: toggleCollapsedItems
                    }, [
                      createTextVNode(toDisplayString(unref(tmConfig)("sections.moreConfig")) + " ", 1),
                      createVNode(VIcon, {
                        end: "",
                        size: "18"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(areCollapsedItemsVisible() ? "mdi-chevron-up" : "mdi-chevron-down"), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  areCollapsedItemsVisible() ? (openBlock(), createElementBlock("div", _hoisted_13$2, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(getVisibleItemEntries(true), ([itemKey, itemMeta], index) => {
                      return openBlock(), createElementBlock("div", {
                        key: itemKey,
                        class: "config-item"
                      }, [
                        !(itemMeta == null ? void 0 : itemMeta.invisible) ? (openBlock(), createBlock(VRow, {
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
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(translateIfKey(itemMeta == null ? void 0 : itemMeta.description) || itemKey) + " ", 1),
                                        createBaseVNode("span", _hoisted_14$2, "(" + toDisplayString(itemKey) + ")", 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VListItemSubtitle, { class: "property-hint" }, {
                                      default: withCtx(() => [
                                        (itemMeta == null ? void 0 : itemMeta.obvious_hint) && (itemMeta == null ? void 0 : itemMeta.hint) ? (openBlock(), createElementBlock("span", _hoisted_15$2, "‼️")) : createCommentVNode("", true),
                                        createBaseVNode("span", {
                                          innerHTML: renderHint(itemMeta == null ? void 0 : itemMeta.hint)
                                        }, null, 8, _hoisted_16$2)
                                      ]),
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
                              default: withCtx(() => [
                                (itemMeta == null ? void 0 : itemMeta.type) === "template_list" ? (openBlock(), createBlock(TemplateListEditor, {
                                  key: 0,
                                  modelValue: createSelectorModel(itemKey).value,
                                  "onUpdate:modelValue": ($event) => createSelectorModel(itemKey).value = $event,
                                  templates: (itemMeta == null ? void 0 : itemMeta.templates) || {},
                                  class: "config-field"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "templates"])) : (openBlock(), createBlock(ConfigItemRenderer, {
                                  key: 1,
                                  modelValue: createSelectorModel(itemKey).value,
                                  "onUpdate:modelValue": ($event) => createSelectorModel(itemKey).value = $event,
                                  "item-meta": itemMeta || null,
                                  "show-fullscreen-btn": !!(itemMeta == null ? void 0 : itemMeta.editor_mode),
                                  onOpenFullscreen: ($event) => openEditorDialog(itemKey, __props.iterable, itemMeta == null ? void 0 : itemMeta.editor_theme, itemMeta == null ? void 0 : itemMeta.editor_language)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "item-meta", "show-fullscreen-btn", "onOpenFullscreen"]))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        !(itemMeta == null ? void 0 : itemMeta.invisible) && (itemMeta == null ? void 0 : itemMeta._special) === "select_plugin_set" ? (openBlock(), createBlock(VRow, {
                          key: 1,
                          class: "plugin-set-display-row"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              class: "plugin-set-display"
                            }, {
                              default: withCtx(() => [
                                createSelectorModel(itemKey).value && createSelectorModel(itemKey).value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_17$1, [
                                  createBaseVNode("div", _hoisted_18$1, [
                                    createBaseVNode("small", _hoisted_19, toDisplayString(unref(t)("core.shared.pluginSetSelector.selectedPluginsLabel")), 1)
                                  ]),
                                  createBaseVNode("div", _hoisted_20, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(createSelectorModel(itemKey).value || [], (plugin) => {
                                      return openBlock(), createBlock(VChip, {
                                        key: plugin,
                                        size: "small",
                                        label: "",
                                        color: "primary",
                                        variant: "outlined"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(plugin === "*" ? unref(t)("core.shared.pluginSetSelector.allPluginsLabel") : plugin), 1)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ])
                                ])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        !(itemMeta == null ? void 0 : itemMeta.invisible) && (itemMeta == null ? void 0 : itemMeta._special) === "select_persona" && itemKey === "provider_settings.default_personality" ? (openBlock(), createBlock(VRow, {
                          key: 2,
                          class: "persona-preview-row"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              class: "persona-preview-display"
                            }, {
                              default: withCtx(() => [
                                createVNode(PersonaQuickPreview, {
                                  "model-value": createSelectorModel(itemKey).value
                                }, null, 8, ["model-value"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        hasVisibleEntriesAfter(getVisibleItemEntries(true), index) ? (openBlock(), createBlock(VDivider, {
                          key: 3,
                          class: "config-divider"
                        })) : createCommentVNode("", true)
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(VDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => dialog.value = $event),
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
                      onClick: _cache[0] || (_cache[0] = ($event) => dialog.value = false)
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
                      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(currentEditingKeyIterable)[currentEditingKey.value] = $event)
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
const AstrBotConfigV4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7a5872cc"]]);
const _sfc_main$3 = {
  name: "AstrBotCoreConfigWrapper",
  components: {
    AstrBotConfigV4
  },
  props: {
    metadata: {
      type: Object,
      required: true,
      default: () => ({})
    },
    config_data: {
      type: Object,
      required: true,
      default: () => ({})
    },
    readonly: {
      type: Boolean,
      default: false
    },
    searchKeyword: {
      type: String,
      default: ""
    }
  },
  setup() {
    const { tm: tmConfig } = useModuleI18n("features/config");
    const { tm: tmMetadata } = useModuleI18n("features/config-metadata");
    const tm = (key) => {
      const metadataResult = tmMetadata(key);
      if (!metadataResult.startsWith("[MISSING:") && !metadataResult.startsWith("[INVALID:")) {
        return metadataResult;
      }
      return tmConfig(key);
    };
    return {
      tm
    };
  },
  data() {
    return {
      tab: null
      // 当前激活的配置标签页 key
    };
  },
  computed: {
    normalizedSearchKeyword() {
      return String(this.searchKeyword || "").trim().toLowerCase();
    },
    visibleSections() {
      if (!this.metadata || typeof this.metadata !== "object") {
        return [];
      }
      const allSections = Object.entries(this.metadata).map(([key, value]) => ({ key, value }));
      if (!this.normalizedSearchKeyword) {
        return allSections;
      }
      return allSections.filter((section) => this.sectionHasSearchMatch(section.value));
    }
  },
  watch: {
    visibleSections(newSections) {
      const sectionKeys = newSections.map((section) => section.key);
      if (!sectionKeys.includes(this.tab)) {
        this.tab = sectionKeys[0] ?? null;
      }
    }
  },
  mounted() {
    const sectionKeys = this.visibleSections.map((section) => section.key);
    this.tab = sectionKeys[0] ?? null;
  },
  methods: {
    sectionHasSearchMatch(section) {
      const keyword = this.normalizedSearchKeyword;
      if (!keyword) {
        return true;
      }
      const sectionMetadata = (section == null ? void 0 : section.metadata) || {};
      return Object.values(sectionMetadata).some((metaItem) => this.metaObjectHasSearchMatch(metaItem, keyword));
    },
    metaObjectHasSearchMatch(metaObject, keyword) {
      if (!metaObject || typeof metaObject !== "object") {
        return false;
      }
      const target = [
        this.tm(metaObject.description || ""),
        this.tm(metaObject.hint || ""),
        ...Object.entries(metaObject.items || {}).flatMap(([itemKey, itemMeta]) => [
          itemKey,
          this.tm((itemMeta == null ? void 0 : itemMeta.description) || ""),
          this.tm((itemMeta == null ? void 0 : itemMeta.hint) || "")
        ])
      ].join(" ").toLowerCase();
      return target.includes(keyword);
    }
  }
};
const _hoisted_1$3 = { style: { "margin-left": "16px", "padding-bottom": "16px" } };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AstrBotConfigV4 = resolveComponent("AstrBotConfigV4");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", {
      class: normalizeClass(_ctx.$vuetify.display.mobile ? "" : "d-flex")
    }, [
      createVNode(VTabs, {
        modelValue: $data.tab,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.tab = $event),
        direction: _ctx.$vuetify.display.mobile ? "horizontal" : "vertical",
        "align-tabs": _ctx.$vuetify.display.mobile ? "left" : "start",
        color: "deep-purple-accent-4",
        class: "config-tabs"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.visibleSections, (section) => {
            return openBlock(), createBlock(VTab, {
              key: section.key,
              value: section.key,
              style: { "font-weight": "1000", "font-size": "15px" }
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($setup.tm(section.value["name"])), 1)
              ]),
              _: 2
            }, 1032, ["value"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "direction", "align-tabs"]),
      createVNode(VTabsWindow, {
        modelValue: $data.tab,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.tab = $event),
        class: "config-tabs-window",
        style: normalizeStyle($props.readonly ? "pointer-events: none; opacity: 0.6;" : "")
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.visibleSections, (section) => {
            return openBlock(), createBlock(VTabsWindowItem, {
              key: section.key,
              value: section.key
            }, {
              default: withCtx(() => [
                createVNode(VContainer, { fluid: "" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(section.value["metadata"], (val2, key2, index2) => {
                      return openBlock(), createElementBlock("div", { key: key2 }, [
                        createVNode(_component_AstrBotConfigV4, {
                          metadata: { [key2]: section.value["metadata"][key2] },
                          iterable: $props.config_data,
                          metadataKey: key2,
                          "search-keyword": $props.searchKeyword
                        }, null, 8, ["metadata", "iterable", "metadataKey", "search-keyword"])
                      ]);
                    }), 128))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["value"]);
          }), 128)),
          createBaseVNode("div", _hoisted_1$3, [
            createBaseVNode("small", null, toDisplayString($setup.tm("help.helpPrefix")) + " " + toDisplayString($setup.tm("help.documentation")) + " " + toDisplayString($setup.tm("help.helpMiddle")) + toDisplayString($setup.tm("help.helpSuffix")), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "style"])
    ], 2),
    $options.visibleSections.length === 0 ? (openBlock(), createBlock(VContainer, {
      key: 0,
      fluid: "",
      class: "px-0"
    }, {
      default: withCtx(() => [
        createVNode(VAlert, {
          type: "info",
          variant: "tonal"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($setup.tm("search.noResult")), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ], 64);
}
const AstrBotCoreConfigWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
const _hoisted_1$2 = { class: "standalone-chat" };
const _hoisted_2$2 = {
  key: 0,
  class: "standalone-state"
};
const _hoisted_3$2 = {
  key: 1,
  class: "standalone-state"
};
const _hoisted_4$2 = { class: "welcome-title" };
const _hoisted_5$2 = {
  key: 2,
  class: "message-list"
};
const _hoisted_6$1 = { class: "message-stack" };
const _hoisted_7$1 = {
  key: 0,
  class: "loading-message"
};
const _hoisted_8$1 = {
  key: 0,
  class: "plain-content"
};
const _hoisted_9$1 = ["onClick"];
const _hoisted_10$1 = ["src", "alt"];
const _hoisted_11$1 = ["src"];
const _hoisted_12$1 = ["src"];
const _hoisted_13$1 = {
  key: 5,
  class: "file-part"
};
const _hoisted_14$1 = {
  key: 6,
  class: "tool-call-block"
};
const _hoisted_15$1 = { class: "tool-call-inline-status" };
const _hoisted_16$1 = {
  key: 7,
  class: "unknown-part"
};
const _hoisted_17 = { class: "standalone-composer" };
const _hoisted_18 = ["src"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "StandaloneChat",
  props: {
    configId: { default: "default" }
  },
  setup(__props) {
    const props = __props;
    he("chat-message", {
      ref: RefNode,
      code_block: _sfc_main$6
    });
    const { tm } = useModuleI18n("features/chat");
    const customizer = useCustomizerStore();
    const currSessionId = ref("");
    const currentSession = ref(null);
    const draft = ref("");
    const initializing = ref(false);
    const enableStreaming = ref(true);
    const shouldStickToBottom = ref(true);
    const messagesContainer = ref(null);
    const inputRef = ref(null);
    const imagePreview = reactive({ visible: false, url: "" });
    const isDark = computed(() => customizer.uiTheme === "NormalTheme");
    const customMarkdownTags = ["ref"];
    const {
      stagedFiles,
      stagedImagesUrl,
      stagedAudioUrl,
      stagedNonImageFiles,
      processAndUploadImage,
      processAndUploadFile,
      handlePaste,
      removeImage,
      removeAudio,
      removeFile,
      clearStaged,
      cleanupMediaCache
    } = useMediaHandling();
    const {
      sending,
      activeMessages,
      isSessionRunning,
      isMessageStreaming,
      isUserMessage,
      messageContent,
      createLocalExchange,
      sendMessageStream,
      stopSession
    } = useMessages({
      currentSessionId: currSessionId,
      onStreamUpdate: () => {
        if (shouldStickToBottom.value) {
          scrollToBottom();
        }
      }
    });
    const transportMode = computed(
      () => localStorage.getItem("chat.transportMode") === "websocket" ? "websocket" : "sse"
    );
    onMounted(async () => {
      var _a;
      await ensureSession();
      (_a = inputRef.value) == null ? void 0 : _a.focusInput();
    });
    onBeforeUnmount(() => {
      cleanupMediaCache();
    });
    async function ensureSession() {
      var _a;
      if (currSessionId.value) return currSessionId.value;
      initializing.value = true;
      try {
        const response = await axios.get("/api/chat/new_session");
        const session = (_a = response.data) == null ? void 0 : _a.data;
        currSessionId.value = session.session_id;
        currentSession.value = session;
        await bindConfigToSession(session.session_id);
        return session.session_id;
      } finally {
        initializing.value = false;
      }
    }
    async function bindConfigToSession(sessionId) {
      const confId = props.configId || "default";
      const umo = buildWebchatUmoDetails(sessionId, false).umo;
      await axios.post("/api/config/umo_abconf_route/update", {
        umo,
        conf_id: confId
      });
    }
    async function sendCurrentMessage() {
      var _a, _b;
      if (!draft.value.trim() && !stagedFiles.value.length) return;
      const sessionId = await ensureSession();
      const text = draft.value.trim();
      const parts = buildOutgoingParts(text);
      const messageId = ((_a = crypto.randomUUID) == null ? void 0 : _a.call(crypto)) || `${Date.now()}-${Math.random()}`;
      const selection = (_b = inputRef.value) == null ? void 0 : _b.getCurrentSelection();
      const { botRecord } = createLocalExchange({ sessionId, messageId, parts });
      draft.value = "";
      clearStaged({ revokeUrls: false });
      scrollToBottom();
      sendMessageStream({
        sessionId,
        messageId,
        parts,
        transport: transportMode.value,
        enableStreaming: enableStreaming.value,
        selectedProvider: (selection == null ? void 0 : selection.providerId) || "",
        selectedModel: (selection == null ? void 0 : selection.modelName) || "",
        botRecord
      });
    }
    function buildOutgoingParts(text) {
      const parts = [];
      if (text) {
        parts.push({ type: "plain", text });
      }
      stagedFiles.value.forEach((file) => {
        parts.push({
          type: file.type,
          attachment_id: file.attachment_id,
          filename: file.filename,
          embedded_url: file.url
        });
      });
      return parts;
    }
    function bubbleParts(message) {
      return displayParts(messageContent(message));
    }
    function renderBlocks(message) {
      if (isUserMessage(message)) {
        const parts = bubbleParts(message);
        return parts.length ? [{ kind: "content", parts }] : [];
      }
      return messageBlocks(messageContent(message));
    }
    function hasFollowingContentBlock(message, blockIndex) {
      return renderBlocks(message).slice(blockIndex + 1).some((block) => block.kind === "content");
    }
    async function stopCurrentSession() {
      if (!currSessionId.value) return;
      await stopSession(currSessionId.value);
    }
    async function handleFilesSelected(files) {
      const selectedFiles = Array.from(files || []);
      for (const file of selectedFiles) {
        if (file.type.startsWith("image/")) {
          await processAndUploadImage(file);
        } else {
          await processAndUploadFile(file);
        }
      }
    }
    function scrollToBottom() {
      nextTick(() => {
        const container = messagesContainer.value;
        if (!container) return;
        container.scrollTop = container.scrollHeight;
        shouldStickToBottom.value = true;
      });
    }
    function messageRefs(message) {
      const refs = messageContent(message).refs;
      if (refs && typeof refs === "object" && Array.isArray(refs.used)) {
        return refs;
      }
      return null;
    }
    function partUrl(part) {
      var _a;
      if (part.embedded_url) return part.embedded_url;
      if ((_a = part.embedded_file) == null ? void 0 : _a.url) return part.embedded_file.url;
      if (part.attachment_id)
        return `/api/chat/get_attachment?attachment_id=${encodeURIComponent(
          part.attachment_id
        )}`;
      if (part.filename)
        return `/api/chat/get_file?filename=${encodeURIComponent(part.filename)}`;
      return "";
    }
    function normalizeToolCall(tool) {
      const normalized = { ...tool };
      normalized.args = parseJsonSafe(normalized.args || normalized.arguments);
      normalized.result = parseJsonSafe(normalized.result);
      if (!normalized.ts) normalized.ts = Date.now() / 1e3;
      if (normalized.result && typeof normalized.result === "object") {
        normalized.result = JSON.stringify(normalized.result, null, 2);
      }
      return normalized;
    }
    function isIPythonToolCall(tool) {
      const name = String(tool.name || "").toLowerCase();
      return name.includes("python") || name.includes("ipython");
    }
    function toolCallStatusText(tool) {
      if (tool.finished_ts) return tm("toolStatus.done");
      return tm("toolStatus.running");
    }
    function formatJson(value) {
      if (typeof value === "string") return value;
      try {
        return JSON.stringify(value, null, 2);
      } catch {
        return String(value ?? "");
      }
    }
    function parseJsonSafe(value) {
      if (typeof value !== "string") return value;
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }
    function openImage(url) {
      imagePreview.url = url;
      imagePreview.visible = true;
    }
    function closeImage() {
      imagePreview.visible = false;
      imagePreview.url = "";
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("section", {
          ref_key: "messagesContainer",
          ref: messagesContainer,
          class: "standalone-messages"
        }, [
          initializing.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
            createVNode(VProgressCircular, {
              indeterminate: "",
              size: "28",
              width: "3"
            })
          ])) : !unref(activeMessages).length ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
            createBaseVNode("div", _hoisted_4$2, toDisplayString(unref(tm)("welcome.title")), 1)
          ])) : (openBlock(), createElementBlock("div", _hoisted_5$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(activeMessages), (msg, msgIndex) => {
              return openBlock(), createElementBlock("div", {
                key: msg.id || `${msgIndex}-${msg.created_at || ""}`,
                class: normalizeClass(["message-row", unref(isUserMessage)(msg) ? "from-user" : "from-bot"])
              }, [
                createBaseVNode("div", _hoisted_6$1, [
                  createBaseVNode("div", {
                    class: normalizeClass(["message-bubble", { user: unref(isUserMessage)(msg), bot: !unref(isUserMessage)(msg) }])
                  }, [
                    unref(messageContent)(msg).isLoading ? (openBlock(), createElementBlock("div", _hoisted_7$1, toDisplayString(unref(tm)("message.loading")), 1)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(renderBlocks(msg), (block, blockIndex) => {
                      return openBlock(), createElementBlock(Fragment, {
                        key: `${msgIndex}-block-${blockIndex}-${block.kind}`
                      }, [
                        block.kind === "thinking" ? (openBlock(), createBlock(ReasoningBlock, {
                          key: 0,
                          parts: block.parts,
                          "is-dark": isDark.value,
                          "initial-expanded": false,
                          "is-streaming": unref(isMessageStreaming)(msg, msgIndex),
                          "has-non-reasoning-content": hasFollowingContentBlock(msg, blockIndex)
                        }, null, 8, ["parts", "is-dark", "is-streaming", "has-non-reasoning-content"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(block.parts, (part, partIndex) => {
                          return openBlock(), createElementBlock(Fragment, {
                            key: `${msgIndex}-${blockIndex}-${partIndex}-${part.type}`
                          }, [
                            part.type === "plain" && unref(isUserMessage)(msg) ? (openBlock(), createElementBlock("div", _hoisted_8$1, toDisplayString(part.text || ""), 1)) : part.type === "plain" ? (openBlock(), createBlock(_sfc_main$7, {
                              key: 1,
                              content: part.text || "",
                              refs: messageRefs(msg),
                              "is-dark": isDark.value,
                              "custom-html-tags": customMarkdownTags
                            }, null, 8, ["content", "refs", "is-dark"])) : part.type === "image" ? (openBlock(), createElementBlock("button", {
                              key: 2,
                              class: "image-part",
                              type: "button",
                              onClick: ($event) => openImage(partUrl(part))
                            }, [
                              createBaseVNode("img", {
                                src: partUrl(part),
                                alt: part.filename || "image"
                              }, null, 8, _hoisted_10$1)
                            ], 8, _hoisted_9$1)) : part.type === "record" ? (openBlock(), createElementBlock("audio", {
                              key: 3,
                              class: "audio-part",
                              controls: "",
                              src: partUrl(part)
                            }, null, 8, _hoisted_11$1)) : part.type === "video" ? (openBlock(), createElementBlock("video", {
                              key: 4,
                              class: "video-part",
                              controls: "",
                              src: partUrl(part)
                            }, null, 8, _hoisted_12$1)) : part.type === "file" ? (openBlock(), createElementBlock("div", _hoisted_13$1, [
                              createVNode(VIcon, { size: "20" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-file-document-outline")
                                ]),
                                _: 1
                              }),
                              createBaseVNode("span", null, toDisplayString(part.filename || "file"), 1)
                            ])) : part.type === "tool_call" ? (openBlock(), createElementBlock("div", _hoisted_14$1, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(part.tool_calls || [], (tool) => {
                                return openBlock(), createElementBlock(Fragment, {
                                  key: tool.id || tool.name
                                }, [
                                  isIPythonToolCall(tool) ? (openBlock(), createBlock(ToolCallItem, {
                                    key: 0,
                                    "is-dark": isDark.value
                                  }, {
                                    label: withCtx(() => [
                                      createVNode(VIcon, { size: "16" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-code-json")
                                        ]),
                                        _: 1
                                      }),
                                      createBaseVNode("span", null, toDisplayString(tool.name || "python"), 1),
                                      createBaseVNode("span", _hoisted_15$1, toDisplayString(toolCallStatusText(tool)), 1)
                                    ]),
                                    details: withCtx(() => [
                                      createVNode(IPythonToolBlock, {
                                        "tool-call": normalizeToolCall(tool),
                                        "is-dark": isDark.value,
                                        "show-header": false,
                                        "force-expanded": true
                                      }, null, 8, ["tool-call", "is-dark"])
                                    ]),
                                    _: 2
                                  }, 1032, ["is-dark"])) : (openBlock(), createBlock(ToolCallCard, {
                                    key: 1,
                                    "tool-call": normalizeToolCall(tool),
                                    "is-dark": isDark.value
                                  }, null, 8, ["tool-call", "is-dark"]))
                                ], 64);
                              }), 128))
                            ])) : (openBlock(), createElementBlock("pre", _hoisted_16$1, toDisplayString(formatJson(part)), 1))
                          ], 64);
                        }), 128))
                      ], 64);
                    }), 128))
                  ], 2)
                ])
              ], 2);
            }), 128))
          ]))
        ], 512),
        createBaseVNode("section", _hoisted_17, [
          createVNode(ChatInput, {
            ref_key: "inputRef",
            ref: inputRef,
            prompt: draft.value,
            "onUpdate:prompt": _cache[0] || (_cache[0] = ($event) => draft.value = $event),
            "staged-images-url": unref(stagedImagesUrl),
            "staged-audio-url": unref(stagedAudioUrl),
            "staged-files": unref(stagedNonImageFiles),
            disabled: unref(sending) || initializing.value,
            "enable-streaming": enableStreaming.value,
            "is-recording": false,
            "is-running": Boolean(currSessionId.value && unref(isSessionRunning)(currSessionId.value)),
            "session-id": currSessionId.value || null,
            "current-session": currentSession.value,
            "config-id": _ctx.configId || "default",
            "send-shortcut": "enter",
            onSend: sendCurrentMessage,
            onStop: stopCurrentSession,
            onToggleStreaming: _cache[1] || (_cache[1] = ($event) => enableStreaming.value = !enableStreaming.value),
            onRemoveImage: unref(removeImage),
            onRemoveAudio: unref(removeAudio),
            onRemoveFile: unref(removeFile),
            onPasteImage: unref(handlePaste),
            onFileSelect: handleFilesSelected
          }, null, 8, ["prompt", "staged-images-url", "staged-audio-url", "staged-files", "disabled", "enable-streaming", "is-running", "session-id", "current-session", "config-id", "onRemoveImage", "onRemoveAudio", "onRemoveFile", "onPasteImage"])
        ]),
        createVNode(VOverlay, {
          modelValue: imagePreview.visible,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => imagePreview.visible = $event),
          class: "image-preview-overlay",
          scrim: "rgba(0, 0, 0, 0.86)",
          onClick: closeImage
        }, {
          default: withCtx(() => [
            createBaseVNode("img", {
              class: "preview-image",
              src: imagePreview.url,
              alt: "preview"
            }, null, 8, _hoisted_18)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
const StandaloneChat = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1cc02ea8"]]);
const _hoisted_1$1 = { class: "message-text" };
const _hoisted_2$1 = { class: "action-hints" };
const _hoisted_3$1 = { class: "hint-item" };
const _hoisted_4$1 = { class: "hint-item" };
const _hoisted_5$1 = { class: "hint-item" };
const _sfc_main$1 = {
  __name: "UnsavedChangesConfirmDialog",
  setup(__props, { expose: __expose }) {
    const { t } = useI18n();
    const isOpen = ref(false);
    const title = ref("");
    const message = ref("");
    const confirmHint = ref("");
    const cancelHint = ref("");
    const closeHint = ref("");
    let resolvePromise = null;
    const open = (options) => {
      title.value = options.title || t("core.common.dialog.confirmTitle");
      message.value = options.message || t("core.common.dialog.confirmMessage");
      confirmHint.value = options.confirmHint || "";
      cancelHint.value = options.cancelHint || "";
      closeHint.value = options.closeHint || "";
      isOpen.value = true;
      return new Promise((resolve) => {
        resolvePromise = resolve;
      });
    };
    const handleConfirm = () => {
      isOpen.value = false;
      if (resolvePromise) resolvePromise(true);
    };
    const handleCancel = () => {
      isOpen.value = false;
      if (resolvePromise) resolvePromise(false);
    };
    const handleClose = () => {
      isOpen.value = false;
      if (resolvePromise) resolvePromise("close");
    };
    __expose({ open });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VDialog, {
        modelValue: isOpen.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isOpen.value = $event),
        "max-width": "480",
        persistent: ""
      }, {
        default: withCtx(() => [
          createVNode(VCard, null, {
            default: withCtx(() => [
              createVNode(VCardTitle, { class: "dialog-title d-flex align-center justify-space-between" }, {
                default: withCtx(() => [
                  createBaseVNode("span", null, toDisplayString(title.value), 1),
                  createVNode(VBtn, {
                    icon: "mdi-close",
                    variant: "text",
                    onClick: handleClose
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$1, toDisplayString(message.value), 1),
                  createBaseVNode("div", _hoisted_2$1, [
                    createBaseVNode("span", _hoisted_3$1, toDisplayString(confirmHint.value), 1),
                    createBaseVNode("span", _hoisted_4$1, toDisplayString(cancelHint.value), 1),
                    createBaseVNode("span", _hoisted_5$1, toDisplayString(closeHint.value), 1)
                  ])
                ]),
                _: 1
              }),
              createVNode(VCardActions, null, {
                default: withCtx(() => [
                  createVNode(VSpacer),
                  createVNode(VBtn, {
                    color: "gray",
                    onClick: handleCancel
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("core.common.dialog.cancelButton")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    color: "red",
                    onClick: handleConfirm,
                    class: "confirm-button"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("core.common.dialog.confirmButton")), 1)
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
      }, 8, ["modelValue"]);
    };
  }
};
const UnsavedChangesConfirmDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8d5a32fe"]]);
const _sfc_main = {
  name: "ConfigPage",
  components: {
    AstrBotCoreConfigWrapper,
    VueMonacoEditor,
    WaitingForRestart,
    StandaloneChat,
    UnsavedChangesConfirmDialog
  },
  props: {
    initialConfigId: {
      type: String,
      default: null
    }
  },
  setup() {
    const { t } = useI18n();
    const { tm } = useModuleI18n("features/config");
    const confirmDialog = useConfirmDialog();
    return {
      t,
      tm,
      confirmDialog
    };
  },
  // 检查未保存的更改
  async beforeRouteLeave(to, from, next) {
    var _a;
    if (this.hasUnsavedChanges) {
      const confirmed = await ((_a = this.$refs.unsavedChangesDialog) == null ? void 0 : _a.open({
        title: this.tm("unsavedChangesWarning.dialogTitle"),
        message: this.tm("unsavedChangesWarning.leavePage"),
        confirmHint: `${this.tm("unsavedChangesWarning.options.saveAndSwitch")}:${this.tm("unsavedChangesWarning.options.confirm")}`,
        cancelHint: `${this.tm("unsavedChangesWarning.options.discardAndSwitch")}:${this.tm("unsavedChangesWarning.options.cancel")}`,
        closeHint: `${this.tm("unsavedChangesWarning.options.closeCard")}:"x"`
      }));
      if (confirmed === "close") {
        next(false);
      } else if (confirmed) {
        const result = await this.updateConfig();
        if (this.isSystemConfig) {
          next(false);
        } else {
          if (result == null ? void 0 : result.success) {
            await new Promise((resolve) => setTimeout(resolve, 800));
            next();
          } else {
            next(false);
          }
        }
      } else {
        this.hasUnsavedChanges = false;
        next();
      }
    } else {
      next();
    }
  },
  computed: {
    messages() {
      return {
        loadError: this.tm("messages.loadError"),
        saveSuccess: this.tm("messages.saveSuccess"),
        saveError: this.tm("messages.saveError"),
        configApplied: this.tm("messages.configApplied"),
        configApplyError: this.tm("messages.configApplyError")
      };
    },
    // 检查配置是否变化
    configHasChanges() {
      if (!this.originalConfigData || !this.config_data) return false;
      return JSON.stringify(this.originalConfigData) !== JSON.stringify(this.config_data);
    },
    configInfoNameList() {
      return this.configInfoList.map((info) => info.name);
    },
    selectedConfigInfo() {
      return this.configInfoList.find((info) => info.id === this.selectedConfigID) || {};
    },
    configFormTitle() {
      if (this.isEditingConfig) {
        return this.tm("configManagement.editConfig");
      }
      if (this.isCopyingConfig) {
        return this.tm("configManagement.copyConfig");
      }
      return this.tm("configManagement.newConfig");
    },
    isConfigFormSaveDisabled() {
      const isNameEmpty = !this.normalizeConfigName(this.configFormData.name);
      return isNameEmpty || this.isCopyingConfig && !this.copySourceConfigId;
    },
    configSelectItems() {
      const items = [...this.configInfoList];
      items.push({
        id: "_%manage%_",
        name: this.tm("configManagement.manageConfigs"),
        umop: []
      });
      return items;
    },
    hasUnsavedChanges() {
      if (!this.fetched) {
        return false;
      }
      return this.getConfigSnapshot(this.config_data) !== this.lastSavedConfigSnapshot;
    }
  },
  watch: {
    config_data_str(val) {
      this.config_data_has_changed = true;
    },
    config_data: {
      deep: true,
      handler() {
        if (this.fetched) {
          this.hasUnsavedChanges = this.configHasChanges;
        }
      }
    },
    async "$route.fullPath"(newVal) {
      await this.syncConfigTypeFromHash(newVal);
    },
    initialConfigId(newVal) {
      if (!newVal) {
        return;
      }
      if (this.selectedConfigID !== newVal) {
        this.getConfigInfoList(newVal);
      }
    }
  },
  data() {
    return {
      codeEditorDialog: false,
      configManageDialog: false,
      showConfigForm: false,
      isEditingConfig: false,
      isCopyingConfig: false,
      config_data_has_changed: false,
      config_data_str: "",
      config_data: {
        config: {}
      },
      fetched: false,
      metadata: {},
      save_message_snack: false,
      save_message: "",
      save_message_success: "",
      configContentKey: 0,
      lastSavedConfigSnapshot: "",
      // 配置类型切换
      configType: "normal",
      // 'normal' 或 'system'
      configSearchKeyword: "",
      // 系统配置开关
      isSystemConfig: false,
      // 多配置文件管理
      selectedConfigID: null,
      // 用于存储当前选中的配置项信息
      currentConfigId: null,
      // 跟踪当前正在编辑的配置id
      configInfoList: [],
      configFormData: {
        name: ""
      },
      editingConfigId: null,
      copySourceConfigId: "",
      // 测试聊天
      testChatDrawer: false,
      testConfigId: null,
      // 未保存的更改状态
      hasUnsavedChanges: false,
      // 存储原始配置
      originalConfigData: null
    };
  },
  mounted() {
    var _a;
    const hashConfigType = this.extractConfigTypeFromHash(
      ((_a = this.$route) == null ? void 0 : _a.fullPath) || ""
    );
    this.configType = hashConfigType || "normal";
    this.isSystemConfig = this.configType === "system";
    const targetConfigId = this.initialConfigId || "default";
    this.getConfigInfoList(targetConfigId);
    this.configType = this.isSystemConfig ? "system" : "normal";
    window.addEventListener("astrbot-locale-changed", this.handleLocaleChange);
    this.$watch("config_data", (newVal) => {
      if (!this.originalConfigData && newVal) {
        this.originalConfigData = JSON.parse(JSON.stringify(newVal));
      }
    }, { immediate: false, deep: true });
  },
  beforeUnmount() {
    window.removeEventListener("astrbot-locale-changed", this.handleLocaleChange);
  },
  methods: {
    // 处理语言切换事件，重新加载配置以获取插件的 i18n 数据
    handleLocaleChange() {
      if (this.selectedConfigID) {
        this.getConfig(this.selectedConfigID);
      } else if (this.isSystemConfig) {
        this.getConfig();
      }
    }
  },
  methods: {
    onConfigSearchInput(value) {
      this.configSearchKeyword = normalizeTextInput(value);
    },
    extractConfigTypeFromHash(hash) {
      const rawHash = String(hash || "");
      const lastHashIndex = rawHash.lastIndexOf("#");
      if (lastHashIndex === -1) {
        return null;
      }
      const cleanHash = rawHash.slice(lastHashIndex + 1);
      return cleanHash === "system" || cleanHash === "normal" ? cleanHash : null;
    },
    async syncConfigTypeFromHash(hash) {
      const configType = this.extractConfigTypeFromHash(hash);
      if (!configType || configType === this.configType) {
        return false;
      }
      this.configType = configType;
      await this.onConfigTypeToggle();
      return true;
    },
    getConfigInfoList(abconf_id) {
      axios.get("/api/config/abconfs").then((res) => {
        this.configInfoList = res.data.data.info_list;
        if (abconf_id) {
          let matched = false;
          for (let i = 0; i < this.configInfoList.length; i++) {
            if (this.configInfoList[i].id === abconf_id) {
              this.selectedConfigID = this.configInfoList[i].id;
              this.currentConfigId = this.configInfoList[i].id;
              this.getConfig(abconf_id);
              matched = true;
              break;
            }
          }
          if (!matched && this.configInfoList.length) {
            this.selectedConfigID = this.configInfoList[0].id;
            this.currentConfigId = this.configInfoList[0].id;
            this.getConfig(this.selectedConfigID);
          }
        }
      }).catch((err) => {
        this.save_message = this.messages.loadError;
        this.save_message_snack = true;
        this.save_message_success = "error";
      });
    },
    getConfig(abconf_id) {
      this.fetched = false;
      const params = {};
      if (this.isSystemConfig) {
        params.system_config = "1";
      } else {
        params.id = abconf_id || this.selectedConfigID;
      }
      axios.get("/api/config/abconf", {
        params
      }).then((res) => {
        this.config_data = res.data.data.config;
        this.lastSavedConfigSnapshot = this.getConfigSnapshot(this.config_data);
        this.fetched = true;
        this.metadata = res.data.data.metadata;
        this.configContentKey += 1;
        this.$nextTick(() => {
          this.originalConfigData = JSON.parse(JSON.stringify(this.config_data));
          this.hasUnsavedChanges = false;
          if (!this.isSystemConfig) {
            this.currentConfigId = abconf_id || this.selectedConfigID;
          }
        });
      }).catch((err) => {
        this.save_message = this.messages.loadError;
        this.save_message_snack = true;
        this.save_message_success = "error";
      });
    },
    updateConfig() {
      if (!this.fetched) return;
      const postData = {
        config: JSON.parse(JSON.stringify(this.config_data))
      };
      if (this.isSystemConfig) {
        postData.conf_id = "default";
      } else {
        postData.conf_id = this.selectedConfigID;
      }
      return axios.post("/api/config/astrbot/update", postData).then((res) => {
        if (res.data.status === "ok") {
          this.lastSavedConfigSnapshot = this.getConfigSnapshot(this.config_data);
          this.save_message = res.data.message || this.messages.saveSuccess;
          this.save_message_snack = true;
          this.save_message_success = "success";
          this.onConfigSaved();
          if (this.isSystemConfig) {
            restartAstrBot(this.$refs.wfr).catch(() => {
            });
          }
          return { success: true };
        } else {
          this.save_message = res.data.message || this.messages.saveError;
          this.save_message_snack = true;
          this.save_message_success = "error";
          return { success: false };
        }
      }).catch((err) => {
        this.save_message = this.messages.saveError;
        this.save_message_snack = true;
        this.save_message_success = "error";
        return { success: false };
      });
    },
    // 重置未保存状态
    onConfigSaved() {
      this.hasUnsavedChanges = false;
      this.originalConfigData = JSON.parse(JSON.stringify(this.config_data));
    },
    configToString() {
      this.config_data_str = JSON.stringify(this.config_data, null, 2);
      this.config_data_has_changed = false;
    },
    applyStrConfig() {
      try {
        this.config_data = JSON.parse(this.config_data_str);
        this.config_data_has_changed = false;
        this.save_message_success = "success";
        this.save_message = this.messages.configApplied;
        this.save_message_snack = true;
      } catch (e) {
        this.save_message_success = "error";
        this.save_message = this.messages.configApplyError;
        this.save_message_snack = true;
      }
    },
    createNewConfig(configName) {
      axios.post("/api/config/abconf/new", {
        name: configName
      }).then((res) => {
        if (res.data.status === "ok") {
          this.save_message = res.data.message;
          this.save_message_snack = true;
          this.save_message_success = "success";
          this.getConfigInfoList(res.data.data.conf_id);
          this.cancelConfigForm();
        } else {
          this.save_message = res.data.message;
          this.save_message_snack = true;
          this.save_message_success = "error";
        }
      }).catch((err) => {
        console.error(err);
        this.save_message = this.tm("configManagement.createFailed");
        this.save_message_snack = true;
        this.save_message_success = "error";
      });
    },
    normalizeConfigName(name) {
      return typeof name === "string" ? name.trim() : "";
    },
    hasDuplicateConfigName(name, excludeId = null) {
      const normalizedName = this.normalizeConfigName(name);
      if (!normalizedName) {
        return false;
      }
      return this.configInfoList.some((config) => {
        if (!config || !config.name) {
          return false;
        }
        if (excludeId && config.id === excludeId) {
          return false;
        }
        return this.normalizeConfigName(config.name) === normalizedName;
      });
    },
    async onConfigSelect(value) {
      var _a;
      if (value === "_%manage%_") {
        this.configManageDialog = true;
        this.$nextTick(() => {
          this.selectedConfigID = this.selectedConfigInfo.id || "default";
          this.getConfig(this.selectedConfigID);
        });
      } else {
        if (this.hasUnsavedChanges) {
          const prevConfigId = this.isSystemConfig ? "default" : this.currentConfigId || this.selectedConfigID || "default";
          const message = this.tm("unsavedChangesWarning.switchConfig");
          const saveAndSwitch = await ((_a = this.$refs.unsavedChangesDialog) == null ? void 0 : _a.open({
            title: this.tm("unsavedChangesWarning.dialogTitle"),
            message,
            confirmHint: `${this.tm("unsavedChangesWarning.options.saveAndSwitch")}:${this.tm("unsavedChangesWarning.options.confirm")}`,
            cancelHint: `${this.tm("unsavedChangesWarning.options.discardAndSwitch")}:${this.tm("unsavedChangesWarning.options.cancel")}`,
            closeHint: `${this.tm("unsavedChangesWarning.options.closeCard")}:"x"`
          }));
          if (saveAndSwitch === "close") {
            return;
          }
          if (saveAndSwitch) {
            const currentSelectedId = this.selectedConfigID;
            this.selectedConfigID = prevConfigId;
            const result = await this.updateConfig();
            this.selectedConfigID = currentSelectedId;
            if (result == null ? void 0 : result.success) {
              this.selectedConfigID = value;
              this.getConfig(value);
            }
            return;
          } else {
            this.selectedConfigID = value;
            this.getConfig(value);
          }
        } else {
          this.selectedConfigID = value;
          this.getConfig(value);
        }
      }
    },
    setConfigFormState({ mode = "create", config = null, visible = true } = {}) {
      this.showConfigForm = visible;
      this.isEditingConfig = mode === "edit";
      this.isCopyingConfig = mode === "copy";
      this.editingConfigId = this.isEditingConfig && config ? config.id : null;
      this.copySourceConfigId = this.isCopyingConfig && config ? config.id : "";
      let name = "";
      if (this.isEditingConfig && config) {
        name = config.name || "";
      } else if (this.isCopyingConfig && config) {
        name = `${config.name || ""}-copy`;
      }
      this.configFormData = { name };
    },
    startCreateConfig() {
      this.setConfigFormState({ mode: "create" });
    },
    startEditConfig(config) {
      this.setConfigFormState({ mode: "edit", config });
    },
    startCopyConfig(config) {
      this.setConfigFormState({ mode: "copy", config });
    },
    cancelConfigForm() {
      this.setConfigFormState({ visible: false });
    },
    saveConfigForm() {
      const normalizedName = this.normalizeConfigName(this.configFormData.name);
      if (!normalizedName) {
        this.save_message = this.tm("configManagement.pleaseEnterName");
        this.save_message_snack = true;
        this.save_message_success = "error";
        return;
      }
      const excludeId = this.isEditingConfig ? this.editingConfigId : null;
      if (this.hasDuplicateConfigName(normalizedName, excludeId)) {
        this.save_message = this.tm("configManagement.nameExists");
        this.save_message_snack = true;
        this.save_message_success = "error";
        return;
      }
      this.configFormData.name = normalizedName;
      if (this.isEditingConfig) {
        this.updateConfigInfo(normalizedName);
      } else if (this.isCopyingConfig) {
        this.copyConfig(normalizedName);
      } else {
        this.createNewConfig(normalizedName);
      }
    },
    copyConfig(configName) {
      axios.get("/api/config/abconf", {
        params: { id: this.copySourceConfigId }
      }).then((res) => {
        var _a, _b;
        const sourceConfig = (_b = (_a = res.data) == null ? void 0 : _a.data) == null ? void 0 : _b.config;
        if (!sourceConfig) {
          this.save_message = this.tm("configManagement.copyFailed");
          this.save_message_snack = true;
          this.save_message_success = "error";
          return;
        }
        return axios.post("/api/config/abconf/new", {
          name: configName,
          config: sourceConfig
        });
      }).then((res) => {
        if (!res) return;
        if (res.data.status === "ok") {
          this.save_message = res.data.message;
          this.save_message_snack = true;
          this.save_message_success = "success";
          this.getConfigInfoList(res.data.data.conf_id);
          this.cancelConfigForm();
        } else {
          this.save_message = res.data.message;
          this.save_message_snack = true;
          this.save_message_success = "error";
        }
      }).catch((err) => {
        var _a, _b;
        console.error(err);
        this.save_message = ((_b = (_a = err == null ? void 0 : err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || this.tm("configManagement.copyFailed");
        this.save_message_snack = true;
        this.save_message_success = "error";
      });
    },
    async confirmDeleteConfig(config) {
      const message = this.tm("configManagement.confirmDelete").replace("{name}", config.name);
      if (await askForConfirmation(message, this.confirmDialog)) {
        this.deleteConfig(config.id);
      }
    },
    deleteConfig(configId) {
      axios.post("/api/config/abconf/delete", {
        id: configId
      }).then((res) => {
        if (res.data.status === "ok") {
          this.save_message = res.data.message;
          this.save_message_snack = true;
          this.save_message_success = "success";
          this.cancelConfigForm();
          this.getConfigInfoList("default");
        } else {
          this.save_message = res.data.message;
          this.save_message_snack = true;
          this.save_message_success = "error";
        }
      }).catch((err) => {
        console.error(err);
        this.save_message = this.tm("configManagement.deleteFailed");
        this.save_message_snack = true;
        this.save_message_success = "error";
      });
    },
    updateConfigInfo(configName) {
      axios.post("/api/config/abconf/update", {
        id: this.editingConfigId,
        name: configName
      }).then((res) => {
        if (res.data.status === "ok") {
          this.save_message = res.data.message;
          this.save_message_snack = true;
          this.save_message_success = "success";
          this.getConfigInfoList(this.editingConfigId);
          this.cancelConfigForm();
        } else {
          this.save_message = res.data.message;
          this.save_message_snack = true;
          this.save_message_success = "error";
        }
      }).catch((err) => {
        console.error(err);
        this.save_message = this.tm("configManagement.updateFailed");
        this.save_message_snack = true;
        this.save_message_success = "error";
      });
    },
    async onConfigTypeToggle() {
      var _a;
      if (this.hasUnsavedChanges) {
        const message = this.tm("unsavedChangesWarning.leavePage");
        const saveAndSwitch = await ((_a = this.$refs.unsavedChangesDialog) == null ? void 0 : _a.open({
          title: this.tm("unsavedChangesWarning.dialogTitle"),
          message,
          confirmHint: `${this.tm("unsavedChangesWarning.options.saveAndSwitch")}:${this.tm("unsavedChangesWarning.options.confirm")}`,
          cancelHint: `${this.tm("unsavedChangesWarning.options.discardAndSwitch")}:${this.tm("unsavedChangesWarning.options.cancel")}`,
          closeHint: `${this.tm("unsavedChangesWarning.options.closeCard")}:"x"`
        }));
        if (saveAndSwitch === "close") {
          const originalHash = this.isSystemConfig ? "#system" : "#normal";
          this.$router.replace("/config" + originalHash);
          this.configType = this.isSystemConfig ? "system" : "normal";
          return;
        }
        if (saveAndSwitch) {
          await this.updateConfig();
          if (this.isSystemConfig) {
            this.$router.replace("/config#system");
            return;
          }
        }
      }
      this.isSystemConfig = this.configType === "system";
      this.fetched = false;
      if (this.isSystemConfig) {
        this.getConfig();
      } else {
        if (this.selectedConfigID) {
          this.getConfig(this.selectedConfigID);
        } else {
          this.getConfigInfoList("default");
        }
      }
    },
    onSystemConfigToggle() {
      this.configType = this.isSystemConfig ? "system" : "normal";
      this.onConfigTypeToggle();
    },
    openTestChat() {
      if (!this.selectedConfigID) {
        this.save_message = "请先选择一个配置文件";
        this.save_message_snack = true;
        this.save_message_success = "warning";
        return;
      }
      this.testConfigId = this.selectedConfigID;
      this.testChatDrawer = true;
    },
    closeTestChat() {
      this.testChatDrawer = false;
      this.testConfigId = null;
    },
    getConfigSnapshot(config) {
      return JSON.stringify(config ?? {});
    }
  }
};
const _hoisted_1 = { style: { "display": "flex", "flex-direction": "column", "align-items": "center" } };
const _hoisted_2 = {
  key: 0,
  class: "mt-4 config-panel",
  style: { "display": "flex", "flex-direction": "column", "align-items": "start" }
};
const _hoisted_3 = {
  class: "config-toolbar d-flex flex-row pr-4",
  style: { "margin-bottom": "16px", "align-items": "center", "gap": "12px", "width": "100%", "justify-content": "space-between" }
};
const _hoisted_4 = {
  class: "config-toolbar-controls d-flex flex-row align-center",
  style: { "gap": "12px" }
};
const _hoisted_5 = {
  key: 0,
  class: "unsaved-changes-banner-wrap"
};
const _hoisted_6 = { style: { "margin-left": "16px" } };
const _hoisted_7 = { class: "text-h4" };
const _hoisted_8 = { class: "mt-6 mb-4" };
const _hoisted_9 = {
  class: "d-flex align-center",
  style: { "gap": "8px" }
};
const _hoisted_10 = { key: 1 };
const _hoisted_11 = { class: "mb-4" };
const _hoisted_12 = {
  class: "d-flex justify-end mt-4",
  style: { "gap": "8px" }
};
const _hoisted_13 = { class: "test-chat-header" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", { class: "text-h6" }, "测试配置", -1);
const _hoisted_15 = {
  key: 0,
  class: "text-caption text-grey"
};
const _hoisted_16 = { class: "test-chat-content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AstrBotCoreConfigWrapper = resolveComponent("AstrBotCoreConfigWrapper");
  const _component_VueMonacoEditor = resolveComponent("VueMonacoEditor");
  const _component_WaitingForRestart = resolveComponent("WaitingForRestart");
  const _component_StandaloneChat = resolveComponent("StandaloneChat");
  const _component_UnsavedChangesConfirmDialog = resolveComponent("UnsavedChangesConfirmDialog");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      $data.selectedConfigID || $data.isSystemConfig ? (openBlock(), createElementBlock("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            !$data.isSystemConfig ? (openBlock(), createBlock(VSelect, {
              key: 0,
              class: "config-select",
              style: { "min-width": "130px" },
              "model-value": $data.selectedConfigID,
              items: $options.configSelectItems,
              "item-title": "name",
              disabled: $props.initialConfigId !== null,
              "item-value": "id",
              label: $setup.tm("configSelection.selectConfig"),
              "hide-details": "",
              density: "compact",
              rounded: "md",
              variant: "outlined",
              "onUpdate:modelValue": $options.onConfigSelect
            }, null, 8, ["model-value", "items", "disabled", "label", "onUpdate:modelValue"])) : createCommentVNode("", true),
            createVNode(VTextField, {
              class: "config-search-input",
              "model-value": $data.configSearchKeyword,
              "onUpdate:modelValue": $options.onConfigSearchInput,
              "prepend-inner-icon": "mdi-magnify",
              label: $setup.tm("search.placeholder"),
              clearable: "",
              "hide-details": "",
              density: "compact",
              rounded: "md",
              variant: "outlined",
              style: { "min-width": "280px" }
            }, null, 8, ["model-value", "onUpdate:modelValue", "label"])
          ])
        ]),
        createVNode(VSlideYTransition, null, {
          default: withCtx(() => [
            $data.fetched && $data.hasUnsavedChanges ? (openBlock(), createElementBlock("div", _hoisted_5, [
              createVNode(VBanner, {
                icon: "$warning",
                lines: "one",
                class: "unsaved-changes-banner my-4"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString($setup.tm("messages.unsavedChangesNotice")), 1)
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(VSlideYTransition, { mode: "out-in" }, {
          default: withCtx(() => [
            ($data.selectedConfigID || $data.isSystemConfig) && $data.fetched ? (openBlock(), createElementBlock("div", {
              key: $data.configContentKey,
              class: "config-content",
              style: { "width": "100%" }
            }, [
              createVNode(_component_AstrBotCoreConfigWrapper, {
                metadata: $data.metadata,
                config_data: $data.config_data,
                "search-keyword": $data.configSearchKeyword
              }, null, 8, ["metadata", "config_data", "search-keyword"])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        ($data.selectedConfigID || $data.isSystemConfig) && $data.fetched ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(VTooltip, {
            text: $setup.tm("actions.save"),
            location: "left"
          }, {
            activator: withCtx(({ props }) => [
              createVNode(VBtn, mergeProps(props, {
                icon: "mdi-content-save",
                size: "x-large",
                style: { "position": "fixed", "right": "52px", "bottom": "52px" },
                color: "darkprimary",
                onClick: $options.updateConfig
              }), null, 16, ["onClick"])
            ]),
            _: 1
          }, 8, ["text"]),
          createVNode(VTooltip, {
            text: $setup.tm("codeEditor.title"),
            location: "left"
          }, {
            activator: withCtx(({ props }) => [
              createVNode(VBtn, mergeProps(props, {
                icon: "mdi-code-json",
                size: "x-large",
                style: { "position": "fixed", "right": "52px", "bottom": "124px" },
                color: "primary",
                onClick: _cache[0] || (_cache[0] = ($event) => {
                  $options.configToString();
                  $data.codeEditorDialog = true;
                })
              }), null, 16)
            ]),
            _: 1
          }, 8, ["text"]),
          !$data.isSystemConfig ? (openBlock(), createBlock(VTooltip, {
            key: 0,
            text: "测试当前配置",
            location: "left"
          }, {
            activator: withCtx(({ props }) => [
              createVNode(VBtn, mergeProps(props, {
                icon: "mdi-chat-processing",
                size: "x-large",
                style: { "position": "fixed", "right": "52px", "bottom": "196px" },
                color: "secondary",
                onClick: $options.openTestChat
              }), null, 16, ["onClick"])
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ]),
    createVNode(VDialog, {
      modelValue: $data.codeEditorDialog,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.codeEditorDialog = $event),
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
                  onClick: _cache[1] || (_cache[1] = ($event) => $data.codeEditorDialog = false)
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
                    createTextVNode(toDisplayString($setup.tm("codeEditor.title")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VSpacer),
                createVNode(VToolbarItems, { style: { "display": "flex", "align-items": "center" } }, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      style: { "margin-left": "16px" },
                      size: "small",
                      onClick: _cache[2] || (_cache[2] = ($event) => $options.configToString())
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($setup.tm("editor.revertCode")), 1)
                      ]),
                      _: 1
                    }),
                    $data.config_data_has_changed ? (openBlock(), createBlock(VBtn, {
                      key: 0,
                      style: { "margin-left": "16px" },
                      size: "small",
                      onClick: _cache[3] || (_cache[3] = ($event) => $options.applyStrConfig())
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($setup.tm("editor.applyConfig")), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createBaseVNode("small", _hoisted_6, "💡 " + toDisplayString($setup.tm("editor.applyTip")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(VCardText, { class: "pa-0" }, {
              default: withCtx(() => [
                createVNode(_component_VueMonacoEditor, {
                  language: "json",
                  theme: "vs-dark",
                  style: { "height": "calc(100vh - 64px)" },
                  value: $data.config_data_str,
                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => $data.config_data_str = $event)
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(VDialog, {
      modelValue: $data.configManageDialog,
      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.configManageDialog = $event),
      "max-width": "800px"
    }, {
      default: withCtx(() => [
        createVNode(VCard, null, {
          default: withCtx(() => [
            createVNode(VCardTitle, { class: "d-flex align-center justify-space-between" }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_7, toDisplayString($setup.tm("configManagement.title")), 1),
                createVNode(VBtn, {
                  icon: "mdi-close",
                  variant: "text",
                  onClick: _cache[6] || (_cache[6] = ($event) => $data.configManageDialog = false)
                })
              ]),
              _: 1
            }),
            createVNode(VCardText, null, {
              default: withCtx(() => [
                createBaseVNode("small", null, toDisplayString($setup.tm("configManagement.description")), 1),
                createBaseVNode("div", _hoisted_8, [
                  createVNode(VBtn, {
                    "prepend-icon": "mdi-plus",
                    onClick: $options.startCreateConfig,
                    variant: "tonal",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($setup.tm("configManagement.newConfig")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                createVNode(VList, { lines: "two" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($data.configInfoList, (config) => {
                      return openBlock(), createBlock(VListItem, {
                        key: config.id,
                        title: config.name
                      }, {
                        append: withCtx(() => [
                          createBaseVNode("div", _hoisted_9, [
                            createVNode(VBtn, {
                              icon: "mdi-content-copy",
                              size: "small",
                              variant: "text",
                              color: "primary",
                              onClick: ($event) => $options.startCopyConfig(config)
                            }, null, 8, ["onClick"]),
                            config.id !== "default" ? (openBlock(), createBlock(VBtn, {
                              key: 0,
                              icon: "mdi-pencil",
                              size: "small",
                              variant: "text",
                              color: "warning",
                              onClick: ($event) => $options.startEditConfig(config)
                            }, null, 8, ["onClick"])) : createCommentVNode("", true),
                            config.id !== "default" ? (openBlock(), createBlock(VBtn, {
                              key: 1,
                              icon: "mdi-delete",
                              size: "small",
                              variant: "text",
                              color: "error",
                              onClick: ($event) => $options.confirmDeleteConfig(config)
                            }, null, 8, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["title"]);
                    }), 128))
                  ]),
                  _: 1
                }),
                $data.showConfigForm ? (openBlock(), createBlock(VDivider, {
                  key: 0,
                  class: "my-6"
                })) : createCommentVNode("", true),
                $data.showConfigForm ? (openBlock(), createElementBlock("div", _hoisted_10, [
                  createBaseVNode("h3", _hoisted_11, toDisplayString($options.configFormTitle), 1),
                  createBaseVNode("h4", null, toDisplayString($setup.tm("configManagement.configName")), 1),
                  createVNode(VTextField, {
                    modelValue: $data.configFormData.name,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.configFormData.name = $event),
                    label: $setup.tm("configManagement.fillConfigName"),
                    variant: "outlined",
                    class: "mt-4 mb-4",
                    "hide-details": ""
                  }, null, 8, ["modelValue", "label"]),
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: $options.cancelConfigForm
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($setup.tm("buttons.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(VBtn, {
                      color: "primary",
                      onClick: $options.saveConfigForm,
                      disabled: $options.isConfigFormSaveDisabled
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($data.isEditingConfig ? $setup.tm("buttons.update") : $setup.tm("buttons.create")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick", "disabled"])
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(VSnackbar, {
      timeout: 3e3,
      elevation: "24",
      color: $data.save_message_success,
      modelValue: $data.save_message_snack,
      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.save_message_snack = $event)
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($data.save_message), 1)
      ]),
      _: 1
    }, 8, ["color", "modelValue"]),
    createVNode(_component_WaitingForRestart, { ref: "wfr" }, null, 512),
    createVNode(VOverlay, {
      modelValue: $data.testChatDrawer,
      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.testChatDrawer = $event),
      class: "test-chat-overlay",
      location: "right",
      transition: "slide-x-reverse-transition",
      scrim: true,
      "onClick:outside": $options.closeTestChat
    }, {
      default: withCtx(() => [
        createVNode(VCard, {
          class: "test-chat-card",
          elevation: "12"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", null, [
                _hoisted_14,
                $options.selectedConfigInfo.name ? (openBlock(), createElementBlock("div", _hoisted_15, toDisplayString($options.selectedConfigInfo.name) + " (" + toDisplayString($data.testConfigId) + ") ", 1)) : createCommentVNode("", true)
              ]),
              createVNode(VBtn, {
                icon: "",
                variant: "text",
                onClick: $options.closeTestChat
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
              }, 8, ["onClick"])
            ]),
            createVNode(VDivider),
            createBaseVNode("div", _hoisted_16, [
              $data.testChatDrawer ? (openBlock(), createBlock(_component_StandaloneChat, {
                key: 0,
                configId: $data.testConfigId
              }, null, 8, ["configId"])) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "onClick:outside"]),
    createVNode(_component_UnsavedChangesConfirmDialog, { ref: "unsavedChangesDialog" }, null, 512)
  ], 64);
}
const ConfigPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  ConfigPage as default
};
