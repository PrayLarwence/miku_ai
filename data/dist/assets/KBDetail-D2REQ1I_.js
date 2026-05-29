import { D as defineComponent, L as ref, J as watch, h as createBlock, w as withCtx, b as createVNode, s as VCard, a6 as VCardTitle, d as createTextVNode, v as VCardText, j as VTextField, a9 as VCardActions, V as VSpacer, e as VBtn, ai as VDialog, B as axios, o as openBlock, a as createBaseVNode, u as useModuleI18n, H as computed, M as onMounted, I as onUnmounted, c as createElementBlock, t as toDisplayString, $ as unref, aP as VDataTable, l as VIcon, i as createCommentVNode, y as VProgressLinear, x as VDivider, p as VTabs, n as VTab, aJ as VBadge, A as VWindow, q as VWindowItem, a0 as withModifiers, T as normalizeClass, F as Fragment, r as renderList, k as VAlert, ab as VRow, ad as VCol, a8 as VSwitch, f as VSelect, am as VSnackbar, aI as useRouter, ap as pushScopeId, aq as popScopeId, _ as _export_sfc, aG as VCardSubtitle, aL as VTextarea, aa as VImg, aj as VProgressCircular, g as VChip, aK as VForm, aO as useRoute, af as VList, ag as VListItem, ah as VListItemTitle, aB as VListItemSubtitle } from "./index-BCHR8lhs.js";
const _hoisted_1$4 = /* @__PURE__ */ createBaseVNode("p", { class: "mb-4 text-body-2 text-medium-emphasis" }, [
  /* @__PURE__ */ createTextVNode(" 为了使用基于网页的知识库功能，需要提供 Tavily API Key。您可以从 "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://tavily.com/",
    target: "_blank"
  }, "Tavily 官网"),
  /* @__PURE__ */ createTextVNode(" 获取。 ")
], -1);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TavilyKeyDialog",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "success"],
  setup(__props, { emit }) {
    const props = __props;
    const dialog = ref(props.modelValue);
    const apiKey = ref("");
    const saving = ref(false);
    const errorMessage = ref("");
    watch(() => props.modelValue, (val) => {
      dialog.value = val;
      if (val) {
        apiKey.value = "";
        errorMessage.value = "";
        saving.value = false;
      }
    });
    const closeDialog = () => {
      emit("update:modelValue", false);
    };
    const saveKey = async () => {
      var _a, _b;
      if (!apiKey.value.trim()) {
        errorMessage.value = "API Key 不能为空";
        return;
      }
      errorMessage.value = "";
      saving.value = true;
      try {
        const configResponse = await axios.get("/api/config/abconf", {
          params: { id: "default" }
        });
        if (configResponse.data.status !== "ok") {
          throw new Error("获取当前配置失败");
        }
        const currentConfig = configResponse.data.data.config;
        if (!currentConfig.provider_settings) {
          currentConfig.provider_settings = {};
        }
        currentConfig.provider_settings.websearch_tavily_key = [apiKey.value.trim()];
        currentConfig.provider_settings.websearch_provider = "tavily";
        const saveResponse = await axios.post("/api/config/astrbot/update", {
          conf_id: "default",
          config: currentConfig
        });
        if (saveResponse.data.status === "ok") {
          emit("success");
          closeDialog();
        } else {
          errorMessage.value = saveResponse.data.message || "保存失败，请检查 Key 是否正确";
        }
      } catch (error) {
        errorMessage.value = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "保存失败，发生未知错误";
      } finally {
        saving.value = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VDialog, {
        modelValue: dialog.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => dialog.value = $event),
        "max-width": "500px",
        persistent: ""
      }, {
        default: withCtx(() => [
          createVNode(VCard, null, {
            default: withCtx(() => [
              createVNode(VCardTitle, { class: "text-h5" }, {
                default: withCtx(() => [
                  createTextVNode(" 配置 Tavily API Key ")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  _hoisted_1$4,
                  createVNode(VTextField, {
                    modelValue: apiKey.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => apiKey.value = $event),
                    label: "Tavily API Key",
                    variant: "outlined",
                    loading: saving.value,
                    "error-messages": errorMessage.value,
                    autofocus: "",
                    clearable: "",
                    placeholder: "tvly-..."
                  }, null, 8, ["modelValue", "loading", "error-messages"])
                ]),
                _: 1
              }),
              createVNode(VCardActions, null, {
                default: withCtx(() => [
                  createVNode(VSpacer),
                  createVNode(VBtn, {
                    variant: "text",
                    onClick: closeDialog,
                    disabled: saving.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 取消 ")
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(VBtn, {
                    color: "primary",
                    variant: "elevated",
                    onClick: saveKey,
                    loading: saving.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 保存 ")
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
      }, 8, ["modelValue"]);
    };
  }
});
const _withScopeId$1 = (n) => (pushScopeId("data-v-ba1c4ce8"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "documents-tab" };
const _hoisted_2$3 = { class: "action-bar mb-4" };
const _hoisted_3$3 = { class: "d-flex align-center gap-2" };
const _hoisted_4$3 = {
  class: "flex-grow-1",
  style: { "padding": "4px 0px" }
};
const _hoisted_5$3 = { class: "font-weight-medium" };
const _hoisted_6$3 = {
  key: 0,
  class: "mt-1"
};
const _hoisted_7$3 = { class: "text-caption text-medium-emphasis mb-1" };
const _hoisted_8$3 = { key: 0 };
const _hoisted_9$2 = { class: "text-center py-8" };
const _hoisted_10$2 = { class: "mt-4 text-medium-emphasis" };
const _hoisted_11$2 = { class: "text-h5" };
const _hoisted_12$2 = ["onDrop"];
const _hoisted_13$2 = { class: "mt-4 text-h6" };
const _hoisted_14$2 = { class: "text-caption text-medium-emphasis mt-2" };
const _hoisted_15$2 = { class: "text-caption text-medium-emphasis" };
const _hoisted_16$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-caption text-medium-emphasis" }, "最多可上传 10 个文件", -1));
const _hoisted_17 = {
  key: 0,
  class: "mt-4"
};
const _hoisted_18 = { class: "d-flex align-center justify-space-between mb-2" };
const _hoisted_19 = { class: "text-subtitle-2" };
const _hoisted_20 = { class: "files-list" };
const _hoisted_21 = { class: "d-flex align-center justify-space-between" };
const _hoisted_22 = { class: "d-flex align-center gap-2" };
const _hoisted_23 = { class: "font-weight-medium" };
const _hoisted_24 = { class: "text-caption" };
const _hoisted_25 = {
  key: 0,
  class: "mb-4"
};
const _hoisted_26 = { class: "d-flex align-center justify-space-between" };
const _hoisted_27 = {
  key: 0,
  class: "mt-6"
};
const _hoisted_28 = { class: "d-flex align-center mb-4" };
const _hoisted_29 = { class: "text-h6" };
const _hoisted_30 = { class: "mt-6" };
const _hoisted_31 = { class: "d-flex align-center mb-4" };
const _hoisted_32 = { class: "text-h6" };
const _hoisted_33 = { class: "mt-2" };
const _hoisted_34 = { class: "text-h6 mb-4" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DocumentsTab",
  props: {
    kbId: {},
    kb: {}
  },
  emits: ["refresh"],
  setup(__props, { emit }) {
    const props = __props;
    const { tm: t } = useModuleI18n("features/knowledge-base/detail");
    const router = useRouter();
    const loading = ref(false);
    const uploading = ref(false);
    const deleting = ref(false);
    const documents = ref([]);
    const searchQuery = ref("");
    const showUploadDialog = ref(false);
    const showDeleteDialog = ref(false);
    const selectedFiles = ref([]);
    const deleteTarget = ref(null);
    const isDragging = ref(false);
    const fileInput = ref(null);
    const uploadMode = ref("file");
    const uploadUrl = ref("");
    const llmProviders = ref([]);
    ref(/* @__PURE__ */ new Map());
    const progressPollingInterval = ref(null);
    const tavilyConfigStatus = ref("loading");
    const showTavilyDialog = ref(false);
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
    const uploadSettings = ref({
      chunk_size: null,
      chunk_overlap: null,
      batch_size: 32,
      tasks_limit: 3,
      max_retries: 3,
      enable_cleaning: false,
      cleaning_provider_id: null
    });
    const initUploadSettings = () => {
      var _a, _b;
      uploadSettings.value = {
        chunk_size: ((_a = props.kb) == null ? void 0 : _a.chunk_size) || null,
        chunk_overlap: ((_b = props.kb) == null ? void 0 : _b.chunk_overlap) || null,
        batch_size: 32,
        tasks_limit: 3,
        max_retries: 3,
        enable_cleaning: false,
        cleaning_provider_id: null
      };
    };
    const isUploadDisabled = computed(() => {
      if (uploading.value) {
        return true;
      }
      if (uploadMode.value === "file") {
        return selectedFiles.value.length === 0;
      }
      if (uploadMode.value === "url") {
        if (!uploadUrl.value) {
          return true;
        }
        if (uploadSettings.value.enable_cleaning && !uploadSettings.value.cleaning_provider_id) {
          return true;
        }
        return false;
      }
      return true;
    });
    const headers = [
      { title: t("documents.name"), key: "doc_name", sortable: true },
      { title: t("documents.type"), key: "file_type", sortable: true },
      { title: t("documents.size"), key: "file_size", sortable: true },
      { title: t("documents.chunks"), key: "chunk_count", sortable: true },
      { title: t("documents.createdAt"), key: "created_at", sortable: true },
      { title: t("documents.actions"), key: "actions", sortable: false, align: "end" }
    ];
    const loadDocuments = async () => {
      loading.value = true;
      try {
        const response = await axios.get("/api/kb/document/list", {
          params: { kb_id: props.kbId }
        });
        if (response.data.status === "ok") {
          documents.value = response.data.data.items || [];
        }
      } catch (error) {
        console.error("Failed to load documents:", error);
        showSnackbar("加载文档列表失败", "error");
      } finally {
        loading.value = false;
      }
    };
    const handleFileSelect = (event) => {
      const target = event.target;
      if (target.files && target.files.length > 0) {
        const newFiles = Array.from(target.files);
        addFiles(newFiles);
      }
      target.value = "";
    };
    const addFiles = (files) => {
      const totalFiles = selectedFiles.value.length + files.length;
      if (totalFiles > 10) {
        showSnackbar("最多只能选择 10 个文件", "warning");
        return;
      }
      selectedFiles.value.push(...files);
    };
    const removeFile = (index) => {
      selectedFiles.value.splice(index, 1);
    };
    const handleDrop = (event) => {
      var _a;
      isDragging.value = false;
      if (((_a = event.dataTransfer) == null ? void 0 : _a.files) && event.dataTransfer.files.length > 0) {
        const newFiles = Array.from(event.dataTransfer.files);
        addFiles(newFiles);
      }
    };
    const startUpload = async () => {
      if (uploadMode.value === "file") {
        await uploadFiles();
      } else if (uploadMode.value === "url") {
        await uploadFromUrl();
      }
    };
    const uploadFiles = async () => {
      if (selectedFiles.value.length === 0) {
        showSnackbar(t("upload.fileRequired"), "warning");
        return;
      }
      uploading.value = true;
      try {
        const formData = new FormData();
        selectedFiles.value.forEach((file, index) => {
          formData.append(`file${index}`, file);
        });
        formData.append("kb_id", props.kbId);
        if (uploadSettings.value.chunk_size) {
          formData.append("chunk_size", uploadSettings.value.chunk_size.toString());
        }
        if (uploadSettings.value.chunk_overlap) {
          formData.append("chunk_overlap", uploadSettings.value.chunk_overlap.toString());
        }
        formData.append("batch_size", uploadSettings.value.batch_size.toString());
        formData.append("tasks_limit", uploadSettings.value.tasks_limit.toString());
        formData.append("max_retries", uploadSettings.value.max_retries.toString());
        const response = await axios.post("/api/kb/document/upload", formData);
        if (response.data.status === "ok") {
          const result = response.data.data;
          const taskId = result.task_id;
          showSnackbar(`正在后台上传 ${result.file_count} 个文件...`, "info");
          const uploadingDocs = selectedFiles.value.map((file, index) => ({
            doc_id: `uploading_${taskId}_${index}`,
            doc_name: file.name,
            file_type: file.name.split(".").pop() || "",
            file_size: file.size,
            chunk_count: 0,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            uploading: true,
            taskId,
            uploadProgress: {
              stage: "waiting",
              current: 0,
              total: 100
            }
          }));
          documents.value = [...uploadingDocs, ...documents.value];
          closeUploadDialog();
          if (taskId) {
            startProgressPolling(taskId);
          }
        } else {
          showSnackbar(response.data.message || t("documents.uploadFailed"), "error");
        }
      } catch (error) {
        console.error("Failed to upload document:", error);
        showSnackbar(t("documents.uploadFailed"), "error");
      } finally {
        uploading.value = false;
      }
    };
    const uploadFromUrl = async () => {
      var _a, _b;
      if (!uploadUrl.value) {
        showSnackbar(t("upload.urlRequired"), "warning");
        return;
      }
      uploading.value = true;
      try {
        const payload = {
          kb_id: props.kbId,
          url: uploadUrl.value,
          batch_size: uploadSettings.value.batch_size,
          tasks_limit: uploadSettings.value.tasks_limit,
          max_retries: uploadSettings.value.max_retries
        };
        if (uploadSettings.value.chunk_size) {
          payload.chunk_size = uploadSettings.value.chunk_size;
        }
        if (uploadSettings.value.chunk_overlap) {
          payload.chunk_overlap = uploadSettings.value.chunk_overlap;
        }
        if (uploadSettings.value.enable_cleaning) {
          payload.enable_cleaning = true;
          if (uploadSettings.value.cleaning_provider_id) {
            payload.cleaning_provider_id = uploadSettings.value.cleaning_provider_id;
          }
        }
        const response = await axios.post("/api/kb/document/upload/url", payload);
        if (response.data.status === "ok") {
          const result = response.data.data;
          const taskId = result.task_id;
          showSnackbar(`正在从 URL 后台提取内容...`, "info");
          const uploadingDoc = {
            doc_id: `uploading_${taskId}_0`,
            doc_name: result.url,
            file_type: "url",
            file_size: 0,
            // URL has no size
            chunk_count: 0,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            uploading: true,
            taskId,
            uploadProgress: {
              stage: "waiting",
              current: 0,
              total: 100
            }
          };
          documents.value = [uploadingDoc, ...documents.value];
          closeUploadDialog();
          if (taskId) {
            startProgressPolling(taskId);
          }
        } else {
          showSnackbar(response.data.message || t("documents.uploadFailed"), "error");
        }
      } catch (error) {
        console.error("Failed to upload from URL:", error);
        const message = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || t("documents.uploadFailed");
        showSnackbar(message, "error");
      } finally {
        uploading.value = false;
      }
    };
    const startProgressPolling = (taskId) => {
      if (progressPollingInterval.value) {
        stopProgressPolling();
      }
      progressPollingInterval.value = window.setInterval(async () => {
        try {
          const response = await axios.get("/api/kb/document/upload/progress", {
            params: { task_id: taskId }
          });
          if (response.data.status === "ok") {
            const data = response.data.data;
            const status = data.status;
            if (status === "processing" && data.progress) {
              const progress = data.progress;
              const fileIndex = progress.file_index || 0;
              documents.value = documents.value.map((doc) => {
                if (doc.taskId === taskId) {
                  const docIndex = parseInt(doc.doc_id.split("_").pop() || "0");
                  if (docIndex === fileIndex) {
                    return {
                      ...doc,
                      uploadProgress: {
                        stage: progress.stage || "waiting",
                        current: progress.current || 0,
                        total: progress.total || 100
                      }
                    };
                  }
                }
                return doc;
              });
            } else if (status === "completed") {
              stopProgressPolling();
              const result = data.result;
              const successCount = (result == null ? void 0 : result.success_count) || 0;
              const failedCount = (result == null ? void 0 : result.failed_count) || 0;
              documents.value = documents.value.filter((doc) => doc.taskId !== taskId);
              await loadDocuments();
              emit("refresh");
              if (failedCount === 0) {
                showSnackbar(`成功上传 ${successCount} 个文档`);
              } else {
                showSnackbar(`上传完成: ${successCount} 个成功, ${failedCount} 个失败`, "warning");
              }
            } else if (status === "failed") {
              stopProgressPolling();
              documents.value = documents.value.filter((doc) => doc.taskId !== taskId);
              showSnackbar(`上传失败: ${data.error || "未知错误"}`, "error");
            }
          } else {
            stopProgressPolling();
            documents.value = documents.value.filter((doc) => doc.taskId !== taskId);
          }
        } catch (error) {
          console.error("Failed to fetch progress:", error);
        }
      }, 500);
    };
    const stopProgressPolling = () => {
      if (progressPollingInterval.value) {
        clearInterval(progressPollingInterval.value);
        progressPollingInterval.value = null;
      }
    };
    const getUploadPercentage = (item) => {
      if (!item.uploadProgress) return 0;
      const { current, total } = item.uploadProgress;
      if (!total || total === 0) return 0;
      return current / total * 100;
    };
    const getStageText = (stage) => {
      const stageMap = {
        "waiting": "等待中...",
        "extracting": "提取内容...",
        "cleaning": "清洗内容...",
        "parsing": "解析文档...",
        "chunking": "文本分块...",
        "embedding": "生成向量..."
      };
      return stageMap[stage] || stage;
    };
    const closeUploadDialog = () => {
      showUploadDialog.value = false;
      selectedFiles.value = [];
      uploadUrl.value = "";
      uploadMode.value = "file";
      initUploadSettings();
    };
    const viewDocument = (doc) => {
      router.push({
        name: "NativeDocumentDetail",
        params: { kbId: props.kbId, docId: doc.doc_id }
      });
    };
    const confirmDelete = (doc) => {
      deleteTarget.value = doc;
      showDeleteDialog.value = true;
    };
    const deleteDocument = async () => {
      if (!deleteTarget.value) return;
      deleting.value = true;
      try {
        const response = await axios.post("/api/kb/document/delete", {
          doc_id: deleteTarget.value.doc_id,
          kb_id: props.kbId
        });
        if (response.data.status === "ok") {
          showSnackbar(t("documents.deleteSuccess"));
          showDeleteDialog.value = false;
          await loadDocuments();
          emit("refresh");
        } else {
          showSnackbar(response.data.message || t("documents.deleteFailed"), "error");
        }
      } catch (error) {
        console.error("Failed to delete document:", error);
        showSnackbar(t("documents.deleteFailed"), "error");
      } finally {
        deleting.value = false;
      }
    };
    const getFileIcon = (fileType) => {
      const type = (fileType == null ? void 0 : fileType.toLowerCase()) || "";
      if (type.includes("pdf")) return "mdi-file-pdf-box";
      if (type.includes("epub")) return "mdi-book-open-page-variant";
      if (type.includes("md") || type.includes("markdown")) return "mdi-language-markdown";
      if (type.includes("txt")) return "mdi-file-document-outline";
      if (type.includes("url")) return "mdi-link-variant";
      return "mdi-file";
    };
    const getFileColor = (fileType) => {
      const type = (fileType == null ? void 0 : fileType.toLowerCase()) || "";
      if (type.includes("pdf")) return "error";
      if (type.includes("epub")) return "warning";
      if (type.includes("md")) return "info";
      if (type.includes("txt")) return "success";
      if (type.includes("url")) return "primary";
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
    const loadLlmProviders = async () => {
      try {
        const response = await axios.get("/api/config/provider/list", {
          params: { provider_type: "chat_completion" }
        });
        if (response.data.status === "ok") {
          llmProviders.value = response.data.data;
        }
      } catch (error) {
        console.error("Failed to load LLM providers:", error);
      }
    };
    const checkTavilyConfig = async () => {
      var _a;
      tavilyConfigStatus.value = "loading";
      try {
        const response = await axios.get("/api/config/abconf", {
          params: { id: "default" }
        });
        if (response.data.status === "ok") {
          const config = response.data.data.config;
          const tavilyKeys = (_a = config == null ? void 0 : config.provider_settings) == null ? void 0 : _a.websearch_tavily_key;
          if (Array.isArray(tavilyKeys) && tavilyKeys.length > 0 && tavilyKeys.some((key) => key.trim() !== "")) {
            tavilyConfigStatus.value = "configured";
          } else {
            tavilyConfigStatus.value = "not_configured";
          }
        } else {
          tavilyConfigStatus.value = "error";
        }
      } catch (error) {
        console.warn("Failed to check Tavily key config:", error);
        tavilyConfigStatus.value = "error";
      }
    };
    const onTavilyKeySet = () => {
      showSnackbar("Tavily API Key 配置成功", "success");
      checkTavilyConfig();
    };
    onMounted(() => {
      loadDocuments();
      loadLlmProviders();
      checkTavilyConfig();
    });
    onUnmounted(() => {
      stopProgressPolling();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          createVNode(VBtn, {
            "prepend-icon": "mdi-upload",
            color: "primary",
            variant: "elevated",
            onClick: _cache[0] || (_cache[0] = ($event) => showUploadDialog.value = true)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("documents.upload")), 1)
            ]),
            _: 1
          }),
          createVNode(VTextField, {
            modelValue: searchQuery.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchQuery.value = $event),
            "prepend-inner-icon": "mdi-magnify",
            placeholder: "搜索文档...",
            variant: "outlined",
            density: "compact",
            "hide-details": "",
            clearable: "",
            style: { "max-width": "300px" }
          }, null, 8, ["modelValue", "placeholder"])
        ]),
        createVNode(VCard, { elevation: "2" }, {
          default: withCtx(() => [
            createVNode(VDataTable, {
              headers,
              items: documents.value,
              loading: loading.value,
              search: searchQuery.value,
              "items-per-page": 10
            }, {
              "item.doc_name": withCtx(({ item }) => {
                var _a, _b;
                return [
                  createBaseVNode("div", _hoisted_3$3, [
                    createVNode(VIcon, {
                      color: getFileColor(item.file_type),
                      class: "mr-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(getFileIcon(item.file_type)), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"]),
                    createBaseVNode("div", _hoisted_4$3, [
                      createBaseVNode("span", _hoisted_5$3, toDisplayString(item.doc_name), 1),
                      item.uploading ? (openBlock(), createElementBlock("div", _hoisted_6$3, [
                        createBaseVNode("div", _hoisted_7$3, [
                          createTextVNode(toDisplayString(getStageText(((_a = item.uploadProgress) == null ? void 0 : _a.stage) || "waiting")) + " ", 1),
                          ((_b = item.uploadProgress) == null ? void 0 : _b.current) ? (openBlock(), createElementBlock("span", _hoisted_8$3, " (" + toDisplayString(item.uploadProgress.current) + " / " + toDisplayString(item.uploadProgress.total) + ") ", 1)) : createCommentVNode("", true)
                        ]),
                        createVNode(VProgressLinear, {
                          "model-value": getUploadPercentage(item),
                          color: "primary",
                          height: "4",
                          rounded: "",
                          striped: ""
                        }, null, 8, ["model-value"])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ];
              }),
              "item.file_size": withCtx(({ item }) => [
                createTextVNode(toDisplayString(formatFileSize(item.file_size)), 1)
              ]),
              "item.created_at": withCtx(({ item }) => [
                createTextVNode(toDisplayString(formatDate(item.created_at)), 1)
              ]),
              "item.actions": withCtx(({ item }) => [
                createVNode(VBtn, {
                  icon: "mdi-eye",
                  variant: "text",
                  size: "small",
                  color: "info",
                  onClick: ($event) => viewDocument(item)
                }, null, 8, ["onClick"]),
                createVNode(VBtn, {
                  icon: "mdi-delete",
                  variant: "text",
                  size: "small",
                  color: "error",
                  onClick: ($event) => confirmDelete(item)
                }, null, 8, ["onClick"])
              ]),
              "no-data": withCtx(() => [
                createBaseVNode("div", _hoisted_9$2, [
                  createVNode(VIcon, {
                    size: "64",
                    color: "grey-lighten-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-file-document-outline")
                    ]),
                    _: 1
                  }),
                  createBaseVNode("p", _hoisted_10$2, toDisplayString(unref(t)("documents.empty")), 1)
                ])
              ]),
              _: 1
            }, 8, ["items", "loading", "search"])
          ]),
          _: 1
        }),
        createVNode(VDialog, {
          modelValue: showUploadDialog.value,
          "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => showUploadDialog.value = $event),
          "max-width": "650px",
          persistent: "",
          onAfterEnter: initUploadSettings
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "pa-4 d-flex align-center" }, {
                  default: withCtx(() => [
                    createBaseVNode("span", _hoisted_11$2, toDisplayString(unref(t)("upload.title")), 1),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      icon: "mdi-close",
                      variant: "text",
                      onClick: closeUploadDialog
                    })
                  ]),
                  _: 1
                }),
                createVNode(VDivider),
                createVNode(VTabs, {
                  modelValue: uploadMode.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => uploadMode.value = $event),
                  grow: "",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createVNode(VTab, { value: "file" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("upload.fileUpload")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "url" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("upload.fromUrl")) + " ", 1),
                        createVNode(VBadge, {
                          color: "warning",
                          content: unref(t)("upload.beta"),
                          inline: "",
                          class: "ml-2"
                        }, null, 8, ["content"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(VCardText, { class: "pa-6 pt-2" }, {
                  default: withCtx(() => [
                    createVNode(VWindow, {
                      modelValue: uploadMode.value,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => uploadMode.value = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(VWindowItem, { value: "file" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", {
                              class: normalizeClass(["upload-dropzone", { "dragover": isDragging.value }]),
                              onDrop: withModifiers(handleDrop, ["prevent"]),
                              onDragover: _cache[3] || (_cache[3] = withModifiers(($event) => isDragging.value = true, ["prevent"])),
                              onDragleave: _cache[4] || (_cache[4] = ($event) => isDragging.value = false),
                              onClick: _cache[5] || (_cache[5] = ($event) => {
                                var _a;
                                return (_a = fileInput.value) == null ? void 0 : _a.click();
                              })
                            }, [
                              createVNode(VIcon, {
                                size: "64",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-cloud-upload")
                                ]),
                                _: 1
                              }),
                              createBaseVNode("p", _hoisted_13$2, toDisplayString(unref(t)("upload.dropzone")), 1),
                              createBaseVNode("p", _hoisted_14$2, toDisplayString(unref(t)("upload.supportedFormats")), 1),
                              createBaseVNode("p", _hoisted_15$2, toDisplayString(unref(t)("upload.maxSize")), 1),
                              _hoisted_16$1,
                              createBaseVNode("input", {
                                ref_key: "fileInput",
                                ref: fileInput,
                                type: "file",
                                multiple: "",
                                hidden: "",
                                accept: ".txt,.md,.pdf,.docx,.epub,.xls,.xlsx",
                                onChange: handleFileSelect
                              }, null, 544)
                            ], 42, _hoisted_12$2),
                            selectedFiles.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_17, [
                              createBaseVNode("div", _hoisted_18, [
                                createBaseVNode("span", _hoisted_19, "已选择 " + toDisplayString(selectedFiles.value.length) + " 个文件", 1),
                                createVNode(VBtn, {
                                  variant: "text",
                                  size: "small",
                                  onClick: _cache[6] || (_cache[6] = ($event) => selectedFiles.value = [])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("清空")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createBaseVNode("div", _hoisted_20, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(selectedFiles.value, (file, index) => {
                                  return openBlock(), createElementBlock("div", {
                                    key: index,
                                    class: "file-item pa-3 mb-2 rounded bg-surface-variant"
                                  }, [
                                    createBaseVNode("div", _hoisted_21, [
                                      createBaseVNode("div", _hoisted_22, [
                                        createVNode(VIcon, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(getFileIcon(file.name)), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createBaseVNode("div", null, [
                                          createBaseVNode("div", _hoisted_23, toDisplayString(file.name), 1),
                                          createBaseVNode("div", _hoisted_24, toDisplayString(formatFileSize(file.size)), 1)
                                        ])
                                      ]),
                                      createVNode(VBtn, {
                                        icon: "mdi-close",
                                        variant: "text",
                                        size: "small",
                                        onClick: ($event) => removeFile(index)
                                      }, null, 8, ["onClick"])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, {
                          value: "url",
                          class: "pt-2"
                        }, {
                          default: withCtx(() => [
                            tavilyConfigStatus.value === "not_configured" || tavilyConfigStatus.value === "error" ? (openBlock(), createElementBlock("div", _hoisted_25, [
                              createVNode(VAlert, {
                                type: tavilyConfigStatus.value === "error" ? "error" : "info",
                                variant: "tonal",
                                density: "compact"
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_26, [
                                    createBaseVNode("span", null, toDisplayString(tavilyConfigStatus.value === "error" ? "检查网页搜索配置失败" : "使用此功能需要配置 Tavily Key"), 1),
                                    createVNode(VBtn, {
                                      size: "small",
                                      variant: "flat",
                                      onClick: _cache[7] || (_cache[7] = ($event) => showTavilyDialog.value = true)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" 配置 ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              }, 8, ["type"])
                            ])) : createCommentVNode("", true),
                            createVNode(VTextField, {
                              modelValue: uploadUrl.value,
                              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => uploadUrl.value = $event),
                              label: unref(t)("upload.urlPlaceholder"),
                              variant: "outlined",
                              clearable: "",
                              disabled: tavilyConfigStatus.value === "not_configured",
                              autofocus: "",
                              hint: unref(t)("upload.urlHint", { supported: "HTML" }),
                              "persistent-hint": ""
                            }, null, 8, ["modelValue", "label", "disabled", "hint"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    uploadMode.value === "url" ? (openBlock(), createElementBlock("div", _hoisted_27, [
                      createBaseVNode("div", _hoisted_28, [
                        createBaseVNode("h3", _hoisted_29, toDisplayString(unref(t)("upload.cleaningSettings")), 1)
                      ]),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSwitch, {
                                modelValue: uploadSettings.value.enable_cleaning,
                                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => uploadSettings.value.enable_cleaning = $event),
                                label: unref(t)("upload.enableCleaning"),
                                color: "primary"
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "8"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: uploadSettings.value.cleaning_provider_id,
                                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => uploadSettings.value.cleaning_provider_id = $event),
                                items: llmProviders.value,
                                "item-title": "id",
                                "item-value": "id",
                                label: unref(t)("upload.cleaningProvider"),
                                hint: unref(t)("upload.cleaningProviderHint"),
                                "persistent-hint": "",
                                variant: "outlined",
                                density: "compact",
                                disabled: !uploadSettings.value.enable_cleaning
                              }, null, 8, ["modelValue", "items", "label", "hint", "disabled"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_30, [
                      createBaseVNode("div", _hoisted_31, [
                        createBaseVNode("h3", _hoisted_32, toDisplayString(unref(t)("upload.chunkSettings")), 1)
                      ]),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => {
                              var _a, _b;
                              return [
                                createVNode(VTextField, {
                                  modelValue: uploadSettings.value.chunk_size,
                                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => uploadSettings.value.chunk_size = $event),
                                  modelModifiers: { number: true },
                                  label: unref(t)("upload.chunkSize"),
                                  hint: unref(t)("upload.chunkSizeHint"),
                                  "persistent-hint": "",
                                  type: "number",
                                  variant: "outlined",
                                  density: "compact",
                                  placeholder: ((_b = (_a = props.kb) == null ? void 0 : _a.chunk_size) == null ? void 0 : _b.toString()) || "512"
                                }, null, 8, ["modelValue", "label", "hint", "placeholder"])
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => {
                              var _a, _b;
                              return [
                                createVNode(VTextField, {
                                  modelValue: uploadSettings.value.chunk_overlap,
                                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => uploadSettings.value.chunk_overlap = $event),
                                  modelModifiers: { number: true },
                                  label: unref(t)("upload.chunkOverlap"),
                                  hint: unref(t)("upload.chunkOverlapHint"),
                                  "persistent-hint": "",
                                  type: "number",
                                  variant: "outlined",
                                  density: "compact",
                                  placeholder: ((_b = (_a = props.kb) == null ? void 0 : _a.chunk_overlap) == null ? void 0 : _b.toString()) || "50"
                                }, null, 8, ["modelValue", "label", "hint", "placeholder"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_33, [
                      createBaseVNode("h3", _hoisted_34, toDisplayString(unref(t)("upload.batchSettings")), 1),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: uploadSettings.value.batch_size,
                                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => uploadSettings.value.batch_size = $event),
                                modelModifiers: { number: true },
                                label: unref(t)("upload.batchSize"),
                                hint: "每批处理的文本数量",
                                "persistent-hint": "",
                                type: "number",
                                variant: "outlined",
                                density: "compact"
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: uploadSettings.value.tasks_limit,
                                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => uploadSettings.value.tasks_limit = $event),
                                modelModifiers: { number: true },
                                label: unref(t)("upload.tasksLimit"),
                                hint: "并发任务数量限制",
                                "persistent-hint": "",
                                type: "number",
                                variant: "outlined",
                                density: "compact"
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: uploadSettings.value.max_retries,
                                "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => uploadSettings.value.max_retries = $event),
                                modelModifiers: { number: true },
                                label: unref(t)("upload.maxRetries"),
                                hint: "失败时的最大重试次数",
                                "persistent-hint": "",
                                type: "number",
                                variant: "outlined",
                                density: "compact"
                              }, null, 8, ["modelValue", "label"])
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
                createVNode(VDivider),
                createVNode(VCardActions, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: closeUploadDialog,
                      disabled: uploading.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("upload.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    createVNode(VBtn, {
                      color: "primary",
                      variant: "elevated",
                      onClick: startUpload,
                      loading: uploading.value,
                      disabled: isUploadDisabled.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("upload.submit")), 1)
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
        createVNode(VDialog, {
          modelValue: showDeleteDialog.value,
          "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => showDeleteDialog.value = $event),
          "max-width": "450px"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "pa-4 text-h6" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("documents.delete")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VDivider),
                createVNode(VCardText, { class: "pa-6" }, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      createBaseVNode("p", null, toDisplayString(unref(t)("documents.deleteConfirm", { name: ((_a = deleteTarget.value) == null ? void 0 : _a.doc_name) || "" })), 1),
                      createVNode(VAlert, {
                        type: "error",
                        variant: "tonal",
                        density: "compact",
                        class: "mt-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("documents.deleteWarning")), 1)
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
                      onClick: _cache[18] || (_cache[18] = ($event) => showDeleteDialog.value = false)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("取消")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "error",
                      variant: "elevated",
                      onClick: deleteDocument,
                      loading: deleting.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 删除 ")
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
          "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => snackbar.value.show = $event),
          color: snackbar.value.color
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(snackbar.value.text), 1)
          ]),
          _: 1
        }, 8, ["modelValue", "color"]),
        createVNode(_sfc_main$4, {
          modelValue: showTavilyDialog.value,
          "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => showTavilyDialog.value = $event),
          onSuccess: onTavilyKeySet
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
const DocumentsTab = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ba1c4ce8"]]);
const _hoisted_1$2 = { class: "retrieval-tab" };
const _hoisted_2$2 = {
  key: 0,
  class: "mt-2"
};
const _hoisted_3$2 = { class: "d-flex align-center justify-center fill-height" };
const _hoisted_4$2 = { class: "text-subtitle-2 mb-3" };
const _hoisted_5$2 = { class: "text-caption" };
const _hoisted_6$2 = { class: "d-flex justify-end mb-4" };
const _hoisted_7$2 = {
  key: 0,
  class: "results-section"
};
const _hoisted_8$2 = { class: "d-flex align-center mb-4" };
const _hoisted_9$1 = { class: "text-h6" };
const _hoisted_10$1 = {
  key: 0,
  class: "results-list"
};
const _hoisted_11$1 = { class: "text-subtitle-1" };
const _hoisted_12$1 = { class: "ml-4" };
const _hoisted_13$1 = { class: "content-box" };
const _hoisted_14$1 = {
  key: 1,
  class: "text-center py-12"
};
const _hoisted_15$1 = { class: "text-h6 mt-4 text-medium-emphasis" };
const _hoisted_16 = { class: "text-body-2 text-medium-emphasis" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RetrievalTab",
  props: {
    kbId: {},
    kbName: {}
  },
  setup(__props) {
    const props = __props;
    const { tm: t } = useModuleI18n("features/knowledge-base/detail");
    const loading = ref(false);
    const query = ref("");
    const topK = ref(5);
    const debugMode = ref(false);
    const results = ref([]);
    const hasSearched = ref(false);
    const debugVisualize = ref(null);
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
    const performRetrieval = async () => {
      if (!query.value || query.value.trim() === "") {
        showSnackbar(t("retrieval.queryRequired"), "warning");
        return;
      }
      loading.value = true;
      hasSearched.value = false;
      debugVisualize.value = null;
      try {
        const response = await axios.post("/api/kb/retrieve", {
          query: query.value,
          kb_names: [props.kbName],
          top_k: topK.value,
          debug: debugMode.value
        });
        if (response.data.status === "ok") {
          results.value = response.data.data.results || [];
          hasSearched.value = true;
          if (debugMode.value && response.data.data.visualization) {
            debugVisualize.value = response.data.data.visualization;
          }
          showSnackbar(t("retrieval.searchSuccess", { count: results.value.length }));
        } else {
          showSnackbar(response.data.message || t("retrieval.searchFailed"), "error");
        }
      } catch (error) {
        console.error("Retrieval failed:", error);
        showSnackbar(t("retrieval.searchFailed"), "error");
      } finally {
        loading.value = false;
      }
    };
    const getScoreColor = (score) => {
      if (score >= 0.8) return "success";
      if (score >= 0.6) return "info";
      if (score >= 0.4) return "warning";
      return "error";
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(VCard, { elevation: "2" }, {
          default: withCtx(() => [
            createVNode(VCardTitle, { class: "pa-4 pb-0" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("retrieval.title")), 1)
              ]),
              _: 1
            }),
            createVNode(VCardSubtitle, { class: "pb-4 pt-2" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("retrieval.subtitle")), 1)
              ]),
              _: 1
            }),
            createVNode(VDivider),
            loading.value ? (openBlock(), createBlock(VProgressLinear, {
              key: 0,
              indeterminate: "",
              color: "primary",
              height: "2"
            })) : createCommentVNode("", true),
            createVNode(VCardText, { class: "pa-6" }, {
              default: withCtx(() => [
                createVNode(VRow, { class: "mb-4" }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      md: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextarea, {
                          modelValue: query.value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.value = $event),
                          label: unref(t)("retrieval.query"),
                          placeholder: unref(t)("retrieval.queryPlaceholder"),
                          variant: "outlined",
                          rows: "3",
                          "auto-grow": "",
                          clearable: ""
                        }, null, 8, ["modelValue", "label", "placeholder"]),
                        debugVisualize.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
                          createVNode(VCard, { variant: "outlined" }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: `data:image/png;base64,${debugVisualize.value}`,
                                alt: unref(t)("retrieval.tsneVisualization"),
                                cover: ""
                              }, {
                                placeholder: withCtx(() => [
                                  createBaseVNode("div", _hoisted_3$2, [
                                    createVNode(VProgressCircular, {
                                      indeterminate: "",
                                      color: "primary"
                                    })
                                  ])
                                ]),
                                _: 1
                              }, 8, ["src", "alt"])
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          variant: "outlined",
                          class: "pa-4"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("h4", _hoisted_4$2, toDisplayString(unref(t)("retrieval.settings")), 1),
                            createVNode(VTextField, {
                              modelValue: topK.value,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => topK.value = $event),
                              modelModifiers: { number: true },
                              label: unref(t)("retrieval.topK"),
                              hint: unref(t)("retrieval.topKHint"),
                              type: "number",
                              variant: "outlined",
                              density: "compact",
                              "persistent-hint": "",
                              class: "mb-3"
                            }, null, 8, ["modelValue", "label", "hint"]),
                            createVNode(VSwitch, {
                              modelValue: debugMode.value,
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => debugMode.value = $event),
                              label: unref(t)("retrieval.debugMode"),
                              color: "primary",
                              density: "compact",
                              "hide-details": ""
                            }, {
                              label: withCtx(() => [
                                createBaseVNode("span", _hoisted_5$2, [
                                  createVNode(VIcon, {
                                    size: "small",
                                    class: "mr-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-bug")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Debug (t-SNE) ")
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "label"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_6$2, [
                  createVNode(VBtn, {
                    "prepend-icon": "mdi-magnify",
                    color: "primary",
                    variant: "elevated",
                    onClick: performRetrieval,
                    loading: loading.value,
                    disabled: !query.value || query.value.trim() === ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(loading.value ? unref(t)("retrieval.searching") : unref(t)("retrieval.search")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ]),
                hasSearched.value ? (openBlock(), createElementBlock("div", _hoisted_7$2, [
                  createVNode(VDivider, { class: "mb-4" }),
                  createBaseVNode("div", _hoisted_8$2, [
                    createBaseVNode("h3", _hoisted_9$1, toDisplayString(unref(t)("retrieval.results")), 1),
                    createVNode(VChip, {
                      class: "ml-3",
                      color: "primary",
                      variant: "tonal",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(results.value.length) + " " + toDisplayString(unref(t)("retrieval.results")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  results.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(results.value, (result, index) => {
                      return openBlock(), createBlock(VCard, {
                        key: result.chunk_id,
                        variant: "outlined",
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "d-flex align-center pa-2" }, {
                            default: withCtx(() => [
                              createVNode(VChip, {
                                size: "x-small",
                                color: "primary",
                                class: "mr-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" #" + toDisplayString(index + 1), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createBaseVNode("span", _hoisted_11$1, toDisplayString(unref(t)("retrieval.chunk", { index: result.chunk_index })), 1),
                              createBaseVNode("div", _hoisted_12$1, [
                                createVNode(VChip, {
                                  size: "x-small",
                                  variant: "tonal",
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-file-document")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" " + toDisplayString(result.doc_name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VChip, {
                                  size: "x-small",
                                  variant: "tonal"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-text")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" " + toDisplayString(unref(t)("retrieval.charCount", { count: result.char_count })), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode(VSpacer),
                              createVNode(VChip, {
                                size: "x-small",
                                color: getScoreColor(result.score)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)("retrieval.score")) + ": " + toDisplayString(result.score.toFixed(4)), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VDivider),
                          createVNode(VCardText, { class: "pa-4" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_13$1, toDisplayString(result.content), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ])) : (openBlock(), createElementBlock("div", _hoisted_14$1, [
                    createVNode(VIcon, {
                      size: "80",
                      color: "grey-lighten-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-text-box-search-outline")
                      ]),
                      _: 1
                    }),
                    createBaseVNode("p", _hoisted_15$1, toDisplayString(unref(t)("retrieval.noResults")), 1),
                    createBaseVNode("p", _hoisted_16, toDisplayString(unref(t)("retrieval.tryDifferentQuery")), 1)
                  ]))
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(VSnackbar, {
          modelValue: snackbar.value.show,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => snackbar.value.show = $event),
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
const RetrievalTab = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9b1a0712"]]);
const _withScopeId = (n) => (pushScopeId("data-v-5ee7c6f2"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "settings-tab" };
const _hoisted_2$1 = { class: "text-h6 mb-4" };
const _hoisted_3$1 = { class: "text-h6 mb-4 mt-6" };
const _hoisted_4$1 = { class: "text-h6 mb-4 mt-6" };
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("strong", null, "注意:", -1));
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("strong", null, "警告:", -1));
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("ul", { class: "text-body-2" }, [
  /* @__PURE__ */ createBaseVNode("li", null, "现有的向量数据将失效"),
  /* @__PURE__ */ createBaseVNode("li", null, "检索功能可能无法正常工作"),
  /* @__PURE__ */ createBaseVNode("li", null, "建议删除现有文档后重新上传"),
  /* @__PURE__ */ createBaseVNode("li", null, "不同嵌入模型生成的向量不兼容")
], -1));
const _hoisted_8$1 = { class: "mt-4 text-body-2" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SettingsTab",
  props: {
    kb: {}
  },
  emits: ["updated"],
  setup(__props, { emit }) {
    const props = __props;
    const { tm: t } = useModuleI18n("features/knowledge-base/detail");
    const saving = ref(false);
    const formRef = ref();
    const embeddingProviders = ref([]);
    const rerankProviders = ref([]);
    const originalEmbeddingProvider = ref("");
    const showEmbeddingWarning = ref(false);
    const embeddingChangeDialog = ref(false);
    const pendingEmbeddingProvider = ref("");
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
    const formData = ref({
      chunk_size: 512,
      chunk_overlap: 50,
      top_k_dense: 50,
      top_k_sparse: 50,
      embedding_provider_id: "",
      rerank_provider_id: ""
    });
    watch(() => props.kb, (kb) => {
      if (kb) {
        formData.value = {
          chunk_size: kb.chunk_size || 512,
          chunk_overlap: kb.chunk_overlap || 50,
          top_k_dense: kb.top_k_dense || 50,
          top_k_sparse: kb.top_k_sparse || 50,
          // top_m_final: kb.top_m_final || 5,
          embedding_provider_id: kb.embedding_provider_id || "",
          rerank_provider_id: kb.rerank_provider_id || ""
        };
        originalEmbeddingProvider.value = kb.embedding_provider_id || "";
      }
    }, { immediate: true });
    const loadProviders = async () => {
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
      }
    };
    const handleEmbeddingProviderChange = (newValue) => {
      if (newValue && newValue !== originalEmbeddingProvider.value) {
        showEmbeddingWarning.value = true;
        pendingEmbeddingProvider.value = newValue;
        embeddingChangeDialog.value = true;
      } else {
        showEmbeddingWarning.value = false;
      }
    };
    const confirmEmbeddingChange = () => {
      formData.value.embedding_provider_id = pendingEmbeddingProvider.value;
      embeddingChangeDialog.value = false;
      showEmbeddingWarning.value = true;
    };
    const cancelEmbeddingChange = () => {
      formData.value.embedding_provider_id = originalEmbeddingProvider.value;
      embeddingChangeDialog.value = false;
      showEmbeddingWarning.value = false;
      pendingEmbeddingProvider.value = "";
    };
    const saveSettings = async () => {
      const { valid } = await formRef.value.validate();
      if (!valid) return;
      saving.value = true;
      try {
        const response = await axios.post("/api/kb/update", {
          kb_id: props.kb.kb_id,
          chunk_size: formData.value.chunk_size,
          chunk_overlap: formData.value.chunk_overlap,
          top_k_dense: formData.value.top_k_dense,
          top_k_sparse: formData.value.top_k_sparse,
          // top_m_final: formData.value.top_m_final,
          rerank_provider_id: formData.value.rerank_provider_id
        });
        if (response.data.status === "ok") {
          showSnackbar(t("settings.saveSuccess"));
          emit("updated");
        } else {
          showSnackbar(response.data.message || t("settings.saveFailed"), "error");
        }
      } catch (error) {
        console.error("Failed to save settings:", error);
        showSnackbar(t("settings.saveFailed"), "error");
      } finally {
        saving.value = false;
      }
    };
    onMounted(() => {
      loadProviders();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(VCard, { elevation: "2" }, {
          default: withCtx(() => [
            createVNode(VCardTitle, { class: "pa-4" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("settings.title")), 1)
              ]),
              _: 1
            }),
            createVNode(VDivider),
            createVNode(VCardText, { class: "pa-6" }, {
              default: withCtx(() => [
                createVNode(VForm, {
                  ref_key: "formRef",
                  ref: formRef
                }, {
                  default: withCtx(() => [
                    createBaseVNode("h3", _hoisted_2$1, toDisplayString(unref(t)("settings.basic")), 1),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: formData.value.chunk_size,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.chunk_size = $event),
                              modelModifiers: { number: true },
                              label: unref(t)("settings.chunkSize"),
                              type: "number",
                              variant: "outlined",
                              density: "comfortable"
                            }, null, 8, ["modelValue", "label"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: formData.value.chunk_overlap,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.chunk_overlap = $event),
                              modelModifiers: { number: true },
                              label: unref(t)("settings.chunkOverlap"),
                              type: "number",
                              variant: "outlined",
                              density: "comfortable"
                            }, null, 8, ["modelValue", "label"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("h3", _hoisted_3$1, toDisplayString(unref(t)("settings.retrieval")), 1),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: formData.value.top_k_dense,
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.top_k_dense = $event),
                              modelModifiers: { number: true },
                              label: unref(t)("settings.topKDense"),
                              type: "number",
                              variant: "outlined",
                              density: "comfortable"
                            }, null, 8, ["modelValue", "label"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: formData.value.top_k_sparse,
                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.top_k_sparse = $event),
                              modelModifiers: { number: true },
                              label: unref(t)("settings.topKSparse"),
                              type: "number",
                              variant: "outlined",
                              density: "comfortable"
                            }, null, 8, ["modelValue", "label"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("h3", _hoisted_4$1, toDisplayString(unref(t)("settings.embeddingProvider")), 1),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: formData.value.embedding_provider_id,
                              "onUpdate:modelValue": [
                                _cache[4] || (_cache[4] = ($event) => formData.value.embedding_provider_id = $event),
                                handleEmbeddingProviderChange
                              ],
                              items: embeddingProviders.value,
                              "item-title": (item) => item.embedding_model || item.id,
                              "item-value": "id",
                              label: unref(t)("settings.embeddingProvider"),
                              variant: "outlined",
                              density: "comfortable",
                              disabled: true
                            }, null, 8, ["modelValue", "items", "item-title", "label"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: formData.value.rerank_provider_id,
                              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.value.rerank_provider_id = $event),
                              items: rerankProviders.value,
                              "item-title": (item) => item.rerank_model || item.id,
                              "item-value": "id",
                              label: unref(t)("settings.rerankProvider"),
                              variant: "outlined",
                              density: "comfortable",
                              clearable: ""
                            }, null, 8, ["modelValue", "items", "item-title", "label"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VAlert, {
                      type: "info",
                      variant: "tonal",
                      class: "mt-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("settings.tips")), 1)
                      ]),
                      _: 1
                    }),
                    showEmbeddingWarning.value ? (openBlock(), createBlock(VAlert, {
                      key: 0,
                      type: "warning",
                      variant: "tonal",
                      class: "mt-4"
                    }, {
                      default: withCtx(() => [
                        _hoisted_5$1,
                        createTextVNode(" 修改嵌入模型会导致现有的向量数据失效,建议重新上传文档。不同的嵌入模型生成的向量不兼容,可能导致检索结果不准确。 ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 512)
              ]),
              _: 1
            }),
            createVNode(VDivider),
            createVNode(VCardActions, { class: "pa-4" }, {
              default: withCtx(() => [
                createVNode(VSpacer),
                createVNode(VBtn, {
                  color: "primary",
                  variant: "elevated",
                  "prepend-icon": "mdi-content-save",
                  onClick: saveSettings,
                  loading: saving.value
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("settings.save")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(VSnackbar, {
          modelValue: snackbar.value.show,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => snackbar.value.show = $event),
          color: snackbar.value.color
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(snackbar.value.text), 1)
          ]),
          _: 1
        }, 8, ["modelValue", "color"]),
        createVNode(VDialog, {
          modelValue: embeddingChangeDialog.value,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => embeddingChangeDialog.value = $event),
          "max-width": "500px",
          persistent: ""
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "bg-warning text-white" }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { class: "mr-2" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-alert")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" 确认修改嵌入模型 ")
                  ]),
                  _: 1
                }),
                createVNode(VCardText, { class: "pa-6" }, {
                  default: withCtx(() => [
                    createVNode(VAlert, {
                      type: "warning",
                      variant: "tonal",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        _hoisted_6$1,
                        createTextVNode(" 修改嵌入模型将导致以下影响: ")
                      ]),
                      _: 1
                    }),
                    _hoisted_7$1,
                    createBaseVNode("div", _hoisted_8$1, [
                      createTextVNode(" 您确定要将嵌入模型从 "),
                      createBaseVNode("strong", null, toDisplayString(originalEmbeddingProvider.value), 1),
                      createTextVNode(" 修改为 "),
                      createBaseVNode("strong", null, toDisplayString(pendingEmbeddingProvider.value), 1),
                      createTextVNode(" 吗? ")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: cancelEmbeddingChange
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 取消 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "warning",
                      variant: "elevated",
                      onClick: confirmEmbeddingChange
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 确认修改 ")
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
});
const SettingsTab = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5ee7c6f2"]]);
const _hoisted_1 = { class: "kb-detail-page" };
const _hoisted_2 = { class: "page-header" };
const _hoisted_3 = { class: "header-content" };
const _hoisted_4 = { class: "kb-title" };
const _hoisted_5 = { class: "kb-emoji" };
const _hoisted_6 = { class: "text-h4" };
const _hoisted_7 = {
  key: 0,
  class: "text-subtitle-1 text-medium-emphasis mt-2"
};
const _hoisted_8 = {
  key: 0,
  class: "loading-container"
};
const _hoisted_9 = {
  key: 1,
  class: "kb-content"
};
const _hoisted_10 = { class: "stat-box" };
const _hoisted_11 = { class: "stat-value" };
const _hoisted_12 = { class: "stat-label" };
const _hoisted_13 = { class: "stat-box" };
const _hoisted_14 = { class: "stat-value" };
const _hoisted_15 = { class: "stat-label" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "KBDetail",
  setup(__props) {
    const { tm: t } = useModuleI18n("features/knowledge-base/detail");
    const route = useRoute();
    const kbId = ref(route.params.kbId);
    const loading = ref(true);
    const activeTab = ref("overview");
    const kb = ref({});
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
    const loadKB = async () => {
      loading.value = true;
      try {
        const response = await axios.get("/api/kb/get", {
          params: { kb_id: kbId.value }
        });
        if (response.data.status === "ok") {
          kb.value = response.data.data;
        } else {
          showSnackbar(response.data.message || "加载失败", "error");
        }
      } catch (error) {
        console.error("Failed to load knowledge base:", error);
        showSnackbar("加载知识库详情失败", "error");
      } finally {
        loading.value = false;
      }
    };
    const formatDate = (dateStr) => {
      if (!dateStr) return "-";
      const date = new Date(dateStr);
      return date.toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    onMounted(() => {
      loadKB();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(VBtn, {
            icon: "mdi-arrow-left",
            variant: "text",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push({ name: "NativeKBList" }))
          }),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("span", _hoisted_5, toDisplayString(kb.value.emoji || "📚"), 1),
              createBaseVNode("h1", _hoisted_6, toDisplayString(kb.value.kb_name), 1)
            ]),
            kb.value.description ? (openBlock(), createElementBlock("p", _hoisted_7, toDisplayString(kb.value.description), 1)) : createCommentVNode("", true)
          ])
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
          createVNode(VProgressCircular, {
            indeterminate: "",
            color: "primary",
            size: "64"
          })
        ])) : (openBlock(), createElementBlock("div", _hoisted_9, [
          createVNode(VTabs, {
            modelValue: activeTab.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => activeTab.value = $event),
            class: "mb-6",
            color: "primary"
          }, {
            default: withCtx(() => [
              createVNode(VTab, { value: "overview" }, {
                default: withCtx(() => [
                  createVNode(VIcon, { start: "" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-information-outline")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(unref(t)("tabs.overview")), 1)
                ]),
                _: 1
              }),
              createVNode(VTab, { value: "documents" }, {
                default: withCtx(() => [
                  createVNode(VIcon, { start: "" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-file-document-multiple")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(unref(t)("tabs.documents")) + " ", 1),
                  createVNode(VChip, {
                    class: "ml-2",
                    size: "small",
                    variant: "tonal"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(kb.value.doc_count || 0), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VTab, { value: "retrieval" }, {
                default: withCtx(() => [
                  createVNode(VIcon, { start: "" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-magnify")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(unref(t)("tabs.retrieval")), 1)
                ]),
                _: 1
              }),
              createVNode(VTab, { value: "settings" }, {
                default: withCtx(() => [
                  createVNode(VIcon, { start: "" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-cog")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(unref(t)("tabs.settings")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(VWindow, {
            modelValue: activeTab.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => activeTab.value = $event),
            style: { "padding": "8px" }
          }, {
            default: withCtx(() => [
              createVNode(VWindowItem, { value: "overview" }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, { elevation: "2" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)("overview.title")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(VList, { density: "comfortable" }, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-label")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(t)("overview.name")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(kb.value.kb_name), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      kb.value.description ? (openBlock(), createBlock(VListItem, { key: 0 }, {
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
                                              createTextVNode(toDisplayString(unref(t)("overview.description")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(kb.value.description), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      createVNode(VListItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-emoticon")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(t)("overview.emoji")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(kb.value.emoji || "📚"), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-calendar-plus")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(t)("overview.createdAt")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(formatDate(kb.value.created_at)), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-calendar-edit")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(t)("overview.updatedAt")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(formatDate(kb.value.updated_at)), 1)
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
                          createVNode(VCard, {
                            elevation: "2",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)("overview.stats")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createBaseVNode("div", _hoisted_10, [
                                            createVNode(VIcon, {
                                              size: "48",
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-file-document")
                                              ]),
                                              _: 1
                                            }),
                                            createBaseVNode("div", _hoisted_11, toDisplayString(kb.value.doc_count || 0), 1),
                                            createBaseVNode("div", _hoisted_12, toDisplayString(unref(t)("overview.docCount")), 1)
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createBaseVNode("div", _hoisted_13, [
                                            createVNode(VIcon, {
                                              size: "48",
                                              color: "secondary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-text-box")
                                              ]),
                                              _: 1
                                            }),
                                            createBaseVNode("div", _hoisted_14, toDisplayString(kb.value.chunk_count || 0), 1),
                                            createBaseVNode("div", _hoisted_15, toDisplayString(unref(t)("overview.chunkCount")), 1)
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
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)("overview.embeddingModel")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(VList, { density: "comfortable" }, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-vector-point")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(t)("overview.embeddingModel")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(kb.value.embedding_provider_id || unref(t)("overview.notSet")), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-sort-ascending")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(t)("overview.rerankModel")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(kb.value.rerank_provider_id || unref(t)("overview.notSet")), 1)
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
              createVNode(VWindowItem, { value: "documents" }, {
                default: withCtx(() => [
                  createVNode(DocumentsTab, {
                    "kb-id": kbId.value,
                    kb: kb.value,
                    onRefresh: loadKB
                  }, null, 8, ["kb-id", "kb"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: "retrieval" }, {
                default: withCtx(() => [
                  createVNode(RetrievalTab, {
                    "kb-id": kbId.value,
                    "kb-name": kb.value.kb_name
                  }, null, 8, ["kb-id", "kb-name"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: "settings" }, {
                default: withCtx(() => [
                  createVNode(SettingsTab, {
                    kb: kb.value,
                    onUpdated: loadKB
                  }, null, 8, ["kb"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])),
        createVNode(VSnackbar, {
          modelValue: snackbar.value.show,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => snackbar.value.show = $event),
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
const KBDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0c2ef8bc"]]);
export {
  KBDetail as default
};
