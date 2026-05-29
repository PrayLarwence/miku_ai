import { C as Chat } from "./Chat-BgUcNAgs.js";
import { u as useCustomizerStore } from "./customizer-COHgOChO.js";
import { _ as _export_sfc, h as createBlock, w as withCtx, a as createBaseVNode, b as createVNode, $ as unref, ax as VApp, o as openBlock } from "./index-BXuR6cgv.js";
import "./StyledMenu.vue_vue_type_style_index_0_lang-2DD6mXzT.js";
import "./confirmDialog-CkMgMXQP.js";
import "./useMediaHandling-6OMlejRE.js";
import "./TemplateListEditor-CIYzKHuo.js";
import "./index-vSHJWpH5.js";
import "./PersonaForm-C8yvoH1l.js";
import "./useMessages-CJlWniRO.js";
import "./shiki-CAKhLbLY.js";
import "./ActionRef-DjgN006_.js";
import "./clipboard-rcHxKLZ_.js";
import "./ProviderChatCompletionPanel-CU2lv3zH.js";
import "./AstrBotConfig-pBiDtOXb.js";
import "./useProviderSources-CCuuB4SC.js";
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
