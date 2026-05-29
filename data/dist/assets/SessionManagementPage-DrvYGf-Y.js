import { _ as _export_sfc, c as createElementBlock, b as createVNode, w as withCtx, s as VCard, a6 as VCardTitle, a as createBaseVNode, t as toDisplayString, e as VBtn, g as VChip, d as createTextVNode, ab as VRow, j as VTextField, h as createBlock, i as createCommentVNode, x as VDivider, v as VCardText, ac as VDataTableServer, l as VIcon, a7 as VTooltip, a0 as withModifiers, a2 as mergeProps, ad as VCol, f as VSelect, V as VSpacer, ae as VMenu, af as VList, F as Fragment, r as renderList, ag as VListItem, ah as VListItemTitle, ai as VDialog, aj as VProgressCircular, a9 as VCardActions, k as VAlert, ak as VAutocomplete, al as VCheckbox, am as VSnackbar, an as withKeys, ao as VContainer, B as axios, a5 as useI18n, u as useModuleI18n, ap as pushScopeId, aq as popScopeId, o as openBlock } from "./index-BXuR6cgv.js";
import { a as askForConfirmation, u as useConfirmDialog } from "./confirmDialog-CkMgMXQP.js";
const FOLLOW_CONFIG_VALUE = "__astrbot_follow_config__";
const _sfc_main = {
  name: "SessionManagementPage",
  setup() {
    const { t } = useI18n();
    const { tm } = useModuleI18n("features/session-management");
    const confirmDialog = useConfirmDialog();
    return {
      t,
      tm,
      confirmDialog
    };
  },
  data() {
    return {
      loading: false,
      saving: false,
      deleting: false,
      loadingUmos: false,
      rulesList: [],
      searchQuery: "",
      // 分页
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0,
      searchTimeout: null,
      // 可用选项
      availablePersonas: [],
      availableChatProviders: [],
      availablePlugins: [],
      availableKbs: [],
      // 添加规则
      addRuleDialog: false,
      availableUmos: [],
      selectedNewUmo: null,
      // 规则编辑
      ruleDialog: false,
      selectedUmo: null,
      editingRules: {},
      // 服务配置
      serviceConfig: {
        session_enabled: true,
        llm_enabled: true,
        custom_name: "",
        persona_id: null
      },
      // Provider 配置
      providerConfig: {
        chat_completion: FOLLOW_CONFIG_VALUE
      },
      // 插件配置
      pluginConfig: {
        enabled_plugins: [],
        disabled_plugins: []
      },
      // 知识库配置
      kbConfig: {
        kb_ids: [],
        top_k: 5,
        enable_rerank: true
      },
      // 删除确认
      deleteDialog: false,
      deleteTarget: null,
      // 批量选择和删除
      selectedItems: [],
      batchDeleteDialog: false,
      // 快速编辑备注名
      quickEditNameDialog: false,
      quickEditNameTarget: null,
      quickEditNameValue: "",
      // 批量操作
      batchScope: "selected",
      batchGroupId: null,
      batchLlmStatus: null,
      batchChatProvider: null,
      batchUpdating: false,
      // 分组管理
      groups: [],
      groupsLoading: false,
      groupDialog: false,
      groupDialogMode: "create",
      editingGroup: {
        id: null,
        name: "",
        umos: []
      },
      groupMemberDialog: false,
      groupMemberTarget: null,
      groupMemberSearch: "",
      groupSelectedSearch: "",
      // 提示信息
      snackbar: false,
      snackbarText: "",
      snackbarColor: "success"
    };
  },
  computed: {
    headers() {
      return [
        { title: this.tm("table.headers.umoInfo"), key: "umo_info", sortable: false, minWidth: "300px" },
        { title: this.tm("table.headers.rulesOverview"), key: "rules_overview", sortable: false, minWidth: "250px" },
        { title: this.tm("table.headers.actions"), key: "actions", sortable: false, minWidth: "150px" }
      ];
    },
    filteredRulesList() {
      return this.rulesList;
    },
    personaOptions() {
      return [
        { label: this.tm("persona.none"), value: null },
        ...this.availablePersonas.map((p) => ({
          label: p.name,
          value: p.name
        }))
      ];
    },
    chatProviderOptions() {
      return [
        { label: this.tm("provider.followConfig"), value: FOLLOW_CONFIG_VALUE },
        ...this.availableChatProviders.map((p) => ({
          label: `${p.name} (${p.model})`,
          value: p.id
        }))
      ];
    },
    batchChatProviderOptions() {
      return [
        { label: this.tm("provider.followConfig"), value: FOLLOW_CONFIG_VALUE },
        ...this.availableChatProviders.map((p) => ({
          label: `${p.name} (${p.model})`,
          value: p.id
        }))
      ];
    },
    pluginOptions() {
      return this.availablePlugins.map((p) => ({
        label: p.display_name || p.name,
        value: p.name
      }));
    },
    kbOptions() {
      return this.availableKbs.map((kb) => ({
        label: `${kb.emoji || "📚"} ${kb.kb_name}`,
        value: kb.kb_id
      }));
    },
    batchScopeOptions() {
      const options = [
        { label: this.tm("batchOperations.scopeSelected"), value: "selected" },
        { label: this.tm("batchOperations.scopeAll"), value: "all" },
        { label: this.tm("batchOperations.scopeGroup"), value: "group" },
        { label: this.tm("batchOperations.scopePrivate"), value: "private" }
      ];
      if (this.groups.length > 0) {
        options.push({ label: this.tm("groups.customGroupDivider"), value: "_divider", disabled: true });
        this.groups.forEach((g) => {
          options.push({
            label: this.tm("groups.customGroupOption", { name: g.name, count: g.umo_count }),
            value: `custom_group:${g.id}`
          });
        });
      }
      return options;
    },
    groupOptions() {
      return this.groups.map((g) => ({
        label: this.tm("groups.groupOption", { name: g.name, count: g.umo_count }),
        value: g.id
      }));
    },
    statusOptions() {
      return [
        { label: this.tm("status.enabled"), value: true },
        { label: this.tm("status.disabled"), value: false }
      ];
    },
    canApplyBatch() {
      const hasChanges = this.batchLlmStatus !== null || this.batchChatProvider !== null;
      if (this.batchScope === "selected") {
        return hasChanges && this.selectedItems.length > 0;
      }
      return hasChanges;
    },
    // 穿梭框：未选中的UMO列表
    unselectedUmos() {
      const selected = new Set(this.editingGroup.umos || []);
      return this.availableUmos.filter((u) => !selected.has(u));
    },
    // 穿梭框：过滤后的未选中列表
    filteredUnselectedUmos() {
      if (!this.groupMemberSearch) return this.unselectedUmos;
      const search = this.groupMemberSearch.toLowerCase();
      return this.unselectedUmos.filter((u) => u.toLowerCase().includes(search));
    },
    // 穿梭框：过滤后的已选中列表
    filteredSelectedUmos() {
      if (!this.groupSelectedSearch) return this.editingGroup.umos || [];
      const search = this.groupSelectedSearch.toLowerCase();
      return (this.editingGroup.umos || []).filter((u) => u.toLowerCase().includes(search));
    }
  },
  watch: {
    searchQuery: {
      handler() {
        if (this.searchTimeout) {
          clearTimeout(this.searchTimeout);
        }
        this.searchTimeout = setTimeout(() => {
          this.onSearchChange();
        }, 300);
      }
    }
  },
  mounted() {
    this.loadData();
    this.loadGroups();
  },
  beforeUnmount() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
  },
  methods: {
    async loadData() {
      var _a, _b;
      this.loading = true;
      try {
        const response = await axios.get("/api/session/list-rule", {
          params: {
            page: this.currentPage,
            page_size: this.itemsPerPage,
            search: this.searchQuery || ""
          }
        });
        if (response.data.status === "ok") {
          const data = response.data.data;
          this.rulesList = data.rules;
          this.totalItems = data.total;
          this.availablePersonas = data.available_personas;
          this.availableChatProviders = data.available_chat_providers;
          this.availablePlugins = data.available_plugins || [];
          this.availableKbs = data.available_kbs || [];
        } else {
          this.showError(response.data.message || this.tm("messages.loadError"));
        }
      } catch (error) {
        this.showError(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || this.tm("messages.loadError"));
      }
      this.loading = false;
    },
    onTableOptionsUpdate(options) {
      this.currentPage = options.page;
      this.itemsPerPage = options.itemsPerPage;
      this.loadData();
    },
    onSearchChange() {
      this.currentPage = 1;
      this.loadData();
    },
    async loadUmos() {
      var _a, _b;
      this.loadingUmos = true;
      try {
        const response = await axios.get("/api/session/active-umos");
        if (response.data.status === "ok") {
          const existingUmos = new Set(this.rulesList.map((r) => r.umo));
          this.availableUmos = response.data.data.umos.filter((umo) => !existingUmos.has(umo));
        }
      } catch (error) {
        this.showError(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || this.tm("messages.loadError"));
      }
      this.loadingUmos = false;
    },
    async refreshData() {
      await this.loadData();
      this.showSuccess(this.tm("messages.refreshSuccess"));
    },
    hasProviderConfig(rules) {
      return rules && rules["provider_perf_chat_completion"];
    },
    async openAddRuleDialog() {
      this.addRuleDialog = true;
      this.selectedNewUmo = null;
      await this.loadUmos();
    },
    createNewRule() {
      if (!this.selectedNewUmo) return;
      const newItem = {
        umo: this.selectedNewUmo,
        rules: {}
      };
      const parts = this.selectedNewUmo.split(":");
      if (parts.length >= 3) {
        newItem.platform = parts[0];
        newItem.message_type = parts[1];
        newItem.session_id = parts[2];
      }
      this.addRuleDialog = false;
      this.openRuleEditor(newItem);
    },
    openRuleEditor(item) {
      this.selectedUmo = item;
      this.editingRules = item.rules || {};
      const svcConfig = this.editingRules.session_service_config || {};
      this.serviceConfig = {
        session_enabled: svcConfig.session_enabled !== false,
        llm_enabled: svcConfig.llm_enabled !== false,
        custom_name: svcConfig.custom_name || "",
        persona_id: svcConfig.persona_id || null
      };
      this.providerConfig = {
        chat_completion: this.editingRules["provider_perf_chat_completion"] || FOLLOW_CONFIG_VALUE
      };
      const pluginCfg = this.editingRules.session_plugin_config || {};
      this.pluginConfig = {
        enabled_plugins: pluginCfg.enabled_plugins || [],
        disabled_plugins: pluginCfg.disabled_plugins || []
      };
      const kbCfg = this.editingRules.kb_config || {};
      this.kbConfig = {
        kb_ids: kbCfg.kb_ids || [],
        top_k: kbCfg.top_k ?? 5,
        enable_rerank: kbCfg.enable_rerank !== false
      };
      this.ruleDialog = true;
    },
    closeRuleEditor() {
      this.ruleDialog = false;
      this.selectedUmo = null;
      this.editingRules = {};
    },
    async saveServiceConfig() {
      var _a, _b;
      if (!this.selectedUmo) return;
      this.saving = true;
      try {
        const config = { ...this.serviceConfig };
        if (!config.custom_name) delete config.custom_name;
        if (config.persona_id === null) delete config.persona_id;
        const response = await axios.post("/api/session/update-rule", {
          umo: this.selectedUmo.umo,
          rule_key: "session_service_config",
          rule_value: config
        });
        if (response.data.status === "ok") {
          this.showSuccess(this.tm("messages.saveSuccess"));
          this.editingRules.session_service_config = config;
          let item = this.rulesList.find((u) => u.umo === this.selectedUmo.umo);
          if (item) {
            item.rules = { ...item.rules, session_service_config: config };
          } else {
            this.rulesList.push({
              umo: this.selectedUmo.umo,
              platform: this.selectedUmo.platform,
              message_type: this.selectedUmo.message_type,
              session_id: this.selectedUmo.session_id,
              rules: { session_service_config: config }
            });
          }
        } else {
          this.showError(response.data.message || this.tm("messages.saveError"));
        }
      } catch (error) {
        this.showError(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || this.tm("messages.saveError"));
      }
      this.saving = false;
    },
    async saveProviderConfig() {
      var _a, _b;
      if (!this.selectedUmo) return;
      this.saving = true;
      try {
        const updateTasks = [];
        const deleteTasks = [];
        const providerTypes = ["chat_completion"];
        for (const type of providerTypes) {
          const value = this.providerConfig[type];
          if (value && value !== FOLLOW_CONFIG_VALUE) {
            updateTasks.push(
              axios.post("/api/session/update-rule", {
                umo: this.selectedUmo.umo,
                rule_key: `provider_perf_${type}`,
                rule_value: value
              })
            );
          } else if (this.editingRules[`provider_perf_${type}`]) {
            deleteTasks.push(
              axios.post("/api/session/delete-rule", {
                umo: this.selectedUmo.umo,
                rule_key: `provider_perf_${type}`
              })
            );
          }
        }
        const allTasks = [...updateTasks, ...deleteTasks];
        if (allTasks.length > 0) {
          await Promise.all(allTasks);
          this.showSuccess(this.tm("messages.saveSuccess"));
          let item = this.rulesList.find((u) => u.umo === this.selectedUmo.umo);
          if (!item) {
            item = {
              umo: this.selectedUmo.umo,
              platform: this.selectedUmo.platform,
              message_type: this.selectedUmo.message_type,
              session_id: this.selectedUmo.session_id,
              rules: {}
            };
            this.rulesList.push(item);
          }
          for (const type of providerTypes) {
            const val = this.providerConfig[type];
            if (val && val !== FOLLOW_CONFIG_VALUE) {
              item.rules[`provider_perf_${type}`] = val;
              this.editingRules[`provider_perf_${type}`] = val;
            } else {
              delete item.rules[`provider_perf_${type}`];
              delete this.editingRules[`provider_perf_${type}`];
            }
          }
        } else {
          this.showSuccess(this.tm("messages.noChanges"));
        }
      } catch (error) {
        this.showError(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || this.tm("messages.saveError"));
      }
      this.saving = false;
    },
    async savePluginConfig() {
      var _a, _b;
      if (!this.selectedUmo) return;
      this.saving = true;
      try {
        const config = {
          enabled_plugins: this.pluginConfig.enabled_plugins,
          disabled_plugins: this.pluginConfig.disabled_plugins
        };
        if (config.enabled_plugins.length === 0 && config.disabled_plugins.length === 0) {
          if (this.editingRules.session_plugin_config) {
            await axios.post("/api/session/delete-rule", {
              umo: this.selectedUmo.umo,
              rule_key: "session_plugin_config"
            });
            delete this.editingRules.session_plugin_config;
            let item = this.rulesList.find((u) => u.umo === this.selectedUmo.umo);
            if (item) delete item.rules.session_plugin_config;
          }
          this.showSuccess(this.tm("messages.saveSuccess"));
        } else {
          const response = await axios.post("/api/session/update-rule", {
            umo: this.selectedUmo.umo,
            rule_key: "session_plugin_config",
            rule_value: config
          });
          if (response.data.status === "ok") {
            this.showSuccess(this.tm("messages.saveSuccess"));
            this.editingRules.session_plugin_config = config;
            let item = this.rulesList.find((u) => u.umo === this.selectedUmo.umo);
            if (item) {
              item.rules.session_plugin_config = config;
            } else {
              this.rulesList.push({
                umo: this.selectedUmo.umo,
                platform: this.selectedUmo.platform,
                message_type: this.selectedUmo.message_type,
                session_id: this.selectedUmo.session_id,
                rules: { session_plugin_config: config }
              });
            }
          } else {
            this.showError(response.data.message || this.tm("messages.saveError"));
          }
        }
      } catch (error) {
        this.showError(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || this.tm("messages.saveError"));
      }
      this.saving = false;
    },
    async saveKbConfig() {
      var _a, _b;
      if (!this.selectedUmo) return;
      this.saving = true;
      try {
        const config = {
          kb_ids: this.kbConfig.kb_ids,
          top_k: this.kbConfig.top_k,
          enable_rerank: this.kbConfig.enable_rerank
        };
        if (config.kb_ids.length === 0) {
          if (this.editingRules.kb_config) {
            await axios.post("/api/session/delete-rule", {
              umo: this.selectedUmo.umo,
              rule_key: "kb_config"
            });
            delete this.editingRules.kb_config;
            let item = this.rulesList.find((u) => u.umo === this.selectedUmo.umo);
            if (item) delete item.rules.kb_config;
          }
          this.showSuccess(this.tm("messages.saveSuccess"));
        } else {
          const response = await axios.post("/api/session/update-rule", {
            umo: this.selectedUmo.umo,
            rule_key: "kb_config",
            rule_value: config
          });
          if (response.data.status === "ok") {
            this.showSuccess(this.tm("messages.saveSuccess"));
            this.editingRules.kb_config = config;
            let item = this.rulesList.find((u) => u.umo === this.selectedUmo.umo);
            if (item) {
              item.rules.kb_config = config;
            } else {
              this.rulesList.push({
                umo: this.selectedUmo.umo,
                platform: this.selectedUmo.platform,
                message_type: this.selectedUmo.message_type,
                session_id: this.selectedUmo.session_id,
                rules: { kb_config: config }
              });
            }
          } else {
            this.showError(response.data.message || this.tm("messages.saveError"));
          }
        }
      } catch (error) {
        this.showError(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || this.tm("messages.saveError"));
      }
      this.saving = false;
    },
    confirmDeleteRules(item) {
      this.deleteTarget = item;
      this.deleteDialog = true;
    },
    async deleteAllRules() {
      var _a, _b;
      if (!this.deleteTarget) return;
      this.deleting = true;
      try {
        const response = await axios.post("/api/session/delete-rule", {
          umo: this.deleteTarget.umo
        });
        if (response.data.status === "ok") {
          this.showSuccess(this.tm("messages.deleteSuccess"));
          const index = this.rulesList.findIndex((u) => u.umo === this.deleteTarget.umo);
          if (index > -1) {
            this.rulesList.splice(index, 1);
          }
          this.deleteDialog = false;
          this.deleteTarget = null;
          await this.loadData();
        } else {
          this.showError(response.data.message || this.tm("messages.deleteError"));
        }
      } catch (error) {
        this.showError(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || this.tm("messages.deleteError"));
      }
      this.deleting = false;
    },
    confirmBatchDelete() {
      if (this.selectedItems.length === 0) return;
      this.batchDeleteDialog = true;
    },
    async batchDeleteRules() {
      var _a, _b;
      if (this.selectedItems.length === 0) return;
      this.deleting = true;
      try {
        const umos = this.selectedItems.map((item) => item.umo);
        const response = await axios.post("/api/session/batch-delete-rule", {
          umos
        });
        if (response.data.status === "ok") {
          const data = response.data.data;
          this.showSuccess(data.message || this.tm("messages.batchDeleteSuccess"));
          this.batchDeleteDialog = false;
          this.selectedItems = [];
          await this.loadData();
        } else {
          this.showError(response.data.message || this.tm("messages.batchDeleteError"));
        }
      } catch (error) {
        this.showError(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || this.tm("messages.batchDeleteError"));
      }
      this.deleting = false;
    },
    getPlatformColor(platform) {
      const colors = {
        "aiocqhttp": "blue",
        "qq_official": "purple",
        "telegram": "light-blue",
        "discord": "indigo",
        "webchat": "orange",
        "default": "grey"
      };
      return colors[platform] || colors.default;
    },
    showSuccess(message) {
      this.snackbarText = message;
      this.snackbarColor = "success";
      this.snackbar = true;
    },
    showError(message) {
      this.snackbarText = message;
      this.snackbarColor = "error";
      this.snackbar = true;
    },
    openQuickEditName(item) {
      var _a, _b;
      this.quickEditNameTarget = item;
      this.quickEditNameValue = ((_b = (_a = item.rules) == null ? void 0 : _a.session_service_config) == null ? void 0 : _b.custom_name) || "";
      this.quickEditNameDialog = true;
    },
    async saveQuickEditName() {
      var _a, _b, _c;
      if (!this.quickEditNameTarget) return;
      this.saving = true;
      try {
        const existingConfig = ((_a = this.quickEditNameTarget.rules) == null ? void 0 : _a.session_service_config) || {};
        const config = {
          session_enabled: existingConfig.session_enabled !== false,
          llm_enabled: existingConfig.llm_enabled !== false,
          ...existingConfig
        };
        if (this.quickEditNameValue) {
          config.custom_name = this.quickEditNameValue;
        } else {
          delete config.custom_name;
        }
        const response = await axios.post("/api/session/update-rule", {
          umo: this.quickEditNameTarget.umo,
          rule_key: "session_service_config",
          rule_value: config
        });
        if (response.data.status === "ok") {
          this.showSuccess(this.tm("messages.saveSuccess"));
          let item = this.rulesList.find((u) => u.umo === this.quickEditNameTarget.umo);
          if (item) {
            if (!item.rules) item.rules = {};
            item.rules.session_service_config = config;
          } else {
            const parts = this.quickEditNameTarget.umo.split(":");
            this.rulesList.push({
              umo: this.quickEditNameTarget.umo,
              platform: parts[0] || "",
              message_type: parts[1] || "",
              session_id: parts[2] || "",
              rules: { session_service_config: config }
            });
          }
          this.quickEditNameDialog = false;
          this.quickEditNameTarget = null;
          this.quickEditNameValue = "";
        } else {
          this.showError(response.data.message || this.tm("messages.saveError"));
        }
      } catch (error) {
        this.showError(((_c = (_b = error.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message) || this.tm("messages.saveError"));
      }
      this.saving = false;
    },
    async applyBatchChanges() {
      var _a, _b;
      this.batchUpdating = true;
      try {
        let scope = this.batchScope;
        let groupId = null;
        let umos = [];
        if (scope.startsWith("custom_group:")) {
          groupId = scope.split(":")[1];
          scope = "custom_group";
        }
        if (scope === "selected") {
          umos = this.selectedItems.map((item) => item.umo);
          if (umos.length === 0) {
            this.showError(this.tm("messages.selectSessionsFirst"));
            this.batchUpdating = false;
            return;
          }
        }
        const tasks = [];
        if (this.batchLlmStatus !== null) {
          const serviceData = { scope, umos, group_id: groupId, llm_enabled: this.batchLlmStatus };
          tasks.push(axios.post("/api/session/batch-update-service", serviceData));
        }
        if (this.batchChatProvider !== null) {
          if (this.batchChatProvider === FOLLOW_CONFIG_VALUE) {
            tasks.push(axios.post("/api/session/batch-delete-rule", {
              scope,
              umos,
              group_id: groupId,
              rule_key: "provider_perf_chat_completion"
            }));
          } else {
            tasks.push(axios.post("/api/session/batch-update-provider", {
              scope,
              umos,
              group_id: groupId,
              provider_type: "chat_completion",
              provider_id: this.batchChatProvider
            }));
          }
        }
        if (tasks.length === 0) {
          this.showError(this.tm("messages.selectAtLeastOneConfig"));
          this.batchUpdating = false;
          return;
        }
        const results = await Promise.all(tasks);
        const allOk = results.every((r) => r.data.status === "ok");
        if (allOk) {
          this.showSuccess(this.tm("messages.batchUpdateSuccess"));
          this.batchLlmStatus = null;
          this.batchChatProvider = null;
          await this.loadData();
        } else {
          this.showError(this.tm("messages.partialUpdateFailed"));
        }
      } catch (error) {
        this.showError(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || this.tm("messages.batchUpdateError"));
      }
      this.batchUpdating = false;
    },
    // ==================== 分组管理方法 ====================
    async loadGroups() {
      this.groupsLoading = true;
      try {
        const response = await axios.get("/api/session/groups");
        if (response.data.status === "ok") {
          this.groups = response.data.data.groups || [];
        }
      } catch (error) {
        console.error("加载分组失败:", error);
      }
      this.groupsLoading = false;
    },
    async loadAvailableUmos() {
      if (this.availableUmos.length > 0) return;
      this.loadingUmos = true;
      try {
        const response = await axios.get("/api/session/active-umos");
        if (response.data.status === "ok") {
          this.availableUmos = response.data.data.umos || [];
        }
      } catch (error) {
        console.error("加载会话列表失败:", error);
      }
      this.loadingUmos = false;
    },
    openCreateGroupDialog() {
      this.groupDialogMode = "create";
      this.editingGroup = { id: null, name: "", umos: [] };
      this.groupMemberSearch = "";
      this.groupSelectedSearch = "";
      this.groupDialog = true;
    },
    openEditGroupDialog(group) {
      this.groupDialogMode = "edit";
      this.editingGroup = { ...group, umos: [...group.umos || []] };
      this.groupMemberSearch = "";
      this.groupSelectedSearch = "";
      this.groupDialog = true;
    },
    // 穿梭框操作方法
    addToGroup(umo) {
      if (!this.editingGroup.umos.includes(umo)) {
        this.editingGroup.umos.push(umo);
      }
    },
    removeFromGroup(umo) {
      const idx = this.editingGroup.umos.indexOf(umo);
      if (idx > -1) {
        this.editingGroup.umos.splice(idx, 1);
      }
    },
    addAllToGroup() {
      this.unselectedUmos.forEach((umo) => {
        if (!this.editingGroup.umos.includes(umo)) {
          this.editingGroup.umos.push(umo);
        }
      });
    },
    removeAllFromGroup() {
      this.editingGroup.umos = [];
    },
    formatUmoShort(umo) {
      const parts = umo.split(":");
      if (parts.length >= 3) {
        return `${parts[0]}:${parts[2]}`;
      }
      return umo;
    },
    async saveGroup() {
      var _a, _b;
      if (!this.editingGroup.name.trim()) {
        this.showError(this.tm("messages.groupNameRequired"));
        return;
      }
      try {
        let response;
        if (this.groupDialogMode === "create") {
          response = await axios.post("/api/session/group/create", {
            name: this.editingGroup.name,
            umos: this.editingGroup.umos
          });
        } else {
          response = await axios.post("/api/session/group/update", {
            id: this.editingGroup.id,
            name: this.editingGroup.name,
            umos: this.editingGroup.umos
          });
        }
        if (response.data.status === "ok") {
          this.showSuccess(response.data.data.message);
          this.groupDialog = false;
          await this.loadGroups();
        } else {
          this.showError(response.data.message);
        }
      } catch (error) {
        this.showError(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || this.tm("messages.saveGroupError"));
      }
    },
    async deleteGroup(group) {
      var _a, _b;
      const message = this.tm("groups.deleteConfirm", { name: group.name });
      if (!await askForConfirmation(message, this.confirmDialog)) return;
      try {
        const response = await axios.post("/api/session/group/delete", { id: group.id });
        if (response.data.status === "ok") {
          this.showSuccess(response.data.data.message);
          await this.loadGroups();
        } else {
          this.showError(response.data.message);
        }
      } catch (error) {
        this.showError(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || this.tm("messages.deleteGroupError"));
      }
    },
    openGroupMemberDialog(group) {
      this.groupMemberTarget = { ...group };
      this.groupMemberDialog = true;
    },
    async addSelectedToGroup(groupId) {
      var _a, _b;
      if (this.selectedItems.length === 0) {
        this.showError(this.tm("messages.selectSessionsToAddFirst"));
        return;
      }
      try {
        const response = await axios.post("/api/session/group/update", {
          id: groupId,
          add_umos: this.selectedItems.map((item) => item.umo)
        });
        if (response.data.status === "ok") {
          this.showSuccess(this.tm("messages.addToGroupSuccess", { count: this.selectedItems.length }));
          await this.loadGroups();
        } else {
          this.showError(response.data.message);
        }
      } catch (error) {
        this.showError(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || this.tm("messages.addToGroupError"));
      }
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-a73cb67e"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "session-management-page" };
const _hoisted_2 = { class: "text-h4" };
const _hoisted_3 = { class: "d-flex align-center" };
const _hoisted_4 = {
  class: "text-truncate",
  style: { "max-width": "300px" }
};
const _hoisted_5 = {
  key: 0,
  class: "d-flex align-center"
};
const _hoisted_6 = {
  key: 0,
  class: "ml-2",
  style: { "color": "gray", "font-size": "10px" }
};
const _hoisted_7 = { key: 0 };
const _hoisted_8 = { key: 1 };
const _hoisted_9 = { key: 2 };
const _hoisted_10 = { class: "d-flex flex-wrap ga-1" };
const _hoisted_11 = { class: "text-center py-8" };
const _hoisted_12 = { class: "text-h6 mt-4 text-grey-600" };
const _hoisted_13 = { class: "text-body-2 text-grey-500" };
const _hoisted_14 = { class: "text-h6" };
const _hoisted_15 = { class: "text-h6" };
const _hoisted_16 = { class: "d-flex align-center justify-space-between" };
const _hoisted_17 = { class: "font-weight-bold" };
const _hoisted_18 = { class: "text-caption text-grey" };
const _hoisted_19 = { class: "text-subtitle-2 mb-2" };
const _hoisted_20 = { class: "text-subtitle-2 mb-2" };
const _hoisted_21 = { class: "px-6 py-4" };
const _hoisted_22 = { class: "d-flex align-center mb-4" };
const _hoisted_23 = { class: "font-weight-bold mb-0" };
const _hoisted_24 = { class: "d-flex justify-end mt-4" };
const _hoisted_25 = { class: "d-flex align-center mb-4 mt-4" };
const _hoisted_26 = { class: "font-weight-bold mb-0" };
const _hoisted_27 = { class: "d-flex justify-end mt-4" };
const _hoisted_28 = { class: "d-flex align-center mb-4 mt-4" };
const _hoisted_29 = { class: "font-weight-bold mb-0" };
const _hoisted_30 = { class: "d-flex justify-end mt-4" };
const _hoisted_31 = { class: "d-flex align-center mb-4 mt-4" };
const _hoisted_32 = { class: "font-weight-bold mb-0" };
const _hoisted_33 = { class: "d-flex justify-end mt-4" };
const _hoisted_34 = { class: "d-flex align-center mb-4 mt-4" };
const _hoisted_35 = { class: "font-weight-bold mb-0" };
const _hoisted_36 = { class: "d-flex justify-end mt-4" };
const _hoisted_37 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_38 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_39 = {
  class: "mt-3",
  style: { "max-height": "200px", "overflow-y": "auto" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(VContainer, {
      fluid: "",
      class: "pa-0"
    }, {
      default: withCtx(() => [
        createVNode(VCard, { flat: "" }, {
          default: withCtx(() => [
            createVNode(VCardTitle, { class: "d-flex align-center py-3 px-4" }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_2, toDisplayString($setup.tm("customRules.title")), 1),
                createVNode(VBtn, {
                  icon: "mdi-information-outline",
                  size: "small",
                  variant: "text",
                  href: "/help",
                  target: "_blank"
                }),
                createVNode(VChip, {
                  size: "small",
                  class: "ml-1"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($data.totalItems) + " " + toDisplayString($setup.tm("customRules.rulesCount")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VRow, {
                  class: "me-4 ms-4",
                  dense: ""
                }, {
                  default: withCtx(() => [
                    createVNode(VTextField, {
                      modelValue: $data.searchQuery,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchQuery = $event),
                      "prepend-inner-icon": "mdi-magnify",
                      label: $setup.tm("search.placeholder"),
                      "hide-details": "",
                      clearable: "",
                      variant: "solo-filled",
                      flat: "",
                      class: "me-4",
                      density: "compact"
                    }, null, 8, ["modelValue", "label"])
                  ]),
                  _: 1
                }),
                $data.selectedItems.length > 0 ? (openBlock(), createBlock(VBtn, {
                  key: 0,
                  color: "error",
                  "prepend-icon": "mdi-delete",
                  variant: "tonal",
                  onClick: $options.confirmBatchDelete,
                  class: "mr-2",
                  size: "small"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.tm("buttons.batchDelete")) + " (" + toDisplayString($data.selectedItems.length) + ") ", 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true),
                createVNode(VBtn, {
                  color: "success",
                  "prepend-icon": "mdi-plus",
                  variant: "tonal",
                  onClick: $options.openAddRuleDialog,
                  class: "mr-2",
                  size: "small"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.tm("buttons.addRule")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(VBtn, {
                  color: "primary",
                  "prepend-icon": "mdi-refresh",
                  variant: "tonal",
                  onClick: $options.refreshData,
                  loading: $data.loading,
                  size: "small"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.tm("buttons.refresh")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick", "loading"])
              ]),
              _: 1
            }),
            createVNode(VDivider),
            createVNode(VCardText, { class: "pa-0" }, {
              default: withCtx(() => [
                createVNode(VDataTableServer, {
                  headers: $options.headers,
                  items: $options.filteredRulesList,
                  loading: $data.loading,
                  "items-length": $data.totalItems,
                  "items-per-page": $data.itemsPerPage,
                  "onUpdate:itemsPerPage": _cache[1] || (_cache[1] = ($event) => $data.itemsPerPage = $event),
                  page: $data.currentPage,
                  "onUpdate:page": _cache[2] || (_cache[2] = ($event) => $data.currentPage = $event),
                  "onUpdate:options": $options.onTableOptionsUpdate,
                  class: "elevation-0",
                  style: { "font-size": "12px" },
                  modelValue: $data.selectedItems,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.selectedItems = $event),
                  "show-select": "",
                  "item-value": "umo",
                  "return-object": ""
                }, {
                  "item.umo_info": withCtx(({ item }) => {
                    var _a, _b, _c, _d, _e, _f;
                    return [
                      createBaseVNode("div", null, [
                        createBaseVNode("div", _hoisted_3, [
                          createVNode(VChip, {
                            size: "x-small",
                            color: $options.getPlatformColor(item.platform),
                            class: "mr-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.platform || "unknown"), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"]),
                          createBaseVNode("span", _hoisted_4, toDisplayString(item.umo), 1),
                          ((_b = (_a = item.rules) == null ? void 0 : _a.session_service_config) == null ? void 0 : _b.custom_name) || true ? (openBlock(), createElementBlock("div", _hoisted_5, [
                            ((_d = (_c = item.rules) == null ? void 0 : _c.session_service_config) == null ? void 0 : _d.custom_name) ? (openBlock(), createElementBlock("span", _hoisted_6, " (" + toDisplayString((_f = (_e = item.rules) == null ? void 0 : _e.session_service_config) == null ? void 0 : _f.custom_name) + ") ", 1)) : createCommentVNode("", true),
                            createVNode(VBtn, {
                              icon: "",
                              size: "x-small",
                              variant: "text",
                              class: "ml-1",
                              onClick: withModifiers(($event) => $options.openQuickEditName(item), ["stop"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "small",
                                  color: "grey"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-pencil-outline")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($setup.tm("buttons.editCustomName")), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ])) : createCommentVNode("", true),
                          createVNode(VTooltip, { location: "top" }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VIcon, mergeProps(props, {
                                size: "small",
                                class: "ml-1"
                              }), {
                                default: withCtx(() => [
                                  createTextVNode("mdi-information-outline")
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createBaseVNode("div", null, [
                                createBaseVNode("p", null, "UMO: " + toDisplayString(item.umo), 1),
                                item.platform ? (openBlock(), createElementBlock("p", _hoisted_7, "平台: " + toDisplayString(item.platform), 1)) : createCommentVNode("", true),
                                item.message_type ? (openBlock(), createElementBlock("p", _hoisted_8, "消息类型: " + toDisplayString(item.message_type), 1)) : createCommentVNode("", true),
                                item.session_id ? (openBlock(), createElementBlock("p", _hoisted_9, "会话 ID: " + toDisplayString(item.session_id), 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ])
                    ];
                  }),
                  "item.rules_overview": withCtx(({ item }) => [
                    createBaseVNode("div", _hoisted_10, [
                      item.rules.session_service_config ? (openBlock(), createBlock(VChip, {
                        key: 0,
                        size: "x-small",
                        color: "primary",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString($setup.tm("customRules.serviceConfig")), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      item.rules.session_plugin_config ? (openBlock(), createBlock(VChip, {
                        key: 1,
                        size: "x-small",
                        color: "secondary",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString($setup.tm("customRules.pluginConfig")), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      item.rules.kb_config ? (openBlock(), createBlock(VChip, {
                        key: 2,
                        size: "x-small",
                        color: "info",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString($setup.tm("customRules.kbConfig")), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      $options.hasProviderConfig(item.rules) ? (openBlock(), createBlock(VChip, {
                        key: 3,
                        size: "x-small",
                        color: "warning",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString($setup.tm("customRules.providerConfig")), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ]),
                  "item.actions": withCtx(({ item }) => [
                    createVNode(VBtn, {
                      size: "small",
                      variant: "tonal",
                      color: "primary",
                      onClick: ($event) => $options.openRuleEditor(item),
                      class: "mr-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-pencil")
                          ]),
                          _: 1
                        }),
                        createVNode(VTooltip, {
                          activator: "parent",
                          location: "top"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($setup.tm("buttons.editRule")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(VBtn, {
                      size: "small",
                      variant: "tonal",
                      color: "error",
                      onClick: ($event) => $options.confirmDeleteRules(item)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-delete")
                          ]),
                          _: 1
                        }),
                        createVNode(VTooltip, {
                          activator: "parent",
                          location: "top"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($setup.tm("buttons.deleteAllRules")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  "no-data": withCtx(() => [
                    createBaseVNode("div", _hoisted_11, [
                      createVNode(VIcon, {
                        size: "64",
                        color: "grey-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-file-document-edit-outline")
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_12, toDisplayString($setup.tm("customRules.noRules")), 1),
                      createBaseVNode("div", _hoisted_13, toDisplayString($setup.tm("customRules.noRulesDesc")), 1),
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "tonal",
                        class: "mt-4",
                        onClick: $options.openAddRuleDialog
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-plus")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" " + toDisplayString($setup.tm("buttons.addRule")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ]),
                  _: 1
                }, 8, ["headers", "items", "loading", "items-length", "items-per-page", "page", "onUpdate:options", "modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(VCard, {
          flat: "",
          class: "mt-4"
        }, {
          default: withCtx(() => [
            createVNode(VCardTitle, { class: "d-flex align-center py-3 px-4" }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_14, toDisplayString($setup.tm("batchOperations.title")), 1),
                createVNode(VChip, {
                  size: "small",
                  class: "ml-2",
                  color: "info",
                  variant: "outlined"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.tm("batchOperations.hint")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(VCardText, null, {
              default: withCtx(() => [
                createVNode(VRow, { dense: "" }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      md: "6",
                      lg: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: $data.batchScope,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.batchScope = $event),
                          items: $options.batchScopeOptions,
                          "item-title": "label",
                          "item-value": "value",
                          label: $setup.tm("batchOperations.scope"),
                          "hide-details": "",
                          variant: "solo-filled",
                          flat: "",
                          density: "comfortable"
                        }, null, 8, ["modelValue", "items", "label"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6",
                      lg: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: $data.batchLlmStatus,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.batchLlmStatus = $event),
                          items: $options.statusOptions,
                          "item-title": "label",
                          "item-value": "value",
                          label: $setup.tm("batchOperations.llmStatus"),
                          "hide-details": "",
                          clearable: "",
                          variant: "solo-filled",
                          flat: "",
                          density: "comfortable"
                        }, null, 8, ["modelValue", "items", "label"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6",
                      lg: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: $data.batchChatProvider,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.batchChatProvider = $event),
                          items: $options.batchChatProviderOptions,
                          "item-title": "label",
                          "item-value": "value",
                          label: $setup.tm("batchOperations.chatProvider"),
                          "hide-details": "",
                          clearable: "",
                          variant: "solo-filled",
                          flat: "",
                          density: "comfortable"
                        }, null, 8, ["modelValue", "items", "label"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VRow, {
                  dense: "",
                  class: "mt-3"
                }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      class: "d-flex justify-end"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "tonal",
                          size: "large",
                          onClick: $options.applyBatchChanges,
                          disabled: !$options.canApplyBatch,
                          loading: $data.batchUpdating,
                          "prepend-icon": "mdi-check-all"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($setup.tm("batchOperations.apply")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick", "disabled", "loading"])
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
        createVNode(VCard, {
          flat: "",
          class: "mt-4"
        }, {
          default: withCtx(() => [
            createVNode(VCardTitle, { class: "d-flex align-center py-3 px-4" }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_15, toDisplayString($setup.tm("groups.title")), 1),
                createVNode(VChip, {
                  size: "small",
                  class: "ml-2",
                  color: "secondary",
                  variant: "outlined"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.tm("groups.count", { count: $data.groups.length })), 1)
                  ]),
                  _: 1
                }),
                createVNode(VSpacer),
                $data.selectedItems.length > 0 && $data.groups.length > 0 ? (openBlock(), createBlock(VBtn, {
                  key: 0,
                  color: "info",
                  variant: "tonal",
                  size: "small",
                  class: "mr-2"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { start: "" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-folder-plus")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" " + toDisplayString($setup.tm("groups.addToGroup")) + " ", 1),
                    createVNode(VMenu, { activator: "parent" }, {
                      default: withCtx(() => [
                        createVNode(VList, { density: "compact" }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList($data.groups, (g) => {
                              return openBlock(), createBlock(VListItem, {
                                key: g.id,
                                onClick: ($event) => $options.addSelectedToGroup(g.id)
                              }, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($setup.tm("groups.customGroupOption", { name: g.name, count: g.umo_count })), 1)
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
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(VBtn, {
                  color: "success",
                  variant: "tonal",
                  size: "small",
                  onClick: $options.openCreateGroupDialog,
                  "prepend-icon": "mdi-folder-plus"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.tm("groups.create")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            }),
            $data.groups.length > 0 ? (openBlock(), createBlock(VCardText, { key: 0 }, {
              default: withCtx(() => [
                createVNode(VRow, { dense: "" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($data.groups, (group) => {
                      return openBlock(), createBlock(VCol, {
                        key: group.id,
                        cols: "12",
                        sm: "6",
                        md: "4",
                        lg: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            variant: "outlined",
                            class: "pa-3"
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_16, [
                                createBaseVNode("div", null, [
                                  createBaseVNode("div", _hoisted_17, toDisplayString(group.name), 1),
                                  createBaseVNode("div", _hoisted_18, toDisplayString($setup.tm("groups.sessionsCount", { count: group.umo_count })), 1)
                                ]),
                                createBaseVNode("div", null, [
                                  createVNode(VBtn, {
                                    icon: "",
                                    size: "small",
                                    variant: "text",
                                    onClick: ($event) => $options.openEditGroupDialog(group)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { size: "small" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-pencil")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode(VBtn, {
                                    icon: "",
                                    size: "small",
                                    variant: "text",
                                    color: "error",
                                    onClick: ($event) => $options.deleteGroup(group)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { size: "small" }, {
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
            })) : (openBlock(), createBlock(VCardText, {
              key: 1,
              class: "text-center text-grey py-6"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($setup.tm("groups.empty")), 1)
              ]),
              _: 1
            }))
          ]),
          _: 1
        }),
        createVNode(VDialog, {
          modelValue: $data.groupDialog,
          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.groupDialog = $event),
          "max-width": "800",
          onAfterEnter: $options.loadAvailableUmos
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "py-3 px-4" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($data.groupDialogMode === "create" ? $setup.tm("groups.create") : $setup.tm("groups.edit")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createVNode(VTextField, {
                      modelValue: $data.editingGroup.name,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.editingGroup.name = $event),
                      label: $setup.tm("groups.name"),
                      variant: "outlined",
                      "hide-details": "",
                      class: "mb-4"
                    }, null, 8, ["modelValue", "label"]),
                    createVNode(VRow, { dense: "" }, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "5" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_19, toDisplayString($setup.tm("groups.availableSessions", { count: $options.unselectedUmos.length })), 1),
                            createVNode(VTextField, {
                              modelValue: $data.groupMemberSearch,
                              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.groupMemberSearch = $event),
                              placeholder: $setup.tm("groups.searchPlaceholder"),
                              variant: "outlined",
                              density: "compact",
                              "hide-details": "",
                              class: "mb-2",
                              clearable: "",
                              "prepend-inner-icon": "mdi-magnify"
                            }, null, 8, ["modelValue", "placeholder"]),
                            createVNode(VList, {
                              density: "compact",
                              class: "transfer-list",
                              lines: "one"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList($options.filteredUnselectedUmos, (umo) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: umo,
                                    onClick: ($event) => $options.addToGroup(umo),
                                    class: "transfer-item"
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: "small",
                                        color: "grey"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-plus")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "text-caption" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString($options.formatUmoShort(umo)), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 128)),
                                $options.filteredUnselectedUmos.length === 0 && !$data.loadingUmos ? (openBlock(), createBlock(VListItem, { key: 0 }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-caption text-grey text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString($setup.tm("groups.noMatch")), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                $data.loadingUmos ? (openBlock(), createBlock(VListItem, { key: 1 }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createVNode(VProgressCircular, {
                                          indeterminate: "",
                                          size: "20"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "2",
                          class: "d-flex flex-column align-center justify-center"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              icon: "",
                              size: "small",
                              variant: "tonal",
                              color: "primary",
                              class: "mb-2",
                              onClick: $options.addAllToGroup,
                              disabled: $options.unselectedUmos.length === 0
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-chevron-double-right")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick", "disabled"]),
                            createVNode(VBtn, {
                              icon: "",
                              size: "small",
                              variant: "tonal",
                              color: "error",
                              onClick: $options.removeAllFromGroup,
                              disabled: $data.editingGroup.umos.length === 0
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-chevron-double-left")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick", "disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "5" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_20, toDisplayString($setup.tm("groups.selectedSessions", { count: $data.editingGroup.umos.length })), 1),
                            createVNode(VTextField, {
                              modelValue: $data.groupSelectedSearch,
                              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.groupSelectedSearch = $event),
                              placeholder: $setup.tm("groups.searchPlaceholder"),
                              variant: "outlined",
                              density: "compact",
                              "hide-details": "",
                              class: "mb-2",
                              clearable: "",
                              "prepend-inner-icon": "mdi-magnify"
                            }, null, 8, ["modelValue", "placeholder"]),
                            createVNode(VList, {
                              density: "compact",
                              class: "transfer-list",
                              lines: "one"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList($options.filteredSelectedUmos, (umo) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: umo,
                                    onClick: ($event) => $options.removeFromGroup(umo),
                                    class: "transfer-item"
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: "small",
                                        color: "error"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-minus")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "text-caption" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString($options.formatUmoShort(umo)), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 128)),
                                $data.editingGroup.umos.length === 0 ? (openBlock(), createBlock(VListItem, { key: 0 }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-caption text-grey text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString($setup.tm("groups.noMembers")), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
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
                createVNode(VCardActions, { class: "px-4 pb-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: _cache[10] || (_cache[10] = ($event) => $data.groupDialog = false)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($setup.tm("buttons.cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      variant: "tonal",
                      onClick: $options.saveGroup
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($setup.tm("buttons.save")), 1)
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
        }, 8, ["modelValue", "onAfterEnter"]),
        createVNode(VDialog, {
          modelValue: $data.addRuleDialog,
          "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $data.addRuleDialog = $event),
          "max-width": "600"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, {
                  class: "py-3 px-4",
                  style: { "display": "flex", "align-items": "center" }
                }, {
                  default: withCtx(() => [
                    createBaseVNode("span", null, toDisplayString($setup.tm("addRule.title")), 1),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      icon: "",
                      variant: "text",
                      onClick: _cache[12] || (_cache[12] = ($event) => $data.addRuleDialog = false)
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
                createVNode(VCardText, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VAlert, {
                      type: "info",
                      variant: "tonal",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($setup.tm("addRule.description")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VAutocomplete, {
                      modelValue: $data.selectedNewUmo,
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $data.selectedNewUmo = $event),
                      items: $data.availableUmos,
                      loading: $data.loadingUmos,
                      label: $setup.tm("addRule.selectUmo"),
                      variant: "outlined",
                      clearable: "",
                      "no-data-text": $setup.tm("addRule.noUmos")
                    }, null, 8, ["modelValue", "items", "loading", "label", "no-data-text"])
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, { class: "px-4 pb-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: _cache[14] || (_cache[14] = ($event) => $data.addRuleDialog = false)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($setup.tm("buttons.cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      variant: "tonal",
                      onClick: $options.createNewRule,
                      disabled: !$data.selectedNewUmo
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($setup.tm("buttons.next")), 1)
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
        }, 8, ["modelValue"]),
        createVNode(VDialog, {
          modelValue: $data.ruleDialog,
          "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => $data.ruleDialog = $event),
          "max-width": "550",
          scrollable: ""
        }, {
          default: withCtx(() => [
            $data.selectedUmo ? (openBlock(), createBlock(VCard, {
              key: 0,
              class: "d-flex flex-column",
              height: "600"
            }, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "py-3 px-6 d-flex align-center border-b" }, {
                  default: withCtx(() => [
                    createBaseVNode("span", null, toDisplayString($setup.tm("ruleEditor.title")), 1),
                    createVNode(VChip, {
                      size: "x-small",
                      class: "ml-2 font-weight-regular",
                      variant: "outlined"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($data.selectedUmo.umo), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      icon: "mdi-close",
                      variant: "text",
                      onClick: $options.closeRuleEditor
                    }, null, 8, ["onClick"])
                  ]),
                  _: 1
                }),
                createVNode(VCardText, { class: "pa-0 overflow-y-auto" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_21, [
                      createBaseVNode("div", _hoisted_22, [
                        createBaseVNode("h3", _hoisted_23, toDisplayString($setup.tm("ruleEditor.serviceConfig.title")), 1)
                      ]),
                      createVNode(VRow, { dense: "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VCheckbox, {
                                modelValue: $data.serviceConfig.session_enabled,
                                "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $data.serviceConfig.session_enabled = $event),
                                label: $setup.tm("ruleEditor.serviceConfig.sessionEnabled"),
                                color: "success",
                                "hide-details": "",
                                class: "mb-2"
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCheckbox, {
                                modelValue: $data.serviceConfig.llm_enabled,
                                "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $data.serviceConfig.llm_enabled = $event),
                                label: $setup.tm("ruleEditor.serviceConfig.llmEnabled"),
                                color: "primary",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "mt-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: $data.serviceConfig.custom_name,
                                "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $data.serviceConfig.custom_name = $event),
                                label: $setup.tm("ruleEditor.serviceConfig.customName"),
                                variant: "outlined",
                                "hide-details": "",
                                clearable: ""
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_24, [
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "tonal",
                          size: "small",
                          onClick: $options.saveServiceConfig,
                          loading: $data.saving,
                          "prepend-icon": "mdi-content-save"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($setup.tm("buttons.save")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick", "loading"])
                      ]),
                      createBaseVNode("div", _hoisted_25, [
                        createBaseVNode("h3", _hoisted_26, toDisplayString($setup.tm("ruleEditor.providerConfig.title")), 1)
                      ]),
                      createVNode(VRow, { dense: "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: $data.providerConfig.chat_completion,
                                "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => $data.providerConfig.chat_completion = $event),
                                items: $options.chatProviderOptions,
                                "item-title": "label",
                                "item-value": "value",
                                label: $setup.tm("ruleEditor.providerConfig.chatProvider"),
                                variant: "outlined",
                                "hide-details": "",
                                class: "mb-2"
                              }, null, 8, ["modelValue", "items", "label"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_27, [
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "tonal",
                          size: "small",
                          onClick: $options.saveProviderConfig,
                          loading: $data.saving,
                          "prepend-icon": "mdi-content-save"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($setup.tm("buttons.save")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick", "loading"])
                      ]),
                      createBaseVNode("div", _hoisted_28, [
                        createBaseVNode("h3", _hoisted_29, toDisplayString($setup.tm("ruleEditor.personaConfig.title")), 1)
                      ]),
                      createVNode(VRow, { dense: "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: $data.serviceConfig.persona_id,
                                "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => $data.serviceConfig.persona_id = $event),
                                items: $options.personaOptions,
                                "item-title": "label",
                                "item-value": "value",
                                label: $setup.tm("ruleEditor.personaConfig.selectPersona"),
                                variant: "outlined",
                                "hide-details": "",
                                clearable: ""
                              }, null, 8, ["modelValue", "items", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VAlert, {
                                type: "info",
                                variant: "tonal",
                                class: "mt-2",
                                icon: "mdi-information-outline"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($setup.tm("ruleEditor.personaConfig.hint")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_30, [
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "tonal",
                          size: "small",
                          onClick: $options.saveServiceConfig,
                          loading: $data.saving,
                          "prepend-icon": "mdi-content-save"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($setup.tm("buttons.save")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick", "loading"])
                      ]),
                      createBaseVNode("div", _hoisted_31, [
                        createBaseVNode("h3", _hoisted_32, toDisplayString($setup.tm("ruleEditor.pluginConfig.title")), 1)
                      ]),
                      createVNode(VRow, { dense: "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: $data.pluginConfig.disabled_plugins,
                                "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => $data.pluginConfig.disabled_plugins = $event),
                                items: $options.pluginOptions,
                                "item-title": "label",
                                "item-value": "value",
                                label: $setup.tm("ruleEditor.pluginConfig.disabledPlugins"),
                                variant: "outlined",
                                "hide-details": "",
                                multiple: "",
                                chips: "",
                                "closable-chips": "",
                                clearable: ""
                              }, null, 8, ["modelValue", "items", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VAlert, {
                                type: "info",
                                variant: "tonal",
                                class: "mt-2",
                                icon: "mdi-information-outline"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($setup.tm("ruleEditor.pluginConfig.hint")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_33, [
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "tonal",
                          size: "small",
                          onClick: $options.savePluginConfig,
                          loading: $data.saving,
                          "prepend-icon": "mdi-content-save"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($setup.tm("buttons.save")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick", "loading"])
                      ]),
                      createBaseVNode("div", _hoisted_34, [
                        createBaseVNode("h3", _hoisted_35, toDisplayString($setup.tm("ruleEditor.kbConfig.title")), 1)
                      ]),
                      createVNode(VRow, { dense: "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: $data.kbConfig.kb_ids,
                                "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => $data.kbConfig.kb_ids = $event),
                                items: $options.kbOptions,
                                "item-title": "label",
                                "item-value": "value",
                                disabled: $data.availableKbs.length === 0,
                                label: $setup.tm("ruleEditor.kbConfig.selectKbs"),
                                variant: "outlined",
                                "hide-details": "",
                                multiple: "",
                                chips: "",
                                "closable-chips": "",
                                clearable: ""
                              }, null, 8, ["modelValue", "items", "disabled", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: $data.kbConfig.top_k,
                                "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => $data.kbConfig.top_k = $event),
                                modelModifiers: { number: true },
                                label: $setup.tm("ruleEditor.kbConfig.topK"),
                                variant: "outlined",
                                "hide-details": "",
                                type: "number",
                                min: "1",
                                max: "20",
                                class: "mt-3"
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCheckbox, {
                                modelValue: $data.kbConfig.enable_rerank,
                                "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => $data.kbConfig.enable_rerank = $event),
                                label: $setup.tm("ruleEditor.kbConfig.enableRerank"),
                                color: "primary",
                                "hide-details": "",
                                class: "mt-3"
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_36, [
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "tonal",
                          size: "small",
                          onClick: $options.saveKbConfig,
                          loading: $data.saving,
                          "prepend-icon": "mdi-content-save"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($setup.tm("buttons.save")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick", "loading"])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(VDialog, {
          modelValue: $data.deleteDialog,
          "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => $data.deleteDialog = $event),
          "max-width": "400"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "text-h6" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.tm("deleteConfirm.title")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, null, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      createTextVNode(toDisplayString($setup.tm("deleteConfirm.message")) + " ", 1),
                      _hoisted_37,
                      _hoisted_38,
                      createBaseVNode("code", null, toDisplayString((_a = $data.deleteTarget) == null ? void 0 : _a.umo), 1)
                    ];
                  }),
                  _: 1
                }),
                createVNode(VCardActions, null, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: _cache[26] || (_cache[26] = ($event) => $data.deleteDialog = false)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($setup.tm("buttons.cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "error",
                      variant: "tonal",
                      onClick: $options.deleteAllRules,
                      loading: $data.deleting
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($setup.tm("buttons.delete")), 1)
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
        createVNode(VDialog, {
          modelValue: $data.batchDeleteDialog,
          "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => $data.batchDeleteDialog = $event),
          "max-width": "500"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "text-h6" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.tm("batchDeleteConfirm.title")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.tm("batchDeleteConfirm.message", { count: $data.selectedItems.length })) + " ", 1),
                    createBaseVNode("div", _hoisted_39, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.selectedItems, (item) => {
                        return openBlock(), createBlock(VChip, {
                          key: item.umo,
                          size: "small",
                          class: "ma-1",
                          variant: "outlined"
                        }, {
                          default: withCtx(() => {
                            var _a, _b;
                            return [
                              createTextVNode(toDisplayString(((_b = (_a = item.rules) == null ? void 0 : _a.session_service_config) == null ? void 0 : _b.custom_name) || item.umo), 1)
                            ];
                          }),
                          _: 2
                        }, 1024);
                      }), 128))
                    ])
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, null, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: _cache[28] || (_cache[28] = ($event) => $data.batchDeleteDialog = false)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($setup.tm("buttons.cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "error",
                      variant: "tonal",
                      onClick: $options.batchDeleteRules,
                      loading: $data.deleting
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($setup.tm("buttons.delete")), 1)
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
          modelValue: $data.snackbar,
          "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => $data.snackbar = $event),
          timeout: 3e3,
          elevation: "24",
          color: $data.snackbarColor,
          location: "top"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($data.snackbarText), 1)
          ]),
          _: 1
        }, 8, ["modelValue", "color"]),
        createVNode(VDialog, {
          modelValue: $data.quickEditNameDialog,
          "onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => $data.quickEditNameDialog = $event),
          "max-width": "400"
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, { class: "py-3 px-4" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.tm("quickEditName.title")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, { class: "pa-4" }, {
                  default: withCtx(() => [
                    createVNode(VTextField, {
                      modelValue: $data.quickEditNameValue,
                      "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => $data.quickEditNameValue = $event),
                      label: $setup.tm("ruleEditor.serviceConfig.customName"),
                      variant: "outlined",
                      "hide-details": "",
                      clearable: "",
                      autofocus: "",
                      onKeyup: withKeys($options.saveQuickEditName, ["enter"])
                    }, null, 8, ["modelValue", "label", "onKeyup"])
                  ]),
                  _: 1
                }),
                createVNode(VCardActions, { class: "px-4 pb-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      variant: "text",
                      onClick: _cache[32] || (_cache[32] = ($event) => $data.quickEditNameDialog = false)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($setup.tm("buttons.cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      variant: "tonal",
                      onClick: $options.saveQuickEditName,
                      loading: $data.saving
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($setup.tm("buttons.save")), 1)
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
        }, 8, ["modelValue"])
      ]),
      _: 1
    })
  ]);
}
const SessionManagementPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a73cb67e"]]);
export {
  SessionManagementPage as default
};
