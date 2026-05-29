const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProviderChatCompletionPanel-0Ntf8xjF.js","assets/index-IOsZtj6J.js","assets/index-CwZVLUO5.css","assets/AstrBotConfig-_LTpBxq4.js","assets/index-B5qN8oBY.js","assets/AstrBotConfig-D3mknkdA.css","assets/useProviderSources-e7eBv26P.js","assets/inputValue-BqQtgRan.js","assets/StyledMenu.vue_vue_type_style_index_0_lang-NB5AjzPV.js","assets/StyledMenu-CAeWtiMD.css","assets/confirmDialog-DLjvXcW2.js","assets/useProviderSources-C7q5cW-A.css","assets/PersonaForm-DxkuJRPi.js","assets/PersonaForm-DrfVgMTM.css","assets/ProviderChatCompletionPanel-BEXptpyK.css","assets/ModelConfigPage-CB8fK27X.js","assets/ItemCard-h96E7vs5.js","assets/ItemCard-BzPuUYya.css","assets/ModelConfigPage-DJTTnczd.css"])))=>i.map(i=>d[i]);
import { ba as useToastStore, _ as _export_sfc, a5 as useI18n, L as ref, H as computed, J as watch, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, j as VTextField, t as toDisplayString, $ as unref, F as Fragment, r as renderList, h as createBlock, w as withCtx, d as createTextVNode, g as VChip, i as createCommentVNode, e as VBtn, s as VCard, a6 as VCardTitle, v as VCardText, an as withKeys, l as VIcon, af as VList, ag as VListItem, ah as VListItemTitle, a0 as withModifiers, a9 as VCardActions, V as VSpacer, ai as VDialog, aL as VTextarea, N as nextTick, u as useModuleI18n, x as VDivider, T as normalizeClass, aB as VListItemSubtitle, B as axios, ab as VRow, ad as VCol, bG as VSlider, U as normalizeStyle, a8 as VSwitch, f as VSelect, bz as defineAsyncComponent, y as VProgressLinear, bf as VOverlay, a4 as __vitePreload, D as defineComponent, C as resolveComponent, aj as VProgressCircular, bH as VBreadcrumbs, bI as VBreadcrumbsItem, b7 as VAvatar, ap as pushScopeId, aq as popScopeId, M as onMounted, aI as useRouter, au as VRadioGroup, at as VRadio, al as VCheckbox, a2 as mergeProps, aC as VToolbar, aD as VToolbarTitle, ae as VMenu, k as VAlert, aw as VExpandTransition, S as withDirectives, W as vShow } from "./index-IOsZtj6J.js";
import { V as VueMonacoEditor } from "./index-B5qN8oBY.js";
import { B as BaseMoveTargetNode, P as PersonaForm } from "./PersonaForm-DxkuJRPi.js";
function useToast() {
  const store = useToastStore();
  const toast = (message, color = "info", opts = {}) => store.add({ message, color, ...opts });
  return {
    toast,
    success: (msg, opts) => toast(msg, "success", opts),
    error: (msg, opts) => toast(msg, "error", opts),
    info: (msg, opts) => toast(msg, "primary", opts),
    warning: (msg, opts) => toast(msg, "warning", opts)
  };
}
const _hoisted_1$9 = { class: "d-flex align-center justify-space-between ga-2" };
const _hoisted_2$9 = {
  key: 0,
  class: "flex-grow-1 d-flex align-center ga-2"
};
const _hoisted_3$9 = { key: 1 };
const _hoisted_4$9 = {
  key: 0,
  style: { "color": "rgb(var(--v-theme-primaryText))" }
};
const _hoisted_5$9 = {
  key: 1,
  class: "d-flex flex-wrap ga-2"
};
const _hoisted_6$8 = { class: "d-flex align-center ga-2" };
const _hoisted_7$7 = { class: "d-flex" };
const _hoisted_8$6 = {
  key: 1,
  class: "text-center py-8"
};
const _hoisted_9$6 = { class: "text-grey mt-4" };
const _sfc_main$a = {
  __name: "ListConfigItem",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    },
    dialogTitle: {
      type: String,
      default: ""
    },
    maxDisplayItems: {
      type: Number,
      default: 1
    },
    preferSingleItem: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    const dialog = ref(false);
    const localItems = ref([]);
    const originalItems = ref([]);
    const newItem = ref("");
    const editIndex = ref(-1);
    const editItem = ref("");
    const showBatchImport = ref(false);
    const batchImportText = ref("");
    const isSingleItemMode = computed(() => {
      var _a;
      return (((_a = props.modelValue) == null ? void 0 : _a.length) ?? 0) <= 1 && props.preferSingleItem;
    });
    const singleItemValue = computed({
      get: () => {
        var _a;
        return ((_a = props.modelValue) == null ? void 0 : _a[0]) ?? "";
      },
      set: (value) => {
        if (value.trim() === "") {
          emit("update:modelValue", []);
          return;
        }
        const newItems = [...props.modelValue || []];
        if (newItems.length === 0) {
          newItems.push(value);
        } else {
          newItems[0] = value;
        }
        emit("update:modelValue", newItems);
      }
    });
    const displayItems = computed(() => {
      return props.modelValue.slice(0, props.maxDisplayItems);
    });
    const batchImportPreviewCount = computed(() => {
      if (!batchImportText.value) return 0;
      return batchImportText.value.split("\n").map((line) => line.trim()).filter((line) => line.length > 0).length;
    });
    watch(() => props.modelValue, (newValue) => {
      localItems.value = [...newValue || []];
      if (newValue && newValue.length > 0) {
        const filtered = newValue.filter((item) => typeof item === "string" ? item.trim() !== "" : true);
        if (filtered.length !== newValue.length) {
          nextTick(() => {
            emit("update:modelValue", filtered);
          });
        }
      }
    }, { immediate: true });
    function openDialog() {
      localItems.value = [...props.modelValue || []];
      originalItems.value = [...props.modelValue || []];
      dialog.value = true;
      editIndex.value = -1;
      editItem.value = "";
      newItem.value = "";
    }
    function addItem() {
      if (newItem.value.trim() !== "") {
        localItems.value.push(newItem.value.trim());
        newItem.value = "";
      }
    }
    function removeItem(index) {
      localItems.value.splice(index, 1);
    }
    function startEdit(index, item) {
      editIndex.value = index;
      editItem.value = item;
    }
    function saveEdit() {
      if (editItem.value.trim() !== "") {
        localItems.value[editIndex.value] = editItem.value.trim();
        cancelEdit();
      }
    }
    function cancelEdit() {
      editIndex.value = -1;
      editItem.value = "";
    }
    function confirmDialog() {
      const filteredItems = localItems.value.filter((item) => typeof item === "string" ? item.trim() !== "" : true);
      emit("update:modelValue", filteredItems);
      dialog.value = false;
    }
    function cancelDialog() {
      localItems.value = [...originalItems.value];
      editIndex.value = -1;
      editItem.value = "";
      newItem.value = "";
      dialog.value = false;
    }
    function confirmBatchImport() {
      if (batchImportText.value.trim()) {
        const newItems = batchImportText.value.split("\n").map((line) => line.trim()).filter((line) => line.length > 0);
        localItems.value.push(...newItems);
        batchImportText.value = "";
        showBatchImport.value = false;
      }
    }
    function cancelBatchImport() {
      batchImportText.value = "";
      showBatchImport.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$9, [
          isSingleItemMode.value ? (openBlock(), createElementBlock("div", _hoisted_2$9, [
            createVNode(VTextField, {
              modelValue: singleItemValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => singleItemValue.value = $event),
              "hide-details": "",
              variant: "outlined",
              density: "compact",
              class: "flex-grow-1"
            }, null, 8, ["modelValue"])
          ])) : (openBlock(), createElementBlock("div", _hoisted_3$9, [
            !__props.modelValue || __props.modelValue.length === 0 ? (openBlock(), createElementBlock("span", _hoisted_4$9, toDisplayString(unref(t)("core.common.list.noItems")), 1)) : (openBlock(), createElementBlock("div", _hoisted_5$9, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(displayItems.value, (item) => {
                return openBlock(), createBlock(VChip, {
                  key: item,
                  size: "x-small",
                  label: "",
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.length > 20 ? item.slice(0, 20) + "..." : item), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 128)),
              __props.modelValue.length > __props.maxDisplayItems ? (openBlock(), createBlock(VChip, {
                key: 0,
                size: "x-small",
                label: "",
                color: "grey-lighten-1"
              }, {
                default: withCtx(() => [
                  createTextVNode(" +" + toDisplayString(__props.modelValue.length - __props.maxDisplayItems), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]))
          ])),
          createVNode(VBtn, {
            size: "small",
            color: "primary",
            variant: "tonal",
            onClick: openDialog
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.preferSingleItem ? unref(t)("core.common.list.addMore") : __props.buttonText || unref(t)("core.common.list.modifyButton")), 1)
            ]),
            _: 1
          })
        ]),
        createVNode(VDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => dialog.value = $event),
          "max-width": "600px"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, {
                  class: "text-h3 py-4",
                  style: { "font-weight": "normal" }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.dialogTitle || unref(t)("core.common.list.editTitle")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, { class: "pa-4 pb-2" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_6$8, [
                      createVNode(VTextField, {
                        modelValue: newItem.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => newItem.value = $event),
                        label: unref(t)("core.common.list.addItemPlaceholder"),
                        onKeyup: withKeys(addItem, ["enter"]),
                        clearable: "",
                        "hide-details": "",
                        variant: "outlined",
                        density: "compact",
                        placeholder: unref(t)("core.common.list.inputPlaceholder"),
                        class: "flex-grow-1"
                      }, null, 8, ["modelValue", "label", "onKeyup", "placeholder"]),
                      createVNode(VBtn, {
                        onClick: addItem,
                        variant: "tonal",
                        color: "primary",
                        size: "small",
                        disabled: !newItem.value.trim()
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("core.common.list.addButton")), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      createVNode(VBtn, {
                        onClick: _cache[2] || (_cache[2] = ($event) => showBatchImport.value = true),
                        variant: "tonal",
                        color: "primary",
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { size: "small" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-import")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" " + toDisplayString(unref(t)("core.common.list.batchImport")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(VCardText, {
                  class: "pa-0",
                  style: { "max-height": "400px", "overflow-y": "auto" }
                }, {
                  default: withCtx(() => [
                    localItems.value.length > 0 ? (openBlock(), createBlock(VList, {
                      key: 0,
                      density: "compact"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(localItems.value, (item, index) => {
                          return openBlock(), createBlock(VListItem, {
                            key: index,
                            rounded: "md",
                            class: "ma-1 list-item-clickable",
                            onClick: ($event) => startEdit(index, item)
                          }, {
                            append: withCtx(() => [
                              createBaseVNode("div", _hoisted_7$7, [
                                editIndex.value === index ? (openBlock(), createBlock(VBtn, {
                                  key: 0,
                                  onClick: withModifiers(saveEdit, ["stop"]),
                                  variant: "plain",
                                  color: "success",
                                  icon: "",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-check")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])) : createCommentVNode("", true),
                                createVNode(VBtn, {
                                  onClick: withModifiers(($event) => editIndex.value === index ? cancelEdit() : removeItem(index), ["stop"]),
                                  variant: "plain",
                                  color: editIndex.value === index ? "error" : "default",
                                  icon: "",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-close")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick", "color"])
                              ])
                            ]),
                            default: withCtx(() => [
                              editIndex.value !== index ? (openBlock(), createBlock(VListItemTitle, {
                                key: 0,
                                class: "item-text"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item), 1)
                                ]),
                                _: 2
                              }, 1024)) : (openBlock(), createBlock(VTextField, {
                                key: 1,
                                modelValue: editItem.value,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => editItem.value = $event),
                                "hide-details": "",
                                variant: "outlined",
                                density: "compact",
                                onKeyup: [
                                  withKeys(saveEdit, ["enter"]),
                                  withKeys(cancelEdit, ["esc"])
                                ],
                                onClick: _cache[4] || (_cache[4] = withModifiers(() => {
                                }, ["stop"])),
                                autofocus: ""
                              }, null, 8, ["modelValue", "onKeyup"]))
                            ]),
                            _: 2
                          }, 1032, ["onClick"]);
                        }), 128))
                      ]),
                      _: 1
                    })) : (openBlock(), createElementBlock("div", _hoisted_8$6, [
                      createVNode(VIcon, {
                        size: "64",
                        color: "grey-lighten-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-format-list-bulleted")
                        ]),
                        _: 1
                      }),
                      createBaseVNode("p", _hoisted_9$6, toDisplayString(unref(t)("core.common.list.noItemsHint")), 1)
                    ]))
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: cancelDialog
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("core.common.cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      onClick: confirmDialog
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("core.common.confirm")), 1)
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
          modelValue: showBatchImport.value,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => showBatchImport.value = $event),
          "max-width": "600px"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, {
                  class: "text-h3 py-4",
                  style: { "font-weight": "normal" }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("core.common.list.batchImportTitle")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createVNode(VTextarea, {
                      modelValue: batchImportText.value,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => batchImportText.value = $event),
                      label: unref(t)("core.common.list.batchImportLabel"),
                      placeholder: unref(t)("core.common.list.batchImportPlaceholder"),
                      rows: "10",
                      variant: "outlined",
                      hint: unref(t)("core.common.list.batchImportHint"),
                      "persistent-hint": ""
                    }, null, 8, ["modelValue", "label", "placeholder", "hint"])
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: cancelBatchImport
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("core.common.cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      onClick: confirmBatchImport
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("core.common.list.batchImportButton", { count: batchImportPreviewCount.value })), 1)
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
      ], 64);
    };
  }
};
const ListConfigItem = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-b26d1a1f"]]);
const _hoisted_1$8 = { class: "file-config-item" };
const _hoisted_2$8 = { class: "d-flex align-center gap-2" };
const _hoisted_3$8 = { class: "text-caption text-medium-emphasis ml-2" };
const _hoisted_4$8 = { class: "text-h3" };
const _hoisted_5$8 = {
  key: 0,
  class: "empty-text"
};
const _hoisted_6$7 = { class: "d-flex align-center gap-1" };
const _hoisted_7$6 = ["accept"];
const MAX_FILE_BYTES = 500 * 1024 * 1024;
const MAX_FILE_MB = 500;
const _sfc_main$9 = {
  __name: "FileConfigItem",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    itemMeta: {
      type: Object,
      default: null
    },
    pluginName: {
      type: String,
      default: ""
    },
    configKey: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const { tm } = useModuleI18n("features/config");
    const toast = useToast();
    const dialog = ref(false);
    const isDragging = ref(false);
    const fileInput = ref(null);
    const uploading = ref(false);
    const loadingFiles = ref(false);
    const directoryFiles = ref([]);
    const fileList = computed({
      get: () => Array.isArray(props.modelValue) ? props.modelValue : [],
      set: (val) => emit("update:modelValue", val)
    });
    const mergedFileItems = computed(() => {
      const configured = new Set(fileList.value);
      const existing = new Set(directoryFiles.value);
      const items = [];
      for (const path of fileList.value) {
        items.push({
          path,
          status: existing.has(path) ? "ok" : "missing"
        });
      }
      for (const path of directoryFiles.value) {
        if (!configured.has(path)) {
          items.push({
            path,
            status: "unconfigured"
          });
        }
      }
      return items;
    });
    const acceptAttr = computed(() => {
      var _a;
      const types = (_a = props.itemMeta) == null ? void 0 : _a.file_types;
      if (!Array.isArray(types) || types.length === 0) {
        return void 0;
      }
      return types.map((ext) => `.${String(ext).replace(/^\\./, "")}`).join(",");
    });
    const allowedTypesText = computed(() => {
      var _a;
      const types = (_a = props.itemMeta) == null ? void 0 : _a.file_types;
      if (!Array.isArray(types) || types.length === 0) {
        return "";
      }
      return types.map((ext) => String(ext).replace(/^\\./, "")).join(", ");
    });
    const fileCountText = computed(() => {
      return tm("fileUpload.fileCount", { count: fileList.value.length });
    });
    const getStatusText = (status) => {
      if (status === "missing") {
        return tm("fileUpload.statusMissing");
      }
      if (status === "unconfigured") {
        return tm("fileUpload.statusUnconfigured");
      }
      return "";
    };
    const getStatusColor = (status) => {
      if (status === "missing") {
        return "error";
      }
      if (status === "unconfigured") {
        return "warning";
      }
      return "primary";
    };
    const openFilePicker = () => {
      var _a;
      (_a = fileInput.value) == null ? void 0 : _a.click();
    };
    const loadDirectoryFiles = async () => {
      var _a;
      if (!props.pluginName || !props.configKey || loadingFiles.value) {
        return;
      }
      loadingFiles.value = true;
      try {
        const response = await axios.get(
          `/api/config/file/get?scope=plugin&name=${encodeURIComponent(
            props.pluginName
          )}&key=${encodeURIComponent(props.configKey)}`
        );
        if (response.data.status === "ok") {
          const files = ((_a = response.data.data) == null ? void 0 : _a.files) || [];
          directoryFiles.value = Array.from(new Set(files));
        } else {
          toast.warning(response.data.message || tm("fileUpload.loadFailed"));
        }
      } catch (error) {
        console.error("Load file list failed:", error);
        toast.warning(tm("fileUpload.loadFailed"));
      } finally {
        loadingFiles.value = false;
      }
    };
    const handleFileSelect = (event) => {
      const target = event.target;
      if ((target == null ? void 0 : target.files) && target.files.length > 0) {
        uploadFiles(Array.from(target.files));
      }
      if (target) {
        target.value = "";
      }
    };
    const handleDrop = (event) => {
      var _a;
      isDragging.value = false;
      if (((_a = event.dataTransfer) == null ? void 0 : _a.files) && event.dataTransfer.files.length > 0) {
        uploadFiles(Array.from(event.dataTransfer.files));
      }
    };
    const uploadFiles = async (files) => {
      var _a, _b;
      if (!props.pluginName || !props.configKey) {
        toast.warning("Missing plugin config info");
        return;
      }
      if (uploading.value) {
        return;
      }
      const oversized = files.filter((file) => file.size > MAX_FILE_BYTES);
      if (oversized.length > 0) {
        oversized.forEach((file) => {
          toast.warning(
            tm("fileUpload.fileTooLarge", { name: file.name, max: MAX_FILE_MB })
          );
        });
      }
      const validFiles = files.filter((file) => file.size <= MAX_FILE_BYTES);
      if (validFiles.length === 0) {
        return;
      }
      uploading.value = true;
      try {
        const formData = new FormData();
        validFiles.forEach((file, index) => {
          formData.append(`file${index}`, file);
        });
        const response = await axios.post(
          `/api/config/file/upload?scope=plugin&name=${encodeURIComponent(
            props.pluginName
          )}&key=${encodeURIComponent(props.configKey)}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        if (response.data.status === "ok") {
          const uploaded = ((_a = response.data.data) == null ? void 0 : _a.uploaded) || [];
          const errors = ((_b = response.data.data) == null ? void 0 : _b.errors) || [];
          if (uploaded.length > 0) {
            const merged = [...fileList.value];
            for (const path of uploaded) {
              if (!merged.includes(path)) {
                merged.push(path);
              }
            }
            fileList.value = merged;
            const updatedDirectory = new Set(directoryFiles.value);
            uploaded.forEach((path) => updatedDirectory.add(path));
            directoryFiles.value = Array.from(updatedDirectory);
            toast.success(tm("fileUpload.uploadSuccess", { count: uploaded.length }));
          }
          if (errors.length > 0) {
            toast.warning(errors.join("\\n"));
          }
        } else {
          toast.error(response.data.message || tm("fileUpload.uploadFailed"));
        }
      } catch (error) {
        console.error("File upload failed:", error);
        toast.error(tm("fileUpload.uploadFailed"));
      } finally {
        uploading.value = false;
      }
    };
    const addToConfig = (filePath) => {
      if (!fileList.value.includes(filePath)) {
        fileList.value = [...fileList.value, filePath];
        toast.success(tm("fileUpload.addToConfig"));
      }
    };
    const deleteFile = (filePath) => {
      fileList.value = fileList.value.filter((item) => item !== filePath);
      directoryFiles.value = directoryFiles.value.filter((item) => item !== filePath);
      if (props.pluginName) {
        axios.post(
          `/api/config/file/delete?scope=plugin&name=${encodeURIComponent(
            props.pluginName
          )}`,
          { path: filePath }
        ).catch((error) => {
          console.warn("Staged file delete failed:", error);
          toast.warning(tm("fileUpload.deleteFailed"));
        });
      }
      toast.success(tm("fileUpload.deleteSuccess"));
    };
    const deletePhysicalFile = (filePath) => {
      directoryFiles.value = directoryFiles.value.filter((item) => item !== filePath);
      if (props.pluginName) {
        axios.post(
          `/api/config/file/delete?scope=plugin&name=${encodeURIComponent(
            props.pluginName
          )}`,
          { path: filePath }
        ).catch((error) => {
          console.warn("File delete failed:", error);
          toast.warning(tm("fileUpload.deleteFailed"));
        });
      }
      toast.success(tm("fileUpload.deleteSuccess"));
    };
    const getDisplayName = (path) => {
      if (!path) return "";
      const parts = String(path).split("/");
      return parts[parts.length - 1] || path;
    };
    watch(
      () => dialog.value,
      (value) => {
        if (value) {
          loadDirectoryFiles();
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createBaseVNode("div", _hoisted_2$8, [
          createVNode(VBtn, {
            size: "small",
            color: "primary",
            variant: "tonal",
            onClick: _cache[0] || (_cache[0] = ($event) => dialog.value = true)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(tm)("fileUpload.button")), 1)
            ]),
            _: 1
          }),
          createBaseVNode("span", _hoisted_3$8, toDisplayString(fileCountText.value), 1)
        ]),
        createVNode(VDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => dialog.value = $event),
          "max-width": "700"
        }, {
          default: withCtx(() => [
            createVNode(VCard, {
              class: "file-dialog-card",
              variant: "flat"
            }, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "d-flex align-center" }, {
                  default: withCtx(() => [
                    createBaseVNode("span", _hoisted_4$8, toDisplayString(unref(tm)("fileUpload.dialogTitle")), 1),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      icon: "mdi-close",
                      variant: "text",
                      onClick: _cache[1] || (_cache[1] = ($event) => dialog.value = false)
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCardText, { class: "file-dialog-body" }, {
                  default: withCtx(() => [
                    mergedFileItems.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_5$8, toDisplayString(unref(tm)("fileUpload.empty")), 1)) : createCommentVNode("", true),
                    createVNode(VList, {
                      density: "compact",
                      lines: "one"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(mergedFileItems.value, (item) => {
                          return openBlock(), createBlock(VListItem, {
                            key: item.path
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, { size: "18" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-file")
                                ]),
                                _: 1
                              })
                            ]),
                            append: withCtx(() => [
                              createBaseVNode("div", _hoisted_6$7, [
                                item.status !== "ok" ? (openBlock(), createBlock(VChip, {
                                  key: 0,
                                  size: "x-small",
                                  color: getStatusColor(item.status),
                                  variant: "tonal"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getStatusText(item.status)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])) : createCommentVNode("", true),
                                item.status === "unconfigured" ? (openBlock(), createBlock(VBtn, {
                                  key: 1,
                                  icon: "mdi-plus",
                                  size: "x-small",
                                  variant: "text",
                                  onClick: ($event) => addToConfig(item.path)
                                }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                createVNode(VBtn, {
                                  icon: "mdi-delete",
                                  size: "x-small",
                                  variant: "text",
                                  onClick: ($event) => item.status === "unconfigured" ? deletePhysicalFile(item.path) : deleteFile(item.path)
                                }, null, 8, ["onClick"])
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "file-name" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(getDisplayName(item.path)), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128)),
                        mergedFileItems.value.length > 0 ? (openBlock(), createBlock(VDivider, {
                          key: 0,
                          class: "my-2"
                        })) : createCommentVNode("", true),
                        createVNode(VListItem, {
                          class: normalizeClass(["upload-item", { dragover: isDragging.value }]),
                          onDrop: withModifiers(handleDrop, ["prevent"]),
                          onDragover: _cache[2] || (_cache[2] = withModifiers(($event) => isDragging.value = true, ["prevent"])),
                          onDragleave: _cache[3] || (_cache[3] = ($event) => isDragging.value = false),
                          onClick: openFilePicker
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VIcon, {
                              size: "18",
                              color: "primary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-plus")
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(tm)("fileUpload.dropzone")), 1)
                              ]),
                              _: 1
                            }),
                            allowedTypesText.value ? (openBlock(), createBlock(VListItemSubtitle, {
                              key: 0,
                              class: "upload-hint"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(tm)("fileUpload.allowedTypes", { types: allowedTypesText.value })), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["class", "onDrop"])
                      ]),
                      _: 1
                    }),
                    createBaseVNode("input", {
                      ref_key: "fileInput",
                      ref: fileInput,
                      type: "file",
                      multiple: "",
                      hidden: "",
                      accept: acceptAttr.value,
                      onChange: handleFileSelect
                    }, null, 40, _hoisted_7$6)
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, { class: "file-dialog-actions" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      color: "primary",
                      variant: "elevated",
                      onClick: _cache[4] || (_cache[4] = ($event) => dialog.value = false)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(tm)("fileUpload.done")), 1)
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
};
const FileConfigItem = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-f76947e6"]]);
const _hoisted_1$7 = { class: "d-flex align-center justify-space-between" };
const _hoisted_2$7 = {
  key: 0,
  style: { "color": "rgb(var(--v-theme-primaryText))" }
};
const _hoisted_3$7 = {
  key: 1,
  class: "d-flex flex-wrap ga-2"
};
const _hoisted_4$7 = { key: 0 };
const _hoisted_5$7 = {
  key: 1,
  class: "d-flex align-center gap-2 flex-grow-1"
};
const _hoisted_6$6 = {
  key: 1,
  class: "mt-4"
};
const _hoisted_7$5 = { class: "text-caption text-grey mb-2" };
const _hoisted_8$5 = { class: "d-flex flex-column" };
const _hoisted_9$5 = { class: "text-caption font-weight-medium" };
const _hoisted_10$5 = {
  key: 0,
  class: "text-caption text-grey",
  style: { "font-size": "0.7rem" }
};
const _hoisted_11$4 = {
  key: 1,
  class: "d-flex align-center ga-4 flex-grow-1"
};
const _hoisted_12$3 = {
  key: 2,
  class: "text-center py-8"
};
const _hoisted_13$1 = { class: "text-grey mt-4" };
const _hoisted_14$1 = { class: "d-flex align-center ga-2" };
const _sfc_main$8 = {
  __name: "ObjectEditor",
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    itemMeta: {
      type: Object,
      default: null
    },
    buttonText: {
      type: String,
      default: ""
    },
    dialogTitle: {
      type: String,
      default: ""
    },
    maxDisplayItems: {
      type: Number,
      default: 1
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    const { tm, getRaw } = useModuleI18n("features/config-metadata");
    const { warning: toastWarning } = useToast();
    const resolveButtonText = computed(() => props.buttonText || t("core.common.list.modifyButton"));
    const resolveDialogTitle = computed(() => props.dialogTitle || t("core.common.objectEditor.dialogTitle"));
    const dialog = ref(false);
    const localKeyValuePairs = ref([]);
    const originalKeyValuePairs = ref([]);
    const newKey = ref("");
    const newValueType = ref("string");
    const nextPairId = ref(0);
    const templateSchema = computed(() => {
      var _a;
      return ((_a = props.itemMeta) == null ? void 0 : _a.template_schema) || {};
    });
    const hasTemplateSchema = computed(() => {
      return Object.keys(templateSchema.value).length > 0;
    });
    const displayKeys = computed(() => {
      return Object.keys(props.modelValue).slice(0, props.maxDisplayItems);
    });
    const nonTemplatePairs = computed(() => {
      return localKeyValuePairs.value.filter((pair) => !templateSchema.value[pair.key]);
    });
    watch(() => props.modelValue, (newValue) => {
    }, { immediate: true });
    function createPair({ key, value, type, slider, template, jsonError = "", _originalKey }) {
      return {
        _id: nextPairId.value++,
        key,
        value,
        type,
        slider,
        template,
        jsonError,
        _originalKey
      };
    }
    function initializeLocalKeyValuePairs() {
      localKeyValuePairs.value = [];
      nextPairId.value = 0;
      for (const [key, value] of Object.entries(props.modelValue)) {
        let _type = typeof value === "object" ? "json" : typeof value;
        let _value = _type === "json" ? JSON.stringify(value) : value;
        const template = templateSchema.value[key];
        if (template) {
          _type = template.type || _type;
          if (_value === void 0 || _value === null) {
            _value = template.default !== void 0 ? template.default : _value;
          }
        }
        localKeyValuePairs.value.push(createPair({
          key,
          value: _value,
          type: _type,
          slider: template == null ? void 0 : template.slider,
          template
        }));
      }
    }
    function openDialog() {
      initializeLocalKeyValuePairs();
      originalKeyValuePairs.value = localKeyValuePairs.value.map((pair) => ({ ...pair }));
      newKey.value = "";
      newValueType.value = "string";
      dialog.value = true;
    }
    function addKeyValuePair() {
      const key = newKey.value.trim();
      if (key !== "") {
        const isKeyExists = localKeyValuePairs.value.some((pair) => pair.key === key);
        if (isKeyExists) {
          toastWarning(t("core.common.objectEditor.keyExists"));
          return;
        }
        let defaultValue;
        switch (newValueType.value) {
          case "number":
            defaultValue = 0;
            break;
          case "boolean":
            defaultValue = false;
            break;
          case "json":
            defaultValue = "{}";
            break;
          default:
            defaultValue = "";
            break;
        }
        localKeyValuePairs.value.push(createPair({
          key,
          value: defaultValue,
          type: newValueType.value
        }));
        newKey.value = "";
      }
    }
    function validateJSON(pair) {
      try {
        JSON.parse(pair.value);
        pair.jsonError = "";
      } catch (e) {
        pair.jsonError = t("core.common.objectEditor.invalidJson");
      }
    }
    function removeKeyValuePairByKey(key) {
      const index = localKeyValuePairs.value.findIndex((pair) => pair.key === key);
      if (index >= 0) {
        localKeyValuePairs.value.splice(index, 1);
      }
    }
    function onKeyBlur(pair) {
      const originalKey = pair._originalKey;
      const newKey2 = pair.key;
      if (originalKey === void 0 || originalKey === newKey2) return;
      const isKeyExists = localKeyValuePairs.value.some((p) => p !== pair && p.key === newKey2);
      if (isKeyExists) {
        toastWarning(t("core.common.objectEditor.keyExists"));
        pair.key = originalKey;
        return;
      }
      const template = templateSchema.value[newKey2];
      if (template) {
        pair.type = template.type || pair.type;
        if (pair.value === void 0 || pair.value === null || pair.value === "") {
          pair.value = template.default !== void 0 ? template.default : pair.value;
        }
        pair.slider = template.slider;
        pair.template = template;
      } else {
        pair.slider = void 0;
        pair.template = void 0;
      }
    }
    function isTemplateKeyAdded(templateKey) {
      return localKeyValuePairs.value.some((pair) => pair.key === templateKey);
    }
    function getTemplateValue(templateKey) {
      const pair = localKeyValuePairs.value.find((pair2) => pair2.key === templateKey);
      if (pair) {
        return pair.value;
      }
      const template = templateSchema.value[templateKey];
      return (template == null ? void 0 : template.default) !== void 0 ? template.default : getDefaultValueForType((template == null ? void 0 : template.type) || "string");
    }
    function updateTemplateValue(templateKey, newValue) {
      const existingIndex = localKeyValuePairs.value.findIndex((pair) => pair.key === templateKey);
      const template = templateSchema.value[templateKey];
      if (existingIndex >= 0) {
        localKeyValuePairs.value[existingIndex].value = newValue;
      } else {
        const valueType = (template == null ? void 0 : template.type) || "string";
        localKeyValuePairs.value.push(createPair({
          key: templateKey,
          value: newValue,
          type: valueType,
          slider: template == null ? void 0 : template.slider,
          template
        }));
      }
    }
    function removeTemplateKey(templateKey) {
      const index = localKeyValuePairs.value.findIndex((pair) => pair.key === templateKey);
      if (index >= 0) {
        localKeyValuePairs.value.splice(index, 1);
      }
    }
    function getDefaultValueForType(type) {
      switch (type) {
        case "int":
        case "float":
        case "number":
          return 0;
        case "bool":
        case "boolean":
          return false;
        case "json":
          return "{}";
        case "string":
        default:
          return "";
      }
    }
    function confirmDialog() {
      const updatedValue = {};
      for (const pair of localKeyValuePairs.value) {
        if (pair.type === "json" && pair.jsonError) return;
        let convertedValue = pair.value;
        switch (pair.type) {
          case "int":
            convertedValue = parseInt(pair.value) || 0;
            break;
          case "float":
          case "number":
            convertedValue = Number(pair.value);
            break;
          case "bool":
          case "boolean":
            break;
          case "json":
            convertedValue = JSON.parse(pair.value);
            break;
          case "string":
          default:
            convertedValue = String(pair.value);
            break;
        }
        updatedValue[pair.key] = convertedValue;
      }
      emit("update:modelValue", updatedValue);
      dialog.value = false;
    }
    function cancelDialog() {
      localKeyValuePairs.value = originalKeyValuePairs.value.map((pair) => ({ ...pair }));
      dialog.value = false;
    }
    function translateIfKey(value) {
      if (!value || typeof value !== "string") return value;
      return getRaw(value) ? tm(value) : value;
    }
    function getTemplateTitle(template, templateKey) {
      return translateIfKey((template == null ? void 0 : template.name) || (template == null ? void 0 : template.description) || templateKey);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$7, [
          createBaseVNode("div", null, [
            !__props.modelValue || Object.keys(__props.modelValue).length === 0 ? (openBlock(), createElementBlock("span", _hoisted_2$7, toDisplayString(unref(t)("core.common.objectEditor.noItems")), 1)) : (openBlock(), createElementBlock("div", _hoisted_3$7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(displayKeys.value, (key) => {
                return openBlock(), createBlock(VChip, {
                  key,
                  size: "x-small",
                  label: "",
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(key.length > 20 ? key.slice(0, 20) + "..." : key), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 128)),
              Object.keys(__props.modelValue).length > __props.maxDisplayItems ? (openBlock(), createBlock(VChip, {
                key: 0,
                size: "x-small",
                label: "",
                color: "grey-lighten-1"
              }, {
                default: withCtx(() => [
                  createTextVNode(" +" + toDisplayString(Object.keys(__props.modelValue).length - __props.maxDisplayItems), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]))
          ]),
          createVNode(VBtn, {
            size: "small",
            color: "primary",
            variant: "tonal",
            onClick: openDialog
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(resolveButtonText.value), 1)
            ]),
            _: 1
          })
        ]),
        createVNode(VDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => dialog.value = $event),
          "max-width": "600px"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, {
                  class: "text-h3 py-4",
                  style: { "font-weight": "normal" }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(resolveDialogTitle.value), 1)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, {
                  class: "pa-4",
                  style: { "max-height": "400px", "overflow-y": "auto" }
                }, {
                  default: withCtx(() => [
                    nonTemplatePairs.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_4$7, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(nonTemplatePairs.value, (pair) => {
                        return openBlock(), createElementBlock("div", {
                          key: pair._id,
                          class: "key-value-pair"
                        }, [
                          createVNode(VRow, {
                            "no-gutters": "",
                            align: "center",
                            class: "mb-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "4" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: pair.key,
                                    "onUpdate:modelValue": ($event) => pair.key = $event,
                                    density: "compact",
                                    variant: "outlined",
                                    "hide-details": "",
                                    placeholder: unref(t)("core.common.objectEditor.placeholders.keyName"),
                                    onFocus: ($event) => pair._originalKey = pair.key,
                                    onBlur: ($event) => onKeyBlur(pair)
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "onFocus", "onBlur"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCol, {
                                cols: "7",
                                class: "pl-2 d-flex align-center justify-end"
                              }, {
                                default: withCtx(() => [
                                  pair.type === "string" ? (openBlock(), createBlock(VTextField, {
                                    key: 0,
                                    modelValue: pair.value,
                                    "onUpdate:modelValue": ($event) => pair.value = $event,
                                    density: "compact",
                                    variant: "outlined",
                                    "hide-details": "",
                                    placeholder: unref(t)("core.common.objectEditor.placeholders.stringValue")
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : pair.type === "number" || pair.type === "float" || pair.type === "int" ? (openBlock(), createElementBlock("div", _hoisted_5$7, [
                                    pair.slider ? (openBlock(), createBlock(VSlider, {
                                      key: 0,
                                      "model-value": Number(pair.value) || 0,
                                      "onUpdate:modelValue": ($event) => pair.value = $event,
                                      min: pair.slider.min,
                                      max: pair.slider.max,
                                      step: pair.slider.step,
                                      color: "primary",
                                      density: "compact",
                                      "hide-details": "",
                                      class: "flex-grow-1"
                                    }, null, 8, ["model-value", "onUpdate:modelValue", "min", "max", "step"])) : createCommentVNode("", true),
                                    createVNode(VTextField, {
                                      modelValue: pair.value,
                                      "onUpdate:modelValue": ($event) => pair.value = $event,
                                      modelModifiers: { number: true },
                                      type: "number",
                                      density: "compact",
                                      variant: "outlined",
                                      "hide-details": "",
                                      placeholder: unref(t)("core.common.objectEditor.placeholders.numberValue"),
                                      style: normalizeStyle(pair.slider ? "max-width: 120px;" : "")
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "style"])
                                  ])) : pair.type === "boolean" ? (openBlock(), createBlock(VSwitch, {
                                    key: 2,
                                    modelValue: pair.value,
                                    "onUpdate:modelValue": ($event) => pair.value = $event,
                                    density: "compact",
                                    "hide-details": "",
                                    color: "primary"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                  pair.type === "json" ? (openBlock(), createBlock(VTextField, {
                                    key: 3,
                                    modelValue: pair.value,
                                    "onUpdate:modelValue": ($event) => pair.value = $event,
                                    density: "compact",
                                    variant: "outlined",
                                    "hide-details": "auto",
                                    placeholder: unref(t)("core.common.objectEditor.placeholders.jsonValue"),
                                    onBlur: ($event) => validateJSON(pair),
                                    "error-messages": pair.jsonError
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "onBlur", "error-messages"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCol, {
                                cols: "1",
                                class: "pl-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    icon: "",
                                    variant: "text",
                                    size: "small",
                                    color: "error",
                                    onClick: ($event) => removeKeyValuePairByKey(pair.key)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-delete")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true),
                    hasTemplateSchema.value ? (openBlock(), createElementBlock("div", _hoisted_6$6, [
                      createVNode(VDivider, { class: "mb-3" }),
                      createBaseVNode("div", _hoisted_7$5, toDisplayString(unref(t)("core.common.objectEditor.presets")), 1),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(templateSchema.value, (template, templateKey) => {
                        return openBlock(), createElementBlock("div", {
                          key: templateKey,
                          class: normalizeClass(["template-field", { "template-field-inactive": !isTemplateKeyAdded(templateKey) }])
                        }, [
                          createVNode(VRow, {
                            "no-gutters": "",
                            align: "center",
                            class: "mb-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "4" }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_8$5, [
                                    createBaseVNode("span", _hoisted_9$5, toDisplayString(getTemplateTitle(template, templateKey)), 1),
                                    template.hint ? (openBlock(), createElementBlock("span", _hoisted_10$5, toDisplayString(translateIfKey(template.hint)), 1)) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCol, {
                                cols: "7",
                                class: "pl-2 d-flex align-center justify-end"
                              }, {
                                default: withCtx(() => [
                                  template.type === "string" ? (openBlock(), createBlock(VTextField, {
                                    key: 0,
                                    "model-value": getTemplateValue(templateKey),
                                    "onUpdate:modelValue": ($event) => updateTemplateValue(templateKey, $event),
                                    density: "compact",
                                    variant: "outlined",
                                    "hide-details": "",
                                    placeholder: unref(t)("core.common.objectEditor.placeholders.stringValue")
                                  }, null, 8, ["model-value", "onUpdate:modelValue", "placeholder"])) : template.type === "number" || template.type === "float" || template.type === "int" ? (openBlock(), createElementBlock("div", _hoisted_11$4, [
                                    template.slider ? (openBlock(), createBlock(VSlider, {
                                      key: 0,
                                      "model-value": Number(getTemplateValue(templateKey)) || 0,
                                      "onUpdate:modelValue": ($event) => updateTemplateValue(templateKey, $event),
                                      min: template.slider.min,
                                      max: template.slider.max,
                                      step: template.slider.step,
                                      color: "primary",
                                      density: "compact",
                                      "hide-details": "",
                                      class: "flex-grow-1"
                                    }, null, 8, ["model-value", "onUpdate:modelValue", "min", "max", "step"])) : createCommentVNode("", true),
                                    createVNode(VTextField, {
                                      "model-value": getTemplateValue(templateKey),
                                      "onUpdate:modelValue": ($event) => updateTemplateValue(templateKey, $event),
                                      type: "number",
                                      density: "compact",
                                      variant: "outlined",
                                      "hide-details": "",
                                      placeholder: unref(t)("core.common.objectEditor.placeholders.numberValue"),
                                      style: normalizeStyle(template.slider ? "max-width: 120px;" : "")
                                    }, null, 8, ["model-value", "onUpdate:modelValue", "placeholder", "style"])
                                  ])) : template.type === "boolean" || template.type === "bool" ? (openBlock(), createBlock(VSwitch, {
                                    key: 2,
                                    "model-value": getTemplateValue(templateKey),
                                    "onUpdate:modelValue": ($event) => updateTemplateValue(templateKey, $event),
                                    density: "compact",
                                    "hide-details": "",
                                    color: "primary"
                                  }, null, 8, ["model-value", "onUpdate:modelValue"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCol, {
                                cols: "1",
                                class: "pl-2"
                              }, {
                                default: withCtx(() => [
                                  isTemplateKeyAdded(templateKey) ? (openBlock(), createBlock(VBtn, {
                                    key: 0,
                                    icon: "",
                                    variant: "text",
                                    size: "small",
                                    color: "error",
                                    onClick: ($event) => removeTemplateKey(templateKey)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-close")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ], 2);
                      }), 128))
                    ])) : createCommentVNode("", true),
                    localKeyValuePairs.value.length === 0 && !hasTemplateSchema.value ? (openBlock(), createElementBlock("div", _hoisted_12$3, [
                      createVNode(VIcon, {
                        size: "64",
                        color: "grey-lighten-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-code-json")
                        ]),
                        _: 1
                      }),
                      createBaseVNode("p", _hoisted_13$1, toDisplayString(unref(t)("core.common.objectEditor.noParams")), 1)
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_14$1, [
                      createVNode(VTextField, {
                        modelValue: newKey.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newKey.value = $event),
                        label: unref(t)("core.common.objectEditor.newKeyLabel"),
                        density: "compact",
                        variant: "outlined",
                        "hide-details": "",
                        class: "flex-grow-1"
                      }, null, 8, ["modelValue", "label"]),
                      createVNode(VSelect, {
                        modelValue: newValueType.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => newValueType.value = $event),
                        items: ["string", "number", "boolean", "json"],
                        label: unref(t)("core.common.objectEditor.valueTypeLabel"),
                        density: "compact",
                        variant: "outlined",
                        "hide-details": "",
                        style: { "max-width": "120px" }
                      }, null, 8, ["modelValue", "label"]),
                      createVNode(VBtn, {
                        onClick: addKeyValuePair,
                        variant: "tonal",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-plus")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" " + toDisplayString(unref(t)("core.common.add")), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: cancelDialog
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("core.common.cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      onClick: confirmDialog
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("core.common.confirm")), 1)
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
      ], 64);
    };
  }
};
const ObjectEditor = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-0b312b21"]]);
const _hoisted_1$6 = { class: "d-flex align-center justify-space-between" };
const _hoisted_2$6 = {
  key: 0,
  style: { "color": "rgb(var(--v-theme-primaryText))" }
};
const _hoisted_3$6 = {
  key: 1,
  class: "provider-name-text"
};
const _hoisted_4$6 = {
  key: 0,
  class: "selected-preview mt-2"
};
const _hoisted_5$6 = {
  key: 1,
  class: "pa-3"
};
const _hoisted_6$5 = { class: "text-caption text-medium-emphasis mb-2" };
const _hoisted_7$4 = { class: "d-flex ga-1" };
const _hoisted_8$4 = { key: 0 };
const _hoisted_9$4 = {
  key: 3,
  class: "text-center py-8"
};
const _hoisted_10$4 = { class: "text-grey mt-4" };
const _hoisted_11$3 = { class: "provider-drawer-header" };
const _hoisted_12$2 = { class: "provider-drawer-content" };
const _sfc_main$7 = {
  __name: "ProviderSelector",
  props: {
    modelValue: {
      type: [String, Array],
      default: ""
    },
    providerType: {
      type: String,
      default: "chat_completion"
    },
    providerSubtype: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const ProviderChatCompletionPanel = defineAsyncComponent(() => __vitePreload(() => import("./ProviderChatCompletionPanel-0Ntf8xjF.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]) : void 0));
    const ModelConfigPage = defineAsyncComponent(() => __vitePreload(() => import("./ModelConfigPage-CB8fK27X.js"), true ? __vite__mapDeps([15,1,2,6,7,8,9,10,11,3,4,5,16,17,12,13,18]) : void 0));
    const { tm } = useModuleI18n("core.shared");
    const dialog = ref(false);
    const providerList = ref([]);
    const loading = ref(false);
    const selectedProvider = ref("");
    const selectedProviders = ref([]);
    const providerDrawer = ref(false);
    const hasSelection = computed(() => {
      if (props.multiple) {
        return selectedProviders.value.length > 0;
      }
      return Boolean(props.modelValue);
    });
    const defaultTab = computed(() => {
      return props.providerType || "chat_completion";
    });
    watch(() => props.modelValue, (newValue) => {
      if (props.multiple) {
        selectedProviders.value = Array.isArray(newValue) ? [...newValue.filter((v) => typeof v === "string" && v)] : [];
        return;
      }
      selectedProvider.value = typeof newValue === "string" ? newValue : "";
    }, { immediate: true });
    watch(providerDrawer, (isOpen, wasOpen) => {
      if (!isOpen && wasOpen) {
        loadProviders();
      }
    });
    async function openDialog() {
      if (props.multiple) {
        selectedProviders.value = Array.isArray(props.modelValue) ? [...props.modelValue.filter((v) => typeof v === "string" && v)] : [];
      } else {
        selectedProvider.value = typeof props.modelValue === "string" ? props.modelValue : "";
      }
      dialog.value = true;
      await loadProviders();
    }
    async function loadProviders() {
      loading.value = true;
      try {
        const response = await axios.get("/api/config/provider/list", {
          params: {
            provider_type: props.providerType
          }
        });
        if (response.data.status === "ok") {
          const providers = response.data.data || [];
          providerList.value = props.providerSubtype ? providers.filter((provider) => matchesProviderSubtype(provider, props.providerSubtype)) : providers;
        }
      } catch (error) {
        console.error("加载提供商列表失败:", error);
        providerList.value = [];
      } finally {
        loading.value = false;
      }
    }
    function matchesProviderSubtype(provider, subtype) {
      if (!subtype) {
        return true;
      }
      const normalized = String(subtype).toLowerCase();
      const candidates = [provider.type, provider.provider, provider.id].filter(Boolean).map((value) => String(value).toLowerCase());
      return candidates.includes(normalized);
    }
    function selectProvider(provider) {
      if (props.multiple) {
        if (!provider.id) {
          selectedProviders.value = [];
          return;
        }
        const idx = selectedProviders.value.indexOf(provider.id);
        if (idx >= 0) {
          selectedProviders.value.splice(idx, 1);
        } else {
          selectedProviders.value.push(provider.id);
        }
        return;
      }
      selectedProvider.value = provider.id;
    }
    function confirmSelection() {
      if (props.multiple) {
        emit("update:modelValue", [...selectedProviders.value]);
      } else {
        emit("update:modelValue", selectedProvider.value);
      }
      dialog.value = false;
    }
    function cancelSelection() {
      if (props.multiple) {
        selectedProviders.value = Array.isArray(props.modelValue) ? [...props.modelValue.filter((v) => typeof v === "string" && v)] : [];
      } else {
        selectedProvider.value = typeof props.modelValue === "string" ? props.modelValue : "";
      }
      dialog.value = false;
    }
    function isProviderSelected(providerId) {
      if (props.multiple) {
        return selectedProviders.value.includes(providerId);
      }
      return selectedProvider.value === providerId;
    }
    function removeSelected(providerId) {
      const idx = selectedProviders.value.indexOf(providerId);
      if (idx >= 0) {
        selectedProviders.value.splice(idx, 1);
      }
    }
    function moveSelected(index, delta) {
      const targetIndex = index + delta;
      if (targetIndex < 0 || targetIndex >= selectedProviders.value.length || index < 0 || index >= selectedProviders.value.length) {
        return;
      }
      const copied = [...selectedProviders.value];
      const [item] = copied.splice(index, 1);
      copied.splice(targetIndex, 0, item);
      selectedProviders.value = copied;
    }
    function openProviderDrawer() {
      providerDrawer.value = true;
    }
    function closeProviderDrawer() {
      providerDrawer.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$6, [
          !hasSelection.value ? (openBlock(), createElementBlock("span", _hoisted_2$6, toDisplayString(unref(tm)("providerSelector.notSelected")), 1)) : (openBlock(), createElementBlock("span", _hoisted_3$6, [
            __props.multiple ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(unref(tm)("providerSelector.selectedCount", { count: selectedProviders.value.length })), 1)
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(__props.modelValue), 1)
            ], 64))
          ])),
          createVNode(VBtn, {
            size: "small",
            color: "primary",
            variant: "tonal",
            onClick: openDialog
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.buttonText || unref(tm)("providerSelector.buttonText")), 1)
            ]),
            _: 1
          })
        ]),
        __props.multiple && selectedProviders.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_4$6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(selectedProviders.value, (providerId) => {
            return openBlock(), createBlock(VChip, {
              key: `preview-${providerId}`,
              size: "x-small",
              color: "primary",
              variant: "tonal",
              class: "mr-1 mb-1",
              label: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(providerId), 1)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ])) : createCommentVNode("", true),
        createVNode(VDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => dialog.value = $event),
          "max-width": "600px"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, {
                  class: "text-h3 py-4 d-flex align-center justify-space-between gap-4 flex-wrap",
                  style: { "font-weight": "normal" }
                }, {
                  default: withCtx(() => [
                    createBaseVNode("span", null, toDisplayString(unref(tm)("providerSelector.dialogTitle")), 1),
                    createVNode(VBtn, {
                      size: "small",
                      color: "primary",
                      variant: "tonal",
                      "prepend-icon": "mdi-plus",
                      onClick: openProviderDrawer
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(tm)("providerSelector.createProvider")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCardText, {
                  class: "pa-0",
                  style: { "max-height": "400px", "overflow-y": "auto" }
                }, {
                  default: withCtx(() => [
                    loading.value ? (openBlock(), createBlock(VProgressLinear, {
                      key: 0,
                      indeterminate: "",
                      color: "primary"
                    })) : createCommentVNode("", true),
                    __props.multiple && selectedProviders.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5$6, [
                      createBaseVNode("div", _hoisted_6$5, toDisplayString(unref(tm)("providerSelector.selectedCount", { count: selectedProviders.value.length })), 1),
                      createVNode(VList, {
                        density: "compact",
                        class: "selected-order-list"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(selectedProviders.value, (providerId, index) => {
                            return openBlock(), createBlock(VListItem, {
                              key: `selected-${providerId}-${index}`,
                              rounded: "md",
                              class: "ma-1"
                            }, {
                              append: withCtx(() => [
                                createBaseVNode("div", _hoisted_7$4, [
                                  createVNode(VBtn, {
                                    icon: "mdi-arrow-up",
                                    size: "x-small",
                                    variant: "text",
                                    disabled: index === 0,
                                    onClick: withModifiers(($event) => moveSelected(index, -1), ["stop"])
                                  }, null, 8, ["disabled", "onClick"]),
                                  createVNode(VBtn, {
                                    icon: "mdi-arrow-down",
                                    size: "x-small",
                                    variant: "text",
                                    disabled: index === selectedProviders.value.length - 1,
                                    onClick: withModifiers(($event) => moveSelected(index, 1), ["stop"])
                                  }, null, 8, ["disabled", "onClick"]),
                                  createVNode(VBtn, {
                                    icon: "mdi-close",
                                    size: "x-small",
                                    variant: "text",
                                    onClick: withModifiers(($event) => removeSelected(providerId), ["stop"])
                                  }, null, 8, ["onClick"])
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(providerId), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider, { class: "ma-1" })
                    ])) : createCommentVNode("", true),
                    !loading.value && providerList.value.length > 0 ? (openBlock(), createBlock(VList, {
                      key: 2,
                      density: "compact"
                    }, {
                      default: withCtx(() => [
                        !__props.multiple ? (openBlock(), createBlock(VListItem, {
                          key: "none",
                          value: "",
                          onClick: _cache[0] || (_cache[0] = ($event) => selectProvider({ id: "" })),
                          active: selectedProvider.value === "",
                          rounded: "md",
                          class: "ma-1"
                        }, {
                          append: withCtx(() => [
                            selectedProvider.value === "" ? (openBlock(), createBlock(VIcon, {
                              key: 0,
                              color: "primary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-check-circle")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(tm)("providerSelector.clearSelection")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VListItemSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(tm)("providerSelector.clearSelectionSubtitle")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["active"])) : createCommentVNode("", true),
                        createVNode(VDivider, { class: "ma-1" }),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(providerList.value, (provider) => {
                          return openBlock(), createBlock(VListItem, {
                            key: provider.id,
                            value: provider.id,
                            onClick: ($event) => selectProvider(provider),
                            active: isProviderSelected(provider.id),
                            rounded: "md",
                            class: "ma-1"
                          }, {
                            append: withCtx(() => [
                              isProviderSelected(provider.id) ? (openBlock(), createBlock(VIcon, {
                                key: 0,
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-check-circle")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(provider.id), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(provider.type || provider.provider_type || unref(tm)("providerSelector.unknownType")) + " ", 1),
                                  provider.model ? (openBlock(), createElementBlock("span", _hoisted_8$4, "- " + toDisplayString(provider.model), 1)) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["value", "onClick", "active"]);
                        }), 128))
                      ]),
                      _: 1
                    })) : !loading.value && providerList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_9$4, [
                      createVNode(VIcon, {
                        size: "64",
                        color: "grey-lighten-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-api-off")
                        ]),
                        _: 1
                      }),
                      createBaseVNode("p", _hoisted_10$4, toDisplayString(unref(tm)("providerSelector.noProviders")), 1)
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(VDivider),
                createVNode(VCardActions, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: cancelSelection
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(tm)("providerSelector.cancelSelection")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      onClick: confirmSelection
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(tm)("providerSelector.confirmSelection")), 1)
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
        createVNode(VOverlay, {
          modelValue: providerDrawer.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => providerDrawer.value = $event),
          class: "provider-drawer-overlay",
          location: "right",
          transition: "slide-x-reverse-transition",
          scrim: true,
          "onClick:outside": closeProviderDrawer
        }, {
          default: withCtx(() => [
            createVNode(VCard, {
              class: "provider-drawer-card",
              elevation: "12"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_11$3, [
                  createVNode(VBtn, {
                    icon: "",
                    variant: "text",
                    onClick: closeProviderDrawer
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
                createBaseVNode("div", _hoisted_12$2, [
                  defaultTab.value === "chat_completion" ? (openBlock(), createBlock(unref(ProviderChatCompletionPanel), { key: 0 })) : (openBlock(), createBlock(unref(ModelConfigPage), {
                    key: 1,
                    "default-tab": defaultTab.value
                  }, null, 8, ["default-tab"]))
                ])
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
const ProviderSelector = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-627950d4"]]);
const _sfc_main$6 = defineComponent({
  name: "BaseFolderItemSelector",
  components: {
    BaseMoveTargetNode
  },
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    // 文件夹树数据
    folderTree: {
      type: Array,
      default: () => []
    },
    // 当前项目列表
    items: {
      type: Array,
      default: () => []
    },
    // 加载状态
    treeLoading: {
      type: Boolean,
      default: false
    },
    itemsLoading: {
      type: Boolean,
      default: false
    },
    // 标签配置
    labels: {
      type: Object,
      default: () => ({})
    },
    // 是否显示创建按钮
    showCreateButton: {
      type: Boolean,
      default: false
    },
    // 是否显示编辑按钮
    showEditButton: {
      type: Boolean,
      default: false
    },
    // 默认项（如 "默认人格"）
    defaultItem: {
      type: Object,
      default: null
    },
    // 项目字段映射
    itemIdField: {
      type: String,
      default: "id"
    },
    itemNameField: {
      type: String,
      default: "name"
    },
    itemDescriptionField: {
      type: String,
      default: "description"
    },
    // 显示值的格式化函数（用于显示选中项的名称）
    displayValueFormatter: {
      type: Function,
      default: null
    }
  },
  emits: ["update:modelValue", "navigate", "create", "edit"],
  data() {
    return {
      dialog: false,
      selectedItemId: "",
      currentFolderId: null,
      breadcrumbPath: []
    };
  },
  computed: {
    isCompactLayout() {
      return this.$vuetify.display.smAndDown;
    },
    currentFolderLabel() {
      if (this.currentFolderId === null) {
        return this.labels.rootFolder || "根目录";
      }
      const currentFolder = this.breadcrumbPath[this.breadcrumbPath.length - 1];
      return (currentFolder == null ? void 0 : currentFolder.name) || this.labels.rootFolder || "根目录";
    },
    displayValue() {
      if (this.displayValueFormatter) {
        return this.displayValueFormatter(this.modelValue);
      }
      if (this.defaultItem && this.modelValue === this.getItemId(this.defaultItem)) {
        return this.labels.defaultItem || this.getItemName(this.defaultItem);
      }
      return this.modelValue;
    },
    currentItems() {
      const items = [];
      if (this.currentFolderId === null && this.defaultItem) {
        items.push(this.defaultItem);
      }
      items.push(...this.items);
      return items;
    },
    currentSubFolders() {
      if (this.currentFolderId === null) {
        return this.folderTree;
      }
      const folder = this.findFolderInTree(this.currentFolderId);
      return (folder == null ? void 0 : folder.children) || [];
    },
    breadcrumbItems() {
      const items = [
        {
          title: this.labels.rootFolder || "根目录",
          folderId: null,
          disabled: this.currentFolderId === null,
          isRoot: true
        }
      ];
      this.breadcrumbPath.forEach((folder, index) => {
        items.push({
          title: folder.name,
          folderId: folder.folder_id,
          disabled: index === this.breadcrumbPath.length - 1,
          isRoot: false
        });
      });
      return items;
    }
  },
  methods: {
    getItemId(item) {
      return String(item[this.itemIdField] || item.id || "");
    },
    getItemName(item) {
      return String(item[this.itemNameField] || item.name || "");
    },
    getItemDescription(item) {
      return String(item[this.itemDescriptionField] || item.description || "");
    },
    truncateText(text, maxLength) {
      if (!text) return "";
      return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    },
    openDialog() {
      this.selectedItemId = this.modelValue || "";
      this.currentFolderId = null;
      this.breadcrumbPath = [];
      this.dialog = true;
      this.$emit("navigate", null);
    },
    navigateToFolder(folderId) {
      this.currentFolderId = folderId;
      this.updateBreadcrumb(folderId);
      this.$emit("navigate", folderId);
    },
    navigateToParentFolder() {
      if (this.currentFolderId === null) {
        return;
      }
      if (this.breadcrumbPath.length <= 1) {
        this.navigateToFolder(null);
        return;
      }
      const parent = this.breadcrumbPath[this.breadcrumbPath.length - 2];
      this.navigateToFolder((parent == null ? void 0 : parent.folder_id) ?? null);
    },
    findFolderInTree(folderId) {
      const findNode = (nodes) => {
        for (const node of nodes) {
          if (node.folder_id === folderId) {
            return node;
          }
          if (node.children && node.children.length > 0) {
            const found = findNode(node.children);
            if (found) return found;
          }
        }
        return null;
      };
      return findNode(this.folderTree);
    },
    findPathToFolder(folderId) {
      const findPath = (nodes, path) => {
        for (const node of nodes) {
          if (node.folder_id === folderId) {
            return [...path, node];
          }
          if (node.children && node.children.length > 0) {
            const result = findPath(node.children, [...path, node]);
            if (result) return result;
          }
        }
        return null;
      };
      return findPath(this.folderTree, []) || [];
    },
    updateBreadcrumb(folderId) {
      if (folderId === null) {
        this.breadcrumbPath = [];
      } else {
        this.breadcrumbPath = this.findPathToFolder(folderId);
      }
    },
    selectItem(item) {
      this.selectedItemId = this.getItemId(item);
    },
    confirmSelection() {
      this.$emit("update:modelValue", this.selectedItemId);
      this.dialog = false;
    },
    cancelSelection() {
      this.selectedItemId = this.modelValue || "";
      this.dialog = false;
    },
    isDefaultItem(item) {
      if (this.defaultItem === null) {
        return false;
      }
      return this.getItemId(item) === this.getItemId(this.defaultItem);
    },
    handleEditItem(item) {
      this.$emit("edit", item);
    }
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-e2e8f431"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "folder-item-selector" };
const _hoisted_2$5 = { class: "d-flex align-center justify-space-between" };
const _hoisted_3$5 = {
  key: 0,
  style: { "color": "rgb(var(--v-theme-primaryText))" }
};
const _hoisted_4$5 = { key: 1 };
const _hoisted_5$5 = { class: "selector-layout" };
const _hoisted_6$4 = {
  key: 0,
  class: "folder-sidebar"
};
const _hoisted_7$3 = { class: "sidebar-header pa-3 pb-2" };
const _hoisted_8$3 = { class: "text-caption text-medium-emphasis font-weight-medium" };
const _hoisted_9$3 = {
  key: 1,
  class: "text-center pa-4"
};
const _hoisted_10$3 = { class: "items-panel" };
const _hoisted_11$2 = {
  key: 0,
  class: "mobile-folder-bar px-4 py-2"
};
const _hoisted_12$1 = { class: "text-caption text-medium-emphasis text-truncate mobile-folder-label" };
const _hoisted_13 = { class: "breadcrumb-bar px-4 py-3" };
const _hoisted_14 = { class: "items-list" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "section-label text-caption text-medium-emphasis mb-2 px-2" }, "子文件夹", -1));
const _hoisted_16 = { class: "d-flex align-center ga-1" };
const _hoisted_17 = {
  key: 2,
  class: "empty-state text-center py-12"
};
const _hoisted_18 = { class: "text-grey mt-4 text-body-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseMoveTargetNode = resolveComponent("BaseMoveTargetNode");
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createBaseVNode("div", _hoisted_2$5, [
      !_ctx.modelValue ? (openBlock(), createElementBlock("span", _hoisted_3$5, toDisplayString(_ctx.labels.notSelected || "未选择"), 1)) : (openBlock(), createElementBlock("span", _hoisted_4$5, toDisplayString(_ctx.displayValue), 1)),
      createVNode(VBtn, {
        size: "small",
        color: "primary",
        variant: "tonal",
        onClick: _ctx.openDialog
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.labels.buttonText || "选择..."), 1)
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    createVNode(VDialog, {
      modelValue: _ctx.dialog,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.dialog = $event),
      "max-width": _ctx.isCompactLayout ? "96vw" : "1000px",
      "min-width": _ctx.isCompactLayout ? void 0 : "800px"
    }, {
      default: withCtx(() => [
        createVNode(VCard, { class: "selector-dialog-card" }, {
          default: withCtx(() => [
            createVNode(VCardTitle, {
              class: normalizeClass(["dialog-title d-flex align-center", _ctx.isCompactLayout ? "py-3 px-4" : "py-4 px-5"])
            }, {
              default: withCtx(() => [
                createVNode(VIcon, {
                  class: "mr-3",
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-account-circle")
                  ]),
                  _: 1
                }),
                createBaseVNode("span", null, toDisplayString(_ctx.labels.dialogTitle || "选择项目"), 1)
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(VDivider),
            createVNode(VCardText, { class: "pa-0 selector-content" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_5$5, [
                  !_ctx.isCompactLayout ? (openBlock(), createElementBlock("div", _hoisted_6$4, [
                    createBaseVNode("div", _hoisted_7$3, [
                      createBaseVNode("span", _hoisted_8$3, [
                        createVNode(VIcon, {
                          size: "small",
                          class: "mr-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-folder-multiple")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" 文件夹 ")
                      ])
                    ]),
                    createVNode(VList, {
                      density: "compact",
                      nav: "",
                      class: "tree-list pa-2",
                      "bg-color": "transparent"
                    }, {
                      default: withCtx(() => [
                        createVNode(VListItem, {
                          active: _ctx.currentFolderId === null,
                          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.navigateToFolder(null)),
                          rounded: "lg",
                          class: "mb-1 root-item"
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VIcon, {
                              size: "20",
                              color: _ctx.currentFolderId === null ? "primary" : ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-home")
                              ]),
                              _: 1
                            }, 8, ["color"])
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "text-body-2" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.labels.rootFolder || "根目录"), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["active"]),
                        !_ctx.treeLoading ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.folderTree, (folder) => {
                          return openBlock(), createBlock(_component_BaseMoveTargetNode, {
                            key: folder.folder_id,
                            folder,
                            depth: 0,
                            "selected-folder-id": _ctx.currentFolderId,
                            "disabled-folder-ids": [],
                            onSelect: _ctx.navigateToFolder
                          }, null, 8, ["folder", "selected-folder-id", "onSelect"]);
                        }), 128)) : createCommentVNode("", true),
                        _ctx.treeLoading ? (openBlock(), createElementBlock("div", _hoisted_9$3, [
                          createVNode(VProgressCircular, {
                            indeterminate: "",
                            size: "20",
                            color: "primary"
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_10$3, [
                    _ctx.isCompactLayout ? (openBlock(), createElementBlock("div", _hoisted_11$2, [
                      createVNode(VBtn, {
                        icon: "mdi-arrow-left",
                        size: "small",
                        variant: "text",
                        disabled: _ctx.currentFolderId === null,
                        onClick: _ctx.navigateToParentFolder
                      }, null, 8, ["disabled", "onClick"]),
                      createVNode(VBtn, {
                        size: "small",
                        variant: "tonal",
                        color: "primary",
                        "prepend-icon": "mdi-home",
                        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.navigateToFolder(null))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.labels.rootFolder || "根目录"), 1)
                        ]),
                        _: 1
                      }),
                      createBaseVNode("span", _hoisted_12$1, toDisplayString(_ctx.currentFolderLabel), 1)
                    ])) : createCommentVNode("", true),
                    _ctx.isCompactLayout ? (openBlock(), createBlock(VDivider, { key: 1 })) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_13, [
                      createVNode(VBreadcrumbs, {
                        items: _ctx.breadcrumbItems,
                        density: "compact",
                        class: "pa-0"
                      }, {
                        item: withCtx(({ item }) => [
                          createVNode(VBreadcrumbsItem, {
                            disabled: item.disabled,
                            onClick: ($event) => !item.disabled && _ctx.navigateToFolder(item.folderId),
                            class: normalizeClass({ "breadcrumb-link": !item.disabled })
                          }, {
                            default: withCtx(() => [
                              item.isRoot ? (openBlock(), createBlock(VIcon, {
                                key: 0,
                                size: "small",
                                class: "mr-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-home")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["disabled", "onClick", "class"])
                        ]),
                        divider: withCtx(() => [
                          createVNode(VIcon, {
                            size: "small",
                            color: "grey"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-chevron-right")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["items"])
                    ]),
                    createVNode(VDivider),
                    createBaseVNode("div", _hoisted_14, [
                      _ctx.itemsLoading ? (openBlock(), createBlock(VProgressLinear, {
                        key: 0,
                        indeterminate: "",
                        color: "primary",
                        height: "2"
                      })) : createCommentVNode("", true),
                      !_ctx.itemsLoading ? (openBlock(), createBlock(VList, {
                        key: 1,
                        lines: "two",
                        class: "pa-3 items-content"
                      }, {
                        default: withCtx(() => [
                          _ctx.currentSubFolders.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            _hoisted_15,
                            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.currentSubFolders, (folder) => {
                              return openBlock(), createBlock(VListItem, {
                                key: "folder-" + folder.folder_id,
                                onClick: ($event) => _ctx.navigateToFolder(folder.folder_id),
                                rounded: "lg",
                                class: "mb-1 folder-item"
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VAvatar, {
                                    size: "36",
                                    color: "amber-lighten-4",
                                    class: "mr-3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        color: "amber-darken-2",
                                        size: "20"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-folder")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                append: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "20",
                                    color: "grey"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-chevron-right")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(folder.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]);
                            }), 128))
                          ], 64)) : createCommentVNode("", true),
                          _ctx.currentItems.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createBaseVNode("div", {
                              class: normalizeClass(["section-label text-caption text-medium-emphasis mb-2 px-2", { "mt-4": _ctx.currentSubFolders.length > 0 }])
                            }, "可选项目", 2),
                            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.currentItems, (item) => {
                              return openBlock(), createBlock(VListItem, {
                                key: "item-" + _ctx.getItemId(item),
                                value: _ctx.getItemId(item),
                                onClick: ($event) => _ctx.selectItem(item),
                                active: _ctx.selectedItemId === _ctx.getItemId(item),
                                rounded: "lg",
                                class: normalizeClass(["mb-1 persona-item", { "selected-item": _ctx.selectedItemId === _ctx.getItemId(item) }])
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VAvatar, {
                                    size: "36",
                                    color: _ctx.selectedItemId === _ctx.getItemId(item) ? "primary-lighten-4" : "grey-lighten-3",
                                    class: "mr-3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        color: _ctx.selectedItemId === _ctx.getItemId(item) ? "primary" : "grey-darken-1",
                                        size: "20"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-account")
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                append: withCtx(() => [
                                  createBaseVNode("div", _hoisted_16, [
                                    _ctx.showEditButton && !_ctx.isDefaultItem(item) ? (openBlock(), createBlock(VBtn, {
                                      key: 0,
                                      icon: "mdi-pencil",
                                      size: "small",
                                      variant: "text",
                                      onClick: withModifiers(($event) => _ctx.handleEditItem(item), ["stop"]),
                                      title: _ctx.labels.editButton || "Edit"
                                    }, null, 8, ["onClick", "title"])) : createCommentVNode("", true),
                                    _ctx.selectedItemId === _ctx.getItemId(item) ? (openBlock(), createBlock(VIcon, {
                                      key: 1,
                                      color: "primary",
                                      size: "22"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-check-circle")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ])
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.getItemName(item)), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  _ctx.getItemDescription(item) ? (openBlock(), createBlock(VListItemSubtitle, {
                                    key: 0,
                                    class: "text-truncate"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.truncateText(_ctx.getItemDescription(item), 80)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1032, ["value", "onClick", "active", "class"]);
                            }), 128))
                          ], 64)) : createCommentVNode("", true),
                          _ctx.currentSubFolders.length === 0 && _ctx.currentItems.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_17, [
                            createVNode(VIcon, {
                              size: "64",
                              color: "grey-lighten-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-folder-open-outline")
                              ]),
                              _: 1
                            }),
                            createBaseVNode("p", _hoisted_18, toDisplayString(_ctx.labels.emptyFolder || _ctx.labels.noItems || "此文件夹为空"), 1)
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(VCardActions, { class: "pa-4" }, {
              default: withCtx(() => [
                _ctx.showCreateButton ? (openBlock(), createBlock(VBtn, {
                  key: 0,
                  variant: "text",
                  color: "primary",
                  "prepend-icon": "mdi-plus",
                  onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("create"))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.labels.createButton || "新建"), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(VSpacer),
                createVNode(VBtn, {
                  variant: "text",
                  onClick: _ctx.cancelSelection
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.labels.cancelButton || "取消"), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(VBtn, {
                  color: "primary",
                  onClick: _ctx.confirmSelection,
                  disabled: !_ctx.selectedItemId
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.labels.confirmButton || "确认"), 1)
                  ]),
                  _: 1
                }, 8, ["onClick", "disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "max-width", "min-width"])
  ]);
}
const BaseFolderItemSelector = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render], ["__scopeId", "data-v-e2e8f431"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PersonaSelector",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    const { tm } = useModuleI18n("core.shared");
    const folderTree = ref([]);
    const currentPersonas = ref([]);
    const treeLoading = ref(false);
    const itemsLoading = ref(false);
    const showPersonaDialog = ref(false);
    const editingPersona = ref(null);
    const currentFolderId = ref(null);
    const defaultPersona = {
      id: "default",
      persona_id: "default",
      name: tm("personaSelector.defaultPersona"),
      system_prompt: "You are a helpful and friendly assistant."
    };
    function findFolderName(nodes, folderId) {
      for (const node of nodes) {
        if (node.folder_id === folderId) {
          return node.name;
        }
        if (node.children && node.children.length > 0) {
          const found = findFolderName(node.children, folderId);
          if (found) return found;
        }
      }
      return null;
    }
    const currentFolderName = computed(() => {
      if (!currentFolderId.value) {
        return null;
      }
      return findFolderName(folderTree.value, currentFolderId.value);
    });
    const labels = computed(() => ({
      dialogTitle: tm("personaSelector.dialogTitle"),
      notSelected: tm("personaSelector.notSelected"),
      buttonText: props.buttonText || tm("personaSelector.buttonText"),
      noItems: tm("personaSelector.noPersonas"),
      defaultItem: tm("personaSelector.defaultPersona"),
      noDescription: tm("personaSelector.noDescription"),
      createButton: tm("personaSelector.createPersona"),
      editButton: tm("personaSelector.editPersona") || "Edit",
      confirmButton: t("core.common.confirm"),
      cancelButton: t("core.common.cancel"),
      rootFolder: tm("personaSelector.rootFolder") || "全部人格",
      emptyFolder: tm("personaSelector.emptyFolder") || "此文件夹为空"
    }));
    function formatDisplayValue(value) {
      if (value === "default") {
        return tm("personaSelector.defaultPersona");
      }
      return value;
    }
    function handleUpdate(value) {
      emit("update:modelValue", value);
    }
    async function loadFolderTree() {
      treeLoading.value = true;
      try {
        const response = await axios.get("/api/persona/folder/tree");
        if (response.data.status === "ok") {
          folderTree.value = response.data.data || [];
        }
      } catch (error) {
        console.error("加载文件夹树失败:", error);
        folderTree.value = [];
      } finally {
        treeLoading.value = false;
      }
    }
    async function loadPersonasInFolder(folderId) {
      itemsLoading.value = true;
      try {
        const params = new URLSearchParams();
        if (folderId !== null) {
          params.set("folder_id", folderId);
        } else {
          params.set("folder_id", "");
        }
        const response = await axios.get(`/api/persona/list?${params.toString()}`);
        if (response.data.status === "ok") {
          currentPersonas.value = response.data.data || [];
        }
      } catch (error) {
        console.error("加载人格列表失败:", error);
        currentPersonas.value = [];
      } finally {
        itemsLoading.value = false;
      }
    }
    async function handleNavigate(folderId) {
      currentFolderId.value = folderId;
      await loadPersonasInFolder(folderId);
    }
    function openCreatePersona() {
      editingPersona.value = null;
      showPersonaDialog.value = true;
    }
    function openEditPersona(persona) {
      editingPersona.value = persona;
      showPersonaDialog.value = true;
    }
    async function handlePersonaSaved(message) {
      var _a;
      console.log("人格保存成功:", message);
      const savedPersonaId = ((_a = editingPersona.value) == null ? void 0 : _a.persona_id) || "";
      showPersonaDialog.value = false;
      editingPersona.value = null;
      await loadPersonasInFolder(currentFolderId.value);
      window.dispatchEvent(
        new CustomEvent("astrbot:persona-saved", {
          detail: { persona_id: savedPersonaId }
        })
      );
    }
    function handleError(error) {
      console.error("创建人格失败:", error);
    }
    onMounted(() => {
      loadFolderTree();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(BaseFolderItemSelector, {
          "model-value": __props.modelValue,
          "onUpdate:modelValue": handleUpdate,
          "folder-tree": folderTree.value,
          items: currentPersonas.value,
          "tree-loading": treeLoading.value,
          "items-loading": itemsLoading.value,
          labels: labels.value,
          "show-create-button": true,
          "show-edit-button": true,
          "default-item": defaultPersona,
          "item-id-field": "persona_id",
          "item-name-field": "persona_id",
          "item-description-field": "system_prompt",
          "display-value-formatter": formatDisplayValue,
          onNavigate: handleNavigate,
          onCreate: openCreatePersona,
          onEdit: openEditPersona
        }, null, 8, ["model-value", "folder-tree", "items", "tree-loading", "items-loading", "labels"]),
        createVNode(PersonaForm, {
          modelValue: showPersonaDialog.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showPersonaDialog.value = $event),
          "editing-persona": editingPersona.value ?? void 0,
          "current-folder-id": currentFolderId.value ?? void 0,
          "current-folder-name": currentFolderName.value ?? void 0,
          onSaved: handlePersonaSaved,
          onError: handleError
        }, null, 8, ["modelValue", "editing-persona", "current-folder-id", "current-folder-name"])
      ], 64);
    };
  }
});
const PersonaSelector = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-fc3f5715"]]);
const _hoisted_1$4 = {
  class: "d-flex align-center justify-space-between",
  style: { "gap": "8px" }
};
const _hoisted_2$4 = { style: { "flex": "1", "min-width": "0", "overflow": "hidden" } };
const _hoisted_3$4 = {
  key: 0,
  style: { "color": "rgb(var(--v-theme-primaryText))" }
};
const _hoisted_4$4 = {
  key: 1,
  class: "d-flex flex-wrap gap-1"
};
const _hoisted_5$4 = {
  class: "text-truncate",
  style: { "max-width": "200px" }
};
const _hoisted_6$3 = { class: "emoji-icon" };
const _hoisted_7$2 = { key: 0 };
const _hoisted_8$2 = { key: 1 };
const _hoisted_9$2 = {
  key: 0,
  class: "text-center py-8"
};
const _hoisted_10$2 = { class: "text-grey mt-4 mb-4" };
const _hoisted_11$1 = {
  key: 0,
  class: "text-caption text-grey"
};
const _sfc_main$4 = {
  __name: "KnowledgeBaseSelector",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    buttonText: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const router = useRouter();
    const { tm } = useModuleI18n("core.shared");
    const dialog = ref(false);
    const knowledgeBaseList = ref([]);
    const loading = ref(false);
    const selectedKnowledgeBases = ref([]);
    watch(() => props.modelValue, (newValue) => {
      selectedKnowledgeBases.value = Array.isArray(newValue) ? [...newValue] : [];
    }, { immediate: true });
    async function openDialog() {
      selectedKnowledgeBases.value = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
      dialog.value = true;
      await loadKnowledgeBases();
    }
    async function loadKnowledgeBases() {
      loading.value = true;
      try {
        const response = await axios.get("/api/kb/list", {
          params: {
            page: 1,
            page_size: 100
          }
        });
        if (response.data.status === "ok") {
          knowledgeBaseList.value = response.data.data.items || [];
        } else {
          console.error("加载知识库列表失败:", response.data.message);
          knowledgeBaseList.value = [];
        }
      } catch (error) {
        console.error("加载知识库列表失败:", error);
        knowledgeBaseList.value = [];
      } finally {
        loading.value = false;
      }
    }
    function isSelected(kbName) {
      return selectedKnowledgeBases.value.includes(kbName);
    }
    function selectKnowledgeBase(kbName) {
      const index = selectedKnowledgeBases.value.indexOf(kbName);
      if (index > -1) {
        selectedKnowledgeBases.value.splice(index, 1);
      } else {
        selectedKnowledgeBases.value.push(kbName);
      }
    }
    function removeKnowledgeBase(kbName) {
      const index = selectedKnowledgeBases.value.indexOf(kbName);
      if (index > -1) {
        selectedKnowledgeBases.value.splice(index, 1);
      }
      emit("update:modelValue", [...selectedKnowledgeBases.value]);
    }
    function confirmSelection() {
      emit("update:modelValue", [...selectedKnowledgeBases.value]);
      dialog.value = false;
    }
    function cancelSelection() {
      selectedKnowledgeBases.value = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
      dialog.value = false;
    }
    function goToKnowledgeBasePage() {
      dialog.value = false;
      router.push("/knowledge-base");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$4, [
          createBaseVNode("div", _hoisted_2$4, [
            !__props.modelValue || Array.isArray(__props.modelValue) && __props.modelValue.length === 0 ? (openBlock(), createElementBlock("span", _hoisted_3$4, toDisplayString(unref(tm)("knowledgeBaseSelector.notSelected")), 1)) : (openBlock(), createElementBlock("div", _hoisted_4$4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.modelValue, (name) => {
                return openBlock(), createBlock(VChip, {
                  key: name,
                  size: "small",
                  color: "primary",
                  variant: "tonal",
                  closable: "",
                  "onClick:close": ($event) => removeKnowledgeBase(name),
                  style: { "max-width": "100%" }
                }, {
                  default: withCtx(() => [
                    createBaseVNode("span", _hoisted_5$4, toDisplayString(name), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick:close"]);
              }), 128))
            ]))
          ]),
          createVNode(VBtn, {
            size: "small",
            color: "primary",
            variant: "tonal",
            onClick: openDialog,
            style: { "flex-shrink": "0" }
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.buttonText || unref(tm)("knowledgeBaseSelector.buttonText")), 1)
            ]),
            _: 1
          })
        ]),
        createVNode(VDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialog.value = $event),
          "max-width": "600px"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, {
                  class: "text-h3 py-4",
                  style: { "font-weight": "normal" }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(tm)("knowledgeBaseSelector.dialogTitle")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, {
                  class: "pa-0",
                  style: { "max-height": "400px", "overflow-y": "auto" }
                }, {
                  default: withCtx(() => [
                    loading.value ? (openBlock(), createBlock(VProgressLinear, {
                      key: 0,
                      indeterminate: "",
                      color: "primary"
                    })) : createCommentVNode("", true),
                    !loading.value ? (openBlock(), createBlock(VList, {
                      key: 1,
                      density: "compact"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(knowledgeBaseList.value, (kb) => {
                          return openBlock(), createBlock(VListItem, {
                            key: kb.kb_id,
                            value: kb.kb_name,
                            onClick: ($event) => selectKnowledgeBase(kb.kb_name),
                            active: isSelected(kb.kb_name),
                            rounded: "md",
                            class: "ma-1"
                          }, {
                            prepend: withCtx(() => [
                              createBaseVNode("span", _hoisted_6$3, toDisplayString(kb.emoji || "📚"), 1)
                            ]),
                            append: withCtx(() => [
                              isSelected(kb.kb_name) ? (openBlock(), createBlock(VIcon, {
                                key: 0,
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" mdi-checkbox-marked ")
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(VIcon, {
                                key: 1,
                                color: "grey-lighten-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" mdi-checkbox-blank-outline ")
                                ]),
                                _: 1
                              }))
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(kb.kb_name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(kb.description || unref(tm)("knowledgeBaseSelector.noDescription")) + " ", 1),
                                  kb.doc_count !== void 0 ? (openBlock(), createElementBlock("span", _hoisted_7$2, " - " + toDisplayString(unref(tm)("knowledgeBaseSelector.documentCount", { count: kb.doc_count })), 1)) : createCommentVNode("", true),
                                  kb.chunk_count !== void 0 ? (openBlock(), createElementBlock("span", _hoisted_8$2, " - " + toDisplayString(unref(tm)("knowledgeBaseSelector.chunkCount", { count: kb.chunk_count })), 1)) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["value", "onClick", "active"]);
                        }), 128)),
                        knowledgeBaseList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_9$2, [
                          createVNode(VIcon, {
                            size: "64",
                            color: "grey-lighten-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-database-off")
                            ]),
                            _: 1
                          }),
                          createBaseVNode("p", _hoisted_10$2, toDisplayString(unref(tm)("knowledgeBaseSelector.noKnowledgeBases")), 1),
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "tonal",
                            onClick: goToKnowledgeBasePage
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(tm)("knowledgeBaseSelector.createKnowledgeBase")), 1)
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, { class: "pa-4" }, {
                  default: withCtx(() => [
                    selectedKnowledgeBases.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_11$1, toDisplayString(unref(tm)("knowledgeBaseSelector.selectedCount", { count: selectedKnowledgeBases.value.length })), 1)) : createCommentVNode("", true),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: cancelSelection
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(tm)("knowledgeBaseSelector.cancelSelection")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      onClick: confirmSelection
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(tm)("knowledgeBaseSelector.confirmSelection")), 1)
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
      ], 64);
    };
  }
};
const KnowledgeBaseSelector = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3e4844e6"]]);
const _hoisted_1$3 = { class: "d-flex align-center justify-space-between mb-2" };
const _hoisted_2$3 = { class: "flex-grow-1" };
const _hoisted_3$3 = {
  key: 0,
  style: { "color": "rgb(var(--v-theme-primaryText))" }
};
const _hoisted_4$3 = {
  key: 1,
  style: { "color": "rgb(var(--v-theme-primaryText))" }
};
const _hoisted_5$3 = {
  key: 2,
  style: { "color": "rgb(var(--v-theme-primaryText))" }
};
const _hoisted_6$2 = { key: 1 };
const _hoisted_7$1 = {
  key: 0,
  style: { "max-height": "300px", "overflow-y": "auto" }
};
const _hoisted_8$1 = { class: "pl-8 pt-2" };
const _hoisted_9$1 = {
  key: 1,
  class: "text-center py-8"
};
const _hoisted_10$1 = { class: "text-grey mt-4" };
const _sfc_main$3 = {
  __name: "PluginSetSelector",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    buttonText: {
      type: String,
      default: ""
    },
    maxDisplayItems: {
      type: Number,
      default: 3
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const { tm } = useModuleI18n("core.shared");
    const dialog = ref(false);
    const pluginList = ref([]);
    const loading = ref(false);
    const selectionMode = ref("custom");
    const selectedPlugins = ref([]);
    const isAllPlugins = computed(() => {
      return props.modelValue && props.modelValue.length === 1 && props.modelValue[0] === "*";
    });
    watch(() => props.modelValue, (newValue) => {
      if (!newValue || newValue.length === 0) {
        selectionMode.value = "none";
        selectedPlugins.value = [];
      } else if (newValue.length === 1 && newValue[0] === "*") {
        selectionMode.value = "all";
        selectedPlugins.value = [];
      } else {
        selectionMode.value = "custom";
        selectedPlugins.value = [...newValue];
      }
    }, { immediate: true });
    async function openDialog() {
      dialog.value = true;
      await loadPlugins();
    }
    async function loadPlugins() {
      loading.value = true;
      try {
        const response = await axios.get("/api/plugin/get");
        if (response.data.status === "ok") {
          pluginList.value = (response.data.data || []).filter((plugin) => plugin.activated && !plugin.reserved).sort((a, b) => {
            const nameA = a.name || "";
            const nameB = b.name || "";
            return nameA.localeCompare(nameB);
          });
        }
      } catch (error) {
        console.error("加载插件列表失败:", error);
        pluginList.value = [];
      } finally {
        loading.value = false;
      }
    }
    function confirmSelection() {
      let newValue = [];
      switch (selectionMode.value) {
        case "all":
          newValue = ["*"];
          break;
        case "none":
          newValue = [];
          break;
        case "custom":
          newValue = [...selectedPlugins.value];
          break;
      }
      emit("update:modelValue", newValue);
      dialog.value = false;
    }
    function cancelSelection() {
      const currentValue = props.modelValue || [];
      if (currentValue.length === 0) {
        selectionMode.value = "none";
        selectedPlugins.value = [];
      } else if (currentValue.length === 1 && currentValue[0] === "*") {
        selectionMode.value = "all";
        selectedPlugins.value = [];
      } else {
        selectionMode.value = "custom";
        selectedPlugins.value = [...currentValue];
      }
      dialog.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_1$3, [
            createBaseVNode("div", _hoisted_2$3, [
              !__props.modelValue || __props.modelValue.length === 0 ? (openBlock(), createElementBlock("span", _hoisted_3$3, toDisplayString(unref(tm)("pluginSetSelector.notSelected")), 1)) : isAllPlugins.value ? (openBlock(), createElementBlock("span", _hoisted_4$3, toDisplayString(unref(tm)("pluginSetSelector.allPlugins")), 1)) : (openBlock(), createElementBlock("span", _hoisted_5$3, toDisplayString(unref(tm)("pluginSetSelector.selectedCount", { count: __props.modelValue.length })), 1))
            ]),
            createVNode(VBtn, {
              size: "small",
              color: "primary",
              variant: "tonal",
              onClick: openDialog
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.buttonText || unref(tm)("pluginSetSelector.buttonText")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        createVNode(VDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => dialog.value = $event),
          "max-width": "700px"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, {
                  class: "text-h3 py-4",
                  style: { "font-weight": "normal" }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(tm)("pluginSetSelector.dialogTitle")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, { class: "pa-4" }, {
                  default: withCtx(() => [
                    loading.value ? (openBlock(), createBlock(VProgressLinear, {
                      key: 0,
                      indeterminate: "",
                      color: "primary"
                    })) : createCommentVNode("", true),
                    !loading.value ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
                      createVNode(VRadioGroup, {
                        modelValue: selectionMode.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectionMode.value = $event),
                        class: "mb-4",
                        "hide-details": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VRadio, {
                            value: "all",
                            label: unref(tm)("pluginSetSelector.enableAll"),
                            color: "primary"
                          }, null, 8, ["label"]),
                          createVNode(VRadio, {
                            value: "none",
                            label: unref(tm)("pluginSetSelector.enableNone"),
                            color: "primary"
                          }, null, 8, ["label"]),
                          createVNode(VRadio, {
                            value: "custom",
                            label: unref(tm)("pluginSetSelector.customSelect"),
                            color: "primary"
                          }, null, 8, ["label"])
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      selectionMode.value === "custom" ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
                        pluginList.value.length > 0 ? (openBlock(), createBlock(VList, {
                          key: 0,
                          density: "compact"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(pluginList.value, (plugin) => {
                              return openBlock(), createBlock(VListItem, {
                                key: plugin.name,
                                rounded: "md",
                                class: "ma-1"
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VCheckbox, {
                                    modelValue: selectedPlugins.value,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedPlugins.value = $event),
                                    value: plugin.name,
                                    color: "primary",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "value"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(plugin.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(plugin.desc || unref(tm)("pluginSetSelector.noDescription")) + " ", 1),
                                      !plugin.activated ? (openBlock(), createBlock(VChip, {
                                        key: 0,
                                        size: "x-small",
                                        color: "grey",
                                        class: "ml-1"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(tm)("pluginSetSelector.notActivated")), 1)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)),
                            createBaseVNode("div", _hoisted_8$1, [
                              createBaseVNode("small", null, toDisplayString(unref(tm)("pluginSetSelector.note")), 1)
                            ])
                          ]),
                          _: 1
                        })) : (openBlock(), createElementBlock("div", _hoisted_9$1, [
                          createVNode(VIcon, {
                            size: "64",
                            color: "grey-lighten-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-puzzle-outline")
                            ]),
                            _: 1
                          }),
                          createBaseVNode("p", _hoisted_10$1, toDisplayString(unref(tm)("pluginSetSelector.noPlugins")), 1)
                        ]))
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: cancelSelection
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(tm)("pluginSetSelector.cancelSelection")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      onClick: confirmSelection
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(tm)("pluginSetSelector.confirmSelection")), 1)
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
      ], 64);
    };
  }
};
const PluginSetSelector = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-dfe911d9"]]);
const _hoisted_1$2 = {
  class: "d-flex align-center gap-2",
  style: { "width": "60%" }
};
const _hoisted_2$2 = {
  class: "d-flex align-center pa-1",
  style: { "border": "1px solid rgba(0,0,0,0.1)", "border-radius": "8px" }
};
const _hoisted_3$2 = {
  class: "flex-grow-1",
  style: { "border-right": "1px solid rgba(0,0,0,0.1)" }
};
const _hoisted_4$2 = { class: "flex-grow-1 preview-container" };
const _hoisted_5$2 = ["srcdoc"];
const _hoisted_6$1 = { class: "text-caption text-grey" };
const _sfc_main$2 = {
  __name: "T2ITemplateEditor",
  setup(__props, { expose: __expose }) {
    const { t } = useI18n();
    const { tm } = useModuleI18n("core.shared");
    const dialog = ref(false);
    const loading = ref(false);
    const saveLoading = ref(false);
    const resetLoading = ref(false);
    const previewLoading = ref(false);
    const applyLoading = ref(false);
    const templates = ref([]);
    const activeTemplate = ref("base");
    const selectedTemplate = ref(null);
    const editingName = ref("");
    const templateContent = ref("");
    const isCreatingNew = ref(false);
    const resetDialog = ref(false);
    const deleteDialog = ref(false);
    const applyAndCloseDialog = ref(false);
    const previewFrame = ref(null);
    const editorTheme = computed(() => "vs-light");
    const editorOptions = {
      automaticLayout: true,
      fontSize: 12,
      lineNumbers: "on",
      wordWrap: "on",
      minimap: { enabled: false },
      scrollBeyondLastLine: false
    };
    const previewVersion = ref("v4.0.0");
    const syncPreviewVersion = async () => {
      var _a, _b, _c;
      try {
        const res = await axios.get("/api/stat/version");
        const rawVersion = ((_b = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.data) == null ? void 0 : _b.version) || ((_c = res == null ? void 0 : res.data) == null ? void 0 : _c.version);
        if (rawVersion) {
          previewVersion.value = rawVersion.startsWith("v") ? rawVersion : `v${rawVersion}`;
        }
      } catch (error) {
        console.warn("Failed to fetch version:", error);
      }
    };
    const previewData = computed(() => ({
      text: tm("t2iTemplateEditor.previewText") || "这是一个示例文本，用于预览模板效果。\n\n这里可以包含多行文本，支持换行和各种格式。",
      version: previewVersion.value
    }));
    const injectShikiRuntime = (content) => {
      if (content.includes("astrbot-t2i-shiki-runtime")) {
        return content;
      }
      const runtimeScript = getShikiRuntimeScript();
      const headClose = content.search(/<\/head\s*>/i);
      if (headClose >= 0) {
        return `${content.slice(0, headClose)}  ${runtimeScript}
${content.slice(headClose)}`;
      }
      return `${runtimeScript}
${content}`;
    };
    const getShikiRuntimeScript = () => '<script id="astrbot-t2i-shiki-runtime" src="/t2i/shiki_runtime.iife.js"><\/script>';
    const hasMarkdownSource = (content) => /<[^>]+\bid=["']markdown-source["']/i.test(content);
    const insertMarkdownSource = (content) => {
      const sourceElement = '  <textarea id="markdown-source" hidden>{{ text | safe }}</textarea>\n';
      const markedScript = content.search(/^[ \t]*<script\s+src=["']https:\/\/cdn\.jsdelivr\.net\/npm\/marked\/marked\.min\.js["']><\/script>[ \t]*\r?\n?/im);
      if (markedScript >= 0) {
        return `${content.slice(0, markedScript)}${sourceElement}${content.slice(markedScript)}`;
      }
      const bodyClose = content.search(/<\/body\s*>/i);
      if (bodyClose >= 0) {
        return `${content.slice(0, bodyClose)}${sourceElement}${content.slice(bodyClose)}`;
      }
      return `${sourceElement}${content}`;
    };
    const normalizeMarkdownSource = (content) => {
      let normalized = content.replace(
        /<script\s+id=["']markdown-source["']\s+type=["']text\/plain["']>\s*\{\{\s*text\s*\|\s*safe\s*\}\}\s*<\/script>/gi,
        '<textarea id="markdown-source" hidden>{{ text | safe }}</textarea>'
      );
      normalized = normalized.replace(
        /decodeBase64Utf8\("\{\{\s*text_base64\s*\}\}"\)/g,
        'document.getElementById("markdown-source").value'
      );
      normalized = normalized.replace(
        /document\.getElementById\(["']markdown-source["']\)\.textContent/g,
        'document.getElementById("markdown-source").value'
      );
      if (/\{\{\s*text_base64\s*\}\}/.test(normalized) && !hasMarkdownSource(normalized)) {
        normalized = insertMarkdownSource(normalized);
      }
      return normalized;
    };
    const previewContent = computed(() => {
      try {
        let content = normalizeMarkdownSource(templateContent.value);
        content = content.replace(/\{\{\s*text\s*\|\s*safe\s*\}\}/g, () => previewData.value.text);
        content = content.replace(/\{\{\s*version\s*\}\}/g, () => previewData.value.version);
        let usedLegacyShikiPlaceholder = false;
        content = content.replace(/<script\b[^>]*>\s*\{\{\s*shiki_runtime\s*\|\s*safe\s*\}\}\s*<\/script>/gi, () => {
          usedLegacyShikiPlaceholder = true;
          return getShikiRuntimeScript();
        });
        content = content.replace(/\{\{\s*shiki_runtime\s*\|\s*safe\s*\}\}/g, () => {
          usedLegacyShikiPlaceholder = true;
          return getShikiRuntimeScript();
        });
        return usedLegacyShikiPlaceholder ? content : injectShikiRuntime(content);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return `<div style="color: red; padding: 20px;">模板渲染错误: ${errorMessage}</div>`;
      }
    });
    const loadInitialData = async () => {
      loading.value = true;
      try {
        const [listRes, activeRes] = await Promise.all([
          axios.get("/api/t2i/templates"),
          axios.get("/api/t2i/templates/active")
        ]);
        if (listRes.data.status === "ok") {
          templates.value = listRes.data.data;
        } else {
          console.error("加载模板列表失败:", listRes.data.message);
        }
        if (activeRes.data.status === "ok") {
          activeTemplate.value = activeRes.data.data.active_template;
        } else {
          console.error("加载活动模板失败:", activeRes.data.message);
        }
        if (templates.value.length > 0) {
          selectedTemplate.value = activeTemplate.value;
        }
      } catch (error) {
        console.error("加载初始数据失败:", error);
      } finally {
        loading.value = false;
      }
    };
    const loadTemplateContent = async (name) => {
      if (!name) return;
      previewLoading.value = true;
      try {
        const response = await axios.get(`/api/t2i/templates/${name}`);
        if (response.data.status === "ok") {
          templateContent.value = response.data.data.content;
        } else {
          console.error(`加载模板 '${name}' 失败:`, response.data.message);
        }
      } catch (error) {
        console.error(`加载模板 '${name}' 失败:`, error);
      } finally {
        previewLoading.value = false;
      }
    };
    const saveTemplate = async () => {
      saveLoading.value = true;
      try {
        if (isCreatingNew.value) {
          if (!editingName.value) return;
          const response = await axios.post("/api/t2i/templates/create", {
            name: editingName.value,
            content: templateContent.value
          });
          await loadInitialData();
          selectedTemplate.value = response.data.data.name;
          isCreatingNew.value = false;
        } else {
          if (!selectedTemplate.value) return;
          await axios.put(`/api/t2i/templates/${selectedTemplate.value}`, {
            content: templateContent.value
          });
        }
      } catch (error) {
        console.error("保存模板失败:", error);
      } finally {
        saveLoading.value = false;
      }
    };
    const setActiveTemplate = async (name) => {
      applyLoading.value = true;
      try {
        await axios.post("/api/t2i/templates/set_active", { name });
        activeTemplate.value = name;
      } catch (error) {
        console.error(`应用模板 '${name}' 失败:`, error);
      } finally {
        applyLoading.value = false;
      }
    };
    const confirmDelete = async () => {
      if (!selectedTemplate.value || selectedTemplate.value === "base") return;
      saveLoading.value = true;
      try {
        const nameToDelete = selectedTemplate.value;
        await axios.delete(`/api/t2i/templates/${nameToDelete}`);
        deleteDialog.value = false;
        if (activeTemplate.value === nameToDelete) {
          await setActiveTemplate("base");
        }
        await loadInitialData();
        selectedTemplate.value = "base";
      } catch (error) {
        console.error(`删除模板 '${selectedTemplate.value}' 失败:`, error);
      } finally {
        saveLoading.value = false;
      }
    };
    const confirmReset = async () => {
      resetLoading.value = true;
      try {
        await axios.post("/api/t2i/templates/reset_default");
        resetDialog.value = false;
        if (selectedTemplate.value === "base") {
          await loadTemplateContent("base");
        }
        if (activeTemplate.value !== "base") {
          await setActiveTemplate("base");
        }
      } catch (error) {
        console.error("重置模板失败:", error);
      } finally {
        resetLoading.value = false;
      }
    };
    const resetToDefault = () => {
      resetDialog.value = true;
    };
    const newTemplate = () => {
      isCreatingNew.value = true;
      selectedTemplate.value = null;
      editingName.value = "";
      templateContent.value = `<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>New Template</title>
</head>
<body>
  <!-- 从这里开始编辑 -->
  <article>{{ text | safe }}</article>
</body>
</html>
`;
    };
    const promptDelete = () => {
      if (selectedTemplate.value && selectedTemplate.value !== "base") {
        deleteDialog.value = true;
      }
    };
    const promptApplyAndClose = () => {
      if (!isCreatingNew.value && selectedTemplate.value) {
        applyAndCloseDialog.value = true;
      }
    };
    const confirmApplyAndClose = async () => {
      if (isCreatingNew.value) return;
      await saveTemplate();
      await setActiveTemplate(selectedTemplate.value);
      applyAndCloseDialog.value = false;
      closeDialog();
    };
    const refreshPreview = () => {
      previewLoading.value = true;
      syncPreviewVersion();
      nextTick(() => {
        if (previewFrame.value) {
          previewFrame.value.contentWindow.location.reload();
        }
        setTimeout(() => previewLoading.value = false, 500);
      });
    };
    const closeDialog = () => {
      dialog.value = false;
    };
    watch(dialog, (newVal) => {
      if (newVal) {
        syncPreviewVersion();
        loadInitialData();
      } else {
        selectedTemplate.value = null;
        templateContent.value = "";
        isCreatingNew.value = false;
      }
    });
    watch(selectedTemplate, (newName) => {
      if (newName) {
        isCreatingNew.value = false;
        loadTemplateContent(newName);
      }
    });
    __expose({
      openDialog: () => {
        dialog.value = true;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VDialog, {
        modelValue: dialog.value,
        "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => dialog.value = $event),
        "max-width": "1400px",
        persistent: "",
        scrollable: ""
      }, {
        activator: withCtx(({ props }) => [
          createVNode(VBtn, mergeProps(props, {
            variant: "outlined",
            color: "primary",
            size: "small",
            loading: loading.value
          }), {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.buttonText")), 1)
            ]),
            _: 2
          }, 1040, ["loading"])
        ]),
        default: withCtx(() => [
          createVNode(VCard, { class: "t2i-template-editor" }, {
            default: withCtx(() => [
              createVNode(VCardTitle, { class: "d-flex align-center justify-space-between" }, {
                default: withCtx(() => [
                  createBaseVNode("span", null, toDisplayString(unref(tm)("t2iTemplateEditor.dialogTitle")), 1),
                  createVNode(VSpacer),
                  createBaseVNode("div", _hoisted_1$2, [
                    isCreatingNew.value ? (openBlock(), createBlock(VTextField, {
                      key: 0,
                      modelValue: editingName.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editingName.value = $event),
                      label: unref(tm)("t2iTemplateEditor.newTemplateNameLabel"),
                      density: "compact",
                      "hide-details": "",
                      variant: "outlined",
                      class: "flex-grow-1",
                      autofocus: "",
                      rules: [(v) => !!v || unref(tm)("t2iTemplateEditor.nameRequired")]
                    }, null, 8, ["modelValue", "label", "rules"])) : (openBlock(), createBlock(VSelect, {
                      key: 1,
                      modelValue: selectedTemplate.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedTemplate.value = $event),
                      items: templates.value,
                      "item-title": "name",
                      "item-value": "name",
                      label: unref(tm)("t2iTemplateEditor.selectTemplateLabel"),
                      density: "compact",
                      "hide-details": "",
                      variant: "outlined",
                      class: "flex-grow-1",
                      loading: loading.value
                    }, {
                      item: withCtx(({ props, item }) => [
                        createVNode(VListItem, mergeProps(props, {
                          title: item.raw.name
                        }), {
                          append: withCtx(() => [
                            item.raw.name === activeTemplate.value ? (openBlock(), createBlock(VChip, {
                              key: 0,
                              color: "success",
                              variant: "tonal",
                              size: "small",
                              class: "ml-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.applied")), 1)
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(VBtn, {
                              key: 1,
                              variant: "text",
                              color: "primary",
                              size: "small",
                              class: "ml-2",
                              onClick: withModifiers(($event) => setActiveTemplate(item.raw.name), ["stop"]),
                              loading: applyLoading.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.apply")), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick", "loading"]))
                          ]),
                          _: 2
                        }, 1040, ["title"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "items", "label", "loading"])),
                    createVNode(VBtn, {
                      variant: "text",
                      icon: "",
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
                  ])
                ]),
                _: 1
              }),
              createVNode(VCardText, { class: "pa-0" }, {
                default: withCtx(() => [
                  createVNode(VRow, {
                    "no-gutters": "",
                    style: { "height": "70vh" }
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "6",
                        class: "d-flex flex-column"
                      }, {
                        default: withCtx(() => [
                          createVNode(VToolbar, {
                            density: "compact",
                            color: "surface-variant"
                          }, {
                            default: withCtx(() => [
                              createVNode(VToolbarTitle, { class: "text-subtitle-2" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.templateEditor")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VSpacer),
                              createBaseVNode("div", _hoisted_2$2, [
                                createVNode(VBtn, {
                                  variant: "text",
                                  size: "small",
                                  onClick: newTemplate,
                                  color: "success"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { left: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-plus")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" " + toDisplayString(unref(tm)("t2iTemplateEditor.new")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, {
                                  vertical: "",
                                  class: "mx-1"
                                }),
                                createVNode(VBtn, {
                                  variant: "text",
                                  size: "small",
                                  onClick: resetToDefault,
                                  loading: resetLoading.value,
                                  color: "warning"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.resetBase")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["loading"]),
                                createVNode(VBtn, {
                                  variant: "text",
                                  size: "small",
                                  onClick: promptDelete,
                                  color: "error",
                                  disabled: isCreatingNew.value || selectedTemplate.value === "base" || !selectedTemplate.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.delete")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["disabled"]),
                                createVNode(VDivider, {
                                  vertical: "",
                                  class: "mx-1"
                                }),
                                createVNode(VBtn, {
                                  variant: "text",
                                  size: "small",
                                  onClick: saveTemplate,
                                  loading: saveLoading.value,
                                  color: "primary",
                                  disabled: isCreatingNew.value && !editingName.value || !isCreatingNew.value && !selectedTemplate.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.save")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["loading", "disabled"])
                              ])
                            ]),
                            _: 1
                          }),
                          createBaseVNode("div", _hoisted_3$2, [
                            createVNode(unref(VueMonacoEditor), {
                              value: templateContent.value,
                              "onUpdate:value": _cache[2] || (_cache[2] = ($event) => templateContent.value = $event),
                              theme: editorTheme.value,
                              language: "html",
                              options: editorOptions,
                              style: { "height": "100%" }
                            }, null, 8, ["value", "theme"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "6",
                        class: "d-flex flex-column"
                      }, {
                        default: withCtx(() => [
                          createVNode(VToolbar, {
                            density: "compact",
                            color: "surface-variant"
                          }, {
                            default: withCtx(() => [
                              createVNode(VToolbarTitle, { class: "text-subtitle-2" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.livePreview")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VSpacer),
                              createVNode(VBtn, {
                                variant: "text",
                                size: "small",
                                onClick: refreshPreview,
                                loading: previewLoading.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.refreshPreview")), 1)
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ]),
                            _: 1
                          }),
                          createBaseVNode("div", _hoisted_4$2, [
                            createBaseVNode("iframe", {
                              ref_key: "previewFrame",
                              ref: previewFrame,
                              srcdoc: previewContent.value,
                              style: { "width": "100%", "height": "100%", "border": "none", "zoom": "0.6" }
                            }, null, 8, _hoisted_5$2)
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardActions, { class: "px-6 py-4" }, {
                default: withCtx(() => [
                  createVNode(VRow, {
                    "no-gutters": "",
                    class: "align-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_6$1, [
                            createVNode(VIcon, {
                              size: "16",
                              class: "mr-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-information")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" " + toDisplayString(unref(tm)("t2iTemplateEditor.syntaxHint")), 1)
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "auto" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            variant: "text",
                            onClick: closeDialog
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(t)("core.common.cancel")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: promptApplyAndClose,
                            loading: saveLoading.value,
                            disabled: isCreatingNew.value || !selectedTemplate.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.saveAndApply")), 1)
                            ]),
                            _: 1
                          }, 8, ["loading", "disabled"])
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
          createVNode(VDialog, {
            modelValue: resetDialog.value,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => resetDialog.value = $event),
            "max-width": "400px"
          }, {
            default: withCtx(() => [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.confirmReset")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.confirmResetMessage")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        text: "",
                        onClick: _cache[3] || (_cache[3] = ($event) => resetDialog.value = false)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("core.common.cancel")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "warning",
                        onClick: confirmReset,
                        loading: resetLoading.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.confirmResetButton")), 1)
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
            modelValue: deleteDialog.value,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => deleteDialog.value = $event),
            "max-width": "400px"
          }, {
            default: withCtx(() => [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.confirmDelete")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.confirmDeleteMessage", { name: selectedTemplate.value })), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        text: "",
                        onClick: _cache[5] || (_cache[5] = ($event) => deleteDialog.value = false)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("core.common.cancel")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "error",
                        onClick: confirmDelete,
                        loading: saveLoading.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.confirmDeleteButton")), 1)
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
            modelValue: applyAndCloseDialog.value,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => applyAndCloseDialog.value = $event),
            "max-width": "500px"
          }, {
            default: withCtx(() => [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.confirmAction")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(tm)("t2iTemplateEditor.confirmApplyMessage", { name: selectedTemplate.value })), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        text: "",
                        onClick: _cache[7] || (_cache[7] = ($event) => applyAndCloseDialog.value = false)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("core.common.cancel")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: confirmApplyAndClose,
                        loading: saveLoading.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("core.common.confirm")), 1)
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
          }, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
};
const T2ITemplateEditor = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a6151f76"]]);
const _hoisted_1$1 = { class: "w-100" };
const _hoisted_2$1 = {
  key: 8,
  class: "d-flex align-center gap-2"
};
const _hoisted_3$1 = {
  key: 9,
  class: "checkbox-group d-flex flex-wrap"
};
const _hoisted_4$1 = {
  key: 12,
  class: "editor-container"
};
const _hoisted_5$1 = {
  key: 14,
  class: "d-flex align-center gap-3"
};
const _sfc_main$1 = {
  __name: "ConfigItemRenderer",
  props: {
    modelValue: {
      type: [String, Number, Boolean, Array, Object],
      default: null
    },
    itemMeta: {
      type: Object,
      default: null
    },
    pluginName: {
      type: String,
      default: ""
    },
    configKey: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    },
    showFullscreenBtn: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "get-embedding-dim", "open-fullscreen"],
  setup(__props, { emit }) {
    const numericTemp = ref(null);
    const { t } = useI18n();
    const { getRaw } = useModuleI18n("features/config-metadata");
    function emitUpdate(val) {
      emit("update:modelValue", val);
    }
    function toNumber(val) {
      const n = parseFloat(val);
      return isNaN(n) ? 0 : n;
    }
    function getLabel(itemMeta, index, option) {
      const labels = getTranslatedLabels(itemMeta);
      return labels ? labels[index] : option;
    }
    function getTranslatedLabels(itemMeta) {
      if (!(itemMeta == null ? void 0 : itemMeta.labels)) return null;
      if (typeof itemMeta.labels === "string") {
        const translatedLabels = getRaw(itemMeta.labels);
        if (Array.isArray(translatedLabels)) {
          return translatedLabels;
        }
      }
      if (Array.isArray(itemMeta.labels)) {
        return itemMeta.labels;
      }
      return null;
    }
    function getSelectItems(itemMeta) {
      const labels = getTranslatedLabels(itemMeta);
      if (labels && itemMeta.options) {
        return itemMeta.options.map((value, index) => ({
          title: labels[index] || value,
          value
        }));
      }
      return itemMeta.options || [];
    }
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        ((_a = __props.itemMeta) == null ? void 0 : _a._special) === "select_provider" ? (openBlock(), createBlock(ProviderSelector, {
          key: 0,
          "model-value": __props.modelValue,
          "onUpdate:modelValue": emitUpdate,
          "provider-type": "chat_completion"
        }, null, 8, ["model-value"])) : ((_b = __props.itemMeta) == null ? void 0 : _b._special) === "select_providers" ? (openBlock(), createBlock(ProviderSelector, {
          key: 1,
          "model-value": __props.modelValue,
          "onUpdate:modelValue": emitUpdate,
          "provider-type": "chat_completion",
          multiple: true
        }, null, 8, ["model-value"])) : ((_c = __props.itemMeta) == null ? void 0 : _c._special) === "provider_pool" ? (openBlock(), createBlock(ProviderSelector, {
          key: 2,
          "model-value": __props.modelValue,
          "onUpdate:modelValue": emitUpdate,
          "provider-type": "chat_completion",
          "button-text": unref(t)("core.shared.providerSelector.selectProviderPool")
        }, null, 8, ["model-value", "button-text"])) : ((_d = __props.itemMeta) == null ? void 0 : _d._special) === "select_persona" ? (openBlock(), createBlock(PersonaSelector, {
          key: 3,
          "model-value": __props.modelValue,
          "onUpdate:modelValue": emitUpdate
        }, null, 8, ["model-value"])) : ((_e = __props.itemMeta) == null ? void 0 : _e._special) === "persona_pool" ? (openBlock(), createBlock(PersonaSelector, {
          key: 4,
          "model-value": __props.modelValue,
          "onUpdate:modelValue": emitUpdate,
          "button-text": unref(t)("core.shared.personaSelector.selectPersonaPool")
        }, null, 8, ["model-value", "button-text"])) : ((_f = __props.itemMeta) == null ? void 0 : _f._special) === "select_knowledgebase" ? (openBlock(), createBlock(KnowledgeBaseSelector, {
          key: 5,
          "model-value": __props.modelValue,
          "onUpdate:modelValue": emitUpdate
        }, null, 8, ["model-value"])) : ((_g = __props.itemMeta) == null ? void 0 : _g._special) === "select_plugin_set" ? (openBlock(), createBlock(PluginSetSelector, {
          key: 6,
          "model-value": __props.modelValue,
          "onUpdate:modelValue": emitUpdate
        }, null, 8, ["model-value"])) : ((_h = __props.itemMeta) == null ? void 0 : _h._special) === "t2i_template" ? (openBlock(), createBlock(T2ITemplateEditor, { key: 7 })) : ((_i = __props.itemMeta) == null ? void 0 : _i._special) === "get_embedding_dim" ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createVNode(VTextField, {
            "model-value": __props.modelValue,
            "onUpdate:modelValue": emitUpdate,
            density: "compact",
            variant: "outlined",
            class: "config-field",
            type: "number",
            "hide-details": ""
          }, null, 8, ["model-value"]),
          createVNode(VBtn, {
            color: "primary",
            variant: "tonal",
            size: "small",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("get-embedding-dim")),
            loading: __props.loading,
            class: "ml-2"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("core.common.autoDetect")), 1)
            ]),
            _: 1
          }, 8, ["loading"])
        ])) : ((_j = __props.itemMeta) == null ? void 0 : _j.type) === "list" && ((_k = __props.itemMeta) == null ? void 0 : _k.options) && ((_l = __props.itemMeta) == null ? void 0 : _l.render_type) === "checkbox" ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.itemMeta.options, (option, optionIndex) => {
            return openBlock(), createBlock(VCheckbox, {
              key: optionIndex,
              "model-value": __props.modelValue,
              "onUpdate:modelValue": emitUpdate,
              label: getLabel(__props.itemMeta, optionIndex, option),
              value: option,
              class: "config-checkbox",
              color: "primary",
              density: "compact",
              "hide-details": ""
            }, null, 8, ["model-value", "label", "value"]);
          }), 128))
        ])) : ((_m = __props.itemMeta) == null ? void 0 : _m.type) === "list" && ((_n = __props.itemMeta) == null ? void 0 : _n.options) ? (openBlock(), createBlock(VSelect, {
          key: 10,
          "model-value": __props.modelValue,
          "onUpdate:modelValue": emitUpdate,
          items: getSelectItems(__props.itemMeta),
          "item-title": "title",
          "item-value": "value",
          disabled: (_o = __props.itemMeta) == null ? void 0 : _o.readonly,
          density: "compact",
          variant: "outlined",
          class: "config-field",
          "hide-details": "",
          chips: "",
          multiple: ""
        }, null, 8, ["model-value", "items", "disabled"])) : ((_p = __props.itemMeta) == null ? void 0 : _p.options) ? (openBlock(), createBlock(VSelect, {
          key: 11,
          "model-value": __props.modelValue,
          "onUpdate:modelValue": emitUpdate,
          items: getSelectItems(__props.itemMeta),
          disabled: (_q = __props.itemMeta) == null ? void 0 : _q.readonly,
          density: "compact",
          variant: "outlined",
          class: "config-field",
          "hide-details": ""
        }, null, 8, ["model-value", "items", "disabled"])) : ((_r = __props.itemMeta) == null ? void 0 : _r.editor_mode) ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
          createVNode(unref(VueMonacoEditor), {
            theme: ((_s = __props.itemMeta) == null ? void 0 : _s.editor_theme) || "vs-light",
            language: ((_t = __props.itemMeta) == null ? void 0 : _t.editor_language) || "json",
            style: { "min-height": "100px", "flex-grow": "1", "border": "1px solid rgba(0, 0, 0, 0.1)" },
            value: __props.modelValue,
            "onUpdate:value": emitUpdate
          }, null, 8, ["theme", "language", "value"]),
          __props.showFullscreenBtn ? (openBlock(), createBlock(VBtn, {
            key: 0,
            icon: "",
            size: "small",
            variant: "text",
            color: "primary",
            class: "editor-fullscreen-btn",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("open-fullscreen")),
            title: unref(t)("core.common.editor.fullscreen")
          }, {
            default: withCtx(() => [
              createVNode(VIcon, null, {
                default: withCtx(() => [
                  createTextVNode("mdi-fullscreen")
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : createCommentVNode("", true)
        ])) : ((_u = __props.itemMeta) == null ? void 0 : _u.type) === "string" ? (openBlock(), createBlock(VTextField, {
          key: 13,
          "model-value": __props.modelValue,
          "onUpdate:modelValue": emitUpdate,
          density: "compact",
          variant: "outlined",
          class: "config-field",
          "hide-details": ""
        }, null, 8, ["model-value"])) : ((_v = __props.itemMeta) == null ? void 0 : _v.type) === "int" || ((_w = __props.itemMeta) == null ? void 0 : _w.type) === "float" ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
          ((_x = __props.itemMeta) == null ? void 0 : _x.slider) ? (openBlock(), createBlock(VSlider, {
            key: 0,
            "model-value": toNumber(numericTemp.value ?? __props.modelValue),
            "onUpdate:modelValue": _cache[2] || (_cache[2] = (val) => {
              numericTemp.value = val;
              emitUpdate(toNumber(val));
            }),
            onEnd: _cache[3] || (_cache[3] = ($event) => numericTemp.value = null),
            min: ((_z = (_y = __props.itemMeta) == null ? void 0 : _y.slider) == null ? void 0 : _z.min) ?? 0,
            max: ((_B = (_A = __props.itemMeta) == null ? void 0 : _A.slider) == null ? void 0 : _B.max) ?? 100,
            step: ((_D = (_C = __props.itemMeta) == null ? void 0 : _C.slider) == null ? void 0 : _D.step) ?? 1,
            color: "primary",
            density: "compact",
            "hide-details": "",
            style: { "flex": "1" }
          }, null, 8, ["model-value", "min", "max", "step"])) : createCommentVNode("", true),
          createVNode(VTextField, {
            "model-value": numericTemp.value ?? __props.modelValue,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = (val) => numericTemp.value = val),
            onBlur: _cache[5] || (_cache[5] = () => {
              if (numericTemp.value != null) {
                emitUpdate(toNumber(numericTemp.value));
              }
              numericTemp.value = null;
            }),
            density: "compact",
            variant: "outlined",
            class: "config-field",
            type: "number",
            "hide-details": "",
            style: { "flex": "1" }
          }, null, 8, ["model-value"])
        ])) : ((_E = __props.itemMeta) == null ? void 0 : _E.type) === "text" ? (openBlock(), createBlock(VTextarea, {
          key: 15,
          "model-value": __props.modelValue,
          "onUpdate:modelValue": emitUpdate,
          variant: "outlined",
          rows: "3",
          class: "config-field",
          "hide-details": ""
        }, null, 8, ["model-value"])) : ((_F = __props.itemMeta) == null ? void 0 : _F.type) === "bool" ? (openBlock(), createBlock(VSwitch, {
          key: 16,
          "model-value": __props.modelValue,
          "onUpdate:modelValue": emitUpdate,
          color: "primary",
          inset: "",
          density: "compact",
          "hide-details": ""
        }, null, 8, ["model-value"])) : ((_G = __props.itemMeta) == null ? void 0 : _G.type) === "file" ? (openBlock(), createBlock(FileConfigItem, {
          key: 17,
          "model-value": __props.modelValue,
          "item-meta": __props.itemMeta,
          "plugin-name": __props.pluginName,
          "config-key": __props.configKey,
          "onUpdate:modelValue": emitUpdate,
          class: "config-field"
        }, null, 8, ["model-value", "item-meta", "plugin-name", "config-key"])) : ((_H = __props.itemMeta) == null ? void 0 : _H.type) === "list" ? (openBlock(), createBlock(ListConfigItem, {
          key: 18,
          "model-value": __props.modelValue,
          "onUpdate:modelValue": emitUpdate,
          class: "config-field"
        }, null, 8, ["model-value"])) : ((_I = __props.itemMeta) == null ? void 0 : _I.type) === "dict" ? (openBlock(), createBlock(ObjectEditor, {
          key: 19,
          "model-value": __props.modelValue,
          "item-meta": __props.itemMeta,
          "onUpdate:modelValue": emitUpdate,
          class: "config-field"
        }, null, 8, ["model-value", "item-meta"])) : (openBlock(), createBlock(VTextField, {
          key: 20,
          "model-value": __props.modelValue,
          "onUpdate:modelValue": emitUpdate,
          density: "compact",
          variant: "outlined",
          class: "config-field",
          "hide-details": ""
        }, null, 8, ["model-value"]))
      ]);
    };
  }
};
const ConfigItemRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d25f7fb8"]]);
const _hoisted_1 = { class: "template-list-editor" };
const _hoisted_2 = { class: "top-bar d-flex align-center justify-end mb-3" };
const _hoisted_3 = { class: "d-flex align-center ga-2" };
const _hoisted_4 = { class: "d-flex flex-column" };
const _hoisted_5 = { class: "d-flex align-center ga-1" };
const _hoisted_6 = {
  key: 0,
  class: "px-4 py-2"
};
const _hoisted_7 = {
  key: 1,
  class: "template-entry-body"
};
const _hoisted_8 = {
  key: 0,
  class: "nested-container mx-4"
};
const _hoisted_9 = { class: "config-section mb-2" };
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { class: "property-key" };
const _hoisted_12 = { key: 1 };
const _sfc_main = {
  __name: "TemplateListEditor",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    templates: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    const { tm, getRaw } = useModuleI18n("features/config-metadata");
    const expandedEntries = ref({});
    const safeText = (val, fallback) => val && typeof val === "string" ? val : fallback;
    const addButtonText = computed(() => safeText(t("core.common.templateList.addEntry"), "添加条目"));
    const emptyHintText = computed(() => safeText(t("core.common.templateList.empty"), "暂无条目，请先选择模板并添加。"));
    const defaultValueMap = {
      int: 0,
      float: 0,
      bool: false,
      string: "",
      text: "",
      list: [],
      object: {},
      template_list: []
    };
    const templateOptions = computed(() => {
      return Object.entries(props.templates || {}).map(([value, meta]) => ({
        label: (meta == null ? void 0 : meta.name) || value,
        value,
        hint: (meta == null ? void 0 : meta.hint) || (meta == null ? void 0 : meta.description) || ""
      }));
    });
    function templateLabel(key) {
      var _a, _b;
      if (!key) return t("core.common.templateList.unknownTemplate") || "未指定模板";
      return translateIfKey(((_b = (_a = props.templates) == null ? void 0 : _a[key]) == null ? void 0 : _b.name) || key);
    }
    function translateIfKey(value) {
      if (!value || typeof value !== "string") return value;
      return getRaw(value) ? tm(value) : value;
    }
    function buildDefaults(itemsMeta = {}) {
      const result = {};
      for (const [k, meta] of Object.entries(itemsMeta)) {
        if (!meta || !meta.type) continue;
        const fallback = Object.prototype.hasOwnProperty.call(meta, "default") ? meta.default : defaultValueMap[meta.type];
        if (meta.type === "object") {
          result[k] = buildDefaults(meta.items || {});
        } else {
          result[k] = fallback;
        }
      }
      return result;
    }
    function applyDefaults(target, itemsMeta = {}) {
      let changed = false;
      for (const [k, meta] of Object.entries(itemsMeta)) {
        if (!meta || !meta.type) continue;
        const hasDefault = Object.prototype.hasOwnProperty.call(meta, "default");
        const fallback = hasDefault ? meta.default : defaultValueMap[meta.type];
        if (meta.type === "object") {
          if (!target[k] || typeof target[k] !== "object") {
            target[k] = buildDefaults(meta.items || {});
            changed = true;
          } else {
            if (applyDefaults(target[k], meta.items || {})) {
              changed = true;
            }
          }
        } else if (!(k in target)) {
          target[k] = fallback;
          changed = true;
        }
      }
      return changed;
    }
    function ensureEntryDefaults() {
      if (!Array.isArray(props.modelValue)) return;
      let totalChanged = false;
      const nextValue = props.modelValue.map((entry, idx) => {
        const template = getTemplate(entry);
        if (!template || !template.items) return entry;
        const newEntry = JSON.parse(JSON.stringify(entry));
        let entryChanged = applyDefaults(newEntry, template.items);
        if (!Object.prototype.hasOwnProperty.call(newEntry, "__template_key")) {
          newEntry.__template_key = "";
          entryChanged = true;
        }
        if (!(idx in expandedEntries.value)) {
          expandedEntries.value[idx] = false;
        }
        if (entryChanged) {
          totalChanged = true;
        }
        return newEntry;
      });
      if (totalChanged) {
        emit("update:modelValue", nextValue);
      }
    }
    watch(
      () => props.modelValue,
      () => ensureEntryDefaults(),
      { immediate: true, deep: true }
    );
    function addEntry(templateKey) {
      var _a;
      if (!templateKey) return;
      const template = (_a = props.templates) == null ? void 0 : _a[templateKey];
      if (!template) return;
      const newEntry = {
        __template_key: templateKey,
        ...buildDefaults(template.items || {})
      };
      emit("update:modelValue", [...props.modelValue || [], newEntry]);
      expandedEntries.value[props.modelValue.length] = true;
    }
    function removeEntry(index) {
      const next = [...props.modelValue || []];
      next.splice(index, 1);
      const rebuilt = {};
      next.forEach((_, idx) => {
        const sourceIdx = idx >= index ? idx + 1 : idx;
        rebuilt[idx] = expandedEntries.value[sourceIdx] ?? false;
      });
      expandedEntries.value = rebuilt;
      emit("update:modelValue", next);
    }
    function toggleEntry(index) {
      expandedEntries.value[index] = !expandedEntries.value[index];
    }
    function getTemplate(entry) {
      var _a;
      if (!entry) return null;
      const key = entry.__template_key;
      if (!key) return null;
      return ((_a = props.templates) == null ? void 0 : _a[key]) || null;
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
    function shouldShowItem(itemMeta, entry) {
      if (!(itemMeta == null ? void 0 : itemMeta.condition)) {
        return true;
      }
      for (const [conditionKey, expectedValue] of Object.entries(itemMeta.condition)) {
        const actualValue = getValueBySelector(entry, conditionKey);
        if (actualValue !== expectedValue) {
          return false;
        }
      }
      return true;
    }
    function hasVisibleItemsAfter(entries, currentIndex, entry) {
      for (let i = currentIndex + 1; i < entries.length; i++) {
        const [k, meta] = entries[i];
        if (!(meta == null ? void 0 : meta.invisible) && shouldShowItem(meta, entry)) {
          return true;
        }
      }
      return false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(VMenu, { transition: "fade-transition" }, {
            activator: withCtx(({ props: menuProps }) => [
              createVNode(VBtn, mergeProps({
                color: "primary",
                variant: "tonal",
                size: "small"
              }, menuProps, { "prepend-icon": "mdi-plus" }), {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(addButtonText.value), 1)
                ]),
                _: 2
              }, 1040)
            ]),
            default: withCtx(() => [
              createVNode(VList, { density: "compact" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(templateOptions.value, (option) => {
                    return openBlock(), createBlock(VListItem, {
                      key: option.value,
                      onClick: ($event) => addEntry(option.value)
                    }, {
                      default: withCtx(() => [
                        createVNode(VListItemTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(translateIfKey(option.label)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        option.hint ? (openBlock(), createBlock(VListItemSubtitle, { key: 0 }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(translateIfKey(option.hint)), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["onClick"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        !__props.modelValue || __props.modelValue.length === 0 ? (openBlock(), createBlock(VAlert, {
          key: 0,
          type: "info",
          variant: "tonal",
          density: "compact",
          class: "mb-3"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(emptyHintText.value), 1)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.modelValue, (entry, entryIndex) => {
          return openBlock(), createBlock(VCard, {
            key: entryIndex,
            variant: "outlined",
            class: "mb-3"
          }, {
            default: withCtx(() => [
              createVNode(VCardTitle, {
                class: "d-flex align-center justify-space-between entry-header",
                onClick: ($event) => toggleEntry(entryIndex)
              }, {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    createBaseVNode("div", _hoisted_3, [
                      createVNode(VBtn, {
                        icon: "",
                        size: "small",
                        variant: "text",
                        title: expandedEntries.value[entryIndex] ? unref(t)("core.common.collapse") || "收起" : unref(t)("core.common.expand") || "展开"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(expandedEntries.value[entryIndex] ? "mdi-chevron-down" : "mdi-chevron-right"), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["title"]),
                      createBaseVNode("div", _hoisted_4, [
                        createVNode(VListItemTitle, { class: "property-name" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(templateLabel(entry.__template_key)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        ((_a = getTemplate(entry)) == null ? void 0 : _a.hint) || ((_b = getTemplate(entry)) == null ? void 0 : _b.description) ? (openBlock(), createBlock(VListItemSubtitle, {
                          key: 0,
                          class: "property-hint"
                        }, {
                          default: withCtx(() => {
                            var _a2, _b2;
                            return [
                              createTextVNode(toDisplayString(translateIfKey(((_a2 = getTemplate(entry)) == null ? void 0 : _a2.hint) || ((_b2 = getTemplate(entry)) == null ? void 0 : _b2.description))), 1)
                            ];
                          }),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_5, [
                      createVNode(VBtn, {
                        icon: "",
                        size: "small",
                        variant: "text",
                        color: "error",
                        onClick: withModifiers(($event) => removeEntry(entryIndex), ["stop"])
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-delete")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])
                  ];
                }),
                _: 2
              }, 1032, ["onClick"]),
              createVNode(VExpandTransition, null, {
                default: withCtx(() => [
                  withDirectives(createVNode(VCardText, { class: "px-0 py-1" }, {
                    default: withCtx(() => [
                      !getTemplate(entry) ? (openBlock(), createElementBlock("div", _hoisted_6, [
                        createVNode(VAlert, {
                          type: "error",
                          variant: "tonal",
                          density: "compact"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)("core.common.templateList.missingTemplate") || "找不到对应模板，请删除后重新添加。"), 1)
                          ]),
                          _: 1
                        })
                      ])) : (openBlock(), createElementBlock("div", _hoisted_7, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(getTemplate(entry).items, (itemMeta, itemKey, metaIndex) => {
                          return openBlock(), createElementBlock(Fragment, { key: itemKey }, [
                            (itemMeta == null ? void 0 : itemMeta.type) === "object" && !(itemMeta == null ? void 0 : itemMeta.invisible) && shouldShowItem(itemMeta, entry) ? (openBlock(), createElementBlock("div", _hoisted_8, [
                              createBaseVNode("div", _hoisted_9, [
                                createVNode(VListItemTitle, { class: "config-title" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(translateIfKey(itemMeta == null ? void 0 : itemMeta.description) || itemKey), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                (itemMeta == null ? void 0 : itemMeta.hint) ? (openBlock(), createBlock(VListItemSubtitle, {
                                  key: 0,
                                  class: "config-hint"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(translateIfKey(itemMeta.hint)), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              (openBlock(true), createElementBlock(Fragment, null, renderList(itemMeta.items, (childMeta, childKey, childIndex) => {
                                return openBlock(), createElementBlock("div", { key: childKey }, [
                                  !(childMeta == null ? void 0 : childMeta.invisible) && shouldShowItem(childMeta, entry) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                    createVNode(VRow, { class: "config-row" }, {
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
                                                    createTextVNode(toDisplayString(translateIfKey(childMeta == null ? void 0 : childMeta.description) || childKey), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VListItemSubtitle, { class: "property-hint" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(translateIfKey(childMeta == null ? void 0 : childMeta.hint)), 1)
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
                                            createVNode(ConfigItemRenderer, {
                                              modelValue: entry[itemKey][childKey],
                                              "onUpdate:modelValue": ($event) => entry[itemKey][childKey] = $event,
                                              "item-meta": childMeta
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "item-meta"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    hasVisibleItemsAfter(Object.entries(itemMeta.items), childIndex, entry) ? (openBlock(), createBlock(VDivider, {
                                      key: 0,
                                      class: "config-divider"
                                    })) : createCommentVNode("", true)
                                  ], 64)) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ])) : !(itemMeta == null ? void 0 : itemMeta.invisible) && shouldShowItem(itemMeta, entry) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                              createVNode(VRow, { class: "config-row" }, {
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
                                              (itemMeta == null ? void 0 : itemMeta.description) ? (openBlock(), createElementBlock("span", _hoisted_10, [
                                                createTextVNode(toDisplayString(translateIfKey(itemMeta == null ? void 0 : itemMeta.description)) + " ", 1),
                                                createBaseVNode("span", _hoisted_11, "(" + toDisplayString(itemKey) + ")", 1)
                                              ])) : (openBlock(), createElementBlock("span", _hoisted_12, toDisplayString(itemKey), 1))
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VListItemSubtitle, { class: "property-hint" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(translateIfKey(itemMeta == null ? void 0 : itemMeta.hint)), 1)
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
                                      createVNode(ConfigItemRenderer, {
                                        modelValue: entry[itemKey],
                                        "onUpdate:modelValue": ($event) => entry[itemKey] = $event,
                                        "item-meta": itemMeta
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "item-meta"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              hasVisibleItemsAfter(Object.entries(getTemplate(entry).items), metaIndex, entry) ? (openBlock(), createBlock(VDivider, {
                                key: 0,
                                class: "config-divider"
                              })) : createCommentVNode("", true)
                            ], 64)) : createCommentVNode("", true)
                          ], 64);
                        }), 128))
                      ]))
                    ]),
                    _: 2
                  }, 1536), [
                    [vShow, expandedEntries.value[entryIndex]]
                  ])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024);
        }), 128))
      ]);
    };
  }
};
const TemplateListEditor = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-01bfe8a5"]]);
export {
  ConfigItemRenderer as C,
  TemplateListEditor as T,
  useToast as u
};
