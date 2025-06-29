"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9543],
  {
    99543: (t, e, r) => {
      r.d(e, { secp256k1: () => tc });
      var i = r(98693),
        n = r(19989);
      class o extends n.Vw {
        constructor(t, e) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, n.sd)(t);
          let r = (0, n.ZJ)(e);
          if (
            ((this.iHash = t.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let i = this.blockLen,
            o = new Uint8Array(i);
          o.set(r.length > i ? t.create().update(r).digest() : r);
          for (let t = 0; t < o.length; t++) o[t] ^= 54;
          this.iHash.update(o), (this.oHash = t.create());
          for (let t = 0; t < o.length; t++) o[t] ^= 106;
          this.oHash.update(o), (0, n.uH)(o);
        }
        update(t) {
          return (0, n.CC)(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          (0, n.CC)(this),
            (0, n.DO)(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy();
        }
        digest() {
          let t = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(t), t;
        }
        _cloneInto(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: e,
            iHash: r,
            finished: i,
            destroyed: n,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (t.finished = i),
            (t.destroyed = n),
            (t.blockLen = o),
            (t.outputLen = s),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = r._cloneInto(t.iHash)),
            t
          );
        }
        clone() {
          return this._cloneInto();
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let s = (t, e, r) => new o(t, e).update(r).digest();
      s.create = (t, e) => new o(t, e);
      let l = BigInt(0),
        a = BigInt(1);
      function f(t, e) {
        if ("boolean" != typeof e)
          throw Error(t + " boolean expected, got " + e);
      }
      function u(t) {
        let e = t.toString(16);
        return 1 & e.length ? "0" + e : e;
      }
      function d(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        return "" === t ? l : BigInt("0x" + t);
      }
      function c(t) {
        return d((0, n.My)(t));
      }
      function h(t) {
        return (0, n.DO)(t), d((0, n.My)(Uint8Array.from(t).reverse()));
      }
      function p(t, e) {
        return (0, n.aT)(t.toString(16).padStart(2 * e, "0"));
      }
      function g(t, e) {
        return p(t, e).reverse();
      }
      function m(t, e, r) {
        let i;
        if ("string" == typeof e)
          try {
            i = (0, n.aT)(e);
          } catch (e) {
            throw Error(t + " must be hex string or Uint8Array, cause: " + e);
          }
        else if ((0, n.aY)(e)) i = Uint8Array.from(e);
        else throw Error(t + " must be hex string or Uint8Array");
        let o = i.length;
        if ("number" == typeof r && o !== r)
          throw Error(t + " of length " + r + " expected, got " + o);
        return i;
      }
      let y = (t) => "bigint" == typeof t && l <= t,
        w = (t) => (a << BigInt(t)) - a;
      function E(t, e, r = {}) {
        if (!t || "object" != typeof t)
          throw Error("expected valid options object");
        function i(e, r, i) {
          let n = t[e];
          if (i && void 0 === n) return;
          let o = typeof n;
          if (o !== r || null === n)
            throw Error(`param "${e}" is invalid: expected ${r}, got ${o}`);
        }
        Object.entries(e).forEach(([t, e]) => i(t, e, !1)),
          Object.entries(r).forEach(([t, e]) => i(t, e, !0));
      }
      function b(t) {
        let e = new WeakMap();
        return (r, ...i) => {
          let n = e.get(r);
          if (void 0 !== n) return n;
          let o = t(r, ...i);
          return e.set(r, o), o;
        };
      }
      let v = BigInt(0),
        B = BigInt(1),
        x = BigInt(2),
        O = BigInt(3),
        I = BigInt(4),
        R = BigInt(5),
        S = BigInt(8);
      function N(t, e) {
        let r = t % e;
        return r >= v ? r : e + r;
      }
      function q(t, e, r) {
        let i = t;
        for (; e-- > v; ) (i *= i), (i %= r);
        return i;
      }
      function A(t, e) {
        if (t === v) throw Error("invert: expected non-zero number");
        if (e <= v) throw Error("invert: expected positive modulus, got " + e);
        let r = N(t, e),
          i = e,
          n = v,
          o = B,
          s = B,
          l = v;
        for (; r !== v; ) {
          let t = i / r,
            e = i % r,
            a = n - s * t,
            f = o - l * t;
          (i = r), (r = e), (n = s), (o = l), (s = a), (l = f);
        }
        if (i !== B) throw Error("invert: does not exist");
        return N(n, e);
      }
      function F(t, e) {
        let r = (t.ORDER + B) / I,
          i = t.pow(e, r);
        if (!t.eql(t.sqr(i), e)) throw Error("Cannot find square root");
        return i;
      }
      function H(t, e) {
        let r = (t.ORDER - R) / S,
          i = t.mul(e, x),
          n = t.pow(i, r),
          o = t.mul(e, n),
          s = t.mul(t.mul(o, x), n),
          l = t.mul(o, t.sub(s, t.ONE));
        if (!t.eql(t.sqr(l), e)) throw Error("Cannot find square root");
        return l;
      }
      let P = [
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
      function C(t, e, r = !1) {
        let i = Array(e.length).fill(r ? t.ZERO : void 0),
          n = e.reduce(
            (e, r, n) => (t.is0(r) ? e : ((i[n] = e), t.mul(e, r))),
            t.ONE
          ),
          o = t.inv(n);
        return (
          e.reduceRight(
            (e, r, n) =>
              t.is0(r) ? e : ((i[n] = t.mul(e, i[n])), t.mul(e, r)),
            o
          ),
          i
        );
      }
      function U(t, e) {
        let r = (t.ORDER - B) / x,
          i = t.pow(e, r),
          n = t.eql(i, t.ONE),
          o = t.eql(i, t.ZERO),
          s = t.eql(i, t.neg(t.ONE));
        if (!n && !o && !s) throw Error("invalid Legendre symbol result");
        return n ? 1 : o ? 0 : -1;
      }
      function V(t, e, r = !1, i = {}) {
        let o, s, l;
        if (t <= v) throw Error("invalid field: expected ORDER > 0, got " + t);
        if ("object" == typeof e && null != e) {
          if (i.sqrt || r) throw Error("cannot specify opts in two arguments");
          e.BITS && (s = e.BITS),
            e.sqrt && (l = e.sqrt),
            "boolean" == typeof e.isLE && (r = e.isLE);
        } else "number" == typeof e && (s = e), i.sqrt && (l = i.sqrt);
        let { nBitLength: a, nByteLength: f } = (function (t, e) {
          void 0 !== e && (0, n.Fe)(e);
          let r = void 0 !== e ? e : t.toString(2).length,
            i = Math.ceil(r / 8);
          return { nBitLength: r, nByteLength: i };
        })(t, s);
        if (f > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let u = Object.freeze({
          ORDER: t,
          isLE: r,
          BITS: a,
          BYTES: f,
          MASK: w(a),
          ZERO: v,
          ONE: B,
          create: (e) => N(e, t),
          isValid: (e) => {
            if ("bigint" != typeof e)
              throw Error(
                "invalid field element: expected bigint, got " + typeof e
              );
            return v <= e && e < t;
          },
          is0: (t) => t === v,
          isValidNot0: (t) => !u.is0(t) && u.isValid(t),
          isOdd: (t) => (t & B) === B,
          neg: (e) => N(-e, t),
          eql: (t, e) => t === e,
          sqr: (e) => N(e * e, t),
          add: (e, r) => N(e + r, t),
          sub: (e, r) => N(e - r, t),
          mul: (e, r) => N(e * r, t),
          pow: (t, e) =>
            (function (t, e, r) {
              if (r < v) throw Error("invalid exponent, negatives unsupported");
              if (r === v) return t.ONE;
              if (r === B) return e;
              let i = t.ONE,
                n = e;
              for (; r > v; )
                r & B && (i = t.mul(i, n)), (n = t.sqr(n)), (r >>= B);
              return i;
            })(u, t, e),
          div: (e, r) => N(e * A(r, t), t),
          sqrN: (t) => t * t,
          addN: (t, e) => t + e,
          subN: (t, e) => t - e,
          mulN: (t, e) => t * e,
          inv: (e) => A(e, t),
          sqrt:
            l ||
            ((e) => (
              o ||
                (o =
                  t % I === O
                    ? F
                    : t % S === R
                    ? H
                    : (function (t) {
                        if (t < BigInt(3))
                          throw Error("sqrt is not defined for small field");
                        let e = t - B,
                          r = 0;
                        for (; e % x === v; ) (e /= x), r++;
                        let i = x,
                          n = V(t);
                        for (; 1 === U(n, i); )
                          if (i++ > 1e3)
                            throw Error(
                              "Cannot find square root: probably non-prime P"
                            );
                        if (1 === r) return F;
                        let o = n.pow(i, e),
                          s = (e + B) / x;
                        return function (t, i) {
                          if (t.is0(i)) return i;
                          if (1 !== U(t, i))
                            throw Error("Cannot find square root");
                          let n = r,
                            l = t.mul(t.ONE, o),
                            a = t.pow(i, e),
                            f = t.pow(i, s);
                          for (; !t.eql(a, t.ONE); ) {
                            if (t.is0(a)) return t.ZERO;
                            let e = 1,
                              r = t.sqr(a);
                            for (; !t.eql(r, t.ONE); )
                              if ((e++, (r = t.sqr(r)), e === n))
                                throw Error("Cannot find square root");
                            let i = B << BigInt(n - e - 1),
                              o = t.pow(l, i);
                            (n = e),
                              (l = t.sqr(o)),
                              (a = t.mul(a, l)),
                              (f = t.mul(f, o));
                          }
                          return f;
                        };
                      })(t)),
              o(u, e)
            )),
          toBytes: (t) => (r ? g(t, f) : p(t, f)),
          fromBytes: (t) => {
            if (t.length !== f)
              throw Error(
                "Field.fromBytes: expected " + f + " bytes, got " + t.length
              );
            return r ? h(t) : c(t);
          },
          invertBatch: (t) => C(u, t),
          cmov: (t, e, r) => (r ? e : t),
        });
        return Object.freeze(u);
      }
      function Z(t) {
        if ("bigint" != typeof t) throw Error("field order must be bigint");
        return Math.ceil(t.toString(2).length / 8);
      }
      function z(t) {
        let e = Z(t);
        return e + Math.ceil(e / 2);
      }
      let L = BigInt(0),
        T = BigInt(1);
      function j(t, e) {
        let r = e.negate();
        return t ? r : e;
      }
      function k(t, e) {
        if (!Number.isSafeInteger(t) || t <= 0 || t > e)
          throw Error(
            "invalid window size, expected [1.." + e + "], got W=" + t
          );
      }
      function D(t, e) {
        k(t, e);
        let r = Math.ceil(e / t) + 1,
          i = 2 ** (t - 1),
          n = 2 ** t;
        return {
          windows: r,
          windowSize: i,
          mask: w(t),
          maxNumber: n,
          shiftBy: BigInt(t),
        };
      }
      function K(t, e, r) {
        let { windowSize: i, mask: n, maxNumber: o, shiftBy: s } = r,
          l = Number(t & n),
          a = t >> s;
        l > i && ((l -= o), (a += T));
        let f = e * i,
          u = f + Math.abs(l) - 1,
          d = 0 === l;
        return {
          nextN: a,
          offset: u,
          isZero: d,
          isNeg: l < 0,
          isNegF: e % 2 != 0,
          offsetF: f,
        };
      }
      let _ = new WeakMap(),
        M = new WeakMap();
      function $(t) {
        return M.get(t) || 1;
      }
      function G(t) {
        if (t !== L) throw Error("invalid wNAF");
      }
      function Y(t, e) {
        if (!e) return V(t);
        if (e.ORDER !== t)
          throw Error("Field.ORDER must match order: Fp == p, Fn == n");
        return (
          E(
            e,
            P.reduce((t, e) => ((t[e] = "function"), t), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "number",
              BITS: "number",
            })
          ),
          e
        );
      }
      function W(t) {
        void 0 !== t.lowS && f("lowS", t.lowS),
          void 0 !== t.prehash && f("prehash", t.prehash);
      }
      class J extends Error {
        constructor(t = "") {
          super(t);
        }
      }
      let Q = {
          Err: J,
          _tlv: {
            encode: (t, e) => {
              let { Err: r } = Q;
              if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
              if (1 & e.length) throw new r("tlv.encode: unpadded data");
              let i = e.length / 2,
                n = u(i);
              if ((n.length / 2) & 128)
                throw new r("tlv.encode: long form length too big");
              let o = i > 127 ? u((n.length / 2) | 128) : "";
              return u(t) + o + n + e;
            },
            decode(t, e) {
              let { Err: r } = Q,
                i = 0;
              if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
              if (e.length < 2 || e[i++] !== t)
                throw new r("tlv.decode: wrong tlv");
              let n = e[i++],
                o = 0;
              if (128 & n) {
                let t = 127 & n;
                if (!t)
                  throw new r(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (t > 4)
                  throw new r("tlv.decode(long): byte length is too big");
                let s = e.subarray(i, i + t);
                if (s.length !== t)
                  throw new r("tlv.decode: length bytes not complete");
                if (0 === s[0])
                  throw new r("tlv.decode(long): zero leftmost byte");
                for (let t of s) o = (o << 8) | t;
                if (((i += t), o < 128))
                  throw new r("tlv.decode(long): not minimal encoding");
              } else o = n;
              let s = e.subarray(i, i + o);
              if (s.length !== o) throw new r("tlv.decode: wrong value length");
              return { v: s, l: e.subarray(i + o) };
            },
          },
          _int: {
            encode(t) {
              let { Err: e } = Q;
              if (t < X)
                throw new e("integer: negative integers are not allowed");
              let r = u(t);
              if (
                (8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length)
              )
                throw new e("unexpected DER parsing assertion: unpadded hex");
              return r;
            },
            decode(t) {
              let { Err: e } = Q;
              if (128 & t[0])
                throw new e("invalid signature integer: negative");
              if (0 === t[0] && !(128 & t[1]))
                throw new e(
                  "invalid signature integer: unnecessary leading zero"
                );
              return c(t);
            },
          },
          toSig(t) {
            let { Err: e, _int: r, _tlv: i } = Q,
              n = m("signature", t),
              { v: o, l: s } = i.decode(48, n);
            if (s.length)
              throw new e("invalid signature: left bytes after parsing");
            let { v: l, l: a } = i.decode(2, o),
              { v: f, l: u } = i.decode(2, a);
            if (u.length)
              throw new e("invalid signature: left bytes after parsing");
            return { r: r.decode(l), s: r.decode(f) };
          },
          hexFromSig(t) {
            let { _tlv: e, _int: r } = Q,
              i = e.encode(2, r.encode(t.r)),
              n = e.encode(2, r.encode(t.s));
            return e.encode(48, i + n);
          },
        },
        X = BigInt(0),
        tt = BigInt(1),
        te = BigInt(2),
        tr = BigInt(3),
        ti = BigInt(4);
      function tn(t, e, r) {
        let { BYTES: i } = t;
        return function (n) {
          let o;
          if ("bigint" == typeof n) o = n;
          else {
            let r = m("private key", n);
            if (e) {
              if (!e.includes(2 * r.length)) throw Error("invalid private key");
              let t = new Uint8Array(i);
              t.set(r, t.length - r.length), (r = t);
            }
            try {
              o = t.fromBytes(r);
            } catch (t) {
              throw Error(
                `invalid private key: expected ui8a of size ${i}, got ${typeof n}`
              );
            }
          }
          if ((r && (o = t.create(o)), !t.isValidNot0(o)))
            throw Error("invalid private key: out of range [1..N-1]");
          return o;
        };
      }
      function to(t) {
        return Uint8Array.of(t ? 2 : 3);
      }
      let ts = {
          p: BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
          ),
          n: BigInt(
            "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
          ),
          h: BigInt(1),
          a: BigInt(0),
          b: BigInt(7),
          Gx: BigInt(
            "0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
          ),
          Gy: BigInt(
            "0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
          ),
        },
        tl = BigInt(0),
        ta = BigInt(1),
        tf = BigInt(2),
        tu = (t, e) => (t + e / tf) / e,
        td = V(ts.p, void 0, void 0, {
          sqrt: function (t) {
            let e = ts.p,
              r = BigInt(3),
              i = BigInt(6),
              n = BigInt(11),
              o = BigInt(22),
              s = BigInt(23),
              l = BigInt(44),
              a = BigInt(88),
              f = (t * t * t) % e,
              u = (f * f * t) % e,
              d = (q(u, r, e) * u) % e,
              c = (q(d, r, e) * u) % e,
              h = (q(c, tf, e) * f) % e,
              p = (q(h, n, e) * h) % e,
              g = (q(p, o, e) * p) % e,
              m = (q(g, l, e) * g) % e,
              y = (q(m, a, e) * m) % e,
              w = (q(y, l, e) * g) % e,
              E = (q(w, r, e) * u) % e,
              b = (q(E, s, e) * p) % e,
              v = (q(b, i, e) * f) % e,
              B = q(v, tf, e);
            if (!td.eql(td.sqr(B), t)) throw Error("Cannot find square root");
            return B;
          },
        }),
        tc = (function (t, e) {
          let r = (e) =>
            (function (t) {
              let {
                  CURVE: e,
                  curveOpts: r,
                  ecdsaOpts: i,
                } = (function (t) {
                  let { CURVE: e, curveOpts: r } = (function (t) {
                    let e = {
                        a: t.a,
                        b: t.b,
                        p: t.Fp.ORDER,
                        n: t.n,
                        h: t.h,
                        Gx: t.Gx,
                        Gy: t.Gy,
                      },
                      r = {
                        Fp: t.Fp,
                        Fn: V(e.n, t.nBitLength),
                        allowedPrivateKeyLengths: t.allowedPrivateKeyLengths,
                        allowInfinityPoint: t.allowInfinityPoint,
                        endo: t.endo,
                        wrapPrivateKey: t.wrapPrivateKey,
                        isTorsionFree: t.isTorsionFree,
                        clearCofactor: t.clearCofactor,
                        fromBytes: t.fromBytes,
                        toBytes: t.toBytes,
                      };
                    return { CURVE: e, curveOpts: r };
                  })(t);
                  return {
                    CURVE: e,
                    curveOpts: r,
                    ecdsaOpts: {
                      hash: t.hash,
                      hmac: t.hmac,
                      randomBytes: t.randomBytes,
                      lowS: t.lowS,
                      bits2int: t.bits2int,
                      bits2int_modN: t.bits2int_modN,
                    },
                  };
                })(t),
                o = (function (t, e, r = {}) {
                  E(
                    e,
                    { hash: "function" },
                    {
                      hmac: "function",
                      lowS: "boolean",
                      randomBytes: "function",
                      bits2int: "function",
                      bits2int_modN: "function",
                    }
                  );
                  let i = e.randomBytes || n.po,
                    o = e.hmac || ((t, ...r) => s(e.hash, t, (0, n.Id)(...r))),
                    { Fp: l, Fn: a } = t,
                    { ORDER: f, BITS: u } = a;
                  function d(t, e) {
                    if (!a.isValidNot0(e))
                      throw Error(
                        `invalid signature ${t}: out of range 1..CURVE.n`
                      );
                  }
                  class b {
                    constructor(t, e, r) {
                      d("r", t),
                        d("s", e),
                        (this.r = t),
                        (this.s = e),
                        null != r && (this.recovery = r),
                        Object.freeze(this);
                    }
                    static fromCompact(t) {
                      let e = a.BYTES,
                        r = m("compactSignature", t, 2 * e);
                      return new b(
                        a.fromBytes(r.subarray(0, e)),
                        a.fromBytes(r.subarray(e, 2 * e))
                      );
                    }
                    static fromDER(t) {
                      let { r: e, s: r } = Q.toSig(m("DER", t));
                      return new b(e, r);
                    }
                    assertValidity() {}
                    addRecoveryBit(t) {
                      return new b(this.r, this.s, t);
                    }
                    recoverPublicKey(e) {
                      let r = l.ORDER,
                        { r: i, s: o, recovery: s } = this;
                      if (null == s || ![0, 1, 2, 3].includes(s))
                        throw Error("recovery id invalid");
                      if (f * te < r && s > 1)
                        throw Error("recovery id is ambiguous for h>1 curve");
                      let u = 2 === s || 3 === s ? i + f : i;
                      if (!l.isValid(u))
                        throw Error("recovery id 2 or 3 invalid");
                      let d = l.toBytes(u),
                        c = t.fromHex((0, n.Id)(to((1 & s) == 0), d)),
                        h = a.inv(u),
                        p = I(m("msgHash", e)),
                        g = a.create(-p * h),
                        y = a.create(o * h),
                        w = t.BASE.multiplyUnsafe(g).add(c.multiplyUnsafe(y));
                      if (w.is0()) throw Error("point at infinify");
                      return w.assertValidity(), w;
                    }
                    hasHighS() {
                      return this.s > f >> tt;
                    }
                    normalizeS() {
                      return this.hasHighS()
                        ? new b(this.r, a.neg(this.s), this.recovery)
                        : this;
                    }
                    toBytes(t) {
                      if ("compact" === t)
                        return (0, n.Id)(a.toBytes(this.r), a.toBytes(this.s));
                      if ("der" === t) return (0, n.aT)(Q.hexFromSig(this));
                      throw Error("invalid format");
                    }
                    toDERRawBytes() {
                      return this.toBytes("der");
                    }
                    toDERHex() {
                      return (0, n.My)(this.toBytes("der"));
                    }
                    toCompactRawBytes() {
                      return this.toBytes("compact");
                    }
                    toCompactHex() {
                      return (0, n.My)(this.toBytes("compact"));
                    }
                  }
                  let v = tn(a, r.allowedPrivateKeyLengths, r.wrapPrivateKey);
                  function x(e) {
                    if ("bigint" == typeof e) return !1;
                    if (e instanceof t) return !0;
                    let i = m("key", e).length,
                      n = l.BYTES,
                      o = n + 1;
                    if (!r.allowedPrivateKeyLengths && a.BYTES !== o)
                      return i === o || i === 2 * n + 1;
                  }
                  let O =
                      e.bits2int ||
                      function (t) {
                        if (t.length > 8192) throw Error("input is too large");
                        let e = c(t),
                          r = 8 * t.length - u;
                        return r > 0 ? e >> BigInt(r) : e;
                      },
                    I =
                      e.bits2int_modN ||
                      function (t) {
                        return a.create(O(t));
                      },
                    R = w(u);
                  function S(t) {
                    return (
                      !(function (t, e, r, i) {
                        if (!(y(e) && y(r) && y(i)) || !(r <= e) || !(e < i))
                          throw Error(
                            "expected valid " +
                              t +
                              ": " +
                              r +
                              " <= n < " +
                              i +
                              ", got " +
                              e
                          );
                      })("num < 2^" + u, t, X, R),
                      a.toBytes(t)
                    );
                  }
                  let q = { lowS: e.lowS, prehash: !1 },
                    A = { lowS: e.lowS, prehash: !1 };
                  return (
                    t.BASE.precompute(8),
                    Object.freeze({
                      getPublicKey: function (e, r = !0) {
                        return t.fromPrivateKey(e).toBytes(r);
                      },
                      getSharedSecret: function (e, r, i = !0) {
                        if (!0 === x(e))
                          throw Error("first arg must be private key");
                        if (!1 === x(r))
                          throw Error("second arg must be public key");
                        return t.fromHex(r).multiply(v(e)).toBytes(i);
                      },
                      sign: function (r, s, u = q) {
                        let { seed: d, k2sig: c } = (function (r, o, s = q) {
                          if (["recovered", "canonical"].some((t) => t in s))
                            throw Error("sign() legacy options not supported");
                          let { hash: u } = e,
                            { lowS: d, prehash: c, extraEntropy: h } = s;
                          null == d && (d = !0),
                            (r = m("msgHash", r)),
                            W(s),
                            c && (r = m("prehashed msgHash", u(r)));
                          let p = I(r),
                            g = v(o),
                            y = [S(g), S(p)];
                          if (null != h && !1 !== h) {
                            let t = !0 === h ? i(l.BYTES) : h;
                            y.push(m("extraEntropy", t));
                          }
                          return {
                            seed: (0, n.Id)(...y),
                            k2sig: function (e) {
                              var r;
                              let i = O(e);
                              if (!a.isValidNot0(i)) return;
                              let n = a.inv(i),
                                o = t.BASE.multiply(i).toAffine(),
                                s = a.create(o.x);
                              if (s === X) return;
                              let l = a.create(n * a.create(p + s * g));
                              if (l === X) return;
                              let u = (2 * (o.x !== s)) | Number(o.y & tt),
                                c = l;
                              return (
                                d &&
                                  l > f >> tt &&
                                  ((c = (r = l) > f >> tt ? a.neg(r) : r),
                                  (u ^= 1)),
                                new b(s, c, u)
                              );
                            },
                          };
                        })(r, s, u);
                        return (function (t, e, r) {
                          if ("number" != typeof t || t < 2)
                            throw Error("hashLen must be a number");
                          if ("number" != typeof e || e < 2)
                            throw Error("qByteLen must be a number");
                          if ("function" != typeof r)
                            throw Error("hmacFn must be a function");
                          let i = (t) => new Uint8Array(t),
                            o = (t) => Uint8Array.of(t),
                            s = i(t),
                            l = i(t),
                            a = 0,
                            f = () => {
                              s.fill(1), l.fill(0), (a = 0);
                            },
                            u = (...t) => r(l, s, ...t),
                            d = (t = i(0)) => {
                              (l = u(o(0), t)),
                                (s = u()),
                                0 !== t.length && ((l = u(o(1), t)), (s = u()));
                            },
                            c = () => {
                              if (a++ >= 1e3)
                                throw Error("drbg: tried 1000 values");
                              let t = 0,
                                r = [];
                              for (; t < e; ) {
                                let e = (s = u()).slice();
                                r.push(e), (t += s.length);
                              }
                              return (0, n.Id)(...r);
                            };
                          return (t, e) => {
                            let r;
                            for (f(), d(t); !(r = e(c())); ) d();
                            return f(), r;
                          };
                        })(
                          e.hash.outputLen,
                          a.BYTES,
                          o
                        )(d, c);
                      },
                      verify: function (r, i, o, s = A) {
                        let l, f;
                        (i = m("msgHash", i)), (o = m("publicKey", o)), W(s);
                        let { lowS: u, prehash: d, format: c } = s;
                        if ("strict" in s)
                          throw Error("options.strict was renamed to lowS");
                        if (
                          void 0 !== c &&
                          !["compact", "der", "js"].includes(c)
                        )
                          throw Error(
                            'format must be "compact", "der" or "js"'
                          );
                        let h = "string" == typeof r || (0, n.aY)(r),
                          p =
                            !h &&
                            !c &&
                            "object" == typeof r &&
                            null !== r &&
                            "bigint" == typeof r.r &&
                            "bigint" == typeof r.s;
                        if (!h && !p)
                          throw Error(
                            "invalid signature, expected Uint8Array, hex string or Signature instance"
                          );
                        try {
                          if (p)
                            if (void 0 === c || "js" === c) f = new b(r.r, r.s);
                            else throw Error("invalid format");
                          if (h) {
                            try {
                              "compact" !== c && (f = b.fromDER(r));
                            } catch (t) {
                              if (!(t instanceof Q.Err)) throw t;
                            }
                            f || "der" === c || (f = b.fromCompact(r));
                          }
                          l = t.fromHex(o);
                        } catch (t) {
                          return !1;
                        }
                        if (!f || (u && f.hasHighS())) return !1;
                        d && (i = e.hash(i));
                        let { r: g, s: y } = f,
                          w = I(i),
                          E = a.inv(y),
                          v = a.create(w * E),
                          B = a.create(g * E),
                          x = t.BASE.multiplyUnsafe(v).add(l.multiplyUnsafe(B));
                        return !x.is0() && a.create(x.x) === g;
                      },
                      utils: {
                        isValidPrivateKey(t) {
                          try {
                            return v(t), !0;
                          } catch (t) {
                            return !1;
                          }
                        },
                        normPrivateKeyToScalar: v,
                        randomPrivateKey: () =>
                          (function (t, e, r = !1) {
                            let i = t.length,
                              n = Z(e),
                              o = z(e);
                            if (i < 16 || i < o || i > 1024)
                              throw Error(
                                "expected " +
                                  o +
                                  "-1024 bytes of input, got " +
                                  i
                              );
                            let s = N(r ? h(t) : c(t), e - B) + B;
                            return r ? g(s, n) : p(s, n);
                          })(i(z(f)), f),
                        precompute: (e = 8, r = t.BASE) => r.precompute(e, !1),
                      },
                      Point: t,
                      Signature: b,
                    })
                  );
                })(
                  (function (t, e = {}) {
                    var r, i, o, s;
                    let { Fp: u, Fn: d } = (function (t, e, r = {}) {
                        if (!e || "object" != typeof e)
                          throw Error(`expected valid ${t} CURVE object`);
                        for (let t of ["p", "n", "h"]) {
                          let r = e[t];
                          if (!("bigint" == typeof r && r > L))
                            throw Error(`CURVE.${t} must be positive bigint`);
                        }
                        let i = Y(e.p, r.Fp),
                          n = Y(e.n, r.Fn);
                        for (let r of [
                          "Gx",
                          "Gy",
                          "a",
                          "weierstrass" === t ? "b" : "d",
                        ])
                          if (!i.isValid(e[r]))
                            throw Error(
                              `CURVE.${r} must be valid field element of CURVE.Fp`
                            );
                        return { Fp: i, Fn: n };
                      })("weierstrass", t, e),
                      { h: c, n: h } = t;
                    E(
                      e,
                      {},
                      {
                        allowInfinityPoint: "boolean",
                        clearCofactor: "function",
                        isTorsionFree: "function",
                        fromBytes: "function",
                        toBytes: "function",
                        endo: "object",
                        wrapPrivateKey: "boolean",
                      }
                    );
                    let { endo: p } = e;
                    if (
                      p &&
                      (!u.is0(t.a) ||
                        "bigint" != typeof p.beta ||
                        "function" != typeof p.splitScalar)
                    )
                      throw Error(
                        'invalid endo: expected "beta": bigint and "splitScalar": function'
                      );
                    function g() {
                      if (!u.isOdd)
                        throw Error(
                          "compression is not supported: Field does not have .isOdd()"
                        );
                    }
                    let y =
                        e.toBytes ||
                        function (t, e, r) {
                          let { x: i, y: o } = e.toAffine(),
                            s = u.toBytes(i);
                          if ((f("isCompressed", r), !r))
                            return (0, n.Id)(Uint8Array.of(4), s, u.toBytes(o));
                          {
                            g();
                            let t = !u.isOdd(o);
                            return (0, n.Id)(to(t), s);
                          }
                        },
                      v =
                        e.fromBytes ||
                        function (t) {
                          (0, n.DO)(t);
                          let e = u.BYTES,
                            r = e + 1,
                            i = 2 * e + 1,
                            o = t.length,
                            s = t[0],
                            l = t.subarray(1);
                          if (o === r && (2 === s || 3 === s)) {
                            let t,
                              e = u.fromBytes(l);
                            if (!u.isValid(e))
                              throw Error(
                                "bad point: is not on curve, wrong x"
                              );
                            let r = B(e);
                            try {
                              t = u.sqrt(r);
                            } catch (t) {
                              throw Error(
                                "bad point: is not on curve, sqrt error" +
                                  (t instanceof Error ? ": " + t.message : "")
                              );
                            }
                            return (
                              g(),
                              ((1 & s) == 1) !== u.isOdd(t) && (t = u.neg(t)),
                              { x: e, y: t }
                            );
                          }
                          if (o === i && 4 === s) {
                            let t = u.fromBytes(l.subarray(0 * e, +e)),
                              r = u.fromBytes(l.subarray(+e, 2 * e));
                            if (!x(t, r))
                              throw Error("bad point: is not on curve");
                            return { x: t, y: r };
                          }
                          throw Error(
                            `bad point: got length ${o}, expected compressed=${r} or uncompressed=${i}`
                          );
                        },
                      B =
                        ((i = u),
                        (o = t.a),
                        (s = t.b),
                        function (t) {
                          let e = i.sqr(t),
                            r = i.mul(e, t);
                          return i.add(i.add(r, i.mul(t, o)), s);
                        });
                    function x(t, e) {
                      let r = u.sqr(e),
                        i = B(t);
                      return u.eql(r, i);
                    }
                    if (!x(t.Gx, t.Gy))
                      throw Error("bad curve params: generator point");
                    let O = u.mul(u.pow(t.a, tr), ti),
                      I = u.mul(u.sqr(t.b), BigInt(27));
                    if (u.is0(u.add(O, I)))
                      throw Error("bad curve params: a or b");
                    function R(t, e, r = !1) {
                      if (!u.isValid(e) || (r && u.is0(e)))
                        throw Error(`bad point coordinate ${t}`);
                      return e;
                    }
                    function S(t) {
                      if (!(t instanceof F))
                        throw Error("ProjectivePoint expected");
                    }
                    let N = b((t, e) => {
                        let { px: r, py: i, pz: n } = t;
                        if (u.eql(n, u.ONE)) return { x: r, y: i };
                        let o = t.is0();
                        null == e && (e = o ? u.ONE : u.inv(n));
                        let s = u.mul(r, e),
                          l = u.mul(i, e),
                          a = u.mul(n, e);
                        if (o) return { x: u.ZERO, y: u.ZERO };
                        if (!u.eql(a, u.ONE)) throw Error("invZ was invalid");
                        return { x: s, y: l };
                      }),
                      q = b((t) => {
                        if (t.is0()) {
                          if (e.allowInfinityPoint && !u.is0(t.py)) return;
                          throw Error("bad point: ZERO");
                        }
                        let { x: r, y: i } = t.toAffine();
                        if (!u.isValid(r) || !u.isValid(i))
                          throw Error("bad point: x or y not field elements");
                        if (!x(r, i))
                          throw Error("bad point: equation left != right");
                        if (!t.isTorsionFree())
                          throw Error("bad point: not in prime-order subgroup");
                        return !0;
                      });
                    function A(t, e, r, i, n) {
                      return (
                        (r = new F(u.mul(r.px, t), r.py, r.pz)),
                        (e = j(i, e)),
                        (r = j(n, r)),
                        e.add(r)
                      );
                    }
                    class F {
                      constructor(t, e, r) {
                        (this.px = R("x", t)),
                          (this.py = R("y", e, !0)),
                          (this.pz = R("z", r)),
                          Object.freeze(this);
                      }
                      static fromAffine(t) {
                        let { x: e, y: r } = t || {};
                        if (!t || !u.isValid(e) || !u.isValid(r))
                          throw Error("invalid affine point");
                        if (t instanceof F)
                          throw Error("projective point not allowed");
                        return u.is0(e) && u.is0(r)
                          ? F.ZERO
                          : new F(e, r, u.ONE);
                      }
                      get x() {
                        return this.toAffine().x;
                      }
                      get y() {
                        return this.toAffine().y;
                      }
                      static normalizeZ(t) {
                        let e = C(
                          F.Fp,
                          t.map((t) => t.pz)
                        );
                        return t
                          .map((t, r) => t.toAffine(e[r]))
                          .map(F.fromAffine);
                      }
                      static fromBytes(t) {
                        return (0, n.DO)(t), F.fromHex(t);
                      }
                      static fromHex(t) {
                        let e = F.fromAffine(v(m("pointHex", t)));
                        return e.assertValidity(), e;
                      }
                      static fromPrivateKey(t) {
                        let r = tn(
                          d,
                          e.allowedPrivateKeyLengths,
                          e.wrapPrivateKey
                        );
                        return F.BASE.multiply(r(t));
                      }
                      static msm(t, e) {
                        return (function (t, e, r, i) {
                          (function (t, e) {
                            if (!Array.isArray(t))
                              throw Error("array expected");
                            t.forEach((t, r) => {
                              if (!(t instanceof e))
                                throw Error("invalid point at index " + r);
                            });
                          })(r, t),
                            (function (t, e) {
                              if (!Array.isArray(t))
                                throw Error("array of scalars expected");
                              t.forEach((t, r) => {
                                if (!e.isValid(t))
                                  throw Error("invalid scalar at index " + r);
                              });
                            })(i, e);
                          let n = r.length,
                            o = i.length;
                          if (n !== o)
                            throw Error(
                              "arrays of points and scalars must have equal length"
                            );
                          let s = t.ZERO,
                            f = (function (t) {
                              let e;
                              for (e = 0; t > l; t >>= a, e += 1);
                              return e;
                            })(BigInt(n)),
                            u = 1;
                          f > 12
                            ? (u = f - 3)
                            : f > 4
                            ? (u = f - 2)
                            : f > 0 && (u = 2);
                          let d = w(u),
                            c = Array(Number(d) + 1).fill(s),
                            h = Math.floor((e.BITS - 1) / u) * u,
                            p = s;
                          for (let t = h; t >= 0; t -= u) {
                            c.fill(s);
                            for (let e = 0; e < o; e++) {
                              let n = Number((i[e] >> BigInt(t)) & d);
                              c[n] = c[n].add(r[e]);
                            }
                            let e = s;
                            for (let t = c.length - 1, r = s; t > 0; t--)
                              (r = r.add(c[t])), (e = e.add(r));
                            if (((p = p.add(e)), 0 !== t))
                              for (let t = 0; t < u; t++) p = p.double();
                          }
                          return p;
                        })(F, d, t, e);
                      }
                      precompute(t = 8, e = !0) {
                        return (
                          P.setWindowSize(this, t), e || this.multiply(tr), this
                        );
                      }
                      _setWindowSize(t) {
                        this.precompute(t);
                      }
                      assertValidity() {
                        q(this);
                      }
                      hasEvenY() {
                        let { y: t } = this.toAffine();
                        if (!u.isOdd)
                          throw Error("Field doesn't support isOdd");
                        return !u.isOdd(t);
                      }
                      equals(t) {
                        S(t);
                        let { px: e, py: r, pz: i } = this,
                          { px: n, py: o, pz: s } = t,
                          l = u.eql(u.mul(e, s), u.mul(n, i)),
                          a = u.eql(u.mul(r, s), u.mul(o, i));
                        return l && a;
                      }
                      negate() {
                        return new F(this.px, u.neg(this.py), this.pz);
                      }
                      double() {
                        let { a: e, b: r } = t,
                          i = u.mul(r, tr),
                          { px: n, py: o, pz: s } = this,
                          l = u.ZERO,
                          a = u.ZERO,
                          f = u.ZERO,
                          d = u.mul(n, n),
                          c = u.mul(o, o),
                          h = u.mul(s, s),
                          p = u.mul(n, o);
                        return (
                          (p = u.add(p, p)),
                          (f = u.mul(n, s)),
                          (f = u.add(f, f)),
                          (l = u.mul(e, f)),
                          (a = u.mul(i, h)),
                          (a = u.add(l, a)),
                          (l = u.sub(c, a)),
                          (a = u.add(c, a)),
                          (a = u.mul(l, a)),
                          (l = u.mul(p, l)),
                          (f = u.mul(i, f)),
                          (h = u.mul(e, h)),
                          (p = u.sub(d, h)),
                          (p = u.mul(e, p)),
                          (p = u.add(p, f)),
                          (f = u.add(d, d)),
                          (d = u.add(f, d)),
                          (d = u.add(d, h)),
                          (d = u.mul(d, p)),
                          (a = u.add(a, d)),
                          (h = u.mul(o, s)),
                          (h = u.add(h, h)),
                          (d = u.mul(h, p)),
                          (l = u.sub(l, d)),
                          (f = u.mul(h, c)),
                          (f = u.add(f, f)),
                          new F(l, a, (f = u.add(f, f)))
                        );
                      }
                      add(e) {
                        S(e);
                        let { px: r, py: i, pz: n } = this,
                          { px: o, py: s, pz: l } = e,
                          a = u.ZERO,
                          f = u.ZERO,
                          d = u.ZERO,
                          c = t.a,
                          h = u.mul(t.b, tr),
                          p = u.mul(r, o),
                          g = u.mul(i, s),
                          m = u.mul(n, l),
                          y = u.add(r, i),
                          w = u.add(o, s);
                        (y = u.mul(y, w)),
                          (w = u.add(p, g)),
                          (y = u.sub(y, w)),
                          (w = u.add(r, n));
                        let E = u.add(o, l);
                        return (
                          (w = u.mul(w, E)),
                          (E = u.add(p, m)),
                          (w = u.sub(w, E)),
                          (E = u.add(i, n)),
                          (a = u.add(s, l)),
                          (E = u.mul(E, a)),
                          (a = u.add(g, m)),
                          (E = u.sub(E, a)),
                          (d = u.mul(c, w)),
                          (a = u.mul(h, m)),
                          (d = u.add(a, d)),
                          (a = u.sub(g, d)),
                          (d = u.add(g, d)),
                          (f = u.mul(a, d)),
                          (g = u.add(p, p)),
                          (g = u.add(g, p)),
                          (m = u.mul(c, m)),
                          (w = u.mul(h, w)),
                          (g = u.add(g, m)),
                          (m = u.sub(p, m)),
                          (m = u.mul(c, m)),
                          (w = u.add(w, m)),
                          (p = u.mul(g, w)),
                          (f = u.add(f, p)),
                          (p = u.mul(E, w)),
                          (a = u.mul(y, a)),
                          (a = u.sub(a, p)),
                          (p = u.mul(y, g)),
                          (d = u.mul(E, d)),
                          new F(a, f, (d = u.add(d, p)))
                        );
                      }
                      subtract(t) {
                        return this.add(t.negate());
                      }
                      is0() {
                        return this.equals(F.ZERO);
                      }
                      multiply(t) {
                        let r,
                          i,
                          { endo: n } = e;
                        if (!d.isValidNot0(t))
                          throw Error("invalid scalar: out of range");
                        let o = (t) => P.wNAFCached(this, t, F.normalizeZ);
                        if (n) {
                          let {
                              k1neg: e,
                              k1: s,
                              k2neg: l,
                              k2: a,
                            } = n.splitScalar(t),
                            { p: f, f: u } = o(s),
                            { p: d, f: c } = o(a);
                          (i = u.add(c)), (r = A(n.beta, f, d, e, l));
                        } else {
                          let { p: e, f: n } = o(t);
                          (r = e), (i = n);
                        }
                        return F.normalizeZ([r, i])[0];
                      }
                      multiplyUnsafe(t) {
                        let { endo: r } = e;
                        if (!d.isValid(t))
                          throw Error("invalid scalar: out of range");
                        if (t === X || this.is0()) return F.ZERO;
                        if (t === tt) return this;
                        if (P.hasPrecomputes(this)) return this.multiply(t);
                        if (!r) return P.wNAFCachedUnsafe(this, t);
                        {
                          let {
                              k1neg: e,
                              k1: i,
                              k2neg: n,
                              k2: o,
                            } = r.splitScalar(t),
                            { p1: s, p2: l } = (function (t, e, r, i) {
                              let n = e,
                                o = t.ZERO,
                                s = t.ZERO;
                              for (; r > L || i > L; )
                                r & T && (o = o.add(n)),
                                  i & T && (s = s.add(n)),
                                  (n = n.double()),
                                  (r >>= T),
                                  (i >>= T);
                              return { p1: o, p2: s };
                            })(F, this, i, o);
                          return A(r.beta, s, l, e, n);
                        }
                      }
                      multiplyAndAddUnsafe(t, e, r) {
                        let i = this.multiplyUnsafe(e).add(t.multiplyUnsafe(r));
                        return i.is0() ? void 0 : i;
                      }
                      toAffine(t) {
                        return N(this, t);
                      }
                      isTorsionFree() {
                        let { isTorsionFree: t } = e;
                        return (
                          c === tt ||
                          (t ? t(F, this) : P.wNAFCachedUnsafe(this, h).is0())
                        );
                      }
                      clearCofactor() {
                        let { clearCofactor: t } = e;
                        return c === tt
                          ? this
                          : t
                          ? t(F, this)
                          : this.multiplyUnsafe(c);
                      }
                      toBytes(t = !0) {
                        return (
                          f("isCompressed", t),
                          this.assertValidity(),
                          y(F, this, t)
                        );
                      }
                      toRawBytes(t = !0) {
                        return this.toBytes(t);
                      }
                      toHex(t = !0) {
                        return (0, n.My)(this.toBytes(t));
                      }
                      toString() {
                        return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
                      }
                    }
                    (F.BASE = new F(t.Gx, t.Gy, u.ONE)),
                      (F.ZERO = new F(u.ZERO, u.ONE, u.ZERO)),
                      (F.Fp = u),
                      (F.Fn = d);
                    let H = d.BITS,
                      P =
                        ((r = e.endo ? Math.ceil(H / 2) : H),
                        {
                          constTimeNegate: j,
                          hasPrecomputes: (t) => 1 !== $(t),
                          unsafeLadder(t, e, r = F.ZERO) {
                            let i = t;
                            for (; e > L; )
                              e & T && (r = r.add(i)),
                                (i = i.double()),
                                (e >>= T);
                            return r;
                          },
                          precomputeWindow(t, e) {
                            let { windows: i, windowSize: n } = D(e, r),
                              o = [],
                              s = t,
                              l = s;
                            for (let t = 0; t < i; t++) {
                              (l = s), o.push(l);
                              for (let t = 1; t < n; t++)
                                (l = l.add(s)), o.push(l);
                              s = l.double();
                            }
                            return o;
                          },
                          wNAF(t, e, i) {
                            let n = F.ZERO,
                              o = F.BASE,
                              s = D(t, r);
                            for (let t = 0; t < s.windows; t++) {
                              let {
                                nextN: r,
                                offset: l,
                                isZero: a,
                                isNeg: f,
                                isNegF: u,
                                offsetF: d,
                              } = K(i, t, s);
                              (i = r),
                                a
                                  ? (o = o.add(j(u, e[d])))
                                  : (n = n.add(j(f, e[l])));
                            }
                            return G(i), { p: n, f: o };
                          },
                          wNAFUnsafe(t, e, i, n = F.ZERO) {
                            let o = D(t, r);
                            for (let t = 0; t < o.windows && i !== L; t++) {
                              let {
                                nextN: r,
                                offset: s,
                                isZero: l,
                                isNeg: a,
                              } = K(i, t, o);
                              if (((i = r), !l)) {
                                let t = e[s];
                                n = n.add(a ? t.negate() : t);
                              }
                            }
                            return G(i), n;
                          },
                          getPrecomputes(t, e, r) {
                            let i = _.get(e);
                            return (
                              i ||
                                ((i = this.precomputeWindow(e, t)),
                                1 !== t &&
                                  ("function" == typeof r && (i = r(i)),
                                  _.set(e, i))),
                              i
                            );
                          },
                          wNAFCached(t, e, r) {
                            let i = $(t);
                            return this.wNAF(
                              i,
                              this.getPrecomputes(i, t, r),
                              e
                            );
                          },
                          wNAFCachedUnsafe(t, e, r, i) {
                            let n = $(t);
                            return 1 === n
                              ? this.unsafeLadder(t, e, i)
                              : this.wNAFUnsafe(
                                  n,
                                  this.getPrecomputes(n, t, r),
                                  e,
                                  i
                                );
                          },
                          setWindowSize(t, e) {
                            k(e, r), M.set(t, e), _.delete(t);
                          },
                        });
                    return F;
                  })(e, r),
                  i,
                  r
                );
              return Object.assign({}, o, {
                ProjectivePoint: o.Point,
                CURVE: t,
              });
            })({ ...t, hash: e });
          return { ...r(e), create: r };
        })(
          {
            ...ts,
            Fp: td,
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (t) => {
                let e = ts.n,
                  r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  i = -ta * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  o = BigInt("0x100000000000000000000000000000000"),
                  s = tu(r * t, e),
                  l = tu(-i * t, e),
                  a = N(t - s * r - l * n, e),
                  f = N(-s * i - l * r, e),
                  u = a > o,
                  d = f > o;
                if ((u && (a = e - a), d && (f = e - f), a > o || f > o))
                  throw Error("splitScalar: Endomorphism failed, k=" + t);
                return { k1neg: u, k1: a, k2neg: d, k2: f };
              },
            },
          },
          i.sc
        ),
        th = {},
        tp = (t) => t.toBytes(!0).slice(1),
        tg = (t) => mod(t, ts.n),
        tm = (t) => t % tf === tl;
    },
  },
]);
