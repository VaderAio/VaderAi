"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [842],
  {
    3488: (e, t, r) => {
      r.d(t, { J: () => u });
      var s = r(69330),
        n = r(60367),
        a = r(54842),
        i = r(34524),
        o = r(81946);
      async function u(e, t) {
        let { abi: r, address: u, args: l, functionName: c, ...d } = t,
          h = (0, n.p)({ abi: r, args: l, functionName: c });
        try {
          let { data: t } = await (0, i.T)(
            e,
            o.T,
            "call"
          )({ ...d, data: h, to: u });
          return (0, s.e)({
            abi: r,
            args: l,
            functionName: c,
            data: t || "0x",
          });
        } catch (e) {
          throw (0, a.j)(e, {
            abi: r,
            address: u,
            args: l,
            docsPath: "/docs/contract/readContract",
            functionName: c,
          });
        }
      }
    },
    9428: (e, t, r) => {
      r.d(t, { J: () => a });
      var s = r(3488),
        n = r(70030);
      function a(e, t) {
        let { chainId: r, ...a } = t,
          i = e.getClient({ chainId: r });
        return (0, n.T)(i, s.J, "readContract")(a);
      }
    },
    13861: (e, t, r) => {
      r.d(t, { M: () => n });
      var s = r(30445);
      function n({ blockNumber: e, chain: t, contract: r }) {
        let n = t?.contracts?.[r];
        if (!n) throw new s.rj({ chain: t, contract: { name: r } });
        if (e && n.blockCreated && n.blockCreated > e)
          throw new s.rj({
            blockNumber: e,
            chain: t,
            contract: { name: r, blockCreated: n.blockCreated },
          });
        return n.address;
      }
    },
    14493: (e, t, r) => {
      r.d(t, {
        Ag: () => i,
        Rm: () => l,
        SJ: () => u,
        _: () => c,
        b2: () => n,
        oX: () => o,
        v2: () => s,
      });
      let s = [
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "allowFailure", type: "bool" },
                  { name: "callData", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "aggregate3",
            outputs: [
              {
                components: [
                  { name: "success", type: "bool" },
                  { name: "returnData", type: "bytes" },
                ],
                name: "returnData",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        n = [
          {
            name: "query",
            type: "function",
            stateMutability: "view",
            inputs: [
              {
                type: "tuple[]",
                name: "queries",
                components: [
                  { type: "address", name: "sender" },
                  { type: "string[]", name: "urls" },
                  { type: "bytes", name: "data" },
                ],
              },
            ],
            outputs: [
              { type: "bool[]", name: "failures" },
              { type: "bytes[]", name: "responses" },
            ],
          },
          {
            name: "HttpError",
            type: "error",
            inputs: [
              { type: "uint16", name: "status" },
              { type: "string", name: "message" },
            ],
          },
        ],
        a = [
          { inputs: [], name: "ResolverNotFound", type: "error" },
          { inputs: [], name: "ResolverWildcardNotSupported", type: "error" },
          { inputs: [], name: "ResolverNotContract", type: "error" },
          {
            inputs: [{ name: "returnData", type: "bytes" }],
            name: "ResolverError",
            type: "error",
          },
          {
            inputs: [
              {
                components: [
                  { name: "status", type: "uint16" },
                  { name: "message", type: "string" },
                ],
                name: "errors",
                type: "tuple[]",
              },
            ],
            name: "HttpError",
            type: "error",
          },
        ],
        i = [
          ...a,
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
              { name: "gateways", type: "string[]" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
        ],
        o = [
          ...a,
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [{ type: "bytes", name: "reverseName" }],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [
              { type: "bytes", name: "reverseName" },
              { type: "string[]", name: "gateways" },
            ],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
        ],
        u = [
          {
            name: "text",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "key", type: "string" },
            ],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        l = [
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "name", type: "bytes32" }],
            outputs: [{ name: "", type: "address" }],
          },
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "coinType", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bytes" }],
          },
        ],
        c = [
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            outputs: [{ type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
            name: "isValidSig",
          },
        ];
    },
    15313: (e, t, r) => {
      r.d(t, { LX: () => s, WN: () => n, nP: () => a });
      let s =
          "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
        n =
          "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
        a =
          "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
    },
    17130: (e, t, r) => {
      r.d(t, {
        FO: () => b,
        If: () => R,
        Ji: () => d,
        Rv: () => u,
        WL: () => f,
        Yo: () => v,
        ej: () => h,
        fC: () => I,
        iB: () => l,
        kz: () => i,
        l9: () => m,
        pc: () => a,
        sP: () => S,
        v7: () => O,
        v8: () => w,
      });
      var s = r(59126);
      let n = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function a(e) {
        return n.test(e);
      }
      function i(e) {
        return (0, s.Yv)(n, e);
      }
      let o = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function u(e) {
        return o.test(e);
      }
      function l(e) {
        return (0, s.Yv)(o, e);
      }
      let c =
        /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
      function d(e) {
        return c.test(e);
      }
      function h(e) {
        return (0, s.Yv)(c, e);
      }
      let p =
        /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
      function f(e) {
        return p.test(e);
      }
      function b(e) {
        return (0, s.Yv)(p, e);
      }
      let y =
        /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
      function m(e) {
        return y.test(e);
      }
      function v(e) {
        return (0, s.Yv)(y, e);
      }
      let g = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
      function w(e) {
        return g.test(e);
      }
      function R(e) {
        return (0, s.Yv)(g, e);
      }
      let x = /^receive\(\) external payable$/;
      function S(e) {
        return x.test(e);
      }
      let I = new Set(["indexed"]),
        O = new Set(["calldata", "memory", "storage"]);
    },
    18224: (e, t, r) => {
      function s(e) {
        return e.state.chainId;
      }
      r.d(t, { i: () => i });
      var n = r(12115),
        a = r(53031);
      function i() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, a.U)(e);
        return (0, n.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: r } = t;
              return e.subscribe((e) => e.chainId, r);
            })(t, { onChange: e }),
          () => s(t),
          () => s(t)
        );
      }
    },
    20760: (e, t, r) => {
      r.d(t, { m: () => o });
      var s = r(99702),
        n = r(79731),
        a = r(13423);
      let i = "/docs/contract/encodeDeployData";
      function o(e) {
        let { abi: t, args: r, bytecode: o } = e;
        if (!r || 0 === r.length) return o;
        let u = t.find((e) => "type" in e && "constructor" === e.type);
        if (!u) throw new s.YW({ docsPath: i });
        if (!("inputs" in u) || !u.inputs || 0 === u.inputs.length)
          throw new s.YF({ docsPath: i });
        let l = (0, a.h)(u.inputs, r);
        return (0, n.aP)([o, l]);
      }
    },
    23360: (e, t, r) => {
      r.d(t, { d: () => i });
      var s = r(35109),
        n = r(42264),
        a = r(35020);
      function i(e, { docsPath: t, ...r }) {
        let i = (() => {
          let t = (0, a.l)(e, r);
          return t instanceof n.RM ? e : t;
        })();
        return new s.zX(i, { docsPath: t, ...r });
      }
    },
    27442: (e, t, r) => {
      r.d(t, { _o: () => m, Pj: () => b, uT: () => d });
      var s = r(59126),
        n = r(84701),
        a = r(99901),
        i = r(30686),
        o = r(68321);
      class u extends o.C {
        constructor({ current: e, depth: t }) {
          super("Unbalanced parentheses.", {
            metaMessages: [
              `"${e.trim()}" has too many ${
                t > 0 ? "opening" : "closing"
              } parentheses.`,
            ],
            details: `Depth "${t}"`,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParenthesisError",
            });
        }
      }
      let l = new Map([
        ["address", { type: "address" }],
        ["bool", { type: "bool" }],
        ["bytes", { type: "bytes" }],
        ["bytes32", { type: "bytes32" }],
        ["int", { type: "int256" }],
        ["int256", { type: "int256" }],
        ["string", { type: "string" }],
        ["uint", { type: "uint256" }],
        ["uint8", { type: "uint8" }],
        ["uint16", { type: "uint16" }],
        ["uint24", { type: "uint24" }],
        ["uint32", { type: "uint32" }],
        ["uint64", { type: "uint64" }],
        ["uint96", { type: "uint96" }],
        ["uint112", { type: "uint112" }],
        ["uint160", { type: "uint160" }],
        ["uint192", { type: "uint192" }],
        ["uint256", { type: "uint256" }],
        ["address owner", { type: "address", name: "owner" }],
        ["address to", { type: "address", name: "to" }],
        ["bool approved", { type: "bool", name: "approved" }],
        ["bytes _data", { type: "bytes", name: "_data" }],
        ["bytes data", { type: "bytes", name: "data" }],
        ["bytes signature", { type: "bytes", name: "signature" }],
        ["bytes32 hash", { type: "bytes32", name: "hash" }],
        ["bytes32 r", { type: "bytes32", name: "r" }],
        ["bytes32 root", { type: "bytes32", name: "root" }],
        ["bytes32 s", { type: "bytes32", name: "s" }],
        ["string name", { type: "string", name: "name" }],
        ["string symbol", { type: "string", name: "symbol" }],
        ["string tokenURI", { type: "string", name: "tokenURI" }],
        ["uint tokenId", { type: "uint256", name: "tokenId" }],
        ["uint8 v", { type: "uint8", name: "v" }],
        ["uint256 balance", { type: "uint256", name: "balance" }],
        ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
        ["uint256 value", { type: "uint256", name: "value" }],
        [
          "event:address indexed from",
          { type: "address", name: "from", indexed: !0 },
        ],
        [
          "event:address indexed to",
          { type: "address", name: "to", indexed: !0 },
        ],
        [
          "event:uint indexed tokenId",
          { type: "uint256", name: "tokenId", indexed: !0 },
        ],
        [
          "event:uint256 indexed tokenId",
          { type: "uint256", name: "tokenId", indexed: !0 },
        ],
      ]);
      var c = r(17130);
      function d(e, t = {}) {
        if ((0, c.Ji)(e))
          return (function (e, t = {}) {
            let r = (0, c.ej)(e);
            if (!r) throw new i.s7({ signature: e, type: "function" });
            let s = y(r.parameters),
              n = [],
              a = s.length;
            for (let e = 0; e < a; e++)
              n.push(
                b(s[e], { modifiers: c.v7, structs: t, type: "function" })
              );
            let o = [];
            if (r.returns) {
              let e = y(r.returns),
                s = e.length;
              for (let r = 0; r < s; r++)
                o.push(
                  b(e[r], { modifiers: c.v7, structs: t, type: "function" })
                );
            }
            return {
              name: r.name,
              type: "function",
              stateMutability: r.stateMutability ?? "nonpayable",
              inputs: n,
              outputs: o,
            };
          })(e, t);
        if ((0, c.Rv)(e))
          return (function (e, t = {}) {
            let r = (0, c.iB)(e);
            if (!r) throw new i.s7({ signature: e, type: "event" });
            let s = y(r.parameters),
              n = [],
              a = s.length;
            for (let e = 0; e < a; e++)
              n.push(b(s[e], { modifiers: c.fC, structs: t, type: "event" }));
            return { name: r.name, type: "event", inputs: n };
          })(e, t);
        if ((0, c.pc)(e))
          return (function (e, t = {}) {
            let r = (0, c.kz)(e);
            if (!r) throw new i.s7({ signature: e, type: "error" });
            let s = y(r.parameters),
              n = [],
              a = s.length;
            for (let e = 0; e < a; e++)
              n.push(b(s[e], { structs: t, type: "error" }));
            return { name: r.name, type: "error", inputs: n };
          })(e, t);
        if ((0, c.l9)(e))
          return (function (e, t = {}) {
            let r = (0, c.Yo)(e);
            if (!r) throw new i.s7({ signature: e, type: "constructor" });
            let s = y(r.parameters),
              n = [],
              a = s.length;
            for (let e = 0; e < a; e++)
              n.push(b(s[e], { structs: t, type: "constructor" }));
            return {
              type: "constructor",
              stateMutability: r.stateMutability ?? "nonpayable",
              inputs: n,
            };
          })(e, t);
        if ((0, c.v8)(e)) {
          var r = e;
          let t = (0, c.If)(r);
          if (!t) throw new i.s7({ signature: r, type: "fallback" });
          return {
            type: "fallback",
            stateMutability: t.stateMutability ?? "nonpayable",
          };
        }
        if ((0, c.sP)(e))
          return { type: "receive", stateMutability: "payable" };
        throw new i.x8({ signature: e });
      }
      let h =
          /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        p =
          /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        f = /^u?int$/;
      function b(e, t) {
        var r, i;
        let o,
          u = (function (e, t, r) {
            let s = "";
            if (r)
              for (let e of Object.entries(r)) {
                if (!e) continue;
                let t = "";
                for (let r of e[1])
                  t += `[${r.type}${r.name ? `:${r.name}` : ""}]`;
                s += `(${e[0]}{${t}})`;
              }
            return t ? `${t}:${e}${s}` : e;
          })(e, t?.type, t?.structs);
        if (l.has(u)) return l.get(u);
        let d = s.wj.test(e),
          g = (0, s.Yv)(d ? p : h, e);
        if (!g) throw new a.dV({ param: e });
        if (
          g.name &&
          ("address" === (r = g.name) ||
            "bool" === r ||
            "function" === r ||
            "string" === r ||
            "tuple" === r ||
            s.BD.test(r) ||
            s.Ge.test(r) ||
            v.test(r))
        )
          throw new a.zd({ param: e, name: g.name });
        let w = g.name ? { name: g.name } : {},
          R = "indexed" === g.modifier ? { indexed: !0 } : {},
          x = t?.structs ?? {},
          S = {};
        if (d) {
          o = "tuple";
          let e = y(g.type),
            t = [],
            r = e.length;
          for (let s = 0; s < r; s++) t.push(b(e[s], { structs: x }));
          S = { components: t };
        } else if (g.type in x) (o = "tuple"), (S = { components: x[g.type] });
        else if (f.test(g.type)) o = `${g.type}256`;
        else if (((o = g.type), t?.type !== "struct" && !m(o)))
          throw new n.UG({ type: o });
        if (g.modifier) {
          if (!t?.modifiers?.has?.(g.modifier))
            throw new a.NO({ param: e, type: t?.type, modifier: g.modifier });
          if (
            c.v7.has(g.modifier) &&
            ((i = o),
            !g.array && "bytes" !== i && "string" !== i && "tuple" !== i)
          )
            throw new a.Pj({ param: e, type: t?.type, modifier: g.modifier });
        }
        let I = { type: `${o}${g.array ?? ""}`, ...w, ...R, ...S };
        return l.set(u, I), I;
      }
      function y(e, t = [], r = "", s = 0) {
        let n = e.trim().length;
        for (let a = 0; a < n; a++) {
          let n = e[a],
            i = e.slice(a + 1);
          switch (n) {
            case ",":
              return 0 === s ? y(i, [...t, r.trim()]) : y(i, t, `${r}${n}`, s);
            case "(":
              return y(i, t, `${r}${n}`, s + 1);
            case ")":
              return y(i, t, `${r}${n}`, s - 1);
            default:
              return y(i, t, `${r}${n}`, s);
          }
        }
        if ("" === r) return t;
        if (0 !== s) throw new u({ current: r, depth: s });
        return t.push(r.trim()), t;
      }
      function m(e) {
        return (
          "address" === e ||
          "bool" === e ||
          "function" === e ||
          "string" === e ||
          s.BD.test(e) ||
          s.Ge.test(e)
        );
      }
      let v =
        /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
    },
    28452: (e, t, r) => {
      r.d(t, { C: () => s });
      class s extends Error {
        constructor(e, t = {}) {
          let r = (() => {
              if (t.cause instanceof s) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause &&
                "details" in t.cause &&
                "string" == typeof t.cause.details
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details;
            })(),
            n = (t.cause instanceof s && t.cause.docsPath) || t.docsPath,
            a = `https://oxlib.sh${n ?? ""}`;
          super(
            [
              e || "An error occurred.",
              ...(t.metaMessages ? ["", ...t.metaMessages] : []),
              ...(r || n
                ? ["", r ? `Details: ${r}` : void 0, n ? `See: ${a}` : void 0]
                : []),
            ]
              .filter((e) => "string" == typeof e)
              .join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docs", {
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
            Object.defineProperty(this, "shortMessage", {
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
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ox@0.1.1",
            }),
            (this.cause = t.cause),
            (this.details = r),
            (this.docs = a),
            (this.docsPath = n),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function e(t, r) {
            return r?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && t.cause
              ? e(t.cause, r)
              : r
              ? null
              : t;
          })(this, e);
        }
      }
    },
    30686: (e, t, r) => {
      r.d(t, { X9: () => i, s7: () => n, x8: () => a });
      var s = r(68321);
      class n extends s.C {
        constructor({ signature: e, type: t }) {
          super(`Invalid ${t} signature.`, { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidSignatureError",
            });
        }
      }
      class a extends s.C {
        constructor({ signature: e }) {
          super("Unknown signature.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSignatureError",
            });
        }
      }
      class i extends s.C {
        constructor({ signature: e }) {
          super("Invalid struct signature.", {
            details: e,
            metaMessages: ["No properties exist."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidStructSignatureError",
            });
        }
      }
    },
    32960: (e, t, r) => {
      r.d(t, { I: () => C });
      var s = r(50920),
        n = r(7165),
        a = r(39853),
        i = r(25910),
        o = r(73504),
        u = r(52020),
        l = class extends i.Q {
          constructor(e, t) {
            super(),
              (this.options = t),
              (this.#e = e),
              (this.#t = null),
              (this.#r = (0, o.T)()),
              this.options.experimental_prefetchInRender ||
                this.#r.reject(
                  Error(
                    "experimental_prefetchInRender feature flag is not enabled"
                  )
                ),
              this.bindMethods(),
              this.setOptions(t);
          }
          #e;
          #s = void 0;
          #n = void 0;
          #a = void 0;
          #i;
          #o;
          #r;
          #t;
          #u;
          #l;
          #c;
          #d;
          #h;
          #p;
          #f = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#s.addObserver(this),
              c(this.#s, this.options) ? this.#b() : this.updateResult(),
              this.#y());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return d(this.#s, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return d(this.#s, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#m(),
              this.#v(),
              this.#s.removeObserver(this);
          }
          setOptions(e) {
            let t = this.options,
              r = this.#s;
            if (
              ((this.options = this.#e.defaultQueryOptions(e)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled &&
                "function" != typeof this.options.enabled &&
                "boolean" != typeof (0, u.Eh)(this.options.enabled, this.#s))
            )
              throw Error(
                "Expected enabled to be a boolean or a callback that returns a boolean"
              );
            this.#g(),
              this.#s.setOptions(this.options),
              t._defaulted &&
                !(0, u.f8)(this.options, t) &&
                this.#e.getQueryCache().notify({
                  type: "observerOptionsUpdated",
                  query: this.#s,
                  observer: this,
                });
            let s = this.hasListeners();
            s && h(this.#s, r, this.options, t) && this.#b(),
              this.updateResult(),
              s &&
                (this.#s !== r ||
                  (0, u.Eh)(this.options.enabled, this.#s) !==
                    (0, u.Eh)(t.enabled, this.#s) ||
                  (0, u.d2)(this.options.staleTime, this.#s) !==
                    (0, u.d2)(t.staleTime, this.#s)) &&
                this.#w();
            let n = this.#R();
            s &&
              (this.#s !== r ||
                (0, u.Eh)(this.options.enabled, this.#s) !==
                  (0, u.Eh)(t.enabled, this.#s) ||
                n !== this.#p) &&
              this.#x(n);
          }
          getOptimisticResult(e) {
            var t, r;
            let s = this.#e.getQueryCache().build(this.#e, e),
              n = this.createResult(s, e);
            return (
              (t = this),
              (r = n),
              (0, u.f8)(t.getCurrentResult(), r) ||
                ((this.#a = n),
                (this.#o = this.options),
                (this.#i = this.#s.state)),
              n
            );
          }
          getCurrentResult() {
            return this.#a;
          }
          trackResult(e, t) {
            return new Proxy(e, {
              get: (e, r) => (this.trackProp(r), t?.(r), Reflect.get(e, r)),
            });
          }
          trackProp(e) {
            this.#f.add(e);
          }
          getCurrentQuery() {
            return this.#s;
          }
          refetch({ ...e } = {}) {
            return this.fetch({ ...e });
          }
          fetchOptimistic(e) {
            let t = this.#e.defaultQueryOptions(e),
              r = this.#e.getQueryCache().build(this.#e, t);
            return r.fetch().then(() => this.createResult(r, t));
          }
          fetch(e) {
            return this.#b({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#a)
            );
          }
          #b(e) {
            this.#g();
            let t = this.#s.fetch(this.options, e);
            return e?.throwOnError || (t = t.catch(u.lQ)), t;
          }
          #w() {
            this.#m();
            let e = (0, u.d2)(this.options.staleTime, this.#s);
            if (u.S$ || this.#a.isStale || !(0, u.gn)(e)) return;
            let t = (0, u.j3)(this.#a.dataUpdatedAt, e);
            this.#d = setTimeout(() => {
              this.#a.isStale || this.updateResult();
            }, t + 1);
          }
          #R() {
            return (
              ("function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#s)
                : this.options.refetchInterval) ?? !1
            );
          }
          #x(e) {
            this.#v(),
              (this.#p = e),
              !u.S$ &&
                !1 !== (0, u.Eh)(this.options.enabled, this.#s) &&
                (0, u.gn)(this.#p) &&
                0 !== this.#p &&
                (this.#h = setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    s.m.isFocused()) &&
                    this.#b();
                }, this.#p));
          }
          #y() {
            this.#w(), this.#x(this.#R());
          }
          #m() {
            this.#d && (clearTimeout(this.#d), (this.#d = void 0));
          }
          #v() {
            this.#h && (clearInterval(this.#h), (this.#h = void 0));
          }
          createResult(e, t) {
            let r,
              s = this.#s,
              n = this.options,
              i = this.#a,
              l = this.#i,
              d = this.#o,
              f = e !== s ? e.state : this.#n,
              { state: b } = e,
              y = { ...b },
              m = !1;
            if (t._optimisticResults) {
              let r = this.hasListeners(),
                i = !r && c(e, t),
                o = r && h(e, s, t, n);
              (i || o) && (y = { ...y, ...(0, a.k)(b.data, e.options) }),
                "isRestoring" === t._optimisticResults &&
                  (y.fetchStatus = "idle");
            }
            let { error: v, errorUpdatedAt: g, status: w } = y;
            r = y.data;
            let R = !1;
            if (
              void 0 !== t.placeholderData &&
              void 0 === r &&
              "pending" === w
            ) {
              let e;
              i?.isPlaceholderData && t.placeholderData === d?.placeholderData
                ? ((e = i.data), (R = !0))
                : (e =
                    "function" == typeof t.placeholderData
                      ? t.placeholderData(this.#c?.state.data, this.#c)
                      : t.placeholderData),
                void 0 !== e &&
                  ((w = "success"), (r = (0, u.pl)(i?.data, e, t)), (m = !0));
            }
            if (t.select && void 0 !== r && !R)
              if (i && r === l?.data && t.select === this.#u) r = this.#l;
              else
                try {
                  (this.#u = t.select),
                    (r = t.select(r)),
                    (r = (0, u.pl)(i?.data, r, t)),
                    (this.#l = r),
                    (this.#t = null);
                } catch (e) {
                  this.#t = e;
                }
            this.#t &&
              ((v = this.#t), (r = this.#l), (g = Date.now()), (w = "error"));
            let x = "fetching" === y.fetchStatus,
              S = "pending" === w,
              I = "error" === w,
              O = S && x,
              $ = void 0 !== r,
              C = {
                status: w,
                fetchStatus: y.fetchStatus,
                isPending: S,
                isSuccess: "success" === w,
                isError: I,
                isInitialLoading: O,
                isLoading: O,
                data: r,
                dataUpdatedAt: y.dataUpdatedAt,
                error: v,
                errorUpdatedAt: g,
                failureCount: y.fetchFailureCount,
                failureReason: y.fetchFailureReason,
                errorUpdateCount: y.errorUpdateCount,
                isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                isFetchedAfterMount:
                  y.dataUpdateCount > f.dataUpdateCount ||
                  y.errorUpdateCount > f.errorUpdateCount,
                isFetching: x,
                isRefetching: x && !S,
                isLoadingError: I && !$,
                isPaused: "paused" === y.fetchStatus,
                isPlaceholderData: m,
                isRefetchError: I && $,
                isStale: p(e, t),
                refetch: this.refetch,
                promise: this.#r,
              };
            if (this.options.experimental_prefetchInRender) {
              let t = (e) => {
                  "error" === C.status
                    ? e.reject(C.error)
                    : void 0 !== C.data && e.resolve(C.data);
                },
                r = () => {
                  t((this.#r = C.promise = (0, o.T)()));
                },
                n = this.#r;
              switch (n.status) {
                case "pending":
                  e.queryHash === s.queryHash && t(n);
                  break;
                case "fulfilled":
                  ("error" === C.status || C.data !== n.value) && r();
                  break;
                case "rejected":
                  ("error" !== C.status || C.error !== n.reason) && r();
              }
            }
            return C;
          }
          updateResult() {
            let e = this.#a,
              t = this.createResult(this.#s, this.options);
            (this.#i = this.#s.state),
              (this.#o = this.options),
              void 0 !== this.#i.data && (this.#c = this.#s),
              (0, u.f8)(t, e) ||
                ((this.#a = t),
                this.#S({
                  listeners: (() => {
                    if (!e) return !0;
                    let { notifyOnChangeProps: t } = this.options,
                      r = "function" == typeof t ? t() : t;
                    if ("all" === r || (!r && !this.#f.size)) return !0;
                    let s = new Set(r ?? this.#f);
                    return (
                      this.options.throwOnError && s.add("error"),
                      Object.keys(this.#a).some(
                        (t) => this.#a[t] !== e[t] && s.has(t)
                      )
                    );
                  })(),
                }));
          }
          #g() {
            let e = this.#e.getQueryCache().build(this.#e, this.options);
            if (e === this.#s) return;
            let t = this.#s;
            (this.#s = e),
              (this.#n = e.state),
              this.hasListeners() &&
                (t?.removeObserver(this), e.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#y();
          }
          #S(e) {
            n.jG.batch(() => {
              e.listeners &&
                this.listeners.forEach((e) => {
                  e(this.#a);
                }),
                this.#e
                  .getQueryCache()
                  .notify({ query: this.#s, type: "observerResultsUpdated" });
            });
          }
        };
      function c(e, t) {
        return (
          (!1 !== (0, u.Eh)(t.enabled, e) &&
            void 0 === e.state.data &&
            ("error" !== e.state.status || !1 !== t.retryOnMount)) ||
          (void 0 !== e.state.data && d(e, t, t.refetchOnMount))
        );
      }
      function d(e, t, r) {
        if (
          !1 !== (0, u.Eh)(t.enabled, e) &&
          "static" !== (0, u.d2)(t.staleTime, e)
        ) {
          let s = "function" == typeof r ? r(e) : r;
          return "always" === s || (!1 !== s && p(e, t));
        }
        return !1;
      }
      function h(e, t, r, s) {
        return (
          (e !== t || !1 === (0, u.Eh)(s.enabled, e)) &&
          (!r.suspense || "error" !== e.state.status) &&
          p(e, r)
        );
      }
      function p(e, t) {
        return (
          !1 !== (0, u.Eh)(t.enabled, e) &&
          e.isStaleByTime((0, u.d2)(t.staleTime, e))
        );
      }
      var f = r(12115),
        b = r(26715);
      r(95155);
      var y = f.createContext(
          (function () {
            let e = !1;
            return {
              clearReset: () => {
                e = !1;
              },
              reset: () => {
                e = !0;
              },
              isReset: () => e,
            };
          })()
        ),
        m = () => f.useContext(y),
        v = (e, t) => {
          (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
            !t.isReset() &&
            (e.retryOnMount = !1);
        },
        g = (e) => {
          f.useEffect(() => {
            e.clearReset();
          }, [e]);
        },
        w = (e) => {
          let {
            result: t,
            errorResetBoundary: r,
            throwOnError: s,
            query: n,
            suspense: a,
          } = e;
          return (
            t.isError &&
            !r.isReset() &&
            !t.isFetching &&
            n &&
            ((a && void 0 === t.data) || (0, u.GU)(s, [t.error, n]))
          );
        },
        R = f.createContext(!1),
        x = () => f.useContext(R);
      R.Provider;
      var S = (e) => {
          if (e.suspense) {
            let t = (e) => ("static" === e ? e : Math.max(e ?? 1e3, 1e3)),
              r = e.staleTime;
            (e.staleTime =
              "function" == typeof r ? (...e) => t(r(...e)) : t(r)),
              "number" == typeof e.gcTime &&
                (e.gcTime = Math.max(e.gcTime, 1e3));
          }
        },
        I = (e, t) => e.isLoading && e.isFetching && !t,
        O = (e, t) => e?.suspense && t.isPending,
        $ = (e, t, r) =>
          t.fetchOptimistic(e).catch(() => {
            r.clearReset();
          });
      function C(e, t) {
        return (function (e, t, r) {
          var s, a, i, o, l;
          let c = x(),
            d = m(),
            h = (0, b.jE)(r),
            p = h.defaultQueryOptions(e);
          null == (a = h.getDefaultOptions().queries) ||
            null == (s = a._experimental_beforeQuery) ||
            s.call(a, p),
            (p._optimisticResults = c ? "isRestoring" : "optimistic"),
            S(p),
            v(p, d),
            g(d);
          let y = !h.getQueryCache().get(p.queryHash),
            [R] = f.useState(() => new t(h, p)),
            C = R.getOptimisticResult(p),
            E = !c && !1 !== e.subscribed;
          if (
            (f.useSyncExternalStore(
              f.useCallback(
                (e) => {
                  let t = E ? R.subscribe(n.jG.batchCalls(e)) : u.lQ;
                  return R.updateResult(), t;
                },
                [R, E]
              ),
              () => R.getCurrentResult(),
              () => R.getCurrentResult()
            ),
            f.useEffect(() => {
              R.setOptions(p);
            }, [p, R]),
            O(p, C))
          )
            throw $(p, R, d);
          if (
            w({
              result: C,
              errorResetBoundary: d,
              throwOnError: p.throwOnError,
              query: h.getQueryCache().get(p.queryHash),
              suspense: p.suspense,
            })
          )
            throw C.error;
          if (
            (null == (o = h.getDefaultOptions().queries) ||
              null == (i = o._experimental_afterQuery) ||
              i.call(o, p, C),
            p.experimental_prefetchInRender && !u.S$ && I(C, c))
          ) {
            let e = y
              ? $(p, R, d)
              : null == (l = h.getQueryCache().get(p.queryHash))
              ? void 0
              : l.promise;
            null == e ||
              e.catch(u.lQ).finally(() => {
                R.updateResult();
              });
          }
          return p.notifyOnChangeProps ? C : R.trackResult(C);
        })(e, l, t);
      }
    },
    35791: (e, t, r) => {
      r.d(t, { J: () => a });
      var s = r(86205);
      function n(e) {
        return {
          address: e.address,
          amount: s.oB(e.amount),
          index: s.oB(e.index),
          validatorIndex: s.oB(e.validatorIndex),
        };
      }
      function a(e) {
        return {
          ...("bigint" == typeof e.baseFeePerGas && {
            baseFeePerGas: s.oB(e.baseFeePerGas),
          }),
          ...("bigint" == typeof e.blobBaseFee && {
            blobBaseFee: s.oB(e.blobBaseFee),
          }),
          ...("string" == typeof e.feeRecipient && {
            feeRecipient: e.feeRecipient,
          }),
          ...("bigint" == typeof e.gasLimit && { gasLimit: s.oB(e.gasLimit) }),
          ...("bigint" == typeof e.number && { number: s.oB(e.number) }),
          ...("bigint" == typeof e.prevRandao && {
            prevRandao: s.oB(e.prevRandao),
          }),
          ...("bigint" == typeof e.time && { time: s.oB(e.time) }),
          ...(e.withdrawals && { withdrawals: e.withdrawals.map(n) }),
        };
      }
    },
    38958: (e, t, r) => {
      r.d(t, { e: () => d });
      var s = r(59126),
        n = r(84701),
        a = r(99901),
        i = r(30686),
        o = r(68321);
      class u extends o.C {
        constructor({ type: e }) {
          super("Circular reference detected.", {
            metaMessages: [`Struct "${e}" is a circular reference.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "CircularReferenceError",
            });
        }
      }
      var l = r(17130),
        c = r(27442);
      function d(e) {
        let t = {},
          r = e.length;
        for (let s = 0; s < r; s++) {
          let r = e[s];
          if (!(0, l.WL)(r)) continue;
          let n = (0, l.FO)(r);
          if (!n) throw new i.s7({ signature: r, type: "struct" });
          let a = n.properties.split(";"),
            o = [],
            u = a.length;
          for (let e = 0; e < u; e++) {
            let t = a[e].trim();
            if (!t) continue;
            let r = (0, c.Pj)(t, { type: "struct" });
            o.push(r);
          }
          if (!o.length) throw new i.X9({ signature: r });
          t[n.name] = o;
        }
        let o = {},
          d = Object.entries(t),
          p = d.length;
        for (let e = 0; e < p; e++) {
          let [r, i] = d[e];
          o[r] = (function e(t, r, i = new Set()) {
            let o = [],
              l = t.length;
            for (let d = 0; d < l; d++) {
              let l = t[d];
              if (s.wj.test(l.type)) o.push(l);
              else {
                let t = (0, s.Yv)(h, l.type);
                if (!t?.type) throw new a.nx({ abiParameter: l });
                let { array: d, type: p } = t;
                if (p in r) {
                  if (i.has(p)) throw new u({ type: p });
                  o.push({
                    ...l,
                    type: `tuple${d ?? ""}`,
                    components: e(r[p] ?? [], r, new Set([...i, p])),
                  });
                } else if ((0, c._o)(p)) o.push(l);
                else throw new n.zz({ type: p });
              }
            }
            return o;
          })(i, t);
        }
        return o;
      }
      let h = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
    },
    39853: (e, t, r) => {
      r.d(t, { X: () => o, k: () => u });
      var s = r(52020),
        n = r(7165),
        a = r(6784),
        i = r(57948),
        o = class extends i.k {
          #I;
          #O;
          #$;
          #e;
          #C;
          #E;
          #P;
          constructor(e) {
            super(),
              (this.#P = !1),
              (this.#E = e.defaultOptions),
              this.setOptions(e.options),
              (this.observers = []),
              (this.#e = e.client),
              (this.#$ = this.#e.getQueryCache()),
              (this.queryKey = e.queryKey),
              (this.queryHash = e.queryHash),
              (this.#I = (function (e) {
                let t =
                    "function" == typeof e.initialData
                      ? e.initialData()
                      : e.initialData,
                  r = void 0 !== t,
                  s = r
                    ? "function" == typeof e.initialDataUpdatedAt
                      ? e.initialDataUpdatedAt()
                      : e.initialDataUpdatedAt
                    : 0;
                return {
                  data: t,
                  dataUpdateCount: 0,
                  dataUpdatedAt: r ? s ?? Date.now() : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: r ? "success" : "pending",
                  fetchStatus: "idle",
                };
              })(this.options)),
              (this.state = e.state ?? this.#I),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#C?.promise;
          }
          setOptions(e) {
            (this.options = { ...this.#E, ...e }),
              this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.observers.length ||
              "idle" !== this.state.fetchStatus ||
              this.#$.remove(this);
          }
          setData(e, t) {
            let r = (0, s.pl)(this.state.data, e, this.options);
            return (
              this.#M({
                data: r,
                type: "success",
                dataUpdatedAt: t?.updatedAt,
                manual: t?.manual,
              }),
              r
            );
          }
          setState(e, t) {
            this.#M({ type: "setState", state: e, setStateOptions: t });
          }
          cancel(e) {
            let t = this.#C?.promise;
            return (
              this.#C?.cancel(e),
              t ? t.then(s.lQ).catch(s.lQ) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#I);
          }
          isActive() {
            return this.observers.some(
              (e) => !1 !== (0, s.Eh)(e.options.enabled, this)
            );
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === s.hT ||
                  this.state.dataUpdateCount + this.state.errorUpdateCount ===
                    0;
          }
          isStatic() {
            return (
              this.getObserversCount() > 0 &&
              this.observers.some(
                (e) => "static" === (0, s.d2)(e.options.staleTime, this)
              )
            );
          }
          isStale() {
            return this.getObserversCount() > 0
              ? this.observers.some((e) => e.getCurrentResult().isStale)
              : void 0 === this.state.data || this.state.isInvalidated;
          }
          isStaleByTime(e = 0) {
            return (
              void 0 === this.state.data ||
              ("static" !== e &&
                (!!this.state.isInvalidated ||
                  !(0, s.j3)(this.state.dataUpdatedAt, e)))
            );
          }
          onFocus() {
            let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
            e?.refetch({ cancelRefetch: !1 }), this.#C?.continue();
          }
          onOnline() {
            let e = this.observers.find((e) => e.shouldFetchOnReconnect());
            e?.refetch({ cancelRefetch: !1 }), this.#C?.continue();
          }
          addObserver(e) {
            this.observers.includes(e) ||
              (this.observers.push(e),
              this.clearGcTimeout(),
              this.#$.notify({
                type: "observerAdded",
                query: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            this.observers.includes(e) &&
              ((this.observers = this.observers.filter((t) => t !== e)),
              this.observers.length ||
                (this.#C &&
                  (this.#P
                    ? this.#C.cancel({ revert: !0 })
                    : this.#C.cancelRetry()),
                this.scheduleGc()),
              this.#$.notify({
                type: "observerRemoved",
                query: this,
                observer: e,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#M({ type: "invalidate" });
          }
          fetch(e, t) {
            if ("idle" !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && t?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#C) return this.#C.continueRetry(), this.#C.promise;
            }
            if ((e && this.setOptions(e), !this.options.queryFn)) {
              let e = this.observers.find((e) => e.options.queryFn);
              e && this.setOptions(e.options);
            }
            let r = new AbortController(),
              n = (e) => {
                Object.defineProperty(e, "signal", {
                  enumerable: !0,
                  get: () => ((this.#P = !0), r.signal),
                });
              },
              i = () => {
                let e = (0, s.ZM)(this.options, t),
                  r = (() => {
                    let e = {
                      client: this.#e,
                      queryKey: this.queryKey,
                      meta: this.meta,
                    };
                    return n(e), e;
                  })();
                return ((this.#P = !1), this.options.persister)
                  ? this.options.persister(e, r, this)
                  : e(r);
              },
              o = (() => {
                let e = {
                  fetchOptions: t,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: this.#e,
                  state: this.state,
                  fetchFn: i,
                };
                return n(e), e;
              })();
            this.options.behavior?.onFetch(o, this),
              (this.#O = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !== o.fetchOptions?.meta) &&
                this.#M({ type: "fetch", meta: o.fetchOptions?.meta });
            let u = (e) => {
              ((0, a.wm)(e) && e.silent) ||
                this.#M({ type: "error", error: e }),
                (0, a.wm)(e) ||
                  (this.#$.config.onError?.(e, this),
                  this.#$.config.onSettled?.(this.state.data, e, this)),
                this.scheduleGc();
            };
            return (
              (this.#C = (0, a.II)({
                initialPromise: t?.initialPromise,
                fn: o.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: (e) => {
                  if (void 0 === e)
                    return void u(Error(`${this.queryHash} data is undefined`));
                  try {
                    this.setData(e);
                  } catch (e) {
                    u(e);
                    return;
                  }
                  this.#$.config.onSuccess?.(e, this),
                    this.#$.config.onSettled?.(e, this.state.error, this),
                    this.scheduleGc();
                },
                onError: u,
                onFail: (e, t) => {
                  this.#M({ type: "failed", failureCount: e, error: t });
                },
                onPause: () => {
                  this.#M({ type: "pause" });
                },
                onContinue: () => {
                  this.#M({ type: "continue" });
                },
                retry: o.options.retry,
                retryDelay: o.options.retryDelay,
                networkMode: o.options.networkMode,
                canRun: () => !0,
              })),
              this.#C.start()
            );
          }
          #M(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error,
                  };
                case "pause":
                  return { ...t, fetchStatus: "paused" };
                case "continue":
                  return { ...t, fetchStatus: "fetching" };
                case "fetch":
                  return {
                    ...t,
                    ...u(t.data, this.options),
                    fetchMeta: e.meta ?? null,
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    dataUpdateCount: t.dataUpdateCount + 1,
                    dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...(!e.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case "error":
                  let r = e.error;
                  if ((0, a.wm)(r) && r.revert && this.#O)
                    return { ...this.#O, fetchStatus: "idle" };
                  return {
                    ...t,
                    error: r,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    fetchFailureReason: r,
                    fetchStatus: "idle",
                    status: "error",
                  };
                case "invalidate":
                  return { ...t, isInvalidated: !0 };
                case "setState":
                  return { ...t, ...e.state };
              }
            })(this.state)),
              n.jG.batch(() => {
                this.observers.forEach((e) => {
                  e.onQueryUpdate();
                }),
                  this.#$.notify({ query: this, type: "updated", action: e });
              });
          }
        };
      function u(e, t) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, a.v_)(t.networkMode) ? "fetching" : "paused",
          ...(void 0 === e && { error: null, status: "pending" }),
        };
      }
    },
    43484: (e, t, r) => {
      r.d(t, { IT: () => a });
      var s = r(32960),
        n = r(62108);
      function a(e) {
        let t = (0, s.I)({ ...e, queryKeyHashFn: n.Zi });
        return (t.queryKey = e.queryKey), t;
      }
    },
    62108: (e, t, r) => {
      r.d(t, { I_: () => n, Zi: () => a, xO: () => o });
      var s = r(52020);
      function n(e, t) {
        return (0, s.BH)(e, t);
      }
      function a(e) {
        return JSON.stringify(e, (e, t) =>
          !(function (e) {
            if (!i(e)) return !1;
            let t = e.constructor;
            if (void 0 === t) return !0;
            let r = t.prototype;
            return !!i(r) && !!r.hasOwnProperty("isPrototypeOf");
          })(t)
            ? "bigint" == typeof t
              ? t.toString()
              : t
            : Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
        );
      }
      function i(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function o(e) {
        let {
          _defaulted: t,
          behavior: r,
          gcTime: s,
          initialData: n,
          initialDataUpdatedAt: a,
          maxPages: i,
          meta: o,
          networkMode: u,
          queryFn: l,
          queryHash: c,
          queryKey: d,
          queryKeyHashFn: h,
          retry: p,
          retryDelay: f,
          structuralSharing: b,
          getPreviousPageParam: y,
          getNextPageParam: m,
          initialPageParam: v,
          _optimisticResults: g,
          enabled: w,
          notifyOnChangeProps: R,
          placeholderData: x,
          refetchInterval: S,
          refetchIntervalInBackground: I,
          refetchOnMount: O,
          refetchOnReconnect: $,
          refetchOnWindowFocus: C,
          retryOnMount: E,
          select: P,
          staleTime: M,
          suspense: j,
          throwOnError: Q,
          config: A,
          connector: F,
          query: T,
          ...k
        } = e;
        return k;
      }
    },
    62739: (e, t, r) => {
      r.d(t, { Y: () => s });
      function s() {
        let e = () => void 0,
          t = () => void 0;
        return {
          promise: new Promise((r, s) => {
            (e = r), (t = s);
          }),
          resolve: e,
          reject: t,
        };
      }
    },
    68321: (e, t, r) => {
      r.d(t, { C: () => s });
      class s extends Error {
        constructor(e, t = {}) {
          let r =
              t.cause instanceof s
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            n = (t.cause instanceof s && t.cause.docsPath) || t.docsPath;
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(n ? [`Docs: https://abitype.dev${n}`] : []),
              ...(r ? [`Details: ${r}`] : []),
              "Version: abitype@1.0.8",
            ].join("\n")
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
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiTypeError",
            }),
            t.cause && (this.cause = t.cause),
            (this.details = r),
            (this.docsPath = n),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
      }
    },
    69330: (e, t, r) => {
      r.d(t, { e: () => o });
      var s = r(99702),
        n = r(43935),
        a = r(23008);
      let i = "/docs/contract/decodeFunctionResult";
      function o(e) {
        let { abi: t, args: r, functionName: o, data: u } = e,
          l = t[0];
        if (o) {
          let e = (0, a.iY)({ abi: t, args: r, name: o });
          if (!e) throw new s.Iz(o, { docsPath: i });
          l = e;
        }
        if ("function" !== l.type) throw new s.Iz(void 0, { docsPath: i });
        if (!l.outputs) throw new s.MR(l.name, { docsPath: i });
        let c = (0, n.n)(l.outputs, u);
        return c && c.length > 1 ? c : c && 1 === c.length ? c[0] : void 0;
      }
    },
    81946: (e, t, r) => {
      r.d(t, { T: () => O });
      var s = r(17130),
        n = r(38958),
        a = r(27442);
      function i(e) {
        let t = (0, n.e)(e),
          r = [],
          i = e.length;
        for (let n = 0; n < i; n++) {
          let i = e[n];
          (0, s.WL)(i) || r.push((0, a.uT)(i, t));
        }
        return r;
      }
      var o = r(35791),
        u = r(19405),
        l = r(14493),
        c = r(15313),
        d = r(7441),
        h = r(30445),
        p = r(35109),
        f = r(69330),
        b = r(20760),
        y = r(60367),
        m = r(13861),
        v = r(67622),
        g = r(23360),
        w = r(7671),
        R = r(76743),
        x = r(85569),
        S = r(25507),
        I = r(65358);
      async function O(e, t) {
        let {
            account: s = e.account,
            authorizationList: n,
            batch: a = !!e.batch?.multicall,
            blockNumber: l,
            blockTag: f = "latest",
            accessList: y,
            blobs: m,
            blockOverrides: x,
            code: O,
            data: C,
            factory: E,
            factoryData: P,
            gas: M,
            gasPrice: j,
            maxFeePerBlobGas: Q,
            maxFeePerGas: A,
            maxPriorityFeePerGas: F,
            nonce: T,
            to: k,
            value: _,
            stateOverride: z,
            ...U
          } = t,
          D = s ? (0, u.J)(s) : void 0;
        if (O && (E || P))
          throw new d.C(
            "Cannot provide both `code` & `factory`/`factoryData` as parameters."
          );
        if (O && k)
          throw new d.C("Cannot provide both `code` & `to` as parameters.");
        let B = O && C,
          q = E && P && k && C,
          H = B || q,
          N = B
            ? (function (e) {
                let { code: t, data: r } = e;
                return (0, b.m)({
                  abi: i(["constructor(bytes, bytes)"]),
                  bytecode: c.LX,
                  args: [t, r],
                });
              })({ code: O, data: C })
            : q
            ? (function (e) {
                let { data: t, factory: r, factoryData: s, to: n } = e;
                return (0, b.m)({
                  abi: i(["constructor(address, bytes, address, bytes)"]),
                  bytecode: c.WN,
                  args: [n, t, r, s],
                });
              })({ data: C, factory: E, factoryData: P, to: k })
            : C;
        try {
          (0, I.c)(t);
          let r = ("bigint" == typeof l ? (0, v.cK)(l) : void 0) || f,
            s = x ? o.J(x) : void 0,
            i = (0, S.yH)(z),
            u = e.chain?.formatters?.transactionRequest?.format,
            c = (u || R.Bv)({
              ...(0, w.o)(U, { format: u }),
              from: D?.address,
              accessList: y,
              authorizationList: n,
              blobs: m,
              data: N,
              gas: M,
              gasPrice: j,
              maxFeePerBlobGas: Q,
              maxFeePerGas: A,
              maxPriorityFeePerGas: F,
              nonce: T,
              to: H ? void 0 : k,
              value: _,
            });
          if (
            a &&
            (function ({ request: e }) {
              let { data: t, to: r, ...s } = e;
              return (
                !(!t || t.startsWith("0x82ad56cb")) &&
                !!r &&
                !(Object.values(s).filter((e) => void 0 !== e).length > 0)
              );
            })({ request: c }) &&
            !i &&
            !s
          )
            try {
              return await $(e, { ...c, blockNumber: l, blockTag: f });
            } catch (e) {
              if (!(e instanceof h.YE) && !(e instanceof h.rj)) throw e;
            }
          let d = (() => {
              let e = [c, r];
              return i && s
                ? [...e, i, s]
                : i
                ? [...e, i]
                : s
                ? [...e, {}, s]
                : e;
            })(),
            p = await e.request({ method: "eth_call", params: d });
          if ("0x" === p) return { data: void 0 };
          return { data: p };
        } catch (i) {
          let s = (function (e) {
              if (!(e instanceof d.C)) return;
              let t = e.walk();
              return "object" == typeof t?.data ? t.data?.data : t.data;
            })(i),
            { offchainLookup: n, offchainLookupSignature: a } = await r
              .e(1026)
              .then(r.bind(r, 31026));
          if (!1 !== e.ccipRead && s?.slice(0, 10) === a && k)
            return { data: await n(e, { data: s, to: k }) };
          if (H && s?.slice(0, 10) === "0x101bb98d")
            throw new p.Po({ factory: E });
          throw (0, g.d)(i, { ...t, account: D, chain: e.chain });
        }
      }
      async function $(e, t) {
        let { batchSize: r = 1024, wait: s = 0 } =
            "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          {
            blockNumber: n,
            blockTag: a = "latest",
            data: i,
            multicallAddress: o,
            to: u,
          } = t,
          c = o;
        if (!c) {
          if (!e.chain) throw new h.YE();
          c = (0, m.M)({
            blockNumber: n,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let d = ("bigint" == typeof n ? (0, v.cK)(n) : void 0) || a,
          { schedule: b } = (0, x.u)({
            id: `${e.uid}.${d}`,
            wait: s,
            shouldSplitBatch: (e) =>
              e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * r,
            fn: async (t) => {
              let r = t.map((e) => ({
                  allowFailure: !0,
                  callData: e.data,
                  target: e.to,
                })),
                s = (0, y.p)({
                  abi: l.v2,
                  args: [r],
                  functionName: "aggregate3",
                }),
                n = await e.request({
                  method: "eth_call",
                  params: [{ data: s, to: c }, d],
                });
              return (0, f.e)({
                abi: l.v2,
                args: [r],
                functionName: "aggregate3",
                data: n || "0x",
              });
            },
          }),
          [{ returnData: g, success: w }] = await b({ data: i, to: u });
        if (!w) throw new p.$S({ data: g });
        return "0x" === g ? { data: void 0 } : { data: g };
      }
    },
    84701: (e, t, r) => {
      r.d(t, { UG: () => i, xo: () => n, zz: () => a });
      var s = r(68321);
      class n extends s.C {
        constructor({ signature: e }) {
          super("Failed to parse ABI item.", {
            details: `parseAbiItem(${JSON.stringify(e, null, 2)})`,
            docsPath: "/api/human#parseabiitem-1",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiItemError",
            });
        }
      }
      class a extends s.C {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [
              `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownTypeError",
            });
        }
      }
      class i extends s.C {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [`Type "${e}" is not a valid ABI type.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSolidityTypeError",
            });
        }
      }
    },
    85569: (e, t, r) => {
      r.d(t, { u: () => a });
      var s = r(62739);
      let n = new Map();
      function a({ fn: e, id: t, shouldSplitBatch: r, wait: a = 0, sort: i }) {
        let o = async () => {
            let t = c();
            u();
            let r = t.map(({ args: e }) => e);
            0 !== r.length &&
              e(r)
                .then((e) => {
                  i && Array.isArray(e) && e.sort(i);
                  for (let r = 0; r < t.length; r++) {
                    let { resolve: s } = t[r];
                    s?.([e[r], e]);
                  }
                })
                .catch((e) => {
                  for (let r = 0; r < t.length; r++) {
                    let { reject: s } = t[r];
                    s?.(e);
                  }
                });
          },
          u = () => n.delete(t),
          l = () => c().map(({ args: e }) => e),
          c = () => n.get(t) || [],
          d = (e) => n.set(t, [...c(), e]);
        return {
          flush: u,
          async schedule(e) {
            let { promise: t, resolve: n, reject: i } = (0, s.Y)();
            return (
              (r?.([...l(), e]) && o(), c().length > 0)
                ? d({ args: e, resolve: n, reject: i })
                : (d({ args: e, resolve: n, reject: i }), setTimeout(o, a)),
              t
            );
          },
        };
      }
    },
    86205: (e, t, r) => {
      r.d(t, {
        Ej: () => y,
        Fl: () => S,
        Ho: () => p,
        M7: () => f,
        Ty: () => v,
        di: () => b,
        ii: () => x,
        oB: () => d,
        sH: () => h,
        tf: () => m,
        u: () => R,
        uK: () => c,
        xW: () => u,
        xb: () => l,
      });
      var s = r(28452),
        n = r(97486),
        a = r(93587);
      let i = new TextEncoder(),
        o = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function u(...e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      function l(e, t = {}) {
        let r = `0x${Number(e)}`;
        return "number" == typeof t.size ? (a.Sl(r, t.size), p(r, t.size)) : r;
      }
      function c(e, t = {}) {
        let r = "";
        for (let t = 0; t < e.length; t++) r += o[e[t]];
        let s = `0x${r}`;
        return "number" == typeof t.size ? (a.Sl(s, t.size), f(s, t.size)) : s;
      }
      function d(e, t = {}) {
        let r,
          { signed: s, size: n } = t,
          a = BigInt(e);
        n
          ? (r = s
              ? (1n << (8n * BigInt(n) - 1n)) - 1n
              : 2n ** (8n * BigInt(n)) - 1n)
          : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let i = "bigint" == typeof r && s ? -r - 1n : 0;
        if ((r && a > r) || a < i) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new v({
            max: r ? `${r}${t}` : void 0,
            min: `${i}${t}`,
            signed: s,
            size: n,
            value: `${e}${t}`,
          });
        }
        let o = (s && a < 0 ? (1n << BigInt(8 * n)) + BigInt(a) : a).toString(
            16
          ),
          u = `0x${o}`;
        return n ? p(u, n) : u;
      }
      function h(e, t = {}) {
        return c(i.encode(e), t);
      }
      function p(e, t) {
        return a.eV(e, { dir: "left", size: t });
      }
      function f(e, t) {
        return a.eV(e, { dir: "right", size: t });
      }
      function b(e, t, r, s = {}) {
        let { strict: n } = s;
        a.kK(e, t);
        let i = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
        return n && a.X(i, t, r), i;
      }
      function y(e) {
        return Math.ceil((e.length - 2) / 2);
      }
      function m(e, t = {}) {
        let { strict: r = !1 } = t;
        try {
          return (
            !(function (e, t = {}) {
              let { strict: r = !1 } = t;
              if (!e || "string" != typeof e) throw new g(e);
              if ((r && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith("0x"))
                throw new w(e);
            })(e, { strict: r }),
            !0
          );
        } catch {
          return !1;
        }
      }
      class v extends s.C {
        constructor({ max: e, min: t, signed: r, size: s, value: n }) {
          super(
            `Number \`${n}\` is not in safe${s ? ` ${8 * s}-bit` : ""}${
              r ? " signed" : " unsigned"
            } integer range ${
              e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`
            }`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.IntegerOutOfRangeError",
            });
        }
      }
      s.C;
      class g extends s.C {
        constructor(e) {
          super(
            `Value \`${
              "object" == typeof e ? n.A(e) : e
            }\` of type \`${typeof e}\` is an invalid hex type.`,
            {
              metaMessages: [
                'Hex types must be represented as `"0x${string}"`.',
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexTypeError",
            });
        }
      }
      class w extends s.C {
        constructor(e) {
          super(`Value \`${e}\` is an invalid hex value.`, {
            metaMessages: [
              'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexValueError",
            });
        }
      }
      s.C;
      class R extends s.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeOverflowError",
            });
        }
      }
      class x extends s.C {
        constructor({ offset: e, position: t, size: r }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset \`${e}\` is out-of-bounds (size: \`${r}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SliceOffsetOutOfBoundsError",
            });
        }
      }
      class S extends s.C {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeExceedsPaddingSizeError",
            });
        }
      }
    },
    93587: (e, t, r) => {
      r.d(t, { Sl: () => n, X: () => i, eV: () => o, kK: () => a });
      var s = r(86205);
      function n(e, t) {
        if (s.Ej(e) > t) throw new s.u({ givenSize: s.Ej(e), maxSize: t });
      }
      function a(e, t) {
        if ("number" == typeof t && t > 0 && t > s.Ej(e) - 1)
          throw new s.ii({ offset: t, position: "start", size: s.Ej(e) });
      }
      function i(e, t, r) {
        if ("number" == typeof t && "number" == typeof r && s.Ej(e) !== r - t)
          throw new s.ii({ offset: r, position: "end", size: s.Ej(e) });
      }
      function o(e, t = {}) {
        let { dir: r, size: n = 32 } = t;
        if (0 === n) return e;
        let a = e.replace("0x", "");
        if (a.length > 2 * n)
          throw new s.Fl({
            size: Math.ceil(a.length / 2),
            targetSize: n,
            type: "Hex",
          });
        return `0x${a["right" === r ? "padEnd" : "padStart"](2 * n, "0")}`;
      }
    },
    97486: (e, t, r) => {
      r.d(t, { A: () => s });
      function s(e, t, r) {
        return JSON.stringify(
          e,
          (e, r) =>
            "function" == typeof t
              ? t(e, r)
              : "bigint" == typeof r
              ? r.toString() + "#__bigint"
              : r,
          r
        );
      }
    },
    99901: (e, t, r) => {
      r.d(t, {
        NO: () => i,
        Pj: () => o,
        dV: () => n,
        nx: () => u,
        zd: () => a,
      });
      var s = r(68321);
      s.C, s.C;
      class n extends s.C {
        constructor({ param: e }) {
          super("Invalid ABI parameter.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParameterError",
            });
        }
      }
      class a extends s.C {
        constructor({ param: e, name: t }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SolidityProtectedKeywordError",
            });
        }
      }
      class i extends s.C {
        constructor({ param: e, type: t, modifier: r }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${r}" not allowed${t ? ` in "${t}" type` : ""}.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidModifierError",
            });
        }
      }
      class o extends s.C {
        constructor({ param: e, type: t, modifier: r }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${r}" not allowed${t ? ` in "${t}" type` : ""}.`,
              `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidFunctionModifierError",
            });
        }
      }
      class u extends s.C {
        constructor({ abiParameter: e }) {
          super("Invalid ABI parameter.", {
            details: JSON.stringify(e, null, 2),
            metaMessages: ["ABI parameter type is invalid."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiTypeParameterError",
            });
        }
      }
    },
  },
]);
