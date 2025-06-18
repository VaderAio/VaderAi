"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9759],
  {
    3617: (e, t, r) => {
      r.d(t, { U: () => a });
      var n = r(99535);
      function a() {
        return (0, n.createBrowserClient)(
          "https://mxbhnaqmnkndrqydbswb.supabase.co",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14YmhuYXFtbmtuZHJxeWRic3diIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMjE4MDUsImV4cCI6MjA1OTg5NzgwNX0.dpWFAqeqOzvFvgf9yLxmjDnNcPcwCIVeN7pZwew56GA"
        );
      }
    },
    10518: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(40157).A)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    25318: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(40157).A)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    30285: (e, t, r) => {
      r.d(t, { $: () => l });
      var n = r(95155),
        a = r(12115),
        s = r(59434);
      let l = a.forwardRef((e, t) => {
        let {
          className: r,
          variant: a = "default",
          size: l = "default",
          ...i
        } = e;
        return (0, n.jsx)("button", {
          className: (0, s.cn)(
            "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-500 disabled:pointer-events-none disabled:opacity-50",
            {
              "bg-pink-500 text-white shadow hover:bg-pink-600":
                "default" === a,
              "hover:bg-pink-500/10": "ghost" === a,
              "border border-pink-500/20 bg-transparent hover:bg-pink-500/10":
                "outline" === a,
              "h-9 px-4": "default" === l,
              "h-8 px-3 text-sm": "sm" === l,
              "h-10 px-8": "lg" === l,
              "h-9 w-9 p-0": "icon" === l,
            },
            r
          ),
          ref: t,
          ...i,
        });
      });
      l.displayName = "Button";
    },
    57383: (e, t, r) => {
      function n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) e[n] = r[n];
        }
        return e;
      }
      r.d(t, { A: () => a });
      var a = (function e(t, r) {
        function a(e, a, s) {
          if ("undefined" != typeof document) {
            "number" == typeof (s = n({}, r, s)).expires &&
              (s.expires = new Date(Date.now() + 864e5 * s.expires)),
              s.expires && (s.expires = s.expires.toUTCString()),
              (e = encodeURIComponent(e)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape));
            var l = "";
            for (var i in s)
              s[i] &&
                ((l += "; " + i),
                !0 !== s[i] && (l += "=" + s[i].split(";")[0]));
            return (document.cookie = e + "=" + t.write(a, e) + l);
          }
        }
        return Object.create(
          {
            set: a,
            get: function (e) {
              if ("undefined" != typeof document && (!arguments.length || e)) {
                for (
                  var r = document.cookie ? document.cookie.split("; ") : [],
                    n = {},
                    a = 0;
                  a < r.length;
                  a++
                ) {
                  var s = r[a].split("="),
                    l = s.slice(1).join("=");
                  try {
                    var i = decodeURIComponent(s[0]);
                    if (((n[i] = t.read(l, i)), e === i)) break;
                  } catch (e) {}
                }
                return e ? n[e] : n;
              }
            },
            remove: function (e, t) {
              a(e, "", n({}, t, { expires: -1 }));
            },
            withAttributes: function (t) {
              return e(this.converter, n({}, this.attributes, t));
            },
            withConverter: function (t) {
              return e(n({}, this.converter, t), this.attributes);
            },
          },
          {
            attributes: { value: Object.freeze(r) },
            converter: { value: Object.freeze(t) },
          }
        );
      })(
        {
          read: function (e) {
            return (
              '"' === e[0] && (e = e.slice(1, -1)),
              e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            );
          },
          write: function (e) {
            return encodeURIComponent(e).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent
            );
          },
        },
        { path: "/" }
      );
    },
    59434: (e, t, r) => {
      r.d(t, { Z: () => l, cn: () => s });
      var n = r(52596),
        a = r(39688);
      function s() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, a.QP)((0, n.$)(t));
      }
      let l = (e) =>
        new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(e);
    },
    67820: (e, t, r) => {
      r.d(t, { C1: () => j, bL: () => y });
      var n = r(12115),
        a = r(6101),
        s = r(46081),
        l = r(85185),
        i = r(5845),
        o = r(11275),
        c = r(28905),
        d = r(63655),
        u = r(95155),
        p = "Checkbox",
        [f, m] = (0, s.A)(p),
        [x, h] = f(p);
      function b(e) {
        let {
            __scopeCheckbox: t,
            checked: r,
            children: a,
            defaultChecked: s,
            disabled: l,
            form: o,
            name: c,
            onCheckedChange: d,
            required: f,
            value: m = "on",
            internal_do_not_use_render: h,
          } = e,
          [b, g] = (0, i.i)({
            prop: r,
            defaultProp: null != s && s,
            onChange: d,
            caller: p,
          }),
          [v, y] = n.useState(null),
          [k, j] = n.useState(null),
          w = n.useRef(!1),
          N = !v || !!o || !!v.closest("form"),
          I = {
            checked: b,
            disabled: l,
            setChecked: g,
            control: v,
            setControl: y,
            name: c,
            form: o,
            value: m,
            hasConsumerStoppedPropagationRef: w,
            required: f,
            defaultChecked: !C(s) && s,
            isFormControl: N,
            bubbleInput: k,
            setBubbleInput: j,
          };
        return (0, u.jsx)(x, {
          scope: t,
          ...I,
          children: "function" == typeof h ? h(I) : a,
        });
      }
      var g = "CheckboxTrigger",
        v = n.forwardRef((e, t) => {
          let { __scopeCheckbox: r, onKeyDown: s, onClick: i, ...o } = e,
            {
              control: c,
              value: p,
              disabled: f,
              checked: m,
              required: x,
              setControl: b,
              setChecked: v,
              hasConsumerStoppedPropagationRef: y,
              isFormControl: k,
              bubbleInput: j,
            } = h(g, r),
            w = (0, a.s)(t, b),
            N = n.useRef(m);
          return (
            n.useEffect(() => {
              let e = null == c ? void 0 : c.form;
              if (e) {
                let t = () => v(N.current);
                return (
                  e.addEventListener("reset", t),
                  () => e.removeEventListener("reset", t)
                );
              }
            }, [c, v]),
            (0, u.jsx)(d.sG.button, {
              type: "button",
              role: "checkbox",
              "aria-checked": C(m) ? "mixed" : m,
              "aria-required": x,
              "data-state": I(m),
              "data-disabled": f ? "" : void 0,
              disabled: f,
              value: p,
              ...o,
              ref: w,
              onKeyDown: (0, l.m)(s, (e) => {
                "Enter" === e.key && e.preventDefault();
              }),
              onClick: (0, l.m)(i, (e) => {
                v((e) => !!C(e) || !e),
                  j &&
                    k &&
                    ((y.current = e.isPropagationStopped()),
                    y.current || e.stopPropagation());
              }),
            })
          );
        });
      v.displayName = g;
      var y = n.forwardRef((e, t) => {
        let {
          __scopeCheckbox: r,
          name: n,
          checked: a,
          defaultChecked: s,
          required: l,
          disabled: i,
          value: o,
          onCheckedChange: c,
          form: d,
          ...p
        } = e;
        return (0, u.jsx)(b, {
          __scopeCheckbox: r,
          checked: a,
          defaultChecked: s,
          disabled: i,
          required: l,
          onCheckedChange: c,
          name: n,
          form: d,
          value: o,
          internal_do_not_use_render: (e) => {
            let { isFormControl: n } = e;
            return (0, u.jsxs)(u.Fragment, {
              children: [
                (0, u.jsx)(v, { ...p, ref: t, __scopeCheckbox: r }),
                n && (0, u.jsx)(N, { __scopeCheckbox: r }),
              ],
            });
          },
        });
      });
      y.displayName = p;
      var k = "CheckboxIndicator",
        j = n.forwardRef((e, t) => {
          let { __scopeCheckbox: r, forceMount: n, ...a } = e,
            s = h(k, r);
          return (0, u.jsx)(c.C, {
            present: n || C(s.checked) || !0 === s.checked,
            children: (0, u.jsx)(d.sG.span, {
              "data-state": I(s.checked),
              "data-disabled": s.disabled ? "" : void 0,
              ...a,
              ref: t,
              style: { pointerEvents: "none", ...e.style },
            }),
          });
        });
      j.displayName = k;
      var w = "CheckboxBubbleInput",
        N = n.forwardRef((e, t) => {
          let { __scopeCheckbox: r, ...s } = e,
            {
              control: l,
              hasConsumerStoppedPropagationRef: i,
              checked: c,
              defaultChecked: p,
              required: f,
              disabled: m,
              name: x,
              value: b,
              form: g,
              bubbleInput: v,
              setBubbleInput: y,
            } = h(w, r),
            k = (0, a.s)(t, y),
            j = (function (e) {
              let t = n.useRef({ value: e, previous: e });
              return n.useMemo(
                () => (
                  t.current.value !== e &&
                    ((t.current.previous = t.current.value),
                    (t.current.value = e)),
                  t.current.previous
                ),
                [e]
              );
            })(c),
            N = (0, o.X)(l);
          n.useEffect(() => {
            if (!v) return;
            let e = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "checked"
              ).set,
              t = !i.current;
            if (j !== c && e) {
              let r = new Event("click", { bubbles: t });
              (v.indeterminate = C(c)),
                e.call(v, !C(c) && c),
                v.dispatchEvent(r);
            }
          }, [v, j, c, i]);
          let I = n.useRef(!C(c) && c);
          return (0, u.jsx)(d.sG.input, {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: null != p ? p : I.current,
            required: f,
            disabled: m,
            name: x,
            value: b,
            form: g,
            ...s,
            tabIndex: -1,
            ref: k,
            style: {
              ...s.style,
              ...N,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
              transform: "translateX(-100%)",
            },
          });
        });
      function C(e) {
        return "indeterminate" === e;
      }
      function I(e) {
        return C(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      N.displayName = w;
    },
    77173: (e, t, r) => {
      r.d(t, { u: () => I });
      var n = r(95155),
        a = r(63439),
        s = r(12115),
        l = r(46720),
        i = r(25318),
        o = r(59434);
      let c = l.bL;
      l.l9;
      let d = l.ZL;
      l.bm;
      let u = s.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)(l.hJ, {
          ref: t,
          className: (0, o.cn)(
            "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            r
          ),
          ...a,
        });
      });
      u.displayName = l.hJ.displayName;
      let p = s.forwardRef((e, t) => {
        let { className: r, children: a, ...s } = e;
        return (0, n.jsxs)(d, {
          children: [
            (0, n.jsx)(u, {}),
            (0, n.jsxs)(l.UC, {
              ref: t,
              className: (0, o.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                r
              ),
              ...s,
              children: [
                a,
                (0, n.jsxs)(l.bm, {
                  className:
                    "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                  children: [
                    (0, n.jsx)(i.A, { className: "h-4 w-4" }),
                    (0, n.jsx)("span", {
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
      p.displayName = l.UC.displayName;
      let f = (e) => {
        let { className: t, ...r } = e;
        return (0, n.jsx)("div", {
          className: (0, o.cn)(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            t
          ),
          ...r,
        });
      };
      f.displayName = "DialogHeader";
      let m = s.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)(l.hE, {
          ref: t,
          className: (0, o.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            r
          ),
          ...a,
        });
      });
      m.displayName = l.hE.displayName;
      let x = s.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)(l.VY, {
          ref: t,
          className: (0, o.cn)("text-sm text-muted-foreground", r),
          ...a,
        });
      });
      x.displayName = l.VY.displayName;
      var h = r(30285),
        b = r(67820),
        g = r(10518);
      let v = s.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)(b.bL, {
          ref: t,
          className: (0, o.cn)(
            "peer h-4 w-4 shrink-0 rounded-sm border border-white/20 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white data-[state=checked]:text-black",
            r
          ),
          ...a,
          children: (0, n.jsx)(b.C1, {
            className: (0, o.cn)(
              "flex items-center justify-center text-current"
            ),
            children: (0, n.jsx)(g.A, { className: "h-4 w-4" }),
          }),
        });
      });
      v.displayName = b.bL.displayName;
      var y = r(6874),
        k = r.n(y),
        j = r(57383);
      let w = "wallet_consent",
        N = (e) => {
          let { isOpen: t, onClose: r, onAccept: a } = e,
            [l, i] = (0, s.useState)(!1),
            [o, d] = (0, s.useState)(!1);
          return (0, n.jsx)(c, {
            open: t,
            onOpenChange: r,
            children: (0, n.jsxs)(p, {
              className:
                "max-w-3xl w-[80vw] bg-black border border-white/20 p-8",
              children: [
                (0, n.jsxs)(f, {
                  children: [
                    (0, n.jsx)(m, {
                      className: "text-3xl font-bold",
                      children: "Terms & Conditions",
                    }),
                    (0, n.jsx)(x, {
                      className: "text-gray-400 mt-3 text-[20px]",
                      children: "To proceed, review and accept the following:",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "flex flex-col gap-5 mt-6",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex items-start space-x-4",
                      children: [
                        (0, n.jsx)(v, {
                          id: "terms",
                          checked: l,
                          onCheckedChange: (e) => i(e),
                          className: "mt-1.5 h-5 w-5",
                        }),
                        (0, n.jsxs)("label", {
                          htmlFor: "terms",
                          className: "text-[18px] text-gray-300",
                          children: [
                            "You acknowledge that you have read, understood and agreed to the",
                            " ",
                            " ",
                            (0, n.jsx)("br", {}),
                            (0, n.jsx)(k(), {
                              href: "/terms",
                              className: "text-blue-400 hover:underline",
                              target: "_blank",
                              children: "Terms & Conditions",
                            }),
                            " ",
                            "and",
                            " ",
                            (0, n.jsx)(k(), {
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
                    (0, n.jsxs)("div", {
                      className: "flex items-start space-x-4",
                      children: [
                        (0, n.jsx)(v, {
                          id: "cookies",
                          checked: o,
                          onCheckedChange: (e) => d(e),
                          className: "mt-1.5 h-5 w-5",
                        }),
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("label", {
                              htmlFor: "cookies",
                              className: "text-[18px] block text-gray-300",
                              children:
                                "This site uses cookies to ensure the best user experience.",
                            }),
                            (0, n.jsx)("label", {
                              htmlFor: "cookies",
                              className: "text-[18px] block text-gray-300",
                              children:
                                "By using this site, you agree to the cookie policy.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex gap-3 mt-2",
                      children: [
                        (0, n.jsx)(h.$, {
                          onClick: () => {
                            l &&
                              o &&
                              (j.A.set(w, "true", { expires: 30 }), a(), r());
                          },
                          disabled: !l || !o,
                          className:
                            "w-full bg-white text-black hover:bg-gray-100 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed py-6 text-lg",
                          children: "Accept",
                        }),
                        (0, n.jsx)(h.$, {
                          onClick: r,
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
        C = () => "true" === j.A.get(w),
        I = () => {
          let [e, t] = (0, s.useState)(!1),
            [r, l] = (0, s.useState)(!1);
          return (0, n.jsx)(a.pK.Custom, {
            children: (a) => {
              let {
                  account: s,
                  chain: i,
                  openAccountModal: o,
                  openChainModal: c,
                  openConnectModal: d,
                  authenticationStatus: u,
                  mounted: p,
                } = a,
                f = p && "loading" !== u,
                m = f && s && i && (!u || "authenticated" === u),
                x = () => {
                  C() ? d() : (t(!0), l(!0));
                };
              return (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    ...(!f && {
                      "aria-hidden": !0,
                      style: {
                        opacity: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                      },
                    }),
                    children: (() => {
                      var e;
                      return m
                        ? i.unsupported
                          ? (0, n.jsx)("button", {
                              onClick: c,
                              className:
                                "flex items-center justify-center h-[46px] px-6 bg-red-500 rounded-[58px] hover:bg-red-600 transition-colors",
                              children: (0, n.jsx)("span", {
                                className: "text-[20px] text-white font-medium",
                                children: "Wrong Network",
                              }),
                            })
                          : (0, n.jsxs)("div", {
                              style: { display: "flex", gap: 12 },
                              children: [
                                (0, n.jsx)("div", {
                                  onClick: c,
                                  className:
                                    "border border-[#3D3D3D] rounded-full w-[46px] h-[46px] flex items-center justify-center shrink-0 cursor-pointer",
                                  children:
                                    i.iconUrl &&
                                    (0, n.jsx)("img", {
                                      alt:
                                        null != (e = i.name) ? e : "Chain icon",
                                      src: i.iconUrl,
                                      className:
                                        "rounded-full w-[22px] h-[22px]",
                                    }),
                                }),
                                (0, n.jsx)("button", {
                                  onClick: o,
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                  },
                                  type: "button",
                                  className:
                                    "flex items-center justify-center h-[46px] flex-col px-6 bg-white text-black rounded-[58px] hover:bg-gray-100 transition-colors",
                                  children: (0, n.jsxs)("span", {
                                    className:
                                      "text-[20px] text-black font-medium",
                                    children: [
                                      s.address.slice(0, 6),
                                      "...",
                                      s.address.slice(-3),
                                    ],
                                  }),
                                }),
                              ],
                            })
                        : (0, n.jsx)("button", {
                            onClick: x,
                            className:
                              "flex items-center justify-center h-[46px] px-6 bg-white rounded-[58px] hover:bg-gray-100 transition-colors",
                            children: (0, n.jsx)("span", {
                              className: "text-[20px] text-black font-medium",
                              children: "Connect Wallet",
                            }),
                          });
                    })(),
                  }),
                  (0, n.jsx)(N, {
                    isOpen: e,
                    onClose: () => {
                      t(!1), l(!1);
                    },
                    onAccept: () => {
                      r && (d(), l(!1));
                    },
                  }),
                ],
              });
            },
          });
        };
    },
    93875: (e, t, r) => {
      r.d(t, { J: () => p });
      var n = r(95155),
        a = r(12115),
        s = r(63655),
        l = a.forwardRef((e, t) =>
          (0, n.jsx)(s.sG.label, {
            ...e,
            ref: t,
            onMouseDown: (t) => {
              var r;
              t.target.closest("button, input, select, textarea") ||
                (null == (r = e.onMouseDown) || r.call(e, t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault());
            },
          })
        );
      l.displayName = "Label";
      var i = r(52596);
      let o = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        c = i.$;
      var d = r(59434);
      let u = ((e, t) => (r) => {
          var n;
          if ((null == t ? void 0 : t.variants) == null)
            return c(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className
            );
          let { variants: a, defaultVariants: s } = t,
            l = Object.keys(a).map((e) => {
              let t = null == r ? void 0 : r[e],
                n = null == s ? void 0 : s[e];
              if (null === t) return null;
              let l = o(t) || o(n);
              return a[e][l];
            }),
            i =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e;
              }, {});
          return c(
            e,
            l,
            null == t || null == (n = t.compoundVariants)
              ? void 0
              : n.reduce((e, t) => {
                  let { class: r, className: n, ...a } = t;
                  return Object.entries(a).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r)
                      ? r.includes({ ...s, ...i }[t])
                      : { ...s, ...i }[t] === r;
                  })
                    ? [...e, r, n]
                    : e;
                }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className
          );
        })(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        p = a.forwardRef((e, t) => {
          let { className: r, ...a } = e;
          return (0, n.jsx)(l, { ref: t, className: (0, d.cn)(u(), r), ...a });
        });
      p.displayName = l.displayName;
    },
  },
]);
