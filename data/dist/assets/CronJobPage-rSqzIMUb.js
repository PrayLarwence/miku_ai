import { D as defineComponent, u as useModuleI18n, aF as useTheme, H as computed, L as ref, M as onMounted, c as createElementBlock, b as createVNode, w as withCtx, ao as VContainer, T as normalizeClass, B as axios, a as createBaseVNode, t as toDisplayString, $ as unref, g as VChip, d as createTextVNode, e as VBtn, F as Fragment, r as renderList, l as VIcon, h as createBlock, aj as VProgressCircular, a8 as VSwitch, i as createCommentVNode, am as VSnackbar, ai as VDialog, s as VCard, a6 as VCardTitle, aG as VCardSubtitle, v as VCardText, j as VTextField, a9 as VCardActions, ap as pushScopeId, aq as popScopeId, o as openBlock, _ as _export_sfc } from "./index-IOsZtj6J.js";
const _withScopeId = (n) => (pushScopeId("data-v-9d9dba58"), n = n(), popScopeId(), n);
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
const _hoisted_13 = { class: "dashboard-section-head" };
const _hoisted_14 = { class: "dashboard-section-title" };
const _hoisted_15 = { class: "dashboard-section-subtitle" };
const _hoisted_16 = {
  key: 0,
  class: "platform-section"
};
const _hoisted_17 = { class: "platform-chip-wrap" };
const _hoisted_18 = {
  key: 1,
  class: "dashboard-empty platform-empty"
};
const _hoisted_19 = { class: "dashboard-section-head" };
const _hoisted_20 = { class: "dashboard-section-title" };
const _hoisted_21 = { class: "dashboard-section-subtitle" };
const _hoisted_22 = { class: "task-surface" };
const _hoisted_23 = {
  key: 0,
  class: "state-panel"
};
const _hoisted_24 = {
  key: 1,
  class: "state-panel"
};
const _hoisted_25 = {
  key: 2,
  class: "task-table-wrap"
};
const _hoisted_26 = { class: "task-table" };
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("colgroup", null, [
  /* @__PURE__ */ createBaseVNode("col", { class: "col-name" }),
  /* @__PURE__ */ createBaseVNode("col", { class: "col-type" }),
  /* @__PURE__ */ createBaseVNode("col", { class: "col-cron" }),
  /* @__PURE__ */ createBaseVNode("col", { class: "col-session" }),
  /* @__PURE__ */ createBaseVNode("col", { class: "col-next-run" }),
  /* @__PURE__ */ createBaseVNode("col", { class: "col-last-run" }),
  /* @__PURE__ */ createBaseVNode("col", { class: "col-actions" })
], -1));
const _hoisted_28 = { class: "actions-col" };
const _hoisted_29 = { class: "name-col" };
const _hoisted_30 = { class: "task-name" };
const _hoisted_31 = { class: "task-subline" };
const _hoisted_32 = { class: "task-text" };
const _hoisted_33 = { class: "task-subline" };
const _hoisted_34 = { class: "task-session" };
const _hoisted_35 = { class: "task-text" };
const _hoisted_36 = { class: "task-text" };
const _hoisted_37 = { class: "actions-col" };
const _hoisted_38 = { class: "table-actions" };
const _hoisted_39 = { class: "table-actions-toggle" };
const _hoisted_40 = { class: "table-actions-buttons" };
const _hoisted_41 = { class: "dashboard-form-grid dashboard-form-grid--single" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CronJobPage",
  setup(__props) {
    const { tm } = useModuleI18n("features/cron");
    const theme = useTheme();
    const isDark = computed(() => theme.global.current.value.dark);
    const loading = ref(false);
    const jobs = ref([]);
    const proactivePlatforms = ref([]);
    const createDialog = ref(false);
    const creating = ref(false);
    const editingJobId = ref("");
    const newJob = ref({
      run_once: false,
      name: "",
      note: "",
      cron_expression: "",
      run_at: "",
      session: "",
      timezone: "",
      enabled: true
    });
    const snackbar = ref({ show: false, message: "", color: "success" });
    const proactivePlatformText = computed(
      () => proactivePlatforms.value.map((p) => `${p.display_name || p.name}(${p.id})`).join(" / ")
    );
    const enabledJobsCount = computed(() => jobs.value.filter((job) => job.enabled).length);
    computed(() => jobs.value.filter((job) => job.run_once).length);
    computed(() => jobs.value.filter((job) => !job.run_once).length);
    const sortedJobs = computed(
      () => [...jobs.value].sort((a, b) => {
        if (a.enabled !== b.enabled) {
          return a.enabled ? -1 : 1;
        }
        const nextA = parseTimeValue(a.next_run_time ?? a.run_at);
        const nextB = parseTimeValue(b.next_run_time ?? b.run_at);
        if (nextA !== nextB) {
          if (!nextA) return 1;
          if (!nextB) return -1;
          return nextA - nextB;
        }
        return String(a.name || "").localeCompare(String(b.name || ""));
      })
    );
    const overviewCards = computed(() => [
      {
        label: tm("overview.totalTasks"),
        value: String(jobs.value.length),
        note: tm("overview.totalTasksNote"),
        icon: "mdi-calendar-multiple"
      },
      {
        label: tm("overview.enabledTasks"),
        value: String(enabledJobsCount.value),
        note: tm("overview.enabledTasksNote"),
        icon: "mdi-check-circle-outline"
      }
    ]);
    const isEditing = computed(() => !!editingJobId.value);
    const dialogTitle = computed(() => tm(isEditing.value ? "form.editTitle" : "form.title"));
    const dialogSubmitText = computed(() => tm(isEditing.value ? "actions.save" : "actions.submit"));
    function toast(message, color = "success") {
      snackbar.value = { show: true, message, color };
    }
    function parseTimeValue(value) {
      if (!value) return 0;
      const ts = new Date(value).getTime();
      return Number.isNaN(ts) ? 0 : ts;
    }
    function formatTime(val) {
      if (!val) return tm("table.notAvailable");
      try {
        return new Date(val).toLocaleString();
      } catch {
        return String(val);
      }
    }
    function jobTypeLabel(item) {
      if (item.run_once) return tm("table.type.once");
      const type = item.job_type || "active_agent";
      const map = {
        active_agent: tm("table.type.activeAgent"),
        workflow: tm("table.type.workflow")
      };
      return map[type] || tm("table.type.unknown", { type });
    }
    function scheduleLabel(item) {
      if (item.run_once) {
        return formatTime(item.run_at);
      }
      return item.cron_expression || tm("table.notAvailable");
    }
    function scheduleMeta(item) {
      if (item.run_once) {
        return tm("table.type.once");
      }
      return item.timezone || tm("table.timezoneLocal");
    }
    async function loadJobs() {
      var _a, _b;
      loading.value = true;
      try {
        const res = await axios.get("/api/cron/jobs");
        if (res.data.status === "ok") {
          const data = Array.isArray(res.data.data) ? res.data.data : [];
          jobs.value = data.map((job) => {
            var _a2;
            return {
              ...job,
              session: ((_a2 = job == null ? void 0 : job.payload) == null ? void 0 : _a2.session) || (job == null ? void 0 : job.session) || ""
            };
          });
        } else {
          toast(res.data.message || tm("messages.loadFailed"), "error");
        }
      } catch (e) {
        toast(((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || tm("messages.loadFailed"), "error");
      } finally {
        loading.value = false;
      }
    }
    async function loadPlatforms() {
      var _a;
      try {
        const res = await axios.get("/api/platform/stats");
        if (res.data.status === "ok" && Array.isArray((_a = res.data.data) == null ? void 0 : _a.platforms)) {
          proactivePlatforms.value = res.data.data.platforms.filter((p) => {
            var _a2;
            return (_a2 = p == null ? void 0 : p.meta) == null ? void 0 : _a2.support_proactive_message;
          }).map((p) => {
            var _a2, _b, _c;
            return {
              id: (p == null ? void 0 : p.id) || ((_a2 = p == null ? void 0 : p.meta) == null ? void 0 : _a2.id) || "unknown",
              name: ((_b = p == null ? void 0 : p.meta) == null ? void 0 : _b.name) || (p == null ? void 0 : p.type) || "",
              display_name: ((_c = p == null ? void 0 : p.meta) == null ? void 0 : _c.display_name) || (p == null ? void 0 : p.display_name)
            };
          });
        }
      } catch {
      }
    }
    async function toggleJob(job) {
      var _a, _b;
      try {
        const res = await axios.patch(`/api/cron/jobs/${job.job_id}`, { enabled: job.enabled });
        if (res.data.status !== "ok") {
          toast(res.data.message || tm("messages.updateFailed"), "error");
          await loadJobs();
        }
      } catch (e) {
        toast(((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || tm("messages.updateFailed"), "error");
        await loadJobs();
      }
    }
    async function deleteJob(job) {
      var _a, _b;
      try {
        const res = await axios.delete(`/api/cron/jobs/${job.job_id}`);
        if (res.data.status === "ok") {
          toast(tm("messages.deleteSuccess"));
          jobs.value = jobs.value.filter((item) => item.job_id !== job.job_id);
        } else {
          toast(res.data.message || tm("messages.deleteFailed"), "error");
        }
      } catch (e) {
        toast(((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || tm("messages.deleteFailed"), "error");
      }
    }
    function openCreate() {
      editingJobId.value = "";
      resetNewJob();
      createDialog.value = true;
    }
    function toDatetimeLocalValue(value) {
      if (!value) return "";
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return "";
      const offset = date.getTimezoneOffset();
      const local = new Date(date.getTime() - offset * 6e4);
      return local.toISOString().slice(0, 16);
    }
    function toIsoDatetime(value) {
      if (!value) return "";
      const date = new Date(value);
      return Number.isNaN(date.getTime()) ? value : date.toISOString();
    }
    function resetNewJob() {
      newJob.value = {
        run_once: false,
        name: "",
        note: "",
        cron_expression: "",
        run_at: "",
        session: "",
        timezone: "",
        enabled: true
      };
    }
    function openEdit(job) {
      var _a;
      editingJobId.value = job.job_id;
      newJob.value = {
        run_once: !!job.run_once,
        name: job.name || "",
        note: job.note || job.description || "",
        cron_expression: job.cron_expression || "",
        run_at: toDatetimeLocalValue(job.run_at),
        session: job.session || ((_a = job == null ? void 0 : job.payload) == null ? void 0 : _a.session) || "",
        timezone: job.timezone || "",
        enabled: job.enabled !== false
      };
      createDialog.value = true;
    }
    async function createJob() {
      var _a, _b;
      if (!newJob.value.session) {
        toast(tm("messages.sessionRequired"), "warning");
        return;
      }
      if (!newJob.value.note) {
        toast(tm("messages.noteRequired"), "warning");
        return;
      }
      if (!newJob.value.run_once && !newJob.value.cron_expression) {
        toast(tm("messages.cronRequired"), "warning");
        return;
      }
      if (newJob.value.run_once && !newJob.value.run_at) {
        toast(tm("messages.runAtRequired"), "warning");
        return;
      }
      creating.value = true;
      try {
        const payload = {
          ...newJob.value,
          run_at: newJob.value.run_once ? toIsoDatetime(newJob.value.run_at) : ""
        };
        const res = await axios.post("/api/cron/jobs", payload);
        if (res.data.status === "ok") {
          toast(tm("messages.createSuccess"));
          createDialog.value = false;
          editingJobId.value = "";
          resetNewJob();
          await loadJobs();
        } else {
          toast(res.data.message || tm("messages.createFailed"), "error");
        }
      } catch (e) {
        toast(((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || tm("messages.createFailed"), "error");
      } finally {
        creating.value = false;
      }
    }
    async function updateJob() {
      var _a, _b;
      if (!editingJobId.value) {
        return;
      }
      if (!newJob.value.session) {
        toast(tm("messages.sessionRequired"), "warning");
        return;
      }
      if (!newJob.value.note) {
        toast(tm("messages.noteRequired"), "warning");
        return;
      }
      if (!newJob.value.run_once && !newJob.value.cron_expression) {
        toast(tm("messages.cronRequired"), "warning");
        return;
      }
      if (newJob.value.run_once && !newJob.value.run_at) {
        toast(tm("messages.runAtRequired"), "warning");
        return;
      }
      creating.value = true;
      try {
        const payload = {
          ...newJob.value,
          run_at: newJob.value.run_once ? toIsoDatetime(newJob.value.run_at) : "",
          description: newJob.value.note
        };
        const res = await axios.patch(`/api/cron/jobs/${editingJobId.value}`, payload);
        if (res.data.status === "ok") {
          toast(tm("messages.updateSuccess"));
          createDialog.value = false;
          editingJobId.value = "";
          resetNewJob();
          await loadJobs();
        } else {
          toast(res.data.message || tm("messages.updateFailed"), "error");
        }
      } catch (e) {
        toast(((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || tm("messages.updateFailed"), "error");
      } finally {
        creating.value = false;
      }
    }
    async function submitJob() {
      if (isEditing.value) {
        await updateJob();
        return;
      }
      await createJob();
    }
    onMounted(() => {
      loadJobs();
      loadPlatforms();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["dashboard-page cron-page", { "is-dark": isDark.value }])
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
                  onClick: loadJobs
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(tm)("actions.refresh")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"]),
                createVNode(VBtn, {
                  variant: "tonal",
                  color: "primary",
                  "prepend-icon": "mdi-plus",
                  onClick: openCreate
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(tm)("actions.create")), 1)
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
                createBaseVNode("div", _hoisted_14, toDisplayString(unref(tm)("section.platforms.title")), 1),
                createBaseVNode("div", _hoisted_15, toDisplayString(proactivePlatforms.value.length ? unref(tm)("page.proactive.supported", { platforms: proactivePlatformText.value }) : unref(tm)("page.proactive.unsupported")), 1)
              ])
            ]),
            proactivePlatforms.value.length ? (openBlock(), createElementBlock("section", _hoisted_16, [
              createBaseVNode("div", _hoisted_17, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(proactivePlatforms.value, (platform) => {
                  return openBlock(), createBlock(VChip, {
                    key: platform.id,
                    size: "small",
                    variant: "tonal",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(platform.display_name || platform.name) + " · " + toDisplayString(platform.id), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])
            ])) : (openBlock(), createElementBlock("div", _hoisted_18, toDisplayString(unref(tm)("page.proactive.unsupported")), 1)),
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_20, toDisplayString(unref(tm)("table.title")), 1),
                createBaseVNode("div", _hoisted_21, toDisplayString(unref(tm)("table.subtitle")), 1)
              ])
            ]),
            createBaseVNode("section", _hoisted_22, [
              loading.value && !jobs.value.length ? (openBlock(), createElementBlock("div", _hoisted_23, [
                createVNode(VProgressCircular, {
                  indeterminate: "",
                  size: "22",
                  width: "2",
                  color: "primary"
                }),
                createBaseVNode("span", null, toDisplayString(unref(tm)("actions.refresh")) + "...", 1)
              ])) : !jobs.value.length ? (openBlock(), createElementBlock("div", _hoisted_24, [
                createVNode(VIcon, {
                  size: "20",
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-calendar-blank-outline")
                  ]),
                  _: 1
                }),
                createBaseVNode("span", null, toDisplayString(unref(tm)("table.empty")), 1)
              ])) : (openBlock(), createElementBlock("div", _hoisted_25, [
                createBaseVNode("table", _hoisted_26, [
                  _hoisted_27,
                  createBaseVNode("thead", null, [
                    createBaseVNode("tr", null, [
                      createBaseVNode("th", null, toDisplayString(unref(tm)("table.headers.name")), 1),
                      createBaseVNode("th", null, toDisplayString(unref(tm)("table.headers.type")), 1),
                      createBaseVNode("th", null, toDisplayString(unref(tm)("table.headers.cron")), 1),
                      createBaseVNode("th", null, toDisplayString(unref(tm)("table.headers.session")), 1),
                      createBaseVNode("th", null, toDisplayString(unref(tm)("table.headers.nextRun")), 1),
                      createBaseVNode("th", null, toDisplayString(unref(tm)("table.headers.lastRun")), 1),
                      createBaseVNode("th", _hoisted_28, toDisplayString(unref(tm)("table.headers.actions")), 1)
                    ])
                  ]),
                  createBaseVNode("tbody", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(sortedJobs.value, (item) => {
                      return openBlock(), createElementBlock("tr", {
                        key: item.job_id
                      }, [
                        createBaseVNode("td", _hoisted_29, [
                          createBaseVNode("div", _hoisted_30, toDisplayString(item.name || unref(tm)("table.notAvailable")), 1),
                          createBaseVNode("div", _hoisted_31, toDisplayString(item.description || item.job_id), 1)
                        ]),
                        createBaseVNode("td", null, [
                          createVNode(VChip, {
                            size: "small",
                            color: item.run_once ? "orange" : "primary",
                            variant: "tonal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(jobTypeLabel(item)), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("div", _hoisted_32, toDisplayString(scheduleLabel(item)), 1),
                          createBaseVNode("div", _hoisted_33, toDisplayString(scheduleMeta(item)), 1)
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("div", _hoisted_34, toDisplayString(item.session || unref(tm)("table.notAvailable")), 1)
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("div", _hoisted_35, toDisplayString(formatTime(item.next_run_time)), 1)
                        ]),
                        createBaseVNode("td", null, [
                          createBaseVNode("div", _hoisted_36, toDisplayString(formatTime(item.last_run_at)), 1)
                        ]),
                        createBaseVNode("td", _hoisted_37, [
                          createBaseVNode("div", _hoisted_38, [
                            createBaseVNode("div", _hoisted_39, [
                              createVNode(VSwitch, {
                                modelValue: item.enabled,
                                "onUpdate:modelValue": ($event) => item.enabled = $event,
                                inset: "",
                                density: "compact",
                                "hide-details": "",
                                color: "primary",
                                class: "table-actions-switch mt-0",
                                onChange: ($event) => toggleJob(item)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            createBaseVNode("div", _hoisted_40, [
                              item.job_type === "active_agent" ? (openBlock(), createBlock(VBtn, {
                                key: 0,
                                size: "small",
                                variant: "text",
                                color: "primary",
                                onClick: ($event) => openEdit(item)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(tm)("actions.edit")), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true),
                              createVNode(VBtn, {
                                size: "small",
                                variant: "text",
                                color: "error",
                                onClick: ($event) => deleteJob(item)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(tm)("actions.delete")), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])
                          ])
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ]))
            ]),
            createVNode(VSnackbar, {
              modelValue: snackbar.value.show,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => snackbar.value.show = $event),
              color: snackbar.value.color,
              timeout: "2600"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(snackbar.value.message), 1)
              ]),
              _: 1
            }, 8, ["modelValue", "color"]),
            createVNode(VDialog, {
              modelValue: createDialog.value,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => createDialog.value = $event),
              "max-width": "640"
            }, {
              default: withCtx(() => [
                createVNode(VCard, { class: "dashboard-dialog-card" }, {
                  default: withCtx(() => [
                    createVNode(VCardTitle, { class: "text-h6 pt-5 px-5" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(dialogTitle.value), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardSubtitle, { class: "px-5 text-body-2 text-medium-emphasis" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(tm)("form.chatHint")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "px-5 pb-2" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_41, [
                          createVNode(VSwitch, {
                            modelValue: newJob.value.run_once,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => newJob.value.run_once = $event),
                            label: unref(tm)("form.runOnce"),
                            inset: "",
                            color: "primary",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "label"]),
                          createVNode(VTextField, {
                            modelValue: newJob.value.name,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => newJob.value.name = $event),
                            label: unref(tm)("form.name"),
                            variant: "outlined",
                            density: "comfortable"
                          }, null, 8, ["modelValue", "label"]),
                          createVNode(VTextField, {
                            modelValue: newJob.value.note,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => newJob.value.note = $event),
                            label: unref(tm)("form.note"),
                            variant: "outlined",
                            density: "comfortable"
                          }, null, 8, ["modelValue", "label"]),
                          !newJob.value.run_once ? (openBlock(), createBlock(VTextField, {
                            key: 0,
                            modelValue: newJob.value.cron_expression,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => newJob.value.cron_expression = $event),
                            label: unref(tm)("form.cron"),
                            placeholder: unref(tm)("form.cronPlaceholder"),
                            variant: "outlined",
                            density: "comfortable"
                          }, null, 8, ["modelValue", "label", "placeholder"])) : (openBlock(), createBlock(VTextField, {
                            key: 1,
                            modelValue: newJob.value.run_at,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => newJob.value.run_at = $event),
                            label: unref(tm)("form.runAt"),
                            type: "datetime-local",
                            variant: "outlined",
                            density: "comfortable"
                          }, null, 8, ["modelValue", "label"])),
                          createVNode(VTextField, {
                            modelValue: newJob.value.session,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => newJob.value.session = $event),
                            label: unref(tm)("form.session"),
                            variant: "outlined",
                            density: "comfortable"
                          }, null, 8, ["modelValue", "label"]),
                          createVNode(VTextField, {
                            modelValue: newJob.value.timezone,
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => newJob.value.timezone = $event),
                            label: unref(tm)("form.timezone"),
                            variant: "outlined",
                            density: "comfortable"
                          }, null, 8, ["modelValue", "label"]),
                          createVNode(VSwitch, {
                            modelValue: newJob.value.enabled,
                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => newJob.value.enabled = $event),
                            label: unref(tm)("form.enabled"),
                            inset: "",
                            color: "primary",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "label"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, { class: "justify-end px-5 pb-5" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "text",
                          onClick: _cache[9] || (_cache[9] = ($event) => createDialog.value = false)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(tm)("actions.cancel")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          variant: "tonal",
                          color: "primary",
                          loading: creating.value,
                          onClick: submitJob
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(dialogSubmitText.value), 1)
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
        })
      ], 2);
    };
  }
});
const CronJobPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9d9dba58"]]);
export {
  CronJobPage as default
};
