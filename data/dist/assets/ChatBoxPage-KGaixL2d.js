import { C as Chat } from "./Chat-BuBs6uDd.js";
import { u as useCustomizerStore } from "./customizer-BzxovCAs.js";
import { _ as _export_sfc, h as createBlock, w as withCtx, a as createBaseVNode, b as createVNode, $ as unref, ax as VApp, o as openBlock } from "./index-Chcpfqng.js";
import "./StyledMenu.vue_vue_type_style_index_0_lang-DijVCElC.js";
import "./confirmDialog-B44ViVrb.js";
import "./useMediaHandling-BcmRRPzA.js";
import "./TemplateListEditor-BfZeH0Mp.js";
import "./index-BixEDlUI.js";
import "./PersonaForm-W_aO9x4p.js";
import "./useMessages-DGqgwFcm.js";
import "./shiki-BxHi4c-e.js";
import "./ActionRef-D_rQ08w6.js";
import "./clipboard-rcHxKLZ_.js";
import "./ProviderChatCompletionPanel-DCUk4wZO.js";
import "./AstrBotConfig-BOuX4oeH.js";
import "./useProviderSources-DtqmSnbh.js";
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
