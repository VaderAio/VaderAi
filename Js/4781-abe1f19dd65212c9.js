"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4781],
  {
    2742: function (e) {
      !(function (a) {
        function r(e) {
          let a = new Uint32Array([
              0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
              0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
              0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
              0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc,
              0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152,
              0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
              0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,
              0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
              0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
              0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08,
              0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f,
              0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
              0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
            ]),
            r = 0x6a09e667,
            t = 0xbb67ae85,
            x = 0x3c6ef372,
            c = 0xa54ff53a,
            n = 0x510e527f,
            f = 0x9b05688c,
            d = 0x1f83d9ab,
            i = 0x5be0cd19,
            o = new Uint32Array(64);
          function b(e) {
            let b = 0,
              s = e.length;
            for (; s >= 64; ) {
              let l = r,
                u = t,
                h = x,
                p = c,
                m = n,
                g = f,
                y = d,
                v = i,
                S,
                w,
                P,
                C,
                E;
              for (w = 0; w < 16; w++)
                (P = b + 4 * w),
                  (o[w] =
                    ((255 & e[P]) << 24) |
                    ((255 & e[P + 1]) << 16) |
                    ((255 & e[P + 2]) << 8) |
                    (255 & e[P + 3]));
              for (w = 16; w < 64; w++)
                (C =
                  (((S = o[w - 2]) >>> 17) | (S << 15)) ^
                  ((S >>> 19) | (S << 13)) ^
                  (S >>> 10)),
                  (E =
                    (((S = o[w - 15]) >>> 7) | (S << 25)) ^
                    ((S >>> 18) | (S << 14)) ^
                    (S >>> 3)),
                  (o[w] = (((C + o[w - 7]) | 0) + ((E + o[w - 16]) | 0)) | 0);
              for (w = 0; w < 64; w++)
                (C =
                  ((((((m >>> 6) | (m << 26)) ^
                    ((m >>> 11) | (m << 21)) ^
                    ((m >>> 25) | (m << 7))) +
                    ((m & g) ^ (~m & y))) |
                    0) +
                    ((v + ((a[w] + o[w]) | 0)) | 0)) |
                  0),
                  (E =
                    ((((l >>> 2) | (l << 30)) ^
                      ((l >>> 13) | (l << 19)) ^
                      ((l >>> 22) | (l << 10))) +
                      ((l & u) ^ (l & h) ^ (u & h))) |
                    0),
                  (v = y),
                  (y = g),
                  (g = m),
                  (m = (p + C) | 0),
                  (p = h),
                  (h = u),
                  (u = l),
                  (l = (C + E) | 0);
              (r = (r + l) | 0),
                (t = (t + u) | 0),
                (x = (x + h) | 0),
                (c = (c + p) | 0),
                (n = (n + m) | 0),
                (f = (f + g) | 0),
                (d = (d + y) | 0),
                (i = (i + v) | 0),
                (b += 64),
                (s -= 64);
            }
          }
          b(e);
          let s,
            l = e.length % 64,
            u = (e.length / 0x20000000) | 0,
            h = e.length << 3,
            p = l < 56 ? 56 : 120,
            m = e.slice(e.length - l, e.length);
          for (m.push(128), s = l + 1; s < p; s++) m.push(0);
          return (
            m.push((u >>> 24) & 255),
            m.push((u >>> 16) & 255),
            m.push((u >>> 8) & 255),
            m.push((u >>> 0) & 255),
            m.push((h >>> 24) & 255),
            m.push((h >>> 16) & 255),
            m.push((h >>> 8) & 255),
            m.push((h >>> 0) & 255),
            b(m),
            [
              (r >>> 24) & 255,
              (r >>> 16) & 255,
              (r >>> 8) & 255,
              (r >>> 0) & 255,
              (t >>> 24) & 255,
              (t >>> 16) & 255,
              (t >>> 8) & 255,
              (t >>> 0) & 255,
              (x >>> 24) & 255,
              (x >>> 16) & 255,
              (x >>> 8) & 255,
              (x >>> 0) & 255,
              (c >>> 24) & 255,
              (c >>> 16) & 255,
              (c >>> 8) & 255,
              (c >>> 0) & 255,
              (n >>> 24) & 255,
              (n >>> 16) & 255,
              (n >>> 8) & 255,
              (n >>> 0) & 255,
              (f >>> 24) & 255,
              (f >>> 16) & 255,
              (f >>> 8) & 255,
              (f >>> 0) & 255,
              (d >>> 24) & 255,
              (d >>> 16) & 255,
              (d >>> 8) & 255,
              (d >>> 0) & 255,
              (i >>> 24) & 255,
              (i >>> 16) & 255,
              (i >>> 8) & 255,
              (i >>> 0) & 255,
            ]
          );
        }
        function t(e, a, t) {
          let x;
          e = e.length <= 64 ? e : r(e);
          let c = 64 + a.length + 4,
            n = Array(c),
            f = Array(64),
            d = [];
          for (x = 0; x < 64; x++) n[x] = 54;
          for (x = 0; x < e.length; x++) n[x] ^= e[x];
          for (x = 0; x < a.length; x++) n[64 + x] = a[x];
          for (x = c - 4; x < c; x++) n[x] = 0;
          for (x = 0; x < 64; x++) f[x] = 92;
          for (x = 0; x < e.length; x++) f[x] ^= e[x];
          function i() {
            for (let e = c - 1; e >= c - 4; e--) {
              if ((n[e]++, n[e] <= 255)) return;
              n[e] = 0;
            }
          }
          for (; t >= 32; ) i(), (d = d.concat(r(f.concat(r(n))))), (t -= 32);
          return (
            t > 0 && (i(), (d = d.concat(r(f.concat(r(n))).slice(0, t)))), d
          );
        }
        function x(e, a, r, t, x) {
          let d;
          for (f(e, (2 * r - 1) * 16, x, 0, 16), d = 0; d < 2 * r; d++)
            n(e, 16 * d, x, 16),
              (function (e, a) {
                f(e, 0, a, 0, 16);
                for (let e = 8; e > 0; e -= 2)
                  (a[4] ^= c(a[0] + a[12], 7)),
                    (a[8] ^= c(a[4] + a[0], 9)),
                    (a[12] ^= c(a[8] + a[4], 13)),
                    (a[0] ^= c(a[12] + a[8], 18)),
                    (a[9] ^= c(a[5] + a[1], 7)),
                    (a[13] ^= c(a[9] + a[5], 9)),
                    (a[1] ^= c(a[13] + a[9], 13)),
                    (a[5] ^= c(a[1] + a[13], 18)),
                    (a[14] ^= c(a[10] + a[6], 7)),
                    (a[2] ^= c(a[14] + a[10], 9)),
                    (a[6] ^= c(a[2] + a[14], 13)),
                    (a[10] ^= c(a[6] + a[2], 18)),
                    (a[3] ^= c(a[15] + a[11], 7)),
                    (a[7] ^= c(a[3] + a[15], 9)),
                    (a[11] ^= c(a[7] + a[3], 13)),
                    (a[15] ^= c(a[11] + a[7], 18)),
                    (a[1] ^= c(a[0] + a[3], 7)),
                    (a[2] ^= c(a[1] + a[0], 9)),
                    (a[3] ^= c(a[2] + a[1], 13)),
                    (a[0] ^= c(a[3] + a[2], 18)),
                    (a[6] ^= c(a[5] + a[4], 7)),
                    (a[7] ^= c(a[6] + a[5], 9)),
                    (a[4] ^= c(a[7] + a[6], 13)),
                    (a[5] ^= c(a[4] + a[7], 18)),
                    (a[11] ^= c(a[10] + a[9], 7)),
                    (a[8] ^= c(a[11] + a[10], 9)),
                    (a[9] ^= c(a[8] + a[11], 13)),
                    (a[10] ^= c(a[9] + a[8], 18)),
                    (a[12] ^= c(a[15] + a[14], 7)),
                    (a[13] ^= c(a[12] + a[15], 9)),
                    (a[14] ^= c(a[13] + a[12], 13)),
                    (a[15] ^= c(a[14] + a[13], 18));
                for (let r = 0; r < 16; ++r) e[r] += a[r];
              })(x, t),
              f(x, 0, e, a + 16 * d, 16);
          for (d = 0; d < r; d++) f(e, a + 2 * d * 16, e, 16 * d, 16);
          for (d = 0; d < r; d++)
            f(e, a + (2 * d + 1) * 16, e, (d + r) * 16, 16);
        }
        function c(e, a) {
          return (e << a) | (e >>> (32 - a));
        }
        function n(e, a, r, t) {
          for (let x = 0; x < t; x++) r[x] ^= e[a + x];
        }
        function f(e, a, r, t, x) {
          for (; x--; ) r[t++] = e[a++];
        }
        function d(e) {
          if (!e || "number" != typeof e.length) return !1;
          for (let a = 0; a < e.length; a++) {
            let r = e[a];
            if ("number" != typeof r || r % 1 || r < 0 || r >= 256) return !1;
          }
          return !0;
        }
        function i(e, a) {
          if ("number" != typeof e || e % 1) throw Error("invalid " + a);
          return e;
        }
        function o(e, a, r, c, o, b, s) {
          let l;
          if (
            ((r = i(r, "N")),
            (c = i(c, "r")),
            (o = i(o, "p")),
            (b = i(b, "dkLen")),
            0 === r || (r & (r - 1)) != 0)
          )
            throw Error("N must be power of 2");
          if (r > 0x7fffffff / 128 / c) throw Error("N too large");
          if (c > 0x7fffffff / 128 / o) throw Error("r too large");
          if (!d(e)) throw Error("password must be an array or buffer");
          if (((e = Array.prototype.slice.call(e)), !d(a)))
            throw Error("salt must be an array or buffer");
          a = Array.prototype.slice.call(a);
          let u = t(e, a, 128 * o * c),
            h = new Uint32Array(32 * o * c);
          for (let e = 0; e < h.length; e++) {
            let a = 4 * e;
            h[e] =
              ((255 & u[a + 3]) << 24) |
              ((255 & u[a + 2]) << 16) |
              ((255 & u[a + 1]) << 8) |
              (255 & u[a + 0]);
          }
          let p = new Uint32Array(64 * c),
            m = new Uint32Array(32 * c * r),
            g = 32 * c,
            y = new Uint32Array(16),
            v = new Uint32Array(16),
            S = o * r * 2,
            w = 0,
            P = null,
            C = !1,
            E = 0,
            A = 0,
            B,
            F = s ? parseInt(1e3 / c) : 0xffffffff,
            O = "undefined" != typeof setImmediate ? setImmediate : setTimeout,
            k = function () {
              let a;
              if (C) return s(Error("cancelled"), w / S);
              switch (E) {
                case 0:
                  f(h, (l = 32 * A * c), p, 0, g), (E = 1), (B = 0);
                case 1:
                  (a = r - B) > F && (a = F);
                  for (let e = 0; e < a; e++)
                    f(p, 0, m, (B + e) * g, g), x(p, g, c, y, v);
                  if (((B += a), (w += a), s)) {
                    let e = parseInt((1e3 * w) / S);
                    if (e !== P) {
                      if ((C = s(null, w / S))) break;
                      P = e;
                    }
                  }
                  if (B < r) break;
                  (B = 0), (E = 2);
                case 2:
                  (a = r - B) > F && (a = F);
                  for (let e = 0; e < a; e++)
                    n(m, (p[(2 * c - 1) * 16] & (r - 1)) * g, p, g),
                      x(p, g, c, y, v);
                  if (((B += a), (w += a), s)) {
                    let e = parseInt((1e3 * w) / S);
                    if (e !== P) {
                      if ((C = s(null, w / S))) break;
                      P = e;
                    }
                  }
                  if (B < r) break;
                  if ((f(p, 0, h, l, g), ++A < o)) {
                    E = 0;
                    break;
                  }
                  u = [];
                  for (let e = 0; e < h.length; e++)
                    u.push((0 | h[e]) & 255),
                      u.push((h[e] >> 8) & 255),
                      u.push((h[e] >> 16) & 255),
                      u.push((h[e] >> 24) & 255);
                  let d = t(e, u, b);
                  return s && s(null, 1, d), d;
              }
              s && O(k);
            };
          if (!s)
            for (;;) {
              let e = k();
              if (void 0 != e) return e;
            }
          k();
        }
        e.exports = {
          scrypt: function (e, a, r, t, x, c, n) {
            return new Promise(function (f, d) {
              let i = 0;
              n && n(0),
                o(e, a, r, t, x, c, function (e, a, r) {
                  if (e) d(e);
                  else if (r) n && 1 !== i && n(1), f(new Uint8Array(r));
                  else if (n && a !== i) return (i = a), n(a);
                });
            });
          },
          syncScrypt: function (e, a, r, t, x, c) {
            return new Uint8Array(o(e, a, r, t, x, c));
          },
        };
      })(0);
    },
    3794: (e, a, r) => {
      r.r(a),
        r.d(a, {
          UnicodeNormalizationForm: () => c.dz,
          Utf8ErrorFuncs: () => c.d5,
          Utf8ErrorReason: () => c._E,
          _toEscapedUtf8String: () => c.Wj,
          formatBytes32String: () => n,
          nameprep: () => g,
          parseBytes32String: () => f,
          toUtf8Bytes: () => c.YW,
          toUtf8CodePoints: () => c.dg,
          toUtf8String: () => c._v,
        });
      var t = r(97979),
        x = r(45849),
        c = r(193);
      function n(e) {
        let a = (0, c.YW)(e);
        if (a.length > 31)
          throw Error("bytes32 string must be less than 32 bytes");
        return (0, x.hexlify)((0, x.concat)([a, t.j]).slice(0, 32));
      }
      function f(e) {
        let a = (0, x.arrayify)(e);
        if (32 !== a.length) throw Error("invalid bytes32 - not 32 bytes long");
        if (0 !== a[31])
          throw Error("invalid bytes32 string - no null terminator");
        let r = 31;
        for (; 0 === a[r - 1]; ) r--;
        return (0, c._v)(a.slice(0, r));
      }
      function d(e, a) {
        a ||
          (a = function (e) {
            return [parseInt(e, 16)];
          });
        let r = 0,
          t = {};
        return (
          e.split(",").forEach((e) => {
            let x = e.split(":");
            t[(r += parseInt(x[0], 16))] = a(x[1]);
          }),
          t
        );
      }
      function i(e) {
        let a = 0;
        return e.split(",").map((e) => {
          let r = e.split("-");
          return (
            1 === r.length ? (r[1] = "0") : "" === r[1] && (r[1] = "1"),
            { l: a + parseInt(r[0], 16), h: (a = parseInt(r[1], 16)) }
          );
        });
      }
      function o(e, a) {
        let r = 0;
        for (let t = 0; t < a.length; t++) {
          let x = a[t];
          if (e >= (r += x.l) && e <= r + x.h && (e - r) % (x.d || 1) == 0) {
            if (x.e && -1 !== x.e.indexOf(e - r)) continue;
            return x;
          }
        }
        return null;
      }
      let b = i(
          "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"
        ),
        s = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
          .split(",")
          .map((e) => parseInt(e, 16)),
        l = [
          { h: 25, s: 32, l: 65 },
          { h: 30, s: 32, e: [23], l: 127 },
          { h: 54, s: 1, e: [48], l: 64, d: 2 },
          { h: 14, s: 1, l: 57, d: 2 },
          { h: 44, s: 1, l: 17, d: 2 },
          { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
          { h: 16, s: 1, l: 68, d: 2 },
          { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
          { h: 26, s: 32, e: [17], l: 435 },
          { h: 22, s: 1, l: 71, d: 2 },
          { h: 15, s: 80, l: 40 },
          { h: 31, s: 32, l: 16 },
          { h: 32, s: 1, l: 80, d: 2 },
          { h: 52, s: 1, l: 42, d: 2 },
          { h: 12, s: 1, l: 55, d: 2 },
          { h: 40, s: 1, e: [38], l: 15, d: 2 },
          { h: 14, s: 1, l: 48, d: 2 },
          { h: 37, s: 48, l: 49 },
          { h: 148, s: 1, l: 6351, d: 2 },
          { h: 88, s: 1, l: 160, d: 2 },
          { h: 15, s: 16, l: 704 },
          { h: 25, s: 26, l: 854 },
          { h: 25, s: 32, l: 55915 },
          { h: 37, s: 40, l: 1247 },
          { h: 25, s: -119711, l: 53248 },
          { h: 25, s: -119763, l: 52 },
          { h: 25, s: -119815, l: 52 },
          { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
          { h: 25, s: -119919, l: 52 },
          { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
          { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
          { h: 25, s: -120075, l: 52 },
          { h: 25, s: -120127, l: 52 },
          { h: 25, s: -120179, l: 52 },
          { h: 25, s: -120231, l: 52 },
          { h: 25, s: -120283, l: 52 },
          { h: 25, s: -120335, l: 52 },
          { h: 24, s: -119543, e: [17], l: 56 },
          { h: 24, s: -119601, e: [17], l: 58 },
          { h: 24, s: -119659, e: [17], l: 58 },
          { h: 24, s: -119717, e: [17], l: 58 },
          { h: 24, s: -119775, e: [17], l: 58 },
        ],
        u = d(
          "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"
        ),
        h = d(
          "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"
        ),
        p = d(
          "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
          function (e) {
            if (e.length % 4 != 0) throw Error("bad data");
            let a = [];
            for (let r = 0; r < e.length; r += 4)
              a.push(parseInt(e.substring(r, r + 4), 16));
            return a;
          }
        ),
        m = i(
          "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001"
        );
      function g(e) {
        if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59) return e.toLowerCase();
        let a = (0, c.dg)(e);
        (a = a
          .map((e) => {
            if (s.indexOf(e) >= 0 || (e >= 65024 && e <= 65039)) return [];
            let a = (function (e) {
              let a = o(e, l);
              if (a) return [e + a.s];
              let r = u[e];
              if (r) return r;
              let t = h[e];
              if (t) return [e + t[0]];
              let x = p[e];
              return x || null;
            })(e);
            return a || [e];
          })
          .reduce(
            (e, a) => (
              a.forEach((a) => {
                e.push(a);
              }),
              e
            ),
            []
          )),
          (a = (0, c.dg)((0, c.H5)(a), c.dz.NFKC)).forEach((e) => {
            if (o(e, m)) throw Error("STRINGPREP_CONTAINS_PROHIBITED");
          }),
          a.forEach((e) => {
            if (o(e, b)) throw Error("STRINGPREP_CONTAINS_UNASSIGNED");
          });
        let r = (0, c.H5)(a);
        if (
          "-" === r.substring(0, 1) ||
          "--" === r.substring(2, 4) ||
          "-" === r.substring(r.length - 1)
        )
          throw Error("invalid hyphen");
        return r;
      }
    },
    9044: (e, a, r) => {
      r.r(a),
        r.d(a, {
          commify: () => w,
          formatEther: () => E,
          formatUnits: () => P,
          parseEther: () => A,
          parseUnits: () => C,
        });
      var t = r(45849),
        x = r(83928),
        c = r(17746),
        n = r(84784);
      let f = new x.Logger(c.r),
        d = {},
        i = n.gH.from(0),
        o = n.gH.from(-1);
      function b(e, a, r, t) {
        let c = { fault: a, operation: r };
        return (
          void 0 !== t && (c.value = t),
          f.throwError(e, x.Logger.errors.NUMERIC_FAULT, c)
        );
      }
      let s = "0";
      for (; s.length < 256; ) s += s;
      function l(e) {
        if ("number" != typeof e)
          try {
            e = n.gH.from(e).toNumber();
          } catch (e) {}
        return "number" == typeof e && e >= 0 && e <= 256 && !(e % 1)
          ? "1" + s.substring(0, e)
          : f.throwArgumentError("invalid decimal size", "decimals", e);
      }
      function u(e, a) {
        null == a && (a = 0);
        let r = l(a),
          t = (e = n.gH.from(e)).lt(i);
        t && (e = e.mul(o));
        let x = e.mod(r).toString();
        for (; x.length < r.length - 1; ) x = "0" + x;
        x = x.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        let c = e.div(r).toString();
        return (e = 1 === r.length ? c : c + "." + x), t && (e = "-" + e), e;
      }
      function h(e, a) {
        null == a && (a = 0);
        let r = l(a);
        ("string" == typeof e && e.match(/^-?[0-9.]+$/)) ||
          f.throwArgumentError("invalid decimal value", "value", e);
        let t = "-" === e.substring(0, 1);
        t && (e = e.substring(1)),
          "." === e && f.throwArgumentError("missing value", "value", e);
        let x = e.split(".");
        x.length > 2 &&
          f.throwArgumentError("too many decimal points", "value", e);
        let c = x[0],
          d = x[1];
        for (c || (c = "0"), d || (d = "0"); "0" === d[d.length - 1]; )
          d = d.substring(0, d.length - 1);
        for (
          d.length > r.length - 1 &&
            b(
              "fractional component exceeds decimals",
              "underflow",
              "parseFixed"
            ),
            "" === d && (d = "0");
          d.length < r.length - 1;

        )
          d += "0";
        let i = n.gH.from(c),
          s = n.gH.from(d),
          u = i.mul(r).add(s);
        return t && (u = u.mul(o)), u;
      }
      class p {
        constructor(e, a, r, t) {
          e !== d &&
            f.throwError(
              "cannot use FixedFormat constructor; use FixedFormat.from",
              x.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" }
            ),
            (this.signed = a),
            (this.width = r),
            (this.decimals = t),
            (this.name =
              (a ? "" : "u") + "fixed" + String(r) + "x" + String(t)),
            (this._multiplier = l(t)),
            Object.freeze(this);
        }
        static from(e) {
          if (e instanceof p) return e;
          "number" == typeof e && (e = `fixed128x${e}`);
          let a = !0,
            r = 128,
            t = 18;
          if ("string" == typeof e)
            if ("fixed" === e);
            else if ("ufixed" === e) a = !1;
            else {
              let x = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
              x || f.throwArgumentError("invalid fixed format", "format", e),
                (a = "u" !== x[1]),
                (r = parseInt(x[2])),
                (t = parseInt(x[3]));
            }
          else if (e) {
            let x = (a, r, t) =>
              null == e[a]
                ? t
                : (typeof e[a] !== r &&
                    f.throwArgumentError(
                      "invalid fixed format (" + a + " not " + r + ")",
                      "format." + a,
                      e[a]
                    ),
                  e[a]);
            (a = x("signed", "boolean", a)),
              (r = x("width", "number", r)),
              (t = x("decimals", "number", t));
          }
          return (
            r % 8 &&
              f.throwArgumentError(
                "invalid fixed format width (not byte aligned)",
                "format.width",
                r
              ),
            t > 80 &&
              f.throwArgumentError(
                "invalid fixed format (decimals too large)",
                "format.decimals",
                t
              ),
            new p(d, a, r, t)
          );
        }
      }
      class m {
        constructor(e, a, r, t) {
          e !== d &&
            f.throwError(
              "cannot use FixedNumber constructor; use FixedNumber.from",
              x.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" }
            ),
            (this.format = t),
            (this._hex = a),
            (this._value = r),
            (this._isFixedNumber = !0),
            Object.freeze(this);
        }
        _checkFormat(e) {
          this.format.name !== e.format.name &&
            f.throwArgumentError(
              "incompatible format; use fixedNumber.toFormat",
              "other",
              e
            );
        }
        addUnsafe(e) {
          this._checkFormat(e);
          let a = h(this._value, this.format.decimals),
            r = h(e._value, e.format.decimals);
          return m.fromValue(a.add(r), this.format.decimals, this.format);
        }
        subUnsafe(e) {
          this._checkFormat(e);
          let a = h(this._value, this.format.decimals),
            r = h(e._value, e.format.decimals);
          return m.fromValue(a.sub(r), this.format.decimals, this.format);
        }
        mulUnsafe(e) {
          this._checkFormat(e);
          let a = h(this._value, this.format.decimals),
            r = h(e._value, e.format.decimals);
          return m.fromValue(
            a.mul(r).div(this.format._multiplier),
            this.format.decimals,
            this.format
          );
        }
        divUnsafe(e) {
          this._checkFormat(e);
          let a = h(this._value, this.format.decimals),
            r = h(e._value, e.format.decimals);
          return m.fromValue(
            a.mul(this.format._multiplier).div(r),
            this.format.decimals,
            this.format
          );
        }
        floor() {
          let e = this.toString().split(".");
          1 === e.length && e.push("0");
          let a = m.from(e[0], this.format),
            r = !e[1].match(/^(0*)$/);
          return (
            this.isNegative() && r && (a = a.subUnsafe(g.toFormat(a.format))), a
          );
        }
        ceiling() {
          let e = this.toString().split(".");
          1 === e.length && e.push("0");
          let a = m.from(e[0], this.format),
            r = !e[1].match(/^(0*)$/);
          return (
            !this.isNegative() && r && (a = a.addUnsafe(g.toFormat(a.format))),
            a
          );
        }
        round(e) {
          null == e && (e = 0);
          let a = this.toString().split(".");
          if (
            (1 === a.length && a.push("0"),
            (e < 0 || e > 80 || e % 1) &&
              f.throwArgumentError("invalid decimal count", "decimals", e),
            a[1].length <= e)
          )
            return this;
          let r = m.from("1" + s.substring(0, e), this.format),
            t = y.toFormat(this.format);
          return this.mulUnsafe(r).addUnsafe(t).floor().divUnsafe(r);
        }
        isZero() {
          return "0.0" === this._value || "0" === this._value;
        }
        isNegative() {
          return "-" === this._value[0];
        }
        toString() {
          return this._value;
        }
        toHexString(e) {
          if (null == e) return this._hex;
          e % 8 && f.throwArgumentError("invalid byte width", "width", e);
          let a = n.gH
            .from(this._hex)
            .fromTwos(this.format.width)
            .toTwos(e)
            .toHexString();
          return (0, t.hexZeroPad)(a, e / 8);
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(e) {
          return m.fromString(this._value, e);
        }
        static fromValue(e, a, r) {
          return (
            null != r || null == a || (0, n.YR)(a) || ((r = a), (a = null)),
            null == a && (a = 0),
            null == r && (r = "fixed"),
            m.fromString(u(e, a), p.from(r))
          );
        }
        static fromString(e, a) {
          null == a && (a = "fixed");
          let r = p.from(a),
            x = h(e, r.decimals);
          !r.signed &&
            x.lt(i) &&
            b("unsigned value cannot be negative", "overflow", "value", e);
          let c = null;
          return (
            r.signed
              ? (c = x.toTwos(r.width).toHexString())
              : ((c = x.toHexString()),
                (c = (0, t.hexZeroPad)(c, r.width / 8))),
            new m(d, c, u(x, r.decimals), r)
          );
        }
        static fromBytes(e, a) {
          null == a && (a = "fixed");
          let r = p.from(a);
          if ((0, t.arrayify)(e).length > r.width / 8) throw Error("overflow");
          let x = n.gH.from(e);
          return (
            r.signed && (x = x.fromTwos(r.width)),
            new m(
              d,
              x.toTwos(+!r.signed + r.width).toHexString(),
              u(x, r.decimals),
              r
            )
          );
        }
        static from(e, a) {
          if ("string" == typeof e) return m.fromString(e, a);
          if ((0, t.isBytes)(e)) return m.fromBytes(e, a);
          try {
            return m.fromValue(e, 0, a);
          } catch (e) {
            if (e.code !== x.Logger.errors.INVALID_ARGUMENT) throw e;
          }
          return f.throwArgumentError("invalid FixedNumber value", "value", e);
        }
        static isFixedNumber(e) {
          return !!(e && e._isFixedNumber);
        }
      }
      let g = m.from(1),
        y = m.from("0.5"),
        v = new x.Logger("units/5.8.0"),
        S = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
      function w(e) {
        let a = String(e).split(".");
        (a.length > 2 ||
          !a[0].match(/^-?[0-9]*$/) ||
          (a[1] && !a[1].match(/^[0-9]*$/)) ||
          "." === e ||
          "-." === e) &&
          v.throwArgumentError("invalid value", "value", e);
        let r = a[0],
          t = "";
        for (
          "-" === r.substring(0, 1) && ((t = "-"), (r = r.substring(1)));
          "0" === r.substring(0, 1);

        )
          r = r.substring(1);
        "" === r && (r = "0");
        let x = "";
        for (
          2 === a.length && (x = "." + (a[1] || "0"));
          x.length > 2 && "0" === x[x.length - 1];

        )
          x = x.substring(0, x.length - 1);
        let c = [];
        for (; r.length; )
          if (r.length <= 3) {
            c.unshift(r);
            break;
          } else {
            let e = r.length - 3;
            c.unshift(r.substring(e)), (r = r.substring(0, e));
          }
        return t + c.join(",") + x;
      }
      function P(e, a) {
        if ("string" == typeof a) {
          let e = S.indexOf(a);
          -1 !== e && (a = 3 * e);
        }
        return u(e, null != a ? a : 18);
      }
      function C(e, a) {
        if (
          ("string" != typeof e &&
            v.throwArgumentError("value must be a string", "value", e),
          "string" == typeof a)
        ) {
          let e = S.indexOf(a);
          -1 !== e && (a = 3 * e);
        }
        return h(e, null != a ? a : 18);
      }
      function E(e) {
        return P(e, 18);
      }
      function A(e) {
        return C(e, 18);
      }
    },
    13244: (e, a, r) => {
      r.d(a, { Q: () => d });
      var t = r(9428),
        x = r(62108),
        c = r(43484),
        n = r(18224),
        f = r(53031);
      function d() {
        var e, a, r;
        let d =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { abi: i, address: o, functionName: b, query: s = {} } = d,
          l = d.code,
          u = (0, f.U)(d),
          h = (0, n.i)({ config: u }),
          p = (function (e, a = {}) {
            return {
              async queryFn({ queryKey: r }) {
                let x = a.abi;
                if (!x) throw Error("abi is required");
                let { functionName: c, scopeKey: n, ...f } = r[1],
                  d = (() => {
                    let e = r[1];
                    if (e.address) return { address: e.address };
                    if (e.code) return { code: e.code };
                    throw Error("address or code is required");
                  })();
                if (!c) throw Error("functionName is required");
                return (0, t.J)(e, {
                  abi: x,
                  functionName: c,
                  args: f.args,
                  ...d,
                  ...f,
                });
              },
              queryKey: (function (e = {}) {
                let { abi: a, ...r } = e;
                return ["readContract", (0, x.xO)(r)];
              })(a),
            };
          })(u, { ...d, chainId: null != (e = d.chainId) ? e : h }),
          m = !!((o || l) && i && b && (null == (a = s.enabled) || a));
        return (0, c.IT)({
          ...s,
          ...p,
          enabled: m,
          structuralSharing: null != (r = s.structuralSharing) ? r : x.I_,
        });
      }
    },
    18339: (e, a, r) => {
      r.d(a, { Yc: () => A, w: () => B, xQ: () => E });
      var t = r(33781),
        x = r.n(t),
        c = r(2742),
        n = r.n(c),
        f = r(68652),
        d = r(45849),
        i = r(52844),
        o = r(53099),
        b = r(72826),
        s = r(41055),
        l = r(49435),
        u = r(91359),
        h = r(46444),
        p = r(83928),
        m = r(66320);
      let g = new p.Logger(m.r);
      function y(e) {
        return null != e && e.mnemonic && e.mnemonic.phrase;
      }
      class v extends l.Description {
        isKeystoreAccount(e) {
          return !!(e && e._isKeystoreAccount);
        }
      }
      function S(e, a) {
        let r = (0, h.m0)((0, h.oe)(e, "crypto/ciphertext"));
        if (
          (0, d.hexlify)(
            (0, o.keccak256)((0, d.concat)([a.slice(16, 32), r]))
          ).substring(2) !== (0, h.oe)(e, "crypto/mac").toLowerCase()
        )
          throw Error("invalid password");
        let t = (function (e, a, r) {
          if ("aes-128-ctr" === (0, h.oe)(e, "crypto/cipher")) {
            let t = (0, h.m0)((0, h.oe)(e, "crypto/cipherparams/iv")),
              c = new (x().Counter)(t),
              n = new (x().ModeOfOperation.ctr)(a, c);
            return (0, d.arrayify)(n.decrypt(r));
          }
          return null;
        })(e, a.slice(0, 16), r);
        t ||
          g.throwError(
            "unsupported cipher",
            p.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "decrypt" }
          );
        let c = a.slice(32, 64),
          n = (0, u.computeAddress)(t);
        if (e.address) {
          let a = e.address.toLowerCase();
          if (
            ("0x" !== a.substring(0, 2) && (a = "0x" + a),
            (0, f.getAddress)(a) !== n)
          )
            throw Error("address mismatch");
        }
        let b = {
          _isKeystoreAccount: !0,
          address: n,
          privateKey: (0, d.hexlify)(t),
        };
        if ("0.1" === (0, h.oe)(e, "x-ethers/version")) {
          let a = (0, h.m0)((0, h.oe)(e, "x-ethers/mnemonicCiphertext")),
            r = (0, h.m0)((0, h.oe)(e, "x-ethers/mnemonicCounter")),
            t = new (x().Counter)(r),
            n = new (x().ModeOfOperation.ctr)(c, t),
            f = (0, h.oe)(e, "x-ethers/path") || i.defaultPath,
            o = (0, h.oe)(e, "x-ethers/locale") || "en",
            s = (0, d.arrayify)(n.decrypt(a));
          try {
            let e = (0, i.entropyToMnemonic)(s, o),
              a = i.HDNode.fromMnemonic(e, null, o).derivePath(f);
            if (a.privateKey != b.privateKey) throw Error("mnemonic mismatch");
            b.mnemonic = a.mnemonic;
          } catch (e) {
            if (
              e.code !== p.Logger.errors.INVALID_ARGUMENT ||
              "wordlist" !== e.argument
            )
              throw e;
          }
        }
        return new v(b);
      }
      function w(e, a, r, t, x) {
        return (0, d.arrayify)((0, b.A)(e, a, r, t, x));
      }
      function P(e, a, r, t, x) {
        return Promise.resolve(w(e, a, r, t, x));
      }
      function C(e, a, r, t, x) {
        let c = (0, h.Qq)(a),
          n = (0, h.oe)(e, "crypto/kdf");
        if (n && "string" == typeof n) {
          let a = function (e, a) {
            return g.throwArgumentError(
              "invalid key-derivation function parameters",
              e,
              a
            );
          };
          if ("scrypt" === n.toLowerCase()) {
            let r = (0, h.m0)((0, h.oe)(e, "crypto/kdfparams/salt")),
              f = parseInt((0, h.oe)(e, "crypto/kdfparams/n")),
              d = parseInt((0, h.oe)(e, "crypto/kdfparams/r")),
              i = parseInt((0, h.oe)(e, "crypto/kdfparams/p"));
            (f && d && i) || a("kdf", n), (f & (f - 1)) != 0 && a("N", f);
            let o = parseInt((0, h.oe)(e, "crypto/kdfparams/dklen"));
            return 32 !== o && a("dklen", o), t(c, r, f, d, i, 64, x);
          }
          if ("pbkdf2" === n.toLowerCase()) {
            let t = (0, h.m0)((0, h.oe)(e, "crypto/kdfparams/salt")),
              x = null,
              n = (0, h.oe)(e, "crypto/kdfparams/prf");
            "hmac-sha256" === n
              ? (x = "sha256")
              : "hmac-sha512" === n
              ? (x = "sha512")
              : a("prf", n);
            let f = parseInt((0, h.oe)(e, "crypto/kdfparams/c")),
              d = parseInt((0, h.oe)(e, "crypto/kdfparams/dklen"));
            return 32 !== d && a("dklen", d), r(c, t, f, d, x);
          }
        }
        return g.throwArgumentError(
          "unsupported key-derivation function",
          "kdf",
          n
        );
      }
      function E(e, a) {
        let r = JSON.parse(e),
          t = C(r, a, w, n().syncScrypt);
        return S(r, t);
      }
      function A(e, a, r) {
        var t, x, c, f;
        return (
          (t = this),
          (x = void 0),
          (c = void 0),
          (f = function* () {
            let t = JSON.parse(e),
              x = yield C(t, a, P, n().scrypt, r);
            return S(t, x);
          }),
          new (c || (c = Promise))(function (e, a) {
            function r(e) {
              try {
                d(f.next(e));
              } catch (e) {
                a(e);
              }
            }
            function n(e) {
              try {
                d(f.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function d(a) {
              var t;
              a.done
                ? e(a.value)
                : ((t = a.value) instanceof c
                    ? t
                    : new c(function (e) {
                        e(t);
                      })
                  ).then(r, n);
            }
            d((f = f.apply(t, x || [])).next());
          })
        );
      }
      function B(e, a, r, t) {
        try {
          if (
            (0, f.getAddress)(e.address) !== (0, u.computeAddress)(e.privateKey)
          )
            throw Error("address/privateKey mismatch");
          if (y(e)) {
            let a = e.mnemonic;
            if (
              i.HDNode.fromMnemonic(a.phrase, null, a.locale).derivePath(
                a.path || i.defaultPath
              ).privateKey != e.privateKey
            )
              throw Error("mnemonic mismatch");
          }
        } catch (e) {
          return Promise.reject(e);
        }
        "function" != typeof r || t || ((t = r), (r = {})), r || (r = {});
        let c = (0, d.arrayify)(e.privateKey),
          b = (0, h.Qq)(a),
          l = null,
          p = null,
          m = null;
        if (y(e)) {
          let a = e.mnemonic;
          (l = (0, d.arrayify)(
            (0, i.mnemonicToEntropy)(a.phrase, a.locale || "en")
          )),
            (p = a.path || i.defaultPath),
            (m = a.locale || "en");
        }
        let g = r.client;
        g || (g = "ethers.js");
        let v = null;
        v = r.salt ? (0, d.arrayify)(r.salt) : (0, s.p)(32);
        let S = null;
        if (r.iv) {
          if (16 !== (S = (0, d.arrayify)(r.iv)).length)
            throw Error("invalid iv");
        } else S = (0, s.p)(16);
        let w = null;
        if (r.uuid) {
          if (16 !== (w = (0, d.arrayify)(r.uuid)).length)
            throw Error("invalid uuid");
        } else w = (0, s.p)(16);
        let P = 131072,
          C = 8,
          E = 1;
        return (
          r.scrypt &&
            (r.scrypt.N && (P = r.scrypt.N),
            r.scrypt.r && (C = r.scrypt.r),
            r.scrypt.p && (E = r.scrypt.p)),
          n()
            .scrypt(b, v, P, C, E, 64, t)
            .then((a) => {
              let r = (a = (0, d.arrayify)(a)).slice(0, 16),
                t = a.slice(16, 32),
                n = a.slice(32, 64),
                f = new (x().Counter)(S),
                i = new (x().ModeOfOperation.ctr)(r, f),
                b = (0, d.arrayify)(i.encrypt(c)),
                u = (0, o.keccak256)((0, d.concat)([t, b])),
                y = {
                  address: e.address.substring(2).toLowerCase(),
                  id: (0, h.QT)(w),
                  version: 3,
                  crypto: {
                    cipher: "aes-128-ctr",
                    cipherparams: { iv: (0, d.hexlify)(S).substring(2) },
                    ciphertext: (0, d.hexlify)(b).substring(2),
                    kdf: "scrypt",
                    kdfparams: {
                      salt: (0, d.hexlify)(v).substring(2),
                      n: P,
                      dklen: 32,
                      p: E,
                      r: C,
                    },
                    mac: u.substring(2),
                  },
                };
              if (l) {
                let e = (0, s.p)(16),
                  a = new (x().Counter)(e),
                  r = new (x().ModeOfOperation.ctr)(n, a),
                  t = (0, d.arrayify)(r.encrypt(l)),
                  c = new Date(),
                  f =
                    c.getUTCFullYear() +
                    "-" +
                    (0, h.Sp)(c.getUTCMonth() + 1, 2) +
                    "-" +
                    (0, h.Sp)(c.getUTCDate(), 2) +
                    "T" +
                    (0, h.Sp)(c.getUTCHours(), 2) +
                    "-" +
                    (0, h.Sp)(c.getUTCMinutes(), 2) +
                    "-" +
                    (0, h.Sp)(c.getUTCSeconds(), 2) +
                    ".0Z";
                y["x-ethers"] = {
                  client: g,
                  gethFilename: "UTC--" + f + "--" + y.address,
                  mnemonicCounter: (0, d.hexlify)(e).substring(2),
                  mnemonicCiphertext: (0, d.hexlify)(t).substring(2),
                  path: p,
                  locale: m,
                  version: "0.1",
                };
              }
              return JSON.stringify(y);
            })
        );
      }
    },
    23256: (e, a, r) => {
      r.r(a),
        r.d(a, {
          SupportedAlgorithm: () => x.q,
          computeHmac: () => t.L5,
          ripemd160: () => t.HE,
          sha256: () => t.sc,
          sha512: () => t.Zf,
        });
      var t = r(14606),
        x = r(87105);
    },
    25852: (e, a, r) => {
      r.r(a),
        r.d(a, {
          _TypedDataEncoder: () => n.z,
          dnsEncode: () => x.Wh,
          ensNormalize: () => x.Q8,
          hashMessage: () => c.A,
          id: () => t.id,
          isValidName: () => x.uV,
          messagePrefix: () => c.o,
          namehash: () => x.kM,
        });
      var t = r(83777),
        x = r(11488),
        c = r(36151),
        n = r(30299);
    },
    33781: function (e) {
      !(function (a) {
        function r(e) {
          return parseInt(e) === e;
        }
        function t(e) {
          if (!r(e.length)) return !1;
          for (var a = 0; a < e.length; a++)
            if (!r(e[a]) || e[a] < 0 || e[a] > 255) return !1;
          return !0;
        }
        function x(e, a) {
          if (e.buffer && ArrayBuffer.isView(e) && "Uint8Array" === e.name)
            return (
              a && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e
            );
          if (Array.isArray(e)) {
            if (!t(e)) throw Error("Array contains invalid value: " + e);
            return new Uint8Array(e);
          }
          if (r(e.length) && t(e)) return new Uint8Array(e);
          throw Error("unsupported array-like object");
        }
        function c(e) {
          return new Uint8Array(e);
        }
        function n(e, a, r, t, x) {
          (null != t || null != x) &&
            (e = e.slice ? e.slice(t, x) : Array.prototype.slice.call(e, t, x)),
            a.set(e, r);
        }
        var f,
          d =
            ((f = "0123456789abcdef"),
            {
              toBytes: function (e) {
                for (var a = [], r = 0; r < e.length; r += 2)
                  a.push(parseInt(e.substr(r, 2), 16));
                return a;
              },
              fromBytes: function (e) {
                for (var a = [], r = 0; r < e.length; r++) {
                  var t = e[r];
                  a.push(f[(240 & t) >> 4] + f[15 & t]);
                }
                return a.join("");
              },
            }),
          i = { 16: 10, 24: 12, 32: 14 },
          o = [
            1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94,
            188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145,
          ],
          b = [
            99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215,
            171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175,
            156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165,
            229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18,
            128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82,
            59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91,
            106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51,
            133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157,
            56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95,
            151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220,
            34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58,
            10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200,
            55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8,
            186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189,
            139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134,
            193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135,
            233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65,
            153, 45, 15, 176, 84, 187, 22,
          ],
          s = [
            82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215,
            251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196,
            222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11,
            66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162,
            73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212,
            164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185,
            218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188,
            211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202,
            63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79,
            103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172,
            116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110,
            71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190,
            27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120,
            205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89,
            39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122,
            159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200,
            235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38,
            225, 105, 20, 99, 85, 33, 12, 125,
          ],
          l = [
            0xc66363a5, 0xf87c7c84, 0xee777799, 0xf67b7b8d, 0xfff2f20d,
            0xd66b6bbd, 0xde6f6fb1, 0x91c5c554, 0x60303050, 0x2010103,
            0xce6767a9, 0x562b2b7d, 0xe7fefe19, 0xb5d7d762, 0x4dababe6,
            0xec76769a, 0x8fcaca45, 0x1f82829d, 0x89c9c940, 0xfa7d7d87,
            0xeffafa15, 0xb25959eb, 0x8e4747c9, 0xfbf0f00b, 0x41adadec,
            0xb3d4d467, 0x5fa2a2fd, 0x45afafea, 0x239c9cbf, 0x53a4a4f7,
            0xe4727296, 0x9bc0c05b, 0x75b7b7c2, 0xe1fdfd1c, 0x3d9393ae,
            0x4c26266a, 0x6c36365a, 0x7e3f3f41, 0xf5f7f702, 0x83cccc4f,
            0x6834345c, 0x51a5a5f4, 0xd1e5e534, 0xf9f1f108, 0xe2717193,
            0xabd8d873, 0x62313153, 0x2a15153f, 0x804040c, 0x95c7c752,
            0x46232365, 0x9dc3c35e, 0x30181828, 0x379696a1, 0xa05050f,
            0x2f9a9ab5, 0xe070709, 0x24121236, 0x1b80809b, 0xdfe2e23d,
            0xcdebeb26, 0x4e272769, 0x7fb2b2cd, 0xea75759f, 0x1209091b,
            0x1d83839e, 0x582c2c74, 0x341a1a2e, 0x361b1b2d, 0xdc6e6eb2,
            0xb45a5aee, 0x5ba0a0fb, 0xa45252f6, 0x763b3b4d, 0xb7d6d661,
            0x7db3b3ce, 0x5229297b, 0xdde3e33e, 0x5e2f2f71, 0x13848497,
            0xa65353f5, 0xb9d1d168, 0, 0xc1eded2c, 0x40202060, 0xe3fcfc1f,
            0x79b1b1c8, 0xb65b5bed, 0xd46a6abe, 0x8dcbcb46, 0x67bebed9,
            0x7239394b, 0x944a4ade, 0x984c4cd4, 0xb05858e8, 0x85cfcf4a,
            0xbbd0d06b, 0xc5efef2a, 0x4faaaae5, 0xedfbfb16, 0x864343c5,
            0x9a4d4dd7, 0x66333355, 0x11858594, 0x8a4545cf, 0xe9f9f910,
            0x4020206, 0xfe7f7f81, 0xa05050f0, 0x783c3c44, 0x259f9fba,
            0x4ba8a8e3, 0xa25151f3, 0x5da3a3fe, 0x804040c0, 0x58f8f8a,
            0x3f9292ad, 0x219d9dbc, 0x70383848, 0xf1f5f504, 0x63bcbcdf,
            0x77b6b6c1, 0xafdada75, 0x42212163, 0x20101030, 0xe5ffff1a,
            0xfdf3f30e, 0xbfd2d26d, 0x81cdcd4c, 0x180c0c14, 0x26131335,
            0xc3ecec2f, 0xbe5f5fe1, 0x359797a2, 0x884444cc, 0x2e171739,
            0x93c4c457, 0x55a7a7f2, 0xfc7e7e82, 0x7a3d3d47, 0xc86464ac,
            0xba5d5de7, 0x3219192b, 0xe6737395, 0xc06060a0, 0x19818198,
            0x9e4f4fd1, 0xa3dcdc7f, 0x44222266, 0x542a2a7e, 0x3b9090ab,
            0xb888883, 0x8c4646ca, 0xc7eeee29, 0x6bb8b8d3, 0x2814143c,
            0xa7dede79, 0xbc5e5ee2, 0x160b0b1d, 0xaddbdb76, 0xdbe0e03b,
            0x64323256, 0x743a3a4e, 0x140a0a1e, 0x924949db, 0xc06060a,
            0x4824246c, 0xb85c5ce4, 0x9fc2c25d, 0xbdd3d36e, 0x43acacef,
            0xc46262a6, 0x399191a8, 0x319595a4, 0xd3e4e437, 0xf279798b,
            0xd5e7e732, 0x8bc8c843, 0x6e373759, 0xda6d6db7, 0x18d8d8c,
            0xb1d5d564, 0x9c4e4ed2, 0x49a9a9e0, 0xd86c6cb4, 0xac5656fa,
            0xf3f4f407, 0xcfeaea25, 0xca6565af, 0xf47a7a8e, 0x47aeaee9,
            0x10080818, 0x6fbabad5, 0xf0787888, 0x4a25256f, 0x5c2e2e72,
            0x381c1c24, 0x57a6a6f1, 0x73b4b4c7, 0x97c6c651, 0xcbe8e823,
            0xa1dddd7c, 0xe874749c, 0x3e1f1f21, 0x964b4bdd, 0x61bdbddc,
            0xd8b8b86, 0xf8a8a85, 0xe0707090, 0x7c3e3e42, 0x71b5b5c4,
            0xcc6666aa, 0x904848d8, 0x6030305, 0xf7f6f601, 0x1c0e0e12,
            0xc26161a3, 0x6a35355f, 0xae5757f9, 0x69b9b9d0, 0x17868691,
            0x99c1c158, 0x3a1d1d27, 0x279e9eb9, 0xd9e1e138, 0xebf8f813,
            0x2b9898b3, 0x22111133, 0xd26969bb, 0xa9d9d970, 0x78e8e89,
            0x339494a7, 0x2d9b9bb6, 0x3c1e1e22, 0x15878792, 0xc9e9e920,
            0x87cece49, 0xaa5555ff, 0x50282878, 0xa5dfdf7a, 0x38c8c8f,
            0x59a1a1f8, 0x9898980, 0x1a0d0d17, 0x65bfbfda, 0xd7e6e631,
            0x844242c6, 0xd06868b8, 0x824141c3, 0x299999b0, 0x5a2d2d77,
            0x1e0f0f11, 0x7bb0b0cb, 0xa85454fc, 0x6dbbbbd6, 0x2c16163a,
          ],
          u = [
            0xa5c66363, 0x84f87c7c, 0x99ee7777, 0x8df67b7b, 0xdfff2f2,
            0xbdd66b6b, 0xb1de6f6f, 0x5491c5c5, 0x50603030, 0x3020101,
            0xa9ce6767, 0x7d562b2b, 0x19e7fefe, 0x62b5d7d7, 0xe64dabab,
            0x9aec7676, 0x458fcaca, 0x9d1f8282, 0x4089c9c9, 0x87fa7d7d,
            0x15effafa, 0xebb25959, 0xc98e4747, 0xbfbf0f0, 0xec41adad,
            0x67b3d4d4, 0xfd5fa2a2, 0xea45afaf, 0xbf239c9c, 0xf753a4a4,
            0x96e47272, 0x5b9bc0c0, 0xc275b7b7, 0x1ce1fdfd, 0xae3d9393,
            0x6a4c2626, 0x5a6c3636, 0x417e3f3f, 0x2f5f7f7, 0x4f83cccc,
            0x5c683434, 0xf451a5a5, 0x34d1e5e5, 0x8f9f1f1, 0x93e27171,
            0x73abd8d8, 0x53623131, 0x3f2a1515, 0xc080404, 0x5295c7c7,
            0x65462323, 0x5e9dc3c3, 0x28301818, 0xa1379696, 0xf0a0505,
            0xb52f9a9a, 0x90e0707, 0x36241212, 0x9b1b8080, 0x3ddfe2e2,
            0x26cdebeb, 0x694e2727, 0xcd7fb2b2, 0x9fea7575, 0x1b120909,
            0x9e1d8383, 0x74582c2c, 0x2e341a1a, 0x2d361b1b, 0xb2dc6e6e,
            0xeeb45a5a, 0xfb5ba0a0, 0xf6a45252, 0x4d763b3b, 0x61b7d6d6,
            0xce7db3b3, 0x7b522929, 0x3edde3e3, 0x715e2f2f, 0x97138484,
            0xf5a65353, 0x68b9d1d1, 0, 0x2cc1eded, 0x60402020, 0x1fe3fcfc,
            0xc879b1b1, 0xedb65b5b, 0xbed46a6a, 0x468dcbcb, 0xd967bebe,
            0x4b723939, 0xde944a4a, 0xd4984c4c, 0xe8b05858, 0x4a85cfcf,
            0x6bbbd0d0, 0x2ac5efef, 0xe54faaaa, 0x16edfbfb, 0xc5864343,
            0xd79a4d4d, 0x55663333, 0x94118585, 0xcf8a4545, 0x10e9f9f9,
            0x6040202, 0x81fe7f7f, 0xf0a05050, 0x44783c3c, 0xba259f9f,
            0xe34ba8a8, 0xf3a25151, 0xfe5da3a3, 0xc0804040, 0x8a058f8f,
            0xad3f9292, 0xbc219d9d, 0x48703838, 0x4f1f5f5, 0xdf63bcbc,
            0xc177b6b6, 0x75afdada, 0x63422121, 0x30201010, 0x1ae5ffff,
            0xefdf3f3, 0x6dbfd2d2, 0x4c81cdcd, 0x14180c0c, 0x35261313,
            0x2fc3ecec, 0xe1be5f5f, 0xa2359797, 0xcc884444, 0x392e1717,
            0x5793c4c4, 0xf255a7a7, 0x82fc7e7e, 0x477a3d3d, 0xacc86464,
            0xe7ba5d5d, 0x2b321919, 0x95e67373, 0xa0c06060, 0x98198181,
            0xd19e4f4f, 0x7fa3dcdc, 0x66442222, 0x7e542a2a, 0xab3b9090,
            0x830b8888, 0xca8c4646, 0x29c7eeee, 0xd36bb8b8, 0x3c281414,
            0x79a7dede, 0xe2bc5e5e, 0x1d160b0b, 0x76addbdb, 0x3bdbe0e0,
            0x56643232, 0x4e743a3a, 0x1e140a0a, 0xdb924949, 0xa0c0606,
            0x6c482424, 0xe4b85c5c, 0x5d9fc2c2, 0x6ebdd3d3, 0xef43acac,
            0xa6c46262, 0xa8399191, 0xa4319595, 0x37d3e4e4, 0x8bf27979,
            0x32d5e7e7, 0x438bc8c8, 0x596e3737, 0xb7da6d6d, 0x8c018d8d,
            0x64b1d5d5, 0xd29c4e4e, 0xe049a9a9, 0xb4d86c6c, 0xfaac5656,
            0x7f3f4f4, 0x25cfeaea, 0xafca6565, 0x8ef47a7a, 0xe947aeae,
            0x18100808, 0xd56fbaba, 0x88f07878, 0x6f4a2525, 0x725c2e2e,
            0x24381c1c, 0xf157a6a6, 0xc773b4b4, 0x5197c6c6, 0x23cbe8e8,
            0x7ca1dddd, 0x9ce87474, 0x213e1f1f, 0xdd964b4b, 0xdc61bdbd,
            0x860d8b8b, 0x850f8a8a, 0x90e07070, 0x427c3e3e, 0xc471b5b5,
            0xaacc6666, 0xd8904848, 0x5060303, 0x1f7f6f6, 0x121c0e0e,
            0xa3c26161, 0x5f6a3535, 0xf9ae5757, 0xd069b9b9, 0x91178686,
            0x5899c1c1, 0x273a1d1d, 0xb9279e9e, 0x38d9e1e1, 0x13ebf8f8,
            0xb32b9898, 0x33221111, 0xbbd26969, 0x70a9d9d9, 0x89078e8e,
            0xa7339494, 0xb62d9b9b, 0x223c1e1e, 0x92158787, 0x20c9e9e9,
            0x4987cece, 0xffaa5555, 0x78502828, 0x7aa5dfdf, 0x8f038c8c,
            0xf859a1a1, 0x80098989, 0x171a0d0d, 0xda65bfbf, 0x31d7e6e6,
            0xc6844242, 0xb8d06868, 0xc3824141, 0xb0299999, 0x775a2d2d,
            0x111e0f0f, 0xcb7bb0b0, 0xfca85454, 0xd66dbbbb, 0x3a2c1616,
          ],
          h = [
            0x63a5c663, 0x7c84f87c, 0x7799ee77, 0x7b8df67b, 0xf20dfff2,
            0x6bbdd66b, 0x6fb1de6f, 0xc55491c5, 0x30506030, 0x1030201,
            0x67a9ce67, 0x2b7d562b, 0xfe19e7fe, 0xd762b5d7, 0xabe64dab,
            0x769aec76, 0xca458fca, 0x829d1f82, 0xc94089c9, 0x7d87fa7d,
            0xfa15effa, 0x59ebb259, 0x47c98e47, 0xf00bfbf0, 0xadec41ad,
            0xd467b3d4, 0xa2fd5fa2, 0xafea45af, 0x9cbf239c, 0xa4f753a4,
            0x7296e472, 0xc05b9bc0, 0xb7c275b7, 0xfd1ce1fd, 0x93ae3d93,
            0x266a4c26, 0x365a6c36, 0x3f417e3f, 0xf702f5f7, 0xcc4f83cc,
            0x345c6834, 0xa5f451a5, 0xe534d1e5, 0xf108f9f1, 0x7193e271,
            0xd873abd8, 0x31536231, 0x153f2a15, 0x40c0804, 0xc75295c7,
            0x23654623, 0xc35e9dc3, 0x18283018, 0x96a13796, 0x50f0a05,
            0x9ab52f9a, 0x7090e07, 0x12362412, 0x809b1b80, 0xe23ddfe2,
            0xeb26cdeb, 0x27694e27, 0xb2cd7fb2, 0x759fea75, 0x91b1209,
            0x839e1d83, 0x2c74582c, 0x1a2e341a, 0x1b2d361b, 0x6eb2dc6e,
            0x5aeeb45a, 0xa0fb5ba0, 0x52f6a452, 0x3b4d763b, 0xd661b7d6,
            0xb3ce7db3, 0x297b5229, 0xe33edde3, 0x2f715e2f, 0x84971384,
            0x53f5a653, 0xd168b9d1, 0, 0xed2cc1ed, 0x20604020, 0xfc1fe3fc,
            0xb1c879b1, 0x5bedb65b, 0x6abed46a, 0xcb468dcb, 0xbed967be,
            0x394b7239, 0x4ade944a, 0x4cd4984c, 0x58e8b058, 0xcf4a85cf,
            0xd06bbbd0, 0xef2ac5ef, 0xaae54faa, 0xfb16edfb, 0x43c58643,
            0x4dd79a4d, 0x33556633, 0x85941185, 0x45cf8a45, 0xf910e9f9,
            0x2060402, 0x7f81fe7f, 0x50f0a050, 0x3c44783c, 0x9fba259f,
            0xa8e34ba8, 0x51f3a251, 0xa3fe5da3, 0x40c08040, 0x8f8a058f,
            0x92ad3f92, 0x9dbc219d, 0x38487038, 0xf504f1f5, 0xbcdf63bc,
            0xb6c177b6, 0xda75afda, 0x21634221, 0x10302010, 0xff1ae5ff,
            0xf30efdf3, 0xd26dbfd2, 0xcd4c81cd, 0xc14180c, 0x13352613,
            0xec2fc3ec, 0x5fe1be5f, 0x97a23597, 0x44cc8844, 0x17392e17,
            0xc45793c4, 0xa7f255a7, 0x7e82fc7e, 0x3d477a3d, 0x64acc864,
            0x5de7ba5d, 0x192b3219, 0x7395e673, 0x60a0c060, 0x81981981,
            0x4fd19e4f, 0xdc7fa3dc, 0x22664422, 0x2a7e542a, 0x90ab3b90,
            0x88830b88, 0x46ca8c46, 0xee29c7ee, 0xb8d36bb8, 0x143c2814,
            0xde79a7de, 0x5ee2bc5e, 0xb1d160b, 0xdb76addb, 0xe03bdbe0,
            0x32566432, 0x3a4e743a, 0xa1e140a, 0x49db9249, 0x60a0c06,
            0x246c4824, 0x5ce4b85c, 0xc25d9fc2, 0xd36ebdd3, 0xacef43ac,
            0x62a6c462, 0x91a83991, 0x95a43195, 0xe437d3e4, 0x798bf279,
            0xe732d5e7, 0xc8438bc8, 0x37596e37, 0x6db7da6d, 0x8d8c018d,
            0xd564b1d5, 0x4ed29c4e, 0xa9e049a9, 0x6cb4d86c, 0x56faac56,
            0xf407f3f4, 0xea25cfea, 0x65afca65, 0x7a8ef47a, 0xaee947ae,
            0x8181008, 0xbad56fba, 0x7888f078, 0x256f4a25, 0x2e725c2e,
            0x1c24381c, 0xa6f157a6, 0xb4c773b4, 0xc65197c6, 0xe823cbe8,
            0xdd7ca1dd, 0x749ce874, 0x1f213e1f, 0x4bdd964b, 0xbddc61bd,
            0x8b860d8b, 0x8a850f8a, 0x7090e070, 0x3e427c3e, 0xb5c471b5,
            0x66aacc66, 0x48d89048, 0x3050603, 0xf601f7f6, 0xe121c0e,
            0x61a3c261, 0x355f6a35, 0x57f9ae57, 0xb9d069b9, 0x86911786,
            0xc15899c1, 0x1d273a1d, 0x9eb9279e, 0xe138d9e1, 0xf813ebf8,
            0x98b32b98, 0x11332211, 0x69bbd269, 0xd970a9d9, 0x8e89078e,
            0x94a73394, 0x9bb62d9b, 0x1e223c1e, 0x87921587, 0xe920c9e9,
            0xce4987ce, 0x55ffaa55, 0x28785028, 0xdf7aa5df, 0x8c8f038c,
            0xa1f859a1, 0x89800989, 0xd171a0d, 0xbfda65bf, 0xe631d7e6,
            0x42c68442, 0x68b8d068, 0x41c38241, 0x99b02999, 0x2d775a2d,
            0xf111e0f, 0xb0cb7bb0, 0x54fca854, 0xbbd66dbb, 0x163a2c16,
          ],
          p = [
            0x6363a5c6, 0x7c7c84f8, 0x777799ee, 0x7b7b8df6, 0xf2f20dff,
            0x6b6bbdd6, 0x6f6fb1de, 0xc5c55491, 0x30305060, 0x1010302,
            0x6767a9ce, 0x2b2b7d56, 0xfefe19e7, 0xd7d762b5, 0xababe64d,
            0x76769aec, 0xcaca458f, 0x82829d1f, 0xc9c94089, 0x7d7d87fa,
            0xfafa15ef, 0x5959ebb2, 0x4747c98e, 0xf0f00bfb, 0xadadec41,
            0xd4d467b3, 0xa2a2fd5f, 0xafafea45, 0x9c9cbf23, 0xa4a4f753,
            0x727296e4, 0xc0c05b9b, 0xb7b7c275, 0xfdfd1ce1, 0x9393ae3d,
            0x26266a4c, 0x36365a6c, 0x3f3f417e, 0xf7f702f5, 0xcccc4f83,
            0x34345c68, 0xa5a5f451, 0xe5e534d1, 0xf1f108f9, 0x717193e2,
            0xd8d873ab, 0x31315362, 0x15153f2a, 0x4040c08, 0xc7c75295,
            0x23236546, 0xc3c35e9d, 0x18182830, 0x9696a137, 0x5050f0a,
            0x9a9ab52f, 0x707090e, 0x12123624, 0x80809b1b, 0xe2e23ddf,
            0xebeb26cd, 0x2727694e, 0xb2b2cd7f, 0x75759fea, 0x9091b12,
            0x83839e1d, 0x2c2c7458, 0x1a1a2e34, 0x1b1b2d36, 0x6e6eb2dc,
            0x5a5aeeb4, 0xa0a0fb5b, 0x5252f6a4, 0x3b3b4d76, 0xd6d661b7,
            0xb3b3ce7d, 0x29297b52, 0xe3e33edd, 0x2f2f715e, 0x84849713,
            0x5353f5a6, 0xd1d168b9, 0, 0xeded2cc1, 0x20206040, 0xfcfc1fe3,
            0xb1b1c879, 0x5b5bedb6, 0x6a6abed4, 0xcbcb468d, 0xbebed967,
            0x39394b72, 0x4a4ade94, 0x4c4cd498, 0x5858e8b0, 0xcfcf4a85,
            0xd0d06bbb, 0xefef2ac5, 0xaaaae54f, 0xfbfb16ed, 0x4343c586,
            0x4d4dd79a, 0x33335566, 0x85859411, 0x4545cf8a, 0xf9f910e9,
            0x2020604, 0x7f7f81fe, 0x5050f0a0, 0x3c3c4478, 0x9f9fba25,
            0xa8a8e34b, 0x5151f3a2, 0xa3a3fe5d, 0x4040c080, 0x8f8f8a05,
            0x9292ad3f, 0x9d9dbc21, 0x38384870, 0xf5f504f1, 0xbcbcdf63,
            0xb6b6c177, 0xdada75af, 0x21216342, 0x10103020, 0xffff1ae5,
            0xf3f30efd, 0xd2d26dbf, 0xcdcd4c81, 0xc0c1418, 0x13133526,
            0xecec2fc3, 0x5f5fe1be, 0x9797a235, 0x4444cc88, 0x1717392e,
            0xc4c45793, 0xa7a7f255, 0x7e7e82fc, 0x3d3d477a, 0x6464acc8,
            0x5d5de7ba, 0x19192b32, 0x737395e6, 0x6060a0c0, 0x81819819,
            0x4f4fd19e, 0xdcdc7fa3, 0x22226644, 0x2a2a7e54, 0x9090ab3b,
            0x8888830b, 0x4646ca8c, 0xeeee29c7, 0xb8b8d36b, 0x14143c28,
            0xdede79a7, 0x5e5ee2bc, 0xb0b1d16, 0xdbdb76ad, 0xe0e03bdb,
            0x32325664, 0x3a3a4e74, 0xa0a1e14, 0x4949db92, 0x6060a0c,
            0x24246c48, 0x5c5ce4b8, 0xc2c25d9f, 0xd3d36ebd, 0xacacef43,
            0x6262a6c4, 0x9191a839, 0x9595a431, 0xe4e437d3, 0x79798bf2,
            0xe7e732d5, 0xc8c8438b, 0x3737596e, 0x6d6db7da, 0x8d8d8c01,
            0xd5d564b1, 0x4e4ed29c, 0xa9a9e049, 0x6c6cb4d8, 0x5656faac,
            0xf4f407f3, 0xeaea25cf, 0x6565afca, 0x7a7a8ef4, 0xaeaee947,
            0x8081810, 0xbabad56f, 0x787888f0, 0x25256f4a, 0x2e2e725c,
            0x1c1c2438, 0xa6a6f157, 0xb4b4c773, 0xc6c65197, 0xe8e823cb,
            0xdddd7ca1, 0x74749ce8, 0x1f1f213e, 0x4b4bdd96, 0xbdbddc61,
            0x8b8b860d, 0x8a8a850f, 0x707090e0, 0x3e3e427c, 0xb5b5c471,
            0x6666aacc, 0x4848d890, 0x3030506, 0xf6f601f7, 0xe0e121c,
            0x6161a3c2, 0x35355f6a, 0x5757f9ae, 0xb9b9d069, 0x86869117,
            0xc1c15899, 0x1d1d273a, 0x9e9eb927, 0xe1e138d9, 0xf8f813eb,
            0x9898b32b, 0x11113322, 0x6969bbd2, 0xd9d970a9, 0x8e8e8907,
            0x9494a733, 0x9b9bb62d, 0x1e1e223c, 0x87879215, 0xe9e920c9,
            0xcece4987, 0x5555ffaa, 0x28287850, 0xdfdf7aa5, 0x8c8c8f03,
            0xa1a1f859, 0x89898009, 0xd0d171a, 0xbfbfda65, 0xe6e631d7,
            0x4242c684, 0x6868b8d0, 0x4141c382, 0x9999b029, 0x2d2d775a,
            0xf0f111e, 0xb0b0cb7b, 0x5454fca8, 0xbbbbd66d, 0x16163a2c,
          ],
          m = [
            0x51f4a750, 0x7e416553, 0x1a17a4c3, 0x3a275e96, 0x3bab6bcb,
            0x1f9d45f1, 0xacfa58ab, 0x4be30393, 0x2030fa55, 0xad766df6,
            0x88cc7691, 0xf5024c25, 0x4fe5d7fc, 0xc52acbd7, 0x26354480,
            0xb562a38f, 0xdeb15a49, 0x25ba1b67, 0x45ea0e98, 0x5dfec0e1,
            0xc32f7502, 0x814cf012, 0x8d4697a3, 0x6bd3f9c6, 0x38f5fe7,
            0x15929c95, 0xbf6d7aeb, 0x955259da, 0xd4be832d, 0x587421d3,
            0x49e06929, 0x8ec9c844, 0x75c2896a, 0xf48e7978, 0x99583e6b,
            0x27b971dd, 0xbee14fb6, 0xf088ad17, 0xc920ac66, 0x7dce3ab4,
            0x63df4a18, 0xe51a3182, 0x97513360, 0x62537f45, 0xb16477e0,
            0xbb6bae84, 0xfe81a01c, 0xf9082b94, 0x70486858, 0x8f45fd19,
            0x94de6c87, 0x527bf8b7, 0xab73d323, 0x724b02e2, 0xe31f8f57,
            0x6655ab2a, 0xb2eb2807, 0x2fb5c203, 0x86c57b9a, 0xd33708a5,
            0x302887f2, 0x23bfa5b2, 0x2036aba, 0xed16825c, 0x8acf1c2b,
            0xa779b492, 0xf307f2f0, 0x4e69e2a1, 0x65daf4cd, 0x605bed5,
            0xd134621f, 0xc4a6fe8a, 0x342e539d, 0xa2f355a0, 0x58ae132,
            0xa4f6eb75, 0xb83ec39, 0x4060efaa, 0x5e719f06, 0xbd6e1051,
            0x3e218af9, 0x96dd063d, 0xdd3e05ae, 0x4de6bd46, 0x91548db5,
            0x71c45d05, 0x406d46f, 0x605015ff, 0x1998fb24, 0xd6bde997,
            0x894043cc, 0x67d99e77, 0xb0e842bd, 0x7898b88, 0xe7195b38,
            0x79c8eedb, 0xa17c0a47, 0x7c420fe9, 0xf8841ec9, 0, 0x9808683,
            0x322bed48, 0x1e1170ac, 0x6c5a724e, 0xfd0efffb, 0xf853856,
            0x3daed51e, 0x362d3927, 0xa0fd964, 0x685ca621, 0x9b5b54d1,
            0x24362e3a, 0xc0a67b1, 0x9357e70f, 0xb4ee96d2, 0x1b9b919e,
            0x80c0c54f, 0x61dc20a2, 0x5a774b69, 0x1c121a16, 0xe293ba0a,
            0xc0a02ae5, 0x3c22e043, 0x121b171d, 0xe090d0b, 0xf28bc7ad,
            0x2db6a8b9, 0x141ea9c8, 0x57f11985, 0xaf75074c, 0xee99ddbb,
            0xa37f60fd, 0xf701269f, 0x5c72f5bc, 0x44663bc5, 0x5bfb7e34,
            0x8b432976, 0xcb23c6dc, 0xb6edfc68, 0xb8e4f163, 0xd731dcca,
            0x42638510, 0x13972240, 0x84c61120, 0x854a247d, 0xd2bb3df8,
            0xaef93211, 0xc729a16d, 0x1d9e2f4b, 0xdcb230f3, 0xd8652ec,
            0x77c1e3d0, 0x2bb3166c, 0xa970b999, 0x119448fa, 0x47e96422,
            0xa8fc8cc4, 0xa0f03f1a, 0x567d2cd8, 0x223390ef, 0x87494ec7,
            0xd938d1c1, 0x8ccaa2fe, 0x98d40b36, 0xa6f581cf, 0xa57ade28,
            0xdab78e26, 0x3fadbfa4, 0x2c3a9de4, 0x5078920d, 0x6a5fcc9b,
            0x547e4662, 0xf68d13c2, 0x90d8b8e8, 0x2e39f75e, 0x82c3aff5,
            0x9f5d80be, 0x69d0937c, 0x6fd52da9, 0xcf2512b3, 0xc8ac993b,
            0x10187da7, 0xe89c636e, 0xdb3bbb7b, 0xcd267809, 0x6e5918f4,
            0xec9ab701, 0x834f9aa8, 0xe6956e65, 0xaaffe67e, 0x21bccf08,
            0xef15e8e6, 0xbae79bd9, 0x4a6f36ce, 0xea9f09d4, 0x29b07cd6,
            0x31a4b2af, 0x2a3f2331, 0xc6a59430, 0x35a266c0, 0x744ebc37,
            0xfc82caa6, 0xe090d0b0, 0x33a7d815, 0xf104984a, 0x41ecdaf7,
            0x7fcd500e, 0x1791f62f, 0x764dd68d, 0x43efb04d, 0xccaa4d54,
            0xe49604df, 0x9ed1b5e3, 0x4c6a881b, 0xc12c1fb8, 0x4665517f,
            0x9d5eea04, 0x18c355d, 0xfa877473, 0xfb0b412e, 0xb3671d5a,
            0x92dbd252, 0xe9105633, 0x6dd64713, 0x9ad7618c, 0x37a10c7a,
            0x59f8148e, 0xeb133c89, 0xcea927ee, 0xb761c935, 0xe11ce5ed,
            0x7a47b13c, 0x9cd2df59, 0x55f2733f, 0x1814ce79, 0x73c737bf,
            0x53f7cdea, 0x5ffdaa5b, 0xdf3d6f14, 0x7844db86, 0xcaaff381,
            0xb968c43e, 0x3824342c, 0xc2a3405f, 0x161dc372, 0xbce2250c,
            0x283c498b, 0xff0d9541, 0x39a80171, 0x80cb3de, 0xd8b4e49c,
            0x6456c190, 0x7bcb8461, 0xd532b670, 0x486c5c74, 0xd0b85742,
          ],
          g = [
            0x5051f4a7, 0x537e4165, 0xc31a17a4, 0x963a275e, 0xcb3bab6b,
            0xf11f9d45, 0xabacfa58, 0x934be303, 0x552030fa, 0xf6ad766d,
            0x9188cc76, 0x25f5024c, 0xfc4fe5d7, 0xd7c52acb, 0x80263544,
            0x8fb562a3, 0x49deb15a, 0x6725ba1b, 0x9845ea0e, 0xe15dfec0,
            0x2c32f75, 0x12814cf0, 0xa38d4697, 0xc66bd3f9, 0xe7038f5f,
            0x9515929c, 0xebbf6d7a, 0xda955259, 0x2dd4be83, 0xd3587421,
            0x2949e069, 0x448ec9c8, 0x6a75c289, 0x78f48e79, 0x6b99583e,
            0xdd27b971, 0xb6bee14f, 0x17f088ad, 0x66c920ac, 0xb47dce3a,
            0x1863df4a, 0x82e51a31, 0x60975133, 0x4562537f, 0xe0b16477,
            0x84bb6bae, 0x1cfe81a0, 0x94f9082b, 0x58704868, 0x198f45fd,
            0x8794de6c, 0xb7527bf8, 0x23ab73d3, 0xe2724b02, 0x57e31f8f,
            0x2a6655ab, 0x7b2eb28, 0x32fb5c2, 0x9a86c57b, 0xa5d33708,
            0xf2302887, 0xb223bfa5, 0xba02036a, 0x5ced1682, 0x2b8acf1c,
            0x92a779b4, 0xf0f307f2, 0xa14e69e2, 0xcd65daf4, 0xd50605be,
            0x1fd13462, 0x8ac4a6fe, 0x9d342e53, 0xa0a2f355, 0x32058ae1,
            0x75a4f6eb, 0x390b83ec, 0xaa4060ef, 0x65e719f, 0x51bd6e10,
            0xf93e218a, 0x3d96dd06, 0xaedd3e05, 0x464de6bd, 0xb591548d,
            0x571c45d, 0x6f0406d4, 0xff605015, 0x241998fb, 0x97d6bde9,
            0xcc894043, 0x7767d99e, 0xbdb0e842, 0x8807898b, 0x38e7195b,
            0xdb79c8ee, 0x47a17c0a, 0xe97c420f, 0xc9f8841e, 0, 0x83098086,
            0x48322bed, 0xac1e1170, 0x4e6c5a72, 0xfbfd0eff, 0x560f8538,
            0x1e3daed5, 0x27362d39, 0x640a0fd9, 0x21685ca6, 0xd19b5b54,
            0x3a24362e, 0xb10c0a67, 0xf9357e7, 0xd2b4ee96, 0x9e1b9b91,
            0x4f80c0c5, 0xa261dc20, 0x695a774b, 0x161c121a, 0xae293ba,
            0xe5c0a02a, 0x433c22e0, 0x1d121b17, 0xb0e090d, 0xadf28bc7,
            0xb92db6a8, 0xc8141ea9, 0x8557f119, 0x4caf7507, 0xbbee99dd,
            0xfda37f60, 0x9ff70126, 0xbc5c72f5, 0xc544663b, 0x345bfb7e,
            0x768b4329, 0xdccb23c6, 0x68b6edfc, 0x63b8e4f1, 0xcad731dc,
            0x10426385, 0x40139722, 0x2084c611, 0x7d854a24, 0xf8d2bb3d,
            0x11aef932, 0x6dc729a1, 0x4b1d9e2f, 0xf3dcb230, 0xec0d8652,
            0xd077c1e3, 0x6c2bb316, 0x99a970b9, 0xfa119448, 0x2247e964,
            0xc4a8fc8c, 0x1aa0f03f, 0xd8567d2c, 0xef223390, 0xc787494e,
            0xc1d938d1, 0xfe8ccaa2, 0x3698d40b, 0xcfa6f581, 0x28a57ade,
            0x26dab78e, 0xa43fadbf, 0xe42c3a9d, 0xd507892, 0x9b6a5fcc,
            0x62547e46, 0xc2f68d13, 0xe890d8b8, 0x5e2e39f7, 0xf582c3af,
            0xbe9f5d80, 0x7c69d093, 0xa96fd52d, 0xb3cf2512, 0x3bc8ac99,
            0xa710187d, 0x6ee89c63, 0x7bdb3bbb, 0x9cd2678, 0xf46e5918,
            0x1ec9ab7, 0xa8834f9a, 0x65e6956e, 0x7eaaffe6, 0x821bccf,
            0xe6ef15e8, 0xd9bae79b, 0xce4a6f36, 0xd4ea9f09, 0xd629b07c,
            0xaf31a4b2, 0x312a3f23, 0x30c6a594, 0xc035a266, 0x37744ebc,
            0xa6fc82ca, 0xb0e090d0, 0x1533a7d8, 0x4af10498, 0xf741ecda,
            0xe7fcd50, 0x2f1791f6, 0x8d764dd6, 0x4d43efb0, 0x54ccaa4d,
            0xdfe49604, 0xe39ed1b5, 0x1b4c6a88, 0xb8c12c1f, 0x7f466551,
            0x49d5eea, 0x5d018c35, 0x73fa8774, 0x2efb0b41, 0x5ab3671d,
            0x5292dbd2, 0x33e91056, 0x136dd647, 0x8c9ad761, 0x7a37a10c,
            0x8e59f814, 0x89eb133c, 0xeecea927, 0x35b761c9, 0xede11ce5,
            0x3c7a47b1, 0x599cd2df, 0x3f55f273, 0x791814ce, 0xbf73c737,
            0xea53f7cd, 0x5b5ffdaa, 0x14df3d6f, 0x867844db, 0x81caaff3,
            0x3eb968c4, 0x2c382434, 0x5fc2a340, 0x72161dc3, 0xcbce225,
            0x8b283c49, 0x41ff0d95, 0x7139a801, 0xde080cb3, 0x9cd8b4e4,
            0x906456c1, 0x617bcb84, 0x70d532b6, 0x74486c5c, 0x42d0b857,
          ],
          y = [
            0xa75051f4, 0x65537e41, 0xa4c31a17, 0x5e963a27, 0x6bcb3bab,
            0x45f11f9d, 0x58abacfa, 0x3934be3, 0xfa552030, 0x6df6ad76,
            0x769188cc, 0x4c25f502, 0xd7fc4fe5, 0xcbd7c52a, 0x44802635,
            0xa38fb562, 0x5a49deb1, 0x1b6725ba, 0xe9845ea, 0xc0e15dfe,
            0x7502c32f, 0xf012814c, 0x97a38d46, 0xf9c66bd3, 0x5fe7038f,
            0x9c951592, 0x7aebbf6d, 0x59da9552, 0x832dd4be, 0x21d35874,
            0x692949e0, 0xc8448ec9, 0x896a75c2, 0x7978f48e, 1047239e3,
            0x71dd27b9, 0x4fb6bee1, 0xad17f088, 0xac66c920, 0x3ab47dce,
            0x4a1863df, 0x3182e51a, 0x33609751, 0x7f456253, 0x77e0b164,
            0xae84bb6b, 0xa01cfe81, 0x2b94f908, 0x68587048, 0xfd198f45,
            0x6c8794de, 0xf8b7527b, 0xd323ab73, 0x2e2724b, 0x8f57e31f,
            0xab2a6655, 0x2807b2eb, 0xc2032fb5, 0x7b9a86c5, 0x8a5d337,
            0x87f23028, 0xa5b223bf, 0x6aba0203, 0x825ced16, 0x1c2b8acf,
            0xb492a779, 0xf2f0f307, 0xe2a14e69, 0xf4cd65da, 0xbed50605,
            0x621fd134, 0xfe8ac4a6, 0x539d342e, 0x55a0a2f3, 0xe132058a,
            0xeb75a4f6, 0xec390b83, 0xefaa4060, 0x9f065e71, 0x1051bd6e,
            0x8af93e21, 0x63d96dd, 0x5aedd3e, 0xbd464de6, 0x8db59154,
            0x5d0571c4, 0xd46f0406, 0x15ff6050, 0xfb241998, 0xe997d6bd,
            0x43cc8940, 0x9e7767d9, 0x42bdb0e8, 0x8b880789, 0x5b38e719,
            0xeedb79c8, 0xa47a17c, 0xfe97c42, 0x1ec9f884, 0, 0x86830980,
            0xed48322b, 0x70ac1e11, 0x724e6c5a, 0xfffbfd0e, 0x38560f85,
            0xd51e3dae, 0x3927362d, 0xd9640a0f, 0xa621685c, 0x54d19b5b,
            0x2e3a2436, 0x67b10c0a, 0xe70f9357, 0x96d2b4ee, 0x919e1b9b,
            0xc54f80c0, 0x20a261dc, 0x4b695a77, 0x1a161c12, 0xba0ae293,
            0x2ae5c0a0, 0xe0433c22, 0x171d121b, 0xd0b0e09, 0xc7adf28b,
            0xa8b92db6, 0xa9c8141e, 0x198557f1, 0x74caf75, 0xddbbee99,
            0x60fda37f, 0x269ff701, 0xf5bc5c72, 0x3bc54466, 0x7e345bfb,
            0x29768b43, 0xc6dccb23, 0xfc68b6ed, 0xf163b8e4, 0xdccad731,
            0x85104263, 0x22401397, 0x112084c6, 0x247d854a, 0x3df8d2bb,
            0x3211aef9, 0xa16dc729, 0x2f4b1d9e, 0x30f3dcb2, 0x52ec0d86,
            0xe3d077c1, 0x166c2bb3, 0xb999a970, 0x48fa1194, 0x642247e9,
            0x8cc4a8fc, 0x3f1aa0f0, 0x2cd8567d, 0x90ef2233, 0x4ec78749,
            0xd1c1d938, 0xa2fe8cca, 0xb3698d4, 0x81cfa6f5, 0xde28a57a,
            0x8e26dab7, 0xbfa43fad, 0x9de42c3a, 0x920d5078, 0xcc9b6a5f,
            0x4662547e, 0x13c2f68d, 0xb8e890d8, 0xf75e2e39, 0xaff582c3,
            0x80be9f5d, 0x937c69d0, 0x2da96fd5, 0x12b3cf25, 0x993bc8ac,
            0x7da71018, 0x636ee89c, 0xbb7bdb3b, 0x7809cd26, 0x18f46e59,
            0xb701ec9a, 0x9aa8834f, 0x6e65e695, 0xe67eaaff, 0xcf0821bc,
            0xe8e6ef15, 0x9bd9bae7, 0x36ce4a6f, 0x9d4ea9f, 0x7cd629b0,
            0xb2af31a4, 0x23312a3f, 0x9430c6a5, 0x66c035a2, 0xbc37744e,
            0xcaa6fc82, 0xd0b0e090, 0xd81533a7, 0x984af104, 0xdaf741ec,
            0x500e7fcd, 0xf62f1791, 0xd68d764d, 0xb04d43ef, 0x4d54ccaa,
            0x4dfe496, 0xb5e39ed1, 0x881b4c6a, 0x1fb8c12c, 0x517f4665,
            0xea049d5e, 0x355d018c, 0x7473fa87, 0x412efb0b, 0x1d5ab367,
            0xd25292db, 0x5633e910, 0x47136dd6, 0x618c9ad7, 0xc7a37a1,
            0x148e59f8, 0x3c89eb13, 0x27eecea9, 0xc935b761, 0xe5ede11c,
            0xb13c7a47, 0xdf599cd2, 0x733f55f2, 0xce791814, 0x37bf73c7,
            0xcdea53f7, 0xaa5b5ffd, 0x6f14df3d, 0xdb867844, 0xf381caaf,
            0xc43eb968, 0x342c3824, 0x405fc2a3, 0xc372161d, 0x250cbce2,
            0x498b283c, 0x9541ff0d, 0x17139a8, 0xb3de080c, 0xe49cd8b4,
            0xc1906456, 0x84617bcb, 0xb670d532, 0x5c74486c, 0x5742d0b8,
          ],
          v = [
            0xf4a75051, 0x4165537e, 0x17a4c31a, 0x275e963a, 0xab6bcb3b,
            0x9d45f11f, 0xfa58abac, 0xe303934b, 0x30fa5520, 0x766df6ad,
            0xcc769188, 0x24c25f5, 0xe5d7fc4f, 0x2acbd7c5, 0x35448026,
            0x62a38fb5, 0xb15a49de, 0xba1b6725, 0xea0e9845, 0xfec0e15d,
            0x2f7502c3, 0x4cf01281, 0x4697a38d, 0xd3f9c66b, 0x8f5fe703,
            0x929c9515, 0x6d7aebbf, 0x5259da95, 0xbe832dd4, 0x7421d358,
            0xe0692949, 0xc9c8448e, 0xc2896a75, 0x8e7978f4, 0x583e6b99,
            0xb971dd27, 0xe14fb6be, 0x88ad17f0, 0x20ac66c9, 0xce3ab47d,
            0xdf4a1863, 0x1a3182e5, 0x51336097, 0x537f4562, 0x6477e0b1,
            0x6bae84bb, 0x81a01cfe, 0x82b94f9, 0x48685870, 0x45fd198f,
            0xde6c8794, 0x7bf8b752, 0x73d323ab, 0x4b02e272, 0x1f8f57e3,
            0x55ab2a66, 0xeb2807b2, 0xb5c2032f, 0xc57b9a86, 0x3708a5d3,
            679998e3, 0xbfa5b223, 0x36aba02, 0x16825ced, 0xcf1c2b8a, 0x79b492a7,
            0x7f2f0f3, 0x69e2a14e, 0xdaf4cd65, 0x5bed506, 0x34621fd1,
            0xa6fe8ac4, 0x2e539d34, 0xf355a0a2, 0x8ae13205, 0xf6eb75a4,
            0x83ec390b, 0x60efaa40, 0x719f065e, 0x6e1051bd, 0x218af93e,
            0xdd063d96, 0x3e05aedd, 0xe6bd464d, 0x548db591, 0xc45d0571,
            0x6d46f04, 0x5015ff60, 0x98fb2419, 0xbde997d6, 0x4043cc89,
            0xd99e7767, 0xe842bdb0, 0x898b8807, 0x195b38e7, 0xc8eedb79,
            0x7c0a47a1, 0x420fe97c, 0x841ec9f8, 0, 0x80868309, 0x2bed4832,
            0x1170ac1e, 0x5a724e6c, 0xefffbfd, 0x8538560f, 0xaed51e3d,
            0x2d392736, 0xfd9640a, 0x5ca62168, 0x5b54d19b, 0x362e3a24,
            0xa67b10c, 0x57e70f93, 0xee96d2b4, 0x9b919e1b, 0xc0c54f80,
            0xdc20a261, 0x774b695a, 0x121a161c, 0x93ba0ae2, 0xa02ae5c0,
            0x22e0433c, 0x1b171d12, 0x90d0b0e, 0x8bc7adf2, 0xb6a8b92d,
            0x1ea9c814, 0xf1198557, 0x75074caf, 0x99ddbbee, 0x7f60fda3,
            0x1269ff7, 0x72f5bc5c, 0x663bc544, 0xfb7e345b, 0x4329768b,
            0x23c6dccb, 0xedfc68b6, 0xe4f163b8, 0x31dccad7, 0x63851042,
            0x97224013, 0xc6112084, 0x4a247d85, 0xbb3df8d2, 0xf93211ae,
            0x29a16dc7, 0x9e2f4b1d, 0xb230f3dc, 0x8652ec0d, 0xc1e3d077,
            0xb3166c2b, 0x70b999a9, 0x9448fa11, 0xe9642247, 0xfc8cc4a8,
            0xf03f1aa0, 0x7d2cd856, 0x3390ef22, 0x494ec787, 0x38d1c1d9,
            0xcaa2fe8c, 0xd40b3698, 0xf581cfa6, 0x7ade28a5, 0xb78e26da,
            0xadbfa43f, 0x3a9de42c, 0x78920d50, 0x5fcc9b6a, 0x7e466254,
            0x8d13c2f6, 0xd8b8e890, 0x39f75e2e, 0xc3aff582, 0x5d80be9f,
            0xd0937c69, 0xd52da96f, 0x2512b3cf, 0xac993bc8, 0x187da710,
            0x9c636ee8, 0x3bbb7bdb, 0x267809cd, 0x5918f46e, 0x9ab701ec,
            0x4f9aa883, 0x956e65e6, 0xffe67eaa, 0xbccf0821, 0x15e8e6ef,
            0xe79bd9ba, 0x6f36ce4a, 0x9f09d4ea, 0xb07cd629, 0xa4b2af31,
            0x3f23312a, 0xa59430c6, 0xa266c035, 0x4ebc3774, 0x82caa6fc,
            0x90d0b0e0, 0xa7d81533, 0x4984af1, 0xecdaf741, 0xcd500e7f,
            0x91f62f17, 0x4dd68d76, 0xefb04d43, 0xaa4d54cc, 0x9604dfe4,
            0xd1b5e39e, 0x6a881b4c, 0x2c1fb8c1, 0x65517f46, 0x5eea049d,
            0x8c355d01, 0x877473fa, 0xb412efb, 0x671d5ab3, 0xdbd25292,
            0x105633e9, 0xd647136d, 0xd7618c9a, 0xa10c7a37, 0xf8148e59,
            0x133c89eb, 0xa927eece, 0x61c935b7, 0x1ce5ede1, 0x47b13c7a,
            0xd2df599c, 0xf2733f55, 0x14ce7918, 0xc737bf73, 0xf7cdea53,
            0xfdaa5b5f, 0x3d6f14df, 0x44db8678, 0xaff381ca, 0x68c43eb9,
            0x24342c38, 0xa3405fc2, 0x1dc37216, 0xe2250cbc, 0x3c498b28,
            0xd9541ff, 0xa8017139, 0xcb3de08, 0xb4e49cd8, 0x56c19064,
            0xcb84617b, 0x32b670d5, 0x6c5c7448, 0xb85742d0,
          ],
          S = [
            0, 0xe090d0b, 0x1c121a16, 0x121b171d, 0x3824342c, 0x362d3927,
            0x24362e3a, 0x2a3f2331, 0x70486858, 0x7e416553, 0x6c5a724e,
            0x62537f45, 0x486c5c74, 0x4665517f, 0x547e4662, 0x5a774b69,
            0xe090d0b0, 0xee99ddbb, 0xfc82caa6, 0xf28bc7ad, 0xd8b4e49c,
            0xd6bde997, 0xc4a6fe8a, 0xcaaff381, 0x90d8b8e8, 0x9ed1b5e3,
            0x8ccaa2fe, 0x82c3aff5, 0xa8fc8cc4, 0xa6f581cf, 0xb4ee96d2,
            0xbae79bd9, 0xdb3bbb7b, 0xd532b670, 0xc729a16d, 0xc920ac66,
            0xe31f8f57, 0xed16825c, 0xff0d9541, 0xf104984a, 0xab73d323,
            0xa57ade28, 0xb761c935, 0xb968c43e, 0x9357e70f, 0x9d5eea04,
            0x8f45fd19, 0x814cf012, 0x3bab6bcb, 0x35a266c0, 0x27b971dd,
            0x29b07cd6, 0x38f5fe7, 0xd8652ec, 0x1f9d45f1, 0x119448fa,
            0x4be30393, 0x45ea0e98, 0x57f11985, 0x59f8148e, 0x73c737bf,
            0x7dce3ab4, 0x6fd52da9, 0x61dc20a2, 0xad766df6, 0xa37f60fd,
            0xb16477e0, 0xbf6d7aeb, 0x955259da, 0x9b5b54d1, 0x894043cc,
            0x87494ec7, 0xdd3e05ae, 0xd33708a5, 0xc12c1fb8, 0xcf2512b3,
            0xe51a3182, 0xeb133c89, 0xf9082b94, 0xf701269f, 0x4de6bd46,
            0x43efb04d, 0x51f4a750, 0x5ffdaa5b, 0x75c2896a, 0x7bcb8461,
            0x69d0937c, 0x67d99e77, 0x3daed51e, 0x33a7d815, 0x21bccf08,
            0x2fb5c203, 0x58ae132, 0xb83ec39, 0x1998fb24, 0x1791f62f,
            0x764dd68d, 0x7844db86, 0x6a5fcc9b, 0x6456c190, 0x4e69e2a1,
            0x4060efaa, 0x527bf8b7, 0x5c72f5bc, 0x605bed5, 0x80cb3de,
            0x1a17a4c3, 0x141ea9c8, 0x3e218af9, 0x302887f2, 0x223390ef,
            0x2c3a9de4, 0x96dd063d, 0x98d40b36, 0x8acf1c2b, 0x84c61120,
            0xaef93211, 0xa0f03f1a, 0xb2eb2807, 0xbce2250c, 0xe6956e65,
            0xe89c636e, 0xfa877473, 0xf48e7978, 0xdeb15a49, 0xd0b85742,
            0xc2a3405f, 0xccaa4d54, 0x41ecdaf7, 0x4fe5d7fc, 0x5dfec0e1,
            0x53f7cdea, 0x79c8eedb, 0x77c1e3d0, 0x65daf4cd, 0x6bd3f9c6,
            0x31a4b2af, 0x3fadbfa4, 0x2db6a8b9, 0x23bfa5b2, 0x9808683,
            0x7898b88, 0x15929c95, 0x1b9b919e, 0xa17c0a47, 0xaf75074c,
            0xbd6e1051, 0xb3671d5a, 0x99583e6b, 0x97513360, 0x854a247d,
            0x8b432976, 0xd134621f, 0xdf3d6f14, 0xcd267809, 0xc32f7502,
            0xe9105633, 0xe7195b38, 0xf5024c25, 0xfb0b412e, 0x9ad7618c,
            0x94de6c87, 0x86c57b9a, 0x88cc7691, 0xa2f355a0, 0xacfa58ab,
            0xbee14fb6, 0xb0e842bd, 0xea9f09d4, 0xe49604df, 0xf68d13c2,
            0xf8841ec9, 0xd2bb3df8, 0xdcb230f3, 0xcea927ee, 0xc0a02ae5,
            0x7a47b13c, 0x744ebc37, 0x6655ab2a, 0x685ca621, 0x42638510,
            0x4c6a881b, 0x5e719f06, 0x5078920d, 0xa0fd964, 0x406d46f,
            0x161dc372, 0x1814ce79, 0x322bed48, 0x3c22e043, 0x2e39f75e,
            0x2030fa55, 0xec9ab701, 0xe293ba0a, 0xf088ad17, 0xfe81a01c,
            0xd4be832d, 0xdab78e26, 0xc8ac993b, 0xc6a59430, 0x9cd2df59,
            0x92dbd252, 0x80c0c54f, 0x8ec9c844, 0xa4f6eb75, 0xaaffe67e,
            0xb8e4f163, 0xb6edfc68, 0xc0a67b1, 0x2036aba, 0x10187da7,
            0x1e1170ac, 0x342e539d, 0x3a275e96, 0x283c498b, 0x26354480,
            0x7c420fe9, 0x724b02e2, 0x605015ff, 0x6e5918f4, 0x44663bc5,
            0x4a6f36ce, 0x587421d3, 0x567d2cd8, 0x37a10c7a, 0x39a80171,
            0x2bb3166c, 0x25ba1b67, 0xf853856, 0x18c355d, 0x13972240,
            0x1d9e2f4b, 0x47e96422, 0x49e06929, 0x5bfb7e34, 0x55f2733f,
            0x7fcd500e, 0x71c45d05, 0x63df4a18, 0x6dd64713, 0xd731dcca,
            0xd938d1c1, 0xcb23c6dc, 0xc52acbd7, 0xef15e8e6, 0xe11ce5ed,
            0xf307f2f0, 0xfd0efffb, 0xa779b492, 0xa970b999, 0xbb6bae84,
            0xb562a38f, 0x9f5d80be, 0x91548db5, 0x834f9aa8, 0x8d4697a3,
          ],
          w = [
            0, 0xb0e090d, 0x161c121a, 0x1d121b17, 0x2c382434, 0x27362d39,
            0x3a24362e, 0x312a3f23, 0x58704868, 0x537e4165, 0x4e6c5a72,
            0x4562537f, 0x74486c5c, 0x7f466551, 0x62547e46, 0x695a774b,
            0xb0e090d0, 0xbbee99dd, 0xa6fc82ca, 0xadf28bc7, 0x9cd8b4e4,
            0x97d6bde9, 0x8ac4a6fe, 0x81caaff3, 0xe890d8b8, 0xe39ed1b5,
            0xfe8ccaa2, 0xf582c3af, 0xc4a8fc8c, 0xcfa6f581, 0xd2b4ee96,
            0xd9bae79b, 0x7bdb3bbb, 0x70d532b6, 0x6dc729a1, 0x66c920ac,
            0x57e31f8f, 0x5ced1682, 0x41ff0d95, 0x4af10498, 0x23ab73d3,
            0x28a57ade, 0x35b761c9, 0x3eb968c4, 0xf9357e7, 0x49d5eea,
            0x198f45fd, 0x12814cf0, 0xcb3bab6b, 0xc035a266, 0xdd27b971,
            0xd629b07c, 0xe7038f5f, 0xec0d8652, 0xf11f9d45, 0xfa119448,
            0x934be303, 0x9845ea0e, 0x8557f119, 0x8e59f814, 0xbf73c737,
            0xb47dce3a, 0xa96fd52d, 0xa261dc20, 0xf6ad766d, 0xfda37f60,
            0xe0b16477, 0xebbf6d7a, 0xda955259, 0xd19b5b54, 0xcc894043,
            0xc787494e, 0xaedd3e05, 0xa5d33708, 0xb8c12c1f, 0xb3cf2512,
            0x82e51a31, 0x89eb133c, 0x94f9082b, 0x9ff70126, 0x464de6bd,
            0x4d43efb0, 0x5051f4a7, 0x5b5ffdaa, 0x6a75c289, 0x617bcb84,
            0x7c69d093, 0x7767d99e, 0x1e3daed5, 0x1533a7d8, 0x821bccf,
            0x32fb5c2, 0x32058ae1, 0x390b83ec, 0x241998fb, 0x2f1791f6,
            0x8d764dd6, 0x867844db, 0x9b6a5fcc, 0x906456c1, 0xa14e69e2,
            0xaa4060ef, 0xb7527bf8, 0xbc5c72f5, 0xd50605be, 0xde080cb3,
            0xc31a17a4, 0xc8141ea9, 0xf93e218a, 0xf2302887, 0xef223390,
            0xe42c3a9d, 0x3d96dd06, 0x3698d40b, 0x2b8acf1c, 0x2084c611,
            0x11aef932, 0x1aa0f03f, 0x7b2eb28, 0xcbce225, 0x65e6956e,
            0x6ee89c63, 0x73fa8774, 0x78f48e79, 0x49deb15a, 0x42d0b857,
            0x5fc2a340, 0x54ccaa4d, 0xf741ecda, 0xfc4fe5d7, 0xe15dfec0,
            0xea53f7cd, 0xdb79c8ee, 0xd077c1e3, 0xcd65daf4, 0xc66bd3f9,
            0xaf31a4b2, 0xa43fadbf, 0xb92db6a8, 0xb223bfa5, 0x83098086,
            0x8807898b, 0x9515929c, 0x9e1b9b91, 0x47a17c0a, 0x4caf7507,
            0x51bd6e10, 0x5ab3671d, 0x6b99583e, 0x60975133, 0x7d854a24,
            0x768b4329, 0x1fd13462, 0x14df3d6f, 0x9cd2678, 0x2c32f75,
            0x33e91056, 0x38e7195b, 0x25f5024c, 0x2efb0b41, 0x8c9ad761,
            0x8794de6c, 0x9a86c57b, 0x9188cc76, 0xa0a2f355, 0xabacfa58,
            0xb6bee14f, 0xbdb0e842, 0xd4ea9f09, 0xdfe49604, 0xc2f68d13,
            0xc9f8841e, 0xf8d2bb3d, 0xf3dcb230, 0xeecea927, 0xe5c0a02a,
            0x3c7a47b1, 0x37744ebc, 0x2a6655ab, 0x21685ca6, 0x10426385,
            0x1b4c6a88, 0x65e719f, 0xd507892, 0x640a0fd9, 0x6f0406d4,
            0x72161dc3, 0x791814ce, 0x48322bed, 0x433c22e0, 0x5e2e39f7,
            0x552030fa, 0x1ec9ab7, 0xae293ba, 0x17f088ad, 0x1cfe81a0,
            0x2dd4be83, 0x26dab78e, 0x3bc8ac99, 0x30c6a594, 0x599cd2df,
            0x5292dbd2, 0x4f80c0c5, 0x448ec9c8, 0x75a4f6eb, 0x7eaaffe6,
            0x63b8e4f1, 0x68b6edfc, 0xb10c0a67, 0xba02036a, 0xa710187d,
            0xac1e1170, 0x9d342e53, 0x963a275e, 0x8b283c49, 0x80263544,
            0xe97c420f, 0xe2724b02, 0xff605015, 0xf46e5918, 0xc544663b,
            0xce4a6f36, 0xd3587421, 0xd8567d2c, 0x7a37a10c, 0x7139a801,
            0x6c2bb316, 0x6725ba1b, 0x560f8538, 0x5d018c35, 0x40139722,
            0x4b1d9e2f, 0x2247e964, 0x2949e069, 0x345bfb7e, 0x3f55f273,
            0xe7fcd50, 0x571c45d, 0x1863df4a, 0x136dd647, 0xcad731dc,
            0xc1d938d1, 0xdccb23c6, 0xd7c52acb, 0xe6ef15e8, 0xede11ce5,
            0xf0f307f2, 0xfbfd0eff, 0x92a779b4, 0x99a970b9, 0x84bb6bae,
            0x8fb562a3, 0xbe9f5d80, 0xb591548d, 0xa8834f9a, 0xa38d4697,
          ],
          P = [
            0, 0xd0b0e09, 0x1a161c12, 0x171d121b, 0x342c3824, 0x3927362d,
            0x2e3a2436, 0x23312a3f, 0x68587048, 0x65537e41, 0x724e6c5a,
            0x7f456253, 0x5c74486c, 0x517f4665, 0x4662547e, 0x4b695a77,
            0xd0b0e090, 0xddbbee99, 0xcaa6fc82, 0xc7adf28b, 0xe49cd8b4,
            0xe997d6bd, 0xfe8ac4a6, 0xf381caaf, 0xb8e890d8, 0xb5e39ed1,
            0xa2fe8cca, 0xaff582c3, 0x8cc4a8fc, 0x81cfa6f5, 0x96d2b4ee,
            0x9bd9bae7, 0xbb7bdb3b, 0xb670d532, 0xa16dc729, 0xac66c920,
            0x8f57e31f, 0x825ced16, 0x9541ff0d, 0x984af104, 0xd323ab73,
            0xde28a57a, 0xc935b761, 0xc43eb968, 0xe70f9357, 0xea049d5e,
            0xfd198f45, 0xf012814c, 0x6bcb3bab, 0x66c035a2, 0x71dd27b9,
            0x7cd629b0, 0x5fe7038f, 0x52ec0d86, 0x45f11f9d, 0x48fa1194,
            0x3934be3, 0xe9845ea, 0x198557f1, 0x148e59f8, 0x37bf73c7,
            0x3ab47dce, 0x2da96fd5, 0x20a261dc, 0x6df6ad76, 0x60fda37f,
            0x77e0b164, 0x7aebbf6d, 0x59da9552, 0x54d19b5b, 0x43cc8940,
            0x4ec78749, 0x5aedd3e, 0x8a5d337, 0x1fb8c12c, 0x12b3cf25,
            0x3182e51a, 0x3c89eb13, 0x2b94f908, 0x269ff701, 0xbd464de6,
            0xb04d43ef, 0xa75051f4, 0xaa5b5ffd, 0x896a75c2, 0x84617bcb,
            0x937c69d0, 0x9e7767d9, 0xd51e3dae, 0xd81533a7, 0xcf0821bc,
            0xc2032fb5, 0xe132058a, 0xec390b83, 0xfb241998, 0xf62f1791,
            0xd68d764d, 0xdb867844, 0xcc9b6a5f, 0xc1906456, 0xe2a14e69,
            0xefaa4060, 0xf8b7527b, 0xf5bc5c72, 0xbed50605, 0xb3de080c,
            0xa4c31a17, 0xa9c8141e, 0x8af93e21, 0x87f23028, 0x90ef2233,
            0x9de42c3a, 0x63d96dd, 0xb3698d4, 0x1c2b8acf, 0x112084c6,
            0x3211aef9, 0x3f1aa0f0, 0x2807b2eb, 0x250cbce2, 0x6e65e695,
            0x636ee89c, 0x7473fa87, 0x7978f48e, 0x5a49deb1, 0x5742d0b8,
            0x405fc2a3, 0x4d54ccaa, 0xdaf741ec, 0xd7fc4fe5, 0xc0e15dfe,
            0xcdea53f7, 0xeedb79c8, 0xe3d077c1, 0xf4cd65da, 0xf9c66bd3,
            0xb2af31a4, 0xbfa43fad, 0xa8b92db6, 0xa5b223bf, 0x86830980,
            0x8b880789, 0x9c951592, 0x919e1b9b, 0xa47a17c, 0x74caf75,
            0x1051bd6e, 0x1d5ab367, 1047239e3, 0x33609751, 0x247d854a,
            0x29768b43, 0x621fd134, 0x6f14df3d, 0x7809cd26, 0x7502c32f,
            0x5633e910, 0x5b38e719, 0x4c25f502, 0x412efb0b, 0x618c9ad7,
            0x6c8794de, 0x7b9a86c5, 0x769188cc, 0x55a0a2f3, 0x58abacfa,
            0x4fb6bee1, 0x42bdb0e8, 0x9d4ea9f, 0x4dfe496, 0x13c2f68d,
            0x1ec9f884, 0x3df8d2bb, 0x30f3dcb2, 0x27eecea9, 0x2ae5c0a0,
            0xb13c7a47, 0xbc37744e, 0xab2a6655, 0xa621685c, 0x85104263,
            0x881b4c6a, 0x9f065e71, 0x920d5078, 0xd9640a0f, 0xd46f0406,
            0xc372161d, 0xce791814, 0xed48322b, 0xe0433c22, 0xf75e2e39,
            0xfa552030, 0xb701ec9a, 0xba0ae293, 0xad17f088, 0xa01cfe81,
            0x832dd4be, 0x8e26dab7, 0x993bc8ac, 0x9430c6a5, 0xdf599cd2,
            0xd25292db, 0xc54f80c0, 0xc8448ec9, 0xeb75a4f6, 0xe67eaaff,
            0xf163b8e4, 0xfc68b6ed, 0x67b10c0a, 0x6aba0203, 0x7da71018,
            0x70ac1e11, 0x539d342e, 0x5e963a27, 0x498b283c, 0x44802635,
            0xfe97c42, 0x2e2724b, 0x15ff6050, 0x18f46e59, 0x3bc54466,
            0x36ce4a6f, 0x21d35874, 0x2cd8567d, 0xc7a37a1, 0x17139a8,
            0x166c2bb3, 0x1b6725ba, 0x38560f85, 0x355d018c, 0x22401397,
            0x2f4b1d9e, 0x642247e9, 0x692949e0, 0x7e345bfb, 0x733f55f2,
            0x500e7fcd, 0x5d0571c4, 0x4a1863df, 0x47136dd6, 0xdccad731,
            0xd1c1d938, 0xc6dccb23, 0xcbd7c52a, 0xe8e6ef15, 0xe5ede11c,
            0xf2f0f307, 0xfffbfd0e, 0xb492a779, 0xb999a970, 0xae84bb6b,
            0xa38fb562, 0x80be9f5d, 0x8db59154, 0x9aa8834f, 0x97a38d46,
          ],
          C = [
            0, 0x90d0b0e, 0x121a161c, 0x1b171d12, 0x24342c38, 0x2d392736,
            0x362e3a24, 0x3f23312a, 0x48685870, 0x4165537e, 0x5a724e6c,
            0x537f4562, 0x6c5c7448, 0x65517f46, 0x7e466254, 0x774b695a,
            0x90d0b0e0, 0x99ddbbee, 0x82caa6fc, 0x8bc7adf2, 0xb4e49cd8,
            0xbde997d6, 0xa6fe8ac4, 0xaff381ca, 0xd8b8e890, 0xd1b5e39e,
            0xcaa2fe8c, 0xc3aff582, 0xfc8cc4a8, 0xf581cfa6, 0xee96d2b4,
            0xe79bd9ba, 0x3bbb7bdb, 0x32b670d5, 0x29a16dc7, 0x20ac66c9,
            0x1f8f57e3, 0x16825ced, 0xd9541ff, 0x4984af1, 0x73d323ab,
            0x7ade28a5, 0x61c935b7, 0x68c43eb9, 0x57e70f93, 0x5eea049d,
            0x45fd198f, 0x4cf01281, 0xab6bcb3b, 0xa266c035, 0xb971dd27,
            0xb07cd629, 0x8f5fe703, 0x8652ec0d, 0x9d45f11f, 0x9448fa11,
            0xe303934b, 0xea0e9845, 0xf1198557, 0xf8148e59, 0xc737bf73,
            0xce3ab47d, 0xd52da96f, 0xdc20a261, 0x766df6ad, 0x7f60fda3,
            0x6477e0b1, 0x6d7aebbf, 0x5259da95, 0x5b54d19b, 0x4043cc89,
            0x494ec787, 0x3e05aedd, 0x3708a5d3, 0x2c1fb8c1, 0x2512b3cf,
            0x1a3182e5, 0x133c89eb, 0x82b94f9, 0x1269ff7, 0xe6bd464d,
            0xefb04d43, 0xf4a75051, 0xfdaa5b5f, 0xc2896a75, 0xcb84617b,
            0xd0937c69, 0xd99e7767, 0xaed51e3d, 0xa7d81533, 0xbccf0821,
            0xb5c2032f, 0x8ae13205, 0x83ec390b, 0x98fb2419, 0x91f62f17,
            0x4dd68d76, 0x44db8678, 0x5fcc9b6a, 0x56c19064, 0x69e2a14e,
            0x60efaa40, 0x7bf8b752, 0x72f5bc5c, 0x5bed506, 0xcb3de08,
            0x17a4c31a, 0x1ea9c814, 0x218af93e, 679998e3, 0x3390ef22,
            0x3a9de42c, 0xdd063d96, 0xd40b3698, 0xcf1c2b8a, 0xc6112084,
            0xf93211ae, 0xf03f1aa0, 0xeb2807b2, 0xe2250cbc, 0x956e65e6,
            0x9c636ee8, 0x877473fa, 0x8e7978f4, 0xb15a49de, 0xb85742d0,
            0xa3405fc2, 0xaa4d54cc, 0xecdaf741, 0xe5d7fc4f, 0xfec0e15d,
            0xf7cdea53, 0xc8eedb79, 0xc1e3d077, 0xdaf4cd65, 0xd3f9c66b,
            0xa4b2af31, 0xadbfa43f, 0xb6a8b92d, 0xbfa5b223, 0x80868309,
            0x898b8807, 0x929c9515, 0x9b919e1b, 0x7c0a47a1, 0x75074caf,
            0x6e1051bd, 0x671d5ab3, 0x583e6b99, 0x51336097, 0x4a247d85,
            0x4329768b, 0x34621fd1, 0x3d6f14df, 0x267809cd, 0x2f7502c3,
            0x105633e9, 0x195b38e7, 0x24c25f5, 0xb412efb, 0xd7618c9a,
            0xde6c8794, 0xc57b9a86, 0xcc769188, 0xf355a0a2, 0xfa58abac,
            0xe14fb6be, 0xe842bdb0, 0x9f09d4ea, 0x9604dfe4, 0x8d13c2f6,
            0x841ec9f8, 0xbb3df8d2, 0xb230f3dc, 0xa927eece, 0xa02ae5c0,
            0x47b13c7a, 0x4ebc3774, 0x55ab2a66, 0x5ca62168, 0x63851042,
            0x6a881b4c, 0x719f065e, 0x78920d50, 0xfd9640a, 0x6d46f04,
            0x1dc37216, 0x14ce7918, 0x2bed4832, 0x22e0433c, 0x39f75e2e,
            0x30fa5520, 0x9ab701ec, 0x93ba0ae2, 0x88ad17f0, 0x81a01cfe,
            0xbe832dd4, 0xb78e26da, 0xac993bc8, 0xa59430c6, 0xd2df599c,
            0xdbd25292, 0xc0c54f80, 0xc9c8448e, 0xf6eb75a4, 0xffe67eaa,
            0xe4f163b8, 0xedfc68b6, 0xa67b10c, 0x36aba02, 0x187da710,
            0x1170ac1e, 0x2e539d34, 0x275e963a, 0x3c498b28, 0x35448026,
            0x420fe97c, 0x4b02e272, 0x5015ff60, 0x5918f46e, 0x663bc544,
            0x6f36ce4a, 0x7421d358, 0x7d2cd856, 0xa10c7a37, 0xa8017139,
            0xb3166c2b, 0xba1b6725, 0x8538560f, 0x8c355d01, 0x97224013,
            0x9e2f4b1d, 0xe9642247, 0xe0692949, 0xfb7e345b, 0xf2733f55,
            0xcd500e7f, 0xc45d0571, 0xdf4a1863, 0xd647136d, 0x31dccad7,
            0x38d1c1d9, 0x23c6dccb, 0x2acbd7c5, 0x15e8e6ef, 0x1ce5ede1,
            0x7f2f0f3, 0xefffbfd, 0x79b492a7, 0x70b999a9, 0x6bae84bb,
            0x62a38fb5, 0x5d80be9f, 0x548db591, 0x4f9aa883, 0x4697a38d,
          ];
        function E(e) {
          for (var a = [], r = 0; r < e.length; r += 4)
            a.push(
              (e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3]
            );
          return a;
        }
        var A = function (e) {
          if (!(this instanceof A))
            throw Error("AES must be instanitated with `new`");
          Object.defineProperty(this, "key", { value: x(e, !0) }),
            this._prepare();
        };
        (A.prototype._prepare = function () {
          var e = i[this.key.length];
          if (null == e)
            throw Error("invalid key size (must be 16, 24 or 32 bytes)");
          (this._Ke = []), (this._Kd = []);
          for (var a = 0; a <= e; a++)
            this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
          for (
            var r = (e + 1) * 4,
              t = this.key.length / 4,
              x = E(this.key),
              a = 0;
            a < t;
            a++
          )
            (c = a >> 2),
              (this._Ke[c][a % 4] = x[a]),
              (this._Kd[e - c][a % 4] = x[a]);
          for (var c, n, f = 0, d = t; d < r; ) {
            if (
              ((n = x[t - 1]),
              (x[0] ^=
                (b[(n >> 16) & 255] << 24) ^
                (b[(n >> 8) & 255] << 16) ^
                (b[255 & n] << 8) ^
                b[(n >> 24) & 255] ^
                (o[f] << 24)),
              (f += 1),
              8 != t)
            )
              for (var a = 1; a < t; a++) x[a] ^= x[a - 1];
            else {
              for (var a = 1; a < t / 2; a++) x[a] ^= x[a - 1];
              (n = x[t / 2 - 1]),
                (x[t / 2] ^=
                  b[255 & n] ^
                  (b[(n >> 8) & 255] << 8) ^
                  (b[(n >> 16) & 255] << 16) ^
                  (b[(n >> 24) & 255] << 24));
              for (var a = t / 2 + 1; a < t; a++) x[a] ^= x[a - 1];
            }
            for (var s, l, a = 0; a < t && d < r; )
              (s = d >> 2),
                (l = d % 4),
                (this._Ke[s][l] = x[a]),
                (this._Kd[e - s][l] = x[a++]),
                d++;
          }
          for (var s = 1; s < e; s++)
            for (var l = 0; l < 4; l++)
              (n = this._Kd[s][l]),
                (this._Kd[s][l] =
                  S[(n >> 24) & 255] ^
                  w[(n >> 16) & 255] ^
                  P[(n >> 8) & 255] ^
                  C[255 & n]);
        }),
          (A.prototype.encrypt = function (e) {
            if (16 != e.length)
              throw Error("invalid plaintext size (must be 16 bytes)");
            for (
              var a = this._Ke.length - 1, r = [0, 0, 0, 0], t = E(e), x = 0;
              x < 4;
              x++
            )
              t[x] ^= this._Ke[0][x];
            for (var n = 1; n < a; n++) {
              for (var x = 0; x < 4; x++)
                r[x] =
                  l[(t[x] >> 24) & 255] ^
                  u[(t[(x + 1) % 4] >> 16) & 255] ^
                  h[(t[(x + 2) % 4] >> 8) & 255] ^
                  p[255 & t[(x + 3) % 4]] ^
                  this._Ke[n][x];
              t = r.slice();
            }
            for (var f, d = c(16), x = 0; x < 4; x++)
              (f = this._Ke[a][x]),
                (d[4 * x] = (b[(t[x] >> 24) & 255] ^ (f >> 24)) & 255),
                (d[4 * x + 1] =
                  (b[(t[(x + 1) % 4] >> 16) & 255] ^ (f >> 16)) & 255),
                (d[4 * x + 2] =
                  (b[(t[(x + 2) % 4] >> 8) & 255] ^ (f >> 8)) & 255),
                (d[4 * x + 3] = (b[255 & t[(x + 3) % 4]] ^ f) & 255);
            return d;
          }),
          (A.prototype.decrypt = function (e) {
            if (16 != e.length)
              throw Error("invalid ciphertext size (must be 16 bytes)");
            for (
              var a = this._Kd.length - 1, r = [0, 0, 0, 0], t = E(e), x = 0;
              x < 4;
              x++
            )
              t[x] ^= this._Kd[0][x];
            for (var n = 1; n < a; n++) {
              for (var x = 0; x < 4; x++)
                r[x] =
                  m[(t[x] >> 24) & 255] ^
                  g[(t[(x + 3) % 4] >> 16) & 255] ^
                  y[(t[(x + 2) % 4] >> 8) & 255] ^
                  v[255 & t[(x + 1) % 4]] ^
                  this._Kd[n][x];
              t = r.slice();
            }
            for (var f, d = c(16), x = 0; x < 4; x++)
              (f = this._Kd[a][x]),
                (d[4 * x] = (s[(t[x] >> 24) & 255] ^ (f >> 24)) & 255),
                (d[4 * x + 1] =
                  (s[(t[(x + 3) % 4] >> 16) & 255] ^ (f >> 16)) & 255),
                (d[4 * x + 2] =
                  (s[(t[(x + 2) % 4] >> 8) & 255] ^ (f >> 8)) & 255),
                (d[4 * x + 3] = (s[255 & t[(x + 1) % 4]] ^ f) & 255);
            return d;
          });
        var B = function (e) {
          if (!(this instanceof B))
            throw Error("AES must be instanitated with `new`");
          (this.description = "Electronic Code Block"),
            (this.name = "ecb"),
            (this._aes = new A(e));
        };
        (B.prototype.encrypt = function (e) {
          if ((e = x(e)).length % 16 != 0)
            throw Error(
              "invalid plaintext size (must be multiple of 16 bytes)"
            );
          for (var a = c(e.length), r = c(16), t = 0; t < e.length; t += 16)
            n(e, r, 0, t, t + 16), n((r = this._aes.encrypt(r)), a, t);
          return a;
        }),
          (B.prototype.decrypt = function (e) {
            if ((e = x(e)).length % 16 != 0)
              throw Error(
                "invalid ciphertext size (must be multiple of 16 bytes)"
              );
            for (var a = c(e.length), r = c(16), t = 0; t < e.length; t += 16)
              n(e, r, 0, t, t + 16), n((r = this._aes.decrypt(r)), a, t);
            return a;
          });
        var F = function (e, a) {
          if (!(this instanceof F))
            throw Error("AES must be instanitated with `new`");
          if (
            ((this.description = "Cipher Block Chaining"),
            (this.name = "cbc"),
            a)
          ) {
            if (16 != a.length)
              throw Error(
                "invalid initialation vector size (must be 16 bytes)"
              );
          } else a = c(16);
          (this._lastCipherblock = x(a, !0)), (this._aes = new A(e));
        };
        (F.prototype.encrypt = function (e) {
          if ((e = x(e)).length % 16 != 0)
            throw Error(
              "invalid plaintext size (must be multiple of 16 bytes)"
            );
          for (var a = c(e.length), r = c(16), t = 0; t < e.length; t += 16) {
            n(e, r, 0, t, t + 16);
            for (var f = 0; f < 16; f++) r[f] ^= this._lastCipherblock[f];
            (this._lastCipherblock = this._aes.encrypt(r)),
              n(this._lastCipherblock, a, t);
          }
          return a;
        }),
          (F.prototype.decrypt = function (e) {
            if ((e = x(e)).length % 16 != 0)
              throw Error(
                "invalid ciphertext size (must be multiple of 16 bytes)"
              );
            for (var a = c(e.length), r = c(16), t = 0; t < e.length; t += 16) {
              n(e, r, 0, t, t + 16), (r = this._aes.decrypt(r));
              for (var f = 0; f < 16; f++)
                a[t + f] = r[f] ^ this._lastCipherblock[f];
              n(e, this._lastCipherblock, 0, t, t + 16);
            }
            return a;
          });
        var O = function (e, a, r) {
          if (!(this instanceof O))
            throw Error("AES must be instanitated with `new`");
          if (
            ((this.description = "Cipher Feedback"), (this.name = "cfb"), a)
          ) {
            if (16 != a.length)
              throw Error("invalid initialation vector size (must be 16 size)");
          } else a = c(16);
          r || (r = 1),
            (this.segmentSize = r),
            (this._shiftRegister = x(a, !0)),
            (this._aes = new A(e));
        };
        (O.prototype.encrypt = function (e) {
          if (e.length % this.segmentSize != 0)
            throw Error("invalid plaintext size (must be segmentSize bytes)");
          for (
            var a, r = x(e, !0), t = 0;
            t < r.length;
            t += this.segmentSize
          ) {
            a = this._aes.encrypt(this._shiftRegister);
            for (var c = 0; c < this.segmentSize; c++) r[t + c] ^= a[c];
            n(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
              n(
                r,
                this._shiftRegister,
                16 - this.segmentSize,
                t,
                t + this.segmentSize
              );
          }
          return r;
        }),
          (O.prototype.decrypt = function (e) {
            if (e.length % this.segmentSize != 0)
              throw Error(
                "invalid ciphertext size (must be segmentSize bytes)"
              );
            for (
              var a, r = x(e, !0), t = 0;
              t < r.length;
              t += this.segmentSize
            ) {
              a = this._aes.encrypt(this._shiftRegister);
              for (var c = 0; c < this.segmentSize; c++) r[t + c] ^= a[c];
              n(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
                n(
                  e,
                  this._shiftRegister,
                  16 - this.segmentSize,
                  t,
                  t + this.segmentSize
                );
            }
            return r;
          });
        var k = function (e, a) {
          if (!(this instanceof k))
            throw Error("AES must be instanitated with `new`");
          if (
            ((this.description = "Output Feedback"), (this.name = "ofb"), a)
          ) {
            if (16 != a.length)
              throw Error(
                "invalid initialation vector size (must be 16 bytes)"
              );
          } else a = c(16);
          (this._lastPrecipher = x(a, !0)),
            (this._lastPrecipherIndex = 16),
            (this._aes = new A(e));
        };
        (k.prototype.encrypt = function (e) {
          for (var a = x(e, !0), r = 0; r < a.length; r++)
            16 === this._lastPrecipherIndex &&
              ((this._lastPrecipher = this._aes.encrypt(this._lastPrecipher)),
              (this._lastPrecipherIndex = 0)),
              (a[r] ^= this._lastPrecipher[this._lastPrecipherIndex++]);
          return a;
        }),
          (k.prototype.decrypt = k.prototype.encrypt);
        var T = function (e) {
          if (!(this instanceof T))
            throw Error("Counter must be instanitated with `new`");
          0 === e || e || (e = 1),
            "number" == typeof e
              ? ((this._counter = c(16)), this.setValue(e))
              : this.setBytes(e);
        };
        (T.prototype.setValue = function (e) {
          if ("number" != typeof e || parseInt(e) != e)
            throw Error("invalid counter value (must be an integer)");
          for (var a = 15; a >= 0; --a) (this._counter[a] = e % 256), (e >>= 8);
        }),
          (T.prototype.setBytes = function (e) {
            if (16 != (e = x(e, !0)).length)
              throw Error("invalid counter bytes size (must be 16 bytes)");
            this._counter = e;
          }),
          (T.prototype.increment = function () {
            for (var e = 15; e >= 0; e--)
              if (255 === this._counter[e]) this._counter[e] = 0;
              else {
                this._counter[e]++;
                break;
              }
          });
        var D = function (e, a) {
          if (!(this instanceof D))
            throw Error("AES must be instanitated with `new`");
          (this.description = "Counter"),
            (this.name = "ctr"),
            a instanceof T || (a = new T(a)),
            (this._counter = a),
            (this._remainingCounter = null),
            (this._remainingCounterIndex = 16),
            (this._aes = new A(e));
        };
        (D.prototype.encrypt = function (e) {
          for (var a = x(e, !0), r = 0; r < a.length; r++)
            16 === this._remainingCounterIndex &&
              ((this._remainingCounter = this._aes.encrypt(
                this._counter._counter
              )),
              (this._remainingCounterIndex = 0),
              this._counter.increment()),
              (a[r] ^= this._remainingCounter[this._remainingCounterIndex++]);
          return a;
        }),
          (D.prototype.decrypt = D.prototype.encrypt),
          (e.exports = {
            AES: A,
            Counter: T,
            ModeOfOperation: { ecb: B, cbc: F, cfb: O, ofb: k, ctr: D },
            utils: {
              hex: d,
              utf8: {
                toBytes: function (e) {
                  var a = [],
                    r = 0;
                  for (e = encodeURI(e); r < e.length; ) {
                    var t = e.charCodeAt(r++);
                    37 === t
                      ? (a.push(parseInt(e.substr(r, 2), 16)), (r += 2))
                      : a.push(t);
                  }
                  return x(a);
                },
                fromBytes: function (e) {
                  for (var a = [], r = 0; r < e.length; ) {
                    var t = e[r];
                    t < 128
                      ? (a.push(String.fromCharCode(t)), r++)
                      : t > 191 && t < 224
                      ? (a.push(
                          String.fromCharCode(((31 & t) << 6) | (63 & e[r + 1]))
                        ),
                        (r += 2))
                      : (a.push(
                          String.fromCharCode(
                            ((15 & t) << 12) |
                              ((63 & e[r + 1]) << 6) |
                              (63 & e[r + 2])
                          )
                        ),
                        (r += 3));
                  }
                  return a.join("");
                },
              },
            },
            padding: {
              pkcs7: {
                pad: function (e) {
                  var a = 16 - ((e = x(e, !0)).length % 16),
                    r = c(e.length + a);
                  n(e, r);
                  for (var t = e.length; t < r.length; t++) r[t] = a;
                  return r;
                },
                strip: function (e) {
                  if ((e = x(e, !0)).length < 16)
                    throw Error("PKCS#7 invalid length");
                  var a = e[e.length - 1];
                  if (a > 16) throw Error("PKCS#7 padding byte out of range");
                  for (var r = e.length - a, t = 0; t < a; t++)
                    if (e[r + t] !== a)
                      throw Error("PKCS#7 invalid padding byte");
                  var f = c(r);
                  return n(e, f, 0, 0, r), f;
                },
              },
            },
            _arrayTest: { coerceArray: x, createArray: c, copyArray: n },
          });
      })(0);
    },
    36151: (e, a, r) => {
      r.d(a, { A: () => f, o: () => n });
      var t = r(45849),
        x = r(53099),
        c = r(193);
      let n = "\x19Ethereum Signed Message:\n";
      function f(e) {
        return (
          "string" == typeof e && (e = (0, c.YW)(e)),
          (0, x.keccak256)(
            (0, t.concat)([(0, c.YW)(n), (0, c.YW)(String(e.length)), e])
          )
        );
      }
    },
    39331: (e, a, r) => {
      r.r(a),
        r.d(a, {
          Wallet: () => v,
          verifyMessage: () => S,
          verifyTypedData: () => w,
        });
      var t = r(68652),
        x = r(85700),
        c = r(61157),
        n = r(45849),
        f = r(36151),
        d = r(30299),
        i = r(52844),
        o = r(53099),
        b = r(49435),
        s = r(41055),
        l = r(6861),
        u = r(18339),
        h = r(83788),
        p = r(91359),
        m = r(83928),
        g = function (e, a, r, t) {
          return new (r || (r = Promise))(function (x, c) {
            function n(e) {
              try {
                d(t.next(e));
              } catch (e) {
                c(e);
              }
            }
            function f(e) {
              try {
                d(t.throw(e));
              } catch (e) {
                c(e);
              }
            }
            function d(e) {
              var a;
              e.done
                ? x(e.value)
                : ((a = e.value) instanceof r
                    ? a
                    : new r(function (e) {
                        e(a);
                      })
                  ).then(n, f);
            }
            d((t = t.apply(e, a || [])).next());
          });
        };
      let y = new m.Logger("wallet/5.8.0");
      class v extends c.l {
        constructor(e, a) {
          if (
            (super(),
            (function (e) {
              return (
                null != e &&
                (0, n.isHexString)(e.privateKey, 32) &&
                null != e.address
              );
            })(e))
          ) {
            let a = new l.SigningKey(e.privateKey);
            if (
              ((0, b.defineReadOnly)(this, "_signingKey", () => a),
              (0, b.defineReadOnly)(
                this,
                "address",
                (0, p.computeAddress)(this.publicKey)
              ),
              this.address !== (0, t.getAddress)(e.address) &&
                y.throwArgumentError(
                  "privateKey/address mismatch",
                  "privateKey",
                  "[REDACTED]"
                ),
              (function (e) {
                let a = e.mnemonic;
                return a && a.phrase;
              })(e))
            ) {
              let a = e.mnemonic;
              (0, b.defineReadOnly)(this, "_mnemonic", () => ({
                phrase: a.phrase,
                path: a.path || i.defaultPath,
                locale: a.locale || "en",
              }));
              let r = this.mnemonic,
                t = i.HDNode.fromMnemonic(r.phrase, null, r.locale).derivePath(
                  r.path
                );
              (0, p.computeAddress)(t.privateKey) !== this.address &&
                y.throwArgumentError(
                  "mnemonic/address mismatch",
                  "privateKey",
                  "[REDACTED]"
                );
            } else (0, b.defineReadOnly)(this, "_mnemonic", () => null);
          } else {
            if (l.SigningKey.isSigningKey(e))
              "secp256k1" !== e.curve &&
                y.throwArgumentError(
                  "unsupported curve; must be secp256k1",
                  "privateKey",
                  "[REDACTED]"
                ),
                (0, b.defineReadOnly)(this, "_signingKey", () => e);
            else {
              "string" == typeof e &&
                e.match(/^[0-9a-f]*$/i) &&
                64 === e.length &&
                (e = "0x" + e);
              let a = new l.SigningKey(e);
              (0, b.defineReadOnly)(this, "_signingKey", () => a);
            }
            (0, b.defineReadOnly)(this, "_mnemonic", () => null),
              (0, b.defineReadOnly)(
                this,
                "address",
                (0, p.computeAddress)(this.publicKey)
              );
          }
          a &&
            !x.Kq.isProvider(a) &&
            y.throwArgumentError("invalid provider", "provider", a),
            (0, b.defineReadOnly)(this, "provider", a || null);
        }
        get mnemonic() {
          return this._mnemonic();
        }
        get privateKey() {
          return this._signingKey().privateKey;
        }
        get publicKey() {
          return this._signingKey().publicKey;
        }
        getAddress() {
          return Promise.resolve(this.address);
        }
        connect(e) {
          return new v(this, e);
        }
        signTransaction(e) {
          return (0, b.resolveProperties)(e).then((a) => {
            null != a.from &&
              ((0, t.getAddress)(a.from) !== this.address &&
                y.throwArgumentError(
                  "transaction from address mismatch",
                  "transaction.from",
                  e.from
                ),
              delete a.from);
            let r = this._signingKey().signDigest(
              (0, o.keccak256)((0, p.serialize)(a))
            );
            return (0, p.serialize)(a, r);
          });
        }
        signMessage(e) {
          return g(this, void 0, void 0, function* () {
            return (0,
            n.joinSignature)(this._signingKey().signDigest((0, f.A)(e)));
          });
        }
        _signTypedData(e, a, r) {
          return g(this, void 0, void 0, function* () {
            let t = yield d.z.resolveNames(
              e,
              a,
              r,
              (e) => (
                null == this.provider &&
                  y.throwError(
                    "cannot resolve ENS names without a provider",
                    m.Logger.errors.UNSUPPORTED_OPERATION,
                    { operation: "resolveName", value: e }
                  ),
                this.provider.resolveName(e)
              )
            );
            return (0,
            n.joinSignature)(this._signingKey().signDigest(d.z.hash(t.domain, a, t.value)));
          });
        }
        encrypt(e, a, r) {
          if (
            ("function" != typeof a || r || ((r = a), (a = {})),
            r && "function" != typeof r)
          )
            throw Error("invalid callback");
          return a || (a = {}), (0, u.w)(this, e, a, r);
        }
        static createRandom(e) {
          let a = (0, s.p)(16);
          e || (e = {}),
            e.extraEntropy &&
              (a = (0, n.arrayify)(
                (0, n.hexDataSlice)(
                  (0, o.keccak256)((0, n.concat)([a, e.extraEntropy])),
                  0,
                  16
                )
              ));
          let r = (0, i.entropyToMnemonic)(a, e.locale);
          return v.fromMnemonic(r, e.path, e.locale);
        }
        static fromEncryptedJson(e, a, r) {
          return (0, h.decryptJsonWallet)(e, a, r).then((e) => new v(e));
        }
        static fromEncryptedJsonSync(e, a) {
          return new v((0, h.decryptJsonWalletSync)(e, a));
        }
        static fromMnemonic(e, a, r) {
          return (
            a || (a = i.defaultPath),
            new v(i.HDNode.fromMnemonic(e, null, r).derivePath(a))
          );
        }
      }
      function S(e, a) {
        return (0, p.recoverAddress)((0, f.A)(e), a);
      }
      function w(e, a, r, t) {
        return (0, p.recoverAddress)(d.z.hash(e, a, r), t);
      }
    },
    41055: (e, a, r) => {
      r.d(a, { p: () => d });
      var t = r(45849),
        x = r(83928);
      let c = new x.Logger("random/5.8.0"),
        n = (function () {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if (void 0 !== r.g) return r.g;
          throw Error("unable to locate global object");
        })(),
        f = n.crypto || n.msCrypto;
      function d(e) {
        (e <= 0 || e > 1024 || e % 1 || e != e) &&
          c.throwArgumentError("invalid length", "length", e);
        let a = new Uint8Array(e);
        return f.getRandomValues(a), (0, t.arrayify)(a);
      }
      (f && f.getRandomValues) ||
        (c.warn("WARNING: Missing strong random number source"),
        (f = {
          getRandomValues: function (e) {
            return c.throwError(
              "no secure random source avaialble",
              x.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "crypto.getRandomValues" }
            );
          },
        }));
    },
    46444: (e, a, r) => {
      r.d(a, {
        QT: () => i,
        Qq: () => f,
        Sp: () => n,
        m0: () => c,
        oe: () => d,
      });
      var t = r(45849),
        x = r(193);
      function c(e) {
        return (
          "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e),
          (0, t.arrayify)(e)
        );
      }
      function n(e, a) {
        for (e = String(e); e.length < a; ) e = "0" + e;
        return e;
      }
      function f(e) {
        return "string" == typeof e
          ? (0, x.YW)(e, x.dz.NFKC)
          : (0, t.arrayify)(e);
      }
      function d(e, a) {
        let r = e,
          t = a.toLowerCase().split("/");
        for (let e = 0; e < t.length; e++) {
          let a = null;
          for (let x in r)
            if (x.toLowerCase() === t[e]) {
              a = r[x];
              break;
            }
          if (null === a) return null;
          r = a;
        }
        return r;
      }
      function i(e) {
        let a = (0, t.arrayify)(e);
        (a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128);
        let r = (0, t.hexlify)(a);
        return [
          r.substring(2, 10),
          r.substring(10, 14),
          r.substring(14, 18),
          r.substring(18, 22),
          r.substring(22, 34),
        ].join("-");
      }
    },
    48831: (e, a, r) => {
      r.r(a), r.d(a, { keccak256: () => u, pack: () => l, sha256: () => h });
      var t = r(84784),
        x = r(45849),
        c = r(53099),
        n = r(14606),
        f = r(193),
        d = r(83928);
      let i = RegExp("^bytes([0-9]+)$"),
        o = RegExp("^(u?int)([0-9]*)$"),
        b = RegExp("^(.*)\\[([0-9]*)\\]$"),
        s = new d.Logger("solidity/5.8.0");
      function l(e, a) {
        e.length != a.length &&
          s.throwArgumentError(
            "wrong number of values; expected ${ types.length }",
            "values",
            a
          );
        let r = [];
        return (
          e.forEach(function (e, c) {
            r.push(
              (function e(a, r, c) {
                switch (a) {
                  case "address":
                    if (c) return (0, x.zeroPad)(r, 32);
                    return (0, x.arrayify)(r);
                  case "string":
                    return (0, f.YW)(r);
                  case "bytes":
                    return (0, x.arrayify)(r);
                  case "bool":
                    if (((r = r ? "0x01" : "0x00"), c))
                      return (0, x.zeroPad)(r, 32);
                    return (0, x.arrayify)(r);
                }
                let n = a.match(o);
                if (n) {
                  let e = parseInt(n[2] || "256");
                  return (
                    ((n[2] && String(e) !== n[2]) ||
                      e % 8 != 0 ||
                      0 === e ||
                      e > 256) &&
                      s.throwArgumentError("invalid number type", "type", a),
                    c && (e = 256),
                    (r = t.gH.from(r).toTwos(e)),
                    (0, x.zeroPad)(r, e / 8)
                  );
                }
                if ((n = a.match(i))) {
                  let e = parseInt(n[1]);
                  return ((String(e) !== n[1] || 0 === e || e > 32) &&
                    s.throwArgumentError("invalid bytes type", "type", a),
                  (0, x.arrayify)(r).byteLength !== e &&
                    s.throwArgumentError(`invalid value for ${a}`, "value", r),
                  c)
                    ? (0, x.arrayify)(
                        (
                          r +
                          "0000000000000000000000000000000000000000000000000000000000000000"
                        ).substring(0, 66)
                      )
                    : r;
                }
                if ((n = a.match(b)) && Array.isArray(r)) {
                  let t = n[1];
                  parseInt(n[2] || String(r.length)) != r.length &&
                    s.throwArgumentError(
                      `invalid array length for ${a}`,
                      "value",
                      r
                    );
                  let c = [];
                  return (
                    r.forEach(function (a) {
                      c.push(e(t, a, !0));
                    }),
                    (0, x.concat)(c)
                  );
                }
                return s.throwArgumentError("invalid type", "type", a);
              })(e, a[c])
            );
          }),
          (0, x.hexlify)((0, x.concat)(r))
        );
      }
      function u(e, a) {
        return (0, c.keccak256)(l(e, a));
      }
      function h(e, a) {
        return (0, n.sc)(l(e, a));
      }
    },
    52844: (e, a, r) => {
      r.r(a),
        r.d(a, {
          HDNode: () => T,
          defaultPath: () => k,
          entropyToMnemonic: () => _,
          getAccountPath: () => j,
          isValidMnemonic: () => M,
          mnemonicToEntropy: () => R,
          mnemonicToSeed: () => D,
        });
      var t = r(13235),
        x = r(45849),
        c = r(84784),
        n = r(193),
        f = r(72826),
        d = r(49435),
        i = r(6861),
        o = r(14606),
        b = r(87105),
        s = r(91359),
        l = r(83777),
        u = r(83928);
      let h = new u.Logger("wordlists/5.8.0");
      class p {
        constructor(e) {
          h.checkAbstract(new.target, p),
            (0, d.defineReadOnly)(this, "locale", e);
        }
        split(e) {
          return e.toLowerCase().split(/ +/g);
        }
        join(e) {
          return e.join(" ");
        }
        static check(e) {
          let a = [];
          for (let r = 0; r < 2048; r++) {
            let t = e.getWord(r);
            if (r !== e.getWordIndex(t)) return "0x";
            a.push(t);
          }
          return (0, l.id)(a.join("\n") + "\n");
        }
        static register(e, a) {
          a || (a = e.locale);
        }
      }
      let m = null;
      function g(e) {
        if (
          null == m &&
          ((m =
            "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo"
              .replace(/([A-Z])/g, " $1")
              .toLowerCase()
              .substring(1)
              .split(" ")),
          "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !==
            p.check(e))
        )
          throw ((m = null), Error("BIP39 Wordlist for en (English) FAILED"));
      }
      class y extends p {
        constructor() {
          super("en");
        }
        getWord(e) {
          return g(this), m[e];
        }
        getWordIndex(e) {
          return g(this), m.indexOf(e);
        }
      }
      let v = new y();
      p.register(v);
      let S = { en: v },
        w = new u.Logger("hdnode/5.8.0"),
        P = c.gH.from(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        C = (0, n.YW)("Bitcoin seed");
      function E(e) {
        return ((1 << e) - 1) << (8 - e);
      }
      function A(e) {
        return (0, x.hexZeroPad)((0, x.hexlify)(e), 32);
      }
      function B(e) {
        return t.Base58.encode(
          (0, x.concat)([e, (0, x.hexDataSlice)((0, o.sc)((0, o.sc)(e)), 0, 4)])
        );
      }
      function F(e) {
        if (null == e) return S.en;
        if ("string" == typeof e) {
          let a = S[e];
          return (
            null == a && w.throwArgumentError("unknown locale", "wordlist", e),
            a
          );
        }
        return e;
      }
      let O = {},
        k = "m/44'/60'/0'/0/0";
      class T {
        constructor(e, a, r, t, c, n, f, b) {
          if (e !== O)
            throw Error("HDNode constructor cannot be called directly");
          if (a) {
            let e = new i.SigningKey(a);
            (0, d.defineReadOnly)(this, "privateKey", e.privateKey),
              (0, d.defineReadOnly)(this, "publicKey", e.compressedPublicKey);
          } else
            (0, d.defineReadOnly)(this, "privateKey", null),
              (0, d.defineReadOnly)(this, "publicKey", (0, x.hexlify)(r));
          (0, d.defineReadOnly)(this, "parentFingerprint", t),
            (0, d.defineReadOnly)(
              this,
              "fingerprint",
              (0, x.hexDataSlice)((0, o.HE)((0, o.sc)(this.publicKey)), 0, 4)
            ),
            (0, d.defineReadOnly)(
              this,
              "address",
              (0, s.computeAddress)(this.publicKey)
            ),
            (0, d.defineReadOnly)(this, "chainCode", c),
            (0, d.defineReadOnly)(this, "index", n),
            (0, d.defineReadOnly)(this, "depth", f),
            null == b
              ? ((0, d.defineReadOnly)(this, "mnemonic", null),
                (0, d.defineReadOnly)(this, "path", null))
              : "string" == typeof b
              ? ((0, d.defineReadOnly)(this, "mnemonic", null),
                (0, d.defineReadOnly)(this, "path", b))
              : ((0, d.defineReadOnly)(this, "mnemonic", b),
                (0, d.defineReadOnly)(this, "path", b.path));
        }
        get extendedKey() {
          if (this.depth >= 256) throw Error("Depth too large!");
          return B(
            (0, x.concat)([
              null != this.privateKey ? "0x0488ADE4" : "0x0488B21E",
              (0, x.hexlify)(this.depth),
              this.parentFingerprint,
              (0, x.hexZeroPad)((0, x.hexlify)(this.index), 4),
              this.chainCode,
              null != this.privateKey
                ? (0, x.concat)(["0x00", this.privateKey])
                : this.publicKey,
            ])
          );
        }
        neuter() {
          return new T(
            O,
            null,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.index,
            this.depth,
            this.path
          );
        }
        _derive(e) {
          if (e > 0xffffffff) throw Error("invalid index - " + String(e));
          let a = this.path;
          a && (a += "/" + (0x7fffffff & e));
          let r = new Uint8Array(37);
          if (0x80000000 & e) {
            if (!this.privateKey)
              throw Error("cannot derive child of neutered node");
            r.set((0, x.arrayify)(this.privateKey), 1), a && (a += "'");
          } else r.set((0, x.arrayify)(this.publicKey));
          for (let a = 24; a >= 0; a -= 8)
            r[33 + (a >> 3)] = (e >> (24 - a)) & 255;
          let t = (0, x.arrayify)((0, o.L5)(b.q.sha512, this.chainCode, r)),
            n = t.slice(0, 32),
            f = t.slice(32),
            d = null,
            s = null;
          this.privateKey
            ? (d = A(c.gH.from(n).add(this.privateKey).mod(P)))
            : (s = new i.SigningKey((0, x.hexlify)(n))._addPoint(
                this.publicKey
              ));
          let l = a,
            u = this.mnemonic;
          return (
            u &&
              (l = Object.freeze({
                phrase: u.phrase,
                path: a,
                locale: u.locale || "en",
              })),
            new T(O, d, s, this.fingerprint, A(f), e, this.depth + 1, l)
          );
        }
        derivePath(e) {
          let a = e.split("/");
          if (0 === a.length || ("m" === a[0] && 0 !== this.depth))
            throw Error("invalid path - " + e);
          "m" === a[0] && a.shift();
          let r = this;
          for (let e = 0; e < a.length; e++) {
            let t = a[e];
            if (t.match(/^[0-9]+'$/)) {
              let e = parseInt(t.substring(0, t.length - 1));
              if (e >= 0x80000000) throw Error("invalid path index - " + t);
              r = r._derive(0x80000000 + e);
            } else if (t.match(/^[0-9]+$/)) {
              let e = parseInt(t);
              if (e >= 0x80000000) throw Error("invalid path index - " + t);
              r = r._derive(e);
            } else throw Error("invalid path component - " + t);
          }
          return r;
        }
        static _fromSeed(e, a) {
          let r = (0, x.arrayify)(e);
          if (r.length < 16 || r.length > 64) throw Error("invalid seed");
          let t = (0, x.arrayify)((0, o.L5)(b.q.sha512, C, r));
          return new T(
            O,
            A(t.slice(0, 32)),
            null,
            "0x00000000",
            A(t.slice(32)),
            0,
            0,
            a
          );
        }
        static fromMnemonic(e, a, r) {
          return (
            (r = F(r)),
            (e = _(R(e, r), r)),
            T._fromSeed(D(e, a), { phrase: e, path: "m", locale: r.locale })
          );
        }
        static fromSeed(e) {
          return T._fromSeed(e, null);
        }
        static fromExtendedKey(e) {
          let a = t.Base58.decode(e);
          (82 !== a.length || B(a.slice(0, 78)) !== e) &&
            w.throwArgumentError(
              "invalid extended key",
              "extendedKey",
              "[REDACTED]"
            );
          let r = a[4],
            c = (0, x.hexlify)(a.slice(5, 9)),
            n = parseInt((0, x.hexlify)(a.slice(9, 13)).substring(2), 16),
            f = (0, x.hexlify)(a.slice(13, 45)),
            d = a.slice(45, 78);
          switch ((0, x.hexlify)(a.slice(0, 4))) {
            case "0x0488b21e":
            case "0x043587cf":
              return new T(O, null, (0, x.hexlify)(d), c, f, n, r, null);
            case "0x0488ade4":
            case "0x04358394 ":
              if (0 !== d[0]) break;
              return new T(
                O,
                (0, x.hexlify)(d.slice(1)),
                null,
                c,
                f,
                n,
                r,
                null
              );
          }
          return w.throwArgumentError(
            "invalid extended key",
            "extendedKey",
            "[REDACTED]"
          );
        }
      }
      function D(e, a) {
        a || (a = "");
        let r = (0, n.YW)("mnemonic" + a, n.dz.NFKD);
        return (0, f.A)((0, n.YW)(e, n.dz.NFKD), r, 2048, 64, "sha512");
      }
      function R(e, a) {
        (a = F(a)), w.checkNormalize();
        let r = a.split(e);
        if (r.length % 3 != 0) throw Error("invalid mnemonic");
        let t = (0, x.arrayify)(new Uint8Array(Math.ceil((11 * r.length) / 8))),
          c = 0;
        for (let e = 0; e < r.length; e++) {
          let x = a.getWordIndex(r[e].normalize("NFKD"));
          if (-1 === x) throw Error("invalid mnemonic");
          for (let e = 0; e < 11; e++)
            x & (1 << (10 - e)) && (t[c >> 3] |= 1 << (7 - (c % 8))), c++;
        }
        let n = (32 * r.length) / 3,
          f = E(r.length / 3);
        if (
          ((0, x.arrayify)((0, o.sc)(t.slice(0, n / 8)))[0] & f) !=
          (t[t.length - 1] & f)
        )
          throw Error("invalid checksum");
        return (0, x.hexlify)(t.slice(0, n / 8));
      }
      function _(e, a) {
        if (
          ((a = F(a)),
          (e = (0, x.arrayify)(e)).length % 4 != 0 ||
            e.length < 16 ||
            e.length > 32)
        )
          throw Error("invalid entropy");
        let r = [0],
          t = 11;
        for (let a = 0; a < e.length; a++)
          t > 8
            ? ((r[r.length - 1] <<= 8), (r[r.length - 1] |= e[a]), (t -= 8))
            : ((r[r.length - 1] <<= t),
              (r[r.length - 1] |= e[a] >> (8 - t)),
              r.push(e[a] & ((1 << (8 - t)) - 1)),
              (t += 3));
        let c = e.length / 4,
          n = (0, x.arrayify)((0, o.sc)(e))[0] & E(c);
        return (
          (r[r.length - 1] <<= c),
          (r[r.length - 1] |= n >> (8 - c)),
          a.join(r.map((e) => a.getWord(e)))
        );
      }
      function M(e, a) {
        try {
          return R(e, a), !0;
        } catch (e) {}
        return !1;
      }
      function j(e) {
        return (
          ("number" != typeof e || e < 0 || e >= 0x80000000 || e % 1) &&
            w.throwArgumentError("invalid account index", "index", e),
          `m/44'/60'/${e}'/0/0`
        );
      }
    },
    57220: (e, a, r) => {
      r.r(a), r.d(a, { randomBytes: () => t.p, shuffled: () => x });
      var t = r(41055);
      function x(e) {
        e = e.slice();
        for (let a = e.length - 1; a > 0; a--) {
          let r = Math.floor(Math.random() * (a + 1)),
            t = e[a];
          (e[a] = e[r]), (e[r] = t);
        }
        return e;
      }
    },
    66320: (e, a, r) => {
      r.d(a, { r: () => t });
      let t = "json-wallets/5.8.0";
    },
    71028: function (e, a, r) {
      var t =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, a, r, t) {
                void 0 === t && (t = r),
                  Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                      return a[r];
                    },
                  });
              }
            : function (e, a, r, t) {
                void 0 === t && (t = r), (e[t] = a[r]);
              }),
        x =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, a) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: a,
                });
              }
            : function (e, a) {
                e.default = a;
              }),
        c =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var a = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  t(a, e, r);
            return x(a, e), a;
          };
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.formatBytes32String =
          a.Utf8ErrorFuncs =
          a.toUtf8String =
          a.toUtf8CodePoints =
          a.toUtf8Bytes =
          a._toEscapedUtf8String =
          a.nameprep =
          a.hexDataSlice =
          a.hexDataLength =
          a.hexZeroPad =
          a.hexValue =
          a.hexStripZeros =
          a.hexConcat =
          a.isHexString =
          a.hexlify =
          a.base64 =
          a.base58 =
          a.TransactionDescription =
          a.LogDescription =
          a.Interface =
          a.SigningKey =
          a.HDNode =
          a.defaultPath =
          a.isBytesLike =
          a.isBytes =
          a.zeroPad =
          a.stripZeros =
          a.concat =
          a.arrayify =
          a.shallowCopy =
          a.resolveProperties =
          a.getStatic =
          a.defineReadOnly =
          a.deepCopy =
          a.checkProperties =
          a.poll =
          a.fetchJson =
          a._fetchData =
          a.RLP =
          a.Logger =
          a.checkResultErrors =
          a.FormatTypes =
          a.ParamType =
          a.FunctionFragment =
          a.EventFragment =
          a.ErrorFragment =
          a.ConstructorFragment =
          a.Fragment =
          a.defaultAbiCoder =
          a.AbiCoder =
            void 0),
        (a.Indexed =
          a.Utf8ErrorReason =
          a.UnicodeNormalizationForm =
          a.SupportedAlgorithm =
          a.mnemonicToSeed =
          a.isValidMnemonic =
          a.entropyToMnemonic =
          a.mnemonicToEntropy =
          a.getAccountPath =
          a.verifyTypedData =
          a.verifyMessage =
          a.recoverPublicKey =
          a.computePublicKey =
          a.recoverAddress =
          a.computeAddress =
          a.getJsonWalletAddress =
          a.TransactionTypes =
          a.serializeTransaction =
          a.parseTransaction =
          a.accessListify =
          a.joinSignature =
          a.splitSignature =
          a.soliditySha256 =
          a.solidityKeccak256 =
          a.solidityPack =
          a.shuffled =
          a.randomBytes =
          a.sha512 =
          a.sha256 =
          a.ripemd160 =
          a.keccak256 =
          a.computeHmac =
          a.commify =
          a.parseUnits =
          a.formatUnits =
          a.parseEther =
          a.formatEther =
          a.isAddress =
          a.getCreate2Address =
          a.getContractAddress =
          a.getIcapAddress =
          a.getAddress =
          a._TypedDataEncoder =
          a.id =
          a.isValidName =
          a.namehash =
          a.hashMessage =
          a.dnsEncode =
          a.parseBytes32String =
            void 0);
      var n = r(93742);
      Object.defineProperty(a, "AbiCoder", {
        enumerable: !0,
        get: function () {
          return n.AbiCoder;
        },
      }),
        Object.defineProperty(a, "checkResultErrors", {
          enumerable: !0,
          get: function () {
            return n.checkResultErrors;
          },
        }),
        Object.defineProperty(a, "ConstructorFragment", {
          enumerable: !0,
          get: function () {
            return n.ConstructorFragment;
          },
        }),
        Object.defineProperty(a, "defaultAbiCoder", {
          enumerable: !0,
          get: function () {
            return n.defaultAbiCoder;
          },
        }),
        Object.defineProperty(a, "ErrorFragment", {
          enumerable: !0,
          get: function () {
            return n.ErrorFragment;
          },
        }),
        Object.defineProperty(a, "EventFragment", {
          enumerable: !0,
          get: function () {
            return n.EventFragment;
          },
        }),
        Object.defineProperty(a, "FormatTypes", {
          enumerable: !0,
          get: function () {
            return n.FormatTypes;
          },
        }),
        Object.defineProperty(a, "Fragment", {
          enumerable: !0,
          get: function () {
            return n.Fragment;
          },
        }),
        Object.defineProperty(a, "FunctionFragment", {
          enumerable: !0,
          get: function () {
            return n.FunctionFragment;
          },
        }),
        Object.defineProperty(a, "Indexed", {
          enumerable: !0,
          get: function () {
            return n.Indexed;
          },
        }),
        Object.defineProperty(a, "Interface", {
          enumerable: !0,
          get: function () {
            return n.Interface;
          },
        }),
        Object.defineProperty(a, "LogDescription", {
          enumerable: !0,
          get: function () {
            return n.LogDescription;
          },
        }),
        Object.defineProperty(a, "ParamType", {
          enumerable: !0,
          get: function () {
            return n.ParamType;
          },
        }),
        Object.defineProperty(a, "TransactionDescription", {
          enumerable: !0,
          get: function () {
            return n.TransactionDescription;
          },
        });
      var f = r(68652);
      Object.defineProperty(a, "getAddress", {
        enumerable: !0,
        get: function () {
          return f.getAddress;
        },
      }),
        Object.defineProperty(a, "getCreate2Address", {
          enumerable: !0,
          get: function () {
            return f.getCreate2Address;
          },
        }),
        Object.defineProperty(a, "getContractAddress", {
          enumerable: !0,
          get: function () {
            return f.getContractAddress;
          },
        }),
        Object.defineProperty(a, "getIcapAddress", {
          enumerable: !0,
          get: function () {
            return f.getIcapAddress;
          },
        }),
        Object.defineProperty(a, "isAddress", {
          enumerable: !0,
          get: function () {
            return f.isAddress;
          },
        }),
        (a.base64 = c(r(82747)));
      var d = r(13235);
      Object.defineProperty(a, "base58", {
        enumerable: !0,
        get: function () {
          return d.Base58;
        },
      });
      var i = r(45849);
      Object.defineProperty(a, "arrayify", {
        enumerable: !0,
        get: function () {
          return i.arrayify;
        },
      }),
        Object.defineProperty(a, "concat", {
          enumerable: !0,
          get: function () {
            return i.concat;
          },
        }),
        Object.defineProperty(a, "hexConcat", {
          enumerable: !0,
          get: function () {
            return i.hexConcat;
          },
        }),
        Object.defineProperty(a, "hexDataSlice", {
          enumerable: !0,
          get: function () {
            return i.hexDataSlice;
          },
        }),
        Object.defineProperty(a, "hexDataLength", {
          enumerable: !0,
          get: function () {
            return i.hexDataLength;
          },
        }),
        Object.defineProperty(a, "hexlify", {
          enumerable: !0,
          get: function () {
            return i.hexlify;
          },
        }),
        Object.defineProperty(a, "hexStripZeros", {
          enumerable: !0,
          get: function () {
            return i.hexStripZeros;
          },
        }),
        Object.defineProperty(a, "hexValue", {
          enumerable: !0,
          get: function () {
            return i.hexValue;
          },
        }),
        Object.defineProperty(a, "hexZeroPad", {
          enumerable: !0,
          get: function () {
            return i.hexZeroPad;
          },
        }),
        Object.defineProperty(a, "isBytes", {
          enumerable: !0,
          get: function () {
            return i.isBytes;
          },
        }),
        Object.defineProperty(a, "isBytesLike", {
          enumerable: !0,
          get: function () {
            return i.isBytesLike;
          },
        }),
        Object.defineProperty(a, "isHexString", {
          enumerable: !0,
          get: function () {
            return i.isHexString;
          },
        }),
        Object.defineProperty(a, "joinSignature", {
          enumerable: !0,
          get: function () {
            return i.joinSignature;
          },
        }),
        Object.defineProperty(a, "zeroPad", {
          enumerable: !0,
          get: function () {
            return i.zeroPad;
          },
        }),
        Object.defineProperty(a, "splitSignature", {
          enumerable: !0,
          get: function () {
            return i.splitSignature;
          },
        }),
        Object.defineProperty(a, "stripZeros", {
          enumerable: !0,
          get: function () {
            return i.stripZeros;
          },
        });
      var o = r(25852);
      Object.defineProperty(a, "_TypedDataEncoder", {
        enumerable: !0,
        get: function () {
          return o._TypedDataEncoder;
        },
      }),
        Object.defineProperty(a, "dnsEncode", {
          enumerable: !0,
          get: function () {
            return o.dnsEncode;
          },
        }),
        Object.defineProperty(a, "hashMessage", {
          enumerable: !0,
          get: function () {
            return o.hashMessage;
          },
        }),
        Object.defineProperty(a, "id", {
          enumerable: !0,
          get: function () {
            return o.id;
          },
        }),
        Object.defineProperty(a, "isValidName", {
          enumerable: !0,
          get: function () {
            return o.isValidName;
          },
        }),
        Object.defineProperty(a, "namehash", {
          enumerable: !0,
          get: function () {
            return o.namehash;
          },
        });
      var b = r(52844);
      Object.defineProperty(a, "defaultPath", {
        enumerable: !0,
        get: function () {
          return b.defaultPath;
        },
      }),
        Object.defineProperty(a, "entropyToMnemonic", {
          enumerable: !0,
          get: function () {
            return b.entropyToMnemonic;
          },
        }),
        Object.defineProperty(a, "getAccountPath", {
          enumerable: !0,
          get: function () {
            return b.getAccountPath;
          },
        }),
        Object.defineProperty(a, "HDNode", {
          enumerable: !0,
          get: function () {
            return b.HDNode;
          },
        }),
        Object.defineProperty(a, "isValidMnemonic", {
          enumerable: !0,
          get: function () {
            return b.isValidMnemonic;
          },
        }),
        Object.defineProperty(a, "mnemonicToEntropy", {
          enumerable: !0,
          get: function () {
            return b.mnemonicToEntropy;
          },
        }),
        Object.defineProperty(a, "mnemonicToSeed", {
          enumerable: !0,
          get: function () {
            return b.mnemonicToSeed;
          },
        });
      var s = r(83788);
      Object.defineProperty(a, "getJsonWalletAddress", {
        enumerable: !0,
        get: function () {
          return s.getJsonWalletAddress;
        },
      });
      var l = r(53099);
      Object.defineProperty(a, "keccak256", {
        enumerable: !0,
        get: function () {
          return l.keccak256;
        },
      });
      var u = r(83928);
      Object.defineProperty(a, "Logger", {
        enumerable: !0,
        get: function () {
          return u.Logger;
        },
      });
      var h = r(23256);
      Object.defineProperty(a, "computeHmac", {
        enumerable: !0,
        get: function () {
          return h.computeHmac;
        },
      }),
        Object.defineProperty(a, "ripemd160", {
          enumerable: !0,
          get: function () {
            return h.ripemd160;
          },
        }),
        Object.defineProperty(a, "sha256", {
          enumerable: !0,
          get: function () {
            return h.sha256;
          },
        }),
        Object.defineProperty(a, "sha512", {
          enumerable: !0,
          get: function () {
            return h.sha512;
          },
        });
      var p = r(48831);
      Object.defineProperty(a, "solidityKeccak256", {
        enumerable: !0,
        get: function () {
          return p.keccak256;
        },
      }),
        Object.defineProperty(a, "solidityPack", {
          enumerable: !0,
          get: function () {
            return p.pack;
          },
        }),
        Object.defineProperty(a, "soliditySha256", {
          enumerable: !0,
          get: function () {
            return p.sha256;
          },
        });
      var m = r(57220);
      Object.defineProperty(a, "randomBytes", {
        enumerable: !0,
        get: function () {
          return m.randomBytes;
        },
      }),
        Object.defineProperty(a, "shuffled", {
          enumerable: !0,
          get: function () {
            return m.shuffled;
          },
        });
      var g = r(49435);
      Object.defineProperty(a, "checkProperties", {
        enumerable: !0,
        get: function () {
          return g.checkProperties;
        },
      }),
        Object.defineProperty(a, "deepCopy", {
          enumerable: !0,
          get: function () {
            return g.deepCopy;
          },
        }),
        Object.defineProperty(a, "defineReadOnly", {
          enumerable: !0,
          get: function () {
            return g.defineReadOnly;
          },
        }),
        Object.defineProperty(a, "getStatic", {
          enumerable: !0,
          get: function () {
            return g.getStatic;
          },
        }),
        Object.defineProperty(a, "resolveProperties", {
          enumerable: !0,
          get: function () {
            return g.resolveProperties;
          },
        }),
        Object.defineProperty(a, "shallowCopy", {
          enumerable: !0,
          get: function () {
            return g.shallowCopy;
          },
        }),
        (a.RLP = c(r(52598)));
      var y = r(6861);
      Object.defineProperty(a, "computePublicKey", {
        enumerable: !0,
        get: function () {
          return y.computePublicKey;
        },
      }),
        Object.defineProperty(a, "recoverPublicKey", {
          enumerable: !0,
          get: function () {
            return y.recoverPublicKey;
          },
        }),
        Object.defineProperty(a, "SigningKey", {
          enumerable: !0,
          get: function () {
            return y.SigningKey;
          },
        });
      var v = r(3794);
      Object.defineProperty(a, "formatBytes32String", {
        enumerable: !0,
        get: function () {
          return v.formatBytes32String;
        },
      }),
        Object.defineProperty(a, "nameprep", {
          enumerable: !0,
          get: function () {
            return v.nameprep;
          },
        }),
        Object.defineProperty(a, "parseBytes32String", {
          enumerable: !0,
          get: function () {
            return v.parseBytes32String;
          },
        }),
        Object.defineProperty(a, "_toEscapedUtf8String", {
          enumerable: !0,
          get: function () {
            return v._toEscapedUtf8String;
          },
        }),
        Object.defineProperty(a, "toUtf8Bytes", {
          enumerable: !0,
          get: function () {
            return v.toUtf8Bytes;
          },
        }),
        Object.defineProperty(a, "toUtf8CodePoints", {
          enumerable: !0,
          get: function () {
            return v.toUtf8CodePoints;
          },
        }),
        Object.defineProperty(a, "toUtf8String", {
          enumerable: !0,
          get: function () {
            return v.toUtf8String;
          },
        }),
        Object.defineProperty(a, "Utf8ErrorFuncs", {
          enumerable: !0,
          get: function () {
            return v.Utf8ErrorFuncs;
          },
        });
      var S = r(91359);
      Object.defineProperty(a, "accessListify", {
        enumerable: !0,
        get: function () {
          return S.accessListify;
        },
      }),
        Object.defineProperty(a, "computeAddress", {
          enumerable: !0,
          get: function () {
            return S.computeAddress;
          },
        }),
        Object.defineProperty(a, "parseTransaction", {
          enumerable: !0,
          get: function () {
            return S.parse;
          },
        }),
        Object.defineProperty(a, "recoverAddress", {
          enumerable: !0,
          get: function () {
            return S.recoverAddress;
          },
        }),
        Object.defineProperty(a, "serializeTransaction", {
          enumerable: !0,
          get: function () {
            return S.serialize;
          },
        }),
        Object.defineProperty(a, "TransactionTypes", {
          enumerable: !0,
          get: function () {
            return S.TransactionTypes;
          },
        });
      var w = r(9044);
      Object.defineProperty(a, "commify", {
        enumerable: !0,
        get: function () {
          return w.commify;
        },
      }),
        Object.defineProperty(a, "formatEther", {
          enumerable: !0,
          get: function () {
            return w.formatEther;
          },
        }),
        Object.defineProperty(a, "parseEther", {
          enumerable: !0,
          get: function () {
            return w.parseEther;
          },
        }),
        Object.defineProperty(a, "formatUnits", {
          enumerable: !0,
          get: function () {
            return w.formatUnits;
          },
        }),
        Object.defineProperty(a, "parseUnits", {
          enumerable: !0,
          get: function () {
            return w.parseUnits;
          },
        });
      var P = r(39331);
      Object.defineProperty(a, "verifyMessage", {
        enumerable: !0,
        get: function () {
          return P.verifyMessage;
        },
      }),
        Object.defineProperty(a, "verifyTypedData", {
          enumerable: !0,
          get: function () {
            return P.verifyTypedData;
          },
        });
      var C = r(40710);
      Object.defineProperty(a, "_fetchData", {
        enumerable: !0,
        get: function () {
          return C._fetchData;
        },
      }),
        Object.defineProperty(a, "fetchJson", {
          enumerable: !0,
          get: function () {
            return C.fetchJson;
          },
        }),
        Object.defineProperty(a, "poll", {
          enumerable: !0,
          get: function () {
            return C.poll;
          },
        });
      var E = r(23256);
      Object.defineProperty(a, "SupportedAlgorithm", {
        enumerable: !0,
        get: function () {
          return E.SupportedAlgorithm;
        },
      });
      var A = r(3794);
      Object.defineProperty(a, "UnicodeNormalizationForm", {
        enumerable: !0,
        get: function () {
          return A.UnicodeNormalizationForm;
        },
      }),
        Object.defineProperty(a, "Utf8ErrorReason", {
          enumerable: !0,
          get: function () {
            return A.Utf8ErrorReason;
          },
        });
    },
    72826: (e, a, r) => {
      r.d(a, { A: () => c });
      var t = r(45849),
        x = r(14606);
      function c(e, a, r, c, n) {
        let f, d, i;
        (e = (0, t.arrayify)(e)), (a = (0, t.arrayify)(a));
        let o = 1,
          b = new Uint8Array(c),
          s = new Uint8Array(a.length + 4);
        s.set(a);
        for (let l = 1; l <= o; l++) {
          (s[a.length] = (l >> 24) & 255),
            (s[a.length + 1] = (l >> 16) & 255),
            (s[a.length + 2] = (l >> 8) & 255),
            (s[a.length + 3] = 255 & l);
          let u = (0, t.arrayify)((0, x.L5)(n, e, s));
          f ||
            ((i = new Uint8Array((f = u.length))),
            (o = Math.ceil(c / f)),
            (d = c - (o - 1) * f)),
            i.set(u);
          for (let a = 1; a < r; a++) {
            u = (0, t.arrayify)((0, x.L5)(n, e, u));
            for (let e = 0; e < f; e++) i[e] ^= u[e];
          }
          let h = (l - 1) * f,
            p = l === o ? d : f;
          b.set((0, t.arrayify)(i).slice(0, p), h);
        }
        return (0, t.hexlify)(b);
      }
    },
    82747: (e, a, r) => {
      r.r(a), r.d(a, { decode: () => t.D, encode: () => t.l });
      var t = r(56018);
    },
    83788: (e, a, r) => {
      r.r(a),
        r.d(a, {
          decryptCrowdsale: () => p,
          decryptJsonWallet: () => S,
          decryptJsonWalletSync: () => w,
          decryptKeystore: () => v.Yc,
          decryptKeystoreSync: () => v.xQ,
          encryptKeystore: () => v.w,
          getJsonWalletAddress: () => y,
          isCrowdsaleWallet: () => m,
          isKeystoreWallet: () => g,
        });
      var t = r(33781),
        x = r.n(t),
        c = r(68652),
        n = r(45849),
        f = r(53099),
        d = r(72826),
        i = r(193),
        o = r(49435),
        b = r(83928),
        s = r(66320),
        l = r(46444);
      let u = new b.Logger(s.r);
      class h extends o.Description {
        isCrowdsaleAccount(e) {
          return !!(e && e._isCrowdsaleAccount);
        }
      }
      function p(e, a) {
        let r = JSON.parse(e);
        a = (0, l.Qq)(a);
        let t = (0, c.getAddress)((0, l.oe)(r, "ethaddr")),
          o = (0, l.m0)((0, l.oe)(r, "encseed"));
        (o && o.length % 16 == 0) ||
          u.throwArgumentError("invalid encseed", "json", e);
        let b = (0, n.arrayify)((0, d.A)(a, a, 2e3, 32, "sha256")).slice(0, 16),
          s = o.slice(0, 16),
          p = o.slice(16),
          m = new (x().ModeOfOperation.cbc)(b, s),
          g = x().padding.pkcs7.strip((0, n.arrayify)(m.decrypt(p))),
          y = "";
        for (let e = 0; e < g.length; e++) y += String.fromCharCode(g[e]);
        let v = (0, i.YW)(y);
        return new h({
          _isCrowdsaleAccount: !0,
          address: t,
          privateKey: (0, f.keccak256)(v),
        });
      }
      function m(e) {
        let a = null;
        try {
          a = JSON.parse(e);
        } catch (e) {
          return !1;
        }
        return a.encseed && a.ethaddr;
      }
      function g(e) {
        let a = null;
        try {
          a = JSON.parse(e);
        } catch (e) {
          return !1;
        }
        return (
          !!a.version &&
          parseInt(a.version) === a.version &&
          3 === parseInt(a.version)
        );
      }
      function y(e) {
        if (m(e))
          try {
            return (0, c.getAddress)(JSON.parse(e).ethaddr);
          } catch (e) {
            return null;
          }
        if (g(e))
          try {
            return (0, c.getAddress)(JSON.parse(e).address);
          } catch (e) {}
        return null;
      }
      var v = r(18339);
      function S(e, a, r) {
        if (m(e)) {
          r && r(0);
          let t = p(e, a);
          return r && r(1), Promise.resolve(t);
        }
        return g(e)
          ? (0, v.Yc)(e, a, r)
          : Promise.reject(Error("invalid JSON wallet"));
      }
      function w(e, a) {
        if (m(e)) return p(e, a);
        if (g(e)) return (0, v.xQ)(e, a);
        throw Error("invalid JSON wallet");
      }
    },
    93742: (e, a, r) => {
      r.r(a),
        r.d(a, {
          AbiCoder: () => x.y,
          ConstructorFragment: () => t.Pw,
          ErrorFragment: () => t.bp,
          EventFragment: () => t.Zp,
          FormatTypes: () => t.$o,
          Fragment: () => t.FK,
          FunctionFragment: () => t.hc,
          Indexed: () => c.wu,
          Interface: () => c.KA,
          LogDescription: () => c.FW,
          ParamType: () => t.aX,
          TransactionDescription: () => c.dJ,
          checkResultErrors: () => n.$v,
          defaultAbiCoder: () => x.D,
        });
      var t = r(48071),
        x = r(16260),
        c = r(93685),
        n = r(37371);
    },
  },
]);
