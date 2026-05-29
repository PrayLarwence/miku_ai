import { D as defineComponent, H as computed, L as ref, J as watch, R as onBeforeUnmount, I as onUnmounted, o as openBlock, h as createBlock, $ as unref, c as createElementBlock, Z as renderSlot, a as createBaseVNode, t as toDisplayString, U as normalizeStyle, F as Fragment, i as createCommentVNode, S as withDirectives, W as vShow, T as normalizeClass, M as onMounted, a0 as withModifiers, Y as Teleport, N as nextTick, a1 as getCurrentInstance } from "./index-sVuaKD1b.js";
import { J as J$1, n as nn, D as Dt, o as on, f as ft, Y as Ye, a as Je, O as Ot, U as Ut, q as qt, F as Ft } from "./useMessages-tbPz2ujk.js";
import { e as e$1 } from "./safeRaf-DMX2vB7B.js";
import "./shiki-GcVF7abd.js";
var e = Object.defineProperty, t = Object.defineProperties, o = Object.getOwnPropertyDescriptors, n = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable, a = (t2, o2, n2) => o2 in t2 ? e(t2, o2, { enumerable: true, configurable: true, writable: true, value: n2 }) : t2[o2] = n2, r = (e2, t2) => {
  for (var o2 in t2 || (t2 = {})) l.call(t2, o2) && a(e2, o2, t2[o2]);
  if (n) for (var o2 of n(t2)) i.call(t2, o2) && a(e2, o2, t2[o2]);
  return e2;
}, u = (e2, n2) => t(e2, o(n2)), s = (e2, t2, o2) => new Promise((n2, l2) => {
  var i2 = (e3) => {
    try {
      r2(o2.next(e3));
    } catch (t3) {
      l2(t3);
    }
  }, a2 = (e3) => {
    try {
      r2(o2.throw(e3));
    } catch (t3) {
      l2(t3);
    }
  }, r2 = (e3) => e3.done ? n2(e3.value) : Promise.resolve(e3.value).then(i2, a2);
  r2((o2 = o2.apply(e2, t2)).next());
});
const X = { class: "markstream-vue" }, A = { class: "html-preview-frame__header" }, G = { class: "html-preview-frame__title" }, J = { class: "html-preview-frame__label" }, U = ["srcdoc"], K = /* @__PURE__ */ J$1(/* @__PURE__ */ defineComponent({ __name: "HtmlPreviewFrame", props: { code: {}, isDark: { type: Boolean }, onClose: { type: Function }, title: {} }, setup(e2) {
  const t2 = e2, { t: o2 } = nn(), n2 = computed(() => {
    const e3 = t2.code || "", o3 = e3.trim().toLowerCase();
    return o3.startsWith("<!doctype") || o3.startsWith("<html") || o3.startsWith("<body") ? e3 : `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: ${t2.isDark ? "#020617" : "#ffffff"};
        color: ${t2.isDark ? "#e5e7eb" : "#020617"};
      }
      body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', ui-sans-serif, sans-serif;
      }
    </style>
  </head>
  <body>
    ${e3}
  </body>
</html>`;
  });
  function l2(e3) {
    var o3;
    "Escape" !== e3.key && "Esc" !== e3.key || null == (o3 = t2.onClose) || o3.call(t2);
  }
  return onMounted(() => {
    "undefined" != typeof window && window.addEventListener("keydown", l2);
  }), onUnmounted(() => {
    "undefined" != typeof window && window.removeEventListener("keydown", l2);
  }), (e3, l3) => (openBlock(), createBlock(Teleport, { to: "body" }, [createBaseVNode("div", X, [createBaseVNode("div", { class: normalizeClass(["html-preview-frame__backdrop", { "html-preview-frame__backdrop--dark": t2.isDark }]), onClick: l3[2] || (l3[2] = (e4) => {
    var o3;
    return null == (o3 = t2.onClose) ? void 0 : o3.call(t2);
  }) }, [createBaseVNode("div", { class: normalizeClass(["html-preview-frame", { "html-preview-frame--dark": t2.isDark }]), onClick: l3[1] || (l3[1] = withModifiers(() => {
  }, ["stop"])) }, [createBaseVNode("div", A, [createBaseVNode("div", G, [l3[3] || (l3[3] = createBaseVNode("span", { class: "html-preview-frame__dot" }, null, -1)), createBaseVNode("span", J, toDisplayString(t2.title || unref(o2)("common.preview") || "Preview"), 1)]), createBaseVNode("button", { type: "button", class: normalizeClass(["html-preview-frame__close", { "html-preview-frame__close--dark": t2.isDark }]), onClick: l3[0] || (l3[0] = (e4) => {
    var o3;
    return null == (o3 = t2.onClose) ? void 0 : o3.call(t2);
  }) }, " × ", 2)]), createBaseVNode("iframe", { class: "html-preview-frame__iframe", sandbox: "allow-scripts allow-same-origin", srcdoc: n2.value }, null, 8, U)], 2)], 2)])]));
} }), [["__scopeId", "data-v-296dd89d"]]);
let Q = null, Z = null, ee = null, te = null, oe = null, ne = null;
const le = /* @__PURE__ */ new WeakMap();
let ie = 0;
const ae = { key: 0, class: "code-block-header flex justify-between items-center px-4 py-2.5 border-b border-gray-400/5", style: { color: "var(--vscode-editor-foreground, var(--markstream-code-fallback-fg))", "background-color": "var(--vscode-editor-background, var(--markstream-code-fallback-bg))" } }, re = { class: "flex items-center gap-x-2 flex-1 overflow-hidden" }, ue = ["innerHTML"], se = { class: "text-sm font-medium font-mono truncate" }, ce = { class: "flex items-center gap-x-2" }, de = ["aria-pressed"], ve = ["disabled"], me = ["disabled"], pe = ["disabled"], he = ["aria-label"], fe = { key: 0, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, we = { key: 1, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, ge = ["aria-pressed"], ye = { key: 0, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, be = { key: 1, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, ke = ["aria-label"], xe = { class: "code-editor-layer" }, Me = { class: "code-loading-placeholder" }, Ce = { class: "sr-only", "aria-live": "polite", role: "status" }, Be = "__markstreamMonacoPassiveTouch__", Se = /* @__PURE__ */ J$1(/* @__PURE__ */ defineComponent({ __name: "CodeBlockNode", props: { node: {}, isDark: { type: Boolean }, loading: { type: Boolean, default: true }, stream: { type: Boolean, default: true }, darkTheme: { default: void 0 }, lightTheme: { default: void 0 }, isShowPreview: { type: Boolean, default: true }, monacoOptions: {}, enableFontSizeControl: { type: Boolean, default: true }, minWidth: { default: void 0 }, maxWidth: { default: void 0 }, themes: {}, showHeader: { type: Boolean, default: true }, showCopyButton: { type: Boolean, default: true }, showExpandButton: { type: Boolean, default: true }, showPreviewButton: { type: Boolean, default: true }, showFontSizeButtons: { type: Boolean, default: true }, customId: {} }, emits: ["previewCode", "copy"], setup(e2, { emit: t2 }) {
  var o2;
  const n2 = e2, l2 = t2;
  "undefined" != typeof window && (function() {
    var e3;
    try {
      const t3 = window;
      if (t3[Be]) return;
      const o3 = null == (e3 = window.Element) ? void 0 : e3.prototype, n3 = null == o3 ? void 0 : o3.addEventListener;
      if (!o3 || !n3) return;
      o3.addEventListener = function(e4, t4, o4) {
        return "touchstart" === e4 && (function(e5, t5) {
          if (!e5) return false;
          const o5 = e5;
          return !("function" != typeof o5.closest || !o5.closest(".monaco-editor, .monaco-diff-editor") || t5 && "object" == typeof t5 && "passive" in t5);
        })(this, o4) ? n3.call(this, e4, t4, (function(e5) {
          return null == e5 ? { passive: true } : "boolean" == typeof e5 ? { capture: e5, passive: true } : "object" == typeof e5 ? "passive" in e5 ? e5 : u(r({}, e5), { passive: true }) : { passive: true };
        })(o4)) : n3.call(this, e4, t4, o4);
      }, t3[Be] = true;
    } catch (t3) {
    }
  })();
  const i2 = getCurrentInstance(), a2 = computed(() => {
    const e3 = null == i2 ? void 0 : i2.vnode.props;
    return !(!e3 || !e3.onPreviewCode && !e3.onPreviewCode);
  }), { t: c } = nn(), v = ref(null), f = ref(null), y = ref(false), H = ref(Dt(n2.node.language)), X2 = computed(() => Ut(H.value)), A2 = ref(false), G2 = ref(false), J2 = ref(false), U2 = ref(false), Se2 = ref(false), Oe = ref(null);
  let _e = 0;
  const Fe = on(), Pe = ref(null), Ee = ref("undefined" == typeof window);
  "undefined" != typeof window && watch(() => f.value, (e3) => {
    var t3;
    if (null == (t3 = Pe.value) || t3.destroy(), Pe.value = null, !e3) return void (Ee.value = false);
    const o3 = Fe(e3, { rootMargin: "400px" });
    Pe.value = o3, Ee.value = o3.isVisible.value, o3.whenVisible.then(() => {
      Ee.value = true;
    });
  }, { immediate: true }), onBeforeUnmount(() => {
    var e3;
    null == (e3 = Pe.value) || e3.destroy(), Pe.value = null;
  });
  let Ne = null, Te = null, ze = () => {
  }, He = () => {
  }, $e = () => null, je = () => ({ getModel: () => ({ getLineCount: () => 1 }), getOption: () => 14, updateOptions: () => {
  } }), De = () => ({ getModel: () => ({ getLineCount: () => 1 }), getOption: () => 14, updateOptions: () => {
  } }), Le = () => {
  }, Ye$1 = () => {
  }, We = null, Ve = () => {
    var e3;
    return String(null != (e3 = n2.node.language) ? e3 : "plaintext");
  }, qe = () => s(null, null, function* () {
  });
  const Ie = computed(() => n2.node.diff), Re = computed(() => Ie.value ? "diff" : "single"), Xe = ref(Re.value), Ae = ref(false), Ge = computed(() => {
    var e3;
    const t3 = null == (e3 = n2.monacoOptions) ? void 0 : e3.wordWrap;
    return null == t3 || "off" !== String(t3);
  }), Je$1 = computed(() => "undefined" != typeof window && !Ae.value && !U2.value), Ue = ref(false);
  "undefined" != typeof window && s(null, null, function* () {
    try {
      const e3 = yield Ot();
      if (!e3) return void (Ae.value = true);
      const t3 = e3.useMonaco, o3 = e3.detectLanguage;
      if ("function" == typeof o3 && (Ve = o3), "function" == typeof t3) {
        const e4 = St();
        if (e4 && n2.themes && Array.isArray(n2.themes) && !n2.themes.includes(e4)) throw new Error("Preferred theme not in provided themes array");
        const o4 = t3(u(r({ wordWrap: "on", wrappingIndent: "same", themes: n2.themes, theme: e4 }, n2.monacoOptions || {}), { onThemeChange() {
          ut();
        } }));
        Ne = o4.createEditor || Ne, Te = o4.createDiffEditor || Te, ze = o4.updateCode || ze, He = o4.updateDiff || He, $e = o4.getEditor || $e, je = o4.getEditorView || je, De = o4.getDiffEditorView || De, Le = o4.cleanupEditor || Le, Ye$1 = o4.safeClean || o4.cleanupEditor || Ye$1, qe = o4.setTheme || qe, Se2.value = true, v.value && (yield Ct(v.value));
      }
    } catch (e3) {
      Ae.value = true;
    }
  });
  const Ke = ref("number" == typeof (null == (o2 = n2.monacoOptions) ? void 0 : o2.fontSize) ? n2.monacoOptions.fontSize : Number.NaN), Qe = ref(Ke.value), Ze = computed(() => {
    const e3 = Ke.value, t3 = Qe.value;
    return "number" == typeof e3 && Number.isFinite(e3) && e3 > 0 && "number" == typeof t3 && Number.isFinite(t3) && t3 > 0;
  }), et = computed(() => {
    var e3;
    const t3 = null == (e3 = n2.monacoOptions) ? void 0 : e3.fontSize;
    if ("number" == typeof t3 && Number.isFinite(t3) && t3 > 0) return t3;
    const o3 = Qe.value;
    return "number" == typeof o3 && Number.isFinite(o3) && o3 > 0 ? o3 : 12;
  }), tt = computed(() => {
    var e3;
    const t3 = null == (e3 = n2.monacoOptions) ? void 0 : e3.lineHeight;
    return "number" == typeof t3 && Number.isFinite(t3) && t3 > 0 ? t3 : Math.round(1.5 * et.value);
  }), ot = computed(() => {
    var e3;
    const t3 = null == (e3 = n2.monacoOptions) ? void 0 : e3.tabSize;
    return "number" == typeof t3 && Number.isFinite(t3) && t3 > 0 ? t3 : 4;
  }), nt = computed(() => {
    var e3;
    const t3 = null == (e3 = n2.monacoOptions) ? void 0 : e3.fontFamily;
    return r({ fontSize: `${et.value}px`, lineHeight: `${tt.value}px`, tabSize: ot.value }, "string" == typeof t3 && t3.trim() ? { "--markstream-code-font-family": t3.trim() } : {});
  });
  function lt() {
    var e3, t3, o3, n3, l3;
    try {
      const i3 = Ie.value ? null != (o3 = null == (t3 = null == (e3 = De()) ? void 0 : e3.getModifiedEditor) ? void 0 : t3.call(e3)) ? o3 : De() : je(), a3 = $e(), r2 = null == (n3 = null == a3 ? void 0 : a3.EditorOption) ? void 0 : n3.fontInfo;
      if (i3 && null != r2) {
        const e4 = null == (l3 = i3.getOption) ? void 0 : l3.call(i3, r2), t4 = null == e4 ? void 0 : e4.fontSize;
        if ("number" == typeof t4 && Number.isFinite(t4) && t4 > 0) return t4;
      }
    } catch (i3) {
    }
    try {
      const e4 = v.value;
      if (e4) {
        const t4 = e4.querySelector(".view-lines .view-line");
        if (t4) try {
          if ("undefined" != typeof window && "function" == typeof window.getComputedStyle) {
            const e5 = window.getComputedStyle(t4).fontSize, o4 = e5 && e5.match(/^(\d+(?:\.\d+)?)/);
            if (o4) return Number.parseFloat(o4[1]);
          }
        } catch (i3) {
        }
      }
    } catch (i3) {
    }
    return null;
  }
  function it(e3) {
    var t3, o3;
    try {
      const n4 = $e(), l4 = null == (t3 = null == n4 ? void 0 : n4.EditorOption) ? void 0 : t3.lineHeight;
      if (null != l4) {
        const t4 = null == (o3 = null == e3 ? void 0 : e3.getOption) ? void 0 : o3.call(e3, l4);
        if ("number" == typeof t4 && t4 > 0) return t4;
      }
    } catch (i3) {
    }
    const n3 = (function() {
      try {
        const e4 = v.value;
        if (!e4) return null;
        const t4 = e4.querySelector(".view-lines .view-line");
        if (t4) {
          const e5 = Math.ceil(t4.getBoundingClientRect().height);
          if (e5 > 0) return e5;
        }
      } catch (i3) {
      }
      return null;
    })();
    if (n3 && n3 > 0) return n3;
    const l3 = Number.isFinite(Qe.value) && Qe.value > 0 ? Qe.value : 12;
    return Math.max(12, Math.round(1.35 * l3));
  }
  function at() {
    var e3;
    if (Number.isFinite(Qe.value) && Qe.value > 0 && Number.isFinite(Ke.value)) return Qe.value;
    const t3 = lt();
    return "number" == typeof (null == (e3 = n2.monacoOptions) ? void 0 : e3.fontSize) ? (Ke.value = n2.monacoOptions.fontSize, Qe.value = n2.monacoOptions.fontSize, Qe.value) : t3 && t3 > 0 ? (Ke.value = t3, Qe.value = t3, t3) : (Ke.value = 12, Qe.value = 12, 12);
  }
  function rt() {
    var e3, t3, o3, n3, l3, i3, a3, r2, u2, s2, c2, d, v2, m;
    try {
      const p = Ie.value ? De() : je();
      if (!p) return null;
      if (Ie.value && (null == p ? void 0 : p.getOriginalEditor) && (null == p ? void 0 : p.getModifiedEditor)) {
        const v3 = null == (e3 = p.getOriginalEditor) ? void 0 : e3.call(p), m2 = null == (t3 = p.getModifiedEditor) ? void 0 : t3.call(p);
        null == (o3 = null == v3 ? void 0 : v3.layout) || o3.call(v3), null == (n3 = null == m2 ? void 0 : m2.layout) || n3.call(m2);
        const h2 = (null == (l3 = null == v3 ? void 0 : v3.getContentHeight) ? void 0 : l3.call(v3)) || 0, f3 = (null == (i3 = null == m2 ? void 0 : m2.getContentHeight) ? void 0 : i3.call(m2)) || 0, w2 = Math.max(h2, f3);
        if (w2 > 0) return Math.ceil(w2 + 1);
        const g = (null == (u2 = null == (r2 = null == (a3 = null == v3 ? void 0 : v3.getModel) ? void 0 : a3.call(v3)) ? void 0 : r2.getLineCount) ? void 0 : u2.call(r2)) || 1, y2 = (null == (d = null == (c2 = null == (s2 = null == m2 ? void 0 : m2.getModel) ? void 0 : s2.call(m2)) ? void 0 : c2.getLineCount) ? void 0 : d.call(c2)) || 1, b = Math.max(g, y2), k = Math.max(it(v3), it(m2));
        return Math.ceil(b * (k + 1.5) + 0 + 1);
      }
      if (null == p ? void 0 : p.getContentHeight) {
        null == (v2 = null == p ? void 0 : p.layout) || v2.call(p);
        const e4 = p.getContentHeight();
        if (e4 > 0) return Math.ceil(e4 + 1);
      }
      const h = null == (m = null == p ? void 0 : p.getModel) ? void 0 : m.call(p);
      let f2 = 1;
      h && "function" == typeof h.getLineCount && (f2 = h.getLineCount());
      const w = it(p);
      return Math.ceil(f2 * (w + 1.5) + 0 + 1);
    } catch (p) {
      return null;
    }
  }
  function ut() {
    var e3, t3, o3, n3, l3, i3, a3, r2;
    const u2 = v.value, s2 = f.value;
    if (!u2 || !s2) return;
    const c2 = u2.querySelector(".monaco-editor") || u2, d = c2.querySelector(".monaco-editor-background") || c2, m = c2.querySelector(".view-lines") || c2;
    let p = null, h = null, w = null;
    try {
      "undefined" != typeof window && "function" == typeof window.getComputedStyle && (p = window.getComputedStyle(c2), h = d === c2 ? p : window.getComputedStyle(d), w = m === c2 ? p : window.getComputedStyle(m));
    } catch (M) {
      p = null, h = null, w = null;
    }
    const g = String(null != (e3 = null == p ? void 0 : p.getPropertyValue("--vscode-editor-foreground")) ? e3 : "").trim(), y2 = String(null != (t3 = null == p ? void 0 : p.getPropertyValue("--vscode-editor-background")) ? t3 : "").trim(), b = String(null != (n3 = null != (o3 = null == p ? void 0 : p.getPropertyValue("--vscode-editor-selectionBackground")) ? o3 : null == p ? void 0 : p.getPropertyValue("--vscode-editor-hoverHighlightBackground")) ? n3 : "").trim(), k = g || String(null != (i3 = null != (l3 = null == w ? void 0 : w.color) ? l3 : null == p ? void 0 : p.color) ? i3 : "").trim(), x = y2 || String(null != (r2 = null != (a3 = null == h ? void 0 : h.backgroundColor) ? a3 : null == p ? void 0 : p.backgroundColor) ? r2 : "").trim();
    k && s2.style.setProperty("--vscode-editor-foreground", k), x && s2.style.setProperty("--vscode-editor-background", x), b && s2.style.setProperty("--vscode-editor-selectionBackground", b);
  }
  function st() {
    try {
      const e3 = v.value;
      if (!e3) return;
      const t3 = e3.getBoundingClientRect(), o3 = window.scrollY + t3.top, n3 = rt();
      if (null != n3 && n3 > 0) {
        const l3 = t3.height;
        e3.style.height = `${Math.ceil(n3)}px`, e3.style.maxHeight = "none";
        const i3 = Math.ceil(n3) - l3;
        0 !== i3 && o3 < window.scrollY && window.scrollBy(0, i3);
      }
    } catch (e3) {
    }
  }
  function ct() {
    var e3;
    try {
      const t3 = v.value;
      if (!t3) return;
      const o3 = t3.getBoundingClientRect(), l3 = window.scrollY + o3.top, i3 = o3.height, a3 = (function() {
        var e4, t4;
        const o4 = null != (t4 = null == (e4 = n2.monacoOptions) ? void 0 : e4.MAX_HEIGHT) ? t4 : 500;
        if ("number" == typeof o4) return o4;
        const l4 = String(o4).match(/^(\d+(?:\.\d+)?)/);
        return l4 ? Number.parseFloat(l4[1]) : 500;
      })();
      if (_e > 0 && (_e--, null != Oe.value)) {
        const e4 = Math.min(Oe.value, a3);
        t3.style.height = `${Math.ceil(e4)}px`, t3.style.maxHeight = `${Math.ceil(a3)}px`, t3.style.overflow = "auto";
        const o4 = Math.ceil(e4) - i3;
        return void (0 !== o4 && l3 < window.scrollY && window.scrollBy(0, o4));
      }
      const r2 = rt();
      if (null != r2 && r2 > 0) {
        const e4 = Math.min(r2, a3);
        t3.style.height = `${Math.ceil(e4)}px`, t3.style.maxHeight = `${Math.ceil(a3)}px`, t3.style.overflow = "auto";
        const o4 = Math.ceil(e4) - i3;
        return void (0 !== o4 && l3 < window.scrollY && window.scrollBy(0, o4));
      }
      if (null != Oe.value) {
        const e4 = Math.min(Oe.value, a3);
        t3.style.height = `${Math.ceil(e4)}px`, t3.style.maxHeight = `${Math.ceil(a3)}px`, t3.style.overflow = "auto";
        const o4 = Math.ceil(e4) - i3;
        return void (0 !== o4 && l3 < window.scrollY && window.scrollBy(0, o4));
      }
      const u2 = Math.ceil((null == (e3 = t3.getBoundingClientRect) ? void 0 : e3.call(t3).height) || 0);
      if (u2 > 0) {
        const e4 = Math.min(u2, a3);
        t3.style.height = `${Math.ceil(e4)}px`, t3.style.maxHeight = `${Math.ceil(a3)}px`, t3.style.overflow = "auto";
        const o4 = Math.ceil(e4) - i3;
        return void (0 !== o4 && l3 < window.scrollY && window.scrollBy(0, o4));
      }
      const s2 = Number.parseFloat(t3.style.height);
      if (!Number.isNaN(s2) && s2 > 0) {
        const e4 = Math.ceil(Math.min(s2, a3));
        t3.style.height = `${e4}px`;
        const o4 = e4 - i3;
        0 !== o4 && l3 < window.scrollY && window.scrollBy(0, o4);
      } else {
        const e4 = Math.ceil(a3);
        t3.style.height = `${e4}px`;
        const o4 = e4 - i3;
        0 !== o4 && l3 < window.scrollY && window.scrollBy(0, o4);
      }
      t3.style.maxHeight = `${Math.ceil(a3)}px`, t3.style.overflow = "auto";
    } catch (t3) {
    }
  }
  const dt = computed(() => n2.isShowPreview && ("html" === H.value || "svg" === H.value));
  watch(() => n2.node.language, (e3) => {
    H.value = Dt(e3);
  }), watch(() => n2.node.code, (e3) => s(null, null, function* () {
    var t3, o3;
    if (false !== n2.stream) {
      if (H.value || (H.value = Dt(Ve(e3))), Ne && !J2.value && v.value) try {
        yield Ct(v.value);
      } catch (l3) {
      }
      Ie.value ? He(String(null != (t3 = n2.node.originalCode) ? t3 : ""), String(null != (o3 = n2.node.updatedCode) ? o3 : ""), X2.value) : ze(e3, X2.value), A2.value && e$1(() => st());
    }
  }));
  const vt = computed(() => {
    const e3 = H.value;
    return e3 ? qt[e3] || e3.charAt(0).toUpperCase() + e3.slice(1) : qt[""];
  }), mt = computed(() => Ft(H.value || "")), pt = computed(() => {
    const e3 = {}, t3 = (e4) => {
      if (null != e4) return "number" == typeof e4 ? `${e4}px` : String(e4);
    }, o3 = t3(n2.minWidth), l3 = t3(n2.maxWidth);
    return o3 && (e3.minWidth = o3), l3 && (e3.maxWidth = l3), e3;
  });
  function ht() {
    return s(this, null, function* () {
      try {
        "undefined" != typeof navigator && navigator.clipboard && "function" == typeof navigator.clipboard.writeText && (yield navigator.clipboard.writeText(n2.node.code)), y.value = true, l2("copy", n2.node.code), setTimeout(() => {
          y.value = false;
        }, 1e3);
      } catch (e3) {
        console.error("复制失败:", e3);
      }
    });
  }
  function ft$1(e3) {
    return !e3 || e3.disabled;
  }
  function wt(e3, t3, o3 = "top") {
    if (ft$1(e3.currentTarget)) return;
    const l3 = e3, i3 = null != (null == l3 ? void 0 : l3.clientX) && null != (null == l3 ? void 0 : l3.clientY) ? { x: l3.clientX, y: l3.clientY } : void 0;
    Ye(e3.currentTarget, t3, o3, false, i3, n2.isDark);
  }
  function gt() {
    Je();
  }
  function yt(e3) {
    if (ft$1(e3.currentTarget)) return;
    const t3 = y.value ? c("common.copied") || "Copied" : c("common.copy") || "Copy", o3 = e3, l3 = null != (null == o3 ? void 0 : o3.clientX) && null != (null == o3 ? void 0 : o3.clientY) ? { x: o3.clientX, y: o3.clientY } : void 0;
    Ye(e3.currentTarget, t3, "top", false, l3, n2.isDark);
  }
  function bt() {
    A2.value = !A2.value;
    const e3 = Ie.value ? De() : je(), t3 = v.value;
    e3 && t3 && (A2.value ? (Mt(true), t3.style.maxHeight = "none", t3.style.overflow = "visible", st()) : (Mt(false), t3.style.overflow = "auto", ct()));
  }
  function kt() {
    var e3, t3, o3;
    if (G2.value = !G2.value, G2.value) {
      if (v.value) {
        const o4 = Math.ceil((null == (t3 = (e3 = v.value).getBoundingClientRect) ? void 0 : t3.call(e3).height) || 0);
        o4 > 0 && (Oe.value = o4);
      }
      Mt(false);
    } else {
      A2.value && Mt(true), v.value && null != Oe.value && (v.value.style.height = `${Oe.value}px`);
      const e4 = Ie.value ? De() : je();
      try {
        null == (o3 = null == e4 ? void 0 : e4.layout) || o3.call(e4);
      } catch (n3) {
      }
      _e = 2, e$1(() => {
        A2.value ? st() : ct();
      });
    }
  }
  function xt() {
    if (!dt.value) return;
    const e3 = H.value;
    if (a2.value) {
      const t3 = "html" === e3 ? "text/html" : "image/svg+xml", o3 = "html" === e3 ? c("artifacts.htmlPreviewTitle") || "HTML Preview" : c("artifacts.svgPreviewTitle") || "SVG Preview";
      return void l2("previewCode", { node: n2.node, artifactType: t3, artifactTitle: o3, id: `temp-${e3}-${Date.now()}` });
    }
    "html" === e3 && (Ue.value = !Ue.value);
  }
  function Mt(e3) {
    var t3, o3;
    try {
      if (Ie.value) {
        const o4 = De();
        null == (t3 = null == o4 ? void 0 : o4.updateOptions) || t3.call(o4, { automaticLayout: e3 });
      } else {
        const t4 = je();
        null == (o3 = null == t4 ? void 0 : t4.updateOptions) || o3.call(t4, { automaticLayout: e3 });
      }
    } catch (n3) {
    }
  }
  function Ct(e3) {
    if (!Ne) return null;
    if (We) return We;
    J2.value = true;
    const t3 = s(null, null, function* () {
      yield (function(e4) {
        return s(this, null, function* () {
          var t4, o3, l3;
          if (!Ne) return;
          Ie.value ? (Ye$1(), Te ? yield Te(e4, String(null != (t4 = n2.node.originalCode) ? t4 : ""), String(null != (o3 = n2.node.updatedCode) ? o3 : ""), X2.value) : yield Ne(e4, n2.node.code, X2.value)) : yield Ne(e4, n2.node.code, X2.value);
          const i3 = Ie.value ? De() : je();
          if ("number" == typeof (null == (l3 = n2.monacoOptions) ? void 0 : l3.fontSize)) null == i3 || i3.updateOptions({ fontSize: n2.monacoOptions.fontSize, automaticLayout: false }), Ke.value = n2.monacoOptions.fontSize, Qe.value = n2.monacoOptions.fontSize;
          else {
            const e5 = lt();
            e5 && e5 > 0 ? (Ke.value = e5, Qe.value = e5) : (Ke.value = 12, Qe.value = 12);
          }
          A2.value || G2.value || ct(), false === n2.loading && (yield nextTick(), e$1(() => {
            A2.value && !G2.value ? st() : G2.value || ct();
          })), yield nextTick(), U2.value = true, ut();
        });
      })(e3);
    });
    return We = t3.finally(() => {
      We = null;
    }), We;
  }
  watch(() => Qe.value, (e3, t3) => {
    const o3 = Ie.value ? De() : je();
    o3 && "number" == typeof e3 && Number.isFinite(e3) && e3 > 0 && (o3.updateOptions({ fontSize: e3 }), A2.value && !G2.value && st());
  }, { flush: "post", immediate: false });
  const Bt = watch(() => [v.value, Ie.value, n2.stream, n2.loading, Se2.value, Ee.value], (e3) => s(null, [e3], function* ([e4, t3, o3, n3, l3, i3]) {
    if (!e4 || !Ne) return;
    if (!i3) return;
    if (false === o3 && false !== n3) return;
    const a3 = Ct(e4);
    if (a3) {
      try {
        yield a3;
      } catch (r2) {
        U2.value = false;
      }
      Bt();
    }
  }));
  function St() {
    return n2.isDark ? n2.darkTheme : n2.lightTheme;
  }
  watch(Re, (e3, t3) => s(null, null, function* () {
    if (e3 !== t3 && (Xe.value = e3, Ne && v.value && J2.value && (false !== n2.stream || false === n2.loading) && Ee.value)) try {
      U2.value = false, J2.value = false, We = null, Ye$1(), yield nextTick(), yield Ct(v.value);
    } catch (o3) {
      U2.value = false;
    }
  })), watch(() => [n2.isDark, n2.darkTheme, n2.lightTheme, Se2.value], () => {
    Se2.value && (function() {
      const e3 = St();
      e3 && (function(e4, t3) {
        const o3 = (function(e5) {
          if (null == e5) return null;
          if ("string" == typeof e5) return e5;
          if ("object" == typeof e5 && e5 && "name" in e5) return String(e5.name);
          if ("object" == typeof e5) {
            const o4 = le.get(e5);
            if (o4) return o4;
            try {
              const t4 = JSON.stringify(e5);
              if (t4) return le.set(e5, t4), t4;
            } catch (t4) {
            }
            const n3 = "__theme_" + ++ie;
            return le.set(e5, n3), n3;
          }
          return String(e5);
        })(t3);
        return o3 ? (ne = e4, Q || oe !== o3 ? Q ? (te === o3 || Z === o3 || (ee = t3, te = o3), Q) : (ee = t3, te = o3, Q = s(null, null, function* () {
          for (; te && null != ee; ) {
            const o4 = ee, n3 = te;
            if (ee = null, te = null, oe !== n3) try {
              Z = n3, yield (null != ne ? ne : e4)(o4), oe = n3;
            } catch (t4) {
            }
          }
        }).finally(() => {
          Q = null, Z = null;
        }), Q) : Promise.resolve()) : Promise.resolve();
      })(qe, e3).then(() => {
        U2.value && e$1(() => ut());
      });
    })();
  }), watch(() => [n2.monacoOptions, Ee.value], () => {
    var e3, t3;
    if (!Ne || !Ee.value) return;
    const o3 = Ie.value ? De() : je(), l3 = "number" == typeof (null == (e3 = n2.monacoOptions) ? void 0 : e3.fontSize) ? n2.monacoOptions.fontSize : Number.isFinite(Qe.value) ? Qe.value : void 0;
    "number" == typeof l3 && Number.isFinite(l3) && l3 > 0 && (null == (t3 = null == o3 ? void 0 : o3.updateOptions) || t3.call(o3, { fontSize: l3 })), A2.value && !G2.value ? st() : G2.value || ct();
  }, { deep: true });
  const Ot$1 = watch(() => [n2.loading, Ee.value], (e3) => s(null, [e3], function* ([e4, t3]) {
    t3 && (e4 || (yield nextTick(), e$1(() => {
      G2.value || (A2.value ? st() : ct()), Ot$1();
    })));
  }), { immediate: true, flush: "post" });
  return onUnmounted(() => {
    Le();
  }), (t3, o3) => Ae.value ? (openBlock(), createBlock(unref(ft), { key: 0, node: e2.node, loading: n2.loading }, null, 8, ["node", "loading"])) : (openBlock(), createElementBlock("div", { key: 1, ref_key: "container", ref: f, style: normalizeStyle(pt.value), class: normalizeClass(["code-block-container my-4 rounded-lg border overflow-hidden shadow-sm", [n2.isDark ? "border-gray-700/30 bg-gray-900" : "border-gray-200 bg-white", { "is-rendering": n2.loading, "is-dark": n2.isDark }]]) }, [n2.showHeader ? (openBlock(), createElementBlock("div", ae, [renderSlot(t3.$slots, "header-left", {}, () => [createBaseVNode("div", re, [createBaseVNode("span", { class: "icon-slot h-4 w-4 flex-shrink-0", innerHTML: mt.value }, null, 8, ue), createBaseVNode("span", se, toDisplayString(vt.value), 1)])], true), renderSlot(t3.$slots, "header-right", {}, () => [createBaseVNode("div", ce, [createBaseVNode("button", { type: "button", class: "code-action-btn p-2 text-xs rounded-md transition-colors hover:bg-[var(--vscode-editor-selectionBackground)]", "aria-pressed": G2.value, onClick: kt, onMouseenter: o3[0] || (o3[0] = (e3) => wt(e3, G2.value ? unref(c)("common.expand") || "Expand" : unref(c)("common.collapse") || "Collapse")), onFocus: o3[1] || (o3[1] = (e3) => wt(e3, G2.value ? unref(c)("common.expand") || "Expand" : unref(c)("common.collapse") || "Collapse")), onMouseleave: gt, onBlur: gt }, [(openBlock(), createElementBlock("svg", { style: normalizeStyle({ rotate: G2.value ? "0deg" : "90deg" }), xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [...o3[17] || (o3[17] = [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "m9 18l6-6l-6-6" }, null, -1)])], 4))], 40, de), n2.showFontSizeButtons && n2.enableFontSizeControl ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("button", { type: "button", class: "code-action-btn p-2 text-xs rounded-md transition-colors hover:bg-[var(--vscode-editor-selectionBackground)]", disabled: !!Number.isFinite(Qe.value) && Qe.value <= 10, onClick: o3[2] || (o3[2] = (e3) => (function() {
    const e4 = at(), t4 = Math.max(10, e4 - 1);
    Qe.value = t4;
  })()), onMouseenter: o3[3] || (o3[3] = (e3) => wt(e3, unref(c)("common.decrease") || "Decrease")), onFocus: o3[4] || (o3[4] = (e3) => wt(e3, unref(c)("common.decrease") || "Decrease")), onMouseleave: gt, onBlur: gt }, [...o3[18] || (o3[18] = [createBaseVNode("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M5 12h14" })], -1)])], 40, ve), createBaseVNode("button", { type: "button", class: "code-action-btn p-2 text-xs rounded-md transition-colors hover:bg-[var(--vscode-editor-selectionBackground)]", disabled: !Ze.value || Qe.value === Ke.value, onClick: o3[5] || (o3[5] = (e3) => (at(), void (Number.isFinite(Ke.value) && (Qe.value = Ke.value)))), onMouseenter: o3[6] || (o3[6] = (e3) => wt(e3, unref(c)("common.reset") || "Reset")), onFocus: o3[7] || (o3[7] = (e3) => wt(e3, unref(c)("common.reset") || "Reset")), onMouseleave: gt, onBlur: gt }, [...o3[19] || (o3[19] = [createBaseVNode("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [createBaseVNode("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }, [createBaseVNode("path", { d: "M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8" }), createBaseVNode("path", { d: "M3 3v5h5" })])], -1)])], 40, me), createBaseVNode("button", { type: "button", class: "code-action-btn p-2 text-xs rounded-md transition-colors hover:bg-[var(--vscode-editor-selectionBackground)]", disabled: !!Number.isFinite(Qe.value) && Qe.value >= 36, onClick: o3[8] || (o3[8] = (e3) => (function() {
    const e4 = at(), t4 = Math.min(36, e4 + 1);
    Qe.value = t4;
  })()), onMouseenter: o3[9] || (o3[9] = (e3) => wt(e3, unref(c)("common.increase") || "Increase")), onFocus: o3[10] || (o3[10] = (e3) => wt(e3, unref(c)("common.increase") || "Increase")), onMouseleave: gt, onBlur: gt }, [...o3[20] || (o3[20] = [createBaseVNode("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M5 12h14m-7-7v14" })], -1)])], 40, pe)], 64)) : createCommentVNode("", true), n2.showCopyButton ? (openBlock(), createElementBlock("button", { key: 1, type: "button", class: "code-action-btn p-2 text-xs rounded-md transition-colors hover:bg-[var(--vscode-editor-selectionBackground)]", "aria-label": y.value ? unref(c)("common.copied") || "Copied" : unref(c)("common.copy") || "Copy", onClick: ht, onMouseenter: o3[11] || (o3[11] = (e3) => yt(e3)), onFocus: o3[12] || (o3[12] = (e3) => yt(e3)), onMouseleave: gt, onBlur: gt }, [y.value ? (openBlock(), createElementBlock("svg", we, [...o3[22] || (o3[22] = [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M20 6L9 17l-5-5" }, null, -1)])])) : (openBlock(), createElementBlock("svg", fe, [...o3[21] || (o3[21] = [createBaseVNode("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }, [createBaseVNode("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }), createBaseVNode("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })], -1)])]))], 40, he)) : createCommentVNode("", true), n2.showExpandButton ? (openBlock(), createElementBlock("button", { key: 2, type: "button", class: "code-action-btn p-2 text-xs rounded-md transition-colors hover:bg-[var(--vscode-editor-selectionBackground)]", "aria-pressed": A2.value, onClick: bt, onMouseenter: o3[13] || (o3[13] = (e3) => wt(e3, A2.value ? unref(c)("common.collapse") || "Collapse" : unref(c)("common.expand") || "Expand")), onFocus: o3[14] || (o3[14] = (e3) => wt(e3, A2.value ? unref(c)("common.collapse") || "Collapse" : unref(c)("common.expand") || "Expand")), onMouseleave: gt, onBlur: gt }, [A2.value ? (openBlock(), createElementBlock("svg", ye, [...o3[23] || (o3[23] = [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6" }, null, -1)])])) : (openBlock(), createElementBlock("svg", be, [...o3[24] || (o3[24] = [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "m14 10l7-7m-1 7h-6V4M3 21l7-7m-6 0h6v6" }, null, -1)])]))], 40, ge)) : createCommentVNode("", true), dt.value && n2.showPreviewButton ? (openBlock(), createElementBlock("button", { key: 3, type: "button", class: "code-action-btn p-2 text-xs rounded-md transition-colors hover:bg-[var(--vscode-editor-selectionBackground)]", "aria-label": unref(c)("common.preview") || "Preview", onClick: xt, onMouseenter: o3[15] || (o3[15] = (e3) => wt(e3, unref(c)("common.preview") || "Preview")), onFocus: o3[16] || (o3[16] = (e3) => wt(e3, unref(c)("common.preview") || "Preview")), onMouseleave: gt, onBlur: gt }, [...o3[25] || (o3[25] = [createBaseVNode("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24" }, [createBaseVNode("g", { fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }, [createBaseVNode("path", { d: "M23.628 7.41c-.12-1.172-.08-3.583-.9-4.233c-1.921-1.51-6.143-1.11-8.815-1.19c-3.481-.15-7.193.14-10.625.24a.34.34 0 0 0 0 .67c3.472-.05 7.074-.29 10.575-.09c2.471.15 6.653-.14 8.254 1.16c.4.33.41 2.732.49 3.582a42 42 0 0 1 .08 9.005a13.8 13.8 0 0 1-.45 3.001c-2.42 1.4-19.69 2.381-20.72.55a21 21 0 0 1-.65-4.632a41.5 41.5 0 0 1 .12-7.964c.08 0 7.334.33 12.586.24c2.331 0 4.682-.13 6.764-.21a.33.33 0 0 0 0-.66c-7.714-.16-12.897-.43-19.31.05c.11-1.38.48-3.922.38-4.002a.3.3 0 0 0-.42 0c-.37.41-.29 1.77-.36 2.251s-.14 1.07-.2 1.6a45 45 0 0 0-.36 8.645a21.8 21.8 0 0 0 .66 5.002c1.46 2.702 17.248 1.461 20.95.43c1.45-.4 1.69-.8 1.871-1.95c.575-3.809.602-7.68.08-11.496" }), createBaseVNode("path", { d: "M4.528 5.237a.84.84 0 0 0-.21-1c-.77-.41-1.71.39-1 1.1a.83.83 0 0 0 1.21-.1m2.632-.25c.14-.14.19-.84-.2-1c-.77-.41-1.71.39-1 1.09a.82.82 0 0 0 1.2-.09m2.88 0a.83.83 0 0 0-.21-1c-.77-.41-1.71.39-1 1.09a.82.82 0 0 0 1.21-.09m-4.29 8.735c0 .08.23 2.471.31 2.561a.371.371 0 0 0 .63-.14c0-.09 0 0 .15-1.72a10 10 0 0 0-.11-2.232a5.3 5.3 0 0 1-.26-1.37a.3.3 0 0 0-.54-.24a6.8 6.8 0 0 0-.2 2.33c-1.281-.38-1.121.13-1.131-.42a15 15 0 0 0-.19-1.93c-.16-.17-.36-.17-.51.14a20 20 0 0 0-.43 3.471c.04.773.18 1.536.42 2.272c.26.4.7.22.7-.1c0-.09-.16-.09 0-1.862c.06-1.18-.23-.3 1.16-.76m5.033-2.552c.32-.07.41-.28.39-.37c0-.55-3.322-.34-3.462-.24s-.2.18-.18.28s0 .11 0 .16a3.8 3.8 0 0 0 1.591.361v.82a15 15 0 0 0-.13 3.132c0 .2-.09.94.17 1.16a.34.34 0 0 0 .48 0c.125-.35.196-.718.21-1.09a8 8 0 0 0 .14-3.232c0-.13.05-.7-.1-.89a8 8 0 0 0 .89-.09m5.544-.181a.69.69 0 0 0-.89-.44a2.8 2.8 0 0 0-1.252 1.001a2.3 2.3 0 0 0-.41-.83a1 1 0 0 0-1.6.27a7 7 0 0 0-.35 2.07c0 .571 0 2.642.06 2.762c.14 1.09 1 .51.63.13a17.6 17.6 0 0 1 .38-3.962c.32-1.18.32.2.39.51s.11 1.081.73 1.081s.48-.93 1.401-1.78q.075 1.345 0 2.69a15 15 0 0 0 0 1.811a.34.34 0 0 0 .68 0q.112-.861.11-1.73a16.7 16.7 0 0 0 .12-3.582m1.441-.201c-.05.16-.3 3.002-.31 3.202a6.3 6.3 0 0 0 .21 1.741c.33 1 1.21 1.07 2.291.82a3.7 3.7 0 0 0 1.14-.23c.21-.22.10-.59-.41-.64q-.817.096-1.64.07c-.44-.07-.34 0-.67-4.442q.015-.185 0-.37a.316.316 0 0 0-.23-.38a.316.316 0 0 0-.38.23" })])], -1)])], 40, ke)) : createCommentVNode("", true)])], true)])) : createCommentVNode("", true), withDirectives(createBaseVNode("div", xe, [createBaseVNode("div", { ref_key: "codeEditor", ref: v, class: normalizeClass(["code-editor-container", [e2.stream ? "" : "code-height-placeholder", { "is-hidden": Je$1.value }]]) }, null, 2), Je$1.value ? (openBlock(), createBlock(unref(ft), { key: 0, class: normalizeClass(["code-pre-fallback", { "is-wrap": Ge.value }]), style: normalizeStyle(nt.value), node: e2.node }, null, 8, ["class", "style", "node"])) : createCommentVNode("", true)], 512), [[vShow, !(G2.value || !e2.stream && e2.loading)]]), Ue.value && !a2.value && dt.value && "html" === H.value ? (openBlock(), createBlock(K, { key: 1, code: e2.node.code, "is-dark": n2.isDark, "on-close": () => Ue.value = false }, null, 8, ["code", "is-dark", "on-close"])) : createCommentVNode("", true), withDirectives(createBaseVNode("div", Me, [renderSlot(t3.$slots, "loading", { loading: e2.loading, stream: e2.stream }, () => [o3[26] || (o3[26] = createBaseVNode("div", { class: "loading-skeleton" }, [createBaseVNode("div", { class: "skeleton-line" }), createBaseVNode("div", { class: "skeleton-line" }), createBaseVNode("div", { class: "skeleton-line short" })], -1))], true)], 512), [[vShow, !e2.stream && e2.loading]]), createBaseVNode("span", Ce, toDisplayString(y.value ? unref(c)("common.copied") || "Copied" : ""), 1)], 6));
} }), [["__scopeId", "data-v-bf41db7f"]]);
Se.install = (e2) => {
  e2.component(Se.__name, Se);
};
export {
  Se as default
};
