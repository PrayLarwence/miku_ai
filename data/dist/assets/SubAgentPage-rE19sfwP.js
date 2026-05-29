import { D as defineComponent, u as useModuleI18n, aF as useTheme, H as computed, L as ref, J as watch, M as onMounted, c as createElementBlock, b as createVNode, w as withCtx, ao as VContainer, T as normalizeClass, B as axios, a as createBaseVNode, t as toDisplayString, $ as unref, g as VChip, d as createTextVNode, e as VBtn, F as Fragment, r as renderList, l as VIcon, a8 as VSwitch, aS as VExpansionPanels, h as createBlock, aT as VExpansionPanelTitle, i as createCommentVNode, a0 as withModifiers, aU as VExpansionPanelText, j as VTextField, ak as VAutocomplete, av as createSlots, aL as VTextarea, aV as VExpansionPanel, am as VSnackbar, ai as VDialog, s as VCard, a6 as VCardTitle, aG as VCardSubtitle, v as VCardText, aj as VProgressCircular, a9 as VCardActions, ap as pushScopeId, aq as popScopeId, o as openBlock, _ as _export_sfc } from "./index-IOsZtj6J.js";
const _withScopeId = (n) => (pushScopeId("data-v-5f4521f2"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "dashboard-header" };
const _hoisted_2 = { class: "dashboard-header-main" };
const _hoisted_3 = { class: "dashboard-eyebrow" };
const _hoisted_4 = {
  class: "d-flex align-center flex-wrap",
  style: { "gap": "8px" }
};
const _hoisted_5 = { class: "dashboard-title" };
const _hoisted_6 = { class: "dashboard-subtitle" };
const _hoisted_7 = { class: "dashboard-header-actions" };
const _hoisted_8 = { class: "dashboard-overview-grid" };
const _hoisted_9 = { class: "dashboard-card-icon" };
const _hoisted_10 = { class: "dashboard-card-label" };
const _hoisted_11 = { class: "dashboard-card-value" };
const _hoisted_12 = { class: "dashboard-card-note" };
const _hoisted_13 = {
  class: "dashboard-section-head",
  style: { "margin-top": "8px" }
};
const _hoisted_14 = { class: "dashboard-section-title" };
const _hoisted_15 = { class: "dashboard-section-subtitle" };
const _hoisted_16 = { class: "dashboard-card dashboard-card--padded global-settings-card" };
const _hoisted_17 = { class: "dashboard-form-grid dashboard-form-grid--single" };
const _hoisted_18 = { class: "state-description" };
const _hoisted_19 = { key: 0 };
const _hoisted_20 = { key: 1 };
const _hoisted_21 = {
  class: "dashboard-section-head",
  style: { "margin-top": "28px" }
};
const _hoisted_22 = { class: "dashboard-section-title" };
const _hoisted_23 = { class: "dashboard-section-subtitle" };
const _hoisted_24 = {
  key: 0,
  class: "state-panel"
};
const _hoisted_25 = { class: "text-h6" };
const _hoisted_26 = { class: "text-body-2 text-medium-emphasis" };
const _hoisted_27 = {
  key: 1,
  class: "agent-cards-wrap"
};
const _hoisted_28 = { class: "agent-panel-header" };
const _hoisted_29 = { class: "agent-panel-info" };
const _hoisted_30 = { class: "agent-panel-name" };
const _hoisted_31 = { class: "agent-panel-meta" };
const _hoisted_32 = {
  key: 0,
  class: "agent-persona-chip"
};
const _hoisted_33 = { class: "agent-form-grid" };
const _hoisted_34 = { class: "handoff-preview" };
const _hoisted_35 = { class: "handoff-preview-title" };
const _hoisted_36 = { class: "handoff-preview-code" };
const _hoisted_37 = {
  key: 0,
  class: "d-flex align-center justify-center pa-4"
};
const _hoisted_38 = {
  key: 1,
  class: "persona-preview-content"
};
const _hoisted_39 = { class: "persona-preview-field" };
const _hoisted_40 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "persona-preview-label" }, "persona_id", -1));
const _hoisted_41 = { class: "persona-preview-value" };
const _hoisted_42 = {
  key: 0,
  class: "persona-preview-field"
};
const _hoisted_43 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "persona-preview-label" }, "system_prompt", -1));
const _hoisted_44 = { class: "persona-preview-pre" };
const _hoisted_45 = {
  key: 1,
  class: "persona-preview-field"
};
const _hoisted_46 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "persona-preview-label" }, "tools", -1));
const _hoisted_47 = { class: "d-flex flex-wrap gap-1" };
const _hoisted_48 = {
  key: 2,
  class: "text-medium-emphasis"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SubAgentPage",
  setup(__props) {
    const { tm } = useModuleI18n("features/subagent");
    const theme = useTheme();
    const isDark = computed(() => theme.global.current.value.dark);
    const loading = ref(false);
    const saving = ref(false);
    const loadingPersonas = ref(false);
    const expandedPanels = ref([0]);
    const config = ref({
      main_enable: false,
      remove_main_duplicate_tools: false,
      agents: []
    });
    const personaList = ref([]);
    const nameErrors = ref({});
    const snackbar = ref({ show: false, message: "", color: "success" });
    const personaDialog = ref({
      show: false,
      loading: false,
      data: null
    });
    const hasUnsavedChanges = ref(false);
    const overviewCards = computed(() => [
      {
        label: tm("overview.totalAgents"),
        value: String(config.value.agents.length),
        note: tm("overview.totalAgentsNote"),
        icon: "mdi-account-supervisor"
      },
      {
        label: tm("overview.enabledAgents"),
        value: String(config.value.agents.filter((a) => a.enabled).length),
        note: tm("overview.enabledAgentsNote"),
        icon: "mdi-check-circle-outline"
      },
      {
        label: tm("overview.mainOrchestration"),
        value: config.value.main_enable ? "ON" : "OFF",
        note: config.value.main_enable ? tm("description.enabled") : tm("description.disabled"),
        icon: "mdi-toggle-switch"
      },
      {
        label: tm("overview.boundPersonas"),
        value: String(config.value.agents.filter((a) => a.persona_id).length),
        note: tm("overview.boundPersonasNote"),
        icon: "mdi-heart"
      }
    ]);
    watch(config, () => {
      hasUnsavedChanges.value = true;
    }, { deep: true });
    function toast(message, color = "success") {
      snackbar.value = { show: true, message, color };
    }
    function getNameErrors(idx) {
      const err = nameErrors.value[idx];
      return err ? [err] : [];
    }
    function validateName(idx) {
      var _a;
      const name = (_a = config.value.agents[idx]) == null ? void 0 : _a.agent_name;
      if (!name || !name.trim()) {
        nameErrors.value[idx] = tm("messages.nameRequired");
        return false;
      }
      if (!/^[a-z][a-z0-9_]*$/.test(name)) {
        nameErrors.value[idx] = tm("messages.namePattern");
        return false;
      }
      const dup = config.value.agents.findIndex(
        (a, i) => i !== idx && a.agent_name === name
      );
      if (dup !== -1) {
        nameErrors.value[idx] = tm("messages.nameDuplicate", { name });
        return false;
      }
      delete nameErrors.value[idx];
      return true;
    }
    function validateAll() {
      let valid = true;
      nameErrors.value = {};
      for (let i = 0; i < config.value.agents.length; i++) {
        if (!validateName(i)) {
          valid = false;
        }
      }
      return valid;
    }
    function addAgent() {
      config.value.agents.push({
        agent_name: "",
        provider_id: null,
        persona_id: null,
        description: "",
        enabled: true
      });
      const lastIdx = config.value.agents.length - 1;
      if (!expandedPanels.value.includes(lastIdx)) {
        expandedPanels.value.push(lastIdx);
      }
    }
    function removeAgent(idx) {
      config.value.agents.splice(idx, 1);
    }
    async function loadConfig() {
      var _a, _b;
      loading.value = true;
      try {
        const res = await axios.get("/api/subagent/config");
        if (res.data.status === "ok") {
          const data = res.data.data || {};
          config.value = {
            main_enable: data.main_enable ?? false,
            remove_main_duplicate_tools: data.remove_main_duplicate_tools ?? false,
            agents: Array.isArray(data.agents) ? data.agents : []
          };
          hasUnsavedChanges.value = false;
        } else {
          toast(res.data.message || tm("messages.loadConfigFailed"), "error");
        }
      } catch (e) {
        toast(((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || tm("messages.loadConfigFailed"), "error");
      } finally {
        loading.value = false;
      }
    }
    async function loadPersonas() {
      loadingPersonas.value = true;
      try {
        const res = await axios.get("/api/persona/list");
        if (res.data.status === "ok" && Array.isArray(res.data.data)) {
          personaList.value = res.data.data;
        }
      } catch {
      } finally {
        loadingPersonas.value = false;
      }
    }
    async function saveConfig() {
      var _a, _b;
      if (!validateAll()) {
        toast(tm("messages.saveFailed"), "error");
        return;
      }
      saving.value = true;
      try {
        const res = await axios.post("/api/subagent/config", config.value);
        if (res.data.status === "ok") {
          toast(tm("messages.saveSuccess"));
          hasUnsavedChanges.value = false;
        } else {
          toast(res.data.message || tm("messages.saveFailed"), "error");
        }
      } catch (e) {
        toast(((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || tm("messages.saveFailed"), "error");
      } finally {
        saving.value = false;
      }
    }
    async function previewPersona(personaId) {
      if (!personaId) return;
      personaDialog.value.show = true;
      personaDialog.value.loading = true;
      personaDialog.value.data = null;
      try {
        const res = await axios.post("/api/persona/detail", { persona_id: personaId });
        if (res.data.status === "ok") {
          personaDialog.value.data = res.data.data;
        }
      } catch {
      } finally {
        personaDialog.value.loading = false;
      }
    }
    window.addEventListener("beforeunload", (e) => {
      if (hasUnsavedChanges.value) {
        e.preventDefault();
        e.returnValue = "";
      }
    });
    onMounted(() => {
      loadConfig();
      loadPersonas();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["dashboard-page subagent-page", { "is-dark": isDark.value }])
      }, [
        createVNode(VContainer, {
          fluid: "",
          class: "dashboard-shell pa-4 pa-md-6"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, toDisplayString(unref(tm)("header.eyebrow")), 1),
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("h1", _hoisted_5, toDisplayString(unref(tm)("page.title")), 1),
                  createVNode(VChip, {
                    size: "x-small",
                    color: "orange-darken-2",
                    variant: "tonal",
                    label: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(tm)("page.beta")), 1)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("p", _hoisted_6, toDisplayString(unref(tm)("page.subtitle")), 1)
              ]),
              createBaseVNode("div", _hoisted_7, [
                createVNode(VBtn, {
                  variant: "text",
                  color: "primary",
                  loading: loading.value,
                  "prepend-icon": "mdi-refresh",
                  onClick: loadConfig
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(tm)("actions.refresh")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"]),
                createVNode(VBtn, {
                  variant: "tonal",
                  color: "primary",
                  loading: saving.value,
                  "prepend-icon": "mdi-content-save",
                  onClick: saveConfig
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(tm)("actions.save")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"]),
                createVNode(VBtn, {
                  variant: "tonal",
                  color: "secondary",
                  "prepend-icon": "mdi-plus",
                  onClick: addAgent
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(tm)("actions.add")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_8, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(overviewCards.value, (card) => {
                return openBlock(), createElementBlock("section", {
                  key: card.label,
                  class: "dashboard-card dashboard-overview-card"
                }, [
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(VIcon, { size: "18" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(card.icon), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createBaseVNode("div", _hoisted_10, toDisplayString(card.label), 1),
                  createBaseVNode("div", _hoisted_11, toDisplayString(card.value), 1),
                  createBaseVNode("div", _hoisted_12, toDisplayString(card.note), 1)
                ]);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_14, toDisplayString(unref(tm)("section.globalSettings")), 1),
                createBaseVNode("div", _hoisted_15, toDisplayString(unref(tm)("section.subtitle")), 1)
              ])
            ]),
            createBaseVNode("section", _hoisted_16, [
              createBaseVNode("div", _hoisted_17, [
                createVNode(VSwitch, {
                  modelValue: config.value.main_enable,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => config.value.main_enable = $event),
                  label: unref(tm)("switches.enable"),
                  hint: unref(tm)("switches.enableHint"),
                  "persistent-hint": "",
                  inset: "",
                  color: "primary",
                  "hide-details": "auto"
                }, null, 8, ["modelValue", "label", "hint"]),
                createVNode(VSwitch, {
                  modelValue: config.value.remove_main_duplicate_tools,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => config.value.remove_main_duplicate_tools = $event),
                  label: unref(tm)("switches.dedupe"),
                  hint: unref(tm)("switches.dedupeHint"),
                  "persistent-hint": "",
                  inset: "",
                  color: "primary",
                  "hide-details": "auto"
                }, null, 8, ["modelValue", "label", "hint"])
              ]),
              createBaseVNode("div", _hoisted_18, [
                createVNode(VIcon, {
                  size: "16",
                  color: "primary",
                  class: "me-1"
                }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-information-outline")
                  ]),
                  _: 1
                }),
                config.value.main_enable ? (openBlock(), createElementBlock("span", _hoisted_19, toDisplayString(unref(tm)("description.enabled")), 1)) : (openBlock(), createElementBlock("span", _hoisted_20, toDisplayString(unref(tm)("description.disabled")), 1))
              ])
            ]),
            createBaseVNode("div", _hoisted_21, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_22, toDisplayString(unref(tm)("section.agentSetup")), 1),
                createBaseVNode("div", _hoisted_23, toDisplayString(unref(tm)("section.subtitle")), 1)
              ])
            ]),
            !config.value.agents.length ? (openBlock(), createElementBlock("div", _hoisted_24, [
              createVNode(VIcon, {
                size: "40",
                color: "primary",
                class: "mb-2"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-robot-off-outline")
                ]),
                _: 1
              }),
              createBaseVNode("span", _hoisted_25, toDisplayString(unref(tm)("empty.title")), 1),
              createBaseVNode("span", _hoisted_26, toDisplayString(unref(tm)("empty.subtitle")), 1),
              createVNode(VBtn, {
                variant: "tonal",
                color: "primary",
                "prepend-icon": "mdi-plus",
                onClick: addAgent,
                class: "mt-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(tm)("empty.action")), 1)
                ]),
                _: 1
              })
            ])) : (openBlock(), createElementBlock("div", _hoisted_27, [
              createVNode(VExpansionPanels, {
                modelValue: expandedPanels.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => expandedPanels.value = $event),
                multiple: ""
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(config.value.agents, (agent, idx) => {
                    return openBlock(), createBlock(VExpansionPanel, {
                      key: idx,
                      class: normalizeClass(["agent-panel", { "agent-panel--enabled": agent.enabled }])
                    }, {
                      default: withCtx(() => [
                        createVNode(VExpansionPanelTitle, { class: "agent-panel-title" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_28, [
                              createBaseVNode("div", _hoisted_29, [
                                createBaseVNode("div", _hoisted_30, toDisplayString(agent.agent_name || unref(tm)("cards.unnamed")), 1),
                                createBaseVNode("div", _hoisted_31, [
                                  createVNode(VChip, {
                                    size: "x-small",
                                    color: agent.enabled ? "success" : "default",
                                    variant: "tonal",
                                    class: "me-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(agent.enabled ? unref(tm)("cards.statusEnabled") : unref(tm)("cards.statusDisabled")), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"]),
                                  agent.persona_id ? (openBlock(), createElementBlock("span", _hoisted_32, toDisplayString(unref(tm)("cards.personaChip", { id: agent.persona_id })), 1)) : createCommentVNode("", true)
                                ])
                              ]),
                              createBaseVNode("div", {
                                class: "agent-panel-actions",
                                onClick: _cache[2] || (_cache[2] = withModifiers(() => {
                                }, ["stop"]))
                              }, [
                                createVNode(VBtn, {
                                  size: "small",
                                  variant: "text",
                                  color: "error",
                                  icon: true,
                                  onClick: ($event) => removeAgent(idx)
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
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VExpansionPanelText, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_33, [
                              createVNode(VTextField, {
                                modelValue: agent.agent_name,
                                "onUpdate:modelValue": ($event) => agent.agent_name = $event,
                                label: unref(tm)("form.nameLabel"),
                                hint: unref(tm)("form.nameHint"),
                                "persistent-hint": "",
                                variant: "outlined",
                                density: "comfortable",
                                "error-messages": getNameErrors(idx),
                                onInput: ($event) => validateName(idx)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "hint", "error-messages", "onInput"]),
                              createVNode(VTextField, {
                                modelValue: agent.provider_id,
                                "onUpdate:modelValue": ($event) => agent.provider_id = $event,
                                label: unref(tm)("form.providerLabel"),
                                hint: unref(tm)("form.providerHint"),
                                "persistent-hint": "",
                                variant: "outlined",
                                density: "comfortable"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "hint"]),
                              createVNode(VAutocomplete, {
                                modelValue: agent.persona_id,
                                "onUpdate:modelValue": ($event) => agent.persona_id = $event,
                                items: personaList.value,
                                "item-title": "persona_id",
                                "item-value": "persona_id",
                                label: unref(tm)("form.personaLabel"),
                                hint: unref(tm)("form.personaHint"),
                                "persistent-hint": "",
                                variant: "outlined",
                                density: "comfortable",
                                clearable: "",
                                loading: loadingPersonas.value
                              }, createSlots({ _: 2 }, [
                                agent.persona_id ? {
                                  name: "append-inner",
                                  fn: withCtx(() => [
                                    createVNode(VBtn, {
                                      size: "x-small",
                                      variant: "text",
                                      icon: "mdi-eye",
                                      onClick: ($event) => previewPersona(agent.persona_id)
                                    }, null, 8, ["onClick"])
                                  ]),
                                  key: "0"
                                } : void 0
                              ]), 1032, ["modelValue", "onUpdate:modelValue", "items", "label", "hint", "loading"]),
                              createVNode(VTextarea, {
                                modelValue: agent.description,
                                "onUpdate:modelValue": ($event) => agent.description = $event,
                                label: unref(tm)("form.descriptionLabel"),
                                hint: unref(tm)("form.descriptionHint"),
                                "persistent-hint": "",
                                variant: "outlined",
                                density: "comfortable",
                                rows: "3",
                                "auto-grow": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "hint"]),
                              createVNode(VSwitch, {
                                modelValue: agent.enabled,
                                "onUpdate:modelValue": ($event) => agent.enabled = $event,
                                label: unref(tm)("cards.switchLabel"),
                                inset: "",
                                color: "primary",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                              createBaseVNode("div", _hoisted_34, [
                                createBaseVNode("div", _hoisted_35, [
                                  createVNode(VIcon, {
                                    size: "14",
                                    class: "me-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-code-tags")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" " + toDisplayString(unref(tm)("cards.previewTitle")), 1)
                                ]),
                                createBaseVNode("div", _hoisted_36, [
                                  createBaseVNode("code", null, toDisplayString(unref(tm)("cards.transferPrefix", { name: agent.agent_name || "unnamed" })), 1)
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["class"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue"])
            ])),
            createVNode(VSnackbar, {
              modelValue: snackbar.value.show,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => snackbar.value.show = $event),
              color: snackbar.value.color,
              timeout: "2600"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(snackbar.value.message), 1)
              ]),
              _: 1
            }, 8, ["modelValue", "color"]),
            createVNode(VDialog, {
              modelValue: personaDialog.value.show,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => personaDialog.value.show = $event),
              "max-width": "640"
            }, {
              default: withCtx(() => [
                createVNode(VCard, { class: "dashboard-dialog-card" }, {
                  default: withCtx(() => [
                    createVNode(VCardTitle, { class: "text-h6 pt-5 px-5" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(tm)("cards.personaPreview")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardSubtitle, { class: "px-5 text-body-2 text-medium-emphasis" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(tm)("cards.previewHint")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "px-5 pb-5" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          personaDialog.value.loading ? (openBlock(), createElementBlock("div", _hoisted_37, [
                            createVNode(VProgressCircular, {
                              indeterminate: "",
                              size: "22",
                              width: "2",
                              color: "primary"
                            })
                          ])) : personaDialog.value.data ? (openBlock(), createElementBlock("div", _hoisted_38, [
                            createBaseVNode("div", _hoisted_39, [
                              _hoisted_40,
                              createBaseVNode("div", _hoisted_41, toDisplayString(personaDialog.value.data.persona_id), 1)
                            ]),
                            personaDialog.value.data.system_prompt ? (openBlock(), createElementBlock("div", _hoisted_42, [
                              _hoisted_43,
                              createBaseVNode("pre", _hoisted_44, toDisplayString(personaDialog.value.data.system_prompt), 1)
                            ])) : createCommentVNode("", true),
                            ((_a = personaDialog.value.data.tools) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_45, [
                              _hoisted_46,
                              createBaseVNode("div", _hoisted_47, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(personaDialog.value.data.tools, (tool) => {
                                  return openBlock(), createBlock(VChip, {
                                    key: tool,
                                    size: "x-small",
                                    variant: "tonal",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(tool), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true)
                          ])) : (openBlock(), createElementBlock("div", _hoisted_48, toDisplayString(unref(tm)("cards.noDescription")), 1))
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(VCardActions, { class: "justify-end px-5 pb-5" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "text",
                          onClick: _cache[5] || (_cache[5] = ($event) => personaDialog.value.show = false)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(tm)("actions.close")), 1)
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
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const SubAgentPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5f4521f2"]]);
export {
  SubAgentPage as default
};
