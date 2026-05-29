const sidebarItem = [
  {
    title: "core.navigation.welcome",
    icon: "mdi-hand-wave-outline",
    to: "/welcome"
  },
  {
    title: "core.navigation.extension",
    icon: "mdi-puzzle",
    to: "/extension#installed"
  },
  {
    title: "core.navigation.modelConfig",
    icon: "mdi-chip",
    to: "/model-config"
  },
  {
    title: "core.navigation.config",
    icon: "mdi-cog",
    to: "/config#normal",
    children: [
      {
        title: "core.navigation.configTabs.normal",
        icon: "mdi-cog",
        to: "/config#normal"
      },
      {
        title: "core.navigation.configTabs.system",
        icon: "mdi-cog-outline",
        to: "/config#system"
      }
    ]
  },
  {
    title: "core.navigation.knowledgeBase",
    icon: "mdi-book-open-variant",
    to: "/knowledge-base"
  },
  {
    title: "core.navigation.knowledgeConv",
    icon: "mdi-database-eye",
    to: "/knowledge-conv"
  },
  {
    title: "core.navigation.persona",
    icon: "mdi-heart",
    to: "/persona"
  },
  {
    title: "core.navigation.profile",
    icon: "mdi-brain",
    to: "/profile"
  },
  {
    title: "core.navigation.subagent",
    icon: "mdi-account-supervisor",
    to: "/subagent"
  },
  {
    title: "core.navigation.conversation",
    icon: "mdi-message-text",
    to: "/conversation"
  },
  {
    title: "core.navigation.dashboard",
    icon: "mdi-view-dashboard",
    to: "/dashboard/default"
  },
  {
    title: "core.navigation.groups.more",
    icon: "mdi-dots-horizontal",
    children: [
      {
        title: "core.navigation.sessionManagement",
        icon: "mdi-pencil-ruler",
        to: "/session-management"
      },
      {
        title: "core.navigation.cron",
        icon: "mdi-clock-outline",
        to: "/cron"
      },
      {
        title: "core.navigation.console",
        icon: "mdi-console",
        to: "/console"
      },
      {
        title: "core.navigation.trace",
        icon: "mdi-timeline-text-outline",
        to: "/trace"
      }
    ]
  }
];
const STORAGE_KEY = "astrbot_sidebar_customization";
function getSidebarCustomization() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error("Error reading sidebar customization:", error);
    return null;
  }
}
function setSidebarCustomization(config) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (error) {
    console.error("Error saving sidebar customization:", error);
  }
}
function clearSidebarCustomization() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing sidebar customization:", error);
  }
}
function resolveSidebarItems(defaultItems, customization, options = {}) {
  const { cloneItems = false, assembleMoreGroup = false } = options;
  const normalizeKeys = (keys = []) => {
    const list = Array.isArray(keys) ? keys : [];
    const deduped = [];
    const seen = /* @__PURE__ */ new Set();
    list.forEach((key) => {
      if (typeof key !== "string") return;
      if (seen.has(key)) return;
      seen.add(key);
      deduped.push(key);
    });
    return deduped;
  };
  const all = /* @__PURE__ */ new Map();
  const defaultMain = [];
  const defaultMore = [];
  defaultItems.forEach((item) => {
    if (item.children && item.title === "core.navigation.groups.more") {
      item.children.forEach((child) => {
        all.set(child.title, cloneItems ? { ...child } : child);
        defaultMore.push(child.title);
      });
    } else {
      all.set(item.title, cloneItems ? { ...item } : item);
      defaultMain.push(item.title);
    }
  });
  const hasCustomization = Boolean(customization);
  let mainKeys = hasCustomization ? normalizeKeys(customization.mainItems || []) : [...defaultMain];
  let moreKeys = hasCustomization ? normalizeKeys(customization.moreItems || []) : [...defaultMore];
  if (hasCustomization) {
    mainKeys = mainKeys.filter((title) => all.has(title));
    moreKeys = moreKeys.filter((title) => all.has(title));
  }
  if (hasCustomization) {
    const mainSet = new Set(mainKeys);
    moreKeys = moreKeys.filter((title) => !mainSet.has(title));
  }
  const used = hasCustomization ? /* @__PURE__ */ new Set([...mainKeys, ...moreKeys]) : new Set(defaultMain.concat(defaultMore));
  const mainItems = mainKeys.map((title) => all.get(title)).filter(Boolean);
  if (hasCustomization) {
    defaultMain.forEach((title) => {
      if (!used.has(title)) {
        const item = all.get(title);
        if (item) mainItems.push(item);
      }
    });
  }
  const moreItems = moreKeys.map((title) => all.get(title)).filter(Boolean);
  if (hasCustomization) {
    defaultMore.forEach((title) => {
      if (!used.has(title)) {
        const item = all.get(title);
        if (item) moreItems.push(item);
      }
    });
  }
  let merged;
  if (assembleMoreGroup) {
    const children = cloneItems ? moreItems.map((item) => ({ ...item })) : [...moreItems];
    if (children.length > 0) {
      merged = [
        ...mainItems,
        {
          title: "core.navigation.groups.more",
          icon: "mdi-dots-horizontal",
          children
        }
      ];
    } else {
      merged = [...mainItems];
    }
  }
  return {
    mainItems,
    moreItems,
    merged,
    normalizedMainKeys: [...mainKeys],
    normalizedMoreKeys: [...moreKeys]
  };
}
function applySidebarCustomization(defaultItems) {
  const customization = getSidebarCustomization();
  const {
    merged,
    normalizedMainKeys,
    normalizedMoreKeys
  } = resolveSidebarItems(defaultItems, customization, {
    cloneItems: true,
    assembleMoreGroup: true
  });
  if (customization) {
    const rawMainKeys = Array.isArray(customization.mainItems) ? customization.mainItems : [];
    const rawMoreKeys = Array.isArray(customization.moreItems) ? customization.moreItems : [];
    const hasChanged = JSON.stringify(rawMainKeys) !== JSON.stringify(normalizedMainKeys) || JSON.stringify(rawMoreKeys) !== JSON.stringify(normalizedMoreKeys);
    if (hasChanged) {
      setSidebarCustomization({
        mainItems: normalizedMainKeys,
        moreItems: normalizedMoreKeys
      });
    }
  }
  return merged || defaultItems;
}
export {
  sidebarItem as a,
  applySidebarCustomization as b,
  clearSidebarCustomization as c,
  getSidebarCustomization as g,
  resolveSidebarItems as r,
  setSidebarCustomization as s
};
