import { az as defineStore } from "./index-C6xMvtNz.js";
function checkUITheme() {
  const theme = localStorage.getItem("uiTheme");
  if (!theme || !["MikuDarkTheme", "MikuLightTheme", "MikuSakuraTheme", "MikuCyberTheme", "NormalTheme", "NormalLightTheme"].includes(theme)) {
    localStorage.setItem("uiTheme", "MikuDarkTheme");
    return "MikuDarkTheme";
  } else return theme;
}
const config = {
  Sidebar_drawer: true,
  Customizer_drawer: false,
  mini_sidebar: false,
  uiTheme: checkUITheme(),
  inputBg: false
};
const useCustomizerStore = defineStore("customizer", {
  state: () => ({
    Sidebar_drawer: config.Sidebar_drawer,
    Customizer_drawer: config.Customizer_drawer,
    mini_sidebar: config.mini_sidebar,
    fontTheme: "Noto Sans SC",
    uiTheme: config.uiTheme,
    inputBg: config.inputBg,
    chatSidebarOpen: false,
    // chat mode mobile sidebar state
    brightness: localStorage.getItem("miku_brightness") || "dark"
  }),
  getters: {},
  actions: {
    SET_SIDEBAR_DRAWER() {
      this.Sidebar_drawer = !this.Sidebar_drawer;
    },
    SET_MINI_SIDEBAR(payload) {
      this.mini_sidebar = payload;
    },
    SET_FONT(payload) {
      this.fontTheme = payload;
    },
    SET_UI_THEME(payload) {
      this.uiTheme = payload;
      localStorage.setItem("uiTheme", payload);
    },
    SET_BRIGHTNESS(payload) {
      this.brightness = payload;
      localStorage.setItem("miku_brightness", payload);
    },
    TOGGLE_CHAT_SIDEBAR() {
      this.chatSidebarOpen = !this.chatSidebarOpen;
    },
    SET_CHAT_SIDEBAR(payload) {
      this.chatSidebarOpen = payload;
    }
  }
});
export {
  useCustomizerStore
};
