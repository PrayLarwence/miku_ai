import { D as defineComponent, a5 as useI18n, u as useModuleI18n, L as ref, J as watch, h as createBlock, w as withCtx, b as createVNode, s as VCard, a6 as VCardTitle, d as createTextVNode, t as toDisplayString, $ as unref, v as VCardText, j as VTextField, an as withKeys, aL as VTextarea, a9 as VCardActions, V as VSpacer, e as VBtn, ai as VDialog, o as openBlock, _ as _export_sfc, c as createElementBlock, a as createBaseVNode, l as VIcon, aw as VExpandTransition, S as withDirectives, W as vShow, F as Fragment, r as renderList, T as normalizeClass, a0 as withModifiers, i as createCommentVNode, Z as renderSlot, af as VList, ag as VListItem, ah as VListItemTitle, aB as VListItemSubtitle, ae as VMenu, a2 as mergeProps, aj as VProgressCircular, B as axios, H as computed, bk as provide, bE as useSlots, O as inject, bd as reactive, b7 as VAvatar, U as normalizeStyle, be as VOverlay, N as nextTick, X as Transition, bn as vModelText, aI as useRouter, bm as useDisplay, bl as useLanguageSwitcher, aF as useTheme, M as onMounted, R as onBeforeUnmount, bs as VNavigationDrawer, aO as useRoute } from "./index-BXuR6cgv.js";
import { _ as _sfc_main$a } from "./StyledMenu.vue_vue_type_style_index_0_lang-2DD6mXzT.js";
import { u as useConfirmDialog, a as askForConfirmation } from "./confirmDialog-CkMgMXQP.js";
import { g as getStoredSelectedChatConfigId, b as buildWebchatUmoDetails, u as useMediaHandling, C as ChatInput } from "./useMediaHandling-6OMlejRE.js";
import { L as Lt, h as he, _ as _sfc_main$b, R as RefNode, c as ReasoningBlock, d as _sfc_main$c, I as IPythonToolBlock, T as ToolCallItem, e as ToolCallCard, g as messageBlocks, i as displayParts, k as ReasoningTimeline, l as appendPlain, p as markMessageStarted, r as payloadText, s as hasPlainText, t as appendReasoningPart, v as upsertToolCall, x as parseJsonSafe, z as finishToolCall, A as normalizeMessageParts, B as extractReasoningText, j as useMessages } from "./useMessages-CJlWniRO.js";
import { A as ActionRef, R as RefsSidebar } from "./ActionRef-DjgN006_.js";
import { c as copyToClipboard } from "./clipboard-rcHxKLZ_.js";
import { u as useCustomizerStore } from "./customizer-COHgOChO.js";
import ProviderChatCompletionPanel from "./ProviderChatCompletionPanel-CU2lv3zH.js";
import { u as useToast } from "./TemplateListEditor-CIYzKHuo.js";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ProjectDialog",
  props: {
    modelValue: { type: Boolean, default: false },
    project: { default: null }
  },
  emits: ["update:modelValue", "save"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    const { tm } = useModuleI18n("features/chat");
    const isOpen = ref(props.modelValue);
    const isEditing = ref(false);
    const form = ref({
      emoji: "📁",
      title: "",
      description: ""
    });
    watch(() => props.modelValue, (newVal) => {
      isOpen.value = newVal;
      if (newVal) {
        if (props.project) {
          isEditing.value = true;
          form.value = {
            emoji: props.project.emoji || "📁",
            title: props.project.title,
            description: props.project.description || ""
          };
        } else {
          isEditing.value = false;
          form.value = {
            emoji: "📁",
            title: "",
            description: ""
          };
        }
      }
    });
    function handleDialogChange(value) {
      emit("update:modelValue", value);
    }
    function handleCancel() {
      isOpen.value = false;
      emit("update:modelValue", false);
    }
    function handleSave() {
      var _a;
      if (!form.value.title.trim()) {
        return;
      }
      emit("save", { ...form.value }, (_a = props.project) == null ? void 0 : _a.project_id);
      isOpen.value = false;
      emit("update:modelValue", false);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VDialog, {
        modelValue: isOpen.value,
        "onUpdate:modelValue": [
          _cache[3] || (_cache[3] = ($event) => isOpen.value = $event),
          handleDialogChange
        ],
        "max-width": "500"
      }, {
        default: withCtx(() => [
          createVNode(VCard, null, {
            default: withCtx(() => [
              createVNode(VCardTitle, { class: "dialog-title" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(isEditing.value ? unref(tm)("project.edit") : unref(tm)("project.create")), 1)
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    modelValue: form.value.emoji,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.emoji = $event),
                    label: unref(tm)("project.emoji"),
                    flat: "",
                    variant: "solo-filled",
                    "hide-details": "",
                    class: "mb-3"
                  }, null, 8, ["modelValue", "label"]),
                  createVNode(VTextField, {
                    modelValue: form.value.title,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.title = $event),
                    label: unref(tm)("project.name"),
                    flat: "",
                    variant: "solo-filled",
                    "hide-details": "",
                    class: "mb-3",
                    autofocus: "",
                    onKeyup: withKeys(handleSave, ["enter"])
                  }, null, 8, ["modelValue", "label", "onKeyup"]),
                  createVNode(VTextarea, {
                    modelValue: form.value.description,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.description = $event),
                    label: unref(tm)("project.description"),
                    flat: "",
                    variant: "solo-filled",
                    "hide-details": "",
                    rows: "3",
                    rounded: "lg"
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }),
              createVNode(VCardActions, null, {
                default: withCtx(() => [
                  createVNode(VSpacer),
                  createVNode(VBtn, {
                    variant: "text",
                    onClick: handleCancel,
                    color: "grey-darken-1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("core.common.cancel")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    variant: "text",
                    onClick: handleSave,
                    color: "primary",
                    disabled: !form.value.title.trim()
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("core.common.save")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
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
const ProjectDialog = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-8ebf9825"]]);
const _hoisted_1$6 = { class: "project-list-shell" };
const _hoisted_2$6 = { class: "project-button-wrap" };
const _hoisted_3$6 = { class: "project-btn-title" };
const _hoisted_4$5 = { class: "project-list-wrap" };
const _hoisted_5$5 = { class: "project-emoji" };
const _hoisted_6$4 = { class: "project-title" };
const _hoisted_7$4 = ["onClick"];
const _hoisted_8$3 = { class: "project-emoji" };
const _hoisted_9$3 = { class: "project-title" };
const _hoisted_10$2 = { class: "project-actions" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ProjectList",
  props: {
    projects: {},
    initialExpanded: { type: Boolean, default: false },
    selectedProjectId: { default: null }
  },
  emits: ["selectProject", "createProject", "editProject", "deleteProject"],
  setup(__props, { emit }) {
    const props = __props;
    const { tm } = useModuleI18n("features/chat");
    const confirmDialog = useConfirmDialog();
    const expanded = ref(props.initialExpanded);
    const savedProjectsExpandedState = localStorage.getItem("projectsExpanded");
    if (savedProjectsExpandedState !== null) {
      expanded.value = JSON.parse(savedProjectsExpandedState);
    }
    function toggleExpanded() {
      expanded.value = !expanded.value;
      localStorage.setItem("projectsExpanded", JSON.stringify(expanded.value));
    }
    async function handleDeleteProject(project) {
      const message = tm("project.confirmDelete", { title: project.title });
      if (await askForConfirmation(message, confirmDialog)) {
        emit("deleteProject", project.project_id);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$6, [
          createVNode(VBtn, {
            block: "",
            variant: "text",
            class: "project-btn",
            onClick: toggleExpanded
          }, {
            default: withCtx(() => [
              createVNode(VIcon, {
                size: "20",
                class: "project-action-icon mr-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" mdi-folder-outline ")
                ]),
                _: 1
              }),
              createBaseVNode("span", _hoisted_3$6, toDisplayString(unref(tm)("project.title")), 1),
              createVNode(VSpacer),
              createVNode(VIcon, {
                size: "18",
                class: "project-toggle-icon"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(expanded.value ? "mdi-chevron-up" : "mdi-chevron-down"), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createVNode(VExpandTransition, null, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_4$5, [
              createBaseVNode("button", {
                class: "project-row create-project-item",
                type: "button",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("createProject"))
              }, [
                createBaseVNode("span", _hoisted_5$5, [
                  createVNode(VIcon, { size: "18" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-plus")
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("span", _hoisted_6$4, toDisplayString(unref(tm)("project.create")), 1)
              ]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.projects, (project) => {
                return openBlock(), createElementBlock("button", {
                  key: project.project_id,
                  class: normalizeClass(["project-row project-item", { active: _ctx.selectedProjectId === project.project_id }]),
                  type: "button",
                  onClick: ($event) => _ctx.$emit("selectProject", project.project_id)
                }, [
                  createBaseVNode("span", _hoisted_8$3, toDisplayString(project.emoji || "📁"), 1),
                  createBaseVNode("span", _hoisted_9$3, toDisplayString(project.title), 1),
                  createBaseVNode("span", _hoisted_10$2, [
                    createVNode(VBtn, {
                      icon: "mdi-pencil",
                      size: "x-small",
                      variant: "text",
                      class: "edit-project-btn",
                      onClick: withModifiers(($event) => _ctx.$emit("editProject", project), ["stop"])
                    }, null, 8, ["onClick"]),
                    createVNode(VBtn, {
                      icon: "mdi-delete",
                      size: "x-small",
                      variant: "text",
                      class: "delete-project-btn",
                      color: "error",
                      onClick: withModifiers(($event) => handleDeleteProject(project), ["stop"])
                    }, null, 8, ["onClick"])
                  ])
                ], 10, _hoisted_7$4);
              }), 128))
            ], 512), [
              [vShow, expanded.value]
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const ProjectList = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-9e8b05f4"]]);
const _hoisted_1$5 = { class: "project-sessions-container fade-in" };
const _hoisted_2$5 = { class: "project-header" };
const _hoisted_3$5 = { class: "project-header-info" };
const _hoisted_4$4 = { class: "project-header-emoji" };
const _hoisted_5$4 = { class: "project-header-title" };
const _hoisted_6$3 = {
  key: 0,
  class: "project-header-description"
};
const _hoisted_7$3 = { class: "project-input-slot" };
const _hoisted_8$2 = { class: "session-actions" };
const _hoisted_9$2 = {
  key: 1,
  class: "no-sessions-in-project"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ProjectView",
  props: {
    project: {},
    sessions: {}
  },
  emits: ["selectSession", "editSessionTitle", "deleteSession"],
  setup(__props, { emit }) {
    const { tm } = useModuleI18n("features/chat");
    const confirmDialog = useConfirmDialog();
    function formatDate(dateString) {
      return new Date(dateString).toLocaleString();
    }
    async function handleDeleteSession(session) {
      const sessionTitle = session.display_name || tm("conversation.newConversation");
      const message = tm("conversation.confirmDelete", { name: sessionTitle });
      if (await askForConfirmation(message, confirmDialog)) {
        emit("deleteSession", session.session_id);
      }
    }
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("div", _hoisted_3$5, [
            createBaseVNode("span", _hoisted_4$4, toDisplayString(((_a = _ctx.project) == null ? void 0 : _a.emoji) || "📁"), 1),
            createBaseVNode("h2", _hoisted_5$4, toDisplayString((_b = _ctx.project) == null ? void 0 : _b.title), 1)
          ]),
          ((_c = _ctx.project) == null ? void 0 : _c.description) ? (openBlock(), createElementBlock("p", _hoisted_6$3, toDisplayString(_ctx.project.description), 1)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_7$3, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        createVNode(VCard, {
          flat: "",
          class: "project-sessions-list"
        }, {
          default: withCtx(() => [
            _ctx.sessions.length > 0 ? (openBlock(), createBlock(VList, { key: 0 }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.sessions, (session) => {
                  return openBlock(), createBlock(VListItem, {
                    key: session.session_id,
                    onClick: ($event) => _ctx.$emit("selectSession", session.session_id),
                    class: "project-session-item",
                    rounded: "lg"
                  }, {
                    append: withCtx(() => [
                      createBaseVNode("div", _hoisted_8$2, [
                        createVNode(VBtn, {
                          icon: "mdi-pencil",
                          size: "x-small",
                          variant: "text",
                          class: "edit-session-btn",
                          onClick: withModifiers(($event) => _ctx.$emit(
                            "editSessionTitle",
                            session.session_id,
                            session.display_name ?? ""
                          ), ["stop"])
                        }, null, 8, ["onClick"]),
                        createVNode(VBtn, {
                          icon: "mdi-delete",
                          size: "x-small",
                          variant: "text",
                          class: "delete-session-btn",
                          color: "error",
                          onClick: withModifiers(($event) => handleDeleteSession(session), ["stop"])
                        }, null, 8, ["onClick"])
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(session.display_name || unref(tm)("conversation.newConversation")), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VListItemSubtitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(formatDate(session.updated_at)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 128))
              ]),
              _: 1
            })) : (openBlock(), createElementBlock("div", _hoisted_9$2, [
              createVNode(VIcon, {
                icon: "mdi-message-outline",
                size: "large",
                color: "grey-lighten-1"
              }),
              createBaseVNode("p", null, toDisplayString(unref(tm)("project.noSessions")), 1)
            ]))
          ]),
          _: 1
        })
      ]);
    };
  }
});
const ProjectView = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-8fb5a33e"]]);
const _hoisted_1$4 = { class: "regenerate-model-name" };
const _hoisted_2$4 = { class: "regenerate-model-icons" };
const _hoisted_3$4 = {
  key: 0,
  class: "regenerate-empty"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "RegenerateMenu",
  emits: ["retry", "retryWithModel"],
  setup(__props, { emit }) {
    const { tm } = useModuleI18n("features/chat");
    const providerConfigs = ref([]);
    const loadingProviders = ref(false);
    const providersLoaded = ref(false);
    async function loadProviderConfigs(force = false) {
      if (loadingProviders.value || providersLoaded.value && !force) return;
      loadingProviders.value = true;
      try {
        const response = await axios.get("/api/config/provider/list", {
          params: { provider_type: "chat_completion" }
        });
        if (response.data.status === "ok") {
          providerConfigs.value = (response.data.data || []).filter(
            (provider) => provider.enable !== false
          );
          providersLoaded.value = true;
        }
      } catch (error) {
        console.error("Failed to load provider list:", error);
      } finally {
        loadingProviders.value = false;
      }
    }
    function handleMenuToggle(isOpen) {
      if (isOpen) {
        loadProviderConfigs();
      }
    }
    function handleModelMenuToggle(isOpen) {
      if (isOpen) {
        loadProviderConfigs();
      }
    }
    function retryWithModel(provider) {
      emit("retryWithModel", {
        providerId: provider.id,
        modelName: provider.model
      });
    }
    function supportsImageInput(provider) {
      var _a, _b, _c;
      return Boolean((_c = (_b = (_a = provider.model_metadata) == null ? void 0 : _a.modalities) == null ? void 0 : _b.input) == null ? void 0 : _c.includes("image"));
    }
    function supportsAudioInput(provider) {
      var _a, _b, _c;
      return Boolean((_c = (_b = (_a = provider.model_metadata) == null ? void 0 : _a.modalities) == null ? void 0 : _b.input) == null ? void 0 : _c.includes("audio"));
    }
    function supportsToolCall(provider) {
      var _a;
      return Boolean((_a = provider.model_metadata) == null ? void 0 : _a.tool_call);
    }
    function supportsReasoning(provider) {
      var _a;
      return Boolean((_a = provider.model_metadata) == null ? void 0 : _a.reasoning);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$a, {
        location: "end",
        offset: "6",
        transition: "none",
        "no-border": "",
        "close-on-content-click": true,
        "onUpdate:modelValue": handleMenuToggle
      }, {
        activator: withCtx(({ props: menuProps }) => [
          createVNode(VBtn, mergeProps(menuProps, {
            icon: "mdi-refresh",
            size: "x-small",
            variant: "text"
          }), null, 16)
        ]),
        default: withCtx(() => [
          createVNode(VListItem, {
            class: "styled-menu-item",
            rounded: "md",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("retry"))
          }, {
            prepend: withCtx(() => [
              createVNode(VIcon, { size: "18" }, {
                default: withCtx(() => [
                  createTextVNode("mdi-refresh")
                ]),
                _: 1
              })
            ]),
            default: withCtx(() => [
              createVNode(VListItemTitle, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(tm)("actions.retry")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VMenu, {
            location: "end",
            offset: "8",
            transition: "none",
            "open-on-hover": "",
            "close-on-content-click": true,
            "onUpdate:modelValue": handleModelMenuToggle
          }, {
            activator: withCtx(({ props: modelMenuProps }) => [
              createVNode(VListItem, mergeProps(modelMenuProps, {
                class: "styled-menu-item",
                rounded: "md"
              }), {
                prepend: withCtx(() => [
                  createVNode(VIcon, { size: "18" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-creation")
                    ]),
                    _: 1
                  })
                ]),
                append: withCtx(() => [
                  loadingProviders.value ? (openBlock(), createBlock(VProgressCircular, {
                    key: 0,
                    indeterminate: "",
                    size: "16",
                    width: "2"
                  })) : (openBlock(), createBlock(VIcon, {
                    key: 1,
                    size: "18"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-chevron-right")
                    ]),
                    _: 1
                  }))
                ]),
                default: withCtx(() => [
                  createVNode(VListItemTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(tm)("actions.retryWithModel")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1040)
            ]),
            default: withCtx(() => [
              createVNode(VCard, {
                class: "styled-menu-card styled-menu-card-borderless regenerate-model-card",
                elevation: "8",
                rounded: "lg"
              }, {
                default: withCtx(() => [
                  createVNode(VList, {
                    density: "compact",
                    class: "styled-menu-list pa-1"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(providerConfigs.value, (provider) => {
                        return openBlock(), createBlock(VListItem, {
                          key: provider.id,
                          class: "styled-menu-item regenerate-model-item",
                          rounded: "md",
                          onClick: ($event) => retryWithModel(provider)
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "text-body-2" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(provider.id), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, { class: "regenerate-model-subtitle" }, {
                              default: withCtx(() => [
                                createBaseVNode("span", _hoisted_1$4, toDisplayString(provider.model), 1),
                                createBaseVNode("span", _hoisted_2$4, [
                                  supportsImageInput(provider) ? (openBlock(), createBlock(VIcon, {
                                    key: 0,
                                    size: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" mdi-eye-outline ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  supportsAudioInput(provider) ? (openBlock(), createBlock(VIcon, {
                                    key: 1,
                                    size: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" mdi-music-note-outline ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  supportsToolCall(provider) ? (openBlock(), createBlock(VIcon, {
                                    key: 2,
                                    size: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" mdi-wrench ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  supportsReasoning(provider) ? (openBlock(), createBlock(VIcon, {
                                    key: 3,
                                    size: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" mdi-brain ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128)),
                      !loadingProviders.value && !providerConfigs.value.length ? (openBlock(), createElementBlock("div", _hoisted_3$4, toDisplayString(unref(tm)("actions.noAvailableModels")), 1)) : createCommentVNode("", true)
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
      });
    };
  }
});
const RegenerateMenu = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-e10c2d74"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ThreadedMarkdownMessagePart",
  props: {
    text: {},
    threads: {},
    refs: {},
    isDark: { type: Boolean },
    customHtmlTags: {}
  },
  emits: ["openThread"],
  setup(__props, { emit }) {
    const props = __props;
    const isDarkRef = computed(() => props.isDark);
    const refsByIndex = computed(() => {
      const refs = props.refs && Array.isArray(props.refs.used) ? props.refs.used : [];
      return refs.reduce((acc, item) => {
        if (item.index != null) {
          acc[String(item.index)] = item;
        }
        return acc;
      }, {});
    });
    const threadMap = computed(
      () => props.threads.reduce((acc, thread) => {
        acc[thread.thread_id] = thread;
        return acc;
      }, {})
    );
    const threadedCustomHtmlTags = computed(
      () => Array.from(/* @__PURE__ */ new Set([...props.customHtmlTags, "thread"]))
    );
    const threadedContent = computed(() => {
      const source = props.text || "";
      const ranges = props.threads.map((thread) => {
        const selected = thread.selected_text || "";
        const start = selected ? source.indexOf(selected) : -1;
        return {
          start,
          end: start + selected.length,
          thread
        };
      }).filter((range) => range.start >= 0 && range.end > range.start).sort((a, b) => a.start - b.start);
      if (!ranges.length) return source;
      let cursor = 0;
      let result = "";
      for (const range of ranges) {
        if (range.start < cursor) continue;
        result += source.slice(cursor, range.start);
        result += `<thread>${escapeHtml(range.thread.thread_id)}</thread>`;
        cursor = range.end;
      }
      result += source.slice(cursor);
      return result;
    });
    provide("isDark", isDarkRef);
    provide("webSearchResults", () => refsByIndex.value);
    provide("chatThreadMap", () => threadMap.value);
    provide("openChatThread", (thread) => emit("openThread", thread));
    function escapeHtml(value) {
      return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Lt), {
        "custom-id": "chat-message",
        content: threadedContent.value,
        "is-dark": _ctx.isDark,
        "custom-html-tags": threadedCustomHtmlTags.value,
        typewriter: false,
        "max-live-nodes": 0
      }, null, 8, ["content", "is-dark", "custom-html-tags"]);
    };
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ThreadNode",
  props: {
    node: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const threadMap = inject("chatThreadMap", () => ({}));
    const openThread = inject("openChatThread", (_thread) => {
    });
    const threadId = computed(() => {
      var _a, _b, _c;
      const nodeContent = (_b = (_a = props.node) == null ? void 0 : _a.content) == null ? void 0 : _b.trim();
      if (nodeContent) return nodeContent;
      return slotText((_c = slots.default) == null ? void 0 : _c.call(slots)).trim();
    });
    const thread = computed(() => {
      const map = typeof threadMap === "function" ? threadMap() : threadMap;
      return map[threadId.value] || null;
    });
    function open() {
      if (thread.value) {
        openThread(thread.value);
      }
    }
    function slotText(nodes = []) {
      return nodes.map((node) => {
        if (typeof node.children === "string") return node.children;
        if (Array.isArray(node.children)) return slotText(node.children);
        return "";
      }).join("");
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("button", {
        class: "thread-node",
        type: "button",
        onClick: open
      }, toDisplayString(((_a = thread.value) == null ? void 0 : _a.selected_text) || threadId.value), 1);
    };
  }
});
const ThreadNode = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3572c714"]]);
const _hoisted_1$3 = { class: "messages-list" };
const _hoisted_2$3 = {
  key: 1,
  class: "bot-avatar-symbol",
  "aria-hidden": "true"
};
const _hoisted_3$3 = { class: "message-stack" };
const _hoisted_4$3 = ["onClick"];
const _hoisted_5$3 = ["src", "alt"];
const _hoisted_6$2 = {
  key: 1,
  class: "sent-attachment-card sent-file-card"
};
const _hoisted_7$2 = { class: "sent-attachment-ext" };
const _hoisted_8$1 = { class: "sent-attachment-name" };
const _hoisted_9$1 = ["onMouseup"];
const _hoisted_10$1 = {
  key: 0,
  class: "loading-message"
};
const _hoisted_11$1 = {
  key: 1,
  class: "inline-message-editor"
};
const _hoisted_12$1 = ["value"];
const _hoisted_13$1 = { class: "inline-message-editor-actions" };
const _hoisted_14$1 = ["onClick"];
const _hoisted_15$1 = {
  key: 1,
  class: "plain-content"
};
const _hoisted_16$1 = {
  key: 2,
  class: "threaded-message-content"
};
const _hoisted_17$1 = ["onClick"];
const _hoisted_18$1 = ["src", "alt"];
const _hoisted_19$1 = ["src"];
const _hoisted_20$1 = ["src"];
const _hoisted_21$1 = {
  key: 7,
  class: "file-part"
};
const _hoisted_22$1 = {
  key: 8,
  class: "tool-call-block"
};
const _hoisted_23 = { class: "tool-call-inline-status" };
const _hoisted_24 = {
  key: 9,
  class: "unknown-part"
};
const _hoisted_25 = {
  key: 2,
  class: "message-meta"
};
const _hoisted_26 = { key: 0 };
const _hoisted_27 = {
  key: 0,
  class: "stats-row"
};
const _hoisted_28 = { class: "stats-row" };
const _hoisted_29 = { class: "stats-row" };
const _hoisted_30 = {
  key: 1,
  class: "stats-row"
};
const _hoisted_31 = { class: "stats-row" };
const _hoisted_32 = {
  key: 6,
  class: "message-meta-refs"
};
const _hoisted_33 = ["src"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChatMessageList",
  props: {
    messages: {},
    isDark: { type: Boolean, default: false },
    isStreaming: { type: Boolean, default: false },
    variant: { default: "main" },
    enableEdit: { type: Boolean, default: false },
    enableRegenerate: { type: Boolean, default: false },
    enableThreadSelection: { type: Boolean, default: false },
    enableCopy: { type: Boolean, default: true },
    manageRefsSidebar: { type: Boolean, default: true },
    editingMessageId: { default: null },
    editDraft: { default: "" },
    savingEdit: { type: Boolean, default: false }
  },
  emits: ["update:editDraft", "openEdit", "cancelEdit", "saveEdit", "regenerate", "regenerateWithModel", "selectBotText", "openThread", "openReasoning", "openRefs"],
  setup(__props, { emit }) {
    const props = __props;
    he("chat-message", {
      ref: RefNode,
      thread: ThreadNode,
      code_block: _sfc_main$b
    });
    const { t } = useI18n();
    const { tm } = useModuleI18n("features/chat");
    const customMarkdownTags = ["ref"];
    const downloadingFiles = ref(/* @__PURE__ */ new Set());
    const imagePreview = reactive({ visible: false, url: "" });
    const refsSidebarOpen = ref(false);
    const selectedRefs = ref(null);
    const listRoot = ref(null);
    const avatarSize = computed(() => props.variant === "thread" ? 36 : 56);
    function isUserMessage(message) {
      return messageContent(message).type === "user";
    }
    function messageContent(message) {
      return message.content || { type: "bot", message: [] };
    }
    function messageParts(message) {
      const parts = messageContent(message).message;
      if (Array.isArray(parts)) return parts;
      if (typeof parts === "string") return [{ type: "plain", text: parts }];
      return [];
    }
    function isAttachmentPart(part) {
      return ["image", "record", "video", "file"].includes(part.type);
    }
    function userAttachmentParts(message) {
      if (!isUserMessage(message)) return [];
      return messageParts(message).filter(isAttachmentPart);
    }
    function hasImageOnlyAttachments(message) {
      const attachments = userAttachmentParts(message);
      return attachments.length > 0 && attachments.every((part) => part.type === "image");
    }
    function bubbleParts(message) {
      if (!isUserMessage(message)) return displayParts(messageContent(message));
      return messageParts(message).filter((part) => !isAttachmentPart(part));
    }
    function shouldShowMessageBubble(message) {
      return !isUserMessage(message) || isEditingMessage(message) || messageContent(message).isLoading || bubbleParts(message).length > 0;
    }
    function isMessageStreaming(message, messageIndex) {
      return props.isStreaming && !isUserMessage(message) && messageIndex === props.messages.length - 1;
    }
    function isEditingMessage(message) {
      return props.editingMessageId != null && message.id != null && String(props.editingMessageId) === String(message.id);
    }
    function canEditMessage(message, messageIndex) {
      return props.enableEdit && isUserMessage(message) && messageIndex === latestEditableUserIndex() && message.id != null && !String(message.id).startsWith("local-");
    }
    function latestEditableUserIndex() {
      for (let index = props.messages.length - 1; index >= 0; index -= 1) {
        const message = props.messages[index];
        if (isUserMessage(message) && message.id != null && !String(message.id).startsWith("local-")) {
          return index;
        }
      }
      return -1;
    }
    function canRegenerateMessage(message, messageIndex) {
      return props.enableRegenerate && !isUserMessage(message) && messageIndex === props.messages.length - 1 && !isMessageStreaming(message, messageIndex) && Boolean(message.llm_checkpoint_id);
    }
    function showMessageMeta(message, messageIndex) {
      return !messageContent(message).isLoading && !isMessageStreaming(message, messageIndex);
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
    const attachmentTypeStyles = {
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
    function attachmentName(part) {
      var _a;
      return ((_a = part.embedded_file) == null ? void 0 : _a.filename) || part.filename || part.type || "file";
    }
    function attachmentExtension(part) {
      var _a;
      const name = attachmentName(part);
      const extension = ((_a = name.split(".").pop()) == null ? void 0 : _a.toLowerCase()) || "";
      return extension === name.toLowerCase() ? "" : extension;
    }
    function attachmentPresentation(part) {
      if (part.type === "record") {
        return { color: "#00897b", icon: "mdi-microphone", label: "AUDIO" };
      }
      if (part.type === "video") {
        return { color: "#5e35b1", icon: "mdi-file-video-outline", label: "VIDEO" };
      }
      const extension = attachmentExtension(part);
      return attachmentTypeStyles[extension] || {
        color: "#607d8b",
        icon: "mdi-file-document-outline",
        label: extension ? extension.slice(0, 4).toUpperCase() : "FILE"
      };
    }
    function handleMouseUp(event, message) {
      if (props.enableThreadSelection && !isUserMessage(message)) {
        emit("selectBotText", event, message);
      }
    }
    function messageThreads(message) {
      return message.threads || [];
    }
    function threadCountLabel(count) {
      return tm("thread.count", { count });
    }
    function threadPreview(thread) {
      return truncate(thread.selected_text || tm("thread.title"), 48);
    }
    function partUrl(part) {
      var _a;
      if (part.embedded_url) return part.embedded_url;
      if ((_a = part.embedded_file) == null ? void 0 : _a.url) return part.embedded_file.url;
      if (part.attachment_id) {
        return `/api/chat/get_attachment?attachment_id=${encodeURIComponent(
          part.attachment_id
        )}`;
      }
      if (part.filename) {
        return `/api/chat/get_file?filename=${encodeURIComponent(part.filename)}`;
      }
      return "";
    }
    function plainTextFromMessage(message) {
      return messageParts(message).filter((part) => part.type === "plain" && part.text).map((part) => part.text).join("\n");
    }
    function replyPreview(messageId, fallback) {
      if (fallback) return truncate(fallback, 80);
      const found = props.messages.find(
        (message) => String(message.id) === String(messageId)
      );
      const text = found ? plainTextFromMessage(found) : "";
      return text ? truncate(text, 80) : tm("reply.replyTo");
    }
    function truncate(value, max) {
      return value.length > max ? `${value.slice(0, max)}...` : value;
    }
    function scrollToMessage(messageId) {
      if (!messageId) return;
      const index = props.messages.findIndex(
        (message) => String(message.id) === String(messageId)
      );
      if (index < 0) return;
      nextTick(() => {
        var _a, _b;
        (_b = (_a = listRoot.value) == null ? void 0 : _a.querySelectorAll(".message-row")[index]) == null ? void 0 : _b.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
    function formatJson(value) {
      if (typeof value === "string") {
        const parsed = parseJsonSafe2(value);
        if (parsed !== value) return JSON.stringify(parsed, null, 2);
        return value;
      }
      try {
        return JSON.stringify(value, null, 2);
      } catch {
        return String(value ?? "");
      }
    }
    function parseJsonSafe2(value) {
      if (typeof value !== "string") return value;
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }
    function messageRefs(message) {
      return resolvedMessageRefs(message).used;
    }
    function resolvedMessageRefs(message) {
      return normalizeRefs(messageContent(message).refs);
    }
    function normalizeRefs(refs) {
      if (!refs) return { used: [] };
      const used = Array.isArray(refs == null ? void 0 : refs.used) ? refs.used : Array.isArray(refs) ? refs : [];
      return { used: normalizeRefItems(used) };
    }
    function normalizeRefItems(items) {
      return items.map((item) => ({
        index: item == null ? void 0 : item.index,
        title: (item == null ? void 0 : item.title) || (item == null ? void 0 : item.url) || tm("refs.title"),
        url: item == null ? void 0 : item.url,
        snippet: item == null ? void 0 : item.snippet,
        favicon: item == null ? void 0 : item.favicon
      })).filter((item) => item.url);
    }
    function handleOpenRefs(refs) {
      if (!props.manageRefsSidebar) {
        emit("openRefs", refs);
        return;
      }
      selectedRefs.value = refs && typeof refs === "object" ? refs : null;
      refsSidebarOpen.value = true;
    }
    function normalizeToolCall(tool) {
      const normalized = { ...tool };
      normalized.args = normalized.args ?? normalized.arguments ?? {};
      normalized.ts = normalized.ts ?? Date.now() / 1e3;
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
    async function copyMessage(message) {
      const text = plainTextFromMessage(message);
      if (!text) return;
      await copyToClipboard(text);
    }
    async function downloadPart(part) {
      const key = part.attachment_id || part.filename || "";
      if (!key) return;
      downloadingFiles.value = new Set(downloadingFiles.value).add(key);
      try {
        const response = await axios.get(partUrl(part), { responseType: "blob" });
        const url = URL.createObjectURL(response.data);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = part.filename || "file";
        anchor.click();
        URL.revokeObjectURL(url);
      } finally {
        const next = new Set(downloadingFiles.value);
        next.delete(key);
        downloadingFiles.value = next;
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
    function formatTime(value) {
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return "";
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
    function inputTokens(stats) {
      const usage = (stats == null ? void 0 : stats.token_usage) || {};
      return usage.input_other || 0;
    }
    function outputTokens(stats) {
      var _a;
      return ((_a = stats == null ? void 0 : stats.token_usage) == null ? void 0 : _a.output) || 0;
    }
    function cachedInputTokens(stats) {
      var _a;
      return ((_a = stats == null ? void 0 : stats.token_usage) == null ? void 0 : _a.input_cached) || 0;
    }
    function agentDuration(stats) {
      const directDuration = readPositiveNumber(stats, [
        "duration",
        "total_duration"
      ]);
      if (directDuration !== null) return formatDuration(directDuration);
      const startTime = readPositiveNumber(stats, ["start_time"]);
      const endTime = readPositiveNumber(stats, ["end_time"]);
      if (startTime === null || endTime === null || endTime < startTime) return "-";
      return formatDuration(endTime - startTime);
    }
    function agentTtft(stats) {
      const ttft = readPositiveNumber(stats, [
        "time_to_first_token",
        "ttft",
        "first_token_latency"
      ]);
      if (ttft === null) return "";
      return formatDuration(ttft);
    }
    function readPositiveNumber(source, keys) {
      for (const key of keys) {
        const value = Number(source == null ? void 0 : source[key]);
        if (Number.isFinite(value) && value > 0) return value;
      }
      return null;
    }
    function formatDuration(seconds) {
      if (seconds < 1) return `${Math.round(seconds * 1e3)}ms`;
      if (seconds < 60) return `${seconds.toFixed(1)}s`;
      const minutes = Math.floor(seconds / 60);
      const restSeconds = Math.round(seconds % 60);
      return `${minutes}m ${restSeconds}s`;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "listRoot",
        ref: listRoot,
        class: normalizeClass(["chat-message-list", [`variant-${_ctx.variant}`, { "is-dark": _ctx.isDark }]])
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.messages, (msg, msgIndex) => {
            return openBlock(), createElementBlock("div", {
              key: msg.id || `${msgIndex}-${msg.created_at || ""}`,
              class: normalizeClass(["message-row", isUserMessage(msg) ? "from-user" : "from-bot"])
            }, [
              !isUserMessage(msg) ? (openBlock(), createBlock(VAvatar, {
                key: 0,
                class: "bot-avatar",
                size: avatarSize.value
              }, {
                default: withCtx(() => [
                  isMessageStreaming(msg, msgIndex) ? (openBlock(), createBlock(VProgressCircular, {
                    key: 0,
                    class: "bot-streaming-spinner",
                    indeterminate: "",
                    size: "22",
                    width: "2"
                  })) : (openBlock(), createElementBlock("span", _hoisted_2$3, "✦"))
                ]),
                _: 2
              }, 1032, ["size"])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_3$3, [
                isUserMessage(msg) && userAttachmentParts(msg).length ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(["sent-attachments", { "images-only": hasImageOnlyAttachments(msg) }])
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(userAttachmentParts(msg), (part, attachmentIndex) => {
                    return openBlock(), createElementBlock(Fragment, {
                      key: `${msgIndex}-attachment-${attachmentIndex}-${part.type}`
                    }, [
                      part.type === "image" ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        class: "sent-attachment-card sent-image-card",
                        type: "button",
                        onClick: ($event) => openImage(partUrl(part))
                      }, [
                        createBaseVNode("img", {
                          src: partUrl(part),
                          alt: part.filename || "image"
                        }, null, 8, _hoisted_5$3)
                      ], 8, _hoisted_4$3)) : (openBlock(), createElementBlock("div", _hoisted_6$2, [
                        createBaseVNode("div", {
                          class: "sent-attachment-icon",
                          style: normalizeStyle({ color: attachmentPresentation(part).color })
                        }, [
                          createVNode(VIcon, {
                            icon: attachmentPresentation(part).icon,
                            size: "24"
                          }, null, 8, ["icon"]),
                          createBaseVNode("span", _hoisted_7$2, toDisplayString(attachmentPresentation(part).label), 1)
                        ], 4),
                        createBaseVNode("span", _hoisted_8$1, toDisplayString(attachmentName(part)), 1),
                        part.type === "file" ? (openBlock(), createBlock(VBtn, {
                          key: 0,
                          icon: "mdi-download",
                          size: "x-small",
                          variant: "text",
                          loading: downloadingFiles.value.has(
                            part.attachment_id || part.filename || ""
                          ),
                          onClick: ($event) => downloadPart(part)
                        }, null, 8, ["loading", "onClick"])) : createCommentVNode("", true)
                      ]))
                    ], 64);
                  }), 128))
                ], 2)) : createCommentVNode("", true),
                shouldShowMessageBubble(msg) ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(["message-bubble", { user: isUserMessage(msg), bot: !isUserMessage(msg) }]),
                  onMouseup: ($event) => handleMouseUp($event, msg)
                }, [
                  messageContent(msg).isLoading ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                    createBaseVNode("span", null, toDisplayString(unref(tm)("message.loading")), 1)
                  ])) : isEditingMessage(msg) ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
                    createBaseVNode("textarea", {
                      value: _ctx.editDraft,
                      class: "inline-message-editor-input",
                      rows: "2",
                      autofocus: "",
                      onInput: _cache[0] || (_cache[0] = ($event) => emit(
                        "update:editDraft",
                        $event.target.value
                      )),
                      onKeydown: _cache[1] || (_cache[1] = withKeys(($event) => emit("cancelEdit"), ["esc"]))
                    }, null, 40, _hoisted_12$1),
                    createBaseVNode("div", _hoisted_13$1, [
                      createVNode(VBtn, {
                        class: "inline-message-editor-action",
                        size: "small",
                        variant: "text",
                        onClick: _cache[2] || (_cache[2] = ($event) => emit("cancelEdit"))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("core.common.cancel")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        class: "inline-message-editor-action",
                        size: "small",
                        color: "primary",
                        variant: "tonal",
                        loading: _ctx.savingEdit,
                        onClick: _cache[3] || (_cache[3] = ($event) => emit("saveEdit"))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("core.common.save")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ])) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(renderBlocks(msg), (block, blockIndex) => {
                    return openBlock(), createElementBlock(Fragment, {
                      key: `${msgIndex}-block-${blockIndex}-${block.kind}`
                    }, [
                      block.kind === "thinking" ? (openBlock(), createBlock(ReasoningBlock, {
                        key: 0,
                        parts: block.parts,
                        "is-dark": _ctx.isDark,
                        "initial-expanded": false,
                        "is-streaming": isMessageStreaming(msg, msgIndex),
                        "has-non-reasoning-content": hasFollowingContentBlock(msg, blockIndex),
                        "open-in-sidebar": _ctx.variant === "main",
                        onOpen: ($event) => emit("openReasoning", { message: msg, blockIndex })
                      }, null, 8, ["parts", "is-dark", "is-streaming", "has-non-reasoning-content", "open-in-sidebar", "onOpen"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(block.parts, (part, partIndex) => {
                        return openBlock(), createElementBlock(Fragment, {
                          key: `${msgIndex}-${blockIndex}-${partIndex}-${part.type}`
                        }, [
                          part.type === "reply" ? (openBlock(), createElementBlock("button", {
                            key: 0,
                            class: "reply-quote",
                            type: "button",
                            onClick: ($event) => scrollToMessage(part.message_id)
                          }, [
                            createVNode(VIcon, { size: "15" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-reply")
                              ]),
                              _: 1
                            }),
                            createBaseVNode("span", null, toDisplayString(replyPreview(part.message_id, part.selected_text)), 1)
                          ], 8, _hoisted_14$1)) : part.type === "plain" && isUserMessage(msg) ? (openBlock(), createElementBlock("div", _hoisted_15$1, toDisplayString(part.text || ""), 1)) : part.type === "plain" && messageThreads(msg).length ? (openBlock(), createElementBlock("div", _hoisted_16$1, [
                            createVNode(_sfc_main$5, {
                              text: part.text || "",
                              threads: messageThreads(msg),
                              refs: resolvedMessageRefs(msg),
                              "is-dark": _ctx.isDark,
                              "custom-html-tags": customMarkdownTags,
                              onOpenThread: _cache[4] || (_cache[4] = ($event) => emit("openThread", $event))
                            }, null, 8, ["text", "threads", "refs", "is-dark"])
                          ])) : part.type === "plain" ? (openBlock(), createBlock(_sfc_main$c, {
                            key: 3,
                            content: part.text || "",
                            refs: resolvedMessageRefs(msg),
                            "is-dark": _ctx.isDark,
                            "custom-html-tags": customMarkdownTags
                          }, null, 8, ["content", "refs", "is-dark"])) : part.type === "image" ? (openBlock(), createElementBlock("button", {
                            key: 4,
                            class: "image-part",
                            type: "button",
                            onClick: ($event) => openImage(partUrl(part))
                          }, [
                            createBaseVNode("img", {
                              src: partUrl(part),
                              alt: part.filename || "image"
                            }, null, 8, _hoisted_18$1)
                          ], 8, _hoisted_17$1)) : part.type === "record" ? (openBlock(), createElementBlock("audio", {
                            key: 5,
                            class: "audio-part",
                            controls: "",
                            src: partUrl(part)
                          }, null, 8, _hoisted_19$1)) : part.type === "video" ? (openBlock(), createElementBlock("video", {
                            key: 6,
                            class: "video-part",
                            controls: "",
                            src: partUrl(part)
                          }, null, 8, _hoisted_20$1)) : part.type === "file" ? (openBlock(), createElementBlock("div", _hoisted_21$1, [
                            createVNode(VIcon, { size: "20" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-file-document-outline")
                              ]),
                              _: 1
                            }),
                            createBaseVNode("span", null, toDisplayString(part.filename || "file"), 1),
                            createVNode(VBtn, {
                              icon: "mdi-download",
                              size: "x-small",
                              variant: "text",
                              loading: downloadingFiles.value.has(
                                part.attachment_id || part.filename || ""
                              ),
                              onClick: ($event) => downloadPart(part)
                            }, null, 8, ["loading", "onClick"])
                          ])) : part.type === "tool_call" ? (openBlock(), createElementBlock("div", _hoisted_22$1, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(part.tool_calls || [], (tool) => {
                              return openBlock(), createElementBlock(Fragment, {
                                key: tool.id || tool.name
                              }, [
                                isIPythonToolCall(tool) ? (openBlock(), createBlock(ToolCallItem, {
                                  key: 0,
                                  "is-dark": _ctx.isDark
                                }, {
                                  label: withCtx(() => [
                                    createVNode(VIcon, { size: "16" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-code-json")
                                      ]),
                                      _: 1
                                    }),
                                    createBaseVNode("span", null, toDisplayString(tool.name || "python"), 1),
                                    createBaseVNode("span", _hoisted_23, toDisplayString(toolCallStatusText(tool)), 1)
                                  ]),
                                  details: withCtx(() => [
                                    createVNode(IPythonToolBlock, {
                                      "tool-call": normalizeToolCall(tool),
                                      "is-dark": _ctx.isDark,
                                      "show-header": false,
                                      "force-expanded": true
                                    }, null, 8, ["tool-call", "is-dark"])
                                  ]),
                                  _: 2
                                }, 1032, ["is-dark"])) : (openBlock(), createBlock(ToolCallCard, {
                                  key: 1,
                                  "tool-call": normalizeToolCall(tool),
                                  "is-dark": _ctx.isDark
                                }, null, 8, ["tool-call", "is-dark"]))
                              ], 64);
                            }), 128))
                          ])) : (openBlock(), createElementBlock("div", _hoisted_24, toDisplayString(formatJson(part)), 1))
                        ], 64);
                      }), 128))
                    ], 64);
                  }), 128))
                ], 42, _hoisted_9$1)) : createCommentVNode("", true),
                showMessageMeta(msg, msgIndex) ? (openBlock(), createElementBlock("div", _hoisted_25, [
                  msg.created_at ? (openBlock(), createElementBlock("span", _hoisted_26, toDisplayString(formatTime(msg.created_at)), 1)) : createCommentVNode("", true),
                  canEditMessage(msg, msgIndex) ? (openBlock(), createBlock(VBtn, {
                    key: 1,
                    icon: "mdi-pencil-outline",
                    size: "x-small",
                    variant: "text",
                    onClick: ($event) => emit("openEdit", msg)
                  }, null, 8, ["onClick"])) : createCommentVNode("", true),
                  canRegenerateMessage(msg, msgIndex) ? (openBlock(), createBlock(RegenerateMenu, {
                    key: 2,
                    onRetry: ($event) => emit("regenerate", msg),
                    onRetryWithModel: ($event) => emit("regenerateWithModel", msg, $event)
                  }, null, 8, ["onRetry", "onRetryWithModel"])) : createCommentVNode("", true),
                  _ctx.enableCopy && !isUserMessage(msg) ? (openBlock(), createBlock(VBtn, {
                    key: 3,
                    icon: "mdi-content-copy",
                    size: "x-small",
                    variant: "text",
                    onClick: ($event) => copyMessage(msg)
                  }, null, 8, ["onClick"])) : createCommentVNode("", true),
                  messageContent(msg).agentStats ? (openBlock(), createBlock(VMenu, {
                    key: 4,
                    location: "bottom",
                    transition: "none"
                  }, {
                    activator: withCtx(({ props: statsProps }) => [
                      createVNode(VBtn, mergeProps(statsProps, {
                        icon: "mdi-information-outline",
                        size: "x-small",
                        variant: "text"
                      }), null, 16)
                    ]),
                    default: withCtx(() => [
                      createVNode(VCard, {
                        class: "stats-card",
                        elevation: "4"
                      }, {
                        default: withCtx(() => [
                          cachedInputTokens(messageContent(msg).agentStats) > 0 ? (openBlock(), createElementBlock("div", _hoisted_27, [
                            createBaseVNode("span", null, toDisplayString(unref(tm)("stats.cachedTokens")), 1),
                            createBaseVNode("strong", null, toDisplayString(cachedInputTokens(messageContent(msg).agentStats)), 1)
                          ])) : createCommentVNode("", true),
                          createBaseVNode("div", _hoisted_28, [
                            createBaseVNode("span", null, toDisplayString(unref(tm)("stats.inputTokens")), 1),
                            createBaseVNode("strong", null, toDisplayString(inputTokens(messageContent(msg).agentStats)), 1)
                          ]),
                          createBaseVNode("div", _hoisted_29, [
                            createBaseVNode("span", null, toDisplayString(unref(tm)("stats.outputTokens")), 1),
                            createBaseVNode("strong", null, toDisplayString(outputTokens(messageContent(msg).agentStats)), 1)
                          ]),
                          agentTtft(messageContent(msg).agentStats) ? (openBlock(), createElementBlock("div", _hoisted_30, [
                            createBaseVNode("span", null, toDisplayString(unref(tm)("stats.ttft")), 1),
                            createBaseVNode("strong", null, toDisplayString(agentTtft(messageContent(msg).agentStats)), 1)
                          ])) : createCommentVNode("", true),
                          createBaseVNode("div", _hoisted_31, [
                            createBaseVNode("span", null, toDisplayString(unref(tm)("stats.duration")), 1),
                            createBaseVNode("strong", null, toDisplayString(agentDuration(messageContent(msg).agentStats)), 1)
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)) : createCommentVNode("", true),
                  messageThreads(msg).length ? (openBlock(), createBlock(_sfc_main$a, {
                    key: 5,
                    location: "bottom",
                    transition: "none",
                    "no-border": ""
                  }, {
                    activator: withCtx(({ props: threadMenuProps }) => [
                      createBaseVNode("button", mergeProps(threadMenuProps, {
                        class: "message-thread-meta",
                        type: "button"
                      }), [
                        createVNode(VIcon, { size: "14" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-source-branch")
                          ]),
                          _: 1
                        }),
                        createBaseVNode("span", null, toDisplayString(threadCountLabel(messageThreads(msg).length)), 1)
                      ], 16)
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(messageThreads(msg), (thread) => {
                        return openBlock(), createBlock(VListItem, {
                          key: thread.thread_id,
                          class: "styled-menu-item thread-menu-item",
                          rounded: "md",
                          onClick: ($event) => emit("openThread", thread)
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VIcon, { size: "16" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-source-branch")
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "thread-menu-title" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(threadPreview(thread)), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1024)) : createCommentVNode("", true),
                  messageRefs(msg).length ? (openBlock(), createElementBlock("div", _hoisted_32, [
                    createVNode(ActionRef, {
                      refs: resolvedMessageRefs(msg),
                      onOpenRefs: handleOpenRefs
                    }, null, 8, ["refs"])
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])
            ], 2);
          }), 128))
        ]),
        _ctx.manageRefsSidebar ? (openBlock(), createBlock(RefsSidebar, {
          key: 0,
          modelValue: refsSidebarOpen.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => refsSidebarOpen.value = $event),
          refs: selectedRefs.value
        }, null, 8, ["modelValue", "refs"])) : createCommentVNode("", true),
        createVNode(VOverlay, {
          modelValue: imagePreview.visible,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => imagePreview.visible = $event),
          class: "image-preview-overlay",
          scrim: "rgba(0, 0, 0, 0.86)",
          onClick: closeImage
        }, {
          default: withCtx(() => [
            createBaseVNode("img", {
              src: imagePreview.url,
              class: "preview-image",
              alt: "preview",
              onClick: _cache[6] || (_cache[6] = withModifiers(() => {
              }, ["stop"]))
            }, null, 8, _hoisted_33)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 2);
    };
  }
});
const ChatMessageList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c263f861"]]);
const _hoisted_1$2 = {
  key: 0,
  class: "reasoning-sidebar"
};
const _hoisted_2$2 = { class: "reasoning-sidebar-header" };
const _hoisted_3$2 = { class: "reasoning-sidebar-title" };
const _hoisted_4$2 = { class: "reasoning-sidebar-body" };
const _hoisted_5$2 = {
  key: 1,
  class: "reasoning-sidebar-empty"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ReasoningSidebar",
  props: {
    modelValue: { type: Boolean },
    parts: {},
    reasoning: {},
    isDark: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const { tm } = useModuleI18n("features/chat");
    function close() {
      emit("update:modelValue", false);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "slide-left" }, {
        default: withCtx(() => [
          _ctx.modelValue ? (openBlock(), createElementBlock("aside", _hoisted_1$2, [
            createBaseVNode("div", _hoisted_2$2, [
              createBaseVNode("div", _hoisted_3$2, toDisplayString(unref(tm)("reasoning.thinking")), 1),
              createVNode(VBtn, {
                icon: "mdi-close",
                size: "small",
                variant: "text",
                onClick: close
              })
            ]),
            createBaseVNode("div", _hoisted_4$2, [
              _ctx.parts.length || _ctx.reasoning ? (openBlock(), createBlock(ReasoningTimeline, {
                key: 0,
                parts: _ctx.parts,
                reasoning: _ctx.reasoning,
                "is-dark": _ctx.isDark
              }, null, 8, ["parts", "reasoning", "is-dark"])) : (openBlock(), createElementBlock("div", _hoisted_5$2, toDisplayString(unref(tm)("reasoning.thinking")), 1))
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const ReasoningSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f9ceafa2"]]);
const _hoisted_1$1 = {
  key: 0,
  class: "thread-panel"
};
const _hoisted_2$1 = { class: "thread-panel-header" };
const _hoisted_3$1 = { class: "thread-panel-title" };
const _hoisted_4$1 = { class: "thread-panel-actions" };
const _hoisted_5$1 = { class: "thread-selected-text" };
const _hoisted_6$1 = ["onSubmit"];
const _hoisted_7$1 = ["placeholder", "disabled", "onKeydown"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ThreadPanel",
  props: {
    modelValue: { type: Boolean },
    thread: {},
    isDark: { type: Boolean },
    deleting: { type: Boolean }
  },
  emits: ["update:modelValue", "delete"],
  setup(__props, { emit }) {
    const props = __props;
    const { tm } = useModuleI18n("features/chat");
    const messages = ref([]);
    const draft = ref("");
    const sending = ref(false);
    const messagesEl = ref(null);
    watch(
      () => {
        var _a;
        return (_a = props.thread) == null ? void 0 : _a.thread_id;
      },
      (threadId) => {
        if (threadId) {
          loadThread(threadId);
        } else {
          messages.value = [];
        }
      },
      { immediate: true }
    );
    function close() {
      emit("update:modelValue", false);
    }
    async function loadThread(threadId) {
      var _a, _b;
      try {
        const response = await axios.get("/api/chat/thread/get", {
          params: { thread_id: threadId }
        });
        const history = ((_b = (_a = response.data) == null ? void 0 : _a.data) == null ? void 0 : _b.history) || [];
        messages.value = history.map(normalizeRecord);
        scrollToBottom();
      } catch (error) {
        console.error("Failed to load thread:", error);
        messages.value = [];
      }
    }
    async function send() {
      var _a;
      if (!props.thread || sending.value || !draft.value.trim()) return;
      const text = draft.value.trim();
      draft.value = "";
      const messageId = ((_a = crypto.randomUUID) == null ? void 0 : _a.call(crypto)) || `${Date.now()}-${Math.random()}`;
      const userRecord = {
        id: `local-thread-user-${messageId}`,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        content: {
          type: "user",
          message: [{ type: "plain", text }]
        }
      };
      const botRecord = {
        id: `local-thread-bot-${messageId}`,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        content: {
          type: "bot",
          message: [],
          reasoning: "",
          isLoading: true
        }
      };
      messages.value.push(userRecord, botRecord);
      const threadUserRecord = messages.value[messages.value.length - 2];
      const threadBotRecord = messages.value[messages.value.length - 1];
      scrollToBottom();
      const abort = new AbortController();
      sending.value = true;
      try {
        const response = await fetch("/api/chat/thread/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token") || ""}`
          },
          body: JSON.stringify({
            thread_id: props.thread.thread_id,
            message: [{ type: "plain", text }],
            enable_streaming: true
          }),
          signal: abort.signal
        });
        if (!response.ok || !response.body) {
          throw new Error(`Thread request failed: ${response.status}`);
        }
        await readSseStream(response.body, (payload) => {
          processPayload(threadBotRecord, threadUserRecord, payload);
          scrollToBottom();
        });
      } catch (error) {
        appendPlain(
          threadBotRecord,
          `

${String((error == null ? void 0 : error.message) || error)}`
        );
        console.error("Failed to send thread message:", error);
      } finally {
        sending.value = false;
      }
    }
    function normalizeRecord(record) {
      const content = record.content || {};
      const normalizedMessage = normalizeMessageParts(
        content.message || [],
        content.reasoning || ""
      );
      return {
        ...record,
        content: {
          type: content.type || (record.sender_id === "bot" ? "bot" : "user"),
          message: normalizedMessage,
          reasoning: extractReasoningText(normalizedMessage, content.reasoning || ""),
          agentStats: content.agentStats || content.agent_stats,
          refs: content.refs
        }
      };
    }
    async function readSseStream(stream, onPayload) {
      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const chunks = buffer.split("\n\n");
        buffer = chunks.pop() || "";
        for (const chunk of chunks) {
          const data = chunk.split("\n").filter((line) => line.startsWith("data:")).map((line) => line.slice(5).trimStart()).join("\n");
          if (!data) continue;
          try {
            onPayload(JSON.parse(data));
          } catch (error) {
            console.error("Failed to parse thread SSE payload:", error, data);
          }
        }
      }
    }
    function processPayload(botRecord, userRecord, payload) {
      const normalized = (payload == null ? void 0 : payload.ct) === "chat" ? { ...payload, type: payload.type || payload.t } : payload;
      const type = (normalized == null ? void 0 : normalized.type) || (normalized == null ? void 0 : normalized.t);
      const chainType = normalized == null ? void 0 : normalized.chain_type;
      const data = (normalized == null ? void 0 : normalized.data) ?? "";
      if (type === "session_id" || type === "session_bound") return;
      if (type === "user_message_saved") {
        userRecord.id = (data == null ? void 0 : data.id) || userRecord.id;
        userRecord.created_at = (data == null ? void 0 : data.created_at) || userRecord.created_at;
        userRecord.llm_checkpoint_id = (data == null ? void 0 : data.llm_checkpoint_id) || userRecord.llm_checkpoint_id;
        return;
      }
      if (type === "message_saved") {
        markMessageStarted(botRecord);
        botRecord.id = (data == null ? void 0 : data.id) || botRecord.id;
        botRecord.created_at = (data == null ? void 0 : data.created_at) || botRecord.created_at;
        botRecord.llm_checkpoint_id = (data == null ? void 0 : data.llm_checkpoint_id) || botRecord.llm_checkpoint_id;
        if (data == null ? void 0 : data.refs) {
          botRecord.content.refs = data.refs;
        }
        return;
      }
      if (type === "agent_stats" || chainType === "agent_stats") {
        markMessageStarted(botRecord);
        botRecord.content.agentStats = data;
        return;
      }
      if (type === "error") {
        markMessageStarted(botRecord);
        appendPlain(botRecord, `

${String(data)}`);
        return;
      }
      if (type === "complete" || type === "break") {
        markMessageStarted(botRecord);
        const finalText = payloadText(data);
        if (finalText && !hasPlainText(botRecord)) {
          appendPlain(botRecord, finalText, false);
        }
        return;
      }
      if (type === "end") {
        markMessageStarted(botRecord);
        return;
      }
      if (type === "plain") {
        markMessageStarted(botRecord);
        if (chainType === "reasoning") {
          appendReasoningPart(botRecord, payloadText(data));
          return;
        }
        if (chainType === "tool_call") {
          upsertToolCall(botRecord, parseJsonSafe(data));
          return;
        }
        if (chainType === "tool_call_result") {
          finishToolCall(botRecord, parseJsonSafe(data));
          return;
        }
        appendPlain(botRecord, payloadText(data), normalized.streaming !== false);
        return;
      }
      if (["image", "record", "file", "video"].includes(type)) {
        markMessageStarted(botRecord);
        const filename = String(data).replace("[IMAGE]", "").replace("[RECORD]", "").replace("[FILE]", "").replace("[VIDEO]", "").split("|", 1)[0];
        botRecord.content.message.push({ type, filename });
      }
    }
    function scrollToBottom() {
      nextTick(() => {
        if (messagesEl.value) {
          messagesEl.value.scrollTop = messagesEl.value.scrollHeight;
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "slide-left" }, {
        default: withCtx(() => [
          _ctx.modelValue && _ctx.thread ? (openBlock(), createElementBlock("aside", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("div", _hoisted_3$1, toDisplayString(unref(tm)("thread.title")), 1),
              createBaseVNode("div", _hoisted_4$1, [
                createVNode(VBtn, {
                  icon: "mdi-delete-outline",
                  class: "thread-delete-button",
                  size: "small",
                  variant: "text",
                  title: unref(tm)("thread.delete"),
                  loading: _ctx.deleting,
                  disabled: sending.value || _ctx.deleting,
                  onClick: _cache[0] || (_cache[0] = ($event) => emit("delete", _ctx.thread))
                }, null, 8, ["title", "loading", "disabled"]),
                createVNode(VBtn, {
                  icon: "mdi-close",
                  size: "small",
                  variant: "text",
                  onClick: close
                })
              ])
            ]),
            createBaseVNode("blockquote", _hoisted_5$1, toDisplayString(_ctx.thread.selected_text), 1),
            createBaseVNode("div", {
              ref_key: "messagesEl",
              ref: messagesEl,
              class: "thread-messages"
            }, [
              createVNode(ChatMessageList, {
                messages: messages.value,
                "is-dark": _ctx.isDark,
                "is-streaming": sending.value,
                variant: "thread"
              }, null, 8, ["messages", "is-dark", "is-streaming"])
            ], 512),
            createBaseVNode("form", {
              class: "thread-composer",
              onSubmit: withModifiers(send, ["prevent"])
            }, [
              withDirectives(createBaseVNode("textarea", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => draft.value = $event),
                class: "thread-input",
                placeholder: unref(tm)("thread.placeholder"),
                rows: "1",
                disabled: sending.value,
                onKeydown: withKeys(withModifiers(send, ["exact", "prevent"]), ["enter"])
              }, null, 40, _hoisted_7$1), [
                [vModelText, draft.value]
              ]),
              createVNode(VBtn, {
                class: "thread-send-button",
                variant: "text",
                loading: sending.value,
                disabled: !draft.value.trim(),
                type: "submit"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(tm)("input.send")), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ], 40, _hoisted_6$1)
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const ThreadPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-444b9721"]]);
function useSessions(chatboxMode = false) {
  const router = useRouter();
  const sessions = ref([]);
  const selectedSessions = ref([]);
  const currSessionId = ref("");
  const pendingSessionId = ref(null);
  const editTitleDialog = ref(false);
  const editingTitle = ref("");
  const editingSessionId = ref("");
  const getCurrentSession = computed(() => {
    if (!currSessionId.value) return null;
    return sessions.value.find((s) => s.session_id === currSessionId.value);
  });
  async function getSessions() {
    var _a;
    try {
      const response = await axios.get("/api/chat/sessions");
      sessions.value = response.data.data;
    } catch (err) {
      if (((_a = err.response) == null ? void 0 : _a.status) === 401) {
        router.push("/auth/login?redirect=/chatbox");
      }
      console.error(err);
    }
  }
  async function newSession() {
    try {
      const selectedConfigId = getStoredSelectedChatConfigId();
      const response = await axios.get("/api/chat/new_session");
      const sessionId = response.data.data.session_id;
      const platformId = response.data.data.platform_id;
      currSessionId.value = sessionId;
      if (selectedConfigId && selectedConfigId !== "default" && platformId === "webchat") {
        try {
          const umoDetails = buildWebchatUmoDetails(sessionId, false);
          await axios.post("/api/config/umo_abconf_route/update", {
            umo: umoDetails.umo,
            conf_id: selectedConfigId
          });
        } catch (err) {
          console.error("Failed to bind config to session", err);
        }
      }
      const basePath = chatboxMode ? "/chatbox" : "/chat";
      router.push(`${basePath}/${sessionId}`);
      await getSessions();
      selectedSessions.value = [sessionId];
      return sessionId;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  async function deleteSession(sessionId) {
    try {
      await axios.get("/api/chat/delete_session?session_id=" + sessionId);
      await getSessions();
      currSessionId.value = "";
      selectedSessions.value = [];
    } catch (err) {
      console.error(err);
    }
  }
  function isBatchDeleteResponseData(data) {
    if (!data || typeof data !== "object") {
      return false;
    }
    const payload = data;
    return typeof payload.deleted_count === "number" && typeof payload.failed_count === "number" && Array.isArray(payload.failed_items);
  }
  async function batchDeleteSessions(sessionIds) {
    var _a, _b, _c;
    try {
      const currentSessionId = currSessionId.value;
      const response = await axios.post("/api/chat/batch_delete_sessions", { session_ids: sessionIds });
      if (((_a = response.data) == null ? void 0 : _a.status) !== "ok") {
        throw new Error(((_b = response.data) == null ? void 0 : _b.message) || "Failed to batch delete sessions");
      }
      const data = (_c = response.data) == null ? void 0 : _c.data;
      if (!isBatchDeleteResponseData(data)) {
        throw new Error("Invalid batch delete response payload");
      }
      const failedItems = data.failed_items;
      const failedSessionIds = new Set(failedItems.map((item) => item.session_id));
      const currentSessionDeleted = Boolean(
        currentSessionId && sessionIds.includes(currentSessionId) && !failedSessionIds.has(currentSessionId)
      );
      if (currentSessionDeleted) {
        currSessionId.value = "";
        selectedSessions.value = [];
      }
      await getSessions();
      return {
        deleted_count: data.deleted_count,
        failed_count: data.failed_count,
        failed_items: failedItems,
        currentSessionDeleted
      };
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  function showEditTitleDialog(sessionId, title) {
    editingSessionId.value = sessionId;
    editingTitle.value = title || "";
    editTitleDialog.value = true;
  }
  async function saveTitle() {
    if (!editingSessionId.value) return;
    const trimmedTitle = editingTitle.value.trim();
    try {
      await axios.post("/api/chat/update_session_display_name", {
        session_id: editingSessionId.value,
        display_name: trimmedTitle
      });
      const session = sessions.value.find((s) => s.session_id === editingSessionId.value);
      if (session) {
        session.display_name = trimmedTitle;
      }
      editTitleDialog.value = false;
    } catch (err) {
      console.error("重命名会话失败:", err);
    }
  }
  function updateSessionTitle(sessionId, title) {
    const session = sessions.value.find((s) => s.session_id === sessionId);
    if (session) {
      session.display_name = title;
    }
  }
  function newChat(closeMobileSidebar) {
    currSessionId.value = "";
    selectedSessions.value = [];
    const basePath = chatboxMode ? "/chatbox" : "/chat";
    router.push(basePath);
    if (closeMobileSidebar) {
      closeMobileSidebar();
    }
  }
  return {
    sessions,
    selectedSessions,
    currSessionId,
    pendingSessionId,
    editTitleDialog,
    editingTitle,
    editingSessionId,
    getCurrentSession,
    getSessions,
    newSession,
    deleteSession,
    batchDeleteSessions,
    showEditTitleDialog,
    saveTitle,
    updateSessionTitle,
    newChat
  };
}
function useProjects() {
  const projects = ref([]);
  const selectedProjectId = ref(null);
  async function getProjects() {
    try {
      const res = await axios.get("/api/chatui_project/list");
      if (res.data.status === "ok") {
        projects.value = res.data.data || [];
      }
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  }
  async function createProject(title, emoji, description) {
    try {
      const res = await axios.post("/api/chatui_project/create", {
        title,
        emoji: emoji || "📁",
        description
      });
      if (res.data.status === "ok") {
        await getProjects();
        return res.data.data;
      }
    } catch (error) {
      console.error("Failed to create project:", error);
    }
  }
  async function updateProject(projectId, title, emoji, description) {
    try {
      const res = await axios.post("/api/chatui_project/update", {
        project_id: projectId,
        title,
        emoji,
        description
      });
      if (res.data.status === "ok") {
        await getProjects();
      }
    } catch (error) {
      console.error("Failed to update project:", error);
    }
  }
  async function deleteProject(projectId) {
    try {
      const res = await axios.get("/api/chatui_project/delete", {
        params: { project_id: projectId }
      });
      if (res.data.status === "ok") {
        await getProjects();
        if (selectedProjectId.value === projectId) {
          selectedProjectId.value = null;
        }
      }
    } catch (error) {
      console.error("Failed to delete project:", error);
    }
  }
  async function addSessionToProject(sessionId, projectId) {
    try {
      const res = await axios.post("/api/chatui_project/add_session", {
        session_id: sessionId,
        project_id: projectId
      });
      return res.data.status === "ok";
    } catch (error) {
      console.error("Failed to add session to project:", error);
      return false;
    }
  }
  async function removeSessionFromProject(sessionId) {
    try {
      const res = await axios.post("/api/chatui_project/remove_session", {
        session_id: sessionId
      });
      return res.data.status === "ok";
    } catch (error) {
      console.error("Failed to remove session from project:", error);
      return false;
    }
  }
  async function getProjectSessions(projectId) {
    try {
      const res = await axios.get("/api/chatui_project/get_sessions", {
        params: { project_id: projectId }
      });
      if (res.data.status === "ok") {
        return res.data.data || [];
      }
      return [];
    } catch (error) {
      console.error("Failed to fetch project sessions:", error);
      return [];
    }
  }
  return {
    projects,
    selectedProjectId,
    getProjects,
    createProject,
    updateProject,
    deleteProject,
    addSessionToProject,
    removeSessionFromProject,
    getProjectSessions
  };
}
const _hoisted_1 = { class: "sidebar-top" };
const _hoisted_2 = {
  key: 0,
  class: "brand-row"
};
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = {
  key: 0,
  class: "session-list"
};
const _hoisted_6 = ["onClick", "onKeydown"];
const _hoisted_7 = {
  key: 0,
  class: "session-title"
};
const _hoisted_8 = {
  key: 0,
  class: "empty-sessions"
};
const _hoisted_9 = { class: "sidebar-footer" };
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { class: "settings-menu-content" };
const _hoisted_12 = { class: "settings-menu-value" };
const _hoisted_13 = { class: "settings-menu-value" };
const _hoisted_14 = { class: "language-flag" };
const _hoisted_15 = {
  key: 0,
  class: "provider-workspace-shell"
};
const _hoisted_16 = { class: "project-composer-shell" };
const _hoisted_17 = {
  key: 0,
  class: "center-state"
};
const _hoisted_18 = {
  key: 1,
  class: "session-project-breadcrumb"
};
const _hoisted_19 = {
  key: 2,
  class: "welcome-state"
};
const _hoisted_20 = { class: "welcome-title" };
const _hoisted_21 = {
  key: 3,
  class: "messages-list-shell"
};
const _hoisted_22 = { class: "composer-shell" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Chat",
  props: {
    chatboxMode: { type: Boolean, default: false },
    active: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const router = useRouter();
    const { lgAndUp } = useDisplay();
    const customizer = useCustomizerStore();
    const { t } = useI18n();
    const { tm } = useModuleI18n("features/chat");
    const confirmDialog = useConfirmDialog();
    const toast = useToast();
    const { languageOptions, currentLanguage, switchLanguage, locale } = useLanguageSwitcher();
    const {
      sessions,
      currSessionId,
      getSessions,
      newSession,
      newChat,
      deleteSession,
      updateSessionTitle
    } = useSessions(props.chatboxMode);
    const {
      projects,
      selectedProjectId,
      getProjects,
      createProject,
      updateProject,
      deleteProject: deleteProjectById,
      addSessionToProject,
      getProjectSessions
    } = useProjects();
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
    const sidebarCollapsed = ref(false);
    const activeWorkspace = ref("chat");
    const projectDialogOpen = ref(false);
    const editingProject = ref(null);
    const sessionTitleDialogOpen = ref(false);
    const sessionTitleDraft = ref("");
    const editingSessionTitleId = ref("");
    const refreshProjectSessionsAfterTitleSave = ref(false);
    const savingSessionTitle = ref(false);
    const messageEditDraft = ref("");
    const editingMessage = ref(null);
    const savingMessageEdit = ref(false);
    const projectSessions = ref([]);
    const loadingSessions = ref(false);
    const draft = ref("");
    const messagesContainer = ref(null);
    const inputRef = ref(null);
    const shouldStickToBottom = ref(true);
    const replyTarget = ref(null);
    const threadPanelOpen = ref(false);
    const activeThread = ref(null);
    const reasoningPanelOpen = ref(false);
    const activeReasoningTarget = ref(null);
    const deletingThread = ref(false);
    const refsSidebarOpen = ref(false);
    const selectedRefs = ref(null);
    const threadSelection = reactive({
      visible: false,
      left: 0,
      top: 0,
      message: null,
      selectedText: ""
    });
    const enableStreaming = ref(true);
    const isRecording = ref(false);
    const sendShortcut = ref("enter");
    const chatSidebarDrawer = computed({
      get: () => lgAndUp.value || customizer.chatSidebarOpen,
      set: (value) => {
        if (!lgAndUp.value) {
          customizer.SET_CHAT_SIDEBAR(value);
        }
      }
    });
    const isSidebarCollapsed = computed(
      () => lgAndUp.value ? sidebarCollapsed.value : !customizer.chatSidebarOpen
    );
    const isProviderWorkspace = computed(
      () => activeWorkspace.value === "providers"
    );
    const activeReasoningParts = computed(() => {
      if (!activeReasoningTarget.value) return [];
      const blocks = messageBlocks(
        activeReasoningTarget.value.message.content || { message: [] }
      );
      const block = blocks[activeReasoningTarget.value.blockIndex];
      return (block == null ? void 0 : block.kind) === "thinking" ? block.parts : [];
    });
    watch(reasoningPanelOpen, (open) => {
      if (!open) {
        activeReasoningTarget.value = null;
      }
    });
    const {
      loadingMessages,
      sending,
      loadedSessions,
      sessionProjects,
      activeMessages,
      isSessionRunning,
      isUserMessage,
      messageParts,
      loadSessionMessages,
      createLocalExchange,
      sendMessageStream,
      editMessage,
      continueEditedMessage,
      regenerateMessage,
      stopSession
    } = useMessages({
      currentSessionId: currSessionId,
      onSessionsChanged: getSessions,
      onStreamUpdate: (sessionId) => {
        if (sessionId === currSessionId.value && shouldStickToBottom.value) {
          scrollToBottom();
        }
      }
    });
    const transportMode = ref(
      localStorage.getItem("chat.transportMode") === "websocket" ? "websocket" : "sse"
    );
    const transportOptions = [
      { value: "sse", labelKey: "transport.sse" },
      { value: "websocket", labelKey: "transport.websocket" }
    ];
    const currentTransportLabel = computed(
      () => {
        var _a;
        return tm(
          ((_a = transportOptions.find((item) => item.value === transportMode.value)) == null ? void 0 : _a.labelKey) || "transport.sse"
        );
      }
    );
    watch(transportMode, (mode) => {
      localStorage.setItem("chat.transportMode", mode);
    });
    const theme = useTheme();
    const isDark = computed(() => theme.global.current.value.dark);
    const canSend = computed(
      () => Boolean(draft.value.trim() || stagedFiles.value.length) && !sending.value
    );
    const currentSession = computed(
      () => sessions.value.find(
        (session) => session.session_id === currSessionId.value
      ) || projectSessions.value.find(
        (session) => session.session_id === currSessionId.value
      ) || null
    );
    const sessionProject = computed(
      () => currSessionId.value ? sessionProjects[currSessionId.value] : null
    );
    const currentSessionTitle = computed(
      () => currentSession.value ? sessionTitle(currentSession.value) : ""
    );
    const selectedProject = computed(
      () => projects.value.find(
        (project) => project.project_id === selectedProjectId.value
      ) || null
    );
    const chatInputReplyTarget = computed(
      () => {
        var _a;
        return ((_a = replyTarget.value) == null ? void 0 : _a.id) == null ? null : {
          messageId: replyTarget.value.id,
          selectedText: replyPreview(replyTarget.value.id)
        };
      }
    );
    provide("isDark", isDark);
    onMounted(async () => {
      loadingSessions.value = true;
      try {
        await Promise.all([getSessions(), getProjects()]);
        const routeSessionId = getRouteSessionId();
        if (routeSessionId === "models") {
          activeWorkspace.value = "providers";
        } else if (routeSessionId) {
          await selectSession(routeSessionId, false);
        }
      } finally {
        loadingSessions.value = false;
      }
    });
    onBeforeUnmount(() => {
      cleanupMediaCache();
    });
    watch(
      () => route.params.conversationId,
      async () => {
        const routeSessionId = getRouteSessionId();
        if (routeSessionId === "models") {
          activeWorkspace.value = "providers";
          return;
        }
        if (routeSessionId && routeSessionId !== currSessionId.value) {
          showChatWorkspace();
          selectedProjectId.value = null;
          await selectSession(routeSessionId, false);
        } else if (!routeSessionId && currSessionId.value) {
          showChatWorkspace();
          currSessionId.value = "";
        }
      }
    );
    watch(activeMessages, () => {
      if (shouldStickToBottom.value) {
        scrollToBottom();
      }
    });
    function getRouteSessionId() {
      const raw = route.params.conversationId;
      return Array.isArray(raw) ? raw[0] : raw || "";
    }
    function basePath() {
      return props.chatboxMode ? "/chatbox" : "/chat";
    }
    function closeMobileSidebar() {
      if (!lgAndUp.value) {
        customizer.SET_CHAT_SIDEBAR(false);
      }
    }
    function closeSecondaryPanels() {
      threadSelection.visible = false;
      threadPanelOpen.value = false;
      activeThread.value = null;
      reasoningPanelOpen.value = false;
      activeReasoningTarget.value = null;
      refsSidebarOpen.value = false;
      selectedRefs.value = null;
    }
    function showChatWorkspace() {
      activeWorkspace.value = "chat";
    }
    async function openProviderWorkspace() {
      closeSecondaryPanels();
      activeWorkspace.value = "providers";
      const targetPath = `${basePath()}/models`;
      if (route.path !== targetPath) {
        await router.push(targetPath);
      }
      closeMobileSidebar();
    }
    function sessionTitle(session) {
      var _a;
      return ((_a = session.display_name) == null ? void 0 : _a.trim()) || tm("conversation.newConversation");
    }
    async function startNewChat() {
      showChatWorkspace();
      selectedProjectId.value = null;
      replyTarget.value = null;
      newChat();
      closeMobileSidebar();
    }
    function openCreateProjectDialog() {
      editingProject.value = null;
      projectDialogOpen.value = true;
    }
    function openEditProjectDialog(project) {
      editingProject.value = project;
      projectDialogOpen.value = true;
    }
    async function selectProject(projectId) {
      showChatWorkspace();
      selectedProjectId.value = projectId;
      currSessionId.value = "";
      replyTarget.value = null;
      await router.push(basePath());
      await loadProjectSessions(projectId);
      closeMobileSidebar();
    }
    async function loadProjectSessions(projectId = selectedProjectId.value) {
      if (!projectId) {
        projectSessions.value = [];
        return;
      }
      projectSessions.value = await getProjectSessions(projectId);
    }
    async function handleDeleteProject(projectId) {
      await deleteProjectById(projectId);
      if (selectedProjectId.value === projectId) {
        selectedProjectId.value = null;
        projectSessions.value = [];
      }
    }
    function openSessionTitleDialog(sessionId, title, refreshProjectSessions = false) {
      editingSessionTitleId.value = sessionId;
      sessionTitleDraft.value = title;
      refreshProjectSessionsAfterTitleSave.value = refreshProjectSessions;
      sessionTitleDialogOpen.value = true;
    }
    async function saveSessionTitleDialog() {
      if (!editingSessionTitleId.value) return;
      savingSessionTitle.value = true;
      try {
        const sessionId = editingSessionTitleId.value;
        const displayName = sessionTitleDraft.value.trim();
        await axios.post("/api/chat/update_session_display_name", {
          session_id: sessionId,
          display_name: displayName
        });
        updateSessionTitle(sessionId, displayName);
        const projectSession = projectSessions.value.find(
          (session) => session.session_id === sessionId
        );
        if (projectSession) {
          projectSession.display_name = displayName;
        }
        if (refreshProjectSessionsAfterTitleSave.value) {
          await loadProjectSessions();
        }
        sessionTitleDialogOpen.value = false;
      } finally {
        savingSessionTitle.value = false;
      }
    }
    function editSidebarSessionTitle(session) {
      openSessionTitleDialog(session.session_id, session.display_name || "");
    }
    async function deleteSidebarSession(session) {
      const title = sessionTitle(session);
      const message = tm("conversation.confirmDelete", { name: title });
      if (!await askForConfirmation(message, confirmDialog)) return;
      const wasCurrent = currSessionId.value === session.session_id;
      await deleteSession(session.session_id);
      if (wasCurrent) {
        selectedProjectId.value = null;
        await router.push(basePath());
      }
    }
    async function selectProjectSession(sessionId) {
      selectedProjectId.value = null;
      await selectSession(sessionId);
    }
    async function editProjectSessionTitle(sessionId, title) {
      openSessionTitleDialog(sessionId, title, true);
    }
    async function deleteProjectSession(sessionId) {
      await deleteSession(sessionId);
      await loadProjectSessions();
    }
    async function saveProject(formData, projectId) {
      if (projectId) {
        await updateProject(
          projectId,
          formData.title,
          formData.emoji,
          formData.description
        );
        return;
      }
      await createProject(formData.title, formData.emoji, formData.description);
    }
    async function selectSession(sessionId, pushRoute = true) {
      showChatWorkspace();
      selectedProjectId.value = null;
      currSessionId.value = sessionId;
      replyTarget.value = null;
      if (pushRoute && route.path !== `${basePath()}/${sessionId}`) {
        await router.push(`${basePath()}/${sessionId}`);
      }
      if (!loadedSessions[sessionId]) {
        await loadSessionMessages(sessionId);
      }
      scrollToBottom();
      closeMobileSidebar();
    }
    async function sendCurrentMessage() {
      var _a, _b;
      if (!canSend.value) return;
      sending.value = true;
      try {
        let sessionId = currSessionId.value;
        const targetProjectId = selectedProjectId.value;
        const targetProject = selectedProject.value;
        if (!sessionId) {
          sessionId = await newSession();
          if (targetProjectId) {
            await addSessionToProject(sessionId, targetProjectId);
            sessionProjects[sessionId] = targetProject ? {
              project_id: targetProject.project_id,
              title: targetProject.title,
              emoji: targetProject.emoji
            } : null;
            await loadProjectSessions(targetProjectId);
            selectedProjectId.value = null;
          }
        }
        const text = draft.value.trim();
        const messageId = ((_a = crypto.randomUUID) == null ? void 0 : _a.call(crypto)) || `${Date.now()}-${Math.random()}`;
        const outgoingParts = buildOutgoingParts(text);
        const selection = (_b = inputRef.value) == null ? void 0 : _b.getCurrentSelection();
        const { userRecord, botRecord } = createLocalExchange({
          sessionId,
          messageId,
          parts: outgoingParts
        });
        updateTitleFromText(sessionId, text);
        draft.value = "";
        replyTarget.value = null;
        clearStaged({ revokeUrls: false });
        scrollToBottom();
        sendMessageStream({
          sessionId,
          messageId,
          parts: outgoingParts,
          transport: transportMode.value,
          enableStreaming: enableStreaming.value,
          selectedProvider: (selection == null ? void 0 : selection.providerId) || "",
          selectedModel: (selection == null ? void 0 : selection.modelName) || "",
          userRecord,
          botRecord
        });
      } catch (error) {
        console.error("Failed to send message:", error);
      } finally {
        sending.value = false;
      }
    }
    function buildOutgoingParts(text) {
      var _a;
      const parts = [];
      if (((_a = replyTarget.value) == null ? void 0 : _a.id) != null) {
        parts.push({
          type: "reply",
          message_id: replyTarget.value.id,
          selected_text: ""
        });
      }
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
    function updateTitleFromText(sessionId, text) {
      const session = sessions.value.find((item) => item.session_id === sessionId);
      if (!session || session.display_name || !text) return;
      updateSessionTitle(sessionId, text.slice(0, 40));
    }
    function replyPreview(messageId, fallback) {
      const found = activeMessages.value.find(
        (message) => String(message.id) === String(messageId)
      );
      const text = found ? plainTextFromMessage(found) : "";
      return text ? truncate(text, 80) : tm("reply.replyTo");
    }
    function plainTextFromMessage(message) {
      return messageParts(message).filter((part) => part.type === "plain" && part.text).map((part) => part.text).join("\n");
    }
    function truncate(value, max) {
      return value.length > max ? `${value.slice(0, max)}...` : value;
    }
    function scrollToMessage(messageId) {
      var _a, _b;
      if (!messageId) return;
      const index = activeMessages.value.findIndex(
        (message) => String(message.id) === String(messageId)
      );
      if (index < 0) return;
      const rows = (_a = messagesContainer.value) == null ? void 0 : _a.querySelectorAll(".message-row");
      (_b = rows == null ? void 0 : rows[index]) == null ? void 0 : _b.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    function openMessageEdit(message) {
      messageEditDraft.value = plainTextFromMessage(message);
      editingMessage.value = message;
      nextTick(() => scrollToMessage(message.id));
    }
    function cancelMessageEdit() {
      editingMessage.value = null;
      messageEditDraft.value = "";
    }
    async function saveMessageEdit() {
      var _a;
      if (!currSessionId.value || !editingMessage.value) return;
      savingMessageEdit.value = true;
      try {
        const target = editingMessage.value;
        const result = await editMessage(
          currSessionId.value,
          target,
          messageEditDraft.value
        );
        cancelMessageEdit();
        if (result.needsRegenerate && result.truncatedAfterMessage) {
          const selection = (_a = inputRef.value) == null ? void 0 : _a.getCurrentSelection();
          continueEditedMessage({
            sessionId: currSessionId.value,
            sourceRecord: target,
            enableStreaming: enableStreaming.value,
            selectedProvider: (selection == null ? void 0 : selection.providerId) || "",
            selectedModel: (selection == null ? void 0 : selection.modelName) || ""
          });
          scrollToBottom();
        } else if (result.needsRegenerate) {
          const index = activeMessages.value.findIndex(
            (message) => String(message.id) === String(target.id)
          );
          const nextBot = activeMessages.value.slice(index + 1).find((message) => !isUserMessage(message));
          if (nextBot) {
            await handleRegenerateMessage(nextBot);
          }
        }
      } catch (error) {
        console.error("Failed to edit message:", error);
      } finally {
        savingMessageEdit.value = false;
      }
    }
    async function handleRegenerateMessage(message, selection) {
      if (!currSessionId.value || isUserMessage(message)) return;
      message.threads = [];
      await regenerateMessage(
        currSessionId.value,
        message,
        (selection == null ? void 0 : selection.providerId) || "",
        (selection == null ? void 0 : selection.modelName) || ""
      );
    }
    function handleBotTextSelection(event, message) {
      if (message.id == null || String(message.id).startsWith("local-")) return;
      const container = event.currentTarget;
      window.setTimeout(() => {
        const selection = window.getSelection();
        const selectedText = (selection == null ? void 0 : selection.toString().trim()) || "";
        if (!selection || !selectedText) {
          threadSelection.visible = false;
          return;
        }
        if (!container || !container.contains(selection.anchorNode) || !container.contains(selection.focusNode)) {
          threadSelection.visible = false;
          return;
        }
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        threadSelection.message = message;
        threadSelection.selectedText = selectedText;
        threadSelection.left = Math.min(
          window.innerWidth - 180,
          Math.max(12, rect.left + rect.width / 2 - 70)
        );
        threadSelection.top = Math.max(12, rect.top - 42);
        threadSelection.visible = true;
      }, 0);
    }
    async function createThreadFromSelection() {
      var _a, _b, _c, _d, _e, _f;
      const message = threadSelection.message;
      if (!currSessionId.value || !(message == null ? void 0 : message.id) || !threadSelection.selectedText) return;
      try {
        const response = await axios.post("/api/chat/thread/create", {
          session_id: currSessionId.value,
          parent_message_id: message.id,
          selected_text: threadSelection.selectedText
        });
        if (((_a = response.data) == null ? void 0 : _a.status) !== "ok") {
          toast.error(((_b = response.data) == null ? void 0 : _b.message) || tm("thread.createFailed"));
          return;
        }
        const thread = (_c = response.data) == null ? void 0 : _c.data;
        if (!thread) {
          toast.error(tm("thread.createFailed"));
          return;
        }
        message.threads = message.threads || [];
        if (!message.threads.some((item) => item.thread_id === thread.thread_id)) {
          message.threads.push(thread);
        }
        openThreadPanel(thread);
        (_d = window.getSelection()) == null ? void 0 : _d.removeAllRanges();
      } catch (error) {
        toast.error(
          axios.isAxiosError(error) ? ((_f = (_e = error.response) == null ? void 0 : _e.data) == null ? void 0 : _f.message) || error.message : tm("thread.createFailed")
        );
        console.error("Failed to create thread:", error);
      } finally {
        threadSelection.visible = false;
      }
    }
    function openThreadPanel(thread) {
      reasoningPanelOpen.value = false;
      activeReasoningTarget.value = null;
      refsSidebarOpen.value = false;
      activeThread.value = thread;
      threadPanelOpen.value = true;
    }
    function openRefsSidebar(refs) {
      threadPanelOpen.value = false;
      activeThread.value = null;
      reasoningPanelOpen.value = false;
      activeReasoningTarget.value = null;
      selectedRefs.value = refs && typeof refs === "object" ? refs : null;
      refsSidebarOpen.value = true;
    }
    function openReasoningPanel(payload) {
      threadPanelOpen.value = false;
      activeThread.value = null;
      refsSidebarOpen.value = false;
      selectedRefs.value = null;
      activeReasoningTarget.value = payload;
      reasoningPanelOpen.value = true;
    }
    async function deleteThread(thread) {
      var _a;
      if (deletingThread.value) return;
      if (!await askForConfirmation(tm("thread.confirmDelete"), confirmDialog)) return;
      deletingThread.value = true;
      try {
        await axios.post("/api/chat/thread/delete", {
          thread_id: thread.thread_id
        });
        removeThreadFromMessages(thread.thread_id);
        if (((_a = activeThread.value) == null ? void 0 : _a.thread_id) === thread.thread_id) {
          threadPanelOpen.value = false;
          activeThread.value = null;
        }
      } catch (error) {
        console.error("Failed to delete thread:", error);
      } finally {
        deletingThread.value = false;
      }
    }
    function removeThreadFromMessages(threadId) {
      var _a;
      for (const message of activeMessages.value) {
        if (!((_a = message.threads) == null ? void 0 : _a.length)) continue;
        message.threads = message.threads.filter(
          (thread) => thread.thread_id !== threadId
        );
      }
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
    function toggleStreaming() {
      enableStreaming.value = !enableStreaming.value;
    }
    function startRecording() {
      isRecording.value = true;
    }
    function stopRecording() {
      isRecording.value = false;
    }
    function handleMessagesScroll() {
      threadSelection.visible = false;
      const container = messagesContainer.value;
      if (!container) return;
      const distance = container.scrollHeight - container.scrollTop - container.clientHeight;
      shouldStickToBottom.value = distance < 80;
    }
    function scrollToBottom() {
      nextTick(() => {
        const container = messagesContainer.value;
        if (!container) return;
        container.scrollTop = container.scrollHeight;
        shouldStickToBottom.value = true;
      });
    }
    async function stopCurrentSession() {
      if (!currSessionId.value) return;
      try {
        await stopSession(currSessionId.value);
      } catch (error) {
        console.error("Failed to stop session:", error);
      }
    }
    function toggleTheme() {
      const target = customizer.uiTheme === "NormalLightTheme" ? "NormalTheme" : "NormalLightTheme";
      customizer.SET_UI_THEME(target);
      theme.global.name.value = target;
    }
    return (_ctx, _cache) => {
      var _a;
      return props.active ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["chat-ui", { "is-dark": isDark.value, "sidebar-collapsed": isSidebarCollapsed.value }])
      }, [
        createVNode(VNavigationDrawer, {
          modelValue: chatSidebarDrawer.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => chatSidebarDrawer.value = $event),
          class: normalizeClass(["chat-sidebar", { collapsed: isSidebarCollapsed.value }]),
          permanent: unref(lgAndUp),
          temporary: !unref(lgAndUp),
          rail: unref(lgAndUp) && sidebarCollapsed.value,
          width: 280,
          "rail-width": 68,
          location: "left",
          floating: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              unref(lgAndUp) ? (openBlock(), createElementBlock("div", _hoisted_2, [
                createVNode(VBtn, {
                  icon: "",
                  size: "small",
                  variant: "text",
                  class: "sidebar-toggle",
                  onClick: _cache[0] || (_cache[0] = ($event) => sidebarCollapsed.value = !sidebarCollapsed.value)
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      size: "20",
                      class: normalizeClass(["sidebar-action-icon", { "chevron-collapsed": isSidebarCollapsed.value }])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" mdi-chevron-left ")
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              createVNode(VBtn, {
                class: normalizeClass(["new-chat-btn sidebar-provider-btn", {
                  "icon-only": isSidebarCollapsed.value,
                  "sidebar-workspace-btn--active": isProviderWorkspace.value
                }]),
                variant: "text",
                icon: isSidebarCollapsed.value,
                onClick: openProviderWorkspace
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    size: "20",
                    class: normalizeClass(["sidebar-action-icon", { "mr-2": !isSidebarCollapsed.value }])
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-creation")
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  !isSidebarCollapsed.value ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(tm)("actions.providerConfig")), 1)) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["class", "icon"]),
              createVNode(VBtn, {
                class: normalizeClass(["new-chat-btn", { "icon-only": isSidebarCollapsed.value }]),
                variant: "text",
                icon: isSidebarCollapsed.value,
                onClick: startNewChat
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    size: "20",
                    class: normalizeClass(["sidebar-action-icon", { "mr-2": !isSidebarCollapsed.value }])
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-square-edit-outline")
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  !isSidebarCollapsed.value ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(tm)("actions.newChat")), 1)) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["class", "icon"]),
              !isSidebarCollapsed.value ? (openBlock(), createBlock(ProjectList, {
                key: 1,
                projects: unref(projects),
                "selected-project-id": unref(selectedProjectId),
                onCreateProject: openCreateProjectDialog,
                onEditProject: openEditProjectDialog,
                onDeleteProject: handleDeleteProject,
                onSelectProject: selectProject
              }, null, 8, ["projects", "selected-project-id"])) : createCommentVNode("", true)
            ]),
            !isSidebarCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sessions), (session) => {
                return openBlock(), createElementBlock("div", {
                  key: session.session_id,
                  class: normalizeClass(["session-item", { active: !isProviderWorkspace.value && unref(currSessionId) === session.session_id }]),
                  role: "button",
                  tabindex: "0",
                  onClick: ($event) => selectSession(session.session_id),
                  onKeydown: [
                    withKeys(($event) => selectSession(session.session_id), ["enter"]),
                    withKeys(withModifiers(($event) => selectSession(session.session_id), ["prevent"]), ["space"])
                  ]
                }, [
                  !isSidebarCollapsed.value ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(sessionTitle(session)), 1)) : createCommentVNode("", true),
                  createBaseVNode("div", {
                    class: "session-actions",
                    onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                    }, ["stop"]))
                  }, [
                    createVNode(VBtn, {
                      icon: "mdi-pencil-outline",
                      size: "x-small",
                      variant: "text",
                      class: "session-action-btn",
                      title: unref(tm)("conversation.editDisplayName"),
                      onClick: ($event) => editSidebarSessionTitle(session)
                    }, null, 8, ["title", "onClick"]),
                    createVNode(VBtn, {
                      icon: "mdi-delete-outline",
                      size: "x-small",
                      variant: "text",
                      class: "session-action-btn",
                      title: unref(tm)("actions.deleteChat"),
                      onClick: ($event) => deleteSidebarSession(session)
                    }, null, 8, ["title", "onClick"])
                  ]),
                  unref(isSessionRunning)(session.session_id) ? (openBlock(), createBlock(VProgressCircular, {
                    key: 1,
                    class: "session-progress",
                    indeterminate: "",
                    size: "16",
                    width: "2"
                  })) : createCommentVNode("", true)
                ], 42, _hoisted_6);
              }), 128)),
              !isSidebarCollapsed.value && !unref(sessions).length && !loadingSessions.value ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString(unref(tm)("conversation.noHistory")), 1)) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_9, [
              createVNode(_sfc_main$a, {
                location: "top start",
                offset: "10",
                "close-on-content-click": false
              }, {
                activator: withCtx(({ props: menuProps }) => [
                  createVNode(VBtn, mergeProps(menuProps, {
                    class: ["settings-btn", { "icon-only": isSidebarCollapsed.value }],
                    variant: "text",
                    icon: isSidebarCollapsed.value
                  }), {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        size: "20",
                        class: normalizeClass(["sidebar-action-icon", { "mr-2": !isSidebarCollapsed.value }])
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-cog-outline")
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      !isSidebarCollapsed.value ? (openBlock(), createElementBlock("span", _hoisted_10, toDisplayString(unref(t)("core.common.settings")), 1)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1040, ["class", "icon"])
                ]),
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(VMenu, {
                      location: "end",
                      offset: "8",
                      "open-on-hover": "",
                      "close-on-content-click": true
                    }, {
                      activator: withCtx(({ props: transportMenuProps }) => [
                        createVNode(VListItem, mergeProps(transportMenuProps, {
                          class: "styled-menu-item",
                          rounded: "md"
                        }), {
                          prepend: withCtx(() => [
                            createVNode(VIcon, { size: "18" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-connection")
                              ]),
                              _: 1
                            })
                          ]),
                          append: withCtx(() => [
                            createBaseVNode("span", _hoisted_12, toDisplayString(currentTransportLabel.value), 1),
                            createVNode(VIcon, { size: "18" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-chevron-right")
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(tm)("transport.title")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "styled-menu-card",
                          elevation: "8",
                          rounded: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(VList, {
                              density: "compact",
                              class: "styled-menu-list pa-1"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createElementBlock(Fragment, null, renderList(transportOptions, (item) => {
                                  return createVNode(VListItem, {
                                    key: item.value,
                                    class: normalizeClass(["styled-menu-item", {
                                      "styled-menu-item-active": transportMode.value === item.value
                                    }]),
                                    rounded: "md",
                                    onClick: ($event) => transportMode.value = item.value
                                  }, {
                                    append: withCtx(() => [
                                      transportMode.value === item.value ? (openBlock(), createBlock(VIcon, {
                                        key: 0,
                                        size: "18"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" mdi-check ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(tm)(item.labelKey)), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "onClick"]);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VMenu, {
                      location: "end",
                      offset: "8",
                      "open-on-hover": "",
                      "close-on-content-click": true
                    }, {
                      activator: withCtx(({ props: languageMenuProps }) => [
                        createVNode(VListItem, mergeProps(languageMenuProps, {
                          class: "styled-menu-item",
                          rounded: "md"
                        }), {
                          prepend: withCtx(() => [
                            createVNode(VIcon, { size: "18" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-translate")
                              ]),
                              _: 1
                            })
                          ]),
                          append: withCtx(() => {
                            var _a2;
                            return [
                              createBaseVNode("span", _hoisted_13, toDisplayString(((_a2 = unref(currentLanguage)) == null ? void 0 : _a2.label) || unref(locale)), 1),
                              createVNode(VIcon, { size: "18" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-chevron-right")
                                ]),
                                _: 1
                              })
                            ];
                          }),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(t)("core.common.language")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "styled-menu-card",
                          elevation: "8",
                          rounded: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(VList, {
                              density: "compact",
                              class: "styled-menu-list pa-1"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(languageOptions), (lang) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: lang.value,
                                    class: normalizeClass(["styled-menu-item", {
                                      "styled-menu-item-active": unref(locale) === lang.value
                                    }]),
                                    rounded: "md",
                                    onClick: ($event) => unref(switchLanguage)(lang.value)
                                  }, {
                                    prepend: withCtx(() => [
                                      createBaseVNode("span", _hoisted_14, toDisplayString(lang.flag), 1)
                                    ]),
                                    append: withCtx(() => [
                                      unref(locale) === lang.value ? (openBlock(), createBlock(VIcon, {
                                        key: 0,
                                        size: "18"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" mdi-check ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(lang.label), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "onClick"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VListItem, {
                      class: "styled-menu-item",
                      rounded: "md",
                      onClick: toggleTheme
                    }, {
                      prepend: withCtx(() => [
                        createVNode(VIcon, { size: "18" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(isDark.value ? "mdi-white-balance-sunny" : "mdi-weather-night"), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(VListItemTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(isDark.value ? unref(tm)("modes.lightMode") : unref(tm)("modes.darkMode")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "class", "permanent", "temporary", "rail"]),
        createBaseVNode("main", {
          class: normalizeClass(["chat-main", {
            "empty-chat": !isProviderWorkspace.value && !selectedProject.value && !unref(loadingMessages) && !unref(activeMessages).length
          }])
        }, [
          isProviderWorkspace.value ? (openBlock(), createElementBlock("section", _hoisted_15, [
            createVNode(ProviderChatCompletionPanel, {
              class: "provider-workspace-page",
              "show-border": false
            })
          ])) : selectedProject.value ? (openBlock(), createBlock(ProjectView, {
            key: 1,
            project: selectedProject.value,
            sessions: projectSessions.value,
            onSelectSession: selectProjectSession,
            onEditSessionTitle: editProjectSessionTitle,
            onDeleteSession: deleteProjectSession
          }, {
            default: withCtx(() => [
              createBaseVNode("section", _hoisted_16, [
                createVNode(ChatInput, {
                  ref_key: "inputRef",
                  ref: inputRef,
                  prompt: draft.value,
                  "onUpdate:prompt": _cache[3] || (_cache[3] = ($event) => draft.value = $event),
                  "staged-images-url": unref(stagedImagesUrl),
                  "staged-audio-url": unref(stagedAudioUrl),
                  "staged-files": unref(stagedNonImageFiles),
                  disabled: unref(sending),
                  "enable-streaming": enableStreaming.value,
                  "is-recording": isRecording.value,
                  "is-running": Boolean(unref(currSessionId) && unref(isSessionRunning)(unref(currSessionId))),
                  "session-id": unref(currSessionId) || null,
                  "current-session": currentSession.value,
                  "reply-to": chatInputReplyTarget.value,
                  "send-shortcut": sendShortcut.value,
                  onSend: sendCurrentMessage,
                  onStop: stopCurrentSession,
                  onToggleStreaming: toggleStreaming,
                  onRemoveImage: unref(removeImage),
                  onRemoveAudio: unref(removeAudio),
                  onRemoveFile: unref(removeFile),
                  onStartRecording: startRecording,
                  onStopRecording: stopRecording,
                  onPasteImage: unref(handlePaste),
                  onFileSelect: handleFilesSelected,
                  onClearReply: _cache[4] || (_cache[4] = ($event) => replyTarget.value = null)
                }, null, 8, ["prompt", "staged-images-url", "staged-audio-url", "staged-files", "disabled", "enable-streaming", "is-recording", "is-running", "session-id", "current-session", "reply-to", "send-shortcut", "onRemoveImage", "onRemoveAudio", "onRemoveFile", "onPasteImage"])
              ])
            ]),
            _: 1
          }, 8, ["project", "sessions"])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createBaseVNode("section", {
              ref_key: "messagesContainer",
              ref: messagesContainer,
              class: "messages-panel",
              onScroll: handleMessagesScroll
            }, [
              unref(loadingMessages) ? (openBlock(), createElementBlock("div", _hoisted_17, [
                createVNode(VProgressCircular, {
                  indeterminate: "",
                  size: "32",
                  width: "3"
                })
              ])) : sessionProject.value ? (openBlock(), createElementBlock("div", _hoisted_18, [
                createBaseVNode("span", null, toDisplayString(sessionProject.value.title), 1),
                createVNode(VIcon, { size: "16" }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-chevron-right")
                  ]),
                  _: 1
                }),
                createBaseVNode("span", null, toDisplayString(currentSessionTitle.value), 1)
              ])) : !unref(activeMessages).length ? (openBlock(), createElementBlock("div", _hoisted_19, [
                createBaseVNode("div", _hoisted_20, toDisplayString(unref(tm)("welcome.title")), 1)
              ])) : createCommentVNode("", true),
              !unref(loadingMessages) && unref(activeMessages).length ? (openBlock(), createElementBlock("div", _hoisted_21, [
                createVNode(ChatMessageList, {
                  "edit-draft": messageEditDraft.value,
                  "onUpdate:editDraft": _cache[5] || (_cache[5] = ($event) => messageEditDraft.value = $event),
                  messages: unref(activeMessages),
                  "is-dark": isDark.value,
                  "is-streaming": Boolean(unref(currSessionId) && unref(isSessionRunning)(unref(currSessionId))),
                  "enable-edit": !Boolean(unref(currSessionId) && unref(isSessionRunning)(unref(currSessionId))),
                  "enable-regenerate": "",
                  "enable-thread-selection": "",
                  "manage-refs-sidebar": false,
                  "editing-message-id": ((_a = editingMessage.value) == null ? void 0 : _a.id) || null,
                  "saving-edit": savingMessageEdit.value,
                  onOpenEdit: openMessageEdit,
                  onCancelEdit: cancelMessageEdit,
                  onSaveEdit: saveMessageEdit,
                  onRegenerate: handleRegenerateMessage,
                  onRegenerateWithModel: handleRegenerateMessage,
                  onSelectBotText: handleBotTextSelection,
                  onOpenThread: openThreadPanel,
                  onOpenReasoning: openReasoningPanel,
                  onOpenRefs: openRefsSidebar
                }, null, 8, ["edit-draft", "messages", "is-dark", "is-streaming", "enable-edit", "editing-message-id", "saving-edit"])
              ])) : createCommentVNode("", true)
            ], 544),
            createBaseVNode("section", _hoisted_22, [
              createVNode(ChatInput, {
                ref_key: "inputRef",
                ref: inputRef,
                prompt: draft.value,
                "onUpdate:prompt": _cache[6] || (_cache[6] = ($event) => draft.value = $event),
                "staged-images-url": unref(stagedImagesUrl),
                "staged-audio-url": unref(stagedAudioUrl),
                "staged-files": unref(stagedNonImageFiles),
                disabled: unref(sending),
                "enable-streaming": enableStreaming.value,
                "is-recording": isRecording.value,
                "is-running": Boolean(unref(currSessionId) && unref(isSessionRunning)(unref(currSessionId))),
                "session-id": unref(currSessionId) || null,
                "current-session": currentSession.value,
                "reply-to": chatInputReplyTarget.value,
                "send-shortcut": sendShortcut.value,
                onSend: sendCurrentMessage,
                onStop: stopCurrentSession,
                onToggleStreaming: toggleStreaming,
                onRemoveImage: unref(removeImage),
                onRemoveAudio: unref(removeAudio),
                onRemoveFile: unref(removeFile),
                onStartRecording: startRecording,
                onStopRecording: stopRecording,
                onPasteImage: unref(handlePaste),
                onFileSelect: handleFilesSelected,
                onClearReply: _cache[7] || (_cache[7] = ($event) => replyTarget.value = null)
              }, null, 8, ["prompt", "staged-images-url", "staged-audio-url", "staged-files", "disabled", "enable-streaming", "is-recording", "is-running", "session-id", "current-session", "reply-to", "send-shortcut", "onRemoveImage", "onRemoveAudio", "onRemoveFile", "onPasteImage"])
            ])
          ], 64))
        ], 2),
        threadSelection.visible ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "thread-selection-action",
          style: normalizeStyle({
            left: `${threadSelection.left}px`,
            top: `${threadSelection.top}px`
          })
        }, [
          createBaseVNode("button", {
            class: "thread-selection-button",
            type: "button",
            onClick: createThreadFromSelection
          }, toDisplayString(unref(tm)("thread.askInThread")), 1)
        ], 4)) : createCommentVNode("", true),
        createVNode(ProjectDialog, {
          modelValue: projectDialogOpen.value,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => projectDialogOpen.value = $event),
          project: editingProject.value,
          onSave: saveProject
        }, null, 8, ["modelValue", "project"]),
        createVNode(VDialog, {
          modelValue: sessionTitleDialogOpen.value,
          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => sessionTitleDialogOpen.value = $event),
          "max-width": "420"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "text-h6" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(tm)("conversation.editDisplayName")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createVNode(VTextField, {
                      modelValue: sessionTitleDraft.value,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => sessionTitleDraft.value = $event),
                      label: unref(tm)("conversation.displayName"),
                      variant: "outlined",
                      density: "comfortable",
                      "hide-details": "",
                      autofocus: "",
                      onKeydown: withKeys(saveSessionTitleDialog, ["enter"])
                    }, null, 8, ["modelValue", "label", "onKeydown"])
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, null, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: _cache[10] || (_cache[10] = ($event) => sessionTitleDialogOpen.value = false)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("core.common.cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      loading: savingSessionTitle.value,
                      onClick: saveSessionTitleDialog
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("core.common.save")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(ThreadPanel, {
          modelValue: threadPanelOpen.value,
          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => threadPanelOpen.value = $event),
          thread: activeThread.value,
          "is-dark": isDark.value,
          deleting: deletingThread.value,
          onDelete: deleteThread
        }, null, 8, ["modelValue", "thread", "is-dark", "deleting"]),
        createVNode(ReasoningSidebar, {
          modelValue: reasoningPanelOpen.value,
          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => reasoningPanelOpen.value = $event),
          parts: activeReasoningParts.value,
          "is-dark": isDark.value
        }, null, 8, ["modelValue", "parts", "is-dark"]),
        createVNode(RefsSidebar, {
          modelValue: refsSidebarOpen.value,
          "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => refsSidebarOpen.value = $event),
          refs: selectedRefs.value
        }, null, 8, ["modelValue", "refs"])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const Chat = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ffb15808"]]);
export {
  Chat as C
};
