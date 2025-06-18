"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4562],
  {
    926: (e, t, s) => {
      s.d(t, { T: () => r });
      var a = s(27493);
      async function r(e) {
        let t = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
        return (0, a.ME)(t);
      }
    },
    2806: (e, t, s) => {
      s.d(t, { L: () => a });
      async function a(e, { serializedTransaction: t }) {
        return e.request(
          { method: "eth_sendRawTransaction", params: [t] },
          { retryCount: 0 }
        );
      }
    },
    5041: (e, t, s) => {
      s.d(t, { n: () => d });
      var a = s(12115),
        r = s(34560),
        n = s(7165),
        i = s(25910),
        o = s(52020),
        c = class extends i.Q {
          #e;
          #t = void 0;
          #s;
          #a;
          constructor(e, t) {
            super(),
              (this.#e = e),
              this.setOptions(t),
              this.bindMethods(),
              this.#r();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(e) {
            let t = this.options;
            (this.options = this.#e.defaultMutationOptions(e)),
              (0, o.f8)(this.options, t) ||
                this.#e.getMutationCache().notify({
                  type: "observerOptionsUpdated",
                  mutation: this.#s,
                  observer: this,
                }),
              t?.mutationKey &&
              this.options.mutationKey &&
              (0, o.EN)(t.mutationKey) !== (0, o.EN)(this.options.mutationKey)
                ? this.reset()
                : this.#s?.state.status === "pending" &&
                  this.#s.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#s?.removeObserver(this);
          }
          onMutationUpdate(e) {
            this.#r(), this.#n(e);
          }
          getCurrentResult() {
            return this.#t;
          }
          reset() {
            this.#s?.removeObserver(this),
              (this.#s = void 0),
              this.#r(),
              this.#n();
          }
          mutate(e, t) {
            return (
              (this.#a = t),
              this.#s?.removeObserver(this),
              (this.#s = this.#e
                .getMutationCache()
                .build(this.#e, this.options)),
              this.#s.addObserver(this),
              this.#s.execute(e)
            );
          }
          #r() {
            let e = this.#s?.state ?? (0, r.$)();
            this.#t = {
              ...e,
              isPending: "pending" === e.status,
              isSuccess: "success" === e.status,
              isError: "error" === e.status,
              isIdle: "idle" === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #n(e) {
            n.jG.batch(() => {
              if (this.#a && this.hasListeners()) {
                let t = this.#t.variables,
                  s = this.#t.context;
                e?.type === "success"
                  ? (this.#a.onSuccess?.(e.data, t, s),
                    this.#a.onSettled?.(e.data, null, t, s))
                  : e?.type === "error" &&
                    (this.#a.onError?.(e.error, t, s),
                    this.#a.onSettled?.(void 0, e.error, t, s));
              }
              this.listeners.forEach((e) => {
                e(this.#t);
              });
            });
          }
        },
        u = s(26715);
      function d(e, t) {
        let s = (0, u.jE)(t),
          [r] = a.useState(() => new c(s, e));
        a.useEffect(() => {
          r.setOptions(e);
        }, [r, e]);
        let i = a.useSyncExternalStore(
            a.useCallback((e) => r.subscribe(n.jG.batchCalls(e)), [r]),
            () => r.getCurrentResult(),
            () => r.getCurrentResult()
          ),
          d = a.useCallback(
            (e, t) => {
              r.mutate(e, t).catch(o.lQ);
            },
            [r]
          );
        if (i.error && (0, o.GU)(r.options.throwOnError, [i.error]))
          throw i.error;
        return { ...i, mutate: d, mutateAsync: i.mutate };
      }
    },
    6158: (e, t, s) => {
      s.d(t, { x: () => l });
      var a = s(35883),
        r = s(24578),
        n = s(32840),
        i = s(87094),
        o = s(27493),
        c = s(67622);
      async function u({ hash: e, signature: t }) {
        let a = (0, n.q)(e) ? e : (0, c.nj)(e),
          { secp256k1: r } = await s.e(9543).then(s.bind(s, 99543)),
          u = (() => {
            if ("object" == typeof t && "r" in t && "s" in t) {
              let { r: e, s, v: a, yParity: n } = t,
                i = d(Number(n ?? a));
              return new r.Signature((0, o.uU)(e), (0, o.uU)(s)).addRecoveryBit(
                i
              );
            }
            let e = (0, n.q)(t) ? t : (0, c.nj)(t);
            if (65 !== (0, i.E)(e)) throw Error("invalid signature length");
            let s = d((0, o.ME)(`0x${e.slice(130)}`));
            return r.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(
              s
            );
          })()
            .recoverPublicKey(a.substring(2))
            .toHex(!1);
        return `0x${u}`;
      }
      function d(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function l({ hash: e, signature: t }) {
        var s = await u({ hash: e, signature: t });
        let n = (0, r.S)(`0x${s.substring(4)}`).substring(26);
        return (0, a.o)(`0x${n}`);
      }
    },
    10231: (e, t, s) => {
      s.d(t, { u: () => a });
      async function a(e) {
        return new Promise((t) => setTimeout(t, e));
      }
    },
    12914: (e, t, s) => {
      s.d(t, { b4: () => r, uP: () => n });
      var a = s(27493);
      let r = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
        "0x4": "eip7702",
      };
      function n(e) {
        let t = {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          chainId: e.chainId ? (0, a.ME)(e.chainId) : void 0,
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          maxFeePerBlobGas: e.maxFeePerBlobGas
            ? BigInt(e.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: e.maxPriorityFeePerGas
            ? BigInt(e.maxPriorityFeePerGas)
            : void 0,
          nonce: e.nonce ? (0, a.ME)(e.nonce) : void 0,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          type: e.type ? r[e.type] : void 0,
          typeHex: e.type ? e.type : void 0,
          value: e.value ? BigInt(e.value) : void 0,
          v: e.v ? BigInt(e.v) : void 0,
        };
        return (
          e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              chainId: Number(e.chainId),
              nonce: Number(e.nonce),
              r: e.r,
              s: e.s,
              yParity: Number(e.yParity),
            }))),
          (t.yParity = (() => {
            if (e.yParity) return Number(e.yParity);
            if ("bigint" == typeof t.v) {
              if (0n === t.v || 27n === t.v) return 0;
              if (1n === t.v || 28n === t.v) return 1;
              if (t.v >= 35n) return +(t.v % 2n === 0n);
            }
          })()),
          "legacy" === t.type &&
            (delete t.accessList,
            delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas,
            delete t.yParity),
          "eip2930" === t.type &&
            (delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas),
          "eip1559" === t.type && delete t.maxFeePerBlobGas,
          t
        );
      }
    },
    13649: (e, t, s) => {
      s.d(t, { y: () => n });
      var a = s(27493),
        r = s(67622);
      async function n(
        e,
        { address: t, blockTag: s = "latest", blockNumber: n }
      ) {
        let i = await e.request(
          {
            method: "eth_getTransactionCount",
            params: [t, "bigint" == typeof n ? (0, r.cK)(n) : s],
          },
          { dedupe: !!n }
        );
        return (0, a.ME)(i);
      }
    },
    16712: (e, t, s) => {
      s.d(t, { Q: () => g });
      var a = s(19405),
        r = s(7441),
        n = s(83987),
        i = s(67622),
        o = s(44494),
        c = s(31942),
        u = s(69432);
      class d extends r.C {
        constructor(
          e,
          {
            account: t,
            docsPath: s,
            chain: a,
            data: r,
            gas: n,
            gasPrice: i,
            maxFeePerGas: d,
            maxPriorityFeePerGas: l,
            nonce: h,
            to: f,
            value: b,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: s,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              (0, u.aO)({
                from: t?.address,
                to: f,
                value:
                  void 0 !== b &&
                  `${(0, o.c)(b)} ${a?.nativeCurrency?.symbol || "ETH"}`,
                data: r,
                gas: n,
                gasPrice: void 0 !== i && `${(0, c.Q)(i)} gwei`,
                maxFeePerGas: void 0 !== d && `${(0, c.Q)(d)} gwei`,
                maxPriorityFeePerGas: void 0 !== l && `${(0, c.Q)(l)} gwei`,
                nonce: h,
              }),
            ].filter(Boolean),
            name: "EstimateGasExecutionError",
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
      var l = s(42264),
        h = s(35020),
        f = s(7671),
        b = s(76743),
        x = s(25507),
        p = s(65358),
        m = s(73979),
        y = s(59742);
      async function g(e, t) {
        let { account: s = e.account } = t,
          o = s ? (0, a.J)(s) : void 0;
        try {
          let {
              accessList: s,
              authorizationList: a,
              blobs: u,
              blobVersionedHashes: d,
              blockNumber: l,
              blockTag: h,
              data: g,
              gas: w,
              gasPrice: v,
              maxFeePerBlobGas: P,
              maxFeePerGas: C,
              maxPriorityFeePerGas: B,
              nonce: G,
              value: F,
              stateOverride: I,
              ...M
            } = await (0, m.ft)(e, {
              ...t,
              parameters:
                o?.type === "local" ? void 0 : ["blobVersionedHashes"],
            }),
            E = ("bigint" == typeof l ? (0, i.cK)(l) : void 0) || h,
            O = (0, x.yH)(I),
            U = await (async () =>
              M.to
                ? M.to
                : a && a.length > 0
                ? await (0, n.g)({ authorization: a[0] }).catch(() => {
                    throw new r.C(
                      "`to` is required. Could not infer from `authorizationList`"
                    );
                  })
                : void 0)();
          (0, p.c)(t);
          let k = e.chain?.formatters?.transactionRequest?.format,
            T = (k || b.Bv)({
              ...(0, f.o)(M, { format: k }),
              from: o?.address,
              accessList: s,
              authorizationList: a,
              blobs: u,
              blobVersionedHashes: d,
              data: g,
              gas: w,
              gasPrice: v,
              maxFeePerBlobGas: P,
              maxFeePerGas: C,
              maxPriorityFeePerGas: B,
              nonce: G,
              to: U,
              value: F,
            });
          function c(t) {
            let { block: s, request: a, rpcStateOverride: r } = t;
            return e.request({
              method: "eth_estimateGas",
              params: r ? [a, s ?? "latest", r] : s ? [a, s] : [a],
            });
          }
          let A = BigInt(
            await c({ block: E, request: T, rpcStateOverride: O })
          );
          if (a) {
            let t = await (0, y.r)(e, { address: T.from }),
              s = await Promise.all(
                a.map(async (e) => {
                  let { address: s } = e,
                    a = await c({
                      block: E,
                      request: {
                        authorizationList: void 0,
                        data: g,
                        from: o?.address,
                        to: s,
                        value: (0, i.cK)(t),
                      },
                      rpcStateOverride: O,
                    }).catch(() => 100000n);
                  return 2n * BigInt(a);
                })
              );
            A += s.reduce((e, t) => e + t, 0n);
          }
          return A;
        } catch (s) {
          throw (function (e, { docsPath: t, ...s }) {
            return new d(
              (() => {
                let t = (0, h.l)(e, s);
                return t instanceof l.RM ? e : t;
              })(),
              { docsPath: t, ...s }
            );
          })(s, { ...t, account: o, chain: e.chain });
        }
      }
    },
    17327: (e, t, s) => {
      s.d(t, { $: () => r });
      var a = s(12914);
      function r(e) {
        let t = (e.transactions ?? []).map((e) =>
          "string" == typeof e ? e : (0, a.uP)(e)
        );
        return {
          ...e,
          baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
          blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
          difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
          excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
          gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
          hash: e.hash ? e.hash : null,
          logsBloom: e.logsBloom ? e.logsBloom : null,
          nonce: e.nonce ? e.nonce : null,
          number: e.number ? BigInt(e.number) : null,
          size: e.size ? BigInt(e.size) : void 0,
          timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
          transactions: t,
          totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
        };
      }
    },
    20789: (e, t, s) => {
      s.d(t, { l: () => r });
      var a = s(7441);
      class r extends a.C {
        constructor({ blockHash: e, blockNumber: t }) {
          let s = "Block";
          e && (s = `Block at hash "${e}"`),
            t && (s = `Block at number "${t}"`),
            super(`${s} could not be found.`, { name: "BlockNotFoundError" });
        }
      }
    },
    23335: (e, t, s) => {
      s.d(t, { g: () => i });
      var a = s(20789),
        r = s(67622),
        n = s(17327);
      async function i(
        e,
        {
          blockHash: t,
          blockNumber: s,
          blockTag: o,
          includeTransactions: c,
        } = {}
      ) {
        let u = c ?? !1,
          d = void 0 !== s ? (0, r.cK)(s) : void 0,
          l = null;
        if (
          !(l = t
            ? await e.request(
                { method: "eth_getBlockByHash", params: [t, u] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockByNumber",
                  params: [d || (o ?? "latest"), u],
                },
                { dedupe: !!d }
              ))
        )
          throw new a.l({ blockHash: t, blockNumber: s });
        return (e.chain?.formatters?.block?.format || n.$)(l);
      }
    },
    24573: (e, t, s) => {
      s.d(t, { O: () => u, _: () => c });
      var a = s(91836),
        r = s(34524),
        n = s(76654),
        i = s(23335),
        o = s(39112);
      async function c(e, t) {
        return u(e, t);
      }
      async function u(e, t) {
        let {
            block: s,
            chain: c = e.chain,
            request: u,
            type: d = "eip1559",
          } = t || {},
          l = await (async () =>
            "function" == typeof c?.fees?.baseFeeMultiplier
              ? c.fees.baseFeeMultiplier({ block: s, client: e, request: u })
              : c?.fees?.baseFeeMultiplier ?? 1.2)();
        if (l < 1) throw new a.sM();
        let h = l.toString().split(".")[1]?.length ?? 0,
          f = 10 ** h,
          b = (e) => (e * BigInt(Math.ceil(l * f))) / BigInt(f),
          x = s || (await (0, r.T)(e, i.g, "getBlock")({}));
        if ("function" == typeof c?.fees?.estimateFeesPerGas) {
          let t = await c.fees.estimateFeesPerGas({
            block: s,
            client: e,
            multiply: b,
            request: u,
            type: d,
          });
          if (null !== t) return t;
        }
        if ("eip1559" === d) {
          if ("bigint" != typeof x.baseFeePerGas) throw new a.pw();
          let t =
              "bigint" == typeof u?.maxPriorityFeePerGas
                ? u.maxPriorityFeePerGas
                : await (0, n.N)(e, { block: x, chain: c, request: u }),
            s = b(x.baseFeePerGas);
          return {
            maxFeePerGas: u?.maxFeePerGas ?? s + t,
            maxPriorityFeePerGas: t,
          };
        }
        return {
          gasPrice: u?.gasPrice ?? b(await (0, r.T)(e, o.L, "getGasPrice")({})),
        };
      }
    },
    34560: (e, t, s) => {
      s.d(t, { $: () => o, s: () => i });
      var a = s(7165),
        r = s(57948),
        n = s(6784),
        i = class extends r.k {
          #i;
          #o;
          #c;
          constructor(e) {
            super(),
              (this.mutationId = e.mutationId),
              (this.#o = e.mutationCache),
              (this.#i = []),
              (this.state = e.state || o()),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = e), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#i.includes(e) ||
              (this.#i.push(e),
              this.clearGcTimeout(),
              this.#o.notify({
                type: "observerAdded",
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#i = this.#i.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#o.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e,
              });
          }
          optionalRemove() {
            this.#i.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#o.remove(this));
          }
          continue() {
            return this.#c?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            let t = () => {
              this.#u({ type: "continue" });
            };
            this.#c = (0, n.II)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (e, t) => {
                this.#u({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#u({ type: "pause" });
              },
              onContinue: t,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#o.canRun(this),
            });
            let s = "pending" === this.state.status,
              a = !this.#c.canStart();
            try {
              if (s) t();
              else {
                this.#u({ type: "pending", variables: e, isPaused: a }),
                  await this.#o.config.onMutate?.(e, this);
                let t = await this.options.onMutate?.(e);
                t !== this.state.context &&
                  this.#u({
                    type: "pending",
                    context: t,
                    variables: e,
                    isPaused: a,
                  });
              }
              let r = await this.#c.start();
              return (
                await this.#o.config.onSuccess?.(
                  r,
                  e,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(r, e, this.state.context),
                await this.#o.config.onSettled?.(
                  r,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(r, null, e, this.state.context),
                this.#u({ type: "success", data: r }),
                r
              );
            } catch (t) {
              try {
                throw (
                  (await this.#o.config.onError?.(
                    t,
                    e,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(t, e, this.state.context),
                  await this.#o.config.onSettled?.(
                    void 0,
                    t,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    t,
                    e,
                    this.state.context
                  ),
                  t)
                );
              } finally {
                this.#u({ type: "error", error: t });
              }
            } finally {
              this.#o.runNext(this);
            }
          }
          #u(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error,
                  };
                case "pause":
                  return { ...t, isPaused: !0 };
                case "continue":
                  return { ...t, isPaused: !1 };
                case "pending":
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              a.jG.batch(() => {
                this.#i.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#o.notify({
                    mutation: this,
                    type: "updated",
                    action: e,
                  });
              });
          }
        };
      function o() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    39112: (e, t, s) => {
      s.d(t, { L: () => a });
      async function a(e) {
        return BigInt(await e.request({ method: "eth_gasPrice" }));
      }
    },
    42142: (e, t, s) => {
      s.d(t, { b: () => r });
      var a = s(10231);
      function r(
        e,
        { delay: t = 100, retryCount: s = 2, shouldRetry: n = () => !0 } = {}
      ) {
        return new Promise((r, i) => {
          let o = async ({ count: c = 0 } = {}) => {
            let u = async ({ error: e }) => {
              let s = "function" == typeof t ? t({ count: c, error: e }) : t;
              s && (await (0, a.u)(s)), o({ count: c + 1 });
            };
            try {
              let t = await e();
              r(t);
            } catch (e) {
              if (c < s && (await n({ count: c, error: e })))
                return u({ error: e });
              i(e);
            }
          };
          o();
        });
      }
    },
    50431: (e, t, s) => {
      s.d(t, { T: () => r, Z: () => n });
      var a = s(7441);
      class r extends a.C {
        constructor({ docsPath: e } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
            { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
          );
        }
      }
      class n extends a.C {
        constructor({ docsPath: e, metaMessages: t, type: s }) {
          super(`Account type "${s}" is not supported.`, {
            docsPath: e,
            metaMessages: t,
            name: "AccountTypeNotSupportedError",
          });
        }
      }
    },
    54315: (e, t, s) => {
      s.d(t, { o: () => l });
      var a = s(7441),
        r = s(90557),
        n = s(81379),
        i = s(67622);
      let o = new (s(65003).A)(8192);
      var c = s(42142),
        u = s(79183),
        d = s(65368);
      function l(
        {
          key: e,
          methods: t,
          name: s,
          request: l,
          retryCount: h = 3,
          retryDelay: f = 150,
          timeout: b,
          type: x,
        },
        p
      ) {
        return {
          config: {
            key: e,
            methods: t,
            name: s,
            request: l,
            retryCount: h,
            retryDelay: f,
            timeout: b,
            type: x,
          },
          request: (function (e, t = {}) {
            return async (s, d = {}) => {
              let {
                  dedupe: l = !1,
                  methods: h,
                  retryDelay: f = 150,
                  retryCount: b = 3,
                  uid: x,
                } = { ...t, ...d },
                { method: p } = s;
              if (
                h?.exclude?.includes(p) ||
                (h?.include && !h.include.includes(p))
              )
                throw new n.ab(Error("method not supported"), { method: p });
              let m = l ? (0, i.i3)(`${x}.${(0, u.A)(s)}`) : void 0;
              return (function (e, { enabled: t = !0, id: s }) {
                if (!t || !s) return e();
                if (o.get(s)) return o.get(s);
                let a = e().finally(() => o.delete(s));
                return o.set(s, a), a;
              })(
                () =>
                  (0, c.b)(
                    async () => {
                      try {
                        return await e(s);
                      } catch (e) {
                        switch (e.code) {
                          case n.XU.code:
                            throw new n.XU(e);
                          case n.CL.code:
                            throw new n.CL(e);
                          case n.Gi.code:
                            throw new n.Gi(e, { method: s.method });
                          case n.D5.code:
                            throw new n.D5(e);
                          case n.bq.code:
                            throw new n.bq(e);
                          case n.Di.code:
                            throw new n.Di(e);
                          case n.hA.code:
                            throw new n.hA(e);
                          case n.qZ.code:
                            throw new n.qZ(e);
                          case n.YW.code:
                            throw new n.YW(e);
                          case n.ab.code:
                            throw new n.ab(e, { method: s.method });
                          case n.s0.code:
                            throw new n.s0(e);
                          case n.xQ.code:
                            throw new n.xQ(e);
                          case n.vx.code:
                            throw new n.vx(e);
                          case n.sV.code:
                            throw new n.sV(e);
                          case n.Sf.code:
                            throw new n.Sf(e);
                          case n.RV.code:
                            throw new n.RV(e);
                          case n.xq.code:
                            throw new n.xq(e);
                          case n.ch.code:
                            throw new n.ch(e);
                          case n.L5.code:
                            throw new n.L5(e);
                          case n.WT.code:
                            throw new n.WT(e);
                          case n.hl.code:
                            throw new n.hl(e);
                          case n.cg.code:
                            throw new n.cg(e);
                          case n.uL.code:
                            throw new n.uL(e);
                          case n.G1.code:
                            throw new n.G1(e);
                          case n.jz.code:
                            throw new n.jz(e);
                          case 5e3:
                            throw new n.vx(e);
                          default:
                            if (e instanceof a.C) throw e;
                            throw new n.MI(e);
                        }
                      }
                    },
                    {
                      delay: ({ count: e, error: t }) => {
                        if (t && t instanceof r.Ci) {
                          let e = t?.headers?.get("Retry-After");
                          if (e?.match(/\d/)) return 1e3 * Number.parseInt(e);
                        }
                        return ~~(1 << e) * f;
                      },
                      retryCount: b,
                      shouldRetry: ({ error: e }) => {
                        var t;
                        return "code" in (t = e) && "number" == typeof t.code
                          ? -1 === t.code ||
                              t.code === n.s0.code ||
                              t.code === n.bq.code
                          : !(t instanceof r.Ci) ||
                              !t.status ||
                              403 === t.status ||
                              408 === t.status ||
                              413 === t.status ||
                              429 === t.status ||
                              500 === t.status ||
                              502 === t.status ||
                              503 === t.status ||
                              504 === t.status ||
                              !1;
                      },
                    }
                  ),
                { enabled: l, id: m }
              );
            };
          })(l, { methods: t, retryCount: h, retryDelay: f, uid: (0, d.L)() }),
          value: p,
        };
      }
    },
    59742: (e, t, s) => {
      s.d(t, { r: () => r });
      var a = s(67622);
      async function r(
        e,
        { address: t, blockNumber: s, blockTag: r = "latest" }
      ) {
        let n = "bigint" == typeof s ? (0, a.cK)(s) : void 0;
        return BigInt(
          await e.request({ method: "eth_getBalance", params: [t, n || r] })
        );
      }
    },
    62288: (e, t, s) => {
      s.d(t, { sc: () => a });
      let a = s(98693).sc;
    },
    65368: (e, t, s) => {
      let a;
      s.d(t, { L: () => n });
      let r = 256;
      function n(e = 11) {
        if (!a || r + e > 512) {
          (a = ""), (r = 0);
          for (let e = 0; e < 256; e++)
            a += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
        }
        return a.substring(r, r++ + e);
      }
    },
    73979: (e, t, s) => {
      s.d(t, { MM: () => B, ft: () => F });
      var a = s(19405),
        r = s(24573),
        n = s(16712),
        i = s(23335),
        o = s(13649),
        c = s(91836),
        u = s(80844),
        d = s(67622);
      function l(e) {
        let { kzg: t } = e,
          s = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          a =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, u.aT)(e))
              : e.blobs,
          r = [];
        for (let e of a) r.push(Uint8Array.from(t.blobToKzgCommitment(e)));
        return "bytes" === s ? r : r.map((e) => (0, d.My)(e));
      }
      function h(e) {
        let { kzg: t } = e,
          s = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          a =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, u.aT)(e))
              : e.blobs,
          r =
            "string" == typeof e.commitments[0]
              ? e.commitments.map((e) => (0, u.aT)(e))
              : e.commitments,
          n = [];
        for (let e = 0; e < a.length; e++) {
          let s = a[e],
            i = r[e];
          n.push(Uint8Array.from(t.computeBlobKzgProof(s, i)));
        }
        return "bytes" === s ? n : n.map((e) => (0, d.My)(e));
      }
      var f = s(62288),
        b = s(32840),
        x = s(7441);
      class p extends x.C {
        constructor({ maxSize: e, size: t }) {
          super("Blob size is too large.", {
            metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
            name: "BlobSizeTooLargeError",
          });
        }
      }
      class m extends x.C {
        constructor() {
          super("Blob data must not be empty.", { name: "EmptyBlobError" });
        }
      }
      x.C, x.C;
      var y = s(87456),
        g = s(87094),
        w = s(34524),
        v = s(65358),
        P = s(69432),
        C = s(926);
      let B = [
          "blobVersionedHashes",
          "chainId",
          "fees",
          "gas",
          "nonce",
          "type",
        ],
        G = new Map();
      async function F(e, t) {
        let s,
          x,
          {
            account: F = e.account,
            blobs: I,
            chain: M,
            gas: E,
            kzg: O,
            nonce: U,
            nonceManager: k,
            parameters: T = B,
            type: A,
          } = t,
          L = F ? (0, a.J)(F) : F,
          R = { ...t, ...(L ? { from: L?.address } : {}) };
        async function $() {
          return (
            s ||
            (s = await (0, w.T)(e, i.g, "getBlock")({ blockTag: "latest" }))
          );
        }
        async function q() {
          return (
            x ||
            (M
              ? M.id
              : void 0 !== t.chainId
              ? t.chainId
              : (x = await (0, w.T)(e, C.T, "getChainId")({})))
          );
        }
        if (T.includes("nonce") && void 0 === U && L)
          if (k) {
            let t = await q();
            R.nonce = await k.consume({
              address: L.address,
              chainId: t,
              client: e,
            });
          } else
            R.nonce = await (0, w.T)(
              e,
              o.y,
              "getTransactionCount"
            )({ address: L.address, blockTag: "pending" });
        if (
          (T.includes("blobVersionedHashes") || T.includes("sidecars")) &&
          I &&
          O
        ) {
          let e = l({ blobs: I, kzg: O });
          if (
            (T.includes("blobVersionedHashes") &&
              (R.blobVersionedHashes = (function (e) {
                let { commitments: t, version: s } = e,
                  a = e.to ?? ("string" == typeof t[0] ? "hex" : "bytes"),
                  r = [];
                for (let e of t)
                  r.push(
                    (function (e) {
                      let { commitment: t, version: s = 1 } = e,
                        a = e.to ?? ("string" == typeof t ? "hex" : "bytes"),
                        r = (function (e, t) {
                          let s = (0, f.sc)(
                            (0, b.q)(e, { strict: !1 }) ? (0, u.ZJ)(e) : e
                          );
                          return "bytes" === (t || "hex") ? s : (0, d.nj)(s);
                        })(t, "bytes");
                      return r.set([s], 0), "bytes" === a ? r : (0, d.My)(r);
                    })({ commitment: e, to: a, version: s })
                  );
                return r;
              })({ commitments: e, to: "hex" })),
            T.includes("sidecars"))
          ) {
            let t = h({ blobs: I, commitments: e, kzg: O });
            R.sidecars = (function (e) {
              let { data: t, kzg: s, to: a } = e,
                r =
                  e.blobs ??
                  (function (e) {
                    let t =
                        e.to ?? ("string" == typeof e.data ? "hex" : "bytes"),
                      s =
                        "string" == typeof e.data ? (0, u.aT)(e.data) : e.data,
                      a = (0, g.E)(s);
                    if (!a) throw new m();
                    if (a > 761855) throw new p({ maxSize: 761855, size: a });
                    let r = [],
                      n = !0,
                      i = 0;
                    for (; n; ) {
                      let e = (0, y.l)(new Uint8Array(131072)),
                        t = 0;
                      for (; t < 4096; ) {
                        let a = s.slice(i, i + 31);
                        if ((e.pushByte(0), e.pushBytes(a), a.length < 31)) {
                          e.pushByte(128), (n = !1);
                          break;
                        }
                        t++, (i += 31);
                      }
                      r.push(e);
                    }
                    return "bytes" === t
                      ? r.map((e) => e.bytes)
                      : r.map((e) => (0, d.My)(e.bytes));
                  })({ data: t, to: a }),
                n = e.commitments ?? l({ blobs: r, kzg: s, to: a }),
                i = e.proofs ?? h({ blobs: r, commitments: n, kzg: s, to: a }),
                o = [];
              for (let e = 0; e < r.length; e++)
                o.push({ blob: r[e], commitment: n[e], proof: i[e] });
              return o;
            })({ blobs: I, commitments: e, proofs: t, to: "hex" });
          }
        }
        if (
          (T.includes("chainId") && (R.chainId = await q()),
          (T.includes("fees") || T.includes("type")) && void 0 === A)
        )
          try {
            R.type = (function (e) {
              if (e.type) return e.type;
              if (void 0 !== e.authorizationList) return "eip7702";
              if (
                void 0 !== e.blobs ||
                void 0 !== e.blobVersionedHashes ||
                void 0 !== e.maxFeePerBlobGas ||
                void 0 !== e.sidecars
              )
                return "eip4844";
              if (
                void 0 !== e.maxFeePerGas ||
                void 0 !== e.maxPriorityFeePerGas
              )
                return "eip1559";
              if (void 0 !== e.gasPrice)
                return void 0 !== e.accessList ? "eip2930" : "legacy";
              throw new P.Vg({ transaction: e });
            })(R);
          } catch {
            let t = G.get(e.uid);
            if (void 0 === t) {
              let s = await $();
              (t = "bigint" == typeof s?.baseFeePerGas), G.set(e.uid, t);
            }
            R.type = t ? "eip1559" : "legacy";
          }
        if (T.includes("fees"))
          if ("legacy" !== R.type && "eip2930" !== R.type) {
            if (
              void 0 === R.maxFeePerGas ||
              void 0 === R.maxPriorityFeePerGas
            ) {
              let s = await $(),
                { maxFeePerGas: a, maxPriorityFeePerGas: n } = await (0, r.O)(
                  e,
                  { block: s, chain: M, request: R }
                );
              if (
                void 0 === t.maxPriorityFeePerGas &&
                t.maxFeePerGas &&
                t.maxFeePerGas < n
              )
                throw new c.RR({ maxPriorityFeePerGas: n });
              (R.maxPriorityFeePerGas = n), (R.maxFeePerGas = a);
            }
          } else {
            if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas)
              throw new c.pw();
            if (void 0 === t.gasPrice) {
              let t = await $(),
                { gasPrice: s } = await (0, r.O)(e, {
                  block: t,
                  chain: M,
                  request: R,
                  type: "legacy",
                });
              R.gasPrice = s;
            }
          }
        return (
          T.includes("gas") &&
            void 0 === E &&
            (R.gas = await (0, w.T)(
              e,
              n.Q,
              "estimateGas"
            )({
              ...R,
              account: L ? { address: L.address, type: "json-rpc" } : L,
            })),
          (0, v.c)(R),
          delete R.parameters,
          R
        );
      }
    },
    76654: (e, t, s) => {
      s.d(t, { N: () => u, b: () => c });
      var a = s(91836),
        r = s(27493),
        n = s(34524),
        i = s(23335),
        o = s(39112);
      async function c(e, t) {
        return u(e, t);
      }
      async function u(e, t) {
        let { block: s, chain: c = e.chain, request: u } = t || {};
        try {
          let t = c?.fees?.maxPriorityFeePerGas ?? c?.fees?.defaultPriorityFee;
          if ("function" == typeof t) {
            let a = s || (await (0, n.T)(e, i.g, "getBlock")({})),
              r = await t({ block: a, client: e, request: u });
            if (null === r) throw Error();
            return r;
          }
          if (void 0 !== t) return t;
          let a = await e.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, r.uU)(a);
        } catch {
          let [t, r] = await Promise.all([
            s ? Promise.resolve(s) : (0, n.T)(e, i.g, "getBlock")({}),
            (0, n.T)(e, o.L, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof t.baseFeePerGas) throw new a.pw();
          let c = r - t.baseFeePerGas;
          if (c < 0n) return 0n;
          return c;
        }
      }
    },
    77752: (e, t, s) => {
      s.d(t, {
        HF: () => u,
        aj: () => o,
        gC: () => i,
        nM: () => n,
        nk: () => r,
        xU: () => c,
      });
      var a = s(95782);
      class r extends a.C {
        constructor() {
          super("Chain not configured."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainNotConfiguredError",
            });
        }
      }
      class n extends a.C {
        constructor() {
          super("Connector already connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAlreadyConnectedError",
            });
        }
      }
      class i extends a.C {
        constructor() {
          super("Connector not connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorNotConnectedError",
            });
        }
      }
      a.C;
      class o extends a.C {
        constructor({ address: e, connector: t }) {
          super(`Account "${e}" not found for connector "${t.name}".`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAccountNotFoundError",
            });
        }
      }
      class c extends a.C {
        constructor({ connectionChainId: e, connectorChainId: t }) {
          super(
            `The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e}`,
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorChainMismatchError",
            });
        }
      }
      class u extends a.C {
        constructor({ connector: e }) {
          super(`Connector "${e.name}" unavailable while reconnecting.`, {
            details:
              "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorUnavailableReconnectingError",
            });
        }
      }
    },
    83987: (e, t, s) => {
      s.d(t, { g: () => l });
      var a = s(6158),
        r = s(79731),
        n = s(80844),
        i = s(67622),
        o = s(7441),
        c = s(87456);
      function u(e) {
        if (e < 256) return 1;
        if (e < 65536) return 2;
        if (e < 0x1000000) return 3;
        if (e < 0x100000000) return 4;
        throw new o.C("Length is too large.");
      }
      var d = s(24578);
      async function l(e) {
        let { authorization: t, signature: s } = e;
        return (0, a.x)({
          hash: (function (e) {
            let { chainId: t, nonce: s, to: a } = e,
              o = e.contractAddress ?? e.address,
              l = (0, d.S)(
                (0, r.aP)([
                  "0x05",
                  (function (e, t = "hex") {
                    let s = (function e(t) {
                        return Array.isArray(t)
                          ? (function (e) {
                              let t = e.reduce((e, t) => e + t.length, 0),
                                s = u(t);
                              return {
                                length: t <= 55 ? 1 + t : 1 + s + t,
                                encode(a) {
                                  for (let { encode: r } of (t <= 55
                                    ? a.pushByte(192 + t)
                                    : (a.pushByte(247 + s),
                                      1 === s
                                        ? a.pushUint8(t)
                                        : 2 === s
                                        ? a.pushUint16(t)
                                        : 3 === s
                                        ? a.pushUint24(t)
                                        : a.pushUint32(t)),
                                  e))
                                    r(a);
                                },
                              };
                            })(t.map((t) => e(t)))
                          : (function (e) {
                              let t = "string" == typeof e ? (0, n.aT)(e) : e,
                                s = u(t.length);
                              return {
                                length:
                                  1 === t.length && t[0] < 128
                                    ? 1
                                    : t.length <= 55
                                    ? 1 + t.length
                                    : 1 + s + t.length,
                                encode(e) {
                                  (1 === t.length && t[0] < 128) ||
                                    (t.length <= 55
                                      ? e.pushByte(128 + t.length)
                                      : (e.pushByte(183 + s),
                                        1 === s
                                          ? e.pushUint8(t.length)
                                          : 2 === s
                                          ? e.pushUint16(t.length)
                                          : 3 === s
                                          ? e.pushUint24(t.length)
                                          : e.pushUint32(t.length))),
                                    e.pushBytes(t);
                                },
                              };
                            })(t);
                      })(e),
                      a = (0, c.l)(new Uint8Array(s.length));
                    return (s.encode(a), "hex" === t)
                      ? (0, i.My)(a.bytes)
                      : a.bytes;
                  })([t ? (0, i.cK)(t) : "0x", o, s ? (0, i.cK)(s) : "0x"]),
                ])
              );
            return "bytes" === a ? (0, n.aT)(l) : l;
          })(t),
          signature: s ?? t,
        });
      }
    },
    91836: (e, t, s) => {
      s.d(t, { RR: () => o, pw: () => i, sM: () => n });
      var a = s(31942),
        r = s(7441);
      class n extends r.C {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError",
          });
        }
      }
      class i extends r.C {
        constructor() {
          super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError",
          });
        }
      }
      class o extends r.C {
        constructor({ maxPriorityFeePerGas: e }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            a.Q)(e)} gwei).`,
            { name: "MaxFeePerGasTooLowError" }
          );
        }
      }
    },
    95990: (e, t, s) => {
      s.d(t, { r: () => c });
      var a = s(98078),
        r = s(54315),
        n = s(19405),
        i = s(35883),
        o = s(77752);
      async function c(e, t = {}) {
        let s;
        if (t.connector) {
          let { connector: a } = t;
          if (
            "reconnecting" === e.state.status &&
            !a.getAccounts &&
            !a.getChainId
          )
            throw new o.HF({ connector: a });
          let [r, n] = await Promise.all([
            a.getAccounts().catch((e) => {
              if (null === t.account) return [];
              throw e;
            }),
            a.getChainId(),
          ]);
          s = { accounts: r, chainId: n, connector: a };
        } else s = e.state.connections.get(e.state.current);
        if (!s) throw new o.gC();
        let u = t.chainId ?? s.chainId,
          d = await s.connector.getChainId();
        if (d !== s.chainId)
          throw new o.xU({ connectionChainId: s.chainId, connectorChainId: d });
        let l = s.connector;
        if (l.getClient) return l.getClient({ chainId: u });
        let h = (0, n.J)(t.account ?? s.accounts[0]);
        if (
          (h && (h.address = (0, i.b)(h.address)),
          t.account &&
            !s.accounts.some(
              (e) => e.toLowerCase() === h.address.toLowerCase()
            ))
        )
          throw new o.aj({ address: h.address, connector: l });
        let f = e.chains.find((e) => e.id === u),
          b = await s.connector.getProvider({ chainId: u });
        return (0, a.U)({
          account: h,
          chain: f,
          name: "Connector Client",
          transport: (e) =>
            (function (e, t = {}) {
              let {
                key: s = "custom",
                methods: a,
                name: n = "Custom Provider",
                retryDelay: i,
              } = t;
              return ({ retryCount: o }) =>
                (0, r.o)({
                  key: s,
                  methods: a,
                  name: n,
                  request: e.request.bind(e),
                  retryCount: t.retryCount ?? o,
                  retryDelay: i,
                  type: "custom",
                });
            })(b)({ ...e, retryCount: 0 }),
        });
      }
    },
    98078: (e, t, s) => {
      s.d(t, { U: () => n });
      var a = s(19405),
        r = s(65368);
      function n(e) {
        let {
            batch: t,
            chain: s,
            ccipRead: n,
            key: i = "base",
            name: o = "Base Client",
            type: c = "base",
          } = e,
          u = Math.min(
            Math.max(Math.floor((s?.blockTime ?? 12e3) / 2), 500),
            4e3
          ),
          d = e.pollingInterval ?? u,
          l = e.cacheTime ?? d,
          h = e.account ? (0, a.J)(e.account) : void 0,
          {
            config: f,
            request: b,
            value: x,
          } = e.transport({ chain: s, pollingInterval: d }),
          p = {
            account: h,
            batch: t,
            cacheTime: l,
            ccipRead: n,
            chain: s,
            key: i,
            name: o,
            pollingInterval: d,
            request: b,
            transport: { ...f, ...x },
            type: c,
            uid: (0, r.L)(),
          };
        return Object.assign(p, {
          extend: (function e(t) {
            return (s) => {
              let a = s(t);
              for (let e in p) delete a[e];
              let r = { ...t, ...a };
              return Object.assign(r, { extend: e(r) });
            };
          })(p),
        });
      }
    },
    98693: (e, t, s) => {
      s.d(t, { sc: () => d });
      var a = s(19989);
      class r extends a.Vw {
        constructor(e, t, s, r) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = s),
            (this.isLE = r),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, a.O8)(this.buffer));
        }
        update(e) {
          (0, a.CC)(this), (e = (0, a.ZJ)(e)), (0, a.DO)(e);
          let { view: t, buffer: s, blockLen: r } = this,
            n = e.length;
          for (let i = 0; i < n; ) {
            let o = Math.min(r - this.pos, n - i);
            if (o === r) {
              let t = (0, a.O8)(e);
              for (; r <= n - i; i += r) this.process(t, i);
              continue;
            }
            s.set(e.subarray(i, i + o), this.pos),
              (this.pos += o),
              (i += o),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, a.CC)(this), (0, a.Ht)(e, this), (this.finished = !0);
          let { buffer: t, view: s, blockLen: r, isLE: n } = this,
            { pos: i } = this;
          (t[i++] = 128),
            (0, a.uH)(this.buffer.subarray(i)),
            this.padOffset > r - i && (this.process(s, 0), (i = 0));
          for (let e = i; e < r; e++) t[e] = 0;
          !(function (e, t, s, a) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, s, a);
            let r = BigInt(32),
              n = BigInt(0xffffffff),
              i = Number((s >> r) & n),
              o = Number(s & n),
              c = 4 * !!a,
              u = 4 * !a;
            e.setUint32(t + c, i, a), e.setUint32(t + u, o, a);
          })(s, r - 8, BigInt(8 * this.length), n),
            this.process(s, 0);
          let o = (0, a.O8)(e),
            c = this.outputLen;
          if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let u = c / 4,
            d = this.get();
          if (u > d.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < u; e++) o.setUint32(4 * e, d[e], n);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let s = e.slice(0, t);
          return this.destroy(), s;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: s,
            length: a,
            finished: r,
            destroyed: n,
            pos: i,
          } = this;
          return (
            (e.destroyed = n),
            (e.finished = r),
            (e.length = a),
            (e.pos = i),
            a % t && e.buffer.set(s),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      let n = Uint32Array.from([
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c,
        0x1f83d9ab, 0x5be0cd19,
      ]);
      var i = s(48701);
      let o = Uint32Array.from([
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
        c = new Uint32Array(64);
      class u extends r {
        constructor(e = 32) {
          super(64, e, 8, !1),
            (this.A = 0 | n[0]),
            (this.B = 0 | n[1]),
            (this.C = 0 | n[2]),
            (this.D = 0 | n[3]),
            (this.E = 0 | n[4]),
            (this.F = 0 | n[5]),
            (this.G = 0 | n[6]),
            (this.H = 0 | n[7]);
        }
        get() {
          let { A: e, B: t, C: s, D: a, E: r, F: n, G: i, H: o } = this;
          return [e, t, s, a, r, n, i, o];
        }
        set(e, t, s, a, r, n, i, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | s),
            (this.D = 0 | a),
            (this.E = 0 | r),
            (this.F = 0 | n),
            (this.G = 0 | i),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let s = 0; s < 16; s++, t += 4) c[s] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = c[e - 15],
              s = c[e - 2],
              r = (0, a.Ow)(t, 7) ^ (0, a.Ow)(t, 18) ^ (t >>> 3),
              n = (0, a.Ow)(s, 17) ^ (0, a.Ow)(s, 19) ^ (s >>> 10);
            c[e] = (n + c[e - 7] + r + c[e - 16]) | 0;
          }
          let { A: s, B: r, C: n, D: i, E: u, F: d, G: l, H: h } = this;
          for (let e = 0; e < 64; e++) {
            var f, b, x, p;
            let t =
                (h +
                  ((0, a.Ow)(u, 6) ^ (0, a.Ow)(u, 11) ^ (0, a.Ow)(u, 25)) +
                  (((f = u) & d) ^ (~f & l)) +
                  o[e] +
                  c[e]) |
                0,
              m =
                (((0, a.Ow)(s, 2) ^ (0, a.Ow)(s, 13) ^ (0, a.Ow)(s, 22)) +
                  (((b = s) & (x = r)) ^ (b & (p = n)) ^ (x & p))) |
                0;
            (h = l),
              (l = d),
              (d = u),
              (u = (i + t) | 0),
              (i = n),
              (n = r),
              (r = s),
              (s = (t + m) | 0);
          }
          (s = (s + this.A) | 0),
            (r = (r + this.B) | 0),
            (n = (n + this.C) | 0),
            (i = (i + this.D) | 0),
            (u = (u + this.E) | 0),
            (d = (d + this.F) | 0),
            (l = (l + this.G) | 0),
            (h = (h + this.H) | 0),
            this.set(s, r, n, i, u, d, l, h);
        }
        roundClean() {
          (0, a.uH)(c);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, a.uH)(this.buffer);
        }
      }
      i.lD(
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
      );
      let d = (0, a.qj)(() => new u());
    },
  },
]);
