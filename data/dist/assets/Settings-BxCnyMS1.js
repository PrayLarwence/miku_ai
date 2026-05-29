import { _ as _export_sfc, a5 as useI18n, L as ref, M as onMounted, o as openBlock, c as createElementBlock, b as createVNode, w as withCtx, d as createTextVNode, t as toDisplayString, $ as unref, e as VBtn, s as VCard, a6 as VCardTitle, a as createBaseVNode, v as VCardText, ab as VRow, ad as VCol, af as VList, a0 as withModifiers, F as Fragment, r as renderList, h as createBlock, ag as VListItem, ah as VListItemTitle, l as VIcon, a9 as VCardActions, V as VSpacer, ai as VDialog, H as computed, J as watch, p as VTabs, n as VTab, A as VWindow, q as VWindowItem, k as VAlert, aj as VProgressCircular, y as VProgressLinear, i as createCommentVNode, b8 as VFileInput, g as VChip, aB as VListItemSubtitle, j as VTextField, an as withKeys, b9 as WaitingForRestart, B as axios, ap as pushScopeId, aq as popScopeId, u as useModuleI18n, ba as useToastStore, b2 as VExpansionPanel, b3 as VExpansionPanelTitle, b4 as VExpansionPanelText, b1 as VExpansionPanels, bb as VListSubheader, aK as VForm, x as VDivider, bc as useAuthStore } from "./index-sVuaKD1b.js";
import { m as md5Exports } from "./md5-DL9f5tFY.js";
import { P as ProxySelector } from "./ProxySelector-DePDr8NF.js";
import { g as getSidebarCustomization, r as resolveSidebarItems, c as clearSidebarCustomization, s as setSidebarCustomization, a as sidebarItem } from "./sidebarCustomization-HzoSJOcE.js";
import { u as useConfirmDialog, a as askForConfirmation } from "./confirmDialog-ByM573Zf.js";
import { r as restartAstrBot } from "./restartAstrBot-UkSl4Ttp.js";
const _hoisted_1$3 = { style: { "margin-top": "16px" } };
const _hoisted_2$3 = { class: "text-body-2 mb-4" };
const _hoisted_3$3 = { class: "mb-2 font-weight-medium" };
const _hoisted_4$2 = { class: "mb-2 font-weight-medium" };
const _sfc_main$3 = {
  __name: "SidebarCustomizer",
  setup(__props) {
    const { t } = useI18n();
    const dialog = ref(false);
    const mainItems = ref([]);
    const moreItems = ref([]);
    const draggedItem = ref(null);
    function initializeItems() {
      const customization = getSidebarCustomization();
      const { mainItems: resolvedMain, moreItems: resolvedMore } = resolveSidebarItems(
        sidebarItem,
        customization
      );
      mainItems.value = resolvedMain;
      moreItems.value = resolvedMore;
    }
    function openDialog() {
      initializeItems();
      dialog.value = true;
    }
    function handleDragStart(event, listType, index) {
      draggedItem.value = {
        type: listType,
        index,
        item: listType === "main" ? mainItems.value[index] : moreItems.value[index]
      };
      event.dataTransfer.effectAllowed = "move";
    }
    function handleDrop(event, targetListType, targetIndex) {
      event.preventDefault();
      if (!draggedItem.value) return;
      const sourceListType = draggedItem.value.type;
      const sourceIndex = draggedItem.value.index;
      const item = draggedItem.value.item;
      if (sourceListType === "main") {
        mainItems.value.splice(sourceIndex, 1);
      } else {
        moreItems.value.splice(sourceIndex, 1);
      }
      if (targetListType === "main") {
        mainItems.value.splice(targetIndex, 0, item);
      } else {
        moreItems.value.splice(targetIndex, 0, item);
      }
      draggedItem.value = null;
    }
    function handleDropToList(event, targetListType) {
      event.preventDefault();
      if (!draggedItem.value) return;
      const sourceListType = draggedItem.value.type;
      const sourceIndex = draggedItem.value.index;
      const item = draggedItem.value.item;
      if (sourceListType === "main") {
        mainItems.value.splice(sourceIndex, 1);
      } else {
        moreItems.value.splice(sourceIndex, 1);
      }
      if (targetListType === "main") {
        mainItems.value.push(item);
      } else {
        moreItems.value.push(item);
      }
      draggedItem.value = null;
    }
    function moveToMore(index) {
      const item = mainItems.value.splice(index, 1)[0];
      moreItems.value.push(item);
    }
    function moveToMain(index) {
      const item = moreItems.value.splice(index, 1)[0];
      mainItems.value.push(item);
    }
    function saveCustomization() {
      const config = {
        mainItems: mainItems.value.map((item) => item.title),
        moreItems: moreItems.value.map((item) => item.title)
      };
      setSidebarCustomization(config);
      window.dispatchEvent(new CustomEvent("sidebar-customization-changed"));
      dialog.value = false;
    }
    function resetToDefault() {
      clearSidebarCustomization();
      initializeItems();
      window.dispatchEvent(new CustomEvent("sidebar-customization-changed"));
    }
    onMounted(() => {
      initializeItems();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(VBtn, {
          color: "primary",
          variant: "outlined",
          size: "small",
          onClick: openDialog,
          style: { "margin-bottom": "8px" }
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(t)("features.settings.sidebar.customize.title")), 1)
          ]),
          _: 1
        }),
        createVNode(VDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => dialog.value = $event),
          "max-width": "700px"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "d-flex justify-space-between align-center" }, {
                  default: withCtx(() => [
                    createBaseVNode("span", null, toDisplayString(unref(t)("features.settings.sidebar.customize.title")), 1),
                    createVNode(VBtn, {
                      icon: "mdi-close",
                      variant: "text",
                      onClick: _cache[0] || (_cache[0] = ($event) => dialog.value = false)
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createBaseVNode("p", _hoisted_2$3, toDisplayString(unref(t)("features.settings.sidebar.customize.subtitle")), 1),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_3$3, toDisplayString(unref(t)("features.settings.sidebar.customize.mainItems")), 1),
                            createVNode(VList, {
                              density: "compact",
                              class: "custom-list",
                              onDragover: _cache[2] || (_cache[2] = withModifiers(() => {
                              }, ["prevent"])),
                              onDrop: _cache[3] || (_cache[3] = ($event) => handleDropToList($event, "main"))
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(mainItems.value, (item, index) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: item.title,
                                    class: "mb-1 draggable-item",
                                    draggable: "true",
                                    onDragstart: ($event) => handleDragStart($event, "main", index),
                                    onDragover: _cache[1] || (_cache[1] = withModifiers(() => {
                                    }, ["prevent"])),
                                    onDrop: withModifiers(($event) => handleDrop($event, "main", index), ["stop"])
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: item.icon,
                                        size: "small",
                                        class: "mr-2"
                                      }, null, 8, ["icon"])
                                    ]),
                                    append: withCtx(() => [
                                      createVNode(VBtn, {
                                        icon: "mdi-arrow-right",
                                        variant: "text",
                                        size: "x-small",
                                        onClick: ($event) => moveToMore(index)
                                      }, null, 8, ["onClick"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(t)(item.title)), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onDragstart", "onDrop"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_4$2, toDisplayString(unref(t)("features.settings.sidebar.customize.moreItems")), 1),
                            createVNode(VList, {
                              density: "compact",
                              class: "custom-list",
                              onDragover: _cache[5] || (_cache[5] = withModifiers(() => {
                              }, ["prevent"])),
                              onDrop: _cache[6] || (_cache[6] = ($event) => handleDropToList($event, "more"))
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(moreItems.value, (item, index) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: item.title,
                                    class: "mb-1 draggable-item",
                                    draggable: "true",
                                    onDragstart: ($event) => handleDragStart($event, "more", index),
                                    onDragover: _cache[4] || (_cache[4] = withModifiers(() => {
                                    }, ["prevent"])),
                                    onDrop: withModifiers(($event) => handleDrop($event, "more", index), ["stop"])
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: item.icon,
                                        size: "small",
                                        class: "mr-2"
                                      }, null, 8, ["icon"])
                                    ]),
                                    append: withCtx(() => [
                                      createVNode(VBtn, {
                                        icon: "mdi-arrow-left",
                                        variant: "text",
                                        size: "x-small",
                                        onClick: ($event) => moveToMain(index)
                                      }, null, 8, ["onClick"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(t)(item.title)), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onDragstart", "onDrop"]);
                                }), 128))
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
                createVNode(VCardActions, null, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      color: "error",
                      variant: "text",
                      onClick: resetToDefault
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("features.settings.sidebar.customize.reset")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      color: "primary",
                      onClick: saveCustomization
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("core.actions.save")), 1)
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
const SidebarCustomizer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9b8034f9"]]);
const _withScopeId = (n) => (pushScopeId("data-v-ef632898"), n = n(), popScopeId(), n);
const _hoisted_1$2 = {
  key: 0,
  class: "text-center py-8"
};
const _hoisted_2$2 = { class: "mb-4" };
const _hoisted_3$2 = { class: "mb-4 text-grey" };
const _hoisted_4$1 = {
  key: 1,
  class: "text-center py-8"
};
const _hoisted_5$1 = { class: "mb-4" };
const _hoisted_6$1 = { class: "text-grey" };
const _hoisted_7$1 = {
  key: 2,
  class: "text-center py-8"
};
const _hoisted_8$1 = { class: "mb-4" };
const _hoisted_9$1 = { class: "mb-4" };
const _hoisted_10$1 = {
  key: 3,
  class: "text-center py-8"
};
const _hoisted_11$1 = { class: "mb-4" };
const _hoisted_12$1 = {
  key: 0,
  class: "py-4"
};
const _hoisted_13$1 = { class: "d-flex justify-center" };
const _hoisted_14$1 = {
  key: 1,
  class: "text-center py-8"
};
const _hoisted_15 = { class: "mb-4" };
const _hoisted_16 = { class: "text-grey mb-2" };
const _hoisted_17 = { class: "text-grey-darken-1 mb-4" };
const _hoisted_18 = {
  key: 2,
  class: "py-4"
};
const _hoisted_19 = { class: "confirm-message" };
const _hoisted_20 = { class: "text-h6 mb-2" };
const _hoisted_21 = { class: "mb-2" };
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_23 = {
  key: 0,
  class: "mb-2"
};
const _hoisted_24 = {
  class: "mt-3",
  style: { "white-space": "pre-line" }
};
const _hoisted_25 = { class: "d-flex flex-wrap ga-2" };
const _hoisted_26 = {
  class: "d-flex justify-center align-center mt-4",
  style: { "gap": "16px" }
};
const _hoisted_27 = {
  key: 3,
  class: "text-center py-8"
};
const _hoisted_28 = { class: "mb-4" };
const _hoisted_29 = { class: "text-grey" };
const _hoisted_30 = {
  key: 4,
  class: "text-center py-8"
};
const _hoisted_31 = { class: "mb-4" };
const _hoisted_32 = {
  key: 5,
  class: "text-center py-8"
};
const _hoisted_33 = { class: "mb-4" };
const _hoisted_34 = {
  key: 0,
  class: "text-center py-8"
};
const _hoisted_35 = {
  key: 1,
  class: "text-center py-8"
};
const _hoisted_36 = { class: "text-grey" };
const _hoisted_37 = { class: "d-flex justify-center mt-4" };
const _hoisted_38 = { class: "text-caption text-grey text-center mt-4" };
const _hoisted_39 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-grey" }, ".zip", -1));
const _hoisted_40 = { class: "text-caption text-grey mt-1" };
const CONCURRENT_UPLOADS = 5;
const _sfc_main$2 = {
  __name: "BackupDialog",
  setup(__props, { expose: __expose }) {
    const { t } = useI18n();
    const confirmDialog = useConfirmDialog();
    const isOpen = ref(false);
    const activeTab = ref("export");
    const wfr = ref(null);
    const exportStatus = ref("idle");
    const exportTaskId = ref(null);
    const exportProgress = ref({ current: 0, total: 100, message: "" });
    const exportResult = ref(null);
    const exportError = ref("");
    const importStatus = ref("idle");
    const importFile = ref(null);
    const importTaskId = ref(null);
    const importProgress = ref({ current: 0, total: 100, message: "" });
    const importError = ref("");
    const uploadedFilename = ref("");
    const checkResult = ref(null);
    const uploadId = ref("");
    const chunkSize = ref(0);
    const uploadProgress = ref({
      uploaded: 0,
      total: 0,
      percent: 0,
      message: ""
    });
    const loadingList = ref(false);
    const backupList = ref([]);
    const renameDialogOpen = ref(false);
    const renameOldFilename = ref("");
    const renameNewName = ref("");
    const renameLoading = ref(false);
    const renameError = ref("");
    const isProcessing = computed(() => {
      return exportStatus.value === "processing" || importStatus.value === "processing" || importStatus.value === "uploading";
    });
    const versionAlertType = computed(() => {
      var _a;
      const status = (_a = checkResult.value) == null ? void 0 : _a.version_status;
      if (status === "major_diff") return "error";
      if (status === "minor_diff") return "warning";
      return "info";
    });
    const versionAlertIcon = computed(() => {
      var _a;
      const status = (_a = checkResult.value) == null ? void 0 : _a.version_status;
      if (status === "major_diff") return "mdi-close-circle";
      if (status === "minor_diff") return "mdi-alert";
      return "mdi-check-circle";
    });
    const versionAlertTitle = computed(() => {
      var _a;
      const status = (_a = checkResult.value) == null ? void 0 : _a.version_status;
      if (status === "major_diff") return t("features.settings.backup.import.version.majorDiffTitle");
      if (status === "minor_diff") return t("features.settings.backup.import.version.minorDiffTitle");
      return t("features.settings.backup.import.version.matchTitle");
    });
    const versionAlertMessage = computed(() => {
      var _a;
      const status = (_a = checkResult.value) == null ? void 0 : _a.version_status;
      if (status === "major_diff") return t("features.settings.backup.import.version.majorDiffMessage");
      if (status === "minor_diff") return t("features.settings.backup.import.version.minorDiffMessage");
      return t("features.settings.backup.import.version.matchMessage");
    });
    watch(isOpen, (newVal) => {
      if (newVal) {
        loadBackupList();
      } else {
        resetAll();
      }
    });
    watch(activeTab, (newVal) => {
      if (newVal === "list") {
        loadBackupList();
      }
    });
    const loadBackupList = async () => {
      loadingList.value = true;
      try {
        const response = await axios.get("/api/backup/list");
        if (response.data.status === "ok") {
          backupList.value = response.data.data.items || [];
        }
      } catch (error) {
        console.error("Failed to load backup list:", error);
      } finally {
        loadingList.value = false;
      }
    };
    const startExport = async () => {
      exportStatus.value = "processing";
      exportProgress.value = { current: 0, total: 100, message: "" };
      try {
        const response = await axios.post("/api/backup/export");
        if (response.data.status === "ok") {
          exportTaskId.value = response.data.data.task_id;
          pollExportProgress();
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        exportStatus.value = "failed";
        exportError.value = error.message || "Export failed";
      }
    };
    const pollExportProgress = async () => {
      if (!exportTaskId.value) return;
      try {
        const response = await axios.get("/api/backup/progress", {
          params: { task_id: exportTaskId.value }
        });
        if (response.data.status === "ok") {
          const data = response.data.data;
          if (data.status === "processing" && data.progress) {
            exportProgress.value = {
              current: data.progress.current || 0,
              total: data.progress.total || 100,
              message: data.progress.message || ""
            };
            setTimeout(pollExportProgress, 1e3);
          } else if (data.status === "completed") {
            exportStatus.value = "completed";
            exportResult.value = data.result;
            loadBackupList();
          } else if (data.status === "failed") {
            exportStatus.value = "failed";
            exportError.value = data.error || "Export failed";
          } else {
            setTimeout(pollExportProgress, 1e3);
          }
        }
      } catch (error) {
        exportStatus.value = "failed";
        exportError.value = error.message || "Failed to get export progress";
      }
    };
    const resetExport = () => {
      exportStatus.value = "idle";
      exportTaskId.value = null;
      exportProgress.value = { current: 0, total: 100, message: "" };
      exportResult.value = null;
      exportError.value = "";
    };
    const uploadChunksInParallel = async (file, totalChunks, currentUploadId, currentChunkSize) => {
      let completedBytes = 0;
      const chunkSizes = [];
      for (let i = 0; i < totalChunks; i++) {
        const start = i * currentChunkSize;
        const end = Math.min(start + currentChunkSize, file.size);
        chunkSizes[i] = end - start;
      }
      const uploadSingleChunk = async (chunkIndex) => {
        const start = chunkIndex * currentChunkSize;
        const end = Math.min(start + currentChunkSize, file.size);
        const chunk = file.slice(start, end);
        const formData = new FormData();
        formData.append("upload_id", currentUploadId);
        formData.append("chunk_index", chunkIndex.toString());
        formData.append("chunk", chunk);
        const response = await axios.post("/api/backup/upload/chunk", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        if (response.data.status !== "ok") {
          throw new Error(response.data.message);
        }
        completedBytes += chunkSizes[chunkIndex];
        uploadProgress.value.uploaded = completedBytes;
        uploadProgress.value.percent = Math.round(completedBytes / file.size * 100);
        return response;
      };
      const pendingChunks = Array.from({ length: totalChunks }, (_, i) => i);
      const activePromises = [];
      while (pendingChunks.length > 0 || activePromises.length > 0) {
        while (pendingChunks.length > 0 && activePromises.length < CONCURRENT_UPLOADS) {
          const chunkIndex = pendingChunks.shift();
          const promise = uploadSingleChunk(chunkIndex).then(() => {
            const idx = activePromises.indexOf(promise);
            if (idx > -1) activePromises.splice(idx, 1);
          });
          activePromises.push(promise);
        }
        if (activePromises.length > 0) {
          await Promise.race(activePromises);
        }
      }
    };
    const uploadAndCheck = async () => {
      var _a, _b;
      if (!importFile.value) return;
      importStatus.value = "uploading";
      const file = importFile.value;
      try {
        uploadProgress.value = {
          uploaded: 0,
          total: file.size,
          percent: 0,
          message: t("features.settings.backup.import.uploadInit")
        };
        const initResponse = await axios.post("/api/backup/upload/init", {
          filename: file.name,
          total_size: file.size
        });
        if (initResponse.data.status !== "ok") {
          throw new Error(initResponse.data.message);
        }
        uploadId.value = initResponse.data.data.upload_id;
        chunkSize.value = initResponse.data.data.chunk_size;
        const totalChunks = initResponse.data.data.total_chunks;
        uploadProgress.value.message = t("features.settings.backup.import.uploadingChunks");
        await uploadChunksInParallel(file, totalChunks, uploadId.value, chunkSize.value);
        uploadProgress.value.message = t("features.settings.backup.import.uploadComplete");
        const completeResponse = await axios.post("/api/backup/upload/complete", {
          upload_id: uploadId.value
        });
        if (completeResponse.data.status !== "ok") {
          throw new Error(completeResponse.data.message);
        }
        uploadedFilename.value = completeResponse.data.data.filename;
        uploadProgress.value.message = t("features.settings.backup.import.checking");
        const checkResponse = await axios.post("/api/backup/check", {
          filename: uploadedFilename.value
        });
        if (checkResponse.data.status !== "ok") {
          throw new Error(checkResponse.data.message);
        }
        checkResult.value = checkResponse.data.data;
        if (!checkResult.value.valid) {
          importStatus.value = "failed";
          importError.value = checkResult.value.error || t("features.settings.backup.import.invalidBackup");
          return;
        }
        importStatus.value = "confirm";
      } catch (error) {
        if (uploadId.value) {
          try {
            await axios.post("/api/backup/upload/abort", {
              upload_id: uploadId.value
            });
          } catch (abortError) {
            console.error("Failed to abort upload:", abortError);
          }
        }
        importStatus.value = "failed";
        importError.value = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message || "Upload failed";
      }
    };
    const confirmImport = async () => {
      var _a, _b;
      if (!uploadedFilename.value) return;
      importStatus.value = "processing";
      importProgress.value = { current: 0, total: 100, message: "" };
      try {
        const response = await axios.post("/api/backup/import", {
          filename: uploadedFilename.value,
          confirmed: true
        });
        if (response.data.status === "ok") {
          importTaskId.value = response.data.data.task_id;
          pollImportProgress();
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        importStatus.value = "failed";
        importError.value = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message || "Import failed";
      }
    };
    const pollImportProgress = async () => {
      if (!importTaskId.value) return;
      try {
        const response = await axios.get("/api/backup/progress", {
          params: { task_id: importTaskId.value }
        });
        if (response.data.status === "ok") {
          const data = response.data.data;
          if (data.status === "processing" && data.progress) {
            importProgress.value = {
              current: data.progress.current || 0,
              total: data.progress.total || 100,
              message: data.progress.message || ""
            };
            setTimeout(pollImportProgress, 1e3);
          } else if (data.status === "completed") {
            importStatus.value = "completed";
          } else if (data.status === "failed") {
            importStatus.value = "failed";
            importError.value = data.error || "Import failed";
          } else {
            setTimeout(pollImportProgress, 1e3);
          }
        }
      } catch (error) {
        importStatus.value = "failed";
        importError.value = error.message || "Failed to get import progress";
      }
    };
    const resetImport = async () => {
      if (uploadId.value && importStatus.value === "uploading") {
        try {
          await axios.post("/api/backup/upload/abort", {
            upload_id: uploadId.value
          });
        } catch (error) {
          console.error("Failed to abort upload:", error);
        }
      }
      importStatus.value = "idle";
      importFile.value = null;
      importTaskId.value = null;
      importProgress.value = { current: 0, total: 100, message: "" };
      importError.value = "";
      uploadedFilename.value = "";
      checkResult.value = null;
      uploadId.value = "";
      chunkSize.value = 0;
      uploadProgress.value = { uploaded: 0, total: 0, percent: 0, message: "" };
    };
    const downloadBackup = (filename) => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert(t("core.common.unauthorized"));
        return;
      }
      const downloadUrl = `/api/backup/download?filename=${encodeURIComponent(filename)}&token=${encodeURIComponent(token)}`;
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = filename;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    const restoreFromList = async (filename) => {
      var _a, _b;
      uploadedFilename.value = filename;
      try {
        const checkResponse = await axios.post("/api/backup/check", {
          filename
        });
        if (checkResponse.data.status !== "ok") {
          throw new Error(checkResponse.data.message);
        }
        checkResult.value = checkResponse.data.data;
        if (!checkResult.value.valid) {
          alert(checkResult.value.error || t("features.settings.backup.import.invalidBackup"));
          return;
        }
        activeTab.value = "import";
        importStatus.value = "confirm";
      } catch (error) {
        alert(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message || "Check failed");
      }
    };
    const deleteBackup = async (filename) => {
      if (!await askForConfirmation(t("features.settings.backup.list.confirmDelete"), confirmDialog)) return;
      try {
        const response = await axios.post("/api/backup/delete", { filename });
        if (response.data.status === "ok") {
          loadBackupList();
        } else {
          alert(response.data.message || "Delete failed");
        }
      } catch (error) {
        alert(error.message || "Delete failed");
      }
    };
    const openRenameDialog = (filename) => {
      renameOldFilename.value = filename;
      renameNewName.value = filename.replace(/\.zip$/i, "");
      renameError.value = "";
      renameDialogOpen.value = true;
    };
    const closeRenameDialog = () => {
      renameDialogOpen.value = false;
      renameOldFilename.value = "";
      renameNewName.value = "";
      renameError.value = "";
    };
    const renameValidationRule = (value) => {
      if (!value) return t("features.settings.backup.list.renameRequired");
      if (/[\\/:*?"<>|]/.test(value)) {
        return t("features.settings.backup.list.renameInvalidChars");
      }
      if (value.includes("..")) {
        return t("features.settings.backup.list.renameInvalidChars");
      }
      return true;
    };
    const confirmRename = async () => {
      var _a, _b;
      if (!renameNewName.value || renameError.value) return;
      const validationResult = renameValidationRule(renameNewName.value);
      if (validationResult !== true) {
        renameError.value = validationResult;
        return;
      }
      renameLoading.value = true;
      renameError.value = "";
      try {
        const response = await axios.post("/api/backup/rename", {
          filename: renameOldFilename.value,
          new_name: renameNewName.value
        });
        if (response.data.status === "ok") {
          closeRenameDialog();
          loadBackupList();
        } else {
          renameError.value = response.data.message || t("features.settings.backup.list.renameFailed");
        }
      } catch (error) {
        renameError.value = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message || t("features.settings.backup.list.renameFailed");
      } finally {
        renameLoading.value = false;
      }
    };
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    const formatDate = (timestamp) => {
      return new Date(timestamp * 1e3).toLocaleString();
    };
    const formatISODate = (isoString) => {
      if (!isoString) return "";
      try {
        return new Date(isoString).toLocaleString();
      } catch {
        return isoString;
      }
    };
    const restartAstrBot$1 = async () => {
      try {
        await restartAstrBot(wfr.value);
      } catch (error) {
        console.error(error);
      }
    };
    const resetAll = async () => {
      resetExport();
      await resetImport();
      activeTab.value = "export";
    };
    const handleClose = () => {
      if (isProcessing.value) return;
      isOpen.value = false;
    };
    const open = () => {
      isOpen.value = true;
    };
    __expose({ open });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(VDialog, {
          modelValue: isOpen.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isOpen.value = $event),
          persistent: "",
          "max-width": "700",
          scrollable: ""
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "d-flex align-center" }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { class: "mr-2" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-backup-restore")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" " + toDisplayString(unref(t)("features.settings.backup.dialog.title")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, { class: "pa-6" }, {
                  default: withCtx(() => [
                    createVNode(VTabs, {
                      modelValue: activeTab.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeTab.value = $event),
                      color: "primary",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTab, { value: "export" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { class: "mr-2" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-export")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" " + toDisplayString(unref(t)("features.settings.backup.tabs.export")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VTab, { value: "import" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { class: "mr-2" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-import")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" " + toDisplayString(unref(t)("features.settings.backup.tabs.import")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VTab, { value: "list" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { class: "mr-2" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-format-list-bulleted")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" " + toDisplayString(unref(t)("features.settings.backup.tabs.list")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    createVNode(VWindow, {
                      modelValue: activeTab.value,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => activeTab.value = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(VWindowItem, { value: "export" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              exportStatus.value === "idle" ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
                                createVNode(VIcon, {
                                  size: "64",
                                  color: "primary",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-cloud-upload")
                                  ]),
                                  _: 1
                                }),
                                createBaseVNode("h3", _hoisted_2$2, toDisplayString(unref(t)("features.settings.backup.export.title")), 1),
                                createBaseVNode("p", _hoisted_3$2, toDisplayString(unref(t)("features.settings.backup.export.description")), 1),
                                createVNode(VAlert, {
                                  type: "info",
                                  variant: "tonal",
                                  class: "mb-4 text-left"
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-information")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createTextVNode(" " + toDisplayString(unref(t)("features.settings.backup.export.includes")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "primary",
                                  size: "large",
                                  onClick: startExport,
                                  loading: exportStatus.value === "processing"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { class: "mr-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-export")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" " + toDisplayString(unref(t)("features.settings.backup.export.button")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["loading"])
                              ])) : exportStatus.value === "processing" ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
                                createVNode(VProgressCircular, {
                                  indeterminate: "",
                                  color: "primary",
                                  size: "64",
                                  class: "mb-4"
                                }),
                                createBaseVNode("h3", _hoisted_5$1, toDisplayString(unref(t)("features.settings.backup.export.processing")), 1),
                                createBaseVNode("p", _hoisted_6$1, toDisplayString(exportProgress.value.message || unref(t)("features.settings.backup.export.wait")), 1),
                                createVNode(VProgressLinear, {
                                  "model-value": exportProgress.value.current,
                                  max: exportProgress.value.total,
                                  class: "mt-4",
                                  color: "primary"
                                }, null, 8, ["model-value", "max"])
                              ])) : exportStatus.value === "completed" ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
                                createVNode(VIcon, {
                                  size: "64",
                                  color: "success",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-check-circle")
                                  ]),
                                  _: 1
                                }),
                                createBaseVNode("h3", _hoisted_8$1, toDisplayString(unref(t)("features.settings.backup.export.completed")), 1),
                                createBaseVNode("p", _hoisted_9$1, toDisplayString((_a = exportResult.value) == null ? void 0 : _a.filename), 1),
                                createVNode(VBtn, {
                                  color: "primary",
                                  onClick: _cache[1] || (_cache[1] = ($event) => {
                                    var _a2;
                                    return downloadBackup((_a2 = exportResult.value) == null ? void 0 : _a2.filename);
                                  }),
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { class: "mr-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-download")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" " + toDisplayString(unref(t)("features.settings.backup.export.download")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "grey",
                                  variant: "text",
                                  onClick: resetExport
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(t)("features.settings.backup.export.another")), 1)
                                  ]),
                                  _: 1
                                })
                              ])) : exportStatus.value === "failed" ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                                createVNode(VIcon, {
                                  size: "64",
                                  color: "error",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-alert-circle")
                                  ]),
                                  _: 1
                                }),
                                createBaseVNode("h3", _hoisted_11$1, toDisplayString(unref(t)("features.settings.backup.export.failed")), 1),
                                createVNode(VAlert, {
                                  type: "error",
                                  variant: "tonal",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(exportError.value), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "primary",
                                  onClick: resetExport
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(t)("features.settings.backup.export.retry")), 1)
                                  ]),
                                  _: 1
                                })
                              ])) : createCommentVNode("", true)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(VWindowItem, { value: "import" }, {
                          default: withCtx(() => {
                            var _a, _b, _c, _d;
                            return [
                              importStatus.value === "idle" ? (openBlock(), createElementBlock("div", _hoisted_12$1, [
                                createVNode(VAlert, {
                                  type: "warning",
                                  variant: "tonal",
                                  class: "mb-4"
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-alert")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createTextVNode(" " + toDisplayString(unref(t)("features.settings.backup.import.warning")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VFileInput, {
                                  modelValue: importFile.value,
                                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => importFile.value = $event),
                                  label: unref(t)("features.settings.backup.import.selectFile"),
                                  accept: ".zip",
                                  "prepend-icon": "mdi-file-upload",
                                  "show-size": "",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "label"]),
                                createBaseVNode("div", _hoisted_13$1, [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    size: "large",
                                    onClick: uploadAndCheck,
                                    disabled: !importFile.value,
                                    loading: importStatus.value === "uploading"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { class: "mr-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-upload")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" " + toDisplayString(unref(t)("features.settings.backup.import.uploadAndCheck")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["disabled", "loading"])
                                ])
                              ])) : importStatus.value === "uploading" ? (openBlock(), createElementBlock("div", _hoisted_14$1, [
                                createVNode(VIcon, {
                                  size: "64",
                                  color: "primary",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-cloud-upload")
                                  ]),
                                  _: 1
                                }),
                                createBaseVNode("h3", _hoisted_15, toDisplayString(unref(t)("features.settings.backup.import.uploading")), 1),
                                createBaseVNode("p", _hoisted_16, toDisplayString(uploadProgress.value.message || unref(t)("features.settings.backup.import.uploadWait")), 1),
                                createBaseVNode("p", _hoisted_17, toDisplayString(formatFileSize(uploadProgress.value.uploaded)) + " / " + toDisplayString(formatFileSize(uploadProgress.value.total)) + " (" + toDisplayString(uploadProgress.value.percent) + "%) ", 1),
                                createVNode(VProgressLinear, {
                                  "model-value": uploadProgress.value.percent,
                                  max: 100,
                                  class: "mt-2",
                                  color: "primary",
                                  height: "8",
                                  rounded: ""
                                }, null, 8, ["model-value"])
                              ])) : importStatus.value === "confirm" ? (openBlock(), createElementBlock("div", _hoisted_18, [
                                createVNode(VAlert, {
                                  type: versionAlertType.value,
                                  variant: "tonal",
                                  class: "mb-4"
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(versionAlertIcon.value), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  default: withCtx(() => {
                                    var _a2, _b2, _c2, _d2, _e;
                                    return [
                                      createBaseVNode("div", _hoisted_19, [
                                        createBaseVNode("div", _hoisted_20, toDisplayString(versionAlertTitle.value), 1),
                                        createBaseVNode("div", _hoisted_21, [
                                          createBaseVNode("strong", null, toDisplayString(unref(t)("features.settings.backup.import.version.backupVersion")) + ":", 1),
                                          createTextVNode(" " + toDisplayString((_a2 = checkResult.value) == null ? void 0 : _a2.backup_version), 1),
                                          _hoisted_22,
                                          createBaseVNode("strong", null, toDisplayString(unref(t)("features.settings.backup.import.version.currentVersion")) + ":", 1),
                                          createTextVNode(" " + toDisplayString((_b2 = checkResult.value) == null ? void 0 : _b2.current_version), 1)
                                        ]),
                                        ((_c2 = checkResult.value) == null ? void 0 : _c2.backup_time) && ((_d2 = checkResult.value) == null ? void 0 : _d2.backup_time) !== "未知" ? (openBlock(), createElementBlock("div", _hoisted_23, [
                                          createBaseVNode("strong", null, toDisplayString(unref(t)("features.settings.backup.import.version.backupTime")) + ":", 1),
                                          createTextVNode(" " + toDisplayString(formatISODate((_e = checkResult.value) == null ? void 0 : _e.backup_time)), 1)
                                        ])) : createCommentVNode("", true),
                                        createBaseVNode("div", _hoisted_24, toDisplayString(versionAlertMessage.value), 1)
                                      ])
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["type"]),
                                ((_a = checkResult.value) == null ? void 0 : _a.backup_summary) ? (openBlock(), createBlock(VCard, {
                                  key: 0,
                                  variant: "outlined",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "text-subtitle-1" }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { class: "mr-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-package-variant")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" " + toDisplayString(unref(t)("features.settings.backup.import.backupContents")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => {
                                        var _a2;
                                        return [
                                          createBaseVNode("div", _hoisted_25, [
                                            ((_a2 = checkResult.value.backup_summary.tables) == null ? void 0 : _a2.length) ? (openBlock(), createBlock(VChip, {
                                              key: 0,
                                              size: "small",
                                              color: "primary",
                                              variant: "tonal",
                                              ripple: false,
                                              class: "non-interactive-chip"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(checkResult.value.backup_summary.tables.length) + " " + toDisplayString(unref(t)("features.settings.backup.import.tables")), 1)
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            checkResult.value.backup_summary.has_knowledge_bases ? (openBlock(), createBlock(VChip, {
                                              key: 1,
                                              size: "small",
                                              color: "success",
                                              variant: "tonal",
                                              ripple: false,
                                              class: "non-interactive-chip"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(t)("features.settings.backup.import.knowledgeBases")), 1)
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            checkResult.value.backup_summary.has_config ? (openBlock(), createBlock(VChip, {
                                              key: 2,
                                              size: "small",
                                              color: "info",
                                              variant: "tonal",
                                              ripple: false,
                                              class: "non-interactive-chip"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(t)("features.settings.backup.import.configFiles")), 1)
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            (openBlock(true), createElementBlock(Fragment, null, renderList(checkResult.value.backup_summary.directories || [], (dir) => {
                                              return openBlock(), createBlock(VChip, {
                                                key: dir,
                                                size: "small",
                                                color: "warning",
                                                variant: "tonal",
                                                ripple: false,
                                                class: "non-interactive-chip"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(dir), 1)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ])
                                        ];
                                      }),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                ((_c = (_b = checkResult.value) == null ? void 0 : _b.warnings) == null ? void 0 : _c.length) ? (openBlock(), createBlock(VAlert, {
                                  key: 1,
                                  type: "warning",
                                  variant: "tonal",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(checkResult.value.warnings, (warning, idx) => {
                                      return openBlock(), createElementBlock("div", { key: idx }, toDisplayString(warning), 1);
                                    }), 128))
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createBaseVNode("div", _hoisted_26, [
                                  createVNode(VBtn, {
                                    color: "grey-darken-1",
                                    variant: "outlined",
                                    size: "large",
                                    onClick: resetImport
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { class: "mr-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-close")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" " + toDisplayString(unref(t)("core.common.cancel")), 1)
                                    ]),
                                    _: 1
                                  }),
                                  ((_d = checkResult.value) == null ? void 0 : _d.can_import) ? (openBlock(), createBlock(VBtn, {
                                    key: 0,
                                    color: "error",
                                    size: "large",
                                    variant: "flat",
                                    onClick: confirmImport
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { class: "mr-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-alert")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" " + toDisplayString(unref(t)("features.settings.backup.import.confirmImport")), 1)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ])
                              ])) : importStatus.value === "processing" ? (openBlock(), createElementBlock("div", _hoisted_27, [
                                createVNode(VProgressCircular, {
                                  indeterminate: "",
                                  color: "primary",
                                  size: "64",
                                  class: "mb-4"
                                }),
                                createBaseVNode("h3", _hoisted_28, toDisplayString(unref(t)("features.settings.backup.import.processing")), 1),
                                createBaseVNode("p", _hoisted_29, toDisplayString(importProgress.value.message || unref(t)("features.settings.backup.import.wait")), 1),
                                createVNode(VProgressLinear, {
                                  "model-value": importProgress.value.current,
                                  max: importProgress.value.total,
                                  class: "mt-4",
                                  color: "primary"
                                }, null, 8, ["model-value", "max"])
                              ])) : importStatus.value === "completed" ? (openBlock(), createElementBlock("div", _hoisted_30, [
                                createVNode(VIcon, {
                                  size: "64",
                                  color: "success",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-check-circle")
                                  ]),
                                  _: 1
                                }),
                                createBaseVNode("h3", _hoisted_31, toDisplayString(unref(t)("features.settings.backup.import.completed")), 1),
                                createVNode(VAlert, {
                                  type: "info",
                                  variant: "tonal",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(t)("features.settings.backup.import.restartRequired")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "primary",
                                  onClick: restartAstrBot$1,
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { class: "mr-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-restart")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" " + toDisplayString(unref(t)("features.settings.backup.import.restartNow")), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "grey",
                                  variant: "text",
                                  onClick: resetImport
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(t)("core.common.close")), 1)
                                  ]),
                                  _: 1
                                })
                              ])) : importStatus.value === "failed" ? (openBlock(), createElementBlock("div", _hoisted_32, [
                                createVNode(VIcon, {
                                  size: "64",
                                  color: "error",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-alert-circle")
                                  ]),
                                  _: 1
                                }),
                                createBaseVNode("h3", _hoisted_33, toDisplayString(unref(t)("features.settings.backup.import.failed")), 1),
                                createVNode(VAlert, {
                                  type: "error",
                                  variant: "tonal",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(importError.value), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "primary",
                                  onClick: resetImport
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(t)("features.settings.backup.import.retry")), 1)
                                  ]),
                                  _: 1
                                })
                              ])) : createCommentVNode("", true)
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(VWindowItem, { value: "list" }, {
                          default: withCtx(() => [
                            loadingList.value ? (openBlock(), createElementBlock("div", _hoisted_34, [
                              createVNode(VProgressCircular, {
                                indeterminate: "",
                                color: "primary"
                              })
                            ])) : backupList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_35, [
                              createVNode(VIcon, {
                                size: "64",
                                color: "grey",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-folder-open-outline")
                                ]),
                                _: 1
                              }),
                              createBaseVNode("p", _hoisted_36, toDisplayString(unref(t)("features.settings.backup.list.empty")), 1)
                            ])) : (openBlock(), createBlock(VList, {
                              key: 2,
                              lines: "two"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(backupList.value, (backup) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: backup.filename
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        color: backup.type === "uploaded" ? "orange" : "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(backup.type === "uploaded" ? "mdi-upload" : "mdi-zip-box"), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    append: withCtx(() => [
                                      createVNode(VBtn, {
                                        icon: "mdi-restore",
                                        variant: "text",
                                        size: "small",
                                        color: "success",
                                        title: unref(t)("features.settings.backup.list.restore"),
                                        onClick: ($event) => restoreFromList(backup.filename)
                                      }, null, 8, ["title", "onClick"]),
                                      createVNode(VBtn, {
                                        icon: "mdi-pencil",
                                        variant: "text",
                                        size: "small",
                                        title: unref(t)("features.settings.backup.list.rename"),
                                        onClick: ($event) => openRenameDialog(backup.filename)
                                      }, null, 8, ["title", "onClick"]),
                                      createVNode(VBtn, {
                                        icon: "mdi-download",
                                        variant: "text",
                                        size: "small",
                                        onClick: ($event) => downloadBackup(backup.filename)
                                      }, null, 8, ["onClick"]),
                                      createVNode(VBtn, {
                                        icon: "mdi-delete",
                                        variant: "text",
                                        size: "small",
                                        color: "error",
                                        onClick: ($event) => deleteBackup(backup.filename)
                                      }, null, 8, ["onClick"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(backup.filename), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(formatFileSize(backup.size)) + " · " + toDisplayString(formatDate(backup.created_at)) + " ", 1),
                                          createVNode(VChip, {
                                            size: "x-small",
                                            color: "primary",
                                            variant: "tonal",
                                            class: "ml-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" v" + toDisplayString(backup.astrbot_version), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          backup.type === "uploaded" ? (openBlock(), createBlock(VChip, {
                                            key: 0,
                                            size: "x-small",
                                            color: "orange",
                                            variant: "tonal",
                                            class: "ml-1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(t)("features.settings.backup.list.uploaded")), 1)
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })),
                            createBaseVNode("div", _hoisted_37, [
                              createVNode(VBtn, {
                                color: "primary",
                                variant: "text",
                                onClick: loadBackupList
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { class: "mr-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-refresh")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" " + toDisplayString(unref(t)("features.settings.backup.list.refresh")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            createBaseVNode("p", _hoisted_38, [
                              createVNode(VIcon, {
                                size: "small",
                                class: "mr-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-information-outline")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" " + toDisplayString(unref(t)("features.settings.backup.list.ftpHint")), 1)
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, { class: "px-6 py-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      color: "grey",
                      variant: "text",
                      onClick: handleClose,
                      disabled: isProcessing.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("core.common.close")), 1)
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
        }, 8, ["modelValue"]),
        createVNode(VDialog, {
          modelValue: renameDialogOpen.value,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => renameDialogOpen.value = $event),
          "max-width": "450",
          persistent: ""
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, null, {
                  default: withCtx(() => [
                    createVNode(VIcon, { class: "mr-2" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-pencil")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" " + toDisplayString(unref(t)("features.settings.backup.list.renameTitle")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createVNode(VTextField, {
                      modelValue: renameNewName.value,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => renameNewName.value = $event),
                      label: unref(t)("features.settings.backup.list.newName"),
                      rules: [renameValidationRule],
                      "error-messages": renameError.value,
                      variant: "outlined",
                      density: "comfortable",
                      autofocus: "",
                      onKeyup: withKeys(confirmRename, ["enter"])
                    }, {
                      "append-inner": withCtx(() => [
                        _hoisted_39
                      ]),
                      _: 1
                    }, 8, ["modelValue", "label", "rules", "error-messages", "onKeyup"]),
                    createBaseVNode("p", _hoisted_40, toDisplayString(unref(t)("features.settings.backup.list.renameHint")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, null, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      color: "grey",
                      variant: "text",
                      onClick: closeRenameDialog
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("core.common.cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      variant: "flat",
                      onClick: confirmRename,
                      loading: renameLoading.value,
                      disabled: !renameNewName.value || !!renameError.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("core.common.confirm")), 1)
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
        }, 8, ["modelValue"]),
        createVNode(WaitingForRestart, {
          ref_key: "wfr",
          ref: wfr
        }, null, 512)
      ], 64);
    };
  }
};
const BackupDialog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ef632898"]]);
const _hoisted_1$1 = { class: "storage-cleanup-panel" };
const _hoisted_2$1 = { class: "text-subtitle-1 font-weight-medium mb-1" };
const _hoisted_3$1 = { class: "text-body-2 text-medium-emphasis mb-4" };
const _hoisted_4 = { class: "d-flex align-center justify-space-between w-100 pr-4 ga-3" };
const _hoisted_5 = { class: "d-flex align-center ga-3" };
const _hoisted_6 = { class: "font-weight-medium" };
const _hoisted_7 = { class: "text-caption text-medium-emphasis" };
const _hoisted_8 = { class: "d-flex flex-wrap ga-2 mb-4" };
const _hoisted_9 = { class: "d-flex align-start justify-space-between ga-3" };
const _hoisted_10 = { class: "text-subtitle-1 font-weight-medium" };
const _hoisted_11 = { class: "text-body-2 text-medium-emphasis mt-1" };
const _hoisted_12 = { class: "text-h5 mt-4" };
const _hoisted_13 = { class: "text-caption text-medium-emphasis mt-1" };
const _hoisted_14 = { class: "text-caption text-medium-emphasis mt-2 storage-cleanup-path" };
const _sfc_main$1 = {
  __name: "StorageCleanupPanel",
  setup(__props) {
    const { tm } = useModuleI18n("features/settings");
    const toastStore = useToastStore();
    const confirmDialog = useConfirmDialog();
    const statusLoading = ref(false);
    const cleaningTarget = ref("");
    const storageStatus = ref({
      logs: {
        size_bytes: 0,
        file_count: 0,
        path: "",
        exists: false
      },
      cache: {
        size_bytes: 0,
        file_count: 0,
        path: "",
        exists: false
      },
      total_bytes: 0
    });
    const showToast = (message, color = "success") => {
      toastStore.add({
        message,
        color,
        timeout: 3e3
      });
    };
    const formatBytes = (bytes) => {
      const value = Number(bytes || 0);
      if (value <= 0) return "0 B";
      const units = ["B", "KB", "MB", "GB", "TB"];
      let size = value;
      let unitIndex = 0;
      while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex += 1;
      }
      const decimals = size >= 10 || unitIndex === 0 ? 0 : 1;
      return `${size.toFixed(decimals)} ${units[unitIndex]}`;
    };
    const storageCards = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return [
        {
          key: "cache",
          title: tm("system.cleanup.targets.cache.title"),
          subtitle: tm("system.cleanup.targets.cache.subtitle"),
          buttonText: tm("system.cleanup.targets.cache.button"),
          icon: "mdi-database-refresh-outline",
          color: "primary",
          sizeBytes: ((_a = storageStatus.value.cache) == null ? void 0 : _a.size_bytes) || 0,
          fileCount: ((_b = storageStatus.value.cache) == null ? void 0 : _b.file_count) || 0,
          path: ((_c = storageStatus.value.cache) == null ? void 0 : _c.path) || "-"
        },
        {
          key: "logs",
          title: tm("system.cleanup.targets.logs.title"),
          subtitle: tm("system.cleanup.targets.logs.subtitle"),
          buttonText: tm("system.cleanup.targets.logs.button"),
          icon: "mdi-file-document-outline",
          color: "warning",
          sizeBytes: ((_d = storageStatus.value.logs) == null ? void 0 : _d.size_bytes) || 0,
          fileCount: ((_e = storageStatus.value.logs) == null ? void 0 : _e.file_count) || 0,
          path: ((_f = storageStatus.value.logs) == null ? void 0 : _f.path) || "-"
        }
      ];
    });
    const loadStorageStatus = async () => {
      var _a, _b;
      statusLoading.value = true;
      try {
        const res = await axios.get("/api/stat/storage");
        if (res.data.status !== "ok") {
          showToast(res.data.message || tm("system.cleanup.messages.statusFailed"), "error");
          return;
        }
        storageStatus.value = res.data.data || storageStatus.value;
      } catch (error) {
        showToast(((_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || tm("system.cleanup.messages.statusFailed"), "error");
      } finally {
        statusLoading.value = false;
      }
    };
    const cleanupStorage = async (target) => {
      var _a, _b;
      const confirmed = await askForConfirmation(
        tm("system.cleanup.confirm", { target: tm(`system.cleanup.targetNames.${target}`) }),
        confirmDialog
      );
      if (!confirmed) return;
      cleaningTarget.value = target;
      try {
        const res = await axios.post("/api/stat/storage/cleanup", { target });
        if (res.data.status !== "ok") {
          showToast(res.data.message || tm("system.cleanup.messages.cleanupFailed"), "error");
          return;
        }
        const cleanupData = res.data.data || {};
        storageStatus.value = cleanupData.status || storageStatus.value;
        showToast(
          tm("system.cleanup.messages.cleanupSuccess", {
            size: formatBytes(cleanupData.removed_bytes || 0),
            count: cleanupData.processed_files || 0
          })
        );
      } catch (error) {
        showToast(((_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || tm("system.cleanup.messages.cleanupFailed"), "error");
      } finally {
        cleaningTarget.value = "";
      }
    };
    onMounted(() => {
      loadStorageStatus();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, toDisplayString(unref(tm)("system.cleanup.title")), 1),
        createBaseVNode("div", _hoisted_3$1, toDisplayString(unref(tm)("system.cleanup.subtitle")), 1),
        createVNode(VExpansionPanels, { variant: "accordion" }, {
          default: withCtx(() => [
            createVNode(VExpansionPanel, {
              elevation: "0",
              class: "border rounded-lg"
            }, {
              default: withCtx(() => [
                createVNode(VExpansionPanelTitle, { class: "py-4" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_4, [
                      createBaseVNode("div", _hoisted_5, [
                        createVNode(VIcon, { color: "warning" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-broom")
                          ]),
                          _: 1
                        }),
                        createBaseVNode("div", null, [
                          createBaseVNode("div", _hoisted_6, toDisplayString(unref(tm)("system.cleanup.panel.title")), 1),
                          createBaseVNode("div", _hoisted_7, toDisplayString(unref(tm)("system.cleanup.panel.subtitle", { size: formatBytes(storageStatus.value.total_bytes || 0) })), 1)
                        ])
                      ]),
                      createVNode(VChip, {
                        size: "small",
                        color: "warning",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(formatBytes(storageStatus.value.total_bytes || 0)), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(VExpansionPanelText, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_8, [
                      createVNode(VBtn, {
                        size: "small",
                        variant: "tonal",
                        color: "primary",
                        loading: statusLoading.value,
                        onClick: loadStorageStatus
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { class: "mr-2" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-refresh")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" " + toDisplayString(unref(tm)("system.cleanup.refresh")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode(VBtn, {
                        size: "small",
                        color: "warning",
                        loading: cleaningTarget.value === "all",
                        onClick: _cache[0] || (_cache[0] = ($event) => cleanupStorage("all"))
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { class: "mr-2" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-broom")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" " + toDisplayString(unref(tm)("system.cleanup.cleanAll")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    createVNode(VRow, { dense: "" }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(storageCards.value, (item) => {
                          return openBlock(), createBlock(VCol, {
                            key: item.key,
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                variant: "tonal",
                                class: "h-100"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_9, [
                                        createBaseVNode("div", null, [
                                          createBaseVNode("div", _hoisted_10, toDisplayString(item.title), 1),
                                          createBaseVNode("div", _hoisted_11, toDisplayString(item.subtitle), 1)
                                        ]),
                                        createVNode(VIcon, {
                                          color: item.color
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.icon), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      createBaseVNode("div", _hoisted_12, toDisplayString(formatBytes(item.sizeBytes)), 1),
                                      createBaseVNode("div", _hoisted_13, toDisplayString(unref(tm)("system.cleanup.fileCount", { count: item.fileCount })), 1),
                                      createBaseVNode("div", _hoisted_14, toDisplayString(item.path), 1),
                                      createVNode(VBtn, {
                                        class: "mt-4",
                                        size: "small",
                                        color: item.color,
                                        loading: cleaningTarget.value === item.key,
                                        onClick: ($event) => cleanupStorage(item.key)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { class: "mr-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-delete-sweep-outline")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" " + toDisplayString(item.buttonText), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color", "loading", "onClick"])
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
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
};
const StorageCleanupPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f6c7d7d8"]]);
const _hoisted_1 = { style: { "background-color": "var(--v-theme-surface, #fff)", "padding": "8px", "padding-left": "16px", "border-radius": "8px", "margin-bottom": "24px" } };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "d-flex flex-column align-center mb-6" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "logo-content" }, [
    /* @__PURE__ */ createBaseVNode("h2", { style: { "color": "rgb(var(--v-theme-primary))" } }, "修改账户"),
    /* @__PURE__ */ createBaseVNode("h4", { style: { "color": "rgba(var(--v-theme-on-surface), 0.72)" } }, "修改管理员用户名和密码")
  ])
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "text-caption text-medium-emphasis mt-2" }, " 默认用户名和密码均为 miku ", -1);
const _sfc_main = {
  __name: "Settings",
  setup(__props) {
    const { tm } = useModuleI18n("features/settings");
    useToastStore();
    const wfr = ref(null);
    const backupDialog = ref(null);
    const accountDialog = ref(false);
    const accountPassword = ref("");
    const accountNewPassword = ref("");
    const accountConfirmPassword = ref("");
    const accountNewUsername = ref("");
    const showAccountPassword = ref(false);
    const showAccountNewPassword = ref(false);
    const showAccountConfirmPassword = ref(false);
    const accountFormValid = ref(true);
    const accountEditStatus = ref({
      loading: false,
      success: false,
      error: false,
      message: ""
    });
    const accountEdit = () => {
      accountEditStatus.value.loading = true;
      accountEditStatus.value.error = false;
      accountEditStatus.value.success = false;
      const passwordHash = accountPassword.value ? md5Exports.md5(accountPassword.value) : "";
      const newPasswordHash = accountNewPassword.value ? md5Exports.md5(accountNewPassword.value) : "";
      const confirmPasswordHash = accountConfirmPassword.value ? md5Exports.md5(accountConfirmPassword.value) : "";
      axios.post("/api/auth/account/edit", {
        password: passwordHash,
        new_password: newPasswordHash,
        confirm_password: confirmPasswordHash,
        new_username: accountNewUsername.value ? accountNewUsername.value : localStorage.getItem("user")
      }).then((res) => {
        if (res.data.status == "error") {
          accountEditStatus.value.error = true;
          accountEditStatus.value.message = res.data.message;
          accountPassword.value = "";
          accountNewPassword.value = "";
          accountConfirmPassword.value = "";
          return;
        }
        accountEditStatus.value.success = true;
        accountEditStatus.value.message = res.data.message;
        setTimeout(() => {
          accountDialog.value = false;
          const authStore = useAuthStore();
          authStore.logout();
        }, 2e3);
      }).catch((err) => {
        console.log(err);
        accountEditStatus.value.error = true;
        accountEditStatus.value.message = typeof err === "string" ? err : "修改失败，请重试";
        accountPassword.value = "";
        accountNewPassword.value = "";
        accountConfirmPassword.value = "";
      }).finally(() => {
        accountEditStatus.value.loading = false;
      });
    };
    const restartAstrBot$1 = async () => {
      try {
        await restartAstrBot(wfr.value);
      } catch (error) {
        console.error(error);
      }
    };
    const openAccountDialog = () => {
      accountDialog.value = true;
    };
    const openBackupDialog = () => {
      if (backupDialog.value) {
        backupDialog.value.open();
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(VList, { lines: "two" }, {
            default: withCtx(() => [
              createVNode(VListSubheader, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(tm)("network.title")), 1)
                ]),
                _: 1
              }),
              createVNode(VListItem, null, {
                default: withCtx(() => [
                  createVNode(ProxySelector)
                ]),
                _: 1
              }),
              createVNode(VListSubheader, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(tm)("sidebar.title")), 1)
                ]),
                _: 1
              }),
              createVNode(VListItem, {
                subtitle: unref(tm)("sidebar.customize.subtitle"),
                title: unref(tm)("sidebar.customize.title")
              }, {
                default: withCtx(() => [
                  createVNode(SidebarCustomizer)
                ]),
                _: 1
              }, 8, ["subtitle", "title"]),
              createVNode(VListSubheader, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(tm)("system.title")), 1)
                ]),
                _: 1
              }),
              createVNode(VListItem, {
                subtitle: unref(tm)("system.backup.subtitle"),
                title: unref(tm)("system.backup.title")
              }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    style: { "margin-top": "16px" },
                    color: "primary",
                    onClick: openBackupDialog
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { class: "mr-2" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-backup-restore")
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString(unref(tm)("system.backup.button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["subtitle", "title"]),
              createVNode(VListItem, {
                subtitle: unref(tm)("system.account.subtitle"),
                title: unref(tm)("system.account.title")
              }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    style: { "margin-top": "16px" },
                    color: "primary",
                    onClick: openAccountDialog
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { class: "mr-2" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-account-edit")
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString(unref(tm)("system.account.button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["subtitle", "title"]),
              createVNode(VListItem, {
                subtitle: unref(tm)("system.restart.subtitle"),
                title: unref(tm)("system.restart.title")
              }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    style: { "margin-top": "16px" },
                    color: "error",
                    onClick: restartAstrBot$1
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(tm)("system.restart.button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["subtitle", "title"]),
              createVNode(VListItem, { class: "py-2" }, {
                default: withCtx(() => [
                  createVNode(StorageCleanupPanel)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createVNode(VDialog, {
          modelValue: accountDialog.value,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => accountDialog.value = $event),
          "max-width": _ctx.$vuetify.display.xs ? "90%" : "500"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardText, { class: "py-6" }, {
                  default: withCtx(() => [
                    _hoisted_2,
                    accountEditStatus.value.success ? (openBlock(), createBlock(VAlert, {
                      key: 0,
                      type: "success",
                      variant: "tonal",
                      border: "start",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(accountEditStatus.value.message), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    accountEditStatus.value.error ? (openBlock(), createBlock(VAlert, {
                      key: 1,
                      type: "error",
                      variant: "tonal",
                      border: "start",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(accountEditStatus.value.message), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(VForm, {
                      modelValue: accountFormValid.value,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => accountFormValid.value = $event),
                      onSubmit: withModifiers(accountEdit, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: accountPassword.value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => accountPassword.value = $event),
                          "append-inner-icon": showAccountPassword.value ? "mdi-eye-off" : "mdi-eye",
                          type: showAccountPassword.value ? "text" : "password",
                          label: "当前密码",
                          variant: "outlined",
                          required: "",
                          clearable: "",
                          "onClick:appendInner": _cache[1] || (_cache[1] = ($event) => showAccountPassword.value = !showAccountPassword.value),
                          "prepend-inner-icon": "mdi-lock-outline",
                          "hide-details": "auto",
                          class: "mb-4"
                        }, null, 8, ["modelValue", "append-inner-icon", "type"]),
                        createVNode(VTextField, {
                          modelValue: accountNewPassword.value,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => accountNewPassword.value = $event),
                          "append-inner-icon": showAccountNewPassword.value ? "mdi-eye-off" : "mdi-eye",
                          type: showAccountNewPassword.value ? "text" : "password",
                          label: "新密码（留空不修改）",
                          variant: "outlined",
                          clearable: "",
                          "onClick:appendInner": _cache[3] || (_cache[3] = ($event) => showAccountNewPassword.value = !showAccountNewPassword.value),
                          "prepend-inner-icon": "mdi-lock-plus-outline",
                          hint: "密码长度至少 8 位",
                          "persistent-hint": "",
                          class: "mb-4"
                        }, null, 8, ["modelValue", "append-inner-icon", "type"]),
                        createVNode(VTextField, {
                          modelValue: accountConfirmPassword.value,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => accountConfirmPassword.value = $event),
                          "append-inner-icon": showAccountConfirmPassword.value ? "mdi-eye-off" : "mdi-eye",
                          type: showAccountConfirmPassword.value ? "text" : "password",
                          label: "确认新密码",
                          variant: "outlined",
                          clearable: "",
                          "onClick:appendInner": _cache[5] || (_cache[5] = ($event) => showAccountConfirmPassword.value = !showAccountConfirmPassword.value),
                          "prepend-inner-icon": "mdi-lock-check-outline",
                          hint: "请再次输入新密码以确认",
                          "persistent-hint": "",
                          class: "mb-4"
                        }, null, 8, ["modelValue", "append-inner-icon", "type"]),
                        createVNode(VTextField, {
                          modelValue: accountNewUsername.value,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => accountNewUsername.value = $event),
                          label: "新用户名（留空不修改）",
                          variant: "outlined",
                          clearable: "",
                          "prepend-inner-icon": "mdi-account-edit-outline",
                          hint: "用户名长度至少3位",
                          "persistent-hint": "",
                          class: "mb-3"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onSubmit"]),
                    _hoisted_3
                  ]),
                  _: 1
                }),
                createVNode(VDivider),
                createVNode(VCardActions, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "tonal",
                      color: "secondary",
                      onClick: _cache[8] || (_cache[8] = ($event) => accountDialog.value = false),
                      disabled: accountEditStatus.value.loading
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 取消 ")
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    createVNode(VBtn, {
                      color: "primary",
                      onClick: accountEdit,
                      loading: accountEditStatus.value.loading,
                      "prepend-icon": "mdi-content-save"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 保存修改 ")
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
        }, 8, ["modelValue", "max-width"]),
        createVNode(WaitingForRestart, {
          ref_key: "wfr",
          ref: wfr
        }, null, 512),
        createVNode(BackupDialog, {
          ref_key: "backupDialog",
          ref: backupDialog
        }, null, 512)
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
