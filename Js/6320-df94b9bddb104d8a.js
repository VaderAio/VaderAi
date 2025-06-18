"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6320],
  {
    43939: (e, t, s) => {
      s.d(t, { CP: () => ei, CI: () => eo, wV: () => en });
      var n,
        a,
        r,
        o,
        i,
        l = s(95155),
        c = s(12115),
        d = s.t(c, 2);
      class u extends Error {
        constructor(e, t) {
          e instanceof Error
            ? super(void 0, { cause: { err: e, ...e.cause, ...t } })
            : "string" == typeof e
            ? (t instanceof Error && (t = { err: t, ...t.cause }), super(e, t))
            : super(void 0, e),
            (this.name = this.constructor.name),
            (this.type = this.constructor.type ?? "AuthError"),
            (this.kind = this.constructor.kind ?? "error"),
            Error.captureStackTrace?.(this, this.constructor);
          let s = `https://errors.authjs.dev#${this.type.toLowerCase()}`;
          this.message += `${this.message ? ". " : ""}Read more at ${s}`;
        }
      }
      class p extends u {}
      p.kind = "signIn";
      class h extends u {}
      h.type = "AdapterError";
      class v extends u {}
      v.type = "AccessDenied";
      class y extends u {}
      y.type = "CallbackRouteError";
      class g extends u {}
      g.type = "ErrorPageLoop";
      class f extends u {}
      f.type = "EventError";
      class E extends u {}
      E.type = "InvalidCallbackUrl";
      class w extends p {
        constructor() {
          super(...arguments), (this.code = "credentials");
        }
      }
      w.type = "CredentialsSignin";
      class x extends u {}
      x.type = "InvalidEndpoints";
      class S extends u {}
      S.type = "InvalidCheck";
      class _ extends u {}
      _.type = "JWTSessionError";
      class b extends u {}
      b.type = "MissingAdapter";
      class m extends u {}
      m.type = "MissingAdapterMethods";
      class L extends u {}
      L.type = "MissingAuthorize";
      class U extends u {}
      U.type = "MissingSecret";
      class k extends p {}
      k.type = "OAuthAccountNotLinked";
      class A extends p {}
      A.type = "OAuthCallbackError";
      class C extends u {}
      C.type = "OAuthProfileParseError";
      class R extends u {}
      R.type = "SessionTokenError";
      class T extends p {}
      T.type = "OAuthSignInError";
      class N extends p {}
      N.type = "EmailSignInError";
      class P extends u {}
      P.type = "SignOutError";
      class I extends u {}
      I.type = "UnknownAction";
      class M extends u {}
      M.type = "UnsupportedStrategy";
      class O extends u {}
      O.type = "InvalidProvider";
      class H extends u {}
      H.type = "UntrustedHost";
      class X extends u {}
      X.type = "Verification";
      class j extends p {}
      j.type = "MissingCSRF";
      class V extends u {}
      V.type = "DuplicateConditionalUI";
      class W extends u {}
      W.type = "MissingWebAuthnAutocomplete";
      class $ extends u {}
      $.type = "WebAuthnVerificationError";
      class D extends p {}
      D.type = "AccountNotLinked";
      class F extends u {}
      F.type = "ExperimentalFeatureNotEnabled";
      class B extends u {}
      class J extends u {}
      async function q(e, t, s) {
        let n =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        let a = "".concat(t.basePath, "/").concat(e);
        try {
          var r;
          let e = {
            headers: {
              "Content-Type": "application/json",
              ...((null == n || null == (r = n.headers) ? void 0 : r.cookie)
                ? { cookie: n.headers.cookie }
                : {}),
            },
          };
          (null == n ? void 0 : n.body) &&
            ((e.body = JSON.stringify(n.body)), (e.method = "POST"));
          let t = await fetch(a, e),
            s = await t.json();
          if (!t.ok) throw s;
          return s;
        } catch (e) {
          return s.error(new B(e.message, e)), null;
        }
      }
      function z() {
        return Math.floor(Date.now() / 1e3);
      }
      function G(e) {
        let t = new URL("http://localhost:3000/api/auth");
        e && !e.startsWith("http") && (e = "https://".concat(e));
        let s = new URL(e || t),
          n = ("/" === s.pathname ? t.pathname : s.pathname).replace(/\/$/, ""),
          a = "".concat(s.origin).concat(n);
        return {
          origin: s.origin,
          host: s.host,
          path: n,
          base: a,
          toString: () => a,
        };
      }
      var K = s(49509);
      let Q = {
          baseUrl: G(null != (a = K.env.NEXTAUTH_URL) ? a : K.env.VERCEL_URL)
            .origin,
          basePath: G(K.env.NEXTAUTH_URL).path,
          baseUrlServer: G(
            null !=
              (o =
                null != (r = K.env.NEXTAUTH_URL_INTERNAL)
                  ? r
                  : K.env.NEXTAUTH_URL)
              ? o
              : K.env.VERCEL_URL
          ).origin,
          basePathServer: G(
            null != (i = K.env.NEXTAUTH_URL_INTERNAL) ? i : K.env.NEXTAUTH_URL
          ).path,
          _lastSync: 0,
          _session: void 0,
          _getSession: () => {},
        },
        Y = null;
      function Z() {
        return new BroadcastChannel("next-auth");
      }
      function ee() {
        return "undefined" == typeof BroadcastChannel
          ? {
              postMessage: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
            }
          : (null === Y && (Y = Z()), Y);
      }
      let et = {
          debug: console.debug,
          error: console.error,
          warn: console.warn,
        },
        es = null == (n = c.createContext) ? void 0 : n.call(d, void 0);
      function en(e) {
        if (!es)
          throw Error("React Context is unavailable in Server Components");
        let t = c.useContext(es),
          { required: s, onUnauthenticated: n } = null != e ? e : {},
          a = s && "unauthenticated" === t.status;
        return (c.useEffect(() => {
          if (a) {
            let e = "".concat(Q.basePath, "/signin?").concat(
              new URLSearchParams({
                error: "SessionRequired",
                callbackUrl: window.location.href,
              })
            );
            n ? n() : (window.location.href = e);
          }
        }, [a, n]),
        a)
          ? { data: t.data, update: t.update, status: "loading" }
          : t;
      }
      async function ea(e) {
        var t;
        let s = await q("session", Q, et, e);
        return (
          (null == (t = null == e ? void 0 : e.broadcast) || t) &&
            Z().postMessage({
              event: "session",
              data: { trigger: "getSession" },
            }),
          s
        );
      }
      async function er() {
        var e;
        let t = await q("csrf", Q, et);
        return null != (e = null == t ? void 0 : t.csrfToken) ? e : "";
      }
      async function eo(e) {
        var t, s;
        let {
            redirect: n = !0,
            redirectTo: a = null != (t = null == e ? void 0 : e.callbackUrl)
              ? t
              : window.location.href,
          } = null != e ? e : {},
          r = Q.basePath,
          o = await er(),
          i = await fetch("".concat(r, "/signout"), {
            method: "post",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Auth-Return-Redirect": "1",
            },
            body: new URLSearchParams({ csrfToken: o, callbackUrl: a }),
          }),
          l = await i.json();
        if (
          (ee().postMessage({ event: "session", data: { trigger: "signout" } }),
          n)
        ) {
          let e = null != (s = l.url) ? s : a;
          (window.location.href = e),
            e.includes("#") && window.location.reload();
          return;
        }
        return await Q._getSession({ event: "storage" }), l;
      }
      function ei(e) {
        if (!es)
          throw Error("React Context is unavailable in Server Components");
        let {
          children: t,
          basePath: s,
          refetchInterval: n,
          refetchWhenOffline: a,
        } = e;
        s && (Q.basePath = s);
        let r = void 0 !== e.session;
        Q._lastSync = r ? z() : 0;
        let [o, i] = c.useState(
            () => (r && (Q._session = e.session), e.session)
          ),
          [d, u] = c.useState(!r);
        c.useEffect(
          () => (
            (Q._getSession = async function () {
              let { event: e } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              try {
                let t = "storage" === e;
                if (t || void 0 === Q._session) {
                  (Q._lastSync = z()),
                    (Q._session = await ea({ broadcast: !t })),
                    i(Q._session);
                  return;
                }
                if (!e || null === Q._session || z() < Q._lastSync) return;
                (Q._lastSync = z()), (Q._session = await ea()), i(Q._session);
              } catch (e) {
                et.error(new J(e.message, e));
              } finally {
                u(!1);
              }
            }),
            Q._getSession(),
            () => {
              (Q._lastSync = 0),
                (Q._session = void 0),
                (Q._getSession = () => {});
            }
          ),
          []
        ),
          c.useEffect(() => {
            let e = () => Q._getSession({ event: "storage" });
            return (
              ee().addEventListener("message", e),
              () => ee().removeEventListener("message", e)
            );
          }, []),
          c.useEffect(() => {
            let { refetchOnWindowFocus: t = !0 } = e,
              s = () => {
                t &&
                  "visible" === document.visibilityState &&
                  Q._getSession({ event: "visibilitychange" });
              };
            return (
              document.addEventListener("visibilitychange", s, !1),
              () => document.removeEventListener("visibilitychange", s, !1)
            );
          }, [e.refetchOnWindowFocus]);
        let p = (function () {
            let [e, t] = c.useState(
                "undefined" != typeof navigator && navigator.onLine
              ),
              s = () => t(!0),
              n = () => t(!1);
            return (
              c.useEffect(
                () => (
                  window.addEventListener("online", s),
                  window.addEventListener("offline", n),
                  () => {
                    window.removeEventListener("online", s),
                      window.removeEventListener("offline", n);
                  }
                ),
                []
              ),
              e
            );
          })(),
          h = !1 !== a || p;
        c.useEffect(() => {
          if (n && h) {
            let e = setInterval(() => {
              Q._session && Q._getSession({ event: "poll" });
            }, 1e3 * n);
            return () => clearInterval(e);
          }
        }, [n, h]);
        let v = c.useMemo(
          () => ({
            data: o,
            status: d ? "loading" : o ? "authenticated" : "unauthenticated",
            async update(e) {
              if (d) return;
              u(!0);
              let t = await q(
                "session",
                Q,
                et,
                void 0 === e
                  ? void 0
                  : { body: { csrfToken: await er(), data: e } }
              );
              return (
                u(!1),
                t &&
                  (i(t),
                  ee().postMessage({
                    event: "session",
                    data: { trigger: "getSession" },
                  })),
                t
              );
            },
          }),
          [o, d]
        );
        return (0, l.jsx)(es.Provider, { value: v, children: t });
      }
    },
  },
]);
