const Comment = {
  view: ({
    attrs: {
      key,
      mdl,
      comment: { comments, comments_count, time_ago, content, level, user },
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
              [
                `${comments_count} comments`,
                state.showComments
                  ? m("ion-icon", { slot: "end", name: "chevron-up-outline" })
                  : m("ion-icon", {
                      slot: "end",
                      name: "chevron-down-outline",
                    }),
              ]
            )
          : null,
        state.showComments &&
          comments.map((c, idx) =>
            m(Comment, {
              key: idx,
              comment: c,
              mdl,
            })
          )
      )
    )
  },
}

export default Comment
