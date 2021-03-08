const UserModel = {
  init: (mdl) =>
    mdl
      .getUser(mdl, "user", mdl.state.user.id)
      .then((data) => (mdl.data.user = data)),
  contents: (mdl) =>
    mdl.data.user && [
      m("code.row", m(".bold", "id: "), mdl.data.user.id),
      m("code.row", m(".bold", "created: "), mdl.data.user.created),
      m("code.row", m(".bold", "about: "), mdl.data.user.about),
      m("code.row", m(".bold", "karma: "), mdl.data.user.karma),
    ],
}

export default UserModel
