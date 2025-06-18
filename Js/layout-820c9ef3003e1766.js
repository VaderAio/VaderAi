
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177],
  {
    30285: (e, t, s) => {
      "use strict";
      s.d(t, { $: () => l });
      var a = s(95155),
        r = s(12115),
        i = s(59434);
      let l = r.forwardRef((e, t) => {
        let {
          className: s,
          variant: r = "default",
          size: l = "default",
          ...n
        } = e;
        return (0, a.jsx)("button", {
          className: (0, i.cn)(
            "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-500 disabled:pointer-events-none disabled:opacity-50",
            {
              "bg-pink-500 text-white shadow hover:bg-pink-600":
                "default" === r,
              "hover:bg-pink-500/10": "ghost" === r,
              "border border-pink-500/20 bg-transparent hover:bg-pink-500/10":
                "outline" === r,
              "h-9 px-4": "default" === l,
              "h-8 px-3 text-sm": "sm" === l,
              "h-10 px-8": "lg" === l,
              "h-9 w-9 p-0": "icon" === l,
            },
            s
          ),
          ref: t,
          ...n,
        });
      });
      l.displayName = "Button";
    },
    30347: () => {},
    35704: (e, t, s) => {
      "use strict";
      s.d(t, { MaintenancePage: () => l });
      var a = s(95155),
        r = s(66766),
        i = s(12115);
      let l = () => {
        let [e, t] = (0, i.useState)([]);
        return (
          (0, i.useEffect)(() => {
            t(
              Array.from({ length: 50 }, () => ({
                x: 100 * Math.random(),
                y: 100 * Math.random(),
                size: 3 * Math.random() + 1,
                speed: +Math.random() + 0.5,
                opacity: 0.5 * Math.random() + 0.1,
              }))
            );
            let e = setInterval(() => {
              t((e) =>
                e.map((e) => ({
                  ...e,
                  y: e.y + e.speed > 100 ? 0 : e.y + e.speed,
                  opacity: 0.5 * Math.random() + 0.1,
                }))
              );
            }, 100);
            return () => clearInterval(e);
          }, []),
          (0, a.jsxs)("div", {
            className:
              "min-h-screen flex flex-col items-center justify-center bg-black p-4 relative overflow-hidden",
            children: [
              e.map((e, t) =>
                (0, a.jsx)(
                  "div",
                  {
                    className: "absolute bg-white",
                    style: {
                      left: "".concat(e.x, "%"),
                      top: "".concat(e.y, "%"),
                      width: "".concat(e.size, "px"),
                      height: "".concat(
                        Math.random() > 0.8 ? 2 * e.size : e.size,
                        "px"
                      ),
                      opacity: e.opacity,
                      transition: "opacity 0.1s",
                    },
                  },
                  t
                )
              ),
              (0, a.jsxs)("div", {
                className: "max-w-md w-full mx-auto relative z-10",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex flex-col items-center mb-10",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "relative",
                        children: [
                          (0, a.jsx)(r.default, {
                            src: "/MiniLogo.png",
                            alt: "VaderAI",
                            width: 120,
                            height: 120,
                            priority: !0,
                            className: "relative z-10",
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "absolute inset-0 w-full h-full bg-cyan-500/20 blur-xl rounded-full animate-pulse",
                          }),
                        ],
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "text-3xl font-bold text-white mt-4 font-mono",
                        children: "VaderAI",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "relative mb-6 group",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur-sm",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "relative bg-black border border-white/20 rounded-lg p-6 backdrop-blur-sm",
                        children: (0, a.jsx)("div", {
                          className:
                            "flex items-center justify-center space-x-4",
                          children: (0, a.jsxs)("div", {
                            className: "text-center",
                            children: [
                              (0, a.jsx)("h1", {
                                className:
                                  "text-2xl font-bold text-white font-mono glitch-text",
                                children: (0, a.jsx)("span", {
                                  className: "relative",
                                  children: "MAINTENANCE IN PROGRESS",
                                }),
                              }),
                              (0, a.jsx)("p", {
                                className: "text-white/90 text-lg",
                                children: "We'll be back soon",
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "relative mb-6 overflow-hidden",
                    children: (0, a.jsxs)("div", {
                      className:
                        "bg-black border border-white/20 rounded-lg p-5 backdrop-blur-sm relative",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "absolute top-0 left-1/4 right-1/4 h-px bg-cyan-500/70 animate-pulse",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-white text-center text-lg font-mono",
                          children:
                            "We're upgrading our systems to enhance your trading experience.",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "absolute bottom-0 left-1/4 right-1/4 h-px bg-cyan-500/70 animate-pulse",
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "relative mb-6",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "bg-black/80 border border-white/20 rounded-lg p-5 backdrop-blur-sm",
                        children: (0, a.jsxs)("div", {
                          className:
                            "flex items-center justify-center space-x-4",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "w-4 h-4 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.7)]",
                            }),
                            (0, a.jsxs)("div", {
                              className: "text-base text-white font-mono",
                              children: [
                                "Expected completion: ",
                                (0, a.jsx)("span", {
                                  className: "text-cyan-400",
                                  children: "1-2 hours",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "text-center text-white/70 mt-6 font-mono text-sm",
                    children: (0, a.jsx)("span", {
                      className:
                        "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
                      children: "Powered by Virtuals Protocol",
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    50966: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 85035, 23)),
        Promise.resolve().then(s.t.bind(s, 96110, 23)),
        Promise.resolve().then(s.t.bind(s, 78235, 23)),
        Promise.resolve().then(s.t.bind(s, 59405, 23)),
        Promise.resolve().then(s.t.bind(s, 6639, 23)),
        Promise.resolve().then(s.t.bind(s, 30347, 23)),
        Promise.resolve().then(s.bind(s, 96354)),
        Promise.resolve().then(s.bind(s, 81515)),
        Promise.resolve().then(s.bind(s, 35704)),
        Promise.resolve().then(s.bind(s, 66201));
    },
    59434: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => l, cn: () => i });
      var a = s(52596),
        r = s(39688);
      function i() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, r.QP)((0, a.$)(t));
      }
      let l = (e) =>
        new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(e);
    },
    66201: (e, t, s) => {
      "use strict";
      s.d(t, { LoadingProvider: () => d });
      var a = s(95155),
        r = s(12115),
        i = s(66129);
      let l = (e) => {
        let { className: t, size: s = 80, fullScreen: r = !1 } = e;
        return (0, a.jsx)("div", {
          className: r
            ? "fixed inset-0 z-[999] flex items-center justify-center bg-black"
            : "flex items-center justify-center",
          children: (0, a.jsx)(i.P.div, {
            initial: { opacity: 0.7, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: {
              duration: 0.1,
              ease: "easeOut",
              scale: {
                type: "spring",
                damping: 8,
                stiffness: 100,
                restDelta: 0.001,
              },
            },
            children: (0, a.jsx)("img", {
              src: "/MiniLogo.png",
              alt: "VaderAI Loading",
              width: s,
              height: s,
              className: "animate-pulse",
            }),
          }),
        });
      };
      var n = s(35695),
        o = s(59434);
      let c = (0, r.createContext)(void 0),
        d = (e) => {
          let { children: t } = e,
            [s, i] = (0, r.useState)(!0),
            [d, m] = (0, r.useState)(!1),
            x = (0, n.usePathname)(),
            h = (0, n.useSearchParams)();
          (0, r.useEffect)(() => {
            i(!0), m(!1);
            let e = setTimeout(() => {
              let e = document.querySelectorAll("img"),
                t = 0,
                s = e.length,
                a = () => {
                  ++t >= Math.max(0.75 * s, 1) && m(!0);
                };
              if (0 === s) return void m(!0);
              e.forEach((e) => {
                e.complete
                  ? a()
                  : (e.addEventListener("load", a),
                    e.addEventListener("error", a));
              });
              let r = setTimeout(() => {
                m(!0);
              }, 2500);
              return () => {
                clearTimeout(r),
                  e.forEach((e) => {
                    e.removeEventListener("load", a),
                      e.removeEventListener("error", a);
                  });
              };
            }, 100);
            return () => clearTimeout(e);
          }, [x, h]),
            (0, r.useEffect)(() => {
              if (!d) return;
              let e = setTimeout(() => {
                i(!1);
              }, 100);
              return () => clearTimeout(e);
            }, [d]);
          let p = null == x ? void 0 : x.startsWith("/megatron");
          return (0, a.jsxs)(c.Provider, {
            value: { isLoading: s, setIsLoading: i },
            children: [
              !p &&
                s &&
                (0, a.jsx)("div", {
                  className:
                    "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
                  children: (0, a.jsx)(l, { fullScreen: !1 }),
                }),
              (0, a.jsx)("div", {
                className: (0, o.cn)(
                  p ? "" : "transition-opacity duration-300",
                  !p && s ? "opacity-0" : "opacity-100"
                ),
                children: t,
              }),
            ],
          });
        };
    },
    77173: (e, t, s) => {
      "use strict";
      s.d(t, { u: () => A });
      var a = s(95155),
        r = s(63439),
        i = s(12115),
        l = s(46720),
        n = s(25318),
        o = s(59434);
      let c = l.bL;
      l.l9;
      let d = l.ZL;
      l.bm;
      let m = i.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(l.hJ, {
          ref: t,
          className: (0, o.cn)(
            "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            s
          ),
          ...r,
        });
      });
      m.displayName = l.hJ.displayName;
      let x = i.forwardRef((e, t) => {
        let { className: s, children: r, ...i } = e;
        return (0, a.jsxs)(d, {
          children: [
            (0, a.jsx)(m, {}),
            (0, a.jsxs)(l.UC, {
              ref: t,
              className: (0, o.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                s
              ),
              ...i,
              children: [
                r,
                (0, a.jsxs)(l.bm, {
                  className:
                    "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                  children: [
                    (0, a.jsx)(n.A, { className: "h-4 w-4" }),
                    (0, a.jsx)("span", {
                      className: "sr-only",
                      children: "Close",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      x.displayName = l.UC.displayName;
      let h = (e) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          className: (0, o.cn)(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            t
          ),
          ...s,
        });
      };
      h.displayName = "DialogHeader";
      let p = i.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(l.hE, {
          ref: t,
          className: (0, o.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            s
          ),
          ...r,
        });
      });
      p.displayName = l.hE.displayName;
      let u = i.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(l.VY, {
          ref: t,
          className: (0, o.cn)("text-sm text-muted-foreground", s),
          ...r,
        });
      });
      u.displayName = l.VY.displayName;
      var f = s(30285),
        b = s(67820),
        g = s(10518);
      let v = i.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(b.bL, {
          ref: t,
          className: (0, o.cn)(
            "peer h-4 w-4 shrink-0 rounded-sm border border-white/20 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white data-[state=checked]:text-black",
            s
          ),
          ...r,
          children: (0, a.jsx)(b.C1, {
            className: (0, o.cn)(
              "flex items-center justify-center text-current"
            ),
            children: (0, a.jsx)(g.A, { className: "h-4 w-4" }),
          }),
        });
      });
      v.displayName = b.bL.displayName;
      var j = s(6874),
        w = s.n(j),
        N = s(57383);
      let y = "wallet_consent",
        k = (e) => {
          let { isOpen: t, onClose: s, onAccept: r } = e,
            [l, n] = (0, i.useState)(!1),
            [o, d] = (0, i.useState)(!1);
          return (0, a.jsx)(c, {
            open: t,
            onOpenChange: s,
            children: (0, a.jsxs)(x, {
              className:
                "max-w-3xl w-[80vw] bg-black border border-white/20 p-8",
              children: [
                (0, a.jsxs)(h, {
                  children: [
                    (0, a.jsx)(p, {
                      className: "text-3xl font-bold",
                      children: "Terms & Conditions",
                    }),
                    (0, a.jsx)(u, {
                      className: "text-gray-400 mt-3 text-[20px]",
                      children: "To proceed, review and accept the following:",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-5 mt-6",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-start space-x-4",
                      children: [
                        (0, a.jsx)(v, {
                          id: "terms",
                          checked: l,
                          onCheckedChange: (e) => n(e),
                          className: "mt-1.5 h-5 w-5",
                        }),
                        (0, a.jsxs)("label", {
                          htmlFor: "terms",
                          className: "text-[18px] text-gray-300",
                          children: [
                            "You acknowledge that you have read, understood and agreed to the",
                            " ",
                            " ",
                            (0, a.jsx)("br", {}),
                            (0, a.jsx)(w(), {
                              href: "/terms",
                              className: "text-blue-400 hover:underline",
                              target: "_blank",
                              children: "Terms & Conditions",
                            }),
                            " ",
                            "and",
                            " ",
                            (0, a.jsx)(w(), {
                              href: "/privacy",
                              className: "text-blue-400 hover:underline",
                              target: "_blank",
                              children: "Privacy Policy",
                            }),
                            ".",
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex items-start space-x-4",
                      children: [
                        (0, a.jsx)(v, {
                          id: "cookies",
                          checked: o,
                          onCheckedChange: (e) => d(e),
                          className: "mt-1.5 h-5 w-5",
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("label", {
                              htmlFor: "cookies",
                              className: "text-[18px] block text-gray-300",
                              children:
                                "This site uses cookies to ensure the best user experience.",
                            }),
                            (0, a.jsx)("label", {
                              htmlFor: "cookies",
                              className: "text-[18px] block text-gray-300",
                              children:
                                "By using this site, you agree to the cookie policy.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex gap-3 mt-2",
                      children: [
                        (0, a.jsx)(f.$, {
                          onClick: () => {
                            l &&
                              o &&
                              (N.A.set(y, "true", { expires: 30 }), r(), s());
                          },
                          disabled: !l || !o,
                          className:
                            "w-full bg-white text-black hover:bg-gray-100 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed py-6 text-lg",
                          children: "Accept",
                        }),
                        (0, a.jsx)(f.$, {
                          onClick: s,
                          variant: "outline",
                          className:
                            "w-full border-white/20 text-white hover:bg-white/10 py-6 text-lg",
                          children: "Decline",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        C = () => "true" === N.A.get(y),
        A = () => {
          let [e, t] = (0, i.useState)(!1),
            [s, l] = (0, i.useState)(!1);
          return (0, a.jsx)(r.pK.Custom, {
            children: (r) => {
              let {
                  account: i,
                  chain: n,
                  openAccountModal: o,
                  openChainModal: c,
                  openConnectModal: d,
                  authenticationStatus: m,
                  mounted: x,
                } = r,
                h = x && "loading" !== m,
                p = h && i && n && (!m || "authenticated" === m),
                u = () => {
                  C() ? d() : (t(!0), l(!0));
                };
              return (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("div", {
                    ...(!h && {
                      "aria-hidden": !0,
                      style: {
                        opacity: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                      },
                    }),
                    children: (() => {
                      var e;
                      return p
                        ? n.unsupported
                          ? (0, a.jsx)("button", {
                              onClick: c,
                              className:
                                "flex items-center justify-center h-[46px] px-6 bg-red-500 rounded-[58px] hover:bg-red-600 transition-colors",
                              children: (0, a.jsx)("span", {
                                className: "text-[20px] text-white font-medium",
                                children: "Wrong Network",
                              }),
                            })
                          : (0, a.jsxs)("div", {
                              style: { display: "flex", gap: 12 },
                              children: [
                                (0, a.jsx)("div", {
                                  onClick: c,
                                  className:
                                    "border border-[#3D3D3D] rounded-full w-[46px] h-[46px] flex items-center justify-center shrink-0 cursor-pointer",
                                  children:
                                    n.iconUrl &&
                                    (0, a.jsx)("img", {
                                      alt:
                                        null != (e = n.name) ? e : "Chain icon",
                                      src: n.iconUrl,
                                      className:
                                        "rounded-full w-[22px] h-[22px]",
                                    }),
                                }),
                                (0, a.jsx)("button", {
                                  onClick: o,
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                  },
                                  type: "button",
                                  className:
                                    "flex items-center justify-center h-[46px] flex-col px-6 bg-white text-black rounded-[58px] hover:bg-gray-100 transition-colors",
                                  children: (0, a.jsxs)("span", {
                                    className:
                                      "text-[20px] text-black font-medium",
                                    children: [
                                      i.address.slice(0, 6),
                                      "...",
                                      i.address.slice(-3),
                                    ],
                                  }),
                                }),
                              ],
                            })
                        : (0, a.jsx)("button", {
                            onClick: u,
                            className:
                              "flex items-center justify-center h-[46px] px-6 bg-white rounded-[58px] hover:bg-gray-100 transition-colors",
                            children: (0, a.jsx)("span", {
                              className: "text-[20px] text-black font-medium",
                              children: "Connect Wallet",
                            }),
                          });
                    })(),
                  }),
                  (0, a.jsx)(k, {
                    isOpen: e,
                    onClose: () => {
                      t(!1), l(!1);
                    },
                    onAccept: () => {
                      s && (d(), l(!1));
                    },
                  }),
                ],
              });
            },
          });
        };
    },
    81515: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => A });
      var a = s(95155),
        r = s(12115),
        i = s(6874),
        l = s.n(i),
        n = s(35695),
        o = s(59434),
        c = s(60760),
        d = s(66129);
      let m = (e) => {
        let {
            href: t,
            children: s,
            className: i,
            disabled: n,
            isNavItem: m,
            target: x,
            onClick: h,
          } = e,
          [p, u] = (0, r.useState)({ x: 0, y: 0 }),
          [f, b] = (0, r.useState)(!1);
        if (n) return (0, a.jsx)("span", { className: i, children: s });
        let g = (0, a.jsx)(l(), {
          href: t,
          target: x,
          onClick: (e) => {
            h && h();
          },
          className: (0, o.cn)(
            "no-underline hover:no-underline",
            m &&
              "font-['Public_Sans'] font-extrabold text-[20px] tracking-[-0.02em]",
            n && "cursor-not-allowed opacity-50",
            i
          ),
          onMouseMove: (e) => {
            n && m && u({ x: e.clientX, y: e.clientY });
          },
          onMouseEnter: () => b(!0),
          onMouseLeave: () => b(!1),
          children: s,
        });
        return n && m
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                g,
                (0, a.jsx)(c.N, {
                  children:
                    f &&
                    (0, a.jsx)(d.P.div, {
                      initial: { opacity: 0, scale: 0.9 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.9 },
                      transition: { duration: 0.15 },
                      className: "fixed z-[100] pointer-events-none",
                      style: { left: p.x + 10, top: p.y + 10 },
                      children: (0, a.jsx)("div", {
                        className:
                          "rounded-md bg-black/90 px-4 py-2 text-sm text-white",
                        children: "Coming Soon",
                      }),
                    }),
                }),
              ],
            })
          : g;
      };
      var x = s(77173);
      let h = (e) => {
          let { isOpen: t, onClick: s, className: r } = e;
          return (0, a.jsx)("button", {
            onClick: s,
            className: (0, o.cn)(
              "flex flex-col justify-center items-center w-10 h-10",
              r
            ),
            children: (0, a.jsxs)("div", {
              className: "space-y-1.5",
              children: [
                (0, a.jsx)("span", {
                  className: (0, o.cn)(
                    "block w-6 h-0.5 bg-white transition-transform duration-300",
                    t && "rotate-45 translate-y-2"
                  ),
                }),
                (0, a.jsx)("span", {
                  className: (0, o.cn)(
                    "block w-6 h-0.5 bg-white transition-opacity duration-300",
                    t && "opacity-0"
                  ),
                }),
                (0, a.jsx)("span", {
                  className: (0, o.cn)(
                    "block w-6 h-0.5 bg-white transition-transform duration-300",
                    t && "-rotate-45 -translate-y-2"
                  ),
                }),
              ],
            }),
          });
        },
        p = () =>
          (0, a.jsx)("svg", {
            className: "w-[24px] h-[24px] text-white",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
            }),
          }),
        u = [];
      var f = s(74500),
        b = s(66766);
      let g = (e) => {
          let { price: t } = e,
            s = t.percentageChange >= 0;
          return (0, a.jsx)("div", {
            className:
              "inline-flex items-center px-4 py-3 space-x-2 whitespace-nowrap text-sm",
            children: (0, a.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, a.jsx)("div", {
                  className: "w-8 h-8 flex items-center justify-center",
                  children: t.image
                    ? (0, a.jsx)(b.default, {
                        src: t.image,
                        width: 32,
                        height: 32,
                        alt: "".concat(t.symbol, " icon"),
                        className: "opacity-90",
                      })
                    : null,
                }),
                (0, a.jsxs)("span", {
                  className: "font-medium text-white/90",
                  children: [
                    "$",
                    t.symbol,
                    " \xb7 ",
                    t.formattedMarketCap,
                    " \xb7",
                    " ",
                    (0, a.jsx)("span", {
                      className: (0, o.cn)(
                        s ? "text-green-400" : "text-red-400"
                      ),
                      children: t.formattedPercentage,
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        v = () =>
          (0, a.jsx)("div", {
            className: "flex items-center gap-8 px-4",
            children: [void 0, void 0, void 0].map((e, t) =>
              (0, a.jsxs)(
                "div",
                {
                  className: "flex items-center gap-3 animate-pulse",
                  children: [
                    (0, a.jsx)("div", {
                      className: "h-4 w-12 bg-[#2de2e6]/10 rounded",
                    }),
                    (0, a.jsx)("div", {
                      className: "h-4 w-20 bg-[#2de2e6]/10 rounded",
                    }),
                  ],
                },
                t
              )
            ),
          }),
        j = [
          {
            address: "9Rhbn9G5poLvgnFzuYBtJgbzmiipNra35QpnUek9virt",
            name: "Billy Bets by VIRTUALS",
            symbol: "BILLY",
            image:
              "https://dd.dexscreener.com/ds-data/tokens/solana/9Rhbn9G5poLvgnFzuYBtJgbzmiipNra35QpnUek9virt.png?size=lg&key=f2b819",
          },
          {
            address: "0x4F9Fd6Be4a90f2620860d680c0d4d5Fb53d1A825",
            name: "aixbt by Virtuals",
            symbol: "AIXBT",
            image:
              "https://dd.dexscreener.com/ds-data/tokens/base/0x4f9fd6be4a90f2620860d680c0d4d5fb53d1a825.png?key=6a3b50",
          },
          {
            address: "0x731814e491571A2e9eE3c5b1F7f3b962eE8f4870",
            name: "VaderAI by Virtuals",
            symbol: "VADER",
            image:
              "https://dd.dexscreener.com/ds-data/tokens/base/0x731814e491571a2e9ee3c5b1f7f3b962ee8f4870.png?key=183b35",
          },
          {
            address: "0x79dacb99A8698052a9898E81Fdf883c29efb93cb",
            name: "Acolyte by Virtuals",
            symbol: "ACOLYT",
            image:
              "https://dd.dexscreener.com/ds-data/tokens/base/0x79dacb99a8698052a9898e81fdf883c29efb93cb.png?key=5b97b9",
          },
          {
            address: "0x76C71F1703Fbf19FFdcF3051E1e684Cb9934510f",
            name: "aixCB by Virtuals",
            symbol: "AIXCB",
            image:
              "https://dd.dexscreener.com/ds-data/tokens/base/0x76c71f1703fbf19ffdcf3051e1e684cb9934510f.png?key=c7599e",
          },
          {
            address: "0x81496F85AbaF8bd2e13D90379fdE86C533D8670D",
            name: "AGIXBT by Virtuals",
            symbol: "AGIXBT",
            image:
              "https://dd.dexscreener.com/ds-data/tokens/base/0x81496f85abaf8bd2e13d90379fde86c533d8670d.png?key=004d50",
          },
          {
            address: "0x4f81837C2f4A189A0B69370027cc2627d93785B4",
            name: "Seraph by Virtuals",
            symbol: "SERAPH",
            image:
              "https://dd.dexscreener.com/ds-data/tokens/base/0x4f81837c2f4a189a0b69370027cc2627d93785b4.png?key=1171a0",
          },
          {
            address: "0xc655C331d1Aa7f96c252F1f40CE13D80eAc53504",
            name: "MUSIC by Virtuals",
            symbol: "MUSIC",
            image:
              "https://dd.dexscreener.com/ds-data/tokens/base/0xc655c331d1aa7f96c252f1f40ce13d80eac53504.png?key=319762",
          },
          {
            address: "0x919E43a2CcE006710090E64BDE9E01b38Fd7f32f",
            name: "Agent YP by Virtuals",
            symbol: "AIYP",
            image:
              "https://dd.dexscreener.com/ds-data/tokens/base/0x919e43a2cce006710090e64bde9e01b38fd7f32f.png?key=f9d302",
          },
          {
            address: "0xea87169699dabd028a78d4B91544b4298086BAF6",
            name: "Agent YP by Virtuals",
            symbol: "SWARM",
            image:
              "https://dd.dexscreener.com/ds-data/tokens/base/0xea87169699dabd028a78d4b91544b4298086baf6.png?size=lg&key=7a22f9",
          },
        ],
        w = (e) => {
          let { onClose: t, visible: s = !0 } = e,
            [i, l] = (0, r.useState)([]),
            [n, c] = (0, r.useState)(null),
            [m, x] = (0, r.useState)(!0),
            h = (0, r.useCallback)(async () => {
              try {
                let e = j.map(async (e) => {
                    try {
                      var t, s;
                      let a = await fetch(
                          ""
                            .concat(
                              "https://api.dexscreener.com/latest/dex/tokens/"
                            )
                            .concat(e.address)
                        ),
                        r =
                          null == (t = (await a.json()).pairs) ? void 0 : t[0];
                      if (!r)
                        return (
                          console.warn(
                            "No pair found for token: ".concat(e.symbol)
                          ),
                          null
                        );
                      let i = parseFloat(r.fdv || r.marketCap || "0"),
                        l = parseFloat(
                          (null == (s = r.priceChange) ? void 0 : s.h24) || "0"
                        );
                      return {
                        symbol: e.symbol,
                        image: e.image,
                        marketCap: i,
                        percentageChange: l,
                        priceUsd: parseFloat(r.priceUsd || "0"),
                        volume24h: parseFloat(r.volume24h || "0"),
                        pairAddress: r.pairAddress,
                        dexId: r.dexId,
                        chainId: r.chainId,
                        baseToken: {
                          name: r.baseToken.name,
                          symbol: r.baseToken.symbol,
                          address: r.baseToken.address,
                        },
                      };
                    } catch (t) {
                      return (
                        console.warn(
                          "Error fetching data for token ".concat(
                            e.symbol,
                            ":"
                          ),
                          t
                        ),
                        null
                      );
                    }
                  }),
                  t = (await Promise.all(e))
                    .filter((e) => null !== e)
                    .sort((e, t) => t.marketCap - e.marketCap);
                if (0 === t.length) throw Error("No valid price data received");
                l(t), c(null);
              } catch (e) {
                console.error("Error in fetchInitialData:", e),
                  c("Failed to fetch prices");
              } finally {
                x(!1);
              }
            }, []);
          if (
            ((0, r.useEffect)(() => {
              let e = setInterval(() => {
                h();
              }, 1e4);
              return (
                h(),
                () => {
                  clearInterval(e);
                }
              );
            }, [h]),
            !s)
          )
            return null;
          let p = (e) => "".concat((e / 1e6).toFixed(1), "M"),
            u = (e) => "".concat(e >= 0 ? "+" : "").concat(Math.round(e), "%");
          return (0, a.jsx)("div", {
            className:
              "sticky top-0 left-0 right-0 z-[97] bg-[#303030] border-b border-white/5",
            children: (0, a.jsxs)("div", {
              className: "relative flex items-center h-[52px] overflow-hidden",
              children: [
                (0, a.jsx)(d.P.div, {
                  className: "flex items-center",
                  animate: { x: "-50%" },
                  transition: { duration: 300, ease: "linear", repeat: 1 / 0 },
                  children: m
                    ? (0, a.jsx)(v, {})
                    : n
                    ? (0, a.jsx)("div", {
                        className: "px-4 text-sm text-red-400",
                        children: n,
                      })
                    : 0 === i.length
                    ? (0, a.jsx)("div", {
                        className: "px-4 text-sm text-gray-400",
                        children: "No price data available",
                      })
                    : Array(10)
                        .fill(i)
                        .flat()
                        .map((e, t) =>
                          (0, a.jsx)(
                            g,
                            {
                              price: {
                                image: e.image,
                                ...e,
                                formattedMarketCap: p(e.marketCap),
                                formattedPercentage: u(e.percentageChange),
                              },
                            },
                            "price-".concat(e.symbol, "-").concat(t)
                          )
                        ),
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute right-0 w-20 h-full bg-gradient-to-l from-[#303030] to-transparent",
                }),
                (0, a.jsx)("button", {
                  onClick: t,
                  className: (0, o.cn)(
                    "absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center",
                    "w-7 h-7 rounded-full",
                    "bg-white/5 hover:bg-white/10 backdrop-blur-sm",
                    "ring-1 ring-white/10 hover:ring-white/20",
                    "transition-all duration-200 ease-out group z-10",
                    "hover:scale-105"
                  ),
                  title: "Hide market information",
                  "aria-label": "Close price slider",
                  children: (0, a.jsx)(f.A, {
                    className:
                      "w-4 h-4 text-white/50 group-hover:text-white/90 transition-colors duration-200",
                  }),
                }),
              ],
            }),
          });
        },
        N = (e) => {
          let { mobileMenuOpen: t, setMobileMenuOpen: s } = e,
            i = (0, n.usePathname)(),
            [c, d] = (0, r.useState)(!1),
            [f, b] = (0, r.useState)(!1);
          (0, r.useEffect)(() => {
            let e = () => {
              b(window.scrollY > 0);
            };
            return (
              window.addEventListener("scroll", e, { passive: !0 }),
              () => window.removeEventListener("scroll", e)
            );
          }, []);
          let g = () => {
            s(!1), (document.body.style.overflow = "unset");
          };
          return (
            (0, r.useEffect)(
              () => () => {
                document.body.style.overflow = "unset";
              },
              []
            ),
            (0, a.jsxs)("div", {
              className: (0, o.cn)(
                "fixed left-0 right-0 z-[95] top-0 transition-all duration-300",
                f && "backdrop-blur-md bg-black/75 shadow-lg"
              ),
              children: [
                c &&
                  !t &&
                  (0, a.jsx)("div", {
                    className: (0, o.cn)(
                      "w-full transition-all duration-300",
                      f && "backdrop-blur-md bg-black/75"
                    ),
                    children: (0, a.jsx)("div", {
                      className: "w-full",
                      children: (0, a.jsx)(w, {
                        onClose: () => d(!1),
                        visible: c,
                      }),
                    }),
                  }),
                (0, a.jsx)("nav", {
                  className: (0, o.cn)(
                    "w-full border-b border-[#89898924] transition-all duration-300",
                    f ? "bg-transparent" : "bg-black/95"
                  ),
                  children: (0, a.jsx)("div", {
                    className: "w-full h-[60px] md:h-[72px]",
                    children: (0, a.jsxs)("div", {
                      className:
                        "flex items-center justify-between h-full px-4 md:px-6 w-full",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "flex items-center gap-3 md:gap-4 lg:gap-6",
                          children: [
                            (0, a.jsxs)(l(), {
                              href: "/",
                              className:
                                "flex items-center gap-2 lg:gap-3 no-underline",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "/MiniLogo.png",
                                  alt: "VaderAI",
                                  className:
                                    "w-[32px] h-[32px] md:w-[36px] md:h-[36px] lg:w-[42px] lg:h-[42px]",
                                }),
                                (0, a.jsx)("span", {
                                  className:
                                    "text-white font-thin font-mono text-[16px] md:text-[18px] lg:text-[22px]",
                                  children: "VaderAI",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "hidden sm:flex items-center gap-4 lg:gap-6",
                              children: [
                                (0, a.jsx)(m, {
                                  target: "_blank",
                                  href: "https://x.com/Vader_AI_",
                                  className:
                                    "flex items-center justify-center no-underline hover:opacity-80 transition-opacity duration-300",
                                  children: (0, a.jsx)(p, {}),
                                }),
                                (0, a.jsx)(m, {
                                  target: "_blank",
                                  href: "https://t.me/vader_AI_community/",
                                  className:
                                    "flex items-center justify-center no-underline hover:opacity-80 transition-opacity duration-300",
                                  children: (0, a.jsx)("img", {
                                    src: "/TelegramLogo.svg",
                                    alt: "Telegram",
                                    className: "w-6 h-6",
                                  }),
                                }),
                                (0, a.jsx)(m, {
                                  href: "/yapping",
                                  className: (0, o.cn)(
                                    "text-white/80 text-[14px] lg:text-[16px] font-medium no-underline relative",
                                    "after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300",
                                    "hover:text-white hover:after:w-full"
                                  ),
                                  children: "Yapping",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "hidden sm:flex items-center gap-6 lg:gap-12",
                          children: u.map((e) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                className: "relative group",
                                children: [
                                  (0, a.jsxs)(m, {
                                    href: e.subItems ? "#" : e.href,
                                    isNavItem: !0,
                                    disabled: e.disabled,
                                    className: (0, o.cn)(
                                      "text-white/90 text-[16px] lg:text-[20px] no-underline relative",
                                      "after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px]",
                                      "after:bg-[#ff3864] after:transition-all after:duration-200",
                                      "hover:text-white after:w-0 hover:after:w-full",
                                      e.disabled &&
                                        "opacity-50 cursor-not-allowed hover:after:w-0",
                                      e.subItems &&
                                        (null == i
                                          ? void 0
                                          : i.startsWith("/daos")) &&
                                        "text-white after:w-full",
                                      "DAOs" === e.name &&
                                        "flex items-center gap-1"
                                    ),
                                    children: [
                                      e.name,
                                      e.subItems &&
                                        (0, a.jsx)("svg", {
                                          className:
                                            "w-4 h-4 ml-1 transform transition-transform group-hover:rotate-180",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                          children: (0, a.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M19 9l-7 7-7-7",
                                          }),
                                        }),
                                    ],
                                  }),
                                  e.subItems &&
                                    (0, a.jsx)("div", {
                                      className: (0, o.cn)(
                                        "absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-72",
                                        "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                                        "bg-[#1A1A1A] backdrop-blur-xl",
                                        "border border-[#ffffff15] rounded-xl",
                                        "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
                                        "transform transition-all duration-200 ease-out",
                                        "z-50"
                                      ),
                                      children: (0, a.jsx)("div", {
                                        className: "p-2",
                                        children: e.subItems.map((e) =>
                                          e.disabled
                                            ? (0, a.jsxs)(
                                                "div",
                                                {
                                                  className: (0, o.cn)(
                                                    "flex items-center gap-3 rounded-lg",
                                                    "px-4 py-3 mb-1 last:mb-0",
                                                    "text-[15px] font-medium",
                                                    "no-underline",
                                                    "transition-all duration-200",
                                                    "group/item",
                                                    "text-white/50 cursor-not-allowed"
                                                  ),
                                                  "aria-disabled": "true",
                                                  children: [
                                                    (0, a.jsxs)("div", {
                                                      className: "flex-1",
                                                      children: [
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            "font-semibold",
                                                          children: e.name,
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            "text-[13px] text-white/40",
                                                          children:
                                                            e.description,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, a.jsx)("svg", {
                                                      className:
                                                        "w-5 h-5 text-white/20 transition-all",
                                                      fill: "none",
                                                      viewBox: "0 0 24 24",
                                                      stroke: "currentColor",
                                                      children: (0, a.jsx)(
                                                        "path",
                                                        {
                                                          strokeLinecap:
                                                            "round",
                                                          strokeLinejoin:
                                                            "round",
                                                          strokeWidth: 2,
                                                          d: "M9 5l7 7-7 7",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                },
                                                e.href
                                              )
                                            : (0, a.jsxs)(
                                                l(),
                                                {
                                                  href: e.href,
                                                  className: (0, o.cn)(
                                                    "flex items-center gap-3 rounded-lg",
                                                    "px-4 py-3 mb-1 last:mb-0",
                                                    "text-[15px] font-medium",
                                                    "no-underline",
                                                    "transition-all duration-200",
                                                    "group/item",
                                                    "text-white/90 hover:text-white hover:bg-white/5"
                                                  ),
                                                  children: [
                                                    (0, a.jsxs)("div", {
                                                      className: "flex-1",
                                                      children: [
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            "font-semibold",
                                                          children: e.name,
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            "text-[13px] text-white/60 group-hover/item:text-white/80",
                                                          children:
                                                            e.description,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, a.jsx)("svg", {
                                                      className:
                                                        "w-5 h-5 text-white/40 group-hover/item:text-white/90 transition-all",
                                                      fill: "none",
                                                      viewBox: "0 0 24 24",
                                                      stroke: "currentColor",
                                                      children: (0, a.jsx)(
                                                        "path",
                                                        {
                                                          strokeLinecap:
                                                            "round",
                                                          strokeLinejoin:
                                                            "round",
                                                          strokeWidth: 2,
                                                          d: "M9 5l7 7-7 7",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                },
                                                e.href
                                              )
                                        ),
                                      }),
                                    }),
                                ],
                              },
                              e.name
                            )
                          ),
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-2 lg:gap-3",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "hidden md:flex items-center gap-2 lg:gap-3",
                              children: (0, a.jsx)(x.u, {}),
                            }),
                            (0, a.jsx)(h, {
                              isOpen: t,
                              onClick: () => {
                                s(!t),
                                  (document.body.style.overflow = t
                                    ? "unset"
                                    : "hidden");
                              },
                              className: "md:hidden",
                              "aria-label": t ? "Close menu" : "Open menu",
                              "aria-expanded": t,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: (0, o.cn)(
                    "fixed inset-0 z-[94] md:hidden",
                    "bg-black",
                    "transition-all duration-300 ease-out",
                    t
                      ? "opacity-100 visible"
                      : "opacity-0 invisible pointer-events-none"
                  ),
                  style: {
                    top: c ? "124px" : "60px",
                    height: "calc(100dvh - ".concat(c ? "124px" : "60px", ")"),
                  },
                  "aria-hidden": !t,
                  children: (0, a.jsxs)("div", {
                    className: (0, o.cn)(
                      "flex flex-col h-full",
                      "transition-transform duration-300 ease-out",
                      t ? "translate-x-0" : "translate-x-full"
                    ),
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "flex-shrink-0 px-6 py-4 border-b border-white/10",
                        children: (0, a.jsx)("div", {
                          className: "flex items-center justify-between",
                          children: (0, a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)("img", {
                                src: "/MiniLogo.png",
                                alt: "VaderAI",
                                className: "w-[32px] h-[32px]",
                              }),
                              (0, a.jsx)("span", {
                                className:
                                  "text-white font-thin font-mono text-[16px]",
                                children: "VaderAI",
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex-1 overflow-y-auto",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "px-6 py-4 space-y-6",
                            children: [
                              (0, a.jsx)(m, {
                                href: "/yapping",
                                onClick: g,
                                className:
                                  "block text-lg font-medium text-white/90 hover:text-white transition-colors duration-300",
                                children: "Yapping",
                              }),
                              (0, a.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "text-lg font-medium text-white/90",
                                    children: "Social",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "space-y-3 pl-4",
                                    children: [
                                      (0, a.jsx)(l(), {
                                        href: "https://x.com/Vader_AI_",
                                        onClick: g,
                                        className:
                                          "block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200",
                                        children: (0, a.jsxs)("div", {
                                          className: "flex items-center gap-3",
                                          children: [
                                            (0, a.jsx)(p, {}),
                                            (0, a.jsx)("div", {
                                              className:
                                                "text-white font-medium",
                                              children: "Twitter",
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsx)(l(), {
                                        href: "https://t.me/vader_AI_community/",
                                        onClick: g,
                                        className:
                                          "block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200",
                                        children: (0, a.jsxs)("div", {
                                          className: "flex items-center gap-3",
                                          children: [
                                            (0, a.jsx)("img", {
                                              src: "/TelegramLogo.svg",
                                              alt: "Telegram",
                                              className: "w-6 h-6",
                                            }),
                                            (0, a.jsx)("div", {
                                              className:
                                                "text-white font-medium",
                                              children: "Telegram",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              u.map((e) =>
                                (0, a.jsx)(
                                  "div",
                                  {
                                    className: "space-y-4",
                                    children: e.subItems
                                      ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "text-lg font-medium text-white/90",
                                              children: e.name,
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "space-y-3 pl-4",
                                              children: e.subItems.map((e) =>
                                                e.disabled
                                                  ? (0, a.jsx)(
                                                      "div",
                                                      {
                                                        className: (0, o.cn)(
                                                          "block p-3 rounded-lg",
                                                          "bg-white/3 cursor-not-allowed"
                                                        ),
                                                        "aria-disabled": "true",
                                                        children: (0, a.jsx)(
                                                          "div",
                                                          {
                                                            className:
                                                              "font-medium text-white/50",
                                                            children: e.name,
                                                          }
                                                        ),
                                                      },
                                                      e.href
                                                    )
                                                  : (0, a.jsxs)(
                                                      l(),
                                                      {
                                                        href: e.href,
                                                        onClick: g,
                                                        className:
                                                          "block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200",
                                                        children: [
                                                          (0, a.jsx)("div", {
                                                            className:
                                                              "text-white font-medium",
                                                            children: e.name,
                                                          }),
                                                          (0, a.jsx)("div", {
                                                            className:
                                                              "text-sm text-white/60 mt-1",
                                                            children:
                                                              e.description,
                                                          }),
                                                        ],
                                                      },
                                                      e.href
                                                    )
                                              ),
                                            }),
                                          ],
                                        })
                                      : (0, a.jsx)(m, {
                                          href: e.href,
                                          onClick: g,
                                          disabled: e.disabled,
                                          className: (0, o.cn)(
                                            "block text-lg font-medium",
                                            "text-white/90 hover:text-white transition-colors duration-300",
                                            e.disabled &&
                                              "opacity-50 cursor-not-allowed",
                                            i === e.href && "text-white"
                                          ),
                                          children: e.name,
                                        }),
                                  },
                                  e.name
                                )
                              ),
                            ],
                          }),
                          (0, a.jsx)("div", { className: "h-32" }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "sticky bottom-0 left-0 right-0 px-6 py-4 border-t border-white/10 space-y-3 bg-black",
                        children: (0, a.jsx)(x.u, {}),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        };
      var y = s(85552),
        k = s(10351);
      let C = () => {
        let [e, t] = (0, r.useState)(!1),
          s = async () => {
            try {
              await navigator.clipboard.writeText(
                "0x731814e491571a2e9ee3c5b1f7f3b962ee8f4870"
              ),
                t(!0),
                setTimeout(() => t(!1), 2e3);
            } catch (e) {
              console.error("Failed to copy: ", e);
            }
          };
        return (0, a.jsx)("footer", {
          className: "w-full text-white py-6 mt-2 border-t border-[#89898924]",
          children: (0, a.jsx)("div", {
            className: "container mx-auto px-4",
            children: (0, a.jsxs)("div", {
              className:
                "flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4 lg:gap-8 text-sm",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-wrap items-center gap-2 lg:gap-3 text-[#D8D8D8] justify-center lg:justify-start",
                  children: [
                    (0, a.jsxs)(l(), {
                      href: "/",
                      className:
                        "flex items-center hover:opacity-80 transition-opacity",
                      "aria-label": "Go to homepage",
                      children: [
                        (0, a.jsx)("img", {
                          src: "/MiniLogo.png",
                          alt: "VaderAI",
                          width: 24,
                          height: 24,
                          className: "mr-2",
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "text-[16px] font-thin font-mono text-white",
                          children: "VaderAI",
                        }),
                      ],
                    }),
                    (0, a.jsx)("span", {
                      className: "text-gray-500",
                      children: "|",
                    }),
                    (0, a.jsx)("span", {
                      className: "whitespace-nowrap",
                      children: "\xa9 2025 vaderai.ai All Rights Reserved.",
                    }),
                    (0, a.jsx)("span", {
                      className: "text-gray-500",
                      children: "|",
                    }),
                    (0, a.jsx)(l(), {
                      href: "/terms",
                      className:
                        "hover:text-white transition-colors whitespace-nowrap",
                      children: "Terms & Conditions",
                    }),
                    (0, a.jsx)("span", {
                      className: "text-gray-500",
                      children: "|",
                    }),
                    (0, a.jsx)(l(), {
                      href: "/privacy",
                      className:
                        "hover:text-white transition-colors whitespace-nowrap",
                      children: "Privacy Policy",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-wrap items-center gap-2 lg:gap-3 text-[#D8D8D8] justify-center lg:justify-end",
                  children: [
                    (0, a.jsx)(l(), {
                      href: "https://vaderai.gitbook.io/litepaper",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:text-white transition-colors",
                      children: "Litepaper",
                    }),
                    (0, a.jsx)("span", {
                      className: "text-gray-500",
                      children: "|",
                    }),
                    (0, a.jsx)(l(), {
                      href: "https://t.me/vader_AI_community/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "flex items-center hover:text-white transition-colors",
                      title: "Telegram",
                      children: (0, a.jsx)("img", {
                        src: "/TelegramLogo.svg",
                        alt: "Telegram",
                        width: 16,
                        height: 16,
                      }),
                    }),
                    (0, a.jsx)("span", {
                      className: "text-gray-500",
                      children: "|",
                    }),
                    (0, a.jsx)(l(), {
                      href: "https://x.com/Vader_AI_",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "flex items-center hover:text-white transition-colors",
                      title: "X (Twitter)",
                      children: (0, a.jsx)(y.u, { className: "w-4 h-4" }),
                    }),
                    (0, a.jsx)("span", {
                      className: "text-gray-500",
                      children: "|",
                    }),
                    (0, a.jsx)(l(), {
                      href: "https://www.gate.io/trade/VADER_USDT",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:text-white transition-colors",
                      children: "Gate",
                    }),
                    (0, a.jsx)("span", {
                      className: "text-gray-500",
                      children: "|",
                    }),
                    (0, a.jsx)(l(), {
                      href: "https://www.coingecko.com/en/coins/vaderai-by-virtuals",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "flex items-center hover:text-white transition-colors",
                      title: "CoinGecko",
                      children: (0, a.jsx)("img", {
                        src: "/coingecko-logo.svg",
                        alt: "CoinGecko",
                        width: 24,
                        height: 24,
                      }),
                    }),
                    (0, a.jsx)("span", {
                      className: "text-gray-500",
                      children: "|",
                    }),
                    (0, a.jsxs)("button", {
                      onClick: s,
                      className:
                        "flex items-center gap-1.5 px-2 py-1 border border-[#343434] hover:border-[#454545] rounded transition-all hover:bg-[#343434]/20",
                      title: "Copy contract address",
                      children: [
                        (0, a.jsx)("span", {
                          className: "whitespace-nowrap text-xs",
                          children: "$VADER 0x731...4870",
                        }),
                        e
                          ? (0, a.jsx)(k.YrT, { className: "w-2.5 h-2.5" })
                          : (0, a.jsx)(k.nxz, { className: "w-2.5 h-2.5" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      function A(e) {
        let { children: t } = e,
          [s, i] = (0, r.useState)(!1),
          l = (0, n.usePathname)(),
          o = null == l ? void 0 : l.startsWith("/megatron"),
          c = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          };
        return (
          (0, r.useEffect)(() => {
            c();
          }, []),
          (0, r.useEffect)(() => {
            c();
          }, [l]),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              className:
                "flex flex-col min-h-screen bg-transparent relative z-10 overflow-x-hidden",
              children: [
                !o &&
                  (0, a.jsx)("div", {
                    className: "fixed top-0 left-0 right-0 z-[93]",
                    children: (0, a.jsx)(N, {
                      mobileMenuOpen: s,
                      setMobileMenuOpen: i,
                    }),
                  }),
                (0, a.jsx)("main", {
                  className:
                    "flex-1 w-full max-w-[100vw] overflow-x-hidden transition-all duration-500",
                  children: t,
                }),
                !o && (0, a.jsx)(C, {}),
              ],
            }),
          })
        );
      }
    },
    85552: (e, t, s) => {
      "use strict";
      s.d(t, { u: () => r });
      var a = s(95155);
      let r = (e) => {
        let { className: t = "", onClick: s } = e;
        return (0, a.jsx)("svg", {
          viewBox: "0 0 24 24",
          className: t,
          onClick: s,
          fill: "currentColor",
          "aria-hidden": "true",
          children: (0, a.jsx)("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
          }),
        });
      };
    },
    96354: (e, t, s) => {
      "use strict";
      s.d(t, { Providers: () => p });
      var a = s(95155),
        r = s(12115),
        i = s(55028),
        l = s(51362);
      let n = (0, r.createContext)(void 0);
      function o(e) {
        let { children: t } = e,
          [s, i] = (0, r.useState)(null);
        return (
          (0, r.useEffect)(() => {
            let e = sessionStorage.getItem("twitter_data");
            e && i(JSON.parse(e));
          }, []),
          (0, a.jsx)(n.Provider, {
            value: {
              twitterData: s,
              setTwitterData: i,
              logout: () => {
                sessionStorage.removeItem("twitter_data"), i(null);
              },
            },
            children: t,
          })
        );
      }
      var c = s(43939),
        d = s(87017),
        m = s(26715);
      let x = (0, i.default)(
          () =>
            Promise.all([s.e(4818), s.e(8652), s.e(9363)]).then(
              s.bind(s, 34466)
            ),
          {
            loadableGenerated: { webpack: () => [34466] },
            ssr: !1,
            loading: () => (0, a.jsx)("div", { children: "Loading wallet..." }),
          }
        ),
        h = new d.E();
      function p(e) {
        let { children: t } = e;
        return (0, a.jsx)(c.CP, {
          children: (0, a.jsx)(m.Ht, {
            client: h,
            children: (0, a.jsx)(x, {
              children: (0, a.jsx)(l.N, {
                attribute: "class",
                defaultTheme: "dark",
                enableSystem: !1,
                children: (0, a.jsx)(o, { children: t }),
              }),
            }),
          }),
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [
        4106, 3128, 9426, 7690, 8451, 844, 7892, 6129, 4277, 4138, 842, 4562,
        6874, 9543, 6766, 2451, 7893, 6720, 6320, 2803, 8441, 1684, 7358,
      ],
      () => t(50966)
    ),
      (_N_E = e.O());
  },
]);
