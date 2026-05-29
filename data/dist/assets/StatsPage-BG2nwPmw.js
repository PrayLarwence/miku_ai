import { D as defineComponent, a5 as useI18n, u as useModuleI18n, aF as useTheme, L as ref, H as computed, J as watch, M as onMounted, R as onBeforeUnmount, c as createElementBlock, b as createVNode, w as withCtx, ao as VContainer, T as normalizeClass, B as axios, a as createBaseVNode, t as toDisplayString, $ as unref, l as VIcon, d as createTextVNode, h as createBlock, k as VAlert, i as createCommentVNode, aj as VProgressCircular, F as Fragment, r as renderList, C as resolveComponent, ap as pushScopeId, aq as popScopeId, o as openBlock, _ as _export_sfc } from "./index-IOsZtj6J.js";
const _withScopeId = (n) => (pushScopeId("data-v-a5b01b91"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "stats-header" };
const _hoisted_2 = { class: "eyebrow" };
const _hoisted_3 = { class: "stats-title" };
const _hoisted_4 = { class: "stats-subtitle" };
const _hoisted_5 = { class: "header-meta" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "meta-pill miku-badge" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "miku-note" }, "♪"),
  /* @__PURE__ */ createBaseVNode("span", null, "Miku AI 在线")
], -1));
const _hoisted_7 = { class: "meta-pill" };
const _hoisted_8 = {
  key: 1,
  class: "loading-wrap"
};
const _hoisted_9 = { class: "overview-grid" };
const _hoisted_10 = { class: "card-icon" };
const _hoisted_11 = { class: "card-label" };
const _hoisted_12 = { class: "card-value" };
const _hoisted_13 = { class: "card-note" };
const _hoisted_14 = { class: "section-toolbar" };
const _hoisted_15 = { class: "section-title" };
const _hoisted_16 = { class: "section-subtitle" };
const _hoisted_17 = { class: "range-switch" };
const _hoisted_18 = ["onClick"];
const _hoisted_19 = { class: "panel-grid" };
const _hoisted_20 = { class: "stat-card chart-card chart-card-wide" };
const _hoisted_21 = { class: "card-head" };
const _hoisted_22 = { class: "section-title" };
const _hoisted_23 = { class: "section-subtitle" };
const _hoisted_24 = { class: "card-head-actions" };
const _hoisted_25 = { class: "section-metric" };
const _hoisted_26 = { class: "metric-label" };
const _hoisted_27 = { class: "metric-value" };
const _hoisted_28 = { class: "stat-card provider-list-card" };
const _hoisted_29 = { class: "card-head compact" };
const _hoisted_30 = { class: "section-title" };
const _hoisted_31 = { class: "section-subtitle" };
const _hoisted_32 = {
  key: 0,
  class: "provider-list"
};
const _hoisted_33 = { class: "provider-name" };
const _hoisted_34 = {
  key: 1,
  class: "empty-state"
};
const _hoisted_35 = { class: "token-section-head" };
const _hoisted_36 = { class: "section-title" };
const _hoisted_37 = { class: "section-subtitle" };
const _hoisted_38 = { class: "token-grid" };
const _hoisted_39 = { class: "stat-card chart-card chart-card-wide provider-trend-card" };
const _hoisted_40 = { class: "card-head" };
const _hoisted_41 = { class: "section-title" };
const _hoisted_42 = { class: "section-subtitle" };
const _hoisted_43 = { class: "token-side-column" };
const _hoisted_44 = { class: "stat-card token-total-card" };
const _hoisted_45 = { class: "card-label" };
const _hoisted_46 = { class: "token-total-value" };
const _hoisted_47 = { style: { "font-size": "18px" } };
const _hoisted_48 = { class: "card-note" };
const _hoisted_49 = { class: "token-meta-list" };
const _hoisted_50 = { class: "token-meta-item" };
const _hoisted_51 = { class: "token-meta-item" };
const _hoisted_52 = { class: "token-meta-item" };
const _hoisted_53 = { class: "token-meta-item" };
const _hoisted_54 = { class: "stat-card provider-list-card" };
const _hoisted_55 = { class: "card-head compact" };
const _hoisted_56 = { class: "section-title" };
const _hoisted_57 = { class: "section-subtitle" };
const _hoisted_58 = {
  key: 0,
  class: "provider-list provider-list--scrollable"
};
const _hoisted_59 = { class: "provider-name" };
const _hoisted_60 = {
  key: 1,
  class: "empty-state"
};
const _hoisted_61 = { class: "stat-card provider-list-card" };
const _hoisted_62 = { class: "card-head compact" };
const _hoisted_63 = { class: "section-title" };
const _hoisted_64 = { class: "section-subtitle" };
const _hoisted_65 = {
  key: 0,
  class: "provider-list"
};
const _hoisted_66 = { class: "provider-name" };
const _hoisted_67 = {
  key: 1,
  class: "empty-state"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StatsPage",
  setup(__props) {
    const { locale } = useI18n();
    const { tm: t } = useModuleI18n("features/stats");
    const theme = useTheme();
    const loading = ref(true);
    const errorMessage = ref("");
    const baseStats = ref(null);
    const providerStats = ref(null);
    const selectedRange = ref(1);
    const lastUpdatedAt = ref(null);
    const isDark = computed(() => theme.global.current.value.dark);
    const themePalette = computed(() => {
      const colors = theme.global.current.value.colors;
      return {
        primary: colors.primary,
        secondary: colors.secondary,
        info: colors.info,
        success: colors.success,
        warning: colors.warning,
        accent: colors.accent,
        border: colors.border ?? colors.borderLight ?? colors.primary,
        mutedText: colors.secondaryText ?? colors.primaryText ?? colors.primary,
        lightPrimary: colors.lightprimary ?? colors.surface ?? colors.background,
        lightSecondary: colors.lightsecondary ?? colors.surface ?? colors.background
      };
    });
    let refreshTimer = null;
    function formatNumber(value) {
      return new Intl.NumberFormat(locale.value).format(value);
    }
    function formatCompactNumber(value) {
      if (value >= 1e9) return `${(value / 1e9).toFixed(2)}B`;
      if (value >= 1e6) return `${(value / 1e6).toFixed(2)}M`;
      if (value >= 1e3) return `${(value / 1e3).toFixed(2)}K`;
      return formatNumber(value);
    }
    function formatMemory(memoryMb) {
      if (memoryMb >= 1024) {
        return `${(memoryMb / 1024).toFixed(1)} ${t("units.gb")}`;
      }
      return `${formatNumber(memoryMb)} ${t("units.mb")}`;
    }
    function formatDurationMs(value) {
      if (!value || value <= 0) return "—";
      if (value < 1e3) return `${Math.round(value)} ${t("units.ms")}`;
      return `${(value / 1e3).toFixed(2)} ${t("units.secondsShort")}`;
    }
    function formatTpm(value) {
      if (!value || value <= 0) return "—";
      return `${value.toFixed(0)} ${t("units.tpm")}`;
    }
    function hexToRgba(color, alpha) {
      if (!color) return `rgba(0, 0, 0, ${alpha})`;
      if (!color.startsWith("#")) return color;
      let hex = color.slice(1);
      if (hex.length === 3) {
        hex = hex.split("").map((char) => char + char).join("");
      }
      if (hex.length !== 6) return color;
      const red = Number.parseInt(hex.slice(0, 2), 16);
      const green = Number.parseInt(hex.slice(2, 4), 16);
      const blue = Number.parseInt(hex.slice(4, 6), 16);
      return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }
    function formatDateTime(timestampSec) {
      if (!timestampSec) return "—";
      return new Date(timestampSec * 1e3).toLocaleString(locale.value, {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
    function formatRunningTime(running) {
      if (!running) return "—";
      const parts = [
        running.hours > 0 ? `${running.hours}${t("units.hoursShort")}` : "",
        running.minutes > 0 || running.hours > 0 ? `${running.minutes}${t("units.minutesShort")}` : "",
        `${running.seconds}${t("units.secondsShort")}`
      ].filter(Boolean);
      return parts.join(" ");
    }
    function aggregateOverflowSeries(series) {
      if (series.length <= 5) return series;
      const leading = series.slice(0, 4);
      const overflow = series.slice(4);
      const mergedPoints = overflow[0].data.map(([timestamp], index) => {
        const total = overflow.reduce((sum, item) => {
          var _a;
          return sum + (((_a = item.data[index]) == null ? void 0 : _a[1]) ?? 0);
        }, 0);
        return [timestamp, total];
      });
      return [
        ...leading,
        {
          name: t("chart.others"),
          data: mergedPoints,
          total_tokens: overflow.reduce((sum, item) => sum + item.total_tokens, 0)
        }
      ];
    }
    async function fetchBaseStats() {
      const response = await axios.get("/api/stat/get", {
        params: {
          offset_sec: selectedRange.value * 24 * 60 * 60
        }
      });
      baseStats.value = response.data.data;
    }
    async function fetchProviderStats() {
      const response = await axios.get("/api/stat/provider-tokens", {
        params: {
          days: selectedRange.value
        }
      });
      providerStats.value = response.data.data;
    }
    async function refreshStats() {
      try {
        errorMessage.value = "";
        await Promise.all([fetchBaseStats(), fetchProviderStats()]);
        lastUpdatedAt.value = /* @__PURE__ */ new Date();
      } catch (error) {
        console.error("Failed to load stats page data:", error);
        errorMessage.value = t("errors.loadFailed");
      } finally {
        loading.value = false;
      }
    }
    const rangeOptions = computed(() => [
      { labelKey: "ranges.oneDay", value: 1 },
      { labelKey: "ranges.threeDays", value: 3 },
      { labelKey: "ranges.oneWeek", value: 7 }
    ]);
    const lastUpdatedLabel = computed(() => {
      if (!lastUpdatedAt.value) return t("header.notUpdated");
      return lastUpdatedAt.value.toLocaleTimeString(locale.value, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    });
    const rangeLabel = computed(() => {
      if (selectedRange.value === 3) return t("rangeLabels.threeDays");
      if (selectedRange.value === 7) return t("rangeLabels.oneWeek");
      return t("rangeLabels.oneDay");
    });
    const overviewCards = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      return [
        {
          label: t("overviewCards.platformCount.label"),
          value: formatNumber(((_a = baseStats.value) == null ? void 0 : _a.platform_count) ?? 0),
          note: t("overviewCards.platformCount.note"),
          icon: "mdi-robot-outline"
        },
        {
          label: t("overviewCards.messageCount.label"),
          value: formatNumber(((_b = baseStats.value) == null ? void 0 : _b.message_count) ?? 0),
          note: t("overviewCards.messageCount.note"),
          icon: "mdi-message-outline"
        },
        {
          label: t("overviewCards.todayModelCalls.label"),
          value: formatCompactNumber(((_c = providerStats.value) == null ? void 0 : _c.today_total_tokens) ?? 0),
          note: t("overviewCards.todayModelCalls.note"),
          icon: "mdi-creation-outline"
        },
        {
          label: t("overviewCards.cpu.label"),
          value: `${((_d = baseStats.value) == null ? void 0 : _d.cpu_percent) ?? 0}%`,
          note: t("overviewCards.cpu.note"),
          icon: "mdi-chip"
        },
        {
          label: t("overviewCards.memory.label"),
          value: formatMemory(((_f = (_e = baseStats.value) == null ? void 0 : _e.memory) == null ? void 0 : _f.process) ?? 0),
          note: t("overviewCards.memory.note", {
            systemMemory: formatMemory(((_h = (_g = baseStats.value) == null ? void 0 : _g.memory) == null ? void 0 : _h.system) ?? 0)
          }),
          icon: "mdi-memory"
        },
        {
          label: t("overviewCards.uptime.label"),
          value: formatRunningTime((_i = baseStats.value) == null ? void 0 : _i.running),
          note: t("overviewCards.uptime.note", { startTime: startTimeLabel.value }),
          icon: "mdi-timer-outline"
        }
      ];
    });
    const messageChartSeries = computed(() => {
      var _a;
      return [
        {
          name: t("chart.messages"),
          data: (((_a = baseStats.value) == null ? void 0 : _a.message_time_series) ?? []).map(([timestamp, value]) => [
            timestamp * 1e3,
            value
          ])
        }
      ];
    });
    const providerTrendSeries = computed(
      () => {
        var _a;
        return aggregateOverflowSeries(((_a = providerStats.value) == null ? void 0 : _a.trend.series) ?? []).map((item) => ({
          name: item.name,
          data: item.data
        }));
      }
    );
    const rangeProviderRanking = computed(() => {
      var _a;
      return ((_a = providerStats.value) == null ? void 0 : _a.range_by_provider) ?? [];
    });
    const rangeUmoRanking = computed(
      () => {
        var _a;
        return (((_a = providerStats.value) == null ? void 0 : _a.range_by_umo) ?? []).slice(0, 10);
      }
    );
    const rangeAvgTtftLabel = computed(
      () => {
        var _a;
        return formatDurationMs(((_a = providerStats.value) == null ? void 0 : _a.range_avg_ttft_ms) ?? 0);
      }
    );
    const rangeAvgDurationLabel = computed(
      () => {
        var _a;
        return formatDurationMs(((_a = providerStats.value) == null ? void 0 : _a.range_avg_duration_ms) ?? 0);
      }
    );
    const rangeAvgTpmLabel = computed(
      () => {
        var _a;
        return formatTpm(((_a = providerStats.value) == null ? void 0 : _a.range_avg_tpm) ?? 0);
      }
    );
    const rangeSuccessRateLabel = computed(() => {
      var _a, _b;
      if (!(((_a = providerStats.value) == null ? void 0 : _a.range_total_calls) ?? 0)) {
        return "—";
      }
      const rate = ((_b = providerStats.value) == null ? void 0 : _b.range_success_rate) ?? 0;
      return `${(rate * 100).toFixed(1)}%`;
    });
    const platformRanking = computed(
      () => {
        var _a;
        return [...((_a = baseStats.value) == null ? void 0 : _a.platform) ?? []].sort((left, right) => right.count - left.count).slice(0, 6);
      }
    );
    const startTimeLabel = computed(
      () => {
        var _a;
        return formatDateTime(((_a = baseStats.value) == null ? void 0 : _a.start_time) ?? 0);
      }
    );
    const providerChartColors = computed(
      () => isDark.value ? [
        "#39c5bb",
        // 初音绿
        "#ff7eb3",
        // 樱花粉
        "#66ccff",
        // 天空蓝
        "#ffcc02",
        // 柠檬黄
        "#c77dff",
        // 淡紫
        "#ff6b6b",
        // 珊瑚红
        "#7ec8a0",
        // 薄荷绿
        "#ffb347"
        // 暖橙
      ] : [
        "#2ca89f",
        // 深初音绿
        "#e8699b",
        // 深樱花粉
        "#4db8e8",
        // 深天蓝
        "#e6b800",
        // 深柠檬黄
        "#b05ce6",
        // 深紫
        "#e05555",
        // 深珊瑚
        "#5dae7e",
        // 深薄荷
        "#e69a30"
        // 深暖橙
      ]
    );
    const messageChartOptions = computed(() => ({
      chart: {
        background: "transparent",
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      },
      theme: {
        mode: isDark.value ? "dark" : "light"
      },
      colors: [themePalette.value.primary],
      stroke: {
        curve: "smooth",
        width: 2.4
      },
      fill: {
        type: "solid",
        opacity: 0.12
      },
      grid: {
        borderColor: hexToRgba(themePalette.value.border, isDark.value ? 0.4 : 0.26),
        strokeDashArray: 0
      },
      dataLabels: { enabled: false },
      xaxis: {
        type: "datetime",
        labels: {
          datetimeUTC: false,
          style: { colors: themePalette.value.mutedText }
        },
        axisBorder: { color: hexToRgba(themePalette.value.border, isDark.value ? 0.4 : 0.26) },
        axisTicks: { color: hexToRgba(themePalette.value.border, isDark.value ? 0.4 : 0.26) }
      },
      yaxis: {
        labels: {
          formatter: (value) => formatCompactNumber(Number(value)),
          style: { colors: themePalette.value.mutedText }
        }
      },
      tooltip: {
        theme: isDark.value ? "dark" : "light",
        x: {
          format: "MM/dd HH:mm"
        }
      },
      legend: { show: false }
    }));
    const providerChartOptions = computed(() => ({
      chart: {
        background: "transparent",
        toolbar: { show: false },
        zoom: { enabled: false },
        stacked: true,
        fontFamily: '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      },
      theme: {
        mode: isDark.value ? "dark" : "light"
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 4,
          columnWidth: "58%"
        }
      },
      colors: providerChartColors.value,
      dataLabels: { enabled: false },
      grid: {
        borderColor: hexToRgba(themePalette.value.border, isDark.value ? 0.4 : 0.26)
      },
      xaxis: {
        type: "datetime",
        labels: {
          datetimeUTC: false,
          style: { colors: themePalette.value.mutedText }
        },
        axisBorder: { color: hexToRgba(themePalette.value.border, isDark.value ? 0.4 : 0.26) },
        axisTicks: { color: hexToRgba(themePalette.value.border, isDark.value ? 0.4 : 0.26) }
      },
      yaxis: {
        labels: {
          formatter: (value) => formatCompactNumber(Number(value)),
          style: { colors: themePalette.value.mutedText }
        }
      },
      tooltip: {
        theme: isDark.value ? "dark" : "light",
        x: {
          format: "MM/dd HH:mm"
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        labels: {
          colors: themePalette.value.mutedText
        }
      }
    }));
    watch(selectedRange, async () => {
      try {
        await Promise.all([fetchBaseStats(), fetchProviderStats()]);
        lastUpdatedAt.value = /* @__PURE__ */ new Date();
      } catch (error) {
        console.error("Failed to refresh stats range:", error);
        errorMessage.value = t("errors.rangeFailed");
      }
    });
    onMounted(async () => {
      await refreshStats();
      refreshTimer = window.setInterval(() => {
        void refreshStats();
      }, 6e4);
    });
    onBeforeUnmount(() => {
      if (refreshTimer !== null) {
        window.clearInterval(refreshTimer);
      }
    });
    return (_ctx, _cache) => {
      const _component_apexchart = resolveComponent("apexchart");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["stats-page", { "is-dark": isDark.value }])
      }, [
        createVNode(VContainer, {
          fluid: "",
          class: "stats-shell pa-4 pa-md-6"
        }, {
          default: withCtx(() => {
            var _a, _b, _c;
            return [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_2, toDisplayString(unref(t)("header.eyebrow")), 1),
                  createBaseVNode("h1", _hoisted_3, toDisplayString(unref(t)("header.title")), 1),
                  createBaseVNode("p", _hoisted_4, toDisplayString(unref(t)("header.subtitle")), 1)
                ]),
                createBaseVNode("div", _hoisted_5, [
                  _hoisted_6,
                  createBaseVNode("div", _hoisted_7, [
                    createVNode(VIcon, { size: "16" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-refresh")
                      ]),
                      _: 1
                    }),
                    createBaseVNode("span", null, toDisplayString(lastUpdatedLabel.value), 1)
                  ])
                ])
              ]),
              errorMessage.value ? (openBlock(), createBlock(VAlert, {
                key: 0,
                type: "error",
                variant: "tonal",
                class: "mb-4"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(errorMessage.value), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              loading.value && !baseStats.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
                createVNode(VProgressCircular, {
                  indeterminate: "",
                  color: "grey-darken-1"
                })
              ])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                createBaseVNode("div", _hoisted_9, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(overviewCards.value, (card) => {
                    return openBlock(), createElementBlock("section", {
                      key: card.label,
                      class: "stat-card overview-card"
                    }, [
                      createBaseVNode("div", _hoisted_10, [
                        createVNode(VIcon, { size: "18" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(card.icon), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createBaseVNode("div", _hoisted_11, toDisplayString(card.label), 1),
                      createBaseVNode("div", _hoisted_12, toDisplayString(card.value), 1),
                      createBaseVNode("div", _hoisted_13, toDisplayString(card.note), 1)
                    ]);
                  }), 128))
                ]),
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_15, toDisplayString(unref(t)("messageOverview.title")), 1),
                    createBaseVNode("div", _hoisted_16, toDisplayString(unref(t)("messageOverview.subtitle")), 1)
                  ]),
                  createBaseVNode("div", _hoisted_17, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(rangeOptions.value, (option) => {
                      return openBlock(), createElementBlock("button", {
                        key: `toolbar-${option.value}`,
                        type: "button",
                        class: normalizeClass(["range-chip", { active: selectedRange.value === option.value }]),
                        onClick: ($event) => selectedRange.value = option.value
                      }, toDisplayString(unref(t)(option.labelKey)), 11, _hoisted_18);
                    }), 128))
                  ])
                ]),
                createBaseVNode("div", _hoisted_19, [
                  createBaseVNode("section", _hoisted_20, [
                    createBaseVNode("div", _hoisted_21, [
                      createBaseVNode("div", null, [
                        createBaseVNode("div", _hoisted_22, toDisplayString(unref(t)("messageTrend.title")), 1),
                        createBaseVNode("div", _hoisted_23, toDisplayString(unref(t)("messageTrend.subtitle", { range: rangeLabel.value })), 1)
                      ]),
                      createBaseVNode("div", _hoisted_24, [
                        createBaseVNode("div", _hoisted_25, [
                          createBaseVNode("span", _hoisted_26, toDisplayString(unref(t)("messageTrend.totalMessages")), 1),
                          createBaseVNode("span", _hoisted_27, toDisplayString(formatNumber(((_a = baseStats.value) == null ? void 0 : _a.message_count) ?? 0)), 1)
                        ])
                      ])
                    ]),
                    createVNode(_component_apexchart, {
                      type: "area",
                      height: "320",
                      options: messageChartOptions.value,
                      series: messageChartSeries.value
                    }, null, 8, ["options", "series"])
                  ]),
                  createBaseVNode("section", _hoisted_28, [
                    createBaseVNode("div", _hoisted_29, [
                      createBaseVNode("div", null, [
                        createBaseVNode("div", _hoisted_30, toDisplayString(unref(t)("platformRanking.title")), 1),
                        createBaseVNode("div", _hoisted_31, toDisplayString(unref(t)("platformRanking.subtitle", { range: rangeLabel.value })), 1)
                      ])
                    ]),
                    platformRanking.value.length ? (openBlock(), createElementBlock("div", _hoisted_32, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(platformRanking.value, (platform) => {
                        return openBlock(), createElementBlock("div", {
                          key: platform.name,
                          class: "provider-row"
                        }, [
                          createBaseVNode("span", _hoisted_33, toDisplayString(platform.name), 1),
                          createBaseVNode("strong", null, toDisplayString(formatNumber(platform.count)), 1)
                        ]);
                      }), 128))
                    ])) : (openBlock(), createElementBlock("div", _hoisted_34, toDisplayString(unref(t)("empty.platformStats")), 1))
                  ])
                ]),
                createBaseVNode("div", _hoisted_35, [
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_36, toDisplayString(unref(t)("modelCalls.title")), 1),
                    createBaseVNode("div", _hoisted_37, toDisplayString(unref(t)("modelCalls.subtitle")), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_38, [
                  createBaseVNode("section", _hoisted_39, [
                    createBaseVNode("div", _hoisted_40, [
                      createBaseVNode("div", null, [
                        createBaseVNode("div", _hoisted_41, toDisplayString(unref(t)("modelTrend.title")), 1),
                        createBaseVNode("div", _hoisted_42, toDisplayString(unref(t)("modelTrend.subtitle")), 1)
                      ])
                    ]),
                    createVNode(_component_apexchart, {
                      type: "bar",
                      height: "420",
                      options: providerChartOptions.value,
                      series: providerTrendSeries.value
                    }, null, 8, ["options", "series"])
                  ]),
                  createBaseVNode("section", _hoisted_43, [
                    createBaseVNode("section", _hoisted_44, [
                      createBaseVNode("div", _hoisted_45, toDisplayString(unref(t)("modelTotal.title", { range: rangeLabel.value })), 1),
                      createBaseVNode("div", _hoisted_46, [
                        createTextVNode(toDisplayString(formatNumber(((_b = providerStats.value) == null ? void 0 : _b.range_total_tokens) ?? 0)) + " ", 1),
                        createBaseVNode("span", _hoisted_47, toDisplayString(unref(t)("units.tokens")), 1)
                      ]),
                      createBaseVNode("div", _hoisted_48, toDisplayString(unref(t)("modelTotal.callCount", { count: formatNumber(((_c = providerStats.value) == null ? void 0 : _c.range_total_calls) ?? 0) })), 1),
                      createBaseVNode("div", _hoisted_49, [
                        createBaseVNode("div", _hoisted_50, [
                          createBaseVNode("span", null, toDisplayString(unref(t)("modelTotal.avgTtft")), 1),
                          createBaseVNode("strong", null, toDisplayString(rangeAvgTtftLabel.value), 1)
                        ]),
                        createBaseVNode("div", _hoisted_51, [
                          createBaseVNode("span", null, toDisplayString(unref(t)("modelTotal.avgDuration")), 1),
                          createBaseVNode("strong", null, toDisplayString(rangeAvgDurationLabel.value), 1)
                        ]),
                        createBaseVNode("div", _hoisted_52, [
                          createBaseVNode("span", null, toDisplayString(unref(t)("modelTotal.avgTpm")), 1),
                          createBaseVNode("strong", null, toDisplayString(rangeAvgTpmLabel.value), 1)
                        ]),
                        createBaseVNode("div", _hoisted_53, [
                          createBaseVNode("span", null, toDisplayString(unref(t)("modelTotal.successRate")), 1),
                          createBaseVNode("strong", null, toDisplayString(rangeSuccessRateLabel.value), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("section", _hoisted_54, [
                      createBaseVNode("div", _hoisted_55, [
                        createBaseVNode("div", null, [
                          createBaseVNode("div", _hoisted_56, toDisplayString(unref(t)("modelRanking.title", { range: rangeLabel.value })), 1),
                          createBaseVNode("div", _hoisted_57, toDisplayString(unref(t)("modelRanking.subtitle")), 1)
                        ])
                      ]),
                      rangeProviderRanking.value.length ? (openBlock(), createElementBlock("div", _hoisted_58, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(rangeProviderRanking.value, (provider) => {
                          return openBlock(), createElementBlock("div", {
                            key: provider.provider_id,
                            class: "provider-row"
                          }, [
                            createBaseVNode("span", _hoisted_59, toDisplayString(provider.provider_id), 1),
                            createBaseVNode("strong", null, toDisplayString(formatNumber(provider.tokens)), 1)
                          ]);
                        }), 128))
                      ])) : (openBlock(), createElementBlock("div", _hoisted_60, toDisplayString(unref(t)("empty.modelCalls", { range: rangeLabel.value })), 1))
                    ])
                  ])
                ]),
                createBaseVNode("section", _hoisted_61, [
                  createBaseVNode("div", _hoisted_62, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_63, toDisplayString(unref(t)("sessionRanking.title", { range: rangeLabel.value })), 1),
                      createBaseVNode("div", _hoisted_64, toDisplayString(unref(t)("sessionRanking.subtitle")), 1)
                    ])
                  ]),
                  rangeUmoRanking.value.length ? (openBlock(), createElementBlock("div", _hoisted_65, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(rangeUmoRanking.value, (item) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.umo,
                        class: "provider-row"
                      }, [
                        createBaseVNode("span", _hoisted_66, toDisplayString(item.umo), 1),
                        createBaseVNode("strong", null, toDisplayString(formatNumber(item.tokens)), 1)
                      ]);
                    }), 128))
                  ])) : (openBlock(), createElementBlock("div", _hoisted_67, toDisplayString(unref(t)("empty.sessionCalls", { range: rangeLabel.value })), 1))
                ])
              ], 64))
            ];
          }),
          _: 1
        })
      ], 2);
    };
  }
});
const StatsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a5b01b91"]]);
export {
  StatsPage as default
};
