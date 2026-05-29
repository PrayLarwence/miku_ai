import { D as defineComponent, L as ref, H as computed, J as watch, R as onBeforeUnmount, M as onMounted, I as onUnmounted, o as openBlock, c as createElementBlock, T as normalizeClass, Z as renderSlot, a as createBaseVNode, $ as unref, t as toDisplayString, i as createCommentVNode, U as normalizeStyle, S as withDirectives, W as vShow, a2 as mergeProps, a3 as toHandlers, h as createBlock, b as createVNode, w as withCtx, a0 as withModifiers, X as Transition, Y as Teleport, N as nextTick } from "./index-IOsZtj6J.js";
import { J as J$1, n as nn, o as on, Y as Ye, a as Je, b as Mo, m as mr, u as ur } from "./useMessages-DOTHT6gG.js";
import { e as e$1 } from "./safeRaf-DMX2vB7B.js";
import "./shiki-DUWbmqsn.js";
var e = Object.defineProperty, t = Object.defineProperties, l = Object.getOwnPropertyDescriptors, n = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable, a = (t2, l2, n2) => l2 in t2 ? e(t2, l2, { enumerable: true, configurable: true, writable: true, value: n2 }) : t2[l2] = n2, i = (e2, t2) => {
  for (var l2 in t2 || (t2 = {})) o.call(t2, l2) && a(e2, l2, t2[l2]);
  if (n) for (var l2 of n(t2)) r.call(t2, l2) && a(e2, l2, t2[l2]);
  return e2;
}, u = (e2, t2, l2) => new Promise((n2, o2) => {
  var r2 = (e3) => {
    try {
      i2(l2.next(e3));
    } catch (t3) {
      o2(t3);
    }
  }, a2 = (e3) => {
    try {
      i2(l2.throw(e3));
    } catch (t3) {
      o2(t3);
    }
  }, i2 = (e3) => e3.done ? n2(e3.value) : Promise.resolve(e3.value).then(r2, a2);
  i2((l2 = l2.apply(e2, t2)).next());
});
const q = { key: 0 }, V = { key: 1, class: "flex items-center gap-x-2 overflow-hidden" }, U = ["src"], W = { key: 2 }, G = { class: "flex items-center gap-x-1" }, K = { class: "flex items-center gap-x-1" }, J = { key: 4 }, Q = { key: 5, class: "flex items-center gap-x-1" }, ee = ["aria-pressed"], te = { key: 0, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, le = { key: 1, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, ne = ["disabled"], oe = ["disabled"], re = { key: 0, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "0.75rem", height: "0.75rem", viewBox: "0 0 24 24" }, ae = { key: 1, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "0.75rem", height: "0.75rem", viewBox: "0 0 24 24" }, ie = { key: 1, class: "relative" }, ue = { key: 0, class: "absolute top-2 right-2 z-10 rounded-lg" }, se = { class: "flex items-center gap-2 backdrop-blur rounded-lg" }, ce = { class: "markstream-vue" }, ve = { class: "absolute top-6 right-6 z-50 flex items-center gap-2" }, de = /* @__PURE__ */ J$1(/* @__PURE__ */ defineComponent({ __name: "MermaidBlockNode", props: { node: {}, maxHeight: { default: "500px" }, loading: { type: Boolean, default: true }, isDark: { type: Boolean }, workerTimeoutMs: { default: 1400 }, parseTimeoutMs: { default: 1800 }, renderTimeoutMs: { default: 2500 }, fullRenderTimeoutMs: { default: 4e3 }, showHeader: { type: Boolean, default: true }, showModeToggle: { type: Boolean, default: true }, showCopyButton: { type: Boolean, default: true }, showExportButton: { type: Boolean, default: true }, showFullscreenButton: { type: Boolean, default: true }, showCollapseButton: { type: Boolean, default: true }, showZoomControls: { type: Boolean, default: true }, enableWheelZoom: { type: Boolean, default: false }, isStrict: { type: Boolean, default: false } }, emits: ["copy", "export", "openModal", "toggleMode"], setup(e2, { emit: n2 }) {
  var o2, r2;
  const a2 = e2, s = n2, Z = { USE_PROFILES: { svg: true }, FORBID_TAGS: ["script"], FORBID_ATTR: [/^on/i], ADD_TAGS: ["style"], ADD_ATTR: ["style"], SAFE_FOR_TEMPLATES: true }, de2 = ref(false), me = computed(() => a2.isStrict ? "strict" : "loose"), he = computed(() => ({ startOnLoad: false, securityLevel: me.value, dompurifyConfig: "strict" === me.value ? Z : void 0, flowchart: "strict" === me.value ? { htmlLabels: false } : void 0 })), ge = [/javascript:/i, /expression\s*\(/i, /url\s*\(\s*javascript:/i, /@import/i], fe = /^(?:https?:|mailto:|tel:|#|\/|data:image\/(?:png|gif|jpe?g|webp);)/i;
  function pe(e3) {
    if (!e3) return "";
    const t2 = e3.trim();
    return fe.test(t2) ? t2 : "";
  }
  function we(e3) {
    if (e3) try {
      e3.replaceChildren();
    } catch (t2) {
      e3.innerHTML = "";
    }
  }
  function ye(e3, t2) {
    if (!e3) return "";
    if ("strict" === me.value) return (function(e4, t3) {
      if (!e4) return "";
      try {
        e4.replaceChildren();
      } catch (n3) {
        e4.innerHTML = "";
      }
      const l2 = (function(e5) {
        if ("undefined" == typeof window || "undefined" == typeof DOMParser) return null;
        if (!e5) return null;
        const t4 = e5.replace(/["']\s*javascript:/gi, "#").replace(/\bjavascript:/gi, "#").replace(/["']\s*vbscript:/gi, "#").replace(/\bvbscript:/gi, "#").replace(/\bdata:text\/html/gi, "#"), l3 = new DOMParser().parseFromString(t4, "image/svg+xml").documentElement;
        if (!l3 || "svg" !== l3.nodeName.toLowerCase()) return null;
        const n3 = l3;
        return (function(e6) {
          const t5 = /* @__PURE__ */ new Set(["script"]), l4 = [e6, ...Array.from(e6.querySelectorAll("*"))];
          for (const n4 of l4) {
            if (t5.has(n4.tagName.toLowerCase())) {
              n4.remove();
              continue;
            }
            const e7 = Array.from(n4.attributes);
            for (const t6 of e7) {
              const e8 = t6.name;
              if (/^on/i.test(e8)) n4.removeAttribute(e8);
              else {
                if ("style" === e8 && t6.value) {
                  const l5 = t6.value;
                  if (ge.some((e9) => e9.test(l5))) {
                    n4.removeAttribute(e8);
                    continue;
                  }
                }
                if (("href" === e8 || "xlink:href" === e8) && t6.value) {
                  const l5 = pe(t6.value);
                  if (!l5) {
                    n4.removeAttribute(e8);
                    continue;
                  }
                  l5 !== t6.value && n4.setAttribute(e8, l5);
                }
              }
            }
          }
        })(n3), n3;
      })(t3);
      return l2 ? (e4.appendChild(l2), e4.innerHTML) : "";
    })(e3, t2);
    try {
      e3.replaceChildren();
    } catch (l2) {
      e3.innerHTML = "";
    }
    if (t2) try {
      e3.insertAdjacentHTML("afterbegin", t2);
    } catch (l2) {
      e3.innerHTML = t2;
    }
    return e3.innerHTML;
  }
  const { t: xe } = nn();
  function ke() {
    return u(this, null, function* () {
      try {
        const e3 = yield Mo();
        return de2.value = !!e3, e3;
      } catch (e3) {
        throw de2.value = false, e3;
      }
    });
  }
  "undefined" != typeof window && u(null, null, function* () {
    var e3;
    try {
      const t2 = yield ke();
      if (!t2) return;
      null == (e3 = null == t2 ? void 0 : t2.initialize) || e3.call(t2, i({}, he.value));
    } catch (t2) {
      de2.value = false, console.warn("[markstream-vue] Failed to initialize mermaid renderer. Call enableMermaid() to configure a loader.", t2);
    }
  });
  const be = ref(false), Me = ref(false), Te = ref(), Ce = ref(), De = ref(), Be = ref(null), je = on(), Ee = ref(null), Se = ref("undefined" == typeof window), Oe = ref(), Pe = computed(() => a2.node.code.replace(/\]::([^:])/g, "]:::$1").replace(/:::subgraphNode$/gm, "::subgraphNode")), Le = ref(1), $e = ref(0), ze = ref(0), Ae = ref(false), Fe = ref({ x: 0, y: 0 }), Re = ref(false), He = ref(false), _e = ref(false), Xe = ref(null), Ne = ref(0), Ye$1 = ref(false);
  let Ze = null, Ie = null, qe = 0;
  const Ve = null != (o2 = globalThis.requestIdleCallback) ? o2 : (e3, t2) => setTimeout(() => e3({ didTimeout: true }), 16), Ue = /* @__PURE__ */ (function() {
    let e3 = null;
    return (...t2) => {
      e3 && clearTimeout(e3), e3 = setTimeout(() => (() => {
        Ve(() => {
          Vt();
        }, { timeout: 500 });
      })(...t2), 300);
    };
  })();
  function We() {
    null != Ie && (globalThis.clearTimeout(Ie), Ie = null);
  }
  function Ge(e3 = 600) {
    if ("undefined" == typeof globalThis) return;
    const t2 = Math.max(0, e3);
    We(), Ie = globalThis.setTimeout(() => {
      Ie = null, a2.loading || _e.value || !Se.value ? Ge(Math.min(1200, Math.max(300, 1.2 * t2))) : Ue();
    }, t2);
  }
  const Ke = ref("360px");
  let Je$1 = null;
  const Qe = ref(false), et = ref(false), tt = ref({}), lt = ref(null), nt = ref(""), ot = ref(0);
  let rt = null;
  const at = ref(false), it = ref({ zoom: 1, translateX: 0, translateY: 0, containerHeight: "360px" }), ut = computed(() => a2.enableWheelZoom ? { wheel: _t } : {}), st = computed(() => {
    var e3, t2, l2, n3;
    return { worker: null != (e3 = a2.workerTimeoutMs) ? e3 : 1400, parse: null != (t2 = a2.parseTimeoutMs) ? t2 : 1800, render: null != (l2 = a2.renderTimeoutMs) ? l2 : 2500, fullRender: null != (n3 = a2.fullRenderTimeoutMs) ? n3 : 4e3 };
  }), ct = null != (r2 = globalThis.cancelIdleCallback) ? r2 : (e3) => clearTimeout(e3);
  let vt = null, dt = null, mt = false, ht = 800, gt = null, ft = 0, pt = true;
  function wt(e3, t2) {
    const l2 = null == t2 ? void 0 : t2.timeoutMs, n3 = null == t2 ? void 0 : t2.signal;
    if (null == n3 ? void 0 : n3.aborted) return Promise.reject(new DOMException("Aborted", "AbortError"));
    let o3 = null, r3 = false, a3 = null;
    return new Promise((t3, i2) => {
      const u2 = () => {
        null != o3 && clearTimeout(o3), a3 && n3 && n3.removeEventListener("abort", a3);
      };
      l2 && l2 > 0 && (o3 = globalThis.setTimeout(() => {
        r3 || (r3 = true, u2(), i2(new Error("Operation timed out")));
      }, l2)), n3 && (a3 = () => {
        r3 || (r3 = true, u2(), i2(new DOMException("Aborted", "AbortError")));
      }, n3.addEventListener("abort", a3)), e3().then((e4) => {
        r3 || (r3 = true, u2(), t3(e4));
      }).catch((e4) => {
        r3 || (r3 = true, u2(), i2(e4));
      });
    });
  }
  function yt(e3) {
    if ("undefined" == typeof document) return;
    if (!Ce.value) return;
    const t2 = document.createElement("div");
    t2.className = "text-red-500 p-4", t2.textContent = "Failed to render diagram: ";
    const l2 = document.createElement("span");
    l2.textContent = e3 instanceof Error ? e3.message : "Unknown error", t2.appendChild(l2), we(Ce.value), Ce.value.appendChild(t2), Ke.value = "360px", at.value = true, Ut();
  }
  function xt(e3) {
    return !e3 || e3.disabled;
  }
  function kt(e3, t2, l2 = "top") {
    if (xt(e3.currentTarget)) return;
    const n3 = e3, o3 = null != (null == n3 ? void 0 : n3.clientX) && null != (null == n3 ? void 0 : n3.clientY) ? { x: n3.clientX, y: n3.clientY } : void 0;
    Ye(e3.currentTarget, t2, l2, false, o3, a2.isDark);
  }
  function bt() {
    Je();
  }
  function Mt(e3) {
    if (xt(e3.currentTarget)) return;
    const t2 = be.value ? xe("common.copied") || "Copied" : xe("common.copy") || "Copy", l2 = e3, n3 = null != (null == l2 ? void 0 : l2.clientX) && null != (null == l2 ? void 0 : l2.clientY) ? { x: l2.clientX, y: l2.clientY } : void 0;
    Ye(e3.currentTarget, t2, "top", false, n3, a2.isDark);
  }
  function Tt(e3, t2) {
    const l2 = `%%{init: {"theme": "${"dark" === t2 ? "dark" : "default"}"}}%%
`;
    return e3.trimStart().startsWith("%%{") ? e3 : l2 + e3;
  }
  function Ct() {
    return pt && !Re.value && !Qe.value && !at.value;
  }
  function Dt(e3) {
    const t2 = e3.split(/\r?\n/);
    for (; t2.length > 0; ) {
      const e4 = t2[t2.length - 1].trimEnd();
      if ("" !== e4) {
        if (!(/^[-=~>|<\s]+$/.test(e4.trim()) || /(?:--|==|~~|->|<-|-\||-\)|-x|o-|\|-|\.-)\s*$/.test(e4) || /[-|><]$/.test(e4) || /(?:graph|flowchart|sequenceDiagram|classDiagram|stateDiagram|erDiagram|gantt)\s*$/i.test(e4))) break;
        t2.pop();
      } else t2.pop();
    }
    return t2.join("\n");
  }
  function Bt(e3, t2, l2) {
    return u(this, null, function* () {
      var n3;
      try {
        return yield ur(e3, t2, null != (n3 = null == l2 ? void 0 : l2.timeoutMs) ? n3 : st.value.worker);
      } catch (o3) {
        return yield (function(e4, t3, l3) {
          return u(this, null, function* () {
            var n4, o4;
            const r3 = yield ke();
            if (!r3) return;
            const a3 = r3, i2 = Tt(e4, t3);
            if ("function" == typeof a3.parse) return yield wt(() => a3.parse(i2), { timeoutMs: null != (n4 = null == l3 ? void 0 : l3.timeoutMs) ? n4 : st.value.parse, signal: null == l3 ? void 0 : l3.signal }), true;
            const u2 = `mermaid-parse-${Math.random().toString(36).slice(2, 9)}`;
            return yield wt(() => r3.render(u2, i2), { timeoutMs: null != (o4 = null == l3 ? void 0 : l3.timeoutMs) ? o4 : st.value.render, signal: null == l3 ? void 0 : l3.signal }), true;
          });
        })(e3, t2, l2);
      }
    });
  }
  "undefined" != typeof window && watch(() => Te.value, (e3) => {
    var t2;
    if (null == (t2 = Ee.value) || t2.destroy(), Ee.value = null, !e3) return void (Se.value = false);
    const l2 = je(e3, { rootMargin: "400px" });
    Ee.value = l2, Se.value = l2.isVisible.value, l2.whenVisible.then(() => {
      Se.value = true;
    });
  }, { immediate: true }), onBeforeUnmount(() => {
    var e3;
    null == (e3 = Ee.value) || e3.destroy(), Ee.value = null;
  });
  const jt = computed(() => Re.value || _e.value || Me.value);
  function Et(e3) {
    if (!Te.value || !Ce.value) return;
    const t2 = Ce.value.querySelector("svg");
    if (!t2) return;
    let l2 = 0, n3 = 0;
    const o3 = t2.getAttribute("viewBox"), r3 = t2.getAttribute("width"), a3 = t2.getAttribute("height");
    if (o3) {
      const e4 = o3.split(" ");
      4 === e4.length && (l2 = Number.parseFloat(e4[2]), n3 = Number.parseFloat(e4[3]));
    }
    if (l2 && n3 || r3 && a3 && (l2 = Number.parseFloat(r3), n3 = Number.parseFloat(a3)), Number.isNaN(l2) || Number.isNaN(n3) || l2 <= 0 || n3 <= 0) try {
      const e4 = t2.getBBox();
      e4 && e4.width > 0 && e4.height > 0 && (l2 = e4.width, n3 = e4.height);
    } catch (i2) {
      return void console.error("Failed to get SVG BBox:", i2);
    }
    if (l2 > 0 && n3 > 0) {
      const t3 = n3 / l2;
      let o4 = (null != e3 ? e3 : Te.value.clientWidth) * t3;
      o4 > n3 && (o4 = n3), Ke.value = `${o4}px`;
    }
  }
  const St = ref(false), Ot = computed(() => ({ transform: `translate(${$e.value}px, ${ze.value}px) scale(${Le.value})` }));
  function Pt(e3) {
    "Escape" === e3.key && St.value && Lt();
  }
  function Lt() {
    if (St.value = false, De.value && we(De.value), Be.value = null, "undefined" != typeof document) try {
      document.body.style.overflow = "";
    } catch (e3) {
    }
    if ("undefined" != typeof window) try {
      window.removeEventListener("keydown", Pt);
    } catch (e3) {
    }
  }
  function $t() {
    Le.value < 3 && (Le.value += 0.1);
  }
  function zt() {
    Le.value > 0.5 && (Le.value -= 0.1);
  }
  function At() {
    Le.value = 1, $e.value = 0, ze.value = 0;
  }
  function Ft(e3) {
    Ae.value = true, e3 instanceof MouseEvent ? Fe.value = { x: e3.clientX - $e.value, y: e3.clientY - ze.value } : Fe.value = { x: e3.touches[0].clientX - $e.value, y: e3.touches[0].clientY - ze.value };
  }
  function Rt(e3) {
    if (!Ae.value) return;
    let t2, l2;
    e3 instanceof MouseEvent ? (t2 = e3.clientX, l2 = e3.clientY) : (t2 = e3.touches[0].clientX, l2 = e3.touches[0].clientY), $e.value = t2 - Fe.value.x, ze.value = l2 - Fe.value.y;
  }
  function Ht() {
    Ae.value = false;
  }
  function _t(e3) {
    if (a2.enableWheelZoom && (e3.ctrlKey || e3.metaKey)) {
      if (e3.preventDefault(), !Te.value) return;
      const t2 = Te.value.getBoundingClientRect(), l2 = e3.clientX - t2.left, n3 = e3.clientY - t2.top, o3 = l2 - t2.width / 2, r3 = n3 - t2.height / 2, a3 = (o3 - $e.value) / Le.value, i2 = (r3 - ze.value) / Le.value, u2 = 0.01, s2 = -e3.deltaY * u2, c = Math.min(Math.max(Le.value + s2, 0.5), 3);
      c !== Le.value && ($e.value = o3 - a3 * c, ze.value = r3 - i2 * c, Le.value = c);
    }
  }
  function Xt() {
    return u(this, null, function* () {
      try {
        const e3 = Pe.value, t2 = { payload: { type: "copy", text: e3 }, defaultPrevented: false, preventDefault() {
          this.defaultPrevented = true;
        } };
        if (s("copy", t2), t2.defaultPrevented) return;
        "undefined" != typeof navigator && navigator.clipboard && "function" == typeof navigator.clipboard.writeText && (yield navigator.clipboard.writeText(e3)), be.value = true, setTimeout(() => {
          be.value = false;
        }, 1e3);
      } catch (e3) {
        console.error("Failed to copy:", e3);
      }
    });
  }
  function Nt() {
    var e3;
    const t2 = null == (e3 = Ce.value) ? void 0 : e3.querySelector("svg");
    if (!t2) return void console.error("SVG element not found");
    const l2 = new XMLSerializer().serializeToString(t2), n3 = { payload: { type: "export" }, defaultPrevented: false, preventDefault() {
      this.defaultPrevented = true;
    }, svgElement: t2, svgString: l2 };
    s("export", n3), n3.defaultPrevented || (function(e4, t3 = null) {
      u(this, null, function* () {
        try {
          const n4 = null != t3 ? t3 : new XMLSerializer().serializeToString(e4), o3 = new Blob([n4], { type: "image/svg+xml;charset=utf-8" }), r3 = URL.createObjectURL(o3);
          if ("undefined" != typeof document) {
            const e5 = document.createElement("a");
            e5.href = r3, e5.download = `mermaid-diagram-${Date.now()}.svg`;
            try {
              document.body.appendChild(e5), e5.click(), document.body.removeChild(e5);
            } catch (l3) {
            }
            URL.revokeObjectURL(r3);
          }
        } catch (n4) {
          console.error("Failed to export SVG:", n4);
        }
      });
    })(t2, l2);
  }
  function Yt() {
    var e3, t2;
    const l2 = null != (t2 = null == (e3 = Ce.value) ? void 0 : e3.querySelector("svg")) ? t2 : null, n3 = l2 ? new XMLSerializer().serializeToString(l2) : null, o3 = { payload: { type: "open-modal" }, defaultPrevented: false, preventDefault() {
      this.defaultPrevented = true;
    }, svgElement: l2, svgString: n3 };
    s("openModal", o3), o3.defaultPrevented || (function() {
      if (St.value = true, "undefined" != typeof document) try {
        document.body.style.overflow = "hidden";
      } catch (e4) {
      }
      if ("undefined" != typeof window) try {
        window.addEventListener("keydown", Pt);
      } catch (e4) {
      }
      nextTick(() => {
        if (Te.value && De.value) {
          const e4 = Te.value.cloneNode(true);
          e4.classList.add("fullscreen");
          const t3 = e4.querySelector("[data-mermaid-wrapper]");
          t3 && (Be.value = t3, t3.style.transform = Ot.value.transform), we(De.value), De.value.appendChild(e4);
        }
      });
    })();
  }
  function Zt(e3) {
    const t2 = { payload: { type: "toggle-mode", target: e3 }, defaultPrevented: false, preventDefault() {
      this.defaultPrevented = true;
    } };
    s("toggleMode", e3, t2), t2.defaultPrevented || It(e3);
  }
  function It(e3) {
    return u(this, null, function* () {
      const t2 = Oe.value;
      if (!t2) return He.value = true, void (Re.value = "source" === e3);
      const l2 = t2.getBoundingClientRect().height;
      t2.style.height = `${l2}px`, t2.style.overflow = "hidden", He.value = true, Re.value = "source" === e3, yield nextTick();
      const n3 = t2.scrollHeight;
      t2.style.transition = "height 180ms ease", t2.offsetHeight, t2.style.height = `${n3}px`;
      const o3 = () => {
        t2.style.transition = "", t2.style.height = "", t2.style.overflow = "", t2.removeEventListener("transitionend", r3);
      };
      function r3() {
        o3();
      }
      t2.addEventListener("transitionend", r3), setTimeout(() => o3(), 220);
    });
  }
  function qt() {
    return u(this, null, function* () {
      return _e.value ? Xe.value : Ce.value || (yield nextTick(), Ce.value) ? (_e.value = true, Xe.value = u(null, null, function* () {
        var e3, n3, o3;
        Ce.value && (Ce.value.style.opacity = "0");
        try {
          const r3 = yield ke();
          if (!r3) return;
          const u2 = `mermaid-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
          Qe.value || et.value || null == (e3 = r3.initialize) || e3.call(r3, (n3 = i({}, he.value), o3 = { dompurifyConfig: i({}, Z) }, t(n3, l(o3))));
          const s2 = (function(e4, t2 = Pe.value) {
            const l2 = t2, n4 = `%%{init: {"theme": "${"dark" === e4 ? "dark" : "default"}"}}%%
`;
            return l2.trim().startsWith("%%{") ? l2 : n4 + l2;
          })(a2.isDark ? "dark" : "light"), c = yield wt(() => r3.render(u2, s2), { timeoutMs: st.value.fullRender }), v = null == c ? void 0 : c.svg;
          if (Ce.value) {
            const e4 = ye(Ce.value, v);
            Qe.value || et.value || (Et(), Qe.value = true, it.value = { zoom: Le.value, translateX: $e.value, translateY: ze.value, containerHeight: Ke.value });
            const t2 = a2.isDark ? "dark" : "light";
            e4 && (tt.value[t2] = e4), et.value && (et.value = false), at.value = false, qe = 0, We();
          }
        } catch (r3) {
          const e4 = (function(e5) {
            const t3 = "string" == typeof e5 ? e5 : "string" == typeof (null == e5 ? void 0 : e5.message) ? e5.message : "";
            return "string" == typeof t3 && /timed out/i.test(t3);
          })(r3), t2 = qe + 1;
          e4 && t2 <= 3 ? (qe = t2, Ge(Math.min(1200, 600 * t2))) : (qe = 0, We(), console.error("Failed to render mermaid diagram:", r3), false === a2.loading && yt(r3));
        } finally {
          yield nextTick(), Ce.value && (Ce.value.style.opacity = "1"), _e.value = false, Xe.value = null;
        }
      }), Xe.value) : void console.warn("Mermaid container not ready");
    });
  }
  function Vt() {
    return u(this, null, function* () {
      var e3, t2;
      const l2 = Date.now(), n3 = ++ot.value;
      rt && rt.abort(), rt = new AbortController();
      const o3 = rt.signal, r3 = a2.isDark ? "dark" : "light", i2 = Pe.value, s2 = i2.replace(/\s+/g, "");
      if (!i2.trim()) return Ce.value && we(Ce.value), lt.value = null, nt.value = "", void (at.value = false);
      if (s2 === nt.value) return;
      try {
        const c2 = yield (function(e4, t3, l3) {
          return u(this, null, function* () {
            var n4;
            try {
              if (yield Bt(e4, t3, l3)) return { fullOk: true, prefixOk: false };
            } catch (r4) {
              if ("AbortError" === (null == r4 ? void 0 : r4.name)) throw r4;
            }
            let o4 = Dt(e4);
            if (o4 && o4.trim() && o4 !== e4) try {
              try {
                const r4 = yield mr(e4, t3, null != (n4 = null == l3 ? void 0 : l3.timeoutMs) ? n4 : st.value.worker);
                r4 && r4.trim() && (o4 = r4);
              } catch (r4) {
              }
              if (yield Bt(o4, t3, l3)) return { fullOk: false, prefixOk: true, prefix: o4 };
            } catch (r4) {
              if ("AbortError" === (null == r4 ? void 0 : r4.name)) throw r4;
            }
            return { fullOk: false, prefixOk: false };
          });
        })(i2, r3, { signal: o3, timeoutMs: st.value.worker });
        if (c2.fullOk) return yield qt(), void (ot.value === n3 && (lt.value = null != (t2 = null == (e3 = Ce.value) ? void 0 : e3.innerHTML) ? t2 : null, nt.value = s2, at.value = false));
        const v = ft && l2 <= ft;
        if (c2.prefixOk && c2.prefix && Ct() && !v) return void (yield (function(e4) {
          return u(this, null, function* () {
            if (Ct() && (Ce.value || (yield nextTick(), Ce.value)) && !_e.value) {
              _e.value = true;
              try {
                const t3 = yield ke();
                if (!t3) return;
                const l3 = `mermaid-partial-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`, n4 = a2.isDark ? "dark" : "light", o4 = Dt(e4), r4 = Tt(o4 && o4.trim() ? o4 : e4, n4);
                Ce.value && (Ce.value.style.opacity = "0");
                const i3 = yield wt(() => t3.render(l3, r4), { timeoutMs: st.value.render }), u2 = null == i3 ? void 0 : i3.svg;
                Ce.value && u2 && (ye(Ce.value, u2), Et());
              } catch (t3) {
              } finally {
                yield nextTick(), Ce.value && (Ce.value.style.opacity = "1"), _e.value = false;
              }
            }
          });
        })(c2.prefix));
      } catch (v) {
        if ("AbortError" === (null == v ? void 0 : v.name)) return;
      }
      if (ot.value !== n3) return;
      if (at.value) return;
      const c = tt.value[r3];
      c && Ce.value && ye(Ce.value, c);
    });
  }
  function Ut() {
    mt && (mt = false, ht = 800, pt = false, gt && (gt.abort(), gt = null), vt && (globalThis.clearTimeout(vt), vt = null), dt && (ct(dt), dt = null), ft = Date.now());
  }
  function Wt() {
    if (Ut(), rt) {
      try {
        rt.abort();
      } catch (e3) {
      }
      rt = null;
    }
    if (gt) {
      try {
        gt.abort();
      } catch (e3) {
      }
      gt = null;
    }
    We(), qe = 0;
  }
  function Gt(e3 = 800) {
    mt && (vt && globalThis.clearTimeout(vt), vt = globalThis.setTimeout(() => {
      dt = Ve(() => u(null, null, function* () {
        if (!mt) return;
        if (Re.value || Qe.value) return void Ut();
        const e4 = a2.isDark ? "dark" : "light", t2 = Pe.value;
        if (t2.trim()) {
          gt && gt.abort(), gt = new AbortController();
          try {
            if ((yield Bt(t2, e4, { signal: gt.signal, timeoutMs: st.value.worker })) && (yield qt(), Qe.value)) return void Ut();
          } catch (l2) {
          }
          ht = Math.min(Math.floor(1.5 * ht), 4e3), Gt(ht);
        } else Gt(ht);
      }), { timeout: 500 });
    }, e3));
  }
  function Kt() {
    mt || Re.value || Qe.value || (mt = true, ft = 0, pt = true, Gt(500));
  }
  watch(Ot, (e3) => {
    St.value && Be.value && (Be.value.style.transform = e3.transform);
  }, { immediate: true }), watch(() => Pe.value, () => {
    Qe.value = false, tt.value = {}, Ue(), !Re.value && de2.value && Kt(), (function() {
      if (!Re.value) return;
      if (!de2.value) return;
      const e3 = Pe.value.length;
      e3 !== Ne.value && (Ye$1.value = true, Ne.value = e3, Ze && clearTimeout(Ze), Ze = setTimeout(() => {
        Ye$1.value && Re.value && Pe.value.trim() && (Ye$1.value = false, It("preview"));
      }, 500));
    })();
  }), watch(() => a2.isDark, () => u(null, null, function* () {
    if (!Qe.value) return;
    if (at.value) return;
    const e3 = a2.isDark ? "dark" : "light", t2 = tt.value[e3];
    if (t2) return void (Ce.value && ye(Ce.value, t2));
    const l2 = { zoom: Le.value, translateX: $e.value, translateY: ze.value, containerHeight: Ke.value }, n3 = 1 !== Le.value || 0 !== $e.value || 0 !== ze.value;
    et.value = true, n3 && (Le.value = 1, $e.value = 0, ze.value = 0, yield nextTick()), yield qt(), n3 && (yield nextTick(), Le.value = l2.zoom, $e.value = l2.translateX, ze.value = l2.translateY, Ke.value = l2.containerHeight, it.value = l2);
  })), watch(() => Re.value, (e3) => u(null, null, function* () {
    if (e3) Ut(), Qe.value && (it.value = { zoom: Le.value, translateX: $e.value, translateY: ze.value, containerHeight: Ke.value });
    else {
      if (at.value) return;
      const e4 = a2.isDark ? "dark" : "light";
      if (Qe.value && tt.value[e4]) return yield nextTick(), Ce.value && ye(Ce.value, tt.value[e4]), Le.value = it.value.zoom, $e.value = it.value.translateX, ze.value = it.value.translateY, void (Ke.value = it.value.containerHeight);
      if (yield nextTick(), !de2.value) return;
      yield Vt(), Kt();
    }
  })), watch(() => a2.loading, (e3, t2) => u(null, null, function* () {
    if (true === t2 && false === e3) {
      const e4 = Pe.value.trim();
      if (!e4) return Wt();
      const t3 = a2.isDark ? "dark" : "light", n3 = e4.replace(/\s+/g, "");
      if (Qe.value && n3 === nt.value) return yield nextTick(), Ce.value && !Ce.value.querySelector("svg") && tt.value[t3] && ye(Ce.value, tt.value[t3]), void Wt();
      try {
        yield Bt(e4, t3, { timeoutMs: st.value.worker }), yield qt(), nt.value = n3, at.value = false, Wt();
      } catch (l2) {
        Wt(), yt(l2);
      }
    }
  })), watch(Te, (e3) => {
    Je$1 && Je$1.disconnect(), !e3 || Qe.value || et.value || (Je$1 = new ResizeObserver((e4) => {
      e4 && e4.length > 0 && !Qe.value && !et.value && e$1(() => {
        Et(e4[0].contentRect.width);
      });
    }), Je$1.observe(e3));
  }, { immediate: true }), onMounted(() => u(null, null, function* () {
    yield nextTick(), He.value || (Re.value = !de2.value), Se.value && (Ue(), Ne.value = Pe.value.length);
  })), watch(() => de2.value, (e3) => {
    He.value || (Re.value = !e3);
  }), watch(() => Se.value, (e3) => {
    e3 && (Qe.value || (Ue(), Ne.value = Pe.value.length), a2.loading || Qe.value || Ue());
  }, { immediate: false }), onUnmounted(() => {
    Ze && clearTimeout(Ze), Je$1 && Je$1.disconnect(), rt && (rt.abort(), rt = null), Ut(), We();
  }), watch(() => Me.value, (e3) => u(null, null, function* () {
    e3 ? (Ut(), rt && rt.abort()) : Qe.value || (yield nextTick(), Ue(), Re.value || Kt());
  }), { immediate: false });
  const Jt = computed(() => a2.isDark ? "mermaid-action-btn p-2 text-xs rounded text-gray-400 hover:bg-gray-700 hover:text-gray-200" : "mermaid-action-btn p-2 text-xs rounded text-gray-600 hover:bg-gray-200 hover:text-gray-700");
  return (e3, t2) => (openBlock(), createElementBlock("div", { class: normalizeClass(["my-4 rounded-lg border overflow-hidden shadow-sm", [a2.isDark ? "border-gray-700/30" : "border-gray-200", { "is-rendering": a2.loading }]]) }, [a2.showHeader ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(["mermaid-block-header flex justify-between items-center px-4 py-2.5 border-b", a2.isDark ? "bg-gray-800 border-gray-700/30" : "bg-gray-50 border-gray-200"]) }, [e3.$slots["header-left"] ? (openBlock(), createElementBlock("div", q, [renderSlot(e3.$slots, "header-left", {}, void 0, true)])) : (openBlock(), createElementBlock("div", V, [createBaseVNode("img", { src: unref("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20width='16'%20height='16'%3e%3cpath%20fill='none'%20stroke='%23ca9ee6'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M1.5%202.5c0%206%202.25%205.75%204%207%20.83.67%201.17%202%201%204h3c-.17-2%20.17-3.33%201-4%201.75-1.25%204-1%204-7C12%202.5%2010%203%208%207%206%203%204%202.5%201.5%202.5'%20/%3e%3c/svg%3e"), class: "w-4 h-4 my-0", alt: "Mermaid" }, null, 8, U), createBaseVNode("span", { class: normalizeClass(["text-sm font-medium font-mono truncate", a2.isDark ? "text-gray-400" : "text-gray-600"]) }, "Mermaid", 2)])), e3.$slots["header-center"] ? (openBlock(), createElementBlock("div", W, [renderSlot(e3.$slots, "header-center", {}, void 0, true)])) : a2.showModeToggle && de2.value ? (openBlock(), createElementBlock("div", { key: 3, class: normalizeClass(["flex items-center gap-x-1 rounded-md p-0.5", a2.isDark ? "bg-gray-700" : "bg-gray-100"]) }, [createBaseVNode("button", { class: normalizeClass(["px-2.5 py-1 text-xs rounded transition-colors", [Re.value ? a2.isDark ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700" : a2.isDark ? "bg-gray-600 text-gray-200 shadow-sm" : "bg-white text-gray-700 shadow-sm"]]), onClick: t2[0] || (t2[0] = () => Zt("preview")), onMouseenter: t2[1] || (t2[1] = (e4) => kt(e4, unref(xe)("common.preview") || "Preview")), onFocus: t2[2] || (t2[2] = (e4) => kt(e4, unref(xe)("common.preview") || "Preview")), onMouseleave: bt, onBlur: bt }, [createBaseVNode("div", G, [t2[21] || (t2[21] = createBaseVNode("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [createBaseVNode("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }, [createBaseVNode("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0" }), createBaseVNode("circle", { cx: "12", cy: "12", r: "3" })])], -1)), createBaseVNode("span", null, toDisplayString(unref(xe)("common.preview") || "Preview"), 1)])], 34), createBaseVNode("button", { class: normalizeClass(["px-2.5 py-1 text-xs rounded transition-colors", [Re.value ? a2.isDark ? "bg-gray-600 text-gray-200 shadow-sm" : "bg-white text-gray-700 shadow-sm" : a2.isDark ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"]]), onClick: t2[3] || (t2[3] = () => Zt("source")), onMouseenter: t2[4] || (t2[4] = (e4) => kt(e4, unref(xe)("common.source") || "Source")), onFocus: t2[5] || (t2[5] = (e4) => kt(e4, unref(xe)("common.source") || "Source")), onMouseleave: bt, onBlur: bt }, [createBaseVNode("div", K, [t2[22] || (t2[22] = createBaseVNode("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "m16 18l6-6l-6-6M8 6l-6 6l6 6" })], -1)), createBaseVNode("span", null, toDisplayString(unref(xe)("common.source") || "Source"), 1)])], 34)], 2)) : createCommentVNode("", true), e3.$slots["header-right"] ? (openBlock(), createElementBlock("div", J, [renderSlot(e3.$slots, "header-right", {}, void 0, true)])) : (openBlock(), createElementBlock("div", Q, [a2.showCollapseButton ? (openBlock(), createElementBlock("button", { key: 0, class: normalizeClass(Jt.value), "aria-pressed": Me.value, onClick: t2[6] || (t2[6] = (e4) => Me.value = !Me.value), onMouseenter: t2[7] || (t2[7] = (e4) => kt(e4, Me.value ? unref(xe)("common.expand") || "Expand" : unref(xe)("common.collapse") || "Collapse")), onFocus: t2[8] || (t2[8] = (e4) => kt(e4, Me.value ? unref(xe)("common.expand") || "Expand" : unref(xe)("common.collapse") || "Collapse")), onMouseleave: bt, onBlur: bt }, [(openBlock(), createElementBlock("svg", { style: normalizeStyle({ rotate: Me.value ? "0deg" : "90deg" }), xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [...t2[23] || (t2[23] = [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "m9 18l6-6l-6-6" }, null, -1)])], 4))], 42, ee)) : createCommentVNode("", true), a2.showCopyButton ? (openBlock(), createElementBlock("button", { key: 1, class: normalizeClass(Jt.value), onClick: Xt, onMouseenter: t2[9] || (t2[9] = (e4) => Mt(e4)), onFocus: t2[10] || (t2[10] = (e4) => Mt(e4)), onMouseleave: bt, onBlur: bt }, [be.value ? (openBlock(), createElementBlock("svg", le, [...t2[25] || (t2[25] = [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M20 6L9 17l-5-5" }, null, -1)])])) : (openBlock(), createElementBlock("svg", te, [...t2[24] || (t2[24] = [createBaseVNode("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }, [createBaseVNode("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }), createBaseVNode("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })], -1)])]))], 34)) : createCommentVNode("", true), a2.showExportButton && de2.value ? (openBlock(), createElementBlock("button", { key: 2, class: normalizeClass(`${Jt.value} ${jt.value ? "opacity-50 cursor-not-allowed" : ""}`), disabled: jt.value, onClick: Nt, onMouseenter: t2[11] || (t2[11] = (e4) => kt(e4, unref(xe)("common.export") || "Export")), onFocus: t2[12] || (t2[12] = (e4) => kt(e4, unref(xe)("common.export") || "Export")), onMouseleave: bt, onBlur: bt }, [...t2[26] || (t2[26] = [createBaseVNode("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [createBaseVNode("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }, [createBaseVNode("path", { d: "M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), createBaseVNode("path", { d: "m7 10l5 5l5-5" })])], -1)])], 42, ne)) : createCommentVNode("", true), a2.showFullscreenButton && de2.value ? (openBlock(), createElementBlock("button", { key: 3, class: normalizeClass(`${Jt.value} ${jt.value ? "opacity-50 cursor-not-allowed" : ""}`), disabled: jt.value, onClick: Yt, onMouseenter: t2[13] || (t2[13] = (e4) => kt(e4, St.value ? unref(xe)("common.minimize") || "Minimize" : unref(xe)("common.open") || "Open")), onFocus: t2[14] || (t2[14] = (e4) => kt(e4, St.value ? unref(xe)("common.minimize") || "Minimize" : unref(xe)("common.open") || "Open")), onMouseleave: bt, onBlur: bt }, [St.value ? (openBlock(), createElementBlock("svg", ae, [...t2[28] || (t2[28] = [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "m14 10l7-7m-1 7h-6V4M3 21l7-7m-6 0h6v6" }, null, -1)])])) : (openBlock(), createElementBlock("svg", re, [...t2[27] || (t2[27] = [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6" }, null, -1)])]))], 42, oe)) : createCommentVNode("", true)]))], 2)) : createCommentVNode("", true), withDirectives(createBaseVNode("div", { ref_key: "modeContainerRef", ref: Oe }, [Re.value ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(["p-4", a2.isDark ? "bg-gray-900" : "bg-gray-50"]) }, [createBaseVNode("pre", { class: normalizeClass(["text-sm font-mono whitespace-pre-wrap", a2.isDark ? "text-gray-300" : "text-gray-700"]) }, toDisplayString(Pe.value), 3)], 2)) : (openBlock(), createElementBlock("div", ie, [a2.showZoomControls ? (openBlock(), createElementBlock("div", ue, [createBaseVNode("div", se, [createBaseVNode("button", { class: normalizeClass(["p-2 text-xs rounded transition-colors", [a2.isDark ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-200"]]), onClick: $t, onMouseenter: t2[15] || (t2[15] = (e4) => kt(e4, unref(xe)("common.zoomIn") || "Zoom in")), onFocus: t2[16] || (t2[16] = (e4) => kt(e4, unref(xe)("common.zoomIn") || "Zoom in")), onMouseleave: bt, onBlur: bt }, [...t2[29] || (t2[29] = [createBaseVNode("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [createBaseVNode("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }, [createBaseVNode("circle", { cx: "11", cy: "11", r: "8" }), createBaseVNode("path", { d: "m21 21l-4.35-4.35M11 8v6m-3-3h6" })])], -1)])], 34), createBaseVNode("button", { class: normalizeClass(["p-2 text-xs rounded transition-colors", [a2.isDark ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-200"]]), onClick: zt, onMouseenter: t2[17] || (t2[17] = (e4) => kt(e4, unref(xe)("common.zoomOut") || "Zoom out")), onFocus: t2[18] || (t2[18] = (e4) => kt(e4, unref(xe)("common.zoomOut") || "Zoom out")), onMouseleave: bt, onBlur: bt }, [...t2[30] || (t2[30] = [createBaseVNode("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [createBaseVNode("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }, [createBaseVNode("circle", { cx: "11", cy: "11", r: "8" }), createBaseVNode("path", { d: "m21 21l-4.35-4.35M8 11h6" })])], -1)])], 34), createBaseVNode("button", { class: normalizeClass(["p-2 text-xs rounded transition-colors", [a2.isDark ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-200"]]), onClick: At, onMouseenter: t2[19] || (t2[19] = (e4) => kt(e4, unref(xe)("common.resetZoom") || "Reset zoom")), onFocus: t2[20] || (t2[20] = (e4) => kt(e4, unref(xe)("common.resetZoom") || "Reset zoom")), onMouseleave: bt, onBlur: bt }, toDisplayString(Math.round(100 * Le.value)) + "% ", 35)])])) : createCommentVNode("", true), createBaseVNode("div", mergeProps({ ref_key: "mermaidContainer", ref: Te, class: ["min-h-[360px] relative transition-all duration-100 overflow-hidden block", a2.isDark ? "bg-gray-900" : "bg-gray-50"], style: { height: Ke.value } }, toHandlers(ut.value, true), { onMousedown: Ft, onMousemove: Rt, onMouseup: Ht, onMouseleave: Ht, onTouchstartPassive: Ft, onTouchmovePassive: Rt, onTouchendPassive: Ht }), [createBaseVNode("div", { "data-mermaid-wrapper": "", class: normalizeClass(["absolute inset-0 cursor-grab", { "cursor-grabbing": Ae.value }]), style: normalizeStyle(Ot.value) }, [createBaseVNode("div", { ref_key: "mermaidContent", ref: Ce, class: "_mermaid w-full text-center flex items-center justify-center min-h-full" }, null, 512)], 6)], 16), (openBlock(), createBlock(Teleport, { to: "body" }, [createBaseVNode("div", ce, [createVNode(Transition, { name: "mermaid-dialog", appear: "" }, { default: withCtx(() => [St.value ? (openBlock(), createElementBlock("div", { key: 0, class: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4", onClick: withModifiers(Lt, ["self"]) }, [createBaseVNode("div", { class: normalizeClass(["dialog-panel relative w-full h-full max-w-full max-h-full rounded shadow-lg overflow-hidden", a2.isDark ? "bg-gray-900" : "bg-white"]) }, [createBaseVNode("div", ve, [createBaseVNode("button", { class: normalizeClass(["p-2 text-xs rounded transition-colors", [a2.isDark ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-200"]]), onClick: $t }, [...t2[31] || (t2[31] = [createBaseVNode("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [createBaseVNode("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }, [createBaseVNode("circle", { cx: "11", cy: "11", r: "8" }), createBaseVNode("path", { d: "m21 21l-4.35-4.35M11 8v6m-3-3h6" })])], -1)])], 2), createBaseVNode("button", { class: normalizeClass(["p-2 text-xs rounded transition-colors", [a2.isDark ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-200"]]), onClick: zt }, [...t2[32] || (t2[32] = [createBaseVNode("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [createBaseVNode("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }, [createBaseVNode("circle", { cx: "11", cy: "11", r: "8" }), createBaseVNode("path", { d: "m21 21l-4.35-4.35M8 11h6" })])], -1)])], 2), createBaseVNode("button", { class: normalizeClass(["p-2 text-xs rounded transition-colors", [a2.isDark ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-200"]]), onClick: At }, toDisplayString(Math.round(100 * Le.value)) + "% ", 3), createBaseVNode("button", { class: normalizeClass(["inline-flex items-center justify-center p-2 rounded transition-colors", [a2.isDark ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-200"]]), onClick: Lt }, [...t2[33] || (t2[33] = [createBaseVNode("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M18 6L6 18M6 6l12 12" })], -1)])], 2)]), createBaseVNode("div", mergeProps({ ref_key: "modalContent", ref: De, class: "w-full h-full flex items-center justify-center p-4 overflow-hidden" }, toHandlers(ut.value, true), { onMousedown: Ft, onMousemove: Rt, onMouseup: Ht, onMouseleave: Ht, onTouchstartPassive: Ft, onTouchmovePassive: Rt, onTouchendPassive: Ht }), null, 16)], 2)])) : createCommentVNode("", true)]), _: 1 })])]))]))], 512), [[vShow, !Me.value]])], 2));
} }), [["__scopeId", "data-v-51607788"]]);
de.install = (e2) => {
  e2.component(de.__name, de);
};
export {
  de as default
};
