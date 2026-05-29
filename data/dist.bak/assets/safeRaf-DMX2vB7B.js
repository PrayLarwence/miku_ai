function e(e2) {
  try {
    if ("undefined" != typeof globalThis && "function" == typeof globalThis.requestAnimationFrame) return globalThis.requestAnimationFrame(e2);
  } catch (t) {
  }
  return globalThis.setTimeout(e2, 0);
}
export {
  e
};
