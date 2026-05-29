import { a5 as useI18n, aO as useRoute, H as computed, C as resolveComponent, o as openBlock, h as createBlock, w as withCtx, c as createElementBlock, F as Fragment, r as renderList, b as createVNode, ag as VListItem, a2 as mergeProps, ah as VListItemTitle, d as createTextVNode, t as toDisplayString, $ as unref, T as normalizeClass, br as VListGroup, av as createSlots, g as VChip, aB as VListItemSubtitle, i as createCommentVNode, l as VIcon, U as normalizeStyle, L as ref, J as watch, s as VCard, a6 as VCardTitle, a as createBaseVNode, e as VBtn, v as VCardText, f as VSelect, aj as VProgressCircular, k as VAlert, a9 as VCardActions, V as VSpacer, ai as VDialog, B as axios, _ as _export_sfc, G as shallowRef, M as onMounted, I as onUnmounted, af as VList, bs as VNavigationDrawer, D as defineComponent, ap as pushScopeId, aq as popScopeId, aF as useTheme, as as useCommonStore, bl as useLanguageSwitcher, bt as VAppBar, a0 as withModifiers, z as VBtnToggle, x as VDivider, ae as VMenu, aA as isRef, aK as VForm, j as VTextField, bc as useAuthStore, bu as router, ao as VContainer, S as withDirectives, y as VProgressLinear, W as vShow, aP as VDataTable, aG as VCardSubtitle, au as VRadioGroup, at as VRadio, b9 as WaitingForRestart, bv as useRouterLoadingStore, bw as VLocaleProvider, bx as VMain, ay as RouterView, ax as VApp } from "./index-sVuaKD1b.js";
import { u as useCustomizerStore } from "./customizer-Cwj1g2HR.js";
import { b as applySidebarCustomization, a as sidebarItem } from "./sidebarCustomization-HzoSJOcE.js";
import { y as yn, w as wo, L as Lt } from "./useMessages-tbPz2ujk.js";
import { m as md5Exports } from "./md5-DL9f5tFY.js";
import { _ as _sfc_main$7 } from "./StyledMenu.vue_vue_type_style_index_0_lang--2fIsi1a.js";
import AboutPage from "./AboutPage-B8iE5D9e.js";
import { g as getDesktopRuntimeInfo, r as restartAstrBot } from "./restartAstrBot-UkSl4Ttp.js";
import { C as ConsoleDisplayer } from "./ConsoleDisplayer-VYA8ip5-.js";
import { R as ReadmeDialog } from "./ReadmeDialog-Dl498ZDf.js";
import { C as Chat } from "./Chat-BSQ_iprH.js";
import "./shiki-GcVF7abd.js";
import "./eventsource-BRykmeMV.js";
import "./index-CYlPdpJH.js";
import "./clipboard-rcHxKLZ_.js";
import "./confirmDialog-ByM573Zf.js";
import "./useMediaHandling-JruimGXk.js";
import "./TemplateListEditor-B70spLPD.js";
import "./index-B1y4uE9w.js";
import "./PersonaForm-DLrw373n.js";
import "./ActionRef-HZtvlUkH.js";
import "./ProviderChatCompletionPanel-0on0k43h.js";
import "./AstrBotConfig-COOLLJVf.js";
import "./useProviderSources-9t71ajGU.js";
import "./inputValue-BqQtgRan.js";
const _sfc_main$6 = {
  __name: "NavItem",
  props: { item: Object, level: Number },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const customizer = useCustomizerStore();
    const route = useRoute();
    const itemStyle = computed(() => {
      const lvl = props.level ?? 0;
      const indent = customizer.mini_sidebar ? "0px" : `${lvl * 24}px`;
      return { "--indent-padding": indent };
    });
    const isItemActive = computed(() => {
      if (!props.item || props.item.type === "external" || !props.item.to) return false;
      if (typeof props.item.to !== "string") return false;
      if (props.item.to.includes("#")) {
        const [path, hash] = props.item.to.split("#");
        return route.path === path && route.hash === `#${hash}`;
      }
      return route.path === props.item.to;
    });
    return (_ctx, _cache) => {
      const _component_NavItem = resolveComponent("NavItem", true);
      return __props.item.children ? (openBlock(), createBlock(VListGroup, {
        key: 0,
        value: __props.item.title,
        class: normalizeClass({ "group-bordered": unref(customizer).mini_sidebar })
      }, {
        activator: withCtx(({ props: props2 }) => [
          createVNode(VListItem, mergeProps(props2, {
            rounded: "",
            class: "mb-1",
            color: "secondary",
            "prepend-icon": __props.item.icon,
            style: { "--indent-padding": "0px" }
          }), {
            default: withCtx(() => [
              createVNode(VListItemTitle, { style: { "font-size": "14px", "font-weight": "500", "line-height": "1.2", "word-break": "break-word" } }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.item.title && __props.item.title.includes(".") ? unref(t)(__props.item.title) : __props.item.title), 1)
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1040, ["prepend-icon"])
        ]),
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.item.children, (child, index) => {
            return openBlock(), createBlock(_component_NavItem, {
              key: child.title || child.to || `child-${index}`,
              item: child,
              level: (__props.level || 0) + 1
            }, null, 8, ["item", "level"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["value", "class"])) : (openBlock(), createBlock(VListItem, {
        key: 1,
        to: __props.item.type === "external" ? "" : __props.item.to,
        href: __props.item.type === "external" ? __props.item.to : "",
        active: isItemActive.value,
        rounded: "",
        class: "mb-1",
        color: "secondary",
        disabled: __props.item.disabled,
        target: __props.item.type === "external" ? "_blank" : "",
        style: normalizeStyle(itemStyle.value)
      }, createSlots({
        prepend: withCtx(() => [
          __props.item.icon ? (openBlock(), createBlock(VIcon, {
            key: 0,
            size: __props.item.iconSize,
            class: "hide-menu",
            icon: __props.item.icon
          }, null, 8, ["size", "icon"])) : createCommentVNode("", true)
        ]),
        default: withCtx(() => [
          createVNode(VListItemTitle, { style: { "font-size": "14px" } }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.item.title && __props.item.title.includes(".") ? unref(t)(__props.item.title) : __props.item.title), 1)
            ]),
            _: 1
          }),
          __props.item.subCaption ? (openBlock(), createBlock(VListItemSubtitle, {
            key: 0,
            class: "text-caption mt-n1 hide-menu"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.item.subCaption), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 2
      }, [
        __props.item.chip ? {
          name: "append",
          fn: withCtx(() => [
            createVNode(VChip, {
              color: __props.item.chipColor,
              class: "sidebarchip hide-menu",
              size: __props.item.chipIcon ? "small" : "default",
              variant: __props.item.chipVariant,
              "prepend-icon": __props.item.chipIcon
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.item.chip), 1)
              ]),
              _: 1
            }, 8, ["color", "size", "variant", "prepend-icon"])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["to", "href", "active", "disabled", "target", "style"]));
    };
  }
};
const _hoisted_1$5 = { class: "text-h3" };
const _hoisted_2$4 = { class: "mb-4" };
const _hoisted_3$3 = { style: { "max-height": "70vh", "overflow-y": "auto" } };
const _hoisted_4$3 = {
  key: 0,
  class: "text-center py-8"
};
const _hoisted_5$3 = { class: "mt-4" };
const _hoisted_6$2 = {
  key: 2,
  class: "changelog-content"
};
const _sfc_main$5 = {
  __name: "ChangelogDialog",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    yn();
    wo();
    const { t } = useI18n();
    const dialog = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    const changelogContent = ref("");
    const changelogLoading = ref(false);
    const changelogError = ref("");
    const changelogVersion = ref("");
    const selectedVersion = ref("");
    const availableVersions = ref([]);
    const loadingVersions = ref(false);
    async function getCurrentVersion() {
      var _a;
      try {
        const res = await axios.get("/api/stat/version");
        const version = ((_a = res.data.data) == null ? void 0 : _a.version) || "";
        changelogVersion.value = version;
        selectedVersion.value = version;
        return version;
      } catch (err) {
        console.error("Failed to get version:", err);
        return "";
      }
    }
    async function loadChangelog(version) {
      var _a, _b, _c, _d;
      const targetVersion = version || selectedVersion.value || changelogVersion.value;
      if (!targetVersion) {
        changelogError.value = t("core.navigation.changelogDialog.selectVersion");
        return;
      }
      changelogLoading.value = true;
      changelogError.value = "";
      changelogContent.value = "";
      try {
        const res = await axios.get("/api/stat/changelog", {
          params: { version: targetVersion }
        });
        if (res.data.status === "ok") {
          changelogContent.value = res.data.data.content;
          selectedVersion.value = targetVersion;
        } else {
          changelogError.value = res.data.message || t("core.navigation.changelogDialog.error");
        }
      } catch (err) {
        console.error("Failed to load changelog:", err);
        if (((_a = err.response) == null ? void 0 : _a.status) === 404 || ((_d = (_c = (_b = err.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message) == null ? void 0 : _d.includes("not found"))) {
          changelogError.value = t("core.navigation.changelogDialog.notFound");
        } else {
          changelogError.value = t("core.navigation.changelogDialog.error");
        }
      } finally {
        changelogLoading.value = false;
      }
    }
    async function loadAvailableVersions() {
      loadingVersions.value = true;
      try {
        const res = await axios.get("/api/stat/changelog/list");
        if (res.data.status === "ok") {
          availableVersions.value = res.data.data.versions || [];
        }
      } catch (err) {
        console.error("Failed to load versions:", err);
      } finally {
        loadingVersions.value = false;
      }
    }
    function onVersionChange() {
      if (selectedVersion.value) {
        loadChangelog(selectedVersion.value);
      }
    }
    watch(dialog, async (newValue) => {
      if (newValue) {
        await loadAvailableVersions();
        if (!changelogVersion.value) {
          await getCurrentVersion();
        }
        if (changelogVersion.value && availableVersions.value.includes(changelogVersion.value)) {
          selectedVersion.value = changelogVersion.value;
          await loadChangelog();
        } else if (availableVersions.value.length > 0) {
          selectedVersion.value = availableVersions.value[0];
          await loadChangelog(availableVersions.value[0]);
        }
      } else {
        changelogContent.value = "";
        changelogError.value = "";
      }
    });
    getCurrentVersion();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VDialog, {
        "model-value": dialog.value,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => dialog.value = $event),
        width: _ctx.$vuetify.display.smAndDown ? "100%" : "800",
        fullscreen: _ctx.$vuetify.display.xs,
        "max-width": "1000"
      }, {
        default: withCtx(() => [
          createVNode(VCard, null, {
            default: withCtx(() => [
              createVNode(VCardTitle, { class: "d-flex justify-space-between align-center" }, {
                default: withCtx(() => [
                  createBaseVNode("span", _hoisted_1$5, toDisplayString(unref(t)("core.navigation.changelogDialog.title")), 1),
                  createVNode(VBtn, {
                    icon: "",
                    onClick: _cache[0] || (_cache[0] = ($event) => dialog.value = false),
                    flat: ""
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
              createVNode(VCardText, { class: "pb-5" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2$4, [
                    createVNode(VSelect, {
                      modelValue: selectedVersion.value,
                      "onUpdate:modelValue": [
                        _cache[1] || (_cache[1] = ($event) => selectedVersion.value = $event),
                        onVersionChange
                      ],
                      items: availableVersions.value,
                      label: unref(t)("core.navigation.changelogDialog.selectVersion"),
                      loading: loadingVersions.value,
                      variant: "outlined",
                      density: "compact"
                    }, {
                      item: withCtx(({ item, props: props2 }) => [
                        createVNode(VListItem, mergeProps(props2, {
                          title: `v${item.value}`
                        }), createSlots({ _: 2 }, [
                          item.value === changelogVersion.value ? {
                            name: "append",
                            fn: withCtx(() => [
                              createVNode(VChip, {
                                size: "x-small",
                                color: "primary",
                                variant: "tonal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)("core.navigation.changelogDialog.current")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            key: "0"
                          } : void 0
                        ]), 1040, ["title"])
                      ]),
                      selection: withCtx(({ item }) => [
                        createBaseVNode("span", null, "v" + toDisplayString(item.value), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "items", "label", "loading"])
                  ]),
                  createBaseVNode("div", _hoisted_3$3, [
                    changelogLoading.value ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
                      createVNode(VProgressCircular, {
                        indeterminate: "",
                        color: "primary"
                      }),
                      createBaseVNode("div", _hoisted_5$3, toDisplayString(unref(t)("core.navigation.changelogDialog.loading")), 1)
                    ])) : changelogError.value ? (openBlock(), createBlock(VAlert, {
                      key: 1,
                      type: "error",
                      variant: "tonal",
                      border: "start"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(changelogError.value), 1)
                      ]),
                      _: 1
                    })) : changelogContent.value ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
                      createVNode(unref(Lt), {
                        content: changelogContent.value,
                        typewriter: false,
                        class: "markdown-content"
                      }, null, 8, ["content"])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }),
              createVNode(VCardActions, null, {
                default: withCtx(() => [
                  createVNode(VSpacer),
                  createVNode(VBtn, {
                    color: "blue-darken-1",
                    variant: "text",
                    onClick: _cache[2] || (_cache[2] = ($event) => dialog.value = false)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("core.common.close")), 1)
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
      }, 8, ["model-value", "width", "fullscreen"]);
    };
  }
};
const _hoisted_1$4 = { class: "sidebar-container" };
const _hoisted_2$3 = {
  key: 0,
  class: "sidebar-footer"
};
const minSidebarWidth = 200;
const maxSidebarWidth = 300;
const _sfc_main$4 = {
  __name: "VerticalSidebar",
  setup(__props) {
    const { t } = useI18n();
    const customizer = useCustomizerStore();
    function collectGroupValues(items, values = /* @__PURE__ */ new Set()) {
      items.forEach((item) => {
        if ((item == null ? void 0 : item.children) && item.title) {
          values.add(item.title);
          collectGroupValues(item.children, values);
        }
      });
      return values;
    }
    function sanitizeOpenedItems(items, menuItems) {
      if (!Array.isArray(items)) {
        return [];
      }
      const groupValues = collectGroupValues(menuItems);
      return items.filter((item) => typeof item === "string" && groupValues.has(item));
    }
    function getInitialOpenedItems(menuItems) {
      try {
        const stored = JSON.parse(localStorage.getItem("sidebar_openedItems") || "[]");
        return sanitizeOpenedItems(stored, menuItems);
      } catch {
        return [];
      }
    }
    const sidebarMenu = shallowRef(applySidebarCustomization(sidebarItem));
    const openedItems = ref(getInitialOpenedItems(sidebarMenu.value));
    watch(openedItems, (val) => {
      localStorage.setItem("sidebar_openedItems", JSON.stringify(sanitizeOpenedItems(val, sidebarMenu.value)));
    }, { deep: true });
    function refreshSidebarMenu() {
      sidebarMenu.value = applySidebarCustomization(sidebarItem);
      openedItems.value = sanitizeOpenedItems(openedItems.value, sidebarMenu.value);
    }
    const handleStorageChange = (e) => {
      if (e.key === "astrbot_sidebar_customization") {
        refreshSidebarMenu();
      }
    };
    const handleCustomEvent = () => {
      refreshSidebarMenu();
    };
    onMounted(() => {
      window.addEventListener("storage", handleStorageChange);
      window.addEventListener("sidebar-customization-changed", handleCustomEvent);
    });
    onUnmounted(() => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("sidebar-customization-changed", handleCustomEvent);
    });
    const changelogDialog = ref(false);
    const sidebarWidth = ref(260);
    const isResizing = ref(false);
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      customizer.Sidebar_drawer = false;
    }
    function startSidebarResize(event) {
      isResizing.value = true;
      document.body.style.userSelect = "none";
      document.body.style.cursor = "ew-resize";
      const startX = event.clientX;
      const startWidth = sidebarWidth.value;
      function onMouseMoveResize(event2) {
        if (!isResizing.value) return;
        const deltaX = event2.clientX - startX;
        const newWidth = Math.max(minSidebarWidth, Math.min(maxSidebarWidth, startWidth + deltaX));
        sidebarWidth.value = newWidth;
      }
      function onMouseUpResize() {
        isResizing.value = false;
        document.body.style.userSelect = "";
        document.body.style.cursor = "";
        document.removeEventListener("mousemove", onMouseMoveResize);
        document.removeEventListener("mouseup", onMouseUpResize);
      }
      document.addEventListener("mousemove", onMouseMoveResize);
      document.addEventListener("mouseup", onMouseUpResize);
    }
    function openChangelogDialog() {
      changelogDialog.value = true;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(VNavigationDrawer, {
          left: "",
          modelValue: unref(customizer).Sidebar_drawer,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(customizer).Sidebar_drawer = $event),
          elevation: "0",
          "rail-width": "80",
          app: "",
          class: "leftSidebar",
          width: sidebarWidth.value,
          rail: unref(customizer).mini_sidebar,
          key: unref(customizer).uiTheme
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$4, [
              createVNode(VList, {
                class: normalizeClass(["pa-4", "listitem", "flex-grow-1", { "hidden-scrollbar": unref(customizer).mini_sidebar }]),
                opened: openedItems.value,
                "onUpdate:opened": _cache[0] || (_cache[0] = ($event) => openedItems.value = $event),
                "open-strategy": "multiple"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(sidebarMenu.value, (item, i) => {
                    return openBlock(), createBlock(_sfc_main$6, {
                      key: item.title || item.to || `sidebar-item-${i}`,
                      item,
                      class: "leftPadding"
                    }, null, 8, ["item"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["class", "opened"]),
              !unref(customizer).mini_sidebar ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
                createVNode(VBtn, {
                  class: "sidebar-footer-btn",
                  size: "small",
                  variant: "tonal",
                  color: "primary",
                  to: "/settings",
                  "prepend-icon": "mdi-cog"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("core.navigation.settings")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VBtn, {
                  class: "sidebar-footer-btn",
                  size: "small",
                  variant: "text",
                  "prepend-icon": "mdi-note-text-outline",
                  onClick: openChangelogDialog
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("core.navigation.changelog")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VBtn, {
                  class: "sidebar-footer-btn",
                  size: "small",
                  variant: "text",
                  "prepend-icon": "mdi-book-open-variant",
                  to: "/help"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("core.navigation.documentation")), 1)
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ]),
            !unref(customizer).mini_sidebar && unref(customizer).Sidebar_drawer ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["sidebar-resize-handle", { "resizing": isResizing.value }]),
              onMousedown: startSidebarResize
            }, null, 34)) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["modelValue", "width", "rail"])),
        createVNode(_sfc_main$5, {
          modelValue: changelogDialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => changelogDialog.value = $event)
        }, null, 8, ["modelValue"])
      ], 64);
    };
  }
};
const VerticalSidebarVue = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8952beac"]]);
const _imports_0$1 = "/assets/xmas-hat-ChoGHOay.png";
const _imports_0 = "/assets/miku_logo-BZSqd5_q.jpg";
const _withScopeId$1 = (n) => (pushScopeId("data-v-2379b892"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "logo-container" };
const _hoisted_2$2 = { class: "logo-content" };
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "logo-image" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    width: "110",
    src: _imports_0,
    alt: "YUNGE Logo"
  })
], -1));
const _hoisted_4$2 = { class: "logo-text" };
const _hoisted_5$2 = ["innerHTML"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Logo",
  props: {
    title: { default: "" },
    subtitle: { default: "" }
  },
  setup(__props) {
    const { t } = useI18n();
    const formatTitle = (title) => {
      return title;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$2, [
          _hoisted_3$2,
          createBaseVNode("div", _hoisted_4$2, [
            createBaseVNode("h2", {
              style: normalizeStyle({ color: "rgb(var(--v-theme-primary))" }),
              innerHTML: formatTitle(_ctx.title || unref(t)("core.header.logoTitle"))
            }, null, 12, _hoisted_5$2),
            createBaseVNode("h4", {
              style: normalizeStyle({ color: "rgba(var(--v-theme-on-surface), 0.72)" }),
              class: "hint-text"
            }, toDisplayString(_ctx.subtitle || unref(t)("core.header.accountDialog.title")), 5)
          ])
        ])
      ]);
    };
  }
});
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2379b892"]]);
const _hoisted_1$2 = { class: "logo-text Outfit" };
const _hoisted_2$1 = { class: "logo-text bot-text-wrapper" };
const _hoisted_3$1 = {
  key: 0,
  src: _imports_0$1,
  alt: "Christmas hat",
  class: "xmas-hat"
};
const _hoisted_4$1 = {
  key: 0,
  class: "logo-text logo-text-light Outfit",
  style: { "color": "grey" }
};
const _hoisted_5$1 = { class: "version-text hidden-xs" };
const _hoisted_6$1 = {
  key: 3,
  class: "mr-4 hidden-xs"
};
const _hoisted_7$1 = { key: 0 };
const _hoisted_8$1 = { key: 1 };
const _hoisted_9$1 = {
  class: "d-flex align-center mr-3 hidden-xs",
  style: { "gap": "8px" }
};
const _hoisted_10$1 = { class: "mobile-mode-toggle-wrapper" };
const _hoisted_11$1 = { class: "language-group-current" };
const _hoisted_12$1 = { class: "language-flag" };
const _hoisted_13$1 = { class: "text-h5" };
const _hoisted_14$1 = { style: { "display": "inline-block" } };
const _hoisted_15$1 = { style: { "margin-left": "4px" } };
const _hoisted_16 = {
  key: 0,
  style: { "background-color": "#646cff24", "padding": "16px", "border-radius": "10px", "font-size": "14px", "max-height": "400px", "overflow-y": "auto" }
};
const _hoisted_17 = { class: "mb-4 mt-4" };
const _hoisted_18 = { class: "mb-4" };
const _hoisted_19 = { href: "https://containrrr.dev/watchtower/usage-overview/" };
const _hoisted_20 = { class: "text-body-2" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_22 = {
  href: "https://github.com/hatsune-musubi-miku/miku_ai/issues",
  target: "_blank",
  class: "text-decoration-none"
};
const _hoisted_23 = { class: "d-flex align-center" };
const _hoisted_24 = { style: { "margin-top": "16px" } };
const _hoisted_25 = { class: "mb-4" };
const _hoisted_26 = { class: "mb-4" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_28 = { class: "mb-4" };
const _hoisted_29 = { key: 0 };
const _hoisted_30 = { key: 1 };
const _hoisted_31 = { class: "mb-3" };
const _hoisted_32 = { key: 0 };
const _hoisted_33 = { class: "text-caption mt-3" };
const _hoisted_34 = { class: "d-flex flex-column align-center mb-6" };
const _hoisted_35 = { class: "text-caption text-medium-emphasis mt-2" };
const LAST_BOT_ROUTE_KEY = "astrbot:last_bot_route";
const LAST_CHAT_ROUTE_KEY = "astrbot:last_chat_route";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VerticalHeader",
  setup(__props) {
    var _a;
    yn();
    wo();
    const customizer = useCustomizerStore();
    const theme = useTheme();
    const { t } = useI18n();
    const route = useRoute();
    let dialog = ref(false);
    let accountWarning = ref(false);
    let updateStatusDialog = ref(false);
    let aboutDialog = ref(false);
    const username = localStorage.getItem("user");
    let password = ref("");
    let newPassword = ref("");
    let confirmPassword = ref("");
    let newUsername = ref("");
    ref("");
    let updateStatus = ref("");
    let releaseMessage = ref("");
    let hasNewVersion = ref(false);
    let botCurrVersion = ref("");
    let dashboardHasNewVersion = ref(false);
    let dashboardCurrentVersion = ref("");
    ref("");
    let releases = ref([]);
    let updatingDashboardLoading = ref(false);
    let installLoading = ref(false);
    const isDesktopReleaseMode = ref(
      typeof window !== "undefined" && !!((_a = window.astrbotDesktop) == null ? void 0 : _a.isDesktop)
    );
    const desktopUpdateDialog = ref(false);
    const desktopUpdateChecking = ref(false);
    const desktopUpdateInstalling = ref(false);
    const desktopUpdateHasNewVersion = ref(false);
    const desktopUpdateCurrentVersion = ref("-");
    const desktopUpdateLatestVersion = ref("-");
    const desktopUpdateStatus = ref("");
    const isChatPath = computed(
      () => route.path === "/chat" || route.path.startsWith("/chat/")
    );
    const themeDotColor = computed(() => "#607d8b");
    const themeLabel = computed(() => {
      const isLight = customizer.uiTheme === "NormalLightTheme";
      return isLight ? "Light" : "Dark";
    });
    const getAppUpdaterBridge = () => {
      if (typeof window === "undefined") {
        return null;
      }
      const bridge = window.astrbotAppUpdater;
      if (bridge && typeof bridge.checkForAppUpdate === "function" && typeof bridge.installAppUpdate === "function") {
        return bridge;
      }
      return null;
    };
    const getSelectedGitHubProxy = () => {
      if (typeof window === "undefined" || !window.localStorage) return "";
      return localStorage.getItem("githubProxyRadioValue") === "1" ? localStorage.getItem("selectedGitHubProxy") || "" : "";
    };
    let releaseNotesDialog = ref(false);
    let selectedReleaseNotes = ref("");
    let selectedReleaseTag = ref("");
    const releasesHeader = computed(() => [
      { title: t("core.header.updateDialog.table.tag"), key: "tag_name" },
      { title: t("core.header.updateDialog.table.publishDate"), key: "published_at" },
      { title: t("core.header.updateDialog.table.content"), key: "body" },
      { title: t("core.header.updateDialog.table.sourceUrl"), key: "zipball_url" },
      { title: t("core.header.updateDialog.table.actions"), key: "switch" }
    ]);
    const formValid = ref(true);
    const passwordRules = computed(() => [
      (v) => !!v || t("core.header.accountDialog.validation.passwordRequired"),
      (v) => v.length >= 8 || t("core.header.accountDialog.validation.passwordMinLength")
    ]);
    const confirmPasswordRules = computed(() => [
      (v) => !newPassword.value || !!v || t("core.header.accountDialog.validation.passwordRequired"),
      (v) => !newPassword.value || v === newPassword.value || t("core.header.accountDialog.validation.passwordMatch")
    ]);
    const usernameRules = computed(() => [
      (v) => !v || v.length >= 3 || t("core.header.accountDialog.validation.usernameMinLength")
    ]);
    const showPassword = ref(false);
    const showNewPassword = ref(false);
    const showConfirmPassword = ref(false);
    const accountEditStatus = ref({
      loading: false,
      success: false,
      error: false,
      message: ""
    });
    function cancelDesktopUpdate() {
      if (desktopUpdateInstalling.value) {
        return;
      }
      desktopUpdateDialog.value = false;
    }
    async function openDesktopUpdateDialog() {
      desktopUpdateDialog.value = true;
      desktopUpdateChecking.value = true;
      desktopUpdateInstalling.value = false;
      desktopUpdateHasNewVersion.value = false;
      desktopUpdateCurrentVersion.value = "-";
      desktopUpdateLatestVersion.value = "-";
      desktopUpdateStatus.value = t("core.header.updateDialog.desktopApp.checking");
      const bridge = getAppUpdaterBridge();
      if (!bridge) {
        desktopUpdateChecking.value = false;
        desktopUpdateStatus.value = t("core.header.updateDialog.desktopApp.checkFailed");
        return;
      }
      try {
        const result = await bridge.checkForAppUpdate();
        if (!(result == null ? void 0 : result.ok)) {
          desktopUpdateCurrentVersion.value = (result == null ? void 0 : result.currentVersion) || "-";
          desktopUpdateLatestVersion.value = (result == null ? void 0 : result.latestVersion) || (result == null ? void 0 : result.currentVersion) || "-";
          desktopUpdateStatus.value = (result == null ? void 0 : result.reason) || t("core.header.updateDialog.desktopApp.checkFailed");
          return;
        }
        desktopUpdateCurrentVersion.value = result.currentVersion || "-";
        desktopUpdateLatestVersion.value = result.latestVersion || result.currentVersion || "-";
        desktopUpdateHasNewVersion.value = !!result.hasUpdate;
        desktopUpdateStatus.value = result.hasUpdate ? t("core.header.updateDialog.desktopApp.hasNewVersion") : t("core.header.updateDialog.desktopApp.isLatest");
      } catch (error) {
        console.error(error);
        desktopUpdateStatus.value = t("core.header.updateDialog.desktopApp.checkFailed");
      } finally {
        desktopUpdateChecking.value = false;
      }
    }
    async function confirmDesktopUpdate() {
      if (!desktopUpdateHasNewVersion.value || desktopUpdateInstalling.value) {
        return;
      }
      const bridge = getAppUpdaterBridge();
      if (!bridge) {
        desktopUpdateStatus.value = t("core.header.updateDialog.desktopApp.installFailed");
        return;
      }
      desktopUpdateInstalling.value = true;
      desktopUpdateStatus.value = t("core.header.updateDialog.desktopApp.installing");
      try {
        const result = await bridge.installAppUpdate();
        if (result == null ? void 0 : result.ok) {
          desktopUpdateDialog.value = false;
          return;
        }
        desktopUpdateStatus.value = (result == null ? void 0 : result.reason) || t("core.header.updateDialog.desktopApp.installFailed");
      } catch (error) {
        console.error(error);
        desktopUpdateStatus.value = t("core.header.updateDialog.desktopApp.installFailed");
      } finally {
        desktopUpdateInstalling.value = false;
      }
    }
    function handleUpdateClick() {
      if (isDesktopReleaseMode.value) {
        void openDesktopUpdateDialog();
        return;
      }
      checkUpdate();
      getReleases();
      updateStatusDialog.value = true;
    }
    const isPreRelease = (version2) => {
      const preReleaseKeywords = ["alpha", "beta", "rc", "pre", "preview", "dev"];
      const lowerVersion = version2.toLowerCase();
      return preReleaseKeywords.some((keyword) => lowerVersion.includes(keyword));
    };
    function accountEdit() {
      accountEditStatus.value.loading = true;
      accountEditStatus.value.error = false;
      accountEditStatus.value.success = false;
      const passwordHash = password.value ? md5Exports.md5(password.value) : "";
      const newPasswordHash = newPassword.value ? md5Exports.md5(newPassword.value) : "";
      const confirmPasswordHash = confirmPassword.value ? md5Exports.md5(confirmPassword.value) : "";
      axios.post("/api/auth/account/edit", {
        password: passwordHash,
        new_password: newPasswordHash,
        confirm_password: confirmPasswordHash,
        new_username: newUsername.value ? newUsername.value : username
      }).then((res) => {
        if (res.data.status == "error") {
          accountEditStatus.value.error = true;
          accountEditStatus.value.message = res.data.message;
          password.value = "";
          newPassword.value = "";
          confirmPassword.value = "";
          return;
        }
        accountEditStatus.value.success = true;
        accountEditStatus.value.message = res.data.message;
        setTimeout(() => {
          dialog.value = !dialog.value;
          const authStore = useAuthStore();
          authStore.logout();
        }, 2e3);
      }).catch((err) => {
        console.log(err);
        accountEditStatus.value.error = true;
        accountEditStatus.value.message = typeof err === "string" ? err : t("core.header.accountDialog.messages.updateFailed");
        password.value = "";
        newPassword.value = "";
        confirmPassword.value = "";
      }).finally(() => {
        accountEditStatus.value.loading = false;
      });
    }
    function getVersion() {
      axios.get("/api/stat/version").then((res) => {
        var _a2, _b;
        botCurrVersion.value = "v" + res.data.data.version;
        dashboardCurrentVersion.value = (_a2 = res.data.data) == null ? void 0 : _a2.dashboard_version;
        let change_pwd_hint = (_b = res.data.data) == null ? void 0 : _b.change_pwd_hint;
        if (change_pwd_hint) {
          dialog.value = true;
          accountWarning.value = true;
          localStorage.setItem("change_pwd_hint", "true");
        } else {
          localStorage.removeItem("change_pwd_hint");
        }
      }).catch((err) => {
        console.log(err);
      });
    }
    function checkUpdate() {
      updateStatus.value = t("core.header.updateDialog.status.checking");
      axios.get("/api/update/check").then((res) => {
        hasNewVersion.value = res.data.data.has_new_version;
        if (res.data.data.has_new_version) {
          releaseMessage.value = res.data.message;
          updateStatus.value = t("core.header.version.hasNewVersion");
        } else {
          updateStatus.value = res.data.message;
        }
        dashboardHasNewVersion.value = isDesktopReleaseMode.value ? false : res.data.data.dashboard_has_new_version;
      }).catch((err) => {
        if (err.response && err.response.status == 401) {
          console.log("401");
          const authStore = useAuthStore();
          authStore.logout();
          return;
        }
        console.log(err);
        updateStatus.value = err;
      });
    }
    function getReleases() {
      return axios.get("/api/update/releases").then((res) => {
        releases.value = res.data.data.map((item) => {
          item.published_at = new Date(item.published_at).toLocaleString();
          return item;
        });
      }).catch((err) => {
        console.log(err);
      });
    }
    function switchVersion(version2) {
      updateStatus.value = t("core.header.updateDialog.status.switching");
      installLoading.value = true;
      axios.post("/api/update/do", {
        version: version2,
        proxy: getSelectedGitHubProxy()
      }).then((res) => {
        updateStatus.value = res.data.message;
        if (res.data.status == "ok") {
          setTimeout(() => {
            window.location.reload();
          }, 1e3);
        }
      }).catch((err) => {
        console.log(err);
        updateStatus.value = err;
      }).finally(() => {
        installLoading.value = false;
      });
    }
    function updateDashboard() {
      updatingDashboardLoading.value = true;
      updateStatus.value = t("core.header.updateDialog.status.updating");
      axios.post("/api/update/dashboard").then((res) => {
        updateStatus.value = res.data.message;
        if (res.data.status == "ok") {
          setTimeout(() => {
            window.location.reload();
          }, 1e3);
        }
      }).catch((err) => {
        console.log(err);
        updateStatus.value = err;
      }).finally(() => {
        updatingDashboardLoading.value = false;
      });
    }
    function toggleDarkMode() {
      const target = customizer.uiTheme === "NormalLightTheme" ? "NormalTheme" : "NormalLightTheme";
      customizer.SET_UI_THEME(target);
      theme.global.name.value = target;
    }
    function openReleaseNotesDialog(body, tag) {
      selectedReleaseNotes.value = body;
      selectedReleaseTag.value = tag;
      releaseNotesDialog.value = true;
    }
    function handleLogoClick() {
      if (isChatPath.value) {
        aboutDialog.value = true;
      } else {
        router.push("/about");
      }
    }
    getVersion();
    const commonStore = useCommonStore();
    commonStore.createEventSource();
    commonStore.getStartTime();
    onMounted(() => {
      if (typeof window !== "undefined") {
        if (isChatPath.value) {
          const parts = route.fullPath.split("/");
          const sessionId = parts[2];
          if (sessionId) {
            sessionStorage.setItem(LAST_CHAT_ROUTE_KEY, sessionId);
            console.log("Initial save chat ID:", sessionId);
          }
        } else {
          sessionStorage.setItem(LAST_BOT_ROUTE_KEY, route.fullPath);
          console.log("Initial save bot route:", route.fullPath);
        }
      }
    });
    watch(() => route.fullPath, (newPath) => {
      if (typeof window === "undefined") return;
      console.log("Route changed:", {
        newPath,
        isChat: isChatPath.value,
        currentChatId: route.params.id
      });
      try {
        const isChat = isChatPath.value;
        if (!isChat) {
          sessionStorage.setItem(LAST_BOT_ROUTE_KEY, newPath);
        }
        if (isChat) {
          const parts = newPath.split("/");
          const sessionId = parts[2];
          if (sessionId) {
            sessionStorage.setItem(LAST_CHAT_ROUTE_KEY, sessionId);
          }
        }
      } catch (e) {
        console.error("Failed to save route:", e);
      }
    });
    const currentMode = computed({
      get: () => isChatPath.value ? "chat" : "bot",
      set: (val) => {
        try {
          if (typeof window === "undefined" || typeof sessionStorage === "undefined") {
            console.warn("sessionStorage is not available in this environment");
            return;
          }
          if (val === "chat") {
            const lastSessionId = sessionStorage.getItem(LAST_CHAT_ROUTE_KEY);
            router.push(lastSessionId ? `/chat/${lastSessionId}` : "/chat");
          } else {
            let lastBotRoute = sessionStorage.getItem(LAST_BOT_ROUTE_KEY) || "/welcome";
            if (lastBotRoute.startsWith("/chat")) {
              lastBotRoute = "/welcome";
            }
            router.push(lastBotRoute);
          }
        } catch (e) {
          console.warn("Failed to access sessionStorage in currentMode setter:", e);
        }
      }
    });
    const isChristmas = computed(() => {
      const today = /* @__PURE__ */ new Date();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      return month === 12 && day === 25;
    });
    const mainMenuOpen = ref(false);
    const { languageOptions, currentLanguage, switchLanguage, locale } = useLanguageSwitcher();
    const languages = computed(
      () => languageOptions.value.map((lang) => ({
        code: lang.value,
        name: lang.label,
        flag: lang.flag
      }))
    );
    const currentLocale = computed(() => locale.value);
    const changeLanguage = async (langCode) => {
      await switchLanguage(langCode);
      mainMenuOpen.value = false;
    };
    onMounted(async () => {
      const runtimeInfo = await getDesktopRuntimeInfo();
      isDesktopReleaseMode.value = runtimeInfo.isDesktopRuntime;
      if (isDesktopReleaseMode.value) {
        dashboardHasNewVersion.value = false;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VAppBar, {
        elevation: "0",
        height: "50",
        class: "top-header"
      }, {
        default: withCtx(() => [
          !isChatPath.value ? (openBlock(), createBlock(VBtn, {
            key: 0,
            style: { "margin-left": "16px" },
            class: "hidden-md-and-down",
            icon: "",
            rounded: "sm",
            variant: "flat",
            onClick: _cache[0] || (_cache[0] = withModifiers(($event) => unref(customizer).SET_MINI_SIDEBAR(!unref(customizer).mini_sidebar), ["stop"]))
          }, {
            default: withCtx(() => [
              createVNode(VIcon, null, {
                default: withCtx(() => [
                  createTextVNode("mdi-menu")
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          !isChatPath.value ? (openBlock(), createBlock(VBtn, {
            key: 1,
            class: "hidden-lg-and-up ms-3",
            icon: "",
            rounded: "sm",
            variant: "flat",
            onClick: withModifiers(unref(customizer).SET_SIDEBAR_DRAWER, ["stop"])
          }, {
            default: withCtx(() => [
              createVNode(VIcon, null, {
                default: withCtx(() => [
                  createTextVNode("mdi-menu")
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("", true),
          isChatPath.value ? (openBlock(), createBlock(VBtn, {
            key: 2,
            class: "hidden-lg-and-up ms-1",
            icon: "",
            rounded: "sm",
            variant: "flat",
            onClick: _cache[1] || (_cache[1] = withModifiers(($event) => unref(customizer).TOGGLE_CHAT_SIDEBAR(), ["stop"]))
          }, {
            default: withCtx(() => [
              createVNode(VIcon, null, {
                default: withCtx(() => [
                  createTextVNode("mdi-menu")
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(["logo-container", { "mobile-logo": _ctx.$vuetify.display.xs, "chat-mode-logo": isChatPath.value }]),
            onClick: handleLogoClick
          }, [
            createBaseVNode("span", _hoisted_1$2, [
              createTextVNode("YUNGE"),
              createBaseVNode("span", _hoisted_2$1, [
                isChristmas.value ? (openBlock(), createElementBlock("img", _hoisted_3$1)) : createCommentVNode("", true)
              ])
            ]),
            isChatPath.value ? (openBlock(), createElementBlock("span", _hoisted_4$1, "ChatUI")) : createCommentVNode("", true),
            createBaseVNode("span", _hoisted_5$1, toDisplayString(unref(botCurrVersion)), 1)
          ], 2),
          createVNode(VSpacer),
          false ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
            unref(hasNewVersion) ? (openBlock(), createElementBlock("small", _hoisted_7$1, toDisplayString(unref(t)("core.header.version.hasNewVersion")), 1)) : unref(dashboardHasNewVersion) && !isDesktopReleaseMode.value ? (openBlock(), createElementBlock("small", _hoisted_8$1, toDisplayString(unref(t)("core.header.version.dashboardHasNewVersion")), 1)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          createVNode(VBtnToggle, {
            modelValue: currentMode.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => currentMode.value = $event),
            mandatory: "",
            variant: "outlined",
            density: "compact",
            class: "mr-4 hidden-xs",
            color: "primary"
          }, {
            default: withCtx(() => [
              createVNode(VBtn, {
                value: "chat",
                size: "small"
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, { start: "" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-chat")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" Chat ")
                ]),
                _: 1
              }),
              createVNode(VBtn, {
                value: "bot",
                size: "small"
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, { start: "" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-robot")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" Bot ")
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createBaseVNode("div", _hoisted_9$1, [
            createBaseVNode("div", {
              class: "theme-dot",
              style: normalizeStyle([{ backgroundColor: themeDotColor.value }, { "cursor": "pointer" }]),
              onClick: _cache[3] || (_cache[3] = ($event) => toggleDarkMode())
            }, null, 4),
            createBaseVNode("span", {
              class: "text-caption text-medium-emphasis theme-label",
              onClick: _cache[4] || (_cache[4] = ($event) => toggleDarkMode()),
              style: { "cursor": "pointer" }
            }, toDisplayString(themeLabel.value), 1)
          ]),
          createVNode(_sfc_main$7, {
            modelValue: mainMenuOpen.value,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => mainMenuOpen.value = $event),
            offset: "12",
            location: "bottom end"
          }, {
            activator: withCtx(({ props: activatorProps }) => [
              createVNode(VBtn, mergeProps(activatorProps, {
                size: "small",
                class: "action-btn mr-4",
                color: "var(--v-theme-surface)",
                variant: "flat",
                rounded: "sm",
                icon: ""
              }), {
                default: withCtx(() => [
                  createVNode(VIcon, null, {
                    default: withCtx(() => [
                      createTextVNode("mdi-dots-vertical")
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1040)
            ]),
            default: withCtx(() => [
              _ctx.$vuetify.display.xs ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createBaseVNode("div", _hoisted_10$1, [
                  createVNode(VBtnToggle, {
                    modelValue: currentMode.value,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => currentMode.value = $event),
                    mandatory: "",
                    variant: "outlined",
                    density: "compact",
                    class: "mobile-mode-toggle",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        value: "chat",
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-chat")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Chat ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        value: "bot",
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-robot")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Bot ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                createVNode(VDivider, { class: "my-1" })
              ], 64)) : createCommentVNode("", true),
              createVNode(VMenu, {
                "open-on-click": "",
                "open-on-hover": !_ctx.$vuetify.display.xs,
                "open-delay": !_ctx.$vuetify.display.xs ? 60 : 0,
                "close-delay": !_ctx.$vuetify.display.xs ? 120 : 0,
                location: _ctx.$vuetify.display.xs ? "bottom" : "start center",
                offset: "8"
              }, {
                activator: withCtx(({ props: languageMenuProps }) => [
                  createVNode(VListItem, mergeProps(languageMenuProps, {
                    onClick: _cache[6] || (_cache[6] = withModifiers(() => {
                    }, ["stop"])),
                    class: "styled-menu-item language-group-trigger",
                    rounded: "md"
                  }), {
                    prepend: withCtx(() => [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-translate")
                        ]),
                        _: 1
                      })
                    ]),
                    append: withCtx(() => {
                      var _a2;
                      return [
                        createBaseVNode("span", _hoisted_11$1, toDisplayString((_a2 = unref(currentLanguage)) == null ? void 0 : _a2.flag), 1),
                        createVNode(VIcon, {
                          size: "18",
                          class: "language-group-arrow"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-chevron-right")
                          ]),
                          _: 1
                        })
                      ];
                    }),
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("core.common.language")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1040)
                ]),
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "styled-menu-card",
                    style: { "min-width": "180px" },
                    elevation: "8",
                    rounded: "lg"
                  }, {
                    default: withCtx(() => [
                      createVNode(VList, {
                        density: "compact",
                        class: "styled-menu-list pa-1"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(languages.value, (lang) => {
                            return openBlock(), createBlock(VListItem, {
                              key: lang.code,
                              value: lang.code,
                              onClick: ($event) => changeLanguage(lang.code),
                              class: normalizeClass([{ "styled-menu-item-active": currentLocale.value === lang.code }, "styled-menu-item"]),
                              rounded: "md"
                            }, {
                              prepend: withCtx(() => [
                                createBaseVNode("span", _hoisted_12$1, toDisplayString(lang.flag), 1)
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(lang.name), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["value", "onClick", "class"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["open-on-hover", "open-delay", "close-delay", "location"]),
              createVNode(VListItem, {
                onClick: _cache[7] || (_cache[7] = ($event) => toggleDarkMode()),
                class: "styled-menu-item",
                rounded: "md"
              }, {
                prepend: withCtx(() => [
                  createVNode(VIcon, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(useCustomizerStore)().uiTheme.includes("Dark") ? "mdi-weather-night" : "mdi-white-balance-sunny"), 1)
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createVNode(VListItemTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(useCustomizerStore)().uiTheme.includes("Dark") ? unref(t)("core.header.buttons.theme.light") : unref(t)("core.header.buttons.theme.dark")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              false ? (openBlock(), createBlock(VListItem, {
                key: 1,
                onClick: handleUpdateClick,
                class: "styled-menu-item",
                rounded: "md"
              }, createSlots({
                prepend: withCtx(() => [
                  createVNode(VIcon, null, {
                    default: withCtx(() => [
                      createTextVNode("mdi-arrow-up-circle")
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createVNode(VListItemTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("core.header.updateDialog.title")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                unref(hasNewVersion) || unref(dashboardHasNewVersion) && !isDesktopReleaseMode.value ? {
                  name: "append",
                  fn: withCtx(() => [
                    createVNode(VChip, {
                      size: "x-small",
                      color: "primary",
                      variant: "tonal",
                      class: "ml-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("!")
                      ]),
                      _: 1
                    })
                  ]),
                  key: "0"
                } : void 0
              ]), 1024)) : createCommentVNode("", true),
              createVNode(VListItem, {
                onClick: _cache[8] || (_cache[8] = ($event) => isRef(dialog) ? dialog.value = true : dialog = true),
                class: "styled-menu-item",
                rounded: "md"
              }, {
                prepend: withCtx(() => [
                  createVNode(VIcon, null, {
                    default: withCtx(() => [
                      createTextVNode("mdi-account")
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createVNode(VListItemTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("core.header.accountDialog.title")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          false ? (openBlock(), createBlock(VDialog, {
            key: 4,
            modelValue: unref(updateStatusDialog),
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => isRef(updateStatusDialog) ? updateStatusDialog.value = $event : updateStatusDialog = $event),
            width: _ctx.$vuetify.display.smAndDown ? "100%" : "1200",
            fullscreen: _ctx.$vuetify.display.xs
          }, {
            default: withCtx(() => [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "mobile-card-title" }, {
                    default: withCtx(() => [
                      createBaseVNode("span", _hoisted_13$1, toDisplayString(unref(t)("core.header.updateDialog.title")), 1),
                      _ctx.$vuetify.display.xs ? (openBlock(), createBlock(VBtn, {
                        key: 0,
                        icon: "",
                        onClick: _cache[10] || (_cache[10] = ($event) => isRef(updateStatusDialog) ? updateStatusDialog.value = false : updateStatusDialog = false)
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
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          withDirectives(createVNode(VProgressLinear, {
                            class: "mb-4",
                            indeterminate: "",
                            color: "primary"
                          }, null, 512), [
                            [vShow, unref(installLoading)]
                          ]),
                          createBaseVNode("div", null, [
                            createBaseVNode("h1", _hoisted_14$1, toDisplayString(unref(botCurrVersion)), 1),
                            createBaseVNode("small", _hoisted_15$1, toDisplayString(unref(updateStatus)), 1)
                          ]),
                          unref(releaseMessage) ? (openBlock(), createElementBlock("div", _hoisted_16, [
                            createVNode(unref(Lt), {
                              content: unref(releaseMessage),
                              typewriter: false,
                              class: "markdown-content"
                            }, null, 8, ["content"])
                          ])) : createCommentVNode("", true),
                          createBaseVNode("div", _hoisted_17, [
                            createBaseVNode("small", null, toDisplayString(unref(t)("core.header.updateDialog.tip")) + " " + toDisplayString(unref(t)("core.header.updateDialog.tipContinue")), 1)
                          ]),
                          createBaseVNode("div", null, [
                            createBaseVNode("div", _hoisted_18, [
                              createBaseVNode("small", null, [
                                createTextVNode(toDisplayString(unref(t)("core.header.updateDialog.dockerTip")) + " ", 1),
                                createBaseVNode("a", _hoisted_19, toDisplayString(unref(t)("core.header.updateDialog.dockerTipLink")), 1),
                                createTextVNode(" " + toDisplayString(unref(t)("core.header.updateDialog.dockerTipContinue")), 1)
                              ])
                            ]),
                            unref(releases).some((item) => isPreRelease(item["tag_name"])) ? (openBlock(), createBlock(VAlert, {
                              key: 0,
                              type: "warning",
                              variant: "tonal",
                              border: "start"
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-alert-circle-outline")
                                  ]),
                                  _: 1
                                })
                              ]),
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_20, [
                                  createBaseVNode("strong", null, toDisplayString(unref(t)("core.header.updateDialog.preReleaseWarning.title")), 1),
                                  _hoisted_21,
                                  createTextVNode(" " + toDisplayString(unref(t)("core.header.updateDialog.preReleaseWarning.description")) + " ", 1),
                                  createBaseVNode("a", _hoisted_22, toDisplayString(unref(t)("core.header.updateDialog.preReleaseWarning.issueLink")), 1)
                                ])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(VDataTable, {
                              headers: releasesHeader.value,
                              items: unref(releases),
                              "item-key": "name",
                              "items-per-page": 8
                            }, {
                              "item.tag_name": withCtx(({ item }) => [
                                createBaseVNode("div", _hoisted_23, [
                                  createBaseVNode("span", null, toDisplayString(item.tag_name), 1),
                                  isPreRelease(item.tag_name) ? (openBlock(), createBlock(VChip, {
                                    key: 0,
                                    size: "x-small",
                                    color: "warning",
                                    variant: "tonal",
                                    class: "ml-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(t)("core.header.updateDialog.preRelease")), 1)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ])
                              ]),
                              "item.body": withCtx(({ item }) => [
                                createVNode(VBtn, {
                                  onClick: ($event) => openReleaseNotesDialog(item.body, item.tag_name),
                                  rounded: "xl",
                                  variant: "tonal",
                                  color: "primary",
                                  size: "x-small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(t)("core.header.updateDialog.table.view")), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              "item.switch": withCtx(({ item }) => [
                                createVNode(VBtn, {
                                  onClick: ($event) => switchVersion(item.tag_name),
                                  rounded: "xl",
                                  variant: "plain",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(t)("core.header.updateDialog.table.switch")), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 1
                            }, 8, ["headers", "items"])
                          ]),
                          createVNode(VDivider, { class: "mt-4 mb-4" }),
                          createBaseVNode("div", _hoisted_24, [
                            createBaseVNode("h3", _hoisted_25, toDisplayString(unref(t)("core.header.updateDialog.dashboardUpdate.title")), 1),
                            createBaseVNode("div", _hoisted_26, [
                              createBaseVNode("small", null, toDisplayString(unref(t)("core.header.updateDialog.dashboardUpdate.currentVersion")) + " " + toDisplayString(unref(dashboardCurrentVersion)), 1),
                              _hoisted_27
                            ]),
                            createBaseVNode("div", _hoisted_28, [
                              unref(dashboardHasNewVersion) ? (openBlock(), createElementBlock("p", _hoisted_29, toDisplayString(unref(t)("core.header.updateDialog.dashboardUpdate.hasNewVersion")), 1)) : (openBlock(), createElementBlock("p", _hoisted_30, toDisplayString(unref(t)("core.header.updateDialog.dashboardUpdate.isLatest")), 1))
                            ]),
                            createVNode(VBtn, {
                              color: "primary",
                              style: { "border-radius": "10px" },
                              onClick: _cache[11] || (_cache[11] = ($event) => updateDashboard()),
                              disabled: !unref(dashboardHasNewVersion),
                              loading: unref(updatingDashboardLoading)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(t)("core.header.updateDialog.dashboardUpdate.downloadAndUpdate")), 1)
                              ]),
                              _: 1
                            }, 8, ["disabled", "loading"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "blue-darken-1",
                        variant: "text",
                        onClick: _cache[12] || (_cache[12] = ($event) => isRef(updateStatusDialog) ? updateStatusDialog.value = false : updateStatusDialog = false)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("core.common.close")), 1)
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
          }, 8, ["modelValue", "width", "fullscreen"])) : createCommentVNode("", true),
          false ? (openBlock(), createBlock(VDialog, {
            key: 5,
            modelValue: unref(releaseNotesDialog),
            "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => isRef(releaseNotesDialog) ? releaseNotesDialog.value = $event : releaseNotesDialog = $event),
            "max-width": "800"
          }, {
            default: withCtx(() => [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-h5" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("core.header.updateDialog.releaseNotes.title")) + ": " + toDisplayString(unref(selectedReleaseTag)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { style: { "font-size": "14px", "max-height": "400px", "overflow-y": "auto" } }, {
                    default: withCtx(() => [
                      createVNode(unref(Lt), {
                        content: unref(selectedReleaseNotes),
                        typewriter: false,
                        class: "markdown-content"
                      }, null, 8, ["content"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "blue-darken-1",
                        variant: "text",
                        onClick: _cache[14] || (_cache[14] = ($event) => isRef(releaseNotesDialog) ? releaseNotesDialog.value = false : releaseNotesDialog = false)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("core.common.close")), 1)
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
          }, 8, ["modelValue"])) : createCommentVNode("", true),
          false ? (openBlock(), createBlock(VDialog, {
            key: 6,
            modelValue: desktopUpdateDialog.value,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => desktopUpdateDialog.value = $event),
            "max-width": "460"
          }, {
            default: withCtx(() => [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "text-h3 pa-4 pl-6 pb-0" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("core.header.updateDialog.desktopApp.title")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_31, toDisplayString(unref(t)("core.header.updateDialog.desktopApp.message")), 1),
                      createVNode(VAlert, {
                        type: "info",
                        variant: "tonal",
                        density: "compact"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", null, [
                            createTextVNode(toDisplayString(unref(t)("core.header.updateDialog.desktopApp.currentVersion")) + " ", 1),
                            createBaseVNode("strong", null, toDisplayString(desktopUpdateCurrentVersion.value), 1)
                          ]),
                          createBaseVNode("div", null, [
                            createTextVNode(toDisplayString(unref(t)("core.header.updateDialog.desktopApp.latestVersion")) + " ", 1),
                            !desktopUpdateChecking.value ? (openBlock(), createElementBlock("strong", _hoisted_32, toDisplayString(desktopUpdateLatestVersion.value), 1)) : (openBlock(), createBlock(VProgressCircular, {
                              key: 1,
                              indeterminate: "",
                              size: "16",
                              width: "2",
                              class: "ml-1"
                            }))
                          ])
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_33, toDisplayString(desktopUpdateStatus.value), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "grey",
                        variant: "text",
                        onClick: cancelDesktopUpdate,
                        disabled: desktopUpdateInstalling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("core.common.dialog.cancelButton")), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "flat",
                        onClick: confirmDesktopUpdate,
                        loading: desktopUpdateInstalling.value,
                        disabled: desktopUpdateChecking.value || desktopUpdateInstalling.value || !desktopUpdateHasNewVersion.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("core.common.dialog.confirmButton")), 1)
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
          }, 8, ["modelValue"])) : createCommentVNode("", true),
          createVNode(VDialog, {
            modelValue: unref(dialog),
            "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => isRef(dialog) ? dialog.value = $event : dialog = $event),
            persistent: "",
            "max-width": _ctx.$vuetify.display.xs ? "90%" : "500"
          }, {
            default: withCtx(() => [
              createVNode(VCard, { class: "account-dialog" }, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "py-6" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_34, [
                        createVNode(Logo, {
                          title: unref(t)("core.header.logoTitle"),
                          subtitle: unref(t)("core.header.accountDialog.title")
                        }, null, 8, ["title", "subtitle"])
                      ]),
                      unref(accountWarning) ? (openBlock(), createBlock(VAlert, {
                        key: 0,
                        type: "warning",
                        variant: "tonal",
                        border: "start",
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("strong", null, toDisplayString(unref(t)("core.header.accountDialog.securityWarning")), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      accountEditStatus.value.success ? (openBlock(), createBlock(VAlert, {
                        key: 1,
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
                        key: 2,
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
                        modelValue: formValid.value,
                        "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => formValid.value = $event),
                        onSubmit: withModifiers(accountEdit, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(password),
                            "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => isRef(password) ? password.value = $event : password = $event),
                            "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                            type: showPassword.value ? "text" : "password",
                            label: unref(t)("core.header.accountDialog.form.currentPassword"),
                            variant: "outlined",
                            required: "",
                            clearable: "",
                            "onClick:appendInner": _cache[18] || (_cache[18] = ($event) => showPassword.value = !showPassword.value),
                            "prepend-inner-icon": "mdi-lock-outline",
                            "hide-details": "auto",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "append-inner-icon", "type", "label"]),
                          createVNode(VTextField, {
                            modelValue: unref(newPassword),
                            "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => isRef(newPassword) ? newPassword.value = $event : newPassword = $event),
                            "append-inner-icon": showNewPassword.value ? "mdi-eye-off" : "mdi-eye",
                            type: showNewPassword.value ? "text" : "password",
                            rules: passwordRules.value,
                            label: unref(t)("core.header.accountDialog.form.newPassword"),
                            variant: "outlined",
                            clearable: "",
                            "onClick:appendInner": _cache[20] || (_cache[20] = ($event) => showNewPassword.value = !showNewPassword.value),
                            "prepend-inner-icon": "mdi-lock-plus-outline",
                            hint: unref(t)("core.header.accountDialog.form.passwordHint"),
                            "persistent-hint": "",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "append-inner-icon", "type", "rules", "label", "hint"]),
                          createVNode(VTextField, {
                            modelValue: unref(confirmPassword),
                            "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : confirmPassword = $event),
                            "append-inner-icon": showConfirmPassword.value ? "mdi-eye-off" : "mdi-eye",
                            type: showConfirmPassword.value ? "text" : "password",
                            rules: confirmPasswordRules.value,
                            label: unref(t)("core.header.accountDialog.form.confirmPassword"),
                            variant: "outlined",
                            clearable: "",
                            "onClick:appendInner": _cache[22] || (_cache[22] = ($event) => showConfirmPassword.value = !showConfirmPassword.value),
                            "prepend-inner-icon": "mdi-lock-check-outline",
                            hint: unref(t)("core.header.accountDialog.form.confirmPasswordHint"),
                            "persistent-hint": "",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "append-inner-icon", "type", "rules", "label", "hint"]),
                          createVNode(VTextField, {
                            modelValue: unref(newUsername),
                            "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => isRef(newUsername) ? newUsername.value = $event : newUsername = $event),
                            rules: usernameRules.value,
                            label: unref(t)("core.header.accountDialog.form.newUsername"),
                            variant: "outlined",
                            clearable: "",
                            "prepend-inner-icon": "mdi-account-edit-outline",
                            hint: unref(t)("core.header.accountDialog.form.usernameHint"),
                            "persistent-hint": "",
                            class: "mb-3"
                          }, null, 8, ["modelValue", "rules", "label", "hint"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onSubmit"]),
                      createBaseVNode("div", _hoisted_35, toDisplayString(unref(t)("core.header.accountDialog.form.defaultCredentials")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardActions, { class: "pa-4" }, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      !unref(accountWarning) ? (openBlock(), createBlock(VBtn, {
                        key: 0,
                        variant: "tonal",
                        color: "secondary",
                        onClick: _cache[25] || (_cache[25] = ($event) => isRef(dialog) ? dialog.value = false : dialog = false),
                        disabled: accountEditStatus.value.loading
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("core.header.accountDialog.actions.cancel")), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])) : createCommentVNode("", true),
                      unref(accountWarning) ? (openBlock(), createBlock(VBtn, {
                        key: 1,
                        variant: "tonal",
                        color: "secondary",
                        onClick: _cache[26] || (_cache[26] = ($event) => {
                          isRef(dialog) ? dialog.value = false : dialog = false;
                          isRef(accountWarning) ? accountWarning.value = false : accountWarning = false;
                        }),
                        disabled: accountEditStatus.value.loading
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 暂时不修改 ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])) : createCommentVNode("", true),
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: accountEdit,
                        loading: accountEditStatus.value.loading,
                        disabled: !formValid.value,
                        "prepend-icon": "mdi-content-save"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("core.header.accountDialog.actions.save")), 1)
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
          }, 8, ["modelValue", "max-width"]),
          createVNode(VDialog, {
            modelValue: unref(aboutDialog),
            "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => isRef(aboutDialog) ? aboutDialog.value = $event : aboutDialog = $event),
            width: "600"
          }, {
            default: withCtx(() => [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardText, { style: { "overflow-y": "auto" } }, {
                    default: withCtx(() => [
                      createVNode(AboutPage)
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
      });
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-96c2a084"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "mb-4" };
const _hoisted_2 = {
  key: 0,
  class: "text-center py-8"
};
const _hoisted_3 = { class: "mb-4" };
const _hoisted_4 = { class: "mb-4" };
const _hoisted_5 = {
  key: 1,
  class: "migration-in-progress"
};
const _hoisted_6 = { class: "text-center py-4" };
const _hoisted_7 = { class: "mb-4" };
const _hoisted_8 = { class: "mb-4" };
const _hoisted_9 = { class: "console-container" };
const _hoisted_10 = {
  key: 2,
  class: "text-center py-8"
};
const _hoisted_11 = {
  key: 3,
  class: "text-center py-4"
};
const _hoisted_12 = { key: 4 };
const _hoisted_13 = {
  key: 0,
  class: "text-center py-4"
};
const _hoisted_14 = { key: 1 };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("small", null, "请选择该平台类型下您主要使用的平台适配器。", -1));
const _sfc_main$1 = {
  __name: "MigrationDialog",
  setup(__props, { expose: __expose }) {
    const { t } = useI18n();
    const isOpen = ref(false);
    const loading = ref(false);
    const error = ref("");
    const migrating = ref(false);
    const migrationCompleted = ref(false);
    const migrationResult = ref(null);
    const platforms = ref([]);
    const selectedPlatforms = ref({});
    const wfr = ref(null);
    let resolvePromise = null;
    const platformGroups = computed(() => {
      const groups = {};
      platforms.value.forEach((platform) => {
        const type = platform.platform_type || platform.type;
        if (!groups[type]) {
          groups[type] = {
            type,
            platforms: []
          };
        }
        groups[type].platforms.push(platform);
      });
      return Object.values(groups);
    });
    const canMigrate = computed(() => {
      return platformGroups.value.every((group) => selectedPlatforms.value[group.type]);
    });
    watch(isOpen, (newVal) => {
      if (newVal) {
        loadPlatforms();
      } else {
        platforms.value = [];
        selectedPlatforms.value = {};
        error.value = "";
        migrating.value = false;
        migrationCompleted.value = false;
        migrationResult.value = null;
      }
    });
    const loadPlatforms = async () => {
      loading.value = true;
      error.value = "";
      try {
        const response = await axios.get("/api/config/platform/list");
        if (response.data.status === "ok") {
          platforms.value = response.data.data.platforms || [];
          platformGroups.value.forEach((group) => {
            if (group.platforms.length > 0) {
              selectedPlatforms.value[group.type] = group.platforms[0].id;
            }
          });
        } else {
          error.value = response.data.message || t("features.migration.dialog.loadError");
        }
      } catch (err) {
        console.error("Failed to load platforms:", err);
        error.value = t("features.migration.dialog.loadError");
      } finally {
        loading.value = false;
      }
    };
    const handleMigration = async () => {
      migrating.value = true;
      try {
        const platformIdMap = {};
        Object.entries(selectedPlatforms.value).forEach(([type, platformId]) => {
          const selectedPlatform = platforms.value.find((p) => p.id === platformId);
          if (selectedPlatform) {
            platformIdMap[type] = {
              platform_id: platformId,
              platform_type: type
            };
          }
        });
        console.log("Migration platform_id_map:", platformIdMap);
        const response = await axios.post("/api/update/migration", {
          platform_id_map: platformIdMap
        });
        if (response.data.status === "ok") {
          migrationCompleted.value = true;
          migrationResult.value = {
            success: true,
            message: response.data.message || t("features.migration.dialog.success")
          };
        } else {
          throw new Error(response.data.message || t("features.migration.dialog.migrationError"));
        }
      } catch (err) {
        console.error("Migration failed:", err);
        error.value = err.message || t("features.migration.dialog.migrationError");
      } finally {
        migrating.value = false;
      }
    };
    const handleCancel = () => {
      isOpen.value = false;
      if (resolvePromise) {
        resolvePromise({ success: false, cancelled: true });
      }
    };
    const handleClose = () => {
      isOpen.value = false;
      if (resolvePromise) {
        resolvePromise(migrationResult.value);
      }
    };
    const getPlatformLabel = (platform) => {
      const name = platform.name || platform.id || "Unknown";
      return `${name}`;
    };
    const restartAstrBot$1 = async () => {
      try {
        await restartAstrBot(wfr.value);
      } catch (error2) {
        console.error(error2);
      }
    };
    const open = () => {
      isOpen.value = true;
      return new Promise((resolve) => {
        resolvePromise = resolve;
      });
    };
    __expose({ open });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(VDialog, {
          modelValue: isOpen.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isOpen.value = $event),
          persistent: "",
          "max-width": "600",
          "max-height": "80vh",
          scrollable: ""
        }, {
          default: withCtx(() => [
            createVNode(VCard, null, {
              default: withCtx(() => [
                createVNode(VCardTitle, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("features.migration.dialog.title")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, { class: "pa-6" }, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      createBaseVNode("p", _hoisted_1$1, toDisplayString(unref(t)("features.migration.dialog.warning")), 1),
                      migrationCompleted.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
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
                        createBaseVNode("h3", _hoisted_3, toDisplayString(unref(t)("features.migration.dialog.completed")), 1),
                        createBaseVNode("p", _hoisted_4, toDisplayString(((_a = migrationResult.value) == null ? void 0 : _a.message) || unref(t)("features.migration.dialog.success")), 1),
                        createVNode(VAlert, {
                          type: "info",
                          variant: "tonal",
                          class: "mb-4"
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
                            createTextVNode(" " + toDisplayString(unref(t)("features.migration.dialog.restartRecommended")), 1)
                          ]),
                          _: 1
                        })
                      ])) : migrating.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                        createBaseVNode("div", _hoisted_6, [
                          createVNode(VProgressCircular, {
                            indeterminate: "",
                            color: "primary",
                            class: "mb-4"
                          }),
                          createBaseVNode("h3", _hoisted_7, toDisplayString(unref(t)("features.migration.dialog.migrating")), 1),
                          createBaseVNode("p", _hoisted_8, toDisplayString(unref(t)("features.migration.dialog.migratingSubtitle")), 1)
                        ]),
                        createBaseVNode("div", _hoisted_9, [
                          createVNode(ConsoleDisplayer, {
                            ref: "consoleDisplayer",
                            showLevelBtns: false,
                            style: { "height": "300px" }
                          }, null, 512)
                        ])
                      ])) : loading.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
                        createVNode(VProgressCircular, {
                          indeterminate: "",
                          color: "primary",
                          class: "mb-4"
                        }),
                        createBaseVNode("p", null, toDisplayString(unref(t)("features.migration.dialog.loading")), 1)
                      ])) : error.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
                        createVNode(VAlert, {
                          type: "error",
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
                            createTextVNode(" " + toDisplayString(error.value), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "primary",
                          onClick: loadPlatforms
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)("features.migration.dialog.retry")), 1)
                          ]),
                          _: 1
                        })
                      ])) : (openBlock(), createElementBlock("div", _hoisted_12, [
                        platformGroups.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_13, [
                          createVNode(VAlert, {
                            type: "info",
                            variant: "tonal"
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
                              createTextVNode(" " + toDisplayString(unref(t)("features.migration.dialog.noPlatforms")), 1)
                            ]),
                            _: 1
                          })
                        ])) : (openBlock(), createElementBlock("div", _hoisted_14, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(platformGroups.value, (group) => {
                            return openBlock(), createElementBlock("div", {
                              key: group.type,
                              class: "mb-6"
                            }, [
                              group.platforms.length > 1 ? (openBlock(), createBlock(VCard, {
                                key: 0,
                                variant: "outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardSubtitle, { class: "py-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(group.type), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VDivider),
                                  createVNode(VCardText, { style: { "padding": "16px" } }, {
                                    default: withCtx(() => [
                                      _hoisted_15,
                                      (openBlock(), createBlock(VRadioGroup, {
                                        modelValue: selectedPlatforms.value[group.type],
                                        "onUpdate:modelValue": ($event) => selectedPlatforms.value[group.type] = $event,
                                        key: group.type,
                                        "hide-details": ""
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createElementBlock(Fragment, null, renderList(group.platforms, (platform) => {
                                            return openBlock(), createBlock(VRadio, {
                                              key: platform.id,
                                              value: platform.id,
                                              label: getPlatformLabel(platform),
                                              color: "primary",
                                              class: "mb-1"
                                            }, null, 8, ["value", "label"]);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1032, ["modelValue", "onUpdate:modelValue"]))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ]);
                          }), 128))
                        ]))
                      ]))
                    ];
                  }),
                  _: 1
                }),
                createVNode(VCardActions, { class: "px-6 py-4" }, {
                  default: withCtx(() => [
                    createVNode(VSpacer),
                    migrationCompleted.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createVNode(VBtn, {
                        color: "grey",
                        variant: "text",
                        onClick: handleClose
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("core.common.close")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "elevated",
                        onClick: restartAstrBot$1
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("features.migration.dialog.restartNow")), 1)
                        ]),
                        _: 1
                      })
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createVNode(VBtn, {
                        color: "grey",
                        variant: "text",
                        onClick: handleCancel,
                        disabled: migrating.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("core.common.cancel")), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "elevated",
                        onClick: handleMigration,
                        disabled: !canMigrate.value || migrating.value,
                        loading: migrating.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("features.migration.dialog.startMigration")), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "loading"])
                    ], 64))
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
const MigrationDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-96c2a084"]]);
const _hoisted_1 = {
  key: 0,
  style: { "height": "100%", "width": "100%", "overflow": "hidden" }
};
const FIRST_NOTICE_SEEN_KEY = "astrbot:first_notice_seen:v1";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FullLayout",
  setup(__props) {
    const customizer = useCustomizerStore();
    const { locale } = useI18n();
    const route = useRoute();
    const routerLoadingStore = useRouterLoadingStore();
    const isCurrentChatRoute = computed(() => route.path === "/chat" || route.path.startsWith("/chat/"));
    const shouldMountChat = ref(isCurrentChatRoute.value);
    const showSidebar = computed(() => !isCurrentChatRoute.value);
    const migrationDialog = ref(null);
    const showFirstNoticeDialog = ref(false);
    watch(isCurrentChatRoute, (isChatRoute) => {
      if (isChatRoute) {
        shouldMountChat.value = true;
      }
    });
    const checkMigration = async () => {
      try {
        const response = await axios.get("/api/stat/version");
        if (response.data.status === "ok" && response.data.data.need_migration) {
          if (migrationDialog.value && typeof migrationDialog.value.open === "function") {
            const result = await migrationDialog.value.open();
            if (result.success) {
              console.log("Migration completed successfully:", result.message);
              window.location.reload();
            }
          }
          return true;
        }
      } catch (error) {
        console.error("Failed to check migration status:", error);
      }
      return false;
    };
    const maybeShowFirstNotice = async () => {
      var _a, _b;
      if (localStorage.getItem(FIRST_NOTICE_SEEN_KEY) === "1") {
        return;
      }
      try {
        const response = await axios.get("/api/stat/first-notice", {
          params: { locale: locale.value }
        });
        if (response.data.status !== "ok") {
          return;
        }
        const content = (_b = (_a = response.data) == null ? void 0 : _a.data) == null ? void 0 : _b.content;
        if (typeof content === "string" && content.trim().length > 0) {
          showFirstNoticeDialog.value = true;
          return;
        }
        localStorage.setItem(FIRST_NOTICE_SEEN_KEY, "1");
      } catch (error) {
        console.error("Failed to load first notice:", error);
      }
    };
    const onFirstNoticeDialogUpdate = (visible) => {
      showFirstNoticeDialog.value = visible;
      if (!visible) {
        localStorage.setItem(FIRST_NOTICE_SEEN_KEY, "1");
      }
    };
    onMounted(() => {
      setTimeout(async () => {
        const migrationPending = await checkMigration();
        if (!migrationPending) {
          await maybeShowFirstNotice();
        }
      }, 1e3);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VLocaleProvider, null, {
        default: withCtx(() => [
          createVNode(VApp, {
            theme: unref(useCustomizerStore)().uiTheme,
            class: normalizeClass([unref(customizer).fontTheme, unref(customizer).mini_sidebar ? "mini-sidebar" : "", unref(customizer).inputBg ? "inputWithbg" : ""])
          }, {
            default: withCtx(() => [
              unref(routerLoadingStore).isLoading ? (openBlock(), createBlock(VProgressLinear, {
                key: 0,
                "model-value": unref(routerLoadingStore).progress,
                color: "primary",
                height: "2",
                fixed: "",
                top: "",
                style: { "z-index": "9999", "position": "absolute", "opacity": "0.3" }
              }, null, 8, ["model-value"])) : createCommentVNode("", true),
              createVNode(_sfc_main$2),
              showSidebar.value ? (openBlock(), createBlock(VerticalSidebarVue, { key: 1 })) : createCommentVNode("", true),
              createVNode(VMain, {
                style: normalizeStyle({
                  height: isCurrentChatRoute.value ? "calc(100vh - 55px)" : void 0,
                  overflow: isCurrentChatRoute.value ? "hidden" : void 0
                })
              }, {
                default: withCtx(() => [
                  createVNode(VContainer, {
                    fluid: "",
                    class: normalizeClass(["page-wrapper", { "chat-mode-container": isCurrentChatRoute.value }]),
                    style: normalizeStyle({
                      height: isCurrentChatRoute.value ? "100%" : "calc(100% - 8px)",
                      padding: isCurrentChatRoute.value ? "0" : void 0,
                      minHeight: isCurrentChatRoute.value ? "unset" : void 0
                    })
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", {
                        style: normalizeStyle({ height: "100%", width: "100%", overflow: isCurrentChatRoute.value ? "hidden" : void 0 })
                      }, [
                        shouldMountChat.value ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
                          createVNode(Chat, { active: isCurrentChatRoute.value }, null, 8, ["active"])
                        ], 512)), [
                          [vShow, isCurrentChatRoute.value]
                        ]) : createCommentVNode("", true),
                        !isCurrentChatRoute.value ? (openBlock(), createBlock(unref(RouterView), { key: 1 })) : createCommentVNode("", true)
                      ], 4)
                    ]),
                    _: 1
                  }, 8, ["class", "style"])
                ]),
                _: 1
              }, 8, ["style"]),
              createVNode(MigrationDialog, {
                ref_key: "migrationDialog",
                ref: migrationDialog
              }, null, 512),
              createVNode(ReadmeDialog, {
                show: showFirstNoticeDialog.value,
                mode: "first-notice",
                "onUpdate:show": onFirstNoticeDialogUpdate
              }, null, 8, ["show"])
            ]),
            _: 1
          }, 8, ["theme", "class"])
        ]),
        _: 1
      });
    };
  }
});
const FullLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-671c08d6"]]);
export {
  FullLayout as default
};
