const commentIdFromRoute = (route) => route.split("/")[2]

const Comment = {
  oncreate: ({ attrs: { mdl } }) =>
    (mdl.state.id = commentIdFromRoute(m.route.get())),
  onremove: ({ attrs: { mdl } }) => {
    mdl.state.id = null
    mdl.state.title = null
  },
  view: ({
    attrs: {
      key,
      mdl,
      comment: { comments, comments_count, id, time_ago, content, level, user },
    },
  }) => {
    let state = {
      showComments: mdl.state.comment[`${key}-${level}`] || false,
    }

    return m(
      "ion-card",
      {
        style: { minWidth: "60vw" },
      },
      m(
        "ion-card-header",
        m(
          "ion-toolbar",
          m("ion-chip", { slot: "start", color: "primary" }, user),
          m("ion-note", { slot: "end" }, time_ago)
        )
      ),
      m(
        "ion-card-content",
        m.trust(content),
        comments_count
          ? m(
              "ion-button",
              {
                expand: "full",
                onclick: () => mdl.toggleComments({ mdl, key, level }),
              },
              `${comments_count} comments`
            )
          : null,
        state.showComments
          ? comments.map((c, idx) =>
              m(Comment, {
                key: idx,
                comment: c,
                mdl,
              })
            )
          : null
      )
    )
  },
}

export default Comment
