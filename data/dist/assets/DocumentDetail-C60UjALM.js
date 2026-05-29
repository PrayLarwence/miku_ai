import { D as defineComponent, u as useModuleI18n, L as ref, H as computed, M as onMounted, c as createElementBlock, a as createBaseVNode, b as createVNode, e as VBtn, t as toDisplayString, $ as unref, aj as VProgressCircular, w as withCtx, s as VCard, ai as VDialog, am as VSnackbar, aO as useRoute, B as axios, a6 as VCardTitle, d as createTextVNode, x as VDivider, v as VCardText, ab as VRow, ad as VCol, l as VIcon, g as VChip, V as VSpacer, aP as VDataTable, f as VSelect, aQ as VPagination, i as createCommentVNode, af as VList, ag as VListItem, ah as VListItemTitle, aB as VListItemSubtitle, a9 as VCardActions, o as openBlock, _ as _export_sfc } from "./index-BXuR6cgv.js";
import { a as askForConfirmation, u as useConfirmDialog } from "./confirmDialog-CkMgMXQP.js";
const _hoisted_1 = { class: "document-detail-page" };
const _hoisted_2 = { class: "page-header" };
const _hoisted_3 = { class: "header-content" };
const _hoisted_4 = { class: "text-h4" };
const _hoisted_5 = { class: "text-subtitle-1 text-medium-emphasis mt-2" };
const _hoisted_6 = {
  key: 0,
  class: "loading-container"
};
const _hoisted_7 = {
  key: 1,
  class: "document-content"
};
const _hoisted_8 = { class: "info-item" };
const _hoisted_9 = { class: "text-caption text-medium-emphasis" };
const _hoisted_10 = { class: "text-body-1" };
const _hoisted_11 = { class: "info-item" };
const _hoisted_12 = { class: "text-caption text-medium-emphasis" };
const _hoisted_13 = { class: "text-body-1" };
const _hoisted_14 = { class: "info-item" };
const _hoisted_15 = { class: "text-caption text-medium-emphasis" };
const _hoisted_16 = { class: "text-body-1" };
const _hoisted_17 = { class: "info-item" };
const _hoisted_18 = { class: "text-caption text-medium-emphasis" };
const _hoisted_19 = { class: "text-body-1" };
const _hoisted_20 = { class: "info-item" };
const _hoisted_21 = { class: "text-caption text-medium-emphasis" };
const _hoisted_22 = { class: "text-body-1" };
const _hoisted_23 = { class: "chunk-content-preview" };
const _hoisted_24 = { class: "text-center py-8" };
const _hoisted_25 = { class: "mt-4 text-medium-emphasis" };
const _hoisted_26 = {
  key: 0,
  class: "pa-4 d-flex align-center justify-space-between"
};
const _hoisted_27 = { class: "text-caption text-medium-emphasis" };
const _hoisted_28 = { class: "d-flex align-center gap-2" };
const _hoisted_29 = { class: "text-caption text-medium-emphasis mb-2" };
const _hoisted_30 = { class: "chunk-content-view" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocumentDetail",
  setup(__props) {
    const { tm: t } = useModuleI18n("features/knowledge-base/document");
    const route = useRoute();
    const confirmDialog = useConfirmDialog();
    const kbId = ref(route.params.kbId);
    const docId = ref(route.params.docId);
    const loading = ref(true);
    const loadingChunks = ref(false);
    const document = ref({});
    const chunks = ref([]);
    const searchQuery = ref("");
    const showViewDialog = ref(false);
    const selectedChunk = ref(null);
    const page = ref(1);
    const pageSize = ref(10);
    const totalChunks = ref(0);
    const snackbar = ref({
      show: false,
      text: "",
      color: "success"
    });
    const showSnackbar = (text, color = "success") => {
      snackbar.value.text = text;
      snackbar.value.color = color;
      snackbar.value.show = true;
    };
    const headers = [
      { title: t("chunks.index"), key: "chunk_index", width: 100 },
      { title: t("chunks.content"), key: "content", sortable: false },
      { title: t("chunks.charCount"), key: "char_count", width: 150 },
      { title: t("chunks.actions"), key: "actions", sortable: false, width: 150 }
    ];
    const filteredChunks = computed(() => {
      if (!searchQuery.value) return chunks.value;
      const query = searchQuery.value.toLowerCase();
      return chunks.value.filter(
        (chunk) => chunk.content.toLowerCase().includes(query)
      );
    });
    const loadDocument = async () => {
      loading.value = true;
      try {
        const response = await axios.get("/api/kb/document/get", {
          params: { doc_id: docId.value, kb_id: kbId.value }
        });
        if (response.data.status === "ok") {
          document.value = response.data.data;
        }
      } catch (error) {
        console.error("Failed to load document:", error);
        showSnackbar("加载文档详情失败", "error");
      } finally {
        loading.value = false;
      }
    };
    const loadChunks = async () => {
      loadingChunks.value = true;
      try {
        const response = await axios.get("/api/kb/chunk/list", {
          params: {
            doc_id: docId.value,
            kb_id: kbId.value,
            page: page.value,
            page_size: pageSize.value
          }
        });
        if (response.data.status === "ok") {
          chunks.value = response.data.data.items || [];
          totalChunks.value = response.data.data.total || 0;
        }
      } catch (error) {
        console.error("Failed to load chunks:", error);
        showSnackbar("加载分块列表失败", "error");
      } finally {
        loadingChunks.value = false;
      }
    };
    const handlePageChange = (newPage) => {
      page.value = newPage;
      loadChunks();
    };
    const handlePageSizeChange = (newPageSize) => {
      pageSize.value = newPageSize;
      page.value = 1;
      loadChunks();
    };
    const viewChunk = (chunk) => {
      selectedChunk.value = chunk;
      showViewDialog.value = true;
    };
    const deleteChunk = async (chunk) => {
      if (!await askForConfirmation(t("chunks.deleteConfirm"), confirmDialog)) return;
      try {
        const response = await axios.post("/api/kb/chunk/delete", {
          chunk_id: chunk.chunk_id,
          doc_id: docId.value,
          kb_id: kbId.value
        });
        if (response.data.status === "ok") {
          showSnackbar(t("chunks.deleteSuccess"));
          loadChunks();
        } else {
          showSnackbar(t("chunks.deleteFailed"), "error");
        }
      } catch (error) {
        console.error("Failed to delete chunk:", error);
        showSnackbar(t("chunks.deleteFailed"), "error");
      }
    };
    const getFileIcon = (fileType) => {
      const type = (fileType == null ? void 0 : fileType.toLowerCase()) || "";
      if (type.includes("pdf")) return "mdi-file-pdf-box";
      if (type.includes("epub")) return "mdi-book-open-page-variant";
      if (type.includes("md")) return "mdi-language-markdown";
      if (type.includes("txt")) return "mdi-file-document-outline";
      return "mdi-file";
    };
    const getFileColor = (fileType) => {
      const type = (fileType == null ? void 0 : fileType.toLowerCase()) || "";
      if (type.includes("pdf")) return "error";
      if (type.includes("epub")) return "warning";
      if (type.includes("md")) return "info";
      if (type.includes("txt")) return "success";
      return "grey";
    };
    const formatFileSize = (bytes) => {
      if (!bytes) return "-";
      const units = ["B", "KB", "MB", "GB"];
      let size = bytes;
      let unitIndex = 0;
      while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
      }
      return `${size.toFixed(2)} ${units[unitIndex]}`;
    };
    const formatDate = (dateStr) => {
      if (!dateStr) return "-";
      return new Date(dateStr).toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    onMounted(() => {
      loadDocument();
      loadChunks();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(VBtn, {
            icon: "mdi-arrow-left",
            variant: "text",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push({ name: "NativeKBDetail", params: { kbId: kbId.value } }))
          }),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("h1", _hoisted_4, toDisplayString(document.value.doc_name), 1),
            createBaseVNode("p", _hoisted_5, toDisplayString(unref(t)("title")), 1)
          ])
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createVNode(VProgressCircular, {
            indeterminate: "",
            color: "primary",
            size: "64"
          })
        ])) : (openBlock(), createElementBlock("div", _hoisted_7, [
          createVNode(VCard, {
            elevation: "2",
            class: "mb-6"
          }, {
            default: withCtx(() => [
              createVNode(VCardTitle, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("info.title")), 1)
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_8, [
                            createVNode(VIcon, { start: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-label")
                              ]),
                              _: 1
                            }),
                            createBaseVNode("div", null, [
                              createBaseVNode("div", _hoisted_9, toDisplayString(unref(t)("info.name")), 1),
                              createBaseVNode("div", _hoisted_10, toDisplayString(document.value.doc_name), 1)
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_11, [
                            createVNode(VIcon, {
                              start: "",
                              color: getFileColor(document.value.file_type)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(getFileIcon(document.value.file_type)), 1)
                              ]),
                              _: 1
                            }, 8, ["color"]),
                            createBaseVNode("div", null, [
                              createBaseVNode("div", _hoisted_12, toDisplayString(unref(t)("info.type")), 1),
                              createBaseVNode("div", _hoisted_13, toDisplayString(document.value.file_type || "-"), 1)
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_14, [
                            createVNode(VIcon, { start: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-file-chart")
                              ]),
                              _: 1
                            }),
                            createBaseVNode("div", null, [
                              createBaseVNode("div", _hoisted_15, toDisplayString(unref(t)("info.size")), 1),
                              createBaseVNode("div", _hoisted_16, toDisplayString(formatFileSize(document.value.file_size)), 1)
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_17, [
                            createVNode(VIcon, { start: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-text-box")
                              ]),
                              _: 1
                            }),
                            createBaseVNode("div", null, [
                              createBaseVNode("div", _hoisted_18, toDisplayString(unref(t)("info.chunkCount")), 1),
                              createBaseVNode("div", _hoisted_19, toDisplayString(document.value.chunk_count || 0), 1)
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_20, [
                            createVNode(VIcon, { start: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-calendar")
                              ]),
                              _: 1
                            }),
                            createBaseVNode("div", null, [
                              createBaseVNode("div", _hoisted_21, toDisplayString(unref(t)("info.createdAt")), 1),
                              createBaseVNode("div", _hoisted_22, toDisplayString(formatDate(document.value.created_at)), 1)
                            ])
                          ])
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
          createVNode(VCard, { elevation: "2" }, {
            default: withCtx(() => [
              createVNode(VCardTitle, { class: "d-flex align-center pa-4" }, {
                default: withCtx(() => [
                  createBaseVNode("span", null, toDisplayString(unref(t)("chunks.title")), 1),
                  createVNode(VChip, {
                    class: "ml-2",
                    size: "small",
                    variant: "tonal"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(totalChunks.value) + " " + toDisplayString(unref(t)("chunks.title")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VSpacer)
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VCardText, { class: "pa-0" }, {
                default: withCtx(() => [
                  createVNode(VDataTable, {
                    headers,
                    items: filteredChunks.value,
                    loading: loadingChunks.value,
                    "items-per-page": pageSize.value,
                    "hide-default-footer": ""
                  }, {
                    "item.chunk_index": withCtx(({ item }) => [
                      createVNode(VChip, {
                        size: "small",
                        variant: "tonal",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" #" + toDisplayString(item.chunk_index + 1), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    "item.content": withCtx(({ item }) => [
                      createBaseVNode("div", _hoisted_23, toDisplayString(item.content), 1)
                    ]),
                    "item.char_count": withCtx(({ item }) => [
                      createVNode(VChip, {
                        size: "small",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.char_count) + " 字符 ", 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    "item.actions": withCtx(({ item }) => [
                      createVNode(VBtn, {
                        icon: "mdi-eye",
                        variant: "text",
                        size: "small",
                        color: "info",
                        onClick: ($event) => viewChunk(item)
                      }, null, 8, ["onClick"]),
                      createVNode(VBtn, {
                        icon: "mdi-delete",
                        variant: "text",
                        size: "small",
                        color: "error",
                        onClick: ($event) => deleteChunk(item)
                      }, null, 8, ["onClick"])
                    ]),
                    "no-data": withCtx(() => [
                      createBaseVNode("div", _hoisted_24, [
                        createVNode(VIcon, {
                          size: "64",
                          color: "grey-lighten-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-text-box-outline")
                          ]),
                          _: 1
                        }),
                        createBaseVNode("p", _hoisted_25, toDisplayString(unref(t)("chunks.empty")), 1)
                      ])
                    ]),
                    _: 1
                  }, 8, ["items", "loading", "items-per-page"]),
                  !searchQuery.value && totalChunks.value > 0 ? (openBlock(), createElementBlock("div", _hoisted_26, [
                    createBaseVNode("div", _hoisted_27, toDisplayString(unref(t)("chunks.showing")) + " " + toDisplayString((page.value - 1) * pageSize.value + 1) + " - " + toDisplayString(Math.min(page.value * pageSize.value, totalChunks.value)) + " / " + toDisplayString(totalChunks.value), 1),
                    createBaseVNode("div", _hoisted_28, [
                      createVNode(VSelect, {
                        modelValue: pageSize.value,
                        "onUpdate:modelValue": [
                          _cache[1] || (_cache[1] = ($event) => pageSize.value = $event),
                          handlePageSizeChange
                        ],
                        items: [10, 25, 50, 100],
                        density: "compact",
                        variant: "outlined",
                        "hide-details": "",
                        style: { "width": "100px" }
                      }, null, 8, ["modelValue"]),
                      createVNode(VPagination, {
                        modelValue: page.value,
                        "onUpdate:modelValue": [
                          _cache[2] || (_cache[2] = ($event) => page.value = $event),
                          handlePageChange
                        ],
                        length: Math.ceil(totalChunks.value / pageSize.value),
                        "total-visible": 5
                      }, null, 8, ["modelValue", "length"])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])),
        createVNode(VDialog, {
          modelValue: showViewDialog.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => showViewDialog.value = $event),
          "max-width": "800px",
          scrollable: ""
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createBaseVNode("span", null, toDisplayString(unref(t)("view.title")), 1),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      icon: "mdi-close",
                      variant: "text",
                      onClick: _cache[3] || (_cache[3] = ($event) => showViewDialog.value = false)
                    })
                  ]),
                  _: 1
                }),
                createVNode(VDivider),
                createVNode(VCardText, { class: "pa-6" }, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      createVNode(VList, { density: "comfortable" }, {
                        default: withCtx(() => [
                          createVNode(VListItem, null, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-pound")
                                ]),
                                _: 1
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)("view.index")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    createTextVNode("#" + toDisplayString((((_a2 = selectedChunk.value) == null ? void 0 : _a2.chunk_index) || 0) + 1), 1)
                                  ];
                                }),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, null, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-text")
                                ]),
                                _: 1
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)("view.charCount")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    createTextVNode(toDisplayString(((_a2 = selectedChunk.value) == null ? void 0 : _a2.char_count) || 0) + " 字符", 1)
                                  ];
                                }),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, null, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-key")
                                ]),
                                _: 1
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)("view.vecDocId")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    createTextVNode(toDisplayString(((_a2 = selectedChunk.value) == null ? void 0 : _a2.chunk_id) || "-"), 1)
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
                      createVNode(VDivider, { class: "my-4" }),
                      createBaseVNode("div", _hoisted_29, toDisplayString(unref(t)("view.content")), 1),
                      createBaseVNode("div", _hoisted_30, toDisplayString((_a = selectedChunk.value) == null ? void 0 : _a.content), 1)
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
                      onClick: _cache[4] || (_cache[4] = ($event) => showViewDialog.value = false)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("view.close")), 1)
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
        createVNode(VSnackbar, {
          modelValue: snackbar.value.show,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => snackbar.value.show = $event),
          color: snackbar.value.color
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(snackbar.value.text), 1)
          ]),
          _: 1
        }, 8, ["modelValue", "color"])
      ]);
    };
  }
});
const DocumentDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-94530301"]]);
export {
  DocumentDetail as default
};
