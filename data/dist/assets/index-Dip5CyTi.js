import { c as createHighlighter, S as ShikiError, b as addClassToHast, d as applyColorReplacements, f as bundledLanguages, g as bundledLanguagesAlias, h as bundledLanguagesBase, i as bundledLanguagesInfo, j as bundledThemes, k as bundledThemesInfo, l as createBundledHighlighter, m as createHighlighterCore, o as createOnigurumaEngine, p as createPositionConverter, q as createShikiInternal, s as createShikiInternalSync, t as createSingletonShorthands, u as flatTokenVariants, v as getSingletonHighlighter, w as getTokenStyleObject, x as guessEmbeddedLanguages, y as hastToHtml, z as isNoneTheme, A as isPlainLang, B as isSpecialLang, C as isSpecialTheme, D as loadWasm, E as makeSingletonHighlighter, F as normalizeGetter, G as normalizeTheme, H as resolveColorReplacements, I as splitLines, J as splitToken, K as splitTokens, L as stringifyTokenStyle, M as toArray, N as tokenizeAnsiWithTheme, O as tokenizeWithTheme, P as tokensToHast, Q as transformerDecorations, R as warnDeprecated } from "./shiki-DUWbmqsn.js";
import { a4 as __vitePreload } from "./index-IOsZtj6J.js";
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ShikiError,
  addClassToHast,
  applyColorReplacements,
  bundledLanguages,
  bundledLanguagesAlias,
  bundledLanguagesBase,
  bundledLanguagesInfo,
  bundledThemes,
  bundledThemesInfo,
  createBundledHighlighter,
  createHighlighter,
  createHighlighterCore,
  createOnigurumaEngine,
  createPositionConverter,
  createShikiInternal,
  createShikiInternalSync,
  createSingletonShorthands,
  flatTokenVariants,
  getSingletonHighlighter,
  getTokenStyleObject,
  guessEmbeddedLanguages,
  hastToHtml,
  isNoneTheme,
  isPlainLang,
  isSpecialLang,
  isSpecialTheme,
  loadWasm,
  makeSingletonHighlighter,
  normalizeGetter,
  normalizeTheme,
  resolveColorReplacements,
  splitLines,
  splitToken,
  splitTokens,
  stringifyTokenStyle,
  toArray,
  tokenizeAnsiWithTheme,
  tokenizeWithTheme,
  tokensToHast,
  transformerDecorations,
  warnDeprecated
}, Symbol.toStringTag, { value: "Module" }));
const defaultLanguages = [
  "jsx",
  "tsx",
  "vue",
  "csharp",
  "python",
  "java",
  "c",
  "cpp",
  "rust",
  "go",
  "powershell",
  "sql",
  "json",
  "html",
  "javascript",
  "typescript",
  "css",
  "markdown",
  "xml",
  "yaml",
  "toml",
  "dockerfile",
  "kotlin",
  "objective-c",
  "objective-cpp",
  "php",
  "ruby",
  "scala",
  "svelte",
  "swift",
  "erlang",
  "angular-html",
  "angular-ts",
  "dart",
  "lua",
  "mermaid",
  "cmake",
  "nginx"
];
const defaultThemes = ["vitesse-dark", "vitesse-light"];
let highlighter = null;
let highlighterPromise = null;
const pendingLangs = /* @__PURE__ */ new Set();
let pendingThemes = [];
let applyPromise = Promise.resolve();
function addPendingLangs(langs) {
  for (const l of langs) pendingLangs.add(l);
}
function addPendingThemes(themes) {
  const existingIds = /* @__PURE__ */ new Set();
  for (const t of pendingThemes) if (typeof t === "string") existingIds.add(t);
  else if (t && typeof t.name === "string") existingIds.add(t.name);
  for (const t of themes) if (typeof t === "string") {
    if (!existingIds.has(t)) {
      existingIds.add(t);
      pendingThemes.push(t);
    }
  } else if (t && typeof t.name === "string") {
    const id = t.name;
    if (!existingIds.has(id)) {
      existingIds.add(id);
      pendingThemes.push(t);
    }
  } else pendingThemes.push(t);
}
async function applyPending(highlighter$1) {
  applyPromise = applyPromise.then(async () => {
    const anyHl = highlighter$1;
    const langs = Array.from(pendingLangs);
    const themes = pendingThemes.slice();
    pendingLangs.clear();
    pendingThemes = [];
    if (langs.length > 0 && typeof anyHl.loadLanguage === "function") for (const l of langs) await anyHl.loadLanguage(l);
    if (themes.length > 0 && typeof anyHl.loadTheme === "function") for (const t of themes) await anyHl.loadTheme(t);
  });
  return applyPromise;
}
async function registerHighlight(options = {}) {
  const langs = !options.langs || options.langs.length === 0 ? defaultLanguages : options.langs;
  const themes = !options.themes || options.themes.length === 0 ? defaultThemes : options.themes;
  addPendingLangs(langs);
  addPendingThemes(themes);
  if (highlighter) {
    await applyPending(highlighter);
    return highlighter;
  }
  if (!highlighterPromise) highlighterPromise = (async () => {
    const { createHighlighter: createHighlighter2 } = await __vitePreload(async () => {
      const { createHighlighter: createHighlighter3 } = await Promise.resolve().then(() => index);
      return { createHighlighter: createHighlighter3 };
    }, true ? void 0 : void 0);
    const h$1 = await createHighlighter2({
      themes: pendingThemes.length > 0 ? pendingThemes : defaultThemes,
      langs: pendingLangs.size > 0 ? Array.from(pendingLangs) : defaultLanguages
    });
    highlighter = h$1;
    await applyPending(h$1);
    return h$1;
  })().finally(() => {
    highlighterPromise = null;
  });
  const h = await highlighterPromise;
  await applyPending(h);
  return h;
}
function disposeHighlighter() {
  highlighter = null;
  highlighterPromise = null;
  pendingLangs.clear();
  pendingThemes = [];
  applyPromise = Promise.resolve();
}
function escapeHtml$1(str) {
  return str.replace(/\r/g, "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function fontStyleToCss$1(style) {
  if (!style || style === 0) return "";
  const parts = [];
  if (style & 1) parts.push("font-style: italic;");
  if (style & 2) parts.push("font-weight: 600;");
  if (style & 4) parts.push("text-decoration: underline; text-underline-offset: 0.15em;");
  return parts.join(" ");
}
function renderCodeWithTokens(highlighter$1, code, opts) {
  var _a, _b;
  const { lang, theme, preClass = "shiki", codeClass = "", lineClass = "line", showLineNumbers = false, startingLineNumber = 1 } = opts;
  let lines;
  const anyHl = highlighter$1;
  if (typeof anyHl.codeToThemedTokens === "function") lines = anyHl.codeToThemedTokens(code, lang, theme);
  else if (typeof anyHl.codeToTokens === "function") lines = anyHl.codeToTokens(code, {
    lang,
    theme
  }).tokens;
  else throw new TypeError("Highlighter does not support token APIs: codeToThemedTokens/codeToTokens");
  {
    const expected = code.replace(/\r\n/g, "\n").split("\n").length;
    if (lines.length < expected) lines = lines.concat(Array.from({ length: expected - lines.length }, () => []));
  }
  let bg;
  try {
    bg = (_b = (_a = highlighter$1.getTheme) == null ? void 0 : _a.call(highlighter$1, theme)) == null ? void 0 : _b.bg;
  } catch {
  }
  let lineNumber = startingLineNumber;
  const lineHtml = lines.map((line) => {
    const tokensHtml = line.map((t) => {
      const style = `${t.color ? `color: ${t.color};` : ""}${fontStyleToCss$1(t.fontStyle)}`;
      return `<span${style ? ` style="${style}"` : ""}>${escapeHtml$1(t.content)}</span>`;
    }).join("");
    return `<span class="${lineClass}">${showLineNumbers ? `<span class="line-number" data-line="${lineNumber++}"></span>` : ""}${tokensHtml}</span>`;
  }).join("\n");
  return `<pre class="${preClass}"${bg ? ` style="background-color: ${bg};"` : ""}><code${codeClass ? ` class="${codeClass}"` : ""}>${lineHtml}</code></pre>`;
}
function tokensApi(highlighter$1) {
  const anyHl = highlighter$1;
  if (typeof anyHl.codeToThemedTokens === "function") return (code, lang, theme) => anyHl.codeToThemedTokens(code, lang, theme);
  if (typeof anyHl.codeToTokens === "function") return (code, lang, theme) => {
    return anyHl.codeToTokens(code, {
      lang,
      theme
    }).tokens;
  };
  throw new Error("Highlighter does not support token APIs: codeToThemedTokens/codeToTokens");
}
function fontStyleToCss(style) {
  if (!style || style === 0) return "";
  const parts = [];
  if (style & 1) parts.push("font-style: italic;");
  if (style & 2) parts.push("font-weight: 600;");
  if (style & 4) parts.push("text-decoration: underline; text-underline-offset: 0.15em;");
  return parts.join(" ");
}
function escapeHtml(str) {
  return str.replace(/\r/g, "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function lineInnerHtml(tokens, showLineNumbers, lineNumber) {
  const tokensHtml = tokens.map((t) => {
    const style = `${t.color ? `color: ${t.color};` : ""}${fontStyleToCss(t.fontStyle)}`;
    return `<span${style ? ` style="${style}"` : ""}>${escapeHtml(t.content)}</span>`;
  }).join("");
  return `${showLineNumbers && typeof lineNumber === "number" ? `<span class="line-number" data-line="${lineNumber}"></span>` : ""}${tokensHtml}`;
}
function createLineElement(tokens, showLineNumbers, lineNumber, lineClass) {
  const span = document.createElement("span");
  span.className = lineClass;
  if (showLineNumbers && typeof lineNumber === "number") {
    const ln = document.createElement("span");
    ln.className = "line-number";
    ln.dataset.line = String(lineNumber);
    span.appendChild(ln);
  }
  let i = 0;
  while (i < tokens.length) {
    const t = tokens[i];
    const style = `${t.color ? `color: ${t.color};` : ""}${fontStyleToCss(t.fontStyle)}`;
    let content = t.content;
    i++;
    while (i < tokens.length) {
      const t2 = tokens[i];
      if (`${t2.color ? `color: ${t2.color};` : ""}${fontStyleToCss(t2.fontStyle)}` !== style) break;
      content += t2.content;
      i++;
    }
    const tspan = document.createElement("span");
    if (style) tspan.setAttribute("style", style);
    tspan.textContent = content;
    span.appendChild(tspan);
  }
  return span;
}
function updateCodeTokensIncremental(container, highlighter$1, code, opts) {
  var _a, _b, _c, _d, _e;
  if (!container) return "noop";
  const { lang, theme, preClass = "shiki", codeClass = "", lineClass = "line", showLineNumbers = false, startingLineNumber = 1 } = opts;
  const tokensFor = tokensApi(highlighter$1);
  const codeEl = container.querySelector("code");
  if (!codeEl) {
    container.innerHTML = renderCodeWithTokens(highlighter$1, code, {
      lang,
      theme,
      preClass,
      codeClass,
      lineClass,
      showLineNumbers,
      startingLineNumber
    });
    (_a = opts.onResult) == null ? void 0 : _a.call(opts, "full");
    return "full";
  }
  const oldLines = codeEl.querySelectorAll(`.${lineClass}`);
  let tokenLines = tokensFor(code, lang, theme);
  {
    const expected = code.replace(/\r\n/g, "\n").split("\n").length;
    if (tokenLines.length < expected) {
      const pad = expected - tokenLines.length;
      tokenLines = tokenLines.concat(Array.from({ length: pad }, () => []));
    }
  }
  const newLen = tokenLines.length;
  const oldLen = oldLines.length;
  let divergeAt = -1;
  const minLen = Math.min(oldLen, newLen);
  let currentLineNumber = startingLineNumber;
  for (let idx = 0; idx < minLen; idx++) {
    const newInner = lineInnerHtml(tokenLines[idx], showLineNumbers, showLineNumbers ? currentLineNumber : void 0);
    if (oldLines[idx].innerHTML !== newInner) {
      divergeAt = idx;
      break;
    }
    currentLineNumber++;
  }
  if (divergeAt === -1) {
    if (newLen > oldLen) {
      const frag = document.createDocumentFragment();
      let ln = startingLineNumber + oldLen;
      for (let j = oldLen; j < newLen; j++) {
        frag.appendChild(document.createTextNode("\n"));
        const span = createLineElement(tokenLines[j], showLineNumbers, showLineNumbers ? ln : void 0, lineClass);
        frag.appendChild(span);
        ln++;
      }
      codeEl.appendChild(frag);
      (_b = opts.onResult) == null ? void 0 : _b.call(opts, "incremental");
      return "incremental";
    }
    (_c = opts.onResult) == null ? void 0 : _c.call(opts, "noop");
    return "noop";
  }
  if (divergeAt >= oldLen - 1) {
    const newLineEl = createLineElement(tokenLines[divergeAt], showLineNumbers, showLineNumbers ? startingLineNumber + divergeAt : void 0, lineClass);
    oldLines[divergeAt].innerHTML = "";
    while (newLineEl.firstChild) oldLines[divergeAt].appendChild(newLineEl.firstChild);
    if (newLen > oldLen) {
      const frag = document.createDocumentFragment();
      let ln = startingLineNumber + oldLen;
      for (let j = oldLen; j < newLen; j++) {
        frag.appendChild(document.createTextNode("\n"));
        const span = createLineElement(tokenLines[j], showLineNumbers, showLineNumbers ? ln : void 0, lineClass);
        frag.appendChild(span);
        ln++;
      }
      codeEl.appendChild(frag);
    }
    (_d = opts.onResult) == null ? void 0 : _d.call(opts, "incremental");
    return "incremental";
  }
  container.innerHTML = renderCodeWithTokens(highlighter$1, code, {
    lang,
    theme,
    preClass,
    codeClass,
    lineClass,
    showLineNumbers,
    startingLineNumber
  });
  (_e = opts.onResult) == null ? void 0 : _e.call(opts, "full");
  return "full";
}
function createTokenIncrementalUpdater(container, highlighter$1, opts) {
  let alive = true;
  let target = container;
  return {
    update: (code) => {
      if (!alive) return "noop";
      if (!target) return "noop";
      return updateCodeTokensIncremental(target, highlighter$1, code, opts);
    },
    reset: () => {
      if (!alive || !target) return;
      target.innerHTML = "";
    },
    dispose: () => {
      alive = false;
      target = null;
    }
  };
}
var TokenUpdateScheduler = class {
  constructor() {
    this.queue = [];
    this.byContainer = /* @__PURE__ */ new WeakMap();
    this.visible = /* @__PURE__ */ new WeakMap();
    this.io = null;
    this.handle = null;
    this.nextId = 1;
    try {
      this.io = new IntersectionObserver((entries) => {
        for (const e of entries) this.visible.set(e.target, e.isIntersecting);
      }, {
        root: null,
        threshold: 0
      });
    } catch {
      this.io = null;
    }
  }
  schedule(container, highlighter$1, code, opts) {
    var _a;
    const prev = this.byContainer.get(container);
    if (prev) {
      prev.code = code;
      prev.highlighter = highlighter$1;
      prev.opts = opts;
      return prev.id;
    }
    const task = {
      id: this.nextId++,
      container,
      highlighter: highlighter$1,
      code,
      opts
    };
    {
      const norm = code.replace(/\r\n/g, "\n");
      const lineCount = 1 + (((_a = norm.match(/\n/g)) == null ? void 0 : _a.length) ?? 0);
      const estTokenSpans = Math.ceil(norm.length / 6);
      task.estNodes = Math.min(8e3, lineCount + estTokenSpans);
    }
    this.queue.push(task);
    this.byContainer.set(container, task);
    if (this.io) this.io.observe(container);
    this.ensureProcessing();
    return task.id;
  }
  ensureProcessing() {
    if (this.handle != null) return;
    this.handle = (window.requestIdleCallback || function(cb) {
      return setTimeout(() => cb({
        timeRemaining: () => 50,
        didTimeout: true
      }), 50);
    })((deadline) => this.process(deadline));
  }
  process(deadline) {
    var _a, _b, _c, _d, _e, _f;
    this.handle = null;
    const timeRem = typeof (deadline == null ? void 0 : deadline.timeRemaining) === "function" ? deadline.timeRemaining() : 50;
    const allowedNodes = Math.min(2e3, Math.max(100, Math.floor(timeRem * 6)));
    let nodesProcessed = 0;
    while (this.queue.length) {
      if (nodesProcessed >= allowedNodes) break;
      let idx = this.queue.findIndex((t) => this.visible.get(t.container) === true);
      if (idx === -1) idx = 0;
      const task = this.queue.splice(idx, 1)[0];
      this.byContainer.delete(task.container);
      if (typeof task.estNodes === "number" && nodesProcessed + task.estNodes > allowedNodes) if (nodesProcessed === 0) ;
      else {
        this.queue.push(task);
        this.byContainer.set(task.container, task);
        break;
      }
      try {
        const res = updateCodeTokensIncremental(task.container, task.highlighter, task.code, task.opts);
        (_b = (_a = task.opts).onResult) == null ? void 0 : _b.call(_a, res);
        if (typeof task.estNodes === "number") nodesProcessed += task.estNodes;
        else nodesProcessed += 50;
      } catch {
        try {
          task.container.innerHTML = renderCodeWithTokens(task.highlighter, task.code, {
            lang: task.opts.lang,
            theme: task.opts.theme,
            preClass: task.opts.preClass,
            codeClass: task.opts.codeClass,
            lineClass: task.opts.lineClass,
            showLineNumbers: task.opts.showLineNumbers,
            startingLineNumber: task.opts.startingLineNumber
          });
          (_d = (_c = task.opts).onResult) == null ? void 0 : _d.call(_c, "full");
        } catch {
          (_f = (_e = task.opts).onResult) == null ? void 0 : _f.call(_e, "noop");
        }
      }
      if (typeof (deadline == null ? void 0 : deadline.timeRemaining) === "function" && deadline.timeRemaining() < 6) break;
    }
    if (this.queue.length) this.ensureProcessing();
  }
  cancelFor(container) {
    const prev = this.byContainer.get(container);
    if (!prev) return;
    this.byContainer.delete(container);
    const idx = this.queue.findIndex((t) => t.id === prev.id);
    if (idx !== -1) this.queue.splice(idx, 1);
    if (this.io) this.io.unobserve(container);
    this.visible.delete(container);
  }
};
const globalTokenUpdateScheduler = new TokenUpdateScheduler();
function createScheduledTokenIncrementalUpdater(container, highlighter$1, opts) {
  let alive = true;
  let observed = false;
  return {
    update: (code) => {
      if (!alive) return "noop";
      if (!container) return "noop";
      globalTokenUpdateScheduler.schedule(container, highlighter$1, code, opts);
      observed = true;
      return "noop";
    },
    reset: () => {
      if (!alive || !container) return;
      globalTokenUpdateScheduler.cancelFor(container);
      container.innerHTML = "";
    },
    dispose: () => {
      alive = false;
      if (observed && container) globalTokenUpdateScheduler.cancelFor(container);
    }
  };
}
const queue = [];
let rafId = null;
let paused = false;
let TIME_BUDGET = 8;
function setTimeBudget(ms) {
  if (typeof ms === "number" && ms >= 0) TIME_BUDGET = ms;
}
function getTimeBudget() {
  return TIME_BUDGET;
}
function isPaused() {
  return paused;
}
function getQueueLength() {
  return queue.length;
}
function pause() {
  paused = true;
}
function resume() {
  if (!paused) return;
  paused = false;
  ensureFrame();
}
function ensureFrame() {
  if (rafId != null) return;
  if (paused) return;
  rafId = requestAnimationFrame(runFrame);
}
function runFrame() {
  rafId = null;
  const start = performance.now();
  while (queue.length > 0) {
    const job = queue.shift();
    try {
      job();
    } catch (e) {
      console.error("render-scheduler job error", e);
    }
    if (performance.now() - start >= TIME_BUDGET) break;
  }
  if (queue.length > 0) ensureFrame();
}
function scheduleRenderJob(job, options) {
  if (((options == null ? void 0 : options.priority) ?? "normal") === "high") queue.unshift(job);
  else queue.push(job);
  ensureFrame();
  let cancelled = false;
  return () => {
    if (cancelled) return;
    cancelled = true;
    const idx = queue.indexOf(job);
    if (idx >= 0) queue.splice(idx, 1);
  };
}
function runImmediate(job) {
  job();
}
function drain() {
  if (rafId != null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  while (queue.length > 0) {
    const job = queue.shift();
    try {
      job();
    } catch {
    }
  }
}
function clearAll() {
  queue.length = 0;
  if (rafId != null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}
function restoreWithVisibilityPriority(items, opts = {}) {
  const batchSize = Math.max(1, opts.batchSize ?? 6);
  const staggerMs = Math.max(1, opts.staggerMs ?? 30);
  const visible = [];
  const hidden = [];
  for (const it of items) {
    const rect = it.el.getBoundingClientRect();
    const ih = globalThis.innerHeight ?? 0;
    if (rect.bottom >= 0 && rect.top <= ih) visible.push(it);
    else hidden.push(it);
  }
  pause();
  for (const v of visible) scheduleRenderJob(() => {
    try {
      v.render();
    } catch {
    }
  }, { priority: "high" });
  resume();
  if (opts.drainVisible) drain();
  let cancelled = false;
  const timers = [];
  for (let i = 0; i < hidden.length; i += batchSize) {
    const batch = hidden.slice(i, i + batchSize);
    const delay = Math.floor(i / batchSize) * staggerMs;
    const t = setTimeout(() => {
      if (cancelled) return;
      for (const b of batch) scheduleRenderJob(() => {
        try {
          b.render();
        } catch {
        }
      }, { priority: "normal" });
    }, delay);
    timers.push(t);
  }
  return () => {
    cancelled = true;
    for (const t of timers) clearTimeout(t);
  };
}
const callbacks = /* @__PURE__ */ new WeakMap();
let observer = null;
function ensureObserver() {
  if (observer) return observer;
  if (typeof window === "undefined" || !window.IntersectionObserver) return null;
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const cb = callbacks.get(entry.target);
      if (cb) try {
        cb(!!entry.isIntersecting, entry);
      } catch {
      }
    }
  }, {
    root: null,
    threshold: 0
  });
  return observer;
}
function observeElement(el, cb) {
  const obs = ensureObserver();
  callbacks.set(el, cb);
  if (obs) obs.observe(el);
  return () => {
    callbacks.delete(el);
    if (obs) obs.unobserve(el);
  };
}
function createShikiStreamRenderer(container, options) {
  let currentCode = "";
  let currentLang = options.lang;
  let currentTheme = options.theme ?? "vitesse-dark";
  let highlighter$1 = null;
  let updater = null;
  const useRaf = options.scheduleInRaf ?? true;
  let scheduled = false;
  let rafId$1 = null;
  let disposed = false;
  let unregisterObserver = null;
  let isVisible = false;
  let opChain = Promise.resolve();
  const cancelFrame = () => {
    if (rafId$1 != null) {
      cancelAnimationFrame(rafId$1);
      rafId$1 = null;
    }
  };
  const ensureHighlighter = async () => {
    if (disposed) return;
    highlighter$1 = await registerHighlight({
      langs: options.langs,
      themes: options.themes
    });
  };
  const ensureThemeLoaded = async (theme) => {
    if (!theme || disposed) return;
    if (!highlighter$1) await ensureHighlighter();
    if (disposed || !highlighter$1) return;
    const anyHl = highlighter$1;
    if (typeof anyHl.loadTheme === "function") await anyHl.loadTheme(theme);
  };
  const enqueue = (task) => {
    const next = opChain.then(task, task);
    opChain = next.then(() => void 0, () => void 0);
    return next;
  };
  if (typeof window !== "undefined" && container) unregisterObserver = observeElement(container, (v) => {
    isVisible = v;
  });
  if (typeof options.timeBudget === "number" && options.timeBudget >= 0) setTimeBudget(options.timeBudget);
  const reinitUpdater = () => {
    updater == null ? void 0 : updater.dispose();
    updater = createScheduledTokenIncrementalUpdater(container, highlighter$1, {
      lang: currentLang ?? "plaintext",
      theme: currentTheme
    });
  };
  const scheduleRender = () => {
    if (disposed) return;
    if (scheduled) return;
    if (!useRaf) {
      if (!updater) return;
      updater.update(currentCode);
      return;
    }
    if (scheduled) return;
    scheduled = true;
    scheduleRenderJob(() => {
      scheduled = false;
      if (!updater) return;
      updater.update(currentCode);
    }, { priority: isVisible ? "high" : "normal" });
    rafId$1 = null;
  };
  const updateCode = (code, lang) => enqueue(async () => {
    if (disposed) return;
    const nextLang = lang ?? currentLang;
    const langChanged = nextLang !== currentLang;
    currentCode = code;
    if (!highlighter$1 || langChanged) {
      currentLang = nextLang;
      await ensureHighlighter();
      await ensureThemeLoaded(currentTheme);
      reinitUpdater();
    } else if (!updater) reinitUpdater();
    scheduleRender();
  });
  const setTheme = (theme) => enqueue(async () => {
    if (disposed) return;
    if (!theme || theme === currentTheme) return;
    await ensureThemeLoaded(theme);
    if (disposed) return;
    currentTheme = theme;
    reinitUpdater();
    scheduleRender();
  });
  const dispose = () => {
    updater == null ? void 0 : updater.dispose();
    updater = null;
    if (unregisterObserver) {
      unregisterObserver();
      unregisterObserver = null;
    }
    disposed = true;
    cancelFrame();
  };
  const getState = () => ({
    code: currentCode,
    lang: currentLang,
    theme: currentTheme
  });
  return {
    updateCode,
    setTheme,
    dispose,
    getState
  };
}
export {
  clearAll,
  createScheduledTokenIncrementalUpdater,
  createShikiStreamRenderer,
  createTokenIncrementalUpdater,
  defaultLanguages,
  defaultThemes,
  disposeHighlighter,
  drain,
  getQueueLength,
  getTimeBudget,
  isPaused,
  pause,
  registerHighlight,
  renderCodeWithTokens,
  restoreWithVisibilityPriority,
  resume,
  runImmediate,
  scheduleRenderJob,
  setTimeBudget,
  updateCodeTokensIncremental
};
