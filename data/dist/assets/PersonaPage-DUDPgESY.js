import { az as defineStore, B as axios, D as defineComponent, _ as _export_sfc, c as createElementBlock, b as createVNode, w as withCtx, ah as VListItemTitle, d as createTextVNode, t as toDisplayString, h as createBlock, l as VIcon, a0 as withModifiers, e as VBtn, T as normalizeClass, U as normalizeStyle, ag as VListItem, S as withDirectives, W as vShow, a as createBaseVNode, F as Fragment, r as renderList, aw as VExpandTransition, C as resolveComponent, o as openBlock, j as VTextField, i as createCommentVNode, aj as VProgressCircular, af as VList, x as VDivider, ae as VMenu, bI as mapActions, bJ as mapState, u as useModuleI18n, s as VCard, a6 as VCardTitle, v as VCardText, an as withKeys, a9 as VCardActions, V as VSpacer, ai as VDialog, bH as VBreadcrumbsItem, bG as VBreadcrumbs, a2 as mergeProps, g as VChip, aK as VForm, aL as VTextarea, a5 as useI18n, ab as VRow, ad as VCol, bK as VSkeletonLoader, bL as VFadeTransition, am as VSnackbar, ao as VContainer } from "./index-BCHR8lhs.js";
import { B as BaseMoveTargetNode, P as PersonaForm } from "./PersonaForm-C9n-kDEn.js";
import { a as askForConfirmation, u as useConfirmDialog } from "./confirmDialog-CGjakbC1.js";
const usePersonaStore = defineStore("persona", {
  state: () => ({
    folderTree: [],
    currentFolderId: null,
    currentFolders: [],
    currentPersonas: [],
    breadcrumbPath: [],
    expandedFolderIds: [],
    // Store expanded folder IDs
    loading: false,
    treeLoading: false
  }),
  getters: {
    // 当前文件夹名称
    currentFolderName() {
      var _a;
      if (this.breadcrumbPath.length === 0) {
        return "根目录";
      }
      return ((_a = this.breadcrumbPath[this.breadcrumbPath.length - 1]) == null ? void 0 : _a.name) || "根目录";
    }
  },
  actions: {
    /**
     * Toggle folder expansion state
     */
    toggleFolderExpansion(folderId) {
      const index = this.expandedFolderIds.indexOf(folderId);
      if (index === -1) {
        this.expandedFolderIds.push(folderId);
      } else {
        this.expandedFolderIds.splice(index, 1);
      }
    },
    /**
     * Set folder expansion state
     */
    setFolderExpansion(folderId, expanded) {
      const index = this.expandedFolderIds.indexOf(folderId);
      if (expanded && index === -1) {
        this.expandedFolderIds.push(folderId);
      } else if (!expanded && index !== -1) {
        this.expandedFolderIds.splice(index, 1);
      }
    },
    /**
     * 加载文件夹树形结构
     */
    async loadFolderTree() {
      this.treeLoading = true;
      try {
        const response = await axios.get("/api/persona/folder/tree");
        if (response.data.status === "ok") {
          this.folderTree = response.data.data || [];
        } else {
          throw new Error(response.data.message || "获取文件夹树失败");
        }
      } finally {
        this.treeLoading = false;
      }
    },
    /**
     * 导航到指定文件夹
     */
    async navigateToFolder(folderId) {
      this.loading = true;
      try {
        this.currentFolderId = folderId;
        const [foldersRes, personasRes] = await Promise.all([
          axios.get("/api/persona/folder/list", {
            params: { parent_id: folderId ?? "" }
          }),
          axios.get("/api/persona/list", {
            params: { folder_id: folderId ?? "" }
          })
        ]);
        if (foldersRes.data.status === "ok") {
          this.currentFolders = foldersRes.data.data || [];
        }
        if (personasRes.data.status === "ok") {
          this.currentPersonas = personasRes.data.data || [];
        }
        this.updateBreadcrumb(folderId);
      } finally {
        this.loading = false;
      }
    },
    /**
     * 更新面包屑路径
     */
    updateBreadcrumb(folderId) {
      if (folderId === null) {
        this.breadcrumbPath = [];
        return;
      }
      const path = [];
      const findPath = (nodes, targetId) => {
        for (const node of nodes) {
          if (node.folder_id === targetId) {
            path.push(node);
            return true;
          }
          if (node.children.length > 0 && findPath(node.children, targetId)) {
            path.unshift(node);
            return true;
          }
        }
        return false;
      };
      findPath(this.folderTree, folderId);
      this.breadcrumbPath = path;
    },
    /**
     * 刷新当前文件夹内容
     */
    async refreshCurrentFolder() {
      await this.navigateToFolder(this.currentFolderId);
    },
    /**
     * 移动 Persona 到文件夹
     */
    async movePersonaToFolder(personaId, targetFolderId) {
      const response = await axios.post("/api/persona/move", {
        persona_id: personaId,
        folder_id: targetFolderId
      });
      if (response.data.status !== "ok") {
        throw new Error(response.data.message || "移动人格失败");
      }
      await Promise.all([
        this.refreshCurrentFolder(),
        this.loadFolderTree()
      ]);
    },
    /**
     * 移动文件夹到另一个文件夹
     */
    async moveFolderToFolder(folderId, targetParentId) {
      const response = await axios.post("/api/persona/folder/update", {
        folder_id: folderId,
        parent_id: targetParentId
      });
      if (response.data.status !== "ok") {
        throw new Error(response.data.message || "移动文件夹失败");
      }
      await Promise.all([
        this.refreshCurrentFolder(),
        this.loadFolderTree()
      ]);
    },
    /**
     * 创建文件夹
     */
    async createFolder(data) {
      const response = await axios.post("/api/persona/folder/create", {
        ...data,
        parent_id: data.parent_id ?? this.currentFolderId
      });
      if (response.data.status !== "ok") {
        throw new Error(response.data.message || "创建文件夹失败");
      }
      await Promise.all([
        this.refreshCurrentFolder(),
        this.loadFolderTree()
      ]);
      return response.data.data.folder;
    },
    /**
     * 更新文件夹
     */
    async updateFolder(data) {
      const response = await axios.post("/api/persona/folder/update", data);
      if (response.data.status !== "ok") {
        throw new Error(response.data.message || "更新文件夹失败");
      }
      await Promise.all([
        this.refreshCurrentFolder(),
        this.loadFolderTree()
      ]);
    },
    /**
     * 删除文件夹
     */
    async deleteFolder(folderId) {
      const response = await axios.post("/api/persona/folder/delete", {
        folder_id: folderId
      });
      if (response.data.status !== "ok") {
        throw new Error(response.data.message || "删除文件夹失败");
      }
      await Promise.all([
        this.refreshCurrentFolder(),
        this.loadFolderTree()
      ]);
    },
    /**
     * 删除 Persona
     */
    async deletePersona(personaId) {
      const response = await axios.post("/api/persona/delete", {
        persona_id: personaId
      });
      if (response.data.status !== "ok") {
        throw new Error(response.data.message || "删除人格失败");
      }
      await this.refreshCurrentFolder();
    },
    /**
     * 批量更新排序
     */
    async reorderItems(items) {
      const response = await axios.post("/api/persona/reorder", { items });
      if (response.data.status !== "ok") {
        throw new Error(response.data.message || "更新排序失败");
      }
      await this.refreshCurrentFolder();
    },
    /**
     * 根据文件夹 ID 查找树节点
     */
    findFolderInTree(folderId) {
      const findNode = (nodes) => {
        for (const node of nodes) {
          if (node.folder_id === folderId) {
            return node;
          }
          if (node.children.length > 0) {
            const found = findNode(node.children);
            if (found) return found;
          }
        }
        return null;
      };
      return findNode(this.folderTree);
    }
  }
});
const _sfc_main$d = defineComponent({
  name: "BaseFolderTreeNode",
  props: {
    folder: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      default: 0
    },
    currentFolderId: {
      type: String,
      default: null
    },
    searchQuery: {
      type: String,
      default: ""
    },
    expandedFolderIds: {
      type: Array,
      default: () => []
    },
    acceptDropTypes: {
      type: Array,
      default: () => []
    }
  },
  emits: ["folder-click", "folder-context-menu", "item-dropped", "toggle-expansion", "set-expansion"],
  data() {
    return {
      isDragOver: false
    };
  },
  computed: {
    hasChildren() {
      return this.folder.children && this.folder.children.length > 0;
    },
    isExpanded() {
      return this.expandedFolderIds.includes(this.folder.folder_id);
    }
  },
  watch: {
    searchQuery: {
      immediate: true,
      handler(newQuery) {
        if (newQuery && this.hasChildren) {
          this.$emit("set-expansion", { folderId: this.folder.folder_id, expanded: true });
        }
      }
    }
  },
  methods: {
    toggleExpand() {
      this.$emit("toggle-expansion", this.folder.folder_id);
    },
    handleContextMenu(event) {
      this.$emit("folder-context-menu", { event, folder: this.folder });
    },
    handleDragOver(event) {
      if (!event.dataTransfer) return;
      event.dataTransfer.dropEffect = "move";
      this.isDragOver = true;
    },
    handleDragLeave() {
      this.isDragOver = false;
    },
    handleDrop(event) {
      this.isDragOver = false;
      if (!event.dataTransfer) return;
      try {
        const data = JSON.parse(event.dataTransfer.getData("application/json"));
        if (this.acceptDropTypes.length === 0 || this.acceptDropTypes.includes(data.type)) {
          this.$emit("item-dropped", {
            item_id: data.id || data.persona_id || data.item_id,
            item_type: data.type,
            target_folder_id: this.folder.folder_id,
            source_data: data
          });
        }
      } catch (e) {
        console.error("Failed to parse drop data:", e);
      }
    }
  }
});
const _hoisted_1$7 = { class: "base-folder-tree-node" };
const _hoisted_2$7 = {
  key: 1,
  class: "expand-placeholder"
};
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseFolderTreeNode = resolveComponent("BaseFolderTreeNode", true);
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    createVNode(VListItem, {
      active: _ctx.currentFolderId === _ctx.folder.folder_id,
      onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.$emit("folder-click", _ctx.folder.folder_id), ["stop"])),
      onContextmenu: withModifiers(_ctx.handleContextMenu, ["prevent"]),
      rounded: "lg",
      style: normalizeStyle({ paddingLeft: `${(_ctx.depth + 1) * 16}px` }),
      class: normalizeClass(["folder-item", { "drag-over": _ctx.isDragOver }]),
      onDragover: withModifiers(_ctx.handleDragOver, ["prevent"]),
      onDragleave: _ctx.handleDragLeave,
      onDrop: withModifiers(_ctx.handleDrop, ["prevent"])
    }, {
      prepend: withCtx(() => [
        _ctx.hasChildren ? (openBlock(), createBlock(VBtn, {
          key: 0,
          icon: "",
          variant: "text",
          size: "x-small",
          onClick: withModifiers(_ctx.toggleExpand, ["stop"]),
          class: "expand-btn"
        }, {
          default: withCtx(() => [
            createVNode(VIcon, { size: "16" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.isExpanded ? "mdi-chevron-down" : "mdi-chevron-right"), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["onClick"])) : (openBlock(), createElementBlock("div", _hoisted_2$7)),
        createVNode(VIcon, {
          color: _ctx.currentFolderId === _ctx.folder.folder_id ? "primary" : ""
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.isExpanded ? "mdi-folder-open" : "mdi-folder"), 1)
          ]),
          _: 1
        }, 8, ["color"])
      ]),
      default: withCtx(() => [
        createVNode(VListItemTitle, { class: "text-truncate" }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.folder.name), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["active", "onContextmenu", "style", "class", "onDragover", "onDragleave", "onDrop"]),
    createVNode(VExpandTransition, null, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.folder.children, (child) => {
            return openBlock(), createBlock(_component_BaseFolderTreeNode, {
              key: child.folder_id,
              folder: child,
              depth: _ctx.depth + 1,
              "current-folder-id": _ctx.currentFolderId,
              "search-query": _ctx.searchQuery,
              "expanded-folder-ids": _ctx.expandedFolderIds,
              "accept-drop-types": _ctx.acceptDropTypes,
              onFolderClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("folder-click", $event)),
              onFolderContextMenu: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("folder-context-menu", $event)),
              onItemDropped: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("item-dropped", $event)),
              onToggleExpansion: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("toggle-expansion", $event)),
              onSetExpansion: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("set-expansion", $event))
            }, null, 8, ["folder", "depth", "current-folder-id", "search-query", "expanded-folder-ids", "accept-drop-types"]);
          }), 128))
        ], 512), [
          [vShow, _ctx.isExpanded && _ctx.hasChildren]
        ])
      ]),
      _: 1
    })
  ]);
}
const BaseFolderTreeNode = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__scopeId", "data-v-c06de609"]]);
const defaultLabels$2 = {
  searchPlaceholder: "搜索文件夹...",
  rootFolder: "根目录",
  noFolders: "暂无文件夹",
  contextMenu: {
    open: "打开",
    rename: "重命名",
    moveTo: "移动到...",
    delete: "删除"
  }
};
const _sfc_main$c = defineComponent({
  name: "BaseFolderTree",
  components: {
    BaseFolderTreeNode
  },
  props: {
    folderTree: {
      type: Array,
      required: true
    },
    currentFolderId: {
      type: String,
      default: null
    },
    expandedFolderIds: {
      type: Array,
      default: () => []
    },
    treeLoading: {
      type: Boolean,
      default: false
    },
    acceptDropTypes: {
      type: Array,
      default: () => []
    },
    labels: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [
    "folder-click",
    "rename-folder",
    "move-folder",
    "delete-folder",
    "item-dropped",
    "toggle-expansion",
    "set-expansion"
  ],
  data() {
    return {
      searchQuery: "",
      isRootDragOver: false,
      contextMenu: {
        show: false,
        target: null,
        folder: null
      }
    };
  },
  computed: {
    mergedLabels() {
      var _a;
      return {
        ...defaultLabels$2,
        ...this.labels,
        contextMenu: {
          ...defaultLabels$2.contextMenu,
          ...((_a = this.labels) == null ? void 0 : _a.contextMenu) || {}
        }
      };
    },
    filteredFolderTree() {
      if (!this.searchQuery) {
        return this.folderTree;
      }
      const query = this.searchQuery.toLowerCase();
      return this.filterTreeBySearch(this.folderTree, query);
    }
  },
  methods: {
    filterTreeBySearch(nodes, query) {
      return nodes.filter((node) => {
        const matches = node.name.toLowerCase().includes(query);
        const childMatches = this.filterTreeBySearch(node.children || [], query);
        return matches || childMatches.length > 0;
      }).map((node) => ({
        ...node,
        children: this.filterTreeBySearch(node.children || [], query)
      }));
    },
    handleFolderClick(folderId) {
      this.$emit("folder-click", folderId);
    },
    handleRootDragOver(event) {
      if (!event.dataTransfer) return;
      event.dataTransfer.dropEffect = "move";
      this.isRootDragOver = true;
    },
    handleRootDragLeave() {
      this.isRootDragOver = false;
    },
    handleRootDrop(event) {
      this.isRootDragOver = false;
      if (!event.dataTransfer) return;
      try {
        const data = JSON.parse(event.dataTransfer.getData("application/json"));
        if (this.acceptDropTypes.length === 0 || this.acceptDropTypes.includes(data.type)) {
          this.$emit("item-dropped", {
            item_id: data.id || data.persona_id || data.item_id,
            item_type: data.type,
            target_folder_id: null,
            source_data: data
          });
        }
      } catch (e) {
        console.error("Failed to parse drop data:", e);
      }
    },
    handleContextMenu(eventData) {
      const { event, folder } = eventData;
      this.contextMenu.target = [event.clientX, event.clientY];
      this.contextMenu.folder = folder;
      this.contextMenu.show = true;
    },
    openFolder() {
      if (this.contextMenu.folder) {
        this.$emit("folder-click", this.contextMenu.folder.folder_id);
      }
    }
  }
});
const _hoisted_1$6 = { class: "base-folder-tree" };
const _hoisted_2$6 = {
  key: 1,
  class: "text-center pa-4"
};
const _hoisted_3$5 = {
  key: 2,
  class: "text-center pa-4 text-medium-emphasis"
};
const _hoisted_4$2 = { class: "text-body-2" };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseFolderTreeNode = resolveComponent("BaseFolderTreeNode");
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    createVNode(VTextField, {
      modelValue: _ctx.searchQuery,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.searchQuery = $event),
      placeholder: _ctx.labels.searchPlaceholder,
      "prepend-inner-icon": "mdi-magnify",
      variant: "outlined",
      density: "compact",
      "hide-details": "",
      clearable: "",
      class: "mb-3"
    }, null, 8, ["modelValue", "placeholder"]),
    createVNode(VList, {
      density: "compact",
      nav: "",
      class: "tree-list",
      "bg-color": "transparent"
    }, {
      default: withCtx(() => [
        createVNode(VListItem, {
          active: _ctx.currentFolderId === null,
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handleFolderClick(null)),
          rounded: "lg",
          class: normalizeClass(["root-item", { "drag-over": _ctx.isRootDragOver }]),
          onDragover: withModifiers(_ctx.handleRootDragOver, ["prevent"]),
          onDragleave: _ctx.handleRootDragLeave,
          onDrop: withModifiers(_ctx.handleRootDrop, ["prevent"])
        }, {
          prepend: withCtx(() => [
            createVNode(VIcon, null, {
              default: withCtx(() => [
                createTextVNode("mdi-home")
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createVNode(VListItemTitle, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.labels.rootFolder), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["active", "class", "onDragover", "onDragleave", "onDrop"]),
        !_ctx.treeLoading ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.filteredFolderTree, (folder) => {
          return openBlock(), createBlock(_component_BaseFolderTreeNode, {
            key: folder.folder_id,
            folder,
            depth: 0,
            "current-folder-id": _ctx.currentFolderId,
            "search-query": _ctx.searchQuery,
            "expanded-folder-ids": _ctx.expandedFolderIds,
            "accept-drop-types": _ctx.acceptDropTypes,
            onFolderClick: _ctx.handleFolderClick,
            onFolderContextMenu: _ctx.handleContextMenu,
            onItemDropped: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("item-dropped", $event)),
            onToggleExpansion: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("toggle-expansion", $event)),
            onSetExpansion: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("set-expansion", $event))
          }, null, 8, ["folder", "current-folder-id", "search-query", "expanded-folder-ids", "accept-drop-types", "onFolderClick", "onFolderContextMenu"]);
        }), 128)) : createCommentVNode("", true),
        _ctx.treeLoading ? (openBlock(), createElementBlock("div", _hoisted_2$6, [
          createVNode(VProgressCircular, {
            indeterminate: "",
            size: "24"
          })
        ])) : createCommentVNode("", true),
        !_ctx.treeLoading && _ctx.folderTree.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_3$5, [
          createVNode(VIcon, {
            size: "32",
            class: "mb-2"
          }, {
            default: withCtx(() => [
              createTextVNode("mdi-folder-outline")
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_4$2, toDisplayString(_ctx.labels.noFolders), 1)
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    createVNode(VMenu, {
      modelValue: _ctx.contextMenu.show,
      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.contextMenu.show = $event),
      target: _ctx.contextMenu.target,
      location: "end",
      "close-on-content-click": true
    }, {
      default: withCtx(() => [
        createVNode(VList, { density: "compact" }, {
          default: withCtx(() => [
            createVNode(VListItem, { onClick: _ctx.openFolder }, {
              prepend: withCtx(() => [
                createVNode(VIcon, { size: "small" }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-folder-open")
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(VListItemTitle, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.mergedLabels.contextMenu.open), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["onClick"]),
            createVNode(VListItem, {
              onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("rename-folder", _ctx.contextMenu.folder))
            }, {
              prepend: withCtx(() => [
                createVNode(VIcon, { size: "small" }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-pencil")
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(VListItemTitle, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.mergedLabels.contextMenu.rename), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(VListItem, {
              onClick: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("move-folder", _ctx.contextMenu.folder))
            }, {
              prepend: withCtx(() => [
                createVNode(VIcon, { size: "small" }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-folder-move")
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(VListItemTitle, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.mergedLabels.contextMenu.moveTo), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(VDivider, { class: "my-1" }),
            createVNode(VListItem, {
              onClick: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("delete-folder", _ctx.contextMenu.folder)),
              class: "text-error"
            }, {
              prepend: withCtx(() => [
                createVNode(VIcon, {
                  size: "small",
                  color: "error"
                }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-delete")
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(VListItemTitle, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.mergedLabels.contextMenu.delete), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "target"])
  ]);
}
const BaseFolderTree = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__scopeId", "data-v-f32175b1"]]);
const _sfc_main$b = defineComponent({
  name: "FolderTree",
  components: {
    BaseFolderTree
  },
  emits: ["move-folder", "error", "success", "persona-dropped"],
  setup() {
    const { tm } = useModuleI18n("features/persona");
    return { tm };
  },
  data() {
    return {
      searchQuery: "",
      isRootDragOver: false,
      contextMenu: {
        show: false,
        target: null,
        folder: null
      },
      renameDialog: {
        show: false,
        folder: null,
        name: "",
        loading: false
      },
      deleteDialog: {
        show: false,
        folder: null,
        loading: false
      }
    };
  },
  computed: {
    ...mapState(usePersonaStore, ["folderTree", "currentFolderId", "treeLoading", "expandedFolderIds"]),
    filteredFolderTree() {
      if (!this.searchQuery) {
        return this.folderTree;
      }
      const query = this.searchQuery.toLowerCase();
      return this.filterTreeBySearch(this.folderTree, query);
    }
  },
  methods: {
    ...mapActions(usePersonaStore, ["navigateToFolder", "updateFolder", "deleteFolder", "toggleFolderExpansion", "setFolderExpansion"]),
    filterTreeBySearch(nodes, query) {
      return nodes.filter((node) => {
        const matches = node.name.toLowerCase().includes(query);
        const childMatches = this.filterTreeBySearch(node.children || [], query);
        return matches || childMatches.length > 0;
      }).map((node) => ({
        ...node,
        children: this.filterTreeBySearch(node.children || [], query)
      }));
    },
    handleFolderClick(folderId) {
      this.navigateToFolder(folderId);
    },
    // rename event from BaseFolderTree
    onRenameFolder(folder) {
      this.renameDialog.folder = folder;
      this.renameDialog.name = folder.name;
      this.renameDialog.show = true;
    },
    // delete event from BaseFolderTree
    onDeleteFolder(folder) {
      this.deleteDialog.folder = folder;
      this.deleteDialog.show = true;
    },
    onItemDropped(data) {
      if (data.item_type === "persona") {
        this.$emit("persona-dropped", {
          persona_id: data.item_id,
          target_folder_id: data.target_folder_id
        });
      }
    },
    async submitRename() {
      if (!this.renameDialog.name || !this.renameDialog.folder) return;
      this.renameDialog.loading = true;
      try {
        await this.updateFolder({
          folder_id: this.renameDialog.folder.folder_id,
          name: this.renameDialog.name
        });
        this.$emit("success", this.tm("folder.messages.renameSuccess"));
        this.renameDialog.show = false;
      } catch (error) {
        this.$emit("error", error.message || this.tm("folder.messages.renameError"));
      } finally {
        this.renameDialog.loading = false;
      }
    },
    async submitDelete() {
      if (!this.deleteDialog.folder) return;
      this.deleteDialog.loading = true;
      try {
        await this.deleteFolder(this.deleteDialog.folder.folder_id);
        this.$emit("success", this.tm("folder.messages.deleteSuccess"));
        this.deleteDialog.show = false;
      } catch (error) {
        this.$emit("error", error.message || this.tm("folder.messages.deleteError"));
      } finally {
        this.deleteDialog.loading = false;
      }
    }
  }
});
const _hoisted_1$5 = { class: "folder-tree" };
const _hoisted_2$5 = { class: "text-warning mt-2" };
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseFolderTree = resolveComponent("BaseFolderTree");
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createVNode(_component_BaseFolderTree, {
      "folder-tree": _ctx.folderTree,
      "current-folder-id": _ctx.currentFolderId,
      "expanded-folder-ids": _ctx.expandedFolderIds,
      "tree-loading": _ctx.treeLoading,
      "accept-drop-types": ["persona"],
      labels: {
        searchPlaceholder: _ctx.tm("folder.searchPlaceholder"),
        rootFolder: _ctx.tm("folder.rootFolder"),
        noFolders: _ctx.tm("folder.noFolders"),
        contextMenu: {
          open: _ctx.tm("folder.contextMenu.open"),
          rename: _ctx.tm("folder.contextMenu.rename"),
          moveTo: _ctx.tm("folder.contextMenu.moveTo"),
          delete: _ctx.tm("folder.contextMenu.delete")
        }
      },
      onFolderClick: _ctx.handleFolderClick,
      onRenameFolder: _ctx.onRenameFolder,
      onMoveFolder: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("move-folder", $event)),
      onDeleteFolder: _ctx.onDeleteFolder,
      onItemDropped: _ctx.onItemDropped,
      onToggleExpansion: _ctx.toggleFolderExpansion,
      onSetExpansion: _ctx.setFolderExpansion
    }, null, 8, ["folder-tree", "current-folder-id", "expanded-folder-ids", "tree-loading", "labels", "onFolderClick", "onRenameFolder", "onDeleteFolder", "onItemDropped", "onToggleExpansion", "onSetExpansion"]),
    createVNode(VDialog, {
      modelValue: _ctx.renameDialog.show,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.renameDialog.show = $event),
      "max-width": "400px",
      persistent: ""
    }, {
      default: withCtx(() => [
        createVNode(VCard, null, {
          default: withCtx(() => [
            createVNode(VCardTitle, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.tm("folder.renameDialog.title")), 1)
              ]),
              _: 1
            }),
            createVNode(VCardText, null, {
              default: withCtx(() => [
                createVNode(VTextField, {
                  modelValue: _ctx.renameDialog.name,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.renameDialog.name = $event),
                  label: _ctx.tm("folder.form.name"),
                  rules: [(v) => !!v || _ctx.tm("folder.validation.nameRequired")],
                  variant: "outlined",
                  density: "comfortable",
                  autofocus: "",
                  onKeyup: withKeys(_ctx.submitRename, ["enter"])
                }, null, 8, ["modelValue", "label", "rules", "onKeyup"])
              ]),
              _: 1
            }),
            createVNode(VCardActions, null, {
              default: withCtx(() => [
                createVNode(VSpacer),
                createVNode(VBtn, {
                  variant: "text",
                  onClick: _cache[2] || (_cache[2] = ($event) => _ctx.renameDialog.show = false)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.tm("buttons.cancel")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VBtn, {
                  color: "primary",
                  variant: "flat",
                  onClick: _ctx.submitRename,
                  loading: _ctx.renameDialog.loading,
                  disabled: !_ctx.renameDialog.name
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.tm("buttons.save")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick", "loading", "disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(VDialog, {
      modelValue: _ctx.deleteDialog.show,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.deleteDialog.show = $event),
      "max-width": "450px"
    }, {
      default: withCtx(() => [
        createVNode(VCard, null, {
          default: withCtx(() => [
            createVNode(VCardTitle, { class: "text-error" }, {
              default: withCtx(() => [
                createVNode(VIcon, {
                  class: "mr-2",
                  color: "error"
                }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-alert")
                  ]),
                  _: 1
                }),
                createTextVNode(" " + toDisplayString(_ctx.tm("folder.deleteDialog.title")), 1)
              ]),
              _: 1
            }),
            createVNode(VCardText, null, {
              default: withCtx(() => {
                var _a;
                return [
                  createBaseVNode("p", null, toDisplayString(_ctx.tm("folder.deleteDialog.message", { name: ((_a = _ctx.deleteDialog.folder) == null ? void 0 : _a.name) ?? "" })), 1),
                  createBaseVNode("p", _hoisted_2$5, [
                    createVNode(VIcon, {
                      size: "small",
                      class: "mr-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-information")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" " + toDisplayString(_ctx.tm("folder.deleteDialog.warning")), 1)
                  ])
                ];
              }),
              _: 1
            }),
            createVNode(VCardActions, null, {
              default: withCtx(() => [
                createVNode(VSpacer),
                createVNode(VBtn, {
                  variant: "text",
                  onClick: _cache[4] || (_cache[4] = ($event) => _ctx.deleteDialog.show = false)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.tm("buttons.cancel")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VBtn, {
                  color: "error",
                  variant: "flat",
                  onClick: _ctx.submitDelete,
                  loading: _ctx.deleteDialog.loading
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.tm("buttons.delete")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick", "loading"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"])
  ]);
}
const FolderTree = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__scopeId", "data-v-e9198516"]]);
const _sfc_main$a = defineComponent({
  name: "BaseFolderBreadcrumb",
  props: {
    breadcrumbPath: {
      type: Array,
      required: true
    },
    currentFolderId: {
      type: String,
      default: null
    },
    rootFolderName: {
      type: String,
      default: "根目录"
    }
  },
  emits: ["navigate"],
  computed: {
    computedItems() {
      const items = [
        {
          title: this.rootFolderName,
          folderId: null,
          disabled: this.currentFolderId === null,
          isRoot: true
        }
      ];
      this.breadcrumbPath.forEach((folder, index) => {
        items.push({
          title: folder.name,
          folderId: folder.folder_id,
          disabled: index === this.breadcrumbPath.length - 1,
          isRoot: false
        });
      });
      return items;
    }
  },
  methods: {
    handleClick(folderId) {
      this.$emit("navigate", folderId);
    }
  }
});
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VBreadcrumbs, {
    items: _ctx.computedItems,
    class: "base-folder-breadcrumb pa-0"
  }, {
    prepend: withCtx(() => [
      createVNode(VIcon, {
        size: "small",
        class: "mr-1"
      }, {
        default: withCtx(() => [
          createTextVNode("mdi-folder-outline")
        ]),
        _: 1
      })
    ]),
    item: withCtx(({ item }) => [
      createVNode(VBreadcrumbsItem, {
        disabled: item.disabled,
        onClick: ($event) => !item.disabled && _ctx.handleClick(item.folderId),
        class: normalizeClass({ "breadcrumb-link": !item.disabled })
      }, {
        default: withCtx(() => [
          item.isRoot ? (openBlock(), createBlock(VIcon, {
            key: 0,
            size: "small",
            class: "mr-1"
          }, {
            default: withCtx(() => [
              createTextVNode("mdi-home")
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(item.title), 1)
        ]),
        _: 2
      }, 1032, ["disabled", "onClick", "class"])
    ]),
    divider: withCtx(() => [
      createVNode(VIcon, { size: "small" }, {
        default: withCtx(() => [
          createTextVNode("mdi-chevron-right")
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["items"]);
}
const BaseFolderBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__scopeId", "data-v-5d965974"]]);
const _sfc_main$9 = defineComponent({
  name: "FolderBreadcrumb",
  components: { BaseFolderBreadcrumb },
  setup() {
    const { tm } = useModuleI18n("features/persona");
    return { tm };
  },
  computed: {
    ...mapState(usePersonaStore, ["breadcrumbPath", "currentFolderId"]),
    rootName() {
      return this.tm("folder.rootFolder");
    }
  },
  methods: {
    ...mapActions(usePersonaStore, ["navigateToFolder"]),
    handleClick(folderId) {
      this.navigateToFolder(folderId);
    }
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseFolderBreadcrumb = resolveComponent("BaseFolderBreadcrumb");
  return openBlock(), createBlock(_component_BaseFolderBreadcrumb, {
    "breadcrumb-path": _ctx.breadcrumbPath,
    "current-folder-id": _ctx.currentFolderId,
    "root-folder-name": _ctx.rootName,
    onNavigate: _ctx.handleClick,
    labels: { rootFolder: _ctx.tm("folder.rootFolder") },
    class: "folder-breadcrumb pa-0"
  }, null, 8, ["breadcrumb-path", "current-folder-id", "root-folder-name", "onNavigate", "labels"]);
}
const FolderBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-3a9b2bc9"]]);
const defaultLabels$1 = {
  open: "打开",
  rename: "重命名",
  moveTo: "移动到...",
  delete: "删除"
};
const _sfc_main$8 = defineComponent({
  name: "BaseFolderCard",
  props: {
    folder: {
      type: Object,
      required: true
    },
    acceptDropTypes: {
      type: Array,
      default: () => []
    },
    labels: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["click", "contextmenu", "open", "rename", "move", "delete", "item-dropped"],
  data() {
    return {
      isDragOver: false
    };
  },
  computed: {
    mergedLabels() {
      return { ...defaultLabels$1, ...this.labels };
    }
  },
  methods: {
    handleDragOver(event) {
      if (!event.dataTransfer) return;
      event.dataTransfer.dropEffect = "move";
      this.isDragOver = true;
    },
    handleDragLeave() {
      this.isDragOver = false;
    },
    handleDrop(event) {
      this.isDragOver = false;
      if (!event.dataTransfer) return;
      try {
        const data = JSON.parse(event.dataTransfer.getData("application/json"));
        if (this.acceptDropTypes.length === 0 || this.acceptDropTypes.includes(data.type)) {
          this.$emit("item-dropped", {
            item_id: data.id || data.persona_id || data.item_id,
            item_type: data.type,
            target_folder_id: this.folder.folder_id,
            source_data: data
          });
        }
      } catch (e) {
        console.error("Failed to parse drop data:", e);
      }
    }
  }
});
const _hoisted_1$4 = { class: "folder-info flex-grow-1 overflow-hidden" };
const _hoisted_2$4 = { class: "text-subtitle-1 font-weight-medium text-truncate" };
const _hoisted_3$4 = {
  key: 0,
  class: "text-body-2 text-medium-emphasis text-truncate"
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VCard, {
    class: normalizeClass(["base-folder-card", { "drag-over": _ctx.isDragOver }]),
    rounded: "lg",
    onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("click")),
    onContextmenu: _cache[6] || (_cache[6] = withModifiers(($event) => _ctx.$emit("contextmenu", $event), ["prevent"])),
    elevation: "0",
    onDragover: withModifiers(_ctx.handleDragOver, ["prevent"]),
    onDragleave: _ctx.handleDragLeave,
    onDrop: withModifiers(_ctx.handleDrop, ["prevent"])
  }, {
    default: withCtx(() => [
      createVNode(VCardText, { class: "d-flex align-center pa-3" }, {
        default: withCtx(() => [
          createVNode(VIcon, {
            size: "40",
            color: "amber-darken-2",
            class: "mr-3"
          }, {
            default: withCtx(() => [
              createTextVNode("mdi-folder")
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_1$4, [
            createBaseVNode("div", _hoisted_2$4, toDisplayString(_ctx.folder.name), 1),
            _ctx.folder.description ? (openBlock(), createElementBlock("div", _hoisted_3$4, toDisplayString(_ctx.folder.description), 1)) : createCommentVNode("", true)
          ]),
          createVNode(VMenu, { "offset-y": "" }, {
            activator: withCtx(({ props }) => [
              createVNode(VBtn, mergeProps({
                icon: "mdi-dots-vertical",
                variant: "text",
                size: "small"
              }, props, {
                onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                }, ["stop"]))
              }), null, 16)
            ]),
            default: withCtx(() => [
              createVNode(VList, { density: "compact" }, {
                default: withCtx(() => [
                  createVNode(VListItem, {
                    onClick: _cache[1] || (_cache[1] = withModifiers(($event) => _ctx.$emit("open"), ["stop"]))
                  }, {
                    prepend: withCtx(() => [
                      createVNode(VIcon, { size: "small" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-folder-open")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.mergedLabels.open), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VListItem, {
                    onClick: _cache[2] || (_cache[2] = withModifiers(($event) => _ctx.$emit("rename"), ["stop"]))
                  }, {
                    prepend: withCtx(() => [
                      createVNode(VIcon, { size: "small" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-pencil")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.mergedLabels.rename), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VListItem, {
                    onClick: _cache[3] || (_cache[3] = withModifiers(($event) => _ctx.$emit("move"), ["stop"]))
                  }, {
                    prepend: withCtx(() => [
                      createVNode(VIcon, { size: "small" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-folder-move")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.mergedLabels.moveTo), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider, { class: "my-1" }),
                  createVNode(VListItem, {
                    onClick: _cache[4] || (_cache[4] = withModifiers(($event) => _ctx.$emit("delete"), ["stop"])),
                    class: "text-error"
                  }, {
                    prepend: withCtx(() => [
                      createVNode(VIcon, {
                        size: "small",
                        color: "error"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-delete")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.mergedLabels.delete), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["class", "onDragover", "onDragleave", "onDrop"]);
}
const BaseFolderCard = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-451788ba"]]);
const _sfc_main$7 = defineComponent({
  name: "FolderCard",
  components: { BaseFolderCard },
  props: {
    folder: {
      type: Object,
      required: true
    }
  },
  emits: ["click", "contextmenu", "open", "rename", "move", "delete", "persona-dropped"],
  setup() {
    const { tm } = useModuleI18n("features/persona");
    return { tm };
  },
  methods: {
    onItemDropped(data) {
      if (data.item_type === "persona") {
        this.$emit("persona-dropped", {
          persona_id: data.item_id,
          target_folder_id: data.target_folder_id ?? this.folder.folder_id
        });
      }
    }
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseFolderCard = resolveComponent("BaseFolderCard");
  return openBlock(), createBlock(_component_BaseFolderCard, {
    folder: _ctx.folder,
    "accept-drop-types": ["persona"],
    labels: {
      open: _ctx.tm("folder.contextMenu.open"),
      rename: _ctx.tm("folder.contextMenu.rename"),
      moveTo: _ctx.tm("folder.contextMenu.moveTo"),
      delete: _ctx.tm("folder.contextMenu.delete")
    },
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click")),
    onContextmenu: _cache[1] || (_cache[1] = withModifiers(($event) => _ctx.$emit("contextmenu", $event), ["prevent"])),
    onOpen: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("open")),
    onRename: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("rename")),
    onMove: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("move")),
    onDelete: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("delete")),
    onItemDropped: _ctx.onItemDropped
  }, null, 8, ["folder", "labels", "onItemDropped"]);
}
const FolderCard = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-37373d8d"]]);
const _sfc_main$6 = defineComponent({
  name: "PersonaCard",
  props: {
    persona: {
      type: Object,
      required: true
    }
  },
  emits: ["view", "edit", "move", "delete"],
  setup() {
    const { tm } = useModuleI18n("features/persona");
    return { tm };
  },
  data() {
    return {
      isDragging: false
    };
  },
  methods: {
    handleDragStart(event) {
      this.isDragging = true;
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("application/json", JSON.stringify({
          type: "persona",
          persona_id: this.persona.persona_id,
          persona: this.persona
        }));
        const dragPreview = this.$refs.dragPreview;
        if (dragPreview) {
          event.dataTransfer.setDragImage(dragPreview, 15, 15);
        }
      }
    },
    handleDragEnd() {
      this.isDragging = false;
    },
    truncateText(text, maxLength) {
      if (!text) return "";
      return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    },
    formatDate(dateString) {
      if (!dateString) return "";
      return new Date(dateString).toLocaleString();
    }
  }
});
const _hoisted_1$3 = { class: "text-truncate ml-2" };
const _hoisted_2$3 = { class: "system-prompt-preview" };
const _hoisted_3$3 = { class: "mt-3 d-flex flex-wrap ga-1" };
const _hoisted_4$1 = { class: "mt-3 text-caption text-medium-emphasis" };
const _hoisted_5$1 = {
  ref: "dragPreview",
  class: "drag-preview"
};
const _hoisted_6$1 = { class: "text-subtitle-2" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(VCard, {
      class: normalizeClass(["persona-card", { "dragging": _ctx.isDragging }]),
      rounded: "lg",
      onClick: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("view")),
      elevation: "0",
      draggable: "true",
      onDragstart: _ctx.handleDragStart,
      onDragend: _ctx.handleDragEnd
    }, {
      default: withCtx(() => [
        createVNode(VCardTitle, { class: "d-flex justify-space-between align-center" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$3, toDisplayString(_ctx.persona.persona_id), 1),
            createVNode(VMenu, { "offset-y": "" }, {
              activator: withCtx(({ props }) => [
                createVNode(VBtn, mergeProps({
                  icon: "mdi-dots-vertical",
                  variant: "text",
                  size: "small"
                }, props, {
                  onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                  }, ["stop"]))
                }), null, 16)
              ]),
              default: withCtx(() => [
                createVNode(VList, { density: "compact" }, {
                  default: withCtx(() => [
                    createVNode(VListItem, {
                      onClick: _cache[1] || (_cache[1] = withModifiers(($event) => _ctx.$emit("edit"), ["stop"]))
                    }, {
                      prepend: withCtx(() => [
                        createVNode(VIcon, { size: "small" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-pencil")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(VListItemTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.tm("buttons.edit")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VListItem, {
                      onClick: _cache[2] || (_cache[2] = withModifiers(($event) => _ctx.$emit("move"), ["stop"]))
                    }, {
                      prepend: withCtx(() => [
                        createVNode(VIcon, { size: "small" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-folder-move")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(VListItemTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.tm("persona.contextMenu.moveTo")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider, { class: "my-1" }),
                    createVNode(VListItem, {
                      onClick: _cache[3] || (_cache[3] = withModifiers(($event) => _ctx.$emit("delete"), ["stop"])),
                      class: "text-error"
                    }, {
                      prepend: withCtx(() => [
                        createVNode(VIcon, {
                          size: "small",
                          color: "error"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-delete")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(VListItemTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.tm("buttons.delete")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(VCardText, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$3, toDisplayString(_ctx.truncateText(_ctx.persona.system_prompt, 100)), 1),
            createBaseVNode("div", _hoisted_3$3, [
              _ctx.persona.begin_dialogs && _ctx.persona.begin_dialogs.length > 0 ? (openBlock(), createBlock(VChip, {
                key: 0,
                size: "small",
                color: "secondary",
                variant: "tonal",
                "prepend-icon": "mdi-chat"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.tm("labels.presetDialogs", { count: _ctx.persona.begin_dialogs.length / 2 })), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              _ctx.persona.tools === null ? (openBlock(), createBlock(VChip, {
                key: 1,
                size: "small",
                color: "success",
                variant: "tonal",
                "prepend-icon": "mdi-tools"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.tm("form.allToolsAvailable")), 1)
                ]),
                _: 1
              })) : _ctx.persona.tools && _ctx.persona.tools.length > 0 ? (openBlock(), createBlock(VChip, {
                key: 2,
                size: "small",
                color: "primary",
                variant: "tonal",
                "prepend-icon": "mdi-tools"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.persona.tools.length) + " " + toDisplayString(_ctx.tm("persona.toolsCount")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              _ctx.persona.skills === null ? (openBlock(), createBlock(VChip, {
                key: 3,
                size: "small",
                color: "success",
                variant: "tonal",
                "prepend-icon": "mdi-lightning-bolt"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.tm("form.allSkillsAvailable")), 1)
                ]),
                _: 1
              })) : _ctx.persona.skills && _ctx.persona.skills.length > 0 ? (openBlock(), createBlock(VChip, {
                key: 4,
                size: "small",
                color: "primary",
                variant: "tonal",
                "prepend-icon": "mdi-lightning-bolt"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.persona.skills.length) + " " + toDisplayString(_ctx.tm("persona.skillsCount")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_4$1, toDisplayString(_ctx.tm("labels.createdAt")) + ": " + toDisplayString(_ctx.formatDate(_ctx.persona.created_at)), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class", "onDragstart", "onDragend"]),
    createBaseVNode("div", _hoisted_5$1, [
      createVNode(VIcon, {
        size: "small",
        class: "mr-2"
      }, {
        default: withCtx(() => [
          createTextVNode("mdi-account")
        ]),
        _: 1
      }),
      createBaseVNode("span", _hoisted_6$1, toDisplayString(_ctx.persona.persona_id), 1)
    ], 512)
  ], 64);
}
const PersonaCard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-56fea580"]]);
const defaultLabels = {
  title: "创建文件夹",
  nameLabel: "名称",
  descriptionLabel: "描述",
  nameRequired: "请输入文件夹名称",
  cancelButton: "取消",
  createButton: "创建"
};
const _sfc_main$5 = defineComponent({
  name: "BaseCreateFolderDialog",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    parentFolderId: {
      type: String,
      default: null
    },
    labels: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "create"],
  data() {
    return {
      formValid: false,
      loading: false,
      formData: {
        name: "",
        description: ""
      }
    };
  },
  computed: {
    showDialog: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    },
    mergedLabels() {
      return { ...defaultLabels, ...this.labels };
    }
  },
  watch: {
    modelValue(newValue) {
      if (newValue) {
        this.resetForm();
      }
    }
  },
  methods: {
    resetForm() {
      this.formData = {
        name: "",
        description: ""
      };
      if (this.$refs.form) {
        this.$refs.form.resetValidation();
      }
    },
    closeDialog() {
      this.showDialog = false;
    },
    async submitForm() {
      if (!this.formValid) return;
      const data = {
        name: this.formData.name,
        description: this.formData.description || void 0,
        parent_id: this.parentFolderId
      };
      this.$emit("create", data);
    },
    setLoading(value) {
      this.loading = value;
    }
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VDialog, {
    modelValue: _ctx.showDialog,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.showDialog = $event),
    "max-width": "450px"
  }, {
    default: withCtx(() => [
      createVNode(VCard, null, {
        default: withCtx(() => [
          createVNode(VCardTitle, null, {
            default: withCtx(() => [
              createVNode(VIcon, { class: "mr-2" }, {
                default: withCtx(() => [
                  createTextVNode("mdi-folder-plus")
                ]),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(_ctx.labels.title), 1)
            ]),
            _: 1
          }),
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VForm, {
                ref: "form",
                modelValue: _ctx.formValid,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.formValid = $event)
              }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    modelValue: _ctx.formData.name,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.formData.name = $event),
                    label: _ctx.mergedLabels.nameLabel,
                    rules: [(v) => !!v || _ctx.mergedLabels.nameRequired],
                    variant: "outlined",
                    density: "comfortable",
                    autofocus: "",
                    class: "mb-3"
                  }, null, 8, ["modelValue", "label", "rules"]),
                  createVNode(VTextarea, {
                    modelValue: _ctx.formData.description,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.formData.description = $event),
                    label: _ctx.labels.descriptionLabel,
                    variant: "outlined",
                    rows: "3",
                    density: "comfortable",
                    "hide-details": ""
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(VCardActions, null, {
            default: withCtx(() => [
              createVNode(VSpacer),
              createVNode(VBtn, {
                variant: "text",
                onClick: _ctx.closeDialog
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.labels.cancelButton), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(VBtn, {
                color: "primary",
                variant: "flat",
                onClick: _ctx.submitForm,
                loading: _ctx.loading,
                disabled: !_ctx.formValid
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.labels.createButton), 1)
                ]),
                _: 1
              }, 8, ["onClick", "loading", "disabled"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
const BaseCreateFolderDialog = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = defineComponent({
  name: "CreateFolderDialog",
  components: {
    BaseCreateFolderDialog
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    parentFolderId: {
      type: String,
      default: null
    }
  },
  emits: ["update:modelValue", "created", "error"],
  setup() {
    const { tm } = useModuleI18n("features/persona");
    return { tm };
  },
  computed: {
    showDialog: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    },
    labels() {
      return {
        title: this.tm("folder.createDialog.title"),
        nameLabel: this.tm("folder.form.name"),
        descriptionLabel: this.tm("folder.form.description"),
        nameRequired: this.tm("folder.validation.nameRequired"),
        cancelButton: this.tm("buttons.cancel"),
        createButton: this.tm("folder.createDialog.createButton")
      };
    }
  },
  methods: {
    ...mapActions(usePersonaStore, ["createFolder"]),
    async handleCreate(data) {
      const baseDialog = this.$refs.baseDialog;
      baseDialog.setLoading(true);
      try {
        await this.createFolder({
          name: data.name,
          description: data.description,
          parent_id: data.parent_id
        });
        this.$emit("created", this.tm("folder.messages.createSuccess"));
        this.showDialog = false;
      } catch (error) {
        this.$emit("error", error.message || this.tm("folder.messages.createError"));
      } finally {
        baseDialog.setLoading(false);
      }
    }
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseCreateFolderDialog = resolveComponent("BaseCreateFolderDialog");
  return openBlock(), createBlock(_component_BaseCreateFolderDialog, {
    modelValue: _ctx.showDialog,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.showDialog = $event),
    "parent-folder-id": _ctx.parentFolderId,
    labels: _ctx.labels,
    onCreate: _ctx.handleCreate,
    ref: "baseDialog"
  }, null, 8, ["modelValue", "parent-folder-id", "labels", "onCreate"]);
}
const CreateFolderDialog = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = defineComponent({
  name: "MoveTargetNode",
  components: {
    BaseMoveTargetNode
  },
  props: {
    folder: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      default: 0
    },
    selectedFolderId: {
      type: String,
      default: null
    },
    disabledFolderIds: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select"]
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseMoveTargetNode = resolveComponent("BaseMoveTargetNode");
  return openBlock(), createBlock(_component_BaseMoveTargetNode, {
    folder: _ctx.folder,
    depth: _ctx.depth,
    "selected-folder-id": _ctx.selectedFolderId,
    "disabled-folder-ids": _ctx.disabledFolderIds,
    onSelect: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("select", $event))
  }, null, 8, ["folder", "depth", "selected-folder-id", "disabled-folder-ids"]);
}
const MoveTargetNode = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
function collectFolderAndChildrenIds(folderTree, folderId) {
  const ids = [folderId];
  const collectChildIds = (nodes) => {
    for (const node of nodes) {
      if (node.folder_id === folderId) {
        const collectAllChildren = (children) => {
          for (const child of children) {
            ids.push(child.folder_id);
            if (child.children) {
              collectAllChildren(child.children);
            }
          }
        };
        if (node.children) {
          collectAllChildren(node.children);
        }
        return true;
      }
      if (node.children && collectChildIds(node.children)) {
        return true;
      }
    }
    return false;
  };
  collectChildIds(folderTree);
  return ids;
}
const _sfc_main$2 = defineComponent({
  name: "MoveToFolderDialog",
  components: {
    MoveTargetNode
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    itemType: {
      type: String,
      required: true
    },
    item: {
      type: Object,
      default: null
    }
  },
  emits: ["update:modelValue", "moved", "error"],
  setup() {
    const { tm } = useModuleI18n("features/persona");
    return { tm };
  },
  data() {
    return {
      selectedFolderId: null,
      loading: false
    };
  },
  computed: {
    ...mapState(usePersonaStore, ["folderTree", "treeLoading"]),
    showDialog: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    },
    itemName() {
      if (!this.item) return "";
      return this.itemType === "persona" ? this.item.persona_id : this.item.name;
    },
    // 禁用的文件夹 ID（不能移动到自己或子文件夹）
    disabledFolderIds() {
      if (this.itemType !== "folder" || !this.item) return [];
      return collectFolderAndChildrenIds(
        this.folderTree,
        this.item.folder_id
      );
    },
    // 过滤掉禁用的文件夹
    availableFolders() {
      return this.folderTree;
    }
  },
  watch: {
    modelValue(newValue) {
      if (newValue) {
        if (this.item) {
          this.selectedFolderId = this.itemType === "persona" ? this.item.folder_id ?? null : this.item.parent_id ?? null;
        }
      }
    }
  },
  methods: {
    ...mapActions(usePersonaStore, ["movePersonaToFolder", "moveFolderToFolder"]),
    selectFolder(folderId) {
      if (folderId && this.disabledFolderIds.includes(folderId)) return;
      this.selectedFolderId = folderId;
    },
    closeDialog() {
      this.showDialog = false;
    },
    async submitMove() {
      if (!this.item) return;
      this.loading = true;
      try {
        if (this.itemType === "persona") {
          await this.movePersonaToFolder(
            this.item.persona_id,
            this.selectedFolderId
          );
        } else {
          await this.moveFolderToFolder(
            this.item.folder_id,
            this.selectedFolderId
          );
        }
        this.$emit("moved", this.tm("moveDialog.success"));
        this.closeDialog();
      } catch (error) {
        this.$emit("error", error.message || this.tm("moveDialog.error"));
      } finally {
        this.loading = false;
      }
    }
  }
});
const _hoisted_1$2 = { class: "text-body-2 text-medium-emphasis mb-4" };
const _hoisted_2$2 = { class: "folder-select-tree" };
const _hoisted_3$2 = {
  key: 1,
  class: "text-center pa-4"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MoveTargetNode = resolveComponent("MoveTargetNode");
  return openBlock(), createBlock(VDialog, {
    modelValue: _ctx.showDialog,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.showDialog = $event),
    "max-width": "500px",
    persistent: ""
  }, {
    default: withCtx(() => [
      createVNode(VCard, null, {
        default: withCtx(() => [
          createVNode(VCardTitle, null, {
            default: withCtx(() => [
              createVNode(VIcon, { class: "mr-2" }, {
                default: withCtx(() => [
                  createTextVNode("mdi-folder-move")
                ]),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(_ctx.tm("moveDialog.title")), 1)
            ]),
            _: 1
          }),
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createBaseVNode("p", _hoisted_1$2, toDisplayString(_ctx.tm("moveDialog.description", { name: _ctx.itemName })), 1),
              createBaseVNode("div", _hoisted_2$2, [
                createVNode(VList, {
                  density: "compact",
                  nav: "",
                  class: "tree-list"
                }, {
                  default: withCtx(() => [
                    createVNode(VListItem, {
                      active: _ctx.selectedFolderId === null,
                      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.selectFolder(null)),
                      rounded: "lg",
                      class: "mb-1"
                    }, {
                      prepend: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-home")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(VListItemTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.tm("folder.rootFolder")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["active"]),
                    !_ctx.treeLoading ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.availableFolders, (folder) => {
                      return openBlock(), createBlock(_component_MoveTargetNode, {
                        key: folder.folder_id,
                        folder,
                        depth: 0,
                        "selected-folder-id": _ctx.selectedFolderId,
                        "disabled-folder-ids": _ctx.disabledFolderIds,
                        onSelect: _ctx.selectFolder
                      }, null, 8, ["folder", "selected-folder-id", "disabled-folder-ids", "onSelect"]);
                    }), 128)) : createCommentVNode("", true),
                    _ctx.treeLoading ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
                      createVNode(VProgressCircular, {
                        indeterminate: "",
                        size: "24"
                      })
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(VCardActions, null, {
            default: withCtx(() => [
              createVNode(VSpacer),
              createVNode(VBtn, {
                variant: "text",
                onClick: _ctx.closeDialog
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.tm("buttons.cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(VBtn, {
                color: "primary",
                variant: "flat",
                onClick: _ctx.submitMove,
                loading: _ctx.loading
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.tm("buttons.move")), 1)
                ]),
                _: 1
              }, 8, ["onClick", "loading"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
const MoveToFolderDialog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-3ef3b022"]]);
const _sfc_main$1 = defineComponent({
  name: "PersonaManager",
  components: {
    FolderTree,
    FolderBreadcrumb,
    FolderCard,
    PersonaCard,
    PersonaForm,
    CreateFolderDialog,
    MoveToFolderDialog
  },
  setup() {
    const { t } = useI18n();
    const { tm } = useModuleI18n("features/persona");
    const confirmDialog = useConfirmDialog();
    return { t, tm, confirmDialog };
  },
  data() {
    return {
      // Persona 相关
      showPersonaDialog: false,
      showViewDialog: false,
      editingPersona: null,
      viewingPersona: null,
      // 文件夹相关
      showCreateFolderDialog: false,
      showRenameFolderDialog: false,
      showDeleteFolderDialog: false,
      renameFolderData: { folder: null, name: "" },
      deleteFolderData: null,
      renameLoading: false,
      deleteLoading: false,
      // 移动对话框
      showMoveDialog: false,
      moveDialogType: "persona",
      moveDialogItem: null,
      // 消息提示
      showMessage: false,
      message: "",
      messageType: "success",
      // 骨架屏延迟显示控制
      showSkeleton: false,
      skeletonTimer: null
    };
  },
  computed: {
    ...mapState(usePersonaStore, ["folderTree", "currentFolderId", "currentFolders", "currentPersonas", "loading"]),
    currentFolderName() {
      if (!this.currentFolderId) {
        return null;
      }
      const findName = (nodes, id) => {
        for (const node of nodes) {
          if (node.folder_id === id) {
            return node.name;
          }
          if (node.children && node.children.length > 0) {
            const found = findName(node.children, id);
            if (found) return found;
          }
        }
        return null;
      };
      return findName(this.folderTree, this.currentFolderId);
    }
  },
  watch: {
    // 监听 loading 状态变化，实现延迟显示骨架屏
    loading: {
      handler(newVal) {
        if (newVal) {
          this.skeletonTimer = setTimeout(() => {
            if (this.loading) {
              this.showSkeleton = true;
            }
          }, 150);
        } else {
          if (this.skeletonTimer) {
            clearTimeout(this.skeletonTimer);
            this.skeletonTimer = null;
          }
          this.showSkeleton = false;
        }
      },
      immediate: true
    }
  },
  beforeUnmount() {
    if (this.skeletonTimer) {
      clearTimeout(this.skeletonTimer);
    }
  },
  async mounted() {
    await this.initialize();
  },
  methods: {
    ...mapActions(usePersonaStore, ["loadFolderTree", "navigateToFolder", "updateFolder", "deleteFolder", "deletePersona", "refreshCurrentFolder", "movePersonaToFolder"]),
    async initialize() {
      await Promise.all([
        this.loadFolderTree(),
        this.navigateToFolder(null)
      ]);
    },
    // Persona 操作
    openCreatePersonaDialog() {
      this.editingPersona = null;
      this.showPersonaDialog = true;
    },
    editPersona(persona) {
      this.editingPersona = persona;
      this.showPersonaDialog = true;
    },
    viewPersona(persona) {
      this.viewingPersona = persona;
      this.showViewDialog = true;
    },
    openEditFromViewDialog() {
      if (!this.viewingPersona) return;
      this.editingPersona = this.viewingPersona;
      this.showViewDialog = false;
      this.showPersonaDialog = true;
    },
    handlePersonaSaved(message) {
      this.showSuccess(message);
      this.refreshCurrentFolder();
    },
    handlePersonaDeleted(message) {
      this.showSuccess(message);
      this.refreshCurrentFolder();
    },
    async confirmDeletePersona(persona) {
      if (!await askForConfirmation(
        this.tm("messages.deleteConfirm", { id: persona.persona_id }),
        this.confirmDialog
      )) {
        return;
      }
      try {
        await this.deletePersona(persona.persona_id);
        this.showSuccess(this.tm("messages.deleteSuccess"));
      } catch (error) {
        this.showError(error.message || this.tm("messages.deleteError"));
      }
    },
    openMovePersonaDialog(persona) {
      this.moveDialogType = "persona";
      this.moveDialogItem = persona;
      this.showMoveDialog = true;
    },
    async handlePersonaDropped({ persona_id, target_folder_id }) {
      try {
        await this.movePersonaToFolder(persona_id, target_folder_id);
        this.showSuccess(this.tm("persona.messages.moveSuccess"));
        await this.navigateToFolder(target_folder_id);
      } catch (error) {
        this.showError(error.message || this.tm("persona.messages.moveError"));
      }
    },
    // 文件夹操作
    openRenameFolderDialog(folder) {
      this.renameFolderData = { folder, name: folder.name };
      this.showRenameFolderDialog = true;
    },
    async submitRenameFolder() {
      if (!this.renameFolderData.name || !this.renameFolderData.folder) return;
      this.renameLoading = true;
      try {
        await this.updateFolder({
          folder_id: this.renameFolderData.folder.folder_id,
          name: this.renameFolderData.name
        });
        this.showSuccess(this.tm("folder.messages.renameSuccess"));
        this.showRenameFolderDialog = false;
      } catch (error) {
        this.showError(error.message || this.tm("folder.messages.renameError"));
      } finally {
        this.renameLoading = false;
      }
    },
    openMoveFolderDialog(folder) {
      this.moveDialogType = "folder";
      this.moveDialogItem = folder;
      this.showMoveDialog = true;
    },
    confirmDeleteFolder(folder) {
      this.deleteFolderData = folder;
      this.showDeleteFolderDialog = true;
    },
    async submitDeleteFolder() {
      if (!this.deleteFolderData) return;
      this.deleteLoading = true;
      try {
        await this.deleteFolder(this.deleteFolderData.folder_id);
        this.showSuccess(this.tm("folder.messages.deleteSuccess"));
        this.showDeleteFolderDialog = false;
      } catch (error) {
        this.showError(error.message || this.tm("folder.messages.deleteError"));
      } finally {
        this.deleteLoading = false;
      }
    },
    // 辅助方法
    formatDate(dateString) {
      if (!dateString) return "";
      return new Date(dateString).toLocaleString();
    },
    showSuccess(message) {
      this.message = message;
      this.messageType = "success";
      this.showMessage = true;
    },
    showError(message) {
      this.message = message;
      this.messageType = "error";
      this.showMessage = true;
    }
  }
});
const _hoisted_1$1 = { class: "persona-manager" };
const _hoisted_2$1 = { class: "mobile-nav d-md-none mb-4" };
const _hoisted_3$1 = { class: "manager-layout" };
const _hoisted_4 = { class: "sidebar d-none d-md-block" };
const _hoisted_5 = { class: "sidebar-header d-flex justify-space-between align-center mb-3" };
const _hoisted_6 = { class: "text-h6" };
const _hoisted_7 = { class: "main-content" };
const _hoisted_8 = { class: "toolbar d-flex flex-wrap justify-space-between align-center mb-4 ga-2" };
const _hoisted_9 = { class: "d-none d-md-block" };
const _hoisted_10 = { class: "d-flex ga-2" };
const _hoisted_11 = {
  key: 0,
  class: "loading-container"
};
const _hoisted_12 = { key: 0 };
const _hoisted_13 = {
  key: 0,
  class: "folders-section mb-6"
};
const _hoisted_14 = { class: "text-subtitle-1 font-weight-medium mb-3" };
const _hoisted_15 = {
  key: 1,
  class: "personas-section"
};
const _hoisted_16 = { class: "text-subtitle-1 font-weight-medium mb-3" };
const _hoisted_17 = {
  key: 2,
  class: "empty-state"
};
const _hoisted_18 = { class: "text-h5 mb-2" };
const _hoisted_19 = { class: "text-body-1 text-medium-emphasis mb-4" };
const _hoisted_20 = { class: "d-flex justify-center ga-2" };
const _hoisted_21 = { class: "text-h5" };
const _hoisted_22 = { class: "d-flex align-center ga-1" };
const _hoisted_23 = { class: "mb-4" };
const _hoisted_24 = { class: "text-h6 mb-2" };
const _hoisted_25 = { class: "system-prompt-content" };
const _hoisted_26 = {
  key: 0,
  class: "mb-4"
};
const _hoisted_27 = { class: "text-h6 mb-2" };
const _hoisted_28 = { class: "system-prompt-content" };
const _hoisted_29 = {
  key: 1,
  class: "mb-4"
};
const _hoisted_30 = { class: "text-h6 mb-2" };
const _hoisted_31 = { class: "dialog-content ml-2" };
const _hoisted_32 = { class: "mb-4" };
const _hoisted_33 = { class: "text-h6 mb-2" };
const _hoisted_34 = {
  key: 0,
  class: "text-body-2 text-medium-emphasis"
};
const _hoisted_35 = {
  key: 1,
  class: "d-flex flex-wrap ga-1"
};
const _hoisted_36 = {
  key: 2,
  class: "text-body-2 text-medium-emphasis"
};
const _hoisted_37 = { class: "mb-4" };
const _hoisted_38 = { class: "text-h6 mb-2" };
const _hoisted_39 = {
  key: 0,
  class: "text-body-2 text-medium-emphasis"
};
const _hoisted_40 = {
  key: 1,
  class: "d-flex flex-wrap ga-1"
};
const _hoisted_41 = {
  key: 2,
  class: "text-body-2 text-medium-emphasis"
};
const _hoisted_42 = { class: "text-caption text-medium-emphasis" };
const _hoisted_43 = { key: 0 };
const _hoisted_44 = { class: "text-warning mt-2" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FolderBreadcrumb = resolveComponent("FolderBreadcrumb");
  const _component_FolderTree = resolveComponent("FolderTree");
  const _component_FolderCard = resolveComponent("FolderCard");
  const _component_PersonaCard = resolveComponent("PersonaCard");
  const _component_PersonaForm = resolveComponent("PersonaForm");
  const _component_CreateFolderDialog = resolveComponent("CreateFolderDialog");
  const _component_MoveToFolderDialog = resolveComponent("MoveToFolderDialog");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createVNode(_component_FolderBreadcrumb)
    ]),
    createBaseVNode("div", _hoisted_3$1, [
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("h3", _hoisted_6, toDisplayString(_ctx.tm("folder.sidebarTitle")), 1),
          createVNode(VBtn, {
            icon: "mdi-folder-plus",
            variant: "text",
            size: "small",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.showCreateFolderDialog = true),
            title: _ctx.tm("folder.createButton")
          }, null, 8, ["title"])
        ]),
        createVNode(_component_FolderTree, {
          onMoveFolder: _ctx.openMoveFolderDialog,
          onSuccess: _ctx.showSuccess,
          onError: _ctx.showError,
          onPersonaDropped: _ctx.handlePersonaDropped
        }, null, 8, ["onMoveFolder", "onSuccess", "onError", "onPersonaDropped"])
      ]),
      createBaseVNode("div", _hoisted_7, [
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            createVNode(_component_FolderBreadcrumb)
          ]),
          createBaseVNode("div", _hoisted_10, [
            createVNode(VBtn, {
              color: "primary",
              variant: "tonal",
              "prepend-icon": "mdi-plus",
              onClick: _ctx.openCreatePersonaDialog,
              rounded: "lg"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.tm("buttons.create")), 1)
              ]),
              _: 1
            }, 8, ["onClick"]),
            createVNode(VBtn, {
              variant: "outlined",
              "prepend-icon": "mdi-folder-plus",
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.showCreateFolderDialog = true),
              rounded: "lg"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.tm("folder.createButton")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        createVNode(VFadeTransition, null, {
          default: withCtx(() => [
            _ctx.showSkeleton ? (openBlock(), createElementBlock("div", _hoisted_11, [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(Fragment, null, renderList(6, (n) => {
                    return createVNode(VCol, {
                      key: n,
                      cols: "12",
                      sm: "6",
                      lg: "6",
                      xl: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSkeletonLoader, {
                          type: "card",
                          rounded: "lg"
                        })
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        !_ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_12, [
          _ctx.currentFolders.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_13, [
            createBaseVNode("h3", _hoisted_14, [
              createVNode(VIcon, {
                size: "small",
                class: "mr-1"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-folder")
                ]),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(_ctx.tm("folder.foldersTitle")) + " (" + toDisplayString(_ctx.currentFolders.length) + ") ", 1)
            ]),
            createVNode(VRow, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.currentFolders, (folder) => {
                  return openBlock(), createBlock(VCol, {
                    key: folder.folder_id,
                    cols: "12",
                    sm: "6",
                    lg: "6",
                    xl: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_FolderCard, {
                        folder,
                        onClick: ($event) => _ctx.navigateToFolder(folder.folder_id),
                        onOpen: ($event) => _ctx.navigateToFolder(folder.folder_id),
                        onRename: ($event) => _ctx.openRenameFolderDialog(folder),
                        onMove: ($event) => _ctx.openMoveFolderDialog(folder),
                        onDelete: ($event) => _ctx.confirmDeleteFolder(folder),
                        onPersonaDropped: _ctx.handlePersonaDropped
                      }, null, 8, ["folder", "onClick", "onOpen", "onRename", "onMove", "onDelete", "onPersonaDropped"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true),
          _ctx.currentPersonas.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_15, [
            createBaseVNode("h3", _hoisted_16, [
              createVNode(VIcon, {
                size: "small",
                class: "mr-1"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-account-heart")
                ]),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(_ctx.tm("persona.personasTitle")) + " (" + toDisplayString(_ctx.currentPersonas.length) + ") ", 1)
            ]),
            createVNode(VRow, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.currentPersonas, (persona) => {
                  return openBlock(), createBlock(VCol, {
                    key: persona.persona_id,
                    cols: "12",
                    sm: "6",
                    lg: "6",
                    xl: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_PersonaCard, {
                        persona,
                        onView: ($event) => _ctx.viewPersona(persona),
                        onEdit: ($event) => _ctx.editPersona(persona),
                        onMove: ($event) => _ctx.openMovePersonaDialog(persona),
                        onDelete: ($event) => _ctx.confirmDeletePersona(persona)
                      }, null, 8, ["persona", "onView", "onEdit", "onMove", "onDelete"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true),
          _ctx.currentFolders.length === 0 && _ctx.currentPersonas.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_17, [
            createVNode(VCard, {
              class: "text-center pa-8",
              elevation: "0"
            }, {
              default: withCtx(() => [
                createVNode(VIcon, {
                  size: "64",
                  color: "grey-lighten-1",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-folder-open-outline")
                  ]),
                  _: 1
                }),
                createBaseVNode("h3", _hoisted_18, toDisplayString(_ctx.tm("empty.folderEmpty")), 1),
                createBaseVNode("p", _hoisted_19, toDisplayString(_ctx.tm("empty.folderEmptyDescription")), 1),
                createBaseVNode("div", _hoisted_20, [
                  createVNode(VBtn, {
                    color: "primary",
                    variant: "tonal",
                    "prepend-icon": "mdi-plus",
                    onClick: _ctx.openCreatePersonaDialog
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.tm("buttons.create")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(VBtn, {
                    variant: "outlined",
                    "prepend-icon": "mdi-folder-plus",
                    onClick: _cache[2] || (_cache[2] = ($event) => _ctx.showCreateFolderDialog = true)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.tm("folder.createButton")), 1)
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ])
    ]),
    createVNode(_component_PersonaForm, {
      modelValue: _ctx.showPersonaDialog,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.showPersonaDialog = $event),
      "editing-persona": _ctx.editingPersona ?? void 0,
      "current-folder-id": _ctx.currentFolderId ?? void 0,
      "current-folder-name": _ctx.currentFolderName ?? void 0,
      onSaved: _ctx.handlePersonaSaved,
      onDeleted: _ctx.handlePersonaDeleted,
      onError: _ctx.showError
    }, null, 8, ["modelValue", "editing-persona", "current-folder-id", "current-folder-name", "onSaved", "onDeleted", "onError"]),
    createVNode(VDialog, {
      modelValue: _ctx.showViewDialog,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.showViewDialog = $event),
      "max-width": "700px"
    }, {
      default: withCtx(() => [
        _ctx.viewingPersona ? (openBlock(), createBlock(VCard, { key: 0 }, {
          default: withCtx(() => [
            createVNode(VCardTitle, { class: "d-flex justify-space-between align-center" }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_21, toDisplayString(_ctx.viewingPersona.persona_id), 1),
                createBaseVNode("div", _hoisted_22, [
                  createVNode(VBtn, {
                    color: "primary",
                    variant: "tonal",
                    size: "small",
                    "prepend-icon": "mdi-pencil",
                    onClick: _ctx.openEditFromViewDialog
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.tm("buttons.edit")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(VBtn, {
                    icon: "mdi-close",
                    variant: "text",
                    onClick: _cache[4] || (_cache[4] = ($event) => _ctx.showViewDialog = false)
                  })
                ])
              ]),
              _: 1
            }),
            createVNode(VCardText, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_23, [
                  createBaseVNode("h4", _hoisted_24, toDisplayString(_ctx.tm("form.systemPrompt")), 1),
                  createBaseVNode("pre", _hoisted_25, toDisplayString(_ctx.viewingPersona.system_prompt), 1)
                ]),
                _ctx.viewingPersona.custom_error_message ? (openBlock(), createElementBlock("div", _hoisted_26, [
                  createBaseVNode("h4", _hoisted_27, toDisplayString(_ctx.tm("form.customErrorMessage")), 1),
                  createBaseVNode("pre", _hoisted_28, toDisplayString(_ctx.viewingPersona.custom_error_message), 1)
                ])) : createCommentVNode("", true),
                _ctx.viewingPersona.begin_dialogs && _ctx.viewingPersona.begin_dialogs.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_29, [
                  createBaseVNode("h4", _hoisted_30, toDisplayString(_ctx.tm("form.presetDialogs")), 1),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.viewingPersona.begin_dialogs, (dialog, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: "mb-2"
                    }, [
                      createVNode(VChip, {
                        color: index % 2 === 0 ? "primary" : "secondary",
                        variant: "tonal",
                        size: "small",
                        class: "mb-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(index % 2 === 0 ? _ctx.tm("form.userMessage") : _ctx.tm("form.assistantMessage")), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"]),
                      createBaseVNode("div", _hoisted_31, toDisplayString(dialog), 1)
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_32, [
                  createBaseVNode("h4", _hoisted_33, toDisplayString(_ctx.tm("form.tools")), 1),
                  _ctx.viewingPersona.tools === null ? (openBlock(), createElementBlock("div", _hoisted_34, [
                    createVNode(VChip, {
                      size: "small",
                      color: "success",
                      variant: "tonal",
                      "prepend-icon": "mdi-check-all"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.tm("form.allToolsAvailable")), 1)
                      ]),
                      _: 1
                    })
                  ])) : _ctx.viewingPersona.tools && _ctx.viewingPersona.tools.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_35, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.viewingPersona.tools, (toolName) => {
                      return openBlock(), createBlock(VChip, {
                        key: toolName,
                        size: "small",
                        color: "primary",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(toolName), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ])) : (openBlock(), createElementBlock("div", _hoisted_36, toDisplayString(_ctx.tm("form.noToolsSelected")), 1))
                ]),
                createBaseVNode("div", _hoisted_37, [
                  createBaseVNode("h4", _hoisted_38, toDisplayString(_ctx.tm("form.skills")), 1),
                  _ctx.viewingPersona.skills === null ? (openBlock(), createElementBlock("div", _hoisted_39, [
                    createVNode(VChip, {
                      size: "small",
                      color: "success",
                      variant: "tonal",
                      "prepend-icon": "mdi-check-all"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.tm("form.allSkillsAvailable")), 1)
                      ]),
                      _: 1
                    })
                  ])) : _ctx.viewingPersona.skills && _ctx.viewingPersona.skills.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_40, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.viewingPersona.skills, (skillName) => {
                      return openBlock(), createBlock(VChip, {
                        key: skillName,
                        size: "small",
                        color: "primary",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(skillName), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ])) : (openBlock(), createElementBlock("div", _hoisted_41, toDisplayString(_ctx.tm("form.noSkillsSelected")), 1))
                ]),
                createBaseVNode("div", _hoisted_42, [
                  createBaseVNode("div", null, toDisplayString(_ctx.tm("labels.createdAt")) + ": " + toDisplayString(_ctx.formatDate(_ctx.viewingPersona.created_at)), 1),
                  _ctx.viewingPersona.updated_at ? (openBlock(), createElementBlock("div", _hoisted_43, toDisplayString(_ctx.tm("labels.updatedAt")) + ": " + toDisplayString(_ctx.formatDate(_ctx.viewingPersona.updated_at)), 1)) : createCommentVNode("", true)
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(_component_CreateFolderDialog, {
      modelValue: _ctx.showCreateFolderDialog,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.showCreateFolderDialog = $event),
      "parent-folder-id": _ctx.currentFolderId,
      onCreated: _ctx.showSuccess,
      onError: _ctx.showError
    }, null, 8, ["modelValue", "parent-folder-id", "onCreated", "onError"]),
    createVNode(VDialog, {
      modelValue: _ctx.showRenameFolderDialog,
      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.showRenameFolderDialog = $event),
      "max-width": "400px"
    }, {
      default: withCtx(() => [
        createVNode(VCard, null, {
          default: withCtx(() => [
            createVNode(VCardTitle, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.tm("folder.renameDialog.title")), 1)
              ]),
              _: 1
            }),
            createVNode(VCardText, null, {
              default: withCtx(() => [
                createVNode(VTextField, {
                  modelValue: _ctx.renameFolderData.name,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.renameFolderData.name = $event),
                  label: _ctx.tm("folder.form.name"),
                  rules: [(v) => !!v || _ctx.tm("folder.validation.nameRequired")],
                  variant: "outlined",
                  density: "comfortable",
                  autofocus: "",
                  onKeyup: withKeys(_ctx.submitRenameFolder, ["enter"])
                }, null, 8, ["modelValue", "label", "rules", "onKeyup"])
              ]),
              _: 1
            }),
            createVNode(VCardActions, null, {
              default: withCtx(() => [
                createVNode(VSpacer),
                createVNode(VBtn, {
                  variant: "text",
                  onClick: _cache[8] || (_cache[8] = ($event) => _ctx.showRenameFolderDialog = false)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.tm("buttons.cancel")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VBtn, {
                  color: "primary",
                  variant: "flat",
                  onClick: _ctx.submitRenameFolder,
                  loading: _ctx.renameLoading,
                  disabled: !_ctx.renameFolderData.name
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.tm("buttons.save")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick", "loading", "disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(_component_MoveToFolderDialog, {
      modelValue: _ctx.showMoveDialog,
      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.showMoveDialog = $event),
      "item-type": _ctx.moveDialogType,
      item: _ctx.moveDialogItem,
      onMoved: _ctx.showSuccess,
      onError: _ctx.showError
    }, null, 8, ["modelValue", "item-type", "item", "onMoved", "onError"]),
    createVNode(VDialog, {
      modelValue: _ctx.showDeleteFolderDialog,
      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => _ctx.showDeleteFolderDialog = $event),
      "max-width": "450px"
    }, {
      default: withCtx(() => [
        createVNode(VCard, null, {
          default: withCtx(() => [
            createVNode(VCardTitle, { class: "text-error" }, {
              default: withCtx(() => [
                createVNode(VIcon, {
                  class: "mr-2",
                  color: "error"
                }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-alert")
                  ]),
                  _: 1
                }),
                createTextVNode(" " + toDisplayString(_ctx.tm("folder.deleteDialog.title")), 1)
              ]),
              _: 1
            }),
            createVNode(VCardText, null, {
              default: withCtx(() => {
                var _a;
                return [
                  createBaseVNode("p", null, toDisplayString(_ctx.tm("folder.deleteDialog.message", { name: ((_a = _ctx.deleteFolderData) == null ? void 0 : _a.name) ?? "" })), 1),
                  createBaseVNode("p", _hoisted_44, [
                    createVNode(VIcon, {
                      size: "small",
                      class: "mr-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-information")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" " + toDisplayString(_ctx.tm("folder.deleteDialog.warning")), 1)
                  ])
                ];
              }),
              _: 1
            }),
            createVNode(VCardActions, null, {
              default: withCtx(() => [
                createVNode(VSpacer),
                createVNode(VBtn, {
                  variant: "text",
                  onClick: _cache[11] || (_cache[11] = ($event) => _ctx.showDeleteFolderDialog = false)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.tm("buttons.cancel")), 1)
                  ]),
                  _: 1
                }),
                createVNode(VBtn, {
                  color: "error",
                  variant: "flat",
                  onClick: _ctx.submitDeleteFolder,
                  loading: _ctx.deleteLoading
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.tm("buttons.delete")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick", "loading"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(VSnackbar, {
      timeout: 3e3,
      elevation: "24",
      color: _ctx.messageType,
      modelValue: _ctx.showMessage,
      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => _ctx.showMessage = $event),
      location: "top"
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.message), 1)
      ]),
      _: 1
    }, 8, ["color", "modelValue"])
  ]);
}
const PersonaManager = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-01271cb4"]]);
defineComponent({
  name: "FolderTreeNode",
  components: {
    BaseFolderTreeNode
  },
  props: {
    folder: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      default: 0
    },
    currentFolderId: {
      type: String,
      default: null
    },
    searchQuery: {
      type: String,
      default: ""
    }
  },
  emits: ["folder-click", "folder-context-menu", "persona-dropped"],
  computed: {
    ...mapState(usePersonaStore, ["expandedFolderIds"])
  },
  methods: {
    ...mapActions(usePersonaStore, ["toggleFolderExpansion", "setFolderExpansion"]),
    handleContextMenu(event) {
      this.$emit("folder-context-menu", event);
    },
    handleItemDropped(data) {
      if (data.item_type === "persona") {
        this.$emit("persona-dropped", {
          persona_id: data.item_id,
          target_folder_id: data.target_folder_id
        });
      }
    },
    handleSetExpansion(data) {
      this.setFolderExpansion(data.folderId, data.expanded);
    }
  }
});
const _sfc_main = {
  name: "PersonaPage",
  components: {
    PersonaManager
  },
  setup() {
    const { t } = useI18n();
    const { tm } = useModuleI18n("features/persona");
    return { t, tm };
  }
};
const _hoisted_1 = { class: "persona-page" };
const _hoisted_2 = { class: "text-h1 font-weight-bold mb-2" };
const _hoisted_3 = { class: "text-subtitle-1 text-medium-emphasis mb-0" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PersonaManager = resolveComponent("PersonaManager");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(VContainer, {
      fluid: "",
      class: "pa-0"
    }, {
      default: withCtx(() => [
        createVNode(VRow, { class: "d-flex justify-space-between align-center px-4 py-3 pb-6" }, {
          default: withCtx(() => [
            createBaseVNode("div", null, [
              createBaseVNode("h1", _hoisted_2, [
                createVNode(VIcon, { class: "me-2" }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-heart")
                  ]),
                  _: 1
                }),
                createTextVNode(toDisplayString($setup.t("core.navigation.persona")), 1)
              ]),
              createBaseVNode("p", _hoisted_3, toDisplayString($setup.tm("page.description")), 1)
            ])
          ]),
          _: 1
        }),
        createVNode(_component_PersonaManager)
      ]),
      _: 1
    })
  ]);
}
const PersonaPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-86929de6"]]);
export {
  PersonaPage as default
};
