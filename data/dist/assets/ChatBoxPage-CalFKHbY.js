import { C as Chat } from "./Chat-CVKmBS_G.js";
import { u as useCustomizerStore } from "./customizer-CK-sknRB.js";
import { _ as _export_sfc, h as createBlock, w as withCtx, a as createBaseVNode, b as createVNode, $ as unref, ax as VApp, o as openBlock } from "./index-BCHR8lhs.js";
import "./StyledMenu.vue_vue_type_style_index_0_lang-DLpCnJAE.js";
import "./confirmDialog-CGjakbC1.js";
import "./useMediaHandling-B2K8y9d8.js";
import "./TemplateListEditor-BdN-RGpI.js";
import "./index-C8VKoOg6.js";
import "./PersonaForm-C9n-kDEn.js";
import "./useMessages-xd6kgeaQ.js";
import "./shiki-BHxvu0ic.js";
import "./ActionRef-_JYBBPA7.js";
import "./clipboard-rcHxKLZ_.js";
import "./ProviderChatCompletionPanel-BL4YHdJJ.js";
import "./AstrBotConfig-CsF5RA5e.js";
import "./useProviderSources-DCbEOnYf.js";
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
