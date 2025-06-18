"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4945],
  {
    671: (t, e, n) => {
      n.d(e, {
        B1: () => C,
        C0: () => p,
        DD: () => i,
        Dz: () => v,
        Jx: () => c,
        LI: () => f,
        PG: () => g,
        RI: () => u,
        Sg: () => m,
        T9: () => l,
        TV: () => y,
        WJ: () => b,
        _3: () => h,
        aD: () => T,
        bV: () => L,
        jk: () => o,
        lP: () => R,
        nI: () => E,
        qE: () => d,
        r_: () => r,
        sq: () => w,
        w7: () => x,
      });
      let r = ["top", "right", "bottom", "left"],
        i = r.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []),
        o = Math.min,
        l = Math.max,
        f = Math.round,
        u = Math.floor,
        c = (t) => ({ x: t, y: t }),
        a = { left: "right", right: "left", bottom: "top", top: "bottom" },
        s = { start: "end", end: "start" };
      function d(t, e, n) {
        return l(t, o(e, n));
      }
      function h(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function p(t) {
        return t.split("-")[0];
      }
      function m(t) {
        return t.split("-")[1];
      }
      function g(t) {
        return "x" === t ? "y" : "x";
      }
      function w(t) {
        return "y" === t ? "height" : "width";
      }
      function y(t) {
        return ["top", "bottom"].includes(p(t)) ? "y" : "x";
      }
      function v(t) {
        return g(y(t));
      }
      function x(t, e, n) {
        void 0 === n && (n = !1);
        let r = m(t),
          i = v(t),
          o = w(i),
          l =
            "x" === i
              ? r === (n ? "end" : "start")
                ? "right"
                : "left"
              : "start" === r
              ? "bottom"
              : "top";
        return e.reference[o] > e.floating[o] && (l = L(l)), [l, L(l)];
      }
      function b(t) {
        let e = L(t);
        return [T(t), e, T(e)];
      }
      function T(t) {
        return t.replace(/start|end/g, (t) => s[t]);
      }
      function R(t, e, n, r) {
        let i = m(t),
          o = (function (t, e, n) {
            let r = ["left", "right"],
              i = ["right", "left"];
            switch (t) {
              case "top":
              case "bottom":
                if (n) return e ? i : r;
                return e ? r : i;
              case "left":
              case "right":
                return e ? ["top", "bottom"] : ["bottom", "top"];
              default:
                return [];
            }
          })(p(t), "start" === n, r);
        return (
          i && ((o = o.map((t) => t + "-" + i)), e && (o = o.concat(o.map(T)))),
          o
        );
      }
      function L(t) {
        return t.replace(/left|right|bottom|top/g, (t) => a[t]);
      }
      function E(t) {
        return "number" != typeof t
          ? { top: 0, right: 0, bottom: 0, left: 0, ...t }
          : { top: t, right: t, bottom: t, left: t };
      }
      function C(t) {
        let { x: e, y: n, width: r, height: i } = t;
        return {
          width: r,
          height: i,
          top: n,
          left: e,
          right: e + r,
          bottom: n + i,
          x: e,
          y: n,
        };
      }
    },
    41093: (t, e, n) => {
      n.d(e, {
        UE: () => V,
        RK: () => A,
        ll: () => k,
        rD: () => I,
        __: () => D,
        UU: () => _,
        jD: () => q,
        mG: () => j,
        ER: () => B,
        cY: () => P,
        iD: () => E,
        BN: () => S,
        Ej: () => O,
      });
      var r = n(671);
      function i(t, e, n) {
        let i,
          { reference: o, floating: l } = t,
          f = (0, r.TV)(e),
          u = (0, r.Dz)(e),
          c = (0, r.sq)(u),
          a = (0, r.C0)(e),
          s = "y" === f,
          d = o.x + o.width / 2 - l.width / 2,
          h = o.y + o.height / 2 - l.height / 2,
          p = o[c] / 2 - l[c] / 2;
        switch (a) {
          case "top":
            i = { x: d, y: o.y - l.height };
            break;
          case "bottom":
            i = { x: d, y: o.y + o.height };
            break;
          case "right":
            i = { x: o.x + o.width, y: h };
            break;
          case "left":
            i = { x: o.x - l.width, y: h };
            break;
          default:
            i = { x: o.x, y: o.y };
        }
        switch ((0, r.Sg)(e)) {
          case "start":
            i[u] -= p * (n && s ? -1 : 1);
            break;
          case "end":
            i[u] += p * (n && s ? -1 : 1);
        }
        return i;
      }
      let o = async (t, e, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: l = [],
            platform: f,
          } = n,
          u = l.filter(Boolean),
          c = await (null == f.isRTL ? void 0 : f.isRTL(e)),
          a = await f.getElementRects({
            reference: t,
            floating: e,
            strategy: o,
          }),
          { x: s, y: d } = i(a, r, c),
          h = r,
          p = {},
          m = 0;
        for (let n = 0; n < u.length; n++) {
          let { name: l, fn: g } = u[n],
            {
              x: w,
              y: y,
              data: v,
              reset: x,
            } = await g({
              x: s,
              y: d,
              initialPlacement: r,
              placement: h,
              strategy: o,
              middlewareData: p,
              rects: a,
              platform: f,
              elements: { reference: t, floating: e },
            });
          (s = null != w ? w : s),
            (d = null != y ? y : d),
            (p = { ...p, [l]: { ...p[l], ...v } }),
            x &&
              m <= 50 &&
              (m++,
              "object" == typeof x &&
                (x.placement && (h = x.placement),
                x.rects &&
                  (a =
                    !0 === x.rects
                      ? await f.getElementRects({
                          reference: t,
                          floating: e,
                          strategy: o,
                        })
                      : x.rects),
                ({ x: s, y: d } = i(a, h, c))),
              (n = -1));
        }
        return { x: s, y: d, placement: h, strategy: o, middlewareData: p };
      };
      async function l(t, e) {
        var n;
        void 0 === e && (e = {});
        let { x: i, y: o, platform: l, rects: f, elements: u, strategy: c } = t,
          {
            boundary: a = "clippingAncestors",
            rootBoundary: s = "viewport",
            elementContext: d = "floating",
            altBoundary: h = !1,
            padding: p = 0,
          } = (0, r._3)(e, t),
          m = (0, r.nI)(p),
          g = u[h ? ("floating" === d ? "reference" : "floating") : d],
          w = (0, r.B1)(
            await l.getClippingRect({
              element:
                null ==
                  (n = await (null == l.isElement ? void 0 : l.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == l.getDocumentElement
                      ? void 0
                      : l.getDocumentElement(u.floating))),
              boundary: a,
              rootBoundary: s,
              strategy: c,
            })
          ),
          y =
            "floating" === d
              ? {
                  x: i,
                  y: o,
                  width: f.floating.width,
                  height: f.floating.height,
                }
              : f.reference,
          v = await (null == l.getOffsetParent
            ? void 0
            : l.getOffsetParent(u.floating)),
          x = ((await (null == l.isElement ? void 0 : l.isElement(v))) &&
            (await (null == l.getScale ? void 0 : l.getScale(v)))) || {
            x: 1,
            y: 1,
          },
          b = (0, r.B1)(
            l.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: u,
                  rect: y,
                  offsetParent: v,
                  strategy: c,
                })
              : y
          );
        return {
          top: (w.top - b.top + m.top) / x.y,
          bottom: (b.bottom - w.bottom + m.bottom) / x.y,
          left: (w.left - b.left + m.left) / x.x,
          right: (b.right - w.right + m.right) / x.x,
        };
      }
      function f(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width,
        };
      }
      function u(t) {
        return r.r_.some((e) => t[e] >= 0);
      }
      function c(t) {
        let e = (0, r.jk)(...t.map((t) => t.left)),
          n = (0, r.jk)(...t.map((t) => t.top));
        return {
          x: e,
          y: n,
          width: (0, r.T9)(...t.map((t) => t.right)) - e,
          height: (0, r.T9)(...t.map((t) => t.bottom)) - n,
        };
      }
      async function a(t, e) {
        let { placement: n, platform: i, elements: o } = t,
          l = await (null == i.isRTL ? void 0 : i.isRTL(o.floating)),
          f = (0, r.C0)(n),
          u = (0, r.Sg)(n),
          c = "y" === (0, r.TV)(n),
          a = ["left", "top"].includes(f) ? -1 : 1,
          s = l && c ? -1 : 1,
          d = (0, r._3)(e, t),
          {
            mainAxis: h,
            crossAxis: p,
            alignmentAxis: m,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis,
              };
        return (
          u && "number" == typeof m && (p = "end" === u ? -1 * m : m),
          c ? { x: p * s, y: h * a } : { x: h * a, y: p * s }
        );
      }
      var s = n(86301);
      function d(t) {
        let e = (0, s.L9)(t),
          n = parseFloat(e.width) || 0,
          i = parseFloat(e.height) || 0,
          o = (0, s.sb)(t),
          l = o ? t.offsetWidth : n,
          f = o ? t.offsetHeight : i,
          u = (0, r.LI)(n) !== l || (0, r.LI)(i) !== f;
        return u && ((n = l), (i = f)), { width: n, height: i, $: u };
      }
      function h(t) {
        return (0, s.vq)(t) ? t : t.contextElement;
      }
      function p(t) {
        let e = h(t);
        if (!(0, s.sb)(e)) return (0, r.Jx)(1);
        let n = e.getBoundingClientRect(),
          { width: i, height: o, $: l } = d(e),
          f = (l ? (0, r.LI)(n.width) : n.width) / i,
          u = (l ? (0, r.LI)(n.height) : n.height) / o;
        return (
          (f && Number.isFinite(f)) || (f = 1),
          (u && Number.isFinite(u)) || (u = 1),
          { x: f, y: u }
        );
      }
      let m = (0, r.Jx)(0);
      function g(t) {
        let e = (0, s.zk)(t);
        return (0, s.Tc)() && e.visualViewport
          ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop }
          : m;
      }
      function w(t, e, n, i) {
        var o;
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        let l = t.getBoundingClientRect(),
          f = h(t),
          u = (0, r.Jx)(1);
        e && (i ? (0, s.vq)(i) && (u = p(i)) : (u = p(t)));
        let c = (void 0 === (o = n) && (o = !1),
          i && (!o || i === (0, s.zk)(f)) && o)
            ? g(f)
            : (0, r.Jx)(0),
          a = (l.left + c.x) / u.x,
          d = (l.top + c.y) / u.y,
          m = l.width / u.x,
          w = l.height / u.y;
        if (f) {
          let t = (0, s.zk)(f),
            e = i && (0, s.vq)(i) ? (0, s.zk)(i) : i,
            n = t,
            r = (0, s._m)(n);
          for (; r && i && e !== n; ) {
            let t = p(r),
              e = r.getBoundingClientRect(),
              i = (0, s.L9)(r),
              o = e.left + (r.clientLeft + parseFloat(i.paddingLeft)) * t.x,
              l = e.top + (r.clientTop + parseFloat(i.paddingTop)) * t.y;
            (a *= t.x),
              (d *= t.y),
              (m *= t.x),
              (w *= t.y),
              (a += o),
              (d += l),
              (n = (0, s.zk)(r)),
              (r = (0, s._m)(n));
          }
        }
        return (0, r.B1)({ width: m, height: w, x: a, y: d });
      }
      function y(t, e) {
        let n = (0, s.CP)(t).scrollLeft;
        return e ? e.left + n : w((0, s.ep)(t)).left + n;
      }
      function v(t, e, n) {
        void 0 === n && (n = !1);
        let r = t.getBoundingClientRect();
        return {
          x: r.left + e.scrollLeft - (n ? 0 : y(t, r)),
          y: r.top + e.scrollTop,
        };
      }
      function x(t, e, n) {
        let i;
        if ("viewport" === e)
          i = (function (t, e) {
            let n = (0, s.zk)(t),
              r = (0, s.ep)(t),
              i = n.visualViewport,
              o = r.clientWidth,
              l = r.clientHeight,
              f = 0,
              u = 0;
            if (i) {
              (o = i.width), (l = i.height);
              let t = (0, s.Tc)();
              (!t || (t && "fixed" === e)) &&
                ((f = i.offsetLeft), (u = i.offsetTop));
            }
            return { width: o, height: l, x: f, y: u };
          })(t, n);
        else if ("document" === e)
          i = (function (t) {
            let e = (0, s.ep)(t),
              n = (0, s.CP)(t),
              i = t.ownerDocument.body,
              o = (0, r.T9)(
                e.scrollWidth,
                e.clientWidth,
                i.scrollWidth,
                i.clientWidth
              ),
              l = (0, r.T9)(
                e.scrollHeight,
                e.clientHeight,
                i.scrollHeight,
                i.clientHeight
              ),
              f = -n.scrollLeft + y(t),
              u = -n.scrollTop;
            return (
              "rtl" === (0, s.L9)(i).direction &&
                (f += (0, r.T9)(e.clientWidth, i.clientWidth) - o),
              { width: o, height: l, x: f, y: u }
            );
          })((0, s.ep)(t));
        else if ((0, s.vq)(e))
          i = (function (t, e) {
            let n = w(t, !0, "fixed" === e),
              i = n.top + t.clientTop,
              o = n.left + t.clientLeft,
              l = (0, s.sb)(t) ? p(t) : (0, r.Jx)(1),
              f = t.clientWidth * l.x,
              u = t.clientHeight * l.y;
            return { width: f, height: u, x: o * l.x, y: i * l.y };
          })(e, n);
        else {
          let n = g(t);
          i = { x: e.x - n.x, y: e.y - n.y, width: e.width, height: e.height };
        }
        return (0, r.B1)(i);
      }
      function b(t) {
        return "static" === (0, s.L9)(t).position;
      }
      function T(t, e) {
        if (!(0, s.sb)(t) || "fixed" === (0, s.L9)(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return (0, s.ep)(t) === n && (n = n.ownerDocument.body), n;
      }
      function R(t, e) {
        let n = (0, s.zk)(t);
        if ((0, s.Tf)(t)) return n;
        if (!(0, s.sb)(t)) {
          let e = (0, s.$4)(t);
          for (; e && !(0, s.eu)(e); ) {
            if ((0, s.vq)(e) && !b(e)) return e;
            e = (0, s.$4)(e);
          }
          return n;
        }
        let r = T(t, e);
        for (; r && (0, s.Lv)(r) && b(r); ) r = T(r, e);
        return r && (0, s.eu)(r) && b(r) && !(0, s.sQ)(r)
          ? n
          : r || (0, s.gJ)(t) || n;
      }
      let L = async function (t) {
          let e = this.getOffsetParent || R,
            n = this.getDimensions,
            i = await n(t.floating);
          return {
            reference: (function (t, e, n) {
              let i = (0, s.sb)(e),
                o = (0, s.ep)(e),
                l = "fixed" === n,
                f = w(t, !0, l, e),
                u = { scrollLeft: 0, scrollTop: 0 },
                c = (0, r.Jx)(0);
              if (i || (!i && !l))
                if (
                  (("body" !== (0, s.mq)(e) || (0, s.ZU)(o)) &&
                    (u = (0, s.CP)(e)),
                  i)
                ) {
                  let t = w(e, !0, l, e);
                  (c.x = t.x + e.clientLeft), (c.y = t.y + e.clientTop);
                } else o && (c.x = y(o));
              l && !i && o && (c.x = y(o));
              let a = !o || i || l ? (0, r.Jx)(0) : v(o, u);
              return {
                x: f.left + u.scrollLeft - c.x - a.x,
                y: f.top + u.scrollTop - c.y - a.y,
                width: f.width,
                height: f.height,
              };
            })(t.reference, await e(t.floating), t.strategy),
            floating: { x: 0, y: 0, width: i.width, height: i.height },
          };
        },
        E = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
            let { elements: e, rect: n, offsetParent: i, strategy: o } = t,
              l = "fixed" === o,
              f = (0, s.ep)(i),
              u = !!e && (0, s.Tf)(e.floating);
            if (i === f || (u && l)) return n;
            let c = { scrollLeft: 0, scrollTop: 0 },
              a = (0, r.Jx)(1),
              d = (0, r.Jx)(0),
              h = (0, s.sb)(i);
            if (
              (h || (!h && !l)) &&
              (("body" !== (0, s.mq)(i) || (0, s.ZU)(f)) && (c = (0, s.CP)(i)),
              (0, s.sb)(i))
            ) {
              let t = w(i);
              (a = p(i)), (d.x = t.x + i.clientLeft), (d.y = t.y + i.clientTop);
            }
            let m = !f || h || l ? (0, r.Jx)(0) : v(f, c, !0);
            return {
              width: n.width * a.x,
              height: n.height * a.y,
              x: n.x * a.x - c.scrollLeft * a.x + d.x + m.x,
              y: n.y * a.y - c.scrollTop * a.y + d.y + m.y,
            };
          },
          getDocumentElement: s.ep,
          getClippingRect: function (t) {
            let { element: e, boundary: n, rootBoundary: i, strategy: o } = t,
              l = [
                ...("clippingAncestors" === n
                  ? (0, s.Tf)(e)
                    ? []
                    : (function (t, e) {
                        let n = e.get(t);
                        if (n) return n;
                        let r = (0, s.v9)(t, [], !1).filter(
                            (t) => (0, s.vq)(t) && "body" !== (0, s.mq)(t)
                          ),
                          i = null,
                          o = "fixed" === (0, s.L9)(t).position,
                          l = o ? (0, s.$4)(t) : t;
                        for (; (0, s.vq)(l) && !(0, s.eu)(l); ) {
                          let e = (0, s.L9)(l),
                            n = (0, s.sQ)(l);
                          n || "fixed" !== e.position || (i = null),
                            (
                              o
                                ? !n && !i
                                : (!n &&
                                    "static" === e.position &&
                                    !!i &&
                                    ["absolute", "fixed"].includes(
                                      i.position
                                    )) ||
                                  ((0, s.ZU)(l) &&
                                    !n &&
                                    (function t(e, n) {
                                      let r = (0, s.$4)(e);
                                      return (
                                        !(
                                          r === n ||
                                          !(0, s.vq)(r) ||
                                          (0, s.eu)(r)
                                        ) &&
                                        ("fixed" === (0, s.L9)(r).position ||
                                          t(r, n))
                                      );
                                    })(t, l))
                            )
                              ? (r = r.filter((t) => t !== l))
                              : (i = e),
                            (l = (0, s.$4)(l));
                        }
                        return e.set(t, r), r;
                      })(e, this._c)
                  : [].concat(n)),
                i,
              ],
              f = l[0],
              u = l.reduce((t, n) => {
                let i = x(e, n, o);
                return (
                  (t.top = (0, r.T9)(i.top, t.top)),
                  (t.right = (0, r.jk)(i.right, t.right)),
                  (t.bottom = (0, r.jk)(i.bottom, t.bottom)),
                  (t.left = (0, r.T9)(i.left, t.left)),
                  t
                );
              }, x(e, f, o));
            return {
              width: u.right - u.left,
              height: u.bottom - u.top,
              x: u.left,
              y: u.top,
            };
          },
          getOffsetParent: R,
          getElementRects: L,
          getClientRects: function (t) {
            return Array.from(t.getClientRects());
          },
          getDimensions: function (t) {
            let { width: e, height: n } = d(t);
            return { width: e, height: n };
          },
          getScale: p,
          isElement: s.vq,
          isRTL: function (t) {
            return "rtl" === (0, s.L9)(t).direction;
          },
        };
      function C(t, e) {
        return (
          t.x === e.x &&
          t.y === e.y &&
          t.width === e.width &&
          t.height === e.height
        );
      }
      function k(t, e, n, i) {
        let o;
        void 0 === i && (i = {});
        let {
            ancestorScroll: l = !0,
            ancestorResize: f = !0,
            elementResize: u = "function" == typeof ResizeObserver,
            layoutShift: c = "function" == typeof IntersectionObserver,
            animationFrame: a = !1,
          } = i,
          d = h(t),
          p = l || f ? [...(d ? (0, s.v9)(d) : []), ...(0, s.v9)(e)] : [];
        p.forEach((t) => {
          l && t.addEventListener("scroll", n, { passive: !0 }),
            f && t.addEventListener("resize", n);
        });
        let m =
            d && c
              ? (function (t, e) {
                  let n,
                    i = null,
                    o = (0, s.ep)(t);
                  function l() {
                    var t;
                    clearTimeout(n),
                      null == (t = i) || t.disconnect(),
                      (i = null);
                  }
                  return (
                    !(function f(u, c) {
                      void 0 === u && (u = !1), void 0 === c && (c = 1), l();
                      let a = t.getBoundingClientRect(),
                        { left: s, top: d, width: h, height: p } = a;
                      if ((u || e(), !h || !p)) return;
                      let m = (0, r.RI)(d),
                        g = (0, r.RI)(o.clientWidth - (s + h)),
                        w = {
                          rootMargin:
                            -m +
                            "px " +
                            -g +
                            "px " +
                            -(0, r.RI)(o.clientHeight - (d + p)) +
                            "px " +
                            -(0, r.RI)(s) +
                            "px",
                          threshold: (0, r.T9)(0, (0, r.jk)(1, c)) || 1,
                        },
                        y = !0;
                      function v(e) {
                        let r = e[0].intersectionRatio;
                        if (r !== c) {
                          if (!y) return f();
                          r
                            ? f(!1, r)
                            : (n = setTimeout(() => {
                                f(!1, 1e-7);
                              }, 1e3));
                        }
                        1 !== r || C(a, t.getBoundingClientRect()) || f(),
                          (y = !1);
                      }
                      try {
                        i = new IntersectionObserver(v, {
                          ...w,
                          root: o.ownerDocument,
                        });
                      } catch (t) {
                        i = new IntersectionObserver(v, w);
                      }
                      i.observe(t);
                    })(!0),
                    l
                  );
                })(d, n)
              : null,
          g = -1,
          y = null;
        u &&
          ((y = new ResizeObserver((t) => {
            let [r] = t;
            r &&
              r.target === d &&
              y &&
              (y.unobserve(e),
              cancelAnimationFrame(g),
              (g = requestAnimationFrame(() => {
                var t;
                null == (t = y) || t.observe(e);
              }))),
              n();
          })),
          d && !a && y.observe(d),
          y.observe(e));
        let v = a ? w(t) : null;
        return (
          a &&
            (function e() {
              let r = w(t);
              v && !C(v, r) && n(), (v = r), (o = requestAnimationFrame(e));
            })(),
          n(),
          () => {
            var t;
            p.forEach((t) => {
              l && t.removeEventListener("scroll", n),
                f && t.removeEventListener("resize", n);
            }),
              null == m || m(),
              null == (t = y) || t.disconnect(),
              (y = null),
              a && cancelAnimationFrame(o);
          }
        );
      }
      let D = l,
        P = function (t) {
          return (
            void 0 === t && (t = 0),
            {
              name: "offset",
              options: t,
              async fn(e) {
                var n, r;
                let { x: i, y: o, placement: l, middlewareData: f } = e,
                  u = await a(e, t);
                return l === (null == (n = f.offset) ? void 0 : n.placement) &&
                  null != (r = f.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: i + u.x, y: o + u.y, data: { ...u, placement: l } };
              },
            }
          );
        },
        A = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "autoPlacement",
              options: t,
              async fn(e) {
                var n, i, o, f;
                let {
                    rects: u,
                    middlewareData: c,
                    placement: a,
                    platform: s,
                    elements: d,
                  } = e,
                  {
                    crossAxis: h = !1,
                    alignment: p,
                    allowedPlacements: m = r.DD,
                    autoAlignment: g = !0,
                    ...w
                  } = (0, r._3)(t, e),
                  y =
                    void 0 !== p || m === r.DD
                      ? ((f = p || null)
                          ? [
                              ...m.filter((t) => (0, r.Sg)(t) === f),
                              ...m.filter((t) => (0, r.Sg)(t) !== f),
                            ]
                          : m.filter((t) => (0, r.C0)(t) === t)
                        ).filter(
                          (t) =>
                            !f ||
                            (0, r.Sg)(t) === f ||
                            (!!g && (0, r.aD)(t) !== t)
                        )
                      : m,
                  v = await l(e, w),
                  x = (null == (n = c.autoPlacement) ? void 0 : n.index) || 0,
                  b = y[x];
                if (null == b) return {};
                let T = (0, r.w7)(
                  b,
                  u,
                  await (null == s.isRTL ? void 0 : s.isRTL(d.floating))
                );
                if (a !== b) return { reset: { placement: y[0] } };
                let R = [v[(0, r.C0)(b)], v[T[0]], v[T[1]]],
                  L = [
                    ...((null == (i = c.autoPlacement)
                      ? void 0
                      : i.overflows) || []),
                    { placement: b, overflows: R },
                  ],
                  E = y[x + 1];
                if (E)
                  return {
                    data: { index: x + 1, overflows: L },
                    reset: { placement: E },
                  };
                let C = L.map((t) => {
                    let e = (0, r.Sg)(t.placement);
                    return [
                      t.placement,
                      e && h
                        ? t.overflows.slice(0, 2).reduce((t, e) => t + e, 0)
                        : t.overflows[0],
                      t.overflows,
                    ];
                  }).sort((t, e) => t[1] - e[1]),
                  k =
                    (null ==
                    (o = C.filter((t) =>
                      t[2]
                        .slice(0, (0, r.Sg)(t[0]) ? 2 : 3)
                        .every((t) => t <= 0)
                    )[0])
                      ? void 0
                      : o[0]) || C[0][0];
                return k !== a
                  ? {
                      data: { index: x + 1, overflows: L },
                      reset: { placement: k },
                    }
                  : {};
              },
            }
          );
        },
        S = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "shift",
              options: t,
              async fn(e) {
                let { x: n, y: i, placement: o } = e,
                  {
                    mainAxis: f = !0,
                    crossAxis: u = !1,
                    limiter: c = {
                      fn: (t) => {
                        let { x: e, y: n } = t;
                        return { x: e, y: n };
                      },
                    },
                    ...a
                  } = (0, r._3)(t, e),
                  s = { x: n, y: i },
                  d = await l(e, a),
                  h = (0, r.TV)((0, r.C0)(o)),
                  p = (0, r.PG)(h),
                  m = s[p],
                  g = s[h];
                if (f) {
                  let t = "y" === p ? "top" : "left",
                    e = "y" === p ? "bottom" : "right",
                    n = m + d[t],
                    i = m - d[e];
                  m = (0, r.qE)(n, m, i);
                }
                if (u) {
                  let t = "y" === h ? "top" : "left",
                    e = "y" === h ? "bottom" : "right",
                    n = g + d[t],
                    i = g - d[e];
                  g = (0, r.qE)(n, g, i);
                }
                let w = c.fn({ ...e, [p]: m, [h]: g });
                return {
                  ...w,
                  data: { x: w.x - n, y: w.y - i, enabled: { [p]: f, [h]: u } },
                };
              },
            }
          );
        },
        _ = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "flip",
              options: t,
              async fn(e) {
                var n, i, o, f, u;
                let {
                    placement: c,
                    middlewareData: a,
                    rects: s,
                    initialPlacement: d,
                    platform: h,
                    elements: p,
                  } = e,
                  {
                    mainAxis: m = !0,
                    crossAxis: g = !0,
                    fallbackPlacements: w,
                    fallbackStrategy: y = "bestFit",
                    fallbackAxisSideDirection: v = "none",
                    flipAlignment: x = !0,
                    ...b
                  } = (0, r._3)(t, e);
                if (null != (n = a.arrow) && n.alignmentOffset) return {};
                let T = (0, r.C0)(c),
                  R = (0, r.TV)(d),
                  L = (0, r.C0)(d) === d,
                  E = await (null == h.isRTL ? void 0 : h.isRTL(p.floating)),
                  C = w || (L || !x ? [(0, r.bV)(d)] : (0, r.WJ)(d)),
                  k = "none" !== v;
                !w && k && C.push(...(0, r.lP)(d, x, v, E));
                let D = [d, ...C],
                  P = await l(e, b),
                  A = [],
                  S = (null == (i = a.flip) ? void 0 : i.overflows) || [];
                if ((m && A.push(P[T]), g)) {
                  let t = (0, r.w7)(c, s, E);
                  A.push(P[t[0]], P[t[1]]);
                }
                if (
                  ((S = [...S, { placement: c, overflows: A }]),
                  !A.every((t) => t <= 0))
                ) {
                  let t = ((null == (o = a.flip) ? void 0 : o.index) || 0) + 1,
                    e = D[t];
                  if (
                    e &&
                    ("alignment" !== g ||
                      R === (0, r.TV)(e) ||
                      S.every(
                        (t) =>
                          t.overflows[0] > 0 && (0, r.TV)(t.placement) === R
                      ))
                  )
                    return {
                      data: { index: t, overflows: S },
                      reset: { placement: e },
                    };
                  let n =
                    null ==
                    (f = S.filter((t) => t.overflows[0] <= 0).sort(
                      (t, e) => t.overflows[1] - e.overflows[1]
                    )[0])
                      ? void 0
                      : f.placement;
                  if (!n)
                    switch (y) {
                      case "bestFit": {
                        let t =
                          null ==
                          (u = S.filter((t) => {
                            if (k) {
                              let e = (0, r.TV)(t.placement);
                              return e === R || "y" === e;
                            }
                            return !0;
                          })
                            .map((t) => [
                              t.placement,
                              t.overflows
                                .filter((t) => t > 0)
                                .reduce((t, e) => t + e, 0),
                            ])
                            .sort((t, e) => t[1] - e[1])[0])
                            ? void 0
                            : u[0];
                        t && (n = t);
                        break;
                      }
                      case "initialPlacement":
                        n = d;
                    }
                  if (c !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        },
        O = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "size",
              options: t,
              async fn(e) {
                var n, i;
                let o,
                  f,
                  { placement: u, rects: c, platform: a, elements: s } = e,
                  { apply: d = () => {}, ...h } = (0, r._3)(t, e),
                  p = await l(e, h),
                  m = (0, r.C0)(u),
                  g = (0, r.Sg)(u),
                  w = "y" === (0, r.TV)(u),
                  { width: y, height: v } = c.floating;
                "top" === m || "bottom" === m
                  ? ((o = m),
                    (f =
                      g ===
                      ((await (null == a.isRTL ? void 0 : a.isRTL(s.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((f = m), (o = "end" === g ? "top" : "bottom"));
                let x = v - p.top - p.bottom,
                  b = y - p.left - p.right,
                  T = (0, r.jk)(v - p[o], x),
                  R = (0, r.jk)(y - p[f], b),
                  L = !e.middlewareData.shift,
                  E = T,
                  C = R;
                if (
                  (null != (n = e.middlewareData.shift) &&
                    n.enabled.x &&
                    (C = b),
                  null != (i = e.middlewareData.shift) &&
                    i.enabled.y &&
                    (E = x),
                  L && !g)
                ) {
                  let t = (0, r.T9)(p.left, 0),
                    e = (0, r.T9)(p.right, 0),
                    n = (0, r.T9)(p.top, 0),
                    i = (0, r.T9)(p.bottom, 0);
                  w
                    ? (C =
                        y -
                        2 *
                          (0 !== t || 0 !== e
                            ? t + e
                            : (0, r.T9)(p.left, p.right)))
                    : (E =
                        v -
                        2 *
                          (0 !== n || 0 !== i
                            ? n + i
                            : (0, r.T9)(p.top, p.bottom)));
                }
                await d({ ...e, availableWidth: C, availableHeight: E });
                let k = await a.getDimensions(s.floating);
                return y !== k.width || v !== k.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        },
        q = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "hide",
              options: t,
              async fn(e) {
                let { rects: n } = e,
                  { strategy: i = "referenceHidden", ...o } = (0, r._3)(t, e);
                switch (i) {
                  case "referenceHidden": {
                    let t = f(
                      await l(e, { ...o, elementContext: "reference" }),
                      n.reference
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: t,
                        referenceHidden: u(t),
                      },
                    };
                  }
                  case "escaped": {
                    let t = f(
                      await l(e, { ...o, altBoundary: !0 }),
                      n.floating
                    );
                    return { data: { escapedOffsets: t, escaped: u(t) } };
                  }
                  default:
                    return {};
                }
              },
            }
          );
        },
        V = (t) => ({
          name: "arrow",
          options: t,
          async fn(e) {
            let {
                x: n,
                y: i,
                placement: o,
                rects: l,
                platform: f,
                elements: u,
                middlewareData: c,
              } = e,
              { element: a, padding: s = 0 } = (0, r._3)(t, e) || {};
            if (null == a) return {};
            let d = (0, r.nI)(s),
              h = { x: n, y: i },
              p = (0, r.Dz)(o),
              m = (0, r.sq)(p),
              g = await f.getDimensions(a),
              w = "y" === p,
              y = w ? "clientHeight" : "clientWidth",
              v = l.reference[m] + l.reference[p] - h[p] - l.floating[m],
              x = h[p] - l.reference[p],
              b = await (null == f.getOffsetParent
                ? void 0
                : f.getOffsetParent(a)),
              T = b ? b[y] : 0;
            (T && (await (null == f.isElement ? void 0 : f.isElement(b)))) ||
              (T = u.floating[y] || l.floating[m]);
            let R = T / 2 - g[m] / 2 - 1,
              L = (0, r.jk)(d[w ? "top" : "left"], R),
              E = (0, r.jk)(d[w ? "bottom" : "right"], R),
              C = T - g[m] - E,
              k = T / 2 - g[m] / 2 + (v / 2 - x / 2),
              D = (0, r.qE)(L, k, C),
              P =
                !c.arrow &&
                null != (0, r.Sg)(o) &&
                k !== D &&
                l.reference[m] / 2 - (k < L ? L : E) - g[m] / 2 < 0,
              A = P ? (k < L ? k - L : k - C) : 0;
            return {
              [p]: h[p] + A,
              data: {
                [p]: D,
                centerOffset: k - D - A,
                ...(P && { alignmentOffset: A }),
              },
              reset: P,
            };
          },
        }),
        j = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "inline",
              options: t,
              async fn(e) {
                let {
                    placement: n,
                    elements: i,
                    rects: o,
                    platform: l,
                    strategy: f,
                  } = e,
                  { padding: u = 2, x: a, y: s } = (0, r._3)(t, e),
                  d = Array.from(
                    (await (null == l.getClientRects
                      ? void 0
                      : l.getClientRects(i.reference))) || []
                  ),
                  h = (function (t) {
                    let e = t.slice().sort((t, e) => t.y - e.y),
                      n = [],
                      i = null;
                    for (let t = 0; t < e.length; t++) {
                      let r = e[t];
                      !i || r.y - i.y > i.height / 2
                        ? n.push([r])
                        : n[n.length - 1].push(r),
                        (i = r);
                    }
                    return n.map((t) => (0, r.B1)(c(t)));
                  })(d),
                  p = (0, r.B1)(c(d)),
                  m = (0, r.nI)(u),
                  g = await l.getElementRects({
                    reference: {
                      getBoundingClientRect: function () {
                        if (
                          2 === h.length &&
                          h[0].left > h[1].right &&
                          null != a &&
                          null != s
                        )
                          return (
                            h.find(
                              (t) =>
                                a > t.left - m.left &&
                                a < t.right + m.right &&
                                s > t.top - m.top &&
                                s < t.bottom + m.bottom
                            ) || p
                          );
                        if (h.length >= 2) {
                          if ("y" === (0, r.TV)(n)) {
                            let t = h[0],
                              e = h[h.length - 1],
                              i = "top" === (0, r.C0)(n),
                              o = t.top,
                              l = e.bottom,
                              f = i ? t.left : e.left,
                              u = i ? t.right : e.right;
                            return {
                              top: o,
                              bottom: l,
                              left: f,
                              right: u,
                              width: u - f,
                              height: l - o,
                              x: f,
                              y: o,
                            };
                          }
                          let t = "left" === (0, r.C0)(n),
                            e = (0, r.T9)(...h.map((t) => t.right)),
                            i = (0, r.jk)(...h.map((t) => t.left)),
                            o = h.filter((n) =>
                              t ? n.left === i : n.right === e
                            ),
                            l = o[0].top,
                            f = o[o.length - 1].bottom;
                          return {
                            top: l,
                            bottom: f,
                            left: i,
                            right: e,
                            width: e - i,
                            height: f - l,
                            x: i,
                            y: l,
                          };
                        }
                        return p;
                      },
                    },
                    floating: i.floating,
                    strategy: f,
                  });
                return o.reference.x !== g.reference.x ||
                  o.reference.y !== g.reference.y ||
                  o.reference.width !== g.reference.width ||
                  o.reference.height !== g.reference.height
                  ? { reset: { rects: g } }
                  : {};
              },
            }
          );
        },
        B = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              options: t,
              fn(e) {
                let {
                    x: n,
                    y: i,
                    placement: o,
                    rects: l,
                    middlewareData: f,
                  } = e,
                  {
                    offset: u = 0,
                    mainAxis: c = !0,
                    crossAxis: a = !0,
                  } = (0, r._3)(t, e),
                  s = { x: n, y: i },
                  d = (0, r.TV)(o),
                  h = (0, r.PG)(d),
                  p = s[h],
                  m = s[d],
                  g = (0, r._3)(u, e),
                  w =
                    "number" == typeof g
                      ? { mainAxis: g, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...g };
                if (c) {
                  let t = "y" === h ? "height" : "width",
                    e = l.reference[h] - l.floating[t] + w.mainAxis,
                    n = l.reference[h] + l.reference[t] - w.mainAxis;
                  p < e ? (p = e) : p > n && (p = n);
                }
                if (a) {
                  var y, v;
                  let t = "y" === h ? "width" : "height",
                    e = ["top", "left"].includes((0, r.C0)(o)),
                    n =
                      l.reference[d] -
                      l.floating[t] +
                      ((e && (null == (y = f.offset) ? void 0 : y[d])) || 0) +
                      (e ? 0 : w.crossAxis),
                    i =
                      l.reference[d] +
                      l.reference[t] +
                      (e ? 0 : (null == (v = f.offset) ? void 0 : v[d]) || 0) -
                      (e ? w.crossAxis : 0);
                  m < n ? (m = n) : m > i && (m = i);
                }
                return { [h]: p, [d]: m };
              },
            }
          );
        },
        I = (t, e, n) => {
          let r = new Map(),
            i = { platform: E, ...n },
            l = { ...i.platform, _c: r };
          return o(t, e, { ...i, platform: l });
        };
    },
    84945: (t, e, n) => {
      n.d(e, {
        BN: () => p,
        ER: () => m,
        Ej: () => w,
        RK: () => y,
        UE: () => b,
        UU: () => g,
        cY: () => h,
        jD: () => v,
        mG: () => x,
        we: () => s,
      });
      var r = n(41093),
        i = n(12115),
        o = n(47650),
        l = "undefined" != typeof document ? i.useLayoutEffect : function () {};
      function f(t, e) {
        let n, r, i;
        if (t === e) return !0;
        if (typeof t != typeof e) return !1;
        if ("function" == typeof t && t.toString() === e.toString()) return !0;
        if (t && e && "object" == typeof t) {
          if (Array.isArray(t)) {
            if ((n = t.length) !== e.length) return !1;
            for (r = n; 0 != r--; ) if (!f(t[r], e[r])) return !1;
            return !0;
          }
          if ((n = (i = Object.keys(t)).length) !== Object.keys(e).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(e, i[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = i[r];
            if (("_owner" !== n || !t.$$typeof) && !f(t[n], e[n])) return !1;
          }
          return !0;
        }
        return t != t && e != e;
      }
      function u(t) {
        return "undefined" == typeof window
          ? 1
          : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function c(t, e) {
        let n = u(t);
        return Math.round(e * n) / n;
      }
      function a(t) {
        let e = i.useRef(t);
        return (
          l(() => {
            e.current = t;
          }),
          e
        );
      }
      function s(t) {
        void 0 === t && (t = {});
        let {
            placement: e = "bottom",
            strategy: n = "absolute",
            middleware: s = [],
            platform: d,
            elements: { reference: h, floating: p } = {},
            transform: m = !0,
            whileElementsMounted: g,
            open: w,
          } = t,
          [y, v] = i.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: e,
            middlewareData: {},
            isPositioned: !1,
          }),
          [x, b] = i.useState(s);
        f(x, s) || b(s);
        let [T, R] = i.useState(null),
          [L, E] = i.useState(null),
          C = i.useCallback((t) => {
            t !== A.current && ((A.current = t), R(t));
          }, []),
          k = i.useCallback((t) => {
            t !== S.current && ((S.current = t), E(t));
          }, []),
          D = h || T,
          P = p || L,
          A = i.useRef(null),
          S = i.useRef(null),
          _ = i.useRef(y),
          O = null != g,
          q = a(g),
          V = a(d),
          j = a(w),
          B = i.useCallback(() => {
            if (!A.current || !S.current) return;
            let t = { placement: e, strategy: n, middleware: x };
            V.current && (t.platform = V.current),
              (0, r.rD)(A.current, S.current, t).then((t) => {
                let e = { ...t, isPositioned: !1 !== j.current };
                I.current &&
                  !f(_.current, e) &&
                  ((_.current = e),
                  o.flushSync(() => {
                    v(e);
                  }));
              });
          }, [x, e, n, V, j]);
        l(() => {
          !1 === w &&
            _.current.isPositioned &&
            ((_.current.isPositioned = !1),
            v((t) => ({ ...t, isPositioned: !1 })));
        }, [w]);
        let I = i.useRef(!1);
        l(
          () => (
            (I.current = !0),
            () => {
              I.current = !1;
            }
          ),
          []
        ),
          l(() => {
            if ((D && (A.current = D), P && (S.current = P), D && P)) {
              if (q.current) return q.current(D, P, B);
              B();
            }
          }, [D, P, B, q, O]);
        let z = i.useMemo(
            () => ({
              reference: A,
              floating: S,
              setReference: C,
              setFloating: k,
            }),
            [C, k]
          ),
          H = i.useMemo(() => ({ reference: D, floating: P }), [D, P]),
          J = i.useMemo(() => {
            let t = { position: n, left: 0, top: 0 };
            if (!H.floating) return t;
            let e = c(H.floating, y.x),
              r = c(H.floating, y.y);
            return m
              ? {
                  ...t,
                  transform: "translate(" + e + "px, " + r + "px)",
                  ...(u(H.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: e, top: r };
          }, [n, m, H.floating, y.x, y.y]);
        return i.useMemo(
          () => ({ ...y, update: B, refs: z, elements: H, floatingStyles: J }),
          [y, B, z, H, J]
        );
      }
      let d = (t) => ({
          name: "arrow",
          options: t,
          fn(e) {
            let { element: n, padding: i } = "function" == typeof t ? t(e) : t;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? (0, r.UE)({ element: n.current, padding: i }).fn(e)
                : {}
              : n
              ? (0, r.UE)({ element: n, padding: i }).fn(e)
              : {};
          },
        }),
        h = (t, e) => ({ ...(0, r.cY)(t), options: [t, e] }),
        p = (t, e) => ({ ...(0, r.BN)(t), options: [t, e] }),
        m = (t, e) => ({ ...(0, r.ER)(t), options: [t, e] }),
        g = (t, e) => ({ ...(0, r.UU)(t), options: [t, e] }),
        w = (t, e) => ({ ...(0, r.Ej)(t), options: [t, e] }),
        y = (t, e) => ({ ...(0, r.RK)(t), options: [t, e] }),
        v = (t, e) => ({ ...(0, r.jD)(t), options: [t, e] }),
        x = (t, e) => ({ ...(0, r.mG)(t), options: [t, e] }),
        b = (t, e) => ({ ...d(t), options: [t, e] });
    },
    86301: (t, e, n) => {
      function r() {
        return "undefined" != typeof window;
      }
      function i(t) {
        return f(t) ? (t.nodeName || "").toLowerCase() : "#document";
      }
      function o(t) {
        var e;
        return (
          (null == t || null == (e = t.ownerDocument)
            ? void 0
            : e.defaultView) || window
        );
      }
      function l(t) {
        var e;
        return null ==
          (e = (f(t) ? t.ownerDocument : t.document) || window.document)
          ? void 0
          : e.documentElement;
      }
      function f(t) {
        return !!r() && (t instanceof Node || t instanceof o(t).Node);
      }
      function u(t) {
        return !!r() && (t instanceof Element || t instanceof o(t).Element);
      }
      function c(t) {
        return (
          !!r() && (t instanceof HTMLElement || t instanceof o(t).HTMLElement)
        );
      }
      function a(t) {
        return (
          !!r() &&
          "undefined" != typeof ShadowRoot &&
          (t instanceof ShadowRoot || t instanceof o(t).ShadowRoot)
        );
      }
      function s(t) {
        let { overflow: e, overflowX: n, overflowY: r, display: i } = y(t);
        return (
          /auto|scroll|overlay|hidden|clip/.test(e + r + n) &&
          !["inline", "contents"].includes(i)
        );
      }
      function d(t) {
        return ["table", "td", "th"].includes(i(t));
      }
      function h(t) {
        return [":popover-open", ":modal"].some((e) => {
          try {
            return t.matches(e);
          } catch (t) {
            return !1;
          }
        });
      }
      function p(t) {
        let e = g(),
          n = u(t) ? y(t) : t;
        return (
          ["transform", "translate", "scale", "rotate", "perspective"].some(
            (t) => !!n[t] && "none" !== n[t]
          ) ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!e && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!e && !!n.filter && "none" !== n.filter) ||
          [
            "transform",
            "translate",
            "scale",
            "rotate",
            "perspective",
            "filter",
          ].some((t) => (n.willChange || "").includes(t)) ||
          ["paint", "layout", "strict", "content"].some((t) =>
            (n.contain || "").includes(t)
          )
        );
      }
      function m(t) {
        let e = x(t);
        for (; c(e) && !w(e); ) {
          if (p(e)) return e;
          if (h(e)) break;
          e = x(e);
        }
        return null;
      }
      function g() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function w(t) {
        return ["html", "body", "#document"].includes(i(t));
      }
      function y(t) {
        return o(t).getComputedStyle(t);
      }
      function v(t) {
        return u(t)
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
      }
      function x(t) {
        if ("html" === i(t)) return t;
        let e = t.assignedSlot || t.parentNode || (a(t) && t.host) || l(t);
        return a(e) ? e.host : e;
      }
      function b(t) {
        return t.parent && Object.getPrototypeOf(t.parent)
          ? t.frameElement
          : null;
      }
      n.d(e, {
        $4: () => x,
        CP: () => v,
        L9: () => y,
        Lv: () => d,
        Ng: () => a,
        Tc: () => g,
        Tf: () => h,
        ZU: () => s,
        _m: () => b,
        ep: () => l,
        eu: () => w,
        gJ: () => m,
        mq: () => i,
        sQ: () => p,
        sb: () => c,
        v9: () =>
          function t(e, n, r) {
            var i;
            void 0 === n && (n = []), void 0 === r && (r = !0);
            let l = (function t(e) {
                let n = x(e);
                return w(n)
                  ? e.ownerDocument
                    ? e.ownerDocument.body
                    : e.body
                  : c(n) && s(n)
                  ? n
                  : t(n);
              })(e),
              f = l === (null == (i = e.ownerDocument) ? void 0 : i.body),
              u = o(l);
            if (f) {
              let e = b(u);
              return n.concat(
                u,
                u.visualViewport || [],
                s(l) ? l : [],
                e && r ? t(e) : []
              );
            }
            return n.concat(l, t(l, [], r));
          },
        vq: () => u,
        zk: () => o,
      });
    },
  },
]);
