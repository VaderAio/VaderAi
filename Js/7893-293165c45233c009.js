(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7893],
  {
    1607: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => d });
      var r = n(35883),
        o = n(81379),
        i = n(78519),
        a = n(42142),
        s = n(67622),
        c = n(77752),
        l = n(90113),
        u = n(9894);
      function d(e = {}) {
        let t,
          n,
          h,
          w,
          { shimDisconnect: m = !0, unstable_shimAsyncInject: y } = e;
        function g() {
          let t = e.target;
          if ("function" == typeof t) {
            let e = t();
            if (e) return e;
          }
          return "object" == typeof t
            ? t
            : "string" == typeof t
            ? {
                ...(p[t] ?? {
                  id: t,
                  name: `${t[0].toUpperCase()}${t.slice(1)}`,
                  provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (e) => e?.ethereum,
              };
        }
        return (0, u.U)((u) => ({
          get icon() {
            return g().icon;
          },
          get id() {
            return g().id;
          },
          get name() {
            return g().name;
          },
          get supportsSimulation() {
            return !0;
          },
          type: d.type,
          async setup() {
            let n = await this.getProvider();
            n?.on &&
              e.target &&
              (h || ((h = this.onConnect.bind(this)), n.on("connect", h)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                n.on("accountsChanged", t)));
          },
          async connect({ chainId: i, isReconnecting: a } = {}) {
            let s = await this.getProvider();
            if (!s) throw new l.N();
            let c = [];
            if (a) c = await this.getAccounts().catch(() => []);
            else if (m)
              try {
                let e = await s.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                (c = e[0]?.caveats?.[0]?.value?.map((e) => (0, r.b)(e)))
                  .length > 0 && (c = await this.getAccounts());
              } catch (e) {
                if (e.code === o.vx.code) throw new o.vx(e);
                if (e.code === o.qZ.code) throw e;
              }
            try {
              c?.length ||
                a ||
                (c = (await s.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, r.b)(e)
                )),
                h && (s.removeListener("connect", h), (h = void 0)),
                t ||
                  ((t = this.onAccountsChanged.bind(this)),
                  s.on("accountsChanged", t)),
                n ||
                  ((n = this.onChainChanged.bind(this)),
                  s.on("chainChanged", n)),
                w ||
                  ((w = this.onDisconnect.bind(this)), s.on("disconnect", w));
              let l = await this.getChainId();
              if (i && l !== i) {
                let e = await this.switchChain({ chainId: i }).catch((e) => {
                  if (e.code === o.vx.code) throw e;
                  return { id: l };
                });
                l = e?.id ?? l;
              }
              return (
                m && (await u.storage?.removeItem(`${this.id}.disconnected`)),
                e.target ||
                  (await u.storage?.setItem("injected.connected", !0)),
                { accounts: c, chainId: l }
              );
            } catch (e) {
              if (e.code === o.vx.code) throw new o.vx(e);
              if (e.code === o.qZ.code) throw new o.qZ(e);
              throw e;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new l.N();
            n && (t.removeListener("chainChanged", n), (n = void 0)),
              w && (t.removeListener("disconnect", w), (w = void 0)),
              h || ((h = this.onConnect.bind(this)), t.on("connect", h));
            try {
              await (0, i.w)(
                () =>
                  t.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                { timeout: 100 }
              );
            } catch {}
            m && (await u.storage?.setItem(`${this.id}.disconnected`, !0)),
              e.target || (await u.storage?.removeItem("injected.connected"));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new l.N();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, r.b)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new l.N();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            let e;
            if ("undefined" == typeof window) return;
            let t = g();
            return (
              (e =
                "function" == typeof t.provider
                  ? t.provider(window)
                  : "string" == typeof t.provider
                  ? f(window, t.provider)
                  : t.provider) &&
                !e.removeListener &&
                ("off" in e && "function" == typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              if (
                (m && (await u.storage?.getItem(`${this.id}.disconnected`))) ||
                (!e.target && !(await u.storage?.getItem("injected.connected")))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== y && !1 !== y) {
                  let e = async () => (
                      "undefined" != typeof window &&
                        window.removeEventListener("ethereum#initialized", e),
                      !!(await this.getProvider())
                    ),
                    t = "number" == typeof y ? y : 1e3;
                  if (
                    await Promise.race([
                      ...("undefined" != typeof window
                        ? [
                            new Promise((t) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => t(e()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((n) => setTimeout(() => n(e()), t)),
                    ])
                  )
                    return !0;
                }
                throw new l.N();
              }
              return !!(await (0, a.b)(() => this.getAccounts())).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new l.N();
            let r = u.chains.find((e) => e.id === t);
            if (!r) throw new o.ch(new c.nk());
            let i = new Promise((e) => {
              let n = (r) => {
                "chainId" in r &&
                  r.chainId === t &&
                  (u.emitter.off("change", n), e());
              };
              u.emitter.on("change", n);
            });
            try {
              return (
                await Promise.all([
                  n
                    .request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(t) }],
                    })
                    .then(async () => {
                      (await this.getChainId()) === t &&
                        u.emitter.emit("change", { chainId: t });
                    }),
                  i,
                ]),
                r
              );
            } catch (a) {
              if (4902 === a.code || a?.data?.originalError?.code === 4902)
                try {
                  let a,
                    c,
                    { default: l, ...d } = r.blockExplorers ?? {};
                  e?.blockExplorerUrls
                    ? (a = e.blockExplorerUrls)
                    : l && (a = [l.url, ...Object.values(d).map((e) => e.url)]),
                    (c = e?.rpcUrls?.length
                      ? e.rpcUrls
                      : [r.rpcUrls.default?.http[0] ?? ""]);
                  let p = {
                    blockExplorerUrls: a,
                    chainId: (0, s.cK)(t),
                    chainName: e?.chainName ?? r.name,
                    iconUrls: e?.iconUrls,
                    nativeCurrency: e?.nativeCurrency ?? r.nativeCurrency,
                    rpcUrls: c,
                  };
                  return (
                    await Promise.all([
                      n
                        .request({
                          method: "wallet_addEthereumChain",
                          params: [p],
                        })
                        .then(async () => {
                          if ((await this.getChainId()) === t)
                            u.emitter.emit("change", { chainId: t });
                          else
                            throw new o.vx(
                              Error(
                                "User rejected switch after adding network."
                              )
                            );
                        }),
                      i,
                    ]),
                    r
                  );
                } catch (e) {
                  throw new o.vx(e);
                }
              if (a.code === o.vx.code) throw new o.vx(a);
              throw new o.ch(a);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (u.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                m && (await u.storage?.removeItem(`${this.id}.disconnected`));
            } else
              u.emitter.emit("change", { accounts: e.map((e) => (0, r.b)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            u.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let r = await this.getAccounts();
            if (0 === r.length) return;
            let o = Number(e.chainId);
            u.emitter.emit("connect", { accounts: r, chainId: o });
            let i = await this.getProvider();
            i &&
              (h && (i.removeListener("connect", h), (h = void 0)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                i.on("accountsChanged", t)),
              n ||
                ((n = this.onChainChanged.bind(this)), i.on("chainChanged", n)),
              w || ((w = this.onDisconnect.bind(this)), i.on("disconnect", w)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (u.emitter.emit("disconnect"),
              t &&
                (n && (t.removeListener("chainChanged", n), (n = void 0)),
                w && (t.removeListener("disconnect", w), (w = void 0)),
                h || ((h = this.onConnect.bind(this)), t.on("connect", h))));
          },
        }));
      }
      d.type = "injected";
      let p = {
        coinbaseWallet: {
          id: "coinbaseWallet",
          name: "Coinbase Wallet",
          provider: (e) =>
            e?.coinbaseWalletExtension
              ? e.coinbaseWalletExtension
              : f(e, "isCoinbaseWallet"),
        },
        metaMask: {
          id: "metaMask",
          name: "MetaMask",
          provider: (e) =>
            f(e, (e) => {
              if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
                return !1;
              for (let t of [
                "isApexWallet",
                "isAvalanche",
                "isBitKeep",
                "isBlockWallet",
                "isKuCoinWallet",
                "isMathWallet",
                "isOkxWallet",
                "isOKExWallet",
                "isOneInchIOSWallet",
                "isOneInchAndroidWallet",
                "isOpera",
                "isPhantom",
                "isPortal",
                "isRabby",
                "isTokenPocket",
                "isTokenary",
                "isUniswapWallet",
                "isZerion",
              ])
                if (e[t]) return !1;
              return !0;
            }),
        },
        phantom: {
          id: "phantom",
          name: "Phantom",
          provider: (e) =>
            e?.phantom?.ethereum ? e.phantom?.ethereum : f(e, "isPhantom"),
        },
      };
      function f(e, t) {
        function n(e) {
          return "function" == typeof t ? t(e) : "string" != typeof t || e[t];
        }
        let r = e.ethereum;
        return r?.providers
          ? r.providers.find((e) => n(e))
          : r && n(r)
          ? r
          : void 0;
      }
    },
    2091: (e, t, n) => {
      "use strict";
      let r, o, i, a, s, c, l, u, d, p, f, h, w, m, y, g;
      n.d(t, { S: () => Y });
      let b = new Map([
        [8217, "apostrophe"],
        [8260, "fraction slash"],
        [12539, "middle dot"],
      ]);
      function A(e) {
        var t;
        let n;
        return (
          (t = (function (e) {
            let t = 0;
            function n() {
              return (e[t++] << 8) | e[t++];
            }
            let r = n(),
              o = 1,
              i = [0, 1];
            for (let e = 1; e < r; e++) i.push((o += n()));
            let a = n(),
              s = t;
            t += a;
            let c = 0,
              l = 0;
            function u() {
              return (
                0 == c && ((l = (l << 8) | e[t++]), (c = 8)), (l >> --c) & 1
              );
            }
            let d = 0x80000000 - 1,
              p = 0;
            for (let e = 0; e < 31; e++) p = (p << 1) | u();
            let f = [],
              h = 0,
              w = 0x80000000;
            for (;;) {
              let e = Math.floor(((p - h + 1) * o - 1) / w),
                t = 0,
                n = r;
              for (; n - t > 1; ) {
                let r = (t + n) >>> 1;
                e < i[r] ? (n = r) : (t = r);
              }
              if (0 == t) break;
              f.push(t);
              let a = h + Math.floor((w * i[t]) / o),
                s = h + Math.floor((w * i[t + 1]) / o) - 1;
              for (; ((a ^ s) & 0x40000000) == 0; )
                (p = ((p << 1) & d) | u()),
                  (a = (a << 1) & d),
                  (s = ((s << 1) & d) | 1);
              for (; a & ~s & 0x20000000; )
                (p = (0x40000000 & p) | ((p << 1) & (d >>> 1)) | u()),
                  (a = (a << 1) ^ 0x40000000),
                  (s = ((0x40000000 ^ s) << 1) | 0x40000001);
              (h = a), (w = 1 + s - a);
            }
            let m = r - 4;
            return f.map((t) => {
              switch (t - m) {
                case 3:
                  return m + 65792 + ((e[s++] << 16) | (e[s++] << 8) | e[s++]);
                case 2:
                  return m + 256 + ((e[s++] << 8) | e[s++]);
                case 1:
                  return m + e[s++];
                default:
                  return t - 1;
              }
            });
          })(
            (function (e) {
              let t = [];
              [
                ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              ].forEach((e, n) => (t[e.charCodeAt(0)] = n));
              let n = e.length,
                r = new Uint8Array((6 * n) >> 3);
              for (let o = 0, i = 0, a = 0, s = 0; o < n; o++)
                (s = (s << 6) | t[e.charCodeAt(o)]),
                  (a += 6) >= 8 && (r[i++] = s >> (a -= 8));
              return r;
            })(e)
          )),
          (n = 0),
          () => t[n++]
        );
      }
      function v(e, t = 0) {
        let n = [];
        for (;;) {
          let r = e(),
            o = e();
          if (!o) break;
          t += r;
          for (let e = 0; e < o; e++) n.push(t + e);
          t += o + 1;
        }
        return n;
      }
      function C(e) {
        return k(() => {
          let t = v(e);
          if (t.length) return t;
        });
      }
      function x(e) {
        let t = [];
        for (;;) {
          let n = e();
          if (0 == n) break;
          t.push(
            (function (e, t) {
              let n = 1 + t(),
                r = t(),
                o = k(t);
              return E(o.length, 1 + e, t).flatMap((e, t) => {
                let [i, ...a] = e;
                return Array(o[t])
                  .fill()
                  .map((e, t) => {
                    let o = t * r;
                    return [i + t * n, a.map((e) => e + o)];
                  });
              });
            })(n, e)
          );
        }
        for (;;) {
          var n, r;
          let o = e() - 1;
          if (o < 0) break;
          t.push(
            ((n = o), E(1 + (r = e)(), 1 + n, r).map((e) => [e[0], e.slice(1)]))
          );
        }
        return t.flat();
      }
      function k(e) {
        let t = [];
        for (;;) {
          let n = e(t.length);
          if (!n) break;
          t.push(n);
        }
        return t;
      }
      function E(e, t, n) {
        let r = Array(e)
          .fill()
          .map(() => []);
        for (let o = 0; o < t; o++)
          (function (e, t) {
            let n = Array(e);
            for (let o = 0, i = 0; o < e; o++) {
              var r;
              n[o] = i += 1 & (r = t()) ? ~r >> 1 : r >> 1;
            }
            return n;
          })(e, n).forEach((e, t) => r[t].push(e));
        return r;
      }
      function I(e) {
        return `{${e.toString(16).toUpperCase().padStart(2, "0")}}`;
      }
      function B(e) {
        let t = e.length;
        if (t < 4096) return String.fromCodePoint(...e);
        let n = [];
        for (let r = 0; r < t; )
          n.push(String.fromCodePoint(...e.slice(r, (r += 4096))));
        return n.join("");
      }
      function S(e, t) {
        let n = e.length,
          r = n - t.length;
        for (let o = 0; 0 == r && o < n; o++) r = e[o] - t[o];
        return r;
      }
      let N = 55204;
      function T(e) {
        return (e >> 24) & 255;
      }
      function O(e) {
        return 0xffffff & e;
      }
      function P(e) {
        return e >= 44032 && e < N;
      }
      function D(e) {
        r ||
          (function () {
            let e = A(
              "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"
            );
            for (let [t, n] of ((r = new Map(
              C(e).flatMap((e, t) => e.map((e) => [e, (t + 1) << 24]))
            )),
            (o = new Set(v(e))),
            (i = new Map()),
            (a = new Map()),
            x(e))) {
              if (!o.has(t) && 2 == n.length) {
                let [e, r] = n,
                  o = a.get(e);
                o || ((o = new Map()), a.set(e, o)), o.set(r, t);
              }
              i.set(t, n.reverse());
            }
          })();
        let t = [],
          n = [],
          s = !1;
        function c(e) {
          let n = r.get(e);
          n && ((s = !0), (e |= n)), t.push(e);
        }
        for (let r of e)
          for (;;) {
            if (r < 128) t.push(r);
            else if (P(r)) {
              let e = r - 44032,
                t = (e / 588) | 0,
                n = ((e % 588) / 28) | 0,
                o = e % 28;
              c(4352 + t), c(4449 + n), o > 0 && c(4519 + o);
            } else {
              let e = i.get(r);
              e ? n.push(...e) : c(r);
            }
            if (!n.length) break;
            r = n.pop();
          }
        if (s && t.length > 1) {
          let e = T(t[0]);
          for (let n = 1; n < t.length; n++) {
            let r = T(t[n]);
            if (0 == r || e <= r) {
              e = r;
              continue;
            }
            let o = n - 1;
            for (;;) {
              let n = t[o + 1];
              if (((t[o + 1] = t[o]), (t[o] = n), !o || (e = T(t[--o])) <= r))
                break;
            }
            e = T(t[n]);
          }
        }
        return t;
      }
      function M(e) {
        return D(e).map(O);
      }
      function W(e) {
        return (function (e) {
          let t = [],
            n = [],
            r = -1,
            o = 0;
          for (let i of e) {
            let e = T(i),
              s = O(i);
            if (-1 == r) 0 == e ? (r = s) : t.push(s);
            else if (o > 0 && o >= e)
              0 == e ? (t.push(r, ...n), (n.length = 0), (r = s)) : n.push(s),
                (o = e);
            else {
              let i = (function (e, t) {
                if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470)
                  return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                {
                  if (P(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0)
                    return e + (t - 4519);
                  let n = a.get(e);
                  return n && (n = n.get(t)) ? n : -1;
                }
              })(r, s);
              i >= 0
                ? (r = i)
                : 0 == o && 0 == e
                ? (t.push(r), (r = s))
                : (n.push(s), (o = e));
            }
          }
          return r >= 0 && t.push(r, ...n), t;
        })(D(e));
      }
      let F = (e) => Array.from(e);
      function R(e, t) {
        return e.P.has(t) || e.Q.has(t);
      }
      class Q extends Array {
        get is_emoji() {
          return !0;
        }
      }
      function U() {
        let e, t;
        if (s) return;
        let n = A(
            "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"
          ),
          r = () => v(n),
          o = () => new Set(r()),
          i = (e, t) => t.forEach((t) => e.add(t));
        (s = new Map(x(n))),
          (c = o()),
          (l = r()),
          (u = new Set(r().map((e) => l[e]))),
          (l = new Set(l)),
          (d = o()),
          (p = o());
        let a = C(n),
          b = n(),
          E = () => {
            let e = new Set();
            return r().forEach((t) => i(e, a[t])), i(e, r()), e;
          };
        (f = k((e) => {
          let t = k(n).map((e) => e + 96);
          if (t.length) {
            let r = e >= b;
            (t[0] -= 32), (t = B(t)), r && (t = `Restricted[${t}]`);
            let o = E();
            return { N: t, P: o, Q: E(), M: !n(), R: r };
          }
        })),
          (h = o()),
          (w = new Map());
        let I = r()
          .concat(F(h))
          .sort((e, t) => e - t);
        for (let { V: e, M: t } of (I.forEach((e, t) => {
          let r = n(),
            o = (I[t] = r ? I[t - r] : { V: [], M: new Map() });
          o.V.push(e), h.has(e) || w.set(e, o);
        }),
        new Set(w.values()))) {
          let n = [];
          for (let t of e) {
            let e = f.filter((e) => R(e, t)),
              r = n.find(({ G: t }) => e.some((e) => t.has(e)));
            r || ((r = { G: new Set(), V: [] }), n.push(r)),
              r.V.push(t),
              i(r.G, e);
          }
          let r = n.flatMap((e) => F(e.G));
          for (let { G: e, V: o } of n) {
            let n = new Set(r.filter((t) => !e.has(t)));
            for (let e of o) t.set(e, n);
          }
        }
        m = new Set();
        let N = new Set(),
          T = (e) => (m.has(e) ? N.add(e) : m.add(e));
        for (let e of f) {
          for (let t of e.P) T(t);
          for (let t of e.Q) T(t);
        }
        for (let e of m) w.has(e) || N.has(e) || w.set(e, 1);
        for (let r of (i(m, D(m).map(O)),
        (y = ((e = []),
        (t = v(n)),
        (function t({ S: n, B: r }, o, i) {
          if (!(4 & n) || i !== o[o.length - 1])
            for (let a of (2 & n && (i = o[o.length - 1]),
            1 & n && e.push(o),
            r))
              for (let e of a.Q) t(a, [...o, e], i);
        })(
          (function e(r) {
            return {
              S: n(),
              B: k(() => {
                let r = v(n).map((e) => t[e]);
                if (r.length) return e(r);
              }),
              Q: r,
            };
          })([]),
          []
        ),
        e)
          .map((e) => Q.from(e))
          .sort(S)),
        (g = new Map()),
        y)) {
          let e = [g];
          for (let t of r) {
            let n = e.map((e) => {
              let n = e.get(t);
              return n || ((n = new Map()), e.set(t, n)), n;
            });
            65039 === t ? e.push(...n) : (e = n);
          }
          for (let t of e) t.V = r;
        }
      }
      function L(e) {
        return (z(e) ? "" : `${q(j([e]))} `) + I(e);
      }
      function q(e) {
        return `"${e}"\u200E`;
      }
      function j(e, t = 1 / 0, n = I) {
        var r, o;
        let i = [];
        (r = e[0]),
          U(),
          l.has(r) && i.push("◌"),
          e.length > t &&
            ((t >>= 1), (e = [...e.slice(0, t), 8230, ...e.slice(-t)]));
        let a = 0,
          s = e.length;
        for (let t = 0; t < s; t++) {
          let r = e[t];
          z(r) && (i.push(B(e.slice(a, t))), i.push(n(r)), (a = t + 1));
        }
        return i.push(B(e.slice(a, s))), i.join("");
      }
      function z(e) {
        return U(), d.has(e);
      }
      function K(e) {
        return Error(`disallowed character: ${L(e)}`);
      }
      function G(e, t) {
        let n = L(t),
          r = f.find((e) => e.P.has(t));
        return (
          r && (n = `${r.N} ${n}`), Error(`illegal mixture: ${e.N} + ${n}`)
        );
      }
      function J(e) {
        return Error(`illegal placement: ${e}`);
      }
      function H(e) {
        return e.filter((e) => 65039 != e);
      }
      let V = "valid";
      function Y(e) {
        var t;
        return (t = (function (e, t, n) {
          if (!e) return [];
          U();
          let r = 0;
          return e.split(".").map((e) => {
            let o = (function (e) {
                let t = [];
                for (let n = 0, r = e.length; n < r; ) {
                  let r = e.codePointAt(n);
                  (n += r < 65536 ? 1 : 2), t.push(r);
                }
                return t;
              })(e),
              i = { input: o, offset: r };
            r += o.length + 1;
            try {
              let e,
                r = (i.tokens = (function (e, t, n) {
                  let r = [],
                    o = [];
                  for (e = e.slice().reverse(); e.length; ) {
                    let i = (function (e, t) {
                      let n,
                        r = g,
                        o = e.length;
                      for (; o && (r = r.get(e[--o])); ) {
                        let { V: i } = r;
                        i &&
                          ((n = i),
                          t && t.push(...e.slice(o).reverse()),
                          (e.length = o));
                      }
                      return n;
                    })(e);
                    if (i) o.length && (r.push(t(o)), (o = [])), r.push(n(i));
                    else {
                      let t = e.pop();
                      if (m.has(t)) o.push(t);
                      else {
                        let e = s.get(t);
                        if (e) o.push(...e);
                        else if (!c.has(t)) throw K(t);
                      }
                    }
                  }
                  return o.length && r.push(t(o)), r;
                })(o, t, n)),
                a = r.length;
              if (!a) throw Error("empty label");
              let d = (i.output = r.flat());
              for (let e = d.lastIndexOf(95); e > 0; )
                if (95 !== d[--e])
                  throw Error("underscore allowed only at start");
              if (
                !(i.emoji = a > 1 || r[0].is_emoji) &&
                d.every((e) => e < 128)
              ) {
                if (d.length >= 4 && 45 == d[2] && 45 == d[3])
                  throw Error(`invalid label extension: "${B(d.slice(0, 4))}"`);
                e = "ASCII";
              } else {
                let t = r.flatMap((e) => (e.is_emoji ? [] : e));
                if (t.length) {
                  if (l.has(d[0])) throw J("leading combining mark");
                  for (let e = 1; e < a; e++) {
                    let t = r[e];
                    if (!t.is_emoji && l.has(t[0]))
                      throw J(
                        `emoji + combining mark: "${B(r[e - 1])} + ${j([
                          t[0],
                        ])}"`
                      );
                  }
                  !(function (e) {
                    let t = e[0],
                      n = b.get(t);
                    if (n) throw J(`leading ${n}`);
                    let r = e.length,
                      o = -1;
                    for (let i = 1; i < r; i++) {
                      t = e[i];
                      let r = b.get(t);
                      if (r) {
                        if (o == i) throw J(`${n} + ${r}`);
                        (o = i + 1), (n = r);
                      }
                    }
                    if (o == r) throw J(`trailing ${n}`);
                  })(d);
                  let n = F(new Set(t)),
                    [o] = (function (e) {
                      let t = f;
                      for (let n of e) {
                        let e = t.filter((e) => R(e, n));
                        if (!e.length)
                          if (f.some((e) => R(e, n))) throw G(t[0], n);
                          else throw K(n);
                        if (((t = e), 1 == e.length)) break;
                      }
                      return t;
                    })(n);
                  (function (e, t) {
                    for (let n of t) if (!R(e, n)) throw G(e, n);
                    if (e.M) {
                      var n;
                      let e = ((n = t), D(n).map(O));
                      for (let t = 1, n = e.length; t < n; t++)
                        if (u.has(e[t])) {
                          let r = t + 1;
                          for (let o; r < n && u.has((o = e[r])); r++)
                            for (let n = t; n < r; n++)
                              if (e[n] == o)
                                throw Error(
                                  `duplicate non-spacing marks: ${L(o)}`
                                );
                          if (r - t > 4)
                            throw Error(
                              `excessive non-spacing marks: ${q(
                                j(e.slice(t - 1, r))
                              )} (${r - t}/4)`
                            );
                          t = r;
                        }
                    }
                  })(o, t),
                    (function (e, t) {
                      let n,
                        r = [];
                      for (let e of t) {
                        let t = w.get(e);
                        if (1 === t) return;
                        if (t) {
                          let r = t.M.get(e);
                          if (
                            !(n = n ? n.filter((e) => r.has(e)) : F(r)).length
                          )
                            return;
                        } else r.push(e);
                      }
                      if (n) {
                        for (let t of n)
                          if (r.every((e) => R(t, e)))
                            throw Error(
                              `whole-script confusable: ${e.N}/${t.N}`
                            );
                      }
                    })(o, n),
                    (e = o.N);
                } else e = "Emoji";
              }
              i.type = e;
            } catch (e) {
              i.error = e;
            }
            return i;
          });
        })(e, W, H))
          .map(({ input: e, error: n, output: r }) => {
            if (n) {
              let r = n.message;
              throw Error(
                1 == t.length ? r : `Invalid label ${q(j(e, 63))}: ${r}`
              );
            }
            return B(r);
          })
          .join(".");
      }
    },
    2145: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => u });
      var r = n(87660),
        o = n(64997),
        i = n(53031),
        a = n(34250),
        s = n(12115),
        c = n(45566);
      let l = (e) => "object" == typeof e && !Array.isArray(e);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, i.U)(e);
        return (function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : a.b,
            o = (0, s.useRef)([]),
            i = (0, c.useSyncExternalStoreWithSelector)(
              e,
              t,
              n,
              (e) => e,
              (e, t) => {
                if (l(e) && l(t) && o.current.length) {
                  for (let n of o.current) if (!r(e[n], t[n])) return !1;
                  return !0;
                }
                return r(e, t);
              }
            );
          return (0, s.useMemo)(() => {
            if (l(i)) {
              let e = { ...i },
                t = {};
              for (let [n, r] of Object.entries(e))
                t = {
                  ...t,
                  [n]: {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (o.current.includes(n) || o.current.push(n), r),
                  },
                };
              return Object.defineProperties(e, t), e;
            }
            return i;
          }, [i]);
        })(
          (e) => (0, r.F)(t, { onChange: e }),
          () => (0, o.s)(t)
        );
      }
    },
    2401: function (e, t, n) {
      var r;
      !(function (o, i) {
        "use strict";
        var a = "function",
          s = "undefined",
          c = "object",
          l = "string",
          u = "major",
          d = "model",
          p = "name",
          f = "type",
          h = "vendor",
          w = "version",
          m = "architecture",
          y = "console",
          g = "mobile",
          b = "tablet",
          A = "smarttv",
          v = "wearable",
          C = "embedded",
          x = "Amazon",
          k = "Apple",
          E = "ASUS",
          I = "BlackBerry",
          B = "Browser",
          S = "Chrome",
          N = "Firefox",
          T = "Google",
          O = "Huawei",
          P = "Microsoft",
          D = "Motorola",
          M = "Opera",
          W = "Samsung",
          F = "Sharp",
          R = "Sony",
          Q = "Xiaomi",
          U = "Zebra",
          L = "Facebook",
          q = "Chromium OS",
          j = "Mac OS",
          z = " Browser",
          K = function (e, t) {
            var n = {};
            for (var r in e)
              t[r] && t[r].length % 2 == 0
                ? (n[r] = t[r].concat(e[r]))
                : (n[r] = e[r]);
            return n;
          },
          G = function (e) {
            for (var t = {}, n = 0; n < e.length; n++)
              t[e[n].toUpperCase()] = e[n];
            return t;
          },
          J = function (e, t) {
            return typeof e === l && -1 !== H(t).indexOf(H(e));
          },
          H = function (e) {
            return e.toLowerCase();
          },
          V = function (e, t) {
            if (typeof e === l)
              return (
                (e = e.replace(/^\s\s*/, "")),
                typeof t === s ? e : e.substring(0, 500)
              );
          },
          Y = function (e, t) {
            for (var n, r, o, s, l, u, d = 0; d < t.length && !l; ) {
              var p = t[d],
                f = t[d + 1];
              for (n = r = 0; n < p.length && !l && p[n]; )
                if ((l = p[n++].exec(e)))
                  for (o = 0; o < f.length; o++)
                    (u = l[++r]),
                      typeof (s = f[o]) === c && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == a
                            ? (this[s[0]] = s[1].call(this, u))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                          ? typeof s[1] !== a || (s[1].exec && s[1].test)
                            ? (this[s[0]] = u ? u.replace(s[1], s[2]) : void 0)
                            : (this[s[0]] = u
                                ? s[1].call(this, u, s[2])
                                : void 0)
                          : 4 === s.length &&
                            (this[s[0]] = u
                              ? s[3].call(this, u.replace(s[1], s[2]))
                              : i)
                        : (this[s] = u || i);
              d += 2;
            }
          },
          Z = function (e, t) {
            for (var n in t)
              if (typeof t[n] === c && t[n].length > 0) {
                for (var r = 0; r < t[n].length; r++)
                  if (J(t[n][r], e)) return "?" === n ? i : n;
              } else if (J(t[n], e)) return "?" === n ? i : n;
            return t.hasOwnProperty("*") ? t["*"] : e;
          },
          X = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          _ = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [w, [p, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [w, [p, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [p, w],
              [/opios[\/ ]+([\w\.]+)/i],
              [w, [p, M + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [w, [p, M + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [w, [p, M]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [w, [p, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [w, [p, "Maxthon"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
                /(heytap|ovi|115)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [p, w],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [w, [p, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [w, [p, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [w, [p, "UC" + B]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [w, [p, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [w, [p, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [w, [p, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [w, [p, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [w, [p, "Smart Lenovo " + B]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[p, /(.+)/, "$1 Secure " + B], w],
              [/\bfocus\/([\w\.]+)/i],
              [w, [p, N + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [w, [p, M + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [w, [p, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [w, [p, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [w, [p, M + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [w, [p, "MIUI" + z]],
              [/fxios\/([\w\.-]+)/i],
              [w, [p, N]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [w, [p, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [[p, /(.+)/, "$1Browser"], w],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[p, /(.+)/, "$1" + z], w],
              [/samsungbrowser\/([\w\.]+)/i],
              [w, [p, W + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [w, [p, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[p, "Sogou Mobile"], w],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
              ],
              [p, w],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [p],
              [
                /ome\/([\w\.]+) \w* ?(iron) saf/i,
                /ome\/([\w\.]+).+qihu (360)[es]e/i,
              ],
              [w, p],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[p, L], w],
              [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
              ],
              [p, w],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [w, [p, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [w, [p, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [w, [p, S + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[p, S + " WebView"], w],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [w, [p, "Android " + B]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [p, w],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [w, [p, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [w, p],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                p,
                [
                  w,
                  Z,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [p, w],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[p, "Netscape"], w],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [p, w],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [w, [p, N + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              [p, [w, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [p, [w, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[m, "amd64"]],
              [/(ia32(?=;))/i],
              [[m, H]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[m, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[m, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[m, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[m, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[m, /ower/, "", H]],
              [/(sun4\w)[;\)]/i],
              [[m, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[m, H]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [d, [h, W], [f, b]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [d, [h, W], [f, g]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [h, k], [f, g]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [d, [h, k], [f, b]],
              [/(macintosh);/i],
              [d, [h, k]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [h, F], [f, g]],
              [/(?:honor)([-\w ]+)[;\)]/i],
              [d, [h, "Honor"], [f, g]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [d, [h, O], [f, b]],
              [
                /(?:huawei)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [d, [h, O], [f, g]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [h, Q],
                [f, g],
              ],
              [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [h, Q],
                [f, b],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [d, [h, "OPPO"], [f, g]],
              [/\b(opd2\d{3}a?) bui/i],
              [d, [h, "OPPO"], [f, b]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [h, "Vivo"], [f, g]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [h, "Realme"], [f, g]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [d, [h, D], [f, g]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [h, D], [f, b]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [h, "LG"], [f, b]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [d, [h, "LG"], [f, g]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [d, [h, "Lenovo"], [f, b]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [d, /_/g, " "],
                [h, "Nokia"],
                [f, g],
              ],
              [/(pixel c)\b/i],
              [d, [h, T], [f, b]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [h, T], [f, g]],
              [
                /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [d, [h, R], [f, g]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [h, R],
                [f, b],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [d, [h, "OnePlus"], [f, g]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [d, [h, x], [f, b]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [h, x],
                [f, g],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, h, [f, b]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [h, I], [f, g]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [d, [h, E], [f, b]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [h, E], [f, g]],
              [/(nexus 9)/i],
              [d, [h, "HTC"], [f, b]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [h, [d, /_/g, " "], [f, g]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [d, [h, "TCL"], [f, b]],
              [/(itel) ((\w+))/i],
              [
                [h, H],
                d,
                [f, Z, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [h, "Acer"], [f, b]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [h, "Meizu"], [f, g]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [h, "Ulefone"], [f, g]],
              [
                /; (energy ?\w+)(?: bui|\))/i,
                /; energizer ([\w ]+)(?: bui|\))/i,
              ],
              [d, [h, "Energizer"], [f, g]],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [d, [h, "Cat"], [f, g]],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [d, [h, "Smartfren"], [f, g]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [d, [h, "Nothing"], [f, g]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [h, d, [f, g]],
              [
                /(imo) (tab \w+)/i,
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [h, d, [f, b]],
              [/(surface duo)/i],
              [d, [h, P], [f, b]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [h, "Fairphone"], [f, g]],
              [/(u304aa)/i],
              [d, [h, "AT&T"], [f, g]],
              [/\bsie-(\w*)/i],
              [d, [h, "Siemens"], [f, g]],
              [/\b(rct\w+) b/i],
              [d, [h, "RCA"], [f, b]],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [h, "Dell"], [f, b]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [h, "Verizon"], [f, b]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [h, "Barnes & Noble"], [f, b]],
              [/\b(tm\d{3}\w+) b/i],
              [d, [h, "NuVision"], [f, b]],
              [/\b(k88) b/i],
              [d, [h, "ZTE"], [f, b]],
              [/\b(nx\d{3}j) b/i],
              [d, [h, "ZTE"], [f, g]],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [h, "Swiss"], [f, g]],
              [/\b(zur\d{3}) b/i],
              [d, [h, "Swiss"], [f, b]],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [h, "Zeki"], [f, b]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[h, "Dragon Touch"], d, [f, b]],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [h, "Insignia"], [f, b]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [h, "NextBook"], [f, b]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[h, "Voice"], d, [f, g]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[h, "LvTel"], d, [f, g]],
              [/\b(ph-1) /i],
              [d, [h, "Essential"], [f, g]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [h, "Envizen"], [f, b]],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [h, "MachSpeed"], [f, b]],
              [/\btu_(1491) b/i],
              [d, [h, "Rotor"], [f, b]],
              [/(shield[\w ]+) b/i],
              [d, [h, "Nvidia"], [f, b]],
              [/(sprint) (\w+)/i],
              [h, d, [f, g]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [h, P],
                [f, g],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [h, U], [f, b]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [h, U], [f, g]],
              [/smart-tv.+(samsung)/i],
              [h, [f, A]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [h, W],
                [f, A],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [h, "LG"],
                [f, A],
              ],
              [/(apple) ?tv/i],
              [h, [d, k + " TV"], [f, A]],
              [/crkey/i],
              [
                [d, S + "cast"],
                [h, T],
                [f, A],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [h, x], [f, A]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [h, F], [f, A]],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [h, R], [f, A]],
              [/(mitv-\w{5}) bui/i],
              [d, [h, Q], [f, A]],
              [/Hbbtv.*(technisat) (.*);/i],
              [h, d, [f, A]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [h, V],
                [d, V],
                [f, A],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[f, A]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [h, d, [f, y]],
              [/droid.+; (shield) bui/i],
              [d, [h, "Nvidia"], [f, y]],
              [/(playstation [345portablevi]+)/i],
              [d, [h, R], [f, y]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [h, P], [f, y]],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [d, [h, W], [f, v]],
              [/((pebble))app/i],
              [h, d, [f, v]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [h, k], [f, v]],
              [/droid.+; (glass) \d/i],
              [d, [h, T], [f, v]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [h, U], [f, v]],
              [/droid.+; (glass) \d/i],
              [d, [h, T], [f, v]],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [h, d, [f, v]],
              [/; (quest( \d| pro)?)/i],
              [d, [h, L], [f, v]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [h, [f, C]],
              [/(aeobc)\b/i],
              [d, [h, x], [f, C]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [d, [f, g]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [f, b]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[f, b]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[f, g]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [d, [h, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [w, [p, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [p, w],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [w, [p, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [p, w],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [w, p],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [p, w],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [p, [w, Z, X]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [w, Z, X],
                [p, "Windows"],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [w, /_/g, "."],
                [p, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [p, j],
                [w, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [w, p],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [p, w],
              [/\(bb(10);/i],
              [w, [p, I]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [w, [p, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [w, [p, N + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [w, [p, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [w, [p, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [w, [p, S + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[p, q], w],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [p, w],
              [/(sunos) ?([\w\.\d]*)/i],
              [[p, "Solaris"], w],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [p, w],
            ],
          },
          $ = function (e, t) {
            if ((typeof e === c && ((t = e), (e = i)), !(this instanceof $)))
              return new $(e, t).getResult();
            var n = typeof o !== s && o.navigator ? o.navigator : i,
              r = e || (n && n.userAgent ? n.userAgent : ""),
              y = n && n.userAgentData ? n.userAgentData : i,
              A = t ? K(_, t) : _,
              v = n && n.userAgent == r;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t[p] = i),
                  (t[w] = i),
                  Y.call(t, r, A.browser),
                  (t[u] =
                    typeof (e = t[w]) === l
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : i),
                  v &&
                    n &&
                    n.brave &&
                    typeof n.brave.isBrave == a &&
                    (t[p] = "Brave"),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[m] = i), Y.call(e, r, A.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[h] = i),
                  (e[d] = i),
                  (e[f] = i),
                  Y.call(e, r, A.device),
                  v && !e[f] && y && y.mobile && (e[f] = g),
                  v &&
                    "Macintosh" == e[d] &&
                    n &&
                    typeof n.standalone !== s &&
                    n.maxTouchPoints &&
                    n.maxTouchPoints > 2 &&
                    ((e[d] = "iPad"), (e[f] = b)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e[p] = i), (e[w] = i), Y.call(e, r, A.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e[p] = i),
                  (e[w] = i),
                  Y.call(e, r, A.os),
                  v &&
                    !e[p] &&
                    y &&
                    y.platform &&
                    "Unknown" != y.platform &&
                    (e[p] = y.platform
                      .replace(/chrome os/i, q)
                      .replace(/macos/i, j)),
                  e
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return r;
              }),
              (this.setUA = function (e) {
                return (
                  (r = typeof e === l && e.length > 500 ? V(e, 500) : e), this
                );
              }),
              this.setUA(r),
              this
            );
          };
        ($.VERSION = "1.0.40"),
          ($.BROWSER = G([p, w, u])),
          ($.CPU = G([m])),
          ($.DEVICE = G([d, h, f, y, g, A, b, v, C])),
          ($.ENGINE = $.OS = G([p, w])),
          typeof t !== s
            ? (e.exports && (t = e.exports = $), (t.UAParser = $))
            : n.amdO
            ? i ===
                (r = function () {
                  return $;
                }.call(t, n, t, e)) || (e.exports = r)
            : typeof o !== s && (o.UAParser = $);
        var ee = typeof o !== s && (o.jQuery || o.Zepto);
        if (ee && !ee.ua) {
          var et = new $();
          (ee.ua = et.getResult()),
            (ee.ua.get = function () {
              return et.getUA();
            }),
            (ee.ua.set = function (e) {
              et.setUA(e);
              var t = et.getResult();
              for (var n in t) ee.ua[n] = t[n];
            });
        }
      })("object" == typeof window ? window : this);
    },
    2558: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => s });
      var r =
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        o = {
          rounded: 'SFRounded, ui-rounded, "SF Pro Rounded", '.concat(r),
          system: r,
        },
        i = {
          large: {
            actionButton: "9999px",
            connectButton: "12px",
            modal: "24px",
            modalMobile: "28px",
          },
          medium: {
            actionButton: "10px",
            connectButton: "8px",
            modal: "16px",
            modalMobile: "18px",
          },
          none: {
            actionButton: "0px",
            connectButton: "0px",
            modal: "0px",
            modalMobile: "0px",
          },
          small: {
            actionButton: "4px",
            connectButton: "4px",
            modal: "8px",
            modalMobile: "8px",
          },
        },
        a = {
          large: { modalOverlay: "blur(20px)" },
          none: { modalOverlay: "blur(0px)" },
          small: { modalOverlay: "blur(4px)" },
        },
        s = (e) => {
          let {
            borderRadius: t = "large",
            fontStack: n = "rounded",
            overlayBlur: r = "none",
          } = e;
          return {
            blurs: { modalOverlay: a[r].modalOverlay },
            fonts: { body: o[n] },
            radii: {
              actionButton: i[t].actionButton,
              connectButton: i[t].connectButton,
              menuButton: i[t].connectButton,
              modal: i[t].modal,
              modalMobile: i[t].modalMobile,
            },
          };
        };
    },
    3029: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => c });
      var r = n(69432),
        o = n(27493),
        i = n(87632),
        a = n(12914);
      let s = { "0x0": "reverted", "0x1": "success" };
      async function c(e, { hash: t }) {
        let n = await e.request(
          { method: "eth_getTransactionReceipt", params: [t] },
          { dedupe: !0 }
        );
        if (!n) throw new r.Kc({ hash: t });
        return (
          e.chain?.formatters?.transactionReceipt?.format ||
          function (e) {
            let t = {
              ...e,
              blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
              contractAddress: e.contractAddress ? e.contractAddress : null,
              cumulativeGasUsed: e.cumulativeGasUsed
                ? BigInt(e.cumulativeGasUsed)
                : null,
              effectiveGasPrice: e.effectiveGasPrice
                ? BigInt(e.effectiveGasPrice)
                : null,
              gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
              logs: e.logs ? e.logs.map((e) => (0, i.e)(e)) : null,
              to: e.to ? e.to : null,
              transactionIndex: e.transactionIndex
                ? (0, o.ME)(e.transactionIndex)
                : null,
              status: e.status ? s[e.status] : null,
              type: e.type ? a.b4[e.type] || e.type : null,
            };
            return (
              e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
              e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
              t
            );
          }
        )(n);
      }
    },
    5512: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => tY });
      var r = n(14493),
        o = n(69330),
        i = n(60367),
        a = n(13861),
        s = n(54335),
        c = n(67622),
        l = n(41052),
        u = n(95041),
        d = n(32160),
        p = n(7612),
        f = n(34524),
        h = n(3488);
      async function w(e, t) {
        let {
            blockNumber: n,
            blockTag: w,
            coinType: m,
            name: y,
            gatewayUrls: g,
            strict: b,
          } = t,
          { chain: A } = e,
          v = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!A)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, a.M)({
              blockNumber: n,
              chain: A,
              contract: "ensUniversalResolver",
            });
          })(),
          C = A?.ensTlds;
        if (C && !C.some((e) => y.endsWith(e))) return null;
        try {
          let t = (0, i.p)({
              abi: r.Rm,
              functionName: "addr",
              ...(null != m
                ? { args: [(0, d.k)(y), BigInt(m)] }
                : { args: [(0, d.k)(y)] }),
            }),
            a = {
              address: v,
              abi: r.Ag,
              functionName: "resolve",
              args: [(0, c.nj)((0, p.F)(y)), t, g ?? [u.J]],
              blockNumber: n,
              blockTag: w,
            },
            l = (0, f.T)(e, h.J, "readContract"),
            b = await l(a);
          if ("0x" === b[0]) return null;
          let A = (0, o.e)({
            abi: r.Rm,
            args: null != m ? [(0, d.k)(y), BigInt(m)] : void 0,
            functionName: "addr",
            data: b[0],
          });
          if ("0x" === A || "0x00" === (0, s.B)(A)) return null;
          return A;
        } catch (e) {
          if (b) throw e;
          if ((0, l.J)(e, "resolve")) return null;
          throw e;
        }
      }
      var m = n(75794),
        y = n(55394);
      async function g(e, t) {
        let { blockNumber: n, blockTag: r, name: o } = t,
          { chain: i } = e,
          s = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!i)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, a.M)({
              blockNumber: n,
              chain: i,
              contract: "ensUniversalResolver",
            });
          })(),
          l = i?.ensTlds;
        if (l && !l.some((e) => o.endsWith(e)))
          throw Error(
            `${o} is not a valid ENS TLD (${l?.join(", ")}) for chain "${
              i.name
            }" (id: ${i.id}).`
          );
        let [u] = await (0, f.T)(
          e,
          h.J,
          "readContract"
        )({
          address: s,
          abi: [
            {
              inputs: [{ type: "bytes" }],
              name: "findResolver",
              outputs: [{ type: "address" }, { type: "bytes32" }],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "findResolver",
          args: [(0, c.nj)((0, p.F)(o))],
          blockNumber: n,
          blockTag: r,
        });
        return u;
      }
      var b = n(65830),
        A = n(81946),
        v = n(19405),
        C = n(23360),
        x = n(7671),
        k = n(76743),
        E = n(65358);
      async function I(e, t) {
        let {
            account: n = e.account,
            blockNumber: r,
            blockTag: o = "latest",
            blobs: i,
            data: a,
            gas: s,
            gasPrice: l,
            maxFeePerBlobGas: u,
            maxFeePerGas: d,
            maxPriorityFeePerGas: p,
            to: f,
            value: h,
            ...w
          } = t,
          m = n ? (0, v.J)(n) : void 0;
        try {
          (0, E.c)(t);
          let n = "bigint" == typeof r ? (0, c.cK)(r) : void 0,
            y = e.chain?.formatters?.transactionRequest?.format,
            g = (y || k.Bv)({
              ...(0, x.o)(w, { format: y }),
              from: m?.address,
              blobs: i,
              data: a,
              gas: s,
              gasPrice: l,
              maxFeePerBlobGas: u,
              maxFeePerGas: d,
              maxPriorityFeePerGas: p,
              to: f,
              value: h,
            }),
            b = await e.request({
              method: "eth_createAccessList",
              params: [g, n || o],
            });
          return { accessList: b.accessList, gasUsed: BigInt(b.gasUsed) };
        } catch (n) {
          throw (0, C.d)(n, { ...t, account: m, chain: e.chain });
        }
      }
      function B(e, { method: t }) {
        let n = {};
        return (
          "fallback" === e.transport.type &&
            e.transport.onResponse?.(
              ({ method: e, response: r, status: o, transport: i }) => {
                "success" === o && t === e && (n[r] = i.request);
              }
            ),
          (t) => n[t] || e.request
        );
      }
      async function S(e) {
        let t = B(e, { method: "eth_newBlockFilter" }),
          n = await e.request({ method: "eth_newBlockFilter" });
        return { id: n, request: t(n), type: "block" };
      }
      var N = n(99702),
        T = n(7441);
      class O extends T.C {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`, {
            name: "FilterTypeNotSupportedError",
          });
        }
      }
      var P = n(80844),
        D = n(24578),
        M = n(399),
        W = n(13423),
        F = n(21159),
        R = n(23008);
      let Q = "/docs/contract/encodeEventTopics";
      function U(e) {
        let { abi: t, eventName: n, args: r } = e,
          o = t[0];
        if (n) {
          let e = (0, R.iY)({ abi: t, name: n });
          if (!e) throw new N.M_(n, { docsPath: Q });
          o = e;
        }
        if ("event" !== o.type) throw new N.M_(void 0, { docsPath: Q });
        let i = (0, F.B)(o),
          a = (0, M.h)(i),
          s = [];
        if (r && "inputs" in o) {
          let e = o.inputs?.filter((e) => "indexed" in e && e.indexed),
            t = Array.isArray(r)
              ? r
              : Object.values(r).length > 0
              ? e?.map((e) => r[e.name]) ?? []
              : [];
          t.length > 0 &&
            (s =
              e?.map((e, n) =>
                Array.isArray(t[n])
                  ? t[n].map((r, o) => L({ param: e, value: t[n][o] }))
                  : void 0 !== t[n] && null !== t[n]
                  ? L({ param: e, value: t[n] })
                  : null
              ) ?? []);
        }
        return [a, ...s];
      }
      function L({ param: e, value: t }) {
        if ("string" === e.type || "bytes" === e.type)
          return (0, D.S)((0, P.ZJ)(t));
        if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
          throw new O(e.type);
        return (0, W.h)([e], [t]);
      }
      async function q(e, t) {
        let {
            address: n,
            abi: r,
            args: o,
            eventName: i,
            fromBlock: a,
            strict: s,
            toBlock: l,
          } = t,
          u = B(e, { method: "eth_newFilter" }),
          d = i ? U({ abi: r, args: o, eventName: i }) : void 0,
          p = await e.request({
            method: "eth_newFilter",
            params: [
              {
                address: n,
                fromBlock: "bigint" == typeof a ? (0, c.cK)(a) : a,
                toBlock: "bigint" == typeof l ? (0, c.cK)(l) : l,
                topics: d,
              },
            ],
          });
        return {
          abi: r,
          args: o,
          eventName: i,
          id: p,
          request: u(p),
          strict: !!s,
          type: "event",
        };
      }
      async function j(
        e,
        {
          address: t,
          args: n,
          event: r,
          events: o,
          fromBlock: i,
          strict: a,
          toBlock: s,
        } = {}
      ) {
        let l = o ?? (r ? [r] : void 0),
          u = B(e, { method: "eth_newFilter" }),
          d = [];
        l &&
          ((d = [
            l.flatMap((e) => U({ abi: [e], eventName: e.name, args: n })),
          ]),
          r && (d = d[0]));
        let p = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: t,
              fromBlock: "bigint" == typeof i ? (0, c.cK)(i) : i,
              toBlock: "bigint" == typeof s ? (0, c.cK)(s) : s,
              ...(d.length ? { topics: d } : {}),
            },
          ],
        });
        return {
          abi: l,
          args: n,
          eventName: r ? r.name : void 0,
          fromBlock: i,
          id: p,
          request: u(p),
          strict: !!a,
          toBlock: s,
          type: "event",
        };
      }
      async function z(e) {
        let t = B(e, { method: "eth_newPendingTransactionFilter" }),
          n = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: n, request: t(n), type: "transaction" };
      }
      var K = n(54842),
        G = n(16712);
      async function J(e, t) {
        let {
            abi: n,
            address: r,
            args: o,
            functionName: a,
            dataSuffix: s,
            ...c
          } = t,
          l = (0, i.p)({ abi: n, args: o, functionName: a });
        try {
          return await (0, f.T)(
            e,
            G.Q,
            "estimateGas"
          )({ data: `${l}${s ? s.replace("0x", "") : ""}`, to: r, ...c });
        } catch (t) {
          let e = c.account ? (0, v.J)(c.account) : void 0;
          throw (0, K.j)(t, {
            abi: n,
            address: r,
            args: o,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: a,
            sender: e?.address,
          });
        }
      }
      var H = n(24573),
        V = n(76654),
        Y = n(59742);
      async function Z(e) {
        return BigInt(await e.request({ method: "eth_blobBaseFee" }));
      }
      var X = n(23335),
        _ = n(94181),
        $ = n(27493);
      async function ee(
        e,
        { blockHash: t, blockNumber: n, blockTag: r = "latest" } = {}
      ) {
        let o,
          i = void 0 !== n ? (0, c.cK)(n) : void 0;
        return (
          (o = t
            ? await e.request(
                { method: "eth_getBlockTransactionCountByHash", params: [t] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockTransactionCountByNumber",
                  params: [i || r],
                },
                { dedupe: !!i }
              )),
          (0, $.ME)(o)
        );
      }
      var et = n(926);
      async function en(
        e,
        { address: t, blockNumber: n, blockTag: r = "latest" }
      ) {
        let o = void 0 !== n ? (0, c.cK)(n) : void 0,
          i = await e.request(
            { method: "eth_getCode", params: [t, o || r] },
            { dedupe: !!o }
          );
        if ("0x" !== i) return i;
      }
      var er = n(17255),
        eo = n(87094),
        ei = n(97118),
        ea = n(43935);
      let es = "/docs/contract/decodeEventLog";
      function ec(e) {
        let { abi: t, data: n, strict: r, topics: o } = e,
          i = r ?? !0,
          [a, ...s] = o;
        if (!a) throw new N._z({ docsPath: es });
        let c = t.find(
          (e) => "event" === e.type && a === (0, M.h)((0, F.B)(e))
        );
        if (!(c && "name" in c) || "event" !== c.type)
          throw new N.kE(a, { docsPath: es });
        let { name: l, inputs: u } = c,
          d = u?.some((e) => !("name" in e && e.name)),
          p = d ? [] : {},
          f = u
            .map((e, t) => [e, t])
            .filter(([e]) => "indexed" in e && e.indexed);
        for (let e = 0; e < f.length; e++) {
          let [t, n] = f[e],
            r = s[e];
          if (!r) throw new N.l3({ abiItem: c, param: t });
          p[d ? n : t.name || n] = (function ({ param: e, value: t }) {
            return "string" === e.type ||
              "bytes" === e.type ||
              "tuple" === e.type ||
              e.type.match(/^(.*)\[(\d+)?\]$/)
              ? t
              : ((0, ea.n)([e], t) || [])[0];
          })({ param: t, value: r });
        }
        let h = u.filter((e) => !("indexed" in e && e.indexed));
        if (h.length > 0) {
          if (n && "0x" !== n)
            try {
              let e = (0, ea.n)(h, n);
              if (e)
                if (d)
                  for (let t = 0; t < u.length; t++) p[t] = p[t] ?? e.shift();
                else for (let t = 0; t < h.length; t++) p[h[t].name] = e[t];
            } catch (e) {
              if (i) {
                if (e instanceof N.Iy || e instanceof ei.SK)
                  throw new N.fo({
                    abiItem: c,
                    data: n,
                    params: h,
                    size: (0, eo.E)(n),
                  });
                throw e;
              }
            }
          else if (i)
            throw new N.fo({ abiItem: c, data: "0x", params: h, size: 0 });
        }
        return { eventName: l, args: Object.values(p).length > 0 ? p : void 0 };
      }
      function el(e) {
        let { abi: t, args: n, logs: r, strict: o = !0 } = e,
          i = (() => {
            if (e.eventName)
              return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
          })();
        return r
          .map((e) => {
            try {
              let r = t.find(
                (t) => "event" === t.type && e.topics[0] === (0, M.h)(t)
              );
              if (!r) return null;
              let a = ec({ ...e, abi: [r], strict: o });
              if (
                (i && !i.includes(a.eventName)) ||
                !(function (e) {
                  let { args: t, inputs: n, matchArgs: r } = e;
                  if (!r) return !0;
                  if (!t) return !1;
                  function o(e, t, n) {
                    try {
                      if ("address" === e.type) return (0, er.h)(t, n);
                      if ("string" === e.type || "bytes" === e.type)
                        return (0, D.S)((0, P.ZJ)(t)) === n;
                      return t === n;
                    } catch {
                      return !1;
                    }
                  }
                  return Array.isArray(t) && Array.isArray(r)
                    ? r.every((e, r) => {
                        if (null == e) return !0;
                        let i = n[r];
                        return (
                          !!i &&
                          (Array.isArray(e) ? e : [e]).some((e) =>
                            o(i, e, t[r])
                          )
                        );
                      })
                    : !(
                        "object" != typeof t ||
                        Array.isArray(t) ||
                        "object" != typeof r ||
                        Array.isArray(r)
                      ) &&
                        Object.entries(r).every(([e, r]) => {
                          if (null == r) return !0;
                          let i = n.find((t) => t.name === e);
                          return (
                            !!i &&
                            (Array.isArray(r) ? r : [r]).some((n) =>
                              o(i, n, t[e])
                            )
                          );
                        });
                })({ args: a.args, inputs: r.inputs, matchArgs: n })
              )
                return null;
              return { ...a, ...e };
            } catch (r) {
              let t, n;
              if (r instanceof N.kE) return null;
              if (r instanceof N.fo || r instanceof N.l3) {
                if (o) return null;
                (t = r.abiItem.name),
                  (n = r.abiItem.inputs?.some((e) => !("name" in e && e.name)));
              }
              return { ...e, args: n ? [] : {}, eventName: t };
            }
          })
          .filter(Boolean);
      }
      var eu = n(87632);
      async function ed(
        e,
        {
          address: t,
          blockHash: n,
          fromBlock: r,
          toBlock: o,
          event: i,
          events: a,
          args: s,
          strict: l,
        } = {}
      ) {
        let u,
          d = a ?? (i ? [i] : void 0),
          p = [];
        d &&
          ((p = [
            d.flatMap((e) =>
              U({ abi: [e], eventName: e.name, args: a ? void 0 : s })
            ),
          ]),
          i && (p = p[0]));
        let f = (
          n
            ? await e.request({
                method: "eth_getLogs",
                params: [{ address: t, topics: p, blockHash: n }],
              })
            : await e.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: t,
                    topics: p,
                    fromBlock: "bigint" == typeof r ? (0, c.cK)(r) : r,
                    toBlock: "bigint" == typeof o ? (0, c.cK)(o) : o,
                  },
                ],
              })
        ).map((e) => (0, eu.e)(e));
        return d ? el({ abi: d, args: s, logs: f, strict: l ?? !1 }) : f;
      }
      async function ep(e, t) {
        let {
            abi: n,
            address: r,
            args: o,
            blockHash: i,
            eventName: a,
            fromBlock: s,
            toBlock: c,
            strict: l,
          } = t,
          u = a ? (0, R.iY)({ abi: n, name: a }) : void 0,
          d = u ? void 0 : n.filter((e) => "event" === e.type);
        return (0, f.T)(
          e,
          ed,
          "getLogs"
        )({
          address: r,
          args: o,
          blockHash: i,
          event: u,
          events: d,
          fromBlock: s,
          toBlock: c,
          strict: l,
        });
      }
      class ef extends T.C {
        constructor({ address: e }) {
          super(`No EIP-712 domain found on contract "${e}".`, {
            metaMessages: [
              "Ensure that:",
              `- The contract is deployed at the address "${e}".`,
              "- `eip712Domain()` function exists on the contract.",
              "- `eip712Domain()` function matches signature to ERC-5267 specification.",
            ],
            name: "Eip712DomainNotFoundError",
          });
        }
      }
      async function eh(e, t) {
        let { address: n, factory: r, factoryData: o } = t;
        try {
          let [t, i, a, s, c, l, u] = await (0, f.T)(
            e,
            h.J,
            "readContract"
          )({
            abi: ew,
            address: n,
            functionName: "eip712Domain",
            factory: r,
            factoryData: o,
          });
          return {
            domain: {
              name: i,
              version: a,
              chainId: Number(s),
              verifyingContract: c,
              salt: l,
            },
            extensions: u,
            fields: t,
          };
        } catch (e) {
          if (
            "ContractFunctionExecutionError" === e.name &&
            "ContractFunctionZeroDataError" === e.cause.name
          )
            throw new ef({ address: n });
          throw e;
        }
      }
      let ew = [
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { name: "fields", type: "bytes1" },
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
            { name: "salt", type: "bytes32" },
            { name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      async function em(
        e,
        {
          blockCount: t,
          blockNumber: n,
          blockTag: r = "latest",
          rewardPercentiles: o,
        }
      ) {
        var i;
        let a = "bigint" == typeof n ? (0, c.cK)(n) : void 0;
        return {
          baseFeePerGas: (i = await e.request(
            { method: "eth_feeHistory", params: [(0, c.cK)(t), a || r, o] },
            { dedupe: !!a }
          )).baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: i.gasUsedRatio,
          oldestBlock: BigInt(i.oldestBlock),
          reward: i.reward?.map((e) => e.map((e) => BigInt(e))),
        };
      }
      async function ey(e, { filter: t }) {
        let n = "strict" in t && t.strict,
          r = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id],
          });
        if ("string" == typeof r[0]) return r;
        let o = r.map((e) => (0, eu.e)(e));
        return "abi" in t && t.abi ? el({ abi: t.abi, logs: o, strict: n }) : o;
      }
      async function eg(e, { filter: t }) {
        let n = t.strict ?? !1,
          r = (
            await t.request({ method: "eth_getFilterLogs", params: [t.id] })
          ).map((e) => (0, eu.e)(e));
        return t.abi ? el({ abi: t.abi, logs: r, strict: n }) : r;
      }
      var eb = n(39112);
      async function eA(
        e,
        { address: t, blockNumber: n, blockTag: r, storageKeys: o }
      ) {
        let i = void 0 !== n ? (0, c.cK)(n) : void 0;
        var a = await e.request({
          method: "eth_getProof",
          params: [t, o, i || (r ?? "latest")],
        });
        return {
          ...a,
          balance: a.balance ? BigInt(a.balance) : void 0,
          nonce: a.nonce ? (0, $.ME)(a.nonce) : void 0,
          storageProof: a.storageProof
            ? a.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
      async function ev(
        e,
        { address: t, blockNumber: n, blockTag: r = "latest", slot: o }
      ) {
        let i = void 0 !== n ? (0, c.cK)(n) : void 0;
        return await e.request({
          method: "eth_getStorageAt",
          params: [t, o, i || r],
        });
      }
      var eC = n(30106);
      async function ex(e, { hash: t, transactionReceipt: n }) {
        let [r, o] = await Promise.all([
            (0, f.T)(e, _.G, "getBlockNumber")({}),
            t ? (0, f.T)(e, eC.x, "getTransaction")({ hash: t }) : void 0,
          ]),
          i = n?.blockNumber || o?.blockNumber;
        return i ? r - i + 1n : 0n;
      }
      var ek = n(13649),
        eE = n(3029),
        eI = n(6083),
        eB = n(35791),
        eS = n(35109),
        eN = n(42264),
        eT = n(35020),
        eO = n(17327),
        eP = n(25507);
      async function eD(e, t) {
        let {
          blockNumber: n,
          blockTag: r = "latest",
          blocks: a,
          returnFullTransactions: s,
          traceTransfers: l,
          validation: u,
        } = t;
        try {
          let t = [];
          for (let e of a) {
            let n = e.blockOverrides ? eB.J(e.blockOverrides) : void 0,
              r = e.calls.map((e) => {
                let t = e.account ? (0, v.J)(e.account) : void 0,
                  n = {
                    ...e,
                    data: e.abi ? (0, i.p)(e) : e.data,
                    from: e.from ?? t?.address,
                  };
                return (0, E.c)(n), (0, k.Bv)(n);
              }),
              o = e.stateOverrides ? (0, eP.yH)(e.stateOverrides) : void 0;
            t.push({ blockOverrides: n, calls: r, stateOverrides: o });
          }
          let d = "bigint" == typeof n ? (0, c.cK)(n) : void 0;
          return (
            await e.request({
              method: "eth_simulateV1",
              params: [
                {
                  blockStateCalls: t,
                  returnFullTransactions: s,
                  traceTransfers: l,
                  validation: u,
                },
                d || r,
              ],
            })
          ).map((e, t) => ({
            ...(0, eO.$)(e),
            calls: e.calls.map((e, n) => {
              let { abi: r, args: i, functionName: s, to: c } = a[t].calls[n],
                l = e.error?.data ?? e.returnData,
                u = BigInt(e.gasUsed),
                d = e.logs?.map((e) => (0, eu.e)(e)),
                p = "0x1" === e.status ? "success" : "failure",
                f =
                  r && "success" === p && "0x" !== l
                    ? (0, o.e)({ abi: r, data: l, functionName: s })
                    : null,
                h = (() => {
                  let t;
                  if (
                    "success" !== p &&
                    (e.error?.data === "0x"
                      ? (t = new N.O())
                      : e.error && (t = new eS.$S(e.error)),
                    t)
                  )
                    return (0, K.j)(t, {
                      abi: r ?? [],
                      address: c ?? "0x",
                      args: i,
                      functionName: s ?? "<unknown>",
                    });
                })();
              return {
                data: l,
                gasUsed: u,
                logs: d,
                status: p,
                ...("success" === p ? { result: f } : { error: h }),
              };
            }),
          }));
        } catch (t) {
          let e = (0, eT.l)(t, {});
          if (e instanceof eN.RM) throw t;
          throw e;
        }
      }
      var eM = n(84701),
        eW = n(17130),
        eF = n(38958),
        eR = n(27442),
        eQ = n(16652),
        eU = n(28452),
        eL = n(8512),
        eq = n(86205),
        ej = n(97486);
      let ez = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function eK(e) {
        return e >= ez.zero && e <= ez.nine
          ? e - ez.zero
          : e >= ez.A && e <= ez.F
          ? e - (ez.A - 10)
          : e >= ez.a && e <= ez.f
          ? e - (ez.a - 10)
          : void 0;
      }
      var eG = n(93587);
      let eJ = new TextEncoder();
      eU.C, eU.C;
      class eH extends eU.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeOverflowError",
            });
        }
      }
      eU.C;
      class eV extends eU.C {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeExceedsPaddingSizeError",
            });
        }
      }
      function eY(e, t = {}) {
        var n;
        let { as: r = "string" == typeof e ? "Hex" : "Bytes" } = t,
          o = (0, eL.lY)(
            e instanceof Uint8Array
              ? e
              : "string" == typeof e
              ? (function (e, t = {}) {
                  let { size: n } = t,
                    r = e;
                  n && (eG.Sl(e, n), (r = eq.M7(e, n)));
                  let o = r.slice(2);
                  o.length % 2 && (o = `0${o}`);
                  let i = o.length / 2,
                    a = new Uint8Array(i);
                  for (let e = 0, t = 0; e < i; e++) {
                    let n = eK(o.charCodeAt(t++)),
                      r = eK(o.charCodeAt(t++));
                    if (void 0 === n || void 0 === r)
                      throw new eU.C(
                        `Invalid byte sequence ("${o[t - 2]}${
                          o[t - 1]
                        }" in "${o}").`
                      );
                    a[e] = 16 * n + r;
                  }
                  return a;
                })(e)
              : (n = e) instanceof Uint8Array
              ? n
              : new Uint8Array(n)
          );
        return "Bytes" === r ? o : eq.uK(o);
      }
      class eZ extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      let eX = { checksum: new eZ(8192) }.checksum,
        e_ = /^0x[a-fA-F0-9]{40}$/;
      function e$(e, t = {}) {
        let { strict: n = !0 } = t;
        if (!e_.test(e)) throw new e1({ address: e, cause: new e2() });
        if (n) {
          if (e.toLowerCase() === e) return;
          if (
            (function (e) {
              if (eX.has(e)) return eX.get(e);
              e$(e, { strict: !1 });
              let t = e.substring(2).toLowerCase(),
                n = eY(
                  (function (e, t = {}) {
                    let { size: n } = t,
                      r = eJ.encode(e);
                    if ("number" == typeof n) {
                      var o;
                      if (r.length > n)
                        throw new eH({ givenSize: r.length, maxSize: n });
                      return (
                        (o = r),
                        (function (e, t = {}) {
                          let { dir: n, size: r = 32 } = t;
                          if (0 === r) return e;
                          if (e.length > r)
                            throw new eV({
                              size: e.length,
                              targetSize: r,
                              type: "Bytes",
                            });
                          let o = new Uint8Array(r);
                          for (let t = 0; t < r; t++) {
                            let i = "right" === n;
                            o[i ? t : r - t - 1] = e[i ? t : e.length - t - 1];
                          }
                          return o;
                        })(o, { dir: "right", size: n })
                      );
                    }
                    return r;
                  })(t),
                  { as: "Bytes" }
                ),
                r = t.split("");
              for (let e = 0; e < 40; e += 2)
                n[e >> 1] >> 4 >= 8 && r[e] && (r[e] = r[e].toUpperCase()),
                  (15 & n[e >> 1]) >= 8 &&
                    r[e + 1] &&
                    (r[e + 1] = r[e + 1].toUpperCase());
              let o = `0x${r.join("")}`;
              return eX.set(e, o), o;
            })(e) !== e
          )
            throw new e1({ address: e, cause: new e3() });
        }
      }
      function e0(e, t = {}) {
        let { strict: n = !0 } = t ?? {};
        try {
          return e$(e, { strict: n }), !0;
        } catch {
          return !1;
        }
      }
      class e1 extends eU.C {
        constructor({ address: e, cause: t }) {
          super(`Address "${e}" is invalid.`, { cause: t }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidAddressError",
            });
        }
      }
      class e2 extends eU.C {
        constructor() {
          super("Address is not a 20 byte (40 hexadecimal character) value."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidInputError",
            });
        }
      }
      class e3 extends eU.C {
        constructor() {
          super("Address does not match its checksum counterpart."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidChecksumError",
            });
        }
      }
      function e5(e) {
        let t = !0,
          n = "",
          r = 0,
          o = "",
          i = !1;
        for (let a = 0; a < e.length; a++) {
          let s = e[a];
          if (
            (["(", ")", ","].includes(s) && (t = !0),
            "(" === s && r++,
            ")" === s && r--,
            t)
          ) {
            if (0 === r) {
              if (" " === s && ["event", "function", "error", ""].includes(o))
                o = "";
              else if (((o += s), ")" === s)) {
                i = !0;
                break;
              }
              continue;
            }
            if (" " === s) {
              "," !== e[a - 1] &&
                "," !== n &&
                ",(" !== n &&
                ((n = ""), (t = !1));
              continue;
            }
            (o += s), (n += s);
          }
        }
        if (!i) throw new eU.C("Unable to normalize signature.");
        return o;
      }
      function e4(e, t = {}) {
        let { prepare: n = !0 } = t,
          r =
            Array.isArray(e) || "string" == typeof e
              ? (function (e) {
                  let t;
                  if ("string" == typeof e) t = (0, eR.uT)(e);
                  else {
                    let n = (0, eF.e)(e),
                      r = e.length;
                    for (let o = 0; o < r; o++) {
                      let r = e[o];
                      if (!(0, eW.WL)(r)) {
                        t = (0, eR.uT)(r, n);
                        break;
                      }
                    }
                  }
                  if (!t) throw new eM.xo({ signature: e });
                  return t;
                })(e)
              : e;
        return { ...r, ...(n ? { hash: e8(r) } : {}) };
      }
      function e6(e) {
        return eq.di(e8(e), 0, 4);
      }
      function e8(e) {
        return "string" != typeof e && "hash" in e && e.hash
          ? e.hash
          : eY(eq.sH(e5("string" == typeof e ? e : eQ.B(e))));
      }
      class e9 extends eU.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI Items.", {
            metaMessages: [
              `\`${e.type}\` in \`${e5(eQ.B(e.abiItem))}\`, and`,
              `\`${t.type}\` in \`${e5(eQ.B(t.abiItem))}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.AmbiguityError",
            });
        }
      }
      class e7 extends eU.C {
        constructor({ name: e, data: t, type: n = "item" }) {
          super(
            `ABI ${n}${
              e ? ` with name "${e}"` : t ? ` with data "${t}"` : ""
            } not found.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.NotFoundError",
            });
        }
      }
      eU.C;
      var te = n(45446);
      let tt = /^(.*)\[([0-9]*)\]$/,
        tn = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        tr =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      function to(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: o } = e[n];
          r ? (t += 32) : (t += eq.Ej(o));
        }
        let n = [],
          r = [],
          o = 0;
        for (let i = 0; i < e.length; i++) {
          let { dynamic: a, encoded: s } = e[i];
          a
            ? (n.push(eq.oB(t + o, { size: 32 })), r.push(s), (o += eq.Ej(s)))
            : n.push(s);
        }
        return eq.xW(...n, ...r);
      }
      function ti(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
      function ta(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(ta);
        let n = ti(e.type);
        return !!(n && ta({ ...e, type: n[1] }));
      }
      function ts(e, t, n) {
        let { checksumAddress: r = !1 } = n ?? {};
        if (e.length !== t.length)
          throw new td({ expectedLength: e.length, givenLength: t.length });
        let o = to(
          (function ({ checksumAddress: e, parameters: t, values: n }) {
            let r = [];
            for (let o = 0; o < t.length; o++)
              r.push(
                (function e({
                  checksumAddress: t = !1,
                  parameter: n,
                  value: r,
                }) {
                  let o = ti(n.type);
                  if (o) {
                    let [i, a] = o;
                    return (function (t, n) {
                      let { checksumAddress: r, length: o, parameter: i } = n,
                        a = null === o;
                      if (!Array.isArray(t)) throw new tp(t);
                      if (!a && t.length !== o)
                        throw new tl({
                          expectedLength: o,
                          givenLength: t.length,
                          type: `${i.type}[${o}]`,
                        });
                      let s = !1,
                        c = [];
                      for (let n = 0; n < t.length; n++) {
                        let o = e({
                          checksumAddress: r,
                          parameter: i,
                          value: t[n],
                        });
                        o.dynamic && (s = !0), c.push(o);
                      }
                      if (a || s) {
                        let e = to(c);
                        if (a) {
                          let t = eq.oB(c.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: c.length > 0 ? eq.xW(t, e) : t,
                          };
                        }
                        if (s) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: eq.xW(...c.map(({ encoded: e }) => e)),
                      };
                    })(r, {
                      checksumAddress: t,
                      length: i,
                      parameter: { ...n, type: a },
                    });
                  }
                  if ("tuple" === n.type)
                    return (function (t, n) {
                      let { checksumAddress: r, parameter: o } = n,
                        i = !1,
                        a = [];
                      for (let n = 0; n < o.components.length; n++) {
                        let s = o.components[n],
                          c = Array.isArray(t) ? n : s.name,
                          l = e({
                            checksumAddress: r,
                            parameter: s,
                            value: t[c],
                          });
                        a.push(l), l.dynamic && (i = !0);
                      }
                      return {
                        dynamic: i,
                        encoded: i
                          ? to(a)
                          : eq.xW(...a.map(({ encoded: e }) => e)),
                      };
                    })(r, { checksumAddress: t, parameter: n });
                  if ("address" === n.type) {
                    var i = r,
                      a = { checksum: t };
                    let { checksum: e = !1 } = a;
                    return (
                      e$(i, { strict: e }),
                      { dynamic: !1, encoded: eq.Ho(i.toLowerCase()) }
                    );
                  }
                  if ("bool" === n.type) {
                    var s = r;
                    if ("boolean" != typeof s)
                      throw new eU.C(
                        `Invalid boolean value: "${s}" (type: ${typeof s}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: eq.Ho(eq.xb(s)) };
                  }
                  if (n.type.startsWith("uint") || n.type.startsWith("int")) {
                    let e = n.type.startsWith("int"),
                      [, , t = "256"] = tr.exec(n.type) ?? [];
                    return (function (e, { signed: t, size: n }) {
                      if ("number" == typeof n) {
                        let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
                          o = t ? -r - 1n : 0n;
                        if (e > r || e < o)
                          throw new eq.Ty({
                            max: r.toString(),
                            min: o.toString(),
                            signed: t,
                            size: n / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: eq.oB(e, { size: 32, signed: t }),
                      };
                    })(r, { signed: e, size: Number(t) });
                  }
                  if (n.type.startsWith("bytes"))
                    return (function (e, { type: t }) {
                      let [, n] = t.split("bytes"),
                        r = eq.Ej(e);
                      if (!n) {
                        let t = e;
                        return (
                          r % 32 != 0 &&
                            (t = eq.M7(
                              t,
                              32 * Math.ceil((e.length - 2) / 2 / 32)
                            )),
                          {
                            dynamic: !0,
                            encoded: eq.xW(eq.Ho(eq.oB(r, { size: 32 })), t),
                          }
                        );
                      }
                      if (r !== Number.parseInt(n))
                        throw new tu({
                          expectedSize: Number.parseInt(n),
                          value: e,
                        });
                      return { dynamic: !1, encoded: eq.M7(e) };
                    })(r, { type: n.type });
                  if ("string" === n.type) {
                    var c = r;
                    let e = eq.sH(c),
                      t = Math.ceil(eq.Ej(e) / 32),
                      n = [];
                    for (let r = 0; r < t; r++)
                      n.push(eq.M7(eq.di(e, 32 * r, (r + 1) * 32)));
                    return {
                      dynamic: !0,
                      encoded: eq.xW(
                        eq.M7(eq.oB(eq.Ej(e), { size: 32 })),
                        ...n
                      ),
                    };
                  }
                  throw new tf(n.type);
                })({ checksumAddress: e, parameter: t[o], value: n[o] })
              );
            return r;
          })({ checksumAddress: r, parameters: e, values: t })
        );
        return 0 === o.length ? "0x" : o;
      }
      function tc(e, t) {
        if (e.length !== t.length)
          throw new td({ expectedLength: e.length, givenLength: t.length });
        let n = [];
        for (let r = 0; r < e.length; r++) {
          let o = e[r],
            i = t[r];
          n.push(tc.encode(o, i));
        }
        return eq.xW(...n);
      }
      ((tc || (tc = {})).encode = function e(t, n, r = !1) {
        if ("address" === t) return e$(n), eq.Ho(n.toLowerCase(), 32 * !!r);
        if ("string" === t) return eq.sH(n);
        if ("bytes" === t) return n;
        if ("bool" === t) return eq.Ho(eq.xb(n), r ? 32 : 1);
        let o = t.match(tr);
        if (o) {
          let [e, t, i = "256"] = o,
            a = Number.parseInt(i) / 8;
          return eq.oB(n, { size: r ? 32 : a, signed: "int" === t });
        }
        let i = t.match(tn);
        if (i) {
          let [e, t] = i;
          if (Number.parseInt(t) !== (n.length - 2) / 2)
            throw new tu({ expectedSize: Number.parseInt(t), value: n });
          return eq.M7(n, 32 * !!r);
        }
        let a = t.match(tt);
        if (a && Array.isArray(n)) {
          let [t, r] = a,
            o = [];
          for (let t = 0; t < n.length; t++) o.push(e(r, n[t], !0));
          return 0 === o.length ? "0x" : eq.xW(...o);
        }
        throw new tf(t);
      }),
        eU.C,
        eU.C;
      class tl extends eU.C {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(
            `Array length mismatch for type \`${n}\`. Expected: \`${e}\`. Given: \`${t}\`.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.ArrayLengthMismatchError",
            });
        }
      }
      class tu extends eU.C {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${eq.Ej(
              t
            )}) does not match expected size (bytes${e}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.BytesSizeMismatchError",
            });
        }
      }
      class td extends eU.C {
        constructor({ expectedLength: e, givenLength: t }) {
          super(`ABI encoding parameters/values length mismatch.
Expected length (parameters): ${e}
Given length (values): ${t}`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.LengthMismatchError",
            });
        }
      }
      class tp extends eU.C {
        constructor(e) {
          super(`Value \`${e}\` is not a valid array.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidArrayError",
            });
        }
      }
      class tf extends eU.C {
        constructor(e) {
          super(`Type \`${e}\` is not a valid ABI Type.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidTypeError",
            });
        }
      }
      function th(e, t = {}) {
        return e4(e, t);
      }
      let tw = "0x0000000000000000000000000000000000000000";
      var tm = n(15313);
      async function ty(e, t) {
        let {
            blockNumber: n,
            blockTag: r,
            calls: o,
            stateOverrides: a,
            traceAssetChanges: s,
            traceTransfers: c,
            validation: l,
          } = t,
          u = t.account ? (0, v.J)(t.account) : void 0;
        if (s && !u)
          throw new T.C(
            "`account` is required when `traceAssetChanges` is true"
          );
        let d = u
            ? (function (e, t) {
                let { bytecode: n, args: r } = t;
                return eq.xW(
                  n,
                  e.inputs?.length && r?.length ? ts(e.inputs, r) : "0x"
                );
              })(e4("constructor(bytes, bytes)"), {
                bytecode: tm.LX,
                args: [
                  "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",
                  (function (e, ...t) {
                    let { overloads: n } = e,
                      r = n
                        ? (function (e, t, n) {
                            let r = (function (e, t, n) {
                              let r,
                                { args: o = [], prepare: i = !0 } = n ?? {},
                                a = eq.tf(t, { strict: !1 }),
                                s = e.filter((e) =>
                                  a
                                    ? "function" === e.type ||
                                      "error" === e.type
                                      ? e6(e) === eq.di(t, 0, 4)
                                      : "event" === e.type && e8(e) === t
                                    : "name" in e && e.name === t
                                );
                              if (0 === s.length) throw new e7({ name: t });
                              if (1 === s.length)
                                return {
                                  ...s[0],
                                  ...(i ? { hash: e8(s[0]) } : {}),
                                };
                              for (let e of s) {
                                if ("inputs" in e) {
                                  if (!o || 0 === o.length) {
                                    if (!e.inputs || 0 === e.inputs.length)
                                      return {
                                        ...e,
                                        ...(i ? { hash: e8(e) } : {}),
                                      };
                                    continue;
                                  }
                                  if (
                                    e.inputs &&
                                    0 !== e.inputs.length &&
                                    e.inputs.length === o.length &&
                                    o.every((t, n) => {
                                      let r = "inputs" in e && e.inputs[n];
                                      return (
                                        !!r &&
                                        (function e(t, n) {
                                          let r = typeof t,
                                            o = n.type;
                                          switch (o) {
                                            case "address":
                                              return e0(t, { strict: !1 });
                                            case "bool":
                                              return "boolean" === r;
                                            case "function":
                                            case "string":
                                              return "string" === r;
                                            default:
                                              if (
                                                "tuple" === o &&
                                                "components" in n
                                              )
                                                return Object.values(
                                                  n.components
                                                ).every((n, r) =>
                                                  e(Object.values(t)[r], n)
                                                );
                                              if (
                                                /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                                                  o
                                                )
                                              )
                                                return (
                                                  "number" === r ||
                                                  "bigint" === r
                                                );
                                              if (
                                                /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(
                                                  o
                                                )
                                              )
                                                return (
                                                  "string" === r ||
                                                  t instanceof Uint8Array
                                                );
                                              if (
                                                /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(
                                                  o
                                                )
                                              )
                                                return (
                                                  Array.isArray(t) &&
                                                  t.every((t) =>
                                                    e(t, {
                                                      ...n,
                                                      type: o.replace(
                                                        /(\[[0-9]{0,}\])$/,
                                                        ""
                                                      ),
                                                    })
                                                  )
                                                );
                                              return !1;
                                          }
                                        })(t, r)
                                      );
                                    })
                                  ) {
                                    if (r && "inputs" in r && r.inputs) {
                                      let t = (function e(t, n, r) {
                                        for (let o in t) {
                                          let i = t[o],
                                            a = n[o];
                                          if (
                                            "tuple" === i.type &&
                                            "tuple" === a.type &&
                                            "components" in i &&
                                            "components" in a
                                          )
                                            return e(
                                              i.components,
                                              a.components,
                                              r[o]
                                            );
                                          let s = [i.type, a.type];
                                          if (
                                            (s.includes("address") &&
                                              s.includes("bytes20")) ||
                                            (((s.includes("address") &&
                                              s.includes("string")) ||
                                              (s.includes("address") &&
                                                s.includes("bytes"))) &&
                                              e0(r[o], { strict: !1 }))
                                          )
                                            return s;
                                        }
                                      })(e.inputs, r.inputs, o);
                                      if (t)
                                        throw new e9(
                                          { abiItem: e, type: t[0] },
                                          { abiItem: r, type: t[1] }
                                        );
                                    }
                                    r = e;
                                  }
                                }
                              }
                              let c = (() => {
                                if (r) return r;
                                let [e, ...t] = s;
                                return { ...e, overloads: t };
                              })();
                              if (!c) throw new e7({ name: t });
                              return { ...c, ...(i ? { hash: e8(c) } : {}) };
                            })(e, t, n);
                            if ("function" !== r.type)
                              throw new e7({ name: t, type: "function" });
                            return r;
                          })([e, ...n], e.name, { args: t[0] })
                        : e,
                      o = e6(r),
                      i = t.length > 0 ? ts(r.inputs, t[0]) : void 0;
                    return i ? eq.xW(o, i) : o;
                  })(th("function getBalance(address)"), [u.address]),
                ],
              })
            : void 0,
          p = s
            ? await Promise.all(
                t.calls.map(async (t) => {
                  if (!t.data && !t.abi) return;
                  let { accessList: n } = await I(e, {
                    account: u.address,
                    ...t,
                    data: t.abi ? (0, i.p)(t) : t.data,
                  });
                  return n.map(({ address: e, storageKeys: t }) =>
                    t.length > 0 ? e : null
                  );
                })
              ).then((e) => e.flat().filter(Boolean))
            : [],
          f = await eD(e, {
            blockNumber: n,
            blockTag: r,
            blocks: [
              ...(s
                ? [
                    { calls: [{ data: d }], stateOverrides: a },
                    {
                      calls: p.map((e, t) => ({
                        abi: [
                          th("function balanceOf(address) returns (uint256)"),
                        ],
                        functionName: "balanceOf",
                        args: [u.address],
                        to: e,
                        from: tw,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tw, nonce: 0 }],
                    },
                  ]
                : []),
              {
                calls: [...o, {}].map((e) => ({ ...e, from: u?.address })),
                stateOverrides: a,
              },
              ...(s
                ? [
                    { calls: [{ data: d }] },
                    {
                      calls: p.map((e, t) => ({
                        abi: [
                          th("function balanceOf(address) returns (uint256)"),
                        ],
                        functionName: "balanceOf",
                        args: [u.address],
                        to: e,
                        from: tw,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tw, nonce: 0 }],
                    },
                    {
                      calls: p.map((e, t) => ({
                        to: e,
                        abi: [th("function decimals() returns (uint256)")],
                        functionName: "decimals",
                        from: tw,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tw, nonce: 0 }],
                    },
                    {
                      calls: p.map((e, t) => ({
                        to: e,
                        abi: [
                          th("function tokenURI(uint256) returns (string)"),
                        ],
                        functionName: "tokenURI",
                        args: [0n],
                        from: tw,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tw, nonce: 0 }],
                    },
                    {
                      calls: p.map((e, t) => ({
                        to: e,
                        abi: [th("function symbol() returns (string)")],
                        functionName: "symbol",
                        from: tw,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tw, nonce: 0 }],
                    },
                  ]
                : []),
            ],
            traceTransfers: c,
            validation: l,
          }),
          h = s ? f[2] : f[0],
          [w, m, , y, g, b, A, C] = s ? f : [],
          { calls: x, ...k } = h,
          E = x.slice(0, -1) ?? [],
          B = [...(w?.calls ?? []), ...(m?.calls ?? [])].map((e) =>
            "success" === e.status ? (0, $.uU)(e.data) : null
          ),
          S = [...(y?.calls ?? []), ...(g?.calls ?? [])].map((e) =>
            "success" === e.status ? (0, $.uU)(e.data) : null
          ),
          N = (b?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          O = (C?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          P = (A?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          D = [];
        for (let [e, t] of S.entries()) {
          let n = B[e];
          if ("bigint" != typeof t || "bigint" != typeof n) continue;
          let r = N[e - 1],
            o = O[e - 1],
            i = P[e - 1],
            a =
              0 === e
                ? {
                    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                    decimals: 18,
                    symbol: "ETH",
                  }
                : {
                    address: p[e - 1],
                    decimals: i || r ? Number(r ?? 1) : void 0,
                    symbol: o ?? void 0,
                  };
          D.some((e) => e.token.address === a.address) ||
            D.push({ token: a, value: { pre: n, post: t, diff: t - n } });
        }
        return { assetChanges: D, block: k, results: E };
      }
      async function tg(e, t) {
        let {
            abi: n,
            address: r,
            args: a,
            dataSuffix: s,
            functionName: c,
            ...l
          } = t,
          u = l.account ? (0, v.J)(l.account) : e.account,
          d = (0, i.p)({ abi: n, args: a, functionName: c });
        try {
          let { data: i } = await (0, f.T)(
              e,
              A.T,
              "call"
            )({
              batch: !1,
              data: `${d}${s ? s.replace("0x", "") : ""}`,
              to: r,
              ...l,
              account: u,
            }),
            p = (0, o.e)({ abi: n, args: a, functionName: c, data: i || "0x" }),
            h = n.filter((e) => "name" in e && e.name === t.functionName);
          return {
            result: p,
            request: {
              abi: h,
              address: r,
              args: a,
              dataSuffix: s,
              functionName: c,
              ...l,
              account: u,
            },
          };
        } catch (e) {
          throw (0, K.j)(e, {
            abi: n,
            address: r,
            args: a,
            docsPath: "/docs/contract/simulateContract",
            functionName: c,
            sender: u?.address,
          });
        }
      }
      async function tb(e, { filter: t }) {
        return t.request({ method: "eth_uninstallFilter", params: [t.id] });
      }
      var tA = n(59243),
        tv = n(20760),
        tC = n(35883),
        tx = n(32840);
      let tk =
        "0x6492649264926492649264926492649264926492649264926492649264926492";
      var tE = n(93727),
        tI = n(6158),
        tB = n(79731),
        tS = n(99543);
      async function tN(e, t) {
        let {
            address: n,
            factory: o,
            factoryData: a,
            hash: s,
            signature: l,
            universalSignatureVerifierAddress: u = e.chain?.contracts
              ?.universalSignatureVerifier?.address,
            ...d
          } = t,
          p = (0, tx.q)(l)
            ? l
            : "object" == typeof l && "r" in l && "s" in l
            ? (function ({ r: e, s: t, to: n = "hex", v: r, yParity: o }) {
                let i = (() => {
                    if (0 === o || 1 === o) return o;
                    if (r && (27n === r || 28n === r || r >= 35n))
                      return +(r % 2n === 0n);
                    throw Error("Invalid `v` or `yParity` value");
                  })(),
                  a = `0x${new tS.secp256k1.Signature(
                    (0, $.uU)(e),
                    (0, $.uU)(t)
                  ).toCompactHex()}${0 === i ? "1b" : "1c"}`;
                return "hex" === n ? a : (0, P.aT)(a);
              })(l)
            : (0, c.My)(l),
          h = await (async () => {
            if ((!o && !a) || (0, tE.iN)(p, -32) === tk) return p;
            let {
                address: e,
                data: t,
                signature: n,
                to: r = "hex",
              } = { address: o, data: a, signature: p },
              i = (0, tB.aP)([
                (0, W.h)(
                  [{ type: "address" }, { type: "bytes" }, { type: "bytes" }],
                  [e, t, n]
                ),
                tk,
              ]);
            return "hex" === r ? i : (0, P.aT)(i);
          })();
        try {
          let t = u
              ? {
                  to: u,
                  data: (0, i.p)({
                    abi: r._,
                    functionName: "isValidSig",
                    args: [n, s, h],
                  }),
                  ...d,
                }
              : {
                  data: (0, tv.m)({
                    abi: r._,
                    args: [n, s, h],
                    bytecode: tm.nP,
                  }),
                  ...d,
                },
            { data: o } = await (0, f.T)(e, A.T, "call")(t);
          return (0, $.Nx)(o ?? "0x0");
        } catch (e) {
          try {
            if (
              (0, er.h)(
                (0, tC.b)(n),
                await (0, tI.x)({ hash: s, signature: l })
              )
            )
              return !0;
          } catch {}
          if (e instanceof eS.zX) return !1;
          throw e;
        }
      }
      async function tT(
        e,
        {
          address: t,
          message: n,
          factory: r,
          factoryData: o,
          signature: i,
          ...a
        }
      ) {
        return tN(e, {
          address: t,
          factory: r,
          factoryData: o,
          hash: (0, tA.A)(n),
          signature: i,
          ...a,
        });
      }
      var tO = n(67228);
      async function tP(e, t) {
        let {
          address: n,
          factory: r,
          factoryData: o,
          signature: i,
          message: a,
          primaryType: s,
          types: c,
          domain: l,
          ...u
        } = t;
        return tN(e, {
          address: n,
          factory: r,
          factoryData: o,
          hash: (0, tO.Zh)({ message: a, primaryType: s, types: c, domain: l }),
          signature: i,
          ...u,
        });
      }
      var tD = n(84014),
        tM = n(85543),
        tW = n(72342),
        tF = n(86435),
        tR = n(79183),
        tQ = n(81379);
      let tU =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        tL =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
      var tq = n(81757);
      async function tj(e, t) {
        let {
            address: n,
            domain: r,
            message: o,
            nonce: i,
            scheme: a,
            signature: s,
            time: c = new Date(),
            ...l
          } = t,
          u = (function (e) {
            let { scheme: t, statement: n, ...r } = e.match(tU)?.groups ?? {},
              {
                chainId: o,
                expirationTime: i,
                issuedAt: a,
                notBefore: s,
                requestId: c,
                ...l
              } = e.match(tL)?.groups ?? {},
              u = e.split("Resources:")[1]?.split("\n- ").slice(1);
            return {
              ...r,
              ...l,
              ...(o ? { chainId: Number(o) } : {}),
              ...(i ? { expirationTime: new Date(i) } : {}),
              ...(a ? { issuedAt: new Date(a) } : {}),
              ...(s ? { notBefore: new Date(s) } : {}),
              ...(c ? { requestId: c } : {}),
              ...(u ? { resources: u } : {}),
              ...(t ? { scheme: t } : {}),
              ...(n ? { statement: n } : {}),
            };
          })(o);
        if (
          !u.address ||
          !(function (e) {
            let {
              address: t,
              domain: n,
              message: r,
              nonce: o,
              scheme: i,
              time: a = new Date(),
            } = e;
            if (
              (n && r.domain !== n) ||
              (o && r.nonce !== o) ||
              (i && r.scheme !== i) ||
              (r.expirationTime && a >= r.expirationTime) ||
              (r.notBefore && a < r.notBefore)
            )
              return !1;
            try {
              if (
                !r.address ||
                !(0, tq.P)(r.address, { strict: !1 }) ||
                (t && !(0, er.h)(r.address, t))
              )
                return !1;
            } catch {
              return !1;
            }
            return !0;
          })({
            address: n,
            domain: r,
            message: u,
            nonce: i,
            scheme: a,
            time: c,
          })
        )
          return !1;
        let d = (0, tA.A)(o);
        return tN(e, { address: u.address, hash: d, signature: s, ...l });
      }
      var tz = n(73979),
        tK = n(2806);
      function tG(e) {
        return {
          call: (t) => (0, A.T)(e, t),
          createAccessList: (t) => I(e, t),
          createBlockFilter: () => S(e),
          createContractEventFilter: (t) => q(e, t),
          createEventFilter: (t) => j(e, t),
          createPendingTransactionFilter: () => z(e),
          estimateContractGas: (t) => J(e, t),
          estimateGas: (t) => (0, G.Q)(e, t),
          getBalance: (t) => (0, Y.r)(e, t),
          getBlobBaseFee: () => Z(e),
          getBlock: (t) => (0, X.g)(e, t),
          getBlockNumber: (t) => (0, _.G)(e, t),
          getBlockTransactionCount: (t) => ee(e, t),
          getBytecode: (t) => en(e, t),
          getChainId: () => (0, et.T)(e),
          getCode: (t) => en(e, t),
          getContractEvents: (t) => ep(e, t),
          getEip712Domain: (t) => eh(e, t),
          getEnsAddress: (t) => w(e, t),
          getEnsAvatar: (t) => (0, m.i)(e, t),
          getEnsName: (t) => (0, y.s)(e, t),
          getEnsResolver: (t) => g(e, t),
          getEnsText: (t) => (0, b.m)(e, t),
          getFeeHistory: (t) => em(e, t),
          estimateFeesPerGas: (t) => (0, H._)(e, t),
          getFilterChanges: (t) => ey(e, t),
          getFilterLogs: (t) => eg(e, t),
          getGasPrice: () => (0, eb.L)(e),
          getLogs: (t) => ed(e, t),
          getProof: (t) => eA(e, t),
          estimateMaxPriorityFeePerGas: (t) => (0, V.b)(e, t),
          getStorageAt: (t) => ev(e, t),
          getTransaction: (t) => (0, eC.x)(e, t),
          getTransactionConfirmations: (t) => ex(e, t),
          getTransactionCount: (t) => (0, ek.y)(e, t),
          getTransactionReceipt: (t) => (0, eE.h)(e, t),
          multicall: (t) => (0, eI.C)(e, t),
          prepareTransactionRequest: (t) => (0, tz.ft)(e, t),
          readContract: (t) => (0, h.J)(e, t),
          sendRawTransaction: (t) => (0, tK.L)(e, t),
          simulate: (t) => eD(e, t),
          simulateBlocks: (t) => eD(e, t),
          simulateCalls: (t) => ty(e, t),
          simulateContract: (t) => tg(e, t),
          verifyMessage: (t) => tT(e, t),
          verifySiweMessage: (t) => tj(e, t),
          verifyTypedData: (t) => tP(e, t),
          uninstallFilter: (t) => tb(e, t),
          waitForTransactionReceipt: (t) => (0, tD.n)(e, t),
          watchBlocks: (t) =>
            (function (
              e,
              {
                blockTag: t = "latest",
                emitMissed: n = !1,
                emitOnBegin: r = !1,
                onBlock: o,
                onError: i,
                includeTransactions: a,
                poll: s,
                pollingInterval: c = e.pollingInterval,
              }
            ) {
              let l,
                u,
                d,
                p,
                h =
                  void 0 !== s
                    ? s
                    : "webSocket" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        "webSocket" !== e.transport.transports[0].config.type),
                w = a ?? !1;
              return h
                ? (() => {
                    let a = (0, tR.A)(["watchBlocks", e.uid, t, n, r, w, c]);
                    return (0, tW.lB)(a, { onBlock: o, onError: i }, (o) =>
                      (0, tF.w)(
                        async () => {
                          try {
                            let r = await (0, f.T)(
                              e,
                              X.g,
                              "getBlock"
                            )({ blockTag: t, includeTransactions: w });
                            if (null !== r.number && l?.number != null) {
                              if (r.number === l.number) return;
                              if (r.number - l.number > 1 && n)
                                for (
                                  let t = l?.number + 1n;
                                  t < r.number;
                                  t++
                                ) {
                                  let n = await (0, f.T)(
                                    e,
                                    X.g,
                                    "getBlock"
                                  )({ blockNumber: t, includeTransactions: w });
                                  o.onBlock(n, l), (l = n);
                                }
                            }
                            (l?.number == null ||
                              ("pending" === t && r?.number == null) ||
                              (null !== r.number && r.number > l.number)) &&
                              (o.onBlock(r, l), (l = r));
                          } catch (e) {
                            o.onError?.(e);
                          }
                        },
                        { emitOnBegin: r, interval: c }
                      )
                    );
                  })()
                : ((u = !0),
                  (d = !0),
                  (p = () => (u = !1)),
                  (async () => {
                    try {
                      r &&
                        (0, f.T)(
                          e,
                          X.g,
                          "getBlock"
                        )({ blockTag: t, includeTransactions: w })
                          .then((e) => {
                            u && d && (o(e, void 0), (d = !1));
                          })
                          .catch(i);
                      let n = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: a } = await n.subscribe({
                          params: ["newHeads"],
                          async onData(t) {
                            if (!u) return;
                            let n = await (0, f.T)(
                              e,
                              X.g,
                              "getBlock"
                            )({
                              blockNumber: t.result?.number,
                              includeTransactions: w,
                            }).catch(() => {});
                            u && (o(n, l), (d = !1), (l = n));
                          },
                          onError(e) {
                            i?.(e);
                          },
                        });
                      (p = a), u || p();
                    } catch (e) {
                      i?.(e);
                    }
                  })(),
                  () => p());
            })(e, t),
          watchBlockNumber: (t) => (0, tM.q)(e, t),
          watchContractEvent: (t) =>
            (function (e, t) {
              let {
                abi: n,
                address: r,
                args: o,
                batch: i = !0,
                eventName: a,
                fromBlock: s,
                onError: c,
                onLogs: l,
                poll: u,
                pollingInterval: d = e.pollingInterval,
                strict: p,
              } = t;
              return (
                void 0 !== u
                  ? u
                  : "bigint" == typeof s ||
                    ("webSocket" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        "webSocket" !== e.transport.transports[0].config.type))
              )
                ? (() => {
                    let t = p ?? !1,
                      u = (0, tR.A)([
                        "watchContractEvent",
                        r,
                        o,
                        i,
                        e.uid,
                        a,
                        d,
                        t,
                        s,
                      ]);
                    return (0, tW.lB)(u, { onLogs: l, onError: c }, (c) => {
                      let l, u;
                      void 0 !== s && (l = s - 1n);
                      let p = !1,
                        h = (0, tF.w)(
                          async () => {
                            if (!p) {
                              try {
                                u = await (0, f.T)(
                                  e,
                                  q,
                                  "createContractEventFilter"
                                )({
                                  abi: n,
                                  address: r,
                                  args: o,
                                  eventName: a,
                                  strict: t,
                                  fromBlock: s,
                                });
                              } catch {}
                              p = !0;
                              return;
                            }
                            try {
                              let s;
                              if (u)
                                s = await (0, f.T)(
                                  e,
                                  ey,
                                  "getFilterChanges"
                                )({ filter: u });
                              else {
                                let i = await (0, f.T)(
                                  e,
                                  _.G,
                                  "getBlockNumber"
                                )({});
                                (s =
                                  l && l < i
                                    ? await (0, f.T)(
                                        e,
                                        ep,
                                        "getContractEvents"
                                      )({
                                        abi: n,
                                        address: r,
                                        args: o,
                                        eventName: a,
                                        fromBlock: l + 1n,
                                        toBlock: i,
                                        strict: t,
                                      })
                                    : []),
                                  (l = i);
                              }
                              if (0 === s.length) return;
                              if (i) c.onLogs(s);
                              else for (let e of s) c.onLogs([e]);
                            } catch (e) {
                              u && e instanceof tQ.Di && (p = !1),
                                c.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: d }
                        );
                      return async () => {
                        u &&
                          (await (0, f.T)(
                            e,
                            tb,
                            "uninstallFilter"
                          )({ filter: u })),
                          h();
                      };
                    });
                  })()
                : (() => {
                    let t = (0, tR.A)([
                        "watchContractEvent",
                        r,
                        o,
                        i,
                        e.uid,
                        a,
                        d,
                        p ?? !1,
                      ]),
                      s = !0,
                      u = () => (s = !1);
                    return (0, tW.lB)(
                      t,
                      { onLogs: l, onError: c },
                      (t) => (
                        (async () => {
                          try {
                            let i = (() => {
                                if ("fallback" === e.transport.type) {
                                  let t = e.transport.transports.find(
                                    (e) => "webSocket" === e.config.type
                                  );
                                  return t ? t.value : e.transport;
                                }
                                return e.transport;
                              })(),
                              c = a ? U({ abi: n, eventName: a, args: o }) : [],
                              { unsubscribe: l } = await i.subscribe({
                                params: ["logs", { address: r, topics: c }],
                                onData(e) {
                                  if (!s) return;
                                  let r = e.result;
                                  try {
                                    let { eventName: e, args: o } = ec({
                                        abi: n,
                                        data: r.data,
                                        topics: r.topics,
                                        strict: p,
                                      }),
                                      i = (0, eu.e)(r, {
                                        args: o,
                                        eventName: e,
                                      });
                                    t.onLogs([i]);
                                  } catch (i) {
                                    let e, n;
                                    if (
                                      i instanceof N.fo ||
                                      i instanceof N.l3
                                    ) {
                                      if (p) return;
                                      (e = i.abiItem.name),
                                        (n = i.abiItem.inputs?.some(
                                          (e) => !("name" in e && e.name)
                                        ));
                                    }
                                    let o = (0, eu.e)(r, {
                                      args: n ? [] : {},
                                      eventName: e,
                                    });
                                    t.onLogs([o]);
                                  }
                                },
                                onError(e) {
                                  t.onError?.(e);
                                },
                              });
                            (u = l), s || u();
                          } catch (e) {
                            c?.(e);
                          }
                        })(),
                        () => u()
                      )
                    );
                  })();
            })(e, t),
          watchEvent: (t) =>
            (function (
              e,
              {
                address: t,
                args: n,
                batch: r = !0,
                event: o,
                events: i,
                fromBlock: a,
                onError: s,
                onLogs: c,
                poll: l,
                pollingInterval: u = e.pollingInterval,
                strict: d,
              }
            ) {
              let p,
                h,
                w =
                  void 0 !== l
                    ? l
                    : "bigint" == typeof a ||
                      ("webSocket" !== e.transport.type &&
                        ("fallback" !== e.transport.type ||
                          "webSocket" !==
                            e.transport.transports[0].config.type)),
                m = d ?? !1;
              return w
                ? (() => {
                    let l = (0, tR.A)(["watchEvent", t, n, r, e.uid, o, u, a]);
                    return (0, tW.lB)(l, { onLogs: c, onError: s }, (s) => {
                      let c, l;
                      void 0 !== a && (c = a - 1n);
                      let d = !1,
                        p = (0, tF.w)(
                          async () => {
                            if (!d) {
                              try {
                                l = await (0, f.T)(
                                  e,
                                  j,
                                  "createEventFilter"
                                )({
                                  address: t,
                                  args: n,
                                  event: o,
                                  events: i,
                                  strict: m,
                                  fromBlock: a,
                                });
                              } catch {}
                              d = !0;
                              return;
                            }
                            try {
                              let a;
                              if (l)
                                a = await (0, f.T)(
                                  e,
                                  ey,
                                  "getFilterChanges"
                                )({ filter: l });
                              else {
                                let r = await (0, f.T)(
                                  e,
                                  _.G,
                                  "getBlockNumber"
                                )({});
                                (a =
                                  c && c !== r
                                    ? await (0, f.T)(
                                        e,
                                        ed,
                                        "getLogs"
                                      )({
                                        address: t,
                                        args: n,
                                        event: o,
                                        events: i,
                                        fromBlock: c + 1n,
                                        toBlock: r,
                                      })
                                    : []),
                                  (c = r);
                              }
                              if (0 === a.length) return;
                              if (r) s.onLogs(a);
                              else for (let e of a) s.onLogs([e]);
                            } catch (e) {
                              l && e instanceof tQ.Di && (d = !1),
                                s.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: u }
                        );
                      return async () => {
                        l &&
                          (await (0, f.T)(
                            e,
                            tb,
                            "uninstallFilter"
                          )({ filter: l })),
                          p();
                      };
                    });
                  })()
                : ((p = !0),
                  (h = () => (p = !1)),
                  (async () => {
                    try {
                      let r = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        a = i ?? (o ? [o] : void 0),
                        l = [];
                      a &&
                        ((l = [
                          a.flatMap((e) =>
                            U({ abi: [e], eventName: e.name, args: n })
                          ),
                        ]),
                        o && (l = l[0]));
                      let { unsubscribe: u } = await r.subscribe({
                        params: ["logs", { address: t, topics: l }],
                        onData(e) {
                          if (!p) return;
                          let t = e.result;
                          try {
                            let { eventName: e, args: n } = ec({
                                abi: a ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: m,
                              }),
                              r = (0, eu.e)(t, { args: n, eventName: e });
                            c([r]);
                          } catch (o) {
                            let e, n;
                            if (o instanceof N.fo || o instanceof N.l3) {
                              if (d) return;
                              (e = o.abiItem.name),
                                (n = o.abiItem.inputs?.some(
                                  (e) => !("name" in e && e.name)
                                ));
                            }
                            let r = (0, eu.e)(t, {
                              args: n ? [] : {},
                              eventName: e,
                            });
                            c([r]);
                          }
                        },
                        onError(e) {
                          s?.(e);
                        },
                      });
                      (h = u), p || h();
                    } catch (e) {
                      s?.(e);
                    }
                  })(),
                  () => h());
            })(e, t),
          watchPendingTransactions: (t) =>
            (function (
              e,
              {
                batch: t = !0,
                onError: n,
                onTransactions: r,
                poll: o,
                pollingInterval: i = e.pollingInterval,
              }
            ) {
              let a, s;
              return (void 0 !== o ? o : "webSocket" !== e.transport.type)
                ? (() => {
                    let o = (0, tR.A)([
                      "watchPendingTransactions",
                      e.uid,
                      t,
                      i,
                    ]);
                    return (0, tW.lB)(
                      o,
                      { onTransactions: r, onError: n },
                      (n) => {
                        let r,
                          o = (0, tF.w)(
                            async () => {
                              try {
                                if (!r)
                                  try {
                                    r = await (0, f.T)(
                                      e,
                                      z,
                                      "createPendingTransactionFilter"
                                    )({});
                                    return;
                                  } catch (e) {
                                    throw (o(), e);
                                  }
                                let i = await (0, f.T)(
                                  e,
                                  ey,
                                  "getFilterChanges"
                                )({ filter: r });
                                if (0 === i.length) return;
                                if (t) n.onTransactions(i);
                                else for (let e of i) n.onTransactions([e]);
                              } catch (e) {
                                n.onError?.(e);
                              }
                            },
                            { emitOnBegin: !0, interval: i }
                          );
                        return async () => {
                          r &&
                            (await (0, f.T)(
                              e,
                              tb,
                              "uninstallFilter"
                            )({ filter: r })),
                            o();
                        };
                      }
                    );
                  })()
                : ((a = !0),
                  (s = () => (a = !1)),
                  (async () => {
                    try {
                      let { unsubscribe: t } = await e.transport.subscribe({
                        params: ["newPendingTransactions"],
                        onData(e) {
                          if (!a) return;
                          let t = e.result;
                          r([t]);
                        },
                        onError(e) {
                          n?.(e);
                        },
                      });
                      (s = t), a || s();
                    } catch (e) {
                      n?.(e);
                    }
                  })(),
                  () => s());
            })(e, t),
        };
      }
      function tJ(e, t = {}) {
        let n = (function (e, t = {}) {
          let n;
          try {
            n = e.getClient(t);
          } catch {}
          return n;
        })(e, t);
        return n?.extend(tG);
      }
      var tH = n(45566),
        tV = n(53031);
      function tY() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, tV.U)(e);
        return (0, tH.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe(() => tJ(e), n, {
                equalityFn: (e, t) => e?.uid === t?.uid,
              });
            })(t, { onChange: e }),
          () => tJ(t, e),
          () => tJ(t, e),
          (e) => e,
          (e, t) =>
            (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid)
        );
      }
    },
    6083: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => f });
      var r = n(14493),
        o = n(99702),
        i = n(7441),
        a = n(35109),
        s = n(69330),
        c = n(60367),
        l = n(13861),
        u = n(54842),
        d = n(34524),
        p = n(3488);
      async function f(e, t) {
        let {
            account: n,
            allowFailure: f = !0,
            batchSize: h,
            blockNumber: w,
            blockTag: m,
            multicallAddress: y,
            stateOverride: g,
          } = t,
          b = t.contracts,
          A =
            h ??
            (("object" == typeof e.batch?.multicall &&
              e.batch.multicall.batchSize) ||
              1024),
          v = y;
        if (!v) {
          if (!e.chain)
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          v = (0, l.M)({
            blockNumber: w,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let C = [[]],
          x = 0,
          k = 0;
        for (let e = 0; e < b.length; e++) {
          let { abi: t, address: r, args: o, functionName: i } = b[e];
          try {
            let e = (0, c.p)({ abi: t, args: o, functionName: i });
            (k += (e.length - 2) / 2),
              A > 0 &&
                k > A &&
                C[x].length > 0 &&
                (x++, (k = (e.length - 2) / 2), (C[x] = [])),
              (C[x] = [...C[x], { allowFailure: !0, callData: e, target: r }]);
          } catch (a) {
            let e = (0, u.j)(a, {
              abi: t,
              address: r,
              args: o,
              docsPath: "/docs/contract/multicall",
              functionName: i,
              sender: n,
            });
            if (!f) throw e;
            C[x] = [...C[x], { allowFailure: !0, callData: "0x", target: r }];
          }
        }
        let E = await Promise.allSettled(
            C.map((t) =>
              (0, d.T)(
                e,
                p.J,
                "readContract"
              )({
                abi: r.v2,
                account: n,
                address: v,
                args: [t],
                blockNumber: w,
                blockTag: m,
                functionName: "aggregate3",
                stateOverride: g,
              })
            )
          ),
          I = [];
        for (let e = 0; e < E.length; e++) {
          let t = E[e];
          if ("rejected" === t.status) {
            if (!f) throw t.reason;
            for (let n = 0; n < C[e].length; n++)
              I.push({ status: "failure", error: t.reason, result: void 0 });
            continue;
          }
          let n = t.value;
          for (let t = 0; t < n.length; t++) {
            let { returnData: r, success: i } = n[t],
              { callData: c } = C[e][t],
              { abi: l, address: d, functionName: p, args: h } = b[I.length];
            try {
              if ("0x" === c) throw new o.O();
              if (!i) throw new a.$S({ data: r });
              let e = (0, s.e)({ abi: l, args: h, data: r, functionName: p });
              I.push(f ? { result: e, status: "success" } : e);
            } catch (t) {
              let e = (0, u.j)(t, {
                abi: l,
                address: d,
                args: h,
                docsPath: "/docs/contract/multicall",
                functionName: p,
              });
              if (!f) throw e;
              I.push({ error: e, result: void 0, status: "failure" });
            }
          }
        }
        if (I.length !== b.length) throw new i.C("multicall results mismatch");
        return I;
      }
    },
    7612: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => s });
      var r = n(80844),
        o = n(67622),
        i = n(24578),
        a = n(70872);
      function s(e) {
        let t = e.replace(/^\.|\.$/gm, "");
        if (0 === t.length) return new Uint8Array(1);
        let n = new Uint8Array((0, r.Af)(t).byteLength + 2),
          s = 0,
          c = t.split(".");
        for (let e = 0; e < c.length; e++) {
          var l;
          let t = (0, r.Af)(c[e]);
          t.byteLength > 255 &&
            (t = (0, r.Af)(
              ((l = (function (e) {
                let t = new Uint8Array(32).fill(0);
                return e ? (0, a.q)(e) || (0, i.S)((0, r.Af)(e)) : (0, o.My)(t);
              })(c[e])),
              `[${l.slice(2)}]`)
            )),
            (n[s] = t.length),
            n.set(t, s + 1),
            (s += t.length + 1);
        }
        return n.byteLength !== s + 1 ? n.slice(0, s + 1) : n;
      }
    },
    9894: (e, t, n) => {
      "use strict";
      function r(e) {
        return e;
      }
      n.d(t, { U: () => r });
    },
    10678: (e, t, n) => {
      "use strict";
      function r(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e;
      }
      function o(e, t) {
        var n = {};
        if ("object" == typeof t)
          !(function e(t, n) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              o = {};
            for (var i in t) {
              var a = t[i],
                s = [...r, i];
              "string" == typeof a || "number" == typeof a || null == a
                ? (o[i] = n(a, s))
                : "object" != typeof a || Array.isArray(a)
                ? console.warn(
                    'Skipping invalid key "'
                      .concat(
                        s.join("."),
                        '". Should be a string, number, null or object. Received: "'
                      )
                      .concat(Array.isArray(a) ? "Array" : typeof a, '"')
                  )
                : (o[i] = e(a, n, s));
            }
            return o;
          })(t, (t, o) => {
            null != t &&
              (n[
                r(
                  (function (e, t) {
                    var n = e;
                    for (var r of t) {
                      if (!(r in n))
                        throw Error(
                          "Path ".concat(
                            t.join(" -> "),
                            " does not exist in object"
                          )
                        );
                      n = n[r];
                    }
                    return n;
                  })(e, o)
                )
              ] = String(t));
          });
        else
          for (var o in e) {
            var i = e[o];
            null != i && (n[r(o)] = i);
          }
        return (
          Object.defineProperty(n, "toString", {
            value: function () {
              return Object.keys(this)
                .map((e) => "".concat(e, ":").concat(this[e]))
                .join(";");
            },
            writable: !1,
          }),
          n
        );
      }
      n.d(t, { D: () => o });
    },
    11275: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => i });
      var r = n(12115),
        o = n(52712);
      function i(e) {
        let [t, n] = r.useState(void 0);
        return (
          (0, o.N)(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let r, o;
                if (!Array.isArray(t) || !t.length) return;
                let i = t[0];
                if ("borderBoxSize" in i) {
                  let e = i.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (r = t.inlineSize), (o = t.blockSize);
                } else (r = e.offsetWidth), (o = e.offsetHeight);
                n({ width: r, height: o });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            n(void 0);
          }, [e]),
          t
        );
      }
    },
    11318: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => r });
      let r = {
        formatters: void 0,
        fees: void 0,
        serializers: void 0,
        id: 1,
        name: "Ethereum",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://eth.merkle.io"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://etherscan.io",
            apiUrl: "https://api.etherscan.io/api",
          },
        },
        contracts: {
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          ensUniversalResolver: {
            address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
            blockCreated: 0x125db65,
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 0xdb04c1,
          },
        },
      };
    },
    12228: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => r });
      var r =
        '{\n  "connect_wallet": {\n    "label": "Connect Wallet",\n    "wrong_network": {\n      "label": "Wrong network"\n    }\n  },\n\n  "intro": {\n    "title": "What is a Wallet?",\n    "description": "A wallet is used to send, receive, store, and display digital assets. It\'s also a new way to log in, without needing to create new accounts and passwords on every website.",\n    "digital_asset": {\n      "title": "A Home for your Digital Assets",\n      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."\n    },\n    "login": {\n      "title": "A New Way to Log In",\n      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."\n    },\n    "get": {\n      "label": "Get a Wallet"\n    },\n    "learn_more": {\n      "label": "Learn More"\n    }\n  },\n\n  "sign_in": {\n    "label": "Verify your account",\n    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",\n    "message": {\n      "send": "Sign message",\n      "preparing": "Preparing message...",\n      "cancel": "Cancel",\n      "preparing_error": "Error preparing message, please retry!"\n    },\n    "signature": {\n      "waiting": "Waiting for signature...",\n      "verifying": "Verifying signature...",\n      "signing_error": "Error signing message, please retry!",\n      "verifying_error": "Error verifying signature, please retry!",\n      "oops_error": "Oops, something went wrong!"\n    }\n  },\n\n  "connect": {\n    "label": "Connect",\n    "title": "Connect a Wallet",\n    "new_to_ethereum": {\n      "description": "New to Ethereum wallets?",\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "learn_more": {\n      "label": "Learn more"\n    },\n    "recent": "Recent",\n    "status": {\n      "opening": "Opening %{wallet}...",\n      "connecting": "Connecting",\n      "connect_mobile": "Continue in %{wallet}",\n      "not_installed": "%{wallet} is not installed",\n      "not_available": "%{wallet} is not available",\n      "confirm": "Confirm connection in the extension",\n      "confirm_mobile": "Accept connection request in the wallet"\n    },\n    "secondary_action": {\n      "get": {\n        "description": "Don\'t have %{wallet}?",\n        "label": "GET"\n      },\n      "install": {\n        "label": "INSTALL"\n      },\n      "retry": {\n        "label": "RETRY"\n      }\n    },\n    "walletconnect": {\n      "description": {\n        "full": "Need the official WalletConnect modal?",\n        "compact": "Need the WalletConnect modal?"\n      },\n      "open": {\n        "label": "OPEN"\n      }\n    }\n  },\n\n  "connect_scan": {\n    "title": "Scan with %{wallet}",\n    "fallback_title": "Scan with your phone"\n  },\n\n  "connector_group": {\n    "installed": "Installed",\n    "recommended": "Recommended",\n    "other": "Other",\n    "popular": "Popular",\n    "more": "More",\n    "others": "Others"\n  },\n\n  "get": {\n    "title": "Get a Wallet",\n    "action": {\n      "label": "GET"\n    },\n    "mobile": {\n      "description": "Mobile Wallet"\n    },\n    "extension": {\n      "description": "Browser Extension"\n    },\n    "mobile_and_extension": {\n      "description": "Mobile Wallet and Extension"\n    },\n    "mobile_and_desktop": {\n      "description": "Mobile and Desktop Wallet"\n    },\n    "looking_for": {\n      "title": "Not what you\'re looking for?",\n      "mobile": {\n        "description": "Select a wallet on the main screen to get started with a different wallet provider."\n      },\n      "desktop": {\n        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",\n        "wide_description": "Select a wallet on the left to get started with a different wallet provider."\n      }\n    }\n  },\n\n  "get_options": {\n    "title": "Get started with %{wallet}",\n    "short_title": "Get %{wallet}",\n    "mobile": {\n      "title": "%{wallet} for Mobile",\n      "description": "Use the mobile wallet to explore the world of Ethereum.",\n      "download": {\n        "label": "Get the app"\n      }\n    },\n    "extension": {\n      "title": "%{wallet} for %{browser}",\n      "description": "Access your wallet right from your favorite web browser.",\n      "download": {\n        "label": "Add to %{browser}"\n      }\n    },\n    "desktop": {\n      "title": "%{wallet} for %{platform}",\n      "description": "Access your wallet natively from your powerful desktop.",\n      "download": {\n        "label": "Add to %{platform}"\n      }\n    }\n  },\n\n  "get_mobile": {\n    "title": "Install %{wallet}",\n    "description": "Scan with your phone to download on iOS or Android",\n    "continue": {\n      "label": "Continue"\n    }\n  },\n\n  "get_instructions": {\n    "mobile": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "extension": {\n      "refresh": {\n        "label": "Refresh"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "desktop": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    }\n  },\n\n  "chains": {\n    "title": "Switch Networks",\n    "wrong_network": "Wrong network detected, switch or disconnect to continue.",\n    "confirm": "Confirm in Wallet",\n    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",\n    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",\n    "disconnect": "Disconnect",\n    "connected": "Connected"\n  },\n\n  "profile": {\n    "disconnect": {\n      "label": "Disconnect"\n    },\n    "copy_address": {\n      "label": "Copy Address",\n      "copied": "Copied!"\n    },\n    "explorer": {\n      "label": "View more on explorer"\n    },\n    "transactions": {\n      "description": "%{appName} transactions will appear here...",\n      "description_fallback": "Your transactions will appear here...",\n      "recent": {\n        "title": "Recent Transactions"\n      },\n      "clear": {\n        "label": "Clear All"\n      }\n    }\n  },\n\n  "wallet_connectors": {\n    "argent": {\n      "qr_code": {\n        "step1": {\n          "description": "Put Argent on your home screen for faster access to your wallet.",\n          "title": "Open the Argent app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "berasig": {\n      "extension": {\n        "step1": {\n          "title": "Install the BeraSig extension",\n          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "best": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Best Wallet app",\n          "description": "Add Best Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bifrost": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",\n          "title": "Open the Bifrost Wallet app"\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "bitget": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",\n          "title": "Open the Bitget Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitget Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitski": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitski extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitverse": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Bitverse Wallet app",\n          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bloom": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Bloom Wallet app",\n          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",\n          "title": "Click on Connect"\n        }\n      }\n    },\n\n    "bybit": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",\n          "title": "Open the Bybit app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",\n          "title": "Install the Bybit Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "binance": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",\n          "title": "Open the Binance app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "coin98": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the Coin98 Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",\n          "title": "Install the Coin98 Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "coinbase": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",\n          "title": "Open the Coinbase Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using the cloud backup feature.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Coinbase Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "compass": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Compass Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "core": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Core on your home screen for faster access to your wallet.",\n          "title": "Open the Core app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",\n          "title": "Install the Core extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "fox": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting FoxWallet on your home screen for quicker access.",\n          "title": "Open the FoxWallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "frontier": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",\n          "title": "Open the Frontier Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Frontier Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "im_token": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the imToken app",\n          "description": "Put imToken app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "iopay": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",\n          "title": "Open the ioPay app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "kaikas": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaikas extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaikas app",\n          "description": "Put Kaikas app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kaia": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaia extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaia app",\n          "description": "Put Kaia app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kraken": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kraken Wallet app",\n          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kresus": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kresus Wallet app",\n          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "magicEden": {\n      "extension": {\n        "step1": {\n          "title": "Install the Magic Eden extension",\n          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "metamask": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the MetaMask app",\n          "description": "We recommend putting MetaMask on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the MetaMask extension",\n          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "nestwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the NestWallet extension",\n          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "okx": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the OKX Wallet app",\n          "description": "We recommend putting OKX Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the OKX Wallet extension",\n          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "omni": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Omni app",\n          "description": "Add Omni to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "1inch": {\n      "qr_code": {\n        "step1": {\n          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the 1inch Wallet app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "token_pocket": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the TokenPocket app",\n          "description": "We recommend putting TokenPocket on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the TokenPocket extension",\n          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "trust": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Trust Wallet app",\n          "description": "Put Trust Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Trust Wallet extension",\n          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "uniswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Uniswap app",\n          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "zerion": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zerion app",\n          "description": "We recommend putting Zerion on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Zerion extension",\n          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rainbow": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Rainbow app",\n          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "You can easily backup your wallet using our backup feature on your phone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "enkrypt": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Enkrypt Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "frame": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",\n          "title": "Install Frame & the companion extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "one_key": {\n      "extension": {\n        "step1": {\n          "title": "Install the OneKey Wallet extension",\n          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "paraswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the ParaSwap app",\n          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "phantom": {\n      "extension": {\n        "step1": {\n          "title": "Install the Phantom extension",\n          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rabby": {\n      "extension": {\n        "step1": {\n          "title": "Install the Rabby extension",\n          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "ronin": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",\n          "title": "Open the Ronin Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Ronin Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "ramper": {\n      "extension": {\n        "step1": {\n          "title": "Install the Ramper extension",\n          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safeheron": {\n      "extension": {\n        "step1": {\n          "title": "Install the Core extension",\n          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "taho": {\n      "extension": {\n        "step1": {\n          "title": "Install the Taho extension",\n          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "wigwam": {\n      "extension": {\n        "step1": {\n          "title": "Install the Wigwam extension",\n          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "talisman": {\n      "extension": {\n        "step1": {\n          "title": "Install the Talisman extension",\n          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import an Ethereum Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "xdefi": {\n      "extension": {\n        "step1": {\n          "title": "Install the XDEFI Wallet extension",\n          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "zeal": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zeal app",\n          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Install the Zeal extension",\n          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safepal": {\n      "extension": {\n        "step1": {\n          "title": "Install the SafePal Wallet extension",\n          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SafePal Wallet app",\n          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "desig": {\n      "extension": {\n        "step1": {\n          "title": "Install the Desig extension",\n          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "subwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the SubWallet extension",\n          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SubWallet app",\n          "description": "We recommend putting SubWallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "clv": {\n      "extension": {\n        "step1": {\n          "title": "Install the CLV Wallet extension",\n          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the CLV Wallet app",\n          "description": "We recommend putting CLV Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "okto": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Okto app",\n          "description": "Add Okto to your home screen for quick access"\n        },\n        "step2": {\n          "title": "Create an MPC Wallet",\n          "description": "Create an account and generate a wallet"\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "ledger": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "Set up a new Ledger or connect to an existing one."\n        },\n        "step3": {\n          "title": "Connect",\n          "description": "A connection prompt will appear for you to connect your wallet."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "You can either sync with the desktop app or connect your Ledger."\n        },\n        "step3": {\n          "title": "Scan the code",\n          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "valora": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Valora app",\n          "description": "We recommend putting Valora on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "gate": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Gate app",\n          "description": "We recommend putting Gate on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Install the Gate extension",\n          "description": "We recommend pinning Gate to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "xportal": {\n      "qr_code": {\n        "step1": {\n          "description": "Put xPortal on your home screen for faster access to your wallet.",\n          "title": "Open the xPortal app"\n        },\n        "step2": {\n          "description": "Create a wallet or import an existing one.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "mew": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting MEW Wallet on your home screen for quicker access.",\n          "title": "Open the MEW Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using the cloud backup feature.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    }\n  },\n\n  "zilpay": {\n    "qr_code": {\n      "step1": {\n        "title": "Open the ZilPay app",\n        "description": "Add ZilPay to your home screen for faster access to your wallet."\n      },\n      "step2": {\n        "title": "Create or Import a Wallet",\n        "description": "Create a new wallet or import an existing one."\n      },\n      "step3": {\n        "title": "Tap the scan button",\n        "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n      }\n    }\n  }\n}\n';
    },
    12421: (e, t, n) => {
      "use strict";
      n.d(t, { y: () => o });
      let r = (e) => {
          let t,
            n = new Set(),
            r = (e, r) => {
              let o = "function" == typeof e ? e(t) : e;
              if (!Object.is(o, t)) {
                let e = t;
                (t = (null != r ? r : "object" != typeof o || null === o)
                  ? o
                  : Object.assign({}, t, o)),
                  n.forEach((n) => n(t, e));
              }
            },
            o = () => t,
            i = {
              setState: r,
              getState: o,
              getInitialState: () => a,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
            },
            a = (t = e(r, o, i));
          return i;
        },
        o = (e) => (e ? r(e) : r);
    },
    12878: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function o(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function i(e, t, r, i, a) {
        if ("function" != typeof r)
          throw TypeError("The listener must be a function");
        var s = new o(r, i || e, a),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
      }
      function s() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (s.prototype.eventNames = function () {
          var e,
            r,
            o = [];
          if (0 === this._eventsCount) return o;
          for (r in (e = this._events))
            t.call(e, r) && o.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? o.concat(Object.getOwnPropertySymbols(e))
            : o;
        }),
        (s.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var o = 0, i = r.length, a = Array(i); o < i; o++)
            a[o] = r[o].fn;
          return a;
        }),
        (s.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (s.prototype.emit = function (e, t, r, o, i, a) {
          var s = n ? n + e : e;
          if (!this._events[s]) return !1;
          var c,
            l,
            u = this._events[s],
            d = arguments.length;
          if (u.fn) {
            switch ((u.once && this.removeListener(e, u.fn, void 0, !0), d)) {
              case 1:
                return u.fn.call(u.context), !0;
              case 2:
                return u.fn.call(u.context, t), !0;
              case 3:
                return u.fn.call(u.context, t, r), !0;
              case 4:
                return u.fn.call(u.context, t, r, o), !0;
              case 5:
                return u.fn.call(u.context, t, r, o, i), !0;
              case 6:
                return u.fn.call(u.context, t, r, o, i, a), !0;
            }
            for (l = 1, c = Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
            u.fn.apply(u.context, c);
          } else {
            var p,
              f = u.length;
            for (l = 0; l < f; l++)
              switch (
                (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), d)
              ) {
                case 1:
                  u[l].fn.call(u[l].context);
                  break;
                case 2:
                  u[l].fn.call(u[l].context, t);
                  break;
                case 3:
                  u[l].fn.call(u[l].context, t, r);
                  break;
                case 4:
                  u[l].fn.call(u[l].context, t, r, o);
                  break;
                default:
                  if (!c)
                    for (p = 1, c = Array(d - 1); p < d; p++)
                      c[p - 1] = arguments[p];
                  u[l].fn.apply(u[l].context, c);
              }
          }
          return !0;
        }),
        (s.prototype.on = function (e, t, n) {
          return i(this, e, t, n, !1);
        }),
        (s.prototype.once = function (e, t, n) {
          return i(this, e, t, n, !0);
        }),
        (s.prototype.removeListener = function (e, t, r, o) {
          var i = n ? n + e : e;
          if (!this._events[i]) return this;
          if (!t) return a(this, i), this;
          var s = this._events[i];
          if (s.fn)
            s.fn !== t ||
              (o && !s.once) ||
              (r && s.context !== r) ||
              a(this, i);
          else {
            for (var c = 0, l = [], u = s.length; c < u; c++)
              (s[c].fn !== t ||
                (o && !s[c].once) ||
                (r && s[c].context !== r)) &&
                l.push(s[c]);
            l.length
              ? (this._events[i] = 1 === l.length ? l[0] : l)
              : a(this, i);
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && a(this, t))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prefixed = n),
        (s.EventEmitter = s),
        (e.exports = s);
    },
    13558: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => v });
      var r = n(27493),
        o = n(54335),
        i = n(1405),
        a = n(59742),
        s = n(70030),
        c = n(77136);
      function l(e) {
        return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(c.pj[e]);
      }
      var u = n(35109),
        d = n(6083);
      async function p(e, t) {
        let { allowFailure: n = !0, chainId: r, contracts: o, ...i } = t,
          a = e.getClient({ chainId: r });
        return (0, s.T)(
          a,
          d.C,
          "multicall"
        )({ allowFailure: n, contracts: o, ...i });
      }
      var f = n(9428);
      async function h(e, t) {
        let { allowFailure: n = !0, blockNumber: r, blockTag: o, ...i } = t,
          a = t.contracts;
        try {
          let t = {};
          for (let [n, r] of a.entries()) {
            let o = r.chainId ?? e.state.chainId;
            t[o] || (t[o] = []), t[o]?.push({ contract: r, index: n });
          }
          let s = (
              await Promise.all(
                Object.entries(t).map(([t, a]) =>
                  p(e, {
                    ...i,
                    allowFailure: n,
                    blockNumber: r,
                    blockTag: o,
                    chainId: Number.parseInt(t),
                    contracts: a.map(({ contract: e }) => e),
                  })
                )
              )
            ).flat(),
            c = Object.values(t).flatMap((e) => e.map(({ index: e }) => e));
          return s.reduce((e, t, n) => (e && (e[c[n]] = t), e), []);
        } catch (i) {
          if (i instanceof u.bG) throw i;
          let t = () =>
            a.map((t) => (0, f.J)(e, { ...t, blockNumber: r, blockTag: o }));
          if (n)
            return (await Promise.allSettled(t())).map((e) =>
              "fulfilled" === e.status
                ? { result: e.value, status: "success" }
                : { error: e.reason, result: void 0, status: "failure" }
            );
          return await Promise.all(t());
        }
      }
      async function w(e, t) {
        let {
          address: n,
          blockNumber: c,
          blockTag: u,
          chainId: d,
          token: p,
          unit: f = "ether",
        } = t;
        if (p)
          try {
            return await m(e, {
              balanceAddress: n,
              chainId: d,
              symbolType: "string",
              tokenAddress: p,
            });
          } catch (t) {
            if ("ContractFunctionExecutionError" === t.name) {
              let t = await m(e, {
                  balanceAddress: n,
                  chainId: d,
                  symbolType: "bytes32",
                  tokenAddress: p,
                }),
                i = (0, r.IQ)((0, o.B)(t.symbol, { dir: "right" }));
              return { ...t, symbol: i };
            }
            throw t;
          }
        let h = e.getClient({ chainId: d }),
          w = (0, s.T)(h, a.r, "getBalance"),
          y = await w(
            c ? { address: n, blockNumber: c } : { address: n, blockTag: u }
          ),
          g = e.chains.find((e) => e.id === d) ?? h.chain;
        return {
          decimals: g.nativeCurrency.decimals,
          formatted: (0, i.J)(y, l(f)),
          symbol: g.nativeCurrency.symbol,
          value: y,
        };
      }
      async function m(e, t) {
        let {
            balanceAddress: n,
            chainId: r,
            symbolType: o,
            tokenAddress: a,
            unit: s,
          } = t,
          c = {
            abi: [
              {
                type: "function",
                name: "balanceOf",
                stateMutability: "view",
                inputs: [{ type: "address" }],
                outputs: [{ type: "uint256" }],
              },
              {
                type: "function",
                name: "decimals",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: "uint8" }],
              },
              {
                type: "function",
                name: "symbol",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: o }],
              },
            ],
            address: a,
          },
          [u, d, p] = await h(e, {
            allowFailure: !1,
            contracts: [
              { ...c, functionName: "balanceOf", args: [n], chainId: r },
              { ...c, functionName: "decimals", chainId: r },
              { ...c, functionName: "symbol", chainId: r },
            ],
          }),
          f = (0, i.J)(u ?? "0", l(s ?? d));
        return { decimals: d, formatted: f, symbol: p, value: u };
      }
      var y = n(62108),
        g = n(43484),
        b = n(18224),
        A = n(53031);
      function v() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: o = {} } = n,
          i = (0, A.U)(n),
          a = (0, b.i)({ config: i }),
          s = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: r, ...o } = t[1];
                if (!n) throw Error("address is required");
                return (await w(e, { ...o, address: n })) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["balance", (0, y.xO)(e)];
              })(t),
            };
          })(i, { ...n, chainId: null != (e = n.chainId) ? e : a }),
          c = !!(r && (null == (t = o.enabled) || t));
        return (0, g.IT)({ ...o, ...s, enabled: c });
      }
    },
    15071: (e, t, n) => {
      "use strict";
      n.d(t, { v: () => l });
      var r = n(55394),
        o = n(70030),
        i = n(62108),
        a = n(43484),
        s = n(18224),
        c = n(53031);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: l, query: u = {} } = n,
          d = (0, c.U)(n),
          p = (0, s.i)({ config: d }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: i, ...a } = t[1];
                if (!n) throw Error("address is required");
                let { chainId: s, ...c } = { ...a, address: n },
                  l = e.getClient({ chainId: s });
                return (0, o.T)(l, r.s, "getEnsName")(c);
              },
              queryKey: (function (e = {}) {
                return ["ensName", (0, i.xO)(e)];
              })(t),
            };
          })(d, { ...n, chainId: null != (e = n.chainId) ? e : p }),
          h = !!(l && (null == (t = u.enabled) || t));
        return (0, a.IT)({ ...u, ...f, enabled: h });
      }
    },
    16860: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => c });
      var r = n(9894),
        o = n(77752),
        i = n(35883),
        a = n(81379),
        s = n(67622);
      function c(e = {}) {
        var t, l;
        let u, d, p, f, h, w, m, y, g;
        return "3" === e.version || e.headlessMode
          ? ((t = e),
            (0, r.U)((e) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: c.type,
              async connect({ chainId: e } = {}) {
                try {
                  let t = await this.getProvider(),
                    n = (
                      await t.request({ method: "eth_requestAccounts" })
                    ).map((e) => (0, i.b)(e));
                  p ||
                    ((p = this.onAccountsChanged.bind(this)),
                    t.on("accountsChanged", p)),
                    f ||
                      ((f = this.onChainChanged.bind(this)),
                      t.on("chainChanged", f)),
                    h ||
                      ((h = this.onDisconnect.bind(this)),
                      t.on("disconnect", h));
                  let r = await this.getChainId();
                  if (e && r !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === a.vx.code) throw e;
                        return { id: r };
                      }
                    );
                    r = t?.id ?? r;
                  }
                  return { accounts: n, chainId: r };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account)/i.test(
                      e.message
                    )
                  )
                    throw new a.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                p && (e.removeListener("accountsChanged", p), (p = void 0)),
                  f && (e.removeListener("chainChanged", f), (f = void 0)),
                  h && (e.removeListener("disconnect", h), (h = void 0)),
                  e.disconnect(),
                  e.close();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, i.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!d) {
                  u = new (await (async () => {
                    let { default: e } = await Promise.all([
                      n.e(4818),
                      n.e(4134),
                      n.e(2524),
                      n.e(9466),
                    ]).then(n.t.bind(n, 62524, 19));
                    return "function" != typeof e &&
                      "function" == typeof e.default
                      ? e.default
                      : e;
                  })())({ ...t, reloadOnDisconnect: !1 });
                  let r = u.walletExtension?.getChainId(),
                    o =
                      e.chains.find((e) =>
                        t.chainId ? e.id === t.chainId : e.id === r
                      ) || e.chains[0],
                    i = t.chainId || o?.id,
                    a = t.jsonRpcUrl || o?.rpcUrls.default.http[0];
                  d = u.makeWeb3Provider(a, i);
                }
                return d;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: t, chainId: n }) {
                let r = e.chains.find((e) => e.id === n);
                if (!r) throw new a.ch(new o.nk());
                let i = await this.getProvider();
                try {
                  return (
                    await i.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(r.id) }],
                    }),
                    r
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, o;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : r.blockExplorers?.default.url
                        ? [r.blockExplorers?.default.url]
                        : []),
                        (o = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [r.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: e,
                        chainId: (0, s.cK)(n),
                        chainName: t?.chainName ?? r.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? r.nativeCurrency,
                        rpcUrls: o,
                      };
                      return (
                        await i.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        r
                      );
                    } catch (e) {
                      throw new a.vx(e);
                    }
                  throw new a.ch(e);
                }
              },
              onAccountsChanged(t) {
                0 === t.length
                  ? this.onDisconnect()
                  : e.emitter.emit("change", {
                      accounts: t.map((e) => (0, i.b)(e)),
                    });
              },
              onChainChanged(t) {
                let n = Number(t);
                e.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let n = await this.getProvider();
                p && (n.removeListener("accountsChanged", p), (p = void 0)),
                  f && (n.removeListener("chainChanged", f), (f = void 0)),
                  h && (n.removeListener("disconnect", h), (h = void 0));
              },
            })))
          : ((l = e),
            (0, r.U)((e) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: c.type,
              async connect({ chainId: e, ...t } = {}) {
                try {
                  let n = await this.getProvider(),
                    r = (
                      await n.request({
                        method: "eth_requestAccounts",
                        params:
                          "instantOnboarding" in t && t.instantOnboarding
                            ? [{ onboarding: "instant" }]
                            : [],
                      })
                    ).map((e) => (0, i.b)(e));
                  m ||
                    ((m = this.onAccountsChanged.bind(this)),
                    n.on("accountsChanged", m)),
                    y ||
                      ((y = this.onChainChanged.bind(this)),
                      n.on("chainChanged", y)),
                    g ||
                      ((g = this.onDisconnect.bind(this)),
                      n.on("disconnect", g));
                  let o = await this.getChainId();
                  if (e && o !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === a.vx.code) throw e;
                        return { id: o };
                      }
                    );
                    o = t?.id ?? o;
                  }
                  return { accounts: r, chainId: o };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
                      e.message
                    )
                  )
                    throw new a.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                m && (e.removeListener("accountsChanged", m), (m = void 0)),
                  y && (e.removeListener("chainChanged", y), (y = void 0)),
                  g && (e.removeListener("disconnect", g), (g = void 0)),
                  e.disconnect(),
                  e.close?.();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, i.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!w) {
                  let t =
                      "string" == typeof l.preference
                        ? { options: l.preference }
                        : {
                            ...l.preference,
                            options: l.preference?.options ?? "all",
                          },
                    { createCoinbaseWalletSDK: r } = await Promise.all([
                      n.e(4134),
                      n.e(1034),
                      n.e(6747),
                    ]).then(n.bind(n, 6747));
                  w = r({
                    ...l,
                    appChainIds: e.chains.map((e) => e.id),
                    preference: t,
                  }).getProvider();
                }
                return w;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: t, chainId: n }) {
                let r = e.chains.find((e) => e.id === n);
                if (!r) throw new a.ch(new o.nk());
                let i = await this.getProvider();
                try {
                  return (
                    await i.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(r.id) }],
                    }),
                    r
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, o;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : r.blockExplorers?.default.url
                        ? [r.blockExplorers?.default.url]
                        : []),
                        (o = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [r.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: e,
                        chainId: (0, s.cK)(n),
                        chainName: t?.chainName ?? r.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? r.nativeCurrency,
                        rpcUrls: o,
                      };
                      return (
                        await i.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        r
                      );
                    } catch (e) {
                      throw new a.vx(e);
                    }
                  throw new a.ch(e);
                }
              },
              onAccountsChanged(t) {
                0 === t.length
                  ? this.onDisconnect()
                  : e.emitter.emit("change", {
                      accounts: t.map((e) => (0, i.b)(e)),
                    });
              },
              onChainChanged(t) {
                let n = Number(t);
                e.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let n = await this.getProvider();
                m && (n.removeListener("accountsChanged", m), (m = void 0)),
                  y && (n.removeListener("chainChanged", y), (y = void 0)),
                  g && (n.removeListener("disconnect", g), (g = void 0));
              },
            })));
      }
      c.type = "coinbaseWallet";
    },
    17255: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => i });
      var r = n(36444),
        o = n(81757);
      function i(e, t) {
        if (!(0, o.P)(e, { strict: !1 })) throw new r.M({ address: e });
        if (!(0, o.P)(t, { strict: !1 })) throw new r.M({ address: t });
        return e.toLowerCase() === t.toLowerCase();
      }
    },
    19178: (e, t, n) => {
      "use strict";
      n.d(t, { qW: () => p });
      var r,
        o = n(12115),
        i = n(85185),
        a = n(63655),
        s = n(6101),
        c = n(39033),
        l = n(95155),
        u = "dismissableLayer.update",
        d = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        p = o.forwardRef((e, t) => {
          var n, p;
          let {
              disableOutsidePointerEvents: w = !1,
              onEscapeKeyDown: m,
              onPointerDownOutside: y,
              onFocusOutside: g,
              onInteractOutside: b,
              onDismiss: A,
              ...v
            } = e,
            C = o.useContext(d),
            [x, k] = o.useState(null),
            E =
              null != (p = null == x ? void 0 : x.ownerDocument)
                ? p
                : null == (n = globalThis)
                ? void 0
                : n.document,
            [, I] = o.useState({}),
            B = (0, s.s)(t, (e) => k(e)),
            S = Array.from(C.layers),
            [N] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
            T = S.indexOf(N),
            O = x ? S.indexOf(x) : -1,
            P = C.layersWithOutsidePointerEventsDisabled.size > 0,
            D = O >= T,
            M = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == (t = globalThis)
                    ? void 0
                    : t.document,
                r = (0, c.c)(e),
                i = o.useRef(!1),
                a = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !i.current) {
                        let t = function () {
                            h("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", a.current),
                            (a.current = t),
                            n.addEventListener("click", a.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", a.current);
                      i.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", a.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (i.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...C.branches].some((e) => e.contains(t));
              D &&
                !n &&
                (null == y || y(e),
                null == b || b(e),
                e.defaultPrevented || null == A || A());
            }, E),
            W = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == (t = globalThis)
                    ? void 0
                    : t.document,
                r = (0, c.c)(e),
                i = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !i.current &&
                      h(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (i.current = !0),
                  onBlurCapture: () => (i.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              ![...C.branches].some((e) => e.contains(t)) &&
                (null == g || g(e),
                null == b || b(e),
                e.defaultPrevented || null == A || A());
            }, E);
          return (
            !(function (e, t = globalThis?.document) {
              let n = (0, c.c)(e);
              o.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              O === C.layers.size - 1 &&
                (null == m || m(e),
                !e.defaultPrevented && A && (e.preventDefault(), A()));
            }, E),
            o.useEffect(() => {
              if (x)
                return (
                  w &&
                    (0 === C.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = E.body.style.pointerEvents),
                      (E.body.style.pointerEvents = "none")),
                    C.layersWithOutsidePointerEventsDisabled.add(x)),
                  C.layers.add(x),
                  f(),
                  () => {
                    w &&
                      1 === C.layersWithOutsidePointerEventsDisabled.size &&
                      (E.body.style.pointerEvents = r);
                  }
                );
            }, [x, E, w, C]),
            o.useEffect(
              () => () => {
                x &&
                  (C.layers.delete(x),
                  C.layersWithOutsidePointerEventsDisabled.delete(x),
                  f());
              },
              [x, C]
            ),
            o.useEffect(() => {
              let e = () => I({});
              return (
                document.addEventListener(u, e),
                () => document.removeEventListener(u, e)
              );
            }, []),
            (0, l.jsx)(a.sG.div, {
              ...v,
              ref: B,
              style: {
                pointerEvents: P ? (D ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, i.m)(e.onFocusCapture, W.onFocusCapture),
              onBlurCapture: (0, i.m)(e.onBlurCapture, W.onBlurCapture),
              onPointerDownCapture: (0, i.m)(
                e.onPointerDownCapture,
                M.onPointerDownCapture
              ),
            })
          );
        });
      function f() {
        let e = new CustomEvent(u);
        document.dispatchEvent(e);
      }
      function h(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.target,
          s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && i.addEventListener(e, t, { once: !0 }),
          o ? (0, a.hO)(i, s) : i.dispatchEvent(s);
      }
      (p.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(d),
            r = o.useRef(null),
            i = (0, s.s)(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, l.jsx)(a.sG.div, { ...e, ref: i })
          );
        }).displayName = "DismissableLayerBranch");
    },
    21515: (e, t, n) => {
      "use strict";
      n.d(t, { jp: () => w });
      var r = n(12115),
        o = n(29874),
        i = n(56985),
        a = { left: 0, top: 0, right: 0, gap: 0 },
        s = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        c = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [s(n), s(r), s(o)];
        },
        l = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return a;
          var t = c(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        u = (0, o.T0)(),
        d = "data-scroll-locked",
        p = function (e, t, n, r) {
          var o = e.left,
            a = e.top,
            s = e.right,
            c = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat(i.E9, " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(d, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(
                        s,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(c, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(c, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(i.Mi, " {\n    right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(i.pN, " {\n    margin-right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(i.Mi, " .")
              .concat(i.Mi, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(i.pN, " .")
              .concat(i.pN, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(d, "] {\n    ")
              .concat(i.xi, ": ")
              .concat(c, "px;\n  }\n")
          );
        },
        f = function () {
          var e = parseInt(document.body.getAttribute(d) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        h = function () {
          r.useEffect(function () {
            return (
              document.body.setAttribute(d, (f() + 1).toString()),
              function () {
                var e = f() - 1;
                e <= 0
                  ? document.body.removeAttribute(d)
                  : document.body.setAttribute(d, e.toString());
              }
            );
          }, []);
        },
        w = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            o = e.gapMode,
            i = void 0 === o ? "margin" : o;
          h();
          var a = r.useMemo(
            function () {
              return l(i);
            },
            [i]
          );
          return r.createElement(u, {
            styles: p(a, !t, i, n ? "" : "!important"),
          });
        };
    },
    22930: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => p });
      var r = n(5041),
        o = n(19405),
        i = n(50431),
        a = n(67622);
      async function s(e, { account: t = e.account, message: n }) {
        if (!t) throw new i.T({ docsPath: "/docs/actions/wallet/signMessage" });
        let r = (0, o.J)(t);
        if (r.signMessage) return r.signMessage({ message: n });
        let s =
          "string" == typeof n
            ? (0, a.i3)(n)
            : n.raw instanceof Uint8Array
            ? (0, a.nj)(n.raw)
            : n.raw;
        return e.request(
          { method: "personal_sign", params: [s, r.address] },
          { retryCount: 0 }
        );
      }
      var c = n(70030),
        l = n(95990);
      async function u(e, t) {
        let n,
          { account: r, connector: o, ...i } = t;
        return (
          (n =
            "object" == typeof r && "local" === r.type
              ? e.getClient()
              : await (0, l.r)(e, { account: r, connector: o })),
          (0, c.T)(n, s, "signMessage")({ ...i, ...(r ? { account: r } : {}) })
        );
      }
      var d = n(53031);
      function p() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          o =
            ((e = (0, d.U)(t)),
            { mutationFn: (t) => u(e, t), mutationKey: ["signMessage"] }),
          { mutate: i, mutateAsync: a, ...s } = (0, r.n)({ ...n, ...o });
        return { ...s, signMessage: i, signMessageAsync: a };
      }
    },
    26719: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => u });
      var r = n(5041);
      async function o(e, t = {}) {
        let n;
        if (t.connector) n = t.connector;
        else {
          let { connections: t, current: r } = e.state,
            o = t.get(r);
          n = o?.connector;
        }
        let r = e.state.connections;
        n &&
          (await n.disconnect(),
          n.emitter.off("change", e._internal.events.change),
          n.emitter.off("disconnect", e._internal.events.disconnect),
          n.emitter.on("connect", e._internal.events.connect),
          r.delete(n.uid)),
          e.setState((e) => {
            if (0 === r.size)
              return {
                ...e,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let t = r.values().next().value;
            return { ...e, connections: new Map(r), current: t.connector.uid };
          });
        {
          let t = e.state.current;
          if (!t) return;
          let n = e.state.connections.get(t)?.connector;
          if (!n) return;
          await e.storage?.setItem("recentConnectorId", n.id);
        }
      }
      var i = n(53031),
        a = n(34250);
      let s = [];
      function c(e) {
        let t = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || (0, a.b)(s, t)
          ? s
          : ((s = t), t);
      }
      var l = n(12115);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, i.U)(e),
          s = { mutationFn: (e) => o(n, e), mutationKey: ["disconnect"] },
          { mutate: u, mutateAsync: d, ...p } = (0, r.n)({ ...t, ...s });
        return {
          ...p,
          connectors: (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (0, i.U)(e);
            return (0, l.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e.subscribe(() => c(e), n, { equalityFn: a.b });
                })(t, { onChange: e }),
              () => c(t),
              () => c(t)
            );
          })({ config: n }).map((e) => e.connector),
          disconnect: u,
          disconnectAsync: d,
        };
      }
    },
    29803: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => a });
      var r = n(2558),
        o = {
          blue: { accentColor: "#0E76FD", accentColorForeground: "#FFF" },
          green: { accentColor: "#1DB847", accentColorForeground: "#FFF" },
          orange: { accentColor: "#FF801F", accentColorForeground: "#FFF" },
          pink: { accentColor: "#FF5CA0", accentColorForeground: "#FFF" },
          purple: { accentColor: "#5F5AFA", accentColorForeground: "#FFF" },
          red: { accentColor: "#FA423C", accentColorForeground: "#FFF" },
        },
        i = o.blue,
        a = function () {
          let {
            accentColor: e = i.accentColor,
            accentColorForeground: t = i.accentColorForeground,
            ...n
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return {
            ...(0, r.$)(n),
            colors: {
              accentColor: e,
              accentColorForeground: t,
              actionButtonBorder: "rgba(0, 0, 0, 0.04)",
              actionButtonBorderMobile: "rgba(0, 0, 0, 0.06)",
              actionButtonSecondaryBackground: "rgba(0, 0, 0, 0.06)",
              closeButton: "rgba(60, 66, 66, 0.8)",
              closeButtonBackground: "rgba(0, 0, 0, 0.06)",
              connectButtonBackground: "#FFF",
              connectButtonBackgroundError: "#FF494A",
              connectButtonInnerBackground:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",
              connectButtonText: "#25292E",
              connectButtonTextError: "#FFF",
              connectionIndicator: "#30E000",
              downloadBottomCardBackground:
                "linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",
              downloadTopCardBackground:
                "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",
              error: "#FF494A",
              generalBorder: "rgba(0, 0, 0, 0.06)",
              generalBorderDim: "rgba(0, 0, 0, 0.03)",
              menuItemBackground: "rgba(60, 66, 66, 0.1)",
              modalBackdrop: "rgba(0, 0, 0, 0.3)",
              modalBackground: "#FFF",
              modalBorder: "transparent",
              modalText: "#25292E",
              modalTextDim: "rgba(60, 66, 66, 0.3)",
              modalTextSecondary: "rgba(60, 66, 66, 0.6)",
              profileAction: "#FFF",
              profileActionHover: "rgba(255, 255, 255, 0.5)",
              profileForeground: "rgba(60, 66, 66, 0.06)",
              selectedOptionBorder: "rgba(60, 66, 66, 0.1)",
              standby: "#FFD641",
            },
            shadows: {
              connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
              profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
              selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.12)",
              walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)",
            },
          };
        };
      a.accentColors = o;
    },
    29874: (e, t, n) => {
      "use strict";
      n.d(t, { T0: () => s });
      var r,
        o = n(12115),
        i = function () {
          var e = 0,
            t = null;
          return {
            add: function (o) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = r || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var i, a;
                (i = t).styleSheet
                  ? (i.styleSheet.cssText = o)
                  : i.appendChild(document.createTextNode(o)),
                  (a = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(a);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        a = function () {
          var e = i();
          return function (t, n) {
            o.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        s = function () {
          var e = a();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        };
    },
    30106: (e, t, n) => {
      "use strict";
      n.d(t, { x: () => a });
      var r = n(69432),
        o = n(67622),
        i = n(12914);
      async function a(
        e,
        { blockHash: t, blockNumber: n, blockTag: a, hash: s, index: c }
      ) {
        let l = a || "latest",
          u = void 0 !== n ? (0, o.cK)(n) : void 0,
          d = null;
        if (
          (s
            ? (d = await e.request(
                { method: "eth_getTransactionByHash", params: [s] },
                { dedupe: !0 }
              ))
            : t
            ? (d = await e.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [t, (0, o.cK)(c)],
                },
                { dedupe: !0 }
              ))
            : (u || l) &&
              (d = await e.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [u || l, (0, o.cK)(c)],
                },
                { dedupe: !!u }
              )),
          !d)
        )
          throw new r.Kz({
            blockHash: t,
            blockNumber: n,
            blockTag: l,
            hash: s,
            index: c,
          });
        return (e.chain?.formatters?.transaction?.format || i.uP)(d);
      }
    },
    31368: (e, t, n) => {
      "use strict";
      let r;
      n.d(t, { Z: () => A });
      var o = n(98078);
      let i = (e) => (t, n, r) => {
          let o = r.subscribe;
          return (
            (r.subscribe = (e, t, n) => {
              let i = e;
              if (t) {
                let o = (null == n ? void 0 : n.equalityFn) || Object.is,
                  a = e(r.getState());
                (i = (n) => {
                  let r = e(n);
                  if (!o(a, r)) {
                    let e = a;
                    t((a = r), e);
                  }
                }),
                  (null == n ? void 0 : n.fireImmediately) && t(a, a);
              }
              return o(i);
            }),
            e(t, n, r)
          );
        },
        a = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => a(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => a(t)(e),
            };
          }
        },
        s = (e, t) => (n, r, o) => {
          let i,
            s = {
              storage: (function (e, t) {
                let n;
                try {
                  n = e();
                } catch (e) {
                  return;
                }
                return {
                  getItem: (e) => {
                    var t;
                    let r = (e) => (null === e ? null : JSON.parse(e, void 0)),
                      o = null != (t = n.getItem(e)) ? t : null;
                    return o instanceof Promise ? o.then(r) : r(o);
                  },
                  setItem: (e, t) => n.setItem(e, JSON.stringify(t, void 0)),
                  removeItem: (e) => n.removeItem(e),
                };
              })(() => localStorage),
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            c = !1,
            l = new Set(),
            u = new Set(),
            d = s.storage;
          if (!d)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
                ),
                  n(...e);
              },
              r,
              o
            );
          let p = () => {
              let e = s.partialize({ ...r() });
              return d.setItem(s.name, { state: e, version: s.version });
            },
            f = o.setState;
          o.setState = (e, t) => {
            f(e, t), p();
          };
          let h = e(
            (...e) => {
              n(...e), p();
            },
            r,
            o
          );
          o.getInitialState = () => h;
          let w = () => {
            var e, t;
            if (!d) return;
            (c = !1),
              l.forEach((e) => {
                var t;
                return e(null != (t = r()) ? t : h);
              });
            let o =
              (null == (t = s.onRehydrateStorage)
                ? void 0
                : t.call(s, null != (e = r()) ? e : h)) || void 0;
            return a(d.getItem.bind(d))(s.name)
              .then((e) => {
                if (e)
                  if ("number" != typeof e.version || e.version === s.version)
                    return [!1, e.state];
                  else {
                    if (s.migrate) return [!0, s.migrate(e.state, e.version)];
                    console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided"
                    );
                  }
                return [!1, void 0];
              })
              .then((e) => {
                var t;
                let [o, a] = e;
                if ((n((i = s.merge(a, null != (t = r()) ? t : h)), !0), o))
                  return p();
              })
              .then(() => {
                null == o || o(i, void 0),
                  (i = r()),
                  (c = !0),
                  u.forEach((e) => e(i));
              })
              .catch((e) => {
                null == o || o(void 0, e);
              });
          };
          return (
            (o.persist = {
              setOptions: (e) => {
                (s = { ...s, ...e }), e.storage && (d = e.storage);
              },
              clearStorage: () => {
                null == d || d.removeItem(s.name);
              },
              getOptions: () => s,
              rehydrate: () => w(),
              hasHydrated: () => c,
              onHydrate: (e) => (
                l.add(e),
                () => {
                  l.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                u.add(e),
                () => {
                  u.delete(e);
                }
              ),
            }),
            s.skipHydration || w(),
            i || h
          );
        };
      var c = n(12421),
        l = n(1607),
        u = n(12878);
      class d {
        constructor(e) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "_emitter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new u(),
            });
        }
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e, ...t) {
          let n = t[0];
          this._emitter.emit(e, { uid: this.uid, ...n });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
      }
      function p(e, t) {
        return JSON.parse(e, (e, n) => {
          let r = n;
          return (
            r?.__type === "bigint" && (r = BigInt(r.value)),
            r?.__type === "Map" && (r = new Map(r.value)),
            t?.(e, r) ?? r
          );
        });
      }
      function f(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function h(e, t) {
        let { length: n } = e;
        for (let r = 0; r < n; ++r) if (e[r] === t) return r + 1;
        return 0;
      }
      function w(e, t, n, r) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let n = "function" == typeof e,
              r = "function" == typeof t,
              o = [],
              i = [];
            return function (a, s) {
              if ("object" == typeof s)
                if (o.length) {
                  let e = h(o, this);
                  0 === e ? (o[o.length] = this) : (o.splice(e), i.splice(e)),
                    (i[i.length] = a);
                  let n = h(o, s);
                  if (0 !== n)
                    return r ? t.call(this, a, s, f(i, n)) : `[ref=${f(i, n)}]`;
                } else (o[0] = s), (i[0] = a);
              return n ? e.call(this, a, s) : s;
            };
          })((e, n) => {
            let r = n;
            return (
              "bigint" == typeof r &&
                (r = { __type: "bigint", value: n.toString() }),
              r instanceof Map &&
                (r = { __type: "Map", value: Array.from(n.entries()) }),
              t?.(e, r) ?? r
            );
          }, r),
          n ?? void 0
        );
      }
      let m = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      var y = n(77752);
      let g = 256;
      var b = n(40194);
      function A(e) {
        let t,
          {
            multiInjectedProviderDiscovery: n = !0,
            storage: a = (function (e) {
              let {
                deserialize: t = p,
                key: n = "wagmi",
                serialize: r = w,
                storage: o = m,
              } = e;
              function i(e) {
                return e instanceof Promise
                  ? e.then((e) => e).catch(() => null)
                  : e;
              }
              return {
                ...o,
                key: n,
                async getItem(e, r) {
                  let a = o.getItem(`${n}.${e}`),
                    s = await i(a);
                  return s ? t(s) ?? null : r ?? null;
                },
                async setItem(e, t) {
                  let a = `${n}.${e}`;
                  null === t
                    ? await i(o.removeItem(a))
                    : await i(o.setItem(a, r(t)));
                },
                async removeItem(e) {
                  await i(o.removeItem(`${n}.${e}`));
                },
              };
            })({
              storage: (function () {
                let e =
                  "undefined" != typeof window && window.localStorage
                    ? window.localStorage
                    : m;
                return {
                  getItem: (t) => e.getItem(t),
                  removeItem(t) {
                    e.removeItem(t);
                  },
                  setItem(t, n) {
                    try {
                      e.setItem(t, n);
                    } catch {}
                  },
                };
              })(),
            }),
            syncConnectedChain: u = !0,
            ssr: f = !1,
            ...h
          } = e,
          A =
            "undefined" != typeof window && n
              ? (function () {
                  let e = new Set(),
                    t = [],
                    n = () =>
                      (function (e) {
                        if ("undefined" == typeof window) return;
                        let t = (t) => e(t.detail);
                        return (
                          window.addEventListener(
                            "eip6963:announceProvider",
                            t
                          ),
                          window.dispatchEvent(
                            new CustomEvent("eip6963:requestProvider")
                          ),
                          () =>
                            window.removeEventListener(
                              "eip6963:announceProvider",
                              t
                            )
                        );
                      })((n) => {
                        t.some(({ info: e }) => e.uuid === n.info.uuid) ||
                          ((t = [...t, n]),
                          e.forEach((e) => e(t, { added: [n] })));
                      }),
                    r = n();
                  return {
                    _listeners: () => e,
                    clear() {
                      e.forEach((e) => e([], { removed: [...t] })), (t = []);
                    },
                    destroy() {
                      this.clear(), e.clear(), r?.();
                    },
                    findProvider: ({ rdns: e }) =>
                      t.find((t) => t.info.rdns === e),
                    getProviders: () => t,
                    reset() {
                      this.clear(), r?.(), (r = n());
                    },
                    subscribe: (n, { emitImmediately: r } = {}) => (
                      e.add(n), r && n(t, { added: t }), () => e.delete(n)
                    ),
                  };
                })()
              : void 0,
          v = (0, c.y)(() => h.chains),
          C = (0, c.y)(() => {
            let e = [],
              t = new Set();
            for (let n of h.connectors ?? []) {
              let r = x(n);
              if ((e.push(r), !f && r.rdns))
                for (let e of "string" == typeof r.rdns ? [r.rdns] : r.rdns)
                  t.add(e);
            }
            if (!f && A)
              for (let n of A.getProviders())
                t.has(n.info.rdns) || e.push(x(k(n)));
            return e;
          });
        function x(e) {
          let t = new d(
              (function (e = 11) {
                if (!r || g + e > 512) {
                  (r = ""), (g = 0);
                  for (let e = 0; e < 256; e++)
                    r += ((256 + 256 * Math.random()) | 0)
                      .toString(16)
                      .substring(1);
                }
                return r.substring(g, g++ + e);
              })()
            ),
            n = {
              ...e({
                emitter: t,
                chains: v.getState(),
                storage: a,
                transports: h.transports,
              }),
              emitter: t,
              uid: t.uid,
            };
          return t.on("connect", O), n.setup?.(), n;
        }
        function k(e) {
          let { info: t } = e,
            n = e.provider;
          return (0, l.b)({ target: { ...t, id: t.rdns, provider: n } });
        }
        let E = new Map();
        function I() {
          return {
            chainId: v.getState()[0].id,
            connections: new Map(),
            current: null,
            status: "disconnected",
          };
        }
        let B = "0.0.0-canary-";
        t = b.r.startsWith(B)
          ? Number.parseInt(b.r.replace(B, ""))
          : Number.parseInt(b.r.split(".")[0] ?? "0");
        let S = (0, c.y)(
          i(
            a
              ? s(I, {
                  migrate(e, n) {
                    if (n === t) return e;
                    let r = I(),
                      o = N(e, r.chainId);
                    return { ...r, chainId: o };
                  },
                  name: "store",
                  partialize: (e) => ({
                    connections: {
                      __type: "Map",
                      value: Array.from(e.connections.entries()).map(
                        ([e, t]) => {
                          let { id: n, name: r, type: o, uid: i } = t.connector;
                          return [
                            e,
                            {
                              ...t,
                              connector: { id: n, name: r, type: o, uid: i },
                            },
                          ];
                        }
                      ),
                    },
                    chainId: e.chainId,
                    current: e.current,
                  }),
                  merge(e, t) {
                    "object" == typeof e &&
                      e &&
                      "status" in e &&
                      delete e.status;
                    let n = N(e, t.chainId);
                    return { ...t, ...e, chainId: n };
                  },
                  skipHydration: f,
                  storage: a,
                  version: t,
                })
              : I
          )
        );
        function N(e, t) {
          return e &&
            "object" == typeof e &&
            "chainId" in e &&
            "number" == typeof e.chainId &&
            v.getState().some((t) => t.id === e.chainId)
            ? e.chainId
            : t;
        }
        function T(e) {
          S.setState((t) => {
            let n = t.connections.get(e.uid);
            return n
              ? {
                  ...t,
                  connections: new Map(t.connections).set(e.uid, {
                    accounts: e.accounts ?? n.accounts,
                    chainId: e.chainId ?? n.chainId,
                    connector: n.connector,
                  }),
                }
              : t;
          });
        }
        function O(e) {
          "connecting" !== S.getState().status &&
            "reconnecting" !== S.getState().status &&
            S.setState((t) => {
              let n = C.getState().find((t) => t.uid === e.uid);
              return n
                ? (n.emitter.listenerCount("connect") &&
                    n.emitter.off("connect", T),
                  n.emitter.listenerCount("change") ||
                    n.emitter.on("change", T),
                  n.emitter.listenerCount("disconnect") ||
                    n.emitter.on("disconnect", P),
                  {
                    ...t,
                    connections: new Map(t.connections).set(e.uid, {
                      accounts: e.accounts,
                      chainId: e.chainId,
                      connector: n,
                    }),
                    current: e.uid,
                    status: "connected",
                  })
                : t;
            });
        }
        function P(e) {
          S.setState((t) => {
            let n = t.connections.get(e.uid);
            if (n) {
              let e = n.connector;
              e.emitter.listenerCount("change") &&
                n.connector.emitter.off("change", T),
                e.emitter.listenerCount("disconnect") &&
                  n.connector.emitter.off("disconnect", P),
                e.emitter.listenerCount("connect") ||
                  n.connector.emitter.on("connect", O);
            }
            if ((t.connections.delete(e.uid), 0 === t.connections.size))
              return {
                ...t,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let r = t.connections.values().next().value;
            return {
              ...t,
              connections: new Map(t.connections),
              current: r.connector.uid,
            };
          });
        }
        return (
          S.setState(I()),
          u &&
            S.subscribe(
              ({ connections: e, current: t }) =>
                t ? e.get(t)?.chainId : void 0,
              (e) => {
                if (v.getState().some((t) => t.id === e))
                  return S.setState((t) => ({ ...t, chainId: e ?? t.chainId }));
              }
            ),
          A?.subscribe((e) => {
            let t = new Set(),
              n = new Set();
            for (let e of C.getState())
              if ((t.add(e.id), e.rdns))
                for (let t of "string" == typeof e.rdns ? [e.rdns] : e.rdns)
                  n.add(t);
            let r = [];
            for (let o of e) {
              if (n.has(o.info.rdns)) continue;
              let e = x(k(o));
              t.has(e.id) || r.push(e);
            }
            (!a || S.persist.hasHydrated()) &&
              C.setState((e) => [...e, ...r], !0);
          }),
          {
            get chains() {
              return v.getState();
            },
            get connectors() {
              return C.getState();
            },
            storage: a,
            getClient: function (e = {}) {
              let t,
                n = e.chainId ?? S.getState().chainId,
                r = v.getState().find((e) => e.id === n);
              if (e.chainId && !r) throw new y.nk();
              {
                let e = E.get(S.getState().chainId);
                if (e && !r) return e;
                if (!r) throw new y.nk();
              }
              {
                let e = E.get(n);
                if (e) return e;
              }
              if (h.client) t = h.client({ chain: r });
              else {
                let e = r.id,
                  n = v.getState().map((e) => e.id),
                  i = {};
                for (let [t, r] of Object.entries(h))
                  if (
                    "chains" !== t &&
                    "client" !== t &&
                    "connectors" !== t &&
                    "transports" !== t
                  )
                    if ("object" == typeof r)
                      if (e in r) i[t] = r[e];
                      else {
                        if (n.some((e) => e in r)) continue;
                        i[t] = r;
                      }
                    else i[t] = r;
                t = (0, o.U)({
                  ...i,
                  chain: r,
                  batch: i.batch ?? { multicall: !0 },
                  transport: (t) => h.transports[e]({ ...t, connectors: C }),
                });
              }
              return E.set(n, t), t;
            },
            get state() {
              return S.getState();
            },
            setState(e) {
              let t;
              t = "function" == typeof e ? e(S.getState()) : e;
              let n = I();
              "object" != typeof t && (t = n),
                Object.keys(n).some((e) => !(e in t)) && (t = n),
                S.setState(t, !0);
            },
            subscribe: (e, t, n) =>
              S.subscribe(
                e,
                t,
                n ? { ...n, fireImmediately: n.emitImmediately } : void 0
              ),
            _internal: {
              mipd: A,
              store: S,
              ssr: !!f,
              syncConnectedChain: u,
              transports: h.transports,
              chains: {
                setState(e) {
                  let t = "function" == typeof e ? e(v.getState()) : e;
                  if (0 !== t.length) return v.setState(t, !0);
                },
                subscribe: (e) => v.subscribe(e),
              },
              connectors: {
                providerDetailToConnector: k,
                setup: x,
                setState: (e) =>
                  C.setState("function" == typeof e ? e(C.getState()) : e, !0),
                subscribe: (e) => C.subscribe(e),
              },
              events: { change: T, connect: O, disconnect: P },
            },
          }
        );
      }
    },
    32160: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => c });
      var r = n(79731),
        o = n(80844),
        i = n(67622),
        a = n(24578),
        s = n(70872);
      function c(e) {
        let t = new Uint8Array(32).fill(0);
        if (!e) return (0, i.My)(t);
        let n = e.split(".");
        for (let e = n.length - 1; e >= 0; e -= 1) {
          let i = (0, s.q)(n[e]),
            c = i ? (0, o.ZJ)(i) : (0, a.S)((0, o.Af)(n[e]), "bytes");
          t = (0, a.S)((0, r.xW)([t, c]), "bytes");
        }
        return (0, i.My)(t);
      }
    },
    34250: (e, t, n) => {
      "use strict";
      n.d(t, {
        b: () =>
          function e(t, n) {
            if (t === n) return !0;
            if (t && n && "object" == typeof t && "object" == typeof n) {
              let r, o;
              if (t.constructor !== n.constructor) return !1;
              if (Array.isArray(t) && Array.isArray(n)) {
                if ((r = t.length) !== n.length) return !1;
                for (o = r; 0 != o--; ) if (!e(t[o], n[o])) return !1;
                return !0;
              }
              if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === n.valueOf();
              if (t.toString !== Object.prototype.toString)
                return t.toString() === n.toString();
              let i = Object.keys(t);
              if ((r = i.length) !== Object.keys(n).length) return !1;
              for (o = r; 0 != o--; )
                if (!Object.prototype.hasOwnProperty.call(n, i[o])) return !1;
              for (o = r; 0 != o--; ) {
                let r = i[o];
                if (r && !e(t[r], n[r])) return !1;
              }
              return !0;
            }
            return t != t && n != n;
          },
      });
    },
    34378: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => c });
      var r = n(12115),
        o = n(47650),
        i = n(63655),
        a = n(52712),
        s = n(95155),
        c = r.forwardRef((e, t) => {
          var n, c;
          let { container: l, ...u } = e,
            [d, p] = r.useState(!1);
          (0, a.N)(() => p(!0), []);
          let f =
            l ||
            (d &&
              (null == (c = globalThis) || null == (n = c.document)
                ? void 0
                : n.body));
          return f
            ? o.createPortal((0, s.jsx)(i.sG.div, { ...u, ref: t }), f)
            : null;
        });
      c.displayName = "Portal";
    },
    36241: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => d });
      var r = n(90557),
        o = n(7441);
      class i extends o.C {
        constructor() {
          super(
            "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
            { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
          );
        }
      }
      var a = n(85569),
        s = n(78519),
        c = n(79183);
      let l = {
        current: 0,
        take() {
          return this.current++;
        },
        reset() {
          this.current = 0;
        },
      };
      var u = n(54315);
      function d(e, t = {}) {
        let {
          batch: n,
          fetchOptions: o,
          key: p = "http",
          methods: f,
          name: h = "HTTP JSON-RPC",
          onFetchRequest: w,
          onFetchResponse: m,
          retryDelay: y,
          raw: g,
        } = t;
        return ({ chain: d, retryCount: b, timeout: A }) => {
          let { batchSize: v = 1e3, wait: C = 0 } =
              "object" == typeof n ? n : {},
            x = t.retryCount ?? b,
            k = A ?? t.timeout ?? 1e4,
            E = e || d?.rpcUrls.default.http[0];
          if (!E) throw new i();
          let I = (function (e, t = {}) {
            return {
              async request(n) {
                let {
                    body: o,
                    onRequest: i = t.onRequest,
                    onResponse: a = t.onResponse,
                    timeout: u = t.timeout ?? 1e4,
                  } = n,
                  d = { ...(t.fetchOptions ?? {}), ...(n.fetchOptions ?? {}) },
                  { headers: p, method: f, signal: h } = d;
                try {
                  let t,
                    n = await (0, s.w)(
                      async ({ signal: t }) => {
                        let n = {
                            ...d,
                            body: Array.isArray(o)
                              ? (0, c.A)(
                                  o.map((e) => ({
                                    jsonrpc: "2.0",
                                    id: e.id ?? l.take(),
                                    ...e,
                                  }))
                                )
                              : (0, c.A)({
                                  jsonrpc: "2.0",
                                  id: o.id ?? l.take(),
                                  ...o,
                                }),
                            headers: {
                              "Content-Type": "application/json",
                              ...p,
                            },
                            method: f || "POST",
                            signal: h || (u > 0 ? t : null),
                          },
                          r = new Request(e, n),
                          a = (await i?.(r, n)) ?? { ...n, url: e };
                        return await fetch(a.url ?? e, a);
                      },
                      {
                        errorInstance: new r.MU({ body: o, url: e }),
                        timeout: u,
                        signal: !0,
                      }
                    );
                  if (
                    (a && (await a(n)),
                    n.headers
                      .get("Content-Type")
                      ?.startsWith("application/json"))
                  )
                    t = await n.json();
                  else {
                    t = await n.text();
                    try {
                      t = JSON.parse(t || "{}");
                    } catch (e) {
                      if (n.ok) throw e;
                      t = { error: t };
                    }
                  }
                  if (!n.ok)
                    throw new r.Ci({
                      body: o,
                      details: (0, c.A)(t.error) || n.statusText,
                      headers: n.headers,
                      status: n.status,
                      url: e,
                    });
                  return t;
                } catch (t) {
                  if (t instanceof r.Ci || t instanceof r.MU) throw t;
                  throw new r.Ci({ body: o, cause: t, url: e });
                }
              },
            };
          })(E, { fetchOptions: o, onRequest: w, onResponse: m, timeout: k });
          return (0, u.o)(
            {
              key: p,
              methods: f,
              name: h,
              async request({ method: e, params: t }) {
                let o = { method: e, params: t },
                  { schedule: i } = (0, a.u)({
                    id: E,
                    wait: C,
                    shouldSplitBatch: (e) => e.length > v,
                    fn: (e) => I.request({ body: e }),
                    sort: (e, t) => e.id - t.id,
                  }),
                  s = async (e) => (n ? i(e) : [await I.request({ body: e })]),
                  [{ error: c, result: l }] = await s(o);
                if (g) return { error: c, result: l };
                if (c) throw new r.J8({ body: o, error: c, url: E });
                return l;
              },
              retryCount: x,
              retryDelay: y,
              timeout: k,
              type: "http",
            },
            { fetchOptions: o, url: E }
          );
        };
      }
    },
    37136: (e, t, n) => {
      "use strict";
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                !(function (e, t, n) {
                  var r;
                  (t =
                    "symbol" ==
                    typeof (r = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(t, "string"))
                      ? r
                      : String(r)) in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n);
                })(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      n.d(t, { U: () => s });
      var i = (e) =>
          function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            var i = Object.assign({}, ...n.map((e) => e.styles)),
              a = Object.keys(i),
              s = a.filter((e) => "mappings" in i[e]);
            return Object.assign(
              (t) => {
                var n = [],
                  r = {},
                  a = o({}, t),
                  c = !1;
                for (var l of s) {
                  var u = t[l];
                  if (null != u)
                    for (var d of ((c = !0), i[l].mappings))
                      (r[d] = u), null == a[d] && delete a[d];
                }
                var p = c ? o(o({}, r), a) : t;
                for (var f in p)
                  if (
                    (function () {
                      var e = p[f],
                        t = i[f];
                      try {
                        if (t.mappings) return 1;
                        if ("string" == typeof e || "number" == typeof e)
                          n.push(t.values[e].defaultClass);
                        else if (Array.isArray(e))
                          for (var r = 0; r < e.length; r++) {
                            var o = e[r];
                            if (null != o) {
                              var a = t.responsiveArray[r];
                              n.push(t.values[o].conditions[a]);
                            }
                          }
                        else
                          for (var s in e) {
                            var c = e[s];
                            null != c && n.push(t.values[c].conditions[s]);
                          }
                      } catch (e) {
                        throw e;
                      }
                    })()
                  )
                    continue;
                return e(n.join(" "));
              },
              { properties: new Set(a) }
            );
          },
        a = (e) => e,
        s = function () {
          return i(a)(...arguments);
        };
    },
    37548: (e, t, n) => {
      "use strict";
      n.d(t, { f: () => i });
      var r = n(39249);
      function o(e) {
        return e;
      }
      function i(e) {
        void 0 === e && (e = {});
        var t,
          n,
          i,
          a,
          s =
            ((t = null),
            void 0 === n && (n = o),
            (i = []),
            (a = !1),
            {
              read: function () {
                if (a)
                  throw Error(
                    "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                  );
                return i.length ? i[i.length - 1] : null;
              },
              useMedium: function (e) {
                var t = n(e, a);
                return (
                  i.push(t),
                  function () {
                    i = i.filter(function (e) {
                      return e !== t;
                    });
                  }
                );
              },
              assignSyncMedium: function (e) {
                for (a = !0; i.length; ) {
                  var t = i;
                  (i = []), t.forEach(e);
                }
                i = {
                  push: function (t) {
                    return e(t);
                  },
                  filter: function () {
                    return i;
                  },
                };
              },
              assignMedium: function (e) {
                a = !0;
                var t = [];
                if (i.length) {
                  var n = i;
                  (i = []), n.forEach(e), (t = i);
                }
                var r = function () {
                    var n = t;
                    (t = []), n.forEach(e);
                  },
                  o = function () {
                    return Promise.resolve().then(r);
                  };
                o(),
                  (i = {
                    push: function (e) {
                      t.push(e), o();
                    },
                    filter: function (e) {
                      return (t = t.filter(e)), i;
                    },
                  });
              },
            });
        return (s.options = (0, r.__assign)({ async: !0, ssr: !1 }, e)), s;
      }
    },
    39033: (e, t, n) => {
      "use strict";
      n.d(t, { c: () => o });
      var r = n(12115);
      function o(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    39249: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          __addDisposableResource: () => W,
          __assign: () => i,
          __asyncDelegator: () => E,
          __asyncGenerator: () => k,
          __asyncValues: () => I,
          __await: () => x,
          __awaiter: () => h,
          __classPrivateFieldGet: () => P,
          __classPrivateFieldIn: () => M,
          __classPrivateFieldSet: () => D,
          __createBinding: () => m,
          __decorate: () => s,
          __disposeResources: () => R,
          __esDecorate: () => l,
          __exportStar: () => y,
          __extends: () => o,
          __generator: () => w,
          __importDefault: () => O,
          __importStar: () => T,
          __makeTemplateObject: () => B,
          __metadata: () => f,
          __param: () => c,
          __propKey: () => d,
          __read: () => b,
          __rest: () => a,
          __rewriteRelativeImportExtension: () => Q,
          __runInitializers: () => u,
          __setFunctionName: () => p,
          __spread: () => A,
          __spreadArray: () => C,
          __spreadArrays: () => v,
          __values: () => g,
          default: () => U,
        });
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
      function o(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function a(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      function s(e, t, n, r) {
        var o,
          i = arguments.length,
          a =
            i < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, r);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (o = e[s]) &&
              (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }
      function c(e, t) {
        return function (n, r) {
          t(n, r, e);
        };
      }
      function l(e, t, n, r, o, i) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e)
            throw TypeError("Function expected");
          return e;
        }
        for (
          var s,
            c = r.kind,
            l = "getter" === c ? "get" : "setter" === c ? "set" : "value",
            u = !t && e ? (r.static ? e : e.prototype) : null,
            d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}),
            p = !1,
            f = n.length - 1;
          f >= 0;
          f--
        ) {
          var h = {};
          for (var w in r) h[w] = "access" === w ? {} : r[w];
          for (var w in r.access) h.access[w] = r.access[w];
          h.addInitializer = function (e) {
            if (p)
              throw TypeError(
                "Cannot add initializers after decoration has completed"
              );
            i.push(a(e || null));
          };
          var m = (0, n[f])(
            "accessor" === c ? { get: d.get, set: d.set } : d[l],
            h
          );
          if ("accessor" === c) {
            if (void 0 === m) continue;
            if (null === m || "object" != typeof m)
              throw TypeError("Object expected");
            (s = a(m.get)) && (d.get = s),
              (s = a(m.set)) && (d.set = s),
              (s = a(m.init)) && o.unshift(s);
          } else (s = a(m)) && ("field" === c ? o.unshift(s) : (d[l] = s));
        }
        u && Object.defineProperty(u, r.name, d), (p = !0);
      }
      function u(e, t, n) {
        for (var r = arguments.length > 2, o = 0; o < t.length; o++)
          n = r ? t[o].call(e, n) : t[o].call(e);
        return r ? n : void 0;
      }
      function d(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function p(e, t, n) {
        return (
          "symbol" == typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: n ? "".concat(n, " ", t) : t,
          })
        );
      }
      function f(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      }
      function w(e, t) {
        var n,
          r,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          },
          a = Object.create(
            ("function" == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (a.next = s(0)),
          (a.throw = s(1)),
          (a.return = s(2)),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function s(s) {
          return function (c) {
            var l = [s, c];
            if (n) throw TypeError("Generator is already executing.");
            for (; a && ((a = 0), l[0] && (i = 0)), i; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & l[0]
                        ? r.return
                        : l[0]
                        ? r.throw || ((o = r.return) && o.call(r), 0)
                        : r.next) &&
                    !(o = o.call(r, l[1])).done)
                )
                  return o;
                switch (((r = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                  case 0:
                  case 1:
                    o = l;
                    break;
                  case 4:
                    return i.label++, { value: l[1], done: !1 };
                  case 5:
                    i.label++, (r = l[1]), (l = [0]);
                    continue;
                  case 7:
                    (l = i.ops.pop()), i.trys.pop();
                    continue;
                  default:
                    if (
                      !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                      (6 === l[0] || 2 === l[0])
                    ) {
                      i = 0;
                      continue;
                    }
                    if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                      i.label = l[1];
                      break;
                    }
                    if (6 === l[0] && i.label < o[1]) {
                      (i.label = o[1]), (o = l);
                      break;
                    }
                    if (o && i.label < o[2]) {
                      (i.label = o[2]), i.ops.push(l);
                      break;
                    }
                    o[2] && i.ops.pop(), i.trys.pop();
                    continue;
                }
                l = t.call(e, i);
              } catch (e) {
                (l = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & l[0]) throw l[1];
            return { value: l[0] ? l[1] : void 0, done: !0 };
          };
        }
      }
      var m = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var o = Object.getOwnPropertyDescriptor(t, n);
            (!o ||
              ("get" in o ? !t.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, o);
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          };
      function y(e, t) {
        for (var n in e)
          "default" === n ||
            Object.prototype.hasOwnProperty.call(t, n) ||
            m(t, e, n);
      }
      function g(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function b(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function A() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(b(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        for (var r = Array(e), o = 0, t = 0; t < n; t++)
          for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++)
            r[o] = i[a];
        return r;
      }
      function C(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      function x(e) {
        return this instanceof x ? ((this.v = e), this) : new x(e);
      }
      function k(e, t, n) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var r,
          o = n.apply(e, t || []),
          i = [];
        return (
          (r = Object.create(
            ("function" == typeof AsyncIterator ? AsyncIterator : Object)
              .prototype
          )),
          a("next"),
          a("throw"),
          a("return", function (e) {
            return function (t) {
              return Promise.resolve(t).then(e, l);
            };
          }),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function a(e, t) {
          o[e] &&
            ((r[e] = function (t) {
              return new Promise(function (n, r) {
                i.push([e, t, n, r]) > 1 || s(e, t);
              });
            }),
            t && (r[e] = t(r[e])));
        }
        function s(e, t) {
          try {
            var n;
            (n = o[e](t)).value instanceof x
              ? Promise.resolve(n.value.v).then(c, l)
              : u(i[0][2], n);
          } catch (e) {
            u(i[0][3], e);
          }
        }
        function c(e) {
          s("next", e);
        }
        function l(e) {
          s("throw", e);
        }
        function u(e, t) {
          e(t), i.shift(), i.length && s(i[0][0], i[0][1]);
        }
      }
      function E(e) {
        var t, n;
        return (
          (t = {}),
          r("next"),
          r("throw", function (e) {
            throw e;
          }),
          r("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function r(r, o) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n)
                  ? { value: x(e[r](t)), done: !1 }
                  : o
                  ? o(t)
                  : t;
              }
            : o;
        }
      }
      function I(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = g(e)),
            (t = {}),
            r("next"),
            r("throw"),
            r("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(n) {
          t[n] =
            e[n] &&
            function (t) {
              return new Promise(function (r, o) {
                var i, a, s;
                (i = r),
                  (a = o),
                  (s = (t = e[n](t)).done),
                  Promise.resolve(t.value).then(function (e) {
                    i({ value: e, done: s });
                  }, a);
              });
            };
        }
      }
      function B(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var S = Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            },
        N = function (e) {
          return (N =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
              return t;
            })(e);
        };
      function T(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n = N(e), r = 0; r < n.length; r++)
            "default" !== n[r] && m(t, e, n[r]);
        return S(t, e), t;
      }
      function O(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function P(e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function D(e, t, n, r, o) {
        if ("m" === r) throw TypeError("Private method is not writable");
        if ("a" === r && !o)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === r ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n;
      }
      function M(e, t) {
        if (null === t || ("object" != typeof t && "function" != typeof t))
          throw TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }
      function W(e, t, n) {
        if (null != t) {
          var r, o;
          if ("object" != typeof t && "function" != typeof t)
            throw TypeError("Object expected.");
          if (n) {
            if (!Symbol.asyncDispose)
              throw TypeError("Symbol.asyncDispose is not defined.");
            r = t[Symbol.asyncDispose];
          }
          if (void 0 === r) {
            if (!Symbol.dispose)
              throw TypeError("Symbol.dispose is not defined.");
            (r = t[Symbol.dispose]), n && (o = r);
          }
          if ("function" != typeof r) throw TypeError("Object not disposable.");
          o &&
            (r = function () {
              try {
                o.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            e.stack.push({ value: t, dispose: r, async: n });
        } else n && e.stack.push({ async: !0 });
        return t;
      }
      var F =
        "function" == typeof SuppressedError
          ? SuppressedError
          : function (e, t, n) {
              var r = Error(n);
              return (
                (r.name = "SuppressedError"),
                (r.error = e),
                (r.suppressed = t),
                r
              );
            };
      function R(e) {
        function t(t) {
          (e.error = e.hasError
            ? new F(t, e.error, "An error was suppressed during disposal.")
            : t),
            (e.hasError = !0);
        }
        var n,
          r = 0;
        return (function o() {
          for (; (n = e.stack.pop()); )
            try {
              if (!n.async && 1 === r)
                return (r = 0), e.stack.push(n), Promise.resolve().then(o);
              if (n.dispose) {
                var i = n.dispose.call(n.value);
                if (n.async)
                  return (
                    (r |= 2),
                    Promise.resolve(i).then(o, function (e) {
                      return t(e), o();
                    })
                  );
              } else r |= 1;
            } catch (e) {
              t(e);
            }
          if (1 === r)
            return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error;
        })();
      }
      function Q(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e)
          ? e.replace(
              /\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
              function (e, n, r, o, i) {
                return n
                  ? t
                    ? ".jsx"
                    : ".js"
                  : !r || (o && i)
                  ? r + o + "." + i.toLowerCase() + "js"
                  : e;
              }
            )
          : e;
      }
      let U = {
        __extends: o,
        __assign: i,
        __rest: a,
        __decorate: s,
        __param: c,
        __esDecorate: l,
        __runInitializers: u,
        __propKey: d,
        __setFunctionName: p,
        __metadata: f,
        __awaiter: h,
        __generator: w,
        __createBinding: m,
        __exportStar: y,
        __values: g,
        __read: b,
        __spread: A,
        __spreadArrays: v,
        __spreadArray: C,
        __await: x,
        __asyncGenerator: k,
        __asyncDelegator: E,
        __asyncValues: I,
        __makeTemplateObject: B,
        __importStar: T,
        __importDefault: O,
        __classPrivateFieldGet: P,
        __classPrivateFieldSet: D,
        __classPrivateFieldIn: M,
        __addDisposableResource: W,
        __disposeResources: R,
        __rewriteRelativeImportExtension: Q,
      };
    },
    40363: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => i, f: () => o });
      var r = function (e, t) {
        return (
          Object.defineProperty(e, "__recipe__", { value: t, writable: !1 }), e
        );
      };
      function o(e) {
        var { conditions: t } = e;
        if (!t) throw Error("Styles have no conditions");
        return r(
          function (e) {
            if (
              "string" == typeof e ||
              "number" == typeof e ||
              "boolean" == typeof e
            ) {
              if (!t.defaultCondition) throw Error("No default condition");
              return { [t.defaultCondition]: e };
            }
            if (Array.isArray(e)) {
              if (!("responsiveArray" in t))
                throw Error("Responsive arrays are not supported");
              var n = {};
              for (var r in t.responsiveArray)
                null != e[r] && (n[t.responsiveArray[r]] = e[r]);
              return n;
            }
            return e;
          },
          {
            importPath: "@vanilla-extract/sprinkles/createUtils",
            importName: "createNormalizeValueFn",
            args: [{ conditions: e.conditions }],
          }
        );
      }
      function i(e) {
        var { conditions: t } = e;
        if (!t) throw Error("Styles have no conditions");
        var n = o(e);
        return r(
          function (e, r) {
            if (
              "string" == typeof e ||
              "number" == typeof e ||
              "boolean" == typeof e
            ) {
              if (!t.defaultCondition) throw Error("No default condition");
              return r(e, t.defaultCondition);
            }
            var o = Array.isArray(e) ? n(e) : e,
              i = {};
            for (var a in o) null != o[a] && (i[a] = r(o[a], a));
            return i;
          },
          {
            importPath: "@vanilla-extract/sprinkles/createUtils",
            importName: "createMapValueFn",
            args: [{ conditions: e.conditions }],
          }
        );
      }
    },
    41052: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => a });
      var r = n(29995),
        o = n(7441),
        i = n(35109);
      function a(e, t) {
        if (!(e instanceof o.C)) return !1;
        let n = e.walk((e) => e instanceof i.M);
        return (
          n instanceof i.M &&
          (!!(
            n.data?.errorName === "ResolverNotFound" ||
            n.data?.errorName === "ResolverWildcardNotSupported" ||
            n.data?.errorName === "ResolverNotContract" ||
            n.data?.errorName === "ResolverError" ||
            n.data?.errorName === "HttpError" ||
            n.reason?.includes(
              "Wildcard on non-extended resolvers is not supported"
            )
          ) ||
            ("reverse" === t && n.reason === r.fD[50]))
        );
      }
    },
    41096: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => d });
      var r = n(5041),
        o = n(77752);
      async function i(e, t) {
        let n;
        if (
          (n =
            "function" == typeof t.connector
              ? e._internal.connectors.setup(t.connector)
              : t.connector).uid === e.state.current
        )
          throw new o.nM();
        try {
          e.setState((e) => ({ ...e, status: "connecting" })),
            n.emitter.emit("message", { type: "connecting" });
          let { connector: r, ...o } = t,
            i = await n.connect(o),
            a = i.accounts;
          return (
            n.emitter.off("connect", e._internal.events.connect),
            n.emitter.on("change", e._internal.events.change),
            n.emitter.on("disconnect", e._internal.events.disconnect),
            await e.storage?.setItem("recentConnectorId", n.id),
            e.setState((e) => ({
              ...e,
              connections: new Map(e.connections).set(n.uid, {
                accounts: a,
                chainId: i.chainId,
                connector: n,
              }),
              current: n.uid,
              status: "connected",
            })),
            { accounts: a, chainId: i.chainId }
          );
        } catch (t) {
          throw (
            (e.setState((e) => ({
              ...e,
              status: e.current ? "connected" : "disconnected",
            })),
            t)
          );
        }
      }
      var a = n(12115),
        s = n(53031),
        c = n(34250);
      let l = [];
      function u(e) {
        let t = e.connectors;
        return (0, c.b)(l, t) ? l : ((l = t), t);
      }
      function d() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, s.U)(e),
          o = { mutationFn: (e) => i(n, e), mutationKey: ["connect"] },
          { mutate: c, mutateAsync: l, ...d } = (0, r.n)({ ...t, ...o });
        return (
          (0, a.useEffect)(
            () =>
              n.subscribe(
                (e) => {
                  let { status: t } = e;
                  return t;
                },
                (e, t) => {
                  "connected" === t && "disconnected" === e && d.reset();
                }
              ),
            [n, d.reset]
          ),
          {
            ...d,
            connect: c,
            connectAsync: l,
            connectors: (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = (0, s.U)(e);
              return (0, a.useSyncExternalStore)(
                (e) =>
                  (function (e, t) {
                    let { onChange: n } = t;
                    return e._internal.connectors.subscribe((e, t) => {
                      n(Object.values(e), t);
                    });
                  })(t, { onChange: e }),
                () => u(t),
                () => u(t)
              );
            })({ config: n }),
          }
        );
      }
    },
    45566: (e, t, n) => {
      "use strict";
      e.exports = n(72312);
    },
    46056: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => l });
      var r = n(9894),
        o = n(90113),
        i = n(77752),
        a = n(35883),
        s = n(81379),
        c = n(67622);
      function l(e) {
        let t,
          u,
          d,
          p,
          f,
          h,
          w,
          m,
          y = e.isNewChainsStale ?? !0;
        return (0, r.U)((r) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: l.type,
          async setup() {
            let e = await this.getProvider().catch(() => null);
            e &&
              (f || ((f = this.onConnect.bind(this)), e.on("connect", f)),
              w ||
                ((w = this.onSessionDelete.bind(this)),
                e.on("session_delete", w)));
          },
          async connect({ chainId: e, ...t } = {}) {
            try {
              let n = await this.getProvider();
              if (!n) throw new o.N();
              h || ((h = this.onDisplayUri), n.on("display_uri", h));
              let i = e;
              if (!i) {
                let e = (await r.storage?.getItem("state")) ?? {};
                i = r.chains.some((t) => t.id === e.chainId)
                  ? e.chainId
                  : r.chains[0]?.id;
              }
              if (!i) throw Error("No chains found on connector.");
              let s = await this.isChainsStale();
              if ((n.session && s && (await n.disconnect()), !n.session || s)) {
                let e = r.chains.filter((e) => e.id !== i).map((e) => e.id);
                await n.connect({
                  optionalChains: [i, ...e],
                  ...("pairingTopic" in t
                    ? { pairingTopic: t.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(r.chains.map((e) => e.id));
              }
              let c = (await n.enable()).map((e) => (0, a.b)(e)),
                l = await this.getChainId();
              return (
                h && (n.removeListener("display_uri", h), (h = void 0)),
                f && (n.removeListener("connect", f), (f = void 0)),
                d ||
                  ((d = this.onAccountsChanged.bind(this)),
                  n.on("accountsChanged", d)),
                p ||
                  ((p = this.onChainChanged.bind(this)),
                  n.on("chainChanged", p)),
                m ||
                  ((m = this.onDisconnect.bind(this)), n.on("disconnect", m)),
                w ||
                  ((w = this.onSessionDelete.bind(this)),
                  n.on("session_delete", w)),
                { accounts: c, chainId: l }
              );
            } catch (e) {
              if (/(user rejected|connection request reset)/i.test(e?.message))
                throw new s.vx(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            try {
              await e?.disconnect();
            } catch (e) {
              if (!/No matching key/i.test(e.message)) throw e;
            } finally {
              p && (e?.removeListener("chainChanged", p), (p = void 0)),
                m && (e?.removeListener("disconnect", m), (m = void 0)),
                f || ((f = this.onConnect.bind(this)), e?.on("connect", f)),
                d && (e?.removeListener("accountsChanged", d), (d = void 0)),
                w && (e?.removeListener("session_delete", w), (w = void 0)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            return (await this.getProvider()).accounts.map((e) => (0, a.b)(e));
          },
          async getProvider({ chainId: o } = {}) {
            async function i() {
              let t = r.chains.map((e) => e.id);
              if (!t.length) return;
              let { EthereumProvider: o } = await Promise.all([
                n.e(4134),
                n.e(5271),
              ]).then(n.bind(n, 5271));
              return await o.init({
                ...e,
                disableProviderPing: !0,
                optionalChains: t,
                projectId: e.projectId,
                rpcMap: Object.fromEntries(
                  r.chains.map((e) => {
                    let [t] = (function (e) {
                      let { chain: t } = e,
                        n = t.rpcUrls.default.http[0];
                      if (!e.transports) return [n];
                      let r = e.transports?.[t.id]?.({ chain: t });
                      return (r?.value?.transports || [r]).map(
                        ({ value: e }) => e?.url || n
                      );
                    })({ chain: e, transports: r.transports });
                    return [e.id, t];
                  })
                ),
                showQrModal: e.showQrModal ?? !0,
              });
            }
            return (
              t ||
                (u || (u = i()),
                (t = await u),
                t?.events.setMaxListeners(Number.POSITIVE_INFINITY)),
              o && (await this.switchChain?.({ chainId: o })),
              t
            );
          },
          async getChainId() {
            return (await this.getProvider()).chainId;
          },
          async isAuthorized() {
            try {
              let [e, t] = await Promise.all([
                this.getAccounts(),
                this.getProvider(),
              ]);
              if (!e.length) return !1;
              if ((await this.isChainsStale()) && t.session)
                return await t.disconnect().catch(() => {}), !1;
              return !0;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new o.N();
            let a = r.chains.find((e) => e.id === t);
            if (!a) throw new s.ch(new i.nk());
            try {
              await Promise.all([
                new Promise((e) => {
                  let n = ({ chainId: o }) => {
                    o === t && (r.emitter.off("change", n), e());
                  };
                  r.emitter.on("change", n);
                }),
                n.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, c.cK)(t) }],
                }),
              ]);
              let e = await this.getRequestedChainsIds();
              return this.setRequestedChainsIds([...e, t]), a;
            } catch (r) {
              if (/(user rejected)/i.test(r.message)) throw new s.vx(r);
              try {
                let r, o;
                (r = e?.blockExplorerUrls
                  ? e.blockExplorerUrls
                  : a.blockExplorers?.default.url
                  ? [a.blockExplorers?.default.url]
                  : []),
                  (o = e?.rpcUrls?.length
                    ? e.rpcUrls
                    : [...a.rpcUrls.default.http]);
                let i = {
                  blockExplorerUrls: r,
                  chainId: (0, c.cK)(t),
                  chainName: e?.chainName ?? a.name,
                  iconUrls: e?.iconUrls,
                  nativeCurrency: e?.nativeCurrency ?? a.nativeCurrency,
                  rpcUrls: o,
                };
                await n.request({
                  method: "wallet_addEthereumChain",
                  params: [i],
                });
                let s = await this.getRequestedChainsIds();
                return this.setRequestedChainsIds([...s, t]), a;
              } catch (e) {
                throw new s.vx(e);
              }
            }
          },
          onAccountsChanged(e) {
            0 === e.length
              ? this.onDisconnect()
              : r.emitter.emit("change", {
                  accounts: e.map((e) => (0, a.b)(e)),
                });
          },
          onChainChanged(e) {
            let t = Number(e);
            r.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let t = Number(e.chainId),
              n = await this.getAccounts();
            r.emitter.emit("connect", { accounts: n, chainId: t });
          },
          async onDisconnect(e) {
            this.setRequestedChainsIds([]), r.emitter.emit("disconnect");
            let t = await this.getProvider();
            d && (t.removeListener("accountsChanged", d), (d = void 0)),
              p && (t.removeListener("chainChanged", p), (p = void 0)),
              m && (t.removeListener("disconnect", m), (m = void 0)),
              w && (t.removeListener("session_delete", w), (w = void 0)),
              f || ((f = this.onConnect.bind(this)), t.on("connect", f));
          },
          onDisplayUri(e) {
            r.emitter.emit("message", { type: "display_uri", data: e });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds: () =>
            t
              ? t.session?.namespaces.eip155?.accounts?.map((e) =>
                  Number.parseInt(e.split(":")[1] || "")
                ) ?? []
              : [],
          async getRequestedChainsIds() {
            return (
              (await r.storage?.getItem(this.requestedChainsStorageKey)) ?? []
            );
          },
          async isChainsStale() {
            if (!y) return !1;
            let e = r.chains.map((e) => e.id),
              t = this.getNamespaceChainsIds();
            if (t.length && !t.some((t) => e.includes(t))) return !1;
            let n = await this.getRequestedChainsIds();
            return !e.every((e) => n.includes(e));
          },
          async setRequestedChainsIds(e) {
            await r.storage?.setItem(this.requestedChainsStorageKey, e);
          },
          get requestedChainsStorageKey() {
            return `${this.id}.requestedChains`;
          },
        }));
      }
      l.type = "walletConnect";
    },
    50514: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => a });
      var r = n(39249),
        o = n(12115),
        i = function (e) {
          var t = e.sideCar,
            n = (0, r.__rest)(e, ["sideCar"]);
          if (!t)
            throw Error(
              "Sidecar: please provide `sideCar` property to import the right car"
            );
          var i = t.read();
          if (!i) throw Error("Sidecar medium not found");
          return o.createElement(i, (0, r.__assign)({}, n));
        };
      function a(e, t) {
        return e.useMedium(t), i;
      }
      i.isSideCarExport = !0;
    },
    50883: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => x });
      var r = n(95155),
        o = n(12115);
      let i = { newline: 10, reset: 27 };
      function a(e, t) {
        return e.toString(2).padStart(t, "0");
      }
      function s(e, t) {
        let n = e % t;
        return n >= 0 ? n : t + n;
      }
      function c(e, t) {
        return Array(e).fill(t);
      }
      function l(...e) {
        let t = 0;
        for (let n of e) t = Math.max(t, n.length);
        let n = [];
        for (let r = 0; r < t; r++)
          for (let t of e) r >= t.length || n.push(t[r]);
        return new Uint8Array(n);
      }
      function u(e, t, n) {
        if (n < 0 || n + t.length > e.length) return !1;
        for (let r = 0; r < t.length; r++) if (t[r] !== e[n + r]) return !1;
        return !0;
      }
      function d(e) {
        return {
          has: (t) => e.includes(t),
          decode: (t) => {
            if (!Array.isArray(t) || (t.length && "string" != typeof t[0]))
              throw Error("alphabet.decode input should be array of strings");
            return t.map((t) => {
              if ("string" != typeof t)
                throw Error(`alphabet.decode: not string element=${t}`);
              let n = e.indexOf(t);
              if (-1 === n)
                throw Error(`Unknown letter: "${t}". Allowed: ${e}`);
              return n;
            });
          },
          encode: (t) => {
            if (!Array.isArray(t) || (t.length && "number" != typeof t[0]))
              throw Error(
                "alphabet.encode input should be an array of numbers"
              );
            return t.map((t) => {
              if (!Number.isSafeInteger(t))
                throw Error(`integer expected: ${t}`);
              if (t < 0 || t >= e.length)
                throw Error(
                  `Digit index outside alphabet: ${t} (alphabet: ${e.length})`
                );
              return e[t];
            });
          },
        };
      }
      class p {
        static size(e, t) {
          if (
            ("number" == typeof e && (e = { height: e, width: e }),
            !Number.isSafeInteger(e.height) && e.height !== 1 / 0)
          )
            throw Error(
              `Bitmap: invalid height=${e.height} (${typeof e.height})`
            );
          if (!Number.isSafeInteger(e.width) && e.width !== 1 / 0)
            throw Error(`Bitmap: invalid width=${e.width} (${typeof e.width})`);
          return (
            void 0 !== t &&
              (e = {
                width: Math.min(e.width, t.width),
                height: Math.min(e.height, t.height),
              }),
            e
          );
        }
        static fromString(e) {
          let t,
            n = (e = e.replace(/^\n+/g, "").replace(/\n+$/g, "")).split(
              String.fromCharCode(i.newline)
            ),
            r = n.length,
            o = Array(r);
          for (let e of n) {
            let n = e.split("").map((e) => {
              if ("X" === e) return !0;
              if (" " === e) return !1;
              if ("?" !== e)
                throw Error(`Bitmap.fromString: unknown symbol=${e}`);
            });
            if (t && n.length !== t)
              throw Error(
                `Bitmap.fromString different row sizes: width=${t} cur=${n.length}`
              );
            (t = n.length), o.push(n);
          }
          return t || (t = 0), new p({ height: r, width: t }, o);
        }
        data;
        height;
        width;
        constructor(e, t) {
          let { height: n, width: r } = p.size(e);
          (this.data = t || Array.from({ length: n }, () => c(r, void 0))),
            (this.height = n),
            (this.width = r);
        }
        point(e) {
          return this.data[e.y][e.x];
        }
        isInside(e) {
          return 0 <= e.x && e.x < this.width && 0 <= e.y && e.y < this.height;
        }
        size(e) {
          if (!e) return { height: this.height, width: this.width };
          let { x: t, y: n } = this.xy(e);
          return { height: this.height - n, width: this.width - t };
        }
        xy(e) {
          if (
            ("number" == typeof e && (e = { x: e, y: e }),
            !Number.isSafeInteger(e.x))
          )
            throw Error(`Bitmap: invalid x=${e.x}`);
          if (!Number.isSafeInteger(e.y))
            throw Error(`Bitmap: invalid y=${e.y}`);
          return (e.x = s(e.x, this.width)), (e.y = s(e.y, this.height)), e;
        }
        rect(e, t, n) {
          let { x: r, y: o } = this.xy(e),
            { height: i, width: a } = p.size(t, this.size({ x: r, y: o }));
          for (let e = 0; e < i; e++)
            for (let t = 0; t < a; t++)
              this.data[o + e][r + t] =
                "function" == typeof n
                  ? n({ x: t, y: e }, this.data[o + e][r + t])
                  : n;
          return this;
        }
        rectRead(e, t, n) {
          return this.rect(e, t, (e, t) => (n(e, t), t));
        }
        hLine(e, t, n) {
          return this.rect(e, { width: t, height: 1 }, n);
        }
        vLine(e, t, n) {
          return this.rect(e, { width: 1, height: t }, n);
        }
        border(e = 2, t) {
          let n = this.height + 2 * e,
            r = this.width + 2 * e,
            o = c(e, t),
            i = Array.from({ length: e }, () => c(r, t));
          return new p({ height: n, width: r }, [
            ...i,
            ...this.data.map((e) => [...o, ...e, ...o]),
            ...i,
          ]);
        }
        embed(e, t) {
          return this.rect(e, t.size(), ({ x: e, y: n }) => t.data[n][e]);
        }
        rectSlice(e, t = this.size()) {
          let n = new p(p.size(t, this.size(this.xy(e))));
          return this.rect(e, t, ({ x: e, y: t }, r) => (n.data[t][e] = r)), n;
        }
        inverse() {
          let { height: e, width: t } = this;
          return new p({ height: t, width: e }).rect(
            { x: 0, y: 0 },
            1 / 0,
            ({ x: e, y: t }) => this.data[e][t]
          );
        }
        scale(e) {
          if (!Number.isSafeInteger(e) || e > 1024)
            throw Error(`invalid scale factor: ${e}`);
          let { height: t, width: n } = this;
          return new p({ height: e * t, width: e * n }).rect(
            { x: 0, y: 0 },
            1 / 0,
            ({ x: t, y: n }) => this.data[Math.floor(n / e)][Math.floor(t / e)]
          );
        }
        clone() {
          return new p(this.size()).rect(
            { x: 0, y: 0 },
            this.size(),
            ({ x: e, y: t }) => this.data[t][e]
          );
        }
        assertDrawn() {
          this.rectRead(0, 1 / 0, (e, t) => {
            if ("boolean" != typeof t)
              throw Error(`Invalid color type=${typeof t}`);
          });
        }
        toString() {
          return this.data
            .map((e) =>
              e.map((e) => (void 0 === e ? "?" : e ? "X" : " ")).join("")
            )
            .join(String.fromCharCode(i.newline));
        }
        toASCII() {
          let { height: e, width: t, data: n } = this,
            r = "";
          for (let o = 0; o < e; o += 2) {
            for (let i = 0; i < t; i++) {
              let t = n[o][i],
                a = o + 1 >= e || n[o + 1][i];
              t || a
                ? !t && a
                  ? (r += "▀")
                  : t && !a
                  ? (r += "▄")
                  : t && a && (r += " ")
                : (r += "█");
            }
            r += String.fromCharCode(i.newline);
          }
          return r;
        }
        toTerm() {
          let e = String.fromCharCode(i.reset),
            t = e + "[0m",
            n = e + "[1;47m  " + t,
            r = e + "[40m  " + t;
          return this.data
            .map((e) => e.map((e) => (e ? r : n)).join(""))
            .join(String.fromCharCode(i.newline));
        }
        toSVG(e = !0) {
          let t,
            n = `<svg viewBox="0 0 ${this.width} ${this.height}" xmlns="http://www.w3.org/2000/svg">`,
            r = "";
          return (
            this.rectRead(0, 1 / 0, (o, i) => {
              if (!i) return;
              let { x: a, y: s } = o;
              if (!e) {
                n += `<rect x="${a}" y="${s}" width="1" height="1" />`;
                return;
              }
              let c = `M${a} ${s}`;
              if (t) {
                let e = `m${a - t.x} ${s - t.y}`;
                e.length <= c.length && (c = e);
              }
              let l = a < 10 ? `H${a}` : "h-1";
              (r += `${c}h1v1${l}Z`), (t = o);
            }),
            e && (n += `<path d="${r}"/>`),
            (n += "</svg>")
          );
        }
        toGIF() {
          let e = (e) => [255 & e, (e >>> 8) & 255],
            t = [...e(this.width), ...e(this.height)],
            n = [];
          this.rectRead(0, 1 / 0, (e, t) => n.push(+(!0 === t)));
          let r = [
              71,
              73,
              70,
              56,
              55,
              97,
              ...t,
              246,
              0,
              0,
              255,
              255,
              255,
              ...c(381, 0),
              44,
              0,
              0,
              0,
              0,
              ...t,
              0,
              7,
            ],
            o = Math.floor(n.length / 126);
          for (let e = 0; e < o; e++)
            r.push(127, 128, ...n.slice(126 * e, 126 * (e + 1)).map((e) => +e));
          return (
            r.push(
              (n.length % 126) + 1,
              128,
              ...n.slice(126 * o).map((e) => +e)
            ),
            r.push(1, 129, 0, 59),
            new Uint8Array(r)
          );
        }
        toImage(e = !1) {
          let { height: t, width: n } = this.size(),
            r = new Uint8Array(t * n * (e ? 3 : 4)),
            o = 0;
          for (let i = 0; i < t; i++)
            for (let t = 0; t < n; t++) {
              let n = 255 * !this.data[i][t];
              (r[o++] = n), (r[o++] = n), (r[o++] = n), e || (r[o++] = 255);
            }
          return { height: t, width: n, data: r };
        }
      }
      let f = ["low", "medium", "quartile", "high"],
        h = ["numeric", "alphanumeric", "byte", "kanji", "eci"],
        w = [
          26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
          655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706,
          1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196,
          3362, 3532, 3706,
        ],
        m = {
          low: [
            7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28,
            30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30,
          ],
          medium: [
            10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28,
            26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
            28, 28, 28, 28, 28, 28,
          ],
          quartile: [
            13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28,
            28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30,
          ],
          high: [
            17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28,
            28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30,
          ],
        },
        y = {
          low: [
            1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9,
            10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25,
          ],
          medium: [
            1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16,
            17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43,
            45, 47, 49,
          ],
          quartile: [
            1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20,
            23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59,
            62, 65, 68,
          ],
          high: [
            1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25,
            25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66,
            70, 74, 77, 81,
          ],
        },
        g = {
          size: {
            encode: (e) => 21 + 4 * (e - 1),
            decode: (e) => (e - 17) / 4,
          },
          sizeType: (e) => Math.floor((e + 7) / 17),
          alignmentPatterns(e) {
            if (1 === e) return [];
            let t = g.size.encode(e) - 6 - 1,
              n = t - 6,
              r = Math.ceil(n / 28),
              o = Math.floor(n / r);
            o % 2 ? (o += 1) : (n % r) * 2 >= r && (o += 2);
            let i = [6];
            for (let e = 1; e < r; e++) i.push(t - (r - e) * o);
            return i.push(t), i;
          },
          ECCode: { low: 1, medium: 0, quartile: 3, high: 2 },
          formatMask: 21522,
          formatBits(e, t) {
            let n = (g.ECCode[e] << 3) | t,
              r = n;
            for (let e = 0; e < 10; e++) r = (r << 1) ^ ((r >> 9) * 1335);
            return ((n << 10) | r) ^ g.formatMask;
          },
          versionBits(e) {
            let t = e;
            for (let e = 0; e < 12; e++) t = (t << 1) ^ ((t >> 11) * 7973);
            return (e << 12) | t;
          },
          alphabet: {
            numeric: d("0123456789"),
            alphanumerc: d("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"),
          },
          lengthBits: (e, t) =>
            ({
              numeric: [10, 12, 14],
              alphanumeric: [9, 11, 13],
              byte: [8, 16, 16],
              kanji: [8, 10, 12],
              eci: [0, 0, 0],
            }[t][g.sizeType(e)]),
          modeBits: {
            numeric: "0001",
            alphanumeric: "0010",
            byte: "0100",
            kanji: "1000",
            eci: "0111",
          },
          capacity(e, t) {
            let n = w[e - 1],
              r = m[t][e - 1],
              o = y[t][e - 1],
              i = Math.floor(n / o) - r,
              a = o - (n % o);
            return {
              words: r,
              numBlocks: o,
              shortBlocks: a,
              blockLen: i,
              capacity: (n - r * o) * 8,
              total: (r + i) * o + o - a,
            };
          },
        },
        b = [
          (e, t) => (e + t) % 2 == 0,
          (e, t) => t % 2 == 0,
          (e, t) => e % 3 == 0,
          (e, t) => (e + t) % 3 == 0,
          (e, t) => (Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0,
          (e, t) => ((e * t) % 2) + ((e * t) % 3) == 0,
          (e, t) => (((e * t) % 2) + ((e * t) % 3)) % 2 == 0,
          (e, t) => (((e + t) % 2) + ((e * t) % 3)) % 2 == 0,
        ],
        A = {
          tables: ((e) => {
            let t = c(256, 0),
              n = c(256, 0);
            for (let r = 0, o = 1; r < 256; r++)
              (t[r] = o), (n[o] = r), 256 & (o <<= 1) && (o ^= e);
            return { exp: t, log: n };
          })(285),
          exp: (e) => A.tables.exp[e],
          log(e) {
            if (0 === e) throw Error(`GF.log: invalid arg=${e}`);
            return A.tables.log[e] % 255;
          },
          mul: (e, t) =>
            0 === e || 0 === t
              ? 0
              : A.tables.exp[(A.tables.log[e] + A.tables.log[t]) % 255],
          add: (e, t) => e ^ t,
          pow: (e, t) => A.tables.exp[(A.tables.log[e] * t) % 255],
          inv(e) {
            if (0 === e) throw Error(`GF.inverse: invalid arg=${e}`);
            return A.tables.exp[255 - A.tables.log[e]];
          },
          polynomial(e) {
            if (0 == e.length) throw Error("GF.polymomial: invalid length");
            if (0 !== e[0]) return e;
            let t = 0;
            for (; t < e.length - 1 && 0 == e[t]; t++);
            return e.slice(t);
          },
          monomial(e, t) {
            if (e < 0) throw Error(`GF.monomial: invalid degree=${e}`);
            if (0 == t) return [0];
            let n = c(e + 1, 0);
            return (n[0] = t), A.polynomial(n);
          },
          degree: (e) => e.length - 1,
          coefficient: (e, t) => e[A.degree(e) - t],
          mulPoly(e, t) {
            if (0 === e[0] || 0 === t[0]) return [0];
            let n = c(e.length + t.length - 1, 0);
            for (let r = 0; r < e.length; r++)
              for (let o = 0; o < t.length; o++)
                n[r + o] = A.add(n[r + o], A.mul(e[r], t[o]));
            return A.polynomial(n);
          },
          mulPolyScalar(e, t) {
            if (0 == t) return [0];
            if (1 == t) return e;
            let n = c(e.length, 0);
            for (let r = 0; r < e.length; r++) n[r] = A.mul(e[r], t);
            return A.polynomial(n);
          },
          mulPolyMonomial(e, t, n) {
            if (t < 0) throw Error("GF.mulPolyMonomial: invalid degree");
            if (0 == n) return [0];
            let r = c(e.length + t, 0);
            for (let t = 0; t < e.length; t++) r[t] = A.mul(e[t], n);
            return A.polynomial(r);
          },
          addPoly(e, t) {
            if (0 === e[0]) return t;
            if (0 === t[0]) return e;
            let n = e,
              r = t;
            n.length > r.length && ([n, r] = [r, n]);
            let o = c(r.length, 0),
              i = r.length - n.length,
              a = r.slice(0, i);
            for (let e = 0; e < a.length; e++) o[e] = a[e];
            for (let e = i; e < r.length; e++) o[e] = A.add(n[e - i], r[e]);
            return A.polynomial(o);
          },
          remainderPoly(e, t) {
            let n = Array.from(e);
            for (let r = 0; r < e.length - t.length + 1; r++) {
              let e = n[r];
              if (0 !== e)
                for (let o = 1; o < t.length; o++)
                  0 !== t[o] && (n[r + o] = A.add(n[r + o], A.mul(t[o], e)));
            }
            return n.slice(e.length - t.length + 1, n.length);
          },
          divisorPoly(e) {
            let t = [1];
            for (let n = 0; n < e; n++) t = A.mulPoly(t, [1, A.pow(2, n)]);
            return t;
          },
          evalPoly(e, t) {
            if (0 == t) return A.coefficient(e, 0);
            let n = e[0];
            for (let r = 1; r < e.length; r++) n = A.add(A.mul(t, n), e[r]);
            return n;
          },
          euclidian(e, t, n) {
            A.degree(e) < A.degree(t) && ([e, t] = [t, e]);
            let r = e,
              o = t,
              i = [0],
              a = [1];
            for (; 2 * A.degree(o) >= n; ) {
              let e = r,
                t = i;
              if (((r = o), (i = a), 0 === r[0])) throw Error("rLast[0] === 0");
              o = e;
              let n = [0],
                s = A.inv(r[0]);
              for (; A.degree(o) >= A.degree(r) && 0 !== o[0]; ) {
                let e = A.degree(o) - A.degree(r),
                  t = A.mul(o[0], s);
                (n = A.addPoly(n, A.monomial(e, t))),
                  (o = A.addPoly(o, A.mulPolyMonomial(r, e, t)));
              }
              if (
                ((n = A.mulPoly(n, i)),
                (a = A.addPoly(n, t)),
                A.degree(o) >= A.degree(r))
              )
                throw Error(`Division failed r: ${o}, rLast: ${r}`);
            }
            let s = A.coefficient(a, 0);
            if (0 == s) throw Error("sigmaTilde(0) was zero");
            let c = A.inv(s);
            return [A.mulPolyScalar(a, c), A.mulPolyScalar(o, c)];
          },
        };
      function v(e, t, n, r) {
        let o = "",
          i = n.length;
        if ("numeric" === r) {
          let e = g.alphabet.numeric.decode(n.split("")),
            t = e.length;
          for (let n = 0; n < t - 2; n += 3)
            o += a(100 * e[n] + 10 * e[n + 1] + e[n + 2], 10);
          t % 3 == 1
            ? (o += a(e[t - 1], 4))
            : t % 3 == 2 && (o += a(10 * e[t - 2] + e[t - 1], 7));
        } else if ("alphanumeric" === r) {
          let e = g.alphabet.alphanumerc.decode(n.split("")),
            t = e.length;
          for (let n = 0; n < t - 1; n += 2) o += a(45 * e[n] + e[n + 1], 11);
          t % 2 == 1 && (o += a(e[t - 1], 6));
        } else if ("byte" === r) {
          let e = (function (e) {
            if ("string" != typeof e)
              throw Error(`utf8ToBytes expected string, got ${typeof e}`);
            return new Uint8Array(new TextEncoder().encode(e));
          })(n);
          (i = e.length),
            (o = Array.from(e)
              .map((e) => a(e, 8))
              .join(""));
        } else throw Error("encode: unsupported type");
        let { capacity: s } = g.capacity(e, t),
          u = a(i, g.lengthBits(e, r)),
          d = g.modeBits[r] + u + o;
        if (d.length > s) throw Error("Capacity overflow");
        (d += "0".repeat(Math.min(4, Math.max(0, s - d.length)))).length % 8 &&
          (d += "0".repeat(8 - (d.length % 8)));
        let p = "1110110000010001";
        for (let e = 0; d.length !== s; e++) d += p[e % p.length];
        let f = Uint8Array.from(
          d.match(/(.{8})/g).map((e) => Number(`0b${e}`))
        );
        return (function (e, t) {
          let {
              words: n,
              shortBlocks: r,
              numBlocks: o,
              blockLen: i,
              total: a,
            } = g.capacity(e, t),
            s = {
              encode(e) {
                let t = A.divisorPoly(n),
                  r = Array.from(e);
                return (
                  r.push(...t.slice(0, -1).fill(0)),
                  Uint8Array.from(A.remainderPoly(r, t))
                );
              },
              decode(e) {
                let t = e.slice(),
                  r = A.polynomial(Array.from(e)),
                  o = c(n, 0),
                  i = !1;
                for (let e = 0; e < n; e++) {
                  let t = A.evalPoly(r, A.exp(e));
                  (o[o.length - 1 - e] = t), 0 !== t && (i = !0);
                }
                if (!i) return t;
                o = A.polynomial(o);
                let a = A.monomial(n, 1),
                  [s, l] = A.euclidian(a, o, n),
                  u = c(A.degree(s), 0),
                  d = 0;
                for (let e = 1; e < 256 && d < u.length; e++)
                  0 === A.evalPoly(s, e) && (u[d++] = A.inv(e));
                if (d !== u.length)
                  throw Error("RS.decode: invalid errors number");
                for (let e = 0; e < u.length; e++) {
                  let n = t.length - 1 - A.log(u[e]);
                  if (n < 0) throw Error("RS.decode: invalid error location");
                  let r = A.inv(u[e]),
                    o = 1;
                  for (let t = 0; t < u.length; t++)
                    e !== t && (o = A.mul(o, A.add(1, A.mul(u[t], r))));
                  t[n] = A.add(t[n], A.mul(A.evalPoly(l, r), A.inv(o)));
                }
                return t;
              },
            };
          return {
            encode(e) {
              let t = [],
                n = [];
              for (let a = 0; a < o; a++) {
                let o = i + +!(a < r);
                t.push(e.subarray(0, o)),
                  n.push(s.encode(e.subarray(0, o))),
                  (e = e.subarray(o));
              }
              let a = l(...t),
                c = l(...n),
                u = new Uint8Array(a.length + c.length);
              return u.set(a), u.set(c, a.length), u;
            },
            decode(e) {
              if (e.length !== a)
                throw Error(
                  `interleave.decode: len(data)=${e.length}, total=${a}`
                );
              let t = [];
              for (let e = 0; e < o; e++) {
                let o = e < r;
                t.push(new Uint8Array(n + i + +!o));
              }
              let c = 0;
              for (let n = 0; n < i; n++)
                for (let r = 0; r < o; r++) t[r][n] = e[c++];
              for (let n = r; n < o; n++) t[n][i] = e[c++];
              for (let a = i; a < i + n; a++)
                for (let n = 0; n < o; n++) {
                  let o = n < r;
                  t[n][a + +!o] = e[c++];
                }
              let l = [];
              for (let e of t) l.push(...Array.from(s.decode(e)).slice(0, -n));
              return Uint8Array.from(l);
            },
          };
        })(e, t).encode(f);
      }
      function C(e, t, n, r, o = !1) {
        let i = (function (e, t, n, r = !1) {
            let o = g.size.encode(e),
              i = new p(o + 2),
              a = new p(3)
                .rect(0, 3, !0)
                .border(1, !1)
                .border(1, !0)
                .border(1, !1);
            i = (i = i
              .embed(0, a)
              .embed({ x: -a.width, y: 0 }, a)
              .embed({ x: 0, y: -a.height }, a)).rectSlice(1, o);
            let s = new p(1).rect(0, 1, !0).border(1, !1).border(1, !0),
              c = g.alignmentPatterns(e);
            for (let e of c)
              for (let t of c)
                void 0 === i.data[e][t] && i.embed({ x: t - 2, y: e - 2 }, s);
            i = i
              .hLine({ x: 0, y: 6 }, 1 / 0, ({ x: e }, t) =>
                void 0 === t ? e % 2 == 0 : t
              )
              .vLine({ x: 6, y: 0 }, 1 / 0, ({ y: e }, t) =>
                void 0 === t ? e % 2 == 0 : t
              );
            {
              let e = g.formatBits(t, n),
                a = (t) => !r && ((e >> t) & 1) == 1;
              for (let e = 0; e < 6; e++) i.data[e][8] = a(e);
              for (let e = 6; e < 8; e++) i.data[e + 1][8] = a(e);
              for (let e = 8; e < 15; e++) i.data[o - 15 + e][8] = a(e);
              for (let e = 0; e < 8; e++) i.data[8][o - e - 1] = a(e);
              for (let e = 8; e < 9; e++) i.data[8][15 - e - 1 + 1] = a(e);
              for (let e = 9; e < 15; e++) i.data[8][15 - e - 1] = a(e);
              i.data[o - 8][8] = !r;
            }
            if (e >= 7) {
              let t = g.versionBits(e);
              for (let e = 0; e < 18; e += 1) {
                let n = !r && ((t >> e) & 1) == 1,
                  a = Math.floor(e / 3),
                  s = (e % 3) + o - 8 - 3;
                (i.data[a][s] = n), (i.data[s][a] = n);
              }
            }
            return i;
          })(e, t, r, o),
          a = 0,
          s = 8 * n.length;
        if (
          (!(function (e, t, n) {
            let r = e.height,
              o = b[t],
              i = -1,
              a = r - 1;
            for (let t = r - 1; t > 0; t -= 2) {
              for (6 == t && (t = 5); ; a += i) {
                for (let r = 0; r < 2; r += 1) {
                  let i = t - r;
                  void 0 === e.data[a][i] && n(i, a, o(i, a));
                }
                if (a + i < 0 || a + i >= r) break;
              }
              i = -i;
            }
          })(i, r, (e, t, r) => {
            let o = !1;
            a < s && ((o = ((n[a >>> 3] >> ((7 - a) & 7)) & 1) != 0), a++),
              (i.data[t][e] = o !== r);
          }),
          a !== s)
        )
          throw Error("QR: bytes left after draw");
        return i;
      }
      function x(e) {
        let { arena: t, ...n } = e;
        return (0, r.jsxs)(x.Root, {
          ...n,
          children: [
            (0, r.jsx)(x.Finder, {}),
            (0, r.jsx)(x.Cells, {}),
            t &&
              (0, r.jsx)(x.Arena, {
                children:
                  "string" == typeof t
                    ? (0, r.jsx)("img", {
                        alt: "Arena",
                        src: t,
                        style: {
                          borderRadius: 1,
                          height: "100%",
                          objectFit: "cover",
                          width: "100%",
                        },
                      })
                    : t,
              }),
          ],
        });
      }
      !(function (e) {
        function t(t) {
          let { children: n, size: i = "100%", value: a, version: s, ...c } = t,
            l = o.useMemo(
              () =>
                (
                  o.Children.map(
                    n,
                    (e) =>
                      (o.isValidElement(e) &&
                        "string" != typeof e.type &&
                        "displayName" in e.type &&
                        "Arena" === e.type.displayName) ||
                      null
                  ) ?? []
                ).some(Boolean),
              [n]
            ),
            d = o.useMemo(() => {
              let e = t.errorCorrection;
              return (
                l && "low" === e && (e = "medium"),
                (function (e, t = {}) {
                  let { errorCorrection: n, version: r } = t,
                    o = (function (e, t = "raw", n = {}) {
                      let r = void 0 !== n.ecc ? n.ecc : "medium";
                      if (!f.includes(r))
                        throw Error(
                          `Invalid error correction mode=${r}. Expected: ${f}`
                        );
                      let o =
                        void 0 !== n.encoding
                          ? n.encoding
                          : (function (e) {
                              let t = "numeric";
                              for (let n of e)
                                if (
                                  !g.alphabet.numeric.has(n) &&
                                  ((t = "alphanumeric"),
                                  !g.alphabet.alphanumerc.has(n))
                                )
                                  return "byte";
                              return t;
                            })(e);
                      if (!h.includes(o))
                        throw Error(
                          `Encoding: invalid mode=${o}. Expected: ${h}`
                        );
                      if ("kanji" === o || "eci" === o)
                        throw Error(`Encoding: ${o} is not supported (yet?).`);
                      void 0 !== n.mask &&
                        (function (e) {
                          if (![0, 1, 2, 3, 4, 5, 6, 7].includes(e) || !b[e])
                            throw Error(
                              `Invalid mask=${e}. Expected number [0..7]`
                            );
                        })(n.mask);
                      let i = n.version,
                        a,
                        s = Error("Unknown error");
                      if (void 0 !== i) {
                        var c = i;
                        if (!Number.isSafeInteger(c) || c < 1 || c > 40)
                          throw Error(
                            `Invalid version=${c}. Expected number [1..40]`
                          );
                        a = v(i, r, e, o);
                      } else
                        for (let t = 1; t <= 40; t++)
                          try {
                            (a = v(t, r, e, o)), (i = t);
                            break;
                          } catch (e) {
                            s = e;
                          }
                      if (!i || !a) throw s;
                      let l = (function (e, t, n, r) {
                        if (void 0 === r) {
                          let o,
                            i,
                            a =
                              ((i = 1 / 0),
                              {
                                add(e, t) {
                                  e >= i || ((o = t), (i = e));
                                },
                                get: () => o,
                                score: () => i,
                              });
                          for (let r = 0; r < b.length; r++)
                            a.add(
                              (function (e) {
                                let t = e.inverse(),
                                  n = (e) => {
                                    let t = 0;
                                    for (let n = 0, r = 1, o; n < e.length; n++)
                                      (o !== e[n] ||
                                        (r++, n === e.length - 1)) &&
                                        (r >= 5 && (t += 3 + (r - 5)),
                                        (o = e[n]),
                                        (r = 1));
                                    return t;
                                  },
                                  r = 0;
                                e.data.forEach((e) => (r += n(e))),
                                  t.data.forEach((e) => (r += n(e)));
                                let o = 0,
                                  i = e.data,
                                  a = e.width - 1,
                                  s = e.height - 1;
                                for (let e = 0; e < a; e++)
                                  for (let t = 0; t < s; t++) {
                                    let n = e + 1,
                                      r = t + 1;
                                    i[e][t] === i[n][t] &&
                                      i[n][t] === i[e][r] &&
                                      i[n][t] === i[n][r] &&
                                      (o += 3);
                                  }
                                let c = (e) => {
                                    let t = [!0, !1, !0, !0, !0, !1, !0],
                                      n = [!1, !1, !1, !1],
                                      r = [...t, ...n],
                                      o = [...n, ...t],
                                      i = 0;
                                    for (let t = 0; t < e.length; t++)
                                      u(e, r, t) && (i += 40),
                                        u(e, o, t) && (i += 40);
                                    return i;
                                  },
                                  l = 0;
                                for (let t of e.data) l += c(t);
                                for (let e of t.data) l += c(e);
                                let d = 0;
                                e.rectRead(0, 1 / 0, (e, t) => (d += +!!t));
                                let p =
                                  10 *
                                  Math.floor(
                                    Math.abs(
                                      (d / (e.height * e.width)) * 100 - 50
                                    ) / 5
                                  );
                                return r + o + l + p;
                              })(C(e, t, n, r, !0)),
                              r
                            );
                          r = a.get();
                        }
                        if (void 0 === r) throw Error("Cannot find mask");
                        return C(e, t, n, r);
                      })(i, r, a, n.mask);
                      l.assertDrawn();
                      let d = void 0 === n.border ? 2 : n.border;
                      if (!Number.isSafeInteger(d))
                        throw Error(`invalid border type=${typeof d}`);
                      if (
                        ((l = l.border(d, !1)),
                        void 0 !== n.scale && (l = l.scale(n.scale)),
                        "raw" === t)
                      )
                        return l.data;
                      if ("ascii" === t) return l.toASCII();
                      if ("svg" === t) return l.toSVG(n.optimize);
                      if ("gif" === t) return l.toGIF();
                      if ("term" === t) return l.toTerm();
                      else throw Error(`Unknown output: ${t}`);
                    })(e, "raw", { border: 0, ecc: n, scale: 1, version: r });
                  return {
                    edgeLength: o.length,
                    finderLength: 7,
                    grid: o,
                    value: e,
                  };
                })(a, { errorCorrection: e, version: s })
              );
            }, [a, l, t.errorCorrection, s]),
            p = +d.edgeLength,
            w = d.finderLength / 2,
            m = l ? Math.floor(p / 4) : 0,
            y = o.useMemo(
              () => ({
                arenaSize: m,
                cellSize: 1,
                edgeSize: p,
                qrcode: d,
                finderSize: w,
              }),
              [m, p, d, w]
            );
          return (0, r.jsx)(e.Context.Provider, {
            value: y,
            children: (0, r.jsxs)("svg", {
              ...c,
              width: i,
              height: i,
              viewBox: `0 0 ${p} ${p}`,
              xmlns: "http://www.w3.org/2000/svg",
              children: [(0, r.jsx)("title", { children: "QR Code" }), n],
            }),
          });
        }
        function n(t) {
          let {
              className: n,
              fill: i,
              innerClassName: a,
              radius: s = 0.25,
            } = t,
            {
              cellSize: c,
              edgeSize: l,
              finderSize: u,
            } = o.useContext(e.Context);
          function d({ position: e }) {
            let t = u - (u - c) - c / 2;
            "top-right" === e && (t = l - u - (u - c) - c / 2);
            let o = u - (u - c) - c / 2;
            "bottom-left" === e && (o = l - u - (u - c) - c / 2);
            let d = u - 1.5 * c;
            "top-right" === e && (d = l - u - 1.5 * c);
            let p = u - 1.5 * c;
            return (
              "bottom-left" === e && (p = l - u - 1.5 * c),
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("rect", {
                    className: n,
                    stroke: i ?? "currentColor",
                    fill: "transparent",
                    x: t,
                    y: o,
                    width: c + (u - c) * 2,
                    height: c + (u - c) * 2,
                    rx: 2 * s * (u - c),
                    ry: 2 * s * (u - c),
                    strokeWidth: c,
                  }),
                  (0, r.jsx)("rect", {
                    className: a,
                    fill: i ?? "currentColor",
                    x: d,
                    y: p,
                    width: 3 * c,
                    height: 3 * c,
                    rx: 2 * s * c,
                    ry: 2 * s * c,
                  }),
                ],
              })
            );
          }
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(d, { position: "top-left" }),
              (0, r.jsx)(d, { position: "top-right" }),
              (0, r.jsx)(d, { position: "bottom-left" }),
            ],
          });
        }
        function i(t) {
          let {
              className: n,
              fill: i = "currentColor",
              inset: a = !0,
              radius: s = 1,
            } = t,
            { arenaSize: c, cellSize: l, qrcode: u } = o.useContext(e.Context),
            { edgeLength: d, finderLength: p } = u,
            f = o.useMemo(() => {
              let e = "";
              for (let t = 0; t < u.grid.length; t++) {
                let n = u.grid[t];
                if (n)
                  for (let r = 0; r < n.length; r++) {
                    if (!n[r]) continue;
                    let o = d / 2 - c / 2,
                      i = o + c;
                    if (t >= o && t <= i && r >= o && r <= i) continue;
                    let u = t < p && r < p,
                      f = t < p && r >= d - p,
                      h = t >= d - p && r < p;
                    if (u || f || h) continue;
                    let w = a ? 0.1 * l : 0,
                      m = (l - 2 * w) / 2,
                      y = r * l + l / 2,
                      g = t * l + l / 2,
                      b = y - m,
                      A = y + m,
                      v = g - m,
                      C = g + m,
                      x = s * m;
                    e += `M ${b + x},${v} L ${
                      A - x
                    },${v} A ${x},${x} 0 0,1 ${A},${v + x} L ${A},${
                      C - x
                    } A ${x},${x} 0 0,1 ${A - x},${C} L ${
                      b + x
                    },${C} A ${x},${x} 0 0,1 ${b},${C - x} L ${b},${
                      v + x
                    } A ${x},${x} 0 0,1 ${b + x},${v} z`;
                  }
              }
              return e;
            }, [c, l, d, p, u.grid, a, s]);
          return (0, r.jsx)("path", { className: n, d: f, fill: i });
        }
        function a(t) {
          let { children: n } = t,
            {
              arenaSize: i,
              cellSize: a,
              edgeSize: s,
            } = o.useContext(e.Context),
            c = Math.ceil(s / 2 - i / 2),
            l = i + (i % 2);
          return (0, r.jsx)("foreignObject", {
            x: c,
            y: c,
            width: l,
            height: l,
            children: (0, r.jsx)("div", {
              style: {
                alignItems: "center",
                display: "flex",
                fontSize: 1,
                justifyContent: "center",
                height: "100%",
                overflow: "hidden",
                width: "100%",
                padding: a / 2,
                boxSizing: "border-box",
              },
              children: n,
            }),
          });
        }
        (e.Context = o.createContext(null)),
          (e.Root = t),
          ((t = e.Root || (e.Root = {})).displayName = "Root"),
          (e.Finder = n),
          ((n = e.Finder || (e.Finder = {})).displayName = "Finder"),
          (e.Cells = i),
          ((i = e.Cells || (e.Cells = {})).displayName = "Cells"),
          (e.Arena = a),
          ((a = e.Arena || (e.Arena = {})).displayName = "Arena");
      })(x || (x = {}));
    },
    55394: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => u });
      var r = n(14493),
        o = n(13861),
        i = n(67622),
        a = n(41052),
        s = n(7612),
        c = n(34524),
        l = n(3488);
      async function u(
        e,
        {
          address: t,
          blockNumber: n,
          blockTag: u,
          gatewayUrls: d,
          strict: p,
          universalResolverAddress: f,
        }
      ) {
        let h = f;
        if (!h) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          h = (0, o.M)({
            blockNumber: n,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let w = `${t.toLowerCase().substring(2)}.addr.reverse`;
        try {
          let o = {
              address: h,
              abi: r.oX,
              functionName: "reverse",
              args: [(0, i.nj)((0, s.F)(w))],
              blockNumber: n,
              blockTag: u,
            },
            a = (0, c.T)(e, l.J, "readContract"),
            [p, f] = d ? await a({ ...o, args: [...o.args, d] }) : await a(o);
          if (t.toLowerCase() !== f.toLowerCase()) return null;
          return p;
        } catch (e) {
          if (p) throw e;
          if ((0, a.J)(e, "reverse")) return null;
          throw e;
        }
      }
    },
    56985: (e, t, n) => {
      "use strict";
      n.d(t, { E9: () => i, Mi: () => r, pN: () => o, xi: () => a });
      var r = "right-scroll-bar-position",
        o = "width-before-scroll-bar",
        i = "with-scroll-bars-hidden",
        a = "--removed-body-scroll-bar-size";
    },
    59243: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      var r = n(24578),
        o = n(79731),
        i = n(87094),
        a = n(67622);
      function s(e, t) {
        return (0, r.S)(
          (function (e) {
            let t =
                "string" == typeof e
                  ? (0, a.i3)(e)
                  : "string" == typeof e.raw
                  ? e.raw
                  : (0, a.My)(e.raw),
              n = (0, a.i3)(`\x19Ethereum Signed Message:
${(0, i.E)(t)}`);
            return (0, o.xW)([n, t]);
          })(e),
          t
        );
      }
    },
    62540: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => s });
      var r = n(9894),
        o = n(90113),
        i = n(35883),
        a = n(78519);
      function s(e = {}) {
        let t,
          c,
          { shimDisconnect: l = !1 } = e;
        return (0, r.U)((r) => ({
          id: "safe",
          name: "Safe",
          type: s.type,
          async connect() {
            let e = await this.getProvider();
            if (!e) throw new o.N();
            let t = await this.getAccounts(),
              n = await this.getChainId();
            return (
              c || ((c = this.onDisconnect.bind(this)), e.on("disconnect", c)),
              l && (await r.storage?.removeItem("safe.disconnected")),
              { accounts: t, chainId: n }
            );
          },
          async disconnect() {
            let e = await this.getProvider();
            if (!e) throw new o.N();
            c && (e.removeListener("disconnect", c), (c = void 0)),
              l && (await r.storage?.setItem("safe.disconnected", !0));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new o.N();
            return (await e.request({ method: "eth_accounts" })).map(i.b);
          },
          async getProvider() {
            if ("undefined" != typeof window && window?.parent !== window) {
              if (!t) {
                let { default: r } = await Promise.all([
                    n.e(5242),
                    n.e(4278),
                  ]).then(n.bind(n, 94278)),
                  o = new r(e),
                  i = await (0, a.w)(() => o.safe.getInfo(), {
                    timeout: e.unstable_getInfoTimeout ?? 10,
                  });
                if (!i) throw Error("Could not load Safe information");
                t = new (await (async () => {
                  let e = await Promise.all([
                    n.e(5242),
                    n.e(1034),
                    n.e(5779),
                  ]).then(n.t.bind(n, 55779, 19));
                  return "function" != typeof e.SafeAppProvider &&
                    "function" == typeof e.default.SafeAppProvider
                    ? e.default.SafeAppProvider
                    : e.SafeAppProvider;
                })())(i, o);
              }
              return t;
            }
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new o.N();
            return Number(e.chainId);
          },
          async isAuthorized() {
            try {
              if (l && (await r.storage?.getItem("safe.disconnected")))
                return !1;
              return !!(await this.getAccounts()).length;
            } catch {
              return !1;
            }
          },
          onAccountsChanged() {},
          onChainChanged() {},
          onDisconnect() {
            r.emitter.emit("disconnect");
          },
        }));
      }
      s.type = "safe";
    },
    64997: (e, t, n) => {
      "use strict";
      function r(e) {
        let t = e.state.current,
          n = e.state.connections.get(t),
          r = n?.accounts,
          o = r?.[0],
          i = e.chains.find((e) => e.id === n?.chainId),
          a = e.state.status;
        switch (a) {
          case "connected":
            return {
              address: o,
              addresses: r,
              chain: i,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "reconnecting":
            return {
              address: o,
              addresses: r,
              chain: i,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !!o,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: a,
            };
          case "connecting":
            return {
              address: o,
              addresses: r,
              chain: i,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "disconnected":
            return {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: a,
            };
        }
      }
      n.d(t, { s: () => r });
    },
    65830: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => h });
      var r = n(14493),
        o = n(69330),
        i = n(60367),
        a = n(13861),
        s = n(67622),
        c = n(41052),
        l = n(95041),
        u = n(32160),
        d = n(7612),
        p = n(34524),
        f = n(3488);
      async function h(e, t) {
        let {
            blockNumber: n,
            blockTag: h,
            key: w,
            name: m,
            gatewayUrls: y,
            strict: g,
          } = t,
          { chain: b } = e,
          A = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!b)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, a.M)({
              blockNumber: n,
              chain: b,
              contract: "ensUniversalResolver",
            });
          })(),
          v = b?.ensTlds;
        if (v && !v.some((e) => m.endsWith(e))) return null;
        try {
          let t = {
              address: A,
              abi: r.Ag,
              functionName: "resolve",
              args: [
                (0, s.nj)((0, d.F)(m)),
                (0, i.p)({
                  abi: r.SJ,
                  functionName: "text",
                  args: [(0, u.k)(m), w],
                }),
                y ?? [l.J],
              ],
              blockNumber: n,
              blockTag: h,
            },
            a = (0, p.T)(e, f.J, "readContract"),
            c = await a(t);
          if ("0x" === c[0]) return null;
          let g = (0, o.e)({ abi: r.SJ, functionName: "text", data: c[0] });
          return "" === g ? null : g;
        } catch (e) {
          if (g) throw e;
          if ((0, c.J)(e, "resolve")) return null;
          throw e;
        }
      }
    },
    67228: (e, t, n) => {
      "use strict";
      n.d(t, { Zh: () => y });
      var r = n(13423),
        o = n(79731),
        i = n(67622),
        a = n(24578),
        s = n(99702),
        c = n(36444),
        l = n(79183),
        u = n(7441);
      class d extends u.C {
        constructor({ domain: e }) {
          super(`Invalid domain "${(0, l.A)(e)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."],
          });
        }
      }
      class p extends u.C {
        constructor({ primaryType: e, types: t }) {
          super(
            `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
              Object.keys(t)
            )}\`.`,
            {
              docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
              metaMessages: [
                "Check that the primary type is a key in `types`.",
              ],
            }
          );
        }
      }
      class f extends u.C {
        constructor({ type: e }) {
          super(`Struct type "${e}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError",
          });
        }
      }
      var h = n(81757),
        w = n(87094),
        m = n(38697);
      function y(e) {
        let { domain: t = {}, message: n, primaryType: r } = e,
          l = {
            EIP712Domain: (function ({ domain: e }) {
              return [
                "string" == typeof e?.name && { name: "name", type: "string" },
                e?.version && { name: "version", type: "string" },
                ("number" == typeof e?.chainId ||
                  "bigint" == typeof e?.chainId) && {
                  name: "chainId",
                  type: "uint256",
                },
                e?.verifyingContract && {
                  name: "verifyingContract",
                  type: "address",
                },
                e?.salt && { name: "salt", type: "bytes32" },
              ].filter(Boolean);
            })({ domain: t }),
            ...e.types,
          },
          {
            domain: u,
            message: y,
            primaryType: b,
            types: A,
          } = { domain: t, message: n, primaryType: r, types: l },
          v = (e, t) => {
            for (let n of e) {
              let { name: e, type: r } = n,
                o = t[e],
                a = r.match(m.Ge);
              if (a && ("number" == typeof o || "bigint" == typeof o)) {
                let [e, t, n] = a;
                (0, i.cK)(o, {
                  signed: "int" === t,
                  size: Number.parseInt(n) / 8,
                });
              }
              if ("address" === r && "string" == typeof o && !(0, h.P)(o))
                throw new c.M({ address: o });
              let l = r.match(m.BD);
              if (l) {
                let [e, t] = l;
                if (t && (0, w.E)(o) !== Number.parseInt(t))
                  throw new s.BI({
                    expectedSize: Number.parseInt(t),
                    givenSize: (0, w.E)(o),
                  });
              }
              let u = A[r];
              u &&
                ((function (e) {
                  if (
                    "address" === e ||
                    "bool" === e ||
                    "string" === e ||
                    e.startsWith("bytes") ||
                    e.startsWith("uint") ||
                    e.startsWith("int")
                  )
                    throw new f({ type: e });
                })(r),
                v(u, o));
            }
          };
        if (A.EIP712Domain && u) {
          if ("object" != typeof u) throw new d({ domain: u });
          v(A.EIP712Domain, u);
        }
        if ("EIP712Domain" !== b)
          if (A[b]) v(A[b], y);
          else throw new p({ primaryType: b, types: A });
        let C = ["0x1901"];
        return (
          t &&
            C.push(
              (function ({ domain: e, types: t }) {
                return g({ data: e, primaryType: "EIP712Domain", types: t });
              })({ domain: t, types: l })
            ),
          "EIP712Domain" !== r &&
            C.push(g({ data: n, primaryType: r, types: l })),
          (0, a.S)((0, o.xW)(C))
        );
      }
      function g({ data: e, primaryType: t, types: n }) {
        let o = (function e({ data: t, primaryType: n, types: o }) {
          let s = [{ type: "bytes32" }],
            c = [
              (function ({ primaryType: e, types: t }) {
                let n = (0, i.nj)(
                  (function ({ primaryType: e, types: t }) {
                    let n = "",
                      r = (function e(
                        { primaryType: t, types: n },
                        r = new Set()
                      ) {
                        let o = t.match(/^\w*/u),
                          i = o?.[0];
                        if (r.has(i) || void 0 === n[i]) return r;
                        for (let t of (r.add(i), n[i]))
                          e({ primaryType: t.type, types: n }, r);
                        return r;
                      })({ primaryType: e, types: t });
                    for (let o of (r.delete(e), [e, ...Array.from(r).sort()]))
                      n += `${o}(${t[o]
                        .map(({ name: e, type: t }) => `${t} ${e}`)
                        .join(",")})`;
                    return n;
                  })({ primaryType: e, types: t })
                );
                return (0, a.S)(n);
              })({ primaryType: n, types: o }),
            ];
          for (let l of o[n]) {
            let [n, u] = (function t({ types: n, name: o, type: s, value: c }) {
              if (void 0 !== n[s])
                return [
                  { type: "bytes32" },
                  (0, a.S)(e({ data: c, primaryType: s, types: n })),
                ];
              if ("bytes" === s) {
                let e = c.length % 2 ? "0" : "";
                return (
                  (c = `0x${e + c.slice(2)}`),
                  [{ type: "bytes32" }, (0, a.S)(c)]
                );
              }
              if ("string" === s)
                return [{ type: "bytes32" }, (0, a.S)((0, i.nj)(c))];
              if (s.lastIndexOf("]") === s.length - 1) {
                let e = s.slice(0, s.lastIndexOf("[")),
                  i = c.map((r) => t({ name: o, type: e, types: n, value: r }));
                return [
                  { type: "bytes32" },
                  (0, a.S)(
                    (0, r.h)(
                      i.map(([e]) => e),
                      i.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: s }, c];
            })({ types: o, name: l.name, type: l.type, value: t[l.name] });
            s.push(n), c.push(u);
          }
          return (0, r.h)(s, c);
        })({ data: e, primaryType: t, types: n });
        return (0, a.S)(o);
      }
    },
    70464: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => s });
      var r = n(12115);
      function o(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var i = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        a = new WeakMap();
      function s(e, t) {
        var n,
          s,
          c,
          l =
            ((n = t || null),
            (s = function (t) {
              return e.forEach(function (e) {
                return o(e, t);
              });
            }),
            ((c = (0, r.useState)(function () {
              return {
                value: n,
                callback: s,
                facade: {
                  get current() {
                    return c.value;
                  },
                  set current(value) {
                    var e = c.value;
                    e !== value && ((c.value = value), c.callback(value, e));
                  },
                },
              };
            })[0]).callback = s),
            c.facade);
        return (
          i(
            function () {
              var t = a.get(l);
              if (t) {
                var n = new Set(t),
                  r = new Set(e),
                  i = l.current;
                n.forEach(function (e) {
                  r.has(e) || o(e, null);
                }),
                  r.forEach(function (e) {
                    n.has(e) || o(e, i);
                  });
              }
              a.set(l, e);
            },
            [e]
          ),
          l
        );
      }
    },
    70872: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => o });
      var r = n(32840);
      function o(e) {
        if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
          return null;
        let t = `0x${e.slice(1, 65)}`;
        return (0, r.q)(t) ? t : null;
      }
    },
    72312: (e, t, n) => {
      "use strict";
      var r = n(12115),
        o = n(81960),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = o.useSyncExternalStore,
        s = r.useRef,
        c = r.useEffect,
        l = r.useMemo,
        u = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
        var d = s(null);
        if (null === d.current) {
          var p = { hasValue: !1, value: null };
          d.current = p;
        } else p = d.current;
        var f = a(
          e,
          (d = l(
            function () {
              function e(e) {
                if (!c) {
                  if (
                    ((c = !0), (a = e), (e = r(e)), void 0 !== o && p.hasValue)
                  ) {
                    var t = p.value;
                    if (o(t, e)) return (s = t);
                  }
                  return (s = e);
                }
                if (((t = s), i(a, e))) return t;
                var n = r(e);
                return void 0 !== o && o(t, n)
                  ? ((a = e), t)
                  : ((a = e), (s = n));
              }
              var a,
                s,
                c = !1,
                l = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === l
                  ? void 0
                  : function () {
                      return e(l());
                    },
              ];
            },
            [t, n, r, o]
          ))[0],
          d[1]
        );
        return (
          c(
            function () {
              (p.hasValue = !0), (p.value = f);
            },
            [f]
          ),
          u(f),
          f
        );
      };
    },
    72342: (e, t, n) => {
      "use strict";
      n.d(t, { lB: () => a });
      let r = new Map(),
        o = new Map(),
        i = 0;
      function a(e, t, n) {
        let a = ++i,
          s = () => r.get(e) || [],
          c = () => {
            let t = s();
            r.set(
              e,
              t.filter((e) => e.id !== a)
            );
          },
          l = () => {
            let t = s();
            if (!t.some((e) => e.id === a)) return;
            let n = o.get(e);
            if (1 === t.length && n) {
              let e = n();
              e instanceof Promise && e.catch(() => {});
            }
            c();
          },
          u = s();
        if ((r.set(e, [...u, { id: a, fns: t }]), u && u.length > 0)) return l;
        let d = {};
        for (let e in t)
          d[e] = (...t) => {
            let n = s();
            if (0 !== n.length) for (let r of n) r.fns[e]?.(...t);
          };
        let p = n(d);
        return "function" == typeof p && o.set(e, p), l;
      }
    },
    75794: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => k });
      var r = n(3488),
        o = n(7441);
      class i extends o.C {
        constructor({ data: e }) {
          super(
            "Unable to extract image from metadata. The metadata may be malformed or invalid.",
            {
              metaMessages: [
                "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
                "",
                `Provided data: ${JSON.stringify(e)}`,
              ],
              name: "EnsAvatarInvalidMetadataError",
            }
          );
        }
      }
      class a extends o.C {
        constructor({ reason: e }) {
          super(`ENS NFT avatar URI is invalid. ${e}`, {
            name: "EnsAvatarInvalidNftUriError",
          });
        }
      }
      class s extends o.C {
        constructor({ uri: e }) {
          super(
            `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,
            { name: "EnsAvatarUriResolutionError" }
          );
        }
      }
      class c extends o.C {
        constructor({ namespace: e }) {
          super(
            `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,
            { name: "EnsAvatarUnsupportedNamespaceError" }
          );
        }
      }
      let l =
          /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
        u =
          /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
        d = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        p = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function f(e) {
        try {
          let t = await fetch(e, { method: "HEAD" });
          if (200 === t.status) {
            let e = t.headers.get("content-type");
            return e?.startsWith("image/");
          }
          return !1;
        } catch (t) {
          if (
            ("object" == typeof t && void 0 !== t.response) ||
            !globalThis.hasOwnProperty("Image")
          )
            return !1;
          return new Promise((t) => {
            let n = new Image();
            (n.onload = () => {
              t(!0);
            }),
              (n.onerror = () => {
                t(!1);
              }),
              (n.src = e);
          });
        }
      }
      function h(e, t) {
        return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
      }
      function w({ uri: e, gatewayUrls: t }) {
        let n = d.test(e);
        if (n) return { uri: e, isOnChain: !0, isEncoded: n };
        let r = h(t?.ipfs, "https://ipfs.io"),
          o = h(t?.arweave, "https://arweave.net"),
          i = e.match(l),
          {
            protocol: a,
            subpath: c,
            target: f,
            subtarget: w = "",
          } = i?.groups || {},
          m = "ipns:/" === a || "ipns/" === c,
          y = "ipfs:/" === a || "ipfs/" === c || u.test(e);
        if (e.startsWith("http") && !m && !y) {
          let n = e;
          return (
            t?.arweave && (n = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
            { uri: n, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((m || y) && f)
          return {
            uri: `${r}/${m ? "ipns" : "ipfs"}/${f}${w}`,
            isOnChain: !1,
            isEncoded: !1,
          };
        if ("ar:/" === a && f)
          return { uri: `${o}/${f}${w || ""}`, isOnChain: !1, isEncoded: !1 };
        let g = e.replace(p, "");
        if (
          (g.startsWith("<svg") && (g = `data:image/svg+xml;base64,${btoa(g)}`),
          g.startsWith("data:") || g.startsWith("{"))
        )
          return { uri: g, isOnChain: !0, isEncoded: !1 };
        throw new s({ uri: e });
      }
      function m(e) {
        if (
          "object" != typeof e ||
          (!("image" in e) && !("image_url" in e) && !("image_data" in e))
        )
          throw new i({ data: e });
        return e.image || e.image_url || e.image_data;
      }
      async function y({ gatewayUrls: e, uri: t }) {
        try {
          let n = await fetch(t).then((e) => e.json());
          return await g({ gatewayUrls: e, uri: m(n) });
        } catch {
          throw new s({ uri: t });
        }
      }
      async function g({ gatewayUrls: e, uri: t }) {
        let { uri: n, isOnChain: r } = w({ uri: t, gatewayUrls: e });
        if (r || (await f(n))) return n;
        throw new s({ uri: t });
      }
      async function b(e, { nft: t }) {
        if ("erc721" === t.namespace)
          return (0, r.J)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "tokenURI",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "tokenId", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "tokenURI",
            args: [BigInt(t.tokenID)],
          });
        if ("erc1155" === t.namespace)
          return (0, r.J)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "uri",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "_id", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "uri",
            args: [BigInt(t.tokenID)],
          });
        throw new c({ namespace: t.namespace });
      }
      async function A(e, { gatewayUrls: t, record: n }) {
        return /eip155:/i.test(n)
          ? v(e, { gatewayUrls: t, record: n })
          : g({ uri: n, gatewayUrls: t });
      }
      async function v(e, { gatewayUrls: t, record: n }) {
        let r = (function (e) {
            let t = e;
            t.startsWith("did:nft:") &&
              (t = t.replace("did:nft:", "").replace(/_/g, "/"));
            let [n, r, o] = t.split("/"),
              [i, s] = n.split(":"),
              [c, l] = r.split(":");
            if (!i || "eip155" !== i.toLowerCase())
              throw new a({ reason: "Only EIP-155 supported" });
            if (!s) throw new a({ reason: "Chain ID not found" });
            if (!l) throw new a({ reason: "Contract address not found" });
            if (!o) throw new a({ reason: "Token ID not found" });
            if (!c) throw new a({ reason: "ERC namespace not found" });
            return {
              chainID: Number.parseInt(s),
              namespace: c.toLowerCase(),
              contractAddress: l,
              tokenID: o,
            };
          })(n),
          {
            uri: o,
            isOnChain: i,
            isEncoded: s,
          } = w({ uri: await b(e, { nft: r }), gatewayUrls: t });
        if (
          i &&
          (o.includes("data:application/json;base64,") || o.startsWith("{"))
        )
          return g({
            uri: m(
              JSON.parse(
                s ? atob(o.replace("data:application/json;base64,", "")) : o
              )
            ),
            gatewayUrls: t,
          });
        let c = r.tokenID;
        return (
          "erc1155" === r.namespace &&
            (c = c.replace("0x", "").padStart(64, "0")),
          y({ gatewayUrls: t, uri: o.replace(/(?:0x)?{id}/, c) })
        );
      }
      var C = n(34524),
        x = n(65830);
      async function k(
        e,
        {
          blockNumber: t,
          blockTag: n,
          assetGatewayUrls: r,
          name: o,
          gatewayUrls: i,
          strict: a,
          universalResolverAddress: s,
        }
      ) {
        let c = await (0, C.T)(
          e,
          x.m,
          "getEnsText"
        )({
          blockNumber: t,
          blockTag: n,
          key: "avatar",
          name: o,
          universalResolverAddress: s,
          gatewayUrls: i,
          strict: a,
        });
        if (!c) return null;
        try {
          return await A(e, { record: c, gatewayUrls: r });
        } catch {
          return null;
        }
      }
    },
    75887: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => p });
      var r = n(5041),
        o = n(77752),
        i = n(90113);
      async function a(e, t) {
        let { addEthereumChainParameter: n, chainId: r } = t,
          a = e.state.connections.get(t.connector?.uid ?? e.state.current);
        if (a) {
          let e = a.connector;
          if (!e.switchChain) throw new i.V({ connector: e });
          return await e.switchChain({
            addEthereumChainParameter: n,
            chainId: r,
          });
        }
        let s = e.chains.find((e) => e.id === r);
        if (!s) throw new o.nk();
        return e.setState((e) => ({ ...e, chainId: r })), s;
      }
      var s = n(34250);
      let c = [];
      function l(e) {
        let t = e.chains;
        return (0, s.b)(c, t) ? c : ((c = t), t);
      }
      var u = n(12115),
        d = n(53031);
      function p() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, d.U)(e),
          o = { mutationFn: (e) => a(n, e), mutationKey: ["switchChain"] },
          { mutate: i, mutateAsync: s, ...c } = (0, r.n)({ ...t, ...o });
        return {
          ...c,
          chains: (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (0, d.U)(e);
            return (0, u.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e._internal.chains.subscribe((e, t) => {
                    n(e, t);
                  });
                })(t, { onChange: e }),
              () => l(t),
              () => l(t)
            );
          })({ config: n }),
          switchChain: i,
          switchChainAsync: s,
        };
      }
    },
    78519: (e, t, n) => {
      "use strict";
      function r(
        e,
        { errorInstance: t = Error("timed out"), timeout: n, signal: r }
      ) {
        return new Promise((o, i) => {
          (async () => {
            let a;
            try {
              let s = new AbortController();
              n > 0 &&
                (a = setTimeout(() => {
                  r ? s.abort() : i(t);
                }, n)),
                o(await e({ signal: s?.signal || null }));
            } catch (e) {
              e?.name === "AbortError" && i(t), i(e);
            } finally {
              clearTimeout(a);
            }
          })();
        });
      }
      n.d(t, { w: () => r });
    },
    81960: (e, t, n) => {
      "use strict";
      e.exports = n(98335);
    },
    84014: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => h });
      var r = n(20789),
        o = n(69432),
        i = n(34524),
        a = n(72342),
        s = n(62739),
        c = n(42142),
        l = n(79183),
        u = n(23335),
        d = n(30106),
        p = n(3029),
        f = n(85543);
      async function h(
        e,
        {
          confirmations: t = 1,
          hash: n,
          onReplaced: h,
          pollingInterval: w = e.pollingInterval,
          retryCount: m = 6,
          retryDelay: y = ({ count: e }) => 200 * ~~(1 << e),
          timeout: g = 18e4,
        }
      ) {
        let b,
          A,
          v,
          C,
          x,
          k = (0, l.A)(["waitForTransactionReceipt", e.uid, n]),
          E = !1,
          { promise: I, resolve: B, reject: S } = (0, s.Y)(),
          N = g
            ? setTimeout(() => {
                x(), C(), S(new o.WA({ hash: n }));
              }, g)
            : void 0;
        return (
          (C = (0, a.lB)(k, { onReplaced: h, resolve: B, reject: S }, (a) => {
            x = (0, i.T)(
              e,
              f.q,
              "watchBlockNumber"
            )({
              emitMissed: !0,
              emitOnBegin: !0,
              poll: !0,
              pollingInterval: w,
              async onBlockNumber(s) {
                let l = (e) => {
                    clearTimeout(N), x(), e(), C();
                  },
                  f = s;
                if (!E)
                  try {
                    if (v) {
                      if (
                        t > 1 &&
                        (!v.blockNumber || f - v.blockNumber + 1n < t)
                      )
                        return;
                      l(() => a.resolve(v));
                      return;
                    }
                    if (
                      (b ||
                        ((E = !0),
                        await (0, c.b)(
                          async () => {
                            (b = await (0, i.T)(
                              e,
                              d.x,
                              "getTransaction"
                            )({ hash: n })).blockNumber && (f = b.blockNumber);
                          },
                          { delay: y, retryCount: m }
                        ),
                        (E = !1)),
                      (v = await (0, i.T)(
                        e,
                        p.h,
                        "getTransactionReceipt"
                      )({ hash: n })),
                      t > 1 && (!v.blockNumber || f - v.blockNumber + 1n < t))
                    )
                      return;
                    l(() => a.resolve(v));
                  } catch (n) {
                    if (n instanceof o.Kz || n instanceof o.Kc) {
                      if (!b) {
                        E = !1;
                        return;
                      }
                      try {
                        (A = b), (E = !0);
                        let n = await (0, c.b)(
                          () =>
                            (0, i.T)(
                              e,
                              u.g,
                              "getBlock"
                            )({ blockNumber: f, includeTransactions: !0 }),
                          {
                            delay: y,
                            retryCount: m,
                            shouldRetry: ({ error: e }) => e instanceof r.l,
                          }
                        );
                        E = !1;
                        let o = n.transactions.find(
                          ({ from: e, nonce: t }) =>
                            e === A.from && t === A.nonce
                        );
                        if (
                          !o ||
                          ((v = await (0, i.T)(
                            e,
                            p.h,
                            "getTransactionReceipt"
                          )({ hash: o.hash })),
                          t > 1 &&
                            (!v.blockNumber || f - v.blockNumber + 1n < t))
                        )
                          return;
                        let s = "replaced";
                        o.to === A.to &&
                        o.value === A.value &&
                        o.input === A.input
                          ? (s = "repriced")
                          : o.from === o.to &&
                            0n === o.value &&
                            (s = "cancelled"),
                          l(() => {
                            a.onReplaced?.({
                              reason: s,
                              replacedTransaction: A,
                              transaction: o,
                              transactionReceipt: v,
                            }),
                              a.resolve(v);
                          });
                      } catch (e) {
                        l(() => a.reject(e));
                      }
                    } else l(() => a.reject(n));
                  }
              },
            });
          })),
          I
        );
      }
    },
    85543: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => l });
      var r = n(27493),
        o = n(34524),
        i = n(72342),
        a = n(86435),
        s = n(79183),
        c = n(94181);
      function l(
        e,
        {
          emitOnBegin: t = !1,
          emitMissed: n = !1,
          onBlockNumber: l,
          onError: u,
          poll: d,
          pollingInterval: p = e.pollingInterval,
        }
      ) {
        let f;
        return (
          void 0 !== d
            ? d
            : "webSocket" !== e.transport.type &&
              ("fallback" !== e.transport.type ||
                "webSocket" !== e.transport.transports[0].config.type)
        )
          ? (() => {
              let r = (0, s.A)(["watchBlockNumber", e.uid, t, n, p]);
              return (0, i.lB)(r, { onBlockNumber: l, onError: u }, (r) =>
                (0, a.w)(
                  async () => {
                    try {
                      let t = await (0, o.T)(
                        e,
                        c.G,
                        "getBlockNumber"
                      )({ cacheTime: 0 });
                      if (f) {
                        if (t === f) return;
                        if (t - f > 1 && n)
                          for (let e = f + 1n; e < t; e++)
                            r.onBlockNumber(e, f), (f = e);
                      }
                      (!f || t > f) && (r.onBlockNumber(t, f), (f = t));
                    } catch (e) {
                      r.onError?.(e);
                    }
                  },
                  { emitOnBegin: t, interval: p }
                )
              );
            })()
          : (() => {
              let o = (0, s.A)(["watchBlockNumber", e.uid, t, n]);
              return (0, i.lB)(o, { onBlockNumber: l, onError: u }, (t) => {
                let n = !0,
                  o = () => (n = !1);
                return (
                  (async () => {
                    try {
                      let i = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: a } = await i.subscribe({
                          params: ["newHeads"],
                          onData(e) {
                            if (!n) return;
                            let o = (0, r.uU)(e.result?.number);
                            t.onBlockNumber(o, f), (f = o);
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (o = a), n || o();
                    } catch (e) {
                      u?.(e);
                    }
                  })(),
                  () => o()
                );
              });
            })();
      }
    },
    86435: (e, t, n) => {
      "use strict";
      n.d(t, { w: () => o });
      var r = n(10231);
      function o(e, { emitOnBegin: t, initialWaitTime: n, interval: o }) {
        let i = !0,
          a = () => (i = !1);
        return (
          (async () => {
            let s;
            t && (s = await e({ unpoll: a }));
            let c = (await n?.(s)) ?? o;
            await (0, r.u)(c);
            let l = async () => {
              i && (await e({ unpoll: a }), await (0, r.u)(o), l());
            };
            l();
          })(),
          a
        );
      }
    },
    87332: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => a });
      var r = n(87660),
        o = n(12115),
        i = n(53031);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { onConnect: t, onDisconnect: n } = e,
          a = (0, i.U)(e);
        (0, o.useEffect)(
          () =>
            (0, r.F)(a, {
              onChange(e, r) {
                if (
                  ("reconnecting" === r.status ||
                    ("connecting" === r.status && void 0 === r.address)) &&
                  "connected" === e.status
                ) {
                  let {
                      address: n,
                      addresses: o,
                      chain: i,
                      chainId: a,
                      connector: s,
                    } = e,
                    c = "reconnecting" === r.status || void 0 === r.status;
                  null == t ||
                    t({
                      address: n,
                      addresses: o,
                      chain: i,
                      chainId: a,
                      connector: s,
                      isReconnected: c,
                    });
                } else
                  "connected" === r.status &&
                    "disconnected" === e.status &&
                    (null == n || n());
              },
            }),
          [a, t, n]
        );
      }
    },
    87411: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => S });
      var r = n(39249),
        o = n(12115),
        i = n(56985),
        a = n(70464),
        s = (0, n(37548).f)(),
        c = function () {},
        l = o.forwardRef(function (e, t) {
          var n = o.useRef(null),
            i = o.useState({
              onScrollCapture: c,
              onWheelCapture: c,
              onTouchMoveCapture: c,
            }),
            l = i[0],
            u = i[1],
            d = e.forwardProps,
            p = e.children,
            f = e.className,
            h = e.removeScrollBar,
            w = e.enabled,
            m = e.shards,
            y = e.sideCar,
            g = e.noIsolation,
            b = e.inert,
            A = e.allowPinchZoom,
            v = e.as,
            C = e.gapMode,
            x = (0, r.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            k = (0, a.S)([n, t]),
            E = (0, r.__assign)((0, r.__assign)({}, x), l);
          return o.createElement(
            o.Fragment,
            null,
            w &&
              o.createElement(y, {
                sideCar: s,
                removeScrollBar: h,
                shards: m,
                noIsolation: g,
                inert: b,
                setCallbacks: u,
                allowPinchZoom: !!A,
                lockRef: n,
                gapMode: C,
              }),
            d
              ? o.cloneElement(
                  o.Children.only(p),
                  (0, r.__assign)((0, r.__assign)({}, E), { ref: k })
                )
              : o.createElement(
                  void 0 === v ? "div" : v,
                  (0, r.__assign)({}, E, { className: f, ref: k }),
                  p
                )
          );
        });
      (l.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (l.classNames = { fullWidth: i.pN, zeroRight: i.Mi });
      var u = n(50514),
        d = n(21515),
        p = n(29874),
        f = !1;
      if ("undefined" != typeof window)
        try {
          var h = Object.defineProperty({}, "passive", {
            get: function () {
              return (f = !0), !0;
            },
          });
          window.addEventListener("test", h, h),
            window.removeEventListener("test", h, h);
        } catch (e) {
          f = !1;
        }
      var w = !!f && { passive: !1 },
        m = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          );
        },
        y = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              g(e, r))
            ) {
              var o = b(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        g = function (e, t) {
          return "v" === e ? m(t, "overflowY") : m(t, "overflowX");
        },
        b = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        A = function (e, t, n, r, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            s = a * r,
            c = n.target,
            l = t.contains(c),
            u = !1,
            d = s > 0,
            p = 0,
            f = 0;
          do {
            var h = b(e, c),
              w = h[0],
              m = h[1] - h[2] - a * w;
            (w || m) && g(e, c) && ((p += m), (f += w)),
              (c = c instanceof ShadowRoot ? c.host : c.parentNode);
          } while (
            (!l && c !== document.body) ||
            (l && (t.contains(c) || t === c))
          );
          return (
            d && ((o && 1 > Math.abs(p)) || (!o && s > p))
              ? (u = !0)
              : !d && ((o && 1 > Math.abs(f)) || (!o && -s > f)) && (u = !0),
            u
          );
        },
        v = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        C = function (e) {
          return [e.deltaX, e.deltaY];
        },
        x = function (e) {
          return e && "current" in e ? e.current : e;
        },
        k = 0,
        E = [];
      let I = (0, u.m)(s, function (e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          i = o.useRef(),
          a = o.useState(k++)[0],
          s = o.useState(p.T0)[0],
          c = o.useRef(e);
        o.useEffect(
          function () {
            c.current = e;
          },
          [e]
        ),
          o.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(a));
                var t = (0, r.__spreadArray)(
                  [e.lockRef.current],
                  (e.shards || []).map(x),
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
        var l = o.useCallback(function (e, t) {
            if (
              ("touches" in e && 2 === e.touches.length) ||
              ("wheel" === e.type && e.ctrlKey)
            )
              return !c.current.allowPinchZoom;
            var r,
              o = v(e),
              a = n.current,
              s = "deltaX" in e ? e.deltaX : a[0] - o[0],
              l = "deltaY" in e ? e.deltaY : a[1] - o[1],
              u = e.target,
              d = Math.abs(s) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === u.type) return !1;
            var p = y(d, u);
            if (!p) return !0;
            if (
              (p ? (r = d) : ((r = "v" === d ? "h" : "v"), (p = y(d, u))), !p)
            )
              return !1;
            if (
              (!i.current &&
                "changedTouches" in e &&
                (s || l) &&
                (i.current = r),
              !r)
            )
              return !0;
            var f = i.current || r;
            return A(f, t, e, "h" === f ? s : l, !0);
          }, []),
          u = o.useCallback(function (e) {
            if (E.length && E[E.length - 1] === s) {
              var n = "deltaY" in e ? C(e) : v(e),
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
                var o = (c.current.shards || [])
                  .map(x)
                  .filter(Boolean)
                  .filter(function (t) {
                    return t.contains(e.target);
                  });
                (o.length > 0 ? l(e, o[0]) : !c.current.noIsolation) &&
                  e.cancelable &&
                  e.preventDefault();
              }
            }
          }, []),
          f = o.useCallback(function (e, n, r, o) {
            var i = {
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
            t.current.push(i),
              setTimeout(function () {
                t.current = t.current.filter(function (e) {
                  return e !== i;
                });
              }, 1);
          }, []),
          h = o.useCallback(function (e) {
            (n.current = v(e)), (i.current = void 0);
          }, []),
          m = o.useCallback(function (t) {
            f(t.type, C(t), t.target, l(t, e.lockRef.current));
          }, []),
          g = o.useCallback(function (t) {
            f(t.type, v(t), t.target, l(t, e.lockRef.current));
          }, []);
        o.useEffect(function () {
          return (
            E.push(s),
            e.setCallbacks({
              onScrollCapture: m,
              onWheelCapture: m,
              onTouchMoveCapture: g,
            }),
            document.addEventListener("wheel", u, w),
            document.addEventListener("touchmove", u, w),
            document.addEventListener("touchstart", h, w),
            function () {
              (E = E.filter(function (e) {
                return e !== s;
              })),
                document.removeEventListener("wheel", u, w),
                document.removeEventListener("touchmove", u, w),
                document.removeEventListener("touchstart", h, w);
            }
          );
        }, []);
        var b = e.removeScrollBar,
          I = e.inert;
        return o.createElement(
          o.Fragment,
          null,
          I
            ? o.createElement(s, {
                styles: "\n  .block-interactivity-"
                  .concat(
                    a,
                    " {pointer-events: none;}\n  .allow-interactivity-"
                  )
                  .concat(a, " {pointer-events: all;}\n"),
              })
            : null,
          b ? o.createElement(d.jp, { gapMode: e.gapMode }) : null
        );
      });
      var B = o.forwardRef(function (e, t) {
        return o.createElement(
          l,
          (0, r.__assign)({}, e, { ref: t, sideCar: I })
        );
      });
      B.classNames = l.classNames;
      let S = B;
    },
    87632: (e, t, n) => {
      "use strict";
      function r(e, { args: t, eventName: n } = {}) {
        return {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          logIndex: e.logIndex ? Number(e.logIndex) : null,
          transactionHash: e.transactionHash ? e.transactionHash : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          ...(n ? { args: t, eventName: n } : {}),
        };
      }
      n.d(t, { e: () => r });
    },
    87660: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => i });
      var r = n(34250),
        o = n(64997);
      function i(e, t) {
        let { onChange: n } = t;
        return e.subscribe(() => (0, o.s)(e), n, {
          equalityFn(e, t) {
            let { connector: n, ...o } = e,
              { connector: i, ...a } = t;
            return (0, r.b)(o, a) && n?.id === i?.id && n?.uid === i?.uid;
          },
        });
      }
    },
    90113: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => o, V: () => i });
      var r = n(95782);
      class o extends r.C {
        constructor() {
          super("Provider not found."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderNotFoundError",
            });
        }
      }
      class i extends r.C {
        constructor({ connector: e }) {
          super(`"${e.name}" does not support programmatic chain switching.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SwitchChainNotSupportedError",
            });
        }
      }
    },
    92966: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => l });
      var r = n(75794),
        o = n(70030),
        i = n(62108),
        a = n(43484),
        s = n(18224),
        c = n(53031);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: l, query: u = {} } = n,
          d = (0, c.U)(n),
          p = (0, s.i)({ config: d }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { name: n, scopeKey: i, ...a } = t[1];
                if (!n) throw Error("name is required");
                let { chainId: s, ...c } = { ...a, name: n },
                  l = e.getClient({ chainId: s });
                return (0, o.T)(l, r.i, "getEnsAvatar")(c);
              },
              queryKey: (function (e = {}) {
                return ["ensAvatar", (0, i.xO)(e)];
              })(t),
            };
          })(d, { ...n, chainId: null != (e = n.chainId) ? e : p }),
          h = !!(l && (null == (t = u.enabled) || t));
        return (0, a.IT)({ ...u, ...f, enabled: h });
      }
    },
    94181: (e, t, n) => {
      "use strict";
      n.d(t, { G: () => s });
      let r = new Map(),
        o = new Map();
      async function i(
        e,
        { cacheKey: t, cacheTime: n = Number.POSITIVE_INFINITY }
      ) {
        let i = (function (e) {
            let t = (e, t) => ({
                clear: () => t.delete(e),
                get: () => t.get(e),
                set: (n) => t.set(e, n),
              }),
              n = t(e, r),
              i = t(e, o);
            return {
              clear: () => {
                n.clear(), i.clear();
              },
              promise: n,
              response: i,
            };
          })(t),
          a = i.response.get();
        if (a && n > 0 && new Date().getTime() - a.created.getTime() < n)
          return a.data;
        let s = i.promise.get();
        s || ((s = e()), i.promise.set(s));
        try {
          let e = await s;
          return i.response.set({ created: new Date(), data: e }), e;
        } finally {
          i.promise.clear();
        }
      }
      let a = (e) => `blockNumber.${e}`;
      async function s(e, { cacheTime: t = e.cacheTime } = {}) {
        return BigInt(
          await i(() => e.request({ method: "eth_blockNumber" }), {
            cacheKey: a(e.uid),
            cacheTime: t,
          })
        );
      }
    },
    95041: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => y, J: () => m });
      var r = n(14493),
        o = n(29995),
        i = n(99702),
        a = n(93727),
        s = n(21135),
        c = n(43935),
        l = n(21159),
        u = n(79731),
        d = n(13423),
        p = n(23008);
      let f = "/docs/contract/encodeErrorResult";
      function h(e) {
        let { abi: t, errorName: n, args: r } = e,
          o = t[0];
        if (n) {
          let e = (0, p.iY)({ abi: t, args: r, name: n });
          if (!e) throw new i.yy(n, { docsPath: f });
          o = e;
        }
        if ("error" !== o.type) throw new i.yy(void 0, { docsPath: f });
        let a = (0, l.B)(o),
          c = (0, s.V)(a),
          h = "0x";
        if (r && r.length > 0) {
          if (!o.inputs) throw new i.ZP(o.name, { docsPath: f });
          h = (0, d.h)(o.inputs, r);
        }
        return (0, u.aP)([c, h]);
      }
      let w = "/docs/contract/encodeFunctionResult",
        m = "x-batch-gateway:true";
      async function y(e) {
        let { data: t, ccipRequest: n } = e,
          {
            args: [u],
          } = (function (e) {
            let { abi: t, data: n } = e,
              r = (0, a.di)(n, 0, 4),
              o = t.find(
                (e) => "function" === e.type && r === (0, s.V)((0, l.B)(e))
              );
            if (!o)
              throw new i.EB(r, {
                docsPath: "/docs/contract/decodeFunctionData",
              });
            return {
              functionName: o.name,
              args:
                "inputs" in o && o.inputs && o.inputs.length > 0
                  ? (0, c.n)(o.inputs, (0, a.di)(n, 4))
                  : void 0,
            };
          })({ abi: r.b2, data: t }),
          f = [],
          m = [];
        return (
          await Promise.all(
            u.map(async (e, t) => {
              try {
                (m[t] = await n(e)), (f[t] = !1);
              } catch (e) {
                var i;
                (f[t] = !0),
                  (m[t] =
                    "HttpRequestError" === (i = e).name && i.status
                      ? h({
                          abi: r.b2,
                          errorName: "HttpError",
                          args: [i.status, i.shortMessage],
                        })
                      : h({
                          abi: [o.Mc],
                          errorName: "Error",
                          args: [
                            "shortMessage" in i ? i.shortMessage : i.message,
                          ],
                        }));
              }
            })
          ),
          (function (e) {
            let { abi: t, functionName: n, result: r } = e,
              o = t[0];
            if (n) {
              let e = (0, p.iY)({ abi: t, name: n });
              if (!e) throw new i.Iz(n, { docsPath: w });
              o = e;
            }
            if ("function" !== o.type) throw new i.Iz(void 0, { docsPath: w });
            if (!o.outputs) throw new i.MR(o.name, { docsPath: w });
            let a = (() => {
              if (0 === o.outputs.length) return [];
              if (1 === o.outputs.length) return [r];
              if (Array.isArray(r)) return r;
              throw new i.dm(r);
            })();
            return (0, d.h)(o.outputs, a);
          })({ abi: r.b2, functionName: "query", result: [f, m] })
        );
      }
    },
    98335: (e, t, n) => {
      "use strict";
      var r = n(12115),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        i = r.useState,
        a = r.useEffect,
        s = r.useLayoutEffect,
        c = r.useDebugValue;
      function l(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !o(e, n);
        } catch (e) {
          return !0;
        }
      }
      var u =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = i({ inst: { value: n, getSnapshot: t } }),
                o = r[0].inst,
                u = r[1];
              return (
                s(
                  function () {
                    (o.value = n), (o.getSnapshot = t), l(o) && u({ inst: o });
                  },
                  [e, n, t]
                ),
                a(
                  function () {
                    return (
                      l(o) && u({ inst: o }),
                      e(function () {
                        l(o) && u({ inst: o });
                      })
                    );
                  },
                  [e]
                ),
                c(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u;
    },
  },
]);
