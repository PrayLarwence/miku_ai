import { C as Chat } from "./Chat-D-4mEYgD.js";
import { useCustomizerStore } from "./customizer-B8CfSB2b.js";
import { _ as _export_sfc, h as createBlock, w as withCtx, a as createBaseVNode, b as createVNode, $ as unref, ax as VApp, o as openBlock } from "./index-C6xMvtNz.js";
import "./StyledMenu.vue_vue_type_style_index_0_lang-_w7LzF51.js";
import "./confirmDialog-BGytizx-.js";
import "./useMediaHandling-sTFplQA3.js";
import "./TemplateListEditor-CcORIz4A.js";
import "./index-BzWTNlAD.js";
import "./PersonaForm-Bnunh2VZ.js";
import "./useMessages-Q3Pby38u.js";
import "./shiki-CglkkNvr.js";
import "./ActionRef-Cd9Rx6L1.js";
import "./clipboard-rcHxKLZ_.js";
import "./ProviderChatCompletionPanel-BvzwlMCb.js";
import "./AstrBotConfig-BHdFNq6A.js";
import "./useProviderSources-D04NiKog.js";
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
