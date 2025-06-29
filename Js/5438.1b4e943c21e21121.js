(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5438],
  {
    5517: (e, t, i) => {
      "use strict";
      i.d(t, { P: () => c });
      var r = i(43708),
        s = i(70799),
        a = i(35558);
      let n = Object.freeze({
          message: "",
          variant: "success",
          svg: void 0,
          open: !1,
          autoClose: !0,
        }),
        o = (0, r.BX)({ ...n }),
        c = {
          state: o,
          subscribeKey: (e, t) => (0, s.u$)(o, e, t),
          showLoading(e, t = {}) {
            this._showMessage({ message: e, variant: "loading", ...t });
          },
          showSuccess(e) {
            this._showMessage({ message: e, variant: "success" });
          },
          showSvg(e, t) {
            this._showMessage({ message: e, svg: t });
          },
          showError(e) {
            let t = a.w.parseError(e);
            this._showMessage({ message: t, variant: "error" });
          },
          hide() {
            (o.message = n.message),
              (o.variant = n.variant),
              (o.svg = n.svg),
              (o.open = n.open),
              (o.autoClose = n.autoClose);
          },
          _showMessage({
            message: e,
            svg: t,
            variant: i = "success",
            autoClose: r = n.autoClose,
          }) {
            o.open
              ? ((o.open = !1),
                setTimeout(() => {
                  (o.message = e),
                    (o.variant = i),
                    (o.svg = t),
                    (o.open = !0),
                    (o.autoClose = r);
                }, 150))
              : ((o.message = e),
                (o.variant = i),
                (o.svg = t),
                (o.open = !0),
                (o.autoClose = r));
          },
        };
    },
    5582: (e, t, i) => {
      "use strict";
      i.d(t, { i: () => s });
      var r = i(55458);
      let s = {
        cacheExpiry: {
          portfolio: 3e4,
          nativeBalance: 3e4,
          ens: 3e5,
          identity: 3e5,
        },
        isCacheExpired: (e, t) => Date.now() - e > t,
        getActiveNetworkProps() {
          let e = s.getActiveNamespace(),
            t = s.getActiveCaipNetworkId(),
            i = t ? t.split(":")[1] : void 0;
          return {
            namespace: e,
            caipNetworkId: t,
            chainId: i ? (isNaN(Number(i)) ? i : Number(i)) : void 0,
          };
        },
        setWalletConnectDeepLink({ name: e, href: t }) {
          try {
            r.Ud.setItem(
              r.Ws.DEEPLINK_CHOICE,
              JSON.stringify({ href: t, name: e })
            );
          } catch {
            console.info("Unable to set WalletConnect deep link");
          }
        },
        getWalletConnectDeepLink() {
          try {
            let e = r.Ud.getItem(r.Ws.DEEPLINK_CHOICE);
            if (e) return JSON.parse(e);
          } catch {
            console.info("Unable to get WalletConnect deep link");
          }
        },
        deleteWalletConnectDeepLink() {
          try {
            r.Ud.removeItem(r.Ws.DEEPLINK_CHOICE);
          } catch {
            console.info("Unable to delete WalletConnect deep link");
          }
        },
        setActiveNamespace(e) {
          try {
            r.Ud.setItem(r.Ws.ACTIVE_NAMESPACE, e);
          } catch {
            console.info("Unable to set active namespace");
          }
        },
        setActiveCaipNetworkId(e) {
          try {
            r.Ud.setItem(r.Ws.ACTIVE_CAIP_NETWORK_ID, e),
              s.setActiveNamespace(e.split(":")[0]);
          } catch {
            console.info("Unable to set active caip network id");
          }
        },
        getActiveCaipNetworkId() {
          try {
            return r.Ud.getItem(r.Ws.ACTIVE_CAIP_NETWORK_ID);
          } catch {
            console.info("Unable to get active caip network id");
            return;
          }
        },
        deleteActiveCaipNetworkId() {
          try {
            r.Ud.removeItem(r.Ws.ACTIVE_CAIP_NETWORK_ID);
          } catch {
            console.info("Unable to delete active caip network id");
          }
        },
        deleteConnectedConnectorId(e) {
          try {
            let t = (0, r.T8)(e);
            r.Ud.removeItem(t);
          } catch {
            console.info("Unable to delete connected connector id");
          }
        },
        setAppKitRecent(e) {
          try {
            let t = s.getRecentWallets();
            t.find((t) => t.id === e.id) ||
              (t.unshift(e),
              t.length > 2 && t.pop(),
              r.Ud.setItem(r.Ws.RECENT_WALLETS, JSON.stringify(t)));
          } catch {
            console.info("Unable to set AppKit recent");
          }
        },
        getRecentWallets() {
          try {
            let e = r.Ud.getItem(r.Ws.RECENT_WALLETS);
            return e ? JSON.parse(e) : [];
          } catch {
            console.info("Unable to get AppKit recent");
          }
          return [];
        },
        setConnectedConnectorId(e, t) {
          try {
            let i = (0, r.T8)(e);
            r.Ud.setItem(i, t);
          } catch {
            console.info("Unable to set Connected Connector Id");
          }
        },
        getActiveNamespace() {
          try {
            return r.Ud.getItem(r.Ws.ACTIVE_NAMESPACE);
          } catch {
            console.info("Unable to get active namespace");
          }
        },
        getConnectedConnectorId(e) {
          if (e)
            try {
              let t = (0, r.T8)(e);
              return r.Ud.getItem(t);
            } catch (t) {
              console.info(
                "Unable to get connected connector id in namespace ",
                e
              );
            }
        },
        setConnectedSocialProvider(e) {
          try {
            r.Ud.setItem(r.Ws.CONNECTED_SOCIAL, e);
          } catch {
            console.info("Unable to set connected social provider");
          }
        },
        getConnectedSocialProvider() {
          try {
            return r.Ud.getItem(r.Ws.CONNECTED_SOCIAL);
          } catch {
            console.info("Unable to get connected social provider");
          }
        },
        deleteConnectedSocialProvider() {
          try {
            r.Ud.removeItem(r.Ws.CONNECTED_SOCIAL);
          } catch {
            console.info("Unable to delete connected social provider");
          }
        },
        getConnectedSocialUsername() {
          try {
            return r.Ud.getItem(r.Ws.CONNECTED_SOCIAL_USERNAME);
          } catch {
            console.info("Unable to get connected social username");
          }
        },
        getStoredActiveCaipNetworkId() {
          let e = r.Ud.getItem(r.Ws.ACTIVE_CAIP_NETWORK_ID);
          return e?.split(":")?.[1];
        },
        setConnectionStatus(e) {
          try {
            r.Ud.setItem(r.Ws.CONNECTION_STATUS, e);
          } catch {
            console.info("Unable to set connection status");
          }
        },
        getConnectionStatus() {
          try {
            return r.Ud.getItem(r.Ws.CONNECTION_STATUS);
          } catch {
            return;
          }
        },
        getConnectedNamespaces() {
          try {
            let e = r.Ud.getItem(r.Ws.CONNECTED_NAMESPACES);
            if (!e?.length) return [];
            return e.split(",");
          } catch {
            return [];
          }
        },
        setConnectedNamespaces(e) {
          try {
            let t = Array.from(new Set(e));
            r.Ud.setItem(r.Ws.CONNECTED_NAMESPACES, t.join(","));
          } catch {
            console.info("Unable to set namespaces in storage");
          }
        },
        addConnectedNamespace(e) {
          try {
            let t = s.getConnectedNamespaces();
            t.includes(e) || (t.push(e), s.setConnectedNamespaces(t));
          } catch {
            console.info("Unable to add connected namespace");
          }
        },
        removeConnectedNamespace(e) {
          try {
            let t = s.getConnectedNamespaces(),
              i = t.indexOf(e);
            i > -1 && (t.splice(i, 1), s.setConnectedNamespaces(t));
          } catch {
            console.info("Unable to remove connected namespace");
          }
        },
        getTelegramSocialProvider() {
          try {
            return r.Ud.getItem(r.Ws.TELEGRAM_SOCIAL_PROVIDER);
          } catch {
            return console.info("Unable to get telegram social provider"), null;
          }
        },
        setTelegramSocialProvider(e) {
          try {
            r.Ud.setItem(r.Ws.TELEGRAM_SOCIAL_PROVIDER, e);
          } catch {
            console.info("Unable to set telegram social provider");
          }
        },
        removeTelegramSocialProvider() {
          try {
            r.Ud.removeItem(r.Ws.TELEGRAM_SOCIAL_PROVIDER);
          } catch {
            console.info("Unable to remove telegram social provider");
          }
        },
        getBalanceCache() {
          let e = {};
          try {
            let t = r.Ud.getItem(r.Ws.PORTFOLIO_CACHE);
            e = t ? JSON.parse(t) : {};
          } catch {
            console.info("Unable to get balance cache");
          }
          return e;
        },
        removeAddressFromBalanceCache(e) {
          try {
            let t = s.getBalanceCache();
            r.Ud.setItem(
              r.Ws.PORTFOLIO_CACHE,
              JSON.stringify({ ...t, [e]: void 0 })
            );
          } catch {
            console.info("Unable to remove address from balance cache", e);
          }
        },
        getBalanceCacheForCaipAddress(e) {
          try {
            let t = s.getBalanceCache()[e];
            if (
              t &&
              !this.isCacheExpired(t.timestamp, this.cacheExpiry.portfolio)
            )
              return t.balance;
            s.removeAddressFromBalanceCache(e);
          } catch {
            console.info("Unable to get balance cache for address", e);
          }
        },
        updateBalanceCache(e) {
          try {
            let t = s.getBalanceCache();
            (t[e.caipAddress] = e),
              r.Ud.setItem(r.Ws.PORTFOLIO_CACHE, JSON.stringify(t));
          } catch {
            console.info("Unable to update balance cache", e);
          }
        },
        getNativeBalanceCache() {
          let e = {};
          try {
            let t = r.Ud.getItem(r.Ws.NATIVE_BALANCE_CACHE);
            e = t ? JSON.parse(t) : {};
          } catch {
            console.info("Unable to get balance cache");
          }
          return e;
        },
        removeAddressFromNativeBalanceCache(e) {
          try {
            let t = s.getBalanceCache();
            r.Ud.setItem(
              r.Ws.NATIVE_BALANCE_CACHE,
              JSON.stringify({ ...t, [e]: void 0 })
            );
          } catch {
            console.info("Unable to remove address from balance cache", e);
          }
        },
        getNativeBalanceCacheForCaipAddress(e) {
          try {
            let t = s.getNativeBalanceCache()[e];
            if (
              t &&
              !this.isCacheExpired(t.timestamp, this.cacheExpiry.nativeBalance)
            )
              return t;
            console.info("Discarding cache for address", e),
              s.removeAddressFromBalanceCache(e);
          } catch {
            console.info("Unable to get balance cache for address", e);
          }
        },
        updateNativeBalanceCache(e) {
          try {
            let t = s.getNativeBalanceCache();
            (t[e.caipAddress] = e),
              r.Ud.setItem(r.Ws.NATIVE_BALANCE_CACHE, JSON.stringify(t));
          } catch {
            console.info("Unable to update balance cache", e);
          }
        },
        getEnsCache() {
          let e = {};
          try {
            let t = r.Ud.getItem(r.Ws.ENS_CACHE);
            e = t ? JSON.parse(t) : {};
          } catch {
            console.info("Unable to get ens name cache");
          }
          return e;
        },
        getEnsFromCacheForAddress(e) {
          try {
            let t = s.getEnsCache()[e];
            if (t && !this.isCacheExpired(t.timestamp, this.cacheExpiry.ens))
              return t.ens;
            s.removeEnsFromCache(e);
          } catch {
            console.info("Unable to get ens name from cache", e);
          }
        },
        updateEnsCache(e) {
          try {
            let t = s.getEnsCache();
            (t[e.address] = e), r.Ud.setItem(r.Ws.ENS_CACHE, JSON.stringify(t));
          } catch {
            console.info("Unable to update ens name cache", e);
          }
        },
        removeEnsFromCache(e) {
          try {
            let t = s.getEnsCache();
            r.Ud.setItem(r.Ws.ENS_CACHE, JSON.stringify({ ...t, [e]: void 0 }));
          } catch {
            console.info("Unable to remove ens name from cache", e);
          }
        },
        getIdentityCache() {
          let e = {};
          try {
            let t = r.Ud.getItem(r.Ws.IDENTITY_CACHE);
            e = t ? JSON.parse(t) : {};
          } catch {
            console.info("Unable to get identity cache");
          }
          return e;
        },
        getIdentityFromCacheForAddress(e) {
          try {
            let t = s.getIdentityCache()[e];
            if (
              t &&
              !this.isCacheExpired(t.timestamp, this.cacheExpiry.identity)
            )
              return t.identity;
            s.removeIdentityFromCache(e);
          } catch {
            console.info("Unable to get identity from cache", e);
          }
        },
        updateIdentityCache(e) {
          try {
            let t = s.getIdentityCache();
            (t[e.address] = { identity: e.identity, timestamp: e.timestamp }),
              r.Ud.setItem(r.Ws.IDENTITY_CACHE, JSON.stringify(t));
          } catch {
            console.info("Unable to update identity cache", e);
          }
        },
        removeIdentityFromCache(e) {
          try {
            let t = s.getIdentityCache();
            r.Ud.setItem(
              r.Ws.IDENTITY_CACHE,
              JSON.stringify({ ...t, [e]: void 0 })
            );
          } catch {
            console.info("Unable to remove identity from cache", e);
          }
        },
        clearAddressCache() {
          try {
            r.Ud.removeItem(r.Ws.PORTFOLIO_CACHE),
              r.Ud.removeItem(r.Ws.NATIVE_BALANCE_CACHE),
              r.Ud.removeItem(r.Ws.ENS_CACHE),
              r.Ud.removeItem(r.Ws.IDENTITY_CACHE);
          } catch {
            console.info("Unable to clear address cache");
          }
        },
        setPreferredAccountTypes(e) {
          try {
            r.Ud.setItem(r.Ws.PREFERRED_ACCOUNT_TYPES, JSON.stringify(e));
          } catch {
            console.info("Unable to set preferred account types", e);
          }
        },
        getPreferredAccountTypes() {
          try {
            let e = r.Ud.getItem(r.Ws.PREFERRED_ACCOUNT_TYPES);
            if (!e) return {};
            return JSON.parse(e);
          } catch {
            console.info("Unable to get preferred account types");
          }
          return {};
        },
        setConnections(e, t) {
          try {
            let i = { ...s.getConnections(), [t]: e };
            r.Ud.setItem(r.Ws.CONNECTIONS, JSON.stringify(i));
          } catch (e) {
            console.error("Unable to sync connections to storage", e);
          }
        },
        getConnections() {
          try {
            let e = r.Ud.getItem(r.Ws.CONNECTIONS);
            if (!e) return {};
            return JSON.parse(e);
          } catch (e) {
            return (
              console.error("Unable to get connections from storage", e), {}
            );
          }
        },
      };
    },
    6420: function (e) {
      e.exports = function (e, t, i) {
        i.updateLocale = function (e, t) {
          var r = i.Ls[e];
          if (r)
            return (
              (t ? Object.keys(t) : []).forEach(function (e) {
                r[e] = t[e];
              }),
              r
            );
        };
      };
    },
    7478: (e, t, i) => {
      "use strict";
      i.d(t, { W: () => l });
      var r = i(43708),
        s = i(22492),
        a = i(92555),
        n = i(54252);
      let o = (0, r.BX)({
          themeMode: "dark",
          themeVariables: {},
          w3mThemeVariables: void 0,
        }),
        c = {
          state: o,
          subscribe: (e) => (0, r.B1)(o, () => e(o)),
          setThemeMode(e) {
            o.themeMode = e;
            try {
              let t = n.a.getAuthConnector();
              if (t) {
                let i = c.getSnapshot().themeVariables;
                t.provider.syncTheme({
                  themeMode: e,
                  themeVariables: i,
                  w3mThemeVariables: (0, s.o)(i, e),
                });
              }
            } catch {
              console.info("Unable to sync theme to auth connector");
            }
          },
          setThemeVariables(e) {
            o.themeVariables = { ...o.themeVariables, ...e };
            try {
              let e = n.a.getAuthConnector();
              if (e) {
                let t = c.getSnapshot().themeVariables;
                e.provider.syncTheme({
                  themeVariables: t,
                  w3mThemeVariables: (0, s.o)(o.themeVariables, o.themeMode),
                });
              }
            } catch {
              console.info("Unable to sync theme to auth connector");
            }
          },
          getSnapshot: () => (0, r.P9)(o),
        },
        l = (0, a.X)(c);
    },
    10243: (e, t, i) => {
      "use strict";
      i.d(t, { R: () => $ });
      var r = i(43708),
        s = i(70799),
        a = "[big.js] ",
        n = a + "Invalid ",
        o = n + "decimal places",
        c = n + "rounding mode",
        l = a + "Division by zero",
        h = {},
        d = void 0,
        u = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
      function p(e, t, i, r) {
        var s = e.c;
        if (
          (i === d && (i = e.constructor.RM),
          0 !== i && 1 !== i && 2 !== i && 3 !== i)
        )
          throw Error(c);
        if (t < 1)
          (r =
            (3 === i && (r || !!s[0])) ||
            (0 === t &&
              ((1 === i && s[0] >= 5) ||
                (2 === i && (s[0] > 5 || (5 === s[0] && (r || s[1] !== d))))))),
            (s.length = 1),
            r ? ((e.e = e.e - t + 1), (s[0] = 1)) : (s[0] = e.e = 0);
        else if (t < s.length) {
          if (
            ((r =
              (1 === i && s[t] >= 5) ||
              (2 === i &&
                (s[t] > 5 ||
                  (5 === s[t] && (r || s[t + 1] !== d || 1 & s[t - 1])))) ||
              (3 === i && (r || !!s[0]))),
            (s.length = t),
            r)
          ) {
            for (; ++s[--t] > 9; )
              if (((s[t] = 0), 0 === t)) {
                ++e.e, s.unshift(1);
                break;
              }
          }
          for (t = s.length; !s[--t]; ) s.pop();
        }
        return e;
      }
      function g(e, t, i) {
        var r = e.e,
          s = e.c.join(""),
          a = s.length;
        if (t)
          s =
            s.charAt(0) +
            (a > 1 ? "." + s.slice(1) : "") +
            (r < 0 ? "e" : "e+") +
            r;
        else if (r < 0) {
          for (; ++r; ) s = "0" + s;
          s = "0." + s;
        } else if (r > 0)
          if (++r > a) for (r -= a; r--; ) s += "0";
          else r < a && (s = s.slice(0, r) + "." + s.slice(r));
        else a > 1 && (s = s.charAt(0) + "." + s.slice(1));
        return e.s < 0 && i ? "-" + s : s;
      }
      (h.abs = function () {
        var e = new this.constructor(this);
        return (e.s = 1), e;
      }),
        (h.cmp = function (e) {
          var t,
            i = this.c,
            r = (e = new this.constructor(e)).c,
            s = this.s,
            a = e.s,
            n = this.e,
            o = e.e;
          if (!i[0] || !r[0]) return i[0] ? s : r[0] ? -a : 0;
          if (s != a) return s;
          if (((t = s < 0), n != o)) return (n > o) ^ t ? 1 : -1;
          for (s = -1, a = (n = i.length) < (o = r.length) ? n : o; ++s < a; )
            if (i[s] != r[s]) return (i[s] > r[s]) ^ t ? 1 : -1;
          return n == o ? 0 : (n > o) ^ t ? 1 : -1;
        }),
        (h.div = function (e) {
          var t = this.constructor,
            i = this.c,
            r = (e = new t(e)).c,
            s = this.s == e.s ? 1 : -1,
            a = t.DP;
          if (a !== ~~a || a < 0 || a > 1e6) throw Error(o);
          if (!r[0]) throw Error(l);
          if (!i[0]) return (e.s = s), (e.c = [(e.e = 0)]), e;
          var n,
            c,
            h,
            u,
            g,
            f = r.slice(),
            m = (n = r.length),
            w = i.length,
            y = i.slice(0, n),
            b = y.length,
            v = e,
            E = (v.c = []),
            C = 0,
            I = a + (v.e = this.e - e.e) + 1;
          for (v.s = s, s = I < 0 ? 0 : I, f.unshift(0); b++ < n; ) y.push(0);
          do {
            for (h = 0; h < 10; h++) {
              if (n != (b = y.length)) u = n > b ? 1 : -1;
              else
                for (g = -1, u = 0; ++g < n; )
                  if (r[g] != y[g]) {
                    u = r[g] > y[g] ? 1 : -1;
                    break;
                  }
              if (u < 0) {
                for (c = b == n ? r : f; b; ) {
                  if (y[--b] < c[b]) {
                    for (g = b; g && !y[--g]; ) y[g] = 9;
                    --y[g], (y[b] += 10);
                  }
                  y[b] -= c[b];
                }
                for (; !y[0]; ) y.shift();
              } else break;
            }
            (E[C++] = u ? h : ++h),
              y[0] && u ? (y[b] = i[m] || 0) : (y = [i[m]]);
          } while ((m++ < w || y[0] !== d) && s--);
          return (
            !E[0] && 1 != C && (E.shift(), v.e--, I--),
            C > I && p(v, I, t.RM, y[0] !== d),
            v
          );
        }),
        (h.eq = function (e) {
          return 0 === this.cmp(e);
        }),
        (h.gt = function (e) {
          return this.cmp(e) > 0;
        }),
        (h.gte = function (e) {
          return this.cmp(e) > -1;
        }),
        (h.lt = function (e) {
          return 0 > this.cmp(e);
        }),
        (h.lte = function (e) {
          return 1 > this.cmp(e);
        }),
        (h.minus = h.sub =
          function (e) {
            var t,
              i,
              r,
              s,
              a = this.constructor,
              n = this.s,
              o = (e = new a(e)).s;
            if (n != o) return (e.s = -o), this.plus(e);
            var c = this.c.slice(),
              l = this.e,
              h = e.c,
              d = e.e;
            if (!c[0] || !h[0])
              return (
                h[0] ? (e.s = -o) : c[0] ? (e = new a(this)) : (e.s = 1), e
              );
            if ((n = l - d)) {
              for (
                (s = n < 0) ? ((n = -n), (r = c)) : ((d = l), (r = h)),
                  r.reverse(),
                  o = n;
                o--;

              )
                r.push(0);
              r.reverse();
            } else
              for (
                i = ((s = c.length < h.length) ? c : h).length, n = o = 0;
                o < i;
                o++
              )
                if (c[o] != h[o]) {
                  s = c[o] < h[o];
                  break;
                }
            if (
              (s && ((r = c), (c = h), (h = r), (e.s = -e.s)),
              (o = (i = h.length) - (t = c.length)) > 0)
            )
              for (; o--; ) c[t++] = 0;
            for (o = t; i > n; ) {
              if (c[--i] < h[i]) {
                for (t = i; t && !c[--t]; ) c[t] = 9;
                --c[t], (c[i] += 10);
              }
              c[i] -= h[i];
            }
            for (; 0 === c[--o]; ) c.pop();
            for (; 0 === c[0]; ) c.shift(), --d;
            return (
              c[0] || ((e.s = 1), (c = [(d = 0)])), (e.c = c), (e.e = d), e
            );
          }),
        (h.mod = function (e) {
          var t,
            i = this,
            r = i.constructor,
            s = i.s,
            a = (e = new r(e)).s;
          if (!e.c[0]) throw Error(l);
          return ((i.s = e.s = 1), (t = 1 == e.cmp(i)), (i.s = s), (e.s = a), t)
            ? new r(i)
            : ((s = r.DP),
              (a = r.RM),
              (r.DP = r.RM = 0),
              (i = i.div(e)),
              (r.DP = s),
              (r.RM = a),
              this.minus(i.times(e)));
        }),
        (h.neg = function () {
          var e = new this.constructor(this);
          return (e.s = -e.s), e;
        }),
        (h.plus = h.add =
          function (e) {
            var t,
              i,
              r,
              s = this.constructor;
            if (((e = new s(e)), this.s != e.s))
              return (e.s = -e.s), this.minus(e);
            var a = this.e,
              n = this.c,
              o = e.e,
              c = e.c;
            if (!n[0] || !c[0])
              return c[0] || (n[0] ? (e = new s(this)) : (e.s = this.s)), e;
            if (((n = n.slice()), (t = a - o))) {
              for (
                t > 0 ? ((o = a), (r = c)) : ((t = -t), (r = n)), r.reverse();
                t--;

              )
                r.push(0);
              r.reverse();
            }
            for (
              n.length - c.length < 0 && ((r = c), (c = n), (n = r)),
                t = c.length,
                i = 0;
              t;
              n[t] %= 10
            )
              i = ((n[--t] = n[t] + c[t] + i) / 10) | 0;
            for (i && (n.unshift(i), ++o), t = n.length; 0 === n[--t]; )
              n.pop();
            return (e.c = n), (e.e = o), e;
          }),
        (h.pow = function (e) {
          var t = this,
            i = new t.constructor("1"),
            r = i,
            s = e < 0;
          if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(n + "exponent");
          for (s && (e = -e); 1 & e && (r = r.times(t)), (e >>= 1); )
            t = t.times(t);
          return s ? i.div(r) : r;
        }),
        (h.prec = function (e, t) {
          if (e !== ~~e || e < 1 || e > 1e6) throw Error(n + "precision");
          return p(new this.constructor(this), e, t);
        }),
        (h.round = function (e, t) {
          if (e === d) e = 0;
          else if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(o);
          return p(new this.constructor(this), e + this.e + 1, t);
        }),
        (h.sqrt = function () {
          var e,
            t,
            i,
            r = this.constructor,
            s = this.s,
            n = this.e,
            o = new r("0.5");
          if (!this.c[0]) return new r(this);
          if (s < 0) throw Error(a + "No square root");
          0 === (s = Math.sqrt(+g(this, !0, !0))) || s === 1 / 0
            ? (((t = this.c.join("")).length + n) & 1 || (t += "0"),
              (n = (((n + 1) / 2) | 0) - (n < 0 || 1 & n)),
              (e = new r(
                ((s = Math.sqrt(t)) == 1 / 0
                  ? "5e"
                  : (s = s.toExponential()).slice(0, s.indexOf("e") + 1)) + n
              )))
            : (e = new r(s + "")),
            (n = e.e + (r.DP += 4));
          do (i = e), (e = o.times(i.plus(this.div(i))));
          while (i.c.slice(0, n).join("") !== e.c.slice(0, n).join(""));
          return p(e, (r.DP -= 4) + e.e + 1, r.RM);
        }),
        (h.times = h.mul =
          function (e) {
            var t,
              i = this.constructor,
              r = this.c,
              s = (e = new i(e)).c,
              a = r.length,
              n = s.length,
              o = this.e,
              c = e.e;
            if (((e.s = this.s == e.s ? 1 : -1), !r[0] || !s[0]))
              return (e.c = [(e.e = 0)]), e;
            for (
              e.e = o + c,
                a < n && ((t = r), (r = s), (s = t), (c = a), (a = n), (n = c)),
                t = Array((c = a + n));
              c--;

            )
              t[c] = 0;
            for (o = n; o--; ) {
              for (n = 0, c = a + o; c > o; )
                (n = t[c] + s[o] * r[c - o - 1] + n),
                  (t[c--] = n % 10),
                  (n = (n / 10) | 0);
              t[c] = n;
            }
            for (n ? ++e.e : t.shift(), o = t.length; !t[--o]; ) t.pop();
            return (e.c = t), e;
          }),
        (h.toExponential = function (e, t) {
          var i = this,
            r = i.c[0];
          if (e !== d) {
            if (e !== ~~e || e < 0 || e > 1e6) throw Error(o);
            for (i = p(new i.constructor(i), ++e, t); i.c.length < e; )
              i.c.push(0);
          }
          return g(i, !0, !!r);
        }),
        (h.toFixed = function (e, t) {
          var i = this,
            r = i.c[0];
          if (e !== d) {
            if (e !== ~~e || e < 0 || e > 1e6) throw Error(o);
            for (
              i = p(new i.constructor(i), e + i.e + 1, t), e = e + i.e + 1;
              i.c.length < e;

            )
              i.c.push(0);
          }
          return g(i, !1, !!r);
        }),
        (h[Symbol.for("nodejs.util.inspect.custom")] =
          h.toJSON =
          h.toString =
            function () {
              var e = this.constructor;
              return g(this, this.e <= e.NE || this.e >= e.PE, !!this.c[0]);
            }),
        (h.toNumber = function () {
          var e = +g(this, !0, !0);
          if (!0 === this.constructor.strict && !this.eq(e.toString()))
            throw Error(a + "Imprecise conversion");
          return e;
        }),
        (h.toPrecision = function (e, t) {
          var i = this,
            r = i.constructor,
            s = i.c[0];
          if (e !== d) {
            if (e !== ~~e || e < 1 || e > 1e6) throw Error(n + "precision");
            for (i = p(new r(i), e, t); i.c.length < e; ) i.c.push(0);
          }
          return g(i, e <= i.e || i.e <= r.NE || i.e >= r.PE, !!s);
        }),
        (h.valueOf = function () {
          var e = this.constructor;
          if (!0 === e.strict) throw Error(a + "valueOf disallowed");
          return g(this, this.e <= e.NE || this.e >= e.PE, !0);
        });
      var f = (function e() {
        function t(i) {
          if (!(this instanceof t)) return i === d ? e() : new t(i);
          if (i instanceof t)
            (this.s = i.s), (this.e = i.e), (this.c = i.c.slice());
          else {
            if ("string" != typeof i) {
              if (!0 === t.strict && "bigint" != typeof i)
                throw TypeError(n + "value");
              i = 0 === i && 1 / i < 0 ? "-0" : String(i);
            }
            !(function (e, t) {
              var i, r, s;
              if (!u.test(t)) throw Error(n + "number");
              for (
                e.s = "-" == t.charAt(0) ? ((t = t.slice(1)), -1) : 1,
                  (i = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
                  (r = t.search(/e/i)) > 0
                    ? (i < 0 && (i = r),
                      (i += +t.slice(r + 1)),
                      (t = t.substring(0, r)))
                    : i < 0 && (i = t.length),
                  s = t.length,
                  r = 0;
                r < s && "0" == t.charAt(r);

              )
                ++r;
              if (r == s) e.c = [(e.e = 0)];
              else {
                for (; s > 0 && "0" == t.charAt(--s); );
                for (e.e = i - r - 1, e.c = [], i = 0; r <= s; )
                  e.c[i++] = +t.charAt(r++);
              }
            })(this, i);
          }
          this.constructor = t;
        }
        return (
          (t.prototype = h),
          (t.DP = 20),
          (t.RM = 1),
          (t.NE = -7),
          (t.PE = 21),
          (t.strict = !1),
          (t.roundDown = 0),
          (t.roundHalfUp = 1),
          (t.roundHalfEven = 2),
          (t.roundUp = 3),
          t
        );
      })();
      let m = {
          bigNumber: (e) => new f(e ? e : 0),
          multiply(e, t) {
            if (void 0 === e || void 0 === t) return new f(0);
            let i = new f(e),
              r = new f(t);
            return i.times(r);
          },
          formatNumberToLocalString: (e, t = 2) =>
            void 0 === e
              ? "0.00"
              : "number" == typeof e
              ? e.toLocaleString("en-US", {
                  maximumFractionDigits: t,
                  minimumFractionDigits: t,
                })
              : parseFloat(e).toLocaleString("en-US", {
                  maximumFractionDigits: t,
                  minimumFractionDigits: t,
                }),
          parseLocalStringToNumber: (e) =>
            void 0 === e ? 0 : parseFloat(e.replace(/,/gu, "")),
        },
        w = [
          {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
              { name: "_to", type: "address" },
              { name: "_value", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bool" }],
          },
          {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
              { name: "_from", type: "address" },
              { name: "_to", type: "address" },
              { name: "_value", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bool" }],
          },
        ],
        y = [
          {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
              { name: "sender", type: "address" },
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bool" }],
          },
        ];
      var b = i(60500);
      let v = {
        getERC20Abi: (e) => (b.o.USDT_CONTRACT_ADDRESSES.includes(e) ? y : w),
      };
      var E = i(45312),
        C = i(76610),
        I = i(35558),
        N = i(11076),
        A = i(11501),
        _ = i(90906),
        S = i(81192),
        P = i(1405);
      let O = {
          createBalance(e, t) {
            let i = {
              name: e.metadata.name || "",
              symbol: e.metadata.symbol || "",
              decimals: e.metadata.decimals || 0,
              value: e.metadata.value || 0,
              price: e.metadata.price || 0,
              iconUrl: e.metadata.iconUrl || "",
            };
            return {
              name: i.name,
              symbol: i.symbol,
              chainId: t,
              address:
                "native" === e.address
                  ? void 0
                  : this.convertAddressToCAIP10Address(e.address, t),
              value: i.value,
              price: i.price,
              quantity: {
                decimals: i.decimals.toString(),
                numeric: this.convertHexToBalance({
                  hex: e.balance,
                  decimals: i.decimals,
                }),
              },
              iconUrl: i.iconUrl,
            };
          },
          convertHexToBalance: ({ hex: e, decimals: t }) =>
            (0, P.J)(BigInt(e), t),
          convertAddressToCAIP10Address: (e, t) => `${t}:${e}`,
          createCAIP2ChainId: (e, t) => `${t}:${parseInt(e, 16)}`,
          getChainIdHexFromCAIP2ChainId(e) {
            let t = e.split(":");
            if (t.length < 2 || !t[1]) return "0x0";
            let i = parseInt(t[1], 10);
            return isNaN(i) ? "0x0" : `0x${i.toString(16)}`;
          },
          isWalletGetAssetsResponse(e) {
            return (
              "object" == typeof e &&
              null !== e &&
              Object.values(e).every(
                (e) => Array.isArray(e) && e.every((e) => this.isValidAsset(e))
              )
            );
          },
          isValidAsset: (e) =>
            "object" == typeof e &&
            null !== e &&
            "string" == typeof e.address &&
            "string" == typeof e.balance &&
            ("ERC20" === e.type || "NATIVE" === e.type) &&
            "object" == typeof e.metadata &&
            null !== e.metadata &&
            "string" == typeof e.metadata.name &&
            "string" == typeof e.metadata.symbol &&
            "number" == typeof e.metadata.decimals &&
            "number" == typeof e.metadata.price &&
            "string" == typeof e.metadata.iconUrl,
        },
        T = {
          async getMyTokensWithBalance(e) {
            let t = N.U.state.address,
              i = _.W.state.activeCaipNetwork;
            if (!t || !i) return [];
            if ("eip155" === i.chainNamespace) {
              let e = await this.getEIP155Balances(t, i);
              if (e) return this.filterLowQualityTokens(e);
            }
            let r = await A.T.getBalance(t, i.caipNetworkId, e);
            return this.filterLowQualityTokens(r.balances);
          },
          async getEIP155Balances(e, t) {
            try {
              let i = O.getChainIdHexFromCAIP2ChainId(t.caipNetworkId),
                r = await S.x.getCapabilities(e);
              if (!r?.[i]?.assetDiscovery?.supported) return null;
              let s = await S.x.walletGetAssets({
                account: e,
                chainFilter: [i],
              });
              if (!O.isWalletGetAssetsResponse(s)) return null;
              return (s[i] || []).map((e) =>
                O.createBalance(e, t.caipNetworkId)
              );
            } catch (e) {
              return null;
            }
          },
          filterLowQualityTokens: (e) =>
            e.filter((e) => "0" !== e.quantity.decimals),
          mapBalancesToSwapTokens: (e) =>
            e?.map((e) => ({
              ...e,
              address: e?.address
                ? e.address
                : _.W.getActiveNetworkTokenAddress(),
              decimals: parseInt(e.quantity.decimals, 10),
              logoUri: e.iconUrl,
              eip2612: !1,
            })) || [],
        };
      var k = i(92555),
        x = i(32836),
        R = i(19628),
        U = i(5517);
      let D = (0, r.BX)({ tokenBalances: [], loading: !1 }),
        $ = (0, k.X)({
          state: D,
          subscribe: (e) => (0, r.B1)(D, () => e(D)),
          subscribeKey: (e, t) => (0, s.u$)(D, e, t),
          setToken(e) {
            e && (D.token = (0, r.KR)(e));
          },
          setTokenAmount(e) {
            D.sendTokenAmount = e;
          },
          setReceiverAddress(e) {
            D.receiverAddress = e;
          },
          setReceiverProfileImageUrl(e) {
            D.receiverProfileImageUrl = e;
          },
          setReceiverProfileName(e) {
            D.receiverProfileName = e;
          },
          setNetworkBalanceInUsd(e) {
            D.networkBalanceInUSD = e;
          },
          setLoading(e) {
            D.loading = e;
          },
          async sendToken() {
            try {
              switch (
                ($.setLoading(!0), _.W.state.activeCaipNetwork?.chainNamespace)
              ) {
                case "eip155":
                  await $.sendEvmToken();
                  return;
                case "solana":
                  await $.sendSolanaToken();
                  return;
                default:
                  throw Error("Unsupported chain");
              }
            } finally {
              $.setLoading(!1);
            }
          },
          async sendEvmToken() {
            let e = _.W.state.activeChain,
              t = N.U.state.preferredAccountTypes?.[e];
            if (!$.state.sendTokenAmount || !$.state.receiverAddress)
              throw Error("An amount and receiver address are required");
            if (!$.state.token) throw Error("A token is required");
            $.state.token?.address
              ? (x.E.sendEvent({
                  type: "track",
                  event: "SEND_INITIATED",
                  properties: {
                    isSmartAccount: t === E.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                    token: $.state.token.address,
                    amount: $.state.sendTokenAmount,
                    network: _.W.state.activeCaipNetwork?.caipNetworkId || "",
                  },
                }),
                await $.sendERC20Token({
                  receiverAddress: $.state.receiverAddress,
                  tokenAddress: $.state.token.address,
                  sendTokenAmount: $.state.sendTokenAmount,
                  decimals: $.state.token.quantity.decimals,
                }))
              : (x.E.sendEvent({
                  type: "track",
                  event: "SEND_INITIATED",
                  properties: {
                    isSmartAccount: t === E.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                    token: $.state.token.symbol || "",
                    amount: $.state.sendTokenAmount,
                    network: _.W.state.activeCaipNetwork?.caipNetworkId || "",
                  },
                }),
                await $.sendNativeToken({
                  receiverAddress: $.state.receiverAddress,
                  sendTokenAmount: $.state.sendTokenAmount,
                  decimals: $.state.token.quantity.decimals,
                }));
          },
          async fetchTokenBalance(e) {
            D.loading = !0;
            let t = _.W.state.activeCaipNetwork?.caipNetworkId,
              i = _.W.state.activeCaipNetwork?.chainNamespace,
              r = _.W.state.activeCaipAddress,
              s = r ? I.w.getPlainAddress(r) : void 0;
            if (
              D.lastRetry &&
              !I.w.isAllowedRetry(D.lastRetry, 30 * C.oU.ONE_SEC_MS)
            )
              return (D.loading = !1), [];
            try {
              if (s && t && i) {
                let e = await T.getMyTokensWithBalance();
                return (D.tokenBalances = e), (D.lastRetry = void 0), e;
              }
            } catch (t) {
              (D.lastRetry = Date.now()),
                e?.(t),
                U.P.showError("Token Balance Unavailable");
            } finally {
              D.loading = !1;
            }
            return [];
          },
          fetchNetworkBalance() {
            if (0 === D.tokenBalances.length) return;
            let e = T.mapBalancesToSwapTokens(D.tokenBalances);
            if (!e) return;
            let t = e.find(
              (e) => e.address === _.W.getActiveNetworkTokenAddress()
            );
            t &&
              (D.networkBalanceInUSD = t
                ? m.multiply(t.quantity.numeric, t.price).toString()
                : "0");
          },
          async sendNativeToken(e) {
            R.I.pushTransactionStack({});
            let t = e.receiverAddress,
              i = N.U.state.address,
              r = S.x.parseUnits(
                e.sendTokenAmount.toString(),
                Number(e.decimals)
              );
            await S.x.sendTransaction({
              chainNamespace: "eip155",
              to: t,
              address: i,
              data: "0x",
              value: r ?? BigInt(0),
            }),
              x.E.sendEvent({
                type: "track",
                event: "SEND_SUCCESS",
                properties: {
                  isSmartAccount:
                    N.U.state.preferredAccountTypes?.eip155 ===
                    E.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                  token: $.state.token?.symbol || "",
                  amount: e.sendTokenAmount,
                  network: _.W.state.activeCaipNetwork?.caipNetworkId || "",
                },
              }),
              S.x._getClient()?.updateBalance("eip155"),
              $.resetSend();
          },
          async sendERC20Token(e) {
            R.I.pushTransactionStack({
              onSuccess() {
                R.I.replace("Account");
              },
            });
            let t = S.x.parseUnits(
              e.sendTokenAmount.toString(),
              Number(e.decimals)
            );
            if (
              N.U.state.address &&
              e.sendTokenAmount &&
              e.receiverAddress &&
              e.tokenAddress
            ) {
              let i = I.w.getPlainAddress(e.tokenAddress);
              await S.x.writeContract({
                fromAddress: N.U.state.address,
                tokenAddress: i,
                args: [e.receiverAddress, t ?? BigInt(0)],
                method: "transfer",
                abi: v.getERC20Abi(i),
                chainNamespace: "eip155",
              }),
                $.resetSend();
            }
          },
          async sendSolanaToken() {
            if (!$.state.sendTokenAmount || !$.state.receiverAddress)
              throw Error("An amount and receiver address are required");
            R.I.pushTransactionStack({
              onSuccess() {
                R.I.replace("Account");
              },
            }),
              await S.x.sendTransaction({
                chainNamespace: "solana",
                to: $.state.receiverAddress,
                value: $.state.sendTokenAmount,
              }),
              S.x._getClient()?.updateBalance("solana"),
              $.resetSend();
          },
          resetSend() {
            (D.token = void 0),
              (D.sendTokenAmount = void 0),
              (D.receiverAddress = void 0),
              (D.receiverProfileImageUrl = void 0),
              (D.receiverProfileName = void 0),
              (D.loading = !1),
              (D.tokenBalances = []);
          },
        });
    },
    11076: (e, t, i) => {
      "use strict";
      i.d(t, { U: () => d });
      var r = i(43708),
        s = i(76610),
        a = i(35558),
        n = i(92555),
        o = i(11501),
        c = i(90906),
        l = i(5517);
      let h = (0, r.BX)({
          currentTab: 0,
          tokenBalance: [],
          smartAccountDeployed: !1,
          addressLabels: new Map(),
          allAccounts: [],
        }),
        d = (0, n.X)({
          state: h,
          replaceState(e) {
            e && Object.assign(h, (0, r.KR)(e));
          },
          subscribe: (e) =>
            c.W.subscribeChainProp("accountState", (t) => {
              if (t) return e(t);
            }),
          subscribeKey(e, t, i) {
            let r;
            return c.W.subscribeChainProp(
              "accountState",
              (i) => {
                if (i) {
                  let s = i[e];
                  r !== s && ((r = s), t(s));
                }
              },
              i
            );
          },
          setStatus(e, t) {
            c.W.setAccountProp("status", e, t);
          },
          getCaipAddress: (e) => c.W.getAccountProp("caipAddress", e),
          setCaipAddress(e, t) {
            let i = e ? a.w.getPlainAddress(e) : void 0;
            t === c.W.state.activeChain && (c.W.state.activeCaipAddress = e),
              c.W.setAccountProp("caipAddress", e, t),
              c.W.setAccountProp("address", i, t);
          },
          setBalance(e, t, i) {
            c.W.setAccountProp("balance", e, i),
              c.W.setAccountProp("balanceSymbol", t, i);
          },
          setProfileName(e, t) {
            c.W.setAccountProp("profileName", e, t);
          },
          setProfileImage(e, t) {
            c.W.setAccountProp("profileImage", e, t);
          },
          setUser(e, t) {
            c.W.setAccountProp("user", e, t);
          },
          setAddressExplorerUrl(e, t) {
            c.W.setAccountProp("addressExplorerUrl", e, t);
          },
          setSmartAccountDeployed(e, t) {
            c.W.setAccountProp("smartAccountDeployed", e, t);
          },
          setCurrentTab(e) {
            c.W.setAccountProp("currentTab", e, c.W.state.activeChain);
          },
          setTokenBalance(e, t) {
            e && c.W.setAccountProp("tokenBalance", e, t);
          },
          setShouldUpdateToAddress(e, t) {
            c.W.setAccountProp("shouldUpdateToAddress", e, t);
          },
          setAllAccounts(e, t) {
            c.W.setAccountProp("allAccounts", e, t);
          },
          addAddressLabel(e, t, i) {
            let r = c.W.getAccountProp("addressLabels", i) || new Map();
            r.set(e, t), c.W.setAccountProp("addressLabels", r, i);
          },
          removeAddressLabel(e, t) {
            let i = c.W.getAccountProp("addressLabels", t) || new Map();
            i.delete(e), c.W.setAccountProp("addressLabels", i, t);
          },
          setConnectedWalletInfo(e, t) {
            c.W.setAccountProp("connectedWalletInfo", e, t, !1);
          },
          setPreferredAccountType(e, t) {
            c.W.setAccountProp(
              "preferredAccountTypes",
              { ...h.preferredAccountTypes, [t]: e },
              t
            );
          },
          setPreferredAccountTypes(e) {
            h.preferredAccountTypes = e;
          },
          setSocialProvider(e, t) {
            e && c.W.setAccountProp("socialProvider", e, t);
          },
          setSocialWindow(e, t) {
            c.W.setAccountProp("socialWindow", e ? (0, r.KR)(e) : void 0, t);
          },
          setFarcasterUrl(e, t) {
            c.W.setAccountProp("farcasterUrl", e, t);
          },
          async fetchTokenBalance(e) {
            h.balanceLoading = !0;
            let t = c.W.state.activeCaipNetwork?.caipNetworkId,
              i = c.W.state.activeCaipNetwork?.chainNamespace,
              r = c.W.state.activeCaipAddress,
              n = r ? a.w.getPlainAddress(r) : void 0;
            if (
              h.lastRetry &&
              !a.w.isAllowedRetry(h.lastRetry, 30 * s.oU.ONE_SEC_MS)
            )
              return (h.balanceLoading = !1), [];
            try {
              if (n && t && i) {
                let e = (await o.T.getBalance(n, t)).balances.filter(
                  (e) => "0" !== e.quantity.decimals
                );
                return (
                  d.setTokenBalance(e, i),
                  (h.lastRetry = void 0),
                  (h.balanceLoading = !1),
                  e
                );
              }
            } catch (t) {
              (h.lastRetry = Date.now()),
                e?.(t),
                l.P.showError("Token Balance Unavailable");
            } finally {
              h.balanceLoading = !1;
            }
            return [];
          },
          resetAccount(e) {
            c.W.resetAccount(e);
          },
        });
    },
    11501: (e, t, i) => {
      "use strict";
      i.d(t, { T: () => f });
      var r = i(43708),
        s = i(76610),
        a = i(35558),
        n = i(43359),
        o = i(5582),
        c = i(11076),
        l = i(90906),
        h = i(96641),
        d = i(5517);
      let u = {
          purchaseCurrencies: [
            {
              id: "2b92315d-eab7-5bef-84fa-089a131333f5",
              name: "USD Coin",
              symbol: "USDC",
              networks: [
                {
                  name: "ethereum-mainnet",
                  display_name: "Ethereum",
                  chain_id: "1",
                  contract_address:
                    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                },
                {
                  name: "polygon-mainnet",
                  display_name: "Polygon",
                  chain_id: "137",
                  contract_address:
                    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
                },
              ],
            },
            {
              id: "2b92315d-eab7-5bef-84fa-089a131333f5",
              name: "Ether",
              symbol: "ETH",
              networks: [
                {
                  name: "ethereum-mainnet",
                  display_name: "Ethereum",
                  chain_id: "1",
                  contract_address:
                    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                },
                {
                  name: "polygon-mainnet",
                  display_name: "Polygon",
                  chain_id: "137",
                  contract_address:
                    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
                },
              ],
            },
          ],
          paymentCurrencies: [
            {
              id: "USD",
              payment_method_limits: [
                { id: "card", min: "10.00", max: "7500.00" },
                { id: "ach_bank_account", min: "10.00", max: "25000.00" },
              ],
            },
            {
              id: "EUR",
              payment_method_limits: [
                { id: "card", min: "10.00", max: "7500.00" },
                { id: "ach_bank_account", min: "10.00", max: "25000.00" },
              ],
            },
          ],
        },
        p = a.w.getBlockchainApiUrl(),
        g = (0, r.BX)({
          clientId: null,
          api: new n.Z({ baseUrl: p, clientId: null }),
          supportedChains: { http: [], ws: [] },
        }),
        f = {
          state: g,
          async get(e) {
            let { st: t, sv: i } = f.getSdkProperties(),
              r = h.H.state.projectId,
              s = { ...(e.params || {}), st: t, sv: i, projectId: r };
            return g.api.get({ ...e, params: s });
          },
          getSdkProperties() {
            let { sdkType: e, sdkVersion: t } = h.H.state;
            return { st: e || "unknown", sv: t || "unknown" };
          },
          async isNetworkSupported(e) {
            if (!e) return !1;
            try {
              g.supportedChains.http.length || (await f.getSupportedNetworks());
            } catch (e) {
              return !1;
            }
            return g.supportedChains.http.includes(e);
          },
          async getSupportedNetworks() {
            try {
              let e = await f.get({ path: "v1/supported-chains" });
              return (g.supportedChains = e), e;
            } catch {
              return g.supportedChains;
            }
          },
          async fetchIdentity({ address: e, caipNetworkId: t }) {
            if (!(await f.isNetworkSupported(t)))
              return { avatar: "", name: "" };
            let i = o.i.getIdentityFromCacheForAddress(e);
            if (i) return i;
            let r = await f.get({
              path: `/v1/identity/${e}`,
              params: {
                sender: l.W.state.activeCaipAddress
                  ? a.w.getPlainAddress(l.W.state.activeCaipAddress)
                  : void 0,
              },
            });
            return (
              o.i.updateIdentityCache({
                address: e,
                identity: r,
                timestamp: Date.now(),
              }),
              r
            );
          },
          fetchTransactions: async ({
            account: e,
            cursor: t,
            onramp: i,
            signal: r,
            cache: s,
            chainId: a,
          }) =>
            (await f.isNetworkSupported(
              l.W.state.activeCaipNetwork?.caipNetworkId
            ))
              ? f.get({
                  path: `/v1/account/${e}/history`,
                  params: { cursor: t, onramp: i, chainId: a },
                  signal: r,
                  cache: s,
                })
              : { data: [], next: void 0 },
          fetchSwapQuote: async ({
            amount: e,
            userAddress: t,
            from: i,
            to: r,
            gasPrice: s,
          }) =>
            (await f.isNetworkSupported(
              l.W.state.activeCaipNetwork?.caipNetworkId
            ))
              ? f.get({
                  path: "/v1/convert/quotes",
                  headers: { "Content-Type": "application/json" },
                  params: {
                    amount: e,
                    userAddress: t,
                    from: i,
                    to: r,
                    gasPrice: s,
                  },
                })
              : { quotes: [] },
          fetchSwapTokens: async ({ chainId: e }) =>
            (await f.isNetworkSupported(
              l.W.state.activeCaipNetwork?.caipNetworkId
            ))
              ? f.get({ path: "/v1/convert/tokens", params: { chainId: e } })
              : { tokens: [] },
          fetchTokenPrice: async ({ addresses: e }) =>
            (await f.isNetworkSupported(
              l.W.state.activeCaipNetwork?.caipNetworkId
            ))
              ? g.api.post({
                  path: "/v1/fungible/price",
                  body: {
                    currency: "usd",
                    addresses: e,
                    projectId: h.H.state.projectId,
                  },
                  headers: { "Content-Type": "application/json" },
                })
              : { fungibles: [] },
          fetchSwapAllowance: async ({ tokenAddress: e, userAddress: t }) =>
            (await f.isNetworkSupported(
              l.W.state.activeCaipNetwork?.caipNetworkId
            ))
              ? f.get({
                  path: "/v1/convert/allowance",
                  params: { tokenAddress: e, userAddress: t },
                  headers: { "Content-Type": "application/json" },
                })
              : { allowance: "0" },
          async fetchGasPrice({ chainId: e }) {
            let { st: t, sv: i } = f.getSdkProperties();
            if (
              !(await f.isNetworkSupported(
                l.W.state.activeCaipNetwork?.caipNetworkId
              ))
            )
              throw Error("Network not supported for Gas Price");
            return f.get({
              path: "/v1/convert/gas-price",
              headers: { "Content-Type": "application/json" },
              params: { chainId: e, st: t, sv: i },
            });
          },
          async generateSwapCalldata({
            amount: e,
            from: t,
            to: i,
            userAddress: r,
            disableEstimate: a,
          }) {
            if (
              !(await f.isNetworkSupported(
                l.W.state.activeCaipNetwork?.caipNetworkId
              ))
            )
              throw Error("Network not supported for Swaps");
            return g.api.post({
              path: "/v1/convert/build-transaction",
              headers: { "Content-Type": "application/json" },
              body: {
                amount: e,
                eip155: { slippage: s.oU.CONVERT_SLIPPAGE_TOLERANCE },
                projectId: h.H.state.projectId,
                from: t,
                to: i,
                userAddress: r,
                disableEstimate: a,
              },
            });
          },
          async generateApproveCalldata({ from: e, to: t, userAddress: i }) {
            let { st: r, sv: s } = f.getSdkProperties();
            if (
              !(await f.isNetworkSupported(
                l.W.state.activeCaipNetwork?.caipNetworkId
              ))
            )
              throw Error("Network not supported for Swaps");
            return f.get({
              path: "/v1/convert/build-approve",
              headers: { "Content-Type": "application/json" },
              params: { userAddress: i, from: e, to: t, st: r, sv: s },
            });
          },
          async getBalance(e, t, i) {
            let { st: r, sv: s } = f.getSdkProperties();
            if (
              !(await f.isNetworkSupported(
                l.W.state.activeCaipNetwork?.caipNetworkId
              ))
            )
              return (
                d.P.showError("Token Balance Unavailable"), { balances: [] }
              );
            let a = `${t}:${e}`,
              n = o.i.getBalanceCacheForCaipAddress(a);
            if (n) return n;
            let c = await f.get({
              path: `/v1/account/${e}/balance`,
              params: {
                currency: "usd",
                chainId: t,
                forceUpdate: i,
                st: r,
                sv: s,
              },
            });
            return (
              o.i.updateBalanceCache({
                caipAddress: a,
                balance: c,
                timestamp: Date.now(),
              }),
              c
            );
          },
          lookupEnsName: async (e) =>
            (await f.isNetworkSupported(
              l.W.state.activeCaipNetwork?.caipNetworkId
            ))
              ? f.get({
                  path: `/v1/profile/account/${e}`,
                  params: { apiVersion: "2" },
                })
              : { addresses: {}, attributes: [] },
          reverseLookupEnsName: async ({ address: e }) =>
            (await f.isNetworkSupported(
              l.W.state.activeCaipNetwork?.caipNetworkId
            ))
              ? f.get({
                  path: `/v1/profile/reverse/${e}`,
                  params: { sender: c.U.state.address, apiVersion: "2" },
                })
              : [],
          getEnsNameSuggestions: async (e) =>
            (await f.isNetworkSupported(
              l.W.state.activeCaipNetwork?.caipNetworkId
            ))
              ? f.get({
                  path: `/v1/profile/suggestions/${e}`,
                  params: { zone: "reown.id" },
                })
              : { suggestions: [] },
          registerEnsName: async ({
            coinType: e,
            address: t,
            message: i,
            signature: r,
          }) =>
            (await f.isNetworkSupported(
              l.W.state.activeCaipNetwork?.caipNetworkId
            ))
              ? g.api.post({
                  path: "/v1/profile/account",
                  body: { coin_type: e, address: t, message: i, signature: r },
                  headers: { "Content-Type": "application/json" },
                })
              : { success: !1 },
          generateOnRampURL: async ({
            destinationWallets: e,
            partnerUserId: t,
            defaultNetwork: i,
            purchaseAmount: r,
            paymentAmount: s,
          }) =>
            (await f.isNetworkSupported(
              l.W.state.activeCaipNetwork?.caipNetworkId
            ))
              ? (
                  await g.api.post({
                    path: "/v1/generators/onrampurl",
                    params: { projectId: h.H.state.projectId },
                    body: {
                      destinationWallets: e,
                      defaultNetwork: i,
                      partnerUserId: t,
                      defaultExperience: "buy",
                      presetCryptoAmount: r,
                      presetFiatAmount: s,
                    },
                  })
                ).url
              : "",
          async getOnrampOptions() {
            if (
              !(await f.isNetworkSupported(
                l.W.state.activeCaipNetwork?.caipNetworkId
              ))
            )
              return { paymentCurrencies: [], purchaseCurrencies: [] };
            try {
              return await f.get({ path: "/v1/onramp/options" });
            } catch (e) {
              return u;
            }
          },
          async getOnrampQuote({
            purchaseCurrency: e,
            paymentCurrency: t,
            amount: i,
            network: r,
          }) {
            try {
              if (
                !(await f.isNetworkSupported(
                  l.W.state.activeCaipNetwork?.caipNetworkId
                ))
              )
                return null;
              return await g.api.post({
                path: "/v1/onramp/quote",
                params: { projectId: h.H.state.projectId },
                body: {
                  purchaseCurrency: e,
                  paymentCurrency: t,
                  amount: i,
                  network: r,
                },
              });
            } catch (e) {
              return {
                coinbaseFee: { amount: i, currency: t.id },
                networkFee: { amount: i, currency: t.id },
                paymentSubtotal: { amount: i, currency: t.id },
                paymentTotal: { amount: i, currency: t.id },
                purchaseAmount: { amount: i, currency: t.id },
                quoteId: "mocked-quote-id",
              };
            }
          },
          getSmartSessions: async (e) =>
            (await f.isNetworkSupported(
              l.W.state.activeCaipNetwork?.caipNetworkId
            ))
              ? f.get({ path: `/v1/sessions/${e}` })
              : [],
          revokeSmartSession: async (e, t, i) =>
            (await f.isNetworkSupported(
              l.W.state.activeCaipNetwork?.caipNetworkId
            ))
              ? g.api.post({
                  path: `/v1/sessions/${e}/revoke`,
                  params: { projectId: h.H.state.projectId },
                  body: { pci: t, signature: i },
                })
              : { success: !1 },
          setClientId(e) {
            (g.clientId = e), (g.api = new n.Z({ baseUrl: p, clientId: e }));
          },
        };
    },
    19628: (e, t, i) => {
      "use strict";
      i.d(t, { I: () => u });
      var r = i(43708),
        s = i(70799),
        a = i(92555),
        n = i(11076),
        o = i(90906),
        c = i(54252),
        l = i(40166),
        h = i(96641);
      let d = (0, r.BX)({
          view: "Connect",
          history: ["Connect"],
          transactionStack: [],
        }),
        u = (0, a.X)({
          state: d,
          subscribeKey: (e, t) => (0, s.u$)(d, e, t),
          pushTransactionStack(e) {
            d.transactionStack.push(e);
          },
          popTransactionStack(e) {
            let t = d.transactionStack.pop();
            if (!t) return;
            let { onSuccess: i, onError: r, onCancel: s } = t;
            switch (e) {
              case "success":
                i?.();
                break;
              case "error":
                r?.(), u.goBack();
                break;
              case "cancel":
                s?.(), u.goBack();
            }
          },
          push(e, t) {
            e !== d.view && ((d.view = e), d.history.push(e), (d.data = t));
          },
          reset(e, t) {
            (d.view = e), (d.history = [e]), (d.data = t);
          },
          replace(e, t) {
            d.history.at(-1) !== e &&
              ((d.view = e),
              (d.history[d.history.length - 1] = e),
              (d.data = t));
          },
          goBack() {
            let e = o.W.state.activeCaipAddress,
              t = "ConnectingFarcaster" === u.state.view,
              i = !e && t;
            if (d.history.length > 1) {
              d.history.pop();
              let [t] = d.history.slice(-1);
              t && (e && "Connect" === t ? (d.view = "Account") : (d.view = t));
            } else l.W.close();
            d.data?.wallet && (d.data.wallet = void 0),
              setTimeout(() => {
                if (i) {
                  n.U.setFarcasterUrl(void 0, o.W.state.activeChain);
                  let e = c.a.getAuthConnector();
                  e?.provider?.reload();
                  let t = (0, r.P9)(h.H.state);
                  e?.provider?.syncDappData?.({
                    metadata: t.metadata,
                    sdkVersion: t.sdkVersion,
                    projectId: t.projectId,
                    sdkType: t.sdkType,
                  });
                }
              }, 100);
          },
          goBackToIndex(e) {
            if (d.history.length > 1) {
              d.history = d.history.slice(0, e + 1);
              let [t] = d.history.slice(-1);
              t && (d.view = t);
            }
          },
          goBackOrCloseModal() {
            u.state.history.length > 1 ? u.goBack() : l.W.close();
          },
        });
    },
    22492: (e, t, i) => {
      "use strict";
      function r(e, t) {
        return "light" === t
          ? {
              "--w3m-accent": e?.["--w3m-accent"] || "hsla(231, 100%, 70%, 1)",
              "--w3m-background": "#fff",
            }
          : {
              "--w3m-accent": e?.["--w3m-accent"] || "hsla(230, 100%, 67%, 1)",
              "--w3m-background": "#121313",
            };
      }
      i.d(t, { o: () => r });
    },
    23140: (e, t, i) => {
      "use strict";
      i.d(t, { y: () => s });
      var r = i(99836);
      let s = {
        getCaipTokens(e) {
          if (!e) return;
          let t = {};
          return (
            Object.entries(e).forEach(([e, i]) => {
              t[`${r.o.EIP155}:${e}`] = i;
            }),
            t
          );
        },
        isLowerCaseMatch: (e, t) => e?.toLowerCase() === t?.toLowerCase(),
      };
    },
    26128: (e, t, i) => {
      "use strict";
      i.d(t, { o: () => s });
      var r = i(49509);
      let s = {
        ACCOUNT_TABS: [
          { label: "Tokens" },
          { label: "NFTs" },
          { label: "Activity" },
        ],
        SECURE_SITE_ORIGIN:
          (void 0 !== r && void 0 !== r.env
            ? r.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN
            : void 0) || "https://secure.walletconnect.org",
        VIEW_DIRECTION: { Next: "next", Prev: "prev" },
        DEFAULT_CONNECT_METHOD_ORDER: ["email", "social", "wallet"],
        ANIMATION_DURATIONS: {
          HeaderText: 120,
          ModalHeight: 150,
          ViewTransition: 150,
        },
      };
    },
    26343: (e, t, i) => {
      "use strict";
      i.d(t, { L: () => s });
      var r = i(60500);
      let s = {
        caipNetworkIdToNumber: (e) => (e ? Number(e.split(":")[1]) : void 0),
        parseEvmChainId(e) {
          return "string" == typeof e ? this.caipNetworkIdToNumber(e) : e;
        },
        getNetworksByNamespace: (e, t) =>
          e?.filter((e) => e.chainNamespace === t) || [],
        getFirstNetworkByNamespace(e, t) {
          return this.getNetworksByNamespace(e, t)[0];
        },
        getNetworkNameByCaipNetworkId(e, t) {
          if (!t) return;
          let i = e.find((e) => e.caipNetworkId === t);
          if (i) return i.name;
          let [s] = t.split(":");
          return r.o.CHAIN_NAME_MAP?.[s] || void 0;
        },
      };
    },
    28312: (e, t, i) => {
      "use strict";
      i.d(t, {
        WF: () => n,
        AH: () => r.AH,
        qy: () => s.qy,
        JW: () => s.JW,
        iz: () => r.iz,
      });
      var r = i(30572),
        s = i(77508);
      let a = globalThis;
      class n extends r.mN {
        constructor() {
          super(...arguments),
            (this.renderOptions = { host: this }),
            (this._$Do = void 0);
        }
        createRenderRoot() {
          let e = super.createRenderRoot();
          return (this.renderOptions.renderBefore ??= e.firstChild), e;
        }
        update(e) {
          let t = this.render();
          this.hasUpdated ||
            (this.renderOptions.isConnected = this.isConnected),
            super.update(e),
            (this._$Do = (0, s.XX)(t, this.renderRoot, this.renderOptions));
        }
        connectedCallback() {
          super.connectedCallback(), this._$Do?.setConnected(!0);
        }
        disconnectedCallback() {
          super.disconnectedCallback(), this._$Do?.setConnected(!1);
        }
        render() {
          return s.c0;
        }
      }
      (n._$litElement$ = !0),
        (n.finalized = !0),
        a.litElementHydrateSupport?.({ LitElement: n });
      let o = a.litElementPolyfillSupport;
      o?.({ LitElement: n }), (a.litElementVersions ??= []).push("4.2.0");
    },
    28898: (e, t, i) => {
      "use strict";
      i.d(t, {
        Zv: () => s.Z,
        EM: () => d.E,
        RF: () => r.RF,
        JX: () => r.JX,
        ds: () => r.ds,
      });
      var r = i(97265),
        s = i(59970),
        a = i(30832),
        n = i(32107),
        o = i(99758),
        c = i(6420);
      a.extend(o), a.extend(c);
      let l = {
          ...n,
          name: "en-web3-modal",
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "%d sec",
            m: "1 min",
            mm: "%d min",
            h: "1 hr",
            hh: "%d hrs",
            d: "1 d",
            dd: "%d d",
            M: "1 mo",
            MM: "%d mo",
            y: "1 yr",
            yy: "%d yr",
          },
        },
        h = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
      a.locale("en-web3-modal", l);
      var d = i(54166);
    },
    30572: (e, t, i) => {
      "use strict";
      i.d(t, {
        mN: () => _,
        AH: () => l,
        W3: () => I,
        Ec: () => N,
        iz: () => c,
      });
      let r = globalThis,
        s =
          r.ShadowRoot &&
          (void 0 === r.ShadyCSS || r.ShadyCSS.nativeShadow) &&
          "adoptedStyleSheets" in Document.prototype &&
          "replace" in CSSStyleSheet.prototype,
        a = Symbol(),
        n = new WeakMap();
      class o {
        constructor(e, t, i) {
          if (((this._$cssResult$ = !0), i !== a))
            throw Error(
              "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
            );
          (this.cssText = e), (this.t = t);
        }
        get styleSheet() {
          let e = this.o,
            t = this.t;
          if (s && void 0 === e) {
            let i = void 0 !== t && 1 === t.length;
            i && (e = n.get(t)),
              void 0 === e &&
                ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText),
                i && n.set(t, e));
          }
          return e;
        }
        toString() {
          return this.cssText;
        }
      }
      let c = (e) => new o("string" == typeof e ? e : e + "", void 0, a),
        l = (e, ...t) =>
          new o(
            1 === e.length
              ? e[0]
              : t.reduce(
                  (t, i, r) =>
                    t +
                    ((e) => {
                      if (!0 === e._$cssResult$) return e.cssText;
                      if ("number" == typeof e) return e;
                      throw Error(
                        "Value passed to 'css' function must be a 'css' function result: " +
                          e +
                          ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                      );
                    })(i) +
                    e[r + 1],
                  e[0]
                ),
            e,
            a
          ),
        h = (e, t) => {
          if (s)
            e.adoptedStyleSheets = t.map((e) =>
              e instanceof CSSStyleSheet ? e : e.styleSheet
            );
          else
            for (let i of t) {
              let t = document.createElement("style"),
                s = r.litNonce;
              void 0 !== s && t.setAttribute("nonce", s),
                (t.textContent = i.cssText),
                e.appendChild(t);
            }
        },
        d = s
          ? (e) => e
          : (e) =>
              e instanceof CSSStyleSheet
                ? ((e) => {
                    let t = "";
                    for (let i of e.cssRules) t += i.cssText;
                    return c(t);
                  })(e)
                : e,
        {
          is: u,
          defineProperty: p,
          getOwnPropertyDescriptor: g,
          getOwnPropertyNames: f,
          getOwnPropertySymbols: m,
          getPrototypeOf: w,
        } = Object,
        y = globalThis,
        b = y.trustedTypes,
        v = b ? b.emptyScript : "",
        E = y.reactiveElementPolyfillSupport,
        C = (e, t) => e,
        I = {
          toAttribute(e, t) {
            switch (t) {
              case Boolean:
                e = e ? v : null;
                break;
              case Object:
              case Array:
                e = null == e ? e : JSON.stringify(e);
            }
            return e;
          },
          fromAttribute(e, t) {
            let i = e;
            switch (t) {
              case Boolean:
                i = null !== e;
                break;
              case Number:
                i = null === e ? null : Number(e);
                break;
              case Object:
              case Array:
                try {
                  i = JSON.parse(e);
                } catch (e) {
                  i = null;
                }
            }
            return i;
          },
        },
        N = (e, t) => !u(e, t),
        A = {
          attribute: !0,
          type: String,
          converter: I,
          reflect: !1,
          useDefault: !1,
          hasChanged: N,
        };
      (Symbol.metadata ??= Symbol("metadata")),
        (y.litPropertyMetadata ??= new WeakMap());
      class _ extends HTMLElement {
        static addInitializer(e) {
          this._$Ei(), (this.l ??= []).push(e);
        }
        static get observedAttributes() {
          return this.finalize(), this._$Eh && [...this._$Eh.keys()];
        }
        static createProperty(e, t = A) {
          if (
            (t.state && (t.attribute = !1),
            this._$Ei(),
            this.prototype.hasOwnProperty(e) &&
              ((t = Object.create(t)).wrapped = !0),
            this.elementProperties.set(e, t),
            !t.noAccessor)
          ) {
            let i = Symbol(),
              r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && p(this.prototype, e, r);
          }
        }
        static getPropertyDescriptor(e, t, i) {
          let { get: r, set: s } = g(this.prototype, e) ?? {
            get() {
              return this[t];
            },
            set(e) {
              this[t] = e;
            },
          };
          return {
            get: r,
            set(t) {
              let a = r?.call(this);
              s?.call(this, t), this.requestUpdate(e, a, i);
            },
            configurable: !0,
            enumerable: !0,
          };
        }
        static getPropertyOptions(e) {
          return this.elementProperties.get(e) ?? A;
        }
        static _$Ei() {
          if (this.hasOwnProperty(C("elementProperties"))) return;
          let e = w(this);
          e.finalize(),
            void 0 !== e.l && (this.l = [...e.l]),
            (this.elementProperties = new Map(e.elementProperties));
        }
        static finalize() {
          if (this.hasOwnProperty(C("finalized"))) return;
          if (
            ((this.finalized = !0),
            this._$Ei(),
            this.hasOwnProperty(C("properties")))
          ) {
            let e = this.properties;
            for (let t of [...f(e), ...m(e)]) this.createProperty(t, e[t]);
          }
          let e = this[Symbol.metadata];
          if (null !== e) {
            let t = litPropertyMetadata.get(e);
            if (void 0 !== t)
              for (let [e, i] of t) this.elementProperties.set(e, i);
          }
          for (let [e, t] of ((this._$Eh = new Map()),
          this.elementProperties)) {
            let i = this._$Eu(e, t);
            void 0 !== i && this._$Eh.set(i, e);
          }
          this.elementStyles = this.finalizeStyles(this.styles);
        }
        static finalizeStyles(e) {
          let t = [];
          if (Array.isArray(e))
            for (let i of new Set(e.flat(1 / 0).reverse())) t.unshift(d(i));
          else void 0 !== e && t.push(d(e));
          return t;
        }
        static _$Eu(e, t) {
          let i = t.attribute;
          return !1 === i
            ? void 0
            : "string" == typeof i
            ? i
            : "string" == typeof e
            ? e.toLowerCase()
            : void 0;
        }
        constructor() {
          super(),
            (this._$Ep = void 0),
            (this.isUpdatePending = !1),
            (this.hasUpdated = !1),
            (this._$Em = null),
            this._$Ev();
        }
        _$Ev() {
          (this._$ES = new Promise((e) => (this.enableUpdating = e))),
            (this._$AL = new Map()),
            this._$E_(),
            this.requestUpdate(),
            this.constructor.l?.forEach((e) => e(this));
        }
        addController(e) {
          (this._$EO ??= new Set()).add(e),
            void 0 !== this.renderRoot &&
              this.isConnected &&
              e.hostConnected?.();
        }
        removeController(e) {
          this._$EO?.delete(e);
        }
        _$E_() {
          let e = new Map();
          for (let t of this.constructor.elementProperties.keys())
            this.hasOwnProperty(t) && (e.set(t, this[t]), delete this[t]);
          e.size > 0 && (this._$Ep = e);
        }
        createRenderRoot() {
          let e =
            this.shadowRoot ??
            this.attachShadow(this.constructor.shadowRootOptions);
          return h(e, this.constructor.elementStyles), e;
        }
        connectedCallback() {
          (this.renderRoot ??= this.createRenderRoot()),
            this.enableUpdating(!0),
            this._$EO?.forEach((e) => e.hostConnected?.());
        }
        enableUpdating(e) {}
        disconnectedCallback() {
          this._$EO?.forEach((e) => e.hostDisconnected?.());
        }
        attributeChangedCallback(e, t, i) {
          this._$AK(e, i);
        }
        _$ET(e, t) {
          let i = this.constructor.elementProperties.get(e),
            r = this.constructor._$Eu(e, i);
          if (void 0 !== r && !0 === i.reflect) {
            let s = (
              void 0 !== i.converter?.toAttribute ? i.converter : I
            ).toAttribute(t, i.type);
            (this._$Em = e),
              null == s ? this.removeAttribute(r) : this.setAttribute(r, s),
              (this._$Em = null);
          }
        }
        _$AK(e, t) {
          let i = this.constructor,
            r = i._$Eh.get(e);
          if (void 0 !== r && this._$Em !== r) {
            let e = i.getPropertyOptions(r),
              s =
                "function" == typeof e.converter
                  ? { fromAttribute: e.converter }
                  : void 0 !== e.converter?.fromAttribute
                  ? e.converter
                  : I;
            (this._$Em = r),
              (this[r] =
                s.fromAttribute(t, e.type) ?? this._$Ej?.get(r) ?? null),
              (this._$Em = null);
          }
        }
        requestUpdate(e, t, i) {
          if (void 0 !== e) {
            let r = this.constructor,
              s = this[e];
            if (
              !(
                ((i ??= r.getPropertyOptions(e)).hasChanged ?? N)(s, t) ||
                (i.useDefault &&
                  i.reflect &&
                  s === this._$Ej?.get(e) &&
                  !this.hasAttribute(r._$Eu(e, i)))
              )
            )
              return;
            this.C(e, t, i);
          }
          !1 === this.isUpdatePending && (this._$ES = this._$EP());
        }
        C(e, t, { useDefault: i, reflect: r, wrapped: s }, a) {
          (i &&
            !(this._$Ej ??= new Map()).has(e) &&
            (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== s || void 0 !== a)) ||
            (this._$AL.has(e) ||
              (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)),
            !0 === r && this._$Em !== e && (this._$Eq ??= new Set()).add(e));
        }
        async _$EP() {
          this.isUpdatePending = !0;
          try {
            await this._$ES;
          } catch (e) {
            Promise.reject(e);
          }
          let e = this.scheduleUpdate();
          return null != e && (await e), !this.isUpdatePending;
        }
        scheduleUpdate() {
          return this.performUpdate();
        }
        performUpdate() {
          if (!this.isUpdatePending) return;
          if (!this.hasUpdated) {
            if (((this.renderRoot ??= this.createRenderRoot()), this._$Ep)) {
              for (let [e, t] of this._$Ep) this[e] = t;
              this._$Ep = void 0;
            }
            let e = this.constructor.elementProperties;
            if (e.size > 0)
              for (let [t, i] of e) {
                let { wrapped: e } = i,
                  r = this[t];
                !0 !== e ||
                  this._$AL.has(t) ||
                  void 0 === r ||
                  this.C(t, void 0, i, r);
              }
          }
          let e = !1,
            t = this._$AL;
          try {
            (e = this.shouldUpdate(t))
              ? (this.willUpdate(t),
                this._$EO?.forEach((e) => e.hostUpdate?.()),
                this.update(t))
              : this._$EM();
          } catch (t) {
            throw ((e = !1), this._$EM(), t);
          }
          e && this._$AE(t);
        }
        willUpdate(e) {}
        _$AE(e) {
          this._$EO?.forEach((e) => e.hostUpdated?.()),
            this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
            this.updated(e);
        }
        _$EM() {
          (this._$AL = new Map()), (this.isUpdatePending = !1);
        }
        get updateComplete() {
          return this.getUpdateComplete();
        }
        getUpdateComplete() {
          return this._$ES;
        }
        shouldUpdate(e) {
          return !0;
        }
        update(e) {
          (this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e]))),
            this._$EM();
        }
        updated(e) {}
        firstUpdated(e) {}
      }
      (_.elementStyles = []),
        (_.shadowRootOptions = { mode: "open" }),
        (_[C("elementProperties")] = new Map()),
        (_[C("finalized")] = new Map()),
        E?.({ ReactiveElement: _ }),
        (y.reactiveElementVersions ??= []).push("2.1.0");
    },
    30832: function (e) {
      e.exports = (function () {
        "use strict";
        var e = "millisecond",
          t = "second",
          i = "minute",
          r = "hour",
          s = "week",
          a = "month",
          n = "quarter",
          o = "year",
          c = "date",
          l = "Invalid Date",
          h =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          d =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          u = function (e, t, i) {
            var r = String(e);
            return !r || r.length >= t
              ? e
              : "" + Array(t + 1 - r.length).join(i) + e;
          },
          p = "en",
          g = {};
        g[p] = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          ordinal: function (e) {
            var t = ["th", "st", "nd", "rd"],
              i = e % 100;
            return "[" + e + (t[(i - 20) % 10] || t[i] || t[0]) + "]";
          },
        };
        var f = "$isDayjsObject",
          m = function (e) {
            return e instanceof v || !(!e || !e[f]);
          },
          w = function e(t, i, r) {
            var s;
            if (!t) return p;
            if ("string" == typeof t) {
              var a = t.toLowerCase();
              g[a] && (s = a), i && ((g[a] = i), (s = a));
              var n = t.split("-");
              if (!s && n.length > 1) return e(n[0]);
            } else {
              var o = t.name;
              (g[o] = t), (s = o);
            }
            return !r && s && (p = s), s || (!r && p);
          },
          y = function (e, t) {
            if (m(e)) return e.clone();
            var i = "object" == typeof t ? t : {};
            return (i.date = e), (i.args = arguments), new v(i);
          },
          b = {
            s: u,
            z: function (e) {
              var t = -e.utcOffset(),
                i = Math.abs(t);
              return (
                (t <= 0 ? "+" : "-") +
                u(Math.floor(i / 60), 2, "0") +
                ":" +
                u(i % 60, 2, "0")
              );
            },
            m: function e(t, i) {
              if (t.date() < i.date()) return -e(i, t);
              var r = 12 * (i.year() - t.year()) + (i.month() - t.month()),
                s = t.clone().add(r, a),
                n = i - s < 0,
                o = t.clone().add(r + (n ? -1 : 1), a);
              return +(-(r + (i - s) / (n ? s - o : o - s)) || 0);
            },
            a: function (e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
            },
            p: function (l) {
              return (
                {
                  M: a,
                  y: o,
                  w: s,
                  d: "day",
                  D: c,
                  h: r,
                  m: i,
                  s: t,
                  ms: e,
                  Q: n,
                }[l] ||
                String(l || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (e) {
              return void 0 === e;
            },
          };
        (b.l = w),
          (b.i = m),
          (b.w = function (e, t) {
            return y(e, {
              locale: t.$L,
              utc: t.$u,
              x: t.$x,
              $offset: t.$offset,
            });
          });
        var v = (function () {
            function u(e) {
              (this.$L = w(e.locale, null, !0)),
                this.parse(e),
                (this.$x = this.$x || e.x || {}),
                (this[f] = !0);
            }
            var p = u.prototype;
            return (
              (p.parse = function (e) {
                (this.$d = (function (e) {
                  var t = e.date,
                    i = e.utc;
                  if (null === t) return new Date(NaN);
                  if (b.u(t)) return new Date();
                  if (t instanceof Date) return new Date(t);
                  if ("string" == typeof t && !/Z$/i.test(t)) {
                    var r = t.match(h);
                    if (r) {
                      var s = r[2] - 1 || 0,
                        a = (r[7] || "0").substring(0, 3);
                      return i
                        ? new Date(
                            Date.UTC(
                              r[1],
                              s,
                              r[3] || 1,
                              r[4] || 0,
                              r[5] || 0,
                              r[6] || 0,
                              a
                            )
                          )
                        : new Date(
                            r[1],
                            s,
                            r[3] || 1,
                            r[4] || 0,
                            r[5] || 0,
                            r[6] || 0,
                            a
                          );
                    }
                  }
                  return new Date(t);
                })(e)),
                  this.init();
              }),
              (p.init = function () {
                var e = this.$d;
                (this.$y = e.getFullYear()),
                  (this.$M = e.getMonth()),
                  (this.$D = e.getDate()),
                  (this.$W = e.getDay()),
                  (this.$H = e.getHours()),
                  (this.$m = e.getMinutes()),
                  (this.$s = e.getSeconds()),
                  (this.$ms = e.getMilliseconds());
              }),
              (p.$utils = function () {
                return b;
              }),
              (p.isValid = function () {
                return this.$d.toString() !== l;
              }),
              (p.isSame = function (e, t) {
                var i = y(e);
                return this.startOf(t) <= i && i <= this.endOf(t);
              }),
              (p.isAfter = function (e, t) {
                return y(e) < this.startOf(t);
              }),
              (p.isBefore = function (e, t) {
                return this.endOf(t) < y(e);
              }),
              (p.$g = function (e, t, i) {
                return b.u(e) ? this[t] : this.set(i, e);
              }),
              (p.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (p.valueOf = function () {
                return this.$d.getTime();
              }),
              (p.startOf = function (e, n) {
                var l = this,
                  h = !!b.u(n) || n,
                  d = b.p(e),
                  u = function (e, t) {
                    var i = b.w(
                      l.$u ? Date.UTC(l.$y, t, e) : new Date(l.$y, t, e),
                      l
                    );
                    return h ? i : i.endOf("day");
                  },
                  p = function (e, t) {
                    return b.w(
                      l
                        .toDate()
                        [e].apply(
                          l.toDate("s"),
                          (h ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)
                        ),
                      l
                    );
                  },
                  g = this.$W,
                  f = this.$M,
                  m = this.$D,
                  w = "set" + (this.$u ? "UTC" : "");
                switch (d) {
                  case o:
                    return h ? u(1, 0) : u(31, 11);
                  case a:
                    return h ? u(1, f) : u(0, f + 1);
                  case s:
                    var y = this.$locale().weekStart || 0,
                      v = (g < y ? g + 7 : g) - y;
                    return u(h ? m - v : m + (6 - v), f);
                  case "day":
                  case c:
                    return p(w + "Hours", 0);
                  case r:
                    return p(w + "Minutes", 1);
                  case i:
                    return p(w + "Seconds", 2);
                  case t:
                    return p(w + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (p.endOf = function (e) {
                return this.startOf(e, !1);
              }),
              (p.$set = function (s, n) {
                var l,
                  h = b.p(s),
                  d = "set" + (this.$u ? "UTC" : ""),
                  u = (((l = {}).day = d + "Date"),
                  (l[c] = d + "Date"),
                  (l[a] = d + "Month"),
                  (l[o] = d + "FullYear"),
                  (l[r] = d + "Hours"),
                  (l[i] = d + "Minutes"),
                  (l[t] = d + "Seconds"),
                  (l[e] = d + "Milliseconds"),
                  l)[h],
                  p = "day" === h ? this.$D + (n - this.$W) : n;
                if (h === a || h === o) {
                  var g = this.clone().set(c, 1);
                  g.$d[u](p),
                    g.init(),
                    (this.$d = g.set(c, Math.min(this.$D, g.daysInMonth())).$d);
                } else u && this.$d[u](p);
                return this.init(), this;
              }),
              (p.set = function (e, t) {
                return this.clone().$set(e, t);
              }),
              (p.get = function (e) {
                return this[b.p(e)]();
              }),
              (p.add = function (e, n) {
                var c,
                  l = this;
                e = Number(e);
                var h = b.p(n),
                  d = function (t) {
                    var i = y(l);
                    return b.w(i.date(i.date() + Math.round(t * e)), l);
                  };
                if (h === a) return this.set(a, this.$M + e);
                if (h === o) return this.set(o, this.$y + e);
                if ("day" === h) return d(1);
                if (h === s) return d(7);
                var u =
                    (((c = {})[i] = 6e4), (c[r] = 36e5), (c[t] = 1e3), c)[h] ||
                    1,
                  p = this.$d.getTime() + e * u;
                return b.w(p, this);
              }),
              (p.subtract = function (e, t) {
                return this.add(-1 * e, t);
              }),
              (p.format = function (e) {
                var t = this,
                  i = this.$locale();
                if (!this.isValid()) return i.invalidDate || l;
                var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                  s = b.z(this),
                  a = this.$H,
                  n = this.$m,
                  o = this.$M,
                  c = i.weekdays,
                  h = i.months,
                  u = i.meridiem,
                  p = function (e, i, s, a) {
                    return (e && (e[i] || e(t, r))) || s[i].slice(0, a);
                  },
                  g = function (e) {
                    return b.s(a % 12 || 12, e, "0");
                  },
                  f =
                    u ||
                    function (e, t, i) {
                      var r = e < 12 ? "AM" : "PM";
                      return i ? r.toLowerCase() : r;
                    };
                return r.replace(d, function (e, r) {
                  return (
                    r ||
                    (function (e) {
                      switch (e) {
                        case "YY":
                          return String(t.$y).slice(-2);
                        case "YYYY":
                          return b.s(t.$y, 4, "0");
                        case "M":
                          return o + 1;
                        case "MM":
                          return b.s(o + 1, 2, "0");
                        case "MMM":
                          return p(i.monthsShort, o, h, 3);
                        case "MMMM":
                          return p(h, o);
                        case "D":
                          return t.$D;
                        case "DD":
                          return b.s(t.$D, 2, "0");
                        case "d":
                          return String(t.$W);
                        case "dd":
                          return p(i.weekdaysMin, t.$W, c, 2);
                        case "ddd":
                          return p(i.weekdaysShort, t.$W, c, 3);
                        case "dddd":
                          return c[t.$W];
                        case "H":
                          return String(a);
                        case "HH":
                          return b.s(a, 2, "0");
                        case "h":
                          return g(1);
                        case "hh":
                          return g(2);
                        case "a":
                          return f(a, n, !0);
                        case "A":
                          return f(a, n, !1);
                        case "m":
                          return String(n);
                        case "mm":
                          return b.s(n, 2, "0");
                        case "s":
                          return String(t.$s);
                        case "ss":
                          return b.s(t.$s, 2, "0");
                        case "SSS":
                          return b.s(t.$ms, 3, "0");
                        case "Z":
                          return s;
                      }
                      return null;
                    })(e) ||
                    s.replace(":", "")
                  );
                });
              }),
              (p.utcOffset = function () {
                return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
              }),
              (p.diff = function (e, c, l) {
                var h,
                  d = this,
                  u = b.p(c),
                  p = y(e),
                  g = (p.utcOffset() - this.utcOffset()) * 6e4,
                  f = this - p,
                  m = function () {
                    return b.m(d, p);
                  };
                switch (u) {
                  case o:
                    h = m() / 12;
                    break;
                  case a:
                    h = m();
                    break;
                  case n:
                    h = m() / 3;
                    break;
                  case s:
                    h = (f - g) / 6048e5;
                    break;
                  case "day":
                    h = (f - g) / 864e5;
                    break;
                  case r:
                    h = f / 36e5;
                    break;
                  case i:
                    h = f / 6e4;
                    break;
                  case t:
                    h = f / 1e3;
                    break;
                  default:
                    h = f;
                }
                return l ? h : b.a(h);
              }),
              (p.daysInMonth = function () {
                return this.endOf(a).$D;
              }),
              (p.$locale = function () {
                return g[this.$L];
              }),
              (p.locale = function (e, t) {
                if (!e) return this.$L;
                var i = this.clone(),
                  r = w(e, t, !0);
                return r && (i.$L = r), i;
              }),
              (p.clone = function () {
                return b.w(this.$d, this);
              }),
              (p.toDate = function () {
                return new Date(this.valueOf());
              }),
              (p.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (p.toISOString = function () {
                return this.$d.toISOString();
              }),
              (p.toString = function () {
                return this.$d.toUTCString();
              }),
              u
            );
          })(),
          E = v.prototype;
        return (
          (y.prototype = E),
          [
            ["$ms", e],
            ["$s", t],
            ["$m", i],
            ["$H", r],
            ["$W", "day"],
            ["$M", a],
            ["$y", o],
            ["$D", c],
          ].forEach(function (e) {
            E[e[1]] = function (t) {
              return this.$g(t, e[0], e[1]);
            };
          }),
          (y.extend = function (e, t) {
            return e.$i || (e(t, v, y), (e.$i = !0)), y;
          }),
          (y.locale = w),
          (y.isDayjs = m),
          (y.unix = function (e) {
            return y(1e3 * e);
          }),
          (y.en = g[p]),
          (y.Ls = g),
          (y.p = {}),
          y
        );
      })();
    },
    32107: function (e) {
      e.exports = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        ordinal: function (e) {
          var t = ["th", "st", "nd", "rd"],
            i = e % 100;
          return "[" + e + (t[(i - 20) % 10] || t[i] || t[0]) + "]";
        },
      };
    },
    32836: (e, t, i) => {
      "use strict";
      i.d(t, { E: () => f });
      var r = i(43708),
        s = i(60500),
        a = i(55458),
        n = i(35558),
        o = i(43359),
        c = i(11076),
        l = i(79277),
        h = i(96641);
      let d = n.w.getAnalyticsUrl(),
        u = new o.Z({ baseUrl: d, clientId: null }),
        p = ["MODAL_CREATED"],
        g = (0, r.BX)({
          timestamp: Date.now(),
          reportedErrors: {},
          data: { type: "track", event: "MODAL_CREATED" },
        }),
        f = {
          state: g,
          subscribe: (e) => (0, r.B1)(g, () => e(g)),
          getSdkProperties() {
            let { projectId: e, sdkType: t, sdkVersion: i } = h.H.state;
            return { projectId: e, st: t, sv: i || "html-wagmi-4.2.2" };
          },
          async _sendAnalyticsEvent(e) {
            try {
              let t = c.U.state.address;
              if (p.includes(e.data.event) || "undefined" == typeof window)
                return;
              await u.post({
                path: "/e",
                params: f.getSdkProperties(),
                body: {
                  eventId: n.w.getUUID(),
                  url: window.location.href,
                  domain: window.location.hostname,
                  timestamp: e.timestamp,
                  props: { ...e.data, address: t },
                },
              }),
                (g.reportedErrors.FORBIDDEN = !1);
            } catch (e) {
              e instanceof Error &&
                e.cause instanceof Response &&
                e.cause.status === s.o.HTTP_STATUS_CODES.FORBIDDEN &&
                !g.reportedErrors.FORBIDDEN &&
                (l.h.open(
                  {
                    shortMessage: "Invalid App Configuration",
                    longMessage: `Origin ${
                      (0, a.IP)() ? window.origin : "uknown"
                    } not found on Allowlist - update configuration on cloud.reown.com`,
                  },
                  "error"
                ),
                (g.reportedErrors.FORBIDDEN = !0));
            }
          },
          sendEvent(e) {
            (g.timestamp = Date.now()),
              (g.data = e),
              h.H.state.features?.analytics && f._sendAnalyticsEvent(g);
          },
        };
    },
    34735: (e, t, i) => {
      "use strict";
      i.d(t, { $: () => c });
      var r = i(43708),
        s = i(65819),
        a = i(74623);
      let n = {
          eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
          solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
          polkadot: "",
          bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
          cosmos: "",
        },
        o = (0, r.BX)({ networkImagePromises: {} }),
        c = {
          async fetchWalletImage(e) {
            if (e)
              return await s.N._fetchWalletImage(e), this.getWalletImageById(e);
          },
          async fetchNetworkImage(e) {
            if (!e) return;
            let t = this.getNetworkImageById(e);
            return (
              t ||
              (o.networkImagePromises[e] ||
                (o.networkImagePromises[e] = s.N._fetchNetworkImage(e)),
              await o.networkImagePromises[e],
              this.getNetworkImageById(e))
            );
          },
          getWalletImageById(e) {
            if (e) return a.j.state.walletImages[e];
          },
          getWalletImage: (e) =>
            e?.image_url
              ? e?.image_url
              : e?.image_id
              ? a.j.state.walletImages[e.image_id]
              : void 0,
          getNetworkImage: (e) =>
            e?.assets?.imageUrl
              ? e?.assets?.imageUrl
              : e?.assets?.imageId
              ? a.j.state.networkImages[e.assets.imageId]
              : void 0,
          getNetworkImageById(e) {
            if (e) return a.j.state.networkImages[e];
          },
          getConnectorImage: (e) =>
            e?.imageUrl
              ? e.imageUrl
              : e?.imageId
              ? a.j.state.connectorImages[e.imageId]
              : void 0,
          getChainImage: (e) => a.j.state.networkImages[n[e]],
        };
    },
    35438: (e, t, i) => {
      "use strict";
      i.d(t, { createAppKit: () => dO });
      var r = i(54252),
        s = i(81192),
        a = i(35558),
        n = i(96641),
        o = i(40662),
        c = i.n(o),
        l = i(97061),
        h = i(32350),
        d = i(44134).Buffer;
      function u(e, ...t) {
        try {
          var i;
          return (i = e(...t)) && "function" == typeof i.then
            ? i
            : Promise.resolve(i);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      function p(e) {
        if (
          (function (e) {
            let t = typeof e;
            return null === e || ("object" !== t && "function" !== t);
          })(e)
        )
          return String(e);
        if (
          (function (e) {
            let t = Object.getPrototypeOf(e);
            return !t || t.isPrototypeOf(Object);
          })(e) ||
          Array.isArray(e)
        )
          return JSON.stringify(e);
        if ("function" == typeof e.toJSON) return p(e.toJSON());
        throw Error("[unstorage] Cannot stringify value!");
      }
      let g = "base64:";
      function f(e) {
        return (
          (e &&
            e
              .split("?")[0]
              ?.replace(/[/\\]/g, ":")
              .replace(/:+/g, ":")
              .replace(/^:|:$/g, "")) ||
          ""
        );
      }
      function m(e) {
        return (e = f(e)) ? e + ":" : "";
      }
      let w = () => {
        let e = new Map();
        return {
          name: "memory",
          getInstance: () => e,
          hasItem: (t) => e.has(t),
          getItem: (t) => e.get(t) ?? null,
          getItemRaw: (t) => e.get(t) ?? null,
          setItem(t, i) {
            e.set(t, i);
          },
          setItemRaw(t, i) {
            e.set(t, i);
          },
          removeItem(t) {
            e.delete(t);
          },
          getKeys: () => [...e.keys()],
          clear() {
            e.clear();
          },
          dispose() {
            e.clear();
          },
        };
      };
      function y(e, t, i) {
        return e.watch ? e.watch((e, r) => t(e, i + r)) : () => {};
      }
      async function b(e) {
        "function" == typeof e.dispose && (await u(e.dispose));
      }
      var v = i(2671),
        E = i(71075),
        C = (e = {}) => {
          let t,
            i = e.base && e.base.length > 0 ? `${e.base}:` : "",
            r = (e) => i + e;
          return (
            e.dbName && e.storeName && (t = (0, v.y$)(e.dbName, e.storeName)),
            {
              name: "idb-keyval",
              options: e,
              hasItem: async (e) => !(typeof (await (0, v.Jt)(r(e), t)) > "u"),
              getItem: async (e) => (await (0, v.Jt)(r(e), t)) ?? null,
              setItem: (e, i) => (0, v.hZ)(r(e), i, t),
              removeItem: (e) => (0, v.yH)(r(e), t),
              getKeys: () => (0, v.HP)(t),
              clear: () => (0, v.IU)(t),
            }
          );
        };
      class I {
        constructor() {
          this.indexedDb = (function (e = {}) {
            let t = {
                mounts: { "": e.driver || w() },
                mountpoints: [""],
                watching: !1,
                watchListeners: [],
                unwatch: {},
              },
              i = (e) => {
                for (let i of t.mountpoints)
                  if (e.startsWith(i))
                    return {
                      base: i,
                      relativeKey: e.slice(i.length),
                      driver: t.mounts[i],
                    };
                return { base: "", relativeKey: e, driver: t.mounts[""] };
              },
              r = (e, i) =>
                t.mountpoints
                  .filter((t) => t.startsWith(e) || (i && e.startsWith(t)))
                  .map((i) => ({
                    relativeBase:
                      e.length > i.length ? e.slice(i.length) : void 0,
                    mountpoint: i,
                    driver: t.mounts[i],
                  })),
              s = (e, i) => {
                if (t.watching)
                  for (let r of ((i = f(i)), t.watchListeners)) r(e, i);
              },
              a = async () => {
                if (!t.watching)
                  for (let e in ((t.watching = !0), t.mounts))
                    t.unwatch[e] = await y(t.mounts[e], s, e);
              },
              n = async () => {
                if (t.watching) {
                  for (let e in t.unwatch) await t.unwatch[e]();
                  (t.unwatch = {}), (t.watching = !1);
                }
              },
              o = (e, t, r) => {
                let s = new Map(),
                  a = (e) => {
                    let t = s.get(e.base);
                    return (
                      t ||
                        ((t = { driver: e.driver, base: e.base, items: [] }),
                        s.set(e.base, t)),
                      t
                    );
                  };
                for (let r of e) {
                  let e = "string" == typeof r,
                    s = f(e ? r : r.key),
                    n = e ? void 0 : r.value,
                    o = e || !r.options ? t : { ...t, ...r.options },
                    c = i(s);
                  a(c).items.push({
                    key: s,
                    value: n,
                    relativeKey: c.relativeKey,
                    options: o,
                  });
                }
                return Promise.all([...s.values()].map((e) => r(e))).then((e) =>
                  e.flat()
                );
              },
              c = {
                hasItem(e, t = {}) {
                  let { relativeKey: r, driver: s } = i((e = f(e)));
                  return u(s.hasItem, r, t);
                },
                getItem(e, t = {}) {
                  let { relativeKey: r, driver: s } = i((e = f(e)));
                  return u(s.getItem, r, t).then((e) => (0, h.Ay)(e));
                },
                getItems: (e, t = {}) =>
                  o(e, t, (e) =>
                    e.driver.getItems
                      ? u(
                          e.driver.getItems,
                          e.items.map((e) => ({
                            key: e.relativeKey,
                            options: e.options,
                          })),
                          t
                        ).then((t) =>
                          t.map((t) => ({
                            key: (function (...e) {
                              return f(e.join(":"));
                            })(e.base, t.key),
                            value: (0, h.Ay)(t.value),
                          }))
                        )
                      : Promise.all(
                          e.items.map((t) =>
                            u(e.driver.getItem, t.relativeKey, t.options).then(
                              (e) => ({ key: t.key, value: (0, h.Ay)(e) })
                            )
                          )
                        )
                  ),
                getItemRaw(e, t = {}) {
                  let { relativeKey: r, driver: s } = i((e = f(e)));
                  return s.getItemRaw
                    ? u(s.getItemRaw, r, t)
                    : u(s.getItem, r, t).then((e) => {
                        var t;
                        return "string" == typeof e && e.startsWith(g)
                          ? ((t = e.slice(g.length)),
                            globalThis.Buffer
                              ? d.from(t, "base64")
                              : Uint8Array.from(globalThis.atob(t), (e) =>
                                  e.codePointAt(0)
                                ))
                          : e;
                      });
                },
                async setItem(e, t, r = {}) {
                  if (void 0 === t) return c.removeItem(e);
                  let { relativeKey: a, driver: n } = i((e = f(e)));
                  n.setItem &&
                    (await u(n.setItem, a, p(t), r), n.watch || s("update", e));
                },
                async setItems(e, t) {
                  await o(e, t, async (e) => {
                    if (e.driver.setItems)
                      return u(
                        e.driver.setItems,
                        e.items.map((e) => ({
                          key: e.relativeKey,
                          value: p(e.value),
                          options: e.options,
                        })),
                        t
                      );
                    e.driver.setItem &&
                      (await Promise.all(
                        e.items.map((t) =>
                          u(
                            e.driver.setItem,
                            t.relativeKey,
                            p(t.value),
                            t.options
                          )
                        )
                      ));
                  });
                },
                async setItemRaw(e, t, r = {}) {
                  if (void 0 === t) return c.removeItem(e, r);
                  let { relativeKey: a, driver: n } = i((e = f(e)));
                  if (n.setItemRaw) await u(n.setItemRaw, a, t, r);
                  else {
                    var o;
                    if (!n.setItem) return;
                    await u(
                      n.setItem,
                      a,
                      "string" == typeof t
                        ? t
                        : g +
                            ((o = t),
                            globalThis.Buffer
                              ? d.from(o).toString("base64")
                              : globalThis.btoa(String.fromCodePoint(...o))),
                      r
                    );
                  }
                  n.watch || s("update", e);
                },
                async removeItem(e, t = {}) {
                  "boolean" == typeof t && (t = { removeMeta: t });
                  let { relativeKey: r, driver: a } = i((e = f(e)));
                  a.removeItem &&
                    (await u(a.removeItem, r, t),
                    (t.removeMeta || t.removeMata) &&
                      (await u(a.removeItem, r + "$", t)),
                    a.watch || s("remove", e));
                },
                async getMeta(e, t = {}) {
                  "boolean" == typeof t && (t = { nativeOnly: t });
                  let { relativeKey: r, driver: s } = i((e = f(e))),
                    a = Object.create(null);
                  if (
                    (s.getMeta && Object.assign(a, await u(s.getMeta, r, t)),
                    !t.nativeOnly)
                  ) {
                    let e = await u(s.getItem, r + "$", t).then((e) =>
                      (0, h.Ay)(e)
                    );
                    e &&
                      "object" == typeof e &&
                      ("string" == typeof e.atime &&
                        (e.atime = new Date(e.atime)),
                      "string" == typeof e.mtime &&
                        (e.mtime = new Date(e.mtime)),
                      Object.assign(a, e));
                  }
                  return a;
                },
                setMeta(e, t, i = {}) {
                  return this.setItem(e + "$", t, i);
                },
                removeMeta(e, t = {}) {
                  return this.removeItem(e + "$", t);
                },
                async getKeys(e, t = {}) {
                  let i = r((e = m(e)), !0),
                    s = [],
                    a = [],
                    n = !0;
                  for (let e of i) {
                    for (let i of (e.driver.flags?.maxDepth || (n = !1),
                    await u(e.driver.getKeys, e.relativeBase, t))) {
                      let t = e.mountpoint + f(i);
                      s.some((e) => t.startsWith(e)) || a.push(t);
                    }
                    s = [
                      e.mountpoint,
                      ...s.filter((t) => !t.startsWith(e.mountpoint)),
                    ];
                  }
                  let o = void 0 !== t.maxDepth && !n;
                  return a.filter((i) => {
                    var r;
                    return (
                      (!o ||
                        (function (e, t) {
                          if (void 0 === t) return !0;
                          let i = 0,
                            r = e.indexOf(":");
                          for (; r > -1; ) i++, (r = e.indexOf(":", r + 1));
                          return i <= t;
                        })(i, t.maxDepth)) &&
                      ((r = e)
                        ? i.startsWith(r) && "$" !== i[i.length - 1]
                        : "$" !== i[i.length - 1])
                    );
                  });
                },
                async clear(e, t = {}) {
                  (e = m(e)),
                    await Promise.all(
                      r(e, !1).map(async (e) =>
                        e.driver.clear
                          ? u(e.driver.clear, e.relativeBase, t)
                          : e.driver.removeItem
                          ? Promise.all(
                              (
                                await e.driver.getKeys(e.relativeBase || "", t)
                              ).map((i) => e.driver.removeItem(i, t))
                            )
                          : void 0
                      )
                    );
                },
                async dispose() {
                  await Promise.all(Object.values(t.mounts).map((e) => b(e)));
                },
                watch: async (e) => (
                  await a(),
                  t.watchListeners.push(e),
                  async () => {
                    (t.watchListeners = t.watchListeners.filter(
                      (t) => t !== e
                    )),
                      0 === t.watchListeners.length && (await n());
                  }
                ),
                async unwatch() {
                  (t.watchListeners = []), await n();
                },
                mount(e, i) {
                  if ((e = m(e)) && t.mounts[e])
                    throw Error(`already mounted at ${e}`);
                  return (
                    e &&
                      (t.mountpoints.push(e),
                      t.mountpoints.sort((e, t) => t.length - e.length)),
                    (t.mounts[e] = i),
                    t.watching &&
                      Promise.resolve(y(i, s, e))
                        .then((i) => {
                          t.unwatch[e] = i;
                        })
                        .catch(console.error),
                    c
                  );
                },
                async unmount(e, i = !0) {
                  (e = m(e)) &&
                    t.mounts[e] &&
                    (t.watching &&
                      e in t.unwatch &&
                      (t.unwatch[e]?.(), delete t.unwatch[e]),
                    i && (await b(t.mounts[e])),
                    (t.mountpoints = t.mountpoints.filter((t) => t !== e)),
                    delete t.mounts[e]);
                },
                getMount(e = "") {
                  let t = i((e = f(e) + ":"));
                  return { driver: t.driver, base: t.base };
                },
                getMounts: (e = "", t = {}) =>
                  r((e = f(e)), t.parents).map((e) => ({
                    driver: e.driver,
                    base: e.mountpoint,
                  })),
                keys: (e, t = {}) => c.getKeys(e, t),
                get: (e, t = {}) => c.getItem(e, t),
                set: (e, t, i = {}) => c.setItem(e, t, i),
                has: (e, t = {}) => c.hasItem(e, t),
                del: (e, t = {}) => c.removeItem(e, t),
                remove: (e, t = {}) => c.removeItem(e, t),
              };
            return c;
          })({
            driver: C({
              dbName: "WALLET_CONNECT_V2_INDEXED_DB",
              storeName: "keyvaluestorage",
            }),
          });
        }
        async getKeys() {
          return this.indexedDb.getKeys();
        }
        async getEntries() {
          return (
            await this.indexedDb.getItems(await this.indexedDb.getKeys())
          ).map((e) => [e.key, e.value]);
        }
        async getItem(e) {
          let t = await this.indexedDb.getItem(e);
          if (null !== t) return t;
        }
        async setItem(e, t) {
          await this.indexedDb.setItem(e, (0, E.h)(t));
        }
        async removeItem(e) {
          await this.indexedDb.removeItem(e);
        }
      }
      var N =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof i.g
            ? i.g
            : "u" > typeof self
            ? self
            : {},
        A = { exports: {} };
      function _(e) {
        var t;
        return [e[0], (0, E.j)(null != (t = e[1]) ? t : "")];
      }
      !(function () {
        function e() {}
        (e.prototype.getItem = function (e) {
          return this.hasOwnProperty(e) ? String(this[e]) : null;
        }),
          (e.prototype.setItem = function (e, t) {
            this[e] = String(t);
          }),
          (e.prototype.removeItem = function (e) {
            delete this[e];
          }),
          (e.prototype.clear = function () {
            let e = this;
            Object.keys(e).forEach(function (t) {
              (e[t] = void 0), delete e[t];
            });
          }),
          (e.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e];
          }),
          e.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          "u" > typeof N && N.localStorage
            ? (A.exports = N.localStorage)
            : "u" > typeof window && window.localStorage
            ? (A.exports = window.localStorage)
            : (A.exports = new e());
      })();
      class S {
        constructor() {
          this.localStorage = A.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(_);
        }
        async getItem(e) {
          let t = this.localStorage.getItem(e);
          if (null !== t) return (0, E.j)(t);
        }
        async setItem(e, t) {
          this.localStorage.setItem(e, (0, E.h)(t));
        }
        async removeItem(e) {
          this.localStorage.removeItem(e);
        }
      }
      let P = async (e, t, i) => {
          let r = "wc_storage_version",
            s = await t.getItem(r);
          if (s && s >= 1) return void i(t);
          let a = await e.getKeys();
          if (!a.length) return void i(t);
          let n = [];
          for (; a.length; ) {
            let i = a.shift();
            if (!i) continue;
            let r = i.toLowerCase();
            if (
              r.includes("wc@") ||
              r.includes("walletconnect") ||
              r.includes("wc_") ||
              r.includes("wallet_connect")
            ) {
              let r = await e.getItem(i);
              await t.setItem(i, r), n.push(i);
            }
          }
          await t.setItem(r, 1), i(t), O(e, n);
        },
        O = async (e, t) => {
          t.length &&
            t.forEach(async (t) => {
              await e.removeItem(t);
            });
        };
      class T {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (e) => {
              (this.storage = e), (this.initialized = !0);
            });
          let e = new S();
          this.storage = e;
          try {
            let t = new I();
            P(e, t, this.setInitialized);
          } catch {
            this.initialized = !0;
          }
        }
        async getKeys() {
          return await this.initialize(), this.storage.getKeys();
        }
        async getEntries() {
          return await this.initialize(), this.storage.getEntries();
        }
        async getItem(e) {
          return await this.initialize(), this.storage.getItem(e);
        }
        async setItem(e, t) {
          return await this.initialize(), this.storage.setItem(e, t);
        }
        async removeItem(e) {
          return await this.initialize(), this.storage.removeItem(e);
        }
        async initialize() {
          this.initialized ||
            (await new Promise((e) => {
              let t = setInterval(() => {
                this.initialized && (clearInterval(t), e());
              }, 20);
            }));
        }
      }
      var k = i(19655),
        x = i(76589),
        R = Object.defineProperty,
        U = (e, t, i) =>
          t in e
            ? R(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        D = (e, t, i) => U(e, "symbol" != typeof t ? t + "" : t, i);
      class $ extends x.H {
        constructor(e) {
          super(),
            (this.opts = e),
            D(this, "protocol", "wc"),
            D(this, "version", 2);
        }
      }
      var M = Object.defineProperty,
        L = (e, t, i) =>
          t in e
            ? M(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        j = (e, t, i) => L(e, "symbol" != typeof t ? t + "" : t, i);
      class W extends x.H {
        constructor(e, t) {
          super(),
            (this.core = e),
            (this.logger = t),
            j(this, "records", new Map());
        }
      }
      class B {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class q extends x.H {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class H extends x.H {
        constructor(e) {
          super();
        }
      }
      class F {
        constructor(e, t, i, r) {
          (this.core = e), (this.logger = t), (this.name = i);
        }
      }
      var z = Object.defineProperty;
      class V extends x.H {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class K extends x.H {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class G {
        constructor(e, t, i) {
          (this.core = e), (this.logger = t), (this.store = i);
        }
      }
      class J {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class X {
        constructor(e, t, i) {
          (this.core = e), (this.logger = t), (this.telemetryEnabled = i);
        }
      }
      var Y = Object.defineProperty,
        Z = (e, t, i) =>
          t in e
            ? Y(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        Q = (e, t, i) => Z(e, "symbol" != typeof t ? t + "" : t, i);
      c();
      class ee {
        constructor(e) {
          (this.opts = e), Q(this, "protocol", "wc"), Q(this, "version", 2);
        }
      }
      o.EventEmitter;
      class et {
        constructor(e) {
          this.client = e;
        }
      }
      var ei = i(89101),
        er = i(30565),
        es = i(42221),
        ea = i(621),
        en = i(28094);
      let eo = "2.23.2",
        ec = {
          getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: i }) =>
            t ? `${e ?? "https://viem.sh"}${t}${i ? `#${i}` : ""}` : void 0,
          version: `viem@${eo}`,
        };
      class el extends Error {
        constructor(e, t = {}) {
          let i =
              t.cause instanceof el
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            r = (t.cause instanceof el && t.cause.docsPath) || t.docsPath,
            s = ec.getDocsUrl?.({ ...t, docsPath: r });
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(s ? [`Docs: ${s}`] : []),
              ...(i ? [`Details: ${i}`] : []),
              ...(ec.version ? [`Version: ${ec.version}`] : []),
            ].join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            (this.details = i),
            (this.docsPath = r),
            (this.metaMessages = t.metaMessages),
            (this.name = t.name ?? this.name),
            (this.shortMessage = e),
            (this.version = eo);
        }
        walk(e) {
          return (function e(t, i) {
            return i?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
              ? e(t.cause, i)
              : i
              ? null
              : t;
          })(this, e);
        }
      }
      function eh(e, { strict: t = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
      class ed extends el {
        constructor({ size: e, targetSize: t, type: i }) {
          super(
            `${i.charAt(0).toUpperCase()}${i
              .slice(1)
              .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      }
      function eu(e, { dir: t, size: i = 32 } = {}) {
        return "string" == typeof e
          ? (function (e, { dir: t, size: i = 32 } = {}) {
              if (null === i) return e;
              let r = e.replace("0x", "");
              if (r.length > 2 * i)
                throw new ed({
                  size: Math.ceil(r.length / 2),
                  targetSize: i,
                  type: "hex",
                });
              return `0x${r["right" === t ? "padEnd" : "padStart"](
                2 * i,
                "0"
              )}`;
            })(e, { dir: t, size: i })
          : (function (e, { dir: t, size: i = 32 } = {}) {
              if (null === i) return e;
              if (e.length > i)
                throw new ed({ size: e.length, targetSize: i, type: "bytes" });
              let r = new Uint8Array(i);
              for (let s = 0; s < i; s++) {
                let a = "right" === t;
                r[a ? s : i - s - 1] = e[a ? s : e.length - s - 1];
              }
              return r;
            })(e, { dir: t, size: i });
      }
      class ep extends el {
        constructor({ max: e, min: t, signed: i, size: r, value: s }) {
          super(
            `Number "${s}" is not in safe ${
              r ? `${8 * r}-bit ${i ? "signed" : "unsigned"} ` : ""
            }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class eg extends el {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
      function ef(e) {
        return eh(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
      }
      function em(e, { size: t }) {
        if (ef(e) > t) throw new eg({ givenSize: ef(e), maxSize: t });
      }
      function ew(e, t = {}) {
        let { signed: i } = t;
        t.size && em(e, { size: t.size });
        let r = BigInt(e);
        if (!i) return r;
        let s = (e.length - 2) / 2;
        return r <= (1n << (8n * BigInt(s) - 1n)) - 1n
          ? r
          : r - BigInt(`0x${"f".padStart(2 * s, "f")}`) - 1n;
      }
      let ey = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function eb(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? eE(e, t)
          : "string" == typeof e
          ? (function (e, t = {}) {
              return ev(eC.encode(e), t);
            })(e, t)
          : "boolean" == typeof e
          ? (function (e, t = {}) {
              let i = `0x${Number(e)}`;
              return "number" == typeof t.size
                ? (em(i, { size: t.size }), eu(i, { size: t.size }))
                : i;
            })(e, t)
          : ev(e, t);
      }
      function ev(e, t = {}) {
        let i = "";
        for (let t = 0; t < e.length; t++) i += ey[e[t]];
        let r = `0x${i}`;
        return "number" == typeof t.size
          ? (em(r, { size: t.size }), eu(r, { dir: "right", size: t.size }))
          : r;
      }
      function eE(e, t = {}) {
        let i,
          { signed: r, size: s } = t,
          a = BigInt(e);
        s
          ? (i = r
              ? (1n << (8n * BigInt(s) - 1n)) - 1n
              : 2n ** (8n * BigInt(s)) - 1n)
          : "number" == typeof e && (i = BigInt(Number.MAX_SAFE_INTEGER));
        let n = "bigint" == typeof i && r ? -i - 1n : 0;
        if ((i && a > i) || a < n) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new ep({
            max: i ? `${i}${t}` : void 0,
            min: `${n}${t}`,
            signed: r,
            size: s,
            value: `${e}${t}`,
          });
        }
        let o = `0x${(r && a < 0
          ? (1n << BigInt(8 * s)) + BigInt(a)
          : a
        ).toString(16)}`;
        return s ? eu(o, { size: s }) : o;
      }
      let eC = new TextEncoder(),
        eI = new TextEncoder(),
        eN = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function eA(e) {
        return e >= eN.zero && e <= eN.nine
          ? e - eN.zero
          : e >= eN.A && e <= eN.F
          ? e - (eN.A - 10)
          : e >= eN.a && e <= eN.f
          ? e - (eN.a - 10)
          : void 0;
      }
      function e_(e, t = {}) {
        let i = e;
        t.size &&
          (em(i, { size: t.size }),
          (i = eu(i, { dir: "right", size: t.size })));
        let r = i.slice(2);
        r.length % 2 && (r = `0${r}`);
        let s = r.length / 2,
          a = new Uint8Array(s);
        for (let e = 0, t = 0; e < s; e++) {
          let i = eA(r.charCodeAt(t++)),
            s = eA(r.charCodeAt(t++));
          if (void 0 === i || void 0 === s)
            throw new el(
              `Invalid byte sequence ("${r[t - 2]}${r[t - 1]}" in "${r}").`
            );
          a[e] = 16 * i + s;
        }
        return a;
      }
      function eS(e, t = {}) {
        let i = eI.encode(e);
        return "number" == typeof t.size
          ? (em(i, { size: t.size }), eu(i, { dir: "right", size: t.size }))
          : i;
      }
      var eP = i(44659);
      let eO = BigInt(0x100000000 - 1),
        eT = BigInt(32),
        ek = (e, t, i) => (e << i) | (t >>> (32 - i)),
        ex = (e, t, i) => (t << i) | (e >>> (32 - i)),
        eR = (e, t, i) => (t << (i - 32)) | (e >>> (64 - i)),
        eU = (e, t, i) => (e << (i - 32)) | (t >>> (64 - i));
      var eD = i(61553);
      let e$ = [],
        eM = [],
        eL = [],
        ej = BigInt(0),
        eW = BigInt(1),
        eB = BigInt(2),
        eq = BigInt(7),
        eH = BigInt(256),
        eF = BigInt(113);
      for (let e = 0, t = eW, i = 1, r = 0; e < 24; e++) {
        ([i, r] = [r, (2 * i + 3 * r) % 5]),
          e$.push(2 * (5 * r + i)),
          eM.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = ej;
        for (let e = 0; e < 7; e++)
          (t = ((t << eW) ^ ((t >> eq) * eF)) % eH) & eB &&
            (s ^= eW << ((eW << BigInt(e)) - eW));
        eL.push(s);
      }
      let [ez, eV] = (function (e, t = !1) {
          let i = new Uint32Array(e.length),
            r = new Uint32Array(e.length);
          for (let s = 0; s < e.length; s++) {
            let { h: a, l: n } = (function (e, t = !1) {
              return t
                ? { h: Number(e & eO), l: Number((e >> eT) & eO) }
                : { h: 0 | Number((e >> eT) & eO), l: 0 | Number(e & eO) };
            })(e[s], t);
            [i[s], r[s]] = [a, n];
          }
          return [i, r];
        })(eL, !0),
        eK = (e, t, i) => (i > 32 ? eR(e, t, i) : ek(e, t, i)),
        eG = (e, t, i) => (i > 32 ? eU(e, t, i) : ex(e, t, i));
      class eJ extends eD.Vw {
        constructor(e, t, i, r = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = i),
            (this.enableXOF = r),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, eP.Fe)(i),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, eD.DH)(this.state));
        }
        keccak() {
          eD.qv || (0, eD.Fc)(this.state32),
            (function (e, t = 24) {
              let i = new Uint32Array(10);
              for (let r = 24 - t; r < 24; r++) {
                for (let t = 0; t < 10; t++)
                  i[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let r = (t + 8) % 10,
                    s = (t + 2) % 10,
                    a = i[s],
                    n = i[s + 1],
                    o = eK(a, n, 1) ^ i[r],
                    c = eG(a, n, 1) ^ i[r + 1];
                  for (let i = 0; i < 50; i += 10)
                    (e[t + i] ^= o), (e[t + i + 1] ^= c);
                }
                let t = e[2],
                  s = e[3];
                for (let i = 0; i < 24; i++) {
                  let r = eM[i],
                    a = eK(t, s, r),
                    n = eG(t, s, r),
                    o = e$[i];
                  (t = e[o]), (s = e[o + 1]), (e[o] = a), (e[o + 1] = n);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let r = 0; r < 10; r++) i[r] = e[t + r];
                  for (let r = 0; r < 10; r++)
                    e[t + r] ^= ~i[(r + 2) % 10] & i[(r + 4) % 10];
                }
                (e[0] ^= ez[r]), (e[1] ^= eV[r]);
              }
              i.fill(0);
            })(this.state32, this.rounds),
            eD.qv || (0, eD.Fc)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, eP.CC)(this);
          let { blockLen: t, state: i } = this,
            r = (e = (0, eD.ZJ)(e)).length;
          for (let s = 0; s < r; ) {
            let a = Math.min(t - this.pos, r - s);
            for (let t = 0; t < a; t++) i[this.pos++] ^= e[s++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: i, blockLen: r } = this;
          (e[i] ^= t),
            (128 & t) != 0 && i === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, eP.CC)(this, !1), (0, eP.DO)(e), this.finish();
          let t = this.state,
            { blockLen: i } = this;
          for (let r = 0, s = e.length; r < s; ) {
            this.posOut >= i && this.keccak();
            let a = Math.min(i - this.posOut, s - r);
            e.set(t.subarray(this.posOut, this.posOut + a), r),
              (this.posOut += a),
              (r += a);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, eP.Fe)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, eP.Ht)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: i,
            outputLen: r,
            rounds: s,
            enableXOF: a,
          } = this;
          return (
            e || (e = new eJ(t, i, r, a, s)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = s),
            (e.suffix = i),
            (e.outputLen = r),
            (e.enableXOF = a),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let eX = (0, eD.ld)(() => new eJ(136, 1, 32));
      function eY(e, t) {
        let i = eX(
          eh(e, { strict: !1 })
            ? (function (e, t = {}) {
                return "number" == typeof e || "bigint" == typeof e
                  ? e_(eE(e, t))
                  : "boolean" == typeof e
                  ? (function (e, t = {}) {
                      let i = new Uint8Array(1);
                      return ((i[0] = Number(e)), "number" == typeof t.size)
                        ? (em(i, { size: t.size }), eu(i, { size: t.size }))
                        : i;
                    })(e, t)
                  : eh(e)
                  ? e_(e, t)
                  : eS(e, t);
              })(e)
            : e
        );
        return "bytes" === (t || "hex") ? i : eb(i);
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
      let eQ = new eZ(8192);
      async function e0({ hash: e, signature: t }) {
        let r = eh(e) ? e : eb(e),
          { secp256k1: s } = await i.e(609).then(i.bind(i, 30609)),
          a = (() => {
            if ("object" == typeof t && "r" in t && "s" in t) {
              let { r: e, s: i, v: r, yParity: a } = t,
                n = e1(Number(a ?? r));
              return new s.Signature(ew(e), ew(i)).addRecoveryBit(n);
            }
            let e = eh(t) ? t : eb(t),
              i = e1(
                (function (e, t = {}) {
                  return Number(ew(e, t));
                })(`0x${e.slice(130)}`)
              );
            return s.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(
              i
            );
          })()
            .recoverPublicKey(r.substring(2))
            .toHex(!1);
        return `0x${a}`;
      }
      function e1(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function e2({ hash: e, signature: t }) {
        var i = await e0({ hash: e, signature: t });
        let r = eY(`0x${i.substring(4)}`).substring(26);
        return (function (e, t) {
          if (eQ.has(`${e}.${void 0}`)) return eQ.get(`${e}.${t}`);
          let i = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
            r = eY(eS(i), "bytes"),
            s = (t ? i.substring(`${t}0x`.length) : i).split("");
          for (let e = 0; e < 40; e += 2)
            r[e >> 1] >> 4 >= 8 && s[e] && (s[e] = s[e].toUpperCase()),
              (15 & r[e >> 1]) >= 8 &&
                s[e + 1] &&
                (s[e + 1] = s[e + 1].toUpperCase());
          let a = `0x${s.join("")}`;
          return eQ.set(`${e}.${t}`, a), a;
        })(`0x${r}`);
      }
      var e5 = i(42552),
        e3 = i(31507),
        e8 = i(10973),
        e6 = i(49509),
        e4 = i(44134).Buffer;
      function e9(e) {
        let [t, i] = e.split(":");
        return { namespace: t, reference: i };
      }
      function e7(e) {
        let [t, i, r] = e.split(":");
        return { namespace: t, reference: i, address: r };
      }
      function te(e, t) {
        return e.includes(":") ? [e] : t.chains || [];
      }
      var tt = Object.defineProperty,
        ti = Object.defineProperties,
        tr = Object.getOwnPropertyDescriptors,
        ts = Object.getOwnPropertySymbols,
        ta = Object.prototype.hasOwnProperty,
        tn = Object.prototype.propertyIsEnumerable,
        to = (e, t, i) =>
          t in e
            ? tt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        tc = (e, t) => {
          for (var i in t || (t = {})) ta.call(t, i) && to(e, i, t[i]);
          if (ts) for (var i of ts(t)) tn.call(t, i) && to(e, i, t[i]);
          return e;
        },
        tl = (e, t) => ti(e, tr(t));
      let th = {
        reactNative: "react-native",
        node: "node",
        browser: "browser",
        unknown: "unknown",
      };
      function td() {
        return (
          "u" > typeof e6 &&
          "u" > typeof e6.versions &&
          "u" > typeof e6.versions.node
        );
      }
      function tu() {
        return (
          !(0, ea.getDocument)() &&
          !!(0, ea.getNavigator)() &&
          "ReactNative" === navigator.product
        );
      }
      function tp() {
        return !td() && !!(0, ea.getNavigator)() && !!(0, ea.getDocument)();
      }
      function tg() {
        return tu()
          ? th.reactNative
          : td()
          ? th.node
          : tp()
          ? th.browser
          : th.unknown;
      }
      function tf() {
        var e;
        try {
          return tu() &&
            "u" > typeof i.g &&
            "u" > typeof (null == i.g ? void 0 : i.g.Application)
            ? null == (e = i.g.Application)
              ? void 0
              : e.applicationId
            : void 0;
        } catch {
          return;
        }
      }
      function tm() {
        return (
          (0, en.g)() || { name: "", description: "", url: "", icons: [""] }
        );
      }
      function tw(e, t, r) {
        let s = (function () {
            if (
              tg() === th.reactNative &&
              "u" > typeof i.g &&
              "u" > typeof (null == i.g ? void 0 : i.g.Platform)
            ) {
              let { OS: e, Version: t } = i.g.Platform;
              return [e, t].join("-");
            }
            let e = (0, es.o0)();
            if (null === e) return "unknown";
            let t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
            return "browser" === e.type
              ? [t, e.name, e.version].join("-")
              : [t, e.version].join("-");
          })(),
          a = (function () {
            var e;
            let t = tg();
            return t === th.browser
              ? [
                  t,
                  (null == (e = (0, ea.getLocation)()) ? void 0 : e.host) ||
                    "unknown",
                ].join(":")
              : t;
          })();
        return [[e, t].join("-"), ["js", r].join("-"), s, a].join("/");
      }
      function ty(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function tb(e) {
        return Object.fromEntries(e.entries());
      }
      function tv(e) {
        return new Map(Object.entries(e));
      }
      function tE(e = ei.FIVE_MINUTES, t) {
        let i,
          r,
          s,
          a,
          n = (0, ei.toMiliseconds)(e || ei.FIVE_MINUTES);
        return {
          resolve: (e) => {
            s && i && (clearTimeout(s), i(e), (a = Promise.resolve(e)));
          },
          reject: (e) => {
            s && r && (clearTimeout(s), r(e));
          },
          done: () =>
            new Promise((e, o) => {
              if (a) return e(a);
              (s = setTimeout(() => {
                let e = Error(t);
                (a = Promise.reject(e)), o(e);
              }, n)),
                (i = e),
                (r = o);
            }),
        };
      }
      function tC(e, t, i) {
        return new Promise(async (r, s) => {
          let a = setTimeout(() => s(Error(i)), t);
          try {
            let t = await e;
            r(t);
          } catch (e) {
            s(e);
          }
          clearTimeout(a);
        });
      }
      function tI(e, t) {
        if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
        if ("topic" === e.toLowerCase()) {
          if ("string" != typeof t)
            throw Error(
              'Value must be "string" for expirer target type: topic'
            );
          return `topic:${t}`;
        }
        if ("id" === e.toLowerCase()) {
          if ("number" != typeof t)
            throw Error('Value must be "number" for expirer target type: id');
          return `id:${t}`;
        }
        throw Error(`Unknown expirer target type: ${e}`);
      }
      function tN(e) {
        let [t, i] = e.split(":"),
          r = { id: void 0, topic: void 0 };
        if ("topic" === t && "string" == typeof i) r.topic = i;
        else if ("id" === t && Number.isInteger(Number(i))) r.id = Number(i);
        else
          throw Error(
            `Invalid target, expected id:number or topic:string, got ${t}:${i}`
          );
        return r;
      }
      function tA(e, t) {
        return (0, ei.fromMiliseconds)(
          (t || Date.now()) + (0, ei.toMiliseconds)(e)
        );
      }
      function t_(e) {
        return Date.now() >= (0, ei.toMiliseconds)(e);
      }
      function tS(e, t) {
        return `${e}${t ? `:${t}` : ""}`;
      }
      function tP(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      async function tO({ id: e, topic: t, wcDeepLink: r }) {
        var s, a;
        try {
          if (!r) return;
          let n = "string" == typeof r ? JSON.parse(r) : r,
            o = n?.href;
          if ("string" != typeof o) return;
          let c = (function (e, t, i) {
              let r = `requestId=${t}&sessionTopic=${i}`;
              e.endsWith("/") && (e = e.slice(0, -1));
              let s = `${e}`;
              if (e.startsWith("https://t.me")) {
                let t = e.includes("?") ? "&startapp=" : "?startapp=";
                s = `${s}${t}${(function (e, t = !1) {
                  let i = e4.from(e).toString("base64");
                  return t ? i.replace(/[=]/g, "") : i;
                })(r, !0)}`;
              } else s = `${s}/wc?${r}`;
              return s;
            })(o, e, t),
            l = tg();
          if (l === th.browser) {
            let e;
            if (!(null != (s = (0, ea.getDocument)()) && s.hasFocus()))
              return void console.warn(
                "Document does not have focus, skipping deeplink."
              );
            (a = c),
              (e = "_self"),
              !(function () {
                try {
                  return window.self !== window.top;
                } catch {
                  return !1;
                }
              })()
                ? (("u" > typeof window &&
                    (window.TelegramWebviewProxy ||
                      window.Telegram ||
                      window.TelegramWebviewProxyProto)) ||
                    a.startsWith("https://") ||
                    a.startsWith("http://")) &&
                  (e = "_blank")
                : (e = "_top"),
              window.open(a, e, "noreferrer noopener");
          } else
            l === th.reactNative &&
              "u" > typeof (null == i.g ? void 0 : i.g.Linking) &&
              (await i.g.Linking.openURL(c));
        } catch (e) {
          console.error(e);
        }
      }
      async function tT(e, t) {
        let i = "";
        try {
          if (tp() && (i = localStorage.getItem(t))) return i;
          i = await e.getItem(t);
        } catch (e) {
          console.error(e);
        }
        return i;
      }
      function tk(e, t) {
        if (!e.includes(t)) return null;
        let i = e.split(/([&,?,=])/),
          r = i.indexOf(t);
        return i[r + 2];
      }
      function tx() {
        return "u" > typeof crypto && null != crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e) => {
              let t = (16 * Math.random()) | 0;
              return ("x" === e ? t : (3 & t) | 8).toString(16);
            });
      }
      function tR() {
        return "u" > typeof e6 && "true" === e6.env.IS_VITEST;
      }
      function tU(e) {
        return e4.from(e, "base64").toString("utf-8");
      }
      function tD(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function t$(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function tM(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        tD(e.outputLen), tD(e.blockLen);
      }
      function tL(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function tj(e, t) {
        t$(e);
        let i = t.outputLen;
        if (e.length < i)
          throw Error(
            "digestInto() expects output buffer of length at least " + i
          );
      }
      let tW = BigInt(0x100000000 - 1),
        tB = BigInt(32),
        tq = (e, t, i) => (e << i) | (t >>> (32 - i)),
        tH = (e, t, i) => (t << i) | (e >>> (32 - i)),
        tF = (e, t, i) => (t << (i - 32)) | (e >>> (64 - i)),
        tz = (e, t, i) => (e << (i - 32)) | (t >>> (64 - i)),
        tV =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0;
      function tK(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function tG(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let tJ = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function tX(e) {
        for (let i = 0; i < e.length; i++) {
          var t;
          e[i] =
            (((t = e[i]) << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      function tY(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          t$(e),
          e
        );
      }
      class tZ {
        clone() {
          return this._cloneInto();
        }
      }
      function tQ(e) {
        let t = (t) => e().update(tY(t)).digest(),
          i = e();
        return (
          (t.outputLen = i.outputLen),
          (t.blockLen = i.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function t0(e = 32) {
        if (tV && "function" == typeof tV.getRandomValues)
          return tV.getRandomValues(new Uint8Array(e));
        if (tV && "function" == typeof tV.randomBytes) return tV.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined");
      }
      let t1 = [],
        t2 = [],
        t5 = [],
        t3 = BigInt(0),
        t8 = BigInt(1),
        t6 = BigInt(2),
        t4 = BigInt(7),
        t9 = BigInt(256),
        t7 = BigInt(113);
      for (let e = 0, t = t8, i = 1, r = 0; e < 24; e++) {
        ([i, r] = [r, (2 * i + 3 * r) % 5]),
          t1.push(2 * (5 * r + i)),
          t2.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = t3;
        for (let e = 0; e < 7; e++)
          (t = ((t << t8) ^ ((t >> t4) * t7)) % t9) & t6 &&
            (s ^= t8 << ((t8 << BigInt(e)) - t8));
        t5.push(s);
      }
      let [ie, it] = (function (e, t = !1) {
          let i = new Uint32Array(e.length),
            r = new Uint32Array(e.length);
          for (let s = 0; s < e.length; s++) {
            let { h: a, l: n } = (function (e, t = !1) {
              return t
                ? { h: Number(e & tW), l: Number((e >> tB) & tW) }
                : { h: 0 | Number((e >> tB) & tW), l: 0 | Number(e & tW) };
            })(e[s], t);
            [i[s], r[s]] = [a, n];
          }
          return [i, r];
        })(t5, !0),
        ii = (e, t, i) => (i > 32 ? tF(e, t, i) : tq(e, t, i)),
        ir = (e, t, i) => (i > 32 ? tz(e, t, i) : tH(e, t, i));
      class is extends tZ {
        constructor(e, t, i, r = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = i),
            (this.enableXOF = r),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            tD(i),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (function (e) {
              return new Uint32Array(
                e.buffer,
                e.byteOffset,
                Math.floor(e.byteLength / 4)
              );
            })(this.state));
        }
        keccak() {
          tJ || tX(this.state32),
            (function (e, t = 24) {
              let i = new Uint32Array(10);
              for (let r = 24 - t; r < 24; r++) {
                for (let t = 0; t < 10; t++)
                  i[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let r = (t + 8) % 10,
                    s = (t + 2) % 10,
                    a = i[s],
                    n = i[s + 1],
                    o = ii(a, n, 1) ^ i[r],
                    c = ir(a, n, 1) ^ i[r + 1];
                  for (let i = 0; i < 50; i += 10)
                    (e[t + i] ^= o), (e[t + i + 1] ^= c);
                }
                let t = e[2],
                  s = e[3];
                for (let i = 0; i < 24; i++) {
                  let r = t2[i],
                    a = ii(t, s, r),
                    n = ir(t, s, r),
                    o = t1[i];
                  (t = e[o]), (s = e[o + 1]), (e[o] = a), (e[o + 1] = n);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let r = 0; r < 10; r++) i[r] = e[t + r];
                  for (let r = 0; r < 10; r++)
                    e[t + r] ^= ~i[(r + 2) % 10] & i[(r + 4) % 10];
                }
                (e[0] ^= ie[r]), (e[1] ^= it[r]);
              }
              i.fill(0);
            })(this.state32, this.rounds),
            tJ || tX(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          tL(this);
          let { blockLen: t, state: i } = this,
            r = (e = tY(e)).length;
          for (let s = 0; s < r; ) {
            let a = Math.min(t - this.pos, r - s);
            for (let t = 0; t < a; t++) i[this.pos++] ^= e[s++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: i, blockLen: r } = this;
          (e[i] ^= t),
            (128 & t) != 0 && i === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          tL(this, !1), t$(e), this.finish();
          let t = this.state,
            { blockLen: i } = this;
          for (let r = 0, s = e.length; r < s; ) {
            this.posOut >= i && this.keccak();
            let a = Math.min(i - this.posOut, s - r);
            e.set(t.subarray(this.posOut, this.posOut + a), r),
              (this.posOut += a),
              (r += a);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return tD(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if ((tj(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: i,
            outputLen: r,
            rounds: s,
            enableXOF: a,
          } = this;
          return (
            e || (e = new is(t, i, r, a, s)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = s),
            (e.suffix = i),
            (e.outputLen = r),
            (e.enableXOF = a),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let ia = tQ(() => new is(136, 1, 32));
      function io(e) {
        let t = `Ethereum Signed Message:
${e.length}`,
          i = new TextEncoder().encode(t + e);
        return "0x" + e4.from(ia(i)).toString("hex");
      }
      async function ic(e, t, i, r, s, a) {
        switch (i.t) {
          case "eip191":
            return await il(e, t, i.s);
          case "eip1271":
            return await ih(e, t, i.s, r, s, a);
          default:
            throw Error(
              `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${i.t}`
            );
        }
      }
      async function il(e, t, i) {
        return (
          (await e2({ hash: io(t), signature: i })).toLowerCase() ===
          e.toLowerCase()
        );
      }
      async function ih(e, t, i, r, s, a) {
        let n = e9(r);
        if (!n.namespace || !n.reference)
          throw Error(
            `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`
          );
        try {
          let n = "0x1626ba7e",
            o = i.substring(2),
            c = io(t).substring(2),
            l =
              n +
              c +
              "00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041" +
              o,
            h = await fetch(
              `${
                a || "https://rpc.walletconnect.org/v1"
              }/?chainId=${r}&projectId=${s}`,
              {
                method: "POST",
                body: JSON.stringify({
                  id: Date.now() + Math.floor(1e3 * Math.random()),
                  jsonrpc: "2.0",
                  method: "eth_call",
                  params: [{ to: e, data: l }, "latest"],
                }),
              }
            ),
            { result: d } = await h.json();
          return !!d && d.slice(0, n.length).toLowerCase() === n.toLowerCase();
        } catch (e) {
          return console.error("isValidEip1271Signature: ", e), !1;
        }
      }
      var id = Object.defineProperty,
        iu = Object.defineProperties,
        ip = Object.getOwnPropertyDescriptors,
        ig = Object.getOwnPropertySymbols,
        im = Object.prototype.hasOwnProperty,
        iw = Object.prototype.propertyIsEnumerable,
        iy = (e, t, i) =>
          t in e
            ? id(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        ib = (e, t) => {
          for (var i in t || (t = {})) im.call(t, i) && iy(e, i, t[i]);
          if (ig) for (var i of ig(t)) iw.call(t, i) && iy(e, i, t[i]);
          return e;
        },
        iv = (e, t) => iu(e, ip(t));
      let iE = (e) => e?.split(":"),
        iC = (e) => {
          let t = e && iE(e);
          if (t) return e.includes("did:pkh:") ? t[3] : t[1];
        },
        iI = (e) => {
          let t = e && iE(e);
          if (t) return t[2] + ":" + t[3];
        },
        iN = (e) => {
          let t = e && iE(e);
          if (t) return t.pop();
        };
      async function iA(e) {
        let { cacao: t, projectId: i } = e,
          { s: r, p: s } = t,
          a = i_(s, s.iss),
          n = iN(s.iss);
        return await ic(n, a, r, iI(s.iss), i);
      }
      let i_ = (e, t) => {
        let i = `${e.domain} wants you to sign in with your Ethereum account:`,
          r = iN(t);
        if (!e.aud && !e.uri)
          throw Error(
            "Either `aud` or `uri` is required to construct the message"
          );
        let s = e.statement || void 0,
          a = `URI: ${e.aud || e.uri}`,
          n = `Version: ${e.version}`,
          o = `Chain ID: ${iC(t)}`,
          c = `Nonce: ${e.nonce}`,
          l = `Issued At: ${e.iat}`,
          h = e.exp ? `Expiration Time: ${e.exp}` : void 0,
          d = e.nbf ? `Not Before: ${e.nbf}` : void 0,
          u = e.requestId ? `Request ID: ${e.requestId}` : void 0,
          p = e.resources
            ? `Resources:${e.resources
                .map(
                  (e) => `
- ${e}`
                )
                .join("")}`
            : void 0,
          g = ix(e.resources);
        return (
          g &&
            (s = (function (e = "", t) {
              iS(t);
              let i =
                "I further authorize the stated URI to perform the following actions on my behalf: ";
              if (e.includes(i)) return e;
              let r = [],
                s = 0;
              Object.keys(t.att).forEach((e) => {
                let i = Object.keys(t.att[e]).map((e) => ({
                  ability: e.split("/")[0],
                  action: e.split("/")[1],
                }));
                i.sort((e, t) => e.action.localeCompare(t.action));
                let a = {};
                i.forEach((e) => {
                  a[e.ability] || (a[e.ability] = []),
                    a[e.ability].push(e.action);
                });
                let n = Object.keys(a).map(
                  (t) => (
                    s++, `(${s}) '${t}': '${a[t].join("', '")}' for '${e}'.`
                  )
                );
                r.push(n.join(", ").replace(".,", "."));
              });
              let a = r.join(" "),
                n = `${i}${a}`;
              return `${e ? e + " " : ""}${n}`;
            })(s, iO(g))),
          [i, r, "", s, "", a, n, o, c, l, h, d, u, p].filter((e) => null != e)
            .join(`
`)
        );
      };
      function iS(e) {
        if (!e) throw Error("No recap provided, value is undefined");
        if (!e.att) throw Error("No `att` property found");
        let t = Object.keys(e.att);
        if (!(null != t && t.length))
          throw Error("No resources found in `att` property");
        t.forEach((t) => {
          let i = e.att[t];
          if (Array.isArray(i) || "object" != typeof i)
            throw Error(`Resource must be an object: ${t}`);
          if (!Object.keys(i).length)
            throw Error(`Resource object is empty: ${t}`);
          Object.keys(i).forEach((e) => {
            let t = i[e];
            if (!Array.isArray(t))
              throw Error(
                `Ability limits ${e} must be an array of objects, found: ${t}`
              );
            if (!t.length)
              throw Error(
                `Value of ${e} is empty array, must be an array with objects`
              );
            t.forEach((t) => {
              if ("object" != typeof t)
                throw Error(
                  `Ability limits (${e}) must be an array of objects, found: ${t}`
                );
            });
          });
        });
      }
      function iP(e) {
        return (
          iS(e),
          `urn:recap:${e4
            .from(JSON.stringify(e))
            .toString("base64")
            .replace(/=/g, "")}`
        );
      }
      function iO(e) {
        var t;
        let i =
          ((t = e.replace("urn:recap:", "")),
          JSON.parse(e4.from(t, "base64").toString("utf-8")));
        return iS(i), i;
      }
      function iT(e) {
        var t;
        let i = iO(e);
        iS(i);
        let r = null == (t = i.att) ? void 0 : t.eip155;
        return r ? Object.keys(r).map((e) => e.split("/")[1]) : [];
      }
      function ik(e) {
        let t = iO(e);
        iS(t);
        let i = [];
        return (
          Object.values(t.att).forEach((e) => {
            Object.values(e).forEach((e) => {
              var t;
              null != (t = e?.[0]) && t.chains && i.push(e[0].chains);
            });
          }),
          [...new Set(i.flat())]
        );
      }
      function ix(e) {
        var t;
        if (!e) return;
        let i = e?.[e.length - 1];
        return (t = i) && t.includes("urn:recap:") ? i : void 0;
      }
      function iR(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function iU(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function iD(e, ...t) {
        if (!iU(e)) throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function i$(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function iM(e) {
        if ("boolean" != typeof e) throw Error(`boolean expected, not ${e}`);
      }
      let iL = (e) =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        ij = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      if (68 !== new Uint8Array(new Uint32Array([0x11223344]).buffer)[0])
        throw Error("Non little-endian hardware is not supported");
      function iW(e) {
        if ("string" == typeof e)
          e = (function (e) {
            if ("string" != typeof e) throw Error("string expected");
            return new Uint8Array(new TextEncoder().encode(e));
          })(e);
        else if (iU(e)) e = iH(e);
        else throw Error("Uint8Array expected, got " + typeof e);
        return e;
      }
      function iB(e, t, i = !0) {
        if (void 0 === t) return new Uint8Array(e);
        if (t.length !== e)
          throw Error(
            "invalid output length, expected " + e + ", got: " + t.length
          );
        if (i && t.byteOffset % 4 != 0)
          throw Error("invalid output, must be aligned");
        return t;
      }
      function iq(e, t, i, r) {
        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, i, r);
        let s = BigInt(32),
          a = BigInt(0xffffffff),
          n = Number((i >> s) & a),
          o = Number(i & a),
          c = 4 * !!r,
          l = 4 * !r;
        e.setUint32(t + c, n, r), e.setUint32(t + l, o, r);
      }
      function iH(e) {
        return Uint8Array.from(e);
      }
      function iF(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      let iz = (e) => Uint8Array.from(e.split("").map((e) => e.charCodeAt(0))),
        iV = iz("expand 16-byte k"),
        iK = iz("expand 32-byte k"),
        iG = iL(iV),
        iJ = iL(iK);
      function iX(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function iY(e) {
        return e.byteOffset % 4 == 0;
      }
      let iZ = 0x100000000 - 1,
        iQ = new Uint32Array(),
        i0 = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
      class i1 {
        constructor(e) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            iD((e = iW(e)), 32);
          let t = i0(e, 0),
            i = i0(e, 2),
            r = i0(e, 4),
            s = i0(e, 6),
            a = i0(e, 8),
            n = i0(e, 10),
            o = i0(e, 12),
            c = i0(e, 14);
          (this.r[0] = 8191 & t),
            (this.r[1] = ((t >>> 13) | (i << 3)) & 8191),
            (this.r[2] = ((i >>> 10) | (r << 6)) & 7939),
            (this.r[3] = ((r >>> 7) | (s << 9)) & 8191),
            (this.r[4] = ((s >>> 4) | (a << 12)) & 255),
            (this.r[5] = (a >>> 1) & 8190),
            (this.r[6] = ((a >>> 14) | (n << 2)) & 8191),
            (this.r[7] = ((n >>> 11) | (o << 5)) & 8065),
            (this.r[8] = ((o >>> 8) | (c << 8)) & 8191),
            (this.r[9] = (c >>> 5) & 127);
          for (let t = 0; t < 8; t++) this.pad[t] = i0(e, 16 + 2 * t);
        }
        process(e, t, i = !1) {
          let { h: r, r: s } = this,
            a = s[0],
            n = s[1],
            o = s[2],
            c = s[3],
            l = s[4],
            h = s[5],
            d = s[6],
            u = s[7],
            p = s[8],
            g = s[9],
            f = i0(e, t + 0),
            m = i0(e, t + 2),
            w = i0(e, t + 4),
            y = i0(e, t + 6),
            b = i0(e, t + 8),
            v = i0(e, t + 10),
            E = i0(e, t + 12),
            C = i0(e, t + 14),
            I = r[0] + (8191 & f),
            N = r[1] + (((f >>> 13) | (m << 3)) & 8191),
            A = r[2] + (((m >>> 10) | (w << 6)) & 8191),
            _ = r[3] + (((w >>> 7) | (y << 9)) & 8191),
            S = r[4] + (((y >>> 4) | (b << 12)) & 8191),
            P = r[5] + ((b >>> 1) & 8191),
            O = r[6] + (((b >>> 14) | (v << 2)) & 8191),
            T = r[7] + (((v >>> 11) | (E << 5)) & 8191),
            k = r[8] + (((E >>> 8) | (C << 8)) & 8191),
            x = r[9] + ((C >>> 5) | (2048 * !i)),
            R = 0,
            U = 0 + I * a + 5 * g * N + 5 * p * A + 5 * u * _ + 5 * d * S;
          (R = U >>> 13),
            (U &= 8191),
            (U += 5 * h * P + 5 * l * O + 5 * c * T + 5 * o * k + 5 * n * x),
            (R += U >>> 13),
            (U &= 8191);
          let D = R + I * n + N * a + 5 * g * A + 5 * p * _ + 5 * u * S;
          (R = D >>> 13),
            (D &= 8191),
            (D += 5 * d * P + 5 * h * O + 5 * l * T + 5 * c * k + 5 * o * x),
            (R += D >>> 13),
            (D &= 8191);
          let $ = R + I * o + N * n + A * a + 5 * g * _ + 5 * p * S;
          (R = $ >>> 13),
            ($ &= 8191),
            ($ += 5 * u * P + 5 * d * O + 5 * h * T + 5 * l * k + 5 * c * x),
            (R += $ >>> 13),
            ($ &= 8191);
          let M = R + I * c + N * o + A * n + _ * a + 5 * g * S;
          (R = M >>> 13),
            (M &= 8191),
            (M += 5 * p * P + 5 * u * O + 5 * d * T + 5 * h * k + 5 * l * x),
            (R += M >>> 13),
            (M &= 8191);
          let L = R + I * l + N * c + A * o + _ * n + S * a;
          (R = L >>> 13),
            (L &= 8191),
            (L += 5 * g * P + 5 * p * O + 5 * u * T + 5 * d * k + 5 * h * x),
            (R += L >>> 13),
            (L &= 8191);
          let j = R + I * h + N * l + A * c + _ * o + S * n;
          (R = j >>> 13),
            (j &= 8191),
            (j += P * a + 5 * g * O + 5 * p * T + 5 * u * k + 5 * d * x),
            (R += j >>> 13),
            (j &= 8191);
          let W = R + I * d + N * h + A * l + _ * c + S * o;
          (R = W >>> 13),
            (W &= 8191),
            (W += P * n + O * a + 5 * g * T + 5 * p * k + 5 * u * x),
            (R += W >>> 13),
            (W &= 8191);
          let B = R + I * u + N * d + A * h + _ * l + S * c;
          (R = B >>> 13),
            (B &= 8191),
            (B += P * o + O * n + T * a + 5 * g * k + 5 * p * x),
            (R += B >>> 13),
            (B &= 8191);
          let q = R + I * p + N * u + A * d + _ * h + S * l;
          (R = q >>> 13),
            (q &= 8191),
            (q += P * c + O * o + T * n + k * a + 5 * g * x),
            (R += q >>> 13),
            (q &= 8191);
          let H = R + I * g + N * p + A * u + _ * d + S * h;
          (R = H >>> 13),
            (H &= 8191),
            (H += P * l + O * c + T * o + k * n + x * a),
            (R += H >>> 13),
            (H &= 8191),
            (U = 8191 & (R = ((R = ((R << 2) + R) | 0) + U) | 0)),
            (R >>>= 13),
            (D += R),
            (r[0] = U),
            (r[1] = D),
            (r[2] = $),
            (r[3] = M),
            (r[4] = L),
            (r[5] = j),
            (r[6] = W),
            (r[7] = B),
            (r[8] = q),
            (r[9] = H);
        }
        finalize() {
          let { h: e, pad: t } = this,
            i = new Uint16Array(10),
            r = e[1] >>> 13;
          e[1] &= 8191;
          for (let t = 2; t < 10; t++)
            (e[t] += r), (r = e[t] >>> 13), (e[t] &= 8191);
          (e[0] += 5 * r),
            (r = e[0] >>> 13),
            (e[0] &= 8191),
            (e[1] += r),
            (r = e[1] >>> 13),
            (e[1] &= 8191),
            (e[2] += r),
            (i[0] = e[0] + 5),
            (r = i[0] >>> 13),
            (i[0] &= 8191);
          for (let t = 1; t < 10; t++)
            (i[t] = e[t] + r), (r = i[t] >>> 13), (i[t] &= 8191);
          i[9] -= 8192;
          let s = (1 ^ r) - 1;
          for (let e = 0; e < 10; e++) i[e] &= s;
          s = ~s;
          for (let t = 0; t < 10; t++) e[t] = (e[t] & s) | i[t];
          (e[0] = (e[0] | (e[1] << 13)) & 65535),
            (e[1] = ((e[1] >>> 3) | (e[2] << 10)) & 65535),
            (e[2] = ((e[2] >>> 6) | (e[3] << 7)) & 65535),
            (e[3] = ((e[3] >>> 9) | (e[4] << 4)) & 65535),
            (e[4] = ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14)) & 65535),
            (e[5] = ((e[6] >>> 2) | (e[7] << 11)) & 65535),
            (e[6] = ((e[7] >>> 5) | (e[8] << 8)) & 65535),
            (e[7] = ((e[8] >>> 8) | (e[9] << 5)) & 65535);
          let a = e[0] + t[0];
          e[0] = 65535 & a;
          for (let i = 1; i < 8; i++)
            (a = (((e[i] + t[i]) | 0) + (a >>> 16)) | 0), (e[i] = 65535 & a);
          iF(i);
        }
        update(e) {
          i$(this);
          let { buffer: t, blockLen: i } = this,
            r = (e = iW(e)).length;
          for (let s = 0; s < r; ) {
            let a = Math.min(i - this.pos, r - s);
            if (a === i) {
              for (; i <= r - s; s += i) this.process(e, s);
              continue;
            }
            t.set(e.subarray(s, s + a), this.pos),
              (this.pos += a),
              (s += a),
              this.pos === i && (this.process(t, 0, !1), (this.pos = 0));
          }
          return this;
        }
        destroy() {
          iF(this.h, this.r, this.buffer, this.pad);
        }
        digestInto(e) {
          i$(this),
            (function (e, t) {
              iD(e);
              let i = t.outputLen;
              if (e.length < i)
                throw Error(
                  "digestInto() expects output buffer of length at least " + i
                );
            })(e, this),
            (this.finished = !0);
          let { buffer: t, h: i } = this,
            { pos: r } = this;
          if (r) {
            for (t[r++] = 1; r < 16; r++) t[r] = 0;
            this.process(t, 0, !0);
          }
          this.finalize();
          let s = 0;
          for (let t = 0; t < 8; t++)
            (e[s++] = i[t] >>> 0), (e[s++] = i[t] >>> 8);
          return e;
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let i = e.slice(0, t);
          return this.destroy(), i;
        }
      }
      let i2 = (function (e) {
          let t = (t, i) => e(i).update(iW(t)).digest(),
            i = e(new Uint8Array(32));
          return (
            (t.outputLen = i.outputLen),
            (t.blockLen = i.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        })((e) => new i1(e)),
        i5 = (function (e, t) {
          let {
            allowShortKeys: i,
            extendNonceFn: r,
            counterLength: s,
            counterRight: a,
            rounds: n,
          } = (function (e, t) {
            if (null == t || "object" != typeof t)
              throw Error("options must be defined");
            return Object.assign(e, t);
          })(
            {
              allowShortKeys: !1,
              counterLength: 8,
              counterRight: !1,
              rounds: 20,
            },
            t
          );
          if ("function" != typeof e) throw Error("core must be a function");
          return (
            iR(s),
            iR(n),
            iM(a),
            iM(i),
            (t, o, c, l, h = 0) => {
              iD(t), iD(o), iD(c);
              let d = c.length;
              if (
                (void 0 === l && (l = new Uint8Array(d)),
                iD(l),
                iR(h),
                h < 0 || h >= iZ)
              )
                throw Error("arx: counter overflow");
              if (l.length < d)
                throw Error(
                  `arx: output (${l.length}) is shorter than data (${d})`
                );
              let u = [],
                p = t.length,
                g,
                f;
              if (32 === p) u.push((g = iH(t))), (f = iJ);
              else if (16 === p && i)
                (g = new Uint8Array(32)).set(t),
                  g.set(t, 16),
                  (f = iG),
                  u.push(g);
              else throw Error(`arx: invalid 32-byte key, got length=${p}`);
              iY(o) || u.push((o = iH(o)));
              let m = iL(g);
              if (r) {
                if (24 !== o.length)
                  throw Error("arx: extended nonce must be 24 bytes");
                r(f, m, iL(o.subarray(0, 16)), m), (o = o.subarray(16));
              }
              let w = 16 - s;
              if (w !== o.length)
                throw Error(`arx: nonce must be ${w} or 16 bytes`);
              if (12 !== w) {
                let e = new Uint8Array(12);
                e.set(o, a ? 0 : 12 - o.length), (o = e), u.push(o);
              }
              return (
                (function (e, t, i, r, s, a, n, o) {
                  let c = s.length,
                    l = new Uint8Array(64),
                    h = iL(l),
                    d = iY(s) && iY(a),
                    u = d ? iL(s) : iQ,
                    p = d ? iL(a) : iQ;
                  for (let g = 0; g < c; n++) {
                    if ((e(t, i, r, h, n, o), n >= iZ))
                      throw Error("arx: counter overflow");
                    let f = Math.min(64, c - g);
                    if (d && 64 === f) {
                      let e = g / 4;
                      if (g % 4 != 0)
                        throw Error("arx: invalid block position");
                      for (let t = 0, i; t < 16; t++)
                        p[(i = e + t)] = u[i] ^ h[t];
                      g += 64;
                      continue;
                    }
                    for (let e = 0, t; e < f; e++) a[(t = g + e)] = s[t] ^ l[e];
                    g += f;
                  }
                })(e, f, m, iL(o), c, l, h, n),
                iF(...u),
                l
              );
            }
          );
        })(
          function (e, t, i, r, s, a = 20) {
            let n = e[0],
              o = e[1],
              c = e[2],
              l = e[3],
              h = t[0],
              d = t[1],
              u = t[2],
              p = t[3],
              g = t[4],
              f = t[5],
              m = t[6],
              w = t[7],
              y = i[0],
              b = i[1],
              v = i[2],
              E = n,
              C = o,
              I = c,
              N = l,
              A = h,
              _ = d,
              S = u,
              P = p,
              O = g,
              T = f,
              k = m,
              x = w,
              R = s,
              U = y,
              D = b,
              $ = v;
            for (let e = 0; e < a; e += 2)
              (O = (O + (R = iX(R ^ (E = (E + A) | 0), 16))) | 0),
                (E = (E + (A = iX(A ^ O, 12))) | 0),
                (O = (O + (R = iX(R ^ E, 8))) | 0),
                (A = iX(A ^ O, 7)),
                (T = (T + (U = iX(U ^ (C = (C + _) | 0), 16))) | 0),
                (C = (C + (_ = iX(_ ^ T, 12))) | 0),
                (T = (T + (U = iX(U ^ C, 8))) | 0),
                (_ = iX(_ ^ T, 7)),
                (k = (k + (D = iX(D ^ (I = (I + S) | 0), 16))) | 0),
                (I = (I + (S = iX(S ^ k, 12))) | 0),
                (k = (k + (D = iX(D ^ I, 8))) | 0),
                (S = iX(S ^ k, 7)),
                (x = (x + ($ = iX($ ^ (N = (N + P) | 0), 16))) | 0),
                (N = (N + (P = iX(P ^ x, 12))) | 0),
                (x = (x + ($ = iX($ ^ N, 8))) | 0),
                (P = iX(P ^ x, 7)),
                (k = (k + ($ = iX($ ^ (E = (E + _) | 0), 16))) | 0),
                (E = (E + (_ = iX(_ ^ k, 12))) | 0),
                (k = (k + ($ = iX($ ^ E, 8))) | 0),
                (_ = iX(_ ^ k, 7)),
                (x = (x + (R = iX(R ^ (C = (C + S) | 0), 16))) | 0),
                (C = (C + (S = iX(S ^ x, 12))) | 0),
                (x = (x + (R = iX(R ^ C, 8))) | 0),
                (S = iX(S ^ x, 7)),
                (O = (O + (U = iX(U ^ (I = (I + P) | 0), 16))) | 0),
                (I = (I + (P = iX(P ^ O, 12))) | 0),
                (O = (O + (U = iX(U ^ I, 8))) | 0),
                (P = iX(P ^ O, 7)),
                (T = (T + (D = iX(D ^ (N = (N + A) | 0), 16))) | 0),
                (N = (N + (A = iX(A ^ T, 12))) | 0),
                (T = (T + (D = iX(D ^ N, 8))) | 0),
                (A = iX(A ^ T, 7));
            let M = 0;
            (r[M++] = (n + E) | 0),
              (r[M++] = (o + C) | 0),
              (r[M++] = (c + I) | 0),
              (r[M++] = (l + N) | 0),
              (r[M++] = (h + A) | 0),
              (r[M++] = (d + _) | 0),
              (r[M++] = (u + S) | 0),
              (r[M++] = (p + P) | 0),
              (r[M++] = (g + O) | 0),
              (r[M++] = (f + T) | 0),
              (r[M++] = (m + k) | 0),
              (r[M++] = (w + x) | 0),
              (r[M++] = (s + R) | 0),
              (r[M++] = (y + U) | 0),
              (r[M++] = (b + D) | 0),
              (r[M++] = (v + $) | 0);
          },
          { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
        ),
        i3 = new Uint8Array(16),
        i8 = (e, t) => {
          e.update(t);
          let i = t.length % 16;
          i && e.update(i3.subarray(i));
        },
        i6 = new Uint8Array(32);
      function i4(e, t, i, r, s) {
        let a = e(t, i, i6),
          n = i2.create(a);
        s && i8(n, s), i8(n, r);
        let o = new Uint8Array(16),
          c = ij(o);
        iq(c, 0, BigInt(s ? s.length : 0), !0),
          iq(c, 8, BigInt(r.length), !0),
          n.update(o);
        let l = n.digest();
        return iF(a, o), l;
      }
      let i9 = ((e, t) => {
        function i(r, ...s) {
          if ((iD(r), void 0 !== e.nonceLength)) {
            let t = s[0];
            if (!t) throw Error("nonce / iv required");
            e.varSizeNonce ? iD(t) : iD(t, e.nonceLength);
          }
          let a = e.tagLength;
          a && void 0 !== s[1] && iD(s[1]);
          let n = t(r, ...s),
            o = (e, t) => {
              if (void 0 !== t) {
                if (2 !== e) throw Error("cipher output not supported");
                iD(t);
              }
            },
            c = !1;
          return {
            encrypt(e, t) {
              if (c)
                throw Error("cannot encrypt() twice with same key + nonce");
              return (c = !0), iD(e), o(n.encrypt.length, t), n.encrypt(e, t);
            },
            decrypt(e, t) {
              if ((iD(e), a && e.length < a))
                throw Error(
                  "invalid ciphertext length: smaller than tagLength=" + a
                );
              return o(n.decrypt.length, t), n.decrypt(e, t);
            },
          };
        }
        return Object.assign(i, e), i;
      })(
        { blockSize: 64, nonceLength: 12, tagLength: 16 },
        ((e) => (t, i, r) => ({
          encrypt(s, a) {
            let n = s.length;
            (a = iB(n + 16, a, !1)).set(s);
            let o = a.subarray(0, -16);
            e(t, i, o, o, 1);
            let c = i4(e, t, i, o, r);
            return a.set(c, n), iF(c), a;
          },
          decrypt(s, a) {
            a = iB(s.length - 16, a, !1);
            let n = s.subarray(0, -16),
              o = s.subarray(-16),
              c = i4(e, t, i, n, r);
            if (
              !(function (e, t) {
                if (e.length !== t.length) return !1;
                let i = 0;
                for (let r = 0; r < e.length; r++) i |= e[r] ^ t[r];
                return 0 === i;
              })(o, c)
            )
              throw Error("invalid tag");
            return a.set(s.subarray(0, -16)), e(t, i, a, a, 1), iF(c), a;
          },
        }))(i5)
      );
      class i7 extends tZ {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), tM(e);
          let i = tY(t);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let r = this.blockLen,
            s = new Uint8Array(r);
          s.set(i.length > r ? e.create().update(i).digest() : i);
          for (let e = 0; e < s.length; e++) s[e] ^= 54;
          this.iHash.update(s), (this.oHash = e.create());
          for (let e = 0; e < s.length; e++) s[e] ^= 106;
          this.oHash.update(s), s.fill(0);
        }
        update(e) {
          return tL(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          tL(this),
            t$(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: t,
            iHash: i,
            finished: r,
            destroyed: s,
            blockLen: a,
            outputLen: n,
          } = this;
          return (
            (e.finished = r),
            (e.destroyed = s),
            (e.blockLen = a),
            (e.outputLen = n),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = i._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let re = (e, t, i) => new i7(e, t).update(i).digest();
      re.create = (e, t) => new i7(e, t);
      let rt = new Uint8Array([0]),
        ri = new Uint8Array(),
        rr = (e, t, i, r, s) =>
          (function (e, t, i, r = 32) {
            if ((tM(e), tD(r), r > 255 * e.outputLen))
              throw Error("Length should be <= 255*HashLen");
            let s = Math.ceil(r / e.outputLen);
            void 0 === i && (i = ri);
            let a = new Uint8Array(s * e.outputLen),
              n = re.create(e, t),
              o = n._cloneInto(),
              c = new Uint8Array(n.outputLen);
            for (let t = 0; t < s; t++)
              (rt[0] = t + 1),
                o
                  .update(0 === t ? ri : c)
                  .update(i)
                  .update(rt)
                  .digestInto(c),
                a.set(c, e.outputLen * t),
                n._cloneInto(o);
            return (
              n.destroy(), o.destroy(), c.fill(0), rt.fill(0), a.slice(0, r)
            );
          })(
            e,
            (function (e, t, i) {
              return (
                tM(e),
                void 0 === i && (i = new Uint8Array(e.outputLen)),
                re(e, tY(i), tY(t))
              );
            })(e, t, i),
            r,
            s
          );
      class rs extends tZ {
        constructor(e, t, i, r) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = i),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = tK(this.buffer));
        }
        update(e) {
          tL(this);
          let { view: t, buffer: i, blockLen: r } = this,
            s = (e = tY(e)).length;
          for (let a = 0; a < s; ) {
            let n = Math.min(r - this.pos, s - a);
            if (n === r) {
              let t = tK(e);
              for (; r <= s - a; a += r) this.process(t, a);
              continue;
            }
            i.set(e.subarray(a, a + n), this.pos),
              (this.pos += n),
              (a += n),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          tL(this), tj(e, this), (this.finished = !0);
          let { buffer: t, view: i, blockLen: r, isLE: s } = this,
            { pos: a } = this;
          (t[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > r - a && (this.process(i, 0), (a = 0));
          for (let e = a; e < r; e++) t[e] = 0;
          (function (e, t, i, r) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, i, r);
            let s = BigInt(32),
              a = BigInt(0xffffffff),
              n = Number((i >> s) & a),
              o = Number(i & a),
              c = 4 * !!r,
              l = 4 * !r;
            e.setUint32(t + c, n, r), e.setUint32(t + l, o, r);
          })(i, r - 8, BigInt(8 * this.length), s),
            this.process(i, 0);
          let n = tK(e),
            o = this.outputLen;
          if (o % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let c = o / 4,
            l = this.get();
          if (c > l.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < c; e++) n.setUint32(4 * e, l[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let i = e.slice(0, t);
          return this.destroy(), i;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: i,
            length: r,
            finished: s,
            destroyed: a,
            pos: n,
          } = this;
          return (
            (e.length = r),
            (e.pos = n),
            (e.finished = s),
            (e.destroyed = a),
            r % t && e.buffer.set(i),
            e
          );
        }
      }
      let ra = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        rn = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        ro = new Uint32Array(64);
      class rc extends rs {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | rn[0]),
            (this.B = 0 | rn[1]),
            (this.C = 0 | rn[2]),
            (this.D = 0 | rn[3]),
            (this.E = 0 | rn[4]),
            (this.F = 0 | rn[5]),
            (this.G = 0 | rn[6]),
            (this.H = 0 | rn[7]);
        }
        get() {
          let { A: e, B: t, C: i, D: r, E: s, F: a, G: n, H: o } = this;
          return [e, t, i, r, s, a, n, o];
        }
        set(e, t, i, r, s, a, n, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | i),
            (this.D = 0 | r),
            (this.E = 0 | s),
            (this.F = 0 | a),
            (this.G = 0 | n),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let i = 0; i < 16; i++, t += 4) ro[i] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = ro[e - 15],
              i = ro[e - 2],
              r = tG(t, 7) ^ tG(t, 18) ^ (t >>> 3),
              s = tG(i, 17) ^ tG(i, 19) ^ (i >>> 10);
            ro[e] = (s + ro[e - 7] + r + ro[e - 16]) | 0;
          }
          let { A: i, B: r, C: s, D: a, E: n, F: o, G: c, H: l } = this;
          for (let e = 0; e < 64; e++) {
            var h, d, u, p;
            let t =
                (l +
                  (tG(n, 6) ^ tG(n, 11) ^ tG(n, 25)) +
                  (((h = n) & o) ^ (~h & c)) +
                  ra[e] +
                  ro[e]) |
                0,
              g =
                ((tG(i, 2) ^ tG(i, 13) ^ tG(i, 22)) +
                  (((d = i) & (u = r)) ^ (d & (p = s)) ^ (u & p))) |
                0;
            (l = c),
              (c = o),
              (o = n),
              (n = (a + t) | 0),
              (a = s),
              (s = r),
              (r = i),
              (i = (t + g) | 0);
          }
          (i = (i + this.A) | 0),
            (r = (r + this.B) | 0),
            (s = (s + this.C) | 0),
            (a = (a + this.D) | 0),
            (n = (n + this.E) | 0),
            (o = (o + this.F) | 0),
            (c = (c + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(i, r, s, a, n, o, c, l);
        }
        roundClean() {
          ro.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let rl = tQ(() => new rc()),
        rh = BigInt(0),
        rd = BigInt(1),
        ru = BigInt(2);
      function rp(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function rg(e) {
        if (!rp(e)) throw Error("Uint8Array expected");
      }
      function rf(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      let rm = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function rw(e) {
        rg(e);
        let t = "";
        for (let i = 0; i < e.length; i++) t += rm[e[i]];
        return t;
      }
      function ry(e) {
        let t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function rb(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? rh : BigInt("0x" + e);
      }
      let rv = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function rE(e) {
        return e >= rv._0 && e <= rv._9
          ? e - rv._0
          : e >= rv.A && e <= rv.F
          ? e - (rv.A - 10)
          : e >= rv.a && e <= rv.f
          ? e - (rv.a - 10)
          : void 0;
      }
      function rC(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length,
          i = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let r = new Uint8Array(i);
        for (let t = 0, s = 0; t < i; t++, s += 2) {
          let i = rE(e.charCodeAt(s)),
            a = rE(e.charCodeAt(s + 1));
          if (void 0 === i || void 0 === a)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[s] + e[s + 1]) +
                '" at index ' +
                s
            );
          r[t] = 16 * i + a;
        }
        return r;
      }
      function rI(e) {
        return rb(rw(e));
      }
      function rN(e) {
        return rg(e), rb(rw(Uint8Array.from(e).reverse()));
      }
      function rA(e, t) {
        return rC(e.toString(16).padStart(2 * t, "0"));
      }
      function r_(e, t) {
        return rA(e, t).reverse();
      }
      function rS(e, t, i) {
        let r;
        if ("string" == typeof t)
          try {
            r = rC(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if (rp(t)) r = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let s = r.length;
        if ("number" == typeof i && s !== i)
          throw Error(e + " of length " + i + " expected, got " + s);
        return r;
      }
      function rP(...e) {
        let t = 0;
        for (let i = 0; i < e.length; i++) {
          let r = e[i];
          rg(r), (t += r.length);
        }
        let i = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let s = e[t];
          i.set(s, r), (r += s.length);
        }
        return i;
      }
      let rO = (e) => "bigint" == typeof e && rh <= e;
      function rT(e, t, i) {
        return rO(e) && rO(t) && rO(i) && t <= e && e < i;
      }
      function rk(e, t, i, r) {
        if (!rT(t, i, r))
          throw Error(
            "expected valid " + e + ": " + i + " <= n < " + r + ", got " + t
          );
      }
      function rx(e) {
        let t;
        for (t = 0; e > rh; e >>= rd, t += 1);
        return t;
      }
      let rR = (e) => (ru << BigInt(e - 1)) - rd,
        rU = (e) => new Uint8Array(e),
        rD = (e) => Uint8Array.from(e);
      function r$(e, t, i) {
        if ("number" != typeof e || e < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof t || t < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof i) throw Error("hmacFn must be a function");
        let r = rU(e),
          s = rU(e),
          a = 0,
          n = () => {
            r.fill(1), s.fill(0), (a = 0);
          },
          o = (...e) => i(s, r, ...e),
          c = (e = rU()) => {
            (s = o(rD([0]), e)),
              (r = o()),
              0 !== e.length && ((s = o(rD([1]), e)), (r = o()));
          },
          l = () => {
            if (a++ >= 1e3) throw Error("drbg: tried 1000 values");
            let e = 0,
              i = [];
            for (; e < t; ) {
              let t = (r = o()).slice();
              i.push(t), (e += r.length);
            }
            return rP(...i);
          };
        return (e, t) => {
          let i;
          for (n(), c(e); !(i = t(l())); ) c();
          return n(), i;
        };
      }
      let rM = {
        bigint: (e) => "bigint" == typeof e,
        function: (e) => "function" == typeof e,
        boolean: (e) => "boolean" == typeof e,
        string: (e) => "string" == typeof e,
        stringOrUint8Array: (e) => "string" == typeof e || rp(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          "function" == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function rL(e, t, i = {}) {
        let r = (t, i, r) => {
          let s = rM[i];
          if ("function" != typeof s) throw Error("invalid validator function");
          let a = e[t];
          if (!(r && void 0 === a) && !s(a, e))
            throw Error(
              "param " + String(t) + " is invalid. Expected " + i + ", got " + a
            );
        };
        for (let [e, i] of Object.entries(t)) r(e, i, !1);
        for (let [e, t] of Object.entries(i)) r(e, t, !0);
        return e;
      }
      function rj(e) {
        let t = new WeakMap();
        return (i, ...r) => {
          let s = t.get(i);
          if (void 0 !== s) return s;
          let a = e(i, ...r);
          return t.set(i, a), a;
        };
      }
      var rW = Object.freeze({
        __proto__: null,
        isBytes: rp,
        abytes: rg,
        abool: rf,
        bytesToHex: rw,
        numberToHexUnpadded: ry,
        hexToNumber: rb,
        hexToBytes: rC,
        bytesToNumberBE: rI,
        bytesToNumberLE: rN,
        numberToBytesBE: rA,
        numberToBytesLE: r_,
        numberToVarBytesBE: function (e) {
          return rC(ry(e));
        },
        ensureBytes: rS,
        concatBytes: rP,
        equalBytes: function (e, t) {
          if (e.length !== t.length) return !1;
          let i = 0;
          for (let r = 0; r < e.length; r++) i |= e[r] ^ t[r];
          return 0 === i;
        },
        utf8ToBytes: function (e) {
          if ("string" != typeof e) throw Error("string expected");
          return new Uint8Array(new TextEncoder().encode(e));
        },
        inRange: rT,
        aInRange: rk,
        bitLen: rx,
        bitGet: function (e, t) {
          return (e >> BigInt(t)) & rd;
        },
        bitSet: function (e, t, i) {
          return e | ((i ? rd : rh) << BigInt(t));
        },
        bitMask: rR,
        createHmacDrbg: r$,
        validateObject: rL,
        notImplemented: () => {
          throw Error("not implemented");
        },
        memoized: rj,
      });
      let rB = BigInt(0),
        rq = BigInt(1),
        rH = BigInt(2),
        rF = BigInt(3),
        rz = BigInt(4),
        rV = BigInt(5),
        rK = BigInt(8);
      function rG(e, t) {
        let i = e % t;
        return i >= rB ? i : t + i;
      }
      function rJ(e, t, i) {
        if (t < rB) throw Error("invalid exponent, negatives unsupported");
        if (i <= rB) throw Error("invalid modulus");
        if (i === rq) return rB;
        let r = rq;
        for (; t > rB; )
          t & rq && (r = (r * e) % i), (e = (e * e) % i), (t >>= rq);
        return r;
      }
      function rX(e, t, i) {
        let r = e;
        for (; t-- > rB; ) (r *= r), (r %= i);
        return r;
      }
      function rY(e, t) {
        if (e === rB) throw Error("invert: expected non-zero number");
        if (t <= rB) throw Error("invert: expected positive modulus, got " + t);
        let i = rG(e, t),
          r = t,
          s = rB,
          a = rq;
        for (; i !== rB; ) {
          let e = r / i,
            t = r % i,
            n = s - a * e;
          (r = i), (i = t), (s = a), (a = n);
        }
        if (r !== rq) throw Error("invert: does not exist");
        return rG(s, t);
      }
      let rZ = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function rQ(e, t) {
        let i = void 0 !== t ? t : e.toString(2).length,
          r = Math.ceil(i / 8);
        return { nBitLength: i, nByteLength: r };
      }
      function r0(e, t, i = !1, r = {}) {
        let s;
        if (e <= rB) throw Error("invalid field: expected ORDER > 0, got " + e);
        let { nBitLength: a, nByteLength: n } = rQ(e, t);
        if (n > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let o = Object.freeze({
          ORDER: e,
          isLE: i,
          BITS: a,
          BYTES: n,
          MASK: rR(a),
          ZERO: rB,
          ONE: rq,
          create: (t) => rG(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return rB <= t && t < e;
          },
          is0: (e) => e === rB,
          isOdd: (e) => (e & rq) === rq,
          neg: (t) => rG(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => rG(t * t, e),
          add: (t, i) => rG(t + i, e),
          sub: (t, i) => rG(t - i, e),
          mul: (t, i) => rG(t * i, e),
          pow: (e, t) =>
            (function (e, t, i) {
              if (i < rB)
                throw Error("invalid exponent, negatives unsupported");
              if (i === rB) return e.ONE;
              if (i === rq) return t;
              let r = e.ONE,
                s = t;
              for (; i > rB; )
                i & rq && (r = e.mul(r, s)), (s = e.sqr(s)), (i >>= rq);
              return r;
            })(o, e, t),
          div: (t, i) => rG(t * rY(i, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => rY(t, e),
          sqrt:
            r.sqrt ||
            ((t) => (
              s ||
                (s = (function (e) {
                  if (e % rz === rF) {
                    let t = (e + rq) / rz;
                    return function (e, i) {
                      let r = e.pow(i, t);
                      if (!e.eql(e.sqr(r), i))
                        throw Error("Cannot find square root");
                      return r;
                    };
                  }
                  if (e % rK === rV) {
                    let t = (e - rV) / rK;
                    return function (e, i) {
                      let r = e.mul(i, rH),
                        s = e.pow(r, t),
                        a = e.mul(i, s),
                        n = e.mul(e.mul(a, rH), s),
                        o = e.mul(a, e.sub(n, e.ONE));
                      if (!e.eql(e.sqr(o), i))
                        throw Error("Cannot find square root");
                      return o;
                    };
                  }
                  return (function (e) {
                    let t,
                      i,
                      r,
                      s = (e - rq) / rH;
                    for (t = e - rq, i = 0; t % rH === rB; t /= rH, i++);
                    for (r = rH; r < e && rJ(r, s, e) !== e - rq; r++)
                      if (r > 1e3)
                        throw Error(
                          "Cannot find square root: likely non-prime P"
                        );
                    if (1 === i) {
                      let t = (e + rq) / rz;
                      return function (e, i) {
                        let r = e.pow(i, t);
                        if (!e.eql(e.sqr(r), i))
                          throw Error("Cannot find square root");
                        return r;
                      };
                    }
                    let a = (t + rq) / rH;
                    return function (e, n) {
                      if (e.pow(n, s) === e.neg(e.ONE))
                        throw Error("Cannot find square root");
                      let o = i,
                        c = e.pow(e.mul(e.ONE, r), t),
                        l = e.pow(n, a),
                        h = e.pow(n, t);
                      for (; !e.eql(h, e.ONE); ) {
                        if (e.eql(h, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let i = e.sqr(h); t < o && !e.eql(i, e.ONE); t++)
                          i = e.sqr(i);
                        let i = e.pow(c, rq << BigInt(o - t - 1));
                        (c = e.sqr(i)),
                          (l = e.mul(l, i)),
                          (h = e.mul(h, c)),
                          (o = t);
                      }
                      return l;
                    };
                  })(e);
                })(e)),
              s(o, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let i = Array(t.length),
                r = t.reduce(
                  (t, r, s) => (e.is0(r) ? t : ((i[s] = t), e.mul(t, r))),
                  e.ONE
                ),
                s = e.inv(r);
              return (
                t.reduceRight(
                  (t, r, s) =>
                    e.is0(r) ? t : ((i[s] = e.mul(t, i[s])), e.mul(t, r)),
                  s
                ),
                i
              );
            })(o, e),
          cmov: (e, t, i) => (i ? t : e),
          toBytes: (e) => (i ? r_(e, n) : rA(e, n)),
          fromBytes: (e) => {
            if (e.length !== n)
              throw Error(
                "Field.fromBytes: expected " + n + " bytes, got " + e.length
              );
            return i ? rN(e) : rI(e);
          },
        });
        return Object.freeze(o);
      }
      function r1(e) {
        if ("bigint" != typeof e) throw Error("field order must be bigint");
        return Math.ceil(e.toString(2).length / 8);
      }
      function r2(e) {
        let t = r1(e);
        return t + Math.ceil(t / 2);
      }
      let r5 = BigInt(0),
        r3 = BigInt(1);
      function r8(e, t) {
        let i = t.negate();
        return e ? i : t;
      }
      function r6(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function r4(e, t) {
        return (
          r6(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) }
        );
      }
      let r9 = new WeakMap(),
        r7 = new WeakMap();
      function se(e) {
        return r7.get(e) || 1;
      }
      function st(e) {
        return (
          rL(
            e.Fp,
            rZ.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            })
          ),
          rL(
            e,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({ ...rQ(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      BigInt(0), BigInt(1), BigInt(2), BigInt(8);
      let si = BigInt(0),
        sr = BigInt(1),
        ss = BigInt(
          "57896044618658097711785492504343953926634992332820282019728792003956564819949"
        );
      BigInt(0);
      let sa = BigInt(1),
        sn = BigInt(2),
        so = BigInt(3),
        sc = BigInt(5);
      BigInt(8);
      let sl = (function (e) {
        let t =
            (rL(
              e,
              { a: "bigint" },
              {
                montgomeryBits: "isSafeInteger",
                nByteLength: "isSafeInteger",
                adjustScalarBytes: "function",
                domain: "function",
                powPminus2: "function",
                Gu: "bigint",
              }
            ),
            Object.freeze({ ...e })),
          { P: i } = t,
          r = (e) => rG(e, i),
          s = t.montgomeryBits,
          a = Math.ceil(s / 8),
          n = t.nByteLength,
          o = t.adjustScalarBytes || ((e) => e),
          c = t.powPminus2 || ((e) => rJ(e, i - BigInt(2), i));
        function l(e, t, i) {
          let s = r(e * (t - i));
          return [(t = r(t - s)), (i = r(i + s))];
        }
        let h = (t.a - BigInt(2)) / BigInt(4);
        function d(e, t) {
          let d = (function (e, t) {
            rk("u", e, si, i), rk("scalar", t, si, i);
            let a = sr,
              n = si,
              o = e,
              d = sr,
              u = si,
              p;
            for (let i = BigInt(s - 1); i >= si; i--) {
              let s = (t >> i) & sr;
              (u ^= s),
                (a = (p = l(u, a, o))[0]),
                (o = p[1]),
                (n = (p = l(u, n, d))[0]),
                (d = p[1]),
                (u = s);
              let c = a + n,
                g = r(c * c),
                f = a - n,
                m = r(f * f),
                w = g - m,
                y = o + d,
                b = r((o - d) * c),
                v = r(y * f),
                E = b + v,
                C = b - v;
              (o = r(E * E)),
                (d = r(e * r(C * C))),
                (a = r(g * m)),
                (n = r(w * (g + r(h * w))));
            }
            return (
              (a = (p = l(u, a, o))[0]),
              (o = p[1]),
              (n = (p = l(u, n, d))[0]),
              (d = p[1]),
              r(a * c(n))
            );
          })(
            (function (e) {
              let t = rS("u coordinate", e, a);
              return 32 === n && (t[31] &= 127), rN(t);
            })(t),
            (function (e) {
              let t = rS("scalar", e),
                i = t.length;
              if (i !== a && i !== n)
                throw Error(
                  "invalid scalar, expected " +
                    ("" + a + " or ") +
                    n +
                    " bytes, got " +
                    i
                );
              return rN(o(t));
            })(e)
          );
          if (d === si) throw Error("invalid private or public key received");
          return r_(r(d), a);
        }
        let u = r_(r(t.Gu), a);
        function p(e) {
          return d(e, u);
        }
        return {
          scalarMult: d,
          scalarMultBase: p,
          getSharedSecret: (e, t) => d(e, t),
          getPublicKey: (e) => p(e),
          utils: { randomPrivateKey: () => t.randomBytes(t.nByteLength) },
          GuBytes: u,
        };
      })({
        P: ss,
        a: BigInt(486662),
        montgomeryBits: 255,
        nByteLength: 32,
        Gu: BigInt(9),
        powPminus2: (e) => {
          let { pow_p_5_8: t, b2: i } = (function (e) {
            let t = BigInt(10),
              i = BigInt(20),
              r = BigInt(40),
              s = BigInt(80),
              a = (((e * e) % ss) * e) % ss,
              n = (rX(a, sn, ss) * a) % ss,
              o = (rX(n, sa, ss) * e) % ss,
              c = (rX(o, sc, ss) * o) % ss,
              l = (rX(c, t, ss) * c) % ss,
              h = (rX(l, i, ss) * l) % ss,
              d = (rX(h, r, ss) * h) % ss,
              u = (rX(d, s, ss) * d) % ss,
              p = (rX(u, s, ss) * d) % ss,
              g = (rX(p, t, ss) * c) % ss;
            return { pow_p_5_8: (rX(g, sn, ss) * e) % ss, b2: a };
          })(e);
          return rG(rX(t, so, ss) * i, ss);
        },
        adjustScalarBytes: function (e) {
          return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
        },
        randomBytes: t0,
      });
      function sh(e) {
        void 0 !== e.lowS && rf("lowS", e.lowS),
          void 0 !== e.prehash && rf("prehash", e.prehash);
      }
      let { bytesToNumberBE: sd, hexToBytes: su } = rW;
      class sp extends Error {
        constructor(e = "") {
          super(e);
        }
      }
      let sg = {
          Err: sp,
          _tlv: {
            encode: (e, t) => {
              let { Err: i } = sg;
              if (e < 0 || e > 256) throw new i("tlv.encode: wrong tag");
              if (1 & t.length) throw new i("tlv.encode: unpadded data");
              let r = t.length / 2,
                s = ry(r);
              if ((s.length / 2) & 128)
                throw new i("tlv.encode: long form length too big");
              let a = r > 127 ? ry((s.length / 2) | 128) : "";
              return ry(e) + a + s + t;
            },
            decode(e, t) {
              let { Err: i } = sg,
                r = 0;
              if (e < 0 || e > 256) throw new i("tlv.encode: wrong tag");
              if (t.length < 2 || t[r++] !== e)
                throw new i("tlv.decode: wrong tlv");
              let s = t[r++],
                a = 0;
              if (128 & s) {
                let e = 127 & s;
                if (!e)
                  throw new i(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (e > 4)
                  throw new i("tlv.decode(long): byte length is too big");
                let n = t.subarray(r, r + e);
                if (n.length !== e)
                  throw new i("tlv.decode: length bytes not complete");
                if (0 === n[0])
                  throw new i("tlv.decode(long): zero leftmost byte");
                for (let e of n) a = (a << 8) | e;
                if (((r += e), a < 128))
                  throw new i("tlv.decode(long): not minimal encoding");
              } else a = s;
              let n = t.subarray(r, r + a);
              if (n.length !== a) throw new i("tlv.decode: wrong value length");
              return { v: n, l: t.subarray(r + a) };
            },
          },
          _int: {
            encode(e) {
              let { Err: t } = sg;
              if (e < sf)
                throw new t("integer: negative integers are not allowed");
              let i = ry(e);
              if (
                (8 & Number.parseInt(i[0], 16) && (i = "00" + i), 1 & i.length)
              )
                throw new t("unexpected DER parsing assertion: unpadded hex");
              return i;
            },
            decode(e) {
              let { Err: t } = sg;
              if (128 & e[0])
                throw new t("invalid signature integer: negative");
              if (0 === e[0] && !(128 & e[1]))
                throw new t(
                  "invalid signature integer: unnecessary leading zero"
                );
              return sd(e);
            },
          },
          toSig(e) {
            let { Err: t, _int: i, _tlv: r } = sg,
              s = "string" == typeof e ? su(e) : e;
            rg(s);
            let { v: a, l: n } = r.decode(48, s);
            if (n.length)
              throw new t("invalid signature: left bytes after parsing");
            let { v: o, l: c } = r.decode(2, a),
              { v: l, l: h } = r.decode(2, c);
            if (h.length)
              throw new t("invalid signature: left bytes after parsing");
            return { r: i.decode(o), s: i.decode(l) };
          },
          hexFromSig(e) {
            let { _tlv: t, _int: i } = sg,
              r = t.encode(2, i.encode(e.r)),
              s = t.encode(2, i.encode(e.s));
            return t.encode(48, r + s);
          },
        },
        sf = BigInt(0),
        sm = BigInt(1);
      BigInt(2);
      let sw = BigInt(3);
      BigInt(4);
      let sy = r0(
          BigInt(
            "0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"
          )
        ),
        sb = (function (e, t) {
          let i = (t) =>
            (function (e) {
              let t = (function (e) {
                  let t = st(e);
                  return (
                    rL(
                      t,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      }
                    ),
                    Object.freeze({ lowS: !0, ...t })
                  );
                })(e),
                { Fp: i, n: r } = t,
                s = i.BYTES + 1,
                a = 2 * i.BYTES + 1;
              function n(e) {
                return rG(e, r);
              }
              let {
                  ProjectivePoint: o,
                  normPrivateKeyToScalar: c,
                  weierstrassEquation: l,
                  isWithinCurveOrder: h,
                } = (function (e) {
                  var t;
                  let i = (function (e) {
                      let t = st(e);
                      rL(
                        t,
                        { a: "field", b: "field" },
                        {
                          allowedPrivateKeyLengths: "array",
                          wrapPrivateKey: "boolean",
                          isTorsionFree: "function",
                          clearCofactor: "function",
                          allowInfinityPoint: "boolean",
                          fromBytes: "function",
                          toBytes: "function",
                        }
                      );
                      let { endo: i, Fp: r, a: s } = t;
                      if (i) {
                        if (!r.eql(s, r.ZERO))
                          throw Error(
                            "invalid endomorphism, can only be defined for Koblitz curves that have a=0"
                          );
                        if (
                          "object" != typeof i ||
                          "bigint" != typeof i.beta ||
                          "function" != typeof i.splitScalar
                        )
                          throw Error(
                            "invalid endomorphism, expected beta: bigint and splitScalar: function"
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: r } = i,
                    s = r0(i.n, i.nBitLength),
                    a =
                      i.toBytes ||
                      ((e, t, i) => {
                        let s = t.toAffine();
                        return rP(
                          Uint8Array.from([4]),
                          r.toBytes(s.x),
                          r.toBytes(s.y)
                        );
                      }),
                    n =
                      i.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: r.fromBytes(t.subarray(0, r.BYTES)),
                          y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function o(e) {
                    let { a: t, b: s } = i,
                      a = r.sqr(e),
                      n = r.mul(a, e);
                    return r.add(r.add(n, r.mul(e, t)), s);
                  }
                  if (!r.eql(r.sqr(i.Gy), o(i.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function c(e) {
                    let t,
                      {
                        allowedPrivateKeyLengths: r,
                        nByteLength: s,
                        wrapPrivateKey: a,
                        n: n,
                      } = i;
                    if (r && "bigint" != typeof e) {
                      if (
                        (rp(e) && (e = rw(e)),
                        "string" != typeof e || !r.includes(e.length))
                      )
                        throw Error("invalid private key");
                      e = e.padStart(2 * s, "0");
                    }
                    try {
                      t =
                        "bigint" == typeof e ? e : rI(rS("private key", e, s));
                    } catch {
                      throw Error(
                        "invalid private key, expected hex or " +
                          s +
                          " bytes, got " +
                          typeof e
                      );
                    }
                    return a && (t = rG(t, n)), rk("private key", t, sm, n), t;
                  }
                  function l(e) {
                    if (!(e instanceof u))
                      throw Error("ProjectivePoint expected");
                  }
                  let h = rj((e, t) => {
                      let { px: i, py: s, pz: a } = e;
                      if (r.eql(a, r.ONE)) return { x: i, y: s };
                      let n = e.is0();
                      null == t && (t = n ? r.ONE : r.inv(a));
                      let o = r.mul(i, t),
                        c = r.mul(s, t),
                        l = r.mul(a, t);
                      if (n) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(l, r.ONE)) throw Error("invZ was invalid");
                      return { x: o, y: c };
                    }),
                    d = rj((e) => {
                      if (e.is0()) {
                        if (i.allowInfinityPoint && !r.is0(e.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: t, y: s } = e.toAffine();
                      if (!r.isValid(t) || !r.isValid(s))
                        throw Error("bad point: x or y not FE");
                      let a = r.sqr(s),
                        n = o(t);
                      if (!r.eql(a, n))
                        throw Error("bad point: equation left != right");
                      if (!e.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  class u {
                    constructor(e, t, i) {
                      if (
                        ((this.px = e),
                        (this.py = t),
                        (this.pz = i),
                        null == e || !r.isValid(e))
                      )
                        throw Error("x required");
                      if (null == t || !r.isValid(t)) throw Error("y required");
                      if (null == i || !r.isValid(i)) throw Error("z required");
                      Object.freeze(this);
                    }
                    static fromAffine(e) {
                      let { x: t, y: i } = e || {};
                      if (!e || !r.isValid(t) || !r.isValid(i))
                        throw Error("invalid affine point");
                      if (e instanceof u)
                        throw Error("projective point not allowed");
                      let s = (e) => r.eql(e, r.ZERO);
                      return s(t) && s(i) ? u.ZERO : new u(t, i, r.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = r.invertBatch(e.map((e) => e.pz));
                      return e
                        .map((e, i) => e.toAffine(t[i]))
                        .map(u.fromAffine);
                    }
                    static fromHex(e) {
                      let t = u.fromAffine(n(rS("pointHex", e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return u.BASE.multiply(c(e));
                    }
                    static msm(e, t) {
                      return (function (e, t, i, r) {
                        if (
                          ((function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array expected");
                            e.forEach((e, i) => {
                              if (!(e instanceof t))
                                throw Error("invalid point at index " + i);
                            });
                          })(i, e),
                          (function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array of scalars expected");
                            e.forEach((e, i) => {
                              if (!t.isValid(e))
                                throw Error("invalid scalar at index " + i);
                            });
                          })(r, t),
                          i.length !== r.length)
                        )
                          throw Error(
                            "arrays of points and scalars must have equal length"
                          );
                        let s = e.ZERO,
                          a = rx(BigInt(i.length)),
                          n = a > 12 ? a - 3 : a > 4 ? a - 2 : a ? 2 : 1,
                          o = (1 << n) - 1,
                          c = Array(o + 1).fill(s),
                          l = Math.floor((t.BITS - 1) / n) * n,
                          h = s;
                        for (let e = l; e >= 0; e -= n) {
                          c.fill(s);
                          for (let t = 0; t < r.length; t++) {
                            let s = Number((r[t] >> BigInt(e)) & BigInt(o));
                            c[s] = c[s].add(i[t]);
                          }
                          let t = s;
                          for (let e = c.length - 1, i = s; e > 0; e--)
                            (i = i.add(c[e])), (t = t.add(i));
                          if (((h = h.add(t)), 0 !== e))
                            for (let e = 0; e < n; e++) h = h.double();
                        }
                        return h;
                      })(u, s, e, t);
                    }
                    _setWindowSize(e) {
                      g.setWindowSize(this, e);
                    }
                    assertValidity() {
                      d(this);
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      l(e);
                      let { px: t, py: i, pz: s } = this,
                        { px: a, py: n, pz: o } = e,
                        c = r.eql(r.mul(t, o), r.mul(a, s)),
                        h = r.eql(r.mul(i, o), r.mul(n, s));
                      return c && h;
                    }
                    negate() {
                      return new u(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: t } = i,
                        s = r.mul(t, sw),
                        { px: a, py: n, pz: o } = this,
                        c = r.ZERO,
                        l = r.ZERO,
                        h = r.ZERO,
                        d = r.mul(a, a),
                        p = r.mul(n, n),
                        g = r.mul(o, o),
                        f = r.mul(a, n);
                      return (
                        (f = r.add(f, f)),
                        (h = r.mul(a, o)),
                        (h = r.add(h, h)),
                        (c = r.mul(e, h)),
                        (l = r.mul(s, g)),
                        (l = r.add(c, l)),
                        (c = r.sub(p, l)),
                        (l = r.add(p, l)),
                        (l = r.mul(c, l)),
                        (c = r.mul(f, c)),
                        (h = r.mul(s, h)),
                        (g = r.mul(e, g)),
                        (f = r.sub(d, g)),
                        (f = r.mul(e, f)),
                        (f = r.add(f, h)),
                        (h = r.add(d, d)),
                        (d = r.add(h, d)),
                        (d = r.add(d, g)),
                        (d = r.mul(d, f)),
                        (l = r.add(l, d)),
                        (g = r.mul(n, o)),
                        (g = r.add(g, g)),
                        (d = r.mul(g, f)),
                        (c = r.sub(c, d)),
                        (h = r.mul(g, p)),
                        (h = r.add(h, h)),
                        new u(c, l, (h = r.add(h, h)))
                      );
                    }
                    add(e) {
                      l(e);
                      let { px: t, py: s, pz: a } = this,
                        { px: n, py: o, pz: c } = e,
                        h = r.ZERO,
                        d = r.ZERO,
                        p = r.ZERO,
                        g = i.a,
                        f = r.mul(i.b, sw),
                        m = r.mul(t, n),
                        w = r.mul(s, o),
                        y = r.mul(a, c),
                        b = r.add(t, s),
                        v = r.add(n, o);
                      (b = r.mul(b, v)),
                        (v = r.add(m, w)),
                        (b = r.sub(b, v)),
                        (v = r.add(t, a));
                      let E = r.add(n, c);
                      return (
                        (v = r.mul(v, E)),
                        (E = r.add(m, y)),
                        (v = r.sub(v, E)),
                        (E = r.add(s, a)),
                        (h = r.add(o, c)),
                        (E = r.mul(E, h)),
                        (h = r.add(w, y)),
                        (E = r.sub(E, h)),
                        (p = r.mul(g, v)),
                        (h = r.mul(f, y)),
                        (p = r.add(h, p)),
                        (h = r.sub(w, p)),
                        (p = r.add(w, p)),
                        (d = r.mul(h, p)),
                        (w = r.add(m, m)),
                        (w = r.add(w, m)),
                        (y = r.mul(g, y)),
                        (v = r.mul(f, v)),
                        (w = r.add(w, y)),
                        (y = r.sub(m, y)),
                        (y = r.mul(g, y)),
                        (v = r.add(v, y)),
                        (m = r.mul(w, v)),
                        (d = r.add(d, m)),
                        (m = r.mul(E, v)),
                        (h = r.mul(b, h)),
                        (h = r.sub(h, m)),
                        (m = r.mul(b, w)),
                        (p = r.mul(E, p)),
                        new u(h, d, (p = r.add(p, m)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(u.ZERO);
                    }
                    wNAF(e) {
                      return g.wNAFCached(this, e, u.normalizeZ);
                    }
                    multiplyUnsafe(e) {
                      let { endo: t, n: s } = i;
                      rk("scalar", e, sf, s);
                      let a = u.ZERO;
                      if (e === sf) return a;
                      if (this.is0() || e === sm) return this;
                      if (!t || g.hasPrecomputes(this))
                        return g.wNAFCachedUnsafe(this, e, u.normalizeZ);
                      let {
                          k1neg: n,
                          k1: o,
                          k2neg: c,
                          k2: l,
                        } = t.splitScalar(e),
                        h = a,
                        d = a,
                        p = this;
                      for (; o > sf || l > sf; )
                        o & sm && (h = h.add(p)),
                          l & sm && (d = d.add(p)),
                          (p = p.double()),
                          (o >>= sm),
                          (l >>= sm);
                      return (
                        n && (h = h.negate()),
                        c && (d = d.negate()),
                        (d = new u(r.mul(d.px, t.beta), d.py, d.pz)),
                        h.add(d)
                      );
                    }
                    multiply(e) {
                      let t,
                        s,
                        { endo: a, n: n } = i;
                      if ((rk("scalar", e, sm, n), a)) {
                        let {
                            k1neg: i,
                            k1: n,
                            k2neg: o,
                            k2: c,
                          } = a.splitScalar(e),
                          { p: l, f: h } = this.wNAF(n),
                          { p: d, f: p } = this.wNAF(c);
                        (l = g.constTimeNegate(i, l)),
                          (d = g.constTimeNegate(o, d)),
                          (d = new u(r.mul(d.px, a.beta), d.py, d.pz)),
                          (t = l.add(d)),
                          (s = h.add(p));
                      } else {
                        let { p: i, f: r } = this.wNAF(e);
                        (t = i), (s = r);
                      }
                      return u.normalizeZ([t, s])[0];
                    }
                    multiplyAndAddUnsafe(e, t, i) {
                      let r = u.BASE,
                        s = (e, t) =>
                          t !== sf && t !== sm && e.equals(r)
                            ? e.multiply(t)
                            : e.multiplyUnsafe(t),
                        a = s(this, t).add(s(e, i));
                      return a.is0() ? void 0 : a;
                    }
                    toAffine(e) {
                      return h(this, e);
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: t } = i;
                      if (e === sm) return !0;
                      if (t) return t(u, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: t } = i;
                      return e === sm
                        ? this
                        : t
                        ? t(u, this)
                        : this.multiplyUnsafe(i.h);
                    }
                    toRawBytes(e = !0) {
                      return (
                        rf("isCompressed", e),
                        this.assertValidity(),
                        a(u, this, e)
                      );
                    }
                    toHex(e = !0) {
                      return rf("isCompressed", e), rw(this.toRawBytes(e));
                    }
                  }
                  (u.BASE = new u(i.Gx, i.Gy, r.ONE)),
                    (u.ZERO = new u(r.ZERO, r.ONE, r.ZERO));
                  let p = i.nBitLength,
                    g =
                      ((t = i.endo ? Math.ceil(p / 2) : p),
                      {
                        constTimeNegate: r8,
                        hasPrecomputes: (e) => 1 !== se(e),
                        unsafeLadder(e, t, i = u.ZERO) {
                          let r = e;
                          for (; t > r5; )
                            t & r3 && (i = i.add(r)),
                              (r = r.double()),
                              (t >>= r3);
                          return i;
                        },
                        precomputeWindow(e, i) {
                          let { windows: r, windowSize: s } = r4(i, t),
                            a = [],
                            n = e,
                            o = n;
                          for (let e = 0; e < r; e++) {
                            (o = n), a.push(o);
                            for (let e = 1; e < s; e++)
                              (o = o.add(n)), a.push(o);
                            n = o.double();
                          }
                          return a;
                        },
                        wNAF(e, i, r) {
                          let { windows: s, windowSize: a } = r4(e, t),
                            n = u.ZERO,
                            o = u.BASE,
                            c = BigInt(2 ** e - 1),
                            l = 2 ** e,
                            h = BigInt(e);
                          for (let e = 0; e < s; e++) {
                            let t = e * a,
                              s = Number(r & c);
                            (r >>= h), s > a && ((s -= l), (r += r3));
                            let d = t + Math.abs(s) - 1,
                              u = e % 2 != 0,
                              p = s < 0;
                            0 === s
                              ? (o = o.add(r8(u, i[t])))
                              : (n = n.add(r8(p, i[d])));
                          }
                          return { p: n, f: o };
                        },
                        wNAFUnsafe(e, i, r, s = u.ZERO) {
                          let { windows: a, windowSize: n } = r4(e, t),
                            o = BigInt(2 ** e - 1),
                            c = 2 ** e,
                            l = BigInt(e);
                          for (let e = 0; e < a; e++) {
                            let t = e * n;
                            if (r === r5) break;
                            let a = Number(r & o);
                            if (
                              ((r >>= l),
                              a > n && ((a -= c), (r += r3)),
                              0 === a)
                            )
                              continue;
                            let h = i[t + Math.abs(a) - 1];
                            a < 0 && (h = h.negate()), (s = s.add(h));
                          }
                          return s;
                        },
                        getPrecomputes(e, t, i) {
                          let r = r9.get(t);
                          return (
                            r ||
                              ((r = this.precomputeWindow(t, e)),
                              1 !== e && r9.set(t, i(r))),
                            r
                          );
                        },
                        wNAFCached(e, t, i) {
                          let r = se(e);
                          return this.wNAF(r, this.getPrecomputes(r, e, i), t);
                        },
                        wNAFCachedUnsafe(e, t, i, r) {
                          let s = se(e);
                          return 1 === s
                            ? this.unsafeLadder(e, t, r)
                            : this.wNAFUnsafe(
                                s,
                                this.getPrecomputes(s, e, i),
                                t,
                                r
                              );
                        },
                        setWindowSize(e, i) {
                          r6(i, t), r7.set(e, i), r9.delete(e);
                        },
                      });
                  return {
                    CURVE: i,
                    ProjectivePoint: u,
                    normPrivateKeyToScalar: c,
                    weierstrassEquation: o,
                    isWithinCurveOrder: function (e) {
                      return rT(e, sm, i.n);
                    },
                  };
                })({
                  ...t,
                  toBytes(e, t, r) {
                    let s = t.toAffine(),
                      a = i.toBytes(s.x);
                    return (
                      rf("isCompressed", r),
                      r
                        ? rP(Uint8Array.from([t.hasEvenY() ? 2 : 3]), a)
                        : rP(Uint8Array.from([4]), a, i.toBytes(s.y))
                    );
                  },
                  fromBytes(e) {
                    let t = e.length,
                      r = e[0],
                      n = e.subarray(1);
                    if (t === s && (2 === r || 3 === r)) {
                      let e,
                        t = rI(n);
                      if (!rT(t, sm, i.ORDER))
                        throw Error("Point is not on curve");
                      let s = l(t);
                      try {
                        e = i.sqrt(s);
                      } catch (e) {
                        throw Error(
                          "Point is not on curve" +
                            (e instanceof Error ? ": " + e.message : "")
                        );
                      }
                      return (
                        ((1 & r) == 1) != ((e & sm) === sm) && (e = i.neg(e)),
                        { x: t, y: e }
                      );
                    }
                    if (t === a && 4 === r)
                      return {
                        x: i.fromBytes(n.subarray(0, i.BYTES)),
                        y: i.fromBytes(n.subarray(i.BYTES, 2 * i.BYTES)),
                      };
                    throw Error(
                      "invalid Point, expected length of " +
                        s +
                        ", or uncompressed " +
                        a +
                        ", got " +
                        t
                    );
                  },
                }),
                d = (e) => rw(rA(e, t.nByteLength)),
                u = (e, t, i) => rI(e.slice(t, i));
              class p {
                constructor(e, t, i) {
                  (this.r = e),
                    (this.s = t),
                    (this.recovery = i),
                    this.assertValidity();
                }
                static fromCompact(e) {
                  let i = t.nByteLength;
                  return new p(
                    u((e = rS("compactSignature", e, 2 * i)), 0, i),
                    u(e, i, 2 * i)
                  );
                }
                static fromDER(e) {
                  let { r: t, s: i } = sg.toSig(rS("DER", e));
                  return new p(t, i);
                }
                assertValidity() {
                  rk("r", this.r, sm, r), rk("s", this.s, sm, r);
                }
                addRecoveryBit(e) {
                  return new p(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: s, s: a, recovery: c } = this,
                    l = m(rS("msgHash", e));
                  if (null == c || ![0, 1, 2, 3].includes(c))
                    throw Error("recovery id invalid");
                  let h = 2 === c || 3 === c ? s + t.n : s;
                  if (h >= i.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let u = (1 & c) == 0 ? "02" : "03",
                    p = o.fromHex(u + d(h)),
                    g = rY(h, r),
                    f = n(-l * g),
                    w = n(a * g),
                    y = o.BASE.multiplyAndAddUnsafe(p, f, w);
                  if (!y) throw Error("point at infinify");
                  return y.assertValidity(), y;
                }
                hasHighS() {
                  return this.s > r >> sm;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new p(this.r, n(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return rC(this.toDERHex());
                }
                toDERHex() {
                  return sg.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return rC(this.toCompactHex());
                }
                toCompactHex() {
                  return d(this.r) + d(this.s);
                }
              }
              function g(e) {
                let t = rp(e),
                  i = "string" == typeof e,
                  r = (t || i) && e.length;
                return t
                  ? r === s || r === a
                  : i
                  ? r === 2 * s || r === 2 * a
                  : e instanceof o;
              }
              let f =
                  t.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error("input is too large");
                    let i = rI(e),
                      r = 8 * e.length - t.nBitLength;
                    return r > 0 ? i >> BigInt(r) : i;
                  },
                m =
                  t.bits2int_modN ||
                  function (e) {
                    return n(f(e));
                  },
                w = rR(t.nBitLength);
              function y(e) {
                return (
                  rk("num < 2^" + t.nBitLength, e, sf, w), rA(e, t.nByteLength)
                );
              }
              let b = { lowS: t.lowS, prehash: !1 },
                v = { lowS: t.lowS, prehash: !1 };
              return (
                o.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return o.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, i = !0) {
                    if (g(e)) throw Error("first arg must be private key");
                    if (!g(t)) throw Error("second arg must be public key");
                    return o.fromHex(t).multiply(c(e)).toRawBytes(i);
                  },
                  sign: function (e, s, a = b) {
                    let { seed: l, k2sig: d } = (function (e, s, a = b) {
                      if (["recovered", "canonical"].some((e) => e in a))
                        throw Error("sign() legacy options not supported");
                      let { hash: l, randomBytes: d } = t,
                        { lowS: u, prehash: g, extraEntropy: w } = a;
                      null == u && (u = !0),
                        (e = rS("msgHash", e)),
                        sh(a),
                        g && (e = rS("prehashed msgHash", l(e)));
                      let v = m(e),
                        E = c(s),
                        C = [y(E), y(v)];
                      if (null != w && !1 !== w) {
                        let e = !0 === w ? d(i.BYTES) : w;
                        C.push(rS("extraEntropy", e));
                      }
                      return {
                        seed: rP(...C),
                        k2sig: function (e) {
                          var t;
                          let i = f(e);
                          if (!h(i)) return;
                          let s = rY(i, r),
                            a = o.BASE.multiply(i).toAffine(),
                            c = n(a.x);
                          if (c === sf) return;
                          let l = n(s * n(v + c * E));
                          if (l === sf) return;
                          let d = (2 * (a.x !== c)) | Number(a.y & sm),
                            g = l;
                          return (
                            u &&
                              l > r >> sm &&
                              ((g = (t = l) > r >> sm ? n(-t) : t), (d ^= 1)),
                            new p(c, g, d)
                          );
                        },
                      };
                    })(e, s, a);
                    return r$(t.hash.outputLen, t.nByteLength, t.hmac)(l, d);
                  },
                  verify: function (e, i, s, a = v) {
                    let c, l;
                    (i = rS("msgHash", i)), (s = rS("publicKey", s));
                    let { lowS: h, prehash: d, format: u } = a;
                    if ((sh(a), "strict" in a))
                      throw Error("options.strict was renamed to lowS");
                    if (void 0 !== u && "compact" !== u && "der" !== u)
                      throw Error("format must be compact or der");
                    let g = "string" == typeof e || rp(e),
                      f =
                        !g &&
                        !u &&
                        "object" == typeof e &&
                        null !== e &&
                        "bigint" == typeof e.r &&
                        "bigint" == typeof e.s;
                    if (!g && !f)
                      throw Error(
                        "invalid signature, expected Uint8Array, hex string or Signature instance"
                      );
                    try {
                      if ((f && (c = new p(e.r, e.s)), g)) {
                        try {
                          "compact" !== u && (c = p.fromDER(e));
                        } catch (e) {
                          if (!(e instanceof sg.Err)) throw e;
                        }
                        c || "der" === u || (c = p.fromCompact(e));
                      }
                      l = o.fromHex(s);
                    } catch {
                      return !1;
                    }
                    if (!c || (h && c.hasHighS())) return !1;
                    d && (i = t.hash(i));
                    let { r: w, s: y } = c,
                      b = m(i),
                      E = rY(y, r),
                      C = n(b * E),
                      I = n(w * E),
                      N = o.BASE.multiplyAndAddUnsafe(l, C, I)?.toAffine();
                    return !!N && n(N.x) === w;
                  },
                  ProjectivePoint: o,
                  Signature: p,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return c(e), !0;
                      } catch {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: c,
                    randomPrivateKey: () => {
                      let e = r2(t.n);
                      return (function (e, t, i = !1) {
                        let r = e.length,
                          s = r1(t),
                          a = r2(t);
                        if (r < 16 || r < a || r > 1024)
                          throw Error(
                            "expected " + a + "-1024 bytes of input, got " + r
                          );
                        let n = rG(i ? rN(e) : rI(e), t - rq) + rq;
                        return i ? r_(n, s) : rA(n, s);
                      })(t.randomBytes(e), t.n);
                    },
                    precompute: (e = 8, t = o.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...e,
              hash: t,
              hmac: (e, ...i) =>
                re(
                  t,
                  e,
                  (function (...e) {
                    let t = 0;
                    for (let i = 0; i < e.length; i++) {
                      let r = e[i];
                      t$(r), (t += r.length);
                    }
                    let i = new Uint8Array(t);
                    for (let t = 0, r = 0; t < e.length; t++) {
                      let s = e[t];
                      i.set(s, r), (r += s.length);
                    }
                    return i;
                  })(...i)
                ),
              randomBytes: t0,
            });
          return { ...i(t), create: i };
        })(
          {
            a: sy.create(BigInt("-3")),
            b: BigInt(
              "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"
            ),
            Fp: sy,
            n: BigInt(
              "0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"
            ),
            Gx: BigInt(
              "0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"
            ),
            Gy: BigInt(
              "0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
            ),
            h: BigInt(1),
            lowS: !1,
          },
          rl
        ),
        sv = "base10",
        sE = "base16",
        sC = "base64pad",
        sI = "base64url",
        sN = "utf8";
      function sA() {
        let e = t0(32);
        return (0, e3.dI)(e, sE);
      }
      function s_(e) {
        let t = rl((0, e3.sH)(e, sE));
        return (0, e3.dI)(t, sE);
      }
      function sS(e) {
        let t = rl((0, e3.sH)(e, sN));
        return (0, e3.dI)(t, sE);
      }
      function sP(e) {
        return (0, e3.sH)(`${e}`, sv);
      }
      function sO(e) {
        return Number((0, e3.dI)(e, sv));
      }
      function sT(e) {
        return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
      function sk(e) {
        let t = e.replace(/-/g, "+").replace(/_/g, "/"),
          i = (4 - (t.length % 4)) % 4;
        return t + "=".repeat(i);
      }
      function sx(e) {
        if (2 === sO(e.type))
          return (0, e3.dI)((0, e3.xW)([e.type, e.sealed]), sC);
        if (1 === sO(e.type)) {
          if (typeof e.senderPublicKey > "u")
            throw Error("Missing sender public key for type 1 envelope");
          return (0, e3.dI)(
            (0, e3.xW)([e.type, e.senderPublicKey, e.iv, e.sealed]),
            sC
          );
        }
        return (0, e3.dI)((0, e3.xW)([e.type, e.iv, e.sealed]), sC);
      }
      function sR(e) {
        let t = (e.encoding || sC) === sI ? sk(e.encoded) : e.encoded,
          i = (0, e3.sH)(t, sC),
          r = i.slice(0, 1);
        if (1 === sO(r)) {
          let e = i.slice(1, 33),
            t = i.slice(33, 45);
          return { type: r, sealed: i.slice(45), iv: t, senderPublicKey: e };
        }
        if (2 === sO(r)) return { type: r, sealed: i.slice(1), iv: t0(12) };
        let s = i.slice(1, 13);
        return { type: r, sealed: i.slice(13), iv: s };
      }
      function sU(e) {
        let t = e?.type || 0;
        if (1 === t) {
          if (typeof e?.senderPublicKey > "u")
            throw Error("missing sender public key");
          if (typeof e?.receiverPublicKey > "u")
            throw Error("missing receiver public key");
        }
        return {
          type: t,
          senderPublicKey: e?.senderPublicKey,
          receiverPublicKey: e?.receiverPublicKey,
        };
      }
      function sD(e) {
        return (
          1 === e.type &&
          "string" == typeof e.senderPublicKey &&
          "string" == typeof e.receiverPublicKey
        );
      }
      function s$(e) {
        return e?.relay || { protocol: "irn" };
      }
      function sM(e) {
        let t = e8.CG[e];
        if (typeof t > "u") throw Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      function sL(e) {
        var t;
        if (!e.includes("wc:")) {
          let t = tU(e);
          null != t && t.includes("wc:") && (e = t);
        }
        let i = (e = (e = e.includes("wc://")
            ? e.replace("wc://", "")
            : e).includes("wc:")
            ? e.replace("wc:", "")
            : e).indexOf(":"),
          r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
          s = e.substring(0, i),
          a = e.substring(i + 1, r).split("@"),
          n = new URLSearchParams("u" > typeof r ? e.substring(r) : ""),
          o = {};
        n.forEach((e, t) => {
          o[t] = e;
        });
        let c = "string" == typeof o.methods ? o.methods.split(",") : void 0;
        return {
          protocol: s,
          topic: (t = a[0]).startsWith("//") ? t.substring(2) : t,
          version: parseInt(a[1], 10),
          symKey: o.symKey,
          relay: (function (e, t = "-") {
            let i = {},
              r = "relay" + t;
            return (
              Object.keys(e).forEach((t) => {
                if (t.startsWith(r)) {
                  let s = t.replace(r, ""),
                    a = e[t];
                  i[s] = a;
                }
              }),
              i
            );
          })(o),
          methods: c,
          expiryTimestamp: o.expiryTimestamp
            ? parseInt(o.expiryTimestamp, 10)
            : void 0,
        };
      }
      function sj(e) {
        let t = new URLSearchParams(),
          i = (function (e, t = "-") {
            let i = {};
            return (
              Object.keys(e).forEach((r) => {
                e[r] && (i["relay" + t + r] = e[r]);
              }),
              i
            );
          })(e.relay);
        Object.keys(i)
          .sort()
          .forEach((e) => {
            t.set(e, i[e]);
          }),
          t.set("symKey", e.symKey),
          e.expiryTimestamp &&
            t.set("expiryTimestamp", e.expiryTimestamp.toString()),
          e.methods && t.set("methods", e.methods.join(","));
        let r = t.toString();
        return `${e.protocol}:${e.topic}@${e.version}?${r}`;
      }
      function sW(e, t, i) {
        return `${e}?wc_ev=${i}&topic=${t}`;
      }
      var sB = Object.defineProperty,
        sq = Object.defineProperties,
        sH = Object.getOwnPropertyDescriptors,
        sF = Object.getOwnPropertySymbols,
        sz = Object.prototype.hasOwnProperty,
        sV = Object.prototype.propertyIsEnumerable,
        sK = (e, t, i) =>
          t in e
            ? sB(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        sG = (e, t) => {
          for (var i in t || (t = {})) sz.call(t, i) && sK(e, i, t[i]);
          if (sF) for (var i of sF(t)) sV.call(t, i) && sK(e, i, t[i]);
          return e;
        },
        sJ = (e, t) => sq(e, sH(t));
      function sX(e) {
        let t = [];
        return (
          e.forEach((e) => {
            let [i, r] = e.split(":");
            t.push(`${i}:${r}`);
          }),
          t
        );
      }
      function sY(e) {
        return e.includes(":");
      }
      function sZ(e) {
        return sY(e) ? e.split(":")[0] : e;
      }
      function sQ(e) {
        var t, i, r;
        let s = {};
        if (!s6(e)) return s;
        for (let [a, n] of Object.entries(e)) {
          let e = sY(a) ? [a] : n.chains,
            o = n.methods || [],
            c = n.events || [],
            l = sZ(a);
          s[l] = sJ(sG({}, s[l]), {
            chains: tP(e, null == (t = s[l]) ? void 0 : t.chains),
            methods: tP(o, null == (i = s[l]) ? void 0 : i.methods),
            events: tP(c, null == (r = s[l]) ? void 0 : r.events),
          });
        }
        return s;
      }
      function s0(e, t) {
        let i = (function (e) {
          let t = {};
          return (
            e?.forEach((e) => {
              var i;
              let [r, s] = e.split(":");
              t[r] ||
                (t[r] = { accounts: [], chains: [], events: [], methods: [] }),
                t[r].accounts.push(e),
                null == (i = t[r].chains) || i.push(`${r}:${s}`);
            }),
            t
          );
        })((t = t.map((e) => e.replace("did:pkh:", ""))));
        for (let [t, r] of Object.entries(i))
          r.methods ? (r.methods = tP(r.methods, e)) : (r.methods = e),
            (r.events = ["chainChanged", "accountsChanged"]);
        return i;
      }
      let s1 = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        s2 = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function s5(e, t) {
        let { message: i, code: r } = s2[e];
        return { message: t ? `${i} ${t}` : i, code: r };
      }
      function s3(e, t) {
        let { message: i, code: r } = s1[e];
        return { message: t ? `${i} ${t}` : i, code: r };
      }
      function s8(e, t) {
        return (
          !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
        );
      }
      function s6(e) {
        return (
          Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        );
      }
      function s4(e) {
        return typeof e > "u";
      }
      function s9(e, t) {
        return !!(t && s4(e)) || ("string" == typeof e && !!e.trim().length);
      }
      function s7(e, t) {
        return !!(t && s4(e)) || ("number" == typeof e && !isNaN(e));
      }
      function ae(e) {
        return !!(s9(e, !1) && e.includes(":")) && 2 === e.split(":").length;
      }
      function at(e) {
        let t = !0;
        return (
          s8(e) ? e.length && (t = e.every((e) => s9(e, !1))) : (t = !1), t
        );
      }
      function ai(e, t) {
        let i = null;
        return (
          Object.values(e).forEach((e) => {
            var r;
            let s;
            if (i) return;
            let a =
              ((r = `${t}, namespace`),
              (s = null),
              at(e?.methods)
                ? at(e?.events) ||
                  (s = s3(
                    "UNSUPPORTED_EVENTS",
                    `${r}, events should be an array of strings or empty array for no events`
                  ))
                : (s = s3(
                    "UNSUPPORTED_METHODS",
                    `${r}, methods should be an array of strings or empty array for no methods`
                  )),
              s);
            a && (i = a);
          }),
          i
        );
      }
      function ar(e, t) {
        let i = null;
        if (e && s6(e)) {
          let r,
            s = ai(e, t);
          s && (i = s);
          let a =
            ((r = null),
            Object.values(e).forEach((e) => {
              var i, s;
              let a;
              if (r) return;
              let n =
                ((i = e?.accounts),
                (s = `${t} namespace`),
                (a = null),
                s8(i)
                  ? i.forEach((e) => {
                      a ||
                        (function (e) {
                          if (s9(e, !1) && e.includes(":")) {
                            let t = e.split(":");
                            if (3 === t.length) {
                              let e = t[0] + ":" + t[1];
                              return !!t[2] && ae(e);
                            }
                          }
                          return !1;
                        })(e) ||
                        (a = s3(
                          "UNSUPPORTED_ACCOUNTS",
                          `${s}, account ${e} should be a string and conform to "namespace:chainId:address" format`
                        ));
                    })
                  : (a = s3(
                      "UNSUPPORTED_ACCOUNTS",
                      `${s}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
                    )),
                a);
              n && (r = n);
            }),
            r);
          a && (i = a);
        } else
          i = s5(
            "MISSING_OR_INVALID",
            `${t}, namespaces should be an object with data`
          );
        return i;
      }
      function as(e) {
        return s9(e.protocol, !0);
      }
      function aa(e) {
        return "u" > typeof e;
      }
      function an(e, t) {
        return !(
          !ae(t) ||
          !(function (e) {
            let t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...sX(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function ao(e, t, i) {
        let r = null,
          s = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((i) => {
                var r;
                i.includes(":")
                  ? (t[i] = e[i])
                  : null == (r = e[i].chains) ||
                    r.forEach((r) => {
                      t[r] = { methods: e[i].methods, events: e[i].events };
                    });
              }),
              t
            );
          })(e),
          a = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((i) => {
                if (i.includes(":")) t[i] = e[i];
                else {
                  let r = sX(e[i].accounts);
                  r?.forEach((r) => {
                    t[r] = {
                      accounts: e[i].accounts.filter((e) =>
                        e.includes(`${r}:`)
                      ),
                      methods: e[i].methods,
                      events: e[i].events,
                    };
                  });
                }
              }),
              t
            );
          })(t),
          n = Object.keys(s),
          o = Object.keys(a),
          c = ac(Object.keys(e)),
          l = ac(Object.keys(t)),
          h = c.filter((e) => !l.includes(e));
        return (
          h.length &&
            (r = s5(
              "NON_CONFORMING_NAMESPACES",
              `${i} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(t).toString()}`
            )),
          ty(n, o) ||
            (r = s5(
              "NON_CONFORMING_NAMESPACES",
              `${i} namespaces chains don't satisfy required namespaces.
      Required: ${n.toString()}
      Approved: ${o.toString()}`
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(":") || r) return;
            let s = sX(t[e].accounts);
            s.includes(e) ||
              (r = s5(
                "NON_CONFORMING_NAMESPACES",
                `${i} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${s.toString()}`
              ));
          }),
          n.forEach((e) => {
            r ||
              (ty(s[e].methods, a[e].methods)
                ? ty(s[e].events, a[e].events) ||
                  (r = s5(
                    "NON_CONFORMING_NAMESPACES",
                    `${i} namespaces events don't satisfy namespace events for ${e}`
                  ))
                : (r = s5(
                    "NON_CONFORMING_NAMESPACES",
                    `${i} namespaces methods don't satisfy namespace methods for ${e}`
                  )));
          }),
          r
        );
      }
      function ac(e) {
        return [
          ...new Set(e.map((e) => (e.includes(":") ? e.split(":")[0] : e))),
        ];
      }
      function al() {
        let e = tg();
        return new Promise((t) => {
          switch (e) {
            case th.browser:
              t(tp() && navigator?.onLine);
              break;
            case th.reactNative:
              t(ah());
              break;
            case th.node:
            default:
              t(!0);
          }
        });
      }
      async function ah() {
        if (tu() && "u" > typeof i.g && null != i.g && i.g.NetInfo) {
          let e = await (null == i.g ? void 0 : i.g.NetInfo.fetch());
          return e?.isConnected;
        }
        return !0;
      }
      let ad = {};
      class au {
        static get(e) {
          return ad[e];
        }
        static set(e, t) {
          ad[e] = t;
        }
        static delete(e) {
          delete ad[e];
        }
      }
      var ap = i(77226),
        ag = i(75086),
        af = i(90628),
        am = i(44134).Buffer,
        aw = i(49509);
      let ay = "core",
        ab = `wc@2:${ay}:`,
        av = { logger: "error" },
        aE = { database: ":memory:" },
        aC = "client_ed25519_seed",
        aI = ei.ONE_DAY,
        aN = ei.SIX_HOURS,
        aA = "wss://relay.walletconnect.org",
        a_ = {
          message: "relayer_message",
          message_ack: "relayer_message_ack",
          connect: "relayer_connect",
          disconnect: "relayer_disconnect",
          error: "relayer_error",
          connection_stalled: "relayer_connection_stalled",
          publish: "relayer_publish",
        },
        aS = {
          payload: "payload",
          connect: "connect",
          disconnect: "disconnect",
          error: "error",
        },
        aP = "2.21.0",
        aO = { link_mode: "link_mode", relay: "relay" },
        aT = { inbound: "inbound", outbound: "outbound" },
        ak = "WALLETCONNECT_LINK_MODE_APPS",
        ax = {
          created: "subscription_created",
          deleted: "subscription_deleted",
          sync: "subscription_sync",
          resubscribed: "subscription_resubscribed",
        },
        aR =
          (ei.FIVE_SECONDS,
          {
            wc_pairingDelete: {
              req: { ttl: ei.ONE_DAY, prompt: !1, tag: 1e3 },
              res: { ttl: ei.ONE_DAY, prompt: !1, tag: 1001 },
            },
            wc_pairingPing: {
              req: { ttl: ei.THIRTY_SECONDS, prompt: !1, tag: 1002 },
              res: { ttl: ei.THIRTY_SECONDS, prompt: !1, tag: 1003 },
            },
            unregistered_method: {
              req: { ttl: ei.ONE_DAY, prompt: !1, tag: 0 },
              res: { ttl: ei.ONE_DAY, prompt: !1, tag: 0 },
            },
          }),
        aU = {
          create: "pairing_create",
          expire: "pairing_expire",
          delete: "pairing_delete",
          ping: "pairing_ping",
        },
        aD = {
          created: "history_created",
          updated: "history_updated",
          deleted: "history_deleted",
          sync: "history_sync",
        },
        a$ = {
          created: "expirer_created",
          deleted: "expirer_deleted",
          expired: "expirer_expired",
          sync: "expirer_sync",
        },
        aM = "https://verify.walletconnect.org",
        aL = `${aM}/v3`,
        aj = ["https://verify.walletconnect.com", aM],
        aW = {
          pairing_started: "pairing_started",
          pairing_uri_validation_success: "pairing_uri_validation_success",
          pairing_uri_not_expired: "pairing_uri_not_expired",
          store_new_pairing: "store_new_pairing",
          subscribing_pairing_topic: "subscribing_pairing_topic",
          subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
          existing_pairing: "existing_pairing",
          pairing_not_expired: "pairing_not_expired",
          emit_inactive_pairing: "emit_inactive_pairing",
          emit_session_proposal: "emit_session_proposal",
        },
        aB = {
          no_internet_connection: "no_internet_connection",
          malformed_pairing_uri: "malformed_pairing_uri",
          active_pairing_already_exists: "active_pairing_already_exists",
          subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
          pairing_expired: "pairing_expired",
          proposal_listener_not_found: "proposal_listener_not_found",
        },
        aq = {
          session_approve_started: "session_approve_started",
          session_namespaces_validation_success:
            "session_namespaces_validation_success",
          subscribing_session_topic: "subscribing_session_topic",
          subscribe_session_topic_success: "subscribe_session_topic_success",
          publishing_session_approve: "publishing_session_approve",
          session_approve_publish_success: "session_approve_publish_success",
          store_session: "store_session",
          publishing_session_settle: "publishing_session_settle",
          session_settle_publish_success: "session_settle_publish_success",
        },
        aH = {
          no_internet_connection: "no_internet_connection",
          proposal_expired: "proposal_expired",
          subscribe_session_topic_failure: "subscribe_session_topic_failure",
          session_approve_publish_failure: "session_approve_publish_failure",
          session_settle_publish_failure: "session_settle_publish_failure",
          session_approve_namespace_validation_failure:
            "session_approve_namespace_validation_failure",
          proposal_not_found: "proposal_not_found",
        },
        aF = {
          authenticated_session_approve_started:
            "authenticated_session_approve_started",
          create_authenticated_session_topic:
            "create_authenticated_session_topic",
          cacaos_verified: "cacaos_verified",
          store_authenticated_session: "store_authenticated_session",
          subscribing_authenticated_session_topic:
            "subscribing_authenticated_session_topic",
          subscribe_authenticated_session_topic_success:
            "subscribe_authenticated_session_topic_success",
          publishing_authenticated_session_approve:
            "publishing_authenticated_session_approve",
        },
        az = {
          no_internet_connection: "no_internet_connection",
          invalid_cacao: "invalid_cacao",
          subscribe_authenticated_session_topic_failure:
            "subscribe_authenticated_session_topic_failure",
          authenticated_session_approve_publish_failure:
            "authenticated_session_approve_publish_failure",
          authenticated_session_pending_request_not_found:
            "authenticated_session_pending_request_not_found",
        };
      var aV = function (e, t) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var i = new Uint8Array(256), r = 0; r < i.length; r++) i[r] = 255;
        for (var s = 0; s < e.length; s++) {
          var a = e.charAt(s),
            n = a.charCodeAt(0);
          if (255 !== i[n]) throw TypeError(a + " is ambiguous");
          i[n] = s;
        }
        var o = e.length,
          c = e.charAt(0),
          l = Math.log(o) / Math.log(256),
          h = Math.log(256) / Math.log(o);
        function d(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (" " !== e[0]) {
            for (var r = 0, s = 0; e[t] === c; ) r++, t++;
            for (
              var a = ((e.length - t) * l + 1) >>> 0, n = new Uint8Array(a);
              e[t];

            ) {
              var h = i[e.charCodeAt(t)];
              if (255 === h) return;
              for (
                var d = 0, u = a - 1;
                (0 !== h || d < s) && -1 !== u;
                u--, d++
              )
                (h += (o * n[u]) >>> 0),
                  (n[u] = h % 256 >>> 0),
                  (h = (h / 256) >>> 0);
              if (0 !== h) throw Error("Non-zero carry");
              (s = d), t++;
            }
            if (" " !== e[t]) {
              for (var p = a - s; p !== a && 0 === n[p]; ) p++;
              for (var g = new Uint8Array(r + (a - p)), f = r; p !== a; )
                g[f++] = n[p++];
              return g;
            }
          }
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === t.length) return "";
            for (var i = 0, r = 0, s = 0, a = t.length; s !== a && 0 === t[s]; )
              s++, i++;
            for (
              var n = ((a - s) * h + 1) >>> 0, l = new Uint8Array(n);
              s !== a;

            ) {
              for (
                var d = t[s], u = 0, p = n - 1;
                (0 !== d || u < r) && -1 !== p;
                p--, u++
              )
                (d += (256 * l[p]) >>> 0),
                  (l[p] = d % o >>> 0),
                  (d = (d / o) >>> 0);
              if (0 !== d) throw Error("Non-zero carry");
              (r = u), s++;
            }
            for (var g = n - r; g !== n && 0 === l[g]; ) g++;
            for (var f = c.repeat(i); g < n; ++g) f += e.charAt(l[g]);
            return f;
          },
          decodeUnsafe: d,
          decode: function (e) {
            var i = d(e);
            if (i) return i;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let aK = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        aG = (e) => new TextEncoder().encode(e),
        aJ = (e) => new TextDecoder().decode(e);
      class aX {
        constructor(e, t, i) {
          (this.name = e), (this.prefix = t), (this.baseEncode = i);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class aY {
        constructor(e, t, i) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return aQ(this, e);
        }
      }
      class aZ {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return aQ(this, e);
        }
        decode(e) {
          let t = e[0],
            i = this.decoders[t];
          if (i) return i.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      let aQ = (e, t) =>
        new aZ({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class a0 {
        constructor(e, t, i, r) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = i),
            (this.baseDecode = r),
            (this.encoder = new aX(e, t, i)),
            (this.decoder = new aY(e, t, r));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let a1 = ({ name: e, prefix: t, encode: i, decode: r }) =>
          new a0(e, t, i, r),
        a2 = ({ prefix: e, name: t, alphabet: i }) => {
          let { encode: r, decode: s } = aV(i, t);
          return a1({ prefix: e, name: t, encode: r, decode: (e) => aK(s(e)) });
        },
        a5 = (e, t, i, r) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let a = e.length;
          for (; "=" === e[a - 1]; ) --a;
          let n = new Uint8Array(((a * i) / 8) | 0),
            o = 0,
            c = 0,
            l = 0;
          for (let t = 0; t < a; ++t) {
            let a = s[e[t]];
            if (void 0 === a) throw SyntaxError(`Non-${r} character`);
            (c = (c << i) | a),
              (o += i) >= 8 && ((o -= 8), (n[l++] = 255 & (c >> o)));
          }
          if (o >= i || 255 & (c << (8 - o)))
            throw SyntaxError("Unexpected end of data");
          return n;
        },
        a3 = (e, t, i) => {
          let r = "=" === t[t.length - 1],
            s = (1 << i) - 1,
            a = "",
            n = 0,
            o = 0;
          for (let r = 0; r < e.length; ++r)
            for (o = (o << 8) | e[r], n += 8; n > i; )
              (n -= i), (a += t[s & (o >> n)]);
          if ((n && (a += t[s & (o << (i - n))]), r))
            for (; (a.length * i) & 7; ) a += "=";
          return a;
        },
        a8 = ({ name: e, prefix: t, bitsPerChar: i, alphabet: r }) =>
          a1({
            prefix: t,
            name: e,
            encode: (e) => a3(e, r, i),
            decode: (t) => a5(t, r, i, e),
          });
      var a6 = Object.freeze({
          __proto__: null,
          identity: a1({
            prefix: "\0",
            name: "identity",
            encode: (e) => aJ(e),
            decode: (e) => aG(e),
          }),
        }),
        a4 = Object.freeze({
          __proto__: null,
          base2: a8({
            prefix: "0",
            name: "base2",
            alphabet: "01",
            bitsPerChar: 1,
          }),
        }),
        a9 = Object.freeze({
          __proto__: null,
          base8: a8({
            prefix: "7",
            name: "base8",
            alphabet: "01234567",
            bitsPerChar: 3,
          }),
        }),
        a7 = Object.freeze({
          __proto__: null,
          base10: a2({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        }),
        ne = Object.freeze({
          __proto__: null,
          base16: a8({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4,
          }),
          base16upper: a8({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4,
          }),
        });
      let nt = a8({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        ni = a8({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        nr = a8({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        ns = a8({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        na = a8({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        nn = a8({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        no = a8({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        });
      var nc = Object.freeze({
          __proto__: null,
          base32: nt,
          base32upper: ni,
          base32pad: nr,
          base32padupper: ns,
          base32hex: na,
          base32hexupper: nn,
          base32hexpad: no,
          base32hexpadupper: a8({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5,
          }),
          base32z: a8({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5,
          }),
        }),
        nl = Object.freeze({
          __proto__: null,
          base36: a2({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
          }),
          base36upper: a2({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          }),
        }),
        nh = Object.freeze({
          __proto__: null,
          base58btc: a2({
            name: "base58btc",
            prefix: "z",
            alphabet:
              "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
          }),
          base58flickr: a2({
            name: "base58flickr",
            prefix: "Z",
            alphabet:
              "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
          }),
        });
      let nd = a8({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        nu = a8({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        });
      var np = Object.freeze({
        __proto__: null,
        base64: nd,
        base64pad: nu,
        base64url: a8({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        base64urlpad: a8({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
      });
      let ng = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        nf = ng.reduce((e, t, i) => ((e[i] = t), e), []),
        nm = ng.reduce((e, t, i) => ((e[t.codePointAt(0)] = i), e), []);
      var nw = Object.freeze({
        __proto__: null,
        base256emoji: a1({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => (e += nf[t]), "");
          },
          decode: function (e) {
            let t = [];
            for (let i of e) {
              let e = nm[i.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${i}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function ny(e, t, i) {
        (t = t || []), (i = i || 0);
        for (var r = i; e >= 0x80000000; )
          (t[i++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[i++] = (255 & e) | 128), (e >>>= 7);
        return (t[i] = 0 | e), (ny.bytes = i - r + 1), t;
      }
      function nb(e, t) {
        var i,
          r = 0,
          t = t || 0,
          s = 0,
          a = t,
          n = e.length;
        do {
          if (a >= n)
            throw ((nb.bytes = 0), RangeError("Could not decode varint"));
          (i = e[a++]),
            (r += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s)),
            (s += 7);
        } while (i >= 128);
        return (nb.bytes = a - t), r;
      }
      var nv = {
        encode: ny,
        encodingLength: function (e) {
          return e < 128
            ? 1
            : e < 16384
            ? 2
            : e < 2097152
            ? 3
            : e < 0x10000000
            ? 4
            : e < 0x800000000
            ? 5
            : e < 0x40000000000
            ? 6
            : e < 0x2000000000000
            ? 7
            : e < 0x100000000000000
            ? 8
            : e < 0x8000000000000000
            ? 9
            : 10;
        },
      };
      let nE = (e, t, i = 0) => (nv.encode(e, t, i), t),
        nC = (e) => nv.encodingLength(e),
        nI = (e, t) => {
          let i = t.byteLength,
            r = nC(e),
            s = r + nC(i),
            a = new Uint8Array(s + i);
          return nE(e, a, 0), nE(i, a, r), a.set(t, s), new nN(e, i, t, a);
        };
      class nN {
        constructor(e, t, i, r) {
          (this.code = e), (this.size = t), (this.digest = i), (this.bytes = r);
        }
      }
      let nA = ({ name: e, code: t, encode: i }) => new n_(e, t, i);
      class n_ {
        constructor(e, t, i) {
          (this.name = e), (this.code = t), (this.encode = i);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array
              ? nI(this.code, t)
              : t.then((e) => nI(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      let nS = (e) => async (t) =>
        new Uint8Array(await crypto.subtle.digest(e, t));
      var nP = Object.freeze({
          __proto__: null,
          sha256: nA({ name: "sha2-256", code: 18, encode: nS("SHA-256") }),
          sha512: nA({ name: "sha2-512", code: 19, encode: nS("SHA-512") }),
        }),
        nO = Object.freeze({
          __proto__: null,
          identity: {
            code: 0,
            name: "identity",
            encode: aK,
            digest: (e) => nI(0, aK(e)),
          },
        });
      new TextEncoder(), new TextDecoder();
      let nT = {
        ...a6,
        ...a4,
        ...a9,
        ...a7,
        ...ne,
        ...nc,
        ...nl,
        ...nh,
        ...np,
        ...nw,
      };
      function nk(e, t, i, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: i },
          decoder: { decode: r },
        };
      }
      ({ ...nP, ...nO });
      let nx = nk(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        nR = nk(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            return t;
          },
          (e) => {
            let t = (function (e = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
            return t;
          }
        ),
        nU = {
          utf8: nx,
          "utf-8": nx,
          hex: nT.base16,
          latin1: nR,
          ascii: nR,
          binary: nR,
          ...nT,
        };
      var nD = Object.defineProperty,
        n$ = (e, t, i) =>
          t in e
            ? nD(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        nM = (e, t, i) => n$(e, "symbol" != typeof t ? t + "" : t, i);
      class nL {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            nM(this, "keychain", new Map()),
            nM(this, "name", "keychain"),
            nM(this, "version", "0.3"),
            nM(this, "initialized", !1),
            nM(this, "storagePrefix", ab),
            nM(this, "init", async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                "u" > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            nM(
              this,
              "has",
              (e) => (this.isInitialized(), this.keychain.has(e))
            ),
            nM(this, "set", async (e, t) => {
              this.isInitialized(),
                this.keychain.set(e, t),
                await this.persist();
            }),
            nM(this, "get", (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > "u") {
                let { message: t } = s5(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${e}`
                );
                throw Error(t);
              }
              return t;
            }),
            nM(this, "del", async (e) => {
              this.isInitialized(),
                this.keychain.delete(e),
                await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, k.U5)(t, this.name));
        }
        get context() {
          return (0, k.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, tb(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? tv(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s5("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var nj = Object.defineProperty,
        nW = (e, t, i) =>
          t in e
            ? nj(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        nB = (e, t, i) => nW(e, "symbol" != typeof t ? t + "" : t, i);
      class nq {
        constructor(e, t, i) {
          (this.core = e),
            (this.logger = t),
            nB(this, "name", "crypto"),
            nB(this, "keychain"),
            nB(this, "randomSessionIdentifier", sA()),
            nB(this, "initialized", !1),
            nB(this, "init", async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            nB(
              this,
              "hasKeys",
              (e) => (this.isInitialized(), this.keychain.has(e))
            ),
            nB(this, "getClientId", async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                t = er.TZ(e);
              return er.UF(t.publicKey);
            }),
            nB(this, "generateKeyPair", () => {
              this.isInitialized();
              let e = (function () {
                let e = sl.utils.randomPrivateKey(),
                  t = sl.getPublicKey(e);
                return {
                  privateKey: (0, e3.dI)(e, sE),
                  publicKey: (0, e3.dI)(t, sE),
                };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            nB(this, "signJWT", async (e) => {
              this.isInitialized();
              let t = await this.getClientSeed(),
                i = er.TZ(t),
                r = this.randomSessionIdentifier;
              return await er.FA(r, e, aI, i);
            }),
            nB(this, "generateSharedKey", (e, t, i) => {
              this.isInitialized();
              let r = (function (e, t) {
                let i = rr(
                  rl,
                  sl.getSharedSecret((0, e3.sH)(e, sE), (0, e3.sH)(t, sE)),
                  void 0,
                  void 0,
                  32
                );
                return (0, e3.dI)(i, sE);
              })(this.getPrivateKey(e), t);
              return this.setSymKey(r, i);
            }),
            nB(this, "setSymKey", async (e, t) => {
              this.isInitialized();
              let i = t || s_(e);
              return await this.keychain.set(i, e), i;
            }),
            nB(this, "deleteKeyPair", async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            nB(this, "deleteSymKey", async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            nB(this, "encode", async (e, t, i) => {
              this.isInitialized();
              let r = sU(i),
                s = (0, E.h)(t);
              if (2 === r.type)
                return (function (e, t) {
                  let i = sP(2),
                    r = t0(12),
                    s = sx({ type: i, sealed: (0, e3.sH)(e, sN), iv: r });
                  return t === sI ? sT(s) : s;
                })(s, i?.encoding);
              if (sD(r)) {
                let t = r.senderPublicKey,
                  i = r.receiverPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              let a = this.getSymKey(e),
                { type: n, senderPublicKey: o } = r;
              return (function (e) {
                let t = sP("u" > typeof e.type ? e.type : 0);
                if (1 === sO(t) && typeof e.senderPublicKey > "u")
                  throw Error("Missing sender public key for type 1 envelope");
                let i =
                    "u" > typeof e.senderPublicKey
                      ? (0, e3.sH)(e.senderPublicKey, sE)
                      : void 0,
                  r = "u" > typeof e.iv ? (0, e3.sH)(e.iv, sE) : t0(12),
                  s = sx({
                    type: t,
                    sealed: i9((0, e3.sH)(e.symKey, sE), r).encrypt(
                      (0, e3.sH)(e.message, sN)
                    ),
                    iv: r,
                    senderPublicKey: i,
                  });
                return e.encoding === sI ? sT(s) : s;
              })({
                type: n,
                symKey: a,
                message: s,
                senderPublicKey: o,
                encoding: i?.encoding,
              });
            }),
            nB(this, "decode", async (e, t, i) => {
              this.isInitialized();
              let r = (function (e, t) {
                let i = sR({ encoded: e, encoding: t?.encoding });
                return sU({
                  type: sO(i.type),
                  senderPublicKey:
                    "u" > typeof i.senderPublicKey
                      ? (0, e3.dI)(i.senderPublicKey, sE)
                      : void 0,
                  receiverPublicKey: t?.receiverPublicKey,
                });
              })(t, i);
              if (2 === r.type) {
                let e = (function (e, t) {
                  let { sealed: i } = sR({ encoded: e, encoding: t });
                  return (0, e3.dI)(i, sN);
                })(t, i?.encoding);
                return (0, E.j)(e);
              }
              if (sD(r)) {
                let t = r.receiverPublicKey,
                  i = r.senderPublicKey;
                e = await this.generateSharedKey(t, i);
              }
              try {
                let r = this.getSymKey(e),
                  s = (function (e) {
                    let t = (0, e3.sH)(e.symKey, sE),
                      { sealed: i, iv: r } = sR({
                        encoded: e.encoded,
                        encoding: e.encoding,
                      }),
                      s = i9(t, r).decrypt(i);
                    if (null === s) throw Error("Failed to decrypt");
                    return (0, e3.dI)(s, sN);
                  })({ symKey: r, encoded: t, encoding: i?.encoding });
                return (0, E.j)(s);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(t);
              }
            }),
            nB(this, "getPayloadType", (e, t = sC) =>
              sO(sR({ encoded: e, encoding: t }).type)
            ),
            nB(this, "getPayloadSenderPublicKey", (e, t = sC) => {
              let i = sR({ encoded: e, encoding: t });
              return i.senderPublicKey
                ? (0, e3.dI)(i.senderPublicKey, sE)
                : void 0;
            }),
            (this.core = e),
            (this.logger = (0, k.U5)(t, this.name)),
            (this.keychain = i || new nL(this.core, this.logger));
        }
        get context() {
          return (0, k.oI)(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = "";
          try {
            e = this.keychain.get(aC);
          } catch {
            (e = sA()), await this.keychain.set(aC, e);
          }
          return (function (e, t = "utf8") {
            let i = nU[t];
            if (!i) throw Error(`Unsupported encoding "${t}"`);
            return ("utf8" === t || "utf-8" === t) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? globalThis.Buffer.from(e, "utf8")
              : i.decoder.decode(`${i.prefix}${e}`);
          })(e, "base16");
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s5("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var nH = Object.defineProperty,
        nF = Object.defineProperties,
        nz = Object.getOwnPropertyDescriptors,
        nV = Object.getOwnPropertySymbols,
        nK = Object.prototype.hasOwnProperty,
        nG = Object.prototype.propertyIsEnumerable,
        nJ = (e, t, i) =>
          t in e
            ? nH(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        nX = (e, t) => {
          for (var i in t || (t = {})) nK.call(t, i) && nJ(e, i, t[i]);
          if (nV) for (var i of nV(t)) nG.call(t, i) && nJ(e, i, t[i]);
          return e;
        },
        nY = (e, t) => nF(e, nz(t)),
        nZ = (e, t, i) => nJ(e, "symbol" != typeof t ? t + "" : t, i);
      class nQ extends B {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            nZ(this, "messages", new Map()),
            nZ(this, "messagesWithoutClientAck", new Map()),
            nZ(this, "name", "messages"),
            nZ(this, "version", "0.3"),
            nZ(this, "initialized", !1),
            nZ(this, "storagePrefix", ab),
            nZ(this, "init", async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  let e = await this.getRelayerMessages();
                  "u" > typeof e && (this.messages = e);
                  let t = await this.getRelayerMessagesWithoutClientAck();
                  "u" > typeof t && (this.messagesWithoutClientAck = t),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (e) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`
                  ),
                    this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            nZ(this, "set", async (e, t, i) => {
              this.isInitialized();
              let r = sS(t),
                s = this.messages.get(e);
              if ((typeof s > "u" && (s = {}), "u" > typeof s[r])) return r;
              if (((s[r] = t), this.messages.set(e, s), i === aT.inbound)) {
                let i = this.messagesWithoutClientAck.get(e) || {};
                this.messagesWithoutClientAck.set(e, nY(nX({}, i), { [r]: t }));
              }
              return await this.persist(), r;
            }),
            nZ(this, "get", (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > "u" && (t = {}), t;
            }),
            nZ(this, "getWithoutAck", (e) => {
              this.isInitialized();
              let t = {};
              for (let i of e) {
                let e = this.messagesWithoutClientAck.get(i) || {};
                t[i] = Object.values(e);
              }
              return t;
            }),
            nZ(
              this,
              "has",
              (e, t) => (this.isInitialized(), "u" > typeof this.get(e)[sS(t)])
            ),
            nZ(this, "ack", async (e, t) => {
              this.isInitialized();
              let i = this.messagesWithoutClientAck.get(e);
              if (typeof i > "u") return;
              let r = sS(t);
              delete i[r],
                0 === Object.keys(i).length
                  ? this.messagesWithoutClientAck.delete(e)
                  : this.messagesWithoutClientAck.set(e, i),
                await this.persist();
            }),
            nZ(this, "del", async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                this.messagesWithoutClientAck.delete(e),
                await this.persist();
            }),
            (this.logger = (0, k.U5)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, k.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get storageKeyWithoutClientAck() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name +
            "_withoutClientAck"
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, tb(e));
        }
        async setRelayerMessagesWithoutClientAck(e) {
          await this.core.storage.setItem(
            this.storageKeyWithoutClientAck,
            tb(e)
          );
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? tv(e) : void 0;
        }
        async getRelayerMessagesWithoutClientAck() {
          let e = await this.core.storage.getItem(
            this.storageKeyWithoutClientAck
          );
          return "u" > typeof e ? tv(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages),
            await this.setRelayerMessagesWithoutClientAck(
              this.messagesWithoutClientAck
            );
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s5("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var n0 = Object.defineProperty,
        n1 = Object.defineProperties,
        n2 = Object.getOwnPropertyDescriptors,
        n5 = Object.getOwnPropertySymbols,
        n3 = Object.prototype.hasOwnProperty,
        n8 = Object.prototype.propertyIsEnumerable,
        n6 = (e, t, i) =>
          t in e
            ? n0(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        n4 = (e, t) => {
          for (var i in t || (t = {})) n3.call(t, i) && n6(e, i, t[i]);
          if (n5) for (var i of n5(t)) n8.call(t, i) && n6(e, i, t[i]);
          return e;
        },
        n9 = (e, t) => n1(e, n2(t)),
        n7 = (e, t, i) => n6(e, "symbol" != typeof t ? t + "" : t, i);
      class oe extends q {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            n7(this, "events", new o.EventEmitter()),
            n7(this, "name", "publisher"),
            n7(this, "queue", new Map()),
            n7(this, "publishTimeout", (0, ei.toMiliseconds)(ei.ONE_MINUTE)),
            n7(
              this,
              "initialPublishTimeout",
              (0, ei.toMiliseconds)(15 * ei.ONE_SECOND)
            ),
            n7(this, "needsTransportRestart", !1),
            n7(this, "publish", async (e, t, i) => {
              var r;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: e, message: t, opts: i },
                });
              let s = i?.ttl || aN,
                a = s$(i),
                n = i?.prompt || !1,
                o = i?.tag || 0,
                c = i?.id || (0, ag.getBigIntRpcId)().toString(),
                l = {
                  topic: e,
                  message: t,
                  opts: {
                    ttl: s,
                    relay: a,
                    prompt: n,
                    tag: o,
                    id: c,
                    attestation: i?.attestation,
                    tvf: i?.tvf,
                  },
                },
                h = `Failed to publish payload, please try again. id:${c} tag:${o}`;
              try {
                let r = new Promise(async (r) => {
                  let a = ({ id: e }) => {
                    l.opts.id === e &&
                      (this.removeRequestFromQueue(e),
                      this.relayer.events.removeListener(a_.publish, a),
                      r(l));
                  };
                  this.relayer.events.on(a_.publish, a);
                  let h = tC(
                    new Promise((r, a) => {
                      this.rpcPublish({
                        topic: e,
                        message: t,
                        ttl: s,
                        prompt: n,
                        tag: o,
                        id: c,
                        attestation: i?.attestation,
                        tvf: i?.tvf,
                      })
                        .then(r)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), a(e);
                        });
                    }),
                    this.initialPublishTimeout,
                    `Failed initial publish, retrying.... id:${c} tag:${o}`
                  );
                  try {
                    await h, this.events.removeListener(a_.publish, a);
                  } catch (e) {
                    this.queue.set(c, n9(n4({}, l), { attempt: 1 })),
                      this.logger.warn(e, e?.message);
                  }
                });
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { id: c, topic: e, message: t, opts: i },
                }),
                  await tC(r, this.publishTimeout, h);
              } catch (e) {
                if (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(e),
                  null != (r = i?.internal) && r.throwOnFailedPublish)
                )
                  throw e;
              } finally {
                this.queue.delete(c);
              }
            }),
            n7(this, "on", (e, t) => {
              this.events.on(e, t);
            }),
            n7(this, "once", (e, t) => {
              this.events.once(e, t);
            }),
            n7(this, "off", (e, t) => {
              this.events.off(e, t);
            }),
            n7(this, "removeListener", (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, k.U5)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, k.oI)(this.logger);
        }
        async rpcPublish(e) {
          var t, i, r, s;
          let {
              topic: a,
              message: n,
              ttl: o = aN,
              prompt: c,
              tag: l,
              id: h,
              attestation: d,
              tvf: u,
            } = e,
            p = {
              method: sM(s$().protocol).publish,
              params: n4(
                {
                  topic: a,
                  message: n,
                  ttl: o,
                  prompt: c,
                  tag: l,
                  attestation: d,
                },
                u
              ),
              id: h,
            };
          s4(null == (t = p.params) ? void 0 : t.prompt) &&
            (null == (i = p.params) || delete i.prompt),
            s4(null == (r = p.params) ? void 0 : r.tag) &&
              (null == (s = p.params) || delete s.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: p,
            });
          let g = await this.relayer.request(p);
          return (
            this.relayer.events.emit(a_.publish, e),
            this.logger.debug("Successfully Published Payload"),
            g
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e, t) => {
            let i = e.attempt + 1;
            this.queue.set(t, n9(n4({}, e), { attempt: i }));
            let { topic: r, message: s, opts: a, attestation: n } = e;
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${i}`
            ),
              await this.rpcPublish(
                n9(n4({}, e), {
                  topic: r,
                  message: s,
                  ttl: a.ttl,
                  prompt: a.prompt,
                  tag: a.tag,
                  id: a.id,
                  attestation: n,
                  tvf: a.tvf,
                })
              ),
              this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(l.li.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1),
                this.relayer.events.emit(a_.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(a_.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      var ot = Object.defineProperty,
        oi = (e, t, i) =>
          t in e
            ? ot(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        or = (e, t, i) => oi(e, "symbol" != typeof t ? t + "" : t, i);
      class os {
        constructor() {
          or(this, "map", new Map()),
            or(this, "set", (e, t) => {
              let i = this.get(e);
              this.exists(e, t) || this.map.set(e, [...i, t]);
            }),
            or(this, "get", (e) => this.map.get(e) || []),
            or(this, "exists", (e, t) => this.get(e).includes(t)),
            or(this, "delete", (e, t) => {
              if (typeof t > "u") return void this.map.delete(e);
              if (!this.map.has(e)) return;
              let i = this.get(e);
              if (!this.exists(e, t)) return;
              let r = i.filter((e) => e !== t);
              if (!r.length) return void this.map.delete(e);
              this.map.set(e, r);
            }),
            or(this, "clear", () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var oa = Object.defineProperty,
        on = Object.defineProperties,
        oo = Object.getOwnPropertyDescriptors,
        oc = Object.getOwnPropertySymbols,
        ol = Object.prototype.hasOwnProperty,
        oh = Object.prototype.propertyIsEnumerable,
        od = (e, t, i) =>
          t in e
            ? oa(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        ou = (e, t) => {
          for (var i in t || (t = {})) ol.call(t, i) && od(e, i, t[i]);
          if (oc) for (var i of oc(t)) oh.call(t, i) && od(e, i, t[i]);
          return e;
        },
        op = (e, t) => on(e, oo(t)),
        og = (e, t, i) => od(e, "symbol" != typeof t ? t + "" : t, i);
      class of extends V {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            og(this, "subscriptions", new Map()),
            og(this, "topicMap", new os()),
            og(this, "events", new o.EventEmitter()),
            og(this, "name", "subscription"),
            og(this, "version", "0.3"),
            og(this, "pending", new Map()),
            og(this, "cached", []),
            og(this, "initialized", !1),
            og(this, "storagePrefix", ab),
            og(this, "subscribeTimeout", (0, ei.toMiliseconds)(ei.ONE_MINUTE)),
            og(
              this,
              "initialSubscribeTimeout",
              (0, ei.toMiliseconds)(15 * ei.ONE_SECOND)
            ),
            og(this, "clientId"),
            og(this, "batchSubscribeTopicsLimit", 500),
            og(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                await this.restore()),
                (this.initialized = !0);
            }),
            og(this, "subscribe", async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: e, opts: t },
                });
              try {
                let i = s$(t),
                  r = { topic: e, relay: i, transportType: t?.transportType };
                this.pending.set(e, r);
                let s = await this.rpcSubscribe(e, i, t);
                return (
                  "string" == typeof s &&
                    (this.onSubscribe(s, r),
                    this.logger.debug("Successfully Subscribed Topic"),
                    this.logger.trace({
                      type: "method",
                      method: "subscribe",
                      params: { topic: e, opts: t },
                    })),
                  s
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            og(this, "unsubscribe", async (e, t) => {
              this.isInitialized(),
                "u" > typeof t?.id
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            og(
              this,
              "isSubscribed",
              (e) =>
                new Promise((t) => {
                  t(this.topicMap.topics.includes(e));
                })
            ),
            og(
              this,
              "isKnownTopic",
              (e) =>
                new Promise((t) => {
                  t(
                    this.topicMap.topics.includes(e) ||
                      this.pending.has(e) ||
                      this.cached.some((t) => t.topic === e)
                  );
                })
            ),
            og(this, "on", (e, t) => {
              this.events.on(e, t);
            }),
            og(this, "once", (e, t) => {
              this.events.once(e, t);
            }),
            og(this, "off", (e, t) => {
              this.events.off(e, t);
            }),
            og(this, "removeListener", (e, t) => {
              this.events.removeListener(e, t);
            }),
            og(this, "start", async () => {
              await this.onConnect();
            }),
            og(this, "stop", async () => {
              await this.onDisconnect();
            }),
            og(this, "restart", async () => {
              await this.restore(), await this.onRestart();
            }),
            og(this, "checkPending", async () => {
              if (
                0 === this.pending.size &&
                (!this.initialized || !this.relayer.connected)
              )
                return;
              let e = [];
              this.pending.forEach((t) => {
                e.push(t);
              }),
                await this.batchSubscribe(e);
            }),
            og(this, "registerEventListeners", () => {
              this.relayer.core.heartbeat.on(l.li.pulse, async () => {
                await this.checkPending();
              }),
                this.events.on(ax.created, async (e) => {
                  let t = ax.created;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: "event", event: t, data: e }),
                    await this.persist();
                }),
                this.events.on(ax.deleted, async (e) => {
                  let t = ax.deleted;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: "event", event: t, data: e }),
                    await this.persist();
                });
            }),
            (this.relayer = e),
            (this.logger = (0, k.U5)(t, this.name)),
            (this.clientId = "");
        }
        get context() {
          return (0, k.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        get hasAnyTopics() {
          return (
            this.topicMap.topics.length > 0 ||
            this.pending.size > 0 ||
            this.cached.length > 0 ||
            this.subscriptions.size > 0
          );
        }
        hasSubscription(e, t) {
          let i = !1;
          try {
            i = this.getSubscription(e).topic === t;
          } catch {}
          return i;
        }
        reset() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          this.values.length > 0 && (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          let i = this.topicMap.get(e);
          await Promise.all(
            i.map(async (i) => await this.unsubscribeById(e, i, t))
          );
        }
        async unsubscribeById(e, t, i) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: i },
            });
          try {
            let r = s$(i);
            await this.restartToComplete({ topic: e, id: t, relay: r }),
              await this.rpcUnsubscribe(e, t, r);
            let s = s3("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, s),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: i },
              });
          } catch (e) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(e),
              e)
            );
          }
        }
        async rpcSubscribe(e, t, i) {
          var r;
          (i && i?.transportType !== aO.relay) ||
            (await this.restartToComplete({ topic: e, id: e, relay: t }));
          let s = { method: sM(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: s,
            });
          let a = null == (r = i?.internal) ? void 0 : r.throwOnFailedPublish;
          try {
            let t = await this.getSubscriptionId(e);
            if (i?.transportType === aO.link_mode)
              return (
                setTimeout(() => {
                  (this.relayer.connected || this.relayer.connecting) &&
                    this.relayer.request(s).catch((e) => this.logger.warn(e));
                }, (0, ei.toMiliseconds)(ei.ONE_SECOND)),
                t
              );
            let r = new Promise(async (t) => {
                let i = (r) => {
                  r.topic === e &&
                    (this.events.removeListener(ax.created, i), t(r.id));
                };
                this.events.on(ax.created, i);
                try {
                  let r = await tC(
                    new Promise((e, t) => {
                      this.relayer
                        .request(s)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), t(e);
                        })
                        .then(e);
                    }),
                    this.initialSubscribeTimeout,
                    `Subscribing to ${e} failed, please try again`
                  );
                  this.events.removeListener(ax.created, i), t(r);
                } catch {}
              }),
              n = await tC(
                r,
                this.subscribeTimeout,
                `Subscribing to ${e} failed, please try again`
              );
            if (!n && a)
              throw Error(`Subscribing to ${e} failed, please try again`);
            return n ? t : null;
          } catch (e) {
            if (
              (this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(a_.connection_stalled),
              a)
            )
              throw e;
          }
          return null;
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = {
            method: sM(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: t,
            });
          try {
            await await tC(
              new Promise((e) => {
                this.relayer
                  .request(t)
                  .catch((e) => this.logger.warn(e))
                  .then(e);
              }),
              this.subscribeTimeout,
              "rpcBatchSubscribe failed, please try again"
            );
          } catch {
            this.relayer.events.emit(a_.connection_stalled);
          }
        }
        async rpcBatchFetchMessages(e) {
          let t;
          if (!e.length) return;
          let i = {
            method: sM(e[0].relay.protocol).batchFetchMessages,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: i,
            });
          try {
            t = await await tC(
              new Promise((e, t) => {
                this.relayer
                  .request(i)
                  .catch((e) => {
                    this.logger.warn(e), t(e);
                  })
                  .then(e);
              }),
              this.subscribeTimeout,
              "rpcBatchFetchMessages failed, please try again"
            );
          } catch {
            this.relayer.events.emit(a_.connection_stalled);
          }
          return t;
        }
        rpcUnsubscribe(e, t, i) {
          let r = {
            method: sM(i.protocol).unsubscribe,
            params: { topic: e, id: t },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            }),
            this.relayer.request(r)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, op(ou({}, t), { id: e })),
            this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, ou({}, e)),
                this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, i) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, i),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t);
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, ou({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(ax.created, t);
        }
        getSubscription(e) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: e,
            });
          let t = this.subscriptions.get(e);
          if (!t) {
            let { message: t } = s5("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: e,
              reason: t,
            });
          let i = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(i.topic, e),
            this.events.emit(ax.deleted, op(ou({}, i), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values),
            this.events.emit(ax.sync);
        }
        async onRestart() {
          if (this.cached.length) {
            let e = [...this.cached],
              t = Math.ceil(
                this.cached.length / this.batchSubscribeTopicsLimit
              );
            for (let i = 0; i < t; i++) {
              let t = e.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(t);
            }
          }
          this.events.emit(ax.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = s5("RESTORE_WILL_OVERRIDE", this.name);
              throw (
                (this.logger.error(e),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`
                ),
                Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (e) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`
            ),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          e.length &&
            (await this.rpcBatchSubscribe(e),
            this.onBatchSubscribe(
              await Promise.all(
                e.map(async (e) =>
                  op(ou({}, e), { id: await this.getSubscriptionId(e.topic) })
                )
              )
            ));
        }
        async batchFetchMessages(e) {
          var t;
          if (!e.length) return;
          this.logger.trace(
            `Fetching batch messages for ${e.length} subscriptions`
          );
          let i = await this.rpcBatchFetchMessages(e);
          i &&
            i.messages &&
            (await ((t = (0, ei.toMiliseconds)(ei.ONE_SECOND)),
            new Promise((e) => setTimeout(e, t))),
            await this.relayer.handleBatchMessageEvents(i.messages));
        }
        async onConnect() {
          await this.restart(), this.reset();
        }
        onDisconnect() {
          this.onDisable();
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s5("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async restartToComplete(e) {
          this.relayer.connected ||
            this.relayer.connecting ||
            (this.cached.push(e), await this.relayer.transportOpen());
        }
        async getClientId() {
          return (
            this.clientId ||
              (this.clientId = await this.relayer.core.crypto.getClientId()),
            this.clientId
          );
        }
        async getSubscriptionId(e) {
          return sS(e + (await this.getClientId()));
        }
      }
      var om = Object.defineProperty,
        ow = Object.getOwnPropertySymbols,
        oy = Object.prototype.hasOwnProperty,
        ob = Object.prototype.propertyIsEnumerable,
        ov = (e, t, i) =>
          t in e
            ? om(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        oE = (e, t) => {
          for (var i in t || (t = {})) oy.call(t, i) && ov(e, i, t[i]);
          if (ow) for (var i of ow(t)) ob.call(t, i) && ov(e, i, t[i]);
          return e;
        },
        oC = (e, t, i) => ov(e, "symbol" != typeof t ? t + "" : t, i);
      class oI extends H {
        constructor(e) {
          super(e),
            oC(this, "protocol", "wc"),
            oC(this, "version", 2),
            oC(this, "core"),
            oC(this, "logger"),
            oC(this, "events", new o.EventEmitter()),
            oC(this, "provider"),
            oC(this, "messages"),
            oC(this, "subscriber"),
            oC(this, "publisher"),
            oC(this, "name", "relayer"),
            oC(this, "transportExplicitlyClosed", !1),
            oC(this, "initialized", !1),
            oC(this, "connectionAttemptInProgress", !1),
            oC(this, "relayUrl"),
            oC(this, "projectId"),
            oC(this, "packageName"),
            oC(this, "bundleId"),
            oC(this, "hasExperiencedNetworkDisruption", !1),
            oC(this, "pingTimeout"),
            oC(
              this,
              "heartBeatTimeout",
              (0, ei.toMiliseconds)(ei.THIRTY_SECONDS + ei.FIVE_SECONDS)
            ),
            oC(this, "reconnectTimeout"),
            oC(this, "connectPromise"),
            oC(this, "reconnectInProgress", !1),
            oC(this, "requestsInFlight", []),
            oC(
              this,
              "connectTimeout",
              (0, ei.toMiliseconds)(15 * ei.ONE_SECOND)
            ),
            oC(this, "request", async (e) => {
              var t, i;
              this.logger.debug("Publishing Request Payload");
              let r = e.id || (0, ag.getBigIntRpcId)().toString();
              await this.toEstablishConnection();
              try {
                this.logger.trace(
                  {
                    id: r,
                    method: e.method,
                    topic: null == (t = e.params) ? void 0 : t.topic,
                  },
                  "relayer.request - publishing..."
                );
                let s = `${r}:${
                  (null == (i = e.params) ? void 0 : i.tag) || ""
                }`;
                this.requestsInFlight.push(s);
                let a = await this.provider.request(e);
                return (
                  (this.requestsInFlight = this.requestsInFlight.filter(
                    (e) => e !== s
                  )),
                  a
                );
              } catch (e) {
                throw (this.logger.debug(`Failed to Publish Request: ${r}`), e);
              }
            }),
            oC(this, "resetPingTimeout", () => {
              td() &&
                (clearTimeout(this.pingTimeout),
                (this.pingTimeout = setTimeout(() => {
                  var e, t, i, r;
                  try {
                    this.logger.debug(
                      {},
                      "pingTimeout: Connection stalled, terminating..."
                    ),
                      null ==
                        (r =
                          null ==
                          (i =
                            null ==
                            (t =
                              null == (e = this.provider)
                                ? void 0
                                : e.connection)
                              ? void 0
                              : t.socket)
                            ? void 0
                            : i.terminate) || r.call(i);
                  } catch (e) {
                    this.logger.warn(e, e?.message);
                  }
                }, this.heartBeatTimeout)));
            }),
            oC(this, "onPayloadHandler", (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            oC(this, "onConnectHandler", () => {
              this.logger.warn({}, "Relayer connected \uD83D\uDEDC"),
                this.startPingTimeout(),
                this.events.emit(a_.connect);
            }),
            oC(this, "onDisconnectHandler", () => {
              this.logger.warn({}, "Relayer disconnected \uD83D\uDED1"),
                (this.requestsInFlight = []),
                this.onProviderDisconnect();
            }),
            oC(this, "onProviderErrorHandler", (e) => {
              this.logger.fatal(`Fatal socket error: ${e.message}`),
                this.events.emit(a_.error, e),
                this.logger.fatal(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            oC(this, "registerProviderListeners", () => {
              this.provider.on(aS.payload, this.onPayloadHandler),
                this.provider.on(aS.connect, this.onConnectHandler),
                this.provider.on(aS.disconnect, this.onDisconnectHandler),
                this.provider.on(aS.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              "u" > typeof e.logger && "string" != typeof e.logger
                ? (0, k.U5)(e.logger, this.name)
                : (0, k.h6)((0, k.iP)({ level: e.logger || "error" }))),
            (this.messages = new nQ(this.logger, e.core)),
            (this.subscriber = new of(this, this.logger)),
            (this.publisher = new oe(this, this.logger)),
            (this.relayUrl = e?.relayUrl || aA),
            (this.projectId = e.projectId),
            tu() &&
            "u" > typeof i.g &&
            "u" > typeof (null == i.g ? void 0 : i.g.Platform) &&
            (null == i.g ? void 0 : i.g.Platform.OS) === "android"
              ? (this.packageName = tf())
              : tu() &&
                "u" > typeof i.g &&
                "u" > typeof (null == i.g ? void 0 : i.g.Platform) &&
                (null == i.g ? void 0 : i.g.Platform.OS) === "ios" &&
                (this.bundleId = tf()),
            (this.provider = {});
        }
        async init() {
          if (
            (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await Promise.all([this.messages.init(), this.subscriber.init()]),
            (this.initialized = !0),
            this.subscriber.hasAnyTopics)
          )
            try {
              await this.transportOpen();
            } catch (e) {
              this.logger.warn(e, e?.message);
            }
        }
        get context() {
          return (0, k.oI)(this.logger);
        }
        get connected() {
          var e, t, i;
          return (
            (null ==
            (i =
              null == (t = null == (e = this.provider) ? void 0 : e.connection)
                ? void 0
                : t.socket)
              ? void 0
              : i.readyState) === 1
          );
        }
        get connecting() {
          var e, t, i;
          return (
            (null ==
            (i =
              null == (t = null == (e = this.provider) ? void 0 : e.connection)
                ? void 0
                : t.socket)
              ? void 0
              : i.readyState) === 0 || void 0 !== this.connectPromise
          );
        }
        async publish(e, t, i) {
          this.isInitialized(),
            await this.publisher.publish(e, t, i),
            await this.recordMessageEvent(
              {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: aO.relay,
              },
              aT.outbound
            );
        }
        async subscribe(e, t) {
          var i, r, s;
          this.isInitialized(),
            (null != t && t.transportType && t?.transportType !== "relay") ||
              (await this.toEstablishConnection());
          let a =
              typeof (null == (i = t?.internal)
                ? void 0
                : i.throwOnFailedPublish) > "u" ||
              (null == (r = t?.internal) ? void 0 : r.throwOnFailedPublish),
            n =
              (null == (s = this.subscriber.topicMap.get(e)) ? void 0 : s[0]) ||
              "",
            o,
            c = (t) => {
              t.topic === e && (this.subscriber.off(ax.created, c), o());
            };
          return (
            await Promise.all([
              new Promise((e) => {
                (o = e), this.subscriber.on(ax.created, c);
              }),
              new Promise(async (i, r) => {
                (n =
                  (await this.subscriber
                    .subscribe(
                      e,
                      oE({ internal: { throwOnFailedPublish: a } }, t)
                    )
                    .catch((e) => {
                      a && r(e);
                    })) || n),
                  i();
              }),
            ]),
            n
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportDisconnect() {
          this.provider.disconnect &&
          (this.hasExperiencedNetworkDisruption || this.connected)
            ? await tC(
                this.provider.disconnect(),
                2e3,
                "provider.disconnect()"
              ).catch(() => this.onProviderDisconnect())
            : this.onProviderDisconnect();
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0),
            await this.transportDisconnect();
        }
        async transportOpen(e) {
          if (!this.subscriber.hasAnyTopics)
            return void this.logger.warn(
              "Starting WS connection skipped because the client has no topics to work with."
            );
          if (
            (this.connectPromise
              ? (this.logger.debug(
                  {},
                  "Waiting for existing connection attempt to resolve..."
                ),
                await this.connectPromise,
                this.logger.debug({}, "Existing connection attempt resolved"))
              : ((this.connectPromise = new Promise(async (t, i) => {
                  await this.connect(e)
                    .then(t)
                    .catch(i)
                    .finally(() => {
                      this.connectPromise = void 0;
                    });
                })),
                await this.connectPromise),
            !this.connected)
          )
            throw Error(
              `Couldn't establish socket connection to the relay server: ${this.relayUrl}`
            );
        }
        async restartTransport(e) {
          this.logger.debug({}, "Restarting transport..."),
            this.connectionAttemptInProgress ||
              ((this.relayUrl = e || this.relayUrl),
              await this.confirmOnlineStateOrThrow(),
              await this.transportClose(),
              await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await al()))
            throw Error(
              "No internet connection detected. Please restart your network and try again."
            );
        }
        async handleBatchMessageEvents(e) {
          if (e?.length === 0)
            return void this.logger.trace(
              "Batch message events is empty. Ignoring..."
            );
          let t = e.sort((e, t) => e.publishedAt - t.publishedAt);
          for (let e of (this.logger.debug(
            `Batch of ${t.length} message events sorted`
          ),
          t))
            try {
              await this.onMessageEvent(e);
            } catch (e) {
              this.logger.warn(
                e,
                "Error while processing batch message event: " + e?.message
              );
            }
          this.logger.trace(`Batch of ${t.length} message events processed`);
        }
        async onLinkMessageEvent(e, t) {
          let { topic: i } = e;
          if (!t.sessionExists) {
            let e = tA(ei.FIVE_MINUTES);
            await this.core.pairing.pairings.set(i, {
              topic: i,
              expiry: e,
              relay: { protocol: "irn" },
              active: !1,
            });
          }
          this.events.emit(a_.message, e),
            await this.recordMessageEvent(e, aT.inbound);
        }
        async connect(e) {
          await this.confirmOnlineStateOrThrow(),
            e &&
              e !== this.relayUrl &&
              ((this.relayUrl = e), await this.transportDisconnect()),
            (this.connectionAttemptInProgress = !0),
            (this.transportExplicitlyClosed = !1);
          let t = 1;
          for (; t < 6; ) {
            try {
              if (this.transportExplicitlyClosed) break;
              this.logger.debug(
                {},
                `Connecting to ${this.relayUrl}, attempt: ${t}...`
              ),
                await this.createProvider(),
                await new Promise(async (e, t) => {
                  let i = () => {
                    t(
                      Error("Connection interrupted while trying to subscribe")
                    );
                  };
                  this.provider.once(aS.disconnect, i),
                    await tC(
                      new Promise((e, t) => {
                        this.provider.connect().then(e).catch(t);
                      }),
                      this.connectTimeout,
                      `Socket stalled when trying to connect to ${this.relayUrl}`
                    )
                      .catch((e) => {
                        t(e);
                      })
                      .finally(() => {
                        this.provider.off(aS.disconnect, i),
                          clearTimeout(this.reconnectTimeout);
                      }),
                    await new Promise(async (e, t) => {
                      let i = () => {
                        t(
                          Error(
                            "Connection interrupted while trying to subscribe"
                          )
                        );
                      };
                      this.provider.once(aS.disconnect, i),
                        await this.subscriber
                          .start()
                          .then(e)
                          .catch(t)
                          .finally(() => {
                            this.provider.off(aS.disconnect, i);
                          });
                    }),
                    (this.hasExperiencedNetworkDisruption = !1),
                    e();
                });
            } catch (e) {
              await this.subscriber.stop(),
                this.logger.warn({}, e.message),
                (this.hasExperiencedNetworkDisruption = !0);
            } finally {
              this.connectionAttemptInProgress = !1;
            }
            if (this.connected) {
              this.logger.debug(
                {},
                `Connected to ${this.relayUrl} successfully on attempt: ${t}`
              );
              break;
            }
            await new Promise((e) => setTimeout(e, (0, ei.toMiliseconds)(+t))),
              t++;
          }
        }
        startPingTimeout() {
          var e, t, i, r, s;
          if (td())
            try {
              null !=
                (t = null == (e = this.provider) ? void 0 : e.connection) &&
                t.socket &&
                (null ==
                  (s =
                    null ==
                    (r = null == (i = this.provider) ? void 0 : i.connection)
                      ? void 0
                      : r.socket) ||
                  s.on("ping", () => {
                    this.resetPingTimeout();
                  })),
                this.resetPingTimeout();
            } catch (e) {
              this.logger.warn(e, e?.message);
            }
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          let e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new ap.F(
            new af.A(
              (function ({
                protocol: e,
                version: t,
                relayUrl: i,
                sdkVersion: r,
                auth: s,
                projectId: a,
                useOnCloseEvent: n,
                bundleId: o,
                packageName: c,
              }) {
                let l = i.split("?"),
                  h = tw(e, t, r),
                  d = (function (e, t) {
                    let i = new URLSearchParams(e);
                    for (let e of Object.keys(t).sort())
                      if (t.hasOwnProperty(e)) {
                        let r = t[e];
                        void 0 !== r && i.set(e, r);
                      }
                    return i.toString();
                  })(l[1] || "", {
                    auth: s,
                    ua: h,
                    projectId: a,
                    useOnCloseEvent: n || void 0,
                    packageName: c || void 0,
                    bundleId: o || void 0,
                  });
                return l[0] + "?" + d;
              })({
                sdkVersion: aP,
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
                packageName: this.packageName,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e, t) {
          let { topic: i, message: r } = e;
          await this.messages.set(i, r, t);
        }
        async shouldIgnoreMessageEvent(e) {
          let { topic: t, message: i } = e;
          if (!i || 0 === i.length)
            return this.logger.warn(`Ignoring invalid/empty message: ${i}`), !0;
          if (!(await this.subscriber.isKnownTopic(t)))
            return (
              this.logger.warn(`Ignoring message for unknown topic ${t}`), !0
            );
          let r = this.messages.has(t, i);
          return r && this.logger.warn(`Ignoring duplicate message: ${i}`), r;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e,
            }),
            (0, ag.isJsonRpcRequest)(e))
          ) {
            if (!e.method.endsWith("_subscription")) return;
            let t = e.params,
              { topic: i, message: r, publishedAt: s, attestation: a } = t.data,
              n = {
                topic: i,
                message: r,
                publishedAt: s,
                transportType: aO.relay,
                attestation: a,
              };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(oE({ type: "event", event: t.id }, n)),
              this.events.emit(t.id, n),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(n);
          } else
            (0, ag.isJsonRpcResponse)(e) && this.events.emit(a_.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (await this.recordMessageEvent(e, aT.inbound),
            this.events.emit(a_.message, e));
        }
        async acknowledgePayload(e) {
          let t = (0, ag.formatJsonRpcResult)(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(aS.payload, this.onPayloadHandler),
            this.provider.off(aS.connect, this.onConnectHandler),
            this.provider.off(aS.disconnect, this.onDisconnectHandler),
            this.provider.off(aS.error, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let e = await al();
          (function (e) {
            var t, r;
            switch (tg()) {
              case th.browser:
                (t = e),
                  !tu() &&
                    tp() &&
                    (window.addEventListener("online", () => t(!0)),
                    window.addEventListener("offline", () => t(!1)));
                break;
              case th.reactNative:
                (r = e),
                  tu() &&
                    "u" > typeof i.g &&
                    null != i.g &&
                    i.g.NetInfo &&
                    i.g?.NetInfo.addEventListener((e) => r(e?.isConnected));
              case th.node:
            }
          })(async (t) => {
            e !== t &&
              ((e = t),
              t
                ? await this.transportOpen().catch((e) =>
                    this.logger.error(e, e?.message)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportDisconnect(),
                  (this.transportExplicitlyClosed = !1)));
          }),
            this.core.heartbeat.on(l.li.pulse, async () => {
              var e;
              if (
                !this.transportExplicitlyClosed &&
                !this.connected &&
                (!(tp() && (0, ea.getDocument)()) ||
                  (null == (e = (0, ea.getDocument)())
                    ? void 0
                    : e.visibilityState) === "visible")
              )
                try {
                  await this.confirmOnlineStateOrThrow(),
                    await this.transportOpen();
                } catch (e) {
                  this.logger.warn(e, e?.message);
                }
            });
        }
        async onProviderDisconnect() {
          clearTimeout(this.pingTimeout),
            this.events.emit(a_.disconnect),
            (this.connectionAttemptInProgress = !1),
            !this.reconnectInProgress &&
              ((this.reconnectInProgress = !0),
              await this.subscriber.stop(),
              this.subscriber.hasAnyTopics &&
                (this.transportExplicitlyClosed ||
                  (this.reconnectTimeout = setTimeout(async () => {
                    await this.transportOpen().catch((e) =>
                      this.logger.error(e, e?.message)
                    ),
                      (this.reconnectTimeout = void 0),
                      (this.reconnectInProgress = !1);
                  }, (0, ei.toMiliseconds)(0.1)))));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s5("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
            if (this.connectPromise) return void (await this.connectPromise);
            await this.connect();
          }
        }
      }
      function oN() {}
      function oA(e) {
        if (!e || "object" != typeof e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t ||
            t === Object.prototype ||
            null === Object.getPrototypeOf(t)) &&
          "[object Object]" === Object.prototype.toString.call(e)
        );
      }
      function o_(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function oS(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : Object.prototype.toString.call(e);
      }
      let oP = "[object Arguments]",
        oO = "[object Object]";
      var oT = Object.defineProperty,
        ok = Object.getOwnPropertySymbols,
        ox = Object.prototype.hasOwnProperty,
        oR = Object.prototype.propertyIsEnumerable,
        oU = (e, t, i) =>
          t in e
            ? oT(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        oD = (e, t) => {
          for (var i in t || (t = {})) ox.call(t, i) && oU(e, i, t[i]);
          if (ok) for (var i of ok(t)) oR.call(t, i) && oU(e, i, t[i]);
          return e;
        },
        o$ = (e, t, i) => oU(e, "symbol" != typeof t ? t + "" : t, i);
      class oM extends F {
        constructor(e, t, i, r = ab, s) {
          super(e, t, i, r),
            (this.core = e),
            (this.logger = t),
            (this.name = i),
            o$(this, "map", new Map()),
            o$(this, "version", "0.3"),
            o$(this, "cached", []),
            o$(this, "initialized", !1),
            o$(this, "getKey"),
            o$(this, "storagePrefix", ab),
            o$(this, "recentlyDeleted", []),
            o$(this, "recentlyDeletedLimit", 200),
            o$(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !s4(e)
                    ? this.map.set(this.getKey(e), e)
                    : (function (e) {
                        var t;
                        return null == (t = e?.proposer) ? void 0 : t.publicKey;
                      })(e)
                    ? this.map.set(e.id, e)
                    : e?.topic && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            o$(this, "set", async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: e,
                      value: t,
                    }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            o$(
              this,
              "get",
              (e) => (
                this.isInitialized(),
                this.logger.debug("Getting value"),
                this.logger.trace({ type: "method", method: "get", key: e }),
                this.getData(e)
              )
            ),
            o$(
              this,
              "getAll",
              (e) => (
                this.isInitialized(),
                e
                  ? this.values.filter((t) =>
                      Object.keys(e).every((i) => {
                        var r;
                        return (
                          (r = t[i]),
                          (function e(t, i, r, s, a, n, o) {
                            let c = o(t, i, r, s, a, n);
                            if (void 0 !== c) return c;
                            if (typeof t == typeof i)
                              switch (typeof t) {
                                case "bigint":
                                case "string":
                                case "boolean":
                                case "symbol":
                                case "undefined":
                                case "function":
                                  return t === i;
                                case "number":
                                  return t === i || Object.is(t, i);
                              }
                            return (function t(i, r, s, a) {
                              if (Object.is(i, r)) return !0;
                              let n = oS(i),
                                o = oS(r);
                              if (
                                (n === oP && (n = oO),
                                o === oP && (o = oO),
                                n !== o)
                              )
                                return !1;
                              switch (n) {
                                case "[object String]":
                                  return i.toString() === r.toString();
                                case "[object Number]": {
                                  let e = i.valueOf(),
                                    t = r.valueOf();
                                  return (
                                    e === t ||
                                    (Number.isNaN(e) && Number.isNaN(t))
                                  );
                                }
                                case "[object Boolean]":
                                case "[object Date]":
                                case "[object Symbol]":
                                  return Object.is(i.valueOf(), r.valueOf());
                                case "[object RegExp]":
                                  return (
                                    i.source === r.source && i.flags === r.flags
                                  );
                                case "[object Function]":
                                  return i === r;
                              }
                              let c = (s = s ?? new Map()).get(i),
                                l = s.get(r);
                              if (null != c && null != l) return c === r;
                              s.set(i, r), s.set(r, i);
                              try {
                                switch (n) {
                                  case "[object Map]":
                                    if (i.size !== r.size) return !1;
                                    for (let [t, n] of i.entries())
                                      if (
                                        !r.has(t) ||
                                        !e(n, r.get(t), t, i, r, s, a)
                                      )
                                        return !1;
                                    return !0;
                                  case "[object Set]": {
                                    if (i.size !== r.size) return !1;
                                    let t = Array.from(i.values()),
                                      n = Array.from(r.values());
                                    for (let o = 0; o < t.length; o++) {
                                      let c = t[o],
                                        l = n.findIndex((t) =>
                                          e(c, t, void 0, i, r, s, a)
                                        );
                                      if (-1 === l) return !1;
                                      n.splice(l, 1);
                                    }
                                    return !0;
                                  }
                                  case "[object Array]":
                                  case "[object Uint8Array]":
                                  case "[object Uint8ClampedArray]":
                                  case "[object Uint16Array]":
                                  case "[object Uint32Array]":
                                  case "[object BigUint64Array]":
                                  case "[object Int8Array]":
                                  case "[object Int16Array]":
                                  case "[object Int32Array]":
                                  case "[object BigInt64Array]":
                                  case "[object Float32Array]":
                                  case "[object Float64Array]":
                                    if (
                                      ("u" > typeof am &&
                                        am.isBuffer(i) !== am.isBuffer(r)) ||
                                      i.length !== r.length
                                    )
                                      return !1;
                                    for (let t = 0; t < i.length; t++)
                                      if (!e(i[t], r[t], t, i, r, s, a))
                                        return !1;
                                    return !0;
                                  case "[object ArrayBuffer]":
                                    return (
                                      i.byteLength === r.byteLength &&
                                      t(
                                        new Uint8Array(i),
                                        new Uint8Array(r),
                                        s,
                                        a
                                      )
                                    );
                                  case "[object DataView]":
                                    return (
                                      i.byteLength === r.byteLength &&
                                      i.byteOffset === r.byteOffset &&
                                      t(
                                        new Uint8Array(i),
                                        new Uint8Array(r),
                                        s,
                                        a
                                      )
                                    );
                                  case "[object Error]":
                                    return (
                                      i.name === r.name &&
                                      i.message === r.message
                                    );
                                  case oO: {
                                    if (
                                      !(
                                        t(i.constructor, r.constructor, s, a) ||
                                        (oA(i) && oA(r))
                                      )
                                    )
                                      return !1;
                                    let n = [...Object.keys(i), ...o_(i)],
                                      o = [...Object.keys(r), ...o_(r)];
                                    if (n.length !== o.length) return !1;
                                    for (let t = 0; t < n.length; t++) {
                                      let o = n[t],
                                        c = i[o];
                                      if (!Object.hasOwn(r, o)) return !1;
                                      let l = r[o];
                                      if (!e(c, l, o, i, r, s, a)) return !1;
                                    }
                                    return !0;
                                  }
                                  default:
                                    return !1;
                                }
                              } finally {
                                s.delete(i), s.delete(r);
                              }
                            })(t, i, n, o);
                          })(r, e[i], void 0, void 0, void 0, void 0, oN)
                        );
                      })
                    )
                  : this.values
              )
            ),
            o$(this, "update", async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: e,
                  update: t,
                });
              let i = oD(oD({}, this.getData(e)), t);
              this.map.set(e, i), await this.persist();
            }),
            o$(this, "delete", async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: e,
                    reason: t,
                  }),
                  this.map.delete(e),
                  this.addToRecentlyDeleted(e),
                  await this.persist());
            }),
            (this.logger = (0, k.U5)(t, this.name)),
            (this.storagePrefix = r),
            (this.getKey = s);
        }
        get context() {
          return (0, k.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        addToRecentlyDeleted(e) {
          this.recentlyDeleted.push(e),
            this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
              this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          let t = this.map.get(e);
          if (!t) {
            if (this.recentlyDeleted.includes(e)) {
              let { message: t } = s5(
                "MISSING_OR_INVALID",
                `Record was recently deleted - ${this.name}: ${e}`
              );
              throw (this.logger.error(t), Error(t));
            }
            let { message: t } = s5("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.error(t), Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            let e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
              let { message: e } = s5("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s5("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var oL = Object.defineProperty,
        oj = (e, t, i) =>
          t in e
            ? oL(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        oW = (e, t, i) => oj(e, "symbol" != typeof t ? t + "" : t, i);
      class oB {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            oW(this, "name", "pairing"),
            oW(this, "version", "0.3"),
            oW(this, "events", new (c())()),
            oW(this, "pairings"),
            oW(this, "initialized", !1),
            oW(this, "storagePrefix", ab),
            oW(this, "ignoredPayloadTypes", [1]),
            oW(this, "registeredMethods", []),
            oW(this, "init", async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            oW(this, "register", ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...e]),
                ]);
            }),
            oW(this, "create", async (e) => {
              this.isInitialized();
              let t = sA(),
                i = await this.core.crypto.setSymKey(t),
                r = tA(ei.FIVE_MINUTES),
                s = { protocol: "irn" },
                a = {
                  topic: i,
                  expiry: r,
                  relay: s,
                  active: !1,
                  methods: e?.methods,
                },
                n = sj({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: i,
                  symKey: t,
                  relay: s,
                  expiryTimestamp: r,
                  methods: e?.methods,
                });
              return (
                this.events.emit(aU.create, a),
                this.core.expirer.set(i, r),
                await this.pairings.set(i, a),
                await this.core.relayer.subscribe(i, {
                  transportType: e?.transportType,
                }),
                { topic: i, uri: n }
              );
            }),
            oW(this, "pair", async (e) => {
              let t;
              this.isInitialized();
              let i = this.core.eventClient.createEvent({
                properties: { topic: e?.uri, trace: [aW.pairing_started] },
              });
              this.isValidPair(e, i);
              let {
                topic: r,
                symKey: s,
                relay: a,
                expiryTimestamp: n,
                methods: o,
              } = sL(e.uri);
              if (
                ((i.props.properties.topic = r),
                i.addTrace(aW.pairing_uri_validation_success),
                i.addTrace(aW.pairing_uri_not_expired),
                this.pairings.keys.includes(r))
              ) {
                if (
                  ((t = this.pairings.get(r)),
                  i.addTrace(aW.existing_pairing),
                  t.active)
                )
                  throw (
                    (i.setError(aB.active_pairing_already_exists),
                    Error(
                      `Pairing already exists: ${r}. Please try again with a new connection URI.`
                    ))
                  );
                i.addTrace(aW.pairing_not_expired);
              }
              let c = n || tA(ei.FIVE_MINUTES),
                l = { topic: r, relay: a, expiry: c, active: !1, methods: o };
              this.core.expirer.set(r, c),
                await this.pairings.set(r, l),
                i.addTrace(aW.store_new_pairing),
                e.activatePairing && (await this.activate({ topic: r })),
                this.events.emit(aU.create, l),
                i.addTrace(aW.emit_inactive_pairing),
                this.core.crypto.keychain.has(r) ||
                  (await this.core.crypto.setSymKey(s, r)),
                i.addTrace(aW.subscribing_pairing_topic);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                i.setError(aB.no_internet_connection);
              }
              try {
                await this.core.relayer.subscribe(r, { relay: a });
              } catch (e) {
                throw (i.setError(aB.subscribe_pairing_topic_failure), e);
              }
              return i.addTrace(aW.subscribe_pairing_topic_success), l;
            }),
            oW(this, "activate", async ({ topic: e }) => {
              this.isInitialized();
              let t = tA(ei.FIVE_MINUTES);
              this.core.expirer.set(e, t),
                await this.pairings.update(e, { active: !0, expiry: t });
            }),
            oW(this, "ping", async (e) => {
              this.isInitialized(),
                await this.isValidPing(e),
                this.logger.warn(
                  "ping() is deprecated and will be removed in the next major release."
                );
              let { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                let e = await this.sendRequest(t, "wc_pairingPing", {}),
                  { done: i, resolve: r, reject: s } = tE();
                this.events.once(tS("pairing_ping", e), ({ error: e }) => {
                  e ? s(e) : r();
                }),
                  await i();
              }
            }),
            oW(this, "updateExpiry", async ({ topic: e, expiry: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { expiry: t });
            }),
            oW(this, "updateMetadata", async ({ topic: e, metadata: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { peerMetadata: t });
            }),
            oW(
              this,
              "getPairings",
              () => (this.isInitialized(), this.pairings.values)
            ),
            oW(this, "disconnect", async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(
                  t,
                  "wc_pairingDelete",
                  s3("USER_DISCONNECTED")
                ),
                await this.deletePairing(t));
            }),
            oW(this, "formatUriFromPairing", (e) => {
              this.isInitialized();
              let { topic: t, relay: i, expiry: r, methods: s } = e,
                a = this.core.crypto.keychain.get(t);
              return sj({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: t,
                symKey: a,
                relay: i,
                expiryTimestamp: r,
                methods: s,
              });
            }),
            oW(this, "sendRequest", async (e, t, i) => {
              let r = (0, ag.formatJsonRpcRequest)(t, i),
                s = await this.core.crypto.encode(e, r),
                a = aR[t].req;
              return (
                this.core.history.set(e, r),
                this.core.relayer.publish(e, s, a),
                r.id
              );
            }),
            oW(this, "sendResult", async (e, t, i) => {
              let r = (0, ag.formatJsonRpcResult)(e, i),
                s = await this.core.crypto.encode(t, r),
                a = aR[(await this.core.history.get(t, e)).request.method].res;
              await this.core.relayer.publish(t, s, a),
                await this.core.history.resolve(r);
            }),
            oW(this, "sendError", async (e, t, i) => {
              let r = (0, ag.formatJsonRpcError)(e, i),
                s = await this.core.crypto.encode(t, r),
                a = (await this.core.history.get(t, e)).request.method,
                n = aR[a] ? aR[a].res : aR.unregistered_method.res;
              await this.core.relayer.publish(t, s, n),
                await this.core.history.resolve(r);
            }),
            oW(this, "deletePairing", async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, s3("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            oW(this, "cleanup", async () => {
              let e = this.pairings.getAll().filter((e) => t_(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            oW(this, "onRelayEventRequest", async (e) => {
              let { topic: t, payload: i } = e;
              switch (i.method) {
                case "wc_pairingPing":
                  return await this.onPairingPingRequest(t, i);
                case "wc_pairingDelete":
                  return await this.onPairingDeleteRequest(t, i);
                default:
                  return await this.onUnknownRpcMethodRequest(t, i);
              }
            }),
            oW(this, "onRelayEventResponse", async (e) => {
              let { topic: t, payload: i } = e,
                r = (await this.core.history.get(t, i.id)).request.method;
              return "wc_pairingPing" === r
                ? this.onPairingPingResponse(t, i)
                : this.onUnknownRpcMethodResponse(r);
            }),
            oW(this, "onPairingPingRequest", async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(i, e, !0),
                  this.events.emit(aU.ping, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            oW(this, "onPairingPingResponse", (e, t) => {
              let { id: i } = t;
              setTimeout(() => {
                (0, ag.isJsonRpcResult)(t)
                  ? this.events.emit(tS("pairing_ping", i), {})
                  : (0, ag.isJsonRpcError)(t) &&
                    this.events.emit(tS("pairing_ping", i), { error: t.error });
              }, 500);
            }),
            oW(this, "onPairingDeleteRequest", async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(aU.delete, { id: i, topic: e });
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            oW(this, "onUnknownRpcMethodRequest", async (e, t) => {
              let { id: i, method: r } = t;
              try {
                if (this.registeredMethods.includes(r)) return;
                let t = s3("WC_METHOD_UNSUPPORTED", r);
                await this.sendError(i, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(i, e, t), this.logger.error(t);
              }
            }),
            oW(this, "onUnknownRpcMethodResponse", (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(s3("WC_METHOD_UNSUPPORTED", e));
            }),
            oW(this, "isValidPair", (e, t) => {
              var i;
              if (!aa(e)) {
                let { message: i } = s5(
                  "MISSING_OR_INVALID",
                  `pair() params: ${e}`
                );
                throw (t.setError(aB.malformed_pairing_uri), Error(i));
              }
              if (
                !(function (e) {
                  function t(e) {
                    try {
                      return "u" > typeof new URL(e);
                    } catch {
                      return !1;
                    }
                  }
                  try {
                    if (s9(e, !1)) {
                      if (t(e)) return !0;
                      let i = tU(e);
                      return t(i);
                    }
                  } catch {}
                  return !1;
                })(e.uri)
              ) {
                let { message: i } = s5(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${e.uri}`
                );
                throw (t.setError(aB.malformed_pairing_uri), Error(i));
              }
              let r = sL(e?.uri);
              if (!(null != (i = r?.relay) && i.protocol)) {
                let { message: e } = s5(
                  "MISSING_OR_INVALID",
                  "pair() uri#relay-protocol"
                );
                throw (t.setError(aB.malformed_pairing_uri), Error(e));
              }
              if (!(null != r && r.symKey)) {
                let { message: e } = s5(
                  "MISSING_OR_INVALID",
                  "pair() uri#symKey"
                );
                throw (t.setError(aB.malformed_pairing_uri), Error(e));
              }
              if (
                null != r &&
                r.expiryTimestamp &&
                (0, ei.toMiliseconds)(r?.expiryTimestamp) < Date.now()
              ) {
                t.setError(aB.pairing_expired);
                let { message: e } = s5(
                  "EXPIRED",
                  "pair() URI has expired. Please try again with a new connection URI."
                );
                throw Error(e);
              }
            }),
            oW(this, "isValidPing", async (e) => {
              if (!aa(e)) {
                let { message: t } = s5(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            oW(this, "isValidDisconnect", async (e) => {
              if (!aa(e)) {
                let { message: t } = s5(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            oW(this, "isValidPairingTopic", async (e) => {
              if (!s9(e, !1)) {
                let { message: t } = s5(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${e}`
                );
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = s5(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${e}`
                );
                throw Error(t);
              }
              if (t_(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = s5("EXPIRED", `pairing topic: ${e}`);
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, k.U5)(t, this.name)),
            (this.pairings = new oM(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return (0, k.oI)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s5("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(a_.message, async (e) => {
            let { topic: t, message: i, transportType: r } = e;
            if (
              this.pairings.keys.includes(t) &&
              r !== aO.link_mode &&
              !this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(i)
              )
            )
              try {
                let e = await this.core.crypto.decode(t, i);
                (0, ag.isJsonRpcRequest)(e)
                  ? (this.core.history.set(t, e),
                    await this.onRelayEventRequest({ topic: t, payload: e }))
                  : (0, ag.isJsonRpcResponse)(e) &&
                    (await this.core.history.resolve(e),
                    await this.onRelayEventResponse({ topic: t, payload: e }),
                    this.core.history.delete(t, e.id)),
                  await this.core.relayer.messages.ack(t, i);
              } catch (e) {
                this.logger.error(e);
              }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(a$.expired, async (e) => {
            let { topic: t } = tN(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0),
              this.events.emit(aU.expire, { topic: t }));
          });
        }
      }
      var oq = Object.defineProperty,
        oH = (e, t, i) =>
          t in e
            ? oq(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        oF = (e, t, i) => oH(e, "symbol" != typeof t ? t + "" : t, i);
      class oz extends W {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            oF(this, "records", new Map()),
            oF(this, "events", new o.EventEmitter()),
            oF(this, "name", "history"),
            oF(this, "version", "0.3"),
            oF(this, "cached", []),
            oF(this, "initialized", !1),
            oF(this, "storagePrefix", ab),
            oF(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            oF(this, "set", (e, t, i) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: e,
                  request: t,
                  chainId: i,
                }),
                this.records.has(t.id))
              )
                return;
              let r = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: i,
                expiry: tA(ei.THIRTY_DAYS),
              };
              this.records.set(r.id, r),
                this.persist(),
                this.events.emit(aD.created, r);
            }),
            oF(this, "resolve", async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: e,
                }),
                !this.records.has(e.id))
              )
                return;
              let t = await this.getRecord(e.id);
              typeof t.response > "u" &&
                ((t.response = (0, ag.isJsonRpcError)(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.persist(),
                this.events.emit(aD.updated, t));
            }),
            oF(
              this,
              "get",
              async (e, t) => (
                this.isInitialized(),
                this.logger.debug("Getting record"),
                this.logger.trace({
                  type: "method",
                  method: "get",
                  topic: e,
                  id: t,
                }),
                await this.getRecord(t)
              )
            ),
            oF(this, "delete", (e, t) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: t }),
                this.values.forEach((i) => {
                  i.topic === e &&
                    (("u" > typeof t && i.id !== t) ||
                      (this.records.delete(i.id),
                      this.events.emit(aD.deleted, i)));
                }),
                this.persist();
            }),
            oF(
              this,
              "exists",
              async (e, t) => (
                this.isInitialized(),
                !!this.records.has(t) && (await this.getRecord(t)).topic === e
              )
            ),
            oF(this, "on", (e, t) => {
              this.events.on(e, t);
            }),
            oF(this, "once", (e, t) => {
              this.events.once(e, t);
            }),
            oF(this, "off", (e, t) => {
              this.events.off(e, t);
            }),
            oF(this, "removeListener", (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, k.U5)(t, this.name));
        }
        get context() {
          return (0, k.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          let e = [];
          return (
            this.values.forEach((t) => {
              if ("u" > typeof t.response) return;
              let i = {
                topic: t.topic,
                request: (0, ag.formatJsonRpcRequest)(
                  t.request.method,
                  t.request.params,
                  t.id
                ),
                chainId: t.chainId,
              };
              return e.push(i);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          let t = this.records.get(e);
          if (!t) {
            let { message: t } = s5("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(aD.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
              let { message: e } = s5("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(aD.created, (e) => {
            let t = aD.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, record: e });
          }),
            this.events.on(aD.updated, (e) => {
              let t = aD.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e });
            }),
            this.events.on(aD.deleted, (e) => {
              let t = aD.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e });
            }),
            this.core.heartbeat.on(l.li.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t) => {
              (0, ei.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(aD.deleted, t, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s5("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var oV = Object.defineProperty,
        oK = (e, t, i) =>
          t in e
            ? oV(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        oG = (e, t, i) => oK(e, "symbol" != typeof t ? t + "" : t, i);
      class oJ extends K {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            oG(this, "expirations", new Map()),
            oG(this, "events", new o.EventEmitter()),
            oG(this, "name", "expirer"),
            oG(this, "version", "0.3"),
            oG(this, "cached", []),
            oG(this, "initialized", !1),
            oG(this, "storagePrefix", ab),
            oG(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            oG(this, "has", (e) => {
              try {
                let t = this.formatTarget(e);
                return "u" > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            oG(this, "set", (e, t) => {
              this.isInitialized();
              let i = this.formatTarget(e),
                r = { target: i, expiry: t };
              this.expirations.set(i, r),
                this.checkExpiry(i, r),
                this.events.emit(a$.created, { target: i, expiration: r });
            }),
            oG(this, "get", (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            oG(this, "del", (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  i = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(a$.deleted, { target: t, expiration: i });
              }
            }),
            oG(this, "on", (e, t) => {
              this.events.on(e, t);
            }),
            oG(this, "once", (e, t) => {
              this.events.once(e, t);
            }),
            oG(this, "off", (e, t) => {
              this.events.off(e, t);
            }),
            oG(this, "removeListener", (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, k.U5)(t, this.name));
        }
        get context() {
          return (0, k.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ("string" == typeof e) return tI("topic", e);
          if ("number" == typeof e) return tI("id", e);
          let { message: t } = s5("UNKNOWN_TYPE", `Target type: ${typeof e}`);
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(a$.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = s5("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          let t = this.expirations.get(e);
          if (!t) {
            let { message: t } = s5("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.warn(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: i } = t;
          (0, ei.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e),
            this.events.emit(a$.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(l.li.pulse, () => this.checkExpirations()),
            this.events.on(a$.created, (e) => {
              let t = a$.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(a$.expired, (e) => {
              let t = a$.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(a$.deleted, (e) => {
              let t = a$.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s5("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var oX = Object.defineProperty,
        oY = (e, t, i) =>
          t in e
            ? oX(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        oZ = (e, t, i) => oY(e, "symbol" != typeof t ? t + "" : t, i);
      class oQ extends G {
        constructor(e, t, i) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            (this.store = i),
            oZ(this, "name", "verify-api"),
            oZ(this, "abortController"),
            oZ(this, "isDevEnv"),
            oZ(this, "verifyUrlV3", aL),
            oZ(this, "storagePrefix", ab),
            oZ(this, "version", 2),
            oZ(this, "publicKey"),
            oZ(this, "fetchPromise"),
            oZ(this, "init", async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, ei.toMiliseconds)(
                    null == (e = this.publicKey) ? void 0 : e.expiresAt
                  ) < Date.now() &&
                  (this.logger.debug("verify v2 public key expired"),
                  await this.removePublicKey()));
            }),
            oZ(this, "register", async (e) => {
              if (!tp() || this.isDevEnv) return;
              let t = window.location.origin,
                { id: i, decryptedId: r } = e,
                s = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${i}&decryptedId=${r}`;
              try {
                let e = (0, ea.getDocument)(),
                  t = this.startAbortTimer(5 * ei.ONE_SECOND),
                  r = await new Promise((r, a) => {
                    let n = () => {
                      window.removeEventListener("message", c),
                        e.body.removeChild(o),
                        a("attestation aborted");
                    };
                    this.abortController.signal.addEventListener("abort", n);
                    let o = e.createElement("iframe");
                    (o.src = s),
                      (o.style.display = "none"),
                      o.addEventListener("error", n, {
                        signal: this.abortController.signal,
                      });
                    let c = (s) => {
                      if (s.data && "string" == typeof s.data)
                        try {
                          let a = JSON.parse(s.data);
                          if ("verify_attestation" === a.type) {
                            if ((0, er.Cq)(a.attestation).payload.id !== i)
                              return;
                            clearInterval(t),
                              e.body.removeChild(o),
                              this.abortController.signal.removeEventListener(
                                "abort",
                                n
                              ),
                              window.removeEventListener("message", c),
                              r(null === a.attestation ? "" : a.attestation);
                          }
                        } catch (e) {
                          this.logger.warn(e);
                        }
                    };
                    e.body.appendChild(o),
                      window.addEventListener("message", c, {
                        signal: this.abortController.signal,
                      });
                  });
                return this.logger.debug("jwt attestation", r), r;
              } catch (e) {
                this.logger.warn(e);
              }
              return "";
            }),
            oZ(this, "resolve", async (e) => {
              if (this.isDevEnv) return "";
              let { attestationId: t, hash: i, encryptedId: r } = e;
              if ("" === t)
                return void this.logger.debug(
                  "resolve: attestationId is empty, skipping"
                );
              if (t) {
                if ((0, er.Cq)(t).payload.id !== r) return;
                let e = await this.isValidJwtAttestation(t);
                if (e)
                  return e.isVerified
                    ? e
                    : void this.logger.warn(
                        "resolve: jwt attestation: origin url not verified"
                      );
              }
              if (!i) return;
              let s = this.getVerifyUrl(e?.verifyUrl);
              return this.fetchAttestation(i, s);
            }),
            oZ(this, "fetchAttestation", async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              let i = this.startAbortTimer(5 * ei.ONE_SECOND),
                r = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return (
                clearTimeout(i), 200 === r.status ? await r.json() : void 0
              );
            }),
            oZ(this, "getVerifyUrl", (e) => {
              let t = e || aM;
              return (
                aj.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${aM}`
                  ),
                  (t = aM)),
                t
              );
            }),
            oZ(this, "fetchPublicKey", async () => {
              try {
                this.logger.debug(
                  `fetching public key from: ${this.verifyUrlV3}`
                );
                let e = this.startAbortTimer(ei.FIVE_SECONDS),
                  t = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await t.json();
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            oZ(this, "persistPublicKey", async (e) => {
              this.logger.debug("persisting public key to local storage", e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            oZ(this, "removePublicKey", async () => {
              this.logger.debug("removing verify v2 public key from storage"),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            oZ(this, "isValidJwtAttestation", async (e) => {
              let t = await this.getPublicKey();
              try {
                if (t) return this.validateAttestation(e, t);
              } catch (e) {
                this.logger.error(e),
                  this.logger.warn("error validating attestation");
              }
              let i = await this.fetchAndPersistPublicKey();
              try {
                if (i) return this.validateAttestation(e, i);
              } catch (e) {
                this.logger.error(e),
                  this.logger.warn("error validating attestation");
              }
            }),
            oZ(this, "getPublicKey", async () =>
              this.publicKey
                ? this.publicKey
                : await this.fetchAndPersistPublicKey()
            ),
            oZ(this, "fetchAndPersistPublicKey", async () => {
              if (this.fetchPromise)
                return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                let t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              let e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            oZ(this, "validateAttestation", (e, t) => {
              let i = (function (e, t) {
                  let [i, r, s] = e.split("."),
                    a = e4.from(sk(s), "base64");
                  if (64 !== a.length) throw Error("Invalid signature length");
                  let n = a.slice(0, 32),
                    o = a.slice(32, 64),
                    c = rl(`${i}.${r}`),
                    l = (function (e) {
                      let t = e4.from(e.x, "base64"),
                        i = e4.from(e.y, "base64");
                      return (0, e3.xW)([new Uint8Array([4]), t, i]);
                    })(t);
                  if (!sb.verify((0, e3.xW)([n, o]), c, l))
                    throw Error("Invalid signature");
                  return (0, er.Cq)(e).payload;
                })(e, t.publicKey),
                r = {
                  hasExpired: (0, ei.toMiliseconds)(i.exp) < Date.now(),
                  payload: i,
                };
              if (r.hasExpired)
                throw (
                  (this.logger.warn("resolve: jwt attestation expired"),
                  Error("JWT attestation expired"))
                );
              return {
                origin: r.payload.origin,
                isScam: r.payload.isScam,
                isVerified: r.payload.isVerified,
              };
            }),
            (this.logger = (0, k.U5)(t, this.name)),
            (this.abortController = new AbortController()),
            (this.isDevEnv = tR()),
            this.init();
        }
        get storeKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//verify:public:key"
          );
        }
        get context() {
          return (0, k.oI)(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, ei.toMiliseconds)(e)
            )
          );
        }
      }
      var o0 = Object.defineProperty,
        o1 = (e, t, i) =>
          t in e
            ? o0(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        o2 = (e, t, i) => o1(e, "symbol" != typeof t ? t + "" : t, i);
      class o5 extends J {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            o2(this, "context", "echo"),
            o2(this, "registerDeviceToken", async (e) => {
              let {
                  clientId: t,
                  token: i,
                  notificationType: r,
                  enableEncrypted: s = !1,
                } = e,
                a = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fetch(a, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  client_id: t,
                  type: r,
                  token: i,
                  always_raw: s,
                }),
              });
            }),
            (this.logger = (0, k.U5)(t, this.context));
        }
      }
      var o3 = Object.defineProperty,
        o8 = Object.getOwnPropertySymbols,
        o6 = Object.prototype.hasOwnProperty,
        o4 = Object.prototype.propertyIsEnumerable,
        o9 = (e, t, i) =>
          t in e
            ? o3(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        o7 = (e, t) => {
          for (var i in t || (t = {})) o6.call(t, i) && o9(e, i, t[i]);
          if (o8) for (var i of o8(t)) o4.call(t, i) && o9(e, i, t[i]);
          return e;
        },
        ce = (e, t, i) => o9(e, "symbol" != typeof t ? t + "" : t, i);
      class ct extends X {
        constructor(e, t, i = !0) {
          super(e, t, i),
            (this.core = e),
            (this.logger = t),
            ce(this, "context", "event-client"),
            ce(this, "storagePrefix", ab),
            ce(this, "storageVersion", 0.1),
            ce(this, "events", new Map()),
            ce(this, "shouldPersist", !1),
            ce(this, "init", async () => {
              if (!tR())
                try {
                  let e = {
                    eventId: tx(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                      event: "INIT",
                      type: "",
                      properties: {
                        client_id: await this.core.crypto.getClientId(),
                        user_agent: tw(
                          this.core.relayer.protocol,
                          this.core.relayer.version,
                          aP
                        ),
                      },
                    },
                  };
                  await this.sendEvent([e]);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            ce(this, "createEvent", (e) => {
              let {
                  event: t = "ERROR",
                  type: i = "",
                  properties: { topic: r, trace: s },
                } = e,
                a = tx(),
                n = this.core.projectId || "",
                o = o7(
                  {
                    eventId: a,
                    timestamp: Date.now(),
                    props: {
                      event: t,
                      type: i,
                      properties: { topic: r, trace: s },
                    },
                    bundleId: n,
                    domain: this.getAppDomain(),
                  },
                  this.setMethods(a)
                );
              return (
                this.telemetryEnabled &&
                  (this.events.set(a, o), (this.shouldPersist = !0)),
                o
              );
            }),
            ce(this, "getEvent", (e) => {
              let { eventId: t, topic: i } = e;
              if (t) return this.events.get(t);
              let r = Array.from(this.events.values()).find(
                (e) => e.props.properties.topic === i
              );
              if (r) return o7(o7({}, r), this.setMethods(r.eventId));
            }),
            ce(this, "deleteEvent", (e) => {
              let { eventId: t } = e;
              this.events.delete(t), (this.shouldPersist = !0);
            }),
            ce(this, "setEventListeners", () => {
              this.core.heartbeat.on(l.li.pulse, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, ei.fromMiliseconds)(Date.now()) -
                      (0, ei.fromMiliseconds)(e.timestamp) >
                      86400 &&
                      (this.events.delete(e.eventId),
                      (this.shouldPersist = !0));
                  });
              });
            }),
            ce(this, "setMethods", (e) => ({
              addTrace: (t) => this.addTrace(e, t),
              setError: (t) => this.setError(e, t),
            })),
            ce(this, "addTrace", (e, t) => {
              let i = this.events.get(e);
              i &&
                (i.props.properties.trace.push(t),
                this.events.set(e, i),
                (this.shouldPersist = !0));
            }),
            ce(this, "setError", (e, t) => {
              let i = this.events.get(e);
              i &&
                ((i.props.type = t),
                (i.timestamp = Date.now()),
                this.events.set(e, i),
                (this.shouldPersist = !0));
            }),
            ce(this, "persist", async () => {
              await this.core.storage.setItem(
                this.storageKey,
                Array.from(this.events.values())
              ),
                (this.shouldPersist = !1);
            }),
            ce(this, "restore", async () => {
              try {
                let e =
                  (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(
                    e.eventId,
                    o7(o7({}, e), this.setMethods(e.eventId))
                  );
                });
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            ce(this, "submit", async () => {
              if (!this.telemetryEnabled || 0 === this.events.size) return;
              let e = [];
              for (let [t, i] of this.events) i.props.type && e.push(i);
              if (0 !== e.length)
                try {
                  if ((await this.sendEvent(e)).ok)
                    for (let t of e)
                      this.events.delete(t.eventId), (this.shouldPersist = !0);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            ce(this, "sendEvent", async (e) => {
              let t = this.getAppDomain() ? "" : "&sp=desktop";
              return await fetch(
                `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${aP}${t}`,
                { method: "POST", body: JSON.stringify(e) }
              );
            }),
            ce(this, "getAppDomain", () => tm().url),
            (this.logger = (0, k.U5)(t, this.context)),
            (this.telemetryEnabled = i),
            i
              ? this.restore().then(async () => {
                  await this.submit(), this.setEventListeners();
                })
              : this.persist();
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.storageVersion +
            this.core.customStoragePrefix +
            "//" +
            this.context
          );
        }
      }
      var ci = Object.defineProperty,
        cr = Object.getOwnPropertySymbols,
        cs = Object.prototype.hasOwnProperty,
        ca = Object.prototype.propertyIsEnumerable,
        cn = (e, t, i) =>
          t in e
            ? ci(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        co = (e, t) => {
          for (var i in t || (t = {})) cs.call(t, i) && cn(e, i, t[i]);
          if (cr) for (var i of cr(t)) ca.call(t, i) && cn(e, i, t[i]);
          return e;
        },
        cc = (e, t, i) => cn(e, "symbol" != typeof t ? t + "" : t, i);
      class cl extends $ {
        constructor(e) {
          var t;
          super(e),
            cc(this, "protocol", "wc"),
            cc(this, "version", 2),
            cc(this, "name", ay),
            cc(this, "relayUrl"),
            cc(this, "projectId"),
            cc(this, "customStoragePrefix"),
            cc(this, "events", new o.EventEmitter()),
            cc(this, "logger"),
            cc(this, "heartbeat"),
            cc(this, "relayer"),
            cc(this, "crypto"),
            cc(this, "storage"),
            cc(this, "history"),
            cc(this, "expirer"),
            cc(this, "pairing"),
            cc(this, "verify"),
            cc(this, "echoClient"),
            cc(this, "linkModeSupportedApps"),
            cc(this, "eventClient"),
            cc(this, "initialized", !1),
            cc(this, "logChunkController"),
            cc(this, "on", (e, t) => this.events.on(e, t)),
            cc(this, "once", (e, t) => this.events.once(e, t)),
            cc(this, "off", (e, t) => this.events.off(e, t)),
            cc(this, "removeListener", (e, t) =>
              this.events.removeListener(e, t)
            ),
            cc(
              this,
              "dispatchEnvelope",
              ({ topic: e, message: t, sessionExists: i }) => {
                if (!e || !t) return;
                let r = {
                  topic: e,
                  message: t,
                  publishedAt: Date.now(),
                  transportType: aO.link_mode,
                };
                this.relayer.onLinkMessageEvent(r, { sessionExists: i });
              }
            );
          let i = this.getGlobalCore(e?.customStoragePrefix);
          if (i)
            try {
              return (
                (this.customStoragePrefix = i.customStoragePrefix),
                (this.logger = i.logger),
                (this.heartbeat = i.heartbeat),
                (this.crypto = i.crypto),
                (this.history = i.history),
                (this.expirer = i.expirer),
                (this.storage = i.storage),
                (this.relayer = i.relayer),
                (this.pairing = i.pairing),
                (this.verify = i.verify),
                (this.echoClient = i.echoClient),
                (this.linkModeSupportedApps = i.linkModeSupportedApps),
                (this.eventClient = i.eventClient),
                (this.initialized = i.initialized),
                (this.logChunkController = i.logChunkController),
                i
              );
            } catch (e) {
              console.warn("Failed to copy global core", e);
            }
          (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || aA),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix
                ? `:${e.customStoragePrefix}`
                : "");
          let r = (0, k.iP)({
              level:
                "string" == typeof e?.logger && e.logger ? e.logger : av.logger,
              name: ay,
            }),
            { logger: s, chunkLoggerController: a } = (0, k.D5)({
              opts: r,
              maxSizeInBytes: e?.maxLogBlobSizeInBytes,
              loggerOverride: e?.logger,
            });
          (this.logChunkController = a),
            null != (t = this.logChunkController) &&
              t.downloadLogsBlobInBrowser &&
              (window.downloadLogsBlobInBrowser = async () => {
                var e, t;
                null != (e = this.logChunkController) &&
                  e.downloadLogsBlobInBrowser &&
                  (null == (t = this.logChunkController) ||
                    t.downloadLogsBlobInBrowser({
                      clientId: await this.crypto.getClientId(),
                    }));
              }),
            (this.logger = (0, k.U5)(s, this.name)),
            (this.heartbeat = new l.VH()),
            (this.crypto = new nq(this, this.logger, e?.keychain)),
            (this.history = new oz(this, this.logger)),
            (this.expirer = new oJ(this, this.logger)),
            (this.storage =
              null != e && e.storage
                ? e.storage
                : new T(co(co({}, aE), e?.storageOptions))),
            (this.relayer = new oI({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new oB(this, this.logger)),
            (this.verify = new oQ(this, this.logger, this.storage)),
            (this.echoClient = new o5(this.projectId || "", this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new ct(this, this.logger, e?.telemetryEnabled)),
            this.setGlobalCore(this);
        }
        static async init(e) {
          let t = new cl(e);
          await t.initialize();
          let i = await t.crypto.getClientId();
          return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", i), t;
        }
        get context() {
          return (0, k.oI)(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async getLogsBlob() {
          var e;
          return null == (e = this.logChunkController)
            ? void 0
            : e.logsToBlob({ clientId: await this.crypto.getClientId() });
        }
        async addLinkModeSupportedApp(e) {
          this.linkModeSupportedApps.includes(e) ||
            (this.linkModeSupportedApps.push(e),
            await this.storage.setItem(ak, this.linkModeSupportedApps));
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.linkModeSupportedApps =
                (await this.storage.getItem(ak)) || []),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (e) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                e
              ),
              this.logger.error(e.message),
              e)
            );
          }
        }
        getGlobalCore(e = "") {
          try {
            if (this.isGlobalCoreDisabled()) return;
            let t = `_walletConnectCore_${e}`,
              i = `${t}_count`;
            return (
              (globalThis[i] = (globalThis[i] || 0) + 1),
              globalThis[i] > 1 &&
                console.warn(
                  `WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i]} times.`
                ),
              globalThis[t]
            );
          } catch (e) {
            console.warn("Failed to get global WalletConnect core", e);
            return;
          }
        }
        setGlobalCore(e) {
          var t;
          try {
            if (this.isGlobalCoreDisabled()) return;
            let i = `_walletConnectCore_${
              (null == (t = e.opts) ? void 0 : t.customStoragePrefix) || ""
            }`;
            globalThis[i] = e;
          } catch (e) {
            console.warn("Failed to set global WalletConnect core", e);
          }
        }
        isGlobalCoreDisabled() {
          try {
            return "u" > typeof aw && "true" === aw.env.DISABLE_GLOBAL_CORE;
          } catch {
            return !0;
          }
        }
      }
      let ch = "client",
        cd = `wc@2:${ch}:`,
        cu = { name: ch, logger: "error" },
        cp = "WALLETCONNECT_DEEPLINK_CHOICE",
        cg = "Proposal expired",
        cf = ei.SEVEN_DAYS,
        cm = {
          wc_sessionPropose: {
            req: { ttl: ei.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: ei.FIVE_MINUTES, prompt: !1, tag: 1101 },
            reject: { ttl: ei.FIVE_MINUTES, prompt: !1, tag: 1120 },
            autoReject: { ttl: ei.FIVE_MINUTES, prompt: !1, tag: 1121 },
          },
          wc_sessionSettle: {
            req: { ttl: ei.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: ei.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: ei.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: ei.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: ei.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: ei.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: ei.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: ei.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: ei.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: ei.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: ei.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: ei.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: ei.ONE_DAY, prompt: !1, tag: 1114 },
            res: { ttl: ei.ONE_DAY, prompt: !1, tag: 1115 },
          },
          wc_sessionAuthenticate: {
            req: { ttl: ei.ONE_HOUR, prompt: !0, tag: 1116 },
            res: { ttl: ei.ONE_HOUR, prompt: !1, tag: 1117 },
            reject: { ttl: ei.FIVE_MINUTES, prompt: !1, tag: 1118 },
            autoReject: { ttl: ei.FIVE_MINUTES, prompt: !1, tag: 1119 },
          },
        },
        cw = { min: ei.FIVE_MINUTES, max: ei.SEVEN_DAYS },
        cy = { idle: "IDLE", active: "ACTIVE" },
        cb = {
          eth_sendTransaction: { key: "" },
          eth_sendRawTransaction: { key: "" },
          wallet_sendCalls: { key: "" },
          solana_signTransaction: { key: "signature" },
          solana_signAllTransactions: { key: "transactions" },
          solana_signAndSendTransaction: { key: "signature" },
        },
        cv = [
          "wc_sessionPropose",
          "wc_sessionRequest",
          "wc_authRequest",
          "wc_sessionAuthenticate",
        ],
        cE = "wc@1.5:auth:",
        cC = `${cE}:PUB_KEY`;
      var cI = Object.defineProperty,
        cN = Object.defineProperties,
        cA = Object.getOwnPropertyDescriptors,
        c_ = Object.getOwnPropertySymbols,
        cS = Object.prototype.hasOwnProperty,
        cP = Object.prototype.propertyIsEnumerable,
        cO = (e, t, i) =>
          t in e
            ? cI(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        cT = (e, t) => {
          for (var i in t || (t = {})) cS.call(t, i) && cO(e, i, t[i]);
          if (c_) for (var i of c_(t)) cP.call(t, i) && cO(e, i, t[i]);
          return e;
        },
        ck = (e, t) => cN(e, cA(t)),
        cx = (e, t, i) => cO(e, "symbol" != typeof t ? t + "" : t, i);
      class cR extends et {
        constructor(e) {
          super(e),
            cx(this, "name", "engine"),
            cx(this, "events", new (c())()),
            cx(this, "initialized", !1),
            cx(this, "requestQueue", { state: cy.idle, queue: [] }),
            cx(this, "sessionRequestQueue", { state: cy.idle, queue: [] }),
            cx(this, "requestQueueDelay", ei.ONE_SECOND),
            cx(this, "expectedPairingMethodMap", new Map()),
            cx(this, "recentlyDeletedMap", new Map()),
            cx(this, "recentlyDeletedLimit", 200),
            cx(this, "relayMessageCache", []),
            cx(this, "pendingSessions", new Map()),
            cx(this, "init", async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                await this.registerLinkModeListeners(),
                this.client.core.pairing.register({ methods: Object.keys(cm) }),
                (this.initialized = !0),
                setTimeout(async () => {
                  await this.processPendingMessageEvents(),
                    (this.sessionRequestQueue.queue =
                      this.getPendingSessionRequests()),
                    this.processSessionRequestQueue();
                }, (0, ei.toMiliseconds)(this.requestQueueDelay)));
            }),
            cx(this, "connect", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              let t = ck(cT({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t),
                (t.optionalNamespaces = (function (e, t) {
                  var i, r, s, a, n, o;
                  let c = sQ(e),
                    l = sQ(t),
                    h = {};
                  for (let e of Object.keys(c).concat(Object.keys(l)))
                    h[e] = {
                      chains: tP(
                        null == (i = c[e]) ? void 0 : i.chains,
                        null == (r = l[e]) ? void 0 : r.chains
                      ),
                      methods: tP(
                        null == (s = c[e]) ? void 0 : s.methods,
                        null == (a = l[e]) ? void 0 : a.methods
                      ),
                      events: tP(
                        null == (n = c[e]) ? void 0 : n.events,
                        null == (o = l[e]) ? void 0 : o.events
                      ),
                    };
                  return h;
                })(t.requiredNamespaces, t.optionalNamespaces)),
                (t.requiredNamespaces = {});
              let {
                  pairingTopic: i,
                  requiredNamespaces: r,
                  optionalNamespaces: s,
                  sessionProperties: a,
                  scopedProperties: n,
                  relays: o,
                } = t,
                c = i,
                l,
                h = !1;
              try {
                if (c) {
                  let e = this.client.core.pairing.pairings.get(c);
                  this.client.logger.warn(
                    "connect() with existing pairing topic is deprecated and will be removed in the next major release."
                  ),
                    (h = e.active);
                }
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `connect() -> pairing.get(${c}) failed`
                  ),
                  e)
                );
              }
              if (!c || !h) {
                let { topic: e, uri: t } =
                  await this.client.core.pairing.create();
                (c = e), (l = t);
              }
              if (!c) {
                let { message: e } = s5(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${c}`
                );
                throw Error(e);
              }
              let d = await this.client.core.crypto.generateKeyPair(),
                u = cm.wc_sessionPropose.req.ttl || ei.FIVE_MINUTES,
                p = tA(u),
                g = ck(
                  cT(
                    cT(
                      {
                        requiredNamespaces: r,
                        optionalNamespaces: s,
                        relays: o ?? [{ protocol: "irn" }],
                        proposer: {
                          publicKey: d,
                          metadata: this.client.metadata,
                        },
                        expiryTimestamp: p,
                        pairingTopic: c,
                      },
                      a && { sessionProperties: a }
                    ),
                    n && { scopedProperties: n }
                  ),
                  { id: (0, ag.payloadId)() }
                ),
                f = tS("session_connect", g.id),
                { reject: m, resolve: w, done: y } = tE(u, cg),
                b = ({ id: e }) => {
                  e === g.id &&
                    (this.client.events.off("proposal_expire", b),
                    this.pendingSessions.delete(g.id),
                    this.events.emit(f, { error: { message: cg, code: 0 } }));
                };
              return (
                this.client.events.on("proposal_expire", b),
                this.events.once(f, ({ error: e, session: t }) => {
                  this.client.events.off("proposal_expire", b),
                    e ? m(e) : t && w(t);
                }),
                await this.sendRequest({
                  topic: c,
                  method: "wc_sessionPropose",
                  params: g,
                  throwOnFailedPublish: !0,
                  clientRpcId: g.id,
                }),
                await this.setProposal(g.id, g),
                { uri: l, approval: y }
              );
            }),
            cx(this, "pair", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                return await this.client.core.pairing.pair(e);
              } catch (e) {
                throw (this.client.logger.error("pair() failed"), e);
              }
            }),
            cx(this, "approve", async (e) => {
              var t, i, r;
              let s = this.client.core.eventClient.createEvent({
                properties: {
                  topic: null == (t = e?.id) ? void 0 : t.toString(),
                  trace: [aq.session_approve_started],
                },
              });
              try {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
              } catch (e) {
                throw (s.setError(aH.no_internet_connection), e);
              }
              try {
                await this.isValidProposalId(e?.id);
              } catch (t) {
                throw (
                  (this.client.logger.error(
                    `approve() -> proposal.get(${e?.id}) failed`
                  ),
                  s.setError(aH.proposal_not_found),
                  t)
                );
              }
              try {
                await this.isValidApprove(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "approve() -> isValidApprove() failed"
                  ),
                  s.setError(aH.session_approve_namespace_validation_failure),
                  e)
                );
              }
              let {
                  id: a,
                  relayProtocol: n,
                  namespaces: o,
                  sessionProperties: c,
                  scopedProperties: l,
                  sessionConfig: h,
                } = e,
                d = this.client.proposal.get(a);
              this.client.core.eventClient.deleteEvent({ eventId: s.eventId });
              let {
                  pairingTopic: u,
                  proposer: p,
                  requiredNamespaces: g,
                  optionalNamespaces: f,
                } = d,
                m =
                  null == (i = this.client.core.eventClient)
                    ? void 0
                    : i.getEvent({ topic: u });
              m ||
                (m =
                  null == (r = this.client.core.eventClient)
                    ? void 0
                    : r.createEvent({
                        type: aq.session_approve_started,
                        properties: {
                          topic: u,
                          trace: [
                            aq.session_approve_started,
                            aq.session_namespaces_validation_success,
                          ],
                        },
                      }));
              let w = await this.client.core.crypto.generateKeyPair(),
                y = p.publicKey,
                b = await this.client.core.crypto.generateSharedKey(w, y),
                v = cT(
                  cT(
                    cT(
                      {
                        relay: { protocol: n ?? "irn" },
                        namespaces: o,
                        controller: {
                          publicKey: w,
                          metadata: this.client.metadata,
                        },
                        expiry: tA(cf),
                      },
                      c && { sessionProperties: c }
                    ),
                    l && { scopedProperties: l }
                  ),
                  h && { sessionConfig: h }
                ),
                E = aO.relay;
              m.addTrace(aq.subscribing_session_topic);
              try {
                await this.client.core.relayer.subscribe(b, {
                  transportType: E,
                });
              } catch (e) {
                throw (m.setError(aH.subscribe_session_topic_failure), e);
              }
              m.addTrace(aq.subscribe_session_topic_success);
              let C = ck(cT({}, v), {
                topic: b,
                requiredNamespaces: g,
                optionalNamespaces: f,
                pairingTopic: u,
                acknowledged: !1,
                self: v.controller,
                peer: { publicKey: p.publicKey, metadata: p.metadata },
                controller: w,
                transportType: aO.relay,
              });
              await this.client.session.set(b, C), m.addTrace(aq.store_session);
              try {
                m.addTrace(aq.publishing_session_settle),
                  await this.sendRequest({
                    topic: b,
                    method: "wc_sessionSettle",
                    params: v,
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (m?.setError(aH.session_settle_publish_failure), e);
                  }),
                  m.addTrace(aq.session_settle_publish_success),
                  m.addTrace(aq.publishing_session_approve),
                  await this.sendResult({
                    id: a,
                    topic: u,
                    result: {
                      relay: { protocol: n ?? "irn" },
                      responderPublicKey: w,
                    },
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (m?.setError(aH.session_approve_publish_failure), e);
                  }),
                  m.addTrace(aq.session_approve_publish_success);
              } catch (e) {
                throw (
                  (this.client.logger.error(e),
                  this.client.session.delete(b, s3("USER_DISCONNECTED")),
                  await this.client.core.relayer.unsubscribe(b),
                  e)
                );
              }
              return (
                this.client.core.eventClient.deleteEvent({
                  eventId: m.eventId,
                }),
                await this.client.core.pairing.updateMetadata({
                  topic: u,
                  metadata: p.metadata,
                }),
                await this.client.proposal.delete(a, s3("USER_DISCONNECTED")),
                await this.client.core.pairing.activate({ topic: u }),
                await this.setExpiry(b, tA(cf)),
                {
                  topic: b,
                  acknowledged: () =>
                    Promise.resolve(this.client.session.get(b)),
                }
              );
            }),
            cx(this, "reject", async (e) => {
              let t;
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidReject(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "reject() -> isValidReject() failed"
                  ),
                  e)
                );
              }
              let { id: i, reason: r } = e;
              try {
                t = this.client.proposal.get(i).pairingTopic;
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `reject() -> proposal.get(${i}) failed`
                  ),
                  e)
                );
              }
              t &&
                (await this.sendError({
                  id: i,
                  topic: t,
                  error: r,
                  rpcOpts: cm.wc_sessionPropose.reject,
                }),
                await this.client.proposal.delete(i, s3("USER_DISCONNECTED")));
            }),
            cx(this, "update", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidUpdate(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "update() -> isValidUpdate() failed"
                  ),
                  e)
                );
              }
              let { topic: t, namespaces: i } = e,
                { done: r, resolve: s, reject: a } = tE(),
                n = (0, ag.payloadId)(),
                o = (0, ag.getBigIntRpcId)().toString(),
                c = this.client.session.get(t).namespaces;
              return (
                this.events.once(tS("session_update", n), ({ error: e }) => {
                  e ? a(e) : s();
                }),
                await this.client.session.update(t, { namespaces: i }),
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionUpdate",
                  params: { namespaces: i },
                  throwOnFailedPublish: !0,
                  clientRpcId: n,
                  relayRpcId: o,
                }).catch((e) => {
                  this.client.logger.error(e),
                    this.client.session.update(t, { namespaces: c }),
                    a(e);
                }),
                { acknowledged: r }
              );
            }),
            cx(this, "extend", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidExtend(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "extend() -> isValidExtend() failed"
                  ),
                  e)
                );
              }
              let { topic: t } = e,
                i = (0, ag.payloadId)(),
                { done: r, resolve: s, reject: a } = tE();
              return (
                this.events.once(tS("session_extend", i), ({ error: e }) => {
                  e ? a(e) : s();
                }),
                await this.setExpiry(t, tA(cf)),
                this.sendRequest({
                  topic: t,
                  method: "wc_sessionExtend",
                  params: {},
                  clientRpcId: i,
                  throwOnFailedPublish: !0,
                }).catch((e) => {
                  a(e);
                }),
                { acknowledged: r }
              );
            }),
            cx(this, "request", async (e) => {
              this.isInitialized();
              try {
                await this.isValidRequest(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "request() -> isValidRequest() failed"
                  ),
                  e)
                );
              }
              let {
                  chainId: t,
                  request: i,
                  topic: r,
                  expiry: s = cm.wc_sessionRequest.req.ttl,
                } = e,
                a = this.client.session.get(r);
              a?.transportType === aO.relay &&
                (await this.confirmOnlineStateOrThrow());
              let n = (0, ag.payloadId)(),
                o = (0, ag.getBigIntRpcId)().toString(),
                {
                  done: c,
                  resolve: l,
                  reject: h,
                } = tE(s, "Request expired. Please try again.");
              this.events.once(
                tS("session_request", n),
                ({ error: e, result: t }) => {
                  e ? h(e) : l(t);
                }
              );
              let d = "wc_sessionRequest",
                u = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
              if (u)
                return (
                  await this.sendRequest({
                    clientRpcId: n,
                    relayRpcId: o,
                    topic: r,
                    method: d,
                    params: {
                      request: ck(cT({}, i), { expiryTimestamp: tA(s) }),
                      chainId: t,
                    },
                    expiry: s,
                    throwOnFailedPublish: !0,
                    appLink: u,
                  }).catch((e) => h(e)),
                  this.client.events.emit("session_request_sent", {
                    topic: r,
                    request: i,
                    chainId: t,
                    id: n,
                  }),
                  await c()
                );
              let p = {
                  request: ck(cT({}, i), { expiryTimestamp: tA(s) }),
                  chainId: t,
                },
                g = this.shouldSetTVF(d, p);
              return await Promise.all([
                new Promise(async (e) => {
                  await this.sendRequest(
                    cT(
                      {
                        clientRpcId: n,
                        relayRpcId: o,
                        topic: r,
                        method: d,
                        params: p,
                        expiry: s,
                        throwOnFailedPublish: !0,
                      },
                      g && { tvf: this.getTVFParams(n, p) }
                    )
                  ).catch((e) => h(e)),
                    this.client.events.emit("session_request_sent", {
                      topic: r,
                      request: i,
                      chainId: t,
                      id: n,
                    }),
                    e();
                }),
                new Promise(async (e) => {
                  var t;
                  if (!(null != (t = a.sessionConfig) && t.disableDeepLink)) {
                    let e = await tT(this.client.core.storage, cp);
                    await tO({ id: n, topic: r, wcDeepLink: e });
                  }
                  e();
                }),
                c(),
              ]).then((e) => e[2]);
            }),
            cx(this, "respond", async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              let { topic: t, response: i } = e,
                { id: r } = i,
                s = this.client.session.get(t);
              s.transportType === aO.relay &&
                (await this.confirmOnlineStateOrThrow());
              let a = this.getAppLinkIfEnabled(
                s.peer.metadata,
                s.transportType
              );
              (0, ag.isJsonRpcResult)(i)
                ? await this.sendResult({
                    id: r,
                    topic: t,
                    result: i.result,
                    throwOnFailedPublish: !0,
                    appLink: a,
                  })
                : (0, ag.isJsonRpcError)(i) &&
                  (await this.sendError({
                    id: r,
                    topic: t,
                    error: i.error,
                    appLink: a,
                  })),
                this.cleanupAfterResponse(e);
            }),
            cx(this, "ping", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidPing(e);
              } catch (e) {
                throw (
                  (this.client.logger.error("ping() -> isValidPing() failed"),
                  e)
                );
              }
              let { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                let e = (0, ag.payloadId)(),
                  i = (0, ag.getBigIntRpcId)().toString(),
                  { done: r, resolve: s, reject: a } = tE();
                this.events.once(tS("session_ping", e), ({ error: e }) => {
                  e ? a(e) : s();
                }),
                  await Promise.all([
                    this.sendRequest({
                      topic: t,
                      method: "wc_sessionPing",
                      params: {},
                      throwOnFailedPublish: !0,
                      clientRpcId: e,
                      relayRpcId: i,
                    }),
                    r(),
                  ]);
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (this.client.logger.warn(
                    "ping() on pairing topic is deprecated and will be removed in the next major release."
                  ),
                  await this.client.core.pairing.ping({ topic: t }));
            }),
            cx(this, "emit", async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidEmit(e);
              let { topic: t, event: i, chainId: r } = e,
                s = (0, ag.getBigIntRpcId)().toString(),
                a = (0, ag.payloadId)();
              await this.sendRequest({
                topic: t,
                method: "wc_sessionEvent",
                params: { event: i, chainId: r },
                throwOnFailedPublish: !0,
                relayRpcId: s,
                clientRpcId: a,
              });
            }),
            cx(this, "disconnect", async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidDisconnect(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t))
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionDelete",
                  params: s3("USER_DISCONNECTED"),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: t, emitEvent: !1 });
              else if (this.client.core.pairing.pairings.keys.includes(t))
                await this.client.core.pairing.disconnect({ topic: t });
              else {
                let { message: e } = s5(
                  "MISMATCHED_TOPIC",
                  `Session or pairing topic not found: ${t}`
                );
                throw Error(e);
              }
            }),
            cx(
              this,
              "find",
              (e) => (
                this.isInitialized(),
                this.client.session.getAll().filter((t) =>
                  (function (e, t) {
                    let { requiredNamespaces: i } = t,
                      r = Object.keys(e.namespaces),
                      s = Object.keys(i),
                      a = !0;
                    return (
                      !!ty(s, r) &&
                      (r.forEach((t) => {
                        let {
                            accounts: r,
                            methods: s,
                            events: n,
                          } = e.namespaces[t],
                          o = sX(r),
                          c = i[t];
                        (ty(te(t, c), o) &&
                          ty(c.methods, s) &&
                          ty(c.events, n)) ||
                          (a = !1);
                      }),
                      a)
                    );
                  })(t, e)
                )
              )
            ),
            cx(this, "getPendingSessionRequests", () =>
              this.client.pendingRequest.getAll()
            ),
            cx(this, "authenticate", async (e, t) => {
              var i, r, s;
              let a;
              this.isInitialized(), this.isValidAuthenticate(e);
              let n =
                  t &&
                  this.client.core.linkModeSupportedApps.includes(t) &&
                  (null == (i = this.client.metadata.redirect)
                    ? void 0
                    : i.linkMode),
                o = n ? aO.link_mode : aO.relay;
              o === aO.relay && (await this.confirmOnlineStateOrThrow());
              let {
                  chains: c,
                  statement: l = "",
                  uri: h,
                  domain: d,
                  nonce: u,
                  type: p,
                  exp: g,
                  nbf: f,
                  methods: m = [],
                  expiry: w,
                } = e,
                y = [...(e.resources || [])],
                { topic: b, uri: v } = await this.client.core.pairing.create({
                  methods: ["wc_sessionAuthenticate"],
                  transportType: o,
                });
              this.client.logger.info({
                message: "Generated new pairing",
                pairing: { topic: b, uri: v },
              });
              let E = await this.client.core.crypto.generateKeyPair(),
                C = s_(E);
              if (
                (await Promise.all([
                  this.client.auth.authKeys.set(cC, {
                    responseTopic: C,
                    publicKey: E,
                  }),
                  this.client.auth.pairingTopics.set(C, {
                    topic: C,
                    pairingTopic: b,
                  }),
                ]),
                await this.client.core.relayer.subscribe(C, {
                  transportType: o,
                }),
                this.client.logger.info(
                  `sending request to new pairing topic: ${b}`
                ),
                m.length > 0)
              ) {
                let { namespace: e } = e9(c[0]),
                  t = iP(
                    (function (e, t, i, r = {}) {
                      return (
                        i?.sort((e, t) => e.localeCompare(t)),
                        {
                          att: {
                            [e]: (function (e, t, i = {}) {
                              return Object.assign(
                                {},
                                ...(t = t?.sort((e, t) =>
                                  e.localeCompare(t)
                                )).map((t) => ({ [`${e}/${t}`]: [i] }))
                              );
                            })(t, i, r),
                          },
                        }
                      );
                    })(e, "request", m)
                  );
                ix(y) &&
                  ((r = t),
                  (s = y.pop()),
                  (t = iP(
                    (function (e, t) {
                      iS(e), iS(t);
                      let i = Object.keys(e.att)
                          .concat(Object.keys(t.att))
                          .sort((e, t) => e.localeCompare(t)),
                        r = { att: {} };
                      return (
                        i.forEach((i) => {
                          var s, a;
                          Object.keys(
                            (null == (s = e.att) ? void 0 : s[i]) || {}
                          )
                            .concat(
                              Object.keys(
                                (null == (a = t.att) ? void 0 : a[i]) || {}
                              )
                            )
                            .sort((e, t) => e.localeCompare(t))
                            .forEach((s) => {
                              var a, n;
                              r.att[i] = iv(ib({}, r.att[i]), {
                                [s]:
                                  (null == (a = e.att[i]) ? void 0 : a[s]) ||
                                  (null == (n = t.att[i]) ? void 0 : n[s]),
                              });
                            });
                        }),
                        r
                      );
                    })(iO(r), iO(s))
                  ))),
                  y.push(t);
              }
              let I =
                  w && w > cm.wc_sessionAuthenticate.req.ttl
                    ? w
                    : cm.wc_sessionAuthenticate.req.ttl,
                N = {
                  authPayload: {
                    type: p ?? "caip122",
                    chains: c,
                    statement: l,
                    aud: h,
                    domain: d,
                    version: "1",
                    nonce: u,
                    iat: new Date().toISOString(),
                    exp: g,
                    nbf: f,
                    resources: y,
                  },
                  requester: { publicKey: E, metadata: this.client.metadata },
                  expiryTimestamp: tA(I),
                },
                A = {
                  requiredNamespaces: {},
                  optionalNamespaces: {
                    eip155: {
                      chains: c,
                      methods: [...new Set(["personal_sign", ...m])],
                      events: ["chainChanged", "accountsChanged"],
                    },
                  },
                  relays: [{ protocol: "irn" }],
                  pairingTopic: b,
                  proposer: { publicKey: E, metadata: this.client.metadata },
                  expiryTimestamp: tA(cm.wc_sessionPropose.req.ttl),
                  id: (0, ag.payloadId)(),
                },
                { done: _, resolve: S, reject: P } = tE(I, "Request expired"),
                O = (0, ag.payloadId)(),
                T = tS("session_connect", A.id),
                k = tS("session_request", O),
                x = async ({ error: e, session: t }) => {
                  this.events.off(k, R), e ? P(e) : t && S({ session: t });
                },
                R = async (e) => {
                  var i, r, s;
                  let a;
                  if (
                    (await this.deletePendingAuthRequest(O, {
                      message: "fulfilled",
                      code: 0,
                    }),
                    e.error)
                  ) {
                    let t = s3(
                      "WC_METHOD_UNSUPPORTED",
                      "wc_sessionAuthenticate"
                    );
                    return e.error.code === t.code
                      ? void 0
                      : (this.events.off(T, x), P(e.error.message));
                  }
                  await this.deleteProposal(A.id), this.events.off(T, x);
                  let { cacaos: n, responder: c } = e.result,
                    l = [],
                    h = [];
                  for (let e of n) {
                    (await iA({
                      cacao: e,
                      projectId: this.client.core.projectId,
                    })) ||
                      (this.client.logger.error(
                        e,
                        "Signature verification failed"
                      ),
                      P(
                        s3(
                          "SESSION_SETTLEMENT_FAILED",
                          "Signature verification failed"
                        )
                      ));
                    let { p: t } = e,
                      i = ix(t.resources),
                      r = [iI(t.iss)],
                      s = iN(t.iss);
                    if (i) {
                      let e = iT(i),
                        t = ik(i);
                      l.push(...e), r.push(...t);
                    }
                    for (let e of r) h.push(`${e}:${s}`);
                  }
                  let d = await this.client.core.crypto.generateSharedKey(
                    E,
                    c.publicKey
                  );
                  l.length > 0 &&
                    ((a = {
                      topic: d,
                      acknowledged: !0,
                      self: { publicKey: E, metadata: this.client.metadata },
                      peer: c,
                      controller: c.publicKey,
                      expiry: tA(cf),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: "irn" },
                      pairingTopic: b,
                      namespaces: s0([...new Set(l)], [...new Set(h)]),
                      transportType: o,
                    }),
                    await this.client.core.relayer.subscribe(d, {
                      transportType: o,
                    }),
                    await this.client.session.set(d, a),
                    b &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: b,
                        metadata: c.metadata,
                      })),
                    (a = this.client.session.get(d))),
                    null != (i = this.client.metadata.redirect) &&
                      i.linkMode &&
                      null != (r = c.metadata.redirect) &&
                      r.linkMode &&
                      null != (s = c.metadata.redirect) &&
                      s.universal &&
                      t &&
                      (this.client.core.addLinkModeSupportedApp(
                        c.metadata.redirect.universal
                      ),
                      this.client.session.update(d, {
                        transportType: aO.link_mode,
                      })),
                    S({ auths: n, session: a });
                };
              this.events.once(T, x), this.events.once(k, R);
              try {
                if (n) {
                  let e = (0, ag.formatJsonRpcRequest)(
                    "wc_sessionAuthenticate",
                    N,
                    O
                  );
                  this.client.core.history.set(b, e);
                  let i = await this.client.core.crypto.encode("", e, {
                    type: 2,
                    encoding: sI,
                  });
                  a = sW(t, b, i);
                } else
                  await Promise.all([
                    this.sendRequest({
                      topic: b,
                      method: "wc_sessionAuthenticate",
                      params: N,
                      expiry: e.expiry,
                      throwOnFailedPublish: !0,
                      clientRpcId: O,
                    }),
                    this.sendRequest({
                      topic: b,
                      method: "wc_sessionPropose",
                      params: A,
                      expiry: cm.wc_sessionPropose.req.ttl,
                      throwOnFailedPublish: !0,
                      clientRpcId: A.id,
                    }),
                  ]);
              } catch (e) {
                throw (this.events.off(T, x), this.events.off(k, R), e);
              }
              return (
                await this.setProposal(A.id, A),
                await this.setAuthRequest(O, {
                  request: ck(cT({}, N), { verifyContext: {} }),
                  pairingTopic: b,
                  transportType: o,
                }),
                { uri: a ?? v, response: _ }
              );
            }),
            cx(this, "approveSessionAuthenticate", async (e) => {
              let t,
                { id: i, auths: r } = e,
                s = this.client.core.eventClient.createEvent({
                  properties: {
                    topic: i.toString(),
                    trace: [aF.authenticated_session_approve_started],
                  },
                });
              try {
                this.isInitialized();
              } catch (e) {
                throw (s.setError(az.no_internet_connection), e);
              }
              let a = this.getPendingAuthRequest(i);
              if (!a)
                throw (
                  (s.setError(
                    az.authenticated_session_pending_request_not_found
                  ),
                  Error(`Could not find pending auth request with id ${i}`))
                );
              let n = a.transportType || aO.relay;
              n === aO.relay && (await this.confirmOnlineStateOrThrow());
              let o = a.requester.publicKey,
                c = await this.client.core.crypto.generateKeyPair(),
                l = s_(o),
                h = { type: 1, receiverPublicKey: o, senderPublicKey: c },
                d = [],
                u = [];
              for (let e of r) {
                if (
                  !(await iA({
                    cacao: e,
                    projectId: this.client.core.projectId,
                  }))
                ) {
                  s.setError(az.invalid_cacao);
                  let e = s3(
                    "SESSION_SETTLEMENT_FAILED",
                    "Signature verification failed"
                  );
                  throw (
                    (await this.sendError({
                      id: i,
                      topic: l,
                      error: e,
                      encodeOpts: h,
                    }),
                    Error(e.message))
                  );
                }
                s.addTrace(aF.cacaos_verified);
                let { p: t } = e,
                  r = ix(t.resources),
                  a = [iI(t.iss)],
                  n = iN(t.iss);
                if (r) {
                  let e = iT(r),
                    t = ik(r);
                  d.push(...e), a.push(...t);
                }
                for (let e of a) u.push(`${e}:${n}`);
              }
              let p = await this.client.core.crypto.generateSharedKey(c, o);
              if (
                (s.addTrace(aF.create_authenticated_session_topic),
                d?.length > 0)
              ) {
                (t = {
                  topic: p,
                  acknowledged: !0,
                  self: { publicKey: c, metadata: this.client.metadata },
                  peer: { publicKey: o, metadata: a.requester.metadata },
                  controller: o,
                  expiry: tA(cf),
                  authentication: r,
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: "irn" },
                  pairingTopic: a.pairingTopic,
                  namespaces: s0([...new Set(d)], [...new Set(u)]),
                  transportType: n,
                }),
                  s.addTrace(aF.subscribing_authenticated_session_topic);
                try {
                  await this.client.core.relayer.subscribe(p, {
                    transportType: n,
                  });
                } catch (e) {
                  throw (
                    (s.setError(
                      az.subscribe_authenticated_session_topic_failure
                    ),
                    e)
                  );
                }
                s.addTrace(aF.subscribe_authenticated_session_topic_success),
                  await this.client.session.set(p, t),
                  s.addTrace(aF.store_authenticated_session),
                  await this.client.core.pairing.updateMetadata({
                    topic: a.pairingTopic,
                    metadata: a.requester.metadata,
                  });
              }
              s.addTrace(aF.publishing_authenticated_session_approve);
              try {
                await this.sendResult({
                  topic: l,
                  id: i,
                  result: {
                    cacaos: r,
                    responder: { publicKey: c, metadata: this.client.metadata },
                  },
                  encodeOpts: h,
                  throwOnFailedPublish: !0,
                  appLink: this.getAppLinkIfEnabled(a.requester.metadata, n),
                });
              } catch (e) {
                throw (
                  (s.setError(az.authenticated_session_approve_publish_failure),
                  e)
                );
              }
              return (
                await this.client.auth.requests.delete(i, {
                  message: "fulfilled",
                  code: 0,
                }),
                await this.client.core.pairing.activate({
                  topic: a.pairingTopic,
                }),
                this.client.core.eventClient.deleteEvent({
                  eventId: s.eventId,
                }),
                { session: t }
              );
            }),
            cx(this, "rejectSessionAuthenticate", async (e) => {
              this.isInitialized();
              let { id: t, reason: i } = e,
                r = this.getPendingAuthRequest(t);
              if (!r)
                throw Error(`Could not find pending auth request with id ${t}`);
              r.transportType === aO.relay &&
                (await this.confirmOnlineStateOrThrow());
              let s = r.requester.publicKey,
                a = await this.client.core.crypto.generateKeyPair(),
                n = s_(s);
              await this.sendError({
                id: t,
                topic: n,
                error: i,
                encodeOpts: {
                  type: 1,
                  receiverPublicKey: s,
                  senderPublicKey: a,
                },
                rpcOpts: cm.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(
                  r.requester.metadata,
                  r.transportType
                ),
              }),
                await this.client.auth.requests.delete(t, {
                  message: "rejected",
                  code: 0,
                }),
                await this.client.proposal.delete(t, s3("USER_DISCONNECTED"));
            }),
            cx(this, "formatAuthMessage", (e) => {
              this.isInitialized();
              let { request: t, iss: i } = e;
              return i_(t, i);
            }),
            cx(this, "processRelayMessageCache", () => {
              setTimeout(async () => {
                if (0 !== this.relayMessageCache.length)
                  for (; this.relayMessageCache.length > 0; )
                    try {
                      let e = this.relayMessageCache.shift();
                      e && (await this.onRelayMessage(e));
                    } catch (e) {
                      this.client.logger.error(e);
                    }
              }, 50);
            }),
            cx(this, "cleanupDuplicatePairings", async (e) => {
              if (e.pairingTopic)
                try {
                  let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                    i = this.client.core.pairing.pairings
                      .getAll()
                      .filter((i) => {
                        var r, s;
                        return (
                          (null == (r = i.peerMetadata) ? void 0 : r.url) &&
                          (null == (s = i.peerMetadata) ? void 0 : s.url) ===
                            e.peer.metadata.url &&
                          i.topic &&
                          i.topic !== t.topic
                        );
                      });
                  if (0 === i.length) return;
                  this.client.logger.info(
                    `Cleaning up ${i.length} duplicate pairing(s)`
                  ),
                    await Promise.all(
                      i.map((e) =>
                        this.client.core.pairing.disconnect({ topic: e.topic })
                      )
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished"
                    );
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            cx(this, "deleteSession", async (e) => {
              var t;
              let {
                  topic: i,
                  expirerHasDeleted: r = !1,
                  emitEvent: s = !0,
                  id: a = 0,
                } = e,
                { self: n } = this.client.session.get(i);
              await this.client.core.relayer.unsubscribe(i),
                await this.client.session.delete(i, s3("USER_DISCONNECTED")),
                this.addToRecentlyDeleted(i, "session"),
                this.client.core.crypto.keychain.has(n.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(n.publicKey)),
                this.client.core.crypto.keychain.has(i) &&
                  (await this.client.core.crypto.deleteSymKey(i)),
                r || this.client.core.expirer.del(i),
                this.client.core.storage
                  .removeItem(cp)
                  .catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === i &&
                    this.deletePendingSessionRequest(
                      e.id,
                      s3("USER_DISCONNECTED")
                    );
                }),
                i ===
                  (null == (t = this.sessionRequestQueue.queue[0])
                    ? void 0
                    : t.topic) && (this.sessionRequestQueue.state = cy.idle),
                s &&
                  this.client.events.emit("session_delete", {
                    id: a,
                    topic: i,
                  });
            }),
            cx(this, "deleteProposal", async (e, t) => {
              if (t)
                try {
                  let t = this.client.proposal.get(e),
                    i = this.client.core.eventClient.getEvent({
                      topic: t.pairingTopic,
                    });
                  i?.setError(aH.proposal_expired);
                } catch {}
              await Promise.all([
                this.client.proposal.delete(e, s3("USER_DISCONNECTED")),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, "proposal");
            }),
            cx(this, "deletePendingSessionRequest", async (e, t, i = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                i ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, "request"),
                (this.sessionRequestQueue.queue =
                  this.sessionRequestQueue.queue.filter((t) => t.id !== e)),
                i &&
                  ((this.sessionRequestQueue.state = cy.idle),
                  this.client.events.emit("session_request_expire", { id: e }));
            }),
            cx(this, "deletePendingAuthRequest", async (e, t, i = !1) => {
              await Promise.all([
                this.client.auth.requests.delete(e, t),
                i ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            cx(this, "setExpiry", async (e, t) => {
              this.client.session.keys.includes(e) &&
                (this.client.core.expirer.set(e, t),
                await this.client.session.update(e, { expiry: t }));
            }),
            cx(this, "setProposal", async (e, t) => {
              this.client.core.expirer.set(e, tA(cm.wc_sessionPropose.req.ttl)),
                await this.client.proposal.set(e, t);
            }),
            cx(this, "setAuthRequest", async (e, t) => {
              let {
                request: i,
                pairingTopic: r,
                transportType: s = aO.relay,
              } = t;
              this.client.core.expirer.set(e, i.expiryTimestamp),
                await this.client.auth.requests.set(e, {
                  authPayload: i.authPayload,
                  requester: i.requester,
                  expiryTimestamp: i.expiryTimestamp,
                  id: e,
                  pairingTopic: r,
                  verifyContext: i.verifyContext,
                  transportType: s,
                });
            }),
            cx(this, "setPendingSessionRequest", async (e) => {
              let { id: t, topic: i, params: r, verifyContext: s } = e,
                a =
                  r.request.expiryTimestamp || tA(cm.wc_sessionRequest.req.ttl);
              this.client.core.expirer.set(t, a),
                await this.client.pendingRequest.set(t, {
                  id: t,
                  topic: i,
                  params: r,
                  verifyContext: s,
                });
            }),
            cx(this, "sendRequest", async (e) => {
              let t,
                r,
                {
                  topic: s,
                  method: a,
                  params: n,
                  expiry: o,
                  relayRpcId: c,
                  clientRpcId: l,
                  throwOnFailedPublish: h,
                  appLink: d,
                  tvf: u,
                } = e,
                p = (0, ag.formatJsonRpcRequest)(a, n, l),
                g = !!d;
              try {
                let e = g ? sI : sC;
                t = await this.client.core.crypto.encode(s, p, { encoding: e });
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendRequest() -> core.crypto.encode() for topic ${s} failed`
                  ),
                  e)
                );
              }
              if (cv.includes(a)) {
                let e = sS(JSON.stringify(p)),
                  i = sS(t);
                r = await this.client.core.verify.register({
                  id: i,
                  decryptedId: e,
                });
              }
              let f = cm[a].req;
              if (
                ((f.attestation = r),
                o && (f.ttl = o),
                c && (f.id = c),
                this.client.core.history.set(s, p),
                g)
              ) {
                let e = sW(d, s, t);
                await i.g.Linking.openURL(e, this.client.name);
              } else {
                let e = cm[a].req;
                o && (e.ttl = o),
                  c && (e.id = c),
                  (e.tvf = ck(cT({}, u), { correlationId: p.id })),
                  h
                    ? ((e.internal = ck(cT({}, e.internal), {
                        throwOnFailedPublish: !0,
                      })),
                      await this.client.core.relayer.publish(s, t, e))
                    : this.client.core.relayer
                        .publish(s, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              return p.id;
            }),
            cx(this, "sendResult", async (e) => {
              let t,
                r,
                s,
                {
                  id: a,
                  topic: n,
                  result: o,
                  throwOnFailedPublish: c,
                  encodeOpts: l,
                  appLink: h,
                } = e,
                d = (0, ag.formatJsonRpcResult)(a, o),
                u = h && "u" > typeof (null == i.g ? void 0 : i.g.Linking);
              try {
                let e = u ? sI : sC;
                t = await this.client.core.crypto.encode(
                  n,
                  d,
                  ck(cT({}, l || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendResult() -> core.crypto.encode() for topic ${n} failed`
                  ),
                  e)
                );
              }
              try {
                let e = (r = await this.client.core.history.get(n, a)).request;
                try {
                  this.shouldSetTVF(e.method, e.params) &&
                    (s = this.getTVFParams(a, e.params, o));
                } catch (e) {
                  this.client.logger.warn(
                    "sendResult() -> getTVFParams() failed",
                    e
                  );
                }
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `sendResult() -> history.get(${n}, ${a}) failed`
                  ),
                  e)
                );
              }
              if (u) {
                let e = sW(h, n, t);
                await i.g.Linking.openURL(e, this.client.name);
              } else {
                let e = cm[r.request.method].res;
                (e.tvf = ck(cT({}, s), { correlationId: a })),
                  c
                    ? ((e.internal = ck(cT({}, e.internal), {
                        throwOnFailedPublish: !0,
                      })),
                      await this.client.core.relayer.publish(n, t, e))
                    : this.client.core.relayer
                        .publish(n, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              await this.client.core.history.resolve(d);
            }),
            cx(this, "sendError", async (e) => {
              let t,
                r,
                {
                  id: s,
                  topic: a,
                  error: n,
                  encodeOpts: o,
                  rpcOpts: c,
                  appLink: l,
                } = e,
                h = (0, ag.formatJsonRpcError)(s, n),
                d = l && "u" > typeof (null == i.g ? void 0 : i.g.Linking);
              try {
                let e = d ? sI : sC;
                t = await this.client.core.crypto.encode(
                  a,
                  h,
                  ck(cT({}, o || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendError() -> core.crypto.encode() for topic ${a} failed`
                  ),
                  e)
                );
              }
              try {
                r = await this.client.core.history.get(a, s);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `sendError() -> history.get(${a}, ${s}) failed`
                  ),
                  e)
                );
              }
              if (d) {
                let e = sW(l, a, t);
                await i.g.Linking.openURL(e, this.client.name);
              } else {
                let e = r.request.method,
                  i = c || cm[e].res;
                this.client.core.relayer.publish(a, t, i);
              }
              await this.client.core.history.resolve(h);
            }),
            cx(this, "cleanup", async () => {
              let e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                let i = !1;
                t_(t.expiry) && (i = !0),
                  this.client.core.crypto.keychain.has(t.topic) || (i = !0),
                  i && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  t_(e.expiryTimestamp) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession({ topic: e })),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            cx(this, "onProviderMessageEvent", async (e) => {
              !this.initialized || this.relayMessageCache.length > 0
                ? this.relayMessageCache.push(e)
                : await this.onRelayMessage(e);
            }),
            cx(this, "onRelayEventRequest", async (e) => {
              this.requestQueue.queue.push(e),
                await this.processRequestsQueue();
            }),
            cx(this, "processRequestsQueue", async () => {
              if (this.requestQueue.state === cy.active)
                return void this.client.logger.info(
                  "Request queue already active, skipping..."
                );
              for (
                this.client.logger.info(
                  `Request queue starting with ${this.requestQueue.queue.length} requests`
                );
                this.requestQueue.queue.length > 0;

              ) {
                this.requestQueue.state = cy.active;
                let e = this.requestQueue.queue.shift();
                if (e)
                  try {
                    await this.processRequest(e);
                  } catch (e) {
                    this.client.logger.warn(e);
                  }
              }
              this.requestQueue.state = cy.idle;
            }),
            cx(this, "processRequest", async (e) => {
              let {
                  topic: t,
                  payload: i,
                  attestation: r,
                  transportType: s,
                  encryptedId: a,
                } = e,
                n = i.method;
              if (
                !this.shouldIgnorePairingRequest({ topic: t, requestMethod: n })
              )
                switch (n) {
                  case "wc_sessionPropose":
                    return await this.onSessionProposeRequest({
                      topic: t,
                      payload: i,
                      attestation: r,
                      encryptedId: a,
                    });
                  case "wc_sessionSettle":
                    return await this.onSessionSettleRequest(t, i);
                  case "wc_sessionUpdate":
                    return await this.onSessionUpdateRequest(t, i);
                  case "wc_sessionExtend":
                    return await this.onSessionExtendRequest(t, i);
                  case "wc_sessionPing":
                    return await this.onSessionPingRequest(t, i);
                  case "wc_sessionDelete":
                    return await this.onSessionDeleteRequest(t, i);
                  case "wc_sessionRequest":
                    return await this.onSessionRequest({
                      topic: t,
                      payload: i,
                      attestation: r,
                      encryptedId: a,
                      transportType: s,
                    });
                  case "wc_sessionEvent":
                    return await this.onSessionEventRequest(t, i);
                  case "wc_sessionAuthenticate":
                    return await this.onSessionAuthenticateRequest({
                      topic: t,
                      payload: i,
                      attestation: r,
                      encryptedId: a,
                      transportType: s,
                    });
                  default:
                    return this.client.logger.info(
                      `Unsupported request method ${n}`
                    );
                }
            }),
            cx(this, "onRelayEventResponse", async (e) => {
              let { topic: t, payload: i, transportType: r } = e,
                s = (await this.client.core.history.get(t, i.id)).request
                  .method;
              switch (s) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(t, i, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(t, i);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(t, i);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(t, i);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(t, i);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(t, i);
                case "wc_sessionAuthenticate":
                  return this.onSessionAuthenticateResponse(t, i);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${s}`
                  );
              }
            }),
            cx(this, "onRelayEventUnknownPayload", (e) => {
              let { topic: t } = e,
                { message: i } = s5(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw Error(i);
            }),
            cx(this, "shouldIgnorePairingRequest", (e) => {
              let { topic: t, requestMethod: i } = e,
                r = this.expectedPairingMethodMap.get(t);
              return (
                !(!r || r.includes(i)) &&
                !!(
                  r.includes("wc_sessionAuthenticate") &&
                  this.client.events.listenerCount("session_authenticate") > 0
                )
              );
            }),
            cx(this, "onSessionProposeRequest", async (e) => {
              let { topic: t, payload: i, attestation: r, encryptedId: s } = e,
                { params: a, id: n } = i;
              try {
                let e = this.client.core.eventClient.getEvent({ topic: t });
                0 === this.client.events.listenerCount("session_proposal") &&
                  (console.warn("No listener for session_proposal event"),
                  e?.setError(aB.proposal_listener_not_found)),
                  this.isValidConnect(cT({}, i.params));
                let o = a.expiryTimestamp || tA(cm.wc_sessionPropose.req.ttl),
                  c = cT({ id: n, pairingTopic: t, expiryTimestamp: o }, a);
                await this.setProposal(n, c);
                let l = await this.getVerifyContext({
                  attestationId: r,
                  hash: sS(JSON.stringify(i)),
                  encryptedId: s,
                  metadata: c.proposer.metadata,
                });
                e?.addTrace(aW.emit_session_proposal),
                  this.client.events.emit("session_proposal", {
                    id: n,
                    params: c,
                    verifyContext: l,
                  });
              } catch (e) {
                await this.sendError({
                  id: n,
                  topic: t,
                  error: e,
                  rpcOpts: cm.wc_sessionPropose.autoReject,
                }),
                  this.client.logger.error(e);
              }
            }),
            cx(this, "onSessionProposeResponse", async (e, t, i) => {
              let { id: r } = t;
              if ((0, ag.isJsonRpcResult)(t)) {
                let { result: s } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: s,
                });
                let a = this.client.proposal.get(r);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: a,
                });
                let n = a.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: n,
                });
                let o = s.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: o,
                });
                let c = await this.client.core.crypto.generateSharedKey(n, o);
                this.pendingSessions.set(r, {
                  sessionTopic: c,
                  pairingTopic: e,
                  proposalId: r,
                  publicKey: n,
                });
                let l = await this.client.core.relayer.subscribe(c, {
                  transportType: i,
                });
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: l,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else if ((0, ag.isJsonRpcError)(t)) {
                await this.client.proposal.delete(r, s3("USER_DISCONNECTED"));
                let e = tS("session_connect", r);
                if (0 === this.events.listenerCount(e))
                  throw Error(`emitting ${e} without any listeners, 954`);
                this.events.emit(e, { error: t.error });
              }
            }),
            cx(this, "onSessionSettleRequest", async (e, t) => {
              let { id: i, params: r } = t;
              try {
                this.isValidSessionSettleRequest(r);
                let {
                    relay: i,
                    controller: s,
                    expiry: a,
                    namespaces: n,
                    sessionProperties: o,
                    scopedProperties: c,
                    sessionConfig: l,
                  } = t.params,
                  h = [...this.pendingSessions.values()].find(
                    (t) => t.sessionTopic === e
                  );
                if (!h)
                  return this.client.logger.error(
                    `Pending session not found for topic ${e}`
                  );
                let d = this.client.proposal.get(h.proposalId),
                  u = ck(
                    cT(
                      cT(
                        cT(
                          {
                            topic: e,
                            relay: i,
                            expiry: a,
                            namespaces: n,
                            acknowledged: !0,
                            pairingTopic: h.pairingTopic,
                            requiredNamespaces: d.requiredNamespaces,
                            optionalNamespaces: d.optionalNamespaces,
                            controller: s.publicKey,
                            self: {
                              publicKey: h.publicKey,
                              metadata: this.client.metadata,
                            },
                            peer: {
                              publicKey: s.publicKey,
                              metadata: s.metadata,
                            },
                          },
                          o && { sessionProperties: o }
                        ),
                        c && { scopedProperties: c }
                      ),
                      l && { sessionConfig: l }
                    ),
                    { transportType: aO.relay }
                  );
                await this.client.session.set(u.topic, u),
                  await this.setExpiry(u.topic, u.expiry),
                  await this.client.core.pairing.updateMetadata({
                    topic: h.pairingTopic,
                    metadata: u.peer.metadata,
                  }),
                  this.client.events.emit("session_connect", { session: u }),
                  this.events.emit(tS("session_connect", h.proposalId), {
                    session: u,
                  }),
                  this.pendingSessions.delete(h.proposalId),
                  this.deleteProposal(h.proposalId, !1),
                  this.cleanupDuplicatePairings(u),
                  await this.sendResult({
                    id: t.id,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            cx(this, "onSessionSettleResponse", async (e, t) => {
              let { id: i } = t;
              (0, ag.isJsonRpcResult)(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit(tS("session_approve", i), {}))
                : (0, ag.isJsonRpcError)(t) &&
                  (await this.client.session.delete(e, s3("USER_DISCONNECTED")),
                  this.events.emit(tS("session_approve", i), {
                    error: t.error,
                  }));
            }),
            cx(this, "onSessionUpdateRequest", async (e, t) => {
              let { params: i, id: r } = t;
              try {
                let t = `${e}_session_update`,
                  s = au.get(t);
                if (s && this.isRequestOutOfSync(s, r)) {
                  this.client.logger.warn(
                    `Discarding out of sync request - ${r}`
                  ),
                    this.sendError({
                      id: r,
                      topic: e,
                      error: s3("INVALID_UPDATE_REQUEST"),
                    });
                  return;
                }
                this.isValidUpdate(cT({ topic: e }, i));
                try {
                  au.set(t, r),
                    await this.client.session.update(e, {
                      namespaces: i.namespaces,
                    }),
                    await this.sendResult({
                      id: r,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    });
                } catch (e) {
                  throw (au.delete(t), e);
                }
                this.client.events.emit("session_update", {
                  id: r,
                  topic: e,
                  params: i,
                });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            cx(
              this,
              "isRequestOutOfSync",
              (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)
            ),
            cx(this, "onSessionUpdateResponse", (e, t) => {
              let { id: i } = t,
                r = tS("session_update", i);
              if (0 === this.events.listenerCount(r))
                throw Error(`emitting ${r} without any listeners`);
              (0, ag.isJsonRpcResult)(t)
                ? this.events.emit(tS("session_update", i), {})
                : (0, ag.isJsonRpcError)(t) &&
                  this.events.emit(tS("session_update", i), { error: t.error });
            }),
            cx(this, "onSessionExtendRequest", async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, tA(cf)),
                  await this.sendResult({
                    id: i,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_extend", {
                    id: i,
                    topic: e,
                  });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            cx(this, "onSessionExtendResponse", (e, t) => {
              let { id: i } = t,
                r = tS("session_extend", i);
              if (0 === this.events.listenerCount(r))
                throw Error(`emitting ${r} without any listeners`);
              (0, ag.isJsonRpcResult)(t)
                ? this.events.emit(tS("session_extend", i), {})
                : (0, ag.isJsonRpcError)(t) &&
                  this.events.emit(tS("session_extend", i), { error: t.error });
            }),
            cx(this, "onSessionPingRequest", async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({
                    id: i,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_ping", { id: i, topic: e });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            cx(this, "onSessionPingResponse", (e, t) => {
              let { id: i } = t,
                r = tS("session_ping", i);
              setTimeout(() => {
                if (0 === this.events.listenerCount(r))
                  throw Error(`emitting ${r} without any listeners 2176`);
                (0, ag.isJsonRpcResult)(t)
                  ? this.events.emit(tS("session_ping", i), {})
                  : (0, ag.isJsonRpcError)(t) &&
                    this.events.emit(tS("session_ping", i), { error: t.error });
              }, 500);
            }),
            cx(this, "onSessionDeleteRequest", async (e, t) => {
              let { id: i } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(a_.publish, async () => {
                        t(await this.deleteSession({ topic: e, id: i }));
                      });
                    }),
                    this.sendResult({
                      id: i,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: e,
                      error: s3("USER_DISCONNECTED"),
                    }),
                  ]).catch((e) => this.client.logger.error(e));
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            cx(this, "onSessionRequest", async (e) => {
              var t, i, r;
              let {
                  topic: s,
                  payload: a,
                  attestation: n,
                  encryptedId: o,
                  transportType: c,
                } = e,
                { id: l, params: h } = a;
              try {
                await this.isValidRequest(cT({ topic: s }, h));
                let e = this.client.session.get(s),
                  a = await this.getVerifyContext({
                    attestationId: n,
                    hash: sS(
                      JSON.stringify(
                        (0, ag.formatJsonRpcRequest)("wc_sessionRequest", h, l)
                      )
                    ),
                    encryptedId: o,
                    metadata: e.peer.metadata,
                    transportType: c,
                  }),
                  d = { id: l, topic: s, params: h, verifyContext: a };
                await this.setPendingSessionRequest(d),
                  c === aO.link_mode &&
                    null != (t = e.peer.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      null == (i = e.peer.metadata.redirect)
                        ? void 0
                        : i.universal
                    ),
                  null != (r = this.client.signConfig) && r.disableRequestQueue
                    ? this.emitSessionRequest(d)
                    : (this.addSessionRequestToSessionRequestQueue(d),
                      this.processSessionRequestQueue());
              } catch (e) {
                await this.sendError({ id: l, topic: s, error: e }),
                  this.client.logger.error(e);
              }
            }),
            cx(this, "onSessionRequestResponse", (e, t) => {
              let { id: i } = t,
                r = tS("session_request", i);
              if (0 === this.events.listenerCount(r))
                throw Error(`emitting ${r} without any listeners`);
              (0, ag.isJsonRpcResult)(t)
                ? this.events.emit(tS("session_request", i), {
                    result: t.result,
                  })
                : (0, ag.isJsonRpcError)(t) &&
                  this.events.emit(tS("session_request", i), {
                    error: t.error,
                  });
            }),
            cx(this, "onSessionEventRequest", async (e, t) => {
              let { id: i, params: r } = t;
              try {
                let t = `${e}_session_event_${r.event.name}`,
                  s = au.get(t);
                if (s && this.isRequestOutOfSync(s, i))
                  return void this.client.logger.info(
                    `Discarding out of sync request - ${i}`
                  );
                this.isValidEmit(cT({ topic: e }, r)),
                  this.client.events.emit("session_event", {
                    id: i,
                    topic: e,
                    params: r,
                  }),
                  au.set(t, i);
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            cx(this, "onSessionAuthenticateResponse", (e, t) => {
              let { id: i } = t;
              this.client.logger.trace({
                type: "method",
                method: "onSessionAuthenticateResponse",
                topic: e,
                payload: t,
              }),
                (0, ag.isJsonRpcResult)(t)
                  ? this.events.emit(tS("session_request", i), {
                      result: t.result,
                    })
                  : (0, ag.isJsonRpcError)(t) &&
                    this.events.emit(tS("session_request", i), {
                      error: t.error,
                    });
            }),
            cx(this, "onSessionAuthenticateRequest", async (e) => {
              var t;
              let {
                topic: i,
                payload: r,
                attestation: s,
                encryptedId: a,
                transportType: n,
              } = e;
              try {
                let {
                    requester: e,
                    authPayload: o,
                    expiryTimestamp: c,
                  } = r.params,
                  l = await this.getVerifyContext({
                    attestationId: s,
                    hash: sS(JSON.stringify(r)),
                    encryptedId: a,
                    metadata: e.metadata,
                    transportType: n,
                  }),
                  h = {
                    requester: e,
                    pairingTopic: i,
                    id: r.id,
                    authPayload: o,
                    verifyContext: l,
                    expiryTimestamp: c,
                  };
                await this.setAuthRequest(r.id, {
                  request: h,
                  pairingTopic: i,
                  transportType: n,
                }),
                  n === aO.link_mode &&
                    null != (t = e.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      e.metadata.redirect.universal
                    ),
                  this.client.events.emit("session_authenticate", {
                    topic: i,
                    params: r.params,
                    id: r.id,
                    verifyContext: l,
                  });
              } catch (a) {
                this.client.logger.error(a);
                let e = r.params.requester.publicKey,
                  t = await this.client.core.crypto.generateKeyPair(),
                  s = this.getAppLinkIfEnabled(r.params.requester.metadata, n);
                await this.sendError({
                  id: r.id,
                  topic: i,
                  error: a,
                  encodeOpts: {
                    type: 1,
                    receiverPublicKey: e,
                    senderPublicKey: t,
                  },
                  rpcOpts: cm.wc_sessionAuthenticate.autoReject,
                  appLink: s,
                });
              }
            }),
            cx(this, "addSessionRequestToSessionRequestQueue", (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            cx(this, "cleanupAfterResponse", (e) => {
              this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = cy.idle),
                    this.processSessionRequestQueue();
                }, (0, ei.toMiliseconds)(this.requestQueueDelay));
            }),
            cx(
              this,
              "cleanupPendingSentRequestsForTopic",
              ({ topic: e, error: t }) => {
                let i = this.client.core.history.pending;
                i.length > 0 &&
                  i
                    .filter(
                      (t) =>
                        t.topic === e &&
                        "wc_sessionRequest" === t.request.method
                    )
                    .forEach((e) => {
                      let i = tS("session_request", e.request.id);
                      if (0 === this.events.listenerCount(i))
                        throw Error(`emitting ${i} without any listeners`);
                      this.events.emit(tS("session_request", e.request.id), {
                        error: t,
                      });
                    });
              }
            ),
            cx(this, "processSessionRequestQueue", () => {
              if (this.sessionRequestQueue.state === cy.active)
                return void this.client.logger.info(
                  "session request queue is already active."
                );
              let e = this.sessionRequestQueue.queue[0];
              if (!e)
                return void this.client.logger.info(
                  "session request queue is empty."
                );
              try {
                (this.sessionRequestQueue.state = cy.active),
                  this.emitSessionRequest(e);
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            cx(this, "emitSessionRequest", (e) => {
              this.client.events.emit("session_request", e);
            }),
            cx(this, "onPairingCreated", (e) => {
              if (
                (e.methods &&
                  this.expectedPairingMethodMap.set(e.topic, e.methods),
                e.active)
              )
                return;
              let t = this.client.proposal
                .getAll()
                .find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest({
                  topic: e.topic,
                  payload: (0, ag.formatJsonRpcRequest)(
                    "wc_sessionPropose",
                    ck(cT({}, t), {
                      requiredNamespaces: t.requiredNamespaces,
                      optionalNamespaces: t.optionalNamespaces,
                      relays: t.relays,
                      proposer: t.proposer,
                      sessionProperties: t.sessionProperties,
                      scopedProperties: t.scopedProperties,
                    }),
                    t.id
                  ),
                });
            }),
            cx(this, "isValidConnect", async (e) => {
              if (!aa(e)) {
                let { message: t } = s5(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(e)}`
                );
                throw Error(t);
              }
              let {
                pairingTopic: t,
                requiredNamespaces: i,
                optionalNamespaces: r,
                sessionProperties: s,
                scopedProperties: a,
                relays: n,
              } = e;
              if (
                (s4(t) || (await this.isValidPairingTopic(t)),
                !(function (e, t) {
                  let i = !1;
                  return (
                    t && !e
                      ? (i = !0)
                      : e &&
                        s8(e) &&
                        e.length &&
                        e.forEach((e) => {
                          i = as(e);
                        }),
                    i
                  );
                })(n, !0))
              ) {
                let { message: e } = s5(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${n}`
                );
                throw Error(e);
              }
              if (!s4(i) && 0 !== s6(i)) {
                let e =
                  "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
                ["fatal", "error", "silent"].includes(this.client.logger.level)
                  ? console.warn(e)
                  : this.client.logger.warn(e),
                  this.validateNamespaces(i, "requiredNamespaces");
              }
              if (
                (s4(r) ||
                  0 === s6(r) ||
                  this.validateNamespaces(r, "optionalNamespaces"),
                s4(s) || this.validateSessionProps(s, "sessionProperties"),
                !s4(a))
              ) {
                this.validateSessionProps(a, "scopedProperties");
                let e = Object.keys(i || {}).concat(Object.keys(r || {}));
                if (!Object.keys(a).every((t) => e.includes(t)))
                  throw Error(
                    `Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(
                      a
                    )}, required/optional namespaces: ${JSON.stringify(e)}`
                  );
              }
            }),
            cx(this, "validateNamespaces", (e, t) => {
              let i = (function (e, t, i) {
                let r = null;
                if (e && s6(e)) {
                  let s,
                    a = ai(e, t);
                  a && (r = a);
                  let n =
                    ((s = null),
                    Object.entries(e).forEach(([e, r]) => {
                      var a, n;
                      let o;
                      if (s) return;
                      let c =
                        ((a = te(e, r)),
                        (n = `${t} ${i}`),
                        (o = null),
                        s8(a) && a.length
                          ? a.forEach((e) => {
                              o ||
                                ae(e) ||
                                (o = s3(
                                  "UNSUPPORTED_CHAINS",
                                  `${n}, chain ${e} should be a string and conform to "namespace:chainId" format`
                                ));
                            })
                          : ae(e) ||
                            (o = s3(
                              "UNSUPPORTED_CHAINS",
                              `${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                            )),
                        o);
                      c && (s = c);
                    }),
                    s);
                  n && (r = n);
                } else
                  r = s5(
                    "MISSING_OR_INVALID",
                    `${t}, ${i} should be an object with data`
                  );
                return r;
              })(e, "connect()", t);
              if (i) throw Error(i.message);
            }),
            cx(this, "isValidApprove", async (e) => {
              if (!aa(e))
                throw Error(
                  s5("MISSING_OR_INVALID", `approve() params: ${e}`).message
                );
              let {
                id: t,
                namespaces: i,
                relayProtocol: r,
                sessionProperties: s,
                scopedProperties: a,
              } = e;
              this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
              let n = this.client.proposal.get(t),
                o = ar(i, "approve()");
              if (o) throw Error(o.message);
              let c = ao(n.requiredNamespaces, i, "approve()");
              if (c) throw Error(c.message);
              if (!s9(r, !0)) {
                let { message: e } = s5(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${r}`
                );
                throw Error(e);
              }
              if (
                (s4(s) || this.validateSessionProps(s, "sessionProperties"),
                !s4(a))
              ) {
                this.validateSessionProps(a, "scopedProperties");
                let e = new Set(Object.keys(i));
                if (!Object.keys(a).every((t) => e.has(t)))
                  throw Error(
                    `Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(
                      a
                    )}, approved namespaces: ${Array.from(e).join(", ")}`
                  );
              }
            }),
            cx(this, "isValidReject", async (e) => {
              if (!aa(e)) {
                let { message: t } = s5(
                  "MISSING_OR_INVALID",
                  `reject() params: ${e}`
                );
                throw Error(t);
              }
              let { id: t, reason: i } = e;
              if (
                (this.checkRecentlyDeleted(t),
                await this.isValidProposalId(t),
                !(function (e) {
                  return !(
                    !e ||
                    "object" != typeof e ||
                    !e.code ||
                    !s7(e.code, !1) ||
                    !e.message ||
                    !s9(e.message, !1)
                  );
                })(i))
              ) {
                let { message: e } = s5(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            cx(this, "isValidSessionSettleRequest", (e) => {
              if (!aa(e)) {
                let { message: t } = s5(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${e}`
                );
                throw Error(t);
              }
              let { relay: t, controller: i, namespaces: r, expiry: s } = e;
              if (!as(t)) {
                let { message: e } = s5(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw Error(e);
              }
              let a = (function (e, t) {
                let i = null;
                return (
                  s9(e?.publicKey, !1) ||
                    (i = s5(
                      "MISSING_OR_INVALID",
                      `${t} controller public key should be a string`
                    )),
                  i
                );
              })(i, "onSessionSettleRequest()");
              if (a) throw Error(a.message);
              let n = ar(r, "onSessionSettleRequest()");
              if (n) throw Error(n.message);
              if (t_(s)) {
                let { message: e } = s5("EXPIRED", "onSessionSettleRequest()");
                throw Error(e);
              }
            }),
            cx(this, "isValidUpdate", async (e) => {
              if (!aa(e)) {
                let { message: t } = s5(
                  "MISSING_OR_INVALID",
                  `update() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, namespaces: i } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let r = this.client.session.get(t),
                s = ar(i, "update()");
              if (s) throw Error(s.message);
              let a = ao(r.requiredNamespaces, i, "update()");
              if (a) throw Error(a.message);
            }),
            cx(this, "isValidExtend", async (e) => {
              if (!aa(e)) {
                let { message: t } = s5(
                  "MISSING_OR_INVALID",
                  `extend() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
            }),
            cx(this, "isValidRequest", async (e) => {
              if (!aa(e)) {
                let { message: t } = s5(
                  "MISSING_OR_INVALID",
                  `request() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, request: i, chainId: r, expiry: s } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let { namespaces: a } = this.client.session.get(t);
              if (!an(a, r)) {
                let { message: e } = s5(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${r}`
                );
                throw Error(e);
              }
              if (
                !(function (e) {
                  return !(s4(e) || !s9(e.method, !1));
                })(i)
              ) {
                let { message: e } = s5(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
              if (
                !(function (e, t, i) {
                  return (
                    !!s9(i, !1) &&
                    (function (e, t) {
                      let i = [];
                      return (
                        Object.values(e).forEach((e) => {
                          sX(e.accounts).includes(t) && i.push(...e.methods);
                        }),
                        i
                      );
                    })(e, t).includes(i)
                  );
                })(a, r, i.method)
              ) {
                let { message: e } = s5(
                  "MISSING_OR_INVALID",
                  `request() method: ${i.method}`
                );
                throw Error(e);
              }
              if (
                s &&
                !(function (e, t) {
                  return s7(e, !1) && e <= t.max && e >= t.min;
                })(s, cw)
              ) {
                let { message: e } = s5(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${s}. Expiry must be a number (in seconds) between ${cw.min} and ${cw.max}`
                );
                throw Error(e);
              }
            }),
            cx(this, "isValidRespond", async (e) => {
              var t;
              if (!aa(e)) {
                let { message: t } = s5(
                  "MISSING_OR_INVALID",
                  `respond() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: i, response: r } = e;
              try {
                await this.isValidSessionTopic(i);
              } catch (i) {
                throw (
                  (null != (t = e?.response) &&
                    t.id &&
                    this.cleanupAfterResponse(e),
                  i)
                );
              }
              if (
                !(function (e) {
                  return !(
                    s4(e) ||
                    (s4(e.result) && s4(e.error)) ||
                    !s7(e.id, !1) ||
                    !s9(e.jsonrpc, !1)
                  );
                })(r)
              ) {
                let { message: e } = s5(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            cx(this, "isValidPing", async (e) => {
              if (!aa(e)) {
                let { message: t } = s5(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            cx(this, "isValidEmit", async (e) => {
              if (!aa(e)) {
                let { message: t } = s5(
                  "MISSING_OR_INVALID",
                  `emit() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, event: i, chainId: r } = e;
              await this.isValidSessionTopic(t);
              let { namespaces: s } = this.client.session.get(t);
              if (!an(s, r)) {
                let { message: e } = s5(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${r}`
                );
                throw Error(e);
              }
              if (
                !(function (e) {
                  return !(s4(e) || !s9(e.name, !1));
                })(i) ||
                !(function (e, t, i) {
                  return (
                    !!s9(i, !1) &&
                    (function (e, t) {
                      let i = [];
                      return (
                        Object.values(e).forEach((e) => {
                          sX(e.accounts).includes(t) && i.push(...e.events);
                        }),
                        i
                      );
                    })(e, t).includes(i)
                  );
                })(s, r, i.name)
              ) {
                let { message: e } = s5(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            cx(this, "isValidDisconnect", async (e) => {
              if (!aa(e)) {
                let { message: t } = s5(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            cx(this, "isValidAuthenticate", (e) => {
              let { chains: t, uri: i, domain: r, nonce: s } = e;
              if (!Array.isArray(t) || 0 === t.length)
                throw Error("chains is required and must be a non-empty array");
              if (!s9(i, !1)) throw Error("uri is required parameter");
              if (!s9(r, !1)) throw Error("domain is required parameter");
              if (!s9(s, !1)) throw Error("nonce is required parameter");
              if ([...new Set(t.map((e) => e9(e).namespace))].length > 1)
                throw Error(
                  "Multi-namespace requests are not supported. Please request single namespace only."
                );
              let { namespace: a } = e9(t[0]);
              if ("eip155" !== a)
                throw Error(
                  "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
                );
            }),
            cx(this, "getVerifyContext", async (e) => {
              let {
                  attestationId: t,
                  hash: i,
                  encryptedId: r,
                  metadata: s,
                  transportType: a,
                } = e,
                n = {
                  verified: {
                    verifyUrl: s.verifyUrl || aM,
                    validation: "UNKNOWN",
                    origin: s.url || "",
                  },
                };
              try {
                if (a === aO.link_mode) {
                  let e = this.getAppLinkIfEnabled(s, a);
                  return (
                    (n.verified.validation =
                      e && new URL(e).origin === new URL(s.url).origin
                        ? "VALID"
                        : "INVALID"),
                    n
                  );
                }
                let e = await this.client.core.verify.resolve({
                  attestationId: t,
                  hash: i,
                  encryptedId: r,
                  verifyUrl: s.verifyUrl,
                });
                e &&
                  ((n.verified.origin = e.origin),
                  (n.verified.isScam = e.isScam),
                  (n.verified.validation =
                    e.origin === new URL(s.url).origin ? "VALID" : "INVALID"));
              } catch (e) {
                this.client.logger.warn(e);
              }
              return (
                this.client.logger.debug(
                  `Verify context: ${JSON.stringify(n)}`
                ),
                n
              );
            }),
            cx(this, "validateSessionProps", (e, t) => {
              Object.values(e).forEach((i, r) => {
                if (null == i) {
                  let { message: s } = s5(
                    "MISSING_OR_INVALID",
                    `${t} must contain an existing value for each key. Received: ${i} for key ${
                      Object.keys(e)[r]
                    }`
                  );
                  throw Error(s);
                }
              });
            }),
            cx(this, "getPendingAuthRequest", (e) => {
              let t = this.client.auth.requests.get(e);
              return "object" == typeof t ? t : void 0;
            }),
            cx(this, "addToRecentlyDeleted", (e, t) => {
              if (
                (this.recentlyDeletedMap.set(e, t),
                this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
              ) {
                let e = 0,
                  t = this.recentlyDeletedLimit / 2;
                for (let i of this.recentlyDeletedMap.keys()) {
                  if (e++ >= t) break;
                  this.recentlyDeletedMap.delete(i);
                }
              }
            }),
            cx(this, "checkRecentlyDeleted", (e) => {
              let t = this.recentlyDeletedMap.get(e);
              if (t) {
                let { message: i } = s5(
                  "MISSING_OR_INVALID",
                  `Record was recently deleted - ${t}: ${e}`
                );
                throw Error(i);
              }
            }),
            cx(this, "isLinkModeEnabled", (e, t) => {
              var r, s, a, n, o, c, l, h, d;
              return (
                !!e &&
                t === aO.link_mode &&
                (null ==
                (s = null == (r = this.client.metadata) ? void 0 : r.redirect)
                  ? void 0
                  : s.linkMode) === !0 &&
                (null ==
                (n = null == (a = this.client.metadata) ? void 0 : a.redirect)
                  ? void 0
                  : n.universal) !== void 0 &&
                (null ==
                (c = null == (o = this.client.metadata) ? void 0 : o.redirect)
                  ? void 0
                  : c.universal) !== "" &&
                (null == (l = e?.redirect) ? void 0 : l.universal) !== void 0 &&
                (null == (h = e?.redirect) ? void 0 : h.universal) !== "" &&
                (null == (d = e?.redirect) ? void 0 : d.linkMode) === !0 &&
                this.client.core.linkModeSupportedApps.includes(
                  e.redirect.universal
                ) &&
                "u" > typeof (null == i.g ? void 0 : i.g.Linking)
              );
            }),
            cx(this, "getAppLinkIfEnabled", (e, t) => {
              var i;
              return this.isLinkModeEnabled(e, t)
                ? null == (i = e?.redirect)
                  ? void 0
                  : i.universal
                : void 0;
            }),
            cx(this, "handleLinkModeMessage", ({ url: e }) => {
              if (!e || !e.includes("wc_ev") || !e.includes("topic")) return;
              let t = tk(e, "topic") || "",
                i = decodeURIComponent(tk(e, "wc_ev") || ""),
                r = this.client.session.keys.includes(t);
              r &&
                this.client.session.update(t, { transportType: aO.link_mode }),
                this.client.core.dispatchEnvelope({
                  topic: t,
                  message: i,
                  sessionExists: r,
                });
            }),
            cx(this, "registerLinkModeListeners", async () => {
              var e;
              if (
                tR() ||
                (tu() &&
                  null != (e = this.client.metadata.redirect) &&
                  e.linkMode)
              ) {
                let e = null == i.g ? void 0 : i.g.Linking;
                if ("u" > typeof e) {
                  e.addEventListener(
                    "url",
                    this.handleLinkModeMessage,
                    this.client.name
                  );
                  let t = await e.getInitialURL();
                  t &&
                    setTimeout(() => {
                      this.handleLinkModeMessage({ url: t });
                    }, 50);
                }
              }
            }),
            cx(this, "shouldSetTVF", (e, t) => {
              if (!t || "wc_sessionRequest" !== e) return !1;
              let { request: i } = t;
              return Object.keys(cb).includes(i.method);
            }),
            cx(this, "getTVFParams", (e, t, i) => {
              var r, s;
              try {
                let a = t.request.method,
                  n = this.extractTxHashesFromResult(a, i);
                return ck(
                  cT(
                    { correlationId: e, rpcMethods: [a], chainId: t.chainId },
                    this.isValidContractData(t.request.params) && {
                      contractAddresses: [
                        null ==
                        (s = null == (r = t.request.params) ? void 0 : r[0])
                          ? void 0
                          : s.to,
                      ],
                    }
                  ),
                  { txHashes: n }
                );
              } catch (e) {
                this.client.logger.warn("Error getting TVF params", e);
              }
              return {};
            }),
            cx(this, "isValidContractData", (e) => {
              var t;
              if (!e) return !1;
              try {
                let i = e?.data || (null == (t = e?.[0]) ? void 0 : t.data);
                if (!i.startsWith("0x")) return !1;
                let r = i.slice(2);
                return !!/^[0-9a-fA-F]*$/.test(r) && r.length % 2 == 0;
              } catch {}
              return !1;
            }),
            cx(this, "extractTxHashesFromResult", (e, t) => {
              try {
                let i = cb[e];
                if ("string" == typeof t) return [t];
                let r = t[i.key];
                if (s8(r))
                  return "solana_signAllTransactions" === e
                    ? r.map((e) =>
                        (function (e) {
                          let t = atob(e),
                            i = new Uint8Array(t.length);
                          for (let e = 0; e < t.length; e++)
                            i[e] = t.charCodeAt(e);
                          let r = i[0];
                          if (0 === r) throw Error("No signatures found");
                          if (i.length < 1 + 64 * r)
                            throw Error(
                              "Transaction data too short for claimed signature count"
                            );
                          if (i.length < 100)
                            throw Error("Transaction too short");
                          let s = e4.from(e, "base64").slice(1, 65);
                          return e5.A.encode(s);
                        })(e)
                      )
                    : r;
                if ("string" == typeof r) return [r];
              } catch (e) {
                this.client.logger.warn(
                  "Error extracting tx hashes from result",
                  e
                );
              }
              return [];
            });
        }
        async processPendingMessageEvents() {
          try {
            let e = this.client.session.keys,
              t = this.client.core.relayer.messages.getWithoutAck(e);
            for (let [e, i] of Object.entries(t))
              for (let t of i)
                try {
                  await this.onProviderMessageEvent({
                    topic: e,
                    message: t,
                    publishedAt: Date.now(),
                  });
                } catch {
                  this.client.logger.warn(
                    `Error processing pending message event for topic: ${e}, message: ${t}`
                  );
                }
          } catch (e) {
            this.client.logger.warn("processPendingMessageEvents failed", e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = s5("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async confirmOnlineStateOrThrow() {
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(a_.message, (e) => {
            this.onProviderMessageEvent(e);
          });
        }
        async onRelayMessage(e) {
          let { topic: t, message: i, attestation: r, transportType: s } = e,
            { publicKey: a } = this.client.auth.authKeys.keys.includes(cC)
              ? this.client.auth.authKeys.get(cC)
              : { responseTopic: void 0, publicKey: void 0 };
          try {
            let e = await this.client.core.crypto.decode(t, i, {
              receiverPublicKey: a,
              encoding: s === aO.link_mode ? sI : sC,
            });
            (0, ag.isJsonRpcRequest)(e)
              ? (this.client.core.history.set(t, e),
                await this.onRelayEventRequest({
                  topic: t,
                  payload: e,
                  attestation: r,
                  transportType: s,
                  encryptedId: sS(i),
                }))
              : (0, ag.isJsonRpcResponse)(e)
              ? (await this.client.core.history.resolve(e),
                await this.onRelayEventResponse({
                  topic: t,
                  payload: e,
                  transportType: s,
                }),
                this.client.core.history.delete(t, e.id))
              : await this.onRelayEventUnknownPayload({
                  topic: t,
                  payload: e,
                  transportType: s,
                }),
              await this.client.core.relayer.messages.ack(t, i);
          } catch (e) {
            this.client.logger.error(e);
          }
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(a$.expired, async (e) => {
            let { topic: t, id: i } = tN(e.target);
            return i && this.client.pendingRequest.keys.includes(i)
              ? await this.deletePendingSessionRequest(i, s5("EXPIRED"), !0)
              : i && this.client.auth.requests.keys.includes(i)
              ? await this.deletePendingAuthRequest(i, s5("EXPIRED"), !0)
              : void (t
                  ? this.client.session.keys.includes(t) &&
                    (await this.deleteSession({
                      topic: t,
                      expirerHasDeleted: !0,
                    }),
                    this.client.events.emit("session_expire", { topic: t }))
                  : i &&
                    (await this.deleteProposal(i, !0),
                    this.client.events.emit("proposal_expire", { id: i })));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(aU.create, (e) =>
            this.onPairingCreated(e)
          ),
            this.client.core.pairing.events.on(aU.delete, (e) => {
              this.addToRecentlyDeleted(e.topic, "pairing");
            });
        }
        isValidPairingTopic(e) {
          if (!s9(e, !1)) {
            let { message: t } = s5(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let { message: t } = s5(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (t_(this.client.core.pairing.pairings.get(e).expiry)) {
            let { message: t } = s5("EXPIRED", `pairing topic: ${e}`);
            throw Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!s9(e, !1)) {
            let { message: t } = s5(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (
            (this.checkRecentlyDeleted(e),
            !this.client.session.keys.includes(e))
          ) {
            let { message: t } = s5(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (t_(this.client.session.get(e).expiry)) {
            await this.deleteSession({ topic: e });
            let { message: t } = s5("EXPIRED", `session topic: ${e}`);
            throw Error(t);
          }
          if (!this.client.core.crypto.keychain.has(e)) {
            let { message: t } = s5(
              "MISSING_OR_INVALID",
              `session topic does not exist in keychain: ${e}`
            );
            throw (await this.deleteSession({ topic: e }), Error(t));
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if (
            (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e))
          )
            await this.isValidSessionTopic(e);
          else if (this.client.core.pairing.pairings.keys.includes(e))
            this.isValidPairingTopic(e);
          else if (s9(e, !1)) {
            let { message: t } = s5(
              "NO_MATCHING_KEY",
              `session or pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          } else {
            let { message: t } = s5(
              "MISSING_OR_INVALID",
              `session or pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
        }
        async isValidProposalId(e) {
          if ("number" != typeof e) {
            let { message: t } = s5(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            let { message: t } = s5(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (t_(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            let { message: t } = s5("EXPIRED", `proposal id: ${e}`);
            throw Error(t);
          }
        }
      }
      class cU extends oM {
        constructor(e, t) {
          super(e, t, "proposal", cd), (this.core = e), (this.logger = t);
        }
      }
      class cD extends oM {
        constructor(e, t) {
          super(e, t, "session", cd), (this.core = e), (this.logger = t);
        }
      }
      class c$ extends oM {
        constructor(e, t) {
          super(e, t, "request", cd, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class cM extends oM {
        constructor(e, t) {
          super(e, t, "authKeys", cE, () => cC),
            (this.core = e),
            (this.logger = t);
        }
      }
      class cL extends oM {
        constructor(e, t) {
          super(e, t, "pairingTopics", cE), (this.core = e), (this.logger = t);
        }
      }
      class cj extends oM {
        constructor(e, t) {
          super(e, t, "requests", cE, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      var cW = Object.defineProperty,
        cB = (e, t, i) =>
          t in e
            ? cW(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        cq = (e, t, i) => cB(e, "symbol" != typeof t ? t + "" : t, i);
      class cH {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            cq(this, "authKeys"),
            cq(this, "pairingTopics"),
            cq(this, "requests"),
            (this.authKeys = new cM(this.core, this.logger)),
            (this.pairingTopics = new cL(this.core, this.logger)),
            (this.requests = new cj(this.core, this.logger));
        }
        async init() {
          await this.authKeys.init(),
            await this.pairingTopics.init(),
            await this.requests.init();
        }
      }
      var cF = Object.defineProperty,
        cz = (e, t, i) =>
          t in e
            ? cF(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        cV = (e, t, i) => cz(e, "symbol" != typeof t ? t + "" : t, i);
      class cK extends ee {
        constructor(e) {
          super(e),
            cV(this, "protocol", "wc"),
            cV(this, "version", 2),
            cV(this, "name", cu.name),
            cV(this, "metadata"),
            cV(this, "core"),
            cV(this, "logger"),
            cV(this, "events", new o.EventEmitter()),
            cV(this, "engine"),
            cV(this, "session"),
            cV(this, "proposal"),
            cV(this, "pendingRequest"),
            cV(this, "auth"),
            cV(this, "signConfig"),
            cV(this, "on", (e, t) => this.events.on(e, t)),
            cV(this, "once", (e, t) => this.events.once(e, t)),
            cV(this, "off", (e, t) => this.events.off(e, t)),
            cV(this, "removeListener", (e, t) =>
              this.events.removeListener(e, t)
            ),
            cV(this, "removeAllListeners", (e) =>
              this.events.removeAllListeners(e)
            ),
            cV(this, "connect", async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cV(this, "pair", async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cV(this, "approve", async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cV(this, "reject", async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cV(this, "update", async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cV(this, "extend", async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cV(this, "request", async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cV(this, "respond", async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cV(this, "ping", async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cV(this, "emit", async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cV(this, "disconnect", async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cV(this, "find", (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cV(this, "getPendingSessionRequests", () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cV(this, "authenticate", async (e, t) => {
              try {
                return await this.engine.authenticate(e, t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cV(this, "formatAuthMessage", (e) => {
              try {
                return this.engine.formatAuthMessage(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cV(this, "approveSessionAuthenticate", async (e) => {
              try {
                return await this.engine.approveSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cV(this, "rejectSessionAuthenticate", async (e) => {
              try {
                return await this.engine.rejectSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || cu.name),
            (this.metadata = (function (e) {
              var t, i;
              let r = tm();
              try {
                return (
                  null != e &&
                    e.url &&
                    r.url &&
                    new URL(e.url).host !== new URL(r.url).host &&
                    (console.warn(
                      `The configured WalletConnect 'metadata.url':${e.url} differs from the actual page url:${r.url}. This is probably unintended and can lead to issues.`
                    ),
                    (e.url = r.url)),
                  null != (t = e?.icons) &&
                    t.length &&
                    e.icons.length > 0 &&
                    (e.icons = e.icons.filter((e) => "" !== e)),
                  tl(tc(tc({}, r), e), {
                    url: e?.url || r.url,
                    name: e?.name || r.name,
                    description: e?.description || r.description,
                    icons:
                      null != (i = e?.icons) && i.length && e.icons.length > 0
                        ? e.icons
                        : r.icons,
                  })
                );
              } catch (t) {
                return console.warn("Error populating app metadata", t), e || r;
              }
            })(e?.metadata)),
            (this.signConfig = e?.signConfig);
          let t =
            "u" > typeof e?.logger && "string" != typeof e?.logger
              ? e.logger
              : (0, k.h6)((0, k.iP)({ level: e?.logger || cu.logger }));
          (this.core = e?.core || new cl(e)),
            (this.logger = (0, k.U5)(t, this.name)),
            (this.session = new cD(this.core, this.logger)),
            (this.proposal = new cU(this.core, this.logger)),
            (this.pendingRequest = new c$(this.core, this.logger)),
            (this.engine = new cR(this)),
            (this.auth = new cH(this.core, this.logger));
        }
        static async init(e) {
          let t = new cK(e);
          return await t.initialize(), t;
        }
        get context() {
          return (0, k.oI)(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.auth.init(),
              await this.engine.init(),
              this.logger.info("SignClient Initialization Success"),
              setTimeout(() => {
                this.engine.processRelayMessageCache();
              }, (0, ei.toMiliseconds)(ei.ONE_SECOND));
          } catch (e) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      var cG = i(24630),
        cJ = i(44134).Buffer;
      let cX = "error",
        cY = "wc@2:universal_provider:",
        cZ = "https://rpc.walletconnect.org/v1/",
        cQ = "generic",
        c0 = `${cZ}bundler`,
        c1 = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
      function c2() {}
      function c5(e) {
        return null == e || ("object" != typeof e && "function" != typeof e);
      }
      function c3(e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView);
      }
      function c8(e) {
        return "object" == typeof e && null !== e;
      }
      function c6(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function c4(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : Object.prototype.toString.call(e);
      }
      let c9 = "[object String]",
        c7 = "[object Number]",
        le = "[object Boolean]",
        lt = "[object Arguments]";
      function li(e, t, i, r = new Map(), s) {
        let a = s?.(e, t, i, r);
        if (null != a) return a;
        if (c5(e)) return e;
        if (r.has(e)) return r.get(e);
        if (Array.isArray(e)) {
          let t = Array(e.length);
          r.set(e, t);
          for (let a = 0; a < e.length; a++) t[a] = li(e[a], a, i, r, s);
          return (
            Object.hasOwn(e, "index") && (t.index = e.index),
            Object.hasOwn(e, "input") && (t.input = e.input),
            t
          );
        }
        if (e instanceof Date) return new Date(e.getTime());
        if (e instanceof RegExp) {
          let t = new RegExp(e.source, e.flags);
          return (t.lastIndex = e.lastIndex), t;
        }
        if (e instanceof Map) {
          let t = new Map();
          for (let [a, n] of (r.set(e, t), e)) t.set(a, li(n, a, i, r, s));
          return t;
        }
        if (e instanceof Set) {
          let t = new Set();
          for (let a of (r.set(e, t), e)) t.add(li(a, void 0, i, r, s));
          return t;
        }
        if ("u" > typeof cJ && cJ.isBuffer(e)) return e.subarray();
        if (c3(e)) {
          let t = new (Object.getPrototypeOf(e).constructor)(e.length);
          r.set(e, t);
          for (let a = 0; a < e.length; a++) t[a] = li(e[a], a, i, r, s);
          return t;
        }
        if (
          e instanceof ArrayBuffer ||
          ("u" > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)
        )
          return e.slice(0);
        if (e instanceof DataView) {
          let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
          return r.set(e, t), lr(t, e, i, r, s), t;
        }
        if ("u" > typeof File && e instanceof File) {
          let t = new File([e], e.name, { type: e.type });
          return r.set(e, t), lr(t, e, i, r, s), t;
        }
        if (e instanceof Blob) {
          let t = new Blob([e], { type: e.type });
          return r.set(e, t), lr(t, e, i, r, s), t;
        }
        if (e instanceof Error) {
          let t = new e.constructor();
          return (
            r.set(e, t),
            (t.message = e.message),
            (t.name = e.name),
            (t.stack = e.stack),
            (t.cause = e.cause),
            lr(t, e, i, r, s),
            t
          );
        }
        if (
          "object" == typeof e &&
          (function (e) {
            switch (c4(e)) {
              case lt:
              case "[object Array]":
              case "[object ArrayBuffer]":
              case "[object DataView]":
              case le:
              case "[object Date]":
              case "[object Float32Array]":
              case "[object Float64Array]":
              case "[object Int8Array]":
              case "[object Int16Array]":
              case "[object Int32Array]":
              case "[object Map]":
              case c7:
              case "[object Object]":
              case "[object RegExp]":
              case "[object Set]":
              case c9:
              case "[object Symbol]":
              case "[object Uint8Array]":
              case "[object Uint8ClampedArray]":
              case "[object Uint16Array]":
              case "[object Uint32Array]":
                return !0;
              default:
                return !1;
            }
          })(e)
        ) {
          let t = Object.create(Object.getPrototypeOf(e));
          return r.set(e, t), lr(t, e, i, r, s), t;
        }
        return e;
      }
      function lr(e, t, i = e, r, s) {
        let a = [...Object.keys(t), ...c6(t)];
        for (let n = 0; n < a.length; n++) {
          let o = a[n],
            c = Object.getOwnPropertyDescriptor(e, o);
          (null == c || c.writable) && (e[o] = li(t[o], o, i, r, s));
        }
      }
      function ls(e) {
        var t;
        return (
          (t = (t, i, r, s) => {
            let a = void 0;
            if (null != a) return a;
            if ("object" == typeof e)
              switch (Object.prototype.toString.call(e)) {
                case c7:
                case c9:
                case le: {
                  let t = new e.constructor(e?.valueOf());
                  return lr(t, e), t;
                }
                case lt: {
                  let t = {};
                  return (
                    lr(t, e),
                    (t.length = e.length),
                    (t[Symbol.iterator] = e[Symbol.iterator]),
                    t
                  );
                }
                default:
                  return;
              }
          }),
          li(e, void 0, e, new Map(), t)
        );
      }
      function la(e) {
        return (
          null !== e && "object" == typeof e && "[object Arguments]" === c4(e)
        );
      }
      var ln = Object.defineProperty,
        lo = Object.defineProperties,
        lc = Object.getOwnPropertyDescriptors,
        ll = Object.getOwnPropertySymbols,
        lh = Object.prototype.hasOwnProperty,
        ld = Object.prototype.propertyIsEnumerable,
        lu = (e, t, i) =>
          t in e
            ? ln(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lp = (e, t) => {
          for (var i in t || (t = {})) lh.call(t, i) && lu(e, i, t[i]);
          if (ll) for (var i of ll(t)) ld.call(t, i) && lu(e, i, t[i]);
          return e;
        },
        lg = (e, t) => lo(e, lc(t));
      function lf(e, t, i) {
        var r;
        let s = e9(e);
        return (
          (null == (r = t.rpcMap) ? void 0 : r[s.reference]) ||
          `${cZ}?chainId=${s.namespace}:${s.reference}&projectId=${i}`
        );
      }
      function lm(e) {
        return e.includes(":") ? e.split(":")[1] : e;
      }
      function lw(e) {
        return e.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
      }
      function ly(e = {}, t = {}) {
        return (function (e, ...t) {
          return (function (e, ...t) {
            let i = t.slice(0, -1),
              r = t[t.length - 1],
              s = e;
            for (let e = 0; e < i.length; e++)
              s = (function e(t, i, r, s) {
                if (
                  (c5(t) && (t = Object(t)), null == i || "object" != typeof i)
                )
                  return t;
                if (s.has(i))
                  return (function (e) {
                    if (c5(e)) return e;
                    if (
                      Array.isArray(e) ||
                      c3(e) ||
                      e instanceof ArrayBuffer ||
                      ("u" > typeof SharedArrayBuffer &&
                        e instanceof SharedArrayBuffer)
                    )
                      return e.slice(0);
                    let t = Object.getPrototypeOf(e),
                      i = t.constructor;
                    if (
                      e instanceof Date ||
                      e instanceof Map ||
                      e instanceof Set
                    )
                      return new i(e);
                    if (e instanceof RegExp) {
                      let t = new i(e);
                      return (t.lastIndex = e.lastIndex), t;
                    }
                    if (e instanceof DataView) return new i(e.buffer.slice(0));
                    if (e instanceof Error) {
                      let t = new i(e.message);
                      return (
                        (t.stack = e.stack),
                        (t.name = e.name),
                        (t.cause = e.cause),
                        t
                      );
                    }
                    return "u" > typeof File && e instanceof File
                      ? new i([e], e.name, {
                          type: e.type,
                          lastModified: e.lastModified,
                        })
                      : "object" == typeof e
                      ? Object.assign(Object.create(t), e)
                      : e;
                  })(s.get(i));
                if ((s.set(i, t), Array.isArray(i))) {
                  i = i.slice();
                  for (let e = 0; e < i.length; e++) i[e] = i[e] ?? void 0;
                }
                let a = [...Object.keys(i), ...c6(i)];
                for (let n = 0; n < a.length; n++) {
                  let o = a[n],
                    c = i[o],
                    l = t[o];
                  if (
                    (la(c) && (c = { ...c }),
                    la(l) && (l = { ...l }),
                    "u" > typeof cJ && cJ.isBuffer(c) && (c = ls(c)),
                    Array.isArray(c))
                  )
                    if ("object" == typeof l && null != l) {
                      let e = [],
                        t = Reflect.ownKeys(l);
                      for (let i = 0; i < t.length; i++) {
                        let r = t[i];
                        e[r] = l[r];
                      }
                      l = e;
                    } else l = [];
                  let h = r(l, c, o, t, i, s);
                  null != h
                    ? (t[o] = h)
                    : Array.isArray(c) || (c8(l) && c8(c))
                    ? (t[o] = e(l, c, r, s))
                    : null == l &&
                      (function (e) {
                        if ("object" != typeof e || null == e) return !1;
                        if (null === Object.getPrototypeOf(e)) return !0;
                        if (
                          "[object Object]" !==
                          Object.prototype.toString.call(e)
                        ) {
                          let t = e[Symbol.toStringTag];
                          return (
                            null != t &&
                            !!Object.getOwnPropertyDescriptor(
                              e,
                              Symbol.toStringTag
                            )?.writable &&
                            e.toString() === `[object ${t}]`
                          );
                        }
                        let t = e;
                        for (; null !== Object.getPrototypeOf(t); )
                          t = Object.getPrototypeOf(t);
                        return Object.getPrototypeOf(e) === t;
                      })(c)
                    ? (t[o] = e({}, c, r, s))
                    : null == l && c3(c)
                    ? (t[o] = ls(c))
                    : (void 0 === l || void 0 !== c) && (t[o] = c);
                }
                return t;
              })(s, i[e], r, new Map());
            return s;
          })(e, ...t, c2);
        })(lb(e), lb(t));
      }
      function lb(e) {
        var t, i, r, s, a;
        let n = {};
        if (!s6(e)) return n;
        for (let [o, c] of Object.entries(e)) {
          let e = sY(o) ? [o] : c.chains,
            l = c.methods || [],
            h = c.events || [],
            d = c.rpcMap || {},
            u = sZ(o);
          (n[u] = lg(lp(lp({}, n[u]), c), {
            chains: tP(e, null == (t = n[u]) ? void 0 : t.chains),
            methods: tP(l, null == (i = n[u]) ? void 0 : i.methods),
            events: tP(h, null == (r = n[u]) ? void 0 : r.events),
          })),
            (s6(d) || s6((null == (s = n[u]) ? void 0 : s.rpcMap) || {})) &&
              (n[u].rpcMap = lp(
                lp({}, d),
                null == (a = n[u]) ? void 0 : a.rpcMap
              ));
        }
        return n;
      }
      function lv(e) {
        return e.includes(":") ? e.split(":")[2] : e;
      }
      function lE(e) {
        let t = {};
        for (let [i, r] of Object.entries(e)) {
          let e = r.methods || [],
            s = r.events || [],
            a = r.accounts || [],
            n = sY(i) ? [i] : r.chains ? r.chains : lw(r.accounts);
          t[i] = { chains: n, methods: e, events: s, accounts: a };
        }
        return t;
      }
      function lC(e) {
        return "number" == typeof e
          ? e
          : e.includes("0x")
          ? parseInt(e, 16)
          : isNaN(Number((e = e.includes(":") ? e.split(":")[1] : e)))
          ? e
          : Number(e);
      }
      let lI = {},
        lN = (e) => lI[e],
        lA = (e, t) => {
          lI[e] = t;
        };
      var l_ = Object.defineProperty,
        lS = (e, t, i) =>
          t in e
            ? l_(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lP = (e, t, i) => lS(e, "symbol" != typeof t ? t + "" : t, i);
      class lO {
        constructor(e) {
          lP(this, "name", "polkadot"),
            lP(this, "client"),
            lP(this, "httpProviders"),
            lP(this, "events"),
            lP(this, "namespace"),
            lP(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lN("events")),
            (this.client = lN("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(c1.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = lm(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || lf(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new ap.F(new cG.A(i, lN("disableProviderPing")));
        }
      }
      var lT = Object.defineProperty,
        lk = Object.defineProperties,
        lx = Object.getOwnPropertyDescriptors,
        lR = Object.getOwnPropertySymbols,
        lU = Object.prototype.hasOwnProperty,
        lD = Object.prototype.propertyIsEnumerable,
        l$ = (e, t, i) =>
          t in e
            ? lT(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lM = (e, t) => {
          for (var i in t || (t = {})) lU.call(t, i) && l$(e, i, t[i]);
          if (lR) for (var i of lR(t)) lD.call(t, i) && l$(e, i, t[i]);
          return e;
        },
        lL = (e, t) => lk(e, lx(t)),
        lj = (e, t, i) => l$(e, "symbol" != typeof t ? t + "" : t, i);
      class lW {
        constructor(e) {
          lj(this, "name", "eip155"),
            lj(this, "client"),
            lj(this, "chainId"),
            lj(this, "namespace"),
            lj(this, "httpProviders"),
            lj(this, "events"),
            (this.namespace = e.namespace),
            (this.events = lN("events")),
            (this.client = lN("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(e);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
            case "wallet_getCapabilities":
              return await this.getCapabilities(e);
            case "wallet_getCallsStatus":
              return await this.getCallStatus(e);
          }
          return this.namespace.methods.includes(e.request.method)
            ? await this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
            (this.chainId = parseInt(e)),
            this.events.emit(c1.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        createHttpProvider(e, t) {
          let i =
            t ||
            lf(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new ap.F(new cG.V(i, lN("disableProviderPing")));
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = parseInt(lm(t));
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          let e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        async handleSwitchChain(e) {
          var t, i;
          let r = e.request.params
              ? null == (t = e.request.params[0])
                ? void 0
                : t.chainId
              : "0x0",
            s = parseInt((r = r.startsWith("0x") ? r : `0x${r}`), 16);
          if (this.isChainApproved(s)) this.setDefaultChain(`${s}`);
          else if (
            this.namespace.methods.includes("wallet_switchEthereumChain")
          )
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: r }] },
              chainId: null == (i = this.namespace.chains) ? void 0 : i[0],
            }),
              this.setDefaultChain(`${s}`);
          else
            throw Error(
              `Failed to switch to chain 'eip155:${s}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
            );
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
        async getCapabilities(e) {
          var t, i, r, s, a;
          let n =
              null == (i = null == (t = e.request) ? void 0 : t.params)
                ? void 0
                : i[0],
            o =
              (null == (s = null == (r = e.request) ? void 0 : r.params)
                ? void 0
                : s[1]) || [],
            c = `${n}${o.join(",")}`;
          if (!n)
            throw Error(
              "Missing address parameter in `wallet_getCapabilities` request"
            );
          let l = this.client.session.get(e.topic),
            h =
              (null == (a = l?.sessionProperties) ? void 0 : a.capabilities) ||
              {};
          if (null != h && h[c]) return h?.[c];
          let d = await this.client.request(e);
          try {
            await this.client.session.update(e.topic, {
              sessionProperties: lL(lM({}, l.sessionProperties || {}), {
                capabilities: lL(lM({}, h || {}), { [c]: d }),
              }),
            });
          } catch (e) {
            console.warn("Failed to update session with capabilities", e);
          }
          return d;
        }
        async getCallStatus(e) {
          var t, i;
          let r = this.client.session.get(e.topic),
            s = null == (t = r.sessionProperties) ? void 0 : t.bundler_name;
          if (s) {
            let t = this.getBundlerUrl(e.chainId, s);
            try {
              return await this.getUserOperationReceipt(t, e);
            } catch (e) {
              console.warn("Failed to fetch call status from bundler", e, t);
            }
          }
          let a = null == (i = r.sessionProperties) ? void 0 : i.bundler_url;
          if (a)
            try {
              return await this.getUserOperationReceipt(a, e);
            } catch (e) {
              console.warn(
                "Failed to fetch call status from custom bundler",
                e,
                a
              );
            }
          if (this.namespace.methods.includes(e.request.method))
            return await this.client.request(e);
          throw Error("Fetching call status not approved by the wallet.");
        }
        async getUserOperationReceipt(e, t) {
          var i;
          let r = new URL(e),
            s = await fetch(r, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(
                (0, ag.formatJsonRpcRequest)("eth_getUserOperationReceipt", [
                  null == (i = t.request.params) ? void 0 : i[0],
                ])
              ),
            });
          if (!s.ok)
            throw Error(`Failed to fetch user operation receipt - ${s.status}`);
          return await s.json();
        }
        getBundlerUrl(e, t) {
          return `${c0}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`;
        }
      }
      var lB = Object.defineProperty,
        lq = (e, t, i) =>
          t in e
            ? lB(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lH = (e, t, i) => lq(e, "symbol" != typeof t ? t + "" : t, i);
      class lF {
        constructor(e) {
          lH(this, "name", "solana"),
            lH(this, "client"),
            lH(this, "httpProviders"),
            lH(this, "events"),
            lH(this, "namespace"),
            lH(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lN("events")),
            (this.client = lN("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(c1.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = lm(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || lf(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new ap.F(new cG.A(i, lN("disableProviderPing")));
        }
      }
      var lz = Object.defineProperty,
        lV = (e, t, i) =>
          t in e
            ? lz(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lK = (e, t, i) => lV(e, "symbol" != typeof t ? t + "" : t, i);
      class lG {
        constructor(e) {
          lK(this, "name", "cosmos"),
            lK(this, "client"),
            lK(this, "httpProviders"),
            lK(this, "events"),
            lK(this, "namespace"),
            lK(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lN("events")),
            (this.client = lN("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(
              c1.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = lm(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || lf(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new ap.F(new cG.A(i, lN("disableProviderPing")));
        }
      }
      var lJ = Object.defineProperty,
        lX = (e, t, i) =>
          t in e
            ? lJ(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        lY = (e, t, i) => lX(e, "symbol" != typeof t ? t + "" : t, i);
      class lZ {
        constructor(e) {
          lY(this, "name", "algorand"),
            lY(this, "client"),
            lY(this, "httpProviders"),
            lY(this, "events"),
            lY(this, "namespace"),
            lY(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lN("events")),
            (this.client = lN("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            let i =
              t ||
              lf(
                `${this.name}:${e}`,
                this.namespace,
                this.client.core.projectId
              );
            if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i);
          }
          (this.chainId = e),
            this.events.emit(
              c1.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              e[t] = this.createHttpProvider(
                t,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || lf(e, this.namespace, this.client.core.projectId);
          return typeof i > "u"
            ? void 0
            : new ap.F(new cG.A(i, lN("disableProviderPing")));
        }
      }
      var lQ = Object.defineProperty,
        l0 = (e, t, i) =>
          t in e
            ? lQ(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        l1 = (e, t, i) => l0(e, "symbol" != typeof t ? t + "" : t, i);
      class l2 {
        constructor(e) {
          l1(this, "name", "cip34"),
            l1(this, "client"),
            l1(this, "httpProviders"),
            l1(this, "events"),
            l1(this, "namespace"),
            l1(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lN("events")),
            (this.client = lN("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(
              c1.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              let i = this.getCardanoRPCUrl(t),
                r = lm(t);
              e[r] = this.createHttpProvider(r, i);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        getCardanoRPCUrl(e) {
          let t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || this.getCardanoRPCUrl(e);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new ap.F(new cG.A(i, lN("disableProviderPing")));
        }
      }
      var l5 = Object.defineProperty,
        l3 = (e, t, i) =>
          t in e
            ? l5(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        l8 = (e, t, i) => l3(e, "symbol" != typeof t ? t + "" : t, i);
      class l6 {
        constructor(e) {
          l8(this, "name", "elrond"),
            l8(this, "client"),
            l8(this, "httpProviders"),
            l8(this, "events"),
            l8(this, "namespace"),
            l8(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lN("events")),
            (this.client = lN("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(c1.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = lm(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || lf(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new ap.F(new cG.A(i, lN("disableProviderPing")));
        }
      }
      var l4 = Object.defineProperty,
        l9 = (e, t, i) =>
          t in e
            ? l4(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        l7 = (e, t, i) => l9(e, "symbol" != typeof t ? t + "" : t, i);
      class he {
        constructor(e) {
          l7(this, "name", "multiversx"),
            l7(this, "client"),
            l7(this, "httpProviders"),
            l7(this, "events"),
            l7(this, "namespace"),
            l7(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lN("events")),
            (this.client = lN("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(c1.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              let r = lm(t);
              e[r] = this.createHttpProvider(
                r,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || lf(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new ap.F(new cG.A(i, lN("disableProviderPing")));
        }
      }
      var ht = Object.defineProperty,
        hi = (e, t, i) =>
          t in e
            ? ht(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        hr = (e, t, i) => hi(e, "symbol" != typeof t ? t + "" : t, i);
      class hs {
        constructor(e) {
          hr(this, "name", "near"),
            hr(this, "client"),
            hr(this, "httpProviders"),
            hr(this, "events"),
            hr(this, "namespace"),
            hr(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lN("events")),
            (this.client = lN("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let i = t || lf(`${this.name}:${e}`, this.namespace);
            if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i);
          }
          this.events.emit(
            c1.DEFAULT_CHAIN_CHANGED,
            `${this.name}:${this.chainId}`
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var i;
              e[t] = this.createHttpProvider(
                t,
                null == (i = this.namespace.rpcMap) ? void 0 : i[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || lf(e, this.namespace);
          return typeof i > "u"
            ? void 0
            : new ap.F(new cG.A(i, lN("disableProviderPing")));
        }
      }
      var ha = Object.defineProperty,
        hn = (e, t, i) =>
          t in e
            ? ha(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        ho = (e, t, i) => hn(e, "symbol" != typeof t ? t + "" : t, i);
      class hc {
        constructor(e) {
          ho(this, "name", "tezos"),
            ho(this, "client"),
            ho(this, "httpProviders"),
            ho(this, "events"),
            ho(this, "namespace"),
            ho(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lN("events")),
            (this.client = lN("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let i = t || lf(`${this.name}:${e}`, this.namespace);
            if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i);
          }
          this.events.emit(
            c1.DEFAULT_CHAIN_CHANGED,
            `${this.name}:${this.chainId}`
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              e[t] = this.createHttpProvider(t);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || lf(e, this.namespace);
          return typeof i > "u" ? void 0 : new ap.F(new cG.A(i));
        }
      }
      var hl = Object.defineProperty,
        hh = (e, t, i) =>
          t in e
            ? hl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        hd = (e, t, i) => hh(e, "symbol" != typeof t ? t + "" : t, i);
      class hu {
        constructor(e) {
          hd(this, "name", cQ),
            hd(this, "client"),
            hd(this, "httpProviders"),
            hd(this, "events"),
            hd(this, "namespace"),
            hd(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lN("events")),
            (this.client = lN("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          (this.namespace.chains = [
            ...new Set((this.namespace.chains || []).concat(e.chains || [])),
          ]),
            (this.namespace.accounts = [
              ...new Set(
                (this.namespace.accounts || []).concat(e.accounts || [])
              ),
            ]),
            (this.namespace.methods = [
              ...new Set(
                (this.namespace.methods || []).concat(e.methods || [])
              ),
            ]),
            (this.namespace.events = [
              ...new Set((this.namespace.events || []).concat(e.events || [])),
            ]),
            (this.httpProviders = this.createHttpProviders());
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider(e.chainId).request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(c1.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          var e, t;
          let i = {};
          return (
            null == (t = null == (e = this.namespace) ? void 0 : e.accounts) ||
              t.forEach((e) => {
                let t = e9(e);
                i[`${t.namespace}:${t.reference}`] = this.createHttpProvider(e);
              }),
            i
          );
        }
        getHttpProvider(e) {
          let t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let i = this.createHttpProvider(e, t);
          i && (this.httpProviders[e] = i);
        }
        createHttpProvider(e, t) {
          let i = t || lf(e, this.namespace, this.client.core.projectId);
          if (!i) throw Error(`No RPC url provided for chainId: ${e}`);
          return new ap.F(new cG.A(i, lN("disableProviderPing")));
        }
      }
      var hp = Object.defineProperty,
        hg = Object.defineProperties,
        hf = Object.getOwnPropertyDescriptors,
        hm = Object.getOwnPropertySymbols,
        hw = Object.prototype.hasOwnProperty,
        hy = Object.prototype.propertyIsEnumerable,
        hb = (e, t, i) =>
          t in e
            ? hp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        hv = (e, t) => {
          for (var i in t || (t = {})) hw.call(t, i) && hb(e, i, t[i]);
          if (hm) for (var i of hm(t)) hy.call(t, i) && hb(e, i, t[i]);
          return e;
        },
        hE = (e, t) => hg(e, hf(t)),
        hC = (e, t, i) => hb(e, "symbol" != typeof t ? t + "" : t, i);
      class hI {
        constructor(e) {
          hC(this, "client"),
            hC(this, "namespaces"),
            hC(this, "optionalNamespaces"),
            hC(this, "sessionProperties"),
            hC(this, "scopedProperties"),
            hC(this, "events", new (c())()),
            hC(this, "rpcProviders", {}),
            hC(this, "session"),
            hC(this, "providerOpts"),
            hC(this, "logger"),
            hC(this, "uri"),
            hC(this, "disableProviderPing", !1),
            (this.providerOpts = e),
            (this.logger =
              "u" > typeof e?.logger && "string" != typeof e?.logger
                ? e.logger
                : (0, k.h6)((0, k.iP)({ level: e?.logger || cX }))),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          let t = new hI(e);
          return await t.initialize(), t;
        }
        async request(e, t, i) {
          let [r, s] = this.validateChain(t);
          if (!this.session)
            throw Error("Please call connect() before request()");
          return await this.getProvider(r).request({
            request: hv({}, e),
            chainId: `${r}:${s}`,
            topic: this.session.topic,
            expiry: i,
          });
        }
        sendAsync(e, t, i, r) {
          let s = new Date().getTime();
          this.request(e, i, r)
            .then((e) => t(null, (0, ag.formatJsonRpcResult)(s, e)))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
                scopedProperties: this.scopedProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var e;
          if (!this.session)
            throw Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: s3("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw Error("Sign Client not initialized");
          if (
            (this.setNamespaces(e),
            await this.cleanupPendingPairings(),
            !e.skipPairing)
          )
            return await this.pair(e.pairingTopic);
        }
        async authenticate(e, t) {
          if (!this.client) throw Error("Sign Client not initialized");
          this.setNamespaces(e), await this.cleanupPendingPairings();
          let { uri: i, response: r } = await this.client.authenticate(e, t);
          i && ((this.uri = i), this.events.emit("display_uri", i));
          let s = await r();
          if (((this.session = s.session), this.session)) {
            let e = lE(this.session.namespaces);
            (this.namespaces = ly(this.namespaces, e)),
              await this.persist("namespaces", this.namespaces),
              this.onConnect();
          }
          return s;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          let { uri: t, approval: i } = await this.client.connect({
            pairingTopic: e,
            requiredNamespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
            scopedProperties: this.scopedProperties,
          });
          t && ((this.uri = t), this.events.emit("display_uri", t));
          let r = await i();
          this.session = r;
          let s = lE(r.namespaces);
          return (
            (this.namespaces = ly(this.namespaces, s)),
            await this.persist("namespaces", this.namespaces),
            await this.persist("optionalNamespaces", this.optionalNamespaces),
            this.onConnect(),
            this.session
          );
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            let [i, r] = this.validateChain(e),
              s = this.getProvider(i);
            s.name === cQ
              ? s.setDefaultChain(`${i}:${r}`, t)
              : s.setDefaultChain(r, t);
          } catch (e) {
            if (!/Please call connect/.test(e.message)) throw e;
          }
        }
        async cleanupPendingPairings(e = {}) {
          this.logger.info("Cleaning up inactive pairings...");
          let t = this.client.pairing.getAll();
          if (s8(t)) {
            for (let i of t)
              e.deletePairings
                ? this.client.core.expirer.set(i.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    i.topic
                  );
            this.logger.info(`Inactive pairings cleared: ${t.length}`);
          }
        }
        abortPairingAttempt() {
          this.logger.warn(
            "abortPairingAttempt is deprecated. This is now a no-op."
          );
        }
        async checkStorage() {
          (this.namespaces = (await this.getFromStore("namespaces")) || {}),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.session && this.createProviders();
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          var e, t;
          if (
            ((this.client =
              this.providerOpts.client ||
              (await cK.init({
                core: this.providerOpts.core,
                logger: this.providerOpts.logger || cX,
                relayUrl:
                  this.providerOpts.relayUrl || "wss://relay.walletconnect.org",
                projectId: this.providerOpts.projectId,
                metadata: this.providerOpts.metadata,
                storageOptions: this.providerOpts.storageOptions,
                storage: this.providerOpts.storage,
                name: this.providerOpts.name,
                customStoragePrefix: this.providerOpts.customStoragePrefix,
                telemetryEnabled: this.providerOpts.telemetryEnabled,
              }))),
            this.providerOpts.session)
          )
            try {
              this.session = this.client.session.get(
                this.providerOpts.session.topic
              );
            } catch (i) {
              throw (
                (this.logger.error("Failed to get session", i),
                Error(
                  `The provided session: ${
                    null ==
                    (t = null == (e = this.providerOpts) ? void 0 : e.session)
                      ? void 0
                      : t.topic
                  } doesn't exist in the Sign client`
                ))
              );
            }
          else {
            let e = this.client.session.getAll();
            this.session = e[0];
          }
          this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw Error("Sign Client not initialized");
          if (!this.session)
            throw Error(
              "Session not initialized. Please call connect() before enable()"
            );
          let e = [
            ...new Set(Object.keys(this.session.namespaces).map((e) => sZ(e))),
          ];
          lA("client", this.client),
            lA("events", this.events),
            lA("disableProviderPing", this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              let t = (function (e, t) {
                  let i = Object.keys(t.namespaces).filter((t) =>
                    t.includes(e)
                  );
                  if (!i.length) return [];
                  let r = [];
                  return (
                    i.forEach((e) => {
                      let i = t.namespaces[e].accounts;
                      r.push(...i);
                    }),
                    r
                  );
                })(e, this.session),
                i = lw(t),
                r = hE(
                  hv({}, ly(this.namespaces, this.optionalNamespaces)[e]),
                  { accounts: t, chains: i }
                );
              switch (e) {
                case "eip155":
                  this.rpcProviders[e] = new lW({ namespace: r });
                  break;
                case "algorand":
                  this.rpcProviders[e] = new lZ({ namespace: r });
                  break;
                case "solana":
                  this.rpcProviders[e] = new lF({ namespace: r });
                  break;
                case "cosmos":
                  this.rpcProviders[e] = new lG({ namespace: r });
                  break;
                case "polkadot":
                  this.rpcProviders[e] = new lO({ namespace: r });
                  break;
                case "cip34":
                  this.rpcProviders[e] = new l2({ namespace: r });
                  break;
                case "elrond":
                  this.rpcProviders[e] = new l6({ namespace: r });
                  break;
                case "multiversx":
                  this.rpcProviders[e] = new he({ namespace: r });
                  break;
                case "near":
                  this.rpcProviders[e] = new hs({ namespace: r });
                  break;
                case "tezos":
                  this.rpcProviders[e] = new hc({ namespace: r });
                  break;
                default:
                  this.rpcProviders[cQ]
                    ? this.rpcProviders[cQ].updateNamespace(r)
                    : (this.rpcProviders[cQ] = new hu({ namespace: r }));
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw Error("Sign Client is not initialized");
          this.client.on("session_ping", (e) => {
            var t;
            let { topic: i } = e;
            i === (null == (t = this.session) ? void 0 : t.topic) &&
              this.events.emit("session_ping", e);
          }),
            this.client.on("session_event", (e) => {
              var t;
              let { params: i, topic: r } = e;
              if (r !== (null == (t = this.session) ? void 0 : t.topic)) return;
              let { event: s } = i;
              if ("accountsChanged" === s.name) {
                let e = s.data;
                e && s8(e) && this.events.emit("accountsChanged", e.map(lv));
              } else if ("chainChanged" === s.name) {
                let e = i.chainId,
                  t = i.event.data,
                  r = sZ(e),
                  s = lC(e) !== lC(t) ? `${r}:${lC(t)}` : e;
                this.onChainChanged(s);
              } else this.events.emit(s.name, s.data);
              this.events.emit("session_event", e);
            }),
            this.client.on("session_update", ({ topic: e, params: t }) => {
              var i, r;
              if (e !== (null == (i = this.session) ? void 0 : i.topic)) return;
              let { namespaces: s } = t,
                a = null == (r = this.client) ? void 0 : r.session.get(e);
              (this.session = hE(hv({}, a), { namespaces: s })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: e, params: t });
            }),
            this.client.on("session_delete", async (e) => {
              var t;
              e.topic === (null == (t = this.session) ? void 0 : t.topic) &&
                (await this.cleanup(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  hE(hv({}, s3("USER_DISCONNECTED")), { data: e.topic })
                ));
            }),
            this.on(c1.DEFAULT_CHAIN_CHANGED, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          return this.rpcProviders[e] || this.rpcProviders[cQ];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var t;
            this.getProvider(e).updateNamespace(
              null == (t = this.session) ? void 0 : t.namespaces[e]
            );
          });
        }
        setNamespaces(e) {
          let {
            namespaces: t = {},
            optionalNamespaces: i = {},
            sessionProperties: r,
            scopedProperties: s,
          } = e;
          (this.optionalNamespaces = ly(t, i)),
            (this.sessionProperties = r),
            (this.scopedProperties = s);
        }
        validateChain(e) {
          let [t, i] = e?.split(":") || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, i];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => sZ(e))
              .includes(t)
          )
            throw Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
            );
          if (t && i) return [t, i];
          let r = sZ(Object.keys(this.namespaces)[0]),
            s = this.rpcProviders[r].getDefaultChain();
          return [r, s];
        }
        async requestAccounts() {
          let [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        async onChainChanged(e, t = !1) {
          if (!this.namespaces) return;
          let [i, r] = this.validateChain(e);
          if (!r) return;
          this.updateNamespaceChain(i, r), this.events.emit("chainChanged", r);
          let s = this.getProvider(i).getDefaultChain();
          t || this.getProvider(i).setDefaultChain(r),
            this.emitAccountsChangedOnChainChange({
              namespace: i,
              previousChainId: s,
              newChainId: e,
            }),
            await this.persist("namespaces", this.namespaces);
        }
        emitAccountsChangedOnChainChange({
          namespace: e,
          previousChainId: t,
          newChainId: i,
        }) {
          var r, s;
          try {
            if (t === i) return;
            let a =
              null ==
              (s = null == (r = this.session) ? void 0 : r.namespaces[e])
                ? void 0
                : s.accounts;
            if (!a) return;
            let n = a.filter((e) => e.includes(`${i}:`)).map(lv);
            if (!s8(n)) return;
            this.events.emit("accountsChanged", n);
          } catch (e) {
            this.logger.warn(
              "Failed to emit accountsChanged on chain change",
              e
            );
          }
        }
        updateNamespaceChain(e, t) {
          if (!this.namespaces) return;
          let i = this.namespaces[e] ? e : `${e}:${t}`;
          this.namespaces[i]
            ? this.namespaces[i] && (this.namespaces[i].defaultChain = t)
            : (this.namespaces[i] = {
                chains: [],
                methods: [],
                events: [],
                defaultChain: t,
              });
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            await this.deleteFromStore("namespaces"),
            await this.deleteFromStore("optionalNamespaces"),
            await this.deleteFromStore("sessionProperties"),
            (this.session = void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 }),
            await this.cleanupStorage();
        }
        async persist(e, t) {
          var i;
          let r = (null == (i = this.session) ? void 0 : i.topic) || "";
          await this.client.core.storage.setItem(`${cY}/${e}${r}`, t);
        }
        async getFromStore(e) {
          var t;
          let i = (null == (t = this.session) ? void 0 : t.topic) || "";
          return await this.client.core.storage.getItem(`${cY}/${e}${i}`);
        }
        async deleteFromStore(e) {
          var t;
          let i = (null == (t = this.session) ? void 0 : t.topic) || "";
          await this.client.core.storage.removeItem(`${cY}/${e}${i}`);
        }
        async cleanupStorage() {
          var e;
          try {
            if ((null == (e = this.client) ? void 0 : e.session.length) > 0)
              return;
            for (let e of await this.client.core.storage.getKeys())
              e.startsWith(cY) &&
                (await this.client.core.storage.removeItem(e));
          } catch (e) {
            this.logger.warn("Failed to cleanup storage", e);
          }
        }
      }
      var hN = i(60500);
      let hA = {
        validateCaipAddress(e) {
          if (e.split(":")?.length !== 3) throw Error("Invalid CAIP Address");
          return e;
        },
        parseCaipAddress(e) {
          let t = e.split(":");
          if (3 !== t.length) throw Error(`Invalid CAIP-10 address: ${e}`);
          let [i, r, s] = t;
          if (!i || !r || !s) throw Error(`Invalid CAIP-10 address: ${e}`);
          return { chainNamespace: i, chainId: r, address: s };
        },
        parseCaipNetworkId(e) {
          let t = e.split(":");
          if (2 !== t.length) throw Error(`Invalid CAIP-2 network id: ${e}`);
          let [i, r] = t;
          if (!i || !r) throw Error(`Invalid CAIP-2 network id: ${e}`);
          return { chainNamespace: i, chainId: r };
        },
      };
      var h_ = i(26343),
        hS = i(90906),
        hP = i(11501),
        hO = i(11076),
        hT = i(5582),
        hk = i(43708),
        hx = i(70799);
      let hR = {
        convertEVMChainIdToCoinType(e) {
          if (e >= 0x80000000) throw Error("Invalid chainId");
          return (0x80000000 | e) >>> 0;
        },
      };
      var hU = i(92555),
        hD = i(19628);
      let h$ = (0, hk.BX)({ suggestions: [], loading: !1 }),
        hM = (0, hU.X)({
          state: h$,
          subscribe: (e) => (0, hk.B1)(h$, () => e(h$)),
          subscribeKey: (e, t) => (0, hx.u$)(h$, e, t),
          async resolveName(e) {
            try {
              return await hP.T.lookupEnsName(e);
            } catch (e) {
              throw Error(
                e?.reasons?.[0]?.description || "Error resolving name"
              );
            }
          },
          async isNameRegistered(e) {
            try {
              return await hP.T.lookupEnsName(e), !0;
            } catch {
              return !1;
            }
          },
          async getSuggestions(e) {
            try {
              return (
                (h$.loading = !0),
                (h$.suggestions = []),
                (h$.suggestions =
                  (await hP.T.getEnsNameSuggestions(e)).suggestions.map(
                    (e) => ({ ...e, name: e.name })
                  ) || []),
                h$.suggestions
              );
            } catch (e) {
              throw Error(
                hM.parseEnsApiError(e, "Error fetching name suggestions")
              );
            } finally {
              h$.loading = !1;
            }
          },
          async getNamesForAddress(e) {
            try {
              if (!hS.W.state.activeCaipNetwork) return [];
              let t = hT.i.getEnsFromCacheForAddress(e);
              if (t) return t;
              let i = await hP.T.reverseLookupEnsName({ address: e });
              return (
                hT.i.updateEnsCache({
                  address: e,
                  ens: i,
                  timestamp: Date.now(),
                }),
                i
              );
            } catch (e) {
              throw Error(
                hM.parseEnsApiError(e, "Error fetching names for address")
              );
            }
          },
          async registerName(e) {
            let t = hS.W.state.activeCaipNetwork;
            if (!t) throw Error("Network not found");
            let i = hO.U.state.address,
              a = r.a.getAuthConnector();
            if (!i || !a) throw Error("Address or auth connector not found");
            h$.loading = !0;
            try {
              let r = JSON.stringify({
                name: e,
                attributes: {},
                timestamp: Math.floor(Date.now() / 1e3),
              });
              hD.I.pushTransactionStack({
                onCancel() {
                  hD.I.replace("RegisterAccountName");
                },
              });
              let a = await s.x.signMessage(r);
              h$.loading = !1;
              let n = t.id;
              if (!n) throw Error("Network not found");
              let o = hR.convertEVMChainIdToCoinType(Number(n));
              await hP.T.registerEnsName({
                coinType: o,
                address: i,
                signature: a,
                message: r,
              }),
                hO.U.setProfileName(e, t.chainNamespace),
                hD.I.replace("RegisterAccountNameSuccess");
            } catch (i) {
              let t = hM.parseEnsApiError(i, `Error registering name ${e}`);
              throw (hD.I.replace("RegisterAccountName"), Error(t));
            } finally {
              h$.loading = !1;
            }
          },
          validateName: (e) => /^[a-zA-Z0-9-]{4,}$/u.test(e),
          parseEnsApiError: (e, t) => e?.reasons?.[0]?.description || t,
        });
      var hL = i(34735),
        hj = i(76610),
        hW = i(65819);
      let hB = {
          id: "2b92315d-eab7-5bef-84fa-089a131333f5",
          name: "USD Coin",
          symbol: "USDC",
          networks: [
            {
              name: "ethereum-mainnet",
              display_name: "Ethereum",
              chain_id: "1",
              contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            },
            {
              name: "polygon-mainnet",
              display_name: "Polygon",
              chain_id: "137",
              contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
            },
          ],
        },
        hq = {
          id: "USD",
          payment_method_limits: [
            { id: "card", min: "10.00", max: "7500.00" },
            { id: "ach_bank_account", min: "10.00", max: "25000.00" },
          ],
        },
        hH = {
          providers: hj.tM,
          selectedProvider: null,
          error: null,
          purchaseCurrency: hB,
          paymentCurrency: hq,
          purchaseCurrencies: [hB],
          paymentCurrencies: [],
          quotesLoading: !1,
        },
        hF = (0, hk.BX)(hH),
        hz = (0, hU.X)({
          state: hF,
          subscribe: (e) => (0, hk.B1)(hF, () => e(hF)),
          subscribeKey: (e, t) => (0, hx.u$)(hF, e, t),
          setSelectedProvider(e) {
            if (e && "meld" === e.name) {
              let t =
                  hS.W.state.activeChain === hN.o.CHAIN.SOLANA ? "SOL" : "USDC",
                i = hO.U.state.address ?? "",
                r = new URL(e.url);
              r.searchParams.append("publicKey", hj.Db),
                r.searchParams.append("destinationCurrencyCode", t),
                r.searchParams.append("walletAddress", i),
                r.searchParams.append(
                  "externalCustomerId",
                  n.H.state.projectId
                ),
                (hF.selectedProvider = { ...e, url: r.toString() });
            } else hF.selectedProvider = e;
          },
          setOnrampProviders(e) {
            Array.isArray(e) && e.every((e) => "string" == typeof e)
              ? (hF.providers = hj.tM.filter((t) => e.includes(t.name)))
              : (hF.providers = []);
          },
          setPurchaseCurrency(e) {
            hF.purchaseCurrency = e;
          },
          setPaymentCurrency(e) {
            hF.paymentCurrency = e;
          },
          setPurchaseAmount(e) {
            hz.state.purchaseAmount = e;
          },
          setPaymentAmount(e) {
            hz.state.paymentAmount = e;
          },
          async getAvailableCurrencies() {
            let e = await hP.T.getOnrampOptions();
            (hF.purchaseCurrencies = e.purchaseCurrencies),
              (hF.paymentCurrencies = e.paymentCurrencies),
              (hF.paymentCurrency = e.paymentCurrencies[0] || hq),
              (hF.purchaseCurrency = e.purchaseCurrencies[0] || hB),
              await hW.N.fetchCurrencyImages(
                e.paymentCurrencies.map((e) => e.id)
              ),
              await hW.N.fetchTokenImages(
                e.purchaseCurrencies.map((e) => e.symbol)
              );
          },
          async getQuote() {
            hF.quotesLoading = !0;
            try {
              let e = await hP.T.getOnrampQuote({
                purchaseCurrency: hF.purchaseCurrency,
                paymentCurrency: hF.paymentCurrency,
                amount: hF.paymentAmount?.toString() || "0",
                network: hF.purchaseCurrency?.symbol,
              });
              return (
                (hF.quotesLoading = !1),
                (hF.purchaseAmount = Number(e?.purchaseAmount.amount)),
                e
              );
            } catch (e) {
              return (hF.error = e.message), (hF.quotesLoading = !1), null;
            } finally {
              hF.quotesLoading = !1;
            }
          },
          resetState() {
            (hF.selectedProvider = null),
              (hF.error = null),
              (hF.purchaseCurrency = hB),
              (hF.paymentCurrency = hq),
              (hF.purchaseCurrencies = [hB]),
              (hF.paymentCurrencies = []),
              (hF.paymentAmount = void 0),
              (hF.purchaseAmount = void 0),
              (hF.quotesLoading = !1);
          },
        });
      var hV = i(79277),
        hK = i(32836),
        hG = i(7478),
        hJ = i(10243),
        hX = i(83562),
        hY = i(40166),
        hZ = i(36665),
        hQ = i(5517);
      function h0(e, t) {
        return r.a.getConnectorId(e) === t;
      }
      i(95842), i(26128);
      var h1 = i(98782),
        h2 = i(28898);
      new AbortController();
      let h5 = {
        UniversalProviderErrors: {
          UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
            message: "Unauthorized: origin not allowed",
            alertErrorKey: "INVALID_APP_CONFIGURATION",
          },
          JWT_VALIDATION_ERROR: {
            message: "JWT validation error: JWT Token is not yet valid",
            alertErrorKey: "JWT_TOKEN_NOT_VALID",
          },
          INVALID_KEY: {
            message: "Unauthorized: invalid key",
            alertErrorKey: "INVALID_PROJECT_ID",
          },
        },
        ALERT_ERRORS: {
          SWITCH_NETWORK_NOT_FOUND: {
            shortMessage: "Network Not Found",
            longMessage:
              "Network not found - please make sure it is included in 'networks' array in createAppKit function",
          },
          INVALID_APP_CONFIGURATION: {
            shortMessage: "Invalid App Configuration",
            longMessage: () =>
              `Origin ${
                "undefined" != typeof window ? window.origin : "unknown"
              } not found on Allowlist - update configuration on cloud.reown.com`,
          },
          IFRAME_LOAD_FAILED: {
            shortMessage: "Network Error - Could not load embedded wallet",
            longMessage: () =>
              "There was an issue loading the embedded wallet. Please try again later.",
          },
          IFRAME_REQUEST_TIMEOUT: {
            shortMessage: "Embedded Wallet Request Timed Out",
            longMessage: () =>
              "There was an issue doing the request to the embedded wallet. Please try again later.",
          },
          UNVERIFIED_DOMAIN: {
            shortMessage: "Invalid App Configuration",
            longMessage: () =>
              "There was an issue loading the embedded wallet. Please verify that your domain is allowed at cloud.reown.com",
          },
          JWT_TOKEN_NOT_VALID: {
            shortMessage: "Session Expired",
            longMessage:
              "Invalid session found on UniversalProvider - please check your time settings and connect again",
          },
          INVALID_PROJECT_ID: {
            shortMessage: "Invalid App Configuration",
            longMessage: "Invalid Project ID - update configuration",
          },
          PROJECT_ID_NOT_CONFIGURED: {
            shortMessage: "Project ID Not Configured",
            longMessage:
              "Project ID Not Configured - update configuration on cloud.reown.com",
          },
        },
      };
      var h3 = i(36241),
        h8 = i(42264),
        h6 = i(81379),
        h4 = i(10231),
        h9 = i(54315);
      function h7(e, t = {}) {
        let {
          key: i = "fallback",
          name: r = "Fallback",
          rank: s = !1,
          shouldThrow: a = de,
          retryCount: n,
          retryDelay: o,
        } = t;
        return ({ chain: t, pollingInterval: c = 4e3, timeout: l, ...h }) => {
          let d = e,
            u = () => {},
            p = (0, h9.o)(
              {
                key: i,
                name: r,
                async request({ method: e, params: i }) {
                  let r,
                    s = async (n = 0) => {
                      let o = d[n]({
                        ...h,
                        chain: t,
                        retryCount: 0,
                        timeout: l,
                      });
                      try {
                        let t = await o.request({ method: e, params: i });
                        return (
                          u({
                            method: e,
                            params: i,
                            response: t,
                            transport: o,
                            status: "success",
                          }),
                          t
                        );
                      } catch (c) {
                        if (
                          (u({
                            error: c,
                            method: e,
                            params: i,
                            transport: o,
                            status: "error",
                          }),
                          a(c) ||
                            n === d.length - 1 ||
                            !(r ??= d.slice(n + 1).some((i) => {
                              let { include: r, exclude: s } =
                                i({ chain: t }).config.methods || {};
                              return r ? r.includes(e) : !s || !s.includes(e);
                            })))
                        )
                          throw c;
                        return s(n + 1);
                      }
                    };
                  return s();
                },
                retryCount: n,
                retryDelay: o,
                type: "fallback",
              },
              {
                onResponse: (e) => (u = e),
                transports: d.map((e) => e({ chain: t, retryCount: 0 })),
              }
            );
          if (s) {
            let e = "object" == typeof s ? s : {};
            !(function ({
              chain: e,
              interval: t = 4e3,
              onTransports: i,
              ping: r,
              sampleCount: s = 10,
              timeout: a = 1e3,
              transports: n,
              weights: o = {},
            }) {
              let { stability: c = 0.7, latency: l = 0.3 } = o,
                h = [],
                d = async () => {
                  let o = await Promise.all(
                    n.map(async (t) => {
                      let i,
                        s,
                        n = t({ chain: e, retryCount: 0, timeout: a }),
                        o = Date.now();
                      try {
                        await (r
                          ? r({ transport: n })
                          : n.request({ method: "net_listening" })),
                          (s = 1);
                      } catch {
                        s = 0;
                      } finally {
                        i = Date.now();
                      }
                      return { latency: i - o, success: s };
                    })
                  );
                  h.push(o), h.length > s && h.shift();
                  let u = Math.max(
                    ...h.map((e) => Math.max(...e.map(({ latency: e }) => e)))
                  );
                  i(
                    n
                      .map((e, t) => {
                        let i = h.map((e) => e[t].latency),
                          r = i.reduce((e, t) => e + t, 0) / i.length,
                          s = h.map((e) => e[t].success),
                          a = s.reduce((e, t) => e + t, 0) / s.length;
                        return 0 === a ? [0, t] : [l * (1 - r / u) + c * a, t];
                      })
                      .sort((e, t) => t[0] - e[0])
                      .map(([, e]) => n[e])
                  ),
                    await (0, h4.u)(t),
                    d();
                };
              d();
            })({
              chain: t,
              interval: e.interval ?? c,
              onTransports: (e) => (d = e),
              ping: e.ping,
              sampleCount: e.sampleCount,
              timeout: e.timeout,
              transports: d,
              weights: e.weights,
            });
          }
          return p;
        };
      }
      function de(e) {
        return !!(
          "code" in e &&
          "number" == typeof e.code &&
          (e.code === h6.YW.code ||
            e.code === h6.vx.code ||
            h8.A7.nodeMessage.test(e.message) ||
            5e3 === e.code)
        );
      }
      var dt = i(99836);
      let di = {
        ConnectorExplorerIds: {
          [hN.o.CONNECTOR_ID.COINBASE]:
            "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
          [hN.o.CONNECTOR_ID.COINBASE_SDK]:
            "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
          [hN.o.CONNECTOR_ID.SAFE]:
            "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
          [hN.o.CONNECTOR_ID.LEDGER]:
            "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
          [hN.o.CONNECTOR_ID.OKX]:
            "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
          [dt.o.METMASK_CONNECTOR_NAME]:
            "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
          [dt.o.TRUST_CONNECTOR_NAME]:
            "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
          [dt.o.SOLFLARE_CONNECTOR_NAME]:
            "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
          [dt.o.PHANTOM_CONNECTOR_NAME]:
            "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
          [dt.o.COIN98_CONNECTOR_NAME]:
            "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",
          [dt.o.MAGIC_EDEN_CONNECTOR_NAME]:
            "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",
          [dt.o.BACKPACK_CONNECTOR_NAME]:
            "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",
          [dt.o.BITGET_CONNECTOR_NAME]:
            "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
          [dt.o.FRONTIER_CONNECTOR_NAME]:
            "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",
          [dt.o.XVERSE_CONNECTOR_NAME]:
            "2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",
          [dt.o.LEATHER_CONNECTOR_NAME]:
            "483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",
        },
        NetworkImageIds: {
          1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
          42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
          43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
          56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
          250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
          10: "ab9c186a-c52f-464b-2906-ca59d760a400",
          137: "41d04d42-da3b-4453-8506-668cc0727900",
          5e3: "e86fae9b-b770-4eea-e520-150e12c81100",
          295: "6a97d510-cac8-4e58-c7ce-e8681b044c00",
          0xaa36a7: "e909ea0a-f92a-4512-c8fc-748044ea6800",
          84532: "a18a7ecd-e307-4360-4746-283182228e00",
          1301: "4eeea7ef-0014-4649-5d1d-07271a80f600",
          130: "2257980a-3463-48c6-cbac-a42d2a956e00",
          10143: "0a728e83-bacb-46db-7844-948f05434900",
          100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
          9001: "f926ff41-260d-4028-635e-91913fc28e00",
          324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
          314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
          4689: "34e68754-e536-40da-c153-6ef2e7188a00",
          1088: "3897a66d-40b9-4833-162f-a2c90531c900",
          1284: "161038da-44ae-4ec7-1208-0ea569454b00",
          1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
          7777777: "845c60df-d429-4991-e687-91ae45791600",
          42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
          8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
          0x4e454152: "3ff73439-a619-4894-9262-4470c773a100",
          2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
          2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
          80094: "e329c2c9-59b0-4a02-83e4-212ff3779900",
          2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900",
          "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":
            "a1b58899-f671-4276-6a5e-56ca5bd59700",
          "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":
            "a1b58899-f671-4276-6a5e-56ca5bd59700",
          EtWTRABZaYq6iMfeYKouRu166VU2xqa1:
            "a1b58899-f671-4276-6a5e-56ca5bd59700",
          "000000000019d6689c085ae165831e93":
            "0b4838db-0161-4ffe-022d-532bf03dba00",
          "000000000933ea01ad0ee984209779ba":
            "39354064-d79b-420b-065d-f980c4b78200",
        },
        ConnectorImageIds: {
          [hN.o.CONNECTOR_ID.COINBASE]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
          [hN.o.CONNECTOR_ID.COINBASE_SDK]:
            "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
          [hN.o.CONNECTOR_ID.SAFE]: "461db637-8616-43ce-035a-d89b8a1d5800",
          [hN.o.CONNECTOR_ID.LEDGER]: "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
          [hN.o.CONNECTOR_ID.WALLET_CONNECT]:
            "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
          [hN.o.CONNECTOR_ID.INJECTED]: "07ba87ed-43aa-4adf-4540-9e6a2b9cae00",
        },
        ConnectorNamesMap: {
          [hN.o.CONNECTOR_ID.INJECTED]: "Browser Wallet",
          [hN.o.CONNECTOR_ID.WALLET_CONNECT]: "WalletConnect",
          [hN.o.CONNECTOR_ID.COINBASE]: "Coinbase",
          [hN.o.CONNECTOR_ID.COINBASE_SDK]: "Coinbase",
          [hN.o.CONNECTOR_ID.LEDGER]: "Ledger",
          [hN.o.CONNECTOR_ID.SAFE]: "Safe",
        },
        ConnectorTypesMap: {
          [hN.o.CONNECTOR_ID.INJECTED]: "INJECTED",
          [hN.o.CONNECTOR_ID.WALLET_CONNECT]: "WALLET_CONNECT",
          [hN.o.CONNECTOR_ID.EIP6963]: "ANNOUNCED",
          [hN.o.CONNECTOR_ID.AUTH]: "AUTH",
        },
        WalletConnectRpcChainIds: [
          1, 5, 0xaa36a7, 10, 420, 42161, 421613, 137, 80001, 42220, 0x4e454152,
          0x4e454153, 56, 97, 43114, 43113, 100, 8453, 84531, 7777777, 999, 324,
          280,
        ],
      };
      function dr(e, t) {
        let i = new URL("https://rpc.walletconnect.org/v1/");
        return (
          i.searchParams.set("chainId", e),
          i.searchParams.set("projectId", t),
          i.toString()
        );
      }
      let ds = [
          "near:mainnet",
          "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
          "eip155:1101",
          "eip155:56",
          "eip155:42161",
          "eip155:7777777",
          "eip155:59144",
          "eip155:324",
          "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
          "eip155:5000",
          "solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz",
          "eip155:80084",
          "eip155:5003",
          "eip155:100",
          "eip155:8453",
          "eip155:42220",
          "eip155:1313161555",
          "eip155:17000",
          "eip155:1",
          "eip155:300",
          "eip155:1313161554",
          "eip155:1329",
          "eip155:84532",
          "eip155:421614",
          "eip155:11155111",
          "eip155:8217",
          "eip155:43114",
          "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
          "eip155:999999999",
          "eip155:11155420",
          "eip155:80002",
          "eip155:97",
          "eip155:43113",
          "eip155:137",
          "eip155:10",
          "eip155:1301",
          "bip122:000000000019d6689c085ae165831e93",
          "bip122:000000000933ea01ad0ee984209779ba",
        ],
        da = {
          extendRpcUrlWithProjectId(e, t) {
            let i = !1;
            try {
              i = "rpc.walletconnect.org" === new URL(e).host;
            } catch (e) {
              i = !1;
            }
            if (i) {
              let i = new URL(e);
              return (
                i.searchParams.has("projectId") ||
                  i.searchParams.set("projectId", t),
                i.toString()
              );
            }
            return e;
          },
          isCaipNetwork: (e) => "chainNamespace" in e && "caipNetworkId" in e,
          getChainNamespace(e) {
            return this.isCaipNetwork(e) ? e.chainNamespace : hN.o.CHAIN.EVM;
          },
          getCaipNetworkId(e) {
            return this.isCaipNetwork(e)
              ? e.caipNetworkId
              : `${hN.o.CHAIN.EVM}:${e.id}`;
          },
          getDefaultRpcUrl(e, t, i) {
            let r = e.rpcUrls?.default?.http?.[0];
            return ds.includes(t) ? dr(t, i) : r || "";
          },
          extendCaipNetwork(
            e,
            { customNetworkImageUrls: t, projectId: i, customRpcUrls: r }
          ) {
            let s = this.getChainNamespace(e),
              a = this.getCaipNetworkId(e),
              n = e.rpcUrls.default.http?.[0],
              o = this.getDefaultRpcUrl(e, a, i),
              c = e?.rpcUrls?.chainDefault?.http?.[0] || n,
              l = r?.[a]?.map((e) => e.url) || [],
              h = [...l, o],
              d = [...l];
            return (
              c && !d.includes(c) && d.push(c),
              {
                ...e,
                chainNamespace: s,
                caipNetworkId: a,
                assets: {
                  imageId: di.NetworkImageIds[e.id],
                  imageUrl: t?.[e.id],
                },
                rpcUrls: {
                  ...e.rpcUrls,
                  default: { http: h },
                  chainDefault: { http: d },
                },
              }
            );
          },
          extendCaipNetworks: (
            e,
            { customNetworkImageUrls: t, projectId: i, customRpcUrls: r }
          ) =>
            e.map((e) =>
              da.extendCaipNetwork(e, {
                customNetworkImageUrls: t,
                customRpcUrls: r,
                projectId: i,
              })
            ),
          getViemTransport(e, t, i) {
            let r = [];
            return (
              i?.forEach((e) => {
                r.push((0, h3.L)(e.url, e.config));
              }),
              ds.includes(e.caipNetworkId) &&
                r.push(
                  (0, h3.L)(dr(e.caipNetworkId, t), {
                    fetchOptions: { headers: { "Content-Type": "text/plain" } },
                  })
                ),
              e?.rpcUrls?.default?.http?.forEach((e) => {
                r.push((0, h3.L)(e));
              }),
              h7(r)
            );
          },
          extendWagmiTransports(e, t, i) {
            if (ds.includes(e.caipNetworkId)) {
              let r = this.getDefaultRpcUrl(e, e.caipNetworkId, t);
              return h7([i, (0, h3.L)(r)]);
            }
            return i;
          },
          getUnsupportedNetwork: (e) => ({
            id: e.split(":")[1],
            caipNetworkId: e,
            name: hN.o.UNSUPPORTED_NETWORK_NAME,
            chainNamespace: e.split(":")[0],
            nativeCurrency: { name: "", decimals: 0, symbol: "" },
            rpcUrls: { default: { http: [] } },
          }),
          getCaipNetworkFromStorage(e) {
            let t = hT.i.getActiveCaipNetworkId(),
              i = hS.W.getAllRequestedCaipNetworks(),
              r = Array.from(hS.W.state.chains?.keys() || []),
              s = t?.split(":")[0],
              a = !!s && r.includes(s),
              n = i?.find((e) => e.caipNetworkId === t);
            return a && !n && t
              ? this.getUnsupportedNetwork(t)
              : n || e || i?.[0];
          },
        };
      var dn = i(23140);
      let dc = {
          createLogger(e, t = "error") {
            let i = (0, k.iP)({ level: t }),
              { logger: r } = (0, k.D5)({ opts: i });
            return (
              (r.error = (...t) => {
                for (let i of t) if (i instanceof Error) return void e(i, ...t);
                e(void 0, ...t);
              }),
              r
            );
          },
        },
        dl = {
          eip155: void 0,
          solana: void 0,
          polkadot: void 0,
          bip122: void 0,
          cosmos: void 0,
        },
        dh = (0, hk.BX)({ providers: { ...dl }, providerIds: { ...dl } }),
        dd = {
          state: dh,
          subscribeKey: (e, t) => (0, hx.u$)(dh, e, t),
          subscribe: (e) =>
            (0, hk.B1)(dh, () => {
              e(dh);
            }),
          subscribeProviders: (e) =>
            (0, hk.B1)(dh.providers, () => e(dh.providers)),
          setProvider(e, t) {
            t && (dh.providers[e] = (0, hk.KR)(t));
          },
          getProvider: (e) => dh.providers[e],
          setProviderId(e, t) {
            t && (dh.providerIds[e] = t);
          },
          getProviderId(e) {
            if (e) return dh.providerIds[e];
          },
          reset() {
            (dh.providers = { ...dl }), (dh.providerIds = { ...dl });
          },
          resetChain(e) {
            (dh.providers[e] = void 0), (dh.providerIds[e] = void 0);
          },
        };
      var du = i(67622);
      let dp = {
        ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
        ERROR_CODE_DEFAULT: 5e3,
        ERROR_INVALID_CHAIN_ID: 32603,
        DEFAULT_ALLOWED_ANCESTORS: [
          "http://localhost:*",
          "https://*.pages.dev",
          "https://*.vercel.app",
          "https://*.ngrok-free.app",
          "https://secure-mobile.walletconnect.com",
          "https://secure-mobile.walletconnect.org",
        ],
      };
      function dg(e) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      }
      let df = dg({
          id: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
          name: "Solana",
          network: "solana-mainnet",
          nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
          rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
          blockExplorers: {
            default: { name: "Solscan", url: "https://solscan.io" },
          },
          testnet: !1,
          chainNamespace: "solana",
          caipNetworkId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
          deprecatedCaipNetworkId: "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ",
        }),
        dm = dg({
          id: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
          name: "Solana Devnet",
          network: "solana-devnet",
          nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
          rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
          blockExplorers: {
            default: { name: "Solscan", url: "https://solscan.io" },
          },
          testnet: !0,
          chainNamespace: "solana",
          caipNetworkId: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
          deprecatedCaipNetworkId: "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K",
        });
      dg({
        id: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
        name: "Solana Testnet",
        network: "solana-testnet",
        nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
        rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
        blockExplorers: {
          default: { name: "Solscan", url: "https://solscan.io" },
        },
        testnet: !0,
        chainNamespace: "solana",
        caipNetworkId: "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
      }),
        dg({
          id: "000000000019d6689c085ae165831e93",
          caipNetworkId: "bip122:000000000019d6689c085ae165831e93",
          chainNamespace: "bip122",
          name: "Bitcoin",
          nativeCurrency: { name: "Bitcoin", symbol: "BTC", decimals: 8 },
          rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
        }),
        dg({
          id: "000000000933ea01ad0ee984209779ba",
          caipNetworkId: "bip122:000000000933ea01ad0ee984209779ba",
          chainNamespace: "bip122",
          name: "Bitcoin Testnet",
          nativeCurrency: { name: "Bitcoin", symbol: "BTC", decimals: 8 },
          rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
          testnet: !0,
        });
      let dw = {
          solana: [
            "solana_signMessage",
            "solana_signTransaction",
            "solana_requestAccounts",
            "solana_getAccounts",
            "solana_signAllTransactions",
            "solana_signAndSendTransaction",
          ],
          eip155: [
            "eth_accounts",
            "eth_requestAccounts",
            "eth_sendRawTransaction",
            "eth_sign",
            "eth_signTransaction",
            "eth_signTypedData",
            "eth_signTypedData_v3",
            "eth_signTypedData_v4",
            "eth_sendTransaction",
            "personal_sign",
            "wallet_switchEthereumChain",
            "wallet_addEthereumChain",
            "wallet_getPermissions",
            "wallet_requestPermissions",
            "wallet_registerOnboarding",
            "wallet_watchAsset",
            "wallet_scanQRCode",
            "wallet_getCallsStatus",
            "wallet_showCallsStatus",
            "wallet_sendCalls",
            "wallet_getCapabilities",
            "wallet_grantPermissions",
            "wallet_revokePermissions",
            "wallet_getAssets",
          ],
          bip122: [
            "sendTransfer",
            "signMessage",
            "signPsbt",
            "getAccountAddresses",
          ],
        },
        dy = {
          getMethodsByChainNamespace: (e) => dw[e] || [],
          createDefaultNamespace(e) {
            return {
              methods: this.getMethodsByChainNamespace(e),
              events: ["accountsChanged", "chainChanged"],
              chains: [],
              rpcMap: {},
            };
          },
          applyNamespaceOverrides(e, t) {
            if (!t) return { ...e };
            let i = { ...e },
              r = new Set();
            if (
              (t.methods && Object.keys(t.methods).forEach((e) => r.add(e)),
              t.chains && Object.keys(t.chains).forEach((e) => r.add(e)),
              t.events && Object.keys(t.events).forEach((e) => r.add(e)),
              t.rpcMap &&
                Object.keys(t.rpcMap).forEach((e) => {
                  let [t] = e.split(":");
                  t && r.add(t);
                }),
              r.forEach((e) => {
                i[e] || (i[e] = this.createDefaultNamespace(e));
              }),
              t.methods &&
                Object.entries(t.methods).forEach(([e, t]) => {
                  i[e] && (i[e].methods = t);
                }),
              t.chains &&
                Object.entries(t.chains).forEach(([e, t]) => {
                  i[e] && (i[e].chains = t);
                }),
              t.events &&
                Object.entries(t.events).forEach(([e, t]) => {
                  i[e] && (i[e].events = t);
                }),
              t.rpcMap)
            ) {
              let e = new Set();
              Object.entries(t.rpcMap).forEach(([t, r]) => {
                let [s, a] = t.split(":");
                s &&
                  a &&
                  i[s] &&
                  (i[s].rpcMap || (i[s].rpcMap = {}),
                  e.has(s) || ((i[s].rpcMap = {}), e.add(s)),
                  (i[s].rpcMap[a] = r));
              });
            }
            return i;
          },
          createNamespaces(e, t) {
            let i = e.reduce((e, t) => {
              let { id: i, chainNamespace: r, rpcUrls: s } = t,
                a = s.default.http[0];
              e[r] || (e[r] = this.createDefaultNamespace(r));
              let n = `${r}:${i}`,
                o = e[r];
              switch ((o.chains.push(n), n)) {
                case df.caipNetworkId:
                  o.chains.push(df.deprecatedCaipNetworkId);
                  break;
                case dm.caipNetworkId:
                  o.chains.push(dm.deprecatedCaipNetworkId);
              }
              return o?.rpcMap && a && (o.rpcMap[i] = a), e;
            }, {});
            return this.applyNamespaceOverrides(i, t);
          },
          resolveReownName: async (e) => {
            let t = await hM.resolveName(e),
              i = Object.values(t?.addresses) || [];
            return i[0]?.address || !1;
          },
          getChainsFromNamespaces: (e = {}) =>
            Object.values(e).flatMap((e) =>
              Array.from(
                new Set([
                  ...(e.chains || []),
                  ...e.accounts.map((e) => {
                    let [t, i] = e.split(":");
                    return `${t}:${i}`;
                  }),
                ])
              )
            ),
          isSessionEventData: (e) =>
            "object" == typeof e &&
            null !== e &&
            "id" in e &&
            "topic" in e &&
            "params" in e &&
            "object" == typeof e.params &&
            null !== e.params &&
            "chainId" in e.params &&
            "event" in e.params &&
            "object" == typeof e.params.event &&
            null !== e.params.event,
          isOriginAllowed(e, t, i) {
            for (let r of [...t, ...i])
              if (r.includes("*")) {
                let t = r.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
                if (RegExp(`^${t.replace(/\\\*/gu, ".*")}$`, "u").test(e))
                  return !0;
              } else
                try {
                  if (new URL(r).origin === e) return !0;
                } catch (t) {
                  if (r === e) return !0;
                }
            return !1;
          },
        };
      class db {
        constructor({ provider: e, namespace: t }) {
          (this.id = hN.o.CONNECTOR_ID.WALLET_CONNECT),
            (this.name =
              di.ConnectorNamesMap[hN.o.CONNECTOR_ID.WALLET_CONNECT]),
            (this.type = "WALLET_CONNECT"),
            (this.imageId =
              di.ConnectorImageIds[hN.o.CONNECTOR_ID.WALLET_CONNECT]),
            (this.getCaipNetworks = hS.W.getCaipNetworks.bind(hS.W)),
            (this.caipNetworks = this.getCaipNetworks()),
            (this.provider = e),
            (this.chain = t);
        }
        get chains() {
          return this.getCaipNetworks();
        }
        async connectWalletConnect() {
          if (!(await this.authenticate())) {
            let e = this.getCaipNetworks(),
              t = n.H.state.universalProviderConfigOverride,
              i = dy.createNamespaces(e, t);
            await this.provider.connect({ optionalNamespaces: i });
          }
          return {
            clientId: await this.provider.client.core.crypto.getClientId(),
            session: this.provider.session,
          };
        }
        async disconnect() {
          await this.provider.disconnect();
        }
        async authenticate() {
          let e = this.chains.map((e) => e.caipNetworkId);
          return hX.U.universalProviderAuthenticate({
            universalProvider: this.provider,
            chains: e,
            methods: dv,
          });
        }
      }
      let dv = [
        "eth_accounts",
        "eth_requestAccounts",
        "eth_sendRawTransaction",
        "eth_sign",
        "eth_signTransaction",
        "eth_signTypedData",
        "eth_signTypedData_v3",
        "eth_signTypedData_v4",
        "eth_sendTransaction",
        "personal_sign",
        "wallet_switchEthereumChain",
        "wallet_addEthereumChain",
        "wallet_getPermissions",
        "wallet_requestPermissions",
        "wallet_registerOnboarding",
        "wallet_watchAsset",
        "wallet_scanQRCode",
        "wallet_getCallsStatus",
        "wallet_sendCalls",
        "wallet_getCapabilities",
        "wallet_grantPermissions",
        "wallet_revokePermissions",
        "wallet_getAssets",
      ];
      class dE {
        constructor(e) {
          (this.availableConnectors = []),
            (this.eventListeners = new Map()),
            (this.getCaipNetworks = (e) => hS.W.getCaipNetworks(e)),
            e && this.construct(e);
        }
        construct(e) {
          (this.projectId = e.projectId),
            (this.namespace = e.namespace),
            (this.adapterType = e.adapterType);
        }
        get connectors() {
          return this.availableConnectors;
        }
        get networks() {
          return this.getCaipNetworks(this.namespace);
        }
        setAuthProvider(e) {
          this.addConnector({
            id: hN.o.CONNECTOR_ID.AUTH,
            type: "AUTH",
            name: hN.o.CONNECTOR_NAMES.AUTH,
            provider: e,
            imageId: di.ConnectorImageIds[hN.o.CONNECTOR_ID.AUTH],
            chain: this.namespace,
            chains: [],
          });
        }
        addConnector(...e) {
          let t = new Set();
          (this.availableConnectors = [
            ...e,
            ...this.availableConnectors,
          ].filter((e) => !t.has(e.id) && (t.add(e.id), !0))),
            this.emit("connectors", this.availableConnectors);
        }
        setStatus(e, t) {
          hO.U.setStatus(e, t);
        }
        on(e, t) {
          this.eventListeners.has(e) || this.eventListeners.set(e, new Set()),
            this.eventListeners.get(e)?.add(t);
        }
        off(e, t) {
          let i = this.eventListeners.get(e);
          i && i.delete(t);
        }
        removeAllEventListeners() {
          this.eventListeners.forEach((e) => {
            e.clear();
          });
        }
        emit(e, t) {
          let i = this.eventListeners.get(e);
          i && i.forEach((e) => e(t));
        }
        async connectWalletConnect(e) {
          let t = this.getWalletConnectConnector();
          return { clientId: (await t.connectWalletConnect()).clientId };
        }
        async switchNetwork(e) {
          let { caipNetwork: t, providerType: i } = e;
          if (!e.provider) return;
          let r = "provider" in e.provider ? e.provider.provider : e.provider;
          if ("WALLET_CONNECT" === i)
            return void r.setDefaultChain(t.caipNetworkId);
          if (r && "AUTH" === i) {
            let e = hO.U.state.preferredAccountTypes?.[t.chainNamespace];
            await r.switchNetwork(t.caipNetworkId);
            let i = await r.getUser({
              chainId: t.caipNetworkId,
              preferredAccountType: e,
            });
            this.emit("switchNetwork", i);
          }
        }
        getWalletConnectConnector() {
          let e = this.connectors.find((e) => e instanceof db);
          if (!e) throw Error("WalletConnectConnector not found");
          return e;
        }
      }
      class dC extends dE {
        setUniversalProvider(e) {
          this.addConnector(
            new db({
              provider: e,
              caipNetworks: this.getCaipNetworks(),
              namespace: this.namespace,
            })
          );
        }
        async connect(e) {
          return Promise.resolve({
            id: "WALLET_CONNECT",
            type: "WALLET_CONNECT",
            chainId: Number(e.chainId),
            provider: this.provider,
            address: "",
          });
        }
        async disconnect() {
          try {
            let e = this.getWalletConnectConnector();
            await e.disconnect();
          } catch (e) {
            console.warn("UniversalAdapter:disconnect - error", e);
          }
        }
        async getAccounts({ namespace: e }) {
          let t = this.provider;
          return Promise.resolve({
            accounts: (
              t?.session?.namespaces?.[e]?.accounts
                ?.map((e) => {
                  let [, , t] = e.split(":");
                  return t;
                })
                .filter((e, t, i) => i.indexOf(e) === t) || []
            ).map((t) =>
              a.w.createAccount(e, t, "bip122" === e ? "payment" : "eoa")
            ),
          });
        }
        async syncConnectors() {
          return Promise.resolve();
        }
        async getBalance(e) {
          if (
            !(
              e.caipNetwork &&
              hj.oU.BALANCE_SUPPORTED_CHAINS.includes(
                e.caipNetwork?.chainNamespace
              )
            ) ||
            e.caipNetwork?.testnet
          )
            return {
              balance: "0.00",
              symbol: e.caipNetwork?.nativeCurrency.symbol || "",
            };
          if (
            hO.U.state.balanceLoading &&
            e.chainId === hS.W.state.activeCaipNetwork?.id
          )
            return {
              balance: hO.U.state.balance || "0.00",
              symbol: hO.U.state.balanceSymbol || "",
            };
          let t = (await hO.U.fetchTokenBalance()).find(
            (t) =>
              t.chainId === `${e.caipNetwork?.chainNamespace}:${e.chainId}` &&
              t.symbol === e.caipNetwork?.nativeCurrency.symbol
          );
          return {
            balance: t?.quantity.numeric || "0.00",
            symbol: t?.symbol || e.caipNetwork?.nativeCurrency.symbol || "",
          };
        }
        async signMessage(e) {
          let { provider: t, message: i, address: r } = e;
          if (!t)
            throw Error("UniversalAdapter:signMessage - provider is undefined");
          let s = "";
          return {
            signature:
              hS.W.state.activeCaipNetwork?.chainNamespace === hN.o.CHAIN.SOLANA
                ? (
                    await t.request(
                      {
                        method: "solana_signMessage",
                        params: {
                          message: e5.A.encode(new TextEncoder().encode(i)),
                          pubkey: r,
                        },
                      },
                      hS.W.state.activeCaipNetwork?.caipNetworkId
                    )
                  ).signature
                : await t.request(
                    { method: "personal_sign", params: [i, r] },
                    hS.W.state.activeCaipNetwork?.caipNetworkId
                  ),
          };
        }
        async estimateGas() {
          return Promise.resolve({ gas: BigInt(0) });
        }
        async sendTransaction() {
          return Promise.resolve({ hash: "" });
        }
        walletGetAssets(e) {
          return Promise.resolve({});
        }
        async writeContract() {
          return Promise.resolve({ hash: "" });
        }
        parseUnits() {
          return 0n;
        }
        formatUnits() {
          return "0";
        }
        async getCapabilities() {
          return Promise.resolve({});
        }
        async grantPermissions() {
          return Promise.resolve({});
        }
        async revokePermissions() {
          return Promise.resolve("0x");
        }
        async syncConnection() {
          return Promise.resolve({
            id: "WALLET_CONNECT",
            type: "WALLET_CONNECT",
            chainId: 1,
            provider: this.provider,
            address: "",
          });
        }
        async switchNetwork(e) {
          let { caipNetwork: t } = e,
            i = this.getWalletConnectConnector();
          if (t.chainNamespace === hN.o.CHAIN.EVM)
            try {
              await i.provider?.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: (0, du.nj)(t.id) }],
              });
            } catch (e) {
              if (
                e.code === dp.ERROR_CODE_UNRECOGNIZED_CHAIN_ID ||
                e.code === dp.ERROR_INVALID_CHAIN_ID ||
                e.code === dp.ERROR_CODE_DEFAULT ||
                e?.data?.originalError?.code ===
                  dp.ERROR_CODE_UNRECOGNIZED_CHAIN_ID
              )
                try {
                  await i.provider?.request({
                    method: "wallet_addEthereumChain",
                    params: [
                      {
                        chainId: (0, du.nj)(t.id),
                        rpcUrls: [t?.rpcUrls.chainDefault?.http],
                        chainName: t.name,
                        nativeCurrency: t.nativeCurrency,
                        blockExplorerUrls: [t.blockExplorers?.default.url],
                      },
                    ],
                  });
                } catch (e) {
                  throw Error("Chain is not supported");
                }
            }
          i.provider.setDefaultChain(t.caipNetworkId);
        }
        getWalletConnectProvider() {
          let e = this.connectors.find((e) => "WALLET_CONNECT" === e.type);
          return e?.provider;
        }
      }
      let dI = [
          "email",
          "socials",
          "swaps",
          "onramp",
          "activity",
          "reownBranding",
        ],
        dN = {
          email: {
            apiFeatureName: "social_login",
            localFeatureName: "email",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: (e) => {
              if (!e?.config) return !1;
              let t = e.config;
              return !!e.isEnabled && t.includes("email");
            },
            processFallback: (e) =>
              void 0 === e ? hj.oU.DEFAULT_REMOTE_FEATURES.email : !!e,
          },
          socials: {
            apiFeatureName: "social_login",
            localFeatureName: "socials",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: (e) => {
              if (!e?.config) return !1;
              let t = e.config;
              return (
                !!e.isEnabled && t.length > 0 && t.filter((e) => "email" !== e)
              );
            },
            processFallback: (e) =>
              void 0 === e
                ? hj.oU.DEFAULT_REMOTE_FEATURES.socials
                : "boolean" == typeof e
                ? !!e && hj.oU.DEFAULT_REMOTE_FEATURES.socials
                : e,
          },
          swaps: {
            apiFeatureName: "swap",
            localFeatureName: "swaps",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: (e) => {
              if (!e?.config) return !1;
              let t = e.config;
              return !!e.isEnabled && t.length > 0 && t;
            },
            processFallback: (e) =>
              void 0 === e
                ? hj.oU.DEFAULT_REMOTE_FEATURES.swaps
                : "boolean" == typeof e
                ? !!e && hj.oU.DEFAULT_REMOTE_FEATURES.swaps
                : e,
          },
          onramp: {
            apiFeatureName: "onramp",
            localFeatureName: "onramp",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: (e) => {
              if (!e?.config) return !1;
              let t = e.config;
              return !!e.isEnabled && t.length > 0 && t;
            },
            processFallback: (e) =>
              void 0 === e
                ? hj.oU.DEFAULT_REMOTE_FEATURES.onramp
                : "boolean" == typeof e
                ? !!e && hj.oU.DEFAULT_REMOTE_FEATURES.onramp
                : e,
          },
          activity: {
            apiFeatureName: "activity",
            localFeatureName: "history",
            returnType: !1,
            isLegacy: !0,
            isAvailableOnBasic: !1,
            processApi: (e) => !!e.isEnabled,
            processFallback: (e) =>
              void 0 === e ? hj.oU.DEFAULT_REMOTE_FEATURES.activity : !!e,
          },
          reownBranding: {
            apiFeatureName: "reown_branding",
            localFeatureName: "reownBranding",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: (e) => !!e.isEnabled,
            processFallback: (e) =>
              void 0 === e ? hj.oU.DEFAULT_REMOTE_FEATURES.reownBranding : !!e,
          },
        },
        dA = {
          localSettingsOverridden: new Set(),
          getApiConfig: (e, t) => t?.find((t) => t.id === e),
          addWarning(e, t) {
            if (void 0 !== e) {
              let e = dN[t],
                i = e.isLegacy
                  ? `"features.${e.localFeatureName}" (now "${t}")`
                  : `"features.${t}"`;
              this.localSettingsOverridden.add(i);
            }
          },
          processFeature(e, t, i, r, s) {
            let a = dN[e],
              n = t[a.localFeatureName];
            if (s && !a.isAvailableOnBasic) return !1;
            if (r) {
              let t = this.getApiConfig(a.apiFeatureName, i);
              return t?.config === null
                ? this.processFallbackFeature(e, n)
                : !!t?.config &&
                    (void 0 !== n && this.addWarning(n, e),
                    this.processApiFeature(e, t));
            }
            return this.processFallbackFeature(e, n);
          },
          processApiFeature: (e, t) => dN[e].processApi(t),
          processFallbackFeature: (e, t) => dN[e].processFallback(t),
          async fetchRemoteFeatures(e) {
            let t = e.basic ?? !1,
              i = e.features || {};
            this.localSettingsOverridden.clear();
            let r = null,
              s = !1;
            try {
              s = null != (r = await hW.N.fetchProjectConfig());
            } catch (e) {
              console.warn(
                "[Reown Config] Failed to fetch remote project configuration. Using local/default values.",
                e
              );
            }
            let a =
              s && !t
                ? hj.oU.DEFAULT_REMOTE_FEATURES
                : hj.oU.DEFAULT_REMOTE_FEATURES_DISABLED;
            try {
              for (let e of dI) {
                let n = this.processFeature(e, i, r, s, t);
                Object.assign(a, { [e]: n });
              }
            } catch (e) {
              return (
                console.warn(
                  "[Reown Config] Failed to process the configuration from Cloud. Using default values.",
                  e
                ),
                hj.oU.DEFAULT_REMOTE_FEATURES
              );
            }
            if (s && this.localSettingsOverridden.size > 0) {
              let e = `Your local configuration for ${Array.from(
                this.localSettingsOverridden
              ).join(
                ", "
              )} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
              hV.h.open(
                {
                  shortMessage: "Local configuration ignored",
                  longMessage: `[Reown Config Notice] ${e}`,
                },
                "warning"
              );
            }
            return a;
          },
        };
      class d_ {
        constructor(e) {
          (this.chainNamespaces = []),
            (this.remoteFeatures = {}),
            (this.reportedAlertErrors = {}),
            (this.getCaipNetwork = (e, t) => {
              if (e) {
                let i = hS.W.getNetworkData(e)?.requestedCaipNetworks?.find(
                  (e) => e.id === t
                );
                if (i) return i;
                let r = hS.W.getNetworkData(e)?.caipNetwork;
                if (r) return r;
                let s = hS.W.getRequestedCaipNetworks(e);
                return s.filter((t) => t.chainNamespace === e)?.[0];
              }
              return hS.W.state.activeCaipNetwork || this.defaultCaipNetwork;
            }),
            (this.getCaipNetworkId = () => {
              let e = this.getCaipNetwork();
              if (e) return e.id;
            }),
            (this.getCaipNetworks = (e) => hS.W.getCaipNetworks(e)),
            (this.getActiveChainNamespace = () => hS.W.state.activeChain),
            (this.setRequestedCaipNetworks = (e, t) => {
              hS.W.setRequestedCaipNetworks(e, t);
            }),
            (this.getApprovedCaipNetworkIds = () =>
              hS.W.getAllApprovedCaipNetworkIds()),
            (this.getCaipAddress = (e) =>
              hS.W.state.activeChain !== e && e
                ? hS.W.getAccountProp("caipAddress", e)
                : hS.W.state.activeCaipAddress),
            (this.setClientId = (e) => {
              hP.T.setClientId(e);
            }),
            (this.getProvider = (e) => dd.getProvider(e)),
            (this.getProviderType = (e) => dd.getProviderId(e)),
            (this.getPreferredAccountType = (e) =>
              hO.U.state.preferredAccountTypes?.[e]),
            (this.setCaipAddress = (e, t) => {
              hO.U.setCaipAddress(e, t),
                e && n.H.state.enableEmbedded && this.close();
            }),
            (this.setBalance = (e, t, i) => {
              hO.U.setBalance(e, t, i);
            }),
            (this.setProfileName = (e, t) => {
              hO.U.setProfileName(e, t);
            }),
            (this.setProfileImage = (e, t) => {
              hO.U.setProfileImage(e, t);
            }),
            (this.setUser = (e, t) => {
              hO.U.setUser(e, t);
            }),
            (this.resetAccount = (e) => {
              hO.U.resetAccount(e);
            }),
            (this.setCaipNetwork = (e) => {
              hS.W.setActiveCaipNetwork(e);
            }),
            (this.setCaipNetworkOfNamespace = (e, t) => {
              hS.W.setChainNetworkData(t, { caipNetwork: e });
            }),
            (this.setAllAccounts = (e, t) => {
              hO.U.setAllAccounts(e, t),
                n.H.setHasMultipleAddresses(e?.length > 1);
            }),
            (this.setStatus = (e, t) => {
              hO.U.setStatus(e, t),
                r.a.isConnected()
                  ? hT.i.setConnectionStatus("connected")
                  : hT.i.setConnectionStatus("disconnected");
            }),
            (this.getAddressByChainNamespace = (e) =>
              hS.W.getAccountProp("address", e)),
            (this.setConnectors = (e) => {
              let t = [...r.a.state.allConnectors, ...e];
              r.a.setConnectors(t);
            }),
            (this.setConnections = (e, t) => {
              s.x.setConnections(e, t);
            }),
            (this.fetchIdentity = (e) => hP.T.fetchIdentity(e)),
            (this.getReownName = (e) => hM.getNamesForAddress(e)),
            (this.getConnectors = () => r.a.getConnectors()),
            (this.getConnectorImage = (e) => hL.$.getConnectorImage(e)),
            (this.setConnectedWalletInfo = (e, t) => {
              let i = dd.getProviderId(t),
                r = e ? { ...e, type: i } : void 0;
              hO.U.setConnectedWalletInfo(r, t);
            }),
            (this.getIsConnectedState = () => !!hS.W.state.activeCaipAddress),
            (this.addAddressLabel = (e, t, i) => {
              hO.U.addAddressLabel(e, t, i);
            }),
            (this.removeAddressLabel = (e, t) => {
              hO.U.removeAddressLabel(e, t);
            }),
            (this.getAddress = (e) =>
              hS.W.state.activeChain !== e && e
                ? hS.W.getAccountProp("address", e)
                : hO.U.state.address),
            (this.setApprovedCaipNetworksData = (e) =>
              hS.W.setApprovedCaipNetworksData(e)),
            (this.resetNetwork = (e) => {
              hS.W.resetNetwork(e);
            }),
            (this.addConnector = (e) => {
              r.a.addConnector(e);
            }),
            (this.resetWcConnection = () => {
              s.x.resetWcConnection();
            }),
            (this.setAddressExplorerUrl = (e, t) => {
              hO.U.setAddressExplorerUrl(e, t);
            }),
            (this.setSmartAccountDeployed = (e, t) => {
              hO.U.setSmartAccountDeployed(e, t);
            }),
            (this.setSmartAccountEnabledNetworks = (e, t) => {
              hS.W.setSmartAccountEnabledNetworks(e, t);
            }),
            (this.setPreferredAccountType = (e, t) => {
              hO.U.setPreferredAccountType(e, t);
            }),
            (this.setEIP6963Enabled = (e) => {
              n.H.setEIP6963Enabled(e);
            }),
            (this.handleUnsafeRPCRequest = () => {
              this.isOpen()
                ? this.isTransactionStackEmpty() ||
                  this.redirect("ApproveTransaction")
                : this.open({ view: "ApproveTransaction" });
            }),
            (this.options = e),
            (this.version = e.sdkVersion),
            (this.caipNetworks = this.extendCaipNetworks(e)),
            (this.chainNamespaces = this.getChainNamespacesSet(
              e.adapters,
              this.caipNetworks
            )),
            (this.defaultCaipNetwork = this.extendDefaultCaipNetwork(e)),
            (this.chainAdapters = this.createAdapters(e.adapters)),
            (this.readyPromise = this.initialize(e));
        }
        getChainNamespacesSet(e, t) {
          let i = e?.map((e) => e.namespace).filter((e) => !!e);
          return i?.length
            ? [...new Set(i)]
            : [...new Set(t?.map((e) => e.chainNamespace))];
        }
        async initialize(e) {
          this.initializeProjectSettings(e),
            this.initControllers(e),
            await this.initChainAdapters(),
            this.sendInitializeEvent(e),
            await this.syncExistingConnection(),
            (this.remoteFeatures = await dA.fetchRemoteFeatures(e)),
            n.H.setRemoteFeatures(this.remoteFeatures),
            this.remoteFeatures.onramp &&
              hz.setOnrampProviders(this.remoteFeatures.onramp),
            (n.H.state.remoteFeatures?.email ||
              (Array.isArray(n.H.state.remoteFeatures?.socials) &&
                n.H.state.remoteFeatures?.socials.length > 0)) &&
              (await this.checkAllowedOrigins());
        }
        async checkAllowedOrigins() {
          let e = await hW.N.fetchAllowedOrigins();
          if (e && a.w.isClient()) {
            let t = window.location.origin;
            dy.isOriginAllowed(t, e, dp.DEFAULT_ALLOWED_ANCESTORS) ||
              hV.h.open(h5.ALERT_ERRORS.INVALID_APP_CONFIGURATION, "error");
          } else hV.h.open(h5.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
        }
        sendInitializeEvent(e) {
          let { ...t } = e;
          delete t.adapters,
            delete t.universalProvider,
            hK.E.sendEvent({
              type: "track",
              event: "INITIALIZE",
              properties: {
                ...t,
                networks: e.networks.map((e) => e.id),
                siweConfig: { options: e.siweConfig?.options || {} },
              },
            });
        }
        initControllers(e) {
          this.initializeOptionsController(e),
            this.initializeChainController(e),
            this.initializeThemeController(e),
            this.initializeConnectionController(e),
            this.initializeConnectorController();
        }
        initializeThemeController(e) {
          e.themeMode && hG.W.setThemeMode(e.themeMode),
            e.themeVariables && hG.W.setThemeVariables(e.themeVariables);
        }
        initializeChainController(e) {
          if (!this.connectionControllerClient || !this.networkControllerClient)
            throw Error(
              "ConnectionControllerClient and NetworkControllerClient must be set"
            );
          hS.W.initialize(e.adapters ?? [], this.caipNetworks, {
            connectionControllerClient: this.connectionControllerClient,
            networkControllerClient: this.networkControllerClient,
          });
          let t = this.getDefaultNetwork();
          t && hS.W.setActiveCaipNetwork(t);
        }
        initializeConnectionController(e) {
          s.x.setWcBasic(e.basic ?? !1);
        }
        initializeConnectorController() {
          r.a.initialize(this.chainNamespaces);
        }
        initializeProjectSettings(e) {
          n.H.setProjectId(e.projectId), n.H.setSdkVersion(e.sdkVersion);
        }
        initializeOptionsController(e) {
          n.H.setDebug(!1 !== e.debug),
            n.H.setEnableWalletConnect(!1 !== e.enableWalletConnect),
            n.H.setEnableWalletGuide(!1 !== e.enableWalletGuide),
            n.H.setEnableWallets(!1 !== e.enableWallets),
            n.H.setEIP6963Enabled(!1 !== e.enableEIP6963),
            n.H.setEnableNetworkSwitch(!1 !== e.enableNetworkSwitch),
            n.H.setEnableAuthLogger(!1 !== e.enableAuthLogger),
            n.H.setCustomRpcUrls(e.customRpcUrls),
            n.H.setEnableEmbedded(e.enableEmbedded),
            n.H.setAllWallets(e.allWallets),
            n.H.setIncludeWalletIds(e.includeWalletIds),
            n.H.setExcludeWalletIds(e.excludeWalletIds),
            n.H.setFeaturedWalletIds(e.featuredWalletIds),
            n.H.setTokens(e.tokens),
            n.H.setTermsConditionsUrl(e.termsConditionsUrl),
            n.H.setPrivacyPolicyUrl(e.privacyPolicyUrl),
            n.H.setCustomWallets(e.customWallets),
            n.H.setFeatures(e.features),
            n.H.setAllowUnsupportedChain(e.allowUnsupportedChain),
            n.H.setUniversalProviderConfigOverride(
              e.universalProviderConfigOverride
            ),
            n.H.setPreferUniversalLinks(e.experimental_preferUniversalLinks),
            n.H.setDefaultAccountTypes(e.defaultAccountTypes);
          let t = hT.i.getPreferredAccountTypes() || {},
            i = { ...n.H.state.defaultAccountTypes, ...t };
          hO.U.setPreferredAccountTypes(i);
          let r = this.getDefaultMetaData();
          if (
            (!e.metadata && r && (e.metadata = r),
            n.H.setMetadata(e.metadata),
            n.H.setDisableAppend(e.disableAppend),
            n.H.setEnableEmbedded(e.enableEmbedded),
            n.H.setSIWX(e.siwx),
            !e.projectId)
          )
            return void hV.h.open(
              h5.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED,
              "error"
            );
          if (
            e.adapters?.find((e) => e.namespace === hN.o.CHAIN.EVM) &&
            e.siweConfig
          ) {
            if (e.siwx)
              throw Error("Cannot set both `siweConfig` and `siwx` options");
            n.H.setSIWX(e.siweConfig.mapToSIWX());
          }
        }
        getDefaultMetaData() {
          return a.w.isClient()
            ? {
                name:
                  document.getElementsByTagName("title")?.[0]?.textContent ||
                  "",
                description:
                  document.querySelector('meta[property="og:description"]')
                    ?.content || "",
                url: window.location.origin,
                icons: [
                  document.querySelector('link[rel~="icon"]')?.href || "",
                ],
              }
            : null;
        }
        setUnsupportedNetwork(e) {
          let t = this.getActiveChainNamespace();
          if (t) {
            let i = da.getUnsupportedNetwork(`${t}:${e}`);
            hS.W.setActiveCaipNetwork(i);
          }
        }
        getDefaultNetwork() {
          return da.getCaipNetworkFromStorage(this.defaultCaipNetwork);
        }
        extendCaipNetwork(e, t) {
          return da.extendCaipNetwork(e, {
            customNetworkImageUrls: t.chainImages,
            projectId: t.projectId,
          });
        }
        extendCaipNetworks(e) {
          return da.extendCaipNetworks(e.networks, {
            customNetworkImageUrls: e.chainImages,
            customRpcUrls: e.customRpcUrls,
            projectId: e.projectId,
          });
        }
        extendDefaultCaipNetwork(e) {
          let t = e.networks.find((t) => t.id === e.defaultNetwork?.id);
          return t
            ? da.extendCaipNetwork(t, {
                customNetworkImageUrls: e.chainImages,
                customRpcUrls: e.customRpcUrls,
                projectId: e.projectId,
              })
            : void 0;
        }
        async disconnectNamespace(e) {
          try {
            let t = this.getAdapter(e),
              i = dd.getProvider(e),
              s = dd.getProviderId(e),
              { caipAddress: a } = hS.W.getAccountData(e) || {};
            this.setLoading(!0, e),
              a &&
                t?.disconnect &&
                (await t.disconnect({ provider: i, providerType: s })),
              hT.i.removeConnectedNamespace(e),
              dd.resetChain(e),
              this.setUser(void 0, e),
              this.setStatus("disconnected", e),
              this.setConnectedWalletInfo(void 0, e),
              r.a.removeConnectorId(e),
              hS.W.resetAccount(e),
              hS.W.resetNetwork(e),
              this.setLoading(!1, e);
          } catch (t) {
            throw (
              (this.setLoading(!1, e),
              Error(`Failed to disconnect chain ${e}: ${t.message}`))
            );
          }
        }
        createClients() {
          (this.connectionControllerClient = {
            connectWalletConnect: async () => {
              let e = hS.W.state.activeChain,
                t = this.getAdapter(e),
                i = this.getCaipNetwork(e)?.id;
              if (!t) throw Error("Adapter not found");
              let s = await t.connectWalletConnect(i);
              this.close(),
                this.setClientId(s?.clientId || null),
                hT.i.setConnectedNamespaces([...hS.W.state.chains.keys()]),
                this.chainNamespaces.forEach((e) => {
                  r.a.setConnectorId(dt.o.CONNECTOR_TYPE_WALLET_CONNECT, e);
                }),
                await this.syncWalletConnectAccount();
            },
            connectExternal: async ({
              id: e,
              info: t,
              type: i,
              provider: r,
              chain: s,
              caipNetwork: a,
              socialUri: n,
            }) => {
              let o = hS.W.state.activeChain,
                c = s || o,
                l = this.getAdapter(c);
              if (s && s !== o && !a) {
                let e = this.getCaipNetworks().find(
                  (e) => e.chainNamespace === s
                );
                e && this.setCaipNetwork(e);
              }
              if (!l) throw Error("Adapter not found");
              let h = this.getCaipNetwork(c),
                d = await l.connect({
                  id: e,
                  info: t,
                  type: i,
                  provider: r,
                  socialUri: n,
                  chainId: a?.id || h?.id,
                  rpcUrl:
                    a?.rpcUrls?.default?.http?.[0] ||
                    h?.rpcUrls?.default?.http?.[0],
                });
              if (!d) return;
              hT.i.addConnectedNamespace(c),
                this.syncProvider({ ...d, chainNamespace: c });
              let u = hO.U.state.allAccounts,
                { accounts: p } =
                  u?.length > 0
                    ? { accounts: [...u] }
                    : await l.getAccounts({ namespace: c, id: e });
              this.setAllAccounts(p, c),
                this.setStatus("connected", c),
                this.syncConnectedWalletInfo(c);
            },
            reconnectExternal: async ({
              id: e,
              info: t,
              type: i,
              provider: r,
            }) => {
              let s = hS.W.state.activeChain,
                a = this.getAdapter(s);
              a?.reconnect &&
                (await a?.reconnect({
                  id: e,
                  info: t,
                  type: i,
                  provider: r,
                  chainId: this.getCaipNetwork()?.id,
                }),
                hT.i.addConnectedNamespace(s),
                this.syncConnectedWalletInfo(s));
            },
            disconnect: async (e) => {
              let t = (function (e) {
                let t = Array.from(hS.W.state.chains.keys()),
                  i = [];
                return (
                  e
                    ? (i.push([e, hS.W.state.chains.get(e)]),
                      h0(e, hN.o.CONNECTOR_ID.WALLET_CONNECT)
                        ? t.forEach((t) => {
                            t !== e &&
                              h0(t, hN.o.CONNECTOR_ID.WALLET_CONNECT) &&
                              i.push([t, hS.W.state.chains.get(t)]);
                          })
                        : h0(e, hN.o.CONNECTOR_ID.AUTH) &&
                          t.forEach((t) => {
                            t !== e &&
                              h0(t, hN.o.CONNECTOR_ID.AUTH) &&
                              i.push([t, hS.W.state.chains.get(t)]);
                          }))
                    : (i = Array.from(hS.W.state.chains.entries())),
                  i
                );
              })(e);
              try {
                let i = await Promise.allSettled(
                  t.map(async ([e]) => this.disconnectNamespace(e))
                );
                hJ.R.resetSend(),
                  s.x.resetWcConnection(),
                  await hX.U.clearSessions(),
                  r.a.setFilterByNamespace(void 0);
                let a = i.filter((e) => "rejected" === e.status);
                if (a.length > 0)
                  throw Error(a.map((e) => e.reason.message).join(", "));
                hT.i.deleteConnectedSocialProvider(),
                  hK.E.sendEvent({
                    type: "track",
                    event: "DISCONNECT_SUCCESS",
                    properties: { namespace: e || "all" },
                  });
              } catch (e) {
                throw Error(`Failed to disconnect chains: ${e.message}`);
              }
            },
            checkInstalled: (e) =>
              e
                ? e.some((e) => !!window.ethereum?.[String(e)])
                : !!window.ethereum,
            signMessage: async (e) => {
              let t = this.getAdapter(hS.W.state.activeChain),
                i = await t?.signMessage({
                  message: e,
                  address: hO.U.state.address,
                  provider: dd.getProvider(hS.W.state.activeChain),
                });
              return i?.signature || "";
            },
            sendTransaction: async (e) => {
              let t = e.chainNamespace;
              if (hj.oU.SEND_SUPPORTED_NAMESPACES.includes(t)) {
                let i = this.getAdapter(hS.W.state.activeChain),
                  r = dd.getProvider(t),
                  s = await i?.sendTransaction({
                    ...e,
                    caipNetwork: this.getCaipNetwork(),
                    provider: r,
                  });
                return s?.hash || "";
              }
              return "";
            },
            estimateGas: async (e) => {
              if (e.chainNamespace === hN.o.CHAIN.EVM) {
                let t = this.getAdapter(hS.W.state.activeChain),
                  i = dd.getProvider(hS.W.state.activeChain),
                  r = this.getCaipNetwork();
                if (!r) throw Error("CaipNetwork is undefined");
                let s = await t?.estimateGas({
                  ...e,
                  provider: i,
                  caipNetwork: r,
                });
                return s?.gas || 0n;
              }
              return 0n;
            },
            getEnsAvatar: async () => (
              await this.syncIdentity({
                address: hO.U.state.address,
                chainId: Number(this.getCaipNetwork()?.id),
                chainNamespace: hS.W.state.activeChain,
              }),
              hO.U.state.profileImage || !1
            ),
            getEnsAddress: async (e) => await dy.resolveReownName(e),
            writeContract: async (e) => {
              let t = this.getAdapter(hS.W.state.activeChain),
                i = this.getCaipNetwork(),
                r = this.getCaipAddress(),
                s = dd.getProvider(hS.W.state.activeChain);
              if (!i || !r)
                throw Error("CaipNetwork or CaipAddress is undefined");
              let a = await t?.writeContract({
                ...e,
                caipNetwork: i,
                provider: s,
                caipAddress: r,
              });
              return a?.hash;
            },
            parseUnits: (e, t) => {
              let i = this.getAdapter(hS.W.state.activeChain);
              return i?.parseUnits({ value: e, decimals: t }) ?? 0n;
            },
            formatUnits: (e, t) => {
              let i = this.getAdapter(hS.W.state.activeChain);
              return i?.formatUnits({ value: e, decimals: t }) ?? "0";
            },
            getCapabilities: async (e) => {
              let t = this.getAdapter(hS.W.state.activeChain);
              return await t?.getCapabilities(e);
            },
            grantPermissions: async (e) => {
              let t = this.getAdapter(hS.W.state.activeChain);
              return await t?.grantPermissions(e);
            },
            revokePermissions: async (e) => {
              let t = this.getAdapter(hS.W.state.activeChain);
              return t?.revokePermissions ? await t.revokePermissions(e) : "0x";
            },
            walletGetAssets: async (e) => {
              let t = this.getAdapter(hS.W.state.activeChain);
              return (await t?.walletGetAssets(e)) ?? {};
            },
            updateBalance: (e) => {
              let t = this.getCaipNetwork(e);
              t &&
                hO.U.state.address &&
                this.updateNativeBalance(hO.U.state.address, t?.id, e);
            },
          }),
            (this.networkControllerClient = {
              switchCaipNetwork: async (e) => await this.switchCaipNetwork(e),
              getApprovedCaipNetworksData: async () =>
                this.getApprovedCaipNetworksData(),
            }),
            s.x.setClient(this.connectionControllerClient);
        }
        getApprovedCaipNetworksData() {
          if (
            dd.getProviderId(hS.W.state.activeChain) ===
            dt.o.CONNECTOR_TYPE_WALLET_CONNECT
          ) {
            let e = this.universalProvider?.session?.namespaces;
            return {
              supportsAllNetworks:
                this.universalProvider?.session?.peer?.metadata.name ===
                "MetaMask Wallet",
              approvedCaipNetworkIds: this.getChainsFromNamespaces(e),
            };
          }
          return { supportsAllNetworks: !0, approvedCaipNetworkIds: [] };
        }
        async switchCaipNetwork(e) {
          if (!e) return;
          let t = e.chainNamespace;
          if (this.getAddressByChainNamespace(e.chainNamespace)) {
            let i = dd.getProvider(t),
              r = dd.getProviderId(t);
            if (e.chainNamespace === hS.W.state.activeChain) {
              let s = this.getAdapter(t);
              await s?.switchNetwork({
                caipNetwork: e,
                provider: i,
                providerType: r,
              });
            } else if (
              (this.setCaipNetwork(e), r === dt.o.CONNECTOR_TYPE_WALLET_CONNECT)
            )
              this.syncWalletConnectAccount();
            else {
              let i = this.getAddressByChainNamespace(t);
              i &&
                this.syncAccount({
                  address: i,
                  chainId: e.id,
                  chainNamespace: t,
                });
            }
          } else this.setCaipNetwork(e);
        }
        getChainsFromNamespaces(e = {}) {
          return Object.values(e).flatMap((e) =>
            Array.from(
              new Set([
                ...(e.chains || []),
                ...e.accounts.map((e) => {
                  let { chainId: t, chainNamespace: i } =
                    hA.parseCaipAddress(e);
                  return `${i}:${t}`;
                }),
              ])
            )
          );
        }
        createAdapters(e) {
          return (
            this.createClients(),
            this.chainNamespaces.reduce((t, i) => {
              let r = e?.find((e) => e.namespace === i);
              return (
                r
                  ? (r.construct({
                      namespace: i,
                      projectId: this.options?.projectId,
                      networks: this.getCaipNetworks(),
                    }),
                    (t[i] = r))
                  : (t[i] = new dC({
                      namespace: i,
                      networks: this.getCaipNetworks(),
                    })),
                t
              );
            }, {})
          );
        }
        async initChainAdapter(e) {
          this.onConnectors(e),
            this.listenAdapter(e),
            await this.chainAdapters?.[e].syncConnectors(this.options, this),
            await this.createUniversalProviderForAdapter(e);
        }
        async initChainAdapters() {
          await Promise.all(
            this.chainNamespaces.map(async (e) => {
              await this.initChainAdapter(e);
            })
          );
        }
        onConnectors(e) {
          let t = this.getAdapter(e);
          t?.on("connectors", this.setConnectors.bind(this));
        }
        listenAdapter(e) {
          let t = this.getAdapter(e);
          if (!t) return;
          let i = hT.i.getConnectionStatus();
          "connected" === i
            ? this.setStatus("connecting", e)
            : ("disconnected" === i && hT.i.clearAddressCache(),
              this.setStatus(i, e)),
            t.on("switchNetwork", ({ address: t, chainId: i }) => {
              let r = this.getCaipNetworks().find(
                  (e) => e.id === i || e.caipNetworkId === i
                ),
                s = hS.W.state.activeChain === e,
                a = hS.W.getAccountProp("address", e);
              if (r) {
                let i = s && t ? t : a;
                i &&
                  this.syncAccount({
                    address: i,
                    chainId: r.id,
                    chainNamespace: e,
                  });
              } else this.setUnsupportedNetwork(i);
            }),
            t.on("disconnect", this.disconnect.bind(this, e)),
            t.on("connections", (t) => {
              this.setConnections(t, e);
            }),
            t.on("pendingTransactions", () => {
              let e = hO.U.state.address,
                t = hS.W.state.activeCaipNetwork;
              e && t?.id && this.updateNativeBalance(e, t.id, t.chainNamespace);
            }),
            t.on("accountChanged", ({ address: t, chainId: i }) => {
              let r = hS.W.state.activeChain === e;
              r && i
                ? this.syncAccount({
                    address: t,
                    chainId: i,
                    chainNamespace: e,
                  })
                : r && hS.W.state.activeCaipNetwork?.id
                ? this.syncAccount({
                    address: t,
                    chainId: hS.W.state.activeCaipNetwork?.id,
                    chainNamespace: e,
                  })
                : this.syncAccountInfo(t, i, e),
                this.syncAllAccounts(e);
            });
        }
        async createUniversalProviderForAdapter(e) {
          await this.getUniversalProvider(),
            this.universalProvider &&
              this.chainAdapters?.[e]?.setUniversalProvider?.(
                this.universalProvider
              );
        }
        async syncExistingConnection() {
          await Promise.allSettled(
            this.chainNamespaces.map((e) => this.syncNamespaceConnection(e))
          );
        }
        async syncNamespaceConnection(e) {
          try {
            e === hN.o.CHAIN.EVM &&
              a.w.isSafeApp() &&
              r.a.setConnectorId(hN.o.CONNECTOR_ID.SAFE, e);
            let t = r.a.getConnectorId(e);
            switch ((this.setStatus("connecting", e), t)) {
              case hN.o.CONNECTOR_ID.WALLET_CONNECT:
                await this.syncWalletConnectAccount();
                break;
              case hN.o.CONNECTOR_ID.AUTH:
                break;
              default:
                await this.syncAdapterConnection(e);
            }
          } catch (t) {
            console.warn("AppKit couldn't sync existing connection", t),
              this.setStatus("disconnected", e);
          }
        }
        async syncAdapterConnection(e) {
          let t = this.getAdapter(e),
            i = r.a.getConnectorId(e),
            s = this.getCaipNetwork(e),
            n = r.a.getConnectors(e).find((e) => e.id === i);
          try {
            if (!t || !n)
              throw Error(`Adapter or connector not found for namespace ${e}`);
            if (!s?.id) throw Error("CaipNetwork not found");
            let i = await t?.syncConnection({
              namespace: e,
              id: n.id,
              chainId: s.id,
              rpcUrl: s?.rpcUrls?.default?.http?.[0],
            });
            if (i) {
              let r = await t?.getAccounts({ namespace: e, id: n.id });
              r && r.accounts.length > 0
                ? this.setAllAccounts(r.accounts, e)
                : this.setAllAccounts(
                    [a.w.createAccount(e, i.address, "eoa")],
                    e
                  ),
                this.syncProvider({ ...i, chainNamespace: e }),
                await this.syncAccount({ ...i, chainNamespace: e }),
                this.setStatus("connected", e);
            } else this.setStatus("disconnected", e);
          } catch (t) {
            this.setStatus("disconnected", e);
          }
        }
        async syncWalletConnectAccount() {
          let e = this.chainNamespaces.map(async (e) => {
            let t = this.getAdapter(e),
              i =
                this.universalProvider?.session?.namespaces?.[e]?.accounts ||
                [],
              s = hS.W.state.activeCaipNetwork?.id,
              a =
                i.find((e) => {
                  let { chainId: t } = hA.parseCaipAddress(e);
                  return t === s?.toString();
                }) || i[0];
            if (a) {
              let i = hA.validateCaipAddress(a),
                { chainId: s, address: n } = hA.parseCaipAddress(i);
              if (
                (dd.setProviderId(e, dt.o.CONNECTOR_TYPE_WALLET_CONNECT),
                this.caipNetworks &&
                  hS.W.state.activeCaipNetwork &&
                  t?.namespace !== hN.o.CHAIN.EVM)
              ) {
                let i = t?.getWalletConnectProvider({
                  caipNetworks: this.getCaipNetworks(),
                  provider: this.universalProvider,
                  activeCaipNetwork: hS.W.state.activeCaipNetwork,
                });
                dd.setProvider(e, i);
              } else dd.setProvider(e, this.universalProvider);
              r.a.setConnectorId(hN.o.CONNECTOR_ID.WALLET_CONNECT, e),
                hT.i.addConnectedNamespace(e),
                this.syncWalletConnectAccounts(e),
                await this.syncAccount({
                  address: n,
                  chainId: s,
                  chainNamespace: e,
                });
            } else this.setStatus("disconnected", e);
            this.syncConnectedWalletInfo(e),
              await hS.W.setApprovedCaipNetworksData(e);
          });
          await Promise.all(e);
        }
        syncWalletConnectAccounts(e) {
          let t = this.universalProvider?.session?.namespaces?.[e]?.accounts
            ?.map((e) => {
              let { address: t } = hA.parseCaipAddress(e);
              return t;
            })
            .filter((e, t, i) => i.indexOf(e) === t);
          t &&
            this.setAllAccounts(
              t.map((t) =>
                a.w.createAccount(e, t, "bip122" === e ? "payment" : "eoa")
              ),
              e
            );
        }
        syncProvider({ type: e, provider: t, id: i, chainNamespace: s }) {
          dd.setProviderId(s, e),
            dd.setProvider(s, t),
            r.a.setConnectorId(i, s);
        }
        async syncAllAccounts(e) {
          let t = r.a.getConnectorId(e);
          if (!t) return;
          let i = this.getAdapter(e),
            s = await i?.getAccounts({ namespace: e, id: t });
          s && s.accounts.length > 0 && this.setAllAccounts(s.accounts, e);
        }
        async syncAccount(e) {
          let t = e.chainNamespace === hS.W.state.activeChain,
            i = hS.W.getCaipNetworkByNamespace(e.chainNamespace, e.chainId),
            { address: r, chainId: s, chainNamespace: a } = e,
            { chainId: o } = hT.i.getActiveNetworkProps(),
            c = s || o,
            l =
              hS.W.state.activeCaipNetwork?.name ===
              hN.o.UNSUPPORTED_NETWORK_NAME,
            h = hS.W.getNetworkProp("supportsAllNetworks", a);
          if ((this.setStatus("connected", a), (!l || h) && c)) {
            let e = this.getCaipNetworks().find(
                (e) => e.id.toString() === c.toString()
              ),
              s = this.getCaipNetworks().find((e) => e.chainNamespace === a);
            if (!h && !e && !s) {
              let t = this.getApprovedCaipNetworkIds() || [],
                i = t.find(
                  (e) => hA.parseCaipNetworkId(e)?.chainId === c.toString()
                ),
                r = t.find(
                  (e) => hA.parseCaipNetworkId(e)?.chainNamespace === a
                );
              (e = this.getCaipNetworks().find((e) => e.caipNetworkId === i)),
                (s = this.getCaipNetworks().find(
                  (e) =>
                    e.caipNetworkId === r ||
                    ("deprecatedCaipNetworkId" in e &&
                      e.deprecatedCaipNetworkId === r)
                ));
            }
            let o = e || s;
            o?.chainNamespace === hS.W.state.activeChain
              ? n.H.state.enableNetworkSwitch &&
                !n.H.state.allowUnsupportedChain &&
                hS.W.state.activeCaipNetwork?.name ===
                  hN.o.UNSUPPORTED_NETWORK_NAME
                ? hS.W.showUnsupportedChainUI()
                : this.setCaipNetwork(o)
              : !t && i && this.setCaipNetworkOfNamespace(i, a),
              this.syncConnectedWalletInfo(a),
              dn.y.isLowerCaseMatch(r, hO.U.state.address) ||
                this.syncAccountInfo(r, o?.id, a),
              t
                ? await this.syncBalance({
                    address: r,
                    chainId: o?.id,
                    chainNamespace: a,
                  })
                : await this.syncBalance({
                    address: r,
                    chainId: i?.id,
                    chainNamespace: a,
                  });
          }
        }
        async syncAccountInfo(e, t, i) {
          let r = this.getCaipAddress(i),
            s = t || r?.split(":")[1];
          if (!s) return;
          let a = `${i}:${s}:${e}`;
          this.setCaipAddress(a, i),
            await this.syncIdentity({
              address: e,
              chainId: s,
              chainNamespace: i,
            });
        }
        async syncReownName(e, t) {
          try {
            let i = await this.getReownName(e);
            if (i[0]) {
              let e = i[0];
              this.setProfileName(e.name, t);
            } else this.setProfileName(null, t);
          } catch {
            this.setProfileName(null, t);
          }
        }
        syncConnectedWalletInfo(e) {
          let t = r.a.getConnectorId(e),
            i = dd.getProviderId(e);
          if (
            i === dt.o.CONNECTOR_TYPE_ANNOUNCED ||
            i === dt.o.CONNECTOR_TYPE_INJECTED
          ) {
            if (t) {
              let i = this.getConnectors().find((e) => e.id === t);
              if (i) {
                let { info: t, name: r, imageUrl: s } = i,
                  a = s || this.getConnectorImage(i);
                this.setConnectedWalletInfo({ name: r, icon: a, ...t }, e);
              }
            }
          } else if (i === dt.o.CONNECTOR_TYPE_WALLET_CONNECT) {
            let t = dd.getProvider(e);
            t?.session &&
              this.setConnectedWalletInfo(
                {
                  ...t.session.peer.metadata,
                  name: t.session.peer.metadata.name,
                  icon: t.session.peer.metadata.icons?.[0],
                },
                e
              );
          } else if (t && t === hN.o.CONNECTOR_ID.COINBASE) {
            let t = this.getConnectors().find(
              (e) => e.id === hN.o.CONNECTOR_ID.COINBASE
            );
            this.setConnectedWalletInfo(
              { name: "Coinbase Wallet", icon: this.getConnectorImage(t) },
              e
            );
          }
        }
        async syncBalance(e) {
          h_.L.getNetworksByNamespace(
            this.getCaipNetworks(),
            e.chainNamespace
          ).find((t) => t.id.toString() === e.chainId?.toString()) &&
            e.chainId &&
            (await this.updateNativeBalance(
              e.address,
              e.chainId,
              e.chainNamespace
            ));
        }
        async ready() {
          await this.readyPromise;
        }
        async updateNativeBalance(e, t, i) {
          let r = this.getAdapter(i),
            s = hS.W.getCaipNetworkByNamespace(i, t);
          if (r) {
            let a = await r.getBalance({
              address: e,
              chainId: t,
              caipNetwork: s,
              tokens: this.options.tokens,
            });
            return this.setBalance(a.balance, a.symbol, i), a;
          }
        }
        async initializeUniversalAdapter() {
          let e = dc.createLogger((e, ...t) => {
              e && this.handleAlertError(e), console.error(...t);
            }),
            t = {
              projectId: this.options?.projectId,
              metadata: {
                name: this.options?.metadata ? this.options?.metadata.name : "",
                description: this.options?.metadata
                  ? this.options?.metadata.description
                  : "",
                url: this.options?.metadata ? this.options?.metadata.url : "",
                icons: this.options?.metadata
                  ? this.options?.metadata.icons
                  : [""],
              },
              logger: e,
            };
          n.H.setManualWCControl(!!this.options?.manualWCControl),
            (this.universalProvider =
              this.options.universalProvider ?? (await hI.init(t))),
            this.listenWalletConnect();
        }
        listenWalletConnect() {
          this.universalProvider &&
            (this.universalProvider.on("display_uri", (e) => {
              s.x.setUri(e);
            }),
            this.universalProvider.on("connect", s.x.finalizeWcConnection),
            this.universalProvider.on("disconnect", () => {
              this.chainNamespaces.forEach((e) => {
                this.resetAccount(e);
              }),
                s.x.resetWcConnection();
            }),
            this.universalProvider.on("chainChanged", (e) => {
              let t = this.getCaipNetworks().find((t) => t.id == e),
                i = this.getCaipNetwork();
              if (!t) return void this.setUnsupportedNetwork(e);
              i?.id !== t?.id && this.setCaipNetwork(t);
            }),
            this.universalProvider.on("session_event", (e) => {
              if (dy.isSessionEventData(e)) {
                let { name: t, data: i } = e.params.event;
                "accountsChanged" === t &&
                  Array.isArray(i) &&
                  a.w.isCaipAddress(i[0]) &&
                  this.syncAccount(hA.parseCaipAddress(i[0]));
              }
            }));
        }
        createUniversalProvider() {
          return (
            !this.universalProviderInitPromise &&
              a.w.isClient() &&
              this.options?.projectId &&
              (this.universalProviderInitPromise =
                this.initializeUniversalAdapter()),
            this.universalProviderInitPromise
          );
        }
        async getUniversalProvider() {
          if (!this.universalProvider)
            try {
              await this.createUniversalProvider();
            } catch (e) {
              hK.E.sendEvent({
                type: "error",
                event: "INTERNAL_SDK_ERROR",
                properties: {
                  errorType: "UniversalProviderInitError",
                  errorMessage: e instanceof Error ? e.message : "Unknown",
                  uncaught: !1,
                },
              }),
                console.error(
                  "AppKit:getUniversalProvider - Cannot create provider",
                  e
                );
            }
          return this.universalProvider;
        }
        handleAlertError(e) {
          let [t, i] =
              Object.entries(h5.UniversalProviderErrors).find(
                ([, { message: t }]) => e.message.includes(t)
              ) ?? [],
            { message: r, alertErrorKey: s } = i ?? {};
          if (t && r && !this.reportedAlertErrors[t]) {
            let e = h5.ALERT_ERRORS[s];
            e && (hV.h.open(e, "error"), (this.reportedAlertErrors[t] = !0));
          }
        }
        getAdapter(e) {
          if (e) return this.chainAdapters?.[e];
        }
        createAdapter(e) {
          if (!e) return;
          let t = e.namespace;
          t &&
            (this.createClients(),
            (e.namespace = t),
            e.construct({
              namespace: t,
              projectId: this.options?.projectId,
              networks: this.getCaipNetworks(),
            }),
            this.chainNamespaces.includes(t) || this.chainNamespaces.push(t),
            this.chainAdapters && (this.chainAdapters[t] = e));
        }
        async open(e) {
          return (await this.injectModalUi(),
          e?.uri && s.x.setUri(e.uri),
          e?.arguments && e?.view === "Swap")
            ? hY.W.open({ ...e, data: { swap: e.arguments } })
            : hY.W.open(e);
        }
        async close() {
          await this.injectModalUi(), hY.W.close();
        }
        setLoading(e, t) {
          hY.W.setLoading(e, t);
        }
        async disconnect(e) {
          await s.x.disconnect(e);
        }
        getSIWX() {
          return n.H.state.siwx;
        }
        getError() {
          return "";
        }
        getChainId() {
          return hS.W.state.activeCaipNetwork?.id;
        }
        async switchNetwork(e) {
          let t = this.getCaipNetworks().find((t) => t.id === e.id);
          if (!t)
            return void hV.h.open(
              h5.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND,
              "error"
            );
          await hS.W.switchActiveNetwork(t);
        }
        getWalletProvider() {
          return hS.W.state.activeChain
            ? dd.state.providers[hS.W.state.activeChain]
            : null;
        }
        getWalletProviderType() {
          return dd.getProviderId(hS.W.state.activeChain);
        }
        subscribeProviders(e) {
          return dd.subscribeProviders(e);
        }
        getThemeMode() {
          return hG.W.state.themeMode;
        }
        getThemeVariables() {
          return hG.W.state.themeVariables;
        }
        setThemeMode(e) {
          hG.W.setThemeMode(e), (0, h2.JX)(hG.W.state.themeMode);
        }
        setTermsConditionsUrl(e) {
          n.H.setTermsConditionsUrl(e);
        }
        setPrivacyPolicyUrl(e) {
          n.H.setPrivacyPolicyUrl(e);
        }
        setThemeVariables(e) {
          hG.W.setThemeVariables(e), (0, h2.ds)(hG.W.state.themeVariables);
        }
        subscribeTheme(e) {
          return hG.W.subscribe(e);
        }
        getWalletInfo() {
          return hO.U.state.connectedWalletInfo;
        }
        getAccount(e) {
          let t = r.a.getAuthConnector(e),
            i = hS.W.getAccountData(e),
            s = hS.W.state.activeChain,
            n = hT.i.getConnectedConnectorId(e || s);
          if (i)
            return {
              allAccounts: i.allAccounts,
              caipAddress: i.caipAddress,
              address: a.w.getPlainAddress(i.caipAddress),
              isConnected: !!i.caipAddress,
              status: i.status,
              embeddedWalletInfo:
                t && n === hN.o.CONNECTOR_ID.AUTH
                  ? {
                      user: i.user
                        ? {
                            ...i.user,
                            username: hT.i.getConnectedSocialUsername(),
                          }
                        : void 0,
                      authProvider: i.socialProvider || "email",
                      accountType: i.preferredAccountTypes?.[e || s],
                      isSmartAccountDeployed: !!i.smartAccountDeployed,
                    }
                  : void 0,
            };
        }
        subscribeAccount(e, t) {
          let i = () => {
            let i = this.getAccount(t);
            i && e(i);
          };
          t ? hS.W.subscribeChainProp("accountState", i, t) : hS.W.subscribe(i),
            r.a.subscribe(i);
        }
        subscribeNetwork(e) {
          return hS.W.subscribe(({ activeCaipNetwork: t }) => {
            e({
              caipNetwork: t,
              chainId: t?.id,
              caipNetworkId: t?.caipNetworkId,
            });
          });
        }
        subscribeWalletInfo(e) {
          return hO.U.subscribeKey("connectedWalletInfo", e);
        }
        subscribeShouldUpdateToAddress(e) {
          hO.U.subscribeKey("shouldUpdateToAddress", e);
        }
        subscribeCaipNetworkChange(e) {
          hS.W.subscribeKey("activeCaipNetwork", e);
        }
        getState() {
          return hZ.z.state;
        }
        subscribeState(e) {
          return hZ.z.subscribe(e);
        }
        showErrorMessage(e) {
          hQ.P.showError(e);
        }
        showSuccessMessage(e) {
          hQ.P.showSuccess(e);
        }
        getEvent() {
          return { ...hK.E.state };
        }
        subscribeEvents(e) {
          return hK.E.subscribe(e);
        }
        replace(e) {
          hD.I.replace(e);
        }
        redirect(e) {
          hD.I.push(e);
        }
        popTransactionStack(e) {
          hD.I.popTransactionStack(e);
        }
        isOpen() {
          return hY.W.state.open;
        }
        isTransactionStackEmpty() {
          return 0 === hD.I.state.transactionStack.length;
        }
        static getInstance() {
          return this.instance;
        }
        updateFeatures(e) {
          n.H.setFeatures(e);
        }
        updateRemoteFeatures(e) {
          n.H.setRemoteFeatures(e);
        }
        updateOptions(e) {
          let t = { ...(n.H.state || {}), ...e };
          n.H.setOptions(t);
        }
        setConnectMethodsOrder(e) {
          n.H.setConnectMethodsOrder(e);
        }
        setWalletFeaturesOrder(e) {
          n.H.setWalletFeaturesOrder(e);
        }
        setCollapseWallets(e) {
          n.H.setCollapseWallets(e);
        }
        setSocialsOrder(e) {
          n.H.setSocialsOrder(e);
        }
        getConnectMethodsOrder() {
          return h1.A.getConnectOrderMethod(
            n.H.state.features,
            r.a.getConnectors()
          );
        }
        addNetwork(e, t) {
          if (this.chainAdapters && !this.chainAdapters[e])
            throw Error(`Adapter for namespace ${e} doesn't exist`);
          let i = this.extendCaipNetwork(t, this.options);
          this.getCaipNetworks().find((e) => e.id === i.id) ||
            hS.W.addNetwork(i);
        }
        removeNetwork(e, t) {
          if (this.chainAdapters && !this.chainAdapters[e])
            throw Error(`Adapter for namespace ${e} doesn't exist`);
          this.getCaipNetworks().find((e) => e.id === t) &&
            hS.W.removeNetwork(e, t);
        }
      }
      let dS = !1;
      class dP extends d_ {
        async open(e) {
          r.a.isConnected() || (await super.open(e));
        }
        async close() {
          await super.close(),
            this.options.manualWCControl && s.x.finalizeWcConnection();
        }
        async syncIdentity(e) {
          return Promise.resolve();
        }
        async syncBalance(e) {
          return Promise.resolve();
        }
        async injectModalUi() {
          if (!dS && a.w.isClient()) {
            if (
              (await Promise.all([i.e(859), i.e(2387)]).then(i.bind(i, 22387)),
              await Promise.all([i.e(859), i.e(4708)]).then(i.bind(i, 84708)),
              !document.querySelector("w3m-modal"))
            ) {
              let e = document.createElement("w3m-modal");
              n.H.state.disableAppend ||
                n.H.state.enableEmbedded ||
                document.body.insertAdjacentElement("beforeend", e);
            }
            dS = !0;
          }
        }
      }
      function dO(e) {
        return new dP({ ...e, basic: !0, sdkVersion: "html-core-1.7.8" });
      }
    },
    35558: (e, t, i) => {
      "use strict";
      i.d(t, { w: () => n });
      var r = i(60500),
        s = i(76610),
        a = i(5582);
      let n = {
        isMobile() {
          return (
            !!this.isClient() &&
            !!(
              ("function" == typeof window?.matchMedia &&
                window?.matchMedia("(pointer:coarse)")?.matches) ||
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
                navigator.userAgent
              )
            )
          );
        },
        checkCaipNetwork: (e, t = "") =>
          e?.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase()),
        isAndroid() {
          if (!this.isMobile()) return !1;
          let e = window?.navigator.userAgent.toLowerCase();
          return n.isMobile() && e.includes("android");
        },
        isIos() {
          if (!this.isMobile()) return !1;
          let e = window?.navigator.userAgent.toLowerCase();
          return e.includes("iphone") || e.includes("ipad");
        },
        isSafari() {
          return (
            !!this.isClient() &&
            window?.navigator.userAgent.toLowerCase().includes("safari")
          );
        },
        isClient: () => "undefined" != typeof window,
        isPairingExpired: (e) => !e || e - Date.now() <= s.oU.TEN_SEC_MS,
        isAllowedRetry: (e, t = s.oU.ONE_SEC_MS) => Date.now() - e >= t,
        copyToClopboard(e) {
          navigator.clipboard.writeText(e);
        },
        isIframe() {
          try {
            return window?.self !== window?.top;
          } catch (e) {
            return !1;
          }
        },
        isSafeApp() {
          if (n.isClient() && window.self !== window.top)
            try {
              let e = window?.location?.ancestorOrigins?.[0];
              if (e) {
                let t = new URL(e),
                  i = new URL("https://app.safe.global");
                return t.hostname === i.hostname;
              }
            } catch {}
          return !1;
        },
        getPairingExpiry: () => Date.now() + s.oU.FOUR_MINUTES_MS,
        getNetworkId: (e) => e?.split(":")[1],
        getPlainAddress: (e) => e?.split(":")[2],
        wait: async (e) =>
          new Promise((t) => {
            setTimeout(t, e);
          }),
        debounce(e, t = 500) {
          let i;
          return (...r) => {
            i && clearTimeout(i),
              (i = setTimeout(function () {
                e(...r);
              }, t));
          };
        },
        isHttpUrl: (e) => e.startsWith("http://") || e.startsWith("https://"),
        formatNativeUrl(e, t, i = null) {
          if (n.isHttpUrl(e)) return this.formatUniversalUrl(e, t);
          let r = e,
            s = i;
          r.includes("://") ||
            ((r = e.replaceAll("/", "").replaceAll(":", "")), (r = `${r}://`)),
            r.endsWith("/") || (r = `${r}/`),
            s && !s?.endsWith("/") && (s = `${s}/`),
            this.isTelegram() &&
              this.isAndroid() &&
              (t = encodeURIComponent(t));
          let a = encodeURIComponent(t);
          return {
            redirect: `${r}wc?uri=${a}`,
            redirectUniversalLink: s ? `${s}wc?uri=${a}` : void 0,
            href: r,
          };
        },
        formatUniversalUrl(e, t) {
          if (!n.isHttpUrl(e)) return this.formatNativeUrl(e, t);
          let i = e;
          i.endsWith("/") || (i = `${i}/`);
          let r = encodeURIComponent(t);
          return { redirect: `${i}wc?uri=${r}`, href: i };
        },
        getOpenTargetForPlatform(e) {
          return "popupWindow" === e
            ? e
            : this.isTelegram()
            ? a.i.getTelegramSocialProvider()
              ? "_top"
              : "_blank"
            : e;
        },
        openHref(e, t, i) {
          window?.open(
            e,
            this.getOpenTargetForPlatform(t),
            i || "noreferrer noopener"
          );
        },
        returnOpenHref(e, t, i) {
          return window?.open(
            e,
            this.getOpenTargetForPlatform(t),
            i || "noreferrer noopener"
          );
        },
        isTelegram: () =>
          "undefined" != typeof window &&
          (!!window.TelegramWebviewProxy ||
            !!window.Telegram ||
            !!window.TelegramWebviewProxyProto),
        isPWA() {
          if ("undefined" == typeof window) return !1;
          let e = window.matchMedia?.("(display-mode: standalone)")?.matches,
            t = window?.navigator?.standalone;
          return !!(e || t);
        },
        preloadImage: async (e) =>
          Promise.race([
            new Promise((t, i) => {
              let r = new Image();
              (r.onload = t),
                (r.onerror = i),
                (r.crossOrigin = "anonymous"),
                (r.src = e);
            }),
            n.wait(2e3),
          ]),
        formatBalance(e, t) {
          let i = "0.000";
          if ("string" == typeof e) {
            let t = Number(e);
            if (t) {
              let e = Math.floor(1e3 * t) / 1e3;
              e && (i = e.toString());
            }
          }
          return `${i}${t ? ` ${t}` : ""}`;
        },
        formatBalance2(e, t) {
          let i;
          if ("0" === e) i = "0";
          else if ("string" == typeof e) {
            let t = Number(e);
            t && (i = t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0]);
          }
          return { value: i ?? "0", rest: "0" === i ? "000" : "", symbol: t };
        },
        getApiUrl: () => r.o.W3M_API_URL,
        getBlockchainApiUrl: () => r.o.BLOCKCHAIN_API_RPC_URL,
        getAnalyticsUrl: () => r.o.PULSE_API_URL,
        getUUID: () =>
          crypto?.randomUUID
            ? crypto.randomUUID()
            : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e) => {
                let t = (16 * Math.random()) | 0;
                return ("x" === e ? t : (3 & t) | 8).toString(16);
              }),
        parseError: (e) =>
          "string" == typeof e
            ? e
            : "string" == typeof e?.issues?.[0]?.message
            ? e.issues[0].message
            : e instanceof Error
            ? e.message
            : "Unknown error",
        sortRequestedNetworks(e, t = []) {
          let i = {};
          return (
            t &&
              e &&
              (e.forEach((e, t) => {
                i[e] = t;
              }),
              t.sort((e, t) => {
                let r = i[e.id],
                  s = i[t.id];
                return void 0 !== r && void 0 !== s
                  ? r - s
                  : void 0 !== r
                  ? -1
                  : 1 * (void 0 !== s);
              })),
            t
          );
        },
        calculateBalance(e) {
          let t = 0;
          for (let i of e) t += i.value ?? 0;
          return t;
        },
        formatTokenBalance(e) {
          let [t, i] = e.toFixed(2).split(".");
          return { dollars: t, pennies: i };
        },
        isAddress(e, t = "eip155") {
          switch (t) {
            case "eip155":
              if (
                /^(?:0x)?[0-9a-f]{40}$/iu.test(e) &&
                (/^(?:0x)?[0-9a-f]{40}$/iu.test(e) ||
                  /^(?:0x)?[0-9A-F]{40}$/iu.test(e))
              )
                return !0;
              return !1;
            case "solana":
              return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);
            default:
              return !1;
          }
        },
        uniqueBy(e, t) {
          let i = new Set();
          return e.filter((e) => {
            let r = e[t];
            return !i.has(r) && (i.add(r), !0);
          });
        },
        generateSdkVersion(e, t, i) {
          let r =
            0 === e.length
              ? s.oU.ADAPTER_TYPES.UNIVERSAL
              : e.map((e) => e.adapterType).join(",");
          return `${t}-${r}-${i}`;
        },
        createAccount: (e, t, i, r, s) => ({
          namespace: e,
          address: t,
          type: i,
          publicKey: r,
          path: s,
        }),
        isCaipAddress(e) {
          if ("string" != typeof e) return !1;
          let t = e.split(":"),
            i = t[0];
          return 3 === t.filter(Boolean).length && i in r.o.CHAIN_NAME_MAP;
        },
        isMac() {
          let e = window?.navigator.userAgent.toLowerCase();
          return e.includes("macintosh") && !e.includes("safari");
        },
        formatTelegramSocialLoginUrl(e) {
          let t = `--${encodeURIComponent(window?.location.href)}`,
            i = "state=";
          if ("auth.magic.link" === new URL(e).host) {
            let r = "provider_authorization_url=",
              s = e.substring(e.indexOf(r) + r.length),
              a = this.injectIntoUrl(decodeURIComponent(s), i, t);
            return e.replace(s, encodeURIComponent(a));
          }
          return this.injectIntoUrl(e, i, t);
        },
        injectIntoUrl(e, t, i) {
          let r = e.indexOf(t);
          if (-1 === r)
            throw Error(`${t} parameter not found in the URL: ${e}`);
          let s = e.indexOf("&", r),
            a = t.length,
            n = -1 !== s ? s : e.length,
            o = e.substring(0, r + a),
            c = e.substring(r + a, n);
          return o + (c + i) + e.substring(s);
        },
      };
    },
    36665: (e, t, i) => {
      "use strict";
      i.d(t, { z: () => n });
      var r = i(43708),
        s = i(70799);
      let a = (0, r.BX)({
          loading: !1,
          open: !1,
          selectedNetworkId: void 0,
          activeChain: void 0,
          initialized: !1,
        }),
        n = {
          state: a,
          subscribe: (e) => (0, r.B1)(a, () => e(a)),
          subscribeOpen: (e) => (0, s.u$)(a, "open", e),
          set(e) {
            Object.assign(a, { ...a, ...e });
          },
        };
    },
    40166: (e, t, i) => {
      "use strict";
      i.d(t, { W: () => b });
      var r = i(43708),
        s = i(70799),
        a = i(35558),
        n = i(60500),
        o = i(11076),
        c = i(90906),
        l = i(54252),
        h = i(19628);
      let d = {
        onSwitchNetwork({ network: e, ignoreSwitchConfirmation: t = !1 }) {
          let i = c.W.state.activeCaipNetwork,
            r = h.I.state.data;
          if (e.id === i?.id) return;
          let s = o.U.getCaipAddress(c.W.state.activeChain),
            a = e.chainNamespace !== c.W.state.activeChain,
            d = o.U.getCaipAddress(e.chainNamespace),
            u =
              l.a.getConnectorId(c.W.state.activeChain) ===
              n.o.CONNECTOR_ID.AUTH,
            p = n.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
              (t) => t === e.chainNamespace
            );
          t || (u && p)
            ? h.I.push("SwitchNetwork", { ...r, network: e })
            : s && a && !d
            ? h.I.push("SwitchActiveChain", {
                switchToChain: e.chainNamespace,
                navigateTo: "Connect",
                navigateWithReplace: !0,
                network: e,
              })
            : h.I.push("SwitchNetwork", { ...r, network: e });
        },
      };
      var u = i(92555),
        p = i(65819),
        g = i(81192),
        f = i(32836),
        m = i(96641),
        w = i(36665);
      let y = (0, r.BX)({
          loading: !1,
          loadingNamespaceMap: new Map(),
          open: !1,
          shake: !1,
          namespace: void 0,
        }),
        b = (0, u.X)({
          state: y,
          subscribe: (e) => (0, r.B1)(y, () => e(y)),
          subscribeKey: (e, t) => (0, s.u$)(y, e, t),
          async open(e) {
            let t = "connected" === o.U.state.status,
              i = e?.namespace,
              r = c.W.state.activeChain,
              s = i && i !== r,
              n = c.W.getAccountData(e?.namespace)?.caipAddress;
            if (
              (g.x.state.wcBasic
                ? p.N.prefetch({
                    fetchNetworkImages: !1,
                    fetchConnectorImages: !1,
                  })
                : await p.N.prefetch({
                    fetchConnectorImages: !t,
                    fetchFeaturedWallets: !t,
                    fetchRecommendedWallets: !t,
                  }),
              l.a.setFilterByNamespace(e?.namespace),
              b.setLoading(!0, i),
              i && s)
            ) {
              let e =
                c.W.getNetworkData(i)?.caipNetwork ||
                c.W.getRequestedCaipNetworks(i)[0];
              e &&
                d.onSwitchNetwork({ network: e, ignoreSwitchConfirmation: !0 });
            } else {
              let t = c.W.state.noAdapters;
              m.H.state.manualWCControl || (t && !n)
                ? a.w.isMobile()
                  ? h.I.reset("AllWallets")
                  : h.I.reset("ConnectingWalletConnectBasic")
                : e?.view
                ? h.I.reset(e.view, e.data)
                : n
                ? h.I.reset("Account")
                : h.I.reset("Connect");
            }
            (y.open = !0),
              w.z.set({ open: !0 }),
              f.E.sendEvent({
                type: "track",
                event: "MODAL_OPEN",
                properties: { connected: !!n },
              });
          },
          close() {
            let e = m.H.state.enableEmbedded,
              t = !!c.W.state.activeCaipAddress;
            y.open &&
              f.E.sendEvent({
                type: "track",
                event: "MODAL_CLOSE",
                properties: { connected: t },
              }),
              (y.open = !1),
              h.I.reset("Connect"),
              b.clearLoading(),
              e
                ? t
                  ? h.I.replace("Account")
                  : h.I.push("Connect")
                : w.z.set({ open: !1 }),
              g.x.resetUri();
          },
          setLoading(e, t) {
            t && y.loadingNamespaceMap.set(t, e),
              (y.loading = e),
              w.z.set({ loading: e });
          },
          clearLoading() {
            y.loadingNamespaceMap.clear(), (y.loading = !1);
          },
          shake() {
            y.shake ||
              ((y.shake = !0),
              setTimeout(() => {
                y.shake = !1;
              }, 500));
          },
        });
    },
    43359: (e, t, i) => {
      "use strict";
      async function r(...e) {
        let t = await fetch(...e);
        if (!t.ok) throw Error(`HTTP status code: ${t.status}`, { cause: t });
        return t;
      }
      i.d(t, { Z: () => s });
      class s {
        constructor({ baseUrl: e, clientId: t }) {
          (this.baseUrl = e), (this.clientId = t);
        }
        async get({ headers: e, signal: t, cache: i, ...s }) {
          let a = this.createUrl(s);
          return (
            await r(a, { method: "GET", headers: e, signal: t, cache: i })
          ).json();
        }
        async getBlob({ headers: e, signal: t, ...i }) {
          let s = this.createUrl(i);
          return (await r(s, { method: "GET", headers: e, signal: t })).blob();
        }
        async post({ body: e, headers: t, signal: i, ...s }) {
          let a = this.createUrl(s);
          return (
            await r(a, {
              method: "POST",
              headers: t,
              body: e ? JSON.stringify(e) : void 0,
              signal: i,
            })
          ).json();
        }
        async put({ body: e, headers: t, signal: i, ...s }) {
          let a = this.createUrl(s);
          return (
            await r(a, {
              method: "PUT",
              headers: t,
              body: e ? JSON.stringify(e) : void 0,
              signal: i,
            })
          ).json();
        }
        async delete({ body: e, headers: t, signal: i, ...s }) {
          let a = this.createUrl(s);
          return (
            await r(a, {
              method: "DELETE",
              headers: t,
              body: e ? JSON.stringify(e) : void 0,
              signal: i,
            })
          ).json();
        }
        createUrl({ path: e, params: t }) {
          let i = new URL(e, this.baseUrl);
          return (
            t &&
              Object.entries(t).forEach(([e, t]) => {
                t && i.searchParams.append(e, t);
              }),
            this.clientId && i.searchParams.append("clientId", this.clientId),
            i
          );
        }
      }
    },
    43708: (e, t, i) => {
      "use strict";
      i.d(t, { BX: () => p, KR: () => m, P9: () => f, B1: () => g }), Symbol();
      let r = Symbol(),
        s = Object.getPrototypeOf,
        a = new WeakMap(),
        n = (e) =>
          e &&
          (a.has(e)
            ? a.get(e)
            : s(e) === Object.prototype || s(e) === Array.prototype),
        o = (e) => (n(e) && e[r]) || null,
        c = (e, t = !0) => {
          a.set(e, t);
        },
        l = (e) => "object" == typeof e && null !== e,
        h = new WeakMap(),
        d = new WeakSet(),
        [u] = ((
          e = Object.is,
          t = (e, t) => new Proxy(e, t),
          i = (e) =>
            l(e) &&
            !d.has(e) &&
            (Array.isArray(e) || !(Symbol.iterator in e)) &&
            !(e instanceof WeakMap) &&
            !(e instanceof WeakSet) &&
            !(e instanceof Error) &&
            !(e instanceof Number) &&
            !(e instanceof Date) &&
            !(e instanceof String) &&
            !(e instanceof RegExp) &&
            !(e instanceof ArrayBuffer),
          r = (e) => {
            switch (e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
              default:
                throw e;
            }
          },
          s = new WeakMap(),
          a = (e, t, i = r) => {
            let n = s.get(e);
            if ((null == n ? void 0 : n[0]) === t) return n[1];
            let o = Array.isArray(e)
              ? []
              : Object.create(Object.getPrototypeOf(e));
            return (
              c(o, !0),
              s.set(e, [t, o]),
              Reflect.ownKeys(e).forEach((t) => {
                if (Object.getOwnPropertyDescriptor(o, t)) return;
                let r = Reflect.get(e, t),
                  { enumerable: s } = Reflect.getOwnPropertyDescriptor(e, t),
                  n = { value: r, enumerable: s, configurable: !0 };
                if (d.has(r)) c(r, !1);
                else if (r instanceof Promise)
                  delete n.value, (n.get = () => i(r));
                else if (h.has(r)) {
                  let [e, t] = h.get(r);
                  n.value = a(e, t(), i);
                }
                Object.defineProperty(o, t, n);
              }),
              Object.preventExtensions(o)
            );
          },
          n = new WeakMap(),
          u = [1, 1],
          p = (r) => {
            if (!l(r)) throw Error("object required");
            let s = n.get(r);
            if (s) return s;
            let c = u[0],
              g = new Set(),
              f = (e, t = ++u[0]) => {
                c !== t && ((c = t), g.forEach((i) => i(e, t)));
              },
              m = u[1],
              w = (e = ++u[1]) => (
                m === e ||
                  g.size ||
                  ((m = e),
                  b.forEach(([t]) => {
                    let i = t[1](e);
                    i > c && (c = i);
                  })),
                c
              ),
              y = (e) => (t, i) => {
                let r = [...t];
                (r[1] = [e, ...r[1]]), f(r, i);
              },
              b = new Map(),
              v = (e, t) => {
                if (b.has(e)) throw Error("prop listener already exists");
                if (g.size) {
                  let i = t[3](y(e));
                  b.set(e, [t, i]);
                } else b.set(e, [t]);
              },
              E = (e) => {
                var t;
                let i = b.get(e);
                i && (b.delete(e), null == (t = i[1]) || t.call(i));
              },
              C = (e) => {
                g.add(e),
                  1 === g.size &&
                    b.forEach(([e, t], i) => {
                      if (t) throw Error("remove already exists");
                      let r = e[3](y(i));
                      b.set(i, [e, r]);
                    });
                let t = () => {
                  g.delete(e),
                    0 === g.size &&
                      b.forEach(([e, t], i) => {
                        t && (t(), b.set(i, [e]));
                      });
                };
                return t;
              },
              I = Array.isArray(r)
                ? []
                : Object.create(Object.getPrototypeOf(r)),
              N = {
                deleteProperty(e, t) {
                  let i = Reflect.get(e, t);
                  E(t);
                  let r = Reflect.deleteProperty(e, t);
                  return r && f(["delete", [t], i]), r;
                },
                set(t, r, s, a) {
                  let c = Reflect.has(t, r),
                    u = Reflect.get(t, r, a);
                  if (c && (e(u, s) || (n.has(s) && e(u, n.get(s))))) return !0;
                  E(r), l(s) && (s = o(s) || s);
                  let g = s;
                  if (s instanceof Promise)
                    s.then((e) => {
                      (s.status = "fulfilled"),
                        (s.value = e),
                        f(["resolve", [r], e]);
                    }).catch((e) => {
                      (s.status = "rejected"),
                        (s.reason = e),
                        f(["reject", [r], e]);
                    });
                  else {
                    !h.has(s) && i(s) && (g = p(s));
                    let e = !d.has(g) && h.get(g);
                    e && v(r, e);
                  }
                  return Reflect.set(t, r, g, a), f(["set", [r], s, u]), !0;
                },
              },
              A = t(I, N);
            n.set(r, A);
            let _ = [I, w, a, C];
            return (
              h.set(A, _),
              Reflect.ownKeys(r).forEach((e) => {
                let t = Object.getOwnPropertyDescriptor(r, e);
                "value" in t &&
                  ((A[e] = r[e]), delete t.value, delete t.writable),
                  Object.defineProperty(I, e, t);
              }),
              A
            );
          }
        ) => [p, h, d, e, t, i, r, s, a, n, u])();
      function p(e = {}) {
        return u(e);
      }
      function g(e, t, i) {
        let r,
          s = h.get(e);
        s || console.warn("Please use proxy object");
        let a = [],
          n = s[3],
          o = !1,
          c = n((e) => {
            if ((a.push(e), i)) return void t(a.splice(0));
            r ||
              (r = Promise.resolve().then(() => {
                (r = void 0), o && t(a.splice(0));
              }));
          });
        return (
          (o = !0),
          () => {
            (o = !1), c();
          }
        );
      }
      function f(e, t) {
        let i = h.get(e);
        i || console.warn("Please use proxy object");
        let [r, s, a] = i;
        return a(r, s(), t);
      }
      function m(e) {
        return d.add(e), e;
      }
    },
    44659: (e, t, i) => {
      "use strict";
      function r(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function s(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function a(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        r(e.outputLen), r(e.blockLen);
      }
      function n(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function o(e, t) {
        s(e);
        let i = t.outputLen;
        if (e.length < i)
          throw Error(
            "digestInto() expects output buffer of length at least " + i
          );
      }
      i.d(t, {
        CC: () => n,
        DO: () => s,
        Fe: () => r,
        Ht: () => o,
        sd: () => a,
      });
    },
    45312: (e, t, i) => {
      "use strict";
      i.d(t, { Vl: () => s });
      var r = i(49509);
      void 0 !== r && void 0 !== r.env && r.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL,
        void 0 !== r && void 0 !== r.env && r.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL,
        void 0 !== r &&
          void 0 !== r.env &&
          r.env.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION;
      let s = {
        SAFE_RPC_METHODS: [
          "eth_accounts",
          "eth_blockNumber",
          "eth_call",
          "eth_chainId",
          "eth_estimateGas",
          "eth_feeHistory",
          "eth_gasPrice",
          "eth_getAccount",
          "eth_getBalance",
          "eth_getBlockByHash",
          "eth_getBlockByNumber",
          "eth_getBlockReceipts",
          "eth_getBlockTransactionCountByHash",
          "eth_getBlockTransactionCountByNumber",
          "eth_getCode",
          "eth_getFilterChanges",
          "eth_getFilterLogs",
          "eth_getLogs",
          "eth_getProof",
          "eth_getStorageAt",
          "eth_getTransactionByBlockHashAndIndex",
          "eth_getTransactionByBlockNumberAndIndex",
          "eth_getTransactionByHash",
          "eth_getTransactionCount",
          "eth_getTransactionReceipt",
          "eth_getUncleCountByBlockHash",
          "eth_getUncleCountByBlockNumber",
          "eth_maxPriorityFeePerGas",
          "eth_newBlockFilter",
          "eth_newFilter",
          "eth_newPendingTransactionFilter",
          "eth_sendRawTransaction",
          "eth_syncing",
          "eth_uninstallFilter",
          "wallet_getCapabilities",
          "wallet_getCallsStatus",
          "eth_getUserOperationReceipt",
          "eth_estimateUserOperationGas",
          "eth_getUserOperationByHash",
          "eth_supportedEntryPoints",
          "wallet_getAssets",
        ],
        NOT_SAFE_RPC_METHODS: [
          "personal_sign",
          "eth_signTypedData_v4",
          "eth_sendTransaction",
          "solana_signMessage",
          "solana_signTransaction",
          "solana_signAllTransactions",
          "solana_signAndSendTransaction",
          "wallet_sendCalls",
          "wallet_grantPermissions",
          "wallet_revokePermissions",
          "eth_sendUserOperation",
        ],
        GET_CHAIN_ID: "eth_chainId",
        RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
        RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
        ACCOUNT_TYPES: { EOA: "eoa", SMART_ACCOUNT: "smartAccount" },
      };
    },
    54166: (e, t, i) => {
      "use strict";
      function r(e) {
        return function (t) {
          return "function" == typeof t
            ? (customElements.get(e) || customElements.define(e, t), t)
            : (function (e, t) {
                let { kind: i, elements: r } = t;
                return {
                  kind: i,
                  elements: r,
                  finisher(t) {
                    customElements.get(e) || customElements.define(e, t);
                  },
                };
              })(e, t);
        };
      }
      i.d(t, { E: () => r });
    },
    54252: (e, t, i) => {
      "use strict";
      i.d(t, { a: () => w });
      var r = i(43708),
        s = i(70799),
        a = i(60500),
        n = i(22492),
        o = i(63430),
        c = i(5582),
        l = i(92555),
        h = i(65819),
        d = i(90906),
        u = i(96641),
        p = i(19628),
        g = i(7478);
      let f = {
          eip155: void 0,
          solana: void 0,
          polkadot: void 0,
          bip122: void 0,
          cosmos: void 0,
        },
        m = (0, r.BX)({
          allConnectors: [],
          connectors: [],
          activeConnector: void 0,
          filterByNamespace: void 0,
          activeConnectorIds: { ...f },
          filterByNamespaceMap: {
            eip155: !0,
            solana: !0,
            polkadot: !0,
            bip122: !0,
            cosmos: !0,
          },
        }),
        w = (0, l.X)({
          state: m,
          subscribe: (e) =>
            (0, r.B1)(m, () => {
              e(m);
            }),
          subscribeKey: (e, t) => (0, s.u$)(m, e, t),
          initialize(e) {
            e.forEach((e) => {
              let t = c.i.getConnectedConnectorId(e);
              t && w.setConnectorId(t, e);
            });
          },
          setActiveConnector(e) {
            e && (m.activeConnector = (0, r.KR)(e));
          },
          setConnectors(e) {
            e.filter(
              (e) =>
                !m.allConnectors.some(
                  (t) =>
                    t.id === e.id &&
                    w.getConnectorName(t.name) === w.getConnectorName(e.name) &&
                    t.chain === e.chain
                )
            ).forEach((e) => {
              "MULTI_CHAIN" !== e.type && m.allConnectors.push((0, r.KR)(e));
            });
            let t = w.getEnabledNamespaces(),
              i = w.getEnabledConnectors(t);
            m.connectors = w.mergeMultiChainConnectors(i);
          },
          filterByNamespaces(e) {
            Object.keys(m.filterByNamespaceMap).forEach((e) => {
              m.filterByNamespaceMap[e] = !1;
            }),
              e.forEach((e) => {
                m.filterByNamespaceMap[e] = !0;
              }),
              w.updateConnectorsForEnabledNamespaces();
          },
          filterByNamespace(e, t) {
            (m.filterByNamespaceMap[e] = t),
              w.updateConnectorsForEnabledNamespaces();
          },
          updateConnectorsForEnabledNamespaces() {
            let e = w.getEnabledNamespaces(),
              t = w.getEnabledConnectors(e),
              i = w.areAllNamespacesEnabled();
            (m.connectors = w.mergeMultiChainConnectors(t)),
              i ? h.N.clearFilterByNamespaces() : h.N.filterByNamespaces(e);
          },
          getEnabledNamespaces: () =>
            Object.entries(m.filterByNamespaceMap)
              .filter(([e, t]) => t)
              .map(([e]) => e),
          getEnabledConnectors: (e) =>
            m.allConnectors.filter((t) => e.includes(t.chain)),
          areAllNamespacesEnabled: () =>
            Object.values(m.filterByNamespaceMap).every((e) => e),
          mergeMultiChainConnectors(e) {
            let t = w.generateConnectorMapByName(e),
              i = [];
            return (
              t.forEach((e) => {
                let t = e[0],
                  r = t?.id === a.o.CONNECTOR_ID.AUTH;
                e.length > 1 && t
                  ? i.push({
                      name: t.name,
                      imageUrl: t.imageUrl,
                      imageId: t.imageId,
                      connectors: [...e],
                      type: r ? "AUTH" : "MULTI_CHAIN",
                      chain: "eip155",
                      id: t?.id || "",
                    })
                  : t && i.push(t);
              }),
              i
            );
          },
          generateConnectorMapByName(e) {
            let t = new Map();
            return (
              e.forEach((e) => {
                let { name: i } = e,
                  r = w.getConnectorName(i);
                if (!r) return;
                let s = t.get(r) || [];
                s.find((t) => t.chain === e.chain) || s.push(e), t.set(r, s);
              }),
              t
            );
          },
          getConnectorName: (e) => (e && { "Trust Wallet": "Trust" }[e]) || e,
          getUniqueConnectorsByName(e) {
            let t = [];
            return (
              e.forEach((e) => {
                t.find((t) => t.chain === e.chain) || t.push(e);
              }),
              t
            );
          },
          addConnector(e) {
            if (e.id === a.o.CONNECTOR_ID.AUTH) {
              let t = (0, r.P9)(u.H.state),
                i = g.W.getSnapshot().themeMode,
                s = g.W.getSnapshot().themeVariables;
              e?.provider?.syncDappData?.({
                metadata: t.metadata,
                sdkVersion: t.sdkVersion,
                projectId: t.projectId,
                sdkType: t.sdkType,
              }),
                e?.provider?.syncTheme({
                  themeMode: i,
                  themeVariables: s,
                  w3mThemeVariables: (0, n.o)(s, i),
                }),
                w.setConnectors([e]);
            } else w.setConnectors([e]);
          },
          getAuthConnector(e) {
            let t = e || d.W.state.activeChain,
              i = m.connectors.find((e) => e.id === a.o.CONNECTOR_ID.AUTH);
            if (i)
              return i?.connectors?.length
                ? i.connectors.find((e) => e.chain === t)
                : i;
          },
          getAnnouncedConnectorRdns: () =>
            m.connectors
              .filter((e) => "ANNOUNCED" === e.type)
              .map((e) => e.info?.rdns),
          getConnectorById: (e) => m.allConnectors.find((t) => t.id === e),
          getConnector: (e, t) =>
            m.allConnectors
              .filter((e) => e.chain === d.W.state.activeChain)
              .find((i) => i.explorerId === e || i.info?.rdns === t),
          syncIfAuthConnector(e) {
            if ("ID_AUTH" !== e.id) return;
            let t = (0, r.P9)(u.H.state),
              i = g.W.getSnapshot().themeMode,
              s = g.W.getSnapshot().themeVariables;
            e?.provider?.syncDappData?.({
              metadata: t.metadata,
              sdkVersion: t.sdkVersion,
              sdkType: t.sdkType,
              projectId: t.projectId,
            }),
              e.provider.syncTheme({
                themeMode: i,
                themeVariables: s,
                w3mThemeVariables: (0, n.o)(s, i),
              });
          },
          getConnectorsByNamespace(e) {
            let t = m.allConnectors.filter((t) => t.chain === e);
            return w.mergeMultiChainConnectors(t);
          },
          selectWalletConnector(e) {
            let t = w.getConnector(e.id, e.rdns),
              i = d.W.state.activeChain;
            o.W.handleMobileDeeplinkRedirect(t?.explorerId || e.id, i),
              t
                ? p.I.push("ConnectingExternal", { connector: t })
                : p.I.push("ConnectingWalletConnect", { wallet: e });
          },
          getConnectors: (e) =>
            e
              ? w.getConnectorsByNamespace(e)
              : w.mergeMultiChainConnectors(m.allConnectors),
          setFilterByNamespace(e) {
            (m.filterByNamespace = e),
              (m.connectors = w.getConnectors(e)),
              h.N.setFilterByNamespace(e);
          },
          setConnectorId(e, t) {
            e &&
              ((m.activeConnectorIds = { ...m.activeConnectorIds, [t]: e }),
              c.i.setConnectedConnectorId(t, e));
          },
          removeConnectorId(e) {
            (m.activeConnectorIds = { ...m.activeConnectorIds, [e]: void 0 }),
              c.i.deleteConnectedConnectorId(e);
          },
          getConnectorId(e) {
            if (e) return m.activeConnectorIds[e];
          },
          isConnected: (e) =>
            e
              ? !!m.activeConnectorIds[e]
              : Object.values(m.activeConnectorIds).some((e) => !!e),
          resetConnectorIds() {
            m.activeConnectorIds = { ...f };
          },
        });
    },
    55458: (e, t, i) => {
      "use strict";
      i.d(t, { IP: () => n, T8: () => s, Ud: () => a, Ws: () => r });
      let r = {
        WALLET_ID: "@appkit/wallet_id",
        WALLET_NAME: "@appkit/wallet_name",
        SOLANA_WALLET: "@appkit/solana_wallet",
        SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
        ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
        CONNECTED_SOCIAL: "@appkit/connected_social",
        CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
        RECENT_WALLETS: "@appkit/recent_wallets",
        DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
        ACTIVE_NAMESPACE: "@appkit/active_namespace",
        CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
        CONNECTION_STATUS: "@appkit/connection_status",
        SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
        SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
        TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
        NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
        PORTFOLIO_CACHE: "@appkit/portfolio_cache",
        ENS_CACHE: "@appkit/ens_cache",
        IDENTITY_CACHE: "@appkit/identity_cache",
        PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types",
        CONNECTIONS: "@appkit/connections",
      };
      function s(e) {
        if (!e) throw Error("Namespace is required for CONNECTED_CONNECTOR_ID");
        return `@appkit/${e}:connected_connector_id`;
      }
      let a = {
        setItem(e, t) {
          n() && void 0 !== t && localStorage.setItem(e, t);
        },
        getItem(e) {
          if (n()) return localStorage.getItem(e) || void 0;
        },
        removeItem(e) {
          n() && localStorage.removeItem(e);
        },
        clear() {
          n() && localStorage.clear();
        },
      };
      function n() {
        return (
          "undefined" != typeof window && "undefined" != typeof localStorage
        );
      }
    },
    59970: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => r });
      let r = {
        getSpacingStyles: (e, t) =>
          Array.isArray(e)
            ? e[t]
              ? `var(--wui-spacing-${e[t]})`
              : void 0
            : "string" == typeof e
            ? `var(--wui-spacing-${e})`
            : void 0,
        getFormattedDate: (e) =>
          new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
          }).format(e),
        getHostName(e) {
          try {
            return new URL(e).hostname;
          } catch (e) {
            return "";
          }
        },
        getTruncateString: ({
          string: e,
          charsStart: t,
          charsEnd: i,
          truncate: r,
        }) =>
          e.length <= t + i
            ? e
            : "end" === r
            ? `${e.substring(0, t)}...`
            : "start" === r
            ? `...${e.substring(e.length - i)}`
            : `${e.substring(0, Math.floor(t))}...${e.substring(
                e.length - Math.floor(i)
              )}`,
        generateAvatarColors(e) {
          let t = e
              .toLowerCase()
              .replace(/^0x/iu, "")
              .replace(/[^a-f0-9]/gu, "")
              .substring(0, 6)
              .padEnd(6, "0"),
            i = this.hexToRgb(t),
            r = getComputedStyle(document.documentElement).getPropertyValue(
              "--w3m-border-radius-master"
            ),
            s = 100 - 3 * Number(r?.replace("px", "")),
            a = `${s}% ${s}% at 65% 40%`,
            n = [];
          for (let e = 0; e < 5; e += 1) {
            let t = this.tintColor(i, 0.15 * e);
            n.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`);
          }
          return `
    --local-color-1: ${n[0]};
    --local-color-2: ${n[1]};
    --local-color-3: ${n[2]};
    --local-color-4: ${n[3]};
    --local-color-5: ${n[4]};
    --local-radial-circle: ${a}
   `;
        },
        hexToRgb(e) {
          let t = parseInt(e, 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        },
        tintColor(e, t) {
          let [i, r, s] = e;
          return [
            Math.round(i + (255 - i) * t),
            Math.round(r + (255 - r) * t),
            Math.round(s + (255 - s) * t),
          ];
        },
        isNumber: (e) => /^[0-9]+$/u.test(e),
        getColorTheme: (e) =>
          e
            ? e
            : "undefined" != typeof window && window.matchMedia
            ? window.matchMedia("(prefers-color-scheme: dark)")?.matches
              ? "dark"
              : "light"
            : "dark",
        splitBalance(e) {
          let t = e.split(".");
          return 2 === t.length ? [t[0], t[1]] : ["0", "00"];
        },
        roundNumber: (e, t, i) =>
          e.toString().length >= t ? Number(e).toFixed(i) : e,
        formatNumberToLocalString: (e, t = 2) =>
          void 0 === e
            ? "0.00"
            : "number" == typeof e
            ? e.toLocaleString("en-US", {
                maximumFractionDigits: t,
                minimumFractionDigits: t,
              })
            : parseFloat(e).toLocaleString("en-US", {
                maximumFractionDigits: t,
                minimumFractionDigits: t,
              }),
      };
    },
    60500: (e, t, i) => {
      "use strict";
      i.d(t, { o: () => s });
      var r = i(49509);
      let s = {
        WC_NAME_SUFFIX: ".reown.id",
        WC_NAME_SUFFIX_LEGACY: ".wcn.id",
        BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
        PULSE_API_URL: "https://pulse.walletconnect.org",
        W3M_API_URL: "https://api.web3modal.org",
        CONNECTOR_ID: {
          WALLET_CONNECT: "walletConnect",
          INJECTED: "injected",
          WALLET_STANDARD: "announced",
          COINBASE: "coinbaseWallet",
          COINBASE_SDK: "coinbaseWalletSDK",
          SAFE: "safe",
          LEDGER: "ledger",
          OKX: "okx",
          EIP6963: "eip6963",
          AUTH: "ID_AUTH",
        },
        CONNECTOR_NAMES: { AUTH: "Auth" },
        AUTH_CONNECTOR_SUPPORTED_CHAINS: ["eip155", "solana"],
        LIMITS: { PENDING_TRANSACTIONS: 99 },
        CHAIN: {
          EVM: "eip155",
          SOLANA: "solana",
          POLKADOT: "polkadot",
          BITCOIN: "bip122",
        },
        CHAIN_NAME_MAP: {
          eip155: "EVM Networks",
          solana: "Solana",
          polkadot: "Polkadot",
          bip122: "Bitcoin",
          cosmos: "Cosmos",
        },
        ADAPTER_TYPES: {
          BITCOIN: "bitcoin",
          SOLANA: "solana",
          WAGMI: "wagmi",
          ETHERS: "ethers",
          ETHERS5: "ethers5",
        },
        USDT_CONTRACT_ADDRESSES: [
          "0xdac17f958d2ee523a2206206994597c13d831ec7",
          "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
          "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
          "0x919C1c267BC06a7039e03fcc2eF738525769109c",
          "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
          "0x55d398326f99059fF775485246999027B3197955",
          "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
        ],
        HTTP_STATUS_CODES: { SERVICE_UNAVAILABLE: 503, FORBIDDEN: 403 },
        UNSUPPORTED_NETWORK_NAME: "Unknown Network",
        SECURE_SITE_SDK_ORIGIN:
          (void 0 !== r && void 0 !== r.env
            ? r.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN
            : void 0) || "https://secure.walletconnect.org",
      };
    },
    61553: (e, t, i) => {
      "use strict";
      i.d(t, {
        Vw: () => p,
        Fc: () => l,
        Id: () => u,
        O8: () => n,
        qv: () => c,
        po: () => f,
        Ow: () => o,
        ZJ: () => d,
        DH: () => a,
        ld: () => g,
      });
      let r =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      var s = i(44659);
      function a(e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }
      function n(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function o(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let c = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function l(e) {
        for (let i = 0; i < e.length; i++) {
          var t;
          e[i] =
            (((t = e[i]) << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      (e, t) => t.toString(16).padStart(2, "0");
      let h = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function d(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          (0, s.DO)(e),
          e
        );
      }
      function u(...e) {
        let t = 0;
        for (let i = 0; i < e.length; i++) {
          let r = e[i];
          (0, s.DO)(r), (t += r.length);
        }
        let i = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let s = e[t];
          i.set(s, r), (r += s.length);
        }
        return i;
      }
      class p {
        clone() {
          return this._cloneInto();
        }
      }
      function g(e) {
        let t = (t) => e().update(d(t)).digest(),
          i = e();
        return (
          (t.outputLen = i.outputLen),
          (t.blockLen = i.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function f(e = 32) {
        if (r && "function" == typeof r.getRandomValues)
          return r.getRandomValues(new Uint8Array(e));
        if (r && "function" == typeof r.randomBytes) return r.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    63430: (e, t, i) => {
      "use strict";
      i.d(t, { O: () => s, W: () => a });
      var r = i(60500);
      let s = {
          PHANTOM: {
            id: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
            url: "https://phantom.app",
          },
          SOLFLARE: {
            id: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
            url: "https://solflare.com",
          },
          COINBASE: {
            id: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
            url: "https://go.cb-w.com",
          },
        },
        a = {
          handleMobileDeeplinkRedirect(e, t) {
            let i = window.location.href,
              a = encodeURIComponent(i);
            if (e === s.PHANTOM.id && !("phantom" in window)) {
              let e = i.startsWith("https") ? "https" : "http",
                t = i.split("/")[2],
                r = encodeURIComponent(`${e}://${t}`);
              window.location.href = `${s.PHANTOM.url}/ul/browse/${a}?ref=${r}`;
            }
            e !== s.SOLFLARE.id ||
              "solflare" in window ||
              (window.location.href = `${s.SOLFLARE.url}/ul/v1/browse/${a}?ref=${a}`),
              t !== r.o.CHAIN.SOLANA ||
                e !== s.COINBASE.id ||
                "coinbaseSolana" in window ||
                (window.location.href = `${s.COINBASE.url}/dapp?cb_url=${a}`);
          },
        };
    },
    65819: (e, t, i) => {
      "use strict";
      i.d(t, { N: () => y });
      var r = i(43708),
        s = i(70799),
        a = i(34735),
        n = i(35558),
        o = i(43359),
        c = i(63430),
        l = i(5582),
        h = i(74623),
        d = i(90906),
        u = i(54252),
        p = i(32836),
        g = i(96641);
      let f = n.w.getApiUrl(),
        m = new o.Z({ baseUrl: f, clientId: null }),
        w = (0, r.BX)({
          promises: {},
          page: 1,
          count: 0,
          featured: [],
          allFeatured: [],
          recommended: [],
          allRecommended: [],
          wallets: [],
          filteredWallets: [],
          search: [],
          isAnalyticsEnabled: !1,
          excludedWallets: [],
          isFetchingRecommendedWallets: !1,
        }),
        y = {
          state: w,
          subscribeKey: (e, t) => (0, s.u$)(w, e, t),
          _getSdkProperties() {
            let { projectId: e, sdkType: t, sdkVersion: i } = g.H.state;
            return {
              projectId: e,
              st: t || "appkit",
              sv: i || "html-wagmi-4.2.2",
            };
          },
          _filterOutExtensions: (e) =>
            g.H.state.isUniversalProvider
              ? e.filter(
                  (e) => !!(e.mobile_link || e.desktop_link || e.webapp_link)
                )
              : e,
          async _fetchWalletImage(e) {
            let t = `${m.baseUrl}/getWalletImage/${e}`,
              i = await m.getBlob({ path: t, params: y._getSdkProperties() });
            h.j.setWalletImage(e, URL.createObjectURL(i));
          },
          async _fetchNetworkImage(e) {
            let t = `${m.baseUrl}/public/getAssetImage/${e}`,
              i = await m.getBlob({ path: t, params: y._getSdkProperties() });
            h.j.setNetworkImage(e, URL.createObjectURL(i));
          },
          async _fetchConnectorImage(e) {
            let t = `${m.baseUrl}/public/getAssetImage/${e}`,
              i = await m.getBlob({ path: t, params: y._getSdkProperties() });
            h.j.setConnectorImage(e, URL.createObjectURL(i));
          },
          async _fetchCurrencyImage(e) {
            let t = `${m.baseUrl}/public/getCurrencyImage/${e}`,
              i = await m.getBlob({ path: t, params: y._getSdkProperties() });
            h.j.setCurrencyImage(e, URL.createObjectURL(i));
          },
          async _fetchTokenImage(e) {
            let t = `${m.baseUrl}/public/getTokenImage/${e}`,
              i = await m.getBlob({ path: t, params: y._getSdkProperties() });
            h.j.setTokenImage(e, URL.createObjectURL(i));
          },
          _filterWalletsByPlatform: (e) =>
            n.w.isMobile()
              ? e?.filter(
                  (e) =>
                    !!e.mobile_link ||
                    e.id === c.O.COINBASE.id ||
                    ("solana" === d.W.state.activeChain &&
                      (e.id === c.O.SOLFLARE.id || e.id === c.O.PHANTOM.id))
                )
              : e,
          fetchProjectConfig: async () =>
            (
              await m.get({
                path: "/appkit/v1/config",
                params: y._getSdkProperties(),
              })
            ).features,
          async fetchAllowedOrigins() {
            try {
              let { allowedOrigins: e } = await m.get({
                path: "/projects/v1/origins",
                params: y._getSdkProperties(),
              });
              return e;
            } catch (e) {
              return [];
            }
          },
          async fetchNetworkImages() {
            let e = d.W.getAllRequestedCaipNetworks(),
              t = e
                ?.map(({ assets: e }) => e?.imageId)
                .filter(Boolean)
                .filter((e) => !a.$.getNetworkImageById(e));
            t &&
              (await Promise.allSettled(t.map((e) => y._fetchNetworkImage(e))));
          },
          async fetchConnectorImages() {
            let { connectors: e } = u.a.state,
              t = e.map(({ imageId: e }) => e).filter(Boolean);
            await Promise.allSettled(t.map((e) => y._fetchConnectorImage(e)));
          },
          async fetchCurrencyImages(e = []) {
            await Promise.allSettled(e.map((e) => y._fetchCurrencyImage(e)));
          },
          async fetchTokenImages(e = []) {
            await Promise.allSettled(e.map((e) => y._fetchTokenImage(e)));
          },
          async fetchWallets(e) {
            let t = e.exclude ?? [];
            y._getSdkProperties().sv.startsWith("html-core-") &&
              t.push(...Object.values(c.O).map((e) => e.id));
            let i = await m.get({
              path: "/getWallets",
              params: {
                ...y._getSdkProperties(),
                ...e,
                page: String(e.page),
                entries: String(e.entries),
                include: e.include?.join(","),
                exclude: t.join(","),
              },
            });
            return {
              data: y._filterWalletsByPlatform(i?.data) || [],
              count: i?.count,
            };
          },
          async fetchFeaturedWallets() {
            let { featuredWalletIds: e } = g.H.state;
            if (e?.length) {
              let t = {
                  ...y._getSdkProperties(),
                  page: 1,
                  entries: e?.length ?? 4,
                  include: e,
                },
                { data: i } = await y.fetchWallets(t),
                r = [...i].sort((t, i) => e.indexOf(t.id) - e.indexOf(i.id)),
                s = r.map((e) => e.image_id).filter(Boolean);
              await Promise.allSettled(s.map((e) => y._fetchWalletImage(e))),
                (w.featured = r),
                (w.allFeatured = r);
            }
          },
          async fetchRecommendedWallets() {
            try {
              w.isFetchingRecommendedWallets = !0;
              let {
                  includeWalletIds: e,
                  excludeWalletIds: t,
                  featuredWalletIds: i,
                } = g.H.state,
                r = [...(t ?? []), ...(i ?? [])].filter(Boolean),
                s = d.W.getRequestedCaipNetworkIds().join(","),
                { data: a, count: n } = await y.fetchWallets({
                  page: 1,
                  entries: 4,
                  include: e,
                  exclude: r,
                  chains: s,
                }),
                o = l.i.getRecentWallets(),
                c = a.map((e) => e.image_id).filter(Boolean),
                h = o.map((e) => e.image_id).filter(Boolean);
              await Promise.allSettled(
                [...c, ...h].map((e) => y._fetchWalletImage(e))
              ),
                (w.recommended = a),
                (w.allRecommended = a),
                (w.count = n ?? 0);
            } catch {
            } finally {
              w.isFetchingRecommendedWallets = !1;
            }
          },
          async fetchWalletsByPage({ page: e }) {
            let {
                includeWalletIds: t,
                excludeWalletIds: i,
                featuredWalletIds: r,
              } = g.H.state,
              s = d.W.getRequestedCaipNetworkIds().join(","),
              a = [
                ...w.recommended.map(({ id: e }) => e),
                ...(i ?? []),
                ...(r ?? []),
              ].filter(Boolean),
              { data: o, count: c } = await y.fetchWallets({
                page: e,
                entries: 40,
                include: t,
                exclude: a,
                chains: s,
              }),
              l = o
                .slice(0, 20)
                .map((e) => e.image_id)
                .filter(Boolean);
            await Promise.allSettled(l.map((e) => y._fetchWalletImage(e))),
              (w.wallets = n.w
                .uniqueBy([...w.wallets, ...y._filterOutExtensions(o)], "id")
                .filter((e) => e.chains?.some((e) => s.includes(e)))),
              (w.count = c > w.count ? c : w.count),
              (w.page = e);
          },
          async initializeExcludedWallets({ ids: e }) {
            let t = { page: 1, entries: e.length, include: e },
              { data: i } = await y.fetchWallets(t);
            i &&
              i.forEach((e) => {
                w.excludedWallets.push({ rdns: e.rdns, name: e.name });
              });
          },
          async searchWallet({ search: e, badge: t }) {
            let { includeWalletIds: i, excludeWalletIds: r } = g.H.state,
              s = d.W.getRequestedCaipNetworkIds().join(",");
            w.search = [];
            let a = {
                page: 1,
                entries: 100,
                search: e?.trim(),
                badge_type: t,
                include: i,
                exclude: r,
                chains: s,
              },
              { data: o } = await y.fetchWallets(a);
            p.E.sendEvent({
              type: "track",
              event: "SEARCH_WALLET",
              properties: { badge: t ?? "", search: e ?? "" },
            });
            let c = o.map((e) => e.image_id).filter(Boolean);
            await Promise.allSettled([
              ...c.map((e) => y._fetchWalletImage(e)),
              n.w.wait(300),
            ]),
              (w.search = y._filterOutExtensions(o));
          },
          initPromise(e, t) {
            let i = w.promises[e];
            return i || (w.promises[e] = t());
          },
          prefetch: ({
            fetchConnectorImages: e = !0,
            fetchFeaturedWallets: t = !0,
            fetchRecommendedWallets: i = !0,
            fetchNetworkImages: r = !0,
          } = {}) =>
            Promise.allSettled(
              [
                e && y.initPromise("connectorImages", y.fetchConnectorImages),
                t && y.initPromise("featuredWallets", y.fetchFeaturedWallets),
                i &&
                  y.initPromise(
                    "recommendedWallets",
                    y.fetchRecommendedWallets
                  ),
                r && y.initPromise("networkImages", y.fetchNetworkImages),
              ].filter(Boolean)
            ),
          prefetchAnalyticsConfig() {
            g.H.state.features?.analytics && y.fetchAnalyticsConfig();
          },
          async fetchAnalyticsConfig() {
            try {
              let { isAnalyticsEnabled: e } = await m.get({
                path: "/getAnalyticsConfig",
                params: y._getSdkProperties(),
              });
              g.H.setFeatures({ analytics: e });
            } catch (e) {
              g.H.setFeatures({ analytics: !1 });
            }
          },
          filterByNamespaces(e) {
            if (!e?.length) {
              (w.featured = w.allFeatured), (w.recommended = w.allRecommended);
              return;
            }
            let t = d.W.getRequestedCaipNetworkIds().join(",");
            (w.featured = w.allFeatured.filter((e) =>
              e.chains?.some((e) => t.includes(e))
            )),
              (w.recommended = w.allRecommended.filter((e) =>
                e.chains?.some((e) => t.includes(e))
              )),
              (w.filteredWallets = w.wallets.filter((e) =>
                e.chains?.some((e) => t.includes(e))
              ));
          },
          clearFilterByNamespaces() {
            w.filteredWallets = [];
          },
          setFilterByNamespace(e) {
            if (!e) {
              (w.featured = w.allFeatured), (w.recommended = w.allRecommended);
              return;
            }
            let t = d.W.getRequestedCaipNetworkIds().join(",");
            (w.featured = w.allFeatured.filter((e) =>
              e.chains?.some((e) => t.includes(e))
            )),
              (w.recommended = w.allRecommended.filter((e) =>
                e.chains?.some((e) => t.includes(e))
              )),
              (w.filteredWallets = w.wallets.filter((e) =>
                e.chains?.some((e) => t.includes(e))
              ));
          },
        };
    },
    70799: (e, t, i) => {
      "use strict";
      let r;
      i.d(t, { u$: () => a, zC: () => o });
      var s = i(43708);
      function a(e, t, i, r) {
        let a = e[t];
        return (0, s.B1)(
          e,
          () => {
            let r = e[t];
            Object.is(a, r) || i((a = r));
          },
          r
        );
      }
      Symbol();
      let n = (e) => "object" == typeof e && null !== e;
      function o(e) {
        let t = (0, s.BX)({
          data: Array.from(e || []),
          has(e) {
            return this.data.some((t) => t[0] === e);
          },
          set(e, t) {
            let i = this.data.find((t) => t[0] === e);
            return i ? (i[1] = t) : this.data.push([e, t]), this;
          },
          get(e) {
            var t;
            return null == (t = this.data.find((t) => t[0] === e))
              ? void 0
              : t[1];
          },
          delete(e) {
            let t = this.data.findIndex((t) => t[0] === e);
            return -1 !== t && (this.data.splice(t, 1), !0);
          },
          clear() {
            this.data.splice(0);
          },
          get size() {
            return this.data.length;
          },
          toJSON() {
            return new Map(this.data);
          },
          forEach(e) {
            this.data.forEach((t) => {
              e(t[1], t[0], this);
            });
          },
          keys() {
            return this.data.map((e) => e[0]).values();
          },
          values() {
            return this.data.map((e) => e[1]).values();
          },
          entries() {
            return new Map(this.data).entries();
          },
          get [Symbol.toStringTag]() {
            return "Map";
          },
          [Symbol.iterator]() {
            return this.entries();
          },
        });
        return (
          Object.defineProperties(t, {
            data: { enumerable: !1 },
            size: { enumerable: !1 },
            toJSON: { enumerable: !1 },
          }),
          Object.seal(t),
          t
        );
      }
    },
    74623: (e, t, i) => {
      "use strict";
      i.d(t, { j: () => o });
      var r = i(43708),
        s = i(70799),
        a = i(92555);
      let n = (0, r.BX)({
          walletImages: {},
          networkImages: {},
          chainImages: {},
          connectorImages: {},
          tokenImages: {},
          currencyImages: {},
        }),
        o = (0, a.X)({
          state: n,
          subscribeNetworkImages: (e) =>
            (0, r.B1)(n.networkImages, () => e(n.networkImages)),
          subscribeKey: (e, t) => (0, s.u$)(n, e, t),
          subscribe: (e) => (0, r.B1)(n, () => e(n)),
          setWalletImage(e, t) {
            n.walletImages[e] = t;
          },
          setNetworkImage(e, t) {
            n.networkImages[e] = t;
          },
          setChainImage(e, t) {
            n.chainImages[e] = t;
          },
          setConnectorImage(e, t) {
            n.connectorImages = { ...n.connectorImages, [e]: t };
          },
          setTokenImage(e, t) {
            n.tokenImages[e] = t;
          },
          setCurrencyImage(e, t) {
            n.currencyImages[e] = t;
          },
        });
    },
    76610: (e, t, i) => {
      "use strict";
      i.d(t, { Db: () => n, oU: () => o, tM: () => a });
      var r = i(49509);
      let s =
          (void 0 !== r && void 0 !== r.env
            ? r.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN
            : void 0) || "https://secure.walletconnect.org",
        a = [
          {
            label: "Coinbase",
            name: "coinbase",
            feeRange: "1-2%",
            url: "",
            supportedChains: ["eip155"],
          },
          {
            label: "Meld.io",
            name: "meld",
            feeRange: "1-2%",
            url: "https://meldcrypto.com",
            supportedChains: ["eip155", "solana"],
          },
        ],
        n = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU",
        o = {
          FOUR_MINUTES_MS: 24e4,
          TEN_SEC_MS: 1e4,
          FIVE_SEC_MS: 5e3,
          THREE_SEC_MS: 3e3,
          ONE_SEC_MS: 1e3,
          SECURE_SITE: s,
          SECURE_SITE_DASHBOARD: `${s}/dashboard`,
          SECURE_SITE_FAVICON: `${s}/images/favicon.png`,
          RESTRICTED_TIMEZONES: [
            "ASIA/SHANGHAI",
            "ASIA/URUMQI",
            "ASIA/CHONGQING",
            "ASIA/HARBIN",
            "ASIA/KASHGAR",
            "ASIA/MACAU",
            "ASIA/HONG_KONG",
            "ASIA/MACAO",
            "ASIA/BEIJING",
            "ASIA/HARBIN",
          ],
          WC_COINBASE_PAY_SDK_CHAINS: [
            "ethereum",
            "arbitrum",
            "polygon",
            "berachain",
            "avalanche-c-chain",
            "optimism",
            "celo",
            "base",
          ],
          WC_COINBASE_PAY_SDK_FALLBACK_CHAIN: "ethereum",
          WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP: {
            Ethereum: "ethereum",
            "Arbitrum One": "arbitrum",
            Polygon: "polygon",
            Berachain: "berachain",
            Avalanche: "avalanche-c-chain",
            "OP Mainnet": "optimism",
            Celo: "celo",
            Base: "base",
          },
          WC_COINBASE_ONRAMP_APP_ID: "bf18c88d-495a-463b-b249-0b9d3656cf5e",
          SWAP_SUGGESTED_TOKENS: [
            "ETH",
            "UNI",
            "1INCH",
            "AAVE",
            "SOL",
            "ADA",
            "AVAX",
            "DOT",
            "LINK",
            "NITRO",
            "GAIA",
            "MILK",
            "TRX",
            "NEAR",
            "GNO",
            "WBTC",
            "DAI",
            "WETH",
            "USDC",
            "USDT",
            "ARB",
            "BAL",
            "BICO",
            "CRV",
            "ENS",
            "MATIC",
            "OP",
          ],
          SWAP_POPULAR_TOKENS: [
            "ETH",
            "UNI",
            "1INCH",
            "AAVE",
            "SOL",
            "ADA",
            "AVAX",
            "DOT",
            "LINK",
            "NITRO",
            "GAIA",
            "MILK",
            "TRX",
            "NEAR",
            "GNO",
            "WBTC",
            "DAI",
            "WETH",
            "USDC",
            "USDT",
            "ARB",
            "BAL",
            "BICO",
            "CRV",
            "ENS",
            "MATIC",
            "OP",
            "METAL",
            "DAI",
            "CHAMP",
            "WOLF",
            "SALE",
            "BAL",
            "BUSD",
            "MUST",
            "BTCpx",
            "ROUTE",
            "HEX",
            "WELT",
            "amDAI",
            "VSQ",
            "VISION",
            "AURUM",
            "pSP",
            "SNX",
            "VC",
            "LINK",
            "CHP",
            "amUSDT",
            "SPHERE",
            "FOX",
            "GIDDY",
            "GFC",
            "OMEN",
            "OX_OLD",
            "DE",
            "WNT",
          ],
          BALANCE_SUPPORTED_CHAINS: ["eip155", "solana"],
          SWAP_SUPPORTED_NETWORKS: [
            "eip155:1",
            "eip155:42161",
            "eip155:10",
            "eip155:324",
            "eip155:8453",
            "eip155:56",
            "eip155:137",
            "eip155:100",
            "eip155:43114",
            "eip155:250",
            "eip155:8217",
            "eip155:1313161554",
          ],
          NAMES_SUPPORTED_CHAIN_NAMESPACES: ["eip155"],
          ONRAMP_SUPPORTED_CHAIN_NAMESPACES: ["eip155", "solana"],
          ACTIVITY_ENABLED_CHAIN_NAMESPACES: ["eip155"],
          NATIVE_TOKEN_ADDRESS: {
            eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            solana: "So11111111111111111111111111111111111111111",
            polkadot: "0x",
            bip122: "0x",
            cosmos: "0x",
          },
          CONVERT_SLIPPAGE_TOLERANCE: 1,
          CONNECT_LABELS: {
            MOBILE: "Open and continue in the wallet app",
            WEB: "Open and continue in the wallet app",
          },
          SEND_SUPPORTED_NAMESPACES: ["eip155", "solana"],
          DEFAULT_REMOTE_FEATURES: {
            swaps: ["1inch"],
            onramp: ["coinbase", "meld"],
            email: !0,
            socials: [
              "google",
              "x",
              "discord",
              "farcaster",
              "github",
              "apple",
              "facebook",
            ],
            activity: !0,
            reownBranding: !0,
          },
          DEFAULT_REMOTE_FEATURES_DISABLED: {
            email: !1,
            socials: !1,
            swaps: !1,
            onramp: !1,
            activity: !1,
            reownBranding: !1,
          },
          DEFAULT_FEATURES: {
            receive: !0,
            send: !0,
            emailShowWallets: !0,
            connectorTypeOrder: [
              "walletConnect",
              "recent",
              "injected",
              "featured",
              "custom",
              "external",
              "recommended",
            ],
            analytics: !0,
            allWallets: !0,
            legalCheckbox: !1,
            smartSessions: !1,
            collapseWallets: !1,
            walletFeaturesOrder: ["onramp", "swaps", "receive", "send"],
            connectMethodsOrder: void 0,
            pay: !1,
          },
          DEFAULT_SOCIALS: [
            "google",
            "x",
            "farcaster",
            "discord",
            "apple",
            "github",
            "facebook",
          ],
          DEFAULT_ACCOUNT_TYPES: {
            bip122: "payment",
            eip155: "smartAccount",
            polkadot: "eoa",
            solana: "eoa",
          },
          ADAPTER_TYPES: {
            UNIVERSAL: "universal",
            SOLANA: "solana",
            WAGMI: "wagmi",
            ETHERS: "ethers",
            ETHERS5: "ethers5",
            BITCOIN: "bitcoin",
          },
        };
    },
    77508: (e, t, i) => {
      "use strict";
      i.d(t, {
        JW: () => A,
        XX: () => H,
        c0: () => _,
        ge: () => B,
        qy: () => N,
        s6: () => S,
      });
      let r = globalThis,
        s = r.trustedTypes,
        a = s ? s.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
        n = "$lit$",
        o = `lit$${Math.random().toFixed(9).slice(2)}$`,
        c = "?" + o,
        l = `<${c}>`,
        h = document,
        d = () => h.createComment(""),
        u = (e) =>
          null === e || ("object" != typeof e && "function" != typeof e),
        p = Array.isArray,
        g = (e) => p(e) || "function" == typeof e?.[Symbol.iterator],
        f = "[ 	\n\f\r]",
        m = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        w = /-->/g,
        y = />/g,
        b = RegExp(
          `>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
          "g"
        ),
        v = /'/g,
        E = /"/g,
        C = /^(?:script|style|textarea|title)$/i,
        I =
          (e) =>
          (t, ...i) => ({ _$litType$: e, strings: t, values: i }),
        N = I(1),
        A = I(2),
        _ = (I(3), Symbol.for("lit-noChange")),
        S = Symbol.for("lit-nothing"),
        P = new WeakMap(),
        O = h.createTreeWalker(h, 129);
      function T(e, t) {
        if (!p(e) || !e.hasOwnProperty("raw"))
          throw Error("invalid template strings array");
        return void 0 !== a ? a.createHTML(t) : t;
      }
      let k = (e, t) => {
        let i = e.length - 1,
          r = [],
          s,
          a = 2 === t ? "<svg>" : 3 === t ? "<math>" : "",
          c = m;
        for (let t = 0; t < i; t++) {
          let i = e[t],
            h,
            d,
            u = -1,
            p = 0;
          for (
            ;
            p < i.length && ((c.lastIndex = p), null !== (d = c.exec(i)));

          )
            (p = c.lastIndex),
              c === m
                ? "!--" === d[1]
                  ? (c = w)
                  : void 0 !== d[1]
                  ? (c = y)
                  : void 0 !== d[2]
                  ? (C.test(d[2]) && (s = RegExp("</" + d[2], "g")), (c = b))
                  : void 0 !== d[3] && (c = b)
                : c === b
                ? ">" === d[0]
                  ? ((c = s ?? m), (u = -1))
                  : void 0 === d[1]
                  ? (u = -2)
                  : ((u = c.lastIndex - d[2].length),
                    (h = d[1]),
                    (c = void 0 === d[3] ? b : '"' === d[3] ? E : v))
                : c === E || c === v
                ? (c = b)
                : c === w || c === y
                ? (c = m)
                : ((c = b), (s = void 0));
          let g = c === b && e[t + 1].startsWith("/>") ? " " : "";
          a +=
            c === m
              ? i + l
              : u >= 0
              ? (r.push(h), i.slice(0, u) + n + i.slice(u) + o + g)
              : i + o + (-2 === u ? t : g);
        }
        return [
          T(
            e,
            a +
              (e[i] || "<?>") +
              (2 === t ? "</svg>" : 3 === t ? "</math>" : "")
          ),
          r,
        ];
      };
      class x {
        constructor({ strings: e, _$litType$: t }, i) {
          let r;
          this.parts = [];
          let a = 0,
            l = 0,
            h = e.length - 1,
            u = this.parts,
            [p, g] = k(e, t);
          if (
            ((this.el = x.createElement(p, i)),
            (O.currentNode = this.el.content),
            2 === t || 3 === t)
          ) {
            let e = this.el.content.firstChild;
            e.replaceWith(...e.childNodes);
          }
          for (; null !== (r = O.nextNode()) && u.length < h; ) {
            if (1 === r.nodeType) {
              if (r.hasAttributes())
                for (let e of r.getAttributeNames())
                  if (e.endsWith(n)) {
                    let t = g[l++],
                      i = r.getAttribute(e).split(o),
                      s = /([.?@])?(.*)/.exec(t);
                    u.push({
                      type: 1,
                      index: a,
                      name: s[2],
                      strings: i,
                      ctor:
                        "." === s[1]
                          ? M
                          : "?" === s[1]
                          ? L
                          : "@" === s[1]
                          ? j
                          : $,
                    }),
                      r.removeAttribute(e);
                  } else
                    e.startsWith(o) &&
                      (u.push({ type: 6, index: a }), r.removeAttribute(e));
              if (C.test(r.tagName)) {
                let e = r.textContent.split(o),
                  t = e.length - 1;
                if (t > 0) {
                  r.textContent = s ? s.emptyScript : "";
                  for (let i = 0; i < t; i++)
                    r.append(e[i], d()),
                      O.nextNode(),
                      u.push({ type: 2, index: ++a });
                  r.append(e[t], d());
                }
              }
            } else if (8 === r.nodeType)
              if (r.data === c) u.push({ type: 2, index: a });
              else {
                let e = -1;
                for (; -1 !== (e = r.data.indexOf(o, e + 1)); )
                  u.push({ type: 7, index: a }), (e += o.length - 1);
              }
            a++;
          }
        }
        static createElement(e, t) {
          let i = h.createElement("template");
          return (i.innerHTML = e), i;
        }
      }
      function R(e, t, i = e, r) {
        if (t === _) return t;
        let s = void 0 !== r ? i._$Co?.[r] : i._$Cl,
          a = u(t) ? void 0 : t._$litDirective$;
        return (
          s?.constructor !== a &&
            (s?._$AO?.(!1),
            void 0 === a ? (s = void 0) : (s = new a(e))._$AT(e, i, r),
            void 0 !== r ? ((i._$Co ??= [])[r] = s) : (i._$Cl = s)),
          void 0 !== s && (t = R(e, s._$AS(e, t.values), s, r)),
          t
        );
      }
      class U {
        constructor(e, t) {
          (this._$AV = []),
            (this._$AN = void 0),
            (this._$AD = e),
            (this._$AM = t);
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(e) {
          let {
              el: { content: t },
              parts: i,
            } = this._$AD,
            r = (e?.creationScope ?? h).importNode(t, !0);
          O.currentNode = r;
          let s = O.nextNode(),
            a = 0,
            n = 0,
            o = i[0];
          for (; void 0 !== o; ) {
            if (a === o.index) {
              let t;
              2 === o.type
                ? (t = new D(s, s.nextSibling, this, e))
                : 1 === o.type
                ? (t = new o.ctor(s, o.name, o.strings, this, e))
                : 6 === o.type && (t = new W(s, this, e)),
                this._$AV.push(t),
                (o = i[++n]);
            }
            a !== o?.index && ((s = O.nextNode()), a++);
          }
          return (O.currentNode = h), r;
        }
        p(e) {
          let t = 0;
          for (let i of this._$AV)
            void 0 !== i &&
              (void 0 !== i.strings
                ? (i._$AI(e, i, t), (t += i.strings.length - 2))
                : i._$AI(e[t])),
              t++;
        }
      }
      class D {
        get _$AU() {
          return this._$AM?._$AU ?? this._$Cv;
        }
        constructor(e, t, i, r) {
          (this.type = 2),
            (this._$AH = S),
            (this._$AN = void 0),
            (this._$AA = e),
            (this._$AB = t),
            (this._$AM = i),
            (this.options = r),
            (this._$Cv = r?.isConnected ?? !0);
        }
        get parentNode() {
          let e = this._$AA.parentNode,
            t = this._$AM;
          return void 0 !== t && 11 === e?.nodeType && (e = t.parentNode), e;
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(e, t = this) {
          u((e = R(this, e, t)))
            ? e === S || null == e || "" === e
              ? (this._$AH !== S && this._$AR(), (this._$AH = S))
              : e !== this._$AH && e !== _ && this._(e)
            : void 0 !== e._$litType$
            ? this.$(e)
            : void 0 !== e.nodeType
            ? this.T(e)
            : g(e)
            ? this.k(e)
            : this._(e);
        }
        O(e) {
          return this._$AA.parentNode.insertBefore(e, this._$AB);
        }
        T(e) {
          this._$AH !== e && (this._$AR(), (this._$AH = this.O(e)));
        }
        _(e) {
          this._$AH !== S && u(this._$AH)
            ? (this._$AA.nextSibling.data = e)
            : this.T(h.createTextNode(e)),
            (this._$AH = e);
        }
        $(e) {
          let { values: t, _$litType$: i } = e,
            r =
              "number" == typeof i
                ? this._$AC(e)
                : (void 0 === i.el &&
                    (i.el = x.createElement(T(i.h, i.h[0]), this.options)),
                  i);
          if (this._$AH?._$AD === r) this._$AH.p(t);
          else {
            let e = new U(r, this),
              i = e.u(this.options);
            e.p(t), this.T(i), (this._$AH = e);
          }
        }
        _$AC(e) {
          let t = P.get(e.strings);
          return void 0 === t && P.set(e.strings, (t = new x(e))), t;
        }
        k(e) {
          p(this._$AH) || ((this._$AH = []), this._$AR());
          let t = this._$AH,
            i,
            r = 0;
          for (let s of e)
            r === t.length
              ? t.push(
                  (i = new D(this.O(d()), this.O(d()), this, this.options))
                )
              : (i = t[r]),
              i._$AI(s),
              r++;
          r < t.length &&
            (this._$AR(i && i._$AB.nextSibling, r), (t.length = r));
        }
        _$AR(e = this._$AA.nextSibling, t) {
          for (this._$AP?.(!1, !0, t); e && e !== this._$AB; ) {
            let t = e.nextSibling;
            e.remove(), (e = t);
          }
        }
        setConnected(e) {
          void 0 === this._$AM && ((this._$Cv = e), this._$AP?.(e));
        }
      }
      class $ {
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        constructor(e, t, i, r, s) {
          (this.type = 1),
            (this._$AH = S),
            (this._$AN = void 0),
            (this.element = e),
            (this.name = t),
            (this._$AM = r),
            (this.options = s),
            i.length > 2 || "" !== i[0] || "" !== i[1]
              ? ((this._$AH = Array(i.length - 1).fill(new String())),
                (this.strings = i))
              : (this._$AH = S);
        }
        _$AI(e, t = this, i, r) {
          let s = this.strings,
            a = !1;
          if (void 0 === s)
            (a = !u((e = R(this, e, t, 0))) || (e !== this._$AH && e !== _)) &&
              (this._$AH = e);
          else {
            let r,
              n,
              o = e;
            for (e = s[0], r = 0; r < s.length - 1; r++)
              (n = R(this, o[i + r], t, r)) === _ && (n = this._$AH[r]),
                (a ||= !u(n) || n !== this._$AH[r]),
                n === S ? (e = S) : e !== S && (e += (n ?? "") + s[r + 1]),
                (this._$AH[r] = n);
          }
          a && !r && this.j(e);
        }
        j(e) {
          e === S
            ? this.element.removeAttribute(this.name)
            : this.element.setAttribute(this.name, e ?? "");
        }
      }
      class M extends $ {
        constructor() {
          super(...arguments), (this.type = 3);
        }
        j(e) {
          this.element[this.name] = e === S ? void 0 : e;
        }
      }
      class L extends $ {
        constructor() {
          super(...arguments), (this.type = 4);
        }
        j(e) {
          this.element.toggleAttribute(this.name, !!e && e !== S);
        }
      }
      class j extends $ {
        constructor(e, t, i, r, s) {
          super(e, t, i, r, s), (this.type = 5);
        }
        _$AI(e, t = this) {
          if ((e = R(this, e, t, 0) ?? S) === _) return;
          let i = this._$AH,
            r =
              (e === S && i !== S) ||
              e.capture !== i.capture ||
              e.once !== i.once ||
              e.passive !== i.passive,
            s = e !== S && (i === S || r);
          r && this.element.removeEventListener(this.name, this, i),
            s && this.element.addEventListener(this.name, this, e),
            (this._$AH = e);
        }
        handleEvent(e) {
          "function" == typeof this._$AH
            ? this._$AH.call(this.options?.host ?? this.element, e)
            : this._$AH.handleEvent(e);
        }
      }
      class W {
        constructor(e, t, i) {
          (this.element = e),
            (this.type = 6),
            (this._$AN = void 0),
            (this._$AM = t),
            (this.options = i);
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(e) {
          R(this, e);
        }
      }
      let B = {
          M: n,
          P: o,
          A: c,
          C: 1,
          L: k,
          R: U,
          D: g,
          V: R,
          I: D,
          H: $,
          N: L,
          U: j,
          B: M,
          F: W,
        },
        q = r.litHtmlPolyfillSupport;
      q?.(x, D), (r.litHtmlVersions ??= []).push("3.3.0");
      let H = (e, t, i) => {
        let r = i?.renderBefore ?? t,
          s = r._$litPart$;
        if (void 0 === s) {
          let e = i?.renderBefore ?? null;
          r._$litPart$ = s = new D(t.insertBefore(d(), e), e, void 0, i ?? {});
        }
        return s._$AI(e), s;
      };
    },
    79277: (e, t, i) => {
      "use strict";
      i.d(t, { h: () => c });
      var r = i(43708),
        s = i(70799),
        a = i(92555),
        n = i(96641);
      let o = (0, r.BX)({ message: "", variant: "info", open: !1 }),
        c = (0, a.X)({
          state: o,
          subscribeKey: (e, t) => (0, s.u$)(o, e, t),
          open(e, t) {
            let { debug: i } = n.H.state,
              { shortMessage: r, longMessage: s } = e;
            i && ((o.message = r), (o.variant = t), (o.open = !0)),
              s && console.error("function" == typeof s ? s() : s);
          },
          close() {
            (o.open = !1), (o.message = ""), (o.variant = "info");
          },
        });
    },
    81192: (e, t, i) => {
      "use strict";
      let r;
      i.d(t, { x: () => C });
      var s = i(43708),
        a = i(70799),
        n = i(35558),
        o = i(5582),
        c = i(92555),
        l = i(11076),
        h = i(90906),
        d = i(54252),
        u = i(32836),
        p = i(40166),
        g = i(19628),
        f = i(45312),
        m = i(11501),
        w = i(96641),
        y = i(5517);
      let b = (0, s.BX)({
          transactions: [],
          coinbaseTransactions: {},
          transactionsByYear: {},
          lastNetworkInView: void 0,
          loading: !1,
          empty: !1,
          next: void 0,
        }),
        v = (0, c.X)(
          {
            state: b,
            subscribe: (e) => (0, s.B1)(b, () => e(b)),
            setLastNetworkInView(e) {
              b.lastNetworkInView = e;
            },
            async fetchTransactions(e, t) {
              if (!e)
                throw Error(
                  "Transactions can't be fetched without an accountAddress"
                );
              b.loading = !0;
              try {
                let i = await m.T.fetchTransactions({
                    account: e,
                    cursor: b.next,
                    onramp: t,
                    cache: "coinbase" === t ? "no-cache" : void 0,
                    chainId: h.W.state.activeCaipNetwork?.caipNetworkId,
                  }),
                  r = v.filterSpamTransactions(i.data),
                  s = v.filterByConnectedChain(r),
                  a = [...b.transactions, ...s];
                (b.loading = !1),
                  "coinbase" === t
                    ? (b.coinbaseTransactions =
                        v.groupTransactionsByYearAndMonth(
                          b.coinbaseTransactions,
                          i.data
                        ))
                    : ((b.transactions = a),
                      (b.transactionsByYear = v.groupTransactionsByYearAndMonth(
                        b.transactionsByYear,
                        s
                      ))),
                  (b.empty = 0 === a.length),
                  (b.next = i.next ? i.next : void 0);
              } catch (i) {
                let t = h.W.state.activeChain;
                u.E.sendEvent({
                  type: "track",
                  event: "ERROR_FETCH_TRANSACTIONS",
                  properties: {
                    address: e,
                    projectId: w.H.state.projectId,
                    cursor: b.next,
                    isSmartAccount:
                      l.U.state.preferredAccountTypes?.[t] ===
                      f.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                  },
                }),
                  y.P.showError("Failed to fetch transactions"),
                  (b.loading = !1),
                  (b.empty = !0),
                  (b.next = void 0);
              }
            },
            groupTransactionsByYearAndMonth: (e = {}, t = []) => (
              t.forEach((t) => {
                let i = new Date(t.metadata.minedAt).getFullYear(),
                  r = new Date(t.metadata.minedAt).getMonth(),
                  s = e[i] ?? {},
                  a = (s[r] ?? []).filter((e) => e.id !== t.id);
                e[i] = {
                  ...s,
                  [r]: [...a, t].sort(
                    (e, t) =>
                      new Date(t.metadata.minedAt).getTime() -
                      new Date(e.metadata.minedAt).getTime()
                  ),
                };
              }),
              e
            ),
            filterSpamTransactions: (e) =>
              e.filter(
                (e) =>
                  !e.transfers.every((e) => e.nft_info?.flags.is_spam === !0)
              ),
            filterByConnectedChain(e) {
              let t = h.W.state.activeCaipNetwork?.caipNetworkId;
              return e.filter((e) => e.metadata.chain === t);
            },
            clearCursor() {
              b.next = void 0;
            },
            resetTransactions() {
              (b.transactions = []),
                (b.transactionsByYear = {}),
                (b.lastNetworkInView = void 0),
                (b.loading = !1),
                (b.empty = !1),
                (b.next = void 0);
            },
          },
          "API_ERROR"
        ),
        E = (0, s.BX)({
          connections: new Map(),
          wcError: !1,
          buffering: !1,
          status: "disconnected",
        }),
        C = (0, c.X)({
          state: E,
          subscribeKey: (e, t) => (0, a.u$)(E, e, t),
          _getClient: () => E._client,
          setClient(e) {
            E._client = (0, s.KR)(e);
          },
          async connectWalletConnect() {
            if (n.w.isTelegram() || (n.w.isSafari() && n.w.isIos())) {
              if (r) {
                await r, (r = void 0);
                return;
              }
              if (!n.w.isPairingExpired(E?.wcPairingExpiry)) {
                let e = E.wcUri;
                E.wcUri = e;
                return;
              }
              (r = C._getClient()
                ?.connectWalletConnect?.()
                .catch(() => void 0)),
                (C.state.status = "connecting"),
                await r,
                (r = void 0),
                (E.wcPairingExpiry = void 0),
                (C.state.status = "connected");
            } else await C._getClient()?.connectWalletConnect?.();
          },
          async connectExternal(e, t, i = !0) {
            await C._getClient()?.connectExternal?.(e),
              i && h.W.setActiveNamespace(t);
          },
          async reconnectExternal(e) {
            await C._getClient()?.reconnectExternal?.(e);
            let t = e.chain || h.W.state.activeChain;
            t && d.a.setConnectorId(e.id, t);
          },
          async setPreferredAccountType(e, t) {
            p.W.setLoading(!0, h.W.state.activeChain);
            let i = d.a.getAuthConnector();
            i &&
              (l.U.setPreferredAccountType(e, t),
              await i.provider.setPreferredAccount(e),
              o.i.setPreferredAccountTypes(
                l.U.state.preferredAccountTypes ?? { [t]: e }
              ),
              await C.reconnectExternal(i),
              p.W.setLoading(!1, h.W.state.activeChain),
              u.E.sendEvent({
                type: "track",
                event: "SET_PREFERRED_ACCOUNT_TYPE",
                properties: {
                  accountType: e,
                  network: h.W.state.activeCaipNetwork?.caipNetworkId || "",
                },
              }));
          },
          signMessage: async (e) => C._getClient()?.signMessage(e),
          parseUnits: (e, t) => C._getClient()?.parseUnits(e, t),
          formatUnits: (e, t) => C._getClient()?.formatUnits(e, t),
          sendTransaction: async (e) => C._getClient()?.sendTransaction(e),
          getCapabilities: async (e) => C._getClient()?.getCapabilities(e),
          grantPermissions: async (e) => C._getClient()?.grantPermissions(e),
          walletGetAssets: async (e) =>
            C._getClient()?.walletGetAssets(e) ?? {},
          estimateGas: async (e) => C._getClient()?.estimateGas(e),
          writeContract: async (e) => C._getClient()?.writeContract(e),
          getEnsAddress: async (e) => C._getClient()?.getEnsAddress(e),
          getEnsAvatar: async (e) => C._getClient()?.getEnsAvatar(e),
          checkInstalled: (e) => C._getClient()?.checkInstalled?.(e) || !1,
          resetWcConnection() {
            (E.wcUri = void 0),
              (E.wcPairingExpiry = void 0),
              (E.wcLinking = void 0),
              (E.recentWallet = void 0),
              (E.status = "disconnected"),
              v.resetTransactions(),
              o.i.deleteWalletConnectDeepLink();
          },
          resetUri() {
            (E.wcUri = void 0), (E.wcPairingExpiry = void 0), (r = void 0);
          },
          finalizeWcConnection() {
            let { wcLinking: e, recentWallet: t } = C.state;
            e && o.i.setWalletConnectDeepLink(e),
              t && o.i.setAppKitRecent(t),
              u.E.sendEvent({
                type: "track",
                event: "CONNECT_SUCCESS",
                properties: {
                  method: e ? "mobile" : "qrcode",
                  name: g.I.state.data?.wallet?.name || "Unknown",
                },
              });
          },
          setWcBasic(e) {
            E.wcBasic = e;
          },
          setUri(e) {
            (E.wcUri = e), (E.wcPairingExpiry = n.w.getPairingExpiry());
          },
          setWcLinking(e) {
            E.wcLinking = e;
          },
          setWcError(e) {
            (E.wcError = e), (E.buffering = !1);
          },
          setRecentWallet(e) {
            E.recentWallet = e;
          },
          setBuffering(e) {
            E.buffering = e;
          },
          setStatus(e) {
            E.status = e;
          },
          async disconnect(e) {
            try {
              await C._getClient()?.disconnect(e);
            } catch (e) {
              throw new c.A("Failed to disconnect", "INTERNAL_SDK_ERROR", e);
            }
          },
          setConnections(e, t) {
            E.connections.set(t, e);
          },
          switchAccount({ connection: e, address: t, namespace: i }) {
            if (d.a.state.activeConnectorIds[i] === e.connectorId) {
              let e = h.W.state.activeCaipNetwork;
              if (e) {
                let r = `${i}:${e.id}:${t}`;
                l.U.setCaipAddress(r, i);
              } else
                console.warn(`No current network found for namespace "${i}"`);
            } else {
              let t = d.a.getConnector(e.connectorId);
              t
                ? C.connectExternal(t, i)
                : console.warn(`No connector found for namespace "${i}"`);
            }
          },
        });
    },
    83562: (e, t, i) => {
      "use strict";
      i.d(t, { U: () => F }), i(19655), i(24630), i(77226), i(75086), i(40662);
      var r = i(44134).Buffer;
      function s(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : Object.prototype.toString.call(e);
      }
      let a = "[object String]",
        n = "[object Number]",
        o = "[object Boolean]",
        c = "[object Arguments]";
      function l(e, t, i, d = new Map(), u) {
        var p, g;
        let f = u?.(e, t, i, d);
        if (null != f) return f;
        if (null == (p = e) || ("object" != typeof p && "function" != typeof p))
          return e;
        if (d.has(e)) return d.get(e);
        if (Array.isArray(e)) {
          let t = Array(e.length);
          d.set(e, t);
          for (let r = 0; r < e.length; r++) t[r] = l(e[r], r, i, d, u);
          return (
            Object.hasOwn(e, "index") && (t.index = e.index),
            Object.hasOwn(e, "input") && (t.input = e.input),
            t
          );
        }
        if (e instanceof Date) return new Date(e.getTime());
        if (e instanceof RegExp) {
          let t = new RegExp(e.source, e.flags);
          return (t.lastIndex = e.lastIndex), t;
        }
        if (e instanceof Map) {
          let t = new Map();
          for (let [r, s] of (d.set(e, t), e)) t.set(r, l(s, r, i, d, u));
          return t;
        }
        if (e instanceof Set) {
          let t = new Set();
          for (let r of (d.set(e, t), e)) t.add(l(r, void 0, i, d, u));
          return t;
        }
        if ("u" > typeof r && r.isBuffer(e)) return e.subarray();
        if (ArrayBuffer.isView((g = e)) && !(g instanceof DataView)) {
          let t = new (Object.getPrototypeOf(e).constructor)(e.length);
          d.set(e, t);
          for (let r = 0; r < e.length; r++) t[r] = l(e[r], r, i, d, u);
          return t;
        }
        if (
          e instanceof ArrayBuffer ||
          ("u" > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)
        )
          return e.slice(0);
        if (e instanceof DataView) {
          let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
          return d.set(e, t), h(t, e, i, d, u), t;
        }
        if ("u" > typeof File && e instanceof File) {
          let t = new File([e], e.name, { type: e.type });
          return d.set(e, t), h(t, e, i, d, u), t;
        }
        if (e instanceof Blob) {
          let t = new Blob([e], { type: e.type });
          return d.set(e, t), h(t, e, i, d, u), t;
        }
        if (e instanceof Error) {
          let t = new e.constructor();
          return (
            d.set(e, t),
            (t.message = e.message),
            (t.name = e.name),
            (t.stack = e.stack),
            (t.cause = e.cause),
            h(t, e, i, d, u),
            t
          );
        }
        if (
          "object" == typeof e &&
          (function (e) {
            switch (s(e)) {
              case c:
              case "[object Array]":
              case "[object ArrayBuffer]":
              case "[object DataView]":
              case o:
              case "[object Date]":
              case "[object Float32Array]":
              case "[object Float64Array]":
              case "[object Int8Array]":
              case "[object Int16Array]":
              case "[object Int32Array]":
              case "[object Map]":
              case n:
              case "[object Object]":
              case "[object RegExp]":
              case "[object Set]":
              case a:
              case "[object Symbol]":
              case "[object Uint8Array]":
              case "[object Uint8ClampedArray]":
              case "[object Uint16Array]":
              case "[object Uint32Array]":
                return !0;
              default:
                return !1;
            }
          })(e)
        ) {
          let t = Object.create(Object.getPrototypeOf(e));
          return d.set(e, t), h(t, e, i, d, u), t;
        }
        return e;
      }
      function h(e, t, i = e, r, s) {
        var a;
        let n = [
          ...Object.keys(t),
          ...Object.getOwnPropertySymbols((a = t)).filter((e) =>
            Object.prototype.propertyIsEnumerable.call(a, e)
          ),
        ];
        for (let a = 0; a < n.length; a++) {
          let o = n[a],
            c = Object.getOwnPropertyDescriptor(e, o);
          (null == c || c.writable) && (e[o] = l(t[o], o, i, r, s));
        }
      }
      var d = Object.defineProperty,
        u = Object.defineProperties,
        p = Object.getOwnPropertyDescriptors,
        g = Object.getOwnPropertySymbols,
        f = Object.prototype.hasOwnProperty,
        m = Object.prototype.propertyIsEnumerable,
        w = (e, t, i) =>
          t in e
            ? d(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        y = (e, t) => {
          for (var i in t || (t = {})) f.call(t, i) && w(e, i, t[i]);
          if (g) for (var i of g(t)) m.call(t, i) && w(e, i, t[i]);
          return e;
        },
        b = (e, t) => u(e, p(t)),
        v = Object.defineProperty,
        E = Object.defineProperty,
        C =
          (Object.defineProperties,
          Object.getOwnPropertyDescriptors,
          Object.getOwnPropertySymbols,
          Object.prototype.hasOwnProperty,
          Object.prototype.propertyIsEnumerable,
          Object.defineProperty),
        I = Object.defineProperty,
        N = Object.defineProperty,
        A = Object.defineProperty,
        _ = Object.defineProperty,
        S = Object.defineProperty,
        P = Object.defineProperty,
        O = Object.defineProperty,
        T = Object.defineProperty,
        k = Object.defineProperty,
        x =
          (Object.defineProperties,
          Object.getOwnPropertyDescriptors,
          Object.getOwnPropertySymbols,
          Object.prototype.hasOwnProperty,
          Object.prototype.propertyIsEnumerable,
          i(60500)),
        R = i(45312),
        U = i(11076),
        D = i(90906),
        $ = i(81192),
        M = i(54252),
        L = i(32836),
        j = i(40166),
        W = i(96641),
        B = i(19628),
        q = i(5517),
        H = i(35558);
      let F = {
        getSIWX: () => W.H.state.siwx,
        async initializeIfEnabled() {
          let e = W.H.state.siwx,
            t = D.W.getActiveCaipAddress();
          if (!(e && t)) return;
          let [i, r, s] = t.split(":");
          if (D.W.checkIfSupportedNetwork(i))
            try {
              if ((await e.getSessions(`${i}:${r}`, s)).length) return;
              await j.W.open({ view: "SIWXSignMessage" });
            } catch (e) {
              console.error("SIWXUtil:initializeIfEnabled", e),
                L.E.sendEvent({
                  type: "track",
                  event: "SIWX_AUTH_ERROR",
                  properties: this.getSIWXEventProperties(),
                }),
                await $.x._getClient()?.disconnect().catch(console.error),
                B.I.reset("Connect"),
                q.P.showError(
                  "A problem occurred while trying initialize authentication"
                );
            }
        },
        async requestSignMessage() {
          let e = W.H.state.siwx,
            t = H.w.getPlainAddress(D.W.getActiveCaipAddress()),
            i = D.W.getActiveCaipNetwork(),
            r = $.x._getClient();
          if (!e) throw Error("SIWX is not enabled");
          if (!t) throw Error("No ActiveCaipAddress found");
          if (!i) throw Error("No ActiveCaipNetwork or client found");
          if (!r) throw Error("No ConnectionController client found");
          try {
            let s = await e.createMessage({
                chainId: i.caipNetworkId,
                accountAddress: t,
              }),
              a = s.toString();
            M.a.getConnectorId(i.chainNamespace) === x.o.CONNECTOR_ID.AUTH &&
              B.I.pushTransactionStack({});
            let n = await r.signMessage(a);
            await e.addSession({ data: s, message: a, signature: n }),
              j.W.close(),
              L.E.sendEvent({
                type: "track",
                event: "SIWX_AUTH_SUCCESS",
                properties: this.getSIWXEventProperties(),
              });
          } catch (t) {
            let e = this.getSIWXEventProperties();
            (j.W.state.open && "ApproveTransaction" !== B.I.state.view) ||
              (await j.W.open({ view: "SIWXSignMessage" })),
              e.isSmartAccount
                ? q.P.showError(
                    "This application might not support Smart Accounts"
                  )
                : q.P.showError("Signature declined"),
              L.E.sendEvent({
                type: "track",
                event: "SIWX_AUTH_ERROR",
                properties: e,
              }),
              console.error("SWIXUtil:requestSignMessage", t);
          }
        },
        async cancelSignMessage() {
          try {
            let e = this.getSIWX();
            e?.getRequired?.() ? await $.x.disconnect() : j.W.close(),
              B.I.reset("Connect"),
              L.E.sendEvent({
                event: "CLICK_CANCEL_SIWX",
                type: "track",
                properties: this.getSIWXEventProperties(),
              });
          } catch (e) {
            console.error("SIWXUtil:cancelSignMessage", e);
          }
        },
        async getSessions() {
          let e = W.H.state.siwx,
            t = H.w.getPlainAddress(D.W.getActiveCaipAddress()),
            i = D.W.getActiveCaipNetwork();
          return e && t && i ? e.getSessions(i.caipNetworkId, t) : [];
        },
        async isSIWXCloseDisabled() {
          let e = this.getSIWX();
          if (e) {
            let t = "ApproveTransaction" === B.I.state.view,
              i = "SIWXSignMessage" === B.I.state.view;
            if (t || i)
              return (
                e.getRequired?.() && 0 === (await this.getSessions()).length
              );
          }
          return !1;
        },
        async universalProviderAuthenticate({
          universalProvider: e,
          chains: t,
          methods: i,
        }) {
          let r = F.getSIWX(),
            s = new Set(t.map((e) => e.split(":")[0]));
          if (!r || 1 !== s.size || !s.has("eip155")) return !1;
          let a = await r.createMessage({
              chainId: D.W.getActiveCaipNetwork()?.caipNetworkId || "",
              accountAddress: "",
            }),
            n = await e.authenticate({
              nonce: a.nonce,
              domain: a.domain,
              uri: a.uri,
              exp: a.expirationTime,
              iat: a.issuedAt,
              nbf: a.notBefore,
              requestId: a.requestId,
              version: a.version,
              resources: a.resources,
              statement: a.statement,
              chainId: a.chainId,
              methods: i,
              chains: [a.chainId, ...t.filter((e) => e !== a.chainId)],
            });
          if (
            (q.P.showLoading("Authenticating...", { autoClose: !1 }),
            U.U.setConnectedWalletInfo(
              {
                ...n.session.peer.metadata,
                name: n.session.peer.metadata.name,
                icon: n.session.peer.metadata.icons?.[0],
                type: "WALLET_CONNECT",
              },
              Array.from(s)[0]
            ),
            n?.auths?.length)
          ) {
            let t = n.auths.map((t) => {
              let i = e.client.formatAuthMessage({
                request: t.p,
                iss: t.p.iss,
              });
              return {
                data: {
                  ...t.p,
                  accountAddress: t.p.iss.split(":").slice(-1).join(""),
                  chainId: t.p.iss.split(":").slice(2, 4).join(":"),
                  uri: t.p.aud,
                  version: t.p.version || a.version,
                  expirationTime: t.p.exp,
                  issuedAt: t.p.iat,
                  notBefore: t.p.nbf,
                },
                message: i,
                signature: t.s.s,
                cacao: t,
              };
            });
            try {
              await r.setSessions(t),
                L.E.sendEvent({
                  type: "track",
                  event: "SIWX_AUTH_SUCCESS",
                  properties: F.getSIWXEventProperties(),
                });
            } catch (t) {
              throw (
                (console.error(
                  "SIWX:universalProviderAuth - failed to set sessions",
                  t
                ),
                L.E.sendEvent({
                  type: "track",
                  event: "SIWX_AUTH_ERROR",
                  properties: F.getSIWXEventProperties(),
                }),
                await e.disconnect().catch(console.error),
                t)
              );
            } finally {
              q.P.hide();
            }
          }
          return !0;
        },
        getSIWXEventProperties() {
          let e = D.W.state.activeChain;
          return {
            network: D.W.state.activeCaipNetwork?.caipNetworkId || "",
            isSmartAccount:
              U.U.state.preferredAccountTypes?.[e] ===
              R.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
          };
        },
        async clearSessions() {
          let e = this.getSIWX();
          e && (await e.setSessions([]));
        },
      };
    },
    90906: (e, t, i) => {
      "use strict";
      i.d(t, { W: () => I });
      var r = i(43708),
        s = i(70799),
        a = i(26343),
        n = i(60500),
        o = i(76610),
        c = i(35558),
        l = i(5582),
        h = i(92555),
        d = i(11076),
        u = i(81192),
        p = i(54252),
        g = i(32836),
        f = i(40166),
        m = i(96641),
        w = i(36665),
        y = i(19628),
        b = i(10243);
      let v = {
          currentTab: 0,
          tokenBalance: [],
          smartAccountDeployed: !1,
          addressLabels: new Map(),
          allAccounts: [],
          user: void 0,
        },
        E = {
          caipNetwork: void 0,
          supportsAllNetworks: !0,
          smartAccountEnabledNetworks: [],
        },
        C = (0, r.BX)({
          chains: (0, s.zC)(),
          activeCaipAddress: void 0,
          activeChain: void 0,
          activeCaipNetwork: void 0,
          noAdapters: !1,
          universalAdapter: {
            networkControllerClient: void 0,
            connectionControllerClient: void 0,
          },
          isSwitchingNamespace: !1,
        }),
        I = (0, h.X)({
          state: C,
          subscribe: (e) =>
            (0, r.B1)(C, () => {
              e(C);
            }),
          subscribeKey: (e, t) => (0, s.u$)(C, e, t),
          subscribeChainProp(e, t, i) {
            let s;
            return (0, r.B1)(C.chains, () => {
              let r = i || C.activeChain;
              if (r) {
                let i = C.chains.get(r)?.[e];
                s !== i && ((s = i), t(i));
              }
            });
          },
          initialize(e, t, i) {
            let { chainId: s, namespace: a } = l.i.getActiveNetworkProps(),
              n = t?.find((e) => e.id.toString() === s?.toString()),
              o = e.find((e) => e?.namespace === a) || e?.[0],
              c = e.map((e) => e.namespace).filter((e) => void 0 !== e),
              h = new Set(
                m.H.state.enableEmbedded
                  ? [...c]
                  : [...(t?.map((e) => e.chainNamespace) ?? [])]
              );
            (e?.length !== 0 && o) || (C.noAdapters = !0),
              !C.noAdapters &&
                ((C.activeChain = o?.namespace),
                (C.activeCaipNetwork = n),
                I.setChainNetworkData(o?.namespace, { caipNetwork: n }),
                C.activeChain && w.z.set({ activeChain: o?.namespace })),
              h.forEach((e) => {
                let s = t?.filter((t) => t.chainNamespace === e);
                I.state.chains.set(e, {
                  namespace: e,
                  networkState: (0, r.BX)({ ...E, caipNetwork: s?.[0] }),
                  accountState: (0, r.BX)(v),
                  caipNetworks: s ?? [],
                  ...i,
                }),
                  I.setRequestedCaipNetworks(s ?? [], e);
              });
          },
          removeAdapter(e) {
            if (C.activeChain === e) {
              let t = Array.from(C.chains.entries()).find(([t]) => t !== e);
              if (t) {
                let e = t[1]?.caipNetworks?.[0];
                e && I.setActiveCaipNetwork(e);
              }
            }
            C.chains.delete(e);
          },
          addAdapter(
            e,
            { networkControllerClient: t, connectionControllerClient: i },
            r
          ) {
            C.chains.set(e.namespace, {
              namespace: e.namespace,
              networkState: { ...E, caipNetwork: r[0] },
              accountState: v,
              caipNetworks: r,
              connectionControllerClient: i,
              networkControllerClient: t,
            }),
              I.setRequestedCaipNetworks(
                r?.filter((t) => t.chainNamespace === e.namespace) ?? [],
                e.namespace
              );
          },
          addNetwork(e) {
            let t = C.chains.get(e.chainNamespace);
            if (t) {
              let i = [...(t.caipNetworks || [])];
              t.caipNetworks?.find((t) => t.id === e.id) || i.push(e),
                C.chains.set(e.chainNamespace, { ...t, caipNetworks: i }),
                I.setRequestedCaipNetworks(i, e.chainNamespace),
                p.a.filterByNamespace(e.chainNamespace, !0);
            }
          },
          removeNetwork(e, t) {
            let i = C.chains.get(e);
            if (i) {
              let r = C.activeCaipNetwork?.id === t,
                s = [...(i.caipNetworks?.filter((e) => e.id !== t) || [])];
              r &&
                i?.caipNetworks?.[0] &&
                I.setActiveCaipNetwork(i.caipNetworks[0]),
                C.chains.set(e, { ...i, caipNetworks: s }),
                I.setRequestedCaipNetworks(s || [], e),
                0 === s.length && p.a.filterByNamespace(e, !1);
            }
          },
          setAdapterNetworkState(e, t) {
            let i = C.chains.get(e);
            i &&
              ((i.networkState = { ...(i.networkState || E), ...t }),
              C.chains.set(e, i));
          },
          setChainAccountData(e, t, i = !0) {
            if (!e)
              throw Error("Chain is required to update chain account data");
            let r = C.chains.get(e);
            if (r) {
              let i = { ...(r.accountState || v), ...t };
              C.chains.set(e, { ...r, accountState: i }),
                (1 === C.chains.size || C.activeChain === e) &&
                  (t.caipAddress && (C.activeCaipAddress = t.caipAddress),
                  d.U.replaceState(i));
            }
          },
          setChainNetworkData(e, t) {
            if (!e) return;
            let i = C.chains.get(e);
            if (i) {
              let r = { ...(i.networkState || E), ...t };
              C.chains.set(e, { ...i, networkState: r });
            }
          },
          setAccountProp(e, t, i, r = !0) {
            I.setChainAccountData(i, { [e]: t }, r),
              "status" === e &&
                "disconnected" === t &&
                i &&
                p.a.removeConnectorId(i);
          },
          setActiveNamespace(e) {
            C.activeChain = e;
            let t = e ? C.chains.get(e) : void 0,
              i = t?.networkState?.caipNetwork;
            i?.id &&
              e &&
              ((C.activeCaipAddress = t?.accountState?.caipAddress),
              (C.activeCaipNetwork = i),
              I.setChainNetworkData(e, { caipNetwork: i }),
              l.i.setActiveCaipNetworkId(i?.caipNetworkId),
              w.z.set({ activeChain: e, selectedNetworkId: i?.caipNetworkId }));
          },
          setActiveCaipNetwork(e) {
            if (!e) return;
            C.activeChain !== e.chainNamespace && I.setIsSwitchingNamespace(!0);
            let t = C.chains.get(e.chainNamespace);
            (C.activeChain = e.chainNamespace),
              (C.activeCaipNetwork = e),
              I.setChainNetworkData(e.chainNamespace, { caipNetwork: e }),
              t?.accountState?.address
                ? (C.activeCaipAddress = `${e.chainNamespace}:${e.id}:${t?.accountState?.address}`)
                : (C.activeCaipAddress = void 0),
              I.setAccountProp(
                "caipAddress",
                C.activeCaipAddress,
                e.chainNamespace
              ),
              t && d.U.replaceState(t.accountState),
              b.R.resetSend(),
              w.z.set({
                activeChain: C.activeChain,
                selectedNetworkId: C.activeCaipNetwork?.caipNetworkId,
              }),
              l.i.setActiveCaipNetworkId(e.caipNetworkId),
              I.checkIfSupportedNetwork(e.chainNamespace) ||
                !m.H.state.enableNetworkSwitch ||
                m.H.state.allowUnsupportedChain ||
                u.x.state.wcBasic ||
                I.showUnsupportedChainUI();
          },
          addCaipNetwork(e) {
            if (!e) return;
            let t = C.chains.get(e.chainNamespace);
            t && t?.caipNetworks?.push(e);
          },
          async switchActiveNamespace(e) {
            if (!e) return;
            let t = e !== I.state.activeChain,
              i = I.getNetworkData(e)?.caipNetwork,
              r = I.getCaipNetworkByNamespace(e, i?.id);
            t && r && (await I.switchActiveNetwork(r));
          },
          async switchActiveNetwork(e) {
            let t = I.state.chains.get(I.state.activeChain),
              i = !t?.caipNetworks?.some(
                (e) => e.id === C.activeCaipNetwork?.id
              ),
              r = I.getNetworkControllerClient(e.chainNamespace);
            if (r) {
              try {
                await r.switchCaipNetwork(e), i && f.W.close();
              } catch (e) {
                y.I.goBack();
              }
              g.E.sendEvent({
                type: "track",
                event: "SWITCH_NETWORK",
                properties: { network: e.caipNetworkId },
              });
            }
          },
          getNetworkControllerClient(e) {
            let t = e || C.activeChain,
              i = C.chains.get(t);
            if (!i) throw Error("Chain adapter not found");
            if (!i.networkControllerClient)
              throw Error("NetworkController client not set");
            return i.networkControllerClient;
          },
          getConnectionControllerClient(e) {
            let t = e || C.activeChain;
            if (!t)
              throw Error(
                "Chain is required to get connection controller client"
              );
            let i = C.chains.get(t);
            if (!i?.connectionControllerClient)
              throw Error("ConnectionController client not set");
            return i.connectionControllerClient;
          },
          getAccountProp(e, t) {
            let i = C.activeChain;
            if ((t && (i = t), !i)) return;
            let r = C.chains.get(i)?.accountState;
            if (r) return r[e];
          },
          getNetworkProp(e, t) {
            let i = C.chains.get(t)?.networkState;
            if (i) return i[e];
          },
          getRequestedCaipNetworks(e) {
            let t = C.chains.get(e),
              {
                approvedCaipNetworkIds: i = [],
                requestedCaipNetworks: r = [],
              } = t?.networkState || {};
            return c.w.sortRequestedNetworks(i, r);
          },
          getAllRequestedCaipNetworks() {
            let e = [];
            return (
              C.chains.forEach((t) => {
                let i = I.getRequestedCaipNetworks(t.namespace);
                e.push(...i);
              }),
              e
            );
          },
          setRequestedCaipNetworks(e, t) {
            I.setAdapterNetworkState(t, { requestedCaipNetworks: e });
            let i = Array.from(
              new Set(
                I.getAllRequestedCaipNetworks().map((e) => e.chainNamespace)
              )
            );
            p.a.filterByNamespaces(i);
          },
          getAllApprovedCaipNetworkIds() {
            let e = [];
            return (
              C.chains.forEach((t) => {
                let i = I.getApprovedCaipNetworkIds(t.namespace);
                e.push(...i);
              }),
              e
            );
          },
          getActiveCaipNetwork: () => C.activeCaipNetwork,
          getActiveCaipAddress: () => C.activeCaipAddress,
          getApprovedCaipNetworkIds(e) {
            let t = C.chains.get(e);
            return t?.networkState?.approvedCaipNetworkIds || [];
          },
          async setApprovedCaipNetworksData(e) {
            let t = I.getNetworkControllerClient(),
              i = await t?.getApprovedCaipNetworksData();
            I.setAdapterNetworkState(e, {
              approvedCaipNetworkIds: i?.approvedCaipNetworkIds,
              supportsAllNetworks: i?.supportsAllNetworks,
            });
          },
          checkIfSupportedNetwork(e, t) {
            let i = t || C.activeCaipNetwork,
              r = I.getRequestedCaipNetworks(e);
            return !r.length || r?.some((e) => e.id === i?.id);
          },
          checkIfSupportedChainId(e) {
            if (!C.activeChain) return !0;
            let t = I.getRequestedCaipNetworks(C.activeChain);
            return t?.some((t) => t.id === e);
          },
          setSmartAccountEnabledNetworks(e, t) {
            I.setAdapterNetworkState(t, { smartAccountEnabledNetworks: e });
          },
          checkIfSmartAccountEnabled() {
            let e = a.L.caipNetworkIdToNumber(
                C.activeCaipNetwork?.caipNetworkId
              ),
              t = C.activeChain;
            if (!t || !e) return !1;
            let i = I.getNetworkProp("smartAccountEnabledNetworks", t);
            return !!i?.includes(Number(e));
          },
          getActiveNetworkTokenAddress() {
            let e = C.activeCaipNetwork?.chainNamespace || "eip155",
              t = C.activeCaipNetwork?.id || 1,
              i = o.oU.NATIVE_TOKEN_ADDRESS[e];
            return `${e}:${t}:${i}`;
          },
          showUnsupportedChainUI() {
            f.W.open({ view: "UnsupportedChain" });
          },
          checkIfNamesSupported() {
            let e = C.activeCaipNetwork;
            return !!(
              e?.chainNamespace &&
              o.oU.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace)
            );
          },
          resetNetwork(e) {
            I.setAdapterNetworkState(e, {
              approvedCaipNetworkIds: void 0,
              supportsAllNetworks: !0,
              smartAccountEnabledNetworks: [],
            });
          },
          resetAccount(e) {
            if (!e) throw Error("Chain is required to set account prop");
            (C.activeCaipAddress = void 0),
              I.setChainAccountData(e, {
                smartAccountDeployed: !1,
                currentTab: 0,
                caipAddress: void 0,
                address: void 0,
                balance: void 0,
                balanceSymbol: void 0,
                profileName: void 0,
                profileImage: void 0,
                addressExplorerUrl: void 0,
                tokenBalance: [],
                connectedWalletInfo: void 0,
                preferredAccountTypes: void 0,
                socialProvider: void 0,
                socialWindow: void 0,
                farcasterUrl: void 0,
                allAccounts: [],
                user: void 0,
                status: "disconnected",
              }),
              p.a.removeConnectorId(e);
          },
          setIsSwitchingNamespace(e) {
            C.isSwitchingNamespace = e;
          },
          getFirstCaipNetworkSupportsAuthConnector() {
            let e,
              t = [];
            if (
              (C.chains.forEach((e) => {
                n.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
                  (t) => t === e.namespace
                ) &&
                  e.namespace &&
                  t.push(e.namespace);
              }),
              t.length > 0)
            ) {
              let e = t[0];
              return e ? C.chains.get(e)?.caipNetworks?.[0] : void 0;
            }
          },
          getAccountData: (e) =>
            e ? I.state.chains.get(e)?.accountState : d.U.state,
          getNetworkData(e) {
            let t = e || C.activeChain;
            if (t) return I.state.chains.get(t)?.networkState;
          },
          getCaipNetworkByNamespace(e, t) {
            if (!e) return;
            let i = I.state.chains.get(e),
              r = i?.caipNetworks?.find((e) => e.id === t);
            return r || i?.networkState?.caipNetwork || i?.caipNetworks?.[0];
          },
          getRequestedCaipNetworkIds() {
            let e = p.a.state.filterByNamespace;
            return (e ? [C.chains.get(e)] : Array.from(C.chains.values()))
              .flatMap((e) => e?.caipNetworks || [])
              .map((e) => e.caipNetworkId);
          },
          getCaipNetworks: (e) =>
            e ? I.getRequestedCaipNetworks(e) : I.getAllRequestedCaipNetworks(),
        });
    },
    92555: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => u, X: () => g });
      var r = i(43708),
        s = i(70799),
        a = i(35558),
        n = i(43359),
        o = i(96641);
      let c = Object.freeze({ enabled: !0, events: [] }),
        l = new n.Z({ baseUrl: a.w.getAnalyticsUrl(), clientId: null }),
        h = (0, r.BX)({ ...c }),
        d = {
          state: h,
          subscribeKey: (e, t) => (0, s.u$)(h, e, t),
          async sendError(e, t) {
            if (!h.enabled) return;
            let i = Date.now();
            if (
              h.events.filter(
                (e) =>
                  i - new Date(e.properties.timestamp || "").getTime() < 6e4
              ).length >= 5
            )
              return;
            let r = {
              type: "error",
              event: t,
              properties: {
                errorType: e.name,
                errorMessage: e.message,
                stackTrace: e.stack,
                timestamp: new Date().toISOString(),
              },
            };
            h.events.push(r);
            try {
              if ("undefined" == typeof window) return;
              let { projectId: i, sdkType: r, sdkVersion: s } = o.H.state;
              await l.post({
                path: "/e",
                params: { projectId: i, st: r, sv: s || "html-wagmi-4.2.2" },
                body: {
                  eventId: a.w.getUUID(),
                  url: window.location.href,
                  domain: window.location.hostname,
                  timestamp: new Date().toISOString(),
                  props: {
                    type: "error",
                    event: t,
                    errorType: e.name,
                    errorMessage: e.message,
                    stackTrace: e.stack,
                  },
                },
              });
            } catch {}
          },
          enable() {
            h.enabled = !0;
          },
          disable() {
            h.enabled = !1;
          },
          clearEvents() {
            h.events = [];
          },
        };
      class u extends Error {
        constructor(e, t, i) {
          super(e),
            (this.name = "AppKitError"),
            (this.category = t),
            (this.originalError = i),
            Object.setPrototypeOf(this, u.prototype);
          let r = !1;
          if (i instanceof Error && "string" == typeof i.stack && i.stack) {
            let e = i.stack,
              t = e.indexOf("\n");
            if (t > -1) {
              let i = e.substring(t + 1);
              (this.stack = `${this.name}: ${this.message}
${i}`),
                (r = !0);
            }
          }
          !r &&
            (Error.captureStackTrace
              ? Error.captureStackTrace(this, u)
              : this.stack || (this.stack = `${this.name}: ${this.message}`));
        }
      }
      function p(e, t) {
        let i =
          e instanceof u
            ? e
            : new u(e instanceof Error ? e.message : String(e), t, e);
        throw (d.sendError(i, i.category), i);
      }
      function g(e, t = "INTERNAL_SDK_ERROR") {
        let i = {};
        return (
          Object.keys(e).forEach((r) => {
            let s = e[r];
            if ("function" == typeof s) {
              let e = s;
              (e =
                "AsyncFunction" === s.constructor.name
                  ? async (...e) => {
                      try {
                        return await s(...e);
                      } catch (e) {
                        return p(e, t);
                      }
                    }
                  : (...e) => {
                      try {
                        return s(...e);
                      } catch (e) {
                        return p(e, t);
                      }
                    }),
                (i[r] = e);
            } else i[r] = s;
          }),
          i
        );
      }
    },
    95842: (e, t, i) => {
      "use strict";
      i.d(t, { g: () => p });
      var r = i(60500),
        s = i(96641),
        a = i(5582),
        n = i(65819),
        o = i(35558),
        c = i(81192),
        l = i(90906),
        h = i(54252),
        d = i(23140),
        u = i(98782);
      let p = {
        getConnectorsByType(e, t, i) {
          let { customWallets: r } = s.H.state,
            n = a.i.getRecentWallets(),
            o = u.A.filterOutDuplicateWallets(t),
            c = u.A.filterOutDuplicateWallets(i),
            l = e.filter((e) => "MULTI_CHAIN" === e.type),
            h = e.filter((e) => "ANNOUNCED" === e.type),
            d = e.filter((e) => "INJECTED" === e.type);
          return {
            custom: r,
            recent: n,
            external: e.filter((e) => "EXTERNAL" === e.type),
            multiChain: l,
            announced: h,
            injected: d,
            recommended: o,
            featured: c,
          };
        },
        showConnector(e) {
          let t = e.info?.rdns,
            i =
              !!t &&
              n.N.state.excludedWallets.some((e) => !!e.rdns && e.rdns === t),
            r =
              !!e.name &&
              n.N.state.excludedWallets.some((t) =>
                d.y.isLowerCaseMatch(t.name, e.name)
              );
          if (
            "INJECTED" === e.type &&
            (("Browser Wallet" === e.name &&
              (!o.w.isMobile() ||
                (o.w.isMobile() && !t && !c.x.checkInstalled()))) ||
              i ||
              r)
          )
            return !1;
          return (
            ("ANNOUNCED" !== e.type && "EXTERNAL" !== e.type) || (!i && !r)
          );
        },
        getIsConnectedWithWC: () =>
          Array.from(l.W.state.chains.values()).some(
            (e) =>
              h.a.getConnectorId(e.namespace) ===
              r.o.CONNECTOR_ID.WALLET_CONNECT
          ),
        getConnectorTypeOrder({
          recommended: e,
          featured: t,
          custom: i,
          recent: r,
          announced: a,
          injected: n,
          multiChain: o,
          external: c,
          overriddenConnectors: l = s.H.state.features?.connectorTypeOrder ??
            [],
        }) {
          let h = p.getIsConnectedWithWC(),
            d = [
              {
                type: "walletConnect",
                isEnabled: s.H.state.enableWalletConnect && !h,
              },
              { type: "recent", isEnabled: r.length > 0 },
              { type: "injected", isEnabled: [...n, ...a, ...o].length > 0 },
              { type: "featured", isEnabled: t.length > 0 },
              { type: "custom", isEnabled: i && i.length > 0 },
              { type: "external", isEnabled: c.length > 0 },
              { type: "recommended", isEnabled: e.length > 0 },
            ].filter((e) => e.isEnabled),
            u = new Set(d.map((e) => e.type)),
            g = l
              .filter((e) => u.has(e))
              .map((e) => ({ type: e, isEnabled: !0 })),
            f = d.filter(({ type: e }) => !g.some(({ type: t }) => t === e));
          return Array.from(new Set([...g, ...f].map(({ type: e }) => e)));
        },
      };
    },
    96641: (e, t, i) => {
      "use strict";
      i.d(t, { H: () => l });
      var r = i(43708),
        s = i(70799),
        a = i(76610),
        n = i(35558);
      let o = {
          getFeatureValue(e, t) {
            let i = t?.[e];
            return void 0 === i ? a.oU.DEFAULT_FEATURES[e] : i;
          },
          filterSocialsByPlatform(e) {
            if (!e || !e.length) return e;
            if (n.w.isTelegram()) {
              if (n.w.isIos()) return e.filter((e) => "google" !== e);
              if (n.w.isMac()) return e.filter((e) => "x" !== e);
              if (n.w.isAndroid())
                return e.filter((e) => !["facebook", "x"].includes(e));
            }
            return e;
          },
        },
        c = (0, r.BX)({
          features: a.oU.DEFAULT_FEATURES,
          projectId: "",
          sdkType: "appkit",
          sdkVersion: "html-wagmi-undefined",
          defaultAccountTypes: a.oU.DEFAULT_ACCOUNT_TYPES,
          enableNetworkSwitch: !0,
          experimental_preferUniversalLinks: !1,
          remoteFeatures: {},
        }),
        l = {
          state: c,
          subscribeKey: (e, t) => (0, s.u$)(c, e, t),
          setOptions(e) {
            Object.assign(c, e);
          },
          setRemoteFeatures(e) {
            if (!e) return;
            let t = { ...c.remoteFeatures, ...e };
            (c.remoteFeatures = t),
              c.remoteFeatures?.socials &&
                (c.remoteFeatures.socials = o.filterSocialsByPlatform(
                  c.remoteFeatures.socials
                ));
          },
          setFeatures(e) {
            if (!e) return;
            c.features || (c.features = a.oU.DEFAULT_FEATURES);
            let t = { ...c.features, ...e };
            c.features = t;
          },
          setProjectId(e) {
            c.projectId = e;
          },
          setCustomRpcUrls(e) {
            c.customRpcUrls = e;
          },
          setAllWallets(e) {
            c.allWallets = e;
          },
          setIncludeWalletIds(e) {
            c.includeWalletIds = e;
          },
          setExcludeWalletIds(e) {
            c.excludeWalletIds = e;
          },
          setFeaturedWalletIds(e) {
            c.featuredWalletIds = e;
          },
          setTokens(e) {
            c.tokens = e;
          },
          setTermsConditionsUrl(e) {
            c.termsConditionsUrl = e;
          },
          setPrivacyPolicyUrl(e) {
            c.privacyPolicyUrl = e;
          },
          setCustomWallets(e) {
            c.customWallets = e;
          },
          setIsSiweEnabled(e) {
            c.isSiweEnabled = e;
          },
          setIsUniversalProvider(e) {
            c.isUniversalProvider = e;
          },
          setSdkVersion(e) {
            c.sdkVersion = e;
          },
          setMetadata(e) {
            c.metadata = e;
          },
          setDisableAppend(e) {
            c.disableAppend = e;
          },
          setEIP6963Enabled(e) {
            c.enableEIP6963 = e;
          },
          setDebug(e) {
            c.debug = e;
          },
          setEnableWalletConnect(e) {
            c.enableWalletConnect = e;
          },
          setEnableWalletGuide(e) {
            c.enableWalletGuide = e;
          },
          setEnableAuthLogger(e) {
            c.enableAuthLogger = e;
          },
          setEnableWallets(e) {
            c.enableWallets = e;
          },
          setPreferUniversalLinks(e) {
            c.experimental_preferUniversalLinks = e;
          },
          setHasMultipleAddresses(e) {
            c.hasMultipleAddresses = e;
          },
          setSIWX(e) {
            c.siwx = e;
          },
          setConnectMethodsOrder(e) {
            c.features = { ...c.features, connectMethodsOrder: e };
          },
          setWalletFeaturesOrder(e) {
            c.features = { ...c.features, walletFeaturesOrder: e };
          },
          setSocialsOrder(e) {
            c.remoteFeatures = { ...c.remoteFeatures, socials: e };
          },
          setCollapseWallets(e) {
            c.features = { ...c.features, collapseWallets: e };
          },
          setEnableEmbedded(e) {
            c.enableEmbedded = e;
          },
          setAllowUnsupportedChain(e) {
            c.allowUnsupportedChain = e;
          },
          setManualWCControl(e) {
            c.manualWCControl = e;
          },
          setEnableNetworkSwitch(e) {
            c.enableNetworkSwitch = e;
          },
          setDefaultAccountTypes(e = {}) {
            Object.entries(e).forEach(([e, t]) => {
              t && (c.defaultAccountTypes[e] = t);
            });
          },
          setUniversalProviderConfigOverride(e) {
            c.universalProviderConfigOverride = e;
          },
          getUniversalProviderConfigOverride: () =>
            c.universalProviderConfigOverride,
          getSnapshot: () => (0, r.P9)(c),
        };
    },
    97265: (e, t, i) => {
      "use strict";
      let r, s, a;
      i.d(t, {
        JX: () => l,
        RF: () => c,
        W5: () => u,
        ck: () => g,
        ds: () => h,
        fD: () => p,
      });
      var n = i(28312),
        o = i(22492);
      function c(e, t) {
        (r = document.createElement("style")),
          (s = document.createElement("style")),
          (a = document.createElement("style")),
          (r.textContent = d(e).core.cssText),
          (s.textContent = d(e).dark.cssText),
          (a.textContent = d(e).light.cssText),
          document.head.appendChild(r),
          document.head.appendChild(s),
          document.head.appendChild(a),
          l(t);
      }
      function l(e) {
        s &&
          a &&
          ("light" === e
            ? (s.removeAttribute("media"), (a.media = "enabled"))
            : (a.removeAttribute("media"), (s.media = "enabled")));
      }
      function h(e) {
        r &&
          s &&
          a &&
          ((r.textContent = d(e).core.cssText),
          (s.textContent = d(e).dark.cssText),
          (a.textContent = d(e).light.cssText));
      }
      function d(e) {
        return {
          core: (0, n.AH)`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${(0, n.iz)(
          e?.["--w3m-color-mix-strength"]
            ? `${e["--w3m-color-mix-strength"]}%`
            : "0%"
        )};
        --w3m-font-family: ${(0, n.iz)(
          e?.["--w3m-font-family"] ||
            "Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;"
        )};
        --w3m-font-size-master: ${(0, n.iz)(
          e?.["--w3m-font-size-master"] || "10px"
        )};
        --w3m-border-radius-master: ${(0, n.iz)(
          e?.["--w3m-border-radius-master"] || "4px"
        )};
        --w3m-z-index: ${(0, n.iz)(e?.["--w3m-z-index"] || 999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,
          light: (0, n.AH)`
      :root {
        --w3m-color-mix: ${(0, n.iz)(e?.["--w3m-color-mix"] || "#fff")};
        --w3m-accent: ${(0, n.iz)((0, o.o)(e, "dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${(0, n.iz)(
          (0, o.o)(e, "dark")["--w3m-background"]
        )};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,
          dark: (0, n.AH)`
      :root {
        --w3m-color-mix: ${(0, n.iz)(e?.["--w3m-color-mix"] || "#000")};
        --w3m-accent: ${(0, n.iz)((0, o.o)(e, "light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${(0, n.iz)(
          (0, o.o)(e, "light")["--w3m-background"]
        )};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `,
        };
      }
      let u = (0, n.AH)`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,
        p = (0, n.AH)`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,
        g = (0, n.AH)`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;
    },
    98782: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => d });
      var r = i(96641),
        s = i(54252),
        a = i(5582),
        n = i(35558),
        o = i(65819),
        c = i(23140),
        l = i(95842),
        h = i(26128);
      let d = {
        filterOutDuplicatesByRDNS(e) {
          let t = r.H.state.enableEIP6963 ? s.a.state.connectors : [],
            i = a.i.getRecentWallets(),
            o = t.map((e) => e.info?.rdns).filter(Boolean),
            c = i.map((e) => e.rdns).filter(Boolean),
            l = o.concat(c);
          if (l.includes("io.metamask.mobile") && n.w.isMobile()) {
            let e = l.indexOf("io.metamask.mobile");
            l[e] = "io.metamask";
          }
          return e.filter((e) => !l.includes(String(e?.rdns)));
        },
        filterOutDuplicatesByIds(e) {
          let t = s.a.state.connectors.filter(
              (e) => "ANNOUNCED" === e.type || "INJECTED" === e.type
            ),
            i = a.i.getRecentWallets(),
            r = t.map((e) => e.explorerId),
            n = i.map((e) => e.id),
            o = r.concat(n);
          return e.filter((e) => !o.includes(e?.id));
        },
        filterOutDuplicateWallets(e) {
          let t = this.filterOutDuplicatesByRDNS(e);
          return this.filterOutDuplicatesByIds(t);
        },
        markWalletsAsInstalled(e) {
          let { connectors: t } = s.a.state,
            { featuredWalletIds: i } = r.H.state,
            a = t
              .filter((e) => "ANNOUNCED" === e.type)
              .reduce((e, t) => (t.info?.rdns && (e[t.info.rdns] = !0), e), {});
          return e
            .map((e) => ({ ...e, installed: !!e.rdns && !!a[e.rdns ?? ""] }))
            .sort((e, t) => {
              let r = Number(t.installed) - Number(e.installed);
              if (0 !== r) return r;
              if (i?.length) {
                let r = i.indexOf(e.id),
                  s = i.indexOf(t.id);
                if (-1 !== r && -1 !== s) return r - s;
                if (-1 !== r) return -1;
                if (-1 !== s) return 1;
              }
              return 0;
            });
        },
        getConnectOrderMethod(e, t) {
          let i =
              e?.connectMethodsOrder || r.H.state.features?.connectMethodsOrder,
            a = t || s.a.state.connectors;
          if (i) return i;
          let { injected: n, announced: c } = l.g.getConnectorsByType(
              a,
              o.N.state.recommended,
              o.N.state.featured
            ),
            d = n.filter(l.g.showConnector),
            u = c.filter(l.g.showConnector);
          return d.length || u.length
            ? ["wallet", "email", "social"]
            : h.o.DEFAULT_CONNECT_METHOD_ORDER;
        },
        isExcluded(e) {
          let t =
              !!e.rdns &&
              o.N.state.excludedWallets.some((t) => t.rdns === e.rdns),
            i =
              !!e.name &&
              o.N.state.excludedWallets.some((t) =>
                c.y.isLowerCaseMatch(t.name, e.name)
              );
          return t || i;
        },
      };
    },
    99758: function (e) {
      e.exports = function (e, t, i) {
        e = e || {};
        var r = t.prototype,
          s = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          };
        function a(e, t, i, s) {
          return r.fromToBase(e, t, i, s);
        }
        (i.en.relativeTime = s),
          (r.fromToBase = function (t, r, a, n, o) {
            for (
              var c,
                l,
                h,
                d = a.$locale().relativeTime || s,
                u = e.thresholds || [
                  { l: "s", r: 44, d: "second" },
                  { l: "m", r: 89 },
                  { l: "mm", r: 44, d: "minute" },
                  { l: "h", r: 89 },
                  { l: "hh", r: 21, d: "hour" },
                  { l: "d", r: 35 },
                  { l: "dd", r: 25, d: "day" },
                  { l: "M", r: 45 },
                  { l: "MM", r: 10, d: "month" },
                  { l: "y", r: 17 },
                  { l: "yy", d: "year" },
                ],
                p = u.length,
                g = 0;
              g < p;
              g += 1
            ) {
              var f = u[g];
              f.d && (c = n ? i(t).diff(a, f.d, !0) : a.diff(t, f.d, !0));
              var m = (e.rounding || Math.round)(Math.abs(c));
              if (((h = c > 0), m <= f.r || !f.r)) {
                m <= 1 && g > 0 && (f = u[g - 1]);
                var w = d[f.l];
                o && (m = o("" + m)),
                  (l =
                    "string" == typeof w
                      ? w.replace("%d", m)
                      : w(m, r, f.l, h));
                break;
              }
            }
            if (r) return l;
            var y = h ? d.future : d.past;
            return "function" == typeof y ? y(l) : y.replace("%s", l);
          }),
          (r.to = function (e, t) {
            return a(e, t, this, !0);
          }),
          (r.from = function (e, t) {
            return a(e, t, this);
          });
        var n = function (e) {
          return e.$u ? i.utc() : i();
        };
        (r.toNow = function (e) {
          return this.to(n(this), e);
        }),
          (r.fromNow = function (e) {
            return this.from(n(this), e);
          });
      };
    },
    99836: (e, t, i) => {
      "use strict";
      i.d(t, { o: () => r });
      let r = {
        METMASK_CONNECTOR_NAME: "MetaMask",
        TRUST_CONNECTOR_NAME: "Trust Wallet",
        SOLFLARE_CONNECTOR_NAME: "Solflare",
        PHANTOM_CONNECTOR_NAME: "Phantom",
        COIN98_CONNECTOR_NAME: "Coin98",
        MAGIC_EDEN_CONNECTOR_NAME: "Magic Eden",
        BACKPACK_CONNECTOR_NAME: "Backpack",
        BITGET_CONNECTOR_NAME: "Bitget Wallet",
        FRONTIER_CONNECTOR_NAME: "Frontier",
        XVERSE_CONNECTOR_NAME: "Xverse Wallet",
        LEATHER_CONNECTOR_NAME: "Leather",
        EIP155: "eip155",
        ADD_CHAIN_METHOD: "wallet_addEthereumChain",
        EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
        EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
        CONNECTOR_RDNS_MAP: {
          coinbaseWallet: "com.coinbase.wallet",
          coinbaseWalletSDK: "com.coinbase.wallet",
        },
        CONNECTOR_TYPE_EXTERNAL: "EXTERNAL",
        CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
        CONNECTOR_TYPE_INJECTED: "INJECTED",
        CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
        CONNECTOR_TYPE_AUTH: "AUTH",
        CONNECTOR_TYPE_MULTI_CHAIN: "MULTI_CHAIN",
        CONNECTOR_TYPE_W3M_AUTH: "ID_AUTH",
      };
    },
  },
]);
