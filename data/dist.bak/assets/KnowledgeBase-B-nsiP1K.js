import { _ as _export_sfc, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, d as createTextVNode, aR as VBanner, t as toDisplayString, l as VIcon, e as VBtn, S as withDirectives, W as vShow, h as createBlock, i as createCommentVNode, F as Fragment, r as renderList, a0 as withModifiers, s as VCard, a6 as VCardTitle, v as VCardText, aK as VForm, j as VTextField, aL as VTextarea, f as VSelect, a9 as VCardActions, V as VSpacer, ai as VDialog, g as VChip, p as VTabs, n as VTab, A as VWindow, q as VWindowItem, a7 as VTooltip, a2 as mergeProps, y as VProgressLinear, k as VAlert, ab as VRow, ad as VCol, a8 as VSwitch, an as withKeys, am as VSnackbar, B as axios, u as useModuleI18n, C as resolveComponent, ap as pushScopeId, aq as popScopeId, o as openBlock } from "./index-C6xMvtNz.js";
import { C as ConsoleDisplayer } from "./ConsoleDisplayer-oxaN4haB.js";
import { n as normalizeTextInput } from "./inputValue-BqQtgRan.js";
import "./eventsource-BRykmeMV.js";
const _sfc_main = {
  name: "KnowledgeBase",
  components: {
    ConsoleDisplayer
  },
  setup() {
    const { tm } = useModuleI18n("features/alkaid/knowledge-base");
    return { tm };
  },
  data() {
    return {
      installed: true,
      installing: false,
      kbCollections: [],
      showCreateDialog: false,
      showEmojiPicker: false,
      newKB: {
        name: "",
        emoji: "🙂",
        description: "",
        embedding_provider_id: null,
        rerank_provider_id: null
      },
      snackbar: {
        show: false,
        text: "",
        color: "success"
      },
      emojiCategories: [
        {
          key: "emotions",
          emojis: ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘"]
        },
        {
          key: "animals",
          emojis: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐸", "🐵"]
        },
        {
          key: "food",
          emojis: ["🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🥭", "🍍", "🥥"]
        },
        {
          key: "activities",
          emojis: ["⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🎱", "🏓", "🏸", "🥅", "🏒", "🏑", "🥍"]
        },
        {
          key: "travel",
          emojis: ["🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚓", "🚑", "🚒", "🚐", "🚚", "🚛", "🚜", "🛴", "🚲"]
        },
        {
          key: "symbols",
          emojis: ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗"]
        }
      ],
      showContentDialog: false,
      currentKB: {
        collection_name: "",
        emoji: ""
      },
      activeTab: "import",
      dataSource: "file",
      dataSourceOptions: [
        { title: "从文件", value: "file", icon: "mdi-file-upload" },
        { title: "从URL", value: "url", icon: "mdi-web" }
      ],
      selectedFile: null,
      chunkSize: null,
      overlap: null,
      uploading: false,
      searchQuery: "",
      searchResults: [],
      searching: false,
      searchPerformed: false,
      topK: 5,
      showDeleteDialog: false,
      deleteTarget: {
        collection_name: ""
      },
      deleting: false,
      embeddingProviderConfigs: [],
      rerankProviderConfigs: [],
      llmProviderConfigs: [],
      // URL导入相关数据
      importUrl: "",
      importOptions: {
        use_llm_repair: true,
        use_clustering_summary: false,
        repair_llm_provider_id: null,
        summarize_llm_provider_id: null,
        embedding_provider_id: null,
        chunk_size: 300,
        chunk_overlap: 50
      },
      importing: false,
      pollingInterval: null,
      // 插件更新相关
      checkingUpdate: false,
      updatingPlugin: false,
      pluginHasUpdate: false,
      pluginCurrentVersion: "",
      pluginLatestVersion: ""
    };
  },
  computed: {
    optionalSelectorColWidth() {
      const repairOn = this.importOptions.use_llm_repair;
      const summaryOn = this.importOptions.use_clustering_summary;
      if (repairOn && summaryOn) {
        return 6;
      }
      return 12;
    }
  },
  watch: {
    llmProviderConfigs: {
      handler(newVal) {
        if (newVal && newVal.length > 0) {
          if (!this.importOptions.repair_llm_provider_id) {
            this.importOptions.repair_llm_provider_id = newVal[0].id;
          }
          if (!this.importOptions.summarize_llm_provider_id) {
            this.importOptions.summarize_llm_provider_id = newVal[0].id;
          }
        }
      },
      immediate: true,
      deep: true
    },
    embeddingProviderConfigs: {
      handler(newVal) {
        if (newVal && newVal.length > 0) {
          if (!this.importOptions.embedding_provider_id) {
            this.importOptions.embedding_provider_id = newVal[0].id;
          }
        }
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    this.checkPlugin();
    this.getProviderList();
  },
  methods: {
    onSearchQueryInput(value) {
      this.searchQuery = normalizeTextInput(value);
    },
    getSelectedGitHubProxy() {
      if (typeof window === "undefined" || !window.localStorage) return "";
      return localStorage.getItem("githubProxyRadioValue") === "1" ? localStorage.getItem("selectedGitHubProxy") || "" : "";
    },
    llmModelProps(providerConfig) {
      return {
        title: providerConfig.llm_model || providerConfig.id,
        subtitle: `Provider ID: ${providerConfig.id}`
      };
    },
    embeddingModelProps(providerConfig) {
      return {
        title: providerConfig.embedding_model,
        subtitle: this.tm("createDialog.providerInfo", {
          id: providerConfig.id,
          dimensions: providerConfig.embedding_dimensions
        })
      };
    },
    rerankModelProps(providerConfig) {
      return {
        title: providerConfig.rerank_model,
        subtitle: this.tm("createDialog.rerankProviderInfo", {
          id: providerConfig.id
        })
      };
    },
    checkPlugin() {
      axios.get("/api/plugin/get?name=astrbot_plugin_knowledge_base").then((response) => {
        if (response.data.status !== "ok" || response.data.data.length === 0) {
          this.showSnackbar(this.tm("messages.pluginNotAvailable"), "error");
          this.installed = false;
          return;
        }
        if (!response.data.data[0].activated) {
          this.showSnackbar(this.tm("messages.pluginNotActivated"), "error");
          return;
        }
        if (response.data.data.length > 0) {
          this.installed = true;
          this.pluginCurrentVersion = response.data.data[0].version || "未知";
          this.getKBCollections();
          this.checkPluginUpdate();
        } else {
          this.installed = false;
        }
      }).catch((error) => {
        console.error("Error checking plugin:", error);
        this.showSnackbar(this.tm("messages.checkPluginFailed"), "error");
      });
    },
    async checkPluginUpdate() {
      this.checkingUpdate = true;
      this.pluginHasUpdate = false;
      try {
        const onlineResponse = await axios.get("/api/plugin/market_list");
        if (onlineResponse.data.status === "ok") {
          const knowledgeBasePlugin = onlineResponse.data.data["astrbot_plugin_knowledge_base"];
          if (knowledgeBasePlugin) {
            this.pluginLatestVersion = knowledgeBasePlugin.version || "未知";
            if (this.pluginCurrentVersion && this.pluginLatestVersion && this.pluginCurrentVersion !== "未知" && this.pluginLatestVersion !== "未知") {
              this.pluginHasUpdate = this.pluginCurrentVersion != this.pluginLatestVersion;
            }
            if (this.pluginHasUpdate) {
              this.showSnackbar(this.tm("messages.updateAvailable", {
                current: this.pluginCurrentVersion,
                latest: this.pluginLatestVersion
              }), "info");
            } else {
              this.showSnackbar(this.tm("messages.pluginUpToDate"), "success");
            }
          } else {
            this.showSnackbar(this.tm("messages.pluginNotFoundInMarket"), "warning");
          }
        } else {
          this.showSnackbar(this.tm("messages.checkUpdateFailed"), "error");
        }
      } catch (error) {
        console.error("Error checking plugin update:", error);
        this.showSnackbar(this.tm("messages.checkUpdateFailed"), "error");
      } finally {
        this.checkingUpdate = false;
      }
    },
    async updatePlugin() {
      this.updatingPlugin = true;
      try {
        const response = await axios.post("/api/plugin/update", {
          name: "astrbot_plugin_knowledge_base",
          proxy: this.getSelectedGitHubProxy()
        });
        if (response.data.status === "ok") {
          this.showSnackbar(this.tm("messages.updateSuccess"), "success");
          this.pluginHasUpdate = false;
          this.pluginCurrentVersion = this.pluginLatestVersion;
          this.checkPlugin();
        } else {
          this.showSnackbar(response.data.message || this.tm("messages.updateFailed"), "error");
        }
      } catch (error) {
        console.error("Error updating plugin:", error);
        this.showSnackbar(this.tm("messages.updatePluginFailed"), "error");
      } finally {
        this.updatingPlugin = false;
      }
    },
    installPlugin() {
      this.installing = true;
      axios.post("/api/plugin/install", {
        url: "https://github.com/lxfight/astrbot_plugin_knowledge_base",
        proxy: this.getSelectedGitHubProxy()
      }).then((response) => {
        if (response.data.status === "ok") {
          this.checkPlugin();
        } else {
          this.showSnackbar(response.data.message || this.tm("messages.installFailed"), "error");
        }
      }).catch((error) => {
        console.error("Error installing plugin:", error);
        this.showSnackbar(this.tm("messages.installPluginFailed"), "error");
      }).finally(() => {
        this.installing = false;
      });
    },
    getKBCollections() {
      axios.get("/api/plug/alkaid/kb/collections").then((response) => {
        if (response.data.status !== "ok") {
          this.showSnackbar(response.data.message || this.tm("messages.getKnowledgeBaseListFailed"), "error");
          return;
        }
        this.kbCollections = response.data.data;
      }).catch((error) => {
        console.error("Error fetching knowledge base collections:", error);
        this.showSnackbar(this.tm("messages.getKnowledgeBaseListFailed"), "error");
      });
    },
    createCollection(name, emoji, description) {
      if (this.newKB.embedding_provider_id && typeof this.newKB.embedding_provider_id === "object") {
        this.newKB.embedding_provider_id = this.newKB.embedding_provider_id.id || "";
      }
      if (this.newKB.rerank_provider_id && typeof this.newKB.rerank_provider_id === "object") {
        this.newKB.rerank_provider_id = this.newKB.rerank_provider_id.id || "";
      }
      axios.post("/api/plug/alkaid/kb/create_collection", {
        collection_name: name,
        emoji,
        description,
        embedding_provider_id: this.newKB.embedding_provider_id || "",
        rerank_provider_id: this.newKB.rerank_provider_id || ""
      }).then((response) => {
        if (response.data.status === "ok") {
          this.showSnackbar(this.tm("messages.knowledgeBaseCreated"));
          this.getKBCollections();
          this.showCreateDialog = false;
          this.resetNewKB();
        } else {
          this.showSnackbar(response.data.message || this.tm("messages.createFailed"), "error");
        }
      }).catch((error) => {
        console.error("Error creating knowledge base collection:", error);
        this.showSnackbar(this.tm("messages.createKnowledgeBaseFailed"), "error");
      });
    },
    submitCreateForm() {
      if (!this.newKB.name) {
        this.showSnackbar(this.tm("messages.pleaseEnterKnowledgeBaseName"), "warning");
        return;
      }
      this.createCollection(
        this.newKB.name,
        this.newKB.emoji || "🙂",
        this.newKB.description,
        this.newKB.embedding_provider_id || ""
      );
    },
    resetNewKB() {
      this.newKB = {
        name: "",
        emoji: "🙂",
        description: "",
        embedding_provider: ""
      };
    },
    openKnowledgeBase(kb) {
      this.currentKB = kb;
      this.showContentDialog = true;
      this.resetContentDialog();
    },
    resetContentDialog() {
      this.activeTab = "import";
      this.dataSource = "file";
      this.selectedFile = null;
      this.searchQuery = "";
      this.searchResults = [];
      this.searchPerformed = false;
      this.chunkSize = null;
      this.overlap = null;
      this.importUrl = "";
      this.importing = false;
      if (this.pollingInterval) {
        clearInterval(this.pollingInterval);
        this.pollingInterval = null;
      }
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    onFileSelected(event) {
      const files = event.target.files;
      if (files.length > 0) {
        this.selectedFile = files[0];
      }
      event.target.value = "";
    },
    onFileDrop(event) {
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        this.selectedFile = files[0];
      }
    },
    getFileIcon(filename) {
      const extension = filename.split(".").pop().toLowerCase();
      switch (extension) {
        case "pdf":
          return "mdi-file-pdf-box";
        case "epub":
          return "mdi-book-open-page-variant";
        case "doc":
        case "docx":
          return "mdi-file-word-box";
        case "xls":
        case "xlsx":
          return "mdi-file-excel-box";
        case "ppt":
        case "pptx":
          return "mdi-file-powerpoint-box";
        case "txt":
          return "mdi-file-document-outline";
        default:
          return "mdi-file-outline";
      }
    },
    uploadFile() {
      if (!this.selectedFile) {
        this.showSnackbar(this.tm("messages.pleaseSelectFile"), "warning");
        return;
      }
      this.uploading = true;
      const formData = new FormData();
      formData.append("file", this.selectedFile);
      formData.append("collection_name", this.currentKB.collection_name);
      if (this.chunkSize && this.chunkSize > 0) {
        formData.append("chunk_size", this.chunkSize);
      }
      if (this.overlap && this.overlap >= 0) {
        formData.append("chunk_overlap", this.overlap);
      }
      axios.post("/api/plug/alkaid/kb/collection/add_file", formData).then((response) => {
        if (response.data.status === "ok") {
          this.showSnackbar(this.tm("messages.operationSuccess", { message: response.data.message }));
          this.selectedFile = null;
          this.getKBCollections();
        } else {
          this.showSnackbar(response.data.message || this.tm("messages.uploadFailed"), "error");
        }
      }).catch((error) => {
        console.error("Error uploading file:", error);
        this.showSnackbar(this.tm("messages.fileUploadFailed"), "error");
      }).finally(() => {
        this.uploading = false;
      });
    },
    searchKnowledgeBase() {
      const query = normalizeTextInput(this.searchQuery).trim();
      if (!query) {
        this.showSnackbar(this.tm("messages.pleaseEnterSearchContent"), "warning");
        return;
      }
      this.searching = true;
      this.searchPerformed = true;
      axios.get(`/api/plug/alkaid/kb/collection/search`, {
        params: {
          collection_name: this.currentKB.collection_name,
          query,
          top_k: this.topK
        }
      }).then((response) => {
        if (response.data.status === "ok") {
          this.searchResults = response.data.data || [];
          if (this.searchResults.length === 0) {
            this.showSnackbar(this.tm("messages.noMatchingContent"), "info");
          }
        } else {
          this.showSnackbar(response.data.message || this.tm("messages.searchFailed"), "error");
          this.searchResults = [];
        }
      }).catch((error) => {
        console.error("Error searching knowledge base:", error);
        this.showSnackbar(this.tm("messages.searchKnowledgeBaseFailed"), "error");
        this.searchResults = [];
      }).finally(() => {
        this.searching = false;
      });
    },
    showSnackbar(text, color = "success") {
      this.snackbar.text = text;
      this.snackbar.color = color;
      this.snackbar.show = true;
    },
    selectEmoji(emoji) {
      this.newKB.emoji = emoji;
      this.showEmojiPicker = false;
    },
    confirmDelete(kb) {
      this.deleteTarget = kb;
      this.showDeleteDialog = true;
    },
    deleteKnowledgeBase() {
      if (!this.deleteTarget.collection_name) {
        this.showSnackbar(this.tm("messages.deleteTargetNotExists"), "error");
        return;
      }
      this.deleting = true;
      axios.get("/api/plug/alkaid/kb/collection/delete", {
        params: {
          collection_name: this.deleteTarget.collection_name
        }
      }).then((response) => {
        if (response.data.status === "ok") {
          this.showSnackbar(this.tm("messages.knowledgeBaseDeleted"));
          this.getKBCollections();
          this.showDeleteDialog = false;
        } else {
          this.showSnackbar(response.data.message || this.tm("messages.deleteFailed"), "error");
        }
      }).catch((error) => {
        console.error("Error deleting knowledge base:", error);
        this.showSnackbar(this.tm("messages.deleteKnowledgeBaseFailed"), "error");
      }).finally(() => {
        this.deleting = false;
      });
    },
    getProviderList() {
      axios.get("/api/config/provider/list", {
        params: {
          provider_type: "embedding,rerank,chat_completion"
        }
      }).then((response) => {
        if (response.data.status === "ok") {
          this.embeddingProviderConfigs = response.data.data.filter((provider) => provider.provider_type === "embedding");
          this.rerankProviderConfigs = response.data.data.filter((provider) => provider.provider_type === "rerank");
          this.llmProviderConfigs = response.data.data.filter((provider) => provider.provider_type === "chat_completion");
        } else {
          this.showSnackbar(response.data.message || this.tm("messages.getEmbeddingModelListFailed"), "error");
          return [];
        }
      }).catch((error) => {
        console.error("Error fetching embedding providers:", error);
        this.showSnackbar(this.tm("messages.getEmbeddingModelListFailed"), "error");
        return [];
      });
    },
    openUrl(url) {
      window.open(url, "_blank");
    },
    // URL导入相关方法
    async startImportFromUrl() {
      var _a, _b;
      if (!this.importUrl) {
        this.showSnackbar("Please enter a URL", "warning");
        return;
      }
      this.importing = true;
      try {
        const payload = {
          url: this.importUrl,
          ...Object.fromEntries(Object.entries(this.importOptions).filter(([_, v]) => v !== "" && v !== null && v !== void 0))
        };
        console.log("Starting URL import with payload:", JSON.stringify(payload, null, 2));
        const addTaskResponse = await axios.post("/api/plug/url_2_kb/add", payload);
        if (!addTaskResponse.data.task_id) {
          throw new Error(addTaskResponse.data.message || "Failed to start import task: No task_id received.");
        }
        const taskId = addTaskResponse.data.task_id;
        this.pollTaskStatus(taskId);
      } catch (error) {
        const errorMessage = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message || "An unknown error occurred.";
        this.showSnackbar(`Error: ${errorMessage}`, "error");
        this.importing = false;
      }
    },
    pollTaskStatus(taskId) {
      this.pollingInterval = setInterval(async () => {
        var _a, _b;
        try {
          const statusResponse = await axios.post(`/api/plug/url_2_kb/status`, { task_id: taskId });
          const taskData = statusResponse.data;
          const taskStatus = taskData.status;
          if (taskStatus === "completed") {
            clearInterval(this.pollingInterval);
            this.pollingInterval = null;
            this.showSnackbar(this.tm("importFromUrl.uploadingChunks"), "info");
            this.handleImportResult(taskData);
          } else if (taskStatus === "failed") {
            clearInterval(this.pollingInterval);
            this.pollingInterval = null;
            const failureReason = taskData.result || "Unknown reason.";
            this.showSnackbar(`${this.tm("importFromUrl.importFailed")}: ${failureReason}`, "error");
            this.importing = false;
          }
        } catch (error) {
          clearInterval(this.pollingInterval);
          this.pollingInterval = null;
          const errorMessage = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message || "An unknown error occurred during polling.";
          this.showSnackbar(`Polling Error: ${errorMessage}`, "error");
          this.importing = false;
        }
      }, 3e3);
    },
    async handleImportResult(data) {
      const chunks = [];
      const result = data.result;
      if (result.overall_summary) {
        chunks.push({ content: result.overall_summary, filename: "overall_summary.txt" });
      }
      if (result.topics && result.topics.length > 0) {
        result.topics.forEach((topic) => {
          if (topic.topic_summary) {
            chunks.push({ content: topic.topic_summary, filename: `topic_${topic.topic_id}_summary.txt` });
          }
        });
      }
      if (result.noise_points && result.noise_points.length > 0) {
        result.noise_points.forEach((point, index) => {
          const content = typeof point === "object" && point.text ? point.text : point;
          chunks.push({ content, filename: `noise_${index + 1}.txt` });
        });
      }
      if (chunks.length === 0) {
        this.showSnackbar("URL processed, but no text chunks were extracted.", "info");
        this.importing = false;
        return;
      }
      let successCount = 0;
      let failCount = 0;
      for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        try {
          await this.uploadChunkAsFile(chunk.content, chunk.filename);
          successCount++;
        } catch (error) {
          failCount++;
        }
      }
      if (failCount === 0) {
        this.showSnackbar(this.tm("importFromUrl.allChunksUploaded"), "success");
      } else if (successCount > 0) {
        this.showSnackbar("Import partially complete. See console for details.", "warning");
      } else {
        this.showSnackbar("Import failed. No chunks were uploaded.", "error");
      }
      this.importing = false;
      this.getKBCollections();
    },
    async uploadChunkAsFile(content, filename) {
      const blob = new Blob([content], { type: "text/plain" });
      const file = new File([blob], filename, { type: "text/plain" });
      const formData = new FormData();
      formData.append("file", file);
      formData.append("collection_name", this.currentKB.collection_name);
      if (this.importOptions.chunk_size && this.importOptions.chunk_size > 0) {
        formData.append("chunk_size", this.importOptions.chunk_size);
      }
      if (this.importOptions.chunk_overlap && this.importOptions.chunk_overlap >= 0) {
        formData.append("chunk_overlap", this.importOptions.chunk_overlap);
      }
      const response = await axios.post("/api/plug/alkaid/kb/collection/add_file", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if (response.data.status !== "ok") {
        throw new Error(response.data.message || "Chunk upload failed");
      }
      return response.data;
    }
  },
  beforeUnmount() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-e0feea0a"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "knowledge-base-view flex-grow-1",
  style: { "display": "flex", "flex-direction": "column", "height": "100%" }
};
const _hoisted_2 = { style: { "flex-grow": "1", "width": "100%", "border": "1px solid #eee", "border-radius": "8px", "padding": "16px" } };
const _hoisted_3 = {
  key: 0,
  class: "d-flex align-center justify-center flex-column",
  style: { "flex-grow": "1", "width": "100%", "height": "100%" }
};
const _hoisted_4 = {
  key: 1,
  class: "d-flex align-center justify-center flex-column",
  style: { "flex-grow": "1", "width": "100%", "height": "100%" }
};
const _hoisted_5 = { key: 2 };
const _hoisted_6 = { class: "mb-4" };
const _hoisted_7 = { class: "kb-grid" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "book-spine" }, null, -1));
const _hoisted_10 = { class: "book-content" };
const _hoisted_11 = { class: "emoji-container" };
const _hoisted_12 = { class: "kb-emoji" };
const _hoisted_13 = { class: "kb-name" };
const _hoisted_14 = { class: "kb-count" };
const _hoisted_15 = { class: "kb-actions" };
const _hoisted_16 = { style: { "width": "100%", "display": "flex", "align-items": "center", "justify-content": "center" } };
const _hoisted_17 = { class: "emoji-picker" };
const _hoisted_18 = { class: "text-subtitle-2 mb-2" };
const _hoisted_19 = { class: "emoji-grid" };
const _hoisted_20 = ["onClick"];
const _hoisted_21 = { class: "me-2 emoji-sm" };
const _hoisted_22 = {
  key: 0,
  class: "px-6 py-2"
};
const _hoisted_23 = { style: { "margin-left": "8px" } };
const _hoisted_24 = { class: "import-container pa-4" };
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "mb-8" }, [
  /* @__PURE__ */ createBaseVNode("h2", null, "导入数据"),
  /* @__PURE__ */ createBaseVNode("p", { class: "text-subtitle-1" }, "选择数据源并导入内容到知识库")
], -1));
const _hoisted_26 = {
  key: 0,
  class: "mt-4"
};
const _hoisted_27 = { class: "mt-2" };
const _hoisted_28 = { class: "text-subtitle-1 font-weight-bold" };
const _hoisted_29 = {
  class: "d-flex flex-wrap",
  style: { "gap": "8px" }
};
const _hoisted_30 = {
  key: 0,
  class: "selected-files mt-4"
};
const _hoisted_31 = {
  type: "info",
  variant: "tonal",
  class: "d-flex align-center"
};
const _hoisted_32 = { style: { "font-weight": "1000" } };
const _hoisted_33 = { class: "text-center mt-4" };
const _hoisted_34 = {
  key: 1,
  class: "upload-progress mt-4"
};
const _hoisted_35 = {
  key: 1,
  class: "from-url-container"
};
const _hoisted_36 = { class: "text-subtitle-1 font-weight-bold" };
const _hoisted_37 = { class: "text-center" };
const _hoisted_38 = { class: "search-container pa-4" };
const _hoisted_39 = { class: "search-results mt-4" };
const _hoisted_40 = { key: 0 };
const _hoisted_41 = { class: "text-center mt-4" };
const _hoisted_42 = { key: 1 };
const _hoisted_43 = { class: "mb-2" };
const _hoisted_44 = { class: "d-flex align-center mb-2" };
const _hoisted_45 = { class: "text-caption text-medium-emphasis" };
const _hoisted_46 = { class: "search-content" };
const _hoisted_47 = { key: 2 };
const _hoisted_48 = { class: "text-red" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ConsoleDisplayer = resolveComponent("ConsoleDisplayer");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(VBanner, { lines: "one" }, {
        text: withCtx(() => [
          createTextVNode(" 建议您更换使用新版知识库功能。 ")
        ]),
        _: 1
      }),
      !$data.installed ? (openBlock(), createElementBlock("div", _hoisted_3, [
        createBaseVNode("h2", null, [
          createTextVNode(toDisplayString($setup.tm("notInstalled.title")) + " ", 1),
          createVNode(VIcon, {
            class: "ml-2",
            size: "small",
            color: "grey",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.openUrl("/help"))
          }, {
            default: withCtx(() => [
              createTextVNode("mdi-information-outline")
            ]),
            _: 1
          })
        ]),
        createVNode(VBtn, {
          style: { "margin-top": "16px" },
          variant: "tonal",
          color: "primary",
          onClick: $options.installPlugin,
          loading: $data.installing
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($setup.tm("notInstalled.install")), 1)
          ]),
          _: 1
        }, 8, ["onClick", "loading"]),
        withDirectives(createVNode(_component_ConsoleDisplayer, {
          style: { "max-height": "300px", "margin-top": "16px", "max-width": "100%" },
          "show-level-btns": false
        }, null, 512), [
          [vShow, $data.installing]
        ])
      ])) : $data.kbCollections.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
        createBaseVNode("h2", null, toDisplayString($setup.tm("empty.title")), 1),
        createVNode(VBtn, {
          style: { "margin-top": "16px" },
          variant: "tonal",
          color: "primary",
          onClick: _cache[1] || (_cache[1] = ($event) => $data.showCreateDialog = true)
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($setup.tm("empty.create")), 1)
          ]),
          _: 1
        })
      ])) : (openBlock(), createElementBlock("div", _hoisted_5, [
        createBaseVNode("h2", _hoisted_6, [
          createTextVNode(toDisplayString($setup.tm("list.title")) + " ", 1),
          createVNode(VIcon, {
            class: "ml-2",
            size: "x-small",
            color: "grey",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.openUrl("/help"))
          }, {
            default: withCtx(() => [
              createTextVNode("mdi-information-outline")
            ]),
            _: 1
          })
        ]),
        createVNode(VBtn, {
          class: "mb-4",
          "prepend-icon": "mdi-plus",
          variant: "tonal",
          color: "primary",
          onClick: _cache[3] || (_cache[3] = ($event) => $data.showCreateDialog = true)
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($setup.tm("list.create")), 1)
          ]),
          _: 1
        }),
        createVNode(VBtn, {
          class: "mb-4 ml-4",
          "prepend-icon": "mdi-cog",
          variant: "tonal",
          color: "success",
          onClick: _cache[4] || (_cache[4] = ($event) => _ctx.$router.push("/extension?open_config=astrbot_plugin_knowledge_base"))
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($setup.tm("list.config")), 1)
          ]),
          _: 1
        }),
        createVNode(VBtn, {
          class: "mb-4 ml-4",
          "prepend-icon": "mdi-update",
          variant: "tonal",
          color: "warning",
          onClick: $options.checkPluginUpdate,
          loading: $data.checkingUpdate
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($setup.tm("list.checkUpdate")), 1)
          ]),
          _: 1
        }, 8, ["onClick", "loading"]),
        $data.pluginHasUpdate ? (openBlock(), createBlock(VBtn, {
          key: 0,
          class: "mb-4 ml-4",
          "prepend-icon": "mdi-download",
          variant: "tonal",
          color: "primary",
          onClick: $options.updatePlugin,
          loading: $data.updatingPlugin
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($setup.tm("list.updatePlugin", { version: $data.pluginLatestVersion })), 1)
          ]),
          _: 1
        }, 8, ["onClick", "loading"])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.kbCollections, (kb, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "kb-card",
              onClick: ($event) => $options.openKnowledgeBase(kb)
            }, [
              _hoisted_9,
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("span", _hoisted_12, toDisplayString(kb.emoji || "🙂"), 1)
                ]),
                createBaseVNode("div", _hoisted_13, toDisplayString(kb.collection_name), 1),
                createBaseVNode("div", _hoisted_14, toDisplayString(kb.count || 0) + " " + toDisplayString($setup.tm("list.knowledgeCount")), 1),
                createBaseVNode("div", _hoisted_15, [
                  createVNode(VBtn, {
                    icon: "",
                    variant: "text",
                    size: "small",
                    color: "error",
                    onClick: withModifiers(($event) => $options.confirmDelete(kb), ["stop"])
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
              ])
            ], 8, _hoisted_8);
          }), 128))
        ])
      ]))
    ]),
    createVNode(VDialog, {
      modelValue: $data.showCreateDialog,
      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.showCreateDialog = $event),
      "max-width": "500px"
    }, {
      default: withCtx(() => [
        createVNode(VCard, null, {
          default: withCtx(() => [
            createVNode(VCardTitle, { class: "text-h4" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($setup.tm("createDialog.title")), 1)
              ]),
              _: 1
            }),
            createVNode(VCardText, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("span", {
                    id: "emoji-display",
                    onClick: _cache[5] || (_cache[5] = ($event) => $data.showEmojiPicker = true)
                  }, toDisplayString($data.newKB.emoji || "🙂"), 1)
                ]),
                createVNode(VForm, {
                  onSubmit: withModifiers($options.submitCreateForm, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createVNode(VTextField, {
                      variant: "outlined",
                      modelValue: $data.newKB.name,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.newKB.name = $event),
                      label: $setup.tm("createDialog.nameLabel"),
                      required: ""
                    }, null, 8, ["modelValue", "label"]),
                    createVNode(VTextarea, {
                      modelValue: $data.newKB.description,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.newKB.description = $event),
                      label: $setup.tm("createDialog.descriptionLabel"),
                      variant: "outlined",
                      placeholder: $setup.tm("createDialog.descriptionPlaceholder"),
                      rows: "3"
                    }, null, 8, ["modelValue", "label", "placeholder"]),
                    createVNode(VSelect, {
                      modelValue: $data.newKB.embedding_provider_id,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.newKB.embedding_provider_id = $event),
                      items: $data.embeddingProviderConfigs,
                      "item-props": $options.embeddingModelProps,
                      label: $setup.tm("createDialog.embeddingModelLabel"),
                      variant: "outlined",
                      density: "comfortable"
                    }, null, 8, ["modelValue", "items", "item-props", "label"]),
                    createVNode(VSelect, {
                      modelValue: $data.newKB.rerank_provider_id,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.newKB.rerank_provider_id = $event),
                      items: $data.rerankProviderConfigs,
                      "item-props": $options.rerankModelProps,
                      label: $setup.tm("createDialog.rerankModelLabel"),
                      variant: "outlined",
                      density: "comfortable"
                    }, null, 8, ["modelValue", "items", "item-props", "label"]),
                    createBaseVNode("small", null, toDisplayString($setup.tm("createDialog.tips")), 1)
                  ]),
                  _: 1
                }, 8, ["onSubmit"])
              ]),
              _: 1
            }),
            createVNode(VCardActions, null, {
              default: withCtx(() => [
                createVNode(VSpacer),
                createVNode(VBtn, {
                  color: "error",
                  variant: "text",
                  onClick: _cache[10] || (_cache[10] = ($event) => $data.showCreateDialog = false)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.tm("createDialog.cancel")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VBtn, {
                  color: "primary",
                  variant: "text",
                  onClick: $options.submitCreateForm
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.tm("createDialog.create")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
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
      modelValue: $data.showEmojiPicker,
      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $data.showEmojiPicker = $event),
      "max-width": "400px"
    }, {
      default: withCtx(() => [
        createVNode(VCard, null, {
          default: withCtx(() => [
            createVNode(VCardTitle, { class: "text-h6" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($setup.tm("emojiPicker.title")), 1)
              ]),
              _: 1
            }),
            createVNode(VCardText, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_17, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($data.emojiCategories, (category, catIndex) => {
                    return openBlock(), createElementBlock("div", {
                      key: catIndex,
                      class: "mb-4"
                    }, [
                      createBaseVNode("div", _hoisted_18, toDisplayString($setup.tm(`emojiPicker.categories.${category.key}`)), 1),
                      createBaseVNode("div", _hoisted_19, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(category.emojis, (emoji, emojiIndex) => {
                          return openBlock(), createElementBlock("div", {
                            key: emojiIndex,
                            class: "emoji-item",
                            onClick: ($event) => $options.selectEmoji(emoji)
                          }, toDisplayString(emoji), 9, _hoisted_20);
                        }), 128))
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              _: 1
            }),
            createVNode(VCardActions, null, {
              default: withCtx(() => [
                createVNode(VSpacer),
                createVNode(VBtn, {
                  color: "primary",
                  variant: "text",
                  onClick: _cache[12] || (_cache[12] = ($event) => $data.showEmojiPicker = false)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.tm("emojiPicker.close")), 1)
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
      modelValue: $data.showContentDialog,
      "onUpdate:modelValue": _cache[34] || (_cache[34] = ($event) => $data.showContentDialog = $event),
      "max-width": "1000px"
    }, {
      default: withCtx(() => [
        createVNode(VCard, null, {
          default: withCtx(() => [
            createVNode(VCardTitle, { class: "d-flex align-center" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_21, toDisplayString($data.currentKB.emoji || "🙂"), 1),
                createBaseVNode("span", null, toDisplayString($data.currentKB.collection_name) + " - " + toDisplayString($setup.tm("contentDialog.title")), 1),
                createVNode(VSpacer),
                createVNode(VBtn, {
                  variant: "plain",
                  icon: "",
                  onClick: _cache[14] || (_cache[14] = ($event) => $data.showContentDialog = false)
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
              _: 1
            }),
            $data.currentKB._embedding_provider_config ? (openBlock(), createElementBlock("div", _hoisted_22, [
              createVNode(VChip, {
                class: "mr-2",
                color: "primary",
                variant: "tonal",
                size: "small",
                rounded: "sm"
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    start: "",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-database")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString($setup.tm("contentDialog.embeddingModel")) + ": " + toDisplayString($data.currentKB._embedding_provider_config.embedding_model), 1)
                ]),
                _: 1
              }),
              $data.currentKB.rerank_provider_id ? (openBlock(), createBlock(VChip, {
                key: 0,
                color: "tertiary",
                variant: "tonal",
                size: "small",
                rounded: "sm"
              }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode(VIcon, {
                      start: "",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-sort-variant")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" 重排序模型: " + toDisplayString(((_a = $data.rerankProviderConfigs.find((provider) => provider.id === $data.currentKB.rerank_provider_id)) == null ? void 0 : _a.rerank_model) || "未设置"), 1)
                  ];
                }),
                _: 1
              })) : createCommentVNode("", true),
              createBaseVNode("small", _hoisted_23, '💡 使用方式: 在聊天页中输入 "/kb use ' + toDisplayString($data.currentKB.collection_name) + '"', 1)
            ])) : createCommentVNode("", true),
            createVNode(VCardText, null, {
              default: withCtx(() => [
                createVNode(VTabs, {
                  modelValue: $data.activeTab,
                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $data.activeTab = $event)
                }, {
                  default: withCtx(() => [
                    createVNode(VTab, { value: "import" }, {
                      default: withCtx(() => [
                        createTextVNode("导入数据")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "search" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($setup.tm("contentDialog.tabs.search")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(VWindow, {
                  modelValue: $data.activeTab,
                  "onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => $data.activeTab = $event),
                  class: "mt-4"
                }, {
                  default: withCtx(() => [
                    createVNode(VWindowItem, { value: "import" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_24, [
                          _hoisted_25,
                          createVNode(VSelect, {
                            modelValue: $data.dataSource,
                            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $data.dataSource = $event),
                            items: $data.dataSourceOptions,
                            label: "数据源选择",
                            variant: "outlined",
                            "item-title": "title",
                            "item-value": "value",
                            "prepend-inner-icon": "mdi-database"
                          }, null, 8, ["modelValue", "items"]),
                          $data.dataSource === "file" ? (openBlock(), createElementBlock("div", _hoisted_26, [
                            createBaseVNode("div", {
                              class: "upload-zone",
                              onDragover: _cache[18] || (_cache[18] = withModifiers(() => {
                              }, ["prevent"])),
                              onDrop: _cache[19] || (_cache[19] = withModifiers((...args) => $options.onFileDrop && $options.onFileDrop(...args), ["prevent"])),
                              onClick: _cache[20] || (_cache[20] = (...args) => $options.triggerFileInput && $options.triggerFileInput(...args))
                            }, [
                              createBaseVNode("input", {
                                type: "file",
                                ref: "fileInput",
                                style: { "display": "none" },
                                onChange: _cache[17] || (_cache[17] = (...args) => $options.onFileSelected && $options.onFileSelected(...args))
                              }, null, 544),
                              createVNode(VIcon, {
                                size: "48",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-cloud-upload")
                                ]),
                                _: 1
                              }),
                              createBaseVNode("p", _hoisted_27, toDisplayString($setup.tm("upload.dropzone")), 1)
                            ], 32),
                            createVNode(VCard, {
                              class: "mt-4 chunk-settings-card",
                              variant: "outlined",
                              color: "grey-lighten-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "pa-4 pb-0 d-flex align-center" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "primary",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-puzzle-outline")
                                      ]),
                                      _: 1
                                    }),
                                    createBaseVNode("span", _hoisted_28, toDisplayString($setup.tm("upload.chunkSettings.title")), 1),
                                    createVNode(VTooltip, { location: "top" }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(VIcon, mergeProps(props, {
                                          class: "ml-2",
                                          size: "small",
                                          color: "grey"
                                        }), {
                                          default: withCtx(() => [
                                            createTextVNode(" mdi-information-outline ")
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ]),
                                      default: withCtx(() => [
                                        createBaseVNode("span", null, toDisplayString($setup.tm("upload.chunkSettings.tooltip")), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "pa-4 pt-2" }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_29, [
                                      createVNode(VTextField, {
                                        modelValue: $data.chunkSize,
                                        "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => $data.chunkSize = $event),
                                        label: $setup.tm("upload.chunkSettings.chunkSizeLabel"),
                                        type: "number",
                                        hint: $setup.tm("upload.chunkSettings.chunkSizeHint"),
                                        "persistent-hint": "",
                                        variant: "outlined",
                                        density: "comfortable",
                                        class: "flex-grow-1 chunk-field",
                                        "prepend-inner-icon": "mdi-text-box-outline",
                                        min: "50"
                                      }, null, 8, ["modelValue", "label", "hint"]),
                                      createVNode(VTextField, {
                                        modelValue: $data.overlap,
                                        "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => $data.overlap = $event),
                                        label: $setup.tm("upload.chunkSettings.overlapLabel"),
                                        type: "number",
                                        hint: $setup.tm("upload.chunkSettings.overlapHint"),
                                        "persistent-hint": "",
                                        variant: "outlined",
                                        density: "comfortable",
                                        class: "flex-grow-1 chunk-field",
                                        "prepend-inner-icon": "mdi-vector-intersection",
                                        min: "0"
                                      }, null, 8, ["modelValue", "label", "hint"])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            $data.selectedFile ? (openBlock(), createElementBlock("div", _hoisted_30, [
                              createBaseVNode("div", _hoisted_31, [
                                createBaseVNode("div", null, [
                                  createVNode(VIcon, { class: "me-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($options.getFileIcon($data.selectedFile.name)), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createBaseVNode("span", _hoisted_32, toDisplayString($data.selectedFile.name), 1)
                                ]),
                                createVNode(VBtn, {
                                  size: "small",
                                  color: "error",
                                  variant: "text",
                                  onClick: _cache[23] || (_cache[23] = ($event) => $data.selectedFile = null)
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
                              createBaseVNode("div", _hoisted_33, [
                                createVNode(VBtn, {
                                  color: "primary",
                                  variant: "elevated",
                                  loading: $data.uploading,
                                  disabled: !$data.selectedFile,
                                  onClick: $options.uploadFile
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($setup.tm("upload.upload")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["loading", "disabled", "onClick"])
                              ])
                            ])) : createCommentVNode("", true),
                            $data.uploading ? (openBlock(), createElementBlock("div", _hoisted_34, [
                              createVNode(VProgressLinear, {
                                indeterminate: "",
                                color: "primary"
                              })
                            ])) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true),
                          $data.dataSource === "url" ? (openBlock(), createElementBlock("div", _hoisted_35, [
                            createVNode(VAlert, {
                              type: "info",
                              variant: "tonal",
                              class: "mb-4",
                              border: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString($setup.tm("importFromUrl.preRequisite")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VTextField, {
                              modelValue: $data.importUrl,
                              "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => $data.importUrl = $event),
                              label: $setup.tm("importFromUrl.urlLabel"),
                              placeholder: $setup.tm("importFromUrl.urlPlaceholder"),
                              variant: "outlined",
                              class: "mb-4",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "label", "placeholder"]),
                            createVNode(VCard, {
                              class: "mb-4",
                              variant: "outlined",
                              color: "grey-lighten-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "pa-4 pb-0 d-flex align-center" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "primary",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-cog-outline")
                                      ]),
                                      _: 1
                                    }),
                                    createBaseVNode("span", _hoisted_36, toDisplayString($setup.tm("importFromUrl.optionsTitle")), 1),
                                    createVNode(VTooltip, { location: "top" }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(VIcon, mergeProps(props, {
                                          class: "ml-2",
                                          size: "small",
                                          color: "grey"
                                        }), {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-information-outline")
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ]),
                                      default: withCtx(() => [
                                        createBaseVNode("span", null, toDisplayString($setup.tm("importFromUrl.tooltip")), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "pa-4 pt-2" }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSwitch, {
                                              "hide-details": "",
                                              modelValue: $data.importOptions.use_llm_repair,
                                              "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => $data.importOptions.use_llm_repair = $event),
                                              label: $setup.tm("importFromUrl.useLlmRepairLabel"),
                                              color: "primary",
                                              inset: ""
                                            }, null, 8, ["modelValue", "label"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSwitch, {
                                              modelValue: $data.importOptions.use_clustering_summary,
                                              "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => $data.importOptions.use_clustering_summary = $event),
                                              "hide-details": "",
                                              label: $setup.tm("importFromUrl.useClusteringSummaryLabel"),
                                              color: "primary",
                                              inset: ""
                                            }, null, 8, ["modelValue", "label"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VRow, { class: "pa-4" }, {
                                          default: withCtx(() => [
                                            $data.importOptions.use_llm_repair ? (openBlock(), createBlock(VCol, {
                                              key: 0,
                                              md: $options.optionalSelectorColWidth,
                                              cols: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: $data.importOptions.repair_llm_provider_id,
                                                  "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => $data.importOptions.repair_llm_provider_id = $event),
                                                  items: $data.llmProviderConfigs,
                                                  "item-value": "id",
                                                  "item-props": $options.llmModelProps,
                                                  label: $setup.tm("importFromUrl.repairLlmProviderIdLabel"),
                                                  variant: "outlined",
                                                  clearable: "",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "items", "item-props", "label"])
                                              ]),
                                              _: 1
                                            }, 8, ["md"])) : createCommentVNode("", true),
                                            $data.importOptions.use_clustering_summary ? (openBlock(), createBlock(VCol, {
                                              key: 1,
                                              md: $options.optionalSelectorColWidth,
                                              cols: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: $data.importOptions.summarize_llm_provider_id,
                                                  "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => $data.importOptions.summarize_llm_provider_id = $event),
                                                  items: $data.llmProviderConfigs,
                                                  "item-value": "id",
                                                  "item-props": $options.llmModelProps,
                                                  label: $setup.tm("importFromUrl.summarizeLlmProviderIdLabel"),
                                                  variant: "outlined",
                                                  clearable: "",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "items", "item-props", "label"])
                                              ]),
                                              _: 1
                                            }, 8, ["md"])) : createCommentVNode("", true),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: $data.importOptions.embedding_provider_id,
                                                  "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => $data.importOptions.embedding_provider_id = $event),
                                                  items: $data.embeddingProviderConfigs,
                                                  "item-value": "id",
                                                  "item-props": $options.embeddingModelProps,
                                                  label: $setup.tm("importFromUrl.embeddingProviderIdLabel"),
                                                  variant: "outlined",
                                                  clearable: "",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "items", "item-props", "label"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: $data.importOptions.chunk_size,
                                                  "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => $data.importOptions.chunk_size = $event),
                                                  label: $setup.tm("importFromUrl.chunkSizeLabel"),
                                                  type: "number",
                                                  variant: "outlined",
                                                  clearable: "",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "label"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: $data.importOptions.chunk_overlap,
                                                  "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => $data.importOptions.chunk_overlap = $event),
                                                  label: $setup.tm("importFromUrl.chunkOverlapLabel"),
                                                  type: "number",
                                                  variant: "outlined",
                                                  clearable: "",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "label"])
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
                            createBaseVNode("div", _hoisted_37, [
                              createVNode(VBtn, {
                                color: "primary",
                                variant: "elevated",
                                loading: $data.importing,
                                disabled: !$data.importUrl,
                                onClick: $options.startImportFromUrl
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($setup.tm("importFromUrl.startImport")), 1)
                                ]),
                                _: 1
                              }, 8, ["loading", "disabled", "onClick"])
                            ])
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VWindowItem, { value: "search" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_38, [
                          createVNode(VForm, {
                            onSubmit: withModifiers($options.searchKnowledgeBase, ["prevent"]),
                            class: "d-flex align-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                "model-value": $data.searchQuery,
                                "onUpdate:modelValue": $options.onSearchQueryInput,
                                label: $setup.tm("search.queryLabel"),
                                "append-icon": "mdi-magnify",
                                variant: "outlined",
                                class: "flex-grow-1 me-2",
                                "onClick:append": $options.searchKnowledgeBase,
                                onKeyup: withKeys($options.searchKnowledgeBase, ["enter"]),
                                placeholder: $setup.tm("search.queryPlaceholder"),
                                "hide-details": "",
                                clearable: ""
                              }, null, 8, ["model-value", "onUpdate:modelValue", "label", "onClick:append", "onKeyup", "placeholder"]),
                              createVNode(VSelect, {
                                modelValue: $data.topK,
                                "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => $data.topK = $event),
                                items: [3, 5, 10, 20],
                                label: $setup.tm("search.resultCountLabel"),
                                variant: "outlined",
                                style: { "max-width": "120px" },
                                "hide-details": ""
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            _: 1
                          }, 8, ["onSubmit"]),
                          createBaseVNode("div", _hoisted_39, [
                            $data.searching ? (openBlock(), createElementBlock("div", _hoisted_40, [
                              createVNode(VProgressLinear, {
                                indeterminate: "",
                                color: "primary"
                              }),
                              createBaseVNode("p", _hoisted_41, toDisplayString($setup.tm("search.searching")), 1)
                            ])) : $data.searchResults.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_42, [
                              createBaseVNode("h3", _hoisted_43, toDisplayString($setup.tm("search.resultsTitle")), 1),
                              (openBlock(true), createElementBlock(Fragment, null, renderList($data.searchResults, (result, index) => {
                                return openBlock(), createBlock(VCard, {
                                  key: index,
                                  class: "mb-4 search-result-card",
                                  variant: "outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createBaseVNode("div", _hoisted_44, [
                                          createVNode(VIcon, {
                                            class: "me-2",
                                            size: "small",
                                            color: "primary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-file-document-outline")
                                            ]),
                                            _: 1
                                          }),
                                          createBaseVNode("span", _hoisted_45, toDisplayString(result.metadata.source), 1),
                                          createVNode(VSpacer),
                                          result.score ? (openBlock(), createBlock(VChip, {
                                            key: 0,
                                            size: "small",
                                            color: "primary",
                                            variant: "tonal"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString($setup.tm("search.relevance")) + ": " + toDisplayString(Math.round(result.score * 100)) + "% ", 1)
                                            ]),
                                            _: 2
                                          }, 1024)) : createCommentVNode("", true)
                                        ]),
                                        createBaseVNode("div", _hoisted_46, toDisplayString(result.content), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])) : $data.searchPerformed ? (openBlock(), createElementBlock("div", _hoisted_47, [
                              createVNode(VAlert, {
                                type: "info",
                                variant: "tonal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($setup.tm("search.noResults")), 1)
                                ]),
                                _: 1
                              })
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
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
      modelValue: $data.showDeleteDialog,
      "onUpdate:modelValue": _cache[36] || (_cache[36] = ($event) => $data.showDeleteDialog = $event),
      "max-width": "400px"
    }, {
      default: withCtx(() => [
        createVNode(VCard, null, {
          default: withCtx(() => [
            createVNode(VCardTitle, { class: "text-h5" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($setup.tm("deleteDialog.title")), 1)
              ]),
              _: 1
            }),
            createVNode(VCardText, null, {
              default: withCtx(() => [
                createBaseVNode("p", null, toDisplayString($setup.tm("deleteDialog.confirmText", { name: $data.deleteTarget.collection_name })), 1),
                createBaseVNode("p", _hoisted_48, toDisplayString($setup.tm("deleteDialog.warning")), 1)
              ]),
              _: 1
            }),
            createVNode(VCardActions, null, {
              default: withCtx(() => [
                createVNode(VSpacer),
                createVNode(VBtn, {
                  color: "grey-darken-1",
                  variant: "text",
                  onClick: _cache[35] || (_cache[35] = ($event) => $data.showDeleteDialog = false)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.tm("deleteDialog.cancel")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VBtn, {
                  color: "error",
                  variant: "text",
                  onClick: $options.deleteKnowledgeBase,
                  loading: $data.deleting
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.tm("deleteDialog.delete")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick", "loading"])
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
      modelValue: $data.snackbar.show,
      "onUpdate:modelValue": _cache[37] || (_cache[37] = ($event) => $data.snackbar.show = $event),
      color: $data.snackbar.color
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($data.snackbar.text), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "color"])
  ]);
}
const KnowledgeBase = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e0feea0a"]]);
export {
  KnowledgeBase as default
};
