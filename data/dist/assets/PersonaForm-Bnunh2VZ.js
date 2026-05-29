import { D as defineComponent, _ as _export_sfc, c as createElementBlock, b as createVNode, w as withCtx, ah as VListItemTitle, d as createTextVNode, t as toDisplayString, h as createBlock, l as VIcon, a0 as withModifiers, e as VBtn, U as normalizeStyle, ag as VListItem, S as withDirectives, W as vShow, a as createBaseVNode, F as Fragment, r as renderList, aw as VExpandTransition, C as resolveComponent, o as openBlock, B as axios, u as useModuleI18n, a6 as VCardTitle, v as VCardText, k as VAlert, i as createCommentVNode, aK as VForm, ab as VRow, ad as VCol, j as VTextField, aL as VTextarea, aS as VExpansionPanels, aV as VExpansionPanel, aT as VExpansionPanelTitle, g as VChip, aU as VExpansionPanelText, au as VRadioGroup, at as VRadio, b5 as VVirtualScroll, a7 as VTooltip, aB as VListItemSubtitle, b6 as VCheckboxBtn, aM as normalizeProps, aN as guardReactiveProps, aj as VProgressCircular, a2 as mergeProps, a9 as VCardActions, V as VSpacer, T as normalizeClass, s as VCard, ai as VDialog } from "./index-C6xMvtNz.js";
import { a as askForConfirmation, u as useConfirmDialog } from "./confirmDialog-BGytizx-.js";
const _sfc_main$1 = defineComponent({
  name: "BaseMoveTargetNode",
  props: {
    folder: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      default: 0
    },
    selectedFolderId: {
      type: String,
      default: null
    },
    disabledFolderIds: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select"],
  data() {
    return {
      isExpanded: true
    };
  },
  computed: {
    hasChildren() {
      return this.folder.children && this.folder.children.length > 0;
    },
    isDisabled() {
      return this.disabledFolderIds.includes(this.folder.folder_id);
    }
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    }
  }
});
const _hoisted_1$1 = { class: "base-move-target-node" };
const _hoisted_2$1 = {
  key: 1,
  class: "expand-placeholder"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseMoveTargetNode = resolveComponent("BaseMoveTargetNode", true);
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(VListItem, {
      active: _ctx.selectedFolderId === _ctx.folder.folder_id,
      disabled: _ctx.isDisabled,
      onClick: _cache[0] || (_cache[0] = withModifiers(($event) => !_ctx.isDisabled && _ctx.$emit("select", _ctx.folder.folder_id), ["stop"])),
      rounded: "lg",
      style: normalizeStyle({ paddingLeft: `${(_ctx.depth + 1) * 16}px` }),
      class: "folder-item"
    }, {
      prepend: withCtx(() => [
        _ctx.hasChildren ? (openBlock(), createBlock(VBtn, {
          key: 0,
          icon: "",
          variant: "text",
          size: "x-small",
          onClick: withModifiers(_ctx.toggleExpand, ["stop"]),
          class: "expand-btn",
          disabled: _ctx.isDisabled
        }, {
          default: withCtx(() => [
            createVNode(VIcon, { size: "16" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.isExpanded ? "mdi-chevron-down" : "mdi-chevron-right"), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["onClick", "disabled"])) : (openBlock(), createElementBlock("div", _hoisted_2$1)),
        createVNode(VIcon, {
          color: _ctx.isDisabled ? "grey" : _ctx.selectedFolderId === _ctx.folder.folder_id ? "primary" : ""
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.isExpanded ? "mdi-folder-open" : "mdi-folder"), 1)
          ]),
          _: 1
        }, 8, ["color"])
      ]),
      default: withCtx(() => [
        createVNode(VListItemTitle, { class: "text-truncate" }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.folder.name), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["active", "disabled", "style"]),
    createVNode(VExpandTransition, null, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.folder.children, (child) => {
            return openBlock(), createBlock(_component_BaseMoveTargetNode, {
              key: child.folder_id,
              folder: child,
              depth: _ctx.depth + 1,
              "selected-folder-id": _ctx.selectedFolderId,
              "disabled-folder-ids": _ctx.disabledFolderIds,
              onSelect: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("select", $event))
            }, null, 8, ["folder", "depth", "selected-folder-id", "disabled-folder-ids"]);
          }), 128))
        ], 512), [
          [vShow, _ctx.isExpanded && _ctx.hasChildren]
        ])
      ]),
      _: 1
    })
  ]);
}
const BaseMoveTargetNode = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-b464b8a2"]]);
const _sfc_main = {
  name: "PersonaForm",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    editingPersona: {
      type: Object,
      default: null
    },
    currentFolderId: {
      type: String,
      default: null
    },
    currentFolderName: {
      type: String,
      default: null
    }
  },
  emits: ["update:modelValue", "saved", "error", "deleted"],
  setup() {
    const { tm } = useModuleI18n("features/persona");
    const confirmDialog = useConfirmDialog();
    return { tm, confirmDialog };
  },
  data() {
    return {
      toolSelectValue: "0",
      // 默认选择全部工具
      saving: false,
      expandedPanels: [],
      formValid: false,
      mcpServers: [],
      availableTools: [],
      loadingTools: false,
      availableSkills: [],
      loadingSkills: false,
      existingPersonaIds: [],
      // 已存在的人格ID列表
      personaForm: {
        persona_id: "",
        system_prompt: "",
        custom_error_message: "",
        begin_dialogs: [],
        tools: [],
        skills: [],
        folder_id: null
      },
      personaIdRules: [
        (v) => !!v || this.tm("validation.required"),
        (v) => v && v.length >= 1 || this.tm("validation.minLength", { min: 1 }),
        (v) => !this.existingPersonaIds.includes(v) || this.tm("validation.personaIdExists")
      ],
      systemPromptRules: [
        (v) => !!v || this.tm("validation.required"),
        (v) => v && v.length >= 10 || this.tm("validation.minLength", { min: 10 })
      ],
      toolSearch: "",
      skillSearch: "",
      skillSelectValue: "0"
    };
  },
  computed: {
    showDialog: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    },
    filteredTools() {
      if (!this.toolSearch) {
        return this.availableTools;
      }
      const search = this.toolSearch.toLowerCase();
      return this.availableTools.filter(
        (tool) => tool.name.toLowerCase().includes(search) || tool.description && tool.description.toLowerCase().includes(search) || tool.mcp_server_name && tool.mcp_server_name.toLowerCase().includes(search)
      );
    },
    filteredSkills() {
      if (!this.skillSearch) {
        return this.availableSkills;
      }
      const search = this.skillSearch.toLowerCase();
      return this.availableSkills.filter(
        (skill) => skill.name.toLowerCase().includes(search) || skill.description && skill.description.toLowerCase().includes(search)
      );
    },
    folderDisplayName() {
      if (this.currentFolderName) {
        return this.currentFolderName;
      }
      if (!this.currentFolderId) {
        return this.tm("form.rootFolder");
      }
      return this.currentFolderId;
    }
  },
  watch: {
    modelValue(newValue) {
      if (newValue) {
        if (this.editingPersona) {
          this.initFormWithPersona(this.editingPersona);
        } else {
          this.initForm();
          this.loadExistingPersonaIds();
        }
        this.loadMcpServers();
        this.loadTools();
        this.loadSkills();
      }
    },
    editingPersona: {
      immediate: true,
      handler(newPersona) {
        if (this.modelValue) {
          if (newPersona) {
            this.initFormWithPersona(newPersona);
          } else {
            this.initForm();
          }
        }
      }
    },
    toolSelectValue(newValue) {
      if (newValue === "0") {
        this.personaForm.tools = null;
      } else if (newValue === "1") {
        if (this.personaForm.tools === null) {
          this.personaForm.tools = [];
        }
      }
    },
    skillSelectValue(newValue) {
      if (newValue === "0") {
        this.personaForm.skills = null;
      } else if (newValue === "1") {
        if (this.personaForm.skills === null) {
          this.personaForm.skills = [];
        }
      }
    }
  },
  methods: {
    initForm() {
      this.personaForm = {
        persona_id: "",
        system_prompt: "",
        custom_error_message: "",
        begin_dialogs: [],
        tools: [],
        skills: [],
        folder_id: this.currentFolderId
      };
      this.toolSelectValue = "0";
      this.skillSelectValue = "0";
      this.expandedPanels = this.getDefaultExpandedPanels();
    },
    initFormWithPersona(persona) {
      this.personaForm = {
        persona_id: persona.persona_id,
        system_prompt: persona.system_prompt,
        custom_error_message: persona.custom_error_message || "",
        begin_dialogs: [...persona.begin_dialogs || []],
        tools: persona.tools === null ? null : [...persona.tools || []],
        skills: persona.skills === null ? null : [...persona.skills || []],
        folder_id: persona.folder_id
      };
      this.toolSelectValue = persona.tools === null ? "0" : "1";
      this.skillSelectValue = persona.skills === null ? "0" : "1";
      this.expandedPanels = this.getDefaultExpandedPanels();
    },
    getDefaultExpandedPanels() {
      return this.$vuetify.display.smAndDown ? [] : ["tools", "skills", "dialogs"];
    },
    closeDialog() {
      this.showDialog = false;
    },
    async loadMcpServers() {
      var _a, _b;
      try {
        const response = await axios.get("/api/tools/mcp/servers");
        if (response.data.status === "ok") {
          this.mcpServers = response.data.data || [];
        } else {
          this.$emit("error", response.data.message || "Failed to load MCP servers");
        }
      } catch (error) {
        this.$emit("error", ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Failed to load MCP servers");
        this.mcpServers = [];
      }
    },
    async loadTools() {
      var _a, _b;
      this.loadingTools = true;
      try {
        const response = await axios.get("/api/tools/list");
        if (response.data.status === "ok") {
          this.availableTools = response.data.data || [];
        } else {
          this.$emit("error", response.data.message || "Failed to load tools");
        }
      } catch (error) {
        this.$emit("error", ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Failed to load tools");
        this.availableTools = [];
      } finally {
        this.loadingTools = false;
      }
    },
    async loadSkills() {
      var _a, _b;
      this.loadingSkills = true;
      try {
        const response = await axios.get("/api/skills");
        if (response.data.status === "ok") {
          const payload = response.data.data || [];
          if (Array.isArray(payload)) {
            this.availableSkills = payload.filter((skill) => skill.active !== false);
          } else {
            const skills = payload.skills || [];
            this.availableSkills = skills.filter((skill) => skill.active !== false);
          }
        } else {
          this.$emit("error", response.data.message || "Failed to load skills");
        }
      } catch (error) {
        this.$emit("error", ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Failed to load skills");
        this.availableSkills = [];
      } finally {
        this.loadingSkills = false;
      }
    },
    async loadExistingPersonaIds() {
      try {
        const response = await axios.get("/api/persona/list");
        if (response.data.status === "ok") {
          this.existingPersonaIds = (response.data.data || []).map((p) => p.persona_id);
        }
      } catch (error) {
        this.existingPersonaIds = [];
      }
    },
    async savePersona() {
      var _a, _b;
      if (!this.formValid) return;
      if (this.personaForm.begin_dialogs.length > 0) {
        for (let i = 0; i < this.personaForm.begin_dialogs.length; i++) {
          if (!this.personaForm.begin_dialogs[i] || this.personaForm.begin_dialogs[i].trim() === "") {
            const dialogType = i % 2 === 0 ? this.tm("form.userMessage") : this.tm("form.assistantMessage");
            this.$emit("error", this.tm("validation.dialogRequired", { type: dialogType }));
            return;
          }
        }
      }
      this.saving = true;
      try {
        const url = this.editingPersona ? "/api/persona/update" : "/api/persona/create";
        const response = await axios.post(url, this.personaForm);
        if (response.data.status === "ok") {
          this.$emit("saved", response.data.message || this.tm("messages.saveSuccess"));
          this.closeDialog();
        } else {
          this.$emit("error", response.data.message || this.tm("messages.saveError"));
        }
      } catch (error) {
        this.$emit("error", ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || this.tm("messages.saveError"));
      }
      this.saving = false;
    },
    async deletePersona() {
      var _a, _b;
      if (!this.editingPersona) return;
      if (!await askForConfirmation(
        this.tm("messages.deleteConfirm", { id: this.editingPersona.persona_id }),
        this.confirmDialog
      )) {
        return;
      }
      this.saving = true;
      try {
        const response = await axios.post("/api/persona/delete", {
          persona_id: this.editingPersona.persona_id
        });
        if (response.data.status === "ok") {
          this.$emit("deleted", response.data.message || this.tm("messages.deleteSuccess"));
          this.closeDialog();
        } else {
          this.$emit("error", response.data.message || this.tm("messages.deleteError"));
        }
      } catch (error) {
        this.$emit("error", ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || this.tm("messages.deleteError"));
      } finally {
        this.saving = false;
      }
    },
    addDialogPair() {
      this.personaForm.begin_dialogs.push("", "");
      if (!this.expandedPanels.includes("dialogs")) {
        this.expandedPanels.push("dialogs");
      }
    },
    removeDialog(index) {
      if (index % 2 === 0 && index + 1 < this.personaForm.begin_dialogs.length) {
        this.personaForm.begin_dialogs.splice(index, 2);
      } else if (index % 2 === 1 && index - 1 >= 0) {
        this.personaForm.begin_dialogs.splice(index - 1, 2);
      }
    },
    toggleMcpServer(server) {
      if (!server.tools || server.tools.length === 0) return;
      if (this.personaForm.tools === null) {
        this.personaForm.tools = this.availableTools.map((tool) => tool.name).filter((toolName) => !server.tools.includes(toolName));
        this.toolSelectValue = "1";
        return;
      }
      if (!Array.isArray(this.personaForm.tools)) {
        this.personaForm.tools = [];
        this.toolSelectValue = "1";
      }
      const serverTools = server.tools;
      const allSelected = serverTools.every((toolName) => this.personaForm.tools.includes(toolName));
      if (allSelected) {
        this.personaForm.tools = this.personaForm.tools.filter(
          (toolName) => !serverTools.includes(toolName)
        );
      } else {
        serverTools.forEach((toolName) => {
          if (!this.personaForm.tools.includes(toolName)) {
            this.personaForm.tools.push(toolName);
          }
        });
      }
    },
    toggleTool(toolName) {
      if (this.isBuiltinToolName(toolName)) {
        return;
      }
      if (this.personaForm.tools === null) {
        this.personaForm.tools = this.availableTools.map((tool) => tool.name).filter((name) => name !== toolName);
        this.toolSelectValue = "1";
      } else if (Array.isArray(this.personaForm.tools)) {
        const index = this.personaForm.tools.indexOf(toolName);
        if (index !== -1) {
          this.personaForm.tools.splice(index, 1);
        } else {
          this.personaForm.tools.push(toolName);
        }
      } else {
        this.personaForm.tools = [toolName];
        this.toolSelectValue = "1";
      }
    },
    removeTool(toolName) {
      if (this.isBuiltinToolName(toolName)) {
        return;
      }
      if (this.personaForm.tools === null) {
        this.personaForm.tools = this.availableTools.map((tool) => tool.name).filter((name) => name !== toolName);
        this.toolSelectValue = "1";
      } else if (Array.isArray(this.personaForm.tools)) {
        const index = this.personaForm.tools.indexOf(toolName);
        if (index !== -1) {
          this.personaForm.tools.splice(index, 1);
        }
      }
    },
    toggleSkill(skillName) {
      if (this.personaForm.skills === null) {
        this.personaForm.skills = this.availableSkills.map((skill) => skill.name).filter((name) => name !== skillName);
        this.skillSelectValue = "1";
      } else if (Array.isArray(this.personaForm.skills)) {
        const index = this.personaForm.skills.indexOf(skillName);
        if (index !== -1) {
          this.personaForm.skills.splice(index, 1);
        } else {
          this.personaForm.skills.push(skillName);
        }
      } else {
        this.personaForm.skills = [skillName];
        this.skillSelectValue = "1";
      }
    },
    removeSkill(skillName) {
      if (this.personaForm.skills === null) {
        this.personaForm.skills = this.availableSkills.map((skill) => skill.name).filter((name) => name !== skillName);
        this.skillSelectValue = "1";
      } else if (Array.isArray(this.personaForm.skills)) {
        const index = this.personaForm.skills.indexOf(skillName);
        if (index !== -1) {
          this.personaForm.skills.splice(index, 1);
        }
      }
    },
    truncateText(text, maxLength) {
      if (!text) return "";
      return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    },
    isBuiltinTool(tool) {
      return (tool == null ? void 0 : tool.origin) === "builtin" || (tool == null ? void 0 : tool.readonly) === true;
    },
    isBuiltinToolName(toolName) {
      return this.availableTools.some((tool) => tool.name === toolName && this.isBuiltinTool(tool));
    },
    getDialogRules(index) {
      const dialogType = index % 2 === 0 ? this.tm("form.userMessage") : this.tm("form.assistantMessage");
      return [
        (v) => !!v || this.tm("validation.dialogRequired", { type: dialogType }),
        (v) => v && v.trim().length > 0 || this.tm("validation.dialogRequired", { type: dialogType })
      ];
    },
    isToolSelected(toolName) {
      if (this.personaForm.tools === null) {
        return true;
      }
      return Array.isArray(this.personaForm.tools) && this.personaForm.tools.includes(toolName);
    },
    isSkillSelected(skillName) {
      if (this.personaForm.skills === null) {
        return true;
      }
      return Array.isArray(this.personaForm.skills) && this.personaForm.skills.includes(skillName);
    },
    isServerSelected(server) {
      if (!server.tools || server.tools.length === 0) return false;
      if (this.personaForm.tools === null) {
        return true;
      }
      return Array.isArray(this.personaForm.tools) && server.tools.every((toolName) => this.personaForm.tools.includes(toolName));
    }
  }
};
const _hoisted_1 = { class: "mb-3" };
const _hoisted_2 = { class: "text-body-2 text-medium-emphasis" };
const _hoisted_3 = {
  key: 0,
  class: "mt-3 selected-config-area"
};
const _hoisted_4 = {
  key: 0,
  class: "mb-4"
};
const _hoisted_5 = { class: "text-subtitle-2 mb-2" };
const _hoisted_6 = { class: "d-flex flex-wrap ga-2" };
const _hoisted_7 = {
  key: 1,
  class: "tools-selection"
};
const _hoisted_8 = {
  key: 1,
  class: "builtin-tool-checkbox-placeholder"
};
const _hoisted_9 = {
  key: 2,
  class: "text-center pa-4"
};
const _hoisted_10 = { class: "text-body-2 text-medium-emphasis" };
const _hoisted_11 = {
  key: 3,
  class: "text-center pa-4"
};
const _hoisted_12 = { class: "text-body-2 text-medium-emphasis" };
const _hoisted_13 = {
  key: 4,
  class: "text-center pa-4"
};
const _hoisted_14 = { class: "text-body-2 text-medium-emphasis mt-2" };
const _hoisted_15 = { class: "mt-4" };
const _hoisted_16 = { class: "text-subtitle-2 mb-2" };
const _hoisted_17 = {
  key: 0,
  class: "text-success"
};
const _hoisted_18 = { key: 1 };
const _hoisted_19 = {
  key: 0,
  class: "d-flex flex-wrap ga-1",
  style: { "max-height": "100px", "overflow-y": "auto" }
};
const _hoisted_20 = {
  key: 1,
  class: "text-body-2 text-medium-emphasis"
};
const _hoisted_21 = { class: "mb-3" };
const _hoisted_22 = { class: "text-body-2 text-medium-emphasis" };
const _hoisted_23 = {
  key: 0,
  class: "mt-3 selected-config-area"
};
const _hoisted_24 = {
  key: 0,
  class: "skills-selection"
};
const _hoisted_25 = {
  key: 1,
  class: "text-center pa-4"
};
const _hoisted_26 = { class: "text-body-2 text-medium-emphasis" };
const _hoisted_27 = {
  key: 2,
  class: "text-center pa-4"
};
const _hoisted_28 = { class: "text-body-2 text-medium-emphasis" };
const _hoisted_29 = {
  key: 3,
  class: "text-center pa-4"
};
const _hoisted_30 = { class: "text-body-2 text-medium-emphasis mt-2" };
const _hoisted_31 = { class: "mt-4" };
const _hoisted_32 = { class: "text-subtitle-2 mb-2" };
const _hoisted_33 = {
  key: 0,
  class: "text-success"
};
const _hoisted_34 = { key: 1 };
const _hoisted_35 = {
  key: 0,
  class: "d-flex flex-wrap ga-1",
  style: { "max-height": "100px", "overflow-y": "auto" }
};
const _hoisted_36 = {
  key: 1,
  class: "text-body-2 text-medium-emphasis"
};
const _hoisted_37 = { class: "mb-3" };
const _hoisted_38 = { class: "text-body-2 text-medium-emphasis" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_chip_text = resolveComponent("v-chip-text");
  return openBlock(), createBlock(VDialog, {
    modelValue: $options.showDialog,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $options.showDialog = $event),
    "max-width": _ctx.$vuetify.display.smAndDown ? void 0 : "1200px",
    scrollable: ""
  }, {
    default: withCtx(() => [
      createVNode(VCard, {
        class: normalizeClass(["persona-form-card", { "persona-form-card-mobile": _ctx.$vuetify.display.smAndDown }])
      }, {
        default: withCtx(() => [
          createVNode(VCardTitle, { class: "persona-form-title text-h2 px-6 pt-6 pl-6" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($props.editingPersona ? $setup.tm("dialog.edit.title") : $setup.tm("dialog.create.title")), 1)
            ]),
            _: 1
          }),
          createVNode(VCardText, { class: "persona-form-content" }, {
            default: withCtx(() => [
              !$props.editingPersona ? (openBlock(), createBlock(VAlert, {
                key: 0,
                type: "info",
                variant: "tonal",
                density: "compact",
                class: "mb-4",
                icon: "mdi-folder-outline"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString($setup.tm("form.createInFolder", { folder: $options.folderDisplayName })), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(VForm, {
                ref: "personaForm",
                modelValue: $data.formValid,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.formValid = $event)
              }, {
                default: withCtx(() => [
                  createVNode(VRow, { class: "persona-form-layout" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "6",
                        class: "persona-basic-col"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: $data.personaForm.persona_id,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.personaForm.persona_id = $event),
                            label: $setup.tm("form.personaId"),
                            rules: $data.personaIdRules,
                            disabled: $props.editingPersona,
                            variant: "outlined",
                            density: "comfortable",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "label", "rules", "disabled"]),
                          createVNode(VTextarea, {
                            modelValue: $data.personaForm.system_prompt,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.personaForm.system_prompt = $event),
                            label: $setup.tm("form.systemPrompt"),
                            rules: $data.systemPromptRules,
                            variant: "outlined",
                            rows: "16",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "label", "rules"]),
                          createVNode(VTextarea, {
                            modelValue: $data.personaForm.custom_error_message,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.personaForm.custom_error_message = $event),
                            label: $setup.tm("form.customErrorMessage"),
                            hint: $setup.tm("form.customErrorMessageHelp"),
                            variant: "outlined",
                            rows: "4",
                            "persistent-hint": "",
                            clearable: "",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "label", "hint"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6",
                        class: "persona-panels-col"
                      }, {
                        default: withCtx(() => [
                          createVNode(VExpansionPanels, {
                            modelValue: $data.expandedPanels,
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.expandedPanels = $event),
                            multiple: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VExpansionPanel, { value: "tools" }, {
                                default: withCtx(() => [
                                  createVNode(VExpansionPanelTitle, null, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { class: "mr-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-tools")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" " + toDisplayString($setup.tm("form.tools")) + " ", 1),
                                      Array.isArray($data.personaForm.tools) && $data.personaForm.tools.length > 0 ? (openBlock(), createBlock(VChip, {
                                        key: 0,
                                        size: "small",
                                        color: "primary",
                                        variant: "tonal",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString($data.personaForm.tools.length), 1)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VExpansionPanelText, null, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_1, [
                                        createBaseVNode("p", _hoisted_2, toDisplayString($setup.tm("form.toolsHelp")), 1)
                                      ]),
                                      createVNode(VRadioGroup, {
                                        class: "mt-2",
                                        modelValue: $data.toolSelectValue,
                                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.toolSelectValue = $event),
                                        "hide-details": "true"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRadio, {
                                            label: "默认使用全部函数工具",
                                            value: "0"
                                          }),
                                          createVNode(VRadio, {
                                            label: "选择指定函数工具",
                                            value: "1"
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue"]),
                                      $data.toolSelectValue === "1" ? (openBlock(), createElementBlock("div", _hoisted_3, [
                                        createVNode(VTextField, {
                                          modelValue: $data.toolSearch,
                                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.toolSearch = $event),
                                          label: $setup.tm("form.searchTools"),
                                          "prepend-inner-icon": "mdi-magnify",
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": "",
                                          clearable: "",
                                          class: "mb-3"
                                        }, null, 8, ["modelValue", "label"]),
                                        $data.mcpServers.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
                                          createBaseVNode("h4", _hoisted_5, toDisplayString($setup.tm("form.mcpServersQuickSelect")), 1),
                                          createBaseVNode("div", _hoisted_6, [
                                            (openBlock(true), createElementBlock(Fragment, null, renderList($data.mcpServers, (server) => {
                                              return openBlock(), createBlock(VChip, {
                                                key: server.name,
                                                color: $options.isServerSelected(server) ? "primary" : "default",
                                                variant: $options.isServerSelected(server) ? "flat" : "outlined",
                                                size: "small",
                                                clickable: "",
                                                onClick: ($event) => $options.toggleMcpServer(server),
                                                disabled: !server.tools || server.tools.length === 0
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    start: "",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-server")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createTextVNode(" " + toDisplayString(server.name) + " ", 1),
                                                  server.tools ? (openBlock(), createBlock(_component_v_chip_text, {
                                                    key: 0,
                                                    class: "ml-1"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" (" + toDisplayString(server.tools.length) + ") ", 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)) : createCommentVNode("", true)
                                                ]),
                                                _: 2
                                              }, 1032, ["color", "variant", "onClick", "disabled"]);
                                            }), 128))
                                          ])
                                        ])) : createCommentVNode("", true),
                                        $options.filteredTools.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_7, [
                                          createVNode(VVirtualScroll, {
                                            items: $options.filteredTools,
                                            height: "300",
                                            "item-height": "72"
                                          }, {
                                            default: withCtx(({ item }) => [
                                              createVNode(VTooltip, {
                                                disabled: !$options.isBuiltinTool(item),
                                                location: "top"
                                              }, {
                                                activator: withCtx(({ props: tooltipProps }) => [
                                                  createBaseVNode("div", normalizeProps(guardReactiveProps(tooltipProps)), [
                                                    (openBlock(), createBlock(VListItem, {
                                                      key: item.name,
                                                      density: "comfortable",
                                                      disabled: $options.isBuiltinTool(item),
                                                      onClick: ($event) => $options.toggleTool(item.name)
                                                    }, {
                                                      prepend: withCtx(() => [
                                                        !$options.isBuiltinTool(item) ? (openBlock(), createBlock(VCheckboxBtn, {
                                                          key: 0,
                                                          "model-value": $options.isToolSelected(item.name),
                                                          onClick: withModifiers(($event) => $options.toggleTool(item.name), ["stop"])
                                                        }, null, 8, ["model-value", "onClick"])) : (openBlock(), createElementBlock("div", _hoisted_8))
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item.name) + " ", 1),
                                                            item.origin ? (openBlock(), createBlock(VChip, {
                                                              key: 0,
                                                              size: "x-small",
                                                              color: "info",
                                                              class: "mr-2",
                                                              variant: "tonal"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(item.origin), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)) : createCommentVNode("", true),
                                                            item.origin_name ? (openBlock(), createBlock(VChip, {
                                                              key: 1,
                                                              size: "x-small",
                                                              color: "info",
                                                              variant: "outlined"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(item.origin_name), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)) : createCommentVNode("", true)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        item.description ? (openBlock(), createBlock(VListItemSubtitle, { key: 0 }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString($options.truncateText(item.description, 100)), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)) : createCommentVNode("", true)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["disabled", "onClick"]))
                                                  ], 16)
                                                ]),
                                                default: withCtx(() => [
                                                  createBaseVNode("span", null, toDisplayString($setup.tm("form.builtinToolDisabledHint")), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["disabled"])
                                            ]),
                                            _: 1
                                          }, 8, ["items"])
                                        ])) : !$data.loadingTools && $data.availableTools.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_9, [
                                          createVNode(VIcon, {
                                            size: "48",
                                            color: "grey-lighten-2",
                                            class: "mb-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-tools")
                                            ]),
                                            _: 1
                                          }),
                                          createBaseVNode("p", _hoisted_10, toDisplayString($setup.tm("form.noToolsAvailable")), 1)
                                        ])) : !$data.loadingTools && $options.filteredTools.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_11, [
                                          createVNode(VIcon, {
                                            size: "48",
                                            color: "grey-lighten-2",
                                            class: "mb-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-magnify")
                                            ]),
                                            _: 1
                                          }),
                                          createBaseVNode("p", _hoisted_12, toDisplayString($setup.tm("form.noToolsFound")), 1)
                                        ])) : createCommentVNode("", true),
                                        $data.loadingTools ? (openBlock(), createElementBlock("div", _hoisted_13, [
                                          createVNode(VProgressCircular, {
                                            indeterminate: "",
                                            color: "primary"
                                          }),
                                          createBaseVNode("p", _hoisted_14, toDisplayString($setup.tm("form.loadingTools")), 1)
                                        ])) : createCommentVNode("", true),
                                        createBaseVNode("div", _hoisted_15, [
                                          createBaseVNode("h4", _hoisted_16, [
                                            createTextVNode(toDisplayString($setup.tm("form.selectedTools")) + " ", 1),
                                            $data.personaForm.tools === null ? (openBlock(), createElementBlock("span", _hoisted_17, " (" + toDisplayString($setup.tm("form.allSelected")) + ") ", 1)) : Array.isArray($data.personaForm.tools) ? (openBlock(), createElementBlock("span", _hoisted_18, " (" + toDisplayString($data.personaForm.tools.length) + ") ", 1)) : createCommentVNode("", true)
                                          ]),
                                          Array.isArray($data.personaForm.tools) && $data.personaForm.tools.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_19, [
                                            (openBlock(true), createElementBlock(Fragment, null, renderList($data.personaForm.tools, (toolName) => {
                                              return openBlock(), createBlock(VTooltip, {
                                                key: toolName,
                                                disabled: !$options.isBuiltinToolName(toolName),
                                                location: "top"
                                              }, {
                                                activator: withCtx(({ props: tooltipProps }) => [
                                                  createVNode(VChip, mergeProps(tooltipProps, {
                                                    size: "small",
                                                    color: "primary",
                                                    variant: "tonal",
                                                    closable: !$options.isBuiltinToolName(toolName),
                                                    "onClick:close": ($event) => $options.removeTool(toolName)
                                                  }), {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(toolName), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1040, ["closable", "onClick:close"])
                                                ]),
                                                default: withCtx(() => [
                                                  createBaseVNode("span", null, toDisplayString($setup.tm("form.builtinToolDisabledHint")), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["disabled"]);
                                            }), 128))
                                          ])) : (openBlock(), createElementBlock("div", _hoisted_20, toDisplayString($setup.tm("form.noToolsSelected")), 1))
                                        ])
                                      ])) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VExpansionPanel, { value: "skills" }, {
                                default: withCtx(() => [
                                  createVNode(VExpansionPanelTitle, null, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { class: "mr-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-lightning-bolt")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" " + toDisplayString($setup.tm("form.skills")) + " ", 1),
                                      Array.isArray($data.personaForm.skills) && $data.personaForm.skills.length > 0 ? (openBlock(), createBlock(VChip, {
                                        key: 0,
                                        size: "small",
                                        color: "primary",
                                        variant: "tonal",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString($data.personaForm.skills.length), 1)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VExpansionPanelText, null, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_21, [
                                        createBaseVNode("p", _hoisted_22, toDisplayString($setup.tm("form.skillsHelp")), 1)
                                      ]),
                                      createVNode(VRadioGroup, {
                                        class: "mt-2",
                                        modelValue: $data.skillSelectValue,
                                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.skillSelectValue = $event),
                                        "hide-details": "true"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRadio, {
                                            label: $setup.tm("form.skillsAllAvailable"),
                                            value: "0"
                                          }, null, 8, ["label"]),
                                          createVNode(VRadio, {
                                            label: $setup.tm("form.skillsSelectSpecific"),
                                            value: "1"
                                          }, null, 8, ["label"])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue"]),
                                      $data.skillSelectValue === "1" ? (openBlock(), createElementBlock("div", _hoisted_23, [
                                        createVNode(VTextField, {
                                          modelValue: $data.skillSearch,
                                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.skillSearch = $event),
                                          label: $setup.tm("form.searchSkills"),
                                          "prepend-inner-icon": "mdi-magnify",
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": "",
                                          clearable: "",
                                          class: "mb-3"
                                        }, null, 8, ["modelValue", "label"]),
                                        $options.filteredSkills.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_24, [
                                          createVNode(VVirtualScroll, {
                                            items: $options.filteredSkills,
                                            height: "240",
                                            "item-height": "48"
                                          }, {
                                            default: withCtx(({ item }) => [
                                              (openBlock(), createBlock(VListItem, {
                                                key: item.name,
                                                density: "comfortable",
                                                onClick: ($event) => $options.toggleSkill(item.name)
                                              }, {
                                                prepend: withCtx(() => [
                                                  createVNode(VCheckboxBtn, {
                                                    "model-value": $options.isSkillSelected(item.name),
                                                    onClick: withModifiers(($event) => $options.toggleSkill(item.name), ["stop"])
                                                  }, null, 8, ["model-value", "onClick"])
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.name), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  item.description ? (openBlock(), createBlock(VListItemSubtitle, { key: 0 }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString($options.truncateText(item.description, 100)), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)) : createCommentVNode("", true)
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]))
                                            ]),
                                            _: 1
                                          }, 8, ["items"])
                                        ])) : !$data.loadingSkills && $data.availableSkills.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_25, [
                                          createVNode(VIcon, {
                                            size: "48",
                                            color: "grey-lighten-2",
                                            class: "mb-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-lightning-bolt")
                                            ]),
                                            _: 1
                                          }),
                                          createBaseVNode("p", _hoisted_26, toDisplayString($setup.tm("form.noSkillsAvailable")), 1)
                                        ])) : !$data.loadingSkills && $options.filteredSkills.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_27, [
                                          createVNode(VIcon, {
                                            size: "48",
                                            color: "grey-lighten-2",
                                            class: "mb-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-magnify")
                                            ]),
                                            _: 1
                                          }),
                                          createBaseVNode("p", _hoisted_28, toDisplayString($setup.tm("form.noSkillsFound")), 1)
                                        ])) : createCommentVNode("", true),
                                        $data.loadingSkills ? (openBlock(), createElementBlock("div", _hoisted_29, [
                                          createVNode(VProgressCircular, {
                                            indeterminate: "",
                                            color: "primary"
                                          }),
                                          createBaseVNode("p", _hoisted_30, toDisplayString($setup.tm("form.loadingSkills")), 1)
                                        ])) : createCommentVNode("", true),
                                        createBaseVNode("div", _hoisted_31, [
                                          createBaseVNode("h4", _hoisted_32, [
                                            createTextVNode(toDisplayString($setup.tm("form.selectedSkills")) + " ", 1),
                                            $data.personaForm.skills === null ? (openBlock(), createElementBlock("span", _hoisted_33, " (" + toDisplayString($setup.tm("form.allSelected")) + ") ", 1)) : Array.isArray($data.personaForm.skills) ? (openBlock(), createElementBlock("span", _hoisted_34, " (" + toDisplayString($data.personaForm.skills.length) + ") ", 1)) : createCommentVNode("", true)
                                          ]),
                                          Array.isArray($data.personaForm.skills) && $data.personaForm.skills.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_35, [
                                            (openBlock(true), createElementBlock(Fragment, null, renderList($data.personaForm.skills, (skillName) => {
                                              return openBlock(), createBlock(VChip, {
                                                key: skillName,
                                                size: "small",
                                                color: "primary",
                                                variant: "tonal",
                                                closable: "",
                                                "onClick:close": ($event) => $options.removeSkill(skillName)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(skillName), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick:close"]);
                                            }), 128))
                                          ])) : (openBlock(), createElementBlock("div", _hoisted_36, toDisplayString($setup.tm("form.noSkillsSelected")), 1))
                                        ])
                                      ])) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VExpansionPanel, { value: "dialogs" }, {
                                default: withCtx(() => [
                                  createVNode(VExpansionPanelTitle, null, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { class: "mr-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-chat")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" " + toDisplayString($setup.tm("form.presetDialogs")) + " ", 1),
                                      $data.personaForm.begin_dialogs.length > 0 ? (openBlock(), createBlock(VChip, {
                                        key: 0,
                                        size: "small",
                                        color: "primary",
                                        variant: "tonal",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString($data.personaForm.begin_dialogs.length / 2), 1)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VExpansionPanelText, null, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_37, [
                                        createBaseVNode("p", _hoisted_38, toDisplayString($setup.tm("form.presetDialogsHelp")), 1)
                                      ]),
                                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.personaForm.begin_dialogs, (dialog, index) => {
                                        return openBlock(), createElementBlock("div", {
                                          key: index,
                                          class: "mb-3"
                                        }, [
                                          createVNode(VTextarea, {
                                            modelValue: $data.personaForm.begin_dialogs[index],
                                            "onUpdate:modelValue": ($event) => $data.personaForm.begin_dialogs[index] = $event,
                                            label: index % 2 === 0 ? $setup.tm("form.userMessage") : $setup.tm("form.assistantMessage"),
                                            rules: $options.getDialogRules(index),
                                            variant: "outlined",
                                            rows: "2",
                                            density: "comfortable"
                                          }, {
                                            append: withCtx(() => [
                                              createVNode(VBtn, {
                                                icon: "mdi-delete",
                                                variant: "text",
                                                size: "small",
                                                color: "error",
                                                onClick: ($event) => $options.removeDialog(index)
                                              }, null, 8, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1032, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                                        ]);
                                      }), 128)),
                                      createVNode(VBtn, {
                                        variant: "outlined",
                                        "prepend-icon": "mdi-plus",
                                        onClick: $options.addDialogPair,
                                        block: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString($setup.tm("buttons.addDialogPair")), 1)
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
                          }, 8, ["modelValue"])
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
          }),
          createVNode(VCardActions, { class: "persona-form-actions" }, {
            default: withCtx(() => [
              $props.editingPersona ? (openBlock(), createBlock(VBtn, {
                key: 0,
                color: "error",
                variant: "text",
                onClick: $options.deletePersona
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString($setup.tm("buttons.delete")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true),
              createVNode(VSpacer),
              createVNode(VBtn, {
                color: "grey",
                variant: "text",
                onClick: $options.closeDialog
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString($setup.tm("buttons.cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(VBtn, {
                color: "primary",
                variant: "flat",
                onClick: $options.savePersona,
                loading: $data.saving,
                disabled: !$data.formValid
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString($setup.tm("buttons.save")), 1)
                ]),
                _: 1
              }, 8, ["onClick", "loading", "disabled"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    _: 1
  }, 8, ["modelValue", "max-width"]);
}
const PersonaForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-beb925a7"]]);
export {
  BaseMoveTargetNode as B,
  PersonaForm as P
};
