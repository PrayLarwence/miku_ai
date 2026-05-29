const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Tooltip-Q0pzxBIY.js","assets/index-BCHR8lhs.js","assets/index-ByZ49Wrc.css","assets/shiki-BHxvu0ic.js","assets/vue-i18n-CwKsPsj-.js","assets/mhchem-1oKGqzT0.js","assets/index2-tU5aAM2_.js","assets/index3-BLt3mrKL.js","assets/index4-Bl9pzqoq.js","assets/safeRaf-DMX2vB7B.js","assets/index5-D-eY5_X1.js","assets/index6-CMxqCNon.js","assets/index-DlNZ4R_t.js","assets/mermaid-JmFWKzEZ.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { G as shallowRef, L as ref, by as defineAsyncComponent, D as defineComponent, H as computed, bd as reactive, J as watch, R as onBeforeUnmount, o as openBlock, c as createElementBlock, U as normalizeStyle, i as createCommentVNode, F as Fragment, r as renderList, h as createBlock, w as withCtx, aH as resolveDynamicComponent, a2 as mergeProps, X as Transition, T as normalizeClass, a as createBaseVNode, t as toDisplayString, S as withDirectives, W as vShow, bz as withMemo, M as onMounted, Z as renderSlot, $ as unref, N as nextTick, a4 as __vitePreload, b as createVNode, bA as useAttrs, bB as isMemoSame, E as h, bC as createApp, O as inject, bh as readonly, bD as markRaw, bk as provide, _ as _export_sfc, u as useModuleI18n, I as onUnmounted, d as createTextVNode, l as VIcon, ap as pushScopeId, aq as popScopeId, an as withKeys, a0 as withModifiers, bE as useSlots, g as VChip, av as createSlots, aM as normalizeProps, aN as guardReactiveProps, B as axios } from "./index-BCHR8lhs.js";
import { e as ensureShikiLanguages, r as renderShikiCode, a as escapeHtml$2 } from "./shiki-BHxvu0ic.js";
var __create = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export$1 = (all) => {
  let target = {};
  for (var name in all) __defProp$1(target, name, {
    get: all[name],
    enumerable: true
  });
  return target;
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i2 = 0, n2 = keys.length, key; i2 < n2; i2++) {
    key = keys[i2];
    if (!__hasOwnProp.call(to2, key) && key !== except) __defProp$1(to2, key, {
      get: ((k) => from[k]).bind(null, key),
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(__defProp$1(target, "default", {
  value: mod,
  enumerable: true
}), mod));
function render_footnote_anchor_name(tokens, idx, options, env) {
  const n2 = Number(tokens[idx].meta.id + 1).toString();
  let prefix = "";
  if (typeof env.docId === "string") prefix = `-${env.docId}-`;
  return prefix + n2;
}
function render_footnote_caption(tokens, idx) {
  let n2 = Number(tokens[idx].meta.id + 1).toString();
  if (tokens[idx].meta.subId > 0) n2 += `:${tokens[idx].meta.subId}`;
  return `[${n2}]`;
}
function render_footnote_ref(tokens, idx, options, env, slf) {
  const id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
  const caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
  let refid = id;
  if (tokens[idx].meta.subId > 0) refid += `:${tokens[idx].meta.subId}`;
  return `<sup class="footnote-ref"><a href="#fn${id}" id="fnref${refid}">${caption}</a></sup>`;
}
function render_footnote_block_open(tokens, idx, options) {
  return (options.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n') + '<section class="footnotes">\n<ol class="footnotes-list">\n';
}
function render_footnote_block_close() {
  return "</ol>\n</section>\n";
}
function render_footnote_open(tokens, idx, options, env, slf) {
  let id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
  if (tokens[idx].meta.subId > 0) id += `:${tokens[idx].meta.subId}`;
  return `<li id="fn${id}" class="footnote-item">`;
}
function render_footnote_close() {
  return "</li>\n";
}
function render_footnote_anchor(tokens, idx, options, env, slf) {
  let id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
  if (tokens[idx].meta.subId > 0) id += `:${tokens[idx].meta.subId}`;
  return ` <a href="#fnref${id}" class="footnote-backref">↩︎</a>`;
}
function footnote_plugin(md) {
  const parseLinkLabel$1 = md.helpers.parseLinkLabel;
  const isSpace$8 = md.utils.isSpace;
  md.renderer.rules.footnote_ref = render_footnote_ref;
  md.renderer.rules.footnote_block_open = render_footnote_block_open;
  md.renderer.rules.footnote_block_close = render_footnote_block_close;
  md.renderer.rules.footnote_open = render_footnote_open;
  md.renderer.rules.footnote_close = render_footnote_close;
  md.renderer.rules.footnote_anchor = render_footnote_anchor;
  md.renderer.rules.footnote_caption = render_footnote_caption;
  md.renderer.rules.footnote_anchor_name = render_footnote_anchor_name;
  function footnote_def(state, startLine, endLine, silent) {
    const start = state.bMarks[startLine] + state.tShift[startLine];
    const max = state.eMarks[startLine];
    if (start + 4 > max) return false;
    if (state.src.charCodeAt(start) !== 91) return false;
    if (state.src.charCodeAt(start + 1) !== 94) return false;
    let pos;
    for (pos = start + 2; pos < max; pos++) {
      if (state.src.charCodeAt(pos) === 32) return false;
      if (state.src.charCodeAt(pos) === 93) break;
    }
    if (pos === start + 2) return false;
    if (pos + 1 >= max || state.src.charCodeAt(++pos) !== 58) return false;
    if (silent) return true;
    pos++;
    if (!state.env.footnotes) state.env.footnotes = {};
    if (!state.env.footnotes.refs) state.env.footnotes.refs = {};
    const label = state.src.slice(start + 2, pos - 2);
    state.env.footnotes.refs[`:${label}`] = -1;
    const token_fref_o = new state.Token("footnote_reference_open", "", 1);
    token_fref_o.meta = { label };
    token_fref_o.level = state.level++;
    state.tokens.push(token_fref_o);
    const oldBMark = state.bMarks[startLine];
    const oldTShift = state.tShift[startLine];
    const oldSCount = state.sCount[startLine];
    const oldParentType = state.parentType;
    const posAfterColon = pos;
    const initial = state.sCount[startLine] + pos - (state.bMarks[startLine] + state.tShift[startLine]);
    let offset = initial;
    while (pos < max) {
      const ch = state.src.charCodeAt(pos);
      if (isSpace$8(ch)) if (ch === 9) offset += 4 - offset % 4;
      else offset++;
      else break;
      pos++;
    }
    state.tShift[startLine] = pos - posAfterColon;
    state.sCount[startLine] = offset - initial;
    state.bMarks[startLine] = posAfterColon;
    state.blkIndent += 4;
    state.parentType = "footnote";
    if (state.sCount[startLine] < state.blkIndent) state.sCount[startLine] += state.blkIndent;
    state.md.block.tokenize(state, startLine, endLine, true);
    state.parentType = oldParentType;
    state.blkIndent -= 4;
    state.tShift[startLine] = oldTShift;
    state.sCount[startLine] = oldSCount;
    state.bMarks[startLine] = oldBMark;
    const token_fref_c = new state.Token("footnote_reference_close", "", -1);
    token_fref_c.level = --state.level;
    state.tokens.push(token_fref_c);
    return true;
  }
  function footnote_inline(state, silent) {
    const max = state.posMax;
    const start = state.pos;
    if (start + 2 >= max) return false;
    if (state.src.charCodeAt(start) !== 94) return false;
    if (state.src.charCodeAt(start + 1) !== 91) return false;
    const labelStart = start + 2;
    const labelEnd = parseLinkLabel$1(state, start + 1);
    if (labelEnd < 0) return false;
    if (!silent) {
      if (!state.env.footnotes) state.env.footnotes = {};
      if (!state.env.footnotes.list) state.env.footnotes.list = [];
      const footnoteId = state.env.footnotes.list.length;
      const tokens = [];
      state.md.inline.parse(state.src.slice(labelStart, labelEnd), state.md, state.env, tokens);
      const token = state.push("footnote_ref", "", 0);
      token.meta = { id: footnoteId };
      state.env.footnotes.list[footnoteId] = {
        content: state.src.slice(labelStart, labelEnd),
        tokens
      };
    }
    state.pos = labelEnd + 1;
    state.posMax = max;
    return true;
  }
  function footnote_ref(state, silent) {
    const max = state.posMax;
    const start = state.pos;
    if (start + 3 > max) return false;
    if (!state.env.footnotes || !state.env.footnotes.refs) return false;
    if (state.src.charCodeAt(start) !== 91) return false;
    if (state.src.charCodeAt(start + 1) !== 94) return false;
    let pos;
    for (pos = start + 2; pos < max; pos++) {
      if (state.src.charCodeAt(pos) === 32) return false;
      if (state.src.charCodeAt(pos) === 10) return false;
      if (state.src.charCodeAt(pos) === 93) break;
    }
    if (pos === start + 2) return false;
    if (pos >= max) return false;
    pos++;
    const label = state.src.slice(start + 2, pos - 1);
    if (typeof state.env.footnotes.refs[`:${label}`] === "undefined") return false;
    if (!silent) {
      if (!state.env.footnotes.list) state.env.footnotes.list = [];
      let footnoteId;
      if (state.env.footnotes.refs[`:${label}`] < 0) {
        footnoteId = state.env.footnotes.list.length;
        state.env.footnotes.list[footnoteId] = {
          label,
          count: 0
        };
        state.env.footnotes.refs[`:${label}`] = footnoteId;
      } else footnoteId = state.env.footnotes.refs[`:${label}`];
      const footnoteSubId = state.env.footnotes.list[footnoteId].count;
      state.env.footnotes.list[footnoteId].count++;
      const token = state.push("footnote_ref", "", 0);
      token.meta = {
        id: footnoteId,
        subId: footnoteSubId,
        label
      };
    }
    state.pos = pos;
    state.posMax = max;
    return true;
  }
  function footnote_tail(state) {
    let tokens;
    let current;
    let currentLabel;
    let insideRef = false;
    const refTokens = {};
    if (!state.env.footnotes) return;
    state.tokens = state.tokens.filter(function(tok) {
      if (tok.type === "footnote_reference_open") {
        insideRef = true;
        current = [];
        currentLabel = tok.meta.label;
        return false;
      }
      if (tok.type === "footnote_reference_close") {
        insideRef = false;
        refTokens[":" + currentLabel] = current;
        return false;
      }
      if (insideRef) current.push(tok);
      return !insideRef;
    });
    if (!state.env.footnotes.list) return;
    const list$1 = state.env.footnotes.list;
    state.tokens.push(new state.Token("footnote_block_open", "", 1));
    for (let i2 = 0, l2 = list$1.length; i2 < l2; i2++) {
      const token_fo = new state.Token("footnote_open", "", 1);
      token_fo.meta = {
        id: i2,
        label: list$1[i2].label
      };
      state.tokens.push(token_fo);
      if (list$1[i2].tokens) {
        tokens = [];
        const token_po = new state.Token("paragraph_open", "p", 1);
        token_po.block = true;
        tokens.push(token_po);
        const token_i = new state.Token("inline", "", 0);
        token_i.children = list$1[i2].tokens;
        token_i.content = list$1[i2].content;
        tokens.push(token_i);
        const token_pc = new state.Token("paragraph_close", "p", -1);
        token_pc.block = true;
        tokens.push(token_pc);
      } else if (list$1[i2].label) tokens = refTokens[`:${list$1[i2].label}`];
      if (tokens) state.tokens = state.tokens.concat(tokens);
      let lastParagraph;
      if (state.tokens[state.tokens.length - 1].type === "paragraph_close") lastParagraph = state.tokens.pop();
      else lastParagraph = null;
      const t2 = list$1[i2].count > 0 ? list$1[i2].count : 1;
      for (let j = 0; j < t2; j++) {
        const token_a = new state.Token("footnote_anchor", "", 0);
        token_a.meta = {
          id: i2,
          subId: j,
          label: list$1[i2].label
        };
        state.tokens.push(token_a);
      }
      if (lastParagraph) state.tokens.push(lastParagraph);
      state.tokens.push(new state.Token("footnote_close", "", -1));
    }
    state.tokens.push(new state.Token("footnote_block_close", "", -1));
  }
  md.block.ruler.before("reference", "footnote_def", footnote_def, { alt: ["paragraph", "reference"] });
  md.inline.ruler.after("image", "footnote_inline", footnote_inline);
  md.inline.ruler.after("footnote_inline", "footnote_ref", footnote_ref);
  md.core.ruler.after("inline", "footnote_tail", footnote_tail);
}
function ins_plugin(md) {
  function tokenize(state, silent) {
    const start = state.pos;
    const marker = state.src.charCodeAt(start);
    if (silent) return false;
    if (marker !== 43) return false;
    const scanned = state.scanDelims(state.pos, true);
    let len = scanned.length;
    const ch = String.fromCharCode(marker);
    if (len < 2) return false;
    if (len % 2) {
      const token = state.push("text", "", 0);
      token.content = ch;
      len--;
    }
    for (let i2 = 0; i2 < len; i2 += 2) {
      const token = state.push("text", "", 0);
      token.content = ch + ch;
      if (!scanned.can_open && !scanned.can_close) continue;
      state.delimiters.push({
        marker,
        length: 0,
        jump: i2 / 2,
        token: state.tokens.length - 1,
        end: -1,
        open: scanned.can_open,
        close: scanned.can_close
      });
    }
    state.pos += scanned.length;
    return true;
  }
  function postProcess$2(state, delimiters) {
    let token;
    const loneMarkers = [];
    const max = delimiters.length;
    for (let i2 = 0; i2 < max; i2++) {
      const startDelim = delimiters[i2];
      if (startDelim.marker !== 43) continue;
      if (startDelim.end === -1) continue;
      const endDelim = delimiters[startDelim.end];
      token = state.tokens[startDelim.token];
      token.type = "ins_open";
      token.tag = "ins";
      token.nesting = 1;
      token.markup = "++";
      token.content = "";
      token = state.tokens[endDelim.token];
      token.type = "ins_close";
      token.tag = "ins";
      token.nesting = -1;
      token.markup = "++";
      token.content = "";
      if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "+") loneMarkers.push(endDelim.token - 1);
    }
    while (loneMarkers.length) {
      const i2 = loneMarkers.pop();
      let j = i2 + 1;
      while (j < state.tokens.length && state.tokens[j].type === "ins_close") j++;
      j--;
      if (i2 !== j) {
        token = state.tokens[j];
        state.tokens[j] = state.tokens[i2];
        state.tokens[i2] = token;
      }
    }
  }
  md.inline.ruler.before("emphasis", "ins", tokenize);
  md.inline.ruler2.before("emphasis", "ins", function(state) {
    const tokens_meta = state.tokens_meta;
    const max = (state.tokens_meta || []).length;
    postProcess$2(state, state.delimiters);
    for (let curr = 0; curr < max; curr++) if (tokens_meta[curr] && tokens_meta[curr].delimiters) postProcess$2(state, tokens_meta[curr].delimiters);
  });
}
function ins_plugin$1(md) {
  function tokenize(state, silent) {
    const start = state.pos;
    const marker = state.src.charCodeAt(start);
    if (silent) return false;
    if (marker !== 61) return false;
    const scanned = state.scanDelims(state.pos, true);
    let len = scanned.length;
    const ch = String.fromCharCode(marker);
    if (len < 2) return false;
    if (len % 2) {
      const token = state.push("text", "", 0);
      token.content = ch;
      len--;
    }
    for (let i2 = 0; i2 < len; i2 += 2) {
      const token = state.push("text", "", 0);
      token.content = ch + ch;
      if (!scanned.can_open && !scanned.can_close) continue;
      state.delimiters.push({
        marker,
        length: 0,
        jump: i2 / 2,
        token: state.tokens.length - 1,
        end: -1,
        open: scanned.can_open,
        close: scanned.can_close
      });
    }
    state.pos += scanned.length;
    return true;
  }
  function postProcess$2(state, delimiters) {
    const loneMarkers = [];
    const max = delimiters.length;
    for (let i2 = 0; i2 < max; i2++) {
      const startDelim = delimiters[i2];
      if (startDelim.marker !== 61) continue;
      if (startDelim.end === -1) continue;
      const endDelim = delimiters[startDelim.end];
      const token_o = state.tokens[startDelim.token];
      token_o.type = "mark_open";
      token_o.tag = "mark";
      token_o.nesting = 1;
      token_o.markup = "==";
      token_o.content = "";
      const token_c = state.tokens[endDelim.token];
      token_c.type = "mark_close";
      token_c.tag = "mark";
      token_c.nesting = -1;
      token_c.markup = "==";
      token_c.content = "";
      if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "=") loneMarkers.push(endDelim.token - 1);
    }
    while (loneMarkers.length) {
      const i2 = loneMarkers.pop();
      let j = i2 + 1;
      while (j < state.tokens.length && state.tokens[j].type === "mark_close") j++;
      j--;
      if (i2 !== j) {
        const token = state.tokens[j];
        state.tokens[j] = state.tokens[i2];
        state.tokens[i2] = token;
      }
    }
  }
  md.inline.ruler.before("emphasis", "mark", tokenize);
  md.inline.ruler2.before("emphasis", "mark", function(state) {
    let curr;
    const tokens_meta = state.tokens_meta;
    const max = (state.tokens_meta || []).length;
    postProcess$2(state, state.delimiters);
    for (curr = 0; curr < max; curr++) if (tokens_meta[curr] && tokens_meta[curr].delimiters) postProcess$2(state, tokens_meta[curr].delimiters);
  });
}
const UNESCAPE_RE$1 = /\\([ \\!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-])/g;
function subscript(state, silent) {
  const max = state.posMax;
  const start = state.pos;
  if (state.src.charCodeAt(start) !== 126) return false;
  if (silent) return false;
  if (start + 2 >= max) return false;
  state.pos = start + 1;
  let found = false;
  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === 126) {
      found = true;
      break;
    }
    state.md.inline.skipToken(state);
  }
  if (!found || start + 1 === state.pos) {
    state.pos = start;
    return false;
  }
  const content = state.src.slice(start + 1, state.pos);
  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
    state.pos = start;
    return false;
  }
  state.posMax = state.pos;
  state.pos = start + 1;
  const token_so = state.push("sub_open", "sub", 1);
  token_so.markup = "~";
  const token_t = state.push("text", "", 0);
  token_t.content = content.replace(UNESCAPE_RE$1, "$1");
  const token_sc = state.push("sub_close", "sub", -1);
  token_sc.markup = "~";
  state.pos = state.posMax + 1;
  state.posMax = max;
  return true;
}
function sub_plugin(md) {
  md.inline.ruler.after("emphasis", "sub", subscript);
}
const UNESCAPE_RE = /\\([ \\!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-])/g;
function superscript(state, silent) {
  const max = state.posMax;
  const start = state.pos;
  if (state.src.charCodeAt(start) !== 94) return false;
  if (silent) return false;
  if (start + 2 >= max) return false;
  state.pos = start + 1;
  let found = false;
  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === 94) {
      found = true;
      break;
    }
    state.md.inline.skipToken(state);
  }
  if (!found || start + 1 === state.pos) {
    state.pos = start;
    return false;
  }
  const content = state.src.slice(start + 1, state.pos);
  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
    state.pos = start;
    return false;
  }
  state.posMax = state.pos;
  state.pos = start + 1;
  const token_so = state.push("sup_open", "sup", 1);
  token_so.markup = "^";
  const token_t = state.push("text", "", 0);
  token_t.content = content.replace(UNESCAPE_RE, "$1");
  const token_sc = state.push("sup_close", "sup", -1);
  token_sc.markup = "^";
  state.pos = state.posMax + 1;
  state.posMax = max;
  return true;
}
function sup_plugin(md) {
  md.inline.ruler.after("emphasis", "sup", superscript);
}
var require_markdown_it_task_checkbox = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/markdown-it-task-checkbox@1.0.6/node_modules/markdown-it-task-checkbox/index.js": ((exports$1, module) => {
  module.exports = function(md, options) {
    options = Object.assign({}, {
      disabled: true,
      divWrap: false,
      divClass: "checkbox",
      idPrefix: "cbx_",
      ulClass: "task-list",
      liClass: "task-list-item"
    }, options);
    md.core.ruler.after("inline", "github-task-lists", function(state) {
      var tokens = state.tokens;
      var lastId = 0;
      for (var i2 = 2; i2 < tokens.length; i2++) if (isTodoItem(tokens, i2)) {
        todoify(tokens[i2], lastId, options, state.Token);
        lastId += 1;
        attrSet$1(tokens[i2 - 2], "class", options.liClass);
        attrSet$1(tokens[parentToken(tokens, i2 - 2)], "class", options.ulClass);
      }
    });
  };
  function attrSet$1(token, name, value) {
    var index = token.attrIndex(name);
    var attr = [name, value];
    if (index < 0) token.attrPush(attr);
    else token.attrs[index] = attr;
  }
  function parentToken(tokens, index) {
    var targetLevel = tokens[index].level - 1;
    for (var i2 = index - 1; i2 >= 0; i2--) if (tokens[i2].level === targetLevel) return i2;
    return -1;
  }
  function isTodoItem(tokens, index) {
    return isInline(tokens[index]) && isParagraph(tokens[index - 1]) && isListItem(tokens[index - 2]) && startsWithTodoMarkdown(tokens[index]);
  }
  function todoify(token, lastId, options, TokenConstructor) {
    var id = options.idPrefix + lastId;
    token.children[0].content = token.children[0].content.slice(3);
    token.children.unshift(beginLabel(id, TokenConstructor));
    token.children.push(endLabel(TokenConstructor));
    token.children.unshift(makeCheckbox(token, id, options, TokenConstructor));
    if (options.divWrap) {
      token.children.unshift(beginWrap(options, TokenConstructor));
      token.children.push(endWrap(TokenConstructor));
    }
  }
  function makeCheckbox(token, id, options, TokenConstructor) {
    var checkbox = new TokenConstructor("checkbox_input", "input", 0);
    checkbox.attrs = [["type", "checkbox"], ["id", id]];
    if (/^\[[xX]\][ \u00A0]/.test(token.content) === true) checkbox.attrs.push(["checked", "true"]);
    if (options.disabled === true) checkbox.attrs.push(["disabled", "true"]);
    return checkbox;
  }
  function beginLabel(id, TokenConstructor) {
    var label = new TokenConstructor("label_open", "label", 1);
    label.attrs = [["for", id]];
    return label;
  }
  function endLabel(TokenConstructor) {
    return new TokenConstructor("label_close", "label", -1);
  }
  function beginWrap(options, TokenConstructor) {
    var token = new TokenConstructor("checkbox_open", "div", 0);
    token.attrs = [["class", options.divClass]];
    return token;
  }
  function endWrap(TokenConstructor) {
    return new TokenConstructor("checkbox_close", "div", -1);
  }
  function isInline(token) {
    return token.type === "inline";
  }
  function isParagraph(token) {
    return token.type === "paragraph_open";
  }
  function isListItem(token) {
    return token.type === "list_item_open";
  }
  function startsWithTodoMarkdown(token) {
    return /^\[[xX \u00A0]\][ \u00A0]/.test(token.content);
  }
}) });
var import_markdown_it_task_checkbox = /* @__PURE__ */ __toESM(require_markdown_it_task_checkbox());
var __defProp2 = Object.defineProperty;
var __export = (all) => {
  let target = {};
  for (var name in all) __defProp2(target, name, {
    get: all[name],
    enumerable: true
  });
  return target;
};
var regex_default = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var regex_default$1 = /[\0-\x1F\x7F-\x9F]/;
var regex_default$4 = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
var regex_default$3 = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
var regex_default$5 = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/;
var regex_default$2 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
var uc_exports = /* @__PURE__ */ __export$1({
  Any: () => regex_default,
  Cc: () => regex_default$1,
  Cf: () => regex_default$4,
  P: () => regex_default$3,
  S: () => regex_default$5,
  Z: () => regex_default$2
});
function re_default(opts) {
  const re2 = {};
  opts = opts || {};
  re2.src_Any = regex_default.source;
  re2.src_Cc = regex_default$1.source;
  re2.src_Z = regex_default$2.source;
  re2.src_P = regex_default$3.source;
  re2.src_ZPCc = [
    re2.src_Z,
    re2.src_P,
    re2.src_Cc
  ].join("|");
  re2.src_ZCc = [re2.src_Z, re2.src_Cc].join("|");
  const text_separators = "[><｜]";
  re2.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re2.src_ZPCc + ")" + re2.src_Any + ")";
  re2.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
  re2.src_auth = "(?:(?:(?!" + re2.src_ZCc + "|[@/\\[\\]()]).)+@)?";
  re2.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
  re2.src_host_terminator = "(?=$|" + text_separators + "|" + re2.src_ZPCc + ")(?!" + (opts["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + re2.src_ZPCc + "))";
  re2.src_path = "(?:[/?#](?:(?!" + re2.src_ZCc + `|[><｜]|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + re2.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re2.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re2.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re2.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re2.src_ZCc + "|[']).)+\\'|\\'(?=" + re2.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + re2.src_ZCc + "|[.]|$)|" + (opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + re2.src_ZCc + "|$)|;(?!" + re2.src_ZCc + "|$)|\\!+(?!" + re2.src_ZCc + "|[!]|$)|\\?(?!" + re2.src_ZCc + "|[?]|$))+|\\/)?";
  re2.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
  re2.src_xn = "xn--[a-z0-9\\-]{1,59}";
  re2.src_domain_root = "(?:" + re2.src_xn + "|" + re2.src_pseudo_letter + "{1,63})";
  re2.src_domain = "(?:" + re2.src_xn + "|(?:" + re2.src_pseudo_letter + ")|(?:" + re2.src_pseudo_letter + "(?:-|" + re2.src_pseudo_letter + "){0,61}" + re2.src_pseudo_letter + "))";
  re2.src_host = "(?:(?:(?:(?:" + re2.src_domain + ")\\.)*" + re2.src_domain + "))";
  re2.tpl_host_fuzzy = "(?:" + re2.src_ip4 + "|(?:(?:(?:" + re2.src_domain + ")\\.)+(?:%TLDS%)))";
  re2.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re2.src_domain + ")\\.)+(?:%TLDS%))";
  re2.src_host_strict = re2.src_host + re2.src_host_terminator;
  re2.tpl_host_fuzzy_strict = re2.tpl_host_fuzzy + re2.src_host_terminator;
  re2.src_host_port_strict = re2.src_host + re2.src_port + re2.src_host_terminator;
  re2.tpl_host_port_fuzzy_strict = re2.tpl_host_fuzzy + re2.src_port + re2.src_host_terminator;
  re2.tpl_host_port_no_ip_fuzzy_strict = re2.tpl_host_no_ip_fuzzy + re2.src_port + re2.src_host_terminator;
  re2.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re2.src_ZPCc + "|>|$))";
  re2.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re2.src_ZCc + ")(" + re2.src_email_name + "@" + re2.tpl_host_fuzzy_strict + ")";
  re2.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re2.src_ZPCc + "))((?![$+<=>^`|｜])" + re2.tpl_host_port_fuzzy_strict + re2.src_path + ")";
  re2.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re2.src_ZPCc + "))((?![$+<=>^`|｜])" + re2.tpl_host_port_no_ip_fuzzy_strict + re2.src_path + ")";
  return re2;
}
function assign$1(obj) {
  Array.prototype.slice.call(arguments, 1).forEach(function(source) {
    if (!source) return;
    Object.keys(source).forEach(function(key) {
      obj[key] = source[key];
    });
  });
  return obj;
}
function _class$1(obj) {
  return Object.prototype.toString.call(obj);
}
function isString$1(obj) {
  return _class$1(obj) === "[object String]";
}
function isObject(obj) {
  return _class$1(obj) === "[object Object]";
}
function isRegExp(obj) {
  return _class$1(obj) === "[object RegExp]";
}
function isFunction(obj) {
  return _class$1(obj) === "[object Function]";
}
function escapeRE$1(str) {
  return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};
function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function(acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}
const defaultSchemas = {
  "http:": { validate: function(text$1, pos, self) {
    const tail = text$1.slice(pos);
    if (!self.re.http) self.re.http = new RegExp("^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, "i");
    if (self.re.http.test(tail)) return tail.match(self.re.http)[0].length;
    return 0;
  } },
  "https:": "http:",
  "ftp:": "http:",
  "//": { validate: function(text$1, pos, self) {
    const tail = text$1.slice(pos);
    if (!self.re.no_http) self.re.no_http = new RegExp("^" + self.re.src_auth + "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path, "i");
    if (self.re.no_http.test(tail)) {
      if (pos >= 3 && text$1[pos - 3] === ":") return 0;
      if (pos >= 3 && text$1[pos - 3] === "/") return 0;
      return tail.match(self.re.no_http)[0].length;
    }
    return 0;
  } },
  "mailto:": { validate: function(text$1, pos, self) {
    const tail = text$1.slice(pos);
    if (!self.re.mailto) self.re.mailto = new RegExp("^" + self.re.src_email_name + "@" + self.re.src_host_strict, "i");
    if (self.re.mailto.test(tail)) return tail.match(self.re.mailto)[0].length;
    return 0;
  } }
};
const tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
const tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__ = "";
}
function createValidator(re2) {
  return function(text$1, pos) {
    const tail = text$1.slice(pos);
    if (re2.test(tail)) return tail.match(re2)[0].length;
    return 0;
  };
}
function createNormalizer() {
  return function(match2, self) {
    self.normalize(match2);
  };
}
function compile(self) {
  const re2 = self.re = re_default(self.__opts__);
  const tlds2 = self.__tlds__.slice();
  self.onCompile();
  if (!self.__tlds_replaced__) tlds2.push(tlds_2ch_src_re);
  tlds2.push(re2.src_xn);
  re2.src_tlds = tlds2.join("|");
  function untpl(tpl) {
    return tpl.replace("%TLDS%", re2.src_tlds);
  }
  re2.email_fuzzy = RegExp(untpl(re2.tpl_email_fuzzy), "i");
  re2.link_fuzzy = RegExp(untpl(re2.tpl_link_fuzzy), "i");
  re2.link_no_ip_fuzzy = RegExp(untpl(re2.tpl_link_no_ip_fuzzy), "i");
  re2.host_fuzzy_test = RegExp(untpl(re2.tpl_host_fuzzy_test), "i");
  const aliases = [];
  self.__compiled__ = {};
  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }
  Object.keys(self.__schemas__).forEach(function(name) {
    const val = self.__schemas__[name];
    if (val === null) return;
    const compiled = {
      validate: null,
      link: null
    };
    self.__compiled__[name] = compiled;
    if (isObject(val)) {
      if (isRegExp(val.validate)) compiled.validate = createValidator(val.validate);
      else if (isFunction(val.validate)) compiled.validate = val.validate;
      else schemaError(name, val);
      if (isFunction(val.normalize)) compiled.normalize = val.normalize;
      else if (!val.normalize) compiled.normalize = createNormalizer();
      else schemaError(name, val);
      return;
    }
    if (isString$1(val)) {
      aliases.push(name);
      return;
    }
    schemaError(name, val);
  });
  aliases.forEach(function(alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) return;
    self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
  });
  self.__compiled__[""] = {
    validate: null,
    normalize: createNormalizer()
  };
  const slist = Object.keys(self.__compiled__).filter(function(name) {
    return name.length > 0 && self.__compiled__[name];
  }).map(escapeRE$1).join("|");
  self.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + re2.src_ZPCc + "))(" + slist + ")", "i");
  self.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + re2.src_ZPCc + "))(" + slist + ")", "ig");
  self.re.schema_at_start = RegExp("^" + self.re.schema_search.source, "i");
  self.re.pretest = RegExp("(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@", "i");
  resetScanCache(self);
}
function Match(self, shift) {
  const start = self.__index__;
  const end = self.__last_index__;
  const text$1 = self.__text_cache__.slice(start, end);
  this.schema = self.__schema__.toLowerCase();
  this.index = start + shift;
  this.lastIndex = end + shift;
  this.raw = text$1;
  this.text = text$1;
  this.url = text$1;
}
function createMatch(self, shift) {
  const match2 = new Match(self, shift);
  self.__compiled__[match2.schema].normalize(match2, self);
  return match2;
}
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) return new LinkifyIt(schemas, options);
  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }
  this.__opts__ = assign$1({}, defaultOptions, options);
  this.__index__ = -1;
  this.__last_index__ = -1;
  this.__schema__ = "";
  this.__text_cache__ = "";
  this.__schemas__ = assign$1({}, defaultSchemas, schemas);
  this.__compiled__ = {};
  this.__tlds__ = tlds_default;
  this.__tlds_replaced__ = false;
  this.re = {};
  compile(this);
}
LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};
LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign$1(this.__opts__, options);
  return this;
};
LinkifyIt.prototype.test = function test(text$1) {
  this.__text_cache__ = text$1;
  this.__index__ = -1;
  if (!text$1.length) return false;
  let m, ml, me2, len, shift, next, re2, tld_pos, at_pos;
  if (this.re.schema_test.test(text$1)) {
    re2 = this.re.schema_search;
    re2.lastIndex = 0;
    while ((m = re2.exec(text$1)) !== null) {
      len = this.testSchemaAt(text$1, m[2], re2.lastIndex);
      if (len) {
        this.__schema__ = m[2];
        this.__index__ = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }
  if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
    tld_pos = text$1.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text$1.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
          shift = ml.index + ml[1].length;
          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__ = "";
            this.__index__ = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }
  if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
    at_pos = text$1.indexOf("@");
    if (at_pos >= 0) {
      if ((me2 = text$1.match(this.re.email_fuzzy)) !== null) {
        shift = me2.index + me2[1].length;
        next = me2.index + me2[0].length;
        if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
          this.__schema__ = "mailto:";
          this.__index__ = shift;
          this.__last_index__ = next;
        }
      }
    }
  }
  return this.__index__ >= 0;
};
LinkifyIt.prototype.pretest = function pretest(text$1) {
  return this.re.pretest.test(text$1);
};
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text$1, schema, pos) {
  if (!this.__compiled__[schema.toLowerCase()]) return 0;
  return this.__compiled__[schema.toLowerCase()].validate(text$1, pos, this);
};
LinkifyIt.prototype.match = function match(text$1) {
  const result = [];
  let shift = 0;
  if (this.__index__ >= 0 && this.__text_cache__ === text$1) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }
  let tail = shift ? text$1.slice(shift) : text$1;
  while (this.test(tail)) {
    result.push(createMatch(this, shift));
    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }
  if (result.length) return result;
  return null;
};
LinkifyIt.prototype.matchAtStart = function matchAtStart(text$1) {
  this.__text_cache__ = text$1;
  this.__index__ = -1;
  if (!text$1.length) return null;
  const m = this.re.schema_at_start.exec(text$1);
  if (!m) return null;
  const len = this.testSchemaAt(text$1, m[2], m[0].length);
  if (!len) return null;
  this.__schema__ = m[2];
  this.__index__ = m.index + m[1].length;
  this.__last_index__ = m.index + m[0].length + len;
  return createMatch(this, 0);
};
LinkifyIt.prototype.tlds = function tlds(list$1, keepOld) {
  list$1 = Array.isArray(list$1) ? list$1 : [list$1];
  if (!keepOld) {
    this.__tlds__ = list$1.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }
  this.__tlds__ = this.__tlds__.concat(list$1).sort().filter(function(el, idx, arr) {
    return el !== arr[idx - 1];
  }).reverse();
  compile(this);
  return this;
};
LinkifyIt.prototype.normalize = function normalize$1(match2) {
  if (!match2.schema) match2.url = "http://" + match2.url;
  if (match2.schema === "mailto:" && !/^mailto:/i.test(match2.url)) match2.url = "mailto:" + match2.url;
};
LinkifyIt.prototype.onCompile = function onCompile() {
};
var linkify_it_default = LinkifyIt;
var decode_data_html_default = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((c) => c.charCodeAt(0)));
var decode_data_xml_default = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((c) => c.charCodeAt(0)));
var _a;
const decodeMap = /* @__PURE__ */ new Map([
  [0, 65533],
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
const fromCodePoint$2 = (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
  let output = "";
  if (codePoint > 65535) {
    codePoint -= 65536;
    output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
    codePoint = 56320 | codePoint & 1023;
  }
  output += String.fromCharCode(codePoint);
  return output;
};
function replaceCodePoint(codePoint) {
  var _a$1;
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) return 65533;
  return (_a$1 = decodeMap.get(codePoint)) !== null && _a$1 !== void 0 ? _a$1 : codePoint;
}
var CharCodes;
(function(CharCodes$1) {
  CharCodes$1[CharCodes$1["NUM"] = 35] = "NUM";
  CharCodes$1[CharCodes$1["SEMI"] = 59] = "SEMI";
  CharCodes$1[CharCodes$1["EQUALS"] = 61] = "EQUALS";
  CharCodes$1[CharCodes$1["ZERO"] = 48] = "ZERO";
  CharCodes$1[CharCodes$1["NINE"] = 57] = "NINE";
  CharCodes$1[CharCodes$1["LOWER_A"] = 97] = "LOWER_A";
  CharCodes$1[CharCodes$1["LOWER_F"] = 102] = "LOWER_F";
  CharCodes$1[CharCodes$1["LOWER_X"] = 120] = "LOWER_X";
  CharCodes$1[CharCodes$1["LOWER_Z"] = 122] = "LOWER_Z";
  CharCodes$1[CharCodes$1["UPPER_A"] = 65] = "UPPER_A";
  CharCodes$1[CharCodes$1["UPPER_F"] = 70] = "UPPER_F";
  CharCodes$1[CharCodes$1["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
const TO_LOWER_BIT = 32;
var BinTrieFlags;
(function(BinTrieFlags$1) {
  BinTrieFlags$1[BinTrieFlags$1["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags$1[BinTrieFlags$1["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
  BinTrieFlags$1[BinTrieFlags$1["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code$1) {
  return code$1 >= CharCodes.ZERO && code$1 <= CharCodes.NINE;
}
function isHexadecimalCharacter(code$1) {
  return code$1 >= CharCodes.UPPER_A && code$1 <= CharCodes.UPPER_F || code$1 >= CharCodes.LOWER_A && code$1 <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric(code$1) {
  return code$1 >= CharCodes.UPPER_A && code$1 <= CharCodes.UPPER_Z || code$1 >= CharCodes.LOWER_A && code$1 <= CharCodes.LOWER_Z || isNumber(code$1);
}
function isEntityInAttributeInvalidEnd(code$1) {
  return code$1 === CharCodes.EQUALS || isAsciiAlphaNumeric(code$1);
}
var EntityDecoderState;
(function(EntityDecoderState$1) {
  EntityDecoderState$1[EntityDecoderState$1["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState$1[EntityDecoderState$1["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState$1[EntityDecoderState$1["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState$1[EntityDecoderState$1["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState$1[EntityDecoderState$1["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode$1) {
  DecodingMode$1[DecodingMode$1["Legacy"] = 0] = "Legacy";
  DecodingMode$1[DecodingMode$1["Strict"] = 1] = "Strict";
  DecodingMode$1[DecodingMode$1["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
var EntityDecoder = class {
  constructor(decodeTree, emitCodePoint, errors$1) {
    this.decodeTree = decodeTree;
    this.emitCodePoint = emitCodePoint;
    this.errors = errors$1;
    this.state = EntityDecoderState.EntityStart;
    this.consumed = 1;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.decodeMode = DecodingMode.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(decodeMode) {
    this.decodeMode = decodeMode;
    this.state = EntityDecoderState.EntityStart;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.consumed = 1;
  }
  /**
  * Write an entity to the decoder. This can be called multiple times with partial entities.
  * If the entity is incomplete, the decoder will return -1.
  *
  * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
  * entity is incomplete, and resume when the next string is written.
  *
  * @param string The string containing the entity (or a continuation of the entity).
  * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
  * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
  */
  write(str, offset) {
    switch (this.state) {
      case EntityDecoderState.EntityStart:
        if (str.charCodeAt(offset) === CharCodes.NUM) {
          this.state = EntityDecoderState.NumericStart;
          this.consumed += 1;
          return this.stateNumericStart(str, offset + 1);
        }
        this.state = EntityDecoderState.NamedEntity;
        return this.stateNamedEntity(str, offset);
      case EntityDecoderState.NumericStart:
        return this.stateNumericStart(str, offset);
      case EntityDecoderState.NumericDecimal:
        return this.stateNumericDecimal(str, offset);
      case EntityDecoderState.NumericHex:
        return this.stateNumericHex(str, offset);
      case EntityDecoderState.NamedEntity:
        return this.stateNamedEntity(str, offset);
    }
  }
  /**
  * Switches between the numeric decimal and hexadecimal states.
  *
  * Equivalent to the `Numeric character reference state` in the HTML spec.
  *
  * @param str The string containing the entity (or a continuation of the entity).
  * @param offset The current offset.
  * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
  */
  stateNumericStart(str, offset) {
    if (offset >= str.length) return -1;
    if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
      this.state = EntityDecoderState.NumericHex;
      this.consumed += 1;
      return this.stateNumericHex(str, offset + 1);
    }
    this.state = EntityDecoderState.NumericDecimal;
    return this.stateNumericDecimal(str, offset);
  }
  addToNumericResult(str, start, end, base$1) {
    if (start !== end) {
      const digitCount = end - start;
      this.result = this.result * Math.pow(base$1, digitCount) + parseInt(str.substr(start, digitCount), base$1);
      this.consumed += digitCount;
    }
  }
  /**
  * Parses a hexadecimal numeric entity.
  *
  * Equivalent to the `Hexademical character reference state` in the HTML spec.
  *
  * @param str The string containing the entity (or a continuation of the entity).
  * @param offset The current offset.
  * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
  */
  stateNumericHex(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber(char) || isHexadecimalCharacter(char)) offset += 1;
      else {
        this.addToNumericResult(str, startIdx, offset, 16);
        return this.emitNumericEntity(char, 3);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 16);
    return -1;
  }
  /**
  * Parses a decimal numeric entity.
  *
  * Equivalent to the `Decimal character reference state` in the HTML spec.
  *
  * @param str The string containing the entity (or a continuation of the entity).
  * @param offset The current offset.
  * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
  */
  stateNumericDecimal(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber(char)) offset += 1;
      else {
        this.addToNumericResult(str, startIdx, offset, 10);
        return this.emitNumericEntity(char, 2);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 10);
    return -1;
  }
  /**
  * Validate and emit a numeric entity.
  *
  * Implements the logic from the `Hexademical character reference start
  * state` and `Numeric character reference end state` in the HTML spec.
  *
  * @param lastCp The last code point of the entity. Used to see if the
  *               entity was terminated with a semicolon.
  * @param expectedLength The minimum number of characters that should be
  *                       consumed. Used to validate that at least one digit
  *                       was consumed.
  * @returns The number of characters that were consumed.
  */
  emitNumericEntity(lastCp, expectedLength) {
    var _a$1;
    if (this.consumed <= expectedLength) {
      (_a$1 = this.errors) === null || _a$1 === void 0 || _a$1.absenceOfDigitsInNumericCharacterReference(this.consumed);
      return 0;
    }
    if (lastCp === CharCodes.SEMI) this.consumed += 1;
    else if (this.decodeMode === DecodingMode.Strict) return 0;
    this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
    if (this.errors) {
      if (lastCp !== CharCodes.SEMI) this.errors.missingSemicolonAfterCharacterReference();
      this.errors.validateNumericCharacterReference(this.result);
    }
    return this.consumed;
  }
  /**
  * Parses a named entity.
  *
  * Equivalent to the `Named character reference state` in the HTML spec.
  *
  * @param str The string containing the entity (or a continuation of the entity).
  * @param offset The current offset.
  * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
  */
  stateNamedEntity(str, offset) {
    const { decodeTree } = this;
    let current = decodeTree[this.treeIndex];
    let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
    for (; offset < str.length; offset++, this.excess++) {
      const char = str.charCodeAt(offset);
      this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
      if (this.treeIndex < 0) return this.result === 0 || this.decodeMode === DecodingMode.Attribute && (valueLength === 0 || isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
      current = decodeTree[this.treeIndex];
      valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
      if (valueLength !== 0) {
        if (char === CharCodes.SEMI) return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
        if (this.decodeMode !== DecodingMode.Strict) {
          this.result = this.treeIndex;
          this.consumed += this.excess;
          this.excess = 0;
        }
      }
    }
    return -1;
  }
  /**
  * Emit a named entity that was not terminated with a semicolon.
  *
  * @returns The number of characters consumed.
  */
  emitNotTerminatedNamedEntity() {
    var _a$1;
    const { result, decodeTree } = this;
    const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
    this.emitNamedEntityData(result, valueLength, this.consumed);
    (_a$1 = this.errors) === null || _a$1 === void 0 || _a$1.missingSemicolonAfterCharacterReference();
    return this.consumed;
  }
  /**
  * Emit a named entity.
  *
  * @param result The index of the entity in the decode tree.
  * @param valueLength The number of bytes in the entity.
  * @param consumed The number of characters consumed.
  *
  * @returns The number of characters consumed.
  */
  emitNamedEntityData(result, valueLength, consumed) {
    const { decodeTree } = this;
    this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
    if (valueLength === 3) this.emitCodePoint(decodeTree[result + 2], consumed);
    return consumed;
  }
  /**
  * Signal to the parser that the end of the input was reached.
  *
  * Remaining data will be emitted and relevant errors will be produced.
  *
  * @returns The number of characters consumed.
  */
  end() {
    var _a$1;
    switch (this.state) {
      case EntityDecoderState.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case EntityDecoderState.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case EntityDecoderState.NumericHex:
        return this.emitNumericEntity(0, 3);
      case EntityDecoderState.NumericStart:
        (_a$1 = this.errors) === null || _a$1 === void 0 || _a$1.absenceOfDigitsInNumericCharacterReference(this.consumed);
        return 0;
      case EntityDecoderState.EntityStart:
        return 0;
    }
  }
};
function getDecoder(decodeTree) {
  let ret = "";
  const decoder = new EntityDecoder(decodeTree, (str) => ret += fromCodePoint$2(str));
  return function decodeWithTrie(str, decodeMode) {
    let lastIndex = 0;
    let offset = 0;
    while ((offset = str.indexOf("&", offset)) >= 0) {
      ret += str.slice(lastIndex, offset);
      decoder.startEntity(decodeMode);
      const len = decoder.write(str, offset + 1);
      if (len < 0) {
        lastIndex = offset + decoder.end();
        break;
      }
      lastIndex = offset + len;
      offset = len === 0 ? lastIndex + 1 : lastIndex;
    }
    const result = ret + str.slice(lastIndex);
    ret = "";
    return result;
  };
}
function determineBranch(decodeTree, current, nodeIdx, char) {
  const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
  const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  if (branchCount === 0) return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
  if (jumpOffset) {
    const value = char - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
  }
  let lo2 = nodeIdx;
  let hi = lo2 + branchCount - 1;
  while (lo2 <= hi) {
    const mid = lo2 + hi >>> 1;
    const midVal = decodeTree[mid];
    if (midVal < char) lo2 = mid + 1;
    else if (midVal > char) hi = mid - 1;
    else return decodeTree[mid + branchCount];
  }
  return -1;
}
const htmlDecoder = getDecoder(decode_data_html_default);
getDecoder(decode_data_xml_default);
function decodeHTML(str, mode = DecodingMode.Legacy) {
  return htmlDecoder(str, mode);
}
const decodeCache = {};
function getDecodeCache(exclude) {
  let cache = decodeCache[exclude];
  if (cache) return cache;
  cache = decodeCache[exclude] = [];
  for (let i2 = 0; i2 < 128; i2++) {
    const ch = String.fromCharCode(i2);
    cache.push(ch);
  }
  for (let i2 = 0; i2 < exclude.length; i2++) {
    const ch = exclude.charCodeAt(i2);
    cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
  }
  return cache;
}
function decode$1(string, exclude) {
  if (typeof exclude !== "string") exclude = decode$1.defaultChars;
  const cache = getDecodeCache(exclude);
  return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
    let result = "";
    for (let i2 = 0, l2 = seq.length; i2 < l2; i2 += 3) {
      const b1 = parseInt(seq.slice(i2 + 1, i2 + 3), 16);
      if (b1 < 128) {
        result += cache[b1];
        continue;
      }
      if ((b1 & 224) === 192 && i2 + 3 < l2) {
        const b2 = parseInt(seq.slice(i2 + 4, i2 + 6), 16);
        if ((b2 & 192) === 128) {
          const chr = b1 << 6 & 1984 | b2 & 63;
          if (chr < 128) result += "��";
          else result += String.fromCharCode(chr);
          i2 += 3;
          continue;
        }
      }
      if ((b1 & 240) === 224 && i2 + 6 < l2) {
        const b2 = parseInt(seq.slice(i2 + 4, i2 + 6), 16);
        const b3 = parseInt(seq.slice(i2 + 7, i2 + 9), 16);
        if ((b2 & 192) === 128 && (b3 & 192) === 128) {
          const chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
          if (chr < 2048 || chr >= 55296 && chr <= 57343) result += "���";
          else result += String.fromCharCode(chr);
          i2 += 6;
          continue;
        }
      }
      if ((b1 & 248) === 240 && i2 + 9 < l2) {
        const b2 = parseInt(seq.slice(i2 + 4, i2 + 6), 16);
        const b3 = parseInt(seq.slice(i2 + 7, i2 + 9), 16);
        const b4 = parseInt(seq.slice(i2 + 10, i2 + 12), 16);
        if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
          let chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
          if (chr < 65536 || chr > 1114111) result += "����";
          else {
            chr -= 65536;
            result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
          }
          i2 += 9;
          continue;
        }
      }
      result += "�";
    }
    return result;
  });
}
decode$1.defaultChars = ";/?:@&=+$,#";
decode$1.componentChars = "";
var decode_default = decode$1;
const encodeCache = {};
function getEncodeCache(exclude) {
  let cache = encodeCache[exclude];
  if (cache) return cache;
  cache = encodeCache[exclude] = [];
  for (let i2 = 0; i2 < 128; i2++) {
    const ch = String.fromCharCode(i2);
    if (/^[0-9a-z]$/i.test(ch)) cache.push(ch);
    else cache.push("%" + ("0" + i2.toString(16).toUpperCase()).slice(-2));
  }
  for (let i2 = 0; i2 < exclude.length; i2++) cache[exclude.charCodeAt(i2)] = exclude[i2];
  return cache;
}
function encode$1(string, exclude, keepEscaped) {
  if (typeof exclude !== "string") {
    keepEscaped = exclude;
    exclude = encode$1.defaultChars;
  }
  if (typeof keepEscaped === "undefined") keepEscaped = true;
  const cache = getEncodeCache(exclude);
  let result = "";
  for (let i2 = 0, l2 = string.length; i2 < l2; i2++) {
    const code$1 = string.charCodeAt(i2);
    if (keepEscaped && code$1 === 37 && i2 + 2 < l2) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i2 + 1, i2 + 3))) {
        result += string.slice(i2, i2 + 3);
        i2 += 2;
        continue;
      }
    }
    if (code$1 < 128) {
      result += cache[code$1];
      continue;
    }
    if (code$1 >= 55296 && code$1 <= 57343) {
      if (code$1 >= 55296 && code$1 <= 56319 && i2 + 1 < l2) {
        const nextCode = string.charCodeAt(i2 + 1);
        if (nextCode >= 56320 && nextCode <= 57343) {
          result += encodeURIComponent(string[i2] + string[i2 + 1]);
          i2++;
          continue;
        }
      }
      result += "%EF%BF%BD";
      continue;
    }
    result += encodeURIComponent(string[i2]);
  }
  return result;
}
encode$1.defaultChars = ";/?:@&=+$,-_.!~*'()#";
encode$1.componentChars = "-_.!~*'()";
var encode_default = encode$1;
function format(url) {
  let result = "";
  result += url.protocol || "";
  result += url.slashes ? "//" : "";
  result += url.auth ? url.auth + "@" : "";
  if (url.hostname && url.hostname.indexOf(":") !== -1) result += "[" + url.hostname + "]";
  else result += url.hostname || "";
  result += url.port ? ":" + url.port : "";
  result += url.pathname || "";
  result += url.search || "";
  result += url.hash || "";
  return result;
}
function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.pathname = null;
}
const protocolPattern = /^([a-z0-9.+-]+:)/i;
const portPattern = /:[0-9]*$/;
const simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
const unwise = [
  "{",
  "}",
  "|",
  "\\",
  "^",
  "`"
].concat([
  "<",
  ">",
  '"',
  "`",
  " ",
  "\r",
  "\n",
  "	"
]);
const autoEscape = ["'"].concat(unwise);
const nonHostChars = [
  "%",
  "/",
  "?",
  ";",
  "#"
].concat(autoEscape);
const hostEndingChars = [
  "/",
  "?",
  "#"
];
const hostnameMaxLen = 255;
const hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
const hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
const hostlessProtocol = {
  javascript: true,
  "javascript:": true
};
const slashedProtocol = {
  http: true,
  https: true,
  ftp: true,
  gopher: true,
  file: true,
  "http:": true,
  "https:": true,
  "ftp:": true,
  "gopher:": true,
  "file:": true
};
function urlParse(url, slashesDenoteHost) {
  if (url && url instanceof Url) return url;
  const u = new Url();
  u.parse(url, slashesDenoteHost);
  return u;
}
Url.prototype.parse = function(url, slashesDenoteHost) {
  let lowerProto, hec, slashes;
  let rest = url;
  rest = rest.trim();
  if (!slashesDenoteHost && url.split("#").length === 1) {
    const simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.pathname = simplePath[1];
      if (simplePath[2]) this.search = simplePath[2];
      return this;
    }
  }
  let proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    lowerProto = proto.toLowerCase();
    this.protocol = proto;
    rest = rest.substr(proto.length);
  }
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    slashes = rest.substr(0, 2) === "//";
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }
  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
    let hostEnd = -1;
    for (let i2 = 0; i2 < hostEndingChars.length; i2++) {
      hec = rest.indexOf(hostEndingChars[i2]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
    }
    let auth, atSign;
    if (hostEnd === -1) atSign = rest.lastIndexOf("@");
    else atSign = rest.lastIndexOf("@", hostEnd);
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = auth;
    }
    hostEnd = -1;
    for (let i2 = 0; i2 < nonHostChars.length; i2++) {
      hec = rest.indexOf(nonHostChars[i2]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
    }
    if (hostEnd === -1) hostEnd = rest.length;
    if (rest[hostEnd - 1] === ":") hostEnd--;
    const host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);
    this.parseHost(host);
    this.hostname = this.hostname || "";
    const ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!ipv6Hostname) {
      const hostparts = this.hostname.split(/\./);
      for (let i2 = 0, l2 = hostparts.length; i2 < l2; i2++) {
        const part = hostparts[i2];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          let newpart = "";
          for (let j = 0, k = part.length; j < k; j++) if (part.charCodeAt(j) > 127) newpart += "x";
          else newpart += part[j];
          if (!newpart.match(hostnamePartPattern)) {
            const validParts = hostparts.slice(0, i2);
            const notHost = hostparts.slice(i2 + 1);
            const bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) rest = notHost.join(".") + rest;
            this.hostname = validParts.join(".");
            break;
          }
        }
      }
    }
    if (this.hostname.length > hostnameMaxLen) this.hostname = "";
    if (ipv6Hostname) this.hostname = this.hostname.substr(1, this.hostname.length - 2);
  }
  const hash = rest.indexOf("#");
  if (hash !== -1) {
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  const qm = rest.indexOf("?");
  if (qm !== -1) {
    this.search = rest.substr(qm);
    rest = rest.slice(0, qm);
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) this.pathname = "";
  return this;
};
Url.prototype.parseHost = function(host) {
  let port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ":") this.port = port.substr(1);
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};
var parse_default = urlParse;
var mdurl_exports = /* @__PURE__ */ __export$1({
  decode: () => decode_default,
  encode: () => encode_default,
  format: () => format,
  parse: () => parse_default
});
var require_punycode = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/punycode.js@2.3.1/node_modules/punycode.js/punycode.js": ((exports$1, module) => {
  const maxInt = 2147483647;
  const base = 36;
  const tMin = 1;
  const tMax = 26;
  const skew = 38;
  const damp = 700;
  const initialBias = 72;
  const initialN = 128;
  const delimiter = "-";
  const regexPunycode = /^xn--/;
  const regexNonASCII = /[^\0-\x7F]/;
  const regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
  const errors = {
    "overflow": "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
  };
  const baseMinusTMin = base - tMin;
  const floor = Math.floor;
  const stringFromCharCode = String.fromCharCode;
  function error(type) {
    throw new RangeError(errors[type]);
  }
  function map(array, callback) {
    const result = [];
    let length = array.length;
    while (length--) result[length] = callback(array[length]);
    return result;
  }
  function mapDomain(domain, callback) {
    const parts = domain.split("@");
    let result = "";
    if (parts.length > 1) {
      result = parts[0] + "@";
      domain = parts[1];
    }
    domain = domain.replace(regexSeparators, ".");
    const encoded = map(domain.split("."), callback).join(".");
    return result + encoded;
  }
  function ucs2decode(string) {
    const output = [];
    let counter = 0;
    const length = string.length;
    while (counter < length) {
      const value = string.charCodeAt(counter++);
      if (value >= 55296 && value <= 56319 && counter < length) {
        const extra = string.charCodeAt(counter++);
        if ((extra & 64512) == 56320) output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
        else {
          output.push(value);
          counter--;
        }
      } else output.push(value);
    }
    return output;
  }
  const ucs2encode = (codePoints) => String.fromCodePoint(...codePoints);
  const basicToDigit = function(codePoint) {
    if (codePoint >= 48 && codePoint < 58) return 26 + (codePoint - 48);
    if (codePoint >= 65 && codePoint < 91) return codePoint - 65;
    if (codePoint >= 97 && codePoint < 123) return codePoint - 97;
    return base;
  };
  const digitToBasic = function(digit, flag) {
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  };
  const adapt = function(delta, numPoints, firstTime) {
    let k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);
    for (; delta > baseMinusTMin * tMax >> 1; k += base) delta = floor(delta / baseMinusTMin);
    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  };
  const decode = function(input) {
    const output = [];
    const inputLength = input.length;
    let i2 = 0;
    let n2 = initialN;
    let bias = initialBias;
    let basic = input.lastIndexOf(delimiter);
    if (basic < 0) basic = 0;
    for (let j = 0; j < basic; ++j) {
      if (input.charCodeAt(j) >= 128) error("not-basic");
      output.push(input.charCodeAt(j));
    }
    for (let index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
      const oldi = i2;
      for (let w = 1, k = base; ; k += base) {
        if (index >= inputLength) error("invalid-input");
        const digit = basicToDigit(input.charCodeAt(index++));
        if (digit >= base) error("invalid-input");
        if (digit > floor((maxInt - i2) / w)) error("overflow");
        i2 += digit * w;
        const t2 = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
        if (digit < t2) break;
        const baseMinusT = base - t2;
        if (w > floor(maxInt / baseMinusT)) error("overflow");
        w *= baseMinusT;
      }
      const out = output.length + 1;
      bias = adapt(i2 - oldi, out, oldi == 0);
      if (floor(i2 / out) > maxInt - n2) error("overflow");
      n2 += floor(i2 / out);
      i2 %= out;
      output.splice(i2++, 0, n2);
    }
    return String.fromCodePoint(...output);
  };
  const encode = function(input) {
    const output = [];
    input = ucs2decode(input);
    const inputLength = input.length;
    let n2 = initialN;
    let delta = 0;
    let bias = initialBias;
    for (const currentValue of input) if (currentValue < 128) output.push(stringFromCharCode(currentValue));
    const basicLength = output.length;
    let handledCPCount = basicLength;
    if (basicLength) output.push(delimiter);
    while (handledCPCount < inputLength) {
      let m = maxInt;
      for (const currentValue of input) if (currentValue >= n2 && currentValue < m) m = currentValue;
      const handledCPCountPlusOne = handledCPCount + 1;
      if (m - n2 > floor((maxInt - delta) / handledCPCountPlusOne)) error("overflow");
      delta += (m - n2) * handledCPCountPlusOne;
      n2 = m;
      for (const currentValue of input) {
        if (currentValue < n2 && ++delta > maxInt) error("overflow");
        if (currentValue === n2) {
          let q = delta;
          for (let k = base; ; k += base) {
            const t2 = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (q < t2) break;
            const qMinusT = q - t2;
            const baseMinusT = base - t2;
            output.push(stringFromCharCode(digitToBasic(t2 + qMinusT % baseMinusT, 0)));
            q = floor(qMinusT / baseMinusT);
          }
          output.push(stringFromCharCode(digitToBasic(q, 0)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }
      ++delta;
      ++n2;
    }
    return output.join("");
  };
  const toUnicode = function(input) {
    return mapDomain(input, function(string) {
      return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
    });
  };
  const toASCII = function(input) {
    return mapDomain(input, function(string) {
      return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
    });
  };
  const punycode$1 = {
    "version": "2.3.1",
    "ucs2": {
      "decode": ucs2decode,
      "encode": ucs2encode
    },
    "decode": decode,
    "encode": encode,
    "toASCII": toASCII,
    "toUnicode": toUnicode
  };
  module.exports = punycode$1;
}) });
var import_punycode = /* @__PURE__ */ __toESM(require_punycode());
var utils_exports = /* @__PURE__ */ __export({
  arrayReplaceAt: () => arrayReplaceAt,
  assign: () => assign,
  countLines: () => countLines,
  escapeHtml: () => escapeHtml$1,
  escapeRE: () => escapeRE,
  fromCodePoint: () => fromCodePoint$1,
  has: () => has,
  isMdAsciiPunct: () => isMdAsciiPunct,
  isPunctChar: () => isPunctChar,
  isSpace: () => isSpace$7,
  isString: () => isString,
  isValidEntityCode: () => isValidEntityCode$1,
  isWhiteSpace: () => isWhiteSpace,
  lib: () => lib,
  mdurl: () => mdurl_exports,
  normalizeReference: () => normalizeReference$1,
  ucmicro: () => uc_exports,
  unescapeAll: () => unescapeAll$1,
  unescapeMd: () => unescapeMd
});
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function isString(obj) {
  return _class(obj) === "[object String]";
}
const _hasOwnProperty = Object.prototype.hasOwnProperty;
function has(object, key) {
  return _hasOwnProperty.call(object, key);
}
function assign(obj, ...sources) {
  sources.forEach((source) => {
    if (!source) return;
    if (typeof source !== "object") throw new TypeError(`${String(source)}must be object`);
    Object.keys(source).forEach((key) => {
      obj[key] = source[key];
    });
  });
  return obj;
}
function isSpace$7(code$1) {
  return code$1 === 9 || code$1 === 32;
}
function isWhiteSpace(code$1) {
  if (code$1 >= 8192 && code$1 <= 8202) return true;
  switch (code$1) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return true;
  }
  return false;
}
function isPunctChar(ch) {
  return regex_default$3.test(ch) || regex_default$5.test(ch);
}
function isMdAsciiPunct(ch) {
  switch (ch) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
function normalizeReference$1(str) {
  str = str.trim().replace(/\s+/g, " ");
  if ("ẞ".toLowerCase() === "Ṿ") str = str.replace(/ẞ/g, "ß");
  return str.toLowerCase().toUpperCase();
}
function arrayReplaceAt(src, pos, newElements) {
  return [
    ...src.slice(0, pos),
    ...newElements,
    ...src.slice(pos + 1)
  ];
}
function isValidEntityCode$1(c) {
  if (c >= 55296 && c <= 57343) return false;
  if (c >= 64976 && c <= 65007) return false;
  if ((c & 65535) === 65535 || (c & 65535) === 65534) return false;
  if (c >= 0 && c <= 8) return false;
  if (c === 11) return false;
  if (c >= 14 && c <= 31) return false;
  if (c >= 127 && c <= 159) return false;
  if (c > 1114111) return false;
  return true;
}
function fromCodePoint$1(c) {
  if (c > 65535) {
    c -= 65536;
    const surrogate1 = 55296 + (c >> 10);
    const surrogate2 = 56320 + (c & 1023);
    return String.fromCharCode(surrogate1, surrogate2);
  }
  return String.fromCharCode(c);
}
const UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-\./:;<=>?@[\\\]^_`{|}~])/g;
const UNESCAPE_ALL_RE$1 = new RegExp(`${UNESCAPE_MD_RE.source}|${/&([a-z#][a-z0-9]{1,31});/gi.source}`, "gi");
const DIGITAL_ENTITY_TEST_RE$1 = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function replaceEntityPattern(match2, name) {
  if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE$1.test(name)) {
    const code$1 = name[1].toLowerCase() === "x" ? Number.parseInt(name.slice(2), 16) : Number.parseInt(name.slice(1), 10);
    if (isValidEntityCode$1(code$1)) return fromCodePoint$1(code$1);
    return match2;
  }
  const decoded = decodeHTML(match2);
  if (decoded !== match2) return decoded;
  return match2;
}
function unescapeMd(str) {
  if (!str.includes("\\")) return str;
  return str.replace(UNESCAPE_MD_RE, "$1");
}
function unescapeAll$1(str) {
  if (!str.includes("\\") && !str.includes("&")) return str;
  return str.replace(UNESCAPE_ALL_RE$1, (match2, escaped, entity$1) => {
    if (escaped) return escaped;
    return replaceEntityPattern(match2, entity$1);
  });
}
const HTML_ESCAPE_TEST_RE$1 = /[&<>"]/;
const HTML_ESCAPE_REPLACE_RE$1 = /[&<>"]/g;
const HTML_REPLACEMENTS$1 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function replaceUnsafeChar$1(ch) {
  return HTML_REPLACEMENTS$1[ch];
}
function escapeHtml$1(str) {
  if (HTML_ESCAPE_TEST_RE$1.test(str)) return str.replace(HTML_ESCAPE_REPLACE_RE$1, replaceUnsafeChar$1);
  return str;
}
const REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
function escapeRE(str) {
  return str.replace(REGEXP_ESCAPE_RE, "\\$&");
}
const lib = {
  mdurl: mdurl_exports,
  ucmicro: uc_exports
};
function countLines(input) {
  if (input.length === 0) return 0;
  let count = 0;
  let pos = -1;
  while ((pos = input.indexOf("\n", pos + 1)) !== -1) count++;
  return count;
}
function parseLinkDestination(str, start, max) {
  let code$1;
  let pos = start;
  const result = {
    ok: false,
    pos: 0,
    str: ""
  };
  if (str.charCodeAt(pos) === 60) {
    pos++;
    while (pos < max) {
      code$1 = str.charCodeAt(pos);
      if (code$1 === 10) return result;
      if (code$1 === 60) return result;
      if (code$1 === 62) {
        result.pos = pos + 1;
        result.str = str.slice(start + 1, pos);
        result.ok = true;
        return result;
      }
      if (code$1 === 92 && pos + 1 < max) {
        pos += 2;
        continue;
      }
      pos++;
    }
    return result;
  }
  let level = 0;
  while (pos < max) {
    code$1 = str.charCodeAt(pos);
    if (code$1 === 32) break;
    if (code$1 < 32 || code$1 === 127) break;
    if (code$1 === 92 && pos + 1 < max) {
      if (str.charCodeAt(pos + 1) === 32) break;
      pos += 2;
      continue;
    }
    if (code$1 === 40) {
      level++;
      if (level > 32) return result;
    }
    if (code$1 === 41) {
      if (level === 0) break;
      level--;
    }
    pos++;
  }
  if (start === pos) return result;
  if (level !== 0) return result;
  result.str = str.slice(start, pos);
  result.pos = pos;
  result.ok = true;
  return result;
}
var parse_link_destination_default = parseLinkDestination;
function parseLinkLabel(state, start, disableNested) {
  let level = 1;
  let found = false;
  let marker;
  let prevPos;
  const max = state.posMax;
  const oldPos = state.pos;
  state.pos = start + 1;
  while (state.pos < max) {
    marker = state.src.charCodeAt(state.pos);
    if (marker === 93) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }
    prevPos = state.pos;
    state.md.inline.skipToken(state);
    if (marker === 91) {
      if (prevPos === state.pos - 1) level++;
      else if (disableNested) {
        state.pos = oldPos;
        return -1;
      }
    }
  }
  let labelEnd = -1;
  if (found) labelEnd = state.pos;
  state.pos = oldPos;
  return labelEnd;
}
var parse_link_label_default = parseLinkLabel;
function parseLinkTitle(str, start, max, prev_state) {
  let code$1;
  let pos = start;
  const state = {
    ok: false,
    can_continue: false,
    pos: 0,
    str: "",
    marker: 0
  };
  if (prev_state) {
    state.str = prev_state.str;
    state.marker = prev_state.marker;
  } else {
    if (pos >= max) return state;
    let marker = str.charCodeAt(pos);
    if (marker !== 34 && marker !== 39 && marker !== 40) return state;
    start++;
    pos++;
    if (marker === 40) marker = 41;
    state.marker = marker;
  }
  while (pos < max) {
    code$1 = str.charCodeAt(pos);
    if (code$1 === state.marker) {
      state.pos = pos + 1;
      state.str += str.slice(start, pos);
      state.ok = true;
      return state;
    } else if (code$1 === 40 && state.marker === 41) return state;
    else if (code$1 === 92 && pos + 1 < max) pos++;
    pos++;
  }
  state.can_continue = true;
  state.str += str.slice(start, pos);
  return state;
}
var parse_link_title_default = parseLinkTitle;
function attrIndex(token, name) {
  if (!token.attrs) return -1;
  for (let i2 = 0; i2 < token.attrs.length; i2++) if (token.attrs[i2][0] === name) return i2;
  return -1;
}
function attrPush(token, attrData) {
  if (!token.attrs) token.attrs = [];
  token.attrs.push(attrData);
}
function attrSet(token, name, value) {
  const idx = attrIndex(token, name);
  const attrData = [name, value];
  if (idx < 0) attrPush(token, attrData);
  else token.attrs[idx] = attrData;
}
function attrGet(token, name) {
  const idx = attrIndex(token, name);
  if (idx >= 0) return token.attrs[idx][1];
  return null;
}
function attrJoin(token, name, value) {
  const idx = attrIndex(token, name);
  if (idx < 0) attrPush(token, [name, value]);
  else token.attrs[idx][1] = `${token.attrs[idx][1]} ${value}`;
}
var helpers_exports = /* @__PURE__ */ __export({
  attrGet: () => attrGet,
  attrIndex: () => attrIndex,
  attrJoin: () => attrJoin,
  attrPush: () => attrPush,
  attrSet: () => attrSet,
  parseLinkDestination: () => parseLinkDestination,
  parseLinkLabel: () => parseLinkLabel,
  parseLinkTitle: () => parseLinkTitle
});
const BAD_PROTO_RE = /^(?:vbscript|javascript|file|data):/;
const GOOD_DATA_RE = /^data:image\/(?:gif|png|jpeg|webp);/;
const RECODE_HOSTNAME_FOR = [
  "http:",
  "https:",
  "mailto:"
];
function validateLink(url) {
  const str = url.trim().toLowerCase();
  return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) : true;
}
function normalizeLink(url) {
  const parsed = parse_default(url, true);
  if (parsed.hostname) {
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.includes(parsed.protocol)) try {
      parsed.hostname = import_punycode.default.toASCII(parsed.hostname);
    } catch {
    }
  }
  return encode_default(format(parsed));
}
function normalizeLinkText(url) {
  const parsed = parse_default(url, true);
  if (parsed.hostname) {
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.includes(parsed.protocol)) try {
      parsed.hostname = import_punycode.default.toUnicode(parsed.hostname);
    } catch {
    }
  }
  return decode_default(format(parsed), `${decode_default.defaultChars}%`);
}
var Token = class {
  constructor(type, tag, nesting) {
    /**
    * Token#type -> String
    *
    * Type of the token (string, e.g. "paragraph_open")
    */
    __publicField(this, "type");
    /**
    * Token#tag -> String
    *
    * html tag name, e.g. "p"
    */
    __publicField(this, "tag");
    /**
    * Token#attrs -> Array
    *
    * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
    */
    __publicField(this, "attrs");
    /**
    * Token#map -> Array
    *
    * Source map info. Format: `[ line_begin, line_end ]`
    */
    __publicField(this, "map");
    /**
    * Token#nesting -> Number
    *
    * Level change (number in {-1, 0, 1} set), where:
    *
    * -  `1` means the tag is opening
    * -  `0` means the tag is self-closing
    * - `-1` means the tag is closing
    */
    __publicField(this, "nesting");
    /**
    * Token#level -> Number
    *
    * nesting level, the same as `state.level`
    */
    __publicField(this, "level");
    /**
    * Token#children -> Array
    *
    * An array of child nodes (inline and img tokens)
    */
    __publicField(this, "children");
    /**
    * Token#content -> String
    *
    * In a case of self-closing tag (code, html, fence, etc.),
    * it has contents of this tag.
    */
    __publicField(this, "content");
    /**
    * Token#markup -> String
    *
    * '*' or '_' for emphasis, fence string for fence, etc.
    */
    __publicField(this, "markup");
    /**
    * Token#info -> String
    *
    * Additional information:
    *
    * - Info string for "fence" tokens
    * - The value "auto" for autolink "link_open" and "link_close" tokens
    * - The string value of the item marker for ordered-list "list_item_open" tokens
    */
    __publicField(this, "info");
    /**
    * Token#meta -> Object
    *
    * A place for plugins to store an arbitrary data
    */
    __publicField(this, "meta");
    /**
    * Token#block -> Boolean
    *
    * True for block-level tokens, false for inline tokens.
    * Used in renderer to calculate line breaks
    */
    __publicField(this, "block");
    /**
    * Token#hidden -> Boolean
    *
    * If it's true, ignore this element when rendering. Used for tight lists
    * to hide paragraphs.
    */
    __publicField(this, "hidden");
    this.type = type;
    this.tag = tag;
    this.attrs = null;
    this.map = null;
    this.nesting = nesting;
    this.level = 0;
    this.children = null;
    this.content = "";
    this.markup = "";
    this.info = "";
    this.meta = null;
    this.block = false;
    this.hidden = false;
  }
  /**
  * Token.attrIndex(name) -> Number
  *
  * Search attribute index by name.
  */
  attrIndex(name) {
    if (!this.attrs) return -1;
    const attrs = this.attrs;
    for (let i2 = 0, len = attrs.length; i2 < len; i2++) if (attrs[i2][0] === name) return i2;
    return -1;
  }
  /**
  * Token.attrPush(attrData)
  *
  * Add `[ name, value ]` attribute to list. Init attrs if necessary
  */
  attrPush(attrData) {
    if (this.attrs) this.attrs.push(attrData);
    else this.attrs = [attrData];
  }
  /**
  * Token.attrSet(name, value)
  *
  * Set `name` attribute to `value`. Override old value if exists.
  */
  attrSet(name, value) {
    const idx = this.attrIndex(name);
    const attrData = [name, value];
    if (idx < 0) this.attrPush(attrData);
    else this.attrs[idx] = attrData;
  }
  /**
  * Token.attrGet(name)
  *
  * Get the value of attribute `name`, or null if it does not exist.
  */
  attrGet(name) {
    const idx = this.attrIndex(name);
    let value = null;
    if (idx >= 0) value = this.attrs[idx][1];
    return value;
  }
  /**
  * Token.attrJoin(name, value)
  *
  * Join value to existing attribute via space. Or create new attribute if not
  * exists. Useful to operate with token classes.
  */
  attrJoin(name, value) {
    const idx = this.attrIndex(name);
    if (idx < 0) this.attrPush([name, value]);
    else this.attrs[idx][1] = `${this.attrs[idx][1]} ${value}`;
  }
};
function block(state) {
  if (state.inlineMode) {
    const token = new Token("inline", "", 0);
    token.content = state.src;
    token.map = [0, 1];
    token.children = [];
    token.level = 0;
    state.tokens.push(token);
  } else if (state.md && state.md.block) state.md.block.parse(state.src, state.md, state.env, state.tokens);
}
function inline(state) {
  const tokens = state.tokens;
  for (let i2 = 0, l2 = tokens.length; i2 < l2; i2++) {
    const tok = tokens[i2];
    if (tok.type === "inline" && state.md) {
      if (!tok.children) tok.children = [];
      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
    }
  }
}
function isLinkOpen$1(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose$1(str) {
  return /^<\/a\s*>/i.test(str);
}
function linkify(state) {
  var _a2, _b;
  const blockTokens = state.tokens;
  if (!((_b = (_a2 = state.md) == null ? void 0 : _a2.options) == null ? void 0 : _b.linkify)) return;
  for (let j = 0; j < blockTokens.length; j++) {
    const blockToken = blockTokens[j];
    if (blockToken.type !== "inline" || !state.md.linkify.pretest(blockToken.content)) continue;
    let tokens = blockToken.children || [];
    let htmlLinkLevel = 0;
    for (let i2 = tokens.length - 1; i2 >= 0; i2--) {
      const currentToken = tokens[i2];
      if (currentToken.type === "link_close") {
        i2--;
        while (i2 >= 0 && tokens[i2].level !== currentToken.level && tokens[i2].type !== "link_open") i2--;
        continue;
      }
      if (currentToken.type === "html_inline") {
        if (isLinkOpen$1(currentToken.content) && htmlLinkLevel > 0) htmlLinkLevel--;
        if (isLinkClose$1(currentToken.content)) htmlLinkLevel++;
      }
      if (htmlLinkLevel > 0) continue;
      if (currentToken.type !== "text" || !state.md.linkify.test(currentToken.content)) continue;
      const text$1 = currentToken.content;
      let links = state.md.linkify.match(text$1) || [];
      if (links.length === 0) continue;
      const nodes = [];
      let level = currentToken.level;
      let lastPos = 0;
      if (links.length > 0 && links[0].index === 0 && i2 > 0 && tokens[i2 - 1].type === "text_special") links = links.slice(1);
      for (let ln2 = 0; ln2 < links.length; ln2++) {
        const link$1 = links[ln2];
        const fullUrl = state.md.normalizeLink(link$1.url);
        if (!state.md.validateLink(fullUrl)) continue;
        let urlText = link$1.text;
        if (!link$1.schema) urlText = state.md.normalizeLinkText(`http://${urlText}`).replace(/^http:\/\//, "");
        else if (link$1.schema === "mailto:" && !/^mailto:/i.test(urlText)) urlText = state.md.normalizeLinkText(`mailto:${urlText}`).replace(/^mailto:/, "");
        else urlText = state.md.normalizeLinkText(urlText);
        const pos = link$1.index;
        if (pos > lastPos) {
          const textToken$1 = new Token("text", "", 0);
          textToken$1.content = text$1.slice(lastPos, pos);
          textToken$1.level = level;
          nodes.push(textToken$1);
        }
        const tokenOpen = new Token("link_open", "a", 1);
        tokenOpen.attrs = [["href", fullUrl]];
        tokenOpen.level = level++;
        tokenOpen.markup = "linkify";
        tokenOpen.info = "auto";
        nodes.push(tokenOpen);
        const tokenText = new Token("text", "", 0);
        tokenText.content = urlText;
        tokenText.level = level;
        nodes.push(tokenText);
        const tokenClose = new Token("link_close", "a", -1);
        tokenClose.level = --level;
        tokenClose.markup = "linkify";
        tokenClose.info = "auto";
        nodes.push(tokenClose);
        lastPos = link$1.lastIndex;
      }
      if (lastPos === 0) continue;
      if (lastPos < text$1.length) {
        const textToken$1 = new Token("text", "", 0);
        textToken$1.content = text$1.slice(lastPos);
        textToken$1.level = level;
        nodes.push(textToken$1);
      }
      blockToken.children = tokens = arrayReplaceAt(tokens, i2, nodes);
    }
  }
}
const NEWLINES_RE = /\r\n?|\n/g;
const NULL_RE = /\0/g;
function normalize(state) {
  if (!state || typeof state.src !== "string") return;
  let str = state.src.replace(NEWLINES_RE, "\n");
  str = str.replace(NULL_RE, "�");
  state.src = str;
}
const RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
const SCOPED_ABBR_TEST_RE = /\((?:c|tm|r)\)/i;
const SCOPED_ABBR_RE = /\((c|tm|r)\)/gi;
const SCOPED_ABBR = {
  c: "©",
  r: "®",
  tm: "™"
};
function replaceFn(_match, name) {
  return SCOPED_ABBR[name.toLowerCase()];
}
function replace_scoped(inlineTokens) {
  let inside_autolink = 0;
  for (let i2 = inlineTokens.length - 1; i2 >= 0; i2--) {
    const token = inlineTokens[i2];
    if (token.type === "text" && !inside_autolink) token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
    if (token.type === "link_open" && token.info === "auto") inside_autolink--;
    if (token.type === "link_close" && token.info === "auto") inside_autolink++;
  }
}
function replace_rare(inlineTokens) {
  let inside_autolink = 0;
  for (let i2 = inlineTokens.length - 1; i2 >= 0; i2--) {
    const token = inlineTokens[i2];
    if (token.type === "text" && !inside_autolink) {
      if (RARE_RE.test(token.content)) token.content = token.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—").replace(/(^|\s)--(?=\s|$)/gm, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–");
    }
    if (token.type === "link_open" && token.info === "auto") inside_autolink--;
    if (token.type === "link_close" && token.info === "auto") inside_autolink++;
  }
}
function replacements(state) {
  var _a2, _b;
  if (!((_b = (_a2 = state.md) == null ? void 0 : _a2.options) == null ? void 0 : _b.typographer)) return;
  for (let blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    const blk = state.tokens[blkIdx];
    if (blk.type !== "inline") continue;
    const blkContent = blk.content || (Array.isArray(blk.children) ? blk.children.map((c) => c.type === "text" ? c.content : "").join("") : "");
    if (SCOPED_ABBR_TEST_RE.test(blkContent)) replace_scoped(blk.children || []);
    if (RARE_RE.test(blkContent)) replace_rare(blk.children || []);
  }
}
var CoreRuler = class {
  constructor() {
    __publicField(this, "rules", []);
    __publicField(this, "cache", null);
  }
  invalidateCache() {
    this.cache = null;
  }
  push(name, fn2) {
    const idx = this.rules.findIndex((r2) => r2.name === name);
    if (idx >= 0) this.rules.splice(idx, 1);
    this.rules.push({
      name,
      fn: fn2,
      enabled: true
    });
    this.invalidateCache();
  }
  at(name, fn2) {
    const idx = this.rules.findIndex((r2) => r2.name === name);
    if (idx < 0) throw new Error(`Parser rule not found: ${name}`);
    this.rules[idx].fn = fn2;
    this.invalidateCache();
  }
  before(beforeName, name, fn2) {
    const i2 = this.rules.findIndex((r2) => r2.name === beforeName);
    if (i2 < 0) throw new Error(`Parser rule not found: ${beforeName}`);
    const exists = this.rules.findIndex((r2) => r2.name === name);
    if (exists >= 0) this.rules.splice(exists, 1);
    this.rules.splice(i2, 0, {
      name,
      fn: fn2,
      enabled: true
    });
    this.invalidateCache();
  }
  after(afterName, name, fn2) {
    const i2 = this.rules.findIndex((r2) => r2.name === afterName);
    if (i2 < 0) throw new Error(`Parser rule not found: ${afterName}`);
    const exists = this.rules.findIndex((r2) => r2.name === name);
    if (exists >= 0) this.rules.splice(exists, 1);
    this.rules.splice(i2 + 1, 0, {
      name,
      fn: fn2,
      enabled: true
    });
    this.invalidateCache();
  }
  enable(names, ignoreInvalid) {
    const list$1 = Array.isArray(names) ? names : [names];
    const changed = [];
    for (const n2 of list$1) {
      const idx = this.rules.findIndex((r2) => r2.name === n2);
      if (idx < 0) {
        if (!ignoreInvalid) throw new Error(`Rules manager: invalid rule name ${n2}`);
        continue;
      }
      if (!this.rules[idx].enabled) {
        this.rules[idx].enabled = true;
        changed.push(n2);
      }
    }
    if (changed.length) this.invalidateCache();
    return changed;
  }
  disable(names, ignoreInvalid) {
    const list$1 = Array.isArray(names) ? names : [names];
    const changed = [];
    for (const n2 of list$1) {
      const idx = this.rules.findIndex((r2) => r2.name === n2);
      if (idx < 0) {
        if (!ignoreInvalid) throw new Error(`Rules manager: invalid rule name ${n2}`);
        continue;
      }
      if (this.rules[idx].enabled) {
        this.rules[idx].enabled = false;
        changed.push(n2);
      }
    }
    if (changed.length) this.invalidateCache();
    return changed;
  }
  enableOnly(names) {
    const set2 = new Set(names);
    let changed = false;
    for (const r2 of this.rules) {
      const next = set2.has(r2.name);
      if (r2.enabled !== next) {
        r2.enabled = next;
        changed = true;
      }
    }
    if (changed) this.invalidateCache();
  }
  compileCache() {
    this.cache = this.rules.filter((r2) => r2.enabled).map((r2) => r2.fn);
  }
  getRules(_chainName = "") {
    if (!this.cache) this.compileCache();
    return this.cache;
  }
};
const QUOTE_TEST_RE = /['"]/;
const QUOTE_RE = /['"]/g;
const APOSTROPHE = "’";
function replaceAt(str, index, ch) {
  return str.slice(0, index) + ch + str.slice(index + 1);
}
function process_inlines(tokens, state) {
  let j;
  const stack = [];
  const quotes = state.md && state.md.options && state.md.options.quotes || "“”‘’";
  for (let i2 = 0; i2 < tokens.length; i2++) {
    const token = tokens[i2];
    const thisLevel = tokens[i2].level;
    for (j = stack.length - 1; j >= 0; j--) if (stack[j].level <= thisLevel) break;
    stack.length = j + 1;
    if (token.type !== "text") continue;
    let text$1 = token.content;
    let pos = 0;
    let max = text$1.length;
    OUTER: while (pos < max) {
      QUOTE_RE.lastIndex = pos;
      const t2 = QUOTE_RE.exec(text$1);
      if (!t2) break;
      let canOpen = true;
      let canClose = true;
      pos = t2.index + 1;
      const isSingle = t2[0] === "'";
      let lastChar = 32;
      if (t2.index - 1 >= 0) lastChar = text$1.charCodeAt(t2.index - 1);
      else for (j = i2 - 1; j >= 0; j--) {
        if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak") break;
        if (!tokens[j].content) continue;
        lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
        break;
      }
      let nextChar = 32;
      if (pos < max) nextChar = text$1.charCodeAt(pos);
      else for (j = i2 + 1; j < tokens.length; j++) {
        if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak") break;
        if (!tokens[j].content) continue;
        nextChar = tokens[j].content.charCodeAt(0);
        break;
      }
      const isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
      const isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
      const isLastWhiteSpace = isWhiteSpace(lastChar);
      const isNextWhiteSpace = isWhiteSpace(nextChar);
      if (isNextWhiteSpace) canOpen = false;
      else if (isNextPunctChar) {
        if (!(isLastWhiteSpace || isLastPunctChar)) canOpen = false;
      }
      if (isLastWhiteSpace) canClose = false;
      else if (isLastPunctChar) {
        if (!(isNextWhiteSpace || isNextPunctChar)) canClose = false;
      }
      if (nextChar === 34 && t2[0] === '"') {
        if (lastChar >= 48 && lastChar <= 57) canClose = canOpen = false;
      }
      if (canOpen && canClose) {
        canOpen = isLastPunctChar;
        canClose = isNextPunctChar;
      }
      if (!canOpen && !canClose) {
        if (isSingle) token.content = replaceAt(token.content, t2.index, APOSTROPHE);
        continue;
      }
      if (canClose) for (j = stack.length - 1; j >= 0; j--) {
        let item = stack[j];
        if (stack[j].level < thisLevel) break;
        if (item.single === isSingle && stack[j].level === thisLevel) {
          item = stack[j];
          let openQuote;
          let closeQuote;
          if (isSingle) {
            openQuote = quotes[2] || "‘";
            closeQuote = quotes[3] || "’";
          } else {
            openQuote = quotes[0] || "“";
            closeQuote = quotes[1] || "”";
          }
          token.content = replaceAt(token.content, t2.index, closeQuote);
          tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, openQuote);
          pos += closeQuote.length - 1;
          if (item.token === i2) pos += openQuote.length - 1;
          text$1 = token.content;
          max = text$1.length;
          stack.length = j;
          continue OUTER;
        }
      }
      if (canOpen) stack.push({
        token: i2,
        pos: t2.index,
        single: isSingle,
        level: thisLevel
      });
      else if (canClose && isSingle) token.content = replaceAt(token.content, t2.index, APOSTROPHE);
    }
  }
}
function smartquotes(state) {
  if (!state.md.options.typographer) return;
  for (let blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    const inlineToken = state.tokens[blkIdx];
    if (inlineToken.type !== "inline") continue;
    const inlineContent = typeof inlineToken.content === "string" ? inlineToken.content : (inlineToken.children || []).map((t2) => t2.content || "").join("");
    if (!QUOTE_TEST_RE.test(inlineContent) || !inlineToken.children) continue;
    process_inlines(inlineToken.children, state);
  }
}
function text_join(state) {
  (state.tokens || []).forEach((tk) => {
    if (tk.type === "inline" && Array.isArray(tk.children)) {
      const out = [];
      for (let i2 = 0; i2 < tk.children.length; i2++) {
        const ch = tk.children[i2];
        if (ch.type === "text") {
          let content = ch.content || "";
          while (i2 + 1 < tk.children.length && tk.children[i2 + 1].type === "text") {
            i2++;
            content += tk.children[i2].content || "";
          }
          const textToken$1 = new Token("text", "", 0);
          textToken$1.content = content;
          textToken$1.level = ch.level;
          out.push(textToken$1);
        } else out.push(ch);
      }
      tk.children = out;
    }
  });
}
function isSpace$6(code$1) {
  switch (code$1) {
    case 9:
    case 32:
      return true;
  }
  return false;
}
function blockquote(state, startLine, endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let max = state.eMarks[startLine];
  const oldLineMax = state.lineMax;
  if (state.sCount[startLine] - state.blkIndent >= 4) return false;
  if (state.src.charCodeAt(pos) !== 62) return false;
  if (silent) return true;
  const oldBMarks = [];
  const oldBSCount = [];
  const oldSCount = [];
  const oldTShift = [];
  const terminatorRules = state.md.block.ruler.getRules("blockquote");
  const oldParentType = state.parentType;
  state.parentType = "blockquote";
  let lastLineEmpty = false;
  let nextLine;
  for (nextLine = startLine; nextLine < endLine; nextLine++) {
    const isOutdented = state.sCount[nextLine] < state.blkIndent;
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];
    if (pos >= max) break;
    if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
      let initial = state.sCount[nextLine] + 1;
      let spaceAfterMarker;
      let adjustTab;
      if (state.src.charCodeAt(pos) === 32) {
        pos++;
        initial++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 9) {
        spaceAfterMarker = true;
        if ((state.bsCount[nextLine] + initial) % 4 === 3) {
          pos++;
          initial++;
          adjustTab = false;
        } else adjustTab = true;
      } else spaceAfterMarker = false;
      let offset = initial;
      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;
      while (pos < max) {
        const ch = state.src.charCodeAt(pos);
        if (isSpace$6(ch)) if (ch === 9) offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
        else offset++;
        else break;
        pos++;
      }
      lastLineEmpty = pos >= max;
      oldBSCount.push(state.bsCount[nextLine]);
      state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
      oldSCount.push(state.sCount[nextLine]);
      state.sCount[nextLine] = offset - initial;
      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }
    if (lastLineEmpty) break;
    let terminate = false;
    for (let i2 = 0, l2 = terminatorRules.length; i2 < l2; i2++) if (terminatorRules[i2](state, nextLine, endLine, true)) {
      terminate = true;
      break;
    }
    if (terminate) {
      state.lineMax = nextLine;
      if (state.blkIndent !== 0) {
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] -= state.blkIndent;
      }
      break;
    }
    oldBMarks.push(state.bMarks[nextLine]);
    oldBSCount.push(state.bsCount[nextLine]);
    oldTShift.push(state.tShift[nextLine]);
    oldSCount.push(state.sCount[nextLine]);
    state.sCount[nextLine] = -1;
  }
  const oldIndent = state.blkIndent;
  state.blkIndent = 0;
  const token_o = state.push("blockquote_open", "blockquote", 1);
  token_o.markup = ">";
  const lines = [startLine, 0];
  token_o.map = lines;
  state.md.block.tokenize(state, startLine, nextLine);
  const token_c = state.push("blockquote_close", "blockquote", -1);
  token_c.markup = ">";
  state.lineMax = oldLineMax;
  state.parentType = oldParentType;
  lines[1] = state.line;
  for (let i2 = 0; i2 < oldTShift.length; i2++) {
    state.bMarks[i2 + startLine] = oldBMarks[i2];
    state.tShift[i2 + startLine] = oldTShift[i2];
    state.sCount[i2 + startLine] = oldSCount[i2];
    state.bsCount[i2 + startLine] = oldBSCount[i2];
  }
  state.blkIndent = oldIndent;
  return true;
}
function code(state, startLine, endLine) {
  if (state.sCount[startLine] - state.blkIndent < 4) return false;
  let nextLine = startLine + 1;
  let last = nextLine;
  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }
  state.line = last;
  const token = state.push("code_block", "code", 0);
  token.content = `${state.getLines(startLine, last, 4 + state.blkIndent, false)}
`;
  token.map = [startLine, state.line];
  return true;
}
function fence(state, startLine, endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) return false;
  if (pos + 3 > max) return false;
  const marker = state.src.charCodeAt(pos);
  if (marker !== 126 && marker !== 96) return false;
  let mem = pos;
  pos = state.skipChars(pos, marker);
  let len = pos - mem;
  if (len < 3) return false;
  const markup = state.src.slice(mem, pos);
  const params = state.src.slice(pos, max);
  if (marker === 96) {
    if (params.includes(String.fromCharCode(marker))) return false;
  }
  if (silent) return true;
  let nextLine = startLine;
  let haveEndMarker = false;
  for (; ; ) {
    nextLine++;
    if (nextLine >= endLine) break;
    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];
    if (pos < max && state.sCount[nextLine] < state.blkIndent) break;
    if (state.src.charCodeAt(pos) !== marker) continue;
    if (state.sCount[nextLine] - state.blkIndent >= 4) continue;
    pos = state.skipChars(pos, marker);
    if (pos - mem < len) continue;
    pos = state.skipSpaces(pos);
    if (pos < max) continue;
    haveEndMarker = true;
    break;
  }
  len = state.sCount[startLine];
  state.line = nextLine + (haveEndMarker ? 1 : 0);
  const token = state.push("fence", "code", 0);
  token.info = params;
  token.content = state.getLines(startLine + 1, nextLine, len, true);
  token.markup = markup;
  token.map = [startLine, state.line];
  return true;
}
function isSpace$5(code$1) {
  switch (code$1) {
    case 9:
    case 32:
      return true;
  }
  return false;
}
function heading(state, startLine, endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) return false;
  let ch = state.src.charCodeAt(pos);
  if (ch !== 35 || pos >= max) return false;
  let level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 35 && pos < max && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }
  if (level > 6 || pos < max && !isSpace$5(ch)) return false;
  if (silent) return true;
  max = state.skipSpacesBack(max, pos);
  const tmp = state.skipCharsBack(max, 35, pos);
  if (tmp > pos && isSpace$5(state.src.charCodeAt(tmp - 1))) max = tmp;
  state.line = startLine + 1;
  const token_o = state.push("heading_open", `h${String(level)}`, 1);
  token_o.markup = "########".slice(0, level);
  token_o.map = [startLine, state.line];
  const token_i = state.push("inline", "", 0);
  token_i.content = state.src.slice(pos, max).trim();
  token_i.map = [startLine, state.line];
  token_i.children = [];
  const token_c = state.push("heading_close", `h${String(level)}`, -1);
  token_c.markup = "########".slice(0, level);
  return true;
}
function isSpace$4(code$1) {
  switch (code$1) {
    case 9:
    case 32:
      return true;
  }
  return false;
}
function hr(state, startLine, endLine, silent) {
  const max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) return false;
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  const marker = state.src.charCodeAt(pos++);
  if (marker !== 42 && marker !== 45 && marker !== 95) return false;
  let cnt = 1;
  while (pos < max) {
    const ch = state.src.charCodeAt(pos++);
    if (ch !== marker && !isSpace$4(ch)) return false;
    if (ch === marker) cnt++;
  }
  if (cnt < 3) return false;
  if (silent) return true;
  state.line = startLine + 1;
  const token = state.push("hr", "hr", 0);
  token.map = [startLine, state.line];
  token.markup = new Array(cnt + 1).join(String.fromCharCode(marker));
  return true;
}
var html_blocks_default = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
const open_tag = `<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`;
const close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
const HTML_OPEN_CLOSE_TAG_RE = /* @__PURE__ */ new RegExp(`^(?:${open_tag}|${close_tag})`);
const HTML_SEQUENCES = [
  [
    /^<(script|pre|style|textarea)(?=(\s|>|$))/i,
    /<\/(script|pre|style|textarea)>/i,
    true
  ],
  [
    /^<!--/,
    /-->/,
    true
  ],
  [
    /^<\?/,
    /\?>/,
    true
  ],
  [
    /^<![A-Z]/,
    />/,
    true
  ],
  [
    /^<!\[CDATA\[/,
    /\]\]>/,
    true
  ],
  [
    new RegExp(`^</?(${html_blocks_default.join("|")})(?=(\\s|/?>|$))`, "i"),
    /^$/,
    true
  ],
  [
    /* @__PURE__ */ new RegExp(`${HTML_OPEN_CLOSE_TAG_RE.source}\\s*$`),
    /^$/,
    false
  ]
];
function html_block(state, startLine, endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) return false;
  if (!state.md.options.html) return false;
  if (state.src.charCodeAt(pos) !== 60) return false;
  let lineText = state.src.slice(pos, max);
  let i2 = 0;
  for (; i2 < HTML_SEQUENCES.length; i2++) if (HTML_SEQUENCES[i2][0].test(lineText)) break;
  if (i2 === HTML_SEQUENCES.length) return false;
  if (silent) return HTML_SEQUENCES[i2][2];
  let nextLine = startLine + 1;
  if (!HTML_SEQUENCES[i2][1].test(lineText)) for (; nextLine < endLine; nextLine++) {
    if (state.sCount[nextLine] < state.blkIndent) break;
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];
    lineText = state.src.slice(pos, max);
    if (HTML_SEQUENCES[i2][1].test(lineText)) {
      if (lineText.length !== 0) nextLine++;
      break;
    }
  }
  state.line = nextLine;
  const token = state.push("html_block", "", 0);
  token.map = [startLine, nextLine];
  token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
  return true;
}
function lheading(state, startLine, endLine) {
  const terminatorRules = state.md.block.ruler.getRules("paragraph");
  if (state.sCount[startLine] - state.blkIndent >= 4) return false;
  const oldParentType = state.parentType;
  state.parentType = "paragraph";
  let level = 0;
  let marker;
  let nextLine = startLine + 1;
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) continue;
    if (state.sCount[nextLine] >= state.blkIndent) {
      let pos = state.bMarks[nextLine] + state.tShift[nextLine];
      const max = state.eMarks[nextLine];
      if (pos < max) {
        marker = state.src.charCodeAt(pos);
        if (marker === 45 || marker === 61) {
          pos = state.skipChars(pos, marker);
          pos = state.skipSpaces(pos);
          if (pos >= max) {
            level = marker === 61 ? 1 : 2;
            break;
          }
        }
      }
    }
    if (state.sCount[nextLine] < 0) continue;
    let terminate = false;
    for (let i2 = 0, l2 = terminatorRules.length; i2 < l2; i2++) if (terminatorRules[i2](state, nextLine, endLine, true)) {
      terminate = true;
      break;
    }
    if (terminate) break;
  }
  if (!level) return false;
  const content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  state.line = nextLine + 1;
  const token_o = state.push("heading_open", `h${String(level)}`, 1);
  token_o.markup = String.fromCharCode(marker);
  token_o.map = [startLine, state.line];
  const token_i = state.push("inline", "", 0);
  token_i.content = content;
  token_i.map = [startLine, state.line - 1];
  token_i.children = [];
  const token_c = state.push("heading_close", `h${String(level)}`, -1);
  token_c.markup = String.fromCharCode(marker);
  state.parentType = oldParentType;
  return true;
}
function isSpace$3(code$1) {
  switch (code$1) {
    case 9:
    case 32:
      return true;
  }
  return false;
}
function skipBulletListMarker(state, startLine) {
  const max = state.eMarks[startLine];
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  const marker = state.src.charCodeAt(pos++);
  if (marker !== 42 && marker !== 45 && marker !== 43) return -1;
  if (pos < max) {
    if (!isSpace$3(state.src.charCodeAt(pos))) return -1;
  }
  return pos;
}
function skipOrderedListMarker(state, startLine) {
  const start = state.bMarks[startLine] + state.tShift[startLine];
  const max = state.eMarks[startLine];
  let pos = start;
  if (pos + 1 >= max) return -1;
  let ch = state.src.charCodeAt(pos++);
  if (ch < 48 || ch > 57) return -1;
  for (; ; ) {
    if (pos >= max) return -1;
    ch = state.src.charCodeAt(pos++);
    if (ch >= 48 && ch <= 57) {
      if (pos - start >= 10) return -1;
      continue;
    }
    if (ch === 41 || ch === 46) break;
    return -1;
  }
  if (pos < max) {
    ch = state.src.charCodeAt(pos);
    if (!isSpace$3(ch)) return -1;
  }
  return pos;
}
function markTightParagraphs(state, idx) {
  const level = state.level + 2;
  for (let i2 = idx + 2, l2 = state.tokens.length - 2; i2 < l2; i2++) if (state.tokens[i2].level === level && state.tokens[i2].type === "paragraph_open") {
    state.tokens[i2 + 2].hidden = true;
    state.tokens[i2].hidden = true;
    i2 += 2;
  }
}
function list(state, startLine, endLine, silent) {
  let max;
  let pos;
  let start = 0;
  let nextLine = startLine;
  let tight = true;
  if (state.sCount[nextLine] - state.blkIndent >= 4) return false;
  if (state.listIndent >= 0 && state.sCount[nextLine] - state.listIndent >= 4 && state.sCount[nextLine] < state.blkIndent) return false;
  let isTerminatingParagraph = false;
  if (silent && state.parentType === "paragraph") {
    if (state.sCount[nextLine] >= state.blkIndent) isTerminatingParagraph = true;
  }
  let isOrdered;
  let markerValue;
  let posAfterMarker;
  if ((posAfterMarker = skipOrderedListMarker(state, nextLine)) >= 0) {
    isOrdered = true;
    start = state.bMarks[nextLine] + state.tShift[nextLine];
    markerValue = Number(state.src.slice(start, posAfterMarker - 1));
    if (isTerminatingParagraph && markerValue !== 1) return false;
  } else if ((posAfterMarker = skipBulletListMarker(state, nextLine)) >= 0) isOrdered = false;
  else return false;
  if (isTerminatingParagraph) {
    if (state.skipSpaces(posAfterMarker) >= state.eMarks[nextLine]) return false;
  }
  if (silent) return true;
  const markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
  const listTokIdx = state.tokens.length;
  if (isOrdered) {
    const token = state.push("ordered_list_open", "ol", 1);
    if (markerValue !== void 0 && markerValue !== 1) token.attrs = [["start", String(markerValue)]];
  } else state.push("bullet_list_open", "ul", 1);
  const listLines = [nextLine, 0];
  state.tokens[state.tokens.length - 1].map = listLines;
  state.tokens[state.tokens.length - 1].markup = String.fromCharCode(markerCharCode);
  let prevEmptyEnd = false;
  const terminatorRules = state.md.block.ruler.getRules("list");
  const oldParentType = state.parentType;
  state.parentType = "list";
  while (nextLine < endLine) {
    pos = posAfterMarker;
    max = state.eMarks[nextLine];
    const initial = state.sCount[nextLine] + posAfterMarker - (state.bMarks[nextLine] + state.tShift[nextLine]);
    let offset = initial;
    while (pos < max) {
      const ch = state.src.charCodeAt(pos);
      if (ch === 9) offset += 4 - (offset + state.bsCount[nextLine]) % 4;
      else if (ch === 32) offset++;
      else break;
      pos++;
    }
    const contentStart = pos;
    let indentAfterMarker;
    if (contentStart >= max) indentAfterMarker = 1;
    else indentAfterMarker = offset - initial;
    if (indentAfterMarker > 4) indentAfterMarker = 1;
    const indent = initial + indentAfterMarker;
    const token = state.push("list_item_open", "li", 1);
    token.markup = String.fromCharCode(markerCharCode);
    const itemLines = [nextLine, 0];
    token.map = itemLines;
    if (isOrdered) token.info = state.src.slice(start, posAfterMarker - 1);
    const oldTight = state.tight;
    const oldTShift = state.tShift[nextLine];
    const oldSCount = state.sCount[nextLine];
    const oldListIndent = state.listIndent;
    state.listIndent = state.blkIndent;
    state.blkIndent = indent;
    state.tight = true;
    state.tShift[nextLine] = contentStart - state.bMarks[nextLine];
    state.sCount[nextLine] = offset;
    if (contentStart >= max && state.isEmpty(nextLine + 1)) state.line = Math.min(state.line + 2, endLine);
    else state.md.block.tokenize(state, nextLine, endLine, true);
    if (!state.tight || prevEmptyEnd) tight = false;
    prevEmptyEnd = state.line - nextLine > 1 && state.isEmpty(state.line - 1);
    state.blkIndent = state.listIndent;
    state.listIndent = oldListIndent;
    state.tShift[nextLine] = oldTShift;
    state.sCount[nextLine] = oldSCount;
    state.tight = oldTight;
    state.push("list_item_close", "li", -1).markup = String.fromCharCode(markerCharCode);
    nextLine = state.line;
    itemLines[1] = nextLine;
    if (nextLine >= endLine) break;
    if (state.sCount[nextLine] < state.blkIndent) break;
    if (state.sCount[nextLine] - state.blkIndent >= 4) break;
    let terminate = false;
    for (let i2 = 0, l2 = terminatorRules.length; i2 < l2; i2++) if (terminatorRules[i2](state, nextLine, endLine, true)) {
      terminate = true;
      break;
    }
    if (terminate) break;
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) break;
      start = state.bMarks[nextLine] + state.tShift[nextLine];
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) break;
    }
    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) break;
  }
  if (isOrdered) state.push("ordered_list_close", "ol", -1).markup = String.fromCharCode(markerCharCode);
  else state.push("bullet_list_close", "ul", -1).markup = String.fromCharCode(markerCharCode);
  listLines[1] = nextLine;
  state.line = nextLine;
  state.parentType = oldParentType;
  if (tight) markTightParagraphs(state, listTokIdx);
  return true;
}
function paragraph(state, startLine, endLine) {
  const terminatorRules = state.md.block.ruler.getRules("paragraph");
  const oldParentType = state.parentType;
  let nextLine = startLine + 1;
  state.parentType = "paragraph";
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) continue;
    if (state.sCount[nextLine] < 0) continue;
    let terminate = false;
    for (let i2 = 0, l2 = terminatorRules.length; i2 < l2; i2++) if (terminatorRules[i2](state, nextLine, endLine, true)) {
      terminate = true;
      break;
    }
    if (terminate) break;
  }
  const content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  state.line = nextLine;
  const token_o = state.push("paragraph_open", "p", 1);
  token_o.map = [startLine, state.line];
  const token_i = state.push("inline", "", 0);
  token_i.content = content;
  token_i.map = [startLine, state.line];
  token_i.children = [];
  state.push("paragraph_close", "p", -1);
  state.parentType = oldParentType;
  return true;
}
function isSpace$2(code$1) {
  switch (code$1) {
    case 9:
    case 32:
      return true;
  }
  return false;
}
function normalizeReference(str) {
  str = str.trim().replace(/\s+/g, " ");
  if ("ẞ".toLowerCase() === "Ṿ".toLowerCase()) str = str.toLowerCase();
  return str.toLowerCase().toUpperCase().toLowerCase();
}
function reference(state, startLine, _endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let max = state.eMarks[startLine];
  let nextLine = startLine + 1;
  if (state.sCount[startLine] - state.blkIndent >= 4) return false;
  if (state.src.charCodeAt(pos) !== 91) return false;
  function getNextLine(nextLine$1) {
    const endLine = state.lineMax;
    if (nextLine$1 >= endLine || state.isEmpty(nextLine$1)) return null;
    let isContinuation = false;
    if (state.sCount[nextLine$1] - state.blkIndent > 3) isContinuation = true;
    if (state.sCount[nextLine$1] < 0) isContinuation = true;
    if (!isContinuation) {
      const terminatorRules = state.md.block.ruler.getRules("reference");
      const oldParentType = state.parentType;
      state.parentType = "reference";
      let terminate = false;
      for (let i2 = 0, l2 = terminatorRules.length; i2 < l2; i2++) if (terminatorRules[i2](state, nextLine$1, endLine, true)) {
        terminate = true;
        break;
      }
      state.parentType = oldParentType;
      if (terminate) return null;
    }
    const pos$1 = state.bMarks[nextLine$1] + state.tShift[nextLine$1];
    const max$1 = state.eMarks[nextLine$1];
    return state.src.slice(pos$1, max$1 + 1);
  }
  let str = state.src.slice(pos, max + 1);
  max = str.length;
  let labelEnd = -1;
  for (pos = 1; pos < max; pos++) {
    const ch = str.charCodeAt(pos);
    if (ch === 91) return false;
    else if (ch === 93) {
      labelEnd = pos;
      break;
    } else if (ch === 10) {
      const lineContent = getNextLine(nextLine);
      if (lineContent !== null) {
        str += lineContent;
        max = str.length;
        nextLine++;
      }
    } else if (ch === 92) {
      pos++;
      if (pos < max && str.charCodeAt(pos) === 10) {
        const lineContent = getNextLine(nextLine);
        if (lineContent !== null) {
          str += lineContent;
          max = str.length;
          nextLine++;
        }
      }
    }
  }
  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) return false;
  for (pos = labelEnd + 2; pos < max; pos++) {
    const ch = str.charCodeAt(pos);
    if (ch === 10) {
      const lineContent = getNextLine(nextLine);
      if (lineContent !== null) {
        str += lineContent;
        max = str.length;
        nextLine++;
      }
    } else if (isSpace$2(ch)) ;
    else break;
  }
  const destRes = state.md.helpers.parseLinkDestination(str, pos, max);
  if (!destRes.ok) return false;
  const href = state.md.normalizeLink(destRes.str);
  if (!state.md.validateLink(href)) return false;
  pos = destRes.pos;
  const destEndPos = pos;
  const destEndLineNo = nextLine;
  const start = pos;
  for (; pos < max; pos++) {
    const ch = str.charCodeAt(pos);
    if (ch === 10) {
      const lineContent = getNextLine(nextLine);
      if (lineContent !== null) {
        str += lineContent;
        max = str.length;
        nextLine++;
      }
    } else if (isSpace$2(ch)) ;
    else break;
  }
  let titleRes = state.md.helpers.parseLinkTitle(str, pos, max);
  while (titleRes.can_continue) {
    const lineContent = getNextLine(nextLine);
    if (lineContent === null) break;
    str += lineContent;
    pos = max;
    max = str.length;
    nextLine++;
    titleRes = state.md.helpers.parseLinkTitle(str, pos, max, titleRes);
  }
  let title;
  if (pos < max && start !== pos && titleRes.ok) {
    title = titleRes.str;
    pos = titleRes.pos;
  } else {
    title = "";
    pos = destEndPos;
    nextLine = destEndLineNo;
  }
  while (pos < max) {
    if (!isSpace$2(str.charCodeAt(pos))) break;
    pos++;
  }
  if (pos < max && str.charCodeAt(pos) !== 10) {
    if (title) {
      title = "";
      pos = destEndPos;
      nextLine = destEndLineNo;
      while (pos < max) {
        if (!isSpace$2(str.charCodeAt(pos))) break;
        pos++;
      }
    }
  }
  if (pos < max && str.charCodeAt(pos) !== 10) return false;
  const label = normalizeReference(str.slice(1, labelEnd));
  if (!label) return false;
  if (silent) return true;
  if (typeof state.env.references === "undefined") state.env.references = {};
  if (typeof state.env.references[label] === "undefined") state.env.references[label] = {
    title,
    href
  };
  state.line = nextLine;
  return true;
}
function isSpace$1(code$1) {
  switch (code$1) {
    case 9:
    case 32:
      return true;
  }
  return false;
}
const MAX_AUTOCOMPLETED_CELLS = 65536;
function getLine(state, line) {
  const pos = state.bMarks[line] + state.tShift[line];
  const max = state.eMarks[line];
  return state.src.slice(pos, max);
}
function escapedSplit(str) {
  const result = [];
  const max = str.length;
  let pos = 0;
  let ch = str.charCodeAt(pos);
  let isEscaped = false;
  let lastPos = 0;
  let current = "";
  while (pos < max) {
    if (ch === 124) if (!isEscaped) {
      result.push(current + str.substring(lastPos, pos));
      current = "";
      lastPos = pos + 1;
    } else {
      current += str.substring(lastPos, pos - 1);
      lastPos = pos;
    }
    isEscaped = ch === 92;
    pos++;
    ch = str.charCodeAt(pos);
  }
  result.push(current + str.substring(lastPos));
  return result;
}
function table(state, startLine, endLine, silent) {
  if (startLine + 2 > endLine) return false;
  let nextLine = startLine + 1;
  if (state.sCount[nextLine] < state.blkIndent) return false;
  if (state.sCount[nextLine] - state.blkIndent >= 4) return false;
  let pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) return false;
  const firstCh = state.src.charCodeAt(pos++);
  if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) return false;
  if (pos >= state.eMarks[nextLine]) return false;
  const secondCh = state.src.charCodeAt(pos++);
  if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace$1(secondCh)) return false;
  if (firstCh === 45 && isSpace$1(secondCh)) return false;
  while (pos < state.eMarks[nextLine]) {
    const ch = state.src.charCodeAt(pos);
    if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace$1(ch)) return false;
    pos++;
  }
  let lineText = getLine(state, startLine + 1);
  let columns = lineText.split("|");
  const aligns = [];
  for (let i2 = 0; i2 < columns.length; i2++) {
    const t2 = columns[i2].trim();
    if (!t2) if (i2 === 0 || i2 === columns.length - 1) continue;
    else return false;
    if (!/^:?-+:?$/.test(t2)) return false;
    if (t2.charCodeAt(t2.length - 1) === 58) aligns.push(t2.charCodeAt(0) === 58 ? "center" : "right");
    else if (t2.charCodeAt(0) === 58) aligns.push("left");
    else aligns.push("");
  }
  lineText = getLine(state, startLine).trim();
  if (!lineText.includes("|")) return false;
  if (state.sCount[startLine] - state.blkIndent >= 4) return false;
  columns = escapedSplit(lineText);
  if (columns.length && columns[0] === "") columns.shift();
  if (columns.length && columns[columns.length - 1] === "") columns.pop();
  const columnCount = columns.length;
  if (columnCount === 0 || columnCount !== aligns.length) return false;
  if (silent) return true;
  const oldParentType = state.parentType;
  state.parentType = "table";
  const terminatorRules = state.md.block.ruler.getRules("blockquote");
  const token_to = state.push("table_open", "table", 1);
  const tableLines = [startLine, 0];
  token_to.map = tableLines;
  const token_tho = state.push("thead_open", "thead", 1);
  token_tho.map = [startLine, startLine + 1];
  const token_htro = state.push("tr_open", "tr", 1);
  token_htro.map = [startLine, startLine + 1];
  for (let i2 = 0; i2 < columns.length; i2++) {
    const token_ho = state.push("th_open", "th", 1);
    if (aligns[i2]) token_ho.attrs = [["style", `text-align:${aligns[i2]}`]];
    const token_il = state.push("inline", "", 0);
    token_il.content = columns[i2].trim();
    token_il.children = [];
    state.push("th_close", "th", -1);
  }
  state.push("tr_close", "tr", -1);
  state.push("thead_close", "thead", -1);
  let tbodyLines;
  let autocompletedCells = 0;
  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.sCount[nextLine] < state.blkIndent) break;
    let terminate = false;
    for (let i2 = 0, l2 = terminatorRules.length; i2 < l2; i2++) if (terminatorRules[i2](state, nextLine, endLine, true)) {
      terminate = true;
      break;
    }
    if (terminate) break;
    lineText = getLine(state, nextLine).trim();
    if (!lineText) break;
    if (state.sCount[nextLine] - state.blkIndent >= 4) break;
    columns = escapedSplit(lineText);
    if (columns.length && columns[0] === "") columns.shift();
    if (columns.length && columns[columns.length - 1] === "") columns.pop();
    autocompletedCells += columnCount - columns.length;
    if (autocompletedCells > MAX_AUTOCOMPLETED_CELLS) break;
    if (nextLine === startLine + 2) {
      const token_tbo = state.push("tbody_open", "tbody", 1);
      token_tbo.map = tbodyLines = [startLine + 2, 0];
    }
    const token_tro = state.push("tr_open", "tr", 1);
    token_tro.map = [nextLine, nextLine + 1];
    for (let i2 = 0; i2 < columnCount; i2++) {
      const token_tdo = state.push("td_open", "td", 1);
      if (aligns[i2]) token_tdo.attrs = [["style", `text-align:${aligns[i2]}`]];
      const token_il = state.push("inline", "", 0);
      token_il.content = columns[i2] ? columns[i2].trim() : "";
      token_il.children = [];
      state.push("td_close", "td", -1);
    }
    state.push("tr_close", "tr", -1);
  }
  if (tbodyLines) {
    state.push("tbody_close", "tbody", -1);
    tbodyLines[1] = nextLine;
  }
  state.push("table_close", "table", -1);
  tableLines[1] = nextLine;
  state.parentType = oldParentType;
  state.line = nextLine;
  return true;
}
var BlockRuler = class {
  constructor() {
    __publicField(this, "_rules", []);
    __publicField(this, "cache", null);
  }
  invalidateCache() {
    this.cache = null;
  }
  push(name, fn2, options) {
    this._rules.push({
      name,
      enabled: true,
      fn: fn2,
      alt: (options == null ? void 0 : options.alt) || []
    });
    this.invalidateCache();
  }
  before(beforeName, name, fn2, options) {
    const i2 = this._rules.findIndex((r2) => r2.name === beforeName);
    if (i2 < 0) throw new Error(`Parser rule not found: ${beforeName}`);
    const exists = this._rules.findIndex((r2) => r2.name === name);
    if (exists >= 0) this._rules.splice(exists, 1);
    this._rules.splice(i2, 0, {
      name,
      enabled: true,
      fn: fn2,
      alt: (options == null ? void 0 : options.alt) || []
    });
    this.invalidateCache();
  }
  after(afterName, name, fn2, options) {
    const i2 = this._rules.findIndex((r2) => r2.name === afterName);
    if (i2 < 0) throw new Error(`Parser rule not found: ${afterName}`);
    const exists = this._rules.findIndex((r2) => r2.name === name);
    if (exists >= 0) this._rules.splice(exists, 1);
    this._rules.splice(i2 + 1, 0, {
      name,
      enabled: true,
      fn: fn2,
      alt: (options == null ? void 0 : options.alt) || []
    });
    this.invalidateCache();
  }
  getRules(chainName) {
    const chain = chainName || "";
    if (!this.cache) this.compileCache();
    return this.cache.get(chain) ?? [];
  }
  at(name, fn2, options) {
    const index = this._rules.findIndex((r2) => r2.name === name);
    if (index === -1) throw new Error(`Parser rule not found: ${name}`);
    this._rules[index].fn = fn2;
    if (options == null ? void 0 : options.alt) this._rules[index].alt = options.alt;
    this.invalidateCache();
  }
  enable(names, ignoreInvalid) {
    const nameList = Array.isArray(names) ? names : [names];
    const result = [];
    nameList.forEach((name) => {
      const idx = this._rules.findIndex((r2) => r2.name === name);
      if (idx === -1) {
        if (ignoreInvalid) return;
        throw new Error(`Rules manager: invalid rule name ${name}`);
      }
      if (!this._rules[idx].enabled) {
        this._rules[idx].enabled = true;
        result.push(name);
      }
    });
    if (result.length) this.invalidateCache();
    return result;
  }
  disable(names, ignoreInvalid) {
    const nameList = Array.isArray(names) ? names : [names];
    const result = [];
    nameList.forEach((name) => {
      const idx = this._rules.findIndex((r2) => r2.name === name);
      if (idx === -1) {
        if (ignoreInvalid) return;
        throw new Error(`Rules manager: invalid rule name ${name}`);
      }
      if (this._rules[idx].enabled) {
        this._rules[idx].enabled = false;
        result.push(name);
      }
    });
    if (result.length) this.invalidateCache();
    return result;
  }
  enableOnly(names) {
    const allow = new Set(names);
    let changed = false;
    for (const r2 of this._rules) {
      const next = allow.has(r2.name);
      if (r2.enabled !== next) {
        r2.enabled = next;
        changed = true;
      }
    }
    if (changed) this.invalidateCache();
  }
  compileCache() {
    const chains = /* @__PURE__ */ new Set([""]);
    for (const rule of this._rules) {
      if (!rule.enabled) continue;
      for (const alt of rule.alt) chains.add(alt);
    }
    const cache = /* @__PURE__ */ new Map();
    for (const chain of chains) {
      const bucket = [];
      for (const rule of this._rules) {
        if (!rule.enabled) continue;
        if (chain !== "" && !rule.alt.includes(chain)) continue;
        bucket.push(rule.fn);
      }
      cache.set(chain, bucket);
    }
    this.cache = cache;
  }
};
function isSpace(code$1) {
  switch (code$1) {
    case 9:
    case 32:
      return true;
  }
  return false;
}
var StateBlock = class {
  constructor(src, md, env, tokens) {
    __publicField(this, "src");
    __publicField(this, "md");
    __publicField(this, "env");
    __publicField(this, "tokens");
    __publicField(this, "Token");
    __publicField(this, "bMarks", []);
    __publicField(this, "eMarks", []);
    __publicField(this, "tShift", []);
    __publicField(this, "sCount", []);
    __publicField(this, "bsCount", []);
    __publicField(this, "blkIndent", 0);
    __publicField(this, "line", 0);
    __publicField(this, "lineMax", 0);
    __publicField(this, "tight", false);
    __publicField(this, "ddIndent", -1);
    __publicField(this, "listIndent", -1);
    __publicField(this, "parentType", "root");
    __publicField(this, "level", 0);
    this.src = src;
    this.md = md;
    this.env = env;
    this.tokens = tokens;
    this.Token = Token;
    const s2 = this.src;
    let indent = 0;
    let offset = 0;
    let start = 0;
    let indent_found = false;
    for (let pos = 0, len = s2.length; pos < len; pos++) {
      const ch = s2.charCodeAt(pos);
      if (!indent_found) if (isSpace(ch)) {
        indent++;
        if (ch === 9) offset += 4 - offset % 4;
        else offset++;
        continue;
      } else indent_found = true;
      if (ch === 10 || pos === len - 1) {
        if (ch !== 10) pos++;
        this.bMarks.push(start);
        this.eMarks.push(pos);
        this.tShift.push(indent);
        this.sCount.push(offset);
        this.bsCount.push(0);
        indent_found = false;
        indent = 0;
        offset = 0;
        start = pos + 1;
      }
    }
    this.bMarks.push(s2.length);
    this.eMarks.push(s2.length);
    this.tShift.push(0);
    this.sCount.push(0);
    this.bsCount.push(0);
    this.lineMax = this.bMarks.length - 1;
  }
  push(type, tag, nesting) {
    const token = new Token(type, tag, nesting);
    token.level = this.level;
    token.content = "";
    token.block = true;
    if (nesting < 0) this.level--;
    token.level = this.level;
    if (nesting > 0) this.level++;
    this.tokens.push(token);
    return token;
  }
  isEmpty(line) {
    return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
  }
  skipEmptyLines(from) {
    for (let max = this.lineMax; from < max; from++) if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) break;
    return from;
  }
  skipSpaces(pos) {
    for (let max = this.src.length; pos < max; pos++) if (!isSpace(this.src.charCodeAt(pos))) break;
    return pos;
  }
  skipSpacesBack(pos, min) {
    if (pos <= min) return pos;
    while (pos > min) if (!isSpace(this.src.charCodeAt(--pos))) return pos + 1;
    return pos;
  }
  skipChars(pos, code$1) {
    for (let max = this.src.length; pos < max; pos++) if (this.src.charCodeAt(pos) !== code$1) break;
    return pos;
  }
  skipCharsBack(pos, code$1, min) {
    if (pos <= min) return pos;
    while (pos > min) if (code$1 !== this.src.charCodeAt(--pos)) return pos + 1;
    return pos;
  }
  getLines(begin, end, indent, keepLastLF) {
    if (begin >= end) return "";
    const queue = new Array(end - begin);
    for (let i2 = 0, line = begin; line < end; line++, i2++) {
      let lineIndent = 0;
      const lineStart = this.bMarks[line];
      let first = lineStart;
      let last;
      if (line + 1 < end || keepLastLF) last = this.eMarks[line] + 1;
      else last = this.eMarks[line];
      while (first < last && lineIndent < indent) {
        const ch = this.src.charCodeAt(first);
        if (isSpace(ch)) if (ch === 9) lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
        else lineIndent++;
        else if (first - lineStart < this.tShift[line]) lineIndent++;
        else break;
        first++;
      }
      if (lineIndent > indent) queue[i2] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last);
      else queue[i2] = this.src.slice(first, last);
    }
    return queue.join("");
  }
};
const _rules = [
  [
    "table",
    table,
    ["paragraph", "reference"]
  ],
  ["code", code],
  [
    "fence",
    fence,
    [
      "paragraph",
      "reference",
      "blockquote",
      "list"
    ]
  ],
  [
    "blockquote",
    blockquote,
    [
      "paragraph",
      "reference",
      "blockquote",
      "list"
    ]
  ],
  [
    "hr",
    hr,
    [
      "paragraph",
      "reference",
      "blockquote",
      "list"
    ]
  ],
  [
    "list",
    list,
    [
      "paragraph",
      "reference",
      "blockquote"
    ]
  ],
  ["reference", reference],
  [
    "html_block",
    html_block,
    [
      "paragraph",
      "reference",
      "blockquote"
    ]
  ],
  [
    "heading",
    heading,
    [
      "paragraph",
      "reference",
      "blockquote"
    ]
  ],
  ["lheading", lheading],
  ["paragraph", paragraph]
];
var ParserBlock = class {
  constructor() {
    __publicField(this, "ruler");
    this.ruler = new BlockRuler();
    for (let i2 = 0; i2 < _rules.length; i2++) this.ruler.push(_rules[i2][0], _rules[i2][1], { alt: (_rules[i2][2] || []).slice() });
  }
  /**
  * Generate tokens for input range
  */
  tokenize(state, startLine, endLine) {
    const rules = this.ruler.getRules("");
    const len = rules.length;
    const maxNesting = state.md.options.maxNesting;
    let line = startLine;
    let hasEmptyLines = false;
    while (line < endLine) {
      state.line = line = state.skipEmptyLines(line);
      if (line >= endLine) break;
      if (state.sCount[line] < state.blkIndent) break;
      if (state.level >= maxNesting) {
        state.line = endLine;
        break;
      }
      const prevLine = state.line;
      let ok = false;
      for (let i2 = 0; i2 < len; i2++) {
        ok = rules[i2](state, line, endLine, false);
        if (ok) {
          if (prevLine >= state.line) throw new Error("block rule didn't increment state.line");
          break;
        }
      }
      if (!ok) throw new Error("none of the block rules matched");
      state.tight = !hasEmptyLines;
      if (state.isEmpty(state.line - 1)) hasEmptyLines = true;
      line = state.line;
      if (line < endLine && state.isEmpty(line)) {
        hasEmptyLines = true;
        line++;
        state.line = line;
      }
    }
  }
  /**
  * ParserBlock.parse(src, md, env, outTokens)
  *
  * Process input string and push block tokens into `outTokens`
  */
  parse(src, md, env, outTokens) {
    if (!src) return;
    const state = new StateBlock(src, md, env, outTokens);
    this.tokenize(state, state.line, state.lineMax);
  }
};
const EMAIL_RE = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i;
const AUTOLINK_RE = /^[a-z][a-z0-9+.-]{1,31}:[^<>\x00-\x20]*$/i;
function autolink(state, silent) {
  let pos = state.pos;
  if (state.src.charCodeAt(pos) !== 60) return false;
  const start = state.pos;
  const max = state.posMax;
  for (; ; ) {
    if (++pos >= max) return false;
    const ch = state.src.charCodeAt(pos);
    if (ch === 60) return false;
    if (ch === 62) break;
  }
  const url = state.src.slice(start + 1, pos);
  if (AUTOLINK_RE.test(url)) {
    const fullUrl = state.md.normalizeLink(url);
    if (!state.md.validateLink(fullUrl)) return false;
    if (!silent) {
      const token_o = state.push("link_open", "a", 1);
      token_o.attrs = [["href", fullUrl]];
      token_o.markup = "autolink";
      token_o.info = "auto";
      const token_t = state.push("text", "", 0);
      token_t.content = state.md.normalizeLinkText(url);
      const token_c = state.push("link_close", "a", -1);
      token_c.markup = "autolink";
      token_c.info = "auto";
    }
    state.pos += url.length + 2;
    return true;
  }
  if (EMAIL_RE.test(url)) {
    const fullUrl = state.md.normalizeLink(`mailto:${url}`);
    if (!state.md.validateLink(fullUrl)) return false;
    if (!silent) {
      const token_o = state.push("link_open", "a", 1);
      token_o.attrs = [["href", fullUrl]];
      token_o.markup = "autolink";
      token_o.info = "auto";
      const token_t = state.push("text", "", 0);
      token_t.content = state.md.normalizeLinkText(url);
      const token_c = state.push("link_close", "a", -1);
      token_c.markup = "autolink";
      token_c.info = "auto";
    }
    state.pos += url.length + 2;
    return true;
  }
  return false;
}
var autolink_default = autolink;
function backticks(state, silent) {
  let pos = state.pos;
  if (state.src.charCodeAt(pos) !== 96) return false;
  const start = pos;
  pos++;
  const max = state.posMax;
  while (pos < max && state.src.charCodeAt(pos) === 96) pos++;
  const marker = state.src.slice(start, pos);
  const openerLength = marker.length;
  if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
    if (!silent) state.pending += marker;
    state.pos += openerLength;
    return true;
  }
  let matchEnd = pos;
  let matchStart;
  while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
    matchEnd = matchStart + 1;
    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96) matchEnd++;
    const closerLength = matchEnd - matchStart;
    if (closerLength === openerLength) {
      if (!silent) {
        const token = state.push("code_inline", "code", 0);
        token.markup = marker;
        token.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      state.pos = matchEnd;
      return true;
    }
    state.backticks[closerLength] = matchStart;
  }
  state.backticksScanned = true;
  if (!silent) state.pending += marker;
  state.pos += openerLength;
  return true;
}
var backticks_default = backticks;
function processDelimiters(delimiters) {
  const openersBottom = {};
  const max = delimiters.length;
  if (!max) return;
  let headerIdx = 0;
  let lastTokenIdx = -2;
  const jumps = [];
  for (let closerIdx = 0; closerIdx < max; closerIdx++) {
    const closer = delimiters[closerIdx];
    jumps.push(0);
    if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) headerIdx = closerIdx;
    lastTokenIdx = closer.token;
    closer.length = closer.length || 0;
    if (!closer.close) continue;
    if (!Object.prototype.hasOwnProperty.call(openersBottom, closer.marker)) openersBottom[closer.marker] = [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ];
    const minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
    let openerIdx = headerIdx - jumps[headerIdx] - 1;
    let newMinOpenerIdx = openerIdx;
    for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
      const opener = delimiters[openerIdx];
      if (opener.marker !== closer.marker) continue;
      if (opener.open && opener.end < 0) {
        let isOddMatch = false;
        if (opener.close || closer.open) {
          if ((opener.length + closer.length) % 3 === 0) {
            if (opener.length % 3 !== 0 || closer.length % 3 !== 0) isOddMatch = true;
          }
        }
        if (!isOddMatch) {
          const lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
          jumps[closerIdx] = closerIdx - openerIdx + lastJump;
          jumps[openerIdx] = lastJump;
          closer.open = false;
          opener.end = closerIdx;
          opener.close = false;
          newMinOpenerIdx = -1;
          lastTokenIdx = -2;
          break;
        }
      }
    }
    if (newMinOpenerIdx !== -1) openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
  }
}
function balance_pairs(state) {
  const tokens_meta = state.tokens_meta;
  const max = state.tokens_meta.length;
  processDelimiters(state.delimiters);
  for (let curr = 0; curr < max; curr++) if (tokens_meta[curr] && tokens_meta[curr].delimiters) processDelimiters(tokens_meta[curr].delimiters);
}
var balance_pairs_default = balance_pairs;
function emphasis_tokenize(state, silent) {
  const start = state.pos;
  const marker = state.src.charCodeAt(start);
  if (silent) return false;
  if (marker !== 95 && marker !== 42) return false;
  const scanned = state.scanDelims(state.pos, marker === 42);
  if (!scanned || scanned.length === 0) return false;
  for (let i2 = 0; i2 < scanned.length; i2++) {
    const token = state.push("text", "", 0);
    token.content = String.fromCharCode(marker);
    state.delimiters.push({
      marker,
      length: scanned.length,
      token: state.tokens.length - 1,
      end: -1,
      open: scanned.can_open,
      close: scanned.can_close
    });
  }
  state.pos += scanned.length;
  return true;
}
function postProcess$1(state, delimiters) {
  const max = delimiters.length;
  for (let i2 = max - 1; i2 >= 0; i2--) {
    const startDelim = delimiters[i2];
    if (startDelim.marker !== 95 && startDelim.marker !== 42) continue;
    if (startDelim.end === -1) continue;
    const endDelim = delimiters[startDelim.end];
    const isStrong = i2 > 0 && delimiters[i2 - 1].end === startDelim.end + 1 && delimiters[i2 - 1].marker === startDelim.marker && delimiters[i2 - 1].token === startDelim.token - 1 && delimiters[startDelim.end + 1].token === endDelim.token + 1;
    const ch = String.fromCharCode(startDelim.marker);
    const token_o = state.tokens[startDelim.token];
    token_o.type = isStrong ? "strong_open" : "em_open";
    token_o.tag = isStrong ? "strong" : "em";
    token_o.nesting = 1;
    token_o.markup = isStrong ? ch + ch : ch;
    token_o.content = "";
    const token_c = state.tokens[endDelim.token];
    token_c.type = isStrong ? "strong_close" : "em_close";
    token_c.tag = isStrong ? "strong" : "em";
    token_c.nesting = -1;
    token_c.markup = isStrong ? ch + ch : ch;
    token_c.content = "";
    if (isStrong) {
      state.tokens[delimiters[i2 - 1].token].content = "";
      state.tokens[delimiters[startDelim.end + 1].token].content = "";
      i2--;
    }
  }
}
function emphasis_postProcess(state) {
  const tokens_meta = state.tokens_meta;
  const max = state.tokens_meta.length;
  postProcess$1(state, state.delimiters);
  for (let curr = 0; curr < max; curr++) if (tokens_meta[curr] && tokens_meta[curr].delimiters) postProcess$1(state, tokens_meta[curr].delimiters);
}
const emphasis = {
  tokenize: emphasis_tokenize,
  postProcess: emphasis_postProcess
};
const DIGITAL_RE = /^&#(x[a-f0-9]{1,6}|\d{1,7});/i;
const NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
const entities = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " "
};
function isValidEntityCode(code$1) {
  if (code$1 >= 55296 && code$1 <= 57343) return false;
  if (code$1 >= 1114111) return false;
  return true;
}
function fromCodePoint(code$1) {
  return String.fromCodePoint(code$1);
}
function decodeHTML$1(str) {
  const match2 = str.match(/^&([a-z][a-z0-9]{1,31});/i);
  if (match2 && entities[match2[1]]) return entities[match2[1]];
  return str;
}
function entity(state, silent) {
  const pos = state.pos;
  const max = state.posMax;
  if (state.src.charCodeAt(pos) !== 38) return false;
  if (pos + 1 >= max) return false;
  if (state.src.charCodeAt(pos + 1) === 35) {
    const match2 = state.src.slice(pos).match(DIGITAL_RE);
    if (match2) {
      if (!silent) {
        const code$1 = match2[1][0].toLowerCase() === "x" ? Number.parseInt(match2[1].slice(1), 16) : Number.parseInt(match2[1], 10);
        const token = state.push("text_special", "", 0);
        token.content = isValidEntityCode(code$1) ? fromCodePoint(code$1) : fromCodePoint(65533);
        token.markup = match2[0];
        token.info = "entity";
      }
      state.pos += match2[0].length;
      return true;
    }
  } else {
    const match2 = state.src.slice(pos).match(NAMED_RE);
    if (match2) {
      const decoded = decodeHTML$1(match2[0]);
      if (decoded !== match2[0]) {
        if (!silent) {
          const token = state.push("text_special", "", 0);
          token.content = decoded;
          token.markup = match2[0];
          token.info = "entity";
        }
        state.pos += match2[0].length;
        return true;
      }
    }
  }
  return false;
}
var entity_default = entity;
const ESCAPED = (() => {
  const table$1 = new Array(256).fill(0);
  const chars = "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-";
  for (let i2 = 0; i2 < 32; i2++) table$1[chars.charCodeAt(i2)] = 1;
  return table$1;
})();
function escape(state, silent) {
  const { pos, posMax, src } = state;
  if (src.charCodeAt(pos) !== 92) return false;
  const pos_next = pos + 1;
  if (pos_next >= posMax) return false;
  const ch = src.charCodeAt(pos_next);
  if (ch === 10) {
    if (!silent) state.push("hardbreak", "br", 0);
    state.pos += 2;
    return true;
  }
  let escapedStr = src[pos_next];
  let nextPos = pos_next;
  if (ch >= 55296 && ch <= 56319 && pos_next + 1 < posMax) {
    const ch2 = src.charCodeAt(pos_next + 1);
    if (ch2 >= 56320 && ch2 <= 57343) {
      escapedStr += src[pos_next + 1];
      nextPos++;
    }
  }
  const origStr = src[pos] + escapedStr;
  if (!silent) {
    const token = state.push("text_special", "", 0);
    if (ch < 256 && ESCAPED[ch]) token.content = escapedStr;
    else token.content = origStr;
    token.markup = origStr;
    token.info = "escape";
  }
  state.pos = nextPos + 1;
  return true;
}
var escape_default = escape;
function fragments_join(state) {
  var _a2;
  let curr, last;
  let level = 0;
  const tokens = state.tokens;
  const max = state.tokens.length;
  for (curr = last = 0; curr < max; curr++) {
    const token = tokens[curr];
    if (!token) continue;
    if (token.nesting && token.nesting < 0) level--;
    token.level = level;
    if (token.nesting && token.nesting > 0) level++;
    if (token.type === "text" && curr + 1 < max && ((_a2 = tokens[curr + 1]) == null ? void 0 : _a2.type) === "text") tokens[curr + 1].content = token.content + tokens[curr + 1].content;
    else {
      if (curr !== last) tokens[last] = token;
      last++;
    }
  }
  if (curr !== last) tokens.length = last;
}
var fragments_join_default = fragments_join;
const HTML_TAG_RE = /^<\/?[a-z][a-z0-9-]*(?:\s+[a-z_:][\w:.-]*(?:\s*=\s*(?:[^"'=<>`\s]+|'[^']*'|"[^"]*"))?)*\s*\/?>/i;
function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}
function isLetter(ch) {
  const lc = ch | 32;
  return lc >= 97 && lc <= 122;
}
function html_inline(state, silent) {
  if (!state.md.options.html) return false;
  const max = state.posMax;
  const pos = state.pos;
  if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max) return false;
  const ch = state.src.charCodeAt(pos + 1);
  if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) return false;
  const match2 = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match2) return false;
  if (!silent) {
    const token = state.push("html_inline", "", 0);
    token.content = match2[0];
    if (isLinkOpen(token.content)) state.linkLevel++;
    if (isLinkClose(token.content)) state.linkLevel--;
  }
  state.pos += match2[0].length;
  return true;
}
var html_inline_default = html_inline;
function image(state, silent) {
  let code$1, content, label, pos, ref2, res, title, start;
  let href = "";
  const oldPos = state.pos;
  const max = state.posMax;
  if (state.src.charCodeAt(state.pos) !== 33) return false;
  if (state.src.charCodeAt(state.pos + 1) !== 91) return false;
  const labelStart = state.pos + 2;
  const labelEnd = parse_link_label_default(state, state.pos + 1, false);
  if (labelEnd < 0) return false;
  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 40) {
    pos++;
    for (; pos < max; pos++) {
      code$1 = state.src.charCodeAt(pos);
      if (code$1 !== 32 && code$1 !== 10) break;
    }
    if (pos >= max) return false;
    start = pos;
    res = parse_link_destination_default(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) pos = res.pos;
      else href = "";
      for (; pos < max; pos++) {
        code$1 = state.src.charCodeAt(pos);
        if (code$1 !== 32 && code$1 !== 10) break;
      }
      res = parse_link_title_default(state.src, pos, state.posMax);
      if (pos < max && res.ok) {
        title = res.str;
        pos = res.pos;
        for (; pos < max; pos++) {
          code$1 = state.src.charCodeAt(pos);
          if (code$1 !== 32 && code$1 !== 10) break;
        }
      } else title = "";
    }
    if (pos >= max || state.src.charCodeAt(pos) !== 41) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    if (typeof state.env.references === "undefined") return false;
    if (pos < max && state.src.charCodeAt(pos) === 91) {
      start = pos + 1;
      pos = parse_link_label_default(state, pos);
      if (pos >= 0) label = state.src.slice(start, pos++);
      else pos = labelEnd + 1;
    } else pos = labelEnd + 1;
    if (!label) label = state.src.slice(labelStart, labelEnd);
    ref2 = state.env.references[label && label.toLowerCase()];
    if (!ref2) {
      state.pos = oldPos;
      return false;
    }
    href = ref2.href;
    title = ref2.title;
  }
  if (!silent) {
    content = state.src.slice(labelStart, labelEnd);
    const tokens = [];
    state.md.inline.parse(content, state.md, state.env, tokens);
    const token = state.push("image", "img", 0);
    token.attrs = [["src", href], ["alt", ""]];
    token.children = tokens;
    token.content = content;
    if (title) token.attrs.push(["title", title]);
  }
  state.pos = pos;
  state.posMax = max;
  return true;
}
var image_default = image;
function link(state, silent) {
  let code$1, label, res, ref2;
  let href = "";
  let title = "";
  let start = state.pos;
  let parseReference = true;
  if (state.src.charCodeAt(state.pos) !== 91) return false;
  const oldPos = state.pos;
  const max = state.posMax;
  const labelStart = state.pos + 1;
  const labelEnd = parse_link_label_default(state, state.pos, true);
  if (labelEnd < 0) return false;
  let pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 40) {
    parseReference = false;
    pos++;
    for (; pos < max; pos++) {
      code$1 = state.src.charCodeAt(pos);
      if (code$1 !== 32 && code$1 !== 10) break;
    }
    if (pos >= max) return false;
    start = pos;
    res = parse_link_destination_default(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) pos = res.pos;
      else href = "";
      for (; pos < max; pos++) {
        code$1 = state.src.charCodeAt(pos);
        if (code$1 !== 32 && code$1 !== 10) break;
      }
      res = parse_link_title_default(state.src, pos, state.posMax);
      if (pos < max && res.ok) {
        title = res.str;
        pos = res.pos;
        for (; pos < max; pos++) {
          code$1 = state.src.charCodeAt(pos);
          if (code$1 !== 32 && code$1 !== 10) break;
        }
      }
    }
    if (pos >= max || state.src.charCodeAt(pos) !== 41) parseReference = true;
    pos++;
  }
  if (parseReference) {
    if (typeof state.env.references === "undefined") return false;
    if (pos < max && state.src.charCodeAt(pos) === 91) {
      start = pos + 1;
      pos = parse_link_label_default(state, pos);
      if (pos >= 0) label = state.src.slice(start, pos++);
      else pos = labelEnd + 1;
    } else pos = labelEnd + 1;
    if (!label) label = state.src.slice(labelStart, labelEnd);
    ref2 = state.env.references[label && label.toLowerCase()];
    if (!ref2) {
      state.pos = oldPos;
      return false;
    }
    href = ref2.href;
    title = ref2.title;
  }
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;
    const token_o = state.push("link_open", "a", 1);
    const attrs = [["href", href]];
    token_o.attrs = attrs;
    if (title) attrs.push(["title", title]);
    state.linkLevel++;
    state.md.inline.tokenize(state);
    state.linkLevel--;
    state.push("link_close", "a", -1);
  }
  state.pos = pos;
  state.posMax = max;
  return true;
}
var link_default = link;
const SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function linkify$1(state, silent) {
  if (!state.md.options.linkify) return false;
  if (state.linkLevel > 0) return false;
  const pos = state.pos;
  const max = state.posMax;
  if (pos + 3 > max) return false;
  if (state.src.charCodeAt(pos) !== 58) return false;
  if (state.src.charCodeAt(pos + 1) !== 47) return false;
  if (state.src.charCodeAt(pos + 2) !== 47) return false;
  const match2 = state.pending.match(SCHEME_RE);
  if (!match2) return false;
  const proto = match2[1];
  const link$1 = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
  if (!link$1) return false;
  let url = link$1.url;
  if (url.length <= proto.length) return false;
  url = url.replace(/\*+$/, "");
  const fullUrl = state.md.normalizeLink(url);
  if (!state.md.validateLink(fullUrl)) return false;
  if (!silent) {
    state.pending = state.pending.slice(0, -proto.length);
    const token_o = state.push("link_open", "a", 1);
    token_o.attrs = [["href", fullUrl]];
    token_o.markup = "linkify";
    token_o.info = "auto";
    const token_t = state.push("text", "", 0);
    token_t.content = state.md.normalizeLinkText(url);
    const token_c = state.push("link_close", "a", -1);
    token_c.markup = "linkify";
    token_c.info = "auto";
  }
  state.pos += url.length - proto.length;
  return true;
}
function newline(state, silent) {
  const { pos, src, posMax } = state;
  if (src.charCodeAt(pos) !== 10) return false;
  const pmax = state.pending.length - 1;
  const max = posMax;
  if (!silent) if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
    let ws = pmax - 1;
    while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32) ws--;
    state.pending = state.pending.slice(0, ws);
    state.push("hardbreak", "br", 0);
  } else {
    state.pending = state.pending.slice(0, -1);
    state.push("softbreak", "br", 0);
  }
  else state.push("softbreak", "br", 0);
  state.pos++;
  while (state.pos < max && src.charCodeAt(state.pos) === 32) state.pos++;
  return true;
}
var newline_default = newline;
function strikethrough_tokenize(state, silent) {
  const start = state.pos;
  const marker = state.src.charCodeAt(start);
  if (silent) return false;
  if (marker !== 126) return false;
  const scanned = state.scanDelims(state.pos, true);
  if (!scanned) return false;
  let len = scanned.length;
  const ch = String.fromCharCode(marker);
  if (len < 2) return false;
  let token;
  if (len % 2) {
    token = state.push("text", "", 0);
    token.content = ch;
    len--;
  }
  for (let i2 = 0; i2 < len; i2 += 2) {
    token = state.push("text", "", 0);
    token.content = ch + ch;
    state.delimiters.push({
      marker,
      length: 0,
      token: state.tokens.length - 1,
      end: -1,
      open: scanned.can_open,
      close: scanned.can_close
    });
  }
  state.pos += scanned.length;
  return true;
}
function postProcess(state, delimiters) {
  let token;
  const loneMarkers = [];
  const max = delimiters.length;
  for (let i2 = 0; i2 < max; i2++) {
    const startDelim = delimiters[i2];
    if (startDelim.marker !== 126) continue;
    if (startDelim.end === -1) continue;
    const endDelim = delimiters[startDelim.end];
    token = state.tokens[startDelim.token];
    token.type = "s_open";
    token.tag = "s";
    token.nesting = 1;
    token.markup = "~~";
    token.content = "";
    token = state.tokens[endDelim.token];
    token.type = "s_close";
    token.tag = "s";
    token.nesting = -1;
    token.markup = "~~";
    token.content = "";
    if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") loneMarkers.push(endDelim.token - 1);
  }
  while (loneMarkers.length) {
    const i2 = loneMarkers.pop();
    let j = i2 + 1;
    while (j < state.tokens.length && state.tokens[j].type === "s_close") j++;
    j--;
    if (i2 !== j) {
      token = state.tokens[j];
      state.tokens[j] = state.tokens[i2];
      state.tokens[i2] = token;
    }
  }
}
function strikethrough_postProcess(state) {
  const delimiters = state.delimiters;
  postProcess(state, delimiters);
  const tokens_meta = state.tokens_meta;
  if (tokens_meta) {
    for (let curr = 0; curr < tokens_meta.length; curr++) if (tokens_meta[curr] && tokens_meta[curr].delimiters) postProcess(state, tokens_meta[curr].delimiters);
  }
}
const strikethrough = {
  tokenize: strikethrough_tokenize,
  postProcess: strikethrough_postProcess
};
function isTerminatorChar(ch) {
  switch (ch) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
function text(state, silent) {
  let pos = state.pos;
  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) pos++;
  if (pos === state.pos) return false;
  if (!silent) state.pending += state.src.slice(state.pos, pos);
  state.pos = pos;
  return true;
}
var text_default = text;
var InlineRuler = class {
  constructor() {
    __publicField(this, "rules", []);
    __publicField(this, "cache", null);
  }
  invalidateCache() {
    this.cache = null;
  }
  /**
  * Push new rule to the end of chain
  */
  push(name, fn2, options) {
    const idx = this.rules.findIndex((r2) => r2.name === name);
    if (idx >= 0) this.rules.splice(idx, 1);
    this.rules.push({
      name,
      fn: fn2,
      alt: (options == null ? void 0 : options.alt) || [],
      enabled: true
    });
    this.invalidateCache();
  }
  at(name) {
    return this.rules.find((rule) => rule.name === name);
  }
  before(beforeName, name, fn2, options) {
    const i2 = this.rules.findIndex((r2) => r2.name === beforeName);
    if (i2 < 0) throw new Error(`Parser rule not found: ${beforeName}`);
    const exists = this.rules.findIndex((r2) => r2.name === name);
    if (exists >= 0) this.rules.splice(exists, 1);
    this.rules.splice(i2, 0, {
      name,
      fn: fn2,
      alt: (options == null ? void 0 : options.alt) || [],
      enabled: true
    });
    this.invalidateCache();
  }
  after(afterName, name, fn2, options) {
    const i2 = this.rules.findIndex((r2) => r2.name === afterName);
    if (i2 < 0) throw new Error(`Parser rule not found: ${afterName}`);
    const exists = this.rules.findIndex((r2) => r2.name === name);
    if (exists >= 0) this.rules.splice(exists, 1);
    this.rules.splice(i2 + 1, 0, {
      name,
      fn: fn2,
      alt: (options == null ? void 0 : options.alt) || [],
      enabled: true
    });
    this.invalidateCache();
  }
  enable(names, ignoreInvalid) {
    const list$1 = Array.isArray(names) ? names : [names];
    const changed = [];
    for (const n2 of list$1) {
      const idx = this.rules.findIndex((r2) => r2.name === n2);
      if (idx < 0) {
        if (!ignoreInvalid) throw new Error(`Rules manager: invalid rule name ${n2}`);
        continue;
      }
      if (!this.rules[idx].enabled) {
        this.rules[idx].enabled = true;
        changed.push(n2);
      }
    }
    if (changed.length) this.invalidateCache();
    return changed;
  }
  disable(names, ignoreInvalid) {
    const list$1 = Array.isArray(names) ? names : [names];
    const changed = [];
    for (const n2 of list$1) {
      const idx = this.rules.findIndex((r2) => r2.name === n2);
      if (idx < 0) {
        if (!ignoreInvalid) throw new Error(`Rules manager: invalid rule name ${n2}`);
        continue;
      }
      if (this.rules[idx].enabled) {
        this.rules[idx].enabled = false;
        changed.push(n2);
      }
    }
    if (changed.length) this.invalidateCache();
    return changed;
  }
  enableOnly(names) {
    const allow = new Set(names);
    let changed = false;
    for (const r2 of this.rules) {
      const next = allow.has(r2.name);
      if (r2.enabled !== next) {
        r2.enabled = next;
        changed = true;
      }
    }
    if (changed) this.invalidateCache();
  }
  /**
  * Get rules for specified chain name (or empty string for default)
  */
  getRules(chainName) {
    const chain = chainName || "";
    if (!this.cache) this.compileCache();
    return this.cache.get(chain) ?? [];
  }
  compileCache() {
    var _a2;
    const chains = /* @__PURE__ */ new Set([""]);
    for (const rule of this.rules) {
      if (!rule.enabled) continue;
      if (rule.alt) for (const alt of rule.alt) chains.add(alt);
    }
    const cache = /* @__PURE__ */ new Map();
    for (const chain of chains) {
      const bucket = [];
      for (const rule of this.rules) {
        if (!rule.enabled) continue;
        if (chain !== "" && !((_a2 = rule.alt) == null ? void 0 : _a2.includes(chain))) continue;
        bucket.push(rule.fn);
      }
      cache.set(chain, bucket);
    }
    this.cache = cache;
  }
};
var StateInline = class {
  constructor(src, md, env, outTokens) {
    __publicField(this, "src");
    __publicField(this, "md");
    __publicField(this, "env");
    __publicField(this, "outTokens");
    __publicField(this, "tokens");
    __publicField(this, "tokens_meta");
    __publicField(this, "pos");
    __publicField(this, "posMax");
    __publicField(this, "level");
    __publicField(this, "pending");
    __publicField(this, "pendingLevel");
    __publicField(this, "cache");
    __publicField(this, "delimiters");
    __publicField(this, "_prev_delimiters");
    __publicField(this, "backticks");
    __publicField(this, "backticksScanned");
    __publicField(this, "linkLevel");
    __publicField(this, "Token");
    this.src = src;
    this.md = md;
    this.env = env;
    this.outTokens = outTokens;
    this.tokens = outTokens;
    this.tokens_meta = new Array(outTokens.length);
    this.pos = 0;
    this.posMax = src.length;
    this.level = 0;
    this.pending = "";
    this.pendingLevel = 0;
    this.cache = {};
    this.delimiters = [];
    this._prev_delimiters = [];
    this.backticks = {};
    this.backticksScanned = false;
    this.linkLevel = 0;
    this.Token = Token;
  }
  /**
  * Push pending text as a text token
  */
  pushPending() {
    const token = new Token("text", "", 0);
    token.content = this.pending;
    token.level = this.pendingLevel;
    this.tokens.push(token);
    this.tokens_meta.push(null);
    this.pending = "";
    return token;
  }
  /**
  * Push a new token to the output
  */
  push(type, tag, nesting) {
    if (this.pending) this.pushPending();
    const token = new Token(type, tag, nesting);
    token.level = this.level;
    let token_meta = null;
    if (nesting < 0) {
      this.level--;
      this.delimiters = this._prev_delimiters.pop() || [];
    }
    token.level = this.level;
    if (nesting > 0) {
      this.level++;
      this._prev_delimiters.push(this.delimiters);
      this.delimiters = [];
      token_meta = { delimiters: this.delimiters };
    }
    this.pendingLevel = this.level;
    this.tokens.push(token);
    this.tokens_meta.push(token_meta);
    return token;
  }
  /**
  * Scan delimiter run (for emphasis)
  */
  scanDelims(start, canSplitWord) {
    const { src, posMax } = this;
    const marker = src.charCodeAt(start);
    let pos = start;
    while (pos < posMax && src.charCodeAt(pos) === marker) pos++;
    const count = pos - start;
    if (count < 1) return null;
    const lastChar = start > 0 ? src.charCodeAt(start - 1) : 32;
    const nextChar = pos < posMax ? src.charCodeAt(pos) : 32;
    const isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
    const isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
    const isLastWhiteSpace = isWhiteSpace(lastChar);
    const isNextWhiteSpace = isWhiteSpace(nextChar);
    const left_flanking = !isNextWhiteSpace && (!isNextPunctChar || isLastWhiteSpace || isLastPunctChar);
    const right_flanking = !isLastWhiteSpace && (!isLastPunctChar || isNextWhiteSpace || isNextPunctChar);
    return {
      can_open: left_flanking && (canSplitWord || !right_flanking || isLastPunctChar),
      can_close: right_flanking && (canSplitWord || !left_flanking || isNextPunctChar),
      length: count
    };
  }
};
var ParserInline = class {
  constructor() {
    __publicField(this, "ruler");
    __publicField(this, "ruler2");
    this.ruler = new InlineRuler();
    this.ruler2 = new InlineRuler();
    this.ruler.push("text", text_default);
    this.ruler.push("linkify", linkify$1);
    this.ruler.push("newline", newline_default);
    this.ruler.push("escape", escape_default);
    this.ruler.push("backticks", backticks_default);
    this.ruler.push("strikethrough", strikethrough.tokenize);
    this.ruler.push("emphasis", emphasis.tokenize);
    this.ruler.push("link", link_default);
    this.ruler.push("image", image_default);
    this.ruler.push("autolink", autolink_default);
    this.ruler.push("html_inline", html_inline_default);
    this.ruler.push("entity", entity_default);
    this.ruler2.push("balance_pairs", balance_pairs_default);
    this.ruler2.push("strikethrough", strikethrough.postProcess);
    this.ruler2.push("emphasis", emphasis.postProcess);
    this.ruler2.push("fragments_join", fragments_join_default);
  }
  /**
  * Skip single token by running all rules in validation mode
  */
  skipToken(state) {
    var _a2, _b;
    const pos = state.pos;
    const rules = this.ruler.getRules("");
    const len = rules.length;
    const posMax = state.posMax;
    const maxNesting = ((_b = (_a2 = state.md) == null ? void 0 : _a2.options) == null ? void 0 : _b.maxNesting) || 100;
    if (typeof state.cache[pos] !== "undefined") {
      state.pos = state.cache[pos];
      return;
    }
    let ok = false;
    if (state.level < maxNesting) for (let i2 = 0; i2 < len; i2++) {
      state.level++;
      ok = rules[i2](state, true);
      state.level--;
      if (ok) {
        if (pos >= state.pos) throw new Error("inline rule didn't increment state.pos");
        break;
      }
    }
    else state.pos = posMax;
    if (!ok) state.pos++;
    state.cache[pos] = state.pos;
  }
  /**
  * Generate tokens for input string
  */
  tokenize(state) {
    var _a2, _b;
    const rules = this.ruler.getRules("");
    const len = rules.length;
    const end = state.posMax;
    const maxNesting = ((_b = (_a2 = state.md) == null ? void 0 : _a2.options) == null ? void 0 : _b.maxNesting) || 100;
    while (state.pos < end) {
      const prevPos = state.pos;
      let ok = false;
      if (state.level < maxNesting) for (let i2 = 0; i2 < len; i2++) {
        ok = rules[i2](state, false);
        if (ok) {
          if (prevPos >= state.pos) throw new Error("inline rule didn't increment state.pos");
          break;
        }
      }
      if (ok) {
        if (state.pos >= end) break;
        continue;
      }
      state.pending += state.src[state.pos++];
    }
    if (state.pending) state.pushPending();
  }
  /**
  * ParserInline.parse(str, md, env, outTokens)
  *
  * Process input string and push inline tokens into `outTokens`.
  * Matches the signature from original markdown-it/lib/parser_inline.mjs
  */
  parse(str, md, env, outTokens) {
    const state = new StateInline(str, md, env, outTokens);
    this.tokenize(state);
    const rules2 = this.ruler2.getRules("");
    const len = rules2.length;
    for (let i2 = 0; i2 < len; i2++) rules2[i2](state, false);
  }
};
var State = class {
  constructor(src, md, env = {}) {
    __publicField(this, "src");
    __publicField(this, "env");
    __publicField(this, "tokens");
    __publicField(this, "inlineMode");
    __publicField(this, "md");
    __publicField(this, "Token");
    this.src = src || "";
    this.env = env;
    this.tokens = [];
    this.inlineMode = false;
    this.md = md;
    this.Token = Token;
  }
};
const CORE_RULES = [
  ["normalize", normalize],
  ["block", block],
  ["inline", inline],
  ["linkify", linkify],
  ["replacements", replacements],
  ["smartquotes", smartquotes],
  ["text_join", text_join]
];
const DEFAULT_OPTIONS_TEMPLATE = {
  html: false,
  xhtmlOut: false,
  breaks: false,
  langPrefix: "language-",
  linkify: false,
  typographer: false,
  quotes: "“”‘’",
  maxNesting: 100
};
const DEFAULT_HELPERS = {
  parseLinkLabel,
  parseLinkDestination,
  parseLinkTitle
};
function cloneDefaultOptions() {
  return { ...DEFAULT_OPTIONS_TEMPLATE };
}
function cloneDefaultHelpers() {
  return { ...DEFAULT_HELPERS };
}
var ParserCore = class {
  constructor() {
    __publicField(this, "fallbackParser");
    __publicField(this, "lastState", null);
    __publicField(this, "block");
    __publicField(this, "inline");
    __publicField(this, "ruler");
    __publicField(this, "linkifyInstance", null);
    __publicField(this, "cachedCoreRules", null);
    this.block = new ParserBlock();
    this.inline = new ParserInline();
    this.ruler = new CoreRuler();
    for (let i2 = 0; i2 < CORE_RULES.length; i2++) {
      const [name, rule] = CORE_RULES[i2];
      this.ruler.push(name, rule);
    }
    this.fallbackParser = {
      block: this.block,
      inline: this.inline,
      core: this,
      options: cloneDefaultOptions(),
      helpers: cloneDefaultHelpers(),
      normalizeLink,
      normalizeLinkText,
      validateLink,
      linkify: null
    };
  }
  resolveParser(md) {
    if (md) return md;
    if (!this.linkifyInstance) this.linkifyInstance = new linkify_it_default();
    if (this.fallbackParser.block !== this.block) this.fallbackParser.block = this.block;
    if (this.fallbackParser.inline !== this.inline) this.fallbackParser.inline = this.inline;
    this.fallbackParser.core = this;
    this.fallbackParser.linkify = this.linkifyInstance;
    return this.fallbackParser;
  }
  createState(src, env = {}, md) {
    return new State(src, this.resolveParser(md), env);
  }
  process(state) {
    if (!this.cachedCoreRules) this.cachedCoreRules = this.ruler.getRules("");
    const rules = this.cachedCoreRules;
    for (let i2 = 0; i2 < rules.length; i2++) rules[i2](state);
  }
  parse(src, env = {}, md) {
    if (typeof src !== "string") throw new TypeError("Input data should be a String");
    const state = this.createState(src, env, md);
    this.process(state);
    this.lastState = state;
    return state;
  }
  getTokens() {
    return this.lastState ? this.lastState.tokens : [];
  }
};
var commonmark_default = { options: {
  html: false,
  xhtmlOut: false,
  breaks: false,
  langPrefix: "language-",
  linkify: false,
  typographer: false
} };
var default_default = {
  options: {
    html: false,
    xhtmlOut: false,
    breaks: false,
    langPrefix: "language-",
    linkify: false,
    typographer: false,
    quotes: "“”‘’",
    highlight: null,
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
};
var zero_default = {
  options: {
    html: false,
    xhtmlOut: false,
    breaks: false,
    langPrefix: "language-",
    linkify: false,
    typographer: false,
    quotes: "“”‘’",
    maxNesting: 20
  },
  components: {
    core: { rules: [
      "normalize",
      "block",
      "inline",
      "text_join"
    ] },
    block: { rules: ["paragraph"] },
    inline: { rules: ["text"] },
    inline2: { rules: ["balance_pairs", "fragments_join"] }
  }
};
const HTML_ESCAPE_TEST_RE = /[&<>"]/;
const HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
const HTML_REPLACEMENTS = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch] || ch;
}
function escapeHtml(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  return str;
}
const UNESCAPE_ALL_RE = new RegExp(`${/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g.source}|${/&([a-z#][a-z0-9]{1,31});/gi.source}`, "gi");
const DIGITAL_ENTITY_TEST_RE = /^#(?:x[a-f0-9]{1,8}|\d{1,8})$/i;
function unescapeAll(str) {
  if (!str.includes("\\") && !str.includes("&")) return str;
  return str.replace(UNESCAPE_ALL_RE, (match2, escaped, entity$1) => {
    if (escaped) return escaped;
    if (DIGITAL_ENTITY_TEST_RE.test(entity$1)) {
      const code$1 = entity$1[1].toLowerCase() === "x" ? Number.parseInt(entity$1.slice(2), 16) : Number.parseInt(entity$1.slice(1), 10);
      if (code$1 >= 55296 && code$1 <= 57343) return "�";
      if (code$1 >= 128 && code$1 <= 159) return "�";
      return String.fromCodePoint(code$1);
    }
    return match2;
  });
}
function isPromiseLike(value) {
  return !!value && (typeof value === "object" || typeof value === "function") && typeof value.then === "function";
}
function ensureSyncResult(value, ruleName) {
  if (isPromiseLike(value)) throw new TypeError(`Renderer rule "${ruleName}" returned a Promise. Use renderAsync() instead.`);
  return value;
}
const resolveResult = (value) => isPromiseLike(value) ? value : Promise.resolve(value);
function renderFence(token, highlighted, info, langName, options, self) {
  if (highlighted.startsWith("<pre")) return `${highlighted}
`;
  if (info) {
    const classIndex = typeof token.attrIndex === "function" ? token.attrIndex("class") : -1;
    const tmpAttrs = token.attrs ? token.attrs.map((attr) => attr.slice()) : [];
    const langClass = `${options.langPrefix || "language-"}${langName}`;
    if (classIndex < 0) tmpAttrs.push(["class", langClass]);
    else tmpAttrs[classIndex][1] += ` ${langClass}`;
    const tmpToken = {
      ...token,
      attrs: tmpAttrs
    };
    return `<pre><code${self.renderAttrs(tmpToken)}>${highlighted}</code></pre>
`;
  }
  return `<pre><code${self.renderAttrs(token)}>${highlighted}</code></pre>
`;
}
const DEFAULT_RENDERER_OPTIONS = {
  langPrefix: "language-",
  xhtmlOut: false,
  breaks: false
};
const hasOwn = Object.prototype.hasOwnProperty;
const defaultRules = {
  code_inline(tokens, idx, _options, _env, self) {
    const token = tokens[idx];
    return `<code${self.renderAttrs(token)}>${escapeHtml(token.content)}</code>`;
  },
  code_block(tokens, idx, _options, _env, self) {
    const token = tokens[idx];
    return `<pre${self.renderAttrs(token)}><code>${escapeHtml(token.content)}</code></pre>
`;
  },
  fence(tokens, idx, options, _env, self) {
    const token = tokens[idx];
    const info = token.info ? unescapeAll(token.info).trim() : "";
    let langName = "";
    let langAttrs = "";
    if (info) {
      const parts = info.split(/(\s+)/g);
      langName = parts[0];
      langAttrs = parts.slice(2).join("");
    }
    const highlight = options.highlight;
    const fallback = () => escapeHtml(token.content);
    if (!highlight) return renderFence(token, fallback(), info, langName, options, self);
    const highlighted = highlight(token.content, langName, langAttrs);
    if (isPromiseLike(highlighted)) return highlighted.then((res) => renderFence(token, res || fallback(), info, langName, options, self));
    return renderFence(token, highlighted || fallback(), info, langName, options, self);
  },
  image(tokens, idx, options, env, self) {
    const token = tokens[idx];
    const altText = self.renderInlineAsText(token.children || [], options, env);
    if (typeof token.attrIndex === "function") {
      const altIndex = token.attrIndex("alt");
      if (altIndex >= 0 && token.attrs) token.attrs[altIndex][1] = altText;
      else if (token.attrs) token.attrs.push(["alt", altText]);
      else token.attrs = [["alt", altText]];
    }
    return self.renderToken(tokens, idx, options);
  },
  hardbreak(_tokens, _idx, options) {
    return options.xhtmlOut ? "<br />\n" : "<br>\n";
  },
  softbreak(_tokens, _idx, options) {
    return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
  },
  text(tokens, idx) {
    return escapeHtml(tokens[idx].content);
  },
  text_special(tokens, idx) {
    return escapeHtml(tokens[idx].content);
  },
  html_block(tokens, idx) {
    return tokens[idx].content;
  },
  html_inline(tokens, idx) {
    return tokens[idx].content;
  }
};
var Renderer = class {
  constructor(options = {}) {
    __publicField(this, "rules");
    __publicField(this, "baseOptions");
    __publicField(this, "normalizedBase");
    this.baseOptions = { ...options };
    this.normalizedBase = this.buildNormalizedBase();
    this.rules = { ...defaultRules };
  }
  set(options) {
    this.baseOptions = {
      ...this.baseOptions,
      ...options
    };
    this.normalizedBase = this.buildNormalizedBase();
    return this;
  }
  render(tokens, options, env) {
    if (!Array.isArray(tokens)) throw new TypeError("render expects token array as first argument");
    const merged = this.mergeOptions(options);
    const envRef = env ?? {};
    let output = "";
    for (let i2 = 0; i2 < tokens.length; i2++) {
      const token = tokens[i2];
      if (token.type === "inline") {
        output += this.renderInlineTokens(token.children || [], merged, envRef);
        continue;
      }
      const rule = this.rules[token.type];
      if (rule) output += ensureSyncResult(rule(tokens, i2, merged, envRef, this), token.type);
      else output += this.renderToken(tokens, i2, merged);
    }
    return output;
  }
  async renderAsync(tokens, options, env) {
    if (!Array.isArray(tokens)) throw new TypeError("render expects token array as first argument");
    const merged = this.mergeOptions(options);
    const envRef = env ?? {};
    let output = "";
    for (let i2 = 0; i2 < tokens.length; i2++) {
      const token = tokens[i2];
      if (token.type === "inline") {
        output += await this.renderInlineTokensAsync(token.children || [], merged, envRef);
        continue;
      }
      const rule = this.rules[token.type];
      if (rule) output += await resolveResult(rule(tokens, i2, merged, envRef, this));
      else output += this.renderToken(tokens, i2, merged);
    }
    return output;
  }
  renderInline(tokens, options, env) {
    const merged = this.mergeOptions(options);
    const envRef = env ?? {};
    return this.renderInlineTokens(tokens, merged, envRef);
  }
  async renderInlineAsync(tokens, options, env) {
    const merged = this.mergeOptions(options);
    const envRef = env ?? {};
    return this.renderInlineTokensAsync(tokens, merged, envRef);
  }
  renderInlineAsText(tokens, options, env) {
    const merged = this.mergeOptions(options);
    const envRef = env ?? {};
    return this.renderInlineAsTextInternal(tokens, merged, envRef);
  }
  renderAttrs(token) {
    if (!token.attrs || token.attrs.length === 0) return "";
    let result = "";
    for (let i2 = 0; i2 < token.attrs.length; i2++) {
      const attr = token.attrs[i2];
      result += ` ${escapeHtml(attr[0])}="${escapeHtml(attr[1])}"`;
    }
    return result;
  }
  renderToken(tokens, idx, options) {
    const token = tokens[idx];
    if (token.hidden) return "";
    let result = "";
    if (token.block && token.nesting !== -1 && idx > 0 && tokens[idx - 1].hidden) result += "\n";
    result += token.nesting === -1 ? `</${token.tag}` : `<${token.tag}`;
    result += this.renderAttrs(token);
    if (token.nesting === 0 && options.xhtmlOut) result += " /";
    let needLineFeed = false;
    if (token.block) {
      needLineFeed = true;
      if (token.nesting === 1 && idx + 1 < tokens.length) {
        const nextToken = tokens[idx + 1];
        if (nextToken.type === "inline" || nextToken.hidden) needLineFeed = false;
        else if (nextToken.nesting === -1 && nextToken.tag === token.tag) needLineFeed = false;
      }
    }
    result += needLineFeed ? ">\n" : ">";
    return result;
  }
  mergeOptions(overrides) {
    const base$1 = this.normalizedBase;
    if (!overrides) return base$1;
    let merged = null;
    const ensureMerged = () => {
      if (!merged) merged = { ...base$1 };
      return merged;
    };
    if (hasOwn.call(overrides, "highlight") && overrides.highlight !== base$1.highlight) ensureMerged().highlight = overrides.highlight;
    if (hasOwn.call(overrides, "langPrefix")) {
      const value = overrides.langPrefix;
      if (value !== base$1.langPrefix) ensureMerged().langPrefix = value;
    }
    if (hasOwn.call(overrides, "xhtmlOut")) {
      const value = overrides.xhtmlOut;
      if (value !== base$1.xhtmlOut) ensureMerged().xhtmlOut = value;
    }
    if (hasOwn.call(overrides, "breaks")) {
      const value = overrides.breaks;
      if (value !== base$1.breaks) ensureMerged().breaks = value;
    }
    return merged || base$1;
  }
  buildNormalizedBase() {
    return Object.freeze({
      ...DEFAULT_RENDERER_OPTIONS,
      ...this.baseOptions
    });
  }
  renderInlineTokens(tokens, options, env) {
    if (!tokens || tokens.length === 0) return "";
    let output = "";
    for (let i2 = 0; i2 < tokens.length; i2++) {
      const token = tokens[i2];
      const rule = this.rules[token.type];
      if (rule) output += ensureSyncResult(rule(tokens, i2, options, env, this), token.type);
      else output += this.renderToken(tokens, i2, options);
    }
    return output;
  }
  async renderInlineTokensAsync(tokens, options, env) {
    if (!tokens || tokens.length === 0) return "";
    let output = "";
    for (let i2 = 0; i2 < tokens.length; i2++) {
      const token = tokens[i2];
      const rule = this.rules[token.type];
      if (rule) output += await resolveResult(rule(tokens, i2, options, env, this));
      else output += this.renderToken(tokens, i2, options);
    }
    return output;
  }
  renderInlineAsTextInternal(tokens, options, env) {
    if (!tokens || tokens.length === 0) return "";
    let output = "";
    for (let i2 = 0; i2 < tokens.length; i2++) {
      const token = tokens[i2];
      switch (token.type) {
        case "text":
        case "text_special":
          output += token.content;
          break;
        case "image":
          output += this.renderInlineAsTextInternal(token.children || [], options, env);
          break;
        case "html_inline":
        case "html_block":
          output += token.content;
          break;
        case "softbreak":
        case "hardbreak":
          output += "\n";
          break;
      }
    }
    return output;
  }
};
var renderer_default = Renderer;
const DEFAULTS = {
  maxChunkChars: 1e4,
  maxChunkLines: 200,
  fenceAware: true,
  maxChunks: void 0
};
function chunkedParse(md, src, env = {}, opts) {
  const options = {
    ...DEFAULTS,
    ...opts || {}
  };
  let chunks = splitIntoChunks(src, options);
  if (options.maxChunks && chunks.length > options.maxChunks) {
    const keep = options.maxChunks - 1;
    const head = chunks.slice(0, keep);
    const tailMerged = chunks.slice(keep).join("\n");
    chunks = [...head, tailMerged];
  }
  let lineOffset = 0;
  const out = [];
  try {
    env.__mdtsChunkInfo = {
      count: chunks.length,
      maxChunkChars: options.maxChunkChars,
      maxChunkLines: options.maxChunkLines
    };
  } catch {
  }
  for (const ch of chunks) {
    const tokens = md.core.parse(ch, env, md).tokens;
    if (lineOffset !== 0 && tokens.length) shiftTokenLines(tokens, lineOffset);
    out.push(...tokens);
    lineOffset += countLines(ch);
  }
  return out;
}
function splitIntoChunks(src, opts) {
  const lines = src.split("\n");
  const chunks = [];
  let buf = [];
  let charCount = 0;
  let lineCount = 0;
  let sinceBlankLines = 0;
  let sinceBlankChars = 0;
  let inFence = null;
  function flush() {
    if (buf.length > 0) {
      chunks.push(buf.join("\n"));
      buf = [];
      charCount = 0;
      lineCount = 0;
    }
  }
  for (let i2 = 0; i2 < lines.length; i2++) {
    const line = lines[i2];
    const trimmed = line.trim();
    if (opts.fenceAware) {
      let p = 0;
      while (p < line.length) {
        const c = line.charCodeAt(p);
        if (c === 32 || c === 9) p++;
        else break;
      }
      const ch = line[p];
      if (ch === "`" || ch === "~") {
        let q = p;
        while (q < line.length && line[q] === ch) q++;
        const runLen = q - p;
        if (runLen >= 3) {
          if (!inFence) inFence = {
            marker: ch,
            length: runLen
          };
          else if (inFence.marker === ch && runLen >= inFence.length) inFence = null;
        }
      }
    }
    buf.push(line);
    const lineWithNlLen = line.length + 1;
    charCount += lineWithNlLen;
    lineCount += 1;
    if (trimmed.length === 0) {
      sinceBlankLines = 0;
      sinceBlankChars = 0;
    } else {
      sinceBlankLines += 1;
      sinceBlankChars += lineWithNlLen;
    }
    const atBlankBoundary = trimmed.length === 0;
    if ((charCount >= opts.maxChunkChars || lineCount >= opts.maxChunkLines) && !inFence) if (atBlankBoundary) flush();
    else {
      const maxSinceBlankLines = Math.max(10, Math.floor(opts.maxChunkLines * 0.5));
      const maxSinceBlankChars = Math.max(opts.maxChunkChars, 8e3);
      if (sinceBlankLines >= maxSinceBlankLines || sinceBlankChars >= maxSinceBlankChars) flush();
    }
  }
  flush();
  return chunks;
}
function shiftTokenLines(tokens, offset) {
  if (offset === 0) return;
  const stack = [...tokens];
  while (stack.length) {
    const t2 = stack.pop();
    if (t2.map) {
      t2.map[0] += offset;
      t2.map[1] += offset;
    }
    if (t2.children) for (let i2 = t2.children.length - 1; i2 >= 0; i2--) stack.push(t2.children[i2]);
  }
}
const EMPTY_TOKENS = [];
function makeEmptyStats() {
  return {
    total: 0,
    cacheHits: 0,
    appendHits: 0,
    fullParses: 0,
    resets: 0,
    chunkedParses: 0,
    lastMode: "idle"
  };
}
var StreamParser = class {
  constructor(core) {
    __publicField(this, "core");
    __publicField(this, "cache", null);
    __publicField(this, "stats", makeEmptyStats());
    __publicField(this, "MIN_SIZE_FOR_OPTIMIZATION", 1e3);
    __publicField(this, "DEFAULT_SKIP_CACHE_CHARS", 6e5);
    __publicField(this, "DEFAULT_SKIP_CACHE_LINES", 1e4);
    __publicField(this, "MAX_CHUNKS_FOR_FALLBACK", 24);
    __publicField(this, "MAX_CHUNKED_DOC_CHARS", 12e4);
    this.core = core;
  }
  reset() {
    this.cache = null;
    this.stats.resets += 1;
    this.stats.lastMode = "reset";
  }
  resetStats() {
    const { resets } = this.stats;
    this.stats = makeEmptyStats();
    this.stats.resets = resets;
  }
  parse(src, env, md) {
    var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s, _t2;
    const envProvided = env;
    const cached = this.cache;
    if (!cached || envProvided && envProvided !== cached.env) {
      const workingEnv = envProvided ?? {};
      const chunkedEnabled$1 = !!((_a2 = md.options) == null ? void 0 : _a2.streamChunkedFallback);
      const chunkAdaptive$1 = ((_b = md.options) == null ? void 0 : _b.streamChunkAdaptive) !== false;
      const targetChunks$1 = ((_c = md.options) == null ? void 0 : _c.streamChunkTargetChunks) ?? 8;
      const chunkSizeCharsCfg$1 = (_d = md.options) == null ? void 0 : _d.streamChunkSizeChars;
      const chunkSizeLinesCfg$1 = (_e2 = md.options) == null ? void 0 : _e2.streamChunkSizeLines;
      const auto$1 = ((_f = md.options) == null ? void 0 : _f.autoTuneChunks) !== false;
      const chunkFenceAware$1 = ((_g = md.options) == null ? void 0 : _g.streamChunkFenceAware) ?? true;
      const skipCacheChars = ((_h = md.options) == null ? void 0 : _h.streamSkipCacheAboveChars) ?? this.DEFAULT_SKIP_CACHE_CHARS;
      const skipCacheLines = ((_i = md.options) == null ? void 0 : _i.streamSkipCacheAboveLines) ?? this.DEFAULT_SKIP_CACHE_LINES;
      let srcLineCount;
      let isVeryLargeOneShot = src.length >= skipCacheChars;
      if (!isVeryLargeOneShot && skipCacheLines !== void 0) {
        srcLineCount = countLines(src);
        isVeryLargeOneShot = srcLineCount >= skipCacheLines;
      }
      if (isVeryLargeOneShot) {
        const tokens$1 = this.core.parse(src, workingEnv, md).tokens;
        this.stats.total += 1;
        this.stats.fullParses += 1;
        this.stats.lastMode = "full";
        return tokens$1;
      } else if (chunkedEnabled$1 && src.length < this.MAX_CHUNKED_DOC_CHARS) {
        const clamp$1 = (v, lo2, hi) => v < lo2 ? lo2 : v > hi ? hi : v;
        if (srcLineCount === void 0) srcLineCount = countLines(src);
        let useChars = chunkAdaptive$1 ? clamp$1(Math.ceil(src.length / targetChunks$1), 8e3, 32e3) : chunkSizeCharsCfg$1 ?? 1e4;
        let useLines = chunkAdaptive$1 ? clamp$1(Math.ceil(srcLineCount / targetChunks$1), 150, 350) : chunkSizeLinesCfg$1 ?? 200;
        if (auto$1 && !chunkSizeCharsCfg$1 && !chunkSizeLinesCfg$1) if (src.length <= 5e3) {
          useChars = 16e3;
          useLines = 250;
        } else if (src.length <= 2e4) {
          useChars = 16e3;
          useLines = 200;
        } else if (src.length <= 5e4) {
          useChars = 16e3;
          useLines = 250;
        } else if (src.length <= 1e5) {
          useChars = 1e4;
          useLines = 200;
        } else {
          useChars = 2e4;
          useLines = 200;
        }
        const hasTrailingNewline = src.length > 0 && src.charCodeAt(src.length - 1) === 10;
        const estimatedChunks = Math.ceil(src.length / useChars);
        if ((src.length >= useChars * 2 || srcLineCount >= useLines * 2) && hasTrailingNewline && estimatedChunks <= this.MAX_CHUNKS_FOR_FALLBACK) {
          const tokens$1 = chunkedParse(md, src, workingEnv, {
            maxChunkChars: useChars,
            maxChunkLines: useLines,
            fenceAware: chunkFenceAware$1
          });
          this.cache = {
            src,
            tokens: tokens$1,
            env: workingEnv,
            lineCount: srcLineCount
          };
          this.stats.total += 1;
          this.stats.chunkedParses = (this.stats.chunkedParses || 0) + 1;
          this.stats.lastMode = "chunked";
          return tokens$1;
        }
      }
      const tokens = this.core.parse(src, workingEnv, md).tokens;
      this.cache = {
        src,
        tokens,
        env: workingEnv,
        lineCount: srcLineCount
      };
      this.stats.total += 1;
      this.stats.fullParses += 1;
      this.stats.lastMode = "full";
      return tokens;
    }
    if (src === cached.src) {
      this.stats.total += 1;
      this.stats.cacheHits += 1;
      this.stats.lastMode = "cache";
      return cached.tokens;
    }
    const threshold = ((_j = md.options) == null ? void 0 : _j.streamOptimizationMinSize) ?? this.MIN_SIZE_FOR_OPTIMIZATION;
    if (cached.src.length < threshold && src.length < threshold * 1.5 && !src.startsWith(cached.src)) {
      const fallbackEnv$1 = envProvided ?? cached.env;
      const nextTokens$1 = this.core.parse(src, fallbackEnv$1, md).tokens;
      this.cache = {
        src,
        tokens: nextTokens$1,
        env: fallbackEnv$1,
        lineCount: countLines(src)
      };
      this.stats.total += 1;
      this.stats.fullParses += 1;
      this.stats.lastMode = "full";
      return nextTokens$1;
    }
    const appended = this.getAppendedSegment(cached.src, src);
    if (appended) {
      let appendedHasBlockConstructs = function(s2) {
        return /(?:^|\n)\s{0,3}(?:#{1,6}\s|>\s|[-*+]\s|\d+\.\s|```|~~~| {4,})/.test(s2);
      };
      const cachedLineCount = cached.lineCount ?? countLines(cached.src);
      let ctxLines = 3;
      if (appended.length > 5e3) ctxLines = 8;
      else if (appended.length > 1e3) ctxLines = 6;
      else if (appended.length > 200) ctxLines = 4;
      ctxLines = Math.min(ctxLines, cachedLineCount);
      let appendedState = null;
      const ctxStrategy = ((_k = md.options) == null ? void 0 : _k.streamContextParseStrategy) ?? "chars";
      const CONTEXT_PARSE_MIN_CHARS = ((_l = md.options) == null ? void 0 : _l.streamContextParseMinChars) ?? 200;
      const CONTEXT_PARSE_MIN_LINES = ((_m = md.options) == null ? void 0 : _m.streamContextParseMinLines) ?? 2;
      let shouldAttemptContext = false;
      switch (ctxStrategy) {
        case "lines":
          shouldAttemptContext = countLines(appended) >= CONTEXT_PARSE_MIN_LINES;
          break;
        case "constructs": {
          const appendedLines = countLines(appended);
          shouldAttemptContext = appendedHasBlockConstructs(appended) || appendedLines >= CONTEXT_PARSE_MIN_LINES || appended.length >= CONTEXT_PARSE_MIN_CHARS;
          break;
        }
        case "chars":
        default:
          shouldAttemptContext = appended.length >= CONTEXT_PARSE_MIN_CHARS;
      }
      if (ctxLines > 0 && shouldAttemptContext) {
        const cachedLines = cached.src.split("\n");
        const ctxStart = Math.max(0, cachedLines.length - ctxLines);
        const ctxSrc = cachedLines.slice(ctxStart).join("\n") + appended;
        try {
          const ctxTokens = this.core.parse(ctxSrc, cached.env, md).tokens;
          const idx = ctxTokens.findIndex((t2) => t2.map && typeof t2.map[1] === "number" && t2.map[1] >= ctxLines);
          if (idx !== -1) {
            const appendedTokens = ctxTokens.slice(idx);
            const shiftBy = cachedLineCount - ctxLines;
            if (shiftBy !== 0) this.shiftTokenLines(appendedTokens, shiftBy);
            appendedState = { tokens: appendedTokens };
          }
        } catch {
          appendedState = null;
        }
      } else appendedState = null;
      if (!appendedState) {
        const simpleState = this.core.parse(appended, cached.env, md);
        const lineOffset = cachedLineCount;
        if (lineOffset > 0) this.shiftTokenLines(simpleState.tokens, lineOffset);
        appendedState = simpleState;
      }
      if (cached.tokens.length > 0 && appendedState.tokens.length > 0) {
        const lastCached = cached.tokens[cached.tokens.length - 1];
        const firstApp = appendedState.tokens[0];
        try {
          if (lastCached.type === "inline" && firstApp.type === "inline") {
            if (firstApp.children && firstApp.children.length > 0) {
              if (!lastCached.children) lastCached.children = [];
              lastCached.children.push(...firstApp.children);
            }
            lastCached.content = (lastCached.content || "") + (firstApp.content || "");
            appendedState.tokens.shift();
          }
        } catch {
        }
      }
      if (appendedState.tokens.length > 0) {
        let tokenEquals = function(x, y) {
          if (!x || !y) return false;
          if (x.type !== y.type) return false;
          if (x.type === "inline") return (x.content || "") === (y.content || "");
          return true;
        };
        const cachedTail = cached.tokens;
        const a2 = appendedState.tokens;
        const maxCheck = Math.min(cachedTail.length, a2.length);
        let dup = 0;
        for (let n2 = maxCheck; n2 > 0; n2--) {
          let ok = true;
          for (let i2 = 0; i2 < n2; i2++) {
            const tailToken = cachedTail[cachedTail.length - n2 + i2];
            const prefToken = a2[i2];
            if (!tokenEquals(tailToken, prefToken)) {
              ok = false;
              break;
            }
          }
          if (ok) {
            dup = n2;
            break;
          }
        }
        if (dup > 0) a2.splice(0, dup);
        if (a2.length > 0) cached.tokens.push(...a2);
      }
      cached.src = src;
      cached.lineCount = cachedLineCount + countLines(appended);
      this.stats.total += 1;
      this.stats.appendHits += 1;
      this.stats.lastMode = "append";
      return cached.tokens;
    }
    const fallbackEnv = envProvided ?? cached.env;
    const chunkedEnabled = !!((_n2 = md.options) == null ? void 0 : _n2.streamChunkedFallback);
    const chunkAdaptive = ((_o = md.options) == null ? void 0 : _o.streamChunkAdaptive) !== false;
    const targetChunks = ((_p = md.options) == null ? void 0 : _p.streamChunkTargetChunks) ?? 8;
    const chunkSizeCharsCfg = (_q = md.options) == null ? void 0 : _q.streamChunkSizeChars;
    const chunkSizeLinesCfg = (_r = md.options) == null ? void 0 : _r.streamChunkSizeLines;
    const auto = ((_s = md.options) == null ? void 0 : _s.autoTuneChunks) !== false;
    const chunkFenceAware = ((_t2 = md.options) == null ? void 0 : _t2.streamChunkFenceAware) ?? true;
    let srcLineCount2 = cached.lineCount;
    if (chunkedEnabled && src.length < this.MAX_CHUNKED_DOC_CHARS) {
      if (srcLineCount2 === void 0) srcLineCount2 = countLines(src);
      const clamp$1 = (v, lo2, hi) => v < lo2 ? lo2 : v > hi ? hi : v;
      let useChars = chunkAdaptive ? clamp$1(Math.ceil(src.length / targetChunks), 8e3, 32e3) : chunkSizeCharsCfg ?? 1e4;
      let useLines = chunkAdaptive ? clamp$1(Math.ceil(srcLineCount2 / targetChunks), 150, 350) : chunkSizeLinesCfg ?? 200;
      if (auto && !chunkSizeCharsCfg && !chunkSizeLinesCfg) if (src.length <= 5e3) {
        useChars = 16e3;
        useLines = 250;
      } else if (src.length <= 2e4) {
        useChars = 16e3;
        useLines = 200;
      } else if (src.length <= 5e4) {
        useChars = 16e3;
        useLines = 250;
      } else if (src.length <= 1e5) {
        useChars = 1e4;
        useLines = 200;
      } else {
        useChars = 2e4;
        useLines = 200;
      }
      const hasTrailingNewline2 = src.length > 0 && src.charCodeAt(src.length - 1) === 10;
      const estimatedChunks = Math.ceil(src.length / useChars);
      if ((src.length >= useChars * 2 || srcLineCount2 >= useLines * 2) && hasTrailingNewline2 && estimatedChunks <= this.MAX_CHUNKS_FOR_FALLBACK) {
        const tokens = chunkedParse(md, src, fallbackEnv, {
          maxChunkChars: useChars,
          maxChunkLines: useLines,
          fenceAware: chunkFenceAware
        });
        this.cache = {
          src,
          tokens,
          env: fallbackEnv,
          lineCount: srcLineCount2
        };
        this.stats.total += 1;
        this.stats.chunkedParses = (this.stats.chunkedParses || 0) + 1;
        this.stats.lastMode = "chunked";
        return tokens;
      }
    }
    const nextTokens = this.core.parse(src, fallbackEnv, md).tokens;
    this.cache = {
      src,
      tokens: nextTokens,
      env: fallbackEnv,
      lineCount: srcLineCount2
    };
    this.stats.total += 1;
    this.stats.fullParses += 1;
    this.stats.lastMode = "full";
    return nextTokens;
  }
  getAppendedSegment(prev, next) {
    if (!next.startsWith(prev)) return null;
    if (!prev.endsWith("\n")) return null;
    const segment = next.slice(prev.length);
    if (!segment) return null;
    if (!segment.includes("\n")) return null;
    if (!segment.endsWith("\n")) return null;
    let newlineCount = 0;
    for (let i2 = 0; i2 < segment.length; i2++) if (segment.charCodeAt(i2) === 10) newlineCount++;
    if (newlineCount < 2) return null;
    const firstLineBreak = segment.indexOf("\n");
    const trimmedFirstLine = (firstLineBreak === -1 ? segment : segment.slice(0, firstLineBreak)).trim();
    if (trimmedFirstLine.length === 0) return null;
    if (/^[-=]+$/.test(trimmedFirstLine)) {
      const prevWithoutTrailingNewline = prev.slice(0, -1);
      const lastBreak = prevWithoutTrailingNewline.lastIndexOf("\n");
      if (prevWithoutTrailingNewline.slice(lastBreak + 1).trim().length > 0) return null;
    }
    if (this.endsInsideOpenFence(prev)) return null;
    return segment;
  }
  endsInsideOpenFence(text$1) {
    const WINDOW = 4e3;
    const start = text$1.length > WINDOW ? text$1.length - WINDOW : 0;
    const lines = text$1.slice(start).split("\n");
    let inFence = null;
    for (let i2 = 0; i2 < lines.length; i2++) {
      const line = lines[i2];
      let p = 0;
      while (p < line.length) {
        const c = line.charCodeAt(p);
        if (c === 32 || c === 9) p++;
        else break;
      }
      const ch = line[p];
      if (ch === "`" || ch === "~") {
        let q = p;
        while (q < line.length && line[q] === ch) q++;
        const runLen = q - p;
        if (runLen >= 3) {
          if (!inFence) inFence = {
            marker: ch,
            length: runLen
          };
          else if (inFence.marker === ch && runLen >= inFence.length) inFence = null;
        }
      }
    }
    return inFence !== null;
  }
  peek() {
    var _a2;
    return ((_a2 = this.cache) == null ? void 0 : _a2.tokens) ?? EMPTY_TOKENS;
  }
  getStats() {
    return { ...this.stats };
  }
  shiftTokenLines(tokens, offset) {
    if (offset === 0) return;
    const stack = [...tokens];
    while (stack.length > 0) {
      const token = stack.pop();
      if (token.map) {
        token.map[0] += offset;
        token.map[1] += offset;
      }
      if (token.children) for (let i2 = token.children.length - 1; i2 >= 0; i2--) stack.push(token.children[i2]);
    }
  }
};
const config = {
  default: default_default,
  zero: zero_default,
  commonmark: commonmark_default
};
function markdownIt(presetName, options) {
  var _a2, _b, _c, _d;
  let opts = {
    html: false,
    xhtmlOut: false,
    breaks: false,
    langPrefix: "language-",
    linkify: false,
    typographer: false,
    quotes: "“”‘’",
    highlight: null,
    maxNesting: 100,
    stream: false,
    streamOptimizationMinSize: 1e3,
    streamChunkedFallback: false,
    streamChunkSizeChars: 1e4,
    streamChunkSizeLines: 200,
    streamChunkFenceAware: true,
    streamChunkAdaptive: true,
    streamChunkTargetChunks: 8,
    streamSkipCacheAboveChars: 6e5,
    streamSkipCacheAboveLines: 1e4,
    fullChunkedFallback: false,
    fullChunkThresholdChars: 2e4,
    fullChunkThresholdLines: 400,
    fullChunkSizeChars: 1e4,
    fullChunkSizeLines: 200,
    fullChunkFenceAware: true,
    fullChunkAdaptive: true,
    fullChunkTargetChunks: 8,
    fullChunkMaxChunks: void 0,
    autoTuneChunks: true
  };
  let presetToUse = "default";
  let userOptions;
  if (!options && typeof presetName !== "string") {
    userOptions = presetName;
    presetToUse = "default";
  } else if (typeof presetName === "string") {
    presetToUse = presetName;
    userOptions = options;
  }
  const preset = config[presetToUse];
  if (!preset) throw new Error(`Wrong \`markdown-it\` preset "${presetToUse}", check name`);
  if (preset == null ? void 0 : preset.options) opts = {
    ...opts,
    ...preset.options
  };
  if (userOptions) opts = {
    ...opts,
    ...userOptions
  };
  if (typeof opts.quotes === "string") {
    const quotesStr = opts.quotes;
    if (quotesStr.length >= 4) opts.quotes = [
      quotesStr[0],
      quotesStr[1],
      quotesStr[2],
      quotesStr[3]
    ];
    else opts.quotes = [
      "“",
      "”",
      "‘",
      "’"
    ];
  }
  const core = new ParserCore();
  let renderer = null;
  const getRenderer = () => {
    if (!renderer) renderer = new renderer_default(opts);
    return renderer;
  };
  let streamParser = null;
  const getStreamParser = () => {
    if (!streamParser) streamParser = new StreamParser(core);
    return streamParser;
  };
  let linkifyInstance = null;
  const getLinkify = () => {
    if (!linkifyInstance) linkifyInstance = new linkify_it_default();
    return linkifyInstance;
  };
  const md = {
    core,
    block: core.block,
    inline: core.inline,
    get linkify() {
      const inst = getLinkify();
      Object.defineProperty(this, "linkify", {
        value: inst,
        writable: true,
        configurable: true
      });
      return inst;
    },
    get renderer() {
      const r2 = getRenderer();
      Object.defineProperty(this, "renderer", {
        value: r2,
        writable: true,
        configurable: true
      });
      return r2;
    },
    options: opts,
    set(newOpts) {
      this.options = {
        ...this.options,
        ...newOpts
      };
      if (renderer) renderer.set(newOpts);
      if (typeof newOpts.stream === "boolean") {
        this.stream.enabled = newOpts.stream;
        if (streamParser) {
          streamParser.reset();
          streamParser.resetStats();
        }
      }
      return this;
    },
    configure(presets) {
      var _a3, _b2, _c2, _d2;
      const p = typeof presets === "string" ? config[presets] : presets;
      if (!p) throw new Error("Wrong `markdown-it` preset, can't be empty");
      if (p.options) this.set(p.options);
      if (p.components) {
        const c = p.components;
        if ((_a3 = c.core) == null ? void 0 : _a3.rules) this.core.ruler.enableOnly(c.core.rules);
        if ((_b2 = c.block) == null ? void 0 : _b2.rules) this.block.ruler.enableOnly(c.block.rules);
        if ((_c2 = c.inline) == null ? void 0 : _c2.rules) this.inline.ruler.enableOnly(c.inline.rules);
        if ((_d2 = c.inline2) == null ? void 0 : _d2.rules) this.inline.ruler2.enableOnly(c.inline2.rules);
      }
      return this;
    },
    enable(list$1, ignoreInvalid) {
      var _a3, _b2, _c2, _d2;
      const names = Array.isArray(list$1) ? list$1 : [list$1];
      const managers = [
        (_a3 = this.core) == null ? void 0 : _a3.ruler,
        (_b2 = this.block) == null ? void 0 : _b2.ruler,
        (_c2 = this.inline) == null ? void 0 : _c2.ruler,
        (_d2 = this.inline) == null ? void 0 : _d2.ruler2
      ];
      let changed = 0;
      for (const m of managers) {
        if (!m) continue;
        const enabled = m.enable(names, true);
        changed += enabled.length;
      }
      if (!ignoreInvalid && changed < names.length) throw new Error("Rules manager: invalid rule name in list");
      return this;
    },
    disable(list$1, ignoreInvalid) {
      var _a3, _b2, _c2, _d2;
      const names = Array.isArray(list$1) ? list$1 : [list$1];
      const managers = [
        (_a3 = this.core) == null ? void 0 : _a3.ruler,
        (_b2 = this.block) == null ? void 0 : _b2.ruler,
        (_c2 = this.inline) == null ? void 0 : _c2.ruler,
        (_d2 = this.inline) == null ? void 0 : _d2.ruler2
      ];
      let changed = 0;
      for (const m of managers) {
        if (!m) continue;
        const disabled = m.disable(names, true);
        changed += disabled.length;
      }
      if (!ignoreInvalid && changed < names.length) throw new Error("Rules manager: invalid rule name in list");
      return this;
    },
    use(plugin, ...params) {
      const fn2 = typeof plugin === "function" ? plugin : plugin && typeof plugin.default === "function" ? plugin.default : void 0;
      if (!fn2) throw new TypeError("MarkdownIt.use: plugin must be a function");
      const args = [this, ...params];
      const thisArg = typeof plugin === "function" ? plugin : plugin;
      fn2.apply(thisArg, args);
      return this;
    },
    render(src, env = {}) {
      const tokens = this.parse(src, env);
      return getRenderer().render(tokens, this.options, env);
    },
    async renderAsync(src, env = {}) {
      const tokens = this.parse(src, env);
      return getRenderer().renderAsync(tokens, this.options, env);
    },
    renderInline(src, env = {}) {
      const tokens = this.parseInline(src, env);
      return getRenderer().render(tokens, this.options, env);
    },
    validateLink,
    normalizeLink,
    normalizeLinkText,
    utils: utils_exports,
    helpers: { ...helpers_exports },
    parse(src, env = {}) {
      if (typeof src !== "string") throw new TypeError("Input data should be a String");
      if (!this.stream.enabled && !this.options.fullChunkedFallback) return core.parse(src, env, this).tokens;
      if (!this.stream.enabled) {
        const chars = src.length;
        if (this.options.fullChunkedFallback) {
          const lines = countLines(src);
          const auto = this.options.autoTuneChunks !== false;
          const userForcedChunk = this.options.fullChunkSizeChars || this.options.fullChunkSizeLines;
          if (auto && !userForcedChunk) {
            const fenceAware = this.options.fullChunkFenceAware ?? true;
            if (chars <= 5e3) return chunkedParse(this, src, env, {
              maxChunkChars: 32e3,
              maxChunkLines: 150,
              fenceAware,
              maxChunks: 8
            });
            else if (chars <= 2e4) return chunkedParse(this, src, env, {
              maxChunkChars: 24e3,
              maxChunkLines: 200,
              fenceAware,
              maxChunks: 12
            });
            else if (chars <= 1e5) ;
            else if (chars <= 2e5) return chunkedParse(this, src, env, {
              maxChunkChars: 2e4,
              maxChunkLines: 150,
              fenceAware,
              maxChunks: 12
            });
          }
          if (chars >= (this.options.fullChunkThresholdChars ?? 2e4) || lines >= (this.options.fullChunkThresholdLines ?? 400)) {
            const clamp$1 = (v, lo2, hi) => v < lo2 ? lo2 : v > hi ? hi : v;
            const adaptive = this.options.fullChunkAdaptive !== false;
            const target = this.options.fullChunkTargetChunks ?? 8;
            const dynMaxChunkChars = clamp$1(Math.ceil(chars / target), 8e3, 32e3);
            const dynMaxChunkLines = clamp$1(Math.ceil(lines / target), 150, 350);
            const maxChunkChars = adaptive ? dynMaxChunkChars : this.options.fullChunkSizeChars ?? 1e4;
            const maxChunkLines = adaptive ? dynMaxChunkLines : this.options.fullChunkSizeLines ?? 200;
            const maxChunks = adaptive ? Math.max(6, Math.min(12, target)) : this.options.fullChunkMaxChunks;
            return chunkedParse(this, src, env, {
              maxChunkChars,
              maxChunkLines,
              fenceAware: this.options.fullChunkFenceAware ?? true,
              maxChunks
            });
          }
        }
      }
      return core.parse(src, env, this).tokens;
    },
    parseInline(src, env = {}) {
      if (typeof src !== "string") throw new TypeError("Input data should be a String");
      const state = core.createState(src, env, this);
      state.inlineMode = true;
      core.process(state);
      return state.tokens;
    }
  };
  md.stream = {
    enabled: Boolean(opts.stream),
    parse(src, env) {
      if (!md.stream.enabled) return core.parse(src, env ?? {}, md).tokens;
      return getStreamParser().parse(src, env, md);
    },
    reset() {
      getStreamParser().reset();
    },
    peek() {
      return streamParser ? streamParser.peek() : [];
    },
    stats() {
      return streamParser ? streamParser.getStats() : {
        total: 0,
        cacheHits: 0,
        appendHits: 0,
        fullParses: 0,
        resets: 0,
        chunkedParses: 0,
        lastMode: "idle"
      };
    },
    resetStats() {
      if (streamParser) streamParser.resetStats();
    }
  };
  if (presetToUse === "zero" && (preset == null ? void 0 : preset.components)) {
    const c = preset.components;
    if ((_a2 = c.core) == null ? void 0 : _a2.rules) md.core.ruler.enableOnly(c.core.rules);
    if ((_b = c.block) == null ? void 0 : _b.rules) md.block.ruler.enableOnly(c.block.rules);
    if ((_c = c.inline) == null ? void 0 : _c.rules) md.inline.ruler.enableOnly(c.inline.rules);
    if ((_d = c.inline2) == null ? void 0 : _d.rules) md.inline.ruler2.enableOnly(c.inline2.rules);
  }
  return md;
}
var src_default = markdownIt;
function container_plugin(md, name, options) {
  function validateDefault(params) {
    return params.trim().split(" ", 2)[0] === name;
  }
  function renderDefault(tokens, idx, _options, env, slf) {
    if (tokens[idx].nesting === 1) tokens[idx].attrJoin("class", name);
    return slf.renderToken(tokens, idx, _options, env, slf);
  }
  options = options || {};
  const min_markers = 3;
  const marker_str = options.marker || ":";
  const marker_char = marker_str.charCodeAt(0);
  const marker_len = marker_str.length;
  const validate = options.validate || validateDefault;
  const render = options.render || renderDefault;
  function container(state, startLine, endLine, silent) {
    let pos;
    let auto_closed = false;
    let start = state.bMarks[startLine] + state.tShift[startLine];
    let max = state.eMarks[startLine];
    if (marker_char !== state.src.charCodeAt(start)) return false;
    for (pos = start + 1; pos <= max; pos++) if (marker_str[(pos - start) % marker_len] !== state.src[pos]) break;
    const marker_count = Math.floor((pos - start) / marker_len);
    if (marker_count < min_markers) return false;
    pos -= (pos - start) % marker_len;
    const markup = state.src.slice(start, pos);
    const params = state.src.slice(pos, max);
    if (!validate(params, markup)) return false;
    if (silent) return true;
    let nextLine = startLine;
    for (; ; ) {
      nextLine++;
      if (nextLine >= endLine) break;
      start = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      if (start < max && state.sCount[nextLine] < state.blkIndent) break;
      if (marker_char !== state.src.charCodeAt(start)) continue;
      if (state.sCount[nextLine] - state.blkIndent >= 4) continue;
      for (pos = start + 1; pos <= max; pos++) if (marker_str[(pos - start) % marker_len] !== state.src[pos]) break;
      if (Math.floor((pos - start) / marker_len) < marker_count) continue;
      pos -= (pos - start) % marker_len;
      pos = state.skipSpaces(pos);
      if (pos < max) continue;
      auto_closed = true;
      break;
    }
    const old_parent = state.parentType;
    const old_line_max = state.lineMax;
    state.parentType = "container";
    state.lineMax = nextLine;
    const token_o = state.push("container_" + name + "_open", "div", 1);
    token_o.markup = markup;
    token_o.block = true;
    token_o.info = params;
    token_o.map = [startLine, nextLine];
    state.md.block.tokenize(state, startLine + 1, nextLine);
    const token_c = state.push("container_" + name + "_close", "div", -1);
    token_c.markup = state.src.slice(start, pos);
    token_c.block = true;
    state.parentType = old_parent;
    state.lineMax = old_line_max;
    state.line = nextLine + (auto_closed ? 1 : 0);
    return true;
  }
  md.block.ruler.before("fence", "container_" + name, container, { alt: [
    "paragraph",
    "reference",
    "blockquote",
    "list"
  ] });
  md.renderer.rules["container_" + name + "_open"] = render;
  md.renderer.rules["container_" + name + "_close"] = render;
}
function parseLooseInlineAttrs(input) {
  const s2 = String(input ?? "").trim();
  if (!s2.startsWith("{") || !s2.endsWith("}")) return null;
  const inner = s2.slice(1, -1).trim();
  if (!inner) return {};
  if (inner.includes("{") || inner.includes("[") || inner.includes("]")) return null;
  const parts = [];
  let buf = "";
  let inSingle = false;
  let inDouble = false;
  for (let i2 = 0; i2 < inner.length; i2++) {
    const ch = inner[i2];
    if (ch === "\\") {
      buf += ch;
      if (i2 + 1 < inner.length) {
        buf += inner[i2 + 1];
        i2++;
      }
      continue;
    }
    if (!inDouble && ch === "'") {
      inSingle = !inSingle;
      buf += ch;
      continue;
    }
    if (!inSingle && ch === '"') {
      inDouble = !inDouble;
      buf += ch;
      continue;
    }
    if (!inSingle && !inDouble && ch === ",") {
      parts.push(buf.trim());
      buf = "";
      continue;
    }
    buf += ch;
  }
  if (buf.trim()) parts.push(buf.trim());
  const out = {};
  for (const part of parts) {
    if (!part) continue;
    let inS = false;
    let inD = false;
    let split = -1;
    for (let i2 = 0; i2 < part.length; i2++) {
      const ch = part[i2];
      if (ch === "\\") {
        i2++;
        continue;
      }
      if (!inD && ch === "'") {
        inS = !inS;
        continue;
      }
      if (!inS && ch === '"') {
        inD = !inD;
        continue;
      }
      if (!inS && !inD && ch === ":") {
        split = i2;
        break;
      }
    }
    if (split === -1) return null;
    const rawKey = part.slice(0, split).trim();
    const rawVal = part.slice(split + 1).trim();
    if (!rawKey) return null;
    let key = rawKey;
    if (key.startsWith('"') && key.endsWith('"') || key.startsWith("'") && key.endsWith("'")) try {
      key = JSON.parse(key.replace(/^'/, '"').replace(/'$/, '"'));
    } catch {
      return null;
    }
    if (!/^[_$A-Z][\w$-]*$/i.test(key)) return null;
    let value;
    if (!rawVal) value = "";
    else if (rawVal.startsWith('"') && rawVal.endsWith('"') || rawVal.startsWith("'") && rawVal.endsWith("'")) try {
      value = JSON.parse(rawVal.replace(/^'/, '"').replace(/'$/, '"'));
    } catch {
      value = rawVal;
    }
    else if (/^-?\d+(?:\.\d+)?$/.test(rawVal)) value = Number(rawVal);
    else if (rawVal === "true" || rawVal === "false") value = rawVal === "true";
    else if (rawVal === "null") value = null;
    else value = rawVal;
    out[key] = value;
  }
  return out;
}
function applyContainers(md) {
  [
    "admonition",
    "info",
    "warning",
    "error",
    "tip",
    "danger",
    "note",
    "caution"
  ].forEach((name) => {
    md.use(container_plugin, name, { render(tokens, idx) {
      if (tokens[idx].nesting === 1) return `<div class="vmr-container vmr-container-${name}">`;
      else return "</div>\n";
    } });
  });
  md.block.ruler.before("fence", "vmr_container_fallback", (state, startLine, endLine, silent) => {
    var _a2;
    const s2 = state;
    const startPos = s2.bMarks[startLine] + s2.tShift[startLine];
    const lineMax = s2.eMarks[startLine];
    const line = s2.src.slice(startPos, lineMax);
    const nameMatch = line.match(/^:::\s*([^\s{]+)/);
    if (!nameMatch) return false;
    const name = nameMatch[1];
    if (!name.trim()) return false;
    const trimmedRest = line.slice(nameMatch[0].length).trim();
    let argsStr;
    let jsonStr;
    const jsonStart = trimmedRest.indexOf("{");
    const jsonCandidate = jsonStart >= 0 ? trimmedRest.slice(jsonStart).trimStart() : void 0;
    if (jsonStart === -1) argsStr = trimmedRest || void 0;
    else {
      argsStr = trimmedRest.slice(0, jsonStart).trim() || void 0;
      if (jsonCandidate == null ? void 0 : jsonCandidate.startsWith("{")) {
        let depth = 0;
        let jsonEnd = -1;
        for (let i2 = 0; i2 < jsonCandidate.length; i2++) {
          if (jsonCandidate[i2] === "{") depth++;
          else if (jsonCandidate[i2] === "}") depth--;
          if (depth === 0) {
            jsonEnd = i2 + 1;
            break;
          }
        }
        if (jsonEnd > 0) jsonStr = jsonCandidate.slice(0, jsonEnd);
      }
      if (!jsonStr) argsStr = trimmedRest || void 0;
    }
    if (silent) return true;
    const envFinal = !!((_a2 = s2.env) == null ? void 0 : _a2.__markstreamFinal);
    let nextLine = startLine + 1;
    let found = false;
    while (nextLine <= endLine) {
      const sPos = s2.bMarks[nextLine] + s2.tShift[nextLine];
      const ePos = s2.eMarks[nextLine];
      if (s2.src.slice(sPos, ePos).trim() === ":::") {
        found = true;
        break;
      }
      nextLine++;
    }
    if (!found) nextLine = endLine;
    const tokenOpen = s2.push("vmr_container_open", "div", 1);
    tokenOpen.attrSet("class", `vmr-container vmr-container-${name}`);
    tokenOpen.meta = {
      ...tokenOpen.meta,
      unclosed: !found && !envFinal
    };
    if (argsStr) tokenOpen.attrSet("data-args", argsStr);
    if (jsonStr) try {
      const attrs = JSON.parse(jsonStr);
      for (const [key, value] of Object.entries(attrs)) {
        const isComplexValue = value != null && typeof value === "object";
        tokenOpen.attrSet(`data-${key}`, isComplexValue ? JSON.stringify(value) : String(value));
      }
    } catch {
      const loose = parseLooseInlineAttrs(jsonStr);
      if (loose) for (const [key, value] of Object.entries(loose)) {
        const isComplexValue = value != null && typeof value === "object";
        tokenOpen.attrSet(`data-${key}`, isComplexValue ? JSON.stringify(value) : String(value));
      }
      else tokenOpen.attrSet("data-attrs", jsonStr);
    }
    const contentLines = [];
    for (let i2 = startLine + 1; i2 < nextLine; i2++) {
      const sPos = s2.bMarks[i2] + s2.tShift[i2];
      const ePos = s2.eMarks[i2];
      contentLines.push(s2.src.slice(sPos, ePos));
    }
    if (contentLines.some((line$1) => line$1.trim().length > 0)) {
      let innerSrc = contentLines.join("\n");
      if (!innerSrc.endsWith("\n")) innerSrc += "\n";
      if (!innerSrc.endsWith("\n\n")) innerSrc += "\n";
      const innerTokens = [];
      s2.md.block.parse(innerSrc, s2.md, s2.env, innerTokens);
      s2.tokens.push(...innerTokens);
    }
    if (found) s2.push("vmr_container_close", "div", -1);
    s2.line = found ? nextLine + 1 : nextLine;
    return true;
  }, { alt: [
    "paragraph",
    "reference",
    "blockquote",
    "list"
  ] });
}
const VOID_TAGS$2 = /* @__PURE__ */ new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
const BASE_COMMON_HTML_TAGS = /* @__PURE__ */ new Set([
  ...Array.from(VOID_TAGS$2),
  "a",
  "abbr",
  "b",
  "bdi",
  "bdo",
  "button",
  "cite",
  "code",
  "data",
  "del",
  "dfn",
  "em",
  "font",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "mark",
  "q",
  "s",
  "samp",
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "time",
  "u",
  "var",
  "article",
  "aside",
  "blockquote",
  "div",
  "details",
  "figcaption",
  "figure",
  "footer",
  "header",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "li",
  "main",
  "nav",
  "ol",
  "p",
  "pre",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "th",
  "thead",
  "tr",
  "ul",
  "svg",
  "g",
  "path"
]);
const OPEN_TAG_RE = /<([A-Z][\w-]*)(?=[\s/>]|$)/gi;
const CLOSE_TAG_RE = /<\/\s*([A-Z][\w-]*)(?=[\s/>]|$)/gi;
const TAG_NAME_AT_START_RE = /^<\s*(?:\/\s*)?([A-Z][\w-]*)/i;
function findTagCloseIndexOutsideQuotes$1(html) {
  let inSingle = false;
  let inDouble = false;
  for (let i2 = 0; i2 < html.length; i2++) {
    const ch = html[i2];
    if (ch === '"' && !inSingle) {
      inDouble = !inDouble;
      continue;
    }
    if (ch === "'" && !inDouble) {
      inSingle = !inSingle;
      continue;
    }
    if (ch === ">" && !inSingle && !inDouble) return i2;
  }
  return -1;
}
function tokenToRaw$1(token) {
  const shape = token;
  return String(shape.raw ?? shape.content ?? shape.markup ?? "");
}
function buildCommonHtmlTagSet(extraTags) {
  const set2 = new Set(BASE_COMMON_HTML_TAGS);
  if (extraTags && Array.isArray(extraTags)) for (const t2 of extraTags) {
    const raw = String(t2 ?? "").trim();
    if (!raw) continue;
    const m = raw.match(/^[<\s/]*([A-Z][\w-]*)/i);
    if (!m) continue;
    set2.add(m[1].toLowerCase());
  }
  return set2;
}
function isCommonHtmlTagOrPrefix(tag, tagSet) {
  if (tagSet.has(tag)) return true;
  for (const common of tagSet) if (common.startsWith(tag)) return true;
  return false;
}
function findFirstIncompleteTag(content, tagSet) {
  let first = null;
  for (const m of content.matchAll(OPEN_TAG_RE)) {
    const idx = m.index ?? -1;
    if (idx < 0) continue;
    const tag = (m[1] ?? "").toLowerCase();
    if (!isCommonHtmlTagOrPrefix(tag, tagSet)) continue;
    if (findTagCloseIndexOutsideQuotes$1(content.slice(idx)) !== -1) continue;
    if (!first || idx < first.index) first = {
      index: idx,
      tag,
      closing: false
    };
  }
  for (const m of content.matchAll(CLOSE_TAG_RE)) {
    const idx = m.index ?? -1;
    if (idx < 0) continue;
    const tag = (m[1] ?? "").toLowerCase();
    if (!isCommonHtmlTagOrPrefix(tag, tagSet)) continue;
    if (findTagCloseIndexOutsideQuotes$1(content.slice(idx)) !== -1) continue;
    if (!first || idx < first.index) first = {
      index: idx,
      tag,
      closing: true
    };
  }
  const bareClose = /<\/\s*$/.exec(content);
  if (bareClose && typeof bareClose.index === "number") {
    const idx = bareClose.index;
    if (!content.slice(idx).includes(">") && (!first || idx < first.index)) first = {
      index: idx,
      tag: "",
      closing: true
    };
  }
  const bareOpen = /<\s*$/.exec(content);
  if (bareOpen && typeof bareOpen.index === "number") {
    const idx = bareOpen.index;
    const rest = content.slice(idx);
    if (!rest.startsWith("</") && !rest.includes(">") && (!first || idx < first.index)) first = {
      index: idx,
      tag: "",
      closing: false
    };
  }
  return first;
}
function splitTextToken(token, content) {
  const t2 = token;
  return Object.assign(Object.create(Object.getPrototypeOf(t2)), t2, {
    type: "text",
    content,
    raw: content
  });
}
function fixStreamingHtmlInlineChildren(children, tagSet) {
  var _a2;
  if (!children.length) return { children };
  const out = [];
  let pending = null;
  let pendingAtEnd = null;
  function pushTextPart(text$1, baseToken) {
    if (!text$1) return;
    if (baseToken) out.push(splitTextToken(baseToken, text$1));
    else out.push({
      type: "text",
      content: text$1,
      raw: text$1
    });
  }
  function splitCompleteHtmlFromText(chunk, baseToken) {
    let cursor = 0;
    while (cursor < chunk.length) {
      const lt2 = chunk.indexOf("<", cursor);
      if (lt2 === -1) {
        pushTextPart(chunk.slice(cursor), baseToken);
        break;
      }
      pushTextPart(chunk.slice(cursor, lt2), baseToken);
      const sub = chunk.slice(lt2);
      const tagMatch = sub.match(TAG_NAME_AT_START_RE);
      if (!tagMatch) {
        pushTextPart("<", baseToken);
        cursor = lt2 + 1;
        continue;
      }
      const closeIdx = findTagCloseIndexOutsideQuotes$1(sub);
      if (closeIdx === -1) {
        pushTextPart("<", baseToken);
        cursor = lt2 + 1;
        continue;
      }
      const tagText = sub.slice(0, closeIdx + 1);
      const tagName = (tagMatch[1] ?? "").toLowerCase();
      if (tagSet.has(tagName)) out.push({
        type: "html_inline",
        tag: "",
        content: tagText,
        raw: tagText
      });
      else pushTextPart(tagText, baseToken);
      cursor = lt2 + tagText.length;
    }
  }
  function processTextChunk(chunk, baseToken) {
    if (!chunk) return;
    const match2 = findFirstIncompleteTag(chunk, tagSet);
    if (!match2) {
      splitCompleteHtmlFromText(chunk, baseToken);
      return;
    }
    const before = chunk.slice(0, match2.index);
    if (before) splitCompleteHtmlFromText(before, baseToken);
    pending = {
      tag: match2.tag,
      buffer: chunk.slice(match2.index),
      closing: match2.closing
    };
    pendingAtEnd = pending.buffer;
  }
  for (const child of children) {
    if (pending) {
      pending.buffer += tokenToRaw$1(child);
      pendingAtEnd = pending.buffer;
      const closeIdx = findTagCloseIndexOutsideQuotes$1(pending.buffer);
      if (closeIdx === -1) continue;
      const tagChunk = pending.buffer.slice(0, closeIdx + 1);
      const afterChunk = pending.buffer.slice(closeIdx + 1);
      out.push({
        type: "html_inline",
        tag: "",
        content: tagChunk,
        raw: tagChunk
      });
      pending = null;
      pendingAtEnd = null;
      if (afterChunk) processTextChunk(afterChunk);
      continue;
    }
    if (child.type === "html_inline") {
      const content = tokenToRaw$1(child);
      const tagName = (((_a2 = content.match(TAG_NAME_AT_START_RE)) == null ? void 0 : _a2[1]) ?? "").toLowerCase();
      if (tagName && tagSet.has(tagName) && findTagCloseIndexOutsideQuotes$1(content) === -1) {
        pending = {
          tag: tagName,
          buffer: content,
          closing: /^<\s*\//.test(content)
        };
        pendingAtEnd = pending.buffer;
        continue;
      }
    }
    if (child.type === "text") {
      const content = String(child.content ?? "");
      if (!content.includes("<")) {
        out.push(child);
        continue;
      }
      processTextChunk(content, child);
      continue;
    }
    out.push(child);
  }
  return {
    children: out,
    pendingBuffer: pendingAtEnd ?? void 0
  };
}
function applyFixHtmlInlineTokens(md, options = {}) {
  var _a2;
  const commonHtmlTags = buildCommonHtmlTagSet(options.customHtmlTags);
  const autoCloseInlineTagSet = /* @__PURE__ */ new Set([
    "a",
    "span",
    "strong",
    "em",
    "b",
    "i",
    "u"
  ]);
  const customTagSet = /* @__PURE__ */ new Set();
  if ((_a2 = options.customHtmlTags) == null ? void 0 : _a2.length) for (const t2 of options.customHtmlTags) {
    const raw = String(t2 ?? "").trim();
    if (!raw) continue;
    const m = raw.match(/^[<\s/]*([A-Z][\w-]*)/i);
    if (!m) continue;
    const name = m[1].toLowerCase();
    customTagSet.add(name);
    autoCloseInlineTagSet.add(name);
  }
  md.core.ruler.after("inline", "fix_html_inline_streaming", (state) => {
    const toks = state.tokens ?? [];
    for (const t2 of toks) {
      const tok = t2;
      if (tok.type !== "inline" || !Array.isArray(tok.children)) continue;
      const originalContent = String(tok.content ?? "");
      const sourceChildren = tok.children.length ? tok.children : originalContent.includes("<") ? [{
        type: "text",
        content: originalContent,
        raw: originalContent
      }] : null;
      if (!sourceChildren) continue;
      try {
        const fixed = fixStreamingHtmlInlineChildren(sourceChildren, commonHtmlTags);
        tok.children = fixed.children;
        if (fixed.pendingBuffer) {
          const idx = originalContent.lastIndexOf(fixed.pendingBuffer);
          if (idx !== -1) {
            const trimmed = originalContent.slice(0, idx);
            tok.content = trimmed;
            if (typeof tok.raw === "string") tok.raw = trimmed;
          }
        }
      } catch (e2) {
        console.error("[applyFixHtmlInlineTokens] failed to fix streaming html inline", e2);
      }
    }
  });
  md.core.ruler.push("fix_html_inline_tokens", (state) => {
    var _a3, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k;
    const toks = state.tokens ?? [];
    const tagStack = [];
    for (let i2 = 0; i2 < toks.length; i2++) {
      const t2 = toks[i2];
      if (tagStack.length > 0) {
        const [openTag, openIndex] = tagStack[tagStack.length - 1];
        if (i2 !== openIndex) {
          if (t2.type === "paragraph_open" || t2.type === "paragraph_close") {
            toks.splice(i2, 1);
            i2--;
            continue;
          }
          const chunk = String(t2.content ?? t2.raw ?? "");
          const closeRe = new RegExp(`<\\s*\\/\\s*${openTag}\\s*>`, "i");
          const closeMatch = chunk ? closeRe.exec(chunk) : null;
          const isClosingTag$1 = !!closeMatch;
          if (chunk) {
            const openToken = toks[openIndex];
            if (closeMatch && typeof closeMatch.index === "number") {
              const end = closeMatch.index + String(closeMatch[0] ?? "").length;
              const before = chunk.slice(0, end);
              const after = chunk.slice(end);
              openToken.content = `${String(openToken.content || "")}
${before}`;
              openToken.loading = false;
              const afterTrimmed = after.replace(/^\s+/, "");
              toks.splice(i2, 1);
              tagStack.pop();
              if (afterTrimmed) toks.splice(i2, 0, afterTrimmed.startsWith("<") ? {
                type: "html_block",
                content: afterTrimmed
              } : {
                type: "inline",
                content: afterTrimmed,
                children: [{
                  type: "text",
                  content: afterTrimmed,
                  raw: afterTrimmed
                }]
              });
              i2--;
              continue;
            }
            openToken.content = `${String(openToken.content || "")}
${chunk}`;
            if (openToken.loading !== false) openToken.loading = !isClosingTag$1;
          }
          toks.splice(i2, 1);
          i2--;
          if (isClosingTag$1) tagStack.pop();
          continue;
        }
      }
      if (t2.type === "html_block") {
        const rawContent = String(t2.content || "");
        const tag = (((_a3 = rawContent.match(/<\s*(?:\/\s*)?([^\s>/]+)/)) == null ? void 0 : _a3[1]) ?? "").toLowerCase();
        const isClosingTag$1 = /^\s*<\s*\//.test(rawContent);
        if (!tag || !customTagSet.has(tag)) continue;
        if (!isClosingTag$1) {
          if (tag) {
            const closeRe = new RegExp(`<\\s*\\/\\s*${tag}\\s*>`, "i");
            if (!new RegExp(`^\\s*<\\s*${tag}\\b[^>]*\\/\\s*>`, "i").test(rawContent) && !closeRe.test(rawContent)) tagStack.push([tag, i2]);
          }
        } else if (tagStack.length > 0 && tag && tagStack[tagStack.length - 1][0] === tag) {
          const [, openIndex] = tagStack[tagStack.length - 1];
          const openToken = toks[openIndex];
          openToken.content = `${String(openToken.content || "")}
${rawContent}`;
          openToken.loading = false;
          tagStack.pop();
          toks.splice(i2, 1);
          i2--;
        }
        continue;
      } else if (tagStack.length > 0) {
        if (t2.type === "paragraph_open" || t2.type === "paragraph_close") {
          toks.splice(i2, 1);
          i2--;
          continue;
        }
        const content = t2.content || "";
        const isClosingTag$1 = new RegExp(`<\\s*\\/\\s*${tagStack[tagStack.length - 1][0]}\\s*>`, "i").test(content);
        if (content) {
          const [, openIndex] = tagStack[tagStack.length - 1];
          const openToken = toks[openIndex];
          openToken.content = `${openToken.content || ""}
${content}`;
          if (openToken.loading !== false) openToken.loading = !isClosingTag$1;
        }
        if (isClosingTag$1) tagStack.pop();
        toks.splice(i2, 1);
        i2--;
      } else continue;
    }
    if (customTagSet.size > 0) {
      const openReCache = /* @__PURE__ */ new Map();
      const closeReCache = /* @__PURE__ */ new Map();
      const getOpenRe = (tag) => {
        let r2 = openReCache.get(tag);
        if (!r2) {
          r2 = new RegExp(`<\\s*${tag}\\b`, "i");
          openReCache.set(tag, r2);
        }
        return r2;
      };
      const getCloseRe = (tag) => {
        let r2 = closeReCache.get(tag);
        if (!r2) {
          r2 = new RegExp(`<\\s*\\/\\s*${tag}\\s*>`, "i");
          closeReCache.set(tag, r2);
        }
        return r2;
      };
      const stack = [];
      for (let i2 = 0; i2 < toks.length; i2++) {
        const tok = toks[i2];
        const content = String(tok.content ?? "");
        if (stack.length > 0) {
          const top = stack[stack.length - 1];
          const openTok = toks[top.index];
          if (tok.type === "html_block" && getCloseRe(top.tag).test(content)) {
            openTok.content = `${String(openTok.content ?? "")}
${content}`;
            if (Array.isArray(openTok.children)) openTok.children.push({
              type: "html_inline",
              content: `</${top.tag}>`,
              raw: `</${top.tag}>`
            });
            toks.splice(i2, 1);
            i2--;
            stack.pop();
            continue;
          }
          if (tok.type !== "inline") continue;
          const children = Array.isArray(tok.children) ? tok.children : [];
          const closeChildIndex = children.findIndex((c) => {
            if (!c || c.type !== "html_inline") return false;
            const cContent = String(c.content ?? "");
            return /^\s*<\s*\//.test(cContent) && cContent.toLowerCase().includes(top.tag);
          });
          if (closeChildIndex !== -1) {
            const beforeChildren = children.slice(0, closeChildIndex + 1);
            const afterChildren = children.slice(closeChildIndex + 1);
            const beforeText = beforeChildren.map((c) => String((c == null ? void 0 : c.content) ?? (c == null ? void 0 : c.raw) ?? "")).join("");
            openTok.content = `${String(openTok.content ?? "")}
${beforeText}`;
            if (Array.isArray(openTok.children)) openTok.children.push(...beforeChildren);
            if (afterChildren.length) {
              const afterText = afterChildren.map((c) => String(c.content ?? c.raw ?? "")).join("");
              if (afterText.trim()) {
                const trimmed = afterText.replace(/^\s+/, "");
                if (trimmed.startsWith("<")) toks.splice(i2, 1, {
                  type: "html_block",
                  content: trimmed
                });
                else toks.splice(i2, 1, {
                  type: "paragraph_open",
                  tag: "p",
                  nesting: 1
                }, {
                  type: "inline",
                  tag: "",
                  nesting: 0,
                  content: afterText,
                  children: [{
                    type: "text",
                    content: afterText,
                    raw: afterText
                  }]
                }, {
                  type: "paragraph_close",
                  tag: "p",
                  nesting: -1
                });
              } else {
                toks.splice(i2, 1);
                i2--;
              }
            } else {
              toks.splice(i2, 1);
              i2--;
            }
            stack.pop();
            continue;
          }
          openTok.content = `${String(openTok.content ?? "")}
${content}`;
          if (Array.isArray(openTok.children)) openTok.children.push(...children);
          toks.splice(i2, 1);
          i2--;
          continue;
        }
        if (tok.type !== "inline") continue;
        for (const tag of customTagSet) if (getOpenRe(tag).test(content) && !getCloseRe(tag).test(content)) {
          stack.push({
            tag,
            index: i2
          });
          break;
        }
      }
    }
    {
      let depth = 0;
      for (let i2 = 0; i2 < toks.length; i2++) {
        const t2 = toks[i2];
        if (t2.type === "paragraph_open") {
          depth++;
          continue;
        }
        if (t2.type === "paragraph_close") if (depth > 0) depth--;
        else {
          toks.splice(i2, 1);
          i2--;
        }
      }
    }
    for (let i2 = 0; i2 < toks.length; i2++) {
      const t2 = toks[i2];
      if (t2.type === "html_block") {
        const tag = (((_c = (_b = t2.content) == null ? void 0 : _b.match(/<([^\s>/]+)/)) == null ? void 0 : _c[1]) ?? "").toLowerCase();
        if (tag.startsWith("!") || tag.startsWith("?")) {
          t2.loading = false;
          continue;
        }
        if (customTagSet.has(tag)) {
          const raw$2 = String(t2.content ?? "");
          const closeRe = new RegExp(`<\\/\\s*${tag}\\s*>`, "i");
          t2.loading = closeRe.test(raw$2) ? false : t2.loading !== void 0 ? t2.loading : true;
          const closeMatch$1 = closeRe.exec(raw$2);
          const endTagIndex$1 = closeMatch$1 ? closeMatch$1.index : -1;
          const closeLen$1 = closeMatch$1 ? closeMatch$1[0].length : 0;
          if (endTagIndex$1 !== -1) {
            const rawForNode = raw$2.slice(0, endTagIndex$1 + closeLen$1);
            let inner = "";
            const openEnd = findTagCloseIndexOutsideQuotes$1(raw$2);
            if (openEnd !== -1 && openEnd < endTagIndex$1) inner = raw$2.slice(openEnd + 1, endTagIndex$1);
            t2.children = [{
              type: tag,
              content: inner,
              raw: rawForNode,
              attrs: [],
              tag,
              loading: false
            }];
            t2.content = rawForNode;
            t2.raw = rawForNode;
            const afterTrimmed = (raw$2.slice(endTagIndex$1 + closeLen$1) || "").replace(/^\s+/, "");
            if (afterTrimmed) toks.splice(i2 + 1, 0, afterTrimmed.startsWith("<") ? {
              type: "html_block",
              content: afterTrimmed
            } : {
              type: "text",
              content: afterTrimmed,
              raw: afterTrimmed
            });
          } else t2.children = [{
            type: tag,
            content: "",
            raw: raw$2,
            attrs: [],
            tag,
            loading: true
          }];
          continue;
        }
        if ([
          "br",
          "hr",
          "img",
          "input",
          "link",
          "meta",
          "div",
          "p",
          "ul",
          "li"
        ].includes(tag)) continue;
        t2.type = "inline";
        const attrRegex = /\s([\w:-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
        let match2;
        while ((match2 = attrRegex.exec(t2.content || "")) !== null) {
          match2[1];
          match2[2] || match2[3] || match2[4] || "";
        }
        const raw$1 = String(t2.content ?? "");
        const closeMatch = new RegExp(`<\\/\\s*${tag}\\s*>`, "i").exec(raw$1);
        const endTagIndex = closeMatch ? closeMatch.index : -1;
        const closeLen = closeMatch ? closeMatch[0].length : 0;
        if (endTagIndex !== -1) {
          const rawForNode = raw$1.slice(0, endTagIndex + closeLen);
          const afterTrimmed = (raw$1.slice(endTagIndex + closeLen) || "").replace(/^\s+/, "");
          t2.children = [{
            type: "html_block",
            content: rawForNode,
            tag,
            loading: false
          }];
          t2.content = rawForNode;
          t2.raw = rawForNode;
          if (afterTrimmed) toks.splice(i2 + 1, 0, afterTrimmed.startsWith("<") ? {
            type: "html_block",
            content: afterTrimmed
          } : {
            type: "text",
            content: afterTrimmed,
            raw: afterTrimmed
          });
        } else t2.children = [{
          type: "html_block",
          content: t2.content,
          tag,
          loading: true
        }];
        continue;
      }
      if (!t2 || t2.type !== "inline") continue;
      if (t2.children.length === 2 && t2.children[0].type === "html_inline") {
        const tag = (((_e2 = (_d = t2.children[0].content) == null ? void 0 : _d.match(/<([^\s>/]+)/)) == null ? void 0 : _e2[1]) ?? "").toLowerCase();
        if (autoCloseInlineTagSet.has(tag)) {
          t2.children[0].loading = true;
          t2.children[0].tag = tag;
          t2.children.push({
            type: "html_inline",
            tag,
            loading: true,
            content: `</${tag}>`
          });
        } else t2.children = [{
          type: "html_block",
          loading: true,
          tag,
          content: t2.children[0].content + t2.children[1].content
        }];
        continue;
      } else if (t2.children.length === 3 && t2.children[0].type === "html_inline" && t2.children[2].type === "html_inline") {
        const tag = (((_g = (_f = t2.children[0].content) == null ? void 0 : _f.match(/<([^\s>/]+)/)) == null ? void 0 : _g[1]) ?? "").toLowerCase();
        if (autoCloseInlineTagSet.has(tag)) continue;
        t2.children = [{
          type: "html_block",
          loading: false,
          tag,
          content: t2.children.map((ct2) => ct2.content).join("")
        }];
        continue;
      }
      if (!((_h = t2.content) == null ? void 0 : _h.startsWith("<")) || ((_i = t2.children) == null ? void 0 : _i.length) !== 1) continue;
      const raw = String(t2.content);
      const tagName = ((_k = (_j = raw.match(/<([^\s>/]+)/)) == null ? void 0 : _j[1]) == null ? void 0 : _k.toLowerCase()) ?? "";
      if (!tagName) continue;
      const isVoid = /\/\s*>\s*$/.test(raw) || VOID_TAGS$2.has(tagName);
      const htmlToken = t2;
      if (isVoid) {
        htmlToken.children = [{
          type: "html_inline",
          content: raw
        }];
        continue;
      }
      htmlToken.children.length = 0;
    }
  });
}
function looksLikeCode(line) {
  const trimmed = line.trim();
  if (!trimmed) return false;
  if (/^&[a-z0-9#]+;/i.test(trimmed)) return false;
  if (/^(?:const|let|var|function|class|import|export|if|for|while|return|await|async|yield|try|catch|throw|new|typeof|instanceof|switch|case|break|continue|def|ruby|perl|print|echo|true|false|null|undefined|NaN|Infinity|this)\b/.test(trimmed)) return true;
  if (/[a-z_$][\w$]*(?:\.[a-z_$][\w$]*|\['[^']*'\]|\["[^"]*"\]|\[\d+\])*\s*\(/i.test(trimmed)) return true;
  if (/[a-z_$][\w$]*(?:\.[a-z_$][\w$]*|\['[^']*'\]|\["[^"]*"\]|\[[\d+\]])+/i.test(trimmed)) return true;
  if (/\w+\s*(?:===?|!==?|<=?|>=?|\+\+|--|&&|\|\||\?\.)/.test(trimmed)) return true;
  if (/^(?:!!|\+\+|--)\s*\w/.test(trimmed)) return true;
  if (/[\w$]+\s*(?:\+=|-=|\*=|\/=|%=|\*\*=|=)/.test(trimmed)) return true;
  if (/^(?:https?:\/\/|ftp:\/\/|file:\/\/|\/\/|www\.)/i.test(trimmed)) return true;
  if (/`[^`]*\$\{[^}]*\}[^`]*`/.test(trimmed)) return true;
  if (/<\/?[A-Z][a-zA-Z0-9]*/.test(trimmed)) return true;
  if (/<[a-z][a-z0-9]*\s[^>]+>/.test(trimmed)) return true;
  if (/^(["'`]).*\1\s*[;,]?$/.test(trimmed)) return true;
  if (/^\[[\s\S]*\]$/.test(trimmed) || /^\{[\s\S]*\}$/.test(trimmed) || /^\(\s*\)$/.test(trimmed)) return true;
  if (/[\w$]+(?:\s*[+\-*/%<>=!&|^~:]+\s*[\w$]+|\s*\.\s*[\w$]+)/.test(trimmed)) return true;
  if (/=>|->|::/.test(trimmed)) return true;
  if (/^@[\w.$]+$/.test(trimmed)) return true;
  if (/^(?:0x[0-9a-fA-F]+|0b[01]+|0o[0-7]+|\d+(?:\.\d*)?(?:px|em|rem|%|vh|vw|deg|s|ms)?)$/.test(trimmed)) return true;
  if (/^\$[\w$]+\s*[=:]/.test(trimmed)) return true;
  if (/\|\s*\w+|\w+\s*\|/.test(trimmed)) return true;
  if (/^(?:git|npm|yarn|pnpm|bun|pip|cargo|go|rust|python|node|java|mvn|gradle|docker|kubectl)\s+/.test(trimmed)) return true;
  if (/(?:console|window|document|Math|JSON|Date|Array|Object|String|Number|Boolean)\.[a-zA-Z]/.test(trimmed)) return true;
  if (/^(?:\/\/|#|\/\*|\*\/|<!--|-->)/.test(trimmed)) return true;
  if (/^(?:<<<|<<\s*['"]?\w+['"]?)/.test(trimmed)) return true;
  return false;
}
function applyFixIndentedCodeBlock(md, options = {}) {
  if (options.enabled === false) return;
  md.core.ruler.after("inline", "fix_indented_code_block", (state) => {
    const tokens = state.tokens;
    for (let i2 = 0; i2 < tokens.length; i2++) {
      const token = tokens[i2];
      if (token.type !== "code_block") continue;
      const content = String(token.content ?? "").trim();
      if (!content) continue;
      const lines = content.split(/\r?\n/).filter((line) => line.trim().length > 0);
      if (lines.length === 1 && !looksLikeCode(lines[0] ?? "")) {
        const textContent = lines[0] ?? "";
        tokens.splice(i2, 1, {
          type: "paragraph_open",
          tag: "p",
          nesting: 1,
          level: token.level
        }, {
          type: "inline",
          tag: "",
          nesting: 0,
          level: token.level,
          content: textContent,
          children: [{
            type: "text",
            content: textContent,
            level: token.level + 1
          }],
          block: true
        }, {
          type: "paragraph_close",
          tag: "p",
          nesting: -1,
          level: token.level
        });
        i2 += 2;
      }
    }
  });
}
function textToken(content) {
  return {
    type: "text",
    content,
    raw: content
  };
}
function pushEmOpen(arr, type) {
  if (type === 1) arr.push({
    type: "em_open",
    tag: "em",
    nesting: 1
  });
  else if (type === 2) arr.push({
    type: "strong_open",
    tag: "strong",
    nesting: 1
  });
  else if (type === 3) {
    arr.push({
      type: "strong_open",
      tag: "strong",
      nesting: 1
    });
    arr.push({
      type: "em_open",
      tag: "em",
      nesting: 1
    });
  }
}
function pushEmClose(arr, type) {
  if (type === 1) arr.push({
    type: "em_close",
    tag: "em",
    nesting: -1
  });
  else if (type === 2) arr.push({
    type: "strong_close",
    tag: "strong",
    nesting: -1
  });
  else if (type === 3) {
    arr.push({
      type: "em_close",
      tag: "em",
      nesting: -1
    });
    arr.push({
      type: "strong_close",
      tag: "strong",
      nesting: -1
    });
  }
}
function createLinkToken(text$1, href, loading) {
  let title = "";
  if (href.includes('"')) {
    const temps = href.split('"');
    href = temps[0].trim();
    title = temps[1].trim();
  }
  return {
    type: "link",
    loading,
    href,
    title,
    text: text$1,
    children: [{
      type: "text",
      content: text$1,
      raw: text$1
    }],
    raw: String(`[${text$1}](${href})`)
  };
}
function applyFixLinkTokens(md) {
  md.core.ruler.after("inline", "fix_link_tokens", (state) => {
    const toks = state.tokens ?? [];
    for (let i2 = 0; i2 < toks.length; i2++) {
      const t2 = toks[i2];
      if (t2 && t2.type === "inline" && Array.isArray(t2.children)) try {
        t2.children = fixLinkToken(t2.children);
      } catch (e2) {
        console.error("[applyFixLinkTokens] failed to fix inline children", e2);
      }
    }
  });
}
function fixLinkToken(tokens) {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa;
  if (tokens.length < 4) return tokens;
  if (tokens.some((token) => token.type === "code_inline")) return tokens;
  for (let i2 = 0; i2 <= tokens.length - 1; i2++) {
    if (i2 < 0) i2 = 0;
    const curToken = tokens[i2];
    if (!curToken) break;
    if ((curToken == null ? void 0 : curToken.type) === "em_open" && ((_a2 = tokens[i2 - 1]) == null ? void 0 : _a2.type) === "text" && ((_b = tokens[i2 - 1].content) == null ? void 0 : _b.endsWith("*"))) {
      const beforeText = ((_c = tokens[i2 - 1].content) == null ? void 0 : _c.replace(/(\*+)$/, "")) || "";
      tokens[i2 - 1].content = beforeText;
      curToken.type = "strong_open";
      curToken.tag = "strong";
      curToken.markup = "**";
      for (let j = i2 + 1; j < tokens.length; j++) if (((_d = tokens[j]) == null ? void 0 : _d.type) === "em_close") {
        tokens[j].type = "strong_close";
        tokens[j].tag = "strong";
        tokens[j].markup = "**";
        break;
      }
    } else if ((curToken == null ? void 0 : curToken.type) === "text" && ((_e2 = curToken.content) == null ? void 0 : _e2.endsWith("(")) && ((_f = tokens[i2 + 1]) == null ? void 0 : _f.type) === "link_open") {
      const match2 = curToken.content.match(/\[([^\]]+)\]/);
      if (match2) {
        let beforeText = curToken.content.slice(0, match2.index);
        const emphasisMatch = beforeText.match(/(\*+)$/);
        const replacerTokens = [];
        if (emphasisMatch) {
          beforeText = beforeText.slice(0, emphasisMatch.index);
          if (beforeText) replacerTokens.push(textToken(beforeText));
          const text$1 = match2[1];
          const type = emphasisMatch[1].length;
          pushEmOpen(replacerTokens, type);
          let href = ((_g = tokens[i2 + 2]) == null ? void 0 : _g.content) || "";
          if (((_h = tokens[i2 + 4]) == null ? void 0 : _h.type) === "text" && !((_i = tokens[i2 + 4].content) == null ? void 0 : _i.startsWith(")"))) {
            href += ((_j = tokens[i2 + 4]) == null ? void 0 : _j.content) || "";
            tokens[i2 + 4].content = "";
          }
          replacerTokens.push(createLinkToken(text$1, href, !((_l = (_k = tokens[i2 + 4]) == null ? void 0 : _k.content) == null ? void 0 : _l.startsWith(")"))));
          pushEmClose(replacerTokens, type);
          if (((_m = tokens[i2 + 4]) == null ? void 0 : _m.type) === "text") {
            const afterText = (_n2 = tokens[i2 + 4].content) == null ? void 0 : _n2.replace(/^\)\**/, "");
            if (afterText) replacerTokens.push(textToken(afterText));
            tokens.splice(i2, 5, ...replacerTokens);
          } else tokens.splice(i2, 4, ...replacerTokens);
        } else {
          if (beforeText) replacerTokens.push(textToken(beforeText));
          let text$1 = match2[1];
          const emphasisMatch$1 = text$1.match(/^\*+/);
          if (emphasisMatch$1) {
            const type = emphasisMatch$1[0].length;
            text$1 = text$1.replace(/^\*+/, "").replace(/\*+$/, "");
            let href$1 = ((_o = tokens[i2 + 2]) == null ? void 0 : _o.content) || "";
            if (((_p = tokens[i2 + 4]) == null ? void 0 : _p.type) === "text" && !((_q = tokens[i2 + 4].content) == null ? void 0 : _q.startsWith(")"))) {
              href$1 += ((_r = tokens[i2 + 4]) == null ? void 0 : _r.content) || "";
              tokens[i2 + 4].content = "";
            }
            pushEmOpen(replacerTokens, type);
            replacerTokens.push(createLinkToken(text$1, href$1, !((_t2 = (_s = tokens[i2 + 4]) == null ? void 0 : _s.content) == null ? void 0 : _t2.startsWith(")"))));
            pushEmClose(replacerTokens, type);
            if (((_u = tokens[i2 + 4]) == null ? void 0 : _u.type) === "text") {
              const afterText = (_v = tokens[i2 + 4].content) == null ? void 0 : _v.replace(/^\)/, "");
              if (afterText) replacerTokens.push(textToken(afterText));
              tokens.splice(i2, 5, ...replacerTokens);
            } else tokens.splice(i2, 4, ...replacerTokens);
            if (i2 === 0) i2 = replacerTokens.length - 1;
            else i2 -= replacerTokens.length + 1;
            continue;
          }
          let href = ((_w = tokens[i2 + 2]) == null ? void 0 : _w.content) || "";
          if (((_x = tokens[i2 + 4]) == null ? void 0 : _x.type) === "text" && !((_y = tokens[i2 + 4].content) == null ? void 0 : _y.startsWith(")"))) {
            href += ((_z = tokens[i2 + 4]) == null ? void 0 : _z.content) || "";
            tokens[i2 + 4].content = "";
          }
          replacerTokens.push(createLinkToken(text$1, href, !((_B = (_A = tokens[i2 + 4]) == null ? void 0 : _A.content) == null ? void 0 : _B.startsWith(")"))));
          if (((_C = tokens[i2 + 4]) == null ? void 0 : _C.type) === "text") {
            const afterText = (_D = tokens[i2 + 4].content) == null ? void 0 : _D.replace(/^\)/, "");
            if (afterText) replacerTokens.push(textToken(afterText));
            tokens.splice(i2, 5, ...replacerTokens);
          } else tokens.splice(i2, 4, ...replacerTokens);
        }
        i2 -= replacerTokens.length + 1;
        continue;
      }
    } else if (curToken.type === "link_open" && curToken.markup === "linkify" && ((_E = tokens[i2 - 1]) == null ? void 0 : _E.type) === "text" && ((_F = tokens[i2 - 1].content) == null ? void 0 : _F.endsWith("("))) {
      if (((_G = tokens[i2 - 2]) == null ? void 0 : _G.type) === "link_close") {
        const replacerTokens = [];
        const text$1 = tokens[i2 - 3].content || "";
        let href = ((_I = (_H = curToken.attrs) == null ? void 0 : _H.find((attr) => attr[0] === "href")) == null ? void 0 : _I[1]) || "";
        if (((_J = tokens[i2 + 3]) == null ? void 0 : _J.type) === "text") {
          const m = (((_K = tokens[i2 + 3]) == null ? void 0 : _K.content) ?? "").indexOf(")");
          const loading = m === -1;
          if (m === -1) {
            href += ((_M = (_L = tokens[i2 + 3]) == null ? void 0 : _L.content) == null ? void 0 : _M.slice(0, m)) || "";
            tokens[i2 + 3].content = "";
          }
          replacerTokens.push(createLinkToken(text$1, href, loading));
          const afterText = (_N = tokens[i2 + 3].content) == null ? void 0 : _N.replace(/^\)\**/, "");
          if (afterText) replacerTokens.push(textToken(afterText));
          tokens.splice(i2 - 4, 8, ...replacerTokens);
        } else {
          replacerTokens.push({
            type: "link",
            loading: true,
            href,
            title: "",
            text: text$1,
            children: [{
              type: "text",
              content: href,
              raw: href
            }],
            raw: String(`[${text$1}](${href})`)
          });
          tokens.splice(i2 - 4, 7, ...replacerTokens);
        }
        continue;
      } else if (tokens[i2 - 1].content === "](" && ((_O = tokens[i2 - 3]) == null ? void 0 : _O.type) === "text" && ((_P = tokens[i2 - 3].content) == null ? void 0 : _P.endsWith(")"))) if (((_Q = tokens[i2 - 2]) == null ? void 0 : _Q.type) === "strong_open") {
        const [beforeText, linText] = ((_R = tokens[i2 - 3].content) == null ? void 0 : _R.split("[**")) || [];
        tokens[i2 + 1].content = linText || "";
        tokens[i2 - 3].content = beforeText || "";
        tokens[i2 - 1].content = "";
      } else if (((_S = tokens[i2 - 2]) == null ? void 0 : _S.type) === "em_open") {
        const [beforeText, linText] = ((_T = tokens[i2 - 3].content) == null ? void 0 : _T.split("[*")) || [];
        tokens[i2 + 1].content = linText || "";
        tokens[i2 - 3].content = beforeText || "";
        tokens[i2 - 1].content = "";
      } else {
        const [beforeText, linText] = ((_U = tokens[i2 - 3].content) == null ? void 0 : _U.split("[")) || [];
        tokens[i2 + 1].content = linText || "";
        tokens[i2 - 3].content = beforeText || "";
        tokens[i2 - 1].content = "";
      }
    }
    if (curToken.type === "link_close" && curToken.nesting === -1 && ((_V = tokens[i2 + 1]) == null ? void 0 : _V.type) === "text" && ((_W = tokens[i2 - 1]) == null ? void 0 : _W.type) === "text") {
      const text$1 = tokens[i2 - 1].content || "";
      const attrs = tokens[i2 - 2].attrs || [];
      const href = ((_X = attrs.find((a2) => a2[0] === "href")) == null ? void 0 : _X[1]) || "";
      const title = ((_Y = attrs.find((a2) => a2[0] === "title")) == null ? void 0 : _Y[1]) || "";
      let count = 3;
      let deleteCount = 2;
      const emphasisMatch = (((_Z = tokens[i2 - 3]) == null ? void 0 : _Z.content) || "").match(/^(\*+)$/);
      const replacerTokens = [];
      if (emphasisMatch) {
        deleteCount += 1;
        const type = emphasisMatch[1].length;
        pushEmOpen(replacerTokens, type);
      }
      if (curToken.markup !== "linkify" && tokens[i2 + 1].type === "text" && ((_$ = (__ = tokens[i2 + 1]) == null ? void 0 : __.content) == null ? void 0 : _$.startsWith("]("))) {
        count += 1;
        for (let j = i2 + 1; j < tokens.length; j++) {
          const type = emphasisMatch ? emphasisMatch[1].length : tokens[i2 - 3].markup.length;
          const t2 = tokens[j];
          if (type === 1 && t2.type === "em_close") break;
          else if (type === 2 && t2.type === "strong_close") break;
          else if (type === 3) {
            if (t2.type === "em_close" || t2.type === "strong_close") break;
          }
          count += 1;
        }
      }
      replacerTokens.push({
        type: "link",
        loading: false,
        href,
        title,
        text: text$1,
        children: [{
          type: "text",
          content: text$1,
          raw: text$1
        }],
        raw: String(`[${text$1}](${href})`)
      });
      if (emphasisMatch) {
        const type = emphasisMatch[1].length;
        pushEmClose(replacerTokens, type);
      }
      tokens.splice(i2 - deleteCount, count, ...replacerTokens);
      i2 -= replacerTokens.length + 1;
      continue;
    } else if (((_aa = curToken.content) == null ? void 0 : _aa.startsWith("](")) && ((_ba = tokens[i2 - 1].markup) == null ? void 0 : _ba.includes("*")) && ((_ca = tokens[i2 - 4]) == null ? void 0 : _ca.type) === "text" && ((_da = tokens[i2 - 4].content) == null ? void 0 : _da.endsWith("["))) {
      const type = tokens[i2 - 1].markup.length;
      const replacerTokens = [];
      const beforeText = tokens[i2 - 4].content.slice(0, tokens[i2 - 4].content.length - type);
      if (beforeText) replacerTokens.push(textToken(beforeText));
      pushEmOpen(replacerTokens, type);
      const text$1 = tokens[i2 - 2].content || "";
      let href = curToken.content.slice(2);
      let loading = true;
      if (((_ea = tokens[i2 + 1]) == null ? void 0 : _ea.type) === "text") {
        const m = (((_fa = tokens[i2 + 1]) == null ? void 0 : _fa.content) ?? "").indexOf(")");
        loading = m === -1;
        if (m === -1) {
          href += ((_ha = (_ga = tokens[i2 + 1]) == null ? void 0 : _ga.content) == null ? void 0 : _ha.slice(0, m)) || "";
          tokens[i2 + 1].content = "";
        }
      }
      replacerTokens.push(createLinkToken(text$1, href, loading));
      pushEmClose(replacerTokens, type);
      if (((_ia = tokens[i2 + 1]) == null ? void 0 : _ia.type) === "text") {
        const afterText = (_ja = tokens[i2 + 1].content) == null ? void 0 : _ja.replace(/^\)\**/, "");
        if (afterText) replacerTokens.push(textToken(afterText));
        tokens.splice(i2 - 4, 8, ...replacerTokens);
      } else if (((_ka = tokens[i2 + 1]) == null ? void 0 : _ka.type) === "link_open") tokens.splice(i2 - 4, 10, ...replacerTokens);
      else tokens.splice(i2 - 4, 7, ...replacerTokens);
      i2 -= replacerTokens.length + 1;
      continue;
    } else if (((_la = curToken.content) == null ? void 0 : _la.startsWith("](")) && tokens[i2 - 1].type === "strong_close" && ((_ma = tokens[i2 - 4]) == null ? void 0 : _ma.type) === "text" && ((_oa = (_na = tokens[i2 - 4]) == null ? void 0 : _na.content) == null ? void 0 : _oa.includes("**["))) {
      const replacerTokens = [];
      const beforeText = tokens[i2 - 4].content.split("**[")[0];
      if (beforeText) replacerTokens.push(textToken(beforeText));
      pushEmOpen(replacerTokens, 2);
      const text$1 = tokens[i2 - 2].content || "";
      let href = curToken.content.slice(2);
      let loading = true;
      if (((_pa = tokens[i2 + 1]) == null ? void 0 : _pa.type) === "text") {
        const m = (((_qa = tokens[i2 + 1]) == null ? void 0 : _qa.content) ?? "").indexOf(")");
        loading = m === -1;
        if (m === -1) {
          href += ((_sa = (_ra = tokens[i2 + 1]) == null ? void 0 : _ra.content) == null ? void 0 : _sa.slice(0, m)) || "";
          tokens[i2 + 1].content = "";
        }
      }
      replacerTokens.push(createLinkToken(text$1, href, loading));
      pushEmClose(replacerTokens, 2);
      if (((_ta = tokens[i2 + 1]) == null ? void 0 : _ta.type) === "text") {
        const afterText = (_ua = tokens[i2 + 1].content) == null ? void 0 : _ua.replace(/^\)\**/, "");
        if (afterText) replacerTokens.push(textToken(afterText));
        tokens.splice(i2 - 4, 8, ...replacerTokens);
      } else if (((_va = tokens[i2 + 1]) == null ? void 0 : _va.type) === "link_open") tokens.splice(i2 - 4, 10, ...replacerTokens);
      else tokens.splice(i2 - 4, 7, ...replacerTokens);
      i2 -= replacerTokens.length + 1;
      continue;
    } else if (curToken.type === "strong_close" && ((_wa = tokens[i2 + 1]) == null ? void 0 : _wa.type) === "text" && ((_xa = tokens[i2 + 1].content) == null ? void 0 : _xa.includes("](")) && tokens[i2 - 1].type === "text" && /\[.*$/.test(tokens[i2 - 1].content || "")) {
      const replacerTokens = [];
      const [beforeText, afterText] = ((_ya = tokens[i2 - 1].content) == null ? void 0 : _ya.split("[")) || ["", ""];
      if (beforeText) replacerTokens.push(textToken(beforeText));
      pushEmOpen(replacerTokens, 2);
      let [text$1, href] = tokens[i2 + 1].content.split("](");
      text$1 = afterText + text$1;
      let deleteCount = 4;
      if (((_za = tokens[i2 + 2]) == null ? void 0 : _za.type) === "link_open") {
        const _href = (_Ba = (_Aa = tokens[i2 + 2].attrs) == null ? void 0 : _Aa.find((a2) => a2[0] === "href")) == null ? void 0 : _Ba[1];
        if (((_Ca = tokens[i2 + 5]) == null ? void 0 : _Ca.type) === "text" && tokens[i2 + 5].content === ".") {
          href = (_href || href) + tokens[i2 + 5].content;
          tokens[i2 + 5].content = "";
        } else href = _href || href;
        deleteCount += 3;
      }
      let loading = true;
      if (curToken.nesting === -1) text$1 = text$1.replace(/\*+$/, "");
      if (((_Da = tokens[i2 + 2]) == null ? void 0 : _Da.type) === "text") {
        const m = (((_Ea = tokens[i2 + 2]) == null ? void 0 : _Ea.content) ?? "").indexOf(")");
        loading = m === -1;
        if (m === -1) {
          href += ((_Ga = (_Fa = tokens[i2 + 2]) == null ? void 0 : _Fa.content) == null ? void 0 : _Ga.slice(0, m)) || "";
          tokens[i2 + 2].content = "";
        }
      }
      replacerTokens.push(createLinkToken(text$1, href, loading));
      pushEmClose(replacerTokens, 2);
      tokens.splice(i2 - 2, deleteCount, ...replacerTokens);
    }
    if (curToken.type === "text" && /\*+\[[^\]]*$/.test(curToken.content || "") && ((_Ha = tokens[i2 + 1]) == null ? void 0 : _Ha.type) === "strong_open" && ((_Ia = tokens[i2 + 2]) == null ? void 0 : _Ia.type) === "text" && tokens[i2 + 2].content === "](" && ((_Ja = tokens[i2 + 3]) == null ? void 0 : _Ja.type) === "link_open" && ((_Ka = tokens[i2 + 5]) == null ? void 0 : _Ka.type) === "link_close" && ((_La = tokens[i2 + 6]) == null ? void 0 : _La.type) === "text" && tokens[i2 + 6].content === ")" && ((_Ma = tokens[i2 + 7]) == null ? void 0 : _Ma.type) === "strong_close") {
      const startMatch = (curToken.content || "").match(/^(\*+)\[(.*)$/);
      if (startMatch) {
        const finalLabel = (startMatch[2] || "") + startMatch[1];
        let href = ((_Pa = (_Oa = (_Na = tokens[i2 + 3]) == null ? void 0 : _Na.attrs) == null ? void 0 : _Oa.find((a2) => a2[0] === "href")) == null ? void 0 : _Pa[1]) || "";
        if (!href && ((_Qa = tokens[i2 + 4]) == null ? void 0 : _Qa.type) === "text") href = tokens[i2 + 4].content || "";
        const out = [];
        pushEmOpen(out, 2);
        out.push(createLinkToken(finalLabel, href, false));
        pushEmClose(out, 2);
        tokens.splice(i2, 9, ...out);
        i2 -= out.length - 1;
        continue;
      }
    }
  }
  return tokens;
}
function applyFixListItem(md) {
  md.core.ruler.after("inline", "fix_list_item_tokens", (state) => {
    const toks = state.tokens ?? [];
    for (let i2 = 0; i2 < toks.length; i2++) {
      const t2 = toks[i2];
      if (t2 && t2.type === "inline" && Array.isArray(t2.children)) try {
        t2.children = fixListItem(t2.children);
      } catch (e2) {
        console.error("[applyFixListItem] failed to fix inline children", e2);
      }
    }
  });
}
function fixListItem(tokens) {
  var _a2;
  const last = tokens[tokens.length - 1];
  const lastContent = String((last == null ? void 0 : last.content) ?? "");
  if ((last == null ? void 0 : last.type) === "text" && /^\s*\d+\.\s*$/.test(lastContent) && ((_a2 = tokens[tokens.length - 2]) == null ? void 0 : _a2.tag) === "br") tokens.splice(tokens.length - 1, 1);
  return tokens;
}
function applyFixStrongTokens(md) {
  md.core.ruler.after("inline", "fix_strong_tokens", (state) => {
    const toks = state.tokens ?? [];
    for (let i2 = 0; i2 < toks.length; i2++) {
      const t2 = toks[i2];
      if (t2 && t2.type === "inline" && Array.isArray(t2.children)) try {
        t2.children = fixStrongTokens(t2.children);
      } catch (e2) {
        console.error("[applyFixStrongTokens] failed to fix inline children", e2);
      }
    }
  });
}
function fixStrongTokens(tokens) {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i;
  let strongIndex = 0;
  const cleansStrong = /* @__PURE__ */ new Set();
  const cleansEm = /* @__PURE__ */ new Set();
  let emIndex = 0;
  for (let i$1 = 0; i$1 < tokens.length; i$1++) {
    const t2 = tokens[i$1];
    const type = t2.type;
    if (type === "strong_open") {
      strongIndex++;
      const markup = String(t2.markup ?? "");
      let j = i$1 - 1;
      while (j >= 0 && tokens[j].type === "text" && tokens[j].content === "") j--;
      const preToken = tokens[j];
      let k = i$1 + 1;
      while (k < tokens.length && tokens[k].type === "text" && tokens[k].content === "") k++;
      const postToken = tokens[k];
      if (markup === "__" && (((_a2 = preToken == null ? void 0 : preToken.content) == null ? void 0 : _a2.endsWith("_")) || ((_b = postToken == null ? void 0 : postToken.content) == null ? void 0 : _b.startsWith("_")) || ((_c = postToken == null ? void 0 : postToken.markup) == null ? void 0 : _c.includes("_")))) {
        t2.type = "text";
        t2.tag = "";
        t2.content = markup;
        t2.raw = markup;
        t2.markup = "";
        t2.attrs = null;
        t2.map = null;
        t2.info = "";
        t2.meta = null;
        cleansStrong.add(strongIndex);
      }
    } else if (type === "strong_close") {
      if (cleansStrong.has(strongIndex) && t2.markup === "__") {
        t2.type = "text";
        t2.content = t2.markup;
        t2.raw = String(t2.markup ?? "");
        t2.tag = "";
        t2.markup = "";
        t2.attrs = null;
        t2.map = null;
        t2.info = "";
        t2.meta = null;
      }
      strongIndex--;
      if (strongIndex < 0) strongIndex = 0;
    } else if (type === "em_open") {
      emIndex++;
      const markup = String(t2.markup ?? "");
      let j = i$1 - 1;
      while (j >= 0 && tokens[j].type === "text" && tokens[j].content === "") j--;
      const preToken = tokens[j];
      let k = i$1 + 1;
      while (k < tokens.length && tokens[k].type === "text" && tokens[k].content === "") k++;
      const postToken = tokens[k];
      if (markup === "_" && (((_d = preToken == null ? void 0 : preToken.content) == null ? void 0 : _d.endsWith("_")) || ((_e2 = postToken == null ? void 0 : postToken.content) == null ? void 0 : _e2.startsWith("_")) || ((_f = postToken == null ? void 0 : postToken.markup) == null ? void 0 : _f.includes("_")))) {
        t2.type = "text";
        t2.tag = "";
        t2.content = markup;
        t2.raw = markup;
        t2.markup = "";
        t2.attrs = null;
        t2.map = null;
        t2.info = "";
        t2.meta = null;
        cleansEm.add(emIndex);
      }
    } else if (type === "em_close") {
      if (cleansEm.has(emIndex) && t2.markup === "_") {
        t2.type = "text";
        t2.content = t2.markup;
        t2.raw = String(t2.markup ?? "");
        t2.tag = "";
        t2.markup = "";
        t2.attrs = null;
        t2.map = null;
        t2.info = "";
        t2.meta = null;
      }
      emIndex--;
      if (emIndex < 0) emIndex = 0;
    }
  }
  if (tokens.length < 5) return tokens;
  const i2 = tokens.length - 4;
  const token = tokens[i2];
  const fixedTokens = [...tokens];
  const nextToken = tokens[i2 + 1];
  const tokenContent = String(token.content ?? "");
  if (token.type === "link_open" && ((_g = tokens[i2 - 1]) == null ? void 0 : _g.type) === "em_open" && ((_h = tokens[i2 - 2]) == null ? void 0 : _h.type) === "text" && ((_i = tokens[i2 - 2].content) == null ? void 0 : _i.endsWith("*"))) {
    const textContent = String(tokens[i2 - 2].content ?? "").slice(0, -1);
    const replaceTokens = [
      {
        type: "strong_open",
        tag: "strong",
        attrs: null,
        map: null,
        children: null,
        content: "",
        markup: "**",
        info: "",
        meta: null,
        raw: ""
      },
      tokens[i2],
      tokens[i2 + 1],
      tokens[i2 + 2],
      {
        type: "strong_close",
        tag: "strong",
        attrs: null,
        map: null,
        children: null,
        content: "",
        markup: "**",
        info: "",
        meta: null,
        raw: ""
      }
    ];
    if (textContent) replaceTokens.unshift({
      type: "text",
      content: textContent,
      raw: textContent
    });
    fixedTokens.splice(i2 - 2, 6, ...replaceTokens);
  } else if (token.type === "text" && tokenContent.endsWith("*") && nextToken.type === "em_open") {
    const _nextToken = tokens[i2 + 2];
    const count = (_nextToken == null ? void 0 : _nextToken.type) === "text" ? 4 : 3;
    const insert = [
      {
        type: "strong_open",
        tag: "strong",
        attrs: null,
        map: null,
        children: null,
        content: "",
        markup: "**",
        info: "",
        meta: null,
        raw: ""
      },
      {
        type: "text",
        content: (_nextToken == null ? void 0 : _nextToken.type) === "text" ? String(_nextToken.content ?? "") : "",
        raw: (_nextToken == null ? void 0 : _nextToken.type) === "text" ? String(_nextToken.content ?? "") : ""
      },
      {
        type: "strong_close",
        tag: "strong",
        attrs: null,
        map: null,
        children: null,
        content: "",
        markup: "**",
        info: "",
        meta: null,
        raw: ""
      }
    ];
    const beforeText = tokenContent.slice(0, -1);
    if (beforeText) insert.unshift({
      type: "text",
      content: beforeText,
      raw: beforeText
    });
    fixedTokens.splice(i2, count, ...insert);
    return fixedTokens;
  }
  return fixedTokens;
}
function applyFixTableTokens(md) {
  md.core.ruler.after("block", "fix_table_tokens", (state) => {
    const s2 = state;
    try {
      const fixed = fixTableTokens(s2.tokens ?? []);
      if (Array.isArray(fixed)) s2.tokens = fixed;
    } catch (e2) {
      console.error("[applyFixTableTokens] failed to fix table tokens", e2);
    }
  });
}
function createStart() {
  return [
    {
      type: "table_open",
      tag: "table",
      attrs: null,
      map: null,
      children: null,
      content: "",
      markup: "",
      info: "",
      level: 0,
      loading: true,
      meta: null
    },
    {
      type: "thead_open",
      tag: "thead",
      attrs: null,
      block: true,
      level: 1,
      children: null
    },
    {
      type: "tr_open",
      tag: "tr",
      attrs: null,
      block: true,
      level: 2,
      children: null
    }
  ];
}
function createEnd() {
  return [
    {
      type: "tr_close",
      tag: "tr",
      attrs: null,
      block: true,
      level: 2,
      children: null
    },
    {
      type: "thead_close",
      tag: "thead",
      attrs: null,
      block: true,
      level: 1,
      children: null
    },
    {
      type: "table_close",
      tag: "table",
      attrs: null,
      map: null,
      children: null,
      content: "",
      markup: "",
      info: "",
      level: 0,
      meta: null
    }
  ];
}
function createTh(text$1) {
  return [
    {
      type: "th_open",
      tag: "th",
      attrs: null,
      block: true,
      level: 3,
      children: null
    },
    {
      type: "inline",
      tag: "",
      children: [{
        tag: "",
        type: "text",
        block: false,
        content: text$1,
        children: null
      }],
      content: text$1,
      level: 4,
      attrs: null,
      block: true
    },
    {
      type: "th_close",
      tag: "th",
      attrs: null,
      block: true,
      level: 3,
      children: null
    }
  ];
}
function fixTableTokens(tokens) {
  var _a2, _b;
  const fixedTokens = [...tokens];
  if (tokens.length < 3) return fixedTokens;
  const i2 = tokens.length - 2;
  const token = tokens[i2];
  if (token.type === "inline") {
    const tcontent = String(token.content ?? "");
    const childContent = String(((_b = (_a2 = token.children) == null ? void 0 : _a2[0]) == null ? void 0 : _b.content) ?? "");
    if (!tcontent.includes("\n") && /^\|(?:[^|\n]+\|?)+/.test(tcontent)) {
      const body = childContent.slice(1).split("|").map((i$1) => i$1.trim()).filter(Boolean).flatMap((i$1) => createTh(i$1));
      const insert = [
        ...createStart(),
        ...body,
        ...createEnd()
      ];
      fixedTokens.splice(i2 - 1, 3, ...insert);
    } else if (/^\|(?:[^|\n]+\|)+\n\|:?-/.test(tcontent)) {
      const body = childContent.slice(1, -1).split("|").map((i$1) => i$1.trim()).flatMap((i$1) => createTh(i$1));
      const insert = [
        ...createStart(),
        ...body,
        ...createEnd()
      ];
      fixedTokens.splice(i2 - 1, 3, ...insert);
    } else if (/^\|(?:[^|\n:]+\|)+\n\|:?$/.test(tcontent)) {
      token.content = tcontent.slice(0, -2);
      token.children.splice(2, 1);
    }
  }
  return fixedTokens;
}
function findMatchingClose(src, startIdx, open, close) {
  const len = src.length;
  if (open === "$$" && close === "$$") {
    let i$1 = startIdx;
    while (i$1 < len - 1) {
      if (src[i$1] === "$" && src[i$1 + 1] === "$") {
        let k = i$1 - 1;
        let backslashes = 0;
        while (k >= 0 && src[k] === "\\") {
          backslashes++;
          k--;
        }
        if (backslashes % 2 === 0) return i$1;
      }
      i$1++;
    }
    return -1;
  }
  const openChar = open[open.length - 1];
  const closeSeq = close;
  let depth = 0;
  let i2 = startIdx;
  while (i2 < len) {
    if (src.slice(i2, i2 + closeSeq.length) === closeSeq) {
      let k = i2 - 1;
      let backslashes = 0;
      while (k >= 0 && src[k] === "\\") {
        backslashes++;
        k--;
      }
      if (backslashes % 2 === 0) {
        if (depth === 0) return i2;
        depth--;
        i2 += closeSeq.length;
        continue;
      }
    }
    const ch = src[i2];
    if (ch === "\\") {
      i2 += 2;
      continue;
    }
    if (ch === openChar) depth++;
    else if (ch === closeSeq[closeSeq.length - 1]) {
      if (depth > 0) depth--;
    }
    i2++;
  }
  return -1;
}
var findMatchingClose_default = findMatchingClose;
const TEX_BRACE_COMMANDS = [
  "boldsymbol",
  "mathbb",
  "mathcal",
  "mathfrak",
  "mathrm",
  "mathit",
  "mathsf",
  "vec",
  "hat",
  "bar",
  "tilde",
  "overline",
  "underline",
  "mathscr",
  "mathnormal",
  "operatorname",
  "mathbf*"
];
const ESCAPED_TEX_BRACE_COMMANDS = TEX_BRACE_COMMANDS.map((c) => c.replace(/[.*+?^${}()|[\\]"\]/g, "\\$&")).join("|");
const TEX_CMD_RE = /\\[a-z]+/i;
const PREFIX_CLASS = "(?:\\\\|\\u0008)";
const TEX_CMD_WITH_BRACES_RE = new RegExp(`${PREFIX_CLASS}(?:${ESCAPED_TEX_BRACE_COMMANDS})\\s*\\{[^}]+\\}`, "i");
const TEX_BRACE_CMD_START_RE = new RegExp(`(?:${PREFIX_CLASS})?(?:${ESCAPED_TEX_BRACE_COMMANDS})s*{`, "i");
const TEX_SPECIFIC_RE = /\\(?:text|frac|left|right|times)/;
const OPS_RE = /* @__PURE__ */ new RegExp("(?:^|[^+])\\+(?!\\+)|[=\\-*/^<>]|\\\\times|\\\\pm|\\\\cdot|\\\\le|\\\\ge|\\\\neq");
const HYPHENATED_MULTIWORD_RE = /\b[A-Z]{2,}-[A-Z]{2,}\b/i;
const FUNC_CALL_RE = /[A-Z]+\s*\([^)]+\)/i;
const WORDS_RE = /\b(?:sin|cos|tan|log|ln|exp|sqrt|frac|sum|lim|int|prod)\b/;
const DATE_TIME_RE = /\b\d{4}\/\d{1,2}\/\d{1,2}(?:[ T]\d{1,2}:\d{2}(?::\d{2})?)?\b/;
function isMathLike(s2) {
  if (!s2) return false;
  const norm = s2.replace(/[\u0008\v\f]/g, (ch) => {
    switch (ch) {
      case "\b":
        return "\\b";
      case "\v":
        return "\\v";
      case "\f":
        return "\\f";
      default:
        return ch;
    }
  });
  const stripped = norm.trim();
  if (DATE_TIME_RE.test(stripped)) return false;
  if (stripped.includes("**")) return false;
  if (stripped.length > 2e3) return true;
  const texCmd = TEX_CMD_RE.test(norm);
  const texCmdWithBraces = TEX_CMD_WITH_BRACES_RE.test(norm);
  const texBraceStart = TEX_BRACE_CMD_START_RE.test(norm);
  const texSpecific = TEX_SPECIFIC_RE.test(norm);
  const superSub = /(?:^|[^\w\\])(?:[A-Z]|\\[A-Z]+)_(?:\{[^}]+\}|[A-Z0-9\\])/i.test(norm) || /(?:^|[^\w\\])(?:[A-Z]|\\[A-Z]+)\^(?:\{[^}]+\}|[A-Z0-9\\])/i.test(norm);
  const ops = OPS_RE.test(norm) && !HYPHENATED_MULTIWORD_RE.test(norm);
  const funcCall = FUNC_CALL_RE.test(norm);
  const words = WORDS_RE.test(norm);
  const pureWord = /^\([a-z]\)$/i.test(stripped) || /^(?:[a-z]|pi)$/i.test(stripped);
  const chemicalLike = /^(?:[A-Z][a-z]?(?:_\{?\d+\}?|\^\{?\d+\}?)?)+$/.test(stripped);
  return texCmd || texCmdWithBraces || texBraceStart || texSpecific || superSub || ops || funcCall || words || pureWord || chemicalLike;
}
const KATEX_COMMANDS = [
  "ldots",
  "cdots",
  "quad",
  "in",
  "displaystyle",
  "int_",
  "lim",
  "lim_",
  "ce",
  "pu",
  "end",
  "infty",
  "perp",
  "mid",
  "operatorname",
  "to",
  "rightarrow",
  "leftarrow",
  "math",
  "mathrm",
  "mathit",
  "mathbb",
  "mathcal",
  "mathfrak",
  "implies",
  "alpha",
  "beta",
  "gamma",
  "delta",
  "epsilon",
  "lambda",
  "sum",
  "sum_",
  "prod",
  "sqrt",
  "fbox",
  "boxed",
  "color",
  "rule",
  "edef",
  "fcolorbox",
  "hline",
  "hdashline",
  "cdot",
  "times",
  "pm",
  "le",
  "ge",
  "neq",
  "sin",
  "cos",
  "tan",
  "log",
  "ln",
  "exp",
  "frac",
  "text",
  "left",
  "right"
];
const ANY_COMMANDS = [
  "cdot",
  "mathbf{",
  "partial",
  "mu_{"
];
const ESCAPED_KATEX_COMMANDS = KATEX_COMMANDS.slice().sort((a2, b) => b.length - a2.length).map((c) => c.replace(/[.*+?^${}()|[\\]\\\]/g, "\\$&")).join("|");
const CONTROL_CHARS_CLASS = "[	\r\b\f\v]";
const ESCAPED_MKATWX_COMMANDS = new RegExp(`([^\\\\])(${ANY_COMMANDS.map((c) => c).join("|")})+`, "g");
const SPAN_CURLY_RE = /span\{([^}]+)\}/;
const OPERATORNAME_SPAN_RE = /\\operatorname\{span\}\{((?:[^{}]|\{[^}]*\})+)\}/;
const SINGLE_BACKSLASH_NEWLINE_RE = /(^|[^\\])\\\r?\n/g;
const ENDING_SINGLE_BACKSLASH_RE = /(^|[^\\])\\$/g;
const DEFAULT_MATH_RE = new RegExp(`(${CONTROL_CHARS_CLASS})|(${ESCAPED_KATEX_COMMANDS})\\b`, "g");
const MATH_RE_CACHE = /* @__PURE__ */ new Map();
const BRACE_CMD_RE_CACHE = /* @__PURE__ */ new Map();
function getMathRegex(commands) {
  if (!commands) return DEFAULT_MATH_RE;
  const arr = [...commands];
  arr.sort((a2, b) => b.length - a2.length);
  const key = arr.join("");
  const cached = MATH_RE_CACHE.get(key);
  if (cached) return cached;
  const commandPattern = `(?:${arr.map((c) => c.replace(/[.*+?^${}()|[\\]\\"\]/g, "\\$&")).join("|")})`;
  const re2 = new RegExp(`(${CONTROL_CHARS_CLASS})|(${commandPattern})\\b`, "g");
  MATH_RE_CACHE.set(key, re2);
  return re2;
}
function getBraceCmdRegex(useDefault, commands) {
  const arr = useDefault ? [] : [...commands ?? []];
  if (!useDefault) arr.sort((a2, b) => b.length - a2.length);
  const key = useDefault ? "__default__" : arr.join("");
  const cached = BRACE_CMD_RE_CACHE.get(key);
  if (cached) return cached;
  const braceEscaped = useDefault ? [ESCAPED_TEX_BRACE_COMMANDS, ESCAPED_KATEX_COMMANDS].filter(Boolean).join("|") : [arr.map((c) => c.replace(/[.*+?^${}()|[\\]\\\]/g, "\\$&")).join("|"), ESCAPED_TEX_BRACE_COMMANDS].filter(Boolean).join("|");
  const re2 = new RegExp(`(^|[^\\\\\\w])(${braceEscaped})\\s*\\{`, "g");
  BRACE_CMD_RE_CACHE.set(key, re2);
  return re2;
}
const CONTROL_MAP = {
  "	": "t",
  "\r": "r",
  "\b": "b",
  "\f": "f",
  "\v": "v"
};
function countUnescapedStrong(s2) {
  const re2 = /(^|[^\\])(__|\*\*)/g;
  let c = 0;
  while (re2.exec(s2) !== null) c++;
  return c;
}
function findLastUnescapedStrongMarker(s2) {
  var _a2;
  const re2 = /(^|[^\\])(__|\*\*)/g;
  let m;
  let last = null;
  while ((m = re2.exec(s2)) !== null) last = {
    marker: m[2],
    index: m.index + (((_a2 = m[1]) == null ? void 0 : _a2.length) ?? 0)
  };
  return last;
}
function normalizeStandaloneBackslashT(s2, opts) {
  const commands = (opts == null ? void 0 : opts.commands) ?? KATEX_COMMANDS;
  const escapeExclamation = (opts == null ? void 0 : opts.escapeExclamation) ?? true;
  const useDefault = (opts == null ? void 0 : opts.commands) == null;
  const re2 = getMathRegex(useDefault ? void 0 : commands);
  let out = s2.replace(re2, (m, control, cmd, offset, str) => {
    if (control !== void 0 && CONTROL_MAP[control] !== void 0) return `\\${CONTROL_MAP[control]}`;
    if (cmd && commands.includes(cmd)) {
      const prev = str && typeof offset === "number" ? str[offset - 1] : void 0;
      if (prev === "\\" || prev && /\w/.test(prev)) return m;
      return `\\${cmd}`;
    }
    return m;
  });
  if (escapeExclamation) out = out.replace(/(^|[^\\])!/g, "$1\\!");
  let result = out;
  const braceCmdRe = getBraceCmdRegex(useDefault, useDefault ? void 0 : commands);
  result = result.replace(braceCmdRe, (_m, p1, p2) => `${p1}\\${p2}{`);
  result = result.replace(SPAN_CURLY_RE, "span\\{$1\\}").replace(OPERATORNAME_SPAN_RE, "\\operatorname{span}\\{$1\\}");
  result = result.replace(SINGLE_BACKSLASH_NEWLINE_RE, "$1\\\\\n");
  result = result.replace(ENDING_SINGLE_BACKSLASH_RE, "$1\\\\");
  result = result.replace(ESCAPED_MKATWX_COMMANDS, "$1\\$2");
  return result;
}
function isPlainBracketMathLike(content) {
  const stripped = content.trim();
  if (!isMathLike(stripped)) return false;
  if (/"[^"\n]{1,80}"\s*:\s*/.test(stripped)) return false;
  if (!(/\\[a-z]+/i.test(stripped) || /[=+*/^<>]|\\times|\\pm|\\cdot|\\le|\\ge|\\neq/.test(stripped) || /[_^]/.test(stripped)) && /\s-\s/.test(stripped)) return false;
  return true;
}
function applyMath(md, mathOpts) {
  const mathInline = (state, silent) => {
    var _a2, _b;
    const s2 = state;
    const strict = !!(mathOpts == null ? void 0 : mathOpts.strictDelimiters);
    const allowLoading = !((_a2 = s2 == null ? void 0 : s2.env) == null ? void 0 : _a2.__markstreamFinal);
    if (/^\*[^*]+/.test(s2.src)) return false;
    const delimiters = [
      ["$$", "$$"],
      ["$", "$"],
      ["\\(", "\\)"]
    ];
    let searchPos = 0;
    let preMathPos = 0;
    const initialPos = s2.pos;
    for (const [open, close] of delimiters) {
      const src = s2.src;
      let foundAny = false;
      if (open === "$$" && searchPos !== initialPos) searchPos = initialPos;
      let lastIndex = -1;
      let lastSearchPos = -1;
      let stallCount = 0;
      const pushText = (text$1) => {
        if (text$1 === "undefined" || text$1 == null) text$1 = "";
        if (text$1 === "\\") {
          s2.pos = s2.pos + text$1.length;
          searchPos = s2.pos;
          return;
        }
        if (text$1 === "\\)" || text$1 === "\\(") {
          const t$1 = s2.push("text_special", "", 0);
          t$1.content = text$1 === "\\)" ? ")" : "(";
          t$1.markup = text$1;
          s2.pos = s2.pos + text$1.length;
          searchPos = s2.pos;
          return;
        }
        if (!text$1) return;
        if (open === "$$" && text$1.includes("$")) {
          let localPos = 0;
          while (localPos < text$1.length) {
            const dollarIndex = text$1.indexOf("$", localPos);
            if (dollarIndex === -1) {
              const rest = text$1.slice(localPos);
              if (rest) {
                const t$2 = s2.push("text", "", 0);
                t$2.content = rest;
                s2.pos = s2.pos + rest.length;
                searchPos = s2.pos;
              }
              break;
            }
            if (dollarIndex > 0 && text$1[dollarIndex - 1] === "$" || dollarIndex + 1 < text$1.length && text$1[dollarIndex + 1] === "$") {
              const beforeSkip = text$1.slice(localPos, dollarIndex + 1);
              if (beforeSkip) {
                const t$2 = s2.push("text", "", 0);
                t$2.content = beforeSkip;
                s2.pos = s2.pos + beforeSkip.length;
                searchPos = s2.pos;
              }
              localPos = dollarIndex + 1;
              continue;
            }
            const before = text$1.slice(localPos, dollarIndex);
            if (before) {
              const t$2 = s2.push("text", "", 0);
              t$2.content = before;
              s2.pos = s2.pos + before.length;
              searchPos = s2.pos;
            }
            const closingDollarIndex = text$1.indexOf("$", dollarIndex + 1);
            if (closingDollarIndex === -1) {
              const rest = text$1.slice(dollarIndex);
              const t$2 = s2.push("text", "", 0);
              t$2.content = rest;
              s2.pos = s2.pos + rest.length;
              searchPos = s2.pos;
              break;
            }
            const content = text$1.slice(dollarIndex + 1, closingDollarIndex);
            const hasBacktick = content.includes("`");
            const isEmpty = !content || !content.trim();
            if (!hasBacktick && !isEmpty) {
              const token = s2.push("math_inline", "math", 0);
              token.content = normalizeStandaloneBackslashT(content, mathOpts);
              token.markup = "$";
              token.raw = `$${content}$`;
              token.loading = false;
              s2.pos = s2.pos + (closingDollarIndex - dollarIndex + 1);
              searchPos = s2.pos;
              localPos = closingDollarIndex + 1;
              continue;
            }
            const t$1 = s2.push("text", "", 0);
            t$1.content = "$";
            s2.pos = s2.pos + 1;
            searchPos = s2.pos;
            localPos = dollarIndex + 1;
          }
          return;
        }
        const imageStart = text$1.indexOf("![");
        if (imageStart !== -1) {
          if (imageStart > 0) {
            const beforeImage = text$1.slice(0, imageStart);
            const t$2 = s2.push("text", "", 0);
            t$2.content = beforeImage;
            s2.pos = s2.pos + beforeImage.length;
            searchPos = s2.pos;
          }
          const imageMatch = text$1.slice(imageStart).match(/^!\[([^\]]*)\]\(([^)]+)\)/);
          if (imageMatch) {
            const [, alt, srcAndTitle] = imageMatch;
            const srcMatch = srcAndTitle.match(/^(\S+)(?:\s+"([^"]+)")?\s*$/);
            const src$1 = srcMatch ? srcMatch[1] : srcAndTitle;
            const title = srcMatch && srcMatch[2] ? srcMatch[2] : null;
            const token = s2.push("image", "img", 0);
            token.attrs = [["src", src$1], ["alt", alt]];
            if (title) token.attrs.push(["title", title]);
            token.content = alt;
            token.children = [{
              type: "text",
              content: alt,
              tag: ""
            }];
            s2.pos = s2.pos + imageMatch[0].length;
            searchPos = s2.pos;
            const remainingText = text$1.slice(imageStart + imageMatch[0].length);
            if (remainingText) pushText(remainingText);
            return;
          }
          const t$1 = s2.push("text", "", 0);
          t$1.content = text$1;
          s2.pos = s2.pos + text$1.length;
          searchPos = s2.pos;
          return;
        }
        const t2 = s2.push("text", "", 0);
        t2.content = text$1;
        s2.pos = s2.pos + text$1.length;
        searchPos = s2.pos;
      };
      while (true) {
        if (searchPos >= src.length) break;
        const index = src.indexOf(open, searchPos);
        if (index === -1) break;
        if (index === lastIndex && searchPos === lastSearchPos) {
          stallCount++;
          if (stallCount > 2) {
            searchPos = index + Math.max(1, open.length);
            continue;
          }
        } else {
          stallCount = 0;
          lastIndex = index;
          lastSearchPos = searchPos;
        }
        if (open === "(" && index > 0) {
          let i2 = index - 1;
          while (i2 >= 0 && src[i2] === " ") i2--;
          if (i2 >= 0 && src[i2] === "]") {
            searchPos = index + open.length;
            continue;
          }
        }
        if (open === "$" && index > 0 && src[index - 1] === "$") {
          searchPos = index + 1;
          continue;
        }
        if (open === "$" && index < src.length - 1 && src[index + 1] === "$") {
          searchPos = index + 2;
          continue;
        }
        const endIdx = findMatchingClose_default(src, index + open.length, open, close);
        if (endIdx === -1) {
          const content$1 = src.slice(index + open.length);
          if (content$1.includes(open)) {
            searchPos = src.indexOf(open, index + open.length);
            continue;
          }
          if (endIdx === -1) {
            if (allowLoading && !strict && isMathLike(content$1) && !content$1.includes("`")) {
              searchPos = index + open.length;
              foundAny = true;
              if (!silent) {
                s2.pending = "";
                const toPushBefore = preMathPos ? src.slice(preMathPos, searchPos) : src.slice(0, searchPos);
                const isStrongPrefix = countUnescapedStrong(toPushBefore) % 2 === 1;
                if (preMathPos) pushText(src.slice(preMathPos, searchPos));
                else {
                  let text$1 = src.slice(0, searchPos);
                  if (text$1.endsWith(open)) text$1 = text$1.slice(0, text$1.length - open.length);
                  pushText(text$1);
                }
                if (isStrongPrefix) {
                  const strongMarker = ((_b = findLastUnescapedStrongMarker(toPushBefore)) == null ? void 0 : _b.marker) ?? "**";
                  const strongToken = s2.push("strong_open", "", 0);
                  strongToken.markup = strongMarker;
                  const token = s2.push("math_inline", "math", 0);
                  token.content = normalizeStandaloneBackslashT(content$1, mathOpts);
                  token.markup = open === "$$" ? "$$" : open === "\\(" ? "\\(\\)" : open === "$" ? "$" : "()";
                  token.raw = `${open}${content$1}${close}`;
                  token.loading = true;
                  strongToken.content = content$1;
                  s2.push("strong_close", "", 0);
                } else {
                  const token = s2.push("math_inline", "math", 0);
                  token.content = normalizeStandaloneBackslashT(content$1, mathOpts);
                  token.markup = open === "$$" ? "$$" : open === "\\(" ? "\\(\\)" : open === "$" ? "$" : "()";
                  token.raw = `${open}${content$1}${close}`;
                  token.loading = true;
                }
                s2.pos = src.length;
              }
              searchPos = src.length;
              preMathPos = searchPos;
            }
            break;
          }
        }
        const content = src.slice(index + open.length, endIdx);
        const hasBacktick = content.includes("`");
        const isEmpty = !content || !content.trim();
        if (strict ? hasBacktick || isEmpty : hasBacktick || isEmpty || !(open === "$") && !isMathLike(content)) {
          searchPos = endIdx + close.length;
          const text$1 = src.slice(s2.pos, searchPos);
          if (!s2.pending) pushText(text$1);
          continue;
        }
        foundAny = true;
        if (!silent) {
          const before = src.slice(s2.pos - s2.pending.length, index);
          let toPushBefore = src.slice(0, searchPos) ? src.slice(preMathPos, index) : before;
          const isStrongPrefix = countUnescapedStrong(toPushBefore) % 2 === 1;
          if (index !== s2.pos && isStrongPrefix) toPushBefore = s2.pending + src.slice(s2.pos, index);
          const strongMarkerInfo = isStrongPrefix ? findLastUnescapedStrongMarker(toPushBefore) : null;
          const strongMarker = (strongMarkerInfo == null ? void 0 : strongMarkerInfo.marker) ?? "**";
          if (s2.pending !== toPushBefore) {
            s2.pending = "";
            if (isStrongPrefix) if (strongMarkerInfo) {
              const after = toPushBefore.slice(strongMarkerInfo.index + strongMarker.length);
              pushText(toPushBefore.slice(0, strongMarkerInfo.index));
              const strongToken = s2.push("strong_open", "", 0);
              strongToken.markup = strongMarker;
              const textToken$1 = s2.push("text", "", 0);
              textToken$1.content = after;
              s2.push("strong_close", "", 0);
            } else pushText(toPushBefore);
            else pushText(toPushBefore);
          }
          if (isStrongPrefix) {
            const strongToken = s2.push("strong_open", "", 0);
            strongToken.markup = strongMarker;
            const token = s2.push("math_inline", "math", 0);
            token.content = normalizeStandaloneBackslashT(content, mathOpts);
            token.markup = open === "$$" ? "$$" : open === "\\(" ? "\\(\\)" : open === "$" ? "$" : "()";
            token.raw = `${open}${content}${close}`;
            token.loading = false;
            const isBeforeClose = src.slice(endIdx + close.length).startsWith(strongMarker);
            if (isBeforeClose) s2.push("strong_close", "", 0);
            s2.pos = endIdx + close.length;
            searchPos = s2.pos;
            preMathPos = searchPos;
            if (!isBeforeClose) s2.push("strong_close", "", 0);
            continue;
          } else {
            const token = s2.push("math_inline", "math", 0);
            token.content = normalizeStandaloneBackslashT(content, mathOpts);
            token.markup = open === "$$" ? "$$" : open === "\\(" ? "\\(\\)" : open === "$" ? "$" : "()";
            token.raw = `${open}${content}${close}`;
            token.loading = false;
          }
        }
        searchPos = endIdx + close.length;
        preMathPos = searchPos;
        s2.pos = searchPos;
      }
      if (foundAny) {
        if (!silent) {
          if (open === "$$" && searchPos < src.length && src.slice(searchPos).includes("$")) {
            let remainingPos = searchPos;
            while (true) {
              if (remainingPos >= src.length) break;
              const dollarIndex = src.indexOf("$", remainingPos);
              if (dollarIndex === -1) break;
              if (dollarIndex + 1 < src.length && src[dollarIndex + 1] === "$") {
                remainingPos = dollarIndex + 2;
                continue;
              }
              if (dollarIndex > 0 && src[dollarIndex - 1] === "$") {
                remainingPos = dollarIndex + 1;
                continue;
              }
              const closingDollarIndex = src.indexOf("$", dollarIndex + 1);
              if (closingDollarIndex === -1) break;
              if (closingDollarIndex + 1 < src.length && src[closingDollarIndex + 1] === "$") {
                remainingPos = dollarIndex + 1;
                continue;
              }
              const content = src.slice(dollarIndex + 1, closingDollarIndex);
              const hasBacktick = content.includes("`");
              const isEmpty = !content || !content.trim();
              if (!hasBacktick && !isEmpty) {
                const before = src.slice(searchPos, dollarIndex);
                if (before) pushText(before);
                const token = s2.push("math_inline", "math", 0);
                token.content = normalizeStandaloneBackslashT(content, mathOpts);
                token.markup = "$";
                token.raw = `$${content}$`;
                token.loading = false;
                searchPos = closingDollarIndex + 1;
                remainingPos = closingDollarIndex + 1;
              } else {
                pushText("$");
                remainingPos = dollarIndex + 1;
              }
            }
            if (remainingPos < src.length) pushText(src.slice(remainingPos));
          } else if (searchPos < src.length) pushText(src.slice(searchPos));
          s2.pos = src.length;
        } else s2.pos = searchPos;
        return true;
      }
    }
    return false;
  };
  const mathBlock = (state, startLine, endLine, silent) => {
    var _a2;
    const s2 = state;
    const allowLoading = !((_a2 = s2 == null ? void 0 : s2.env) == null ? void 0 : _a2.__markstreamFinal);
    const strict = mathOpts == null ? void 0 : mathOpts.strictDelimiters;
    const delimiters = strict ? [["\\[", "\\]"], ["$$", "$$"]] : [
      ["\\[", "\\]"],
      ["[", "]"],
      ["$$", "$$"]
    ];
    const startPos = s2.bMarks[startLine] + s2.tShift[startLine];
    let lineText = s2.src.slice(startPos, s2.eMarks[startLine]).trim();
    let matched = false;
    let openDelim = "";
    let closeDelim = "";
    let skipFirstLine = false;
    for (const [open, close] of delimiters) if (lineText.startsWith(open)) if (open.includes("[")) if (mathOpts == null ? void 0 : mathOpts.strictDelimiters) {
      if (lineText.replace("\\", "") === "[") {
        if (startLine + 1 < endLine) {
          matched = true;
          openDelim = open;
          closeDelim = close;
          break;
        }
        continue;
      }
    } else if (lineText.replace("\\", "") === "[") {
      if (startLine + 1 < endLine) {
        matched = true;
        openDelim = open;
        closeDelim = close;
        break;
      }
      continue;
    } else {
      const lastToken = s2.tokens[s2.tokens.length - 1];
      if (lastToken && lastToken.type === "list_item_open" && lastToken.mark === "-" && lineText.slice(open.length, lineText.indexOf("]")).trim() === "x") continue;
      if (lineText.replace("\\", "").startsWith("[") && !lineText.includes("](")) {
        const closeIndex = lineText.indexOf("]");
        if (lineText.slice(closeIndex).trim() !== "]") continue;
        const inner = lineText.slice(open.length, closeIndex);
        if (open === "[" ? isPlainBracketMathLike(inner) : isMathLike(inner)) {
          matched = true;
          openDelim = open;
          closeDelim = close;
          break;
        }
        continue;
      }
    }
    else {
      matched = true;
      openDelim = open;
      closeDelim = close;
      break;
    }
    else if (open === "$$" && lineText.endsWith(open) && !lineText.slice(0, lineText.length - open.length).trim().includes(open) && startLine + 1 < endLine) {
      s2.push("text", "", 0).content = lineText.slice(0, lineText.length - open.length);
      const nextLineStartPos = s2.bMarks[startLine + 1] + s2.tShift[startLine + 1];
      lineText = s2.src.slice(nextLineStartPos, s2.eMarks[startLine + 1]).trim();
      skipFirstLine = true;
      matched = true;
      openDelim = open;
      closeDelim = close;
      break;
    }
    if (!matched) return false;
    if (silent) return true;
    if (lineText.includes(closeDelim) && lineText.indexOf(closeDelim) > openDelim.length) {
      const startDelimIndex = lineText.indexOf(openDelim);
      const endDelimIndex = lineText.indexOf(closeDelim, startDelimIndex + openDelim.length);
      const content$1 = lineText.slice(startDelimIndex + openDelim.length, endDelimIndex);
      const token$1 = s2.push("math_block", "math", 0);
      token$1.content = normalizeStandaloneBackslashT(content$1);
      token$1.markup = openDelim === "$$" ? "$$" : openDelim === "[" ? "[]" : "\\[\\]";
      token$1.map = [startLine, startLine + 1];
      token$1.raw = `${openDelim}${content$1}${closeDelim}`;
      token$1.block = true;
      token$1.loading = false;
      s2.line = startLine + 1;
      return true;
    }
    let nextLine = startLine;
    let content = "";
    let found = false;
    const firstLineContent = lineText === openDelim ? "" : lineText.slice(openDelim.length);
    if (firstLineContent.includes(closeDelim)) {
      const endIndex = firstLineContent.indexOf(closeDelim);
      content = firstLineContent.slice(0, endIndex);
      found = true;
      nextLine = startLine;
    } else {
      if (firstLineContent && !skipFirstLine) content = firstLineContent;
      for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
        const lineStart = s2.bMarks[nextLine] + s2.tShift[nextLine];
        const lineEnd = s2.eMarks[nextLine];
        const currentLine = s2.src.slice(lineStart - 1, lineEnd);
        if (currentLine.trim() === closeDelim) {
          found = true;
          break;
        } else if (currentLine.includes(closeDelim)) {
          found = true;
          const endIndex = currentLine.indexOf(closeDelim);
          content += (content ? "\n" : "") + currentLine.slice(0, endIndex);
          break;
        }
        content += (content ? "\n" : "") + currentLine;
      }
    }
    if ((!allowLoading || strict) && !found) return false;
    const hasMarkdownPrefix = /^\s*!\[/.test(content);
    if (!(openDelim === "$$" ? !hasMarkdownPrefix : openDelim === "[" ? isPlainBracketMathLike(content) : isMathLike(content))) return false;
    const token = s2.push("math_block", "math", 0);
    token.content = normalizeStandaloneBackslashT(content);
    token.markup = openDelim === "$$" ? "$$" : openDelim === "[" ? "[]" : "\\[\\]";
    token.raw = `${openDelim}${content}${content.startsWith("\n") ? "\n" : ""}${closeDelim}`;
    token.map = [startLine, nextLine + 1];
    token.block = true;
    token.loading = !found;
    s2.line = nextLine + 1;
    return true;
  };
  md.inline.ruler.before("escape", "math", mathInline);
  md.block.ruler.before("paragraph", "math_block", mathBlock, { alt: [
    "paragraph",
    "reference",
    "blockquote",
    "list"
  ] });
}
function applyRenderRules(md) {
  const defaultImage = md.renderer.rules.image || function(tokens, idx, options, env, self) {
    const tokensAny = tokens;
    const selfShape = self;
    return selfShape.renderToken ? selfShape.renderToken(tokensAny, idx, options) : "";
  };
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    var _a2, _b;
    const tokensAny = tokens;
    (_b = (_a2 = tokensAny[idx]).attrSet) == null ? void 0 : _b.call(_a2, "loading", "lazy");
    return defaultImage(tokensAny, idx, options, env, self);
  };
  md.renderer.rules.fence = md.renderer.rules.fence || ((tokens, idx) => {
    const tokenShape = tokens[idx];
    const info = String(tokenShape.info ?? "").trim();
    return `<pre class="${info ? `language-${md.utils.escapeHtml(info.split(/\s+/g)[0])}` : ""}"><code>${md.utils.escapeHtml(String(tokenShape.content ?? ""))}</code></pre>`;
  });
}
function factory(opts = {}) {
  const md = new src_default({
    html: true,
    linkify: true,
    typographer: true,
    stream: true,
    ...opts.markdownItOptions ?? {}
  });
  if (opts.enableMath ?? true) applyMath(md, {
    ...{},
    ...opts.mathOptions ?? {}
  });
  if (opts.enableContainers ?? true) applyContainers(md);
  if (opts.enableFixIndentedCodeBlock !== false) applyFixIndentedCodeBlock(md);
  applyFixLinkTokens(md);
  applyFixStrongTokens(md);
  applyFixListItem(md);
  applyFixTableTokens(md);
  applyRenderRules(md);
  applyFixHtmlInlineTokens(md, { customHtmlTags: opts.customHtmlTags });
  return md;
}
function parseCheckboxToken(token) {
  const tokenMeta = token.meta ?? {};
  return {
    type: "checkbox",
    checked: tokenMeta.checked === true,
    raw: tokenMeta.checked ? "[x]" : "[ ]"
  };
}
function parseCheckboxInputToken(token) {
  const tokenAny = token;
  const rawAttr = tokenAny.attrGet ? tokenAny.attrGet("checked") : void 0;
  const checked = rawAttr === "" || rawAttr === "true";
  return {
    type: "checkbox_input",
    checked,
    raw: checked ? "[x]" : "[ ]"
  };
}
function parseEmojiToken(token) {
  const name = String(token.content ?? "");
  return {
    type: "emoji",
    name,
    markup: String(token.markup ?? ""),
    raw: `:${name}:`
  };
}
function parseEmphasisToken(tokens, startIndex, options) {
  var _a2;
  const children = [];
  let emText = "";
  let i2 = startIndex + 1;
  const innerTokens = [];
  while (i2 < tokens.length && tokens[i2].type !== "em_close") {
    emText += String(tokens[i2].content ?? ((_a2 = tokens[i2]) == null ? void 0 : _a2.text) ?? "");
    innerTokens.push(tokens[i2]);
    i2++;
  }
  children.push(...parseInlineTokens(innerTokens, void 0, void 0, {
    requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
    customHtmlTags: options == null ? void 0 : options.customHtmlTags
  }));
  return {
    node: {
      type: "emphasis",
      children,
      raw: `*${emText}*`
    },
    nextIndex: i2 < tokens.length ? i2 + 1 : tokens.length
  };
}
const TRAILING_FENCE_LINE_RE = /\r?\n[ \t]*`+\s*$/;
const DIFF_HEADER_PREFIXES = [
  "diff ",
  "index ",
  "--- ",
  "+++ ",
  "@@ "
];
const NEWLINE_RE = /\r?\n/;
function splitUnifiedDiff(content) {
  const orig = [];
  const updated = [];
  for (const rawLine of content.split(NEWLINE_RE)) {
    const line = rawLine;
    if (DIFF_HEADER_PREFIXES.some((p) => line.startsWith(p))) continue;
    if (line.length >= 2 && line[0] === "-" && line[1] === " ") orig.push(` ${line.slice(1)}`);
    else if (line.length >= 2 && line[0] === "+" && line[1] === " ") updated.push(` ${line.slice(1)}`);
    else {
      orig.push(line);
      updated.push(line);
    }
  }
  return {
    original: orig.join("\n"),
    updated: updated.join("\n")
  };
}
function parseFenceToken(token) {
  const hasMap = Array.isArray(token.map) && token.map.length === 2;
  const tokenMeta = token.meta ?? {};
  const closed = typeof tokenMeta.closed === "boolean" ? tokenMeta.closed : void 0;
  const info = String(token.info ?? "");
  const diff = info.startsWith("diff");
  const language = diff ? (() => {
    const s2 = info;
    const sp = s2.indexOf(" ");
    return sp === -1 ? "" : String(s2.slice(sp + 1) ?? "");
  })() : info;
  let content = String(token.content ?? "");
  if (TRAILING_FENCE_LINE_RE.test(content)) content = content.replace(TRAILING_FENCE_LINE_RE, "");
  if (diff) {
    const { original, updated } = splitUnifiedDiff(content);
    return {
      type: "code_block",
      language,
      code: String(updated ?? ""),
      raw: String(content ?? ""),
      diff,
      loading: closed === true ? false : closed === false ? true : !hasMap,
      originalCode: original,
      updatedCode: updated
    };
  }
  return {
    type: "code_block",
    language,
    code: String(content ?? ""),
    raw: String(content ?? ""),
    diff,
    loading: closed === true ? false : closed === false ? true : !hasMap
  };
}
function parseFootnoteRefToken(token) {
  const tokenMeta = token.meta ?? {};
  return {
    type: "footnote_reference",
    id: String(tokenMeta.label ?? ""),
    raw: `[^${String(tokenMeta.label ?? "")}]`
  };
}
function parseHardbreakToken() {
  return {
    type: "hardbreak",
    raw: "\\\n"
  };
}
function parseHighlightToken(tokens, startIndex, options) {
  const children = [];
  let markText = "";
  let i2 = startIndex + 1;
  const innerTokens = [];
  while (i2 < tokens.length && tokens[i2].type !== "mark_close") {
    markText += String(tokens[i2].content ?? "");
    innerTokens.push(tokens[i2]);
    i2++;
  }
  children.push(...parseInlineTokens(innerTokens, void 0, void 0, {
    requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
    customHtmlTags: options == null ? void 0 : options.customHtmlTags
  }));
  return {
    node: {
      type: "highlight",
      children,
      raw: `==${markText}==`
    },
    nextIndex: i2 < tokens.length ? i2 + 1 : tokens.length
  };
}
const VOID_TAGS$1 = /* @__PURE__ */ new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function getTagName(html) {
  const match2 = html.match(/^<\s*(?:\/\s*)?([\w-]+)/);
  return match2 ? match2[1].toLowerCase() : "";
}
function isClosingTag(html) {
  return /^<\s*\//.test(html);
}
function isSelfClosing(tag, html) {
  return /\/\s*>\s*$/.test(html) || VOID_TAGS$1.has(tag);
}
function normalizeCustomTag(t2) {
  const raw = String(t2 ?? "").trim();
  if (!raw) return "";
  const m = raw.match(/^[<\s/]*([A-Z][\w-]*)/i);
  return m ? m[1].toLowerCase() : "";
}
function tokenToRaw(token) {
  const shape = token;
  const raw = shape.raw ?? shape.content ?? shape.markup ?? "";
  return String(raw ?? "");
}
function stringifyTokens(tokens) {
  return tokens.map(tokenToRaw).join("");
}
function findMatchingClosing(tokens, startIndex, tag) {
  let depth = 0;
  for (let idx = startIndex; idx < tokens.length; idx++) {
    const t2 = tokens[idx];
    if (t2.type !== "html_inline") continue;
    const content = String(t2.content ?? "");
    const tTag = getTagName(content);
    const closing = isClosingTag(content);
    const selfClosing = isSelfClosing(tTag, content);
    if (!closing && !selfClosing && tTag === tag) {
      depth++;
      continue;
    }
    if (closing && tTag === tag) {
      if (depth === 0) return idx;
      depth--;
    }
  }
  return -1;
}
function collectHtmlFragment(tokens, startIndex, tag) {
  const fragmentTokens = [tokens[startIndex]];
  let innerTokens = [];
  let nextIndex = startIndex + 1;
  let closed = false;
  const closingIndex = tag ? findMatchingClosing(tokens, startIndex + 1, tag) : -1;
  if (closingIndex !== -1) {
    innerTokens = tokens.slice(startIndex + 1, closingIndex);
    fragmentTokens.push(...innerTokens, tokens[closingIndex]);
    nextIndex = closingIndex + 1;
    closed = true;
  } else {
    innerTokens = tokens.slice(startIndex + 1);
    if (innerTokens.length) fragmentTokens.push(...innerTokens);
    nextIndex = tokens.length;
  }
  return {
    closed,
    html: stringifyTokens(fragmentTokens),
    innerTokens,
    nextIndex
  };
}
function parseHtmlInlineCodeToken(token, tokens, i2, parseInlineTokens$1, raw, pPreToken, options) {
  const code$1 = String(token.content ?? "");
  const tag = getTagName(code$1);
  const customTags = options == null ? void 0 : options.customHtmlTags;
  const customTagSet = customTags && customTags.length ? new Set(customTags.map(normalizeCustomTag).filter(Boolean)) : null;
  if (!tag) return [{
    type: "inline_code",
    code: code$1,
    raw: code$1
  }, i2 + 1];
  if (!buildAllowedHtmlTagSet({ customHtmlTags: options == null ? void 0 : options.customHtmlTags }).has(tag)) {
    if (!collectHtmlFragment(tokens, i2, tag).closed) {
      const content$1 = tokenToRaw(token);
      return [{
        type: "text",
        content: content$1,
        raw: content$1
      }, i2 + 1];
    }
  }
  if (tag === "br") return [{
    type: "hardbreak",
    raw: code$1
  }, i2 + 1];
  const closing = isClosingTag(code$1);
  const selfClosing = isSelfClosing(tag, code$1);
  if (closing) return [{
    type: "html_inline",
    tag,
    content: code$1,
    children: [],
    raw: code$1,
    loading: false
  }, i2 + 1];
  if (tag === "a") {
    const fragment$1 = collectHtmlFragment(tokens, i2, tag);
    const innerTokens = fragment$1.innerTokens;
    const hrefMatch = code$1.match(/href\s*=\s*"([^"]+)"|href\s*=\s*'([^']+)'|href\s*=\s*([^\s>]+)/i);
    const href = hrefMatch ? hrefMatch[1] || hrefMatch[2] || hrefMatch[3] : "";
    const children$1 = innerTokens.length ? parseInlineTokens$1(innerTokens, raw, pPreToken, options) : [];
    const textContent = innerTokens.length ? stringifyTokens(innerTokens) : href || "";
    if (!children$1.length && textContent) children$1.push({
      type: "text",
      content: textContent,
      raw: textContent
    });
    return [{
      type: "link",
      href: String(href ?? ""),
      title: null,
      text: textContent,
      children: children$1,
      loading: !fragment$1.closed,
      raw: fragment$1.html || code$1
    }, fragment$1.nextIndex];
  }
  if (selfClosing) return [{
    type: (customTagSet == null ? void 0 : customTagSet.has(tag)) ? tag : "html_inline",
    tag,
    content: code$1,
    children: [],
    raw: code$1,
    loading: false
  }, i2 + 1];
  const fragment = collectHtmlFragment(tokens, i2, tag);
  if (tag === "p" || tag === "div") return [{
    type: "paragraph",
    children: fragment.innerTokens.length ? parseInlineTokens$1(fragment.innerTokens, raw, pPreToken, options) : [],
    raw: fragment.html
  }, fragment.nextIndex];
  const children = fragment.innerTokens.length ? parseInlineTokens$1(fragment.innerTokens, raw, pPreToken, options) : [];
  let content = fragment.html || code$1;
  let loading = !fragment.closed;
  let autoClosed = false;
  if (!fragment.closed) {
    const closeTag = `</${tag}>`;
    if (!content.toLowerCase().includes(closeTag.toLowerCase())) content += closeTag;
    autoClosed = true;
    loading = true;
  }
  const attrs = [];
  const attrRegex = /\s([\w:-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
  let match2;
  while ((match2 = attrRegex.exec(code$1)) !== null) {
    const attrName = match2[1];
    const attrValue = match2[2] || match2[3] || match2[4] || "";
    attrs.push([attrName, attrValue]);
  }
  if (customTagSet == null ? void 0 : customTagSet.has(tag)) return [{
    type: tag,
    tag,
    attrs,
    content: fragment.innerTokens.length ? stringifyTokens(fragment.innerTokens) : "",
    children: fragment.innerTokens.length ? parseInlineTokens$1(fragment.innerTokens, raw, pPreToken, options) : [],
    raw: content,
    loading: token.loading || loading,
    autoClosed
  }, fragment.nextIndex];
  return [{
    type: "html_inline",
    tag,
    attrs,
    content,
    children,
    raw: content,
    loading,
    autoClosed
  }, fragment.nextIndex];
}
function parseImageToken(token, loading = false) {
  var _a2, _b, _c, _d, _e2;
  let attrs = token.attrs ?? [];
  let childWithAttrs = null;
  if ((!attrs || attrs.length === 0) && Array.isArray(token.children)) for (const child of token.children) {
    const childAttrs = child == null ? void 0 : child.attrs;
    if (Array.isArray(childAttrs) && childAttrs.length > 0) {
      attrs = childAttrs;
      childWithAttrs = child;
      break;
    }
  }
  const src = String(((_a2 = attrs.find((attr) => attr[0] === "src")) == null ? void 0 : _a2[1]) ?? "");
  const altAttr = (_b = attrs.find((attr) => attr[0] === "alt")) == null ? void 0 : _b[1];
  let alt = "";
  if (altAttr != null && String(altAttr).length > 0) alt = String(altAttr);
  else if ((childWithAttrs == null ? void 0 : childWithAttrs.content) != null && String(childWithAttrs.content).length > 0) alt = String(childWithAttrs.content);
  else if (Array.isArray(childWithAttrs == null ? void 0 : childWithAttrs.children) && ((_c = childWithAttrs.children[0]) == null ? void 0 : _c.content)) alt = String(childWithAttrs.children[0].content);
  else if (Array.isArray(token.children) && ((_d = token.children[0]) == null ? void 0 : _d.content)) alt = String(token.children[0].content);
  else if (token.content != null && String(token.content).length > 0) alt = String(token.content);
  const _title = ((_e2 = attrs.find((attr) => attr[0] === "title")) == null ? void 0 : _e2[1]) ?? null;
  const title = _title === null ? null : String(_title);
  const raw = String(token.content ?? "");
  return {
    type: "image",
    src,
    alt,
    title,
    raw,
    loading
  };
}
function parseInlineCodeToken(token) {
  const code$1 = String(token.content ?? "");
  return {
    type: "inline_code",
    code: code$1,
    raw: code$1
  };
}
function parseInsertToken(tokens, startIndex, options) {
  const children = [];
  let insText = "";
  let i2 = startIndex + 1;
  const innerTokens = [];
  while (i2 < tokens.length && tokens[i2].type !== "ins_close") {
    insText += String(tokens[i2].content ?? "");
    innerTokens.push(tokens[i2]);
    i2++;
  }
  children.push(...parseInlineTokens(innerTokens, void 0, void 0, {
    requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
    customHtmlTags: options == null ? void 0 : options.customHtmlTags
  }));
  return {
    node: {
      type: "insert",
      children,
      raw: `++${String(insText)}++`
    },
    nextIndex: i2 < tokens.length ? i2 + 1 : tokens.length
  };
}
function parseLinkToken(tokens, startIndex, options) {
  var _a2, _b, _c;
  const attrs = tokens[startIndex].attrs ?? [];
  const href = String(((_a2 = attrs.find((attr) => attr[0] === "href")) == null ? void 0 : _a2[1]) ?? "");
  const _title = ((_b = attrs.find((attr) => attr[0] === "title")) == null ? void 0 : _b[1]) ?? null;
  const title = _title === null ? null : String(_title);
  let i2 = startIndex + 1;
  const linkTokens = [];
  let loading = true;
  while (i2 < tokens.length && tokens[i2].type !== "link_close") {
    linkTokens.push(tokens[i2]);
    i2++;
  }
  if (((_c = tokens[i2]) == null ? void 0 : _c.type) === "link_close") loading = false;
  const children = parseInlineTokens(linkTokens, void 0, void 0, {
    requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
    customHtmlTags: options == null ? void 0 : options.customHtmlTags
  });
  const linkText = children.map((node) => {
    const nodeAny = node;
    if ("content" in node) return String(nodeAny.content ?? "");
    return String(nodeAny.raw ?? "");
  }).join("");
  return {
    node: {
      type: "link",
      href,
      title,
      text: linkText,
      children,
      raw: String(`[${linkText}](${href}${title ? ` "${title}"` : ""})`),
      loading
    },
    nextIndex: i2 < tokens.length ? i2 + 1 : tokens.length
  };
}
function parseMathInlineToken(token) {
  const content = token.content ?? "";
  const raw = token.raw === "$$" ? `$${content}$` : token.raw || "";
  return {
    type: "math_inline",
    content,
    loading: !!token.loading,
    raw,
    markup: token.markup
  };
}
function parseReferenceToken(token) {
  return {
    type: "reference",
    id: String(token.content ?? ""),
    raw: String(token.markup ?? `[${token.content ?? ""}]`)
  };
}
function parseStrikethroughToken(tokens, startIndex, options) {
  const children = [];
  let sText = "";
  let i2 = startIndex + 1;
  const innerTokens = [];
  while (i2 < tokens.length && tokens[i2].type !== "s_close") {
    sText += String(tokens[i2].content ?? "");
    innerTokens.push(tokens[i2]);
    i2++;
  }
  children.push(...parseInlineTokens(innerTokens, void 0, void 0, {
    requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
    customHtmlTags: options == null ? void 0 : options.customHtmlTags
  }));
  return {
    node: {
      type: "strikethrough",
      children,
      raw: `~~${sText}~~`
    },
    nextIndex: i2 < tokens.length ? i2 + 1 : tokens.length
  };
}
function parseStrongToken(tokens, startIndex, raw, options) {
  const children = [];
  let strongText = "";
  let i2 = startIndex + 1;
  const innerTokens = [];
  let openCount = 1;
  while (i2 < tokens.length) {
    if (tokens[i2].type === "strong_close") {
      if (openCount === 1) break;
      openCount--;
    }
    if (tokens[i2].type === "strong_open") openCount++;
    strongText += String(tokens[i2].content ?? "");
    innerTokens.push(tokens[i2]);
    i2++;
  }
  children.push(...parseInlineTokens(innerTokens, raw, void 0, {
    requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
    customHtmlTags: options == null ? void 0 : options.customHtmlTags
  }));
  return {
    node: {
      type: "strong",
      children,
      raw: `**${String(strongText)}**`
    },
    nextIndex: i2 < tokens.length ? i2 + 1 : tokens.length
  };
}
function parseSubscriptToken(tokens, startIndex, options) {
  const children = [];
  let subText = "";
  let i2 = startIndex + 1;
  const innerTokens = [];
  while (i2 < tokens.length && tokens[i2].type !== "sub_close") {
    subText += String(tokens[i2].content ?? "");
    innerTokens.push(tokens[i2]);
    i2++;
  }
  children.push(...parseInlineTokens(innerTokens, void 0, void 0, {
    requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
    customHtmlTags: options == null ? void 0 : options.customHtmlTags
  }));
  const startContent = String(tokens[startIndex].content ?? "");
  const display = subText || startContent;
  return {
    node: {
      type: "subscript",
      children: children.length > 0 ? children : [{
        type: "text",
        content: display,
        raw: display
      }],
      raw: `~${display}~`
    },
    nextIndex: i2 < tokens.length ? i2 + 1 : tokens.length
  };
}
function parseSuperscriptToken(tokens, startIndex, options) {
  const children = [];
  let supText = "";
  let i2 = startIndex + 1;
  const innerTokens = [];
  while (i2 < tokens.length && tokens[i2].type !== "sup_close") {
    supText += String(tokens[i2].content ?? "");
    innerTokens.push(tokens[i2]);
    i2++;
  }
  children.push(...parseInlineTokens(innerTokens, void 0, void 0, {
    requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
    customHtmlTags: options == null ? void 0 : options.customHtmlTags
  }));
  return {
    node: {
      type: "superscript",
      children: children.length > 0 ? children : [{
        type: "text",
        content: supText || String(tokens[startIndex].content ?? ""),
        raw: supText || String(tokens[startIndex].content ?? "")
      }],
      raw: `^${supText || String(tokens[startIndex].content ?? "")}^`
    },
    nextIndex: i2 < tokens.length ? i2 + 1 : tokens.length
  };
}
function parseTextToken(token) {
  const content = String(token.content ?? "");
  return {
    type: "text",
    content,
    raw: content
  };
}
const STRONG_PAIR_RE = /\*\*([\s\S]*?)\*\*/;
function parseInlineTokens(tokens, raw, pPreToken, options) {
  if (!tokens || tokens.length === 0) return [];
  const result = [];
  let currentTextNode = null;
  let i2 = 0;
  const requireClosingStrong = options == null ? void 0 : options.requireClosingStrong;
  function resetCurrentTextNode() {
    currentTextNode = null;
  }
  function handleEmphasisAndStrikethrough(content, token) {
    const countUnescapedAsterisks = (str) => {
      let count = 0;
      let i$1 = 0;
      while (i$1 < str.length) {
        if (str[i$1] === "\\" && i$1 + 1 < str.length && str[i$1 + 1] === "*") {
          i$1 += 2;
          continue;
        }
        if (str[i$1] === "*") count++;
        i$1++;
      }
      return count;
    };
    if (/[^~]*~{2,}[^~]+/.test(content)) {
      let idx = content.indexOf("~~");
      if (idx === -1) idx = 0;
      const _text = content.slice(0, idx);
      if (_text) if (currentTextNode) {
        currentTextNode.content += _text;
        currentTextNode.raw += _text;
      } else {
        currentTextNode = {
          type: "text",
          content: String(_text ?? ""),
          raw: String(token.content ?? "")
        };
        result.push(currentTextNode);
      }
      const { node } = parseStrikethroughToken([
        {
          type: "s_open",
          tag: "s",
          content: "",
          markup: "*",
          info: "",
          meta: null
        },
        {
          type: "text",
          tag: "",
          content: content.slice(idx).replace(/~/g, ""),
          markup: "",
          info: "",
          meta: null
        },
        {
          type: "s_close",
          tag: "s",
          content: "",
          markup: "*",
          info: "",
          meta: null
        }
      ], 0);
      resetCurrentTextNode();
      pushNode(node);
      i2++;
      return true;
    }
    if (/\*\*/.test(content)) {
      const openIdx = content.indexOf("**");
      const beforeText = openIdx > -1 ? content.slice(0, openIdx) : "";
      if (beforeText) pushText(beforeText, beforeText);
      if (openIdx === -1) {
        i2++;
        return true;
      }
      if (raw && openIdx === 0) {
        let rawHasEscapedAsteriskAtStart = false;
        let asteriskCount = 0;
        while (asteriskCount < content.length && content[asteriskCount] === "*") asteriskCount++;
        if (raw.startsWith("\\*")) rawHasEscapedAsteriskAtStart = true;
        if (rawHasEscapedAsteriskAtStart) {
          let escapedCount = 0;
          let j = 0;
          while (j < raw.length && escapedCount < asteriskCount) if (raw[j] === "\\" && j + 1 < raw.length && raw[j + 1] === "*") {
            escapedCount += 1;
            j += 2;
          } else if (raw[j] === "*") break;
          else j++;
          if (escapedCount >= 2) {
            pushText(content, content);
            i2++;
            return true;
          }
        }
      }
      if (raw) {
        if ((content.match(/\*/g) || []).length > countUnescapedAsterisks(raw)) {
          pushText(content.slice(beforeText.length), content.slice(beforeText.length));
          i2++;
          return true;
        }
      }
      const exec = STRONG_PAIR_RE.exec(content);
      let inner = "";
      let after = "";
      if (exec && typeof exec.index === "number") {
        inner = exec[1];
        after = content.slice(exec.index + exec[0].length);
      } else {
        if (requireClosingStrong) {
          pushText(content, content);
          i2++;
          return true;
        }
        inner = content.slice(openIdx + 2);
        after = "";
      }
      if (!inner && /^\*+$/.test(after)) {
        pushText(content, content);
        i2++;
        return true;
      }
      const { node } = parseStrongToken([
        {
          type: "strong_open",
          tag: "strong",
          content: "",
          markup: "**",
          info: "",
          meta: null
        },
        {
          type: "text",
          tag: "",
          content: inner,
          markup: "",
          info: "",
          meta: null
        },
        {
          type: "strong_close",
          tag: "strong",
          content: "",
          markup: "**",
          info: "",
          meta: null
        }
      ], 0, raw, options);
      resetCurrentTextNode();
      pushNode(node);
      if (after) {
        handleToken({
          type: "text",
          content: after,
          raw: after
        });
        i2--;
      }
      i2++;
      return true;
    }
    if (/[^*]*\*[^*]+/.test(content)) {
      let idx = content.indexOf("*");
      if (idx === -1) idx = 0;
      const _text = content.slice(0, idx);
      if (_text) if (currentTextNode) {
        currentTextNode.content += _text;
        currentTextNode.raw += _text;
      } else {
        currentTextNode = {
          type: "text",
          content: String(_text ?? ""),
          raw: String(token.content ?? "")
        };
        result.push(currentTextNode);
      }
      const closeIndex = content.indexOf("*", idx + 1);
      const { node } = parseEmphasisToken([
        {
          type: "em_open",
          tag: "em",
          content: "",
          markup: "*",
          info: "",
          meta: null
        },
        {
          type: "text",
          tag: "",
          content: content.slice(idx, closeIndex > -1 ? closeIndex + 1 : void 0).replace(/\*/g, ""),
          markup: "",
          info: "",
          meta: null
        },
        {
          type: "em_close",
          tag: "em",
          content: "",
          markup: "*",
          info: "",
          meta: null
        }
      ], 0, options);
      if (closeIndex !== -1 && closeIndex < content.length - 1) {
        const afterContent = content.slice(closeIndex + 1);
        if (afterContent) handleToken({
          type: "text",
          content: afterContent,
          raw: afterContent
        });
      }
      resetCurrentTextNode();
      pushNode(node);
      i2++;
      return true;
    }
    return false;
  }
  function handleInlineCodeContent(content, _token) {
    if (!content.includes("`")) return false;
    const codeStart = content.indexOf("`");
    let runLen = 1;
    for (let k = codeStart + 1; k < content.length && content[k] === "`"; k++) runLen++;
    const closingSeq = "`".repeat(runLen);
    const searchFrom = codeStart + runLen;
    const codeEnd = content.indexOf(closingSeq, searchFrom);
    if (codeEnd === -1) {
      if (runLen === 1) {
        const beforeText$1 = content.slice(0, codeStart);
        const codeContent$1 = content.slice(codeStart + 1);
        if (beforeText$1) if (!handleEmphasisAndStrikethrough(beforeText$1, _token)) pushText(beforeText$1, beforeText$1);
        else i2--;
        pushParsed({
          type: "inline_code",
          code: codeContent$1,
          raw: String(codeContent$1)
        });
        i2++;
        return true;
      }
      let merged = content;
      for (let j = i2 + 1; j < tokens.length; j++) merged += String((tokens[j].content ?? "") + (tokens[j].markup ?? ""));
      i2 = tokens.length - 1;
      pushText(merged, merged);
      i2++;
      return true;
    }
    resetCurrentTextNode();
    const beforeText = content.slice(0, codeStart);
    const codeContent = content.slice(codeStart + runLen, codeEnd);
    const after = content.slice(codeEnd + runLen);
    if (beforeText) if (!handleEmphasisAndStrikethrough(beforeText, _token)) pushText(beforeText, beforeText);
    else i2--;
    pushParsed({
      type: "inline_code",
      code: codeContent,
      raw: String(codeContent ?? "")
    });
    if (after) {
      handleToken({
        type: "text",
        content: after,
        raw: after
      });
      i2--;
    }
    i2++;
    return true;
  }
  function pushParsed(node) {
    resetCurrentTextNode();
    result.push(node);
  }
  function pushToken(token) {
    resetCurrentTextNode();
    result.push(token);
  }
  function pushNode(node) {
    pushParsed(node);
  }
  function pushText(content, raw$1) {
    if (currentTextNode) {
      currentTextNode.content += content;
      currentTextNode.raw += raw$1 ?? content;
    } else {
      currentTextNode = {
        type: "text",
        content: String(content ?? ""),
        raw: String(raw$1 ?? content ?? "")
      };
      result.push(currentTextNode);
    }
  }
  while (i2 < tokens.length) {
    const token = tokens[i2];
    handleToken(token);
  }
  function handleToken(token) {
    var _a2, _b;
    switch (token.type) {
      case "text":
        handleTextToken(token);
        break;
      case "softbreak":
        if (currentTextNode) {
          currentTextNode.content += "\n";
          currentTextNode.raw += "\n";
        } else {
          currentTextNode = {
            type: "text",
            content: "\n",
            raw: "\n"
          };
          result.push(currentTextNode);
        }
        i2++;
        break;
      case "code_inline":
        pushNode(parseInlineCodeToken(token));
        i2++;
        break;
      case "html_inline": {
        const [node, index] = parseHtmlInlineCodeToken(token, tokens, i2, parseInlineTokens, raw, pPreToken, options);
        pushNode(node);
        i2 = index;
        break;
      }
      case "link_open":
        handleLinkOpen(token);
        break;
      case "image":
        resetCurrentTextNode();
        pushNode(parseImageToken(token));
        i2++;
        break;
      case "strong_open": {
        resetCurrentTextNode();
        const { node, nextIndex } = parseStrongToken(tokens, i2, token.content, options);
        pushNode(node);
        i2 = nextIndex;
        break;
      }
      case "em_open": {
        resetCurrentTextNode();
        const { node, nextIndex } = parseEmphasisToken(tokens, i2, options);
        pushNode(node);
        i2 = nextIndex;
        break;
      }
      case "s_open": {
        resetCurrentTextNode();
        const { node, nextIndex } = parseStrikethroughToken(tokens, i2, options);
        pushNode(node);
        i2 = nextIndex;
        break;
      }
      case "mark_open": {
        resetCurrentTextNode();
        const { node, nextIndex } = parseHighlightToken(tokens, i2, options);
        pushNode(node);
        i2 = nextIndex;
        break;
      }
      case "ins_open": {
        resetCurrentTextNode();
        const { node, nextIndex } = parseInsertToken(tokens, i2, options);
        pushNode(node);
        i2 = nextIndex;
        break;
      }
      case "sub_open": {
        resetCurrentTextNode();
        const { node, nextIndex } = parseSubscriptToken(tokens, i2, options);
        pushNode(node);
        i2 = nextIndex;
        break;
      }
      case "sup_open": {
        resetCurrentTextNode();
        const { node, nextIndex } = parseSuperscriptToken(tokens, i2, options);
        pushNode(node);
        i2 = nextIndex;
        break;
      }
      case "sub":
        resetCurrentTextNode();
        pushNode({
          type: "subscript",
          children: [{
            type: "text",
            content: String(token.content ?? ""),
            raw: String(token.content ?? "")
          }],
          raw: `~${String(token.content ?? "")}~`
        });
        i2++;
        break;
      case "sup":
        resetCurrentTextNode();
        pushNode({
          type: "superscript",
          children: [{
            type: "text",
            content: String(token.content ?? ""),
            raw: String(token.content ?? "")
          }],
          raw: `^${String(token.content ?? "")}^`
        });
        i2++;
        break;
      case "emoji": {
        resetCurrentTextNode();
        const preToken = tokens[i2 - 1];
        if ((preToken == null ? void 0 : preToken.type) === "text" && /\|:-+/.test(String(preToken.content ?? ""))) pushText("", "");
        else pushNode(parseEmojiToken(token));
        i2++;
        break;
      }
      case "checkbox":
        resetCurrentTextNode();
        pushNode(parseCheckboxToken(token));
        i2++;
        break;
      case "checkbox_input":
        resetCurrentTextNode();
        pushNode(parseCheckboxInputToken(token));
        i2++;
        break;
      case "footnote_ref":
        resetCurrentTextNode();
        pushNode(parseFootnoteRefToken(token));
        i2++;
        break;
      case "footnote_anchor": {
        resetCurrentTextNode();
        const meta = token.meta ?? {};
        pushParsed({
          type: "footnote_anchor",
          id: String(meta.label ?? token.content ?? ""),
          raw: String(token.content ?? "")
        });
        i2++;
        break;
      }
      case "hardbreak":
        resetCurrentTextNode();
        pushNode(parseHardbreakToken());
        i2++;
        break;
      case "fence":
        resetCurrentTextNode();
        pushNode(parseFenceToken(tokens[i2]));
        i2++;
        break;
      case "math_inline":
        resetCurrentTextNode();
        if (!token.content && token.markup === "$" && ((_a2 = tokens[i2 + 1]) == null ? void 0 : _a2.type) === "text" && ((_b = tokens[i2 + 2]) == null ? void 0 : _b.type) === "math_inline") {
          pushNode(parseMathInlineToken({
            ...token,
            content: tokens[i2 + 1].content
          }));
          i2 += 2;
        } else pushNode(parseMathInlineToken(token));
        i2++;
        break;
      case "reference":
        handleReference(token);
        break;
      case "text_special":
        pushText(String(token.content ?? ""), String(token.content ?? ""));
        i2++;
        break;
      default:
        pushToken(token);
        i2++;
        break;
    }
  }
  function handleTextToken(token) {
    var _a2, _b, _c, _d, _e2;
    let index = result.length - 1;
    let content = String(token.content ?? "").replace(/\\/g, "");
    if (token.content === "<" || content === "1" && ((_a2 = tokens[i2 - 1]) == null ? void 0 : _a2.tag) === "br") {
      i2++;
      return;
    }
    if (Array.from(content.matchAll(/\$/g)).length === 1 && content.endsWith("$")) content = content.slice(0, -1);
    if (content.endsWith("undefined") && !(raw == null ? void 0 : raw.endsWith("undefined"))) content = content.slice(0, -9);
    for (; index >= 0; index--) {
      const item = result[index];
      if (item.type === "text") {
        currentTextNode = null;
        const itemContent = String(item.content ?? "");
        if (!content.startsWith(itemContent)) content = itemContent + content;
        continue;
      }
      break;
    }
    if (index < result.length - 1) result.splice(index + 1);
    const nextToken = tokens[i2 + 1];
    if ((pPreToken == null ? void 0 : pPreToken.type) === "list_item_open" && /^\d$/.test(content)) {
      i2++;
      return;
    }
    if (content === "`" || content === "|" || content === "$" || /^\*+$/.test(content)) {
      i2++;
      return;
    }
    if (!nextToken && /[^\]]\s*\(\s*$/.test(content)) content = content.replace(/\(\s*$/, "");
    if (handleCheckboxLike(content)) return;
    const preToken = tokens[i2 - 1];
    if (content === "[" && !((_b = nextToken == null ? void 0 : nextToken.markup) == null ? void 0 : _b.includes("*")) || content === "]" && !((_c = preToken == null ? void 0 : preToken.markup) == null ? void 0 : _c.includes("*"))) {
      i2++;
      return;
    }
    if (handleInlineCodeContent(content, token)) return;
    if (handleInlineImageContent(content, token)) return;
    if (((_d = tokens[i2 + 1]) == null ? void 0 : _d.type) !== "link_open" && handleInlineLinkContent(content)) return;
    if (handleEmphasisAndStrikethrough(content, token)) return;
    if (!content) {
      i2++;
      return;
    }
    const textNode = parseTextToken({
      ...token,
      content
    });
    if (currentTextNode) {
      currentTextNode.content += textNode.content.replace(/(\*+|\(|\\)$/, "");
      currentTextNode.raw += textNode.raw;
    } else {
      const maybeMath = (preToken == null ? void 0 : preToken.tag) === "br" && ((_e2 = tokens[i2 - 2]) == null ? void 0 : _e2.content) === "[";
      if (!tokens[i2 + 1]) textNode.content = textNode.content.replace(/(\*+|\(|\\)$/, "");
      currentTextNode = textNode;
      currentTextNode.center = maybeMath;
      result.push(currentTextNode);
    }
    i2++;
  }
  function handleLinkOpen(token) {
    var _a2, _b;
    resetCurrentTextNode();
    const { node, nextIndex } = parseLinkToken(tokens, i2, { requireClosingStrong });
    i2 = nextIndex;
    const hrefAttr = (_b = (_a2 = token.attrs) == null ? void 0 : _a2.find(([name]) => name === "href")) == null ? void 0 : _b[1];
    const hrefStr = String(hrefAttr ?? "");
    if (raw && hrefStr) {
      const openIdx = raw.indexOf("](");
      if (openIdx === -1) ;
      else {
        const closeIdx = raw.indexOf(")", openIdx + 2);
        if (closeIdx === -1) node.loading = true;
        else if (node.loading) {
          if (raw.slice(openIdx + 2, closeIdx).includes(hrefStr)) node.loading = false;
        }
      }
    }
    pushParsed(node);
  }
  function handleReference(token) {
    resetCurrentTextNode();
    const nextToken = tokens[i2 + 1];
    const preToken = tokens[i2 - 1];
    const preResult = result[result.length - 1];
    const nextIsTextNotStartingParens = (nextToken == null ? void 0 : nextToken.type) === "text" && !String(nextToken.content ?? "").startsWith("(");
    const preIsTextEndingBracketOrOnlySpace = (preToken == null ? void 0 : preToken.type) === "text" && /\]$|^\s*$/.test(String(preToken.content ?? ""));
    if (nextIsTextNotStartingParens || preIsTextEndingBracketOrOnlySpace) pushNode(parseReferenceToken(token));
    else if (nextToken && nextToken.type === "text") nextToken.content = String(token.markup ?? "") + String(nextToken.content ?? "");
    else if (preResult && preResult.type === "text") {
      preResult.content = String(preResult.content ?? "") + String(token.markup ?? "");
      preResult.raw = String(preResult.raw ?? "") + String(token.markup ?? "");
    }
    i2++;
  }
  function handleInlineLinkContent(content, _token) {
    const linkStart = content.indexOf("[");
    if (linkStart === -1) return false;
    let textNodeContent = content.slice(0, linkStart);
    const linkEnd = content.indexOf("](", linkStart);
    if (linkEnd !== -1) {
      const textToken$1 = tokens[i2 + 2];
      let text$1 = content.slice(linkStart + 1, linkEnd);
      if (text$1.includes("[")) {
        const secondLinkStart = text$1.indexOf("[");
        textNodeContent += content.slice(0, linkStart + secondLinkStart + 1);
        const newLinkStart = linkStart + secondLinkStart + 1;
        text$1 = content.slice(newLinkStart + 1, linkEnd);
      }
      const nextToken = tokens[i2 + 1];
      if (content.endsWith("](") && (nextToken == null ? void 0 : nextToken.type) === "link_open" && textToken$1) {
        const last = tokens[i2 + 4];
        let index = 4;
        let loading$1 = true;
        if ((last == null ? void 0 : last.type) === "text" && last.content === ")") {
          index++;
          loading$1 = false;
        } else if ((last == null ? void 0 : last.type) === "text" && last.content === ".") i2++;
        if (textNodeContent) pushText(textNodeContent, textNodeContent);
        pushParsed({
          type: "link",
          href: String(textToken$1.content ?? ""),
          title: null,
          text: text$1,
          children: [{
            type: "text",
            content: text$1,
            raw: text$1
          }],
          loading: loading$1
        });
        i2 += index;
        return true;
      }
      const linkContentEnd = content.indexOf(")", linkEnd);
      const href = linkContentEnd !== -1 ? content.slice(linkEnd + 2, linkContentEnd) : "";
      const loading = linkContentEnd === -1;
      let emphasisMatch = textNodeContent.match(/\*+$/);
      if (emphasisMatch) textNodeContent = textNodeContent.replace(/\*+$/, "");
      if (textNodeContent) pushText(textNodeContent, textNodeContent);
      if (!emphasisMatch) emphasisMatch = text$1.match(/^\*+/);
      if (!requireClosingStrong && emphasisMatch) {
        const type = emphasisMatch[0].length;
        text$1 = text$1.replace(/^\*+/, "").replace(/\*+$/, "");
        const newTokens = [];
        if (type === 1) newTokens.push({
          type: "em_open",
          tag: "em",
          nesting: 1
        });
        else if (type === 2) newTokens.push({
          type: "strong_open",
          tag: "strong",
          nesting: 1
        });
        else if (type === 3) {
          newTokens.push({
            type: "strong_open",
            tag: "strong",
            nesting: 1
          });
          newTokens.push({
            type: "em_open",
            tag: "em",
            nesting: 1
          });
        }
        newTokens.push({
          type: "link",
          href,
          title: null,
          text: text$1,
          children: [{
            type: "text",
            content: text$1,
            raw: text$1
          }],
          loading
        });
        if (type === 1) {
          newTokens.push({
            type: "em_close",
            tag: "em",
            nesting: -1
          });
          const { node } = parseEmphasisToken(newTokens, 0, options);
          pushNode(node);
        } else if (type === 2) {
          newTokens.push({
            type: "strong_close",
            tag: "strong",
            nesting: -1
          });
          const { node } = parseStrongToken(newTokens, 0, void 0, options);
          pushNode(node);
        } else if (type === 3) {
          newTokens.push({
            type: "em_close",
            tag: "em",
            nesting: -1
          });
          newTokens.push({
            type: "strong_close",
            tag: "strong",
            nesting: -1
          });
          const { node } = parseStrongToken(newTokens, 0, void 0, options);
          pushNode(node);
        } else {
          const { node } = parseEmphasisToken(newTokens, 0, options);
          pushNode(node);
        }
      } else pushParsed({
        type: "link",
        href,
        title: null,
        text: text$1,
        children: [{
          type: "text",
          content: text$1,
          raw: text$1
        }],
        loading
      });
      const afterText = linkContentEnd !== -1 ? content.slice(linkContentEnd + 1) : "";
      if (afterText) {
        handleToken({
          type: "text",
          content: afterText,
          raw: afterText
        });
        i2--;
      }
      i2++;
      return true;
    }
    return false;
  }
  function handleInlineImageContent(content, token) {
    const imageStart = content.indexOf("![");
    if (imageStart === -1) return false;
    const textNodeContent = content.slice(0, imageStart);
    if (!currentTextNode) currentTextNode = {
      type: "text",
      content: textNodeContent,
      raw: textNodeContent
    };
    else currentTextNode.content += textNodeContent;
    result.push(currentTextNode);
    currentTextNode = null;
    pushParsed(parseImageToken(token, true));
    i2++;
    return true;
  }
  function handleCheckboxLike(content) {
    if (!((content == null ? void 0 : content.startsWith("[")) && (pPreToken == null ? void 0 : pPreToken.type) === "list_item_open")) return false;
    const w = content.slice(1).match(/[^\s\]]/);
    if (w === null) {
      i2++;
      return true;
    }
    if (w && /x/i.test(w[0])) {
      const checked = w[0] === "x" || w[0] === "X";
      pushParsed({
        type: "checkbox_input",
        checked,
        raw: checked ? "[x]" : "[ ]"
      });
      i2++;
      return true;
    }
    return false;
  }
  return result;
}
function parseList(tokens, index, options) {
  var _a2;
  const token = tokens[index];
  const listItems = [];
  let j = index + 1;
  while (j < tokens.length && tokens[j].type !== "bullet_list_close" && tokens[j].type !== "ordered_list_close") if (tokens[j].type === "list_item_open") {
    const itemChildren = [];
    let k = j + 1;
    while (k < tokens.length && tokens[k].type !== "list_item_close") if (tokens[k].type === "paragraph_open") {
      const contentToken = tokens[k + 1];
      const preToken = tokens[k - 1];
      const contentStr = String(contentToken.content ?? "");
      if (/\n\d+$/.test(contentStr)) {
        contentToken.content = contentStr.replace(/\n\d+$/, "");
        (_a2 = contentToken.children) == null ? void 0 : _a2.splice(-1, 1);
      }
      itemChildren.push({
        type: "paragraph",
        children: parseInlineTokens(contentToken.children || [], String(contentToken.content ?? ""), preToken, {
          requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
          customHtmlTags: options == null ? void 0 : options.customHtmlTags
        }),
        raw: String(contentToken.content ?? "")
      });
      k += 3;
    } else if (tokens[k].type === "blockquote_open") {
      const [blockquoteNode, newIndex] = parseBlockquote(tokens, k, options);
      itemChildren.push(blockquoteNode);
      k = newIndex;
    } else if (tokens[k].type === "bullet_list_open" || tokens[k].type === "ordered_list_open") {
      const [nestedListNode, newIndex] = parseList(tokens, k, options);
      itemChildren.push(nestedListNode);
      k = newIndex;
    } else {
      const handled = parseCommonBlockToken(tokens, k, options, containerTokenHandlers);
      if (handled) {
        itemChildren.push(handled[0]);
        k = handled[1];
      } else k += 1;
    }
    listItems.push({
      type: "list_item",
      children: itemChildren,
      raw: itemChildren.map((child) => child.raw).join("")
    });
    j = k + 1;
  } else j += 1;
  return [{
    type: "list",
    ordered: token.type === "ordered_list_open",
    start: (() => {
      if (token.attrs && token.attrs.length) {
        const found = token.attrs.find((a2) => a2[0] === "start");
        if (found) {
          const parsed = Number(found[1]);
          return Number.isFinite(parsed) && parsed !== 0 ? parsed : 1;
        }
      }
    })(),
    items: listItems,
    raw: listItems.map((item) => item.raw).join("\n")
  }, j + 1];
}
function parseAdmonition(tokens, index, match2, options) {
  const kind = String(match2[1] ?? "note");
  const title = String(match2[2] ?? kind.charAt(0).toUpperCase() + kind.slice(1));
  const admonitionChildren = [];
  let j = index + 1;
  while (j < tokens.length && tokens[j].type !== "container_close") if (tokens[j].type === "paragraph_open") {
    const contentToken = tokens[j + 1];
    if (contentToken) admonitionChildren.push({
      type: "paragraph",
      children: parseInlineTokens(contentToken.children || [], String(contentToken.content ?? ""), void 0, {
        requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
        customHtmlTags: options == null ? void 0 : options.customHtmlTags
      }),
      raw: String(contentToken.content ?? "")
    });
    j += 3;
  } else if (tokens[j].type === "bullet_list_open" || tokens[j].type === "ordered_list_open") {
    const [listNode, newIndex] = parseList(tokens, j, options);
    admonitionChildren.push(listNode);
    j = newIndex;
  } else if (tokens[j].type === "blockquote_open") {
    const [blockquoteNode, newIndex] = parseBlockquote(tokens, j, options);
    admonitionChildren.push(blockquoteNode);
    j = newIndex;
  } else {
    const handled = parseBasicBlockToken(tokens, j, options);
    if (handled) {
      admonitionChildren.push(handled[0]);
      j = handled[1];
    } else j++;
  }
  return [{
    type: "admonition",
    kind,
    title,
    children: admonitionChildren,
    raw: `:::${kind} ${title}
${admonitionChildren.map((child) => child.raw).join("\n")}
:::`
  }, j + 1];
}
function parseContainer(tokens, index, options) {
  const openToken = tokens[index];
  let kind = "note";
  let title = "";
  const typeMatch = openToken.type.match(/^container_(\w+)_open$/);
  if (typeMatch) {
    kind = typeMatch[1];
    const info = String(openToken.info ?? "").trim();
    if (info && !info.startsWith(":::")) {
      const maybe = info.replace(/* @__PURE__ */ new RegExp(`^${kind}`), "").trim();
      if (maybe) title = maybe;
    }
  } else {
    const info = String(openToken.info ?? "").trim();
    const match2 = /^:{1,3}\s*(warning|info|note|tip|danger|caution)\s*(.*)$/i.exec(info);
    if (match2) {
      kind = match2[1];
      title = String(match2[2] ?? "");
    }
  }
  if (!title) title = kind.charAt(0).toUpperCase() + kind.slice(1);
  const children = [];
  let j = index + 1;
  const closeType = /* @__PURE__ */ new RegExp(`^container_${kind}_close$`);
  while (j < tokens.length && tokens[j].type !== "container_close" && !closeType.test(tokens[j].type)) if (tokens[j].type === "paragraph_open") {
    const contentToken = tokens[j + 1];
    if (contentToken) {
      const childrenArr = contentToken.children || [];
      let i2 = -1;
      for (let k = childrenArr.length - 1; k >= 0; k--) {
        const t2 = childrenArr[k];
        if (t2.type === "text" && /:+/.test(t2.content)) {
          i2 = k;
          break;
        }
      }
      const _children = i2 !== -1 ? childrenArr.slice(0, i2) : childrenArr;
      children.push({
        type: "paragraph",
        children: parseInlineTokens(_children || [], void 0, void 0, {
          requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
          customHtmlTags: options == null ? void 0 : options.customHtmlTags
        }),
        raw: String(contentToken.content ?? "").replace(/\n:+$/, "").replace(/\n\s*:::\s*$/, "")
      });
    }
    j += 3;
  } else if (tokens[j].type === "bullet_list_open" || tokens[j].type === "ordered_list_open") {
    const [listNode, newIndex] = parseList(tokens, j, options);
    children.push(listNode);
    j = newIndex;
  } else if (tokens[j].type === "blockquote_open") {
    const [blockquoteNode, newIndex] = parseBlockquote(tokens, j, options);
    children.push(blockquoteNode);
    j = newIndex;
  } else {
    const handled = parseBasicBlockToken(tokens, j, options);
    if (handled) {
      children.push(handled[0]);
      j = handled[1];
    } else j++;
  }
  return [{
    type: "admonition",
    kind,
    title,
    children,
    raw: `:::${kind} ${title}
${children.map((c) => c.raw).join("\n")}
:::`
  }, j + 1];
}
const CONTAINER_REGEX = /^::: ?(warning|info|note|tip|danger|caution|error) ?(.*)$/;
function handleContainerOpen(tokens, index, options) {
  const token = tokens[index];
  if (token.type !== "container_open") return null;
  const match2 = CONTAINER_REGEX.exec(String(token.info ?? ""));
  if (!match2) return null;
  return parseAdmonition(tokens, index, match2, options);
}
const containerTokenHandlers = {
  parseContainer: (tokens, index, options) => parseContainer(tokens, index, options),
  matchAdmonition: handleContainerOpen
};
function parseBlockquote(tokens, index, options) {
  const blockquoteChildren = [];
  let j = index + 1;
  while (j < tokens.length && tokens[j].type !== "blockquote_close") switch (tokens[j].type) {
    case "paragraph_open": {
      const contentToken = tokens[j + 1];
      blockquoteChildren.push({
        type: "paragraph",
        children: parseInlineTokens(contentToken.children || [], String(contentToken.content ?? ""), void 0, {
          requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
          customHtmlTags: options == null ? void 0 : options.customHtmlTags
        }),
        raw: String(contentToken.content ?? "")
      });
      j += 3;
      break;
    }
    case "bullet_list_open":
    case "ordered_list_open": {
      const [listNode, newIndex] = parseList(tokens, j, options);
      blockquoteChildren.push(listNode);
      j = newIndex;
      break;
    }
    case "blockquote_open": {
      const [nestedBlockquote, newIndex] = parseBlockquote(tokens, j, options);
      blockquoteChildren.push(nestedBlockquote);
      j = newIndex;
      break;
    }
    default: {
      const handled = parseCommonBlockToken(tokens, j, options, containerTokenHandlers);
      if (handled) {
        blockquoteChildren.push(handled[0]);
        j = handled[1];
      } else j++;
      break;
    }
  }
  return [{
    type: "blockquote",
    children: blockquoteChildren,
    raw: blockquoteChildren.map((child) => child.raw).join("\n")
  }, j + 1];
}
function parseCodeBlock(token) {
  var _a2;
  if ((_a2 = token.info) == null ? void 0 : _a2.startsWith("diff")) return parseFenceToken(token);
  const contentStr = String(token.content ?? "");
  const match2 = contentStr.match(/ type="application\/vnd\.ant\.([^"]+)"/);
  if (match2 == null ? void 0 : match2[1]) token.content = contentStr.replace(/<antArtifact[^>]*>/g, "").replace(/<\/antArtifact>/g, "");
  const hasMap = Array.isArray(token.map) && token.map.length === 2;
  return {
    type: "code_block",
    language: match2 ? match2[1] : String(token.info ?? ""),
    code: String(token.content ?? ""),
    raw: String(token.content ?? ""),
    loading: !hasMap
  };
}
function parseDefinitionList(tokens, index, options) {
  const items = [];
  let j = index + 1;
  let termNodes = [];
  let definitionNodes = [];
  while (j < tokens.length && tokens[j].type !== "dl_close") if (tokens[j].type === "dt_open") {
    const termToken = tokens[j + 1];
    termNodes = parseInlineTokens(termToken.children || [], void 0, void 0, {
      requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
      customHtmlTags: options == null ? void 0 : options.customHtmlTags
    });
    j += 3;
  } else if (tokens[j].type === "dd_open") {
    let k = j + 1;
    definitionNodes = [];
    while (k < tokens.length && tokens[k].type !== "dd_close") if (tokens[k].type === "paragraph_open") {
      const contentToken = tokens[k + 1];
      definitionNodes.push({
        type: "paragraph",
        children: parseInlineTokens(contentToken.children || [], String(contentToken.content ?? ""), void 0, {
          requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
          customHtmlTags: options == null ? void 0 : options.customHtmlTags
        }),
        raw: String(contentToken.content ?? "")
      });
      k += 3;
    } else k++;
    if (termNodes.length > 0) {
      items.push({
        type: "definition_item",
        term: termNodes,
        definition: definitionNodes,
        raw: `${termNodes.map((term) => term.raw).join("")}: ${definitionNodes.map((def) => def.raw).join("\n")}`
      });
      termNodes = [];
    }
    j = k + 1;
  } else j++;
  return [{
    type: "definition_list",
    items,
    raw: items.map((item) => item.raw).join("\n")
  }, j + 1];
}
function parseFootnote(tokens, index, options) {
  const meta = tokens[index].meta ?? {};
  const id = String((meta == null ? void 0 : meta.label) ?? "0");
  const footnoteChildren = [];
  let j = index + 1;
  while (j < tokens.length && tokens[j].type !== "footnote_close") if (tokens[j].type === "paragraph_open") {
    const contentToken = tokens[j + 1];
    const children = contentToken.children || [];
    if (tokens[j + 2].type === "footnote_anchor") children.push(tokens[j + 2]);
    footnoteChildren.push({
      type: "paragraph",
      children: parseInlineTokens(contentToken.children || [], String(contentToken.content ?? ""), void 0, {
        requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
        customHtmlTags: options == null ? void 0 : options.customHtmlTags
      }),
      raw: String(contentToken.content ?? "")
    });
    j += 3;
  } else j++;
  return [{
    type: "footnote",
    id,
    children: footnoteChildren,
    raw: `[^${id}]: ${footnoteChildren.map((child) => child.raw).join("\n")}`
  }, j + 1];
}
function parseHeading(tokens, index, options) {
  var _a2;
  const token = tokens[index];
  const attrs = token == null ? void 0 : token.attrs;
  const attrsRecord = Array.isArray(attrs) && attrs.length ? Object.fromEntries(attrs.filter((pair) => Array.isArray(pair) && pair.length >= 1 && pair[0]).map(([name, value]) => [String(name), value == null || value === "" ? true : String(value)])) : void 0;
  const levelStr = String(((_a2 = token.tag) == null ? void 0 : _a2.substring(1)) ?? "1");
  const headingLevel = Number.parseInt(levelStr, 10);
  const headingContentToken = tokens[index + 1];
  const headingContent = String(headingContentToken.content ?? "");
  return {
    type: "heading",
    level: headingLevel,
    text: headingContent,
    ...attrsRecord ? { attrs: attrsRecord } : {},
    children: parseInlineTokens(headingContentToken.children || [], headingContent, void 0, {
      requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
      customHtmlTags: options == null ? void 0 : options.customHtmlTags
    }),
    raw: headingContent
  };
}
const VOID_TAGS = /* @__PURE__ */ new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
const CLOSE_TAG_RE_CACHE = /* @__PURE__ */ new Map();
function parseHtmlBlock(token) {
  var _a2;
  const raw = String(token.content ?? "");
  if (/^\s*<!--/.test(raw) || /^\s*<!/.test(raw) || /^\s*<\?/.test(raw)) return {
    type: "html_block",
    content: raw,
    raw,
    tag: "",
    loading: false
  };
  const tag = (((_a2 = raw.match(/^\s*<([A-Z][\w:-]*)/i)) == null ? void 0 : _a2[1]) || "").toLowerCase();
  if (!tag) return {
    type: "html_block",
    content: raw,
    raw,
    tag: "",
    loading: false
  };
  const selfClosing = /^\s*<[^>]*\/\s*>/.test(raw);
  const isVoid = VOID_TAGS.has(tag);
  let closeRe = CLOSE_TAG_RE_CACHE.get(tag);
  if (!closeRe) {
    closeRe = new RegExp(`<\\s*\\/\\s*${tag}\\s*>`, "i");
    CLOSE_TAG_RE_CACHE.set(tag, closeRe);
  }
  const hasClosing = closeRe.test(raw);
  const loading = !(isVoid || selfClosing || hasClosing);
  return {
    type: "html_block",
    content: loading ? `${raw.replace(/<[^>]*$/, "")}
</${tag}>` : raw,
    raw,
    tag,
    loading
  };
}
function parseMathBlock(token) {
  const content = String(token.content ?? "");
  const raw = token.raw === "$$" ? `$$${content}$$` : String(token.raw ?? "");
  return {
    type: "math_block",
    content,
    loading: !!token.loading,
    raw,
    markup: token.markup
  };
}
function extractAlign(attrs) {
  if (!attrs) return "left";
  for (const a2 of attrs) {
    if (!a2) continue;
    const [key, val] = a2;
    if (!val) continue;
    const value = String(val).trim().toLowerCase();
    if (key === "style") {
      const m = /text-align\s*:\s*(left|right|center)/i.exec(value);
      if (m) return m[1].toLowerCase();
    }
  }
  return "left";
}
function parseTable(tokens, index, options) {
  let j = index + 1;
  let headerRow = null;
  const rows = [];
  let isHeader = false;
  while (j < tokens.length && tokens[j].type !== "table_close") if (tokens[j].type === "thead_open") {
    isHeader = true;
    j++;
  } else if (tokens[j].type === "thead_close") {
    isHeader = false;
    j++;
  } else if (tokens[j].type === "tbody_open" || tokens[j].type === "tbody_close") j++;
  else if (tokens[j].type === "tr_open") {
    const cells = [];
    let k = j + 1;
    while (k < tokens.length && tokens[k].type !== "tr_close") if (tokens[k].type === "th_open" || tokens[k].type === "td_open") {
      const isHeaderCell = tokens[k].type === "th_open";
      const contentToken = tokens[k + 1];
      const content = String(contentToken.content ?? "");
      const align = extractAlign(tokens[k].attrs);
      cells.push({
        type: "table_cell",
        header: isHeaderCell || isHeader,
        children: parseInlineTokens(contentToken.children || [], content, void 0, {
          requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
          customHtmlTags: options == null ? void 0 : options.customHtmlTags
        }),
        raw: content,
        align
      });
      k += 3;
    } else k++;
    const rowNode = {
      type: "table_row",
      cells,
      raw: cells.map((cell) => cell.raw).join("|")
    };
    if (isHeader) headerRow = rowNode;
    else rows.push(rowNode);
    j = k + 1;
  } else j++;
  if (!headerRow) headerRow = {
    type: "table_row",
    cells: [],
    raw: ""
  };
  return [{
    type: "table",
    header: headerRow,
    rows,
    loading: tokens[index].loading ?? false,
    raw: [headerRow, ...rows].map((row) => row.raw).join("\n")
  }, j + 1];
}
function parseThematicBreak() {
  return {
    type: "thematic_break",
    raw: "---"
  };
}
function parseVmrContainer(tokens, index, options) {
  const attrs = tokens[index].attrs;
  let name = "";
  const containerAttrs = {};
  if (attrs) {
    for (const [key, value] of attrs) if (key === "class") {
      const match2 = value.match(/(?:\s|^)vmr-container-(\S+)/);
      if (match2) name = match2[1];
    } else if (key.startsWith("data-")) {
      const attrName = key.slice(5);
      try {
        containerAttrs[attrName] = JSON.parse(value);
      } catch {
        containerAttrs[attrName] = value;
      }
    }
  }
  const children = [];
  let j = index + 1;
  while (j < tokens.length && tokens[j].type !== "vmr_container_close") if (tokens[j].type === "paragraph_open") {
    const contentToken = tokens[j + 1];
    if (contentToken) {
      const childrenArr = contentToken.children || [];
      children.push({
        type: "paragraph",
        children: parseInlineTokens(childrenArr || [], void 0, void 0, {
          requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
          customHtmlTags: options == null ? void 0 : options.customHtmlTags
        }),
        raw: String(contentToken.content ?? "")
      });
    }
    j += 3;
  } else if (tokens[j].type === "bullet_list_open" || tokens[j].type === "ordered_list_open") {
    const [listNode, newIndex] = parseList(tokens, j, options);
    children.push(listNode);
    j = newIndex;
  } else if (tokens[j].type === "blockquote_open") {
    const [blockquoteNode, newIndex] = parseBlockquote(tokens, j, options);
    children.push(blockquoteNode);
    j = newIndex;
  } else {
    const handled = parseBasicBlockToken(tokens, j, options);
    if (handled) {
      children.push(handled[0]);
      j = handled[1];
    } else j++;
  }
  const hasCloseToken = j < tokens.length && tokens[j].type === "vmr_container_close";
  const closed = hasCloseToken || !!(options == null ? void 0 : options.final);
  let raw = `::: ${name}`;
  if (Object.keys(containerAttrs).length > 0) raw += ` ${JSON.stringify(containerAttrs)}`;
  raw += "\n";
  if (children.length > 0) {
    raw += children.map((c) => c.raw).join("\n");
    raw += "\n";
  }
  raw += ":::";
  return [{
    type: "vmr_container",
    name,
    loading: !closed,
    attrs: Object.keys(containerAttrs).length > 0 ? containerAttrs : void 0,
    children,
    raw
  }, hasCloseToken ? j + 1 : j];
}
function findTagCloseIndexOutsideQuotes(input) {
  let inSingle = false;
  let inDouble = false;
  for (let i2 = 0; i2 < input.length; i2++) {
    const ch = input[i2];
    if (ch === "\\") {
      i2++;
      continue;
    }
    if (!inDouble && ch === "'") {
      inSingle = !inSingle;
      continue;
    }
    if (!inSingle && ch === '"') {
      inDouble = !inDouble;
      continue;
    }
    if (!inSingle && !inDouble && ch === ">") return i2;
  }
  return -1;
}
function stripWrapperNewlines(s2) {
  return s2.replace(/^\r?\n/, "").replace(/\r?\n$/, "");
}
function stripTrailingPartialClosingTag(inner, tag) {
  if (!inner || !tag) return inner;
  const re2 = new RegExp(String.raw`[\t ]*<\s*\/\s*${tag}[^>]*$`, "i");
  return inner.replace(re2, "");
}
function findNextCustomHtmlBlockFromSource(source, tag, startIndex) {
  if (!source || !tag) return null;
  const lowerTag = tag.toLowerCase();
  const openRe = new RegExp(String.raw`<\s*${lowerTag}(?=\s|>|/)`, "gi");
  openRe.lastIndex = Math.max(0, startIndex || 0);
  const openMatch = openRe.exec(source);
  if (!openMatch || openMatch.index == null) return null;
  const openStart = openMatch.index;
  const openSlice = source.slice(openStart);
  const openEndRel = findTagCloseIndexOutsideQuotes(openSlice);
  if (openEndRel === -1) return null;
  const openEnd = openStart + openEndRel;
  if (/\/\s*>\s*$/.test(openSlice.slice(0, openEndRel + 1))) {
    const end = openEnd + 1;
    return {
      raw: source.slice(openStart, end),
      end
    };
  }
  let depth = 1;
  let i2 = openEnd + 1;
  const isOpenAt = (pos) => {
    const s2 = source.slice(pos);
    return new RegExp(String.raw`^<\s*${lowerTag}(?=\s|>|/)`, "i").test(s2);
  };
  const isCloseAt = (pos) => {
    const s2 = source.slice(pos);
    return new RegExp(String.raw`^<\s*\/\s*${lowerTag}(?=\s|>)`, "i").test(s2);
  };
  while (i2 < source.length) {
    const lt2 = source.indexOf("<", i2);
    if (lt2 === -1) return {
      raw: source.slice(openStart),
      end: source.length
    };
    if (isCloseAt(lt2)) {
      const gt2 = source.indexOf(">", lt2);
      if (gt2 === -1) return null;
      depth--;
      if (depth === 0) {
        const end = gt2 + 1;
        return {
          raw: source.slice(openStart, end),
          end
        };
      }
      i2 = gt2 + 1;
      continue;
    }
    if (isOpenAt(lt2)) {
      const rel = findTagCloseIndexOutsideQuotes(source.slice(lt2));
      if (rel === -1) return null;
      depth++;
      i2 = lt2 + rel + 1;
      continue;
    }
    i2 = lt2 + 1;
  }
  return {
    raw: source.slice(openStart),
    end: source.length
  };
}
function clampNonNegative(n2) {
  return Number.isFinite(n2) && n2 > 0 ? n2 : 0;
}
function lineToIndex(source, line) {
  const targetLine = clampNonNegative(line);
  if (!source || targetLine <= 0) return 0;
  let currentLine = 0;
  for (let i2 = 0; i2 < source.length; i2++) if (source[i2] === "\n") {
    currentLine++;
    if (currentLine === targetLine) return i2 + 1;
  }
  return source.length;
}
function parseBasicBlockToken(tokens, index, options) {
  var _a2;
  const token = tokens[index];
  switch (token.type) {
    case "heading_open":
      return [parseHeading(tokens, index, options), index + 3];
    case "code_block":
      return [parseCodeBlock(token), index + 1];
    case "fence":
      return [parseFenceToken(token), index + 1];
    case "math_block":
      return [parseMathBlock(token), index + 1];
    case "html_block": {
      const htmlBlockNode = parseHtmlBlock(token);
      if (htmlBlockNode.tag && !buildAllowedHtmlTagSet(options).has(htmlBlockNode.tag) && htmlBlockNode.loading) {
        const content = String((token == null ? void 0 : token.content) ?? "").replace(/\n+$/, "");
        return [{
          type: "paragraph",
          children: content ? [{
            type: "text",
            content,
            raw: content
          }] : [],
          raw: content
        }, index + 1];
      }
      if ((options == null ? void 0 : options.customHtmlTags) && htmlBlockNode.tag) {
        if (new Set(options.customHtmlTags.map((t2) => {
          const m = String(t2 ?? "").trim().match(/^[<\s/]*([A-Z][\w-]*)/i);
          return m ? m[1].toLowerCase() : "";
        }).filter(Boolean)).has(htmlBlockNode.tag)) {
          const tag = htmlBlockNode.tag;
          const source = String((options == null ? void 0 : options.__sourceMarkdown) ?? "");
          const cursor = Number((options == null ? void 0 : options.__customHtmlBlockCursor) ?? 0);
          const mappedLineStart = Array.isArray(token.map) ? lineToIndex(source, Number(((_a2 = token.map) == null ? void 0 : _a2[0]) ?? 0)) : 0;
          const fromSource = findNextCustomHtmlBlockFromSource(source, tag, Math.max(clampNonNegative(cursor), clampNonNegative(mappedLineStart)));
          if (fromSource) options.__customHtmlBlockCursor = fromSource.end;
          const rawHtml = String((fromSource == null ? void 0 : fromSource.raw) ?? htmlBlockNode.content ?? "");
          const openEnd = findTagCloseIndexOutsideQuotes(rawHtml);
          const closeMatch = new RegExp(`<\\s*\\/\\s*${tag}\\s*>`, "i").exec(rawHtml);
          const closeIndex = closeMatch ? closeMatch.index : -1;
          let inner = "";
          if (openEnd !== -1) if (closeIndex !== -1 && openEnd < closeIndex) inner = rawHtml.slice(openEnd + 1, closeIndex);
          else inner = rawHtml.slice(openEnd + 1);
          if (closeIndex === -1) inner = stripTrailingPartialClosingTag(inner, tag);
          const attrs = [];
          const openTag = openEnd !== -1 ? rawHtml.slice(0, openEnd + 1) : rawHtml;
          const attrRegex = /\s([\w:-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
          let m;
          while ((m = attrRegex.exec(openTag)) !== null) {
            const name = m[1];
            if (!name || name.toLowerCase() === tag) continue;
            const value = m[2] || m[3] || m[4] || "";
            attrs.push([name, value]);
          }
          return [{
            type: tag,
            tag,
            content: stripWrapperNewlines(inner),
            raw: String((fromSource == null ? void 0 : fromSource.raw) ?? htmlBlockNode.raw ?? rawHtml),
            loading: htmlBlockNode.loading,
            attrs: attrs.length ? attrs : void 0
          }, index + 1];
        }
      }
      return [htmlBlockNode, index + 1];
    }
    case "table_open": {
      const [tableNode, newIndex] = parseTable(tokens, index, options);
      return [tableNode, newIndex];
    }
    case "dl_open": {
      const [definitionListNode, newIndex] = parseDefinitionList(tokens, index, options);
      return [definitionListNode, newIndex];
    }
    case "footnote_open": {
      const [footnoteNode, newIndex] = parseFootnote(tokens, index, options);
      return [footnoteNode, newIndex];
    }
    case "hr":
      return [parseThematicBreak(), index + 1];
  }
  return null;
}
function parseCommonBlockToken(tokens, index, options, handlers) {
  const basicResult = parseBasicBlockToken(tokens, index, options);
  if (basicResult) return basicResult;
  switch (tokens[index].type) {
    case "container_warning_open":
    case "container_info_open":
    case "container_note_open":
    case "container_tip_open":
    case "container_danger_open":
    case "container_caution_open":
    case "container_error_open":
      if (handlers == null ? void 0 : handlers.parseContainer) return handlers.parseContainer(tokens, index, options);
      break;
    case "container_open":
      if (handlers == null ? void 0 : handlers.matchAdmonition) {
        const result = handlers.matchAdmonition(tokens, index, options);
        if (result) return result;
      }
      break;
    case "vmr_container_open":
      return parseVmrContainer(tokens, index, options);
  }
  return null;
}
function parseHardBreak() {
  return {
    type: "hardbreak",
    raw: "\\\n"
  };
}
function parseParagraph(tokens, index, options) {
  const paragraphContentToken = tokens[index + 1];
  const paragraphContent = String(paragraphContentToken.content ?? "");
  return {
    type: "paragraph",
    children: parseInlineTokens(paragraphContentToken.children || [], paragraphContent, void 0, {
      requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
      customHtmlTags: options == null ? void 0 : options.customHtmlTags
    }),
    raw: paragraphContent
  };
}
const STANDARD_HTML_TAGS = /* @__PURE__ */ new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
  "a",
  "abbr",
  "b",
  "bdi",
  "bdo",
  "button",
  "cite",
  "code",
  "data",
  "del",
  "dfn",
  "em",
  "font",
  "i",
  "ins",
  "kbd",
  "label",
  "mark",
  "q",
  "s",
  "samp",
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "time",
  "u",
  "var",
  "article",
  "aside",
  "blockquote",
  "div",
  "details",
  "figcaption",
  "figure",
  "footer",
  "header",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "li",
  "main",
  "nav",
  "ol",
  "p",
  "pre",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "th",
  "thead",
  "tr",
  "ul",
  "svg",
  "g",
  "path"
]);
function normalizeTagName(t2) {
  const raw = String(t2 ?? "").trim();
  if (!raw) return "";
  const m = raw.match(/^[<\s/]*([A-Z][\w-]*)/i);
  return m ? m[1].toLowerCase() : "";
}
function buildAllowedHtmlTagSet(options) {
  const set2 = new Set(STANDARD_HTML_TAGS);
  const custom = options == null ? void 0 : options.customHtmlTags;
  if (Array.isArray(custom)) for (const t2 of custom) {
    const name = normalizeTagName(t2);
    if (name) set2.add(name);
  }
  return set2;
}
function stripDanglingHtmlLikeTail(markdown) {
  const isWs = (ch) => ch === " " || ch === "	" || ch === "\n" || ch === "\r";
  const isLikelyHtmlTagPrefix = (tail$1) => {
    if (!tail$1 || tail$1[0] !== "<") return false;
    if (tail$1.includes(">")) return false;
    let i2 = 1;
    if (i2 < tail$1.length && isWs(tail$1[i2])) return false;
    if (tail$1[i2] === "/") {
      i2++;
      if (i2 < tail$1.length && isWs(tail$1[i2])) return false;
    }
    const isAlpha = (ch) => {
      const c = ch.charCodeAt(0);
      return c >= 65 && c <= 90 || c >= 97 && c <= 122;
    };
    const isDigit = (ch) => {
      const c = ch.charCodeAt(0);
      return c >= 48 && c <= 57;
    };
    const isNameStart = (ch) => ch === "!" || isAlpha(ch);
    const isNameChar = (ch) => isAlpha(ch) || isDigit(ch) || ch === ":" || ch === "-";
    const isAttrStart = (ch) => isAlpha(ch) || isDigit(ch) || ch === "_" || ch === "." || ch === ":" || ch === "-";
    const isAttrChar = isAttrStart;
    if (i2 >= tail$1.length || !isNameStart(tail$1[i2])) return false;
    i2++;
    while (i2 < tail$1.length && isNameChar(tail$1[i2])) i2++;
    while (i2 < tail$1.length) {
      while (i2 < tail$1.length && isWs(tail$1[i2])) i2++;
      if (i2 >= tail$1.length) return true;
      if (tail$1[i2] === "/") {
        i2++;
        while (i2 < tail$1.length && isWs(tail$1[i2])) i2++;
        return i2 >= tail$1.length;
      }
      if (!isAttrStart(tail$1[i2])) return false;
      i2++;
      while (i2 < tail$1.length && isAttrChar(tail$1[i2])) i2++;
      while (i2 < tail$1.length && isWs(tail$1[i2])) i2++;
      if (i2 < tail$1.length && tail$1[i2] === "=") {
        i2++;
        while (i2 < tail$1.length && isWs(tail$1[i2])) i2++;
        if (i2 >= tail$1.length) return true;
        const quote = tail$1[i2];
        if (quote === '"' || quote === "'") {
          i2++;
          while (i2 < tail$1.length && tail$1[i2] !== quote) i2++;
          if (i2 >= tail$1.length) return true;
          i2++;
        } else {
          while (i2 < tail$1.length) {
            const ch = tail$1[i2];
            if (isWs(ch) || ch === "<" || ch === ">" || ch === '"' || ch === "'" || ch === "`") break;
            i2++;
          }
          if (i2 >= tail$1.length) return true;
        }
      }
    }
    return true;
  };
  const isInsideFencedCodeBlock = (src, pos) => {
    let inFence = false;
    let fenceChar = "";
    let fenceLen = 0;
    const isIndentWs = (ch) => ch === " " || ch === "	";
    const parseFenceMarker = (line) => {
      let i2 = 0;
      while (i2 < line.length && isIndentWs(line[i2])) i2++;
      const ch = line[i2];
      if (ch !== "`" && ch !== "~") return null;
      let j = i2;
      while (j < line.length && line[j] === ch) j++;
      const len = j - i2;
      if (len < 3) return null;
      return {
        markerChar: ch,
        markerLen: len,
        rest: line.slice(j)
      };
    };
    const stripBlockquotePrefix = (line) => {
      let i2 = 0;
      while (i2 < line.length && isIndentWs(line[i2])) i2++;
      let saw = false;
      while (i2 < line.length && line[i2] === ">") {
        saw = true;
        i2++;
        while (i2 < line.length && isIndentWs(line[i2])) i2++;
      }
      return saw ? line.slice(i2) : null;
    };
    const matchFence = (rawLine) => {
      const direct = parseFenceMarker(rawLine);
      if (direct) return direct;
      const afterQuote = stripBlockquotePrefix(rawLine);
      if (afterQuote == null) return null;
      return parseFenceMarker(afterQuote);
    };
    let offset = 0;
    const lines = src.split(/\r?\n/);
    for (const line of lines) {
      const lineStart = offset;
      const lineEnd = offset + line.length;
      if (pos < lineStart) break;
      const fenceMatch = matchFence(line);
      if (fenceMatch) {
        const markerChar = fenceMatch.markerChar;
        const markerLen = fenceMatch.markerLen;
        if (inFence) {
          if (markerChar === fenceChar && markerLen >= fenceLen) {
            if (/^\s*$/.test(fenceMatch.rest)) {
              inFence = false;
              fenceChar = "";
              fenceLen = 0;
            }
          }
        } else {
          inFence = true;
          fenceChar = markerChar;
          fenceLen = markerLen;
        }
      }
      if (pos <= lineEnd) break;
      offset = lineEnd + 1;
    }
    return inFence;
  };
  const s2 = String(markdown ?? "");
  const lastLt = s2.lastIndexOf("<");
  if (lastLt === -1) return s2;
  if (isInsideFencedCodeBlock(s2, lastLt)) return s2;
  if (lastLt > 0) {
    const prev = s2[lastLt - 1];
    const prevIsWs = prev === " " || prev === "	" || prev === "\n" || prev === "\r";
    const prev2 = s2[lastLt - 2];
    if (!prevIsWs && !((prev === "n" || prev === "r") && prev2 === "\\")) return s2;
  }
  const tail = s2.slice(lastLt);
  if (tail.includes(">")) return s2;
  if (tail.length > 1 && (tail[1] === " " || tail[1] === "	" || tail[1] === "\n" || tail[1] === "\r")) return s2;
  if (!isLikelyHtmlTagPrefix(tail)) return s2;
  return s2.slice(0, lastLt);
}
function normalizeCustomHtmlOpeningTagSameLine(markdown, tags) {
  if (!markdown || !tags.length) return markdown;
  const tagSet = new Set(tags.map((t2) => String(t2 ?? "").toLowerCase()));
  if (!tagSet.size) return markdown;
  const isIndentWs = (ch) => ch === " " || ch === "	";
  const isNameChar = (ch) => {
    const c = ch.charCodeAt(0);
    return c >= 65 && c <= 90 || c >= 97 && c <= 122 || c >= 48 && c <= 57 || ch === "_" || ch === "-";
  };
  const trimStartIndentWs = (s2) => {
    let i2 = 0;
    while (i2 < s2.length && isIndentWs(s2[i2])) i2++;
    return s2.slice(i2);
  };
  const hasClosingTagOnLine = (line, from, tag) => {
    const lowerTag = tag.toLowerCase();
    let pos = line.indexOf("<", from);
    while (pos !== -1) {
      let i2 = pos + 1;
      while (i2 < line.length && isIndentWs(line[i2])) i2++;
      if (i2 >= line.length || line[i2] !== "/") {
        pos = line.indexOf("<", pos + 1);
        continue;
      }
      i2++;
      while (i2 < line.length && isIndentWs(line[i2])) i2++;
      if (i2 + lowerTag.length > line.length) {
        pos = line.indexOf("<", pos + 1);
        continue;
      }
      let matched = true;
      for (let j = 0; j < lowerTag.length; j++) {
        const ch = line[i2 + j];
        if ((ch >= "A" && ch <= "Z" ? String.fromCharCode(ch.charCodeAt(0) + 32) : ch) !== lowerTag[j]) {
          matched = false;
          break;
        }
      }
      if (!matched) {
        pos = line.indexOf("<", pos + 1);
        continue;
      }
      let k = i2 + lowerTag.length;
      if (k < line.length && isNameChar(line[k])) {
        pos = line.indexOf("<", pos + 1);
        continue;
      }
      while (k < line.length && isIndentWs(line[k])) k++;
      if (k < line.length && line[k] === ">") return true;
      pos = line.indexOf("<", pos + 1);
    }
    return false;
  };
  const normalizeLine = (line) => {
    let i2 = 0;
    while (i2 < line.length && isIndentWs(line[i2])) i2++;
    if (i2 >= line.length || line[i2] !== "<") return line;
    i2++;
    while (i2 < line.length && isIndentWs(line[i2])) i2++;
    if (i2 >= line.length || line[i2] === "/") return line;
    const nameStart = i2;
    while (i2 < line.length && isNameChar(line[i2])) i2++;
    if (i2 === nameStart) return line;
    const tagName = line.slice(nameStart, i2).toLowerCase();
    if (!tagSet.has(tagName)) return line;
    const gt2 = line.indexOf(">", i2);
    if (gt2 === -1) return line;
    if (hasClosingTagOnLine(line, gt2 + 1, tagName)) return line;
    const rest = trimStartIndentWs(line.slice(gt2 + 1));
    if (!rest) return line;
    return `${line.slice(0, gt2 + 1)}
${rest}`;
  };
  let out = "";
  let idx = 0;
  while (idx < markdown.length) {
    const nl = markdown.indexOf("\n", idx);
    if (nl === -1) {
      out += normalizeLine(markdown.slice(idx));
      break;
    }
    const isCrlf = nl > idx && markdown[nl - 1] === "\r";
    const lineEnd = isCrlf ? nl - 1 : nl;
    const line = markdown.slice(idx, lineEnd);
    out += normalizeLine(line);
    out += isCrlf ? "\r\n" : "\n";
    idx = nl + 1;
  }
  return out;
}
function ensureBlankLineBeforeCustomHtmlBlocks(markdown, tags) {
  if (!markdown || !tags.length) return markdown;
  const tagSet = new Set(tags.map((t2) => String(t2 ?? "").toLowerCase()));
  if (!tagSet.size) return markdown;
  const isIndentWs = (ch) => ch === " " || ch === "	";
  const isIndentedCodeLine = (line) => {
    if (!line) return false;
    if (line[0] === "	") return true;
    let spaces = 0;
    for (let i2 = 0; i2 < line.length; i2++) {
      const ch = line[i2];
      if (ch === " ") {
        spaces++;
        if (spaces >= 4) return true;
        continue;
      }
      if (ch === "	") return true;
      break;
    }
    return false;
  };
  const isNameChar = (ch) => {
    const c = ch.charCodeAt(0);
    return c >= 65 && c <= 90 || c >= 97 && c <= 122 || c >= 48 && c <= 57 || ch === "_" || ch === "-" || ch === ":";
  };
  const trimStartIndentWs = (s2) => {
    let i2 = 0;
    while (i2 < s2.length && isIndentWs(s2[i2])) i2++;
    return s2.slice(i2);
  };
  const parseBlockquotePrefix = (rawLine) => {
    let i2 = 0;
    let saw = false;
    let prefixEnd = 0;
    while (i2 < rawLine.length) {
      while (i2 < rawLine.length && isIndentWs(rawLine[i2])) i2++;
      if (i2 >= rawLine.length || rawLine[i2] !== ">") break;
      saw = true;
      i2++;
      while (i2 < rawLine.length && isIndentWs(rawLine[i2])) i2++;
      prefixEnd = i2;
    }
    if (!saw) return null;
    const prefix = rawLine.slice(0, prefixEnd);
    return {
      prefix,
      key: prefix.replace(/[ \t]+$/, ""),
      content: rawLine.slice(prefixEnd)
    };
  };
  const previousLineLooksHtmlish = (line) => {
    return trimStartIndentWs(line).startsWith("<");
  };
  const lineIsBlank = (line) => {
    for (let i2 = 0; i2 < line.length; i2++) {
      const ch = line[i2];
      if (ch !== " " && ch !== "	") return false;
    }
    return true;
  };
  const parseOpeningCustomTagName = (line) => {
    if (isIndentedCodeLine(line)) return "";
    const trimmed = trimStartIndentWs(line);
    if (!trimmed.startsWith("<")) return "";
    let i2 = 1;
    while (i2 < trimmed.length && isIndentWs(trimmed[i2])) i2++;
    if (i2 >= trimmed.length) return "";
    if (trimmed[i2] === "/" || trimmed[i2] === "!" || trimmed[i2] === "?") return "";
    const nameStart = i2;
    while (i2 < trimmed.length && isNameChar(trimmed[i2])) i2++;
    if (i2 === nameStart) return "";
    const name = trimmed.slice(nameStart, i2).toLowerCase();
    if (!tagSet.has(name)) return "";
    const next = trimmed[i2];
    if (next && next !== " " && next !== "	" && next !== ">" && next !== "/") return "";
    return name;
  };
  const parseLineStartCustomTag = (line) => {
    if (isIndentedCodeLine(line)) return null;
    const trimmed = trimStartIndentWs(line);
    if (!trimmed.startsWith("<")) return null;
    let i2 = 1;
    while (i2 < trimmed.length && isIndentWs(trimmed[i2])) i2++;
    if (i2 >= trimmed.length) return null;
    const isClose = trimmed[i2] === "/";
    if (isClose) {
      i2++;
      while (i2 < trimmed.length && isIndentWs(trimmed[i2])) i2++;
    }
    const next = trimmed[i2];
    if (!next || next === "!" || next === "?") return null;
    const nameStart = i2;
    while (i2 < trimmed.length && isNameChar(trimmed[i2])) i2++;
    if (i2 === nameStart) return null;
    const name = trimmed.slice(nameStart, i2).toLowerCase();
    if (!tagSet.has(name)) return null;
    const boundary = trimmed[i2];
    if (boundary && boundary !== " " && boundary !== "	" && boundary !== ">" && boundary !== "/") return null;
    if (isClose) return {
      type: "close",
      name
    };
    if (/\/\s*>\s*$/.test(trimmed)) return {
      type: "open",
      name,
      complete: true
    };
    const gt2 = trimmed.indexOf(">", i2);
    if (gt2 !== -1) {
      const after = trimmed.slice(gt2 + 1);
      if (new RegExp(`<\\s*\\/\\s*${name}\\s*>`, "i").test(after)) return {
        type: "open",
        name,
        complete: true
      };
    }
    return {
      type: "open",
      name,
      complete: false
    };
  };
  let inFence = false;
  let fenceChar = "";
  let fenceLen = 0;
  const parseFenceMarker = (line) => {
    let i2 = 0;
    while (i2 < line.length && isIndentWs(line[i2])) i2++;
    const ch = line[i2];
    if (ch !== "`" && ch !== "~") return null;
    let j = i2;
    while (j < line.length && line[j] === ch) j++;
    const len = j - i2;
    if (len < 3) return null;
    return {
      markerChar: ch,
      markerLen: len,
      rest: line.slice(j)
    };
  };
  const fenceMatchLine = (rawLine) => parseFenceMarker(rawLine);
  let out = "";
  let idx = 0;
  let prevLineBlank = true;
  let prevLineHtmlish = false;
  let lastNewline = "\n";
  const customBlockStack = [];
  let prevQuoteKey = "";
  while (idx < markdown.length) {
    const nl = markdown.indexOf("\n", idx);
    const hasNl = nl !== -1;
    const isCrlf = hasNl && nl > idx && markdown[nl - 1] === "\r";
    const lineEnd = hasNl ? isCrlf ? nl - 1 : nl : markdown.length;
    const line = markdown.slice(idx, lineEnd);
    const newline$1 = hasNl ? isCrlf ? "\r\n" : "\n" : "";
    const blockquote$1 = parseBlockquotePrefix(line);
    const quoteKey = (blockquote$1 == null ? void 0 : blockquote$1.key) ?? "";
    const contentLine = (blockquote$1 == null ? void 0 : blockquote$1.content) ?? line;
    const fenceMatch = fenceMatchLine(contentLine);
    if (fenceMatch) if (inFence) {
      if (fenceMatch.markerChar === fenceChar && fenceMatch.markerLen >= fenceLen) {
        if (/^\s*$/.test(fenceMatch.rest)) {
          inFence = false;
          fenceChar = "";
          fenceLen = 0;
        }
      }
    } else {
      inFence = true;
      fenceChar = fenceMatch.markerChar;
      fenceLen = fenceMatch.markerLen;
    }
    const insideCustomBlock = customBlockStack.length > 0;
    if (!inFence && !insideCustomBlock) {
      if (parseOpeningCustomTagName(contentLine) && !prevLineBlank && !prevLineHtmlish) {
        if (quoteKey && prevQuoteKey && quoteKey === prevQuoteKey) out += `${quoteKey}${lastNewline}`;
        else if (!quoteKey) out += lastNewline;
      }
    }
    out += line;
    out += newline$1;
    if (newline$1) lastNewline = newline$1;
    if (!inFence) {
      const tag = parseLineStartCustomTag(contentLine);
      if (tag) {
        if (tag.type === "open") {
          if (!tag.complete) customBlockStack.push(tag.name);
        } else for (let j = customBlockStack.length - 1; j >= 0; j--) if (customBlockStack[j] === tag.name) {
          customBlockStack.length = j;
          break;
        }
      }
    }
    const blank = lineIsBlank(contentLine);
    prevLineBlank = blank;
    prevLineHtmlish = !blank && previousLineLooksHtmlish(contentLine);
    prevQuoteKey = quoteKey;
    idx = hasNl ? nl + 1 : markdown.length;
  }
  return out;
}
function parseMarkdownToStructure(markdown, md, options = {}) {
  var _a2;
  const isFinal = !!options.final;
  let safeMarkdown = (markdown ?? "").toString().replace(/([^\\])\r(ight|ho)/g, "$1\\r$2").replace(/([^\\])\n(abla|eq|ot|exists)/g, "$1\\n$2");
  if (!isFinal) {
    if (safeMarkdown.endsWith("- *")) safeMarkdown = safeMarkdown.replace(/- \*$/, "- \\*");
    if (/(?:^|\n)\s*-\s*$/.test(safeMarkdown)) safeMarkdown = safeMarkdown.replace(/(?:^|\n)\s*-\s*$/, (m) => {
      return m.startsWith("\n") ? "\n" : "";
    });
    else if (/(?:^|\n)\s*--\s*$/.test(safeMarkdown)) safeMarkdown = safeMarkdown.replace(/(?:^|\n)\s*--\s*$/, (m) => {
      return m.startsWith("\n") ? "\n" : "";
    });
    else if (/(?:^|\n)\s*>\s*$/.test(safeMarkdown)) safeMarkdown = safeMarkdown.replace(/(?:^|\n)\s*>\s*$/, (m) => {
      return m.startsWith("\n") ? "\n" : "";
    });
    else if (/\n\s*[*+]\s*$/.test(safeMarkdown)) safeMarkdown = safeMarkdown.replace(/\n\s*[*+]\s*$/, "\n");
    else if (/\n[[(]\n*$/.test(safeMarkdown)) safeMarkdown = safeMarkdown.replace(/(\n\[|\n\()+\n*$/g, "\n");
  }
  if ((_a2 = options.customHtmlTags) == null ? void 0 : _a2.length) {
    const tags = options.customHtmlTags.map((t2) => String(t2 ?? "").trim()).filter(Boolean).map((t2) => {
      var _a3;
      return (((_a3 = t2.match(/^[<\s/]*([A-Z][\w-]*)/i)) == null ? void 0 : _a3[1]) ?? "").toLowerCase();
    }).filter(Boolean);
    if (tags.length) {
      safeMarkdown = normalizeCustomHtmlOpeningTagSameLine(safeMarkdown, tags);
      safeMarkdown = ensureBlankLineBeforeCustomHtmlBlocks(safeMarkdown, tags);
      if (!safeMarkdown.includes("</")) ;
      else for (const tag of tags) {
        const re2 = new RegExp(String.raw`(^[\t ]*<\s*\/\s*${tag}\s*>[\t ]*)(\r?\n)(?![\t ]*\r?\n|$)`, "gim");
        safeMarkdown = safeMarkdown.replace(re2, "$1$2$2");
      }
    }
  }
  if (!isFinal) safeMarkdown = stripDanglingHtmlLikeTail(safeMarkdown);
  const tokens = md.parse(safeMarkdown, { __markstreamFinal: isFinal });
  if (!tokens || !Array.isArray(tokens)) return [];
  const pre = options.preTransformTokens;
  const post = options.postTransformTokens;
  let transformedTokens = tokens;
  if (pre && typeof pre === "function") transformedTokens = pre(transformedTokens) || transformedTokens;
  const internalOptions = {
    ...options,
    __sourceMarkdown: safeMarkdown,
    __customHtmlBlockCursor: 0
  };
  let result = processTokens(transformedTokens, internalOptions);
  if (post && typeof post === "function") {
    const postResult = post(transformedTokens);
    if (Array.isArray(postResult)) {
      const first = postResult[0];
      const firstType = first == null ? void 0 : first.type;
      if (first && typeof firstType === "string") result = processTokens(postResult);
      else result = postResult;
    }
  }
  if (options.debug) console.log("Parsed Markdown Tree Structure:", result);
  return result;
}
function processTokens(tokens, options) {
  if (!tokens || !Array.isArray(tokens)) return [];
  const result = [];
  let i2 = 0;
  while (i2 < tokens.length) {
    const handled = parseCommonBlockToken(tokens, i2, options, containerTokenHandlers);
    if (handled) {
      result.push(handled[0]);
      i2 = handled[1];
      continue;
    }
    const token = tokens[i2];
    switch (token.type) {
      case "paragraph_open":
        result.push(parseParagraph(tokens, i2, options));
        i2 += 3;
        break;
      case "bullet_list_open":
      case "ordered_list_open": {
        const [listNode, newIndex] = parseList(tokens, i2, options);
        result.push(listNode);
        i2 = newIndex;
        break;
      }
      case "blockquote_open": {
        const [blockquoteNode, newIndex] = parseBlockquote(tokens, i2, options);
        result.push(blockquoteNode);
        i2 = newIndex;
        break;
      }
      case "footnote_anchor": {
        const meta = token.meta ?? {};
        const id = String(meta.label ?? token.content ?? "");
        result.push({
          type: "footnote_anchor",
          id,
          raw: String(token.content ?? "")
        });
        i2++;
        break;
      }
      case "hardbreak":
        result.push(parseHardBreak());
        i2++;
        break;
      case "text": {
        const content = String(token.content ?? "");
        result.push({
          type: "paragraph",
          raw: content,
          children: content ? [{
            type: "text",
            content,
            raw: content
          }] : []
        });
        i2++;
        break;
      }
      case "inline":
        result.push(...parseInlineTokens(token.children || [], String(token.content ?? ""), void 0, {
          requireClosingStrong: options == null ? void 0 : options.requireClosingStrong,
          customHtmlTags: options == null ? void 0 : options.customHtmlTags
        }));
        i2 += 1;
        break;
      default:
        i2 += 1;
        break;
    }
  }
  return result;
}
const _registeredMarkdownPlugins = [];
function getMarkdown(msgId = `editor-${Date.now()}`, options = {}) {
  const md = factory(options);
  const defaultTranslations = { "common.copy": "Copy" };
  let t2;
  if (typeof options.i18n === "function") t2 = options.i18n;
  else if (options.i18n && typeof options.i18n === "object") {
    const i18nMap = options.i18n;
    t2 = (key) => i18nMap[key] ?? defaultTranslations[key] ?? key;
  } else t2 = (key) => defaultTranslations[key] ?? key;
  if (Array.isArray(options.plugin)) for (const p of options.plugin) {
    const pluginItem = p;
    if (Array.isArray(pluginItem)) {
      const fn2 = pluginItem[0];
      const opts = pluginItem[1];
      if (typeof fn2 === "function") md.use(fn2, opts);
    } else if (typeof pluginItem === "function") md.use(pluginItem);
  }
  if (Array.isArray(options.apply)) for (const fn2 of options.apply) try {
    fn2(md);
  } catch (e2) {
    console.error("[getMarkdown] apply function threw an error", e2);
  }
  if (_registeredMarkdownPlugins.length) {
    for (const p of _registeredMarkdownPlugins) if (Array.isArray(p)) {
      const fn2 = p[0];
      const opts = p[1];
      if (typeof fn2 === "function") md.use(fn2, opts);
    } else if (typeof p === "function") md.use(p);
  }
  md.use(sub_plugin);
  md.use(sup_plugin);
  md.use(ins_plugin$1);
  const markdownItCheckboxPlugin = import_markdown_it_task_checkbox.default ?? import_markdown_it_task_checkbox;
  md.use(markdownItCheckboxPlugin);
  md.use(ins_plugin);
  md.use(footnote_plugin);
  md.core.ruler.after("block", "mark_fence_closed", (state) => {
    var _a2;
    const s2 = state;
    const src = s2.src;
    const envFinal = !!((_a2 = s2.env) == null ? void 0 : _a2.__markstreamFinal);
    const lines = src.split(/\r?\n/);
    for (const token of s2.tokens) {
      if (token.type !== "fence" || !token.map || !token.markup) continue;
      const openLine = token.map[0];
      const endLine = token.map[1];
      const markup = token.markup;
      const marker = markup[0];
      const minLen = markup.length;
      const line = lines[Math.max(0, endLine - 1)] ?? "";
      let i2 = 0;
      while (i2 < line.length && (line[i2] === " " || line[i2] === "	")) i2++;
      let count = 0;
      while (i2 + count < line.length && line[i2 + count] === marker) count++;
      let j = i2 + count;
      while (j < line.length && (line[j] === " " || line[j] === "	")) j++;
      const closed = envFinal ? true : endLine > openLine + 1 && count >= minLen && j === line.length;
      const tokenShape = token;
      tokenShape.meta = tokenShape.meta ?? {};
      tokenShape.meta.unclosed = !closed;
      tokenShape.meta.closed = !!closed;
    }
  });
  const waveRule = (state, silent) => {
    const s2 = state;
    const start = s2.pos;
    if (s2.src[start] !== "~") return false;
    const prevChar = s2.src[start - 1];
    const nextChar = s2.src[start + 1];
    if (/\d/.test(prevChar) && /\d/.test(nextChar)) {
      if (!silent) {
        const token = s2.push("text", "", 0);
        token.content = "~";
      }
      s2.pos += 1;
      return true;
    }
    return false;
  };
  md.inline.ruler.before("sub", "wave", waveRule);
  md.renderer.rules.fence = (tokens, idx) => {
    const tokenShape = tokens[idx];
    const info = String(tokenShape.info ?? "").trim();
    const str = String(tokenShape.content ?? "");
    const encodedCode = btoa(unescape(encodeURIComponent(str)));
    const language = String(info ?? "text");
    return `<div class="code-block" data-code="${encodedCode}" data-lang="${language}" id="${`editor-${msgId}-${idx}-${language}`}">
      <div class="code-header">
        <span class="code-lang">${language.toUpperCase()}</span>
        <button class="copy-button" data-code="${encodedCode}">${t2("common.copy")}</button>
      </div>
      <div class="code-editor"></div>
    </div>`;
  };
  const RE_REFERENCE = /^\[(\d+)\]/;
  const referenceInline = (state, silent) => {
    const s2 = state;
    if (s2.src[s2.pos] !== "[") return false;
    const match2 = RE_REFERENCE.exec(s2.src.slice(s2.pos));
    if (!match2) return false;
    const lookbehind = s2.src.slice(Math.max(0, s2.pos - 120), s2.pos);
    if (/"[^"\n]{1,80}"\s*:\s*$/.test(lookbehind)) return false;
    const afterMatch = s2.src.slice(s2.pos + match2[0].length);
    if (afterMatch.startsWith("](") || afterMatch.startsWith("(") || afterMatch.startsWith("[")) return false;
    if (!silent) {
      const id = match2[1];
      const token = s2.push("reference", "span", 0);
      token.content = id;
      token.markup = match2[0];
    }
    s2.pos += match2[0].length;
    return true;
  };
  md.inline.ruler.before("escape", "reference", referenceInline);
  md.renderer.rules.reference = (tokens, idx) => {
    const tokensAny = tokens;
    const id = String(tokensAny[idx].content ?? "");
    return `<span class="reference-link" data-reference-id="${id}" role="button" tabindex="0" title="Click to view reference">${id}</span>`;
  };
  return md;
}
var e = Object.defineProperty, n = Object.defineProperties, t = Object.getOwnPropertyDescriptors, o = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, l = (n2, t2, o2) => t2 in n2 ? e(n2, t2, { enumerable: true, configurable: true, writable: true, value: o2 }) : n2[t2] = o2, i = (e2, n2) => {
  for (var t2 in n2 || (n2 = {})) r.call(n2, t2) && l(e2, t2, n2[t2]);
  if (o) for (var t2 of o(n2)) a.call(n2, t2) && l(e2, t2, n2[t2]);
  return e2;
}, s = (e2, o2) => n(e2, t(o2)), d = (e2, n2, t2) => new Promise((o2, r2) => {
  var a2 = (e3) => {
    try {
      i2(t2.next(e3));
    } catch (n3) {
      r2(n3);
    }
  }, l2 = (e3) => {
    try {
      i2(t2.throw(e3));
    } catch (n3) {
      r2(n3);
    }
  }, i2 = (e3) => e3.done ? o2(e3.value) : Promise.resolve(e3.value).then(a2, l2);
  i2((t2 = t2.apply(e2, n2)).next());
});
const Y = ["cite"], J = (e2, n2) => {
  const t2 = e2.__vccOpts || e2;
  for (const [o2, r2] of n2) t2[o2] = r2;
  return t2;
}, Q = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "BlockquoteNode", props: { node: {}, indexKey: {}, typewriter: { type: Boolean }, customId: {} }, emits: ["copy"], setup(e2) {
  const n2 = e2;
  return (t2, o2) => (openBlock(), createElementBlock("blockquote", { class: "blockquote", dir: "auto", cite: e2.node.cite }, [withMemo([n2.node.children], () => createVNode(unref(Lt), { "index-key": `blockquote-${n2.indexKey}`, nodes: n2.node.children || [], "custom-id": n2.customId, typewriter: n2.typewriter, onCopy: o2[0] || (o2[0] = (e3) => t2.$emit("copy", e3)) }, null, 8, ["index-key", "nodes", "custom-id", "typewriter"]), o2, 1)], 8, Y));
} }), [["__scopeId", "data-v-eeadc8a3"]]);
Q.install = (e2) => {
  e2.component(Q.__name, Q);
};
const ee = { class: "checkbox-node" }, ne = ["checked"], te = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "CheckboxNode", props: { node: {} }, setup: (e2) => (n2, t2) => (openBlock(), createElementBlock("span", ee, [createBaseVNode("input", { type: "checkbox", checked: e2.node.checked, disabled: "", class: "checkbox-input" }, null, 8, ne)])) }), [["__scopeId", "data-v-8dc6c46f"]]);
te.install = (e2) => {
  e2.component(te.__name, te);
};
const oe = { class: "definition-list" }, re = { class: "definition-term" }, ae = { class: "definition-desc" }, le = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "DefinitionListNode", props: { node: {}, indexKey: {}, typewriter: { type: Boolean }, customId: {} }, emits: ["copy"], setup(e2) {
  const n2 = e2;
  return (e3, t2) => (openBlock(), createElementBlock("dl", oe, [(openBlock(true), createElementBlock(Fragment, null, renderList(n2.node.items, (o2, r2) => (openBlock(), createElementBlock(Fragment, { key: r2 }, [createBaseVNode("dt", re, [createVNode(unref(Lt), { "index-key": `definition-term-${n2.indexKey}-${r2}`, nodes: o2.term, "custom-id": n2.customId, typewriter: n2.typewriter, onCopy: t2[0] || (t2[0] = (n3) => e3.$emit("copy", n3)) }, null, 8, ["index-key", "nodes", "custom-id", "typewriter"])]), createBaseVNode("dd", ae, [createVNode(unref(Lt), { "index-key": `definition-desc-${n2.indexKey}-${r2}`, nodes: o2.definition, "custom-id": n2.customId, typewriter: n2.typewriter, onCopy: t2[1] || (t2[1] = (n3) => e3.$emit("copy", n3)) }, null, 8, ["index-key", "nodes", "custom-id", "typewriter"])])], 64))), 128))]));
} }), [["__scopeId", "data-v-f88691d6"]]);
le.install = (e2) => {
  e2.component(le.__name, le);
};
const ie = { class: "emoji-node" }, se = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "EmojiNode", props: { node: {} }, setup: (e2) => (n2, t2) => (openBlock(), createElementBlock("span", ie, toDisplayString(e2.node.name), 1)) }), [["__scopeId", "data-v-de55dc97"]]);
se.install = (e2) => {
  e2.component(se.__name, se);
};
const de = "__global__", ce = "__MARKSTREAM_VUE_CUSTOM_COMPONENTS_STORE__", ue = (() => {
  const e2 = globalThis;
  if (e2[ce]) return e2[ce];
  const n2 = { scopedCustomComponents: {}, revision: shallowRef(0) };
  return e2[ce] = n2, n2;
})(), me = ue.revision;
function he(e2, n2) {
  ue.scopedCustomComponents[e2] = n2 || {}, me.value++;
}
function pe(e2) {
  const n2 = ue.scopedCustomComponents[de] || {};
  if (!e2) return n2;
  const t2 = ue.scopedCustomComponents[e2] || {};
  return n2 && 0 !== Object.keys(n2).length ? t2 && 0 !== Object.keys(t2).length ? i(i({}, n2), t2) : n2 : t2;
}
const ge = ["id"], we = ["title"], ke = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "FootnoteReferenceNode", props: { node: {} }, setup(e2) {
  const n2 = `#footnote-${e2.node.id}`;
  function t2() {
    if ("undefined" == typeof document) return;
    const e3 = document.querySelector(n2);
    e3 ? e3.scrollIntoView({ behavior: "smooth" }) : console.warn(`Element with href: ${n2} not found`);
  }
  return (o2, r2) => (openBlock(), createElementBlock("sup", { id: `fnref-${e2.node.id}`, class: "footnote-reference", onClick: t2 }, [createBaseVNode("span", { href: n2, title: `查看脚注 ${e2.node.id}`, class: "footnote-link cursor-pointer" }, "[" + toDisplayString(e2.node.id) + "]", 9, we)], 8, ge));
} }), [["__scopeId", "data-v-01af0fee"]]);
ke.install = (e2) => {
  e2.component(ke.__name, ke);
};
const ye = /* @__PURE__ */ new Set(["onclick", "onerror", "onload", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onkeydown", "onkeyup", "onfocus", "onblur", "onsubmit", "onreset", "onchange", "onselect", "ondblclick", "ontouchstart", "ontouchend", "ontouchmove", "ontouchcancel", "onwheel", "onscroll", "oncopy", "oncut", "onpaste", "oninput", "oninvalid", "onreset", "onsearch", "onsubmit"]), xe = /* @__PURE__ */ new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]), be = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"]), Me = /* @__PURE__ */ new Set(["script"]), _e = /* @__PURE__ */ new Set(["href", "src", "srcset", "xlink:href", "formaction"]), Ce = (() => {
  try {
    return Boolean(false);
  } catch (e2) {
  }
  return false;
})();
function Be(e2) {
  Ce && console.warn(e2);
}
function Ie(e2) {
  const n2 = (function(e3) {
    let n3 = "";
    for (const t2 of e3) {
      const e4 = t2.charCodeAt(0);
      e4 <= 31 || 127 === e4 || /\s/u.test(t2) || (n3 += t2);
    }
    return n3;
  })(e2).toLowerCase();
  return !(!n2.startsWith("javascript:") && !n2.startsWith("vbscript:")) || !!n2.startsWith("data:") && !(n2.startsWith("data:image/") || n2.startsWith("data:video/") || n2.startsWith("data:audio/"));
}
function Te(e2, n2) {
  return Object.prototype.hasOwnProperty.call(e2, n2);
}
function Le(e2, n2) {
  const t2 = e2.toLowerCase();
  return !be.has(t2) && (Te(n2, t2) || Te(n2, e2));
}
function je(e2, n2) {
  const t2 = n2.toLowerCase();
  if (["checked", "disabled", "readonly", "required", "autofocus", "multiple", "hidden"].includes(t2)) return "true" === e2 || "" === e2 || e2 === n2;
  if (["value", "min", "max", "step", "width", "height", "size", "maxlength"].includes(t2)) {
    const n3 = Number(e2);
    if ("" !== e2 && !Number.isNaN(n3)) return n3;
  }
  return e2;
}
function Se(e2) {
  return e2.trim().length > 0;
}
function $e(e2, n2, t2, o2, r2) {
  if (Me.has(e2.toLowerCase())) return null;
  const a2 = (function(e3) {
    const n3 = {};
    for (const [t3, o3] of Object.entries(e3)) {
      const e4 = t3.toLowerCase();
      ye.has(e4) || _e.has(e4) && o3 && Ie(o3) || (n3[t3] = o3);
    }
    return n3;
  })(n2), l2 = a2.key, d2 = null != l2 && "" !== l2 ? l2 : r2;
  if (Le(e2, o2)) {
    const n3 = o2[e2] || o2[e2.toLowerCase()], r3 = (function(e3) {
      const n4 = {};
      for (const [t3, o3] of Object.entries(e3)) n4[t3] = je(o3, t3);
      return n4;
    })(a2);
    return h(n3, s(i({}, r3), { key: d2 }), t2.length > 0 ? t2 : void 0);
  }
  return h(e2, s(i({}, a2), { innerHTML: void 0, key: d2 }), t2.length > 0 ? t2 : void 0);
}
function Ee(e2, n2) {
  const t2 = /<([a-z][a-z0-9-]*)\b[^>]*>/gi;
  let o2;
  for (; null !== (o2 = t2.exec(e2)); ) if (Le(o2[1], n2)) return true;
  return false;
}
function Ne(e2, n2) {
  if (!e2) return [];
  try {
    const t3 = (function(e3, n3) {
      let t4 = 0;
      const o2 = [], r2 = [];
      for (const a2 of e3) if ("text" === a2.type) (o2.length > 0 ? o2[o2.length - 1].children : r2).push(a2.content);
      else if ("self_closing" === a2.type) {
        const e4 = $e(a2.tagName, a2.attrs || {}, [], n3, "ms-html-" + t4++), l2 = o2.length > 0 ? o2[o2.length - 1].children : r2;
        null != e4 && l2.push(e4);
      } else if ("tag_open" === a2.type) o2.push({ tagName: a2.tagName, children: [], attrs: a2.attrs });
      else if ("tag_close" === a2.type) {
        const e4 = a2.tagName.toLowerCase();
        let l2 = -1;
        for (let n4 = o2.length - 1; n4 >= 0; n4--) if (o2[n4].tagName.toLowerCase() === e4) {
          l2 = n4;
          break;
        }
        if (-1 !== l2) for (; o2.length > l2; ) {
          const a3 = o2.pop(), i2 = $e(a3.tagName, a3.attrs || {}, a3.children, n3, "ms-html-" + t4++);
          o2.length > 0 ? null != i2 && o2[o2.length - 1].children.push(i2) : null != i2 && r2.push(i2), a3.tagName.toLowerCase() !== e4 && o2.length > l2 && Be(`Auto-closing unclosed tag: <${a3.tagName}>`);
        }
        else Be(`Ignoring closing tag with no matching opening tag: </${a2.tagName}>`);
      }
      for (; o2.length > 0; ) {
        const e4 = o2.pop(), a2 = $e(e4.tagName, e4.attrs || {}, e4.children, n3, "ms-html-" + t4++);
        null != a2 && r2.push(a2), Be(`Auto-closing unclosed tag: <${e4.tagName}>`);
      }
      return r2;
    })((function(e3) {
      var n3, t4, o2;
      const r2 = [];
      let a2 = 0;
      for (; a2 < e3.length; ) {
        if (e3.startsWith("<!--", a2)) {
          const n4 = e3.indexOf("-->", a2);
          if (-1 !== n4) {
            a2 = n4 + 3;
            continue;
          }
          break;
        }
        const l2 = e3.indexOf("<", a2);
        if (-1 === l2) {
          if (a2 < e3.length) {
            const n4 = e3.slice(a2);
            Se(n4) && r2.push({ type: "text", content: n4 });
          }
          break;
        }
        if (l2 > a2) {
          const n4 = e3.slice(a2, l2);
          Se(n4) && r2.push({ type: "text", content: n4 });
        }
        if (e3.startsWith("![CDATA[", l2 + 1)) {
          const n4 = e3.indexOf("]]>", l2);
          if (-1 !== n4) {
            r2.push({ type: "text", content: e3.slice(l2, n4 + 3) }), a2 = n4 + 3;
            continue;
          }
          break;
        }
        if (e3.startsWith("!", l2 + 1)) {
          const n4 = e3.indexOf(">", l2);
          if (-1 !== n4) {
            a2 = n4 + 1;
            continue;
          }
          break;
        }
        const i2 = e3.indexOf(">", l2);
        if (-1 === i2) break;
        const s2 = e3.slice(l2 + 1, i2).trim(), d2 = s2.startsWith("/"), c = s2.endsWith("/");
        if (d2) {
          const e4 = s2.slice(1).trim();
          r2.push({ type: "tag_close", tagName: e4 });
        } else {
          const e4 = s2.indexOf(" ");
          let a3, l3 = "";
          -1 === e4 ? a3 = c ? s2.slice(0, -1).trim() : s2.trim() : (a3 = s2.slice(0, e4).trim(), l3 = s2.slice(e4 + 1));
          const i3 = {};
          if (l3) {
            const e5 = /([^\s=]+)(?:=(?:"([^"]*)"|'([^']*)'|(\S*)))?/g;
            let r3;
            for (; null !== (r3 = e5.exec(l3)); ) {
              const e6 = r3[1], a4 = null != (o2 = null != (t4 = null != (n3 = r3[2]) ? n3 : r3[3]) ? t4 : r3[4]) ? o2 : "";
              e6 && !e6.endsWith("/") && (i3[e6] = a4);
            }
          }
          r2.push({ type: c || xe.has(a3.toLowerCase()) ? "self_closing" : "tag_open", tagName: a3, attrs: i3 });
        }
        a2 = i2 + 1;
      }
      return r2;
    })(e2), n2);
    return t3;
  } catch (o2) {
    return t2 = o2, Ce && console.error("Failed to parse HTML to VNodes:", t2), null;
  }
  var t2;
}
const He = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "HtmlInlineNode", props: { node: {}, customId: {} }, setup(e2) {
  const n2 = e2, t2 = computed(() => (me.value, pe(n2.customId))), o2 = defineComponent({ name: "DynamicRenderer", props: { nodes: { type: Array, required: true } }, render() {
    return this.nodes;
  } }), r2 = computed(() => {
    const e3 = n2.node.content;
    if (!e3) return { mode: "html", content: "" };
    if (!Ee(e3, t2.value)) return { mode: "html", content: e3 };
    const o3 = Ne(e3, t2.value);
    return null === o3 ? { mode: "html", content: e3 } : { mode: "dynamic", nodes: o3 };
  }), a2 = ref(null), l2 = "undefined" != typeof window;
  function i2() {
    if (!l2 || !a2.value) return;
    const e3 = a2.value;
    e3.innerHTML = "";
    const t3 = document.createElement("template");
    t3.innerHTML = n2.node.content, e3.appendChild(t3.content.cloneNode(true));
  }
  function s2() {
    if (!a2.value) return;
    const e3 = a2.value;
    e3.innerHTML = "", e3.textContent = n2.node.content;
  }
  return watch(() => [n2.node.content, n2.node.loading, n2.node.autoClosed, r2.value.mode], () => {
    "html" === r2.value.mode && (n2.node.loading && !n2.node.autoClosed ? s2() : i2());
  }), onMounted(() => {
    "html" === r2.value.mode && (n2.node.loading && !n2.node.autoClosed ? s2() : i2());
  }), onBeforeUnmount(() => {
    a2.value && (a2.value.innerHTML = "");
  }), (e3, t3) => "dynamic" === r2.value.mode ? (openBlock(), createElementBlock("span", { key: 0, class: normalizeClass(["html-inline-node", { "html-inline-node--loading": n2.node.loading }]) }, [createVNode(unref(o2), { nodes: r2.value.nodes }, null, 8, ["nodes"])], 2)) : (openBlock(), createElementBlock("span", { key: 1, ref_key: "containerRef", ref: a2, class: normalizeClass(["html-inline-node", { "html-inline-node--loading": n2.node.loading }]) }, null, 2));
} }), [["__scopeId", "data-v-b3eb6366"]]);
He.install = (e2) => {
  e2.component(He.__name, He);
};
const ze = { class: "inline text-[85%] px-1 py-0.5 rounded font-mono bg-[hsl(var(--secondary))] whitespace-normal break-words max-w-full before:content-[''] after:content-['']" }, Ae = /* @__PURE__ */ defineComponent({ __name: "InlineCodeNode", props: { node: {} }, setup: (e2) => (n2, t2) => (openBlock(), createElementBlock("code", ze, toDisplayString(e2.node.code), 1)) });
Ae.install = (e2) => {
  e2.component(Ae.__name, Ae);
};
const Pe = ref(false), Ve = ref(""), Oe = ref("top"), Re = ref(null), Ke = ref(null), We = ref(null), De = ref(null), Ue = ref(null);
let Fe = null, qe = null;
function Xe() {
  Fe && (clearTimeout(Fe), Fe = null), qe && (clearTimeout(qe), qe = null);
}
let Ge = false, Ze = null;
function Ye(e2, n2, t2 = "top", o2 = false, r2, a2) {
  if (!e2) return;
  Ge || "undefined" != typeof document && (Ze || (Ze = __vitePreload(async () => {
    const { default: e3 } = await import("./Tooltip-Q0pzxBIY.js");
    return { default: e3 };
  }, true ? __vite__mapDeps([0,1,2,3]) : void 0).then(({ default: e3 }) => {
    Ge = true;
    const n3 = document.createElement("div");
    n3.setAttribute("data-singleton-tooltip", "1"), document.body.appendChild(n3), createApp({ setup: () => () => {
      var n4;
      return h(e3, { visible: Pe.value, "anchor-el": Re.value, content: Ve.value, placement: Oe.value, id: Ke.value, originX: We.value, originY: De.value, isDark: null != (n4 = Ue.value) ? n4 : void 0 });
    } }).mount(n3);
  }).catch((e3) => {
    Ze = null, Ge = false, console.warn("[markstream-vue] Failed to load Tooltip component. Tooltips will be disabled.", e3);
  }))), Xe();
  const l2 = () => {
    var o3, l3;
    Ke.value = `tooltip-${Date.now()}-${Math.floor(1e3 * Math.random())}`, Re.value = e2, Ve.value = n2, Oe.value = t2, We.value = null != (o3 = null == r2 ? void 0 : r2.x) ? o3 : null, De.value = null != (l3 = null == r2 ? void 0 : r2.y) ? l3 : null, Ue.value = "boolean" == typeof a2 ? a2 : null, Pe.value = true;
    try {
      e2.setAttribute("aria-describedby", Ke.value);
    } catch (i2) {
    }
  };
  o2 ? l2() : Fe = setTimeout(l2, 80);
}
function Je(e2 = false) {
  Xe();
  const n2 = () => {
    if (Re.value && Ke.value) try {
      Re.value.removeAttribute("aria-describedby");
    } catch (e3) {
    }
    Pe.value = false, Re.value = null, Ke.value = null, We.value = null, De.value = null;
  };
  e2 ? n2() : qe = setTimeout(n2, 120);
}
const Qe = { "common.copy": "Copy", "common.copySuccess": "Copied", "common.decrease": "Decrease", "common.reset": "Reset", "common.increase": "Increase", "common.expand": "Expand", "common.collapse": "Collapse", "common.preview": "Preview", "common.source": "Source", "common.export": "Export", "common.open": "Open", "common.zoomIn": "Zoom in", "common.zoomOut": "Zoom out", "common.resetZoom": "Reset zoom", "image.loadError": "Image failed to load", "image.loading": "Loading image..." };
function nn() {
  try {
    const n2 = globalThis.$vueI18nUse || null;
    if (n2 && "function" == typeof n2) try {
      const e2 = n2();
      if (e2 && "function" == typeof e2.t) return { t: e2.t.bind(e2) };
    } catch (e2) {
    }
  } catch (e2) {
  }
  return d(null, null, function* () {
    try {
      const n2 = yield __vitePreload(() => import("./vue-i18n-CwKsPsj-.js"), true ? __vite__mapDeps([4,1,2]) : void 0), t2 = n2.useI18n || n2.default && n2.default.useI18n;
      if (t2 && "function" == typeof t2) try {
        const n3 = t2();
        if (n3 && "function" == typeof n3.t) try {
          globalThis.$vueI18nUse = () => n3;
        } catch (e2) {
        }
      } catch (e2) {
      }
    } catch (e2) {
    }
  }), { t: (e2) => {
    var n2;
    return null != (n2 = Qe[e2]) ? n2 : (function(e3) {
      return (e3.split(".").pop() || e3).replace(/[_-]/g, " ").replace(/([A-Z])/g, " $1").replace(/\s+/g, " ").replace(/\b\w/g, (e4) => e4.toUpperCase()).trim();
    })(e2);
  } };
}
const tn = /* @__PURE__ */ Symbol("ViewportPriority");
function on() {
  const e2 = inject(tn, void 0);
  if (e2) return e2;
  const n2 = /* @__PURE__ */ new WeakMap();
  let t2 = null;
  return (e3) => {
    const o2 = ref(false);
    let r2, a2 = false;
    const l2 = new Promise((e4) => {
      r2 = () => {
        a2 || (a2 = true, e4());
      };
    }), i2 = () => {
      try {
        null == t2 || t2.unobserve(e3);
      } catch (o3) {
      }
      n2.delete(e3);
    }, s2 = t2 || ("undefined" == typeof window || "undefined" == typeof IntersectionObserver ? null : (t2 = new IntersectionObserver((e4) => {
      for (const r3 of e4) {
        const e5 = n2.get(r3.target);
        if (e5 && (r3.isIntersecting || r3.intersectionRatio > 0)) {
          if (!e5.visible.value) {
            e5.visible.value = true;
            try {
              e5.resolve();
            } catch (o3) {
            }
          }
          null == t2 || t2.unobserve(r3.target), n2.delete(r3.target);
        }
      }
    }, { root: null, rootMargin: "300px", threshold: 0 }), t2));
    return s2 ? (n2.set(e3, { resolve: r2, visible: o2 }), s2.observe(e3), { isVisible: o2, whenVisible: l2, destroy: i2 }) : (o2.value = true, r2(), { isVisible: o2, whenVisible: l2, destroy: i2 });
  };
}
const rn = { class: "relative inline-block" }, an = ["src", "alt", "title", "loading", "tabindex", "aria-label"], ln = { class: "text-sm whitespace-nowrap" }, sn = { key: 1, class: "text-sm text-gray-500" }, dn = { key: "error", class: "px-4 py-2 bg-gray-100 flex items-center justify-center rounded-lg gap-2 text-red-500" }, cn = { class: "text-sm whitespace-nowrap" }, un = { key: 0, class: "mt-2 text-sm text-gray-500 italic" }, mn = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "ImageNode", props: { node: {}, fallbackSrc: { default: "" }, showCaption: { type: Boolean, default: false }, lazy: { type: Boolean, default: true }, svgMinHeight: { default: "12rem" }, usePlaceholder: { type: Boolean, default: true } }, emits: ["load", "error", "click"], setup(e2, { emit: n2 }) {
  const t2 = e2, o2 = n2, r2 = ref(false), a2 = ref(false), l2 = ref(false), i2 = ref(null), s2 = on(), d2 = ref(null), c = ref("undefined" == typeof window);
  "undefined" != typeof window && watch(() => i2.value, (e3) => {
    var n3;
    if (null == (n3 = d2.value) || n3.destroy(), d2.value = null, !e3) return void (c.value = false);
    const t3 = s2(e3, { rootMargin: "400px" });
    d2.value = t3, c.value = t3.isVisible.value, t3.whenVisible.then(() => {
      c.value = true;
    });
  }, { immediate: true }), onBeforeUnmount(() => {
    var e3;
    null == (e3 = d2.value) || e3.destroy(), d2.value = null;
  });
  const u = computed(() => a2.value && t2.fallbackSrc ? t2.fallbackSrc : t2.node.src), m = computed(() => !t2.lazy || c.value), h2 = computed(() => /\.svg(?:\?|$)/i.test(u.value));
  function f() {
    t2.fallbackSrc && !l2.value ? (l2.value = true, a2.value = true) : (a2.value = true, o2("error", t2.node.src));
  }
  function y() {
    r2.value = true, a2.value = false, o2("load", u.value);
  }
  function x(e3) {
    e3.preventDefault(), r2.value && !a2.value && o2("click", [e3, u.value]);
  }
  const { t: M } = nn();
  return watch(u, () => {
    r2.value = false, a2.value = false;
  }), (n3, o3) => (openBlock(), createElementBlock("figure", { ref_key: "figureRef", ref: i2, class: "text-center my-8" }, [createBaseVNode("div", rn, [createVNode(Transition, { name: "img-switch", mode: "out-in" }, { default: withCtx(() => {
    var l3, i3, s3, d3, c2;
    return [e2.node.loading || a2.value || !m.value ? a2.value ? e2.node.loading || t2.fallbackSrc ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", dn, [renderSlot(n3.$slots, "error", { node: t2.node, displaySrc: u.value, imageLoaded: r2.value, hasError: a2.value, fallbackSrc: t2.fallbackSrc, lazy: t2.lazy, isSvg: h2.value }, () => [o3[1] || (o3[1] = createBaseVNode("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24" }, [createBaseVNode("path", { fill: "currentColor", d: "M2 2h20v10h-2V4H4v9.586l5-5L14.414 14L13 15.414l-4-4l-5 5V20h8v2H2zm13.547 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3.625 6.757L19 17.586l2.828-2.829l1.415 1.415L20.414 19l2.829 2.828l-1.415 1.415L19 20.414l-2.828 2.829l-1.415-1.415L17.586 19l-2.829-2.828z" })], -1)), createBaseVNode("span", cn, toDisplayString(unref(M)("image.loadError")), 1)], true)])) : (openBlock(), createElementBlock("div", { key: "placeholder", class: "placeholder-layer max-w-96 inline-flex items-center justify-center gap-2", style: normalizeStyle(h2.value ? { minHeight: t2.svgMinHeight, width: "100%" } : { minHeight: "6rem" }) }, [t2.usePlaceholder ? renderSlot(n3.$slots, "placeholder", { key: 0, node: t2.node, displaySrc: u.value, imageLoaded: r2.value, hasError: a2.value, fallbackSrc: t2.fallbackSrc, lazy: t2.lazy, isSvg: h2.value }, () => [o3[0] || (o3[0] = createBaseVNode("div", { class: "w-4 h-4 rounded-full border-2 border-solid border-current border-t-transparent animate-spin", "aria-hidden": "true" }, null, -1)), createBaseVNode("span", ln, toDisplayString(unref(M)("image.loading")), 1)], true) : (openBlock(), createElementBlock("span", sn, toDisplayString(e2.node.raw), 1))], 4)) : (openBlock(), createElementBlock("img", { key: "image", src: u.value, alt: String(null != (i3 = null != (l3 = t2.node.alt) ? l3 : t2.node.title) ? i3 : ""), title: String(null != (d3 = null != (s3 = t2.node.title) ? s3 : t2.node.alt) ? d3 : ""), class: normalizeClass(["max-w-96 h-auto rounded-lg transition-opacity duration-200 ease-in-out", { "opacity-0": !r2.value, "opacity-100": r2.value, "cursor-pointer": r2.value }]), style: normalizeStyle(h2.value ? { minHeight: t2.svgMinHeight, width: "100%", height: "auto", objectFit: "contain" } : void 0), loading: t2.lazy ? "lazy" : "eager", decoding: "async", tabindex: r2.value ? 0 : -1, "aria-label": null != (c2 = t2.node.alt) ? c2 : unref(M)("image.preview"), onError: f, onLoad: y, onClick: x }, null, 46, an))];
  }), _: 3 })]), t2.showCaption && t2.node.alt ? (openBlock(), createElementBlock("figcaption", un, toDisplayString(t2.node.alt), 1)) : createCommentVNode("", true)], 512));
} }), [["__scopeId", "data-v-7ca79b66"]]);
mn.install = (e2) => {
  e2.component(mn.__name, mn);
};
let hn = null, pn = false, vn = wn;
function fn(e2) {
  var n2;
  const t2 = null != (n2 = null == e2 ? void 0 : e2.default) ? n2 : e2;
  return t2 && "function" == typeof t2.renderToString ? t2 : null;
}
function gn() {
  try {
    const e2 = globalThis;
    return fn(null == e2 ? void 0 : e2.katex);
  } catch (e2) {
    return null;
  }
}
function wn() {
  return d(null, null, function* () {
    const e2 = gn();
    if (e2) return e2;
    const n2 = yield __vitePreload(() => import("./katex-CYis69t2.js"), true ? [] : void 0);
    try {
      yield __vitePreload(() => import("./mhchem-1oKGqzT0.js").then((n3) => n3.m), true ? __vite__mapDeps([5,1,2]) : void 0);
    } catch (t2) {
    }
    return fn(n2);
  });
}
function kn(e2) {
  vn = e2, hn = null, pn = false;
}
function yn(e2) {
  kn(wn);
}
function bn() {
  return "function" == typeof vn;
}
function Mn() {
  return d(this, null, function* () {
    var e2;
    const n2 = gn();
    if (n2) return hn = n2, hn;
    if (hn) return hn;
    if (pn) return null;
    const t2 = vn;
    if (!t2) return pn = true, null;
    try {
      const n3 = yield t2();
      if (n3) return hn = null != (e2 = fn(n3)) ? e2 : n3, hn;
    } catch (o2) {
    }
    return pn = true, null;
  });
}
const _n = shallowRef(false);
let Cn = null;
function Bn() {
  return Cn || (Cn = Mn().then((e2) => {
    _n.value = !!e2;
  }).catch(() => {
    _n.value = false;
  })), readonly(_n);
}
const In = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "TextNode", props: { node: {} }, emits: ["copy"], setup(e2) {
  const n2 = Bn();
  return (t2, o2) => (openBlock(), createElementBlock("span", { class: normalizeClass([[unref(n2) && e2.node.center ? "text-node-center" : ""], "whitespace-pre-wrap break-words text-node"]) }, toDisplayString(e2.node.content), 3));
} }), [["__scopeId", "data-v-56f30838"]]);
In.install = (e2) => {
  e2.component(In.__name, In);
};
const Tn = defineAsyncComponent(() => d(null, null, function* () {
  var e2, n2;
  if ("undefined" != typeof globalThis && void 0 !== globalThis.process && "test" === (null == (n2 = null == (e2 = globalThis.process) ? void 0 : e2.env) ? void 0 : n2.NODE_ENV)) return (e3) => {
    var n3, t2;
    return h(In, s(i({}, e3), { node: s(i({}, e3.node), { content: null != (t2 = e3.node.raw) ? t2 : `$${null != (n3 = e3.node.content) ? n3 : ""}$` }) }));
  };
  try {
    if (yield Mn()) return (yield __vitePreload(() => import("./index2-tU5aAM2_.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0)).default;
  } catch (t2) {
    console.warn('[markstream-vue] Optional peer dependencies for MathInlineNode are missing. Falling back to text rendering. To enable full math rendering features, please install "katex".', t2);
  }
  return (e3) => {
    var n3, t2;
    return h(In, s(i({}, e3), { node: s(i({}, e3.node), { content: null != (t2 = e3.node.raw) ? t2 : `$${null != (n3 = e3.node.content) ? n3 : ""}$` }) }));
  };
})), Ln = defineAsyncComponent(() => d(null, null, function* () {
  try {
    if (yield Mn()) return (yield __vitePreload(() => import("./index3-BLt3mrKL.js"), true ? __vite__mapDeps([7,1,2,3]) : void 0)).default;
  } catch (e2) {
    console.warn('[markstream-vue] Optional peer dependencies for MathBlockNode are missing. Falling back to text rendering. To enable full math rendering features, please install "katex".', e2);
  }
  return (e2) => {
    var n2, t2;
    return h(In, s(i({}, e2), { node: s(i({}, e2.node), { content: null != (t2 = e2.node.raw) ? t2 : `$$${null != (n2 = e2.node.content) ? n2 : ""}$$` }) }));
  };
})), jn = /* @__PURE__ */ defineComponent({ __name: "ReferenceNode", props: { node: {}, messageId: {}, threadId: {} }, emits: ["click", "mouseEnter", "mouseLeave"], setup: (e2) => (n2, t2) => (openBlock(), createElementBlock("span", { class: "reference-node cursor-pointer bg-[hsl(var(--muted))] text-xs rounded-md px-1.5 mx-0.5 hover:bg-[hsl(var(--secondary))]", role: "button", tabindex: "0", onClick: t2[0] || (t2[0] = (t3) => n2.$emit("click", t3, e2.node.id, e2.messageId, e2.threadId)), onMouseenter: t2[1] || (t2[1] = (t3) => n2.$emit("mouseEnter", t3, e2.node.id, e2.messageId, e2.threadId)), onMouseleave: t2[2] || (t2[2] = (t3) => n2.$emit("mouseLeave", t3, e2.node.id, e2.messageId, e2.threadId)) }, toDisplayString(e2.node.id), 33)) });
jn.install = (e2) => {
  e2.component(jn.__name, jn);
};
const Sn = { class: "superscript-node" }, $n = { key: 1 }, En = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "SuperscriptNode", props: { node: {}, customId: {}, indexKey: {} }, setup(e2) {
  const n2 = e2, t2 = pe(n2.customId), o2 = i({ text: In, inline_code: Ae, link: Fn, html_inline: He, strong: Pn, emphasis: Jn, footnote_reference: ke, strikethrough: On, highlight: Zn, insert: Xn, subscript: zn, emoji: se, math_inline: Tn, reference: jn }, t2);
  return (t3, r2) => (openBlock(), createElementBlock("sup", Sn, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.node.children, (t4, r3) => (openBlock(), createElementBlock(Fragment, { key: `${e2.indexKey || "superscript"}-${r3}` }, [o2[t4.type] ? (openBlock(), createBlock(resolveDynamicComponent(o2[t4.type]), { key: 0, node: t4, "custom-id": n2.customId, "index-key": `${e2.indexKey || "superscript"}-${r3}` }, null, 8, ["node", "custom-id", "index-key"])) : (openBlock(), createElementBlock("span", $n, toDisplayString(t4.content || t4.raw), 1))], 64))), 128))]));
} }), [["__scopeId", "data-v-6dc1e3ba"]]);
En.install = (e2) => {
  e2.component(En.__name, En);
};
const Nn = { class: "subscript-node" }, Hn = { key: 1 }, zn = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "SubscriptNode", props: { node: {}, customId: {}, indexKey: {} }, setup(e2) {
  const n2 = e2, t2 = pe(n2.customId), o2 = i({ text: In, inline_code: Ae, link: Fn, html_inline: He, strong: Pn, emphasis: Jn, footnote_reference: ke, strikethrough: On, highlight: Zn, insert: Xn, superscript: En, emoji: se, math_inline: Tn, reference: jn }, t2);
  return (t3, r2) => (openBlock(), createElementBlock("sub", Nn, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.node.children, (t4, r3) => (openBlock(), createElementBlock(Fragment, { key: `${e2.indexKey || "subscript"}-${r3}` }, [o2[t4.type] ? (openBlock(), createBlock(resolveDynamicComponent(o2[t4.type]), { key: 0, node: t4, "custom-id": n2.customId, "index-key": `${e2.indexKey || "subscript"}-${r3}` }, null, 8, ["node", "custom-id", "index-key"])) : (openBlock(), createElementBlock("span", Hn, toDisplayString(t4.content || t4.raw), 1))], 64))), 128))]));
} }), [["__scopeId", "data-v-69de9b81"]]);
zn.install = (e2) => {
  e2.component(zn.__name, zn);
};
const An = { class: "strong-node" }, Pn = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "StrongNode", props: { node: {}, customId: {}, indexKey: {} }, setup(e2) {
  const n2 = e2, t2 = pe(n2.customId), o2 = i({ text: In, inline_code: Ae, link: Fn, html_inline: He, emphasis: Jn, strikethrough: On, highlight: Zn, insert: Xn, subscript: zn, superscript: En, emoji: se, footnote_reference: ke, math_inline: Tn, reference: jn }, t2);
  return (t3, r2) => (openBlock(), createElementBlock("strong", An, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.node.children, (t4, r3) => (openBlock(), createBlock(resolveDynamicComponent(o2[t4.type]), { key: `${e2.indexKey || "strong"}-${r3}`, "index-key": `${e2.indexKey || "strong"}-${r3}`, node: t4, "custom-id": n2.customId }, null, 8, ["index-key", "node", "custom-id"]))), 128))]));
} }), [["__scopeId", "data-v-af3ce037"]]);
Pn.install = (e2) => {
  e2.component(Pn.__name, Pn);
};
const Vn = { class: "strikethrough-node" }, On = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "StrikethroughNode", props: { node: {}, customId: {}, indexKey: {} }, setup(e2) {
  const n2 = e2, t2 = pe(n2.customId), o2 = i({ text: In, inline_code: Ae, link: Fn, html_inline: He, strong: Pn, emphasis: Jn, highlight: Zn, insert: Xn, subscript: zn, superscript: En, emoji: se, footnote_reference: ke, math_inline: Tn, reference: jn }, t2);
  return (t3, r2) => (openBlock(), createElementBlock("del", Vn, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.node.children, (t4, r3) => (openBlock(), createBlock(resolveDynamicComponent(o2[t4.type]), { key: `${e2.indexKey || "strikethrough"}-${r3}`, node: t4, "custom-id": n2.customId, "index-key": `${e2.indexKey || "strikethrough"}-${r3}` }, null, 8, ["node", "custom-id", "index-key"]))), 128))]));
} }), [["__scopeId", "data-v-904d5bd1"]]);
On.install = (e2) => {
  e2.component(On.__name, On);
};
const Rn = ["href", "title", "aria-label", "aria-hidden"], Kn = ["aria-hidden"], Wn = { class: "link-text-wrapper relative inline-flex" }, Dn = { class: "leading-[normal] link-text" }, Un = { class: "leading-[normal] link-text" }, Fn = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "LinkNode", props: { node: {}, indexKey: {}, customId: {}, showTooltip: { type: Boolean, default: true }, color: {}, underlineHeight: {}, underlineBottom: {}, animationDuration: {}, animationOpacity: {}, animationTiming: {}, animationIteration: {} }, setup(e2) {
  const n2 = e2, t2 = computed(() => {
    var e3, t3, o3, r3, a3, l3;
    const i2 = void 0 !== n2.underlineBottom ? "number" == typeof n2.underlineBottom ? `${n2.underlineBottom}px` : String(n2.underlineBottom) : "-3px";
    return { "--link-color": null != (e3 = n2.color) ? e3 : "#0366d6", "--underline-height": `${null != (t3 = n2.underlineHeight) ? t3 : 2}px`, "--underline-bottom": i2, "--underline-opacity": String(null != (o3 = n2.animationOpacity) ? o3 : 0.9), "--underline-duration": `${null != (r3 = n2.animationDuration) ? r3 : 0.8}s`, "--underline-timing": null != (a3 = n2.animationTiming) ? a3 : "linear", "--underline-iteration": "number" == typeof n2.animationIteration ? String(n2.animationIteration) : null != (l3 = n2.animationIteration) ? l3 : "infinite" };
  }), o2 = { text: In, strong: Pn, strikethrough: On, emphasis: Jn, image: mn, html_inline: He, inline_code: Ae }, r2 = useAttrs();
  function a2() {
    n2.showTooltip && Je();
  }
  const l2 = computed(() => {
    var e3, t3;
    return String(null != (t3 = null != (e3 = n2.node.title) ? e3 : n2.node.href) ? t3 : "");
  });
  return (i2, s2) => e2.node.loading ? (openBlock(), createElementBlock("span", mergeProps({ key: 1, class: "link-loading inline-flex items-baseline gap-1.5", "aria-hidden": e2.node.loading ? "false" : "true" }, unref(r2), { style: t2.value }), [createBaseVNode("span", Wn, [createBaseVNode("span", Dn, [createBaseVNode("span", Un, toDisplayString(e2.node.text), 1)]), s2[1] || (s2[1] = createBaseVNode("span", { class: "underline-anim", "aria-hidden": "true" }, null, -1))])], 16, Kn)) : (openBlock(), createElementBlock("a", mergeProps({ key: 0, class: "link-node", href: e2.node.href, title: e2.showTooltip ? "" : l2.value, "aria-label": `Link: ${l2.value}`, "aria-hidden": e2.node.loading ? "true" : "false", target: "_blank", rel: "noopener noreferrer" }, unref(r2), { style: t2.value, onMouseenter: s2[0] || (s2[0] = (e3) => (function(e4) {
    var t3, o3, r3;
    if (!n2.showTooltip) return;
    const a3 = e4, l3 = null != (null == a3 ? void 0 : a3.clientX) && null != (null == a3 ? void 0 : a3.clientY) ? { x: a3.clientX, y: a3.clientY } : void 0, i3 = (null == (t3 = n2.node) ? void 0 : t3.title) || (null == (o3 = n2.node) ? void 0 : o3.href) || (null == (r3 = n2.node) ? void 0 : r3.text) || "";
    Ye(e4.currentTarget, i3, "top", false, l3);
  })(e3)), onMouseleave: a2 }), [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.node.children, (t3, r3) => (openBlock(), createBlock(resolveDynamicComponent((function(e3) {
    return pe(n2.customId)[e3.type] || o2[e3.type] || null;
  })(t3)), { key: `${e2.indexKey || "emphasis"}-${r3}`, node: t3, "custom-id": n2.customId, "index-key": `${e2.indexKey || "link-text"}-${r3}` }, null, 8, ["node", "custom-id", "index-key"]))), 128))], 16, Rn));
} }), [["__scopeId", "data-v-529b3b1e"]]);
Fn.install = (e2) => {
  e2.component(Fn.__name, Fn);
};
const qn = { class: "insert-node" }, Xn = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "InsertNode", props: { node: {}, customId: {}, indexKey: {} }, setup(e2) {
  const n2 = e2, t2 = pe(n2.customId), o2 = i({ text: In, inline_code: Ae, link: Fn, html_inline: He, strong: Pn, emphasis: Jn, strikethrough: On, highlight: Zn, subscript: zn, superscript: En, emoji: se, footnote_reference: ke, math_inline: Tn, reference: jn }, t2);
  return (t3, r2) => (openBlock(), createElementBlock("ins", qn, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.node.children, (t4, r3) => (openBlock(), createBlock(resolveDynamicComponent(o2[t4.type]), { key: `${e2.indexKey || "insert"}-${r3}`, node: t4, "custom-id": n2.customId, "index-key": `${e2.indexKey || "insert"}-${r3}` }, null, 8, ["node", "custom-id", "index-key"]))), 128))]));
} }), [["__scopeId", "data-v-ab1ec9bc"]]);
Xn.install = (e2) => {
  e2.component(Xn.__name, Xn);
};
const Gn = { class: "highlight-node" }, Zn = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "HighlightNode", props: { node: {}, customId: {}, indexKey: {} }, setup(e2) {
  const n2 = e2, t2 = pe(n2.customId), o2 = i({ text: In, inline_code: Ae, link: Fn, html_inline: He, strong: Pn, emphasis: Jn, strikethrough: On, insert: Xn, subscript: zn, superscript: En, emoji: se, footnote_reference: ke, math_inline: Tn, reference: jn }, t2);
  return (t3, r2) => (openBlock(), createElementBlock("mark", Gn, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.node.children, (t4, r3) => (openBlock(), createBlock(resolveDynamicComponent(o2[t4.type]), { key: `${e2.indexKey || "highlight"}-${r3}`, node: t4, "custom-id": n2.customId, "index-key": `${e2.indexKey || "highlight"}-${r3}` }, null, 8, ["node", "custom-id", "index-key"]))), 128))]));
} }), [["__scopeId", "data-v-38e31bf6"]]);
Zn.install = (e2) => {
  e2.component(Zn.__name, Zn);
};
const Yn = { class: "emphasis-node" }, Jn = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "EmphasisNode", props: { node: {}, customId: {}, indexKey: {} }, setup(e2) {
  const n2 = e2, t2 = pe(n2.customId), o2 = i({ text: In, inline_code: Ae, link: Fn, html_inline: He, strong: Pn, strikethrough: On, highlight: Zn, insert: Xn, subscript: zn, superscript: En, emoji: se, footnote_reference: ke, math_inline: Tn, reference: jn }, t2);
  return (t3, r2) => (openBlock(), createElementBlock("em", Yn, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.node.children, (t4, r3) => (openBlock(), createBlock(resolveDynamicComponent(o2[t4.type]), { key: `${e2.indexKey || "emphasis"}-${r3}`, node: t4, "custom-id": n2.customId, "index-key": `${e2.indexKey || "emphasis"}-${r3}` }, null, 8, ["node", "custom-id", "index-key"]))), 128))]));
} }), [["__scopeId", "data-v-8264674d"]]);
Jn.install = (e2) => {
  e2.component(Jn.__name, Jn);
};
const Qn = ["href", "title"], et = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "FootnoteAnchorNode", props: { node: {} }, setup(e2) {
  const n2 = e2;
  function t2(e3) {
    var t3;
    if (e3.preventDefault(), "undefined" == typeof document) return;
    const o2 = `fnref-${String(null != (t3 = n2.node.id) ? t3 : "")}`, r2 = document.getElementById(o2);
    r2 && r2.scrollIntoView({ behavior: "smooth" });
  }
  return (n3, o2) => (openBlock(), createElementBlock("a", { class: "footnote-anchor text-sm text-[#0366d6] hover:underline cursor-pointer", href: `#fnref-${e2.node.id}`, title: `返回引用 ${e2.node.id}`, onClick: t2 }, " ↩︎ ", 8, Qn));
} }), [["__scopeId", "data-v-4756ce0d"]]);
et.install = (e2) => {
  e2.component(et.__name, et);
};
const nt = ["id"], tt = { class: "flex-1" }, ot = /* @__PURE__ */ defineComponent({ __name: "FootnoteNode", props: { node: {}, indexKey: {}, typewriter: { type: Boolean }, customId: {} }, emits: ["copy"], setup(e2) {
  const n2 = e2;
  return (t2, o2) => (openBlock(), createElementBlock("div", { id: `fnref--${e2.node.id}`, class: "flex mt-2 mb-2 text-sm leading-relaxed border-t border-[#eaecef] pt-2" }, [createBaseVNode("div", tt, [withMemo([n2.node.children], () => createVNode(unref(Lt), { "index-key": `footnote-${n2.indexKey}`, nodes: n2.node.children, "custom-id": n2.customId, typewriter: n2.typewriter, onCopy: o2[0] || (o2[0] = (e3) => t2.$emit("copy", e3)) }, null, 8, ["index-key", "nodes", "custom-id", "typewriter"]), o2, 1)])], 8, nt));
} });
ot.install = (e2) => {
  e2.component(ot.__name, ot);
};
const rt = { class: "hard-break" }, at = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "HardBreakNode", props: { node: {} }, setup: (e2) => (e3, n2) => (openBlock(), createElementBlock("br", rt)) }), [["__scopeId", "data-v-50c58f70"]]);
at.install = (e2) => {
  e2.component(at.__name, at);
};
const lt = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "HeadingNode", props: { node: {}, customId: {}, indexKey: {} }, setup(e2) {
  const n2 = e2, t2 = pe(n2.customId), o2 = i({ text: In, inline_code: Ae, link: Fn, image: mn, strong: Pn, emphasis: Jn, strikethrough: On, highlight: Zn, insert: Xn, subscript: zn, superscript: En, emoji: se, checkbox: te, checkbox_input: te, footnote_reference: ke, hardbreak: at, math_inline: Tn, reference: jn }, t2);
  return (t3, r2) => withMemo([e2.node.level, e2.node.children, e2.node.attrs], () => (openBlock(), createBlock(resolveDynamicComponent(`h${e2.node.level}`), mergeProps({ class: ["heading-node", [`heading-${e2.node.level}`]], dir: "auto" }, e2.node.attrs), { default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.node.children, (t4, r3, a2, l2) => {
    const i2 = [t4];
    if (l2 && l2.key === `${e2.indexKey || "heading"}-${r3}` && isMemoSame(l2, i2)) return l2;
    const s2 = (openBlock(), createBlock(resolveDynamicComponent(o2[t4.type]), { key: `${e2.indexKey || "heading"}-${r3}`, "custom-id": n2.customId, node: t4, "index-key": `${e2.indexKey || "heading"}-${r3}` }, null, 8, ["custom-id", "node", "index-key"]));
    return s2.memo = i2, s2;
  }, r2, 0), 128))]), _: 1 }, 16, ["class"])), r2, 2);
} }), [["__scopeId", "data-v-af2f957a"]]), it = lt;
it.install = (e2) => {
  e2.component(lt.__name, lt);
};
const st = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "ListItemNode", props: { node: {}, item: {}, indexKey: {}, value: {}, customId: {}, typewriter: { type: Boolean } }, emits: ["copy"], setup(e2) {
  const n2 = e2, t2 = computed(() => {
    var e3;
    return null != (e3 = n2.node) ? e3 : n2.item;
  }), o2 = computed(() => null == n2.value ? {} : { value: n2.value });
  return (e3, r2) => {
    var a2;
    return openBlock(), createElementBlock("li", mergeProps({ class: "list-item pl-1.5 my-2", dir: "auto" }, o2.value), [withMemo([null == (a2 = t2.value) ? void 0 : a2.children], () => {
      var o3, a3;
      return createVNode(unref(Lt), { "index-key": `list-item-${n2.indexKey}`, nodes: null != (a3 = null == (o3 = t2.value) ? void 0 : o3.children) ? a3 : [], "custom-id": n2.customId, typewriter: n2.typewriter, "batch-rendering": false, onCopy: r2[0] || (r2[0] = (n3) => e3.$emit("copy", n3)) }, null, 8, ["index-key", "nodes", "custom-id", "typewriter"]);
    }, r2, 1)], 16);
  };
} }), [["__scopeId", "data-v-31a88b1f"]]);
st.install = (e2) => {
  e2.component(st.__name, st);
};
const dt = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "ListNode", props: { node: {}, customId: {}, indexKey: {}, typewriter: { type: Boolean } }, emits: ["copy"], setup(e2) {
  const n2 = computed(() => (me.value, pe(e2.customId).list_item || st));
  return (t2, o2) => (openBlock(), createBlock(resolveDynamicComponent(e2.node.ordered ? "ol" : "ul"), { class: normalizeClass(["list-node", { "list-decimal": e2.node.ordered, "list-disc": !e2.node.ordered }]) }, { default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.node.items, (r2, a2, l2, i2) => {
    var s2;
    const d2 = [r2];
    if (i2 && i2.key === `${e2.indexKey || "list"}-${a2}` && isMemoSame(i2, d2)) return i2;
    const c = (openBlock(), createBlock(resolveDynamicComponent(n2.value), { key: `${e2.indexKey || "list"}-${a2}`, node: r2, "custom-id": e2.customId, "index-key": `${e2.indexKey || "list"}-${a2}`, typewriter: e2.typewriter, value: e2.node.ordered ? (null != (s2 = e2.node.start) ? s2 : 1) + a2 : void 0, onCopy: o2[0] || (o2[0] = (e3) => t2.$emit("copy", e3)) }, null, 40, ["node", "custom-id", "index-key", "typewriter", "value"]));
    return c.memo = d2, c;
  }, o2, 1), 128))]), _: 1 }, 8, ["class"]));
} }), [["__scopeId", "data-v-01209c2b"]]);
dt.install = (e2) => {
  e2.component(dt.__name, dt);
};
const ct = { key: 1, class: "html-block-node__placeholder" }, ut = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "HtmlBlockNode", props: { node: {}, customId: {} }, setup(e2) {
  const n2 = e2, t2 = computed(() => {
    const e3 = n2.node.attrs;
    if (e3) {
      if (Array.isArray(e3)) {
        const n3 = {};
        for (const t3 of e3) {
          if (!t3 || t3.length < 2) continue;
          const [e4, o3] = t3;
          null != e4 && (n3[String(e4)] = null == o3 ? "" : String(o3));
        }
        return n3;
      }
      return e3;
    }
  }), o2 = computed(() => (me.value, pe(n2.customId))), r2 = defineComponent({ name: "DynamicRenderer", props: { nodes: { type: Array, required: true } }, render() {
    return this.nodes;
  } }), a2 = ref(null), l2 = ref("undefined" == typeof window), i2 = ref(n2.node.content), s2 = computed(() => {
    var e3;
    if (!l2.value) return { mode: "html", content: null != (e3 = i2.value) ? e3 : "" };
    const t3 = n2.node.content;
    if (!t3) return { mode: "html", content: "" };
    if (!Ee(t3, o2.value)) return { mode: "html", content: t3 };
    const r3 = Ne(t3, o2.value);
    return null === r3 ? { mode: "html", content: t3 } : { mode: "dynamic", nodes: r3 };
  }), d2 = on(), c = ref(null), u = !!n2.node.loading;
  return "undefined" != typeof window ? (watch(a2, (e3) => {
    var t3, o3;
    if (null == (o3 = null == (t3 = c.value) ? void 0 : t3.destroy) || o3.call(t3), c.value = null, !u) return l2.value = true, void (i2.value = n2.node.content);
    if (!e3) return void (l2.value = false);
    const r3 = d2(e3, { rootMargin: "400px" });
    c.value = r3, l2.value = r3.isVisible.value, r3.whenVisible.then(() => {
      l2.value = true;
    });
  }, { immediate: true }), watch(() => n2.node.content, (e3) => {
    u && !l2.value || (i2.value = e3);
  })) : l2.value = true, onBeforeUnmount(() => {
    var e3, n3;
    null == (n3 = null == (e3 = c.value) ? void 0 : e3.destroy) || n3.call(e3), c.value = null;
  }), (n3, o3) => (openBlock(), createElementBlock("div", mergeProps({ ref_key: "htmlRef", ref: a2, class: "html-block-node" }, t2.value), [l2.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, ["dynamic" === s2.value.mode ? (openBlock(), createBlock(unref(r2), { key: 0, nodes: s2.value.nodes }, null, 8, ["nodes"])) : withMemo([i2.value], () => (openBlock(), createElementBlock("div", { key: 1, innerHTML: i2.value }, null, 8, ["innerHTML"])), o3, 0)], 64)) : (openBlock(), createElementBlock("div", ct, [renderSlot(n3.$slots, "placeholder", { node: e2.node }, () => [o3[1] || (o3[1] = createBaseVNode("span", { class: "html-block-node__placeholder-bar" }, null, -1)), o3[2] || (o3[2] = createBaseVNode("span", { class: "html-block-node__placeholder-bar w-4/5" }, null, -1)), o3[3] || (o3[3] = createBaseVNode("span", { class: "html-block-node__placeholder-bar w-2/3" }, null, -1))], true)]))], 16));
} }), [["__scopeId", "data-v-72cd7570"]]);
ut.install = (e2) => {
  e2.component(ut.__name, ut);
};
const mt = { dir: "auto", class: "paragraph-node" }, ht = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "ParagraphNode", props: { node: {}, customId: {}, indexKey: {} }, setup(e2) {
  const n2 = e2, t2 = pe(n2.customId), o2 = i({ inline_code: Ae, image: mn, link: Fn, hardbreak: at, emphasis: Jn, strong: Pn, strikethrough: On, highlight: Zn, insert: Xn, subscript: zn, superscript: En, html_inline: He, html_block: ut, emoji: se, checkbox: te, math_inline: Tn, checkbox_input: te, reference: jn, footnote_anchor: et, footnote_reference: ke }, t2), r2 = Bn();
  return (t3, a2) => (openBlock(), createElementBlock("p", mt, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.node.children, (t4, a3) => (openBlock(), createElementBlock(Fragment, { key: `${e2.indexKey || "paragraph"}-${a3}` }, ["text" !== t4.type ? (openBlock(), createBlock(resolveDynamicComponent(o2[t4.type]), { key: 0, node: t4, "index-key": `${e2.indexKey}-${a3}`, "custom-id": n2.customId }, null, 8, ["node", "index-key", "custom-id"])) : (openBlock(), createElementBlock("span", { key: 1, class: normalizeClass([[unref(r2) && t4.center ? "text-node-center" : ""], "whitespace-pre-wrap break-words text-node"]) }, toDisplayString(t4.content), 3))], 64))), 128))]));
} }), [["__scopeId", "data-v-4e2afdbc"]]);
ht.install = (e2) => {
  e2.component(ht.__name, ht);
};
const pt = ["aria-busy", "aria-label", "data-language"], vt = ["textContent"], ft = /* @__PURE__ */ defineComponent({ __name: "PreCodeNode", props: { node: {} }, setup(e2) {
  const n2 = e2, t2 = computed(() => {
    var e3, t3, o3;
    const r3 = String(null != (t3 = null == (e3 = n2.node) ? void 0 : e3.language) ? t3 : "");
    return String(null != (o3 = String(r3).split(/\s+/g)[0]) ? o3 : "").toLowerCase().replace(/[^\w-]/g, "") || "plaintext";
  }), o2 = computed(() => `language-${t2.value}`), r2 = computed(() => {
    const e3 = t2.value;
    return e3 ? `Code block: ${e3}` : "Code block";
  });
  return (n3, a2) => (openBlock(), createElementBlock("pre", { class: normalizeClass([o2.value]), "aria-busy": true === e2.node.loading, "aria-label": r2.value, "data-language": t2.value, tabindex: "0" }, [createBaseVNode("code", { translate: "no", textContent: toDisplayString(e2.node.code) }, null, 8, vt)], 10, pt));
} });
ft.install = (e2) => {
  e2.component(ft.__name, ft);
};
const gt = { class: "table-node-wrapper" }, wt = ["aria-busy"], kt = { class: "border-[var(--table-border,#cbd5e1)]" }, yt = { class: "border-b" }, xt = { key: 0, class: "table-node__loading", role: "status", "aria-live": "polite" }, bt = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "TableNode", props: { node: {}, indexKey: {}, isDark: { type: Boolean }, typewriter: { type: Boolean }, customId: {} }, emits: ["copy"], setup(e2) {
  const n2 = e2, t2 = computed(() => {
    var e3;
    return null != (e3 = n2.node.loading) && e3;
  }), o2 = computed(() => {
    var e3;
    return null != (e3 = n2.node.rows) ? e3 : [];
  });
  return (r2, a2) => (openBlock(), createElementBlock("div", gt, [createBaseVNode("table", { class: normalizeClass(["my-8 text-sm table-node", { "table-node--loading": t2.value }]), "aria-busy": t2.value }, [createBaseVNode("thead", kt, [createBaseVNode("tr", yt, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.node.header.cells, (e3, t3) => (openBlock(), createElementBlock("th", { key: `header-${t3}`, dir: "auto", class: normalizeClass(["font-semibold p-[calc(4/7*1em)]", ["right" === e3.align ? "text-right" : "center" === e3.align ? "text-center" : "text-left"]]) }, [createVNode(unref(Lt), { nodes: e3.children, "index-key": `table-th-${n2.indexKey}`, "custom-id": n2.customId, typewriter: n2.typewriter, onCopy: a2[0] || (a2[0] = (e4) => r2.$emit("copy", e4)) }, null, 8, ["nodes", "index-key", "custom-id", "typewriter"])], 2))), 128))])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(o2.value, (e3, t3) => (openBlock(), createElementBlock("tr", { key: `row-${t3}`, class: normalizeClass(["border-[var(--table-border,#cbd5e1)]", [t3 < o2.value.length - 1 ? "border-b" : ""]]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(e3.cells, (e4, o3) => (openBlock(), createElementBlock("td", { key: `cell-${t3}-${o3}`, class: normalizeClass(["p-[calc(4/7*1em)]", ["right" === e4.align ? "text-right" : "center" === e4.align ? "text-center" : "text-left"]]), dir: "auto" }, [createVNode(unref(Lt), { nodes: e4.children, "index-key": `table-td-${n2.indexKey}`, "custom-id": n2.customId, typewriter: n2.typewriter, onCopy: a2[1] || (a2[1] = (e5) => r2.$emit("copy", e5)) }, null, 8, ["nodes", "index-key", "custom-id", "typewriter"])], 2))), 128))], 2))), 128))])], 10, wt), createVNode(Transition, { name: "table-node-fade" }, { default: withCtx(() => [t2.value ? (openBlock(), createElementBlock("div", xt, [renderSlot(r2.$slots, "loading", { isLoading: t2.value }, () => [a2[2] || (a2[2] = createBaseVNode("span", { class: "table-node__spinner animate-spin", "aria-hidden": "true" }, null, -1)), a2[3] || (a2[3] = createBaseVNode("span", { class: "sr-only" }, "Loading", -1))], true)])) : createCommentVNode("", true)]), _: 3 })]));
} }), [["__scopeId", "data-v-369096fa"]]);
bt.install = (e2) => {
  e2.component(bt.__name, bt);
};
const Mt = { class: "hr-node" }, _t = /* @__PURE__ */ J({}, [["render", function(e2, n2) {
  return openBlock(), createElementBlock("hr", Mt);
}], ["__scopeId", "data-v-639cbad9"]]);
_t.install = (e2) => {
  e2.component(_t.__name, _t);
};
const Ct = { class: "unknown-node" }, Bt = /* @__PURE__ */ defineComponent({ __name: "FallbackComponent", props: { node: {} }, setup: (e2) => (n2, t2) => (openBlock(), createElementBlock("div", Ct, toDisplayString(e2.node.raw), 1)) }), It = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "VmrContainerNode", props: { node: {}, indexKey: {}, isDark: { type: Boolean }, typewriter: { type: Boolean }, customId: {} }, setup(e2) {
  const n2 = e2, t2 = computed(() => `vmr-container vmr-container-${n2.node.name}`), o2 = pe(n2.customId), r2 = i({ text: In, paragraph: ht, heading: it, inline_code: Ae, link: Fn, image: mn, strong: Pn, emphasis: Jn, strikethrough: On, insert: Xn, subscript: zn, superscript: En, checkbox: te, checkbox_input: te, hardbreak: at, math_inline: Tn, reference: jn, list: dt, math_block: Ln, table: bt }, o2);
  return (o3, a2) => (openBlock(), createElementBlock("div", mergeProps({ class: t2.value }, e2.node.attrs), [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.node.children, (t3, o4, a3, l2) => {
    const i2 = [t3];
    if (l2 && l2.key === `${e2.indexKey || "vmr-container"}-${o4}` && isMemoSame(l2, i2)) return l2;
    const s2 = (openBlock(), createBlock(resolveDynamicComponent((d2 = t3.type, r2[d2] || Bt)), { key: `${e2.indexKey || "vmr-container"}-${o4}`, "custom-id": n2.customId, node: t3, "index-key": `${e2.indexKey || "vmr-container"}-${o4}` }, null, 8, ["custom-id", "node", "index-key"]));
    var d2;
    return s2.memo = i2, s2;
  }, a2, 0), 128))], 16));
} }), [["__scopeId", "data-v-fac7405d"]]);
It.install = (e2) => {
  e2.component(It.__name, It);
};
const Tt = ["data-node-index", "data-node-type"], Lt = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "NodeRenderer", props: { content: {}, nodes: {}, final: { type: Boolean }, parseOptions: {}, customMarkdownIt: {}, debugPerformance: { type: Boolean, default: false }, customHtmlTags: {}, viewportPriority: { type: Boolean }, codeBlockStream: { type: Boolean, default: true }, codeBlockDarkTheme: {}, codeBlockLightTheme: {}, codeBlockMonacoOptions: {}, renderCodeBlocksAsPre: { type: Boolean }, codeBlockMinWidth: {}, codeBlockMaxWidth: {}, codeBlockProps: {}, themes: {}, isDark: { type: Boolean }, customId: {}, indexKey: {}, typewriter: { type: Boolean, default: true }, batchRendering: { type: Boolean, default: true }, initialRenderBatchSize: { default: 40 }, renderBatchSize: { default: 80 }, renderBatchDelay: { default: 16 }, renderBatchBudgetMs: { default: 6 }, renderBatchIdleTimeoutMs: { default: 120 }, deferNodesUntilVisible: { type: Boolean, default: true }, maxLiveNodes: { default: 320 }, liveNodeBuffer: { default: 60 } }, emits: ["copy", "handleArtifactClick", "click", "mouseover", "mouseout"], setup(e2, { emit: n2 }) {
  var t2, o2, r2;
  const a2 = e2, l2 = n2, s2 = ref(), m = ref(false), h2 = /auto|scroll|overlay/i, f = "undefined" != typeof window, g = computed(() => a2.debugPerformance && f && "undefined" != typeof console);
  function w(e3, n3) {
    g.value && console.info(`[markstream-vue][perf] ${e3}`, n3);
  }
  function k(e3) {
    if ("undefined" == typeof window) return null;
    const n3 = null != e3 ? e3 : s2.value;
    if (!n3) return null;
    const t3 = n3.ownerDocument || document, o3 = t3.scrollingElement || t3.documentElement;
    let r3 = n3;
    for (; r3 && r3 !== t3.body && r3 !== o3; ) {
      const e4 = window.getComputedStyle(r3), n4 = (e4.overflowY || "").toLowerCase(), t4 = (e4.overflow || "").toLowerCase();
      if (h2.test(n4) || h2.test(t4)) return r3;
      r3 = r3.parentElement;
    }
    return null;
  }
  const b = a2.customId ? `renderer-${a2.customId}` : `renderer-${Date.now()}-${Math.random().toString(36).slice(2)}`, M = getMarkdown(b), _ = computed(() => {
    const e3 = a2.customHtmlTags;
    return e3 && 0 !== e3.length ? getMarkdown(b, { customHtmlTags: e3 }) : M;
  }), T = computed(() => {
    const e3 = _.value;
    return a2.customMarkdownIt ? a2.customMarkdownIt(e3) : e3;
  });
  function S(e3) {
    const n3 = String(null != e3 ? e3 : "").trim();
    if (!n3) return "";
    const t3 = n3.match(/^[<\s/]*([A-Z][\w-]*)/i);
    return t3 ? t3[1].toLowerCase() : "";
  }
  const $ = computed(() => {
    var e3, n3, t3, o3;
    const r3 = null != (e3 = a2.parseOptions) ? e3 : {}, l3 = null != (n3 = a2.final) ? n3 : r3.final, s3 = [...null != (t3 = a2.customHtmlTags) ? t3 : [], ...null != (o3 = r3.customHtmlTags) ? o3 : []].map(S).filter(Boolean), d2 = null != l3, c = s3.length > 0;
    return d2 || c ? i(i(i({}, r3), d2 ? { final: l3 } : {}), c ? { customHtmlTags: Array.from(new Set(s3)) } : {}) : r3;
  }), P = computed(() => {
    var e3;
    if (null == (e3 = a2.nodes) ? void 0 : e3.length) return markRaw(a2.nodes.slice());
    if (a2.content) {
      const e4 = g.value ? performance.now() : 0, n3 = parseMarkdownToStructure(a2.content, T.value, $.value);
      return g.value && w("parse(sync)", { ms: Math.round(performance.now() - e4), nodes: n3.length, contentLength: a2.content.length }), markRaw(n3);
    }
    return [];
  }), V = computed(() => {
    var e3;
    return Math.max(1, null != (e3 = a2.maxLiveNodes) ? e3 : 320);
  }), W = computed(() => {
    var e3;
    return !((null != (e3 = a2.maxLiveNodes) ? e3 : 0) <= 0) && P.value.length > V.value;
  }), U = computed(() => false !== a2.viewportPriority && !m.value), G = (function(e3, n3) {
    const t3 = "undefined" != typeof window && "undefined" != typeof document, o3 = "boolean" == typeof n3 ? ref(n3) : n3;
    let r3 = null, a3 = null;
    const l3 = /* @__PURE__ */ new WeakMap(), s3 = (n4, s4) => {
      const d2 = ref(false);
      let c, u = false;
      const m2 = new Promise((e4) => {
        c = () => {
          u || (u = true, e4());
        };
      }), h3 = () => {
        try {
          null == r3 || r3.unobserve(n4);
        } catch (e4) {
        }
        l3.delete(n4);
      };
      if (!t3 || !o3.value) return d2.value = true, c(), { isVisible: d2, whenVisible: m2, destroy: h3 };
      !a3 && s4 && (a3 = i({}, s4));
      const p = (function(n5) {
        var o4, i2, s5;
        if (r3 || !t3) return r3;
        if ("undefined" == typeof IntersectionObserver) return null;
        const d3 = null != (o4 = null == e3 ? void 0 : e3(null != n5 ? n5 : null)) ? o4 : null, c2 = a3 || {};
        return r3 = new IntersectionObserver((e4) => {
          for (const t4 of e4) {
            const e5 = l3.get(t4.target);
            if (e5 && (t4.isIntersecting || t4.intersectionRatio > 0)) {
              if (!e5.visible.value) {
                e5.visible.value = true;
                try {
                  e5.resolve();
                } catch (n6) {
                }
              }
              null == r3 || r3.unobserve(t4.target), l3.delete(t4.target);
            }
          }
        }, { root: d3, rootMargin: null != (i2 = c2.rootMargin) ? i2 : "300px", threshold: null != (s5 = c2.threshold) ? s5 : 0 }), r3;
      })(n4);
      return p ? (l3.set(n4, { resolve: c, visible: d2 }), p.observe(n4), { isVisible: d2, whenVisible: m2, destroy: h3 }) : (d2.value = true, c(), { isVisible: d2, whenVisible: m2, destroy: h3 });
    };
    return provide(tn, s3), s3;
  })((e3) => {
    var n3;
    return k(null != (n3 = null != e3 ? e3 : s2.value) ? n3 : null);
  }, U), Z = f && "function" == typeof window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : null, Y2 = f && "function" == typeof window.cancelAnimationFrame ? window.cancelAnimationFrame.bind(window) : null, J2 = "undefined" != typeof globalThis && void 0 !== globalThis.process && "test" === (null == (o2 = null == (t2 = globalThis.process) ? void 0 : t2.env) ? void 0 : o2.NODE_ENV), ee2 = f && "function" == typeof window.requestIdleCallback, ne2 = computed(() => {
    var e3;
    const n3 = Math.trunc(null != (e3 = a2.renderBatchSize) ? e3 : 80);
    return Number.isFinite(n3) ? Math.max(0, n3) : 0;
  }), oe2 = computed(() => {
    var e3;
    const n3 = Math.trunc(null != (e3 = a2.initialRenderBatchSize) ? e3 : ne2.value);
    return Number.isFinite(n3) ? Math.max(0, n3) : ne2.value;
  }), re2 = computed(() => false !== a2.batchRendering && ne2.value > 0 && f && !J2), ae2 = ref(0), ie2 = ref({ key: a2.indexKey, total: 0 }), de2 = ref(Math.max(1, ne2.value || 1)), ce2 = reactive({}), ue2 = /* @__PURE__ */ new Map(), he2 = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), fe = ref(null);
  let ge2 = null, we2 = null;
  const ye2 = computed(() => {
    var e3;
    return false !== a2.deferNodesUntilVisible && !((null != (e3 = a2.maxLiveNodes) ? e3 : 0) <= 0) && !W.value && !(P.value.length > 900) && U.value;
  }), xe2 = computed(() => {
    var e3;
    return re2.value && (null != (e3 = a2.maxLiveNodes) ? e3 : 0) <= 0;
  }), be2 = ref({ batchSize: ne2.value, initial: oe2.value, delay: null != (r2 = a2.renderBatchDelay) ? r2 : 16, enabled: xe2.value }), Me2 = computed(() => !!G && (ye2.value || W.value)), _e2 = computed(() => {
    var e3;
    return Math.max(0, null != (e3 = a2.liveNodeBuffer) ? e3 : 60);
  }), Ce2 = ref(0), Be2 = reactive({ start: 0, end: 0 }), Ie2 = /* @__PURE__ */ new Map(), Te2 = computed(() => {
    if (!W.value) return P.value.length;
    const e3 = _e2.value, n3 = Math.max(Be2.end + e3, oe2.value), t3 = Math.min(P.value.length, n3);
    return Math.max(ae2.value, t3);
  });
  function Le2(e3) {
    var n3, t3, o3, r3;
    const a3 = k(null != (n3 = null != e3 ? e3 : s2.value) ? n3 : null);
    if (a3) return a3;
    const l3 = null != (r3 = null != (o3 = null == e3 ? void 0 : e3.ownerDocument) ? o3 : null == (t3 = s2.value) ? void 0 : t3.ownerDocument) ? r3 : "undefined" != typeof document ? document : null;
    return (null == l3 ? void 0 : l3.scrollingElement) || (null == l3 ? void 0 : l3.documentElement) || null;
  }
  function je2(e3) {
    if (!f) return false;
    try {
      const n3 = window.getComputedStyle(e3);
      return !!(n3.display || "").toLowerCase().includes("flex") && (n3.flexDirection || "").toLowerCase().endsWith("reverse");
    } catch (n3) {
      return false;
    }
  }
  function Se2() {
    ge2 && (ge2(), ge2 = null), fe.value = null;
  }
  function $e2() {
    if (!f || !W.value) return;
    const e3 = Le2();
    if (!e3 || fe.value === e3) return;
    Se2();
    const n3 = () => Ne2();
    e3.addEventListener("scroll", n3, { passive: true }), fe.value = e3, ge2 = () => {
      e3.removeEventListener("scroll", n3);
    };
  }
  function Ee2() {
    var e3, n3, t3;
    if (!we2) return;
    const o3 = null != (t3 = null == (n3 = null == (e3 = s2.value) ? void 0 : e3.ownerDocument) ? void 0 : n3.defaultView) ? t3 : "undefined" != typeof window ? window : null;
    we2.viaTimeout ? o3 ? o3.clearTimeout(we2.id) : clearTimeout(we2.id) : null == Y2 || Y2(we2.id), we2 = null;
  }
  function Ne2(e3 = {}) {
    var n3, t3, o3;
    if (!W.value) return;
    if (!f) return void ze2(true);
    if (e3.immediate) return Ee2(), void ze2(true);
    if (we2) return;
    const r3 = () => {
      we2 = null, ze2();
    };
    if (Z) we2 = { id: Z(r3), viaTimeout: false };
    else {
      const e4 = null != (o3 = null == (t3 = null == (n3 = s2.value) ? void 0 : n3.ownerDocument) ? void 0 : t3.defaultView) ? o3 : "undefined" != typeof window ? window : null, a3 = e4 ? e4.setTimeout(r3, 16) : setTimeout(r3, 16);
      we2 = { id: a3, viaTimeout: true };
    }
  }
  function ze2(e3 = false) {
    var n3, t3, o3, r3, a3, l3, i2;
    if (!W.value) return;
    const d2 = fe.value || Le2();
    if (!d2) return;
    const c = d2.ownerDocument || (null == (n3 = s2.value) ? void 0 : n3.ownerDocument) || document, u = (null == c ? void 0 : c.defaultView) || ("undefined" != typeof window ? window : null), m2 = d2 === (null == c ? void 0 : c.documentElement) || d2 === (null == c ? void 0 : c.body), h3 = P.value.length;
    if (!m2 && h3 > 0 && je2(d2)) {
      const n4 = d2.clientHeight || 0, t4 = d2.scrollTop, o4 = t4 < 0 ? -t4 : t4, r4 = (function(e4) {
        var n5;
        const t5 = P.value;
        if (!t5.length) return 0;
        if (e4 <= 0) return Math.max(0, t5.length - 1);
        let o5 = e4;
        for (let r5 = t5.length - 1; r5 >= 0; r5--) {
          const e5 = null != (n5 = Ve2[r5]) ? n5 : Re2.value;
          if (o5 <= e5) return r5;
          o5 -= e5;
        }
        return 0;
      })(Math.max(0, o4) + 0.5 * Math.max(0, n4)), a4 = Pe2(r4, 0, Math.max(0, h3 - 1));
      return void ((e3 || Math.abs(a4 - Ce2.value) > 1) && (Ce2.value = a4));
    }
    const p = m2 ? null : d2.getBoundingClientRect(), v = m2 ? 0 : p.top, f2 = m2 ? null != (o3 = null != (t3 = null == u ? void 0 : u.innerHeight) ? t3 : d2.clientHeight) ? o3 : 0 : p.bottom, g2 = Array.from(ve.entries()).sort((e4, n4) => e4[0] - n4[0]);
    let w2 = null, k2 = null;
    for (const [s3, x] of g2) {
      if (!x) continue;
      const e4 = x.getBoundingClientRect();
      e4.bottom <= v || e4.top >= f2 || (null == w2 && (w2 = s3), k2 = s3);
    }
    if (null == w2 || null == k2) {
      const e4 = s2.value;
      if (!e4) return;
      const n4 = m2 ? { top: 0 } : d2.getBoundingClientRect(), t4 = (function(e5, n5, t5) {
        var o5, r4, a4, l4, i3, s3;
        if (t5) return null != (l4 = null != (a4 = null == (o5 = null == n5 ? void 0 : n5.documentElement) ? void 0 : o5.scrollTop) ? a4 : null == (r4 = null == n5 ? void 0 : n5.body) ? void 0 : r4.scrollTop) ? l4 : 0;
        const d3 = e5.scrollTop;
        if (!je2(e5)) return d3;
        const c2 = d3 < 0 ? -d3 : d3;
        return Math.max(0, (null != (i3 = e5.scrollHeight) ? i3 : 0) - (null != (s3 = e5.clientHeight) ? s3 : 0)) - c2;
      })(d2, c, m2), o4 = m2 ? (() => {
        const t5 = e4.getBoundingClientRect(), o5 = (m2 ? 0 : n4.top) - t5.top;
        return Math.max(0, o5);
      })() : (() => {
        const n5 = (function(e5, n6) {
          let t5 = e5, o5 = 0, r4 = 0;
          for (; t5 && t5 !== n6 && r4++ < 64; ) o5 += t5.offsetTop || 0, t5 = t5.offsetParent;
          return o5;
        })(e4, d2);
        return Math.max(0, t4 - n5);
      })(), h4 = m2 ? null != (i2 = null != (l3 = null != (a3 = null == u ? void 0 : u.innerHeight) ? a3 : null == (r3 = null == c ? void 0 : c.documentElement) ? void 0 : r3.clientHeight) ? l3 : d2.clientHeight) ? i2 : 0 : d2.clientHeight, p2 = (function(e5) {
        var n5;
        if (e5 <= 0) return 0;
        let t5 = e5;
        const o5 = P.value;
        for (let r4 = 0; r4 < o5.length; r4++) {
          const e6 = null != (n5 = Ve2[r4]) ? n5 : Re2.value;
          if (t5 <= e6) return r4;
          t5 -= e6;
        }
        return Math.max(0, o5.length - 1);
      })(o4 + 0.5 * Math.max(0, h4));
      return void (Ce2.value = Pe2(p2, 0, Math.max(0, P.value.length - 1)));
    }
    const y = Math.round((w2 + k2) / 2);
    !e3 && Math.abs(y - Ce2.value) <= 1 || (Ce2.value = Pe2(y, 0, Math.max(0, P.value.length - 1)));
  }
  function Pe2(e3, n3, t3) {
    return Math.min(Math.max(e3, n3), t3);
  }
  const Ve2 = reactive({}), Oe2 = reactive({ total: 0, count: 0 }), Re2 = computed(() => Oe2.count > 0 ? Math.max(12, Oe2.total / Oe2.count) : 32);
  function Ke2(e3, n3) {
    var t3;
    if (e3 >= n3) return 0;
    let o3 = 0;
    for (let r3 = e3; r3 < n3; r3++) o3 += null != (t3 = Ve2[r3]) ? t3 : Re2.value;
    return o3;
  }
  const We2 = computed(() => {
    if (!W.value) return P.value.map((e4, n4) => ({ node: e4, index: n4 }));
    const e3 = P.value.length, n3 = Pe2(Be2.start, 0, e3), t3 = Pe2(Be2.end, n3, e3);
    return P.value.slice(n3, t3).map((e4, t4) => ({ node: e4, index: n3 + t4 }));
  }), De2 = computed(() => W.value ? Ke2(0, Math.min(Be2.start, P.value.length)) : 0), Ue2 = computed(() => {
    if (!W.value) return 0;
    const e3 = P.value.length;
    return Ke2(Math.min(Be2.end, e3), e3);
  });
  function Fe2(e3) {
    if (ue2.size && W.value) for (const [n3, t3] of ue2) n3 >= e3 && (t3.destroy(), ue2.delete(n3), ye2.value && delete ce2[n3], on2(n3), ve.delete(n3));
  }
  function qe2(e3, n3) {
    ye2.value && (ce2[e3] = n3), n3 && (W.value ? Ne2() : Ce2.value = Pe2(e3, 0, Math.max(0, P.value.length - 1)));
  }
  function Xe2(e3) {
    const n3 = ue2.get(e3);
    n3 && (n3.destroy(), ue2.delete(e3)), on2(e3);
  }
  function Ge2(e3, n3) {
    if (n3 ? ve.set(e3, n3) : ve.delete(e3), n3 || on2(e3), !Me2.value || !G) return Xe2(e3), void (n3 ? qe2(e3, true) : ye2.value && delete ce2[e3]);
    if (!W.value && ye2.value && !m.value && ue2.size >= 640 && ((function() {
      if (!m.value) {
        m.value = true;
        for (const e4 of ue2.values()) e4.destroy();
        if (ue2.clear(), f) for (const e4 of he2.values()) window.clearTimeout(e4);
        he2.clear();
        for (const e4 of Object.keys(ce2)) delete ce2[e4];
      }
    })(), !Me2.value || !G)) return Xe2(e3), void (n3 ? qe2(e3, true) : ye2.value && delete ce2[e3]);
    if (e3 < oe2.value && !W.value) return Xe2(e3), void qe2(e3, true);
    if (!n3) return Xe2(e3), void (ye2.value && delete ce2[e3]);
    Xe2(e3);
    const t3 = G(n3, { rootMargin: "400px" });
    t3 && (ue2.set(e3, t3), qe2(e3, t3.isVisible.value), ye2.value && (function(e4) {
      if (!f || !ye2.value) return;
      on2(e4);
      const n4 = e4 % 17 * 23, t4 = window.setTimeout(() => {
        var n5, t5;
        if (he2.delete(e4), !ye2.value) return;
        if (true === ce2[e4]) return;
        const o3 = ve.get(e4);
        if (!o3) return void delete ce2[e4];
        const r3 = Le2(o3), a3 = o3.ownerDocument || document, l3 = a3.defaultView || window, i2 = !r3 || r3 === a3.documentElement || r3 === a3.body, s3 = !i2 && r3 ? r3.getBoundingClientRect() : null, d2 = i2 ? 0 : s3.top, c = i2 ? null != (t5 = null != (n5 = l3.innerHeight) ? n5 : null == r3 ? void 0 : r3.clientHeight) ? t5 : 0 : s3.bottom, u = o3.getBoundingClientRect();
        u.bottom >= d2 - 500 && u.top <= c + 500 && qe2(e4, true);
      }, 1800 + n4);
      he2.set(e4, t4);
    })(e3), t3.whenVisible.then(() => {
      on2(e3), qe2(e3, true);
    }).catch(() => {
    }).finally(() => {
      ue2.get(e3) === t3 && ue2.delete(e3);
      try {
        t3.destroy();
      } catch (n4) {
      }
    }), W.value && Ne2());
  }
  let Ze2 = null, Ye2 = null, Je2 = false, Qe2 = null, en = null;
  function nn2() {
    f && (null != Ze2 && (null == Y2 || Y2(Ze2), Ze2 = null), null != Ye2 && (window.clearTimeout(Ye2), Ye2 = null), null != en && "function" == typeof window.cancelIdleCallback && (window.cancelIdleCallback(en), en = null), Je2 = false, Qe2 = null);
  }
  function on2(e3) {
    if (!f) return;
    const n3 = he2.get(e3);
    null != n3 && (window.clearTimeout(n3), he2.delete(e3));
  }
  function rn2(e3, n3 = {}) {
    var t3, o3;
    if (!xe2.value) return;
    const r3 = Te2.value;
    if (ae2.value >= r3) return;
    const l3 = Math.max(1, e3), i2 = (e4) => {
      var n4;
      Ze2 = null, Ye2 = null, en = null, Je2 = false;
      const t4 = null != Qe2 ? Qe2 : l3;
      Qe2 = null;
      const o4 = Math.max(2, null != (n4 = a2.renderBatchBudgetMs) ? n4 : 6), i3 = (e5) => {
        const n5 = "undefined" != typeof performance ? performance.now() : Date.now();
        ae2.value = Math.min(r3, ae2.value + Math.max(1, e5)), Fe2(ae2.value);
        const t5 = ("undefined" != typeof performance ? performance.now() : Date.now()) - n5;
        return (function(e6) {
          var n6;
          if (!xe2.value) return;
          const t6 = Math.max(2, null != (n6 = a2.renderBatchBudgetMs) ? n6 : 6), o5 = Math.max(1, ne2.value || 1), r4 = Math.max(1, Math.floor(o5 / 4));
          e6 > 1.2 * t6 ? de2.value = Math.max(r4, Math.floor(0.7 * de2.value)) : e6 < 0.5 * t6 && de2.value < o5 && (de2.value = Math.min(o5, Math.ceil(1.2 * de2.value)));
        })(t5), t5;
      };
      let s4 = t4;
      for (; (i3(s4), !(ae2.value >= r3) && e4) && !(("function" == typeof e4.timeRemaining ? e4.timeRemaining() : 0) <= 0.5 * o4); ) s4 = Math.max(1, Math.round(de2.value));
      ae2.value < r3 && an2();
    };
    if (!f || n3.immediate) return void i2();
    const s3 = Math.max(0, null != (t3 = a2.renderBatchDelay) ? t3 : 16);
    if (Qe2 = null != Qe2 ? Math.max(Qe2, l3) : l3, !Je2) {
      if (Je2 = true, !J2 && ee2 && window.requestIdleCallback) {
        const e4 = Math.max(0, null != (o3 = a2.renderBatchIdleTimeoutMs) ? o3 : 120);
        return void (en = window.requestIdleCallback((e5) => {
          i2(e5);
        }, { timeout: e4 }));
      }
      Z && !J2 ? Ze2 = Z(() => {
        0 !== s3 ? Ye2 = window.setTimeout(() => i2(), s3) : i2();
      }) : Ye2 = window.setTimeout(() => i2(), s3);
    }
  }
  function an2() {
    xe2.value && rn2(re2.value ? Math.max(1, Math.round(de2.value)) : Math.max(1, ne2.value));
  }
  watch([() => P.value, () => P.value.length, () => xe2.value, () => ne2.value, () => oe2.value, () => a2.renderBatchDelay, () => a2.indexKey], () => {
    var e3;
    const n3 = P.value.length, t3 = ie2.value, o3 = a2.indexKey, r3 = void 0 !== o3 && o3 !== t3.key, l3 = n3 !== t3.total, i2 = r3 || l3;
    ie2.value = { key: o3, total: n3 };
    const s3 = be2.value, d2 = null != (e3 = a2.renderBatchDelay) ? e3 : 16, c = s3.batchSize !== ne2.value || s3.initial !== oe2.value || s3.delay !== d2 || s3.enabled !== xe2.value;
    be2.value = { batchSize: ne2.value, initial: oe2.value, delay: d2, enabled: xe2.value }, (i2 || c || !xe2.value) && nn2(), (i2 || c) && (de2.value = Math.max(1, ne2.value || 1)), i2 && W.value && Ne2({ immediate: true });
    const u = Te2.value;
    if (!n3) return ae2.value = 0, void Fe2(0);
    if (!xe2.value) return ae2.value = u, void Fe2(ae2.value);
    const m2 = r3 || 0 === t3.total;
    ae2.value = m2 || c ? Math.min(u, oe2.value) : Math.min(ae2.value, u);
    const h3 = Math.max(1, oe2.value || ne2.value || n3);
    ae2.value < u ? rn2(h3, { immediate: !f }) : Fe2(ae2.value);
  }, { immediate: true }), watch(() => W.value, (e3) => {
    if (!e3) return Se2(), void Ee2();
    $e2(), Ne2({ immediate: true });
  }, { immediate: true }), watch([() => P.value.length, () => W.value], (e3) => d(null, [e3], function* ([e4, n3]) {
    n3 && e4 && f && (yield nextTick(), Ne2({ immediate: true }));
  }), { flush: "post" }), watch(() => s2.value, () => {
    W.value && ($e2(), Ne2({ immediate: true }));
  }), watch(() => P.value.length, () => {
    W.value && Ne2({ immediate: true });
  }), watch(() => ye2.value, (e3) => {
    if (e3) for (const [n3, t3] of ve) Ge2(n3, t3);
    else {
      for (const e4 of ue2.values()) e4.destroy();
      ue2.clear();
      for (const e4 of Array.from(he2.keys())) on2(e4);
      for (const e4 of Object.keys(ce2)) delete ce2[e4];
      for (const [e4, n3] of ve) n3 && qe2(e4, true);
    }
  }, { immediate: false }), watch([() => a2.viewportPriority, () => P.value.length], ([e3, n3]) => {
    false !== e3 ? m.value && n3 <= 200 && (m.value = false) : m.value = false;
  }), watch(() => ae2.value, () => {
    W.value && Ne2({ immediate: true });
  }), watch([Ce2, V, _e2, () => P.value.length, W], () => {
    !(function() {
      const e3 = P.value.length;
      if (!W.value || 0 === e3) return Be2.start = 0, void (Be2.end = e3);
      const n3 = Math.min(V.value, e3), t3 = _e2.value, o3 = Pe2(Ce2.value - t3, 0, Math.max(0, e3 - n3));
      Be2.start = o3, Be2.end = Math.min(e3, o3 + n3);
    })();
  }, { immediate: true }), watch([() => P.value.length, W, V, _e2, () => Be2.start, () => Be2.end], ([e3, n3, t3, o3, r3, a3]) => {
    g.value && w("virtualization", { nodes: e3, virtualization: n3, maxLiveNodes: t3, buffer: o3, focusIndex: Ce2.value, scroll: n3 ? (() => {
      const e4 = fe.value || Le2();
      return e4 ? { reverse: je2(e4), scrollTop: Math.round(e4.scrollTop), scrollTopAbs: Math.round(Math.abs(e4.scrollTop)), scrollHeight: Math.round(e4.scrollHeight), clientHeight: Math.round(e4.clientHeight) } : null;
    })() : null, liveRange: { start: r3, end: a3 }, rendered: ae2.value });
  }), watch(() => Te2.value, (e3, n3) => {
    xe2.value && ("number" == typeof n3 && e3 <= n3 || e3 > ae2.value && an2());
  }), onBeforeUnmount(() => {
    nn2();
    for (const e3 of ue2.values()) e3.destroy();
    ue2.clear();
    for (const e3 of Array.from(he2.keys())) on2(e3);
    Se2(), Ee2();
  });
  const ln2 = defineAsyncComponent(() => d(null, null, function* () {
    try {
      return (yield __vitePreload(() => import("./index4-Bl9pzqoq.js"), true ? __vite__mapDeps([8,1,2,9,3]) : void 0)).default;
    } catch (e3) {
      return console.warn('[markstream-vue] Optional peer dependencies for CodeBlockNode are missing. Falling back to inline-code rendering (no Monaco). To enable full code block features, please install "stream-monaco".', e3), ft;
    }
  })), sn2 = defineAsyncComponent(() => d(null, null, function* () {
    try {
      return (yield __vitePreload(() => import("./index5-D-eY5_X1.js"), true ? __vite__mapDeps([10,1,2,9,3]) : void 0)).default;
    } catch (e3) {
      return console.warn('[markstream-vue] Optional peer dependencies for MermaidBlockNode are missing. Falling back to preformatted code rendering. To enable Mermaid rendering, please install "mermaid".', e3), ft;
    }
  })), dn2 = defineAsyncComponent(() => d(null, null, function* () {
    try {
      return (yield __vitePreload(() => import("./index6-CMxqCNon.js"), true ? __vite__mapDeps([11,1,2,3]) : void 0)).default;
    } catch (e3) {
      return console.warn('[markstream-vue] Optional peer dependencies for InfographicBlockNode are missing. Falling back to preformatted code rendering. To enable Infographic rendering, please install "@antv/infographic".', e3), ft;
    }
  })), cn2 = computed(() => a2.renderCodeBlocksAsPre ? ft : ln2), un2 = { text: In, paragraph: ht, heading: it, code_block: ln2, list: dt, list_item: st, blockquote: Q, table: bt, definition_list: le, footnote: ot, footnote_reference: ke, footnote_anchor: et, admonition: zt, vmr_container: It, hardbreak: at, link: Fn, image: mn, thematic_break: _t, math_inline: Tn, math_block: Ln, strong: Pn, emphasis: Jn, strikethrough: On, highlight: Zn, insert: Xn, subscript: zn, superscript: En, emoji: se, checkbox: te, checkbox_input: te, inline_code: Ae, html_inline: He, reference: jn, html_block: ut };
  function hn2(e3) {
    var n3;
    if (!e3) return Bt;
    me.value;
    const t3 = pe(a2.customId), o3 = t3[String(e3.type)];
    if ("code_block" === e3.type) {
      const r3 = String(null != (n3 = e3.language) ? n3 : "").trim().toLowerCase();
      if ("mermaid" === r3) return t3.mermaid || sn2;
      if ("infographic" === r3) return t3.infographic || dn2;
      if (o3) return o3;
      return t3.code_block || cn2.value;
    }
    return o3 || un2[String(e3.type)] || Bt;
  }
  function pn2(e3) {
    var n3;
    const t3 = "code_block" === (null == e3 ? void 0 : e3.type) ? String(null != (n3 = e3.language) ? n3 : "").trim().toLowerCase() : "";
    return "mermaid" === t3 || "infographic" === t3 ? {} : "code_block" === e3.type ? i({ stream: a2.codeBlockStream, darkTheme: a2.codeBlockDarkTheme, lightTheme: a2.codeBlockLightTheme, monacoOptions: a2.codeBlockMonacoOptions, themes: a2.themes, minWidth: a2.codeBlockMinWidth, maxWidth: a2.codeBlockMaxWidth }, a2.codeBlockProps || {}) : { typewriter: a2.typewriter };
  }
  function vn2(e3) {
    l2("click", e3);
  }
  function fn2(e3) {
    var n3;
    (null == (n3 = e3.target) ? void 0 : n3.closest("[data-node-index]")) && l2("mouseover", e3);
  }
  function gn2(e3) {
    var n3;
    (null == (n3 = e3.target) ? void 0 : n3.closest("[data-node-index]")) && l2("mouseout", e3);
  }
  return (n3, t3) => (openBlock(), createElementBlock("div", { ref_key: "containerRef", ref: s2, class: normalizeClass(["markstream-vue markdown-renderer", [{ dark: a2.isDark }, { virtualized: W.value }]]), onClick: vn2, onMouseover: fn2, onMouseout: gn2 }, [W.value ? (openBlock(), createElementBlock("div", { key: 0, class: "node-spacer", style: normalizeStyle({ height: `${De2.value}px` }), "aria-hidden": "true" }, null, 4)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(We2.value, (n4) => {
    var o3, r3;
    return openBlock(), createElementBlock("div", { key: n4.index, ref_for: true, ref: (e3) => Ge2(n4.index, e3), class: "node-slot", "data-node-index": n4.index, "data-node-type": n4.node.type }, [(r3 = n4.index, xe2.value && r3 >= ae2.value || ye2.value && !(r3 < oe2.value) && true !== ce2[r3] ? (openBlock(), createElementBlock("div", { key: 1, class: "node-placeholder", style: normalizeStyle({ height: `${null != (o3 = Ve2[n4.index]) ? o3 : Re2.value}px` }) }, null, 4)) : (openBlock(), createElementBlock("div", { key: 0, ref_for: true, ref: (e3) => (function(e4, n5) {
      n5 ? (Ie2.set(e4, n5), queueMicrotask(() => {
        !(function(e5, n6) {
          if (!Number.isFinite(n6) || n6 <= 0) return;
          const t4 = Ve2[e5];
          Ve2[e5] = n6, t4 ? Oe2.total += n6 - t4 : (Oe2.total += n6, Oe2.count++);
        })(e4, n5.offsetHeight);
      })) : Ie2.delete(e4);
    })(n4.index, e3), class: "node-content" }, ["code_block" !== n4.node.type && false !== a2.typewriter ? (openBlock(), createBlock(Transition, { key: 0, name: "typewriter", appear: "" }, { default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(hn2(n4.node)), mergeProps({ node: n4.node, loading: n4.node.loading, "index-key": `${e2.indexKey || "markdown-renderer"}-${n4.index}` }, { ref_for: true }, pn2(n4.node), { "custom-id": a2.customId, "is-dark": a2.isDark, onCopy: t3[0] || (t3[0] = (e3) => l2("copy", e3)), onHandleArtifactClick: t3[1] || (t3[1] = (e3) => l2("handleArtifactClick", e3)) }), null, 16, ["node", "loading", "index-key", "custom-id", "is-dark"]))]), _: 2 }, 1024)) : (openBlock(), createBlock(resolveDynamicComponent(hn2(n4.node)), mergeProps({ key: 1, node: n4.node, loading: n4.node.loading, "index-key": `${e2.indexKey || "markdown-renderer"}-${n4.index}` }, { ref_for: true }, pn2(n4.node), { "custom-id": a2.customId, "is-dark": a2.isDark, onCopy: t3[2] || (t3[2] = (e3) => l2("copy", e3)), onHandleArtifactClick: t3[3] || (t3[3] = (e3) => l2("handleArtifactClick", e3)) }), null, 16, ["node", "loading", "index-key", "custom-id", "is-dark"]))], 512)))], 8, Tt);
  }), 128)), W.value ? (openBlock(), createElementBlock("div", { key: 1, class: "node-spacer", style: normalizeStyle({ height: `${Ue2.value}px` }), "aria-hidden": "true" }, null, 4)) : createCommentVNode("", true)], 34));
} }), [["__scopeId", "data-v-d5398a71"]]);
Lt.install = (e2) => {
  var n2, t2;
  const o2 = null != (t2 = null != (n2 = Lt.__name) ? n2 : Lt.name) ? t2 : "NodeRenderer";
  e2.component(o2, Lt);
};
const jt = { key: 0, class: "admonition-icon" }, St = { class: "admonition-title" }, $t = ["aria-expanded", "aria-controls", "title"], Et = { key: 0 }, Nt = { key: 1 }, Ht = ["id"], zt = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "AdmonitionNode", props: { node: {}, indexKey: {}, isDark: { type: Boolean }, typewriter: { type: Boolean }, customId: {} }, emits: ["copy"], setup(e2, { emit: n2 }) {
  var t2;
  const o2 = e2, r2 = n2, a2 = { note: "ℹ️", info: "ℹ️", tip: "💡", warning: "⚠️", danger: "❗", error: "⛔", caution: "⚠️" }, l2 = computed(() => {
    if (o2.node.title && o2.node.title.trim().length) return o2.node.title;
    const e3 = o2.node.kind || "note";
    return e3.charAt(0).toUpperCase() + e3.slice(1);
  }), i2 = ref(!!o2.node.collapsible && !(null == (t2 = o2.node.open) || t2));
  function s2() {
    o2.node.collapsible && (i2.value = !i2.value);
  }
  const d2 = `admonition-${Math.random().toString(36).slice(2, 9)}`;
  return (n3, t3) => (openBlock(), createElementBlock("div", { class: normalizeClass(["admonition", [`admonition-${o2.node.kind}`, o2.isDark ? "is-dark" : ""]]) }, [createBaseVNode("div", { id: d2, class: "admonition-header" }, [a2[o2.node.kind] ? (openBlock(), createElementBlock("span", jt, toDisplayString(a2[o2.node.kind]), 1)) : createCommentVNode("", true), createBaseVNode("span", St, toDisplayString(l2.value), 1), o2.node.collapsible ? (openBlock(), createElementBlock("button", { key: 1, class: "admonition-toggle", "aria-expanded": !i2.value, "aria-controls": `${d2}-content`, title: i2.value ? "Expand" : "Collapse", onClick: s2 }, [i2.value ? (openBlock(), createElementBlock("span", Et, "▶")) : (openBlock(), createElementBlock("span", Nt, "▼"))], 8, $t)) : createCommentVNode("", true)]), withDirectives(createBaseVNode("div", { id: `${d2}-content`, class: "admonition-content", "aria-labelledby": d2 }, [withMemo([o2.node.children], () => createVNode(unref(Lt), { "index-key": `admonition-${e2.indexKey}`, nodes: o2.node.children, "custom-id": o2.customId, typewriter: o2.typewriter, onCopy: t3[0] || (t3[0] = (e3) => r2("copy", e3)) }, null, 8, ["index-key", "nodes", "custom-id", "typewriter"]), t3, 1)], 8, Ht), [[vShow, !i2.value]])], 2));
} }), [["__scopeId", "data-v-5e95c2b7"]]);
zt.install = (e2) => {
  e2.component(zt.__name, zt);
};
let At = false, Pt = null, Vt = false;
function Ot() {
  return d(this, null, function* () {
    if (Pt) return Pt;
    if (Vt) return null;
    try {
      return Pt = yield __vitePreload(() => import("./__vite-optional-peer-dep_stream-monaco_markstream-vue-CuWrEV46.js"), true ? [] : void 0), yield (function(e2) {
        return d(this, null, function* () {
          if (At) return;
          At = true;
          const n2 = null == globalThis ? void 0 : globalThis.MonacoEnvironment;
          return !n2 || "function" != typeof n2.getWorker && "function" != typeof n2.getWorkerUrl ? e2.preloadMonacoWorkers() : void 0;
        });
      })(Pt), (yield (function(e2) {
        return d(this, null, function* () {
          const n2 = null == e2 ? void 0 : e2.getOrCreateHighlighter;
          if ("function" != typeof n2) return true;
          try {
            const e3 = yield n2(["vitesse-dark", "vitesse-light"], ["plaintext", "text", "javascript"]);
            return e3 && "function" == typeof e3.codeToTokens && e3.codeToTokens("const a = 1", { lang: "javascript", theme: "vitesse-dark" }), true;
          } catch (t2) {
            return console.warn("[markstream-vue] Failed to warm up Shiki tokenizer; disabling stream-monaco for this session.", t2), false;
          }
        });
      })(Pt)) ? Pt : (Pt = null, Vt = true, null);
    } catch (e2) {
      return Vt = true, null;
    }
  });
}
const Wt = { "": "", javascript: "javascript", js: "javascript", mjs: "javascript", cjs: "javascript", typescript: "typescript", ts: "typescript", jsx: "jsx", tsx: "tsx", golang: "go", py: "python", rb: "ruby", sh: "shell", bash: "shell", zsh: "shell", shellscript: "shell", bat: "shell", batch: "shell", ps1: "powershell", plaintext: "plain", text: "plain", "c++": "cpp", "c#": "csharp", "objective-c": "objectivec", "objective-c++": "objectivecpp", yml: "yaml", md: "markdown", rs: "rust", kt: "kotlin" };
function Dt(e2) {
  var n2;
  const t2 = (function(e3) {
    if (!e3) return "";
    const n3 = e3.trim();
    if (!n3) return "";
    const [t3] = n3.split(/\s+/), [o2] = t3.split(":");
    return o2.toLowerCase();
  })(e2);
  return null != (n2 = Wt[t2]) ? n2 : t2;
}
function Ut(e2) {
  const n2 = Dt(e2);
  if (!n2) return "plaintext";
  switch (n2) {
    case "plain":
      return "plaintext";
    case "jsx":
      return "javascript";
    case "tsx":
      return "typescript";
    default:
      return n2;
  }
}
function Ft(e2) {
  switch (Dt(e2)) {
    case "javascript":
    case "js":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke="#e5c890" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M4.5 11c0 .828427.6715729 1.5 1.5 1.5.8284271 0 1.5-.671573 1.5-1.5V7.5M12.5 8.75C12.5 8.05964406 11.9627417 7.5 11.3 7.5L10.7 7.5C10.0372583 7.5 9.5 8.05964406 9.5 8.75 9.5 9.44035594 10.0372583 10 10.7 10L11.3 10C11.9627417 10 12.5 10.5596441 12.5 11.25 12.5 11.9403559 11.9627417 12.5 11.3 12.5L10.7 12.5C10.0372583 12.5 9.5 11.9403559 9.5 11.25" />\n    <path d="m 4,1.5 h 8 c 1.385,0 2.5,1.115 2.5,2.5 v 8 c 0,1.385 -1.115,2.5 -2.5,2.5 H 4 C 2.615,14.5 1.5,13.385 1.5,12 V 4 C 1.5,2.615 2.615,1.5 4,1.5 Z" />\n  </g>\n</svg>\n';
    case "typescript":
    case "ts":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke="#8caaee" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M4 1.5h8A2.5 2.5 0 0114.5 4v8a2.5 2.5 0 01-2.5 2.5H4A2.5 2.5 0 011.5 12V4A2.5 2.5 0 014 1.5" />\n    <path d="M12.5 8.75c0-.69-.54-1.25-1.2-1.25h-.6c-.66 0-1.2.56-1.2 1.25S10.04 10 10.7 10h.6c.66 0 1.2.56 1.2 1.25s-.54 1.25-1.2 1.25h-.6c-.66 0-1.2-.56-1.2-1.25m-3-3.75v5M5 7.5h3" />\n  </g>\n</svg>\n';
    case "jsx":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke="#99d1db" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M8 10.8c4.14 0 7.5-1.25 7.5-2.8S12.14 5.2 8 5.2.5 6.45.5 8s3.36 2.8 7.5 2.8" />\n    <path d="M5.52 9.4c2.07 3.5 4.86 5.72 6.23 4.95 1.37-.78.8-4.24-1.27-7.75C8.41 3.1 5.62.88 4.25 1.65c-1.37.78-.8 4.24 1.27 7.75" />\n    <path d="M5.52 6.6c-2.07 3.5-2.64 6.97-1.27 7.75 1.37.77 4.16-1.45 6.23-4.95s2.64-6.97 1.27-7.75C10.38.88 7.59 3.1 5.52 6.6" />\n    <path d="M8.5 8a.5.5 0 01-.5.5.5.5 0 01-.5-.5.5.5 0 01.5-.5.5.5 0 01.5.5" />\n  </g>\n</svg>\n';
    case "tsx":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke="#8caaee" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M8 11.3c4.14 0 7.5-1.28 7.5-2.86S12.14 5.58 8 5.58.5 6.86.5 8.44s3.36 2.87 7.5 2.87Z" />\n    <path d="M5.52 9.87c2.07 3.6 4.86 5.86 6.23 5.07 1.37-.8.8-4.34-1.27-7.93S5.62 1.16 4.25 1.95s-.8 4.34 1.27 7.92" />\n    <path d="M5.52 7.01c-2.07 3.59-2.64 7.14-1.27 7.93s4.16-1.48 6.23-5.07c2.07-3.58 2.64-7.13 1.27-7.92-1.37-.8-4.16 1.47-6.23 5.06" />\n    <path d="M8.5 8.44a.5.5 0 01-.5.5.5.5 0 01-.5-.5.5.5 0 01.5-.5.5.5 0 01.5.5" />\n  </g>\n</svg>\n';
    case "html":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="#ef9f76" d="M1.5 1.5h13L13 13l-5 2-5-2z" />\n    <path stroke="#c6d0f5" d="M11 4.5H5l.25 3h5.5l-.25 3-2.5 1-2.5-1-.08-1" />\n  </g>\n</svg>\n';
    case "css":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke="#ca9ee6" stroke-linecap="round" stroke-linejoin="round">\n    <path d="m4 1.5h8c1.38 0 2.5 1.12 2.5 2.5v8c0 1.38-1.12 2.5-2.5 2.5h-8c-1.38 0-2.5-1.12-2.5-2.5v-8c0-1.38 1.12-2.5 2.5-2.5z" />\n    <path stroke-width=".814" d="m 10.240861,11.529149 c 0,0.58011 0.437448,1.039154 0.96002,1.035371 l 0.451635,-0.0032 c 0.522572,-0.0036 0.949379,-0.451477 0.949379,-1.032848 0,-0.581372 -0.426807,-1.065638 -0.949379,-1.065638 l -0.451635,3.4e-5 c -0.522572,3.9e-5 -0.949379,-0.4855273 -0.949379,-1.0656374 0,-0.5801104 0.426807,-1.0378931 0.949379,-1.0378931 l 0.451635,2.825e-4 c 0.522572,3.267e-4 0.951743,0.4577827 0.951743,1.0378931 M 6.8003972,11.529149 c 0,0.58011 0.4374474,1.039154 0.9600196,1.035371 l 0.46464,-0.0032 c 0.5225722,-0.0035 0.9363738,-0.451477 0.9363738,-1.031587 0,-0.580111 -0.4090724,-1.065638 -0.9316446,-1.065638 l -0.4693692,3.4e-5 c -0.5225722,3.8e-5 -0.949379,-0.4855272 -0.949379,-1.0656373 0,-0.5801104 0.4268068,-1.0378931 0.949379,-1.0378931 h 0.4516348 c 0.5225722,0 0.9635665,0.4577827 0.9635665,1.0378931 M 3.4072246,11.529149 c 0,0.58011 0.4374474,1.051765 0.9600196,1.051765 H 4.818879 c 0.5225722,0 0.949379,-0.456521 0.949379,-1.037893 m 0.01129,-2.1312747 c 0,-0.5801103 -0.4374474,-1.037893 -0.9600196,-1.037893 L 4.3678939,8.3741358 C 3.8453217,8.3744624 3.4078743,8.8420074 3.4078743,9.4233788 v 2.1186642" />\n  </g>\n</svg>\n';
    case "scss":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#f4b8e4" stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.38c1.85 1.07 3.35.74 4.83-.2 1.5-.95 2.7-2.78 1.3-4.15-.7-.68-3.25-.8-5.62.19-2.36.99-4.59 3.02-4.74 4.11-.31 2.19 3.15 2.88 3.64 4.23s.28 1.98-.2 2.83c-.5.85-1.96 1.62-2.8.68-.83-.95 1.67-2.75 2.98-3.25 1.3-.5 3.1-.4 3.69.25.58.64-.07 1.79-.03 1.79" />\n</svg>\n';
    case "json":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#e5c890" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2.5H4c-.75 0-1.5.75-1.5 1.5v2c0 1.1-1 2-1.83 2 .83 0 1.83.9 1.83 2v2c0 .75.75 1.5 1.5 1.5h.5m7-11h.5c.75 0 1.5.75 1.5 1.5v2c0 1.1 1 2 1.83 2-.83 0-1.83.9-1.83 2v2c0 .74-.75 1.5-1.5 1.5h-.5m-6.5-3a.5.5 0 100-1 .5.5 0 000 1m3 0a.5.5 0 100-1 .5.5 0 000 1m3 0a.5.5 0 100-1 .5.5 0 000 1" />\n</svg>\n';
    case "python":
    case "py":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="#8caaee" d="M8.5 5.5h-3m6 0V3c0-.8-.7-1.5-1.5-1.5H7c-.8 0-1.5.7-1.5 1.5v2.5H3c-.8 0-1.5.7-1.5 1.5v2c0 .8.7 1.5 1.48 1.5" />\n    <path stroke="#e5c890" d="M10.5 10.5h-3m-3 0V13c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-2.5H13c.8 0 1.5-.7 1.5-1.5V7c0-.8-.7-1.5-1.48-1.5H11.5c0 1.5 0 2-1 2h-2" />\n    <path stroke="#8caaee" d="M2.98 10.5H4.5c0-1.5 0-2 1-2h2M7.5 3.5v0" />\n    <path stroke="#e5c890" d="m 8.5,12.5 v 0" />\n  </g>\n</svg>\n';
    case "ruby":
    case "rb":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#e78284" stroke-linecap="round" stroke-linejoin="round" d="M1.5 9.06v2.5c.02.86.36 1.61.9 2.15 1.76 1.76 5.71.65 8.84-2.47 3.12-3.13 4.23-7.08 2.47-8.84a3.1 3.1 0 00-2.15-.9h-2.5M14.5 4l-.25 10.25L4 14.5m4.39-6.11c2.34-2.35 3.29-5.2 2.12-6.37S6.49 1.8 4.14 4.14C1.8 6.5.85 9.34 2.02 10.51s4.02.22 6.37-2.12M5.5 14.5l.25-3.75L11 11l-.25-5.25 3.75-.25" />\n</svg>\n';
    case "go":
    case "golang":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#85c1dc" stroke-linecap="round" stroke-linejoin="round" d="m15.48 8.06-4.85.48m4.85-.48a4.98 4.98 0 01-4.54 5.42 5 5 0 112.95-8.66l-1.7 1.84a2.5 2.5 0 00-4.18 2.06c.05.57.3 1.1.69 1.51.25.27 1 .83 1.78.82.8-.02 1.58-.25 2.07-.81 0 0 .8-.96.68-1.88M2.5 8.5l-2 .01m1.5 2h1.5m-2-3.99 2-.02" />\n</svg>\n';
    case "r":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="#838ba7" d="M13.5 9.5c.63-.7 1-1.54 1-2.43 0-2.52-2.91-4.57-6.5-4.57S1.5 4.55 1.5 7.07c0 1.9 1.65 3.53 4 4.22" />\n    <path stroke="#8caaee" d="M10.5 9.5c.4 0 .86.34 1 .7l1 3.3m-5 0v-8h3.05c.95 0 1.95 1 1.95 2s-1 2-1.95 2H7.5Z" />\n  </g>\n</svg>\n';
    case "java":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="#c6d0f5" d="M10.73 8.41c.57 3 1.59 5.83 2.77 7.09-6.63-3.45-9.76-1.75-10.5 0-.66-3.4-.54-5.74.09-7.78" />\n    <path stroke="#e78284" d="M8.5 7c.63.34 1.82 1.07 2.24 1.41-.54-2.9-.64-5.96-.74-7.91-2.13.58-5.73 1.98-6.9 7.22.52-.69 1.72-1.05 2.4-1.22" />\n    <path stroke="#e78284" d="M5.5 7A1.5 1.5 0 007 8.5 1.5 1.5 0 008.5 7 1.5 1.5 0 007 5.5 1.5 1.5 0 005.5 7" />\n  </g>\n</svg>\n';
    case "kotlin":
    case "kt":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="#ca9ee6" d="M2.5 13.5h11L8 8" />\n    <path stroke="#ef9f76" d="M8.03 2.5h5.47l-8 8" />\n    <path stroke="#e78284" d="M2.5 13.5V8" />\n    <path stroke="#85c1dc" d="M8 2.5H2.5V8l3-2.5" />\n  </g>\n</svg>\n';
    case "c":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#8caaee" stroke-linecap="round" stroke-linejoin="round" d="m 4.0559072,12.951629 c 2.7459832,2.734744 7.1981158,2.734744 9.9441188,0 l -1.789955,-1.782586 c -1.75742,1.750224 -4.6067879,1.750224 -6.3642294,0 -1.7574416,-1.7502236 -1.7574416,-4.587893 0,-6.338097 1.7574415,-1.750224 4.6068094,-1.750224 6.3642294,0 l 0.894977,-0.8912929 0.894978,-0.891293 c -2.746003,-2.73472867 -7.1981359,-2.73472867 -9.944119,0 -2.7459858,2.7347089 -2.7459858,7.1685599 2e-7,9.9032689 z" clip-rule="evenodd" />\n</svg>\n';
    case "cpp":
    case "c++":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#8caaee" stroke-linecap="round" stroke-linejoin="round" d="m 2.5559121,12.951629 c 2.7459832,2.734744 7.1981158,2.734744 9.9441189,0 l -1.789955,-1.782586 c -1.7574201,1.750224 -4.606788,1.750224 -6.3642295,0 -1.7574416,-1.7502236 -1.7574416,-4.587893 0,-6.338097 1.7574415,-1.750224 4.6068094,-1.750224 6.3642295,0 l 0.894977,-0.8912929 0.894978,-0.891293 c -2.7460031,-2.73472867 -7.198136,-2.73472867 -9.9441191,0 -2.74598585,2.7347089 -2.74598585,7.1685599 2e-7,9.9032689 z" clip-rule="evenodd" />\n  <path fill="none" stroke="#8caaee" stroke-linecap="round" stroke-linejoin="round" d="M7.5 6v4M5.513524 7.9999996H9.51304M13.486476 5.9999996v4M11.5 7.9999992h3.999516" />\n</svg>\n';
    case "cs":
    case "csharp":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#8caaee" d="m 6.665625,1.0107144 c 0.54375,0.090628 0.9125,0.6062693 0.821875,1.1500367 L 7.18125,3.9983098 h 2.971875 L 10.5125,1.8326156 c 0.09063,-0.5437673 0.60625,-0.9125291 1.15,-0.8219012 0.54375,0.090628 0.9125,0.6062693 0.821875,1.1500367 L 12.18125,3.9983098 H 14 c 0.553125,0 1,0.4468892 1,1.0000319 0,0.5531426 -0.446875,1.0000319 -1,1.0000319 H 11.846875 L 11.18125,9.9985013 H 13 c 0.553125,0 1,0.4468897 1,1.0000317 0,0.553143 -0.446875,1.000032 -1,1.000032 H 10.846875 L 10.4875,14.164259 c -0.09063,0.543768 -0.60625,0.912529 -1.15,0.821902 -0.54375,-0.09063 -0.9125,-0.60627 -0.821875,-1.150037 l 0.30625,-1.834434 h -2.975 L 5.4875,14.167384 c -0.090625,0.543768 -0.60625,0.91253 -1.15,0.821902 C 3.79375,14.898658 3.425,14.383016 3.515625,13.839249 L 3.81875,11.998565 H 2 c -0.553125,0 -1,-0.446889 -1,-1.000032 C 1,10.445391 1.446875,9.9985013 2,9.9985013 H 4.153125 L 4.81875,5.9983736 H 3 c -0.553125,0 -1,-0.4468893 -1,-1.0000319 C 2,4.445199 2.446875,3.9983098 3,3.9983098 H 5.153125 L 5.5125,1.8326156 C 5.603125,1.2888483 6.11875,0.9200865 6.6625,1.0107144 Z M 6.846875,5.9983736 6.18125,9.9985013 H 9.153125 L 9.81875,5.9983736 Z" />\n</svg>\n';
    case "php":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#8caaee" stroke-linecap="round" stroke-linejoin="round" d="M0.5,12.5 L0.5,13.24 C0.5,14 1.27360724,14.5 2,14.5 C2.9375516,14.5 3.5,14 3.5,13.2445661 L3.5,6.00089968 C3.5,4.28551107 4.99401107,2.52263547 7.14960413,2.5 C9.49387886,2.5 11,4.0579782 11,5.5 C11.1657296,8.48962302 9.57820404,9.63684469 7.49621582,10.5 L7.49621582,14.5 L15.4979764,14.5 L15.4979764,9 C15.5394484,8.36478228 14.9387379,7.15595371 14.1308258,6.5 C13.1942239,5.80827275 12.0584852,5.50253264 11,5.5 M11.5,14.5 L11.5,11.5 M6,6.5 C6.27614237,6.5 6.5,6.27614237 6.5,6 C6.5,5.72385763 6.27614237,5.5 6,5.5 C5.72385763,5.5 5.5,5.72385763 5.5,6 C5.5,6.27614237 5.72385763,6.5 6,6.5 Z" />\n</svg>\n';
    case "scala":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#e78284" stroke-linecap="round" stroke-linejoin="round" d="m2.5 2.48 11-.98v3.04l-11 1zm0 5 11-.98v3.04l-11 1zm0 5 11-.98v3.04l-11 1z" />\n</svg>\n';
    case "shell":
    case "sh":
    case "bash":
    case "zsh":
    case "powershell":
    case "ps1":
    case "bat":
    case "batch":
    case "shellscript":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke="#8caaee" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M2 15.5c-.7 0-1.5-.8-1.5-1.5V5c0-.7.8-1.5 1.5-1.5h9c.7 0 1.5.8 1.5 1.5v9c0 .7-.8 1.5-1.5 1.5z" />\n    <path d="m1.2 3.8 3.04-2.5S5.17.5 5.7.5h8.4c.66 0 1.4.73 1.4 1.4v7.73a2.7 2.7 0 01-.7 1.75l-2.68 3.51M3 8.5l3 2-3 2m4 0h2" />\n  </g>\n</svg>\n';
    case "sql":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#e5c890" stroke-linecap="round" stroke-linejoin="round" d="M8 6.5c3.59 0 6.5-1.4 6.5-2.68S11.59 1.5 8 1.5 1.5 2.54 1.5 3.82 4.41 6.5 8 6.5M14.5 8c0 .83-1.24 1.79-3.25 2.2s-4.49.41-6.5 0S1.5 8.83 1.5 8m13 4.18c0 .83-1.24 1.6-3.25 2-2.01.42-4.49.42-6.5 0-2.01-.4-3.25-1.17-3.25-2m0-8.3v8.3m13-8.3v8.3" />\n</svg>\n';
    case "yaml":
    case "yml":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#e78284" stroke-linecap="round" stroke-linejoin="round" d="M2.5 1.5h3l3 4 3-4h3l-9 13h-3L7 8z" />\n</svg>\n';
    case "markdown":
    case "md":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#85c1dc" stroke-linecap="round" stroke-linejoin="round" d="m9.25 8.25 2.25 2.25 2.25-2.25M3.5 11V5.5l2.04 3 1.96-3V11m4-.5V5M1.65 2.5h12.7c.59 0 1.15.49 1.15 1v9c0 .51-.56 1-1.15 1H1.65c-.59 0-1.15-.49-1.15-1V3.58c0-.5.56-1.08 1.15-1.08" />\n</svg>\n';
    case "xml":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#ef9f76" stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5 1 8 4.5 11.5M11.5 4.5 15 8 11.5 11.5M9.5 2 6.5 14" />\n</svg>\n';
    case "rust":
    case "rs":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke="#ef9f76" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M15.5 9.5Q8 13.505.5 9.5l1-1-1-2 2-.5V4.5h2l.5-2 1.5 1 1.5-2 1.5 2 1.5-1 .5 2h2V6l2 .5-1 2z" />\n    <path d="M6.5 7.5a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1m5 0a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1M4 11.02c-.67.37-1.5.98-1.5 2.23s1.22 1.22 2 1.25v-2M12 11c.67.37 1.5 1 1.5 2.25s-1.22 1.22-2 1.25v-2" />\n  </g>\n</svg>\n';
    case "swift":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#ef9f76" stroke-linecap="round" stroke-linejoin="round" d="M14.34 10.2c.34-1.08 1.1-5.07-4.45-8.62a.48.48 0 00-.6.07.44.44 0 00-.02.6c.03.02 2.07 2.5 1.34 5.34-1.26-.86-6.24-4.81-6.24-4.81L7.25 7.5 1.9 4.05S5.68 8.7 8 10.45c-1.12.4-3.56.82-6.78-1.18a.48.48 0 00-.58.06.44.44 0 00-.08.56c.11.18 2.7 4.36 8.14 4.36 1.5 0 2.37-.42 3.08-.77.43-.2.77-.37 1.14-.37.93 0 1.54.92 1.54.93.1.14.27.22.44.21a.46.46 0 00.4-.28c.67-1.55-.49-3.2-.96-3.78h0Z" />\n</svg>\n';
    case "perl":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#8caaee" stroke-linecap="round" stroke-linejoin="round" d="M12.5 14.5v-3.34c-1-.66-1-1.35-1-2.66m-3 1 .02 2.53.98 2.47m-4-5v5m9 0V9.23s.17-1.73-1-1.73c0-1.5-.5-6-2.5-6S8.75 4.25 8.75 4.25A3.67 3.67 0 006.5 7.12v-3.5c0-.63-.85-1.32-1.5-1.32-.92 0-1.33.59-1.5 1.2H2.25c-.42.11-.75.59-.75 1 0 .5.28 1 .75 1h1.22l.02 3c.01.75.51 1 1.51 1h4.5" />\n</svg>\n';
    case "lua":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="#c6d0f5" d="M10.5 7A1.5 1.5 0 019 8.5 1.5 1.5 0 017.5 7 1.5 1.5 0 019 5.5 1.5 1.5 0 0110.5 7" />\n    <path stroke="#8caaee" d="M7 2.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13m7-2a1.5 1.5 0 100 3 1.5 1.5 0 000-3" />\n  </g>\n</svg>\n';
    case "haskell":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#ca9ee6" stroke-linecap="round" stroke-linejoin="round" d="M12.5 4.5h3m-1.5 3h1.5m-10 6 2.5-5-2.5-5H8l5.6 10h-2.53l-1.52-2.92L8 13.5zm-5 0 2.5-5-2.5-5H3l2.5 5-2.5 5z" />\n</svg>\n';
    case "erlang":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke="#e78284" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M6.5 5.5c0-1.25 1-2 2-2s2 .75 2 2z" />\n    <path d="M13.5 13c.47-.57 1.12-1.24 1.5-2l-2.25-1.25c-.74 1.36-1.76 2.75-3.25 2.75-2.1 0-3-2.3-3-5h8c.05-1.61-.31-3.45-1-4.5M3 13c-1.08-1.3-1.5-3-1.5-5S2.1 4.24 3 3" />\n  </g>\n</svg>\n';
    case "clojure":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="#a6d189" d="M14.17 10.03A6.5 6.5 0 011.81 6.02" />\n    <path stroke="#8caaee" d="M1.87 5.85A6.5 6.5 0 0114.22 9.9" />\n    <path stroke="#a6d189" d="M6.36 4.9a3.5 3.5 0 103.41 6.12" />\n    <path stroke="#8caaee" d="M9.77 11.02a3.5 3.5 0 00-3.03-6.29" />\n    <path stroke="#c6d0f5" d="M8 7.5s-1.66 2.48-1.5 3.65" />\n    <path stroke="#c6d0f5" d="M1.81 6.02C2.47 5 3.83 4.49 5 4.46c4.06 0 3 5.56 5.03 6.86 1.21.52 3.5-.21 4.15-1.32" />\n  </g>\n</svg>\n';
    case "vue":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke="#a6d189" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M1 1.5h5.44L8 4.56 9.56 1.5H15l-6.99 13z" />\n    <path d="M12.05 1.73 8 9.28 3.95 1.73" />\n  </g>\n</svg>\n';
    case "svg":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#ef9f76" stroke-linecap="round" stroke-linejoin="round" d="m4.54 10 6.92-4m-6.92 4a1.5 1.5 0 10-2.6 1.5 1.5 1.5 0 002.6-1.5M8 4v8m0-8a1.5 1.5 0 100-3 1.5 1.5 0 000 3M4.54 6l6.92 4M4.54 6a1.5 1.5 0 10-2.6-1.5A1.5 1.5 0 004.54 6M8 12a1.5 1.5 0 100 3 1.5 1.5 0 000-3m3.46-2a1.5 1.5 0 102.6 1.5 1.5 1.5 0 00-2.6-1.5m0-4a1.5 1.5 0 102.6-1.5 1.5 1.5 0 00-2.6 1.5" />\n</svg>\n';
    case "mermaid":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#ca9ee6" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5c0 6 2.25 5.75 4 7 .83.67 1.17 2 1 4h3c-.17-2 .17-3.33 1-4 1.75-1.25 4-1 4-7C12 2.5 10 3 8 7 6 3 4 2.5 1.5 2.5" />\n</svg>\n';
    case "dart":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke="#85c1dc" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M7 14.5h4.5v-3h3V7L9.17 1.64c-.28-.29-.8-.47-1.17-.29L3.5 3.5 1.35 8c-.18.37 0 .88.3 1.17z" />\n    <path d="M3.5 11V3.5H11m-7.5 0 8 8" />\n  </g>\n</svg>\n';
    case "assembly":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <rect width="8" height="13.001" x="4" y="1.499" fill="none" stroke="#c6d0f5" stroke-linecap="round" stroke-linejoin="round" rx="2.286" ry="2.286" />\n  <path fill="none" stroke="#c6d0f5" stroke-linecap="round" stroke-linejoin="round" d="M 4,4.500025 H 1.5 M 4,7.9999993 H 1.5 M 4,11.499973 H 1.5 m 13,-6.999948 H 12 m 2.5,3.4999743 H 12 m 2.5,3.4999737 H 12" />\n</svg>\n';
    case "dockerfile":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#8caaee" stroke-linecap="round" stroke-linejoin="round" d="M.5 8.5H11l.75-.5a5.35 5.35 0 010-3.5c1 .6 1 1.88 1.74 2 .77-.09 1.23.01 2 .52 0 0-.97 1.77-2.5 1.98-1.93 3.65-4.5 5.5-6.98 5.5C0 14.5.5 8.5.5 8.5m1 0v-2m0 0h8m-6 2v-4m0 0h4m-2-2h2m-2 6v-6m2 6v-6m2 6v-2" />\n</svg>\n';
    case "fortran":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#ca9ee6" stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.5v-1l-1-1v-3h2l1 2h1v-6h-1l-1 2h-2v-4h5l1 3h1v-5h-11v1l1 1v9l-1 1.25v.75z" />\n</svg>\n';
    case "lisp":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke="#e78284" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M.5 5.06v6.07C.5 12.41.82 13 2.27 13h5.6c1.04 0 1.63-.51 1.63-1.62 0-.85-.2-1.88-1.5-1.88h-.36C6.4 9.5 6 8.77 6 7.75 6 6.81 6.8 6 7.49 6h2.68" />\n    <path d="M3.5 10.5V4.99C3.5 3.89 3.62 3 5 3h9c.97 0 1.5.99 1.5 1.63.12 1.55-.98 1.62-2.1 2.16-.58.26-1.4.52-1.4.98V11" />\n  </g>\n</svg>\n';
    case "ocaml":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke="#ef9f76" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M1.5 8V3c0-.83.67-1.5 1.5-1.5h10c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5H9" />\n    <path d="m1.5 8 1.14-2.3q.09-.21.36-.24a.8.8 0 01.44.13c.18.12.23.53.28.64.06.1.64 1.23.85 1.23.2 0 .71-1.47.71-1.47s.37-.49.72-.49.55.32.67.49c.12.16.24 1.76.46 2.01s1.32.87 1.67.73c.34-.13.53-.4.63-.73.1-.34-.14-.75 0-1a1.1 1.1 0 011.02-.55c.56.03 2.05.56 2.05 1.05q0 .75-1.5.75c-.48 1.33.28 2.22-3 2.25l1 4" />\n    <path d="m4.5 14.5 1.5-4 1 4zm-2 0 1.5-4-1.5-.5-1 1.54V14l1 .49Z" />\n  </g>\n</svg>\n';
    case "prolog":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#ef9f76" stroke-linecap="round" stroke-linejoin="round" d="M4.5 13.5c-.33.33-.5.67-.5 1s.17.67.5 1c.17-.67.5-1 1-1s.83.33 1 1c.33-.33.5-.83.5-1.5h2c0 .67.17 1.17.5 1.5.17-.67.5-1 1-1s.83.33 1 1c.33-.33.5-.67.5-1s-.17-.67-.5-1l1-1 1.25 1.25c0-2.75 1-2.75 1-5.75a7.1 7.1 0 00-2-5.25A3.64 3.64 0 0113 .5c-1.17 0-2 .42-2.5 1.25A3.08 3.08 0 008 .5c-1 0-1.83.42-2.5 1.25C5 .92 4.17.5 3 .5c.5.83.58 1.58.25 2.25a7.1 7.1 0 00-2 5.25c0 3 1 3 1 5.75L3.5 12.5zm6-5a2 2 0 100-4 2 2 0 000 4m-5 0a2 2 0 100-4 2 2 0 000 4M7 8l1 2.5L9 8m1.5-1.5" />\n</svg>\n';
    case "groovy":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke="#85c1dc" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M11.68 5.38c.4.19.54.68 1.53 3.25 1 2.57-.92 4.07-.92 4.07s-6.73 2.47-6.73 1.63c-.18-.92-1.92-2.08-1.92-2.08s-.52-.63.06-.75c5.89-1.27 6.96-.61 7.3-2" />\n    <path d="M7.38 10.63C2.62 10.88 2.48 8.08 2.5 8 3.6 4.6 9.24.91 10.8 1.58 14.07 3.04 9.2 8.96 7 8.5c-4.02-.83 1.5-4 1.5-4" />\n  </g>\n</svg>\n';
    case "matlab":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="#85c1dc" d="M4 11 .5 8.5 5 7q.78-1.77 1.89-1.89c.74-.07 1.94-1.28 3.61-3.61M5 7l1.5 1.5" />\n    <path stroke="#ef9f76" d="m15.5 12.5-5-11C8.5 6.83 6.33 10 4 11c1.67-.33 2.67.83 3 3.5 3.5-1.5 3.5-3.5 5-4s1.5 1.5 3.5 2" />\n  </g>\n</svg>\n';
    case "cobol":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#8caaee" stroke-linecap="round" stroke-linejoin="round" d="M6.74 2.24c.32-1.32 2.2-1.32 2.52 0a1.3 1.3 0 001.93.8c1.15-.7 2.48.62 1.77 1.77a1.3 1.3 0 00.8 1.93c1.32.32 1.32 2.2 0 2.52a1.3 1.3 0 00-.8 1.93c.7 1.15-.62 2.48-1.77 1.77a1.3 1.3 0 00-1.93.8c-.32 1.32-2.2 1.32-2.52 0a1.3 1.3 0 00-1.93-.8c-1.15.7-2.48-.62-1.77-1.77a1.3 1.3 0 00-.8-1.93c-1.32-.32-1.32-2.2 0-2.52a1.3 1.3 0 00.8-1.93c-.7-1.15.62-2.48 1.77-1.77a1.3 1.3 0 001.93-.8M10 6.5a2.5 2.5 0 100 3" />\n</svg>\n';
    case "ada":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16"><!-- Icon from VSCode Icons by Roberto Huertas - https://github.com/vscode-icons/vscode-icons/blob/master/LICENSE --><path fill="#0f23c3" d="M24.554 20.075c.209.27 1.356.961 1.37 1.246a7 7 0 0 0-1.4-.324a17 17 0 0 1-1.412-.48a9.2 9.2 0 0 1-2.375-1.3A3.15 3.15 0 0 1 19.3 16.75a1.72 1.72 0 0 1 1.767-1.822a3.6 3.6 0 0 1 1.593.321c.146.066 1.31.606 1.256.809a5.5 5.5 0 0 0-1.41-.112c-.649.244-.4.828-.168 1.311a8 8 0 0 0 1.078 1.554c.164.194.884 1.271 1.138 1.264"/><path fill="#1a1978" d="M24.141 16.276c.128-.59.819-1.384 1.344-.773a4.2 4.2 0 0 1 .578 1.918c.12.656.2 1.327.261 1.982c.038.379.34 1.794.123 2.075a23 23 0 0 1-2.922-2.838a3.76 3.76 0 0 1-.925-1.7c-.1-1.073.879-.73 1.541-.664"/><path fill="#0f23c3" d="M26.3 17.781c.141-.732-.406-2.592-1.067-2.949a.06.06 0 0 0 .044-.007c-.156-.444-1.359 1.116-1.228 1.174c-.316-.138.774-1.984.988-2.16c.7-.578 1.372-.086 1.845.543a6.04 6.04 0 0 1 .733 4.434a4.5 4.5 0 0 1-.421 1.312c-.1.22-.45 1.1-.682 1.174a14.8 14.8 0 0 0-.212-3.521"/><path fill="#d2d2d2" d="M3.687 8.4c.179-.188-.041-1.527.324-1.548c.262-.015.553 1.741.627 1.968a9.2 9.2 0 0 0 1.127 2.329a7.53 7.53 0 0 0 4.016 2.978a4.55 4.55 0 0 0 2.366.2c.931-.208 1.82-.577 2.757-.765c1.35-.27 3.342-.352 4.438.647c.7.641.376.76.043 1.421a2.44 2.44 0 0 0 .178 2.562c.235.342 1.033.827.675 1.094c-.567.424-1.277-.452-1.636-.776c-1.4-1.264-2.711-1.313-4.492-1.074a9 9 0 0 1-4.883-.708A9.47 9.47 0 0 1 3.687 8.4M19.941 30a3.6 3.6 0 0 1-2.325-.817c.469-.092 1.021.025 1.508-.044a9.7 9.7 0 0 0 1.754-.43a10.5 10.5 0 0 0 3.022-1.554a6.55 6.55 0 0 0 2.757-5.214c.149-.088.316 1.034.319 1.091a5.8 5.8 0 0 1-.19 1.727a6.9 6.9 0 0 1-1.423 2.774A7.3 7.3 0 0 1 19.941 30"/><path fill="#d2d2d2" d="M18.962 19.109a5.8 5.8 0 0 1-2.05.859a13.4 13.4 0 0 1-2.224.549a8.86 8.86 0 0 1-4.435-.51a9.94 9.94 0 0 1-3.849-2.4c-.352-.367-2.104-2.417-1.548-3.05c.248-.282.875.846 1 .992a5 5 0 0 0 1.357 1.11a10.9 10.9 0 0 0 4.035 1.456a6.7 6.7 0 0 0 2.34-.094a13 13 0 0 1 1.694-.485a4 4 0 0 1 2.113.457c.344.17 1.523.743 1.567 1.116m9.351-4.031a19.3 19.3 0 0 1-.453 3.774c-.176-.242.016-1.47 0-1.792a6 6 0 0 0-.384-2.087a4.9 4.9 0 0 0-1.376-1.661a15 15 0 0 1-1.27-1.536c-1.837-2.382-3.245-5.211-2.9-8.3c.034-.308.069-1.448.411-1.445c.152 0 .266 1.561.29 1.718a12.5 12.5 0 0 0 1.224 4.116c.67 1.222 1.947 2.023 2.825 3.1a6.58 6.58 0 0 1 1.633 4.113M15.7 26.935a10.85 10.85 0 0 0 6.436-.687a6.94 6.94 0 0 0 4.278-4.418c.319.2-.048 1.529-.128 1.781a5.7 5.7 0 0 1-1.01 1.813a8.9 8.9 0 0 1-3.257 2.514c-1.703.772-5.662 1.652-6.319-1.003"/><path fill="#d2d2d2" d="M19.151 19.376c.367 2.107-2.957 3.124-4.478 3.213c-1.859.11-4.929-.292-6.06-2.031c-.673-1.035.781-.09 1.188.058a8.7 8.7 0 0 0 3.06.5a11.6 11.6 0 0 0 3.305-.5a14 14 0 0 0 1.533-.576c.301-.132 1.124-.691 1.452-.664m4.991 4.084c.4-.945-1.883-1.578-2.445-1.858a4.9 4.9 0 0 1-1.315-.867c-.181-.181-.872-.92-.807-1.219a5 5 0 0 1 1.087-.175a6 6 0 0 1 .855.588a10 10 0 0 0 .964.5a16 16 0 0 0 2.119.771c.308.09 1.549.208 1.727.428c-.04.296-1.97 2.021-2.185 1.832"/><path fill="#d2d2d2" d="M26.1 22.172c.265.43-1.08 1.831-1.363 2.105a9.3 9.3 0 0 1-2.566 1.728a7.8 7.8 0 0 1-2.56.753c-.679.058-1.966-.124-2.141-.979a7 7 0 0 1 1.177-.086c.462-.059.921-.149 1.376-.246a13 13 0 0 0 2.184-.645a11.5 11.5 0 0 0 2.084-1.11a11 11 0 0 0 1.078-.822c.105-.089.617-.702.731-.698m-7.342-10.207c-.1-1.308 2.612-1.3 3.271-1.092a5.98 5.98 0 0 1 2.982 2.475c-1.082.8-2.449.094-3.3-.654a4.3 4.3 0 0 0-1.481-1.029c-.809-.265-.818.094-1.472.3"/><path fill="#d2d2d2" d="M25.783 13.341c-.444-.029-.316.071-.647-.212c-.358-.307-.614-.795-.945-1.141c-.534-.558-1.242-.895-1.723-1.485a7.27 7.27 0 0 1-1.624-4.848c.018-1.489.407.187.551.675a12.3 12.3 0 0 0 1.126 2.708a46 46 0 0 0 3.4 4.321c-.039.002-.097-.021-.138-.018m-5.715 1.415c.033-.625-.911-.792-1.211-1.42c-.164-.343-.211-.569.029-.7c.082-.045.383.012.5-.02c.271-.076.335-.273.581-.4a1.193 1.193 0 0 1 1.633 1.021a1.82 1.82 0 0 1-1.532 1.519"/><path fill="#d2d2d2" d="M20.5 14.745a1.93 1.93 0 0 0 1.323-1.7c.524.139.928.658 1.521.771a2.6 2.6 0 0 0 1.029-.017c.207-.045.54-.274.721-.259c-.033.163-.464.546-.565.717a4.2 4.2 0 0 0-.388.9c-.229.741-.061.739-.709.311a4.3 4.3 0 0 0-1.957-.72c-.266-.026-.881.019-.975-.003m-.595 5.989a2.01 2.01 0 0 1-1.4 1.712c-.205.091-2.018.733-2.032.348c-.007-.2 1.624-.954 1.809-1.11a3.4 3.4 0 0 0 .867-1.071c.055-.112.232-.925.271-.943c.224-.106.488.93.485 1.064m-8.532-8.202a10.6 10.6 0 0 1 3.71-.914a10.3 10.3 0 0 1 1.865.024c.366.039 1.469.054 1.74.343a.255.255 0 0 1-.273.173c-.037.077.251.371.3.425c-.034.034-1.445-.4-1.572-.424a10.6 10.6 0 0 0-2.282-.134a16 16 0 0 0-1.841.194a6.2 6.2 0 0 1-1.647.313m11.139-1.801a1.89 1.89 0 0 1-1.517-.6c-.247-.349-.737-1.692-.385-2.021c.209-.2.384.662.484.846a11 11 0 0 0 1.418 1.775m5.276 8.469a19 19 0 0 1-.749 3.313c-.173-.077-.275-.778-.562-.95a4.1 4.1 0 0 0 .76-1.154c.152-.302.303-1.046.551-1.209m-7.807-7.357c-.132.268-.932 1.1-1.118.481c-.107-.356.876-.841 1.118-.481m-.747.45c.228.006.012-.248.012-.266c-.001-.043-.368.266-.012.266"/></svg>';
    case "julia":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="#a6d189" d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0" />\n    <path stroke="#e78284" d="M6.5 11a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0" />\n    <path stroke="#ca9ee6" d="M14.5 11a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0" />\n  </g>\n</svg>\n';
    case "elixir":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#ca9ee6" stroke-linecap="round" stroke-linejoin="round" d="M8.03 14.5C5 14.5 3.5 12.49 3.5 10.01c0-2.82 2.25-7.02 4.62-8.48a.24.24 0 01.24 0c.08.04.12.12.11.2-.13 1.25.22 2.5.98 3.54.3.43.63.8 1.02 1.27.54.66.94 1.03 1.52 2.08l.01.02c.33.56.5 1.2.5 1.84 0 2.03-1.69 4.02-4.47 4.02" />\n</svg>\n';
    case "vb.net":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16"><!-- Icon from VSCode Icons by Roberto Huertas - https://github.com/vscode-icons/vscode-icons/blob/master/LICENSE --><path fill="#00519a" d="M6.67 7.836L9 18.915l2.336-11.079H16l-4.664 16.328H6.672L2 7.836Zm11.661 0h7.6a4.08 4.08 0 0 1 2.9 1.749a3.8 3.8 0 0 1 .571 2.04a4 4 0 0 1-.571 2.034a4.1 4.1 0 0 1-2.341 1.763a4.1 4.1 0 0 1 2.929 1.756a3.8 3.8 0 0 1 .58 2.1a4.66 4.66 0 0 1-.579 2.546a5.05 5.05 0 0 1-3.5 2.338h-7.589ZM23 14.252h1.166a1.754 1.754 0 0 0 0-3.5H23Zm0 7h1.39a2.047 2.047 0 0 0 0-4.089H23Z"/></svg>';
    case "nim":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#e5c890" stroke-linecap="round" stroke-linejoin="round" d="M1 7 .5 4.5l1.01.67c.28-.27.47-.48 1.18-.85l.56-1.82L4.5 3.84c.77-.18 1.53-.36 2.4-.33L8 1.5l1.1 2.01c.87-.03 1.63.15 2.4.33l1.25-1.34.56 1.82c.7.37.9.58 1.18.85l1.01-.67L15 7m-1.5 1C13 6.5 11 5.5 8 5.5S3 6.5 2.5 8m11.5.75L13.5 8l-1 1.5-1.5.5-3-1.5L5 10l-1.5-.5-1-1.5-.5.75L1 7l1.25 3.75C3 12.75 6 13.5 8 13.5s5-.75 5.75-2.75L15 7z" />\n</svg>\n';
    case "crystal":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#c6d0f5" stroke-linecap="round" stroke-linejoin="round" d="m 15.4712,10.050637 -5.433601,5.433968 c -0.015,0.01505 -0.04554,0.01505 -0.09055,0.01505 L 2.536327,13.517264 c -0.015,0 -0.04501,-0.01505 -0.06055,-0.06072 L 0.50026325,6.0396501 a 0.21432208,0.21495127 0 0 1 0.015,-0.090817 L 5.9483283,0.5154023 c 0.015,-0.0150465 0.04501,-0.0150465 0.09055,-0.0150465 l 7.4101857,1.997972 c 0.015,0 0.04501,0.015046 0.06055,0.060724 l 1.977121,7.4158186 c 0.03001,0.03063 0.01608,0.060724 -0.01554,0.07577 M 8.2121063,4.1480782 0.93801425,6.1154197 q -0.0225,0 0,0.04514 L 6.2655263,11.50371 c 0.015,0.01505 0.015,0 0.04501,0 l 1.962119,-7.2803988 c -0.03054,-0.075233 -0.06055,-0.075233 -0.06055,-0.075233" />\n</svg>\n';
    case "d":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16"><!-- Icon from VSCode Icons by Roberto Huertas - https://github.com/vscode-icons/vscode-icons/blob/master/LICENSE --><defs><linearGradient id="SVGMV3iTbAN" x1="185.455" x2="181.955" y1="1601.641" y2="1630.224" gradientTransform="translate(-62.523 -666.646)scale(.427)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="SVGniw2Mvsa" x1="176.136" x2="172.636" y1="1600.5" y2="1629.083" href="#SVGMV3iTbAN"/></defs><path fill="#b03931" d="m3.978 15.462l-.009-6.953a.59.59 0 0 1 .531-.562h.076l6.074-.009a15.7 15.7 0 0 1 6.067.95a8.9 8.9 0 0 1 2.244 1.359a4.47 4.47 0 0 1 2.946-1.083a4.11 4.11 0 0 1 4.276 3.92A4.11 4.11 0 0 1 21.907 17c-.089 0-.177-.008-.265-.012a7 7 0 0 1-.232.953a85 85 0 0 1 8.59 2.6V2H2v13.4q.992.02 1.978.062m22.8-7.944a1.32 1.32 0 0 1 1.374 1.259a1.379 1.379 0 0 1-2.747 0a1.32 1.32 0 0 1 1.375-1.26Z"/><path fill="#b03931" d="M17.861 15.787a4.11 4.11 0 0 0-1.748-3.458a5.8 5.8 0 0 0-1.508-.822a7.4 7.4 0 0 0-1.629-.438a22 22 0 0 0-2.588-.1H7.769l.006 4.737a89 89 0 0 1 9.91 1.408a5 5 0 0 0 .176-1.327m3.132 3.192a7.9 7.9 0 0 1-2.128 2.582a9.7 9.7 0 0 1-3.256 1.71a11.6 11.6 0 0 1-1.971.472h-.015a32 32 0 0 1-3.326.111l-5.625.022a.616.616 0 0 1-.686-.681l-.01-7.734Q2.992 15.42 2 15.4V30h28v-9.456a85 85 0 0 0-8.59-2.6a7 7 0 0 1-.417 1.035"/><path fill="url(#SVGMV3iTbAN)" d="M20.993 18.979a7.9 7.9 0 0 1-2.128 2.582a9.7 9.7 0 0 1-3.256 1.71a11.6 11.6 0 0 1-1.971.472h-.015a32 32 0 0 1-3.326.111l-5.625.022a.616.616 0 0 1-.686-.681l-.01-7.734Q2.992 15.42 2 15.4V30h28v-9.456a85 85 0 0 0-8.59-2.6a7 7 0 0 1-.417 1.035" opacity=".3"/><path fill="#b03931" d="M10.477 20.835a16 16 0 0 0 2.877-.2a7.6 7.6 0 0 0 1.628-.5a5.6 5.6 0 0 0 1.187-.748a4.46 4.46 0 0 0 1.518-2.271a89 89 0 0 0-9.91-1.408l.006 5.133Z"/><path fill="url(#SVGniw2Mvsa)" d="M10.477 20.835a16 16 0 0 0 2.877-.2a7.6 7.6 0 0 0 1.628-.5a5.6 5.6 0 0 0 1.187-.748a4.46 4.46 0 0 0 1.518-2.271a89 89 0 0 0-9.91-1.408l.006 5.133Z" opacity=".3"/><path fill="#fff" d="M20.383 11.746a7 7 0 0 1 1.36 4.148a6.6 6.6 0 0 1-.1 1.1c.088 0 .176.012.265.012a4.11 4.11 0 0 0 4.276-3.92a4.11 4.11 0 0 0-4.276-3.92a4.47 4.47 0 0 0-2.946 1.083a8 8 0 0 1 1.421 1.497"/><ellipse cx="26.78" cy="8.777" fill="#fff" rx="1.374" ry="1.259"/><path fill="#fff" d="m4.673 23.877l5.625-.022a32 32 0 0 0 3.326-.111h.015a11.5 11.5 0 0 0 1.971-.472a9.7 9.7 0 0 0 3.256-1.71a7.9 7.9 0 0 0 2.128-2.582a7 7 0 0 0 .417-1.034a7 7 0 0 0 .332-2.051a7 7 0 0 0-1.36-4.148a8 8 0 0 0-1.421-1.5a8.9 8.9 0 0 0-2.244-1.359a15.7 15.7 0 0 0-6.067-.95l-6.074.009h-.076a.59.59 0 0 0-.532.562l.009 6.952l.01 7.734a.616.616 0 0 0 .685.682m3.1-12.908h2.619a22 22 0 0 1 2.588.1a7.4 7.4 0 0 1 1.629.438a5.8 5.8 0 0 1 1.508.822a4.12 4.12 0 0 1 1.748 3.458a5 5 0 0 1-.175 1.327a4.46 4.46 0 0 1-1.518 2.271a5.6 5.6 0 0 1-1.187.748a7.7 7.7 0 0 1-1.628.5a16 16 0 0 1-2.877.2H7.786L7.78 15.7Z"/></svg>';
    case "applescript":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#c6d0f5" stroke-linecap="round" stroke-linejoin="round" d="M14.4561802 11.3673353C13.0276218 14.1261537 11.8858593 15.5 10.8437759 15.5 10.3588459 15.5 9.88231005 15.3491298 9.41749082 15.0543006 8.74000639 14.6241577 7.8668418 14.6059458 7.17068967 15.0074382 6.60881451 15.3319356 6.07177167 15.5 5.56305868 15.5 4.02887542 15.5 1.5 10.9491129 1.5 8.45090396 1.5 5.78581061 2.95006811 3.551507 5.15647301 3.551507 6.19383481 3.551507 7.09007204 4.20001691 7.84308619 4.497206 8.16210316 4.62512517 8.52255587 4.61592787 8.83410596 4.47192 9.44477141 4.18872223 10.2497236 3.551507 11.2503615 3.551507 12.4715175 3.551507 13.5338865 4.33779342 14.4184071 5.47479877 14.5532906 5.64778615 14.5172013 5.89341518 14.3377895 6.02349446 13.3500923 6.736546 12.8746057 7.53893969 12.8746057 8.45090396 12.8746057 9.36404821 13.3502672 10.1652619 14.3377895 10.8793249 14.4946576 10.992887 14.5445377 11.1984946 14.4561802 11.3673353ZM8.5 3C8.5 3 8.3468635 1.3936039 10 1" />\n</svg>\n';
    case "solidity":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#ca9ee6" stroke-linecap="round" stroke-linejoin="round" d="m3 11.5 2.5 4 2.5-4 2.5 4 2.5-4-2.5-4-2.5 4m2.5 4h-5m7.5-4H3m10-7-2.5-4-2.5 4-2.5-4-2.5 4 2.5 4 2.5-4M5.5.5h5M3 4.5h10" />\n</svg>\n';
    case "objectivec":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16"><!-- Icon from VSCode Icons by Roberto Huertas - https://github.com/vscode-icons/vscode-icons/blob/master/LICENSE --><path fill="#c2c2c2" d="M11.29 15.976a8.9 8.9 0 0 0 1.039 4.557a4.82 4.82 0 0 0 5.579 2.13a3.79 3.79 0 0 0 2.734-3.181c.095-.535.1-.54.1-.54c1.537.222 4.014.582 5.55.8l-.1.389A9.96 9.96 0 0 1 23.8 24.9a8.35 8.35 0 0 1-4.747 2.378a12.93 12.93 0 0 1-7.322-.725a8.98 8.98 0 0 1-5.106-5.524A14.35 14.35 0 0 1 6.642 10.9a9.32 9.32 0 0 1 7.929-6.24a11.8 11.8 0 0 1 5.9.491a8.47 8.47 0 0 1 5.456 6.1c.083.311.1.369.1.369c-1.709.311-3.821.705-5.518 1.075c-.323-1.695-1.122-3.029-2.831-3.445a4.656 4.656 0 0 0-5.853 3.158a9 9 0 0 0-.341 1.273a11 11 0 0 0-.194 2.295"/><path fill="#c2c2c2" d="M2.033 30V2h5.934v2.227H4.723v23.546h3.244V30zm27.934-.001h-5.934v-2.228h3.244V4.226h-3.244V1.999h5.934z"/></svg>';
    case "objectivecpp":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16"><!-- Icon from VSCode Icons by Roberto Huertas - https://github.com/vscode-icons/vscode-icons/blob/master/LICENSE --><path fill="#c2c2c2" d="M19.5 24.833a11.24 11.24 0 0 1-5.13 1.009a8.37 8.37 0 0 1-6.492-2.576A9.75 9.75 0 0 1 5.512 16.4a10.4 10.4 0 0 1 2.659-7.406a9.02 9.02 0 0 1 6.9-2.841a12.2 12.2 0 0 1 4.43.7v4.129a7.5 7.5 0 0 0-4.108-1.142a5.28 5.28 0 0 0-4.075 1.685A6.48 6.48 0 0 0 9.766 16.1a6.37 6.37 0 0 0 1.464 4.4a5.02 5.02 0 0 0 3.941 1.639a8.03 8.03 0 0 0 4.329-1.223Z"/><path fill="#c2c2c2" d="M16.572 15.081V13.24h1.841v1.841h1.84v1.84h-1.84v1.841h-1.841v-1.841h-1.839V15.08zm6.44 0V13.24h1.841v1.841h1.84v1.84h-1.84v1.841h-1.841v-1.841h-1.839V15.08zM2.035 30V2.001h5.933v2.227H4.725v23.545h3.243V30z"/><path fill="#c2c2c2" d="M29.965 29.999h-5.933v-2.228h3.243V4.227h-3.243V2h5.933z"/></svg>';
    case "terraform":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <path fill="none" stroke="#ca9ee6" stroke-linecap="round" stroke-linejoin="round" d="m1.5 6 8 4.25 4-2.25m-12-2V1.5l8 4.25 4-2.25V8m-4-2.25v8.75M5.53 3.82 5.5 12.5l4 2" />\n</svg>\n';
    case "plain":
    case "text":
    case "":
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n  <g fill="none" stroke="#c6d0f5" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M13.5 6.5v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h4.01" />\n    <path d="m8.5 1.5 5 5h-4a1 1 0 01-1-1zm-3 10h5m-5-3h5m-5-3h1" />\n  </g>\n</svg>\n';
    default:
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m10 9l-3 3l3 3m4 0l3-3l-3-3"/><rect width="18" height="18" x="3" y="3" rx="2"/></g></svg>';
  }
}
const qt = { js: "JavaScript", javascript: "JavaScript", ts: "TypeScript", jsx: "JSX", tsx: "TSX", html: "HTML", css: "CSS", scss: "SCSS", json: "JSON", py: "Python", python: "Python", rb: "Ruby", go: "Go", java: "Java", c: "C", cpp: "C++", cs: "C#", php: "PHP", sh: "Shell", bash: "Bash", sql: "SQL", yaml: "YAML", md: "Markdown", "": "Plain Text", plain: "Plain Text" }, Xt = { key: 0, class: "code-block-header flex justify-between items-center px-4 py-2.5 border-b border-gray-400/5", style: { color: "var(--vscode-editor-foreground)", "background-color": "var(--vscode-editor-background)" } }, Gt = { class: "flex items-center gap-x-2" }, Zt = ["innerHTML"], Yt = { class: "text-sm font-medium font-mono" }, Jt = { class: "flex items-center gap-x-2" }, Qt = ["aria-pressed"], eo = ["disabled"], no = ["disabled"], to = ["disabled"], oo = ["aria-label"], ro = { key: 0, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, ao = { key: 1, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, lo = ["aria-pressed"], io = { key: 0, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "0.75rem", height: "0.75rem", viewBox: "0 0 24 24" }, so = { key: 1, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "0.75rem", height: "0.75rem", viewBox: "0 0 24 24" }, co = ["aria-label"], uo = ["innerHTML"], mo = { class: "code-loading-placeholder" }, ho = /* @__PURE__ */ J(/* @__PURE__ */ defineComponent({ __name: "MarkdownCodeBlockNode", props: { node: {}, loading: { type: Boolean, default: true }, stream: { type: Boolean, default: true }, darkTheme: { default: "vitesse-dark" }, lightTheme: { default: "vitesse-light" }, isDark: { type: Boolean, default: false }, isShowPreview: { type: Boolean, default: true }, enableFontSizeControl: { type: Boolean, default: true }, minWidth: { default: void 0 }, maxWidth: { default: void 0 }, themes: {}, showHeader: { type: Boolean, default: true }, showCopyButton: { type: Boolean, default: true }, showExpandButton: { type: Boolean, default: true }, showPreviewButton: { type: Boolean, default: true }, showFontSizeButtons: { type: Boolean, default: true } }, emits: ["previewCode", "copy"], setup(e2, { emit: n2 }) {
  var t2;
  const o2 = e2, r2 = n2, { t: a2 } = nn(), l2 = ref(String(null != (t2 = o2.node.language) ? t2 : "")), i2 = ref(false), s2 = ref(false), c = ref(false), u = ref(null), m = ref(null), h2 = ref(""), f = ref(false);
  let g;
  const x = ref(true), M = ref(0), _ = ref(14), L = ref(_.value), S = computed(() => {
    const e3 = _.value, n3 = L.value;
    return "number" == typeof e3 && Number.isFinite(e3) && e3 > 0 && "number" == typeof n3 && Number.isFinite(n3) && n3 > 0;
  }), $ = computed(() => {
    const e3 = l2.value.trim().toLowerCase();
    return qt[e3] || e3.charAt(0).toUpperCase() + e3.slice(1);
  }), E = computed(() => Ft(l2.value.trim().toLowerCase().split(":")[0])), H = computed(() => {
    const e3 = l2.value.trim().toLowerCase();
    return o2.isShowPreview && ("html" === e3 || "svg" === e3);
  }), z = computed(() => {
    const e3 = {}, n3 = (e4) => {
      if (null != e4) return "number" == typeof e4 ? `${e4}px` : String(e4);
    }, t3 = n3(o2.minWidth), r3 = n3(o2.maxWidth);
    return t3 && (e3.minWidth = t3), r3 && (e3.maxWidth = r3), e3;
  }), V = computed(() => ({ fontSize: `${L.value}px` }));
  function O() {
    return o2.isDark ? o2.darkTheme : o2.lightTheme;
  }
  function R(e3) {
    if (null == g || g.disconnect(), g = void 0, !e3) return h2.value = "", void (f.value = false);
    var n3;
    h2.value = `<pre class="shiki shiki-fallback"><code>${n3 = e3, n3.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")}</code></pre>`, f.value = false;
  }
  function K() {
    h2.value = "", f.value = true;
  }
  function W() {
    var e3;
    const n3 = m.value;
    return !!n3 && (n3.childNodes.length > 0 || Boolean(null == (e3 = n3.textContent) ? void 0 : e3.trim().length));
  }
  function D() {
    return d(this, null, function* () {
      if (yield nextTick(), W()) return void K();
      const e3 = m.value;
      e3 && (null == g || g.disconnect(), g = new MutationObserver(() => {
        W() && (K(), null == g || g.disconnect(), g = void 0);
      }), g.observe(e3, { childList: true, subtree: true }));
    });
  }
  let U, F, q, Y2;
  const J2 = /* @__PURE__ */ new Set(), Q2 = /* @__PURE__ */ new Set(), ee2 = void 0 !== import.meta && Boolean(false);
  function ne2(e3, n3) {
    return d(this, null, function* () {
      if (!U) return;
      const t3 = (function(e4, n4 = false) {
        var t4;
        const [o3] = String(null != e4 ? e4 : "").split(":"), r3 = null != (t4 = null == o3 ? void 0 : o3.trim().toLowerCase()) ? t4 : "";
        return r3 ? !Y2 || Y2.has(r3) ? r3 : (n4 && ee2 && !J2.has(r3) && (J2.add(r3), console.warn(`[MarkdownCodeBlockNode] Language "${r3}" not preloaded in stream-markdown; falling back to plaintext.`)), "plaintext") : "plaintext";
      })(n3, Boolean(e3 && e3.length));
      try {
        yield U.updateCode(e3, t3);
      } catch (o3) {
        "plaintext" !== t3 ? (ee2 && !Q2.has(t3) && (Q2.add(t3), console.warn(`[MarkdownCodeBlockNode] Failed to render language "${t3}", retrying as plaintext.`, o3)), yield U.updateCode(e3, "plaintext")) : ee2 && console.warn("[MarkdownCodeBlockNode] Failed to render code block even as plaintext.", o3);
      }
    });
  }
  function te2() {
    return d(this, null, function* () {
      yield (function() {
        return d(this, null, function* () {
          if (!F) try {
            const e3 = yield __vitePreload(() => import("./index-DlNZ4R_t.js"), true ? __vite__mapDeps([12,3,1,2]) : void 0);
            F = e3.createShikiStreamRenderer, q = e3.registerHighlight;
            const n3 = Array.isArray(e3.defaultLanguages) ? e3.defaultLanguages : void 0;
            Y2 = n3 ? new Set(n3.map((e4) => e4.toLowerCase())) : void 0, null == q || q({ themes: o2.themes });
          } catch (e3) {
            console.warn("[MarkdownCodeBlockNode] stream-markdown not available:", e3);
          }
        });
      })(), u.value && m.value ? (null == q || q({ themes: o2.themes }), !U && F && (U = F(m.value, { theme: O() }), f.value = true), U ? false === o2.stream && o2.loading ? R(o2.node.code) : (R(o2.node.code), yield ne2(o2.node.code, l2.value), yield D()) : R(o2.node.code)) : R(o2.node.code);
    });
  }
  function oe2() {
    const e3 = u.value;
    if (!e3 || s2.value) return;
    const n3 = e3.scrollTop;
    n3 < M.value ? x.value = false : (function(e4, n4 = 50) {
      return e4.scrollHeight - e4.scrollTop - e4.clientHeight <= n4;
    })(e3) && (x.value = true), M.value = n3;
  }
  function re2() {
    return d(this, null, function* () {
      try {
        "undefined" != typeof navigator && navigator.clipboard && "function" == typeof navigator.clipboard.writeText && (yield navigator.clipboard.writeText(o2.node.code)), i2.value = true, r2("copy", o2.node.code), setTimeout(() => {
          i2.value = false;
        }, 1e3);
      } catch (e3) {
        console.error("Copy failed:", e3);
      }
    });
  }
  function ae2(e3) {
    return !e3 || e3.disabled;
  }
  function le2(e3, n3, t3 = "top") {
    if (ae2(e3.currentTarget)) return;
    const r3 = e3, a3 = null != (null == r3 ? void 0 : r3.clientX) && null != (null == r3 ? void 0 : r3.clientY) ? { x: r3.clientX, y: r3.clientY } : void 0;
    Ye(e3.currentTarget, n3, t3, false, a3, o2.isDark);
  }
  function ie2() {
    Je();
  }
  function se2(e3) {
    if (ae2(e3.currentTarget)) return;
    const n3 = i2.value ? a2("common.copied") || "Copied" : a2("common.copy") || "Copy", t3 = e3, r3 = null != (null == t3 ? void 0 : t3.clientX) && null != (null == t3 ? void 0 : t3.clientY) ? { x: t3.clientX, y: t3.clientY } : void 0;
    Ye(e3.currentTarget, n3, "top", false, r3, o2.isDark);
  }
  function de2() {
    s2.value = !s2.value;
    const e3 = u.value;
    e3 && (s2.value ? (e3.style.maxHeight = "none", e3.style.overflow = "visible") : (e3.style.maxHeight = "500px", e3.style.overflow = "auto", x.value = true, nextTick(() => {
      e3.scrollHeight > e3.clientHeight && (e3.scrollTop = e3.scrollHeight);
    })));
  }
  function ce2() {
    c.value = !c.value;
  }
  function ue2() {
    if (!H.value) return;
    const e3 = (l2.value || o2.node.language).toLowerCase(), n3 = "html" === e3 ? "HTML Preview" : "SVG Preview";
    r2("previewCode", { type: "html" === e3 ? "text/html" : "image/svg+xml", content: o2.node.code, title: n3 });
  }
  return te2(), onMounted(() => {
    te2();
  }), watch(() => o2.themes, () => d(null, null, function* () {
    q && q({ themes: o2.themes });
  })), watch(() => o2.loading, (e3) => {
    e3 || te2();
  }), watch(() => [o2.node.code, o2.node.language], (e3) => d(null, [e3], function* ([e4, n3]) {
    n3 !== l2.value && (l2.value = n3.trim()), u.value && m.value ? (U || (R(e4), yield te2()), U && e4 && (false === o2.stream && o2.loading || (R(e4), yield ne2(e4, n3), yield D()))) : R(e4);
  })), watch(() => [o2.darkTheme, o2.lightTheme], () => d(null, null, function* () {
    u.value && m.value && (U || (yield te2()), null == U || U.setTheme(O()));
  })), watch(() => o2.node.code, () => d(null, null, function* () {
    if (s2.value || !x.value) return;
    yield nextTick();
    const e3 = u.value;
    e3 && e3.scrollHeight > e3.clientHeight && (e3.scrollTop = e3.scrollHeight);
  })), (n3, t3) => (openBlock(), createElementBlock("div", { style: normalizeStyle(z.value), class: normalizeClass(["code-block-container my-4 rounded-lg border overflow-hidden shadow-sm", [o2.isDark ? "border-gray-700/30 bg-gray-900" : "border-gray-200 bg-white", o2.isDark ? "is-dark" : ""]]) }, [o2.showHeader ? (openBlock(), createElementBlock("div", Xt, [renderSlot(n3.$slots, "header-left", {}, () => [createBaseVNode("div", Gt, [createBaseVNode("span", { class: "icon-slot h-4 w-4 flex-shrink-0", innerHTML: E.value }, null, 8, Zt), createBaseVNode("span", Yt, toDisplayString($.value), 1)])], true), renderSlot(n3.$slots, "header-right", {}, () => [createBaseVNode("div", Jt, [createBaseVNode("button", { type: "button", class: "code-action-btn p-2 text-xs rounded-md transition-colors hover:bg-[var(--vscode-editor-selectionBackground)]", "aria-pressed": c.value, onClick: ce2, onMouseenter: t3[0] || (t3[0] = (e3) => le2(e3, c.value ? unref(a2)("common.expand") || "Expand" : unref(a2)("common.collapse") || "Collapse")), onFocus: t3[1] || (t3[1] = (e3) => le2(e3, c.value ? unref(a2)("common.expand") || "Expand" : unref(a2)("common.collapse") || "Collapse")), onMouseleave: ie2, onBlur: ie2 }, [(openBlock(), createElementBlock("svg", { style: normalizeStyle({ rotate: c.value ? "0deg" : "90deg" }), xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [...t3[17] || (t3[17] = [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "m9 18l6-6l-6-6" }, null, -1)])], 4))], 40, Qt), o2.showFontSizeButtons && o2.enableFontSizeControl ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("button", { type: "button", class: "code-action-btn p-2 text-xs rounded-md transition-colors hover:bg-[var(--vscode-editor-selectionBackground)]", disabled: !!Number.isFinite(L.value) && L.value <= 10, onClick: t3[2] || (t3[2] = (e3) => (function() {
    const e4 = Math.max(10, L.value - 1);
    L.value = e4;
  })()), onMouseenter: t3[3] || (t3[3] = (e3) => le2(e3, unref(a2)("common.decrease") || "Decrease")), onFocus: t3[4] || (t3[4] = (e3) => le2(e3, unref(a2)("common.decrease") || "Decrease")), onMouseleave: ie2, onBlur: ie2 }, [...t3[18] || (t3[18] = [createBaseVNode("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M5 12h14" })], -1)])], 40, eo), createBaseVNode("button", { type: "button", class: "code-action-btn p-2 text-xs rounded-md transition-colors hover:bg-[var(--vscode-editor-selectionBackground)]", disabled: !S.value || L.value === _.value, onClick: t3[5] || (t3[5] = (e3) => {
    L.value = _.value;
  }), onMouseenter: t3[6] || (t3[6] = (e3) => le2(e3, unref(a2)("common.reset") || "Reset")), onFocus: t3[7] || (t3[7] = (e3) => le2(e3, unref(a2)("common.reset") || "Reset")), onMouseleave: ie2, onBlur: ie2 }, [...t3[19] || (t3[19] = [createBaseVNode("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [createBaseVNode("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }, [createBaseVNode("path", { d: "M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8" }), createBaseVNode("path", { d: "M3 3v5h5" })])], -1)])], 40, no), createBaseVNode("button", { type: "button", class: "code-action-btn p-2 text-xs rounded-md transition-colors hover:bg-[var(--vscode-editor-selectionBackground)]", disabled: !!Number.isFinite(L.value) && L.value >= 36, onClick: t3[8] || (t3[8] = (e3) => (function() {
    const e4 = Math.min(36, L.value + 1);
    L.value = e4;
  })()), onMouseenter: t3[9] || (t3[9] = (e3) => le2(e3, unref(a2)("common.increase") || "Increase")), onFocus: t3[10] || (t3[10] = (e3) => le2(e3, unref(a2)("common.increase") || "Increase")), onMouseleave: ie2, onBlur: ie2 }, [...t3[20] || (t3[20] = [createBaseVNode("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M5 12h14m-7-7v14" })], -1)])], 40, to)], 64)) : createCommentVNode("", true), o2.showCopyButton ? (openBlock(), createElementBlock("button", { key: 1, type: "button", class: "code-action-btn p-2 text-xs rounded-md transition-colors hover:bg-[var(--vscode-editor-selectionBackground)]", "aria-label": i2.value ? unref(a2)("common.copied") || "Copied" : unref(a2)("common.copy") || "Copy", onClick: re2, onMouseenter: t3[11] || (t3[11] = (e3) => se2(e3)), onFocus: t3[12] || (t3[12] = (e3) => se2(e3)), onMouseleave: ie2, onBlur: ie2 }, [i2.value ? (openBlock(), createElementBlock("svg", ao, [...t3[22] || (t3[22] = [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M20 6L9 17l-5-5" }, null, -1)])])) : (openBlock(), createElementBlock("svg", ro, [...t3[21] || (t3[21] = [createBaseVNode("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }, [createBaseVNode("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }), createBaseVNode("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })], -1)])]))], 40, oo)) : createCommentVNode("", true), o2.showExpandButton ? (openBlock(), createElementBlock("button", { key: 2, type: "button", class: "code-action-btn p-2 text-xs rounded-md transition-colors hover:bg-[var(--vscode-editor-selectionBackground)]", "aria-pressed": s2.value, onClick: de2, onMouseenter: t3[13] || (t3[13] = (e3) => le2(e3, s2.value ? unref(a2)("common.collapse") || "Collapse" : unref(a2)("common.expand") || "Expand")), onFocus: t3[14] || (t3[14] = (e3) => le2(e3, s2.value ? unref(a2)("common.collapse") || "Collapse" : unref(a2)("common.expand") || "Expand")), onMouseleave: ie2, onBlur: ie2 }, [s2.value ? (openBlock(), createElementBlock("svg", io, [...t3[23] || (t3[23] = [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6" }, null, -1)])])) : (openBlock(), createElementBlock("svg", so, [...t3[24] || (t3[24] = [createBaseVNode("path", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "m14 10l7-7m-1 7h-6V4M3 21l7-7m-6 0h6v6" }, null, -1)])]))], 40, lo)) : createCommentVNode("", true), H.value && o2.showPreviewButton ? (openBlock(), createElementBlock("button", { key: 3, type: "button", class: "code-action-btn p-2 text-xs rounded-md transition-colors hover:bg-[var(--vscode-editor-selectionBackground)]", "aria-label": unref(a2)("common.preview") || "Preview", onClick: ue2, onMouseenter: t3[15] || (t3[15] = (e3) => le2(e3, unref(a2)("common.preview") || "Preview")), onFocus: t3[16] || (t3[16] = (e3) => le2(e3, unref(a2)("common.preview") || "Preview")), onMouseleave: ie2, onBlur: ie2 }, [...t3[25] || (t3[25] = [createBaseVNode("svg", { "data-v-3d59cc65": "", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": "true", role: "img", width: "1em", height: "1em", viewBox: "0 0 24 24", class: "w-3 h-3" }, [createBaseVNode("g", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }, [createBaseVNode("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0" }), createBaseVNode("circle", { cx: "12", cy: "12", r: "3" })])], -1)])], 40, co)) : createCommentVNode("", true)])], true)])) : createCommentVNode("", true), withDirectives(createBaseVNode("div", { ref_key: "codeBlockContent", ref: u, class: "code-block-content", style: normalizeStyle(V.value), onScroll: oe2 }, [createBaseVNode("div", { ref_key: "rendererTarget", ref: m, class: "code-block-render" }, null, 512), f.value ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", { key: 0, class: "code-fallback-plain", innerHTML: h2.value }, null, 8, uo))], 36), [[vShow, !(c.value || !e2.stream && e2.loading)]]), withDirectives(createBaseVNode("div", mo, [renderSlot(n3.$slots, "loading", { loading: e2.loading, stream: e2.stream }, () => [t3[26] || (t3[26] = createBaseVNode("div", { class: "loading-skeleton" }, [createBaseVNode("div", { class: "skeleton-line" }), createBaseVNode("div", { class: "skeleton-line" }), createBaseVNode("div", { class: "skeleton-line short" })], -1))], true)], 512), [[vShow, !e2.stream && e2.loading]])], 6));
} }), [["__scopeId", "data-v-c13ec984"]]);
ho.install = (e2) => {
  e2.component(ho.__name, ho);
};
const po = () => __vitePreload(() => import("./mermaid-JmFWKzEZ.js").then((n2) => n2.m), true ? __vite__mapDeps([13,1,2]) : void 0);
let vo = null, fo = po;
function go(e2) {
  fo = e2, vo = null;
}
function wo(e2) {
  go(po);
}
function yo() {
  return "function" == typeof fo;
}
function xo(e2) {
  if (!e2) return e2;
  const n2 = e2 && e2.default ? e2.default : e2;
  if (n2 && ("function" == typeof n2.render || "function" == typeof n2.parse || "function" == typeof n2.initialize)) return n2;
  if (n2 && n2.mermaidAPI && ("function" == typeof n2.mermaidAPI.render || "function" == typeof n2.mermaidAPI.parse)) {
    const e3 = n2.mermaidAPI;
    return s(i({}, n2), { render: e3.render.bind(e3), parse: e3.parse ? e3.parse.bind(e3) : void 0, initialize: (t2) => "function" == typeof n2.initialize ? n2.initialize(t2) : e3.initialize ? e3.initialize(t2) : void 0 });
  }
  return e2.mermaid && "function" == typeof e2.mermaid.render ? e2.mermaid : n2;
}
function bo(e2) {
  if (e2) try {
    const n2 = null == e2 ? void 0 : e2.initialize;
    e2.initialize = (t2) => {
      const o2 = i({ suppressErrorRendering: true }, t2 || {});
      return "function" == typeof n2 ? n2.call(e2, o2) : (null == e2 ? void 0 : e2.mermaidAPI) && "function" == typeof e2.mermaidAPI.initialize ? e2.mermaidAPI.initialize(o2) : void 0;
    };
  } catch (n2) {
  }
}
function Mo() {
  return d(this, null, function* () {
    if (vo) return vo;
    const e2 = (function() {
      try {
        const e3 = globalThis;
        return xo(null == e3 ? void 0 : e3.mermaid);
      } catch (e3) {
        return null;
      }
    })();
    if (e2) return vo = e2, bo(vo), vo;
    const n2 = fo;
    if (!n2) return null;
    let t2;
    try {
      t2 = yield n2();
    } catch (o2) {
      if (n2 === po) throw new Error('Optional dependency "mermaid" is not installed. Please install it to enable mermaid diagrams.');
      throw o2;
    }
    return t2 ? (vo = xo(t2), bo(vo), vo) : null;
  });
}
let To = null;
const jo = /* @__PURE__ */ new Map(), So = /* @__PURE__ */ new Map();
let $o = 5;
const Eo = /* @__PURE__ */ new Set();
function No() {
  if (jo.size < $o && Eo.size) {
    const n2 = Array.from(Eo);
    Eo.clear();
    for (const t2 of n2) try {
      t2();
    } catch (e2) {
    }
  }
}
function Po(e2, n2 = true, t2 = 2e3, o2) {
  return d(this, null, function* () {
    if (performance.now(), !bn()) {
      const e3 = new Error("KaTeX rendering disabled");
      return e3.name = "KaTeXDisabled", e3.code = "KATEX_DISABLED", Promise.reject(e3);
    }
    if (To) return Promise.reject(To);
    const r2 = `${n2 ? "d" : "i"}:${e2}`, a2 = So.get(r2);
    if (a2) return Promise.resolve(a2);
    To = new Error("[katexWorkerClient] No worker instance set. Please inject a Worker via setKaTeXWorker()."), To.name = "WorkerInitError", To.code = "WORKER_INIT_ERROR", null;
    return Promise.reject(To);
  });
}
function Vo(e2, n2 = true, t2) {
  const o2 = `${n2 ? "d" : "i"}:${e2}`;
  if (So.set(o2, t2), So.size > 200) {
    const e3 = So.keys().next().value;
    So.delete(e3);
  }
}
const Ko = "WORKER_BUSY";
function Do(e2 = 2e3, n2) {
  return jo.size < $o ? Promise.resolve() : new Promise((t2, o2) => {
    let r2, a2 = false;
    const l2 = () => {
      a2 || (a2 = true, r2 && globalThis.clearTimeout(r2), Eo.delete(l2), t2());
    };
    if (Eo.add(l2), r2 = globalThis.setTimeout(() => {
      if (a2) return;
      a2 = true, Eo.delete(l2);
      const e3 = new Error("Wait for worker slot timed out");
      e3.name = "WorkerBusyTimeout", e3.code = "WORKER_BUSY_TIMEOUT", o2(e3);
    }, e2), queueMicrotask(() => No()), n2) {
      const e3 = () => {
        if (a2) return;
        a2 = true, r2 && globalThis.clearTimeout(r2), Eo.delete(l2);
        const e4 = new Error("Aborted");
        e4.name = "AbortError", o2(e4);
      };
      n2.aborted ? e3() : n2.addEventListener("abort", e3, { once: true });
    }
  });
}
const Uo = { timeout: 2e3, waitTimeout: 1500, backoffMs: 30, maxRetries: 1 };
function Xo(e2) {
  return d(this, arguments, function* (e3, n2 = true, t2 = {}) {
    var o2, r2, a2, l2;
    if (!bn()) {
      const e4 = new Error("KaTeX rendering disabled");
      throw e4.name = "KaTeXDisabled", e4.code = "KATEX_DISABLED", e4;
    }
    const i2 = null != (o2 = t2.timeout) ? o2 : Uo.timeout, s2 = null != (r2 = t2.waitTimeout) ? r2 : Uo.waitTimeout, d2 = null != (a2 = t2.backoffMs) ? a2 : Uo.backoffMs, c = null != (l2 = t2.maxRetries) ? l2 : Uo.maxRetries, u = t2.signal;
    let m = 0;
    for (; ; ) {
      if (null == u ? void 0 : u.aborted) {
        const e4 = new Error("Aborted");
        throw e4.name = "AbortError", e4;
      }
      try {
        return yield Po(e3, n2, i2, u);
      } catch (h2) {
        if ((null == h2 ? void 0 : h2.code) !== Ko || m >= c) throw h2;
        if (m++, yield Do(s2, u).catch(() => {
        }), null == u ? void 0 : u.aborted) {
          const e4 = new Error("Aborted");
          throw e4.name = "AbortError", e4;
        }
        d2 > 0 && (yield new Promise((e4) => globalThis.setTimeout(e4, d2 * m)));
      }
    }
  });
}
let Qo = null;
const ir = "MERMAID_DISABLED";
function cr(e2, n2, t2 = 1400) {
  if (!yo()) {
    const e3 = new Error("Mermaid rendering disabled");
    return e3.name = "MermaidDisabled", e3.code = ir, Promise.reject(e3);
  }
  if (Qo) return Promise.reject(Qo);
  Qo = new Error("[mermaidWorkerClient] No worker instance set. Please inject a Worker via setMermaidWorker()."), Qo.name = "WorkerInitError", Qo.code = "WORKER_INIT_ERROR", null;
  return Promise.reject(Qo);
}
function ur(e2, n2, t2 = 1400) {
  return d(this, null, function* () {
    try {
      return yield cr("canParse", { code: e2, theme: n2 }, t2);
    } catch (o2) {
      return Promise.reject(o2);
    }
  });
}
function mr(e2, n2, t2 = 1400) {
  return d(this, null, function* () {
    try {
      return yield cr("findPrefix", { code: e2, theme: n2 }, t2);
    } catch (o2) {
      return Promise.reject(o2);
    }
  });
}
defineAsyncComponent(() => __vitePreload(() => import("./index4-Bl9pzqoq.js"), true ? __vite__mapDeps([8,1,2,9,3]) : void 0));
defineAsyncComponent(() => __vitePreload(() => import("./index3-BLt3mrKL.js"), true ? __vite__mapDeps([7,1,2,3]) : void 0));
defineAsyncComponent(() => __vitePreload(() => import("./index2-tU5aAM2_.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
defineAsyncComponent(() => __vitePreload(() => import("./index5-D-eY5_X1.js"), true ? __vite__mapDeps([10,1,2,9,3]) : void 0));
defineAsyncComponent(() => __vitePreload(() => import("./index6-CMxqCNon.js"), true ? __vite__mapDeps([11,1,2,3]) : void 0));
const _hoisted_1$5 = {
  key: 0,
  class: "py-3 animate-fade-in"
};
const _hoisted_2$4 = { class: "code-section" };
const _hoisted_3$2 = ["innerHTML"];
const _hoisted_4$2 = {
  key: 0,
  class: "result-section"
};
const _hoisted_5$2 = { class: "result-label" };
const _sfc_main$7 = {
  __name: "IPythonToolBlock",
  props: {
    toolCall: {
      type: Object,
      required: true
    },
    isDark: {
      type: Boolean,
      default: false
    },
    initialExpanded: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    forceExpanded: {
      type: Boolean,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const { tm } = useModuleI18n("features/chat");
    const isExpanded = ref(props.initialExpanded);
    const shikiHighlighter = ref(null);
    const shikiReady = ref(false);
    const code2 = computed(() => {
      try {
        if (props.toolCall.args && props.toolCall.args.code) {
          return props.toolCall.args.code;
        }
      } catch (err) {
        console.error("Failed to get iPython code:", err);
      }
      return null;
    });
    const result = computed(() => props.toolCall.result);
    const formattedResult = computed(() => {
      if (!result.value) return "";
      try {
        const parsed = JSON.parse(result.value);
        return JSON.stringify(parsed, null, 2);
      } catch {
        return result.value;
      }
    });
    const highlightedCode = computed(() => {
      if (!shikiReady.value || !shikiHighlighter.value || !code2.value) {
        return "";
      }
      try {
        return renderShikiCode(
          shikiHighlighter.value,
          code2.value,
          "python",
          props.isDark ? "dark" : "light"
        );
      } catch (err) {
        console.error("Failed to highlight code:", err);
        return `<pre><code>${escapeHtml$2(code2.value)}</code></pre>`;
      }
    });
    const displayExpanded = computed(() => {
      if (props.forceExpanded === null) {
        return isExpanded.value;
      }
      return props.forceExpanded;
    });
    onMounted(async () => {
      try {
        shikiHighlighter.value = await ensureShikiLanguages(["python"]);
        shikiReady.value = true;
      } catch (err) {
        console.error("Failed to initialize Shiki:", err);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ipython-tool-block", { compact: !__props.showHeader }])
      }, [
        displayExpanded.value ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
          createBaseVNode("div", _hoisted_2$4, [
            shikiReady.value && code2.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "code-highlighted",
              innerHTML: highlightedCode.value
            }, null, 8, _hoisted_3$2)) : (openBlock(), createElementBlock("pre", {
              key: 1,
              class: normalizeClass(["code-fallback", { "dark-theme": __props.isDark }])
            }, toDisplayString(code2.value || "No code available"), 3))
          ]),
          result.value ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
            createBaseVNode("div", _hoisted_5$2, toDisplayString(unref(tm)("ipython.output")) + ": ", 1),
            createBaseVNode("pre", {
              class: normalizeClass(["result-content", { "dark-theme": __props.isDark }])
            }, toDisplayString(formattedResult.value), 3)
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
};
const IPythonToolBlock = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-313ccc55"]]);
const _withScopeId$1 = (n2) => (pushScopeId("data-v-6abea141"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$4 = { class: "tool-call-title" };
const _hoisted_2$3 = { class: "tool-call-duration" };
const _hoisted_3$1 = {
  key: 0,
  class: "tool-call-details"
};
const _hoisted_4$1 = {
  key: 0,
  class: "tool-call-detail-row"
};
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "detail-label" }, "ID:", -1));
const _hoisted_6$1 = { class: "detail-value" };
const _hoisted_7$1 = { class: "tool-call-detail-row" };
const _hoisted_8$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "detail-label" }, "Args:", -1));
const _hoisted_9$1 = { class: "detail-value detail-json" };
const _hoisted_10 = {
  key: 1,
  class: "tool-call-detail-row"
};
const _hoisted_11 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "detail-label" }, "Result:", -1));
const _hoisted_12 = { class: "detail-value detail-json detail-result" };
const _sfc_main$6 = {
  __name: "ToolCallCard",
  props: {
    toolCall: {
      type: Object,
      required: true
    },
    isDark: {
      type: Boolean,
      default: false
    },
    initialExpanded: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const { tm } = useModuleI18n("features/chat");
    const isExpanded = ref(props.initialExpanded);
    const currentTime = ref(Date.now() / 1e3);
    let timer = null;
    const elapsedTime = computed(() => {
      if (props.toolCall.finished_ts) return "";
      const startTime = Number(props.toolCall.ts);
      if (!Number.isFinite(startTime) || startTime <= 0) return "";
      return formatDuration(currentTime.value - startTime);
    });
    const displayToolName = computed(() => props.toolCall.name || "tool");
    const toolCallIcon = computed(() => {
      const name = String(props.toolCall.name || "");
      if (name === "astrbot_execute_ipython" || name === "astrbot_execute_python") {
        return "mdi-code-json";
      }
      if (name.includes("web_search") || name.includes("tavily")) {
        return "mdi-web";
      }
      if (name === "astrbot_execute_shell") {
        return "mdi-console-line";
      }
      return "mdi-wrench";
    });
    const toolCallDuration = computed(() => {
      const startTime = Number(props.toolCall.ts);
      if (!Number.isFinite(startTime) || startTime <= 0) return "";
      if (props.toolCall.finished_ts) {
        return formatDuration(Number(props.toolCall.finished_ts) - startTime);
      }
      return elapsedTime.value;
    });
    const formattedResult = computed(() => {
      if (!props.toolCall.result) return "";
      try {
        const parsed = JSON.parse(props.toolCall.result);
        return JSON.stringify(parsed, null, 2);
      } catch {
        return props.toolCall.result;
      }
    });
    const formatDuration = (seconds) => {
      if (!Number.isFinite(seconds) || seconds < 0) return "";
      if (seconds < 1) {
        return `${Math.round(seconds * 1e3)}ms`;
      } else if (seconds < 60) {
        return `${seconds.toFixed(1)}s`;
      } else {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.round(seconds % 60);
        return `${minutes}m ${secs}s`;
      }
    };
    const toggleExpanded = () => {
      isExpanded.value = !isExpanded.value;
    };
    const updateTime = () => {
      currentTime.value = Date.now() / 1e3;
    };
    onMounted(() => {
      if (!props.toolCall.finished_ts) {
        timer = setInterval(updateTime, 100);
      }
    });
    onUnmounted(() => {
      if (timer) {
        clearInterval(timer);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["tool-call-card", { expanded: isExpanded.value }])
      }, [
        createBaseVNode("button", {
          class: "tool-call-header",
          type: "button",
          onClick: toggleExpanded
        }, [
          createVNode(VIcon, {
            size: "16",
            class: "tool-call-icon"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(toolCallIcon.value), 1)
            ]),
            _: 1
          }),
          createBaseVNode("span", _hoisted_1$4, toDisplayString(unref(tm)("actions.toolCallUsed", { name: displayToolName.value })), 1),
          createBaseVNode("span", _hoisted_2$3, toDisplayString(toolCallDuration.value), 1),
          createVNode(VIcon, {
            size: "22",
            class: normalizeClass(["tool-call-expand-icon", { expanded: isExpanded.value }])
          }, {
            default: withCtx(() => [
              createTextVNode(" mdi-chevron-right ")
            ]),
            _: 1
          }, 8, ["class"])
        ]),
        isExpanded.value ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          __props.toolCall.id ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
            _hoisted_5$1,
            createBaseVNode("code", _hoisted_6$1, toDisplayString(__props.toolCall.id), 1)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_7$1, [
            _hoisted_8$1,
            createBaseVNode("pre", _hoisted_9$1, toDisplayString(JSON.stringify(__props.toolCall.args, null, 2)), 1)
          ]),
          __props.toolCall.result ? (openBlock(), createElementBlock("div", _hoisted_10, [
            _hoisted_11,
            createBaseVNode("pre", _hoisted_12, toDisplayString(formattedResult.value), 1)
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
};
const ToolCallCard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-6abea141"]]);
const _hoisted_1$3 = { class: "tool-call-item" };
const _hoisted_2$2 = ["onKeydown"];
const _sfc_main$5 = {
  __name: "ToolCallItem",
  props: {
    isDark: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const isExpanded = ref(false);
    const toggleExpanded = () => {
      isExpanded.value = !isExpanded.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", {
          class: "tool-call-line",
          role: "button",
          tabindex: "0",
          onClick: toggleExpanded,
          onKeydown: [
            withKeys(toggleExpanded, ["enter"]),
            withKeys(withModifiers(toggleExpanded, ["prevent"]), ["space"])
          ]
        }, [
          renderSlot(_ctx.$slots, "label", { expanded: isExpanded.value }, void 0, true)
        ], 40, _hoisted_2$2),
        createVNode(Transition, { name: "tool-call-fade" }, {
          default: withCtx(() => [
            isExpanded.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["tool-call-inline-details", { "is-dark": __props.isDark }])
            }, [
              renderSlot(_ctx.$slots, "details", {}, void 0, true)
            ], 2)) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ]);
    };
  }
};
const ToolCallItem = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-2d6e1b8c"]]);
const _withScopeId = (n2) => (pushScopeId("data-v-dc679236"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$2 = {
  key: 0,
  class: "reasoning-timeline"
};
const _hoisted_2$1 = {
  class: "reasoning-timeline-rail",
  "aria-hidden": "true"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "reasoning-timeline-dot" }, null, -1));
const _hoisted_4 = {
  key: 0,
  class: "reasoning-timeline-line"
};
const _hoisted_5 = { class: "reasoning-step" };
const _hoisted_6 = { class: "reasoning-step-meta" };
const _hoisted_7 = { class: "reasoning-step-title" };
const _hoisted_8 = {
  key: 1,
  class: "reasoning-tool-call-block"
};
const _hoisted_9 = { class: "tool-call-inline-status" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ReasoningTimeline",
  props: {
    parts: {},
    reasoning: {},
    isDark: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { tm } = useModuleI18n("features/chat");
    const renderParts = computed(() => {
      var _a2;
      if ((_a2 = props.parts) == null ? void 0 : _a2.length) return props.parts;
      if (props.reasoning) {
        return [{ type: "think", think: props.reasoning }];
      }
      return [];
    });
    const timelineEntries = computed(() => {
      const entries = [];
      renderParts.value.forEach((part, partIndex) => {
        if (part.type === "think") {
          const think = String(part.think || "");
          if (!think.trim()) return;
          entries.push({
            key: `think-${partIndex}`,
            kind: "think",
            title: tm("reasoning.think"),
            think
          });
          return;
        }
        if (part.type !== "tool_call" || !Array.isArray(part.tool_calls)) return;
        part.tool_calls.forEach((tool, toolIndex) => {
          const normalizedTool = normalizeToolCall(tool);
          entries.push({
            key: `tool-${String(tool.id || tool.name || `${partIndex}-${toolIndex}`)}`,
            kind: "tool_call",
            title: tm("reasoning.toolUsed"),
            tool: normalizedTool
          });
        });
      });
      return entries;
    });
    function normalizeToolCall(tool) {
      const normalized = { ...tool };
      normalized.args = parseJsonSafe2(normalized.args ?? normalized.arguments ?? {});
      normalized.result = parseJsonSafe2(normalized.result);
      normalized.ts = normalized.ts ?? Date.now() / 1e3;
      if (normalized.result && typeof normalized.result === "object") {
        normalized.result = JSON.stringify(normalized.result, null, 2);
      }
      return normalized;
    }
    function isIPythonToolCall(tool) {
      const name = String(tool.name || "").toLowerCase();
      return name.includes("python") || name.includes("ipython");
    }
    function toolCallStatusText(tool) {
      if (tool.finished_ts) return tm("toolStatus.done");
      return tm("toolStatus.running");
    }
    function parseJsonSafe2(value) {
      if (typeof value !== "string") return value;
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }
    return (_ctx, _cache) => {
      return timelineEntries.value.length ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(timelineEntries.value, (entry, entryIndex) => {
          return openBlock(), createElementBlock("div", {
            key: entry.key,
            class: "reasoning-timeline-item"
          }, [
            createBaseVNode("div", _hoisted_2$1, [
              _hoisted_3,
              entryIndex < timelineEntries.value.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_4)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("span", _hoisted_7, toDisplayString(entry.title), 1)
              ]),
              entry.kind === "think" ? (openBlock(), createBlock(unref(Lt), {
                key: 0,
                content: entry.think || "",
                class: "reasoning-text markdown-content",
                typewriter: false,
                "is-dark": _ctx.isDark
              }, null, 8, ["content", "is-dark"])) : entry.tool ? (openBlock(), createElementBlock("div", _hoisted_8, [
                isIPythonToolCall(entry.tool) ? (openBlock(), createBlock(ToolCallItem, {
                  key: 0,
                  "is-dark": _ctx.isDark
                }, {
                  label: withCtx(() => [
                    createVNode(VIcon, { size: "16" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-code-json")
                      ]),
                      _: 1
                    }),
                    createBaseVNode("span", null, toDisplayString(entry.tool.name || "python"), 1),
                    createBaseVNode("span", _hoisted_9, toDisplayString(toolCallStatusText(entry.tool)), 1)
                  ]),
                  details: withCtx(() => [
                    createVNode(IPythonToolBlock, {
                      "tool-call": entry.tool,
                      "is-dark": _ctx.isDark,
                      "show-header": false,
                      "force-expanded": true
                    }, null, 8, ["tool-call", "is-dark"])
                  ]),
                  _: 2
                }, 1032, ["is-dark"])) : (openBlock(), createBlock(ToolCallCard, {
                  key: 1,
                  "tool-call": entry.tool,
                  "is-dark": _ctx.isDark
                }, null, 8, ["tool-call", "is-dark"]))
              ])) : createCommentVNode("", true)
            ])
          ]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
const ReasoningTimeline = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-dc679236"]]);
const _hoisted_1$1 = { class: "reasoning-title" };
const _hoisted_2 = {
  key: 0,
  class: "reasoning-content animate-fade-in"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ReasoningBlock",
  props: {
    parts: {},
    reasoning: {},
    isDark: { type: Boolean },
    initialExpanded: { type: Boolean },
    isStreaming: { type: Boolean },
    hasNonReasoningContent: { type: Boolean },
    openInSidebar: { type: Boolean }
  },
  emits: ["open"],
  setup(__props, { emit }) {
    const props = __props;
    const { tm } = useModuleI18n("features/chat");
    const isExpanded = ref(Boolean(props.initialExpanded));
    const previewText = ref("");
    const previewKey = ref(0);
    let previewTimer = null;
    let previewStartTimer = null;
    const renderParts = computed(() => {
      var _a2;
      if ((_a2 = props.parts) == null ? void 0 : _a2.length) return props.parts;
      if (props.reasoning) {
        return [{ type: "think", think: props.reasoning }];
      }
      return [];
    });
    const openInSidebar = computed(() => Boolean(props.openInSidebar));
    const thinkingText = computed(
      () => renderParts.value.filter((part) => part.type === "think").map((part) => String(part.think || "")).join("")
    );
    const showStreamingPreview = computed(
      () => props.isStreaming && (openInSidebar.value || !isExpanded.value) && !props.hasNonReasoningContent && previewText.value
    );
    const previewTransitionName = computed(
      () => props.hasNonReasoningContent ? "reasoning-preview-collapse" : "reasoning-preview-fade"
    );
    function handlePrimaryAction() {
      if (openInSidebar.value) {
        emit("open");
        return;
      }
      isExpanded.value = !isExpanded.value;
    }
    function latestReasoningPreview() {
      const lines = thinkingText.value.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
      return lines.slice(-3).join("\n");
    }
    function updatePreviewLine() {
      const nextText = latestReasoningPreview();
      if (!nextText || nextText === previewText.value) return;
      previewText.value = nextText;
      previewKey.value += 1;
    }
    function stopPreviewTimer() {
      if (!previewTimer) return;
      clearInterval(previewTimer);
      previewTimer = null;
    }
    function stopPreviewStartTimer() {
      if (!previewStartTimer) return;
      clearTimeout(previewStartTimer);
      previewStartTimer = null;
    }
    function startPreviewTimer() {
      updatePreviewLine();
      if (!previewTimer) {
        previewTimer = setInterval(updatePreviewLine, 2e3);
      }
    }
    function syncPreviewTimer() {
      if (props.isStreaming && (openInSidebar.value || !isExpanded.value) && !props.hasNonReasoningContent) {
        if (!previewTimer && !previewStartTimer) {
          previewStartTimer = setTimeout(() => {
            previewStartTimer = null;
            if (props.isStreaming && (openInSidebar.value || !isExpanded.value) && !props.hasNonReasoningContent) {
              startPreviewTimer();
            }
          }, 2e3);
        }
        return;
      }
      stopPreviewStartTimer();
      stopPreviewTimer();
      if (!props.isStreaming) {
        previewText.value = "";
      }
    }
    watch(
      () => [
        props.isStreaming,
        isExpanded.value,
        props.hasNonReasoningContent,
        thinkingText.value,
        openInSidebar.value
      ],
      syncPreviewTimer,
      {
        immediate: true
      }
    );
    onBeforeUnmount(() => {
      stopPreviewStartTimer();
      stopPreviewTimer();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["reasoning-block", { "reasoning-block--dark": _ctx.isDark }])
      }, [
        createBaseVNode("button", {
          class: normalizeClass(["reasoning-header", { "reasoning-header--trigger": openInSidebar.value }]),
          type: "button",
          onClick: handlePrimaryAction
        }, [
          createBaseVNode("span", _hoisted_1$1, toDisplayString(unref(tm)("reasoning.thinking")), 1),
          createVNode(VIcon, {
            size: "22",
            class: normalizeClass(["reasoning-icon", { "rotate-90": !openInSidebar.value && isExpanded.value }])
          }, {
            default: withCtx(() => [
              createTextVNode(" mdi-chevron-right ")
            ]),
            _: 1
          }, 8, ["class"])
        ], 2),
        !openInSidebar.value && isExpanded.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(ReasoningTimeline, {
            parts: renderParts.value,
            reasoning: _ctx.reasoning,
            "is-dark": _ctx.isDark
          }, null, 8, ["parts", "reasoning", "is-dark"])
        ])) : createCommentVNode("", true),
        createVNode(Transition, {
          name: previewTransitionName.value,
          mode: "out-in"
        }, {
          default: withCtx(() => [
            showStreamingPreview.value ? (openBlock(), createElementBlock("div", {
              key: previewKey.value,
              class: "reasoning-preview"
            }, toDisplayString(previewText.value), 1)) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["name"])
      ], 2);
    };
  }
});
const ReasoningBlock = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5eaa867d"]]);
const _sfc_main$2 = {
  __name: "RefNode",
  props: {
    node: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const injectedIsDark = inject("isDark", false);
    const webSearchResults = inject("webSearchResults", () => ({}));
    const isDark = computed(() => Boolean(unref(injectedIsDark)));
    const refIndex = computed(() => {
      var _a2, _b, _c;
      const nodeContent = (_b = (_a2 = props.node) == null ? void 0 : _a2.content) == null ? void 0 : _b.trim();
      if (nodeContent) return nodeContent;
      return slotText((_c = slots.default) == null ? void 0 : _c.call(slots)).trim();
    });
    const resultData = computed(() => {
      if (!refIndex.value) return null;
      const results = typeof webSearchResults === "function" ? webSearchResults() : webSearchResults;
      return (results == null ? void 0 : results[refIndex.value]) || null;
    });
    const url = computed(() => {
      var _a2;
      return ((_a2 = resultData.value) == null ? void 0 : _a2.url) || "";
    });
    const domain = computed(() => {
      if (!url.value) return "";
      try {
        const urlObj = new URL(url.value);
        return urlObj.hostname.replace(/^www\./, "");
      } catch (e2) {
        return "";
      }
    });
    const chipStyle = computed(() => ({
      backgroundColor: isDark.value ? "rgba(var(--v-theme-on-surface), 0.08)" : "rgba(var(--v-theme-on-surface), 0.04)",
      color: isDark.value ? "rgba(var(--v-theme-on-surface), 0.62)" : "rgba(var(--v-theme-on-surface), 0.72)"
    }));
    function slotText(nodes = []) {
      return nodes.map((node) => {
        if (typeof node.children === "string") return node.children;
        if (Array.isArray(node.children)) return slotText(node.children);
        return "";
      }).join("");
    }
    return (_ctx, _cache) => {
      return resultData.value ? (openBlock(), createBlock(VChip, {
        key: 0,
        class: "ref-chip",
        size: "x-small",
        variant: "flat",
        style: normalizeStyle(chipStyle.value),
        href: url.value,
        target: "_blank",
        clickable: ""
      }, {
        default: withCtx(() => [
          createVNode(VIcon, {
            start: "",
            size: "x-small",
            color: ""
          }, {
            default: withCtx(() => [
              createTextVNode("mdi-link-variant")
            ]),
            _: 1
          }),
          createBaseVNode("span", null, toDisplayString(domain.value || resultData.value.title || refIndex.value), 1)
        ]),
        _: 1
      }, 8, ["style", "href"])) : createCommentVNode("", true);
    };
  }
};
const RefNode = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f0dec60c"]]);
const _hoisted_1 = { class: "markdown-content" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MarkdownMessagePart",
  props: {
    content: {},
    refs: {},
    isDark: { type: Boolean },
    customHtmlTags: {}
  },
  setup(__props) {
    const props = __props;
    const isDarkRef = computed(() => props.isDark);
    const refsByIndex = computed(() => {
      const messageRefs = props.refs;
      const refs = messageRefs && Array.isArray(messageRefs.used) ? messageRefs.used : [];
      return refs.reduce((acc, item) => {
        if (item.index != null) {
          acc[String(item.index)] = item;
        }
        return acc;
      }, {});
    });
    provide("isDark", isDarkRef);
    provide("webSearchResults", () => refsByIndex.value);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(Lt), {
          "custom-id": "chat-message",
          content: _ctx.content,
          "custom-html-tags": _ctx.customHtmlTags,
          "is-dark": _ctx.isDark,
          typewriter: false,
          "max-live-nodes": 0
        }, null, 8, ["content", "custom-html-tags", "is-dark"])
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "ThemeAwareMarkdownCodeBlock",
  props: {
    node: {},
    isDark: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const injectedIsDark = inject("isDark");
    const effectiveIsDark = computed(
      () => props.isDark ?? (injectedIsDark instanceof Object && "value" in injectedIsDark ? injectedIsDark.value : injectedIsDark) ?? false
    );
    const attrs = useAttrs();
    const forwardedBindings = computed(() => ({
      ...attrs,
      ...props,
      isDark: effectiveIsDark.value
    }));
    const themeRenderKey = computed(() => effectiveIsDark.value ? "dark" : "light");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ho), mergeProps({ key: themeRenderKey.value }, forwardedBindings.value), createSlots({ _: 2 }, [
        renderList(_ctx.$slots, (_, slotName) => {
          return {
            name: slotName,
            fn: withCtx((slotProps) => [
              renderSlot(_ctx.$slots, slotName, normalizeProps(guardReactiveProps(slotProps || {})))
            ])
          };
        })
      ]), 1040);
    };
  }
});
function useMessages(options) {
  const loadingMessages = ref(false);
  const sending = ref(false);
  const messagesBySession = reactive({});
  const loadedSessions = reactive({});
  const activeConnections = reactive({});
  const attachmentBlobCache = /* @__PURE__ */ new Map();
  const sessionProjects = reactive(
    {}
  );
  const activeMessages = computed(
    () => options.currentSessionId.value ? messagesBySession[options.currentSessionId.value] || [] : []
  );
  onBeforeUnmount(() => {
    cleanupConnections();
    for (const promise of attachmentBlobCache.values()) {
      promise.then((url) => URL.revokeObjectURL(url)).catch(() => {
      });
    }
    attachmentBlobCache.clear();
  });
  function isSessionRunning(sessionId) {
    return Boolean(activeConnections[sessionId]);
  }
  function isUserMessage(msg) {
    return messageContent(msg).type === "user";
  }
  function messageContent(msg) {
    return msg.content || { type: "bot", message: [] };
  }
  function messageParts(msg) {
    const parts = messageContent(msg).message;
    if (Array.isArray(parts)) return parts;
    if (typeof parts === "string") return [{ type: "plain", text: parts }];
    return [];
  }
  function isMessageStreaming(msg, msgIndex) {
    if (!options.currentSessionId.value || !isSessionRunning(options.currentSessionId.value)) {
      return false;
    }
    return !isUserMessage(msg) && msgIndex === activeMessages.value.length - 1;
  }
  async function resolvePartMedia(part) {
    if (part.embedded_url) return;
    let url;
    let cacheKey;
    if (part.attachment_id) {
      cacheKey = `att:${part.attachment_id}`;
      url = `/api/chat/get_attachment?attachment_id=${encodeURIComponent(part.attachment_id)}`;
    } else if (part.filename) {
      cacheKey = `file:${part.filename}`;
      url = `/api/chat/get_file?filename=${encodeURIComponent(part.filename)}`;
    } else {
      return;
    }
    let promise = attachmentBlobCache.get(cacheKey);
    if (!promise) {
      promise = axios.get(url, { responseType: "blob" }).then((resp) => URL.createObjectURL(resp.data));
      attachmentBlobCache.set(cacheKey, promise);
    }
    try {
      part.embedded_url = await promise;
    } catch (e2) {
      attachmentBlobCache.delete(cacheKey);
      console.error("Failed to resolve media:", cacheKey, e2);
    }
  }
  async function resolveRecordMedia(records) {
    var _a2;
    const mediaTypes = ["image", "record", "video"];
    const tasks = [];
    for (const record of records) {
      for (const part of ((_a2 = record.content) == null ? void 0 : _a2.message) || []) {
        if (mediaTypes.includes(part.type) && !part.embedded_url && (part.attachment_id || part.filename)) {
          tasks.push(resolvePartMedia(part));
        }
      }
    }
    await Promise.all(tasks);
  }
  async function loadSessionMessages(sessionId) {
    var _a2;
    if (!sessionId) return;
    loadingMessages.value = true;
    try {
      const response = await axios.get("/api/chat/get_session", {
        params: { session_id: sessionId }
      });
      const payload = ((_a2 = response.data) == null ? void 0 : _a2.data) || {};
      const history = payload.history || [];
      const records = history.map(normalizeHistoryRecord);
      attachThreads(records, payload.threads || []);
      await resolveRecordMedia(records);
      messagesBySession[sessionId] = records;
      sessionProjects[sessionId] = normalizeSessionProject(payload.project);
      loadedSessions[sessionId] = true;
    } catch (error) {
      console.error("Failed to load session messages:", error);
      messagesBySession[sessionId] = messagesBySession[sessionId] || [];
    } finally {
      loadingMessages.value = false;
    }
  }
  function createLocalExchange({
    sessionId,
    messageId,
    parts
  }) {
    loadedSessions[sessionId] = true;
    messagesBySession[sessionId] = messagesBySession[sessionId] || [];
    const userRecord = {
      id: `local-user-${messageId}`,
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      content: {
        type: "user",
        message: parts.map(stripUploadOnlyFields)
      }
    };
    const botRecord = {
      id: `local-bot-${messageId}`,
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      content: {
        type: "bot",
        message: [],
        reasoning: "",
        isLoading: true
      }
    };
    messagesBySession[sessionId].push(userRecord, botRecord);
    const sessionMessages = messagesBySession[sessionId];
    return {
      userRecord: sessionMessages[sessionMessages.length - 2],
      botRecord: sessionMessages[sessionMessages.length - 1]
    };
  }
  function sendMessageStream({
    sessionId,
    messageId,
    parts,
    transport,
    enableStreaming = true,
    selectedProvider = "",
    selectedModel = "",
    botRecord,
    userRecord,
    skipUserHistory = false,
    llmCheckpointId = null
  }) {
    if (transport === "websocket") {
      startWebSocketStream(
        sessionId,
        messageId,
        parts,
        botRecord,
        userRecord,
        enableStreaming,
        selectedProvider,
        selectedModel
      );
      return;
    }
    startSseStream(
      sessionId,
      messageId,
      parts,
      botRecord,
      userRecord,
      enableStreaming,
      selectedProvider,
      selectedModel,
      skipUserHistory,
      llmCheckpointId
    );
  }
  async function editMessage(sessionId, record, editedText) {
    var _a2;
    if (!sessionId || record.id == null) return { needsRegenerate: false };
    const content = cloneContentWithEditedText(record, editedText);
    const response = await axios.post("/api/chat/message/edit", {
      session_id: sessionId,
      message_id: record.id,
      content
    });
    const payload = ((_a2 = response.data) == null ? void 0 : _a2.data) || {};
    const updated = payload.message ? normalizeHistoryRecord(payload.message) : null;
    if (updated) {
      Object.assign(record, updated);
      await resolveRecordMedia([record]);
    }
    if (payload.truncated_after_message) {
      truncateMessagesAfter(sessionId, record);
    }
    return {
      needsRegenerate: Boolean(payload.needs_regenerate),
      truncatedAfterMessage: Boolean(payload.truncated_after_message)
    };
  }
  function truncateMessagesAfter(sessionId, record) {
    const records = messagesBySession[sessionId];
    if (!(records == null ? void 0 : records.length) || record.id == null) return;
    const index = records.findIndex(
      (message) => String(message.id) === String(record.id)
    );
    if (index < 0) return;
    messagesBySession[sessionId] = records.slice(0, index + 1);
  }
  function continueEditedMessage({
    sessionId,
    sourceRecord,
    enableStreaming = true,
    selectedProvider = "",
    selectedModel = ""
  }) {
    var _a2;
    if (!sessionId) return;
    const parts = messageParts(sourceRecord).map(stripUploadOnlyFields);
    const messageId = ((_a2 = crypto.randomUUID) == null ? void 0 : _a2.call(crypto)) || `${Date.now()}-${Math.random()}`;
    messagesBySession[sessionId] = messagesBySession[sessionId] || [];
    const botRecord = {
      id: `local-edited-bot-${messageId}`,
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      content: {
        type: "bot",
        message: [],
        reasoning: "",
        isLoading: true
      }
    };
    messagesBySession[sessionId].push(botRecord);
    startSseStream(
      sessionId,
      messageId,
      parts,
      botRecord,
      void 0,
      enableStreaming,
      selectedProvider,
      selectedModel,
      true,
      sourceRecord.llm_checkpoint_id || null
    );
  }
  async function regenerateMessage(sessionId, botRecord, selectedProvider = "", selectedModel = "") {
    var _a2;
    if (!sessionId || botRecord.id == null) return;
    const targetMessageId = botRecord.id;
    botRecord.id = `local-regenerate-${Date.now()}`;
    botRecord.created_at = (/* @__PURE__ */ new Date()).toISOString();
    botRecord.content = {
      type: "bot",
      message: [],
      reasoning: "",
      isLoading: true
    };
    const abort = new AbortController();
    activeConnections[sessionId] = {
      sessionId,
      messageId: String(botRecord.id),
      transport: "sse",
      abort
    };
    try {
      const response = await fetch("/api/chat/message/regenerate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`
        },
        body: JSON.stringify({
          session_id: sessionId,
          message_id: targetMessageId,
          selected_provider: selectedProvider,
          selected_model: selectedModel
        }),
        signal: abort.signal
      });
      if (!response.ok || !response.body) {
        throw new Error(`Regenerate failed: ${response.status}`);
      }
      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("text/event-stream")) {
        const payload = await response.json().catch(() => null);
        throw new Error((payload == null ? void 0 : payload.message) || "Regenerate failed.");
      }
      await readSseStream(response.body, (payload) => {
        var _a3;
        processStreamPayload(botRecord, payload);
        (_a3 = options.onStreamUpdate) == null ? void 0 : _a3.call(options, sessionId);
      });
    } catch (error) {
      if (!abort.signal.aborted) {
        appendPlain(botRecord, `

${String((error == null ? void 0 : error.message) || error)}`);
        console.error("Regenerate failed:", error);
      }
    } finally {
      delete activeConnections[sessionId];
      await ((_a2 = options.onSessionsChanged) == null ? void 0 : _a2.call(options));
    }
  }
  async function stopSession(sessionId) {
    if (!sessionId) return;
    await axios.post("/api/chat/stop", { session_id: sessionId });
  }
  function cleanupConnections() {
    Object.values(activeConnections).forEach((connection) => {
      var _a2, _b;
      (_a2 = connection.abort) == null ? void 0 : _a2.abort();
      (_b = connection.ws) == null ? void 0 : _b.close();
    });
  }
  function normalizeHistoryRecord(record) {
    const content = record.content || {};
    const normalizedMessage = normalizeMessageParts(
      content.message || [],
      content.reasoning || ""
    );
    const normalizedContent = {
      type: content.type || (record.sender_id === "bot" ? "bot" : "user"),
      message: normalizedMessage,
      reasoning: extractReasoningText(normalizedMessage, content.reasoning || ""),
      agentStats: content.agentStats || content.agent_stats,
      refs: content.refs
    };
    return {
      ...record,
      content: normalizedContent
    };
  }
  function attachThreads(records, threads) {
    const threadsByMessage = /* @__PURE__ */ new Map();
    for (const thread of threads) {
      const key = String(thread.parent_message_id);
      const list2 = threadsByMessage.get(key) || [];
      list2.push(thread);
      threadsByMessage.set(key, list2);
    }
    for (const record of records) {
      const key = record.id == null ? "" : String(record.id);
      record.threads = threadsByMessage.get(key) || [];
    }
  }
  function startSseStream(sessionId, messageId, parts, botRecord, userRecord, enableStreaming, selectedProvider, selectedModel, skipUserHistory = false, llmCheckpointId = null) {
    const abort = new AbortController();
    activeConnections[sessionId] = {
      sessionId,
      messageId,
      transport: "sse",
      abort
    };
    fetch("/api/chat/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`
      },
      body: JSON.stringify({
        session_id: sessionId,
        message: parts.map(partToPayload),
        enable_streaming: enableStreaming,
        selected_provider: selectedProvider,
        selected_model: selectedModel,
        _skip_user_history: skipUserHistory,
        _llm_checkpoint_id: llmCheckpointId || void 0
      }),
      signal: abort.signal
    }).then(async (response) => {
      if (!response.ok || !response.body) {
        throw new Error(`SSE connection failed: ${response.status}`);
      }
      await readSseStream(response.body, (payload) => {
        var _a2;
        processStreamPayload(botRecord, payload, userRecord);
        (_a2 = options.onStreamUpdate) == null ? void 0 : _a2.call(options, sessionId);
      });
    }).catch((error) => {
      if (abort.signal.aborted) return;
      appendPlain(botRecord, `

${String((error == null ? void 0 : error.message) || error)}`);
      console.error("SSE chat failed:", error);
    }).finally(async () => {
      var _a2;
      delete activeConnections[sessionId];
      await ((_a2 = options.onSessionsChanged) == null ? void 0 : _a2.call(options));
    });
  }
  function startWebSocketStream(sessionId, messageId, parts, botRecord, userRecord, enableStreaming, selectedProvider, selectedModel) {
    const token = encodeURIComponent(localStorage.getItem("token") || "");
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const ws = new WebSocket(
      `${protocol}//${window.location.host}/api/unified_chat/ws?token=${token}`
    );
    activeConnections[sessionId] = {
      sessionId,
      messageId,
      transport: "websocket",
      ws
    };
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          ct: "chat",
          t: "send",
          session_id: sessionId,
          message_id: messageId,
          message: parts.map(partToPayload),
          enable_streaming: enableStreaming,
          selected_provider: selectedProvider,
          selected_model: selectedModel
        })
      );
    };
    ws.onmessage = (event) => {
      var _a2;
      try {
        const payload = JSON.parse(event.data);
        processStreamPayload(botRecord, payload, userRecord);
        (_a2 = options.onStreamUpdate) == null ? void 0 : _a2.call(options, sessionId);
        if (payload.type === "end" || payload.t === "end") {
          ws.close();
        }
      } catch (error) {
        console.error("Failed to parse WebSocket payload:", error);
      }
    };
    ws.onerror = () => {
      appendPlain(botRecord, "\n\nWebSocket connection failed.");
    };
    ws.onclose = async () => {
      var _a2;
      delete activeConnections[sessionId];
      await ((_a2 = options.onSessionsChanged) == null ? void 0 : _a2.call(options));
    };
  }
  function processStreamPayload(botRecord, payload, userRecord) {
    const normalized = (payload == null ? void 0 : payload.ct) === "chat" ? { ...payload, type: payload.type || payload.t } : payload;
    const msgType = (normalized == null ? void 0 : normalized.type) || (normalized == null ? void 0 : normalized.t);
    const chainType = normalized == null ? void 0 : normalized.chain_type;
    const data = (normalized == null ? void 0 : normalized.data) ?? "";
    if (msgType === "session_id" || msgType === "session_bound") return;
    if (msgType === "user_message_saved") {
      if (userRecord) {
        userRecord.id = (data == null ? void 0 : data.id) || userRecord.id;
        userRecord.created_at = (data == null ? void 0 : data.created_at) || userRecord.created_at;
        userRecord.llm_checkpoint_id = (data == null ? void 0 : data.llm_checkpoint_id) || userRecord.llm_checkpoint_id;
      }
      return;
    }
    if (msgType === "message_saved") {
      markMessageStarted(botRecord);
      botRecord.id = (data == null ? void 0 : data.id) || botRecord.id;
      botRecord.created_at = (data == null ? void 0 : data.created_at) || botRecord.created_at;
      botRecord.llm_checkpoint_id = (data == null ? void 0 : data.llm_checkpoint_id) || botRecord.llm_checkpoint_id;
      if (data == null ? void 0 : data.refs) {
        messageContent(botRecord).refs = data.refs;
      }
      return;
    }
    if (msgType === "agent_stats" || chainType === "agent_stats") {
      markMessageStarted(botRecord);
      messageContent(botRecord).agentStats = data;
      return;
    }
    if (msgType === "error") {
      markMessageStarted(botRecord);
      appendPlain(botRecord, `

${String(data)}`);
      return;
    }
    if (msgType === "complete" || msgType === "break") {
      markMessageStarted(botRecord);
      const finalText = payloadText(data);
      if (finalText && !hasPlainText(botRecord)) {
        appendPlain(botRecord, finalText, false);
      }
      return;
    }
    if (msgType === "end") {
      markMessageStarted(botRecord);
      return;
    }
    if (msgType === "plain") {
      markMessageStarted(botRecord);
      if (chainType === "reasoning") {
        appendReasoningPart(botRecord, payloadText(data));
        return;
      }
      if (chainType === "tool_call") {
        upsertToolCall(botRecord, parseJsonSafe(data));
        return;
      }
      if (chainType === "tool_call_result") {
        finishToolCall(botRecord, parseJsonSafe(data));
        return;
      }
      appendPlain(botRecord, payloadText(data), normalized.streaming !== false);
      return;
    }
    if (["image", "record", "file", "video"].includes(msgType)) {
      markMessageStarted(botRecord);
      const filename = String(data).replace("[IMAGE]", "").replace("[RECORD]", "").replace("[FILE]", "").replace("[VIDEO]", "").split("|", 1)[0];
      const mediaPart = { type: msgType, filename };
      if (msgType !== "file") {
        resolvePartMedia(mediaPart).then(() => {
          messageContent(botRecord).message.push(mediaPart);
        });
      } else {
        messageContent(botRecord).message.push(mediaPart);
      }
    }
  }
  return {
    loadingMessages,
    sending,
    messagesBySession,
    loadedSessions,
    sessionProjects,
    activeMessages,
    isSessionRunning,
    isUserMessage,
    isMessageStreaming,
    messageContent,
    messageParts,
    loadSessionMessages,
    createLocalExchange,
    sendMessageStream,
    editMessage,
    continueEditedMessage,
    regenerateMessage,
    stopSession,
    cleanupConnections
  };
}
function cloneContentWithEditedText(record, editedText) {
  const content = record.content || { type: "bot", message: [] };
  const message = Array.isArray(content.message) ? content.message.map((part) => ({ ...part })) : [];
  let replaced = false;
  for (const part of message) {
    if (part.type === "plain") {
      part.text = editedText;
      replaced = true;
      break;
    }
  }
  if (!replaced && editedText) {
    message.push({ type: "plain", text: editedText });
  }
  return {
    ...content,
    message
  };
}
function stripUploadOnlyFields(part) {
  const copied = { ...part };
  delete copied.path;
  return copied;
}
function normalizeSessionProject(value) {
  if (!value || typeof value !== "object") return null;
  const project = value;
  if (typeof project.project_id !== "string" || typeof project.title !== "string") {
    return null;
  }
  return {
    project_id: project.project_id,
    title: project.title,
    emoji: typeof project.emoji === "string" ? project.emoji : void 0
  };
}
function normalizeMessageParts(parts, legacyReasoning = "") {
  const normalizedParts = normalizePartsInternal(parts);
  if (legacyReasoning && !normalizedParts.some((part) => part.type === "think")) {
    normalizedParts.unshift({ type: "think", think: legacyReasoning });
  }
  return normalizedParts;
}
function extractReasoningText(parts, legacyReasoning = "") {
  const normalizedParts = Array.isArray(parts) ? parts : normalizeMessageParts(parts, legacyReasoning);
  const text2 = normalizedParts.filter((part) => part.type === "think").map((part) => String(part.think || "")).join("");
  return text2 || legacyReasoning;
}
function displayParts(content) {
  return messageBlocks(content).filter((block2) => block2.kind === "content").flatMap((block2) => block2.parts);
}
function messageBlocks(content) {
  const parts = Array.isArray(content.message) ? content.message : normalizeMessageParts(content.message, content.reasoning || "");
  const blocks = [];
  let currentKind = null;
  let currentParts = [];
  for (const part of parts) {
    if (isEmptyPlainPart(part)) continue;
    const nextKind = isThinkingPart(part) ? "thinking" : "content";
    if (currentKind !== nextKind) {
      if (currentKind && currentParts.length) {
        blocks.push({ kind: currentKind, parts: currentParts });
      }
      currentKind = nextKind;
      currentParts = [{ ...part }];
      continue;
    }
    currentParts.push({ ...part });
  }
  if (currentKind && currentParts.length) {
    blocks.push({ kind: currentKind, parts: currentParts });
  }
  if (!blocks.length && content.reasoning) {
    return [
      {
        kind: "thinking",
        parts: [{ type: "think", think: String(content.reasoning) }]
      }
    ];
  }
  return blocks;
}
function partToPayload(part) {
  if (part.type === "plain") return { type: "plain", text: part.text || "" };
  if (part.type === "reply") {
    return {
      type: "reply",
      message_id: part.message_id,
      selected_text: part.selected_text || ""
    };
  }
  return {
    type: part.type,
    attachment_id: part.attachment_id,
    filename: part.filename
  };
}
async function readSseStream(body, onPayload) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const events = buffer.split("\n\n");
    buffer = events.pop() || "";
    for (const event of events) {
      const data = event.split("\n").filter((line) => line.startsWith("data:")).map((line) => line.slice(5).trimStart()).join("\n");
      if (!data) continue;
      try {
        onPayload(JSON.parse(data));
      } catch (error) {
        console.error("Failed to parse SSE payload:", error, data);
      }
    }
  }
}
function normalizePartsInternal(parts) {
  if (typeof parts === "string") {
    return parts ? [{ type: "plain", text: parts }] : [];
  }
  if (!Array.isArray(parts)) return [];
  return parts.map((part) => {
    if (!part || typeof part !== "object") {
      return { type: "plain", text: String(part ?? "") };
    }
    if (part.type === "reasoning") {
      return {
        ...part,
        type: "think",
        think: String(part.think ?? part.text ?? "")
      };
    }
    return { ...part };
  });
}
function isEmptyPlainPart(part) {
  return part.type === "plain" && !String(part.text || "");
}
function isThinkingPart(part) {
  return part.type === "think" || part.type === "tool_call";
}
function appendPlain(record, text2, append = true) {
  markMessageStarted(record);
  const content = record.content;
  let last = content.message[content.message.length - 1];
  if (!last || last.type !== "plain") {
    last = { type: "plain", text: "" };
    content.message.push(last);
  }
  last.text = append ? `${last.text || ""}${text2}` : text2;
}
function appendReasoningPart(record, text2) {
  markMessageStarted(record);
  if (!text2) return;
  const content = record.content;
  const last = content.message[content.message.length - 1];
  if ((last == null ? void 0 : last.type) === "think") {
    last.think = `${String(last.think || "")}${text2}`;
  } else {
    content.message.push({ type: "think", think: text2 });
  }
  content.reasoning = extractReasoningText(content.message);
}
function upsertToolCall(record, toolCall) {
  markMessageStarted(record);
  if (!toolCall || typeof toolCall !== "object") return;
  const targetId = toolCall.id;
  if (targetId != null) {
    for (const part of record.content.message) {
      if (part.type !== "tool_call" || !Array.isArray(part.tool_calls)) continue;
      const matched = part.tool_calls.find((item) => item.id === targetId);
      if (matched) {
        Object.assign(matched, toolCall);
        return;
      }
    }
  }
  record.content.message.push({ type: "tool_call", tool_calls: [{ ...toolCall }] });
}
function finishToolCall(record, result) {
  markMessageStarted(record);
  if (!result || typeof result !== "object") return;
  const targetId = result.id;
  for (const part of record.content.message) {
    if (part.type !== "tool_call" || !Array.isArray(part.tool_calls)) continue;
    const tool = part.tool_calls.find((item) => item.id === targetId);
    if (tool) {
      tool.result = result.result;
      tool.finished_ts = result.ts || Date.now() / 1e3;
      return;
    }
  }
  record.content.message.push({
    type: "tool_call",
    tool_calls: [
      {
        id: targetId,
        result: result.result,
        finished_ts: result.ts || Date.now() / 1e3
      }
    ]
  });
}
function markMessageStarted(record) {
  record.content.isLoading = false;
}
function hasPlainText(record) {
  return record.content.message.some(
    (part) => part.type === "plain" && typeof part.text === "string" && part.text
  );
}
function payloadText(value) {
  if (typeof value === "string") return value;
  if (value == null) return "";
  if (typeof value === "object") {
    const payload = value;
    if (typeof payload.text === "string") return payload.text;
    if (typeof payload.content === "string") return payload.content;
    if (typeof payload.message === "string") return payload.message;
  }
  return String(value);
}
function parseJsonSafe(value) {
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}
export {
  normalizeMessageParts as A,
  extractReasoningText as B,
  Dt as D,
  Ft as F,
  IPythonToolBlock as I,
  J,
  Ko as K,
  Lt as L,
  Mn as M,
  Ot as O,
  RefNode as R,
  ToolCallItem as T,
  Ut as U,
  Vo as V,
  Xo as X,
  Ye as Y,
  _sfc_main as _,
  Je as a,
  Mo as b,
  ReasoningBlock as c,
  _sfc_main$1 as d,
  ToolCallCard as e,
  ft as f,
  messageBlocks as g,
  he as h,
  displayParts as i,
  useMessages as j,
  ReasoningTimeline as k,
  appendPlain as l,
  mr as m,
  nn as n,
  on as o,
  markMessageStarted as p,
  qt as q,
  payloadText as r,
  hasPlainText as s,
  appendReasoningPart as t,
  ur as u,
  upsertToolCall as v,
  wo as w,
  parseJsonSafe as x,
  yn as y,
  finishToolCall as z
};
