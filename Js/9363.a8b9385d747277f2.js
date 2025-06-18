(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9363],
  {
    34466: (r, o, e) => {
      "use strict";
      e.r(o), e.d(o, { default: () => p });
      var a = e(95155);
      e(12115);
      var n = e(36241),
        t = e(83415),
        c = e(63439),
        d = e(2558),
        l = "#1A1B1F",
        g = {
          blue: { accentColor: "#3898FF", accentColorForeground: "#FFF" },
          green: { accentColor: "#4BD166", accentColorForeground: l },
          orange: { accentColor: "#FF983D", accentColorForeground: l },
          pink: { accentColor: "#FF7AB8", accentColorForeground: l },
          purple: { accentColor: "#7A70FF", accentColorForeground: "#FFF" },
          red: { accentColor: "#FF6257", accentColorForeground: "#FFF" },
        },
        i = g.blue,
        s = function () {
          let {
            accentColor: r = i.accentColor,
            accentColorForeground: o = i.accentColorForeground,
            ...e
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return {
            ...(0, d.$)(e),
            colors: {
              accentColor: r,
              accentColorForeground: o,
              actionButtonBorder: "rgba(255, 255, 255, 0.04)",
              actionButtonBorderMobile: "rgba(255, 255, 255, 0.08)",
              actionButtonSecondaryBackground: "rgba(255, 255, 255, 0.08)",
              closeButton: "rgba(224, 232, 255, 0.6)",
              closeButtonBackground: "rgba(255, 255, 255, 0.08)",
              connectButtonBackground: l,
              connectButtonBackgroundError: "#FF494A",
              connectButtonInnerBackground:
                "linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))",
              connectButtonText: "#FFF",
              connectButtonTextError: "#FFF",
              connectionIndicator: "#30E000",
              downloadBottomCardBackground:
                "linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.2) 71.04%), #1A1B1F",
              downloadTopCardBackground:
                "linear-gradient(126deg, rgba(120, 120, 120, 0.2) 9.49%, rgba(0, 0, 0, 0) 71.04%), #1A1B1F",
              error: "#FF494A",
              generalBorder: "rgba(255, 255, 255, 0.08)",
              generalBorderDim: "rgba(255, 255, 255, 0.04)",
              menuItemBackground: "rgba(224, 232, 255, 0.1)",
              modalBackdrop: "rgba(0, 0, 0, 0.5)",
              modalBackground: "#1A1B1F",
              modalBorder: "rgba(255, 255, 255, 0.08)",
              modalText: "#FFF",
              modalTextDim: "rgba(224, 232, 255, 0.3)",
              modalTextSecondary: "rgba(255, 255, 255, 0.6)",
              profileAction: "rgba(224, 232, 255, 0.1)",
              profileActionHover: "rgba(224, 232, 255, 0.2)",
              profileForeground: "rgba(224, 232, 255, 0.05)",
              selectedOptionBorder: "rgba(224, 232, 255, 0.1)",
              standby: "#FFD641",
            },
            shadows: {
              connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
              profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
              selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)",
            },
          };
        };
      s.accentColors = g;
      var b = e(48715);
      b.E0;
      let u = {
        id: Number("8453"),
        name: "Base Mainnet",
        iconUrl: "/base-logo-in-blue.svg",
        iconBackground: "#fff",
        nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: [b.E0] } },
        blockExplorers: {
          default: {
            name: "Base Explorer",
            url: "https://basescan.org/",
            apiUrl: "https://api.basescan.org/api",
          },
        },
      };
      b.E0;
      let F = (0, c.Y8)({
          appName: "Vader Token Launchpad",
          projectId: "25b13b447fae3f9ebc44a23731bf9842",
          chains: [u],
          transports: { [u.id]: (0, n.L)() },
          ssr: !1,
        }),
        p = (r) => {
          let { children: o } = r;
          return (0, a.jsx)(t.x, {
            config: F,
            children: (0, a.jsx)(c.qL, {
              locale: "en-US",
              theme: s({
                accentColor: "#8B5CF6",
                accentColorForeground: "white",
                borderRadius: "large",
                fontStack: "system",
                overlayBlur: "small",
              }),
              children: o,
            }),
          });
        };
    },
    47790: () => {},
    48715: (r, o, e) => {
      "use strict";
      e.d(o, {
        AC: () => t,
        E0: () => n,
        TZ: () => d,
        a0: () => c,
        dT: () => l,
      });
      var a = e(68652);
      let n = "https://base.llamarpc.com",
        t = "8453",
        c = "0x0F968AdC13D957db830Ee3FF0683c442F29326Fb",
        d = "0x731814e491571a2e9ee3c5b1f7f3b962ee8f4870",
        l = "0x0b3e328455c4059eeb9e3f84b5543f74e24e7e1b";
      if (!c)
        throw Error(
          "Diamond contract address not found in environment variables"
        );
      if (!d)
        throw Error("VDR contract address not found in environment variables");
      let g = (r, o) => {
        if (!o || "0x0000000000000000000000000000000000000000" === o)
          throw Error("Invalid ".concat(r, " address: ").concat(o));
        if (!a.isAddress(o))
          throw Error("Invalid ".concat(r, " address format: ").concat(o));
      };
      g("Diamond", c), g("VDR", d);
    },
  },
]);
