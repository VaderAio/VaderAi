"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4138],
  {
    399: (e, t, n) => {
      n.d(t, { h: () => r });
      let r = n(68629).k;
    },
    1405: (e, t, n) => {
      n.d(t, { J: () => r });
      function r(e, t) {
        let n = e.toString(),
          r = n.startsWith("-");
        r && (n = n.slice(1));
        let [s, o] = [
          (n = n.padStart(t, "0")).slice(0, n.length - t),
          n.slice(n.length - t),
        ];
        return (
          (o = o.replace(/(0+)$/, "")),
          `${r ? "-" : ""}${s || "0"}${o ? `.${o}` : ""}`
        );
      }
    },
    4805: (e, t, n) => {
      n.d(t, { Hi: () => s, ft: () => o, uj: () => a });
      var r = n(7441);
      class s extends r.C {
        constructor({ address: e }) {
          super(`State for account "${e}" is set multiple times.`, {
            name: "AccountStateConflictError",
          });
        }
      }
      class o extends r.C {
        constructor() {
          super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError",
          });
        }
      }
      function i(e) {
        return e.reduce(
          (e, { slot: t, value: n }) => `${e}        ${t}: ${n}
`,
          ""
        );
      }
      function a(e) {
        return e
          .reduce((e, { address: t, ...n }) => {
            let r = `${e}    ${t}:
`;
            return (
              n.nonce &&
                (r += `      nonce: ${n.nonce}
`),
              n.balance &&
                (r += `      balance: ${n.balance}
`),
              n.code &&
                (r += `      code: ${n.code}
`),
              n.state && ((r += "      state:\n"), (r += i(n.state))),
              n.stateDiff &&
                ((r += "      stateDiff:\n"), (r += i(n.stateDiff))),
              r
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    6784: (e, t, n) => {
      n.d(t, { II: () => d, v_: () => c, wm: () => l });
      var r = n(50920),
        s = n(21239),
        o = n(73504),
        i = n(52020);
      function a(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function c(e) {
        return (e ?? "online") !== "online" || s.t.isOnline();
      }
      var u = class extends Error {
        constructor(e) {
          super("CancelledError"),
            (this.revert = e?.revert),
            (this.silent = e?.silent);
        }
      };
      function l(e) {
        return e instanceof u;
      }
      function d(e) {
        let t,
          n = !1,
          l = 0,
          d = !1,
          h = (0, o.T)(),
          f = () =>
            r.m.isFocused() &&
            ("always" === e.networkMode || s.t.isOnline()) &&
            e.canRun(),
          p = () => c(e.networkMode) && e.canRun(),
          b = (n) => {
            d || ((d = !0), e.onSuccess?.(n), t?.(), h.resolve(n));
          },
          m = (n) => {
            d || ((d = !0), e.onError?.(n), t?.(), h.reject(n));
          },
          g = () =>
            new Promise((n) => {
              (t = (e) => {
                (d || f()) && n(e);
              }),
                e.onPause?.();
            }).then(() => {
              (t = void 0), d || e.onContinue?.();
            }),
          y = () => {
            let t;
            if (d) return;
            let r = 0 === l ? e.initialPromise : void 0;
            try {
              t = r ?? e.fn();
            } catch (e) {
              t = Promise.reject(e);
            }
            Promise.resolve(t)
              .then(b)
              .catch((t) => {
                if (d) return;
                let r = e.retry ?? 3 * !i.S$,
                  s = e.retryDelay ?? a,
                  o = "function" == typeof s ? s(l, t) : s,
                  c =
                    !0 === r ||
                    ("number" == typeof r && l < r) ||
                    ("function" == typeof r && r(l, t));
                if (n || !c) return void m(t);
                l++,
                  e.onFail?.(l, t),
                  (0, i.yy)(o)
                    .then(() => (f() ? void 0 : g()))
                    .then(() => {
                      n ? m(t) : y();
                    });
              });
          };
        return {
          promise: h,
          cancel: (t) => {
            d || (m(new u(t)), e.abort?.());
          },
          continue: () => (t?.(), h),
          cancelRetry: () => {
            n = !0;
          },
          continueRetry: () => {
            n = !1;
          },
          canStart: p,
          start: () => (p() ? y() : g().then(y), h),
        };
      }
    },
    7165: (e, t, n) => {
      n.d(t, { jG: () => s });
      var r = (e) => setTimeout(e, 0),
        s = (function () {
          let e = [],
            t = 0,
            n = (e) => {
              e();
            },
            s = (e) => {
              e();
            },
            o = r,
            i = (r) => {
              t
                ? e.push(r)
                : o(() => {
                    n(r);
                  });
            },
            a = () => {
              let t = e;
              (e = []),
                t.length &&
                  o(() => {
                    s(() => {
                      t.forEach((e) => {
                        n(e);
                      });
                    });
                  });
            };
          return {
            batch: (e) => {
              let n;
              t++;
              try {
                n = e();
              } finally {
                --t || a();
              }
              return n;
            },
            batchCalls:
              (e) =>
              (...t) => {
                i(() => {
                  e(...t);
                });
              },
            schedule: i,
            setNotifyFunction: (e) => {
              n = e;
            },
            setBatchNotifyFunction: (e) => {
              s = e;
            },
            setScheduler: (e) => {
              o = e;
            },
          };
        })();
    },
    7441: (e, t, n) => {
      n.d(t, { C: () => o });
      let r = "2.31.2",
        s = {
          getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: n }) =>
            t ? `${e ?? "https://viem.sh"}${t}${n ? `#${n}` : ""}` : void 0,
          version: `viem@${r}`,
        };
      class o extends Error {
        constructor(e, t = {}) {
          let n =
              t.cause instanceof o
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            i = (t.cause instanceof o && t.cause.docsPath) || t.docsPath,
            a = s.getDocsUrl?.({ ...t, docsPath: i });
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(a ? [`Docs: ${a}`] : []),
              ...(n ? [`Details: ${n}`] : []),
              ...(s.version ? [`Version: ${s.version}`] : []),
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
            (this.details = n),
            (this.docsPath = i),
            (this.metaMessages = t.metaMessages),
            (this.name = t.name ?? this.name),
            (this.shortMessage = e),
            (this.version = r);
        }
        walk(e) {
          return (function e(t, n) {
            return n?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
              ? e(t.cause, n)
              : n
              ? null
              : t;
          })(this, e);
        }
      }
    },
    7671: (e, t, n) => {
      n.d(t, { o: () => r });
      function r(e, { format: t }) {
        if (!t) return {};
        let n = {};
        return (
          !(function t(r) {
            for (let s of Object.keys(r))
              s in e && (n[s] = e[s]),
                r[s] &&
                  "object" == typeof r[s] &&
                  !Array.isArray(r[s]) &&
                  t(r[s]);
          })(t(e || {})),
          n
        );
      }
    },
    8512: (e, t, n) => {
      let r, s, o;
      n.d(t, { lY: () => P });
      var i = n(48701),
        a = n(19989);
      let c = BigInt(0),
        u = BigInt(1),
        l = BigInt(2),
        d = BigInt(7),
        h = BigInt(256),
        f = BigInt(113),
        p = [],
        b = [],
        m = [];
      for (let e = 0, t = u, n = 1, r = 0; e < 24; e++) {
        ([n, r] = [r, (2 * n + 3 * r) % 5]),
          p.push(2 * (5 * r + n)),
          b.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = c;
        for (let e = 0; e < 7; e++)
          (t = ((t << u) ^ ((t >> d) * f)) % h) & l &&
            (s ^= u << ((u << BigInt(e)) - u));
        m.push(s);
      }
      let g = (0, i.lD)(m, !0),
        y = g[0],
        v = g[1],
        w = (e, t, n) => (n > 32 ? (0, i.WM)(e, t, n) : (0, i.P5)(e, t, n)),
        x = (e, t, n) => (n > 32 ? (0, i.im)(e, t, n) : (0, i.B4)(e, t, n));
      class $ extends a.Vw {
        constructor(e, t, n, r = !1, s = 24) {
          if (
            (super(),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (this.enableXOF = !1),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = r),
            (this.rounds = s),
            (0, a.Fe)(n),
            !(0 < e && e < 200))
          )
            throw Error("only keccak-f1600 function is supported");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, a.DH)(this.state));
        }
        clone() {
          return this._cloneInto();
        }
        keccak() {
          (0, a.fd)(this.state32),
            (function (e, t = 24) {
              let n = new Uint32Array(10);
              for (let r = 24 - t; r < 24; r++) {
                for (let t = 0; t < 10; t++)
                  n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let r = (t + 8) % 10,
                    s = (t + 2) % 10,
                    o = n[s],
                    i = n[s + 1],
                    a = w(o, i, 1) ^ n[r],
                    c = x(o, i, 1) ^ n[r + 1];
                  for (let n = 0; n < 50; n += 10)
                    (e[t + n] ^= a), (e[t + n + 1] ^= c);
                }
                let t = e[2],
                  s = e[3];
                for (let n = 0; n < 24; n++) {
                  let r = b[n],
                    o = w(t, s, r),
                    i = x(t, s, r),
                    a = p[n];
                  (t = e[a]), (s = e[a + 1]), (e[a] = o), (e[a + 1] = i);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let r = 0; r < 10; r++) n[r] = e[t + r];
                  for (let r = 0; r < 10; r++)
                    e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
                }
                (e[0] ^= y[r]), (e[1] ^= v[r]);
              }
              (0, a.uH)(n);
            })(this.state32, this.rounds),
            (0, a.fd)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, a.CC)(this), (e = (0, a.ZJ)(e)), (0, a.DO)(e);
          let { blockLen: t, state: n } = this,
            r = e.length;
          for (let s = 0; s < r; ) {
            let o = Math.min(t - this.pos, r - s);
            for (let t = 0; t < o; t++) n[this.pos++] ^= e[s++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: n, blockLen: r } = this;
          (e[n] ^= t),
            (128 & t) != 0 && n === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, a.CC)(this, !1), (0, a.DO)(e), this.finish();
          let t = this.state,
            { blockLen: n } = this;
          for (let r = 0, s = e.length; r < s; ) {
            this.posOut >= n && this.keccak();
            let o = Math.min(n - this.posOut, s - r);
            e.set(t.subarray(this.posOut, this.posOut + o), r),
              (this.posOut += o),
              (r += o);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, a.Fe)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, a.Ht)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), (0, a.uH)(this.state);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: n,
            outputLen: r,
            rounds: s,
            enableXOF: o,
          } = this;
          return (
            e || (e = new $(t, n, r, o, s)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = s),
            (e.suffix = n),
            (e.outputLen = r),
            (e.enableXOF = o),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let P = ((r = 1), (s = 136), (o = 32), (0, a.qj)(() => new $(s, r, o)));
    },
    13423: (e, t, n) => {
      n.d(t, { h: () => p, k: () => m });
      var r = n(99702),
        s = n(36444),
        o = n(7441),
        i = n(94201),
        a = n(81757),
        c = n(79731),
        u = n(36984),
        l = n(87094),
        d = n(93727),
        h = n(67622),
        f = n(38697);
      function p(e, t) {
        if (e.length !== t.length)
          throw new r.YE({ expectedLength: e.length, givenLength: t.length });
        let n = b(
          (function ({ params: e, values: t }) {
            let n = [];
            for (let p = 0; p < e.length; p++)
              n.push(
                (function e({ param: t, value: n }) {
                  let p = m(t.type);
                  if (p) {
                    let [s, o] = p;
                    return (function (t, { length: n, param: s }) {
                      let o = null === n;
                      if (!Array.isArray(t)) throw new r.dm(t);
                      if (!o && t.length !== n)
                        throw new r.Nc({
                          expectedLength: n,
                          givenLength: t.length,
                          type: `${s.type}[${n}]`,
                        });
                      let i = !1,
                        a = [];
                      for (let n = 0; n < t.length; n++) {
                        let r = e({ param: s, value: t[n] });
                        r.dynamic && (i = !0), a.push(r);
                      }
                      if (o || i) {
                        let e = b(a);
                        if (o) {
                          let t = (0, h.cK)(a.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: a.length > 0 ? (0, c.xW)([t, e]) : t,
                          };
                        }
                        if (i) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, c.xW)(a.map(({ encoded: e }) => e)),
                      };
                    })(n, { length: s, param: { ...t, type: o } });
                  }
                  if ("tuple" === t.type)
                    return (function (t, { param: n }) {
                      let r = !1,
                        s = [];
                      for (let o = 0; o < n.components.length; o++) {
                        let i = n.components[o],
                          a = Array.isArray(t) ? o : i.name,
                          c = e({ param: i, value: t[a] });
                        s.push(c), c.dynamic && (r = !0);
                      }
                      return {
                        dynamic: r,
                        encoded: r
                          ? b(s)
                          : (0, c.xW)(s.map(({ encoded: e }) => e)),
                      };
                    })(n, { param: t });
                  if ("address" === t.type) {
                    var g = n;
                    if (!(0, a.P)(g)) throw new s.M({ address: g });
                    return { dynamic: !1, encoded: (0, u.db)(g.toLowerCase()) };
                  }
                  if ("bool" === t.type) {
                    var y = n;
                    if ("boolean" != typeof y)
                      throw new o.C(
                        `Invalid boolean value: "${y}" (type: ${typeof y}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: (0, u.db)((0, h.$P)(y)) };
                  }
                  if (t.type.startsWith("uint") || t.type.startsWith("int")) {
                    let e = t.type.startsWith("int"),
                      [, , r = "256"] = f.Ge.exec(t.type) ?? [];
                    return (function (e, { signed: t, size: n = 256 }) {
                      if ("number" == typeof n) {
                        let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
                          s = t ? -r - 1n : 0n;
                        if (e > r || e < s)
                          throw new i.Ty({
                            max: r.toString(),
                            min: s.toString(),
                            signed: t,
                            size: n / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, h.cK)(e, { size: 32, signed: t }),
                      };
                    })(n, { signed: e, size: Number(r) });
                  }
                  if (t.type.startsWith("bytes"))
                    return (function (e, { param: t }) {
                      let [, n] = t.type.split("bytes"),
                        s = (0, l.E)(e);
                      if (!n) {
                        let t = e;
                        return (
                          s % 32 != 0 &&
                            (t = (0, u.db)(t, {
                              dir: "right",
                              size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                            })),
                          {
                            dynamic: !0,
                            encoded: (0, c.xW)([
                              (0, u.db)((0, h.cK)(s, { size: 32 })),
                              t,
                            ]),
                          }
                        );
                      }
                      if (s !== Number.parseInt(n))
                        throw new r.gH({
                          expectedSize: Number.parseInt(n),
                          value: e,
                        });
                      return {
                        dynamic: !1,
                        encoded: (0, u.db)(e, { dir: "right" }),
                      };
                    })(n, { param: t });
                  if ("string" === t.type) {
                    var v = n;
                    let e = (0, h.i3)(v),
                      t = Math.ceil((0, l.E)(e) / 32),
                      r = [];
                    for (let n = 0; n < t; n++)
                      r.push(
                        (0, u.db)((0, d.di)(e, 32 * n, (n + 1) * 32), {
                          dir: "right",
                        })
                      );
                    return {
                      dynamic: !0,
                      encoded: (0, c.xW)([
                        (0, u.db)((0, h.cK)((0, l.E)(e), { size: 32 })),
                        ...r,
                      ]),
                    };
                  }
                  throw new r.nK(t.type, {
                    docsPath: "/docs/contract/encodeAbiParameters",
                  });
                })({ param: e[p], value: t[p] })
              );
            return n;
          })({ params: e, values: t })
        );
        return 0 === n.length ? "0x" : n;
      }
      function b(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: s } = e[n];
          r ? (t += 32) : (t += (0, l.E)(s));
        }
        let n = [],
          r = [],
          s = 0;
        for (let o = 0; o < e.length; o++) {
          let { dynamic: i, encoded: a } = e[o];
          i
            ? (n.push((0, h.cK)(t + s, { size: 32 })),
              r.push(a),
              (s += (0, l.E)(a)))
            : n.push(a);
        }
        return (0, c.xW)([...n, ...r]);
      }
      function m(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    16652: (e, t, n) => {
      n.d(t, { B: () => s });
      var r = n(45446);
      function s(e) {
        return "function" === e.type
          ? `function ${e.name}(${(0, r.Q)(e.inputs)})${
              e.stateMutability && "nonpayable" !== e.stateMutability
                ? ` ${e.stateMutability}`
                : ""
            }${e.outputs?.length ? ` returns (${(0, r.Q)(e.outputs)})` : ""}`
          : "event" === e.type
          ? `event ${e.name}(${(0, r.Q)(e.inputs)})`
          : "error" === e.type
          ? `error ${e.name}(${(0, r.Q)(e.inputs)})`
          : "constructor" === e.type
          ? `constructor(${(0, r.Q)(e.inputs)})${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "fallback" === e.type
          ? `fallback() external${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "receive() external payable";
      }
    },
    19405: (e, t, n) => {
      n.d(t, { J: () => r });
      function r(e) {
        return "string" == typeof e ? { address: e, type: "json-rpc" } : e;
      }
    },
    19989: (e, t, n) => {
      n.d(t, {
        Vw: () => P,
        DO: () => i,
        CC: () => c,
        sd: () => a,
        Fe: () => o,
        Ht: () => u,
        My: () => g,
        uH: () => d,
        Id: () => $,
        qj: () => E,
        O8: () => h,
        aT: () => w,
        aY: () => s,
        po: () => C,
        Ow: () => f,
        fd: () => p,
        ZJ: () => x,
        DH: () => l,
      });
      let r =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      function s(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function o(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function i(e, ...t) {
        if (!s(e)) throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function a(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.createHasher");
        o(e.outputLen), o(e.blockLen);
      }
      function c(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function u(e, t) {
        i(e);
        let n = t.outputLen;
        if (e.length < n)
          throw Error(
            "digestInto() expects output buffer of length at least " + n
          );
      }
      function l(e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }
      function d(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      function h(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function f(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let p =
          68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]
            ? (e) => e
            : function (e) {
                for (let n = 0; n < e.length; n++) {
                  var t;
                  e[n] =
                    (((t = e[n]) << 24) & 0xff000000) |
                    ((t << 8) & 0xff0000) |
                    ((t >>> 8) & 65280) |
                    ((t >>> 24) & 255);
                }
                return e;
              },
        b =
          "function" == typeof Uint8Array.from([]).toHex &&
          "function" == typeof Uint8Array.fromHex,
        m = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function g(e) {
        if ((i(e), b)) return e.toHex();
        let t = "";
        for (let n = 0; n < e.length; n++) t += m[e[n]];
        return t;
      }
      let y = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function v(e) {
        return e >= y._0 && e <= y._9
          ? e - y._0
          : e >= y.A && e <= y.F
          ? e - (y.A - 10)
          : e >= y.a && e <= y.f
          ? e - (y.a - 10)
          : void 0;
      }
      function w(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        if (b) return Uint8Array.fromHex(e);
        let t = e.length,
          n = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let r = new Uint8Array(n);
        for (let t = 0, s = 0; t < n; t++, s += 2) {
          let n = v(e.charCodeAt(s)),
            o = v(e.charCodeAt(s + 1));
          if (void 0 === n || void 0 === o)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[s] + e[s + 1]) +
                '" at index ' +
                s
            );
          r[t] = 16 * n + o;
        }
        return r;
      }
      function x(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e) throw Error("string expected");
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          i(e),
          e
        );
      }
      function $(...e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          i(r), (t += r.length);
        }
        let n = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let s = e[t];
          n.set(s, r), (r += s.length);
        }
        return n;
      }
      class P {}
      function E(e) {
        let t = (t) => e().update(x(t)).digest(),
          n = e();
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function C(e = 32) {
        if (r && "function" == typeof r.getRandomValues)
          return r.getRandomValues(new Uint8Array(e));
        if (r && "function" == typeof r.randomBytes)
          return Uint8Array.from(r.randomBytes(e));
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    21135: (e, t, n) => {
      n.d(t, { V: () => o });
      var r = n(93727),
        s = n(68629);
      let o = (e) => (0, r.di)((0, s.k)(e), 0, 4);
    },
    21159: (e, t, n) => {
      n.d(t, { A: () => o, B: () => s });
      var r = n(99702);
      function s(e, { includeName: t = !1 } = {}) {
        if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
          throw new r.d_(e.type);
        return `${e.name}(${o(e.inputs, { includeName: t })})`;
      }
      function o(e, { includeName: t = !1 } = {}) {
        return e
          ? e
              .map((e) =>
                (function (e, { includeName: t }) {
                  return e.type.startsWith("tuple")
                    ? `(${o(e.components, { includeName: t })})${e.type.slice(
                        5
                      )}`
                    : e.type + (t && e.name ? ` ${e.name}` : "");
                })(e, { includeName: t })
              )
              .join(t ? ", " : ",")
          : "";
      }
    },
    21239: (e, t, n) => {
      n.d(t, { t: () => o });
      var r = n(25910),
        s = n(52020),
        o = new (class extends r.Q {
          #e = !0;
          #t;
          #n;
          constructor() {
            super(),
              (this.#n = (e) => {
                if (!s.S$ && window.addEventListener) {
                  let t = () => e(!0),
                    n = () => e(!1);
                  return (
                    window.addEventListener("online", t, !1),
                    window.addEventListener("offline", n, !1),
                    () => {
                      window.removeEventListener("online", t),
                        window.removeEventListener("offline", n);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#t || this.setEventListener(this.#n);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), (this.#t = void 0));
          }
          setEventListener(e) {
            (this.#n = e),
              this.#t?.(),
              (this.#t = e(this.setOnline.bind(this)));
          }
          setOnline(e) {
            this.#e !== e &&
              ((this.#e = e),
              this.listeners.forEach((t) => {
                t(e);
              }));
          }
          isOnline() {
            return this.#e;
          }
        })();
    },
    23008: (e, t, n) => {
      n.d(t, { iY: () => c });
      var r = n(99702),
        s = n(32840),
        o = n(81757),
        i = n(399),
        a = n(21135);
      function c(e) {
        let t,
          { abi: n, args: c = [], name: u } = e,
          l = (0, s.q)(u, { strict: !1 }),
          d = n.filter((e) =>
            l
              ? "function" === e.type
                ? (0, a.V)(e) === u
                : "event" === e.type && (0, i.h)(e) === u
              : "name" in e && e.name === u
          );
        if (0 !== d.length) {
          if (1 === d.length) return d[0];
          for (let e of d) {
            if ("inputs" in e) {
              if (!c || 0 === c.length) {
                if (!e.inputs || 0 === e.inputs.length) return e;
                continue;
              }
              if (
                e.inputs &&
                0 !== e.inputs.length &&
                e.inputs.length === c.length &&
                c.every((t, n) => {
                  let r = "inputs" in e && e.inputs[n];
                  return (
                    !!r &&
                    (function e(t, n) {
                      let r = typeof t,
                        s = n.type;
                      switch (s) {
                        case "address":
                          return (0, o.P)(t, { strict: !1 });
                        case "bool":
                          return "boolean" === r;
                        case "function":
                        case "string":
                          return "string" === r;
                        default:
                          if ("tuple" === s && "components" in n)
                            return Object.values(n.components).every((n, r) =>
                              e(Object.values(t)[r], n)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              s
                            )
                          )
                            return "number" === r || "bigint" === r;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(s))
                            return "string" === r || t instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(s))
                            return (
                              Array.isArray(t) &&
                              t.every((t) =>
                                e(t, {
                                  ...n,
                                  type: s.replace(/(\[[0-9]{0,}\])$/, ""),
                                })
                              )
                            );
                          return !1;
                      }
                    })(t, r)
                  );
                })
              ) {
                if (t && "inputs" in t && t.inputs) {
                  let n = (function e(t, n, r) {
                    for (let s in t) {
                      let i = t[s],
                        a = n[s];
                      if (
                        "tuple" === i.type &&
                        "tuple" === a.type &&
                        "components" in i &&
                        "components" in a
                      )
                        return e(i.components, a.components, r[s]);
                      let c = [i.type, a.type];
                      if (
                        (c.includes("address") && c.includes("bytes20")) ||
                        (((c.includes("address") && c.includes("string")) ||
                          (c.includes("address") && c.includes("bytes"))) &&
                          (0, o.P)(r[s], { strict: !1 }))
                      )
                        return c;
                    }
                  })(e.inputs, t.inputs, c);
                  if (n)
                    throw new r.nM(
                      { abiItem: e, type: n[0] },
                      { abiItem: t, type: n[1] }
                    );
                }
                t = e;
              }
            }
          }
          return t || d[0];
        }
      }
    },
    24578: (e, t, n) => {
      n.d(t, { S: () => a });
      var r = n(8512),
        s = n(32840),
        o = n(80844),
        i = n(67622);
      function a(e, t) {
        let n = (0, r.lY)((0, s.q)(e, { strict: !1 }) ? (0, o.ZJ)(e) : e);
        return "bytes" === (t || "hex") ? n : (0, i.nj)(n);
      }
    },
    25507: (e, t, n) => {
      n.d(t, { yH: () => u });
      var r = n(36444),
        s = n(58980),
        o = n(4805),
        i = n(81757),
        a = n(67622);
      function c(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, { slot: t, value: n }) => {
            if (66 !== t.length)
              throw new s.NV({ size: t.length, targetSize: 66, type: "hex" });
            if (66 !== n.length)
              throw new s.NV({ size: n.length, targetSize: 66, type: "hex" });
            return (e[t] = n), e;
          }, {});
      }
      function u(e) {
        if (!e) return;
        let t = {};
        for (let { address: n, ...s } of e) {
          if (!(0, i.P)(n, { strict: !1 })) throw new r.M({ address: n });
          if (t[n]) throw new o.Hi({ address: n });
          t[n] = (function (e) {
            let { balance: t, nonce: n, state: r, stateDiff: s, code: i } = e,
              u = {};
            if (
              (void 0 !== i && (u.code = i),
              void 0 !== t && (u.balance = (0, a.cK)(t)),
              void 0 !== n && (u.nonce = (0, a.cK)(n)),
              void 0 !== r && (u.state = c(r)),
              void 0 !== s)
            ) {
              if (u.state) throw new o.ft();
              u.stateDiff = c(s);
            }
            return u;
          })(s);
        }
        return t;
      }
    },
    25910: (e, t, n) => {
      n.d(t, { Q: () => r });
      var r = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
          return (
            this.listeners.add(e),
            this.onSubscribe(),
            () => {
              this.listeners.delete(e), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    26715: (e, t, n) => {
      n.d(t, { Ht: () => a, jE: () => i });
      var r = n(12115),
        s = n(95155),
        o = r.createContext(void 0),
        i = (e) => {
          let t = r.useContext(o);
          if (e) return e;
          if (!t)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return t;
        },
        a = (e) => {
          let { client: t, children: n } = e;
          return (
            r.useEffect(
              () => (
                t.mount(),
                () => {
                  t.unmount();
                }
              ),
              [t]
            ),
            (0, s.jsx)(o.Provider, { value: t, children: n })
          );
        };
    },
    27493: (e, t, n) => {
      n.d(t, {
        IQ: () => d,
        ME: () => l,
        Nx: () => u,
        Sl: () => a,
        uU: () => c,
      });
      var r = n(94201),
        s = n(87094),
        o = n(54335),
        i = n(80844);
      function a(e, { size: t }) {
        if ((0, s.E)(e) > t)
          throw new r.u({ givenSize: (0, s.E)(e), maxSize: t });
      }
      function c(e, t = {}) {
        let { signed: n } = t;
        t.size && a(e, { size: t.size });
        let r = BigInt(e);
        if (!n) return r;
        let s = (e.length - 2) / 2;
        return r <= (1n << (8n * BigInt(s) - 1n)) - 1n
          ? r
          : r - BigInt(`0x${"f".padStart(2 * s, "f")}`) - 1n;
      }
      function u(e, t = {}) {
        let n = e;
        if (
          (t.size && (a(n, { size: t.size }), (n = (0, o.B)(n))),
          "0x00" === (0, o.B)(n))
        )
          return !1;
        if ("0x01" === (0, o.B)(n)) return !0;
        throw new r.H2(n);
      }
      function l(e, t = {}) {
        return Number(c(e, t));
      }
      function d(e, t = {}) {
        let n = (0, i.aT)(e);
        return (
          t.size &&
            (a(n, { size: t.size }), (n = (0, o.B)(n, { dir: "right" }))),
          new TextDecoder().decode(n)
        );
      }
    },
    29995: (e, t, n) => {
      n.d(t, { J9: () => o, Mc: () => s, fD: () => r });
      let r = {
          1: "An `assert` condition failed.",
          17: "Arithmetic operation resulted in underflow or overflow.",
          18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
          33: "Attempted to convert to an invalid type.",
          34: "Attempted to access a storage byte array that is incorrectly encoded.",
          49: "Performed `.pop()` on an empty array",
          50: "Array index is out of bounds.",
          65: "Allocated too much memory or created an array which is too large.",
          81: "Attempted to call a zero-initialized variable of internal function type.",
        },
        s = {
          inputs: [{ name: "message", type: "string" }],
          name: "Error",
          type: "error",
        },
        o = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    30445: (e, t, n) => {
      n.d(t, { EH: () => o, YE: () => a, jF: () => i, rj: () => s });
      var r = n(7441);
      class s extends r.C {
        constructor({ blockNumber: e, chain: t, contract: n }) {
          super(`Chain "${t.name}" does not support contract "${n.name}".`, {
            metaMessages: [
              "This could be due to any of the following:",
              ...(e && n.blockCreated && n.blockCreated > e
                ? [
                    `- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`,
                  ]
                : [
                    `- The chain does not have the contract "${n.name}" configured.`,
                  ]),
            ],
            name: "ChainDoesNotSupportContract",
          });
        }
      }
      class o extends r.C {
        constructor({ chain: e, currentChainId: t }) {
          super(
            `The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e.id} – ${e.name}`,
              ],
              name: "ChainMismatchError",
            }
          );
        }
      }
      class i extends r.C {
        constructor() {
          super(
            "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
            { name: "ChainNotFoundError" }
          );
        }
      }
      class a extends r.C {
        constructor() {
          super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError",
          });
        }
      }
      r.C;
    },
    31942: (e, t, n) => {
      n.d(t, { Q: () => o });
      var r = n(77136),
        s = n(1405);
      function o(e, t = "wei") {
        return (0, s.J)(e, r.sz[t]);
      }
    },
    32840: (e, t, n) => {
      n.d(t, { q: () => r });
      function r(e, { strict: t = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
    },
    34524: (e, t, n) => {
      n.d(t, { T: () => r });
      function r(e, t, n) {
        let r = e[t.name];
        if ("function" == typeof r) return r;
        let s = e[n];
        return "function" == typeof s ? s : (n) => t(e, n);
      }
    },
    35020: (e, t, n) => {
      n.d(t, { l: () => o });
      var r = n(7441),
        s = n(42264);
      function o(e, t) {
        let n = (e.details || "").toLowerCase(),
          o = e instanceof r.C ? e.walk((e) => e?.code === s.A7.code) : e;
        return o instanceof r.C
          ? new s.A7({ cause: e, message: o.details })
          : s.A7.nodeMessage.test(n)
          ? new s.A7({ cause: e, message: e.details })
          : s.BG.nodeMessage.test(n)
          ? new s.BG({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : s.jj.nodeMessage.test(n)
          ? new s.jj({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : s.K0.nodeMessage.test(n)
          ? new s.K0({ cause: e, nonce: t?.nonce })
          : s.Oh.nodeMessage.test(n)
          ? new s.Oh({ cause: e, nonce: t?.nonce })
          : s.vW.nodeMessage.test(n)
          ? new s.vW({ cause: e, nonce: t?.nonce })
          : s.k5.nodeMessage.test(n)
          ? new s.k5({ cause: e })
          : s.lY.nodeMessage.test(n)
          ? new s.lY({ cause: e, gas: t?.gas })
          : s.Fo.nodeMessage.test(n)
          ? new s.Fo({ cause: e, gas: t?.gas })
          : s.uC.nodeMessage.test(n)
          ? new s.uC({ cause: e })
          : s.lN.nodeMessage.test(n)
          ? new s.lN({
              cause: e,
              maxFeePerGas: t?.maxFeePerGas,
              maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
            })
          : new s.RM({ cause: e });
      }
    },
    35109: (e, t, n) => {
      n.d(t, {
        zX: () => g,
        bG: () => y,
        M: () => v,
        rR: () => w,
        Po: () => x,
        $S: () => $,
      });
      var r = n(19405),
        s = n(29995),
        o = n(47826),
        i = n(21159),
        a = n(79183);
      function c({
        abiItem: e,
        args: t,
        includeFunctionName: n = !0,
        includeName: r = !1,
      }) {
        if ("name" in e && "inputs" in e && e.inputs)
          return `${n ? e.name : ""}(${e.inputs
            .map(
              (e, n) =>
                `${r && e.name ? `${e.name}: ` : ""}${
                  "object" == typeof t[n] ? (0, a.A)(t[n]) : t[n]
                }`
            )
            .join(", ")})`;
      }
      var u = n(23008),
        l = n(44494),
        d = n(31942),
        h = n(99702),
        f = n(7441),
        p = n(4805),
        b = n(69432),
        m = n(41514);
      class g extends f.C {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: s,
            data: o,
            gas: i,
            gasPrice: a,
            maxFeePerGas: c,
            maxPriorityFeePerGas: u,
            nonce: h,
            to: f,
            value: m,
            stateOverride: g,
          }
        ) {
          let y = t ? (0, r.J)(t) : void 0,
            v = (0, b.aO)({
              from: y?.address,
              to: f,
              value:
                void 0 !== m &&
                `${(0, l.c)(m)} ${s?.nativeCurrency?.symbol || "ETH"}`,
              data: o,
              gas: i,
              gasPrice: void 0 !== a && `${(0, d.Q)(a)} gwei`,
              maxFeePerGas: void 0 !== c && `${(0, d.Q)(c)} gwei`,
              maxPriorityFeePerGas: void 0 !== u && `${(0, d.Q)(u)} gwei`,
              nonce: h,
            });
          g &&
            (v += `
${(0, p.uj)(g)}`),
            super(e.shortMessage, {
              cause: e,
              docsPath: n,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Raw Call Arguments:",
                v,
              ].filter(Boolean),
              name: "CallExecutionError",
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class y extends f.C {
        constructor(
          e,
          {
            abi: t,
            args: n,
            contractAddress: r,
            docsPath: s,
            functionName: o,
            sender: a,
          }
        ) {
          let l = (0, u.iY)({ abi: t, args: n, name: o }),
            d = l
              ? c({
                  abiItem: l,
                  args: n,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0,
            h = l ? (0, i.B)(l, { includeName: !0 }) : void 0,
            f = (0, b.aO)({
              address: r && (0, m.R)(r),
              function: h,
              args:
                d &&
                "()" !== d &&
                `${[...Array(o?.length ?? 0).keys()]
                  .map(() => " ")
                  .join("")}${d}`,
              sender: a,
            });
          super(
            e.shortMessage ||
              `An unknown error occurred while executing the contract function "${o}".`,
            {
              cause: e,
              docsPath: s,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                f && "Contract Call:",
                f,
              ].filter(Boolean),
              name: "ContractFunctionExecutionError",
            }
          ),
            Object.defineProperty(this, "abi", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "args", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "contractAddress", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "formattedArgs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "functionName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "sender", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abi = t),
            (this.args = n),
            (this.cause = e),
            (this.contractAddress = r),
            (this.functionName = o),
            (this.sender = a);
        }
      }
      class v extends f.C {
        constructor({ abi: e, data: t, functionName: n, message: r }) {
          let a, u, l, d, f;
          if (t && "0x" !== t)
            try {
              let {
                abiItem: n,
                errorName: r,
                args: a,
              } = (f = (0, o.W)({ abi: e, data: t }));
              if ("Error" === r) l = a[0];
              else if ("Panic" === r) {
                let [e] = a;
                l = s.fD[e];
              } else {
                let e = n ? (0, i.B)(n, { includeName: !0 }) : void 0,
                  t =
                    n && a
                      ? c({
                          abiItem: n,
                          args: a,
                          includeFunctionName: !1,
                          includeName: !1,
                        })
                      : void 0;
                u = [
                  e ? `Error: ${e}` : "",
                  t && "()" !== t
                    ? `       ${[...Array(r?.length ?? 0).keys()]
                        .map(() => " ")
                        .join("")}${t}`
                    : "",
                ];
              }
            } catch (e) {
              a = e;
            }
          else r && (l = r);
          a instanceof h.Wq &&
            ((d = a.signature),
            (u = [
              `Unable to decode signature "${d}" as it was not found on the provided ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`,
            ])),
            super(
              (l && "execution reverted" !== l) || d
                ? [
                    `The contract function "${n}" reverted with the following ${
                      d ? "signature" : "reason"
                    }:`,
                    l || d,
                  ].join("\n")
                : `The contract function "${n}" reverted.`,
              {
                cause: a,
                metaMessages: u,
                name: "ContractFunctionRevertedError",
              }
            ),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "raw", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "reason", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = f),
            (this.raw = t),
            (this.reason = l),
            (this.signature = d);
        }
      }
      class w extends f.C {
        constructor({ functionName: e }) {
          super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: [
              "This could be due to any of the following:",
              `  - The contract does not have the function "${e}",`,
              "  - The parameters passed to the contract function may be invalid, or",
              "  - The address is not a contract.",
            ],
            name: "ContractFunctionZeroDataError",
          });
        }
      }
      class x extends f.C {
        constructor({ factory: e }) {
          super(
            `Deployment for counterfactual contract call failed${
              e ? ` for factory "${e}".` : ""
            }`,
            {
              metaMessages: [
                "Please ensure:",
                "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
                "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
              ],
              name: "CounterfactualDeploymentFailedError",
            }
          );
        }
      }
      class $ extends f.C {
        constructor({ data: e, message: t }) {
          super(t || "", { name: "RawContractError" }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e);
        }
      }
    },
    35883: (e, t, n) => {
      n.d(t, { b: () => l, o: () => u });
      var r = n(36444),
        s = n(80844),
        o = n(24578),
        i = n(65003),
        a = n(81757);
      let c = new i.A(8192);
      function u(e, t) {
        if (c.has(`${e}.${t}`)) return c.get(`${e}.${t}`);
        let n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
          r = (0, o.S)((0, s.Af)(n), "bytes"),
          i = (t ? n.substring(`${t}0x`.length) : n).split("");
        for (let e = 0; e < 40; e += 2)
          r[e >> 1] >> 4 >= 8 && i[e] && (i[e] = i[e].toUpperCase()),
            (15 & r[e >> 1]) >= 8 &&
              i[e + 1] &&
              (i[e + 1] = i[e + 1].toUpperCase());
        let a = `0x${i.join("")}`;
        return c.set(`${e}.${t}`, a), a;
      }
      function l(e, t) {
        if (!(0, a.P)(e, { strict: !1 })) throw new r.M({ address: e });
        return u(e, t);
      }
    },
    36444: (e, t, n) => {
      n.d(t, { M: () => s });
      var r = n(7441);
      class s extends r.C {
        constructor({ address: e }) {
          super(`Address "${e}" is invalid.`, {
            metaMessages: [
              "- Address must be a hex value of 20 bytes (40 hex characters).",
              "- Address must match its checksum counterpart.",
            ],
            name: "InvalidAddressError",
          });
        }
      }
    },
    36984: (e, t, n) => {
      n.d(t, { db: () => o, eV: () => s });
      var r = n(58980);
      function s(e, { dir: t, size: n = 32 } = {}) {
        return "string" == typeof e
          ? o(e, { dir: t, size: n })
          : (function (e, { dir: t, size: n = 32 } = {}) {
              if (null === n) return e;
              if (e.length > n)
                throw new r.Fl({
                  size: e.length,
                  targetSize: n,
                  type: "bytes",
                });
              let s = new Uint8Array(n);
              for (let r = 0; r < n; r++) {
                let o = "right" === t;
                s[o ? r : n - r - 1] = e[o ? r : e.length - r - 1];
              }
              return s;
            })(e, { dir: t, size: n });
      }
      function o(e, { dir: t, size: n = 32 } = {}) {
        if (null === n) return e;
        let s = e.replace("0x", "");
        if (s.length > 2 * n)
          throw new r.Fl({
            size: Math.ceil(s.length / 2),
            targetSize: n,
            type: "hex",
          });
        return `0x${s["right" === t ? "padEnd" : "padStart"](2 * n, "0")}`;
      }
    },
    38697: (e, t, n) => {
      n.d(t, { BD: () => r, Ge: () => s });
      let r = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        s =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    },
    40194: (e, t, n) => {
      n.d(t, { r: () => r });
      let r = "2.17.3";
    },
    41514: (e, t, n) => {
      n.d(t, { I: () => s, R: () => r });
      let r = (e) => e,
        s = (e) => e;
    },
    42264: (e, t, n) => {
      n.d(t, {
        A7: () => o,
        BG: () => i,
        Fo: () => f,
        K0: () => c,
        Oh: () => u,
        RM: () => m,
        jj: () => a,
        k5: () => d,
        lN: () => b,
        lY: () => h,
        uC: () => p,
        vW: () => l,
      });
      var r = n(31942),
        s = n(7441);
      class o extends s.C {
        constructor({ cause: e, message: t } = {}) {
          let n = t
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              n ? `with reason: ${n}` : "for an unknown reason"
            }.`,
            { cause: e, name: "ExecutionRevertedError" }
          );
        }
      }
      Object.defineProperty(o, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(o, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class i extends s.C {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.Q)(t)} gwei` : ""
            }) cannot be higher than the maximum allowed value (2^256-1).`,
            { cause: e, name: "FeeCapTooHighError" }
          );
        }
      }
      Object.defineProperty(i, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class a extends s.C {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.Q)(t)}` : ""
            } gwei) cannot be lower than the block base fee.`,
            { cause: e, name: "FeeCapTooLowError" }
          );
        }
      }
      Object.defineProperty(a, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
      });
      class c extends s.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is higher than the next one expected.`,
            { cause: e, name: "NonceTooHighError" }
          );
        }
      }
      Object.defineProperty(c, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too high/,
      });
      class u extends s.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
            { cause: e, name: "NonceTooLowError" }
          );
        }
      }
      Object.defineProperty(u, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class l extends s.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }exceeds the maximum allowed nonce.`,
            { cause: e, name: "NonceMaxValueError" }
          );
        }
      }
      Object.defineProperty(l, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce has max value/,
      });
      class d extends s.C {
        constructor({ cause: e } = {}) {
          super(
            "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
            {
              cause: e,
              metaMessages: [
                "This error could arise when the account does not have enough funds to:",
                " - pay for the total gas fee,",
                " - pay for the value to send.",
                " ",
                "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                " - `gas` is the amount of gas needed for transaction to execute,",
                " - `gas fee` is the gas fee,",
                " - `value` is the amount of ether to send to the recipient.",
              ],
              name: "InsufficientFundsError",
            }
          );
        }
      }
      Object.defineProperty(d, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /insufficient funds|exceeds transaction sender account balance/,
      });
      class h extends s.C {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction exceeds the limit allowed for the block.`,
            { cause: e, name: "IntrinsicGasTooHighError" }
          );
        }
      }
      Object.defineProperty(h, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class f extends s.C {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction is too low.`,
            { cause: e, name: "IntrinsicGasTooLowError" }
          );
        }
      }
      Object.defineProperty(f, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too low/,
      });
      class p extends s.C {
        constructor({ cause: e }) {
          super("The transaction type is not supported for this chain.", {
            cause: e,
            name: "TransactionTypeNotSupportedError",
          });
        }
      }
      Object.defineProperty(p, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /transaction type not valid/,
      });
      class b extends s.C {
        constructor({
          cause: e,
          maxPriorityFeePerGas: t,
          maxFeePerGas: n,
        } = {}) {
          super(
            `The provided tip (\`maxPriorityFeePerGas\`${
              t ? ` = ${(0, r.Q)(t)} gwei` : ""
            }) cannot be higher than the fee cap (\`maxFeePerGas\`${
              n ? ` = ${(0, r.Q)(n)} gwei` : ""
            }).`,
            { cause: e, name: "TipAboveFeeCapError" }
          );
        }
      }
      Object.defineProperty(b, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      class m extends s.C {
        constructor({ cause: e }) {
          super(`An error occurred while executing: ${e?.shortMessage}`, {
            cause: e,
            name: "UnknownNodeError",
          });
        }
      }
    },
    43935: (e, t, n) => {
      n.d(t, { n: () => b });
      var r = n(99702),
        s = n(35883),
        o = n(87456),
        i = n(87094),
        a = n(93727),
        c = n(54335),
        u = n(94201),
        l = n(27493),
        d = n(67622);
      function h(e, t = {}) {
        void 0 !== t.size && (0, l.Sl)(e, { size: t.size });
        let n = (0, d.My)(e, t);
        return (0, l.ME)(n, t);
      }
      var f = n(80844),
        p = n(13423);
      function b(e, t) {
        let n = "string" == typeof t ? (0, f.aT)(t) : t,
          b = (0, o.l)(n);
        if (0 === (0, i.E)(n) && e.length > 0) throw new r.O();
        if ((0, i.E)(t) && 32 > (0, i.E)(t))
          throw new r.Iy({
            data: "string" == typeof t ? t : (0, d.My)(t),
            params: e,
            size: (0, i.E)(t),
          });
        let g = 0,
          y = [];
        for (let t = 0; t < e.length; ++t) {
          let n = e[t];
          b.setPosition(g);
          let [o, i] = (function e(t, n, { staticPosition: o }) {
            let i = (0, p.k)(n.type);
            if (i) {
              let [r, s] = i;
              return (function (t, n, { length: r, staticPosition: s }) {
                if (!r) {
                  let r = s + h(t.readBytes(32)),
                    o = r + 32;
                  t.setPosition(r);
                  let i = h(t.readBytes(32)),
                    a = m(n),
                    c = 0,
                    u = [];
                  for (let r = 0; r < i; ++r) {
                    t.setPosition(o + (a ? 32 * r : c));
                    let [s, i] = e(t, n, { staticPosition: o });
                    (c += i), u.push(s);
                  }
                  return t.setPosition(s + 32), [u, 32];
                }
                if (m(n)) {
                  let o = s + h(t.readBytes(32)),
                    i = [];
                  for (let s = 0; s < r; ++s) {
                    t.setPosition(o + 32 * s);
                    let [r] = e(t, n, { staticPosition: o });
                    i.push(r);
                  }
                  return t.setPosition(s + 32), [i, 32];
                }
                let o = 0,
                  i = [];
                for (let a = 0; a < r; ++a) {
                  let [r, a] = e(t, n, { staticPosition: s + o });
                  (o += a), i.push(r);
                }
                return [i, o];
              })(t, { ...n, type: s }, { length: r, staticPosition: o });
            }
            if ("tuple" === n.type)
              return (function (t, n, { staticPosition: r }) {
                let s =
                    0 === n.components.length ||
                    n.components.some(({ name: e }) => !e),
                  o = s ? [] : {},
                  i = 0;
                if (m(n)) {
                  let a = r + h(t.readBytes(32));
                  for (let r = 0; r < n.components.length; ++r) {
                    let c = n.components[r];
                    t.setPosition(a + i);
                    let [u, l] = e(t, c, { staticPosition: a });
                    (i += l), (o[s ? r : c?.name] = u);
                  }
                  return t.setPosition(r + 32), [o, 32];
                }
                for (let a = 0; a < n.components.length; ++a) {
                  let c = n.components[a],
                    [u, l] = e(t, c, { staticPosition: r });
                  (o[s ? a : c?.name] = u), (i += l);
                }
                return [o, i];
              })(t, n, { staticPosition: o });
            if ("address" === n.type) {
              var f = t;
              let e = f.readBytes(32);
              return [(0, s.o)((0, d.My)((0, a.A1)(e, -20))), 32];
            }
            if ("bool" === n.type)
              return [
                (function (e, t = {}) {
                  let n = e;
                  if (
                    (void 0 !== t.size &&
                      ((0, l.Sl)(n, { size: t.size }), (n = (0, c.B)(n))),
                    n.length > 1 || n[0] > 1)
                  )
                    throw new u.xO(n);
                  return !!n[0];
                })(t.readBytes(32), { size: 32 }),
                32,
              ];
            if (n.type.startsWith("bytes"))
              return (function (e, t, { staticPosition: n }) {
                let [r, s] = t.type.split("bytes");
                if (!s) {
                  let t = h(e.readBytes(32));
                  e.setPosition(n + t);
                  let r = h(e.readBytes(32));
                  if (0 === r) return e.setPosition(n + 32), ["0x", 32];
                  let s = e.readBytes(r);
                  return e.setPosition(n + 32), [(0, d.My)(s), 32];
                }
                return [(0, d.My)(e.readBytes(Number.parseInt(s), 32)), 32];
              })(t, n, { staticPosition: o });
            if (n.type.startsWith("uint") || n.type.startsWith("int")) {
              var b = t,
                g = n;
              let e = g.type.startsWith("int"),
                r = Number.parseInt(g.type.split("int")[1] || "256"),
                s = b.readBytes(32);
              return [
                r > 48
                  ? (function (e, t = {}) {
                      void 0 !== t.size && (0, l.Sl)(e, { size: t.size });
                      let n = (0, d.My)(e, t);
                      return (0, l.uU)(n, t);
                    })(s, { signed: e })
                  : h(s, { signed: e }),
                32,
              ];
            }
            if ("string" === n.type)
              return (function (e, { staticPosition: t }) {
                let n = h(e.readBytes(32));
                e.setPosition(t + n);
                let r = h(e.readBytes(32));
                if (0 === r) return e.setPosition(t + 32), ["", 32];
                let s = e.readBytes(r, 32),
                  o = (function (e, t = {}) {
                    let n = e;
                    return (
                      void 0 !== t.size &&
                        ((0, l.Sl)(n, { size: t.size }),
                        (n = (0, c.B)(n, { dir: "right" }))),
                      new TextDecoder().decode(n)
                    );
                  })((0, c.B)(s));
                return e.setPosition(t + 32), [o, 32];
              })(t, { staticPosition: o });
            throw new r.j(n.type, {
              docsPath: "/docs/contract/decodeAbiParameters",
            });
          })(b, n, { staticPosition: 0 });
          (g += i), y.push(o);
        }
        return y;
      }
      function m(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(m);
        let n = (0, p.k)(e.type);
        return !!(n && m({ ...e, type: n[1] }));
      }
    },
    44494: (e, t, n) => {
      n.d(t, { c: () => o });
      var r = n(77136),
        s = n(1405);
      function o(e, t = "wei") {
        return (0, s.J)(e, r.eL[t]);
      }
    },
    45446: (e, t, n) => {
      n.d(t, { Q: () => o });
      var r = n(59126);
      let s = /^tuple(?<array>(\[(\d*)\])*)$/;
      function o(e) {
        let t = "",
          n = e.length;
        for (let o = 0; o < n; o++)
          (t += (function e(t) {
            let n = t.type;
            if (s.test(t.type) && "components" in t) {
              n = "(";
              let o = t.components.length;
              for (let r = 0; r < o; r++)
                (n += e(t.components[r])), r < o - 1 && (n += ", ");
              let i = (0, r.Yv)(s, t.type);
              return (n += `)${i?.array ?? ""}`), e({ ...t, type: n });
            }
            return ("indexed" in t && t.indexed && (n = `${n} indexed`), t.name)
              ? `${n} ${t.name}`
              : n;
          })(e[o])),
            o !== n - 1 && (t += ", ");
        return t;
      }
    },
    47826: (e, t, n) => {
      n.d(t, { W: () => u });
      var r = n(29995),
        s = n(99702),
        o = n(93727),
        i = n(21135),
        a = n(43935),
        c = n(21159);
      function u(e) {
        let { abi: t, data: n } = e,
          u = (0, o.di)(n, 0, 4);
        if ("0x" === u) throw new s.O();
        let l = [...(t || []), r.Mc, r.J9].find(
          (e) => "error" === e.type && u === (0, i.V)((0, c.B)(e))
        );
        if (!l)
          throw new s.Wq(u, { docsPath: "/docs/contract/decodeErrorResult" });
        return {
          abiItem: l,
          args:
            "inputs" in l && l.inputs && l.inputs.length > 0
              ? (0, a.n)(l.inputs, (0, o.di)(n, 4))
              : void 0,
          errorName: l.name,
        };
      }
    },
    48701: (e, t, n) => {
      n.d(t, {
        B4: () => f,
        CQ: () => w,
        CW: () => v,
        Ei: () => d,
        F8: () => x,
        P5: () => h,
        TH: () => $,
        Vl: () => g,
        Vr: () => y,
        WM: () => p,
        WQ: () => m,
        im: () => b,
        jm: () => a,
        lD: () => o,
        qh: () => l,
        rE: () => c,
        ry: () => u,
        xn: () => i,
      });
      let r = BigInt(0x100000000 - 1),
        s = BigInt(32);
      function o(e, t = !1) {
        let n = e.length,
          i = new Uint32Array(n),
          a = new Uint32Array(n);
        for (let o = 0; o < n; o++) {
          let { h: n, l: c } = (function (e, t = !1) {
            return t
              ? { h: Number(e & r), l: Number((e >> s) & r) }
              : { h: 0 | Number((e >> s) & r), l: 0 | Number(e & r) };
          })(e[o], t);
          [i[o], a[o]] = [n, c];
        }
        return [i, a];
      }
      let i = (e, t, n) => e >>> n,
        a = (e, t, n) => (e << (32 - n)) | (t >>> n),
        c = (e, t, n) => (e >>> n) | (t << (32 - n)),
        u = (e, t, n) => (e << (32 - n)) | (t >>> n),
        l = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32)),
        d = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n)),
        h = (e, t, n) => (e << n) | (t >>> (32 - n)),
        f = (e, t, n) => (t << n) | (e >>> (32 - n)),
        p = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
        b = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      function m(e, t, n, r) {
        let s = (t >>> 0) + (r >>> 0);
        return { h: (e + n + ((s / 0x100000000) | 0)) | 0, l: 0 | s };
      }
      let g = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0),
        y = (e, t, n, r) => (t + n + r + ((e / 0x100000000) | 0)) | 0,
        v = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0),
        w = (e, t, n, r, s) => (t + n + r + s + ((e / 0x100000000) | 0)) | 0,
        x = (e, t, n, r, s) =>
          (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (s >>> 0),
        $ = (e, t, n, r, s, o) =>
          (t + n + r + s + o + ((e / 0x100000000) | 0)) | 0;
    },
    50920: (e, t, n) => {
      n.d(t, { m: () => o });
      var r = n(25910),
        s = n(52020),
        o = new (class extends r.Q {
          #r;
          #t;
          #n;
          constructor() {
            super(),
              (this.#n = (e) => {
                if (!s.S$ && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener("visibilitychange", t, !1),
                    () => {
                      window.removeEventListener("visibilitychange", t);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#t || this.setEventListener(this.#n);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), (this.#t = void 0));
          }
          setEventListener(e) {
            (this.#n = e),
              this.#t?.(),
              (this.#t = e((e) => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            this.#r !== e && ((this.#r = e), this.onFocus());
          }
          onFocus() {
            let e = this.isFocused();
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#r
              ? this.#r
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    52020: (e, t, n) => {
      n.d(t, {
        BH: () => b,
        Cp: () => p,
        EN: () => f,
        Eh: () => u,
        F$: () => h,
        GU: () => M,
        MK: () => l,
        S$: () => r,
        ZM: () => C,
        ZZ: () => P,
        Zw: () => o,
        d2: () => c,
        f8: () => m,
        gn: () => i,
        hT: () => E,
        j3: () => a,
        lQ: () => s,
        nJ: () => d,
        pl: () => x,
        y9: () => $,
        yy: () => w,
      });
      var r = "undefined" == typeof window || "Deno" in globalThis;
      function s() {}
      function o(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function i(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0;
      }
      function a(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function c(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function u(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function l(e, t) {
        let {
          type: n = "all",
          exact: r,
          fetchStatus: s,
          predicate: o,
          queryKey: i,
          stale: a,
        } = e;
        if (i) {
          if (r) {
            if (t.queryHash !== h(i, t.options)) return !1;
          } else if (!p(t.queryKey, i)) return !1;
        }
        if ("all" !== n) {
          let e = t.isActive();
          if (("active" === n && !e) || ("inactive" === n && e)) return !1;
        }
        return (
          ("boolean" != typeof a || t.isStale() === a) &&
          (!s || s === t.state.fetchStatus) &&
          (!o || !!o(t))
        );
      }
      function d(e, t) {
        let { exact: n, status: r, predicate: s, mutationKey: o } = e;
        if (o) {
          if (!t.options.mutationKey) return !1;
          if (n) {
            if (f(t.options.mutationKey) !== f(o)) return !1;
          } else if (!p(t.options.mutationKey, o)) return !1;
        }
        return (!r || t.state.status === r) && (!s || !!s(t));
      }
      function h(e, t) {
        return (t?.queryKeyHashFn || f)(e);
      }
      function f(e) {
        return JSON.stringify(e, (e, t) =>
          y(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
            : t
        );
      }
      function p(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            "object" == typeof e &&
            "object" == typeof t &&
            Object.keys(t).every((n) => p(e[n], t[n])))
        );
      }
      function b(e, t) {
        if (e === t) return e;
        let n = g(e) && g(t);
        if (n || (y(e) && y(t))) {
          let r = n ? e : Object.keys(e),
            s = r.length,
            o = n ? t : Object.keys(t),
            i = o.length,
            a = n ? [] : {},
            c = new Set(r),
            u = 0;
          for (let r = 0; r < i; r++) {
            let s = n ? r : o[r];
            ((!n && c.has(s)) || n) && void 0 === e[s] && void 0 === t[s]
              ? ((a[s] = void 0), u++)
              : ((a[s] = b(e[s], t[s])),
                a[s] === e[s] && void 0 !== e[s] && u++);
          }
          return s === i && u === s ? e : a;
        }
        return t;
      }
      function m(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let n in e) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function g(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function y(e) {
        if (!v(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let n = t.prototype;
        return (
          !!v(n) &&
          !!n.hasOwnProperty("isPrototypeOf") &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function v(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function w(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function x(e, t, n) {
        return "function" == typeof n.structuralSharing
          ? n.structuralSharing(e, t)
          : !1 !== n.structuralSharing
          ? b(e, t)
          : t;
      }
      function $(e, t, n = 0) {
        let r = [...e, t];
        return n && r.length > n ? r.slice(1) : r;
      }
      function P(e, t, n = 0) {
        let r = [t, ...e];
        return n && r.length > n ? r.slice(0, -1) : r;
      }
      var E = Symbol();
      function C(e, t) {
        return !e.queryFn && t?.initialPromise
          ? () => t.initialPromise
          : e.queryFn && e.queryFn !== E
          ? e.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
      }
      function M(e, t) {
        return "function" == typeof e ? e(...t) : !!e;
      }
    },
    53031: (e, t, n) => {
      n.d(t, { U: () => u });
      var r = n(12115),
        s = n(83415),
        o = n(95782);
      let i = () => "wagmi@2.15.6";
      class a extends o.C {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiError",
            });
        }
        get docsBaseUrl() {
          return "https://wagmi.sh/react";
        }
        get version() {
          return i();
        }
      }
      class c extends a {
        constructor() {
          super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "/api/WagmiProvider",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiProviderNotFoundError",
            });
        }
      }
      function u() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = null != (e = t.config) ? e : (0, r.useContext)(s.R);
        if (!n) throw new c();
        return n;
      }
    },
    54335: (e, t, n) => {
      n.d(t, { B: () => r });
      function r(e, { dir: t = "left" } = {}) {
        let n = "string" == typeof e ? e.replace("0x", "") : e,
          s = 0;
        for (let e = 0; e < n.length - 1; e++)
          if ("0" === n["left" === t ? e : n.length - e - 1].toString()) s++;
          else break;
        return ((n = "left" === t ? n.slice(s) : n.slice(0, n.length - s)),
        "string" == typeof e)
          ? (1 === n.length && "right" === t && (n = `${n}0`),
            `0x${n.length % 2 == 1 ? `0${n}` : n}`)
          : n;
      }
    },
    54842: (e, t, n) => {
      n.d(t, { j: () => c });
      var r = n(99702),
        s = n(7441),
        o = n(35109),
        i = n(90557),
        a = n(81379);
      function c(
        e,
        { abi: t, address: n, args: c, docsPath: u, functionName: l, sender: d }
      ) {
        let h =
            e instanceof o.$S
              ? e
              : e instanceof s.C
              ? e.walk((e) => "data" in e) || e.walk()
              : {},
          { code: f, data: p, details: b, message: m, shortMessage: g } = h,
          y =
            e instanceof r.O
              ? new o.rR({ functionName: l })
              : [3, a.bq.code].includes(f) && (p || b || m || g)
              ? new o.M({
                  abi: t,
                  data: "object" == typeof p ? p.data : p,
                  functionName: l,
                  message: h instanceof i.J8 ? b : g ?? m,
                })
              : e;
        return new o.bG(y, {
          abi: t,
          args: c,
          contractAddress: n,
          docsPath: u,
          functionName: l,
          sender: d,
        });
      }
    },
    57948: (e, t, n) => {
      n.d(t, { k: () => s });
      var r = n(52020),
        s = class {
          #s;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, r.gn)(this.gcTime) &&
                (this.#s = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (r.S$ ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#s && (clearTimeout(this.#s), (this.#s = void 0));
          }
        };
    },
    58980: (e, t, n) => {
      n.d(t, { Fl: () => o, NV: () => i, ii: () => s });
      var r = n(7441);
      class s extends r.C {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset "${e}" is out-of-bounds (size: ${n}).`,
            { name: "SliceOffsetOutOfBoundsError" }
          );
        }
      }
      class o extends r.C {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      }
      class i extends r.C {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} is expected to be ${t} ${n} long, but is ${e} ${n} long.`,
            { name: "InvalidBytesLengthError" }
          );
        }
      }
    },
    59126: (e, t, n) => {
      function r(e, t) {
        let n = e.exec(t);
        return n?.groups;
      }
      n.d(t, { BD: () => s, Ge: () => o, Yv: () => r, wj: () => i });
      let s = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        o =
          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        i = /^\(.+?\).*?$/;
    },
    60367: (e, t, n) => {
      n.d(t, { p: () => l });
      var r = n(79731),
        s = n(13423),
        o = n(99702),
        i = n(21135),
        a = n(21159),
        c = n(23008);
      let u = "/docs/contract/encodeFunctionData";
      function l(e) {
        let { args: t } = e,
          { abi: n, functionName: l } = (() => {
            if (1 === e.abi.length && e.functionName?.startsWith("0x"))
              return e;
            let { abi: t, args: n, functionName: r } = e,
              s = t[0];
            if (r) {
              let e = (0, c.iY)({ abi: t, args: n, name: r });
              if (!e) throw new o.Iz(r, { docsPath: u });
              s = e;
            }
            if ("function" !== s.type) throw new o.Iz(void 0, { docsPath: u });
            return { abi: [s], functionName: (0, i.V)((0, a.B)(s)) };
          })(),
          d = n[0],
          h = "inputs" in d && d.inputs ? (0, s.h)(d.inputs, t ?? []) : void 0;
        return (0, r.aP)([l, h ?? "0x"]);
      }
    },
    65003: (e, t, n) => {
      n.d(t, { A: () => r });
      class r extends Map {
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
    },
    65358: (e, t, n) => {
      n.d(t, { c: () => u });
      var r = n(19405);
      let s = 2n ** 256n - 1n;
      var o = n(36444),
        i = n(42264),
        a = n(69432),
        c = n(81757);
      function u(e) {
        let {
            account: t,
            gasPrice: n,
            maxFeePerGas: u,
            maxPriorityFeePerGas: l,
            to: d,
          } = e,
          h = t ? (0, r.J)(t) : void 0;
        if (h && !(0, c.P)(h.address)) throw new o.M({ address: h.address });
        if (d && !(0, c.P)(d)) throw new o.M({ address: d });
        if (void 0 !== n && (void 0 !== u || void 0 !== l)) throw new a.n3();
        if (u && u > s) throw new i.BG({ maxFeePerGas: u });
        if (l && u && l > u)
          throw new i.lN({ maxFeePerGas: u, maxPriorityFeePerGas: l });
      }
    },
    67622: (e, t, n) => {
      n.d(t, {
        $P: () => c,
        My: () => u,
        cK: () => l,
        i3: () => h,
        nj: () => a,
      });
      var r = n(94201),
        s = n(36984),
        o = n(27493);
      let i = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function a(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? l(e, t)
          : "string" == typeof e
          ? h(e, t)
          : "boolean" == typeof e
          ? c(e, t)
          : u(e, t);
      }
      function c(e, t = {}) {
        let n = `0x${Number(e)}`;
        return "number" == typeof t.size
          ? ((0, o.Sl)(n, { size: t.size }), (0, s.eV)(n, { size: t.size }))
          : n;
      }
      function u(e, t = {}) {
        let n = "";
        for (let t = 0; t < e.length; t++) n += i[e[t]];
        let r = `0x${n}`;
        return "number" == typeof t.size
          ? ((0, o.Sl)(r, { size: t.size }),
            (0, s.eV)(r, { dir: "right", size: t.size }))
          : r;
      }
      function l(e, t = {}) {
        let n,
          { signed: o, size: i } = t,
          a = BigInt(e);
        i
          ? (n = o
              ? (1n << (8n * BigInt(i) - 1n)) - 1n
              : 2n ** (8n * BigInt(i)) - 1n)
          : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let c = "bigint" == typeof n && o ? -n - 1n : 0;
        if ((n && a > n) || a < c) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new r.Ty({
            max: n ? `${n}${t}` : void 0,
            min: `${c}${t}`,
            signed: o,
            size: i,
            value: `${e}${t}`,
          });
        }
        let u = `0x${(o && a < 0
          ? (1n << BigInt(8 * i)) + BigInt(a)
          : a
        ).toString(16)}`;
        return i ? (0, s.eV)(u, { size: i }) : u;
      }
      let d = new TextEncoder();
      function h(e, t = {}) {
        return u(d.encode(e), t);
      }
    },
    68629: (e, t, n) => {
      n.d(t, { k: () => u });
      var r = n(80844),
        s = n(24578);
      let o = (e) => (0, s.S)((0, r.ZJ)(e));
      var i = n(16652),
        a = n(7441);
      let c = (e) =>
        (function (e) {
          let t = !0,
            n = "",
            r = 0,
            s = "",
            o = !1;
          for (let i = 0; i < e.length; i++) {
            let a = e[i];
            if (
              (["(", ")", ","].includes(a) && (t = !0),
              "(" === a && r++,
              ")" === a && r--,
              t)
            ) {
              if (0 === r) {
                if (" " === a && ["event", "function", ""].includes(s)) s = "";
                else if (((s += a), ")" === a)) {
                  o = !0;
                  break;
                }
                continue;
              }
              if (" " === a) {
                "," !== e[i - 1] &&
                  "," !== n &&
                  ",(" !== n &&
                  ((n = ""), (t = !1));
                continue;
              }
              (s += a), (n += a);
            }
          }
          if (!o) throw new a.C("Unable to normalize signature.");
          return s;
        })("string" == typeof e ? e : (0, i.B)(e));
      function u(e) {
        return o(c(e));
      }
    },
    69432: (e, t, n) => {
      n.d(t, {
        $s: () => u,
        Kc: () => d,
        Kz: () => l,
        Vg: () => c,
        WA: () => h,
        aO: () => i,
        n3: () => a,
      });
      var r = n(44494),
        s = n(31942),
        o = n(7441);
      function i(e) {
        let t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          n = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(n + 1)}  ${t}`).join("\n");
      }
      class a extends o.C {
        constructor() {
          super(
            "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
            { name: "FeeConflictError" }
          );
        }
      }
      o.C;
      class c extends o.C {
        constructor({ transaction: e }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              i(e),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
              "- an EIP-7702 Transaction with `authorizationList`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
            name: "InvalidSerializableTransactionError",
          });
        }
      }
      o.C, o.C, o.C;
      class u extends o.C {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: o,
            data: a,
            gas: c,
            gasPrice: u,
            maxFeePerGas: l,
            maxPriorityFeePerGas: d,
            nonce: h,
            to: f,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              i({
                chain: o && `${o?.name} (id: ${o?.id})`,
                from: t?.address,
                to: f,
                value:
                  void 0 !== p &&
                  `${(0, r.c)(p)} ${o?.nativeCurrency?.symbol || "ETH"}`,
                data: a,
                gas: c,
                gasPrice: void 0 !== u && `${(0, s.Q)(u)} gwei`,
                maxFeePerGas: void 0 !== l && `${(0, s.Q)(l)} gwei`,
                maxPriorityFeePerGas: void 0 !== d && `${(0, s.Q)(d)} gwei`,
                nonce: h,
              }),
            ].filter(Boolean),
            name: "TransactionExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class l extends o.C {
        constructor({
          blockHash: e,
          blockNumber: t,
          blockTag: n,
          hash: r,
          index: s,
        }) {
          let o = "Transaction";
          n &&
            void 0 !== s &&
            (o = `Transaction at block time "${n}" at index "${s}"`),
            e &&
              void 0 !== s &&
              (o = `Transaction at block hash "${e}" at index "${s}"`),
            t &&
              void 0 !== s &&
              (o = `Transaction at block number "${t}" at index "${s}"`),
            r && (o = `Transaction with hash "${r}"`),
            super(`${o} could not be found.`, {
              name: "TransactionNotFoundError",
            });
        }
      }
      class d extends o.C {
        constructor({ hash: e }) {
          super(
            `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
            { name: "TransactionReceiptNotFoundError" }
          );
        }
      }
      class h extends o.C {
        constructor({ hash: e }) {
          super(
            `Timed out while waiting for transaction with hash "${e}" to be confirmed.`,
            { name: "WaitForTransactionReceiptTimeoutError" }
          );
        }
      }
    },
    70030: (e, t, n) => {
      n.d(t, { T: () => r });
      function r(e, t, n) {
        let r = e[t.name];
        if ("function" == typeof r) return r;
        let s = e[n];
        return "function" == typeof s ? s : (n) => t(e, n);
      }
    },
    73504: (e, t, n) => {
      function r() {
        let e,
          t,
          n = new Promise((n, r) => {
            (e = n), (t = r);
          });
        function r(e) {
          Object.assign(n, e), delete n.resolve, delete n.reject;
        }
        return (
          (n.status = "pending"),
          n.catch(() => {}),
          (n.resolve = (t) => {
            r({ status: "fulfilled", value: t }), e(t);
          }),
          (n.reject = (e) => {
            r({ status: "rejected", reason: e }), t(e);
          }),
          n
        );
      }
      n.d(t, { T: () => r });
    },
    76743: (e, t, n) => {
      n.d(t, { Bv: () => o });
      var r = n(67622);
      let s = {
        legacy: "0x0",
        eip2930: "0x1",
        eip1559: "0x2",
        eip4844: "0x3",
        eip7702: "0x4",
      };
      function o(e) {
        let t = {};
        return (
          void 0 !== e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              r: e.r ? (0, r.cK)(BigInt(e.r)) : e.r,
              s: e.s ? (0, r.cK)(BigInt(e.s)) : e.s,
              chainId: (0, r.cK)(e.chainId),
              nonce: (0, r.cK)(e.nonce),
              ...(void 0 !== e.yParity
                ? { yParity: (0, r.cK)(e.yParity) }
                : {}),
              ...(void 0 !== e.v && void 0 === e.yParity
                ? { v: (0, r.cK)(e.v) }
                : {}),
            }))),
          void 0 !== e.accessList && (t.accessList = e.accessList),
          void 0 !== e.blobVersionedHashes &&
            (t.blobVersionedHashes = e.blobVersionedHashes),
          void 0 !== e.blobs &&
            ("string" != typeof e.blobs[0]
              ? (t.blobs = e.blobs.map((e) => (0, r.My)(e)))
              : (t.blobs = e.blobs)),
          void 0 !== e.data && (t.data = e.data),
          void 0 !== e.from && (t.from = e.from),
          void 0 !== e.gas && (t.gas = (0, r.cK)(e.gas)),
          void 0 !== e.gasPrice && (t.gasPrice = (0, r.cK)(e.gasPrice)),
          void 0 !== e.maxFeePerBlobGas &&
            (t.maxFeePerBlobGas = (0, r.cK)(e.maxFeePerBlobGas)),
          void 0 !== e.maxFeePerGas &&
            (t.maxFeePerGas = (0, r.cK)(e.maxFeePerGas)),
          void 0 !== e.maxPriorityFeePerGas &&
            (t.maxPriorityFeePerGas = (0, r.cK)(e.maxPriorityFeePerGas)),
          void 0 !== e.nonce && (t.nonce = (0, r.cK)(e.nonce)),
          void 0 !== e.to && (t.to = e.to),
          void 0 !== e.type && (t.type = s[e.type]),
          void 0 !== e.value && (t.value = (0, r.cK)(e.value)),
          t
        );
      }
    },
    77136: (e, t, n) => {
      n.d(t, { eL: () => r, pj: () => o, sz: () => s });
      let r = { gwei: 9, wei: 18 },
        s = { ether: -9, wei: 9 },
        o = { ether: -18, gwei: -9 };
    },
    79183: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (e, t, n) =>
        JSON.stringify(
          e,
          (e, n) => {
            let r = "bigint" == typeof n ? n.toString() : n;
            return "function" == typeof t ? t(e, r) : r;
          },
          n
        );
    },
    79731: (e, t, n) => {
      function r(e) {
        return "string" == typeof e[0]
          ? s(e)
          : (function (e) {
              let t = 0;
              for (let n of e) t += n.length;
              let n = new Uint8Array(t),
                r = 0;
              for (let t of e) n.set(t, r), (r += t.length);
              return n;
            })(e);
      }
      function s(e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      n.d(t, { aP: () => s, xW: () => r });
    },
    80844: (e, t, n) => {
      n.d(t, { Af: () => f, ZJ: () => u, aT: () => h });
      var r = n(7441),
        s = n(32840),
        o = n(36984),
        i = n(27493),
        a = n(67622);
      let c = new TextEncoder();
      function u(e, t = {}) {
        var n, r;
        return "number" == typeof e || "bigint" == typeof e
          ? ((n = e), (r = t), h((0, a.cK)(n, r)))
          : "boolean" == typeof e
          ? (function (e, t = {}) {
              let n = new Uint8Array(1);
              return ((n[0] = Number(e)), "number" == typeof t.size)
                ? ((0, i.Sl)(n, { size: t.size }),
                  (0, o.eV)(n, { size: t.size }))
                : n;
            })(e, t)
          : (0, s.q)(e)
          ? h(e, t)
          : f(e, t);
      }
      let l = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function d(e) {
        return e >= l.zero && e <= l.nine
          ? e - l.zero
          : e >= l.A && e <= l.F
          ? e - (l.A - 10)
          : e >= l.a && e <= l.f
          ? e - (l.a - 10)
          : void 0;
      }
      function h(e, t = {}) {
        let n = e;
        t.size &&
          ((0, i.Sl)(n, { size: t.size }),
          (n = (0, o.eV)(n, { dir: "right", size: t.size })));
        let s = n.slice(2);
        s.length % 2 && (s = `0${s}`);
        let a = s.length / 2,
          c = new Uint8Array(a);
        for (let e = 0, t = 0; e < a; e++) {
          let n = d(s.charCodeAt(t++)),
            o = d(s.charCodeAt(t++));
          if (void 0 === n || void 0 === o)
            throw new r.C(
              `Invalid byte sequence ("${s[t - 2]}${s[t - 1]}" in "${s}").`
            );
          c[e] = 16 * n + o;
        }
        return c;
      }
      function f(e, t = {}) {
        let n = c.encode(e);
        return "number" == typeof t.size
          ? ((0, i.Sl)(n, { size: t.size }),
            (0, o.eV)(n, { dir: "right", size: t.size }))
          : n;
      }
    },
    81379: (e, t, n) => {
      n.d(t, {
        CL: () => c,
        D5: () => l,
        Di: () => h,
        G1: () => I,
        Gi: () => u,
        L5: () => C,
        MI: () => B,
        RV: () => $,
        Sf: () => x,
        WT: () => M,
        XU: () => a,
        YW: () => b,
        ab: () => m,
        bq: () => d,
        cg: () => O,
        ch: () => E,
        hA: () => f,
        hl: () => A,
        jz: () => T,
        qZ: () => p,
        s0: () => g,
        sV: () => w,
        uL: () => j,
        vx: () => v,
        xQ: () => y,
        xq: () => P,
      });
      var r = n(7441),
        s = n(90557);
      class o extends r.C {
        constructor(
          e,
          { code: t, docsPath: n, metaMessages: r, name: o, shortMessage: i }
        ) {
          super(i, {
            cause: e,
            docsPath: n,
            metaMessages: r || e?.metaMessages,
            name: o || "RpcError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = o || e.name),
            (this.code = e instanceof s.J8 ? e.code : t ?? -1);
        }
      }
      class i extends o {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t.data);
        }
      }
      class a extends o {
        constructor(e) {
          super(e, {
            code: a.code,
            name: "ParseRpcError",
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          });
        }
      }
      Object.defineProperty(a, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class c extends o {
        constructor(e) {
          super(e, {
            code: c.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object.",
          });
        }
      }
      Object.defineProperty(c, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class u extends o {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: u.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${
              t ? ` "${t}"` : ""
            } does not exist / is not available.`,
          });
        }
      }
      Object.defineProperty(u, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class l extends o {
        constructor(e) {
          super(e, {
            code: l.code,
            name: "InvalidParamsRpcError",
            shortMessage:
              "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(l, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class d extends o {
        constructor(e) {
          super(e, {
            code: d.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received.",
          });
        }
      }
      Object.defineProperty(d, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class h extends o {
        constructor(e) {
          super(e, {
            code: h.code,
            name: "InvalidInputRpcError",
            shortMessage:
              "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(h, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class f extends o {
        constructor(e) {
          super(e, {
            code: f.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceNotFoundRpcError",
            });
        }
      }
      Object.defineProperty(f, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class p extends o {
        constructor(e) {
          super(e, {
            code: p.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available.",
          });
        }
      }
      Object.defineProperty(p, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class b extends o {
        constructor(e) {
          super(e, {
            code: b.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed.",
          });
        }
      }
      Object.defineProperty(b, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class m extends o {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: m.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${t ? ` "${t}"` : ""} is not supported.`,
          });
        }
      }
      Object.defineProperty(m, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class g extends o {
        constructor(e) {
          super(e, {
            code: g.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit.",
          });
        }
      }
      Object.defineProperty(g, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class y extends o {
        constructor(e) {
          super(e, {
            code: y.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported.",
          });
        }
      }
      Object.defineProperty(y, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class v extends i {
        constructor(e) {
          super(e, {
            code: v.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request.",
          });
        }
      }
      Object.defineProperty(v, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class w extends i {
        constructor(e) {
          super(e, {
            code: w.code,
            name: "UnauthorizedProviderError",
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          });
        }
      }
      Object.defineProperty(w, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class x extends i {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: x.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${
              t ? ` " ${t}"` : ""
            }.`,
          });
        }
      }
      Object.defineProperty(x, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class $ extends i {
        constructor(e) {
          super(e, {
            code: $.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains.",
          });
        }
      }
      Object.defineProperty($, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class P extends i {
        constructor(e) {
          super(e, {
            code: P.code,
            name: "ChainDisconnectedError",
            shortMessage:
              "The Provider is not connected to the requested chain.",
          });
        }
      }
      Object.defineProperty(P, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class E extends i {
        constructor(e) {
          super(e, {
            code: E.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain.",
          });
        }
      }
      Object.defineProperty(E, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      class C extends i {
        constructor(e) {
          super(e, {
            code: C.code,
            name: "UnsupportedNonOptionalCapabilityError",
            shortMessage:
              "This Wallet does not support a capability that was not marked as optional.",
          });
        }
      }
      Object.defineProperty(C, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5700,
      });
      class M extends i {
        constructor(e) {
          super(e, {
            code: M.code,
            name: "UnsupportedChainIdError",
            shortMessage:
              "This Wallet does not support the requested chain ID.",
          });
        }
      }
      Object.defineProperty(M, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5710,
      });
      class A extends i {
        constructor(e) {
          super(e, {
            code: A.code,
            name: "DuplicateIdError",
            shortMessage: "There is already a bundle submitted with this ID.",
          });
        }
      }
      Object.defineProperty(A, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5720,
      });
      class O extends i {
        constructor(e) {
          super(e, {
            code: O.code,
            name: "UnknownBundleIdError",
            shortMessage: "This bundle id is unknown / has not been submitted",
          });
        }
      }
      Object.defineProperty(O, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5730,
      });
      class j extends i {
        constructor(e) {
          super(e, {
            code: j.code,
            name: "BundleTooLargeError",
            shortMessage:
              "The call bundle is too large for the Wallet to process.",
          });
        }
      }
      Object.defineProperty(j, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5740,
      });
      class I extends i {
        constructor(e) {
          super(e, {
            code: I.code,
            name: "AtomicReadyWalletRejectedUpgradeError",
            shortMessage:
              "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.",
          });
        }
      }
      Object.defineProperty(I, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5750,
      });
      class T extends i {
        constructor(e) {
          super(e, {
            code: T.code,
            name: "AtomicityNotSupportedError",
            shortMessage:
              "The wallet does not support atomic execution but the request requires it.",
          });
        }
      }
      Object.defineProperty(T, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5760,
      });
      class B extends o {
        constructor(e) {
          super(e, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred.",
          });
        }
      }
    },
    81757: (e, t, n) => {
      n.d(t, { P: () => a });
      var r = n(65003),
        s = n(35883);
      let o = /^0x[a-fA-F0-9]{40}$/,
        i = new r.A(8192);
      function a(e, t) {
        let { strict: n = !0 } = t ?? {},
          r = `${e}.${n}`;
        if (i.has(r)) return i.get(r);
        let a =
          !!o.test(e) && (e.toLowerCase() === e || !n || (0, s.o)(e) === e);
        return i.set(r, a), a;
      }
    },
    83415: (e, t, n) => {
      n.d(t, { R: () => a, x: () => c });
      var r = n(12115);
      let s = !1;
      async function o(e, t = {}) {
        let n;
        if (s) return [];
        (s = !0),
          e.setState((e) => ({
            ...e,
            status: e.current ? "reconnecting" : "connecting",
          }));
        let r = [];
        if (t.connectors?.length)
          for (let n of t.connectors) {
            let t;
            (t = "function" == typeof n ? e._internal.connectors.setup(n) : n),
              r.push(t);
          }
        else r.push(...e.connectors);
        try {
          n = await e.storage?.getItem("recentConnectorId");
        } catch {}
        let i = {};
        for (let [, t] of e.state.connections) i[t.connector.id] = 1;
        n && (i[n] = 0);
        let a =
            Object.keys(i).length > 0
              ? [...r].sort((e, t) => (i[e.id] ?? 10) - (i[t.id] ?? 10))
              : r,
          c = !1,
          u = [],
          l = [];
        for (let t of a) {
          let n = await t.getProvider().catch(() => void 0);
          if (!n || l.some((e) => e === n) || !(await t.isAuthorized()))
            continue;
          let r = await t.connect({ isReconnecting: !0 }).catch(() => null);
          r &&
            (t.emitter.off("connect", e._internal.events.connect),
            t.emitter.on("change", e._internal.events.change),
            t.emitter.on("disconnect", e._internal.events.disconnect),
            e.setState((e) => {
              let n = new Map(c ? e.connections : new Map()).set(t.uid, {
                accounts: r.accounts,
                chainId: r.chainId,
                connector: t,
              });
              return { ...e, current: c ? e.current : t.uid, connections: n };
            }),
            u.push({ accounts: r.accounts, chainId: r.chainId, connector: t }),
            l.push(n),
            (c = !0));
        }
        return (
          ("reconnecting" === e.state.status ||
            "connecting" === e.state.status) &&
            (c
              ? e.setState((e) => ({ ...e, status: "connected" }))
              : e.setState((e) => ({
                  ...e,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                }))),
          (s = !1),
          u
        );
      }
      function i(e) {
        let {
            children: t,
            config: n,
            initialState: s,
            reconnectOnMount: i = !0,
          } = e,
          { onMount: a } = (function (e, t) {
            let { initialState: n, reconnectOnMount: r } = t;
            return (
              n &&
                !e._internal.store.persist.hasHydrated() &&
                e.setState({
                  ...n,
                  chainId: e.chains.some((e) => e.id === n.chainId)
                    ? n.chainId
                    : e.chains[0].id,
                  connections: r ? n.connections : new Map(),
                  status: r ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  e._internal.ssr &&
                    (await e._internal.store.persist.rehydrate(),
                    e._internal.mipd &&
                      e._internal.connectors.setState((t) => {
                        let n = new Set();
                        for (let e of t ?? [])
                          if (e.rdns)
                            for (let t of Array.isArray(e.rdns)
                              ? e.rdns
                              : [e.rdns])
                              n.add(t);
                        let r = [];
                        for (let t of e._internal.mipd?.getProviders() ?? []) {
                          if (n.has(t.info.rdns)) continue;
                          let s =
                              e._internal.connectors.providerDetailToConnector(
                                t
                              ),
                            o = e._internal.connectors.setup(s);
                          r.push(o);
                        }
                        return [...t, ...r];
                      })),
                    r
                      ? o(e)
                      : e.storage &&
                        e.setState((e) => ({ ...e, connections: new Map() }));
                },
              }
            );
          })(n, { initialState: s, reconnectOnMount: i });
        n._internal.ssr || a();
        let c = (0, r.useRef)(!0);
        return (
          (0, r.useEffect)(() => {
            if (c.current && n._internal.ssr)
              return (
                a(),
                () => {
                  c.current = !1;
                }
              );
          }, []),
          t
        );
      }
      let a = (0, r.createContext)(void 0);
      function c(e) {
        let { children: t, config: n } = e;
        return (0, r.createElement)(
          i,
          e,
          (0, r.createElement)(a.Provider, { value: n }, t)
        );
      }
    },
    87094: (e, t, n) => {
      n.d(t, { E: () => s });
      var r = n(32840);
      function s(e) {
        return (0, r.q)(e, { strict: !1 })
          ? Math.ceil((e.length - 2) / 2)
          : e.length;
      }
    },
    87456: (e, t, n) => {
      n.d(t, { l: () => o });
      var r = n(97118);
      let s = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: Number.POSITIVE_INFINITY,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new r.hX({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new r.SK({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new r.B4({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new r.B4({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let n = t ?? this.position;
          return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
        },
        inspectUint8(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          let t = e ?? this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          let n = this.inspectBytes(e);
          return (this.position += t ?? e), n;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint32();
          return (this.position += 4), e;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(e) {
          let t = this.position;
          return (
            this.assertPosition(e),
            (this.position = e),
            () => (this.position = t)
          );
        },
        _touch() {
          if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
          let e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1),
            e > 0 && this.recursiveReadCount++;
        },
      };
      function o(e, { recursiveReadLimit: t = 8192 } = {}) {
        let n = Object.create(s);
        return (
          (n.bytes = e),
          (n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (n.positionReadCount = new Map()),
          (n.recursiveReadLimit = t),
          n
        );
      }
    },
    90557: (e, t, n) => {
      n.d(t, { Ci: () => i, J8: () => a, MU: () => c });
      var r = n(79183),
        s = n(7441),
        o = n(41514);
      class i extends s.C {
        constructor({
          body: e,
          cause: t,
          details: n,
          headers: s,
          status: i,
          url: a,
        }) {
          super("HTTP request failed.", {
            cause: t,
            details: n,
            metaMessages: [
              i && `Status: ${i}`,
              `URL: ${(0, o.I)(a)}`,
              e && `Request body: ${(0, r.A)(e)}`,
            ].filter(Boolean),
            name: "HttpRequestError",
          }),
            Object.defineProperty(this, "body", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "headers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.body = e),
            (this.headers = s),
            (this.status = i),
            (this.url = a);
        }
      }
      s.C;
      class a extends s.C {
        constructor({ body: e, error: t, url: n }) {
          super("RPC Request failed.", {
            cause: t,
            details: t.message,
            metaMessages: [
              `URL: ${(0, o.I)(n)}`,
              `Request body: ${(0, r.A)(e)}`,
            ],
            name: "RpcRequestError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.code = t.code),
            (this.data = t.data);
        }
      }
      s.C;
      class c extends s.C {
        constructor({ body: e, url: t }) {
          super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [
              `URL: ${(0, o.I)(t)}`,
              `Request body: ${(0, r.A)(e)}`,
            ],
            name: "TimeoutError",
          });
        }
      }
    },
    93727: (e, t, n) => {
      n.d(t, { A1: () => u, di: () => i, iN: () => l });
      var r = n(58980),
        s = n(32840),
        o = n(87094);
      function i(e, t, n, { strict: r } = {}) {
        return (0, s.q)(e, { strict: !1 })
          ? l(e, t, n, { strict: r })
          : u(e, t, n, { strict: r });
      }
      function a(e, t) {
        if ("number" == typeof t && t > 0 && t > (0, o.E)(e) - 1)
          throw new r.ii({ offset: t, position: "start", size: (0, o.E)(e) });
      }
      function c(e, t, n) {
        if (
          "number" == typeof t &&
          "number" == typeof n &&
          (0, o.E)(e) !== n - t
        )
          throw new r.ii({ offset: n, position: "end", size: (0, o.E)(e) });
      }
      function u(e, t, n, { strict: r } = {}) {
        a(e, t);
        let s = e.slice(t, n);
        return r && c(s, t, n), s;
      }
      function l(e, t, n, { strict: r } = {}) {
        a(e, t);
        let s = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
        return r && c(s, t, n), s;
      }
    },
    94201: (e, t, n) => {
      n.d(t, { H2: () => i, Ty: () => s, u: () => a, xO: () => o });
      var r = n(7441);
      class s extends r.C {
        constructor({ max: e, min: t, signed: n, size: r, value: s }) {
          super(
            `Number "${s}" is not in safe ${
              r ? `${8 * r}-bit ${n ? "signed" : "unsigned"} ` : ""
            }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class o extends r.C {
        constructor(e) {
          super(
            `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
            { name: "InvalidBytesBooleanError" }
          );
        }
      }
      class i extends r.C {
        constructor(e) {
          super(
            `Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
            { name: "InvalidHexBooleanError" }
          );
        }
      }
      r.C;
      class a extends r.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
    },
    95782: (e, t, n) => {
      n.d(t, { C: () => c });
      var r,
        s,
        o = n(40194);
      let i = () => `@wagmi/core@${o.r}`;
      var a = function (e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      };
      class c extends Error {
        get docsBaseUrl() {
          return "https://wagmi.sh/core";
        }
        get version() {
          return i();
        }
        constructor(e, t = {}) {
          super(),
            r.add(this),
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
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiCoreError",
            });
          let n =
              t.cause instanceof c
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            s = (t.cause instanceof c && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(s
              ? [
                  `Docs: ${this.docsBaseUrl}${s}.html${
                    t.docsSlug ? `#${t.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(n ? [`Details: ${n}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = s),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return a(this, r, "m", s).call(this, this, e);
        }
      }
      (r = new WeakSet()),
        (s = function e(t, n) {
          return n?.(t)
            ? t
            : t.cause
            ? a(this, r, "m", e).call(this, t.cause, n)
            : t;
        });
    },
    97118: (e, t, n) => {
      n.d(t, { B4: () => s, SK: () => o, hX: () => i });
      var r = n(7441);
      class s extends r.C {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`, {
            name: "NegativeOffsetError",
          });
        }
      }
      class o extends r.C {
        constructor({ length: e, position: t }) {
          super(
            `Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`,
            { name: "PositionOutOfBoundsError" }
          );
        }
      }
      class i extends r.C {
        constructor({ count: e, limit: t }) {
          super(
            `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`,
            { name: "RecursiveReadLimitExceededError" }
          );
        }
      }
    },
    99702: (e, t, n) => {
      n.d(t, {
        BI: () => P,
        EB: () => x,
        Iy: () => c,
        Iz: () => v,
        MR: () => w,
        M_: () => y,
        Nc: () => l,
        O: () => u,
        Wq: () => b,
        YE: () => h,
        YF: () => a,
        YW: () => i,
        ZP: () => f,
        _z: () => m,
        d_: () => j,
        dm: () => O,
        fo: () => E,
        gH: () => d,
        j: () => A,
        kE: () => g,
        l3: () => C,
        nK: () => M,
        nM: () => $,
        yy: () => p,
      });
      var r = n(21159),
        s = n(87094),
        o = n(7441);
      class i extends o.C {
        constructor({ docsPath: e }) {
          super(
            "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
            { docsPath: e, name: "AbiConstructorNotFoundError" }
          );
        }
      }
      class a extends o.C {
        constructor({ docsPath: e }) {
          super(
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
          );
        }
      }
      o.C;
      class c extends o.C {
        constructor({ data: e, params: t, size: n }) {
          super(`Data size of ${n} bytes is too small for given parameters.`, {
            metaMessages: [
              `Params: (${(0, r.A)(t, { includeName: !0 })})`,
              `Data:   ${e} (${n} bytes)`,
            ],
            name: "AbiDecodingDataSizeTooSmallError",
          }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e),
            (this.params = t),
            (this.size = n);
        }
      }
      class u extends o.C {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError",
          });
        }
      }
      class l extends o.C {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(
            `ABI encoding array length mismatch for type ${n}.
Expected length: ${e}
Given length: ${t}`,
            { name: "AbiEncodingArrayLengthMismatchError" }
          );
        }
      }
      class d extends o.C {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${(0, s.E)(
              t
            )}) does not match expected size (bytes${e}).`,
            { name: "AbiEncodingBytesSizeMismatchError" }
          );
        }
      }
      class h extends o.C {
        constructor({ expectedLength: e, givenLength: t }) {
          super(
            `ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,
            { name: "AbiEncodingLengthMismatchError" }
          );
        }
      }
      class f extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Arguments (\`args\`) were provided to "${e}", but "${e}" on the ABI does not contain any parameters (\`inputs\`).
Cannot encode error result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the inputs exist on it.`,
            { docsPath: t, name: "AbiErrorInputsNotFoundError" }
          );
        }
      }
      class p extends o.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Error ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.`,
            { docsPath: t, name: "AbiErrorNotFoundError" }
          );
        }
      }
      class b extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiErrorSignatureNotFoundError" }
          ),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = e);
        }
      }
      class m extends o.C {
        constructor({ docsPath: e }) {
          super("Cannot extract event signature from empty topics.", {
            docsPath: e,
            name: "AbiEventSignatureEmptyTopicsError",
          });
        }
      }
      class g extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiEventSignatureNotFoundError" }
          );
        }
      }
      class y extends o.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Event ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
            { docsPath: t, name: "AbiEventNotFoundError" }
          );
        }
      }
      class v extends o.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionNotFoundError" }
          );
        }
      }
      class w extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionOutputsNotFoundError" }
          );
        }
      }
      class x extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded function signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiFunctionSignatureNotFoundError" }
          );
        }
      }
      class $ extends o.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              `\`${e.type}\` in \`${(0, r.B)(e.abiItem)}\`, and`,
              `\`${t.type}\` in \`${(0, r.B)(t.abiItem)}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
            name: "AbiItemAmbiguityError",
          });
        }
      }
      class P extends o.C {
        constructor({ expectedSize: e, givenSize: t }) {
          super(`Expected bytes${e}, got bytes${t}.`, {
            name: "BytesSizeMismatchError",
          });
        }
      }
      class E extends o.C {
        constructor({ abiItem: e, data: t, params: n, size: s }) {
          super(
            `Data size of ${s} bytes is too small for non-indexed event parameters.`,
            {
              metaMessages: [
                `Params: (${(0, r.A)(n, { includeName: !0 })})`,
                `Data:   ${t} (${s} bytes)`,
              ],
              name: "DecodeLogDataMismatch",
            }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e),
            (this.data = t),
            (this.params = n),
            (this.size = s);
        }
      }
      class C extends o.C {
        constructor({ abiItem: e, param: t }) {
          super(
            `Expected a topic for indexed event parameter${
              t.name ? ` "${t.name}"` : ""
            } on event "${(0, r.B)(e, { includeName: !0 })}".`,
            { name: "DecodeLogTopicsMismatch" }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e);
        }
      }
      class M extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiEncodingType" }
          );
        }
      }
      class A extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiDecodingType" }
          );
        }
      }
      class O extends o.C {
        constructor(e) {
          super(`Value "${e}" is not a valid array.`, {
            name: "InvalidArrayError",
          });
        }
      }
      class j extends o.C {
        constructor(e) {
          super(
            `"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,
            { name: "InvalidDefinitionTypeError" }
          );
        }
      }
      o.C;
    },
  },
]);
