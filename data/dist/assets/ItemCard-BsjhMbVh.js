import { _ as _export_sfc, a5 as useI18n, o as openBlock, h as createBlock, w as withCtx, b as createVNode, a6 as VCardTitle, a as createBaseVNode, t as toDisplayString, a7 as VTooltip, a8 as VSwitch, a2 as mergeProps, v as VCardText, Z as renderSlot, a9 as VCardActions, e as VBtn, d as createTextVNode, i as createCommentVNode, V as VSpacer, c as createElementBlock, aa as VImg, s as VCard } from "./index-BXuR6cgv.js";
const _sfc_main = {
  name: "ItemCard",
  setup() {
    const { t } = useI18n();
    return { t };
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    titleField: {
      type: String,
      default: "id"
    },
    enabledField: {
      type: String,
      default: "enable"
    },
    bglogo: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    showCopyButton: {
      type: Boolean,
      default: false
    },
    showEditButton: {
      type: Boolean,
      default: true
    },
    disableToggle: {
      type: Boolean,
      default: false
    },
    disableDelete: {
      type: Boolean,
      default: false
    }
  },
  emits: ["toggle-enabled", "delete", "edit", "copy"],
  methods: {
    getItemTitle() {
      return this.item[this.titleField];
    },
    getItemEnabled() {
      return this.item[this.enabledField];
    },
    toggleEnabled() {
      this.$emit("toggle-enabled", this.item);
    }
  }
};
const _hoisted_1 = ["title"];
const _hoisted_2 = {
  key: 0,
  class: "d-flex justify-end align-center",
  style: { "position": "absolute", "bottom": "16px", "right": "16px", "opacity": "0.2" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VCard, {
    class: "item-card hover-elevation",
    style: { "padding": "4px" },
    elevation: "0"
  }, {
    default: withCtx(() => [
      createVNode(VCardTitle, { class: "d-flex justify-space-between align-center pb-1 pt-3" }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            class: "text-h2 text-truncate",
            title: $options.getItemTitle()
          }, toDisplayString($options.getItemTitle()), 9, _hoisted_1),
          createVNode(VTooltip, { location: "top" }, {
            activator: withCtx(({ props }) => [
              createVNode(VSwitch, mergeProps({
                color: "primary",
                "hide-details": "",
                density: "compact",
                "model-value": $options.getItemEnabled(),
                loading: $props.loading,
                disabled: $props.loading || $props.disableToggle
              }, props, { "onUpdate:modelValue": $options.toggleEnabled }), null, 16, ["model-value", "loading", "disabled", "onUpdate:modelValue"])
            ]),
            default: withCtx(() => [
              createBaseVNode("span", null, toDisplayString($options.getItemEnabled() ? $setup.t("core.common.itemCard.enabled") : $setup.t("core.common.itemCard.disabled")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(VCardText, null, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "item-details", { item: $props.item }, void 0, true)
        ]),
        _: 3
      }),
      createVNode(VCardActions, { style: { "margin": "8px" } }, {
        default: withCtx(() => [
          createVNode(VBtn, {
            variant: "outlined",
            color: "error",
            size: "small",
            rounded: "xl",
            disabled: $props.loading || $props.disableDelete,
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("delete", $props.item))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($setup.t("core.common.itemCard.delete")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          $props.showEditButton ? (openBlock(), createBlock(VBtn, {
            key: 0,
            variant: "tonal",
            color: "primary",
            size: "small",
            rounded: "xl",
            disabled: $props.loading,
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("edit", $props.item))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($setup.t("core.common.itemCard.edit")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : createCommentVNode("", true),
          $props.showCopyButton ? (openBlock(), createBlock(VBtn, {
            key: 1,
            variant: "tonal",
            color: "secondary",
            size: "small",
            rounded: "xl",
            disabled: $props.loading,
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("copy", $props.item))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($setup.t("core.common.itemCard.copy")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "actions", { item: $props.item }, void 0, true),
          createVNode(VSpacer)
        ]),
        _: 3
      }),
      $props.bglogo ? (openBlock(), createElementBlock("div", _hoisted_2, [
        createVNode(VImg, {
          src: $props.bglogo,
          contain: "",
          width: "120",
          height: "120"
        }, null, 8, ["src"])
      ])) : createCommentVNode("", true)
    ]),
    _: 3
  });
}
const ItemCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ccb0abff"]]);
export {
  ItemCard as I
};
