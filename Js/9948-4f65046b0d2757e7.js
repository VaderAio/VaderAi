"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9948],
  {
    24371: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(40157).A)("CircleX", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
        ["path", { d: "m9 9 6 6", key: "z0biqf" }],
      ]);
    },
    54761: (e, t, r) => {
      r.d(t, {
        i3: () => ey,
        UC: () => ev,
        ZL: () => eg,
        Kq: () => eh,
        bL: () => ex,
        l9: () => em,
      });
      var n = r(12115),
        o = r(85185),
        i = r(6101),
        l = r(46081),
        a = r(19178),
        s = r(61285),
        c = r(84945),
        u = r(41093),
        d = r(63655),
        p = r(95155),
        f = n.forwardRef((e, t) => {
          let { children: r, width: n = 10, height: o = 5, ...i } = e;
          return (0, p.jsx)(d.sG.svg, {
            ...i,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? r
              : (0, p.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      f.displayName = "Arrow";
      var h = r(39033),
        x = r(52712),
        m = r(11275),
        g = "Popper",
        [v, y] = (0, l.A)(g),
        [w, b] = v(g),
        C = (e) => {
          let { __scopePopper: t, children: r } = e,
            [o, i] = n.useState(null);
          return (0, p.jsx)(w, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: r,
          });
        };
      C.displayName = g;
      var E = "PopperAnchor",
        j = n.forwardRef((e, t) => {
          let { __scopePopper: r, virtualRef: o, ...l } = e,
            a = b(E, r),
            s = n.useRef(null),
            c = (0, i.s)(t, s);
          return (
            n.useEffect(() => {
              a.onAnchorChange((null == o ? void 0 : o.current) || s.current);
            }),
            o ? null : (0, p.jsx)(d.sG.div, { ...l, ref: c })
          );
        });
      j.displayName = E;
      var R = "PopperContent",
        [T, k] = v(R),
        P = n.forwardRef((e, t) => {
          var r, o, l, a, s, f, g, v;
          let {
              __scopePopper: y,
              side: w = "bottom",
              sideOffset: C = 0,
              align: E = "center",
              alignOffset: j = 0,
              arrowPadding: k = 0,
              avoidCollisions: P = !0,
              collisionBoundary: A = [],
              collisionPadding: L = 0,
              sticky: M = "partial",
              hideWhenDetached: _ = !1,
              updatePositionStrategy: I = "optimized",
              onPlaced: D,
              ...z
            } = e,
            H = b(R, y),
            [B, X] = n.useState(null),
            Y = (0, i.s)(t, (e) => X(e)),
            [F, U] = n.useState(null),
            G = (0, m.X)(F),
            W = null != (g = null == G ? void 0 : G.width) ? g : 0,
            q = null != (v = null == G ? void 0 : G.height) ? v : 0,
            Q =
              "number" == typeof L
                ? L
                : { top: 0, right: 0, bottom: 0, left: 0, ...L },
            V = Array.isArray(A) ? A : [A],
            Z = V.length > 0,
            K = { padding: Q, boundary: V.filter(N), altBoundary: Z },
            {
              refs: J,
              floatingStyles: $,
              placement: ee,
              isPositioned: et,
              middlewareData: er,
            } = (0, c.we)({
              strategy: "fixed",
              placement: w + ("center" !== E ? "-" + E : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                  t[r] = arguments[r];
                return (0, u.ll)(...t, { animationFrame: "always" === I });
              },
              elements: { reference: H.anchor },
              middleware: [
                (0, c.cY)({ mainAxis: C + q, alignmentAxis: j }),
                P &&
                  (0, c.BN)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === M ? (0, c.ER)() : void 0,
                    ...K,
                  }),
                P && (0, c.UU)({ ...K }),
                (0, c.Ej)({
                  ...K,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: r,
                        availableWidth: n,
                        availableHeight: o,
                      } = e,
                      { width: i, height: l } = r.reference,
                      a = t.floating.style;
                    a.setProperty(
                      "--radix-popper-available-width",
                      "".concat(n, "px")
                    ),
                      a.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px")
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(i, "px")
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(l, "px")
                      );
                  },
                }),
                F && (0, c.UE)({ element: F, padding: k }),
                O({ arrowWidth: W, arrowHeight: q }),
                _ && (0, c.jD)({ strategy: "referenceHidden", ...K }),
              ],
            }),
            [en, eo] = S(ee),
            ei = (0, h.c)(D);
          (0, x.N)(() => {
            et && (null == ei || ei());
          }, [et, ei]);
          let el = null == (r = er.arrow) ? void 0 : r.x,
            ea = null == (o = er.arrow) ? void 0 : o.y,
            es = (null == (l = er.arrow) ? void 0 : l.centerOffset) !== 0,
            [ec, eu] = n.useState();
          return (
            (0, x.N)(() => {
              B && eu(window.getComputedStyle(B).zIndex);
            }, [B]),
            (0, p.jsx)("div", {
              ref: J.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...$,
                transform: et ? $.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: ec,
                "--radix-popper-transform-origin": [
                  null == (a = er.transformOrigin) ? void 0 : a.x,
                  null == (s = er.transformOrigin) ? void 0 : s.y,
                ].join(" "),
                ...((null == (f = er.hide) ? void 0 : f.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, p.jsx)(T, {
                scope: y,
                placedSide: en,
                onArrowChange: U,
                arrowX: el,
                arrowY: ea,
                shouldHideArrow: es,
                children: (0, p.jsx)(d.sG.div, {
                  "data-side": en,
                  "data-align": eo,
                  ...z,
                  ref: Y,
                  style: { ...z.style, animation: et ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      P.displayName = R;
      var A = "PopperArrow",
        L = { top: "bottom", right: "left", bottom: "top", left: "right" },
        M = n.forwardRef(function (e, t) {
          let { __scopePopper: r, ...n } = e,
            o = k(A, r),
            i = L[o.placedSide];
          return (0,
          p.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, p.jsx)(f, { ...n, ref: t, style: { ...n.style, display: "block" } }) });
        });
      function N(e) {
        return null !== e;
      }
      M.displayName = A;
      var O = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var r, n, o, i, l;
          let { placement: a, rects: s, middlewareData: c } = t,
            u = (null == (r = c.arrow) ? void 0 : r.centerOffset) !== 0,
            d = u ? 0 : e.arrowWidth,
            p = u ? 0 : e.arrowHeight,
            [f, h] = S(a),
            x = { start: "0%", center: "50%", end: "100%" }[h],
            m =
              (null != (i = null == (n = c.arrow) ? void 0 : n.x) ? i : 0) +
              d / 2,
            g =
              (null != (l = null == (o = c.arrow) ? void 0 : o.y) ? l : 0) +
              p / 2,
            v = "",
            y = "";
          return (
            "bottom" === f
              ? ((v = u ? x : "".concat(m, "px")), (y = "".concat(-p, "px")))
              : "top" === f
              ? ((v = u ? x : "".concat(m, "px")),
                (y = "".concat(s.floating.height + p, "px")))
              : "right" === f
              ? ((v = "".concat(-p, "px")), (y = u ? x : "".concat(g, "px")))
              : "left" === f &&
                ((v = "".concat(s.floating.width + p, "px")),
                (y = u ? x : "".concat(g, "px"))),
            { data: { x: v, y } }
          );
        },
      });
      function S(e) {
        let [t, r = "center"] = e.split("-");
        return [t, r];
      }
      var _ = r(34378),
        I = r(28905),
        D = r(99708),
        z = r(5845),
        H = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
        }),
        B = n.forwardRef((e, t) =>
          (0, p.jsx)(d.sG.span, { ...e, ref: t, style: { ...H, ...e.style } })
        );
      B.displayName = "VisuallyHidden";
      var [X, Y] = (0, l.A)("Tooltip", [y]),
        F = y(),
        U = "TooltipProvider",
        G = "tooltip.open",
        [W, q] = X(U),
        Q = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: r = 700,
              skipDelayDuration: o = 300,
              disableHoverableContent: i = !1,
              children: l,
            } = e,
            a = n.useRef(!0),
            s = n.useRef(!1),
            c = n.useRef(0);
          return (
            n.useEffect(() => {
              let e = c.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, p.jsx)(W, {
              scope: t,
              isOpenDelayedRef: a,
              delayDuration: r,
              onOpen: n.useCallback(() => {
                window.clearTimeout(c.current), (a.current = !1);
              }, []),
              onClose: n.useCallback(() => {
                window.clearTimeout(c.current),
                  (c.current = window.setTimeout(() => (a.current = !0), o));
              }, [o]),
              isPointerInTransitRef: s,
              onPointerInTransitChange: n.useCallback((e) => {
                s.current = e;
              }, []),
              disableHoverableContent: i,
              children: l,
            })
          );
        };
      Q.displayName = U;
      var V = "Tooltip",
        [Z, K] = X(V),
        J = (e) => {
          let {
              __scopeTooltip: t,
              children: r,
              open: o,
              defaultOpen: i,
              onOpenChange: l,
              disableHoverableContent: a,
              delayDuration: c,
            } = e,
            u = q(V, e.__scopeTooltip),
            d = F(t),
            [f, h] = n.useState(null),
            x = (0, s.B)(),
            m = n.useRef(0),
            g = null != a ? a : u.disableHoverableContent,
            v = null != c ? c : u.delayDuration,
            y = n.useRef(!1),
            [w, b] = (0, z.i)({
              prop: o,
              defaultProp: null != i && i,
              onChange: (e) => {
                e
                  ? (u.onOpen(), document.dispatchEvent(new CustomEvent(G)))
                  : u.onClose(),
                  null == l || l(e);
              },
              caller: V,
            }),
            E = n.useMemo(
              () =>
                w ? (y.current ? "delayed-open" : "instant-open") : "closed",
              [w]
            ),
            j = n.useCallback(() => {
              window.clearTimeout(m.current),
                (m.current = 0),
                (y.current = !1),
                b(!0);
            }, [b]),
            R = n.useCallback(() => {
              window.clearTimeout(m.current), (m.current = 0), b(!1);
            }, [b]),
            T = n.useCallback(() => {
              window.clearTimeout(m.current),
                (m.current = window.setTimeout(() => {
                  (y.current = !0), b(!0), (m.current = 0);
                }, v));
            }, [v, b]);
          return (
            n.useEffect(
              () => () => {
                m.current && (window.clearTimeout(m.current), (m.current = 0));
              },
              []
            ),
            (0, p.jsx)(C, {
              ...d,
              children: (0, p.jsx)(Z, {
                scope: t,
                contentId: x,
                open: w,
                stateAttribute: E,
                trigger: f,
                onTriggerChange: h,
                onTriggerEnter: n.useCallback(() => {
                  u.isOpenDelayedRef.current ? T() : j();
                }, [u.isOpenDelayedRef, T, j]),
                onTriggerLeave: n.useCallback(() => {
                  g ? R() : (window.clearTimeout(m.current), (m.current = 0));
                }, [R, g]),
                onOpen: j,
                onClose: R,
                disableHoverableContent: g,
                children: r,
              }),
            })
          );
        };
      J.displayName = V;
      var $ = "TooltipTrigger",
        ee = n.forwardRef((e, t) => {
          let { __scopeTooltip: r, ...l } = e,
            a = K($, r),
            s = q($, r),
            c = F(r),
            u = n.useRef(null),
            f = (0, i.s)(t, u, a.onTriggerChange),
            h = n.useRef(!1),
            x = n.useRef(!1),
            m = n.useCallback(() => (h.current = !1), []);
          return (
            n.useEffect(
              () => () => document.removeEventListener("pointerup", m),
              [m]
            ),
            (0, p.jsx)(j, {
              asChild: !0,
              ...c,
              children: (0, p.jsx)(d.sG.button, {
                "aria-describedby": a.open ? a.contentId : void 0,
                "data-state": a.stateAttribute,
                ...l,
                ref: f,
                onPointerMove: (0, o.m)(e.onPointerMove, (e) => {
                  "touch" !== e.pointerType &&
                    (x.current ||
                      s.isPointerInTransitRef.current ||
                      (a.onTriggerEnter(), (x.current = !0)));
                }),
                onPointerLeave: (0, o.m)(e.onPointerLeave, () => {
                  a.onTriggerLeave(), (x.current = !1);
                }),
                onPointerDown: (0, o.m)(e.onPointerDown, () => {
                  a.open && a.onClose(),
                    (h.current = !0),
                    document.addEventListener("pointerup", m, { once: !0 });
                }),
                onFocus: (0, o.m)(e.onFocus, () => {
                  h.current || a.onOpen();
                }),
                onBlur: (0, o.m)(e.onBlur, a.onClose),
                onClick: (0, o.m)(e.onClick, a.onClose),
              }),
            })
          );
        });
      ee.displayName = $;
      var et = "TooltipPortal",
        [er, en] = X(et, { forceMount: void 0 }),
        eo = (e) => {
          let {
              __scopeTooltip: t,
              forceMount: r,
              children: n,
              container: o,
            } = e,
            i = K(et, t);
          return (0, p.jsx)(er, {
            scope: t,
            forceMount: r,
            children: (0, p.jsx)(I.C, {
              present: r || i.open,
              children: (0, p.jsx)(_.Z, {
                asChild: !0,
                container: o,
                children: n,
              }),
            }),
          });
        };
      eo.displayName = et;
      var ei = "TooltipContent",
        el = n.forwardRef((e, t) => {
          let r = en(ei, e.__scopeTooltip),
            { forceMount: n = r.forceMount, side: o = "top", ...i } = e,
            l = K(ei, e.__scopeTooltip);
          return (0, p.jsx)(I.C, {
            present: n || l.open,
            children: l.disableHoverableContent
              ? (0, p.jsx)(ed, { side: o, ...i, ref: t })
              : (0, p.jsx)(ea, { side: o, ...i, ref: t }),
          });
        }),
        ea = n.forwardRef((e, t) => {
          let r = K(ei, e.__scopeTooltip),
            o = q(ei, e.__scopeTooltip),
            l = n.useRef(null),
            a = (0, i.s)(t, l),
            [s, c] = n.useState(null),
            { trigger: u, onClose: d } = r,
            f = l.current,
            { onPointerInTransitChange: h } = o,
            x = n.useCallback(() => {
              c(null), h(!1);
            }, [h]),
            m = n.useCallback(
              (e, t) => {
                let r = e.currentTarget,
                  n = { x: e.clientX, y: e.clientY },
                  o = (function (e, t) {
                    let r = Math.abs(t.top - e.y),
                      n = Math.abs(t.bottom - e.y),
                      o = Math.abs(t.right - e.x),
                      i = Math.abs(t.left - e.x);
                    switch (Math.min(r, n, o, i)) {
                      case i:
                        return "left";
                      case o:
                        return "right";
                      case r:
                        return "top";
                      case n:
                        return "bottom";
                      default:
                        throw Error("unreachable");
                    }
                  })(n, r.getBoundingClientRect());
                c(
                  (function (e) {
                    let t = e.slice();
                    return (
                      t.sort((e, t) =>
                        e.x < t.x
                          ? -1
                          : e.x > t.x
                          ? 1
                          : e.y < t.y
                          ? -1
                          : 1 * !!(e.y > t.y)
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        let t = [];
                        for (let r = 0; r < e.length; r++) {
                          let n = e[r];
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              r = t[t.length - 2];
                            if (
                              (e.x - r.x) * (n.y - r.y) >=
                              (e.y - r.y) * (n.x - r.x)
                            )
                              t.pop();
                            else break;
                          }
                          t.push(n);
                        }
                        t.pop();
                        let r = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          let n = e[t];
                          for (; r.length >= 2; ) {
                            let e = r[r.length - 1],
                              t = r[r.length - 2];
                            if (
                              (e.x - t.x) * (n.y - t.y) >=
                              (e.y - t.y) * (n.x - t.x)
                            )
                              r.pop();
                            else break;
                          }
                          r.push(n);
                        }
                        return (r.pop(),
                        1 === t.length &&
                          1 === r.length &&
                          t[0].x === r[0].x &&
                          t[0].y === r[0].y)
                          ? t
                          : t.concat(r);
                      })(t)
                    );
                  })([
                    ...(function (e, t) {
                      let r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 5,
                        n = [];
                      switch (t) {
                        case "top":
                          n.push(
                            { x: e.x - r, y: e.y + r },
                            { x: e.x + r, y: e.y + r }
                          );
                          break;
                        case "bottom":
                          n.push(
                            { x: e.x - r, y: e.y - r },
                            { x: e.x + r, y: e.y - r }
                          );
                          break;
                        case "left":
                          n.push(
                            { x: e.x + r, y: e.y - r },
                            { x: e.x + r, y: e.y + r }
                          );
                          break;
                        case "right":
                          n.push(
                            { x: e.x - r, y: e.y - r },
                            { x: e.x - r, y: e.y + r }
                          );
                      }
                      return n;
                    })(n, o),
                    ...(function (e) {
                      let { top: t, right: r, bottom: n, left: o } = e;
                      return [
                        { x: o, y: t },
                        { x: r, y: t },
                        { x: r, y: n },
                        { x: o, y: n },
                      ];
                    })(t.getBoundingClientRect()),
                  ])
                ),
                  h(!0);
              },
              [h]
            );
          return (
            n.useEffect(() => () => x(), [x]),
            n.useEffect(() => {
              if (u && f) {
                let e = (e) => m(e, f),
                  t = (e) => m(e, u);
                return (
                  u.addEventListener("pointerleave", e),
                  f.addEventListener("pointerleave", t),
                  () => {
                    u.removeEventListener("pointerleave", e),
                      f.removeEventListener("pointerleave", t);
                  }
                );
              }
            }, [u, f, m, x]),
            n.useEffect(() => {
              if (s) {
                let e = (e) => {
                  let t = e.target,
                    r = { x: e.clientX, y: e.clientY },
                    n =
                      (null == u ? void 0 : u.contains(t)) ||
                      (null == f ? void 0 : f.contains(t)),
                    o = !(function (e, t) {
                      let { x: r, y: n } = e,
                        o = !1;
                      for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                        let l = t[e],
                          a = t[i],
                          s = l.x,
                          c = l.y,
                          u = a.x,
                          d = a.y;
                        c > n != d > n &&
                          r < ((u - s) * (n - c)) / (d - c) + s &&
                          (o = !o);
                      }
                      return o;
                    })(r, s);
                  n ? x() : o && (x(), d());
                };
                return (
                  document.addEventListener("pointermove", e),
                  () => document.removeEventListener("pointermove", e)
                );
              }
            }, [u, f, s, d, x]),
            (0, p.jsx)(ed, { ...e, ref: a })
          );
        }),
        [es, ec] = X(V, { isInside: !1 }),
        eu = (0, D.Dc)("TooltipContent"),
        ed = n.forwardRef((e, t) => {
          let {
              __scopeTooltip: r,
              children: o,
              "aria-label": i,
              onEscapeKeyDown: l,
              onPointerDownOutside: s,
              ...c
            } = e,
            u = K(ei, r),
            d = F(r),
            { onClose: f } = u;
          return (
            n.useEffect(
              () => (
                document.addEventListener(G, f),
                () => document.removeEventListener(G, f)
              ),
              [f]
            ),
            n.useEffect(() => {
              if (u.trigger) {
                let e = (e) => {
                  let t = e.target;
                  (null == t ? void 0 : t.contains(u.trigger)) && f();
                };
                return (
                  window.addEventListener("scroll", e, { capture: !0 }),
                  () => window.removeEventListener("scroll", e, { capture: !0 })
                );
              }
            }, [u.trigger, f]),
            (0, p.jsx)(a.qW, {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onEscapeKeyDown: l,
              onPointerDownOutside: s,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: f,
              children: (0, p.jsxs)(P, {
                "data-state": u.stateAttribute,
                ...d,
                ...c,
                ref: t,
                style: {
                  ...c.style,
                  "--radix-tooltip-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-tooltip-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-tooltip-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-tooltip-trigger-width":
                    "var(--radix-popper-anchor-width)",
                  "--radix-tooltip-trigger-height":
                    "var(--radix-popper-anchor-height)",
                },
                children: [
                  (0, p.jsx)(eu, { children: o }),
                  (0, p.jsx)(es, {
                    scope: r,
                    isInside: !0,
                    children: (0, p.jsx)(B, {
                      id: u.contentId,
                      role: "tooltip",
                      children: i || o,
                    }),
                  }),
                ],
              }),
            })
          );
        });
      el.displayName = ei;
      var ep = "TooltipArrow",
        ef = n.forwardRef((e, t) => {
          let { __scopeTooltip: r, ...n } = e,
            o = F(r);
          return ec(ep, r).isInside
            ? null
            : (0, p.jsx)(M, { ...o, ...n, ref: t });
        });
      ef.displayName = ep;
      var eh = Q,
        ex = J,
        em = ee,
        eg = eo,
        ev = el,
        ey = ef;
    },
    58127: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(40157).A)("CircleCheck", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]);
    },
    60760: (e, t, r) => {
      r.d(t, { N: () => g });
      var n = r(95155),
        o = r(12115),
        i = r(90869),
        l = r(82885),
        a = r(80845),
        s = r(51508);
      class c extends o.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function u(e) {
        let { children: t, isPresent: r } = e,
          i = (0, o.useId)(),
          l = (0, o.useRef)(null),
          a = (0, o.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: u } = (0, o.useContext)(s.Q);
        return (
          (0, o.useInsertionEffect)(() => {
            let { width: e, height: t, top: n, left: o } = a.current;
            if (r || !l.current || !e || !t) return;
            l.current.dataset.motionPopId = i;
            let s = document.createElement("style");
            return (
              u && (s.nonce = u),
              document.head.appendChild(s),
              s.sheet &&
                s.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      i,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            top: ")
                    .concat(n, "px !important;\n            left: ")
                    .concat(o, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(s);
              }
            );
          }, [r]),
          (0, n.jsx)(c, {
            isPresent: r,
            childRef: l,
            sizeRef: a,
            children: o.cloneElement(t, { ref: l }),
          })
        );
      }
      let d = (e) => {
        let {
            children: t,
            initial: r,
            isPresent: i,
            onExitComplete: s,
            custom: c,
            presenceAffectsLayout: d,
            mode: f,
          } = e,
          h = (0, l.M)(p),
          x = (0, o.useId)(),
          m = (0, o.useCallback)(
            (e) => {
              for (let t of (h.set(e, !0), h.values())) if (!t) return;
              s && s();
            },
            [h, s]
          ),
          g = (0, o.useMemo)(
            () => ({
              id: x,
              initial: r,
              isPresent: i,
              custom: c,
              onExitComplete: m,
              register: (e) => (h.set(e, !1), () => h.delete(e)),
            }),
            d ? [Math.random(), m] : [i, m]
          );
        return (
          (0, o.useMemo)(() => {
            h.forEach((e, t) => h.set(t, !1));
          }, [i]),
          o.useEffect(() => {
            i || h.size || !s || s();
          }, [i]),
          "popLayout" === f &&
            (t = (0, n.jsx)(u, { isPresent: i, children: t })),
          (0, n.jsx)(a.t.Provider, { value: g, children: t })
        );
      };
      function p() {
        return new Map();
      }
      var f = r(32082);
      let h = (e) => e.key || "";
      function x(e) {
        let t = [];
        return (
          o.Children.forEach(e, (e) => {
            (0, o.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var m = r(97494);
      let g = (e) => {
        let {
            children: t,
            custom: r,
            initial: a = !0,
            onExitComplete: s,
            presenceAffectsLayout: c = !0,
            mode: u = "sync",
            propagate: p = !1,
          } = e,
          [g, v] = (0, f.xQ)(p),
          y = (0, o.useMemo)(() => x(t), [t]),
          w = p && !g ? [] : y.map(h),
          b = (0, o.useRef)(!0),
          C = (0, o.useRef)(y),
          E = (0, l.M)(() => new Map()),
          [j, R] = (0, o.useState)(y),
          [T, k] = (0, o.useState)(y);
        (0, m.E)(() => {
          (b.current = !1), (C.current = y);
          for (let e = 0; e < T.length; e++) {
            let t = h(T[e]);
            w.includes(t) ? E.delete(t) : !0 !== E.get(t) && E.set(t, !1);
          }
        }, [T, w.length, w.join("-")]);
        let P = [];
        if (y !== j) {
          let e = [...y];
          for (let t = 0; t < T.length; t++) {
            let r = T[t],
              n = h(r);
            w.includes(n) || (e.splice(t, 0, r), P.push(r));
          }
          "wait" === u && P.length && (e = P), k(x(e)), R(y);
          return;
        }
        let { forceRender: A } = (0, o.useContext)(i.L);
        return (0, n.jsx)(n.Fragment, {
          children: T.map((e) => {
            let t = h(e),
              o = (!p || !!g) && (y === T || w.includes(t));
            return (0, n.jsx)(
              d,
              {
                isPresent: o,
                initial: (!b.current || !!a) && void 0,
                custom: o ? void 0 : r,
                presenceAffectsLayout: c,
                mode: u,
                onExitComplete: o
                  ? void 0
                  : () => {
                      if (!E.has(t)) return;
                      E.set(t, !0);
                      let e = !0;
                      E.forEach((t) => {
                        t || (e = !1);
                      }),
                        e &&
                          (null == A || A(),
                          k(C.current),
                          p && (null == v || v()),
                          s && s());
                    },
                children: e,
              },
              t
            );
          }),
        });
      };
    },
  },
]);
