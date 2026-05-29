import { _ as _export_sfc, u as useModuleI18n, h as createBlock, w as withCtx, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as createVNode, e as VBtn, F as Fragment, r as renderList, i as createCommentVNode, d as createTextVNode, l as VIcon, X as Transition, o as openBlock, U as normalizeStyle } from "./index-IOsZtj6J.js";
const _sfc_main$1 = {
  name: "RefsSidebar",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    refs: {
      type: Object,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup() {
    const { tm } = useModuleI18n("features/chat");
    return { tm };
  },
  computed: {
    isOpen: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    },
    normalizedRefs() {
      var _a;
      const used = Array.isArray((_a = this.refs) == null ? void 0 : _a.used) ? this.refs.used : Array.isArray(this.refs) ? this.refs : [];
      return used.map((ref) => ({
        index: ref == null ? void 0 : ref.index,
        title: (ref == null ? void 0 : ref.title) || (ref == null ? void 0 : ref.url) || "Reference",
        url: ref == null ? void 0 : ref.url,
        snippet: ref == null ? void 0 : ref.snippet,
        favicon: ref == null ? void 0 : ref.favicon
      })).filter((ref) => ref.url);
    }
  },
  methods: {
    close() {
      this.isOpen = false;
    },
    getRefInitial(title) {
      if (!title) return "?";
      return title.charAt(0).toUpperCase();
    },
    formatUrl(url) {
      if (!url) return "";
      try {
        const urlObj = new URL(url);
        return urlObj.hostname;
      } catch {
        return url;
      }
    },
    openLink(url) {
      if (url) {
        window.open(url, "_blank");
      }
    }
  }
};
const _hoisted_1$1 = {
  key: 0,
  class: "refs-sidebar"
};
const _hoisted_2$1 = { class: "sidebar-header" };
const _hoisted_3$1 = { class: "sidebar-title" };
const _hoisted_4$1 = { class: "refs-list" };
const _hoisted_5$1 = ["onClick"];
const _hoisted_6 = { class: "ref-item-icon" };
const _hoisted_7 = ["src"];
const _hoisted_8 = {
  key: 1,
  class: "ref-item-initial"
};
const _hoisted_9 = { class: "ref-item-content" };
const _hoisted_10 = { class: "ref-item-title" };
const _hoisted_11 = { class: "ref-item-url" };
const _hoisted_12 = {
  key: 0,
  class: "ref-item-snippet"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { name: "slide-left" }, {
    default: withCtx(() => [
      $options.isOpen ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("h3", _hoisted_3$1, toDisplayString($setup.tm("refs.title")), 1),
          createVNode(VBtn, {
            icon: "mdi-close",
            size: "small",
            variant: "text",
            onClick: $options.close
          }, null, 8, ["onClick"])
        ]),
        createBaseVNode("div", _hoisted_4$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.normalizedRefs, (ref, index) => {
            return openBlock(), createElementBlock("div", {
              key: ref.index || index,
              class: "ref-item",
              onClick: ($event) => $options.openLink(ref.url)
            }, [
              createBaseVNode("div", _hoisted_6, [
                ref.favicon ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: ref.favicon,
                  class: "ref-item-favicon",
                  onError: _cache[0] || (_cache[0] = (e) => e.target.style.display = "none")
                }, null, 40, _hoisted_7)) : (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString($options.getRefInitial(ref.title)), 1))
              ]),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, toDisplayString(ref.title), 1),
                createBaseVNode("div", _hoisted_11, toDisplayString($options.formatUrl(ref.url)), 1),
                ref.snippet ? (openBlock(), createElementBlock("div", _hoisted_12, toDisplayString(ref.snippet), 1)) : createCommentVNode("", true)
              ]),
              createVNode(VIcon, {
                size: "small",
                class: "ref-item-arrow"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-open-in-new")
                ]),
                _: 1
              })
            ], 8, _hoisted_5$1);
          }), 128))
        ])
      ])) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
const RefsSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-4d29785e"]]);
const _sfc_main = {
  name: "ActionRef",
  props: {
    refs: {
      type: Object,
      default: null
    }
  },
  emits: ["open-refs"],
  setup() {
    const { tm } = useModuleI18n("features/chat");
    return { tm };
  },
  methods: {
    // Get first character of ref title for fallback display
    getRefInitial(title) {
      if (!title) return "?";
      return title.charAt(0).toUpperCase();
    },
    // Handle click to open refs sidebar
    handleClick() {
      this.$emit("open-refs", this.refs);
    }
  }
};
const _hoisted_1 = { class: "refs-avatars" };
const _hoisted_2 = ["src"];
const _hoisted_3 = {
  key: 1,
  class: "ref-initial"
};
const _hoisted_4 = {
  key: 0,
  class: "refs-more"
};
const _hoisted_5 = { class: "refs-label" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.refs && $props.refs.used && $props.refs.used.length > 0 ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "refs-container",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.handleClick && $options.handleClick(...args))
  }, [
    createBaseVNode("div", _hoisted_1, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.refs.used.slice(0, 3), (ref, refIdx) => {
        return openBlock(), createElementBlock("div", {
          key: refIdx,
          class: "ref-avatar",
          style: normalizeStyle({ zIndex: 3 - refIdx })
        }, [
          ref.favicon ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: ref.favicon,
            class: "ref-favicon",
            onError: _cache[0] || (_cache[0] = (e) => e.target.style.display = "none")
          }, null, 40, _hoisted_2)) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString($options.getRefInitial(ref.title)), 1))
        ], 4);
      }), 128)),
      $props.refs.used.length > 3 ? (openBlock(), createElementBlock("span", _hoisted_4, " +" + toDisplayString($props.refs.used.length - 3), 1)) : createCommentVNode("", true),
      createBaseVNode("span", _hoisted_5, toDisplayString($setup.tm("refs.sources")), 1)
    ])
  ])) : createCommentVNode("", true);
}
const ActionRef = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d38292c4"]]);
export {
  ActionRef as A,
  RefsSidebar as R
};
