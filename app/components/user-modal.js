const userModalInfo = (mdl) => ({
  init: (mdl) => mdl.getDataById(mdl)("user")(mdl.state.user.id),
  close: (mdl) => mdl.toggleUser(mdl)(""),
  title: "User",
  contents:
    mdl.data.user && mdl.data.user.data
      ? [
          m("code.row", [m(".bold", "id: "), mdl.data.user.data.id]),
          m("code.row", [m(".bold", "created: "), mdl.data.user.data.created]),
          m("code.row", [m(".bold", "about: "), mdl.data.user.data.about]),
          m("code.row", [m(".bold", "karma: "), mdl.data.user.data.karma]),
        ]
      : [],
  footer: [],
})
