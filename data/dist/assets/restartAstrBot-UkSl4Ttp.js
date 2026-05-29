import { B as axios } from "./index-sVuaKD1b.js";
async function getDesktopRuntimeInfo() {
  const bridge = window.astrbotDesktop;
  const hasDesktopRuntimeProbe = !!bridge && typeof bridge.isDesktopRuntime === "function";
  const hasDesktopRestartCapability = !!bridge && typeof bridge.restartBackend === "function" && hasDesktopRuntimeProbe;
  let isDesktopRuntime = !!(bridge == null ? void 0 : bridge.isDesktop);
  if (hasDesktopRuntimeProbe) {
    try {
      isDesktopRuntime = isDesktopRuntime || !!await bridge.isDesktopRuntime();
    } catch (error) {
      console.warn("[desktop-runtime] Failed to detect desktop runtime.", error);
    }
  }
  return {
    bridge,
    hasDesktopRuntimeProbe,
    hasDesktopRestartCapability,
    isDesktopRuntime
  };
}
async function triggerWaiting(waitingRef, initialStartTime) {
  if (!waitingRef) return;
  await waitingRef.check(initialStartTime);
}
async function fetchCurrentStartTime() {
  var _a, _b;
  try {
    const response = await axios.get("/api/stat/start-time", { timeout: 1500 });
    const rawStartTime = (_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.data) == null ? void 0 : _b.start_time;
    const numericStartTime = Number(rawStartTime);
    return Number.isFinite(numericStartTime) ? numericStartTime : null;
  } catch (_error) {
    return null;
  }
}
async function restartAstrBot(waitingRef) {
  var _a, _b;
  const { bridge: desktopBridge, hasDesktopRestartCapability, isDesktopRuntime } = await getDesktopRuntimeInfo();
  if (desktopBridge && hasDesktopRestartCapability && isDesktopRuntime) {
    const authToken = localStorage.getItem("token");
    const initialStartTime = await fetchCurrentStartTime();
    try {
      const restartPromise = desktopBridge.restartBackend(authToken);
      await triggerWaiting(waitingRef, initialStartTime);
      const result = await restartPromise;
      if (!result.ok) {
        (_a = waitingRef == null ? void 0 : waitingRef.stop) == null ? void 0 : _a.call(waitingRef);
        throw new Error(result.reason || "Failed to restart backend.");
      }
    } catch (error) {
      (_b = waitingRef == null ? void 0 : waitingRef.stop) == null ? void 0 : _b.call(waitingRef);
      throw error;
    }
    return;
  }
  await axios.post("/api/stat/restart-core");
  await triggerWaiting(waitingRef);
}
export {
  getDesktopRuntimeInfo as g,
  restartAstrBot as r
};
