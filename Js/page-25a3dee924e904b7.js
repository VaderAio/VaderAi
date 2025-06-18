(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974],
  {
    3617: (e, t, s) => {
      "use strict";
      s.d(t, { U: () => r });
      var a = s(99535);
      function r() {
        return (0, a.createBrowserClient)(
          "https://mxbhnaqmnkndrqydbswb.supabase.co",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14YmhuYXFtbmtuZHJxeWRic3diIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMjE4MDUsImV4cCI6MjA1OTg5NzgwNX0.dpWFAqeqOzvFvgf9yLxmjDnNcPcwCIVeN7pZwew56GA"
        );
      }
    },
    8889: (e, t, s) => {
      "use strict";
      s.d(t, { F: () => c });
      var a = s(95155),
        r = s(12115),
        l = s(60760),
        n = s(66129),
        i = s(24371),
        o = s(58127);
      let d = {
          error: {
            border: "border-red-500/20",
            icon: i.A,
            iconColor: "text-red-500",
            progressBar: "bg-red-500/50",
            title: "Error",
          },
          success: {
            border: "border-emerald-500/20",
            icon: o.A,
            iconColor: "text-emerald-500",
            progressBar: "bg-emerald-500/50",
            title: "Success",
          },
        },
        c = (e) => {
          let {
              type: t = "error",
              message: s,
              onClose: o,
              duration: c = 5e3,
            } = e,
            x = d[t];
          return (
            (0, r.useEffect)(() => {
              if (o) {
                let e = setTimeout(() => {
                  o();
                }, c);
                return () => clearTimeout(e);
              }
            }, [o, c]),
            (0, a.jsx)(l.N, {
              mode: "wait",
              children: (0, a.jsx)(
                n.P.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: {
                    opacity: 0,
                    x: 100,
                    transition: { duration: 0.3, ease: "easeOut" },
                  },
                  className: "fixed bottom-4 right-4 z-50 max-w-md",
                  children: (0, a.jsxs)("div", {
                    className: "bg-[#1a1b1f] border-2 ".concat(
                      x.border,
                      " rounded-lg shadow-lg p-4 backdrop-blur-sm relative overflow-hidden"
                    ),
                    children: [
                      (0, a.jsx)(n.P.div, {
                        initial: { width: "100%" },
                        animate: { width: "0%" },
                        transition: { duration: c / 1e3, ease: "linear" },
                        className: "absolute bottom-0 left-0 h-1 ".concat(
                          x.progressBar
                        ),
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-start space-x-3",
                        children: [
                          (0, a.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, a.jsx)(x.icon, {
                              className: "h-5 w-5 ".concat(x.iconColor),
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex-1",
                            children: [
                              (0, a.jsx)("p", {
                                className: "text-xs ".concat(
                                  x.iconColor,
                                  " mb-1 font-mono"
                                ),
                                children: x.title,
                              }),
                              (0, a.jsx)("p", {
                                className: "text-lg text-gray-300 font-mono",
                                children: s,
                              }),
                            ],
                          }),
                          o &&
                            (0, a.jsxs)(n.P.button, {
                              onClick: o,
                              className:
                                "flex-shrink-0 ml-4 text-gray-400 hover:text-gray-300 transition-colors",
                              whileHover: { scale: 1.1 },
                              whileTap: { scale: 0.95 },
                              children: [
                                (0, a.jsx)("span", {
                                  className: "sr-only",
                                  children: "Close",
                                }),
                                (0, a.jsx)(i.A, { className: "h-5 w-5" }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                },
                "alert"
              ),
            })
          );
        };
    },
    26279: (e, t, s) => {
      "use strict";
      s.d(t, { h: () => l });
      var a = s(95155),
        r = s(59434);
      let l = (e) => {
        let { children: t, className: s } = e;
        return (0, a.jsxs)("div", {
          className: (0, r.cn)("rounded-[8px] p-6 relative overflow-hidden", s),
          children: [
            (0, a.jsx)("div", {
              className:
                "absolute inset-0 bg-gradient-to-br from-[#111111] to-black",
            }),
            (0, a.jsx)("div", {
              className:
                "absolute inset-0 border border-[#343434] rounded-[8px]",
            }),
            (0, a.jsx)("div", { className: "relative z-10", children: t }),
          ],
        });
      };
    },
    44666: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => Q });
      var a = s(95155),
        r = s(59434),
        l = s(12115);
      let n = {
          priceUsd: "0",
          priceChange: { h24: 0 },
          volume: { h24: 0 },
          liquidity: { usd: 0 },
        },
        i = () => {
          let [e, t] = (0, l.useState)(n),
            [s, a] = (0, l.useState)(!0);
          return (
            (0, l.useEffect)(() => {
              let e = async () => {
                try {
                  var e, s, r, l;
                  let a = await fetch(
                    "https://api.dexscreener.com/latest/dex/pairs/base/0xa1dddb82501e8fe2d92ad0e8ba331313f501de72"
                  );
                  if (!a.ok) return;
                  let n = null == (e = (await a.json()).pairs) ? void 0 : e[0];
                  if (!n) return;
                  t({
                    priceUsd: n.priceUsd || "0",
                    priceChange: {
                      h24: Number(
                        (null == (s = n.priceChange) ? void 0 : s.h24) || 0
                      ),
                    },
                    volume: {
                      h24: Number(
                        (null == (r = n.volume) ? void 0 : r.h24) || 0
                      ),
                    },
                    liquidity: {
                      usd: Number(
                        (null == (l = n.liquidity) ? void 0 : l.usd) || 0
                      ),
                    },
                  });
                } catch (e) {
                } finally {
                  a(!1);
                }
              };
              e();
              let s = setInterval(e, 6e4);
              return () => clearInterval(s);
            }, []),
            { priceData: e, isLoading: s }
          );
        },
        o = (e) => {
          let {
              className: t,
              title: s,
              value: l,
              subValue: n,
              showDot: i,
              centered: o,
              type: d,
            } = e,
            c =
              (null == n ? void 0 : n.startsWith("-")) ||
              (null == n ? void 0 : n.includes("(-"));
          return "type-1" === d
            ? (0, a.jsxs)("div", {
                className: ""
                  .concat(
                    "relative rounded-[8px] border border-[#343434] backdrop-blur-[16px]",
                    " "
                  )
                  .concat(t),
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-b from-[#3D3D3D] to-[#111111] opacity-20 rounded-[8px]",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "relative h-[90px] sm:h-[100px] lg:h-[121px] ".concat(
                        o ? "" : "px-3 sm:px-2",
                        " py-0"
                      ),
                    children: (0, a.jsx)("div", {
                      className:
                        "flex flex-col justify-center h-full gap-2 sm:gap-[10px]",
                      children: (0, a.jsx)("div", {
                        className:
                          "flex items-center justify-center gap-1.5 sm:gap-2",
                        children: (0, a.jsxs)("div", {
                          className: "flex flex-col items-center",
                          children: [
                            (0, a.jsx)("h3", {
                              className:
                                "text-white text-[16px] sm:text-xl font-medium leading-none",
                              children: s,
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "text-white text-[24px] text-center sm:text-[28px] lg:text-[30px] font-bold leading-none mt-1.5 sm:mt-2",
                              children: l,
                            }),
                            n &&
                              (0, a.jsx)("div", {
                                className: (0, r.cn)(
                                  "text-[#4DF4BE] text-[18px] text-center font-light leading-none mt-1.5 sm:mt-2",
                                  c ? "text-slate-400" : "text-green-500"
                                ),
                                children: n,
                              }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              })
            : "type-2" === d
            ? (0, a.jsxs)("div", {
                className:
                  "relative rounded-[8px] border border-[#343434] backdrop-blur-[16px] sm:h-[123px] sm:py-[14px] sm:px-[15px] p-3 ".concat(
                    t
                  ),
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-b from-[#3D3D3D] to-[#111111] opacity-20 rounded-[8px]",
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col items-center justify-center gap-2 h-full w-full",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "shrink-0 w-[10px] h-[10px] rounded-full bg-[#4DF4BE] animate-pulse",
                          }),
                          s &&
                            (0, a.jsx)("div", {
                              className: "ml-[3px]",
                              children: s,
                            }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "text-[24px] text-center sm:text-[28px] lg:text-[30px] font-bold leading-none flex items-center gap-2",
                        children: [
                          (0, a.jsx)("div", {
                            className: "sm:w-[10px] sm:h-[10px] rounded-full",
                          }),
                          l,
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : null;
        };
      var d = s(32960);
      let c = (0, s(34982).UU)(
          "https://mxbhnaqmnkndrqydbswb.supabase.co",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14YmhuYXFtbmtuZHJxeWRic3diIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMjE4MDUsImV4cCI6MjA1OTg5NzgwNX0.dpWFAqeqOzvFvgf9yLxmjDnNcPcwCIVeN7pZwew56GA"
        ),
        x = (e) =>
          e >= 1e9
            ? (e / 1e9).toFixed(1) + "B"
            : e >= 1e6
            ? (e / 1e6).toFixed(1) + "M"
            : e >= 1e3
            ? (e / 1e3).toFixed(1) + "K"
            : Math.floor(e).toString(),
        m = (e) => Math.floor(e).toLocaleString("en-US"),
        h = "0x731814e491571A2e9eE3c5b1F7f3b962eE8f4870",
        u = () => {
          let [e, t] = (0, l.useState)(0),
            [s, a] = (0, l.useState)("$0"),
            [r, n] = (0, l.useState)(0),
            [i, o] = (0, l.useState)("0%"),
            [u, b] = (0, l.useState)(0),
            [p, g] = (0, l.useState)(!0);
          (0, l.useEffect)(() => {
            {
              t(window.innerWidth);
              let e = () => t(window.innerWidth);
              return (
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }
          }, []);
          let f = e <= 768,
            {
              data: j,
              isLoading: v,
              error: w,
              refetch: N,
            } = (0, d.I)({
              queryKey: ["tokenSupply", h],
              queryFn: async () => {
                let { data: e, error: t } = await c
                  .from("token_supply")
                  .select("total_supply, raw_total_supply, burned_tokens")
                  .eq("token_address", h)
                  .order("timestamp", { ascending: !1 })
                  .limit(1)
                  .single();
                if (t)
                  throw (
                    (console.error("Error fetching token supply:", t),
                    Error("Failed to fetch token supply: ".concat(t.message)))
                  );
                return e;
              },
              staleTime: 3e5,
            }),
            {
              data: y,
              isLoading: k,
              error: _,
              refetch: S,
            } = (0, d.I)({
              queryKey: ["stakedVaderData"],
              queryFn: async () => {
                let { data: e, error: t } = await c
                  .from("staked_vader_data_web")
                  .select("*")
                  .order("timestamp", { ascending: !1 })
                  .limit(1)
                  .single();
                if (t)
                  throw (
                    (console.error("Error fetching staked VADER data:", t),
                    Error(
                      "Failed to fetch staked VADER data: ".concat(t.message)
                    ))
                  );
                return e;
              },
              staleTime: 3e5,
            }),
            { data: E, isLoading: A } = (0, d.I)({
              queryKey: ["portfolioSummary"],
              queryFn: async () => {
                let { data: e, error: t } = await c
                  .from("portfolio_summary")
                  .select("combined_value")
                  .order("id", { ascending: !1 })
                  .limit(1)
                  .single();
                return t
                  ? (console.error(
                      "Error fetching portfolio summary from Supabase:",
                      t
                    ),
                    0)
                  : (null == e ? void 0 : e.combined_value) || 0;
              },
              staleTime: 3e5,
            });
          (0, l.useEffect)(() => {
            E && !k && y && y.total_usd_value > 0
              ? (b((E / (0.7 * y.total_usd_value)) * 100), g(!1))
              : A || k || (b(0), g(!1));
          }, [E, A, y, k]),
            (0, l.useEffect)(() => {
              if (!k && y && !v && j) {
                let e,
                  t = f ? x(y.total_usd_value) : m(y.total_usd_value);
                a("$".concat(t));
                let s = (null == j ? void 0 : j.total_supply) || 1e9,
                  r = (y.combined_balance / s) * 100;
                (e =
                  r < 0.01
                    ? "< 0.01%"
                    : r < 1
                    ? r.toFixed(2) + "%"
                    : r.toFixed(1) + "%"),
                  n(r),
                  o(e);
              }
            }, [y, j, k, v, f]);
          let F =
            _ || w
              ? ""
                  .concat(_ ? _.message : "", " ")
                  .concat(w ? w.message : "")
                  .trim()
              : null;
          return {
            totalStake: (null == y ? void 0 : y.total_stake) || 0,
            legacyWallet1Balance:
              (null == y ? void 0 : y.legacy_wallet_1_balance) || 0,
            legacyWallet2Balance:
              (null == y ? void 0 : y.legacy_wallet_2_balance) || 0,
            diamondBalance: (null == y ? void 0 : y.diamond_balance) || 0,
            combinedBalance: (null == y ? void 0 : y.combined_balance) || 0,
            vaderPrice: (null == y ? void 0 : y.vader_price) || 0,
            totalUsdValue: (null == y ? void 0 : y.total_usd_value) || 0,
            formattedUsdValue: s,
            percentageStaked: r,
            formattedPercentage: i,
            totalSupply: (null == j ? void 0 : j.total_supply) || 1e9,
            rawTotalSupply: (null == j ? void 0 : j.raw_total_supply) || null,
            burnedTokens: (null == j ? void 0 : j.burned_tokens) || null,
            loading: k || v,
            error: F,
            refreshData: () => {
              N(), S();
            },
            apy: u,
            isApyLoading: p,
          };
        };
      var b = s(66766);
      let p = (e) => {
          let { showApy: t = !1 } = e,
            {
              formattedUsdValue: s,
              loading: r,
              error: n,
              apy: i,
              isApyLoading: d,
            } = u(),
            [c, x] = (0, l.useState)(!1),
            m = t
              ? (0, a.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, a.jsx)("span", {
                      className: "text-lg sm:text-xl font-bold",
                      children: "Staking APY %",
                    }),
                    (0, a.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, a.jsx)("button", {
                          type: "button",
                          className:
                            "inline-flex items-center justify-center w-5 h-5 ml-1 rounded-full bg-[#1A1A1A] cursor-pointer",
                          "aria-label": "Info",
                          onMouseEnter: () => x(!0),
                          onMouseLeave: () => x(!1),
                          children: (0, a.jsx)(b.default, {
                            src: "/hover-tooltip-white.svg",
                            alt: "Info",
                            width: 18,
                            height: 18,
                          }),
                        }),
                        c &&
                          (0, a.jsxs)("div", {
                            className:
                              "absolute z-50 bottom-full right-[-5px] sm:left-1/2 sm:transform sm:-translate-x-1/2 mb-2 bg-[#1A1A1A] py-2 px-2 rounded text-white text-[16px] min-w-[300px] w-[350px] sm:w-[400px] max-w-[90vw] text-center break-words",
                            children: [
                              "Estimation based on Virgen Points, average Virgen Point value and confirmed airdrops.",
                              (0, a.jsx)("div", {
                                className:
                                  "absolute right-2 sm:left-1/2 sm:-translate-x-1/2 bottom-[-8px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#1A1A1A]",
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                })
              : (0, a.jsx)("span", {
                  className: "text-lg sm:text-xl font-bold",
                  children: "Total $VADER Staked",
                });
          return (0, a.jsx)(o, {
            type: "type-2",
            className: "w-1/2 lg:w-1/2",
            title: m,
            value:
              r || (t && d)
                ? (0, a.jsx)("div", {
                    className: "flex justify-center items-center h-[38px]",
                    children: (0, a.jsx)("div", {
                      className:
                        "animate-pulse bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded",
                      style: { width: "120px", height: "38px" },
                    }),
                  })
                : (0, a.jsx)("div", {
                    className:
                      "font-['Public_Sans'] font-black tracking-[1px] text-[24px] sm:text-[30px] ".concat(
                        t ? "text-green-500" : "text-white"
                      ),
                    children: n
                      ? t
                        ? "0%"
                        : "$0"
                      : t
                      ? "".concat(i.toFixed(0), "%")
                      : s,
                  }),
          });
        },
        g = () => {
          var e;
          let { priceData: t } = i(),
            [s, n] = (0, l.useState)("0"),
            [d, c] = (0, l.useState)(48),
            { formattedPercentage: x, loading: m, totalSupply: h } = u();
          (0, l.useEffect)(() => {
            t && n((0, r.Z)(1e9 * Number(t.priceUsd)));
          }, [t]);
          let b = null != (e = null == t ? void 0 : t.priceChange.h24) ? e : 0,
            g = ""
              .concat(b >= 0 ? "+" : "", "$")
              .concat((0, r.Z)((Number(s.replace(/,/g, "")) * b) / 100), " (")
              .concat(b.toFixed(2), "%)");
          return (0, a.jsxs)("div", {
            className:
              "flex flex-col lg:grid lg:grid-cols-2 gap-y-5 lg:gap-y-0 lg:gap-x-8",
            children: [
              (0, a.jsx)("div", {
                className: "sticky top-2 sm:-top-12",
                children: (0, a.jsx)("img", {
                  src: "/home-pic.webp",
                  alt: "Agentic Economy Hero Image",
                  className:
                    "mx-auto sticky w-full h-full scale-[115%] sm:scale-[110%]",
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "text-center lg:text-left order-3 lg:order-2 flex items-left justify-end gap-2 flex-col lg:mb-16 mt-0",
                children: [
                  (0, a.jsxs)("h1", {
                    className:
                      "text-[40px] md:text-[50px] lg:text-[62px] text-white leading-[50px] md:leading-[80px]",
                    children: [
                      "VCs are Dead,",
                      (0, a.jsx)("br", {}),
                      "You are the New VC",
                    ],
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "text-[18px] sm:text-[22px] text-gray-300 font-thin leading-1 max-w-2xl mx-auto lg:mx-0",
                    children:
                      "Stake $VADER to join AI public sales at $200k FDV",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "order-2 lg:order-3",
                children: (0, a.jsx)(o, {
                  className:
                    "w-full flex-col items-center justify-center text-center mx-auto py-6 lg:py-0.5",
                  title: "$VADER Market Cap",
                  type: "type-1",
                  value: (0, a.jsxs)("div", {
                    className:
                      "font-['Public_Sans'] font-black tracking-[2px] text-[35px] sm:text-[35px] text-white",
                    children: ["$", s],
                  }),
                  subValue: g,
                  centered: !0,
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "order-4 lg:col-span-1 lg:col-start-2 flex flex-row gap-[30px]",
                children: [
                  (0, a.jsx)(o, {
                    type: "type-2",
                    className: "w-1/2 lg:w-1/2",
                    title: (0, a.jsx)("span", {
                      className: "text-lg sm:text-xl font-bold",
                      children: "% of $VADER Staked",
                    }),
                    value: m
                      ? (0, a.jsx)("div", {
                          className:
                            "flex justify-center items-center h-[38px]",
                          children: (0, a.jsx)("div", {
                            className:
                              "animate-pulse bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded",
                            style: { width: "80px", height: "38px" },
                          }),
                        })
                      : x,
                  }),
                  (0, a.jsx)(p, { showApy: !0 }),
                ],
              }),
            ],
          });
        },
        f = (e) => {
          let {
              onClick: t,
              className: s = "",
              text: r = "Legacy Staking",
              url: l,
            } = e,
            n =
              "\n    py-3 \n    rounded-[58px] \n    border \n    border-[#FFFFFF] \n    bg-[#FFFFFF]/10 \n    text-white \n    font-semibold \n    text-sm\n    md:text-[19px] \n    tracking-[-0.02em] \n    hover:bg-[#FFFFFF]/20\n    hover:scale-[1.02]\n    active:scale-[0.98]\n    transition-all\n    duration-200\n    ease-in-out\n    relative\n    w-full\n    max-w-[257px]\n    h-[46px]\n    flex\n    items-center\n    justify-center\n    before:absolute\n    before:inset-0\n    before:rounded-[58px]\n    before:bg-white/0\n    before:transition-all\n    before:duration-300\n    hover:before:bg-white/5\n    hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]\n    active:shadow-[0_0_10px_rgba(255,255,255,0.2)]\n    active:before:bg-white/10\n    focus:outline-none\n    focus:ring-2\n    focus:ring-white/20\n    focus:ring-offset-2\n    focus:ring-offset-black\n    touch-none\n  ";
          return (0, a.jsx)("div", {
            className: "flex justify-center mt-[30px] ".concat(s),
            children: l
              ? (0, a.jsx)("a", {
                  href: l,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: n,
                  tabIndex: 0,
                  role: "button",
                  "aria-label": r,
                  children: r,
                })
              : (0, a.jsx)("button", {
                  onClick: t,
                  className: n,
                  "aria-label": r,
                  children: r,
                }),
          });
        };
      var j = s(54761),
        v = s(71028),
        w = s(48715),
        N = s(8889);
      let y = {
        container: "rounded-[8px] p-6 relative overflow-hidden w-full",
        gradientBg:
          "absolute inset-0 bg-gradient-to-br from-[#111111] to-black",
        border: "border border-[#343434]",
        boxBg: "bg-[#111111]",
        text: {
          base: "tracking-[-0.02em]",
          title: "text-white text-[16px] font-medium tracking-[-0.02em]",
          value: "text-white text-[20px] font-semibold mt-1",
          balance: "text-[#8B8B8B] text-base",
        },
        button: {
          base: "w-full h-[46px] font-semibold text-[20px] tracking-[-0.02em] transition-colors rounded-[100px]",
          primary: "bg-white hover:bg-white/90 text-black",
          secondary:
            "bg-[#111111] border border-white text-white hover:bg-white/5",
        },
        card: {
          base: "rounded-[8px] bg-[#111111] border border-[#343434]",
          gradient:
            "rounded-[12px] border border-[#343434]/50 bg-gradient-to-br from-[#111111] to-black flex flex-col items-center justify-center py-3",
          withdrawTitle:
            "text-white text-[16px] font-medium tracking-[-0.02em] text-center",
          withdrawValue:
            "text-white text-[32px] font-semibold mt-1 text-center",
        },
        form: {
          input:
            "bg-transparent text-white text-[20px] font-semibold tracking-[-0.02em] outline-none placeholder-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          inputContainer:
            "rounded-[4px] border-[1.5px] border-[#8B8B8B] flex items-center justify-between px-[15px] py-3",
        },
        tab: {
          container: "flex gap-2 mb-6",
          button:
            "flex-1 py-3 rounded-[4px] font-semibold text-base tracking-[-0.02em] transition-colors",
          active: "bg-white text-black",
          inactive: "bg-white/10 text-[#8B8B8B]",
        },
      };
      var k = s(46720),
        _ = s(57489),
        S = s(3578);
      let E = (e) => {
        let { className: t = "" } = e,
          [s, r] = (0, l.useState)(!1),
          [n, i] = (0, l.useState)(1e7),
          [o, x] = (0, l.useState)("10,000,000"),
          [m, h] = (0, l.useState)(30),
          [b, p] = (0, l.useState)(0),
          { totalUsdValue: g, loading: f } = u(),
          j = async () => {
            let { data: e, error: t } = await c
              .from("final_score_summary")
              .select("total_score")
              .single();
            return t
              ? (console.error("Error fetching total_score from Supabase:", t),
                0)
              : (null == e ? void 0 : e.total_score) || 0;
          },
          { data: v, isLoading: w } = (0, d.I)({
            queryKey: ["totalScore"],
            queryFn: j,
          }),
          N = async () => {
            let { data: e, error: t } = await c
              .from("daily_virgen_dist_total")
              .select("points_value")
              .order("id", { ascending: !1 })
              .limit(4);
            return t
              ? (console.error(
                  "Error fetching latest virgen distribution from Supabase:",
                  t
                ),
                0)
              : e && e.length > 0
              ? e.reduce((e, t) => e + (t.points_value || 0), 0) / e.length
              : 0;
          },
          { data: y, isLoading: E } = (0, d.I)({
            queryKey: ["latestVirgenDist"],
            queryFn: N,
          }),
          A = (e) => {
            switch (e) {
              case 30:
              default:
                return 0.5;
              case 90:
                return 1;
              case 180:
                return 2;
              case 360:
                return 3;
            }
          },
          F = () => {
            p(Math.round(Math.pow(n, 1.03) * A(m)));
          };
        (0, l.useEffect)(() => {
          F();
        }, [n, m]);
        let C = (e) => e.toLocaleString("en-US"),
          D = (v && 0 !== v ? b / (b + v) : 0) * (y ? 0.05 * y : 0) * 0.8;
        return (0, a.jsxs)(k.bL, {
          open: s,
          onOpenChange: r,
          children: [
            (0, a.jsx)(k.l9, {
              asChild: !0,
              children: (0, a.jsxs)("div", {
                className:
                  "relative rounded-[8px] overflow-hidden h-[60px] ".concat(t),
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "absolute inset-0 bg-[linear-gradient(120.66deg,_rgba(61,_61,_61,_0.5)_-22.11%,_rgba(17,_17,_17,_0.5)_54.79%)] backdrop-blur-[16px]",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "absolute inset-0 border border-[#343434] rounded-[8px]",
                  }),
                  (0, a.jsxs)("button", {
                    className:
                      "relative z-10 py-4 px-4 w-full h-full flex items-center justify-center transition-all hover:bg-black/20",
                    children: [
                      (0, a.jsx)(_.g, {
                        icon: S.yqK,
                        className: "mr-3 text-white text-xl",
                        size: "lg",
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "text-white text-[18px] sm:text-xl font-medium",
                        children: "Virgen Points Calculator",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsxs)(k.ZL, {
              children: [
                (0, a.jsx)(k.hJ, {
                  className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50",
                }),
                (0, a.jsxs)(k.UC, {
                  className:
                    "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#111111] border border-[#343434] rounded-[12px] p-6 w-[90vw] max-w-[500px] max-h-[85vh] overflow-auto z-50",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex justify-between items-center mb-4",
                      children: [
                        (0, a.jsx)(k.hE, {
                          className: "text-white text-xl font-medium",
                          children: "Virgen Points Calculator",
                        }),
                        (0, a.jsx)(k.bm, {
                          asChild: !0,
                          children: (0, a.jsx)("button", {
                            className:
                              "w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-[#222222]",
                            "aria-label": "Close",
                            children: (0, a.jsx)(_.g, { icon: S.yYc }),
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "text-white",
                      children: (0, a.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                              (0, a.jsx)("label", {
                                className: "block text-sm text-gray-300",
                                children: "VADER Staked",
                              }),
                              (0, a.jsx)("input", {
                                type: "text",
                                className:
                                  "w-full bg-[#1A1A1A] border border-[#343434] rounded-md p-2 text-white",
                                value: o,
                                onChange: (e) => {
                                  let t = e.target.value.replace(/[^\d]/g, ""),
                                    s = "" === t ? 0 : parseInt(t, 10);
                                  i(s), x(C(s));
                                },
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                              (0, a.jsx)("label", {
                                className: "block text-sm text-gray-300",
                                children: "Staking Duration",
                              }),
                              (0, a.jsxs)("select", {
                                className:
                                  "w-full bg-[#1A1A1A] border border-[#343434] rounded-md p-2 text-white",
                                value: m,
                                onChange: (e) => h(parseInt(e.target.value)),
                                children: [
                                  (0, a.jsx)("option", {
                                    value: 30,
                                    children: "30 days",
                                  }),
                                  (0, a.jsx)("option", {
                                    value: 90,
                                    children: "90 days",
                                  }),
                                  (0, a.jsx)("option", {
                                    value: 180,
                                    children: "180 days",
                                  }),
                                  (0, a.jsx)("option", {
                                    value: 360,
                                    children: "360 days",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "text-gray-400 text-xs mt-1",
                                children: ["Duration Multiplier: ", A(m)],
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "grid grid-cols-1 gap-4 mt-6",
                            children: (0, a.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                (0, a.jsx)("label", {
                                  className: "block text-sm text-gray-300",
                                  children: "Estimated Daily Virgen Points",
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "w-full bg-[#1A1A1A] border border-[#343434] rounded-md p-3 font-bold text-xl text-center",
                                  children: E
                                    ? "-"
                                    : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                          C(Math.floor(0.9 * D)),
                                          " - ",
                                          C(Math.floor(1.1 * D)),
                                        ],
                                      }),
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-xs text-gray-400 mt-1 italic",
                                  children:
                                    "Estimation based on the most recent Virgen Points distribution to $VADER stakers.",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var A = s(2145),
        F = s(13244),
        C = s(89769),
        D = s(93597),
        I = s(88745),
        B = s(74208),
        V = s(26715),
        P = s(63439);
      let T = () => {
        let { openConnectModal: e } = (0, P.Vx)(),
          [t, s] = (0, l.useState)(!1),
          [n, i] = (0, l.useState)(!1),
          [o, x] = (0, l.useState)(null),
          [m, h] = (0, l.useState)(void 0),
          [u, p] = (0, l.useState)(void 0),
          [g, f] = (0, l.useState)("STAKE"),
          [k, _] = (0, l.useState)(!1),
          { address: S, isConnected: T } = (0, A.F)(),
          z = (0, V.jE)(),
          { data: L, error: q } = (0, F.Q)({
            abi: I.Eu.abi,
            args: [S],
            address: w.a0,
            functionName: "getTotalUserStake",
          }),
          { data: M, error: O } = (0, F.Q)({
            abi: I.Eu.abi,
            args: [S],
            address: w.a0,
            functionName: "getInfoStake",
          }),
          R = async (e) => {
            try {
              let t = Math.floor(Date.now() / 1e3),
                s = t + 24 * e.lock_period * 3600,
                a = {
                  stake_type: 1 === e.stake_type ? "1" : "-1",
                  wallet_address: e.wallet_address,
                  staked_amount: e.staked_amount,
                  start_time: t,
                  end_time: s,
                  lock_period: e.lock_period,
                  tx_time: t,
                },
                r = await fetch("/api/stake/stakeuser", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(a),
                });
              if (!r.ok)
                throw Error("Database logging failed: ".concat(r.statusText));
              await r.json();
            } catch (e) {
              console.error("❌ Failed to log staking action:", e);
            }
          },
          { data: $ } = (0, F.Q)({
            address: w.TZ,
            abi: B.qh.abi,
            functionName: "balanceOf",
            args: [S],
          }),
          {
            writeContract: U,
            isError: W,
            error: Z,
            isPending: J,
            data: Y,
          } = (0, C.x)();
        (0, l.useEffect)(() => {
          W && x({ message: Z.message, type: "error" });
        }, [W]);
        let { isLoading: K, isSuccess: H } = (0, D.g)({
          hash: Y,
          query: { enabled: !!Y },
        });
        (0, l.useEffect)(() => {
          if (
            H &&
            (_(!0),
            x({ message: "Approve tx confirmed on chain", type: "success" }),
            m && u)
          ) {
            var e;
            let t = m
              ? m.toString().split(".")[0] +
                "." +
                ((null == (e = m.toString().split(".")[1]) ? void 0 : e[0]) ||
                  "0")
              : "0";
            Q({
              address: w.a0,
              abi: I.Pw.abi,
              functionName: "stakeV1",
              args: [
                BigInt((0, v.parseEther)(t).toString()),
                u ? BigInt(u) : BigInt(0),
              ],
            });
          }
        }, [H, m, u]);
        let {
            writeContract: Q,
            isError: X,
            error: G,
            isPending: ee,
            isSuccess: et,
            data: es,
          } = (0, C.x)(),
          {
            writeContract: ea,
            isError: er,
            error: el,
            isPending: en,
            isSuccess: ei,
            data: eo,
          } = (0, C.x)();
        (0, l.useEffect)(() => {
          X && x({ message: G.message, type: "error" }),
            et &&
              x({
                message: "Stake tx sent to chain, please wait for confirmation",
                type: "success",
              }),
            z.invalidateQueries();
        }, [X, et]);
        let {
          isLoading: ed,
          isSuccess: ec,
          isError: ex,
          error: em,
        } = (0, D.g)({ hash: es, query: { enabled: !!es && et } });
        (0, l.useEffect)(() => {
          ec &&
            (_(!1),
            z.invalidateQueries(),
            x({ message: "Stake tx confirmed on chain", type: "success" }),
            R({
              stake_type: 1,
              wallet_address: S,
              staked_amount: m ? parseFloat(m) : 0,
              lock_period: Number(u),
              transaction_hash: es,
            })),
            ex && (_(!1), x({ message: em.message, type: "error" }));
        }, [ec, ex]);
        let eh = async () => {
            if (void 0 == u)
              return void x({
                message: "Please select a staking period",
                type: "error",
              });
            let e = Math.ceil(parseFloat(m || "0")).toString();
            U({
              address: w.TZ,
              abi: B.qh.abi,
              functionName: "approve",
              args: [w.a0, BigInt((0, v.parseEther)(e).toString())],
            });
          },
          eu = async () => {
            Q({ address: w.a0, abi: I.Eu.abi, functionName: "restake" });
          },
          eb = async () => {
            if ($)
              try {
                let e = parseFloat((Number($) / 1e18).toString());
                e > 0 && h(e.toString());
              } catch (e) {
                console.error("Error setting max amount:", e);
              }
          },
          ep = async () => {
            var e;
            let t = m
              ? m.toString().split(".")[0] +
                "." +
                ((null == (e = m.toString().split(".")[1]) ? void 0 : e[0]) ||
                  "0")
              : "0";
            Q({
              address: w.a0,
              abi: I.Pw.abi,
              functionName: "stakeV1",
              args: [
                BigInt((0, v.parseEther)(t).toString()),
                u ? BigInt(u) : BigInt(0),
              ],
            });
          },
          eg = async () => {
            ea({ address: w.a0, abi: I.Eu.abi, functionName: "unstake" });
          },
          {
            isLoading: ef,
            isSuccess: ej,
            isError: ev,
            error: ew,
          } = (0, D.g)({ hash: eo, query: { enabled: !!eo && ei } });
        (0, l.useEffect)(() => {
          ej &&
            x({ message: "Withdraw tx confirmed on chain", type: "success" }),
            ev && x({ message: ew.message, type: "error" });
        }, [ej, ev]);
        let eN = (e) =>
            null == e ? "0" : Math.floor(e).toLocaleString("en-US"),
          ey = async () => {
            if (!S) return null;
            let { data: e, error: t } = await c
              .from("final_points_manual")
              .select("wallet, final_score, new_remaining_days")
              .eq("wallet", S.toLowerCase())
              .single();
            return t
              ? (console.error("Error fetching user data from Supabase:", t),
                null)
              : e;
          },
          { data: ek } = (0, d.I)({
            queryKey: ["userData", S],
            queryFn: ey,
            enabled: !!S,
          });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            o &&
              (0, a.jsx)(N.F, {
                message: null == o ? void 0 : o.message,
                onClose: () => x(null),
                duration: 5e3,
                type: null == o ? void 0 : o.type,
                autoClose: !0,
              }),
            (0, a.jsxs)("div", {
              className: (0, r.cn)(y.container, "min-h-0"),
              children: [
                (0, a.jsx)("div", { className: y.gradientBg }),
                (0, a.jsx)("div", {
                  className: (0, r.cn)(
                    "absolute inset-0",
                    y.border,
                    "rounded-[8px]"
                  ),
                }),
                (0, a.jsxs)("div", {
                  className: "relative z-10 min-h-0 flex flex-col h-full",
                  children: [
                    (0, a.jsx)("div", {
                      className: y.tab.container,
                      children: ["STAKE", "WITHDRAW"].map((e) =>
                        (0, a.jsx)(
                          "button",
                          {
                            onClick: () => f(e),
                            className: (0, r.cn)(
                              y.tab.button,
                              g === e ? y.tab.active : y.tab.inactive
                            ),
                            children: e,
                          },
                          e
                        )
                      ),
                    }),
                    "STAKE" === g
                      ? (0, a.jsxs)("div", {
                          className: "space-y-4",
                          children: [
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("label", {
                                  className: (0, r.cn)(
                                    y.text.title,
                                    "mb-[10px] block"
                                  ),
                                  children: "Amount",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "relative",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: (0, r.cn)(
                                        y.form.inputContainer,
                                        y.boxBg,
                                        (null == o ? void 0 : o.type) ===
                                          "error" && "border-red-500/50"
                                      ),
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "flex items-center gap-3 flex-1",
                                          children: [
                                            (0, a.jsx)("img", {
                                              src: "/vader-amount-input.svg",
                                              alt: "Vader",
                                              className: "w-8 h-8",
                                            }),
                                            (0, a.jsx)("input", {
                                              type: "number",
                                              value: m,
                                              onFocus: () => h(void 0),
                                              onChange: (e) => {
                                                h(e.target.value);
                                              },
                                              onWheel: (e) =>
                                                e.currentTarget.blur(),
                                              className: (0, r.cn)(
                                                "w-full",
                                                y.form.input
                                              ),
                                              placeholder: "0.0",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("button", {
                                          onClick: eb,
                                          className:
                                            "text-white text-[20px] font-semibold tracking-[-0.02em] hover:text-white/90 transition-colors",
                                          children: "Max",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "absolute right-0 -bottom-8",
                                      children: $
                                        ? (0, a.jsxs)("span", {
                                            className: y.text.balance,
                                            children: [
                                              "Balance: ",
                                              (
                                                Number($) / 1e18
                                              ).toLocaleString(),
                                              " $VADER",
                                            ],
                                          })
                                        : (0, a.jsx)("div", {
                                            className: y.text.balance,
                                            children: "Balance: N/A",
                                          }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex items-center gap-2 mb-4 mt-8",
                                  children: [
                                    (0, a.jsx)("label", {
                                      className: y.text.title,
                                      children: "Staking Period",
                                    }),
                                    (0, a.jsx)(j.Kq, {
                                      delayDuration: 0,
                                      children: (0, a.jsxs)(j.bL, {
                                        open: t,
                                        onOpenChange: s,
                                        children: [
                                          (0, a.jsx)(j.l9, {
                                            asChild: !0,
                                            children: (0, a.jsx)("button", {
                                              className:
                                                "w-5 h-5 rounded-full bg-[#1A1A1A] flex items-center justify-center ml-1",
                                              onClick: (e) => {
                                                e.preventDefault(),
                                                  e.stopPropagation(),
                                                  s(!t);
                                              },
                                              children: (0, a.jsx)(b.default, {
                                                src: "/hover-tooltip-white.svg",
                                                alt: "Info",
                                                width: 18,
                                                height: 18,
                                              }),
                                            }),
                                          }),
                                          (0, a.jsx)(j.ZL, {
                                            children: (0, a.jsxs)(j.UC, {
                                              className:
                                                "bg-[#1A1A1A] p-3 rounded text-white text-[16px] max-w-[90vw] sm:max-w-[300px] z-50 text-center break-words",
                                              sideOffset: 5,
                                              side: "top",
                                              align: "center",
                                              alignOffset: 0,
                                              collisionPadding: 10,
                                              onPointerDownOutside: () => s(!1),
                                              children: [
                                                "During the staking period your tokens will be locked and you will be eligible to earn Virgen Points.",
                                                (0, a.jsx)(j.i3, {
                                                  className: "fill-[#1A1A1A]",
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: "grid grid-cols-4 gap-2",
                                  children: ["30", "90", "180", "360"].map(
                                    (e) => {
                                      let t = (null == M ? void 0 : M[4])
                                          ? Number(M[4])
                                          : 0,
                                        s = Number(e),
                                        l = !T || (t > 0 && s < t);
                                      return (0, a.jsxs)(
                                        "button",
                                        {
                                          onClick: () => p(e),
                                          disabled: l,
                                          className: (0, r.cn)(
                                            "py-2 px-3 rounded-[50px] text-[18px] font-semibold tracking-[-0.02em] transition-colors",
                                            u === e
                                              ? "bg-white text-black"
                                              : l
                                              ? "opacity-50 cursor-not-allowed"
                                              : (0, r.cn)(y.boxBg, "text-white")
                                          ),
                                          children: [
                                            e,
                                            (0, a.jsx)("span", {
                                              className: "sm:inline hidden",
                                              children: " Days",
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "sm:hidden inline",
                                              children: "D",
                                            }),
                                          ],
                                        },
                                        e
                                      );
                                    }
                                  ),
                                }),
                              ],
                            }),
                            T
                              ? !m || 0 >= parseFloat(m)
                                ? (0, a.jsx)("button", {
                                    disabled: !0,
                                    className: (0, r.cn)(
                                      y.button.base,
                                      y.button.primary,
                                      "disabled:opacity-50 disabled:cursor-not-allowed"
                                    ),
                                    children: "Enter Amount",
                                  })
                                : k
                                ? (0, a.jsx)("div", {
                                    className: "space-y-2",
                                    children: (0, a.jsx)("button", {
                                      onClick: ep,
                                      disabled: ee || ed,
                                      className: (0, r.cn)(
                                        y.button.base,
                                        y.button.primary,
                                        "disabled:opacity-50 disabled:cursor-not-allowed"
                                      ),
                                      children:
                                        ee || ed
                                          ? "Staking..."
                                          : "Stake $VADER",
                                    }),
                                  })
                                : (0, a.jsx)("div", {
                                    className: "space-y-2",
                                    children: (0, a.jsx)("button", {
                                      onClick: eh,
                                      disabled: J || K,
                                      className: (0, r.cn)(
                                        y.button.base,
                                        y.button.primary,
                                        "disabled:opacity-50 disabled:cursor-not-allowed"
                                      ),
                                      children:
                                        J || K
                                          ? "Approving..."
                                          : "Approve $VADER",
                                    }),
                                  })
                              : (0, a.jsx)("button", {
                                  disabled: ee,
                                  onClick: e,
                                  className: (0, r.cn)(
                                    y.button.base,
                                    y.button.primary,
                                    "disabled:opacity-50 disabled:cursor-not-allowed"
                                  ),
                                  children: "Connect Wallet",
                                }),
                            (() => {
                              var e, t;
                              return (0, a.jsxs)("div", {
                                className: "grid grid-cols-2 gap-3 mt-4",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "relative rounded-[6px] overflow-hidden bg-[#111111]/80 border border-[#343434]/50 p-3",
                                    children: (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-col items-center justify-center text-center",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "text-white/70 text-sm font-medium mb-1 flex items-center gap-1",
                                          children: [
                                            "Staked $VADER",
                                            (0, a.jsx)(j.Kq, {
                                              delayDuration: 0,
                                              children: (0, a.jsxs)(j.bL, {
                                                open: n,
                                                onOpenChange: i,
                                                children: [
                                                  (0, a.jsx)(j.l9, {
                                                    asChild: !0,
                                                    children: (0, a.jsx)(
                                                      "button",
                                                      {
                                                        className:
                                                          "w-4 h-4 rounded-full bg-[#1A1A1A] flex items-center justify-center",
                                                        onClick: (e) => {
                                                          e.preventDefault(),
                                                            e.stopPropagation(),
                                                            i(!n);
                                                        },
                                                        children: (0, a.jsx)(
                                                          b.default,
                                                          {
                                                            src: "/hover-tooltip-white.svg",
                                                            alt: "Info",
                                                            width: 14,
                                                            height: 14,
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)(j.ZL, {
                                                    children: (0, a.jsxs)(
                                                      j.UC,
                                                      {
                                                        className:
                                                          "bg-[#1A1A1A] p-3 rounded text-white text-[14px] max-w-[90vw] sm:max-w-[280px] z-50 text-center break-words",
                                                        sideOffset: 5,
                                                        side: "top",
                                                        align: "center",
                                                        alignOffset: 0,
                                                        collisionPadding: 10,
                                                        onPointerDownOutside:
                                                          () => i(!1),
                                                        children: [
                                                          "If you want to stake more VADER, this is possible but it will extend your original staking commitment duration as the initial staking commitment date will be replaced by today! Additionally, the commitment duration chosen cannot be shorter than the original commitment duration.",
                                                          (0, a.jsx)(j.i3, {
                                                            className:
                                                              "fill-[#1A1A1A]",
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "text-white text-lg font-bold",
                                          children:
                                            void 0 !== L
                                              ? eN(Number(L) / 1e18)
                                              : "0",
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "relative rounded-[6px] overflow-hidden bg-[#111111]/80 border border-[#343434]/50 p-3",
                                    children: (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-col items-center justify-center text-center",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className:
                                            "text-white/70 text-sm font-medium mb-1",
                                          children: "Time to Withdraw",
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "text-white text-lg font-bold",
                                          children: [
                                            eN(
                                              null !=
                                                (e =
                                                  null == ek
                                                    ? void 0
                                                    : ek.new_remaining_days)
                                                ? e
                                                : 0
                                            ),
                                            (0, a.jsx)("span", {
                                              className: "text-sm ml-1",
                                              children: [1, 0].includes(
                                                null !=
                                                  (t =
                                                    null == ek
                                                      ? void 0
                                                      : ek.new_remaining_days)
                                                  ? t
                                                  : 0
                                              )
                                                ? "Day"
                                                : "Days",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              });
                            })(),
                          ],
                        })
                      : (() => {
                          var e;
                          let t =
                            (null !=
                            (e = null == ek ? void 0 : ek.new_remaining_days)
                              ? e
                              : 1) === 0;
                          return (0, a.jsxs)("div", {
                            className:
                              "flex flex-col justify-center h-full space-y-5 py-6",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: (0, r.cn)(y.card.gradient),
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: (0, r.cn)(
                                          y.card.withdrawTitle,
                                          "sm:text-xl"
                                        ),
                                        children: "Staked $VADER",
                                      }),
                                      (0, a.jsx)("div", {
                                        className: y.card.withdrawValue,
                                        children: (
                                          Number(L) / 1e18
                                        ).toLocaleString("en-US", {
                                          minimumFractionDigits: 2,
                                          maximumFractionDigits: 2,
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: (0, r.cn)(y.card.gradient),
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: (0, r.cn)(
                                          y.card.withdrawTitle,
                                          "sm:text-xl"
                                        ),
                                        children: "Lock Period",
                                      }),
                                      (0, a.jsx)("div", {
                                        className: y.card.withdrawValue,
                                        children: (null == M ? void 0 : M[2])
                                          ? "".concat(
                                              null == M ? void 0 : M[4],
                                              " Days"
                                            )
                                          : "N/A",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "grid grid-cols-2 gap-4 mt-6",
                                children: [
                                  (0, a.jsx)("button", {
                                    onClick: eu,
                                    disabled: ee || ed || !t,
                                    className: (0, r.cn)(
                                      y.button.base,
                                      y.button.primary,
                                      "disabled:opacity-50 disabled:cursor-not-allowed",
                                      "text-[18px] sm:text-xl"
                                    ),
                                    title: t
                                      ? ""
                                      : "You can only extend staking when Time to Withdraw is 0 days",
                                    children: "Extend Staking",
                                  }),
                                  (0, a.jsx)("button", {
                                    onClick: eg,
                                    disabled: en || ef,
                                    className: (0, r.cn)(
                                      y.button.base,
                                      y.button.secondary,
                                      "disabled:opacity-50 disabled:cursor-not-allowed",
                                      "text-[18px] sm:text-xl"
                                    ),
                                    children: "Withdraw",
                                  }),
                                ],
                              }),
                            ],
                          });
                        })(),
                    T &&
                      "WITHDRAW" == g &&
                      (0, a.jsxs)("p", {
                        className:
                          "text-sm text-gray-400 mt-4 flex items-start gap-1",
                        children: [
                          (0, a.jsx)(b.default, {
                            src: "/white-info.svg",
                            alt: "Info",
                            width: 16,
                            height: 16,
                            className: "pt-[0.8px]",
                          }),
                          (0, a.jsx)("span", {
                            className: "flex items-center gap-2",
                            children:
                              "To extend your staking period, it must first expire (Time to Withdraw: 0 day). If you'd like to extend before the current period ends, visit the STAKE tab and stake at least 1 VADER with your preferred staking period.",
                          }),
                        ],
                      }),
                    (0, a.jsx)("div", {
                      className: "mt-4",
                      children: (0, a.jsx)(E, {}),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var z = s(6874),
        L = s.n(z);
      let q = [1e8, 25e7, 55e7, 7e8, 85e7, 1e9, 115e7, 13e8, 145e7],
        M = [25e6, 5e7, 1e8, 3e8, 5e8];
      function O(e) {
        return e.toLocaleString("en-US");
      }
      let R = (e) => {
          let { className: t = "" } = e,
            [s, r] = (0, l.useState)(!1),
            [n, i] = (0, l.useState)(1e5),
            [o, x] = (0, l.useState)("100,000"),
            { data: m = [], isLoading: h } = (0, d.I)({
              queryKey: ["historicalPoints"],
              queryFn: async () => {
                let { data: e, error: t } = await c
                  .from("dune_historical_points")
                  .select("ticker, total_points")
                  .order("total_points", { ascending: !1 });
                if (t)
                  throw (
                    (console.error("Error fetching historical points:", t),
                    Error(t.message))
                  );
                return e;
              },
            }),
            [u, b] = (0, l.useState)(!1);
          return (0, a.jsxs)(k.bL, {
            open: s,
            onOpenChange: r,
            children: [
              (0, a.jsx)(k.l9, {
                asChild: !0,
                children: (0, a.jsxs)("div", {
                  className:
                    "relative rounded-[8px] overflow-hidden h-[60px] ".concat(
                      t
                    ),
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "absolute inset-0 bg-[linear-gradient(120.66deg,_rgba(61,_61,_61,_0.5)_-22.11%,_rgba(17,_17,_17,_0.5)_54.79%)] backdrop-blur-[16px]",
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "absolute inset-0 border border-[#343434] rounded-[8px]",
                    }),
                    (0, a.jsxs)("button", {
                      className:
                        "relative z-10 py-4 px-4 w-full h-full flex items-center justify-center transition-all hover:bg-black/20",
                      children: [
                        (0, a.jsx)(_.g, {
                          icon: S.w97,
                          className: "mr-3 text-white text-xl",
                          size: "lg",
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "text-white text-[18px] sm:text-xl font-medium",
                          children: "Allocation Calculator",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)(k.ZL, {
                children: [
                  (0, a.jsx)(k.hJ, {
                    className:
                      "fixed inset-0 bg-black/80 backdrop-blur-sm z-50",
                  }),
                  (0, a.jsxs)(k.UC, {
                    className:
                      "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#111111] border border-[#343434] rounded-[12px] p-6 w-[98vw] max-w-[1000px] max-h-[85vh] overflow-auto z-50",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                          (0, a.jsx)("div", { className: "w-8 h-8" }),
                          (0, a.jsx)(k.hE, {
                            className:
                              "text-white text-lg font-bold flex-1 text-center",
                            children: "Genesis Allocation Calculator",
                          }),
                          (0, a.jsx)(k.bm, {
                            asChild: !0,
                            children: (0, a.jsx)("button", {
                              className:
                                "w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-[#222222]",
                              "aria-label": "Close",
                              children: (0, a.jsx)(_.g, { icon: S.yYc }),
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "flex flex-col gap-2 mb-6",
                        children: (0, a.jsxs)("div", {
                          className:
                            "flex flex-col lg:flex-row lg:items-center gap-2",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "flex flex-col sm:flex-row sm:items-center gap-2",
                              children: [
                                (0, a.jsx)("label", {
                                  className:
                                    "text-white text-base font-medium mr-4 min-w-[120px]",
                                  children: "Points You Bid",
                                }),
                                (0, a.jsx)("input", {
                                  type: "text",
                                  className:
                                    "bg-[#1A1A1A] border border-[#343434] rounded-md p-2 text-white w-[180px] text-right font-bold text-lg focus:outline-none focus:ring-2 focus:ring-[#4DF4BE] transition-all",
                                  value: o,
                                  onChange: (e) => {
                                    let t = e.target.value.replace(
                                        /[^\d]/g,
                                        ""
                                      ),
                                      s = "" === t ? 0 : parseInt(t, 10);
                                    i(s), x(O(s));
                                  },
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className: "text-gray-400 text-sm lg:ml-4 flex-1",
                              children:
                                "This table shows you the $ value of your allocation based on (i) points you bid, (ii) total points bid, (iii) FDV of that Agent.",
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "flex justify-end mb-2",
                        children: (0, a.jsxs)("button", {
                          className:
                            "relative overflow-hidden px-4 py-2 text-sm text-white rounded-md transition-all hover:shadow-lg group",
                          onClick: () => b(!0),
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "absolute inset-0 bg-[linear-gradient(120.66deg,_rgba(61,_61,_61,_0.8)_-22.11%,_rgba(17,_17,_17,_0.8)_54.79%)] backdrop-blur-[16px]",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "absolute inset-0 border border-[#343434] group-hover:border-[#454545] rounded-md transition-colors",
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "relative z-10 flex items-center gap-2",
                              children: [
                                (0, a.jsx)(_.g, {
                                  icon: S.Yj9,
                                  className: "text-xs",
                                }),
                                (0, a.jsx)("span", {
                                  children: "Historical Points Bid Per Deal",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "overflow-x-auto scrollbar-thin scrollbar-thumb-[#343434] scrollbar-track-transparent",
                        children: (0, a.jsxs)("table", {
                          className:
                            "w-full min-w-[700px] border-separate border-spacing-y-[6px]",
                          role: "table",
                          children: [
                            (0, a.jsxs)("thead", {
                              children: [
                                (0, a.jsxs)("tr", {
                                  className:
                                    "text-white text-xs sm:text-sm font-bold bg-[#232323]",
                                  children: [
                                    (0, a.jsx)("th", {
                                      className:
                                        "text-left px-3 py-2 rounded-tl-md border border-[#343434] bg-[#232323] sticky left-0 z-10",
                                      children: "$ Value of Your Allocation",
                                    }),
                                    (0, a.jsx)("th", {
                                      colSpan: M.length,
                                      className:
                                        "text-center px-3 py-2 rounded-tr-md border border-[#343434] bg-[#232323]",
                                      children: "Agent FDV",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("tr", {
                                  className:
                                    "text-white text-xs sm:text-sm font-bold bg-[#232323]",
                                  children: [
                                    (0, a.jsx)("th", {
                                      className:
                                        "text-left px-3 py-2 rounded-bl-md border border-[#343434] bg-[#232323] sticky left-0 z-10",
                                      children: "Total Points Bid ",
                                    }),
                                    M.map((e, t) =>
                                      (0, a.jsx)(
                                        "th",
                                        {
                                          className:
                                            "text-center px-3 py-2 border border-[#343434] bg-[#232323] ".concat(
                                              t === M.length - 1
                                                ? "rounded-br-md"
                                                : ""
                                            ),
                                          children: "$".concat(O(e)),
                                        },
                                        e
                                      )
                                    ),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)("tbody", {
                              children: q.map((e, t) =>
                                (0, a.jsxs)(
                                  "tr",
                                  {
                                    className:
                                      "bg-[#181818] hover:bg-[#232323] transition-colors",
                                    children: [
                                      (0, a.jsx)("td", {
                                        className:
                                          "font-semibold text-xs sm:text-sm px-3 py-2 border border-[#343434] sticky left-0 z-10 bg-[#232323] rounded-l-md",
                                        children: O(e),
                                      }),
                                      M.map((t, s) => {
                                        let r = 0;
                                        return (
                                          n &&
                                            e &&
                                            (r =
                                              (Math.min((n / e) * 42425, 566) /
                                                113e3) *
                                              t),
                                          (0, a.jsx)(
                                            "td",
                                            {
                                              className:
                                                "text-center text-xs sm:text-sm px-3 py-2 border border-[#343434] ".concat(
                                                  s === M.length - 1
                                                    ? "rounded-r-md"
                                                    : ""
                                                ),
                                              children:
                                                "$" +
                                                Math.round(r).toLocaleString(
                                                  "en-US",
                                                  { maximumFractionDigits: 0 }
                                                ),
                                            },
                                            t
                                          )
                                        );
                                      }),
                                    ],
                                  },
                                  e
                                )
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "mt-4 text-gray-400 text-xs",
                        children: [
                          (0, a.jsx)("span", {
                            className: "font-semibold text-white",
                            children: "Calculation:",
                          }),
                          " ",
                          "(Points You Bid / Total Points Bid) \xd7 Agent FDV",
                        ],
                      }),
                      u &&
                        (0, a.jsxs)("div", {
                          className:
                            "fixed inset-0 z-[60] flex items-center justify-center",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "fixed inset-0 bg-black/80 backdrop-blur-sm",
                              onClick: () => b(!1),
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "relative bg-[#111111] border border-[#343434] rounded-[12px] p-6 w-[98vw] max-w-[700px] max-h-[60vh] overflow-hidden shadow-xl z-10",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex justify-between items-center mb-4",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "text-white text-lg font-bold",
                                      children: "Historical Points Bid",
                                    }),
                                    (0, a.jsx)("button", {
                                      className:
                                        "w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-[#222222]",
                                      "aria-label": "Close",
                                      onClick: () => b(!1),
                                      children: (0, a.jsx)(_.g, {
                                        icon: S.yYc,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[#343434] scrollbar-track-transparent max-h-[45vh]",
                                  children: [
                                    h &&
                                      (0, a.jsx)("div", {
                                        className:
                                          "flex justify-center items-center p-8",
                                        children: (0, a.jsx)("div", {
                                          className:
                                            "animate-spin rounded-full h-8 w-8 border-t-2 border-white",
                                        }),
                                      }),
                                    !h &&
                                      (0, a.jsxs)(a.Fragment, {
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: "block sm:hidden",
                                            children: (0, a.jsxs)("table", {
                                              className:
                                                "w-full min-w-[180px] border-separate border-spacing-y-[4px] text-white text-sm bg-transparent",
                                              children: [
                                                (0, a.jsx)("thead", {
                                                  children: (0, a.jsxs)("tr", {
                                                    className:
                                                      "bg-[#232323] text-xs font-bold",
                                                    children: [
                                                      (0, a.jsx)("th", {
                                                        className:
                                                          "text-left px-3 py-2 rounded-l-md border border-[#343434] bg-[#232323]",
                                                        children: "Ticker",
                                                      }),
                                                      (0, a.jsx)("th", {
                                                        className:
                                                          "text-right px-3 py-2 rounded-r-md border border-[#343434] bg-[#232323]",
                                                        children: "Points Bid",
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                (0, a.jsx)("tbody", {
                                                  children: m.map((e) =>
                                                    (0, a.jsxs)(
                                                      "tr",
                                                      {
                                                        className:
                                                          "bg-[#181818] hover:bg-[#232323] transition-colors",
                                                        children: [
                                                          (0, a.jsx)("td", {
                                                            className:
                                                              "px-3 py-2 border border-[#343434] rounded-l-md font-semibold",
                                                            children: e.ticker,
                                                          }),
                                                          (0, a.jsx)("td", {
                                                            className:
                                                              "px-3 py-2 border border-[#343434] rounded-r-md text-right",
                                                            children: O(
                                                              e.total_points
                                                            ),
                                                          }),
                                                        ],
                                                      },
                                                      e.ticker
                                                    )
                                                  ),
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, a.jsx)("div", {
                                            className:
                                              "hidden sm:flex flex-row gap-4 w-full",
                                            children: [0, 1].map((e) =>
                                              (0, a.jsxs)(
                                                "table",
                                                {
                                                  className:
                                                    "w-1/2 min-w-[180px] border-separate border-spacing-y-[4px] text-white text-base bg-transparent",
                                                  children: [
                                                    (0, a.jsx)("thead", {
                                                      children: (0, a.jsxs)(
                                                        "tr",
                                                        {
                                                          className:
                                                            "bg-[#232323] text-sm font-bold",
                                                          children: [
                                                            (0, a.jsx)("th", {
                                                              className:
                                                                "text-left px-3 py-3 rounded-l-md border border-[#343434] bg-[#232323]",
                                                              children:
                                                                "Ticker",
                                                            }),
                                                            (0, a.jsx)("th", {
                                                              className:
                                                                "text-right px-3 py-3 rounded-r-md border border-[#343434] bg-[#232323]",
                                                              children:
                                                                "Points Bid",
                                                            }),
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)("tbody", {
                                                      children: m
                                                        .slice(
                                                          e *
                                                            Math.ceil(
                                                              m.length / 2
                                                            ),
                                                          (e + 1) *
                                                            Math.ceil(
                                                              m.length / 2
                                                            )
                                                        )
                                                        .map((e) =>
                                                          (0, a.jsxs)(
                                                            "tr",
                                                            {
                                                              className:
                                                                "bg-[#181818] hover:bg-[#232323] transition-colors",
                                                              children: [
                                                                (0, a.jsx)(
                                                                  "td",
                                                                  {
                                                                    className:
                                                                      "px-4 py-3 border border-[#343434] rounded-l-md font-semibold",
                                                                    children:
                                                                      e.ticker,
                                                                  }
                                                                ),
                                                                (0, a.jsx)(
                                                                  "td",
                                                                  {
                                                                    className:
                                                                      "px-4 py-3 border border-[#343434] rounded-r-md text-right",
                                                                    children: O(
                                                                      e.total_points
                                                                    ),
                                                                  }
                                                                ),
                                                              ],
                                                            },
                                                            e.ticker
                                                          )
                                                        ),
                                                    }),
                                                  ],
                                                },
                                                e
                                              )
                                            ),
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        $ = (e) =>
          e >= 1e6
            ? "$".concat((e / 1e6).toFixed(1), "m")
            : e >= 1e3
            ? "$".concat(Math.round(e / 1e3), "k")
            : "$".concat(e),
        U = async () => {
          let e = await fetch("https://vaderai.ai/api/genesis-portfolio");
          if (!e.ok) throw Error("Failed to fetch portfolio data");
          return e.json();
        },
        W = (e) => {
          let { onCalculatorClick: t } = e,
            [s, r] = (0, l.useState)(!1),
            [n, i] = (0, l.useState)(!1),
            {
              data: o = [],
              isLoading: c,
              error: x,
            } = (0, d.I)({ queryKey: ["genesis-portfolio"], queryFn: U });
          if (
            ((0, l.useEffect)(() => {
              r(!0);
            }, []),
            !s)
          )
            return (0, a.jsxs)("div", {
              className: "rounded-[8px] p-6 relative overflow-hidden",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-br from-[#111111] to-black",
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute inset-0 border border-[#343434] rounded-[8px]",
                }),
                (0, a.jsx)("div", {
                  className:
                    "relative z-10 flex justify-center items-center h-[400px]",
                  children: (0, a.jsx)("div", { className: "h-8 w-8" }),
                }),
              ],
            });
          let m = Array.from({ length: 8 }),
            h = (e) => {
              let { className: t = "" } = e;
              return (0, a.jsx)("div", {
                className:
                  "bg-[#232323] rounded h-5 w-full animate-pulse ".concat(t),
              });
            };
          return (0, a.jsxs)("div", {
            className: "rounded-[8px] p-6 relative overflow-hidden w-full",
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute inset-0 bg-gradient-to-br from-[#111111] to-black",
              }),
              (0, a.jsx)("div", {
                className:
                  "absolute inset-0 border border-[#343434] rounded-[8px]",
              }),
              (0, a.jsxs)("div", {
                className: "relative z-10",
                children: [
                  (0, a.jsx)(L(), {
                    href: "https://app.virtuals.io/geneses",
                    target: "_blank",
                    children: (0, a.jsx)("h2", {
                      className:
                        "text-white text-lg sm:text-xl font-bold mb-6 text-center",
                      children: "Virtuals Genesis Track Record",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 text-white",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "text-center",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-center justify-center",
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-sm text-gray-400",
                                children: "Portfolio Return:",
                              }),
                              (0, a.jsx)(j.Kq, {
                                delayDuration: 0,
                                children: (0, a.jsxs)(j.bL, {
                                  open: n,
                                  onOpenChange: i,
                                  children: [
                                    (0, a.jsx)(j.l9, {
                                      asChild: !0,
                                      children: (0, a.jsx)("button", {
                                        className:
                                          "w-5 h-5 rounded-full bg-[#1A1A1A] flex items-center justify-center ml-1",
                                        onClick: (e) => {
                                          e.preventDefault(),
                                            e.stopPropagation(),
                                            i(!n);
                                        },
                                        children: (0, a.jsx)(b.default, {
                                          src: "/hover-tooltip-white.svg",
                                          alt: "Info",
                                          width: 18,
                                          height: 18,
                                        }),
                                      }),
                                    }),
                                    (0, a.jsx)(j.ZL, {
                                      children: (0, a.jsxs)(j.UC, {
                                        className:
                                          "bg-[#1A1A1A] p-3 rounded text-white text-[16px] max-w-[90vw] sm:max-w-[300px] z-50 text-center break-words",
                                        sideOffset: 5,
                                        side: "top",
                                        align: "center",
                                        alignOffset: 0,
                                        collisionPadding: 10,
                                        onPointerDownOutside: () => i(!1),
                                        children: [
                                          "Equally Weighted",
                                          (0, a.jsx)(j.i3, {
                                            className: "fill-[#1A1A1A]",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "text-lg sm:text-xl font-bold text-green-500",
                            children: c
                              ? (0, a.jsx)(h, { className: "w-12 mx-auto" })
                              : "".concat(
                                  o.length
                                    ? Math.round(
                                        o.reduce(
                                          (e, t) => e + parseFloat(t.roi),
                                          0
                                        ) / o.length
                                      )
                                    : 0,
                                  "x"
                                ),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "text-center",
                        children: [
                          (0, a.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: "Days Since:",
                          }),
                          (0, a.jsx)("div", {
                            className: "text-lg sm:text-xl font-bold",
                            children: c
                              ? (0, a.jsx)(h, { className: "w-10 mx-auto" })
                              : (() => {
                                  let e = new Date("2025-04-18");
                                  return Math.max(
                                    0,
                                    Math.floor(
                                      (new Date().getTime() - e.getTime()) /
                                        864e5
                                    )
                                  );
                                })(),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "text-center",
                        children: [
                          (0, a.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: "Deal Count:",
                          }),
                          (0, a.jsx)("div", {
                            className: "text-lg sm:text-xl font-bold",
                            children: c
                              ? (0, a.jsx)(h, { className: "w-10 mx-auto" })
                              : o.length,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "w-full",
                    children: [
                      (0, a.jsx)("div", {
                        className: "sticky top-0 w-full",
                        children: (0, a.jsx)("table", {
                          className: "w-full table-fixed",
                          children: (0, a.jsx)("thead", {
                            children: (0, a.jsxs)("tr", {
                              className:
                                "text-white text-sm sm:text-base font-medium border-b border-[#343434]",
                              children: [
                                (0, a.jsx)("th", {
                                  className: "text-left pb-3 w-[25%]",
                                  children: "Ticker",
                                }),
                                (0, a.jsx)("th", {
                                  className: "text-center pb-3 w-[25%]",
                                  children: "ROI",
                                }),
                                (0, a.jsx)("th", {
                                  className: "text-center pb-3 w-[25%]",
                                  children: "FDV",
                                }),
                                (0, a.jsx)("th", {
                                  className: "text-center pb-3 w-[25%]",
                                  children: "Entry FDV",
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "max-h-[260px] overflow-y-auto overflow-x-hidden custom-scrollbar",
                        children: (0, a.jsx)("table", {
                          className:
                            "w-full table-fixed border-separate border-spacing-y-[8px] sm:border-spacing-y-[10px]",
                          children: (0, a.jsx)("tbody", {
                            children: c
                              ? m.map((e, t) =>
                                  (0, a.jsxs)(
                                    "tr",
                                    {
                                      className: "h-[28px] sm:h-[30px]",
                                      children: [
                                        (0, a.jsx)("td", {
                                          className: "pl-2 w-[25%]",
                                          children: (0, a.jsx)(h, {}),
                                        }),
                                        (0, a.jsx)("td", {
                                          className: "text-center w-[25%]",
                                          children: (0, a.jsx)(h, {}),
                                        }),
                                        (0, a.jsx)("td", {
                                          className: "text-center w-[25%]",
                                          children: (0, a.jsx)(h, {}),
                                        }),
                                        (0, a.jsx)("td", {
                                          className: "text-center w-[25%]",
                                          children: (0, a.jsx)(h, {}),
                                        }),
                                      ],
                                    },
                                    t
                                  )
                                )
                              : x
                              ? (0, a.jsx)("tr", {
                                  children: (0, a.jsx)("td", {
                                    colSpan: 4,
                                    className: "text-center text-red-500 py-6",
                                    children: "Error loading portfolio data.",
                                  }),
                                })
                              : 0 === o.length
                              ? (0, a.jsx)("tr", {
                                  children: (0, a.jsx)("td", {
                                    colSpan: 4,
                                    className: "text-center text-gray-400 py-6",
                                    children: "No data found.",
                                  }),
                                })
                              : o.map((e, t) =>
                                  (0, a.jsxs)(
                                    "tr",
                                    {
                                      className:
                                        "group relative h-[28px] sm:h-[30px] hover:bg-[#343434]/20 transition-colors",
                                      children: [
                                        (0, a.jsx)("td", {
                                          className:
                                            "pl-2 w-[25%] text-white font-medium text-sm sm:text-base",
                                          children: e.ticker,
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "text-center w-[25%] text-green-500 font-bold text-sm sm:text-base",
                                          children: e.roi
                                            ? "".concat(
                                                parseFloat(e.roi).toFixed(1),
                                                "x"
                                              )
                                            : "-",
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "text-center w-[25%] text-white text-sm sm:text-base",
                                          children: e.current_fdv
                                            ? $(Number(e.current_fdv))
                                            : "-",
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "text-center w-[25%] text-gray-400 text-sm sm:text-base",
                                          children: e.entry_fdv
                                            ? $(Number(e.entry_fdv))
                                            : "-",
                                        }),
                                      ],
                                    },
                                    e.id || t
                                  )
                                ),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "mt-6",
                    children: (0, a.jsx)(R, {}),
                  }),
                ],
              }),
            ],
          });
        };
      var Z = s(3617),
        J = s(26279),
        Y = s(26440);
      let K = [
          "#4DF4BE",
          "#60A5FA",
          "#F472B6",
          "#FBBF24",
          "#A78BFA",
          "#F87171",
          "#34D399",
          "#F59E42",
          "#818CF8",
          "#F43F5E",
          "#10B981",
          "#3B82F6",
          "#8B5CF6",
          "#F59E0B",
          "#EC4899",
          "#6366F1",
          "#14B8A6",
          "#F97316",
          "#84CC16",
          "#06B6D4",
        ],
        H = () => {
          let [e, t] = (0, l.useState)({ data: [], agents: [], agentInfo: [] }),
            [s, r] = (0, l.useState)(!0),
            [n, i] = (0, l.useState)(null),
            [o, d] = (0, l.useState)(null),
            [c, x] = (0, l.useState)(null),
            [m, h] = (0, l.useState)({ x: 0, y: 0 }),
            [u, b] = (0, l.useState)(null);
          (0, l.useEffect)(() => {
            (async () => {
              try {
                r(!0);
                let e = await fetch("/api/rewards-data");
                if (!e.ok) throw Error("Failed to fetch rewards data");
                let s = await e.json();
                t(s);
              } catch (e) {
                console.error("Error fetching rewards data:", e), i(e.message);
              } finally {
                r(!1);
              }
            })();
          }, []),
            (0, l.useEffect)(() => {
              let e = (e) => {
                let t = e.target;
                t.closest(".marquee-container") ||
                  t.closest(".calendar-container") ||
                  (b(null), d(null), x(null));
              };
              if (u)
                return (
                  document.addEventListener("click", e),
                  () => document.removeEventListener("click", e)
                );
            }, [u]);
          let p = e.agents.map((e, t) => ({ key: e, color: K[t % K.length] })),
            g =
              e.agents.length > 0
                ? [p, p].flat().map((t, s) => {
                    let r = e.agentInfo.find((e) => e.agent === t.key),
                      l = null == r ? void 0 : r.img_url;
                    return (0, a.jsx)(
                      "div",
                      {
                        className:
                          "mx-1.5 my-2 flex flex-col items-center justify-center cursor-pointer relative",
                        style: { minWidth: 48 },
                        onMouseEnter: (e) => {
                          if (!u) {
                            d(t.key), x(t.key);
                            let s = e.currentTarget.getBoundingClientRect();
                            h({ x: s.left + s.width / 2, y: s.top - 10 });
                          }
                        },
                        onMouseLeave: () => {
                          u || (d(null), x(null));
                        },
                        onClick: (e) => {
                          if (u === t.key) b(null), d(null), x(null);
                          else {
                            b(t.key), d(t.key), x(t.key);
                            let s = e.currentTarget.getBoundingClientRect();
                            h({ x: s.left + s.width / 2, y: s.top - 10 });
                          }
                        },
                        title: "$".concat(t.key),
                        children: (0, a.jsx)("div", {
                          className:
                            "w-12 h-12 rounded-full flex items-center justify-center border-2 shadow-md overflow-hidden transition-all duration-200 ".concat(
                              o === t.key || u === t.key
                                ? "border-white scale-110 shadow-lg"
                                : "border-[#343434] hover:border-[#555] hover:scale-105"
                            ),
                          style: {
                            background: l
                              ? "transparent"
                              : "linear-gradient(135deg, ".concat(
                                  t.color,
                                  "22 0%, #232323 100%)"
                                ),
                          },
                          children: l
                            ? (0, a.jsx)("img", {
                                src: r.img_url,
                                alt: t.key,
                                className:
                                  "w-full h-full object-cover rounded-full",
                                onError: (e) => {
                                  let s = e.target;
                                  (s.style.display = "none"),
                                    (s.parentElement.style.background =
                                      "linear-gradient(135deg, ".concat(
                                        t.color,
                                        "22 0%, #232323 100%)"
                                      )),
                                    (s.parentElement.innerHTML =
                                      '<span class="text-white text-xs font-bold truncate drop-shadow-md px-1">'.concat(
                                        t.key,
                                        "</span>"
                                      ));
                                },
                              })
                            : (0, a.jsx)("span", {
                                className:
                                  "text-white text-xs font-bold truncate drop-shadow-md px-1",
                                children: t.key,
                              }),
                        }),
                      },
                      t.key + s
                    );
                  })
                : [];
          return s
            ? (0, a.jsx)(J.h, {
                className: "w-full max-w-none p-0 sm:p-0 md:p-0",
                children: (0, a.jsx)("div", {
                  className: "px-4 sm:px-6 md:px-8 py-8",
                  children: (0, a.jsx)("div", {
                    className: "flex items-center justify-center h-64",
                    children: (0, a.jsx)("div", {
                      className:
                        "w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin",
                    }),
                  }),
                }),
              })
            : n
            ? (0, a.jsx)(J.h, {
                className: "w-full max-w-none p-0 sm:p-0 md:p-0",
                children: (0, a.jsx)("div", {
                  className: "px-4 sm:px-6 md:px-8 py-8",
                  children: (0, a.jsx)("div", {
                    className: "text-center text-red-400",
                    children: (0, a.jsxs)("p", {
                      children: ["Error loading rewards data: ", n],
                    }),
                  }),
                }),
              })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (c || u) &&
                    (0, a.jsxs)("div", {
                      className:
                        "fixed z-50 bg-[#181818] border border-[#343434] rounded px-3 py-2 text-sm font-medium text-white shadow-lg pointer-events-none",
                      style: {
                        left: m.x,
                        top: m.y,
                        transform: "translate(-50%, -100%)",
                      },
                      children: ["$", c || u],
                    }),
                  (0, a.jsx)(J.h, {
                    className: "w-full max-w-none p-0 sm:p-0 md:p-0",
                    children: (0, a.jsxs)("div", {
                      className: "px-4 sm:px-6 md:px-8 py-8",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "mb-7 text-left",
                          children: [
                            (0, a.jsxs)("h2", {
                              className:
                                "text-white text-[28px] sm:text-[32px] font-bold mb-2 leading-tight",
                              children: [
                                "Earn More with ",
                                (0, a.jsx)("span", {
                                  className: "text-[#4DF4BE]",
                                  children: "$VADER",
                                }),
                                " ",
                                "Staking",
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "text-white/90 text-[17px] sm:text-lg font-medium mb-1",
                              children:
                                "The highest yielding strategy for VIRGEN POINTS",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "text-white/70 text-sm sm:text-base mb-2",
                              children:
                                "Additionally, $VADER stakers receive airdrops from other agents.",
                            }),
                          ],
                        }),
                        e.agents.length > 0 &&
                          (0, a.jsx)("div", {
                            className:
                              "relative w-full mb-8 py-6 marquee-container",
                            style: { height: 96 },
                            children: (0, a.jsx)(Y.A, {
                              gradient: !1,
                              speed: 30,
                              pauseOnHover: !0,
                              play: !u,
                              className:
                                "w-full items-center !overflow-visible",
                              children: g,
                            }),
                          }),
                        e.data.length > 0 &&
                          (0, a.jsxs)("div", {
                            className:
                              "w-full mt-6 bg-gradient-to-br from-[#181818] to-[#1a1a1a] rounded-xl border border-[#232323] p-6 shadow-xl calendar-container",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex items-center justify-between mb-6",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className:
                                      "text-white text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
                                    children: "Monthly Distribution Calendar",
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "text-sm text-gray-400",
                                    children: "Swipe to explore →",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "overflow-x-auto scrollbar-thin scrollbar-thumb-[#343434] scrollbar-track-transparent pb-2",
                                children: (0, a.jsx)("div", {
                                  className: "flex gap-4 min-w-max",
                                  children: e.data.map((t, s) => {
                                    let r = e.agents
                                        .filter((e) => t[e] && Number(t[e]) > 0)
                                        .map((s) => {
                                          var a;
                                          return {
                                            name: s,
                                            amount: Number(t[s]),
                                            color:
                                              (null ==
                                              (a = p.find((e) => e.key === s))
                                                ? void 0
                                                : a.color) || "#666",
                                            agentInfo: e.agentInfo.find(
                                              (e) => e.agent === s
                                            ),
                                          };
                                        }),
                                      l = r.reduce((e, t) => e + t.amount, 0),
                                      n = t.month.toString().split(" "),
                                      i = n[0],
                                      d = "25" === n[1] ? "2025" : n[1];
                                    return (0, a.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "group relative bg-gradient-to-br from-[#232323] to-[#1e1e1e] rounded-xl p-4 border transition-all duration-300 cursor-pointer w-[200px] flex-shrink-0 ".concat(
                                            (o || u) &&
                                              r.some((e) => e.name === (o || u))
                                              ? "border-[#4DF4BE] shadow-lg shadow-[#4DF4BE]/20"
                                              : "border-[#343434] hover:border-[#4DF4BE] hover:shadow-lg hover:shadow-[#4DF4BE]/20"
                                          ),
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className: "text-center mb-4",
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex items-center justify-center gap-2 mb-2",
                                                children: [
                                                  (0, a.jsx)("h4", {
                                                    className:
                                                      "text-white font-bold text-lg",
                                                    children: i,
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className:
                                                      "text-gray-400 text-sm font-medium",
                                                    children: d,
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "bg-gradient-to-r from-[#4DF4BE]/20 to-[#60A5FA]/20 rounded-lg p-2 border border-[#4DF4BE]/30",
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className:
                                                      "text-xs text-gray-400 mb-1",
                                                    children:
                                                      "Total Allocation",
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className:
                                                      "text-[#4DF4BE] font-bold text-lg",
                                                    children:
                                                      l > 0
                                                        ? Math.round(
                                                            l
                                                          ).toLocaleString()
                                                        : (0, a.jsx)("span", {
                                                            className:
                                                              "text-gray-500",
                                                            children: "—",
                                                          }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "grid grid-cols-4 gap-2",
                                            children: r.map((e, t) => {
                                              var s, r;
                                              let l =
                                                  null == (s = e.agentInfo)
                                                    ? void 0
                                                    : s.img_url,
                                                n =
                                                  o === e.name || u === e.name;
                                              return (0, a.jsxs)(
                                                "div",
                                                {
                                                  className:
                                                    "relative group/token",
                                                  title: ""
                                                    .concat(e.name, ": ")
                                                    .concat(
                                                      Math.round(
                                                        e.amount
                                                      ).toLocaleString()
                                                    ),
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "w-8 h-8 rounded-lg flex items-center justify-center border-2 transition-all duration-200 shadow-lg ".concat(
                                                          n
                                                            ? "border-white scale-110"
                                                            : "border-[#444] hover:border-white hover:scale-105"
                                                        ),
                                                      style: {
                                                        background: l
                                                          ? "linear-gradient(135deg, #2a2a2a 0%, #1e1e1e 100%)"
                                                          : "linear-gradient(135deg, ".concat(
                                                              e.color,
                                                              "33 0%, #1e1e1e 100%)"
                                                            ),
                                                        boxShadow:
                                                          "0 4px 12px ".concat(
                                                            e.color,
                                                            "22"
                                                          ),
                                                      },
                                                      children: l
                                                        ? (0, a.jsx)("img", {
                                                            src:
                                                              null ==
                                                              (r = e.agentInfo)
                                                                ? void 0
                                                                : r.img_url,
                                                            alt: e.name,
                                                            className:
                                                              "w-6 h-6 object-cover rounded",
                                                          })
                                                        : (0, a.jsx)("div", {
                                                            className:
                                                              "w-5 h-5 rounded shadow-inner",
                                                            style: {
                                                              backgroundColor:
                                                                e.color,
                                                              boxShadow:
                                                                "inset 0 2px 4px rgba(0,0,0,0.3), 0 0 8px ".concat(
                                                                  e.color,
                                                                  "44"
                                                                ),
                                                            },
                                                          }),
                                                    }),
                                                    (0, a.jsxs)("div", {
                                                      className:
                                                        "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gradient-to-r from-[#181818] to-[#1e1e1e] border border-[#4DF4BE]/50 rounded-lg text-xs text-white transition-all duration-200 pointer-events-none whitespace-nowrap z-20 shadow-xl ".concat(
                                                          u === e.name
                                                            ? "opacity-100"
                                                            : "opacity-0 group-hover/token:opacity-100"
                                                        ),
                                                      children: [
                                                        (0, a.jsxs)("div", {
                                                          className:
                                                            "font-bold text-white mb-1",
                                                          children: [
                                                            "$",
                                                            e.name,
                                                          ],
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            "text-[#4DF4BE] font-bold text-sm",
                                                          children: Math.round(
                                                            e.amount
                                                          ).toLocaleString(),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            "text-gray-400 text-xs",
                                                          children: "per month",
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#4DF4BE]/50",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                t
                                              );
                                            }),
                                          }),
                                        ],
                                      },
                                      s
                                    );
                                  }),
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                ],
              });
        };
      function Q() {
        let { priceData: e } = i();
        (0, Z.U)();
        let [t, s] = (0, l.useState)(!1),
          [r, n] = (0, l.useState)(!1);
        return (0, a.jsxs)("main", {
          className: "min-h-screen -mt-20 md:-mt-28",
          children: [
            (0, a.jsxs)("div", {
              className: "container mx-auto px-4",
              children: [
                (0, a.jsx)(g, {}),
                (0, a.jsxs)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 gap-[15px] sm:gap-6 mt-6 lg:mb-12",
                  children: [
                    (0, a.jsx)(W, { onCalculatorClick: () => n(!0) }),
                    (0, a.jsx)(T, {}),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "mt-6",
                  children: (0, a.jsx)(H, {}),
                }),
                (0, a.jsx)("div", {
                  className: "mb-12",
                  children: (0, a.jsx)(f, { url: "https://v0.vaderai.ai/" }),
                }),
              ],
            }),
            r &&
              (0, a.jsxs)("div", {
                className:
                  "fixed inset-0 z-50 flex items-center justify-center",
                children: [
                  (0, a.jsx)("div", {
                    className: "fixed inset-0 bg-black/80 backdrop-blur-sm",
                    onClick: () => n(!1),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "relative w-[98vw] max-w-[1000px] max-h-[85vh] overflow-auto z-10",
                    children: [
                      (0, a.jsx)("button", {
                        className:
                          "absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-[#222222] bg-[#111111] border border-[#343434] z-20",
                        "aria-label": "Close",
                        onClick: () => n(!1),
                        children: "\xd7",
                      }),
                      (0, a.jsx)(R, {}),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
    },
    59434: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => n, cn: () => l });
      var a = s(52596),
        r = s(39688);
      function l() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, r.QP)((0, a.$)(t));
      }
      let n = (e) =>
        new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(e);
    },
    88972: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 44666));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [
        8451, 2266, 7892, 4818, 8652, 1937, 6129, 8984, 4277, 4138, 842, 4562,
        6874, 9543, 4134, 6766, 2451, 7893, 4945, 6720, 9535, 4781, 9948, 7404,
        4761, 8441, 1684, 7358,
      ],
      () => t(88972)
    ),
      (_N_E = e.O());
  },
]);
