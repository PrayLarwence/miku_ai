import { u as useCustomizerStore } from "./customizer-COHgOChO.js";
import { _ as _export_sfc, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as createVNode, w as withCtx, d as createTextVNode, e as VBtn, u as useModuleI18n, o as openBlock } from "./index-BXuR6cgv.js";
const _sfc_main = {
  name: "AboutPage",
  setup() {
    const { tm } = useModuleI18n("features/about");
    return { tm };
  },
  methods: {
    useCustomizerStore,
    open(url) {
      window.open(url, "_blank");
    }
  }
};
const _hoisted_1 = { style: { "display": "flex", "flex-direction": "column", "height": "100%" } };
const _hoisted_2 = { style: { "flex-grow": "1", "display": "flex", "align-items": "center", "justify-content": "center", "flex-direction": "column" } };
const _hoisted_3 = { style: { "text-align": "center", "max-width": "600px" } };
const _hoisted_4 = { class: "font-weight-bold" };
const _hoisted_5 = {
  class: "text-subtitle-1",
  style: { "color": "var(--v-theme-secondaryText)" }
};
const _hoisted_6 = { style: { "margin-top": "20px", "display": "flex", "justify-content": "center" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("h1", _hoisted_4, toDisplayString($setup.tm("hero.title")), 1),
        createBaseVNode("p", _hoisted_5, toDisplayString($setup.tm("hero.subtitle")), 1),
        createBaseVNode("div", _hoisted_6, [
          createVNode(VBtn, {
            onClick: _cache[0] || (_cache[0] = ($event) => $options.open("https://github.com/hatsune-musubi-miku/miku_ai")),
            color: "primary",
            variant: "tonal",
            size: "small",
            "prepend-icon": "mdi-star"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($setup.tm("hero.starButton")), 1)
            ]),
            _: 1
          }),
          createVNode(VBtn, {
            class: "ml-4",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.open("https://github.com/hatsune-musubi-miku/miku_ai/issues")),
            color: "secondary",
            size: "small",
            variant: "tonal",
            "prepend-icon": "mdi-comment-question"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($setup.tm("hero.issueButton")), 1)
            ]),
            _: 1
          })
        ])
      ])
    ])
  ]);
}
const AboutPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  AboutPage as default
};
