import { C as Chat } from "./Chat-D_5rJ-1Q.js";
import { useCustomizerStore } from "./customizer-tQjiYpHJ.js";
import { _ as _export_sfc, h as createBlock, w as withCtx, a as createBaseVNode, b as createVNode, $ as unref, ax as VApp, o as openBlock } from "./index-IOsZtj6J.js";
import "./StyledMenu.vue_vue_type_style_index_0_lang-NB5AjzPV.js";
import "./confirmDialog-DLjvXcW2.js";
import "./useMediaHandling-CPD1KXJR.js";
import "./TemplateListEditor-DBT5fSzq.js";
import "./index-B5qN8oBY.js";
import "./PersonaForm-DxkuJRPi.js";
import "./useMessages-DOTHT6gG.js";
import "./shiki-DUWbmqsn.js";
import "./ActionRef-Bs5JA_Gg.js";
import "./clipboard-rcHxKLZ_.js";
import "./ProviderChatCompletionPanel-0Ntf8xjF.js";
import "./AstrBotConfig-_LTpBxq4.js";
import "./useProviderSources-e7eBv26P.js";
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
