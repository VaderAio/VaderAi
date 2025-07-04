"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2451],
  {
    5845: (e, t, n) => {
      n.d(t, { i: () => u });
      var r,
        o = n(12115),
        i = n(52712),
        l =
          (r || (r = n.t(o, 2)))[" useInsertionEffect ".trim().toString()] ||
          i.N;
      function u({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r,
      }) {
        let [i, u, a] = (function ({ defaultProp: e, onChange: t }) {
            let [n, r] = o.useState(e),
              i = o.useRef(n),
              u = o.useRef(t);
            return (
              l(() => {
                u.current = t;
              }, [t]),
              o.useEffect(() => {
                i.current !== n && (u.current?.(n), (i.current = n));
              }, [n, i]),
              [n, r, u]
            );
          })({ defaultProp: t, onChange: n }),
          s = void 0 !== e,
          c = s ? e : i;
        {
          let t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            let e = t.current;
            if (e !== s) {
              let t = s ? "controlled" : "uncontrolled";
              console.warn(
                `${r} is changing from ${
                  e ? "controlled" : "uncontrolled"
                } to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
              );
            }
            t.current = s;
          }, [s, r]);
        }
        return [
          c,
          o.useCallback(
            (t) => {
              if (s) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && a.current?.(n);
              } else u(t);
            },
            [s, e, u, a]
          ),
        ];
      }
      Symbol("RADIX:SYNC_STATE");
    },
    6101: (e, t, n) => {
      n.d(t, { s: () => l, t: () => i });
      var r = n(12115);
      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function i(...e) {
        return (t) => {
          let n = !1,
            r = e.map((e) => {
              let r = o(e, t);
              return n || "function" != typeof r || (n = !0), r;
            });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                let n = r[t];
                "function" == typeof n ? n() : o(e[t], null);
              }
            };
        };
      }
      function l(...e) {
        return r.useCallback(i(...e), e);
      }
    },
    28905: (e, t, n) => {
      n.d(t, { C: () => l });
      var r = n(12115),
        o = n(6101),
        i = n(52712),
        l = (e) => {
          let { present: t, children: n } = e,
            l = (function (e) {
              var t, n;
              let [o, l] = r.useState(),
                a = r.useRef(null),
                s = r.useRef(e),
                c = r.useRef("none"),
                [d, f] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  r.useReducer((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                r.useEffect(() => {
                  let e = u(a.current);
                  c.current = "mounted" === d ? e : "none";
                }, [d]),
                (0, i.N)(() => {
                  let t = a.current,
                    n = s.current;
                  if (n !== e) {
                    let r = c.current,
                      o = u(t);
                    e
                      ? f("MOUNT")
                      : "none" === o ||
                        (null == t ? void 0 : t.display) === "none"
                      ? f("UNMOUNT")
                      : n && r !== o
                      ? f("ANIMATION_OUT")
                      : f("UNMOUNT"),
                      (s.current = e);
                  }
                }, [e, f]),
                (0, i.N)(() => {
                  if (o) {
                    var e;
                    let t,
                      n =
                        null != (e = o.ownerDocument.defaultView) ? e : window,
                      r = (e) => {
                        let r = u(a.current).includes(e.animationName);
                        if (
                          e.target === o &&
                          r &&
                          (f("ANIMATION_END"), !s.current)
                        ) {
                          let e = o.style.animationFillMode;
                          (o.style.animationFillMode = "forwards"),
                            (t = n.setTimeout(() => {
                              "forwards" === o.style.animationFillMode &&
                                (o.style.animationFillMode = e);
                            }));
                        }
                      },
                      i = (e) => {
                        e.target === o && (c.current = u(a.current));
                      };
                    return (
                      o.addEventListener("animationstart", i),
                      o.addEventListener("animationcancel", r),
                      o.addEventListener("animationend", r),
                      () => {
                        n.clearTimeout(t),
                          o.removeEventListener("animationstart", i),
                          o.removeEventListener("animationcancel", r),
                          o.removeEventListener("animationend", r);
                      }
                    );
                  }
                  f("ANIMATION_END");
                }, [o, f]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(d),
                  ref: r.useCallback((e) => {
                    (a.current = e ? getComputedStyle(e) : null), l(e);
                  }, []),
                }
              );
            })(t),
            a =
              "function" == typeof n
                ? n({ present: l.isPresent })
                : r.Children.only(n),
            s = (0, o.s)(
              l.ref,
              (function (e) {
                var t, n;
                let r =
                    null ==
                    (t = Object.getOwnPropertyDescriptor(e.props, "ref"))
                      ? void 0
                      : t.get,
                  o = r && "isReactWarning" in r && r.isReactWarning;
                return o
                  ? e.ref
                  : (o =
                      (r =
                        null == (n = Object.getOwnPropertyDescriptor(e, "ref"))
                          ? void 0
                          : n.get) &&
                      "isReactWarning" in r &&
                      r.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref;
              })(a)
            );
          return "function" == typeof n || l.isPresent
            ? r.cloneElement(a, { ref: s })
            : null;
        };
      function u(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      l.displayName = "Presence";
    },
    40157: (e, t, n) => {
      n.d(t, { A: () => a });
      var r = n(12115);
      let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        i = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t
            .filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t)
            .join(" ")
            .trim();
        };
      var l = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let u = (0, r.forwardRef)((e, t) => {
          let {
            color: n = "currentColor",
            size: o = 24,
            strokeWidth: u = 2,
            absoluteStrokeWidth: a,
            className: s = "",
            children: c,
            iconNode: d,
            ...f
          } = e;
          return (0, r.createElement)(
            "svg",
            {
              ref: t,
              ...l,
              width: o,
              height: o,
              stroke: n,
              strokeWidth: a ? (24 * Number(u)) / Number(o) : u,
              className: i("lucide", s),
              ...f,
            },
            [
              ...d.map((e) => {
                let [t, n] = e;
                return (0, r.createElement)(t, n);
              }),
              ...(Array.isArray(c) ? c : [c]),
            ]
          );
        }),
        a = (e, t) => {
          let n = (0, r.forwardRef)((n, l) => {
            let { className: a, ...s } = n;
            return (0, r.createElement)(u, {
              ref: l,
              iconNode: t,
              className: i("lucide-".concat(o(e)), a),
              ...s,
            });
          });
          return (n.displayName = "".concat(e)), n;
        };
    },
    46081: (e, t, n) => {
      n.d(t, { A: () => l, q: () => i });
      var r = n(12115),
        o = n(95155);
      function i(e, t) {
        let n = r.createContext(t),
          i = (e) => {
            let { children: t, ...i } = e,
              l = r.useMemo(() => i, Object.values(i));
            return (0, o.jsx)(n.Provider, { value: l, children: t });
          };
        return (
          (i.displayName = e + "Provider"),
          [
            i,
            function (o) {
              let i = r.useContext(n);
              if (i) return i;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function l(e, t = []) {
        let n = [],
          i = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let o = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o]
              );
            };
          };
        return (
          (i.scopeName = e),
          [
            function (t, i) {
              let l = r.createContext(i),
                u = n.length;
              n = [...n, i];
              let a = (t) => {
                let { scope: n, children: i, ...a } = t,
                  s = n?.[e]?.[u] || l,
                  c = r.useMemo(() => a, Object.values(a));
                return (0, o.jsx)(s.Provider, { value: c, children: i });
              };
              return (
                (a.displayName = t + "Provider"),
                [
                  a,
                  function (n, o) {
                    let a = o?.[e]?.[u] || l,
                      s = r.useContext(a);
                    if (s) return s;
                    if (void 0 !== i) return i;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(i, ...t),
          ]
        );
      }
    },
    52712: (e, t, n) => {
      n.d(t, { N: () => o });
      var r = n(12115),
        o = globalThis?.document ? r.useLayoutEffect : () => {};
    },
    61285: (e, t, n) => {
      n.d(t, { B: () => a });
      var r,
        o = n(12115),
        i = n(52712),
        l =
          (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => void 0),
        u = 0;
      function a(e) {
        let [t, n] = o.useState(l());
        return (
          (0, i.N)(() => {
            e || n((e) => e ?? String(u++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    63655: (e, t, n) => {
      n.d(t, { hO: () => a, sG: () => u });
      var r = n(12115),
        o = n(47650),
        i = n(99708),
        l = n(95155),
        u = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "select",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = (0, i.TL)(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              let { asChild: o, ...i } = e;
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, l.jsx)(o ? n : t, { ...i, ref: r })
              );
            });
          return (o.displayName = `Primitive.${t}`), { ...e, [t]: o };
        }, {});
      function a(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    85185: (e, t, n) => {
      n.d(t, { m: () => r });
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
    },
    99708: (e, t, n) => {
      n.d(t, { Dc: () => a, TL: () => l });
      var r = n(12115),
        o = n(6101),
        i = n(95155);
      function l(e) {
        let t = (function (e) {
            let t = r.forwardRef((e, t) => {
              let { children: n, ...i } = e;
              if (r.isValidElement(n)) {
                var l;
                let e,
                  u,
                  a =
                    ((l = n),
                    (u =
                      (e = Object.getOwnPropertyDescriptor(
                        l.props,
                        "ref"
                      )?.get) &&
                      "isReactWarning" in e &&
                      e.isReactWarning)
                      ? l.ref
                      : (u =
                          (e = Object.getOwnPropertyDescriptor(
                            l,
                            "ref"
                          )?.get) &&
                          "isReactWarning" in e &&
                          e.isReactWarning)
                      ? l.props.ref
                      : l.props.ref || l.ref),
                  s = (function (e, t) {
                    let n = { ...t };
                    for (let r in t) {
                      let o = e[r],
                        i = t[r];
                      /^on[A-Z]/.test(r)
                        ? o && i
                          ? (n[r] = (...e) => {
                              let t = i(...e);
                              return o(...e), t;
                            })
                          : o && (n[r] = o)
                        : "style" === r
                        ? (n[r] = { ...o, ...i })
                        : "className" === r &&
                          (n[r] = [o, i].filter(Boolean).join(" "));
                    }
                    return { ...e, ...n };
                  })(i, n.props);
                return (
                  n.type !== r.Fragment && (s.ref = t ? (0, o.t)(t, a) : a),
                  r.cloneElement(n, s)
                );
              }
              return r.Children.count(n) > 1 ? r.Children.only(null) : null;
            });
            return (t.displayName = `${e}.SlotClone`), t;
          })(e),
          n = r.forwardRef((e, n) => {
            let { children: o, ...l } = e,
              u = r.Children.toArray(o),
              a = u.find(s);
            if (a) {
              let e = a.props.children,
                o = u.map((t) =>
                  t !== a
                    ? t
                    : r.Children.count(e) > 1
                    ? r.Children.only(null)
                    : r.isValidElement(e)
                    ? e.props.children
                    : null
                );
              return (0, i.jsx)(t, {
                ...l,
                ref: n,
                children: r.isValidElement(e)
                  ? r.cloneElement(e, void 0, o)
                  : null,
              });
            }
            return (0, i.jsx)(t, { ...l, ref: n, children: o });
          });
        return (n.displayName = `${e}.Slot`), n;
      }
      var u = Symbol("radix.slottable");
      function a(e) {
        let t = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
        return (t.displayName = `${e}.Slottable`), (t.__radixId = u), t;
      }
      function s(e) {
        return (
          r.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === u
        );
      }
    },
  },
]);
