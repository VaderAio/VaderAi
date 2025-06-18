"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6720],
  {
    46720: (e, t, n) => {
      n.d(t, {
        bm: () => eZ,
        UC: () => eY,
        VY: () => eX,
        hJ: () => eK,
        ZL: () => eB,
        bL: () => eO,
        hE: () => eG,
        l9: () => eW,
      });
      var r = n(12115),
        o = n(85185),
        a = n(6101),
        l = n(46081),
        i = n(61285),
        u = n(5845),
        c = n(19178),
        s = n(63655),
        d = n(39033),
        f = n(95155),
        p = "focusScope.autoFocusOnMount",
        v = "focusScope.autoFocusOnUnmount",
        m = { bubbles: !1, cancelable: !0 },
        h = r.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: o = !1,
              onMountAutoFocus: l,
              onUnmountAutoFocus: i,
              ...u
            } = e,
            [c, h] = r.useState(null),
            w = (0, d.c)(l),
            C = (0, d.c)(i),
            R = r.useRef(null),
            N = (0, a.s)(t, (e) => h(e)),
            D = r.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          r.useEffect(() => {
            if (o) {
              let e = function (e) {
                  if (D.paused || !c) return;
                  let t = e.target;
                  c.contains(t)
                    ? (R.current = t)
                    : E(R.current, { select: !0 });
                },
                t = function (e) {
                  if (D.paused || !c) return;
                  let t = e.relatedTarget;
                  null !== t && (c.contains(t) || E(R.current, { select: !0 }));
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && E(c);
              });
              return (
                c && n.observe(c, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [o, c, D.paused]),
            r.useEffect(() => {
              if (c) {
                b.add(D);
                let e = document.activeElement;
                if (!c.contains(e)) {
                  let t = new CustomEvent(p, m);
                  c.addEventListener(p, w),
                    c.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (E(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        g(c).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && E(c));
                }
                return () => {
                  c.removeEventListener(p, w),
                    setTimeout(() => {
                      let t = new CustomEvent(v, m);
                      c.addEventListener(v, C),
                        c.dispatchEvent(t),
                        t.defaultPrevented ||
                          E(null != e ? e : document.body, { select: !0 }),
                        c.removeEventListener(v, C),
                        b.remove(D);
                    }, 0);
                };
              }
            }, [c, w, C, D]);
          let _ = r.useCallback(
            (e) => {
              if ((!n && !o) || D.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                r = document.activeElement;
              if (t && r) {
                let t = e.currentTarget,
                  [o, a] = (function (e) {
                    let t = g(e);
                    return [y(t, e), y(t.reverse(), e)];
                  })(t);
                o && a
                  ? e.shiftKey || r !== a
                    ? e.shiftKey &&
                      r === o &&
                      (e.preventDefault(), n && E(a, { select: !0 }))
                    : (e.preventDefault(), n && E(o, { select: !0 }))
                  : r === t && e.preventDefault();
              }
            },
            [n, o, D.paused]
          );
          return (0, f.jsx)(s.sG.div, {
            tabIndex: -1,
            ...u,
            ref: N,
            onKeyDown: _,
          });
        });
      function g(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function y(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function E(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      h.displayName = "FocusScope";
      var b = (function () {
        let e = [];
        return {
          add(t) {
            let n = e[0];
            t !== n && (null == n || n.pause()), (e = w(e, t)).unshift(t);
          },
          remove(t) {
            var n;
            null == (n = (e = w(e, t))[0]) || n.resume();
          },
        };
      })();
      function w(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var C = n(34378),
        R = n(28905),
        N = 0;
      function D() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
      var _ = n(39249),
        A = n(56985),
        k = n(70464),
        x = (0, n(37548).f)(),
        S = function () {},
        T = r.forwardRef(function (e, t) {
          var n = r.useRef(null),
            o = r.useState({
              onScrollCapture: S,
              onWheelCapture: S,
              onTouchMoveCapture: S,
            }),
            a = o[0],
            l = o[1],
            i = e.forwardProps,
            u = e.children,
            c = e.className,
            s = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            v = e.noRelative,
            m = e.noIsolation,
            h = e.inert,
            g = e.allowPinchZoom,
            y = e.as,
            E = e.gapMode,
            b = (0, _.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noRelative",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            w = (0, k.S)([n, t]),
            C = (0, _.__assign)((0, _.__assign)({}, b), a);
          return r.createElement(
            r.Fragment,
            null,
            d &&
              r.createElement(p, {
                sideCar: x,
                removeScrollBar: s,
                shards: f,
                noRelative: v,
                noIsolation: m,
                inert: h,
                setCallbacks: l,
                allowPinchZoom: !!g,
                lockRef: n,
                gapMode: E,
              }),
            i
              ? r.cloneElement(
                  r.Children.only(u),
                  (0, _.__assign)((0, _.__assign)({}, C), { ref: w })
                )
              : r.createElement(
                  void 0 === y ? "div" : y,
                  (0, _.__assign)({}, C, { className: c, ref: w }),
                  u
                )
          );
        });
      (T.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (T.classNames = { fullWidth: A.pN, zeroRight: A.Mi });
      var I = n(50514),
        L = n(21515),
        M = n(29874),
        j = !1;
      if ("undefined" != typeof window)
        try {
          var F = Object.defineProperty({}, "passive", {
            get: function () {
              return (j = !0), !0;
            },
          });
          window.addEventListener("test", F, F),
            window.removeEventListener("test", F, F);
        } catch (e) {
          j = !1;
        }
      var P = !!j && { passive: !1 },
        O = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          );
        },
        W = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              B(e, r))
            ) {
              var o = K(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        B = function (e, t) {
          return "v" === e ? O(t, "overflowY") : O(t, "overflowX");
        },
        K = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        Y = function (e, t, n, r, o) {
          var a,
            l =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            i = l * r,
            u = n.target,
            c = t.contains(u),
            s = !1,
            d = i > 0,
            f = 0,
            p = 0;
          do {
            if (!u) break;
            var v = K(e, u),
              m = v[0],
              h = v[1] - v[2] - l * m;
            (m || h) && B(e, u) && ((f += h), (p += m));
            var g = u.parentNode;
            u = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
          } while (
            (!c && u !== document.body) ||
            (c && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && i > f))
              ? (s = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -i > p)) && (s = !0),
            s
          );
        },
        G = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        X = function (e) {
          return [e.deltaX, e.deltaY];
        },
        Z = function (e) {
          return e && "current" in e ? e.current : e;
        },
        q = 0,
        U = [];
      let H = (0, I.m)(x, function (e) {
        var t = r.useRef([]),
          n = r.useRef([0, 0]),
          o = r.useRef(),
          a = r.useState(q++)[0],
          l = r.useState(M.T0)[0],
          i = r.useRef(e);
        r.useEffect(
          function () {
            i.current = e;
          },
          [e]
        ),
          r.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(a));
                var t = (0, _.__spreadArray)(
                  [e.lockRef.current],
                  (e.shards || []).map(Z),
                  !0
                ).filter(Boolean);
                return (
                  t.forEach(function (e) {
                    return e.classList.add("allow-interactivity-".concat(a));
                  }),
                  function () {
                    document.body.classList.remove(
                      "block-interactivity-".concat(a)
                    ),
                      t.forEach(function (e) {
                        return e.classList.remove(
                          "allow-interactivity-".concat(a)
                        );
                      });
                  }
                );
              }
            },
            [e.inert, e.lockRef.current, e.shards]
          );
        var u = r.useCallback(function (e, t) {
            if (
              ("touches" in e && 2 === e.touches.length) ||
              ("wheel" === e.type && e.ctrlKey)
            )
              return !i.current.allowPinchZoom;
            var r,
              a = G(e),
              l = n.current,
              u = "deltaX" in e ? e.deltaX : l[0] - a[0],
              c = "deltaY" in e ? e.deltaY : l[1] - a[1],
              s = e.target,
              d = Math.abs(u) > Math.abs(c) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === s.type) return !1;
            var f = W(d, s);
            if (!f) return !0;
            if (
              (f ? (r = d) : ((r = "v" === d ? "h" : "v"), (f = W(d, s))), !f)
            )
              return !1;
            if (
              (!o.current &&
                "changedTouches" in e &&
                (u || c) &&
                (o.current = r),
              !r)
            )
              return !0;
            var p = o.current || r;
            return Y(p, t, e, "h" === p ? u : c, !0);
          }, []),
          c = r.useCallback(function (e) {
            if (U.length && U[U.length - 1] === l) {
              var n = "deltaY" in e ? X(e) : G(e),
                r = t.current.filter(function (t) {
                  var r;
                  return (
                    t.name === e.type &&
                    (t.target === e.target || e.target === t.shadowParent) &&
                    ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                  );
                })[0];
              if (r && r.should) {
                e.cancelable && e.preventDefault();
                return;
              }
              if (!r) {
                var o = (i.current.shards || [])
                  .map(Z)
                  .filter(Boolean)
                  .filter(function (t) {
                    return t.contains(e.target);
                  });
                (o.length > 0 ? u(e, o[0]) : !i.current.noIsolation) &&
                  e.cancelable &&
                  e.preventDefault();
              }
            }
          }, []),
          s = r.useCallback(function (e, n, r, o) {
            var a = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: (function (e) {
                for (var t = null; null !== e; )
                  e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                    (e = e.parentNode);
                return t;
              })(r),
            };
            t.current.push(a),
              setTimeout(function () {
                t.current = t.current.filter(function (e) {
                  return e !== a;
                });
              }, 1);
          }, []),
          d = r.useCallback(function (e) {
            (n.current = G(e)), (o.current = void 0);
          }, []),
          f = r.useCallback(function (t) {
            s(t.type, X(t), t.target, u(t, e.lockRef.current));
          }, []),
          p = r.useCallback(function (t) {
            s(t.type, G(t), t.target, u(t, e.lockRef.current));
          }, []);
        r.useEffect(function () {
          return (
            U.push(l),
            e.setCallbacks({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: p,
            }),
            document.addEventListener("wheel", c, P),
            document.addEventListener("touchmove", c, P),
            document.addEventListener("touchstart", d, P),
            function () {
              (U = U.filter(function (e) {
                return e !== l;
              })),
                document.removeEventListener("wheel", c, P),
                document.removeEventListener("touchmove", c, P),
                document.removeEventListener("touchstart", d, P);
            }
          );
        }, []);
        var v = e.removeScrollBar,
          m = e.inert;
        return r.createElement(
          r.Fragment,
          null,
          m
            ? r.createElement(l, {
                styles: "\n  .block-interactivity-"
                  .concat(
                    a,
                    " {pointer-events: none;}\n  .allow-interactivity-"
                  )
                  .concat(a, " {pointer-events: all;}\n"),
              })
            : null,
          v
            ? r.createElement(L.jp, {
                noRelative: e.noRelative,
                gapMode: e.gapMode,
              })
            : null
        );
      });
      var V = r.forwardRef(function (e, t) {
        return r.createElement(
          T,
          (0, _.__assign)({}, e, { ref: t, sideCar: H })
        );
      });
      V.classNames = T.classNames;
      var z = function (e) {
          return "undefined" == typeof document
            ? null
            : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
        },
        J = new WeakMap(),
        Q = new WeakMap(),
        $ = {},
        ee = 0,
        et = function (e) {
          return e && (e.host || et(e.parentNode));
        },
        en = function (e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = et(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          $[n] || ($[n] = new WeakMap());
          var a = $[n],
            l = [],
            i = new Set(),
            u = new Set(o),
            c = function (e) {
              !e || i.has(e) || (i.add(e), c(e.parentNode));
            };
          o.forEach(c);
          var s = function (e) {
            !e ||
              u.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (i.has(e)) s(e);
                else
                  try {
                    var t = e.getAttribute(r),
                      o = null !== t && "false" !== t,
                      u = (J.get(e) || 0) + 1,
                      c = (a.get(e) || 0) + 1;
                    J.set(e, u),
                      a.set(e, c),
                      l.push(e),
                      1 === u && o && Q.set(e, !0),
                      1 === c && e.setAttribute(n, "true"),
                      o || e.setAttribute(r, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            s(t),
            i.clear(),
            ee++,
            function () {
              l.forEach(function (e) {
                var t = J.get(e) - 1,
                  o = a.get(e) - 1;
                J.set(e, t),
                  a.set(e, o),
                  t || (Q.has(e) || e.removeAttribute(r), Q.delete(e)),
                  o || e.removeAttribute(n);
              }),
                --ee ||
                  ((J = new WeakMap()),
                  (J = new WeakMap()),
                  (Q = new WeakMap()),
                  ($ = {}));
            }
          );
        },
        er = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || z(e);
          return o
            ? (r.push.apply(
                r,
                Array.from(o.querySelectorAll("[aria-live], script"))
              ),
              en(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        },
        eo = n(99708),
        ea = "Dialog",
        [el, ei] = (0, l.A)(ea),
        [eu, ec] = el(ea),
        es = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: o,
              defaultOpen: a,
              onOpenChange: l,
              modal: c = !0,
            } = e,
            s = r.useRef(null),
            d = r.useRef(null),
            [p, v] = (0, u.i)({
              prop: o,
              defaultProp: null != a && a,
              onChange: l,
              caller: ea,
            });
          return (0, f.jsx)(eu, {
            scope: t,
            triggerRef: s,
            contentRef: d,
            contentId: (0, i.B)(),
            titleId: (0, i.B)(),
            descriptionId: (0, i.B)(),
            open: p,
            onOpenChange: v,
            onOpenToggle: r.useCallback(() => v((e) => !e), [v]),
            modal: c,
            children: n,
          });
        };
      es.displayName = ea;
      var ed = "DialogTrigger",
        ef = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            l = ec(ed, n),
            i = (0, a.s)(t, l.triggerRef);
          return (0, f.jsx)(s.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l.open,
            "aria-controls": l.contentId,
            "data-state": eI(l.open),
            ...r,
            ref: i,
            onClick: (0, o.m)(e.onClick, l.onOpenToggle),
          });
        });
      ef.displayName = ed;
      var ep = "DialogPortal",
        [ev, em] = el(ep, { forceMount: void 0 }),
        eh = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: o,
              container: a,
            } = e,
            l = ec(ep, t);
          return (0, f.jsx)(ev, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, (e) =>
              (0, f.jsx)(R.C, {
                present: n || l.open,
                children: (0, f.jsx)(C.Z, {
                  asChild: !0,
                  container: a,
                  children: e,
                }),
              })
            ),
          });
        };
      eh.displayName = ep;
      var eg = "DialogOverlay",
        ey = r.forwardRef((e, t) => {
          let n = em(eg, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = ec(eg, e.__scopeDialog);
          return a.modal
            ? (0, f.jsx)(R.C, {
                present: r || a.open,
                children: (0, f.jsx)(eb, { ...o, ref: t }),
              })
            : null;
        });
      ey.displayName = eg;
      var eE = (0, eo.TL)("DialogOverlay.RemoveScroll"),
        eb = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = ec(eg, n);
          return (0, f.jsx)(V, {
            as: eE,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, f.jsx)(s.sG.div, {
              "data-state": eI(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        ew = "DialogContent",
        eC = r.forwardRef((e, t) => {
          let n = em(ew, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = ec(ew, e.__scopeDialog);
          return (0, f.jsx)(R.C, {
            present: r || a.open,
            children: a.modal
              ? (0, f.jsx)(eR, { ...o, ref: t })
              : (0, f.jsx)(eN, { ...o, ref: t }),
          });
        });
      eC.displayName = ew;
      var eR = r.forwardRef((e, t) => {
          let n = ec(ew, e.__scopeDialog),
            l = r.useRef(null),
            i = (0, a.s)(t, n.contentRef, l);
          return (
            r.useEffect(() => {
              let e = l.current;
              if (e) return er(e);
            }, []),
            (0, f.jsx)(eD, {
              ...e,
              ref: i,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null == (t = n.triggerRef.current) || t.focus();
              }),
              onPointerDownOutside: (0, o.m)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: (0, o.m)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        eN = r.forwardRef((e, t) => {
          let n = ec(ew, e.__scopeDialog),
            o = r.useRef(!1),
            a = r.useRef(!1);
          return (0, f.jsx)(eD, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var r, l;
              null == (r = e.onCloseAutoFocus) || r.call(e, t),
                t.defaultPrevented ||
                  (o.current || null == (l = n.triggerRef.current) || l.focus(),
                  t.preventDefault()),
                (o.current = !1),
                (a.current = !1);
            },
            onInteractOutside: (t) => {
              var r, l;
              null == (r = e.onInteractOutside) || r.call(e, t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  "pointerdown" === t.detail.originalEvent.type &&
                    (a.current = !0));
              let i = t.target;
              (null == (l = n.triggerRef.current) ? void 0 : l.contains(i)) &&
                t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  a.current &&
                  t.preventDefault();
            },
          });
        }),
        eD = r.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: o,
              onOpenAutoFocus: l,
              onCloseAutoFocus: i,
              ...u
            } = e,
            s = ec(ew, n),
            d = r.useRef(null),
            p = (0, a.s)(t, d);
          return (
            r.useEffect(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null != (e = n[0]) ? e : D()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null != (t = n[1]) ? t : D()
                ),
                N++,
                () => {
                  1 === N &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    N--;
                }
              );
            }, []),
            (0, f.jsxs)(f.Fragment, {
              children: [
                (0, f.jsx)(h, {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: l,
                  onUnmountAutoFocus: i,
                  children: (0, f.jsx)(c.qW, {
                    role: "dialog",
                    id: s.contentId,
                    "aria-describedby": s.descriptionId,
                    "aria-labelledby": s.titleId,
                    "data-state": eI(s.open),
                    ...u,
                    ref: p,
                    onDismiss: () => s.onOpenChange(!1),
                  }),
                }),
                (0, f.jsxs)(f.Fragment, {
                  children: [
                    (0, f.jsx)(eF, { titleId: s.titleId }),
                    (0, f.jsx)(eP, {
                      contentRef: d,
                      descriptionId: s.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        e_ = "DialogTitle",
        eA = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = ec(e_, n);
          return (0, f.jsx)(s.sG.h2, { id: o.titleId, ...r, ref: t });
        });
      eA.displayName = e_;
      var ek = "DialogDescription",
        ex = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = ec(ek, n);
          return (0, f.jsx)(s.sG.p, { id: o.descriptionId, ...r, ref: t });
        });
      ex.displayName = ek;
      var eS = "DialogClose",
        eT = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            a = ec(eS, n);
          return (0, f.jsx)(s.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.m)(e.onClick, () => a.onOpenChange(!1)),
          });
        });
      function eI(e) {
        return e ? "open" : "closed";
      }
      eT.displayName = eS;
      var eL = "DialogTitleWarning",
        [eM, ej] = (0, l.q)(eL, {
          contentName: ew,
          titleName: e_,
          docsSlug: "dialog",
        }),
        eF = (e) => {
          let { titleId: t } = e,
            n = ej(eL),
            o = "`"
              .concat(n.contentName, "` requires a `")
              .concat(
                n.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                n.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(n.docsSlug);
          return (
            r.useEffect(() => {
              t && (document.getElementById(t) || console.error(o));
            }, [o, t]),
            null
          );
        },
        eP = (e) => {
          let { contentRef: t, descriptionId: n } = e,
            o = ej("DialogDescriptionWarning"),
            a =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                o.contentName,
                "}."
              );
          return (
            r.useEffect(() => {
              var e;
              let r =
                null == (e = t.current)
                  ? void 0
                  : e.getAttribute("aria-describedby");
              n && r && (document.getElementById(n) || console.warn(a));
            }, [a, t, n]),
            null
          );
        },
        eO = es,
        eW = ef,
        eB = eh,
        eK = ey,
        eY = eC,
        eG = eA,
        eX = ex,
        eZ = eT;
    },
  },
]);
