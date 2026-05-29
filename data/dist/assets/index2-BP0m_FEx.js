import { D as defineComponent, L as ref, J as watch, M as onMounted, R as onBeforeUnmount, o as openBlock, c as createElementBlock, S as withDirectives, W as vShow, a as createBaseVNode, h as createBlock, w as withCtx, Z as renderSlot, X as Transition, i as createCommentVNode } from "./index-Chcpfqng.js";
import { J, o as on, X as Xo, K as Ko, M as Mn, V as Vo } from "./useMessages-DGqgwFcm.js";
import "./shiki-BxHi4c-e.js";
var e = (e2, n, l) => new Promise((t, a) => {
  var o = (e3) => {
    try {
      i(l.next(e3));
    } catch (n2) {
      a(n2);
    }
  }, r = (e3) => {
    try {
      i(l.throw(e3));
    } catch (n2) {
      a(n2);
    }
  }, i = (e3) => e3.done ? t(e3.value) : Promise.resolve(e3.value).then(o, r);
  i((l = l.apply(e2, n)).next());
});
const E = { class: "math-inline__loading", role: "status", "aria-live": "polite" }, R = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "MathInlineNode", props: { node: {} }, setup(n) {
  const x = n, R2 = ref(null), T = ref(null);
  let b = false, k = 0, I = false, C = null;
  const L = ref(true), M = on();
  let O = null;
  function $() {
    return e(this, null, function* () {
      if (!T.value || I) return;
      if (!x.node.content) return L.value = false, T.value.textContent = x.node.raw, void (b = true);
      C && (C.abort(), C = null);
      const n2 = ++k, l = new AbortController();
      if (C = l, !b) try {
        !O && R2.value && (O = M(R2.value)), yield null == O ? void 0 : O.whenVisible;
      } catch (a) {
      }
      const t = "$$" === x.node.markup;
      Xo(x.node.content, t, { timeout: 1500, waitTimeout: 0, maxRetries: 0, signal: l.signal }).then((e2) => {
        I || n2 !== k || T.value && (T.value.innerHTML = e2, L.value = false, b = true);
      }).catch((l2) => e(null, null, function* () {
        if (I || n2 !== k) return;
        if (!T.value) return;
        const e2 = (null == l2 ? void 0 : l2.code) || (null == l2 ? void 0 : l2.name), t2 = "KATEX_DISABLED" === e2;
        if ("WORKER_INIT_ERROR" === e2 || (null == l2 ? void 0 : l2.fallbackToRenderer) || e2 === Ko || "WORKER_TIMEOUT" === e2) {
          const e3 = yield Mn();
          if (e3) {
            try {
              const n3 = "$$" === x.node.markup, l3 = e3.renderToString(x.node.content, { throwOnError: x.node.loading, displayMode: n3 });
              L.value = false, T.value.innerHTML = l3, b = true, Vo(x.node.content, n3, l3);
            } catch (a) {
            }
            return;
          }
        }
        if (t2) return L.value = false, void (T.value.textContent = x.node.raw);
        b || (L.value = !t2), x.node.loading ? t2 && (T.value.textContent = x.node.raw) : (L.value = false, T.value.textContent = x.node.raw);
      }));
    });
  }
  return watch(() => x.node.content, () => {
    $();
  }), onMounted(() => {
    $();
  }), onBeforeUnmount(() => {
    var e2;
    I = true, C && (C.abort(), C = null), null == (e2 = null == O ? void 0 : O.destroy) || e2.call(O), O = null;
  }), (e2, n2) => (openBlock(), createElementBlock("span", { ref_key: "containerEl", ref: R2, class: "math-inline-wrapper" }, [withDirectives(createBaseVNode("span", { ref_key: "mathElement", ref: T, class: "math-inline" }, null, 512), [[vShow, !L.value]]), L.value ? (openBlock(), createBlock(Transition, { key: 0, name: "table-node-fade" }, { default: withCtx(() => [createBaseVNode("span", E, [renderSlot(e2.$slots, "loading", { isLoading: L.value }, () => [n2[0] || (n2[0] = createBaseVNode("span", { class: "math-inline__spinner animate-spin", "aria-hidden": "true" }, null, -1)), n2[1] || (n2[1] = createBaseVNode("span", { class: "sr-only" }, "Loading", -1))], true)])]), _: 3 })) : createCommentVNode("", true)], 512));
} }), [["__scopeId", "data-v-32b58f6e"]]);
R.install = (e2) => {
  e2.component(R.__name, R);
};
export {
  R as default
};
