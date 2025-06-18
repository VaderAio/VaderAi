"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7892],
  {
    175: (t, e, n) => {
      n.d(e, { Q: () => i });
      let r = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function i(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (r.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
    },
    567: (t, e, n) => {
      n.d(e, { V: () => r });
      let r = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    2217: (t, e, n) => {
      n.d(e, { D: () => a });
      var r = n(82897),
        i = n(23492);
      let s = {
          ...n(90802).W,
          color: r.y,
          backgroundColor: r.y,
          outlineColor: r.y,
          fill: r.y,
          stroke: r.y,
          borderColor: r.y,
          borderTopColor: r.y,
          borderRightColor: r.y,
          borderBottomColor: r.y,
          borderLeftColor: r.y,
          filter: i.p,
          WebkitFilter: i.p,
        },
        a = (t) => s[t];
    },
    2735: (t, e, n) => {
      function r(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, n) => {
              (e[0][n] = t.get()), (e[1][n] = t.getVelocity());
            }),
          e
        );
      }
      function i(t, e, n, i) {
        if ("function" == typeof e) {
          let [s, a] = r(i);
          e = e(void 0 !== n ? n : t.custom, s, a);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, a] = r(i);
          e = e(void 0 !== n ? n : t.custom, s, a);
        }
        return e;
      }
      n.d(e, { a: () => i });
    },
    3870: (t, e, n) => {
      n.d(e, { i: () => r });
      let r = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    5910: (t, e, n) => {
      n.d(e, { p: () => r });
      let r = (t) => Array.isArray(t);
    },
    6340: (t, e, n) => {
      n.d(e, { N: () => r });
      function r(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
    },
    6642: (t, e, n) => {
      n.d(e, { B: () => i });
      let r = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        i = {};
      for (let t in r) i[t] = { isEnabled: (e) => r[t].some((t) => !!e[t]) };
    },
    9480: (t, e, n) => {
      n.d(e, { Y: () => i });
      var r = n(6642);
      function i(t) {
        for (let e in t) r.B[e] = { ...r.B[e], ...t[e] };
      }
    },
    12083: (t, e, n) => {
      n.d(e, { V: () => o });
      var r = n(23082),
        i = n(45471),
        s = n(22282),
        a = n(97219);
      let o = {
        test: (0, a.$)("hsl", "hue"),
        parse: (0, a.q)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: a = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          i.KN.transform((0, s.a)(e)) +
          ", " +
          i.KN.transform((0, s.a)(n)) +
          ", " +
          (0, s.a)(r.X4.transform(a)) +
          ")",
      };
    },
    14060: (t, e, n) => {
      n.d(e, { I: () => r });
      function r(t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (n, r) =>
            "create" === r ? t : (e.has(r) || e.set(r, t(r)), e.get(r)),
        });
      }
    },
    14279: (t, e, n) => {
      n.d(e, { b: () => i });
      var r = n(95190);
      let i = (t) =>
        (t *= 2) < 1
          ? 0.5 * (0, r.dg)(t)
          : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
    },
    14570: (t, e, n) => {
      n.d(e, { S: () => r });
      let r = (t) => !!(t && t.getVelocity);
    },
    15315: (t, e, n) => {
      n.d(e, { f: () => r });
      function r(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    16498: (t, e, n) => {
      n.d(e, { G: () => r });
      let r = (t) => (e) => 1 - t(1 - e);
    },
    18203: (t, e, n) => {
      n.d(e, { h: () => d, q: () => h });
      var r = n(79280),
        i = n(59210);
      let s = new Set(),
        a = !1,
        o = !1;
      function l() {
        if (o) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            n = new Map();
          e.forEach((t) => {
            let e = (0, r.W9)(t);
            e.length && (n.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = n.get(t);
              e &&
                e.forEach(([e, n]) => {
                  var r;
                  null == (r = t.getValue(e)) || r.set(n);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (o = !1), (a = !1), s.forEach((t) => t.complete()), s.clear();
      }
      function u() {
        s.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (o = !0);
        });
      }
      function h() {
        u(), l();
      }
      class d {
        constructor(t, e, n, r, i, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = n),
            (this.motionValue = r),
            (this.element = i),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                a || ((a = !0), i.Gt.read(u), i.Gt.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: n,
            motionValue: r,
          } = this;
          for (let i = 0; i < t.length; i++)
            if (null === t[i])
              if (0 === i) {
                let i = null == r ? void 0 : r.get(),
                  s = t[t.length - 1];
                if (void 0 !== i) t[0] = i;
                else if (n && e) {
                  let r = n.readValue(e, s);
                  null != r && (t[0] = r);
                }
                void 0 === t[0] && (t[0] = s), r && void 0 === i && r.set(t[0]);
              } else t[i] = t[i - 1];
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    18831: (t, e, n) => {
      n.d(e, { C: () => G });
      var r = n(95155),
        i = n(12115),
        s = n(90869),
        a = n(25214),
        o = n(51508);
      let l = (0, i.createContext)({});
      var u = n(65305),
        h = n(19253);
      function d(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var c = n(68972),
        p = n(6642),
        f = n(9480);
      let m = Symbol.for("motionComponentSymbol");
      var v = n(33991),
        g = n(80845),
        y = n(97494),
        w = n(31788),
        x = n(48466),
        b = n(70797),
        S = n(175),
        A = n(59210),
        T = n(6340),
        V = n(2735),
        P = n(82885),
        M = n(95902);
      let k = (t) => (e, n) => {
        let r = (0, i.useContext)(l),
          s = (0, i.useContext)(g.t),
          a = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onUpdate: n,
              },
              r,
              i,
              s
            ) {
              let a = {
                latestValues: (function (t, e, n, r) {
                  let i = {},
                    s = r(t, {});
                  for (let t in s) i[t] = (0, M.u)(s[t]);
                  let { initial: a, animate: o } = t,
                    l = (0, h.e)(t),
                    u = (0, h.O)(t);
                  e &&
                    u &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === a && (a = e.initial),
                    void 0 === o && (o = e.animate));
                  let d = !!n && !1 === n.initial,
                    c = (d = d || !1 === a) ? o : a;
                  if (c && "boolean" != typeof c && !(0, T.N)(c)) {
                    let e = Array.isArray(c) ? c : [c];
                    for (let n = 0; n < e.length; n++) {
                      let r = (0, V.a)(t, e[n]);
                      if (r) {
                        let { transitionEnd: t, transition: e, ...n } = r;
                        for (let t in n) {
                          let e = n[t];
                          if (Array.isArray(e)) {
                            let t = d ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (i[t] = e);
                        }
                        for (let e in t) i[e] = t[e];
                      }
                    }
                  }
                  return i;
                })(r, i, s, t),
                renderState: e(),
              };
              return (
                n &&
                  ((a.onMount = (t) => n({ props: r, current: t, ...a })),
                  (a.onUpdate = (t) => n(t))),
                a
              );
            })(t, e, r, s);
        return n ? a() : (0, P.M)(a);
      };
      var C = n(87387),
        E = n(97914);
      let F = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        O = () => ({ ...F(), attrs: {} });
      var I = n(93095),
        B = n(33869),
        R = n(34527);
      let j = ["x", "y", "width", "height", "cx", "cy", "r"],
        D = {
          useVisualState: k({
            scrapeMotionValuesFromProps: R.x,
            createRenderState: O,
            onUpdate: ({
              props: t,
              prevProps: e,
              current: n,
              renderState: r,
              latestValues: i,
            }) => {
              if (!n) return;
              let s = !!t.drag;
              if (!s) {
                for (let t in i)
                  if (C.f.has(t)) {
                    s = !0;
                    break;
                  }
              }
              if (!s) return;
              let a = !e;
              if (e)
                for (let n = 0; n < j.length; n++) {
                  let r = j[n];
                  t[r] !== e[r] && (a = !0);
                }
              a &&
                A.Gt.read(() => {
                  !(function (t, e) {
                    try {
                      e.dimensions =
                        "function" == typeof t.getBBox
                          ? t.getBBox()
                          : t.getBoundingClientRect();
                    } catch (t) {
                      e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                    }
                  })(n, r),
                    A.Gt.render(() => {
                      (0, E.B)(r, i, (0, I.n)(n.tagName), t.transformTemplate),
                        (0, B.d)(n, r);
                    });
                });
            },
          }),
        },
        W = {
          useVisualState: k({
            scrapeMotionValuesFromProps: n(60990).x,
            createRenderState: F,
          }),
        };
      var $ = n(33055),
        L = n(14570),
        N = n(86169);
      function X(t, e, n) {
        for (let r in e) (0, L.S)(e[r]) || (0, $.z)(r, n) || (t[r] = e[r]);
      }
      let U = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function q(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          U.has(t)
        );
      }
      let K = (t) => !q(t);
      try {
        !(function (t) {
          t && (K = (e) => (e.startsWith("on") ? !q(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch (t) {}
      function G(t, e) {
        return function (
          n,
          { forwardMotionProps: A } = { forwardMotionProps: !1 }
        ) {
          return (function (t) {
            var e, n;
            let {
              preloadedFeatures: S,
              createVisualElement: A,
              useRender: T,
              useVisualState: V,
              Component: P,
            } = t;
            function M(t, e) {
              var n, f, m;
              let S,
                M = {
                  ...(0, i.useContext)(o.Q),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      n = (0, i.useContext)(s.L).id;
                    return n && void 0 !== e ? n + "-" + e : e;
                  })(t),
                },
                { isStatic: k } = M,
                C = (function (t) {
                  let { initial: e, animate: n } = (function (t, e) {
                    if ((0, h.e)(t)) {
                      let { initial: e, animate: n } = t;
                      return {
                        initial: !1 === e || (0, u.w)(e) ? e : void 0,
                        animate: (0, u.w)(n) ? n : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, i.useContext)(l));
                  return (0, i.useMemo)(
                    () => ({ initial: e, animate: n }),
                    [d(e), d(n)]
                  );
                })(t),
                E = V(t, k);
              if (!k && c.B) {
                (f = 0), (m = 0), (0, i.useContext)(a.Y).strict;
                let t = (function (t) {
                  let { drag: e, layout: n } = p.B;
                  if (!e && !n) return {};
                  let r = { ...e, ...n };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == n ? void 0 : n.isEnabled(t))
                        ? r.MeasureLayout
                        : void 0,
                    ProjectionNode: r.ProjectionNode,
                  };
                })(M);
                (S = t.MeasureLayout),
                  (C.visualElement = (function (t, e, n, r, s) {
                    var u, h;
                    let { visualElement: d } = (0, i.useContext)(l),
                      c = (0, i.useContext)(a.Y),
                      p = (0, i.useContext)(g.t),
                      f = (0, i.useContext)(o.Q).reducedMotion,
                      m = (0, i.useRef)(null);
                    (r = r || c.renderer),
                      !m.current &&
                        r &&
                        (m.current = r(t, {
                          visualState: e,
                          parent: d,
                          props: n,
                          presenceContext: p,
                          blockInitialAnimation: !!p && !1 === p.initial,
                          reducedMotionConfig: f,
                        }));
                    let S = m.current,
                      A = (0, i.useContext)(b.N);
                    S &&
                      !S.projection &&
                      s &&
                      ("html" === S.type || "svg" === S.type) &&
                      (function (t, e, n, r) {
                        let {
                          layoutId: i,
                          layout: s,
                          drag: a,
                          dragConstraints: o,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new n(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: i,
                            layout: s,
                            alwaysMeasureLayout: !!a || (o && (0, v.X)(o)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: r,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(m.current, n, s, A);
                    let T = (0, i.useRef)(!1);
                    (0, i.useInsertionEffect)(() => {
                      S && T.current && S.update(n, p);
                    });
                    let V = n[w.n],
                      P = (0, i.useRef)(
                        !!V &&
                          !(null == (u = window.MotionHandoffIsComplete)
                            ? void 0
                            : u.call(window, V)) &&
                          (null == (h = window.MotionHasOptimisedAnimation)
                            ? void 0
                            : h.call(window, V))
                      );
                    return (
                      (0, y.E)(() => {
                        S &&
                          ((T.current = !0),
                          (window.MotionIsMounted = !0),
                          S.updateFeatures(),
                          x.k.render(S.render),
                          P.current &&
                            S.animationState &&
                            S.animationState.animateChanges());
                      }),
                      (0, i.useEffect)(() => {
                        S &&
                          (!P.current &&
                            S.animationState &&
                            S.animationState.animateChanges(),
                          P.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ==
                                (t = window.MotionHandoffMarkAsComplete) ||
                                t.call(window, V);
                            }),
                            (P.current = !1)));
                      }),
                      S
                    );
                  })(P, E, M, A, t.ProjectionNode));
              }
              return (0, r.jsxs)(l.Provider, {
                value: C,
                children: [
                  S && C.visualElement
                    ? (0, r.jsx)(S, { visualElement: C.visualElement, ...M })
                    : null,
                  T(
                    P,
                    t,
                    ((n = C.visualElement),
                    (0, i.useCallback)(
                      (t) => {
                        t && E.onMount && E.onMount(t),
                          n && (t ? n.mount(t) : n.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : (0, v.X)(e) && (e.current = t));
                      },
                      [n]
                    )),
                    E,
                    k,
                    C.visualElement
                  ),
                ],
              });
            }
            S && (0, f.Y)(S),
              (M.displayName = "motion.".concat(
                "string" == typeof P
                  ? P
                  : "create(".concat(
                      null != (n = null != (e = P.displayName) ? e : P.name)
                        ? n
                        : "",
                      ")"
                    )
              ));
            let k = (0, i.forwardRef)(M);
            return (k[m] = P), k;
          })({
            ...((0, S.Q)(n) ? D : W),
            preloadedFeatures: t,
            useRender: (function (t = !1) {
              return (e, n, r, { latestValues: s }, a) => {
                let o = (
                    (0, S.Q)(e)
                      ? function (t, e, n, r) {
                          let s = (0, i.useMemo)(() => {
                            let n = O();
                            return (
                              (0, E.B)(n, e, (0, I.n)(r), t.transformTemplate),
                              { ...n.attrs, style: { ...n.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            X(e, t.style, t), (s.style = { ...e, ...s.style });
                          }
                          return s;
                        }
                      : function (t, e) {
                          let n = {},
                            r = (function (t, e) {
                              let n = t.style || {},
                                r = {};
                              return (
                                X(r, n, t),
                                Object.assign(
                                  r,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, i.useMemo)(() => {
                                      let n = F();
                                      return (
                                        (0, N.O)(n, e, t),
                                        Object.assign({}, n.vars, n.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                r
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((n.draggable = !1),
                              (r.userSelect =
                                r.WebkitUserSelect =
                                r.WebkitTouchCallout =
                                  "none"),
                              (r.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (n.tabIndex = 0),
                            (n.style = r),
                            n
                          );
                        }
                  )(n, s, a, e),
                  l = (function (t, e, n) {
                    let r = {};
                    for (let i in t)
                      ("values" !== i || "object" != typeof t.values) &&
                        (K(i) ||
                          (!0 === n && q(i)) ||
                          (!e && !q(i)) ||
                          (t.draggable && i.startsWith("onDrag"))) &&
                        (r[i] = t[i]);
                    return r;
                  })(n, "string" == typeof e, t),
                  u = e !== i.Fragment ? { ...l, ...o, ref: r } : {},
                  { children: h } = n,
                  d = (0, i.useMemo)(() => ((0, L.S)(h) ? h.get() : h), [h]);
                return (0, i.createElement)(e, { ...u, children: d });
              };
            })(A),
            createVisualElement: e,
            Component: n,
          });
        };
      }
    },
    19253: (t, e, n) => {
      n.d(e, { O: () => o, e: () => a });
      var r = n(6340),
        i = n(65305),
        s = n(98312);
      function a(t) {
        return (0, r.N)(t.animate) || s._.some((e) => (0, i.w)(t[e]));
      }
      function o(t) {
        return !!(a(t) || t.variants);
      }
    },
    19780: (t, e, n) => {
      n.d(e, { J: () => a });
      var r = n(93013),
        i = n(23492),
        s = n(2217);
      function a(t, e) {
        let n = (0, s.D)(t);
        return (
          n !== i.p && (n = r.f),
          n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
        );
      }
    },
    19827: (t, e, n) => {
      n.d(e, { l: () => r });
      let r = (t) => t;
    },
    19932: (t, e, n) => {
      let r;
      n.d(e, { k: () => o });
      var i = n(74492),
        s = n(59210);
      function a() {
        r = void 0;
      }
      let o = {
        now: () => (
          void 0 === r &&
            o.set(
              s.uv.isProcessing || i.W.useManualTiming
                ? s.uv.timestamp
                : performance.now()
            ),
          r
        ),
        set: (t) => {
          (r = t), queueMicrotask(a);
        },
      };
    },
    20600: (t, e, n) => {
      n.d(e, { e: () => r });
      function r(t, { style: e, vars: n }, r, i) {
        for (let s in (Object.assign(t.style, e, i && i.getProjectionStyles(r)),
        n))
          t.style.setProperty(s, n[s]);
      }
    },
    20637: (t, e, n) => {
      n.d(e, { $: () => i, H: () => r });
      let r = {};
      function i(t) {
        Object.assign(r, t);
      }
    },
    21109: (t, e, n) => {
      n.d(e, { k: () => r });
      let r = (t, e, n) => t + (e - t) * n;
    },
    22282: (t, e, n) => {
      n.d(e, { a: () => r });
      let r = (t) => Math.round(1e5 * t) / 1e5;
    },
    23082: (t, e, n) => {
      n.d(e, { X4: () => s, ai: () => i, hs: () => a });
      var r = n(77782);
      let i = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...i, transform: (t) => (0, r.q)(0, 1, t) },
        a = { ...i, default: 1 };
    },
    23492: (t, e, n) => {
      n.d(e, { p: () => l });
      var r = n(93013),
        i = n(66479);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function a(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = n.match(i.S) || [];
        if (!r) return t;
        let a = n.replace(r, ""),
          o = +!!s.has(e);
        return r !== n && (o *= 100), e + "(" + o + a + ")";
      }
      let o = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...r.f,
          getAnimatableNone: (t) => {
            let e = t.match(o);
            return e ? e.map(a).join(" ") : t;
          },
        };
    },
    24935: (t, e, n) => {
      n.d(e, { B: () => u });
      var r = n(77782),
        i = n(23082),
        s = n(22282),
        a = n(97219);
      let o = (t) => (0, r.q)(0, 255, t),
        l = { ...i.ai, transform: (t) => Math.round(o(t)) },
        u = {
          test: (0, a.$)("rgb", "red"),
          parse: (0, a.q)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(n) +
            ", " +
            (0, s.a)(i.X4.transform(r)) +
            ")",
        };
    },
    25214: (t, e, n) => {
      n.d(e, { Y: () => r });
      let r = (0, n(12115).createContext)({ strict: !1 });
    },
    25646: (t, e, n) => {
      n.d(e, { n: () => x });
      var r = n(52290),
        i = n(46256),
        s = n(51586),
        a = n(59210);
      function o(t, e, n) {
        let { props: r } = t;
        t.animationState &&
          r.whileHover &&
          t.animationState.setActive("whileHover", "Start" === n);
        let i = r["onHover" + n];
        i && a.Gt.postRender(() => i(e, (0, s.e)(e)));
      }
      class l extends r.X {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, i.PT)(
              t,
              (t) => (o(this.node, t, "Start"), (t) => o(this.node, t, "End"))
            ));
        }
        unmount() {}
      }
      var u = n(51442),
        h = n(97007);
      class d extends r.X {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, h.F)(
            (0, u.k)(this.node.current, "focus", () => this.onFocus()),
            (0, u.k)(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      function c(t, e, n) {
        let { props: r } = t;
        t.animationState &&
          r.whileTap &&
          t.animationState.setActive("whileTap", "Start" === n);
        let i = r["onTap" + ("End" === n ? "" : n)];
        i && a.Gt.postRender(() => i(e, (0, s.e)(e)));
      }
      class p extends r.X {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, i.c$)(
              t,
              (t) => (
                c(this.node, t, "Start"),
                (t, { success: e }) => c(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let f = new WeakMap(),
        m = new WeakMap(),
        v = (t) => {
          let e = f.get(t.target);
          e && e(t);
        },
        g = (t) => {
          t.forEach(v);
        },
        y = { some: 0, all: 1 };
      class w extends r.X {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: n, amount: r = "some", once: i } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: n,
              threshold: "number" == typeof r ? r : y[r],
            };
          return (function (t, e, n) {
            let r = (function ({ root: t, ...e }) {
              let n = t || document;
              m.has(n) || m.set(n, {});
              let r = m.get(n),
                i = JSON.stringify(e);
              return (
                r[i] || (r[i] = new IntersectionObserver(g, { root: t, ...e })),
                r[i]
              );
            })(e);
            return (
              f.set(t, n),
              r.observe(t),
              () => {
                f.delete(t), r.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), i && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: n, onViewportLeave: r } =
                this.node.getProps(),
              s = e ? n : r;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (n) => t[n] !== e[n];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let x = {
        inView: { Feature: w },
        tap: { Feature: p },
        focus: { Feature: d },
        hover: { Feature: l },
      };
    },
    31070: (t, e, n) => {
      n.d(e, { $: () => r });
      let r = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...n(87387).U,
      ]);
    },
    31788: (t, e, n) => {
      n.d(e, { n: () => r });
      let r = "data-" + (0, n(78450).I)("framerAppearId");
    },
    33055: (t, e, n) => {
      n.d(e, { z: () => s });
      var r = n(20637),
        i = n(87387);
      function s(t, { layout: e, layoutId: n }) {
        return (
          i.f.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== n) && (!!r.H[t] || "opacity" === t))
        );
      }
    },
    33757: (t, e, n) => {
      n.d(e, { L: () => a, m: () => s });
      var r = n(78588),
        i = n(96147);
      function s(t, e) {
        return (0, r.FY)((0, r.bS)(t.getBoundingClientRect(), e));
      }
      function a(t, e, n) {
        let r = s(t, n),
          { scroll: a } = e;
        return a && ((0, i.Ql)(r.x, a.offset.x), (0, i.Ql)(r.y, a.offset.y)), r;
      }
    },
    33796: (t, e, n) => {
      n.d(e, { K: () => m });
      var r = n(56440),
        i = n(31070),
        s = n(93013),
        a = n(19780);
      let o = new Set(["auto", "none", "0"]);
      var l = n(18203),
        u = n(54542),
        h = n(3870),
        d = n(93676);
      let c = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var p = n(79280),
        f = n(39067);
      class m extends l.h {
        constructor(t, e, n, r, i) {
          super(t, e, n, r, i, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: n } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let n = 0; n < t.length; n++) {
            let r = t[n];
            if ("string" == typeof r && ((r = r.trim()), (0, d.p)(r))) {
              let i = (function t(e, n, r = 1) {
                (0, u.V)(
                  r <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [i, s] = (function (t) {
                  let e = c.exec(t);
                  if (!e) return [,];
                  let [, n, r, i] = e;
                  return [`--${null != n ? n : r}`, i];
                })(e);
                if (!i) return;
                let a = window.getComputedStyle(n).getPropertyValue(i);
                if (a) {
                  let t = a.trim();
                  return (0, h.i)(t) ? parseFloat(t) : t;
                }
                return (0, d.p)(s) ? t(s, n, r + 1) : s;
              })(r, e.current);
              void 0 !== i && (t[n] = i),
                n === t.length - 1 && (this.finalKeyframe = r);
            }
          }
          if ((this.resolveNoneKeyframes(), !i.$.has(n) || 2 !== t.length))
            return;
          let [r, s] = t,
            a = (0, f.n)(r),
            o = (0, f.n)(s);
          if (a !== o)
            if ((0, p.E4)(a) && (0, p.E4)(o))
              for (let e = 0; e < t.length; e++) {
                let n = t[e];
                "string" == typeof n && (t[e] = parseFloat(n));
              }
            else this.needsMeasurement = !0;
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            n = [];
          for (let e = 0; e < t.length; e++) {
            var i;
            ("number" == typeof (i = t[e])
              ? 0 === i
              : null === i || "none" === i || "0" === i || (0, r.$)(i)) &&
              n.push(e);
          }
          n.length &&
            (function (t, e, n) {
              let r,
                i = 0;
              for (; i < t.length && !r; ) {
                let e = t[i];
                "string" == typeof e &&
                  !o.has(e) &&
                  (0, s.V)(e).values.length &&
                  (r = t[i]),
                  i++;
              }
              if (r && n) for (let i of e) t[i] = (0, a.J)(n, r);
            })(t, n, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: n } = this;
          if (!t || !t.current) return;
          "height" === n && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = p.Hr[n](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let r = e[e.length - 1];
          void 0 !== r && t.getValue(n, r).jump(r, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: n, unresolvedKeyframes: r } = this;
          if (!e || !e.current) return;
          let i = e.getValue(n);
          i && i.jump(this.measuredOrigin, !1);
          let s = r.length - 1,
            a = r[s];
          (r[s] = p.Hr[n](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== a &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = a),
            (null == (t = this.removedTransforms) ? void 0 : t.length) &&
              this.removedTransforms.forEach(([t, n]) => {
                e.getValue(t).set(n);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    33869: (t, e, n) => {
      n.d(e, { d: () => a });
      var r = n(78450),
        i = n(20600),
        s = n(36381);
      function a(t, e, n, a) {
        for (let n in ((0, i.e)(t, e, void 0, a), e.attrs))
          t.setAttribute(s.e.has(n) ? n : (0, r.I)(n), e.attrs[n]);
      }
    },
    33991: (t, e, n) => {
      n.d(e, { X: () => r });
      function r(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
    },
    34379: (t, e, n) => {
      n.d(e, { B: () => i, K: () => s });
      var r = n(5910);
      let i = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        s = (t) => ((0, r.p)(t) ? t[t.length - 1] || 0 : t);
    },
    34527: (t, e, n) => {
      n.d(e, { x: () => a });
      var r = n(14570),
        i = n(87387),
        s = n(60990);
      function a(t, e, n) {
        let a = (0, s.x)(t, e, n);
        for (let n in t)
          ((0, r.S)(t[n]) || (0, r.S)(e[n])) &&
            (a[
              -1 !== i.U.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = t[n]);
        return a;
      }
    },
    36381: (t, e, n) => {
      n.d(e, { e: () => r });
      let r = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    39067: (t, e, n) => {
      n.d(e, { T: () => a, n: () => o });
      var r = n(23082),
        i = n(45471),
        s = n(61987);
      let a = [
          r.ai,
          i.px,
          i.KN,
          i.uj,
          i.vw,
          i.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        o = (t) => a.find((0, s.w)(t));
    },
    41232: (t, e, n) => {
      n.d(e, { X: () => i });
      let r = (t) => null !== t;
      function i(t, { repeat: e, repeatType: n = "loop" }, i) {
        let s = t.filter(r),
          a = e && "loop" !== n && e % 2 == 1 ? 0 : s.length - 1;
        return a && void 0 !== i ? i : s[a];
      }
    },
    41917: (t, e, n) => {
      n.d(e, { p: () => r });
      function r(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
    },
    45471: (t, e, n) => {
      n.d(e, {
        KN: () => s,
        gQ: () => u,
        px: () => a,
        uj: () => i,
        vh: () => o,
        vw: () => l,
      });
      let r = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        i = r("deg"),
        s = r("%"),
        a = r("px"),
        o = r("vh"),
        l = r("vw"),
        u = {
          ...s,
          parse: (t) => s.parse(t) / 100,
          transform: (t) => s.transform(100 * t),
        };
    },
    45818: (t, e, n) => {
      n.d(e, { q: () => r });
      let r = (t, e, n) => {
        let r = e - t;
        return 0 === r ? 1 : (n - t) / r;
      };
    },
    46256: (t, e, n) => {
      n.d(e, {
        P6: () => a,
        vG: () => d,
        tu: () => u,
        KZ: () => v,
        rU: () => o,
        PT: () => A,
        DW: () => c,
        WH: () => h,
        Mc: () => V,
        yL: () => g,
        TU: () =>
          function t(e, n) {
            if (e)
              return "function" == typeof e && f()
                ? v(e, n)
                : c(e)
                ? y(e)
                : Array.isArray(e)
                ? e.map((e) => t(e, n) || w.easeOut)
                : w[e];
          },
        YE: () => l,
        c$: () => O,
        Wp: () => I,
        nL: () => f,
      });
      var r = n(41917);
      let i = (0, r.p)(() => void 0 !== window.ScrollTimeline);
      class s {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        get finished() {
          return Promise.all(
            this.animations.map((t) => ("finished" in t ? t.finished : t))
          );
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let n = 0; n < this.animations.length; n++)
            this.animations[n][t] = e;
        }
        attachTimeline(t, e) {
          let n = this.animations.map((n) =>
            i() && n.attachTimeline
              ? n.attachTimeline(t)
              : "function" == typeof e
              ? e(n)
              : void 0
          );
          return () => {
            n.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      class a extends s {
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
      }
      function o(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      let l = 2e4;
      function u(t) {
        let e = 0,
          n = t.next(e);
        for (; !n.done && e < l; ) (e += 50), (n = t.next(e));
        return e >= l ? 1 / 0 : e;
      }
      function h(t) {
        return "function" == typeof t;
      }
      function d(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let c = (t) => Array.isArray(t) && "number" == typeof t[0],
        p = { linearEasing: void 0 },
        f = (function (t, e) {
          let n = (0, r.p)(t);
          return () => {
            var t;
            return null != (t = p[e]) ? t : n();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing");
      var m = n(45818);
      let v = (t, e, n = 10) => {
        let r = "",
          i = Math.max(Math.round(e / n), 2);
        for (let e = 0; e < i; e++) r += t((0, m.q)(0, i - 1, e)) + ", ";
        return `linear(${r.substring(0, r.length - 2)})`;
      };
      function g(t) {
        return !!(
          ("function" == typeof t && f()) ||
          !t ||
          ("string" == typeof t && (t in w || f())) ||
          c(t) ||
          (Array.isArray(t) && t.every(g))
        );
      }
      let y = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`,
        w = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: y([0, 0.65, 0.55, 1]),
          circOut: y([0.55, 0, 1, 0.45]),
          backIn: y([0.31, 0.01, 0.66, -0.59]),
          backOut: y([0.33, 1.53, 0.69, 0.99]),
        },
        x = { x: !1, y: !1 };
      function b(t, e) {
        let n = (function (t, e, n) {
            if (t instanceof Element) return [t];
            if ("string" == typeof t) {
              let e = document.querySelectorAll(t);
              return e ? Array.from(e) : [];
            }
            return Array.from(t);
          })(t),
          r = new AbortController();
        return [n, { passive: !0, ...e, signal: r.signal }, () => r.abort()];
      }
      function S(t) {
        return (e) => {
          "touch" === e.pointerType || x.x || x.y || t(e);
        };
      }
      function A(t, e, n = {}) {
        let [r, i, s] = b(t, n),
          a = S((t) => {
            let { target: n } = t,
              r = e(t);
            if ("function" != typeof r || !n) return;
            let s = S((t) => {
              r(t), n.removeEventListener("pointerleave", s);
            });
            n.addEventListener("pointerleave", s, i);
          });
        return (
          r.forEach((t) => {
            t.addEventListener("pointerenter", a, i);
          }),
          s
        );
      }
      let T = (t, e) => !!e && (t === e || T(t, e.parentElement)),
        V = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary,
        P = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        M = new WeakSet();
      function k(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function C(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let E = (t, e) => {
        let n = t.currentTarget;
        if (!n) return;
        let r = k(() => {
          if (M.has(n)) return;
          C(n, "down");
          let t = k(() => {
            C(n, "up");
          });
          n.addEventListener("keyup", t, e),
            n.addEventListener("blur", () => C(n, "cancel"), e);
        });
        n.addEventListener("keydown", r, e),
          n.addEventListener(
            "blur",
            () => n.removeEventListener("keydown", r),
            e
          );
      };
      function F(t) {
        return V(t) && !(x.x || x.y);
      }
      function O(t, e, n = {}) {
        let [r, i, s] = b(t, n),
          a = (t) => {
            let r = t.currentTarget;
            if (!F(t) || M.has(r)) return;
            M.add(r);
            let s = e(t),
              a = (t, e) => {
                window.removeEventListener("pointerup", o),
                  window.removeEventListener("pointercancel", l),
                  F(t) &&
                    M.has(r) &&
                    (M.delete(r),
                    "function" == typeof s && s(t, { success: e }));
              },
              o = (t) => {
                a(t, n.useGlobalTarget || T(r, t.target));
              },
              l = (t) => {
                a(t, !1);
              };
            window.addEventListener("pointerup", o, i),
              window.addEventListener("pointercancel", l, i);
          };
        return (
          r.forEach((t) => {
            P.has(t.tagName) ||
              -1 !== t.tabIndex ||
              null !== t.getAttribute("tabindex") ||
              (t.tabIndex = 0),
              (n.useGlobalTarget ? window : t).addEventListener(
                "pointerdown",
                a,
                i
              ),
              t.addEventListener("focus", (t) => E(t, i), i);
          }),
          s
        );
      }
      n(47215), n(19827);
      function I(t) {
        if ("x" === t || "y" === t)
          if (x[t]) return null;
          else
            return (
              (x[t] = !0),
              () => {
                x[t] = !1;
              }
            );
        return x.x || x.y
          ? null
          : ((x.x = x.y = !0),
            () => {
              x.x = x.y = !1;
            });
      }
    },
    46926: (t, e, n) => {
      n.d(e, { P: () => i });
      var r = n(31788);
      function i(t) {
        return t.props[r.n];
      }
    },
    47215: (t, e, n) => {
      n.d(e, { X: () => i, f: () => r });
      let r = (t) => 1e3 * t,
        i = (t) => t / 1e3;
    },
    47437: (t, e, n) => {
      n.d(e, { j: () => V });
      var r = n(21109),
        i = n(54542);
      function s(t, e, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? t + (e - t) * 6 * n
          : n < 0.5
          ? e
          : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t;
      }
      var a = n(67730),
        o = n(24935),
        l = n(12083);
      function u(t, e) {
        return (n) => (n > 0 ? e : t);
      }
      let h = (t, e, n) => {
          let r = t * t,
            i = n * (e * e - r) + r;
          return i < 0 ? 0 : Math.sqrt(i);
        },
        d = [a.u, o.B, l.V],
        c = (t) => d.find((e) => e.test(t));
      function p(t) {
        let e = c(t);
        if (
          ((0, i.$)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let n = e.parse(t);
        return (
          e === l.V &&
            (n = (function ({ hue: t, saturation: e, lightness: n, alpha: r }) {
              (t /= 360), (n /= 100);
              let i = 0,
                a = 0,
                o = 0;
              if ((e /= 100)) {
                let r = n < 0.5 ? n * (1 + e) : n + e - n * e,
                  l = 2 * n - r;
                (i = s(l, r, t + 1 / 3)),
                  (a = s(l, r, t)),
                  (o = s(l, r, t - 1 / 3));
              } else i = a = o = n;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * a),
                blue: Math.round(255 * o),
                alpha: r,
              };
            })(n)),
          n
        );
      }
      let f = (t, e) => {
        let n = p(t),
          i = p(e);
        if (!n || !i) return u(t, e);
        let s = { ...n };
        return (t) => (
          (s.red = h(n.red, i.red, t)),
          (s.green = h(n.green, i.green, t)),
          (s.blue = h(n.blue, i.blue, t)),
          (s.alpha = (0, r.k)(n.alpha, i.alpha, t)),
          o.B.transform(s)
        );
      };
      var m = n(97007),
        v = n(82897),
        g = n(93013),
        y = n(93676);
      let w = new Set(["none", "hidden"]);
      function x(t, e) {
        return (n) => (0, r.k)(t, e, n);
      }
      function b(t) {
        return "number" == typeof t
          ? x
          : "string" == typeof t
          ? (0, y.p)(t)
            ? u
            : v.y.test(t)
            ? f
            : T
          : Array.isArray(t)
          ? S
          : "object" == typeof t
          ? v.y.test(t)
            ? f
            : A
          : u;
      }
      function S(t, e) {
        let n = [...t],
          r = n.length,
          i = t.map((t, n) => b(t)(t, e[n]));
        return (t) => {
          for (let e = 0; e < r; e++) n[e] = i[e](t);
          return n;
        };
      }
      function A(t, e) {
        let n = { ...t, ...e },
          r = {};
        for (let i in n)
          void 0 !== t[i] && void 0 !== e[i] && (r[i] = b(t[i])(t[i], e[i]));
        return (t) => {
          for (let e in r) n[e] = r[e](t);
          return n;
        };
      }
      let T = (t, e) => {
        let n = g.f.createTransformer(e),
          r = (0, g.V)(t),
          s = (0, g.V)(e);
        return r.indexes.var.length === s.indexes.var.length &&
          r.indexes.color.length === s.indexes.color.length &&
          r.indexes.number.length >= s.indexes.number.length
          ? (w.has(t) && !s.values.length) || (w.has(e) && !r.values.length)
            ? (function (t, e) {
                return w.has(t)
                  ? (n) => (n <= 0 ? t : e)
                  : (n) => (n >= 1 ? e : t);
              })(t, e)
            : (0, m.F)(
                S(
                  (function (t, e) {
                    var n;
                    let r = [],
                      i = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let a = e.types[s],
                        o = t.indexes[a][i[a]],
                        l = null != (n = t.values[o]) ? n : 0;
                      (r[s] = l), i[a]++;
                    }
                    return r;
                  })(r, s),
                  s.values
                ),
                n
              )
          : ((0, i.$)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            u(t, e));
      };
      function V(t, e, n) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof n
          ? (0, r.k)(t, e, n)
          : b(t)(t, e);
      }
    },
    48466: (t, e, n) => {
      n.d(e, { k: () => r });
      let { schedule: r, cancel: i } = (0, n(70554).I)(queueMicrotask, !1);
    },
    51442: (t, e, n) => {
      n.d(e, { k: () => r });
      function r(t, e, n, i = { passive: !0 }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
      }
    },
    51508: (t, e, n) => {
      n.d(e, { Q: () => r });
      let r = (0, n(12115).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    51586: (t, e, n) => {
      n.d(e, { F: () => s, e: () => i });
      var r = n(46256);
      function i(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let s = (t) => (e) => (0, r.Mc)(e) && t(e, i(e));
    },
    52290: (t, e, n) => {
      n.d(e, { X: () => r });
      class r {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
    },
    54542: (t, e, n) => {
      n.d(e, { $: () => i, V: () => s });
      var r = n(19827);
      let i = r.l,
        s = r.l;
    },
    55457: (t, e, n) => {
      n.d(e, { W: () => E });
      var r = n(6340),
        i = n(5910);
      function s(t, e) {
        if (!Array.isArray(e)) return !1;
        let n = e.length;
        if (n !== t.length) return !1;
        for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var a = n(65305),
        o = n(2735);
      function l(t, e, n) {
        let r = t.getProps();
        return (0, o.a)(r, e, void 0 !== n ? n : r.custom, t);
      }
      var u = n(98312),
        h = n(46256),
        d = n(31070),
        c = n(34379),
        p = n(59779),
        f = n(76333),
        m = n(46926),
        v = n(77966),
        g = n(59210);
      function y(t, e, { delay: n = 0, transitionOverride: r, type: i } = {}) {
        var s;
        let {
          transition: a = t.getDefaultTransition(),
          transitionEnd: o,
          ...u
        } = e;
        r && (a = r);
        let w = [],
          x = i && t.animationState && t.animationState.getState()[i];
        for (let e in u) {
          let r = t.getValue(e, null != (s = t.latestValues[e]) ? s : null),
            i = u[e];
          if (
            void 0 === i ||
            (x &&
              (function ({ protectedKeys: t, needsAnimating: e }, n) {
                let r = t.hasOwnProperty(n) && !0 !== e[n];
                return (e[n] = !1), r;
              })(x, e))
          )
            continue;
          let o = { delay: n, ...(0, h.rU)(a || {}, e) },
            l = !1;
          if (window.MotionHandoffAnimation) {
            let n = (0, m.P)(t);
            if (n) {
              let t = window.MotionHandoffAnimation(n, e, g.Gt);
              null !== t && ((o.startTime = t), (l = !0));
            }
          }
          (0, f.g)(t, e),
            r.start(
              (0, v.f)(
                e,
                r,
                i,
                t.shouldReduceMotion && d.$.has(e) ? { type: !1 } : o,
                t,
                l
              )
            );
          let c = r.animation;
          c && w.push(c);
        }
        return (
          o &&
            Promise.all(w).then(() => {
              g.Gt.update(() => {
                o &&
                  (function (t, e) {
                    let {
                      transitionEnd: n = {},
                      transition: r = {},
                      ...i
                    } = l(t, e) || {};
                    for (let e in (i = { ...i, ...n })) {
                      let n = (0, c.K)(i[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(n)
                        : t.addValue(e, (0, p.OQ)(n));
                    }
                  })(t, o);
              });
            }),
          w
        );
      }
      function w(t, e, n = {}) {
        var r;
        let i = l(
            t,
            e,
            "exit" === n.type
              ? null == (r = t.presenceContext)
                ? void 0
                : r.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = i || {};
        n.transitionOverride && (s = n.transitionOverride);
        let a = i ? () => Promise.all(y(t, i, n)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: i = 0,
                    staggerChildren: a,
                    staggerDirection: o,
                  } = s;
                  return (function (t, e, n = 0, r = 0, i = 1, s) {
                    let a = [],
                      o = (t.variantChildren.size - 1) * r,
                      l = 1 === i ? (t = 0) => t * r : (t = 0) => o - t * r;
                    return (
                      Array.from(t.variantChildren)
                        .sort(x)
                        .forEach((t, r) => {
                          t.notify("AnimationStart", e),
                            a.push(
                              w(t, e, { ...s, delay: n + l(r) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(a)
                    );
                  })(t, e, i + r, a, o, n);
                }
              : () => Promise.resolve(),
          { when: u } = s;
        if (!u) return Promise.all([a(), o(n.delay)]);
        {
          let [t, e] = "beforeChildren" === u ? [a, o] : [o, a];
          return t().then(() => e());
        }
      }
      function x(t, e) {
        return t.sortNodePosition(e);
      }
      let b = u._.length,
        S = [...u.U].reverse(),
        A = u.U.length;
      function T(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function V() {
        return {
          animate: T(!0),
          whileInView: T(),
          whileHover: T(),
          whileTap: T(),
          whileDrag: T(),
          whileFocus: T(),
          exit: T(),
        };
      }
      var P = n(52290);
      class M extends P.X {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: n }) =>
                        (function (t, e, n = {}) {
                          let r;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            r = Promise.all(e.map((e) => w(t, e, n)));
                          else if ("string" == typeof e) r = w(t, e, n);
                          else {
                            let i =
                              "function" == typeof e ? l(t, e, n.custom) : e;
                            r = Promise.all(y(t, i, n));
                          }
                          return r.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, n)
                      )
                    ),
                  n = V(),
                  o = !0,
                  h = (e) => (n, r) => {
                    var i;
                    let s = l(
                      t,
                      r,
                      "exit" === e
                        ? null == (i = t.presenceContext)
                          ? void 0
                          : i.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...r } = s;
                      n = { ...n, ...r, ...e };
                    }
                    return n;
                  };
                function d(l) {
                  let { props: d } = t,
                    c =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let n = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (n.initial = e.props.initial),
                            n
                          );
                        }
                        let n = {};
                        for (let t = 0; t < b; t++) {
                          let r = u._[t],
                            i = e.props[r];
                          ((0, a.w)(i) || !1 === i) && (n[r] = i);
                        }
                        return n;
                      })(t.parent) || {},
                    p = [],
                    f = new Set(),
                    m = {},
                    v = 1 / 0;
                  for (let e = 0; e < A; e++) {
                    var g, y;
                    let u = S[e],
                      w = n[u],
                      x = void 0 !== d[u] ? d[u] : c[u],
                      b = (0, a.w)(x),
                      A = u === l ? w.isActive : null;
                    !1 === A && (v = e);
                    let T = x === c[u] && x !== d[u] && b;
                    if (
                      (T && o && t.manuallyAnimateOnMount && (T = !1),
                      (w.protectedKeys = { ...m }),
                      (!w.isActive && null === A) ||
                        (!x && !w.prevProp) ||
                        (0, r.N)(x) ||
                        "boolean" == typeof x)
                    )
                      continue;
                    let V =
                        ((g = w.prevProp),
                        "string" == typeof (y = x)
                          ? y !== g
                          : !!Array.isArray(y) && !s(y, g)),
                      P =
                        V || (u === l && w.isActive && !T && b) || (e > v && b),
                      M = !1,
                      k = Array.isArray(x) ? x : [x],
                      C = k.reduce(h(u), {});
                    !1 === A && (C = {});
                    let { prevResolvedValues: E = {} } = w,
                      F = { ...E, ...C },
                      O = (e) => {
                        (P = !0),
                          f.has(e) && ((M = !0), f.delete(e)),
                          (w.needsAnimating[e] = !0);
                        let n = t.getValue(e);
                        n && (n.liveStyle = !1);
                      };
                    for (let t in F) {
                      let e = C[t],
                        n = E[t];
                      if (m.hasOwnProperty(t)) continue;
                      let r = !1;
                      ((0, i.p)(e) && (0, i.p)(n) ? s(e, n) : e === n)
                        ? void 0 !== e && f.has(t)
                          ? O(t)
                          : (w.protectedKeys[t] = !0)
                        : null != e
                        ? O(t)
                        : f.add(t);
                    }
                    (w.prevProp = x),
                      (w.prevResolvedValues = C),
                      w.isActive && (m = { ...m, ...C }),
                      o && t.blockInitialAnimation && (P = !1);
                    let I = !(T && V) || M;
                    P &&
                      I &&
                      p.push(
                        ...k.map((t) => ({
                          animation: t,
                          options: { type: u },
                        }))
                      );
                  }
                  if (f.size) {
                    let e = {};
                    f.forEach((n) => {
                      let r = t.getBaseTarget(n),
                        i = t.getValue(n);
                      i && (i.liveStyle = !0), (e[n] = null != r ? r : null);
                    }),
                      p.push({ animation: e });
                  }
                  let w = !!p.length;
                  return (
                    o &&
                      (!1 === d.initial || d.initial === d.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (w = !1),
                    (o = !1),
                    w ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: d,
                  setActive: function (e, r) {
                    var i;
                    if (n[e].isActive === r) return Promise.resolve();
                    null == (i = t.variantChildren) ||
                      i.forEach((t) => {
                        var n;
                        return null == (n = t.animationState)
                          ? void 0
                          : n.setActive(e, r);
                      }),
                      (n[e].isActive = r);
                    let s = d(e);
                    for (let t in n) n[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (n) {
                    e = n(t);
                  },
                  getState: () => n,
                  reset: () => {
                    (n = V()), (o = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          (0, r.N)(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null == (t = this.unmountControls) || t.call(this);
        }
      }
      let k = 0;
      class C extends P.X {
        constructor() {
          super(...arguments), (this.id = k++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === n) return;
          let r = this.node.animationState.setActive("exit", !t);
          e && !t && r.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let E = { animation: { Feature: M }, exit: { Feature: C } };
    },
    56440: (t, e, n) => {
      n.d(e, { $: () => r });
      let r = (t) => /^0[^.\s]+$/u.test(t);
    },
    59210: (t, e, n) => {
      n.d(e, { Gt: () => i, PP: () => o, WG: () => s, uv: () => a });
      var r = n(19827);
      let {
        schedule: i,
        cancel: s,
        state: a,
        steps: o,
      } = (0, n(70554).I)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : r.l,
        !0
      );
    },
    59282: (t, e, n) => {
      n.d(e, { po: () => s, tn: () => o, yT: () => a });
      var r = n(567),
        i = n(16498);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        a = (0, i.G)(s),
        o = (0, r.V)(s);
    },
    59779: (t, e, n) => {
      n.d(e, { OQ: () => h, bt: () => l });
      var r = n(19932),
        i = n(66802),
        s = n(15315),
        a = n(59210);
      let o = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.18.2"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let n = r.k.now();
              this.updatedAt !== n && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = r.k.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = o(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new i.v());
          let n = this.events[t].add(e);
          return "change" === t
            ? () => {
                n(),
                  a.Gt.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, n) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - n);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = r.k.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, s.f)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    60990: (t, e, n) => {
      n.d(e, { x: () => s });
      var r = n(33055),
        i = n(14570);
      function s(t, e, n) {
        var s;
        let { style: a } = t,
          o = {};
        for (let l in a)
          ((0, i.S)(a[l]) ||
            (e.style && (0, i.S)(e.style[l])) ||
            (0, r.z)(l, t) ||
            (null == (s = null == n ? void 0 : n.getValue(l))
              ? void 0
              : s.liveStyle) !== void 0) &&
            (o[l] = a[l]);
        return o;
      }
    },
    61710: (t, e, n) => {
      n.d(e, { J: () => Y });
      var r = n(12115),
        i = n(33757),
        s = n(19932),
        a = n(6642),
        o = n(81786),
        l = n(3870),
        u = n(56440),
        h = n(68972);
      let d = { current: null },
        c = { current: !1 };
      var p = n(66802),
        f = n(59779),
        m = n(93013),
        v = n(14570),
        g = n(19780),
        y = n(82897),
        w = n(39067),
        x = n(61987);
      let b = [...w.T, y.y, m.f],
        S = (t) => b.find((0, x.w)(t));
      var A = n(87387);
      let T = new WeakMap();
      var V = n(19253),
        P = n(18203),
        M = n(2735),
        k = n(59210);
      let C = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class E {
        scrapeMotionValuesFromProps(t, e, n) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: n,
            reducedMotionConfig: r,
            blockInitialAnimation: i,
            visualState: a,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = P.h),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = s.k.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                k.Gt.render(this.render, !1, !0));
            });
          let { latestValues: l, renderState: u, onUpdate: h } = a;
          (this.onUpdate = h),
            (this.latestValues = l),
            (this.baseTarget = { ...l }),
            (this.initialValues = e.initial ? { ...l } : {}),
            (this.renderState = u),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = n),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = o),
            (this.blockInitialAnimation = !!i),
            (this.isControllingVariants = (0, V.e)(e)),
            (this.isVariantNode = (0, V.O)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: d, ...c } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in c) {
            let e = c[t];
            void 0 !== l[t] && (0, v.S)(e) && e.set(l[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            T.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            c.current ||
              (function () {
                if (((c.current = !0), h.B))
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (d.current = t.matches);
                    t.addListener(e), e();
                  } else d.current = !1;
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || d.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (T.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, k.WG)(this.notifyUpdate),
          (0, k.WG)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let n;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let r = A.f.has(t),
            i = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && k.Gt.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (n = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              i(), s(), n && n(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in a.B) {
            let e = a.B[t];
            if (!e) continue;
            let { isEnabled: n, Feature: r } = e;
            if (
              (!this.features[t] &&
                r &&
                n(this.props) &&
                (this.features[t] = new r(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, o.ge)();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < C.length; e++) {
            let n = C[e];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let r = t["on" + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r));
          }
          (this.prevMotionValues = (function (t, e, n) {
            for (let r in e) {
              let i = e[r],
                s = n[r];
              if ((0, v.S)(i)) t.addValue(r, i);
              else if ((0, v.S)(s)) t.addValue(r, (0, f.OQ)(i, { owner: t }));
              else if (s !== i)
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  !0 === e.liveStyle ? e.jump(i) : e.hasAnimated || e.set(i);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, (0, f.OQ)(void 0 !== e ? e : i, { owner: t }));
                }
            }
            for (let r in n) void 0 === e[r] && t.removeValue(r);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let n = this.values.get(t);
          e !== n &&
            (n && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let n = this.values.get(t);
          return (
            void 0 === n &&
              void 0 !== e &&
              ((n = (0, f.OQ)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, n)),
            n
          );
        }
        readValue(t, e) {
          var n;
          let r =
            void 0 === this.latestValues[t] && this.current
              ? null != (n = this.getBaseTargetFromProps(this.props, t))
                ? n
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != r &&
              ("string" == typeof r && ((0, l.i)(r) || (0, u.$)(r))
                ? (r = parseFloat(r))
                : !S(r) && m.f.test(e) && (r = (0, g.J)(t, e)),
              this.setBaseTarget(t, (0, v.S)(r) ? r.get() : r)),
            (0, v.S)(r) ? r.get() : r
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let n,
            { initial: r } = this.props;
          if ("string" == typeof r || "object" == typeof r) {
            let i = (0, M.a)(
              this.props,
              r,
              null == (e = this.presenceContext) ? void 0 : e.custom
            );
            i && (n = i[t]);
          }
          if (r && void 0 !== n) return n;
          let i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || (0, v.S)(i)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : i;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new p.v()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var F = n(33796);
      class O extends E {
        constructor() {
          super(...arguments), (this.KeyframeResolver = F.K);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: n }) {
          delete e[t], delete n[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, v.S)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      var I = n(93676),
        B = n(2217),
        R = n(86169),
        j = n(20600),
        D = n(60990);
      class W extends O {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.renderInstance = j.e);
        }
        readValueFromInstance(t, e) {
          if (A.f.has(e)) {
            let t = (0, B.D)(e);
            return (t && t.default) || 0;
          }
          {
            let n = window.getComputedStyle(t),
              r = ((0, I.j)(e) ? n.getPropertyValue(e) : n[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, i.m)(t, e);
        }
        build(t, e, n) {
          (0, R.O)(t, e, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return (0, D.x)(t, e, n);
        }
      }
      var $ = n(78450),
        L = n(97914),
        N = n(36381),
        X = n(93095),
        U = n(33869),
        q = n(34527);
      class K extends O {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = o.ge);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (A.f.has(e)) {
            let t = (0, B.D)(e);
            return (t && t.default) || 0;
          }
          return (e = N.e.has(e) ? e : (0, $.I)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return (0, q.x)(t, e, n);
        }
        build(t, e, n) {
          (0, L.B)(t, e, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, n, r) {
          (0, U.d)(t, e, n, r);
        }
        mount(t) {
          (this.isSVGTag = (0, X.n)(t.tagName)), super.mount(t);
        }
      }
      var G = n(175);
      let Y = (t, e) =>
        (0, G.Q)(t)
          ? new K(e)
          : new W(e, { allowProjection: t !== r.Fragment });
    },
    61987: (t, e, n) => {
      n.d(e, { w: () => r });
      let r = (t) => (e) => e.test(t);
    },
    62662: (t, e, n) => {
      function r(t) {
        return void 0 === t || 1 === t;
      }
      function i({ scale: t, scaleX: e, scaleY: n }) {
        return !r(t) || !r(e) || !r(n);
      }
      function s(t) {
        return (
          i(t) ||
          a(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function a(t) {
        var e, n;
        return ((e = t.x) && "0%" !== e) || ((n = t.y) && "0%" !== n);
      }
      n.d(e, { HD: () => s, vF: () => a, vk: () => i });
    },
    63284: (t, e, n) => {
      function r(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function i(t, e) {
        let n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      n.d(e, { Ai: () => i, Kq: () => r });
    },
    65305: (t, e, n) => {
      n.d(e, { w: () => r });
      function r(t) {
        return "string" == typeof t || Array.isArray(t);
      }
    },
    66479: (t, e, n) => {
      n.d(e, { S: () => r });
      let r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    66802: (t, e, n) => {
      n.d(e, { v: () => i });
      var r = n(63284);
      class i {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, r.Kq)(this.subscriptions, t),
            () => (0, r.Ai)(this.subscriptions, t)
          );
        }
        notify(t, e, n) {
          let r = this.subscriptions.length;
          if (r)
            if (1 === r) this.subscriptions[0](t, e, n);
            else
              for (let i = 0; i < r; i++) {
                let r = this.subscriptions[i];
                r && r(t, e, n);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    67730: (t, e, n) => {
      n.d(e, { u: () => i });
      var r = n(24935);
      let i = {
        test: (0, n(97219).$)("#"),
        parse: function (t) {
          let e = "",
            n = "",
            r = "",
            i = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (n = t.substring(3, 5)),
                (r = t.substring(5, 7)),
                (i = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (n = t.substring(2, 3)),
                (r = t.substring(3, 4)),
                (i = t.substring(4, 5)),
                (e += e),
                (n += n),
                (r += r),
                (i += i)),
            {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(r, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1,
            }
          );
        },
        transform: r.B.transform,
      };
    },
    68972: (t, e, n) => {
      n.d(e, { B: () => r });
      let r = "undefined" != typeof window;
    },
    70554: (t, e, n) => {
      n.d(e, { I: () => s });
      var r = n(74492);
      let i = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function s(t, e) {
        let n = !1,
          s = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          o = () => (n = !0),
          l = i.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  n = new Set(),
                  r = !1,
                  i = !1,
                  s = new WeakSet(),
                  a = { delta: 0, timestamp: 0, isProcessing: !1 };
                function o(e) {
                  s.has(e) && (l.schedule(e), t()), e(a);
                }
                let l = {
                  schedule: (t, i = !1, a = !1) => {
                    let o = a && r ? e : n;
                    return i && s.add(t), o.has(t) || o.add(t), t;
                  },
                  cancel: (t) => {
                    n.delete(t), s.delete(t);
                  },
                  process: (t) => {
                    if (((a = t), r)) {
                      i = !0;
                      return;
                    }
                    (r = !0),
                      ([e, n] = [n, e]),
                      e.forEach(o),
                      e.clear(),
                      (r = !1),
                      i && ((i = !1), l.process(t));
                  },
                };
                return l;
              })(o)),
              t
            ),
            {}
          ),
          {
            read: u,
            resolveKeyframes: h,
            update: d,
            preRender: c,
            render: p,
            postRender: f,
          } = l,
          m = () => {
            let i = r.W.useManualTiming ? a.timestamp : performance.now();
            (n = !1),
              (a.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(i - a.timestamp, 40), 1)),
              (a.timestamp = i),
              (a.isProcessing = !0),
              u.process(a),
              h.process(a),
              d.process(a),
              c.process(a),
              p.process(a),
              f.process(a),
              (a.isProcessing = !1),
              n && e && ((s = !1), t(m));
          },
          v = () => {
            (n = !0), (s = !0), a.isProcessing || t(m);
          };
        return {
          schedule: i.reduce((t, e) => {
            let r = l[e];
            return (
              (t[e] = (t, e = !1, i = !1) => (n || v(), r.schedule(t, e, i))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < i.length; e++) l[i[e]].cancel(t);
          },
          state: a,
          steps: l,
        };
      }
    },
    70797: (t, e, n) => {
      n.d(e, { N: () => r });
      let r = (0, n(12115).createContext)({});
    },
    74492: (t, e, n) => {
      n.d(e, { W: () => r });
      let r = { skipAnimations: !1, useManualTiming: !1 };
    },
    76333: (t, e, n) => {
      n.d(e, { g: () => i });
      var r = n(14570);
      function i(t, e) {
        let n = t.getValue("willChange");
        if ((0, r.S)(n) && n.add) return n.add(e);
      }
    },
    77782: (t, e, n) => {
      n.d(e, { q: () => r });
      let r = (t, e, n) => (n > e ? e : n < t ? t : n);
    },
    77966: (t, e, n) => {
      n.d(e, { f: () => P });
      var r = n(46256),
        i = n(47215),
        s = n(59210),
        a = n(74492),
        o = n(84528),
        l = n(19827),
        u = n(14279),
        h = n(95190),
        d = n(59282),
        c = n(33796),
        p = n(86111),
        f = n(98366);
      let m = new Set(["opacity", "clipPath", "filter", "transform"]);
      var v = n(41232);
      let g = (0, n(41917).p)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        y = { anticipate: u.b, backInOut: h.ZZ, circInOut: d.tn };
      class w extends p.i {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: n,
            element: r,
            keyframes: i,
          } = this.options;
          (this.resolver = new c.K(
            i,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            n,
            r
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var n;
          let {
            duration: i = 300,
            times: s,
            ease: a,
            type: o,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!l.owner || !l.owner.current) return !1;
          if (
            ("string" == typeof a && (0, r.nL)() && a in y && (a = y[a]),
            (n = this.options),
            (0, r.WH)(n.type) || "spring" === n.type || !(0, r.yL)(n.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: n,
                motionValue: r,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let n = new f.o({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  r = { done: !1, value: t[0] },
                  i = [],
                  s = 0;
                for (; !r.done && s < 2e4; )
                  i.push((r = n.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: i,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (i = h.duration),
              (s = h.times),
              (a = h.ease),
              (o = "keyframes");
          }
          let d = (function (
            t,
            e,
            n,
            {
              delay: i = 0,
              duration: s = 300,
              repeat: a = 0,
              repeatType: o = "loop",
              ease: l = "easeInOut",
              times: u,
            } = {}
          ) {
            let h = { [e]: n };
            u && (h.offset = u);
            let d = (0, r.TU)(l, s);
            return (
              Array.isArray(d) && (h.easing = d),
              t.animate(h, {
                delay: i,
                duration: s,
                easing: Array.isArray(d) ? "linear" : d,
                fill: "both",
                iterations: a + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: i,
            times: s,
            ease: a,
          });
          return (
            (d.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? ((0, r.vG)(d, this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: n } = this.options;
                  l.set((0, v.X)(t, this.options, e)),
                    n && n(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: i,
              times: s,
              type: o,
              ease: a,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, i.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, i.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: n } = e;
          n.currentTime = (0, i.f)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: n } = e;
          n.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return l.l;
            let { animation: n } = e;
            (0, r.vG)(n, t);
          } else this.pendingTimeline = t;
          return l.l;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: n,
            duration: r,
            type: s,
            ease: a,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: l,
                element: u,
                ...h
              } = this.options,
              d = new f.o({
                ...h,
                keyframes: n,
                duration: r,
                type: s,
                ease: a,
                times: o,
                isGenerator: !0,
              }),
              c = (0, i.f)(this.time);
            t.setWithVelocity(d.sample(c - 10).value, d.sample(c).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: n,
            repeatDelay: r,
            repeatType: i,
            damping: s,
            type: a,
          } = t;
          if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: o, transformTemplate: l } = e.owner.getProps();
          return (
            g() &&
            n &&
            m.has(n) &&
            !o &&
            !l &&
            !r &&
            "mirror" !== i &&
            0 !== s &&
            "inertia" !== a
          );
        }
      }
      var x = n(87387);
      let b = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        S = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        A = { type: "keyframes", duration: 0.8 },
        T = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        V = (t, { keyframes: e }) =>
          e.length > 2
            ? A
            : x.f.has(t)
            ? t.startsWith("scale")
              ? S(e[1])
              : b
            : T,
        P =
          (t, e, n, l = {}, u, h) =>
          (d) => {
            let c = (0, r.rU)(l, t) || {},
              p = c.delay || l.delay || 0,
              { elapsed: m = 0 } = l;
            m -= (0, i.f)(p);
            let g = {
              keyframes: Array.isArray(n) ? n : [null, n],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...c,
              delay: -m,
              onUpdate: (t) => {
                e.set(t), c.onUpdate && c.onUpdate(t);
              },
              onComplete: () => {
                d(), c.onComplete && c.onComplete();
              },
              name: t,
              motionValue: e,
              element: h ? void 0 : u,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: n,
              staggerChildren: r,
              staggerDirection: i,
              repeat: s,
              repeatType: a,
              repeatDelay: o,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(c) && (g = { ...g, ...V(t, g) }),
              g.duration && (g.duration = (0, i.f)(g.duration)),
              g.repeatDelay && (g.repeatDelay = (0, i.f)(g.repeatDelay)),
              void 0 !== g.from && (g.keyframes[0] = g.from);
            let y = !1;
            if (
              ((!1 !== g.type && (0 !== g.duration || g.repeatDelay)) ||
                ((g.duration = 0), 0 === g.delay && (y = !0)),
              (o.d.current || a.W.skipAnimations) &&
                ((y = !0), (g.duration = 0), (g.delay = 0)),
              y && !h && void 0 !== e.get())
            ) {
              let t = (0, v.X)(g.keyframes, c);
              if (void 0 !== t)
                return (
                  s.Gt.update(() => {
                    g.onUpdate(t), g.onComplete();
                  }),
                  new r.P6([])
                );
            }
            return !h && w.supports(g) ? new w(g) : new f.o(g);
          };
    },
    78450: (t, e, n) => {
      n.d(e, { I: () => r });
      let r = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    78588: (t, e, n) => {
      function r({ top: t, left: e, right: n, bottom: r }) {
        return { x: { min: e, max: n }, y: { min: t, max: r } };
      }
      function i({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function s(t, e) {
        if (!e) return t;
        let n = e({ x: t.left, y: t.top }),
          r = e({ x: t.right, y: t.bottom });
        return { top: n.y, left: n.x, bottom: r.y, right: r.x };
      }
      n.d(e, { FY: () => r, bS: () => s, pA: () => i });
    },
    79280: (t, e, n) => {
      n.d(e, { E4: () => a, Hr: () => c, W9: () => d });
      var r = n(23082),
        i = n(45471),
        s = n(87387);
      let a = (t) => t === r.ai || t === i.px,
        o = (t, e) => parseFloat(t.split(", ")[e]),
        l =
          (t, e) =>
          (n, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let i = r.match(/^matrix3d\((.+)\)$/u);
            if (i) return o(i[1], e);
            {
              let e = r.match(/^matrix\((.+)\)$/u);
              return e ? o(e[1], t) : 0;
            }
          },
        u = new Set(["x", "y", "z"]),
        h = s.U.filter((t) => !u.has(t));
      function d(t) {
        let e = [];
        return (
          h.forEach((n) => {
            let r = t.getValue(n);
            void 0 !== r &&
              (e.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
          }),
          e
        );
      }
      let c = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(n),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(n),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: l(4, 13),
        y: l(5, 14),
      };
      (c.translateX = c.x), (c.translateY = c.y);
    },
    80845: (t, e, n) => {
      n.d(e, { t: () => r });
      let r = (0, n(12115).createContext)(null);
    },
    81786: (t, e, n) => {
      n.d(e, { ge: () => a, xU: () => i });
      let r = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        i = () => ({ x: r(), y: r() }),
        s = () => ({ min: 0, max: 0 }),
        a = () => ({ x: s(), y: s() });
    },
    82885: (t, e, n) => {
      n.d(e, { M: () => i });
      var r = n(12115);
      function i(t) {
        let e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    82897: (t, e, n) => {
      n.d(e, { y: () => a });
      var r = n(67730),
        i = n(12083),
        s = n(24935);
      let a = {
        test: (t) => s.B.test(t) || r.u.test(t) || i.V.test(t),
        parse: (t) =>
          s.B.test(t)
            ? s.B.parse(t)
            : i.V.test(t)
            ? i.V.parse(t)
            : r.u.parse(t),
        transform: (t) =>
          "string" == typeof t
            ? t
            : t.hasOwnProperty("red")
            ? s.B.transform(t)
            : i.V.transform(t),
      };
    },
    83945: (t, e, n) => {
      n.d(e, { A: () => s });
      var r = n(19827);
      let i = (t, e, n) =>
        (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
      function s(t, e, n, s) {
        if (t === e && n === s) return r.l;
        let a = (e) =>
          (function (t, e, n, r, s) {
            let a,
              o,
              l = 0;
            do (a = i((o = e + (n - e) / 2), r, s) - t) > 0 ? (n = o) : (e = o);
            while (Math.abs(a) > 1e-7 && ++l < 12);
            return o;
          })(e, 0, 1, t, n);
        return (t) => (0 === t || 1 === t ? t : i(a(t), e, s));
      }
    },
    84528: (t, e, n) => {
      n.d(e, { d: () => r });
      let r = { current: !1 };
    },
    86111: (t, e, n) => {
      n.d(e, { i: () => d });
      var r = n(19932),
        i = n(18203),
        s = n(84528),
        a = n(46256),
        o = n(54542),
        l = n(93013);
      let u = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (l.f.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      var h = n(41232);
      class d {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: n = "keyframes",
          repeat: i = 0,
          repeatDelay: s = 0,
          repeatType: a = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = r.k.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: n,
              repeat: i,
              repeatDelay: s,
              repeatType: a,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, i.q)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = r.k.now()), (this.hasAttemptedResolve = !0);
          let {
            name: n,
            type: i,
            velocity: l,
            delay: d,
            onComplete: c,
            onUpdate: p,
            isGenerator: f,
          } = this.options;
          if (
            !f &&
            !(function (t, e, n, r) {
              let i = t[0];
              if (null === i) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                l = u(i, e),
                h = u(s, e);
              return (
                (0, o.$)(
                  l === h,
                  `You are trying to animate ${e} from "${i}" to "${s}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!l &&
                  !!h &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let n = 0; n < t.length; n++)
                      if (t[n] !== e) return !0;
                  })(t) ||
                    (("spring" === n || (0, a.WH)(n)) && r))
              );
            })(t, n, i, l)
          )
            if (s.d.current || !d) {
              p && p((0, h.X)(t, this.options, e)),
                c && c(),
                this.resolveFinishedPromise();
              return;
            } else this.options.duration = 0;
          let m = this.initPlayback(t, e);
          !1 !== m &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...m }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
    },
    86169: (t, e, n) => {
      n.d(e, { O: () => u });
      var r = n(93676);
      let i = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var s = n(90802),
        a = n(87387);
      let o = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        l = a.U.length;
      function u(t, e, n) {
        let { style: u, vars: h, transformOrigin: d } = t,
          c = !1,
          p = !1;
        for (let t in e) {
          let n = e[t];
          if (a.f.has(t)) {
            c = !0;
            continue;
          }
          if ((0, r.j)(t)) {
            h[t] = n;
            continue;
          }
          {
            let e = i(n, s.W[t]);
            t.startsWith("origin") ? ((p = !0), (d[t] = e)) : (u[t] = e);
          }
        }
        if (
          (!e.transform &&
            (c || n
              ? (u.transform = (function (t, e, n) {
                  let r = "",
                    u = !0;
                  for (let h = 0; h < l; h++) {
                    let l = a.U[h],
                      d = t[l];
                    if (void 0 === d) continue;
                    let c = !0;
                    if (
                      !(c =
                        "number" == typeof d
                          ? d === +!!l.startsWith("scale")
                          : 0 === parseFloat(d)) ||
                      n
                    ) {
                      let t = i(d, s.W[l]);
                      if (!c) {
                        u = !1;
                        let e = o[l] || l;
                        r += `${e}(${t}) `;
                      }
                      n && (e[l] = t);
                    }
                  }
                  return (
                    (r = r.trim()),
                    n ? (r = n(e, u ? "" : r)) : u && (r = "none"),
                    r
                  );
                })(e, t.transform, n))
              : u.transform && (u.transform = "none")),
          p)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: n = 0 } = d;
          u.transformOrigin = `${t} ${e} ${n}`;
        }
      }
    },
    87387: (t, e, n) => {
      n.d(e, { U: () => r, f: () => i });
      let r = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        i = new Set(r);
    },
    90802: (t, e, n) => {
      n.d(e, { W: () => l });
      var r = n(23082),
        i = n(45471);
      let s = {
          borderWidth: i.px,
          borderTopWidth: i.px,
          borderRightWidth: i.px,
          borderBottomWidth: i.px,
          borderLeftWidth: i.px,
          borderRadius: i.px,
          radius: i.px,
          borderTopLeftRadius: i.px,
          borderTopRightRadius: i.px,
          borderBottomRightRadius: i.px,
          borderBottomLeftRadius: i.px,
          width: i.px,
          maxWidth: i.px,
          height: i.px,
          maxHeight: i.px,
          top: i.px,
          right: i.px,
          bottom: i.px,
          left: i.px,
          padding: i.px,
          paddingTop: i.px,
          paddingRight: i.px,
          paddingBottom: i.px,
          paddingLeft: i.px,
          margin: i.px,
          marginTop: i.px,
          marginRight: i.px,
          marginBottom: i.px,
          marginLeft: i.px,
          backgroundPositionX: i.px,
          backgroundPositionY: i.px,
        },
        a = {
          rotate: i.uj,
          rotateX: i.uj,
          rotateY: i.uj,
          rotateZ: i.uj,
          scale: r.hs,
          scaleX: r.hs,
          scaleY: r.hs,
          scaleZ: r.hs,
          skew: i.uj,
          skewX: i.uj,
          skewY: i.uj,
          distance: i.px,
          translateX: i.px,
          translateY: i.px,
          translateZ: i.px,
          x: i.px,
          y: i.px,
          z: i.px,
          perspective: i.px,
          transformPerspective: i.px,
          opacity: r.X4,
          originX: i.gQ,
          originY: i.gQ,
          originZ: i.px,
        },
        o = { ...r.ai, transform: Math.round },
        l = {
          ...s,
          ...a,
          zIndex: o,
          size: i.px,
          fillOpacity: r.X4,
          strokeOpacity: r.X4,
          numOctaves: o,
        };
    },
    90869: (t, e, n) => {
      n.d(e, { L: () => r });
      let r = (0, n(12115).createContext)({});
    },
    93013: (t, e, n) => {
      n.d(e, { V: () => h, f: () => f });
      var r = n(82897);
      let i =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var s = n(66479),
        a = n(22282);
      let o = "number",
        l = "color",
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function h(t) {
        let e = t.toString(),
          n = [],
          i = { color: [], number: [], var: [] },
          s = [],
          a = 0,
          h = e
            .replace(
              u,
              (t) => (
                r.y.test(t)
                  ? (i.color.push(a), s.push(l), n.push(r.y.parse(t)))
                  : t.startsWith("var(")
                  ? (i.var.push(a), s.push("var"), n.push(t))
                  : (i.number.push(a), s.push(o), n.push(parseFloat(t))),
                ++a,
                "${}"
              )
            )
            .split("${}");
        return { values: n, split: h, indexes: i, types: s };
      }
      function d(t) {
        return h(t).values;
      }
      function c(t) {
        let { split: e, types: n } = h(t),
          i = e.length;
        return (t) => {
          let s = "";
          for (let u = 0; u < i; u++)
            if (((s += e[u]), void 0 !== t[u])) {
              let e = n[u];
              e === o
                ? (s += (0, a.a)(t[u]))
                : e === l
                ? (s += r.y.transform(t[u]))
                : (s += t[u]);
            }
          return s;
        };
      }
      let p = (t) => ("number" == typeof t ? 0 : t),
        f = {
          test: function (t) {
            var e, n;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null == (e = t.match(s.S)) ? void 0 : e.length) || 0) +
                ((null == (n = t.match(i)) ? void 0 : n.length) || 0) >
                0
            );
          },
          parse: d,
          createTransformer: c,
          getAnimatableNone: function (t) {
            let e = d(t);
            return c(t)(e.map(p));
          },
        };
    },
    93095: (t, e, n) => {
      n.d(e, { n: () => r });
      let r = (t) => "string" == typeof t && "svg" === t.toLowerCase();
    },
    93676: (t, e, n) => {
      n.d(e, { j: () => i, p: () => a });
      let r = (t) => (e) => "string" == typeof e && e.startsWith(t),
        i = r("--"),
        s = r("var(--"),
        a = (t) => !!s(t) && o.test(t.split("/*")[0].trim()),
        o =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    95190: (t, e, n) => {
      n.d(e, { Sz: () => a, ZZ: () => l, dg: () => o });
      var r = n(83945),
        i = n(567),
        s = n(16498);
      let a = (0, r.A)(0.33, 1.53, 0.69, 0.99),
        o = (0, s.G)(a),
        l = (0, i.V)(o);
    },
    95902: (t, e, n) => {
      n.d(e, { u: () => s });
      var r = n(34379),
        i = n(14570);
      function s(t) {
        let e = (0, i.S)(t) ? t.get() : t;
        return (0, r.B)(e) ? e.toValue() : e;
      }
    },
    96147: (t, e, n) => {
      n.d(e, {
        OU: () => u,
        Ql: () => h,
        Ww: () => c,
        hq: () => s,
        o4: () => l,
      });
      var r = n(21109),
        i = n(62662);
      function s(t, e, n) {
        return n + e * (t - n);
      }
      function a(t, e, n, r, i) {
        return void 0 !== i && (t = r + i * (t - r)), r + n * (t - r) + e;
      }
      function o(t, e = 0, n = 1, r, i) {
        (t.min = a(t.min, e, n, r, i)), (t.max = a(t.max, e, n, r, i));
      }
      function l(t, { x: e, y: n }) {
        o(t.x, e.translate, e.scale, e.originPoint),
          o(t.y, n.translate, n.scale, n.originPoint);
      }
      function u(t, e, n, r = !1) {
        let s,
          a,
          o = n.length;
        if (o) {
          e.x = e.y = 1;
          for (let u = 0; u < o; u++) {
            a = (s = n[u]).projectionDelta;
            let { visualElement: o } = s.options;
            (!o || !o.props.style || "contents" !== o.props.style.display) &&
              (r &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                c(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              a && ((e.x *= a.x.scale), (e.y *= a.y.scale), l(t, a)),
              r && (0, i.HD)(s.latestValues) && c(t, s.latestValues));
          }
          e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
            e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
        }
      }
      function h(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function d(t, e, n, i, s = 0.5) {
        let a = (0, r.k)(t.min, t.max, s);
        o(t, e, n, a, i);
      }
      function c(t, e) {
        d(t.x, e.x, e.scaleX, e.scale, e.originX),
          d(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
    },
    97007: (t, e, n) => {
      n.d(e, { F: () => i });
      let r = (t, e) => (n) => e(t(n)),
        i = (...t) => t.reduce(r);
    },
    97219: (t, e, n) => {
      n.d(e, { $: () => s, q: () => a });
      var r = n(66479);
      let i =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        s = (t, e) => (n) =>
          !!(
            ("string" == typeof n && i.test(n) && n.startsWith(t)) ||
            (e && null != n && Object.prototype.hasOwnProperty.call(n, e))
          ),
        a = (t, e, n) => (i) => {
          if ("string" != typeof i) return i;
          let [s, a, o, l] = i.match(r.S);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(a),
            [n]: parseFloat(o),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    97494: (t, e, n) => {
      n.d(e, { E: () => i });
      var r = n(12115);
      let i = n(68972).B ? r.useLayoutEffect : r.useEffect;
    },
    97846: (t, e, n) => {
      n.d(e, { G: () => u });
      var r = n(19827),
        i = n(54542),
        s = n(45818),
        a = n(77782),
        o = n(47437),
        l = n(97007);
      function u(t, e, { clamp: n = !0, ease: h, mixer: d } = {}) {
        let c = t.length;
        if (
          ((0, i.V)(
            c === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === c)
        )
          return () => e[0];
        if (2 === c && e[0] === e[1]) return () => e[1];
        let p = t[0] === t[1];
        t[0] > t[c - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let f = (function (t, e, n) {
            let i = [],
              s = n || o.j,
              a = t.length - 1;
            for (let n = 0; n < a; n++) {
              let a = s(t[n], t[n + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[n] || r.l : e;
                a = (0, l.F)(t, a);
              }
              i.push(a);
            }
            return i;
          })(e, h, d),
          m = f.length,
          v = (n) => {
            if (p && n < t[0]) return e[0];
            let r = 0;
            if (m > 1) for (; r < t.length - 2 && !(n < t[r + 1]); r++);
            let i = (0, s.q)(t[r], t[r + 1], n);
            return f[r](i);
          };
        return n ? (e) => v((0, a.q)(t[0], t[c - 1], e)) : v;
      }
    },
    97914: (t, e, n) => {
      n.d(e, { B: () => l });
      var r = n(86169),
        i = n(45471);
      let s = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        a = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function o(t, e, n) {
        return "string" == typeof t ? t : i.px.transform(e + n * t);
      }
      function l(
        t,
        {
          attrX: e,
          attrY: n,
          attrScale: l,
          originX: u,
          originY: h,
          pathLength: d,
          pathSpacing: c = 1,
          pathOffset: p = 0,
          ...f
        },
        m,
        v
      ) {
        if (((0, r.O)(t, f, v), m)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: g, style: y, dimensions: w } = t;
        g.transform && (w && (y.transform = g.transform), delete g.transform),
          w &&
            (void 0 !== u || void 0 !== h || y.transform) &&
            (y.transformOrigin = (function (t, e, n) {
              let r = o(e, t.x, t.width),
                i = o(n, t.y, t.height);
              return `${r} ${i}`;
            })(w, void 0 !== u ? u : 0.5, void 0 !== h ? h : 0.5)),
          void 0 !== e && (g.x = e),
          void 0 !== n && (g.y = n),
          void 0 !== l && (g.scale = l),
          void 0 !== d &&
            (function (t, e, n = 1, r = 0, o = !0) {
              t.pathLength = 1;
              let l = o ? s : a;
              t[l.offset] = i.px.transform(-r);
              let u = i.px.transform(e),
                h = i.px.transform(n);
              t[l.array] = `${u} ${h}`;
            })(g, d, c, p, !1);
      }
    },
    98312: (t, e, n) => {
      n.d(e, { U: () => r, _: () => i });
      let r = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        i = ["initial", ...r];
    },
    98366: (t, e, n) => {
      n.d(e, { o: () => N, L: () => X });
      var r = n(46256),
        i = n(47215),
        s = n(18203),
        a = n(77782),
        o = n(47437),
        l = n(97007),
        u = n(15315);
      function h(t, e, n) {
        let r = Math.max(e - 5, 0);
        return (0, u.f)(n - t(r), e - r);
      }
      let d = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      var c = n(54542);
      function p(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let f = ["duration", "bounce"],
        m = ["stiffness", "damping", "mass"];
      function v(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function g(t = d.visualDuration, e = d.bounce) {
        let n,
          s =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: o, restDelta: l } = s,
          u = s.keyframes[0],
          y = s.keyframes[s.keyframes.length - 1],
          w = { done: !1, value: u },
          {
            stiffness: x,
            damping: b,
            mass: S,
            duration: A,
            velocity: T,
            isResolvedFromDuration: V,
          } = (function (t) {
            let e = {
              velocity: d.velocity,
              stiffness: d.stiffness,
              damping: d.damping,
              mass: d.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!v(t, m) && v(t, f))
              if (t.visualDuration) {
                let n = (2 * Math.PI) / (1.2 * t.visualDuration),
                  r = n * n,
                  i = 2 * (0, a.q)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
                e = { ...e, mass: d.mass, stiffness: r, damping: i };
              } else {
                let n = (function ({
                  duration: t = d.duration,
                  bounce: e = d.bounce,
                  velocity: n = d.velocity,
                  mass: r = d.mass,
                }) {
                  let s, o;
                  (0, c.$)(
                    t <= (0, i.f)(d.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let l = 1 - e;
                  (l = (0, a.q)(d.minDamping, d.maxDamping, l)),
                    (t = (0, a.q)(d.minDuration, d.maxDuration, (0, i.X)(t))),
                    l < 1
                      ? ((s = (e) => {
                          let r = e * l,
                            i = r * t;
                          return 0.001 - ((r - n) / p(e, l)) * Math.exp(-i);
                        }),
                        (o = (e) => {
                          let r = e * l * t,
                            i = Math.pow(l, 2) * Math.pow(e, 2) * t,
                            a = Math.exp(-r),
                            o = p(Math.pow(e, 2), l);
                          return (
                            ((r * n + n - i) *
                              a *
                              (-s(e) + 0.001 > 0 ? -1 : 1)) /
                            o
                          );
                        }))
                      : ((s = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - n) * t + 1)),
                        (o = (e) => t * t * (n - e) * Math.exp(-e * t)));
                  let u = (function (t, e, n) {
                    let r = n;
                    for (let n = 1; n < 12; n++) r -= t(r) / e(r);
                    return r;
                  })(s, o, 5 / t);
                  if (((t = (0, i.f)(t)), isNaN(u)))
                    return {
                      stiffness: d.stiffness,
                      damping: d.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(u, 2) * r;
                    return {
                      stiffness: e,
                      damping: 2 * l * Math.sqrt(r * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...n, mass: d.mass }).isResolvedFromDuration = !0;
              }
            return e;
          })({ ...s, velocity: -(0, i.X)(s.velocity || 0) }),
          P = T || 0,
          M = b / (2 * Math.sqrt(x * S)),
          k = y - u,
          C = (0, i.X)(Math.sqrt(x / S)),
          E = 5 > Math.abs(k);
        if (
          (o || (o = E ? d.restSpeed.granular : d.restSpeed.default),
          l || (l = E ? d.restDelta.granular : d.restDelta.default),
          M < 1)
        ) {
          let t = p(C, M);
          n = (e) =>
            y -
            Math.exp(-M * C * e) *
              (((P + M * C * k) / t) * Math.sin(t * e) + k * Math.cos(t * e));
        } else if (1 === M)
          n = (t) => y - Math.exp(-C * t) * (k + (P + C * k) * t);
        else {
          let t = C * Math.sqrt(M * M - 1);
          n = (e) => {
            let n = Math.exp(-M * C * e),
              r = Math.min(t * e, 300);
            return (
              y -
              (n * ((P + M * C * k) * Math.sinh(r) + t * k * Math.cosh(r))) / t
            );
          };
        }
        let F = {
          calculatedDuration: (V && A) || null,
          next: (t) => {
            let e = n(t);
            if (V) w.done = t >= A;
            else {
              let r = 0;
              M < 1 && (r = 0 === t ? (0, i.f)(P) : h(n, t, e));
              let s = Math.abs(y - e) <= l;
              w.done = Math.abs(r) <= o && s;
            }
            return (w.value = w.done ? y : e), w;
          },
          toString: () => {
            let t = Math.min((0, r.tu)(F), r.YE),
              e = (0, r.KZ)((e) => F.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return F;
      }
      function y({
        keyframes: t,
        velocity: e = 0,
        power: n = 0.8,
        timeConstant: r = 325,
        bounceDamping: i = 10,
        bounceStiffness: s = 500,
        modifyTarget: a,
        min: o,
        max: l,
        restDelta: u = 0.5,
        restSpeed: d,
      }) {
        let c,
          p,
          f = t[0],
          m = { done: !1, value: f },
          v = (t) => (void 0 !== o && t < o) || (void 0 !== l && t > l),
          y = (t) =>
            void 0 === o
              ? l
              : void 0 === l || Math.abs(o - t) < Math.abs(l - t)
              ? o
              : l,
          w = n * e,
          x = f + w,
          b = void 0 === a ? x : a(x);
        b !== x && (w = b - f);
        let S = (t) => -w * Math.exp(-t / r),
          A = (t) => b + S(t),
          T = (t) => {
            let e = S(t),
              n = A(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? b : n);
          },
          V = (t) => {
            v(m.value) &&
              ((c = t),
              (p = g({
                keyframes: [m.value, y(m.value)],
                velocity: h(A, t, m.value),
                damping: i,
                stiffness: s,
                restDelta: u,
                restSpeed: d,
              })));
          };
        return (
          V(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (p || void 0 !== c || ((e = !0), T(t), V(t)),
              void 0 !== c && t >= c)
                ? p.next(t - c)
                : (e || T(t), m);
            },
          }
        );
      }
      var w = n(83945);
      let x = (0, w.A)(0.42, 0, 1, 1),
        b = (0, w.A)(0, 0, 0.58, 1),
        S = (0, w.A)(0.42, 0, 0.58, 1),
        A = (t) => Array.isArray(t) && "number" != typeof t[0];
      var T = n(19827),
        V = n(14279),
        P = n(95190),
        M = n(59282);
      let k = {
          linear: T.l,
          easeIn: x,
          easeInOut: S,
          easeOut: b,
          circIn: M.po,
          circInOut: M.tn,
          circOut: M.yT,
          backIn: P.dg,
          backInOut: P.ZZ,
          backOut: P.Sz,
          anticipate: V.b,
        },
        C = (t) => {
          if ((0, r.DW)(t)) {
            (0, c.V)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, n, r, i] = t;
            return (0, w.A)(e, n, r, i);
          }
          return "string" == typeof t
            ? ((0, c.V)(void 0 !== k[t], `Invalid easing type '${t}'`), k[t])
            : t;
        };
      var E = n(97846),
        F = n(45818),
        O = n(21109);
      function I({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: r = "easeInOut",
      }) {
        var i;
        let s = A(r) ? r.map(C) : C(r),
          a = { done: !1, value: e[0] },
          o =
            ((i =
              n && n.length === e.length
                ? n
                : (function (t) {
                    let e = [0];
                    return (
                      !(function (t, e) {
                        let n = t[t.length - 1];
                        for (let r = 1; r <= e; r++) {
                          let i = (0, F.q)(0, e, r);
                          t.push((0, O.k)(n, 1, i));
                        }
                      })(e, t.length - 1),
                      e
                    );
                  })(e)),
            i.map((e) => e * t)),
          l = (0, E.G)(o, e, {
            ease: Array.isArray(s)
              ? s
              : e.map(() => s || S).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((a.value = l(e)), (a.done = e >= t), a),
        };
      }
      var B = n(86111),
        R = n(19932),
        j = n(59210);
      let D = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => j.Gt.update(e, !0),
          stop: () => (0, j.WG)(e),
          now: () => (j.uv.isProcessing ? j.uv.timestamp : R.k.now()),
        };
      };
      var W = n(41232);
      let $ = { decay: y, inertia: y, tween: I, keyframes: I, spring: g },
        L = (t) => t / 100;
      class N extends B.i {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: n,
              element: r,
              keyframes: i,
            } = this.options,
            a = (null == r ? void 0 : r.KeyframeResolver) || s.h;
          (this.resolver = new a(
            i,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            n,
            r
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e,
            n,
            {
              type: i = "keyframes",
              repeat: s = 0,
              repeatDelay: a = 0,
              repeatType: u,
              velocity: h = 0,
            } = this.options,
            d = (0, r.WH)(i) ? i : $[i] || I;
          d !== I &&
            "number" != typeof t[0] &&
            ((e = (0, l.F)(L, (0, o.j)(t[0], t[1]))), (t = [0, 100]));
          let c = d({ ...this.options, keyframes: t });
          "mirror" === u &&
            (n = d({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -h,
            })),
            null === c.calculatedDuration &&
              (c.calculatedDuration = (0, r.tu)(c));
          let { calculatedDuration: p } = c,
            f = p + a;
          return {
            generator: c,
            mirroredGenerator: n,
            mapPercentToKeyframes: e,
            calculatedDuration: p,
            resolvedDuration: f,
            totalDuration: f * (s + 1) - a,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: n } = this;
          if (!n) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: r,
            generator: i,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: l,
            calculatedDuration: u,
            totalDuration: h,
            resolvedDuration: d,
          } = n;
          if (null === this.startTime) return i.next(0);
          let {
            delay: c,
            repeat: p,
            repeatType: f,
            repeatDelay: m,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - h / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > h;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = h);
          let w = this.currentTime,
            x = i;
          if (p) {
            let t = Math.min(this.currentTime, h) / d,
              e = Math.floor(t),
              n = t % 1;
            !n && t >= 1 && (n = 1),
              1 === n && e--,
              (e = Math.min(e, p + 1)) % 2 &&
                ("reverse" === f
                  ? ((n = 1 - n), m && (n -= m / d))
                  : "mirror" === f && (x = s)),
              (w = (0, a.q)(0, 1, n) * d);
          }
          let b = y ? { done: !1, value: l[0] } : x.next(w);
          o && (b.value = o(b.value));
          let { done: S } = b;
          y ||
            null === u ||
            (S =
              this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
          let A =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && S));
          return (
            A && void 0 !== r && (b.value = (0, W.X)(l, this.options, r)),
            v && v(b.value),
            A && this.finish(),
            b
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, i.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, i.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, i.f)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, i.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = D, onPlay: e, startTime: n } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let r = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = r - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = r)
            : (this.startTime = null != n ? n : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime = null != (t = this.currentTime) ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      function X(t) {
        return new N(t);
      }
    },
  },
]);
