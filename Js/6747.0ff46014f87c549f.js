(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6747],
  {
    6747: (e, t, n) => {
      "use strict";
      n.d(t, { createCoinbaseWalletSDK: () => tB });
      class s {
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
        storeObject(e, t) {
          this.setItem(e, JSON.stringify(t));
        }
        loadObject(e) {
          let t = this.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(""),
            t = [];
          for (let n = 0; n < localStorage.length; n++) {
            let s = localStorage.key(n);
            "string" == typeof s && s.startsWith(e) && t.push(s);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
        }
        static clearAll() {
          new s("CBWSDK").clear(), new s("walletlink").clear();
        }
      }
      let r = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        },
        i = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
          4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
        },
        a = "Unspecified error message.";
      function o(e, t = a) {
        if (e && Number.isInteger(e)) {
          var n;
          let t = e.toString();
          if (l(i, t)) return i[t].message;
          if ((n = e) >= -32099 && n <= -32e3)
            return "Unspecified server error.";
        }
        return t;
      }
      function c(e) {
        return e && "object" == typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function l(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function u(e, t) {
        return (
          "object" == typeof e &&
          null !== e &&
          t in e &&
          "string" == typeof e[t]
        );
      }
      let d = {
        rpc: {
          parse: (e) => h(r.rpc.parse, e),
          invalidRequest: (e) => h(r.rpc.invalidRequest, e),
          invalidParams: (e) => h(r.rpc.invalidParams, e),
          methodNotFound: (e) => h(r.rpc.methodNotFound, e),
          internal: (e) => h(r.rpc.internal, e),
          server: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return h(t, e);
          },
          invalidInput: (e) => h(r.rpc.invalidInput, e),
          resourceNotFound: (e) => h(r.rpc.resourceNotFound, e),
          resourceUnavailable: (e) => h(r.rpc.resourceUnavailable, e),
          transactionRejected: (e) => h(r.rpc.transactionRejected, e),
          methodNotSupported: (e) => h(r.rpc.methodNotSupported, e),
          limitExceeded: (e) => h(r.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) => p(r.provider.userRejectedRequest, e),
          unauthorized: (e) => p(r.provider.unauthorized, e),
          unsupportedMethod: (e) => p(r.provider.unsupportedMethod, e),
          disconnected: (e) => p(r.provider.disconnected, e),
          chainDisconnected: (e) => p(r.provider.chainDisconnected, e),
          unsupportedChain: (e) => p(r.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            let { code: t, message: n, data: s } = e;
            if (!n || "string" != typeof n)
              throw Error('"message" must be a nonempty string');
            return new g(t, n, s);
          },
        },
      };
      function h(e, t) {
        let [n, s] = f(t);
        return new m(e, n || o(e), s);
      }
      function p(e, t) {
        let [n, s] = f(t);
        return new g(e, n || o(e), s);
      }
      function f(e) {
        if (e) {
          if ("string" == typeof e) return [e];
          else if ("object" == typeof e && !Array.isArray(e)) {
            let { message: t, data: n } = e;
            if (t && "string" != typeof t)
              throw Error("Must specify string message.");
            return [t || void 0, n];
          }
        }
        return [];
      }
      class m extends Error {
        constructor(e, t, n) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || "string" != typeof t)
            throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== n && (this.data = n);
        }
      }
      class g extends m {
        constructor(e, t, n) {
          if (
            !(function (e) {
              return Number.isInteger(e) && e >= 1e3 && e <= 4999;
            })(e)
          )
            throw Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(e, t, n);
        }
      }
      let _ = (e) => e,
        y = (e) => e,
        b = (e) => e;
      function w(e) {
        return Math.floor(e);
      }
      var v = n(44134).Buffer;
      let k = /^[0-9]*$/,
        I = /^[a-f0-9]*$/;
      function E(e) {
        return C(crypto.getRandomValues(new Uint8Array(e)));
      }
      function C(e) {
        return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function x(e) {
        return new Uint8Array(
          e.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16))
        );
      }
      function S(e, t = !1) {
        let n = e.toString("hex");
        return _(t ? `0x${n}` : n);
      }
      function M(e) {
        return S(O(e), !0);
      }
      function A(e) {
        return b(e.toString(10));
      }
      function P(e) {
        return _(`0x${BigInt(e).toString(16)}`);
      }
      function L(e) {
        return e.startsWith("0x") || e.startsWith("0X");
      }
      function N(e) {
        return L(e) ? e.slice(2) : e;
      }
      function R(e) {
        return L(e) ? `0x${e.slice(2)}` : `0x${e}`;
      }
      function D(e) {
        if ("string" != typeof e) return !1;
        let t = N(e).toLowerCase();
        return I.test(t);
      }
      function T(e, t = !1) {
        let n = (function (e, t = !1) {
          if ("string" == typeof e) {
            let n = N(e).toLowerCase();
            if (I.test(n)) return _(t ? `0x${n}` : n);
          }
          throw d.rpc.invalidParams(
            `"${String(e)}" is not a hexadecimal string`
          );
        })(e, !1);
        return n.length % 2 == 1 && (n = _(`0${n}`)), t ? _(`0x${n}`) : n;
      }
      function j(e) {
        if ("string" == typeof e) {
          let t = N(e).toLowerCase();
          if (D(t) && 40 === t.length) return y(R(t));
        }
        throw d.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`);
      }
      function O(e) {
        if (v.isBuffer(e)) return e;
        if ("string" == typeof e) {
          if (D(e)) {
            let t = T(e, !1);
            return v.from(t, "hex");
          }
          return v.from(e, "utf8");
        }
        throw d.rpc.invalidParams(`Not binary data: ${String(e)}`);
      }
      function U(e) {
        if ("number" == typeof e && Number.isInteger(e)) return w(e);
        if ("string" == typeof e) {
          if (k.test(e)) return w(Number(e));
          if (D(e)) return w(Number(BigInt(T(e, !0))));
        }
        throw d.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      function W(e) {
        if (
          null !== e &&
          ("bigint" == typeof e ||
            (function (e) {
              if (null == e || "function" != typeof e.constructor) return !1;
              let { constructor: t } = e;
              return (
                "function" == typeof t.config && "number" == typeof t.EUCLID
              );
            })(e))
        )
          return BigInt(e.toString(10));
        if ("number" == typeof e) return BigInt(U(e));
        if ("string" == typeof e) {
          if (k.test(e)) return BigInt(e);
          if (D(e)) return BigInt(T(e, !0));
        }
        throw d.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      async function q() {
        return crypto.subtle.generateKey(
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          ["deriveKey"]
        );
      }
      async function z(e, t) {
        return crypto.subtle.deriveKey(
          { name: "ECDH", public: t },
          e,
          { name: "AES-GCM", length: 256 },
          !1,
          ["encrypt", "decrypt"]
        );
      }
      async function K(e, t) {
        let n = crypto.getRandomValues(new Uint8Array(12)),
          s = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: n },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: n, cipherText: s };
      }
      async function H(e, { iv: t, cipherText: n }) {
        let s = await crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, n);
        return new TextDecoder().decode(s);
      }
      function F(e) {
        switch (e) {
          case "public":
            return "spki";
          case "private":
            return "pkcs8";
        }
      }
      async function B(e, t) {
        let n = F(e);
        return C(new Uint8Array(await crypto.subtle.exportKey(n, t)));
      }
      async function G(e, t) {
        let n = F(e),
          s = x(t).buffer;
        return await crypto.subtle.importKey(
          n,
          new Uint8Array(s),
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          "private" === e ? ["deriveKey"] : []
        );
      }
      async function $(e, t) {
        return K(
          t,
          JSON.stringify(e, (e, t) =>
            t instanceof Error
              ? Object.assign(
                  Object.assign({}, t.code ? { code: t.code } : {}),
                  { message: t.message }
                )
              : t
          )
        );
      }
      async function J(e, t) {
        return JSON.parse(await H(t, e));
      }
      let Y = { storageKey: "ownPrivateKey", keyType: "private" },
        Q = { storageKey: "ownPublicKey", keyType: "public" },
        Z = { storageKey: "peerPublicKey", keyType: "public" };
      class V {
        constructor() {
          (this.storage = new s("CBWSDK", "SCWKeyManager")),
            (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(Z, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            this.storage.removeItem(Q.storageKey),
            this.storage.removeItem(Y.storageKey),
            this.storage.removeItem(Z.storageKey);
        }
        async generateKeyPair() {
          let e = await q();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(Y, e.privateKey),
            await this.storeKey(Q, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey &&
            (this.ownPrivateKey = await this.loadKey(Y)),
            null === this.ownPublicKey &&
              (this.ownPublicKey = await this.loadKey(Q)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey &&
              (this.peerPublicKey = await this.loadKey(Z)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await z(
                this.ownPrivateKey,
                this.peerPublicKey
              ));
        }
        async loadKey(e) {
          let t = this.storage.getItem(e.storageKey);
          return t ? G(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let n = await B(e.keyType, t);
          this.storage.setItem(e.storageKey, n);
        }
      }
      let X = "4.3.3",
        ee = "@coinbase/wallet-sdk";
      async function et(e, t) {
        let n = Object.assign(Object.assign({}, e), {
            jsonrpc: "2.0",
            id: crypto.randomUUID(),
          }),
          s = await window.fetch(t, {
            method: "POST",
            body: JSON.stringify(n),
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "X-Cbw-Sdk-Version": X,
              "X-Cbw-Sdk-Platform": ee,
            },
          }),
          { result: r, error: i } = await s.json();
        if (i) throw i;
        return r;
      }
      let en = "accounts",
        es = "activeChain",
        er = "availableChains",
        ei = "walletCapabilities";
      class ea {
        constructor(e) {
          var t, n, r;
          (this.metadata = e.metadata),
            (this.communicator = e.communicator),
            (this.callback = e.callback),
            (this.keyManager = new V()),
            (this.storage = new s("CBWSDK", "SCWStateManager")),
            (this.accounts =
              null != (t = this.storage.loadObject(en)) ? t : []),
            (this.chain = this.storage.loadObject(es) || {
              id:
                null !=
                (r = null == (n = e.metadata.appChainIds) ? void 0 : n[0])
                  ? r
                  : 1,
            }),
            (this.handshake = this.handshake.bind(this)),
            (this.request = this.request.bind(this)),
            (this.createRequestMessage = this.createRequestMessage.bind(this)),
            (this.decryptResponseMessage =
              this.decryptResponseMessage.bind(this));
        }
        async handshake(e) {
          var t, n, s, r;
          await (null == (n = (t = this.communicator).waitForPopupLoaded)
            ? void 0
            : n.call(t));
          let i = await this.createRequestMessage({
              handshake: {
                method: e.method,
                params: Object.assign(
                  {},
                  this.metadata,
                  null != (s = e.params) ? s : {}
                ),
              },
            }),
            a = await this.communicator.postRequestAndWaitForResponse(i);
          if ("failure" in a.content) throw a.content.failure;
          let o = await G("public", a.sender);
          await this.keyManager.setPeerPublicKey(o);
          let c = (await this.decryptResponseMessage(a)).result;
          if ("error" in c) throw c.error;
          if ("eth_requestAccounts" === e.method) {
            let e = c.value;
            (this.accounts = e),
              this.storage.storeObject(en, e),
              null == (r = this.callback) || r.call(this, "accountsChanged", e);
          }
        }
        async request(e) {
          var t;
          if (0 === this.accounts.length)
            if ("wallet_sendCalls" === e.method)
              return this.sendRequestToPopup(e);
            else throw d.provider.unauthorized();
          switch (e.method) {
            case "eth_requestAccounts":
              return (
                null == (t = this.callback) ||
                  t.call(this, "connect", { chainId: P(this.chain.id) }),
                this.accounts
              );
            case "eth_accounts":
              return this.accounts;
            case "eth_coinbase":
              return this.accounts[0];
            case "net_version":
              return this.chain.id;
            case "eth_chainId":
              return P(this.chain.id);
            case "wallet_getCapabilities":
              return this.storage.loadObject(ei);
            case "wallet_switchEthereumChain":
              return this.handleSwitchChainRequest(e);
            case "eth_ecRecover":
            case "personal_sign":
            case "wallet_sign":
            case "personal_ecRecover":
            case "eth_signTransaction":
            case "eth_sendTransaction":
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
            case "wallet_addEthereumChain":
            case "wallet_watchAsset":
            case "wallet_sendCalls":
            case "wallet_showCallsStatus":
            case "wallet_grantPermissions":
              return this.sendRequestToPopup(e);
            default:
              if (!this.chain.rpcUrl)
                throw d.rpc.internal("No RPC URL set for chain");
              return et(e, this.chain.rpcUrl);
          }
        }
        async sendRequestToPopup(e) {
          var t, n;
          await (null == (n = (t = this.communicator).waitForPopupLoaded)
            ? void 0
            : n.call(t));
          let s = await this.sendEncryptedRequest(e),
            r = (await this.decryptResponseMessage(s)).result;
          if ("error" in r) throw r.error;
          return r.value;
        }
        async cleanup() {
          var e, t;
          this.storage.clear(),
            await this.keyManager.clear(),
            (this.accounts = []),
            (this.chain = {
              id:
                null !=
                (t = null == (e = this.metadata.appChainIds) ? void 0 : e[0])
                  ? t
                  : 1,
            });
        }
        async handleSwitchChainRequest(e) {
          var t;
          let n = e.params;
          if (!n || !(null == (t = n[0]) ? void 0 : t.chainId))
            throw d.rpc.invalidParams();
          let s = U(n[0].chainId);
          if (this.updateChain(s)) return null;
          let r = await this.sendRequestToPopup(e);
          return null === r && this.updateChain(s), r;
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw d.provider.unauthorized(
              "No valid session found, try requestAccounts before other methods"
            );
          let n = await $({ action: e, chainId: this.chain.id }, t),
            s = await this.createRequestMessage({ encrypted: n });
          return this.communicator.postRequestAndWaitForResponse(s);
        }
        async createRequestMessage(e) {
          let t = await B("public", await this.keyManager.getOwnPublicKey());
          return {
            id: crypto.randomUUID(),
            sender: t,
            content: e,
            timestamp: new Date(),
          };
        }
        async decryptResponseMessage(e) {
          var t, n;
          let s = e.content;
          if ("failure" in s) throw s.failure;
          let r = await this.keyManager.getSharedSecret();
          if (!r) throw d.provider.unauthorized("Invalid session");
          let i = await J(s.encrypted, r),
            a = null == (t = i.data) ? void 0 : t.chains;
          if (a) {
            let e = Object.entries(a).map(([e, t]) => ({
              id: Number(e),
              rpcUrl: t,
            }));
            this.storage.storeObject(er, e), this.updateChain(this.chain.id, e);
          }
          let o = null == (n = i.data) ? void 0 : n.capabilities;
          return o && this.storage.storeObject(ei, o), i;
        }
        updateChain(e, t) {
          var n;
          let s = null != t ? t : this.storage.loadObject(er),
            r = null == s ? void 0 : s.find((t) => t.id === e);
          return (
            !!r &&
            (r !== this.chain &&
              ((this.chain = r),
              this.storage.storeObject(es, r),
              null == (n = this.callback) ||
                n.call(this, "chainChanged", P(r.id))),
            !0)
          );
        }
      }
      var eo = n(8314);
      let ec = "Addresses";
      function el(e) {
        return void 0 !== e.errorMessage;
      }
      class eu {
        constructor(e) {
          this.secret = e;
        }
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          let n = crypto.getRandomValues(new Uint8Array(12)),
            s = await crypto.subtle.importKey(
              "raw",
              x(t),
              { name: "aes-gcm" },
              !1,
              ["encrypt", "decrypt"]
            ),
            r = new TextEncoder(),
            i = await window.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: n },
              s,
              r.encode(e)
            ),
            a = i.slice(i.byteLength - 16),
            o = i.slice(0, i.byteLength - 16),
            c = new Uint8Array(a),
            l = new Uint8Array(o);
          return C(new Uint8Array([...n, ...c, ...l]));
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          return new Promise((n, s) => {
            !(async function () {
              let r = await crypto.subtle.importKey(
                  "raw",
                  x(t),
                  { name: "aes-gcm" },
                  !1,
                  ["encrypt", "decrypt"]
                ),
                i = x(e),
                a = i.slice(0, 12),
                o = i.slice(12, 28),
                c = new Uint8Array([...i.slice(28), ...o]),
                l = { name: "AES-GCM", iv: new Uint8Array(a) };
              try {
                let e = await window.crypto.subtle.decrypt(l, r, c),
                  t = new TextDecoder();
                n(t.decode(e));
              } catch (e) {
                s(e);
              }
            })();
          });
        }
      }
      class ed {
        constructor(e, t, n) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let s = `${t}:${n}`;
          this.auth = `Basic ${btoa(s)}`;
        }
        async markUnseenEventsAsSeen(e) {
          return Promise.all(
            e.map((e) =>
              fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                method: "POST",
                headers: { Authorization: this.auth },
              })
            )
          ).catch((e) => console.error("Unabled to mark event as failed:", e));
        }
        async fetchUnseenEvents() {
          var e;
          let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: { Authorization: this.auth },
          });
          if (t.ok) {
            let { events: n, error: s } = await t.json();
            if (s) throw Error(`Check unseen events failed: ${s}`);
            let r =
              null !=
              (e =
                null == n
                  ? void 0
                  : n
                      .filter((e) => "Web3Response" === e.event)
                      .map((e) => ({
                        type: "Event",
                        sessionId: this.sessionId,
                        eventId: e.id,
                        event: e.event,
                        data: e.data,
                      })))
                ? e
                : [];
            return this.markUnseenEventsAsSeen(r), r;
          }
          throw Error(`Check unseen events failed: ${t.status}`);
        }
      }
      !(function (e) {
        (e[(e.DISCONNECTED = 0)] = "DISCONNECTED"),
          (e[(e.CONNECTING = 1)] = "CONNECTING"),
          (e[(e.CONNECTED = 2)] = "CONNECTED");
      })(eE || (eE = {}));
      class eh {
        setConnectionStateListener(e) {
          this.connectionStateListener = e;
        }
        setIncomingDataListener(e) {
          this.incomingDataListener = e;
        }
        constructor(e, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.pendingData = []),
            (this.url = e.replace(/^http/, "ws"));
        }
        async connect() {
          if (this.webSocket) throw Error("webSocket object is not null");
          return new Promise((e, t) => {
            var n;
            let s;
            try {
              this.webSocket = s = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null == (n = this.connectionStateListener) ||
              n.call(this, eE.CONNECTING),
              (s.onclose = (e) => {
                var n;
                this.clearWebSocket(),
                  t(Error(`websocket error ${e.code}: ${e.reason}`)),
                  null == (n = this.connectionStateListener) ||
                    n.call(this, eE.DISCONNECTED);
              }),
              (s.onopen = (t) => {
                var n;
                e(),
                  null == (n = this.connectionStateListener) ||
                    n.call(this, eE.CONNECTED),
                  this.pendingData.length > 0 &&
                    ([...this.pendingData].forEach((e) => this.sendData(e)),
                    (this.pendingData = []));
              }),
              (s.onmessage = (e) => {
                var t, n;
                if ("h" === e.data)
                  null == (t = this.incomingDataListener) ||
                    t.call(this, { type: "Heartbeat" });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null == (n = this.incomingDataListener) || n.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            this.clearWebSocket(),
              null == (e = this.connectionStateListener) ||
                e.call(this, eE.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch (e) {}
          }
        }
        sendData(e) {
          let { webSocket: t } = this;
          if (!t) {
            this.pendingData.push(e), this.connect();
            return;
          }
          t.send(e);
        }
        clearWebSocket() {
          let { webSocket: e } = this;
          e &&
            ((this.webSocket = null),
            (e.onclose = null),
            (e.onerror = null),
            (e.onmessage = null),
            (e.onopen = null));
        }
      }
      class ep {
        constructor({ session: e, linkAPIUrl: t, listener: n }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = w(1)),
            (this._connected = !1),
            (this._linked = !1),
            (this.shouldFetchUnseenEventsOnConnect = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              e &&
                new Map([
                  ["__destroyed", this.handleDestroyed],
                  ["EthereumAddress", this.handleAccountUpdated],
                  ["WalletUsername", this.handleWalletUsernameUpdated],
                  ["AppVersion", this.handleAppVersionUpdated],
                  [
                    "ChainId",
                    (t) =>
                      e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl),
                  ],
                ]).forEach((t, n) => {
                  let s = e[n];
                  void 0 !== s && t(s);
                });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              "1" === e && (null == (t = this.listener) || t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              let n = await this.cipher.decrypt(e);
              null == (t = this.listener) || t.accountUpdated(n);
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var n;
              let s = await this.cipher.decrypt(t);
              null == (n = this.listener) || n.metadataUpdated(e, s);
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated("walletUsername", e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated("AppVersion", e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var n;
              let s = await this.cipher.decrypt(e),
                r = await this.cipher.decrypt(t);
              null == (n = this.listener) || n.chainUpdated(s, r);
            }),
            (this.session = e),
            (this.cipher = new eu(e.secret)),
            (this.listener = n);
          let s = new eh(`${t}/rpc`, WebSocket);
          s.setConnectionStateListener(async (e) => {
            let t = !1;
            switch (e) {
              case eE.DISCONNECTED:
                if ((this.stopHeartbeat(), !this.destroyed)) {
                  let e = async () => {
                    await new Promise((e) => setTimeout(e, 5e3)),
                      this.destroyed ||
                        s.connect().catch(() => {
                          e();
                        });
                  };
                  e();
                }
                break;
              case eE.CONNECTED:
                (t = await this.handleConnected()),
                  this.updateLastHeartbeat(),
                  this.startHeartbeat(),
                  this.shouldFetchUnseenEventsOnConnect &&
                    this.fetchUnseenEventsAPI();
              case eE.CONNECTING:
            }
            this.connected !== t && (this.connected = t);
          }),
            s.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case "Heartbeat":
                  this.updateLastHeartbeat();
                  return;
                case "IsLinkedOK":
                case "Linked": {
                  let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated":
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case "Event":
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null == (t = this.requestResolutions.get(e.id)) || t(e));
            }),
            (this.ws = s),
            (this.http = new ed(t, e.id, e.key));
        }
        connect() {
          if (this.destroyed) throw Error("instance is destroyed");
          this.ws.connect();
        }
        async destroy() {
          this.destroyed ||
            (await this.makeRequest(
              {
                type: "SetSessionConfig",
                id: w(this.nextReqId++),
                sessionId: this.session.id,
                metadata: { __destroyed: "1" },
              },
              { timeout: 1e3 }
            ),
            (this.destroyed = !0),
            this.stopHeartbeat(),
            this.ws.disconnect(),
            (this.listener = void 0));
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          this._connected = e;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, n;
          (this._linked = e),
            e && (null == (t = this.onceLinked) || t.call(this)),
            null == (n = this.listener) || n.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ("Event" !== e.type || "Web3Response" !== e.event) return;
          let n = JSON.parse(await this.cipher.decrypt(e.data));
          if ("WEB3_RESPONSE" !== n.type) return;
          let { id: s, response: r } = n;
          null == (t = this.listener) || t.handleWeb3ResponseMessage(s, r);
        }
        async checkUnseenEvents() {
          if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return;
          }
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error("Unable to check for unseen events", e);
          }
        }
        async fetchUnseenEventsAPI() {
          (this.shouldFetchUnseenEventsOnConnect = !1),
            (await this.http.fetchUnseenEvents()).forEach((e) =>
              this.handleIncomingEvent(e)
            );
        }
        async publishEvent(e, t, n = !1) {
          let s = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  location: location.href,
                  relaySource:
                    "coinbaseWalletExtension" in window &&
                    window.coinbaseWalletExtension
                      ? "injected_sdk"
                      : "sdk",
                })
              )
            ),
            r = {
              type: "PublishEvent",
              id: w(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: s,
              callWebhook: n,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(r);
            if ("Fail" === e.type)
              throw Error(e.error || "failed to publish event");
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        startHeartbeat() {
          this.heartbeatWorker && this.heartbeatWorker.terminate();
          try {
            let e = new n.U(n(60627));
            (this.heartbeatWorker = new Worker(e, { type: "module" })),
              this.setupWorkerListeners(),
              this.heartbeatWorker.postMessage({ type: "start" });
          } catch (e) {
            console.warn("Failed to create external heartbeat worker", e);
          }
        }
        setupWorkerListeners() {
          this.heartbeatWorker &&
            (this.heartbeatWorker.addEventListener("message", (e) => {
              let { type: t } = e.data;
              "heartbeat" === t && this.heartbeat();
            }),
            this.heartbeatWorker.addEventListener("error", (e) => {
              console.error("Heartbeat worker error:", e);
            }));
        }
        stopHeartbeat() {
          this.heartbeatWorker &&
            (this.heartbeatWorker.postMessage({ type: "stop" }),
            this.heartbeatWorker.terminate(),
            (this.heartbeatWorker = void 0));
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4)
            return void this.ws.disconnect();
          try {
            this.ws.sendData("h");
          } catch (e) {}
        }
        async makeRequest(e, t = { timeout: 6e4 }) {
          let n,
            s = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, r) => {
                n = window.setTimeout(() => {
                  r(Error(`request ${s} timed out`));
                }, t.timeout);
              }),
              new Promise((e) => {
                this.requestResolutions.set(s, (t) => {
                  clearTimeout(n), e(t), this.requestResolutions.delete(s);
                });
              }),
            ])
          );
        }
        async handleConnected() {
          return (
            "Fail" !==
              (
                await this.makeRequest({
                  type: "HostSession",
                  id: w(this.nextReqId++),
                  sessionId: this.session.id,
                  sessionKey: this.session.key,
                })
              ).type &&
            (this.sendData({
              type: "IsLinked",
              id: w(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: "GetSessionConfig",
              id: w(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0)
          );
        }
      }
      class ef {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 0x7fffffff;
          let e = this._nextRequestId,
            t = R(e.toString(16));
          return this.callbacks.get(t) && this.callbacks.delete(t), e;
        }
      }
      var em = n(62288),
        eg = n(19989);
      let e_ = "session:id",
        ey = "session:secret",
        eb = "session:linked";
      class ew {
        constructor(e, t, n, s = !1) {
          (this.storage = e),
            (this.id = t),
            (this.secret = n),
            (this.key = (0, eg.My)((0, em.sc)(`${t}, ${n} WalletLink`))),
            (this._linked = !!s);
        }
        static create(e) {
          return new ew(e, E(16), E(32)).save();
        }
        static load(e) {
          let t = e.getItem(e_),
            n = e.getItem(eb),
            s = e.getItem(ey);
          return t && s ? new ew(e, t, s, "1" === n) : null;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this.storage.setItem(e_, this.id),
            this.storage.setItem(ey, this.secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this.storage.setItem(eb, this._linked ? "1" : "0");
        }
      }
      function ev() {
        var e, t;
        return (
          null !=
            (t =
              null == (e = null == window ? void 0 : window.matchMedia)
                ? void 0
                : e.call(window, "(prefers-color-scheme: dark)").matches) && t
        );
      }
      function ek() {
        let e = document.createElement("style");
        (e.type = "text/css"),
          e.appendChild(
            document.createTextNode(
              '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
            )
          ),
          document.documentElement.appendChild(e);
      }
      function eI() {
        for (var e, t, n = 0, s = ""; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                s,
                r = "";
              if ("string" == typeof t || "number" == typeof t) r += t;
              else if ("object" == typeof t)
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (s = e(t[n])) && (r && (r += " "), (r += s));
                else for (n in t) t[n] && (r && (r += " "), (r += n));
              return r;
            })(e)) &&
            (s && (s += " "), (s += t));
        return s;
      }
      var eE,
        eC,
        ex,
        eS,
        eM,
        eA,
        eP,
        eL,
        eN,
        eR,
        eD,
        eT,
        ej = {},
        eO = [],
        eU =
          /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        eW = Array.isArray;
      function eq(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function ez(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function eK(e, t, n) {
        var s,
          r,
          i,
          a = {};
        for (i in t)
          "key" == i ? (s = t[i]) : "ref" == i ? (r = t[i]) : (a[i] = t[i]);
        if (
          (arguments.length > 2 &&
            (a.children = arguments.length > 3 ? eC.call(arguments, 2) : n),
          "function" == typeof e && null != e.defaultProps)
        )
          for (i in e.defaultProps)
            void 0 === a[i] && (a[i] = e.defaultProps[i]);
        return eH(e, a, s, r, null);
      }
      function eH(e, t, n, s, r) {
        var i = {
          type: e,
          props: t,
          key: n,
          ref: s,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __c: null,
          constructor: void 0,
          __v: null == r ? ++eS : r,
          __i: -1,
          __u: 0,
        };
        return null == r && null != ex.vnode && ex.vnode(i), i;
      }
      function eF(e) {
        return e.children;
      }
      function eB(e, t) {
        (this.props = e), (this.context = t);
      }
      function eG(e, t) {
        if (null == t) return e.__ ? eG(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? eG(e) : null;
      }
      function e$(e) {
        ((!e.__d && (e.__d = !0) && eM.push(e) && !eJ.__r++) ||
          eA != ex.debounceRendering) &&
          ((eA = ex.debounceRendering) || eP)(eJ);
      }
      function eJ() {
        for (var e, t, n, s, r, i, a = 1; eM.length; )
          eM.length > a && eM.sort(eL),
            (e = eM.shift()),
            (a = eM.length),
            e.__d &&
              ((t = void 0),
              (s = (n = e.__v).__e),
              (r = []),
              (i = []),
              e.__P &&
                (((t = eq({}, n)).__v = n.__v + 1),
                ex.vnode && ex.vnode(t),
                eX(
                  e.__P,
                  t,
                  n,
                  e.__n,
                  e.__P.namespaceURI,
                  32 & n.__u ? [s] : null,
                  r,
                  null == s ? eG(n) : s,
                  !!(32 & n.__u),
                  i
                ),
                (t.__v = n.__v),
                (t.__.__k[t.__i] = t),
                e0(r, t, i),
                t.__e != s &&
                  (function e(t) {
                    var n, s;
                    if (null != (t = t.__) && null != t.__c) {
                      for (
                        t.__e = t.__c.base = null, n = 0;
                        n < t.__k.length;
                        n++
                      )
                        if (null != (s = t.__k[n]) && null != s.__e) {
                          t.__e = t.__c.base = s.__e;
                          break;
                        }
                      return e(t);
                    }
                  })(t)));
        eJ.__r = 0;
      }
      function eY(e, t, n, s, r, i, a, o, c, l, u) {
        var d,
          h,
          p,
          f,
          m,
          g,
          _ = (s && s.__k) || eO,
          y = t.length;
        for (
          c = (function (e, t, n, s, r) {
            var i,
              a,
              o,
              c,
              l,
              u = n.length,
              d = u,
              h = 0;
            for (e.__k = Array(r), i = 0; i < r; i++)
              null != (a = t[i]) &&
              "boolean" != typeof a &&
              "function" != typeof a
                ? ((c = i + h),
                  ((a = e.__k[i] =
                    "string" == typeof a ||
                    "number" == typeof a ||
                    "bigint" == typeof a ||
                    a.constructor == String
                      ? eH(null, a, null, null, null)
                      : eW(a)
                      ? eH(eF, { children: a }, null, null, null)
                      : null == a.constructor && a.__b > 0
                      ? eH(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v)
                      : a).__ = e),
                  (a.__b = e.__b + 1),
                  (o = null),
                  -1 !=
                    (l = a.__i =
                      (function (e, t, n, s) {
                        var r,
                          i,
                          a = e.key,
                          o = e.type,
                          c = t[n];
                        if (
                          (null === c && null == e.key) ||
                          (c && a == c.key && o == c.type && 0 == (2 & c.__u))
                        )
                          return n;
                        if (s > +(null != c && 0 == (2 & c.__u)))
                          for (r = n - 1, i = n + 1; r >= 0 || i < t.length; ) {
                            if (r >= 0) {
                              if (
                                (c = t[r]) &&
                                0 == (2 & c.__u) &&
                                a == c.key &&
                                o == c.type
                              )
                                return r;
                              r--;
                            }
                            if (i < t.length) {
                              if (
                                (c = t[i]) &&
                                0 == (2 & c.__u) &&
                                a == c.key &&
                                o == c.type
                              )
                                return i;
                              i++;
                            }
                          }
                        return -1;
                      })(a, n, c, d)) && (d--, (o = n[l]) && (o.__u |= 2)),
                  null == o || null == o.__v
                    ? (-1 == l && (r > u ? h-- : r < u && h++),
                      "function" != typeof a.type && (a.__u |= 4))
                    : l != c &&
                      (l == c - 1
                        ? h--
                        : l == c + 1
                        ? h++
                        : (l > c ? h-- : h++, (a.__u |= 4))))
                : (e.__k[i] = null);
            if (d)
              for (i = 0; i < u; i++)
                null != (o = n[i]) &&
                  0 == (2 & o.__u) &&
                  (o.__e == s && (s = eG(o)),
                  (function e(t, n, s) {
                    var r, i;
                    if (
                      (ex.unmount && ex.unmount(t),
                      (r = t.ref) &&
                        ((r.current && r.current != t.__e) || e1(r, null, n)),
                      null != (r = t.__c))
                    ) {
                      if (r.componentWillUnmount)
                        try {
                          r.componentWillUnmount();
                        } catch (e) {
                          ex.__e(e, n);
                        }
                      r.base = r.__P = null;
                    }
                    if ((r = t.__k))
                      for (i = 0; i < r.length; i++)
                        r[i] && e(r[i], n, s || "function" != typeof t.type);
                    s || ez(t.__e), (t.__c = t.__ = t.__e = void 0);
                  })(o, o));
            return s;
          })(n, t, _, c, y),
            d = 0;
          d < y;
          d++
        )
          null != (p = n.__k[d]) &&
            ((h = -1 == p.__i ? ej : _[p.__i] || ej),
            (p.__i = d),
            (g = eX(e, p, h, r, i, a, o, c, l, u)),
            (f = p.__e),
            p.ref &&
              h.ref != p.ref &&
              (h.ref && e1(h.ref, null, p), u.push(p.ref, p.__c || f, p)),
            null == m && null != f && (m = f),
            4 & p.__u || h.__k === p.__k
              ? (c = (function e(t, n, s) {
                  var r, i;
                  if ("function" == typeof t.type) {
                    for (r = t.__k, i = 0; r && i < r.length; i++)
                      r[i] && ((r[i].__ = t), (n = e(r[i], n, s)));
                    return n;
                  }
                  t.__e != n &&
                    (n && t.type && !s.contains(n) && (n = eG(t)),
                    s.insertBefore(t.__e, n || null),
                    (n = t.__e));
                  do n = n && n.nextSibling;
                  while (null != n && 8 == n.nodeType);
                  return n;
                })(p, c, e))
              : "function" == typeof p.type && void 0 !== g
              ? (c = g)
              : f && (c = f.nextSibling),
            (p.__u &= -7));
        return (n.__e = m), c;
      }
      function eQ(e, t, n) {
        "-" == t[0]
          ? e.setProperty(t, null == n ? "" : n)
          : (e[t] =
              null == n
                ? ""
                : "number" != typeof n || eU.test(t)
                ? n
                : n + "px");
      }
      function eZ(e, t, n, s, r) {
        var i, a;
        e: if ("style" == t)
          if ("string" == typeof n) e.style.cssText = n;
          else {
            if (("string" == typeof s && (e.style.cssText = s = ""), s))
              for (t in s) (n && t in n) || eQ(e.style, t, "");
            if (n) for (t in n) (s && n[t] == s[t]) || eQ(e.style, t, n[t]);
          }
        else if ("o" == t[0] && "n" == t[1])
          (i = t != (t = t.replace(eN, "$1"))),
            (t =
              (a = t.toLowerCase()) in e ||
              "onFocusOut" == t ||
              "onFocusIn" == t
                ? a.slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + i] = n),
            n
              ? s
                ? (n.u = s.u)
                : ((n.u = eR), e.addEventListener(t, i ? eT : eD, i))
              : e.removeEventListener(t, i ? eT : eD, i);
        else {
          if ("http://www.w3.org/2000/svg" == r)
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" != t &&
            "height" != t &&
            "href" != t &&
            "list" != t &&
            "form" != t &&
            "tabIndex" != t &&
            "download" != t &&
            "rowSpan" != t &&
            "colSpan" != t &&
            "role" != t &&
            "popover" != t &&
            t in e
          )
            try {
              e[t] = null == n ? "" : n;
              break e;
            } catch (e) {}
          "function" == typeof n ||
            (null == n || (!1 === n && "-" != t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
        }
      }
      function eV(e) {
        return function (t) {
          if (this.l) {
            var n = this.l[t.type + e];
            if (null == t.t) t.t = eR++;
            else if (t.t < n.u) return;
            return n(ex.event ? ex.event(t) : t);
          }
        };
      }
      function eX(e, t, n, s, r, i, a, o, c, l) {
        var u,
          d,
          h,
          p,
          f,
          m,
          g,
          _,
          y,
          b,
          w,
          v,
          k,
          I,
          E,
          C,
          x,
          S = t.type;
        if (null != t.constructor) return null;
        128 & n.__u && ((c = !!(32 & n.__u)), (i = [(o = t.__e = n.__e)])),
          (u = ex.__b) && u(t);
        e: if ("function" == typeof S)
          try {
            if (
              ((_ = t.props),
              (y = "prototype" in S && S.prototype.render),
              (b = (u = S.contextType) && s[u.__c]),
              (w = u ? (b ? b.props.value : u.__) : s),
              n.__c
                ? (g = (d = t.__c = n.__c).__ = d.__E)
                : (y
                    ? (t.__c = d = new S(_, w))
                    : ((t.__c = d = new eB(_, w)),
                      (d.constructor = S),
                      (d.render = e2)),
                  b && b.sub(d),
                  (d.props = _),
                  d.state || (d.state = {}),
                  (d.context = w),
                  (d.__n = s),
                  (h = d.__d = !0),
                  (d.__h = []),
                  (d._sb = [])),
              y && null == d.__s && (d.__s = d.state),
              y &&
                null != S.getDerivedStateFromProps &&
                (d.__s == d.state && (d.__s = eq({}, d.__s)),
                eq(d.__s, S.getDerivedStateFromProps(_, d.__s))),
              (p = d.props),
              (f = d.state),
              (d.__v = t),
              h)
            )
              y &&
                null == S.getDerivedStateFromProps &&
                null != d.componentWillMount &&
                d.componentWillMount(),
                y &&
                  null != d.componentDidMount &&
                  d.__h.push(d.componentDidMount);
            else {
              if (
                (y &&
                  null == S.getDerivedStateFromProps &&
                  _ !== p &&
                  null != d.componentWillReceiveProps &&
                  d.componentWillReceiveProps(_, w),
                (!d.__e &&
                  null != d.shouldComponentUpdate &&
                  !1 === d.shouldComponentUpdate(_, d.__s, w)) ||
                  t.__v == n.__v)
              ) {
                for (
                  t.__v != n.__v &&
                    ((d.props = _), (d.state = d.__s), (d.__d = !1)),
                    t.__e = n.__e,
                    t.__k = n.__k,
                    t.__k.some(function (e) {
                      e && (e.__ = t);
                    }),
                    v = 0;
                  v < d._sb.length;
                  v++
                )
                  d.__h.push(d._sb[v]);
                (d._sb = []), d.__h.length && a.push(d);
                break e;
              }
              null != d.componentWillUpdate &&
                d.componentWillUpdate(_, d.__s, w),
                y &&
                  null != d.componentDidUpdate &&
                  d.__h.push(function () {
                    d.componentDidUpdate(p, f, m);
                  });
            }
            if (
              ((d.context = w),
              (d.props = _),
              (d.__P = e),
              (d.__e = !1),
              (k = ex.__r),
              (I = 0),
              y)
            ) {
              for (
                d.state = d.__s,
                  d.__d = !1,
                  k && k(t),
                  u = d.render(d.props, d.state, d.context),
                  E = 0;
                E < d._sb.length;
                E++
              )
                d.__h.push(d._sb[E]);
              d._sb = [];
            } else
              do
                (d.__d = !1),
                  k && k(t),
                  (u = d.render(d.props, d.state, d.context)),
                  (d.state = d.__s);
              while (d.__d && ++I < 25);
            (d.state = d.__s),
              null != d.getChildContext &&
                (s = eq(eq({}, s), d.getChildContext())),
              y &&
                !h &&
                null != d.getSnapshotBeforeUpdate &&
                (m = d.getSnapshotBeforeUpdate(p, f)),
              (C = u),
              null != u &&
                u.type === eF &&
                null == u.key &&
                (C = (function e(t) {
                  return "object" != typeof t ||
                    null == t ||
                    (t.__b && t.__b > 0)
                    ? t
                    : eW(t)
                    ? t.map(e)
                    : eq({}, t);
                })(u.props.children)),
              (o = eY(e, eW(C) ? C : [C], t, n, s, r, i, a, o, c, l)),
              (d.base = t.__e),
              (t.__u &= -161),
              d.__h.length && a.push(d),
              g && (d.__E = d.__ = null);
          } catch (e) {
            if (((t.__v = null), c || null != i))
              if (e.then) {
                for (
                  t.__u |= c ? 160 : 128;
                  o && 8 == o.nodeType && o.nextSibling;

                )
                  o = o.nextSibling;
                (i[i.indexOf(o)] = null), (t.__e = o);
              } else for (x = i.length; x--; ) ez(i[x]);
            else (t.__e = n.__e), (t.__k = n.__k);
            ex.__e(e, t, n);
          }
        else
          null == i && t.__v == n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (o = t.__e =
                (function (e, t, n, s, r, i, a, o, c) {
                  var l,
                    u,
                    d,
                    h,
                    p,
                    f,
                    m,
                    g = n.props,
                    _ = t.props,
                    y = t.type;
                  if (
                    ("svg" == y
                      ? (r = "http://www.w3.org/2000/svg")
                      : "math" == y
                      ? (r = "http://www.w3.org/1998/Math/MathML")
                      : r || (r = "http://www.w3.org/1999/xhtml"),
                    null != i)
                  ) {
                    for (l = 0; l < i.length; l++)
                      if (
                        (p = i[l]) &&
                        "setAttribute" in p == !!y &&
                        (y ? p.localName == y : 3 == p.nodeType)
                      ) {
                        (e = p), (i[l] = null);
                        break;
                      }
                  }
                  if (null == e) {
                    if (null == y) return document.createTextNode(_);
                    (e = document.createElementNS(r, y, _.is && _)),
                      o && (ex.__m && ex.__m(t, i), (o = !1)),
                      (i = null);
                  }
                  if (null == y) g === _ || (o && e.data == _) || (e.data = _);
                  else {
                    if (
                      ((i = i && eC.call(e.childNodes)),
                      (g = n.props || ej),
                      !o && null != i)
                    )
                      for (g = {}, l = 0; l < e.attributes.length; l++)
                        g[(p = e.attributes[l]).name] = p.value;
                    for (l in g)
                      if (((p = g[l]), "children" == l));
                      else if ("dangerouslySetInnerHTML" == l) d = p;
                      else if (!(l in _)) {
                        if (
                          ("value" == l && "defaultValue" in _) ||
                          ("checked" == l && "defaultChecked" in _)
                        )
                          continue;
                        eZ(e, l, null, p, r);
                      }
                    for (l in _)
                      (p = _[l]),
                        "children" == l
                          ? (h = p)
                          : "dangerouslySetInnerHTML" == l
                          ? (u = p)
                          : "value" == l
                          ? (f = p)
                          : "checked" == l
                          ? (m = p)
                          : (o && "function" != typeof p) ||
                            g[l] === p ||
                            eZ(e, l, p, g[l], r);
                    if (u)
                      o ||
                        (d &&
                          (u.__html == d.__html || u.__html == e.innerHTML)) ||
                        (e.innerHTML = u.__html),
                        (t.__k = []);
                    else if (
                      (d && (e.innerHTML = ""),
                      eY(
                        "template" == t.type ? e.content : e,
                        eW(h) ? h : [h],
                        t,
                        n,
                        s,
                        "foreignObject" == y
                          ? "http://www.w3.org/1999/xhtml"
                          : r,
                        i,
                        a,
                        i ? i[0] : n.__k && eG(n, 0),
                        o,
                        c
                      ),
                      null != i)
                    )
                      for (l = i.length; l--; ) ez(i[l]);
                    o ||
                      ((l = "value"),
                      "progress" == y && null == f
                        ? e.removeAttribute("value")
                        : null == f ||
                          (f === e[l] &&
                            ("progress" != y || f) &&
                            ("option" != y || f == g[l])) ||
                          eZ(e, l, f, g[l], r),
                      (l = "checked"),
                      null != m && m != e[l] && eZ(e, l, m, g[l], r));
                  }
                  return e;
                })(n.__e, t, n, s, r, i, a, c, l));
        return (u = ex.diffed) && u(t), 128 & t.__u ? void 0 : o;
      }
      function e0(e, t, n) {
        for (var s = 0; s < n.length; s++) e1(n[s], n[++s], n[++s]);
        ex.__c && ex.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              ex.__e(e, t.__v);
            }
          });
      }
      function e1(e, t, n) {
        try {
          if ("function" == typeof e) {
            var s = "function" == typeof e.__u;
            s && e.__u(), (s && null == t) || (e.__u = e(t));
          } else e.current = t;
        } catch (e) {
          ex.__e(e, n);
        }
      }
      function e2(e, t, n) {
        return this.constructor(e, n);
      }
      function e3(e, t, n) {
        var s, r, i, a;
        t == document && (t = document.documentElement),
          ex.__ && ex.__(e, t),
          (r = (s = "function" == typeof n) ? null : (n && n.__k) || t.__k),
          (i = []),
          (a = []),
          eX(
            t,
            (e = ((!s && n) || t).__k = eK(eF, null, [e])),
            r || ej,
            ej,
            t.namespaceURI,
            !s && n
              ? [n]
              : r
              ? null
              : t.firstChild
              ? eC.call(t.childNodes)
              : null,
            i,
            !s && n ? n : r ? r.__e : t.firstChild,
            s,
            a
          ),
          e0(i, e, a);
      }
      function e5(e, t) {
        e3(e, t, e5);
      }
      (eC = eO.slice),
        (ex = {
          __e: function (e, t, n, s) {
            for (var r, i, a; (t = t.__); )
              if ((r = t.__c) && !r.__)
                try {
                  if (
                    ((i = r.constructor) &&
                      null != i.getDerivedStateFromError &&
                      (r.setState(i.getDerivedStateFromError(e)), (a = r.__d)),
                    null != r.componentDidCatch &&
                      (r.componentDidCatch(e, s || {}), (a = r.__d)),
                    a)
                  )
                    return (r.__E = r);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (eS = 0),
        (eB.prototype.setState = function (e, t) {
          var n;
          (n =
            null != this.__s && this.__s != this.state
              ? this.__s
              : (this.__s = eq({}, this.state))),
            "function" == typeof e && (e = e(eq({}, n), this.props)),
            e && eq(n, e),
            null != e && this.__v && (t && this._sb.push(t), e$(this));
        }),
        (eB.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), e$(this));
        }),
        (eB.prototype.render = eF),
        (eM = []),
        (eP =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (eL = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (eJ.__r = 0),
        (eN = /(PointerCapture)$|Capture$/i),
        (eR = 0),
        (eD = eV(!1)),
        (eT = eV(!0));
      var e4,
        e8,
        e6,
        e7,
        e9 = 0,
        te = [],
        tt = ex,
        tn = tt.__b,
        ts = tt.__r,
        tr = tt.diffed,
        ti = tt.__c,
        ta = tt.unmount,
        to = tt.__;
      function tc(e, t) {
        tt.__h && tt.__h(e8, e, e9 || t), (e9 = 0);
        var n = e8.__H || (e8.__H = { __: [], __h: [] });
        return e >= n.__.length && n.__.push({}), n.__[e];
      }
      function tl(e) {
        return (
          (e9 = 1),
          (function (e, t, n) {
            var s = tc(e4++, 2);
            if (
              ((s.t = e),
              !s.__c &&
                ((s.__ = [
                  tm(void 0, t),
                  function (e) {
                    var t = s.__N ? s.__N[0] : s.__[0],
                      n = s.t(t, e);
                    t !== n && ((s.__N = [n, s.__[1]]), s.__c.setState({}));
                  },
                ]),
                (s.__c = e8),
                !e8.__f))
            ) {
              var r = function (e, t, n) {
                if (!s.__c.__H) return !0;
                var r = s.__c.__H.__.filter(function (e) {
                  return !!e.__c;
                });
                if (
                  r.every(function (e) {
                    return !e.__N;
                  })
                )
                  return !i || i.call(this, e, t, n);
                var a = s.__c.props !== e;
                return (
                  r.forEach(function (e) {
                    if (e.__N) {
                      var t = e.__[0];
                      (e.__ = e.__N),
                        (e.__N = void 0),
                        t !== e.__[0] && (a = !0);
                    }
                  }),
                  (i && i.call(this, e, t, n)) || a
                );
              };
              e8.__f = !0;
              var i = e8.shouldComponentUpdate,
                a = e8.componentWillUpdate;
              (e8.componentWillUpdate = function (e, t, n) {
                if (this.__e) {
                  var s = i;
                  (i = void 0), r(e, t, n), (i = s);
                }
                a && a.call(this, e, t, n);
              }),
                (e8.shouldComponentUpdate = r);
            }
            return s.__N || s.__;
          })(tm, e)
        );
      }
      function tu() {
        for (var e; (e = te.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(th), e.__H.__h.forEach(tp), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), tt.__e(t, e.__v);
            }
      }
      (tt.__b = function (e) {
        (e8 = null), tn && tn(e);
      }),
        (tt.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), to && to(e, t);
        }),
        (tt.__r = function (e) {
          ts && ts(e), (e4 = 0);
          var t = (e8 = e.__c).__H;
          t &&
            (e6 === e8
              ? ((t.__h = []),
                (e8.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.u = e.__N = void 0);
                }))
              : (t.__h.forEach(th), t.__h.forEach(tp), (t.__h = []), (e4 = 0))),
            (e6 = e8);
        }),
        (tt.diffed = function (e) {
          tr && tr(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== te.push(t) && e7 === tt.requestAnimationFrame) ||
                (
                  (e7 = tt.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      n = function () {
                        clearTimeout(s),
                          td && cancelAnimationFrame(t),
                          setTimeout(e);
                      },
                      s = setTimeout(n, 35);
                    td && (t = requestAnimationFrame(n));
                  }
                )(tu)),
            t.__H.__.forEach(function (e) {
              e.u && (e.__H = e.u), (e.u = void 0);
            })),
            (e6 = e8 = null);
        }),
        (tt.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(th),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || tp(e);
                }));
            } catch (n) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                tt.__e(n, e.__v);
            }
          }),
            ti && ti(e, t);
        }),
        (tt.unmount = function (e) {
          ta && ta(e);
          var t,
            n = e.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (e) {
              try {
                th(e);
              } catch (e) {
                t = e;
              }
            }),
            (n.__H = void 0),
            t && tt.__e(t, n.__v));
        });
      var td = "function" == typeof requestAnimationFrame;
      function th(e) {
        var t = e8,
          n = e.__c;
        "function" == typeof n && ((e.__c = void 0), n()), (e8 = t);
      }
      function tp(e) {
        var t = e8;
        (e.__c = e.__()), (e8 = t);
      }
      function tf(e, t) {
        return (
          !e ||
          e.length !== t.length ||
          t.some(function (t, n) {
            return t !== e[n];
          })
        );
      }
      function tm(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      class tg {
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = ev());
        }
        attach(e) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-snackbar-root"),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            e3(
              eK(
                "div",
                null,
                eK(
                  t_,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([e, t]) =>
                    eK(ty, Object.assign({}, t, { key: e }))
                  )
                )
              ),
              this.root
            );
        }
      }
      let t_ = (e) =>
          eK(
            "div",
            { class: eI("-cbwsdk-snackbar-container") },
            eK(
              "style",
              null,
              ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
            ),
            eK("div", { class: "-cbwsdk-snackbar" }, e.children)
          ),
        ty = ({ autoExpand: e, message: t, menuItems: n }) => {
          let [s, r] = tl(!0),
            [i, a] = tl(null != e && e);
          return (
            !(function (e, t) {
              var n = tc(e4++, 3);
              !tt.__s &&
                tf(n.__H, void 0) &&
                ((n.__ = e), (n.u = void 0), e8.__H.__h.push(n));
            })(() => {
              let e = [
                window.setTimeout(() => {
                  r(!1);
                }, 1),
                window.setTimeout(() => {
                  a(!0);
                }, 1e4),
              ];
              return () => {
                e.forEach(window.clearTimeout);
              };
            }),
            eK(
              "div",
              {
                class: eI(
                  "-cbwsdk-snackbar-instance",
                  s && "-cbwsdk-snackbar-instance-hidden",
                  i && "-cbwsdk-snackbar-instance-expanded"
                ),
              },
              eK(
                "div",
                {
                  class: "-cbwsdk-snackbar-instance-header",
                  onClick: () => {
                    a(!i);
                  },
                },
                eK("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                  class: "-cbwsdk-snackbar-instance-header-cblogo",
                }),
                " ",
                eK(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-header-message" },
                  t
                ),
                eK(
                  "div",
                  { class: "-gear-container" },
                  !i &&
                    eK(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      eK("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#F5F7F8",
                      })
                    ),
                  eK("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand",
                  })
                )
              ),
              n &&
                n.length > 0 &&
                eK(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-menu" },
                  n.map((e, t) =>
                    eK(
                      "div",
                      {
                        class: eI(
                          "-cbwsdk-snackbar-instance-menu-item",
                          e.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-is-red"
                        ),
                        onClick: e.onClick,
                        key: t,
                      },
                      eK(
                        "svg",
                        {
                          width: e.svgWidth,
                          height: e.svgHeight,
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        eK("path", {
                          "fill-rule": e.defaultFillRule,
                          "clip-rule": e.defaultClipRule,
                          d: e.path,
                          fill: "#AAAAAA",
                        })
                      ),
                      eK(
                        "span",
                        {
                          class: eI(
                            "-cbwsdk-snackbar-instance-menu-item-info",
                            e.isRed &&
                              "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                          ),
                        },
                        e.info
                      )
                    )
                  )
                )
            )
          );
        },
        tb =
          "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z";
      class tw {
        constructor() {
          (this.attached = !1), (this.snackbar = new tg());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          let e = document.documentElement,
            t = document.createElement("div");
          (t.className = "-cbwsdk-css-reset"),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            ek();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: "Connection lost",
                  menuItems: [
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: "Confirm on phone",
                  menuItems: [
                    {
                      isRed: !0,
                      info: "Cancel transaction",
                      svgWidth: "11",
                      svgHeight: "11",
                      path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                      defaultFillRule: "inherit",
                      defaultClipRule: "inherit",
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: tb,
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
      }
      class tv {
        constructor() {
          (this.root = null), (this.darkMode = ev());
        }
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-css-reset"),
            e.appendChild(this.root),
            ek();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            (e3(null, this.root),
            e &&
              e3(
                eK(
                  tk,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
      }
      let tk = ({
          title: e,
          buttonText: t,
          darkMode: n,
          onButtonClick: s,
          onDismiss: r,
        }) =>
          eK(
            t_,
            { darkMode: n },
            eK(
              "div",
              { class: "-cbwsdk-redirect-dialog" },
              eK(
                "style",
                null,
                ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
              ),
              eK("div", {
                class: "-cbwsdk-redirect-dialog-backdrop",
                onClick: r,
              }),
              eK(
                "div",
                {
                  class: eI(
                    "-cbwsdk-redirect-dialog-box",
                    n ? "dark" : "light"
                  ),
                },
                eK("p", null, e),
                eK("button", { onClick: s }, t)
              )
            )
          ),
        tI = "https://www.walletlink.org";
      class tE {
        constructor() {
          (this.attached = !1), (this.redirectDialog = new tv());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL("https://go.cb-w.com/walletlink");
          t.searchParams.append(
            "redirect_url",
            (function () {
              try {
                if (
                  (function () {
                    try {
                      return null !== window.frameElement;
                    } catch (e) {
                      return !1;
                    }
                  })() &&
                  window.top
                )
                  return window.top.location;
                return window.location;
              } catch (e) {
                return window.location;
              }
            })().href
          ),
            e && t.searchParams.append("wl_url", e);
          let n = document.createElement("a");
          (n.target = "cbw-opener"),
            (n.href = t.href),
            (n.rel = "noreferrer noopener"),
            n.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectDialog.present({
            title: "Redirecting to Coinbase Wallet...",
            buttonText: "Open",
            onButtonClick: () => {
              this.redirectToCoinbaseWallet(e);
            },
          }),
            setTimeout(() => {
              this.redirectToCoinbaseWallet(e);
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
      }
      class tC {
        constructor(e) {
          (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
            (this.isMobileWeb = (function () {
              var e;
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                null == (e = null == window ? void 0 : window.navigator)
                  ? void 0
                  : e.userAgent
              );
            })()),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(ec);
              if (
                (e && (this._session.linked = e),
                (this.isUnlinkedErrorState = !1),
                t)
              ) {
                let n = t.split(" "),
                  s = "true" === this.storage.getItem("IsStandaloneSigning");
                "" === n[0] ||
                  e ||
                  !this._session.linked ||
                  s ||
                  (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback &&
                  this.chainCallback(t, Number.parseInt(e, 10)));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                tC.accountRequestCallbackIds.size > 0 &&
                  (Array.from(tC.accountRequestCallbackIds.values()).forEach(
                    (t) => {
                      this.invokeCallback(t, {
                        method: "requestEthereumAccounts",
                        result: [e],
                      });
                    }
                  ),
                  tC.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage),
            (this.metadata = e.metadata),
            (this.accountsCallback = e.accountsCallback),
            (this.chainCallback = e.chainCallback);
          let { session: t, ui: n, connection: s } = this.subscribe();
          (this._session = t),
            (this.connection = s),
            (this.relayEventManager = new ef()),
            (this.ui = n),
            this.ui.attach();
        }
        subscribe() {
          let e = ew.load(this.storage) || ew.create(this.storage),
            { linkAPIUrl: t } = this,
            n = new ep({ session: e, linkAPIUrl: t, listener: this }),
            s = this.isMobileWeb ? new tE() : new tw();
          return n.connect(), { session: e, ui: s, connection: n };
        }
        resetAndReload() {
          this.connection
            .destroy()
            .then(() => {
              let e = ew.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id && s.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: A(e.weiValue),
              data: S(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? A(e.gasPriceInWei) : null,
              maxFeePerGas: e.gasPriceInWei ? A(e.gasPriceInWei) : null,
              maxPriorityFeePerGas: e.gasPriceInWei ? A(e.gasPriceInWei) : null,
              gasLimit: e.gasLimit ? A(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: A(e.weiValue),
              data: S(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? A(e.gasPriceInWei) : null,
              maxFeePerGas: e.maxFeePerGas ? A(e.maxFeePerGas) : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas
                ? A(e.maxPriorityFeePerGas)
                : null,
              gasLimit: e.gasLimit ? A(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: "submitEthereumTransaction",
            params: { signedTransaction: S(e, !0), chainId: t },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        sendRequest(e) {
          let t = null,
            n = E(8),
            s = (s) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, e.method, s),
                null == t || t();
            };
          return new Promise((r, i) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: s,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(n, (e) => {
                if ((null == t || t(), el(e))) return i(Error(e.errorMessage));
                r(e);
              }),
              this.publishWeb3RequestEvent(n, e);
          });
        }
        publishWeb3RequestEvent(e, t) {
          let n = { type: "WEB3_REQUEST", id: e, request: t };
          this.publishEvent("Web3Request", n, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage(n.id, {
                method: t.method,
                errorMessage: e.message,
              });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof tE)
            switch (e) {
              case "requestEthereumAccounts":
              case "switchEthereumChain":
                return;
              default:
                window.addEventListener(
                  "blur",
                  () => {
                    window.addEventListener(
                      "focus",
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            "Web3RequestCanceled",
            { type: "WEB3_REQUEST_CANCELED", id: e },
            !1
          ).then();
        }
        publishEvent(e, t, n) {
          return this.connection.publishEvent(e, t, n);
        }
        handleWeb3ResponseMessage(e, t) {
          if ("requestEthereumAccounts" === t.method) {
            tC.accountRequestCallbackIds.forEach((e) =>
              this.invokeCallback(e, t)
            ),
              tC.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e, t);
        }
        handleErrorResponse(e, t, n) {
          var s;
          let r =
            null != (s = null == n ? void 0 : n.message)
              ? s
              : "Unspecified error message.";
          this.handleWeb3ResponseMessage(e, { method: t, errorMessage: r });
        }
        invokeCallback(e, t) {
          let n = this.relayEventManager.callbacks.get(e);
          n && (n(t), this.relayEventManager.callbacks.delete(e));
        }
        requestEthereumAccounts() {
          let { appName: e, appLogoUrl: t } = this.metadata,
            n = {
              method: "requestEthereumAccounts",
              params: { appName: e, appLogoUrl: t },
            },
            s = E(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(s, (n) => {
              if (el(n)) return t(Error(n.errorMessage));
              e(n);
            }),
              tC.accountRequestCallbackIds.add(s),
              this.publishWeb3RequestEvent(s, n);
          });
        }
        watchAsset(e, t, n, s, r, i) {
          let a = {
              method: "watchAsset",
              params: {
                type: e,
                options: { address: t, symbol: n, decimals: s, image: r },
                chainId: i,
              },
            },
            o = null,
            c = E(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), el(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        addEthereumChain(e, t, n, s, r, i) {
          let a = {
              method: "addEthereumChain",
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: s,
                chainName: r,
                iconUrls: n,
                nativeCurrency: i,
              },
            },
            o = null,
            c = E(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), el(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        switchEthereumChain(e, t) {
          let n = {
              method: "switchEthereumChain",
              params: Object.assign({ chainId: e }, { address: t }),
            },
            s = null,
            r = E(8);
          return (
            (s = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(r),
                  this.handleErrorResponse(r, n.method, e),
                  null == s || s();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(r, (n) =>
                (null == s || s(), el(n) && n.errorCode)
                  ? t(
                      d.provider.custom({
                        code: n.errorCode,
                        message:
                          "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                      })
                    )
                  : el(n)
                  ? t(Error(n.errorMessage))
                  : void e(n)
              ),
                this.publishWeb3RequestEvent(r, n);
            })
          );
        }
      }
      tC.accountRequestCallbackIds = new Set();
      var tx = n(44134).Buffer;
      let tS = "DefaultChainId",
        tM = "DefaultJsonRpcUrl";
      class tA {
        constructor(e) {
          (this._relay = null),
            (this._addresses = []),
            (this.metadata = e.metadata),
            (this._storage = new s("walletlink", tI)),
            (this.callback = e.callback || null);
          let t = this._storage.getItem(ec);
          if (t) {
            let e = t.split(" ");
            "" !== e[0] && (this._addresses = e.map((e) => j(e)));
          }
          this.initializeRelay();
        }
        getSession() {
          let { id: e, secret: t } =
            this.initializeRelay().getWalletLinkSession();
          return { id: e, secret: t };
        }
        async handshake() {
          await this._eth_requestAccounts();
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null != (e = this._storage.getItem(tM)) ? e : void 0;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(tM, e);
        }
        updateProviderInfo(e, t) {
          var n;
          this.jsonRpcUrl = e;
          let s = this.getChainId();
          this._storage.setItem(tS, t.toString(10)),
            U(t) !== s &&
              (null == (n = this.callback) ||
                n.call(this, "chainChanged", P(t)));
        }
        async watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type) throw d.rpc.invalidParams("Type is required");
          if ((null == t ? void 0 : t.type) !== "ERC20")
            throw d.rpc.invalidParams(
              `Asset of type '${t.type}' is not supported`
            );
          if (!(null == t ? void 0 : t.options))
            throw d.rpc.invalidParams("Options are required");
          if (!(null == t ? void 0 : t.options.address))
            throw d.rpc.invalidParams("Address is required");
          let n = this.getChainId(),
            { address: s, symbol: r, image: i, decimals: a } = t.options,
            o = this.initializeRelay(),
            c = await o.watchAsset(
              t.type,
              s,
              r,
              a,
              i,
              null == n ? void 0 : n.toString()
            );
          return !el(c) && !!c.result;
        }
        async addEthereumChain(e) {
          var t, n;
          let s = e[0];
          if ((null == (t = s.rpcUrls) ? void 0 : t.length) === 0)
            throw d.rpc.invalidParams("please pass in at least 1 rpcUrl");
          if (!s.chainName || "" === s.chainName.trim())
            throw d.rpc.invalidParams("chainName is a required field");
          if (!s.nativeCurrency)
            throw d.rpc.invalidParams("nativeCurrency is a required field");
          let r = Number.parseInt(s.chainId, 16);
          if (r === this.getChainId()) return !1;
          let i = this.initializeRelay(),
            {
              rpcUrls: a = [],
              blockExplorerUrls: o = [],
              chainName: c,
              iconUrls: l = [],
              nativeCurrency: u,
            } = s,
            h = await i.addEthereumChain(r.toString(), a, l, o, c, u);
          if (el(h)) return !1;
          if ((null == (n = h.result) ? void 0 : n.isApproved) === !0)
            return this.updateProviderInfo(a[0], r), null;
          throw d.rpc.internal("unable to add ethereum chain");
        }
        async switchEthereumChain(e) {
          let t = Number.parseInt(e[0].chainId, 16),
            n = this.initializeRelay(),
            s = await n.switchEthereumChain(
              t.toString(10),
              this.selectedAddress || void 0
            );
          if (el(s)) throw s;
          let r = s.result;
          return (
            r.isApproved &&
              r.rpcUrl.length > 0 &&
              this.updateProviderInfo(r.rpcUrl, t),
            null
          );
        }
        async cleanup() {
          (this.callback = null),
            this._relay && this._relay.resetAndReload(),
            this._storage.clear();
        }
        _setAddresses(e, t) {
          var n;
          if (!Array.isArray(e)) throw Error("addresses is not an array");
          let s = e.map((e) => j(e));
          JSON.stringify(s) !== JSON.stringify(this._addresses) &&
            ((this._addresses = s),
            null == (n = this.callback) || n.call(this, "accountsChanged", s),
            this._storage.setItem(ec, s.join(" ")));
        }
        async request(e) {
          let t = e.params || [];
          switch (e.method) {
            case "eth_accounts":
              return [...this._addresses];
            case "eth_coinbase":
              return this.selectedAddress || null;
            case "net_version":
              return this.getChainId().toString(10);
            case "eth_chainId":
              return P(this.getChainId());
            case "eth_requestAccounts":
              return this._eth_requestAccounts();
            case "eth_ecRecover":
            case "personal_ecRecover":
              return this.ecRecover(e);
            case "personal_sign":
              return this.personalSign(e);
            case "eth_signTransaction":
              return this._eth_signTransaction(t);
            case "eth_sendRawTransaction":
              return this._eth_sendRawTransaction(t);
            case "eth_sendTransaction":
              return this._eth_sendTransaction(t);
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
              return this.signTypedData(e);
            case "wallet_addEthereumChain":
              return this.addEthereumChain(t);
            case "wallet_switchEthereumChain":
              return this.switchEthereumChain(t);
            case "wallet_watchAsset":
              return this.watchAsset(t);
            default:
              if (!this.jsonRpcUrl)
                throw d.rpc.internal("No RPC URL set for chain");
              return et(e, this.jsonRpcUrl);
          }
        }
        _ensureKnownAddress(e) {
          let t = j(e);
          if (!this._addresses.map((e) => j(e)).includes(t))
            throw Error("Unknown Ethereum address");
        }
        _prepareTransactionParams(e) {
          let t = e.from ? j(e.from) : this.selectedAddress;
          if (!t) throw Error("Ethereum address is unavailable");
          this._ensureKnownAddress(t);
          let n = e.to ? j(e.to) : null,
            s = null != e.value ? W(e.value) : BigInt(0),
            r = e.data ? O(e.data) : tx.alloc(0),
            i = null != e.nonce ? U(e.nonce) : null,
            a = null != e.gasPrice ? W(e.gasPrice) : null,
            o = null != e.maxFeePerGas ? W(e.maxFeePerGas) : null,
            c =
              null != e.maxPriorityFeePerGas ? W(e.maxPriorityFeePerGas) : null;
          return {
            fromAddress: t,
            toAddress: n,
            weiValue: s,
            data: r,
            nonce: i,
            gasPriceInWei: a,
            maxFeePerGas: o,
            maxPriorityFeePerGas: c,
            gasLimit: null != e.gas ? W(e.gas) : null,
            chainId: e.chainId ? U(e.chainId) : this.getChainId(),
          };
        }
        async ecRecover(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw d.rpc.invalidParams();
          let s = this.initializeRelay(),
            r = await s.sendRequest({
              method: "ethereumAddressFromSignedMessage",
              params: {
                message: M(n[0]),
                signature: M(n[1]),
                addPrefix: "personal_ecRecover" === t,
              },
            });
          if (el(r)) throw r;
          return r.result;
        }
        getChainId() {
          var e;
          return Number.parseInt(
            null != (e = this._storage.getItem(tS)) ? e : "1",
            10
          );
        }
        async _eth_requestAccounts() {
          var e, t;
          if (this._addresses.length > 0)
            return (
              null == (e = this.callback) ||
                e.call(this, "connect", { chainId: P(this.getChainId()) }),
              this._addresses
            );
          let n = this.initializeRelay(),
            s = await n.requestEthereumAccounts();
          if (el(s)) throw s;
          if (!s.result) throw Error("accounts received is empty");
          return (
            this._setAddresses(s.result),
            null == (t = this.callback) ||
              t.call(this, "connect", { chainId: P(this.getChainId()) }),
            this._addresses
          );
        }
        async personalSign({ params: e }) {
          if (!Array.isArray(e)) throw d.rpc.invalidParams();
          let t = e[1],
            n = e[0];
          this._ensureKnownAddress(t);
          let s = this.initializeRelay(),
            r = await s.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: j(t),
                message: M(n),
                addPrefix: !0,
                typedDataJson: null,
              },
            });
          if (el(r)) throw r;
          return r.result;
        }
        async _eth_signTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            s = await n.signEthereumTransaction(t);
          if (el(s)) throw s;
          return s.result;
        }
        async _eth_sendRawTransaction(e) {
          let t = O(e[0]),
            n = this.initializeRelay(),
            s = await n.submitEthereumTransaction(t, this.getChainId());
          if (el(s)) throw s;
          return s.result;
        }
        async _eth_sendTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            s = await n.signAndSubmitEthereumTransaction(t);
          if (el(s)) throw s;
          return s.result;
        }
        async signTypedData(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw d.rpc.invalidParams();
          let s = n[+("eth_signTypedData_v1" === t)],
            r = n[+("eth_signTypedData_v1" !== t)];
          this._ensureKnownAddress(s);
          let i = this.initializeRelay(),
            a = await i.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: j(s),
                message: S(
                  {
                    eth_signTypedData_v1: eo.hashForSignTypedDataLegacy,
                    eth_signTypedData_v3: eo.hashForSignTypedData_v3,
                    eth_signTypedData_v4: eo.hashForSignTypedData_v4,
                    eth_signTypedData: eo.hashForSignTypedData_v4,
                  }[t]({
                    data: (function (e) {
                      if ("string" == typeof e) return JSON.parse(e);
                      if ("object" == typeof e) return e;
                      throw d.rpc.invalidParams(
                        `Not a JSON string or an object: ${String(e)}`
                      );
                    })(r),
                  }),
                  !0
                ),
                typedDataJson: JSON.stringify(r, null, 2),
                addPrefix: !1,
              },
            });
          if (el(a)) throw a;
          return a.result;
        }
        initializeRelay() {
          return (
            this._relay ||
              (this._relay = new tC({
                linkAPIUrl: tI,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
              })),
            this._relay
          );
        }
      }
      let tP = "SignerType",
        tL = new s("CBWSDK", "SignerConfigurator");
      async function tN(e) {
        let {
          communicator: t,
          metadata: n,
          handshakeRequest: s,
          callback: r,
        } = e;
        tR(t, n, r).catch(() => {});
        let i = {
            id: crypto.randomUUID(),
            event: "selectSignerType",
            data: Object.assign(Object.assign({}, e.preference), {
              handshakeRequest: s,
            }),
          },
          { data: a } = await t.postRequestAndWaitForResponse(i);
        return a;
      }
      async function tR(e, t, n) {
        await e.onMessage(({ event: e }) => "WalletLinkSessionRequest" === e);
        let s = new tA({ metadata: t, callback: n });
        e.postMessage({
          event: "WalletLinkUpdate",
          data: { session: s.getSession() },
        }),
          await s.handshake(),
          e.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
      }
      let tD = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`,
        { checkCrossOriginOpenerPolicy: tT, getCrossOriginOpenerPolicy: tj } =
          (() => {
            let e;
            return {
              getCrossOriginOpenerPolicy: () =>
                void 0 === e ? "undefined" : e,
              checkCrossOriginOpenerPolicy: async () => {
                if ("undefined" == typeof window) {
                  e = "non-browser-env";
                  return;
                }
                try {
                  let t = `${window.location.origin}${window.location.pathname}`,
                    n = await fetch(t, { method: "HEAD" });
                  if (!n.ok) throw Error(`HTTP error! status: ${n.status}`);
                  let s = n.headers.get("Cross-Origin-Opener-Policy");
                  (e = null != s ? s : "null"),
                    "same-origin" === e && console.error(tD);
                } catch (t) {
                  console.error(
                    "Error checking Cross-Origin-Opener-Policy:",
                    t.message
                  ),
                    (e = "error");
                }
              },
            };
          })(),
        tO = {
          isRed: !1,
          info: "Retry",
          svgWidth: "10",
          svgHeight: "11",
          path: tb,
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
        },
        tU = null;
      class tW {
        constructor({
          url: e = "https://keys.coinbase.com/connect",
          metadata: t,
          preference: n,
        }) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              (await this.waitForPopupLoaded()).postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage(({ requestId: t }) => t === e.id);
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, n) => {
                let s = (n) => {
                  if (n.origin !== this.url.origin) return;
                  let r = n.data;
                  e(r) &&
                    (t(r),
                    window.removeEventListener("message", s),
                    this.listeners.delete(s));
                };
                window.addEventListener("message", s),
                  this.listeners.set(s, { reject: n });
              })),
            (this.disconnect = () => {
              !(function (e) {
                e && !e.closed && e.close();
              })(this.popup),
                (this.popup = null),
                this.listeners.forEach(({ reject: e }, t) => {
                  e(d.provider.userRejectedRequest("Request rejected")),
                    window.removeEventListener("message", t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : ((this.popup = await (function (e) {
                    let t = (window.innerWidth - 420) / 2 + window.screenX,
                      n = (window.innerHeight - 540) / 2 + window.screenY;
                    function s() {
                      let s = `wallet_${crypto.randomUUID()}`,
                        r = window.open(
                          e,
                          s,
                          `width=420, height=540, left=${t}, top=${n}`
                        );
                      return (null == r || r.focus(), r) ? r : null;
                    }
                    var r = e;
                    for (let [e, t] of Object.entries({
                      sdkName: ee,
                      sdkVersion: X,
                      origin: window.location.origin,
                      coop: tj(),
                    }))
                      r.searchParams.append(e, t.toString());
                    let i = s();
                    if (!i) {
                      let e = (function () {
                        if (!tU) {
                          let e = document.createElement("div");
                          (e.className = "-cbwsdk-css-reset"),
                            document.body.appendChild(e),
                            (tU = new tg()).attach(e);
                        }
                        return tU;
                      })();
                      return new Promise((t, n) => {
                        e.presentItem({
                          autoExpand: !0,
                          message: "Popup was blocked. Try again.",
                          menuItems: [
                            Object.assign(Object.assign({}, tO), {
                              onClick: () => {
                                (i = s())
                                  ? t(i)
                                  : n(
                                      d.rpc.internal("Popup window was blocked")
                                    ),
                                  e.clear();
                              },
                            }),
                          ],
                        });
                      });
                    }
                    return Promise.resolve(i);
                  })(this.url)),
                  this.onMessage(({ event: e }) => "PopupUnload" === e)
                    .then(this.disconnect)
                    .catch(() => {}),
                  this.onMessage(({ event: e }) => "PopupLoaded" === e)
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: {
                          version: X,
                          metadata: this.metadata,
                          preference: this.preference,
                          location: window.location.toString(),
                        },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw d.rpc.internal();
                      return this.popup;
                    }))),
            (this.url = new URL(e)),
            (this.metadata = t),
            (this.preference = n);
        }
      }
      var tq = n(83026);
      class tz extends tq {}
      var tK = function (e, t) {
        var n = {};
        for (var s in e)
          Object.prototype.hasOwnProperty.call(e, s) &&
            0 > t.indexOf(s) &&
            (n[s] = e[s]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var r = 0, s = Object.getOwnPropertySymbols(e);
            r < s.length;
            r++
          )
            0 > t.indexOf(s[r]) &&
              Object.prototype.propertyIsEnumerable.call(e, s[r]) &&
              (n[s[r]] = e[s[r]]);
        return n;
      };
      class tH extends tz {
        constructor(e) {
          var { metadata: t } = e,
            n = e.preference,
            { keysUrl: s } = n,
            r = tK(n, ["keysUrl"]);
          super(),
            (this.signer = null),
            (this.isCoinbaseWallet = !0),
            (this.metadata = t),
            (this.preference = r),
            (this.communicator = new tW({
              url: s,
              metadata: t,
              preference: r,
            }));
          let i = tL.getItem(tP);
          i && (this.signer = this.initSigner(i));
        }
        async request(e) {
          try {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw d.rpc.invalidParams({
                message: "Expected a single, non-array, object argument.",
                data: e,
              });
            let { method: t, params: n } = e;
            if ("string" != typeof t || 0 === t.length)
              throw d.rpc.invalidParams({
                message: "'args.method' must be a non-empty string.",
                data: e,
              });
            if (
              void 0 !== n &&
              !Array.isArray(n) &&
              ("object" != typeof n || null === n)
            )
              throw d.rpc.invalidParams({
                message:
                  "'args.params' must be an object or array if provided.",
                data: e,
              });
            switch (t) {
              case "eth_sign":
              case "eth_signTypedData_v2":
              case "eth_subscribe":
              case "eth_unsubscribe":
                throw d.provider.unsupportedMethod();
            }
            if (!this.signer)
              switch (e.method) {
                case "eth_requestAccounts": {
                  let t = await this.requestSignerSelection(e),
                    n = this.initSigner(t);
                  await n.handshake(e), (this.signer = n), tL.setItem(tP, t);
                  break;
                }
                case "wallet_sendCalls": {
                  let t = this.initSigner("scw");
                  await t.handshake({ method: "handshake" });
                  let n = await t.request(e);
                  return await t.cleanup(), n;
                }
                case "wallet_getCallsStatus":
                  return et(e, "https://rpc.wallet.coinbase.com");
                case "net_version":
                  return 1;
                case "eth_chainId":
                  return P(1);
                default:
                  throw d.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
              }
            return await this.signer.request(e);
          } catch (t) {
            let { code: e } = t;
            return (
              e === r.provider.unauthorized && this.disconnect(),
              Promise.reject(
                (function (e) {
                  let t = (function (e, { shouldIncludeStack: t = !1 } = {}) {
                      var n, s;
                      let d = {};
                      if (
                        e &&
                        "object" == typeof e &&
                        !Array.isArray(e) &&
                        l(e, "code") &&
                        Number.isInteger((n = e.code)) &&
                        (i[n.toString()] || ((s = n) >= -32099 && s <= -32e3))
                      )
                        (d.code = e.code),
                          e.message && "string" == typeof e.message
                            ? ((d.message = e.message),
                              l(e, "data") && (d.data = e.data))
                            : ((d.message = o(d.code)),
                              (d.data = { originalError: c(e) }));
                      else
                        (d.code = r.rpc.internal),
                          (d.message = u(e, "message") ? e.message : a),
                          (d.data = { originalError: c(e) });
                      return (
                        t && (d.stack = u(e, "stack") ? e.stack : void 0), d
                      );
                    })(
                      (function (e) {
                        var t;
                        if ("string" == typeof e)
                          return { message: e, code: r.rpc.internal };
                        if (el(e)) {
                          let n = e.errorMessage,
                            s =
                              null != (t = e.errorCode)
                                ? t
                                : n.match(/(denied|rejected)/i)
                                ? r.provider.userRejectedRequest
                                : void 0;
                          return Object.assign(Object.assign({}, e), {
                            message: n,
                            code: s,
                            data: { method: e.method },
                          });
                        }
                        return e;
                      })(e),
                      { shouldIncludeStack: !0 }
                    ),
                    n = new URL(
                      "https://docs.cloud.coinbase.com/wallet-sdk/docs/errors"
                    );
                  return (
                    n.searchParams.set("version", X),
                    n.searchParams.set("code", t.code.toString()),
                    n.searchParams.set("message", t.message),
                    Object.assign(Object.assign({}, t), { docUrl: n.href })
                  );
                })(t)
              )
            );
          }
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async disconnect() {
          var e;
          await (null == (e = this.signer) ? void 0 : e.cleanup()),
            (this.signer = null),
            s.clearAll(),
            this.emit(
              "disconnect",
              d.provider.disconnected("User initiated disconnection")
            );
        }
        requestSignerSelection(e) {
          return tN({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest: e,
            callback: this.emit.bind(this),
          });
        }
        initSigner(e) {
          let {
            signerType: t,
            metadata: n,
            communicator: s,
            callback: r,
          } = {
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
          };
          switch (t) {
            case "scw":
              return new ea({ metadata: n, callback: r, communicator: s });
            case "walletlink":
              return new tA({ metadata: n, callback: r });
          }
        }
      }
      let tF = { options: "all" };
      function tB(e) {
        new s("CBWSDK").setItem("VERSION", X), tT();
        let t = {
          metadata: {
            appName: e.appName || "Dapp",
            appLogoUrl: e.appLogoUrl || "",
            appChainIds: e.appChainIds || [],
          },
          preference: Object.assign(tF, null != (n = e.preference) ? n : {}),
        };
        var n,
          r = t.preference;
        if (r) {
          if (!["all", "smartWalletOnly", "eoaOnly"].includes(r.options))
            throw Error(`Invalid options: ${r.options}`);
          if (
            r.attribution &&
            void 0 !== r.attribution.auto &&
            void 0 !== r.attribution.dataSuffix
          )
            throw Error(
              "Attribution cannot contain both auto and dataSuffix properties"
            );
        }
        let i = null;
        return {
          getProvider: () => (
            i ||
              (i = (function (e) {
                var t;
                let n = { metadata: e.metadata, preference: e.preference };
                return null !=
                  (t = (function ({ metadata: e, preference: t }) {
                    var n, s;
                    let { appName: r, appLogoUrl: i, appChainIds: a } = e;
                    if ("smartWalletOnly" !== t.options) {
                      let e = globalThis.coinbaseWalletExtension;
                      if (e)
                        return (
                          null == (n = e.setAppInfo) || n.call(e, r, i, a, t), e
                        );
                    }
                    let o = (function () {
                      var e, t;
                      try {
                        let n = globalThis;
                        return null != (e = n.ethereum)
                          ? e
                          : null == (t = n.top)
                          ? void 0
                          : t.ethereum;
                      } catch (e) {
                        return;
                      }
                    })();
                    if (null == o ? void 0 : o.isCoinbaseBrowser)
                      return (
                        null == (s = o.setAppInfo) || s.call(o, r, i, a, t), o
                      );
                  })(n))
                  ? t
                  : new tH(n);
              })(t)),
            i
          ),
        };
      }
    },
    8314: (e, t, n) => {
      var s = n(44134).Buffer;
      let r = n(96236),
        i = n(59828),
        a = {
          type: "object",
          properties: {
            types: {
              type: "object",
              additionalProperties: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    type: { type: "string" },
                  },
                  required: ["name", "type"],
                },
              },
            },
            primaryType: { type: "string" },
            domain: { type: "object" },
            message: { type: "object" },
          },
          required: ["types", "primaryType", "domain", "message"],
        },
        o = {
          encodeData(e, t, n, a = !0) {
            let o = ["bytes32"],
              c = [this.hashType(e, n)];
            if (a) {
              let l = (e, t, o) => {
                if (void 0 !== n[t])
                  return [
                    "bytes32",
                    null == o
                      ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                      : r.keccak(this.encodeData(t, o, n, a)),
                  ];
                if (void 0 === o)
                  throw Error(`missing value for field ${e} of type ${t}`);
                if ("bytes" === t) return ["bytes32", r.keccak(o)];
                if ("string" === t)
                  return (
                    "string" == typeof o && (o = s.from(o, "utf8")),
                    ["bytes32", r.keccak(o)]
                  );
                if (t.lastIndexOf("]") === t.length - 1) {
                  let n = t.slice(0, t.lastIndexOf("[")),
                    s = o.map((t) => l(e, n, t));
                  return [
                    "bytes32",
                    r.keccak(
                      i.rawEncode(
                        s.map(([e]) => e),
                        s.map(([, e]) => e)
                      )
                    ),
                  ];
                }
                return [t, o];
              };
              for (let s of n[e]) {
                let [e, n] = l(s.name, s.type, t[s.name]);
                o.push(e), c.push(n);
              }
            } else
              for (let i of n[e]) {
                let e = t[i.name];
                if (void 0 !== e)
                  if ("bytes" === i.type)
                    o.push("bytes32"), (e = r.keccak(e)), c.push(e);
                  else if ("string" === i.type)
                    o.push("bytes32"),
                      "string" == typeof e && (e = s.from(e, "utf8")),
                      (e = r.keccak(e)),
                      c.push(e);
                  else if (void 0 !== n[i.type])
                    o.push("bytes32"),
                      (e = r.keccak(this.encodeData(i.type, e, n, a))),
                      c.push(e);
                  else if (i.type.lastIndexOf("]") === i.type.length - 1)
                    throw Error("Arrays currently unimplemented in encodeData");
                  else o.push(i.type), c.push(e);
              }
            return i.rawEncode(o, c);
          },
          encodeType(e, t) {
            let n = "",
              s = this.findTypeDependencies(e, t).filter((t) => t !== e);
            for (let r of (s = [e].concat(s.sort()))) {
              if (!t[r]) throw Error("No type definition specified: " + r);
              n +=
                r +
                "(" +
                t[r].map(({ name: e, type: t }) => t + " " + e).join(",") +
                ")";
            }
            return n;
          },
          findTypeDependencies(e, t, n = []) {
            if (((e = e.match(/^\w*/)[0]), n.includes(e) || void 0 === t[e]))
              return n;
            for (let s of (n.push(e), t[e]))
              for (let e of this.findTypeDependencies(s.type, t, n))
                n.includes(e) || n.push(e);
            return n;
          },
          hashStruct(e, t, n, s = !0) {
            return r.keccak(this.encodeData(e, t, n, s));
          },
          hashType(e, t) {
            return r.keccak(this.encodeType(e, t));
          },
          sanitizeData(e) {
            let t = {};
            for (let n in a.properties) e[n] && (t[n] = e[n]);
            return (
              t.types &&
                (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
              t
            );
          },
          hash(e, t = !0) {
            let n = this.sanitizeData(e),
              i = [s.from("1901", "hex")];
            return (
              i.push(this.hashStruct("EIP712Domain", n.domain, n.types, t)),
              "EIP712Domain" !== n.primaryType &&
                i.push(this.hashStruct(n.primaryType, n.message, n.types, t)),
              r.keccak(s.concat(i))
            );
          },
        };
      e.exports = {
        TYPED_MESSAGE_SCHEMA: a,
        TypedDataUtils: o,
        hashForSignTypedDataLegacy: function (e) {
          return (function (e) {
            let t = Error("Expect argument to be non-empty array");
            if ("object" != typeof e || !e.length) throw t;
            let n = e.map(function (e) {
                return "bytes" === e.type ? r.toBuffer(e.value) : e.value;
              }),
              s = e.map(function (e) {
                return e.type;
              }),
              a = e.map(function (e) {
                if (!e.name) throw t;
                return e.type + " " + e.name;
              });
            return i.soliditySHA3(
              ["bytes32", "bytes32"],
              [
                i.soliditySHA3(Array(e.length).fill("string"), a),
                i.soliditySHA3(s, n),
              ]
            );
          })(e.data);
        },
        hashForSignTypedData_v3: function (e) {
          return o.hash(e.data, !1);
        },
        hashForSignTypedData_v4: function (e) {
          return o.hash(e.data);
        },
      };
    },
    59828: (e, t, n) => {
      var s = n(44134).Buffer;
      let r = n(96236);
      function i(e) {
        if (e.startsWith("int[")) return "int256" + e.slice(3);
        if ("int" === e) return "int256";
        if (e.startsWith("uint[")) return "uint256" + e.slice(4);
        if ("uint" === e) return "uint256";
        if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
        else if ("fixed" === e) return "fixed128x128";
        else if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
        else if ("ufixed" === e) return "ufixed128x128";
        return e;
      }
      function a(e) {
        return Number.parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }
      function o(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [Number.parseInt(t[1], 10), Number.parseInt(t[2], 10)];
      }
      function c(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? ("" === t[2] ? "dynamic" : Number.parseInt(t[2], 10)) : null;
      }
      function l(e) {
        var t = typeof e;
        if ("string" === t || "number" === t) return BigInt(e);
        if ("bigint" === t) return e;
        throw Error("Argument is not a number");
      }
      function u(e, t) {
        if ("address" === e) return u("uint160", l(t));
        if ("bool" === e) return u("uint8", +!!t);
        if ("string" === e) return u("bytes", new s(t, "utf8"));
        if ((p = e).lastIndexOf("]") === p.length - 1) {
          if (void 0 === t.length) throw Error("Not an array?");
          if ("dynamic" !== (n = c(e)) && 0 !== n && t.length > n)
            throw Error("Elements exceed array size: " + n);
          for (h in ((d = []),
          (e = e.slice(0, e.lastIndexOf("["))),
          "string" == typeof t && (t = JSON.parse(t)),
          t))
            d.push(u(e, t[h]));
          if ("dynamic" === n) {
            var n,
              i,
              d,
              h,
              p,
              f = u("uint256", t.length);
            d.unshift(f);
          }
          return s.concat(d);
        } else if ("bytes" === e)
          return (
            (t = new s(t)),
            (d = s.concat([u("uint256", t.length), t])),
            t.length % 32 != 0 &&
              (d = s.concat([d, r.zeros(32 - (t.length % 32))])),
            d
          );
        else if (e.startsWith("bytes")) {
          if ((n = a(e)) < 1 || n > 32)
            throw Error("Invalid bytes<N> width: " + n);
          return r.setLengthRight(t, 32);
        } else if (e.startsWith("uint")) {
          if ((n = a(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid uint<N> width: " + n);
          i = l(t);
          let s = r.bitLengthFromBigInt(i);
          if (s > n)
            throw Error("Supplied uint exceeds width: " + n + " vs " + s);
          if (i < 0) throw Error("Supplied uint is negative");
          return r.bufferBEFromBigInt(i, 32);
        } else if (e.startsWith("int")) {
          if ((n = a(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid int<N> width: " + n);
          i = l(t);
          let s = r.bitLengthFromBigInt(i);
          if (s > n)
            throw Error("Supplied int exceeds width: " + n + " vs " + s);
          let o = r.twosFromBigInt(i, 256);
          return r.bufferBEFromBigInt(o, 32);
        } else if (e.startsWith("ufixed")) {
          if (((n = o(e)), (i = l(t)) < 0))
            throw Error("Supplied ufixed is negative");
          return u("uint256", i * BigInt(2) ** BigInt(n[1]));
        } else if (e.startsWith("fixed"))
          return (n = o(e)), u("int256", l(t) * BigInt(2) ** BigInt(n[1]));
        throw Error("Unsupported or invalid type: " + e);
      }
      function d(e, t) {
        if (e.length !== t.length)
          throw Error("Number of types are not matching the values");
        for (var n, o, c = [], u = 0; u < e.length; u++) {
          var d = i(e[u]),
            h = t[u];
          if ("bytes" === d) c.push(h);
          else if ("string" === d) c.push(new s(h, "utf8"));
          else if ("bool" === d) c.push(new s(h ? "01" : "00", "hex"));
          else if ("address" === d) c.push(r.setLength(h, 20));
          else if (d.startsWith("bytes")) {
            if ((n = a(d)) < 1 || n > 32)
              throw Error("Invalid bytes<N> width: " + n);
            c.push(r.setLengthRight(h, n));
          } else if (d.startsWith("uint")) {
            if ((n = a(d)) % 8 || n < 8 || n > 256)
              throw Error("Invalid uint<N> width: " + n);
            o = l(h);
            let e = r.bitLengthFromBigInt(o);
            if (e > n)
              throw Error("Supplied uint exceeds width: " + n + " vs " + e);
            c.push(r.bufferBEFromBigInt(o, n / 8));
          } else if (d.startsWith("int")) {
            if ((n = a(d)) % 8 || n < 8 || n > 256)
              throw Error("Invalid int<N> width: " + n);
            o = l(h);
            let e = r.bitLengthFromBigInt(o);
            if (e > n)
              throw Error("Supplied int exceeds width: " + n + " vs " + e);
            let t = r.twosFromBigInt(o, n);
            c.push(r.bufferBEFromBigInt(t, n / 8));
          } else throw Error("Unsupported or invalid type: " + d);
        }
        return s.concat(c);
      }
      e.exports = {
        rawEncode: function (e, t) {
          var n = [],
            r = [],
            a = 32 * e.length;
          for (var o in e) {
            var l = i(e[o]),
              d = u(l, t[o]);
            "string" === l || "bytes" === l || "dynamic" === c(l)
              ? (n.push(u("uint256", a)), r.push(d), (a += d.length))
              : n.push(d);
          }
          return s.concat(n.concat(r));
        },
        solidityPack: d,
        soliditySHA3: function (e, t) {
          return r.keccak(d(e, t));
        },
      };
    },
    60627: (e, t, n) => {
      "use strict";
      e.exports = n.p + "static/media/HeartbeatWorker.3ef8cf74.js";
    },
    83026: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function s() {}
      function r(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function i(e, t, s, i, a) {
        if ("function" != typeof s)
          throw TypeError("The listener must be a function");
        var o = new r(s, i || e, a),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], o])
              : e._events[c].push(o)
            : ((e._events[c] = o), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new s()) : delete e._events[t];
      }
      function o() {
        (this._events = new s()), (this._eventsCount = 0);
      }
      Object.create &&
        ((s.prototype = Object.create(null)), new s().__proto__ || (n = !1)),
        (o.prototype.eventNames = function () {
          var e,
            s,
            r = [];
          if (0 === this._eventsCount) return r;
          for (s in (e = this._events))
            t.call(e, s) && r.push(n ? s.slice(1) : s);
          return Object.getOwnPropertySymbols
            ? r.concat(Object.getOwnPropertySymbols(e))
            : r;
        }),
        (o.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            s = this._events[t];
          if (!s) return [];
          if (s.fn) return [s.fn];
          for (var r = 0, i = s.length, a = Array(i); r < i; r++)
            a[r] = s[r].fn;
          return a;
        }),
        (o.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            s = this._events[t];
          return s ? (s.fn ? 1 : s.length) : 0;
        }),
        (o.prototype.emit = function (e, t, s, r, i, a) {
          var o = n ? n + e : e;
          if (!this._events[o]) return !1;
          var c,
            l,
            u = this._events[o],
            d = arguments.length;
          if (u.fn) {
            switch ((u.once && this.removeListener(e, u.fn, void 0, !0), d)) {
              case 1:
                return u.fn.call(u.context), !0;
              case 2:
                return u.fn.call(u.context, t), !0;
              case 3:
                return u.fn.call(u.context, t, s), !0;
              case 4:
                return u.fn.call(u.context, t, s, r), !0;
              case 5:
                return u.fn.call(u.context, t, s, r, i), !0;
              case 6:
                return u.fn.call(u.context, t, s, r, i, a), !0;
            }
            for (l = 1, c = Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
            u.fn.apply(u.context, c);
          } else {
            var h,
              p = u.length;
            for (l = 0; l < p; l++)
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
                  u[l].fn.call(u[l].context, t, s);
                  break;
                case 4:
                  u[l].fn.call(u[l].context, t, s, r);
                  break;
                default:
                  if (!c)
                    for (h = 1, c = Array(d - 1); h < d; h++)
                      c[h - 1] = arguments[h];
                  u[l].fn.apply(u[l].context, c);
              }
          }
          return !0;
        }),
        (o.prototype.on = function (e, t, n) {
          return i(this, e, t, n, !1);
        }),
        (o.prototype.once = function (e, t, n) {
          return i(this, e, t, n, !0);
        }),
        (o.prototype.removeListener = function (e, t, s, r) {
          var i = n ? n + e : e;
          if (!this._events[i]) return this;
          if (!t) return a(this, i), this;
          var o = this._events[i];
          if (o.fn)
            o.fn !== t ||
              (r && !o.once) ||
              (s && o.context !== s) ||
              a(this, i);
          else {
            for (var c = 0, l = [], u = o.length; c < u; c++)
              (o[c].fn !== t ||
                (r && !o[c].once) ||
                (s && o[c].context !== s)) &&
                l.push(o[c]);
            l.length
              ? (this._events[i] = 1 === l.length ? l[0] : l)
              : a(this, i);
          }
          return this;
        }),
        (o.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && a(this, t))
              : ((this._events = new s()), (this._eventsCount = 0)),
            this
          );
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.addListener = o.prototype.on),
        (o.prefixed = n),
        (o.EventEmitter = o),
        (e.exports = o);
    },
    96236: (e, t, n) => {
      var s = n(44134).Buffer;
      let { keccak_256: r } = n(91034);
      function i(e) {
        return s.allocUnsafe(e).fill(0);
      }
      function a(e, t) {
        let n = e.toString(16);
        n.length % 2 != 0 && (n = "0" + n);
        let r = n.match(/.{1,2}/g).map((e) => parseInt(e, 16));
        for (; r.length < t; ) r.unshift(0);
        return s.from(r);
      }
      function o(e, t, n) {
        let s = i(t);
        return ((e = c(e)), n)
          ? e.length < t
            ? (e.copy(s), s)
            : e.slice(0, t)
          : e.length < t
          ? (e.copy(s, t - e.length), s)
          : e.slice(-t);
      }
      function c(e) {
        if (!s.isBuffer(e))
          if (Array.isArray(e)) e = s.from(e);
          else if ("string" == typeof e) {
            var t;
            e = l(e)
              ? s.from((t = u(e)).length % 2 ? "0" + t : t, "hex")
              : s.from(e);
          } else if ("number" == typeof e) e = intToBuffer(e);
          else if (null == e) e = s.allocUnsafe(0);
          else if ("bigint" == typeof e) e = a(e);
          else if (e.toArray) e = s.from(e.toArray());
          else throw Error("invalid type");
        return e;
      }
      function l(e) {
        return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
      }
      function u(e) {
        return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
      }
      e.exports = {
        zeros: i,
        setLength: o,
        setLengthRight: function (e, t) {
          return o(e, t, !0);
        },
        isHexString: l,
        stripHexPrefix: u,
        toBuffer: c,
        bufferToHex: function (e) {
          return "0x" + (e = c(e)).toString("hex");
        },
        keccak: function (e, t) {
          if (((e = c(e)), t || (t = 256), 256 !== t))
            throw Error("unsupported");
          return s.from(r(new Uint8Array(e)));
        },
        bitLengthFromBigInt: function (e) {
          return e.toString(2).length;
        },
        bufferBEFromBigInt: a,
        twosFromBigInt: function (e, t) {
          let n;
          return (
            (e < 0n ? (~e & ((1n << BigInt(t)) - 1n)) + 1n : e) &
            ((1n << BigInt(t)) - 1n)
          );
        },
      };
    },
  },
]);
