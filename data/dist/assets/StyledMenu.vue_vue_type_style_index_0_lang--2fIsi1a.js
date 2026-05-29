import { D as defineComponent, h as createBlock, w as withCtx, a2 as mergeProps, ae as VMenu, b as createVNode, af as VList, Z as renderSlot, T as normalizeClass, s as VCard, o as openBlock } from "./index-sVuaKD1b.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "StyledMenu",
  props: {
    closeOnContentClick: { type: Boolean, default: true },
    noBorder: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VMenu, mergeProps(_ctx.$attrs, { "close-on-content-click": _ctx.closeOnContentClick }), {
        activator: withCtx(({ props: activatorProps }) => [
          renderSlot(_ctx.$slots, "activator", { props: activatorProps })
        ]),
        default: withCtx(() => [
          createVNode(VCard, {
            class: normalizeClass(["styled-menu-card", { "styled-menu-card-borderless": _ctx.noBorder }]),
            elevation: "8",
            rounded: "lg"
          }, {
            default: withCtx(() => [
              createVNode(VList, {
                density: "compact",
                class: "styled-menu-list pa-1"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })
            ]),
            _: 3
          }, 8, ["class"])
        ]),
        _: 3
      }, 16, ["close-on-content-click"]);
    };
  }
});
export {
  _sfc_main as _
};
