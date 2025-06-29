(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4818],
  {
    92437: function (t, i, r) {
      !(function (t, i) {
        "use strict";
        function h(t, i) {
          if (!t) throw Error(i || "Assertion failed");
        }
        function n(t, i) {
          t.super_ = i;
          var r = function () {};
          (r.prototype = i.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function e(t, i, r) {
          if (e.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" === i || "be" === i) && ((r = i), (i = 10)),
              this._init(t || 0, i || 10, r || "be"));
        }
        "object" == typeof t ? (t.exports = e) : (i.BN = e),
          (e.BN = e),
          (e.wordSize = 26);
        try {
          l =
            "undefined" != typeof window && void 0 !== window.Buffer
              ? window.Buffer
              : r(47790).Buffer;
        } catch (t) {}
        function o(t, i) {
          var r = t.charCodeAt(i);
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void h(!1, "Invalid character in " + t);
        }
        function s(t, i, r) {
          var h = o(t, r);
          return r - 1 >= i && (h |= o(t, r - 1) << 4), h;
        }
        function u(t, i, r, n) {
          for (var e = 0, o = 0, s = Math.min(t.length, r), u = i; u < s; u++) {
            var f = t.charCodeAt(u) - 48;
            (e *= n),
              (o = f >= 49 ? f - 49 + 10 : f >= 17 ? f - 17 + 10 : f),
              h(f >= 0 && o < n, "Invalid character"),
              (e += o);
          }
          return e;
        }
        function f(t, i) {
          (t.words = i.words),
            (t.length = i.length),
            (t.negative = i.negative),
            (t.red = i.red);
        }
        if (
          ((e.isBN = function (t) {
            return (
              t instanceof e ||
              (null !== t &&
                "object" == typeof t &&
                t.constructor.wordSize === e.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (e.max = function (t, i) {
            return t.cmp(i) > 0 ? t : i;
          }),
          (e.min = function (t, i) {
            return 0 > t.cmp(i) ? t : i;
          }),
          (e.prototype._init = function (t, i, r) {
            if ("number" == typeof t) return this._initNumber(t, i, r);
            if ("object" == typeof t) return this._initArray(t, i, r);
            "hex" === i && (i = 16), h(i === (0 | i) && i >= 2 && i <= 36);
            var n = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (n++, (this.negative = 1)),
              n < t.length &&
                (16 === i
                  ? this._parseHex(t, n, r)
                  : (this._parseBase(t, i, n),
                    "le" === r && this._initArray(this.toArray(), i, r)));
          }),
          (e.prototype._initNumber = function (t, i, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 0x4000000
                ? ((this.words = [0x3ffffff & t]), (this.length = 1))
                : t < 0x10000000000000
                ? ((this.words = [0x3ffffff & t, (t / 0x4000000) & 0x3ffffff]),
                  (this.length = 2))
                : (h(t < 0x20000000000000),
                  (this.words = [
                    0x3ffffff & t,
                    (t / 0x4000000) & 0x3ffffff,
                    1,
                  ]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), i, r);
          }),
          (e.prototype._initArray = function (t, i, r) {
            if ((h("number" == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = Array(this.length));
            for (var n, e, o = 0; o < this.length; o++) this.words[o] = 0;
            var s = 0;
            if ("be" === r)
              for (o = t.length - 1, n = 0; o >= 0; o -= 3)
                (e = t[o] | (t[o - 1] << 8) | (t[o - 2] << 16)),
                  (this.words[n] |= (e << s) & 0x3ffffff),
                  (this.words[n + 1] = (e >>> (26 - s)) & 0x3ffffff),
                  (s += 24) >= 26 && ((s -= 26), n++);
            else if ("le" === r)
              for (o = 0, n = 0; o < t.length; o += 3)
                (e = t[o] | (t[o + 1] << 8) | (t[o + 2] << 16)),
                  (this.words[n] |= (e << s) & 0x3ffffff),
                  (this.words[n + 1] = (e >>> (26 - s)) & 0x3ffffff),
                  (s += 24) >= 26 && ((s -= 26), n++);
            return this._strip();
          }),
          (e.prototype._parseHex = function (t, i, r) {
            (this.length = Math.ceil((t.length - i) / 6)),
              (this.words = Array(this.length));
            for (var h, n = 0; n < this.length; n++) this.words[n] = 0;
            var e = 0,
              o = 0;
            if ("be" === r)
              for (n = t.length - 1; n >= i; n -= 2)
                (h = s(t, i, n) << e),
                  (this.words[o] |= 0x3ffffff & h),
                  e >= 18
                    ? ((e -= 18), (o += 1), (this.words[o] |= h >>> 26))
                    : (e += 8);
            else
              for (
                n = (t.length - i) % 2 == 0 ? i + 1 : i;
                n < t.length;
                n += 2
              )
                (h = s(t, i, n) << e),
                  (this.words[o] |= 0x3ffffff & h),
                  e >= 18
                    ? ((e -= 18), (o += 1), (this.words[o] |= h >>> 26))
                    : (e += 8);
            this._strip();
          }),
          (e.prototype._parseBase = function (t, i, r) {
            (this.words = [0]), (this.length = 1);
            for (var h = 0, n = 1; n <= 0x3ffffff; n *= i) h++;
            h--, (n = (n / i) | 0);
            for (
              var e = t.length - r,
                o = e % h,
                s = Math.min(e, e - o) + r,
                f = 0,
                a = r;
              a < s;
              a += h
            )
              (f = u(t, a, a + h, i)),
                this.imuln(n),
                this.words[0] + f < 0x4000000
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            if (0 !== o) {
              var l = 1;
              for (f = u(t, a, t.length, i), a = 0; a < o; a++) l *= i;
              this.imuln(l),
                this.words[0] + f < 0x4000000
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            }
            this._strip();
          }),
          (e.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (e.prototype._move = function (t) {
            f(t, this);
          }),
          (e.prototype.clone = function () {
            var t = new e(null);
            return this.copy(t), t;
          }),
          (e.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (e.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (e.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "undefined" != typeof Symbol && "function" == typeof Symbol.for)
        )
          try {
            e.prototype[Symbol.for("nodejs.util.inspect.custom")] = a;
          } catch (t) {
            e.prototype.inspect = a;
          }
        else e.prototype.inspect = a;
        function a() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var l,
          m = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          d = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          p = [
            0, 0, 0x2000000, 0x290d741, 0x1000000, 0x2e90edd, 0x39aa400,
            0x267bf47, 0x1000000, 0x290d741, 1e7, 0x12959c3, 0x222c000,
            0x3bd7765, 7529536, 0xadcea1, 0x1000000, 0x1704f61, 0x206fc40,
            0x2cddcf9, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625,
            0xb54ba0, 0xdaf26b, 0x1069c00, 0x138f9ad, 243e5, 0x1b4d89f,
            0x2000000, 0x25528a1, 0x2b54a20, 0x3216b93, 0x39aa400,
          ];
        function M(t, i, r) {
          r.negative = i.negative ^ t.negative;
          var h = (t.length + i.length) | 0;
          (r.length = h), (h = (h - 1) | 0);
          var n = 0 | t.words[0],
            e = 0 | i.words[0],
            o = n * e,
            s = 0x3ffffff & o,
            u = (o / 0x4000000) | 0;
          r.words[0] = s;
          for (var f = 1; f < h; f++) {
            for (
              var a = u >>> 26,
                l = 0x3ffffff & u,
                m = Math.min(f, i.length - 1),
                d = Math.max(0, f - t.length + 1);
              d <= m;
              d++
            ) {
              var p = (f - d) | 0;
              (a +=
                ((o = (n = 0 | t.words[p]) * (e = 0 | i.words[d]) + l) /
                  0x4000000) |
                0),
                (l = 0x3ffffff & o);
            }
            (r.words[f] = 0 | l), (u = 0 | a);
          }
          return 0 !== u ? (r.words[f] = 0 | u) : r.length--, r._strip();
        }
        (e.prototype.toString = function (t, i) {
          if (((i = 0 | i || 1), 16 === (t = t || 10) || "hex" === t)) {
            for (var r = "", n = 0, e = 0, o = 0; o < this.length; o++) {
              var s = this.words[o],
                u = (((s << n) | e) & 0xffffff).toString(16);
              (e = (s >>> (24 - n)) & 0xffffff),
                (n += 2) >= 26 && ((n -= 26), o--),
                (r =
                  0 !== e || o !== this.length - 1
                    ? m[6 - u.length] + u + r
                    : u + r);
            }
            for (0 !== e && (r = e.toString(16) + r); r.length % i != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var f = d[t],
              a = p[t];
            r = "";
            var l = this.clone();
            for (l.negative = 0; !l.isZero(); ) {
              var M = l.modrn(a).toString(t);
              r = (l = l.idivn(a)).isZero() ? M + r : m[f - M.length] + M + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % i != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          h(!1, "Base should be between 2 and 36");
        }),
          (e.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 0x4000000 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 0x10000000000000 + 0x4000000 * this.words[1])
                : this.length > 2 &&
                  h(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (e.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          l &&
            (e.prototype.toBuffer = function (t, i) {
              return this.toArrayLike(l, t, i);
            }),
          (e.prototype.toArray = function (t, i) {
            return this.toArrayLike(Array, t, i);
          }),
          (e.prototype.toArrayLike = function (t, i, r) {
            this._strip();
            var n = this.byteLength(),
              e = r || Math.max(1, n);
            h(n <= e, "byte array longer than desired length"),
              h(e > 0, "Requested array length <= 0");
            var o = t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
            return this["_toArrayLike" + ("le" === i ? "LE" : "BE")](o, n), o;
          }),
          (e.prototype._toArrayLikeLE = function (t, i) {
            for (var r = 0, h = 0, n = 0, e = 0; n < this.length; n++) {
              var o = (this.words[n] << e) | h;
              (t[r++] = 255 & o),
                r < t.length && (t[r++] = (o >> 8) & 255),
                r < t.length && (t[r++] = (o >> 16) & 255),
                6 === e
                  ? (r < t.length && (t[r++] = (o >> 24) & 255),
                    (h = 0),
                    (e = 0))
                  : ((h = o >>> 24), (e += 2));
            }
            if (r < t.length) for (t[r++] = h; r < t.length; ) t[r++] = 0;
          }),
          (e.prototype._toArrayLikeBE = function (t, i) {
            for (
              var r = t.length - 1, h = 0, n = 0, e = 0;
              n < this.length;
              n++
            ) {
              var o = (this.words[n] << e) | h;
              (t[r--] = 255 & o),
                r >= 0 && (t[r--] = (o >> 8) & 255),
                r >= 0 && (t[r--] = (o >> 16) & 255),
                6 === e
                  ? (r >= 0 && (t[r--] = (o >> 24) & 255), (h = 0), (e = 0))
                  : ((h = o >>> 24), (e += 2));
            }
            if (r >= 0) for (t[r--] = h; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (e.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (e.prototype._countBits = function (t) {
                var i = t,
                  r = 0;
                return (
                  i >= 4096 && ((r += 13), (i >>>= 13)),
                  i >= 64 && ((r += 7), (i >>>= 7)),
                  i >= 8 && ((r += 4), (i >>>= 4)),
                  i >= 2 && ((r += 2), (i >>>= 2)),
                  r + i
                );
              }),
          (e.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var i = t,
              r = 0;
            return (
              (8191 & i) == 0 && ((r += 13), (i >>>= 13)),
              (127 & i) == 0 && ((r += 7), (i >>>= 7)),
              (15 & i) == 0 && ((r += 4), (i >>>= 4)),
              (3 & i) == 0 && ((r += 2), (i >>>= 2)),
              (1 & i) == 0 && r++,
              r
            );
          }),
          (e.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              i = this._countBits(t);
            return (this.length - 1) * 26 + i;
          }),
          (e.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, i = 0; i < this.length; i++) {
              var r = this._zeroBits(this.words[i]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (e.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (e.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (e.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (e.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (e.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (e.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (e.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var i = 0; i < t.length; i++)
              this.words[i] = this.words[i] | t.words[i];
            return this._strip();
          }),
          (e.prototype.ior = function (t) {
            return h((this.negative | t.negative) == 0), this.iuor(t);
          }),
          (e.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (e.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (e.prototype.iuand = function (t) {
            var i;
            i = this.length > t.length ? t : this;
            for (var r = 0; r < i.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = i.length), this._strip();
          }),
          (e.prototype.iand = function (t) {
            return h((this.negative | t.negative) == 0), this.iuand(t);
          }),
          (e.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (e.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (e.prototype.iuxor = function (t) {
            this.length > t.length
              ? ((i = this), (r = t))
              : ((i = t), (r = this));
            for (var i, r, h = 0; h < r.length; h++)
              this.words[h] = i.words[h] ^ r.words[h];
            if (this !== i)
              for (; h < i.length; h++) this.words[h] = i.words[h];
            return (this.length = i.length), this._strip();
          }),
          (e.prototype.ixor = function (t) {
            return h((this.negative | t.negative) == 0), this.iuxor(t);
          }),
          (e.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (e.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (e.prototype.inotn = function (t) {
            h("number" == typeof t && t >= 0);
            var i = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(i), r > 0 && i--;
            for (var n = 0; n < i; n++)
              this.words[n] = 0x3ffffff & ~this.words[n];
            return (
              r > 0 &&
                (this.words[n] = ~this.words[n] & (0x3ffffff >> (26 - r))),
              this._strip()
            );
          }),
          (e.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (e.prototype.setn = function (t, i) {
            h("number" == typeof t && t >= 0);
            var r = (t / 26) | 0,
              n = t % 26;
            return (
              this._expand(r + 1),
              i
                ? (this.words[r] = this.words[r] | (1 << n))
                : (this.words[r] = this.words[r] & ~(1 << n)),
              this._strip()
            );
          }),
          (e.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (i = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (i = this.isub(t)),
                (t.negative = 1),
                i._normSign()
              );
            this.length > t.length
              ? ((r = this), (h = t))
              : ((r = t), (h = this));
            for (var i, r, h, n = 0, e = 0; e < h.length; e++)
              (i = (0 | r.words[e]) + (0 | h.words[e]) + n),
                (this.words[e] = 0x3ffffff & i),
                (n = i >>> 26);
            for (; 0 !== n && e < r.length; e++)
              (i = (0 | r.words[e]) + n),
                (this.words[e] = 0x3ffffff & i),
                (n = i >>> 26);
            if (((this.length = r.length), 0 !== n))
              (this.words[this.length] = n), this.length++;
            else if (r !== this)
              for (; e < r.length; e++) this.words[e] = r.words[e];
            return this;
          }),
          (e.prototype.add = function (t) {
            var i;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (i = this.sub(t)), (t.negative ^= 1), i)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (i = t.sub(this)), (this.negative = 1), i)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (e.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var i,
                r,
                h = this.iadd(t);
              return (t.negative = 1), h._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var n = this.cmp(t);
            if (0 === n)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            n > 0 ? ((i = this), (r = t)) : ((i = t), (r = this));
            for (var e = 0, o = 0; o < r.length; o++)
              (e = (h = (0 | i.words[o]) - (0 | r.words[o]) + e) >> 26),
                (this.words[o] = 0x3ffffff & h);
            for (; 0 !== e && o < i.length; o++)
              (e = (h = (0 | i.words[o]) + e) >> 26),
                (this.words[o] = 0x3ffffff & h);
            if (0 === e && o < i.length && i !== this)
              for (; o < i.length; o++) this.words[o] = i.words[o];
            return (
              (this.length = Math.max(this.length, o)),
              i !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (e.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var v = function (t, i, r) {
          var h,
            n,
            e,
            o = t.words,
            s = i.words,
            u = r.words,
            f = 0,
            a = 0 | o[0],
            l = 8191 & a,
            m = a >>> 13,
            d = 0 | o[1],
            p = 8191 & d,
            M = d >>> 13,
            v = 0 | o[2],
            g = 8191 & v,
            c = v >>> 13,
            w = 0 | o[3],
            y = 8191 & w,
            x = w >>> 13,
            b = 0 | o[4],
            _ = 8191 & b,
            k = b >>> 13,
            A = 0 | o[5],
            S = 8191 & A,
            B = A >>> 13,
            R = 0 | o[6],
            q = 8191 & R,
            Z = R >>> 13,
            L = 0 | o[7],
            N = 8191 & L,
            E = L >>> 13,
            I = 0 | o[8],
            z = 8191 & I,
            T = I >>> 13,
            O = 0 | o[9],
            j = 8191 & O,
            C = O >>> 13,
            K = 0 | s[0],
            P = 8191 & K,
            F = K >>> 13,
            U = 0 | s[1],
            D = 8191 & U,
            H = U >>> 13,
            J = 0 | s[2],
            G = 8191 & J,
            Q = J >>> 13,
            V = 0 | s[3],
            W = 8191 & V,
            X = V >>> 13,
            Y = 0 | s[4],
            $ = 8191 & Y,
            tt = Y >>> 13,
            ti = 0 | s[5],
            tr = 8191 & ti,
            th = ti >>> 13,
            tn = 0 | s[6],
            te = 8191 & tn,
            to = tn >>> 13,
            ts = 0 | s[7],
            tu = 8191 & ts,
            tf = ts >>> 13,
            ta = 0 | s[8],
            tl = 8191 & ta,
            tm = ta >>> 13,
            td = 0 | s[9],
            tp = 8191 & td,
            tM = td >>> 13;
          (r.negative = t.negative ^ i.negative),
            (r.length = 19),
            (h = Math.imul(l, P));
          var tv =
            (((f + h) | 0) +
              ((8191 & (n = ((n = Math.imul(l, F)) + Math.imul(m, P)) | 0)) <<
                13)) |
            0;
          (f = ((((e = Math.imul(m, F)) + (n >>> 13)) | 0) + (tv >>> 26)) | 0),
            (tv &= 0x3ffffff),
            (h = Math.imul(p, P)),
            (n = ((n = Math.imul(p, F)) + Math.imul(M, P)) | 0),
            (e = Math.imul(M, F)),
            (h = (h + Math.imul(l, D)) | 0);
          var tg =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, H)) | 0) + Math.imul(m, D)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(m, H)) | 0) + (n >>> 13)) | 0) +
              (tg >>> 26)) |
            0),
            (tg &= 0x3ffffff),
            (h = Math.imul(g, P)),
            (n = ((n = Math.imul(g, F)) + Math.imul(c, P)) | 0),
            (e = Math.imul(c, F)),
            (h = (h + Math.imul(p, D)) | 0),
            (n = ((n = (n + Math.imul(p, H)) | 0) + Math.imul(M, D)) | 0),
            (e = (e + Math.imul(M, H)) | 0),
            (h = (h + Math.imul(l, G)) | 0);
          var tc =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, Q)) | 0) + Math.imul(m, G)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(m, Q)) | 0) + (n >>> 13)) | 0) +
              (tc >>> 26)) |
            0),
            (tc &= 0x3ffffff),
            (h = Math.imul(y, P)),
            (n = ((n = Math.imul(y, F)) + Math.imul(x, P)) | 0),
            (e = Math.imul(x, F)),
            (h = (h + Math.imul(g, D)) | 0),
            (n = ((n = (n + Math.imul(g, H)) | 0) + Math.imul(c, D)) | 0),
            (e = (e + Math.imul(c, H)) | 0),
            (h = (h + Math.imul(p, G)) | 0),
            (n = ((n = (n + Math.imul(p, Q)) | 0) + Math.imul(M, G)) | 0),
            (e = (e + Math.imul(M, Q)) | 0),
            (h = (h + Math.imul(l, W)) | 0);
          var tw =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, X)) | 0) + Math.imul(m, W)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(m, X)) | 0) + (n >>> 13)) | 0) +
              (tw >>> 26)) |
            0),
            (tw &= 0x3ffffff),
            (h = Math.imul(_, P)),
            (n = ((n = Math.imul(_, F)) + Math.imul(k, P)) | 0),
            (e = Math.imul(k, F)),
            (h = (h + Math.imul(y, D)) | 0),
            (n = ((n = (n + Math.imul(y, H)) | 0) + Math.imul(x, D)) | 0),
            (e = (e + Math.imul(x, H)) | 0),
            (h = (h + Math.imul(g, G)) | 0),
            (n = ((n = (n + Math.imul(g, Q)) | 0) + Math.imul(c, G)) | 0),
            (e = (e + Math.imul(c, Q)) | 0),
            (h = (h + Math.imul(p, W)) | 0),
            (n = ((n = (n + Math.imul(p, X)) | 0) + Math.imul(M, W)) | 0),
            (e = (e + Math.imul(M, X)) | 0),
            (h = (h + Math.imul(l, $)) | 0);
          var ty =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, tt)) | 0) + Math.imul(m, $)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(m, tt)) | 0) + (n >>> 13)) | 0) +
              (ty >>> 26)) |
            0),
            (ty &= 0x3ffffff),
            (h = Math.imul(S, P)),
            (n = ((n = Math.imul(S, F)) + Math.imul(B, P)) | 0),
            (e = Math.imul(B, F)),
            (h = (h + Math.imul(_, D)) | 0),
            (n = ((n = (n + Math.imul(_, H)) | 0) + Math.imul(k, D)) | 0),
            (e = (e + Math.imul(k, H)) | 0),
            (h = (h + Math.imul(y, G)) | 0),
            (n = ((n = (n + Math.imul(y, Q)) | 0) + Math.imul(x, G)) | 0),
            (e = (e + Math.imul(x, Q)) | 0),
            (h = (h + Math.imul(g, W)) | 0),
            (n = ((n = (n + Math.imul(g, X)) | 0) + Math.imul(c, W)) | 0),
            (e = (e + Math.imul(c, X)) | 0),
            (h = (h + Math.imul(p, $)) | 0),
            (n = ((n = (n + Math.imul(p, tt)) | 0) + Math.imul(M, $)) | 0),
            (e = (e + Math.imul(M, tt)) | 0),
            (h = (h + Math.imul(l, tr)) | 0);
          var tx =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, th)) | 0) + Math.imul(m, tr)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(m, th)) | 0) + (n >>> 13)) | 0) +
              (tx >>> 26)) |
            0),
            (tx &= 0x3ffffff),
            (h = Math.imul(q, P)),
            (n = ((n = Math.imul(q, F)) + Math.imul(Z, P)) | 0),
            (e = Math.imul(Z, F)),
            (h = (h + Math.imul(S, D)) | 0),
            (n = ((n = (n + Math.imul(S, H)) | 0) + Math.imul(B, D)) | 0),
            (e = (e + Math.imul(B, H)) | 0),
            (h = (h + Math.imul(_, G)) | 0),
            (n = ((n = (n + Math.imul(_, Q)) | 0) + Math.imul(k, G)) | 0),
            (e = (e + Math.imul(k, Q)) | 0),
            (h = (h + Math.imul(y, W)) | 0),
            (n = ((n = (n + Math.imul(y, X)) | 0) + Math.imul(x, W)) | 0),
            (e = (e + Math.imul(x, X)) | 0),
            (h = (h + Math.imul(g, $)) | 0),
            (n = ((n = (n + Math.imul(g, tt)) | 0) + Math.imul(c, $)) | 0),
            (e = (e + Math.imul(c, tt)) | 0),
            (h = (h + Math.imul(p, tr)) | 0),
            (n = ((n = (n + Math.imul(p, th)) | 0) + Math.imul(M, tr)) | 0),
            (e = (e + Math.imul(M, th)) | 0),
            (h = (h + Math.imul(l, te)) | 0);
          var tb =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, to)) | 0) + Math.imul(m, te)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(m, to)) | 0) + (n >>> 13)) | 0) +
              (tb >>> 26)) |
            0),
            (tb &= 0x3ffffff),
            (h = Math.imul(N, P)),
            (n = ((n = Math.imul(N, F)) + Math.imul(E, P)) | 0),
            (e = Math.imul(E, F)),
            (h = (h + Math.imul(q, D)) | 0),
            (n = ((n = (n + Math.imul(q, H)) | 0) + Math.imul(Z, D)) | 0),
            (e = (e + Math.imul(Z, H)) | 0),
            (h = (h + Math.imul(S, G)) | 0),
            (n = ((n = (n + Math.imul(S, Q)) | 0) + Math.imul(B, G)) | 0),
            (e = (e + Math.imul(B, Q)) | 0),
            (h = (h + Math.imul(_, W)) | 0),
            (n = ((n = (n + Math.imul(_, X)) | 0) + Math.imul(k, W)) | 0),
            (e = (e + Math.imul(k, X)) | 0),
            (h = (h + Math.imul(y, $)) | 0),
            (n = ((n = (n + Math.imul(y, tt)) | 0) + Math.imul(x, $)) | 0),
            (e = (e + Math.imul(x, tt)) | 0),
            (h = (h + Math.imul(g, tr)) | 0),
            (n = ((n = (n + Math.imul(g, th)) | 0) + Math.imul(c, tr)) | 0),
            (e = (e + Math.imul(c, th)) | 0),
            (h = (h + Math.imul(p, te)) | 0),
            (n = ((n = (n + Math.imul(p, to)) | 0) + Math.imul(M, te)) | 0),
            (e = (e + Math.imul(M, to)) | 0),
            (h = (h + Math.imul(l, tu)) | 0);
          var t_ =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, tf)) | 0) + Math.imul(m, tu)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(m, tf)) | 0) + (n >>> 13)) | 0) +
              (t_ >>> 26)) |
            0),
            (t_ &= 0x3ffffff),
            (h = Math.imul(z, P)),
            (n = ((n = Math.imul(z, F)) + Math.imul(T, P)) | 0),
            (e = Math.imul(T, F)),
            (h = (h + Math.imul(N, D)) | 0),
            (n = ((n = (n + Math.imul(N, H)) | 0) + Math.imul(E, D)) | 0),
            (e = (e + Math.imul(E, H)) | 0),
            (h = (h + Math.imul(q, G)) | 0),
            (n = ((n = (n + Math.imul(q, Q)) | 0) + Math.imul(Z, G)) | 0),
            (e = (e + Math.imul(Z, Q)) | 0),
            (h = (h + Math.imul(S, W)) | 0),
            (n = ((n = (n + Math.imul(S, X)) | 0) + Math.imul(B, W)) | 0),
            (e = (e + Math.imul(B, X)) | 0),
            (h = (h + Math.imul(_, $)) | 0),
            (n = ((n = (n + Math.imul(_, tt)) | 0) + Math.imul(k, $)) | 0),
            (e = (e + Math.imul(k, tt)) | 0),
            (h = (h + Math.imul(y, tr)) | 0),
            (n = ((n = (n + Math.imul(y, th)) | 0) + Math.imul(x, tr)) | 0),
            (e = (e + Math.imul(x, th)) | 0),
            (h = (h + Math.imul(g, te)) | 0),
            (n = ((n = (n + Math.imul(g, to)) | 0) + Math.imul(c, te)) | 0),
            (e = (e + Math.imul(c, to)) | 0),
            (h = (h + Math.imul(p, tu)) | 0),
            (n = ((n = (n + Math.imul(p, tf)) | 0) + Math.imul(M, tu)) | 0),
            (e = (e + Math.imul(M, tf)) | 0),
            (h = (h + Math.imul(l, tl)) | 0);
          var tk =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, tm)) | 0) + Math.imul(m, tl)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(m, tm)) | 0) + (n >>> 13)) | 0) +
              (tk >>> 26)) |
            0),
            (tk &= 0x3ffffff),
            (h = Math.imul(j, P)),
            (n = ((n = Math.imul(j, F)) + Math.imul(C, P)) | 0),
            (e = Math.imul(C, F)),
            (h = (h + Math.imul(z, D)) | 0),
            (n = ((n = (n + Math.imul(z, H)) | 0) + Math.imul(T, D)) | 0),
            (e = (e + Math.imul(T, H)) | 0),
            (h = (h + Math.imul(N, G)) | 0),
            (n = ((n = (n + Math.imul(N, Q)) | 0) + Math.imul(E, G)) | 0),
            (e = (e + Math.imul(E, Q)) | 0),
            (h = (h + Math.imul(q, W)) | 0),
            (n = ((n = (n + Math.imul(q, X)) | 0) + Math.imul(Z, W)) | 0),
            (e = (e + Math.imul(Z, X)) | 0),
            (h = (h + Math.imul(S, $)) | 0),
            (n = ((n = (n + Math.imul(S, tt)) | 0) + Math.imul(B, $)) | 0),
            (e = (e + Math.imul(B, tt)) | 0),
            (h = (h + Math.imul(_, tr)) | 0),
            (n = ((n = (n + Math.imul(_, th)) | 0) + Math.imul(k, tr)) | 0),
            (e = (e + Math.imul(k, th)) | 0),
            (h = (h + Math.imul(y, te)) | 0),
            (n = ((n = (n + Math.imul(y, to)) | 0) + Math.imul(x, te)) | 0),
            (e = (e + Math.imul(x, to)) | 0),
            (h = (h + Math.imul(g, tu)) | 0),
            (n = ((n = (n + Math.imul(g, tf)) | 0) + Math.imul(c, tu)) | 0),
            (e = (e + Math.imul(c, tf)) | 0),
            (h = (h + Math.imul(p, tl)) | 0),
            (n = ((n = (n + Math.imul(p, tm)) | 0) + Math.imul(M, tl)) | 0),
            (e = (e + Math.imul(M, tm)) | 0),
            (h = (h + Math.imul(l, tp)) | 0);
          var tA =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, tM)) | 0) + Math.imul(m, tp)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(m, tM)) | 0) + (n >>> 13)) | 0) +
              (tA >>> 26)) |
            0),
            (tA &= 0x3ffffff),
            (h = Math.imul(j, D)),
            (n = ((n = Math.imul(j, H)) + Math.imul(C, D)) | 0),
            (e = Math.imul(C, H)),
            (h = (h + Math.imul(z, G)) | 0),
            (n = ((n = (n + Math.imul(z, Q)) | 0) + Math.imul(T, G)) | 0),
            (e = (e + Math.imul(T, Q)) | 0),
            (h = (h + Math.imul(N, W)) | 0),
            (n = ((n = (n + Math.imul(N, X)) | 0) + Math.imul(E, W)) | 0),
            (e = (e + Math.imul(E, X)) | 0),
            (h = (h + Math.imul(q, $)) | 0),
            (n = ((n = (n + Math.imul(q, tt)) | 0) + Math.imul(Z, $)) | 0),
            (e = (e + Math.imul(Z, tt)) | 0),
            (h = (h + Math.imul(S, tr)) | 0),
            (n = ((n = (n + Math.imul(S, th)) | 0) + Math.imul(B, tr)) | 0),
            (e = (e + Math.imul(B, th)) | 0),
            (h = (h + Math.imul(_, te)) | 0),
            (n = ((n = (n + Math.imul(_, to)) | 0) + Math.imul(k, te)) | 0),
            (e = (e + Math.imul(k, to)) | 0),
            (h = (h + Math.imul(y, tu)) | 0),
            (n = ((n = (n + Math.imul(y, tf)) | 0) + Math.imul(x, tu)) | 0),
            (e = (e + Math.imul(x, tf)) | 0),
            (h = (h + Math.imul(g, tl)) | 0),
            (n = ((n = (n + Math.imul(g, tm)) | 0) + Math.imul(c, tl)) | 0),
            (e = (e + Math.imul(c, tm)) | 0),
            (h = (h + Math.imul(p, tp)) | 0);
          var tS =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(p, tM)) | 0) + Math.imul(M, tp)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(M, tM)) | 0) + (n >>> 13)) | 0) +
              (tS >>> 26)) |
            0),
            (tS &= 0x3ffffff),
            (h = Math.imul(j, G)),
            (n = ((n = Math.imul(j, Q)) + Math.imul(C, G)) | 0),
            (e = Math.imul(C, Q)),
            (h = (h + Math.imul(z, W)) | 0),
            (n = ((n = (n + Math.imul(z, X)) | 0) + Math.imul(T, W)) | 0),
            (e = (e + Math.imul(T, X)) | 0),
            (h = (h + Math.imul(N, $)) | 0),
            (n = ((n = (n + Math.imul(N, tt)) | 0) + Math.imul(E, $)) | 0),
            (e = (e + Math.imul(E, tt)) | 0),
            (h = (h + Math.imul(q, tr)) | 0),
            (n = ((n = (n + Math.imul(q, th)) | 0) + Math.imul(Z, tr)) | 0),
            (e = (e + Math.imul(Z, th)) | 0),
            (h = (h + Math.imul(S, te)) | 0),
            (n = ((n = (n + Math.imul(S, to)) | 0) + Math.imul(B, te)) | 0),
            (e = (e + Math.imul(B, to)) | 0),
            (h = (h + Math.imul(_, tu)) | 0),
            (n = ((n = (n + Math.imul(_, tf)) | 0) + Math.imul(k, tu)) | 0),
            (e = (e + Math.imul(k, tf)) | 0),
            (h = (h + Math.imul(y, tl)) | 0),
            (n = ((n = (n + Math.imul(y, tm)) | 0) + Math.imul(x, tl)) | 0),
            (e = (e + Math.imul(x, tm)) | 0),
            (h = (h + Math.imul(g, tp)) | 0);
          var tB =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(g, tM)) | 0) + Math.imul(c, tp)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(c, tM)) | 0) + (n >>> 13)) | 0) +
              (tB >>> 26)) |
            0),
            (tB &= 0x3ffffff),
            (h = Math.imul(j, W)),
            (n = ((n = Math.imul(j, X)) + Math.imul(C, W)) | 0),
            (e = Math.imul(C, X)),
            (h = (h + Math.imul(z, $)) | 0),
            (n = ((n = (n + Math.imul(z, tt)) | 0) + Math.imul(T, $)) | 0),
            (e = (e + Math.imul(T, tt)) | 0),
            (h = (h + Math.imul(N, tr)) | 0),
            (n = ((n = (n + Math.imul(N, th)) | 0) + Math.imul(E, tr)) | 0),
            (e = (e + Math.imul(E, th)) | 0),
            (h = (h + Math.imul(q, te)) | 0),
            (n = ((n = (n + Math.imul(q, to)) | 0) + Math.imul(Z, te)) | 0),
            (e = (e + Math.imul(Z, to)) | 0),
            (h = (h + Math.imul(S, tu)) | 0),
            (n = ((n = (n + Math.imul(S, tf)) | 0) + Math.imul(B, tu)) | 0),
            (e = (e + Math.imul(B, tf)) | 0),
            (h = (h + Math.imul(_, tl)) | 0),
            (n = ((n = (n + Math.imul(_, tm)) | 0) + Math.imul(k, tl)) | 0),
            (e = (e + Math.imul(k, tm)) | 0),
            (h = (h + Math.imul(y, tp)) | 0);
          var tR =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(y, tM)) | 0) + Math.imul(x, tp)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(x, tM)) | 0) + (n >>> 13)) | 0) +
              (tR >>> 26)) |
            0),
            (tR &= 0x3ffffff),
            (h = Math.imul(j, $)),
            (n = ((n = Math.imul(j, tt)) + Math.imul(C, $)) | 0),
            (e = Math.imul(C, tt)),
            (h = (h + Math.imul(z, tr)) | 0),
            (n = ((n = (n + Math.imul(z, th)) | 0) + Math.imul(T, tr)) | 0),
            (e = (e + Math.imul(T, th)) | 0),
            (h = (h + Math.imul(N, te)) | 0),
            (n = ((n = (n + Math.imul(N, to)) | 0) + Math.imul(E, te)) | 0),
            (e = (e + Math.imul(E, to)) | 0),
            (h = (h + Math.imul(q, tu)) | 0),
            (n = ((n = (n + Math.imul(q, tf)) | 0) + Math.imul(Z, tu)) | 0),
            (e = (e + Math.imul(Z, tf)) | 0),
            (h = (h + Math.imul(S, tl)) | 0),
            (n = ((n = (n + Math.imul(S, tm)) | 0) + Math.imul(B, tl)) | 0),
            (e = (e + Math.imul(B, tm)) | 0),
            (h = (h + Math.imul(_, tp)) | 0);
          var tq =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(_, tM)) | 0) + Math.imul(k, tp)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(k, tM)) | 0) + (n >>> 13)) | 0) +
              (tq >>> 26)) |
            0),
            (tq &= 0x3ffffff),
            (h = Math.imul(j, tr)),
            (n = ((n = Math.imul(j, th)) + Math.imul(C, tr)) | 0),
            (e = Math.imul(C, th)),
            (h = (h + Math.imul(z, te)) | 0),
            (n = ((n = (n + Math.imul(z, to)) | 0) + Math.imul(T, te)) | 0),
            (e = (e + Math.imul(T, to)) | 0),
            (h = (h + Math.imul(N, tu)) | 0),
            (n = ((n = (n + Math.imul(N, tf)) | 0) + Math.imul(E, tu)) | 0),
            (e = (e + Math.imul(E, tf)) | 0),
            (h = (h + Math.imul(q, tl)) | 0),
            (n = ((n = (n + Math.imul(q, tm)) | 0) + Math.imul(Z, tl)) | 0),
            (e = (e + Math.imul(Z, tm)) | 0),
            (h = (h + Math.imul(S, tp)) | 0);
          var tZ =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(S, tM)) | 0) + Math.imul(B, tp)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(B, tM)) | 0) + (n >>> 13)) | 0) +
              (tZ >>> 26)) |
            0),
            (tZ &= 0x3ffffff),
            (h = Math.imul(j, te)),
            (n = ((n = Math.imul(j, to)) + Math.imul(C, te)) | 0),
            (e = Math.imul(C, to)),
            (h = (h + Math.imul(z, tu)) | 0),
            (n = ((n = (n + Math.imul(z, tf)) | 0) + Math.imul(T, tu)) | 0),
            (e = (e + Math.imul(T, tf)) | 0),
            (h = (h + Math.imul(N, tl)) | 0),
            (n = ((n = (n + Math.imul(N, tm)) | 0) + Math.imul(E, tl)) | 0),
            (e = (e + Math.imul(E, tm)) | 0),
            (h = (h + Math.imul(q, tp)) | 0);
          var tL =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(q, tM)) | 0) + Math.imul(Z, tp)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(Z, tM)) | 0) + (n >>> 13)) | 0) +
              (tL >>> 26)) |
            0),
            (tL &= 0x3ffffff),
            (h = Math.imul(j, tu)),
            (n = ((n = Math.imul(j, tf)) + Math.imul(C, tu)) | 0),
            (e = Math.imul(C, tf)),
            (h = (h + Math.imul(z, tl)) | 0),
            (n = ((n = (n + Math.imul(z, tm)) | 0) + Math.imul(T, tl)) | 0),
            (e = (e + Math.imul(T, tm)) | 0),
            (h = (h + Math.imul(N, tp)) | 0);
          var tN =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(N, tM)) | 0) + Math.imul(E, tp)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(E, tM)) | 0) + (n >>> 13)) | 0) +
              (tN >>> 26)) |
            0),
            (tN &= 0x3ffffff),
            (h = Math.imul(j, tl)),
            (n = ((n = Math.imul(j, tm)) + Math.imul(C, tl)) | 0),
            (e = Math.imul(C, tm)),
            (h = (h + Math.imul(z, tp)) | 0);
          var tE =
            (((f + h) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(z, tM)) | 0) + Math.imul(T, tp)) | 0)) <<
                13)) |
            0;
          (f =
            ((((e = (e + Math.imul(T, tM)) | 0) + (n >>> 13)) | 0) +
              (tE >>> 26)) |
            0),
            (tE &= 0x3ffffff),
            (h = Math.imul(j, tp));
          var tI =
            (((f + h) | 0) +
              ((8191 & (n = ((n = Math.imul(j, tM)) + Math.imul(C, tp)) | 0)) <<
                13)) |
            0;
          return (
            (f =
              ((((e = Math.imul(C, tM)) + (n >>> 13)) | 0) + (tI >>> 26)) | 0),
            (tI &= 0x3ffffff),
            (u[0] = tv),
            (u[1] = tg),
            (u[2] = tc),
            (u[3] = tw),
            (u[4] = ty),
            (u[5] = tx),
            (u[6] = tb),
            (u[7] = t_),
            (u[8] = tk),
            (u[9] = tA),
            (u[10] = tS),
            (u[11] = tB),
            (u[12] = tR),
            (u[13] = tq),
            (u[14] = tZ),
            (u[15] = tL),
            (u[16] = tN),
            (u[17] = tE),
            (u[18] = tI),
            0 !== f && ((u[19] = f), r.length++),
            r
          );
        };
        function g(t, i, r) {
          (r.negative = i.negative ^ t.negative),
            (r.length = t.length + i.length);
          for (var h = 0, n = 0, e = 0; e < r.length - 1; e++) {
            var o = n;
            n = 0;
            for (
              var s = 0x3ffffff & h,
                u = Math.min(e, i.length - 1),
                f = Math.max(0, e - t.length + 1);
              f <= u;
              f++
            ) {
              var a = e - f,
                l = (0 | t.words[a]) * (0 | i.words[f]),
                m = 0x3ffffff & l;
              (o = (o + ((l / 0x4000000) | 0)) | 0),
                (s = 0x3ffffff & (m = (m + s) | 0)),
                (n += (o = (o + (m >>> 26)) | 0) >>> 26),
                (o &= 0x3ffffff);
            }
            (r.words[e] = s), (h = o), (o = n);
          }
          return 0 !== h ? (r.words[e] = h) : r.length--, r._strip();
        }
        function c(t, i) {
          (this.x = t), (this.y = i);
        }
        Math.imul || (v = M),
          (e.prototype.mulTo = function (t, i) {
            var r,
              h = this.length + t.length;
            return (
              10 === this.length && 10 === t.length
                ? (r = v(this, t, i))
                : h < 63
                ? (r = M(this, t, i))
                : (r = g(this, t, i)),
              r
            );
          }),
          (c.prototype.makeRBT = function (t) {
            for (
              var i = Array(t), r = e.prototype._countBits(t) - 1, h = 0;
              h < t;
              h++
            )
              i[h] = this.revBin(h, r, t);
            return i;
          }),
          (c.prototype.revBin = function (t, i, r) {
            if (0 === t || t === r - 1) return t;
            for (var h = 0, n = 0; n < i; n++)
              (h |= (1 & t) << (i - n - 1)), (t >>= 1);
            return h;
          }),
          (c.prototype.permute = function (t, i, r, h, n, e) {
            for (var o = 0; o < e; o++) (h[o] = i[t[o]]), (n[o] = r[t[o]]);
          }),
          (c.prototype.transform = function (t, i, r, h, n, e) {
            this.permute(e, t, i, r, h, n);
            for (var o = 1; o < n; o <<= 1)
              for (
                var s = o << 1,
                  u = Math.cos((2 * Math.PI) / s),
                  f = Math.sin((2 * Math.PI) / s),
                  a = 0;
                a < n;
                a += s
              )
                for (var l = u, m = f, d = 0; d < o; d++) {
                  var p = r[a + d],
                    M = h[a + d],
                    v = r[a + d + o],
                    g = h[a + d + o],
                    c = l * v - m * g;
                  (g = l * g + m * v),
                    (v = c),
                    (r[a + d] = p + v),
                    (h[a + d] = M + g),
                    (r[a + d + o] = p - v),
                    (h[a + d + o] = M - g),
                    d !== s &&
                      ((c = u * l - f * m), (m = u * m + f * l), (l = c));
                }
          }),
          (c.prototype.guessLen13b = function (t, i) {
            var r = 1 | Math.max(i, t),
              h = 1 & r,
              n = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) n++;
            return 1 << (n + 1 + h);
          }),
          (c.prototype.conjugate = function (t, i, r) {
            if (!(r <= 1))
              for (var h = 0; h < r / 2; h++) {
                var n = t[h];
                (t[h] = t[r - h - 1]),
                  (t[r - h - 1] = n),
                  (n = i[h]),
                  (i[h] = -i[r - h - 1]),
                  (i[r - h - 1] = -n);
              }
          }),
          (c.prototype.normalize13b = function (t, i) {
            for (var r = 0, h = 0; h < i / 2; h++) {
              var n =
                8192 * Math.round(t[2 * h + 1] / i) +
                Math.round(t[2 * h] / i) +
                r;
              (t[h] = 0x3ffffff & n),
                (r = n < 0x4000000 ? 0 : (n / 0x4000000) | 0);
            }
            return t;
          }),
          (c.prototype.convert13b = function (t, i, r, n) {
            for (var e = 0, o = 0; o < i; o++)
              (e += 0 | t[o]),
                (r[2 * o] = 8191 & e),
                (e >>>= 13),
                (r[2 * o + 1] = 8191 & e),
                (e >>>= 13);
            for (o = 2 * i; o < n; ++o) r[o] = 0;
            h(0 === e), h((-8192 & e) == 0);
          }),
          (c.prototype.stub = function (t) {
            for (var i = Array(t), r = 0; r < t; r++) i[r] = 0;
            return i;
          }),
          (c.prototype.mulp = function (t, i, r) {
            var h = 2 * this.guessLen13b(t.length, i.length),
              n = this.makeRBT(h),
              e = this.stub(h),
              o = Array(h),
              s = Array(h),
              u = Array(h),
              f = Array(h),
              a = Array(h),
              l = Array(h),
              m = r.words;
            (m.length = h),
              this.convert13b(t.words, t.length, o, h),
              this.convert13b(i.words, i.length, f, h),
              this.transform(o, e, s, u, h, n),
              this.transform(f, e, a, l, h, n);
            for (var d = 0; d < h; d++) {
              var p = s[d] * a[d] - u[d] * l[d];
              (u[d] = s[d] * l[d] + u[d] * a[d]), (s[d] = p);
            }
            return (
              this.conjugate(s, u, h),
              this.transform(s, u, m, e, h, n),
              this.conjugate(m, e, h),
              this.normalize13b(m, h),
              (r.negative = t.negative ^ i.negative),
              (r.length = t.length + i.length),
              r._strip()
            );
          }),
          (e.prototype.mul = function (t) {
            var i = new e(null);
            return (i.words = Array(this.length + t.length)), this.mulTo(t, i);
          }),
          (e.prototype.mulf = function (t) {
            var i = new e(null);
            return (i.words = Array(this.length + t.length)), g(this, t, i);
          }),
          (e.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (e.prototype.imuln = function (t) {
            var i = t < 0;
            i && (t = -t), h("number" == typeof t), h(t < 0x4000000);
            for (var r = 0, n = 0; n < this.length; n++) {
              var e = (0 | this.words[n]) * t,
                o = (0x3ffffff & e) + (0x3ffffff & r);
              (r >>= 26),
                (r += ((e / 0x4000000) | 0) + (o >>> 26)),
                (this.words[n] = 0x3ffffff & o);
            }
            return (
              0 !== r && ((this.words[n] = r), this.length++),
              (this.length = 0 === t ? 1 : this.length),
              i ? this.ineg() : this
            );
          }),
          (e.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (e.prototype.sqr = function () {
            return this.mul(this);
          }),
          (e.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (e.prototype.pow = function (t) {
            var i = (function (t) {
              for (var i = Array(t.bitLength()), r = 0; r < i.length; r++) {
                var h = (r / 26) | 0,
                  n = r % 26;
                i[r] = (t.words[h] >>> n) & 1;
              }
              return i;
            })(t);
            if (0 === i.length) return new e(1);
            for (
              var r = this, h = 0;
              h < i.length && 0 === i[h];
              h++, r = r.sqr()
            );
            if (++h < i.length)
              for (var n = r.sqr(); h < i.length; h++, n = n.sqr())
                0 !== i[h] && (r = r.mul(n));
            return r;
          }),
          (e.prototype.iushln = function (t) {
            h("number" == typeof t && t >= 0);
            var i,
              r = t % 26,
              n = (t - r) / 26,
              e = (0x3ffffff >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var o = 0;
              for (i = 0; i < this.length; i++) {
                var s = this.words[i] & e,
                  u = ((0 | this.words[i]) - s) << r;
                (this.words[i] = u | o), (o = s >>> (26 - r));
              }
              o && ((this.words[i] = o), this.length++);
            }
            if (0 !== n) {
              for (i = this.length - 1; i >= 0; i--)
                this.words[i + n] = this.words[i];
              for (i = 0; i < n; i++) this.words[i] = 0;
              this.length += n;
            }
            return this._strip();
          }),
          (e.prototype.ishln = function (t) {
            return h(0 === this.negative), this.iushln(t);
          }),
          (e.prototype.iushrn = function (t, i, r) {
            h("number" == typeof t && t >= 0);
            var n = i ? (i - (i % 26)) / 26 : 0,
              e = t % 26,
              o = Math.min((t - e) / 26, this.length),
              s = 0x3ffffff ^ ((0x3ffffff >>> e) << e);
            if (((n -= o), (n = Math.max(0, n)), r)) {
              for (var u = 0; u < o; u++) r.words[u] = this.words[u];
              r.length = o;
            }
            if (0 === o);
            else if (this.length > o)
              for (this.length -= o, u = 0; u < this.length; u++)
                this.words[u] = this.words[u + o];
            else (this.words[0] = 0), (this.length = 1);
            var f = 0;
            for (u = this.length - 1; u >= 0 && (0 !== f || u >= n); u--) {
              var a = 0 | this.words[u];
              (this.words[u] = (f << (26 - e)) | (a >>> e)), (f = a & s);
            }
            return (
              r && 0 !== f && (r.words[r.length++] = f),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (e.prototype.ishrn = function (t, i, r) {
            return h(0 === this.negative), this.iushrn(t, i, r);
          }),
          (e.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (e.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (e.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (e.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (e.prototype.testn = function (t) {
            h("number" == typeof t && t >= 0);
            var i = t % 26,
              r = (t - i) / 26;
            return !(this.length <= r) && !!(this.words[r] & (1 << i));
          }),
          (e.prototype.imaskn = function (t) {
            h("number" == typeof t && t >= 0);
            var i = t % 26,
              r = (t - i) / 26;
            return (h(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= r)
              ? this
              : (0 !== i && r++,
                (this.length = Math.min(r, this.length)),
                0 !== i &&
                  (this.words[this.length - 1] &=
                    0x3ffffff ^ ((0x3ffffff >>> i) << i)),
                this._strip());
          }),
          (e.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (e.prototype.iaddn = function (t) {
            return (h("number" == typeof t), h(t < 0x4000000), t < 0)
              ? this.isubn(-t)
              : 0 !== this.negative
              ? (1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0))
                  : ((this.negative = 0), this.isubn(t), (this.negative = 1)),
                this)
              : this._iaddn(t);
          }),
          (e.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++)
              (this.words[i] -= 0x4000000),
                i === this.length - 1
                  ? (this.words[i + 1] = 1)
                  : this.words[i + 1]++;
            return (this.length = Math.max(this.length, i + 1)), this;
          }),
          (e.prototype.isubn = function (t) {
            if ((h("number" == typeof t), h(t < 0x4000000), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var i = 0; i < this.length && this.words[i] < 0; i++)
                (this.words[i] += 0x4000000), (this.words[i + 1] -= 1);
            return this._strip();
          }),
          (e.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (e.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (e.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (e.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (e.prototype._ishlnsubmul = function (t, i, r) {
            var n,
              e,
              o = t.length + r;
            this._expand(o);
            var s = 0;
            for (n = 0; n < t.length; n++) {
              e = (0 | this.words[n + r]) + s;
              var u = (0 | t.words[n]) * i;
              (e -= 0x3ffffff & u),
                (s = (e >> 26) - ((u / 0x4000000) | 0)),
                (this.words[n + r] = 0x3ffffff & e);
            }
            for (; n < this.length - r; n++)
              (s = (e = (0 | this.words[n + r]) + s) >> 26),
                (this.words[n + r] = 0x3ffffff & e);
            if (0 === s) return this._strip();
            for (h(-1 === s), s = 0, n = 0; n < this.length; n++)
              (s = (e = -(0 | this.words[n]) + s) >> 26),
                (this.words[n] = 0x3ffffff & e);
            return (this.negative = 1), this._strip();
          }),
          (e.prototype._wordDiv = function (t, i) {
            var r,
              h = this.length - t.length,
              n = this.clone(),
              o = t,
              s = 0 | o.words[o.length - 1];
            0 != (h = 26 - this._countBits(s)) &&
              ((o = o.ushln(h)), n.iushln(h), (s = 0 | o.words[o.length - 1]));
            var u = n.length - o.length;
            if ("mod" !== i) {
              ((r = new e(null)).length = u + 1), (r.words = Array(r.length));
              for (var f = 0; f < r.length; f++) r.words[f] = 0;
            }
            var a = n.clone()._ishlnsubmul(o, 1, u);
            0 === a.negative && ((n = a), r && (r.words[u] = 1));
            for (var l = u - 1; l >= 0; l--) {
              var m =
                (0 | n.words[o.length + l]) * 0x4000000 +
                (0 | n.words[o.length + l - 1]);
              for (
                m = Math.min((m / s) | 0, 0x3ffffff), n._ishlnsubmul(o, m, l);
                0 !== n.negative;

              )
                m--,
                  (n.negative = 0),
                  n._ishlnsubmul(o, 1, l),
                  n.isZero() || (n.negative ^= 1);
              r && (r.words[l] = m);
            }
            return (
              r && r._strip(),
              n._strip(),
              "div" !== i && 0 !== h && n.iushrn(h),
              { div: r || null, mod: n }
            );
          }),
          (e.prototype.divmod = function (t, i, r) {
            var n, o, s;
            return (h(!t.isZero()), this.isZero())
              ? { div: new e(0), mod: new e(0) }
              : 0 !== this.negative && 0 === t.negative
              ? ((s = this.neg().divmod(t, i)),
                "mod" !== i && (n = s.div.neg()),
                "div" !== i &&
                  ((o = s.mod.neg()), r && 0 !== o.negative && o.iadd(t)),
                { div: n, mod: o })
              : 0 === this.negative && 0 !== t.negative
              ? ((s = this.divmod(t.neg(), i)),
                "mod" !== i && (n = s.div.neg()),
                { div: n, mod: s.mod })
              : (this.negative & t.negative) != 0
              ? ((s = this.neg().divmod(t.neg(), i)),
                "div" !== i &&
                  ((o = s.mod.neg()), r && 0 !== o.negative && o.isub(t)),
                { div: s.div, mod: o })
              : t.length > this.length || 0 > this.cmp(t)
              ? { div: new e(0), mod: this }
              : 1 === t.length
              ? "div" === i
                ? { div: this.divn(t.words[0]), mod: null }
                : "mod" === i
                ? { div: null, mod: new e(this.modrn(t.words[0])) }
                : {
                    div: this.divn(t.words[0]),
                    mod: new e(this.modrn(t.words[0])),
                  }
              : this._wordDiv(t, i);
          }),
          (e.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (e.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (e.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (e.prototype.divRound = function (t) {
            var i = this.divmod(t);
            if (i.mod.isZero()) return i.div;
            var r = 0 !== i.div.negative ? i.mod.isub(t) : i.mod,
              h = t.ushrn(1),
              n = t.andln(1),
              e = r.cmp(h);
            return e < 0 || (1 === n && 0 === e)
              ? i.div
              : 0 !== i.div.negative
              ? i.div.isubn(1)
              : i.div.iaddn(1);
          }),
          (e.prototype.modrn = function (t) {
            var i = t < 0;
            i && (t = -t), h(t <= 0x3ffffff);
            for (var r = 0x4000000 % t, n = 0, e = this.length - 1; e >= 0; e--)
              n = (r * n + (0 | this.words[e])) % t;
            return i ? -n : n;
          }),
          (e.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (e.prototype.idivn = function (t) {
            var i = t < 0;
            i && (t = -t), h(t <= 0x3ffffff);
            for (var r = 0, n = this.length - 1; n >= 0; n--) {
              var e = (0 | this.words[n]) + 0x4000000 * r;
              (this.words[n] = (e / t) | 0), (r = e % t);
            }
            return this._strip(), i ? this.ineg() : this;
          }),
          (e.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (e.prototype.egcd = function (t) {
            h(0 === t.negative), h(!t.isZero());
            var i = this,
              r = t.clone();
            i = 0 !== i.negative ? i.umod(t) : i.clone();
            for (
              var n = new e(1), o = new e(0), s = new e(0), u = new e(1), f = 0;
              i.isEven() && r.isEven();

            )
              i.iushrn(1), r.iushrn(1), ++f;
            for (var a = r.clone(), l = i.clone(); !i.isZero(); ) {
              for (
                var m = 0, d = 1;
                (i.words[0] & d) == 0 && m < 26;
                ++m, d <<= 1
              );
              if (m > 0)
                for (i.iushrn(m); m-- > 0; )
                  (n.isOdd() || o.isOdd()) && (n.iadd(a), o.isub(l)),
                    n.iushrn(1),
                    o.iushrn(1);
              for (
                var p = 0, M = 1;
                (r.words[0] & M) == 0 && p < 26;
                ++p, M <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (s.isOdd() || u.isOdd()) && (s.iadd(a), u.isub(l)),
                    s.iushrn(1),
                    u.iushrn(1);
              i.cmp(r) >= 0
                ? (i.isub(r), n.isub(s), o.isub(u))
                : (r.isub(i), s.isub(n), u.isub(o));
            }
            return { a: s, b: u, gcd: r.iushln(f) };
          }),
          (e.prototype._invmp = function (t) {
            h(0 === t.negative), h(!t.isZero());
            var i,
              r = this,
              n = t.clone();
            r = 0 !== r.negative ? r.umod(t) : r.clone();
            for (
              var o = new e(1), s = new e(0), u = n.clone();
              r.cmpn(1) > 0 && n.cmpn(1) > 0;

            ) {
              for (
                var f = 0, a = 1;
                (r.words[0] & a) == 0 && f < 26;
                ++f, a <<= 1
              );
              if (f > 0)
                for (r.iushrn(f); f-- > 0; )
                  o.isOdd() && o.iadd(u), o.iushrn(1);
              for (
                var l = 0, m = 1;
                (n.words[0] & m) == 0 && l < 26;
                ++l, m <<= 1
              );
              if (l > 0)
                for (n.iushrn(l); l-- > 0; )
                  s.isOdd() && s.iadd(u), s.iushrn(1);
              r.cmp(n) >= 0 ? (r.isub(n), o.isub(s)) : (n.isub(r), s.isub(o));
            }
            return 0 > (i = 0 === r.cmpn(1) ? o : s).cmpn(0) && i.iadd(t), i;
          }),
          (e.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var i = this.clone(),
              r = t.clone();
            (i.negative = 0), (r.negative = 0);
            for (var h = 0; i.isEven() && r.isEven(); h++)
              i.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; i.isEven(); ) i.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var n = i.cmp(r);
              if (n < 0) {
                var e = i;
                (i = r), (r = e);
              } else if (0 === n || 0 === r.cmpn(1)) break;
              i.isub(r);
            }
            return r.iushln(h);
          }),
          (e.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (e.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (e.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (e.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (e.prototype.bincn = function (t) {
            h("number" == typeof t);
            var i = t % 26,
              r = (t - i) / 26,
              n = 1 << i;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= n), this;
            for (var e = n, o = r; 0 !== e && o < this.length; o++) {
              var s = 0 | this.words[o];
              (s += e), (e = s >>> 26), (s &= 0x3ffffff), (this.words[o] = s);
            }
            return 0 !== e && ((this.words[o] = e), this.length++), this;
          }),
          (e.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (e.prototype.cmpn = function (t) {
            var i,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) i = 1;
            else {
              r && (t = -t), h(t <= 0x3ffffff, "Number is too big");
              var n = 0 | this.words[0];
              i = n === t ? 0 : n < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -i : i;
          }),
          (e.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var i = this.ucmp(t);
            return 0 !== this.negative ? 0 | -i : i;
          }),
          (e.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var i = 0, r = this.length - 1; r >= 0; r--) {
              var h = 0 | this.words[r],
                n = 0 | t.words[r];
              if (h !== n) {
                h < n ? (i = -1) : h > n && (i = 1);
                break;
              }
            }
            return i;
          }),
          (e.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (e.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (e.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (e.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (e.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (e.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (e.prototype.lten = function (t) {
            return 0 >= this.cmpn(t);
          }),
          (e.prototype.lte = function (t) {
            return 0 >= this.cmp(t);
          }),
          (e.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (e.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (e.red = function (t) {
            return new A(t);
          }),
          (e.prototype.toRed = function (t) {
            return (
              h(!this.red, "Already a number in reduction context"),
              h(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (e.prototype.fromRed = function () {
            return (
              h(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (e.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (e.prototype.forceRed = function (t) {
            return (
              h(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (e.prototype.redAdd = function (t) {
            return (
              h(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (e.prototype.redIAdd = function (t) {
            return (
              h(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (e.prototype.redSub = function (t) {
            return (
              h(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (e.prototype.redISub = function (t) {
            return (
              h(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (e.prototype.redShl = function (t) {
            return (
              h(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (e.prototype.redMul = function (t) {
            return (
              h(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (e.prototype.redIMul = function (t) {
            return (
              h(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (e.prototype.redSqr = function () {
            return (
              h(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (e.prototype.redISqr = function () {
            return (
              h(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (e.prototype.redSqrt = function () {
            return (
              h(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (e.prototype.redInvm = function () {
            return (
              h(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (e.prototype.redNeg = function () {
            return (
              h(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (e.prototype.redPow = function (t) {
            return (
              h(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var w = { k256: null, p224: null, p192: null, p25519: null };
        function y(t, i) {
          (this.name = t),
            (this.p = new e(i, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new e(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function x() {
          y.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function b() {
          y.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function _() {
          y.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function k() {
          y.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function A(t) {
          if ("string" == typeof t) {
            var i = e._prime(t);
            (this.m = i.p), (this.prime = i);
          } else
            h(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function S(t) {
          A.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new e(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (y.prototype._tmp = function () {
          var t = new e(null);
          return (t.words = Array(Math.ceil(this.n / 13))), t;
        }),
          (y.prototype.ireduce = function (t) {
            var i,
              r = t;
            do
              this.split(r, this.tmp),
                (i = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            while (i > this.n);
            var h = i < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === h
                ? ((r.words[0] = 0), (r.length = 1))
                : h > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (y.prototype.split = function (t, i) {
            t.iushrn(this.n, 0, i);
          }),
          (y.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          n(x, y),
          (x.prototype.split = function (t, i) {
            for (var r = Math.min(t.length, 9), h = 0; h < r; h++)
              i.words[h] = t.words[h];
            if (((i.length = r), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var n = t.words[9];
            for (h = 10, i.words[i.length++] = 4194303 & n; h < t.length; h++) {
              var e = 0 | t.words[h];
              (t.words[h - 10] = ((4194303 & e) << 4) | (n >>> 22)), (n = e);
            }
            (n >>>= 22),
              (t.words[h - 10] = n),
              0 === n && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (x.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var i = 0, r = 0; r < t.length; r++) {
              var h = 0 | t.words[r];
              (i += 977 * h),
                (t.words[r] = 0x3ffffff & i),
                (i = 64 * h + ((i / 0x4000000) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          n(b, y),
          n(_, y),
          n(k, y),
          (k.prototype.imulK = function (t) {
            for (var i = 0, r = 0; r < t.length; r++) {
              var h = (0 | t.words[r]) * 19 + i,
                n = 0x3ffffff & h;
              (h >>>= 26), (t.words[r] = n), (i = h);
            }
            return 0 !== i && (t.words[t.length++] = i), t;
          }),
          (e._prime = function (t) {
            var i;
            if (w[t]) return w[t];
            if ("k256" === t) i = new x();
            else if ("p224" === t) i = new b();
            else if ("p192" === t) i = new _();
            else if ("p25519" === t) i = new k();
            else throw Error("Unknown prime " + t);
            return (w[t] = i), i;
          }),
          (A.prototype._verify1 = function (t) {
            h(0 === t.negative, "red works only with positives"),
              h(t.red, "red works only with red numbers");
          }),
          (A.prototype._verify2 = function (t, i) {
            h((t.negative | i.negative) == 0, "red works only with positives"),
              h(t.red && t.red === i.red, "red works only with red numbers");
          }),
          (A.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (f(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (A.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (A.prototype.add = function (t, i) {
            this._verify2(t, i);
            var r = t.add(i);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (A.prototype.iadd = function (t, i) {
            this._verify2(t, i);
            var r = t.iadd(i);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (A.prototype.sub = function (t, i) {
            this._verify2(t, i);
            var r = t.sub(i);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
          }),
          (A.prototype.isub = function (t, i) {
            this._verify2(t, i);
            var r = t.isub(i);
            return 0 > r.cmpn(0) && r.iadd(this.m), r;
          }),
          (A.prototype.shl = function (t, i) {
            return this._verify1(t), this.imod(t.ushln(i));
          }),
          (A.prototype.imul = function (t, i) {
            return this._verify2(t, i), this.imod(t.imul(i));
          }),
          (A.prototype.mul = function (t, i) {
            return this._verify2(t, i), this.imod(t.mul(i));
          }),
          (A.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (A.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (A.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var i = this.m.andln(3);
            if ((h(i % 2 == 1), 3 === i)) {
              var r = this.m.add(new e(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var n = this.m.subn(1), o = 0;
              !n.isZero() && 0 === n.andln(1);

            )
              o++, n.iushrn(1);
            h(!n.isZero());
            var s = new e(1).toRed(this),
              u = s.redNeg(),
              f = this.m.subn(1).iushrn(1),
              a = this.m.bitLength();
            for (
              a = new e(2 * a * a).toRed(this);
              0 !== this.pow(a, f).cmp(u);

            )
              a.redIAdd(u);
            for (
              var l = this.pow(a, n),
                m = this.pow(t, n.addn(1).iushrn(1)),
                d = this.pow(t, n),
                p = o;
              0 !== d.cmp(s);

            ) {
              for (var M = d, v = 0; 0 !== M.cmp(s); v++) M = M.redSqr();
              h(v < p);
              var g = this.pow(l, new e(1).iushln(p - v - 1));
              (m = m.redMul(g)), (l = g.redSqr()), (d = d.redMul(l)), (p = v);
            }
            return m;
          }),
          (A.prototype.invm = function (t) {
            var i = t._invmp(this.m);
            return 0 !== i.negative
              ? ((i.negative = 0), this.imod(i).redNeg())
              : this.imod(i);
          }),
          (A.prototype.pow = function (t, i) {
            if (i.isZero()) return new e(1).toRed(this);
            if (0 === i.cmpn(1)) return t.clone();
            var r = Array(16);
            (r[0] = new e(1).toRed(this)), (r[1] = t);
            for (var h = 2; h < r.length; h++) r[h] = this.mul(r[h - 1], t);
            var n = r[0],
              o = 0,
              s = 0,
              u = i.bitLength() % 26;
            for (0 === u && (u = 26), h = i.length - 1; h >= 0; h--) {
              for (var f = i.words[h], a = u - 1; a >= 0; a--) {
                var l = (f >> a) & 1;
                if ((n !== r[0] && (n = this.sqr(n)), 0 === l && 0 === o)) {
                  s = 0;
                  continue;
                }
                (o <<= 1),
                  (o |= l),
                  (4 == ++s || (0 === h && 0 === a)) &&
                    ((n = this.mul(n, r[o])), (s = 0), (o = 0));
              }
              u = 26;
            }
            return n;
          }),
          (A.prototype.convertTo = function (t) {
            var i = t.umod(this.m);
            return i === t ? i.clone() : i;
          }),
          (A.prototype.convertFrom = function (t) {
            var i = t.clone();
            return (i.red = null), i;
          }),
          (e.mont = function (t) {
            return new S(t);
          }),
          n(S, A),
          (S.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (S.prototype.convertFrom = function (t) {
            var i = this.imod(t.mul(this.rinv));
            return (i.red = null), i;
          }),
          (S.prototype.imul = function (t, i) {
            if (t.isZero() || i.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(i),
              h = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = r.isub(h).iushrn(this.shift),
              e = n;
            return (
              n.cmp(this.m) >= 0
                ? (e = n.isub(this.m))
                : 0 > n.cmpn(0) && (e = n.iadd(this.m)),
              e._forceRed(this)
            );
          }),
          (S.prototype.mul = function (t, i) {
            if (t.isZero() || i.isZero()) return new e(0)._forceRed(this);
            var r = t.mul(i),
              h = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = r.isub(h).iushrn(this.shift),
              o = n;
            return (
              n.cmp(this.m) >= 0
                ? (o = n.isub(this.m))
                : 0 > n.cmpn(0) && (o = n.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (S.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
  },
]);
