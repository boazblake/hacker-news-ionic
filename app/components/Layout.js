import { showSettings } from "./action-sheet"
import Modal from "./modal.js"

const Header = {
  view: ({ attrs: { mdl } }) => {
    return m(
      "ion-header",
      m(
        "ion-toolbar.ion-justify-content-center.ion-align-items-center",
        mdl.state.id()
          ? [
              m(
                "ion-back-button",
                {
                  text: "",
                  slot: "start",
                  defaultHref: "/news",
                  onclick: (e) => {
                    m.route.set(mdl.state.prev)
                  },
                },
                mdl.state.route
              ),
              m(
                "ion-sub-title.ion-text-center.ion-text-wrap",
                m(
                  "ion-label",
                  m("ion-text", m("p", mdl.state.title().toUpperCase()))
                )
              ),
            ]
          : m(
              "ion-title.ion-text-center.ion-text-wrap",
              { size: "large" },
              m("ion-text", m("h1", mdl.state.title().toUpperCase()))
            )
      )
    )
  },
}

const Footer = ({ attrs: { mdl } }) => {
  const Routes = mdl.routes.filter((r) => r.name.split("/").length == 1)
  return {
    view: ({ attrs: { mdl } }) => {
      return m(
        "ion-footer.ion-no-border",
        { slot: "bottom" },
        m(
          "ion-toolbar",
          m(
            "ion-tabs",
            ...Routes.map(({ name }) => m("ion-tab", { tab: `${name}` })),
            m("ion-tab-bar", { slot: "bottom" }, [
              ...Routes.map(({ title, name, icon }) =>
                m(
                  "ion-tab-button",
                  {
                    onclick: () => {
                      mdl.state.id(null)
                      m.route.set(`/${name}`)
                    },
                    tab: `${name}`,
                  },
                  [
                    m("ion-label", title.toUpperCase()),
                    m("ion-icon", { name: icon }),
                  ]
                )
              ),
              m(
                "ion-tab-button",
                {
                  onclick: () => showSettings(mdl),
                },
                [m("ion-icon", { name: "ellipsis-vertical-outline" })]
              ),
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
          m(Header, { mdl }),
          m("ion-content", { fullscreen: true }, children),
          m(Footer, { mdl }),
        ]
      ),
  }
}

export default Layout
