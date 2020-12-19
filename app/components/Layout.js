import { showSettings } from "./action-sheet"

const Toolbar = () => {
  return {
    view: ({ attrs: { mdl } }) =>
      m(
        "ion-header",
        m(
          "ion-toolbar",
          mdl.state.id
            ? m(
                "ion-buttons",
                { slot: "start" },
                m(
                  "ion-back-button",
                  {
                    oncreate: ({ dom }) => {}, //console.log("dom", dom),
                    defaultHref: "/news",
                    onclick: (e) => {
                      m.route.set(mdl.state.prev || "/news")
                    },
                  },
                  mdl.getPath(mdl.state.prev || "/news")
                )
              )
            : m(
                "ion-title",
                { size: "large" },
                m("h1", mdl.getPath(mdl.state.route))
              )
        )
      ),
  }
}

const Footer = ({ attrs: { mdl } }) => {
  const Routes = mdl.routes.filter((r) => r.name.split("/").length == 1)
  return {
    view: ({ attrs: { mdl } }) => {
      return m(
        "ion-footer",
        m(
          "ion-toolbar",
          m(
            "ion-tab-bar",
            m("ion-tabs", [
              // m(
              //   "ion-router",
              //   // m("ion-route-redirect", { from: "!", to: "#!" }),
              //   mdl.routes.map((r) => {
              //     console.log("r", `${r.name}`),
              //       [
              //         // m("ion-route-redirect", {
              //         //   from: `!/${r.name}`,
              //         //   to: `#!/${r.name}`,
              //         // }),
              //         m("ion-route", {
              //           push: (p) => console.log("push", p),
              //           // root: "#/!",
              //           // url: `#!/${r.name}`,
              //           // component:
              //         }),
              //       ]
              //   })
              // ),
              Routes.map((r) => m("ion-tab", { tab: `${r.name}` })),
              m("ion-tab-bar", { slot: "bottom" }, [
                Routes.map((r) =>
                  m(
                    "ion-tab-button",
                    {
                      onclick: () => {
                        console.log("r.name", r.name)
                        m.route.set(`/${r.name}`)
                      },
                      tab: `${r.name}`,
                    },
                    [m("ion-label", r.name), m("ion-icon", { name: r.icon })]
                  )
                ),
                m(
                  "ion-tab-button",
                  {
                    onclick: () => showSettings(mdl),
                  },
                  [
                    m("ion-label", "settings"),
                    m("ion-icon", { name: "ellipsis-vertical-outline" }),
                  ]
                ),
              ]),
            ])
          )
        )
      )
    },
  }
}

const Layout = ({ attrs: { mdl } }) => {
  return {
    view: ({ children }) =>
      m(
        "ion-app",
        children && [
          m(Toolbar, { mdl }),
          m("ion-content", children),
          m(Footer, { mdl }),
        ]
      ),
  }
}

export default Layout
