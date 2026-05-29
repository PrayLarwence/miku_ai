import { C as Chat } from "./Chat-BSQ_iprH.js";
import { u as useCustomizerStore } from "./customizer-Cwj1g2HR.js";
import { _ as _export_sfc, h as createBlock, w as withCtx, a as createBaseVNode, b as createVNode, $ as unref, ax as VApp, o as openBlock } from "./index-sVuaKD1b.js";
import "./StyledMenu.vue_vue_type_style_index_0_lang--2fIsi1a.js";
import "./confirmDialog-ByM573Zf.js";
import "./useMediaHandling-JruimGXk.js";
import "./TemplateListEditor-B70spLPD.js";
import "./index-B1y4uE9w.js";
import "./PersonaForm-DLrw373n.js";
import "./useMessages-tbPz2ujk.js";
import "./shiki-GcVF7abd.js";
import "./ActionRef-HZtvlUkH.js";
import "./clipboard-rcHxKLZ_.js";
import "./ProviderChatCompletionPanel-0on0k43h.js";
import "./AstrBotConfig-COOLLJVf.js";
import "./useProviderSources-9t71ajGU.js";
import "./inputValue-BqQtgRan.js";
const _hoisted_1 = { style: { "height": "100%", "width": "100%", "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center" } };
const _hoisted_2 = { id: "container" };
const _sfc_main = {
  __name: "ChatBoxPage",
  setup(__props) {
    const customizer = useCustomizerStore();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VApp, {
        theme: unref(customizer).uiTheme,
        style: { "height": "100%", "width": "100%" }
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(Chat, { "chatbox-mode": true })
            ])
          ])
        ]),
        _: 1
      }, 8, ["theme"]);
    };
  }
};
const ChatBoxPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-946ba5a9"]]);
export {
  ChatBoxPage as default
};
