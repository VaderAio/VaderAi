"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6129],
  {
    32082: (t, e, i) => {
      i.d(e, { xQ: () => r });
      var s = i(12115),
        o = i(80845);
      function r(t = !0) {
        let e = (0, s.useContext)(o.t);
        if (null === e) return [!0, null];
        let { isPresent: i, onExitComplete: n, register: a } = e,
          l = (0, s.useId)();
        (0, s.useEffect)(() => {
          t && a(l);
        }, [t]);
        let h = (0, s.useCallback)(() => t && n && n(l), [l, n, t]);
        return !i && n ? [!1, h] : [!0];
      }
    },
    66129: (t, e, i) => {
      i.d(e, { P: () => ey });
      var s = i(14060),
        o = i(55457),
        r = i(52290),
        n = i(19827),
        a = i(54542),
        l = i(46256),
        h = i(47215),
        u = i(51442),
        d = i(51586);
      function c(t, e, i, s) {
        return (0, u.k)(t, e, (0, d.F)(i), s);
      }
      let m = (t, e) => Math.abs(t - e);
      var p = i(97007),
        g = i(59210);
      class v {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: s,
            dragSnapToOrigin: o = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = x(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(m(t.x, e.x) ** 2 + m(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: s } = t,
                { timestamp: o } = g.uv;
              this.history.push({ ...s, timestamp: o });
              let { onStart: r, onMove: n } = this.handlers;
              e ||
                (r && r(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                n && n(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = y(e, this.transformPagePoint)),
                g.Gt.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: s,
                resumeAnimation: o,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && o && o(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = x(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : y(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, r), s && s(t, r);
            }),
            !(0, l.Mc)(t))
          )
            return;
          (this.dragSnapToOrigin = o),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = s || window);
          let r = y((0, d.e)(t), this.transformPagePoint),
            { point: n } = r,
            { timestamp: a } = g.uv;
          this.history = [{ ...n, timestamp: a }];
          let { onSessionStart: h } = e;
          h && h(t, x(r, this.history)),
            (this.removeListeners = (0, p.F)(
              c(this.contextWindow, "pointermove", this.handlePointerMove),
              c(this.contextWindow, "pointerup", this.handlePointerUp),
              c(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, g.WG)(this.updatePoint);
        }
      }
      function y(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function f(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function x({ point: t }, e) {
        return {
          point: t,
          delta: f(t, P(e)),
          offset: f(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              s = null,
              o = P(t);
            for (
              ;
              i >= 0 &&
              ((s = t[i]), !(o.timestamp - s.timestamp > (0, h.f)(0.1)));

            )
              i--;
            if (!s) return { x: 0, y: 0 };
            let r = (0, h.X)(o.timestamp - s.timestamp);
            if (0 === r) return { x: 0, y: 0 };
            let n = { x: (o.x - s.x) / r, y: (o.y - s.y) / r };
            return n.x === 1 / 0 && (n.x = 0), n.y === 1 / 0 && (n.y = 0), n;
          })(e, 0.1),
        };
      }
      function P(t) {
        return t[t.length - 1];
      }
      var T = i(33991),
        D = i(45818),
        E = i(21109);
      function A(t) {
        return t.max - t.min;
      }
      function R(t, e, i, s = 0.5) {
        (t.origin = s),
          (t.originPoint = (0, E.k)(e.min, e.max, t.origin)),
          (t.scale = A(i) / A(e)),
          (t.translate = (0, E.k)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function S(t, e, i, s) {
        R(t.x, e.x, i.x, s ? s.originX : void 0),
          R(t.y, e.y, i.y, s ? s.originY : void 0);
      }
      function k(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + A(e));
      }
      function j(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + A(e));
      }
      function L(t, e, i) {
        j(t.x, e.x, i.x), j(t.y, e.y, i.y);
      }
      var w = i(77782);
      function B(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function V(t, e) {
        let i = e.min - t.min,
          s = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s }
        );
      }
      function M(t, e, i) {
        return { min: C(t, e), max: C(t, i) };
      }
      function C(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      var U = i(81786);
      function b(t) {
        return [t("x"), t("y")];
      }
      var F = i(33757),
        O = i(78588),
        G = i(45471),
        W = i(77966);
      let N = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var I = i(76333);
      let $ = new WeakMap();
      class H {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, U.ge)()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new v(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor((0, d.e)(t).point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: s,
                  onDragStart: o,
                } = this.getProps();
                if (
                  i &&
                  !s &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock = (0, l.Wp)(i)),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  b((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (G.KN.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let s = i.layout.layoutBox[t];
                        s && (e = A(s) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  o && g.Gt.postRender(() => o(t, e)),
                  (0, I.g)(this.visualElement, "transform");
                let { animationState: r } = this.visualElement;
                r && r.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: s,
                  onDirectionLock: o,
                  onDrag: r,
                } = this.getProps();
                if (!i && !this.openDragLock) return;
                let { offset: n } = e;
                if (s && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(n)),
                    null !== this.currentDirection &&
                      o &&
                      o(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, n),
                  this.updateAxis("y", e.point, n),
                  this.visualElement.render(),
                  r && r(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                b((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null == (e = this.getAxisMotionValue(t).animation)
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: s,
              contextWindow: N(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: s } = e;
          this.startAnimation(s);
          let { onDragEnd: o } = this.getProps();
          o && g.Gt.postRender(() => o(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: s } = this.getProps();
          if (!i || !z(t, s, this.currentDirection)) return;
          let o = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, s) {
              return (
                void 0 !== e && t < e
                  ? (t = s ? (0, E.k)(e, t, s.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = s ? (0, E.k)(i, t, s.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            o.set(r);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            s =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null == (t = this.visualElement.projection)
                ? void 0
                : t.layout,
            o = this.constraints;
          e && (0, T.X)(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && s
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: s, right: o }
              ) {
                return { x: B(t.x, i, o), y: B(t.y, e, s) };
              })(s.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: M(t, "left", "right"), y: M(t, "top", "bottom") }
              );
            })(i)),
            o !== this.constraints &&
              s &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              b((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(s.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !(0, T.X)(e)) return !1;
          let s = e.current;
          (0, a.V)(
            null !== s,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: o } = this.visualElement;
          if (!o || !o.layout) return !1;
          let r = (0, F.L)(
              s,
              o.root,
              this.visualElement.getTransformPagePoint()
            ),
            n = ((t = o.layout.layoutBox), { x: V(t.x, r.x), y: V(t.y, r.y) });
          if (i) {
            let t = i((0, O.pA)(n));
            (this.hasMutatedConstraints = !!t), t && (n = (0, O.FY)(t));
          }
          return n;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: s,
              dragTransition: o,
              dragSnapToOrigin: r,
              onDragTransitionEnd: n,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            b((n) => {
              if (!z(n, e, this.currentDirection)) return;
              let l = (a && a[n]) || {};
              r && (l = { min: 0, max: 0 });
              let h = {
                type: "inertia",
                velocity: i ? t[n] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...l,
              };
              return this.startAxisValueAnimation(n, h);
            })
          ).then(n);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            (0, I.g)(this.visualElement, t),
            i.start((0, W.f)(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          b((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          b((t) => {
            var e;
            return null == (e = this.getAxisMotionValue(t).animation)
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null == (e = this.getAxisMotionValue(t).animation)
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          b((e) => {
            let { drag: i } = this.getProps();
            if (!z(e, i, this.currentDirection)) return;
            let { projection: s } = this.visualElement,
              o = this.getAxisMotionValue(e);
            if (s && s.layout) {
              let { min: i, max: r } = s.layout.layoutBox[e];
              o.set(t[e] - (0, E.k)(i, r, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!(0, T.X)(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let s = { x: 0, y: 0 };
          b((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              s[t] = (function (t, e) {
                let i = 0.5,
                  s = A(t),
                  o = A(e);
                return (
                  o > s
                    ? (i = (0, D.q)(e.min, e.max - s, t.min))
                    : s > o && (i = (0, D.q)(t.min, t.max - o, e.min)),
                  (0, w.q)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: o } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            b((e) => {
              if (!z(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: o, max: r } = this.constraints[e];
              i.set((0, E.k)(o, r, s[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          $.set(this.visualElement, this);
          let t = c(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              (0, T.X)(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            s = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            g.Gt.read(e);
          let o = (0, u.k)(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            r = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (b((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            o(), t(), s(), r && r();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: s = !1,
              dragConstraints: o = !1,
              dragElastic: r = 0.35,
              dragMomentum: n = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: o,
            dragElastic: r,
            dragMomentum: n,
          };
        }
      }
      function z(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class X extends r.X {
        constructor(t) {
          super(t),
            (this.removeGroupControls = n.l),
            (this.removeListeners = n.l),
            (this.controls = new H(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || n.l);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let q = (t) => (e, i) => {
        t && g.Gt.postRender(() => t(e, i));
      };
      class Y extends r.X {
        constructor() {
          super(...arguments), (this.removePointerDownListener = n.l);
        }
        onPointerDown(t) {
          this.session = new v(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: N(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: s,
          } = this.node.getProps();
          return {
            onSessionStart: q(t),
            onStart: q(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, s && g.Gt.postRender(() => s(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = c(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var Q = i(95155),
        K = i(12115),
        _ = i(32082),
        Z = i(90869),
        J = i(70797);
      let tt = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function te(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let ti = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t)
            if (!G.px.test(t)) return t;
            else t = parseFloat(t);
          let i = te(t, e.target.x),
            s = te(t, e.target.y);
          return `${i}% ${s}%`;
        },
      };
      var ts = i(93013),
        to = i(20637),
        tr = i(48466);
      class tn extends K.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: s,
            } = this.props,
            { projection: o } = t;
          (0, to.$)(tl),
            o &&
              (e.group && e.group.add(o),
              i && i.register && s && i.register(o),
              o.root.didUpdate(),
              o.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              o.setOptions({
                ...o.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (tt.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: s,
              isPresent: o,
            } = this.props,
            r = i.projection;
          return (
            r &&
              ((r.isPresent = o),
              s || t.layoutDependency !== e || void 0 === e
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent !== o &&
                (o
                  ? r.promote()
                  : r.relegate() ||
                    g.Gt.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            tr.k.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: s } = t;
          s &&
            (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function ta(t) {
        let [e, i] = (0, _.xQ)(),
          s = (0, K.useContext)(Z.L);
        return (0, Q.jsx)(tn, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, K.useContext)(J.N),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let tl = {
        borderRadius: {
          ...ti,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: ti,
        borderTopRightRadius: ti,
        borderBottomLeftRadius: ti,
        borderBottomRightRadius: ti,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let s = ts.f.parse(t);
            if (s.length > 5) return t;
            let o = ts.f.createTransformer(t),
              r = +("number" != typeof s[0]),
              n = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (s[0 + r] /= n), (s[1 + r] /= a);
            let l = (0, E.k)(n, a, 0.5);
            return (
              "number" == typeof s[2 + r] && (s[2 + r] /= l),
              "number" == typeof s[3 + r] && (s[3 + r] /= l),
              o(s)
            );
          },
        },
      };
      var th = i(59779),
        tu = i(14570),
        td = i(46926),
        tc = i(19932),
        tm = i(63284);
      let tp = (t, e) => t.depth - e.depth;
      class tg {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, tm.Kq)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, tm.Ai)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(tp),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var tv = i(66802),
        ty = i(95902),
        tf = i(59282);
      let tx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        tP = tx.length,
        tT = (t) => ("string" == typeof t ? parseFloat(t) : t),
        tD = (t) => "number" == typeof t || G.px.test(t);
      function tE(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let tA = tS(0, 0.5, tf.yT),
        tR = tS(0.5, 0.95, n.l);
      function tS(t, e, i) {
        return (s) => (s < t ? 0 : s > e ? 1 : i((0, D.q)(t, e, s)));
      }
      function tk(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function tj(t, e) {
        tk(t.x, e.x), tk(t.y, e.y);
      }
      function tL(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      var tw = i(96147);
      function tB(t, e, i, s, o) {
        return (
          (t -= e),
          (t = (0, tw.hq)(t, 1 / i, s)),
          void 0 !== o && (t = (0, tw.hq)(t, 1 / o, s)),
          t
        );
      }
      function tV(t, e, [i, s, o], r, n) {
        !(function (t, e = 0, i = 1, s = 0.5, o, r = t, n = t) {
          if (
            (G.KN.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, E.k)(n.min, n.max, e / 100) - n.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, E.k)(r.min, r.max, s);
          t === r && (a -= e),
            (t.min = tB(t.min, e, i, a, o)),
            (t.max = tB(t.max, e, i, a, o));
        })(t, e[i], e[s], e[o], e.scale, r, n);
      }
      let tM = ["x", "scaleX", "originX"],
        tC = ["y", "scaleY", "originY"];
      function tU(t, e, i, s) {
        tV(t.x, e, tM, i ? i.x : void 0, s ? s.x : void 0),
          tV(t.y, e, tC, i ? i.y : void 0, s ? s.y : void 0);
      }
      function tb(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function tF(t) {
        return tb(t.x) && tb(t.y);
      }
      function tO(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function tG(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function tW(t, e) {
        return tG(t.x, e.x) && tG(t.y, e.y);
      }
      function tN(t) {
        return A(t.x) / A(t.y);
      }
      function tI(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class t$ {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, tm.Kq)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, tm.Ai)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e,
            i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: s } = t.options;
            !1 === s && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      var tH = i(62662);
      let tz = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        tX = "undefined" != typeof window && void 0 !== window.MotionDebug,
        tq = ["", "X", "Y", "Z"],
        tY = { visibility: "hidden" },
        tQ = 0;
      function tK(t, e, i, s) {
        let { latestValues: o } = e;
        o[t] && ((i[t] = o[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
      }
      function t_({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: o,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = tQ++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  tX &&
                    (tz.totalNodes =
                      tz.resolvedTargetDeltas =
                      tz.recalculatedProjection =
                        0),
                  this.nodes.forEach(t0),
                  this.nodes.forEach(t7),
                  this.nodes.forEach(t4),
                  this.nodes.forEach(t1),
                  tX && window.MotionDebug.record(tz);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new tg());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new tv.v()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: s, layout: o, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (o || s) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i,
                s = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = tc.k.now(),
                      s = ({ timestamp: o }) => {
                        let r = o - i;
                        r >= 250 && ((0, g.WG)(s), t(r - e));
                      };
                    return g.Gt.read(s, !0), () => (0, g.WG)(s);
                  })(s, 250)),
                  tt.hasAnimatedSinceResize &&
                    ((tt.hasAnimatedSinceResize = !1), this.nodes.forEach(t3));
              });
            }
            s && this.root.registerSharedNode(s, this),
              !1 !== this.options.animate &&
                r &&
                (s || o) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: s,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let o =
                        this.options.transition ||
                        r.getDefaultTransition() ||
                        eo,
                      {
                        onLayoutAnimationStart: n,
                        onLayoutAnimationComplete: a,
                      } = r.getProps(),
                      h = !this.targetLayout || !tW(this.targetLayout, s) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (h || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, l.rU)(o, "layout"),
                        onPlay: n,
                        onComplete: a,
                      };
                      (r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || t3(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = s;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, g.WG)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(t8),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let s = (0, td.P)(i);
                  if (window.MotionHasOptimisedAnimation(s, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      s,
                      "transform",
                      g.Gt,
                      !(t || i)
                    );
                  }
                  let { parent: o } = e;
                  o && !o.hasCheckedOptimisedAppear && t(o);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let s = this.getTransformTemplate();
            (this.prevTransformTemplateValue = s
              ? s(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(t2);
              return;
            }
            this.isUpdating || this.nodes.forEach(t6),
              (this.isUpdating = !1),
              this.nodes.forEach(t9),
              this.nodes.forEach(tZ),
              this.nodes.forEach(tJ),
              this.clearAllSnapshots();
            let t = tc.k.now();
            (g.uv.delta = (0, w.q)(0, 1e3 / 60, t - g.uv.timestamp)),
              (g.uv.timestamp = t),
              (g.uv.isProcessing = !0),
              g.PP.update.process(g.uv),
              g.PP.preRender.process(g.uv),
              g.PP.render.process(g.uv),
              (g.uv.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), tr.k.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(t5), this.sharedNodes.forEach(et);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              g.Gt.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            g.Gt.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = (0, U.ge)()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = s(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!o) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !tF(this.projectionDelta),
              i = this.getTransformTemplate(),
              s = i ? i(this.latestValues, "") : void 0,
              r = s !== this.prevTransformTemplateValue;
            t &&
              (e || (0, tH.HD)(this.latestValues) || r) &&
              (o(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              s = this.removeElementScroll(i);
            return (
              t && (s = this.removeTransform(s)),
              ea((e = s).x),
              ea(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return (0, U.ge)();
            let i = e.measureViewportBox();
            if (
              !(
                (null == (t = this.scroll) ? void 0 : t.wasRoot) ||
                this.path.some(eh)
              )
            ) {
              let { scroll: t } = this.root;
              t && ((0, tw.Ql)(i.x, t.offset.x), (0, tw.Ql)(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = (0, U.ge)();
            if ((tj(i, t), null == (e = this.scroll) ? void 0 : e.wasRoot))
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let s = this.path[e],
                { scroll: o, options: r } = s;
              s !== this.root &&
                o &&
                r.layoutScroll &&
                (o.wasRoot && tj(i, t),
                (0, tw.Ql)(i.x, o.offset.x),
                (0, tw.Ql)(i.y, o.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = (0, U.ge)();
            tj(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let s = this.path[t];
              !e &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                (0, tw.Ww)(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                (0, tH.HD)(s.latestValues) && (0, tw.Ww)(i, s.latestValues);
            }
            return (
              (0, tH.HD)(this.latestValues) && (0, tw.Ww)(i, this.latestValues),
              i
            );
          }
          removeTransform(t) {
            let e = (0, U.ge)();
            tj(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !(0, tH.HD)(i.latestValues)) continue;
              (0, tH.vk)(i.latestValues) && i.updateSnapshot();
              let s = (0, U.ge)();
              tj(s, i.measurePageBox()),
                tU(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  s
                );
            }
            return (0, tH.HD)(this.latestValues) && tU(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== g.uv.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, s, o;
            let r = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = r.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = r.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
            let n = !!this.resumingFrom || this !== r;
            if (
              !(
                t ||
                (n && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null == (e = this.parent) ? void 0 : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = g.uv.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, U.ge)()),
                    (this.relativeTargetOrigin = (0, U.ge)()),
                    L(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    tj(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = (0, U.ge)()),
                    (this.targetWithTransforms = (0, U.ge)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (s = this.relativeTarget),
                      (o = this.relativeParent.target),
                      k(i.x, s.x, o.x),
                      k(i.y, s.y, o.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : tj(this.target, this.layout.layoutBox),
                      (0, tw.o4)(this.target, this.targetDelta))
                    : tj(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = (0, U.ge)()),
                      (this.relativeTargetOrigin = (0, U.ge)()),
                      L(this.relativeTargetOrigin, this.target, t.target),
                      tj(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                tX && tz.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            if (
              !(
                !this.parent ||
                (0, tH.vk)(this.parent.latestValues) ||
                (0, tH.vF)(this.parent.latestValues)
              )
            )
              if (this.parent.isProjecting()) return this.parent;
              else return this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              s = !0;
            if (
              ((this.isProjectionDirty ||
                (null == (t = this.parent) ? void 0 : t.isProjectionDirty)) &&
                (s = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (s = !1),
              this.resolvedRelativeTargetAt === g.uv.timestamp && (s = !1),
              s)
            )
              return;
            let { layout: o, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(o || r))
            )
              return;
            tj(this.layoutCorrected, this.layout.layoutBox);
            let n = this.treeScale.x,
              a = this.treeScale.y;
            (0, tw.OU)(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = (0, U.ge)()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (tL(this.prevProjectionDelta.x, this.projectionDelta.x),
                tL(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              S(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === n &&
                this.treeScale.y === a &&
                tI(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                tI(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              tX && tz.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null == (e = this.options.visualElement) || e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = (0, U.xU)()),
              (this.projectionDelta = (0, U.xU)()),
              (this.projectionDeltaWithTransform = (0, U.xU)());
          }
          setAnimationOrigin(t, e = !1) {
            let i,
              s = this.snapshot,
              o = s ? s.latestValues : {},
              r = { ...this.latestValues },
              n = (0, U.xU)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = (0, U.ge)(),
              l =
                (s ? s.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              h = this.getStack(),
              u = !h || h.members.length <= 1,
              d = !!(
                l &&
                !u &&
                !0 === this.options.crossfade &&
                !this.path.some(es)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let s = e / 1e3;
                if (
                  (ee(n.x, t.x, s),
                  ee(n.y, t.y, s),
                  this.setTargetDelta(n),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var h, c, m, p, g, v;
                  L(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (m = this.relativeTarget),
                    (p = this.relativeTargetOrigin),
                    (g = a),
                    (v = s),
                    ei(m.x, p.x, g.x, v),
                    ei(m.y, p.y, g.y, v),
                    i &&
                      ((h = this.relativeTarget),
                      (c = i),
                      tO(h.x, c.x) && tO(h.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = (0, U.ge)()),
                    tj(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = r),
                  (function (t, e, i, s, o, r) {
                    o
                      ? ((t.opacity = (0, E.k)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          tA(s)
                        )),
                        (t.opacityExit = (0, E.k)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          tR(s)
                        )))
                      : r &&
                        (t.opacity = (0, E.k)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          s
                        ));
                    for (let o = 0; o < tP; o++) {
                      let r = `border${tx[o]}Radius`,
                        n = tE(e, r),
                        a = tE(i, r);
                      (void 0 !== n || void 0 !== a) &&
                        (n || (n = 0),
                        a || (a = 0),
                        0 === n || 0 === a || tD(n) === tD(a)
                          ? ((t[r] = Math.max((0, E.k)(tT(n), tT(a), s), 0)),
                            (G.KN.test(a) || G.KN.test(n)) && (t[r] += "%"))
                          : (t[r] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, E.k)(e.rotate || 0, i.rotate || 0, s));
                  })(r, o, this.latestValues, s, d, u)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = s);
              }),
              this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, g.WG)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = g.Gt.update(() => {
                (tt.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let s = (0, tu.S)(0) ? 0 : (0, th.OQ)(t);
                    return s.start((0, W.f)("", s, 1e3, i)), s.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: s,
                latestValues: o,
              } = t;
            if (e && i && s) {
              if (
                this !== t &&
                this.layout &&
                s &&
                el(
                  this.options.animationType,
                  this.layout.layoutBox,
                  s.layoutBox
                )
              ) {
                i = this.target || (0, U.ge)();
                let e = A(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let s = A(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
              }
              tj(e, i),
                (0, tw.Ww)(e, o),
                S(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  o
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new t$()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e && (null == (t = this.getStack()) ? void 0 : t.lead)) || this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null == (t = this.getStack())
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let s = this.getStack();
            s && s.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let s = {};
            i.z && tK("z", t, s, this.animationValues);
            for (let e = 0; e < tq.length; e++)
              tK(`rotate${tq[e]}`, t, s, this.animationValues),
                tK(`skew${tq[e]}`, t, s, this.animationValues);
            for (let e in (t.render(), s))
              t.setStaticValue(e, s[e]),
                this.animationValues && (this.animationValues[e] = s[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return tY;
            let s = { visibility: "" },
              o = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (s.opacity = ""),
                (s.pointerEvents =
                  (0, ty.u)(null == t ? void 0 : t.pointerEvents) || ""),
                (s.transform = o ? o(this.latestValues, "") : "none"),
                s
              );
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    (0, ty.u)(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !(0, tH.HD)(this.latestValues) &&
                  ((e.transform = o ? o({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let n = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(),
              (s.transform = (function (t, e, i) {
                let s = "",
                  o = t.x.translate / e.x,
                  r = t.y.translate / e.y,
                  n = (null == i ? void 0 : i.z) || 0;
                if (
                  ((o || r || n) &&
                    (s = `translate3d(${o}px, ${r}px, ${n}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (s += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: o,
                    rotateY: r,
                    skewX: n,
                    skewY: a,
                  } = i;
                  t && (s = `perspective(${t}px) ${s}`),
                    e && (s += `rotate(${e}deg) `),
                    o && (s += `rotateX(${o}deg) `),
                    r && (s += `rotateY(${r}deg) `),
                    n && (s += `skewX(${n}deg) `),
                    a && (s += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`),
                  s || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, n)),
              o && (s.transform = o(n, s.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((s.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            r.animationValues
              ? (s.opacity =
                  r === this
                    ? null !=
                      (i =
                        null != (e = n.opacity) ? e : this.latestValues.opacity)
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : n.opacityExit)
              : (s.opacity =
                  r === this
                    ? void 0 !== n.opacity
                      ? n.opacity
                      : ""
                    : void 0 !== n.opacityExit
                    ? n.opacityExit
                    : 0),
            to.H)) {
              if (void 0 === n[t]) continue;
              let { correct: e, applyTo: i } = to.H[t],
                o = "none" === s.transform ? n[t] : e(n[t], r);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) s[i[e]] = o;
              } else s[t] = o;
            }
            return (
              this.options.layoutId &&
                (s.pointerEvents =
                  r === this
                    ? (0, ty.u)(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              s
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null == (e = t.currentAnimation) ? void 0 : e.stop();
            }),
              this.root.nodes.forEach(t2),
              this.root.sharedNodes.clear();
          }
        };
      }
      function tZ(t) {
        t.updateLayout();
      }
      function tJ(t) {
        var e;
        let i =
          (null == (e = t.resumeFrom) ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: s } = t.layout,
            { animationType: o } = t.options,
            r = i.source !== t.layout.source;
          "size" === o
            ? b((t) => {
                let s = r ? i.measuredBox[t] : i.layoutBox[t],
                  o = A(s);
                (s.min = e[t].min), (s.max = s.min + o);
              })
            : el(o, i.layoutBox, e) &&
              b((s) => {
                let o = r ? i.measuredBox[s] : i.layoutBox[s],
                  n = A(e[s]);
                (o.max = o.min + n),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[s].max = t.relativeTarget[s].min + n));
              });
          let n = (0, U.xU)();
          S(n, e, i.layoutBox);
          let a = (0, U.xU)();
          r
            ? S(a, t.applyTransform(s, !0), i.measuredBox)
            : S(a, e, i.layoutBox);
          let l = !tF(n),
            h = !1;
          if (!t.resumeFrom) {
            let s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              let { snapshot: o, layout: r } = s;
              if (o && r) {
                let n = (0, U.ge)();
                L(n, i.layoutBox, o.layoutBox);
                let a = (0, U.ge)();
                L(a, e, r.layoutBox),
                  tW(n, a) || (h = !0),
                  s.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = n),
                    (t.relativeParent = s));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: n,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: h,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function t0(t) {
        tX && tz.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function t1(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function t5(t) {
        t.clearSnapshot();
      }
      function t2(t) {
        t.clearMeasurements();
      }
      function t6(t) {
        t.isLayoutDirty = !1;
      }
      function t9(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function t3(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function t7(t) {
        t.resolveTargetDelta();
      }
      function t4(t) {
        t.calcProjection();
      }
      function t8(t) {
        t.resetSkewAndRotation();
      }
      function et(t) {
        t.removeLeadSnapshot();
      }
      function ee(t, e, i) {
        (t.translate = (0, E.k)(e.translate, 0, i)),
          (t.scale = (0, E.k)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function ei(t, e, i, s) {
        (t.min = (0, E.k)(e.min, i.min, s)),
          (t.max = (0, E.k)(e.max, i.max, s));
      }
      function es(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let eo = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        er = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        en = er("applewebkit/") && !er("chrome/") ? Math.round : n.l;
      function ea(t) {
        (t.min = en(t.min)), (t.max = en(t.max));
      }
      function el(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(tN(e) - tN(i))))
        );
      }
      function eh(t) {
        var e;
        return t !== t.root && (null == (e = t.scroll) ? void 0 : e.wasRoot);
      }
      let eu = t_({
          attachResizeListener: (t, e) => (0, u.k)(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ed = { current: void 0 },
        ec = t_({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!ed.current) {
              let t = new eu({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ed.current = t);
            }
            return ed.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var em = i(25646),
        ep = i(18831),
        eg = i(61710);
      let ev = (0, ep.C)(
          {
            ...o.W,
            ...em.n,
            pan: { Feature: Y },
            drag: { Feature: X, ProjectionNode: ec, MeasureLayout: ta },
            layout: { ProjectionNode: ec, MeasureLayout: ta },
          },
          eg.J
        ),
        ey = (0, s.I)(ev);
    },
  },
]);
