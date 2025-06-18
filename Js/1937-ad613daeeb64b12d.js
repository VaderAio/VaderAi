(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1937],
  {
    193: (e, t, r) => {
      "use strict";
      r.d(t, {
        dz: () => n,
        d5: () => f,
        _E: () => i,
        Wj: () => d,
        H5: () => l,
        YW: () => c,
        dg: () => g,
        _v: () => p,
      });
      var n,
        i,
        s = r(45849);
      let a = new (r(83928).Logger)("strings/5.8.0");
      function o(e, t, r, n, s) {
        if (e === i.BAD_PREFIX || e === i.UNEXPECTED_CONTINUE) {
          let e = 0;
          for (let n = t + 1; n < r.length && r[n] >> 6 == 2; n++) e++;
          return e;
        }
        return e === i.OVERRUN ? r.length - t - 1 : 0;
      }
      !(function (e) {
        (e.current = ""),
          (e.NFC = "NFC"),
          (e.NFD = "NFD"),
          (e.NFKC = "NFKC"),
          (e.NFKD = "NFKD");
      })(n || (n = {})),
        (function (e) {
          (e.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
            (e.BAD_PREFIX = "bad codepoint prefix"),
            (e.OVERRUN = "string overrun"),
            (e.MISSING_CONTINUE = "missing continuation byte"),
            (e.OUT_OF_RANGE = "out of UTF-8 range"),
            (e.UTF16_SURROGATE = "UTF-16 surrogate"),
            (e.OVERLONG = "overlong representation");
        })(i || (i = {}));
      let f = Object.freeze({
        error: function (e, t, r, n, i) {
          return a.throwArgumentError(
            `invalid codepoint at offset ${t}; ${e}`,
            "bytes",
            r
          );
        },
        ignore: o,
        replace: function (e, t, r, n, s) {
          return e === i.OVERLONG
            ? (n.push(s), 0)
            : (n.push(65533), o(e, t, r, n, s));
        },
      });
      function u(e, t) {
        null == t && (t = f.error), (e = (0, s.arrayify)(e));
        let r = [],
          n = 0;
        for (; n < e.length; ) {
          let s = e[n++];
          if (s >> 7 == 0) {
            r.push(s);
            continue;
          }
          let a = null,
            o = null;
          if ((224 & s) == 192) (a = 1), (o = 127);
          else if ((240 & s) == 224) (a = 2), (o = 2047);
          else if ((248 & s) == 240) (a = 3), (o = 65535);
          else {
            (192 & s) == 128
              ? (n += t(i.UNEXPECTED_CONTINUE, n - 1, e, r))
              : (n += t(i.BAD_PREFIX, n - 1, e, r));
            continue;
          }
          if (n - 1 + a >= e.length) {
            n += t(i.OVERRUN, n - 1, e, r);
            continue;
          }
          let f = s & ((1 << (8 - a - 1)) - 1);
          for (let s = 0; s < a; s++) {
            let s = e[n];
            if ((192 & s) != 128) {
              (n += t(i.MISSING_CONTINUE, n, e, r)), (f = null);
              break;
            }
            (f = (f << 6) | (63 & s)), n++;
          }
          if (null !== f) {
            if (f > 1114111) {
              n += t(i.OUT_OF_RANGE, n - 1 - a, e, r, f);
              continue;
            }
            if (f >= 55296 && f <= 57343) {
              n += t(i.UTF16_SURROGATE, n - 1 - a, e, r, f);
              continue;
            }
            if (f <= o) {
              n += t(i.OVERLONG, n - 1 - a, e, r, f);
              continue;
            }
            r.push(f);
          }
        }
        return r;
      }
      function c(e, t = n.current) {
        t != n.current && (a.checkNormalize(), (e = e.normalize(t)));
        let r = [];
        for (let t = 0; t < e.length; t++) {
          let n = e.charCodeAt(t);
          if (n < 128) r.push(n);
          else if (n < 2048) r.push((n >> 6) | 192), r.push((63 & n) | 128);
          else if ((64512 & n) == 55296) {
            t++;
            let i = e.charCodeAt(t);
            if (t >= e.length || (64512 & i) != 56320)
              throw Error("invalid utf-8 string");
            let s = 65536 + ((1023 & n) << 10) + (1023 & i);
            r.push((s >> 18) | 240),
              r.push(((s >> 12) & 63) | 128),
              r.push(((s >> 6) & 63) | 128),
              r.push((63 & s) | 128);
          } else
            r.push((n >> 12) | 224),
              r.push(((n >> 6) & 63) | 128),
              r.push((63 & n) | 128);
        }
        return (0, s.arrayify)(r);
      }
      function h(e) {
        let t = "0000" + e.toString(16);
        return "\\u" + t.substring(t.length - 4);
      }
      function d(e, t) {
        return (
          '"' +
          u(e, t)
            .map((e) => {
              if (e < 256) {
                switch (e) {
                  case 8:
                    return "\\b";
                  case 9:
                    return "\\t";
                  case 10:
                    return "\\n";
                  case 13:
                    return "\\r";
                  case 34:
                    return '\\"';
                  case 92:
                    return "\\\\";
                }
                if (e >= 32 && e < 127) return String.fromCharCode(e);
              }
              return e <= 65535
                ? h(e)
                : h((((e -= 65536) >> 10) & 1023) + 55296) +
                    h((1023 & e) + 56320);
            })
            .join("") +
          '"'
        );
      }
      function l(e) {
        return e
          .map((e) =>
            e <= 65535
              ? String.fromCharCode(e)
              : String.fromCharCode(
                  (((e -= 65536) >> 10) & 1023) + 55296,
                  (1023 & e) + 56320
                )
          )
          .join("");
      }
      function p(e, t) {
        return l(u(e, t));
      }
      function g(e, t = n.current) {
        return u(c(e, t));
      }
    },
    2953: (e, t, r) => {
      (t.utils = r(42539)),
        (t.common = r(68711)),
        (t.sha = r(90340)),
        (t.ripemd = r(98625)),
        (t.hmac = r(71861)),
        (t.sha1 = t.sha.sha1),
        (t.sha256 = t.sha.sha256),
        (t.sha224 = t.sha.sha224),
        (t.sha384 = t.sha.sha384),
        (t.sha512 = t.sha.sha512),
        (t.ripemd160 = t.ripemd.ripemd160);
    },
    6861: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          SigningKey: () => G,
          computePublicKey: () => H,
          recoverPublicKey: () => V,
        });
      var n = r(92437),
        i = r.n(n),
        s = r(2953),
        a = r.n(s);
      function o(e, t, r) {
        return (
          e(
            (r = {
              path: t,
              exports: {},
              require: function (e, t) {
                throw (
                  (null == t && r.path,
                  Error(
                    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                  ))
                );
              },
            }),
            r.exports
          ),
          r.exports
        );
      }
      "undefined" != typeof globalThis ||
        ("undefined" != typeof window
          ? window
          : void 0 !== r.g
          ? r.g
          : "undefined" != typeof self && self);
      var f = u;
      function u(e, t) {
        if (!e) throw Error(t || "Assertion failed");
      }
      u.equal = function (e, t, r) {
        if (e != t) throw Error(r || "Assertion failed: " + e + " != " + t);
      };
      var c = o(function (e, t) {
          function r(e) {
            return 1 === e.length ? "0" + e : e;
          }
          function n(e) {
            for (var t = "", n = 0; n < e.length; n++)
              t += r(e[n].toString(16));
            return t;
          }
          (t.toArray = function (e, t) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var r = [];
            if ("string" != typeof e) {
              for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
              return r;
            }
            if ("hex" === t) {
              (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                (e = "0" + e);
              for (var n = 0; n < e.length; n += 2)
                r.push(parseInt(e[n] + e[n + 1], 16));
            } else
              for (var n = 0; n < e.length; n++) {
                var i = e.charCodeAt(n),
                  s = i >> 8,
                  a = 255 & i;
                s ? r.push(s, a) : r.push(a);
              }
            return r;
          }),
            (t.zero2 = r),
            (t.toHex = n),
            (t.encode = function (e, t) {
              return "hex" === t ? n(e) : e;
            });
        }),
        h = o(function (e, t) {
          (t.assert = f),
            (t.toArray = c.toArray),
            (t.zero2 = c.zero2),
            (t.toHex = c.toHex),
            (t.encode = c.encode),
            (t.getNAF = function (e, t, r) {
              var n = Array(Math.max(e.bitLength(), r) + 1);
              for (a = 0; a < n.length; a += 1) n[a] = 0;
              var i = 1 << (t + 1),
                s = e.clone();
              for (a = 0; a < n.length; a++) {
                var a,
                  o,
                  f = s.andln(i - 1);
                s.isOdd()
                  ? ((o = f > (i >> 1) - 1 ? (i >> 1) - f : f), s.isubn(o))
                  : (o = 0),
                  (n[a] = o),
                  s.iushrn(1);
              }
              return n;
            }),
            (t.getJSF = function (e, t) {
              var r = [[], []];
              (e = e.clone()), (t = t.clone());
              for (var n = 0, i = 0; e.cmpn(-n) > 0 || t.cmpn(-i) > 0; ) {
                var s,
                  a,
                  o,
                  f = (e.andln(3) + n) & 3,
                  u = (t.andln(3) + i) & 3;
                3 === f && (f = -1),
                  3 === u && (u = -1),
                  (a =
                    (1 & f) == 0
                      ? 0
                      : (3 == (s = (e.andln(7) + n) & 7) || 5 === s) && 2 === u
                      ? -f
                      : f),
                  r[0].push(a),
                  (o =
                    (1 & u) == 0
                      ? 0
                      : (3 == (s = (t.andln(7) + i) & 7) || 5 === s) && 2 === f
                      ? -u
                      : u),
                  r[1].push(o),
                  2 * n === a + 1 && (n = 1 - n),
                  2 * i === o + 1 && (i = 1 - i),
                  e.iushrn(1),
                  t.iushrn(1);
              }
              return r;
            }),
            (t.cachedProperty = function (e, t, r) {
              var n = "_" + t;
              e.prototype[t] = function () {
                return void 0 !== this[n] ? this[n] : (this[n] = r.call(this));
              };
            }),
            (t.parseBytes = function (e) {
              return "string" == typeof e ? t.toArray(e, "hex") : e;
            }),
            (t.intFromLE = function (e) {
              return new (i())(e, "hex", "le");
            });
        }),
        d = h.getNAF,
        l = h.getJSF,
        p = h.assert;
      function g(e, t) {
        (this.type = e),
          (this.p = new (i())(t.p, 16)),
          (this.red = t.prime ? i().red(t.prime) : i().mont(this.p)),
          (this.zero = new (i())(0).toRed(this.red)),
          (this.one = new (i())(1).toRed(this.red)),
          (this.two = new (i())(2).toRed(this.red)),
          (this.n = t.n && new (i())(t.n, 16)),
          (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
          (this._wnafT1 = [, , , ,]),
          (this._wnafT2 = [, , , ,]),
          (this._wnafT3 = [, , , ,]),
          (this._wnafT4 = [, , , ,]),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function m(e, t) {
        (this.curve = e), (this.type = t), (this.precomputed = null);
      }
      (g.prototype.point = function () {
        throw Error("Not implemented");
      }),
        (g.prototype.validate = function () {
          throw Error("Not implemented");
        }),
        (g.prototype._fixedNafMul = function (e, t) {
          p(e.precomputed);
          var r,
            n,
            i = e._getDoubles(),
            s = d(t, 1, this._bitLength),
            a = (1 << (i.step + 1)) - (i.step % 2 == 0 ? 2 : 1);
          a /= 3;
          var o = [];
          for (r = 0; r < s.length; r += i.step) {
            n = 0;
            for (var f = r + i.step - 1; f >= r; f--) n = (n << 1) + s[f];
            o.push(n);
          }
          for (
            var u = this.jpoint(null, null, null),
              c = this.jpoint(null, null, null),
              h = a;
            h > 0;
            h--
          ) {
            for (r = 0; r < o.length; r++)
              (n = o[r]) === h
                ? (c = c.mixedAdd(i.points[r]))
                : n === -h && (c = c.mixedAdd(i.points[r].neg()));
            u = u.add(c);
          }
          return u.toP();
        }),
        (g.prototype._wnafMul = function (e, t) {
          var r = 4,
            n = e._getNAFPoints(r);
          r = n.wnd;
          for (
            var i = n.points,
              s = d(t, r, this._bitLength),
              a = this.jpoint(null, null, null),
              o = s.length - 1;
            o >= 0;
            o--
          ) {
            for (var f = 0; o >= 0 && 0 === s[o]; o--) f++;
            if ((o >= 0 && f++, (a = a.dblp(f)), o < 0)) break;
            var u = s[o];
            p(0 !== u),
              (a =
                "affine" === e.type
                  ? u > 0
                    ? a.mixedAdd(i[(u - 1) >> 1])
                    : a.mixedAdd(i[(-u - 1) >> 1].neg())
                  : u > 0
                  ? a.add(i[(u - 1) >> 1])
                  : a.add(i[(-u - 1) >> 1].neg()));
          }
          return "affine" === e.type ? a.toP() : a;
        }),
        (g.prototype._wnafMulAdd = function (e, t, r, n, i) {
          var s,
            a,
            o,
            f = this._wnafT1,
            u = this._wnafT2,
            c = this._wnafT3,
            h = 0;
          for (s = 0; s < n; s++) {
            var p = (o = t[s])._getNAFPoints(e);
            (f[s] = p.wnd), (u[s] = p.points);
          }
          for (s = n - 1; s >= 1; s -= 2) {
            var g = s - 1,
              m = s;
            if (1 !== f[g] || 1 !== f[m]) {
              (c[g] = d(r[g], f[g], this._bitLength)),
                (c[m] = d(r[m], f[m], this._bitLength)),
                (h = Math.max(c[g].length, h)),
                (h = Math.max(c[m].length, h));
              continue;
            }
            var y = [t[g], null, null, t[m]];
            0 === t[g].y.cmp(t[m].y)
              ? ((y[1] = t[g].add(t[m])),
                (y[2] = t[g].toJ().mixedAdd(t[m].neg())))
              : 0 === t[g].y.cmp(t[m].y.redNeg())
              ? ((y[1] = t[g].toJ().mixedAdd(t[m])),
                (y[2] = t[g].add(t[m].neg())))
              : ((y[1] = t[g].toJ().mixedAdd(t[m])),
                (y[2] = t[g].toJ().mixedAdd(t[m].neg())));
            var b = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
              v = l(r[g], r[m]);
            for (
              a = 0,
                h = Math.max(v[0].length, h),
                c[g] = Array(h),
                c[m] = Array(h);
              a < h;
              a++
            ) {
              var x = 0 | v[0][a],
                w = 0 | v[1][a];
              (c[g][a] = b[(x + 1) * 3 + (w + 1)]), (c[m][a] = 0), (u[g] = y);
            }
          }
          var E = this.jpoint(null, null, null),
            _ = this._wnafT4;
          for (s = h; s >= 0; s--) {
            for (var A = 0; s >= 0; ) {
              var P = !0;
              for (a = 0; a < n; a++)
                (_[a] = 0 | c[a][s]), 0 !== _[a] && (P = !1);
              if (!P) break;
              A++, s--;
            }
            if ((s >= 0 && A++, (E = E.dblp(A)), s < 0)) break;
            for (a = 0; a < n; a++) {
              var S = _[a];
              0 !== S &&
                (S > 0
                  ? (o = u[a][(S - 1) >> 1])
                  : S < 0 && (o = u[a][(-S - 1) >> 1].neg()),
                (E = "affine" === o.type ? E.mixedAdd(o) : E.add(o)));
            }
          }
          for (s = 0; s < n; s++) u[s] = null;
          return i ? E : E.toP();
        }),
        (g.BasePoint = m),
        (m.prototype.eq = function () {
          throw Error("Not implemented");
        }),
        (m.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (g.prototype.decodePoint = function (e, t) {
          e = h.toArray(e, t);
          var r = this.p.byteLength();
          if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r)
            return (
              6 === e[0]
                ? p(e[e.length - 1] % 2 == 0)
                : 7 === e[0] && p(e[e.length - 1] % 2 == 1),
              this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
            return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
          throw Error("Unknown point format");
        }),
        (m.prototype.encodeCompressed = function (e) {
          return this.encode(e, !0);
        }),
        (m.prototype._encode = function (e) {
          var t = this.curve.p.byteLength(),
            r = this.getX().toArray("be", t);
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray("be", t));
        }),
        (m.prototype.encode = function (e, t) {
          return h.encode(this._encode(t), e);
        }),
        (m.prototype.precompute = function (e) {
          if (this.precomputed) return this;
          var t = { doubles: null, naf: null, beta: null };
          return (
            (t.naf = this._getNAFPoints(8)),
            (t.doubles = this._getDoubles(4, e)),
            (t.beta = this._getBeta()),
            (this.precomputed = t),
            this
          );
        }),
        (m.prototype._hasDoubles = function (e) {
          if (!this.precomputed) return !1;
          var t = this.precomputed.doubles;
          return (
            !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
          );
        }),
        (m.prototype._getDoubles = function (e, t) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var r = [this], n = this, i = 0; i < t; i += e) {
            for (var s = 0; s < e; s++) n = n.dbl();
            r.push(n);
          }
          return { step: e, points: r };
        }),
        (m.prototype._getNAFPoints = function (e) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var t = [this],
              r = (1 << e) - 1,
              n = 1 === r ? null : this.dbl(),
              i = 1;
            i < r;
            i++
          )
            t[i] = t[i - 1].add(n);
          return { wnd: e, points: t };
        }),
        (m.prototype._getBeta = function () {
          return null;
        }),
        (m.prototype.dblp = function (e) {
          for (var t = this, r = 0; r < e; r++) t = t.dbl();
          return t;
        });
      var y = o(function (e) {
          "function" == typeof Object.create
            ? (e.exports = function (e, t) {
                t &&
                  ((e.super_ = t),
                  (e.prototype = Object.create(t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (e.exports = function (e, t) {
                if (t) {
                  e.super_ = t;
                  var r = function () {};
                  (r.prototype = t.prototype),
                    (e.prototype = new r()),
                    (e.prototype.constructor = e);
                }
              });
        }),
        b = h.assert;
      function v(e) {
        g.call(this, "short", e),
          (this.a = new (i())(e.a, 16).toRed(this.red)),
          (this.b = new (i())(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = [, , , ,]),
          (this._endoWnafT2 = [, , , ,]);
      }
      function x(e, t, r, n) {
        g.BasePoint.call(this, e, "affine"),
          null === t && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new (i())(t, 16)),
              (this.y = new (i())(r, 16)),
              n &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function w(e, t, r, n) {
        g.BasePoint.call(this, e, "jacobian"),
          null === t && null === r && null === n
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new (i())(0)))
            : ((this.x = new (i())(t, 16)),
              (this.y = new (i())(r, 16)),
              (this.z = new (i())(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      y(v, g),
        (v.prototype._getEndomorphism = function (e) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (e.beta) t = new (i())(e.beta, 16).toRed(this.red);
            else {
              var t,
                r,
                n,
                s = this._getEndoRoots(this.p);
              t = (t = 0 > s[0].cmp(s[1]) ? s[0] : s[1]).toRed(this.red);
            }
            if (e.lambda) r = new (i())(e.lambda, 16);
            else {
              var a = this._getEndoRoots(this.n);
              0 === this.g.mul(a[0]).x.cmp(this.g.x.redMul(t))
                ? (r = a[0])
                : ((r = a[1]),
                  b(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
            }
            return (
              (n = e.basis
                ? e.basis.map(function (e) {
                    return { a: new (i())(e.a, 16), b: new (i())(e.b, 16) };
                  })
                : this._getEndoBasis(r)),
              { beta: t, lambda: r, basis: n }
            );
          }
        }),
        (v.prototype._getEndoRoots = function (e) {
          var t = e === this.p ? this.red : i().mont(e),
            r = new (i())(2).toRed(t).redInvm(),
            n = r.redNeg(),
            s = new (i())(3).toRed(t).redNeg().redSqrt().redMul(r);
          return [n.redAdd(s).fromRed(), n.redSub(s).fromRed()];
        }),
        (v.prototype._getEndoBasis = function (e) {
          for (
            var t,
              r,
              n,
              s,
              a,
              o,
              f,
              u,
              c,
              h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              d = e,
              l = this.n.clone(),
              p = new (i())(1),
              g = new (i())(0),
              m = new (i())(0),
              y = new (i())(1),
              b = 0;
            0 !== d.cmpn(0);

          ) {
            var v = l.div(d);
            (u = l.sub(v.mul(d))), (c = m.sub(v.mul(p)));
            var x = y.sub(v.mul(g));
            if (!n && 0 > u.cmp(h))
              (t = f.neg()), (r = p), (n = u.neg()), (s = c);
            else if (n && 2 == ++b) break;
            (f = u), (l = d), (d = u), (m = p), (p = c), (y = g), (g = x);
          }
          (a = u.neg()), (o = c);
          var w = n.sqr().add(s.sqr());
          return (
            a.sqr().add(o.sqr()).cmp(w) >= 0 && ((a = t), (o = r)),
            n.negative && ((n = n.neg()), (s = s.neg())),
            a.negative && ((a = a.neg()), (o = o.neg())),
            [
              { a: n, b: s },
              { a: a, b: o },
            ]
          );
        }),
        (v.prototype._endoSplit = function (e) {
          var t = this.endo.basis,
            r = t[0],
            n = t[1],
            i = n.b.mul(e).divRound(this.n),
            s = r.b.neg().mul(e).divRound(this.n),
            a = i.mul(r.a),
            o = s.mul(n.a),
            f = i.mul(r.b),
            u = s.mul(n.b);
          return { k1: e.sub(a).sub(o), k2: f.add(u).neg() };
        }),
        (v.prototype.pointFromX = function (e, t) {
          (e = new (i())(e, 16)).red || (e = e.toRed(this.red));
          var r = e
              .redSqr()
              .redMul(e)
              .redIAdd(e.redMul(this.a))
              .redIAdd(this.b),
            n = r.redSqrt();
          if (0 !== n.redSqr().redSub(r).cmp(this.zero))
            throw Error("invalid point");
          var s = n.fromRed().isOdd();
          return ((t && !s) || (!t && s)) && (n = n.redNeg()), this.point(e, n);
        }),
        (v.prototype.validate = function (e) {
          if (e.inf) return !0;
          var t = e.x,
            r = e.y,
            n = this.a.redMul(t),
            i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
          return 0 === r.redSqr().redISub(i).cmpn(0);
        }),
        (v.prototype._endoWnafMulAdd = function (e, t, r) {
          for (
            var n = this._endoWnafT1, i = this._endoWnafT2, s = 0;
            s < e.length;
            s++
          ) {
            var a = this._endoSplit(t[s]),
              o = e[s],
              f = o._getBeta();
            a.k1.negative && (a.k1.ineg(), (o = o.neg(!0))),
              a.k2.negative && (a.k2.ineg(), (f = f.neg(!0))),
              (n[2 * s] = o),
              (n[2 * s + 1] = f),
              (i[2 * s] = a.k1),
              (i[2 * s + 1] = a.k2);
          }
          for (
            var u = this._wnafMulAdd(1, n, i, 2 * s, r), c = 0;
            c < 2 * s;
            c++
          )
            (n[c] = null), (i[c] = null);
          return u;
        }),
        y(x, g.BasePoint),
        (v.prototype.point = function (e, t, r) {
          return new x(this, e, t, r);
        }),
        (v.prototype.pointFromJSON = function (e, t) {
          return x.fromJSON(this, e, t);
        }),
        (x.prototype._getBeta = function () {
          if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var t = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (e) {
              var r = this.curve,
                n = function (e) {
                  return r.point(e.x.redMul(r.endo.beta), e.y);
                };
              (e.beta = t),
                (t.precomputed = {
                  beta: null,
                  naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(n) },
                  doubles: e.doubles && {
                    step: e.doubles.step,
                    points: e.doubles.points.map(n),
                  },
                });
            }
            return t;
          }
        }),
        (x.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (x.fromJSON = function (e, t, r) {
          "string" == typeof t && (t = JSON.parse(t));
          var n = e.point(t[0], t[1], r);
          if (!t[2]) return n;
          function i(t) {
            return e.point(t[0], t[1], r);
          }
          var s = t[2];
          return (
            (n.precomputed = {
              beta: null,
              doubles: s.doubles && {
                step: s.doubles.step,
                points: [n].concat(s.doubles.points.map(i)),
              },
              naf: s.naf && {
                wnd: s.naf.wnd,
                points: [n].concat(s.naf.points.map(i)),
              },
            }),
            n
          );
        }),
        (x.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (x.prototype.isInfinity = function () {
          return this.inf;
        }),
        (x.prototype.add = function (e) {
          if (this.inf) return e;
          if (e.inf) return this;
          if (this.eq(e)) return this.dbl();
          if (this.neg().eq(e) || 0 === this.x.cmp(e.x))
            return this.curve.point(null, null);
          var t = this.y.redSub(e.y);
          0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
          var r = t.redSqr().redISub(this.x).redISub(e.x),
            n = t.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, n);
        }),
        (x.prototype.dbl = function () {
          if (this.inf) return this;
          var e = this.y.redAdd(this.y);
          if (0 === e.cmpn(0)) return this.curve.point(null, null);
          var t = this.curve.a,
            r = this.x.redSqr(),
            n = e.redInvm(),
            i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
            s = i.redSqr().redISub(this.x.redAdd(this.x)),
            a = i.redMul(this.x.redSub(s)).redISub(this.y);
          return this.curve.point(s, a);
        }),
        (x.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (x.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (x.prototype.mul = function (e) {
          return ((e = new (i())(e, 16)), this.isInfinity())
            ? this
            : this._hasDoubles(e)
            ? this.curve._fixedNafMul(this, e)
            : this.curve.endo
            ? this.curve._endoWnafMulAdd([this], [e])
            : this.curve._wnafMul(this, e);
        }),
        (x.prototype.mulAdd = function (e, t, r) {
          var n = [this, t],
            i = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i)
            : this.curve._wnafMulAdd(1, n, i, 2);
        }),
        (x.prototype.jmulAdd = function (e, t, r) {
          var n = [this, t],
            i = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i, !0)
            : this.curve._wnafMulAdd(1, n, i, 2, !0);
        }),
        (x.prototype.eq = function (e) {
          return (
            this === e ||
            (this.inf === e.inf &&
              (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          );
        }),
        (x.prototype.neg = function (e) {
          if (this.inf) return this;
          var t = this.curve.point(this.x, this.y.redNeg());
          if (e && this.precomputed) {
            var r = this.precomputed,
              n = function (e) {
                return e.neg();
              };
            t.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(n),
              },
            };
          }
          return t;
        }),
        (x.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        y(w, g.BasePoint),
        (v.prototype.jpoint = function (e, t, r) {
          return new w(this, e, t, r);
        }),
        (w.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
            t = e.redSqr(),
            r = this.x.redMul(t),
            n = this.y.redMul(t).redMul(e);
          return this.curve.point(r, n);
        }),
        (w.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (w.prototype.add = function (e) {
          if (this.isInfinity()) return e;
          if (e.isInfinity()) return this;
          var t = e.z.redSqr(),
            r = this.z.redSqr(),
            n = this.x.redMul(t),
            i = e.x.redMul(r),
            s = this.y.redMul(t.redMul(e.z)),
            a = e.y.redMul(r.redMul(this.z)),
            o = n.redSub(i),
            f = s.redSub(a);
          if (0 === o.cmpn(0))
            if (0 !== f.cmpn(0)) return this.curve.jpoint(null, null, null);
            else return this.dbl();
          var u = o.redSqr(),
            c = u.redMul(o),
            h = n.redMul(u),
            d = f.redSqr().redIAdd(c).redISub(h).redISub(h),
            l = f.redMul(h.redISub(d)).redISub(s.redMul(c)),
            p = this.z.redMul(e.z).redMul(o);
          return this.curve.jpoint(d, l, p);
        }),
        (w.prototype.mixedAdd = function (e) {
          if (this.isInfinity()) return e.toJ();
          if (e.isInfinity()) return this;
          var t = this.z.redSqr(),
            r = this.x,
            n = e.x.redMul(t),
            i = this.y,
            s = e.y.redMul(t).redMul(this.z),
            a = r.redSub(n),
            o = i.redSub(s);
          if (0 === a.cmpn(0))
            if (0 !== o.cmpn(0)) return this.curve.jpoint(null, null, null);
            else return this.dbl();
          var f = a.redSqr(),
            u = f.redMul(a),
            c = r.redMul(f),
            h = o.redSqr().redIAdd(u).redISub(c).redISub(c),
            d = o.redMul(c.redISub(h)).redISub(i.redMul(u)),
            l = this.z.redMul(a);
          return this.curve.jpoint(h, d, l);
        }),
        (w.prototype.dblp = function (e) {
          if (0 === e || this.isInfinity()) return this;
          if (!e) return this.dbl();
          if (this.curve.zeroA || this.curve.threeA) {
            var t,
              r = this;
            for (t = 0; t < e; t++) r = r.dbl();
            return r;
          }
          var n = this.curve.a,
            i = this.curve.tinv,
            s = this.x,
            a = this.y,
            o = this.z,
            f = o.redSqr().redSqr(),
            u = a.redAdd(a);
          for (t = 0; t < e; t++) {
            var c = s.redSqr(),
              h = u.redSqr(),
              d = h.redSqr(),
              l = c.redAdd(c).redIAdd(c).redIAdd(n.redMul(f)),
              p = s.redMul(h),
              g = l.redSqr().redISub(p.redAdd(p)),
              m = p.redISub(g),
              y = l.redMul(m);
            y = y.redIAdd(y).redISub(d);
            var b = u.redMul(o);
            t + 1 < e && (f = f.redMul(d)), (s = g), (o = b), (u = y);
          }
          return this.curve.jpoint(s, u.redMul(i), o);
        }),
        (w.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (w.prototype._zeroDbl = function () {
          if (this.zOne) {
            var e,
              t,
              r,
              n = this.x.redSqr(),
              i = this.y.redSqr(),
              s = i.redSqr(),
              a = this.x.redAdd(i).redSqr().redISub(n).redISub(s);
            a = a.redIAdd(a);
            var o = n.redAdd(n).redIAdd(n),
              f = o.redSqr().redISub(a).redISub(a),
              u = s.redIAdd(s);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (e = f),
              (t = o.redMul(a.redISub(f)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var c = this.x.redSqr(),
              h = this.y.redSqr(),
              d = h.redSqr(),
              l = this.x.redAdd(h).redSqr().redISub(c).redISub(d);
            l = l.redIAdd(l);
            var p = c.redAdd(c).redIAdd(c),
              g = p.redSqr(),
              m = d.redIAdd(d);
            (m = (m = m.redIAdd(m)).redIAdd(m)),
              (e = g.redISub(l).redISub(l)),
              (t = p.redMul(l.redISub(e)).redISub(m)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (w.prototype._threeDbl = function () {
          if (this.zOne) {
            var e,
              t,
              r,
              n = this.x.redSqr(),
              i = this.y.redSqr(),
              s = i.redSqr(),
              a = this.x.redAdd(i).redSqr().redISub(n).redISub(s);
            a = a.redIAdd(a);
            var o = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
              f = o.redSqr().redISub(a).redISub(a);
            e = f;
            var u = s.redIAdd(s);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (t = o.redMul(a.redISub(f)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var c = this.z.redSqr(),
              h = this.y.redSqr(),
              d = this.x.redMul(h),
              l = this.x.redSub(c).redMul(this.x.redAdd(c));
            l = l.redAdd(l).redIAdd(l);
            var p = d.redIAdd(d),
              g = (p = p.redIAdd(p)).redAdd(p);
            (e = l.redSqr().redISub(g)),
              (r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(c));
            var m = h.redSqr();
            (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
              (t = l.redMul(p.redISub(e)).redISub(m));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (w.prototype._dbl = function () {
          var e = this.curve.a,
            t = this.x,
            r = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            s = t.redSqr(),
            a = r.redSqr(),
            o = s.redAdd(s).redIAdd(s).redIAdd(e.redMul(i)),
            f = t.redAdd(t),
            u = (f = f.redIAdd(f)).redMul(a),
            c = o.redSqr().redISub(u.redAdd(u)),
            h = u.redISub(c),
            d = a.redSqr();
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var l = o.redMul(h).redISub(d),
            p = r.redAdd(r).redMul(n);
          return this.curve.jpoint(c, l, p);
        }),
        (w.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr(),
            n = t.redSqr(),
            i = e.redAdd(e).redIAdd(e),
            s = i.redSqr(),
            a = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
            o = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(
              s
            )).redSqr(),
            f = n.redIAdd(n);
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
          var u = i.redIAdd(a).redSqr().redISub(s).redISub(o).redISub(f),
            c = t.redMul(u);
          c = (c = c.redIAdd(c)).redIAdd(c);
          var h = this.x.redMul(o).redISub(c);
          h = (h = h.redIAdd(h)).redIAdd(h);
          var d = this.y.redMul(u.redMul(f.redISub(u)).redISub(a.redMul(o)));
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var l = this.z.redAdd(a).redSqr().redISub(r).redISub(o);
          return this.curve.jpoint(h, d, l);
        }),
        (w.prototype.mul = function (e, t) {
          return (e = new (i())(e, t)), this.curve._wnafMul(this, e);
        }),
        (w.prototype.eq = function (e) {
          if ("affine" === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var t = this.z.redSqr(),
            r = e.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
          var n = t.redMul(this.z),
            i = r.redMul(e.z);
          return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0);
        }),
        (w.prototype.eqXToP = function (e) {
          var t = this.z.redSqr(),
            r = e.toRed(this.curve.red).redMul(t);
          if (0 === this.x.cmp(r)) return !0;
          for (var n = e.clone(), i = this.curve.redN.redMul(t); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (w.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (w.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var E = o(function (e, t) {
          (t.base = g), (t.short = v), (t.mont = null), (t.edwards = null);
        }),
        _ = o(function (e, t) {
          var r,
            n = h.assert;
          function i(e) {
            "short" === e.type
              ? (this.curve = new E.short(e))
              : "edwards" === e.type
              ? (this.curve = new E.edwards(e))
              : (this.curve = new E.mont(e)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = e.hash),
              n(this.g.validate(), "Invalid curve"),
              n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
          }
          function s(e, r) {
            Object.defineProperty(t, e, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var n = new i(r);
                return (
                  Object.defineProperty(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                  }),
                  n
                );
              },
            });
          }
          (t.PresetCurve = i),
            s("p192", {
              type: "short",
              prime: "p192",
              p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
              b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
              n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
              hash: a().sha256,
              gRed: !1,
              g: [
                "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
              ],
            }),
            s("p224", {
              type: "short",
              prime: "p224",
              p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
              b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
              n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
              hash: a().sha256,
              gRed: !1,
              g: [
                "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
              ],
            }),
            s("p256", {
              type: "short",
              prime: null,
              p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
              a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
              b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
              n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
              hash: a().sha256,
              gRed: !1,
              g: [
                "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
              ],
            }),
            s("p384", {
              type: "short",
              prime: null,
              p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
              a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
              b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
              n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
              hash: a().sha384,
              gRed: !1,
              g: [
                "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
              ],
            }),
            s("p521", {
              type: "short",
              prime: null,
              p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
              a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
              b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
              n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
              hash: a().sha512,
              gRed: !1,
              g: [
                "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
              ],
            }),
            s("curve25519", {
              type: "mont",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "76d06",
              b: "1",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: a().sha256,
              gRed: !1,
              g: ["9"],
            }),
            s("ed25519", {
              type: "edwards",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "-1",
              c: "1",
              d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: a().sha256,
              gRed: !1,
              g: [
                "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                "6666666666666666666666666666666666666666666666666666666666666658",
              ],
            });
          try {
            r = null.crash();
          } catch (e) {
            r = void 0;
          }
          s("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: a().sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda:
              "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [
              {
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3",
              },
              {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15",
              },
            ],
            gRed: !1,
            g: [
              "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
              "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
              r,
            ],
          });
        });
      function A(e) {
        if (!(this instanceof A)) return new A(e);
        (this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var t = c.toArray(e.entropy, e.entropyEnc || "hex"),
          r = c.toArray(e.nonce, e.nonceEnc || "hex"),
          n = c.toArray(e.pers, e.persEnc || "hex");
        f(
          t.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(t, r, n);
      }
      (A.prototype._init = function (e, t, r) {
        var n = e.concat(t).concat(r);
        (this.K = Array(this.outLen / 8)), (this.V = Array(this.outLen / 8));
        for (var i = 0; i < this.V.length; i++)
          (this.K[i] = 0), (this.V[i] = 1);
        this._update(n),
          (this._reseed = 1),
          (this.reseedInterval = 0x1000000000000);
      }),
        (A.prototype._hmac = function () {
          return new (a().hmac)(this.hash, this.K);
        }),
        (A.prototype._update = function (e) {
          var t = this._hmac().update(this.V).update([0]);
          e && (t = t.update(e)),
            (this.K = t.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            e &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(e)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (A.prototype.reseed = function (e, t, r, n) {
          "string" != typeof t && ((n = r), (r = t), (t = null)),
            (e = c.toArray(e, t)),
            (r = c.toArray(r, n)),
            f(
              e.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(e.concat(r || [])),
            (this._reseed = 1);
        }),
        (A.prototype.generate = function (e, t, r, n) {
          if (this._reseed > this.reseedInterval)
            throw Error("Reseed is required");
          "string" != typeof t && ((n = r), (r = t), (t = null)),
            r && ((r = c.toArray(r, n || "hex")), this._update(r));
          for (var i = []; i.length < e; )
            (this.V = this._hmac().update(this.V).digest()),
              (i = i.concat(this.V));
          var s = i.slice(0, e);
          return this._update(r), this._reseed++, c.encode(s, t);
        });
      var P = h.assert;
      function S(e, t) {
        (this.ec = e),
          (this.priv = null),
          (this.pub = null),
          t.priv && this._importPrivate(t.priv, t.privEnc),
          t.pub && this._importPublic(t.pub, t.pubEnc);
      }
      (S.fromPublic = function (e, t, r) {
        return t instanceof S ? t : new S(e, { pub: t, pubEnc: r });
      }),
        (S.fromPrivate = function (e, t, r) {
          return t instanceof S ? t : new S(e, { priv: t, privEnc: r });
        }),
        (S.prototype.validate = function () {
          var e = this.getPublic();
          return e.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : e.validate()
            ? e.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (S.prototype.getPublic = function (e, t) {
          return ("string" == typeof e && ((t = e), (e = null)),
          this.pub || (this.pub = this.ec.g.mul(this.priv)),
          t)
            ? this.pub.encode(t, e)
            : this.pub;
        }),
        (S.prototype.getPrivate = function (e) {
          return "hex" === e ? this.priv.toString(16, 2) : this.priv;
        }),
        (S.prototype._importPrivate = function (e, t) {
          (this.priv = new (i())(e, t || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (S.prototype._importPublic = function (e, t) {
          if (e.x || e.y) {
            "mont" === this.ec.curve.type
              ? P(e.x, "Need x coordinate")
              : ("short" === this.ec.curve.type ||
                  "edwards" === this.ec.curve.type) &&
                P(e.x && e.y, "Need both x and y coordinate"),
              (this.pub = this.ec.curve.point(e.x, e.y));
            return;
          }
          this.pub = this.ec.curve.decodePoint(e, t);
        }),
        (S.prototype.derive = function (e) {
          return (
            e.validate() || P(e.validate(), "public point not validated"),
            e.mul(this.priv).getX()
          );
        }),
        (S.prototype.sign = function (e, t, r) {
          return this.ec.sign(e, this, t, r);
        }),
        (S.prototype.verify = function (e, t, r) {
          return this.ec.verify(e, t, this, void 0, r);
        }),
        (S.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
      var O = h.assert;
      function I(e, t) {
        if (e instanceof I) return e;
        this._importDER(e, t) ||
          (O(e.r && e.s, "Signature without r or s"),
          (this.r = new (i())(e.r, 16)),
          (this.s = new (i())(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam));
      }
      function R() {
        this.place = 0;
      }
      function N(e, t) {
        var r = e[t.place++];
        if (!(128 & r)) return r;
        var n = 15 & r;
        if (0 === n || n > 4 || 0 === e[t.place]) return !1;
        for (var i = 0, s = 0, a = t.place; s < n; s++, a++)
          (i <<= 8), (i |= e[a]), (i >>>= 0);
        return !(i <= 127) && ((t.place = a), i);
      }
      function k(e) {
        for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r; )
          t++;
        return 0 === t ? e : e.slice(t);
      }
      function T(e, t) {
        if (t < 128) return void e.push(t);
        var r = 1 + ((Math.log(t) / Math.LN2) >>> 3);
        for (e.push(128 | r); --r; ) e.push((t >>> (r << 3)) & 255);
        e.push(t);
      }
      (I.prototype._importDER = function (e, t) {
        e = h.toArray(e, t);
        var r = new R();
        if (48 !== e[r.place++]) return !1;
        var n = N(e, r);
        if (!1 === n || n + r.place !== e.length || 2 !== e[r.place++])
          return !1;
        var s = N(e, r);
        if (!1 === s || (128 & e[r.place]) != 0) return !1;
        var a = e.slice(r.place, s + r.place);
        if (((r.place += s), 2 !== e[r.place++])) return !1;
        var o = N(e, r);
        if (!1 === o || e.length !== o + r.place || (128 & e[r.place]) != 0)
          return !1;
        var f = e.slice(r.place, o + r.place);
        if (0 === a[0])
          if (!(128 & a[1])) return !1;
          else a = a.slice(1);
        if (0 === f[0])
          if (!(128 & f[1])) return !1;
          else f = f.slice(1);
        return (
          (this.r = new (i())(a)),
          (this.s = new (i())(f)),
          (this.recoveryParam = null),
          !0
        );
      }),
        (I.prototype.toDER = function (e) {
          var t = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & t[0] && (t = [0].concat(t)),
              128 & r[0] && (r = [0].concat(r)),
              t = k(t),
              r = k(r);
            !r[0] && !(128 & r[1]);

          )
            r = r.slice(1);
          var n = [2];
          T(n, t.length), (n = n.concat(t)).push(2), T(n, r.length);
          var i = n.concat(r),
            s = [48];
          return T(s, i.length), (s = s.concat(i)), h.encode(s, e);
        });
      var L = function () {
          throw Error("unsupported");
        },
        F = h.assert;
      function M(e) {
        if (!(this instanceof M)) return new M(e);
        "string" == typeof e &&
          (F(Object.prototype.hasOwnProperty.call(_, e), "Unknown curve " + e),
          (e = _[e])),
          e instanceof _.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash);
      }
      (M.prototype.keyPair = function (e) {
        return new S(this, e);
      }),
        (M.prototype.keyFromPrivate = function (e, t) {
          return S.fromPrivate(this, e, t);
        }),
        (M.prototype.keyFromPublic = function (e, t) {
          return S.fromPublic(this, e, t);
        }),
        (M.prototype.genKeyPair = function (e) {
          e || (e = {});
          for (
            var t = new A({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || L(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              n = this.n.sub(new (i())(2));
            ;

          ) {
            var s = new (i())(t.generate(r));
            if (!(s.cmp(n) > 0)) return s.iaddn(1), this.keyFromPrivate(s);
          }
        }),
        (M.prototype._truncateToN = function (e, t, r) {
          if (i().isBN(e) || "number" == typeof e)
            n = (e = new (i())(e, 16)).byteLength();
          else if ("object" == typeof e) (n = e.length), (e = new (i())(e, 16));
          else {
            var n,
              s = e.toString();
            (n = (s.length + 1) >>> 1), (e = new (i())(s, 16));
          }
          "number" != typeof r && (r = 8 * n);
          var a = r - this.n.bitLength();
          return (a > 0 && (e = e.ushrn(a)), !t && e.cmp(this.n) >= 0)
            ? e.sub(this.n)
            : e;
        }),
        (M.prototype.sign = function (e, t, r, n) {
          if (
            ("object" == typeof r && ((n = r), (r = null)),
            n || (n = {}),
            "string" != typeof e && "number" != typeof e && !i().isBN(e))
          ) {
            F(
              "object" == typeof e && e && "number" == typeof e.length,
              "Expected message to be an array-like, a hex string, or a BN instance"
            ),
              F(e.length >>> 0 === e.length);
            for (var s = 0; s < e.length; s++) F((255 & e[s]) === e[s]);
          }
          (t = this.keyFromPrivate(t, r)),
            F(
              !(e = this._truncateToN(e, !1, n.msgBitLength)).isNeg(),
              "Can not sign a negative message"
            );
          var a = this.n.byteLength(),
            o = t.getPrivate().toArray("be", a),
            f = e.toArray("be", a);
          F(new (i())(f).eq(e), "Can not sign message");
          for (
            var u = new A({
                hash: this.hash,
                entropy: o,
                nonce: f,
                pers: n.pers,
                persEnc: n.persEnc || "utf8",
              }),
              c = this.n.sub(new (i())(1)),
              h = 0;
            ;
            h++
          ) {
            var d = n.k ? n.k(h) : new (i())(u.generate(this.n.byteLength()));
            if (0 >= (d = this._truncateToN(d, !0)).cmpn(1) || d.cmp(c) >= 0)
              continue;
            var l = this.g.mul(d);
            if (!l.isInfinity()) {
              var p = l.getX(),
                g = p.umod(this.n);
              if (0 !== g.cmpn(0)) {
                var m = d.invm(this.n).mul(g.mul(t.getPrivate()).iadd(e));
                if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                  var y = !!l.getY().isOdd() | (2 * (0 !== p.cmp(g)));
                  return (
                    n.canonical &&
                      m.cmp(this.nh) > 0 &&
                      ((m = this.n.sub(m)), (y ^= 1)),
                    new I({ r: g, s: m, recoveryParam: y })
                  );
                }
              }
            }
          }
        }),
        (M.prototype.verify = function (e, t, r, n, i) {
          i || (i = {}),
            (e = this._truncateToN(e, !1, i.msgBitLength)),
            (r = this.keyFromPublic(r, n));
          var s,
            a = (t = new I(t, "hex")).r,
            o = t.s;
          if (
            0 > a.cmpn(1) ||
            a.cmp(this.n) >= 0 ||
            0 > o.cmpn(1) ||
            o.cmp(this.n) >= 0
          )
            return !1;
          var f = o.invm(this.n),
            u = f.mul(e).umod(this.n),
            c = f.mul(a).umod(this.n);
          return this.curve._maxwellTrick
            ? !(s = this.g.jmulAdd(u, r.getPublic(), c)).isInfinity() &&
                s.eqXToP(a)
            : !(s = this.g.mulAdd(u, r.getPublic(), c)).isInfinity() &&
                0 === s.getX().umod(this.n).cmp(a);
        }),
        (M.prototype.recoverPubKey = function (e, t, r, n) {
          F((3 & r) === r, "The recovery param is more than two bits"),
            (t = new I(t, n));
          var s = this.n,
            a = new (i())(e),
            o = t.r,
            f = t.s,
            u = 1 & r,
            c = r >> 1;
          if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && c)
            throw Error("Unable to find sencond key candinate");
          o = c
            ? this.curve.pointFromX(o.add(this.curve.n), u)
            : this.curve.pointFromX(o, u);
          var h = t.r.invm(s),
            d = s.sub(a).mul(h).umod(s),
            l = f.mul(h).umod(s);
          return this.g.mulAdd(d, o, l);
        }),
        (M.prototype.getKeyRecoveryParam = function (e, t, r, n) {
          if (null !== (t = new I(t, n)).recoveryParam) return t.recoveryParam;
          for (var i, s = 0; s < 4; s++) {
            try {
              i = this.recoverPubKey(e, t, s);
            } catch (e) {
              continue;
            }
            if (i.eq(r)) return s;
          }
          throw Error("Unable to find valid recovery factor");
        });
      var j = o(function (e, t) {
          (t.version = "6.6.1"),
            (t.utils = h),
            (t.rand = function () {
              throw Error("unsupported");
            }),
            (t.curve = E),
            (t.curves = _),
            (t.ec = M),
            (t.eddsa = null);
        }).ec,
        C = r(45849),
        z = r(49435);
      let U = new (r(83928).Logger)("signing-key/5.8.0"),
        D = null;
      function q() {
        return D || (D = new j("secp256k1")), D;
      }
      class G {
        constructor(e) {
          (0, z.defineReadOnly)(this, "curve", "secp256k1"),
            (0, z.defineReadOnly)(this, "privateKey", (0, C.hexlify)(e)),
            32 !== (0, C.hexDataLength)(this.privateKey) &&
              U.throwArgumentError(
                "invalid private key",
                "privateKey",
                "[[ REDACTED ]]"
              );
          let t = q().keyFromPrivate((0, C.arrayify)(this.privateKey));
          (0, z.defineReadOnly)(
            this,
            "publicKey",
            "0x" + t.getPublic(!1, "hex")
          ),
            (0, z.defineReadOnly)(
              this,
              "compressedPublicKey",
              "0x" + t.getPublic(!0, "hex")
            ),
            (0, z.defineReadOnly)(this, "_isSigningKey", !0);
        }
        _addPoint(e) {
          let t = q().keyFromPublic((0, C.arrayify)(this.publicKey)),
            r = q().keyFromPublic((0, C.arrayify)(e));
          return "0x" + t.pub.add(r.pub).encodeCompressed("hex");
        }
        signDigest(e) {
          let t = q().keyFromPrivate((0, C.arrayify)(this.privateKey)),
            r = (0, C.arrayify)(e);
          32 !== r.length &&
            U.throwArgumentError("bad digest length", "digest", e);
          let n = t.sign(r, { canonical: !0 });
          return (0, C.splitSignature)({
            recoveryParam: n.recoveryParam,
            r: (0, C.hexZeroPad)("0x" + n.r.toString(16), 32),
            s: (0, C.hexZeroPad)("0x" + n.s.toString(16), 32),
          });
        }
        computeSharedSecret(e) {
          let t = q().keyFromPrivate((0, C.arrayify)(this.privateKey)),
            r = q().keyFromPublic((0, C.arrayify)(H(e)));
          return (0, C.hexZeroPad)(
            "0x" + t.derive(r.getPublic()).toString(16),
            32
          );
        }
        static isSigningKey(e) {
          return !!(e && e._isSigningKey);
        }
      }
      function V(e, t) {
        let r = (0, C.splitSignature)(t),
          n = { r: (0, C.arrayify)(r.r), s: (0, C.arrayify)(r.s) };
        return (
          "0x" +
          q()
            .recoverPubKey((0, C.arrayify)(e), n, r.recoveryParam)
            .encode("hex", !1)
        );
      }
      function H(e, t) {
        let r = (0, C.arrayify)(e);
        if (32 === r.length) {
          let e = new G(r);
          return t
            ? "0x" + q().keyFromPrivate(r).getPublic(!0, "hex")
            : e.publicKey;
        }
        return 33 === r.length
          ? t
            ? (0, C.hexlify)(r)
            : "0x" + q().keyFromPublic(r).getPublic(!1, "hex")
          : 65 === r.length
          ? t
            ? "0x" + q().keyFromPublic(r).getPublic(!0, "hex")
            : (0, C.hexlify)(r)
          : U.throwArgumentError(
              "invalid public or private key",
              "key",
              "[REDACTED]"
            );
      }
    },
    8839: (e, t, r) => {
      "use strict";
      var n = r(42539),
        i = r(68711),
        s = r(23124),
        a = n.rotr64_hi,
        o = n.rotr64_lo,
        f = n.shr64_hi,
        u = n.shr64_lo,
        c = n.sum64,
        h = n.sum64_hi,
        d = n.sum64_lo,
        l = n.sum64_4_hi,
        p = n.sum64_4_lo,
        g = n.sum64_5_hi,
        m = n.sum64_5_lo,
        y = i.BlockHash,
        b = [
          0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf,
          0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538,
          0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5,
          0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
          0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74,
          0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235,
          0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786,
          0x384f25e3, 0xfc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f,
          0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4,
          0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d,
          0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
          0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x6ca6351, 0xe003826f,
          0x14292967, 0xa0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
          0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354,
          0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6,
          0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b,
          0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x654be30, 0xd192e819,
          0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a,
          0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08,
          0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
          0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f,
          0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc,
          0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208,
          0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
          0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece,
          0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e,
          0xf57d4f7f, 0xee6ed178, 0x6f067aa, 0x72176fba, 0xa637dc5, 0xa2c898a6,
          0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5,
          0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc,
          0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c,
          0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817,
        ];
      function v() {
        if (!(this instanceof v)) return new v();
        y.call(this),
          (this.h = [
            0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372,
            0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1,
            0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19,
            0x137e2179,
          ]),
          (this.k = b),
          (this.W = Array(160));
      }
      n.inherits(v, y),
        (e.exports = v),
        (v.blockSize = 1024),
        (v.outSize = 512),
        (v.hmacStrength = 192),
        (v.padLength = 128),
        (v.prototype._prepareBlock = function (e, t) {
          for (var r = this.W, n = 0; n < 32; n++) r[n] = e[t + n];
          for (; n < r.length; n += 2) {
            var i = (function (e, t) {
                var r = a(e, t, 19) ^ a(t, e, 29) ^ f(e, t, 6);
                return r < 0 && (r += 0x100000000), r;
              })(r[n - 4], r[n - 3]),
              s = (function (e, t) {
                var r = o(e, t, 19) ^ o(t, e, 29) ^ u(e, t, 6);
                return r < 0 && (r += 0x100000000), r;
              })(r[n - 4], r[n - 3]),
              c = r[n - 14],
              h = r[n - 13],
              d = (function (e, t) {
                var r = a(e, t, 1) ^ a(e, t, 8) ^ f(e, t, 7);
                return r < 0 && (r += 0x100000000), r;
              })(r[n - 30], r[n - 29]),
              g = (function (e, t) {
                var r = o(e, t, 1) ^ o(e, t, 8) ^ u(e, t, 7);
                return r < 0 && (r += 0x100000000), r;
              })(r[n - 30], r[n - 29]),
              m = r[n - 32],
              y = r[n - 31];
            (r[n] = l(i, s, c, h, d, g, m, y)),
              (r[n + 1] = p(i, s, c, h, d, g, m, y));
          }
        }),
        (v.prototype._update = function (e, t) {
          this._prepareBlock(e, t);
          var r = this.W,
            n = this.h[0],
            i = this.h[1],
            f = this.h[2],
            u = this.h[3],
            l = this.h[4],
            p = this.h[5],
            y = this.h[6],
            b = this.h[7],
            v = this.h[8],
            x = this.h[9],
            w = this.h[10],
            E = this.h[11],
            _ = this.h[12],
            A = this.h[13],
            P = this.h[14],
            S = this.h[15];
          s(this.k.length === r.length);
          for (var O = 0; O < r.length; O += 2) {
            var I = P,
              R = S,
              N = (function (e, t) {
                var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
                return r < 0 && (r += 0x100000000), r;
              })(v, x),
              k = (function (e, t) {
                var r = o(e, t, 14) ^ o(e, t, 18) ^ o(t, e, 9);
                return r < 0 && (r += 0x100000000), r;
              })(v, x),
              T = (function (e, t, r, n, i) {
                var s = (e & r) ^ (~e & i);
                return s < 0 && (s += 0x100000000), s;
              })(v, 0, w, 0, _, A),
              L = (function (e, t, r, n, i, s) {
                var a = (t & n) ^ (~t & s);
                return a < 0 && (a += 0x100000000), a;
              })(0, x, 0, E, 0, A),
              F = this.k[O],
              M = this.k[O + 1],
              j = r[O],
              C = r[O + 1],
              z = g(I, R, N, k, T, L, F, M, j, C),
              U = m(I, R, N, k, T, L, F, M, j, C);
            (I = (function (e, t) {
              var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
              return r < 0 && (r += 0x100000000), r;
            })(n, i)),
              (R = (function (e, t) {
                var r = o(e, t, 28) ^ o(t, e, 2) ^ o(t, e, 7);
                return r < 0 && (r += 0x100000000), r;
              })(n, i));
            var D = h(
                I,
                R,
                (N = (function (e, t, r, n, i) {
                  var s = (e & r) ^ (e & i) ^ (r & i);
                  return s < 0 && (s += 0x100000000), s;
                })(n, 0, f, 0, l, p)),
                (k = (function (e, t, r, n, i, s) {
                  var a = (t & n) ^ (t & s) ^ (n & s);
                  return a < 0 && (a += 0x100000000), a;
                })(0, i, 0, u, 0, p))
              ),
              q = d(I, R, N, k);
            (P = _),
              (S = A),
              (_ = w),
              (A = E),
              (w = v),
              (E = x),
              (v = h(y, b, z, U)),
              (x = d(b, b, z, U)),
              (y = l),
              (b = p),
              (l = f),
              (p = u),
              (f = n),
              (u = i),
              (n = h(z, U, D, q)),
              (i = d(z, U, D, q));
          }
          c(this.h, 0, n, i),
            c(this.h, 2, f, u),
            c(this.h, 4, l, p),
            c(this.h, 6, y, b),
            c(this.h, 8, v, x),
            c(this.h, 10, w, E),
            c(this.h, 12, _, A),
            c(this.h, 14, P, S);
        }),
        (v.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    11937: (e, t, r) => {
      "use strict";
      r.d(t, { NZ: () => I, PM: () => R });
      var n = r(37371),
        i = r(93685),
        s = r(85700),
        a = r(61157),
        o = r(68652),
        f = r(84784),
        u = r(45849),
        c = r(49435),
        h = r(91359),
        d = r(83928),
        l = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, s) {
            function a(e) {
              try {
                f(n.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                f(n.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function f(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })
                  ).then(a, o);
            }
            f((n = n.apply(e, t || [])).next());
          });
        };
      let p = new d.Logger("contracts/5.8.0"),
        g = {
          chainId: !0,
          data: !0,
          from: !0,
          gasLimit: !0,
          gasPrice: !0,
          nonce: !0,
          to: !0,
          value: !0,
          type: !0,
          accessList: !0,
          maxFeePerGas: !0,
          maxPriorityFeePerGas: !0,
          customData: !0,
          ccipReadEnabled: !0,
        };
      function m(e, t) {
        return l(this, void 0, void 0, function* () {
          let r = yield t;
          "string" != typeof r &&
            p.throwArgumentError("invalid address or ENS name", "name", r);
          try {
            return (0, o.getAddress)(r);
          } catch (e) {}
          e ||
            p.throwError(
              "a provider or signer is needed to resolve ENS names",
              d.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "resolveName" }
            );
          let n = yield e.resolveName(r);
          return (
            null == n &&
              p.throwArgumentError(
                "resolver or addr is not configured for ENS name",
                "name",
                r
              ),
            n
          );
        });
      }
      function y(e, t, r) {
        return l(this, void 0, void 0, function* () {
          return Array.isArray(r)
            ? yield Promise.all(
                r.map((r, n) => y(e, Array.isArray(t) ? t[n] : t[r.name], r))
              )
            : "address" === r.type
            ? yield m(e, t)
            : "tuple" === r.type
            ? yield y(e, t, r.components)
            : "array" === r.baseType
            ? Array.isArray(t)
              ? yield Promise.all(t.map((t) => y(e, t, r.arrayChildren)))
              : Promise.reject(
                  p.makeError(
                    "invalid value for array",
                    d.Logger.errors.INVALID_ARGUMENT,
                    { argument: "value", value: t }
                  )
                )
            : t;
        });
      }
      function b(e, t, r) {
        return l(this, void 0, void 0, function* () {
          let n = {};
          r.length === t.inputs.length + 1 &&
            "object" == typeof r[r.length - 1] &&
            (n = (0, c.shallowCopy)(r.pop())),
            p.checkArgumentCount(
              r.length,
              t.inputs.length,
              "passed to contract"
            ),
            e.signer
              ? n.from
                ? (n.from = (0, c.resolveProperties)({
                    override: m(e.signer, n.from),
                    signer: e.signer.getAddress(),
                  }).then((e) =>
                    l(this, void 0, void 0, function* () {
                      return (
                        (0, o.getAddress)(e.signer) !== e.override &&
                          p.throwError(
                            "Contract with a Signer cannot override from",
                            d.Logger.errors.UNSUPPORTED_OPERATION,
                            { operation: "overrides.from" }
                          ),
                        e.override
                      );
                    })
                  ))
                : (n.from = e.signer.getAddress())
              : n.from && (n.from = m(e.provider, n.from));
          let i = yield (0, c.resolveProperties)({
              args: y(e.signer || e.provider, r, t.inputs),
              address: e.resolvedAddress,
              overrides: (0, c.resolveProperties)(n) || {},
            }),
            s = e.interface.encodeFunctionData(t, i.args),
            a = { data: s, to: i.address },
            g = i.overrides;
          if (
            (null != g.nonce && (a.nonce = f.gH.from(g.nonce).toNumber()),
            null != g.gasLimit && (a.gasLimit = f.gH.from(g.gasLimit)),
            null != g.gasPrice && (a.gasPrice = f.gH.from(g.gasPrice)),
            null != g.maxFeePerGas &&
              (a.maxFeePerGas = f.gH.from(g.maxFeePerGas)),
            null != g.maxPriorityFeePerGas &&
              (a.maxPriorityFeePerGas = f.gH.from(g.maxPriorityFeePerGas)),
            null != g.from && (a.from = g.from),
            null != g.type && (a.type = g.type),
            null != g.accessList &&
              (a.accessList = (0, h.accessListify)(g.accessList)),
            null == a.gasLimit && null != t.gas)
          ) {
            let e = 21e3,
              r = (0, u.arrayify)(s);
            for (let t = 0; t < r.length; t++) (e += 4), r[t] && (e += 64);
            a.gasLimit = f.gH.from(t.gas).add(e);
          }
          if (g.value) {
            let e = f.gH.from(g.value);
            e.isZero() ||
              t.payable ||
              p.throwError(
                "non-payable method cannot override value",
                d.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "overrides.value", value: n.value }
              ),
              (a.value = e);
          }
          g.customData && (a.customData = (0, c.shallowCopy)(g.customData)),
            g.ccipReadEnabled && (a.ccipReadEnabled = !!g.ccipReadEnabled),
            delete n.nonce,
            delete n.gasLimit,
            delete n.gasPrice,
            delete n.from,
            delete n.value,
            delete n.type,
            delete n.accessList,
            delete n.maxFeePerGas,
            delete n.maxPriorityFeePerGas,
            delete n.customData,
            delete n.ccipReadEnabled;
          let b = Object.keys(n).filter((e) => null != n[e]);
          return (
            b.length &&
              p.throwError(
                `cannot override ${b.map((e) => JSON.stringify(e)).join(",")}`,
                d.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "overrides", overrides: b }
              ),
            a
          );
        });
      }
      function v(e, t) {
        let r = t.wait.bind(t);
        t.wait = (t) =>
          r(t).then(
            (t) => (
              (t.events = t.logs.map((r) => {
                let n = (0, c.deepCopy)(r),
                  i = null;
                try {
                  i = e.interface.parseLog(r);
                } catch (e) {}
                return (
                  i &&
                    ((n.args = i.args),
                    (n.decode = (t, r) =>
                      e.interface.decodeEventLog(i.eventFragment, t, r)),
                    (n.event = i.name),
                    (n.eventSignature = i.signature)),
                  (n.removeListener = () => e.provider),
                  (n.getBlock = () => e.provider.getBlock(t.blockHash)),
                  (n.getTransaction = () =>
                    e.provider.getTransaction(t.transactionHash)),
                  (n.getTransactionReceipt = () => Promise.resolve(t)),
                  n
                );
              })),
              t
            )
          );
      }
      function x(e, t, r) {
        let n = e.signer || e.provider;
        return function (...i) {
          return l(this, void 0, void 0, function* () {
            let s;
            if (
              i.length === t.inputs.length + 1 &&
              "object" == typeof i[i.length - 1]
            ) {
              let e = (0, c.shallowCopy)(i.pop());
              null != e.blockTag && (s = yield e.blockTag),
                delete e.blockTag,
                i.push(e);
            }
            null != e.deployTransaction && (yield e._deployed(s));
            let a = yield b(e, t, i),
              o = yield n.call(a, s);
            try {
              let n = e.interface.decodeFunctionResult(t, o);
              return r && 1 === t.outputs.length && (n = n[0]), n;
            } catch (t) {
              throw (
                (t.code === d.Logger.errors.CALL_EXCEPTION &&
                  ((t.address = e.address), (t.args = i), (t.transaction = a)),
                t)
              );
            }
          });
        };
      }
      function w(e, t, r) {
        return t.constant
          ? x(e, t, r)
          : function (...r) {
              return l(this, void 0, void 0, function* () {
                e.signer ||
                  p.throwError(
                    "sending a transaction requires a signer",
                    d.Logger.errors.UNSUPPORTED_OPERATION,
                    { operation: "sendTransaction" }
                  ),
                  null != e.deployTransaction && (yield e._deployed());
                let n = yield b(e, t, r),
                  i = yield e.signer.sendTransaction(n);
                return v(e, i), i;
              });
            };
      }
      function E(e) {
        return e.address && (null == e.topics || 0 === e.topics.length)
          ? "*"
          : (e.address || "*") +
              "@" +
              (e.topics
                ? e.topics
                    .map((e) => (Array.isArray(e) ? e.join("|") : e))
                    .join(":")
                : "");
      }
      class _ {
        constructor(e, t) {
          (0, c.defineReadOnly)(this, "tag", e),
            (0, c.defineReadOnly)(this, "filter", t),
            (this._listeners = []);
        }
        addListener(e, t) {
          this._listeners.push({ listener: e, once: t });
        }
        removeListener(e) {
          let t = !1;
          this._listeners = this._listeners.filter(
            (r) => !!t || r.listener !== e || ((t = !0), !1)
          );
        }
        removeAllListeners() {
          this._listeners = [];
        }
        listeners() {
          return this._listeners.map((e) => e.listener);
        }
        listenerCount() {
          return this._listeners.length;
        }
        run(e) {
          let t = this.listenerCount();
          return (
            (this._listeners = this._listeners.filter((t) => {
              let r = e.slice();
              return (
                setTimeout(() => {
                  t.listener.apply(this, r);
                }, 0),
                !t.once
              );
            })),
            t
          );
        }
        prepareEvent(e) {}
        getEmit(e) {
          return [e];
        }
      }
      class A extends _ {
        constructor() {
          super("error", null);
        }
      }
      class P extends _ {
        constructor(e, t, r, n) {
          let i = { address: e },
            s = t.getEventTopic(r);
          n
            ? (s !== n[0] &&
                p.throwArgumentError("topic mismatch", "topics", n),
              (i.topics = n.slice()))
            : (i.topics = [s]),
            super(E(i), i),
            (0, c.defineReadOnly)(this, "address", e),
            (0, c.defineReadOnly)(this, "interface", t),
            (0, c.defineReadOnly)(this, "fragment", r);
        }
        prepareEvent(e) {
          super.prepareEvent(e),
            (e.event = this.fragment.name),
            (e.eventSignature = this.fragment.format()),
            (e.decode = (e, t) =>
              this.interface.decodeEventLog(this.fragment, e, t));
          try {
            e.args = this.interface.decodeEventLog(
              this.fragment,
              e.data,
              e.topics
            );
          } catch (t) {
            (e.args = null), (e.decodeError = t);
          }
        }
        getEmit(e) {
          let t = (0, n.$v)(e.args);
          if (t.length) throw t[0].error;
          let r = (e.args || []).slice();
          return r.push(e), r;
        }
      }
      class S extends _ {
        constructor(e, t) {
          super("*", { address: e }),
            (0, c.defineReadOnly)(this, "address", e),
            (0, c.defineReadOnly)(this, "interface", t);
        }
        prepareEvent(e) {
          super.prepareEvent(e);
          try {
            let t = this.interface.parseLog(e);
            (e.event = t.name),
              (e.eventSignature = t.signature),
              (e.decode = (e, r) =>
                this.interface.decodeEventLog(t.eventFragment, e, r)),
              (e.args = t.args);
          } catch (e) {}
        }
      }
      class O {
        constructor(e, t, r) {
          (0, c.defineReadOnly)(
            this,
            "interface",
            (0, c.getStatic)(new.target, "getInterface")(t)
          ),
            null == r
              ? ((0, c.defineReadOnly)(this, "provider", null),
                (0, c.defineReadOnly)(this, "signer", null))
              : a.l.isSigner(r)
              ? ((0, c.defineReadOnly)(this, "provider", r.provider || null),
                (0, c.defineReadOnly)(this, "signer", r))
              : s.Kq.isProvider(r)
              ? ((0, c.defineReadOnly)(this, "provider", r),
                (0, c.defineReadOnly)(this, "signer", null))
              : p.throwArgumentError(
                  "invalid signer or provider",
                  "signerOrProvider",
                  r
                ),
            (0, c.defineReadOnly)(this, "callStatic", {}),
            (0, c.defineReadOnly)(this, "estimateGas", {}),
            (0, c.defineReadOnly)(this, "functions", {}),
            (0, c.defineReadOnly)(this, "populateTransaction", {}),
            (0, c.defineReadOnly)(this, "filters", {});
          {
            let e = {};
            Object.keys(this.interface.events).forEach((t) => {
              let r = this.interface.events[t];
              (0, c.defineReadOnly)(this.filters, t, (...e) => ({
                address: this.address,
                topics: this.interface.encodeFilterTopics(r, e),
              })),
                e[r.name] || (e[r.name] = []),
                e[r.name].push(t);
            }),
              Object.keys(e).forEach((t) => {
                let r = e[t];
                1 === r.length
                  ? (0, c.defineReadOnly)(this.filters, t, this.filters[r[0]])
                  : p.warn(`Duplicate definition of ${t} (${r.join(", ")})`);
              });
          }
          if (
            ((0, c.defineReadOnly)(this, "_runningEvents", {}),
            (0, c.defineReadOnly)(this, "_wrappedEmits", {}),
            null == e &&
              p.throwArgumentError(
                "invalid contract address or ENS name",
                "addressOrName",
                e
              ),
            (0, c.defineReadOnly)(this, "address", e),
            this.provider)
          )
            (0, c.defineReadOnly)(this, "resolvedAddress", m(this.provider, e));
          else
            try {
              (0, c.defineReadOnly)(
                this,
                "resolvedAddress",
                Promise.resolve((0, o.getAddress)(e))
              );
            } catch (e) {
              p.throwError(
                "provider is required to use ENS name as contract address",
                d.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "new Contract" }
              );
            }
          this.resolvedAddress.catch((e) => {});
          let n = {},
            i = {};
          Object.keys(this.interface.functions).forEach((e) => {
            var t;
            let r = this.interface.functions[e];
            if (i[e])
              return void p.warn(
                `Duplicate ABI entry for ${JSON.stringify(e)}`
              );
            i[e] = !0;
            {
              let t = r.name;
              n[`%${t}`] || (n[`%${t}`] = []), n[`%${t}`].push(e);
            }
            null == this[e] && (0, c.defineReadOnly)(this, e, w(this, r, !0)),
              null == this.functions[e] &&
                (0, c.defineReadOnly)(this.functions, e, w(this, r, !1)),
              null == this.callStatic[e] &&
                (0, c.defineReadOnly)(this.callStatic, e, x(this, r, !0)),
              null == this.populateTransaction[e] &&
                (0, c.defineReadOnly)(
                  this.populateTransaction,
                  e,
                  ((t = this),
                  function (...e) {
                    return b(t, r, e);
                  })
                ),
              null == this.estimateGas[e] &&
                (0, c.defineReadOnly)(
                  this.estimateGas,
                  e,
                  (function (e, t) {
                    let r = e.signer || e.provider;
                    return function (...n) {
                      return l(this, void 0, void 0, function* () {
                        r ||
                          p.throwError(
                            "estimate require a provider or signer",
                            d.Logger.errors.UNSUPPORTED_OPERATION,
                            { operation: "estimateGas" }
                          );
                        let i = yield b(e, t, n);
                        return yield r.estimateGas(i);
                      });
                    };
                  })(this, r)
                );
          }),
            Object.keys(n).forEach((e) => {
              let t = n[e];
              if (t.length > 1) return;
              e = e.substring(1);
              let r = t[0];
              try {
                null == this[e] && (0, c.defineReadOnly)(this, e, this[r]);
              } catch (e) {}
              null == this.functions[e] &&
                (0, c.defineReadOnly)(this.functions, e, this.functions[r]),
                null == this.callStatic[e] &&
                  (0, c.defineReadOnly)(this.callStatic, e, this.callStatic[r]),
                null == this.populateTransaction[e] &&
                  (0, c.defineReadOnly)(
                    this.populateTransaction,
                    e,
                    this.populateTransaction[r]
                  ),
                null == this.estimateGas[e] &&
                  (0, c.defineReadOnly)(
                    this.estimateGas,
                    e,
                    this.estimateGas[r]
                  );
            });
        }
        static getContractAddress(e) {
          return (0, o.getContractAddress)(e);
        }
        static getInterface(e) {
          return i.KA.isInterface(e) ? e : new i.KA(e);
        }
        deployed() {
          return this._deployed();
        }
        _deployed(e) {
          return (
            this._deployedPromise ||
              (this.deployTransaction
                ? (this._deployedPromise = this.deployTransaction
                    .wait()
                    .then(() => this))
                : (this._deployedPromise = this.provider
                    .getCode(this.address, e)
                    .then(
                      (e) => (
                        "0x" === e &&
                          p.throwError(
                            "contract not deployed",
                            d.Logger.errors.UNSUPPORTED_OPERATION,
                            {
                              contractAddress: this.address,
                              operation: "getDeployed",
                            }
                          ),
                        this
                      )
                    ))),
            this._deployedPromise
          );
        }
        fallback(e) {
          this.signer ||
            p.throwError(
              "sending a transactions require a signer",
              d.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "sendTransaction(fallback)" }
            );
          let t = (0, c.shallowCopy)(e || {});
          return (
            ["from", "to"].forEach(function (e) {
              null != t[e] &&
                p.throwError(
                  "cannot override " + e,
                  d.Logger.errors.UNSUPPORTED_OPERATION,
                  { operation: e }
                );
            }),
            (t.to = this.resolvedAddress),
            this.deployed().then(() => this.signer.sendTransaction(t))
          );
        }
        connect(e) {
          "string" == typeof e && (e = new a.J(e, this.provider));
          let t = new this.constructor(this.address, this.interface, e);
          return (
            this.deployTransaction &&
              (0, c.defineReadOnly)(
                t,
                "deployTransaction",
                this.deployTransaction
              ),
            t
          );
        }
        attach(e) {
          return new this.constructor(
            e,
            this.interface,
            this.signer || this.provider
          );
        }
        static isIndexed(e) {
          return i.wu.isIndexed(e);
        }
        _normalizeRunningEvent(e) {
          return this._runningEvents[e.tag] ? this._runningEvents[e.tag] : e;
        }
        _getRunningEvent(e) {
          if ("string" == typeof e) {
            if ("error" === e) return this._normalizeRunningEvent(new A());
            if ("event" === e)
              return this._normalizeRunningEvent(new _("event", null));
            if ("*" === e)
              return this._normalizeRunningEvent(
                new S(this.address, this.interface)
              );
            let t = this.interface.getEvent(e);
            return this._normalizeRunningEvent(
              new P(this.address, this.interface, t)
            );
          }
          if (e.topics && e.topics.length > 0) {
            try {
              let t = e.topics[0];
              if ("string" != typeof t) throw Error("invalid topic");
              let r = this.interface.getEvent(t);
              return this._normalizeRunningEvent(
                new P(this.address, this.interface, r, e.topics)
              );
            } catch (e) {}
            let t = { address: this.address, topics: e.topics };
            return this._normalizeRunningEvent(new _(E(t), t));
          }
          return this._normalizeRunningEvent(
            new S(this.address, this.interface)
          );
        }
        _checkRunningEvents(e) {
          if (0 === e.listenerCount()) {
            delete this._runningEvents[e.tag];
            let t = this._wrappedEmits[e.tag];
            t &&
              e.filter &&
              (this.provider.off(e.filter, t),
              delete this._wrappedEmits[e.tag]);
          }
        }
        _wrapEvent(e, t, r) {
          let n = (0, c.deepCopy)(t);
          return (
            (n.removeListener = () => {
              r && (e.removeListener(r), this._checkRunningEvents(e));
            }),
            (n.getBlock = () => this.provider.getBlock(t.blockHash)),
            (n.getTransaction = () =>
              this.provider.getTransaction(t.transactionHash)),
            (n.getTransactionReceipt = () =>
              this.provider.getTransactionReceipt(t.transactionHash)),
            e.prepareEvent(n),
            n
          );
        }
        _addEventListener(e, t, r) {
          if (
            (this.provider ||
              p.throwError(
                "events require a provider or a signer with a provider",
                d.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "once" }
              ),
            e.addListener(t, r),
            (this._runningEvents[e.tag] = e),
            !this._wrappedEmits[e.tag])
          ) {
            let r = (r) => {
              let n = this._wrapEvent(e, r, t);
              if (null == n.decodeError)
                try {
                  let t = e.getEmit(n);
                  this.emit(e.filter, ...t);
                } catch (e) {
                  n.decodeError = e.error;
                }
              null != e.filter && this.emit("event", n),
                null != n.decodeError && this.emit("error", n.decodeError, n);
            };
            (this._wrappedEmits[e.tag] = r),
              null != e.filter && this.provider.on(e.filter, r);
          }
        }
        queryFilter(e, t, r) {
          let n = this._getRunningEvent(e),
            i = (0, c.shallowCopy)(n.filter);
          return (
            "string" == typeof t && (0, u.isHexString)(t, 32)
              ? (null != r &&
                  p.throwArgumentError(
                    "cannot specify toBlock with blockhash",
                    "toBlock",
                    r
                  ),
                (i.blockHash = t))
              : ((i.fromBlock = null != t ? t : 0),
                (i.toBlock = null != r ? r : "latest")),
            this.provider
              .getLogs(i)
              .then((e) => e.map((e) => this._wrapEvent(n, e, null)))
          );
        }
        on(e, t) {
          return this._addEventListener(this._getRunningEvent(e), t, !1), this;
        }
        once(e, t) {
          return this._addEventListener(this._getRunningEvent(e), t, !0), this;
        }
        emit(e, ...t) {
          if (!this.provider) return !1;
          let r = this._getRunningEvent(e),
            n = r.run(t) > 0;
          return this._checkRunningEvents(r), n;
        }
        listenerCount(e) {
          return this.provider
            ? null == e
              ? Object.keys(this._runningEvents).reduce(
                  (e, t) => e + this._runningEvents[t].listenerCount(),
                  0
                )
              : this._getRunningEvent(e).listenerCount()
            : 0;
        }
        listeners(e) {
          if (!this.provider) return [];
          if (null == e) {
            let e = [];
            for (let t in this._runningEvents)
              this._runningEvents[t].listeners().forEach((t) => {
                e.push(t);
              });
            return e;
          }
          return this._getRunningEvent(e).listeners();
        }
        removeAllListeners(e) {
          if (!this.provider) return this;
          if (null == e) {
            for (let e in this._runningEvents) {
              let t = this._runningEvents[e];
              t.removeAllListeners(), this._checkRunningEvents(t);
            }
            return this;
          }
          let t = this._getRunningEvent(e);
          return t.removeAllListeners(), this._checkRunningEvents(t), this;
        }
        off(e, t) {
          if (!this.provider) return this;
          let r = this._getRunningEvent(e);
          return r.removeListener(t), this._checkRunningEvents(r), this;
        }
        removeListener(e, t) {
          return this.off(e, t);
        }
      }
      class I extends O {}
      class R {
        constructor(e, t, r) {
          let n = null;
          "0x" !==
            (n =
              "string" == typeof t
                ? t
                : (0, u.isBytes)(t)
                ? (0, u.hexlify)(t)
                : t && "string" == typeof t.object
                ? t.object
                : "!").substring(0, 2) && (n = "0x" + n),
            (!(0, u.isHexString)(n) || n.length % 2) &&
              p.throwArgumentError("invalid bytecode", "bytecode", t),
            r &&
              !a.l.isSigner(r) &&
              p.throwArgumentError("invalid signer", "signer", r),
            (0, c.defineReadOnly)(this, "bytecode", n),
            (0, c.defineReadOnly)(
              this,
              "interface",
              (0, c.getStatic)(new.target, "getInterface")(e)
            ),
            (0, c.defineReadOnly)(this, "signer", r || null);
        }
        getDeployTransaction(...e) {
          let t = {};
          if (
            e.length === this.interface.deploy.inputs.length + 1 &&
            "object" == typeof e[e.length - 1]
          ) {
            for (let r in (t = (0, c.shallowCopy)(e.pop())))
              if (!g[r]) throw Error("unknown transaction override " + r);
          }
          return (
            ["data", "from", "to"].forEach((e) => {
              null != t[e] &&
                p.throwError(
                  "cannot override " + e,
                  d.Logger.errors.UNSUPPORTED_OPERATION,
                  { operation: e }
                );
            }),
            t.value &&
              (f.gH.from(t.value).isZero() ||
                this.interface.deploy.payable ||
                p.throwError(
                  "non-payable constructor cannot override value",
                  d.Logger.errors.UNSUPPORTED_OPERATION,
                  { operation: "overrides.value", value: t.value }
                )),
            p.checkArgumentCount(
              e.length,
              this.interface.deploy.inputs.length,
              " in Contract constructor"
            ),
            (t.data = (0, u.hexlify)(
              (0, u.concat)([this.bytecode, this.interface.encodeDeploy(e)])
            )),
            t
          );
        }
        deploy(...e) {
          return l(this, void 0, void 0, function* () {
            let t = {};
            e.length === this.interface.deploy.inputs.length + 1 &&
              (t = e.pop()),
              p.checkArgumentCount(
                e.length,
                this.interface.deploy.inputs.length,
                " in Contract constructor"
              );
            let r = yield y(this.signer, e, this.interface.deploy.inputs);
            r.push(t);
            let n = this.getDeployTransaction(...r),
              i = yield this.signer.sendTransaction(n),
              s = (0, c.getStatic)(this.constructor, "getContractAddress")(i),
              a = (0, c.getStatic)(this.constructor, "getContract")(
                s,
                this.interface,
                this.signer
              );
            return v(a, i), (0, c.defineReadOnly)(a, "deployTransaction", i), a;
          });
        }
        attach(e) {
          return this.constructor.getContract(e, this.interface, this.signer);
        }
        connect(e) {
          return new this.constructor(this.interface, this.bytecode, e);
        }
        static fromSolidity(e, t) {
          null == e &&
            p.throwError(
              "missing compiler output",
              d.Logger.errors.MISSING_ARGUMENT,
              { argument: "compilerOutput" }
            ),
            "string" == typeof e && (e = JSON.parse(e));
          let r = e.abi,
            n = null;
          return (
            e.bytecode
              ? (n = e.bytecode)
              : e.evm && e.evm.bytecode && (n = e.evm.bytecode),
            new this(r, n, t)
          );
        }
        static getInterface(e) {
          return I.getInterface(e);
        }
        static getContractAddress(e) {
          return (0, o.getContractAddress)(e);
        }
        static getContract(e, t, r) {
          return new I(e, t, r);
        }
      }
    },
    13656: (e, t, r) => {
      "use strict";
      var n = r(42539).rotr32;
      function i(e, t, r) {
        return (e & t) ^ (e & r) ^ (t & r);
      }
      (t.ft_1 = function (e, t, r, n) {
        var s;
        return 0 === e
          ? ((s = t) & r) ^ (~s & n)
          : 1 === e || 3 === e
          ? t ^ r ^ n
          : 2 === e
          ? i(t, r, n)
          : void 0;
      }),
        (t.ch32 = function (e, t, r) {
          return (e & t) ^ (~e & r);
        }),
        (t.maj32 = i),
        (t.p32 = function (e, t, r) {
          return e ^ t ^ r;
        }),
        (t.s0_256 = function (e) {
          return n(e, 2) ^ n(e, 13) ^ n(e, 22);
        }),
        (t.s1_256 = function (e) {
          return n(e, 6) ^ n(e, 11) ^ n(e, 25);
        }),
        (t.g0_256 = function (e) {
          return n(e, 7) ^ n(e, 18) ^ (e >>> 3);
        }),
        (t.g1_256 = function (e) {
          return n(e, 17) ^ n(e, 19) ^ (e >>> 10);
        });
    },
    16260: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => N, D: () => k });
      var n = r(45849),
        i = r(49435),
        s = r(83928),
        a = r(25633),
        o = r(37371),
        f = r(68652);
      class u extends o.Ue {
        constructor(e) {
          super("address", "address", e, !1);
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000";
        }
        encode(e, t) {
          try {
            t = (0, f.getAddress)(t);
          } catch (e) {
            this._throwError(e.message, t);
          }
          return e.writeValue(t);
        }
        decode(e) {
          return (0, f.getAddress)(
            (0, n.hexZeroPad)(e.readValue().toHexString(), 20)
          );
        }
      }
      class c extends o.Ue {
        constructor(e) {
          super(e.name, e.type, void 0, e.dynamic), (this.coder = e);
        }
        defaultValue() {
          return this.coder.defaultValue();
        }
        encode(e, t) {
          return this.coder.encode(e, t);
        }
        decode(e) {
          return this.coder.decode(e);
        }
      }
      let h = new s.Logger(a.r);
      function d(e, t, r) {
        let n = null;
        if (Array.isArray(r)) n = r;
        else if (r && "object" == typeof r) {
          let e = {};
          n = t.map((t) => {
            let n = t.localName;
            return (
              n ||
                h.throwError(
                  "cannot encode object for signature with missing names",
                  s.Logger.errors.INVALID_ARGUMENT,
                  { argument: "values", coder: t, value: r }
                ),
              e[n] &&
                h.throwError(
                  "cannot encode object for signature with duplicate names",
                  s.Logger.errors.INVALID_ARGUMENT,
                  { argument: "values", coder: t, value: r }
                ),
              (e[n] = !0),
              r[n]
            );
          });
        } else h.throwArgumentError("invalid tuple value", "tuple", r);
        t.length !== n.length &&
          h.throwArgumentError("types/value length mismatch", "tuple", r);
        let i = new o.AU(e.wordSize),
          a = new o.AU(e.wordSize),
          f = [];
        t.forEach((e, t) => {
          let r = n[t];
          if (e.dynamic) {
            let t = a.length;
            e.encode(a, r);
            let n = i.writeUpdatableValue();
            f.push((e) => {
              n(e + t);
            });
          } else e.encode(i, r);
        }),
          f.forEach((e) => {
            e(i.length);
          });
        let u = e.appendWriter(i);
        return u + e.appendWriter(a);
      }
      function l(e, t) {
        let r = [],
          n = e.subReader(0);
        t.forEach((t) => {
          let i = null;
          if (t.dynamic) {
            let r = e.readValue(),
              a = n.subReader(r.toNumber());
            try {
              i = t.decode(a);
            } catch (e) {
              if (e.code === s.Logger.errors.BUFFER_OVERRUN) throw e;
              ((i = e).baseType = t.name),
                (i.name = t.localName),
                (i.type = t.type);
            }
          } else
            try {
              i = t.decode(e);
            } catch (e) {
              if (e.code === s.Logger.errors.BUFFER_OVERRUN) throw e;
              ((i = e).baseType = t.name),
                (i.name = t.localName),
                (i.type = t.type);
            }
          void 0 != i && r.push(i);
        });
        let i = t.reduce((e, t) => {
          let r = t.localName;
          return r && (e[r] || (e[r] = 0), e[r]++), e;
        }, {});
        t.forEach((e, t) => {
          let n = e.localName;
          if (
            !n ||
            1 !== i[n] ||
            ("length" === n && (n = "_length"), null != r[n])
          )
            return;
          let s = r[t];
          s instanceof Error
            ? Object.defineProperty(r, n, {
                enumerable: !0,
                get: () => {
                  throw s;
                },
              })
            : (r[n] = s);
        });
        for (let e = 0; e < r.length; e++) {
          let t = r[e];
          t instanceof Error &&
            Object.defineProperty(r, e, {
              enumerable: !0,
              get: () => {
                throw t;
              },
            });
        }
        return Object.freeze(r);
      }
      class p extends o.Ue {
        constructor(e, t, r) {
          super(
            "array",
            e.type + "[" + (t >= 0 ? t : "") + "]",
            r,
            -1 === t || e.dynamic
          ),
            (this.coder = e),
            (this.length = t);
        }
        defaultValue() {
          let e = this.coder.defaultValue(),
            t = [];
          for (let r = 0; r < this.length; r++) t.push(e);
          return t;
        }
        encode(e, t) {
          Array.isArray(t) || this._throwError("expected array value", t);
          let r = this.length;
          -1 === r && ((r = t.length), e.writeValue(t.length)),
            h.checkArgumentCount(
              t.length,
              r,
              "coder array" + (this.localName ? " " + this.localName : "")
            );
          let n = [];
          for (let e = 0; e < t.length; e++) n.push(this.coder);
          return d(e, n, t);
        }
        decode(e) {
          let t = this.length;
          -1 === t &&
            32 * (t = e.readValue().toNumber()) > e._data.length &&
            h.throwError(
              "insufficient data length",
              s.Logger.errors.BUFFER_OVERRUN,
              { length: e._data.length, count: t }
            );
          let r = [];
          for (let e = 0; e < t; e++) r.push(new c(this.coder));
          return e.coerce(this.name, l(e, r));
        }
      }
      class g extends o.Ue {
        constructor(e) {
          super("bool", "bool", e, !1);
        }
        defaultValue() {
          return !1;
        }
        encode(e, t) {
          return e.writeValue(+!!t);
        }
        decode(e) {
          return e.coerce(this.type, !e.readValue().isZero());
        }
      }
      class m extends o.Ue {
        constructor(e, t) {
          super(e, e, t, !0);
        }
        defaultValue() {
          return "0x";
        }
        encode(e, t) {
          t = (0, n.arrayify)(t);
          let r = e.writeValue(t.length);
          return r + e.writeBytes(t);
        }
        decode(e) {
          return e.readBytes(e.readValue().toNumber(), !0);
        }
      }
      class y extends m {
        constructor(e) {
          super("bytes", e);
        }
        decode(e) {
          return e.coerce(this.name, (0, n.hexlify)(super.decode(e)));
        }
      }
      class b extends o.Ue {
        constructor(e, t) {
          let r = "bytes" + String(e);
          super(r, r, t, !1), (this.size = e);
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(
            0,
            2 + 2 * this.size
          );
        }
        encode(e, t) {
          let r = (0, n.arrayify)(t);
          return (
            r.length !== this.size &&
              this._throwError("incorrect data length", t),
            e.writeBytes(r)
          );
        }
        decode(e) {
          return e.coerce(this.name, (0, n.hexlify)(e.readBytes(this.size)));
        }
      }
      class v extends o.Ue {
        constructor(e) {
          super("null", "", e, !1);
        }
        defaultValue() {
          return null;
        }
        encode(e, t) {
          return null != t && this._throwError("not null", t), e.writeBytes([]);
        }
        decode(e) {
          return e.readBytes(0), e.coerce(this.name, null);
        }
      }
      var x = r(84784),
        w = r(27043);
      class E extends o.Ue {
        constructor(e, t, r) {
          let n = (t ? "int" : "uint") + 8 * e;
          super(n, n, r, !1), (this.size = e), (this.signed = t);
        }
        defaultValue() {
          return 0;
        }
        encode(e, t) {
          let r = x.gH.from(t),
            n = w.Is.mask(8 * e.wordSize);
          if (this.signed) {
            let e = n.mask(8 * this.size - 1);
            (r.gt(e) || r.lt(e.add(w.pD).mul(w.eR))) &&
              this._throwError("value out-of-bounds", t);
          } else
            (r.lt(w.XK) || r.gt(n.mask(8 * this.size))) &&
              this._throwError("value out-of-bounds", t);
          return (
            (r = r.toTwos(8 * this.size).mask(8 * this.size)),
            this.signed &&
              (r = r.fromTwos(8 * this.size).toTwos(8 * e.wordSize)),
            e.writeValue(r)
          );
        }
        decode(e) {
          let t = e.readValue().mask(8 * this.size);
          return (
            this.signed && (t = t.fromTwos(8 * this.size)),
            e.coerce(this.name, t)
          );
        }
      }
      var _ = r(193);
      class A extends m {
        constructor(e) {
          super("string", e);
        }
        defaultValue() {
          return "";
        }
        encode(e, t) {
          return super.encode(e, (0, _.YW)(t));
        }
        decode(e) {
          return (0, _._v)(super.decode(e));
        }
      }
      class P extends o.Ue {
        constructor(e, t) {
          let r = !1,
            n = [];
          e.forEach((e) => {
            e.dynamic && (r = !0), n.push(e.type);
          }),
            super("tuple", "tuple(" + n.join(",") + ")", t, r),
            (this.coders = e);
        }
        defaultValue() {
          let e = [];
          this.coders.forEach((t) => {
            e.push(t.defaultValue());
          });
          let t = this.coders.reduce((e, t) => {
            let r = t.localName;
            return r && (e[r] || (e[r] = 0), e[r]++), e;
          }, {});
          return (
            this.coders.forEach((r, n) => {
              let i = r.localName;
              i &&
                1 === t[i] &&
                ("length" === i && (i = "_length"),
                null == e[i] && (e[i] = e[n]));
            }),
            Object.freeze(e)
          );
        }
        encode(e, t) {
          return d(e, this.coders, t);
        }
        decode(e) {
          return e.coerce(this.name, l(e, this.coders));
        }
      }
      var S = r(48071);
      let O = new s.Logger(a.r),
        I = new RegExp(/^bytes([0-9]*)$/),
        R = new RegExp(/^(u?int)([0-9]*)$/);
      class N {
        constructor(e) {
          (0, i.defineReadOnly)(this, "coerceFunc", e || null);
        }
        _getCoder(e) {
          switch (e.baseType) {
            case "address":
              return new u(e.name);
            case "bool":
              return new g(e.name);
            case "string":
              return new A(e.name);
            case "bytes":
              return new y(e.name);
            case "array":
              return new p(
                this._getCoder(e.arrayChildren),
                e.arrayLength,
                e.name
              );
            case "tuple":
              return new P(
                (e.components || []).map((e) => this._getCoder(e)),
                e.name
              );
            case "":
              return new v(e.name);
          }
          let t = e.type.match(R);
          if (t) {
            let r = parseInt(t[2] || "256");
            return (
              (0 === r || r > 256 || r % 8 != 0) &&
                O.throwArgumentError(
                  "invalid " + t[1] + " bit length",
                  "param",
                  e
                ),
              new E(r / 8, "int" === t[1], e.name)
            );
          }
          if ((t = e.type.match(I))) {
            let r = parseInt(t[1]);
            return (
              (0 === r || r > 32) &&
                O.throwArgumentError("invalid bytes length", "param", e),
              new b(r, e.name)
            );
          }
          return O.throwArgumentError("invalid type", "type", e.type);
        }
        _getWordSize() {
          return 32;
        }
        _getReader(e, t) {
          return new o.mP(e, this._getWordSize(), this.coerceFunc, t);
        }
        _getWriter() {
          return new o.AU(this._getWordSize());
        }
        getDefaultValue(e) {
          return new P(
            e.map((e) => this._getCoder(S.aX.from(e))),
            "_"
          ).defaultValue();
        }
        encode(e, t) {
          e.length !== t.length &&
            O.throwError(
              "types/values length mismatch",
              s.Logger.errors.INVALID_ARGUMENT,
              {
                count: { types: e.length, values: t.length },
                value: { types: e, values: t },
              }
            );
          let r = new P(
              e.map((e) => this._getCoder(S.aX.from(e))),
              "_"
            ),
            n = this._getWriter();
          return r.encode(n, t), n.data;
        }
        decode(e, t, r) {
          return new P(
            e.map((e) => this._getCoder(S.aX.from(e))),
            "_"
          ).decode(this._getReader((0, n.arrayify)(t), r));
        }
      }
      let k = new N();
    },
    21574: (e, t, r) => {
      "use strict";
      var n = r(42539),
        i = r(68711),
        s = r(13656),
        a = r(23124),
        o = n.sum32,
        f = n.sum32_4,
        u = n.sum32_5,
        c = s.ch32,
        h = s.maj32,
        d = s.s0_256,
        l = s.s1_256,
        p = s.g0_256,
        g = s.g1_256,
        m = i.BlockHash,
        y = [
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
        ];
      function b() {
        if (!(this instanceof b)) return new b();
        m.call(this),
          (this.h = [
            0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
            0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
          ]),
          (this.k = y),
          (this.W = Array(64));
      }
      n.inherits(b, m),
        (e.exports = b),
        (b.blockSize = 512),
        (b.outSize = 256),
        (b.hmacStrength = 192),
        (b.padLength = 64),
        (b.prototype._update = function (e, t) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
          for (; n < r.length; n++)
            r[n] = f(g(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
          var i = this.h[0],
            s = this.h[1],
            m = this.h[2],
            y = this.h[3],
            b = this.h[4],
            v = this.h[5],
            x = this.h[6],
            w = this.h[7];
          for (a(this.k.length === r.length), n = 0; n < r.length; n++) {
            var E = u(w, l(b), c(b, v, x), this.k[n], r[n]),
              _ = o(d(i), h(i, s, m));
            (w = x),
              (x = v),
              (v = b),
              (b = o(y, E)),
              (y = m),
              (m = s),
              (s = i),
              (i = o(E, _));
          }
          (this.h[0] = o(this.h[0], i)),
            (this.h[1] = o(this.h[1], s)),
            (this.h[2] = o(this.h[2], m)),
            (this.h[3] = o(this.h[3], y)),
            (this.h[4] = o(this.h[4], b)),
            (this.h[5] = o(this.h[5], v)),
            (this.h[6] = o(this.h[6], x)),
            (this.h[7] = o(this.h[7], w));
        }),
        (b.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    23124: (e) => {
      function t(e, t) {
        if (!e) throw Error(t || "Assertion failed");
      }
      (e.exports = t),
        (t.equal = function (e, t, r) {
          if (e != t) throw Error(r || "Assertion failed: " + e + " != " + t);
        });
    },
    25633: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => n });
      let n = "abi/5.8.0";
    },
    27043: (e, t, r) => {
      "use strict";
      r.d(t, { Is: () => o, XK: () => s, eR: () => i, pD: () => a });
      var n = r(84784);
      let i = n.gH.from(-1),
        s = n.gH.from(0),
        a = n.gH.from(1),
        o = n.gH.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
    },
    37371: (e, t, r) => {
      "use strict";
      r.d(t, { $v: () => u, AU: () => h, Ue: () => c, mP: () => d });
      var n = r(45849),
        i = r(84784),
        s = r(49435),
        a = r(83928),
        o = r(25633);
      let f = new a.Logger(o.r);
      function u(e) {
        let t = [],
          r = function (e, n) {
            if (Array.isArray(n))
              for (let i in n) {
                let s = e.slice();
                s.push(i);
                try {
                  r(s, n[i]);
                } catch (e) {
                  t.push({ path: s, error: e });
                }
              }
          };
        return r([], e), t;
      }
      class c {
        constructor(e, t, r, n) {
          (this.name = e),
            (this.type = t),
            (this.localName = r),
            (this.dynamic = n);
        }
        _throwError(e, t) {
          f.throwArgumentError(e, this.localName, t);
        }
      }
      class h {
        constructor(e) {
          (0, s.defineReadOnly)(this, "wordSize", e || 32),
            (this._data = []),
            (this._dataLength = 0),
            (this._padding = new Uint8Array(e));
        }
        get data() {
          return (0, n.hexConcat)(this._data);
        }
        get length() {
          return this._dataLength;
        }
        _writeData(e) {
          return this._data.push(e), (this._dataLength += e.length), e.length;
        }
        appendWriter(e) {
          return this._writeData((0, n.concat)(e._data));
        }
        writeBytes(e) {
          let t = (0, n.arrayify)(e),
            r = t.length % this.wordSize;
          return (
            r && (t = (0, n.concat)([t, this._padding.slice(r)])),
            this._writeData(t)
          );
        }
        _getValue(e) {
          let t = (0, n.arrayify)(i.gH.from(e));
          return (
            t.length > this.wordSize &&
              f.throwError(
                "value out-of-bounds",
                a.Logger.errors.BUFFER_OVERRUN,
                { length: this.wordSize, offset: t.length }
              ),
            t.length % this.wordSize &&
              (t = (0, n.concat)([
                this._padding.slice(t.length % this.wordSize),
                t,
              ])),
            t
          );
        }
        writeValue(e) {
          return this._writeData(this._getValue(e));
        }
        writeUpdatableValue() {
          let e = this._data.length;
          return (
            this._data.push(this._padding),
            (this._dataLength += this.wordSize),
            (t) => {
              this._data[e] = this._getValue(t);
            }
          );
        }
      }
      class d {
        constructor(e, t, r, i) {
          (0, s.defineReadOnly)(this, "_data", (0, n.arrayify)(e)),
            (0, s.defineReadOnly)(this, "wordSize", t || 32),
            (0, s.defineReadOnly)(this, "_coerceFunc", r),
            (0, s.defineReadOnly)(this, "allowLoose", i),
            (this._offset = 0);
        }
        get data() {
          return (0, n.hexlify)(this._data);
        }
        get consumed() {
          return this._offset;
        }
        static coerce(e, t) {
          let r = e.match("^u?int([0-9]+)$");
          return r && 48 >= parseInt(r[1]) && (t = t.toNumber()), t;
        }
        coerce(e, t) {
          return this._coerceFunc ? this._coerceFunc(e, t) : d.coerce(e, t);
        }
        _peekBytes(e, t, r) {
          let n = Math.ceil(t / this.wordSize) * this.wordSize;
          return (
            this._offset + n > this._data.length &&
              (this.allowLoose && r && this._offset + t <= this._data.length
                ? (n = t)
                : f.throwError(
                    "data out-of-bounds",
                    a.Logger.errors.BUFFER_OVERRUN,
                    { length: this._data.length, offset: this._offset + n }
                  )),
            this._data.slice(this._offset, this._offset + n)
          );
        }
        subReader(e) {
          return new d(
            this._data.slice(this._offset + e),
            this.wordSize,
            this._coerceFunc,
            this.allowLoose
          );
        }
        readBytes(e, t) {
          let r = this._peekBytes(0, e, !!t);
          return (this._offset += r.length), r.slice(0, e);
        }
        readValue() {
          return i.gH.from(this.readBytes(this.wordSize));
        }
      }
    },
    42539: (e, t, r) => {
      "use strict";
      var n = r(23124);
      function i(e) {
        return (
          ((e >>> 24) |
            ((e >>> 8) & 65280) |
            ((e << 8) & 0xff0000) |
            ((255 & e) << 24)) >>>
          0
        );
      }
      function s(e) {
        return 1 === e.length ? "0" + e : e;
      }
      function a(e) {
        if (7 === e.length) return "0" + e;
        if (6 === e.length) return "00" + e;
        if (5 === e.length) return "000" + e;
        if (4 === e.length) return "0000" + e;
        if (3 === e.length) return "00000" + e;
        else if (2 === e.length) return "000000" + e;
        else if (1 === e.length) return "0000000" + e;
        else return e;
      }
      (t.inherits = r(84115)),
        (t.toArray = function (e, t) {
          if (Array.isArray(e)) return e.slice();
          if (!e) return [];
          var r = [];
          if ("string" == typeof e)
            if (t) {
              if ("hex" === t)
                for (
                  (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                    (e = "0" + e),
                    i = 0;
                  i < e.length;
                  i += 2
                )
                  r.push(parseInt(e[i] + e[i + 1], 16));
            } else
              for (var n = 0, i = 0; i < e.length; i++) {
                var s,
                  a,
                  o = e.charCodeAt(i);
                o < 128
                  ? (r[n++] = o)
                  : (o < 2048
                      ? (r[n++] = (o >> 6) | 192)
                      : (((s = e),
                        (a = i),
                        (64512 & s.charCodeAt(a)) != 55296 ||
                        a < 0 ||
                        a + 1 >= s.length
                          ? 1
                          : (64512 & s.charCodeAt(a + 1)) != 56320)
                          ? (r[n++] = (o >> 12) | 224)
                          : ((o =
                              65536 +
                              ((1023 & o) << 10) +
                              (1023 & e.charCodeAt(++i))),
                            (r[n++] = (o >> 18) | 240),
                            (r[n++] = ((o >> 12) & 63) | 128)),
                        (r[n++] = ((o >> 6) & 63) | 128)),
                    (r[n++] = (63 & o) | 128));
              }
          else for (i = 0; i < e.length; i++) r[i] = 0 | e[i];
          return r;
        }),
        (t.toHex = function (e) {
          for (var t = "", r = 0; r < e.length; r++) t += s(e[r].toString(16));
          return t;
        }),
        (t.htonl = i),
        (t.toHex32 = function (e, t) {
          for (var r = "", n = 0; n < e.length; n++) {
            var s = e[n];
            "little" === t && (s = i(s)), (r += a(s.toString(16)));
          }
          return r;
        }),
        (t.zero2 = s),
        (t.zero8 = a),
        (t.join32 = function (e, t, r, i) {
          var s,
            a = r - t;
          n(a % 4 == 0);
          for (var o = Array(a / 4), f = 0, u = t; f < o.length; f++, u += 4)
            (s =
              "big" === i
                ? (e[u] << 24) | (e[u + 1] << 16) | (e[u + 2] << 8) | e[u + 3]
                : (e[u + 3] << 24) | (e[u + 2] << 16) | (e[u + 1] << 8) | e[u]),
              (o[f] = s >>> 0);
          return o;
        }),
        (t.split32 = function (e, t) {
          for (
            var r = Array(4 * e.length), n = 0, i = 0;
            n < e.length;
            n++, i += 4
          ) {
            var s = e[n];
            "big" === t
              ? ((r[i] = s >>> 24),
                (r[i + 1] = (s >>> 16) & 255),
                (r[i + 2] = (s >>> 8) & 255),
                (r[i + 3] = 255 & s))
              : ((r[i + 3] = s >>> 24),
                (r[i + 2] = (s >>> 16) & 255),
                (r[i + 1] = (s >>> 8) & 255),
                (r[i] = 255 & s));
          }
          return r;
        }),
        (t.rotr32 = function (e, t) {
          return (e >>> t) | (e << (32 - t));
        }),
        (t.rotl32 = function (e, t) {
          return (e << t) | (e >>> (32 - t));
        }),
        (t.sum32 = function (e, t) {
          return (e + t) >>> 0;
        }),
        (t.sum32_3 = function (e, t, r) {
          return (e + t + r) >>> 0;
        }),
        (t.sum32_4 = function (e, t, r, n) {
          return (e + t + r + n) >>> 0;
        }),
        (t.sum32_5 = function (e, t, r, n, i) {
          return (e + t + r + n + i) >>> 0;
        }),
        (t.sum64 = function (e, t, r, n) {
          var i = e[t],
            s = (n + e[t + 1]) >>> 0;
          (e[t] = (+(s < n) + r + i) >>> 0), (e[t + 1] = s);
        }),
        (t.sum64_hi = function (e, t, r, n) {
          return (+((t + n) >>> 0 < t) + e + r) >>> 0;
        }),
        (t.sum64_lo = function (e, t, r, n) {
          return (t + n) >>> 0;
        }),
        (t.sum64_4_hi = function (e, t, r, n, i, s, a, o) {
          var f,
            u = t;
          return (
            (e +
              r +
              i +
              a +
              (f =
                0 +
                +((u = (u + n) >>> 0) < t) +
                +((u = (u + s) >>> 0) < s) +
                +((u = (u + o) >>> 0) < o))) >>>
            0
          );
        }),
        (t.sum64_4_lo = function (e, t, r, n, i, s, a, o) {
          return (t + n + s + o) >>> 0;
        }),
        (t.sum64_5_hi = function (e, t, r, n, i, s, a, o, f, u) {
          var c,
            h = t;
          return (
            (e +
              r +
              i +
              a +
              f +
              (c =
                0 +
                +((h = (h + n) >>> 0) < t) +
                +((h = (h + s) >>> 0) < s) +
                +((h = (h + o) >>> 0) < o) +
                +((h = (h + u) >>> 0) < u))) >>>
            0
          );
        }),
        (t.sum64_5_lo = function (e, t, r, n, i, s, a, o, f, u) {
          return (t + n + s + o + u) >>> 0;
        }),
        (t.rotr64_hi = function (e, t, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        }),
        (t.rotr64_lo = function (e, t, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        }),
        (t.shr64_hi = function (e, t, r) {
          return e >>> r;
        }),
        (t.shr64_lo = function (e, t, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        });
    },
    48071: (e, t, r) => {
      "use strict";
      r.d(t, {
        $o: () => l,
        FK: () => y,
        Pw: () => E,
        Zp: () => b,
        aX: () => g,
        bp: () => P,
        hc: () => _,
      });
      var n = r(84784),
        i = r(49435),
        s = r(83928),
        a = r(25633);
      let o = new s.Logger(a.r),
        f = {},
        u = { calldata: !0, memory: !0, storage: !0 },
        c = { calldata: !0, memory: !0 };
      function h(e, t) {
        if ("bytes" === e || "string" === e) {
          if (u[t]) return !0;
        } else if ("address" === e) {
          if ("payable" === t) return !0;
        } else if ((e.indexOf("[") >= 0 || "tuple" === e) && c[t]) return !0;
        return (
          (u[t] || "payable" === t) &&
            o.throwArgumentError("invalid modifier", "name", t),
          !1
        );
      }
      function d(e, t) {
        for (let r in t) (0, i.defineReadOnly)(e, r, t[r]);
      }
      let l = Object.freeze({
          sighash: "sighash",
          minimal: "minimal",
          full: "full",
          json: "json",
        }),
        p = new RegExp(/^(.*)\[([0-9]*)\]$/);
      class g {
        constructor(e, t) {
          e !== f &&
            o.throwError(
              "use fromString",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new ParamType()" }
            ),
            d(this, t);
          let r = this.type.match(p);
          r
            ? d(this, {
                arrayLength: parseInt(r[2] || "-1"),
                arrayChildren: g.fromObject({
                  type: r[1],
                  components: this.components,
                }),
                baseType: "array",
              })
            : d(this, {
                arrayLength: null,
                arrayChildren: null,
                baseType: null != this.components ? "tuple" : this.type,
              }),
            (this._isParamType = !0),
            Object.freeze(this);
        }
        format(e) {
          if (
            (e || (e = l.sighash),
            l[e] || o.throwArgumentError("invalid format type", "format", e),
            e === l.json)
          ) {
            let t = {
              type: "tuple" === this.baseType ? "tuple" : this.type,
              name: this.name || void 0,
            };
            return (
              "boolean" == typeof this.indexed && (t.indexed = this.indexed),
              this.components &&
                (t.components = this.components.map((t) =>
                  JSON.parse(t.format(e))
                )),
              JSON.stringify(t)
            );
          }
          let t = "";
          return (
            "array" === this.baseType
              ? ((t += this.arrayChildren.format(e)),
                (t +=
                  "[" +
                  (this.arrayLength < 0 ? "" : String(this.arrayLength)) +
                  "]"))
              : "tuple" === this.baseType
              ? (e !== l.sighash && (t += this.type),
                (t +=
                  "(" +
                  this.components
                    .map((t) => t.format(e))
                    .join(e === l.full ? ", " : ",") +
                  ")"))
              : (t += this.type),
            e !== l.sighash &&
              (!0 === this.indexed && (t += " indexed"),
              e === l.full && this.name && (t += " " + this.name)),
            t
          );
        }
        static from(e, t) {
          return "string" == typeof e ? g.fromString(e, t) : g.fromObject(e);
        }
        static fromObject(e) {
          return g.isParamType(e)
            ? e
            : new g(f, {
                name: e.name || null,
                type: S(e.type),
                indexed: null == e.indexed ? null : !!e.indexed,
                components: e.components
                  ? e.components.map(g.fromObject)
                  : null,
              });
        }
        static fromString(e, t) {
          var r;
          return (
            (r = (function (e, t) {
              let r = e;
              function n(t) {
                o.throwArgumentError(
                  `unexpected character at position ${t}`,
                  "param",
                  e
                );
              }
              function i(e) {
                let r = {
                  type: "",
                  name: "",
                  parent: e,
                  state: { allowType: !0 },
                };
                return t && (r.indexed = !1), r;
              }
              e = e.replace(/\s/g, " ");
              let s = { type: "", name: "", state: { allowType: !0 } },
                a = s;
              for (let r = 0; r < e.length; r++) {
                let s = e[r];
                switch (s) {
                  case "(":
                    a.state.allowType && "" === a.type
                      ? (a.type = "tuple")
                      : a.state.allowParams || n(r),
                      (a.state.allowType = !1),
                      (a.type = S(a.type)),
                      (a.components = [i(a)]),
                      (a = a.components[0]);
                    break;
                  case ")":
                    delete a.state,
                      "indexed" === a.name &&
                        (t || n(r), (a.indexed = !0), (a.name = "")),
                      h(a.type, a.name) && (a.name = ""),
                      (a.type = S(a.type));
                    let o = a;
                    (a = a.parent) || n(r),
                      delete o.parent,
                      (a.state.allowParams = !1),
                      (a.state.allowName = !0),
                      (a.state.allowArray = !0);
                    break;
                  case ",":
                    delete a.state,
                      "indexed" === a.name &&
                        (t || n(r), (a.indexed = !0), (a.name = "")),
                      h(a.type, a.name) && (a.name = ""),
                      (a.type = S(a.type));
                    let f = i(a.parent);
                    a.parent.components.push(f), delete a.parent, (a = f);
                    break;
                  case " ":
                    a.state.allowType &&
                      "" !== a.type &&
                      ((a.type = S(a.type)),
                      delete a.state.allowType,
                      (a.state.allowName = !0),
                      (a.state.allowParams = !0)),
                      a.state.allowName &&
                        "" !== a.name &&
                        ("indexed" === a.name
                          ? (t || n(r),
                            a.indexed && n(r),
                            (a.indexed = !0),
                            (a.name = ""))
                          : h(a.type, a.name)
                          ? (a.name = "")
                          : (a.state.allowName = !1));
                    break;
                  case "[":
                    a.state.allowArray || n(r),
                      (a.type += s),
                      (a.state.allowArray = !1),
                      (a.state.allowName = !1),
                      (a.state.readArray = !0);
                    break;
                  case "]":
                    a.state.readArray || n(r),
                      (a.type += s),
                      (a.state.readArray = !1),
                      (a.state.allowArray = !0),
                      (a.state.allowName = !0);
                    break;
                  default:
                    a.state.allowType
                      ? ((a.type += s),
                        (a.state.allowParams = !0),
                        (a.state.allowArray = !0))
                      : a.state.allowName
                      ? ((a.name += s), delete a.state.allowArray)
                      : a.state.readArray
                      ? (a.type += s)
                      : n(r);
                }
              }
              return (
                a.parent && o.throwArgumentError("unexpected eof", "param", e),
                delete s.state,
                "indexed" === a.name
                  ? (t || n(r.length - 7),
                    a.indexed && n(r.length - 7),
                    (a.indexed = !0),
                    (a.name = ""))
                  : h(a.type, a.name) && (a.name = ""),
                (s.type = S(s.type)),
                s
              );
            })(e, !!t)),
            g.fromObject({
              name: r.name,
              type: r.type,
              indexed: r.indexed,
              components: r.components,
            })
          );
        }
        static isParamType(e) {
          return !!(null != e && e._isParamType);
        }
      }
      function m(e, t) {
        return (function (e) {
          e = e.trim();
          let t = [],
            r = "",
            n = 0;
          for (let i = 0; i < e.length; i++) {
            let s = e[i];
            "," === s && 0 === n
              ? (t.push(r), (r = ""))
              : ((r += s),
                "(" === s
                  ? n++
                  : ")" === s &&
                    -1 == --n &&
                    o.throwArgumentError("unbalanced parenthesis", "value", e));
          }
          return r && t.push(r), t;
        })(e).map((e) => g.fromString(e, t));
      }
      class y {
        constructor(e, t) {
          e !== f &&
            o.throwError(
              "use a static from method",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new Fragment()" }
            ),
            d(this, t),
            (this._isFragment = !0),
            Object.freeze(this);
        }
        static from(e) {
          return y.isFragment(e)
            ? e
            : "string" == typeof e
            ? y.fromString(e)
            : y.fromObject(e);
        }
        static fromObject(e) {
          if (y.isFragment(e)) return e;
          switch (e.type) {
            case "function":
              return _.fromObject(e);
            case "event":
              return b.fromObject(e);
            case "constructor":
              return E.fromObject(e);
            case "error":
              return P.fromObject(e);
            case "fallback":
            case "receive":
              return null;
          }
          return o.throwArgumentError("invalid fragment object", "value", e);
        }
        static fromString(e) {
          return "event" ===
            (e = (e = (e = e.replace(/\s/g, " "))
              .replace(/\(/g, " (")
              .replace(/\)/g, ") ")
              .replace(/\s+/g, " ")).trim()).split(" ")[0]
            ? b.fromString(e.substring(5).trim())
            : "function" === e.split(" ")[0]
            ? _.fromString(e.substring(8).trim())
            : "constructor" === e.split("(")[0].trim()
            ? E.fromString(e.trim())
            : "error" === e.split(" ")[0]
            ? P.fromString(e.substring(5).trim())
            : o.throwArgumentError("unsupported fragment", "value", e);
        }
        static isFragment(e) {
          return !!(e && e._isFragment);
        }
      }
      class b extends y {
        format(e) {
          if (
            (e || (e = l.sighash),
            l[e] || o.throwArgumentError("invalid format type", "format", e),
            e === l.json)
          )
            return JSON.stringify({
              type: "event",
              anonymous: this.anonymous,
              name: this.name,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = "";
          return (
            e !== l.sighash && (t += "event "),
            (t +=
              this.name +
              "(" +
              this.inputs
                .map((t) => t.format(e))
                .join(e === l.full ? ", " : ",") +
              ") "),
            e !== l.sighash && this.anonymous && (t += "anonymous "),
            t.trim()
          );
        }
        static from(e) {
          return "string" == typeof e ? b.fromString(e) : b.fromObject(e);
        }
        static fromObject(e) {
          return b.isEventFragment(e)
            ? e
            : ("event" !== e.type &&
                o.throwArgumentError("invalid event object", "value", e),
              new b(f, {
                name: I(e.name),
                anonymous: e.anonymous,
                inputs: e.inputs ? e.inputs.map(g.fromObject) : [],
                type: "event",
              }));
        }
        static fromString(e) {
          let t = e.match(R);
          t || o.throwArgumentError("invalid event string", "value", e);
          let r = !1;
          return (
            t[3].split(" ").forEach((e) => {
              switch (e.trim()) {
                case "anonymous":
                  r = !0;
                  break;
                case "":
                  break;
                default:
                  o.warn("unknown modifier: " + e);
              }
            }),
            b.fromObject({
              name: t[1].trim(),
              anonymous: r,
              inputs: m(t[2], !0),
              type: "event",
            })
          );
        }
        static isEventFragment(e) {
          return e && e._isFragment && "event" === e.type;
        }
      }
      function v(e, t) {
        t.gas = null;
        let r = e.split("@");
        return 1 !== r.length
          ? (r.length > 2 &&
              o.throwArgumentError(
                "invalid human-readable ABI signature",
                "value",
                e
              ),
            r[1].match(/^[0-9]+$/) ||
              o.throwArgumentError(
                "invalid human-readable ABI signature gas",
                "value",
                e
              ),
            (t.gas = n.gH.from(r[1])),
            r[0])
          : e;
      }
      function x(e, t) {
        (t.constant = !1),
          (t.payable = !1),
          (t.stateMutability = "nonpayable"),
          e.split(" ").forEach((e) => {
            switch (e.trim()) {
              case "constant":
                t.constant = !0;
                break;
              case "payable":
                (t.payable = !0), (t.stateMutability = "payable");
                break;
              case "nonpayable":
                (t.payable = !1), (t.stateMutability = "nonpayable");
                break;
              case "pure":
                (t.constant = !0), (t.stateMutability = "pure");
                break;
              case "view":
                (t.constant = !0), (t.stateMutability = "view");
                break;
              case "external":
              case "public":
              case "":
                break;
              default:
                console.log("unknown modifier: " + e);
            }
          });
      }
      function w(e) {
        let t = { constant: !1, payable: !0, stateMutability: "payable" };
        return (
          null != e.stateMutability
            ? ((t.stateMutability = e.stateMutability),
              (t.constant =
                "view" === t.stateMutability || "pure" === t.stateMutability),
              null != e.constant &&
                !!e.constant !== t.constant &&
                o.throwArgumentError(
                  "cannot have constant function with mutability " +
                    t.stateMutability,
                  "value",
                  e
                ),
              (t.payable = "payable" === t.stateMutability),
              null != e.payable &&
                !!e.payable !== t.payable &&
                o.throwArgumentError(
                  "cannot have payable function with mutability " +
                    t.stateMutability,
                  "value",
                  e
                ))
            : null != e.payable
            ? ((t.payable = !!e.payable),
              null != e.constant ||
                t.payable ||
                "constructor" === e.type ||
                o.throwArgumentError(
                  "unable to determine stateMutability",
                  "value",
                  e
                ),
              (t.constant = !!e.constant),
              t.constant
                ? (t.stateMutability = "view")
                : (t.stateMutability = t.payable ? "payable" : "nonpayable"),
              t.payable &&
                t.constant &&
                o.throwArgumentError(
                  "cannot have constant payable function",
                  "value",
                  e
                ))
            : null != e.constant
            ? ((t.constant = !!e.constant),
              (t.payable = !t.constant),
              (t.stateMutability = t.constant ? "view" : "payable"))
            : "constructor" !== e.type &&
              o.throwArgumentError(
                "unable to determine stateMutability",
                "value",
                e
              ),
          t
        );
      }
      class E extends y {
        format(e) {
          if (
            (e || (e = l.sighash),
            l[e] || o.throwArgumentError("invalid format type", "format", e),
            e === l.json)
          )
            return JSON.stringify({
              type: "constructor",
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          e === l.sighash &&
            o.throwError(
              "cannot format a constructor for sighash",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "format(sighash)" }
            );
          let t =
            "constructor(" +
            this.inputs
              .map((t) => t.format(e))
              .join(e === l.full ? ", " : ",") +
            ") ";
          return (
            this.stateMutability &&
              "nonpayable" !== this.stateMutability &&
              (t += this.stateMutability + " "),
            t.trim()
          );
        }
        static from(e) {
          return "string" == typeof e ? E.fromString(e) : E.fromObject(e);
        }
        static fromObject(e) {
          if (E.isConstructorFragment(e)) return e;
          "constructor" !== e.type &&
            o.throwArgumentError("invalid constructor object", "value", e);
          let t = w(e);
          return (
            t.constant &&
              o.throwArgumentError(
                "constructor cannot be constant",
                "value",
                e
              ),
            new E(f, {
              name: null,
              type: e.type,
              inputs: e.inputs ? e.inputs.map(g.fromObject) : [],
              payable: t.payable,
              stateMutability: t.stateMutability,
              gas: e.gas ? n.gH.from(e.gas) : null,
            })
          );
        }
        static fromString(e) {
          let t = { type: "constructor" },
            r = (e = v(e, t)).match(R);
          return (
            (r && "constructor" === r[1].trim()) ||
              o.throwArgumentError("invalid constructor string", "value", e),
            (t.inputs = m(r[2].trim(), !1)),
            x(r[3].trim(), t),
            E.fromObject(t)
          );
        }
        static isConstructorFragment(e) {
          return e && e._isFragment && "constructor" === e.type;
        }
      }
      class _ extends E {
        format(e) {
          if (
            (e || (e = l.sighash),
            l[e] || o.throwArgumentError("invalid format type", "format", e),
            e === l.json)
          )
            return JSON.stringify({
              type: "function",
              name: this.name,
              constant: this.constant,
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
              outputs: this.outputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = "";
          return (
            e !== l.sighash && (t += "function "),
            (t +=
              this.name +
              "(" +
              this.inputs
                .map((t) => t.format(e))
                .join(e === l.full ? ", " : ",") +
              ") "),
            e !== l.sighash &&
              (this.stateMutability
                ? "nonpayable" !== this.stateMutability &&
                  (t += this.stateMutability + " ")
                : this.constant && (t += "view "),
              this.outputs &&
                this.outputs.length &&
                (t +=
                  "returns (" +
                  this.outputs.map((t) => t.format(e)).join(", ") +
                  ") "),
              null != this.gas && (t += "@" + this.gas.toString() + " ")),
            t.trim()
          );
        }
        static from(e) {
          return "string" == typeof e ? _.fromString(e) : _.fromObject(e);
        }
        static fromObject(e) {
          if (_.isFunctionFragment(e)) return e;
          "function" !== e.type &&
            o.throwArgumentError("invalid function object", "value", e);
          let t = w(e);
          return new _(f, {
            type: e.type,
            name: I(e.name),
            constant: t.constant,
            inputs: e.inputs ? e.inputs.map(g.fromObject) : [],
            outputs: e.outputs ? e.outputs.map(g.fromObject) : [],
            payable: t.payable,
            stateMutability: t.stateMutability,
            gas: e.gas ? n.gH.from(e.gas) : null,
          });
        }
        static fromString(e) {
          let t = { type: "function" },
            r = (e = v(e, t)).split(" returns ");
          r.length > 2 &&
            o.throwArgumentError("invalid function string", "value", e);
          let n = r[0].match(R);
          if (
            (n ||
              o.throwArgumentError("invalid function signature", "value", e),
            (t.name = n[1].trim()),
            t.name && I(t.name),
            (t.inputs = m(n[2], !1)),
            x(n[3].trim(), t),
            r.length > 1)
          ) {
            let n = r[1].match(R);
            ("" != n[1].trim() || "" != n[3].trim()) &&
              o.throwArgumentError("unexpected tokens", "value", e),
              (t.outputs = m(n[2], !1));
          } else t.outputs = [];
          return _.fromObject(t);
        }
        static isFunctionFragment(e) {
          return e && e._isFragment && "function" === e.type;
        }
      }
      function A(e) {
        let t = e.format();
        return (
          ("Error(string)" === t || "Panic(uint256)" === t) &&
            o.throwArgumentError(
              `cannot specify user defined ${t} error`,
              "fragment",
              e
            ),
          e
        );
      }
      class P extends y {
        format(e) {
          if (
            (e || (e = l.sighash),
            l[e] || o.throwArgumentError("invalid format type", "format", e),
            e === l.json)
          )
            return JSON.stringify({
              type: "error",
              name: this.name,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = "";
          return (
            e !== l.sighash && (t += "error "),
            (t +=
              this.name +
              "(" +
              this.inputs
                .map((t) => t.format(e))
                .join(e === l.full ? ", " : ",") +
              ") ").trim()
          );
        }
        static from(e) {
          return "string" == typeof e ? P.fromString(e) : P.fromObject(e);
        }
        static fromObject(e) {
          return P.isErrorFragment(e)
            ? e
            : ("error" !== e.type &&
                o.throwArgumentError("invalid error object", "value", e),
              A(
                new P(f, {
                  type: e.type,
                  name: I(e.name),
                  inputs: e.inputs ? e.inputs.map(g.fromObject) : [],
                })
              ));
        }
        static fromString(e) {
          let t = { type: "error" },
            r = e.match(R);
          return (
            r || o.throwArgumentError("invalid error signature", "value", e),
            (t.name = r[1].trim()),
            t.name && I(t.name),
            (t.inputs = m(r[2], !1)),
            A(P.fromObject(t))
          );
        }
        static isErrorFragment(e) {
          return e && e._isFragment && "error" === e.type;
        }
      }
      function S(e) {
        return (
          e.match(/^uint($|[^1-9])/)
            ? (e = "uint256" + e.substring(4))
            : e.match(/^int($|[^1-9])/) && (e = "int256" + e.substring(3)),
          e
        );
      }
      let O = RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
      function I(e) {
        return (
          (e && e.match(O)) ||
            o.throwArgumentError(`invalid identifier "${e}"`, "value", e),
          e
        );
      }
      let R = RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
    },
    49435: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          Description: () => h,
          checkProperties: () => o,
          deepCopy: () => c,
          defineReadOnly: () => i,
          getStatic: () => s,
          resolveProperties: () => a,
          shallowCopy: () => f,
        });
      let n = new (r(83928).Logger)("properties/5.8.0");
      function i(e, t, r) {
        Object.defineProperty(e, t, { enumerable: !0, value: r, writable: !1 });
      }
      function s(e, t) {
        for (let r = 0; r < 32; r++) {
          if (e[t]) return e[t];
          if (!e.prototype || "object" != typeof e.prototype) break;
          e = Object.getPrototypeOf(e.prototype).constructor;
        }
        return null;
      }
      function a(e) {
        var t, r, n, i;
        return (
          (t = this),
          (r = void 0),
          (n = void 0),
          (i = function* () {
            let t = Object.keys(e).map((t) =>
              Promise.resolve(e[t]).then((e) => ({ key: t, value: e }))
            );
            return (yield Promise.all(t)).reduce(
              (e, t) => ((e[t.key] = t.value), e),
              {}
            );
          }),
          new (n || (n = Promise))(function (e, s) {
            function a(e) {
              try {
                f(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                f(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function f(t) {
              var r;
              t.done
                ? e(t.value)
                : ((r = t.value) instanceof n
                    ? r
                    : new n(function (e) {
                        e(r);
                      })
                  ).then(a, o);
            }
            f((i = i.apply(t, r || [])).next());
          })
        );
      }
      function o(e, t) {
        (e && "object" == typeof e) ||
          n.throwArgumentError("invalid object", "object", e),
          Object.keys(e).forEach((r) => {
            t[r] ||
              n.throwArgumentError(
                "invalid object key - " + r,
                "transaction:" + r,
                e
              );
          });
      }
      function f(e) {
        let t = {};
        for (let r in e) t[r] = e[r];
        return t;
      }
      let u = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 };
      function c(e) {
        if (
          (function e(t) {
            if (null == t || u[typeof t]) return !0;
            if (Array.isArray(t) || "object" == typeof t) {
              if (!Object.isFrozen(t)) return !1;
              let r = Object.keys(t);
              for (let n = 0; n < r.length; n++) {
                let i = null;
                try {
                  i = t[r[n]];
                } catch (e) {
                  continue;
                }
                if (!e(i)) return !1;
              }
              return !0;
            }
            return n.throwArgumentError(
              `Cannot deepCopy ${typeof t}`,
              "object",
              t
            );
          })(e)
        )
          return e;
        if (Array.isArray(e)) return Object.freeze(e.map((e) => c(e)));
        if ("object" == typeof e) {
          let t = {};
          for (let r in e) {
            let n = e[r];
            void 0 !== n && i(t, r, c(n));
          }
          return t;
        }
        return n.throwArgumentError(`Cannot deepCopy ${typeof e}`, "object", e);
      }
      class h {
        constructor(e) {
          for (let t in e) this[t] = c(e[t]);
        }
      }
    },
    61157: (e, t, r) => {
      "use strict";
      r.d(t, { l: () => u, J: () => c });
      var n = r(49435),
        i = r(83928),
        s = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, s) {
            function a(e) {
              try {
                f(n.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                f(n.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function f(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })
                  ).then(a, o);
            }
            f((n = n.apply(e, t || [])).next());
          });
        };
      let a = new i.Logger("abstract-signer/5.8.0"),
        o = [
          "accessList",
          "ccipReadEnabled",
          "chainId",
          "customData",
          "data",
          "from",
          "gasLimit",
          "gasPrice",
          "maxFeePerGas",
          "maxPriorityFeePerGas",
          "nonce",
          "to",
          "type",
          "value",
        ],
        f = [
          i.Logger.errors.INSUFFICIENT_FUNDS,
          i.Logger.errors.NONCE_EXPIRED,
          i.Logger.errors.REPLACEMENT_UNDERPRICED,
        ];
      class u {
        constructor() {
          a.checkAbstract(new.target, u),
            (0, n.defineReadOnly)(this, "_isSigner", !0);
        }
        getBalance(e) {
          return s(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getBalance"),
              yield this.provider.getBalance(this.getAddress(), e)
            );
          });
        }
        getTransactionCount(e) {
          return s(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getTransactionCount"),
              yield this.provider.getTransactionCount(this.getAddress(), e)
            );
          });
        }
        estimateGas(e) {
          return s(this, void 0, void 0, function* () {
            this._checkProvider("estimateGas");
            let t = yield (0, n.resolveProperties)(this.checkTransaction(e));
            return yield this.provider.estimateGas(t);
          });
        }
        call(e, t) {
          return s(this, void 0, void 0, function* () {
            this._checkProvider("call");
            let r = yield (0, n.resolveProperties)(this.checkTransaction(e));
            return yield this.provider.call(r, t);
          });
        }
        sendTransaction(e) {
          return s(this, void 0, void 0, function* () {
            this._checkProvider("sendTransaction");
            let t = yield this.populateTransaction(e),
              r = yield this.signTransaction(t);
            return yield this.provider.sendTransaction(r);
          });
        }
        getChainId() {
          return s(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getChainId"),
              (yield this.provider.getNetwork()).chainId
            );
          });
        }
        getGasPrice() {
          return s(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getGasPrice"),
              yield this.provider.getGasPrice()
            );
          });
        }
        getFeeData() {
          return s(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getFeeData"),
              yield this.provider.getFeeData()
            );
          });
        }
        resolveName(e) {
          return s(this, void 0, void 0, function* () {
            return (
              this._checkProvider("resolveName"),
              yield this.provider.resolveName(e)
            );
          });
        }
        checkTransaction(e) {
          for (let t in e)
            -1 === o.indexOf(t) &&
              a.throwArgumentError(
                "invalid transaction key: " + t,
                "transaction",
                e
              );
          let t = (0, n.shallowCopy)(e);
          return (
            null == t.from
              ? (t.from = this.getAddress())
              : (t.from = Promise.all([
                  Promise.resolve(t.from),
                  this.getAddress(),
                ]).then(
                  (t) => (
                    t[0].toLowerCase() !== t[1].toLowerCase() &&
                      a.throwArgumentError(
                        "from address mismatch",
                        "transaction",
                        e
                      ),
                    t[0]
                  )
                )),
            t
          );
        }
        populateTransaction(e) {
          return s(this, void 0, void 0, function* () {
            let t = yield (0, n.resolveProperties)(this.checkTransaction(e));
            null != t.to &&
              ((t.to = Promise.resolve(t.to).then((e) =>
                s(this, void 0, void 0, function* () {
                  if (null == e) return null;
                  let t = yield this.resolveName(e);
                  return (
                    null == t &&
                      a.throwArgumentError(
                        "provided ENS name resolves to null",
                        "tx.to",
                        e
                      ),
                    t
                  );
                })
              )),
              t.to.catch((e) => {}));
            let r = null != t.maxFeePerGas || null != t.maxPriorityFeePerGas;
            if (
              (null != t.gasPrice && (2 === t.type || r)
                ? a.throwArgumentError(
                    "eip-1559 transaction do not support gasPrice",
                    "transaction",
                    e
                  )
                : (0 === t.type || 1 === t.type) &&
                  r &&
                  a.throwArgumentError(
                    "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
                    "transaction",
                    e
                  ),
              (2 === t.type || null == t.type) &&
                null != t.maxFeePerGas &&
                null != t.maxPriorityFeePerGas)
            )
              t.type = 2;
            else if (0 === t.type || 1 === t.type)
              null == t.gasPrice && (t.gasPrice = this.getGasPrice());
            else {
              let e = yield this.getFeeData();
              if (null == t.type)
                if (null != e.maxFeePerGas && null != e.maxPriorityFeePerGas)
                  if (((t.type = 2), null != t.gasPrice)) {
                    let e = t.gasPrice;
                    delete t.gasPrice,
                      (t.maxFeePerGas = e),
                      (t.maxPriorityFeePerGas = e);
                  } else
                    null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas),
                      null == t.maxPriorityFeePerGas &&
                        (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas);
                else
                  null != e.gasPrice
                    ? (r &&
                        a.throwError(
                          "network does not support EIP-1559",
                          i.Logger.errors.UNSUPPORTED_OPERATION,
                          { operation: "populateTransaction" }
                        ),
                      null == t.gasPrice && (t.gasPrice = e.gasPrice),
                      (t.type = 0))
                    : a.throwError(
                        "failed to get consistent fee data",
                        i.Logger.errors.UNSUPPORTED_OPERATION,
                        { operation: "signer.getFeeData" }
                      );
              else
                2 === t.type &&
                  (null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas),
                  null == t.maxPriorityFeePerGas &&
                    (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas));
            }
            return (
              null == t.nonce &&
                (t.nonce = this.getTransactionCount("pending")),
              null == t.gasLimit &&
                (t.gasLimit = this.estimateGas(t).catch((e) => {
                  if (f.indexOf(e.code) >= 0) throw e;
                  return a.throwError(
                    "cannot estimate gas; transaction may fail or may require manual gas limit",
                    i.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
                    { error: e, tx: t }
                  );
                })),
              null == t.chainId
                ? (t.chainId = this.getChainId())
                : (t.chainId = Promise.all([
                    Promise.resolve(t.chainId),
                    this.getChainId(),
                  ]).then(
                    (t) => (
                      0 !== t[1] &&
                        t[0] !== t[1] &&
                        a.throwArgumentError(
                          "chainId address mismatch",
                          "transaction",
                          e
                        ),
                      t[0]
                    )
                  )),
              yield (0, n.resolveProperties)(t)
            );
          });
        }
        _checkProvider(e) {
          this.provider ||
            a.throwError(
              "missing provider",
              i.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: e || "_checkProvider" }
            );
        }
        static isSigner(e) {
          return !!(e && e._isSigner);
        }
      }
      class c extends u {
        constructor(e, t) {
          super(),
            (0, n.defineReadOnly)(this, "address", e),
            (0, n.defineReadOnly)(this, "provider", t || null);
        }
        getAddress() {
          return Promise.resolve(this.address);
        }
        _fail(e, t) {
          return Promise.resolve().then(() => {
            a.throwError(e, i.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: t,
            });
          });
        }
        signMessage(e) {
          return this._fail("VoidSigner cannot sign messages", "signMessage");
        }
        signTransaction(e) {
          return this._fail(
            "VoidSigner cannot sign transactions",
            "signTransaction"
          );
        }
        _signTypedData(e, t, r) {
          return this._fail(
            "VoidSigner cannot sign typed data",
            "signTypedData"
          );
        }
        connect(e) {
          return new c(this.address, e);
        }
      }
    },
    64180: (e, t, r) => {
      "use strict";
      var n = r(42539),
        i = r(68711),
        s = r(13656),
        a = n.rotl32,
        o = n.sum32,
        f = n.sum32_5,
        u = s.ft_1,
        c = i.BlockHash,
        h = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
      function d() {
        if (!(this instanceof d)) return new d();
        c.call(this),
          (this.h = [
            0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0,
          ]),
          (this.W = Array(80));
      }
      n.inherits(d, c),
        (e.exports = d),
        (d.blockSize = 512),
        (d.outSize = 160),
        (d.hmacStrength = 80),
        (d.padLength = 64),
        (d.prototype._update = function (e, t) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
          for (; n < r.length; n++)
            r[n] = a(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
          var i = this.h[0],
            s = this.h[1],
            c = this.h[2],
            d = this.h[3],
            l = this.h[4];
          for (n = 0; n < r.length; n++) {
            var p = ~~(n / 20),
              g = f(a(i, 5), u(p, s, c, d), l, r[n], h[p]);
            (l = d), (d = c), (c = a(s, 30)), (s = i), (i = g);
          }
          (this.h[0] = o(this.h[0], i)),
            (this.h[1] = o(this.h[1], s)),
            (this.h[2] = o(this.h[2], c)),
            (this.h[3] = o(this.h[3], d)),
            (this.h[4] = o(this.h[4], l));
        }),
        (d.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    66054: (e, t, r) => {
      "use strict";
      var n = r(42539),
        i = r(8839);
      function s() {
        if (!(this instanceof s)) return new s();
        i.call(this),
          (this.h = [
            0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a,
            0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31,
            0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d,
            0xbefa4fa4,
          ]);
      }
      n.inherits(s, i),
        (e.exports = s),
        (s.blockSize = 1024),
        (s.outSize = 384),
        (s.hmacStrength = 192),
        (s.padLength = 128),
        (s.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h.slice(0, 12), "big")
            : n.split32(this.h.slice(0, 12), "big");
        });
    },
    68711: (e, t, r) => {
      "use strict";
      var n = r(42539),
        i = r(23124);
      function s() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = "big"),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      (t.BlockHash = s),
        (s.prototype.update = function (e, t) {
          if (
            ((e = n.toArray(e, t)),
            this.pending
              ? (this.pending = this.pending.concat(e))
              : (this.pending = e),
            (this.pendingTotal += e.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (e = this.pending).length % this._delta8;
            (this.pending = e.slice(e.length - r, e.length)),
              0 === this.pending.length && (this.pending = null),
              (e = n.join32(e, 0, e.length - r, this.endian));
            for (var i = 0; i < e.length; i += this._delta32)
              this._update(e, i, i + this._delta32);
          }
          return this;
        }),
        (s.prototype.digest = function (e) {
          return (
            this.update(this._pad()), i(null === this.pending), this._digest(e)
          );
        }),
        (s.prototype._pad = function () {
          var e = this.pendingTotal,
            t = this._delta8,
            r = t - ((e + this.padLength) % t),
            n = Array(r + this.padLength);
          n[0] = 128;
          for (var i = 1; i < r; i++) n[i] = 0;
          if (((e <<= 3), "big" === this.endian)) {
            for (var s = 8; s < this.padLength; s++) n[i++] = 0;
            (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = (e >>> 24) & 255),
              (n[i++] = (e >>> 16) & 255),
              (n[i++] = (e >>> 8) & 255),
              (n[i++] = 255 & e);
          } else
            for (
              s = 8,
                n[i++] = 255 & e,
                n[i++] = (e >>> 8) & 255,
                n[i++] = (e >>> 16) & 255,
                n[i++] = (e >>> 24) & 255,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0;
              s < this.padLength;
              s++
            )
              n[i++] = 0;
          return n;
        });
    },
    71379: (e, t, r) => {
      "use strict";
      var n = r(42539),
        i = r(21574);
      function s() {
        if (!(this instanceof s)) return new s();
        i.call(this),
          (this.h = [
            0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31,
            0x68581511, 0x64f98fa7, 0xbefa4fa4,
          ]);
      }
      n.inherits(s, i),
        (e.exports = s),
        (s.blockSize = 512),
        (s.outSize = 224),
        (s.hmacStrength = 192),
        (s.padLength = 64),
        (s.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h.slice(0, 7), "big")
            : n.split32(this.h.slice(0, 7), "big");
        });
    },
    71861: (e, t, r) => {
      "use strict";
      var n = r(42539),
        i = r(23124);
      function s(e, t, r) {
        if (!(this instanceof s)) return new s(e, t, r);
        (this.Hash = e),
          (this.blockSize = e.blockSize / 8),
          (this.outSize = e.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(n.toArray(t, r));
      }
      (e.exports = s),
        (s.prototype._init = function (e) {
          e.length > this.blockSize && (e = new this.Hash().update(e).digest()),
            i(e.length <= this.blockSize);
          for (var t = e.length; t < this.blockSize; t++) e.push(0);
          for (t = 0; t < e.length; t++) e[t] ^= 54;
          for (t = 0, this.inner = new this.Hash().update(e); t < e.length; t++)
            e[t] ^= 106;
          this.outer = new this.Hash().update(e);
        }),
        (s.prototype.update = function (e, t) {
          return this.inner.update(e, t), this;
        }),
        (s.prototype.digest = function (e) {
          return this.outer.update(this.inner.digest()), this.outer.digest(e);
        });
    },
    83777: (e, t, r) => {
      "use strict";
      r.d(t, { id: () => s });
      var n = r(53099),
        i = r(193);
      function s(e) {
        return (0, n.keccak256)((0, i.YW)(e));
      }
    },
    84115: (e) => {
      "function" == typeof Object.create
        ? (e.exports = function (e, t) {
            t &&
              ((e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (e.exports = function (e, t) {
            if (t) {
              e.super_ = t;
              var r = function () {};
              (r.prototype = t.prototype),
                (e.prototype = new r()),
                (e.prototype.constructor = e);
            }
          });
    },
    85700: (e, t, r) => {
      "use strict";
      r.d(t, { Rj: () => a, Kq: () => o });
      var n = r(84784);
      r(45849);
      var i = r(49435);
      let s = new (r(83928).Logger)("abstract-provider/5.8.0");
      class a extends i.Description {
        static isForkEvent(e) {
          return !!(e && e._isForkEvent);
        }
      }
      class o {
        constructor() {
          s.checkAbstract(new.target, o),
            (0, i.defineReadOnly)(this, "_isProvider", !0);
        }
        getFeeData() {
          var e, t, r, s;
          return (
            (e = this),
            (t = void 0),
            (r = void 0),
            (s = function* () {
              let { block: e, gasPrice: t } = yield (0, i.resolveProperties)({
                  block: this.getBlock("latest"),
                  gasPrice: this.getGasPrice().catch((e) => null),
                }),
                r = null,
                s = null,
                a = null;
              return (
                e &&
                  e.baseFeePerGas &&
                  ((r = e.baseFeePerGas),
                  (a = n.gH.from("1500000000")),
                  (s = e.baseFeePerGas.mul(2).add(a))),
                {
                  lastBaseFeePerGas: r,
                  maxFeePerGas: s,
                  maxPriorityFeePerGas: a,
                  gasPrice: t,
                }
              );
            }),
            new (r || (r = Promise))(function (n, i) {
              function a(e) {
                try {
                  f(s.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function o(e) {
                try {
                  f(s.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function f(e) {
                var t;
                e.done
                  ? n(e.value)
                  : ((t = e.value) instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })
                    ).then(a, o);
              }
              f((s = s.apply(e, t || [])).next());
            })
          );
        }
        addListener(e, t) {
          return this.on(e, t);
        }
        removeListener(e, t) {
          return this.off(e, t);
        }
        static isProvider(e) {
          return !!(e && e._isProvider);
        }
      }
    },
    90340: (e, t, r) => {
      "use strict";
      (t.sha1 = r(64180)),
        (t.sha224 = r(71379)),
        (t.sha256 = r(21574)),
        (t.sha384 = r(66054)),
        (t.sha512 = r(8839));
    },
    91359: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          TransactionTypes: () => n,
          accessListify: () => E,
          computeAddress: () => b,
          parse: () => I,
          recoverAddress: () => v,
          serialize: () => S,
        });
      var n,
        i = r(68652),
        s = r(84784),
        a = r(45849),
        o = r(27043),
        f = r(53099),
        u = r(49435),
        c = r(52598),
        h = r(6861),
        d = r(83928);
      let l = new d.Logger("transactions/5.8.0");
      function p(e) {
        return "0x" === e ? null : (0, i.getAddress)(e);
      }
      function g(e) {
        return "0x" === e ? o.XK : s.gH.from(e);
      }
      !(function (e) {
        (e[(e.legacy = 0)] = "legacy"),
          (e[(e.eip2930 = 1)] = "eip2930"),
          (e[(e.eip1559 = 2)] = "eip1559");
      })(n || (n = {}));
      let m = [
          { name: "nonce", maxLength: 32, numeric: !0 },
          { name: "gasPrice", maxLength: 32, numeric: !0 },
          { name: "gasLimit", maxLength: 32, numeric: !0 },
          { name: "to", length: 20 },
          { name: "value", maxLength: 32, numeric: !0 },
          { name: "data" },
        ],
        y = {
          chainId: !0,
          data: !0,
          gasLimit: !0,
          gasPrice: !0,
          nonce: !0,
          to: !0,
          type: !0,
          value: !0,
        };
      function b(e) {
        let t = (0, h.computePublicKey)(e);
        return (0, i.getAddress)(
          (0, a.hexDataSlice)((0, f.keccak256)((0, a.hexDataSlice)(t, 1)), 12)
        );
      }
      function v(e, t) {
        return b((0, h.recoverPublicKey)((0, a.arrayify)(e), t));
      }
      function x(e, t) {
        let r = (0, a.stripZeros)(s.gH.from(e).toHexString());
        return (
          r.length > 32 &&
            l.throwArgumentError(
              "invalid length for " + t,
              "transaction:" + t,
              e
            ),
          r
        );
      }
      function w(e, t) {
        return {
          address: (0, i.getAddress)(e),
          storageKeys: (t || []).map(
            (t, r) => (
              32 !== (0, a.hexDataLength)(t) &&
                l.throwArgumentError(
                  "invalid access list storageKey",
                  `accessList[${e}:${r}]`,
                  t
                ),
              t.toLowerCase()
            )
          ),
        };
      }
      function E(e) {
        if (Array.isArray(e))
          return e.map((e, t) =>
            Array.isArray(e)
              ? (e.length > 2 &&
                  l.throwArgumentError(
                    "access list expected to be [ address, storageKeys[] ]",
                    `value[${t}]`,
                    e
                  ),
                w(e[0], e[1]))
              : w(e.address, e.storageKeys)
          );
        let t = Object.keys(e).map((t) => {
          let r = e[t].reduce((e, t) => ((e[t] = !0), e), {});
          return w(t, Object.keys(r).sort());
        });
        return t.sort((e, t) => e.address.localeCompare(t.address)), t;
      }
      function _(e) {
        return E(e).map((e) => [e.address, e.storageKeys]);
      }
      function A(e, t) {
        if (null != e.gasPrice) {
          let t = s.gH.from(e.gasPrice),
            r = s.gH.from(e.maxFeePerGas || 0);
          t.eq(r) ||
            l.throwArgumentError(
              "mismatch EIP-1559 gasPrice != maxFeePerGas",
              "tx",
              { gasPrice: t, maxFeePerGas: r }
            );
        }
        let r = [
          x(e.chainId || 0, "chainId"),
          x(e.nonce || 0, "nonce"),
          x(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
          x(e.maxFeePerGas || 0, "maxFeePerGas"),
          x(e.gasLimit || 0, "gasLimit"),
          null != e.to ? (0, i.getAddress)(e.to) : "0x",
          x(e.value || 0, "value"),
          e.data || "0x",
          _(e.accessList || []),
        ];
        if (t) {
          let e = (0, a.splitSignature)(t);
          r.push(x(e.recoveryParam, "recoveryParam")),
            r.push((0, a.stripZeros)(e.r)),
            r.push((0, a.stripZeros)(e.s));
        }
        return (0, a.hexConcat)(["0x02", c.encode(r)]);
      }
      function P(e, t) {
        let r = [
          x(e.chainId || 0, "chainId"),
          x(e.nonce || 0, "nonce"),
          x(e.gasPrice || 0, "gasPrice"),
          x(e.gasLimit || 0, "gasLimit"),
          null != e.to ? (0, i.getAddress)(e.to) : "0x",
          x(e.value || 0, "value"),
          e.data || "0x",
          _(e.accessList || []),
        ];
        if (t) {
          let e = (0, a.splitSignature)(t);
          r.push(x(e.recoveryParam, "recoveryParam")),
            r.push((0, a.stripZeros)(e.r)),
            r.push((0, a.stripZeros)(e.s));
        }
        return (0, a.hexConcat)(["0x01", c.encode(r)]);
      }
      function S(e, t) {
        if (null == e.type || 0 === e.type) {
          null != e.accessList &&
            l.throwArgumentError(
              "untyped transactions do not support accessList; include type: 1",
              "transaction",
              e
            );
          (0, u.checkProperties)(e, y);
          let r = [];
          m.forEach(function (t) {
            let n = e[t.name] || [],
              i = {};
            t.numeric && (i.hexPad = "left"),
              (n = (0, a.arrayify)((0, a.hexlify)(n, i))),
              t.length &&
                n.length !== t.length &&
                n.length > 0 &&
                l.throwArgumentError(
                  "invalid length for " + t.name,
                  "transaction:" + t.name,
                  n
                ),
              t.maxLength &&
                (n = (0, a.stripZeros)(n)).length > t.maxLength &&
                l.throwArgumentError(
                  "invalid length for " + t.name,
                  "transaction:" + t.name,
                  n
                ),
              r.push((0, a.hexlify)(n));
          });
          let n = 0;
          if (
            (null != e.chainId
              ? "number" != typeof (n = e.chainId) &&
                l.throwArgumentError(
                  "invalid transaction.chainId",
                  "transaction",
                  e
                )
              : t &&
                !(0, a.isBytesLike)(t) &&
                t.v > 28 &&
                (n = Math.floor((t.v - 35) / 2)),
            0 !== n && (r.push((0, a.hexlify)(n)), r.push("0x"), r.push("0x")),
            !t)
          )
            return c.encode(r);
          let i = (0, a.splitSignature)(t),
            s = 27 + i.recoveryParam;
          return (
            0 !== n
              ? (r.pop(),
                r.pop(),
                r.pop(),
                (s += 2 * n + 8),
                i.v > 28 &&
                  i.v !== s &&
                  l.throwArgumentError(
                    "transaction.chainId/signature.v mismatch",
                    "signature",
                    t
                  ))
              : i.v !== s &&
                l.throwArgumentError(
                  "transaction.chainId/signature.v mismatch",
                  "signature",
                  t
                ),
            r.push((0, a.hexlify)(s)),
            r.push((0, a.stripZeros)((0, a.arrayify)(i.r))),
            r.push((0, a.stripZeros)((0, a.arrayify)(i.s))),
            c.encode(r)
          );
        }
        switch (e.type) {
          case 1:
            return P(e, t);
          case 2:
            return A(e, t);
        }
        return l.throwError(
          `unsupported transaction type: ${e.type}`,
          d.Logger.errors.UNSUPPORTED_OPERATION,
          { operation: "serializeTransaction", transactionType: e.type }
        );
      }
      function O(e, t, r) {
        try {
          let r = g(t[0]).toNumber();
          if (0 !== r && 1 !== r) throw Error("bad recid");
          e.v = r;
        } catch (e) {
          l.throwArgumentError("invalid v for transaction type: 1", "v", t[0]);
        }
        (e.r = (0, a.hexZeroPad)(t[1], 32)),
          (e.s = (0, a.hexZeroPad)(t[2], 32));
        try {
          let t = (0, f.keccak256)(r(e));
          e.from = v(t, { r: e.r, s: e.s, recoveryParam: e.v });
        } catch (e) {}
      }
      function I(e) {
        let t = (0, a.arrayify)(e);
        if (t[0] > 127)
          return (function (e) {
            let t = c.decode(e);
            9 !== t.length &&
              6 !== t.length &&
              l.throwArgumentError(
                "invalid raw transaction",
                "rawTransaction",
                e
              );
            let r = {
              nonce: g(t[0]).toNumber(),
              gasPrice: g(t[1]),
              gasLimit: g(t[2]),
              to: p(t[3]),
              value: g(t[4]),
              data: t[5],
              chainId: 0,
            };
            if (6 === t.length) return r;
            try {
              r.v = s.gH.from(t[6]).toNumber();
            } catch (e) {
              return r;
            }
            if (
              ((r.r = (0, a.hexZeroPad)(t[7], 32)),
              (r.s = (0, a.hexZeroPad)(t[8], 32)),
              s.gH.from(r.r).isZero() && s.gH.from(r.s).isZero())
            )
              (r.chainId = r.v), (r.v = 0);
            else {
              (r.chainId = Math.floor((r.v - 35) / 2)),
                r.chainId < 0 && (r.chainId = 0);
              let n = r.v - 27,
                i = t.slice(0, 6);
              0 !== r.chainId &&
                (i.push((0, a.hexlify)(r.chainId)),
                i.push("0x"),
                i.push("0x"),
                (n -= 2 * r.chainId + 8));
              let s = (0, f.keccak256)(c.encode(i));
              try {
                r.from = v(s, {
                  r: (0, a.hexlify)(r.r),
                  s: (0, a.hexlify)(r.s),
                  recoveryParam: n,
                });
              } catch (e) {}
              r.hash = (0, f.keccak256)(e);
            }
            return (r.type = null), r;
          })(t);
        switch (t[0]) {
          case 1:
            let r = c.decode(t.slice(1));
            8 !== r.length &&
              11 !== r.length &&
              l.throwArgumentError(
                "invalid component count for transaction type: 1",
                "payload",
                (0, a.hexlify)(t)
              );
            let n = {
              type: 1,
              chainId: g(r[0]).toNumber(),
              nonce: g(r[1]).toNumber(),
              gasPrice: g(r[2]),
              gasLimit: g(r[3]),
              to: p(r[4]),
              value: g(r[5]),
              data: r[6],
              accessList: E(r[7]),
            };
            return (
              8 === r.length ||
                ((n.hash = (0, f.keccak256)(t)), O(n, r.slice(8), P)),
              n
            );
          case 2:
            let i = c.decode(t.slice(1));
            9 !== i.length &&
              12 !== i.length &&
              l.throwArgumentError(
                "invalid component count for transaction type: 2",
                "payload",
                (0, a.hexlify)(t)
              );
            let o = g(i[2]),
              u = g(i[3]),
              h = {
                type: 2,
                chainId: g(i[0]).toNumber(),
                nonce: g(i[1]).toNumber(),
                maxPriorityFeePerGas: o,
                maxFeePerGas: u,
                gasPrice: null,
                gasLimit: g(i[4]),
                to: p(i[5]),
                value: g(i[6]),
                data: i[7],
                accessList: E(i[8]),
              };
            return (
              9 === i.length ||
                ((h.hash = (0, f.keccak256)(t)), O(h, i.slice(9), A)),
              h
            );
        }
        return l.throwError(
          `unsupported transaction type: ${t[0]}`,
          d.Logger.errors.UNSUPPORTED_OPERATION,
          { operation: "parseTransaction", transactionType: t[0] }
        );
      }
    },
    93685: (e, t, r) => {
      "use strict";
      r.d(t, { FW: () => p, KA: () => x, dJ: () => g, wu: () => y });
      var n = r(68652),
        i = r(84784),
        s = r(45849),
        a = r(83777),
        o = r(53099),
        f = r(49435),
        u = r(16260),
        c = r(48071),
        h = r(83928),
        d = r(25633);
      let l = new h.Logger(d.r);
      class p extends f.Description {}
      class g extends f.Description {}
      class m extends f.Description {}
      class y extends f.Description {
        static isIndexed(e) {
          return !!(e && e._isIndexed);
        }
      }
      let b = {
        "0x08c379a0": {
          signature: "Error(string)",
          name: "Error",
          inputs: ["string"],
          reason: !0,
        },
        "0x4e487b71": {
          signature: "Panic(uint256)",
          name: "Panic",
          inputs: ["uint256"],
        },
      };
      function v(e, t) {
        let r = Error(
          `deferred error during ABI decoding triggered accessing ${e}`
        );
        return (r.error = t), r;
      }
      class x {
        constructor(e) {
          let t = [];
          (t = "string" == typeof e ? JSON.parse(e) : e),
            (0, f.defineReadOnly)(
              this,
              "fragments",
              t.map((e) => c.FK.from(e)).filter((e) => null != e)
            ),
            (0, f.defineReadOnly)(
              this,
              "_abiCoder",
              (0, f.getStatic)(new.target, "getAbiCoder")()
            ),
            (0, f.defineReadOnly)(this, "functions", {}),
            (0, f.defineReadOnly)(this, "errors", {}),
            (0, f.defineReadOnly)(this, "events", {}),
            (0, f.defineReadOnly)(this, "structs", {}),
            this.fragments.forEach((e) => {
              let t = null;
              switch (e.type) {
                case "constructor":
                  if (this.deploy)
                    return void l.warn("duplicate definition - constructor");
                  (0, f.defineReadOnly)(this, "deploy", e);
                  return;
                case "function":
                  t = this.functions;
                  break;
                case "event":
                  t = this.events;
                  break;
                case "error":
                  t = this.errors;
                  break;
                default:
                  return;
              }
              let r = e.format();
              if (t[r]) return void l.warn("duplicate definition - " + r);
              t[r] = e;
            }),
            this.deploy ||
              (0, f.defineReadOnly)(
                this,
                "deploy",
                c.Pw.from({ payable: !1, type: "constructor" })
              ),
            (0, f.defineReadOnly)(this, "_isInterface", !0);
        }
        format(e) {
          e || (e = c.$o.full),
            e === c.$o.sighash &&
              l.throwArgumentError(
                "interface does not support formatting sighash",
                "format",
                e
              );
          let t = this.fragments.map((t) => t.format(e));
          return e === c.$o.json
            ? JSON.stringify(t.map((e) => JSON.parse(e)))
            : t;
        }
        static getAbiCoder() {
          return u.D;
        }
        static getAddress(e) {
          return (0, n.getAddress)(e);
        }
        static getSighash(e) {
          return (0, s.hexDataSlice)((0, a.id)(e.format()), 0, 4);
        }
        static getEventTopic(e) {
          return (0, a.id)(e.format());
        }
        getFunction(e) {
          if ((0, s.isHexString)(e)) {
            for (let t in this.functions)
              if (e === this.getSighash(t)) return this.functions[t];
            l.throwArgumentError("no matching function", "sighash", e);
          }
          if (-1 === e.indexOf("(")) {
            let t = e.trim(),
              r = Object.keys(this.functions).filter(
                (e) => e.split("(")[0] === t
              );
            return (
              0 === r.length
                ? l.throwArgumentError("no matching function", "name", t)
                : r.length > 1 &&
                  l.throwArgumentError(
                    "multiple matching functions",
                    "name",
                    t
                  ),
              this.functions[r[0]]
            );
          }
          let t = this.functions[c.hc.fromString(e).format()];
          return (
            t || l.throwArgumentError("no matching function", "signature", e), t
          );
        }
        getEvent(e) {
          if ((0, s.isHexString)(e)) {
            let t = e.toLowerCase();
            for (let e in this.events)
              if (t === this.getEventTopic(e)) return this.events[e];
            l.throwArgumentError("no matching event", "topichash", t);
          }
          if (-1 === e.indexOf("(")) {
            let t = e.trim(),
              r = Object.keys(this.events).filter((e) => e.split("(")[0] === t);
            return (
              0 === r.length
                ? l.throwArgumentError("no matching event", "name", t)
                : r.length > 1 &&
                  l.throwArgumentError("multiple matching events", "name", t),
              this.events[r[0]]
            );
          }
          let t = this.events[c.Zp.fromString(e).format()];
          return (
            t || l.throwArgumentError("no matching event", "signature", e), t
          );
        }
        getError(e) {
          if ((0, s.isHexString)(e)) {
            let t = (0, f.getStatic)(this.constructor, "getSighash");
            for (let r in this.errors)
              if (e === t(this.errors[r])) return this.errors[r];
            l.throwArgumentError("no matching error", "sighash", e);
          }
          if (-1 === e.indexOf("(")) {
            let t = e.trim(),
              r = Object.keys(this.errors).filter((e) => e.split("(")[0] === t);
            return (
              0 === r.length
                ? l.throwArgumentError("no matching error", "name", t)
                : r.length > 1 &&
                  l.throwArgumentError("multiple matching errors", "name", t),
              this.errors[r[0]]
            );
          }
          let t = this.errors[c.hc.fromString(e).format()];
          return (
            t || l.throwArgumentError("no matching error", "signature", e), t
          );
        }
        getSighash(e) {
          if ("string" == typeof e)
            try {
              e = this.getFunction(e);
            } catch (t) {
              try {
                e = this.getError(e);
              } catch (e) {
                throw t;
              }
            }
          return (0, f.getStatic)(this.constructor, "getSighash")(e);
        }
        getEventTopic(e) {
          return (
            "string" == typeof e && (e = this.getEvent(e)),
            (0, f.getStatic)(this.constructor, "getEventTopic")(e)
          );
        }
        _decodeParams(e, t) {
          return this._abiCoder.decode(e, t);
        }
        _encodeParams(e, t) {
          return this._abiCoder.encode(e, t);
        }
        encodeDeploy(e) {
          return this._encodeParams(this.deploy.inputs, e || []);
        }
        decodeErrorResult(e, t) {
          "string" == typeof e && (e = this.getError(e));
          let r = (0, s.arrayify)(t);
          return (
            (0, s.hexlify)(r.slice(0, 4)) !== this.getSighash(e) &&
              l.throwArgumentError(
                `data signature does not match error ${e.name}.`,
                "data",
                (0, s.hexlify)(r)
              ),
            this._decodeParams(e.inputs, r.slice(4))
          );
        }
        encodeErrorResult(e, t) {
          return (
            "string" == typeof e && (e = this.getError(e)),
            (0, s.hexlify)(
              (0, s.concat)([
                this.getSighash(e),
                this._encodeParams(e.inputs, t || []),
              ])
            )
          );
        }
        decodeFunctionData(e, t) {
          "string" == typeof e && (e = this.getFunction(e));
          let r = (0, s.arrayify)(t);
          return (
            (0, s.hexlify)(r.slice(0, 4)) !== this.getSighash(e) &&
              l.throwArgumentError(
                `data signature does not match function ${e.name}.`,
                "data",
                (0, s.hexlify)(r)
              ),
            this._decodeParams(e.inputs, r.slice(4))
          );
        }
        encodeFunctionData(e, t) {
          return (
            "string" == typeof e && (e = this.getFunction(e)),
            (0, s.hexlify)(
              (0, s.concat)([
                this.getSighash(e),
                this._encodeParams(e.inputs, t || []),
              ])
            )
          );
        }
        decodeFunctionResult(e, t) {
          "string" == typeof e && (e = this.getFunction(e));
          let r = (0, s.arrayify)(t),
            n = null,
            i = "",
            a = null,
            o = null,
            f = null;
          switch (r.length % this._abiCoder._getWordSize()) {
            case 0:
              try {
                return this._abiCoder.decode(e.outputs, r);
              } catch (e) {}
              break;
            case 4: {
              let e = (0, s.hexlify)(r.slice(0, 4)),
                t = b[e];
              if (t)
                (a = this._abiCoder.decode(t.inputs, r.slice(4))),
                  (o = t.name),
                  (f = t.signature),
                  t.reason && (n = a[0]),
                  "Error" === o
                    ? (i = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(
                        a[0]
                      )}`)
                    : "Panic" === o &&
                      (i = `; VM Exception while processing transaction: reverted with panic code ${a[0]}`);
              else
                try {
                  let t = this.getError(e);
                  (a = this._abiCoder.decode(t.inputs, r.slice(4))),
                    (o = t.name),
                    (f = t.format());
                } catch (e) {}
            }
          }
          return l.throwError(
            "call revert exception" + i,
            h.Logger.errors.CALL_EXCEPTION,
            {
              method: e.format(),
              data: (0, s.hexlify)(t),
              errorArgs: a,
              errorName: o,
              errorSignature: f,
              reason: n,
            }
          );
        }
        encodeFunctionResult(e, t) {
          return (
            "string" == typeof e && (e = this.getFunction(e)),
            (0, s.hexlify)(this._abiCoder.encode(e.outputs, t || []))
          );
        }
        encodeFilterTopics(e, t) {
          "string" == typeof e && (e = this.getEvent(e)),
            t.length > e.inputs.length &&
              l.throwError(
                "too many arguments for " + e.format(),
                h.Logger.errors.UNEXPECTED_ARGUMENT,
                { argument: "values", value: t }
              );
          let r = [];
          e.anonymous || r.push(this.getEventTopic(e));
          let n = (e, t) =>
            "string" === e.type
              ? (0, a.id)(t)
              : "bytes" === e.type
              ? (0, o.keccak256)((0, s.hexlify)(t))
              : ("bool" === e.type &&
                  "boolean" == typeof t &&
                  (t = t ? "0x01" : "0x00"),
                e.type.match(/^u?int/) && (t = i.gH.from(t).toHexString()),
                "address" === e.type && this._abiCoder.encode(["address"], [t]),
                (0, s.hexZeroPad)((0, s.hexlify)(t), 32));
          for (
            t.forEach((t, i) => {
              let s = e.inputs[i];
              if (!s.indexed) {
                null != t &&
                  l.throwArgumentError(
                    "cannot filter non-indexed parameters; must be null",
                    "contract." + s.name,
                    t
                  );
                return;
              }
              null == t
                ? r.push(null)
                : "array" === s.baseType || "tuple" === s.baseType
                ? l.throwArgumentError(
                    "filtering with tuples or arrays not supported",
                    "contract." + s.name,
                    t
                  )
                : Array.isArray(t)
                ? r.push(t.map((e) => n(s, e)))
                : r.push(n(s, t));
            });
            r.length && null === r[r.length - 1];

          )
            r.pop();
          return r;
        }
        encodeEventLog(e, t) {
          "string" == typeof e && (e = this.getEvent(e));
          let r = [],
            n = [],
            i = [];
          return (
            e.anonymous || r.push(this.getEventTopic(e)),
            t.length !== e.inputs.length &&
              l.throwArgumentError(
                "event arguments/values mismatch",
                "values",
                t
              ),
            e.inputs.forEach((e, s) => {
              let f = t[s];
              if (e.indexed)
                if ("string" === e.type) r.push((0, a.id)(f));
                else if ("bytes" === e.type) r.push((0, o.keccak256)(f));
                else if ("tuple" === e.baseType || "array" === e.baseType)
                  throw Error("not implemented");
                else r.push(this._abiCoder.encode([e.type], [f]));
              else n.push(e), i.push(f);
            }),
            { data: this._abiCoder.encode(n, i), topics: r }
          );
        }
        decodeEventLog(e, t, r) {
          if (
            ("string" == typeof e && (e = this.getEvent(e)),
            null != r && !e.anonymous)
          ) {
            let t = this.getEventTopic(e);
            ((0, s.isHexString)(r[0], 32) && r[0].toLowerCase() === t) ||
              l.throwError(
                "fragment/topic mismatch",
                h.Logger.errors.INVALID_ARGUMENT,
                { argument: "topics[0]", expected: t, value: r[0] }
              ),
              (r = r.slice(1));
          }
          let n = [],
            i = [],
            a = [];
          e.inputs.forEach((e, t) => {
            e.indexed
              ? "string" === e.type ||
                "bytes" === e.type ||
                "tuple" === e.baseType ||
                "array" === e.baseType
                ? (n.push(c.aX.fromObject({ type: "bytes32", name: e.name })),
                  a.push(!0))
                : (n.push(e), a.push(!1))
              : (i.push(e), a.push(!1));
          });
          let o = null != r ? this._abiCoder.decode(n, (0, s.concat)(r)) : null,
            f = this._abiCoder.decode(i, t, !0),
            u = [],
            d = 0,
            p = 0;
          e.inputs.forEach((e, t) => {
            if (e.indexed)
              if (null == o) u[t] = new y({ _isIndexed: !0, hash: null });
              else if (a[t]) u[t] = new y({ _isIndexed: !0, hash: o[p++] });
              else
                try {
                  u[t] = o[p++];
                } catch (e) {
                  u[t] = e;
                }
            else
              try {
                u[t] = f[d++];
              } catch (e) {
                u[t] = e;
              }
            if (e.name && null == u[e.name]) {
              let r = u[t];
              r instanceof Error
                ? Object.defineProperty(u, e.name, {
                    enumerable: !0,
                    get: () => {
                      throw v(`property ${JSON.stringify(e.name)}`, r);
                    },
                  })
                : (u[e.name] = r);
            }
          });
          for (let e = 0; e < u.length; e++) {
            let t = u[e];
            t instanceof Error &&
              Object.defineProperty(u, e, {
                enumerable: !0,
                get: () => {
                  throw v(`index ${e}`, t);
                },
              });
          }
          return Object.freeze(u);
        }
        parseTransaction(e) {
          let t = this.getFunction(e.data.substring(0, 10).toLowerCase());
          return t
            ? new g({
                args: this._abiCoder.decode(
                  t.inputs,
                  "0x" + e.data.substring(10)
                ),
                functionFragment: t,
                name: t.name,
                signature: t.format(),
                sighash: this.getSighash(t),
                value: i.gH.from(e.value || "0"),
              })
            : null;
        }
        parseLog(e) {
          let t = this.getEvent(e.topics[0]);
          return !t || t.anonymous
            ? null
            : new p({
                eventFragment: t,
                name: t.name,
                signature: t.format(),
                topic: this.getEventTopic(t),
                args: this.decodeEventLog(t, e.data, e.topics),
              });
        }
        parseError(e) {
          let t = (0, s.hexlify)(e),
            r = this.getError(t.substring(0, 10).toLowerCase());
          return r
            ? new m({
                args: this._abiCoder.decode(r.inputs, "0x" + t.substring(10)),
                errorFragment: r,
                name: r.name,
                signature: r.format(),
                sighash: this.getSighash(r),
              })
            : null;
        }
        static isInterface(e) {
          return !!(e && e._isInterface);
        }
      }
    },
    98625: (e, t, r) => {
      "use strict";
      var n = r(42539),
        i = r(68711),
        s = n.rotl32,
        a = n.sum32,
        o = n.sum32_3,
        f = n.sum32_4,
        u = i.BlockHash;
      function c() {
        if (!(this instanceof c)) return new c();
        u.call(this),
          (this.h = [
            0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0,
          ]),
          (this.endian = "little");
      }
      function h(e, t, r, n) {
        return e <= 15
          ? t ^ r ^ n
          : e <= 31
          ? (t & r) | (~t & n)
          : e <= 47
          ? (t | ~r) ^ n
          : e <= 63
          ? (t & n) | (r & ~n)
          : t ^ (r | ~n);
      }
      n.inherits(c, u),
        (t.ripemd160 = c),
        (c.blockSize = 512),
        (c.outSize = 160),
        (c.hmacStrength = 192),
        (c.padLength = 64),
        (c.prototype._update = function (e, t) {
          for (
            var r = this.h[0],
              n = this.h[1],
              i = this.h[2],
              u = this.h[3],
              c = this.h[4],
              m = r,
              y = n,
              b = i,
              v = u,
              x = c,
              w = 0;
            w < 80;
            w++
          ) {
            var E,
              _,
              A = a(
                s(
                  f(
                    r,
                    h(w, n, i, u),
                    e[d[w] + t],
                    (E = w) <= 15
                      ? 0
                      : E <= 31
                      ? 0x5a827999
                      : E <= 47
                      ? 0x6ed9eba1
                      : E <= 63
                      ? 0x8f1bbcdc
                      : 0xa953fd4e
                  ),
                  p[w]
                ),
                c
              );
            (r = c),
              (c = u),
              (u = s(i, 10)),
              (i = n),
              (n = A),
              (A = a(
                s(
                  f(
                    m,
                    h(79 - w, y, b, v),
                    e[l[w] + t],
                    (_ = w) <= 15
                      ? 0x50a28be6
                      : _ <= 31
                      ? 0x5c4dd124
                      : _ <= 47
                      ? 0x6d703ef3
                      : 0x7a6d76e9 * !!(_ <= 63)
                  ),
                  g[w]
                ),
                x
              )),
              (m = x),
              (x = v),
              (v = s(b, 10)),
              (b = y),
              (y = A);
          }
          (A = o(this.h[1], i, v)),
            (this.h[1] = o(this.h[2], u, x)),
            (this.h[2] = o(this.h[3], c, m)),
            (this.h[3] = o(this.h[4], r, y)),
            (this.h[4] = o(this.h[0], n, b)),
            (this.h[0] = A);
        }),
        (c.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h, "little")
            : n.split32(this.h, "little");
        });
      var d = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        l = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        p = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ],
        g = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ];
    },
  },
]);
