const Comment = {
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
      m("ion-card-header", m("ion-note", `${time_ago} ${user} commented:`)),
      m(
        "ion-card-content",
        m.trust(content),
        comments_count
          ? m(
              "ion-button",
              { onclick: () => mdl.toggleComments({ mdl, key, level }) },
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
