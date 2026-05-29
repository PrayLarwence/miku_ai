import { D as defineComponent, c as createElementBlock, b as createVNode, w as withCtx, C as resolveComponent, X as Transition, h as createBlock, aH as resolveDynamicComponent, o as openBlock, _ as _export_sfc } from "./index-sVuaKD1b.js";
const _hoisted_1 = { class: "kb-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_router_view, null, {
          default: withCtx(({ Component }) => [
            createVNode(Transition, {
              name: "kb-fade",
              mode: "out-in"
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(Component), {
                  key: _ctx.$route.fullPath
                }))
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8d14ac4c"]]);
export {
  index as default
};
