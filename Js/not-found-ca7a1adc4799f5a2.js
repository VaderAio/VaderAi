(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4345],
  {
    3197: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 8339));
    },
    8339: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => S });
      var r = n(95155),
        a = n(12115),
        s = n(35695),
        i = n(30285),
        o = n(98366),
        l = n(51508),
        c = n(97494),
        d = n(59779),
        u = n(82885);
      function p(e) {
        let t = (0, u.M)(() => (0, d.OQ)(e)),
          { isStatic: n } = (0, a.useContext)(l.Q);
        if (n) {
          let [, n] = (0, a.useState)(e);
          (0, a.useEffect)(() => t.on("change", n), []);
        }
        return t;
      }
      var m = n(14570),
        f = n(59210);
      function x(e) {
        return "number" == typeof e ? e : parseFloat(e);
      }
      function h(e, t = {}) {
        let { isStatic: n } = (0, a.useContext)(l.Q),
          r = (0, a.useRef)(null),
          s = p((0, m.S)(e) ? x(e.get()) : e),
          i = (0, a.useRef)(s.get()),
          d = (0, a.useRef)(() => {}),
          u = () => {
            let e = r.current;
            e && 0 === e.time && e.sample(f.uv.delta),
              v(),
              (r.current = (0, o.L)({
                keyframes: [s.get(), i.current],
                velocity: s.getVelocity(),
                type: "spring",
                restDelta: 0.001,
                restSpeed: 0.01,
                ...t,
                onUpdate: d.current,
              }));
          },
          v = () => {
            r.current && r.current.stop();
          };
        return (
          (0, a.useInsertionEffect)(
            () =>
              s.attach(
                (e, t) =>
                  n
                    ? t(e)
                    : ((i.current = e),
                      (d.current = t),
                      f.Gt.update(u),
                      s.get()),
                v
              ),
            [JSON.stringify(t)]
          ),
          (0, c.E)(() => {
            if ((0, m.S)(e)) return e.on("change", (e) => s.set(x(e)));
          }, [s]),
          s
        );
      }
      var v = n(97846);
      let g = (e) => e && "object" == typeof e && e.mix,
        b = (e) => (g(e) ? e.mix : void 0);
      function y(e, t) {
        let n = p(t()),
          r = () => n.set(t());
        return (
          r(),
          (0, c.E)(() => {
            let t = () => f.Gt.preRender(r, !1, !0),
              n = e.map((e) => e.on("change", t));
            return () => {
              n.forEach((e) => e()), (0, f.WG)(r);
            };
          }),
          n
        );
      }
      function N(e, t, n, r) {
        if ("function" == typeof e) {
          (d.bt.current = []), e();
          let t = y(d.bt.current, e);
          return (d.bt.current = void 0), t;
        }
        let a =
          "function" == typeof t
            ? t
            : (function (...e) {
                let t = !Array.isArray(e[0]),
                  n = t ? 0 : -1,
                  r = e[0 + n],
                  a = e[1 + n],
                  s = e[2 + n],
                  i = e[3 + n],
                  o = (0, v.G)(a, s, { mixer: b(s[0]), ...i });
                return t ? o(r) : o;
              })(t, n, r);
        return Array.isArray(e) ? E(e, a) : E([e], ([e]) => a(e));
      }
      function E(e, t) {
        let n = (0, u.M)(() => []);
        return y(e, () => {
          n.length = 0;
          let r = e.length;
          for (let t = 0; t < r; t++) n[t] = e[t].get();
          return t(n);
        });
      }
      var j = n(66129),
        w = n(59434);
      function k(e) {
        let {
            className: t,
            size: n = 200,
            springOptions: s = { bounce: 0 },
          } = e,
          i = (0, a.useRef)(null),
          [o, l] = (0, a.useState)(!1),
          [c, d] = (0, a.useState)(null),
          u = h(0, s),
          p = h(0, s),
          m = N(u, (e) => "".concat(e - n / 2, "px")),
          f = N(p, (e) => "".concat(e - n / 2, "px"));
        (0, a.useEffect)(() => {
          if (i.current) {
            let e = i.current.parentElement;
            e &&
              ((e.style.position = "relative"),
              (e.style.overflow = "hidden"),
              d(e));
          }
        }, []);
        let x = (0, a.useCallback)(
          (e) => {
            if (!c) return;
            let { left: t, top: n } = c.getBoundingClientRect();
            u.set(e.clientX - t), p.set(e.clientY - n);
          },
          [u, p, c]
        );
        return (
          (0, a.useEffect)(() => {
            if (c)
              return (
                c.addEventListener("mousemove", x),
                c.addEventListener("mouseenter", () => l(!0)),
                c.addEventListener("mouseleave", () => l(!1)),
                () => {
                  c.removeEventListener("mousemove", x),
                    c.removeEventListener("mouseenter", () => l(!0)),
                    c.removeEventListener("mouseleave", () => l(!1));
                }
              );
          }, [c, x]),
          (0, r.jsx)(j.P.div, {
            ref: i,
            className: (0, w.cn)(
              "pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200",
              "from-zinc-50 via-zinc-100 to-zinc-200",
              o ? "opacity-100" : "opacity-0",
              t
            ),
            style: { width: n, height: n, left: m, top: f },
          })
        );
      }
      if ("undefined" != typeof document) {
        let e = document.createElement("style");
        (e.innerHTML =
          "\n  @keyframes glitch404 {\n    0% {\n      transform: translate(0);\n      text-shadow: -2px 2px #ff0081, 2px -2px #2de2e6;\n    }\n    25% {\n      transform: translate(-2px, 2px);\n      text-shadow: 2px -2px #ff0081, -2px 2px #2de2e6;\n    }\n    50% {\n      transform: translate(2px, -2px);\n      text-shadow: -2px 2px #ff0081, 2px -2px #2de2e6;\n    }\n    75% {\n      transform: translate(-2px, -2px);\n      text-shadow: 2px 2px #ff0081, -2px -2px #2de2e6;\n    }\n    100% {\n      transform: translate(0);\n      text-shadow: -2px 2px #ff0081, 2px -2px #2de2e6;\n    }\n  }\n\n  @keyframes scanline {\n    0% {\n      transform: translateY(-100%);\n    }\n    100% {\n      transform: translateY(100%);\n    }\n  }\n\n  @keyframes blink {\n    0% { opacity: 0 }\n    50% { opacity: 1 }\n    100% { opacity: 0 }\n  }\n\n  .scanline {\n    position: absolute;\n    width: 100%;\n    height: 100px;\n    background: linear-gradient(\n      to bottom,\n      transparent 0%,\n      rgba(255, 0, 129, 0.2) 10%,\n      rgba(45, 226, 230, 0.2) 50%,\n      transparent 100%\n    );\n    animation: scanline 4s linear infinite;\n  }\n\n  .glitch-overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: repeating-linear-gradient(\n      0deg,\n      rgba(0, 0, 0, 0.15) 0px,\n      rgba(0, 0, 0, 0.15) 1px,\n      transparent 1px,\n      transparent 2px\n    );\n    pointer-events: none;\n  }\n"),
          document.head.appendChild(e);
      }
      let R = [
        "SYSTEM FAILURE DETECTED",
        "NEURAL NETWORK DISRUPTED",
        "QUANTUM FIELD UNSTABLE",
        "REALITY MATRIX ERROR",
        "CYBERDECK MALFUNCTION",
      ];
      function S() {
        let e = (0, s.useRouter)(),
          [t, n] = (0, a.useState)(!1),
          [o, l] = (0, a.useState)(0);
        return (
          (0, a.useEffect)(() => {
            (document.body.style.overflow = "hidden"), n(!0);
            let e = setInterval(() => {
              l((e) => (e + 1) % R.length);
            }, 2e3);
            return () => {
              (document.body.style.overflow = "auto"), clearInterval(e);
            };
          }, []),
          (0, r.jsxs)("div", {
            className: (0, w.cn)(
              "fixed inset-0 z-[9999] min-h-[100dvh] w-screen overflow-hidden bg-[#0D0E12] backdrop-blur-xl",
              t ? "animate-in fade-in-0 duration-500" : "opacity-0"
            ),
            children: [
              (0, r.jsx)("div", { className: "scanline pointer-events-none" }),
              (0, r.jsx)("div", {
                className: "glitch-overlay pointer-events-none",
              }),
              (0, r.jsx)("div", {
                className:
                  "absolute inset-0 bg-grid-white/[0.02] bg-[size:50px] pointer-events-none",
              }),
              (0, r.jsx)("div", {
                className:
                  "absolute inset-0 bg-gradient-to-tr from-[#ff0081]/10 via-[#0D0E12] to-[#2de2e6]/10 animate-gradient-xy opacity-30 pointer-events-none",
              }),
              (0, r.jsxs)("div", {
                className:
                  "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                  (0, r.jsx)(k, {
                    className: "-top-40 left-0 md:left-60 md:-top-20",
                  }),
                  (0, r.jsx)(k, {
                    className: "top-40 right-0 md:right-60 md:top-20",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "relative z-10 flex h-full w-full flex-col items-center justify-center p-4 md:p-8",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "text-center space-y-6 md:space-y-8 animate-in slide-in-from-bottom-8 duration-700 delay-300 max-w-2xl mx-auto",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "relative group",
                        children: [
                          (0, r.jsx)("h1", {
                            className:
                              "font-press-start-2p text-[6rem] sm:text-[8rem] md:text-[12rem] leading-none bg-clip-text text-transparent bg-gradient-to-b from-[#ff0081] to-[#ff0081]/50 select-none",
                            style: { animation: "glitch404 3s infinite" },
                            children: "404",
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "absolute inset-0 bg-[#ff0081]/30 mix-blend-overlay filter blur-xl opacity-50 animate-pulse group-hover:opacity-70 transition-opacity duration-300",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "space-y-4 px-4",
                        children: [
                          (0, r.jsx)("h2", {
                            className:
                              "font-press-start-2p text-base sm:text-lg md:text-xl text-[#2de2e6] animate-pulse select-none",
                            children: R[o],
                          }),
                          (0, r.jsxs)("p", {
                            className:
                              "font-mono text-xs sm:text-sm text-gray-400 max-w-md mx-auto",
                            children: [
                              (0, r.jsx)("span", {
                                className:
                                  "inline-block animate-[blink_1s_steps(1)_infinite]",
                                children: "▊",
                              }),
                              " ",
                              "ERROR: The requested neural pathway does not exist or has been terminated. Please verify your quantum coordinates and try again.",
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex flex-col sm:flex-row justify-center gap-3 md:gap-4 pt-4 animate-in fade-in-0 duration-1000 delay-500",
                        children: [
                          (0, r.jsx)(i.$, {
                            onClick: () => e.back(),
                            className:
                              "group relative font-press-start-2p text-xs md:text-sm bg-[#0D0E12]/50 hover:bg-[#ff0081]/5 text-[#ff0081]/80 hover:text-[#ff0081] border border-[#ff0081]/20 hover:border-[#ff0081]/50 overflow-hidden transition-all duration-300",
                            children: (0, r.jsxs)("span", {
                              className:
                                "relative z-10 flex items-center gap-2 px-4 md:px-6 py-3",
                              children: [
                                (0, r.jsx)("span", {
                                  className:
                                    "text-base md:text-lg group-hover:animate-pulse",
                                  children: "←",
                                }),
                                (0, r.jsx)("span", {
                                  className: "group-hover:animate-pulse",
                                  children: "Go Back",
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)(i.$, {
                            onClick: () => e.push("/"),
                            className:
                              "group relative font-press-start-2p text-xs md:text-sm bg-[#0D0E12]/50 hover:bg-[#2de2e6]/5 text-[#2de2e6]/80 hover:text-[#2de2e6] border border-[#2de2e6]/20 hover:border-[#2de2e6]/50 overflow-hidden transition-all duration-300",
                            children: (0, r.jsxs)("span", {
                              className:
                                "relative z-10 flex items-center gap-2 px-4 md:px-6 py-3",
                              children: [
                                (0, r.jsx)("span", {
                                  className:
                                    "text-base md:text-lg group-hover:animate-pulse",
                                  children: "⚡",
                                }),
                                (0, r.jsx)("span", {
                                  className: "group-hover:animate-pulse",
                                  children: "Return to Base",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff0081]/50 to-transparent",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2de2e6]/50 to-transparent",
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    30285: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => i });
      var r = n(95155),
        a = n(12115),
        s = n(59434);
      let i = a.forwardRef((e, t) => {
        let {
          className: n,
          variant: a = "default",
          size: i = "default",
          ...o
        } = e;
        return (0, r.jsx)("button", {
          className: (0, s.cn)(
            "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-500 disabled:pointer-events-none disabled:opacity-50",
            {
              "bg-pink-500 text-white shadow hover:bg-pink-600":
                "default" === a,
              "hover:bg-pink-500/10": "ghost" === a,
              "border border-pink-500/20 bg-transparent hover:bg-pink-500/10":
                "outline" === a,
              "h-9 px-4": "default" === i,
              "h-8 px-3 text-sm": "sm" === i,
              "h-10 px-8": "lg" === i,
              "h-9 w-9 p-0": "icon" === i,
            },
            n
          ),
          ref: t,
          ...o,
        });
      });
      i.displayName = "Button";
    },
    35695: (e, t, n) => {
      "use strict";
      var r = n(18999);
      n.o(r, "usePathname") &&
        n.d(t, {
          usePathname: function () {
            return r.usePathname;
          },
        }),
        n.o(r, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          }),
        n.o(r, "useSearchParams") &&
          n.d(t, {
            useSearchParams: function () {
              return r.useSearchParams;
            },
          });
    },
    59434: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i, cn: () => s });
      var r = n(52596),
        a = n(39688);
      function s() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, a.QP)((0, r.$)(t));
      }
      let i = (e) =>
        new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(e);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [7892, 6129, 4277, 8441, 1684, 7358], () => t(3197)), (_N_E = e.O());
  },
]);
