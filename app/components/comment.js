const showComments = (mdl, key, level) =>
  mdl.state.comment[`${key}-${level}`] || false

const Comment = {
  onremove: ({ attrs: { mdl } }) => {
    console.log("mdl.state", mdl.state)
    mdl.state.comment = {}
  },
  view: ({
    attrs: {
      key,
      mdl,
      comment: { comments, comments_count, time_ago, content, level, user },
    },
  }) => {
    return m(
      "ion-card",
      {
        style: { minWidth: "60vw" },
      },
      m(
        "ion-card-header",
        m(
          "ion-grid",
          m(
            "ion-row.ion-justify-content-center.ion-align-items-center",
            m(
              "ion-col.",
              m(
                "ion-chip",
                {
                  onclick: (e) => mdl.toggleUser(mdl)(user, e),
                  color: "primary",
                },
                user
              )
            ),
            m("ion-col.", m("ion-note", time_ago))
          )
        )
      ),
      m(
        "ion-card-content",
        m.trust(mdl.markup.render(content)),
        comments_count
          ? m(
              "ion-button",
              {
                expand: "full",
                onclick: () => mdl.toggleComments({ mdl, key, level }),
              },
              [
                `${comments_count} comments`,
                showComments(mdl, key, level)
                  ? m("ion-icon", { slot: "end", name: "chevron-up-outline" })
                  : m("ion-icon", {
                      slot: "end",
                      name: "chevron-down-outline",
                    }),
              ]
            )
          : null,
        showComments(mdl, key, level) &&
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
