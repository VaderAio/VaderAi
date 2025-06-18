(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8652],
  {
    17746: (r, t, e) => {
      "use strict";
      e.d(t, { r: () => n });
      let n = "bignumber/5.8.0";
    },
    45849: (r, t, e) => {
      "use strict";
      e.r(t),
        e.d(t, {
          arrayify: () => l,
          concat: () => f,
          hexConcat: () => y,
          hexDataLength: () => m,
          hexDataSlice: () => p,
          hexStripZeros: () => N,
          hexValue: () => v,
          hexZeroPad: () => A,
          hexlify: () => d,
          isBytes: () => u,
          isBytesLike: () => s,
          isHexString: () => c,
          joinSignature: () => w,
          splitSignature: () => b,
          stripZeros: () => h,
          zeroPad: () => g,
        });
      let n = new (e(83928).Logger)("bytes/5.8.0");
      function o(r) {
        return !!r.toHexString;
      }
      function i(r) {
        return (
          r.slice ||
            (r.slice = function () {
              let t = Array.prototype.slice.call(arguments);
              return i(new Uint8Array(Array.prototype.slice.apply(r, t)));
            }),
          r
        );
      }
      function s(r) {
        return (c(r) && !(r.length % 2)) || u(r);
      }
      function a(r) {
        return "number" == typeof r && r == r && r % 1 == 0;
      }
      function u(r) {
        if (null == r) return !1;
        if (r.constructor === Uint8Array) return !0;
        if ("string" == typeof r || !a(r.length) || r.length < 0) return !1;
        for (let t = 0; t < r.length; t++) {
          let e = r[t];
          if (!a(e) || e < 0 || e >= 256) return !1;
        }
        return !0;
      }
      function l(r, t) {
        if ((t || (t = {}), "number" == typeof r)) {
          n.checkSafeUint53(r, "invalid arrayify value");
          let t = [];
          for (; r; ) t.unshift(255 & r), (r = parseInt(String(r / 256)));
          return 0 === t.length && t.push(0), i(new Uint8Array(t));
        }
        if (
          (t.allowMissingPrefix &&
            "string" == typeof r &&
            "0x" !== r.substring(0, 2) &&
            (r = "0x" + r),
          o(r) && (r = r.toHexString()),
          c(r))
        ) {
          let e = r.substring(2);
          e.length % 2 &&
            ("left" === t.hexPad
              ? (e = "0" + e)
              : "right" === t.hexPad
              ? (e += "0")
              : n.throwArgumentError("hex data is odd-length", "value", r));
          let o = [];
          for (let r = 0; r < e.length; r += 2)
            o.push(parseInt(e.substring(r, r + 2), 16));
          return i(new Uint8Array(o));
        }
        return u(r)
          ? i(new Uint8Array(r))
          : n.throwArgumentError("invalid arrayify value", "value", r);
      }
      function f(r) {
        let t = r.map((r) => l(r)),
          e = new Uint8Array(t.reduce((r, t) => r + t.length, 0));
        return t.reduce((r, t) => (e.set(t, r), r + t.length), 0), i(e);
      }
      function h(r) {
        let t = l(r);
        if (0 === t.length) return t;
        let e = 0;
        for (; e < t.length && 0 === t[e]; ) e++;
        return e && (t = t.slice(e)), t;
      }
      function g(r, t) {
        (r = l(r)).length > t &&
          n.throwArgumentError("value out of range", "value", arguments[0]);
        let e = new Uint8Array(t);
        return e.set(r, t - r.length), i(e);
      }
      function c(r, t) {
        return (
          "string" == typeof r &&
          !!r.match(/^0x[0-9A-Fa-f]*$/) &&
          (!t || r.length === 2 + 2 * t)
        );
      }
      let E = "0123456789abcdef";
      function d(r, t) {
        if ((t || (t = {}), "number" == typeof r)) {
          n.checkSafeUint53(r, "invalid hexlify value");
          let t = "";
          for (; r; ) (t = E[15 & r] + t), (r = Math.floor(r / 16));
          return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00";
        }
        if ("bigint" == typeof r)
          return (r = r.toString(16)).length % 2 ? "0x0" + r : "0x" + r;
        if (
          (t.allowMissingPrefix &&
            "string" == typeof r &&
            "0x" !== r.substring(0, 2) &&
            (r = "0x" + r),
          o(r))
        )
          return r.toHexString();
        if (c(r))
          return (
            r.length % 2 &&
              ("left" === t.hexPad
                ? (r = "0x0" + r.substring(2))
                : "right" === t.hexPad
                ? (r += "0")
                : n.throwArgumentError("hex data is odd-length", "value", r)),
            r.toLowerCase()
          );
        if (u(r)) {
          let t = "0x";
          for (let e = 0; e < r.length; e++) {
            let n = r[e];
            t += E[(240 & n) >> 4] + E[15 & n];
          }
          return t;
        }
        return n.throwArgumentError("invalid hexlify value", "value", r);
      }
      function m(r) {
        if ("string" != typeof r) r = d(r);
        else if (!c(r) || r.length % 2) return null;
        return (r.length - 2) / 2;
      }
      function p(r, t, e) {
        return ("string" != typeof r
          ? (r = d(r))
          : (!c(r) || r.length % 2) &&
            n.throwArgumentError("invalid hexData", "value", r),
        (t = 2 + 2 * t),
        null != e)
          ? "0x" + r.substring(t, 2 + 2 * e)
          : "0x" + r.substring(t);
      }
      function y(r) {
        let t = "0x";
        return (
          r.forEach((r) => {
            t += d(r).substring(2);
          }),
          t
        );
      }
      function v(r) {
        let t = N(d(r, { hexPad: "left" }));
        return "0x" === t ? "0x0" : t;
      }
      function N(r) {
        "string" != typeof r && (r = d(r)),
          c(r) || n.throwArgumentError("invalid hex string", "value", r),
          (r = r.substring(2));
        let t = 0;
        for (; t < r.length && "0" === r[t]; ) t++;
        return "0x" + r.substring(t);
      }
      function A(r, t) {
        for (
          "string" != typeof r
            ? (r = d(r))
            : c(r) || n.throwArgumentError("invalid hex string", "value", r),
            r.length > 2 * t + 2 &&
              n.throwArgumentError("value out of range", "value", arguments[1]);
          r.length < 2 * t + 2;

        )
          r = "0x0" + r.substring(2);
        return r;
      }
      function b(r) {
        let t = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (s(r)) {
          let e = l(r);
          64 === e.length
            ? ((t.v = 27 + (e[32] >> 7)),
              (e[32] &= 127),
              (t.r = d(e.slice(0, 32))),
              (t.s = d(e.slice(32, 64))))
            : 65 === e.length
            ? ((t.r = d(e.slice(0, 32))),
              (t.s = d(e.slice(32, 64))),
              (t.v = e[64]))
            : n.throwArgumentError("invalid signature string", "signature", r),
            t.v < 27 &&
              (0 === t.v || 1 === t.v
                ? (t.v += 27)
                : n.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    r
                  )),
            (t.recoveryParam = 1 - (t.v % 2)),
            t.recoveryParam && (e[32] |= 128),
            (t._vs = d(e.slice(32, 64)));
        } else {
          if (
            ((t.r = r.r),
            (t.s = r.s),
            (t.v = r.v),
            (t.recoveryParam = r.recoveryParam),
            (t._vs = r._vs),
            null != t._vs)
          ) {
            let e = g(l(t._vs), 32);
            t._vs = d(e);
            let o = +(e[0] >= 128);
            null == t.recoveryParam
              ? (t.recoveryParam = o)
              : t.recoveryParam !== o &&
                n.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  r
                ),
              (e[0] &= 127);
            let i = d(e);
            null == t.s
              ? (t.s = i)
              : t.s !== i &&
                n.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  r
                );
          }
          if (null == t.recoveryParam)
            null == t.v
              ? n.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  r
                )
              : 0 === t.v || 1 === t.v
              ? (t.recoveryParam = t.v)
              : (t.recoveryParam = 1 - (t.v % 2));
          else if (null == t.v) t.v = 27 + t.recoveryParam;
          else {
            let e = 0 === t.v || 1 === t.v ? t.v : 1 - (t.v % 2);
            t.recoveryParam !== e &&
              n.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                r
              );
          }
          null != t.r && c(t.r)
            ? (t.r = A(t.r, 32))
            : n.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                r
              ),
            null != t.s && c(t.s)
              ? (t.s = A(t.s, 32))
              : n.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  r
                );
          let e = l(t.s);
          e[0] >= 128 &&
            n.throwArgumentError("signature s out of range", "signature", r),
            t.recoveryParam && (e[0] |= 128);
          let o = d(e);
          t._vs &&
            (c(t._vs) ||
              n.throwArgumentError("signature invalid _vs", "signature", r),
            (t._vs = A(t._vs, 32))),
            null == t._vs
              ? (t._vs = o)
              : t._vs !== o &&
                n.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  r
                );
        }
        return (
          (t.yParityAndS = t._vs),
          (t.compact = t.r + t.yParityAndS.substring(2)),
          t
        );
      }
      function w(r) {
        return d(f([(r = b(r)).r, r.s, r.recoveryParam ? "0x1c" : "0x1b"]));
      }
    },
    52598: (r, t, e) => {
      "use strict";
      e.r(t), e.d(t, { decode: () => h, encode: () => u });
      var n = e(45849),
        o = e(83928);
      let i = new o.Logger("rlp/5.8.0");
      function s(r) {
        let t = [];
        for (; r; ) t.unshift(255 & r), (r >>= 8);
        return t;
      }
      function a(r, t, e) {
        let n = 0;
        for (let o = 0; o < e; o++) n = 256 * n + r[t + o];
        return n;
      }
      function u(r) {
        return (0, n.hexlify)(
          (function r(t) {
            if (Array.isArray(t)) {
              let e = [];
              if (
                (t.forEach(function (t) {
                  e = e.concat(r(t));
                }),
                e.length <= 55)
              )
                return e.unshift(192 + e.length), e;
              let n = s(e.length);
              return n.unshift(247 + n.length), n.concat(e);
            }
            (0, n.isBytesLike)(t) ||
              i.throwArgumentError("RLP object must be BytesLike", "object", t);
            let e = Array.prototype.slice.call((0, n.arrayify)(t));
            if (1 === e.length && e[0] <= 127) return e;
            if (e.length <= 55) return e.unshift(128 + e.length), e;
            let o = s(e.length);
            return o.unshift(183 + o.length), o.concat(e);
          })(r)
        );
      }
      function l(r, t, e, n) {
        let s = [];
        for (; e < t + 1 + n; ) {
          let a = f(r, e);
          s.push(a.result),
            (e += a.consumed) > t + 1 + n &&
              i.throwError(
                "child data too short",
                o.Logger.errors.BUFFER_OVERRUN,
                {}
              );
        }
        return { consumed: 1 + n, result: s };
      }
      function f(r, t) {
        if (
          (0 === r.length &&
            i.throwError("data too short", o.Logger.errors.BUFFER_OVERRUN, {}),
          r[t] >= 248)
        ) {
          let e = r[t] - 247;
          t + 1 + e > r.length &&
            i.throwError(
              "data short segment too short",
              o.Logger.errors.BUFFER_OVERRUN,
              {}
            );
          let n = a(r, t + 1, e);
          return (
            t + 1 + e + n > r.length &&
              i.throwError(
                "data long segment too short",
                o.Logger.errors.BUFFER_OVERRUN,
                {}
              ),
            l(r, t, t + 1 + e, e + n)
          );
        }
        if (r[t] >= 192) {
          let e = r[t] - 192;
          return (
            t + 1 + e > r.length &&
              i.throwError(
                "data array too short",
                o.Logger.errors.BUFFER_OVERRUN,
                {}
              ),
            l(r, t, t + 1, e)
          );
        }
        if (r[t] >= 184) {
          let e = r[t] - 183;
          t + 1 + e > r.length &&
            i.throwError(
              "data array too short",
              o.Logger.errors.BUFFER_OVERRUN,
              {}
            );
          let s = a(r, t + 1, e);
          t + 1 + e + s > r.length &&
            i.throwError(
              "data array too short",
              o.Logger.errors.BUFFER_OVERRUN,
              {}
            );
          let u = (0, n.hexlify)(r.slice(t + 1 + e, t + 1 + e + s));
          return { consumed: 1 + e + s, result: u };
        }
        if (r[t] >= 128) {
          let e = r[t] - 128;
          t + 1 + e > r.length &&
            i.throwError("data too short", o.Logger.errors.BUFFER_OVERRUN, {});
          let s = (0, n.hexlify)(r.slice(t + 1, t + 1 + e));
          return { consumed: 1 + e, result: s };
        }
        return { consumed: 1, result: (0, n.hexlify)(r[t]) };
      }
      function h(r) {
        let t = (0, n.arrayify)(r),
          e = f(t, 0);
        return (
          e.consumed !== t.length &&
            i.throwArgumentError("invalid rlp data", "data", r),
          e.result
        );
      }
    },
    53099: (r, t, e) => {
      "use strict";
      e.r(t), e.d(t, { keccak256: () => s });
      var n = e(56937),
        o = e.n(n),
        i = e(45849);
      function s(r) {
        return "0x" + o().keccak_256((0, i.arrayify)(r));
      }
    },
    56937: (r, t, e) => {
      var n,
        o = e(49509);
      !(function () {
        "use strict";
        var i = "input is invalid type",
          s = "object" == typeof window,
          a = s ? window : {};
        a.JS_SHA3_NO_WINDOW && (s = !1);
        var u = !s && "object" == typeof self;
        !a.JS_SHA3_NO_NODE_JS &&
        "object" == typeof o &&
        o.versions &&
        o.versions.node
          ? (a = e.g)
          : u && (a = self);
        var l = !a.JS_SHA3_NO_COMMON_JS && r.exports,
          f = e.amdO,
          h = !a.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
          g = "0123456789abcdef".split(""),
          c = [4, 1024, 262144, 0x4000000],
          E = [0, 8, 16, 24],
          d = [
            1, 0, 32898, 0, 32906, 0x80000000, 0x80008000, 0x80000000, 32907, 0,
            0x80000001, 0, 0x80008081, 0x80000000, 32777, 0x80000000, 138, 0,
            136, 0, 0x80008009, 0, 0x8000000a, 0, 0x8000808b, 0, 139,
            0x80000000, 32905, 0x80000000, 32771, 0x80000000, 32770, 0x80000000,
            128, 0x80000000, 32778, 0, 0x8000000a, 0x80000000, 0x80008081,
            0x80000000, 32896, 0x80000000, 0x80000001, 0, 0x80008008,
            0x80000000,
          ],
          m = [224, 256, 384, 512],
          p = [128, 256],
          y = ["hex", "buffer", "arrayBuffer", "array", "digest"],
          v = { 128: 168, 256: 136 };
        (a.JS_SHA3_NO_NODE_JS || !Array.isArray) &&
          (Array.isArray = function (r) {
            return "[object Array]" === Object.prototype.toString.call(r);
          }),
          h &&
            (a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
            (ArrayBuffer.isView = function (r) {
              return (
                "object" == typeof r &&
                r.buffer &&
                r.buffer.constructor === ArrayBuffer
              );
            });
        for (
          var N = function (r, t, e) {
              return function (n) {
                return new L(r, t, r).update(n)[e]();
              };
            },
            A = function (r, t, e) {
              return function (n, o) {
                return new L(r, t, o).update(n)[e]();
              };
            },
            b = function (r, t, e) {
              return function (t, n, o, i) {
                return S["cshake" + r].update(t, n, o, i)[e]();
              };
            },
            w = function (r, t, e) {
              return function (t, n, o, i) {
                return S["kmac" + r].update(t, n, o, i)[e]();
              };
            },
            x = function (r, t, e, n) {
              for (var o = 0; o < y.length; ++o) {
                var i = y[o];
                r[i] = t(e, n, i);
              }
              return r;
            },
            _ = function (r, t) {
              var e = N(r, t, "hex");
              return (
                (e.create = function () {
                  return new L(r, t, r);
                }),
                (e.update = function (r) {
                  return e.create().update(r);
                }),
                x(e, N, r, t)
              );
            },
            R = [
              {
                name: "keccak",
                padding: [1, 256, 65536, 0x1000000],
                bits: m,
                createMethod: _,
              },
              {
                name: "sha3",
                padding: [6, 1536, 393216, 0x6000000],
                bits: m,
                createMethod: _,
              },
              {
                name: "shake",
                padding: [31, 7936, 2031616, 0x1f000000],
                bits: p,
                createMethod: function (r, t) {
                  var e = A(r, t, "hex");
                  return (
                    (e.create = function (e) {
                      return new L(r, t, e);
                    }),
                    (e.update = function (r, t) {
                      return e.create(t).update(r);
                    }),
                    x(e, A, r, t)
                  );
                },
              },
              {
                name: "cshake",
                padding: c,
                bits: p,
                createMethod: function (r, t) {
                  var e = v[r],
                    n = b(r, t, "hex");
                  return (
                    (n.create = function (n, o, i) {
                      return o || i
                        ? new L(r, t, n).bytepad([o, i], e)
                        : S["shake" + r].create(n);
                    }),
                    (n.update = function (r, t, e, o) {
                      return n.create(t, e, o).update(r);
                    }),
                    x(n, b, r, t)
                  );
                },
              },
              {
                name: "kmac",
                padding: c,
                bits: p,
                createMethod: function (r, t) {
                  var e = v[r],
                    n = w(r, t, "hex");
                  return (
                    (n.create = function (n, o, i) {
                      return new k(r, t, o)
                        .bytepad(["KMAC", i], e)
                        .bytepad([n], e);
                    }),
                    (n.update = function (r, t, e, o) {
                      return n.create(r, e, o).update(t);
                    }),
                    x(n, w, r, t)
                  );
                },
              },
            ],
            S = {},
            U = [],
            I = 0;
          I < R.length;
          ++I
        )
          for (var O = R[I], C = O.bits, P = 0; P < C.length; ++P) {
            var T = O.name + "_" + C[P];
            if (
              (U.push(T),
              (S[T] = O.createMethod(C[P], O.padding)),
              "sha3" !== O.name)
            ) {
              var B = O.name + C[P];
              U.push(B), (S[B] = S[T]);
            }
          }
        function L(r, t, e) {
          (this.blocks = []),
            (this.s = []),
            (this.padding = t),
            (this.outputBits = e),
            (this.reset = !0),
            (this.finalized = !1),
            (this.block = 0),
            (this.start = 0),
            (this.blockCount = (1600 - (r << 1)) >> 5),
            (this.byteCount = this.blockCount << 2),
            (this.outputBlocks = e >> 5),
            (this.extraBytes = (31 & e) >> 3);
          for (var n = 0; n < 50; ++n) this.s[n] = 0;
        }
        function k(r, t, e) {
          L.call(this, r, t, e);
        }
        (L.prototype.update = function (r) {
          if (this.finalized) throw Error("finalize already called");
          var t,
            e = typeof r;
          if ("string" !== e) {
            if ("object" === e) {
              if (null === r) throw Error(i);
              else if (h && r.constructor === ArrayBuffer)
                r = new Uint8Array(r);
              else if (!Array.isArray(r) && (!h || !ArrayBuffer.isView(r)))
                throw Error(i);
            } else throw Error(i);
            t = !0;
          }
          for (
            var n,
              o,
              s = this.blocks,
              a = this.byteCount,
              u = r.length,
              l = this.blockCount,
              f = 0,
              g = this.s;
            f < u;

          ) {
            if (this.reset)
              for (n = 1, this.reset = !1, s[0] = this.block; n < l + 1; ++n)
                s[n] = 0;
            if (t)
              for (n = this.start; f < u && n < a; ++f)
                s[n >> 2] |= r[f] << E[3 & n++];
            else
              for (n = this.start; f < u && n < a; ++f)
                (o = r.charCodeAt(f)) < 128
                  ? (s[n >> 2] |= o << E[3 & n++])
                  : (o < 2048
                      ? (s[n >> 2] |= (192 | (o >> 6)) << E[3 & n++])
                      : (o < 55296 || o >= 57344
                          ? (s[n >> 2] |= (224 | (o >> 12)) << E[3 & n++])
                          : ((o =
                              65536 +
                              (((1023 & o) << 10) |
                                (1023 & r.charCodeAt(++f)))),
                            (s[n >> 2] |= (240 | (o >> 18)) << E[3 & n++]),
                            (s[n >> 2] |=
                              (128 | ((o >> 12) & 63)) << E[3 & n++])),
                        (s[n >> 2] |= (128 | ((o >> 6) & 63)) << E[3 & n++])),
                    (s[n >> 2] |= (128 | (63 & o)) << E[3 & n++]));
            if (((this.lastByteIndex = n), n >= a)) {
              for (this.start = n - a, this.block = s[l], n = 0; n < l; ++n)
                g[n] ^= s[n];
              F(g), (this.reset = !0);
            } else this.start = n;
          }
          return this;
        }),
          (L.prototype.encode = function (r, t) {
            var e = 255 & r,
              n = 1,
              o = [e];
            for (r >>= 8, e = 255 & r; e > 0; )
              o.unshift(e), (r >>= 8), (e = 255 & r), ++n;
            return t ? o.push(n) : o.unshift(n), this.update(o), o.length;
          }),
          (L.prototype.encodeString = function (r) {
            var t,
              e = typeof r;
            if ("string" !== e) {
              if ("object" === e) {
                if (null === r) throw Error(i);
                else if (h && r.constructor === ArrayBuffer)
                  r = new Uint8Array(r);
                else if (!Array.isArray(r) && (!h || !ArrayBuffer.isView(r)))
                  throw Error(i);
              } else throw Error(i);
              t = !0;
            }
            var n = 0,
              o = r.length;
            if (t) n = o;
            else
              for (var s = 0; s < r.length; ++s) {
                var a = r.charCodeAt(s);
                a < 128
                  ? (n += 1)
                  : a < 2048
                  ? (n += 2)
                  : a < 55296 || a >= 57344
                  ? (n += 3)
                  : ((a =
                      65536 +
                      (((1023 & a) << 10) | (1023 & r.charCodeAt(++s)))),
                    (n += 4));
              }
            return (n += this.encode(8 * n)), this.update(r), n;
          }),
          (L.prototype.bytepad = function (r, t) {
            for (var e = this.encode(t), n = 0; n < r.length; ++n)
              e += this.encodeString(r[n]);
            var o = [];
            return (o.length = t - (e % t)), this.update(o), this;
          }),
          (L.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var r = this.blocks,
                t = this.lastByteIndex,
                e = this.blockCount,
                n = this.s;
              if (
                ((r[t >> 2] |= this.padding[3 & t]),
                this.lastByteIndex === this.byteCount)
              )
                for (t = 1, r[0] = r[e]; t < e + 1; ++t) r[t] = 0;
              for (r[e - 1] |= 0x80000000, t = 0; t < e; ++t) n[t] ^= r[t];
              F(n);
            }
          }),
          (L.prototype.toString = L.prototype.hex =
            function () {
              this.finalize();
              for (
                var r,
                  t = this.blockCount,
                  e = this.s,
                  n = this.outputBlocks,
                  o = this.extraBytes,
                  i = 0,
                  s = 0,
                  a = "";
                s < n;

              ) {
                for (i = 0; i < t && s < n; ++i, ++s)
                  a +=
                    g[((r = e[i]) >> 4) & 15] +
                    g[15 & r] +
                    g[(r >> 12) & 15] +
                    g[(r >> 8) & 15] +
                    g[(r >> 20) & 15] +
                    g[(r >> 16) & 15] +
                    g[(r >> 28) & 15] +
                    g[(r >> 24) & 15];
                s % t == 0 && (F(e), (i = 0));
              }
              return (
                o &&
                  ((a += g[((r = e[i]) >> 4) & 15] + g[15 & r]),
                  o > 1 && (a += g[(r >> 12) & 15] + g[(r >> 8) & 15]),
                  o > 2 && (a += g[(r >> 20) & 15] + g[(r >> 16) & 15])),
                a
              );
            }),
          (L.prototype.arrayBuffer = function () {
            this.finalize();
            for (
              var r,
                t = this.blockCount,
                e = this.s,
                n = this.outputBlocks,
                o = this.extraBytes,
                i = 0,
                s = 0,
                a = this.outputBits >> 3,
                u = new Uint32Array(
                  (r = new ArrayBuffer(o ? (n + 1) << 2 : a))
                );
              s < n;

            ) {
              for (i = 0; i < t && s < n; ++i, ++s) u[s] = e[i];
              s % t == 0 && F(e);
            }
            return o && ((u[i] = e[i]), (r = r.slice(0, a))), r;
          }),
          (L.prototype.buffer = L.prototype.arrayBuffer),
          (L.prototype.digest = L.prototype.array =
            function () {
              this.finalize();
              for (
                var r,
                  t,
                  e = this.blockCount,
                  n = this.s,
                  o = this.outputBlocks,
                  i = this.extraBytes,
                  s = 0,
                  a = 0,
                  u = [];
                a < o;

              ) {
                for (s = 0; s < e && a < o; ++s, ++a)
                  (r = a << 2),
                    (t = n[s]),
                    (u[r] = 255 & t),
                    (u[r + 1] = (t >> 8) & 255),
                    (u[r + 2] = (t >> 16) & 255),
                    (u[r + 3] = (t >> 24) & 255);
                a % e == 0 && F(n);
              }
              return (
                i &&
                  ((r = a << 2),
                  (t = n[s]),
                  (u[r] = 255 & t),
                  i > 1 && (u[r + 1] = (t >> 8) & 255),
                  i > 2 && (u[r + 2] = (t >> 16) & 255)),
                u
              );
            }),
          (k.prototype = new L()),
          (k.prototype.finalize = function () {
            return (
              this.encode(this.outputBits, !0), L.prototype.finalize.call(this)
            );
          });
        var F = function (r) {
          var t,
            e,
            n,
            o,
            i,
            s,
            a,
            u,
            l,
            f,
            h,
            g,
            c,
            E,
            m,
            p,
            y,
            v,
            N,
            A,
            b,
            w,
            x,
            _,
            R,
            S,
            U,
            I,
            O,
            C,
            P,
            T,
            B,
            L,
            k,
            F,
            M,
            D,
            G,
            H,
            z,
            j,
            V,
            W,
            J,
            X,
            K,
            Z,
            $,
            Y,
            q,
            Q,
            rr,
            rt,
            re,
            rn,
            ro,
            ri,
            rs,
            ra,
            ru,
            rl,
            rf;
          for (n = 0; n < 48; n += 2)
            (o = r[0] ^ r[10] ^ r[20] ^ r[30] ^ r[40]),
              (i = r[1] ^ r[11] ^ r[21] ^ r[31] ^ r[41]),
              (s = r[2] ^ r[12] ^ r[22] ^ r[32] ^ r[42]),
              (a = r[3] ^ r[13] ^ r[23] ^ r[33] ^ r[43]),
              (u = r[4] ^ r[14] ^ r[24] ^ r[34] ^ r[44]),
              (l = r[5] ^ r[15] ^ r[25] ^ r[35] ^ r[45]),
              (f = r[6] ^ r[16] ^ r[26] ^ r[36] ^ r[46]),
              (h = r[7] ^ r[17] ^ r[27] ^ r[37] ^ r[47]),
              (g = r[8] ^ r[18] ^ r[28] ^ r[38] ^ r[48]),
              (c = r[9] ^ r[19] ^ r[29] ^ r[39] ^ r[49]),
              (t = g ^ ((s << 1) | (a >>> 31))),
              (e = c ^ ((a << 1) | (s >>> 31))),
              (r[0] ^= t),
              (r[1] ^= e),
              (r[10] ^= t),
              (r[11] ^= e),
              (r[20] ^= t),
              (r[21] ^= e),
              (r[30] ^= t),
              (r[31] ^= e),
              (r[40] ^= t),
              (r[41] ^= e),
              (t = o ^ ((u << 1) | (l >>> 31))),
              (e = i ^ ((l << 1) | (u >>> 31))),
              (r[2] ^= t),
              (r[3] ^= e),
              (r[12] ^= t),
              (r[13] ^= e),
              (r[22] ^= t),
              (r[23] ^= e),
              (r[32] ^= t),
              (r[33] ^= e),
              (r[42] ^= t),
              (r[43] ^= e),
              (t = s ^ ((f << 1) | (h >>> 31))),
              (e = a ^ ((h << 1) | (f >>> 31))),
              (r[4] ^= t),
              (r[5] ^= e),
              (r[14] ^= t),
              (r[15] ^= e),
              (r[24] ^= t),
              (r[25] ^= e),
              (r[34] ^= t),
              (r[35] ^= e),
              (r[44] ^= t),
              (r[45] ^= e),
              (t = u ^ ((g << 1) | (c >>> 31))),
              (e = l ^ ((c << 1) | (g >>> 31))),
              (r[6] ^= t),
              (r[7] ^= e),
              (r[16] ^= t),
              (r[17] ^= e),
              (r[26] ^= t),
              (r[27] ^= e),
              (r[36] ^= t),
              (r[37] ^= e),
              (r[46] ^= t),
              (r[47] ^= e),
              (t = f ^ ((o << 1) | (i >>> 31))),
              (e = h ^ ((i << 1) | (o >>> 31))),
              (r[8] ^= t),
              (r[9] ^= e),
              (r[18] ^= t),
              (r[19] ^= e),
              (r[28] ^= t),
              (r[29] ^= e),
              (r[38] ^= t),
              (r[39] ^= e),
              (r[48] ^= t),
              (r[49] ^= e),
              (E = r[0]),
              (m = r[1]),
              (X = (r[11] << 4) | (r[10] >>> 28)),
              (K = (r[10] << 4) | (r[11] >>> 28)),
              (I = (r[20] << 3) | (r[21] >>> 29)),
              (O = (r[21] << 3) | (r[20] >>> 29)),
              (ra = (r[31] << 9) | (r[30] >>> 23)),
              (ru = (r[30] << 9) | (r[31] >>> 23)),
              (j = (r[40] << 18) | (r[41] >>> 14)),
              (V = (r[41] << 18) | (r[40] >>> 14)),
              (L = (r[2] << 1) | (r[3] >>> 31)),
              (k = (r[3] << 1) | (r[2] >>> 31)),
              (p = (r[13] << 12) | (r[12] >>> 20)),
              (y = (r[12] << 12) | (r[13] >>> 20)),
              (Z = (r[22] << 10) | (r[23] >>> 22)),
              ($ = (r[23] << 10) | (r[22] >>> 22)),
              (C = (r[33] << 13) | (r[32] >>> 19)),
              (P = (r[32] << 13) | (r[33] >>> 19)),
              (rl = (r[42] << 2) | (r[43] >>> 30)),
              (rf = (r[43] << 2) | (r[42] >>> 30)),
              (rt = (r[5] << 30) | (r[4] >>> 2)),
              (re = (r[4] << 30) | (r[5] >>> 2)),
              (F = (r[14] << 6) | (r[15] >>> 26)),
              (M = (r[15] << 6) | (r[14] >>> 26)),
              (v = (r[25] << 11) | (r[24] >>> 21)),
              (N = (r[24] << 11) | (r[25] >>> 21)),
              (Y = (r[34] << 15) | (r[35] >>> 17)),
              (q = (r[35] << 15) | (r[34] >>> 17)),
              (T = (r[45] << 29) | (r[44] >>> 3)),
              (B = (r[44] << 29) | (r[45] >>> 3)),
              (_ = (r[6] << 28) | (r[7] >>> 4)),
              (R = (r[7] << 28) | (r[6] >>> 4)),
              (rn = (r[17] << 23) | (r[16] >>> 9)),
              (ro = (r[16] << 23) | (r[17] >>> 9)),
              (D = (r[26] << 25) | (r[27] >>> 7)),
              (G = (r[27] << 25) | (r[26] >>> 7)),
              (A = (r[36] << 21) | (r[37] >>> 11)),
              (b = (r[37] << 21) | (r[36] >>> 11)),
              (Q = (r[47] << 24) | (r[46] >>> 8)),
              (rr = (r[46] << 24) | (r[47] >>> 8)),
              (W = (r[8] << 27) | (r[9] >>> 5)),
              (J = (r[9] << 27) | (r[8] >>> 5)),
              (S = (r[18] << 20) | (r[19] >>> 12)),
              (U = (r[19] << 20) | (r[18] >>> 12)),
              (ri = (r[29] << 7) | (r[28] >>> 25)),
              (rs = (r[28] << 7) | (r[29] >>> 25)),
              (H = (r[38] << 8) | (r[39] >>> 24)),
              (z = (r[39] << 8) | (r[38] >>> 24)),
              (w = (r[48] << 14) | (r[49] >>> 18)),
              (x = (r[49] << 14) | (r[48] >>> 18)),
              (r[0] = E ^ (~p & v)),
              (r[1] = m ^ (~y & N)),
              (r[10] = _ ^ (~S & I)),
              (r[11] = R ^ (~U & O)),
              (r[20] = L ^ (~F & D)),
              (r[21] = k ^ (~M & G)),
              (r[30] = W ^ (~X & Z)),
              (r[31] = J ^ (~K & $)),
              (r[40] = rt ^ (~rn & ri)),
              (r[41] = re ^ (~ro & rs)),
              (r[2] = p ^ (~v & A)),
              (r[3] = y ^ (~N & b)),
              (r[12] = S ^ (~I & C)),
              (r[13] = U ^ (~O & P)),
              (r[22] = F ^ (~D & H)),
              (r[23] = M ^ (~G & z)),
              (r[32] = X ^ (~Z & Y)),
              (r[33] = K ^ (~$ & q)),
              (r[42] = rn ^ (~ri & ra)),
              (r[43] = ro ^ (~rs & ru)),
              (r[4] = v ^ (~A & w)),
              (r[5] = N ^ (~b & x)),
              (r[14] = I ^ (~C & T)),
              (r[15] = O ^ (~P & B)),
              (r[24] = D ^ (~H & j)),
              (r[25] = G ^ (~z & V)),
              (r[34] = Z ^ (~Y & Q)),
              (r[35] = $ ^ (~q & rr)),
              (r[44] = ri ^ (~ra & rl)),
              (r[45] = rs ^ (~ru & rf)),
              (r[6] = A ^ (~w & E)),
              (r[7] = b ^ (~x & m)),
              (r[16] = C ^ (~T & _)),
              (r[17] = P ^ (~B & R)),
              (r[26] = H ^ (~j & L)),
              (r[27] = z ^ (~V & k)),
              (r[36] = Y ^ (~Q & W)),
              (r[37] = q ^ (~rr & J)),
              (r[46] = ra ^ (~rl & rt)),
              (r[47] = ru ^ (~rf & re)),
              (r[8] = w ^ (~E & p)),
              (r[9] = x ^ (~m & y)),
              (r[18] = T ^ (~_ & S)),
              (r[19] = B ^ (~R & U)),
              (r[28] = j ^ (~L & F)),
              (r[29] = V ^ (~k & M)),
              (r[38] = Q ^ (~W & X)),
              (r[39] = rr ^ (~J & K)),
              (r[48] = rl ^ (~rt & rn)),
              (r[49] = rf ^ (~re & ro)),
              (r[0] ^= d[n]),
              (r[1] ^= d[n + 1]);
        };
        if (l) r.exports = S;
        else {
          for (I = 0; I < U.length; ++I) a[U[I]] = S[U[I]];
          f &&
            (void 0 ===
              (n = function () {
                return S;
              }.call(t, e, t, r)) ||
              (r.exports = n));
        }
      })();
    },
    68652: (r, t, e) => {
      "use strict";
      e.r(t),
        e.d(t, {
          getAddress: () => g,
          getContractAddress: () => d,
          getCreate2Address: () => m,
          getIcapAddress: () => E,
          isAddress: () => c,
        });
      var n = e(45849),
        o = e(84784),
        i = e(53099),
        s = e(52598);
      let a = new (e(83928).Logger)("address/5.8.0");
      function u(r) {
        (0, n.isHexString)(r, 20) ||
          a.throwArgumentError("invalid address", "address", r);
        let t = (r = r.toLowerCase()).substring(2).split(""),
          e = new Uint8Array(40);
        for (let r = 0; r < 40; r++) e[r] = t[r].charCodeAt(0);
        let o = (0, n.arrayify)((0, i.keccak256)(e));
        for (let r = 0; r < 40; r += 2)
          o[r >> 1] >> 4 >= 8 && (t[r] = t[r].toUpperCase()),
            (15 & o[r >> 1]) >= 8 && (t[r + 1] = t[r + 1].toUpperCase());
        return "0x" + t.join("");
      }
      let l = {};
      for (let r = 0; r < 10; r++) l[String(r)] = String(r);
      for (let r = 0; r < 26; r++)
        l[String.fromCharCode(65 + r)] = String(10 + r);
      let f = Math.floor(
        Math.log10
          ? Math.log10(0x1fffffffffffff)
          : Math.log(0x1fffffffffffff) / Math.LN10
      );
      function h(r) {
        let t = (r =
          (r = r.toUpperCase()).substring(4) + r.substring(0, 2) + "00")
          .split("")
          .map((r) => l[r])
          .join("");
        for (; t.length >= f; ) {
          let r = t.substring(0, f);
          t = (parseInt(r, 10) % 97) + t.substring(r.length);
        }
        let e = String(98 - (parseInt(t, 10) % 97));
        for (; e.length < 2; ) e = "0" + e;
        return e;
      }
      function g(r) {
        let t = null;
        if (
          ("string" != typeof r &&
            a.throwArgumentError("invalid address", "address", r),
          r.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          "0x" !== r.substring(0, 2) && (r = "0x" + r),
            (t = u(r)),
            r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              t !== r &&
              a.throwArgumentError("bad address checksum", "address", r);
        else if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (
            r.substring(2, 4) !== h(r) &&
              a.throwArgumentError("bad icap checksum", "address", r),
              t = (0, o.Os)(r.substring(4));
            t.length < 40;

          )
            t = "0" + t;
          t = u("0x" + t);
        } else a.throwArgumentError("invalid address", "address", r);
        return t;
      }
      function c(r) {
        try {
          return g(r), !0;
        } catch (r) {}
        return !1;
      }
      function E(r) {
        let t = (0, o.ii)(g(r).substring(2)).toUpperCase();
        for (; t.length < 30; ) t = "0" + t;
        return "XE" + h("XE00" + t) + t;
      }
      function d(r) {
        let t = null;
        try {
          t = g(r.from);
        } catch (t) {
          a.throwArgumentError("missing from address", "transaction", r);
        }
        let e = (0, n.stripZeros)(
          (0, n.arrayify)(o.gH.from(r.nonce).toHexString())
        );
        return g(
          (0, n.hexDataSlice)((0, i.keccak256)((0, s.encode)([t, e])), 12)
        );
      }
      function m(r, t, e) {
        return (
          32 !== (0, n.hexDataLength)(t) &&
            a.throwArgumentError("salt must be 32 bytes", "salt", t),
          32 !== (0, n.hexDataLength)(e) &&
            a.throwArgumentError(
              "initCodeHash must be 32 bytes",
              "initCodeHash",
              e
            ),
          g(
            (0, n.hexDataSlice)(
              (0, i.keccak256)((0, n.concat)(["0xff", g(r), t, e])),
              12
            )
          )
        );
      }
    },
    83928: (r, t, e) => {
      "use strict";
      var n, o;
      e.r(t),
        e.d(t, { ErrorCode: () => o, LogLevel: () => n, Logger: () => g });
      let i = !1,
        s = !1,
        a = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 },
        u = a.default,
        l = null,
        f = (function () {
          try {
            let r = [];
            if (
              (["NFD", "NFC", "NFKD", "NFKC"].forEach((t) => {
                try {
                  if ("test" !== "test".normalize(t))
                    throw Error("bad normalize");
                } catch (e) {
                  r.push(t);
                }
              }),
              r.length)
            )
              throw Error("missing " + r.join(", "));
            if (
              String.fromCharCode(233).normalize("NFD") !==
              String.fromCharCode(101, 769)
            )
              throw Error("broken implementation");
          } catch (r) {
            return r.message;
          }
          return null;
        })();
      !(function (r) {
        (r.DEBUG = "DEBUG"),
          (r.INFO = "INFO"),
          (r.WARNING = "WARNING"),
          (r.ERROR = "ERROR"),
          (r.OFF = "OFF");
      })(n || (n = {})),
        (function (r) {
          (r.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (r.NETWORK_ERROR = "NETWORK_ERROR"),
            (r.SERVER_ERROR = "SERVER_ERROR"),
            (r.TIMEOUT = "TIMEOUT"),
            (r.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (r.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (r.MISSING_NEW = "MISSING_NEW"),
            (r.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (r.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (r.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (r.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (r.ACTION_REJECTED = "ACTION_REJECTED");
        })(o || (o = {}));
      let h = "0123456789abcdef";
      class g {
        constructor(r) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: r,
            writable: !1,
          });
        }
        _log(r, t) {
          let e = r.toLowerCase();
          null == a[e] &&
            this.throwArgumentError("invalid log level name", "logLevel", r),
            u > a[e] || console.log.apply(console, t);
        }
        debug(...r) {
          this._log(g.levels.DEBUG, r);
        }
        info(...r) {
          this._log(g.levels.INFO, r);
        }
        warn(...r) {
          this._log(g.levels.WARNING, r);
        }
        makeError(r, t, e) {
          if (s) return this.makeError("censored error", t, {});
          t || (t = g.errors.UNKNOWN_ERROR), e || (e = {});
          let n = [];
          Object.keys(e).forEach((r) => {
            let t = e[r];
            try {
              if (t instanceof Uint8Array) {
                let e = "";
                for (let r = 0; r < t.length; r++)
                  (e += h[t[r] >> 4]), (e += h[15 & t[r]]);
                n.push(r + "=Uint8Array(0x" + e + ")");
              } else n.push(r + "=" + JSON.stringify(t));
            } catch (t) {
              n.push(r + "=" + JSON.stringify(e[r].toString()));
            }
          }),
            n.push(`code=${t}`),
            n.push(`version=${this.version}`);
          let i = r,
            a = "";
          switch (t) {
            case o.NUMERIC_FAULT: {
              a = "NUMERIC_FAULT";
              let t = r;
              switch (t) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  a += "-" + t;
                  break;
                case "negative-power":
                case "negative-width":
                  a += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  a += "-unbound-result";
              }
              break;
            }
            case o.CALL_EXCEPTION:
            case o.INSUFFICIENT_FUNDS:
            case o.MISSING_NEW:
            case o.NONCE_EXPIRED:
            case o.REPLACEMENT_UNDERPRICED:
            case o.TRANSACTION_REPLACED:
            case o.UNPREDICTABLE_GAS_LIMIT:
              a = t;
          }
          a && (r += " [ See: https://links.ethers.org/v5-errors-" + a + " ]"),
            n.length && (r += " (" + n.join(", ") + ")");
          let u = Error(r);
          return (
            (u.reason = i),
            (u.code = t),
            Object.keys(e).forEach(function (r) {
              u[r] = e[r];
            }),
            u
          );
        }
        throwError(r, t, e) {
          throw this.makeError(r, t, e);
        }
        throwArgumentError(r, t, e) {
          return this.throwError(r, g.errors.INVALID_ARGUMENT, {
            argument: t,
            value: e,
          });
        }
        assert(r, t, e, n) {
          r || this.throwError(t, e, n);
        }
        assertArgument(r, t, e, n) {
          r || this.throwArgumentError(t, e, n);
        }
        checkNormalize(r) {
          null == r && (r = "platform missing String.prototype.normalize"),
            f &&
              this.throwError(
                "platform missing String.prototype.normalize",
                g.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: f }
              );
        }
        checkSafeUint53(r, t) {
          "number" == typeof r &&
            (null == t && (t = "value not safe"),
            (r < 0 || r >= 0x1fffffffffffff) &&
              this.throwError(t, g.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: r,
              }),
            r % 1 &&
              this.throwError(t, g.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: r,
              }));
        }
        checkArgumentCount(r, t, e) {
          (e = e ? ": " + e : ""),
            r < t &&
              this.throwError(
                "missing argument" + e,
                g.errors.MISSING_ARGUMENT,
                { count: r, expectedCount: t }
              ),
            r > t &&
              this.throwError(
                "too many arguments" + e,
                g.errors.UNEXPECTED_ARGUMENT,
                { count: r, expectedCount: t }
              );
        }
        checkNew(r, t) {
          (r === Object || null == r) &&
            this.throwError("missing new", g.errors.MISSING_NEW, {
              name: t.name,
            });
        }
        checkAbstract(r, t) {
          r === t
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(t.name) +
                  " directly; use a sub-class",
                g.errors.UNSUPPORTED_OPERATION,
                { name: r.name, operation: "new" }
              )
            : (r === Object || null == r) &&
              this.throwError("missing new", g.errors.MISSING_NEW, {
                name: t.name,
              });
        }
        static globalLogger() {
          return l || (l = new g("logger/5.8.0")), l;
        }
        static setCensorship(r, t) {
          if (
            (!r &&
              t &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                g.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            i)
          ) {
            if (!r) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              g.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (s = !!r), (i = !!t);
        }
        static setLogLevel(r) {
          let t = a[r.toLowerCase()];
          if (null == t)
            return void g.globalLogger().warn("invalid log level - " + r);
          u = t;
        }
        static from(r) {
          return new g(r);
        }
      }
      (g.errors = o), (g.levels = n);
    },
    84784: (r, t, e) => {
      "use strict";
      e.d(t, { Os: () => y, YR: () => h, gH: () => c, ii: () => v });
      var n = e(92437),
        o = e.n(n),
        i = e(45849),
        s = e(83928),
        a = e(17746),
        u = o().BN;
      let l = new s.Logger(a.r),
        f = {};
      function h(r) {
        return (
          null != r &&
          (c.isBigNumber(r) ||
            ("number" == typeof r && r % 1 == 0) ||
            ("string" == typeof r && !!r.match(/^-?[0-9]+$/)) ||
            (0, i.isHexString)(r) ||
            "bigint" == typeof r ||
            (0, i.isBytes)(r))
        );
      }
      let g = !1;
      class c {
        constructor(r, t) {
          r !== f &&
            l.throwError(
              "cannot call constructor directly; use BigNumber.from",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new (BigNumber)" }
            ),
            (this._hex = t),
            (this._isBigNumber = !0),
            Object.freeze(this);
        }
        fromTwos(r) {
          return d(m(this).fromTwos(r));
        }
        toTwos(r) {
          return d(m(this).toTwos(r));
        }
        abs() {
          return "-" === this._hex[0] ? c.from(this._hex.substring(1)) : this;
        }
        add(r) {
          return d(m(this).add(m(r)));
        }
        sub(r) {
          return d(m(this).sub(m(r)));
        }
        div(r) {
          return (
            c.from(r).isZero() && p("division-by-zero", "div"),
            d(m(this).div(m(r)))
          );
        }
        mul(r) {
          return d(m(this).mul(m(r)));
        }
        mod(r) {
          let t = m(r);
          return t.isNeg() && p("division-by-zero", "mod"), d(m(this).umod(t));
        }
        pow(r) {
          let t = m(r);
          return t.isNeg() && p("negative-power", "pow"), d(m(this).pow(t));
        }
        and(r) {
          let t = m(r);
          return (
            (this.isNegative() || t.isNeg()) &&
              p("unbound-bitwise-result", "and"),
            d(m(this).and(t))
          );
        }
        or(r) {
          let t = m(r);
          return (
            (this.isNegative() || t.isNeg()) &&
              p("unbound-bitwise-result", "or"),
            d(m(this).or(t))
          );
        }
        xor(r) {
          let t = m(r);
          return (
            (this.isNegative() || t.isNeg()) &&
              p("unbound-bitwise-result", "xor"),
            d(m(this).xor(t))
          );
        }
        mask(r) {
          return (
            (this.isNegative() || r < 0) && p("negative-width", "mask"),
            d(m(this).maskn(r))
          );
        }
        shl(r) {
          return (
            (this.isNegative() || r < 0) && p("negative-width", "shl"),
            d(m(this).shln(r))
          );
        }
        shr(r) {
          return (
            (this.isNegative() || r < 0) && p("negative-width", "shr"),
            d(m(this).shrn(r))
          );
        }
        eq(r) {
          return m(this).eq(m(r));
        }
        lt(r) {
          return m(this).lt(m(r));
        }
        lte(r) {
          return m(this).lte(m(r));
        }
        gt(r) {
          return m(this).gt(m(r));
        }
        gte(r) {
          return m(this).gte(m(r));
        }
        isNegative() {
          return "-" === this._hex[0];
        }
        isZero() {
          return m(this).isZero();
        }
        toNumber() {
          try {
            return m(this).toNumber();
          } catch (r) {
            p("overflow", "toNumber", this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (r) {}
          return l.throwError(
            "this platform does not support BigInt",
            s.Logger.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() }
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? g ||
                  ((g = !0),
                  l.warn(
                    "BigNumber.toString does not accept any parameters; base-10 is assumed"
                  ))
                : 16 === arguments[0]
                ? l.throwError(
                    "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                    s.Logger.errors.UNEXPECTED_ARGUMENT,
                    {}
                  )
                : l.throwError(
                    "BigNumber.toString does not accept parameters",
                    s.Logger.errors.UNEXPECTED_ARGUMENT,
                    {}
                  )),
            m(this).toString(10)
          );
        }
        toHexString() {
          return this._hex;
        }
        toJSON(r) {
          return { type: "BigNumber", hex: this.toHexString() };
        }
        static from(r) {
          if (r instanceof c) return r;
          if ("string" == typeof r)
            return r.match(/^-?0x[0-9a-f]+$/i)
              ? new c(f, E(r))
              : r.match(/^-?[0-9]+$/)
              ? new c(f, E(new u(r)))
              : l.throwArgumentError("invalid BigNumber string", "value", r);
          if ("number" == typeof r)
            return (
              r % 1 && p("underflow", "BigNumber.from", r),
              (r >= 0x1fffffffffffff || r <= -0x1fffffffffffff) &&
                p("overflow", "BigNumber.from", r),
              c.from(String(r))
            );
          if ("bigint" == typeof r) return c.from(r.toString());
          if ((0, i.isBytes)(r)) return c.from((0, i.hexlify)(r));
          if (r)
            if (r.toHexString) {
              let t = r.toHexString();
              if ("string" == typeof t) return c.from(t);
            } else {
              let t = r._hex;
              if (
                (null == t && "BigNumber" === r.type && (t = r.hex),
                "string" == typeof t &&
                  ((0, i.isHexString)(t) ||
                    ("-" === t[0] && (0, i.isHexString)(t.substring(1)))))
              )
                return c.from(t);
            }
          return l.throwArgumentError("invalid BigNumber value", "value", r);
        }
        static isBigNumber(r) {
          return !!(r && r._isBigNumber);
        }
      }
      function E(r) {
        if ("string" != typeof r) return E(r.toString(16));
        if ("-" === r[0])
          return ("-" === (r = r.substring(1))[0] &&
            l.throwArgumentError("invalid hex", "value", r),
          "0x00" === (r = E(r)))
            ? r
            : "-" + r;
        if (("0x" !== r.substring(0, 2) && (r = "0x" + r), "0x" === r))
          return "0x00";
        for (
          r.length % 2 && (r = "0x0" + r.substring(2));
          r.length > 4 && "0x00" === r.substring(0, 4);

        )
          r = "0x" + r.substring(4);
        return r;
      }
      function d(r) {
        return c.from(E(r));
      }
      function m(r) {
        let t = c.from(r).toHexString();
        return "-" === t[0]
          ? new u("-" + t.substring(3), 16)
          : new u(t.substring(2), 16);
      }
      function p(r, t, e) {
        let n = { fault: r, operation: t };
        return (
          null != e && (n.value = e),
          l.throwError(r, s.Logger.errors.NUMERIC_FAULT, n)
        );
      }
      function y(r) {
        return new u(r, 36).toString(16);
      }
      function v(r) {
        return new u(r, 16).toString(36);
      }
    },
  },
]);
