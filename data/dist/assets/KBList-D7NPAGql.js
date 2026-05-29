import { D as defineComponent, u as useModuleI18n, L as ref, M as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, $ as unref, b as createVNode, e as VBtn, w as withCtx, h as createBlock, s as VCard, i as createCommentVNode, aj as VProgressCircular, F as Fragment, r as renderList, l as VIcon, ai as VDialog, am as VSnackbar, aI as useRouter, B as axios, d as createTextVNode, V as VSpacer, a6 as VCardTitle, x as VDivider, ab as VRow, ad as VCol, ar as VChipGroup, g as VChip, v as VCardText, aJ as VBadge, T as normalizeClass, a0 as withModifiers, aK as VForm, j as VTextField, aL as VTextarea, f as VSelect, ag as VListItem, aM as normalizeProps, aN as guardReactiveProps, a9 as VCardActions, k as VAlert, ap as pushScopeId, aq as popScopeId, o as openBlock, _ as _export_sfc } from "./index-BCHR8lhs.js";
const _withScopeId = (n) => (pushScopeId("data-v-4c6b0aa2"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "kb-list-page" };
const _hoisted_2 = { class: "page-header" };
const _hoisted_3 = { class: "text-h4 mb-2" };
const _hoisted_4 = { class: "text-subtitle-1 text-medium-emphasis" };
const _hoisted_5 = { class: "action-bar mb-6" };
const _hoisted_6 = { class: "text-h6" };
const _hoisted_7 = { class: "text-subtitle-2 font-weight-bold mb-2" };
const _hoisted_8 = {
  key: 0,
  class: "text-caption text-medium-emphasis"
};
const _hoisted_9 = { class: "text-subtitle-2 font-weight-bold mb-2" };
const _hoisted_10 = {
  key: 0,
  class: "text-caption text-medium-emphasis"
};
const _hoisted_11 = {
  key: 1,
  class: "loading-container"
};
const _hoisted_12 = { class: "mt-4 text-medium-emphasis" };
const _hoisted_13 = {
  key: 2,
  class: "kb-grid"
};
const _hoisted_14 = { class: "kb-emoji" };
const _hoisted_15 = { class: "kb-name" };
const _hoisted_16 = {
  key: 0,
  class: "kb-description text-medium-emphasis"
};
const _hoisted_17 = {
  key: 1,
  class: "kb-error-panel mt-3 mb-2"
};
const _hoisted_18 = { class: "kb-error-title" };
const _hoisted_19 = ["title"];
const _hoisted_20 = {
  key: 2,
  class: "kb-stats mt-4"
};
const _hoisted_21 = { class: "stat-item" };
const _hoisted_22 = { class: "stat-item" };
const _hoisted_23 = {
  key: 3,
  class: "empty-state"
};
const _hoisted_24 = { class: "mt-4" };
const _hoisted_25 = { class: "text-h5" };
const _hoisted_26 = { class: "text-center mb-6" };
const _hoisted_27 = { class: "text-caption text-medium-emphasis mt-2" };
const _hoisted_28 = { class: "text-subtitle-2 mb-2" };
const _hoisted_29 = { class: "emoji-grid" };
const _hoisted_30 = ["onClick"];
const _hoisted_31 = {
  class: "position-absolute",
  style: { "bottom": "0px", "right": "16px" }
};
const _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", { style: { "text-decoration": "underline", "cursor": "pointer" } }, "切换到旧版知识库", -1));
const _hoisted_33 = [
  _hoisted_32
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "KBList",
  setup(__props) {
    const { tm: t } = useModuleI18n("features/knowledge-base/index");
    const router = useRouter();
    const loading = ref(false);
    const saving = ref(false);
    const deleting = ref(false);
    const loadingProviders = ref(false);
    const kbList = ref([]);
    const embeddingProviders = ref([]);
    const rerankProviders = ref([]);
    const originalEmbeddingProvider = ref(null);
    const showEmbeddingWarning = ref(false);
    ref(false);
    const pendingEmbeddingProvider = ref(null);
    const showCreateDialog = ref(false);
    const showEmojiPicker = ref(false);
    const showDeleteDialog = ref(false);
    const snackbar = ref({
      show: false,
      text: "",
      color: "success"
    });
    const formRef = ref();
    const editingKB = ref(null);
    const deleteTarget = ref(null);
    const formData = ref({
      kb_name: "",
      description: "",
      emoji: "📚",
      embedding_provider_id: null,
      rerank_provider_id: null
    });
    const emojiCategories = [
      {
        key: "books",
        emojis: ["📚", "📖", "📕", "📗", "📘", "📙", "📓", "📔", "📒", "📑", "🗂️", "📂", "📁", "🗃️", "🗄️"]
      },
      {
        key: "emotions",
        emojis: ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍"]
      },
      {
        key: "objects",
        emojis: ["💡", "🔬", "🔭", "🗿", "🏆", "🎯", "🎓", "🔑", "🔒", "🔓", "🔔", "🔕", "🔨", "🛠️", "⚙️"]
      },
      {
        key: "symbols",
        emojis: ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "⭐", "🌟", "✨", "💫", "⚡", "🔥"]
      }
    ];
    const loadKnowledgeBases = async (refreshStats = false) => {
      loading.value = true;
      try {
        const params = {};
        if (refreshStats) {
          params.refresh_stats = "true";
        }
        const response = await axios.get("/api/kb/list", { params });
        if (response.data.status === "ok") {
          kbList.value = response.data.data.items || [];
        } else {
          showSnackbar(response.data.message || t("messages.loadError"), "error");
        }
      } catch (error) {
        console.error("Failed to load knowledge bases:", error);
        showSnackbar(t("messages.loadError"), "error");
      } finally {
        loading.value = false;
      }
    };
    const loadProviders = async () => {
      loadingProviders.value = true;
      try {
        const response = await axios.get("/api/config/provider/list", {
          params: { provider_type: "embedding,rerank" }
        });
        if (response.data.status === "ok") {
          embeddingProviders.value = response.data.data.filter(
            (p) => p.provider_type === "embedding"
          );
          rerankProviders.value = response.data.data.filter(
            (p) => p.provider_type === "rerank"
          );
        }
      } catch (error) {
        console.error("Failed to load providers:", error);
      } finally {
        loadingProviders.value = false;
      }
    };
    const navigateToDetail = (kbId) => {
      router.push({ name: "NativeKBDetail", params: { kbId } });
    };
    const editKB = (kb) => {
      editingKB.value = kb;
      originalEmbeddingProvider.value = kb.embedding_provider_id;
      formData.value = {
        kb_name: kb.kb_name,
        description: kb.description || "",
        emoji: kb.emoji || "📚",
        embedding_provider_id: kb.embedding_provider_id,
        rerank_provider_id: kb.rerank_provider_id
      };
      showCreateDialog.value = true;
    };
    const confirmDelete = (kb) => {
      deleteTarget.value = kb;
      showDeleteDialog.value = true;
    };
    const cancelDelete = () => {
      showDeleteDialog.value = false;
      deleteTarget.value = null;
    };
    const deleteKB = async () => {
      if (!deleteTarget.value) return;
      deleting.value = true;
      try {
        const response = await axios.post("/api/kb/delete", {
          kb_id: deleteTarget.value.kb_id
        });
        console.log("Delete response:", response.data);
        if (response.data.status === "ok") {
          showSnackbar(t("messages.deleteSuccess"));
          await loadKnowledgeBases();
          showDeleteDialog.value = false;
          deleteTarget.value = null;
        } else {
          showSnackbar(response.data.message || t("messages.deleteFailed"), "error");
        }
      } catch (error) {
        console.error("Failed to delete knowledge base:", error);
        showSnackbar(t("messages.deleteFailed"), "error");
      } finally {
        deleting.value = false;
      }
    };
    const submitForm = async () => {
      const { valid } = await formRef.value.validate();
      if (!valid) return;
      saving.value = true;
      try {
        const payload = {
          kb_name: formData.value.kb_name,
          description: formData.value.description,
          emoji: formData.value.emoji,
          embedding_provider_id: formData.value.embedding_provider_id,
          rerank_provider_id: formData.value.rerank_provider_id
        };
        let response;
        if (editingKB.value) {
          response = await axios.post("/api/kb/update", {
            kb_id: editingKB.value.kb_id,
            ...payload
          });
        } else {
          response = await axios.post("/api/kb/create", payload);
        }
        if (response.data.status === "ok") {
          showSnackbar(editingKB.value ? t("messages.updateSuccess") : t("messages.createSuccess"));
          closeCreateDialog();
          await loadKnowledgeBases();
        } else {
          showSnackbar(response.data.message || (editingKB.value ? t("messages.updateFailed") : t("messages.createFailed")), "error");
        }
      } catch (error) {
        console.error("Failed to save knowledge base:", error);
        showSnackbar(editingKB.value ? t("messages.updateFailed") : t("messages.createFailed"), "error");
      } finally {
        saving.value = false;
      }
    };
    const closeCreateDialog = () => {
      var _a;
      showCreateDialog.value = false;
      editingKB.value = null;
      originalEmbeddingProvider.value = null;
      showEmbeddingWarning.value = false;
      pendingEmbeddingProvider.value = null;
      formData.value = {
        kb_name: "",
        description: "",
        emoji: "📚",
        embedding_provider_id: null,
        rerank_provider_id: null
      };
      (_a = formRef.value) == null ? void 0 : _a.reset();
    };
    const selectEmoji = (emoji) => {
      formData.value.emoji = emoji;
      showEmojiPicker.value = false;
    };
    const showSnackbar = (text, color = "success") => {
      snackbar.value.text = text;
      snackbar.value.color = color;
      snackbar.value.show = true;
    };
    onMounted(() => {
      loadKnowledgeBases(true);
      loadProviders();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", null, [
            createBaseVNode("h1", _hoisted_3, toDisplayString(unref(t)("list.title")), 1),
            createBaseVNode("p", _hoisted_4, toDisplayString(unref(t)("list.subtitle")), 1)
          ]),
          createVNode(VBtn, {
            icon: "mdi-information-outline",
            variant: "text",
            size: "small",
            color: "grey",
            href: "/help",
            target: "_blank"
          })
        ]),
        createBaseVNode("div", _hoisted_5, [
          createVNode(VBtn, {
            "prepend-icon": "mdi-plus",
            color: "primary",
            variant: "elevated",
            onClick: _cache[0] || (_cache[0] = ($event) => showCreateDialog.value = true)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("list.create")), 1)
            ]),
            _: 1
          }),
          createVNode(VBtn, {
            "prepend-icon": "mdi-refresh",
            variant: "tonal",
            onClick: loadKnowledgeBases,
            loading: loading.value
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("list.refresh")), 1)
            ]),
            _: 1
          }, 8, ["loading"])
        ]),
        embeddingProviders.value.length || rerankProviders.value.length ? (openBlock(), createBlock(VCard, {
          key: 0,
          elevation: "1",
          class: "mb-6 memory-model-card"
        }, {
          default: withCtx(() => [
            createVNode(VCardTitle, { class: "d-flex align-center py-3 px-4" }, {
              default: withCtx(() => [
                createVNode(VIcon, { class: "me-2" }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-brain")
                  ]),
                  _: 1
                }),
                createBaseVNode("span", _hoisted_6, toDisplayString(unref(t)("memoryModel.title")), 1),
                createVNode(VSpacer),
                createVNode(VBtn, {
                  variant: "text",
                  size: "small",
                  color: "primary",
                  onClick: loadProviders,
                  loading: loadingProviders.value
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-refresh")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              _: 1
            }),
            createVNode(VDivider),
            createVNode(VCardText, { class: "pa-4" }, {
              default: withCtx(() => [
                createVNode(VRow, null, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_7, [
                          createVNode(VIcon, {
                            size: "small",
                            color: "primary",
                            class: "me-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-vector-line")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" " + toDisplayString(unref(t)("memoryModel.embedding")) + " (" + toDisplayString(embeddingProviders.value.length) + ") ", 1)
                        ]),
                        embeddingProviders.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString(unref(t)("memoryModel.noEmbedding")), 1)) : (openBlock(), createBlock(VChipGroup, {
                          key: 1,
                          column: ""
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(embeddingProviders.value, (ep) => {
                              return openBlock(), createBlock(VChip, {
                                key: ep.id,
                                size: "small",
                                color: ep.enable ? "primary" : "grey",
                                variant: "tonal",
                                class: "mr-1 mb-1"
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "x-small",
                                    color: ep.enable ? "success" : "grey"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(ep.enable ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                default: withCtx(() => [
                                  createTextVNode(" " + toDisplayString(ep.embedding_model || ep.id), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"]);
                            }), 128))
                          ]),
                          _: 1
                        }))
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_9, [
                          createVNode(VIcon, {
                            size: "small",
                            color: "secondary",
                            class: "me-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-sort-variant")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" " + toDisplayString(unref(t)("memoryModel.rerank")) + " (" + toDisplayString(rerankProviders.value.length) + ") ", 1)
                        ]),
                        rerankProviders.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_10, toDisplayString(unref(t)("memoryModel.noRerank")), 1)) : (openBlock(), createBlock(VChipGroup, {
                          key: 1,
                          column: ""
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(rerankProviders.value, (rp) => {
                              return openBlock(), createBlock(VChip, {
                                key: rp.id,
                                size: "small",
                                color: rp.enable ? "secondary" : "grey",
                                variant: "tonal",
                                class: "mr-1 mb-1"
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "x-small",
                                    color: rp.enable ? "success" : "grey"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(rp.enable ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                default: withCtx(() => [
                                  createTextVNode(" " + toDisplayString(rp.rerank_model || rp.id), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"]);
                            }), 128))
                          ]),
                          _: 1
                        }))
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
        })) : createCommentVNode("", true),
        loading.value && kbList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_11, [
          createVNode(VProgressCircular, {
            indeterminate: "",
            color: "primary",
            size: "64"
          }),
          createBaseVNode("p", _hoisted_12, toDisplayString(unref(t)("list.loading")), 1)
        ])) : kbList.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_13, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(kbList.value, (kb) => {
            return openBlock(), createBlock(VCard, {
              key: kb.kb_id,
              class: normalizeClass(["kb-card", { "kb-card-error": kb.init_error }]),
              elevation: "2",
              hover: !kb.init_error,
              onClick: ($event) => !kb.init_error && navigateToDetail(kb.kb_id)
            }, {
              default: withCtx(() => [
                kb.init_error ? (openBlock(), createBlock(VBadge, {
                  key: 0,
                  color: "error",
                  icon: "mdi-alert-circle",
                  class: "kb-error-badge position-absolute",
                  style: { "top": "0", "right": "0", "transform": "translate(34%, -34%)" }
                })) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: normalizeClass(["kb-card-content", { "kb-card-content-error": kb.init_error }])
                }, [
                  createBaseVNode("div", _hoisted_14, toDisplayString(kb.emoji || "📚"), 1),
                  createBaseVNode("h3", _hoisted_15, toDisplayString(kb.kb_name), 1),
                  !kb.init_error ? (openBlock(), createElementBlock("p", _hoisted_16, toDisplayString(kb.description || "暂无描述"), 1)) : createCommentVNode("", true),
                  kb.init_error ? (openBlock(), createElementBlock("div", _hoisted_17, [
                    createBaseVNode("div", _hoisted_18, [
                      createVNode(VIcon, {
                        size: "16",
                        color: "error"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-close-circle")
                        ]),
                        _: 1
                      }),
                      createBaseVNode("span", null, toDisplayString(unref(t)("list.initError")), 1)
                    ]),
                    createBaseVNode("div", {
                      class: "kb-error-detail",
                      title: kb.init_error
                    }, toDisplayString(kb.init_error), 9, _hoisted_19)
                  ])) : createCommentVNode("", true),
                  !kb.init_error ? (openBlock(), createElementBlock("div", _hoisted_20, [
                    createBaseVNode("div", _hoisted_21, [
                      createVNode(VIcon, {
                        size: "small",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-file-document")
                        ]),
                        _: 1
                      }),
                      createBaseVNode("span", null, toDisplayString(kb.doc_count || 0) + " " + toDisplayString(unref(t)("list.documents")), 1)
                    ]),
                    createBaseVNode("div", _hoisted_22, [
                      createVNode(VIcon, {
                        size: "small",
                        color: "secondary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-text-box")
                        ]),
                        _: 1
                      }),
                      createBaseVNode("span", null, toDisplayString(kb.chunk_count || 0) + " " + toDisplayString(unref(t)("list.chunks")), 1)
                    ])
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", {
                    class: normalizeClass(["kb-actions", { "error-actions": kb.init_error }])
                  }, [
                    !kb.init_error ? (openBlock(), createBlock(VBtn, {
                      key: 0,
                      icon: "mdi-pencil",
                      size: "small",
                      variant: "text",
                      color: "info",
                      onClick: withModifiers(($event) => editKB(kb), ["stop"])
                    }, null, 8, ["onClick"])) : createCommentVNode("", true),
                    createVNode(VBtn, {
                      icon: "mdi-delete",
                      size: "small",
                      variant: "text",
                      color: "error",
                      onClick: withModifiers(($event) => confirmDelete(kb), ["stop"])
                    }, null, 8, ["onClick"])
                  ], 2)
                ], 2)
              ]),
              _: 2
            }, 1032, ["hover", "class", "onClick"]);
          }), 128))
        ])) : (openBlock(), createElementBlock("div", _hoisted_23, [
          createVNode(VIcon, {
            size: "100",
            color: "grey-lighten-2"
          }, {
            default: withCtx(() => [
              createTextVNode("mdi-book-open-variant")
            ]),
            _: 1
          }),
          createBaseVNode("h2", _hoisted_24, toDisplayString(unref(t)("list.empty")), 1),
          createVNode(VBtn, {
            class: "mt-6",
            "prepend-icon": "mdi-plus",
            color: "primary",
            variant: "elevated",
            size: "large",
            onClick: _cache[1] || (_cache[1] = ($event) => showCreateDialog.value = true)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("list.create")), 1)
            ]),
            _: 1
          })
        ])),
        createVNode(VDialog, {
          modelValue: showCreateDialog.value,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => showCreateDialog.value = $event),
          "max-width": "600px",
          persistent: ""
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "d-flex align-center" }, {
                  default: withCtx(() => [
                    createBaseVNode("span", _hoisted_25, toDisplayString(editingKB.value ? unref(t)("edit.title") : unref(t)("create.title")), 1),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      icon: "mdi-close",
                      variant: "text",
                      onClick: closeCreateDialog
                    })
                  ]),
                  _: 1
                }),
                createVNode(VDivider),
                createVNode(VCardText, { class: "pa-6" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_26, [
                      createBaseVNode("div", {
                        class: "emoji-display",
                        onClick: _cache[2] || (_cache[2] = ($event) => showEmojiPicker.value = true)
                      }, toDisplayString(formData.value.emoji), 1),
                      createBaseVNode("p", _hoisted_27, toDisplayString(unref(t)("create.emojiLabel")), 1)
                    ]),
                    createVNode(VForm, {
                      ref_key: "formRef",
                      ref: formRef,
                      onSubmit: withModifiers(submitForm, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: formData.value.kb_name,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.kb_name = $event),
                          label: unref(t)("create.nameLabel"),
                          placeholder: unref(t)("create.namePlaceholder"),
                          variant: "outlined",
                          rules: [(v) => !!v || unref(t)("create.nameRequired")],
                          required: "",
                          class: "mb-4",
                          hint: "后续如修改知识库名称，需重新在配置文件更新。",
                          "persistent-hint": ""
                        }, null, 8, ["modelValue", "label", "placeholder", "rules"]),
                        createVNode(VTextarea, {
                          modelValue: formData.value.description,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.value.description = $event),
                          label: unref(t)("create.descriptionLabel"),
                          placeholder: unref(t)("create.descriptionPlaceholder"),
                          variant: "outlined",
                          rows: "3",
                          class: "mb-4"
                        }, null, 8, ["modelValue", "label", "placeholder"]),
                        createVNode(VSelect, {
                          modelValue: formData.value.embedding_provider_id,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.value.embedding_provider_id = $event),
                          items: embeddingProviders.value,
                          "item-title": (item) => item.embedding_model || item.id,
                          "item-value": "id",
                          label: unref(t)("create.embeddingModelLabel"),
                          variant: "outlined",
                          class: "mb-4",
                          disabled: editingKB.value !== null,
                          hint: "嵌入模型选择后无法修改，如需更换请创建新的知识库。",
                          "persistent-hint": ""
                        }, {
                          item: withCtx(({ props, item }) => [
                            createVNode(VListItem, normalizeProps(guardReactiveProps(props)), {
                              subtitle: withCtx(() => [
                                createTextVNode(toDisplayString(unref(t)("create.providerInfo", {
                                  id: item.raw.id,
                                  dimensions: item.raw.embedding_dimensions || "N/A"
                                })), 1)
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          _: 1
                        }, 8, ["modelValue", "items", "item-title", "label", "disabled"]),
                        createVNode(VSelect, {
                          modelValue: formData.value.rerank_provider_id,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.value.rerank_provider_id = $event),
                          items: rerankProviders.value,
                          "item-title": (item) => item.rerank_model || item.id,
                          "item-value": "id",
                          label: unref(t)("create.rerankModelLabel"),
                          variant: "outlined",
                          clearable: "",
                          class: "mb-2"
                        }, {
                          item: withCtx(({ props, item }) => [
                            createVNode(VListItem, normalizeProps(guardReactiveProps(props)), {
                              subtitle: withCtx(() => [
                                createTextVNode(toDisplayString(unref(t)("create.rerankProviderInfo", { id: item.raw.id })), 1)
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          _: 1
                        }, 8, ["modelValue", "items", "item-title", "label"])
                      ]),
                      _: 1
                    }, 8, ["onSubmit"])
                  ]),
                  _: 1
                }),
                createVNode(VDivider),
                createVNode(VCardActions, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: closeCreateDialog
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("create.cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      variant: "elevated",
                      onClick: submitForm,
                      loading: saving.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(editingKB.value ? unref(t)("edit.submit") : unref(t)("create.submit")), 1)
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
        createVNode(VDialog, {
          modelValue: showEmojiPicker.value,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => showEmojiPicker.value = $event),
          "max-width": "500px"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("emoji.title")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VDivider),
                createVNode(VCardText, { class: "pa-4" }, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock(Fragment, null, renderList(emojiCategories, (category) => {
                      return createBaseVNode("div", {
                        key: category.key,
                        class: "mb-4"
                      }, [
                        createBaseVNode("p", _hoisted_28, toDisplayString(unref(t)(`emoji.categories.${category.key}`)), 1),
                        createBaseVNode("div", _hoisted_29, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(category.emojis, (emoji) => {
                            return openBlock(), createElementBlock("div", {
                              key: emoji,
                              class: "emoji-item",
                              onClick: ($event) => selectEmoji(emoji)
                            }, toDisplayString(emoji), 9, _hoisted_30);
                          }), 128))
                        ])
                      ]);
                    }), 64))
                  ]),
                  _: 1
                }),
                createVNode(VDivider),
                createVNode(VCardActions, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: _cache[8] || (_cache[8] = ($event) => showEmojiPicker.value = false)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("emoji.close")), 1)
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
        }, 8, ["modelValue"]),
        createVNode(VDialog, {
          modelValue: showDeleteDialog.value,
          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => showDeleteDialog.value = $event),
          "max-width": "450px",
          persistent: ""
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "pa-4 text-h6" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("delete.title")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VDivider),
                createVNode(VCardText, { class: "pa-6" }, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      createBaseVNode("p", null, toDisplayString(unref(t)("delete.confirmText", { name: ((_a = deleteTarget.value) == null ? void 0 : _a.kb_name) || "" })), 1),
                      createVNode(VAlert, {
                        type: "error",
                        variant: "tonal",
                        density: "compact",
                        class: "mt-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("delete.warning")), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }),
                  _: 1
                }),
                createVNode(VDivider),
                createVNode(VCardActions, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: cancelDelete
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("delete.cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "error",
                      variant: "elevated",
                      onClick: deleteKB,
                      loading: deleting.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("delete.confirm")), 1)
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
        createVNode(VSnackbar, {
          modelValue: snackbar.value.show,
          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => snackbar.value.show = $event),
          color: snackbar.value.color
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(snackbar.value.text), 1)
          ]),
          _: 1
        }, 8, ["modelValue", "color"]),
        createBaseVNode("div", _hoisted_31, [
          createBaseVNode("small", {
            onClick: _cache[12] || (_cache[12] = ($event) => unref(router).push("/alkaid/knowledge-base"))
          }, _hoisted_33)
        ])
      ]);
    };
  }
});
const KBList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4c6b0aa2"]]);
export {
  KBList as default
};
