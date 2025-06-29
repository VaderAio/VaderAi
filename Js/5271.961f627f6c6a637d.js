(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5271],
  {
    621: (e, t) => {
      "use strict";
      function r(e) {
        let t;
        return (
          "undefined" != typeof window &&
            void 0 !== window[e] &&
            (t = window[e]),
          t
        );
      }
      function i(e) {
        let t = r(e);
        if (!t) throw Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
            void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = i),
        (t.getDocumentOrThrow = function () {
          return i("document");
        }),
        (t.getDocument = function () {
          return r("document");
        }),
        (t.getNavigatorOrThrow = function () {
          return i("navigator");
        }),
        (t.getNavigator = function () {
          return r("navigator");
        }),
        (t.getLocationOrThrow = function () {
          return i("location");
        }),
        (t.getLocation = function () {
          return r("location");
        }),
        (t.getCryptoOrThrow = function () {
          return i("crypto");
        }),
        (t.getCrypto = function () {
          return r("crypto");
        }),
        (t.getLocalStorageOrThrow = function () {
          return i("localStorage");
        }),
        (t.getLocalStorage = function () {
          return r("localStorage");
        });
    },
    2671: (e, t, r) => {
      "use strict";
      let i;
      function s(e) {
        return new Promise((t, r) => {
          (e.oncomplete = e.onsuccess = () => t(e.result)),
            (e.onabort = e.onerror = () => r(e.error));
        });
      }
      function n(e, t) {
        let r,
          i = () => {
            if (r) return r;
            let i = indexedDB.open(e);
            return (
              (i.onupgradeneeded = () => i.result.createObjectStore(t)),
              (r = s(i)).then(
                (e) => {
                  e.onclose = () => (r = void 0);
                },
                () => {}
              ),
              r
            );
          };
        return (e, r) => i().then((i) => r(i.transaction(t, e).objectStore(t)));
      }
      function o() {
        return i || (i = n("keyval-store", "keyval")), i;
      }
      function a(e, t = o()) {
        return t("readonly", (t) => s(t.get(e)));
      }
      function c(e, t, r = o()) {
        return r("readwrite", (r) => (r.put(t, e), s(r.transaction)));
      }
      function l(e, t = o()) {
        return t("readwrite", (t) => (t.delete(e), s(t.transaction)));
      }
      function h(e = o()) {
        return e("readwrite", (e) => (e.clear(), s(e.transaction)));
      }
      r.d(t, {
        HP: () => u,
        IU: () => h,
        Jt: () => a,
        hZ: () => c,
        y$: () => n,
        yH: () => l,
      });
      function u(e = o()) {
        return e("readonly", (e) => {
          var t, r;
          if (e.getAllKeys) return s(e.getAllKeys());
          let i = [];
          return ((t = e),
          (r = (e) => i.push(e.key)),
          (t.openCursor().onsuccess = function () {
            this.result && (r(this.result), this.result.continue());
          }),
          s(t.transaction)).then(() => i);
        });
      }
    },
    5271: (e, t, r) => {
      "use strict";
      r.d(t, { EthereumProvider: () => hB });
      var i = r(40662),
        s = r.n(i),
        n = r(42221),
        o = r(89101),
        a = r(621),
        c = r(28094);
      let l = "2.23.2",
        h = {
          getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: r }) =>
            t ? `${e ?? "https://viem.sh"}${t}${r ? `#${r}` : ""}` : void 0,
          version: `viem@${l}`,
        };
      class u extends Error {
        constructor(e, t = {}) {
          let r =
              t.cause instanceof u
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            i = (t.cause instanceof u && t.cause.docsPath) || t.docsPath,
            s = h.getDocsUrl?.({ ...t, docsPath: i });
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(s ? [`Docs: ${s}`] : []),
              ...(r ? [`Details: ${r}`] : []),
              ...(h.version ? [`Version: ${h.version}`] : []),
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
            (this.details = r),
            (this.docsPath = i),
            (this.metaMessages = t.metaMessages),
            (this.name = t.name ?? this.name),
            (this.shortMessage = e),
            (this.version = l);
        }
        walk(e) {
          return (function e(t, r) {
            return r?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
              ? e(t.cause, r)
              : r
              ? null
              : t;
          })(this, e);
        }
      }
      function d(e, { strict: t = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
      class p extends u {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      }
      function f(e, { dir: t, size: r = 32 } = {}) {
        return "string" == typeof e
          ? (function (e, { dir: t, size: r = 32 } = {}) {
              if (null === r) return e;
              let i = e.replace("0x", "");
              if (i.length > 2 * r)
                throw new p({
                  size: Math.ceil(i.length / 2),
                  targetSize: r,
                  type: "hex",
                });
              return `0x${i["right" === t ? "padEnd" : "padStart"](
                2 * r,
                "0"
              )}`;
            })(e, { dir: t, size: r })
          : (function (e, { dir: t, size: r = 32 } = {}) {
              if (null === r) return e;
              if (e.length > r)
                throw new p({ size: e.length, targetSize: r, type: "bytes" });
              let i = new Uint8Array(r);
              for (let s = 0; s < r; s++) {
                let n = "right" === t;
                i[n ? s : r - s - 1] = e[n ? s : e.length - s - 1];
              }
              return i;
            })(e, { dir: t, size: r });
      }
      class g extends u {
        constructor({ max: e, min: t, signed: r, size: i, value: s }) {
          super(
            `Number "${s}" is not in safe ${
              i ? `${8 * i}-bit ${r ? "signed" : "unsigned"} ` : ""
            }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class y extends u {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
      function m(e) {
        return d(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
      }
      function b(e, { size: t }) {
        if (m(e) > t) throw new y({ givenSize: m(e), maxSize: t });
      }
      function w(e, t = {}) {
        let { signed: r } = t;
        t.size && b(e, { size: t.size });
        let i = BigInt(e);
        if (!r) return i;
        let s = (e.length - 2) / 2;
        return i <= (1n << (8n * BigInt(s) - 1n)) - 1n
          ? i
          : i - BigInt(`0x${"f".padStart(2 * s, "f")}`) - 1n;
      }
      let v = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function E(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? _(e, t)
          : "string" == typeof e
          ? (function (e, t = {}) {
              return I(x.encode(e), t);
            })(e, t)
          : "boolean" == typeof e
          ? (function (e, t = {}) {
              let r = `0x${Number(e)}`;
              return "number" == typeof t.size
                ? (b(r, { size: t.size }), f(r, { size: t.size }))
                : r;
            })(e, t)
          : I(e, t);
      }
      function I(e, t = {}) {
        let r = "";
        for (let t = 0; t < e.length; t++) r += v[e[t]];
        let i = `0x${r}`;
        return "number" == typeof t.size
          ? (b(i, { size: t.size }), f(i, { dir: "right", size: t.size }))
          : i;
      }
      function _(e, t = {}) {
        let r,
          { signed: i, size: s } = t,
          n = BigInt(e);
        s
          ? (r = i
              ? (1n << (8n * BigInt(s) - 1n)) - 1n
              : 2n ** (8n * BigInt(s)) - 1n)
          : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let o = "bigint" == typeof r && i ? -r - 1n : 0;
        if ((r && n > r) || n < o) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new g({
            max: r ? `${r}${t}` : void 0,
            min: `${o}${t}`,
            signed: i,
            size: s,
            value: `${e}${t}`,
          });
        }
        let a = `0x${(i && n < 0
          ? (1n << BigInt(8 * s)) + BigInt(n)
          : n
        ).toString(16)}`;
        return s ? f(a, { size: s }) : a;
      }
      let x = new TextEncoder(),
        D = new TextEncoder(),
        P = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function S(e) {
        return e >= P.zero && e <= P.nine
          ? e - P.zero
          : e >= P.A && e <= P.F
          ? e - (P.A - 10)
          : e >= P.a && e <= P.f
          ? e - (P.a - 10)
          : void 0;
      }
      function O(e, t = {}) {
        let r = e;
        t.size &&
          (b(r, { size: t.size }), (r = f(r, { dir: "right", size: t.size })));
        let i = r.slice(2);
        i.length % 2 && (i = `0${i}`);
        let s = i.length / 2,
          n = new Uint8Array(s);
        for (let e = 0, t = 0; e < s; e++) {
          let r = S(i.charCodeAt(t++)),
            s = S(i.charCodeAt(t++));
          if (void 0 === r || void 0 === s)
            throw new u(
              `Invalid byte sequence ("${i[t - 2]}${i[t - 1]}" in "${i}").`
            );
          n[e] = 16 * r + s;
        }
        return n;
      }
      function A(e, t = {}) {
        let r = D.encode(e);
        return "number" == typeof t.size
          ? (b(r, { size: t.size }), f(r, { dir: "right", size: t.size }))
          : r;
      }
      var C = r(61947);
      let R = BigInt(0x100000000 - 1),
        T = BigInt(32),
        N = (e, t, r) => (e << r) | (t >>> (32 - r)),
        j = (e, t, r) => (t << r) | (e >>> (32 - r)),
        U = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        L = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
      var k = r(28185);
      let q = [],
        B = [],
        $ = [],
        M = BigInt(0),
        z = BigInt(1),
        F = BigInt(2),
        H = BigInt(7),
        V = BigInt(256),
        K = BigInt(113);
      for (let e = 0, t = z, r = 1, i = 0; e < 24; e++) {
        ([r, i] = [i, (2 * r + 3 * i) % 5]),
          q.push(2 * (5 * i + r)),
          B.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = M;
        for (let e = 0; e < 7; e++)
          (t = ((t << z) ^ ((t >> H) * K)) % V) & F &&
            (s ^= z << ((z << BigInt(e)) - z));
        $.push(s);
      }
      let [W, J] = (function (e, t = !1) {
          let r = new Uint32Array(e.length),
            i = new Uint32Array(e.length);
          for (let s = 0; s < e.length; s++) {
            let { h: n, l: o } = (function (e, t = !1) {
              return t
                ? { h: Number(e & R), l: Number((e >> T) & R) }
                : { h: 0 | Number((e >> T) & R), l: 0 | Number(e & R) };
            })(e[s], t);
            [r[s], i[s]] = [n, o];
          }
          return [r, i];
        })($, !0),
        G = (e, t, r) => (r > 32 ? U(e, t, r) : N(e, t, r)),
        Y = (e, t, r) => (r > 32 ? L(e, t, r) : j(e, t, r));
      class Z extends k.Vw {
        constructor(e, t, r, i = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, C.Fe)(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, k.DH)(this.state));
        }
        keccak() {
          k.qv || (0, k.Fc)(this.state32),
            (function (e, t = 24) {
              let r = new Uint32Array(10);
              for (let i = 24 - t; i < 24; i++) {
                for (let t = 0; t < 10; t++)
                  r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let i = (t + 8) % 10,
                    s = (t + 2) % 10,
                    n = r[s],
                    o = r[s + 1],
                    a = G(n, o, 1) ^ r[i],
                    c = Y(n, o, 1) ^ r[i + 1];
                  for (let r = 0; r < 50; r += 10)
                    (e[t + r] ^= a), (e[t + r + 1] ^= c);
                }
                let t = e[2],
                  s = e[3];
                for (let r = 0; r < 24; r++) {
                  let i = B[r],
                    n = G(t, s, i),
                    o = Y(t, s, i),
                    a = q[r];
                  (t = e[a]), (s = e[a + 1]), (e[a] = n), (e[a + 1] = o);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let i = 0; i < 10; i++) r[i] = e[t + i];
                  for (let i = 0; i < 10; i++)
                    e[t + i] ^= ~r[(i + 2) % 10] & r[(i + 4) % 10];
                }
                (e[0] ^= W[i]), (e[1] ^= J[i]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            k.qv || (0, k.Fc)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, C.CC)(this);
          let { blockLen: t, state: r } = this,
            i = (e = (0, k.ZJ)(e)).length;
          for (let s = 0; s < i; ) {
            let n = Math.min(t - this.pos, i - s);
            for (let t = 0; t < n; t++) r[this.pos++] ^= e[s++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: r, blockLen: i } = this;
          (e[r] ^= t),
            (128 & t) != 0 && r === i - 1 && this.keccak(),
            (e[i - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, C.CC)(this, !1), (0, C.DO)(e), this.finish();
          let t = this.state,
            { blockLen: r } = this;
          for (let i = 0, s = e.length; i < s; ) {
            this.posOut >= r && this.keccak();
            let n = Math.min(r - this.posOut, s - i);
            e.set(t.subarray(this.posOut, this.posOut + n), i),
              (this.posOut += n),
              (i += n);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, C.Fe)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, C.Ht)(e, this), this.finished))
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
            suffix: r,
            outputLen: i,
            rounds: s,
            enableXOF: n,
          } = this;
          return (
            e || (e = new Z(t, r, i, n, s)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = s),
            (e.suffix = r),
            (e.outputLen = i),
            (e.enableXOF = n),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let Q = (0, k.ld)(() => new Z(136, 1, 32));
      function X(e, t) {
        let r = Q(
          d(e, { strict: !1 })
            ? (function (e, t = {}) {
                return "number" == typeof e || "bigint" == typeof e
                  ? O(_(e, t))
                  : "boolean" == typeof e
                  ? (function (e, t = {}) {
                      let r = new Uint8Array(1);
                      return ((r[0] = Number(e)), "number" == typeof t.size)
                        ? (b(r, { size: t.size }), f(r, { size: t.size }))
                        : r;
                    })(e, t)
                  : d(e)
                  ? O(e, t)
                  : A(e, t);
              })(e)
            : e
        );
        return "bytes" === (t || "hex") ? r : E(r);
      }
      class ee extends Map {
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
      let et = new ee(8192);
      async function er({ hash: e, signature: t }) {
        let i = d(e) ? e : E(e),
          { secp256k1: s } = await r.e(1753).then(r.bind(r, 51753)),
          n = (() => {
            if ("object" == typeof t && "r" in t && "s" in t) {
              let { r: e, s: r, v: i, yParity: n } = t,
                o = ei(Number(n ?? i));
              return new s.Signature(w(e), w(r)).addRecoveryBit(o);
            }
            let e = d(t) ? t : E(t),
              r = ei(
                (function (e, t = {}) {
                  return Number(w(e, t));
                })(`0x${e.slice(130)}`)
              );
            return s.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(
              r
            );
          })()
            .recoverPublicKey(i.substring(2))
            .toHex(!1);
        return `0x${n}`;
      }
      function ei(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function es({ hash: e, signature: t }) {
        var r = await er({ hash: e, signature: t });
        let i = X(`0x${r.substring(4)}`).substring(26);
        return (function (e, t) {
          if (et.has(`${e}.${void 0}`)) return et.get(`${e}.${t}`);
          let r = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
            i = X(A(r), "bytes"),
            s = (t ? r.substring(`${t}0x`.length) : r).split("");
          for (let e = 0; e < 40; e += 2)
            i[e >> 1] >> 4 >= 8 && s[e] && (s[e] = s[e].toUpperCase()),
              (15 & i[e >> 1]) >= 8 &&
                s[e + 1] &&
                (s[e + 1] = s[e + 1].toUpperCase());
          let n = `0x${s.join("")}`;
          return et.set(`${e}.${t}`, n), n;
        })(`0x${i}`);
      }
      var en = r(42552),
        eo = r(30565),
        ea = r(31507),
        ec = r(10973),
        el = r(49509),
        eh = r(44134).Buffer;
      function eu(e) {
        let [t, r] = e.split(":");
        return { namespace: t, reference: r };
      }
      function ed(e) {
        let [t, r, i] = e.split(":");
        return { namespace: t, reference: r, address: i };
      }
      function ep(e, t = []) {
        let r = [];
        return (
          Object.keys(e).forEach((i) => {
            if (t.length && !t.includes(i)) return;
            let s = e[i];
            r.push(...s.accounts);
          }),
          r
        );
      }
      function ef(e, t) {
        return e.includes(":") ? [e] : t.chains || [];
      }
      var eg = Object.defineProperty,
        ey = Object.defineProperties,
        em = Object.getOwnPropertyDescriptors,
        eb = Object.getOwnPropertySymbols,
        ew = Object.prototype.hasOwnProperty,
        ev = Object.prototype.propertyIsEnumerable,
        eE = (e, t, r) =>
          t in e
            ? eg(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        eI = (e, t) => {
          for (var r in t || (t = {})) ew.call(t, r) && eE(e, r, t[r]);
          if (eb) for (var r of eb(t)) ev.call(t, r) && eE(e, r, t[r]);
          return e;
        },
        e_ = (e, t) => ey(e, em(t));
      let ex = {
        reactNative: "react-native",
        node: "node",
        browser: "browser",
        unknown: "unknown",
      };
      function eD() {
        return (
          "u" > typeof el &&
          "u" > typeof el.versions &&
          "u" > typeof el.versions.node
        );
      }
      function eP() {
        return (
          !(0, a.getDocument)() &&
          !!(0, a.getNavigator)() &&
          "ReactNative" === navigator.product
        );
      }
      function eS() {
        return !eD() && !!(0, a.getNavigator)() && !!(0, a.getDocument)();
      }
      function eO() {
        return eP()
          ? ex.reactNative
          : eD()
          ? ex.node
          : eS()
          ? ex.browser
          : ex.unknown;
      }
      function eA() {
        var e;
        try {
          return eP() &&
            "u" > typeof r.g &&
            "u" > typeof (null == r.g ? void 0 : r.g.Application)
            ? null == (e = r.g.Application)
              ? void 0
              : e.applicationId
            : void 0;
        } catch {
          return;
        }
      }
      function eC() {
        return (
          (0, c.g)() || { name: "", description: "", url: "", icons: [""] }
        );
      }
      function eR(e, t, i) {
        let s = (function () {
            if (
              eO() === ex.reactNative &&
              "u" > typeof r.g &&
              "u" > typeof (null == r.g ? void 0 : r.g.Platform)
            ) {
              let { OS: e, Version: t } = r.g.Platform;
              return [e, t].join("-");
            }
            let e = (0, n.o0)();
            if (null === e) return "unknown";
            let t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
            return "browser" === e.type
              ? [t, e.name, e.version].join("-")
              : [t, e.version].join("-");
          })(),
          o = (function () {
            var e;
            let t = eO();
            return t === ex.browser
              ? [
                  t,
                  (null == (e = (0, a.getLocation)()) ? void 0 : e.host) ||
                    "unknown",
                ].join(":")
              : t;
          })();
        return [[e, t].join("-"), ["js", i].join("-"), s, o].join("/");
      }
      function eT(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function eN(e) {
        return Object.fromEntries(e.entries());
      }
      function ej(e) {
        return new Map(Object.entries(e));
      }
      function eU(e = o.FIVE_MINUTES, t) {
        let r,
          i,
          s,
          n,
          a = (0, o.toMiliseconds)(e || o.FIVE_MINUTES);
        return {
          resolve: (e) => {
            s && r && (clearTimeout(s), r(e), (n = Promise.resolve(e)));
          },
          reject: (e) => {
            s && i && (clearTimeout(s), i(e));
          },
          done: () =>
            new Promise((e, o) => {
              if (n) return e(n);
              (s = setTimeout(() => {
                let e = Error(t);
                (n = Promise.reject(e)), o(e);
              }, a)),
                (r = e),
                (i = o);
            }),
        };
      }
      function eL(e, t, r) {
        return new Promise(async (i, s) => {
          let n = setTimeout(() => s(Error(r)), t);
          try {
            let t = await e;
            i(t);
          } catch (e) {
            s(e);
          }
          clearTimeout(n);
        });
      }
      function ek(e, t) {
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
      function eq(e) {
        let [t, r] = e.split(":"),
          i = { id: void 0, topic: void 0 };
        if ("topic" === t && "string" == typeof r) i.topic = r;
        else if ("id" === t && Number.isInteger(Number(r))) i.id = Number(r);
        else
          throw Error(
            `Invalid target, expected id:number or topic:string, got ${t}:${r}`
          );
        return i;
      }
      function eB(e, t) {
        return (0, o.fromMiliseconds)(
          (t || Date.now()) + (0, o.toMiliseconds)(e)
        );
      }
      function e$(e) {
        return Date.now() >= (0, o.toMiliseconds)(e);
      }
      function eM(e, t) {
        return `${e}${t ? `:${t}` : ""}`;
      }
      function ez(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      async function eF({ id: e, topic: t, wcDeepLink: i }) {
        var s, n;
        try {
          if (!i) return;
          let o = "string" == typeof i ? JSON.parse(i) : i,
            c = o?.href;
          if ("string" != typeof c) return;
          let l = (function (e, t, r) {
              let i = `requestId=${t}&sessionTopic=${r}`;
              e.endsWith("/") && (e = e.slice(0, -1));
              let s = `${e}`;
              if (e.startsWith("https://t.me")) {
                let t = e.includes("?") ? "&startapp=" : "?startapp=";
                s = `${s}${t}${(function (e, t = !1) {
                  let r = eh.from(e).toString("base64");
                  return t ? r.replace(/[=]/g, "") : r;
                })(i, !0)}`;
              } else s = `${s}/wc?${i}`;
              return s;
            })(c, e, t),
            h = eO();
          if (h === ex.browser) {
            let e;
            if (!(null != (s = (0, a.getDocument)()) && s.hasFocus()))
              return void console.warn(
                "Document does not have focus, skipping deeplink."
              );
            (n = l),
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
                    n.startsWith("https://") ||
                    n.startsWith("http://")) &&
                  (e = "_blank")
                : (e = "_top"),
              window.open(n, e, "noreferrer noopener");
          } else
            h === ex.reactNative &&
              "u" > typeof (null == r.g ? void 0 : r.g.Linking) &&
              (await r.g.Linking.openURL(l));
        } catch (e) {
          console.error(e);
        }
      }
      async function eH(e, t) {
        let r = "";
        try {
          if (eS() && (r = localStorage.getItem(t))) return r;
          r = await e.getItem(t);
        } catch (e) {
          console.error(e);
        }
        return r;
      }
      function eV(e, t) {
        if (!e.includes(t)) return null;
        let r = e.split(/([&,?,=])/),
          i = r.indexOf(t);
        return r[i + 2];
      }
      function eK() {
        return "u" > typeof crypto && null != crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e) => {
              let t = (16 * Math.random()) | 0;
              return ("x" === e ? t : (3 & t) | 8).toString(16);
            });
      }
      function eW() {
        return "u" > typeof el && "true" === el.env.IS_VITEST;
      }
      function eJ(e) {
        return eh.from(e, "base64").toString("utf-8");
      }
      function eG(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function eY(e, ...t) {
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
      function eZ(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        eG(e.outputLen), eG(e.blockLen);
      }
      function eQ(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function eX(e, t) {
        eY(e);
        let r = t.outputLen;
        if (e.length < r)
          throw Error(
            "digestInto() expects output buffer of length at least " + r
          );
      }
      let e0 = BigInt(0x100000000 - 1),
        e1 = BigInt(32),
        e2 = (e, t, r) => (e << r) | (t >>> (32 - r)),
        e8 = (e, t, r) => (t << r) | (e >>> (32 - r)),
        e3 = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        e5 = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r)),
        e6 =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0;
      function e4(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function e9(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let e7 = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function te(e) {
        for (let r = 0; r < e.length; r++) {
          var t;
          e[r] =
            (((t = e[r]) << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      function tt(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          eY(e),
          e
        );
      }
      class tr {
        clone() {
          return this._cloneInto();
        }
      }
      function ti(e) {
        let t = (t) => e().update(tt(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function ts(e = 32) {
        if (e6 && "function" == typeof e6.getRandomValues)
          return e6.getRandomValues(new Uint8Array(e));
        if (e6 && "function" == typeof e6.randomBytes) return e6.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined");
      }
      let tn = [],
        to = [],
        ta = [],
        tc = BigInt(0),
        tl = BigInt(1),
        th = BigInt(2),
        tu = BigInt(7),
        td = BigInt(256),
        tp = BigInt(113);
      for (let e = 0, t = tl, r = 1, i = 0; e < 24; e++) {
        ([r, i] = [i, (2 * r + 3 * i) % 5]),
          tn.push(2 * (5 * i + r)),
          to.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = tc;
        for (let e = 0; e < 7; e++)
          (t = ((t << tl) ^ ((t >> tu) * tp)) % td) & th &&
            (s ^= tl << ((tl << BigInt(e)) - tl));
        ta.push(s);
      }
      let [tf, tg] = (function (e, t = !1) {
          let r = new Uint32Array(e.length),
            i = new Uint32Array(e.length);
          for (let s = 0; s < e.length; s++) {
            let { h: n, l: o } = (function (e, t = !1) {
              return t
                ? { h: Number(e & e0), l: Number((e >> e1) & e0) }
                : { h: 0 | Number((e >> e1) & e0), l: 0 | Number(e & e0) };
            })(e[s], t);
            [r[s], i[s]] = [n, o];
          }
          return [r, i];
        })(ta, !0),
        ty = (e, t, r) => (r > 32 ? e3(e, t, r) : e2(e, t, r)),
        tm = (e, t, r) => (r > 32 ? e5(e, t, r) : e8(e, t, r));
      class tb extends tr {
        constructor(e, t, r, i = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            eG(r),
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
          e7 || te(this.state32),
            (function (e, t = 24) {
              let r = new Uint32Array(10);
              for (let i = 24 - t; i < 24; i++) {
                for (let t = 0; t < 10; t++)
                  r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let i = (t + 8) % 10,
                    s = (t + 2) % 10,
                    n = r[s],
                    o = r[s + 1],
                    a = ty(n, o, 1) ^ r[i],
                    c = tm(n, o, 1) ^ r[i + 1];
                  for (let r = 0; r < 50; r += 10)
                    (e[t + r] ^= a), (e[t + r + 1] ^= c);
                }
                let t = e[2],
                  s = e[3];
                for (let r = 0; r < 24; r++) {
                  let i = to[r],
                    n = ty(t, s, i),
                    o = tm(t, s, i),
                    a = tn[r];
                  (t = e[a]), (s = e[a + 1]), (e[a] = n), (e[a + 1] = o);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let i = 0; i < 10; i++) r[i] = e[t + i];
                  for (let i = 0; i < 10; i++)
                    e[t + i] ^= ~r[(i + 2) % 10] & r[(i + 4) % 10];
                }
                (e[0] ^= tf[i]), (e[1] ^= tg[i]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            e7 || te(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          eQ(this);
          let { blockLen: t, state: r } = this,
            i = (e = tt(e)).length;
          for (let s = 0; s < i; ) {
            let n = Math.min(t - this.pos, i - s);
            for (let t = 0; t < n; t++) r[this.pos++] ^= e[s++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: r, blockLen: i } = this;
          (e[r] ^= t),
            (128 & t) != 0 && r === i - 1 && this.keccak(),
            (e[i - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          eQ(this, !1), eY(e), this.finish();
          let t = this.state,
            { blockLen: r } = this;
          for (let i = 0, s = e.length; i < s; ) {
            this.posOut >= r && this.keccak();
            let n = Math.min(r - this.posOut, s - i);
            e.set(t.subarray(this.posOut, this.posOut + n), i),
              (this.posOut += n),
              (i += n);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return eG(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if ((eX(e, this), this.finished))
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
            suffix: r,
            outputLen: i,
            rounds: s,
            enableXOF: n,
          } = this;
          return (
            e || (e = new tb(t, r, i, n, s)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = s),
            (e.suffix = r),
            (e.outputLen = i),
            (e.enableXOF = n),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let tw = ti(() => new tb(136, 1, 32));
      function tv(e) {
        let t = `Ethereum Signed Message:
${e.length}`,
          r = new TextEncoder().encode(t + e);
        return "0x" + eh.from(tw(r)).toString("hex");
      }
      async function tE(e, t, r, i, s, n) {
        switch (r.t) {
          case "eip191":
            return await tI(e, t, r.s);
          case "eip1271":
            return await t_(e, t, r.s, i, s, n);
          default:
            throw Error(
              `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`
            );
        }
      }
      async function tI(e, t, r) {
        return (
          (await es({ hash: tv(t), signature: r })).toLowerCase() ===
          e.toLowerCase()
        );
      }
      async function t_(e, t, r, i, s, n) {
        let o = eu(i);
        if (!o.namespace || !o.reference)
          throw Error(
            `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${i}`
          );
        try {
          let o = "0x1626ba7e",
            a = r.substring(2),
            c = tv(t).substring(2),
            l =
              o +
              c +
              "00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041" +
              a,
            h = await fetch(
              `${
                n || "https://rpc.walletconnect.org/v1"
              }/?chainId=${i}&projectId=${s}`,
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
            { result: u } = await h.json();
          return !!u && u.slice(0, o.length).toLowerCase() === o.toLowerCase();
        } catch (e) {
          return console.error("isValidEip1271Signature: ", e), !1;
        }
      }
      var tx = Object.defineProperty,
        tD = Object.defineProperties,
        tP = Object.getOwnPropertyDescriptors,
        tS = Object.getOwnPropertySymbols,
        tO = Object.prototype.hasOwnProperty,
        tA = Object.prototype.propertyIsEnumerable,
        tC = (e, t, r) =>
          t in e
            ? tx(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        tR = (e, t) => {
          for (var r in t || (t = {})) tO.call(t, r) && tC(e, r, t[r]);
          if (tS) for (var r of tS(t)) tA.call(t, r) && tC(e, r, t[r]);
          return e;
        },
        tT = (e, t) => tD(e, tP(t));
      let tN = (e) => e?.split(":"),
        tj = (e) => {
          let t = e && tN(e);
          if (t) return e.includes("did:pkh:") ? t[3] : t[1];
        },
        tU = (e) => {
          let t = e && tN(e);
          if (t) return t[2] + ":" + t[3];
        },
        tL = (e) => {
          let t = e && tN(e);
          if (t) return t.pop();
        };
      async function tk(e) {
        let { cacao: t, projectId: r } = e,
          { s: i, p: s } = t,
          n = tq(s, s.iss),
          o = tL(s.iss);
        return await tE(o, n, i, tU(s.iss), r);
      }
      let tq = (e, t) => {
        let r = `${e.domain} wants you to sign in with your Ethereum account:`,
          i = tL(t);
        if (!e.aud && !e.uri)
          throw Error(
            "Either `aud` or `uri` is required to construct the message"
          );
        let s = e.statement || void 0,
          n = `URI: ${e.aud || e.uri}`,
          o = `Version: ${e.version}`,
          a = `Chain ID: ${tj(t)}`,
          c = `Nonce: ${e.nonce}`,
          l = `Issued At: ${e.iat}`,
          h = e.exp ? `Expiration Time: ${e.exp}` : void 0,
          u = e.nbf ? `Not Before: ${e.nbf}` : void 0,
          d = e.requestId ? `Request ID: ${e.requestId}` : void 0,
          p = e.resources
            ? `Resources:${e.resources
                .map(
                  (e) => `
- ${e}`
                )
                .join("")}`
            : void 0,
          f = tH(e.resources);
        return (
          f &&
            (s = (function (e = "", t) {
              tB(t);
              let r =
                "I further authorize the stated URI to perform the following actions on my behalf: ";
              if (e.includes(r)) return e;
              let i = [],
                s = 0;
              Object.keys(t.att).forEach((e) => {
                let r = Object.keys(t.att[e]).map((e) => ({
                  ability: e.split("/")[0],
                  action: e.split("/")[1],
                }));
                r.sort((e, t) => e.action.localeCompare(t.action));
                let n = {};
                r.forEach((e) => {
                  n[e.ability] || (n[e.ability] = []),
                    n[e.ability].push(e.action);
                });
                let o = Object.keys(n).map(
                  (t) => (
                    s++, `(${s}) '${t}': '${n[t].join("', '")}' for '${e}'.`
                  )
                );
                i.push(o.join(", ").replace(".,", "."));
              });
              let n = i.join(" "),
                o = `${r}${n}`;
              return `${e ? e + " " : ""}${o}`;
            })(s, tM(f))),
          [r, i, "", s, "", n, o, a, c, l, h, u, d, p].filter((e) => null != e)
            .join(`
`)
        );
      };
      function tB(e) {
        if (!e) throw Error("No recap provided, value is undefined");
        if (!e.att) throw Error("No `att` property found");
        let t = Object.keys(e.att);
        if (!(null != t && t.length))
          throw Error("No resources found in `att` property");
        t.forEach((t) => {
          let r = e.att[t];
          if (Array.isArray(r) || "object" != typeof r)
            throw Error(`Resource must be an object: ${t}`);
          if (!Object.keys(r).length)
            throw Error(`Resource object is empty: ${t}`);
          Object.keys(r).forEach((e) => {
            let t = r[e];
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
      function t$(e) {
        return (
          tB(e),
          `urn:recap:${eh
            .from(JSON.stringify(e))
            .toString("base64")
            .replace(/=/g, "")}`
        );
      }
      function tM(e) {
        var t;
        let r =
          ((t = e.replace("urn:recap:", "")),
          JSON.parse(eh.from(t, "base64").toString("utf-8")));
        return tB(r), r;
      }
      function tz(e) {
        var t;
        let r = tM(e);
        tB(r);
        let i = null == (t = r.att) ? void 0 : t.eip155;
        return i ? Object.keys(i).map((e) => e.split("/")[1]) : [];
      }
      function tF(e) {
        let t = tM(e);
        tB(t);
        let r = [];
        return (
          Object.values(t.att).forEach((e) => {
            Object.values(e).forEach((e) => {
              var t;
              null != (t = e?.[0]) && t.chains && r.push(e[0].chains);
            });
          }),
          [...new Set(r.flat())]
        );
      }
      function tH(e) {
        var t;
        if (!e) return;
        let r = e?.[e.length - 1];
        return (t = r) && t.includes("urn:recap:") ? r : void 0;
      }
      function tV(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function tK(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function tW(e, ...t) {
        if (!tK(e)) throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function tJ(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function tG(e) {
        if ("boolean" != typeof e) throw Error(`boolean expected, not ${e}`);
      }
      let tY = (e) =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        tZ = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      if (68 !== new Uint8Array(new Uint32Array([0x11223344]).buffer)[0])
        throw Error("Non little-endian hardware is not supported");
      function tQ(e) {
        if ("string" == typeof e)
          e = (function (e) {
            if ("string" != typeof e) throw Error("string expected");
            return new Uint8Array(new TextEncoder().encode(e));
          })(e);
        else if (tK(e)) e = t1(e);
        else throw Error("Uint8Array expected, got " + typeof e);
        return e;
      }
      function tX(e, t, r = !0) {
        if (void 0 === t) return new Uint8Array(e);
        if (t.length !== e)
          throw Error(
            "invalid output length, expected " + e + ", got: " + t.length
          );
        if (r && t.byteOffset % 4 != 0)
          throw Error("invalid output, must be aligned");
        return t;
      }
      function t0(e, t, r, i) {
        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
        let s = BigInt(32),
          n = BigInt(0xffffffff),
          o = Number((r >> s) & n),
          a = Number(r & n),
          c = 4 * !!i,
          l = 4 * !i;
        e.setUint32(t + c, o, i), e.setUint32(t + l, a, i);
      }
      function t1(e) {
        return Uint8Array.from(e);
      }
      function t2(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      let t8 = (e) => Uint8Array.from(e.split("").map((e) => e.charCodeAt(0))),
        t3 = t8("expand 16-byte k"),
        t5 = t8("expand 32-byte k"),
        t6 = tY(t3),
        t4 = tY(t5);
      function t9(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function t7(e) {
        return e.byteOffset % 4 == 0;
      }
      let re = 0x100000000 - 1,
        rt = new Uint32Array(),
        rr = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
      class ri {
        constructor(e) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            tW((e = tQ(e)), 32);
          let t = rr(e, 0),
            r = rr(e, 2),
            i = rr(e, 4),
            s = rr(e, 6),
            n = rr(e, 8),
            o = rr(e, 10),
            a = rr(e, 12),
            c = rr(e, 14);
          (this.r[0] = 8191 & t),
            (this.r[1] = ((t >>> 13) | (r << 3)) & 8191),
            (this.r[2] = ((r >>> 10) | (i << 6)) & 7939),
            (this.r[3] = ((i >>> 7) | (s << 9)) & 8191),
            (this.r[4] = ((s >>> 4) | (n << 12)) & 255),
            (this.r[5] = (n >>> 1) & 8190),
            (this.r[6] = ((n >>> 14) | (o << 2)) & 8191),
            (this.r[7] = ((o >>> 11) | (a << 5)) & 8065),
            (this.r[8] = ((a >>> 8) | (c << 8)) & 8191),
            (this.r[9] = (c >>> 5) & 127);
          for (let t = 0; t < 8; t++) this.pad[t] = rr(e, 16 + 2 * t);
        }
        process(e, t, r = !1) {
          let { h: i, r: s } = this,
            n = s[0],
            o = s[1],
            a = s[2],
            c = s[3],
            l = s[4],
            h = s[5],
            u = s[6],
            d = s[7],
            p = s[8],
            f = s[9],
            g = rr(e, t + 0),
            y = rr(e, t + 2),
            m = rr(e, t + 4),
            b = rr(e, t + 6),
            w = rr(e, t + 8),
            v = rr(e, t + 10),
            E = rr(e, t + 12),
            I = rr(e, t + 14),
            _ = i[0] + (8191 & g),
            x = i[1] + (((g >>> 13) | (y << 3)) & 8191),
            D = i[2] + (((y >>> 10) | (m << 6)) & 8191),
            P = i[3] + (((m >>> 7) | (b << 9)) & 8191),
            S = i[4] + (((b >>> 4) | (w << 12)) & 8191),
            O = i[5] + ((w >>> 1) & 8191),
            A = i[6] + (((w >>> 14) | (v << 2)) & 8191),
            C = i[7] + (((v >>> 11) | (E << 5)) & 8191),
            R = i[8] + (((E >>> 8) | (I << 8)) & 8191),
            T = i[9] + ((I >>> 5) | (2048 * !r)),
            N = 0,
            j = 0 + _ * n + 5 * f * x + 5 * p * D + 5 * d * P + 5 * u * S;
          (N = j >>> 13),
            (j &= 8191),
            (j += 5 * h * O + 5 * l * A + 5 * c * C + 5 * a * R + 5 * o * T),
            (N += j >>> 13),
            (j &= 8191);
          let U = N + _ * o + x * n + 5 * f * D + 5 * p * P + 5 * d * S;
          (N = U >>> 13),
            (U &= 8191),
            (U += 5 * u * O + 5 * h * A + 5 * l * C + 5 * c * R + 5 * a * T),
            (N += U >>> 13),
            (U &= 8191);
          let L = N + _ * a + x * o + D * n + 5 * f * P + 5 * p * S;
          (N = L >>> 13),
            (L &= 8191),
            (L += 5 * d * O + 5 * u * A + 5 * h * C + 5 * l * R + 5 * c * T),
            (N += L >>> 13),
            (L &= 8191);
          let k = N + _ * c + x * a + D * o + P * n + 5 * f * S;
          (N = k >>> 13),
            (k &= 8191),
            (k += 5 * p * O + 5 * d * A + 5 * u * C + 5 * h * R + 5 * l * T),
            (N += k >>> 13),
            (k &= 8191);
          let q = N + _ * l + x * c + D * a + P * o + S * n;
          (N = q >>> 13),
            (q &= 8191),
            (q += 5 * f * O + 5 * p * A + 5 * d * C + 5 * u * R + 5 * h * T),
            (N += q >>> 13),
            (q &= 8191);
          let B = N + _ * h + x * l + D * c + P * a + S * o;
          (N = B >>> 13),
            (B &= 8191),
            (B += O * n + 5 * f * A + 5 * p * C + 5 * d * R + 5 * u * T),
            (N += B >>> 13),
            (B &= 8191);
          let $ = N + _ * u + x * h + D * l + P * c + S * a;
          (N = $ >>> 13),
            ($ &= 8191),
            ($ += O * o + A * n + 5 * f * C + 5 * p * R + 5 * d * T),
            (N += $ >>> 13),
            ($ &= 8191);
          let M = N + _ * d + x * u + D * h + P * l + S * c;
          (N = M >>> 13),
            (M &= 8191),
            (M += O * a + A * o + C * n + 5 * f * R + 5 * p * T),
            (N += M >>> 13),
            (M &= 8191);
          let z = N + _ * p + x * d + D * u + P * h + S * l;
          (N = z >>> 13),
            (z &= 8191),
            (z += O * c + A * a + C * o + R * n + 5 * f * T),
            (N += z >>> 13),
            (z &= 8191);
          let F = N + _ * f + x * p + D * d + P * u + S * h;
          (N = F >>> 13),
            (F &= 8191),
            (F += O * l + A * c + C * a + R * o + T * n),
            (N += F >>> 13),
            (F &= 8191),
            (j = 8191 & (N = ((N = ((N << 2) + N) | 0) + j) | 0)),
            (N >>>= 13),
            (U += N),
            (i[0] = j),
            (i[1] = U),
            (i[2] = L),
            (i[3] = k),
            (i[4] = q),
            (i[5] = B),
            (i[6] = $),
            (i[7] = M),
            (i[8] = z),
            (i[9] = F);
        }
        finalize() {
          let { h: e, pad: t } = this,
            r = new Uint16Array(10),
            i = e[1] >>> 13;
          e[1] &= 8191;
          for (let t = 2; t < 10; t++)
            (e[t] += i), (i = e[t] >>> 13), (e[t] &= 8191);
          (e[0] += 5 * i),
            (i = e[0] >>> 13),
            (e[0] &= 8191),
            (e[1] += i),
            (i = e[1] >>> 13),
            (e[1] &= 8191),
            (e[2] += i),
            (r[0] = e[0] + 5),
            (i = r[0] >>> 13),
            (r[0] &= 8191);
          for (let t = 1; t < 10; t++)
            (r[t] = e[t] + i), (i = r[t] >>> 13), (r[t] &= 8191);
          r[9] -= 8192;
          let s = (1 ^ i) - 1;
          for (let e = 0; e < 10; e++) r[e] &= s;
          s = ~s;
          for (let t = 0; t < 10; t++) e[t] = (e[t] & s) | r[t];
          (e[0] = (e[0] | (e[1] << 13)) & 65535),
            (e[1] = ((e[1] >>> 3) | (e[2] << 10)) & 65535),
            (e[2] = ((e[2] >>> 6) | (e[3] << 7)) & 65535),
            (e[3] = ((e[3] >>> 9) | (e[4] << 4)) & 65535),
            (e[4] = ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14)) & 65535),
            (e[5] = ((e[6] >>> 2) | (e[7] << 11)) & 65535),
            (e[6] = ((e[7] >>> 5) | (e[8] << 8)) & 65535),
            (e[7] = ((e[8] >>> 8) | (e[9] << 5)) & 65535);
          let n = e[0] + t[0];
          e[0] = 65535 & n;
          for (let r = 1; r < 8; r++)
            (n = (((e[r] + t[r]) | 0) + (n >>> 16)) | 0), (e[r] = 65535 & n);
          t2(r);
        }
        update(e) {
          tJ(this);
          let { buffer: t, blockLen: r } = this,
            i = (e = tQ(e)).length;
          for (let s = 0; s < i; ) {
            let n = Math.min(r - this.pos, i - s);
            if (n === r) {
              for (; r <= i - s; s += r) this.process(e, s);
              continue;
            }
            t.set(e.subarray(s, s + n), this.pos),
              (this.pos += n),
              (s += n),
              this.pos === r && (this.process(t, 0, !1), (this.pos = 0));
          }
          return this;
        }
        destroy() {
          t2(this.h, this.r, this.buffer, this.pad);
        }
        digestInto(e) {
          tJ(this),
            (function (e, t) {
              tW(e);
              let r = t.outputLen;
              if (e.length < r)
                throw Error(
                  "digestInto() expects output buffer of length at least " + r
                );
            })(e, this),
            (this.finished = !0);
          let { buffer: t, h: r } = this,
            { pos: i } = this;
          if (i) {
            for (t[i++] = 1; i < 16; i++) t[i] = 0;
            this.process(t, 0, !0);
          }
          this.finalize();
          let s = 0;
          for (let t = 0; t < 8; t++)
            (e[s++] = r[t] >>> 0), (e[s++] = r[t] >>> 8);
          return e;
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
      }
      let rs = (function (e) {
          let t = (t, r) => e(r).update(tQ(t)).digest(),
            r = e(new Uint8Array(32));
          return (
            (t.outputLen = r.outputLen),
            (t.blockLen = r.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        })((e) => new ri(e)),
        rn = (function (e, t) {
          let {
            allowShortKeys: r,
            extendNonceFn: i,
            counterLength: s,
            counterRight: n,
            rounds: o,
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
            tV(s),
            tV(o),
            tG(n),
            tG(r),
            (t, a, c, l, h = 0) => {
              tW(t), tW(a), tW(c);
              let u = c.length;
              if (
                (void 0 === l && (l = new Uint8Array(u)),
                tW(l),
                tV(h),
                h < 0 || h >= re)
              )
                throw Error("arx: counter overflow");
              if (l.length < u)
                throw Error(
                  `arx: output (${l.length}) is shorter than data (${u})`
                );
              let d = [],
                p = t.length,
                f,
                g;
              if (32 === p) d.push((f = t1(t))), (g = t4);
              else if (16 === p && r)
                (f = new Uint8Array(32)).set(t),
                  f.set(t, 16),
                  (g = t6),
                  d.push(f);
              else throw Error(`arx: invalid 32-byte key, got length=${p}`);
              t7(a) || d.push((a = t1(a)));
              let y = tY(f);
              if (i) {
                if (24 !== a.length)
                  throw Error("arx: extended nonce must be 24 bytes");
                i(g, y, tY(a.subarray(0, 16)), y), (a = a.subarray(16));
              }
              let m = 16 - s;
              if (m !== a.length)
                throw Error(`arx: nonce must be ${m} or 16 bytes`);
              if (12 !== m) {
                let e = new Uint8Array(12);
                e.set(a, n ? 0 : 12 - a.length), (a = e), d.push(a);
              }
              return (
                (function (e, t, r, i, s, n, o, a) {
                  let c = s.length,
                    l = new Uint8Array(64),
                    h = tY(l),
                    u = t7(s) && t7(n),
                    d = u ? tY(s) : rt,
                    p = u ? tY(n) : rt;
                  for (let f = 0; f < c; o++) {
                    if ((e(t, r, i, h, o, a), o >= re))
                      throw Error("arx: counter overflow");
                    let g = Math.min(64, c - f);
                    if (u && 64 === g) {
                      let e = f / 4;
                      if (f % 4 != 0)
                        throw Error("arx: invalid block position");
                      for (let t = 0, r; t < 16; t++)
                        p[(r = e + t)] = d[r] ^ h[t];
                      f += 64;
                      continue;
                    }
                    for (let e = 0, t; e < g; e++) n[(t = f + e)] = s[t] ^ l[e];
                    f += g;
                  }
                })(e, g, y, tY(a), c, l, h, o),
                t2(...d),
                l
              );
            }
          );
        })(
          function (e, t, r, i, s, n = 20) {
            let o = e[0],
              a = e[1],
              c = e[2],
              l = e[3],
              h = t[0],
              u = t[1],
              d = t[2],
              p = t[3],
              f = t[4],
              g = t[5],
              y = t[6],
              m = t[7],
              b = r[0],
              w = r[1],
              v = r[2],
              E = o,
              I = a,
              _ = c,
              x = l,
              D = h,
              P = u,
              S = d,
              O = p,
              A = f,
              C = g,
              R = y,
              T = m,
              N = s,
              j = b,
              U = w,
              L = v;
            for (let e = 0; e < n; e += 2)
              (A = (A + (N = t9(N ^ (E = (E + D) | 0), 16))) | 0),
                (E = (E + (D = t9(D ^ A, 12))) | 0),
                (A = (A + (N = t9(N ^ E, 8))) | 0),
                (D = t9(D ^ A, 7)),
                (C = (C + (j = t9(j ^ (I = (I + P) | 0), 16))) | 0),
                (I = (I + (P = t9(P ^ C, 12))) | 0),
                (C = (C + (j = t9(j ^ I, 8))) | 0),
                (P = t9(P ^ C, 7)),
                (R = (R + (U = t9(U ^ (_ = (_ + S) | 0), 16))) | 0),
                (_ = (_ + (S = t9(S ^ R, 12))) | 0),
                (R = (R + (U = t9(U ^ _, 8))) | 0),
                (S = t9(S ^ R, 7)),
                (T = (T + (L = t9(L ^ (x = (x + O) | 0), 16))) | 0),
                (x = (x + (O = t9(O ^ T, 12))) | 0),
                (T = (T + (L = t9(L ^ x, 8))) | 0),
                (O = t9(O ^ T, 7)),
                (R = (R + (L = t9(L ^ (E = (E + P) | 0), 16))) | 0),
                (E = (E + (P = t9(P ^ R, 12))) | 0),
                (R = (R + (L = t9(L ^ E, 8))) | 0),
                (P = t9(P ^ R, 7)),
                (T = (T + (N = t9(N ^ (I = (I + S) | 0), 16))) | 0),
                (I = (I + (S = t9(S ^ T, 12))) | 0),
                (T = (T + (N = t9(N ^ I, 8))) | 0),
                (S = t9(S ^ T, 7)),
                (A = (A + (j = t9(j ^ (_ = (_ + O) | 0), 16))) | 0),
                (_ = (_ + (O = t9(O ^ A, 12))) | 0),
                (A = (A + (j = t9(j ^ _, 8))) | 0),
                (O = t9(O ^ A, 7)),
                (C = (C + (U = t9(U ^ (x = (x + D) | 0), 16))) | 0),
                (x = (x + (D = t9(D ^ C, 12))) | 0),
                (C = (C + (U = t9(U ^ x, 8))) | 0),
                (D = t9(D ^ C, 7));
            let k = 0;
            (i[k++] = (o + E) | 0),
              (i[k++] = (a + I) | 0),
              (i[k++] = (c + _) | 0),
              (i[k++] = (l + x) | 0),
              (i[k++] = (h + D) | 0),
              (i[k++] = (u + P) | 0),
              (i[k++] = (d + S) | 0),
              (i[k++] = (p + O) | 0),
              (i[k++] = (f + A) | 0),
              (i[k++] = (g + C) | 0),
              (i[k++] = (y + R) | 0),
              (i[k++] = (m + T) | 0),
              (i[k++] = (s + N) | 0),
              (i[k++] = (b + j) | 0),
              (i[k++] = (w + U) | 0),
              (i[k++] = (v + L) | 0);
          },
          { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
        ),
        ro = new Uint8Array(16),
        ra = (e, t) => {
          e.update(t);
          let r = t.length % 16;
          r && e.update(ro.subarray(r));
        },
        rc = new Uint8Array(32);
      function rl(e, t, r, i, s) {
        let n = e(t, r, rc),
          o = rs.create(n);
        s && ra(o, s), ra(o, i);
        let a = new Uint8Array(16),
          c = tZ(a);
        t0(c, 0, BigInt(s ? s.length : 0), !0),
          t0(c, 8, BigInt(i.length), !0),
          o.update(a);
        let l = o.digest();
        return t2(n, a), l;
      }
      let rh = ((e, t) => {
        function r(i, ...s) {
          if ((tW(i), void 0 !== e.nonceLength)) {
            let t = s[0];
            if (!t) throw Error("nonce / iv required");
            e.varSizeNonce ? tW(t) : tW(t, e.nonceLength);
          }
          let n = e.tagLength;
          n && void 0 !== s[1] && tW(s[1]);
          let o = t(i, ...s),
            a = (e, t) => {
              if (void 0 !== t) {
                if (2 !== e) throw Error("cipher output not supported");
                tW(t);
              }
            },
            c = !1;
          return {
            encrypt(e, t) {
              if (c)
                throw Error("cannot encrypt() twice with same key + nonce");
              return (c = !0), tW(e), a(o.encrypt.length, t), o.encrypt(e, t);
            },
            decrypt(e, t) {
              if ((tW(e), n && e.length < n))
                throw Error(
                  "invalid ciphertext length: smaller than tagLength=" + n
                );
              return a(o.decrypt.length, t), o.decrypt(e, t);
            },
          };
        }
        return Object.assign(r, e), r;
      })(
        { blockSize: 64, nonceLength: 12, tagLength: 16 },
        ((e) => (t, r, i) => ({
          encrypt(s, n) {
            let o = s.length;
            (n = tX(o + 16, n, !1)).set(s);
            let a = n.subarray(0, -16);
            e(t, r, a, a, 1);
            let c = rl(e, t, r, a, i);
            return n.set(c, o), t2(c), n;
          },
          decrypt(s, n) {
            n = tX(s.length - 16, n, !1);
            let o = s.subarray(0, -16),
              a = s.subarray(-16),
              c = rl(e, t, r, o, i);
            if (
              !(function (e, t) {
                if (e.length !== t.length) return !1;
                let r = 0;
                for (let i = 0; i < e.length; i++) r |= e[i] ^ t[i];
                return 0 === r;
              })(a, c)
            )
              throw Error("invalid tag");
            return n.set(s.subarray(0, -16)), e(t, r, n, n, 1), t2(c), n;
          },
        }))(rn)
      );
      class ru extends tr {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), eZ(e);
          let r = tt(t);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let i = this.blockLen,
            s = new Uint8Array(i);
          s.set(r.length > i ? e.create().update(r).digest() : r);
          for (let e = 0; e < s.length; e++) s[e] ^= 54;
          this.iHash.update(s), (this.oHash = e.create());
          for (let e = 0; e < s.length; e++) s[e] ^= 106;
          this.oHash.update(s), s.fill(0);
        }
        update(e) {
          return eQ(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          eQ(this),
            eY(e, this.outputLen),
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
            iHash: r,
            finished: i,
            destroyed: s,
            blockLen: n,
            outputLen: o,
          } = this;
          return (
            (e.finished = i),
            (e.destroyed = s),
            (e.blockLen = n),
            (e.outputLen = o),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let rd = (e, t, r) => new ru(e, t).update(r).digest();
      rd.create = (e, t) => new ru(e, t);
      let rp = new Uint8Array([0]),
        rf = new Uint8Array(),
        rg = (e, t, r, i, s) =>
          (function (e, t, r, i = 32) {
            if ((eZ(e), eG(i), i > 255 * e.outputLen))
              throw Error("Length should be <= 255*HashLen");
            let s = Math.ceil(i / e.outputLen);
            void 0 === r && (r = rf);
            let n = new Uint8Array(s * e.outputLen),
              o = rd.create(e, t),
              a = o._cloneInto(),
              c = new Uint8Array(o.outputLen);
            for (let t = 0; t < s; t++)
              (rp[0] = t + 1),
                a
                  .update(0 === t ? rf : c)
                  .update(r)
                  .update(rp)
                  .digestInto(c),
                n.set(c, e.outputLen * t),
                o._cloneInto(a);
            return (
              o.destroy(), a.destroy(), c.fill(0), rp.fill(0), n.slice(0, i)
            );
          })(
            e,
            (function (e, t, r) {
              return (
                eZ(e),
                void 0 === r && (r = new Uint8Array(e.outputLen)),
                rd(e, tt(r), tt(t))
              );
            })(e, t, r),
            i,
            s
          );
      class ry extends tr {
        constructor(e, t, r, i) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = i),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = e4(this.buffer));
        }
        update(e) {
          eQ(this);
          let { view: t, buffer: r, blockLen: i } = this,
            s = (e = tt(e)).length;
          for (let n = 0; n < s; ) {
            let o = Math.min(i - this.pos, s - n);
            if (o === i) {
              let t = e4(e);
              for (; i <= s - n; n += i) this.process(t, n);
              continue;
            }
            r.set(e.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === i && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          eQ(this), eX(e, this), (this.finished = !0);
          let { buffer: t, view: r, blockLen: i, isLE: s } = this,
            { pos: n } = this;
          (t[n++] = 128),
            this.buffer.subarray(n).fill(0),
            this.padOffset > i - n && (this.process(r, 0), (n = 0));
          for (let e = n; e < i; e++) t[e] = 0;
          (function (e, t, r, i) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, r, i);
            let s = BigInt(32),
              n = BigInt(0xffffffff),
              o = Number((r >> s) & n),
              a = Number(r & n),
              c = 4 * !!i,
              l = 4 * !i;
            e.setUint32(t + c, o, i), e.setUint32(t + l, a, i);
          })(r, i - 8, BigInt(8 * this.length), s),
            this.process(r, 0);
          let o = e4(e),
            a = this.outputLen;
          if (a % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let c = a / 4,
            l = this.get();
          if (c > l.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: r,
            length: i,
            finished: s,
            destroyed: n,
            pos: o,
          } = this;
          return (
            (e.length = i),
            (e.pos = o),
            (e.finished = s),
            (e.destroyed = n),
            i % t && e.buffer.set(r),
            e
          );
        }
      }
      let rm = new Uint32Array([
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
        rb = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        rw = new Uint32Array(64);
      class rv extends ry {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | rb[0]),
            (this.B = 0 | rb[1]),
            (this.C = 0 | rb[2]),
            (this.D = 0 | rb[3]),
            (this.E = 0 | rb[4]),
            (this.F = 0 | rb[5]),
            (this.G = 0 | rb[6]),
            (this.H = 0 | rb[7]);
        }
        get() {
          let { A: e, B: t, C: r, D: i, E: s, F: n, G: o, H: a } = this;
          return [e, t, r, i, s, n, o, a];
        }
        set(e, t, r, i, s, n, o, a) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | i),
            (this.E = 0 | s),
            (this.F = 0 | n),
            (this.G = 0 | o),
            (this.H = 0 | a);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) rw[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = rw[e - 15],
              r = rw[e - 2],
              i = e9(t, 7) ^ e9(t, 18) ^ (t >>> 3),
              s = e9(r, 17) ^ e9(r, 19) ^ (r >>> 10);
            rw[e] = (s + rw[e - 7] + i + rw[e - 16]) | 0;
          }
          let { A: r, B: i, C: s, D: n, E: o, F: a, G: c, H: l } = this;
          for (let e = 0; e < 64; e++) {
            var h, u, d, p;
            let t =
                (l +
                  (e9(o, 6) ^ e9(o, 11) ^ e9(o, 25)) +
                  (((h = o) & a) ^ (~h & c)) +
                  rm[e] +
                  rw[e]) |
                0,
              f =
                ((e9(r, 2) ^ e9(r, 13) ^ e9(r, 22)) +
                  (((u = r) & (d = i)) ^ (u & (p = s)) ^ (d & p))) |
                0;
            (l = c),
              (c = a),
              (a = o),
              (o = (n + t) | 0),
              (n = s),
              (s = i),
              (i = r),
              (r = (t + f) | 0);
          }
          (r = (r + this.A) | 0),
            (i = (i + this.B) | 0),
            (s = (s + this.C) | 0),
            (n = (n + this.D) | 0),
            (o = (o + this.E) | 0),
            (a = (a + this.F) | 0),
            (c = (c + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(r, i, s, n, o, a, c, l);
        }
        roundClean() {
          rw.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let rE = ti(() => new rv()),
        rI = BigInt(0),
        r_ = BigInt(1),
        rx = BigInt(2);
      function rD(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function rP(e) {
        if (!rD(e)) throw Error("Uint8Array expected");
      }
      function rS(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      let rO = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function rA(e) {
        rP(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += rO[e[r]];
        return t;
      }
      function rC(e) {
        let t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function rR(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? rI : BigInt("0x" + e);
      }
      let rT = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function rN(e) {
        return e >= rT._0 && e <= rT._9
          ? e - rT._0
          : e >= rT.A && e <= rT.F
          ? e - (rT.A - 10)
          : e >= rT.a && e <= rT.f
          ? e - (rT.a - 10)
          : void 0;
      }
      function rj(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length,
          r = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let i = new Uint8Array(r);
        for (let t = 0, s = 0; t < r; t++, s += 2) {
          let r = rN(e.charCodeAt(s)),
            n = rN(e.charCodeAt(s + 1));
          if (void 0 === r || void 0 === n)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[s] + e[s + 1]) +
                '" at index ' +
                s
            );
          i[t] = 16 * r + n;
        }
        return i;
      }
      function rU(e) {
        return rR(rA(e));
      }
      function rL(e) {
        return rP(e), rR(rA(Uint8Array.from(e).reverse()));
      }
      function rk(e, t) {
        return rj(e.toString(16).padStart(2 * t, "0"));
      }
      function rq(e, t) {
        return rk(e, t).reverse();
      }
      function rB(e, t, r) {
        let i;
        if ("string" == typeof t)
          try {
            i = rj(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if (rD(t)) i = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let s = i.length;
        if ("number" == typeof r && s !== r)
          throw Error(e + " of length " + r + " expected, got " + s);
        return i;
      }
      function r$(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let i = e[r];
          rP(i), (t += i.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, i = 0; t < e.length; t++) {
          let s = e[t];
          r.set(s, i), (i += s.length);
        }
        return r;
      }
      let rM = (e) => "bigint" == typeof e && rI <= e;
      function rz(e, t, r) {
        return rM(e) && rM(t) && rM(r) && t <= e && e < r;
      }
      function rF(e, t, r, i) {
        if (!rz(t, r, i))
          throw Error(
            "expected valid " + e + ": " + r + " <= n < " + i + ", got " + t
          );
      }
      function rH(e) {
        let t;
        for (t = 0; e > rI; e >>= r_, t += 1);
        return t;
      }
      let rV = (e) => (rx << BigInt(e - 1)) - r_,
        rK = (e) => new Uint8Array(e),
        rW = (e) => Uint8Array.from(e);
      function rJ(e, t, r) {
        if ("number" != typeof e || e < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof t || t < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof r) throw Error("hmacFn must be a function");
        let i = rK(e),
          s = rK(e),
          n = 0,
          o = () => {
            i.fill(1), s.fill(0), (n = 0);
          },
          a = (...e) => r(s, i, ...e),
          c = (e = rK()) => {
            (s = a(rW([0]), e)),
              (i = a()),
              0 !== e.length && ((s = a(rW([1]), e)), (i = a()));
          },
          l = () => {
            if (n++ >= 1e3) throw Error("drbg: tried 1000 values");
            let e = 0,
              r = [];
            for (; e < t; ) {
              let t = (i = a()).slice();
              r.push(t), (e += i.length);
            }
            return r$(...r);
          };
        return (e, t) => {
          let r;
          for (o(), c(e); !(r = t(l())); ) c();
          return o(), r;
        };
      }
      let rG = {
        bigint: (e) => "bigint" == typeof e,
        function: (e) => "function" == typeof e,
        boolean: (e) => "boolean" == typeof e,
        string: (e) => "string" == typeof e,
        stringOrUint8Array: (e) => "string" == typeof e || rD(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          "function" == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function rY(e, t, r = {}) {
        let i = (t, r, i) => {
          let s = rG[r];
          if ("function" != typeof s) throw Error("invalid validator function");
          let n = e[t];
          if (!(i && void 0 === n) && !s(n, e))
            throw Error(
              "param " + String(t) + " is invalid. Expected " + r + ", got " + n
            );
        };
        for (let [e, r] of Object.entries(t)) i(e, r, !1);
        for (let [e, t] of Object.entries(r)) i(e, t, !0);
        return e;
      }
      function rZ(e) {
        let t = new WeakMap();
        return (r, ...i) => {
          let s = t.get(r);
          if (void 0 !== s) return s;
          let n = e(r, ...i);
          return t.set(r, n), n;
        };
      }
      var rQ = Object.freeze({
        __proto__: null,
        isBytes: rD,
        abytes: rP,
        abool: rS,
        bytesToHex: rA,
        numberToHexUnpadded: rC,
        hexToNumber: rR,
        hexToBytes: rj,
        bytesToNumberBE: rU,
        bytesToNumberLE: rL,
        numberToBytesBE: rk,
        numberToBytesLE: rq,
        numberToVarBytesBE: function (e) {
          return rj(rC(e));
        },
        ensureBytes: rB,
        concatBytes: r$,
        equalBytes: function (e, t) {
          if (e.length !== t.length) return !1;
          let r = 0;
          for (let i = 0; i < e.length; i++) r |= e[i] ^ t[i];
          return 0 === r;
        },
        utf8ToBytes: function (e) {
          if ("string" != typeof e) throw Error("string expected");
          return new Uint8Array(new TextEncoder().encode(e));
        },
        inRange: rz,
        aInRange: rF,
        bitLen: rH,
        bitGet: function (e, t) {
          return (e >> BigInt(t)) & r_;
        },
        bitSet: function (e, t, r) {
          return e | ((r ? r_ : rI) << BigInt(t));
        },
        bitMask: rV,
        createHmacDrbg: rJ,
        validateObject: rY,
        notImplemented: () => {
          throw Error("not implemented");
        },
        memoized: rZ,
      });
      let rX = BigInt(0),
        r0 = BigInt(1),
        r1 = BigInt(2),
        r2 = BigInt(3),
        r8 = BigInt(4),
        r3 = BigInt(5),
        r5 = BigInt(8);
      function r6(e, t) {
        let r = e % t;
        return r >= rX ? r : t + r;
      }
      function r4(e, t, r) {
        if (t < rX) throw Error("invalid exponent, negatives unsupported");
        if (r <= rX) throw Error("invalid modulus");
        if (r === r0) return rX;
        let i = r0;
        for (; t > rX; )
          t & r0 && (i = (i * e) % r), (e = (e * e) % r), (t >>= r0);
        return i;
      }
      function r9(e, t, r) {
        let i = e;
        for (; t-- > rX; ) (i *= i), (i %= r);
        return i;
      }
      function r7(e, t) {
        if (e === rX) throw Error("invert: expected non-zero number");
        if (t <= rX) throw Error("invert: expected positive modulus, got " + t);
        let r = r6(e, t),
          i = t,
          s = rX,
          n = r0;
        for (; r !== rX; ) {
          let e = i / r,
            t = i % r,
            o = s - n * e;
          (i = r), (r = t), (s = n), (n = o);
        }
        if (i !== r0) throw Error("invert: does not exist");
        return r6(s, t);
      }
      let ie = [
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
      function it(e, t) {
        let r = void 0 !== t ? t : e.toString(2).length,
          i = Math.ceil(r / 8);
        return { nBitLength: r, nByteLength: i };
      }
      function ir(e, t, r = !1, i = {}) {
        let s;
        if (e <= rX) throw Error("invalid field: expected ORDER > 0, got " + e);
        let { nBitLength: n, nByteLength: o } = it(e, t);
        if (o > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let a = Object.freeze({
          ORDER: e,
          isLE: r,
          BITS: n,
          BYTES: o,
          MASK: rV(n),
          ZERO: rX,
          ONE: r0,
          create: (t) => r6(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return rX <= t && t < e;
          },
          is0: (e) => e === rX,
          isOdd: (e) => (e & r0) === r0,
          neg: (t) => r6(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => r6(t * t, e),
          add: (t, r) => r6(t + r, e),
          sub: (t, r) => r6(t - r, e),
          mul: (t, r) => r6(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < rX)
                throw Error("invalid exponent, negatives unsupported");
              if (r === rX) return e.ONE;
              if (r === r0) return t;
              let i = e.ONE,
                s = t;
              for (; r > rX; )
                r & r0 && (i = e.mul(i, s)), (s = e.sqr(s)), (r >>= r0);
              return i;
            })(a, e, t),
          div: (t, r) => r6(t * r7(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => r7(t, e),
          sqrt:
            i.sqrt ||
            ((t) => (
              s ||
                (s = (function (e) {
                  if (e % r8 === r2) {
                    let t = (e + r0) / r8;
                    return function (e, r) {
                      let i = e.pow(r, t);
                      if (!e.eql(e.sqr(i), r))
                        throw Error("Cannot find square root");
                      return i;
                    };
                  }
                  if (e % r5 === r3) {
                    let t = (e - r3) / r5;
                    return function (e, r) {
                      let i = e.mul(r, r1),
                        s = e.pow(i, t),
                        n = e.mul(r, s),
                        o = e.mul(e.mul(n, r1), s),
                        a = e.mul(n, e.sub(o, e.ONE));
                      if (!e.eql(e.sqr(a), r))
                        throw Error("Cannot find square root");
                      return a;
                    };
                  }
                  return (function (e) {
                    let t,
                      r,
                      i,
                      s = (e - r0) / r1;
                    for (t = e - r0, r = 0; t % r1 === rX; t /= r1, r++);
                    for (i = r1; i < e && r4(i, s, e) !== e - r0; i++)
                      if (i > 1e3)
                        throw Error(
                          "Cannot find square root: likely non-prime P"
                        );
                    if (1 === r) {
                      let t = (e + r0) / r8;
                      return function (e, r) {
                        let i = e.pow(r, t);
                        if (!e.eql(e.sqr(i), r))
                          throw Error("Cannot find square root");
                        return i;
                      };
                    }
                    let n = (t + r0) / r1;
                    return function (e, o) {
                      if (e.pow(o, s) === e.neg(e.ONE))
                        throw Error("Cannot find square root");
                      let a = r,
                        c = e.pow(e.mul(e.ONE, i), t),
                        l = e.pow(o, n),
                        h = e.pow(o, t);
                      for (; !e.eql(h, e.ONE); ) {
                        if (e.eql(h, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let r = e.sqr(h); t < a && !e.eql(r, e.ONE); t++)
                          r = e.sqr(r);
                        let r = e.pow(c, r0 << BigInt(a - t - 1));
                        (c = e.sqr(r)),
                          (l = e.mul(l, r)),
                          (h = e.mul(h, c)),
                          (a = t);
                      }
                      return l;
                    };
                  })(e);
                })(e)),
              s(a, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let r = Array(t.length),
                i = t.reduce(
                  (t, i, s) => (e.is0(i) ? t : ((r[s] = t), e.mul(t, i))),
                  e.ONE
                ),
                s = e.inv(i);
              return (
                t.reduceRight(
                  (t, i, s) =>
                    e.is0(i) ? t : ((r[s] = e.mul(t, r[s])), e.mul(t, i)),
                  s
                ),
                r
              );
            })(a, e),
          cmov: (e, t, r) => (r ? t : e),
          toBytes: (e) => (r ? rq(e, o) : rk(e, o)),
          fromBytes: (e) => {
            if (e.length !== o)
              throw Error(
                "Field.fromBytes: expected " + o + " bytes, got " + e.length
              );
            return r ? rL(e) : rU(e);
          },
        });
        return Object.freeze(a);
      }
      function ii(e) {
        if ("bigint" != typeof e) throw Error("field order must be bigint");
        return Math.ceil(e.toString(2).length / 8);
      }
      function is(e) {
        let t = ii(e);
        return t + Math.ceil(t / 2);
      }
      let io = BigInt(0),
        ia = BigInt(1);
      function ic(e, t) {
        let r = t.negate();
        return e ? r : t;
      }
      function il(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function ih(e, t) {
        return (
          il(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) }
        );
      }
      let iu = new WeakMap(),
        id = new WeakMap();
      function ip(e) {
        return id.get(e) || 1;
      }
      function ig(e) {
        return (
          rY(
            e.Fp,
            ie.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            })
          ),
          rY(
            e,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({ ...it(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      BigInt(0), BigInt(1), BigInt(2), BigInt(8);
      let iy = BigInt(0),
        im = BigInt(1),
        ib = BigInt(
          "57896044618658097711785492504343953926634992332820282019728792003956564819949"
        );
      BigInt(0);
      let iw = BigInt(1),
        iv = BigInt(2),
        iE = BigInt(3),
        iI = BigInt(5);
      BigInt(8);
      let i_ = (function (e) {
        let t =
            (rY(
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
          { P: r } = t,
          i = (e) => r6(e, r),
          s = t.montgomeryBits,
          n = Math.ceil(s / 8),
          o = t.nByteLength,
          a = t.adjustScalarBytes || ((e) => e),
          c = t.powPminus2 || ((e) => r4(e, r - BigInt(2), r));
        function l(e, t, r) {
          let s = i(e * (t - r));
          return [(t = i(t - s)), (r = i(r + s))];
        }
        let h = (t.a - BigInt(2)) / BigInt(4);
        function u(e, t) {
          let u = (function (e, t) {
            rF("u", e, iy, r), rF("scalar", t, iy, r);
            let n = im,
              o = iy,
              a = e,
              u = im,
              d = iy,
              p;
            for (let r = BigInt(s - 1); r >= iy; r--) {
              let s = (t >> r) & im;
              (d ^= s),
                (n = (p = l(d, n, a))[0]),
                (a = p[1]),
                (o = (p = l(d, o, u))[0]),
                (u = p[1]),
                (d = s);
              let c = n + o,
                f = i(c * c),
                g = n - o,
                y = i(g * g),
                m = f - y,
                b = a + u,
                w = i((a - u) * c),
                v = i(b * g),
                E = w + v,
                I = w - v;
              (a = i(E * E)),
                (u = i(e * i(I * I))),
                (n = i(f * y)),
                (o = i(m * (f + i(h * m))));
            }
            return (
              (n = (p = l(d, n, a))[0]),
              (a = p[1]),
              (o = (p = l(d, o, u))[0]),
              (u = p[1]),
              i(n * c(o))
            );
          })(
            (function (e) {
              let t = rB("u coordinate", e, n);
              return 32 === o && (t[31] &= 127), rL(t);
            })(t),
            (function (e) {
              let t = rB("scalar", e),
                r = t.length;
              if (r !== n && r !== o)
                throw Error(
                  "invalid scalar, expected " +
                    ("" + n + " or ") +
                    o +
                    " bytes, got " +
                    r
                );
              return rL(a(t));
            })(e)
          );
          if (u === iy) throw Error("invalid private or public key received");
          return rq(i(u), n);
        }
        let d = rq(i(t.Gu), n);
        function p(e) {
          return u(e, d);
        }
        return {
          scalarMult: u,
          scalarMultBase: p,
          getSharedSecret: (e, t) => u(e, t),
          getPublicKey: (e) => p(e),
          utils: { randomPrivateKey: () => t.randomBytes(t.nByteLength) },
          GuBytes: d,
        };
      })({
        P: ib,
        a: BigInt(486662),
        montgomeryBits: 255,
        nByteLength: 32,
        Gu: BigInt(9),
        powPminus2: (e) => {
          let { pow_p_5_8: t, b2: r } = (function (e) {
            let t = BigInt(10),
              r = BigInt(20),
              i = BigInt(40),
              s = BigInt(80),
              n = (((e * e) % ib) * e) % ib,
              o = (r9(n, iv, ib) * n) % ib,
              a = (r9(o, iw, ib) * e) % ib,
              c = (r9(a, iI, ib) * a) % ib,
              l = (r9(c, t, ib) * c) % ib,
              h = (r9(l, r, ib) * l) % ib,
              u = (r9(h, i, ib) * h) % ib,
              d = (r9(u, s, ib) * u) % ib,
              p = (r9(d, s, ib) * u) % ib,
              f = (r9(p, t, ib) * c) % ib;
            return { pow_p_5_8: (r9(f, iv, ib) * e) % ib, b2: n };
          })(e);
          return r6(r9(t, iE, ib) * r, ib);
        },
        adjustScalarBytes: function (e) {
          return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
        },
        randomBytes: ts,
      });
      function ix(e) {
        void 0 !== e.lowS && rS("lowS", e.lowS),
          void 0 !== e.prehash && rS("prehash", e.prehash);
      }
      let { bytesToNumberBE: iD, hexToBytes: iP } = rQ;
      class iS extends Error {
        constructor(e = "") {
          super(e);
        }
      }
      let iO = {
          Err: iS,
          _tlv: {
            encode: (e, t) => {
              let { Err: r } = iO;
              if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
              if (1 & t.length) throw new r("tlv.encode: unpadded data");
              let i = t.length / 2,
                s = rC(i);
              if ((s.length / 2) & 128)
                throw new r("tlv.encode: long form length too big");
              let n = i > 127 ? rC((s.length / 2) | 128) : "";
              return rC(e) + n + s + t;
            },
            decode(e, t) {
              let { Err: r } = iO,
                i = 0;
              if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
              if (t.length < 2 || t[i++] !== e)
                throw new r("tlv.decode: wrong tlv");
              let s = t[i++],
                n = 0;
              if (128 & s) {
                let e = 127 & s;
                if (!e)
                  throw new r(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (e > 4)
                  throw new r("tlv.decode(long): byte length is too big");
                let o = t.subarray(i, i + e);
                if (o.length !== e)
                  throw new r("tlv.decode: length bytes not complete");
                if (0 === o[0])
                  throw new r("tlv.decode(long): zero leftmost byte");
                for (let e of o) n = (n << 8) | e;
                if (((i += e), n < 128))
                  throw new r("tlv.decode(long): not minimal encoding");
              } else n = s;
              let o = t.subarray(i, i + n);
              if (o.length !== n) throw new r("tlv.decode: wrong value length");
              return { v: o, l: t.subarray(i + n) };
            },
          },
          _int: {
            encode(e) {
              let { Err: t } = iO;
              if (e < iA)
                throw new t("integer: negative integers are not allowed");
              let r = rC(e);
              if (
                (8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length)
              )
                throw new t("unexpected DER parsing assertion: unpadded hex");
              return r;
            },
            decode(e) {
              let { Err: t } = iO;
              if (128 & e[0])
                throw new t("invalid signature integer: negative");
              if (0 === e[0] && !(128 & e[1]))
                throw new t(
                  "invalid signature integer: unnecessary leading zero"
                );
              return iD(e);
            },
          },
          toSig(e) {
            let { Err: t, _int: r, _tlv: i } = iO,
              s = "string" == typeof e ? iP(e) : e;
            rP(s);
            let { v: n, l: o } = i.decode(48, s);
            if (o.length)
              throw new t("invalid signature: left bytes after parsing");
            let { v: a, l: c } = i.decode(2, n),
              { v: l, l: h } = i.decode(2, c);
            if (h.length)
              throw new t("invalid signature: left bytes after parsing");
            return { r: r.decode(a), s: r.decode(l) };
          },
          hexFromSig(e) {
            let { _tlv: t, _int: r } = iO,
              i = t.encode(2, r.encode(e.r)),
              s = t.encode(2, r.encode(e.s));
            return t.encode(48, i + s);
          },
        },
        iA = BigInt(0),
        iC = BigInt(1);
      BigInt(2);
      let iR = BigInt(3);
      BigInt(4);
      let iT = ir(
          BigInt(
            "0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"
          )
        ),
        iN = (function (e, t) {
          let r = (t) =>
            (function (e) {
              let t = (function (e) {
                  let t = ig(e);
                  return (
                    rY(
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
                { Fp: r, n: i } = t,
                s = r.BYTES + 1,
                n = 2 * r.BYTES + 1;
              function o(e) {
                return r6(e, i);
              }
              let {
                  ProjectivePoint: a,
                  normPrivateKeyToScalar: c,
                  weierstrassEquation: l,
                  isWithinCurveOrder: h,
                } = (function (e) {
                  var t;
                  let r = (function (e) {
                      let t = ig(e);
                      rY(
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
                      let { endo: r, Fp: i, a: s } = t;
                      if (r) {
                        if (!i.eql(s, i.ZERO))
                          throw Error(
                            "invalid endomorphism, can only be defined for Koblitz curves that have a=0"
                          );
                        if (
                          "object" != typeof r ||
                          "bigint" != typeof r.beta ||
                          "function" != typeof r.splitScalar
                        )
                          throw Error(
                            "invalid endomorphism, expected beta: bigint and splitScalar: function"
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: i } = r,
                    s = ir(r.n, r.nBitLength),
                    n =
                      r.toBytes ||
                      ((e, t, r) => {
                        let s = t.toAffine();
                        return r$(
                          Uint8Array.from([4]),
                          i.toBytes(s.x),
                          i.toBytes(s.y)
                        );
                      }),
                    o =
                      r.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: i.fromBytes(t.subarray(0, i.BYTES)),
                          y: i.fromBytes(t.subarray(i.BYTES, 2 * i.BYTES)),
                        };
                      });
                  function a(e) {
                    let { a: t, b: s } = r,
                      n = i.sqr(e),
                      o = i.mul(n, e);
                    return i.add(i.add(o, i.mul(e, t)), s);
                  }
                  if (!i.eql(i.sqr(r.Gy), a(r.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function c(e) {
                    let t,
                      {
                        allowedPrivateKeyLengths: i,
                        nByteLength: s,
                        wrapPrivateKey: n,
                        n: o,
                      } = r;
                    if (i && "bigint" != typeof e) {
                      if (
                        (rD(e) && (e = rA(e)),
                        "string" != typeof e || !i.includes(e.length))
                      )
                        throw Error("invalid private key");
                      e = e.padStart(2 * s, "0");
                    }
                    try {
                      t =
                        "bigint" == typeof e ? e : rU(rB("private key", e, s));
                    } catch {
                      throw Error(
                        "invalid private key, expected hex or " +
                          s +
                          " bytes, got " +
                          typeof e
                      );
                    }
                    return n && (t = r6(t, o)), rF("private key", t, iC, o), t;
                  }
                  function l(e) {
                    if (!(e instanceof d))
                      throw Error("ProjectivePoint expected");
                  }
                  let h = rZ((e, t) => {
                      let { px: r, py: s, pz: n } = e;
                      if (i.eql(n, i.ONE)) return { x: r, y: s };
                      let o = e.is0();
                      null == t && (t = o ? i.ONE : i.inv(n));
                      let a = i.mul(r, t),
                        c = i.mul(s, t),
                        l = i.mul(n, t);
                      if (o) return { x: i.ZERO, y: i.ZERO };
                      if (!i.eql(l, i.ONE)) throw Error("invZ was invalid");
                      return { x: a, y: c };
                    }),
                    u = rZ((e) => {
                      if (e.is0()) {
                        if (r.allowInfinityPoint && !i.is0(e.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: t, y: s } = e.toAffine();
                      if (!i.isValid(t) || !i.isValid(s))
                        throw Error("bad point: x or y not FE");
                      let n = i.sqr(s),
                        o = a(t);
                      if (!i.eql(n, o))
                        throw Error("bad point: equation left != right");
                      if (!e.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  class d {
                    constructor(e, t, r) {
                      if (
                        ((this.px = e),
                        (this.py = t),
                        (this.pz = r),
                        null == e || !i.isValid(e))
                      )
                        throw Error("x required");
                      if (null == t || !i.isValid(t)) throw Error("y required");
                      if (null == r || !i.isValid(r)) throw Error("z required");
                      Object.freeze(this);
                    }
                    static fromAffine(e) {
                      let { x: t, y: r } = e || {};
                      if (!e || !i.isValid(t) || !i.isValid(r))
                        throw Error("invalid affine point");
                      if (e instanceof d)
                        throw Error("projective point not allowed");
                      let s = (e) => i.eql(e, i.ZERO);
                      return s(t) && s(r) ? d.ZERO : new d(t, r, i.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = i.invertBatch(e.map((e) => e.pz));
                      return e
                        .map((e, r) => e.toAffine(t[r]))
                        .map(d.fromAffine);
                    }
                    static fromHex(e) {
                      let t = d.fromAffine(o(rB("pointHex", e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return d.BASE.multiply(c(e));
                    }
                    static msm(e, t) {
                      return (function (e, t, r, i) {
                        if (
                          ((function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array expected");
                            e.forEach((e, r) => {
                              if (!(e instanceof t))
                                throw Error("invalid point at index " + r);
                            });
                          })(r, e),
                          (function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array of scalars expected");
                            e.forEach((e, r) => {
                              if (!t.isValid(e))
                                throw Error("invalid scalar at index " + r);
                            });
                          })(i, t),
                          r.length !== i.length)
                        )
                          throw Error(
                            "arrays of points and scalars must have equal length"
                          );
                        let s = e.ZERO,
                          n = rH(BigInt(r.length)),
                          o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1,
                          a = (1 << o) - 1,
                          c = Array(a + 1).fill(s),
                          l = Math.floor((t.BITS - 1) / o) * o,
                          h = s;
                        for (let e = l; e >= 0; e -= o) {
                          c.fill(s);
                          for (let t = 0; t < i.length; t++) {
                            let s = Number((i[t] >> BigInt(e)) & BigInt(a));
                            c[s] = c[s].add(r[t]);
                          }
                          let t = s;
                          for (let e = c.length - 1, r = s; e > 0; e--)
                            (r = r.add(c[e])), (t = t.add(r));
                          if (((h = h.add(t)), 0 !== e))
                            for (let e = 0; e < o; e++) h = h.double();
                        }
                        return h;
                      })(d, s, e, t);
                    }
                    _setWindowSize(e) {
                      f.setWindowSize(this, e);
                    }
                    assertValidity() {
                      u(this);
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (i.isOdd) return !i.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      l(e);
                      let { px: t, py: r, pz: s } = this,
                        { px: n, py: o, pz: a } = e,
                        c = i.eql(i.mul(t, a), i.mul(n, s)),
                        h = i.eql(i.mul(r, a), i.mul(o, s));
                      return c && h;
                    }
                    negate() {
                      return new d(this.px, i.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: t } = r,
                        s = i.mul(t, iR),
                        { px: n, py: o, pz: a } = this,
                        c = i.ZERO,
                        l = i.ZERO,
                        h = i.ZERO,
                        u = i.mul(n, n),
                        p = i.mul(o, o),
                        f = i.mul(a, a),
                        g = i.mul(n, o);
                      return (
                        (g = i.add(g, g)),
                        (h = i.mul(n, a)),
                        (h = i.add(h, h)),
                        (c = i.mul(e, h)),
                        (l = i.mul(s, f)),
                        (l = i.add(c, l)),
                        (c = i.sub(p, l)),
                        (l = i.add(p, l)),
                        (l = i.mul(c, l)),
                        (c = i.mul(g, c)),
                        (h = i.mul(s, h)),
                        (f = i.mul(e, f)),
                        (g = i.sub(u, f)),
                        (g = i.mul(e, g)),
                        (g = i.add(g, h)),
                        (h = i.add(u, u)),
                        (u = i.add(h, u)),
                        (u = i.add(u, f)),
                        (u = i.mul(u, g)),
                        (l = i.add(l, u)),
                        (f = i.mul(o, a)),
                        (f = i.add(f, f)),
                        (u = i.mul(f, g)),
                        (c = i.sub(c, u)),
                        (h = i.mul(f, p)),
                        (h = i.add(h, h)),
                        new d(c, l, (h = i.add(h, h)))
                      );
                    }
                    add(e) {
                      l(e);
                      let { px: t, py: s, pz: n } = this,
                        { px: o, py: a, pz: c } = e,
                        h = i.ZERO,
                        u = i.ZERO,
                        p = i.ZERO,
                        f = r.a,
                        g = i.mul(r.b, iR),
                        y = i.mul(t, o),
                        m = i.mul(s, a),
                        b = i.mul(n, c),
                        w = i.add(t, s),
                        v = i.add(o, a);
                      (w = i.mul(w, v)),
                        (v = i.add(y, m)),
                        (w = i.sub(w, v)),
                        (v = i.add(t, n));
                      let E = i.add(o, c);
                      return (
                        (v = i.mul(v, E)),
                        (E = i.add(y, b)),
                        (v = i.sub(v, E)),
                        (E = i.add(s, n)),
                        (h = i.add(a, c)),
                        (E = i.mul(E, h)),
                        (h = i.add(m, b)),
                        (E = i.sub(E, h)),
                        (p = i.mul(f, v)),
                        (h = i.mul(g, b)),
                        (p = i.add(h, p)),
                        (h = i.sub(m, p)),
                        (p = i.add(m, p)),
                        (u = i.mul(h, p)),
                        (m = i.add(y, y)),
                        (m = i.add(m, y)),
                        (b = i.mul(f, b)),
                        (v = i.mul(g, v)),
                        (m = i.add(m, b)),
                        (b = i.sub(y, b)),
                        (b = i.mul(f, b)),
                        (v = i.add(v, b)),
                        (y = i.mul(m, v)),
                        (u = i.add(u, y)),
                        (y = i.mul(E, v)),
                        (h = i.mul(w, h)),
                        (h = i.sub(h, y)),
                        (y = i.mul(w, m)),
                        (p = i.mul(E, p)),
                        new d(h, u, (p = i.add(p, y)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(d.ZERO);
                    }
                    wNAF(e) {
                      return f.wNAFCached(this, e, d.normalizeZ);
                    }
                    multiplyUnsafe(e) {
                      let { endo: t, n: s } = r;
                      rF("scalar", e, iA, s);
                      let n = d.ZERO;
                      if (e === iA) return n;
                      if (this.is0() || e === iC) return this;
                      if (!t || f.hasPrecomputes(this))
                        return f.wNAFCachedUnsafe(this, e, d.normalizeZ);
                      let {
                          k1neg: o,
                          k1: a,
                          k2neg: c,
                          k2: l,
                        } = t.splitScalar(e),
                        h = n,
                        u = n,
                        p = this;
                      for (; a > iA || l > iA; )
                        a & iC && (h = h.add(p)),
                          l & iC && (u = u.add(p)),
                          (p = p.double()),
                          (a >>= iC),
                          (l >>= iC);
                      return (
                        o && (h = h.negate()),
                        c && (u = u.negate()),
                        (u = new d(i.mul(u.px, t.beta), u.py, u.pz)),
                        h.add(u)
                      );
                    }
                    multiply(e) {
                      let t,
                        s,
                        { endo: n, n: o } = r;
                      if ((rF("scalar", e, iC, o), n)) {
                        let {
                            k1neg: r,
                            k1: o,
                            k2neg: a,
                            k2: c,
                          } = n.splitScalar(e),
                          { p: l, f: h } = this.wNAF(o),
                          { p: u, f: p } = this.wNAF(c);
                        (l = f.constTimeNegate(r, l)),
                          (u = f.constTimeNegate(a, u)),
                          (u = new d(i.mul(u.px, n.beta), u.py, u.pz)),
                          (t = l.add(u)),
                          (s = h.add(p));
                      } else {
                        let { p: r, f: i } = this.wNAF(e);
                        (t = r), (s = i);
                      }
                      return d.normalizeZ([t, s])[0];
                    }
                    multiplyAndAddUnsafe(e, t, r) {
                      let i = d.BASE,
                        s = (e, t) =>
                          t !== iA && t !== iC && e.equals(i)
                            ? e.multiply(t)
                            : e.multiplyUnsafe(t),
                        n = s(this, t).add(s(e, r));
                      return n.is0() ? void 0 : n;
                    }
                    toAffine(e) {
                      return h(this, e);
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: t } = r;
                      if (e === iC) return !0;
                      if (t) return t(d, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: t } = r;
                      return e === iC
                        ? this
                        : t
                        ? t(d, this)
                        : this.multiplyUnsafe(r.h);
                    }
                    toRawBytes(e = !0) {
                      return (
                        rS("isCompressed", e),
                        this.assertValidity(),
                        n(d, this, e)
                      );
                    }
                    toHex(e = !0) {
                      return rS("isCompressed", e), rA(this.toRawBytes(e));
                    }
                  }
                  (d.BASE = new d(r.Gx, r.Gy, i.ONE)),
                    (d.ZERO = new d(i.ZERO, i.ONE, i.ZERO));
                  let p = r.nBitLength,
                    f =
                      ((t = r.endo ? Math.ceil(p / 2) : p),
                      {
                        constTimeNegate: ic,
                        hasPrecomputes: (e) => 1 !== ip(e),
                        unsafeLadder(e, t, r = d.ZERO) {
                          let i = e;
                          for (; t > io; )
                            t & ia && (r = r.add(i)),
                              (i = i.double()),
                              (t >>= ia);
                          return r;
                        },
                        precomputeWindow(e, r) {
                          let { windows: i, windowSize: s } = ih(r, t),
                            n = [],
                            o = e,
                            a = o;
                          for (let e = 0; e < i; e++) {
                            (a = o), n.push(a);
                            for (let e = 1; e < s; e++)
                              (a = a.add(o)), n.push(a);
                            o = a.double();
                          }
                          return n;
                        },
                        wNAF(e, r, i) {
                          let { windows: s, windowSize: n } = ih(e, t),
                            o = d.ZERO,
                            a = d.BASE,
                            c = BigInt(2 ** e - 1),
                            l = 2 ** e,
                            h = BigInt(e);
                          for (let e = 0; e < s; e++) {
                            let t = e * n,
                              s = Number(i & c);
                            (i >>= h), s > n && ((s -= l), (i += ia));
                            let u = t + Math.abs(s) - 1,
                              d = e % 2 != 0,
                              p = s < 0;
                            0 === s
                              ? (a = a.add(ic(d, r[t])))
                              : (o = o.add(ic(p, r[u])));
                          }
                          return { p: o, f: a };
                        },
                        wNAFUnsafe(e, r, i, s = d.ZERO) {
                          let { windows: n, windowSize: o } = ih(e, t),
                            a = BigInt(2 ** e - 1),
                            c = 2 ** e,
                            l = BigInt(e);
                          for (let e = 0; e < n; e++) {
                            let t = e * o;
                            if (i === io) break;
                            let n = Number(i & a);
                            if (
                              ((i >>= l),
                              n > o && ((n -= c), (i += ia)),
                              0 === n)
                            )
                              continue;
                            let h = r[t + Math.abs(n) - 1];
                            n < 0 && (h = h.negate()), (s = s.add(h));
                          }
                          return s;
                        },
                        getPrecomputes(e, t, r) {
                          let i = iu.get(t);
                          return (
                            i ||
                              ((i = this.precomputeWindow(t, e)),
                              1 !== e && iu.set(t, r(i))),
                            i
                          );
                        },
                        wNAFCached(e, t, r) {
                          let i = ip(e);
                          return this.wNAF(i, this.getPrecomputes(i, e, r), t);
                        },
                        wNAFCachedUnsafe(e, t, r, i) {
                          let s = ip(e);
                          return 1 === s
                            ? this.unsafeLadder(e, t, i)
                            : this.wNAFUnsafe(
                                s,
                                this.getPrecomputes(s, e, r),
                                t,
                                i
                              );
                        },
                        setWindowSize(e, r) {
                          il(r, t), id.set(e, r), iu.delete(e);
                        },
                      });
                  return {
                    CURVE: r,
                    ProjectivePoint: d,
                    normPrivateKeyToScalar: c,
                    weierstrassEquation: a,
                    isWithinCurveOrder: function (e) {
                      return rz(e, iC, r.n);
                    },
                  };
                })({
                  ...t,
                  toBytes(e, t, i) {
                    let s = t.toAffine(),
                      n = r.toBytes(s.x);
                    return (
                      rS("isCompressed", i),
                      i
                        ? r$(Uint8Array.from([t.hasEvenY() ? 2 : 3]), n)
                        : r$(Uint8Array.from([4]), n, r.toBytes(s.y))
                    );
                  },
                  fromBytes(e) {
                    let t = e.length,
                      i = e[0],
                      o = e.subarray(1);
                    if (t === s && (2 === i || 3 === i)) {
                      let e,
                        t = rU(o);
                      if (!rz(t, iC, r.ORDER))
                        throw Error("Point is not on curve");
                      let s = l(t);
                      try {
                        e = r.sqrt(s);
                      } catch (e) {
                        throw Error(
                          "Point is not on curve" +
                            (e instanceof Error ? ": " + e.message : "")
                        );
                      }
                      return (
                        ((1 & i) == 1) != ((e & iC) === iC) && (e = r.neg(e)),
                        { x: t, y: e }
                      );
                    }
                    if (t === n && 4 === i)
                      return {
                        x: r.fromBytes(o.subarray(0, r.BYTES)),
                        y: r.fromBytes(o.subarray(r.BYTES, 2 * r.BYTES)),
                      };
                    throw Error(
                      "invalid Point, expected length of " +
                        s +
                        ", or uncompressed " +
                        n +
                        ", got " +
                        t
                    );
                  },
                }),
                u = (e) => rA(rk(e, t.nByteLength)),
                d = (e, t, r) => rU(e.slice(t, r));
              class p {
                constructor(e, t, r) {
                  (this.r = e),
                    (this.s = t),
                    (this.recovery = r),
                    this.assertValidity();
                }
                static fromCompact(e) {
                  let r = t.nByteLength;
                  return new p(
                    d((e = rB("compactSignature", e, 2 * r)), 0, r),
                    d(e, r, 2 * r)
                  );
                }
                static fromDER(e) {
                  let { r: t, s: r } = iO.toSig(rB("DER", e));
                  return new p(t, r);
                }
                assertValidity() {
                  rF("r", this.r, iC, i), rF("s", this.s, iC, i);
                }
                addRecoveryBit(e) {
                  return new p(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: s, s: n, recovery: c } = this,
                    l = y(rB("msgHash", e));
                  if (null == c || ![0, 1, 2, 3].includes(c))
                    throw Error("recovery id invalid");
                  let h = 2 === c || 3 === c ? s + t.n : s;
                  if (h >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let d = (1 & c) == 0 ? "02" : "03",
                    p = a.fromHex(d + u(h)),
                    f = r7(h, i),
                    g = o(-l * f),
                    m = o(n * f),
                    b = a.BASE.multiplyAndAddUnsafe(p, g, m);
                  if (!b) throw Error("point at infinify");
                  return b.assertValidity(), b;
                }
                hasHighS() {
                  return this.s > i >> iC;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new p(this.r, o(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return rj(this.toDERHex());
                }
                toDERHex() {
                  return iO.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return rj(this.toCompactHex());
                }
                toCompactHex() {
                  return u(this.r) + u(this.s);
                }
              }
              function f(e) {
                let t = rD(e),
                  r = "string" == typeof e,
                  i = (t || r) && e.length;
                return t
                  ? i === s || i === n
                  : r
                  ? i === 2 * s || i === 2 * n
                  : e instanceof a;
              }
              let g =
                  t.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error("input is too large");
                    let r = rU(e),
                      i = 8 * e.length - t.nBitLength;
                    return i > 0 ? r >> BigInt(i) : r;
                  },
                y =
                  t.bits2int_modN ||
                  function (e) {
                    return o(g(e));
                  },
                m = rV(t.nBitLength);
              function b(e) {
                return (
                  rF("num < 2^" + t.nBitLength, e, iA, m), rk(e, t.nByteLength)
                );
              }
              let w = { lowS: t.lowS, prehash: !1 },
                v = { lowS: t.lowS, prehash: !1 };
              return (
                a.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return a.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, r = !0) {
                    if (f(e)) throw Error("first arg must be private key");
                    if (!f(t)) throw Error("second arg must be public key");
                    return a.fromHex(t).multiply(c(e)).toRawBytes(r);
                  },
                  sign: function (e, s, n = w) {
                    let { seed: l, k2sig: u } = (function (e, s, n = w) {
                      if (["recovered", "canonical"].some((e) => e in n))
                        throw Error("sign() legacy options not supported");
                      let { hash: l, randomBytes: u } = t,
                        { lowS: d, prehash: f, extraEntropy: m } = n;
                      null == d && (d = !0),
                        (e = rB("msgHash", e)),
                        ix(n),
                        f && (e = rB("prehashed msgHash", l(e)));
                      let v = y(e),
                        E = c(s),
                        I = [b(E), b(v)];
                      if (null != m && !1 !== m) {
                        let e = !0 === m ? u(r.BYTES) : m;
                        I.push(rB("extraEntropy", e));
                      }
                      return {
                        seed: r$(...I),
                        k2sig: function (e) {
                          var t;
                          let r = g(e);
                          if (!h(r)) return;
                          let s = r7(r, i),
                            n = a.BASE.multiply(r).toAffine(),
                            c = o(n.x);
                          if (c === iA) return;
                          let l = o(s * o(v + c * E));
                          if (l === iA) return;
                          let u = (2 * (n.x !== c)) | Number(n.y & iC),
                            f = l;
                          return (
                            d &&
                              l > i >> iC &&
                              ((f = (t = l) > i >> iC ? o(-t) : t), (u ^= 1)),
                            new p(c, f, u)
                          );
                        },
                      };
                    })(e, s, n);
                    return rJ(t.hash.outputLen, t.nByteLength, t.hmac)(l, u);
                  },
                  verify: function (e, r, s, n = v) {
                    let c, l;
                    (r = rB("msgHash", r)), (s = rB("publicKey", s));
                    let { lowS: h, prehash: u, format: d } = n;
                    if ((ix(n), "strict" in n))
                      throw Error("options.strict was renamed to lowS");
                    if (void 0 !== d && "compact" !== d && "der" !== d)
                      throw Error("format must be compact or der");
                    let f = "string" == typeof e || rD(e),
                      g =
                        !f &&
                        !d &&
                        "object" == typeof e &&
                        null !== e &&
                        "bigint" == typeof e.r &&
                        "bigint" == typeof e.s;
                    if (!f && !g)
                      throw Error(
                        "invalid signature, expected Uint8Array, hex string or Signature instance"
                      );
                    try {
                      if ((g && (c = new p(e.r, e.s)), f)) {
                        try {
                          "compact" !== d && (c = p.fromDER(e));
                        } catch (e) {
                          if (!(e instanceof iO.Err)) throw e;
                        }
                        c || "der" === d || (c = p.fromCompact(e));
                      }
                      l = a.fromHex(s);
                    } catch {
                      return !1;
                    }
                    if (!c || (h && c.hasHighS())) return !1;
                    u && (r = t.hash(r));
                    let { r: m, s: b } = c,
                      w = y(r),
                      E = r7(b, i),
                      I = o(w * E),
                      _ = o(m * E),
                      x = a.BASE.multiplyAndAddUnsafe(l, I, _)?.toAffine();
                    return !!x && o(x.x) === m;
                  },
                  ProjectivePoint: a,
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
                      let e = is(t.n);
                      return (function (e, t, r = !1) {
                        let i = e.length,
                          s = ii(t),
                          n = is(t);
                        if (i < 16 || i < n || i > 1024)
                          throw Error(
                            "expected " + n + "-1024 bytes of input, got " + i
                          );
                        let o = r6(r ? rL(e) : rU(e), t - r0) + r0;
                        return r ? rq(o, s) : rk(o, s);
                      })(t.randomBytes(e), t.n);
                    },
                    precompute: (e = 8, t = a.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...e,
              hash: t,
              hmac: (e, ...r) =>
                rd(
                  t,
                  e,
                  (function (...e) {
                    let t = 0;
                    for (let r = 0; r < e.length; r++) {
                      let i = e[r];
                      eY(i), (t += i.length);
                    }
                    let r = new Uint8Array(t);
                    for (let t = 0, i = 0; t < e.length; t++) {
                      let s = e[t];
                      r.set(s, i), (i += s.length);
                    }
                    return r;
                  })(...r)
                ),
              randomBytes: ts,
            });
          return { ...r(t), create: r };
        })(
          {
            a: iT.create(BigInt("-3")),
            b: BigInt(
              "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"
            ),
            Fp: iT,
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
          rE
        ),
        ij = "base10",
        iU = "base16",
        iL = "base64pad",
        ik = "base64url",
        iq = "utf8";
      function iB() {
        let e = ts(32);
        return (0, ea.dI)(e, iU);
      }
      function i$(e) {
        let t = rE((0, ea.sH)(e, iU));
        return (0, ea.dI)(t, iU);
      }
      function iM(e) {
        let t = rE((0, ea.sH)(e, iq));
        return (0, ea.dI)(t, iU);
      }
      function iz(e) {
        return (0, ea.sH)(`${e}`, ij);
      }
      function iF(e) {
        return Number((0, ea.dI)(e, ij));
      }
      function iH(e) {
        return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
      function iV(e) {
        let t = e.replace(/-/g, "+").replace(/_/g, "/"),
          r = (4 - (t.length % 4)) % 4;
        return t + "=".repeat(r);
      }
      function iK(e) {
        if (2 === iF(e.type))
          return (0, ea.dI)((0, ea.xW)([e.type, e.sealed]), iL);
        if (1 === iF(e.type)) {
          if (typeof e.senderPublicKey > "u")
            throw Error("Missing sender public key for type 1 envelope");
          return (0, ea.dI)(
            (0, ea.xW)([e.type, e.senderPublicKey, e.iv, e.sealed]),
            iL
          );
        }
        return (0, ea.dI)((0, ea.xW)([e.type, e.iv, e.sealed]), iL);
      }
      function iW(e) {
        let t = (e.encoding || iL) === ik ? iV(e.encoded) : e.encoded,
          r = (0, ea.sH)(t, iL),
          i = r.slice(0, 1);
        if (1 === iF(i)) {
          let e = r.slice(1, 33),
            t = r.slice(33, 45);
          return { type: i, sealed: r.slice(45), iv: t, senderPublicKey: e };
        }
        if (2 === iF(i)) return { type: i, sealed: r.slice(1), iv: ts(12) };
        let s = r.slice(1, 13);
        return { type: i, sealed: r.slice(13), iv: s };
      }
      function iJ(e) {
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
      function iG(e) {
        return (
          1 === e.type &&
          "string" == typeof e.senderPublicKey &&
          "string" == typeof e.receiverPublicKey
        );
      }
      function iY(e) {
        return e?.relay || { protocol: "irn" };
      }
      function iZ(e) {
        let t = ec.CG[e];
        if (typeof t > "u") throw Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      function iQ(e) {
        var t;
        if (!e.includes("wc:")) {
          let t = eJ(e);
          null != t && t.includes("wc:") && (e = t);
        }
        let r = (e = (e = e.includes("wc://")
            ? e.replace("wc://", "")
            : e).includes("wc:")
            ? e.replace("wc:", "")
            : e).indexOf(":"),
          i = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
          s = e.substring(0, r),
          n = e.substring(r + 1, i).split("@"),
          o = new URLSearchParams("u" > typeof i ? e.substring(i) : ""),
          a = {};
        o.forEach((e, t) => {
          a[t] = e;
        });
        let c = "string" == typeof a.methods ? a.methods.split(",") : void 0;
        return {
          protocol: s,
          topic: (t = n[0]).startsWith("//") ? t.substring(2) : t,
          version: parseInt(n[1], 10),
          symKey: a.symKey,
          relay: (function (e, t = "-") {
            let r = {},
              i = "relay" + t;
            return (
              Object.keys(e).forEach((t) => {
                if (t.startsWith(i)) {
                  let s = t.replace(i, ""),
                    n = e[t];
                  r[s] = n;
                }
              }),
              r
            );
          })(a),
          methods: c,
          expiryTimestamp: a.expiryTimestamp
            ? parseInt(a.expiryTimestamp, 10)
            : void 0,
        };
      }
      function iX(e) {
        let t = new URLSearchParams(),
          r = (function (e, t = "-") {
            let r = {};
            return (
              Object.keys(e).forEach((i) => {
                e[i] && (r["relay" + t + i] = e[i]);
              }),
              r
            );
          })(e.relay);
        Object.keys(r)
          .sort()
          .forEach((e) => {
            t.set(e, r[e]);
          }),
          t.set("symKey", e.symKey),
          e.expiryTimestamp &&
            t.set("expiryTimestamp", e.expiryTimestamp.toString()),
          e.methods && t.set("methods", e.methods.join(","));
        let i = t.toString();
        return `${e.protocol}:${e.topic}@${e.version}?${i}`;
      }
      function i0(e, t, r) {
        return `${e}?wc_ev=${r}&topic=${t}`;
      }
      var i1 = Object.defineProperty,
        i2 = Object.defineProperties,
        i8 = Object.getOwnPropertyDescriptors,
        i3 = Object.getOwnPropertySymbols,
        i5 = Object.prototype.hasOwnProperty,
        i6 = Object.prototype.propertyIsEnumerable,
        i4 = (e, t, r) =>
          t in e
            ? i1(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        i9 = (e, t) => {
          for (var r in t || (t = {})) i5.call(t, r) && i4(e, r, t[r]);
          if (i3) for (var r of i3(t)) i6.call(t, r) && i4(e, r, t[r]);
          return e;
        },
        i7 = (e, t) => i2(e, i8(t));
      function se(e) {
        let t = [];
        return (
          e.forEach((e) => {
            let [r, i] = e.split(":");
            t.push(`${r}:${i}`);
          }),
          t
        );
      }
      function st(e) {
        return e.includes(":");
      }
      function sr(e) {
        return st(e) ? e.split(":")[0] : e;
      }
      function si(e) {
        var t, r, i;
        let s = {};
        if (!sh(e)) return s;
        for (let [n, o] of Object.entries(e)) {
          let e = st(n) ? [n] : o.chains,
            a = o.methods || [],
            c = o.events || [],
            l = sr(n);
          s[l] = i7(i9({}, s[l]), {
            chains: ez(e, null == (t = s[l]) ? void 0 : t.chains),
            methods: ez(a, null == (r = s[l]) ? void 0 : r.methods),
            events: ez(c, null == (i = s[l]) ? void 0 : i.events),
          });
        }
        return s;
      }
      function ss(e, t) {
        let r = (function (e) {
          let t = {};
          return (
            e?.forEach((e) => {
              var r;
              let [i, s] = e.split(":");
              t[i] ||
                (t[i] = { accounts: [], chains: [], events: [], methods: [] }),
                t[i].accounts.push(e),
                null == (r = t[i].chains) || r.push(`${i}:${s}`);
            }),
            t
          );
        })((t = t.map((e) => e.replace("did:pkh:", ""))));
        for (let [t, i] of Object.entries(r))
          i.methods ? (i.methods = ez(i.methods, e)) : (i.methods = e),
            (i.events = ["chainChanged", "accountsChanged"]);
        return r;
      }
      let sn = {
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
        so = {
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
      function sa(e, t) {
        let { message: r, code: i } = so[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function sc(e, t) {
        let { message: r, code: i } = sn[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function sl(e, t) {
        return (
          !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
        );
      }
      function sh(e) {
        return (
          Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        );
      }
      function su(e) {
        return typeof e > "u";
      }
      function sd(e, t) {
        return !!(t && su(e)) || ("string" == typeof e && !!e.trim().length);
      }
      function sp(e, t) {
        return !!(t && su(e)) || ("number" == typeof e && !isNaN(e));
      }
      function sf(e) {
        return !!(sd(e, !1) && e.includes(":")) && 2 === e.split(":").length;
      }
      function sg(e) {
        let t = !0;
        return (
          sl(e) ? e.length && (t = e.every((e) => sd(e, !1))) : (t = !1), t
        );
      }
      function sy(e, t) {
        let r = null;
        return (
          Object.values(e).forEach((e) => {
            var i;
            let s;
            if (r) return;
            let n =
              ((i = `${t}, namespace`),
              (s = null),
              sg(e?.methods)
                ? sg(e?.events) ||
                  (s = sc(
                    "UNSUPPORTED_EVENTS",
                    `${i}, events should be an array of strings or empty array for no events`
                  ))
                : (s = sc(
                    "UNSUPPORTED_METHODS",
                    `${i}, methods should be an array of strings or empty array for no methods`
                  )),
              s);
            n && (r = n);
          }),
          r
        );
      }
      function sm(e, t) {
        let r = null;
        if (e && sh(e)) {
          let i,
            s = sy(e, t);
          s && (r = s);
          let n =
            ((i = null),
            Object.values(e).forEach((e) => {
              var r, s;
              let n;
              if (i) return;
              let o =
                ((r = e?.accounts),
                (s = `${t} namespace`),
                (n = null),
                sl(r)
                  ? r.forEach((e) => {
                      n ||
                        (function (e) {
                          if (sd(e, !1) && e.includes(":")) {
                            let t = e.split(":");
                            if (3 === t.length) {
                              let e = t[0] + ":" + t[1];
                              return !!t[2] && sf(e);
                            }
                          }
                          return !1;
                        })(e) ||
                        (n = sc(
                          "UNSUPPORTED_ACCOUNTS",
                          `${s}, account ${e} should be a string and conform to "namespace:chainId:address" format`
                        ));
                    })
                  : (n = sc(
                      "UNSUPPORTED_ACCOUNTS",
                      `${s}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
                    )),
                n);
              o && (i = o);
            }),
            i);
          n && (r = n);
        } else
          r = sa(
            "MISSING_OR_INVALID",
            `${t}, namespaces should be an object with data`
          );
        return r;
      }
      function sb(e) {
        return sd(e.protocol, !0);
      }
      function sw(e) {
        return "u" > typeof e;
      }
      function sv(e, t) {
        return !(
          !sf(t) ||
          !(function (e) {
            let t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...se(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function sE(e, t, r) {
        let i = null,
          s = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((r) => {
                var i;
                r.includes(":")
                  ? (t[r] = e[r])
                  : null == (i = e[r].chains) ||
                    i.forEach((i) => {
                      t[i] = { methods: e[r].methods, events: e[r].events };
                    });
              }),
              t
            );
          })(e),
          n = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((r) => {
                if (r.includes(":")) t[r] = e[r];
                else {
                  let i = se(e[r].accounts);
                  i?.forEach((i) => {
                    t[i] = {
                      accounts: e[r].accounts.filter((e) =>
                        e.includes(`${i}:`)
                      ),
                      methods: e[r].methods,
                      events: e[r].events,
                    };
                  });
                }
              }),
              t
            );
          })(t),
          o = Object.keys(s),
          a = Object.keys(n),
          c = sI(Object.keys(e)),
          l = sI(Object.keys(t)),
          h = c.filter((e) => !l.includes(e));
        return (
          h.length &&
            (i = sa(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(t).toString()}`
            )),
          eT(o, a) ||
            (i = sa(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(":") || i) return;
            let s = se(t[e].accounts);
            s.includes(e) ||
              (i = sa(
                "NON_CONFORMING_NAMESPACES",
                `${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${s.toString()}`
              ));
          }),
          o.forEach((e) => {
            i ||
              (eT(s[e].methods, n[e].methods)
                ? eT(s[e].events, n[e].events) ||
                  (i = sa(
                    "NON_CONFORMING_NAMESPACES",
                    `${r} namespaces events don't satisfy namespace events for ${e}`
                  ))
                : (i = sa(
                    "NON_CONFORMING_NAMESPACES",
                    `${r} namespaces methods don't satisfy namespace methods for ${e}`
                  )));
          }),
          i
        );
      }
      function sI(e) {
        return [
          ...new Set(e.map((e) => (e.includes(":") ? e.split(":")[0] : e))),
        ];
      }
      function s_() {
        let e = eO();
        return new Promise((t) => {
          switch (e) {
            case ex.browser:
              t(eS() && navigator?.onLine);
              break;
            case ex.reactNative:
              t(sx());
              break;
            case ex.node:
            default:
              t(!0);
          }
        });
      }
      async function sx() {
        if (eP() && "u" > typeof r.g && null != r.g && r.g.NetInfo) {
          let e = await (null == r.g ? void 0 : r.g.NetInfo.fetch());
          return e?.isConnected;
        }
        return !0;
      }
      let sD = {};
      class sP {
        static get(e) {
          return sD[e];
        }
        static set(e, t) {
          sD[e] = t;
        }
        static delete(e) {
          delete sD[e];
        }
      }
      var sS = r(97061),
        sO = r(32350),
        sA = r(44134).Buffer;
      function sC(e, ...t) {
        try {
          var r;
          return (r = e(...t)) && "function" == typeof r.then
            ? r
            : Promise.resolve(r);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      function sR(e) {
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
        if ("function" == typeof e.toJSON) return sR(e.toJSON());
        throw Error("[unstorage] Cannot stringify value!");
      }
      let sT = "base64:";
      function sN(e) {
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
      function sj(e) {
        return (e = sN(e)) ? e + ":" : "";
      }
      let sU = () => {
        let e = new Map();
        return {
          name: "memory",
          getInstance: () => e,
          hasItem: (t) => e.has(t),
          getItem: (t) => e.get(t) ?? null,
          getItemRaw: (t) => e.get(t) ?? null,
          setItem(t, r) {
            e.set(t, r);
          },
          setItemRaw(t, r) {
            e.set(t, r);
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
      function sL(e, t, r) {
        return e.watch ? e.watch((e, i) => t(e, r + i)) : () => {};
      }
      async function sk(e) {
        "function" == typeof e.dispose && (await sC(e.dispose));
      }
      var sq = r(2671),
        sB = r(71075),
        s$ = (e = {}) => {
          let t,
            r = e.base && e.base.length > 0 ? `${e.base}:` : "",
            i = (e) => r + e;
          return (
            e.dbName && e.storeName && (t = (0, sq.y$)(e.dbName, e.storeName)),
            {
              name: "idb-keyval",
              options: e,
              hasItem: async (e) => !(typeof (await (0, sq.Jt)(i(e), t)) > "u"),
              getItem: async (e) => (await (0, sq.Jt)(i(e), t)) ?? null,
              setItem: (e, r) => (0, sq.hZ)(i(e), r, t),
              removeItem: (e) => (0, sq.yH)(i(e), t),
              getKeys: () => (0, sq.HP)(t),
              clear: () => (0, sq.IU)(t),
            }
          );
        };
      class sM {
        constructor() {
          this.indexedDb = (function (e = {}) {
            let t = {
                mounts: { "": e.driver || sU() },
                mountpoints: [""],
                watching: !1,
                watchListeners: [],
                unwatch: {},
              },
              r = (e) => {
                for (let r of t.mountpoints)
                  if (e.startsWith(r))
                    return {
                      base: r,
                      relativeKey: e.slice(r.length),
                      driver: t.mounts[r],
                    };
                return { base: "", relativeKey: e, driver: t.mounts[""] };
              },
              i = (e, r) =>
                t.mountpoints
                  .filter((t) => t.startsWith(e) || (r && e.startsWith(t)))
                  .map((r) => ({
                    relativeBase:
                      e.length > r.length ? e.slice(r.length) : void 0,
                    mountpoint: r,
                    driver: t.mounts[r],
                  })),
              s = (e, r) => {
                if (t.watching)
                  for (let i of ((r = sN(r)), t.watchListeners)) i(e, r);
              },
              n = async () => {
                if (!t.watching)
                  for (let e in ((t.watching = !0), t.mounts))
                    t.unwatch[e] = await sL(t.mounts[e], s, e);
              },
              o = async () => {
                if (t.watching) {
                  for (let e in t.unwatch) await t.unwatch[e]();
                  (t.unwatch = {}), (t.watching = !1);
                }
              },
              a = (e, t, i) => {
                let s = new Map(),
                  n = (e) => {
                    let t = s.get(e.base);
                    return (
                      t ||
                        ((t = { driver: e.driver, base: e.base, items: [] }),
                        s.set(e.base, t)),
                      t
                    );
                  };
                for (let i of e) {
                  let e = "string" == typeof i,
                    s = sN(e ? i : i.key),
                    o = e ? void 0 : i.value,
                    a = e || !i.options ? t : { ...t, ...i.options },
                    c = r(s);
                  n(c).items.push({
                    key: s,
                    value: o,
                    relativeKey: c.relativeKey,
                    options: a,
                  });
                }
                return Promise.all([...s.values()].map((e) => i(e))).then((e) =>
                  e.flat()
                );
              },
              c = {
                hasItem(e, t = {}) {
                  let { relativeKey: i, driver: s } = r((e = sN(e)));
                  return sC(s.hasItem, i, t);
                },
                getItem(e, t = {}) {
                  let { relativeKey: i, driver: s } = r((e = sN(e)));
                  return sC(s.getItem, i, t).then((e) => (0, sO.Ay)(e));
                },
                getItems: (e, t = {}) =>
                  a(e, t, (e) =>
                    e.driver.getItems
                      ? sC(
                          e.driver.getItems,
                          e.items.map((e) => ({
                            key: e.relativeKey,
                            options: e.options,
                          })),
                          t
                        ).then((t) =>
                          t.map((t) => ({
                            key: (function (...e) {
                              return sN(e.join(":"));
                            })(e.base, t.key),
                            value: (0, sO.Ay)(t.value),
                          }))
                        )
                      : Promise.all(
                          e.items.map((t) =>
                            sC(e.driver.getItem, t.relativeKey, t.options).then(
                              (e) => ({ key: t.key, value: (0, sO.Ay)(e) })
                            )
                          )
                        )
                  ),
                getItemRaw(e, t = {}) {
                  let { relativeKey: i, driver: s } = r((e = sN(e)));
                  return s.getItemRaw
                    ? sC(s.getItemRaw, i, t)
                    : sC(s.getItem, i, t).then((e) => {
                        var t;
                        return "string" == typeof e && e.startsWith(sT)
                          ? ((t = e.slice(sT.length)),
                            globalThis.Buffer
                              ? sA.from(t, "base64")
                              : Uint8Array.from(globalThis.atob(t), (e) =>
                                  e.codePointAt(0)
                                ))
                          : e;
                      });
                },
                async setItem(e, t, i = {}) {
                  if (void 0 === t) return c.removeItem(e);
                  let { relativeKey: n, driver: o } = r((e = sN(e)));
                  o.setItem &&
                    (await sC(o.setItem, n, sR(t), i),
                    o.watch || s("update", e));
                },
                async setItems(e, t) {
                  await a(e, t, async (e) => {
                    if (e.driver.setItems)
                      return sC(
                        e.driver.setItems,
                        e.items.map((e) => ({
                          key: e.relativeKey,
                          value: sR(e.value),
                          options: e.options,
                        })),
                        t
                      );
                    e.driver.setItem &&
                      (await Promise.all(
                        e.items.map((t) =>
                          sC(
                            e.driver.setItem,
                            t.relativeKey,
                            sR(t.value),
                            t.options
                          )
                        )
                      ));
                  });
                },
                async setItemRaw(e, t, i = {}) {
                  if (void 0 === t) return c.removeItem(e, i);
                  let { relativeKey: n, driver: o } = r((e = sN(e)));
                  if (o.setItemRaw) await sC(o.setItemRaw, n, t, i);
                  else {
                    var a;
                    if (!o.setItem) return;
                    await sC(
                      o.setItem,
                      n,
                      "string" == typeof t
                        ? t
                        : sT +
                            ((a = t),
                            globalThis.Buffer
                              ? sA.from(a).toString("base64")
                              : globalThis.btoa(String.fromCodePoint(...a))),
                      i
                    );
                  }
                  o.watch || s("update", e);
                },
                async removeItem(e, t = {}) {
                  "boolean" == typeof t && (t = { removeMeta: t });
                  let { relativeKey: i, driver: n } = r((e = sN(e)));
                  n.removeItem &&
                    (await sC(n.removeItem, i, t),
                    (t.removeMeta || t.removeMata) &&
                      (await sC(n.removeItem, i + "$", t)),
                    n.watch || s("remove", e));
                },
                async getMeta(e, t = {}) {
                  "boolean" == typeof t && (t = { nativeOnly: t });
                  let { relativeKey: i, driver: s } = r((e = sN(e))),
                    n = Object.create(null);
                  if (
                    (s.getMeta && Object.assign(n, await sC(s.getMeta, i, t)),
                    !t.nativeOnly)
                  ) {
                    let e = await sC(s.getItem, i + "$", t).then((e) =>
                      (0, sO.Ay)(e)
                    );
                    e &&
                      "object" == typeof e &&
                      ("string" == typeof e.atime &&
                        (e.atime = new Date(e.atime)),
                      "string" == typeof e.mtime &&
                        (e.mtime = new Date(e.mtime)),
                      Object.assign(n, e));
                  }
                  return n;
                },
                setMeta(e, t, r = {}) {
                  return this.setItem(e + "$", t, r);
                },
                removeMeta(e, t = {}) {
                  return this.removeItem(e + "$", t);
                },
                async getKeys(e, t = {}) {
                  let r = i((e = sj(e)), !0),
                    s = [],
                    n = [],
                    o = !0;
                  for (let e of r) {
                    for (let r of (e.driver.flags?.maxDepth || (o = !1),
                    await sC(e.driver.getKeys, e.relativeBase, t))) {
                      let t = e.mountpoint + sN(r);
                      s.some((e) => t.startsWith(e)) || n.push(t);
                    }
                    s = [
                      e.mountpoint,
                      ...s.filter((t) => !t.startsWith(e.mountpoint)),
                    ];
                  }
                  let a = void 0 !== t.maxDepth && !o;
                  return n.filter((r) => {
                    var i;
                    return (
                      (!a ||
                        (function (e, t) {
                          if (void 0 === t) return !0;
                          let r = 0,
                            i = e.indexOf(":");
                          for (; i > -1; ) r++, (i = e.indexOf(":", i + 1));
                          return r <= t;
                        })(r, t.maxDepth)) &&
                      ((i = e)
                        ? r.startsWith(i) && "$" !== r[r.length - 1]
                        : "$" !== r[r.length - 1])
                    );
                  });
                },
                async clear(e, t = {}) {
                  (e = sj(e)),
                    await Promise.all(
                      i(e, !1).map(async (e) =>
                        e.driver.clear
                          ? sC(e.driver.clear, e.relativeBase, t)
                          : e.driver.removeItem
                          ? Promise.all(
                              (
                                await e.driver.getKeys(e.relativeBase || "", t)
                              ).map((r) => e.driver.removeItem(r, t))
                            )
                          : void 0
                      )
                    );
                },
                async dispose() {
                  await Promise.all(Object.values(t.mounts).map((e) => sk(e)));
                },
                watch: async (e) => (
                  await n(),
                  t.watchListeners.push(e),
                  async () => {
                    (t.watchListeners = t.watchListeners.filter(
                      (t) => t !== e
                    )),
                      0 === t.watchListeners.length && (await o());
                  }
                ),
                async unwatch() {
                  (t.watchListeners = []), await o();
                },
                mount(e, r) {
                  if ((e = sj(e)) && t.mounts[e])
                    throw Error(`already mounted at ${e}`);
                  return (
                    e &&
                      (t.mountpoints.push(e),
                      t.mountpoints.sort((e, t) => t.length - e.length)),
                    (t.mounts[e] = r),
                    t.watching &&
                      Promise.resolve(sL(r, s, e))
                        .then((r) => {
                          t.unwatch[e] = r;
                        })
                        .catch(console.error),
                    c
                  );
                },
                async unmount(e, r = !0) {
                  (e = sj(e)) &&
                    t.mounts[e] &&
                    (t.watching &&
                      e in t.unwatch &&
                      (t.unwatch[e]?.(), delete t.unwatch[e]),
                    r && (await sk(t.mounts[e])),
                    (t.mountpoints = t.mountpoints.filter((t) => t !== e)),
                    delete t.mounts[e]);
                },
                getMount(e = "") {
                  let t = r((e = sN(e) + ":"));
                  return { driver: t.driver, base: t.base };
                },
                getMounts: (e = "", t = {}) =>
                  i((e = sN(e)), t.parents).map((e) => ({
                    driver: e.driver,
                    base: e.mountpoint,
                  })),
                keys: (e, t = {}) => c.getKeys(e, t),
                get: (e, t = {}) => c.getItem(e, t),
                set: (e, t, r = {}) => c.setItem(e, t, r),
                has: (e, t = {}) => c.hasItem(e, t),
                del: (e, t = {}) => c.removeItem(e, t),
                remove: (e, t = {}) => c.removeItem(e, t),
              };
            return c;
          })({
            driver: s$({
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
          await this.indexedDb.setItem(e, (0, sB.h)(t));
        }
        async removeItem(e) {
          await this.indexedDb.removeItem(e);
        }
      }
      var sz =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof r.g
            ? r.g
            : "u" > typeof self
            ? self
            : {},
        sF = { exports: {} };
      function sH(e) {
        var t;
        return [e[0], (0, sB.j)(null != (t = e[1]) ? t : "")];
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
          "u" > typeof sz && sz.localStorage
            ? (sF.exports = sz.localStorage)
            : "u" > typeof window && window.localStorage
            ? (sF.exports = window.localStorage)
            : (sF.exports = new e());
      })();
      class sV {
        constructor() {
          this.localStorage = sF.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(sH);
        }
        async getItem(e) {
          let t = this.localStorage.getItem(e);
          if (null !== t) return (0, sB.j)(t);
        }
        async setItem(e, t) {
          this.localStorage.setItem(e, (0, sB.h)(t));
        }
        async removeItem(e) {
          this.localStorage.removeItem(e);
        }
      }
      let sK = async (e, t, r) => {
          let i = "wc_storage_version",
            s = await t.getItem(i);
          if (s && s >= 1) return void r(t);
          let n = await e.getKeys();
          if (!n.length) return void r(t);
          let o = [];
          for (; n.length; ) {
            let r = n.shift();
            if (!r) continue;
            let i = r.toLowerCase();
            if (
              i.includes("wc@") ||
              i.includes("walletconnect") ||
              i.includes("wc_") ||
              i.includes("wallet_connect")
            ) {
              let i = await e.getItem(r);
              await t.setItem(r, i), o.push(r);
            }
          }
          await t.setItem(i, 1), r(t), sW(e, o);
        },
        sW = async (e, t) => {
          t.length &&
            t.forEach(async (t) => {
              await e.removeItem(t);
            });
        };
      class sJ {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (e) => {
              (this.storage = e), (this.initialized = !0);
            });
          let e = new sV();
          this.storage = e;
          try {
            let t = new sM();
            sK(e, t, this.setInitialized);
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
      var sG = r(19655),
        sY = r(76589),
        sZ = Object.defineProperty,
        sQ = (e, t, r) =>
          t in e
            ? sZ(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        sX = (e, t, r) => sQ(e, "symbol" != typeof t ? t + "" : t, r);
      class s0 extends sY.H {
        constructor(e) {
          super(),
            (this.opts = e),
            sX(this, "protocol", "wc"),
            sX(this, "version", 2);
        }
      }
      var s1 = Object.defineProperty,
        s2 = (e, t, r) =>
          t in e
            ? s1(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        s8 = (e, t, r) => s2(e, "symbol" != typeof t ? t + "" : t, r);
      class s3 extends sY.H {
        constructor(e, t) {
          super(),
            (this.core = e),
            (this.logger = t),
            s8(this, "records", new Map());
        }
      }
      class s5 {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class s6 extends sY.H {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class s4 extends sY.H {
        constructor(e) {
          super();
        }
      }
      class s9 {
        constructor(e, t, r, i) {
          (this.core = e), (this.logger = t), (this.name = r);
        }
      }
      var s7 = Object.defineProperty;
      class ne extends sY.H {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class nt extends sY.H {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class nr {
        constructor(e, t, r) {
          (this.core = e), (this.logger = t), (this.store = r);
        }
      }
      class ni {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class ns {
        constructor(e, t, r) {
          (this.core = e), (this.logger = t), (this.telemetryEnabled = r);
        }
      }
      var nn = Object.defineProperty,
        no = (e, t, r) =>
          t in e
            ? nn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        na = (e, t, r) => no(e, "symbol" != typeof t ? t + "" : t, r);
      s();
      class nc {
        constructor(e) {
          (this.opts = e), na(this, "protocol", "wc"), na(this, "version", 2);
        }
      }
      i.EventEmitter;
      class nl {
        constructor(e) {
          this.client = e;
        }
      }
      var nh = r(77226),
        nu = r(75086),
        nd = r(90628),
        np = r(44134).Buffer,
        nf = r(49509);
      let ng = "core",
        ny = `wc@2:${ng}:`,
        nm = { logger: "error" },
        nb = { database: ":memory:" },
        nw = "client_ed25519_seed",
        nv = o.ONE_DAY,
        nE = o.SIX_HOURS,
        nI = "wss://relay.walletconnect.org",
        n_ = {
          message: "relayer_message",
          message_ack: "relayer_message_ack",
          connect: "relayer_connect",
          disconnect: "relayer_disconnect",
          error: "relayer_error",
          connection_stalled: "relayer_connection_stalled",
          publish: "relayer_publish",
        },
        nx = {
          payload: "payload",
          connect: "connect",
          disconnect: "disconnect",
          error: "error",
        },
        nD = "2.21.1",
        nP = { link_mode: "link_mode", relay: "relay" },
        nS = { inbound: "inbound", outbound: "outbound" },
        nO = "WALLETCONNECT_LINK_MODE_APPS",
        nA = {
          created: "subscription_created",
          deleted: "subscription_deleted",
          sync: "subscription_sync",
          resubscribed: "subscription_resubscribed",
        },
        nC =
          (o.FIVE_SECONDS,
          {
            wc_pairingDelete: {
              req: { ttl: o.ONE_DAY, prompt: !1, tag: 1e3 },
              res: { ttl: o.ONE_DAY, prompt: !1, tag: 1001 },
            },
            wc_pairingPing: {
              req: { ttl: o.THIRTY_SECONDS, prompt: !1, tag: 1002 },
              res: { ttl: o.THIRTY_SECONDS, prompt: !1, tag: 1003 },
            },
            unregistered_method: {
              req: { ttl: o.ONE_DAY, prompt: !1, tag: 0 },
              res: { ttl: o.ONE_DAY, prompt: !1, tag: 0 },
            },
          }),
        nR = {
          create: "pairing_create",
          expire: "pairing_expire",
          delete: "pairing_delete",
          ping: "pairing_ping",
        },
        nT = {
          created: "history_created",
          updated: "history_updated",
          deleted: "history_deleted",
          sync: "history_sync",
        },
        nN = {
          created: "expirer_created",
          deleted: "expirer_deleted",
          expired: "expirer_expired",
          sync: "expirer_sync",
        },
        nj = "https://verify.walletconnect.org",
        nU = `${nj}/v3`,
        nL = ["https://verify.walletconnect.com", nj],
        nk = {
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
        nq = {
          no_internet_connection: "no_internet_connection",
          malformed_pairing_uri: "malformed_pairing_uri",
          active_pairing_already_exists: "active_pairing_already_exists",
          subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
          pairing_expired: "pairing_expired",
          proposal_listener_not_found: "proposal_listener_not_found",
        },
        nB = {
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
        n$ = {
          no_internet_connection: "no_internet_connection",
          proposal_expired: "proposal_expired",
          subscribe_session_topic_failure: "subscribe_session_topic_failure",
          session_approve_publish_failure: "session_approve_publish_failure",
          session_settle_publish_failure: "session_settle_publish_failure",
          session_approve_namespace_validation_failure:
            "session_approve_namespace_validation_failure",
          proposal_not_found: "proposal_not_found",
        },
        nM = {
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
        nz = {
          no_internet_connection: "no_internet_connection",
          invalid_cacao: "invalid_cacao",
          subscribe_authenticated_session_topic_failure:
            "subscribe_authenticated_session_topic_failure",
          authenticated_session_approve_publish_failure:
            "authenticated_session_approve_publish_failure",
          authenticated_session_pending_request_not_found:
            "authenticated_session_pending_request_not_found",
        };
      var nF = function (e, t) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var s = 0; s < e.length; s++) {
          var n = e.charAt(s),
            o = n.charCodeAt(0);
          if (255 !== r[o]) throw TypeError(n + " is ambiguous");
          r[o] = s;
        }
        var a = e.length,
          c = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function u(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (" " !== e[0]) {
            for (var i = 0, s = 0; e[t] === c; ) i++, t++;
            for (
              var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n);
              e[t];

            ) {
              var h = r[e.charCodeAt(t)];
              if (255 === h) return;
              for (
                var u = 0, d = n - 1;
                (0 !== h || u < s) && -1 !== d;
                d--, u++
              )
                (h += (a * o[d]) >>> 0),
                  (o[d] = h % 256 >>> 0),
                  (h = (h / 256) >>> 0);
              if (0 !== h) throw Error("Non-zero carry");
              (s = u), t++;
            }
            if (" " !== e[t]) {
              for (var p = n - s; p !== n && 0 === o[p]; ) p++;
              for (var f = new Uint8Array(i + (n - p)), g = i; p !== n; )
                f[g++] = o[p++];
              return f;
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
            for (var r = 0, i = 0, s = 0, n = t.length; s !== n && 0 === t[s]; )
              s++, r++;
            for (
              var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o);
              s !== n;

            ) {
              for (
                var u = t[s], d = 0, p = o - 1;
                (0 !== u || d < i) && -1 !== p;
                p--, d++
              )
                (u += (256 * l[p]) >>> 0),
                  (l[p] = u % a >>> 0),
                  (u = (u / a) >>> 0);
              if (0 !== u) throw Error("Non-zero carry");
              (i = d), s++;
            }
            for (var f = o - i; f !== o && 0 === l[f]; ) f++;
            for (var g = c.repeat(r); f < o; ++f) g += e.charAt(l[f]);
            return g;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var r = u(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let nH = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        nV = (e) => new TextEncoder().encode(e),
        nK = (e) => new TextDecoder().decode(e);
      class nW {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class nJ {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
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
          return nY(this, e);
        }
      }
      class nG {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return nY(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      let nY = (e, t) =>
        new nG({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class nZ {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new nW(e, t, r)),
            (this.decoder = new nJ(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let nQ = ({ name: e, prefix: t, encode: r, decode: i }) =>
          new nZ(e, t, r, i),
        nX = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: s } = nF(r, t);
          return nQ({ prefix: e, name: t, encode: i, decode: (e) => nH(s(e)) });
        },
        n0 = (e, t, r, i) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; "=" === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * r) / 8) | 0),
            a = 0,
            c = 0,
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | n),
              (a += r) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a)))
            throw SyntaxError("Unexpected end of data");
          return o;
        },
        n1 = (e, t, r) => {
          let i = "=" === t[t.length - 1],
            s = (1 << r) - 1,
            n = "",
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i)
            for (a = (a << 8) | e[i], o += 8; o > r; )
              (o -= r), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (r - o))]), i))
            for (; (n.length * r) & 7; ) n += "=";
          return n;
        },
        n2 = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          nQ({
            prefix: t,
            name: e,
            encode: (e) => n1(e, i, r),
            decode: (t) => n0(t, i, r, e),
          });
      var n8 = Object.freeze({
          __proto__: null,
          identity: nQ({
            prefix: "\0",
            name: "identity",
            encode: (e) => nK(e),
            decode: (e) => nV(e),
          }),
        }),
        n3 = Object.freeze({
          __proto__: null,
          base2: n2({
            prefix: "0",
            name: "base2",
            alphabet: "01",
            bitsPerChar: 1,
          }),
        }),
        n5 = Object.freeze({
          __proto__: null,
          base8: n2({
            prefix: "7",
            name: "base8",
            alphabet: "01234567",
            bitsPerChar: 3,
          }),
        }),
        n6 = Object.freeze({
          __proto__: null,
          base10: nX({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        }),
        n4 = Object.freeze({
          __proto__: null,
          base16: n2({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4,
          }),
          base16upper: n2({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4,
          }),
        });
      let n9 = n2({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        n7 = n2({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        oe = n2({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        ot = n2({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        or = n2({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        oi = n2({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        os = n2({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        });
      var on = Object.freeze({
          __proto__: null,
          base32: n9,
          base32upper: n7,
          base32pad: oe,
          base32padupper: ot,
          base32hex: or,
          base32hexupper: oi,
          base32hexpad: os,
          base32hexpadupper: n2({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5,
          }),
          base32z: n2({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5,
          }),
        }),
        oo = Object.freeze({
          __proto__: null,
          base36: nX({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
          }),
          base36upper: nX({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          }),
        }),
        oa = Object.freeze({
          __proto__: null,
          base58btc: nX({
            name: "base58btc",
            prefix: "z",
            alphabet:
              "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
          }),
          base58flickr: nX({
            name: "base58flickr",
            prefix: "Z",
            alphabet:
              "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
          }),
        });
      let oc = n2({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        ol = n2({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        });
      var oh = Object.freeze({
        __proto__: null,
        base64: oc,
        base64pad: ol,
        base64url: n2({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        base64urlpad: n2({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
      });
      let ou = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        od = ou.reduce((e, t, r) => ((e[r] = t), e), []),
        op = ou.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      var of = Object.freeze({
        __proto__: null,
        base256emoji: nQ({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => (e += od[t]), "");
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = op[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function og(e, t, r) {
        (t = t || []), (r = r || 0);
        for (var i = r; e >= 0x80000000; )
          (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (og.bytes = r - i + 1), t;
      }
      function oy(e, t) {
        var r,
          i = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o)
            throw ((oy.bytes = 0), RangeError("Could not decode varint"));
          (r = e[n++]),
            (i += s < 28 ? (127 & r) << s : (127 & r) * Math.pow(2, s)),
            (s += 7);
        } while (r >= 128);
        return (oy.bytes = n - t), i;
      }
      var om = {
        encode: og,
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
      let ob = (e, t, r = 0) => (om.encode(e, t, r), t),
        ow = (e) => om.encodingLength(e),
        ov = (e, t) => {
          let r = t.byteLength,
            i = ow(e),
            s = i + ow(r),
            n = new Uint8Array(s + r);
          return ob(e, n, 0), ob(r, n, i), n.set(t, s), new oE(e, r, t, n);
        };
      class oE {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let oI = ({ name: e, code: t, encode: r }) => new o_(e, t, r);
      class o_ {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array
              ? ov(this.code, t)
              : t.then((e) => ov(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      let ox = (e) => async (t) =>
        new Uint8Array(await crypto.subtle.digest(e, t));
      var oD = Object.freeze({
          __proto__: null,
          sha256: oI({ name: "sha2-256", code: 18, encode: ox("SHA-256") }),
          sha512: oI({ name: "sha2-512", code: 19, encode: ox("SHA-512") }),
        }),
        oP = Object.freeze({
          __proto__: null,
          identity: {
            code: 0,
            name: "identity",
            encode: nH,
            digest: (e) => ov(0, nH(e)),
          },
        });
      new TextEncoder(), new TextDecoder();
      let oS = {
        ...n8,
        ...n3,
        ...n5,
        ...n6,
        ...n4,
        ...on,
        ...oo,
        ...oa,
        ...oh,
        ...of,
      };
      function oO(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      ({ ...oD, ...oP });
      let oA = oO(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        oC = oO(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            let t = (function (e = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        oR = {
          utf8: oA,
          "utf-8": oA,
          hex: oS.base16,
          latin1: oC,
          ascii: oC,
          binary: oC,
          ...oS,
        };
      var oT = Object.defineProperty,
        oN = (e, t, r) =>
          t in e
            ? oT(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        oj = (e, t, r) => oN(e, "symbol" != typeof t ? t + "" : t, r);
      class oU {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            oj(this, "keychain", new Map()),
            oj(this, "name", "keychain"),
            oj(this, "version", "0.3"),
            oj(this, "initialized", !1),
            oj(this, "storagePrefix", ny),
            oj(this, "init", async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                "u" > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            oj(
              this,
              "has",
              (e) => (this.isInitialized(), this.keychain.has(e))
            ),
            oj(this, "set", async (e, t) => {
              this.isInitialized(),
                this.keychain.set(e, t),
                await this.persist();
            }),
            oj(this, "get", (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > "u") {
                let { message: t } = sa(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${e}`
                );
                throw Error(t);
              }
              return t;
            }),
            oj(this, "del", async (e) => {
              this.isInitialized(),
                this.keychain.delete(e),
                await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, sG.U5)(t, this.name));
        }
        get context() {
          return (0, sG.oI)(this.logger);
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
          await this.core.storage.setItem(this.storageKey, eN(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? ej(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var oL = Object.defineProperty,
        ok = (e, t, r) =>
          t in e
            ? oL(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        oq = (e, t, r) => ok(e, "symbol" != typeof t ? t + "" : t, r);
      class oB {
        constructor(e, t, r) {
          (this.core = e),
            (this.logger = t),
            oq(this, "name", "crypto"),
            oq(this, "keychain"),
            oq(this, "randomSessionIdentifier", iB()),
            oq(this, "initialized", !1),
            oq(this, "init", async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            oq(
              this,
              "hasKeys",
              (e) => (this.isInitialized(), this.keychain.has(e))
            ),
            oq(this, "getClientId", async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                t = eo.TZ(e);
              return eo.UF(t.publicKey);
            }),
            oq(this, "generateKeyPair", () => {
              this.isInitialized();
              let e = (function () {
                let e = i_.utils.randomPrivateKey(),
                  t = i_.getPublicKey(e);
                return {
                  privateKey: (0, ea.dI)(e, iU),
                  publicKey: (0, ea.dI)(t, iU),
                };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            oq(this, "signJWT", async (e) => {
              this.isInitialized();
              let t = await this.getClientSeed(),
                r = eo.TZ(t),
                i = this.randomSessionIdentifier;
              return await eo.FA(i, e, nv, r);
            }),
            oq(this, "generateSharedKey", (e, t, r) => {
              this.isInitialized();
              let i = (function (e, t) {
                let r = rg(
                  rE,
                  i_.getSharedSecret((0, ea.sH)(e, iU), (0, ea.sH)(t, iU)),
                  void 0,
                  void 0,
                  32
                );
                return (0, ea.dI)(r, iU);
              })(this.getPrivateKey(e), t);
              return this.setSymKey(i, r);
            }),
            oq(this, "setSymKey", async (e, t) => {
              this.isInitialized();
              let r = t || i$(e);
              return await this.keychain.set(r, e), r;
            }),
            oq(this, "deleteKeyPair", async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            oq(this, "deleteSymKey", async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            oq(this, "encode", async (e, t, r) => {
              this.isInitialized();
              let i = iJ(r),
                s = (0, sB.h)(t);
              if (2 === i.type)
                return (function (e, t) {
                  let r = iz(2),
                    i = ts(12),
                    s = iK({ type: r, sealed: (0, ea.sH)(e, iq), iv: i });
                  return t === ik ? iH(s) : s;
                })(s, r?.encoding);
              if (iG(i)) {
                let t = i.senderPublicKey,
                  r = i.receiverPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              let n = this.getSymKey(e),
                { type: o, senderPublicKey: a } = i;
              return (function (e) {
                let t = iz("u" > typeof e.type ? e.type : 0);
                if (1 === iF(t) && typeof e.senderPublicKey > "u")
                  throw Error("Missing sender public key for type 1 envelope");
                let r =
                    "u" > typeof e.senderPublicKey
                      ? (0, ea.sH)(e.senderPublicKey, iU)
                      : void 0,
                  i = "u" > typeof e.iv ? (0, ea.sH)(e.iv, iU) : ts(12),
                  s = iK({
                    type: t,
                    sealed: rh((0, ea.sH)(e.symKey, iU), i).encrypt(
                      (0, ea.sH)(e.message, iq)
                    ),
                    iv: i,
                    senderPublicKey: r,
                  });
                return e.encoding === ik ? iH(s) : s;
              })({
                type: o,
                symKey: n,
                message: s,
                senderPublicKey: a,
                encoding: r?.encoding,
              });
            }),
            oq(this, "decode", async (e, t, r) => {
              this.isInitialized();
              let i = (function (e, t) {
                let r = iW({ encoded: e, encoding: t?.encoding });
                return iJ({
                  type: iF(r.type),
                  senderPublicKey:
                    "u" > typeof r.senderPublicKey
                      ? (0, ea.dI)(r.senderPublicKey, iU)
                      : void 0,
                  receiverPublicKey: t?.receiverPublicKey,
                });
              })(t, r);
              if (2 === i.type) {
                let e = (function (e, t) {
                  let { sealed: r } = iW({ encoded: e, encoding: t });
                  return (0, ea.dI)(r, iq);
                })(t, r?.encoding);
                return (0, sB.j)(e);
              }
              if (iG(i)) {
                let t = i.receiverPublicKey,
                  r = i.senderPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              try {
                let i = this.getSymKey(e),
                  s = (function (e) {
                    let t = (0, ea.sH)(e.symKey, iU),
                      { sealed: r, iv: i } = iW({
                        encoded: e.encoded,
                        encoding: e.encoding,
                      }),
                      s = rh(t, i).decrypt(r);
                    if (null === s) throw Error("Failed to decrypt");
                    return (0, ea.dI)(s, iq);
                  })({ symKey: i, encoded: t, encoding: r?.encoding });
                return (0, sB.j)(s);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(t);
              }
            }),
            oq(this, "getPayloadType", (e, t = iL) =>
              iF(iW({ encoded: e, encoding: t }).type)
            ),
            oq(this, "getPayloadSenderPublicKey", (e, t = iL) => {
              let r = iW({ encoded: e, encoding: t });
              return r.senderPublicKey
                ? (0, ea.dI)(r.senderPublicKey, iU)
                : void 0;
            }),
            (this.core = e),
            (this.logger = (0, sG.U5)(t, this.name)),
            (this.keychain = r || new oU(this.core, this.logger));
        }
        get context() {
          return (0, sG.oI)(this.logger);
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
            e = this.keychain.get(nw);
          } catch {
            (e = iB()), await this.keychain.set(nw, e);
          }
          return (function (e, t = "utf8") {
            let r = oR[t];
            if (!r) throw Error(`Unsupported encoding "${t}"`);
            return ("utf8" === t || "utf-8" === t) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? globalThis.Buffer.from(e, "utf8")
              : r.decoder.decode(`${r.prefix}${e}`);
          })(e, "base16");
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var o$ = Object.defineProperty,
        oM = Object.defineProperties,
        oz = Object.getOwnPropertyDescriptors,
        oF = Object.getOwnPropertySymbols,
        oH = Object.prototype.hasOwnProperty,
        oV = Object.prototype.propertyIsEnumerable,
        oK = (e, t, r) =>
          t in e
            ? o$(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        oW = (e, t) => {
          for (var r in t || (t = {})) oH.call(t, r) && oK(e, r, t[r]);
          if (oF) for (var r of oF(t)) oV.call(t, r) && oK(e, r, t[r]);
          return e;
        },
        oJ = (e, t) => oM(e, oz(t)),
        oG = (e, t, r) => oK(e, "symbol" != typeof t ? t + "" : t, r);
      class oY extends s5 {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            oG(this, "messages", new Map()),
            oG(this, "messagesWithoutClientAck", new Map()),
            oG(this, "name", "messages"),
            oG(this, "version", "0.3"),
            oG(this, "initialized", !1),
            oG(this, "storagePrefix", ny),
            oG(this, "init", async () => {
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
            oG(this, "set", async (e, t, r) => {
              this.isInitialized();
              let i = iM(t),
                s = this.messages.get(e);
              if ((typeof s > "u" && (s = {}), "u" > typeof s[i])) return i;
              if (((s[i] = t), this.messages.set(e, s), r === nS.inbound)) {
                let r = this.messagesWithoutClientAck.get(e) || {};
                this.messagesWithoutClientAck.set(e, oJ(oW({}, r), { [i]: t }));
              }
              return await this.persist(), i;
            }),
            oG(this, "get", (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > "u" && (t = {}), t;
            }),
            oG(this, "getWithoutAck", (e) => {
              this.isInitialized();
              let t = {};
              for (let r of e) {
                let e = this.messagesWithoutClientAck.get(r) || {};
                t[r] = Object.values(e);
              }
              return t;
            }),
            oG(
              this,
              "has",
              (e, t) => (this.isInitialized(), "u" > typeof this.get(e)[iM(t)])
            ),
            oG(this, "ack", async (e, t) => {
              this.isInitialized();
              let r = this.messagesWithoutClientAck.get(e);
              if (typeof r > "u") return;
              let i = iM(t);
              delete r[i],
                0 === Object.keys(r).length
                  ? this.messagesWithoutClientAck.delete(e)
                  : this.messagesWithoutClientAck.set(e, r),
                await this.persist();
            }),
            oG(this, "del", async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                this.messagesWithoutClientAck.delete(e),
                await this.persist();
            }),
            (this.logger = (0, sG.U5)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, sG.oI)(this.logger);
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
          await this.core.storage.setItem(this.storageKey, eN(e));
        }
        async setRelayerMessagesWithoutClientAck(e) {
          await this.core.storage.setItem(
            this.storageKeyWithoutClientAck,
            eN(e)
          );
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? ej(e) : void 0;
        }
        async getRelayerMessagesWithoutClientAck() {
          let e = await this.core.storage.getItem(
            this.storageKeyWithoutClientAck
          );
          return "u" > typeof e ? ej(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages),
            await this.setRelayerMessagesWithoutClientAck(
              this.messagesWithoutClientAck
            );
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var oZ = Object.defineProperty,
        oQ = Object.defineProperties,
        oX = Object.getOwnPropertyDescriptors,
        o0 = Object.getOwnPropertySymbols,
        o1 = Object.prototype.hasOwnProperty,
        o2 = Object.prototype.propertyIsEnumerable,
        o8 = (e, t, r) =>
          t in e
            ? oZ(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        o3 = (e, t) => {
          for (var r in t || (t = {})) o1.call(t, r) && o8(e, r, t[r]);
          if (o0) for (var r of o0(t)) o2.call(t, r) && o8(e, r, t[r]);
          return e;
        },
        o5 = (e, t) => oQ(e, oX(t)),
        o6 = (e, t, r) => o8(e, "symbol" != typeof t ? t + "" : t, r);
      class o4 extends s6 {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            o6(this, "events", new i.EventEmitter()),
            o6(this, "name", "publisher"),
            o6(this, "queue", new Map()),
            o6(this, "publishTimeout", (0, o.toMiliseconds)(o.ONE_MINUTE)),
            o6(
              this,
              "initialPublishTimeout",
              (0, o.toMiliseconds)(15 * o.ONE_SECOND)
            ),
            o6(this, "needsTransportRestart", !1),
            o6(this, "publish", async (e, t, r) => {
              var i;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: e, message: t, opts: r },
                });
              let s = r?.ttl || nE,
                n = iY(r),
                o = r?.prompt || !1,
                a = r?.tag || 0,
                c = r?.id || (0, nu.getBigIntRpcId)().toString(),
                l = {
                  topic: e,
                  message: t,
                  opts: {
                    ttl: s,
                    relay: n,
                    prompt: o,
                    tag: a,
                    id: c,
                    attestation: r?.attestation,
                    tvf: r?.tvf,
                  },
                },
                h = `Failed to publish payload, please try again. id:${c} tag:${a}`;
              try {
                let i = new Promise(async (i) => {
                  let n = ({ id: e }) => {
                    l.opts.id === e &&
                      (this.removeRequestFromQueue(e),
                      this.relayer.events.removeListener(n_.publish, n),
                      i(l));
                  };
                  this.relayer.events.on(n_.publish, n);
                  let h = eL(
                    new Promise((i, n) => {
                      this.rpcPublish({
                        topic: e,
                        message: t,
                        ttl: s,
                        prompt: o,
                        tag: a,
                        id: c,
                        attestation: r?.attestation,
                        tvf: r?.tvf,
                      })
                        .then(i)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), n(e);
                        });
                    }),
                    this.initialPublishTimeout,
                    `Failed initial publish, retrying.... id:${c} tag:${a}`
                  );
                  try {
                    await h, this.events.removeListener(n_.publish, n);
                  } catch (e) {
                    this.queue.set(c, o5(o3({}, l), { attempt: 1 })),
                      this.logger.warn(e, e?.message);
                  }
                });
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { id: c, topic: e, message: t, opts: r },
                }),
                  await eL(i, this.publishTimeout, h);
              } catch (e) {
                if (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(e),
                  null != (i = r?.internal) && i.throwOnFailedPublish)
                )
                  throw e;
              } finally {
                this.queue.delete(c);
              }
            }),
            o6(this, "on", (e, t) => {
              this.events.on(e, t);
            }),
            o6(this, "once", (e, t) => {
              this.events.once(e, t);
            }),
            o6(this, "off", (e, t) => {
              this.events.off(e, t);
            }),
            o6(this, "removeListener", (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, sG.U5)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, sG.oI)(this.logger);
        }
        async rpcPublish(e) {
          var t, r, i, s;
          let {
              topic: n,
              message: o,
              ttl: a = nE,
              prompt: c,
              tag: l,
              id: h,
              attestation: u,
              tvf: d,
            } = e,
            p = {
              method: iZ(iY().protocol).publish,
              params: o3(
                {
                  topic: n,
                  message: o,
                  ttl: a,
                  prompt: c,
                  tag: l,
                  attestation: u,
                },
                d
              ),
              id: h,
            };
          su(null == (t = p.params) ? void 0 : t.prompt) &&
            (null == (r = p.params) || delete r.prompt),
            su(null == (i = p.params) ? void 0 : i.tag) &&
              (null == (s = p.params) || delete s.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: p,
            });
          let f = await this.relayer.request(p);
          return (
            this.relayer.events.emit(n_.publish, e),
            this.logger.debug("Successfully Published Payload"),
            f
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e, t) => {
            let r = e.attempt + 1;
            this.queue.set(t, o5(o3({}, e), { attempt: r }));
            let { topic: i, message: s, opts: n, attestation: o } = e;
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${r}`
            ),
              await this.rpcPublish(
                o5(o3({}, e), {
                  topic: i,
                  message: s,
                  ttl: n.ttl,
                  prompt: n.prompt,
                  tag: n.tag,
                  id: n.id,
                  attestation: o,
                  tvf: n.tvf,
                })
              ),
              this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(sS.li.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1),
                this.relayer.events.emit(n_.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(n_.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      var o9 = Object.defineProperty,
        o7 = (e, t, r) =>
          t in e
            ? o9(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        ae = (e, t, r) => o7(e, "symbol" != typeof t ? t + "" : t, r);
      class at {
        constructor() {
          ae(this, "map", new Map()),
            ae(this, "set", (e, t) => {
              let r = this.get(e);
              this.exists(e, t) || this.map.set(e, [...r, t]);
            }),
            ae(this, "get", (e) => this.map.get(e) || []),
            ae(this, "exists", (e, t) => this.get(e).includes(t)),
            ae(this, "delete", (e, t) => {
              if (typeof t > "u") return void this.map.delete(e);
              if (!this.map.has(e)) return;
              let r = this.get(e);
              if (!this.exists(e, t)) return;
              let i = r.filter((e) => e !== t);
              if (!i.length) return void this.map.delete(e);
              this.map.set(e, i);
            }),
            ae(this, "clear", () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var ar = Object.defineProperty,
        ai = Object.defineProperties,
        as = Object.getOwnPropertyDescriptors,
        an = Object.getOwnPropertySymbols,
        ao = Object.prototype.hasOwnProperty,
        aa = Object.prototype.propertyIsEnumerable,
        ac = (e, t, r) =>
          t in e
            ? ar(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        al = (e, t) => {
          for (var r in t || (t = {})) ao.call(t, r) && ac(e, r, t[r]);
          if (an) for (var r of an(t)) aa.call(t, r) && ac(e, r, t[r]);
          return e;
        },
        ah = (e, t) => ai(e, as(t)),
        au = (e, t, r) => ac(e, "symbol" != typeof t ? t + "" : t, r);
      class ad extends ne {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            au(this, "subscriptions", new Map()),
            au(this, "topicMap", new at()),
            au(this, "events", new i.EventEmitter()),
            au(this, "name", "subscription"),
            au(this, "version", "0.3"),
            au(this, "pending", new Map()),
            au(this, "cached", []),
            au(this, "initialized", !1),
            au(this, "storagePrefix", ny),
            au(this, "subscribeTimeout", (0, o.toMiliseconds)(o.ONE_MINUTE)),
            au(
              this,
              "initialSubscribeTimeout",
              (0, o.toMiliseconds)(15 * o.ONE_SECOND)
            ),
            au(this, "clientId"),
            au(this, "batchSubscribeTopicsLimit", 500),
            au(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                await this.restore()),
                (this.initialized = !0);
            }),
            au(this, "subscribe", async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: e, opts: t },
                });
              try {
                let r = iY(t),
                  i = { topic: e, relay: r, transportType: t?.transportType };
                this.pending.set(e, i);
                let s = await this.rpcSubscribe(e, r, t);
                return (
                  "string" == typeof s &&
                    (this.onSubscribe(s, i),
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
            au(this, "unsubscribe", async (e, t) => {
              this.isInitialized(),
                "u" > typeof t?.id
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            au(
              this,
              "isSubscribed",
              (e) =>
                new Promise((t) => {
                  t(this.topicMap.topics.includes(e));
                })
            ),
            au(
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
            au(this, "on", (e, t) => {
              this.events.on(e, t);
            }),
            au(this, "once", (e, t) => {
              this.events.once(e, t);
            }),
            au(this, "off", (e, t) => {
              this.events.off(e, t);
            }),
            au(this, "removeListener", (e, t) => {
              this.events.removeListener(e, t);
            }),
            au(this, "start", async () => {
              await this.onConnect();
            }),
            au(this, "stop", async () => {
              await this.onDisconnect();
            }),
            au(this, "restart", async () => {
              await this.restore(), await this.onRestart();
            }),
            au(this, "checkPending", async () => {
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
            au(this, "registerEventListeners", () => {
              this.relayer.core.heartbeat.on(sS.li.pulse, async () => {
                await this.checkPending();
              }),
                this.events.on(nA.created, async (e) => {
                  let t = nA.created;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: "event", event: t, data: e }),
                    await this.persist();
                }),
                this.events.on(nA.deleted, async (e) => {
                  let t = nA.deleted;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: "event", event: t, data: e }),
                    await this.persist();
                });
            }),
            (this.relayer = e),
            (this.logger = (0, sG.U5)(t, this.name)),
            (this.clientId = "");
        }
        get context() {
          return (0, sG.oI)(this.logger);
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
          let r = !1;
          try {
            r = this.getSubscription(e).topic === t;
          } catch {}
          return r;
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
          let r = this.topicMap.get(e);
          await Promise.all(
            r.map(async (r) => await this.unsubscribeById(e, r, t))
          );
        }
        async unsubscribeById(e, t, r) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: r },
            });
          try {
            let i = iY(r);
            await this.restartToComplete({ topic: e, id: t, relay: i }),
              await this.rpcUnsubscribe(e, t, i);
            let s = sc("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, s),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: r },
              });
          } catch (e) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(e),
              e)
            );
          }
        }
        async rpcSubscribe(e, t, r) {
          var i;
          (r && r?.transportType !== nP.relay) ||
            (await this.restartToComplete({ topic: e, id: e, relay: t }));
          let s = { method: iZ(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: s,
            });
          let n = null == (i = r?.internal) ? void 0 : i.throwOnFailedPublish;
          try {
            let t = await this.getSubscriptionId(e);
            if (r?.transportType === nP.link_mode)
              return (
                setTimeout(() => {
                  (this.relayer.connected || this.relayer.connecting) &&
                    this.relayer.request(s).catch((e) => this.logger.warn(e));
                }, (0, o.toMiliseconds)(o.ONE_SECOND)),
                t
              );
            let i = new Promise(async (t) => {
                let r = (i) => {
                  i.topic === e &&
                    (this.events.removeListener(nA.created, r), t(i.id));
                };
                this.events.on(nA.created, r);
                try {
                  let i = await eL(
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
                  this.events.removeListener(nA.created, r), t(i);
                } catch {}
              }),
              a = await eL(
                i,
                this.subscribeTimeout,
                `Subscribing to ${e} failed, please try again`
              );
            if (!a && n)
              throw Error(`Subscribing to ${e} failed, please try again`);
            return a ? t : null;
          } catch (e) {
            if (
              (this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(n_.connection_stalled),
              n)
            )
              throw e;
          }
          return null;
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = {
            method: iZ(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: t,
            });
          try {
            await await eL(
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
            this.relayer.events.emit(n_.connection_stalled);
          }
        }
        async rpcBatchFetchMessages(e) {
          let t;
          if (!e.length) return;
          let r = {
            method: iZ(e[0].relay.protocol).batchFetchMessages,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            });
          try {
            t = await await eL(
              new Promise((e, t) => {
                this.relayer
                  .request(r)
                  .catch((e) => {
                    this.logger.warn(e), t(e);
                  })
                  .then(e);
              }),
              this.subscribeTimeout,
              "rpcBatchFetchMessages failed, please try again"
            );
          } catch {
            this.relayer.events.emit(n_.connection_stalled);
          }
          return t;
        }
        rpcUnsubscribe(e, t, r) {
          let i = {
            method: iZ(r.protocol).unsubscribe,
            params: { topic: e, id: t },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: i,
            }),
            this.relayer.request(i)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, ah(al({}, t), { id: e })),
            this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, al({}, e)),
                this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, r) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, r),
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
          this.subscriptions.set(e, al({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(nA.created, t);
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
            let { message: t } = sa("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
          let r = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(r.topic, e),
            this.events.emit(nA.deleted, ah(al({}, r), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values),
            this.events.emit(nA.sync);
        }
        async onRestart() {
          if (this.cached.length) {
            let e = [...this.cached],
              t = Math.ceil(
                this.cached.length / this.batchSubscribeTopicsLimit
              );
            for (let r = 0; r < t; r++) {
              let t = e.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(t);
            }
          }
          this.events.emit(nA.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = sa("RESTORE_WILL_OVERRIDE", this.name);
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
                  ah(al({}, e), { id: await this.getSubscriptionId(e.topic) })
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
          let r = await this.rpcBatchFetchMessages(e);
          r &&
            r.messages &&
            (await ((t = (0, o.toMiliseconds)(o.ONE_SECOND)),
            new Promise((e) => setTimeout(e, t))),
            await this.relayer.handleBatchMessageEvents(r.messages));
        }
        async onConnect() {
          await this.restart(), this.reset();
        }
        onDisconnect() {
          this.onDisable();
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
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
          return iM(e + (await this.getClientId()));
        }
      }
      var ap = Object.defineProperty,
        af = Object.getOwnPropertySymbols,
        ag = Object.prototype.hasOwnProperty,
        ay = Object.prototype.propertyIsEnumerable,
        am = (e, t, r) =>
          t in e
            ? ap(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        ab = (e, t) => {
          for (var r in t || (t = {})) ag.call(t, r) && am(e, r, t[r]);
          if (af) for (var r of af(t)) ay.call(t, r) && am(e, r, t[r]);
          return e;
        },
        aw = (e, t, r) => am(e, "symbol" != typeof t ? t + "" : t, r);
      class av extends s4 {
        constructor(e) {
          super(e),
            aw(this, "protocol", "wc"),
            aw(this, "version", 2),
            aw(this, "core"),
            aw(this, "logger"),
            aw(this, "events", new i.EventEmitter()),
            aw(this, "provider"),
            aw(this, "messages"),
            aw(this, "subscriber"),
            aw(this, "publisher"),
            aw(this, "name", "relayer"),
            aw(this, "transportExplicitlyClosed", !1),
            aw(this, "initialized", !1),
            aw(this, "connectionAttemptInProgress", !1),
            aw(this, "relayUrl"),
            aw(this, "projectId"),
            aw(this, "packageName"),
            aw(this, "bundleId"),
            aw(this, "hasExperiencedNetworkDisruption", !1),
            aw(this, "pingTimeout"),
            aw(
              this,
              "heartBeatTimeout",
              (0, o.toMiliseconds)(o.THIRTY_SECONDS + o.FIVE_SECONDS)
            ),
            aw(this, "reconnectTimeout"),
            aw(this, "connectPromise"),
            aw(this, "reconnectInProgress", !1),
            aw(this, "requestsInFlight", []),
            aw(this, "connectTimeout", (0, o.toMiliseconds)(15 * o.ONE_SECOND)),
            aw(this, "request", async (e) => {
              var t, r;
              this.logger.debug("Publishing Request Payload");
              let i = e.id || (0, nu.getBigIntRpcId)().toString();
              await this.toEstablishConnection();
              try {
                this.logger.trace(
                  {
                    id: i,
                    method: e.method,
                    topic: null == (t = e.params) ? void 0 : t.topic,
                  },
                  "relayer.request - publishing..."
                );
                let s = `${i}:${
                  (null == (r = e.params) ? void 0 : r.tag) || ""
                }`;
                this.requestsInFlight.push(s);
                let n = await this.provider.request(e);
                return (
                  (this.requestsInFlight = this.requestsInFlight.filter(
                    (e) => e !== s
                  )),
                  n
                );
              } catch (e) {
                throw (this.logger.debug(`Failed to Publish Request: ${i}`), e);
              }
            }),
            aw(this, "resetPingTimeout", () => {
              eD() &&
                (clearTimeout(this.pingTimeout),
                (this.pingTimeout = setTimeout(() => {
                  var e, t, r, i;
                  try {
                    this.logger.debug(
                      {},
                      "pingTimeout: Connection stalled, terminating..."
                    ),
                      null ==
                        (i =
                          null ==
                          (r =
                            null ==
                            (t =
                              null == (e = this.provider)
                                ? void 0
                                : e.connection)
                              ? void 0
                              : t.socket)
                            ? void 0
                            : r.terminate) || i.call(r);
                  } catch (e) {
                    this.logger.warn(e, e?.message);
                  }
                }, this.heartBeatTimeout)));
            }),
            aw(this, "onPayloadHandler", (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            aw(this, "onConnectHandler", () => {
              this.logger.warn({}, "Relayer connected \uD83D\uDEDC"),
                this.startPingTimeout(),
                this.events.emit(n_.connect);
            }),
            aw(this, "onDisconnectHandler", () => {
              this.logger.warn({}, "Relayer disconnected \uD83D\uDED1"),
                (this.requestsInFlight = []),
                this.onProviderDisconnect();
            }),
            aw(this, "onProviderErrorHandler", (e) => {
              this.logger.fatal(`Fatal socket error: ${e.message}`),
                this.events.emit(n_.error, e),
                this.logger.fatal(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            aw(this, "registerProviderListeners", () => {
              this.provider.on(nx.payload, this.onPayloadHandler),
                this.provider.on(nx.connect, this.onConnectHandler),
                this.provider.on(nx.disconnect, this.onDisconnectHandler),
                this.provider.on(nx.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              "u" > typeof e.logger && "string" != typeof e.logger
                ? (0, sG.U5)(e.logger, this.name)
                : (0, sG.h6)((0, sG.iP)({ level: e.logger || "error" }))),
            (this.messages = new oY(this.logger, e.core)),
            (this.subscriber = new ad(this, this.logger)),
            (this.publisher = new o4(this, this.logger)),
            (this.relayUrl = e?.relayUrl || nI),
            (this.projectId = e.projectId),
            eP() &&
            "u" > typeof r.g &&
            "u" > typeof (null == r.g ? void 0 : r.g.Platform) &&
            (null == r.g ? void 0 : r.g.Platform.OS) === "android"
              ? (this.packageName = eA())
              : eP() &&
                "u" > typeof r.g &&
                "u" > typeof (null == r.g ? void 0 : r.g.Platform) &&
                (null == r.g ? void 0 : r.g.Platform.OS) === "ios" &&
                (this.bundleId = eA()),
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
          return (0, sG.oI)(this.logger);
        }
        get connected() {
          var e, t, r;
          return (
            (null ==
            (r =
              null == (t = null == (e = this.provider) ? void 0 : e.connection)
                ? void 0
                : t.socket)
              ? void 0
              : r.readyState) === 1
          );
        }
        get connecting() {
          var e, t, r;
          return (
            (null ==
            (r =
              null == (t = null == (e = this.provider) ? void 0 : e.connection)
                ? void 0
                : t.socket)
              ? void 0
              : r.readyState) === 0 || void 0 !== this.connectPromise
          );
        }
        async publish(e, t, r) {
          this.isInitialized(),
            await this.publisher.publish(e, t, r),
            await this.recordMessageEvent(
              {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: nP.relay,
              },
              nS.outbound
            );
        }
        async subscribe(e, t) {
          var r, i, s;
          this.isInitialized(),
            (null != t && t.transportType && t?.transportType !== "relay") ||
              (await this.toEstablishConnection());
          let n =
              typeof (null == (r = t?.internal)
                ? void 0
                : r.throwOnFailedPublish) > "u" ||
              (null == (i = t?.internal) ? void 0 : i.throwOnFailedPublish),
            o =
              (null == (s = this.subscriber.topicMap.get(e)) ? void 0 : s[0]) ||
              "",
            a,
            c = (t) => {
              t.topic === e && (this.subscriber.off(nA.created, c), a());
            };
          return (
            await Promise.all([
              new Promise((e) => {
                (a = e), this.subscriber.on(nA.created, c);
              }),
              new Promise(async (r, i) => {
                (o =
                  (await this.subscriber
                    .subscribe(
                      e,
                      ab({ internal: { throwOnFailedPublish: n } }, t)
                    )
                    .catch((e) => {
                      n && i(e);
                    })) || o),
                  r();
              }),
            ]),
            o
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
            ? await eL(
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
              : ((this.connectPromise = new Promise(async (t, r) => {
                  await this.connect(e)
                    .then(t)
                    .catch(r)
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
          if (!(await s_()))
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
          let { topic: r } = e;
          if (!t.sessionExists) {
            let e = eB(o.FIVE_MINUTES);
            await this.core.pairing.pairings.set(r, {
              topic: r,
              expiry: e,
              relay: { protocol: "irn" },
              active: !1,
            });
          }
          this.events.emit(n_.message, e),
            await this.recordMessageEvent(e, nS.inbound);
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
                  let r = () => {
                    t(
                      Error("Connection interrupted while trying to subscribe")
                    );
                  };
                  this.provider.once(nx.disconnect, r),
                    await eL(
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
                        this.provider.off(nx.disconnect, r),
                          clearTimeout(this.reconnectTimeout);
                      }),
                    await new Promise(async (e, t) => {
                      let r = () => {
                        t(
                          Error(
                            "Connection interrupted while trying to subscribe"
                          )
                        );
                      };
                      this.provider.once(nx.disconnect, r),
                        await this.subscriber
                          .start()
                          .then(e)
                          .catch(t)
                          .finally(() => {
                            this.provider.off(nx.disconnect, r);
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
            await new Promise((e) => setTimeout(e, (0, o.toMiliseconds)(+t))),
              t++;
          }
        }
        startPingTimeout() {
          var e, t, r, i, s;
          if (eD())
            try {
              null !=
                (t = null == (e = this.provider) ? void 0 : e.connection) &&
                t.socket &&
                (null ==
                  (s =
                    null ==
                    (i = null == (r = this.provider) ? void 0 : r.connection)
                      ? void 0
                      : i.socket) ||
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
          (this.provider = new nh.F(
            new nd.A(
              (function ({
                protocol: e,
                version: t,
                relayUrl: r,
                sdkVersion: i,
                auth: s,
                projectId: n,
                useOnCloseEvent: o,
                bundleId: a,
                packageName: c,
              }) {
                let l = r.split("?"),
                  h = eR(e, t, i),
                  u = (function (e, t) {
                    let r = new URLSearchParams(e);
                    for (let e of Object.keys(t).sort())
                      if (t.hasOwnProperty(e)) {
                        let i = t[e];
                        void 0 !== i && r.set(e, i);
                      }
                    return r.toString();
                  })(l[1] || "", {
                    auth: s,
                    ua: h,
                    projectId: n,
                    useOnCloseEvent: o || void 0,
                    packageName: c || void 0,
                    bundleId: a || void 0,
                  });
                return l[0] + "?" + u;
              })({
                sdkVersion: nD,
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
          let { topic: r, message: i } = e;
          await this.messages.set(r, i, t);
        }
        async shouldIgnoreMessageEvent(e) {
          let { topic: t, message: r } = e;
          if (!r || 0 === r.length)
            return this.logger.warn(`Ignoring invalid/empty message: ${r}`), !0;
          if (!(await this.subscriber.isKnownTopic(t)))
            return (
              this.logger.warn(`Ignoring message for unknown topic ${t}`), !0
            );
          let i = this.messages.has(t, r);
          return i && this.logger.warn(`Ignoring duplicate message: ${r}`), i;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e,
            }),
            (0, nu.isJsonRpcRequest)(e))
          ) {
            if (!e.method.endsWith("_subscription")) return;
            let t = e.params,
              { topic: r, message: i, publishedAt: s, attestation: n } = t.data,
              o = {
                topic: r,
                message: i,
                publishedAt: s,
                transportType: nP.relay,
                attestation: n,
              };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(ab({ type: "event", event: t.id }, o)),
              this.events.emit(t.id, o),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(o);
          } else
            (0, nu.isJsonRpcResponse)(e) && this.events.emit(n_.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (await this.recordMessageEvent(e, nS.inbound),
            this.events.emit(n_.message, e));
        }
        async acknowledgePayload(e) {
          let t = (0, nu.formatJsonRpcResult)(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(nx.payload, this.onPayloadHandler),
            this.provider.off(nx.connect, this.onConnectHandler),
            this.provider.off(nx.disconnect, this.onDisconnectHandler),
            this.provider.off(nx.error, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let e = await s_();
          (function (e) {
            var t, i;
            switch (eO()) {
              case ex.browser:
                (t = e),
                  !eP() &&
                    eS() &&
                    (window.addEventListener("online", () => t(!0)),
                    window.addEventListener("offline", () => t(!1)));
                break;
              case ex.reactNative:
                (i = e),
                  eP() &&
                    "u" > typeof r.g &&
                    null != r.g &&
                    r.g.NetInfo &&
                    r.g?.NetInfo.addEventListener((e) => i(e?.isConnected));
              case ex.node:
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
            this.core.heartbeat.on(sS.li.pulse, async () => {
              var e;
              if (
                !this.transportExplicitlyClosed &&
                !this.connected &&
                (!(eS() && (0, a.getDocument)()) ||
                  (null == (e = (0, a.getDocument)())
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
            this.events.emit(n_.disconnect),
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
                  }, (0, o.toMiliseconds)(0.1)))));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
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
      function aE() {}
      function aI(e) {
        if (!e || "object" != typeof e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t ||
            t === Object.prototype ||
            null === Object.getPrototypeOf(t)) &&
          "[object Object]" === Object.prototype.toString.call(e)
        );
      }
      function a_(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function ax(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : Object.prototype.toString.call(e);
      }
      let aD = "[object Arguments]",
        aP = "[object Object]";
      var aS = Object.defineProperty,
        aO = Object.getOwnPropertySymbols,
        aA = Object.prototype.hasOwnProperty,
        aC = Object.prototype.propertyIsEnumerable,
        aR = (e, t, r) =>
          t in e
            ? aS(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        aT = (e, t) => {
          for (var r in t || (t = {})) aA.call(t, r) && aR(e, r, t[r]);
          if (aO) for (var r of aO(t)) aC.call(t, r) && aR(e, r, t[r]);
          return e;
        },
        aN = (e, t, r) => aR(e, "symbol" != typeof t ? t + "" : t, r);
      class aj extends s9 {
        constructor(e, t, r, i = ny, s) {
          super(e, t, r, i),
            (this.core = e),
            (this.logger = t),
            (this.name = r),
            aN(this, "map", new Map()),
            aN(this, "version", "0.3"),
            aN(this, "cached", []),
            aN(this, "initialized", !1),
            aN(this, "getKey"),
            aN(this, "storagePrefix", ny),
            aN(this, "recentlyDeleted", []),
            aN(this, "recentlyDeletedLimit", 200),
            aN(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !su(e)
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
            aN(this, "set", async (e, t) => {
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
            aN(
              this,
              "get",
              (e) => (
                this.isInitialized(),
                this.logger.debug("Getting value"),
                this.logger.trace({ type: "method", method: "get", key: e }),
                this.getData(e)
              )
            ),
            aN(
              this,
              "getAll",
              (e) => (
                this.isInitialized(),
                e
                  ? this.values.filter((t) =>
                      Object.keys(e).every((r) => {
                        var i;
                        return (
                          (i = t[r]),
                          (function e(t, r, i, s, n, o, a) {
                            let c = a(t, r, i, s, n, o);
                            if (void 0 !== c) return c;
                            if (typeof t == typeof r)
                              switch (typeof t) {
                                case "bigint":
                                case "string":
                                case "boolean":
                                case "symbol":
                                case "undefined":
                                case "function":
                                  return t === r;
                                case "number":
                                  return t === r || Object.is(t, r);
                              }
                            return (function t(r, i, s, n) {
                              if (Object.is(r, i)) return !0;
                              let o = ax(r),
                                a = ax(i);
                              if (
                                (o === aD && (o = aP),
                                a === aD && (a = aP),
                                o !== a)
                              )
                                return !1;
                              switch (o) {
                                case "[object String]":
                                  return r.toString() === i.toString();
                                case "[object Number]": {
                                  let e = r.valueOf(),
                                    t = i.valueOf();
                                  return (
                                    e === t ||
                                    (Number.isNaN(e) && Number.isNaN(t))
                                  );
                                }
                                case "[object Boolean]":
                                case "[object Date]":
                                case "[object Symbol]":
                                  return Object.is(r.valueOf(), i.valueOf());
                                case "[object RegExp]":
                                  return (
                                    r.source === i.source && r.flags === i.flags
                                  );
                                case "[object Function]":
                                  return r === i;
                              }
                              let c = (s = s ?? new Map()).get(r),
                                l = s.get(i);
                              if (null != c && null != l) return c === i;
                              s.set(r, i), s.set(i, r);
                              try {
                                switch (o) {
                                  case "[object Map]":
                                    if (r.size !== i.size) return !1;
                                    for (let [t, o] of r.entries())
                                      if (
                                        !i.has(t) ||
                                        !e(o, i.get(t), t, r, i, s, n)
                                      )
                                        return !1;
                                    return !0;
                                  case "[object Set]": {
                                    if (r.size !== i.size) return !1;
                                    let t = Array.from(r.values()),
                                      o = Array.from(i.values());
                                    for (let a = 0; a < t.length; a++) {
                                      let c = t[a],
                                        l = o.findIndex((t) =>
                                          e(c, t, void 0, r, i, s, n)
                                        );
                                      if (-1 === l) return !1;
                                      o.splice(l, 1);
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
                                      ("u" > typeof np &&
                                        np.isBuffer(r) !== np.isBuffer(i)) ||
                                      r.length !== i.length
                                    )
                                      return !1;
                                    for (let t = 0; t < r.length; t++)
                                      if (!e(r[t], i[t], t, r, i, s, n))
                                        return !1;
                                    return !0;
                                  case "[object ArrayBuffer]":
                                    return (
                                      r.byteLength === i.byteLength &&
                                      t(
                                        new Uint8Array(r),
                                        new Uint8Array(i),
                                        s,
                                        n
                                      )
                                    );
                                  case "[object DataView]":
                                    return (
                                      r.byteLength === i.byteLength &&
                                      r.byteOffset === i.byteOffset &&
                                      t(
                                        new Uint8Array(r),
                                        new Uint8Array(i),
                                        s,
                                        n
                                      )
                                    );
                                  case "[object Error]":
                                    return (
                                      r.name === i.name &&
                                      r.message === i.message
                                    );
                                  case aP: {
                                    if (
                                      !(
                                        t(r.constructor, i.constructor, s, n) ||
                                        (aI(r) && aI(i))
                                      )
                                    )
                                      return !1;
                                    let o = [...Object.keys(r), ...a_(r)],
                                      a = [...Object.keys(i), ...a_(i)];
                                    if (o.length !== a.length) return !1;
                                    for (let t = 0; t < o.length; t++) {
                                      let a = o[t],
                                        c = r[a];
                                      if (!Object.hasOwn(i, a)) return !1;
                                      let l = i[a];
                                      if (!e(c, l, a, r, i, s, n)) return !1;
                                    }
                                    return !0;
                                  }
                                  default:
                                    return !1;
                                }
                              } finally {
                                s.delete(r), s.delete(i);
                              }
                            })(t, r, o, a);
                          })(i, e[r], void 0, void 0, void 0, void 0, aE)
                        );
                      })
                    )
                  : this.values
              )
            ),
            aN(this, "update", async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: e,
                  update: t,
                });
              let r = aT(aT({}, this.getData(e)), t);
              this.map.set(e, r), await this.persist();
            }),
            aN(this, "delete", async (e, t) => {
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
            (this.logger = (0, sG.U5)(t, this.name)),
            (this.storagePrefix = i),
            (this.getKey = s);
        }
        get context() {
          return (0, sG.oI)(this.logger);
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
              let { message: t } = sa(
                "MISSING_OR_INVALID",
                `Record was recently deleted - ${this.name}: ${e}`
              );
              throw (this.logger.error(t), Error(t));
            }
            let { message: t } = sa("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
              let { message: e } = sa("RESTORE_WILL_OVERRIDE", this.name);
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
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var aU = Object.defineProperty,
        aL = (e, t, r) =>
          t in e
            ? aU(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        ak = (e, t, r) => aL(e, "symbol" != typeof t ? t + "" : t, r);
      class aq {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            ak(this, "name", "pairing"),
            ak(this, "version", "0.3"),
            ak(this, "events", new (s())()),
            ak(this, "pairings"),
            ak(this, "initialized", !1),
            ak(this, "storagePrefix", ny),
            ak(this, "ignoredPayloadTypes", [1]),
            ak(this, "registeredMethods", []),
            ak(this, "init", async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            ak(this, "register", ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...e]),
                ]);
            }),
            ak(this, "create", async (e) => {
              this.isInitialized();
              let t = iB(),
                r = await this.core.crypto.setSymKey(t),
                i = eB(o.FIVE_MINUTES),
                s = { protocol: "irn" },
                n = {
                  topic: r,
                  expiry: i,
                  relay: s,
                  active: !1,
                  methods: e?.methods,
                },
                a = iX({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: r,
                  symKey: t,
                  relay: s,
                  expiryTimestamp: i,
                  methods: e?.methods,
                });
              return (
                this.events.emit(nR.create, n),
                this.core.expirer.set(r, i),
                await this.pairings.set(r, n),
                await this.core.relayer.subscribe(r, {
                  transportType: e?.transportType,
                }),
                { topic: r, uri: a }
              );
            }),
            ak(this, "pair", async (e) => {
              let t;
              this.isInitialized();
              let r = this.core.eventClient.createEvent({
                properties: { topic: e?.uri, trace: [nk.pairing_started] },
              });
              this.isValidPair(e, r);
              let {
                topic: i,
                symKey: s,
                relay: n,
                expiryTimestamp: a,
                methods: c,
              } = iQ(e.uri);
              if (
                ((r.props.properties.topic = i),
                r.addTrace(nk.pairing_uri_validation_success),
                r.addTrace(nk.pairing_uri_not_expired),
                this.pairings.keys.includes(i))
              ) {
                if (
                  ((t = this.pairings.get(i)),
                  r.addTrace(nk.existing_pairing),
                  t.active)
                )
                  throw (
                    (r.setError(nq.active_pairing_already_exists),
                    Error(
                      `Pairing already exists: ${i}. Please try again with a new connection URI.`
                    ))
                  );
                r.addTrace(nk.pairing_not_expired);
              }
              let l = a || eB(o.FIVE_MINUTES),
                h = { topic: i, relay: n, expiry: l, active: !1, methods: c };
              this.core.expirer.set(i, l),
                await this.pairings.set(i, h),
                r.addTrace(nk.store_new_pairing),
                e.activatePairing && (await this.activate({ topic: i })),
                this.events.emit(nR.create, h),
                r.addTrace(nk.emit_inactive_pairing),
                this.core.crypto.keychain.has(i) ||
                  (await this.core.crypto.setSymKey(s, i)),
                r.addTrace(nk.subscribing_pairing_topic);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                r.setError(nq.no_internet_connection);
              }
              try {
                await this.core.relayer.subscribe(i, { relay: n });
              } catch (e) {
                throw (r.setError(nq.subscribe_pairing_topic_failure), e);
              }
              return r.addTrace(nk.subscribe_pairing_topic_success), h;
            }),
            ak(this, "activate", async ({ topic: e }) => {
              this.isInitialized();
              let t = eB(o.FIVE_MINUTES);
              this.core.expirer.set(e, t),
                await this.pairings.update(e, { active: !0, expiry: t });
            }),
            ak(this, "ping", async (e) => {
              this.isInitialized(),
                await this.isValidPing(e),
                this.logger.warn(
                  "ping() is deprecated and will be removed in the next major release."
                );
              let { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                let e = await this.sendRequest(t, "wc_pairingPing", {}),
                  { done: r, resolve: i, reject: s } = eU();
                this.events.once(eM("pairing_ping", e), ({ error: e }) => {
                  e ? s(e) : i();
                }),
                  await r();
              }
            }),
            ak(this, "updateExpiry", async ({ topic: e, expiry: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { expiry: t });
            }),
            ak(this, "updateMetadata", async ({ topic: e, metadata: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { peerMetadata: t });
            }),
            ak(
              this,
              "getPairings",
              () => (this.isInitialized(), this.pairings.values)
            ),
            ak(this, "disconnect", async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(
                  t,
                  "wc_pairingDelete",
                  sc("USER_DISCONNECTED")
                ),
                await this.deletePairing(t));
            }),
            ak(this, "formatUriFromPairing", (e) => {
              this.isInitialized();
              let { topic: t, relay: r, expiry: i, methods: s } = e,
                n = this.core.crypto.keychain.get(t);
              return iX({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: t,
                symKey: n,
                relay: r,
                expiryTimestamp: i,
                methods: s,
              });
            }),
            ak(this, "sendRequest", async (e, t, r) => {
              let i = (0, nu.formatJsonRpcRequest)(t, r),
                s = await this.core.crypto.encode(e, i),
                n = nC[t].req;
              return (
                this.core.history.set(e, i),
                this.core.relayer.publish(e, s, n),
                i.id
              );
            }),
            ak(this, "sendResult", async (e, t, r) => {
              let i = (0, nu.formatJsonRpcResult)(e, r),
                s = await this.core.crypto.encode(t, i),
                n = nC[(await this.core.history.get(t, e)).request.method].res;
              await this.core.relayer.publish(t, s, n),
                await this.core.history.resolve(i);
            }),
            ak(this, "sendError", async (e, t, r) => {
              let i = (0, nu.formatJsonRpcError)(e, r),
                s = await this.core.crypto.encode(t, i),
                n = (await this.core.history.get(t, e)).request.method,
                o = nC[n] ? nC[n].res : nC.unregistered_method.res;
              await this.core.relayer.publish(t, s, o),
                await this.core.history.resolve(i);
            }),
            ak(this, "deletePairing", async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, sc("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            ak(this, "cleanup", async () => {
              let e = this.pairings.getAll().filter((e) => e$(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            ak(this, "onRelayEventRequest", async (e) => {
              let { topic: t, payload: r } = e;
              switch (r.method) {
                case "wc_pairingPing":
                  return await this.onPairingPingRequest(t, r);
                case "wc_pairingDelete":
                  return await this.onPairingDeleteRequest(t, r);
                default:
                  return await this.onUnknownRpcMethodRequest(t, r);
              }
            }),
            ak(this, "onRelayEventResponse", async (e) => {
              let { topic: t, payload: r } = e,
                i = (await this.core.history.get(t, r.id)).request.method;
              return "wc_pairingPing" === i
                ? this.onPairingPingResponse(t, r)
                : this.onUnknownRpcMethodResponse(i);
            }),
            ak(this, "onPairingPingRequest", async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(r, e, !0),
                  this.events.emit(nR.ping, { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            ak(this, "onPairingPingResponse", (e, t) => {
              let { id: r } = t;
              setTimeout(() => {
                (0, nu.isJsonRpcResult)(t)
                  ? this.events.emit(eM("pairing_ping", r), {})
                  : (0, nu.isJsonRpcError)(t) &&
                    this.events.emit(eM("pairing_ping", r), { error: t.error });
              }, 500);
            }),
            ak(this, "onPairingDeleteRequest", async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(nR.delete, { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            ak(this, "onUnknownRpcMethodRequest", async (e, t) => {
              let { id: r, method: i } = t;
              try {
                if (this.registeredMethods.includes(i)) return;
                let t = sc("WC_METHOD_UNSUPPORTED", i);
                await this.sendError(r, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            ak(this, "onUnknownRpcMethodResponse", (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(sc("WC_METHOD_UNSUPPORTED", e));
            }),
            ak(this, "isValidPair", (e, t) => {
              var r;
              if (!sw(e)) {
                let { message: r } = sa(
                  "MISSING_OR_INVALID",
                  `pair() params: ${e}`
                );
                throw (t.setError(nq.malformed_pairing_uri), Error(r));
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
                    if (sd(e, !1)) {
                      if (t(e)) return !0;
                      let r = eJ(e);
                      return t(r);
                    }
                  } catch {}
                  return !1;
                })(e.uri)
              ) {
                let { message: r } = sa(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${e.uri}`
                );
                throw (t.setError(nq.malformed_pairing_uri), Error(r));
              }
              let i = iQ(e?.uri);
              if (!(null != (r = i?.relay) && r.protocol)) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  "pair() uri#relay-protocol"
                );
                throw (t.setError(nq.malformed_pairing_uri), Error(e));
              }
              if (!(null != i && i.symKey)) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  "pair() uri#symKey"
                );
                throw (t.setError(nq.malformed_pairing_uri), Error(e));
              }
              if (
                null != i &&
                i.expiryTimestamp &&
                (0, o.toMiliseconds)(i?.expiryTimestamp) < Date.now()
              ) {
                t.setError(nq.pairing_expired);
                let { message: e } = sa(
                  "EXPIRED",
                  "pair() URI has expired. Please try again with a new connection URI."
                );
                throw Error(e);
              }
            }),
            ak(this, "isValidPing", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            ak(this, "isValidDisconnect", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            ak(this, "isValidPairingTopic", async (e) => {
              if (!sd(e, !1)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${e}`
                );
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = sa(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${e}`
                );
                throw Error(t);
              }
              if (e$(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = sa("EXPIRED", `pairing topic: ${e}`);
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, sG.U5)(t, this.name)),
            (this.pairings = new aj(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return (0, sG.oI)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(n_.message, async (e) => {
            let { topic: t, message: r, transportType: i } = e;
            if (
              this.pairings.keys.includes(t) &&
              i !== nP.link_mode &&
              !this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(r)
              )
            )
              try {
                let e = await this.core.crypto.decode(t, r);
                (0, nu.isJsonRpcRequest)(e)
                  ? (this.core.history.set(t, e),
                    await this.onRelayEventRequest({ topic: t, payload: e }))
                  : (0, nu.isJsonRpcResponse)(e) &&
                    (await this.core.history.resolve(e),
                    await this.onRelayEventResponse({ topic: t, payload: e }),
                    this.core.history.delete(t, e.id)),
                  await this.core.relayer.messages.ack(t, r);
              } catch (e) {
                this.logger.error(e);
              }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(nN.expired, async (e) => {
            let { topic: t } = eq(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0),
              this.events.emit(nR.expire, { topic: t }));
          });
        }
      }
      var aB = Object.defineProperty,
        a$ = (e, t, r) =>
          t in e
            ? aB(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        aM = (e, t, r) => a$(e, "symbol" != typeof t ? t + "" : t, r);
      class az extends s3 {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            aM(this, "records", new Map()),
            aM(this, "events", new i.EventEmitter()),
            aM(this, "name", "history"),
            aM(this, "version", "0.3"),
            aM(this, "cached", []),
            aM(this, "initialized", !1),
            aM(this, "storagePrefix", ny),
            aM(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            aM(this, "set", (e, t, r) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: e,
                  request: t,
                  chainId: r,
                }),
                this.records.has(t.id))
              )
                return;
              let i = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: r,
                expiry: eB(o.THIRTY_DAYS),
              };
              this.records.set(i.id, i),
                this.persist(),
                this.events.emit(nT.created, i);
            }),
            aM(this, "resolve", async (e) => {
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
                ((t.response = (0, nu.isJsonRpcError)(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.persist(),
                this.events.emit(nT.updated, t));
            }),
            aM(
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
            aM(this, "delete", (e, t) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: t }),
                this.values.forEach((r) => {
                  r.topic === e &&
                    (("u" > typeof t && r.id !== t) ||
                      (this.records.delete(r.id),
                      this.events.emit(nT.deleted, r)));
                }),
                this.persist();
            }),
            aM(
              this,
              "exists",
              async (e, t) => (
                this.isInitialized(),
                !!this.records.has(t) && (await this.getRecord(t)).topic === e
              )
            ),
            aM(this, "on", (e, t) => {
              this.events.on(e, t);
            }),
            aM(this, "once", (e, t) => {
              this.events.once(e, t);
            }),
            aM(this, "off", (e, t) => {
              this.events.off(e, t);
            }),
            aM(this, "removeListener", (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, sG.U5)(t, this.name));
        }
        get context() {
          return (0, sG.oI)(this.logger);
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
              let r = {
                topic: t.topic,
                request: (0, nu.formatJsonRpcRequest)(
                  t.request.method,
                  t.request.params,
                  t.id
                ),
                chainId: t.chainId,
              };
              return e.push(r);
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
            let { message: t } = sa("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(nT.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
              let { message: e } = sa("RESTORE_WILL_OVERRIDE", this.name);
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
          this.events.on(nT.created, (e) => {
            let t = nT.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, record: e });
          }),
            this.events.on(nT.updated, (e) => {
              let t = nT.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e });
            }),
            this.events.on(nT.deleted, (e) => {
              let t = nT.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e });
            }),
            this.core.heartbeat.on(sS.li.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t) => {
              (0, o.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(nT.deleted, t, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var aF = Object.defineProperty,
        aH = (e, t, r) =>
          t in e
            ? aF(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        aV = (e, t, r) => aH(e, "symbol" != typeof t ? t + "" : t, r);
      class aK extends nt {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            aV(this, "expirations", new Map()),
            aV(this, "events", new i.EventEmitter()),
            aV(this, "name", "expirer"),
            aV(this, "version", "0.3"),
            aV(this, "cached", []),
            aV(this, "initialized", !1),
            aV(this, "storagePrefix", ny),
            aV(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            aV(this, "has", (e) => {
              try {
                let t = this.formatTarget(e);
                return "u" > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            aV(this, "set", (e, t) => {
              this.isInitialized();
              let r = this.formatTarget(e),
                i = { target: r, expiry: t };
              this.expirations.set(r, i),
                this.checkExpiry(r, i),
                this.events.emit(nN.created, { target: r, expiration: i });
            }),
            aV(this, "get", (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            aV(this, "del", (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  r = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(nN.deleted, { target: t, expiration: r });
              }
            }),
            aV(this, "on", (e, t) => {
              this.events.on(e, t);
            }),
            aV(this, "once", (e, t) => {
              this.events.once(e, t);
            }),
            aV(this, "off", (e, t) => {
              this.events.off(e, t);
            }),
            aV(this, "removeListener", (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, sG.U5)(t, this.name));
        }
        get context() {
          return (0, sG.oI)(this.logger);
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
          if ("string" == typeof e) return ek("topic", e);
          if ("number" == typeof e) return ek("id", e);
          let { message: t } = sa("UNKNOWN_TYPE", `Target type: ${typeof e}`);
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(nN.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = sa("RESTORE_WILL_OVERRIDE", this.name);
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
            let { message: t } = sa("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.warn(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: r } = t;
          (0, o.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e),
            this.events.emit(nN.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(sS.li.pulse, () => this.checkExpirations()),
            this.events.on(nN.created, (e) => {
              let t = nN.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(nN.expired, (e) => {
              let t = nN.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(nN.deleted, (e) => {
              let t = nN.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var aW = Object.defineProperty,
        aJ = (e, t, r) =>
          t in e
            ? aW(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        aG = (e, t, r) => aJ(e, "symbol" != typeof t ? t + "" : t, r);
      class aY extends nr {
        constructor(e, t, r) {
          super(e, t, r),
            (this.core = e),
            (this.logger = t),
            (this.store = r),
            aG(this, "name", "verify-api"),
            aG(this, "abortController"),
            aG(this, "isDevEnv"),
            aG(this, "verifyUrlV3", nU),
            aG(this, "storagePrefix", ny),
            aG(this, "version", 2),
            aG(this, "publicKey"),
            aG(this, "fetchPromise"),
            aG(this, "init", async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, o.toMiliseconds)(
                    null == (e = this.publicKey) ? void 0 : e.expiresAt
                  ) < Date.now() &&
                  (this.logger.debug("verify v2 public key expired"),
                  await this.removePublicKey()));
            }),
            aG(this, "register", async (e) => {
              if (!eS() || this.isDevEnv) return;
              let t = window.location.origin,
                { id: r, decryptedId: i } = e,
                s = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${r}&decryptedId=${i}`;
              try {
                let e = (0, a.getDocument)(),
                  t = this.startAbortTimer(5 * o.ONE_SECOND),
                  i = await new Promise((i, n) => {
                    let o = () => {
                      window.removeEventListener("message", c),
                        e.body.removeChild(a),
                        n("attestation aborted");
                    };
                    this.abortController.signal.addEventListener("abort", o);
                    let a = e.createElement("iframe");
                    (a.src = s),
                      (a.style.display = "none"),
                      a.addEventListener("error", o, {
                        signal: this.abortController.signal,
                      });
                    let c = (s) => {
                      if (s.data && "string" == typeof s.data)
                        try {
                          let n = JSON.parse(s.data);
                          if ("verify_attestation" === n.type) {
                            if ((0, eo.Cq)(n.attestation).payload.id !== r)
                              return;
                            clearInterval(t),
                              e.body.removeChild(a),
                              this.abortController.signal.removeEventListener(
                                "abort",
                                o
                              ),
                              window.removeEventListener("message", c),
                              i(null === n.attestation ? "" : n.attestation);
                          }
                        } catch (e) {
                          this.logger.warn(e);
                        }
                    };
                    e.body.appendChild(a),
                      window.addEventListener("message", c, {
                        signal: this.abortController.signal,
                      });
                  });
                return this.logger.debug("jwt attestation", i), i;
              } catch (e) {
                this.logger.warn(e);
              }
              return "";
            }),
            aG(this, "resolve", async (e) => {
              if (this.isDevEnv) return "";
              let { attestationId: t, hash: r, encryptedId: i } = e;
              if ("" === t)
                return void this.logger.debug(
                  "resolve: attestationId is empty, skipping"
                );
              if (t) {
                if ((0, eo.Cq)(t).payload.id !== i) return;
                let e = await this.isValidJwtAttestation(t);
                if (e)
                  return e.isVerified
                    ? e
                    : void this.logger.warn(
                        "resolve: jwt attestation: origin url not verified"
                      );
              }
              if (!r) return;
              let s = this.getVerifyUrl(e?.verifyUrl);
              return this.fetchAttestation(r, s);
            }),
            aG(this, "fetchAttestation", async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              let r = this.startAbortTimer(5 * o.ONE_SECOND),
                i = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return (
                clearTimeout(r), 200 === i.status ? await i.json() : void 0
              );
            }),
            aG(this, "getVerifyUrl", (e) => {
              let t = e || nj;
              return (
                nL.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${nj}`
                  ),
                  (t = nj)),
                t
              );
            }),
            aG(this, "fetchPublicKey", async () => {
              try {
                this.logger.debug(
                  `fetching public key from: ${this.verifyUrlV3}`
                );
                let e = this.startAbortTimer(o.FIVE_SECONDS),
                  t = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await t.json();
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            aG(this, "persistPublicKey", async (e) => {
              this.logger.debug("persisting public key to local storage", e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            aG(this, "removePublicKey", async () => {
              this.logger.debug("removing verify v2 public key from storage"),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            aG(this, "isValidJwtAttestation", async (e) => {
              let t = await this.getPublicKey();
              try {
                if (t) return this.validateAttestation(e, t);
              } catch (e) {
                this.logger.error(e),
                  this.logger.warn("error validating attestation");
              }
              let r = await this.fetchAndPersistPublicKey();
              try {
                if (r) return this.validateAttestation(e, r);
              } catch (e) {
                this.logger.error(e),
                  this.logger.warn("error validating attestation");
              }
            }),
            aG(this, "getPublicKey", async () =>
              this.publicKey
                ? this.publicKey
                : await this.fetchAndPersistPublicKey()
            ),
            aG(this, "fetchAndPersistPublicKey", async () => {
              if (this.fetchPromise)
                return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                let t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              let e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            aG(this, "validateAttestation", (e, t) => {
              let r = (function (e, t) {
                  let [r, i, s] = e.split("."),
                    n = eh.from(iV(s), "base64");
                  if (64 !== n.length) throw Error("Invalid signature length");
                  let o = n.slice(0, 32),
                    a = n.slice(32, 64),
                    c = rE(`${r}.${i}`),
                    l = (function (e) {
                      let t = eh.from(e.x, "base64"),
                        r = eh.from(e.y, "base64");
                      return (0, ea.xW)([new Uint8Array([4]), t, r]);
                    })(t);
                  if (!iN.verify((0, ea.xW)([o, a]), c, l))
                    throw Error("Invalid signature");
                  return (0, eo.Cq)(e).payload;
                })(e, t.publicKey),
                i = {
                  hasExpired: (0, o.toMiliseconds)(r.exp) < Date.now(),
                  payload: r,
                };
              if (i.hasExpired)
                throw (
                  (this.logger.warn("resolve: jwt attestation expired"),
                  Error("JWT attestation expired"))
                );
              return {
                origin: i.payload.origin,
                isScam: i.payload.isScam,
                isVerified: i.payload.isVerified,
              };
            }),
            (this.logger = (0, sG.U5)(t, this.name)),
            (this.abortController = new AbortController()),
            (this.isDevEnv = eW()),
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
          return (0, sG.oI)(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, o.toMiliseconds)(e)
            )
          );
        }
      }
      var aZ = Object.defineProperty,
        aQ = (e, t, r) =>
          t in e
            ? aZ(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        aX = (e, t, r) => aQ(e, "symbol" != typeof t ? t + "" : t, r);
      class a0 extends ni {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            aX(this, "context", "echo"),
            aX(this, "registerDeviceToken", async (e) => {
              let {
                  clientId: t,
                  token: r,
                  notificationType: i,
                  enableEncrypted: s = !1,
                } = e,
                n = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fetch(n, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  client_id: t,
                  type: i,
                  token: r,
                  always_raw: s,
                }),
              });
            }),
            (this.logger = (0, sG.U5)(t, this.context));
        }
      }
      var a1 = Object.defineProperty,
        a2 = Object.getOwnPropertySymbols,
        a8 = Object.prototype.hasOwnProperty,
        a3 = Object.prototype.propertyIsEnumerable,
        a5 = (e, t, r) =>
          t in e
            ? a1(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        a6 = (e, t) => {
          for (var r in t || (t = {})) a8.call(t, r) && a5(e, r, t[r]);
          if (a2) for (var r of a2(t)) a3.call(t, r) && a5(e, r, t[r]);
          return e;
        },
        a4 = (e, t, r) => a5(e, "symbol" != typeof t ? t + "" : t, r);
      class a9 extends ns {
        constructor(e, t, r = !0) {
          super(e, t, r),
            (this.core = e),
            (this.logger = t),
            a4(this, "context", "event-client"),
            a4(this, "storagePrefix", ny),
            a4(this, "storageVersion", 0.1),
            a4(this, "events", new Map()),
            a4(this, "shouldPersist", !1),
            a4(this, "init", async () => {
              if (!eW())
                try {
                  let e = {
                    eventId: eK(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                      event: "INIT",
                      type: "",
                      properties: {
                        client_id: await this.core.crypto.getClientId(),
                        user_agent: eR(
                          this.core.relayer.protocol,
                          this.core.relayer.version,
                          nD
                        ),
                      },
                    },
                  };
                  await this.sendEvent([e]);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            a4(this, "createEvent", (e) => {
              let {
                  event: t = "ERROR",
                  type: r = "",
                  properties: { topic: i, trace: s },
                } = e,
                n = eK(),
                o = this.core.projectId || "",
                a = a6(
                  {
                    eventId: n,
                    timestamp: Date.now(),
                    props: {
                      event: t,
                      type: r,
                      properties: { topic: i, trace: s },
                    },
                    bundleId: o,
                    domain: this.getAppDomain(),
                  },
                  this.setMethods(n)
                );
              return (
                this.telemetryEnabled &&
                  (this.events.set(n, a), (this.shouldPersist = !0)),
                a
              );
            }),
            a4(this, "getEvent", (e) => {
              let { eventId: t, topic: r } = e;
              if (t) return this.events.get(t);
              let i = Array.from(this.events.values()).find(
                (e) => e.props.properties.topic === r
              );
              if (i) return a6(a6({}, i), this.setMethods(i.eventId));
            }),
            a4(this, "deleteEvent", (e) => {
              let { eventId: t } = e;
              this.events.delete(t), (this.shouldPersist = !0);
            }),
            a4(this, "setEventListeners", () => {
              this.core.heartbeat.on(sS.li.pulse, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, o.fromMiliseconds)(Date.now()) -
                      (0, o.fromMiliseconds)(e.timestamp) >
                      86400 &&
                      (this.events.delete(e.eventId),
                      (this.shouldPersist = !0));
                  });
              });
            }),
            a4(this, "setMethods", (e) => ({
              addTrace: (t) => this.addTrace(e, t),
              setError: (t) => this.setError(e, t),
            })),
            a4(this, "addTrace", (e, t) => {
              let r = this.events.get(e);
              r &&
                (r.props.properties.trace.push(t),
                this.events.set(e, r),
                (this.shouldPersist = !0));
            }),
            a4(this, "setError", (e, t) => {
              let r = this.events.get(e);
              r &&
                ((r.props.type = t),
                (r.timestamp = Date.now()),
                this.events.set(e, r),
                (this.shouldPersist = !0));
            }),
            a4(this, "persist", async () => {
              await this.core.storage.setItem(
                this.storageKey,
                Array.from(this.events.values())
              ),
                (this.shouldPersist = !1);
            }),
            a4(this, "restore", async () => {
              try {
                let e =
                  (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(
                    e.eventId,
                    a6(a6({}, e), this.setMethods(e.eventId))
                  );
                });
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            a4(this, "submit", async () => {
              if (!this.telemetryEnabled || 0 === this.events.size) return;
              let e = [];
              for (let [t, r] of this.events) r.props.type && e.push(r);
              if (0 !== e.length)
                try {
                  if ((await this.sendEvent(e)).ok)
                    for (let t of e)
                      this.events.delete(t.eventId), (this.shouldPersist = !0);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            a4(this, "sendEvent", async (e) => {
              let t = this.getAppDomain() ? "" : "&sp=desktop";
              return await fetch(
                `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${nD}${t}`,
                { method: "POST", body: JSON.stringify(e) }
              );
            }),
            a4(this, "getAppDomain", () => eC().url),
            (this.logger = (0, sG.U5)(t, this.context)),
            (this.telemetryEnabled = r),
            r
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
      var a7 = Object.defineProperty,
        ce = Object.getOwnPropertySymbols,
        ct = Object.prototype.hasOwnProperty,
        cr = Object.prototype.propertyIsEnumerable,
        ci = (e, t, r) =>
          t in e
            ? a7(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        cs = (e, t) => {
          for (var r in t || (t = {})) ct.call(t, r) && ci(e, r, t[r]);
          if (ce) for (var r of ce(t)) cr.call(t, r) && ci(e, r, t[r]);
          return e;
        },
        cn = (e, t, r) => ci(e, "symbol" != typeof t ? t + "" : t, r);
      class co extends s0 {
        constructor(e) {
          var t;
          super(e),
            cn(this, "protocol", "wc"),
            cn(this, "version", 2),
            cn(this, "name", ng),
            cn(this, "relayUrl"),
            cn(this, "projectId"),
            cn(this, "customStoragePrefix"),
            cn(this, "events", new i.EventEmitter()),
            cn(this, "logger"),
            cn(this, "heartbeat"),
            cn(this, "relayer"),
            cn(this, "crypto"),
            cn(this, "storage"),
            cn(this, "history"),
            cn(this, "expirer"),
            cn(this, "pairing"),
            cn(this, "verify"),
            cn(this, "echoClient"),
            cn(this, "linkModeSupportedApps"),
            cn(this, "eventClient"),
            cn(this, "initialized", !1),
            cn(this, "logChunkController"),
            cn(this, "on", (e, t) => this.events.on(e, t)),
            cn(this, "once", (e, t) => this.events.once(e, t)),
            cn(this, "off", (e, t) => this.events.off(e, t)),
            cn(this, "removeListener", (e, t) =>
              this.events.removeListener(e, t)
            ),
            cn(
              this,
              "dispatchEnvelope",
              ({ topic: e, message: t, sessionExists: r }) => {
                if (!e || !t) return;
                let i = {
                  topic: e,
                  message: t,
                  publishedAt: Date.now(),
                  transportType: nP.link_mode,
                };
                this.relayer.onLinkMessageEvent(i, { sessionExists: r });
              }
            );
          let r = this.getGlobalCore(e?.customStoragePrefix);
          if (r)
            try {
              return (
                (this.customStoragePrefix = r.customStoragePrefix),
                (this.logger = r.logger),
                (this.heartbeat = r.heartbeat),
                (this.crypto = r.crypto),
                (this.history = r.history),
                (this.expirer = r.expirer),
                (this.storage = r.storage),
                (this.relayer = r.relayer),
                (this.pairing = r.pairing),
                (this.verify = r.verify),
                (this.echoClient = r.echoClient),
                (this.linkModeSupportedApps = r.linkModeSupportedApps),
                (this.eventClient = r.eventClient),
                (this.initialized = r.initialized),
                (this.logChunkController = r.logChunkController),
                r
              );
            } catch (e) {
              console.warn("Failed to copy global core", e);
            }
          (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || nI),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix
                ? `:${e.customStoragePrefix}`
                : "");
          let s = (0, sG.iP)({
              level:
                "string" == typeof e?.logger && e.logger ? e.logger : nm.logger,
              name: ng,
            }),
            { logger: n, chunkLoggerController: o } = (0, sG.D5)({
              opts: s,
              maxSizeInBytes: e?.maxLogBlobSizeInBytes,
              loggerOverride: e?.logger,
            });
          (this.logChunkController = o),
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
            (this.logger = (0, sG.U5)(n, this.name)),
            (this.heartbeat = new sS.VH()),
            (this.crypto = new oB(this, this.logger, e?.keychain)),
            (this.history = new az(this, this.logger)),
            (this.expirer = new aK(this, this.logger)),
            (this.storage =
              null != e && e.storage
                ? e.storage
                : new sJ(cs(cs({}, nb), e?.storageOptions))),
            (this.relayer = new av({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new aq(this, this.logger)),
            (this.verify = new aY(this, this.logger, this.storage)),
            (this.echoClient = new a0(this.projectId || "", this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new a9(this, this.logger, e?.telemetryEnabled)),
            this.setGlobalCore(this);
        }
        static async init(e) {
          let t = new co(e);
          await t.initialize();
          let r = await t.crypto.getClientId();
          return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t;
        }
        get context() {
          return (0, sG.oI)(this.logger);
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
            await this.storage.setItem(nO, this.linkModeSupportedApps));
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
                (await this.storage.getItem(nO)) || []),
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
              r = `${t}_count`;
            return (
              (globalThis[r] = (globalThis[r] || 0) + 1),
              globalThis[r] > 1 &&
                console.warn(
                  `WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[r]} times.`
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
            let r = `_walletConnectCore_${
              (null == (t = e.opts) ? void 0 : t.customStoragePrefix) || ""
            }`;
            globalThis[r] = e;
          } catch (e) {
            console.warn("Failed to set global WalletConnect core", e);
          }
        }
        isGlobalCoreDisabled() {
          try {
            return "u" > typeof nf && "true" === nf.env.DISABLE_GLOBAL_CORE;
          } catch {
            return !0;
          }
        }
      }
      let ca = "client",
        cc = `wc@2:${ca}:`,
        cl = { name: ca, logger: "error" },
        ch = "WALLETCONNECT_DEEPLINK_CHOICE",
        cu = "Proposal expired",
        cd = o.SEVEN_DAYS,
        cp = {
          wc_sessionPropose: {
            req: { ttl: o.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1101 },
            reject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1120 },
            autoReject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1121 },
          },
          wc_sessionSettle: {
            req: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: o.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: o.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: o.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: o.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: o.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: o.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: o.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: o.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: o.ONE_DAY, prompt: !1, tag: 1114 },
            res: { ttl: o.ONE_DAY, prompt: !1, tag: 1115 },
          },
          wc_sessionAuthenticate: {
            req: { ttl: o.ONE_HOUR, prompt: !0, tag: 1116 },
            res: { ttl: o.ONE_HOUR, prompt: !1, tag: 1117 },
            reject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1118 },
            autoReject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1119 },
          },
        },
        cf = { min: o.FIVE_MINUTES, max: o.SEVEN_DAYS },
        cg = { idle: "IDLE", active: "ACTIVE" },
        cy = {
          eth_sendTransaction: { key: "" },
          eth_sendRawTransaction: { key: "" },
          wallet_sendCalls: { key: "" },
          solana_signTransaction: { key: "signature" },
          solana_signAllTransactions: { key: "transactions" },
          solana_signAndSendTransaction: { key: "signature" },
        },
        cm = [
          "wc_sessionPropose",
          "wc_sessionRequest",
          "wc_authRequest",
          "wc_sessionAuthenticate",
        ],
        cb = "wc@1.5:auth:",
        cw = `${cb}:PUB_KEY`;
      var cv = Object.defineProperty,
        cE = Object.defineProperties,
        cI = Object.getOwnPropertyDescriptors,
        c_ = Object.getOwnPropertySymbols,
        cx = Object.prototype.hasOwnProperty,
        cD = Object.prototype.propertyIsEnumerable,
        cP = (e, t, r) =>
          t in e
            ? cv(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        cS = (e, t) => {
          for (var r in t || (t = {})) cx.call(t, r) && cP(e, r, t[r]);
          if (c_) for (var r of c_(t)) cD.call(t, r) && cP(e, r, t[r]);
          return e;
        },
        cO = (e, t) => cE(e, cI(t)),
        cA = (e, t, r) => cP(e, "symbol" != typeof t ? t + "" : t, r);
      class cC extends nl {
        constructor(e) {
          super(e),
            cA(this, "name", "engine"),
            cA(this, "events", new (s())()),
            cA(this, "initialized", !1),
            cA(this, "requestQueue", { state: cg.idle, queue: [] }),
            cA(this, "sessionRequestQueue", { state: cg.idle, queue: [] }),
            cA(this, "requestQueueDelay", o.ONE_SECOND),
            cA(this, "expectedPairingMethodMap", new Map()),
            cA(this, "recentlyDeletedMap", new Map()),
            cA(this, "recentlyDeletedLimit", 200),
            cA(this, "relayMessageCache", []),
            cA(this, "pendingSessions", new Map()),
            cA(this, "init", async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                await this.registerLinkModeListeners(),
                this.client.core.pairing.register({ methods: Object.keys(cp) }),
                (this.initialized = !0),
                setTimeout(async () => {
                  await this.processPendingMessageEvents(),
                    (this.sessionRequestQueue.queue =
                      this.getPendingSessionRequests()),
                    this.processSessionRequestQueue();
                }, (0, o.toMiliseconds)(this.requestQueueDelay)));
            }),
            cA(this, "connect", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              let t = cO(cS({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t),
                (t.optionalNamespaces = (function (e, t) {
                  var r, i, s, n, o, a;
                  let c = si(e),
                    l = si(t),
                    h = {};
                  for (let e of Object.keys(c).concat(Object.keys(l)))
                    h[e] = {
                      chains: ez(
                        null == (r = c[e]) ? void 0 : r.chains,
                        null == (i = l[e]) ? void 0 : i.chains
                      ),
                      methods: ez(
                        null == (s = c[e]) ? void 0 : s.methods,
                        null == (n = l[e]) ? void 0 : n.methods
                      ),
                      events: ez(
                        null == (o = c[e]) ? void 0 : o.events,
                        null == (a = l[e]) ? void 0 : a.events
                      ),
                    };
                  return h;
                })(t.requiredNamespaces, t.optionalNamespaces)),
                (t.requiredNamespaces = {});
              let {
                  pairingTopic: r,
                  requiredNamespaces: i,
                  optionalNamespaces: s,
                  sessionProperties: n,
                  scopedProperties: a,
                  relays: c,
                } = t,
                l = r,
                h,
                u = !1;
              try {
                if (l) {
                  let e = this.client.core.pairing.pairings.get(l);
                  this.client.logger.warn(
                    "connect() with existing pairing topic is deprecated and will be removed in the next major release."
                  ),
                    (u = e.active);
                }
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `connect() -> pairing.get(${l}) failed`
                  ),
                  e)
                );
              }
              if (!l || !u) {
                let { topic: e, uri: t } =
                  await this.client.core.pairing.create();
                (l = e), (h = t);
              }
              if (!l) {
                let { message: e } = sa(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${l}`
                );
                throw Error(e);
              }
              let d = await this.client.core.crypto.generateKeyPair(),
                p = cp.wc_sessionPropose.req.ttl || o.FIVE_MINUTES,
                f = eB(p),
                g = cO(
                  cS(
                    cS(
                      {
                        requiredNamespaces: i,
                        optionalNamespaces: s,
                        relays: c ?? [{ protocol: "irn" }],
                        proposer: {
                          publicKey: d,
                          metadata: this.client.metadata,
                        },
                        expiryTimestamp: f,
                        pairingTopic: l,
                      },
                      n && { sessionProperties: n }
                    ),
                    a && { scopedProperties: a }
                  ),
                  { id: (0, nu.payloadId)() }
                ),
                y = eM("session_connect", g.id),
                { reject: m, resolve: b, done: w } = eU(p, cu),
                v = ({ id: e }) => {
                  e === g.id &&
                    (this.client.events.off("proposal_expire", v),
                    this.pendingSessions.delete(g.id),
                    this.events.emit(y, { error: { message: cu, code: 0 } }));
                };
              return (
                this.client.events.on("proposal_expire", v),
                this.events.once(y, ({ error: e, session: t }) => {
                  this.client.events.off("proposal_expire", v),
                    e ? m(e) : t && b(t);
                }),
                await this.sendRequest({
                  topic: l,
                  method: "wc_sessionPropose",
                  params: g,
                  throwOnFailedPublish: !0,
                  clientRpcId: g.id,
                }),
                await this.setProposal(g.id, g),
                { uri: h, approval: w }
              );
            }),
            cA(this, "pair", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                return await this.client.core.pairing.pair(e);
              } catch (e) {
                throw (this.client.logger.error("pair() failed"), e);
              }
            }),
            cA(this, "approve", async (e) => {
              var t, r, i;
              let s = this.client.core.eventClient.createEvent({
                properties: {
                  topic: null == (t = e?.id) ? void 0 : t.toString(),
                  trace: [nB.session_approve_started],
                },
              });
              try {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
              } catch (e) {
                throw (s.setError(n$.no_internet_connection), e);
              }
              try {
                await this.isValidProposalId(e?.id);
              } catch (t) {
                throw (
                  (this.client.logger.error(
                    `approve() -> proposal.get(${e?.id}) failed`
                  ),
                  s.setError(n$.proposal_not_found),
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
                  s.setError(n$.session_approve_namespace_validation_failure),
                  e)
                );
              }
              let {
                  id: n,
                  relayProtocol: o,
                  namespaces: a,
                  sessionProperties: c,
                  scopedProperties: l,
                  sessionConfig: h,
                } = e,
                u = this.client.proposal.get(n);
              this.client.core.eventClient.deleteEvent({ eventId: s.eventId });
              let {
                  pairingTopic: d,
                  proposer: p,
                  requiredNamespaces: f,
                  optionalNamespaces: g,
                } = u,
                y =
                  null == (r = this.client.core.eventClient)
                    ? void 0
                    : r.getEvent({ topic: d });
              y ||
                (y =
                  null == (i = this.client.core.eventClient)
                    ? void 0
                    : i.createEvent({
                        type: nB.session_approve_started,
                        properties: {
                          topic: d,
                          trace: [
                            nB.session_approve_started,
                            nB.session_namespaces_validation_success,
                          ],
                        },
                      }));
              let m = await this.client.core.crypto.generateKeyPair(),
                b = p.publicKey,
                w = await this.client.core.crypto.generateSharedKey(m, b),
                v = cS(
                  cS(
                    cS(
                      {
                        relay: { protocol: o ?? "irn" },
                        namespaces: a,
                        controller: {
                          publicKey: m,
                          metadata: this.client.metadata,
                        },
                        expiry: eB(cd),
                      },
                      c && { sessionProperties: c }
                    ),
                    l && { scopedProperties: l }
                  ),
                  h && { sessionConfig: h }
                ),
                E = nP.relay;
              y.addTrace(nB.subscribing_session_topic);
              try {
                await this.client.core.relayer.subscribe(w, {
                  transportType: E,
                });
              } catch (e) {
                throw (y.setError(n$.subscribe_session_topic_failure), e);
              }
              y.addTrace(nB.subscribe_session_topic_success);
              let I = cO(cS({}, v), {
                topic: w,
                requiredNamespaces: f,
                optionalNamespaces: g,
                pairingTopic: d,
                acknowledged: !1,
                self: v.controller,
                peer: { publicKey: p.publicKey, metadata: p.metadata },
                controller: m,
                transportType: nP.relay,
              });
              await this.client.session.set(w, I), y.addTrace(nB.store_session);
              try {
                y.addTrace(nB.publishing_session_settle),
                  await this.sendRequest({
                    topic: w,
                    method: "wc_sessionSettle",
                    params: v,
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (y?.setError(n$.session_settle_publish_failure), e);
                  }),
                  y.addTrace(nB.session_settle_publish_success),
                  y.addTrace(nB.publishing_session_approve),
                  await this.sendResult({
                    id: n,
                    topic: d,
                    result: {
                      relay: { protocol: o ?? "irn" },
                      responderPublicKey: m,
                    },
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (y?.setError(n$.session_approve_publish_failure), e);
                  }),
                  y.addTrace(nB.session_approve_publish_success);
              } catch (e) {
                throw (
                  (this.client.logger.error(e),
                  this.client.session.delete(w, sc("USER_DISCONNECTED")),
                  await this.client.core.relayer.unsubscribe(w),
                  e)
                );
              }
              return (
                this.client.core.eventClient.deleteEvent({
                  eventId: y.eventId,
                }),
                await this.client.core.pairing.updateMetadata({
                  topic: d,
                  metadata: p.metadata,
                }),
                await this.client.proposal.delete(n, sc("USER_DISCONNECTED")),
                await this.client.core.pairing.activate({ topic: d }),
                await this.setExpiry(w, eB(cd)),
                {
                  topic: w,
                  acknowledged: () =>
                    Promise.resolve(this.client.session.get(w)),
                }
              );
            }),
            cA(this, "reject", async (e) => {
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
              let { id: r, reason: i } = e;
              try {
                t = this.client.proposal.get(r).pairingTopic;
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `reject() -> proposal.get(${r}) failed`
                  ),
                  e)
                );
              }
              t &&
                (await this.sendError({
                  id: r,
                  topic: t,
                  error: i,
                  rpcOpts: cp.wc_sessionPropose.reject,
                }),
                await this.client.proposal.delete(r, sc("USER_DISCONNECTED")));
            }),
            cA(this, "update", async (e) => {
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
              let { topic: t, namespaces: r } = e,
                { done: i, resolve: s, reject: n } = eU(),
                o = (0, nu.payloadId)(),
                a = (0, nu.getBigIntRpcId)().toString(),
                c = this.client.session.get(t).namespaces;
              return (
                this.events.once(eM("session_update", o), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                await this.client.session.update(t, { namespaces: r }),
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionUpdate",
                  params: { namespaces: r },
                  throwOnFailedPublish: !0,
                  clientRpcId: o,
                  relayRpcId: a,
                }).catch((e) => {
                  this.client.logger.error(e),
                    this.client.session.update(t, { namespaces: c }),
                    n(e);
                }),
                { acknowledged: i }
              );
            }),
            cA(this, "extend", async (e) => {
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
                r = (0, nu.payloadId)(),
                { done: i, resolve: s, reject: n } = eU();
              return (
                this.events.once(eM("session_extend", r), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                await this.setExpiry(t, eB(cd)),
                this.sendRequest({
                  topic: t,
                  method: "wc_sessionExtend",
                  params: {},
                  clientRpcId: r,
                  throwOnFailedPublish: !0,
                }).catch((e) => {
                  n(e);
                }),
                { acknowledged: i }
              );
            }),
            cA(this, "request", async (e) => {
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
                  request: r,
                  topic: i,
                  expiry: s = cp.wc_sessionRequest.req.ttl,
                } = e,
                n = this.client.session.get(i);
              n?.transportType === nP.relay &&
                (await this.confirmOnlineStateOrThrow());
              let o = (0, nu.payloadId)(),
                a = (0, nu.getBigIntRpcId)().toString(),
                {
                  done: c,
                  resolve: l,
                  reject: h,
                } = eU(s, "Request expired. Please try again.");
              this.events.once(
                eM("session_request", o),
                ({ error: e, result: t }) => {
                  e ? h(e) : l(t);
                }
              );
              let u = "wc_sessionRequest",
                d = this.getAppLinkIfEnabled(n.peer.metadata, n.transportType);
              if (d)
                return (
                  await this.sendRequest({
                    clientRpcId: o,
                    relayRpcId: a,
                    topic: i,
                    method: u,
                    params: {
                      request: cO(cS({}, r), { expiryTimestamp: eB(s) }),
                      chainId: t,
                    },
                    expiry: s,
                    throwOnFailedPublish: !0,
                    appLink: d,
                  }).catch((e) => h(e)),
                  this.client.events.emit("session_request_sent", {
                    topic: i,
                    request: r,
                    chainId: t,
                    id: o,
                  }),
                  await c()
                );
              let p = {
                  request: cO(cS({}, r), { expiryTimestamp: eB(s) }),
                  chainId: t,
                },
                f = this.shouldSetTVF(u, p);
              return await Promise.all([
                new Promise(async (e) => {
                  await this.sendRequest(
                    cS(
                      {
                        clientRpcId: o,
                        relayRpcId: a,
                        topic: i,
                        method: u,
                        params: p,
                        expiry: s,
                        throwOnFailedPublish: !0,
                      },
                      f && { tvf: this.getTVFParams(o, p) }
                    )
                  ).catch((e) => h(e)),
                    this.client.events.emit("session_request_sent", {
                      topic: i,
                      request: r,
                      chainId: t,
                      id: o,
                    }),
                    e();
                }),
                new Promise(async (e) => {
                  var t;
                  if (!(null != (t = n.sessionConfig) && t.disableDeepLink)) {
                    let e = await eH(this.client.core.storage, ch);
                    await eF({ id: o, topic: i, wcDeepLink: e });
                  }
                  e();
                }),
                c(),
              ]).then((e) => e[2]);
            }),
            cA(this, "respond", async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              let { topic: t, response: r } = e,
                { id: i } = r,
                s = this.client.session.get(t);
              s.transportType === nP.relay &&
                (await this.confirmOnlineStateOrThrow());
              let n = this.getAppLinkIfEnabled(
                s.peer.metadata,
                s.transportType
              );
              (0, nu.isJsonRpcResult)(r)
                ? await this.sendResult({
                    id: i,
                    topic: t,
                    result: r.result,
                    throwOnFailedPublish: !0,
                    appLink: n,
                  })
                : (0, nu.isJsonRpcError)(r) &&
                  (await this.sendError({
                    id: i,
                    topic: t,
                    error: r.error,
                    appLink: n,
                  })),
                this.cleanupAfterResponse(e);
            }),
            cA(this, "ping", async (e) => {
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
                let e = (0, nu.payloadId)(),
                  r = (0, nu.getBigIntRpcId)().toString(),
                  { done: i, resolve: s, reject: n } = eU();
                this.events.once(eM("session_ping", e), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                  await Promise.all([
                    this.sendRequest({
                      topic: t,
                      method: "wc_sessionPing",
                      params: {},
                      throwOnFailedPublish: !0,
                      clientRpcId: e,
                      relayRpcId: r,
                    }),
                    i(),
                  ]);
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (this.client.logger.warn(
                    "ping() on pairing topic is deprecated and will be removed in the next major release."
                  ),
                  await this.client.core.pairing.ping({ topic: t }));
            }),
            cA(this, "emit", async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidEmit(e);
              let { topic: t, event: r, chainId: i } = e,
                s = (0, nu.getBigIntRpcId)().toString(),
                n = (0, nu.payloadId)();
              await this.sendRequest({
                topic: t,
                method: "wc_sessionEvent",
                params: { event: r, chainId: i },
                throwOnFailedPublish: !0,
                relayRpcId: s,
                clientRpcId: n,
              });
            }),
            cA(this, "disconnect", async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidDisconnect(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t))
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionDelete",
                  params: sc("USER_DISCONNECTED"),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: t, emitEvent: !1 });
              else if (this.client.core.pairing.pairings.keys.includes(t))
                await this.client.core.pairing.disconnect({ topic: t });
              else {
                let { message: e } = sa(
                  "MISMATCHED_TOPIC",
                  `Session or pairing topic not found: ${t}`
                );
                throw Error(e);
              }
            }),
            cA(
              this,
              "find",
              (e) => (
                this.isInitialized(),
                this.client.session.getAll().filter((t) =>
                  (function (e, t) {
                    let { requiredNamespaces: r } = t,
                      i = Object.keys(e.namespaces),
                      s = Object.keys(r),
                      n = !0;
                    return (
                      !!eT(s, i) &&
                      (i.forEach((t) => {
                        let {
                            accounts: i,
                            methods: s,
                            events: o,
                          } = e.namespaces[t],
                          a = se(i),
                          c = r[t];
                        (eT(ef(t, c), a) &&
                          eT(c.methods, s) &&
                          eT(c.events, o)) ||
                          (n = !1);
                      }),
                      n)
                    );
                  })(t, e)
                )
              )
            ),
            cA(this, "getPendingSessionRequests", () =>
              this.client.pendingRequest.getAll()
            ),
            cA(this, "authenticate", async (e, t) => {
              var r, i, s;
              let n;
              this.isInitialized(), this.isValidAuthenticate(e);
              let o =
                  t &&
                  this.client.core.linkModeSupportedApps.includes(t) &&
                  (null == (r = this.client.metadata.redirect)
                    ? void 0
                    : r.linkMode),
                a = o ? nP.link_mode : nP.relay;
              a === nP.relay && (await this.confirmOnlineStateOrThrow());
              let {
                  chains: c,
                  statement: l = "",
                  uri: h,
                  domain: u,
                  nonce: d,
                  type: p,
                  exp: f,
                  nbf: g,
                  methods: y = [],
                  expiry: m,
                } = e,
                b = [...(e.resources || [])],
                { topic: w, uri: v } = await this.client.core.pairing.create({
                  methods: ["wc_sessionAuthenticate"],
                  transportType: a,
                });
              this.client.logger.info({
                message: "Generated new pairing",
                pairing: { topic: w, uri: v },
              });
              let E = await this.client.core.crypto.generateKeyPair(),
                I = i$(E);
              if (
                (await Promise.all([
                  this.client.auth.authKeys.set(cw, {
                    responseTopic: I,
                    publicKey: E,
                  }),
                  this.client.auth.pairingTopics.set(I, {
                    topic: I,
                    pairingTopic: w,
                  }),
                ]),
                await this.client.core.relayer.subscribe(I, {
                  transportType: a,
                }),
                this.client.logger.info(
                  `sending request to new pairing topic: ${w}`
                ),
                y.length > 0)
              ) {
                let { namespace: e } = eu(c[0]),
                  t = t$(
                    (function (e, t, r, i = {}) {
                      return (
                        r?.sort((e, t) => e.localeCompare(t)),
                        {
                          att: {
                            [e]: (function (e, t, r = {}) {
                              return Object.assign(
                                {},
                                ...(t = t?.sort((e, t) =>
                                  e.localeCompare(t)
                                )).map((t) => ({ [`${e}/${t}`]: [r] }))
                              );
                            })(t, r, i),
                          },
                        }
                      );
                    })(e, "request", y)
                  );
                tH(b) &&
                  ((i = t),
                  (s = b.pop()),
                  (t = t$(
                    (function (e, t) {
                      tB(e), tB(t);
                      let r = Object.keys(e.att)
                          .concat(Object.keys(t.att))
                          .sort((e, t) => e.localeCompare(t)),
                        i = { att: {} };
                      return (
                        r.forEach((r) => {
                          var s, n;
                          Object.keys(
                            (null == (s = e.att) ? void 0 : s[r]) || {}
                          )
                            .concat(
                              Object.keys(
                                (null == (n = t.att) ? void 0 : n[r]) || {}
                              )
                            )
                            .sort((e, t) => e.localeCompare(t))
                            .forEach((s) => {
                              var n, o;
                              i.att[r] = tT(tR({}, i.att[r]), {
                                [s]:
                                  (null == (n = e.att[r]) ? void 0 : n[s]) ||
                                  (null == (o = t.att[r]) ? void 0 : o[s]),
                              });
                            });
                        }),
                        i
                      );
                    })(tM(i), tM(s))
                  ))),
                  b.push(t);
              }
              let _ =
                  m && m > cp.wc_sessionAuthenticate.req.ttl
                    ? m
                    : cp.wc_sessionAuthenticate.req.ttl,
                x = {
                  authPayload: {
                    type: p ?? "caip122",
                    chains: c,
                    statement: l,
                    aud: h,
                    domain: u,
                    version: "1",
                    nonce: d,
                    iat: new Date().toISOString(),
                    exp: f,
                    nbf: g,
                    resources: b,
                  },
                  requester: { publicKey: E, metadata: this.client.metadata },
                  expiryTimestamp: eB(_),
                },
                D = {
                  requiredNamespaces: {},
                  optionalNamespaces: {
                    eip155: {
                      chains: c,
                      methods: [...new Set(["personal_sign", ...y])],
                      events: ["chainChanged", "accountsChanged"],
                    },
                  },
                  relays: [{ protocol: "irn" }],
                  pairingTopic: w,
                  proposer: { publicKey: E, metadata: this.client.metadata },
                  expiryTimestamp: eB(cp.wc_sessionPropose.req.ttl),
                  id: (0, nu.payloadId)(),
                },
                { done: P, resolve: S, reject: O } = eU(_, "Request expired"),
                A = (0, nu.payloadId)(),
                C = eM("session_connect", D.id),
                R = eM("session_request", A),
                T = async ({ error: e, session: t }) => {
                  this.events.off(R, N), e ? O(e) : t && S({ session: t });
                },
                N = async (e) => {
                  var r, i, s;
                  let n;
                  if (
                    (await this.deletePendingAuthRequest(A, {
                      message: "fulfilled",
                      code: 0,
                    }),
                    e.error)
                  ) {
                    let t = sc(
                      "WC_METHOD_UNSUPPORTED",
                      "wc_sessionAuthenticate"
                    );
                    return e.error.code === t.code
                      ? void 0
                      : (this.events.off(C, T), O(e.error.message));
                  }
                  await this.deleteProposal(D.id), this.events.off(C, T);
                  let { cacaos: o, responder: c } = e.result,
                    l = [],
                    h = [];
                  for (let e of o) {
                    (await tk({
                      cacao: e,
                      projectId: this.client.core.projectId,
                    })) ||
                      (this.client.logger.error(
                        e,
                        "Signature verification failed"
                      ),
                      O(
                        sc(
                          "SESSION_SETTLEMENT_FAILED",
                          "Signature verification failed"
                        )
                      ));
                    let { p: t } = e,
                      r = tH(t.resources),
                      i = [tU(t.iss)],
                      s = tL(t.iss);
                    if (r) {
                      let e = tz(r),
                        t = tF(r);
                      l.push(...e), i.push(...t);
                    }
                    for (let e of i) h.push(`${e}:${s}`);
                  }
                  let u = await this.client.core.crypto.generateSharedKey(
                    E,
                    c.publicKey
                  );
                  l.length > 0 &&
                    ((n = {
                      topic: u,
                      acknowledged: !0,
                      self: { publicKey: E, metadata: this.client.metadata },
                      peer: c,
                      controller: c.publicKey,
                      expiry: eB(cd),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: "irn" },
                      pairingTopic: w,
                      namespaces: ss([...new Set(l)], [...new Set(h)]),
                      transportType: a,
                    }),
                    await this.client.core.relayer.subscribe(u, {
                      transportType: a,
                    }),
                    await this.client.session.set(u, n),
                    w &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: w,
                        metadata: c.metadata,
                      })),
                    (n = this.client.session.get(u))),
                    null != (r = this.client.metadata.redirect) &&
                      r.linkMode &&
                      null != (i = c.metadata.redirect) &&
                      i.linkMode &&
                      null != (s = c.metadata.redirect) &&
                      s.universal &&
                      t &&
                      (this.client.core.addLinkModeSupportedApp(
                        c.metadata.redirect.universal
                      ),
                      this.client.session.update(u, {
                        transportType: nP.link_mode,
                      })),
                    S({ auths: o, session: n });
                };
              this.events.once(C, T), this.events.once(R, N);
              try {
                if (o) {
                  let e = (0, nu.formatJsonRpcRequest)(
                    "wc_sessionAuthenticate",
                    x,
                    A
                  );
                  this.client.core.history.set(w, e);
                  let r = await this.client.core.crypto.encode("", e, {
                    type: 2,
                    encoding: ik,
                  });
                  n = i0(t, w, r);
                } else
                  await Promise.all([
                    this.sendRequest({
                      topic: w,
                      method: "wc_sessionAuthenticate",
                      params: x,
                      expiry: e.expiry,
                      throwOnFailedPublish: !0,
                      clientRpcId: A,
                    }),
                    this.sendRequest({
                      topic: w,
                      method: "wc_sessionPropose",
                      params: D,
                      expiry: cp.wc_sessionPropose.req.ttl,
                      throwOnFailedPublish: !0,
                      clientRpcId: D.id,
                    }),
                  ]);
              } catch (e) {
                throw (this.events.off(C, T), this.events.off(R, N), e);
              }
              return (
                await this.setProposal(D.id, D),
                await this.setAuthRequest(A, {
                  request: cO(cS({}, x), { verifyContext: {} }),
                  pairingTopic: w,
                  transportType: a,
                }),
                { uri: n ?? v, response: P }
              );
            }),
            cA(this, "approveSessionAuthenticate", async (e) => {
              let t,
                { id: r, auths: i } = e,
                s = this.client.core.eventClient.createEvent({
                  properties: {
                    topic: r.toString(),
                    trace: [nM.authenticated_session_approve_started],
                  },
                });
              try {
                this.isInitialized();
              } catch (e) {
                throw (s.setError(nz.no_internet_connection), e);
              }
              let n = this.getPendingAuthRequest(r);
              if (!n)
                throw (
                  (s.setError(
                    nz.authenticated_session_pending_request_not_found
                  ),
                  Error(`Could not find pending auth request with id ${r}`))
                );
              let o = n.transportType || nP.relay;
              o === nP.relay && (await this.confirmOnlineStateOrThrow());
              let a = n.requester.publicKey,
                c = await this.client.core.crypto.generateKeyPair(),
                l = i$(a),
                h = { type: 1, receiverPublicKey: a, senderPublicKey: c },
                u = [],
                d = [];
              for (let e of i) {
                if (
                  !(await tk({
                    cacao: e,
                    projectId: this.client.core.projectId,
                  }))
                ) {
                  s.setError(nz.invalid_cacao);
                  let e = sc(
                    "SESSION_SETTLEMENT_FAILED",
                    "Signature verification failed"
                  );
                  throw (
                    (await this.sendError({
                      id: r,
                      topic: l,
                      error: e,
                      encodeOpts: h,
                    }),
                    Error(e.message))
                  );
                }
                s.addTrace(nM.cacaos_verified);
                let { p: t } = e,
                  i = tH(t.resources),
                  n = [tU(t.iss)],
                  o = tL(t.iss);
                if (i) {
                  let e = tz(i),
                    t = tF(i);
                  u.push(...e), n.push(...t);
                }
                for (let e of n) d.push(`${e}:${o}`);
              }
              let p = await this.client.core.crypto.generateSharedKey(c, a);
              if (
                (s.addTrace(nM.create_authenticated_session_topic),
                u?.length > 0)
              ) {
                (t = {
                  topic: p,
                  acknowledged: !0,
                  self: { publicKey: c, metadata: this.client.metadata },
                  peer: { publicKey: a, metadata: n.requester.metadata },
                  controller: a,
                  expiry: eB(cd),
                  authentication: i,
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: "irn" },
                  pairingTopic: n.pairingTopic,
                  namespaces: ss([...new Set(u)], [...new Set(d)]),
                  transportType: o,
                }),
                  s.addTrace(nM.subscribing_authenticated_session_topic);
                try {
                  await this.client.core.relayer.subscribe(p, {
                    transportType: o,
                  });
                } catch (e) {
                  throw (
                    (s.setError(
                      nz.subscribe_authenticated_session_topic_failure
                    ),
                    e)
                  );
                }
                s.addTrace(nM.subscribe_authenticated_session_topic_success),
                  await this.client.session.set(p, t),
                  s.addTrace(nM.store_authenticated_session),
                  await this.client.core.pairing.updateMetadata({
                    topic: n.pairingTopic,
                    metadata: n.requester.metadata,
                  });
              }
              s.addTrace(nM.publishing_authenticated_session_approve);
              try {
                await this.sendResult({
                  topic: l,
                  id: r,
                  result: {
                    cacaos: i,
                    responder: { publicKey: c, metadata: this.client.metadata },
                  },
                  encodeOpts: h,
                  throwOnFailedPublish: !0,
                  appLink: this.getAppLinkIfEnabled(n.requester.metadata, o),
                });
              } catch (e) {
                throw (
                  (s.setError(nz.authenticated_session_approve_publish_failure),
                  e)
                );
              }
              return (
                await this.client.auth.requests.delete(r, {
                  message: "fulfilled",
                  code: 0,
                }),
                await this.client.core.pairing.activate({
                  topic: n.pairingTopic,
                }),
                this.client.core.eventClient.deleteEvent({
                  eventId: s.eventId,
                }),
                { session: t }
              );
            }),
            cA(this, "rejectSessionAuthenticate", async (e) => {
              this.isInitialized();
              let { id: t, reason: r } = e,
                i = this.getPendingAuthRequest(t);
              if (!i)
                throw Error(`Could not find pending auth request with id ${t}`);
              i.transportType === nP.relay &&
                (await this.confirmOnlineStateOrThrow());
              let s = i.requester.publicKey,
                n = await this.client.core.crypto.generateKeyPair(),
                o = i$(s);
              await this.sendError({
                id: t,
                topic: o,
                error: r,
                encodeOpts: {
                  type: 1,
                  receiverPublicKey: s,
                  senderPublicKey: n,
                },
                rpcOpts: cp.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(
                  i.requester.metadata,
                  i.transportType
                ),
              }),
                await this.client.auth.requests.delete(t, {
                  message: "rejected",
                  code: 0,
                }),
                await this.client.proposal.delete(t, sc("USER_DISCONNECTED"));
            }),
            cA(this, "formatAuthMessage", (e) => {
              this.isInitialized();
              let { request: t, iss: r } = e;
              return tq(t, r);
            }),
            cA(this, "processRelayMessageCache", () => {
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
            cA(this, "cleanupDuplicatePairings", async (e) => {
              if (e.pairingTopic)
                try {
                  let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                    r = this.client.core.pairing.pairings
                      .getAll()
                      .filter((r) => {
                        var i, s;
                        return (
                          (null == (i = r.peerMetadata) ? void 0 : i.url) &&
                          (null == (s = r.peerMetadata) ? void 0 : s.url) ===
                            e.peer.metadata.url &&
                          r.topic &&
                          r.topic !== t.topic
                        );
                      });
                  if (0 === r.length) return;
                  this.client.logger.info(
                    `Cleaning up ${r.length} duplicate pairing(s)`
                  ),
                    await Promise.all(
                      r.map((e) =>
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
            cA(this, "deleteSession", async (e) => {
              var t;
              let {
                  topic: r,
                  expirerHasDeleted: i = !1,
                  emitEvent: s = !0,
                  id: n = 0,
                } = e,
                { self: o } = this.client.session.get(r);
              await this.client.core.relayer.unsubscribe(r),
                await this.client.session.delete(r, sc("USER_DISCONNECTED")),
                this.addToRecentlyDeleted(r, "session"),
                this.client.core.crypto.keychain.has(o.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(o.publicKey)),
                this.client.core.crypto.keychain.has(r) &&
                  (await this.client.core.crypto.deleteSymKey(r)),
                i || this.client.core.expirer.del(r),
                this.client.core.storage
                  .removeItem(ch)
                  .catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === r &&
                    this.deletePendingSessionRequest(
                      e.id,
                      sc("USER_DISCONNECTED")
                    );
                }),
                r ===
                  (null == (t = this.sessionRequestQueue.queue[0])
                    ? void 0
                    : t.topic) && (this.sessionRequestQueue.state = cg.idle),
                s &&
                  this.client.events.emit("session_delete", {
                    id: n,
                    topic: r,
                  });
            }),
            cA(this, "deleteProposal", async (e, t) => {
              if (t)
                try {
                  let t = this.client.proposal.get(e),
                    r = this.client.core.eventClient.getEvent({
                      topic: t.pairingTopic,
                    });
                  r?.setError(n$.proposal_expired);
                } catch {}
              await Promise.all([
                this.client.proposal.delete(e, sc("USER_DISCONNECTED")),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, "proposal");
            }),
            cA(this, "deletePendingSessionRequest", async (e, t, r = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, "request"),
                (this.sessionRequestQueue.queue =
                  this.sessionRequestQueue.queue.filter((t) => t.id !== e)),
                r &&
                  ((this.sessionRequestQueue.state = cg.idle),
                  this.client.events.emit("session_request_expire", { id: e }));
            }),
            cA(this, "deletePendingAuthRequest", async (e, t, r = !1) => {
              await Promise.all([
                this.client.auth.requests.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            cA(this, "setExpiry", async (e, t) => {
              this.client.session.keys.includes(e) &&
                (this.client.core.expirer.set(e, t),
                await this.client.session.update(e, { expiry: t }));
            }),
            cA(this, "setProposal", async (e, t) => {
              this.client.core.expirer.set(e, eB(cp.wc_sessionPropose.req.ttl)),
                await this.client.proposal.set(e, t);
            }),
            cA(this, "setAuthRequest", async (e, t) => {
              let {
                request: r,
                pairingTopic: i,
                transportType: s = nP.relay,
              } = t;
              this.client.core.expirer.set(e, r.expiryTimestamp),
                await this.client.auth.requests.set(e, {
                  authPayload: r.authPayload,
                  requester: r.requester,
                  expiryTimestamp: r.expiryTimestamp,
                  id: e,
                  pairingTopic: i,
                  verifyContext: r.verifyContext,
                  transportType: s,
                });
            }),
            cA(this, "setPendingSessionRequest", async (e) => {
              let { id: t, topic: r, params: i, verifyContext: s } = e,
                n =
                  i.request.expiryTimestamp || eB(cp.wc_sessionRequest.req.ttl);
              this.client.core.expirer.set(t, n),
                await this.client.pendingRequest.set(t, {
                  id: t,
                  topic: r,
                  params: i,
                  verifyContext: s,
                });
            }),
            cA(this, "sendRequest", async (e) => {
              let t,
                i,
                {
                  topic: s,
                  method: n,
                  params: o,
                  expiry: a,
                  relayRpcId: c,
                  clientRpcId: l,
                  throwOnFailedPublish: h,
                  appLink: u,
                  tvf: d,
                } = e,
                p = (0, nu.formatJsonRpcRequest)(n, o, l),
                f = !!u;
              try {
                let e = f ? ik : iL;
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
              if (cm.includes(n)) {
                let e = iM(JSON.stringify(p)),
                  r = iM(t);
                i = await this.client.core.verify.register({
                  id: r,
                  decryptedId: e,
                });
              }
              let g = cp[n].req;
              if (
                ((g.attestation = i),
                a && (g.ttl = a),
                c && (g.id = c),
                this.client.core.history.set(s, p),
                f)
              ) {
                let e = i0(u, s, t);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                let e = cp[n].req;
                a && (e.ttl = a),
                  c && (e.id = c),
                  (e.tvf = cO(cS({}, d), { correlationId: p.id })),
                  h
                    ? ((e.internal = cO(cS({}, e.internal), {
                        throwOnFailedPublish: !0,
                      })),
                      await this.client.core.relayer.publish(s, t, e))
                    : this.client.core.relayer
                        .publish(s, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              return p.id;
            }),
            cA(this, "sendResult", async (e) => {
              let t,
                i,
                s,
                {
                  id: n,
                  topic: o,
                  result: a,
                  throwOnFailedPublish: c,
                  encodeOpts: l,
                  appLink: h,
                } = e,
                u = (0, nu.formatJsonRpcResult)(n, a),
                d = h && "u" > typeof (null == r.g ? void 0 : r.g.Linking);
              try {
                let e = d ? ik : iL;
                t = await this.client.core.crypto.encode(
                  o,
                  u,
                  cO(cS({}, l || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendResult() -> core.crypto.encode() for topic ${o} failed`
                  ),
                  e)
                );
              }
              try {
                let e = (i = await this.client.core.history.get(o, n)).request;
                try {
                  this.shouldSetTVF(e.method, e.params) &&
                    (s = this.getTVFParams(n, e.params, a));
                } catch (e) {
                  this.client.logger.warn(
                    "sendResult() -> getTVFParams() failed",
                    e
                  );
                }
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `sendResult() -> history.get(${o}, ${n}) failed`
                  ),
                  e)
                );
              }
              if (d) {
                let e = i0(h, o, t);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                let e = cp[i.request.method].res;
                (e.tvf = cO(cS({}, s), { correlationId: n })),
                  c
                    ? ((e.internal = cO(cS({}, e.internal), {
                        throwOnFailedPublish: !0,
                      })),
                      await this.client.core.relayer.publish(o, t, e))
                    : this.client.core.relayer
                        .publish(o, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              await this.client.core.history.resolve(u);
            }),
            cA(this, "sendError", async (e) => {
              let t,
                i,
                {
                  id: s,
                  topic: n,
                  error: o,
                  encodeOpts: a,
                  rpcOpts: c,
                  appLink: l,
                } = e,
                h = (0, nu.formatJsonRpcError)(s, o),
                u = l && "u" > typeof (null == r.g ? void 0 : r.g.Linking);
              try {
                let e = u ? ik : iL;
                t = await this.client.core.crypto.encode(
                  n,
                  h,
                  cO(cS({}, a || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendError() -> core.crypto.encode() for topic ${n} failed`
                  ),
                  e)
                );
              }
              try {
                i = await this.client.core.history.get(n, s);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `sendError() -> history.get(${n}, ${s}) failed`
                  ),
                  e)
                );
              }
              if (u) {
                let e = i0(l, n, t);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                let e = i.request.method,
                  r = c || cp[e].res;
                this.client.core.relayer.publish(n, t, r);
              }
              await this.client.core.history.resolve(h);
            }),
            cA(this, "cleanup", async () => {
              let e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                let r = !1;
                e$(t.expiry) && (r = !0),
                  this.client.core.crypto.keychain.has(t.topic) || (r = !0),
                  r && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  e$(e.expiryTimestamp) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession({ topic: e })),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            cA(this, "onProviderMessageEvent", async (e) => {
              !this.initialized || this.relayMessageCache.length > 0
                ? this.relayMessageCache.push(e)
                : await this.onRelayMessage(e);
            }),
            cA(this, "onRelayEventRequest", async (e) => {
              this.requestQueue.queue.push(e),
                await this.processRequestsQueue();
            }),
            cA(this, "processRequestsQueue", async () => {
              if (this.requestQueue.state === cg.active)
                return void this.client.logger.info(
                  "Request queue already active, skipping..."
                );
              for (
                this.client.logger.info(
                  `Request queue starting with ${this.requestQueue.queue.length} requests`
                );
                this.requestQueue.queue.length > 0;

              ) {
                this.requestQueue.state = cg.active;
                let e = this.requestQueue.queue.shift();
                if (e)
                  try {
                    await this.processRequest(e);
                  } catch (e) {
                    this.client.logger.warn(e);
                  }
              }
              this.requestQueue.state = cg.idle;
            }),
            cA(this, "processRequest", async (e) => {
              let {
                  topic: t,
                  payload: r,
                  attestation: i,
                  transportType: s,
                  encryptedId: n,
                } = e,
                o = r.method;
              if (
                !this.shouldIgnorePairingRequest({ topic: t, requestMethod: o })
              )
                switch (o) {
                  case "wc_sessionPropose":
                    return await this.onSessionProposeRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: n,
                    });
                  case "wc_sessionSettle":
                    return await this.onSessionSettleRequest(t, r);
                  case "wc_sessionUpdate":
                    return await this.onSessionUpdateRequest(t, r);
                  case "wc_sessionExtend":
                    return await this.onSessionExtendRequest(t, r);
                  case "wc_sessionPing":
                    return await this.onSessionPingRequest(t, r);
                  case "wc_sessionDelete":
                    return await this.onSessionDeleteRequest(t, r);
                  case "wc_sessionRequest":
                    return await this.onSessionRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: n,
                      transportType: s,
                    });
                  case "wc_sessionEvent":
                    return await this.onSessionEventRequest(t, r);
                  case "wc_sessionAuthenticate":
                    return await this.onSessionAuthenticateRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: n,
                      transportType: s,
                    });
                  default:
                    return this.client.logger.info(
                      `Unsupported request method ${o}`
                    );
                }
            }),
            cA(this, "onRelayEventResponse", async (e) => {
              let { topic: t, payload: r, transportType: i } = e,
                s = (await this.client.core.history.get(t, r.id)).request
                  .method;
              switch (s) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(t, r, i);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(t, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(t, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(t, r);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(t, r);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(t, r);
                case "wc_sessionAuthenticate":
                  return this.onSessionAuthenticateResponse(t, r);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${s}`
                  );
              }
            }),
            cA(this, "onRelayEventUnknownPayload", (e) => {
              let { topic: t } = e,
                { message: r } = sa(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw Error(r);
            }),
            cA(this, "shouldIgnorePairingRequest", (e) => {
              let { topic: t, requestMethod: r } = e,
                i = this.expectedPairingMethodMap.get(t);
              return (
                !(!i || i.includes(r)) &&
                !!(
                  i.includes("wc_sessionAuthenticate") &&
                  this.client.events.listenerCount("session_authenticate") > 0
                )
              );
            }),
            cA(this, "onSessionProposeRequest", async (e) => {
              let { topic: t, payload: r, attestation: i, encryptedId: s } = e,
                { params: n, id: o } = r;
              try {
                let e = this.client.core.eventClient.getEvent({ topic: t });
                0 === this.client.events.listenerCount("session_proposal") &&
                  (console.warn("No listener for session_proposal event"),
                  e?.setError(nq.proposal_listener_not_found)),
                  this.isValidConnect(cS({}, r.params));
                let a = n.expiryTimestamp || eB(cp.wc_sessionPropose.req.ttl),
                  c = cS({ id: o, pairingTopic: t, expiryTimestamp: a }, n);
                await this.setProposal(o, c);
                let l = await this.getVerifyContext({
                  attestationId: i,
                  hash: iM(JSON.stringify(r)),
                  encryptedId: s,
                  metadata: c.proposer.metadata,
                });
                e?.addTrace(nk.emit_session_proposal),
                  this.client.events.emit("session_proposal", {
                    id: o,
                    params: c,
                    verifyContext: l,
                  });
              } catch (e) {
                await this.sendError({
                  id: o,
                  topic: t,
                  error: e,
                  rpcOpts: cp.wc_sessionPropose.autoReject,
                }),
                  this.client.logger.error(e);
              }
            }),
            cA(this, "onSessionProposeResponse", async (e, t, r) => {
              let { id: i } = t;
              if ((0, nu.isJsonRpcResult)(t)) {
                let { result: s } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: s,
                });
                let n = this.client.proposal.get(i);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: n,
                });
                let o = n.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: o,
                });
                let a = s.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: a,
                });
                let c = await this.client.core.crypto.generateSharedKey(o, a);
                this.pendingSessions.set(i, {
                  sessionTopic: c,
                  pairingTopic: e,
                  proposalId: i,
                  publicKey: o,
                });
                let l = await this.client.core.relayer.subscribe(c, {
                  transportType: r,
                });
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: l,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else if ((0, nu.isJsonRpcError)(t)) {
                await this.client.proposal.delete(i, sc("USER_DISCONNECTED"));
                let e = eM("session_connect", i);
                if (0 === this.events.listenerCount(e))
                  throw Error(`emitting ${e} without any listeners, 954`);
                this.events.emit(e, { error: t.error });
              }
            }),
            cA(this, "onSessionSettleRequest", async (e, t) => {
              let { id: r, params: i } = t;
              try {
                this.isValidSessionSettleRequest(i);
                let {
                    relay: r,
                    controller: s,
                    expiry: n,
                    namespaces: o,
                    sessionProperties: a,
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
                let u = this.client.proposal.get(h.proposalId),
                  d = cO(
                    cS(
                      cS(
                        cS(
                          {
                            topic: e,
                            relay: r,
                            expiry: n,
                            namespaces: o,
                            acknowledged: !0,
                            pairingTopic: h.pairingTopic,
                            requiredNamespaces: u.requiredNamespaces,
                            optionalNamespaces: u.optionalNamespaces,
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
                          a && { sessionProperties: a }
                        ),
                        c && { scopedProperties: c }
                      ),
                      l && { sessionConfig: l }
                    ),
                    { transportType: nP.relay }
                  );
                await this.client.session.set(d.topic, d),
                  await this.setExpiry(d.topic, d.expiry),
                  await this.client.core.pairing.updateMetadata({
                    topic: h.pairingTopic,
                    metadata: d.peer.metadata,
                  }),
                  this.client.events.emit("session_connect", { session: d }),
                  this.events.emit(eM("session_connect", h.proposalId), {
                    session: d,
                  }),
                  this.pendingSessions.delete(h.proposalId),
                  this.deleteProposal(h.proposalId, !1),
                  this.cleanupDuplicatePairings(d),
                  await this.sendResult({
                    id: t.id,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            cA(this, "onSessionSettleResponse", async (e, t) => {
              let { id: r } = t;
              (0, nu.isJsonRpcResult)(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit(eM("session_approve", r), {}))
                : (0, nu.isJsonRpcError)(t) &&
                  (await this.client.session.delete(e, sc("USER_DISCONNECTED")),
                  this.events.emit(eM("session_approve", r), {
                    error: t.error,
                  }));
            }),
            cA(this, "onSessionUpdateRequest", async (e, t) => {
              let { params: r, id: i } = t;
              try {
                let t = `${e}_session_update`,
                  s = sP.get(t);
                if (s && this.isRequestOutOfSync(s, i)) {
                  this.client.logger.warn(
                    `Discarding out of sync request - ${i}`
                  ),
                    this.sendError({
                      id: i,
                      topic: e,
                      error: sc("INVALID_UPDATE_REQUEST"),
                    });
                  return;
                }
                this.isValidUpdate(cS({ topic: e }, r));
                try {
                  sP.set(t, i),
                    await this.client.session.update(e, {
                      namespaces: r.namespaces,
                    }),
                    await this.sendResult({
                      id: i,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    });
                } catch (e) {
                  throw (sP.delete(t), e);
                }
                this.client.events.emit("session_update", {
                  id: i,
                  topic: e,
                  params: r,
                });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            cA(
              this,
              "isRequestOutOfSync",
              (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)
            ),
            cA(this, "onSessionUpdateResponse", (e, t) => {
              let { id: r } = t,
                i = eM("session_update", r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              (0, nu.isJsonRpcResult)(t)
                ? this.events.emit(eM("session_update", r), {})
                : (0, nu.isJsonRpcError)(t) &&
                  this.events.emit(eM("session_update", r), { error: t.error });
            }),
            cA(this, "onSessionExtendRequest", async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, eB(cd)),
                  await this.sendResult({
                    id: r,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_extend", {
                    id: r,
                    topic: e,
                  });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            cA(this, "onSessionExtendResponse", (e, t) => {
              let { id: r } = t,
                i = eM("session_extend", r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              (0, nu.isJsonRpcResult)(t)
                ? this.events.emit(eM("session_extend", r), {})
                : (0, nu.isJsonRpcError)(t) &&
                  this.events.emit(eM("session_extend", r), { error: t.error });
            }),
            cA(this, "onSessionPingRequest", async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({
                    id: r,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_ping", { id: r, topic: e });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            cA(this, "onSessionPingResponse", (e, t) => {
              let { id: r } = t,
                i = eM("session_ping", r);
              setTimeout(() => {
                if (0 === this.events.listenerCount(i))
                  throw Error(`emitting ${i} without any listeners 2176`);
                (0, nu.isJsonRpcResult)(t)
                  ? this.events.emit(eM("session_ping", r), {})
                  : (0, nu.isJsonRpcError)(t) &&
                    this.events.emit(eM("session_ping", r), { error: t.error });
              }, 500);
            }),
            cA(this, "onSessionDeleteRequest", async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(n_.publish, async () => {
                        t(await this.deleteSession({ topic: e, id: r }));
                      });
                    }),
                    this.sendResult({
                      id: r,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: e,
                      error: sc("USER_DISCONNECTED"),
                    }),
                  ]).catch((e) => this.client.logger.error(e));
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            cA(this, "onSessionRequest", async (e) => {
              var t, r, i;
              let {
                  topic: s,
                  payload: n,
                  attestation: o,
                  encryptedId: a,
                  transportType: c,
                } = e,
                { id: l, params: h } = n;
              try {
                await this.isValidRequest(cS({ topic: s }, h));
                let e = this.client.session.get(s),
                  n = await this.getVerifyContext({
                    attestationId: o,
                    hash: iM(
                      JSON.stringify(
                        (0, nu.formatJsonRpcRequest)("wc_sessionRequest", h, l)
                      )
                    ),
                    encryptedId: a,
                    metadata: e.peer.metadata,
                    transportType: c,
                  }),
                  u = { id: l, topic: s, params: h, verifyContext: n };
                await this.setPendingSessionRequest(u),
                  c === nP.link_mode &&
                    null != (t = e.peer.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      null == (r = e.peer.metadata.redirect)
                        ? void 0
                        : r.universal
                    ),
                  null != (i = this.client.signConfig) && i.disableRequestQueue
                    ? this.emitSessionRequest(u)
                    : (this.addSessionRequestToSessionRequestQueue(u),
                      this.processSessionRequestQueue());
              } catch (e) {
                await this.sendError({ id: l, topic: s, error: e }),
                  this.client.logger.error(e);
              }
            }),
            cA(this, "onSessionRequestResponse", (e, t) => {
              let { id: r } = t,
                i = eM("session_request", r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              (0, nu.isJsonRpcResult)(t)
                ? this.events.emit(eM("session_request", r), {
                    result: t.result,
                  })
                : (0, nu.isJsonRpcError)(t) &&
                  this.events.emit(eM("session_request", r), {
                    error: t.error,
                  });
            }),
            cA(this, "onSessionEventRequest", async (e, t) => {
              let { id: r, params: i } = t;
              try {
                let t = `${e}_session_event_${i.event.name}`,
                  s = sP.get(t);
                if (s && this.isRequestOutOfSync(s, r))
                  return void this.client.logger.info(
                    `Discarding out of sync request - ${r}`
                  );
                this.isValidEmit(cS({ topic: e }, i)),
                  this.client.events.emit("session_event", {
                    id: r,
                    topic: e,
                    params: i,
                  }),
                  sP.set(t, r);
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            cA(this, "onSessionAuthenticateResponse", (e, t) => {
              let { id: r } = t;
              this.client.logger.trace({
                type: "method",
                method: "onSessionAuthenticateResponse",
                topic: e,
                payload: t,
              }),
                (0, nu.isJsonRpcResult)(t)
                  ? this.events.emit(eM("session_request", r), {
                      result: t.result,
                    })
                  : (0, nu.isJsonRpcError)(t) &&
                    this.events.emit(eM("session_request", r), {
                      error: t.error,
                    });
            }),
            cA(this, "onSessionAuthenticateRequest", async (e) => {
              var t;
              let {
                topic: r,
                payload: i,
                attestation: s,
                encryptedId: n,
                transportType: o,
              } = e;
              try {
                let {
                    requester: e,
                    authPayload: a,
                    expiryTimestamp: c,
                  } = i.params,
                  l = await this.getVerifyContext({
                    attestationId: s,
                    hash: iM(JSON.stringify(i)),
                    encryptedId: n,
                    metadata: e.metadata,
                    transportType: o,
                  }),
                  h = {
                    requester: e,
                    pairingTopic: r,
                    id: i.id,
                    authPayload: a,
                    verifyContext: l,
                    expiryTimestamp: c,
                  };
                await this.setAuthRequest(i.id, {
                  request: h,
                  pairingTopic: r,
                  transportType: o,
                }),
                  o === nP.link_mode &&
                    null != (t = e.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      e.metadata.redirect.universal
                    ),
                  this.client.events.emit("session_authenticate", {
                    topic: r,
                    params: i.params,
                    id: i.id,
                    verifyContext: l,
                  });
              } catch (n) {
                this.client.logger.error(n);
                let e = i.params.requester.publicKey,
                  t = await this.client.core.crypto.generateKeyPair(),
                  s = this.getAppLinkIfEnabled(i.params.requester.metadata, o);
                await this.sendError({
                  id: i.id,
                  topic: r,
                  error: n,
                  encodeOpts: {
                    type: 1,
                    receiverPublicKey: e,
                    senderPublicKey: t,
                  },
                  rpcOpts: cp.wc_sessionAuthenticate.autoReject,
                  appLink: s,
                });
              }
            }),
            cA(this, "addSessionRequestToSessionRequestQueue", (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            cA(this, "cleanupAfterResponse", (e) => {
              this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = cg.idle),
                    this.processSessionRequestQueue();
                }, (0, o.toMiliseconds)(this.requestQueueDelay));
            }),
            cA(
              this,
              "cleanupPendingSentRequestsForTopic",
              ({ topic: e, error: t }) => {
                let r = this.client.core.history.pending;
                r.length > 0 &&
                  r
                    .filter(
                      (t) =>
                        t.topic === e &&
                        "wc_sessionRequest" === t.request.method
                    )
                    .forEach((e) => {
                      let r = eM("session_request", e.request.id);
                      if (0 === this.events.listenerCount(r))
                        throw Error(`emitting ${r} without any listeners`);
                      this.events.emit(eM("session_request", e.request.id), {
                        error: t,
                      });
                    });
              }
            ),
            cA(this, "processSessionRequestQueue", () => {
              if (this.sessionRequestQueue.state === cg.active)
                return void this.client.logger.info(
                  "session request queue is already active."
                );
              let e = this.sessionRequestQueue.queue[0];
              if (!e)
                return void this.client.logger.info(
                  "session request queue is empty."
                );
              try {
                (this.sessionRequestQueue.state = cg.active),
                  this.emitSessionRequest(e);
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            cA(this, "emitSessionRequest", (e) => {
              this.client.events.emit("session_request", e);
            }),
            cA(this, "onPairingCreated", (e) => {
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
                  payload: (0, nu.formatJsonRpcRequest)(
                    "wc_sessionPropose",
                    cO(cS({}, t), {
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
            cA(this, "isValidConnect", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(e)}`
                );
                throw Error(t);
              }
              let {
                pairingTopic: t,
                requiredNamespaces: r,
                optionalNamespaces: i,
                sessionProperties: s,
                scopedProperties: n,
                relays: o,
              } = e;
              if (
                (su(t) || (await this.isValidPairingTopic(t)),
                !(function (e, t) {
                  let r = !1;
                  return (
                    t && !e
                      ? (r = !0)
                      : e &&
                        sl(e) &&
                        e.length &&
                        e.forEach((e) => {
                          r = sb(e);
                        }),
                    r
                  );
                })(o, !0))
              ) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${o}`
                );
                throw Error(e);
              }
              if (!su(r) && 0 !== sh(r)) {
                let e =
                  "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
                ["fatal", "error", "silent"].includes(this.client.logger.level)
                  ? console.warn(e)
                  : this.client.logger.warn(e),
                  this.validateNamespaces(r, "requiredNamespaces");
              }
              if (
                (su(i) ||
                  0 === sh(i) ||
                  this.validateNamespaces(i, "optionalNamespaces"),
                su(s) || this.validateSessionProps(s, "sessionProperties"),
                !su(n))
              ) {
                this.validateSessionProps(n, "scopedProperties");
                let e = Object.keys(r || {}).concat(Object.keys(i || {}));
                if (!Object.keys(n).every((t) => e.includes(t)))
                  throw Error(
                    `Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(
                      n
                    )}, required/optional namespaces: ${JSON.stringify(e)}`
                  );
              }
            }),
            cA(this, "validateNamespaces", (e, t) => {
              let r = (function (e, t, r) {
                let i = null;
                if (e && sh(e)) {
                  let s,
                    n = sy(e, t);
                  n && (i = n);
                  let o =
                    ((s = null),
                    Object.entries(e).forEach(([e, i]) => {
                      var n, o;
                      let a;
                      if (s) return;
                      let c =
                        ((n = ef(e, i)),
                        (o = `${t} ${r}`),
                        (a = null),
                        sl(n) && n.length
                          ? n.forEach((e) => {
                              a ||
                                sf(e) ||
                                (a = sc(
                                  "UNSUPPORTED_CHAINS",
                                  `${o}, chain ${e} should be a string and conform to "namespace:chainId" format`
                                ));
                            })
                          : sf(e) ||
                            (a = sc(
                              "UNSUPPORTED_CHAINS",
                              `${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                            )),
                        a);
                      c && (s = c);
                    }),
                    s);
                  o && (i = o);
                } else
                  i = sa(
                    "MISSING_OR_INVALID",
                    `${t}, ${r} should be an object with data`
                  );
                return i;
              })(e, "connect()", t);
              if (r) throw Error(r.message);
            }),
            cA(this, "isValidApprove", async (e) => {
              if (!sw(e))
                throw Error(
                  sa("MISSING_OR_INVALID", `approve() params: ${e}`).message
                );
              let {
                id: t,
                namespaces: r,
                relayProtocol: i,
                sessionProperties: s,
                scopedProperties: n,
              } = e;
              this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
              let o = this.client.proposal.get(t),
                a = sm(r, "approve()");
              if (a) throw Error(a.message);
              let c = sE(o.requiredNamespaces, r, "approve()");
              if (c) throw Error(c.message);
              if (!sd(i, !0)) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${i}`
                );
                throw Error(e);
              }
              if (
                (su(s) || this.validateSessionProps(s, "sessionProperties"),
                !su(n))
              ) {
                this.validateSessionProps(n, "scopedProperties");
                let e = new Set(Object.keys(r));
                if (!Object.keys(n).every((t) => e.has(t)))
                  throw Error(
                    `Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(
                      n
                    )}, approved namespaces: ${Array.from(e).join(", ")}`
                  );
              }
            }),
            cA(this, "isValidReject", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `reject() params: ${e}`
                );
                throw Error(t);
              }
              let { id: t, reason: r } = e;
              if (
                (this.checkRecentlyDeleted(t),
                await this.isValidProposalId(t),
                !(function (e) {
                  return !(
                    !e ||
                    "object" != typeof e ||
                    !e.code ||
                    !sp(e.code, !1) ||
                    !e.message ||
                    !sd(e.message, !1)
                  );
                })(r))
              ) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            cA(this, "isValidSessionSettleRequest", (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${e}`
                );
                throw Error(t);
              }
              let { relay: t, controller: r, namespaces: i, expiry: s } = e;
              if (!sb(t)) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw Error(e);
              }
              let n = (function (e, t) {
                let r = null;
                return (
                  sd(e?.publicKey, !1) ||
                    (r = sa(
                      "MISSING_OR_INVALID",
                      `${t} controller public key should be a string`
                    )),
                  r
                );
              })(r, "onSessionSettleRequest()");
              if (n) throw Error(n.message);
              let o = sm(i, "onSessionSettleRequest()");
              if (o) throw Error(o.message);
              if (e$(s)) {
                let { message: e } = sa("EXPIRED", "onSessionSettleRequest()");
                throw Error(e);
              }
            }),
            cA(this, "isValidUpdate", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `update() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, namespaces: r } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let i = this.client.session.get(t),
                s = sm(r, "update()");
              if (s) throw Error(s.message);
              let n = sE(i.requiredNamespaces, r, "update()");
              if (n) throw Error(n.message);
            }),
            cA(this, "isValidExtend", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `extend() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
            }),
            cA(this, "isValidRequest", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `request() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, request: r, chainId: i, expiry: s } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let { namespaces: n } = this.client.session.get(t);
              if (!sv(n, i)) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${i}`
                );
                throw Error(e);
              }
              if (
                !(function (e) {
                  return !(su(e) || !sd(e.method, !1));
                })(r)
              ) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
              if (
                !(function (e, t, r) {
                  return (
                    !!sd(r, !1) &&
                    (function (e, t) {
                      let r = [];
                      return (
                        Object.values(e).forEach((e) => {
                          se(e.accounts).includes(t) && r.push(...e.methods);
                        }),
                        r
                      );
                    })(e, t).includes(r)
                  );
                })(n, i, r.method)
              ) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `request() method: ${r.method}`
                );
                throw Error(e);
              }
              if (
                s &&
                !(function (e, t) {
                  return sp(e, !1) && e <= t.max && e >= t.min;
                })(s, cf)
              ) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${s}. Expiry must be a number (in seconds) between ${cf.min} and ${cf.max}`
                );
                throw Error(e);
              }
            }),
            cA(this, "isValidRespond", async (e) => {
              var t;
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `respond() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: r, response: i } = e;
              try {
                await this.isValidSessionTopic(r);
              } catch (r) {
                throw (
                  (null != (t = e?.response) &&
                    t.id &&
                    this.cleanupAfterResponse(e),
                  r)
                );
              }
              if (
                !(function (e) {
                  return !(
                    su(e) ||
                    (su(e.result) && su(e.error)) ||
                    !sp(e.id, !1) ||
                    !sd(e.jsonrpc, !1)
                  );
                })(i)
              ) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            cA(this, "isValidPing", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            cA(this, "isValidEmit", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `emit() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, event: r, chainId: i } = e;
              await this.isValidSessionTopic(t);
              let { namespaces: s } = this.client.session.get(t);
              if (!sv(s, i)) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${i}`
                );
                throw Error(e);
              }
              if (
                !(function (e) {
                  return !(su(e) || !sd(e.name, !1));
                })(r) ||
                !(function (e, t, r) {
                  return (
                    !!sd(r, !1) &&
                    (function (e, t) {
                      let r = [];
                      return (
                        Object.values(e).forEach((e) => {
                          se(e.accounts).includes(t) && r.push(...e.events);
                        }),
                        r
                      );
                    })(e, t).includes(r)
                  );
                })(s, i, r.name)
              ) {
                let { message: e } = sa(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            cA(this, "isValidDisconnect", async (e) => {
              if (!sw(e)) {
                let { message: t } = sa(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            cA(this, "isValidAuthenticate", (e) => {
              let { chains: t, uri: r, domain: i, nonce: s } = e;
              if (!Array.isArray(t) || 0 === t.length)
                throw Error("chains is required and must be a non-empty array");
              if (!sd(r, !1)) throw Error("uri is required parameter");
              if (!sd(i, !1)) throw Error("domain is required parameter");
              if (!sd(s, !1)) throw Error("nonce is required parameter");
              if ([...new Set(t.map((e) => eu(e).namespace))].length > 1)
                throw Error(
                  "Multi-namespace requests are not supported. Please request single namespace only."
                );
              let { namespace: n } = eu(t[0]);
              if ("eip155" !== n)
                throw Error(
                  "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
                );
            }),
            cA(this, "getVerifyContext", async (e) => {
              let {
                  attestationId: t,
                  hash: r,
                  encryptedId: i,
                  metadata: s,
                  transportType: n,
                } = e,
                o = {
                  verified: {
                    verifyUrl: s.verifyUrl || nj,
                    validation: "UNKNOWN",
                    origin: s.url || "",
                  },
                };
              try {
                if (n === nP.link_mode) {
                  let e = this.getAppLinkIfEnabled(s, n);
                  return (
                    (o.verified.validation =
                      e && new URL(e).origin === new URL(s.url).origin
                        ? "VALID"
                        : "INVALID"),
                    o
                  );
                }
                let e = await this.client.core.verify.resolve({
                  attestationId: t,
                  hash: r,
                  encryptedId: i,
                  verifyUrl: s.verifyUrl,
                });
                e &&
                  ((o.verified.origin = e.origin),
                  (o.verified.isScam = e.isScam),
                  (o.verified.validation =
                    e.origin === new URL(s.url).origin ? "VALID" : "INVALID"));
              } catch (e) {
                this.client.logger.warn(e);
              }
              return (
                this.client.logger.debug(
                  `Verify context: ${JSON.stringify(o)}`
                ),
                o
              );
            }),
            cA(this, "validateSessionProps", (e, t) => {
              Object.values(e).forEach((r, i) => {
                if (null == r) {
                  let { message: s } = sa(
                    "MISSING_OR_INVALID",
                    `${t} must contain an existing value for each key. Received: ${r} for key ${
                      Object.keys(e)[i]
                    }`
                  );
                  throw Error(s);
                }
              });
            }),
            cA(this, "getPendingAuthRequest", (e) => {
              let t = this.client.auth.requests.get(e);
              return "object" == typeof t ? t : void 0;
            }),
            cA(this, "addToRecentlyDeleted", (e, t) => {
              if (
                (this.recentlyDeletedMap.set(e, t),
                this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
              ) {
                let e = 0,
                  t = this.recentlyDeletedLimit / 2;
                for (let r of this.recentlyDeletedMap.keys()) {
                  if (e++ >= t) break;
                  this.recentlyDeletedMap.delete(r);
                }
              }
            }),
            cA(this, "checkRecentlyDeleted", (e) => {
              let t = this.recentlyDeletedMap.get(e);
              if (t) {
                let { message: r } = sa(
                  "MISSING_OR_INVALID",
                  `Record was recently deleted - ${t}: ${e}`
                );
                throw Error(r);
              }
            }),
            cA(this, "isLinkModeEnabled", (e, t) => {
              var i, s, n, o, a, c, l, h, u;
              return (
                !!e &&
                t === nP.link_mode &&
                (null ==
                (s = null == (i = this.client.metadata) ? void 0 : i.redirect)
                  ? void 0
                  : s.linkMode) === !0 &&
                (null ==
                (o = null == (n = this.client.metadata) ? void 0 : n.redirect)
                  ? void 0
                  : o.universal) !== void 0 &&
                (null ==
                (c = null == (a = this.client.metadata) ? void 0 : a.redirect)
                  ? void 0
                  : c.universal) !== "" &&
                (null == (l = e?.redirect) ? void 0 : l.universal) !== void 0 &&
                (null == (h = e?.redirect) ? void 0 : h.universal) !== "" &&
                (null == (u = e?.redirect) ? void 0 : u.linkMode) === !0 &&
                this.client.core.linkModeSupportedApps.includes(
                  e.redirect.universal
                ) &&
                "u" > typeof (null == r.g ? void 0 : r.g.Linking)
              );
            }),
            cA(this, "getAppLinkIfEnabled", (e, t) => {
              var r;
              return this.isLinkModeEnabled(e, t)
                ? null == (r = e?.redirect)
                  ? void 0
                  : r.universal
                : void 0;
            }),
            cA(this, "handleLinkModeMessage", ({ url: e }) => {
              if (!e || !e.includes("wc_ev") || !e.includes("topic")) return;
              let t = eV(e, "topic") || "",
                r = decodeURIComponent(eV(e, "wc_ev") || ""),
                i = this.client.session.keys.includes(t);
              i &&
                this.client.session.update(t, { transportType: nP.link_mode }),
                this.client.core.dispatchEnvelope({
                  topic: t,
                  message: r,
                  sessionExists: i,
                });
            }),
            cA(this, "registerLinkModeListeners", async () => {
              var e;
              if (
                eW() ||
                (eP() &&
                  null != (e = this.client.metadata.redirect) &&
                  e.linkMode)
              ) {
                let e = null == r.g ? void 0 : r.g.Linking;
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
            cA(this, "shouldSetTVF", (e, t) => {
              if (!t || "wc_sessionRequest" !== e) return !1;
              let { request: r } = t;
              return Object.keys(cy).includes(r.method);
            }),
            cA(this, "getTVFParams", (e, t, r) => {
              var i, s;
              try {
                let n = t.request.method,
                  o = this.extractTxHashesFromResult(n, r);
                return cO(
                  cS(
                    { correlationId: e, rpcMethods: [n], chainId: t.chainId },
                    this.isValidContractData(t.request.params) && {
                      contractAddresses: [
                        null ==
                        (s = null == (i = t.request.params) ? void 0 : i[0])
                          ? void 0
                          : s.to,
                      ],
                    }
                  ),
                  { txHashes: o }
                );
              } catch (e) {
                this.client.logger.warn("Error getting TVF params", e);
              }
              return {};
            }),
            cA(this, "isValidContractData", (e) => {
              var t;
              if (!e) return !1;
              try {
                let r = e?.data || (null == (t = e?.[0]) ? void 0 : t.data);
                if (!r.startsWith("0x")) return !1;
                let i = r.slice(2);
                return !!/^[0-9a-fA-F]*$/.test(i) && i.length % 2 == 0;
              } catch {}
              return !1;
            }),
            cA(this, "extractTxHashesFromResult", (e, t) => {
              try {
                let r = cy[e];
                if ("string" == typeof t) return [t];
                let i = t[r.key];
                if (sl(i))
                  return "solana_signAllTransactions" === e
                    ? i.map((e) =>
                        (function (e) {
                          let t = atob(e),
                            r = new Uint8Array(t.length);
                          for (let e = 0; e < t.length; e++)
                            r[e] = t.charCodeAt(e);
                          let i = r[0];
                          if (0 === i) throw Error("No signatures found");
                          if (r.length < 1 + 64 * i)
                            throw Error(
                              "Transaction data too short for claimed signature count"
                            );
                          if (r.length < 100)
                            throw Error("Transaction too short");
                          let s = eh.from(e, "base64").slice(1, 65);
                          return en.A.encode(s);
                        })(e)
                      )
                    : i;
                if ("string" == typeof i) return [i];
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
            for (let [e, r] of Object.entries(t))
              for (let t of r)
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
            let { message: e } = sa("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async confirmOnlineStateOrThrow() {
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(n_.message, (e) => {
            this.onProviderMessageEvent(e);
          });
        }
        async onRelayMessage(e) {
          let { topic: t, message: r, attestation: i, transportType: s } = e,
            { publicKey: n } = this.client.auth.authKeys.keys.includes(cw)
              ? this.client.auth.authKeys.get(cw)
              : { responseTopic: void 0, publicKey: void 0 };
          try {
            let e = await this.client.core.crypto.decode(t, r, {
              receiverPublicKey: n,
              encoding: s === nP.link_mode ? ik : iL,
            });
            (0, nu.isJsonRpcRequest)(e)
              ? (this.client.core.history.set(t, e),
                await this.onRelayEventRequest({
                  topic: t,
                  payload: e,
                  attestation: i,
                  transportType: s,
                  encryptedId: iM(r),
                }))
              : (0, nu.isJsonRpcResponse)(e)
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
              await this.client.core.relayer.messages.ack(t, r);
          } catch (e) {
            this.client.logger.error(e);
          }
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(nN.expired, async (e) => {
            let { topic: t, id: r } = eq(e.target);
            return r && this.client.pendingRequest.keys.includes(r)
              ? await this.deletePendingSessionRequest(r, sa("EXPIRED"), !0)
              : r && this.client.auth.requests.keys.includes(r)
              ? await this.deletePendingAuthRequest(r, sa("EXPIRED"), !0)
              : void (t
                  ? this.client.session.keys.includes(t) &&
                    (await this.deleteSession({
                      topic: t,
                      expirerHasDeleted: !0,
                    }),
                    this.client.events.emit("session_expire", { topic: t }))
                  : r &&
                    (await this.deleteProposal(r, !0),
                    this.client.events.emit("proposal_expire", { id: r })));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(nR.create, (e) =>
            this.onPairingCreated(e)
          ),
            this.client.core.pairing.events.on(nR.delete, (e) => {
              this.addToRecentlyDeleted(e.topic, "pairing");
            });
        }
        isValidPairingTopic(e) {
          if (!sd(e, !1)) {
            let { message: t } = sa(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let { message: t } = sa(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (e$(this.client.core.pairing.pairings.get(e).expiry)) {
            let { message: t } = sa("EXPIRED", `pairing topic: ${e}`);
            throw Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!sd(e, !1)) {
            let { message: t } = sa(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (
            (this.checkRecentlyDeleted(e),
            !this.client.session.keys.includes(e))
          ) {
            let { message: t } = sa(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (e$(this.client.session.get(e).expiry)) {
            await this.deleteSession({ topic: e });
            let { message: t } = sa("EXPIRED", `session topic: ${e}`);
            throw Error(t);
          }
          if (!this.client.core.crypto.keychain.has(e)) {
            let { message: t } = sa(
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
          else if (sd(e, !1)) {
            let { message: t } = sa(
              "NO_MATCHING_KEY",
              `session or pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          } else {
            let { message: t } = sa(
              "MISSING_OR_INVALID",
              `session or pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
        }
        async isValidProposalId(e) {
          if ("number" != typeof e) {
            let { message: t } = sa(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            let { message: t } = sa(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (e$(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            let { message: t } = sa("EXPIRED", `proposal id: ${e}`);
            throw Error(t);
          }
        }
      }
      class cR extends aj {
        constructor(e, t) {
          super(e, t, "proposal", cc), (this.core = e), (this.logger = t);
        }
      }
      class cT extends aj {
        constructor(e, t) {
          super(e, t, "session", cc), (this.core = e), (this.logger = t);
        }
      }
      class cN extends aj {
        constructor(e, t) {
          super(e, t, "request", cc, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class cj extends aj {
        constructor(e, t) {
          super(e, t, "authKeys", cb, () => cw),
            (this.core = e),
            (this.logger = t);
        }
      }
      class cU extends aj {
        constructor(e, t) {
          super(e, t, "pairingTopics", cb), (this.core = e), (this.logger = t);
        }
      }
      class cL extends aj {
        constructor(e, t) {
          super(e, t, "requests", cb, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      var ck = Object.defineProperty,
        cq = (e, t, r) =>
          t in e
            ? ck(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        cB = (e, t, r) => cq(e, "symbol" != typeof t ? t + "" : t, r);
      class c$ {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            cB(this, "authKeys"),
            cB(this, "pairingTopics"),
            cB(this, "requests"),
            (this.authKeys = new cj(this.core, this.logger)),
            (this.pairingTopics = new cU(this.core, this.logger)),
            (this.requests = new cL(this.core, this.logger));
        }
        async init() {
          await this.authKeys.init(),
            await this.pairingTopics.init(),
            await this.requests.init();
        }
      }
      var cM = Object.defineProperty,
        cz = (e, t, r) =>
          t in e
            ? cM(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        cF = (e, t, r) => cz(e, "symbol" != typeof t ? t + "" : t, r);
      class cH extends nc {
        constructor(e) {
          super(e),
            cF(this, "protocol", "wc"),
            cF(this, "version", 2),
            cF(this, "name", cl.name),
            cF(this, "metadata"),
            cF(this, "core"),
            cF(this, "logger"),
            cF(this, "events", new i.EventEmitter()),
            cF(this, "engine"),
            cF(this, "session"),
            cF(this, "proposal"),
            cF(this, "pendingRequest"),
            cF(this, "auth"),
            cF(this, "signConfig"),
            cF(this, "on", (e, t) => this.events.on(e, t)),
            cF(this, "once", (e, t) => this.events.once(e, t)),
            cF(this, "off", (e, t) => this.events.off(e, t)),
            cF(this, "removeListener", (e, t) =>
              this.events.removeListener(e, t)
            ),
            cF(this, "removeAllListeners", (e) =>
              this.events.removeAllListeners(e)
            ),
            cF(this, "connect", async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cF(this, "pair", async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cF(this, "approve", async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cF(this, "reject", async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cF(this, "update", async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cF(this, "extend", async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cF(this, "request", async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cF(this, "respond", async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cF(this, "ping", async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cF(this, "emit", async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cF(this, "disconnect", async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cF(this, "find", (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cF(this, "getPendingSessionRequests", () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cF(this, "authenticate", async (e, t) => {
              try {
                return await this.engine.authenticate(e, t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cF(this, "formatAuthMessage", (e) => {
              try {
                return this.engine.formatAuthMessage(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cF(this, "approveSessionAuthenticate", async (e) => {
              try {
                return await this.engine.approveSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            cF(this, "rejectSessionAuthenticate", async (e) => {
              try {
                return await this.engine.rejectSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || cl.name),
            (this.metadata = (function (e) {
              var t, r;
              let i = eC();
              try {
                return (
                  null != e &&
                    e.url &&
                    i.url &&
                    new URL(e.url).host !== new URL(i.url).host &&
                    (console.warn(
                      `The configured WalletConnect 'metadata.url':${e.url} differs from the actual page url:${i.url}. This is probably unintended and can lead to issues.`
                    ),
                    (e.url = i.url)),
                  null != (t = e?.icons) &&
                    t.length &&
                    e.icons.length > 0 &&
                    (e.icons = e.icons.filter((e) => "" !== e)),
                  e_(eI(eI({}, i), e), {
                    url: e?.url || i.url,
                    name: e?.name || i.name,
                    description: e?.description || i.description,
                    icons:
                      null != (r = e?.icons) && r.length && e.icons.length > 0
                        ? e.icons
                        : i.icons,
                  })
                );
              } catch (t) {
                return console.warn("Error populating app metadata", t), e || i;
              }
            })(e?.metadata)),
            (this.signConfig = e?.signConfig);
          let t =
            "u" > typeof e?.logger && "string" != typeof e?.logger
              ? e.logger
              : (0, sG.h6)((0, sG.iP)({ level: e?.logger || cl.logger }));
          (this.core = e?.core || new co(e)),
            (this.logger = (0, sG.U5)(t, this.name)),
            (this.session = new cT(this.core, this.logger)),
            (this.proposal = new cR(this.core, this.logger)),
            (this.pendingRequest = new cN(this.core, this.logger)),
            (this.engine = new cC(this)),
            (this.auth = new c$(this.core, this.logger));
        }
        static async init(e) {
          let t = new cH(e);
          return await t.initialize(), t;
        }
        get context() {
          return (0, sG.oI)(this.logger);
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
              }, (0, o.toMiliseconds)(o.ONE_SECOND));
          } catch (e) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      var cV = r(24630),
        cK = r(44134).Buffer;
      let cW = "error",
        cJ = "wc@2:universal_provider:",
        cG = "https://rpc.walletconnect.org/v1/",
        cY = "generic",
        cZ = `${cG}bundler`,
        cQ = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
      function cX() {}
      function c0(e) {
        return null == e || ("object" != typeof e && "function" != typeof e);
      }
      function c1(e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView);
      }
      function c2(e) {
        return "object" == typeof e && null !== e;
      }
      function c8(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function c3(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : Object.prototype.toString.call(e);
      }
      let c5 = "[object String]",
        c6 = "[object Number]",
        c4 = "[object Boolean]",
        c9 = "[object Arguments]";
      function c7(e, t, r, i = new Map(), s) {
        let n = s?.(e, t, r, i);
        if (null != n) return n;
        if (c0(e)) return e;
        if (i.has(e)) return i.get(e);
        if (Array.isArray(e)) {
          let t = Array(e.length);
          i.set(e, t);
          for (let n = 0; n < e.length; n++) t[n] = c7(e[n], n, r, i, s);
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
          for (let [n, o] of (i.set(e, t), e)) t.set(n, c7(o, n, r, i, s));
          return t;
        }
        if (e instanceof Set) {
          let t = new Set();
          for (let n of (i.set(e, t), e)) t.add(c7(n, void 0, r, i, s));
          return t;
        }
        if ("u" > typeof cK && cK.isBuffer(e)) return e.subarray();
        if (c1(e)) {
          let t = new (Object.getPrototypeOf(e).constructor)(e.length);
          i.set(e, t);
          for (let n = 0; n < e.length; n++) t[n] = c7(e[n], n, r, i, s);
          return t;
        }
        if (
          e instanceof ArrayBuffer ||
          ("u" > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)
        )
          return e.slice(0);
        if (e instanceof DataView) {
          let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
          return i.set(e, t), le(t, e, r, i, s), t;
        }
        if ("u" > typeof File && e instanceof File) {
          let t = new File([e], e.name, { type: e.type });
          return i.set(e, t), le(t, e, r, i, s), t;
        }
        if (e instanceof Blob) {
          let t = new Blob([e], { type: e.type });
          return i.set(e, t), le(t, e, r, i, s), t;
        }
        if (e instanceof Error) {
          let t = new e.constructor();
          return (
            i.set(e, t),
            (t.message = e.message),
            (t.name = e.name),
            (t.stack = e.stack),
            (t.cause = e.cause),
            le(t, e, r, i, s),
            t
          );
        }
        if (
          "object" == typeof e &&
          (function (e) {
            switch (c3(e)) {
              case c9:
              case "[object Array]":
              case "[object ArrayBuffer]":
              case "[object DataView]":
              case c4:
              case "[object Date]":
              case "[object Float32Array]":
              case "[object Float64Array]":
              case "[object Int8Array]":
              case "[object Int16Array]":
              case "[object Int32Array]":
              case "[object Map]":
              case c6:
              case "[object Object]":
              case "[object RegExp]":
              case "[object Set]":
              case c5:
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
          return i.set(e, t), le(t, e, r, i, s), t;
        }
        return e;
      }
      function le(e, t, r = e, i, s) {
        let n = [...Object.keys(t), ...c8(t)];
        for (let o = 0; o < n.length; o++) {
          let a = n[o],
            c = Object.getOwnPropertyDescriptor(e, a);
          (null == c || c.writable) && (e[a] = c7(t[a], a, r, i, s));
        }
      }
      function lt(e) {
        var t;
        return (
          (t = (t, r, i, s) => {
            let n = void 0;
            if (null != n) return n;
            if ("object" == typeof e)
              switch (Object.prototype.toString.call(e)) {
                case c6:
                case c5:
                case c4: {
                  let t = new e.constructor(e?.valueOf());
                  return le(t, e), t;
                }
                case c9: {
                  let t = {};
                  return (
                    le(t, e),
                    (t.length = e.length),
                    (t[Symbol.iterator] = e[Symbol.iterator]),
                    t
                  );
                }
                default:
                  return;
              }
          }),
          c7(e, void 0, e, new Map(), t)
        );
      }
      function lr(e) {
        return (
          null !== e && "object" == typeof e && "[object Arguments]" === c3(e)
        );
      }
      var li = Object.defineProperty,
        ls = Object.defineProperties,
        ln = Object.getOwnPropertyDescriptors,
        lo = Object.getOwnPropertySymbols,
        la = Object.prototype.hasOwnProperty,
        lc = Object.prototype.propertyIsEnumerable,
        ll = (e, t, r) =>
          t in e
            ? li(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        lh = (e, t) => {
          for (var r in t || (t = {})) la.call(t, r) && ll(e, r, t[r]);
          if (lo) for (var r of lo(t)) lc.call(t, r) && ll(e, r, t[r]);
          return e;
        },
        lu = (e, t) => ls(e, ln(t));
      function ld(e, t, r) {
        var i;
        let s = eu(e);
        return (
          (null == (i = t.rpcMap) ? void 0 : i[s.reference]) ||
          `${cG}?chainId=${s.namespace}:${s.reference}&projectId=${r}`
        );
      }
      function lp(e) {
        return e.includes(":") ? e.split(":")[1] : e;
      }
      function lf(e) {
        return e.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
      }
      function lg(e = {}, t = {}) {
        return (function (e, ...t) {
          return (function (e, ...t) {
            let r = t.slice(0, -1),
              i = t[t.length - 1],
              s = e;
            for (let e = 0; e < r.length; e++)
              s = (function e(t, r, i, s) {
                if (
                  (c0(t) && (t = Object(t)), null == r || "object" != typeof r)
                )
                  return t;
                if (s.has(r))
                  return (function (e) {
                    if (c0(e)) return e;
                    if (
                      Array.isArray(e) ||
                      c1(e) ||
                      e instanceof ArrayBuffer ||
                      ("u" > typeof SharedArrayBuffer &&
                        e instanceof SharedArrayBuffer)
                    )
                      return e.slice(0);
                    let t = Object.getPrototypeOf(e),
                      r = t.constructor;
                    if (
                      e instanceof Date ||
                      e instanceof Map ||
                      e instanceof Set
                    )
                      return new r(e);
                    if (e instanceof RegExp) {
                      let t = new r(e);
                      return (t.lastIndex = e.lastIndex), t;
                    }
                    if (e instanceof DataView) return new r(e.buffer.slice(0));
                    if (e instanceof Error) {
                      let t = new r(e.message);
                      return (
                        (t.stack = e.stack),
                        (t.name = e.name),
                        (t.cause = e.cause),
                        t
                      );
                    }
                    return "u" > typeof File && e instanceof File
                      ? new r([e], e.name, {
                          type: e.type,
                          lastModified: e.lastModified,
                        })
                      : "object" == typeof e
                      ? Object.assign(Object.create(t), e)
                      : e;
                  })(s.get(r));
                if ((s.set(r, t), Array.isArray(r))) {
                  r = r.slice();
                  for (let e = 0; e < r.length; e++) r[e] = r[e] ?? void 0;
                }
                let n = [...Object.keys(r), ...c8(r)];
                for (let o = 0; o < n.length; o++) {
                  let a = n[o],
                    c = r[a],
                    l = t[a];
                  if (
                    (lr(c) && (c = { ...c }),
                    lr(l) && (l = { ...l }),
                    "u" > typeof cK && cK.isBuffer(c) && (c = lt(c)),
                    Array.isArray(c))
                  )
                    if ("object" == typeof l && null != l) {
                      let e = [],
                        t = Reflect.ownKeys(l);
                      for (let r = 0; r < t.length; r++) {
                        let i = t[r];
                        e[i] = l[i];
                      }
                      l = e;
                    } else l = [];
                  let h = i(l, c, a, t, r, s);
                  null != h
                    ? (t[a] = h)
                    : Array.isArray(c) || (c2(l) && c2(c))
                    ? (t[a] = e(l, c, i, s))
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
                    ? (t[a] = e({}, c, i, s))
                    : null == l && c1(c)
                    ? (t[a] = lt(c))
                    : (void 0 === l || void 0 !== c) && (t[a] = c);
                }
                return t;
              })(s, r[e], i, new Map());
            return s;
          })(e, ...t, cX);
        })(ly(e), ly(t));
      }
      function ly(e) {
        var t, r, i, s, n;
        let o = {};
        if (!sh(e)) return o;
        for (let [a, c] of Object.entries(e)) {
          let e = st(a) ? [a] : c.chains,
            l = c.methods || [],
            h = c.events || [],
            u = c.rpcMap || {},
            d = sr(a);
          (o[d] = lu(lh(lh({}, o[d]), c), {
            chains: ez(e, null == (t = o[d]) ? void 0 : t.chains),
            methods: ez(l, null == (r = o[d]) ? void 0 : r.methods),
            events: ez(h, null == (i = o[d]) ? void 0 : i.events),
          })),
            (sh(u) || sh((null == (s = o[d]) ? void 0 : s.rpcMap) || {})) &&
              (o[d].rpcMap = lh(
                lh({}, u),
                null == (n = o[d]) ? void 0 : n.rpcMap
              ));
        }
        return o;
      }
      function lm(e) {
        return e.includes(":") ? e.split(":")[2] : e;
      }
      function lb(e) {
        let t = {};
        for (let [r, i] of Object.entries(e)) {
          let e = i.methods || [],
            s = i.events || [],
            n = i.accounts || [],
            o = st(r) ? [r] : i.chains ? i.chains : lf(i.accounts);
          t[r] = { chains: o, methods: e, events: s, accounts: n };
        }
        return t;
      }
      function lw(e) {
        return "number" == typeof e
          ? e
          : e.includes("0x")
          ? parseInt(e, 16)
          : isNaN(Number((e = e.includes(":") ? e.split(":")[1] : e)))
          ? e
          : Number(e);
      }
      let lv = {},
        lE = (e) => lv[e],
        lI = (e, t) => {
          lv[e] = t;
        };
      var l_ = Object.defineProperty,
        lx = (e, t, r) =>
          t in e
            ? l_(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        lD = (e, t, r) => lx(e, "symbol" != typeof t ? t + "" : t, r);
      class lP {
        constructor(e) {
          lD(this, "name", "polkadot"),
            lD(this, "client"),
            lD(this, "httpProviders"),
            lD(this, "events"),
            lD(this, "namespace"),
            lD(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lE("events")),
            (this.client = lE("client")),
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
            this.events.emit(cQ.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
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
              var r;
              let i = lp(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
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
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || ld(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new nh.F(new cV.A(r, lE("disableProviderPing")));
        }
      }
      var lS = Object.defineProperty,
        lO = Object.defineProperties,
        lA = Object.getOwnPropertyDescriptors,
        lC = Object.getOwnPropertySymbols,
        lR = Object.prototype.hasOwnProperty,
        lT = Object.prototype.propertyIsEnumerable,
        lN = (e, t, r) =>
          t in e
            ? lS(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        lj = (e, t) => {
          for (var r in t || (t = {})) lR.call(t, r) && lN(e, r, t[r]);
          if (lC) for (var r of lC(t)) lT.call(t, r) && lN(e, r, t[r]);
          return e;
        },
        lU = (e, t) => lO(e, lA(t)),
        lL = (e, t, r) => lN(e, "symbol" != typeof t ? t + "" : t, r);
      class lk {
        constructor(e) {
          lL(this, "name", "eip155"),
            lL(this, "client"),
            lL(this, "chainId"),
            lL(this, "namespace"),
            lL(this, "httpProviders"),
            lL(this, "events"),
            (this.namespace = e.namespace),
            (this.events = lE("events")),
            (this.client = lE("client")),
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
            this.events.emit(cQ.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
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
          let r =
            t ||
            ld(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new nh.F(new cV.V(r, lE("disableProviderPing")));
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = parseInt(lp(t));
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
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
          var t, r;
          let i = e.request.params
              ? null == (t = e.request.params[0])
                ? void 0
                : t.chainId
              : "0x0",
            s = parseInt((i = i.startsWith("0x") ? i : `0x${i}`), 16);
          if (this.isChainApproved(s)) this.setDefaultChain(`${s}`);
          else if (
            this.namespace.methods.includes("wallet_switchEthereumChain")
          )
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: i }] },
              chainId: null == (r = this.namespace.chains) ? void 0 : r[0],
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
          var t, r, i, s, n;
          let o =
              null == (r = null == (t = e.request) ? void 0 : t.params)
                ? void 0
                : r[0],
            a =
              (null == (s = null == (i = e.request) ? void 0 : i.params)
                ? void 0
                : s[1]) || [],
            c = `${o}${a.join(",")}`;
          if (!o)
            throw Error(
              "Missing address parameter in `wallet_getCapabilities` request"
            );
          let l = this.client.session.get(e.topic),
            h =
              (null == (n = l?.sessionProperties) ? void 0 : n.capabilities) ||
              {};
          if (null != h && h[c]) return h?.[c];
          let u = await this.client.request(e);
          try {
            await this.client.session.update(e.topic, {
              sessionProperties: lU(lj({}, l.sessionProperties || {}), {
                capabilities: lU(lj({}, h || {}), { [c]: u }),
              }),
            });
          } catch (e) {
            console.warn("Failed to update session with capabilities", e);
          }
          return u;
        }
        async getCallStatus(e) {
          var t, r;
          let i = this.client.session.get(e.topic),
            s = null == (t = i.sessionProperties) ? void 0 : t.bundler_name;
          if (s) {
            let t = this.getBundlerUrl(e.chainId, s);
            try {
              return await this.getUserOperationReceipt(t, e);
            } catch (e) {
              console.warn("Failed to fetch call status from bundler", e, t);
            }
          }
          let n = null == (r = i.sessionProperties) ? void 0 : r.bundler_url;
          if (n)
            try {
              return await this.getUserOperationReceipt(n, e);
            } catch (e) {
              console.warn(
                "Failed to fetch call status from custom bundler",
                e,
                n
              );
            }
          if (this.namespace.methods.includes(e.request.method))
            return await this.client.request(e);
          throw Error("Fetching call status not approved by the wallet.");
        }
        async getUserOperationReceipt(e, t) {
          var r;
          let i = new URL(e),
            s = await fetch(i, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(
                (0, nu.formatJsonRpcRequest)("eth_getUserOperationReceipt", [
                  null == (r = t.request.params) ? void 0 : r[0],
                ])
              ),
            });
          if (!s.ok)
            throw Error(`Failed to fetch user operation receipt - ${s.status}`);
          return await s.json();
        }
        getBundlerUrl(e, t) {
          return `${cZ}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`;
        }
      }
      var lq = Object.defineProperty,
        lB = (e, t, r) =>
          t in e
            ? lq(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        l$ = (e, t, r) => lB(e, "symbol" != typeof t ? t + "" : t, r);
      class lM {
        constructor(e) {
          l$(this, "name", "solana"),
            l$(this, "client"),
            l$(this, "httpProviders"),
            l$(this, "events"),
            l$(this, "namespace"),
            l$(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lE("events")),
            (this.client = lE("client")),
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
            this.events.emit(cQ.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
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
              var r;
              let i = lp(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
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
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || ld(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new nh.F(new cV.A(r, lE("disableProviderPing")));
        }
      }
      var lz = Object.defineProperty,
        lF = (e, t, r) =>
          t in e
            ? lz(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        lH = (e, t, r) => lF(e, "symbol" != typeof t ? t + "" : t, r);
      class lV {
        constructor(e) {
          lH(this, "name", "cosmos"),
            lH(this, "client"),
            lH(this, "httpProviders"),
            lH(this, "events"),
            lH(this, "namespace"),
            lH(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lE("events")),
            (this.client = lE("client")),
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
              cQ.DEFAULT_CHAIN_CHANGED,
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
              var r;
              let i = lp(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
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
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || ld(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new nh.F(new cV.A(r, lE("disableProviderPing")));
        }
      }
      var lK = Object.defineProperty,
        lW = (e, t, r) =>
          t in e
            ? lK(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        lJ = (e, t, r) => lW(e, "symbol" != typeof t ? t + "" : t, r);
      class lG {
        constructor(e) {
          lJ(this, "name", "algorand"),
            lJ(this, "client"),
            lJ(this, "httpProviders"),
            lJ(this, "events"),
            lJ(this, "namespace"),
            lJ(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lE("events")),
            (this.client = lE("client")),
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
            let r =
              t ||
              ld(
                `${this.name}:${e}`,
                this.namespace,
                this.client.core.projectId
              );
            if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          (this.chainId = e),
            this.events.emit(
              cQ.DEFAULT_CHAIN_CHANGED,
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
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
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
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || ld(e, this.namespace, this.client.core.projectId);
          return typeof r > "u"
            ? void 0
            : new nh.F(new cV.A(r, lE("disableProviderPing")));
        }
      }
      var lY = Object.defineProperty,
        lZ = (e, t, r) =>
          t in e
            ? lY(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        lQ = (e, t, r) => lZ(e, "symbol" != typeof t ? t + "" : t, r);
      class lX {
        constructor(e) {
          lQ(this, "name", "cip34"),
            lQ(this, "client"),
            lQ(this, "httpProviders"),
            lQ(this, "events"),
            lQ(this, "namespace"),
            lQ(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lE("events")),
            (this.client = lE("client")),
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
              cQ.DEFAULT_CHAIN_CHANGED,
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
              let r = this.getCardanoRPCUrl(t),
                i = lp(t);
              e[i] = this.createHttpProvider(i, r);
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
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || this.getCardanoRPCUrl(e);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new nh.F(new cV.A(r, lE("disableProviderPing")));
        }
      }
      var l0 = Object.defineProperty,
        l1 = (e, t, r) =>
          t in e
            ? l0(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        l2 = (e, t, r) => l1(e, "symbol" != typeof t ? t + "" : t, r);
      class l8 {
        constructor(e) {
          l2(this, "name", "elrond"),
            l2(this, "client"),
            l2(this, "httpProviders"),
            l2(this, "events"),
            l2(this, "namespace"),
            l2(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lE("events")),
            (this.client = lE("client")),
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
            this.events.emit(cQ.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
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
              var r;
              let i = lp(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
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
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || ld(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new nh.F(new cV.A(r, lE("disableProviderPing")));
        }
      }
      var l3 = Object.defineProperty,
        l5 = (e, t, r) =>
          t in e
            ? l3(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        l6 = (e, t, r) => l5(e, "symbol" != typeof t ? t + "" : t, r);
      class l4 {
        constructor(e) {
          l6(this, "name", "multiversx"),
            l6(this, "client"),
            l6(this, "httpProviders"),
            l6(this, "events"),
            l6(this, "namespace"),
            l6(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lE("events")),
            (this.client = lE("client")),
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
            this.events.emit(cQ.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
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
              var r;
              let i = lp(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
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
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || ld(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new nh.F(new cV.A(r, lE("disableProviderPing")));
        }
      }
      var l9 = Object.defineProperty,
        l7 = (e, t, r) =>
          t in e
            ? l9(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        he = (e, t, r) => l7(e, "symbol" != typeof t ? t + "" : t, r);
      class ht {
        constructor(e) {
          he(this, "name", "near"),
            he(this, "client"),
            he(this, "httpProviders"),
            he(this, "events"),
            he(this, "namespace"),
            he(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lE("events")),
            (this.client = lE("client")),
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
            let r = t || ld(`${this.name}:${e}`, this.namespace);
            if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(
            cQ.DEFAULT_CHAIN_CHANGED,
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
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
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
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || ld(e, this.namespace);
          return typeof r > "u"
            ? void 0
            : new nh.F(new cV.A(r, lE("disableProviderPing")));
        }
      }
      var hr = Object.defineProperty,
        hi = (e, t, r) =>
          t in e
            ? hr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        hs = (e, t, r) => hi(e, "symbol" != typeof t ? t + "" : t, r);
      class hn {
        constructor(e) {
          hs(this, "name", "tezos"),
            hs(this, "client"),
            hs(this, "httpProviders"),
            hs(this, "events"),
            hs(this, "namespace"),
            hs(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lE("events")),
            (this.client = lE("client")),
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
            let r = t || ld(`${this.name}:${e}`, this.namespace);
            if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(
            cQ.DEFAULT_CHAIN_CHANGED,
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
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || ld(e, this.namespace);
          return typeof r > "u" ? void 0 : new nh.F(new cV.A(r));
        }
      }
      var ho = Object.defineProperty,
        ha = (e, t, r) =>
          t in e
            ? ho(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        hc = (e, t, r) => ha(e, "symbol" != typeof t ? t + "" : t, r);
      class hl {
        constructor(e) {
          hc(this, "name", cY),
            hc(this, "client"),
            hc(this, "httpProviders"),
            hc(this, "events"),
            hc(this, "namespace"),
            hc(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = lE("events")),
            (this.client = lE("client")),
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
            this.events.emit(cQ.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
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
          let r = {};
          return (
            null == (t = null == (e = this.namespace) ? void 0 : e.accounts) ||
              t.forEach((e) => {
                let t = eu(e);
                r[`${t.namespace}:${t.reference}`] = this.createHttpProvider(e);
              }),
            r
          );
        }
        getHttpProvider(e) {
          let t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || ld(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new nh.F(new cV.A(r, lE("disableProviderPing")));
        }
      }
      var hh = Object.defineProperty,
        hu = Object.defineProperties,
        hd = Object.getOwnPropertyDescriptors,
        hp = Object.getOwnPropertySymbols,
        hf = Object.prototype.hasOwnProperty,
        hg = Object.prototype.propertyIsEnumerable,
        hy = (e, t, r) =>
          t in e
            ? hh(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        hm = (e, t) => {
          for (var r in t || (t = {})) hf.call(t, r) && hy(e, r, t[r]);
          if (hp) for (var r of hp(t)) hg.call(t, r) && hy(e, r, t[r]);
          return e;
        },
        hb = (e, t) => hu(e, hd(t)),
        hw = (e, t, r) => hy(e, "symbol" != typeof t ? t + "" : t, r);
      class hv {
        constructor(e) {
          hw(this, "client"),
            hw(this, "namespaces"),
            hw(this, "optionalNamespaces"),
            hw(this, "sessionProperties"),
            hw(this, "scopedProperties"),
            hw(this, "events", new (s())()),
            hw(this, "rpcProviders", {}),
            hw(this, "session"),
            hw(this, "providerOpts"),
            hw(this, "logger"),
            hw(this, "uri"),
            hw(this, "disableProviderPing", !1),
            (this.providerOpts = e),
            (this.logger =
              "u" > typeof e?.logger && "string" != typeof e?.logger
                ? e.logger
                : (0, sG.h6)((0, sG.iP)({ level: e?.logger || cW }))),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          let t = new hv(e);
          return await t.initialize(), t;
        }
        async request(e, t, r) {
          let [i, s] = this.validateChain(t);
          if (!this.session)
            throw Error("Please call connect() before request()");
          return await this.getProvider(i).request({
            request: hm({}, e),
            chainId: `${i}:${s}`,
            topic: this.session.topic,
            expiry: r,
          });
        }
        sendAsync(e, t, r, i) {
          let s = new Date().getTime();
          this.request(e, r, i)
            .then((e) => t(null, (0, nu.formatJsonRpcResult)(s, e)))
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
            reason: sc("USER_DISCONNECTED"),
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
          let { uri: r, response: i } = await this.client.authenticate(e, t);
          r && ((this.uri = r), this.events.emit("display_uri", r));
          let s = await i();
          if (((this.session = s.session), this.session)) {
            let e = lb(this.session.namespaces);
            (this.namespaces = lg(this.namespaces, e)),
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
          let { uri: t, approval: r } = await this.client.connect({
            pairingTopic: e,
            requiredNamespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
            scopedProperties: this.scopedProperties,
          });
          t && ((this.uri = t), this.events.emit("display_uri", t));
          let i = await r();
          this.session = i;
          let s = lb(i.namespaces);
          return (
            (this.namespaces = lg(this.namespaces, s)),
            await this.persist("namespaces", this.namespaces),
            await this.persist("optionalNamespaces", this.optionalNamespaces),
            this.onConnect(),
            this.session
          );
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            let [r, i] = this.validateChain(e),
              s = this.getProvider(r);
            s.name === cY
              ? s.setDefaultChain(`${r}:${i}`, t)
              : s.setDefaultChain(i, t);
          } catch (e) {
            if (!/Please call connect/.test(e.message)) throw e;
          }
        }
        async cleanupPendingPairings(e = {}) {
          this.logger.info("Cleaning up inactive pairings...");
          let t = this.client.pairing.getAll();
          if (sl(t)) {
            for (let r of t)
              e.deletePairings
                ? this.client.core.expirer.set(r.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    r.topic
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
              (await cH.init({
                core: this.providerOpts.core,
                logger: this.providerOpts.logger || cW,
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
            } catch (r) {
              throw (
                (this.logger.error("Failed to get session", r),
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
            ...new Set(Object.keys(this.session.namespaces).map((e) => sr(e))),
          ];
          lI("client", this.client),
            lI("events", this.events),
            lI("disableProviderPing", this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              let t = (function (e, t) {
                  let r = Object.keys(t.namespaces).filter((t) =>
                    t.includes(e)
                  );
                  if (!r.length) return [];
                  let i = [];
                  return (
                    r.forEach((e) => {
                      let r = t.namespaces[e].accounts;
                      i.push(...r);
                    }),
                    i
                  );
                })(e, this.session),
                r = lf(t),
                i = hb(
                  hm({}, lg(this.namespaces, this.optionalNamespaces)[e]),
                  { accounts: t, chains: r }
                );
              switch (e) {
                case "eip155":
                  this.rpcProviders[e] = new lk({ namespace: i });
                  break;
                case "algorand":
                  this.rpcProviders[e] = new lG({ namespace: i });
                  break;
                case "solana":
                  this.rpcProviders[e] = new lM({ namespace: i });
                  break;
                case "cosmos":
                  this.rpcProviders[e] = new lV({ namespace: i });
                  break;
                case "polkadot":
                  this.rpcProviders[e] = new lP({ namespace: i });
                  break;
                case "cip34":
                  this.rpcProviders[e] = new lX({ namespace: i });
                  break;
                case "elrond":
                  this.rpcProviders[e] = new l8({ namespace: i });
                  break;
                case "multiversx":
                  this.rpcProviders[e] = new l4({ namespace: i });
                  break;
                case "near":
                  this.rpcProviders[e] = new ht({ namespace: i });
                  break;
                case "tezos":
                  this.rpcProviders[e] = new hn({ namespace: i });
                  break;
                default:
                  this.rpcProviders[cY]
                    ? this.rpcProviders[cY].updateNamespace(i)
                    : (this.rpcProviders[cY] = new hl({ namespace: i }));
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw Error("Sign Client is not initialized");
          this.client.on("session_ping", (e) => {
            var t;
            let { topic: r } = e;
            r === (null == (t = this.session) ? void 0 : t.topic) &&
              this.events.emit("session_ping", e);
          }),
            this.client.on("session_event", (e) => {
              var t;
              let { params: r, topic: i } = e;
              if (i !== (null == (t = this.session) ? void 0 : t.topic)) return;
              let { event: s } = r;
              if ("accountsChanged" === s.name) {
                let e = s.data;
                e && sl(e) && this.events.emit("accountsChanged", e.map(lm));
              } else if ("chainChanged" === s.name) {
                let e = r.chainId,
                  t = r.event.data,
                  i = sr(e),
                  s = lw(e) !== lw(t) ? `${i}:${lw(t)}` : e;
                this.onChainChanged(s);
              } else this.events.emit(s.name, s.data);
              this.events.emit("session_event", e);
            }),
            this.client.on("session_update", ({ topic: e, params: t }) => {
              var r, i;
              if (e !== (null == (r = this.session) ? void 0 : r.topic)) return;
              let { namespaces: s } = t,
                n = null == (i = this.client) ? void 0 : i.session.get(e);
              (this.session = hb(hm({}, n), { namespaces: s })),
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
                  hb(hm({}, sc("USER_DISCONNECTED")), { data: e.topic })
                ));
            }),
            this.on(cQ.DEFAULT_CHAIN_CHANGED, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          return this.rpcProviders[e] || this.rpcProviders[cY];
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
            optionalNamespaces: r = {},
            sessionProperties: i,
            scopedProperties: s,
          } = e;
          (this.optionalNamespaces = lg(t, r)),
            (this.sessionProperties = i),
            (this.scopedProperties = s);
        }
        validateChain(e) {
          let [t, r] = e?.split(":") || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, r];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => sr(e))
              .includes(t)
          )
            throw Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
            );
          if (t && r) return [t, r];
          let i = sr(Object.keys(this.namespaces)[0]),
            s = this.rpcProviders[i].getDefaultChain();
          return [i, s];
        }
        async requestAccounts() {
          let [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        async onChainChanged(e, t = !1) {
          if (!this.namespaces) return;
          let [r, i] = this.validateChain(e);
          if (!i) return;
          this.updateNamespaceChain(r, i), this.events.emit("chainChanged", i);
          let s = this.getProvider(r).getDefaultChain();
          t || this.getProvider(r).setDefaultChain(i),
            this.emitAccountsChangedOnChainChange({
              namespace: r,
              previousChainId: s,
              newChainId: e,
            }),
            await this.persist("namespaces", this.namespaces);
        }
        emitAccountsChangedOnChainChange({
          namespace: e,
          previousChainId: t,
          newChainId: r,
        }) {
          var i, s;
          try {
            if (t === r) return;
            let n =
              null ==
              (s = null == (i = this.session) ? void 0 : i.namespaces[e])
                ? void 0
                : s.accounts;
            if (!n) return;
            let o = n.filter((e) => e.includes(`${r}:`)).map(lm);
            if (!sl(o)) return;
            this.events.emit("accountsChanged", o);
          } catch (e) {
            this.logger.warn(
              "Failed to emit accountsChanged on chain change",
              e
            );
          }
        }
        updateNamespaceChain(e, t) {
          if (!this.namespaces) return;
          let r = this.namespaces[e] ? e : `${e}:${t}`;
          this.namespaces[r]
            ? this.namespaces[r] && (this.namespaces[r].defaultChain = t)
            : (this.namespaces[r] = {
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
          var r;
          let i = (null == (r = this.session) ? void 0 : r.topic) || "";
          await this.client.core.storage.setItem(`${cJ}/${e}${i}`, t);
        }
        async getFromStore(e) {
          var t;
          let r = (null == (t = this.session) ? void 0 : t.topic) || "";
          return await this.client.core.storage.getItem(`${cJ}/${e}${r}`);
        }
        async deleteFromStore(e) {
          var t;
          let r = (null == (t = this.session) ? void 0 : t.topic) || "";
          await this.client.core.storage.removeItem(`${cJ}/${e}${r}`);
        }
        async cleanupStorage() {
          var e;
          try {
            if ((null == (e = this.client) ? void 0 : e.session.length) > 0)
              return;
            for (let e of await this.client.core.storage.getKeys())
              e.startsWith(cJ) &&
                (await this.client.core.storage.removeItem(e));
          } catch (e) {
            this.logger.warn("Failed to cleanup storage", e);
          }
        }
      }
      let hE = ["eth_sendTransaction", "personal_sign"],
        hI = [
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
          "wallet_sendCalls",
          "wallet_getCapabilities",
          "wallet_getCallsStatus",
          "wallet_showCallsStatus",
        ],
        h_ = ["chainChanged", "accountsChanged"],
        hx = [
          "chainChanged",
          "accountsChanged",
          "message",
          "disconnect",
          "connect",
        ],
        hD = async () => {
          let { createAppKit: e } = await r.e(5438).then(r.bind(r, 35438));
          return e;
        };
      var hP = Object.defineProperty,
        hS = Object.defineProperties,
        hO = Object.getOwnPropertyDescriptors,
        hA = Object.getOwnPropertySymbols,
        hC = Object.prototype.hasOwnProperty,
        hR = Object.prototype.propertyIsEnumerable,
        hT = (e, t, r) =>
          t in e
            ? hP(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        hN = (e, t) => {
          for (var r in t || (t = {})) hC.call(t, r) && hT(e, r, t[r]);
          if (hA) for (var r of hA(t)) hR.call(t, r) && hT(e, r, t[r]);
          return e;
        },
        hj = (e, t) => hS(e, hO(t)),
        hU = (e, t, r) => hT(e, "symbol" != typeof t ? t + "" : t, r);
      function hL(e) {
        return Number(e[0].split(":")[1]);
      }
      function hk(e) {
        return `0x${e.toString(16)}`;
      }
      class hq {
        constructor() {
          hU(this, "events", new i.EventEmitter()),
            hU(this, "namespace", "eip155"),
            hU(this, "accounts", []),
            hU(this, "signer"),
            hU(this, "chainId", 1),
            hU(this, "modal"),
            hU(this, "rpc"),
            hU(this, "STORAGE_KEY", "wc@2:ethereum_provider:"),
            hU(this, "on", (e, t) => (this.events.on(e, t), this)),
            hU(this, "once", (e, t) => (this.events.once(e, t), this)),
            hU(
              this,
              "removeListener",
              (e, t) => (this.events.removeListener(e, t), this)
            ),
            hU(this, "off", (e, t) => (this.events.off(e, t), this)),
            hU(this, "parseAccount", (e) =>
              this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e
            ),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(e) {
          let t = new hq();
          return await t.initialize(e), t;
        }
        async request(e, t) {
          return await this.signer.request(
            e,
            this.formatChainId(this.chainId),
            t
          );
        }
        sendAsync(e, t, r) {
          this.signer.sendAsync(e, t, this.formatChainId(this.chainId), r);
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async connect(e) {
          var t;
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts(e);
          let { required: r, optional: i } = (function (e) {
            let {
              chains: t,
              optionalChains: r,
              methods: i,
              optionalMethods: s,
              events: n,
              optionalEvents: o,
              rpcMap: a,
            } = e;
            if (!sl(t)) throw Error("Invalid chains");
            let c = {
                chains: t,
                methods: i || hE,
                events: n || h_,
                rpcMap: hN({}, t.length ? { [hL(t)]: a[hL(t)] } : {}),
              },
              l = n?.filter((e) => !h_.includes(e)),
              h = i?.filter((e) => !hE.includes(e));
            if (
              !r &&
              !o &&
              !s &&
              !(null != l && l.length) &&
              !(null != h && h.length)
            )
              return { required: t.length ? c : void 0 };
            let u = {
              chains: [
                ...new Set(
                  (l?.length && h?.length) || !r ? c.chains.concat(r || []) : r
                ),
              ],
              methods: [
                ...new Set(c.methods.concat(null != s && s.length ? s : hI)),
              ],
              events: [
                ...new Set(c.events.concat(null != o && o.length ? o : hx)),
              ],
              rpcMap: a,
            };
            return {
              required: t.length ? c : void 0,
              optional: r.length ? u : void 0,
            };
          })(this.rpc);
          try {
            let t = await new Promise(async (t, s) => {
              var n, o;
              this.rpc.showQrModal &&
                (null == (n = this.modal) || n.open(),
                null == (o = this.modal) ||
                  o.subscribeState((e) => {
                    e.open ||
                      this.signer.session ||
                      (this.signer.abortPairingAttempt(),
                      s(Error("Connection request reset. Please try again.")));
                  }));
              let a =
                null != e && e.scopedProperties
                  ? { [this.namespace]: e.scopedProperties }
                  : void 0;
              await this.signer
                .connect(
                  hj(
                    hN(
                      { namespaces: hN({}, r && { [this.namespace]: r }) },
                      i && { optionalNamespaces: { [this.namespace]: i } }
                    ),
                    { pairingTopic: e?.pairingTopic, scopedProperties: a }
                  )
                )
                .then((e) => {
                  t(e);
                })
                .catch((e) => {
                  var t;
                  null == (t = this.modal) ||
                    t.showErrorMessage("Unable to connect"),
                    s(Error(e.message));
                });
            });
            if (!t) return;
            let s = ep(t.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : s),
              this.setAccounts(s),
              this.events.emit("connect", { chainId: hk(this.chainId) });
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            null == (t = this.modal) || t.close();
          }
        }
        async authenticate(e, t) {
          var r;
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts({ chains: e?.chains });
          try {
            let r = await new Promise(async (r, i) => {
                var s, n;
                this.rpc.showQrModal &&
                  (null == (s = this.modal) || s.open(),
                  null == (n = this.modal) ||
                    n.subscribeState((e) => {
                      e.open ||
                        this.signer.session ||
                        (this.signer.abortPairingAttempt(),
                        i(
                          Error("Connection request reset. Please try again.")
                        ));
                    })),
                  await this.signer
                    .authenticate(hj(hN({}, e), { chains: this.rpc.chains }), t)
                    .then((e) => {
                      r(e);
                    })
                    .catch((e) => {
                      var t;
                      null == (t = this.modal) ||
                        t.showErrorMessage("Unable to connect"),
                        i(Error(e.message));
                    });
              }),
              i = r.session;
            if (i) {
              let e = ep(i.namespaces, [this.namespace]);
              this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e),
                this.setAccounts(e),
                this.events.emit("connect", { chainId: hk(this.chainId) });
            }
            return r;
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            null == (r = this.modal) || r.close();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (e) => {
            let { params: t } = e,
              { event: r } = t;
            "accountsChanged" === r.name
              ? ((this.accounts = this.parseAccounts(r.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === r.name
              ? this.setChainId(this.formatChainId(r.data))
              : this.events.emit(r.name, r.data),
              this.events.emit("session_event", e);
          }),
            this.signer.on("accountsChanged", (e) => {
              (this.accounts = this.parseAccounts(e)),
                this.events.emit("accountsChanged", this.accounts);
            }),
            this.signer.on("chainChanged", (e) => {
              let t = parseInt(e);
              (this.chainId = t),
                this.events.emit("chainChanged", hk(this.chainId)),
                this.persist();
            }),
            this.signer.on("session_update", (e) => {
              this.events.emit("session_update", e);
            }),
            this.signer.on("session_delete", (e) => {
              this.reset(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  hj(hN({}, sc("USER_DISCONNECTED")), {
                    data: e.topic,
                    name: "USER_DISCONNECTED",
                  })
                );
            }),
            this.signer.on("display_uri", (e) => {
              this.events.emit("display_uri", e);
            });
        }
        switchEthereumChain(e) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: e.toString(16) }],
          });
        }
        isCompatibleChainId(e) {
          return "string" == typeof e && e.startsWith(`${this.namespace}:`);
        }
        formatChainId(e) {
          return `${this.namespace}:${e}`;
        }
        parseChainId(e) {
          return Number(e.split(":")[1]);
        }
        setChainIds(e) {
          let t = e
            .filter((e) => this.isCompatibleChainId(e))
            .map((e) => this.parseChainId(e));
          t.length &&
            ((this.chainId = t[0]),
            this.events.emit("chainChanged", hk(this.chainId)),
            this.persist());
        }
        setChainId(e) {
          if (this.isCompatibleChainId(e)) {
            let t = this.parseChainId(e);
            (this.chainId = t), this.switchEthereumChain(t);
          }
        }
        parseAccountId(e) {
          let [t, r, i] = e.split(":");
          return { chainId: `${t}:${r}`, address: i };
        }
        setAccounts(e) {
          (this.accounts = e
            .filter(
              (e) =>
                this.parseChainId(this.parseAccountId(e).chainId) ===
                this.chainId
            )
            .map((e) => this.parseAccountId(e).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(e) {
          var t, r;
          let i = null != (t = e?.chains) ? t : [],
            s = null != (r = e?.optionalChains) ? r : [],
            n = i.concat(s);
          if (!n.length)
            throw Error(
              "No chains specified in either `chains` or `optionalChains`"
            );
          let o = i.length ? e?.methods || hE : [],
            a = i.length ? e?.events || h_ : [],
            c = e?.optionalMethods || [],
            l = e?.optionalEvents || [],
            h = e?.rpcMap || this.buildRpcMap(n, e.projectId),
            u = e?.qrModalOptions || void 0;
          return {
            chains: i?.map((e) => this.formatChainId(e)),
            optionalChains: s.map((e) => this.formatChainId(e)),
            methods: o,
            events: a,
            optionalMethods: c,
            optionalEvents: l,
            rpcMap: h,
            showQrModal: !!(null != e && e.showQrModal),
            qrModalOptions: u,
            projectId: e.projectId,
            metadata: e.metadata,
          };
        }
        buildRpcMap(e, t) {
          let r = {};
          return (
            e.forEach((e) => {
              r[e] = this.getRpcUrl(e, t);
            }),
            r
          );
        }
        async initialize(e) {
          if (
            ((this.rpc = this.getRpcConfig(e)),
            (this.chainId = this.rpc.chains.length
              ? hL(this.rpc.chains)
              : hL(this.rpc.optionalChains)),
            (this.signer = await hv.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: e.disableProviderPing,
              relayUrl: e.relayUrl,
              storage: e.storage,
              storageOptions: e.storageOptions,
              customStoragePrefix: e.customStoragePrefix,
              telemetryEnabled: e.telemetryEnabled,
              logger: e.logger,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let e;
            try {
              let t = await hD(),
                { convertWCMToAppKitOptions: r } = await Promise.resolve().then(
                  function () {
                    return hZ;
                  }
                ),
                i = r(
                  hj(hN({}, this.rpc.qrModalOptions), {
                    chains: [
                      ...new Set([
                        ...this.rpc.chains,
                        ...this.rpc.optionalChains,
                      ]),
                    ],
                    metadata: this.rpc.metadata,
                    projectId: this.rpc.projectId,
                  })
                );
              if (!i.networks.length)
                throw Error("No networks found for WalletConnect\xb7");
              e = t(
                hj(hN({}, i), {
                  universalProvider: this.signer,
                  manualWCControl: !0,
                })
              );
            } catch (e) {
              throw (
                (console.warn(e),
                Error("To use QR modal, please install @reown/appkit package"))
              );
            }
            if (e)
              try {
                this.modal = e;
              } catch (e) {
                throw (
                  (this.signer.logger.error(e),
                  Error("Could not generate WalletConnectModal Instance"))
                );
              }
          }
        }
        loadConnectOpts(e) {
          if (!e) return;
          let { chains: t, optionalChains: r, rpcMap: i } = e;
          t &&
            sl(t) &&
            ((this.rpc.chains = t.map((e) => this.formatChainId(e))),
            t.forEach((e) => {
              this.rpc.rpcMap[e] = i?.[e] || this.getRpcUrl(e);
            })),
            r &&
              sl(r) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = r?.map((e) => this.formatChainId(e))),
              r.forEach((e) => {
                this.rpc.rpcMap[e] = i?.[e] || this.getRpcUrl(e);
              }));
        }
        getRpcUrl(e, t) {
          var r;
          return (
            (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) ||
            `https://rpc.walletconnect.org/v1/?chainId=eip155:${e}&projectId=${
              t || this.rpc.projectId
            }`
          );
        }
        async loadPersistedSession() {
          if (this.session)
            try {
              let e = await this.signer.client.core.storage.getItem(
                  `${this.STORAGE_KEY}/chainId`
                ),
                t = this.session.namespaces[`${this.namespace}:${e}`]
                  ? this.session.namespaces[`${this.namespace}:${e}`]
                  : this.session.namespaces[this.namespace];
              this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
                this.setAccounts(t?.accounts);
            } catch (e) {
              this.signer.logger.error(
                "Failed to load persisted session, clearing state..."
              ),
                this.signer.logger.error(e),
                await this.disconnect().catch((e) =>
                  this.signer.logger.warn(e)
                );
            }
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              `${this.STORAGE_KEY}/chainId`,
              this.chainId
            );
        }
        parseAccounts(e) {
          return "string" == typeof e || e instanceof String
            ? [this.parseAccount(e)]
            : e.map((e) => this.parseAccount(e));
        }
      }
      let hB = hq;
      var h$ = Object.defineProperty,
        hM = Object.defineProperties,
        hz = Object.getOwnPropertyDescriptors,
        hF = Object.getOwnPropertySymbols,
        hH = Object.prototype.hasOwnProperty,
        hV = Object.prototype.propertyIsEnumerable,
        hK = (e, t, r) =>
          t in e
            ? h$(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        hW = (e, t) => {
          for (var r in t || (t = {})) hH.call(t, r) && hK(e, r, t[r]);
          if (hF) for (var r of hF(t)) hV.call(t, r) && hK(e, r, t[r]);
          return e;
        },
        hJ = (e, t) => hM(e, hz(t));
      let hG = (e) => {
        let [t, r] = e.split(":");
        return hY({
          id: r,
          caipNetworkId: e,
          chainNamespace: t,
          name: "",
          nativeCurrency: { name: "", symbol: "", decimals: 8 },
          rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
        });
      };
      function hY(e) {
        return hW({ formatters: void 0, fees: void 0, serializers: void 0 }, e);
      }
      var hZ = Object.freeze({
        __proto__: null,
        convertWCMToAppKitOptions: function (e) {
          var t, r, i, s, n, o, a;
          let c = null == (t = e.chains) ? void 0 : t.map(hG).filter(Boolean);
          if (0 === c.length)
            throw Error("At least one chain must be specified");
          let l = c.find((t) => {
              var r;
              return t.id === (null == (r = e.defaultChain) ? void 0 : r.id);
            }),
            h = {
              projectId: e.projectId,
              networks: c,
              themeMode: e.themeMode,
              themeVariables: (function (e) {
                if (e)
                  return {
                    "--w3m-font-family": e["--wcm-font-family"],
                    "--w3m-accent": e["--wcm-accent-color"],
                    "--w3m-color-mix": e["--wcm-background-color"],
                    "--w3m-z-index": e["--wcm-z-index"]
                      ? Number(e["--wcm-z-index"])
                      : void 0,
                    "--w3m-qr-color": e["--wcm-accent-color"],
                    "--w3m-font-size-master":
                      e["--wcm-text-medium-regular-size"],
                    "--w3m-border-radius-master":
                      e["--wcm-container-border-radius"],
                    "--w3m-color-mix-strength": 0,
                  };
              })(e.themeVariables),
              chainImages: e.chainImages,
              connectorImages: e.walletImages,
              defaultNetwork: l,
              metadata: hJ(hW({}, e.metadata), {
                name:
                  (null == (r = e.metadata) ? void 0 : r.name) ||
                  "WalletConnect",
                description:
                  (null == (i = e.metadata) ? void 0 : i.description) ||
                  "Connect to WalletConnect-compatible wallets",
                url:
                  (null == (s = e.metadata) ? void 0 : s.url) ||
                  "https://walletconnect.org",
                icons: (null == (n = e.metadata) ? void 0 : n.icons) || [
                  "https://walletconnect.org/walletconnect-logo.png",
                ],
              }),
              showWallets: !0,
              featuredWalletIds:
                "NONE" === e.explorerRecommendedWalletIds
                  ? []
                  : Array.isArray(e.explorerRecommendedWalletIds)
                  ? e.explorerRecommendedWalletIds
                  : [],
              excludeWalletIds:
                "ALL" === e.explorerExcludedWalletIds
                  ? []
                  : Array.isArray(e.explorerExcludedWalletIds)
                  ? e.explorerExcludedWalletIds
                  : [],
              enableEIP6963: !1,
              enableInjected: !1,
              enableCoinbase: !0,
              enableWalletConnect: !0,
              features: { email: !1, socials: !1 },
            };
          if (
            (null != (o = e.mobileWallets) && o.length) ||
            (null != (a = e.desktopWallets) && a.length)
          ) {
            let t = [
                ...(e.mobileWallets || []).map((e) => ({
                  id: e.id,
                  name: e.name,
                  links: e.links,
                })),
                ...(e.desktopWallets || []).map((e) => ({
                  id: e.id,
                  name: e.name,
                  links: {
                    native: e.links.native,
                    universal: e.links.universal,
                  },
                })),
              ],
              r = [
                ...(h.featuredWalletIds || []),
                ...(h.excludeWalletIds || []),
              ],
              i = t.filter((e) => !r.includes(e.id));
            i.length && (h.customWallets = i);
          }
          return h;
        },
        defineChain: hY,
      });
    },
    7488: (e, t, r) => {
      "use strict";
      var i = r(49509);
      function s() {
        return (
          "undefined" == typeof document &&
          "undefined" != typeof navigator &&
          "ReactNative" === navigator.product
        );
      }
      function n() {
        return (
          void 0 !== i && void 0 !== i.versions && void 0 !== i.versions.node
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowser = t.isNode = t.isReactNative = void 0),
        (t.isReactNative = s),
        (t.isNode = n),
        (t.isBrowser = function () {
          return !s() && !n();
        });
    },
    7599: (e, t, r) => {
      var i =
          ("undefined" != typeof globalThis && globalThis) ||
          ("undefined" != typeof self && self) ||
          (void 0 !== r.g && r.g),
        s = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = i.DOMException);
          }
          return (e.prototype = i), new e();
        })();
      !(function (e) {
        !(function (t) {
          var i =
              (void 0 !== e && e) ||
              ("undefined" != typeof self && self) ||
              (void 0 !== r.g && r.g) ||
              {},
            s = {
              searchParams: "URLSearchParams" in i,
              iterable: "Symbol" in i && "iterator" in Symbol,
              blob:
                "FileReader" in i &&
                "Blob" in i &&
                (function () {
                  try {
                    return new Blob(), !0;
                  } catch (e) {
                    return !1;
                  }
                })(),
              formData: "FormData" in i,
              arrayBuffer: "ArrayBuffer" in i,
            };
          if (s.arrayBuffer)
            var n = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              o =
                ArrayBuffer.isView ||
                function (e) {
                  return e && n.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          function a(e) {
            if (
              ("string" != typeof e && (e = String(e)),
              /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
            )
              throw TypeError(
                'Invalid character in header field name: "' + e + '"'
              );
            return e.toLowerCase();
          }
          function c(e) {
            return "string" != typeof e && (e = String(e)), e;
          }
          function l(e) {
            var t = {
              next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
              },
            };
            return (
              s.iterable &&
                (t[Symbol.iterator] = function () {
                  return t;
                }),
              t
            );
          }
          function h(e) {
            (this.map = {}),
              e instanceof h
                ? e.forEach(function (e, t) {
                    this.append(t, e);
                  }, this)
                : Array.isArray(e)
                ? e.forEach(function (e) {
                    if (2 != e.length)
                      throw TypeError(
                        "Headers constructor: expected name/value pair to be length 2, found" +
                          e.length
                      );
                    this.append(e[0], e[1]);
                  }, this)
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (t) {
                    this.append(t, e[t]);
                  }, this);
          }
          function u(e) {
            if (!e._noBody) {
              if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
              e.bodyUsed = !0;
            }
          }
          function d(e) {
            return new Promise(function (t, r) {
              (e.onload = function () {
                t(e.result);
              }),
                (e.onerror = function () {
                  r(e.error);
                });
            });
          }
          function p(e) {
            var t = new FileReader(),
              r = d(t);
            return t.readAsArrayBuffer(e), r;
          }
          function f(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer;
          }
          function g() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (e) {
                if (((this.bodyUsed = this.bodyUsed), (this._bodyInit = e), e))
                  if ("string" == typeof e) this._bodyText = e;
                  else if (s.blob && Blob.prototype.isPrototypeOf(e))
                    this._bodyBlob = e;
                  else if (s.formData && FormData.prototype.isPrototypeOf(e))
                    this._bodyFormData = e;
                  else if (
                    s.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(e)
                  )
                    this._bodyText = e.toString();
                  else {
                    var t;
                    s.arrayBuffer &&
                    s.blob &&
                    (t = e) &&
                    DataView.prototype.isPrototypeOf(t)
                      ? ((this._bodyArrayBuffer = f(e.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : s.arrayBuffer &&
                        (ArrayBuffer.prototype.isPrototypeOf(e) || o(e))
                      ? (this._bodyArrayBuffer = f(e))
                      : (this._bodyText = e =
                          Object.prototype.toString.call(e));
                  }
                else (this._noBody = !0), (this._bodyText = "");
                !this.headers.get("content-type") &&
                  ("string" == typeof e
                    ? this.headers.set(
                        "content-type",
                        "text/plain;charset=UTF-8"
                      )
                    : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set("content-type", this._bodyBlob.type)
                    : s.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(e) &&
                      this.headers.set(
                        "content-type",
                        "application/x-www-form-urlencoded;charset=UTF-8"
                      ));
              }),
              s.blob &&
                (this.blob = function () {
                  var e = u(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (!this._bodyFormData)
                    return Promise.resolve(new Blob([this._bodyText]));
                  throw Error("could not read FormData body as blob");
                }),
              (this.arrayBuffer = function () {
                if (this._bodyArrayBuffer) {
                  var e = u(this);
                  return (
                    e ||
                    (ArrayBuffer.isView(this._bodyArrayBuffer)
                      ? Promise.resolve(
                          this._bodyArrayBuffer.buffer.slice(
                            this._bodyArrayBuffer.byteOffset,
                            this._bodyArrayBuffer.byteOffset +
                              this._bodyArrayBuffer.byteLength
                          )
                        )
                      : Promise.resolve(this._bodyArrayBuffer))
                  );
                }
                if (s.blob) return this.blob().then(p);
                throw Error("could not read as ArrayBuffer");
              }),
              (this.text = function () {
                var e,
                  t,
                  r,
                  i,
                  s,
                  n = u(this);
                if (n) return n;
                if (this._bodyBlob)
                  return (
                    (e = this._bodyBlob),
                    (r = d((t = new FileReader()))),
                    (s = (i = /charset=([A-Za-z0-9_-]+)/.exec(e.type))
                      ? i[1]
                      : "utf-8"),
                    t.readAsText(e, s),
                    r
                  );
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (e) {
                      for (
                        var t = new Uint8Array(e), r = Array(t.length), i = 0;
                        i < t.length;
                        i++
                      )
                        r[i] = String.fromCharCode(t[i]);
                      return r.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                throw Error("could not read FormData body as text");
              }),
              s.formData &&
                (this.formData = function () {
                  return this.text().then(b);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (h.prototype.append = function (e, t) {
            (e = a(e)), (t = c(t));
            var r = this.map[e];
            this.map[e] = r ? r + ", " + t : t;
          }),
            (h.prototype.delete = function (e) {
              delete this.map[a(e)];
            }),
            (h.prototype.get = function (e) {
              return (e = a(e)), this.has(e) ? this.map[e] : null;
            }),
            (h.prototype.has = function (e) {
              return this.map.hasOwnProperty(a(e));
            }),
            (h.prototype.set = function (e, t) {
              this.map[a(e)] = c(t);
            }),
            (h.prototype.forEach = function (e, t) {
              for (var r in this.map)
                this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
            }),
            (h.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, r) {
                  e.push(r);
                }),
                l(e)
              );
            }),
            (h.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                l(e)
              );
            }),
            (h.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, r) {
                  e.push([r, t]);
                }),
                l(e)
              );
            }),
            s.iterable && (h.prototype[Symbol.iterator] = h.prototype.entries);
          var y = [
            "CONNECT",
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "PATCH",
            "POST",
            "PUT",
            "TRACE",
          ];
          function m(e, t) {
            if (!(this instanceof m))
              throw TypeError(
                'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
              );
            var r,
              s,
              n = (t = t || {}).body;
            if (e instanceof m) {
              if (e.bodyUsed) throw TypeError("Already read");
              (this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new h(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                n ||
                  null == e._bodyInit ||
                  ((n = e._bodyInit), (e.bodyUsed = !0));
            } else this.url = String(e);
            if (
              ((this.credentials =
                t.credentials || this.credentials || "same-origin"),
              (t.headers || !this.headers) && (this.headers = new h(t.headers)),
              (this.method =
                ((s = (r = t.method || this.method || "GET").toUpperCase()),
                y.indexOf(s) > -1 ? s : r)),
              (this.mode = t.mode || this.mode || null),
              (this.signal =
                t.signal ||
                this.signal ||
                (function () {
                  if ("AbortController" in i)
                    return new AbortController().signal;
                })()),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && n)
            )
              throw TypeError("Body not allowed for GET or HEAD requests");
            if (
              (this._initBody(n),
              ("GET" === this.method || "HEAD" === this.method) &&
                ("no-store" === t.cache || "no-cache" === t.cache))
            ) {
              var o = /([?&])_=[^&]*/;
              o.test(this.url)
                ? (this.url = this.url.replace(
                    o,
                    "$1_=" + new Date().getTime()
                  ))
                : (this.url +=
                    (/\?/.test(this.url) ? "&" : "?") +
                    "_=" +
                    new Date().getTime());
            }
          }
          function b(e) {
            var t = new FormData();
            return (
              e
                .trim()
                .split("&")
                .forEach(function (e) {
                  if (e) {
                    var r = e.split("="),
                      i = r.shift().replace(/\+/g, " "),
                      s = r.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(i), decodeURIComponent(s));
                  }
                }),
              t
            );
          }
          function w(e, t) {
            if (!(this instanceof w))
              throw TypeError(
                'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
              );
            if (
              (t || (t = {}),
              (this.type = "default"),
              (this.status = void 0 === t.status ? 200 : t.status),
              this.status < 200 || this.status > 599)
            )
              throw RangeError(
                "Failed to construct 'Response': The status provided (0) is outside the range [200, 599]."
              );
            (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText =
                void 0 === t.statusText ? "" : "" + t.statusText),
              (this.headers = new h(t.headers)),
              (this.url = t.url || ""),
              this._initBody(e);
          }
          (m.prototype.clone = function () {
            return new m(this, { body: this._bodyInit });
          }),
            g.call(m.prototype),
            g.call(w.prototype),
            (w.prototype.clone = function () {
              return new w(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new h(this.headers),
                url: this.url,
              });
            }),
            (w.error = function () {
              var e = new w(null, { status: 200, statusText: "" });
              return (e.ok = !1), (e.status = 0), (e.type = "error"), e;
            });
          var v = [301, 302, 303, 307, 308];
          (w.redirect = function (e, t) {
            if (-1 === v.indexOf(t)) throw RangeError("Invalid status code");
            return new w(null, { status: t, headers: { location: e } });
          }),
            (t.DOMException = i.DOMException);
          try {
            new t.DOMException();
          } catch (e) {
            (t.DOMException = function (e, t) {
              (this.message = e), (this.name = t);
              var r = Error(e);
              this.stack = r.stack;
            }),
              (t.DOMException.prototype = Object.create(Error.prototype)),
              (t.DOMException.prototype.constructor = t.DOMException);
          }
          function E(e, r) {
            return new Promise(function (n, o) {
              var l = new m(e, r);
              if (l.signal && l.signal.aborted)
                return o(new t.DOMException("Aborted", "AbortError"));
              var u = new XMLHttpRequest();
              function d() {
                u.abort();
              }
              if (
                ((u.onload = function () {
                  var e,
                    t,
                    r = {
                      statusText: u.statusText,
                      headers:
                        ((e = u.getAllResponseHeaders() || ""),
                        (t = new h()),
                        e
                          .replace(/\r?\n[\t ]+/g, " ")
                          .split("\r")
                          .map(function (e) {
                            return 0 === e.indexOf("\n")
                              ? e.substr(1, e.length)
                              : e;
                          })
                          .forEach(function (e) {
                            var r = e.split(":"),
                              i = r.shift().trim();
                            if (i) {
                              var s = r.join(":").trim();
                              try {
                                t.append(i, s);
                              } catch (e) {
                                console.warn("Response " + e.message);
                              }
                            }
                          }),
                        t),
                    };
                  0 === l.url.indexOf("file://") &&
                  (u.status < 200 || u.status > 599)
                    ? (r.status = 200)
                    : (r.status = u.status),
                    (r.url =
                      "responseURL" in u
                        ? u.responseURL
                        : r.headers.get("X-Request-URL"));
                  var i = "response" in u ? u.response : u.responseText;
                  setTimeout(function () {
                    n(new w(i, r));
                  }, 0);
                }),
                (u.onerror = function () {
                  setTimeout(function () {
                    o(TypeError("Network request failed"));
                  }, 0);
                }),
                (u.ontimeout = function () {
                  setTimeout(function () {
                    o(TypeError("Network request timed out"));
                  }, 0);
                }),
                (u.onabort = function () {
                  setTimeout(function () {
                    o(new t.DOMException("Aborted", "AbortError"));
                  }, 0);
                }),
                u.open(
                  l.method,
                  (function (e) {
                    try {
                      return "" === e && i.location.href ? i.location.href : e;
                    } catch (t) {
                      return e;
                    }
                  })(l.url),
                  !0
                ),
                "include" === l.credentials
                  ? (u.withCredentials = !0)
                  : "omit" === l.credentials && (u.withCredentials = !1),
                "responseType" in u &&
                  (s.blob
                    ? (u.responseType = "blob")
                    : s.arrayBuffer && (u.responseType = "arraybuffer")),
                r &&
                  "object" == typeof r.headers &&
                  !(
                    r.headers instanceof h ||
                    (i.Headers && r.headers instanceof i.Headers)
                  ))
              ) {
                var p = [];
                Object.getOwnPropertyNames(r.headers).forEach(function (e) {
                  p.push(a(e)), u.setRequestHeader(e, c(r.headers[e]));
                }),
                  l.headers.forEach(function (e, t) {
                    -1 === p.indexOf(t) && u.setRequestHeader(t, e);
                  });
              } else
                l.headers.forEach(function (e, t) {
                  u.setRequestHeader(t, e);
                });
              l.signal &&
                (l.signal.addEventListener("abort", d),
                (u.onreadystatechange = function () {
                  4 === u.readyState &&
                    l.signal.removeEventListener("abort", d);
                })),
                u.send(void 0 === l._bodyInit ? null : l._bodyInit);
            });
          }
          (E.polyfill = !0),
            i.fetch ||
              ((i.fetch = E),
              (i.Headers = h),
              (i.Request = m),
              (i.Response = w)),
            (t.Headers = h),
            (t.Request = m),
            (t.Response = w),
            (t.fetch = E),
            Object.defineProperty(t, "__esModule", { value: !0 });
        })({});
      })(s),
        (s.fetch.ponyfill = !0),
        delete s.fetch.polyfill;
      var n = i.fetch ? i : s;
      ((t = n.fetch).default = n.fetch),
        (t.fetch = n.fetch),
        (t.Headers = n.Headers),
        (t.Request = n.Request),
        (t.Response = n.Response),
        (e.exports = t);
    },
    10973: (e, t, r) => {
      "use strict";
      function i(e, t, r) {
        var i, s;
        let n;
        return (
          (r.length
            ? ((i = t.length),
              Array.isArray(e) ? e.length >= i : Object.keys(e).length >= i)
            : ((s = t.length),
              Array.isArray(e)
                ? e.length === s
                : Object.keys(e).length === s)) &&
          ((n = !0),
          t.forEach((t) => {
            t in e || (n = !1);
          }),
          n)
        );
      }
      function s(e, t, r = "_") {
        let i = e.split(r);
        return i[i.length - 1].trim().toLowerCase() === t.trim().toLowerCase();
      }
      r.d(t, { CG: () => n });
      let n = {
        waku: {
          publish: "waku_publish",
          batchPublish: "waku_batchPublish",
          subscribe: "waku_subscribe",
          batchSubscribe: "waku_batchSubscribe",
          subscription: "waku_subscription",
          unsubscribe: "waku_unsubscribe",
          batchUnsubscribe: "waku_batchUnsubscribe",
          batchFetchMessages: "waku_batchFetchMessages",
        },
        irn: {
          publish: "irn_publish",
          batchPublish: "irn_batchPublish",
          subscribe: "irn_subscribe",
          batchSubscribe: "irn_batchSubscribe",
          subscription: "irn_subscription",
          unsubscribe: "irn_unsubscribe",
          batchUnsubscribe: "irn_batchUnsubscribe",
          batchFetchMessages: "irn_batchFetchMessages",
        },
        iridium: {
          publish: "iridium_publish",
          batchPublish: "iridium_batchPublish",
          subscribe: "iridium_subscribe",
          batchSubscribe: "iridium_batchSubscribe",
          subscription: "iridium_subscription",
          unsubscribe: "iridium_unsubscribe",
          batchUnsubscribe: "iridium_batchUnsubscribe",
          batchFetchMessages: "iridium_batchFetchMessages",
        },
      };
    },
    14911: (e, t, r) => {
      "use strict";
      function i(e, t) {
        let r = (function (e) {
          let t = e.match(RegExp(/^\w+:/, "gi"));
          if (t && t.length) return t[0];
        })(e);
        return void 0 !== r && new RegExp(t).test(r);
      }
      function s(e) {
        return i(e, "^https?:");
      }
      function n(e) {
        return i(e, "^wss?:");
      }
      function o(e) {
        return RegExp("wss?://localhost(:d{2,5})?").test(e);
      }
      r.d(t, { A1: () => n, q$: () => s, z: () => o });
    },
    16784: (e, t, r) => {
      "use strict";
      let i = r(68928);
      e.exports = n;
      let s =
        (function () {
          function e(e) {
            return void 0 !== e && e;
          }
          try {
            if ("undefined" != typeof globalThis) return globalThis;
            return (
              Object.defineProperty(Object.prototype, "globalThis", {
                get: function () {
                  return (
                    delete Object.prototype.globalThis, (this.globalThis = this)
                  );
                },
                configurable: !0,
              }),
              globalThis
            );
          } catch (t) {
            return e(self) || e(window) || e(this) || {};
          }
        })().console || {};
      function n(e) {
        var t, r;
        (e = e || {}).browser = e.browser || {};
        let i = e.browser.transmit;
        if (i && "function" != typeof i.send)
          throw Error("pino: transmit option must have a send function");
        let h = e.browser.write || s;
        e.browser.write && (e.browser.asObject = !0);
        let u = e.serializers || {},
          g =
            ((t = e.browser.serialize),
            Array.isArray(t)
              ? t.filter(function (e) {
                  return "!stdSerializers.err" !== e;
                })
              : !0 === t && Object.keys(u)),
          y = e.browser.serialize;
        Array.isArray(e.browser.serialize) &&
          e.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
          (y = !1),
          "function" == typeof h &&
            (h.error = h.fatal = h.warn = h.info = h.debug = h.trace = h),
          !1 === e.enabled && (e.level = "silent");
        let m = e.level || "info",
          b = Object.create(h);
        b.log || (b.log = d),
          Object.defineProperty(b, "levelVal", {
            get: function () {
              return "silent" === this.level
                ? 1 / 0
                : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(b, "level", {
            get: function () {
              return this._level;
            },
            set: function (e) {
              if ("silent" !== e && !this.levels.values[e])
                throw Error("unknown level " + e);
              (this._level = e),
                o(w, b, "error", "log"),
                o(w, b, "fatal", "error"),
                o(w, b, "warn", "error"),
                o(w, b, "info", "log"),
                o(w, b, "debug", "log"),
                o(w, b, "trace", "log");
            },
          });
        let w = {
          transmit: i,
          serialize: g,
          asObject: e.browser.asObject,
          levels: ["error", "fatal", "warn", "info", "debug", "trace"],
          timestamp:
            "function" == typeof (r = e).timestamp
              ? r.timestamp
              : !1 === r.timestamp
              ? p
              : f,
        };
        return (
          (b.levels = n.levels),
          (b.level = m),
          (b.setMaxListeners =
            b.getMaxListeners =
            b.emit =
            b.addListener =
            b.on =
            b.prependListener =
            b.once =
            b.prependOnceListener =
            b.removeListener =
            b.removeAllListeners =
            b.listeners =
            b.listenerCount =
            b.eventNames =
            b.write =
            b.flush =
              d),
          (b.serializers = u),
          (b._serialize = g),
          (b._stdErrSerialize = y),
          (b.child = function (t, r) {
            if (!t) throw Error("missing bindings for child Pino");
            (r = r || {}),
              g && t.serializers && (r.serializers = t.serializers);
            let s = r.serializers;
            if (g && s) {
              var n = Object.assign({}, u, s),
                o = !0 === e.browser.serialize ? Object.keys(n) : g;
              delete t.serializers, a([t], o, n, this._stdErrSerialize);
            }
            function h(e) {
              (this._childLevel = (0 | e._childLevel) + 1),
                (this.error = c(e, t, "error")),
                (this.fatal = c(e, t, "fatal")),
                (this.warn = c(e, t, "warn")),
                (this.info = c(e, t, "info")),
                (this.debug = c(e, t, "debug")),
                (this.trace = c(e, t, "trace")),
                n && ((this.serializers = n), (this._serialize = o)),
                i && (this._logEvent = l([].concat(e._logEvent.bindings, t)));
            }
            return (h.prototype = this), new h(this);
          }),
          i && (b._logEvent = l()),
          b
        );
      }
      function o(e, t, r, o) {
        let c = Object.getPrototypeOf(t);
        (t[r] =
          t.levelVal > t.levels.values[r]
            ? d
            : c[r]
            ? c[r]
            : s[r] || s[o] || d),
          (function (e, t, r) {
            if (e.transmit || t[r] !== d) {
              var o;
              t[r] =
                ((o = t[r]),
                function () {
                  let c = e.timestamp(),
                    h = Array(arguments.length),
                    u =
                      Object.getPrototypeOf && Object.getPrototypeOf(this) === s
                        ? s
                        : this;
                  for (var d = 0; d < h.length; d++) h[d] = arguments[d];
                  if (
                    (e.serialize &&
                      !e.asObject &&
                      a(
                        h,
                        this._serialize,
                        this.serializers,
                        this._stdErrSerialize
                      ),
                    e.asObject
                      ? o.call(
                          u,
                          (function (e, t, r, s) {
                            e._serialize &&
                              a(
                                r,
                                e._serialize,
                                e.serializers,
                                e._stdErrSerialize
                              );
                            let o = r.slice(),
                              c = o[0],
                              l = {};
                            s && (l.time = s), (l.level = n.levels.values[t]);
                            let h = (0 | e._childLevel) + 1;
                            if (
                              (h < 1 && (h = 1),
                              null !== c && "object" == typeof c)
                            ) {
                              for (; h-- && "object" == typeof o[0]; )
                                Object.assign(l, o.shift());
                              c = o.length ? i(o.shift(), o) : void 0;
                            } else
                              "string" == typeof c && (c = i(o.shift(), o));
                            return void 0 !== c && (l.msg = c), l;
                          })(this, r, h, c)
                        )
                      : o.apply(u, h),
                    e.transmit)
                  ) {
                    let i = e.transmit.level || t.level,
                      s = n.levels.values[i],
                      o = n.levels.values[r];
                    if (o < s) return;
                    !(function (e, t, r) {
                      let i = t.send,
                        s = t.ts,
                        n = t.methodLevel,
                        o = t.methodValue,
                        c = t.val,
                        h = e._logEvent.bindings;
                      a(
                        r,
                        e._serialize || Object.keys(e.serializers),
                        e.serializers,
                        void 0 === e._stdErrSerialize || e._stdErrSerialize
                      ),
                        (e._logEvent.ts = s),
                        (e._logEvent.messages = r.filter(function (e) {
                          return -1 === h.indexOf(e);
                        })),
                        (e._logEvent.level.label = n),
                        (e._logEvent.level.value = o),
                        i(n, e._logEvent, c),
                        (e._logEvent = l(h));
                    })(
                      this,
                      {
                        ts: c,
                        methodLevel: r,
                        methodValue: o,
                        transmitLevel: i,
                        transmitValue:
                          n.levels.values[e.transmit.level || t.level],
                        send: e.transmit.send,
                        val: t.levelVal,
                      },
                      h
                    );
                  }
                });
            }
          })(e, t, r);
      }
      function a(e, t, r, i) {
        for (let s in e)
          if (i && e[s] instanceof Error) e[s] = n.stdSerializers.err(e[s]);
          else if ("object" == typeof e[s] && !Array.isArray(e[s]))
            for (let i in e[s])
              t && t.indexOf(i) > -1 && i in r && (e[s][i] = r[i](e[s][i]));
      }
      function c(e, t, r) {
        return function () {
          let i = Array(1 + arguments.length);
          i[0] = t;
          for (var s = 1; s < i.length; s++) i[s] = arguments[s - 1];
          return e[r].apply(this, i);
        };
      }
      function l(e) {
        return {
          ts: 0,
          messages: [],
          bindings: e || [],
          level: { label: "", value: 0 },
        };
      }
      function h() {
        return {};
      }
      function u(e) {
        return e;
      }
      function d() {}
      function p() {
        return !1;
      }
      function f() {
        return Date.now();
      }
      (n.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal",
        },
      }),
        (n.stdSerializers = {
          mapHttpRequest: h,
          mapHttpResponse: h,
          wrapRequestSerializer: u,
          wrapResponseSerializer: u,
          wrapErrorSerializer: u,
          req: h,
          res: h,
          err: function (e) {
            let t = {
              type: e.constructor.name,
              msg: e.message,
              stack: e.stack,
            };
            for (let r in e) void 0 === t[r] && (t[r] = e[r]);
            return t;
          },
        }),
        (n.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: p,
            epochTime: f,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
    },
    18067: (e, t, r) => {
      "use strict";
      r.d(t, {
        Uf: () => o,
        XW: () => a,
        fO: () => s,
        jf: () => n,
        zR: () => i,
      });
      let i = "INTERNAL_ERROR",
        s = "SERVER_ERROR",
        n = [-32700, -32600, -32601, -32602, -32603],
        o = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [i]: { code: -32603, message: "Internal error" },
          [s]: { code: -32e3, message: "Server error" },
        },
        a = s;
    },
    19655: (e, t, r) => {
      "use strict";
      r.d(t, {
        D5: () => D,
        U5: () => x,
        h6: () => s.a,
        iP: () => I,
        oI: () => _,
      });
      var i = r(16784),
        s = r.n(i),
        n = r(71075);
      let o = { level: "info" },
        a = "custom_context";
      class c {
        constructor(e) {
          (this.nodeValue = e),
            (this.sizeInBytes = new TextEncoder().encode(
              this.nodeValue
            ).length),
            (this.next = null);
        }
        get value() {
          return this.nodeValue;
        }
        get size() {
          return this.sizeInBytes;
        }
      }
      class l {
        constructor(e) {
          (this.head = null),
            (this.tail = null),
            (this.lengthInNodes = 0),
            (this.maxSizeInBytes = e),
            (this.sizeInBytes = 0);
        }
        append(e) {
          let t = new c(e);
          if (t.size > this.maxSizeInBytes)
            throw Error(
              `[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`
            );
          for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
          this.head ? this.tail && (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            this.lengthInNodes++,
            (this.sizeInBytes += t.size);
        }
        shift() {
          if (!this.head) return;
          let e = this.head;
          (this.head = this.head.next),
            this.head || (this.tail = null),
            this.lengthInNodes--,
            (this.sizeInBytes -= e.size);
        }
        toArray() {
          let e = [],
            t = this.head;
          for (; null !== t; ) e.push(t.value), (t = t.next);
          return e;
        }
        get length() {
          return this.lengthInNodes;
        }
        get size() {
          return this.sizeInBytes;
        }
        toOrderedArray() {
          return Array.from(this);
        }
        [Symbol.iterator]() {
          let e = this.head;
          return {
            next: () => {
              if (!e) return { done: !0, value: null };
              let t = e.value;
              return (e = e.next), { done: !1, value: t };
            },
          };
        }
      }
      class h {
        constructor(e, t = 1024e3) {
          (this.level = e ?? "error"),
            (this.levelValue = i.levels.values[this.level]),
            (this.MAX_LOG_SIZE_IN_BYTES = t),
            (this.logs = new l(this.MAX_LOG_SIZE_IN_BYTES));
        }
        forwardToConsole(e, t) {
          t === i.levels.values.error
            ? console.error(e)
            : t === i.levels.values.warn
            ? console.warn(e)
            : t === i.levels.values.debug
            ? console.debug(e)
            : t === i.levels.values.trace
            ? console.trace(e)
            : console.log(e);
        }
        appendToLogs(e) {
          this.logs.append(
            (0, n.h)({ timestamp: new Date().toISOString(), log: e })
          );
          let t = "string" == typeof e ? JSON.parse(e).level : e.level;
          t >= this.levelValue && this.forwardToConsole(e, t);
        }
        getLogs() {
          return this.logs;
        }
        clearLogs() {
          this.logs = new l(this.MAX_LOG_SIZE_IN_BYTES);
        }
        getLogArray() {
          return Array.from(this.logs);
        }
        logsToBlob(e) {
          let t = this.getLogArray();
          return (
            t.push((0, n.h)({ extraMetadata: e })),
            new Blob(t, { type: "application/json" })
          );
        }
      }
      class u {
        constructor(e, t = 1024e3) {
          this.baseChunkLogger = new h(e, t);
        }
        write(e) {
          this.baseChunkLogger.appendToLogs(e);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(e) {
          return this.baseChunkLogger.logsToBlob(e);
        }
        downloadLogsBlobInBrowser(e) {
          let t = URL.createObjectURL(this.logsToBlob(e)),
            r = document.createElement("a");
          (r.href = t),
            (r.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
            document.body.appendChild(r),
            r.click(),
            document.body.removeChild(r),
            URL.revokeObjectURL(t);
        }
      }
      class d {
        constructor(e, t = 1024e3) {
          this.baseChunkLogger = new h(e, t);
        }
        write(e) {
          this.baseChunkLogger.appendToLogs(e);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(e) {
          return this.baseChunkLogger.logsToBlob(e);
        }
      }
      var p = Object.defineProperty,
        f = Object.defineProperties,
        g = Object.getOwnPropertyDescriptors,
        y = Object.getOwnPropertySymbols,
        m = Object.prototype.hasOwnProperty,
        b = Object.prototype.propertyIsEnumerable,
        w = (e, t, r) =>
          t in e
            ? p(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        v = (e, t) => {
          for (var r in t || (t = {})) m.call(t, r) && w(e, r, t[r]);
          if (y) for (var r of y(t)) b.call(t, r) && w(e, r, t[r]);
          return e;
        },
        E = (e, t) => f(e, g(t));
      function I(e) {
        return E(v({}, e), { level: e?.level || o.level });
      }
      function _(e, t = a) {
        return typeof e.bindings > "u"
          ? (function (e, t = a) {
              return e[t] || "";
            })(e, t)
          : e.bindings().context || "";
      }
      function x(e, t, r = a) {
        let i = (function (e, t, r = a) {
          let i = _(e, r);
          return i.trim() ? `${i}/${t}` : t;
        })(e, t, r);
        return (function (e, t, r = a) {
          return (e[r] = t), e;
        })(e.child({ context: i }), i, r);
      }
      function D(e) {
        return "u" > typeof e.loggerOverride &&
          "string" != typeof e.loggerOverride
          ? { logger: e.loggerOverride, chunkLoggerController: null }
          : "u" > typeof window
          ? (function (e) {
              var t, r;
              let i = new u(
                null == (t = e.opts) ? void 0 : t.level,
                e.maxSizeInBytes
              );
              return {
                logger: s()(
                  E(v({}, e.opts), {
                    level: "trace",
                    browser: E(
                      v({}, null == (r = e.opts) ? void 0 : r.browser),
                      { write: (e) => i.write(e) }
                    ),
                  })
                ),
                chunkLoggerController: i,
              };
            })(e)
          : (function (e) {
              var t;
              let r = new d(
                null == (t = e.opts) ? void 0 : t.level,
                e.maxSizeInBytes
              );
              return {
                logger: s()(E(v({}, e.opts), { level: "trace" }), r),
                chunkLoggerController: r,
              };
            })(e);
      }
    },
    24630: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => b, V: () => b });
      var i = r(40662),
        s = r(7599),
        n = r.n(s),
        o = r(71075),
        a = r(75086),
        c = Object.defineProperty,
        l = Object.defineProperties,
        h = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        p = Object.prototype.propertyIsEnumerable,
        f = (e, t, r) =>
          t in e
            ? c(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        g = (e, t) => {
          for (var r in t || (t = {})) d.call(t, r) && f(e, r, t[r]);
          if (u) for (var r of u(t)) p.call(t, r) && f(e, r, t[r]);
          return e;
        },
        y = (e, t) => l(e, h(t));
      let m = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      };
      class b {
        constructor(e, t = !1) {
          if (
            ((this.url = e),
            (this.disableProviderPing = t),
            (this.events = new i.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !(0, a.isHttpUrl)(e))
          )
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${e}`
            );
          (this.url = e), (this.disableProviderPing = t);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
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
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          if (!this.isAvailable) throw Error("Connection already closed");
          this.onClose();
        }
        async send(e) {
          this.isAvailable || (await this.register());
          try {
            let t = (0, o.h)(e),
              r = await (await n()(this.url, y(g({}, m), { body: t }))).json();
            this.onPayload({ data: r });
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        async register(e = this.url) {
          if (!(0, a.isHttpUrl)(e))
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${e}`
            );
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if (
                      (this.resetMaxListeners(), typeof this.isAvailable > "u")
                    )
                      return t(Error("HTTP connection is missing or invalid"));
                    e();
                  });
              })
            );
          }
          (this.url = e), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              let t = (0, o.h)({
                id: 1,
                jsonrpc: "2.0",
                method: "test",
                params: [],
              });
              await n()(e, y(g({}, m), { body: t }));
            }
            this.onOpen();
          } catch (t) {
            let e = this.parseError(t);
            throw (this.events.emit("register_error", e), this.onClose(), e);
          }
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit("close");
        }
        onPayload(e) {
          if (typeof e.data > "u") return;
          let t = "string" == typeof e.data ? (0, o.j)(e.data) : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          let r = this.parseError(t),
            i = r.message || r.toString(),
            s = (0, a.formatJsonRpcError)(e, i);
          this.events.emit("payload", s);
        }
        parseError(e, t = this.url) {
          return (0, a.parseConnectionError)(e, t, "HTTP");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
    },
    27104: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.delay = void 0),
        (t.delay = function (e) {
          return new Promise((t) => {
            setTimeout(() => {
              t(!0);
            }, e);
          });
        });
    },
    28094: (e, t, r) => {
      "use strict";
      t.g = void 0;
      let i = r(621);
      t.g = function () {
        let e, t, r;
        try {
          (e = i.getDocumentOrThrow()), (t = i.getLocationOrThrow());
        } catch (e) {
          return null;
        }
        function s(...t) {
          let r = e.getElementsByTagName("meta");
          for (let e = 0; e < r.length; e++) {
            let i = r[e],
              s = ["itemprop", "property", "name"]
                .map((e) => i.getAttribute(e))
                .filter((e) => !!e && t.includes(e));
            if (s.length && s) {
              let e = i.getAttribute("content");
              if (e) return e;
            }
          }
          return "";
        }
        let n =
            ((r = s("name", "og:site_name", "og:title", "twitter:title")) ||
              (r = e.title),
            r),
          o = s(
            "description",
            "og:description",
            "twitter:description",
            "keywords"
          ),
          a = t.origin;
        return {
          description: o,
          url: a,
          icons: (function () {
            let r = e.getElementsByTagName("link"),
              i = [];
            for (let e = 0; e < r.length; e++) {
              let s = r[e],
                n = s.getAttribute("rel");
              if (n && n.toLowerCase().indexOf("icon") > -1) {
                let e = s.getAttribute("href");
                if (e)
                  if (
                    -1 === e.toLowerCase().indexOf("https:") &&
                    -1 === e.toLowerCase().indexOf("http:") &&
                    0 !== e.indexOf("//")
                  ) {
                    let r = t.protocol + "//" + t.host;
                    if (0 === e.indexOf("/")) r += e;
                    else {
                      let i = t.pathname.split("/");
                      i.pop(), (r += i.join("/") + "/" + e);
                    }
                    i.push(r);
                  } else if (0 === e.indexOf("//")) {
                    let r = t.protocol + e;
                    i.push(r);
                  } else i.push(e);
              }
            }
            return i;
          })(),
          name: n,
        };
      };
    },
    28185: (e, t, r) => {
      "use strict";
      r.d(t, {
        Vw: () => p,
        Fc: () => l,
        Id: () => d,
        O8: () => o,
        qv: () => c,
        po: () => g,
        Ow: () => a,
        ZJ: () => u,
        DH: () => n,
        ld: () => f,
      });
      let i =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      var s = r(61947);
      function n(e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }
      function o(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function a(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let c = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function l(e) {
        for (let r = 0; r < e.length; r++) {
          var t;
          e[r] =
            (((t = e[r]) << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      (e, t) => t.toString(16).padStart(2, "0");
      let h = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function u(e) {
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
      function d(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let i = e[r];
          (0, s.DO)(i), (t += i.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, i = 0; t < e.length; t++) {
          let s = e[t];
          r.set(s, i), (i += s.length);
        }
        return r;
      }
      class p {
        clone() {
          return this._cloneInto();
        }
      }
      function f(e) {
        let t = (t) => e().update(u(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function g(e = 32) {
        if (i && "function" == typeof i.getRandomValues)
          return i.getRandomValues(new Uint8Array(e));
        if (i && "function" == typeof i.randomBytes) return i.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    30565: (e, t, r) => {
      "use strict";
      r.d(t, { Cq: () => tS, FA: () => tA, TZ: () => tO, UF: () => tP });
      var i = r(89101),
        s = r(71075);
      function n(e, ...t) {
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
      function o(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      let a =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0,
        c = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      function l(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          n(e),
          e
        );
      }
      class h {
        clone() {
          return this._cloneInto();
        }
      }
      function u(e = 32) {
        if (a && "function" == typeof a.getRandomValues)
          return a.getRandomValues(new Uint8Array(e));
        if (a && "function" == typeof a.randomBytes) return a.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined");
      }
      class d extends h {
        constructor(e, t, r, i) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = i),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = c(this.buffer));
        }
        update(e) {
          o(this);
          let { view: t, buffer: r, blockLen: i } = this,
            s = (e = l(e)).length;
          for (let n = 0; n < s; ) {
            let o = Math.min(i - this.pos, s - n);
            if (o === i) {
              let t = c(e);
              for (; i <= s - n; n += i) this.process(t, n);
              continue;
            }
            r.set(e.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === i && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          o(this),
            (function (e, t) {
              n(e);
              let r = t.outputLen;
              if (e.length < r)
                throw Error(
                  "digestInto() expects output buffer of length at least " + r
                );
            })(e, this),
            (this.finished = !0);
          let { buffer: t, view: r, blockLen: i, isLE: s } = this,
            { pos: a } = this;
          (t[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > i - a && (this.process(r, 0), (a = 0));
          for (let e = a; e < i; e++) t[e] = 0;
          (function (e, t, r, i) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, r, i);
            let s = BigInt(32),
              n = BigInt(0xffffffff),
              o = Number((r >> s) & n),
              a = Number(r & n),
              c = 4 * !!i,
              l = 4 * !i;
            e.setUint32(t + c, o, i), e.setUint32(t + l, a, i);
          })(r, i - 8, BigInt(8 * this.length), s),
            this.process(r, 0);
          let l = c(e),
            h = this.outputLen;
          if (h % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let u = h / 4,
            d = this.get();
          if (u > d.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < u; e++) l.setUint32(4 * e, d[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: r,
            length: i,
            finished: s,
            destroyed: n,
            pos: o,
          } = this;
          return (
            (e.length = i),
            (e.pos = o),
            (e.finished = s),
            (e.destroyed = n),
            i % t && e.buffer.set(r),
            e
          );
        }
      }
      let p = BigInt(0x100000000 - 1),
        f = BigInt(32),
        g = {
          split: function (e, t = !1) {
            let r = new Uint32Array(e.length),
              i = new Uint32Array(e.length);
            for (let s = 0; s < e.length; s++) {
              let { h: n, l: o } = (function (e, t = !1) {
                return t
                  ? { h: Number(e & p), l: Number((e >> f) & p) }
                  : { h: 0 | Number((e >> f) & p), l: 0 | Number(e & p) };
              })(e[s], t);
              [r[s], i[s]] = [n, o];
            }
            return [r, i];
          },
          shrSH: (e, t, r) => e >>> r,
          shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
          rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
          rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
          add: function (e, t, r, i) {
            let s = (t >>> 0) + (i >>> 0);
            return { h: (e + r + ((s / 0x100000000) | 0)) | 0, l: 0 | s };
          },
          add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
          add3H: (e, t, r, i) => (t + r + i + ((e / 0x100000000) | 0)) | 0,
          add4L: (e, t, r, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0),
          add4H: (e, t, r, i, s) =>
            (t + r + i + s + ((e / 0x100000000) | 0)) | 0,
          add5H: (e, t, r, i, s, n) =>
            (t + r + i + s + n + ((e / 0x100000000) | 0)) | 0,
          add5L: (e, t, r, i, s) =>
            (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0) + (s >>> 0),
        },
        [y, m] = g.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((e) => BigInt(e))
        ),
        b = new Uint32Array(80),
        w = new Uint32Array(80);
      class v extends d {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 0x6a09e667),
            (this.Al = -0xc4336f8),
            (this.Bh = -0x4498517b),
            (this.Bl = -0x7b3558c5),
            (this.Ch = 0x3c6ef372),
            (this.Cl = -0x16b07d5),
            (this.Dh = -0x5ab00ac6),
            (this.Dl = 0x5f1d36f1),
            (this.Eh = 0x510e527f),
            (this.El = -0x52197d2f),
            (this.Fh = -0x64fa9774),
            (this.Fl = 0x2b3e6c1f),
            (this.Gh = 0x1f83d9ab),
            (this.Gl = -0x4be4295),
            (this.Hh = 0x5be0cd19),
            (this.Hl = 0x137e2179);
        }
        get() {
          let {
            Ah: e,
            Al: t,
            Bh: r,
            Bl: i,
            Ch: s,
            Cl: n,
            Dh: o,
            Dl: a,
            Eh: c,
            El: l,
            Fh: h,
            Fl: u,
            Gh: d,
            Gl: p,
            Hh: f,
            Hl: g,
          } = this;
          return [e, t, r, i, s, n, o, a, c, l, h, u, d, p, f, g];
        }
        set(e, t, r, i, s, n, o, a, c, l, h, u, d, p, f, g) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | i),
            (this.Ch = 0 | s),
            (this.Cl = 0 | n),
            (this.Dh = 0 | o),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | l),
            (this.Fh = 0 | h),
            (this.Fl = 0 | u),
            (this.Gh = 0 | d),
            (this.Gl = 0 | p),
            (this.Hh = 0 | f),
            (this.Hl = 0 | g);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4)
            (b[r] = e.getUint32(t)), (w[r] = e.getUint32((t += 4)));
          for (let e = 16; e < 80; e++) {
            let t = 0 | b[e - 15],
              r = 0 | w[e - 15],
              i = g.rotrSH(t, r, 1) ^ g.rotrSH(t, r, 8) ^ g.shrSH(t, r, 7),
              s = g.rotrSL(t, r, 1) ^ g.rotrSL(t, r, 8) ^ g.shrSL(t, r, 7),
              n = 0 | b[e - 2],
              o = 0 | w[e - 2],
              a = g.rotrSH(n, o, 19) ^ g.rotrBH(n, o, 61) ^ g.shrSH(n, o, 6),
              c = g.rotrSL(n, o, 19) ^ g.rotrBL(n, o, 61) ^ g.shrSL(n, o, 6),
              l = g.add4L(s, c, w[e - 7], w[e - 16]),
              h = g.add4H(l, i, a, b[e - 7], b[e - 16]);
            (b[e] = 0 | h), (w[e] = 0 | l);
          }
          let {
            Ah: r,
            Al: i,
            Bh: s,
            Bl: n,
            Ch: o,
            Cl: a,
            Dh: c,
            Dl: l,
            Eh: h,
            El: u,
            Fh: d,
            Fl: p,
            Gh: f,
            Gl: v,
            Hh: E,
            Hl: I,
          } = this;
          for (let e = 0; e < 80; e++) {
            let t =
                g.rotrSH(h, u, 14) ^ g.rotrSH(h, u, 18) ^ g.rotrBH(h, u, 41),
              _ = g.rotrSL(h, u, 14) ^ g.rotrSL(h, u, 18) ^ g.rotrBL(h, u, 41),
              x = (h & d) ^ (~h & f),
              D = (u & p) ^ (~u & v),
              P = g.add5L(I, _, D, m[e], w[e]),
              S = g.add5H(P, E, t, x, y[e], b[e]),
              O = 0 | P,
              A = g.rotrSH(r, i, 28) ^ g.rotrBH(r, i, 34) ^ g.rotrBH(r, i, 39),
              C = g.rotrSL(r, i, 28) ^ g.rotrBL(r, i, 34) ^ g.rotrBL(r, i, 39),
              R = (r & s) ^ (r & o) ^ (s & o),
              T = (i & n) ^ (i & a) ^ (n & a);
            (E = 0 | f),
              (I = 0 | v),
              (f = 0 | d),
              (v = 0 | p),
              (d = 0 | h),
              (p = 0 | u),
              ({ h: h, l: u } = g.add(0 | c, 0 | l, 0 | S, 0 | O)),
              (c = 0 | o),
              (l = 0 | a),
              (o = 0 | s),
              (a = 0 | n),
              (s = 0 | r),
              (n = 0 | i);
            let N = g.add3L(O, C, T);
            (r = g.add3H(N, S, A, R)), (i = 0 | N);
          }
          ({ h: r, l: i } = g.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | i)),
            ({ h: s, l: n } = g.add(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | n)),
            ({ h: o, l: a } = g.add(0 | this.Ch, 0 | this.Cl, 0 | o, 0 | a)),
            ({ h: c, l: l } = g.add(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | l)),
            ({ h: h, l: u } = g.add(0 | this.Eh, 0 | this.El, 0 | h, 0 | u)),
            ({ h: d, l: p } = g.add(0 | this.Fh, 0 | this.Fl, 0 | d, 0 | p)),
            ({ h: f, l: v } = g.add(0 | this.Gh, 0 | this.Gl, 0 | f, 0 | v)),
            ({ h: E, l: I } = g.add(0 | this.Hh, 0 | this.Hl, 0 | E, 0 | I)),
            this.set(r, i, s, n, o, a, c, l, h, u, d, p, f, v, E, I);
        }
        roundClean() {
          b.fill(0), w.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      let E = (function (e) {
          let t = (t) => e().update(l(t)).digest(),
            r = e();
          return (
            (t.outputLen = r.outputLen),
            (t.blockLen = r.blockLen),
            (t.create = () => e()),
            t
          );
        })(() => new v()),
        I = BigInt(0),
        _ = BigInt(1),
        x = BigInt(2);
      function D(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function P(e) {
        if (!D(e)) throw Error("Uint8Array expected");
      }
      function S(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      let O = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function A(e) {
        P(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += O[e[r]];
        return t;
      }
      function C(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? I : BigInt("0x" + e);
      }
      let R = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function T(e) {
        return e >= R._0 && e <= R._9
          ? e - R._0
          : e >= R.A && e <= R.F
          ? e - (R.A - 10)
          : e >= R.a && e <= R.f
          ? e - (R.a - 10)
          : void 0;
      }
      function N(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length,
          r = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let i = new Uint8Array(r);
        for (let t = 0, s = 0; t < r; t++, s += 2) {
          let r = T(e.charCodeAt(s)),
            n = T(e.charCodeAt(s + 1));
          if (void 0 === r || void 0 === n)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[s] + e[s + 1]) +
                '" at index ' +
                s
            );
          i[t] = 16 * r + n;
        }
        return i;
      }
      function j(e) {
        return P(e), C(A(Uint8Array.from(e).reverse()));
      }
      function U(e, t) {
        return N(e.toString(16).padStart(2 * t, "0"));
      }
      function L(e, t) {
        return U(e, t).reverse();
      }
      function k(e, t, r) {
        let i;
        if ("string" == typeof t)
          try {
            i = N(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if (D(t)) i = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let s = i.length;
        if ("number" == typeof r && s !== r)
          throw Error(e + " of length " + r + " expected, got " + s);
        return i;
      }
      function q(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let i = e[r];
          P(i), (t += i.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, i = 0; t < e.length; t++) {
          let s = e[t];
          r.set(s, i), (i += s.length);
        }
        return r;
      }
      let B = (e) => "bigint" == typeof e && I <= e;
      function $(e, t, r, i) {
        if (!(B(t) && B(r) && B(i)) || !(r <= t) || !(t < i))
          throw Error(
            "expected valid " + e + ": " + r + " <= n < " + i + ", got " + t
          );
      }
      let M = (e) => (x << BigInt(e - 1)) - _,
        z = {
          bigint: (e) => "bigint" == typeof e,
          function: (e) => "function" == typeof e,
          boolean: (e) => "boolean" == typeof e,
          string: (e) => "string" == typeof e,
          stringOrUint8Array: (e) => "string" == typeof e || D(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) =>
            "function" == typeof e && Number.isSafeInteger(e.outputLen),
        };
      function F(e, t, r = {}) {
        let i = (t, r, i) => {
          let s = z[r];
          if ("function" != typeof s) throw Error("invalid validator function");
          let n = e[t];
          if (!(i && void 0 === n) && !s(n, e))
            throw Error(
              "param " + String(t) + " is invalid. Expected " + r + ", got " + n
            );
        };
        for (let [e, r] of Object.entries(t)) i(e, r, !1);
        for (let [e, t] of Object.entries(r)) i(e, t, !0);
        return e;
      }
      function H(e) {
        let t = new WeakMap();
        return (r, ...i) => {
          let s = t.get(r);
          if (void 0 !== s) return s;
          let n = e(r, ...i);
          return t.set(r, n), n;
        };
      }
      let V = BigInt(0),
        K = BigInt(1),
        W = BigInt(2),
        J = BigInt(3),
        G = BigInt(4),
        Y = BigInt(5),
        Z = BigInt(8);
      function Q(e, t) {
        let r = e % t;
        return r >= V ? r : t + r;
      }
      function X(e, t, r) {
        let i = e;
        for (; t-- > V; ) (i *= i), (i %= r);
        return i;
      }
      function ee(e, t) {
        if (e === V) throw Error("invert: expected non-zero number");
        if (t <= V) throw Error("invert: expected positive modulus, got " + t);
        let r = Q(e, t),
          i = t,
          s = V,
          n = K;
        for (; r !== V; ) {
          let e = i / r,
            t = i % r,
            o = s - n * e;
          (i = r), (r = t), (s = n), (n = o);
        }
        if (i !== K) throw Error("invert: does not exist");
        return Q(s, t);
      }
      let et = (e, t) => (Q(e, t) & K) === K,
        er = [
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
      function ei(e, t) {
        let r = void 0 !== t ? t : e.toString(2).length,
          i = Math.ceil(r / 8);
        return { nBitLength: r, nByteLength: i };
      }
      function es(e, t, r = !1, i = {}) {
        let s;
        if (e <= V) throw Error("invalid field: expected ORDER > 0, got " + e);
        let { nBitLength: n, nByteLength: o } = ei(e, t);
        if (o > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let a = Object.freeze({
          ORDER: e,
          isLE: r,
          BITS: n,
          BYTES: o,
          MASK: M(n),
          ZERO: V,
          ONE: K,
          create: (t) => Q(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return V <= t && t < e;
          },
          is0: (e) => e === V,
          isOdd: (e) => (e & K) === K,
          neg: (t) => Q(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => Q(t * t, e),
          add: (t, r) => Q(t + r, e),
          sub: (t, r) => Q(t - r, e),
          mul: (t, r) => Q(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < V) throw Error("invalid exponent, negatives unsupported");
              if (r === V) return e.ONE;
              if (r === K) return t;
              let i = e.ONE,
                s = t;
              for (; r > V; )
                r & K && (i = e.mul(i, s)), (s = e.sqr(s)), (r >>= K);
              return i;
            })(a, e, t),
          div: (t, r) => Q(t * ee(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => ee(t, e),
          sqrt:
            i.sqrt ||
            ((t) => (
              s ||
                (s = (function (e) {
                  if (e % G === J) {
                    let t = (e + K) / G;
                    return function (e, r) {
                      let i = e.pow(r, t);
                      if (!e.eql(e.sqr(i), r))
                        throw Error("Cannot find square root");
                      return i;
                    };
                  }
                  if (e % Z === Y) {
                    let t = (e - Y) / Z;
                    return function (e, r) {
                      let i = e.mul(r, W),
                        s = e.pow(i, t),
                        n = e.mul(r, s),
                        o = e.mul(e.mul(n, W), s),
                        a = e.mul(n, e.sub(o, e.ONE));
                      if (!e.eql(e.sqr(a), r))
                        throw Error("Cannot find square root");
                      return a;
                    };
                  }
                  return (function (e) {
                    let t,
                      r,
                      i,
                      s = (e - K) / W;
                    for (t = e - K, r = 0; t % W === V; t /= W, r++);
                    for (
                      i = W;
                      i < e &&
                      (function (e, t, r) {
                        if (t < V)
                          throw Error(
                            "invalid exponent, negatives unsupported"
                          );
                        if (r <= V) throw Error("invalid modulus");
                        if (r === K) return V;
                        let i = K;
                        for (; t > V; )
                          t & K && (i = (i * e) % r),
                            (e = (e * e) % r),
                            (t >>= K);
                        return i;
                      })(i, s, e) !==
                        e - K;
                      i++
                    )
                      if (i > 1e3)
                        throw Error(
                          "Cannot find square root: likely non-prime P"
                        );
                    if (1 === r) {
                      let t = (e + K) / G;
                      return function (e, r) {
                        let i = e.pow(r, t);
                        if (!e.eql(e.sqr(i), r))
                          throw Error("Cannot find square root");
                        return i;
                      };
                    }
                    let n = (t + K) / W;
                    return function (e, o) {
                      if (e.pow(o, s) === e.neg(e.ONE))
                        throw Error("Cannot find square root");
                      let a = r,
                        c = e.pow(e.mul(e.ONE, i), t),
                        l = e.pow(o, n),
                        h = e.pow(o, t);
                      for (; !e.eql(h, e.ONE); ) {
                        if (e.eql(h, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let r = e.sqr(h); t < a && !e.eql(r, e.ONE); t++)
                          r = e.sqr(r);
                        let r = e.pow(c, K << BigInt(a - t - 1));
                        (c = e.sqr(r)),
                          (l = e.mul(l, r)),
                          (h = e.mul(h, c)),
                          (a = t);
                      }
                      return l;
                    };
                  })(e);
                })(e)),
              s(a, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let r = Array(t.length),
                i = t.reduce(
                  (t, i, s) => (e.is0(i) ? t : ((r[s] = t), e.mul(t, i))),
                  e.ONE
                ),
                s = e.inv(i);
              return (
                t.reduceRight(
                  (t, i, s) =>
                    e.is0(i) ? t : ((r[s] = e.mul(t, r[s])), e.mul(t, i)),
                  s
                ),
                r
              );
            })(a, e),
          cmov: (e, t, r) => (r ? t : e),
          toBytes: (e) => (r ? L(e, o) : U(e, o)),
          fromBytes: (e) => {
            if (e.length !== o)
              throw Error(
                "Field.fromBytes: expected " + o + " bytes, got " + e.length
              );
            return r ? j(e) : C(A(e));
          },
        });
        return Object.freeze(a);
      }
      let en = BigInt(0),
        eo = BigInt(1);
      function ea(e, t) {
        let r = t.negate();
        return e ? r : t;
      }
      function ec(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function el(e, t) {
        return (
          ec(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) }
        );
      }
      let eh = new WeakMap(),
        eu = new WeakMap();
      function ed(e) {
        return eu.get(e) || 1;
      }
      let ep = BigInt(0),
        ef = BigInt(1),
        eg = BigInt(2),
        ey = BigInt(8),
        em = { zip215: !0 };
      BigInt(0), BigInt(1);
      let eb = BigInt(
          "57896044618658097711785492504343953926634992332820282019728792003956564819949"
        ),
        ew = BigInt(
          "19681161376707505956807079304988542015446066515923890162744021073123829784752"
        );
      BigInt(0);
      let ev = BigInt(1),
        eE = BigInt(2);
      BigInt(3);
      let eI = BigInt(5),
        e_ = BigInt(8),
        ex = es(eb, void 0, !0),
        eD = (function (e) {
          var t;
          let r = (function (e) {
              let t =
                (F(
                  e.Fp,
                  er.reduce((e, t) => ((e[t] = "function"), e), {
                    ORDER: "bigint",
                    MASK: "bigint",
                    BYTES: "isSafeInteger",
                    BITS: "isSafeInteger",
                  })
                ),
                F(
                  e,
                  { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
                  { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
                ),
                Object.freeze({
                  ...ei(e.n, e.nBitLength),
                  ...e,
                  p: e.Fp.ORDER,
                }));
              return (
                F(
                  e,
                  {
                    hash: "function",
                    a: "bigint",
                    d: "bigint",
                    randomBytes: "function",
                  },
                  {
                    adjustScalarBytes: "function",
                    domain: "function",
                    uvRatio: "function",
                    mapToCurve: "function",
                  }
                ),
                Object.freeze({ ...t })
              );
            })(e),
            {
              Fp: i,
              n: s,
              prehash: n,
              hash: o,
              randomBytes: a,
              nByteLength: c,
              h: l,
            } = r,
            h = eg << (BigInt(8 * c) - ef),
            u = i.create,
            d = es(r.n, r.nBitLength),
            p =
              r.uvRatio ||
              ((e, t) => {
                try {
                  return { isValid: !0, value: i.sqrt(e * i.inv(t)) };
                } catch {
                  return { isValid: !1, value: ep };
                }
              }),
            f = r.adjustScalarBytes || ((e) => e),
            g =
              r.domain ||
              ((e, t, r) => {
                if ((S("phflag", r), t.length || r))
                  throw Error("Contexts/pre-hash are not supported");
                return e;
              });
          function y(e, t) {
            $("coordinate " + e, t, ep, h);
          }
          function m(e) {
            if (!(e instanceof v)) throw Error("ExtendedPoint expected");
          }
          let b = H((e, t) => {
              let { ex: r, ey: s, ez: n } = e,
                o = e.is0();
              null == t && (t = o ? ey : i.inv(n));
              let a = u(r * t),
                c = u(s * t),
                l = u(n * t);
              if (o) return { x: ep, y: ef };
              if (l !== ef) throw Error("invZ was invalid");
              return { x: a, y: c };
            }),
            w = H((e) => {
              let { a: t, d: i } = r;
              if (e.is0()) throw Error("bad point: ZERO");
              let { ex: s, ey: n, ez: o, et: a } = e,
                c = u(s * s),
                l = u(n * n),
                h = u(o * o),
                d = u(h * h),
                p = u(c * t);
              if (u(h * u(p + l)) !== u(d + u(i * u(c * l))))
                throw Error("bad point: equation left != right (1)");
              if (u(s * n) !== u(o * a))
                throw Error("bad point: equation left != right (2)");
              return !0;
            });
          class v {
            constructor(e, t, r, i) {
              (this.ex = e),
                (this.ey = t),
                (this.ez = r),
                (this.et = i),
                y("x", e),
                y("y", t),
                y("z", r),
                y("t", i),
                Object.freeze(this);
            }
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            static fromAffine(e) {
              if (e instanceof v) throw Error("extended point not allowed");
              let { x: t, y: r } = e || {};
              return y("x", t), y("y", r), new v(t, r, ef, u(t * r));
            }
            static normalizeZ(e) {
              let t = i.invertBatch(e.map((e) => e.ez));
              return e.map((e, r) => e.toAffine(t[r])).map(v.fromAffine);
            }
            static msm(e, t) {
              return (function (e, t, r, i) {
                if (
                  ((function (e, t) {
                    if (!Array.isArray(e)) throw Error("array expected");
                    e.forEach((e, r) => {
                      if (!(e instanceof t))
                        throw Error("invalid point at index " + r);
                    });
                  })(r, e),
                  (function (e, t) {
                    if (!Array.isArray(e))
                      throw Error("array of scalars expected");
                    e.forEach((e, r) => {
                      if (!t.isValid(e))
                        throw Error("invalid scalar at index " + r);
                    });
                  })(i, t),
                  r.length !== i.length)
                )
                  throw Error(
                    "arrays of points and scalars must have equal length"
                  );
                let s = e.ZERO,
                  n = (function (e) {
                    let t;
                    for (t = 0; e > I; e >>= _, t += 1);
                    return t;
                  })(BigInt(r.length)),
                  o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1,
                  a = (1 << o) - 1,
                  c = Array(a + 1).fill(s),
                  l = Math.floor((t.BITS - 1) / o) * o,
                  h = s;
                for (let e = l; e >= 0; e -= o) {
                  c.fill(s);
                  for (let t = 0; t < i.length; t++) {
                    let s = Number((i[t] >> BigInt(e)) & BigInt(a));
                    c[s] = c[s].add(r[t]);
                  }
                  let t = s;
                  for (let e = c.length - 1, r = s; e > 0; e--)
                    (r = r.add(c[e])), (t = t.add(r));
                  if (((h = h.add(t)), 0 !== e))
                    for (let e = 0; e < o; e++) h = h.double();
                }
                return h;
              })(v, d, e, t);
            }
            _setWindowSize(e) {
              D.setWindowSize(this, e);
            }
            assertValidity() {
              w(this);
            }
            equals(e) {
              m(e);
              let { ex: t, ey: r, ez: i } = this,
                { ex: s, ey: n, ez: o } = e,
                a = u(t * o),
                c = u(s * i),
                l = u(r * o),
                h = u(n * i);
              return a === c && l === h;
            }
            is0() {
              return this.equals(v.ZERO);
            }
            negate() {
              return new v(u(-this.ex), this.ey, this.ez, u(-this.et));
            }
            double() {
              let { a: e } = r,
                { ex: t, ey: i, ez: s } = this,
                n = u(t * t),
                o = u(i * i),
                a = u(eg * u(s * s)),
                c = u(e * n),
                l = t + i,
                h = u(u(l * l) - n - o),
                d = c + o,
                p = d - a,
                f = c - o,
                g = u(h * p),
                y = u(d * f),
                m = u(h * f);
              return new v(g, y, u(p * d), m);
            }
            add(e) {
              m(e);
              let { a: t, d: i } = r,
                { ex: s, ey: n, ez: o, et: a } = this,
                { ex: c, ey: l, ez: h, et: d } = e;
              if (t === BigInt(-1)) {
                let e = u((n - s) * (l + c)),
                  t = u((n + s) * (l - c)),
                  r = u(t - e);
                if (r === ep) return this.double();
                let i = u(o * eg * d),
                  p = u(a * eg * h),
                  f = p + i,
                  g = t + e,
                  y = p - i,
                  m = u(f * r),
                  b = u(g * y),
                  w = u(f * y);
                return new v(m, b, u(r * g), w);
              }
              let p = u(s * c),
                f = u(n * l),
                g = u(a * i * d),
                y = u(o * h),
                b = u((s + n) * (c + l) - p - f),
                w = y - g,
                E = y + g,
                I = u(f - t * p),
                _ = u(b * w),
                x = u(E * I),
                D = u(b * I);
              return new v(_, x, u(w * E), D);
            }
            subtract(e) {
              return this.add(e.negate());
            }
            wNAF(e) {
              return D.wNAFCached(this, e, v.normalizeZ);
            }
            multiply(e) {
              $("scalar", e, ef, s);
              let { p: t, f: r } = this.wNAF(e);
              return v.normalizeZ([t, r])[0];
            }
            multiplyUnsafe(e, t = v.ZERO) {
              return (
                $("scalar", e, ep, s),
                e === ep
                  ? x
                  : this.is0() || e === ef
                  ? this
                  : D.wNAFCachedUnsafe(this, e, v.normalizeZ, t)
              );
            }
            isSmallOrder() {
              return this.multiplyUnsafe(l).is0();
            }
            isTorsionFree() {
              return D.unsafeLadder(this, s).is0();
            }
            toAffine(e) {
              return b(this, e);
            }
            clearCofactor() {
              let { h: e } = r;
              return e === ef ? this : this.multiplyUnsafe(e);
            }
            static fromHex(e, t = !1) {
              let { d: s, a: n } = r,
                o = i.BYTES;
              (e = k("pointHex", e, o)), S("zip215", t);
              let a = e.slice(),
                c = e[o - 1];
              a[o - 1] = -129 & c;
              let l = j(a);
              $("pointHex.y", l, ep, t ? h : i.ORDER);
              let d = u(l * l),
                { isValid: f, value: g } = p(u(d - ef), u(s * d - n));
              if (!f) throw Error("Point.fromHex: invalid y coordinate");
              let y = (g & ef) === ef,
                m = (128 & c) != 0;
              if (!t && g === ep && m)
                throw Error("Point.fromHex: x=0 and x_0=1");
              return m !== y && (g = u(-g)), v.fromAffine({ x: g, y: l });
            }
            static fromPrivateKey(e) {
              return P(e).point;
            }
            toRawBytes() {
              let { x: e, y: t } = this.toAffine(),
                r = L(t, i.BYTES);
              return (r[r.length - 1] |= e & ef ? 128 : 0), r;
            }
            toHex() {
              return A(this.toRawBytes());
            }
          }
          (v.BASE = new v(r.Gx, r.Gy, ef, u(r.Gx * r.Gy))),
            (v.ZERO = new v(ep, ef, ef, ep));
          let { BASE: E, ZERO: x } = v,
            D =
              ((t = 8 * c),
              {
                constTimeNegate: ea,
                hasPrecomputes: (e) => 1 !== ed(e),
                unsafeLadder(e, t, r = v.ZERO) {
                  let i = e;
                  for (; t > en; )
                    t & eo && (r = r.add(i)), (i = i.double()), (t >>= eo);
                  return r;
                },
                precomputeWindow(e, r) {
                  let { windows: i, windowSize: s } = el(r, t),
                    n = [],
                    o = e,
                    a = o;
                  for (let e = 0; e < i; e++) {
                    (a = o), n.push(a);
                    for (let e = 1; e < s; e++) (a = a.add(o)), n.push(a);
                    o = a.double();
                  }
                  return n;
                },
                wNAF(e, r, i) {
                  let { windows: s, windowSize: n } = el(e, t),
                    o = v.ZERO,
                    a = v.BASE,
                    c = BigInt(2 ** e - 1),
                    l = 2 ** e,
                    h = BigInt(e);
                  for (let e = 0; e < s; e++) {
                    let t = e * n,
                      s = Number(i & c);
                    (i >>= h), s > n && ((s -= l), (i += eo));
                    let u = t + Math.abs(s) - 1,
                      d = e % 2 != 0,
                      p = s < 0;
                    0 === s
                      ? (a = a.add(ea(d, r[t])))
                      : (o = o.add(ea(p, r[u])));
                  }
                  return { p: o, f: a };
                },
                wNAFUnsafe(e, r, i, s = v.ZERO) {
                  let { windows: n, windowSize: o } = el(e, t),
                    a = BigInt(2 ** e - 1),
                    c = 2 ** e,
                    l = BigInt(e);
                  for (let e = 0; e < n; e++) {
                    let t = e * o;
                    if (i === en) break;
                    let n = Number(i & a);
                    if (((i >>= l), n > o && ((n -= c), (i += eo)), 0 === n))
                      continue;
                    let h = r[t + Math.abs(n) - 1];
                    n < 0 && (h = h.negate()), (s = s.add(h));
                  }
                  return s;
                },
                getPrecomputes(e, t, r) {
                  let i = eh.get(t);
                  return (
                    i ||
                      ((i = this.precomputeWindow(t, e)),
                      1 !== e && eh.set(t, r(i))),
                    i
                  );
                },
                wNAFCached(e, t, r) {
                  let i = ed(e);
                  return this.wNAF(i, this.getPrecomputes(i, e, r), t);
                },
                wNAFCachedUnsafe(e, t, r, i) {
                  let s = ed(e);
                  return 1 === s
                    ? this.unsafeLadder(e, t, i)
                    : this.wNAFUnsafe(s, this.getPrecomputes(s, e, r), t, i);
                },
                setWindowSize(e, r) {
                  ec(r, t), eu.set(e, r), eh.delete(e);
                },
              });
          function P(e) {
            let t = i.BYTES;
            e = k("private key", e, t);
            let r = k("hashed private key", o(e), 2 * t),
              n = f(r.slice(0, t)),
              a = r.slice(t, 2 * t),
              c = Q(j(n), s),
              l = E.multiply(c),
              h = l.toRawBytes();
            return { head: n, prefix: a, scalar: c, point: l, pointBytes: h };
          }
          function O(e = new Uint8Array(), ...t) {
            return Q(j(o(g(q(...t), k("context", e), !!n))), s);
          }
          return (
            E._setWindowSize(8),
            {
              CURVE: r,
              getPublicKey: function (e) {
                return P(e).pointBytes;
              },
              sign: function (e, t, r = {}) {
                (e = k("message", e)), n && (e = n(e));
                let { prefix: o, scalar: a, pointBytes: c } = P(t),
                  l = O(r.context, o, e),
                  h = E.multiply(l).toRawBytes(),
                  u = Q(l + O(r.context, h, c, e) * a, s);
                return (
                  $("signature.s", u, ep, s),
                  k("result", q(h, L(u, i.BYTES)), 2 * i.BYTES)
                );
              },
              verify: function (e, t, r, s = em) {
                let o,
                  a,
                  c,
                  { context: l, zip215: h } = s,
                  u = i.BYTES;
                (e = k("signature", e, 2 * u)),
                  (t = k("message", t)),
                  (r = k("publicKey", r, u)),
                  void 0 !== h && S("zip215", h),
                  n && (t = n(t));
                let d = j(e.slice(u, 2 * u));
                try {
                  (o = v.fromHex(r, h)),
                    (a = v.fromHex(e.slice(0, u), h)),
                    (c = E.multiplyUnsafe(d));
                } catch {
                  return !1;
                }
                if (!h && o.isSmallOrder()) return !1;
                let p = O(l, a.toRawBytes(), o.toRawBytes(), t);
                return a
                  .add(o.multiplyUnsafe(p))
                  .subtract(c)
                  .clearCofactor()
                  .equals(v.ZERO);
              },
              ExtendedPoint: v,
              utils: {
                getExtendedPublicKey: P,
                randomPrivateKey: () => a(i.BYTES),
                precompute: (e = 8, t = v.BASE) => (
                  t._setWindowSize(e), t.multiply(BigInt(3)), t
                ),
              },
            }
          );
        })({
          a: BigInt(-1),
          d: BigInt(
            "37095705934669439343138083508754565189542113879843219016388785533085940283555"
          ),
          Fp: ex,
          n: BigInt(
            "7237005577332262213973186563042994240857116359379907606001950938285454250989"
          ),
          h: e_,
          Gx: BigInt(
            "15112221349535400772501151409588531511454012693041857206046113283949847762202"
          ),
          Gy: BigInt(
            "46316835694926478169428394003475163141307993866256225615783033603165251855960"
          ),
          hash: E,
          randomBytes: u,
          adjustScalarBytes: function (e) {
            return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
          },
          uvRatio: function (e, t) {
            let r = Q(t * t * t, eb),
              i = (function (e) {
                let t = BigInt(10),
                  r = BigInt(20),
                  i = BigInt(40),
                  s = BigInt(80),
                  n = (((e * e) % eb) * e) % eb,
                  o = (X(n, eE, eb) * n) % eb,
                  a = (X(o, ev, eb) * e) % eb,
                  c = (X(a, eI, eb) * a) % eb,
                  l = (X(c, t, eb) * c) % eb,
                  h = (X(l, r, eb) * l) % eb,
                  u = (X(h, i, eb) * h) % eb,
                  d = (X(u, s, eb) * u) % eb,
                  p = (X(d, s, eb) * u) % eb,
                  f = (X(p, t, eb) * c) % eb;
                return { pow_p_5_8: (X(f, eE, eb) * e) % eb, b2: n };
              })(e * Q(r * r * t, eb)).pow_p_5_8,
              s = Q(e * r * i, eb),
              n = Q(t * s * s, eb),
              o = s,
              a = Q(s * ew, eb),
              c = n === e,
              l = n === Q(-e, eb),
              h = n === Q(-e * ew, eb);
            return (
              c && (s = o),
              (l || h) && (s = a),
              et(s, eb) && (s = Q(-s, eb)),
              { isValid: c || l, value: s }
            );
          },
        }),
        eP = "base64url",
        eS = "utf8",
        eO = "utf8",
        eA = "base58btc";
      function eC(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function eR(e = 0) {
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? eC(globalThis.Buffer.allocUnsafe(e))
          : new Uint8Array(e);
      }
      function eT(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let r = eR(t),
          i = 0;
        for (let t of e) r.set(t, i), (i += t.length);
        return eC(r);
      }
      var eN = function (e, t) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var s = 0; s < e.length; s++) {
          var n = e.charAt(s),
            o = n.charCodeAt(0);
          if (255 !== r[o]) throw TypeError(n + " is ambiguous");
          r[o] = s;
        }
        var a = e.length,
          c = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function u(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (" " !== e[0]) {
            for (var i = 0, s = 0; e[t] === c; ) i++, t++;
            for (
              var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n);
              e[t];

            ) {
              var h = r[e.charCodeAt(t)];
              if (255 === h) return;
              for (
                var u = 0, d = n - 1;
                (0 !== h || u < s) && -1 !== d;
                d--, u++
              )
                (h += (a * o[d]) >>> 0),
                  (o[d] = h % 256 >>> 0),
                  (h = (h / 256) >>> 0);
              if (0 !== h) throw Error("Non-zero carry");
              (s = u), t++;
            }
            if (" " !== e[t]) {
              for (var p = n - s; p !== n && 0 === o[p]; ) p++;
              for (var f = new Uint8Array(i + (n - p)), g = i; p !== n; )
                f[g++] = o[p++];
              return f;
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
            for (var r = 0, i = 0, s = 0, n = t.length; s !== n && 0 === t[s]; )
              s++, r++;
            for (
              var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o);
              s !== n;

            ) {
              for (
                var u = t[s], d = 0, p = o - 1;
                (0 !== u || d < i) && -1 !== p;
                p--, d++
              )
                (u += (256 * l[p]) >>> 0),
                  (l[p] = u % a >>> 0),
                  (u = (u / a) >>> 0);
              if (0 !== u) throw Error("Non-zero carry");
              (i = d), s++;
            }
            for (var f = o - i; f !== o && 0 === l[f]; ) f++;
            for (var g = c.repeat(r); f < o; ++f) g += e.charAt(l[f]);
            return g;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var r = u(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let ej = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        eU = (e) => new TextEncoder().encode(e),
        eL = (e) => new TextDecoder().decode(e);
      class ek {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class eq {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
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
          return e$(this, e);
        }
      }
      class eB {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return e$(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      let e$ = (e, t) =>
        new eB({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class eM {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new ek(e, t, r)),
            (this.decoder = new eq(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let ez = ({ name: e, prefix: t, encode: r, decode: i }) =>
          new eM(e, t, r, i),
        eF = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: s } = eN(r, t);
          return ez({ prefix: e, name: t, encode: i, decode: (e) => ej(s(e)) });
        },
        eH = (e, t, r, i) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; "=" === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * r) / 8) | 0),
            a = 0,
            c = 0,
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | n),
              (a += r) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a)))
            throw SyntaxError("Unexpected end of data");
          return o;
        },
        eV = (e, t, r) => {
          let i = "=" === t[t.length - 1],
            s = (1 << r) - 1,
            n = "",
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i)
            for (a = (a << 8) | e[i], o += 8; o > r; )
              (o -= r), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (r - o))]), i))
            for (; (n.length * r) & 7; ) n += "=";
          return n;
        },
        eK = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          ez({
            prefix: t,
            name: e,
            encode: (e) => eV(e, i, r),
            decode: (t) => eH(t, i, r, e),
          });
      var eW = Object.freeze({
          __proto__: null,
          identity: ez({
            prefix: "\0",
            name: "identity",
            encode: (e) => eL(e),
            decode: (e) => eU(e),
          }),
        }),
        eJ = Object.freeze({
          __proto__: null,
          base2: eK({
            prefix: "0",
            name: "base2",
            alphabet: "01",
            bitsPerChar: 1,
          }),
        }),
        eG = Object.freeze({
          __proto__: null,
          base8: eK({
            prefix: "7",
            name: "base8",
            alphabet: "01234567",
            bitsPerChar: 3,
          }),
        }),
        eY = Object.freeze({
          __proto__: null,
          base10: eF({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        }),
        eZ = Object.freeze({
          __proto__: null,
          base16: eK({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4,
          }),
          base16upper: eK({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4,
          }),
        });
      let eQ = eK({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        eX = eK({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        e0 = eK({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        e1 = eK({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        e2 = eK({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        e8 = eK({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        e3 = eK({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        });
      var e5 = Object.freeze({
          __proto__: null,
          base32: eQ,
          base32upper: eX,
          base32pad: e0,
          base32padupper: e1,
          base32hex: e2,
          base32hexupper: e8,
          base32hexpad: e3,
          base32hexpadupper: eK({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5,
          }),
          base32z: eK({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5,
          }),
        }),
        e6 = Object.freeze({
          __proto__: null,
          base36: eF({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
          }),
          base36upper: eF({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          }),
        }),
        e4 = Object.freeze({
          __proto__: null,
          base58btc: eF({
            name: "base58btc",
            prefix: "z",
            alphabet:
              "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
          }),
          base58flickr: eF({
            name: "base58flickr",
            prefix: "Z",
            alphabet:
              "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
          }),
        });
      let e9 = eK({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        e7 = eK({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        });
      var te = Object.freeze({
        __proto__: null,
        base64: e9,
        base64pad: e7,
        base64url: eK({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        base64urlpad: eK({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
      });
      let tt = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        tr = tt.reduce((e, t, r) => ((e[r] = t), e), []),
        ti = tt.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      var ts = Object.freeze({
        __proto__: null,
        base256emoji: ez({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => (e += tr[t]), "");
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = ti[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function tn(e, t, r) {
        (t = t || []), (r = r || 0);
        for (var i = r; e >= 0x80000000; )
          (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (tn.bytes = r - i + 1), t;
      }
      function to(e, t) {
        var r,
          i = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o)
            throw ((to.bytes = 0), RangeError("Could not decode varint"));
          (r = e[n++]),
            (i += s < 28 ? (127 & r) << s : (127 & r) * Math.pow(2, s)),
            (s += 7);
        } while (r >= 128);
        return (to.bytes = n - t), i;
      }
      var ta = {
        encode: tn,
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
      let tc = (e, t, r = 0) => (ta.encode(e, t, r), t),
        tl = (e) => ta.encodingLength(e),
        th = (e, t) => {
          let r = t.byteLength,
            i = tl(e),
            s = i + tl(r),
            n = new Uint8Array(s + r);
          return tc(e, n, 0), tc(r, n, i), n.set(t, s), new tu(e, r, t, n);
        };
      class tu {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let td = ({ name: e, code: t, encode: r }) => new tp(e, t, r);
      class tp {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array
              ? th(this.code, t)
              : t.then((e) => th(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      let tf = (e) => async (t) =>
        new Uint8Array(await crypto.subtle.digest(e, t));
      var tg = Object.freeze({
          __proto__: null,
          sha256: td({ name: "sha2-256", code: 18, encode: tf("SHA-256") }),
          sha512: td({ name: "sha2-512", code: 19, encode: tf("SHA-512") }),
        }),
        ty = Object.freeze({
          __proto__: null,
          identity: {
            code: 0,
            name: "identity",
            encode: ej,
            digest: (e) => th(0, ej(e)),
          },
        });
      new TextEncoder(), new TextDecoder();
      let tm = {
        ...eW,
        ...eJ,
        ...eG,
        ...eY,
        ...eZ,
        ...e5,
        ...e6,
        ...e4,
        ...te,
        ...ts,
      };
      function tb(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      ({ ...tg, ...ty });
      let tw = tb(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        tv = tb(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            let t = eR((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        tE = {
          utf8: tw,
          "utf-8": tw,
          hex: tm.base16,
          latin1: tv,
          ascii: tv,
          binary: tv,
          ...tm,
        };
      function tI(e, t = "utf8") {
        let r = tE[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(
              e.buffer,
              e.byteOffset,
              e.byteLength
            ).toString("utf8")
          : r.encoder.encode(e).substring(1);
      }
      function t_(e, t = "utf8") {
        let r = tE[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? eC(globalThis.Buffer.from(e, "utf-8"))
          : r.decoder.decode(`${r.prefix}${e}`);
      }
      function tx(e) {
        return (0, s.j)(tI(t_(e, eP), eS));
      }
      function tD(e) {
        return tI(t_((0, s.h)(e), eS), eP);
      }
      function tP(e) {
        return ["did", "key", "z" + tI(eT([t_("K36", eA), e]), eA)].join(":");
      }
      function tS(e) {
        let t = e.split("."),
          r = tx(t[0]),
          i = tx(t[1]);
        return {
          header: r,
          payload: i,
          signature: t_(t[2], eP),
          data: t_(t.slice(0, 2).join("."), eO),
        };
      }
      function tO(e = u(32)) {
        let t = eD.getPublicKey(e);
        return { secretKey: eT([e, t]), publicKey: t };
      }
      async function tA(e, t, r, s, n = (0, i.fromMiliseconds)(Date.now())) {
        let o = { alg: "EdDSA", typ: "JWT" },
          a = { iss: tP(s.publicKey), sub: e, aud: t, iat: n, exp: n + r },
          c = t_(
            [tD((l = { header: o, payload: a }).header), tD(l.payload)].join(
              "."
            ),
            eO
          );
        var l,
          h = {
            header: o,
            payload: a,
            signature: eD.sign(c, s.secretKey.slice(0, 32)),
          };
        return [tD(h.header), tD(h.payload), tI(h.signature, eP)].join(".");
      }
    },
    31498: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Watch = void 0);
      class r {
        constructor() {
          this.timestamps = new Map();
        }
        start(e) {
          if (this.timestamps.has(e))
            throw Error(`Watch already started for label: ${e}`);
          this.timestamps.set(e, { started: Date.now() });
        }
        stop(e) {
          let t = this.get(e);
          if (void 0 !== t.elapsed)
            throw Error(`Watch already stopped for label: ${e}`);
          let r = Date.now() - t.started;
          this.timestamps.set(e, { started: t.started, elapsed: r });
        }
        get(e) {
          let t = this.timestamps.get(e);
          if (void 0 === t) throw Error(`No timestamp found for label: ${e}`);
          return t;
        }
        elapsed(e) {
          let t = this.get(e);
          return t.elapsed || Date.now() - t.started;
        }
      }
      (t.Watch = r), (t.default = r);
    },
    31507: (e, t, r) => {
      "use strict";
      r.d(t, { xW: () => b, sH: () => eY, dI: () => eZ });
      var i = {};
      r.r(i), r.d(i, { identity: () => j });
      var s = {};
      r.r(s), r.d(s, { base2: () => U });
      var n = {};
      r.r(n), r.d(n, { base8: () => L });
      var o = {};
      r.r(o), r.d(o, { base10: () => k });
      var a = {};
      r.r(a), r.d(a, { base16: () => q, base16upper: () => B });
      var c = {};
      r.r(c),
        r.d(c, {
          base32: () => $,
          base32hex: () => H,
          base32hexpad: () => K,
          base32hexpadupper: () => W,
          base32hexupper: () => V,
          base32pad: () => z,
          base32padupper: () => F,
          base32upper: () => M,
          base32z: () => J,
        });
      var l = {};
      r.r(l), r.d(l, { base36: () => G, base36upper: () => Y });
      var h = {};
      r.r(h), r.d(h, { base58btc: () => Z, base58flickr: () => Q });
      var u = {};
      r.r(u),
        r.d(u, {
          base64: () => X,
          base64pad: () => ee,
          base64url: () => et,
          base64urlpad: () => er,
        });
      var d = {};
      r.r(d), r.d(d, { base256emoji: () => eo });
      var p = {};
      r.r(p), r.d(p, { sha256: () => ev, sha512: () => eE });
      var f = {};
      r.r(f), r.d(f, { identity: () => eI });
      var g = {};
      r.r(g),
        r.d(g, {
          code: () => ex,
          decode: () => eP,
          encode: () => eD,
          name: () => e_,
        });
      var y = {};
      function m(e = 0) {
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? globalThis.Buffer.allocUnsafe(e)
          : new Uint8Array(e);
      }
      function b(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let r = m(t),
          i = 0;
        for (let t of e) r.set(t, i), (i += t.length);
        return r;
      }
      r.r(y),
        r.d(y, {
          code: () => eC,
          decode: () => eT,
          encode: () => eR,
          name: () => eA,
        });
      let w = function (e, t) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var s = 0; s < e.length; s++) {
          var n = e.charAt(s),
            o = n.charCodeAt(0);
          if (255 !== r[o]) throw TypeError(n + " is ambiguous");
          r[o] = s;
        }
        var a = e.length,
          c = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function u(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (" " !== e[0]) {
            for (var i = 0, s = 0; e[t] === c; ) i++, t++;
            for (
              var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n);
              e[t];

            ) {
              var h = r[e.charCodeAt(t)];
              if (255 === h) return;
              for (
                var u = 0, d = n - 1;
                (0 !== h || u < s) && -1 !== d;
                d--, u++
              )
                (h += (a * o[d]) >>> 0),
                  (o[d] = h % 256 >>> 0),
                  (h = (h / 256) >>> 0);
              if (0 !== h) throw Error("Non-zero carry");
              (s = u), t++;
            }
            if (" " !== e[t]) {
              for (var p = n - s; p !== n && 0 === o[p]; ) p++;
              for (var f = new Uint8Array(i + (n - p)), g = i; p !== n; )
                f[g++] = o[p++];
              return f;
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
            for (var r = 0, i = 0, s = 0, n = t.length; s !== n && 0 === t[s]; )
              s++, r++;
            for (
              var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o);
              s !== n;

            ) {
              for (
                var u = t[s], d = 0, p = o - 1;
                (0 !== u || d < i) && -1 !== p;
                p--, d++
              )
                (u += (256 * l[p]) >>> 0),
                  (l[p] = u % a >>> 0),
                  (u = (u / a) >>> 0);
              if (0 !== u) throw Error("Non-zero carry");
              (i = d), s++;
            }
            for (var f = o - i; f !== o && 0 === l[f]; ) f++;
            for (var g = c.repeat(r); f < o; ++f) g += e.charAt(l[f]);
            return g;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var r = u(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      new Uint8Array(0);
      let v = (e, t) => {
          if (e === t) return !0;
          if (e.byteLength !== t.byteLength) return !1;
          for (let r = 0; r < e.byteLength; r++) if (e[r] !== t[r]) return !1;
          return !0;
        },
        E = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        I = (e) => new TextEncoder().encode(e),
        _ = (e) => new TextDecoder().decode(e);
      class x {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class D {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
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
          return S(this, e);
        }
      }
      class P {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return S(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      let S = (e, t) =>
        new P({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class O {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new x(e, t, r)),
            (this.decoder = new D(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let A = ({ name: e, prefix: t, encode: r, decode: i }) =>
          new O(e, t, r, i),
        C = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: s } = w(r, t);
          return A({ prefix: e, name: t, encode: i, decode: (e) => E(s(e)) });
        },
        R = (e, t, r, i) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; "=" === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * r) / 8) | 0),
            a = 0,
            c = 0,
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | n),
              (a += r) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a)))
            throw SyntaxError("Unexpected end of data");
          return o;
        },
        T = (e, t, r) => {
          let i = "=" === t[t.length - 1],
            s = (1 << r) - 1,
            n = "",
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i)
            for (a = (a << 8) | e[i], o += 8; o > r; )
              (o -= r), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (r - o))]), i))
            for (; (n.length * r) & 7; ) n += "=";
          return n;
        },
        N = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          A({
            prefix: t,
            name: e,
            encode: (e) => T(e, i, r),
            decode: (t) => R(t, i, r, e),
          }),
        j = A({
          prefix: "\0",
          name: "identity",
          encode: (e) => _(e),
          decode: (e) => I(e),
        }),
        U = N({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
        L = N({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        }),
        k = C({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        q = N({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        B = N({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        }),
        $ = N({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        M = N({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        z = N({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        F = N({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        H = N({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        V = N({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        K = N({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        W = N({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        J = N({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        }),
        G = C({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        Y = C({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }),
        Z = C({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        Q = C({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        }),
        X = N({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        ee = N({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        et = N({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        er = N({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
        ei = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        es = ei.reduce((e, t, r) => ((e[r] = t), e), []),
        en = ei.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []),
        eo = A({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => (e += es[t]), "");
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = en[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        });
      function ea(e, t, r) {
        t = t || [];
        for (var i = (r = r || 0); e >= 0x80000000; )
          (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (ea.bytes = r - i + 1), t;
      }
      function ec(e, t) {
        var r,
          i = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o)
            throw ((ec.bytes = 0), RangeError("Could not decode varint"));
          (r = e[n++]),
            (i += s < 28 ? (127 & r) << s : (127 & r) * Math.pow(2, s)),
            (s += 7);
        } while (r >= 128);
        return (ec.bytes = n - t), i;
      }
      let el = {
          encode: ea,
          decode: ec,
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
        },
        eh = (e, t = 0) => [el.decode(e, t), el.decode.bytes],
        eu = (e, t, r = 0) => (el.encode(e, t, r), t),
        ed = (e) => el.encodingLength(e),
        ep = (e, t) => {
          let r = t.byteLength,
            i = ed(e),
            s = i + ed(r),
            n = new Uint8Array(s + r);
          return eu(e, n, 0), eu(r, n, i), n.set(t, s), new ey(e, r, t, n);
        },
        ef = (e) => {
          let t = E(e),
            [r, i] = eh(t),
            [s, n] = eh(t.subarray(i)),
            o = t.subarray(i + n);
          if (o.byteLength !== s) throw Error("Incorrect length");
          return new ey(r, s, o, t);
        },
        eg = (e, t) =>
          e === t ||
          (e.code === t.code && e.size === t.size && v(e.bytes, t.bytes));
      class ey {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let em = ({ name: e, code: t, encode: r }) => new eb(e, t, r);
      class eb {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array
              ? ep(this.code, t)
              : t.then((e) => ep(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      let ew = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        ev = em({ name: "sha2-256", code: 18, encode: ew("SHA-256") }),
        eE = em({ name: "sha2-512", code: 19, encode: ew("SHA-512") }),
        eI = {
          code: 0,
          name: "identity",
          encode: E,
          digest: (e) => ep(0, E(e)),
        },
        e_ = "raw",
        ex = 85,
        eD = (e) => E(e),
        eP = (e) => E(e),
        eS = new TextEncoder(),
        eO = new TextDecoder(),
        eA = "json",
        eC = 512,
        eR = (e) => eS.encode(JSON.stringify(e)),
        eT = (e) => JSON.parse(eO.decode(e));
      class eN {
        constructor(e, t, r, i) {
          (this.code = t),
            (this.version = e),
            (this.multihash = r),
            (this.bytes = i),
            (this.byteOffset = i.byteOffset),
            (this.byteLength = i.byteLength),
            (this.asCID = this),
            (this._baseCache = new Map()),
            Object.defineProperties(this, {
              byteOffset: ez,
              byteLength: ez,
              code: eM,
              version: eM,
              multihash: eM,
              bytes: eM,
              _baseCache: ez,
              asCID: ez,
            });
        }
        toV0() {
          if (0 === this.version) return this;
          {
            let { code: e, multihash: t } = this;
            if (e !== ek)
              throw Error("Cannot convert a non dag-pb CID to CIDv0");
            if (t.code !== eq)
              throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");
            return eN.createV0(t);
          }
        }
        toV1() {
          switch (this.version) {
            case 0: {
              let { code: e, digest: t } = this.multihash,
                r = ep(e, t);
              return eN.createV1(this.code, r);
            }
            case 1:
              return this;
            default:
              throw Error(
                `Can not convert CID version ${this.version} to version 0. This is a bug please report`
              );
          }
        }
        equals(e) {
          return (
            e &&
            this.code === e.code &&
            this.version === e.version &&
            eg(this.multihash, e.multihash)
          );
        }
        toString(e) {
          let { bytes: t, version: r, _baseCache: i } = this;
          return 0 === r ? eU(t, i, e || Z.encoder) : eL(t, i, e || $.encoder);
        }
        toJSON() {
          return {
            code: this.code,
            version: this.version,
            hash: this.multihash.bytes,
          };
        }
        get [Symbol.toStringTag]() {
          return "CID";
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return "CID(" + this.toString() + ")";
        }
        static isCID(e) {
          return eF(/^0\.0/, eH), !!(e && (e[e$] || e.asCID === e));
        }
        get toBaseEncodedString() {
          throw Error("Deprecated, use .toString()");
        }
        get codec() {
          throw Error(
            '"codec" property is deprecated, use integer "code" property instead'
          );
        }
        get buffer() {
          throw Error(
            "Deprecated .buffer property, use .bytes to get Uint8Array instead"
          );
        }
        get multibaseName() {
          throw Error('"multibaseName" property is deprecated');
        }
        get prefix() {
          throw Error('"prefix" property is deprecated');
        }
        static asCID(e) {
          if (e instanceof eN) return e;
          if (null != e && e.asCID === e) {
            let { version: t, code: r, multihash: i, bytes: s } = e;
            return new eN(t, r, i, s || eB(t, r, i.bytes));
          }
          if (null == e || !0 !== e[e$]) return null;
          {
            let { version: t, multihash: r, code: i } = e,
              s = ef(r);
            return eN.create(t, i, s);
          }
        }
        static create(e, t, r) {
          if ("number" != typeof t)
            throw Error("String codecs are no longer supported");
          switch (e) {
            case 0:
              if (t === ek) return new eN(e, t, r, r.bytes);
              throw Error(
                `Version 0 CID must use dag-pb (code: ${ek}) block encoding`
              );
            case 1: {
              let i = eB(e, t, r.bytes);
              return new eN(e, t, r, i);
            }
            default:
              throw Error("Invalid version");
          }
        }
        static createV0(e) {
          return eN.create(0, ek, e);
        }
        static createV1(e, t) {
          return eN.create(1, e, t);
        }
        static decode(e) {
          let [t, r] = eN.decodeFirst(e);
          if (r.length) throw Error("Incorrect length");
          return t;
        }
        static decodeFirst(e) {
          let t = eN.inspectBytes(e),
            r = t.size - t.multihashSize,
            i = E(e.subarray(r, r + t.multihashSize));
          if (i.byteLength !== t.multihashSize) throw Error("Incorrect length");
          let s = i.subarray(t.multihashSize - t.digestSize),
            n = new ey(t.multihashCode, t.digestSize, s, i);
          return [
            0 === t.version ? eN.createV0(n) : eN.createV1(t.codec, n),
            e.subarray(t.size),
          ];
        }
        static inspectBytes(e) {
          let t = 0,
            r = () => {
              let [r, i] = eh(e.subarray(t));
              return (t += i), r;
            },
            i = r(),
            s = ek;
          if (
            (18 === i ? ((i = 0), (t = 0)) : 1 === i && (s = r()),
            0 !== i && 1 !== i)
          )
            throw RangeError(`Invalid CID version ${i}`);
          let n = t,
            o = r(),
            a = r(),
            c = t + a;
          return {
            version: i,
            codec: s,
            multihashCode: o,
            digestSize: a,
            multihashSize: c - n,
            size: c,
          };
        }
        static parse(e, t) {
          let [r, i] = ej(e, t),
            s = eN.decode(i);
          return s._baseCache.set(r, e), s;
        }
      }
      let ej = (e, t) => {
          switch (e[0]) {
            case "Q": {
              let r = t || Z;
              return [Z.prefix, r.decode(`${Z.prefix}${e}`)];
            }
            case Z.prefix: {
              let r = t || Z;
              return [Z.prefix, r.decode(e)];
            }
            case $.prefix: {
              let r = t || $;
              return [$.prefix, r.decode(e)];
            }
            default:
              if (null == t)
                throw Error(
                  "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
                );
              return [e[0], t.decode(e)];
          }
        },
        eU = (e, t, r) => {
          let { prefix: i } = r;
          if (i !== Z.prefix)
            throw Error(`Cannot string encode V0 in ${r.name} encoding`);
          let s = t.get(i);
          if (null != s) return s;
          {
            let s = r.encode(e).slice(1);
            return t.set(i, s), s;
          }
        },
        eL = (e, t, r) => {
          let { prefix: i } = r,
            s = t.get(i);
          if (null != s) return s;
          {
            let s = r.encode(e);
            return t.set(i, s), s;
          }
        },
        ek = 112,
        eq = 18,
        eB = (e, t, r) => {
          let i = ed(e),
            s = i + ed(t),
            n = new Uint8Array(s + r.byteLength);
          return eu(e, n, 0), eu(t, n, i), n.set(r, s), n;
        },
        e$ = Symbol.for("@ipld/js-cid/CID"),
        eM = { writable: !1, configurable: !1, enumerable: !0 },
        ez = { writable: !1, enumerable: !1, configurable: !1 },
        eF = (e, t) => {
          if (e.test("0.0.0-dev")) console.warn(t);
          else throw Error(t);
        },
        eH = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,
        eV = { ...i, ...s, ...n, ...o, ...a, ...c, ...l, ...h, ...u, ...d };
      function eK(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      ({ ...p, ...f });
      let eW = eK(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        eJ = eK(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            let t = m((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        eG = {
          utf8: eW,
          "utf-8": eW,
          hex: eV.base16,
          latin1: eJ,
          ascii: eJ,
          binary: eJ,
          ...eV,
        };
      function eY(e, t = "utf8") {
        let r = eG[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e, "utf8")
          : r.decoder.decode(`${r.prefix}${e}`);
      }
      function eZ(e, t = "utf8") {
        let r = eG[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(
              e.buffer,
              e.byteOffset,
              e.byteLength
            ).toString("utf8")
          : r.encoder.encode(e).substring(1);
      }
    },
    32350: (e, t, r) => {
      "use strict";
      r.d(t, { Ay: () => a });
      let i =
          /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        s =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        n = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
      function o(e, t) {
        var r;
        return "__proto__" === e ||
          ("constructor" === e && t && "object" == typeof t && "prototype" in t)
          ? void ((r = e),
            console.warn(
              `[destr] Dropping "${r}" key to prevent prototype pollution.`
            ))
          : t;
      }
      function a(e, t = {}) {
        if ("string" != typeof e) return e;
        if ('"' === e[0] && '"' === e[e.length - 1] && -1 === e.indexOf("\\"))
          return e.slice(1, -1);
        let r = e.trim();
        if (r.length <= 9)
          switch (r.toLowerCase()) {
            case "true":
              return !0;
            case "false":
              return !1;
            case "undefined":
              return;
            case "null":
              return null;
            case "nan":
              return Number.NaN;
            case "infinity":
              return Number.POSITIVE_INFINITY;
            case "-infinity":
              return Number.NEGATIVE_INFINITY;
          }
        if (!n.test(e)) {
          if (t.strict) throw SyntaxError("[destr] Invalid JSON");
          return e;
        }
        try {
          if (i.test(e) || s.test(e)) {
            if (t.strict) throw Error("[destr] Possible prototype pollution");
            return JSON.parse(e, o);
          }
          return JSON.parse(e);
        } catch (r) {
          if (t.strict) throw r;
          return e;
        }
      }
    },
    32732: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(86313);
      i.__exportStar(r(27104), t), i.__exportStar(r(40052), t);
    },
    40052: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fromMiliseconds = t.toMiliseconds = void 0);
      let i = r(64587);
      (t.toMiliseconds = function (e) {
        return e * i.ONE_THOUSAND;
      }),
        (t.fromMiliseconds = function (e) {
          return Math.floor(e / i.ONE_THOUSAND);
        });
    },
    40347: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(86313).__exportStar(r(86156), t);
    },
    40662: (e) => {
      "use strict";
      var t,
        r = "object" == typeof Reflect ? Reflect : null,
        i =
          r && "function" == typeof r.apply
            ? r.apply
            : function (e, t, r) {
                return Function.prototype.apply.call(e, t, r);
              };
      t =
        r && "function" == typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var s =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function n() {
        n.init.call(this);
      }
      (e.exports = n),
        (e.exports.once = function (e, t) {
          return new Promise(function (r, i) {
            var s, n, o;
            function a(r) {
              e.removeListener(t, c), i(r);
            }
            function c() {
              "function" == typeof e.removeListener &&
                e.removeListener("error", a),
                r([].slice.call(arguments));
            }
            g(e, t, c, { once: !0 }),
              "error" !== t &&
                ((s = e),
                (n = a),
                (o = { once: !0 }),
                "function" == typeof s.on && g(s, "error", n, o));
          });
        }),
        (n.EventEmitter = n),
        (n.prototype._events = void 0),
        (n.prototype._eventsCount = 0),
        (n.prototype._maxListeners = void 0);
      var o = 10;
      function a(e) {
        if ("function" != typeof e)
          throw TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function c(e) {
        return void 0 === e._maxListeners
          ? n.defaultMaxListeners
          : e._maxListeners;
      }
      function l(e, t, r, i) {
        if (
          (a(r),
          void 0 === (n = e._events)
            ? ((n = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== n.newListener &&
                (e.emit("newListener", t, r.listener ? r.listener : r),
                (n = e._events)),
              (o = n[t])),
          void 0 === o)
        )
          (o = n[t] = r), ++e._eventsCount;
        else if (
          ("function" == typeof o
            ? (o = n[t] = i ? [r, o] : [o, r])
            : i
            ? o.unshift(r)
            : o.push(r),
          (s = c(e)) > 0 && o.length > s && !o.warned)
        ) {
          o.warned = !0;
          var s,
            n,
            o,
            l = Error(
              "Possible EventEmitter memory leak detected. " +
                o.length +
                " " +
                String(t) +
                " listeners added. Use emitter.setMaxListeners() to increase limit"
            );
          (l.name = "MaxListenersExceededWarning"),
            (l.emitter = e),
            (l.type = t),
            (l.count = o.length),
            console && console.warn && console.warn(l);
        }
        return e;
      }
      function h() {
        if (!this.fired)
          return (this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 == arguments.length)
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments);
      }
      function u(e, t, r) {
        var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
          s = h.bind(i);
        return (s.listener = r), (i.wrapFn = s), s;
      }
      function d(e, t, r) {
        var i = e._events;
        if (void 0 === i) return [];
        var s = i[t];
        return void 0 === s
          ? []
          : "function" == typeof s
          ? r
            ? [s.listener || s]
            : [s]
          : r
          ? (function (e) {
              for (var t = Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
              return t;
            })(s)
          : f(s, s.length);
      }
      function p(e) {
        var t = this._events;
        if (void 0 !== t) {
          var r = t[e];
          if ("function" == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function f(e, t) {
        for (var r = Array(t), i = 0; i < t; ++i) r[i] = e[i];
        return r;
      }
      function g(e, t, r, i) {
        if ("function" == typeof e.on) i.once ? e.once(t, r) : e.on(t, r);
        else if ("function" == typeof e.addEventListener)
          e.addEventListener(t, function s(n) {
            i.once && e.removeEventListener(t, s), r(n);
          });
        else
          throw TypeError(
            'The "emitter" argument must be of type EventEmitter. Received type ' +
              typeof e
          );
      }
      Object.defineProperty(n, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return o;
        },
        set: function (e) {
          if ("number" != typeof e || e < 0 || s(e))
            throw RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          o = e;
        },
      }),
        (n.init = function () {
          (void 0 === this._events ||
            this._events === Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (n.prototype.setMaxListeners = function (e) {
          if ("number" != typeof e || e < 0 || s(e))
            throw RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          return (this._maxListeners = e), this;
        }),
        (n.prototype.getMaxListeners = function () {
          return c(this);
        }),
        (n.prototype.emit = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t.push(arguments[r]);
          var s = "error" === e,
            n = this._events;
          if (void 0 !== n) s = s && void 0 === n.error;
          else if (!s) return !1;
          if (s) {
            if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
            var o,
              a = Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
            throw ((a.context = o), a);
          }
          var c = n[e];
          if (void 0 === c) return !1;
          if ("function" == typeof c) i(c, this, t);
          else
            for (var l = c.length, h = f(c, l), r = 0; r < l; ++r)
              i(h[r], this, t);
          return !0;
        }),
        (n.prototype.addListener = function (e, t) {
          return l(this, e, t, !1);
        }),
        (n.prototype.on = n.prototype.addListener),
        (n.prototype.prependListener = function (e, t) {
          return l(this, e, t, !0);
        }),
        (n.prototype.once = function (e, t) {
          return a(t), this.on(e, u(this, e, t)), this;
        }),
        (n.prototype.prependOnceListener = function (e, t) {
          return a(t), this.prependListener(e, u(this, e, t)), this;
        }),
        (n.prototype.removeListener = function (e, t) {
          var r, i, s, n, o;
          if ((a(t), void 0 === (i = this._events) || void 0 === (r = i[e])))
            return this;
          if (r === t || r.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete i[e],
                i.removeListener &&
                  this.emit("removeListener", e, r.listener || t));
          else if ("function" != typeof r) {
            for (s = -1, n = r.length - 1; n >= 0; n--)
              if (r[n] === t || r[n].listener === t) {
                (o = r[n].listener), (s = n);
                break;
              }
            if (s < 0) return this;
            0 === s
              ? r.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(r, s),
              1 === r.length && (i[e] = r[0]),
              void 0 !== i.removeListener &&
                this.emit("removeListener", e, o || t);
          }
          return this;
        }),
        (n.prototype.off = n.prototype.removeListener),
        (n.prototype.removeAllListeners = function (e) {
          var t, r, i;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 == arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[e]),
              this
            );
          if (0 == arguments.length) {
            var s,
              n = Object.keys(r);
            for (i = 0; i < n.length; ++i)
              "removeListener" !== (s = n[i]) && this.removeAllListeners(s);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (t = r[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
          return this;
        }),
        (n.prototype.listeners = function (e) {
          return d(this, e, !0);
        }),
        (n.prototype.rawListeners = function (e) {
          return d(this, e, !1);
        }),
        (n.listenerCount = function (e, t) {
          return "function" == typeof e.listenerCount
            ? e.listenerCount(t)
            : p.call(e, t);
        }),
        (n.prototype.listenerCount = p),
        (n.prototype.eventNames = function () {
          return this._eventsCount > 0 ? t(this._events) : [];
        });
    },
    42221: (e, t, r) => {
      "use strict";
      r.d(t, { o0: () => p });
      var i = r(49509),
        s = function (e, t, r) {
          if (r || 2 == arguments.length)
            for (var i, s = 0, n = t.length; s < n; s++)
              (!i && s in t) ||
                (i || (i = Array.prototype.slice.call(t, 0, s)), (i[s] = t[s]));
          return e.concat(i || Array.prototype.slice.call(t));
        },
        n = function (e, t, r) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.type = "browser");
        },
        o = function (e) {
          (this.version = e),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = i.platform);
        },
        a = function (e, t, r, i) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.bot = i),
            (this.type = "bot-device");
        },
        c = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        l = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        h =
          /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        u = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            "pie",
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FB[AS]V\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ["curl", /^curl\/([0-9\.]+)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        d = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function p(e) {
        return e
          ? f(e)
          : "undefined" == typeof document &&
            "undefined" != typeof navigator &&
            "ReactNative" === navigator.product
          ? new l()
          : "undefined" != typeof navigator
          ? f(navigator.userAgent)
          : void 0 !== i && i.version
          ? new o(i.version.slice(1))
          : null;
      }
      function f(e) {
        var t,
          r =
            "" !== (t = e) &&
            u.reduce(function (e, r) {
              var i = r[0],
                s = r[1];
              if (e) return e;
              var n = s.exec(t);
              return !!n && [i, n];
            }, !1);
        if (!r) return null;
        var i = r[0],
          o = r[1];
        if ("searchbot" === i) return new c();
        var l = o[1] && o[1].split(".").join("_").split("_").slice(0, 3);
        l
          ? l.length < 3 &&
            (l = s(
              s([], l, !0),
              (function (e) {
                for (var t = [], r = 0; r < e; r++) t.push("0");
                return t;
              })(3 - l.length),
              !0
            ))
          : (l = []);
        var p = l.join("."),
          f = (function (e) {
            for (var t = 0, r = d.length; t < r; t++) {
              var i = d[t],
                s = i[0];
              if (i[1].exec(e)) return s;
            }
            return null;
          })(e),
          g = h.exec(e);
        return g && g[1] ? new a(i, p, f, g[1]) : new n(i, p, f);
      }
    },
    42552: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      let i = (function (e) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        let t = new Uint8Array(256);
        for (let e = 0; e < t.length; e++) t[e] = 255;
        for (let r = 0; r < e.length; r++) {
          let i = e.charAt(r),
            s = i.charCodeAt(0);
          if (255 !== t[s]) throw TypeError(i + " is ambiguous");
          t[s] = r;
        }
        let r = e.length,
          i = e.charAt(0),
          s = Math.log(r) / Math.log(256),
          n = Math.log(256) / Math.log(r);
        function o(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          let n = 0,
            o = 0,
            a = 0;
          for (; e[n] === i; ) o++, n++;
          let c = ((e.length - n) * s + 1) >>> 0,
            l = new Uint8Array(c);
          for (; n < e.length; ) {
            let i = e.charCodeAt(n);
            if (i > 255) return;
            let s = t[i];
            if (255 === s) return;
            let o = 0;
            for (let e = c - 1; (0 !== s || o < a) && -1 !== e; e--, o++)
              (s += (r * l[e]) >>> 0),
                (l[e] = s % 256 >>> 0),
                (s = (s / 256) >>> 0);
            if (0 !== s) throw Error("Non-zero carry");
            (a = o), n++;
          }
          let h = c - a;
          for (; h !== c && 0 === l[h]; ) h++;
          let u = new Uint8Array(o + (c - h)),
            d = o;
          for (; h !== c; ) u[d++] = l[h++];
          return u;
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
            let s = 0,
              o = 0,
              a = 0,
              c = t.length;
            for (; a !== c && 0 === t[a]; ) a++, s++;
            let l = ((c - a) * n + 1) >>> 0,
              h = new Uint8Array(l);
            for (; a !== c; ) {
              let e = t[a],
                i = 0;
              for (let t = l - 1; (0 !== e || i < o) && -1 !== t; t--, i++)
                (e += (256 * h[t]) >>> 0),
                  (h[t] = e % r >>> 0),
                  (e = (e / r) >>> 0);
              if (0 !== e) throw Error("Non-zero carry");
              (o = i), a++;
            }
            let u = l - o;
            for (; u !== l && 0 === h[u]; ) u++;
            let d = i.repeat(s);
            for (; u < l; ++u) d += e.charAt(h[u]);
            return d;
          },
          decodeUnsafe: o,
          decode: function (e) {
            let t = o(e);
            if (t) return t;
            throw Error("Non-base" + r + " character");
          },
        };
      })("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
    },
    44157: (e, t, r) => {
      "use strict";
      r.d(t, { kF: () => n });
      class i {}
      class s extends i {
        constructor() {
          super();
        }
      }
      class n extends s {
        constructor(e) {
          super();
        }
      }
    },
    50836: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ONE_YEAR =
          t.FOUR_WEEKS =
          t.THREE_WEEKS =
          t.TWO_WEEKS =
          t.ONE_WEEK =
          t.THIRTY_DAYS =
          t.SEVEN_DAYS =
          t.FIVE_DAYS =
          t.THREE_DAYS =
          t.ONE_DAY =
          t.TWENTY_FOUR_HOURS =
          t.TWELVE_HOURS =
          t.SIX_HOURS =
          t.THREE_HOURS =
          t.ONE_HOUR =
          t.SIXTY_MINUTES =
          t.THIRTY_MINUTES =
          t.TEN_MINUTES =
          t.FIVE_MINUTES =
          t.ONE_MINUTE =
          t.SIXTY_SECONDS =
          t.THIRTY_SECONDS =
          t.TEN_SECONDS =
          t.FIVE_SECONDS =
          t.ONE_SECOND =
            void 0),
        (t.ONE_SECOND = 1),
        (t.FIVE_SECONDS = 5),
        (t.TEN_SECONDS = 10),
        (t.THIRTY_SECONDS = 30),
        (t.SIXTY_SECONDS = 60),
        (t.ONE_MINUTE = t.SIXTY_SECONDS),
        (t.FIVE_MINUTES = 5 * t.ONE_MINUTE),
        (t.TEN_MINUTES = 10 * t.ONE_MINUTE),
        (t.THIRTY_MINUTES = 30 * t.ONE_MINUTE),
        (t.SIXTY_MINUTES = 60 * t.ONE_MINUTE),
        (t.ONE_HOUR = t.SIXTY_MINUTES),
        (t.THREE_HOURS = 3 * t.ONE_HOUR),
        (t.SIX_HOURS = 6 * t.ONE_HOUR),
        (t.TWELVE_HOURS = 12 * t.ONE_HOUR),
        (t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR),
        (t.ONE_DAY = t.TWENTY_FOUR_HOURS),
        (t.THREE_DAYS = 3 * t.ONE_DAY),
        (t.FIVE_DAYS = 5 * t.ONE_DAY),
        (t.SEVEN_DAYS = 7 * t.ONE_DAY),
        (t.THIRTY_DAYS = 30 * t.ONE_DAY),
        (t.ONE_WEEK = t.SEVEN_DAYS),
        (t.TWO_WEEKS = 2 * t.ONE_WEEK),
        (t.THREE_WEEKS = 3 * t.ONE_WEEK),
        (t.FOUR_WEEKS = 4 * t.ONE_WEEK),
        (t.ONE_YEAR = 365 * t.ONE_DAY);
    },
    52205: (e) => {
      "use strict";
      e.exports = function () {
        throw Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    53428: (e, t, r) => {
      "use strict";
      r.d(t, { eF: () => a, mE: () => s, rI: () => o, vG: () => n });
      var i = r(18067);
      function s(e) {
        return i.jf.includes(e);
      }
      function n(e) {
        return Object.keys(i.Uf).includes(e) ? i.Uf[e] : i.Uf[i.XW];
      }
      function o(e) {
        let t = Object.values(i.Uf).find((t) => t.code === e);
        return t || i.Uf[i.XW];
      }
      function a(e, t, r) {
        return e.message.includes("getaddrinfo ENOTFOUND") ||
          e.message.includes("connect ECONNREFUSED")
          ? Error(`Unavailable ${r} RPC url at ${t}`)
          : e;
      }
    },
    55252: (e, t, r) => {
      "use strict";
      function i() {
        return (
          (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) ||
          (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) ||
          {}
        );
      }
      function s() {
        let e = i();
        return e.subtle || e.webkitSubtle;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowserCryptoAvailable =
          t.getSubtleCrypto =
          t.getBrowerCrypto =
            void 0),
        (t.getBrowerCrypto = i),
        (t.getSubtleCrypto = s),
        (t.isBrowserCryptoAvailable = function () {
          return !!i() && !!s();
        });
    },
    61947: (e, t, r) => {
      "use strict";
      function i(e) {
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
      function n(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        i(e.outputLen), i(e.blockLen);
      }
      function o(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function a(e, t) {
        s(e);
        let r = t.outputLen;
        if (e.length < r)
          throw Error(
            "digestInto() expects output buffer of length at least " + r
          );
      }
      r.d(t, {
        CC: () => o,
        DO: () => s,
        Fe: () => i,
        Ht: () => a,
        sd: () => n,
      });
    },
    64541: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ONE_THOUSAND = t.ONE_HUNDRED = void 0),
        (t.ONE_HUNDRED = 100),
        (t.ONE_THOUSAND = 1e3);
    },
    64587: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(86313);
      i.__exportStar(r(64541), t), i.__exportStar(r(50836), t);
    },
    68928: (e) => {
      "use strict";
      function t(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '"[Circular]"';
        }
      }
      e.exports = function (e, r, i) {
        var s = (i && i.stringify) || t;
        if ("object" == typeof e && null !== e) {
          var n = r.length + 1;
          if (1 === n) return e;
          var o = Array(n);
          o[0] = s(e);
          for (var a = 1; a < n; a++) o[a] = s(r[a]);
          return o.join(" ");
        }
        if ("string" != typeof e) return e;
        var c = r.length;
        if (0 === c) return e;
        for (
          var l = "", h = 0, u = -1, d = (e && e.length) || 0, p = 0;
          p < d;

        ) {
          if (37 === e.charCodeAt(p) && p + 1 < d) {
            switch (((u = u > -1 ? u : 0), e.charCodeAt(p + 1))) {
              case 100:
              case 102:
                if (h >= c || null == r[h]) break;
                u < p && (l += e.slice(u, p)),
                  (l += Number(r[h])),
                  (u = p + 2),
                  p++;
                break;
              case 105:
                if (h >= c || null == r[h]) break;
                u < p && (l += e.slice(u, p)),
                  (l += Math.floor(Number(r[h]))),
                  (u = p + 2),
                  p++;
                break;
              case 79:
              case 111:
              case 106:
                if (h >= c || void 0 === r[h]) break;
                u < p && (l += e.slice(u, p));
                var f = typeof r[h];
                if ("string" === f) {
                  (l += "'" + r[h] + "'"), (u = p + 2), p++;
                  break;
                }
                if ("function" === f) {
                  (l += r[h].name || "<anonymous>"), (u = p + 2), p++;
                  break;
                }
                (l += s(r[h])), (u = p + 2), p++;
                break;
              case 115:
                if (h >= c) break;
                u < p && (l += e.slice(u, p)),
                  (l += String(r[h])),
                  (u = p + 2),
                  p++;
                break;
              case 37:
                u < p && (l += e.slice(u, p)),
                  (l += "%"),
                  (u = p + 2),
                  p++,
                  h--;
            }
            ++h;
          }
          ++p;
        }
        return -1 === u ? e : (u < d && (l += e.slice(u)), l);
      };
    },
    71075: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => o, j: () => n });
      let i = (e) =>
          JSON.stringify(e, (e, t) =>
            "bigint" == typeof t ? t.toString() + "n" : t
          ),
        s = (e) =>
          JSON.parse(
            e.replace(
              /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
              '$1"$2n"$3'
            ),
            (e, t) =>
              "string" == typeof t && t.match(/^\d+n$/)
                ? BigInt(t.substring(0, t.length - 1))
                : t
          );
      function n(e) {
        if ("string" != typeof e)
          throw Error(`Cannot safe json parse value of type ${typeof e}`);
        try {
          return s(e);
        } catch (t) {
          return e;
        }
      }
      function o(e) {
        return "string" == typeof e ? e : i(e) || "";
      }
    },
    75086: (e, t, r) => {
      "use strict";
      r.d(t, {
        IJsonRpcProvider: () => o.kF,
        formatJsonRpcError: () => n.dZ,
        formatJsonRpcRequest: () => n.e_,
        formatJsonRpcResult: () => n.Im,
        getBigIntRpcId: () => n.eX,
        isHttpUrl: () => a.q$,
        isJsonRpcError: () => c.U$,
        isJsonRpcRequest: () => c.p3,
        isJsonRpcResponse: () => c.tq,
        isJsonRpcResult: () => c.xT,
        isLocalhostUrl: () => a.z,
        isWsUrl: () => a.A1,
        parseConnectionError: () => i.eF,
        payloadId: () => n.ER,
      }),
        r(18067);
      var i = r(53428),
        s = r(77401);
      r.o(s, "IJsonRpcProvider") &&
        r.d(t, {
          IJsonRpcProvider: function () {
            return s.IJsonRpcProvider;
          },
        }),
        r.o(s, "formatJsonRpcError") &&
          r.d(t, {
            formatJsonRpcError: function () {
              return s.formatJsonRpcError;
            },
          }),
        r.o(s, "formatJsonRpcRequest") &&
          r.d(t, {
            formatJsonRpcRequest: function () {
              return s.formatJsonRpcRequest;
            },
          }),
        r.o(s, "formatJsonRpcResult") &&
          r.d(t, {
            formatJsonRpcResult: function () {
              return s.formatJsonRpcResult;
            },
          }),
        r.o(s, "getBigIntRpcId") &&
          r.d(t, {
            getBigIntRpcId: function () {
              return s.getBigIntRpcId;
            },
          }),
        r.o(s, "isHttpUrl") &&
          r.d(t, {
            isHttpUrl: function () {
              return s.isHttpUrl;
            },
          }),
        r.o(s, "isJsonRpcError") &&
          r.d(t, {
            isJsonRpcError: function () {
              return s.isJsonRpcError;
            },
          }),
        r.o(s, "isJsonRpcRequest") &&
          r.d(t, {
            isJsonRpcRequest: function () {
              return s.isJsonRpcRequest;
            },
          }),
        r.o(s, "isJsonRpcResponse") &&
          r.d(t, {
            isJsonRpcResponse: function () {
              return s.isJsonRpcResponse;
            },
          }),
        r.o(s, "isJsonRpcResult") &&
          r.d(t, {
            isJsonRpcResult: function () {
              return s.isJsonRpcResult;
            },
          }),
        r.o(s, "isLocalhostUrl") &&
          r.d(t, {
            isLocalhostUrl: function () {
              return s.isLocalhostUrl;
            },
          }),
        r.o(s, "isReactNative") &&
          r.d(t, {
            isReactNative: function () {
              return s.isReactNative;
            },
          }),
        r.o(s, "isWsUrl") &&
          r.d(t, {
            isWsUrl: function () {
              return s.isWsUrl;
            },
          }),
        r.o(s, "payloadId") &&
          r.d(t, {
            payloadId: function () {
              return s.payloadId;
            },
          });
      var n = r(93909),
        o = r(44157),
        a = r(14911),
        c = r(96553);
    },
    76589: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => i });
      class i {}
    },
    77226: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => n });
      var i = r(40662),
        s = r(75086);
      class n extends s.IJsonRpcProvider {
        constructor(e) {
          super(e),
            (this.events = new i.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(e)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect(e = this.connection) {
          await this.open(e);
        }
        async disconnect() {
          await this.close();
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
        async request(e, t) {
          return this.requestStrict(
            (0, s.formatJsonRpcRequest)(
              e.method,
              e.params || [],
              e.id || (0, s.getBigIntRpcId)().toString()
            ),
            t
          );
        }
        async requestStrict(e, t) {
          return new Promise(async (r, i) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (e) {
                i(e);
              }
            this.events.on(`${e.id}`, (e) => {
              (0, s.isJsonRpcError)(e) ? i(e.error) : r(e.result);
            });
            try {
              await this.connection.send(e, t);
            } catch (e) {
              i(e);
            }
          });
        }
        setConnection(e = this.connection) {
          return e;
        }
        onPayload(e) {
          this.events.emit("payload", e),
            (0, s.isJsonRpcResponse)(e)
              ? this.events.emit(`${e.id}`, e)
              : this.events.emit("message", { type: e.method, data: e.params });
        }
        onClose(e) {
          e &&
            3e3 === e.code &&
            this.events.emit(
              "error",
              Error(
                `WebSocket connection closed abnormally with code: ${e.code} ${
                  e.reason ? `(${e.reason})` : ""
                }`
              )
            ),
            this.events.emit("disconnect");
        }
        async open(e = this.connection) {
          (this.connection === e && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" == typeof e &&
              (await this.connection.open(e), (e = this.connection)),
            (this.connection = this.setConnection(e)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (e) => this.onPayload(e)),
            this.connection.on("close", (e) => this.onClose(e)),
            this.connection.on("error", (e) => this.events.emit("error", e)),
            this.connection.on("register_error", (e) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
    },
    77401: (e, t, r) => {
      "use strict";
      var i = r(91203);
      r.o(i, "IJsonRpcProvider") &&
        r.d(t, {
          IJsonRpcProvider: function () {
            return i.IJsonRpcProvider;
          },
        }),
        r.o(i, "formatJsonRpcError") &&
          r.d(t, {
            formatJsonRpcError: function () {
              return i.formatJsonRpcError;
            },
          }),
        r.o(i, "formatJsonRpcRequest") &&
          r.d(t, {
            formatJsonRpcRequest: function () {
              return i.formatJsonRpcRequest;
            },
          }),
        r.o(i, "formatJsonRpcResult") &&
          r.d(t, {
            formatJsonRpcResult: function () {
              return i.formatJsonRpcResult;
            },
          }),
        r.o(i, "getBigIntRpcId") &&
          r.d(t, {
            getBigIntRpcId: function () {
              return i.getBigIntRpcId;
            },
          }),
        r.o(i, "isHttpUrl") &&
          r.d(t, {
            isHttpUrl: function () {
              return i.isHttpUrl;
            },
          }),
        r.o(i, "isJsonRpcError") &&
          r.d(t, {
            isJsonRpcError: function () {
              return i.isJsonRpcError;
            },
          }),
        r.o(i, "isJsonRpcRequest") &&
          r.d(t, {
            isJsonRpcRequest: function () {
              return i.isJsonRpcRequest;
            },
          }),
        r.o(i, "isJsonRpcResponse") &&
          r.d(t, {
            isJsonRpcResponse: function () {
              return i.isJsonRpcResponse;
            },
          }),
        r.o(i, "isJsonRpcResult") &&
          r.d(t, {
            isJsonRpcResult: function () {
              return i.isJsonRpcResult;
            },
          }),
        r.o(i, "isLocalhostUrl") &&
          r.d(t, {
            isLocalhostUrl: function () {
              return i.isLocalhostUrl;
            },
          }),
        r.o(i, "isReactNative") &&
          r.d(t, {
            isReactNative: function () {
              return i.isReactNative;
            },
          }),
        r.o(i, "isWsUrl") &&
          r.d(t, {
            isWsUrl: function () {
              return i.isWsUrl;
            },
          }),
        r.o(i, "payloadId") &&
          r.d(t, {
            payloadId: function () {
              return i.payloadId;
            },
          });
    },
    86156: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IWatch = void 0);
      class r {}
      t.IWatch = r;
    },
    86313: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: () => n,
          __asyncDelegator: () => v,
          __asyncGenerator: () => w,
          __asyncValues: () => E,
          __await: () => b,
          __awaiter: () => h,
          __classPrivateFieldGet: () => D,
          __classPrivateFieldSet: () => P,
          __createBinding: () => d,
          __decorate: () => a,
          __exportStar: () => p,
          __extends: () => s,
          __generator: () => u,
          __importDefault: () => x,
          __importStar: () => _,
          __makeTemplateObject: () => I,
          __metadata: () => l,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => y,
          __spreadArrays: () => m,
          __values: () => f,
        });
      var i = function (e, t) {
        return (i =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
      function s(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var n = function () {
        return (n =
          Object.assign ||
          function (e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
              for (var s in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e;
          }).apply(this, arguments);
      };
      function o(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            0 > t.indexOf(i) &&
            (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var s = 0, i = Object.getOwnPropertySymbols(e);
            s < i.length;
            s++
          )
            0 > t.indexOf(i[s]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
              (r[i[s]] = e[i[s]]);
        return r;
      }
      function a(e, t, r, i) {
        var s,
          n = arguments.length,
          o =
            n < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          o = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (s = e[a]) &&
              (o = (n < 3 ? s(o) : n > 3 ? s(t, r, o) : s(t, r)) || o);
        return n > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function l(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (s, n) {
          function o(e) {
            try {
              c(i.next(e));
            } catch (e) {
              n(e);
            }
          }
          function a(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(o, a);
          }
          c((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          s,
          n,
          o = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (n = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (n[Symbol.iterator] = function () {
              return this;
            }),
          n
        );
        function a(n) {
          return function (a) {
            var c = [n, a];
            if (r) throw TypeError("Generator is already executing.");
            for (; o; )
              try {
                if (
                  ((r = 1),
                  i &&
                    (s =
                      2 & c[0]
                        ? i.return
                        : c[0]
                        ? i.throw || ((s = i.return) && s.call(i), 0)
                        : i.next) &&
                    !(s = s.call(i, c[1])).done)
                )
                  return s;
                switch (((i = 0), s && (c = [2 & c[0], s.value]), c[0])) {
                  case 0:
                  case 1:
                    s = c;
                    break;
                  case 4:
                    return o.label++, { value: c[1], done: !1 };
                  case 5:
                    o.label++, (i = c[1]), (c = [0]);
                    continue;
                  case 7:
                    (c = o.ops.pop()), o.trys.pop();
                    continue;
                  default:
                    if (
                      !(s = (s = o.trys).length > 0 && s[s.length - 1]) &&
                      (6 === c[0] || 2 === c[0])
                    ) {
                      o = 0;
                      continue;
                    }
                    if (3 === c[0] && (!s || (c[1] > s[0] && c[1] < s[3]))) {
                      o.label = c[1];
                      break;
                    }
                    if (6 === c[0] && o.label < s[1]) {
                      (o.label = s[1]), (s = c);
                      break;
                    }
                    if (s && o.label < s[2]) {
                      (o.label = s[2]), o.ops.push(c);
                      break;
                    }
                    s[2] && o.ops.pop(), o.trys.pop();
                    continue;
                }
                c = t.call(e, o);
              } catch (e) {
                (c = [6, e]), (i = 0);
              } finally {
                r = s = 0;
              }
            if (5 & c[0]) throw c[1];
            return { value: c[0] ? c[1] : void 0, done: !0 };
          };
        }
      }
      function d(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function p(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function f(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && i >= e.length && (e = void 0),
                { value: e && e[i++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function g(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          s,
          n = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = n.next()).done; )
            o.push(i.value);
        } catch (e) {
          s = { error: e };
        } finally {
          try {
            i && !i.done && (r = n.return) && r.call(n);
          } finally {
            if (s) throw s.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function m() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        for (var i = Array(e), s = 0, t = 0; t < r; t++)
          for (var n = arguments[t], o = 0, a = n.length; o < a; o++, s++)
            i[s] = n[o];
        return i;
      }
      function b(e) {
        return this instanceof b ? ((this.v = e), this) : new b(e);
      }
      function w(e, t, r) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var i,
          s = r.apply(e, t || []),
          n = [];
        return (
          (i = {}),
          o("next"),
          o("throw"),
          o("return"),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function o(e) {
          s[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                n.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            var r;
            (r = s[e](t)).value instanceof b
              ? Promise.resolve(r.value.v).then(c, l)
              : h(n[0][2], r);
          } catch (e) {
            h(n[0][3], e);
          }
        }
        function c(e) {
          a("next", e);
        }
        function l(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), n.shift(), n.length && a(n[0][0], n[0][1]);
        }
      }
      function v(e) {
        var t, r;
        return (
          (t = {}),
          i("next"),
          i("throw", function (e) {
            throw e;
          }),
          i("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, s) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r)
                  ? { value: b(e[i](t)), done: "return" === i }
                  : s
                  ? s(t)
                  : t;
              }
            : s;
        }
      }
      function E(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = f(e)),
            (t = {}),
            i("next"),
            i("throw"),
            i("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, s) {
                var n, o, a;
                (n = i),
                  (o = s),
                  (a = (t = e[r](t)).done),
                  Promise.resolve(t.value).then(function (e) {
                    n({ value: e, done: a });
                  }, o);
              });
            };
        }
      }
      function I(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function _(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function x(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function D(e, t) {
        if (!t.has(e))
          throw TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function P(e, t, r) {
        if (!t.has(e))
          throw TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    89101: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(86313);
      i.__exportStar(r(32732), t),
        i.__exportStar(r(31498), t),
        i.__exportStar(r(40347), t),
        i.__exportStar(r(64587), t);
    },
    90628: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => l });
      var i = r(40662),
        s = r(71075),
        n = r(75086);
      let o = () =>
          "u" > typeof WebSocket ||
          ("u" > typeof r.g && "u" > typeof r.g.WebSocket) ||
          ("u" > typeof window && "u" > typeof window.WebSocket) ||
          ("u" > typeof self && "u" > typeof self.WebSocket),
        a = (e) => e.split("?")[0],
        c =
          "u" > typeof WebSocket
            ? WebSocket
            : "u" > typeof r.g && "u" > typeof r.g.WebSocket
            ? r.g.WebSocket
            : "u" > typeof window && "u" > typeof window.WebSocket
            ? window.WebSocket
            : "u" > typeof self && "u" > typeof self.WebSocket
            ? self.WebSocket
            : r(52205);
      class l {
        constructor(e) {
          if (
            ((this.url = e),
            (this.events = new i.EventEmitter()),
            (this.registering = !1),
            !(0, n.isWsUrl)(e))
          )
            throw Error(
              `Provided URL is not compatible with WebSocket connection: ${e}`
            );
          this.url = e;
        }
        get connected() {
          return "u" > typeof this.socket;
        }
        get connecting() {
          return this.registering;
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
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          return new Promise((e, t) => {
            if (typeof this.socket > "u")
              return void t(Error("Connection already closed"));
            (this.socket.onclose = (t) => {
              this.onClose(t), e();
            }),
              this.socket.close();
          });
        }
        async send(e) {
          typeof this.socket > "u" && (this.socket = await this.register());
          try {
            this.socket.send((0, s.h)(e));
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        register(e = this.url) {
          if (!(0, n.isWsUrl)(e))
            throw Error(
              `Provided URL is not compatible with WebSocket connection: ${e}`
            );
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if ((this.resetMaxListeners(), typeof this.socket > "u"))
                      return t(
                        Error("WebSocket connection is missing or invalid")
                      );
                    e(this.socket);
                  });
              })
            );
          }
          return (
            (this.url = e),
            (this.registering = !0),
            new Promise((t, r) => {
              let i = (0, n.isReactNative)()
                  ? void 0
                  : { rejectUnauthorized: !(0, n.isLocalhostUrl)(e) },
                s = new c(e, [], i);
              o()
                ? (s.onerror = (e) => {
                    r(this.emitError(e.error));
                  })
                : s.on("error", (e) => {
                    r(this.emitError(e));
                  }),
                (s.onopen = () => {
                  this.onOpen(s), t(s);
                });
            })
          );
        }
        onOpen(e) {
          (e.onmessage = (e) => this.onPayload(e)),
            (e.onclose = (e) => this.onClose(e)),
            (this.socket = e),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose(e) {
          (this.socket = void 0),
            (this.registering = !1),
            this.events.emit("close", e);
        }
        onPayload(e) {
          if (typeof e.data > "u") return;
          let t = "string" == typeof e.data ? (0, s.j)(e.data) : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          let r = this.parseError(t),
            i = r.message || r.toString(),
            s = (0, n.formatJsonRpcError)(e, i);
          this.events.emit("payload", s);
        }
        parseError(e, t = this.url) {
          return (0, n.parseConnectionError)(e, a(t), "WS");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(e) {
          let t = this.parseError(
            Error(
              e?.message ||
                `WebSocket connection failed for host: ${a(this.url)}`
            )
          );
          return this.events.emit("register_error", t), t;
        }
      }
    },
    91203: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(96595);
      i.__exportStar(r(55252), t), i.__exportStar(r(7488), t);
    },
    93909: (e, t, r) => {
      "use strict";
      r.d(t, {
        ER: () => n,
        Im: () => c,
        dZ: () => l,
        eX: () => o,
        e_: () => a,
      });
      var i = r(53428),
        s = r(18067);
      function n(e = 3) {
        return (
          Date.now() * Math.pow(10, e) +
          Math.floor(Math.random() * Math.pow(10, e))
        );
      }
      function o(e = 6) {
        return BigInt(n(e));
      }
      function a(e, t, r) {
        return { id: r || n(), jsonrpc: "2.0", method: e, params: t };
      }
      function c(e, t) {
        return { id: e, jsonrpc: "2.0", result: t };
      }
      function l(e, t, r) {
        var n, o;
        return {
          id: e,
          jsonrpc: "2.0",
          error:
            ((n = t),
            (o = r),
            void 0 === n
              ? (0, i.vG)(s.zR)
              : ("string" == typeof n &&
                  (n = Object.assign(Object.assign({}, (0, i.vG)(s.fO)), {
                    message: n,
                  })),
                void 0 !== o && (n.data = o),
                (0, i.mE)(n.code) && (n = (0, i.rI)(n.code)),
                n)),
        };
      }
    },
    96553: (e, t, r) => {
      "use strict";
      function i(e) {
        return (
          "object" == typeof e &&
          "id" in e &&
          "jsonrpc" in e &&
          "2.0" === e.jsonrpc
        );
      }
      function s(e) {
        return i(e) && "method" in e;
      }
      function n(e) {
        return i(e) && (o(e) || a(e));
      }
      function o(e) {
        return "result" in e;
      }
      function a(e) {
        return "error" in e;
      }
      r.d(t, { U$: () => a, p3: () => s, tq: () => n, xT: () => o });
    },
    96595: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: () => n,
          __asyncDelegator: () => v,
          __asyncGenerator: () => w,
          __asyncValues: () => E,
          __await: () => b,
          __awaiter: () => h,
          __classPrivateFieldGet: () => D,
          __classPrivateFieldSet: () => P,
          __createBinding: () => d,
          __decorate: () => a,
          __exportStar: () => p,
          __extends: () => s,
          __generator: () => u,
          __importDefault: () => x,
          __importStar: () => _,
          __makeTemplateObject: () => I,
          __metadata: () => l,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => y,
          __spreadArrays: () => m,
          __values: () => f,
        });
      var i = function (e, t) {
        return (i =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
      function s(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var n = function () {
        return (n =
          Object.assign ||
          function (e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
              for (var s in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e;
          }).apply(this, arguments);
      };
      function o(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            0 > t.indexOf(i) &&
            (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var s = 0, i = Object.getOwnPropertySymbols(e);
            s < i.length;
            s++
          )
            0 > t.indexOf(i[s]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
              (r[i[s]] = e[i[s]]);
        return r;
      }
      function a(e, t, r, i) {
        var s,
          n = arguments.length,
          o =
            n < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          o = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (s = e[a]) &&
              (o = (n < 3 ? s(o) : n > 3 ? s(t, r, o) : s(t, r)) || o);
        return n > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function l(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (s, n) {
          function o(e) {
            try {
              c(i.next(e));
            } catch (e) {
              n(e);
            }
          }
          function a(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(o, a);
          }
          c((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          s,
          n,
          o = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (n = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (n[Symbol.iterator] = function () {
              return this;
            }),
          n
        );
        function a(n) {
          return function (a) {
            var c = [n, a];
            if (r) throw TypeError("Generator is already executing.");
            for (; o; )
              try {
                if (
                  ((r = 1),
                  i &&
                    (s =
                      2 & c[0]
                        ? i.return
                        : c[0]
                        ? i.throw || ((s = i.return) && s.call(i), 0)
                        : i.next) &&
                    !(s = s.call(i, c[1])).done)
                )
                  return s;
                switch (((i = 0), s && (c = [2 & c[0], s.value]), c[0])) {
                  case 0:
                  case 1:
                    s = c;
                    break;
                  case 4:
                    return o.label++, { value: c[1], done: !1 };
                  case 5:
                    o.label++, (i = c[1]), (c = [0]);
                    continue;
                  case 7:
                    (c = o.ops.pop()), o.trys.pop();
                    continue;
                  default:
                    if (
                      !(s = (s = o.trys).length > 0 && s[s.length - 1]) &&
                      (6 === c[0] || 2 === c[0])
                    ) {
                      o = 0;
                      continue;
                    }
                    if (3 === c[0] && (!s || (c[1] > s[0] && c[1] < s[3]))) {
                      o.label = c[1];
                      break;
                    }
                    if (6 === c[0] && o.label < s[1]) {
                      (o.label = s[1]), (s = c);
                      break;
                    }
                    if (s && o.label < s[2]) {
                      (o.label = s[2]), o.ops.push(c);
                      break;
                    }
                    s[2] && o.ops.pop(), o.trys.pop();
                    continue;
                }
                c = t.call(e, o);
              } catch (e) {
                (c = [6, e]), (i = 0);
              } finally {
                r = s = 0;
              }
            if (5 & c[0]) throw c[1];
            return { value: c[0] ? c[1] : void 0, done: !0 };
          };
        }
      }
      function d(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function p(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function f(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && i >= e.length && (e = void 0),
                { value: e && e[i++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function g(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          s,
          n = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = n.next()).done; )
            o.push(i.value);
        } catch (e) {
          s = { error: e };
        } finally {
          try {
            i && !i.done && (r = n.return) && r.call(n);
          } finally {
            if (s) throw s.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function m() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        for (var i = Array(e), s = 0, t = 0; t < r; t++)
          for (var n = arguments[t], o = 0, a = n.length; o < a; o++, s++)
            i[s] = n[o];
        return i;
      }
      function b(e) {
        return this instanceof b ? ((this.v = e), this) : new b(e);
      }
      function w(e, t, r) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var i,
          s = r.apply(e, t || []),
          n = [];
        return (
          (i = {}),
          o("next"),
          o("throw"),
          o("return"),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function o(e) {
          s[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                n.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            var r;
            (r = s[e](t)).value instanceof b
              ? Promise.resolve(r.value.v).then(c, l)
              : h(n[0][2], r);
          } catch (e) {
            h(n[0][3], e);
          }
        }
        function c(e) {
          a("next", e);
        }
        function l(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), n.shift(), n.length && a(n[0][0], n[0][1]);
        }
      }
      function v(e) {
        var t, r;
        return (
          (t = {}),
          i("next"),
          i("throw", function (e) {
            throw e;
          }),
          i("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, s) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r)
                  ? { value: b(e[i](t)), done: "return" === i }
                  : s
                  ? s(t)
                  : t;
              }
            : s;
        }
      }
      function E(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = f(e)),
            (t = {}),
            i("next"),
            i("throw"),
            i("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, s) {
                var n, o, a;
                (n = i),
                  (o = s),
                  (a = (t = e[r](t)).done),
                  Promise.resolve(t.value).then(function (e) {
                    n({ value: e, done: a });
                  }, o);
              });
            };
        }
      }
      function I(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function _(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function x(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function D(e, t) {
        if (!t.has(e))
          throw TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function P(e, t, r) {
        if (!t.has(e))
          throw TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    97061: (e, t, r) => {
      "use strict";
      r.d(t, { VH: () => l, li: () => c });
      var i = r(40662),
        s = r(89101),
        n = r(76589);
      class o extends n.H {
        constructor(e) {
          super();
        }
      }
      let a = s.FIVE_SECONDS,
        c = { pulse: "heartbeat_pulse" };
      class l extends o {
        constructor(e) {
          super(e),
            (this.events = new i.EventEmitter()),
            (this.interval = a),
            (this.interval = e?.interval || a);
        }
        static async init(e) {
          let t = new l(e);
          return await t.init(), t;
        }
        async init() {
          await this.initialize();
        }
        stop() {
          clearInterval(this.intervalRef);
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
        async initialize() {
          this.intervalRef = setInterval(
            () => this.pulse(),
            (0, s.toMiliseconds)(this.interval)
          );
        }
        pulse() {
          this.events.emit(c.pulse);
        }
      }
    },
  },
]);
