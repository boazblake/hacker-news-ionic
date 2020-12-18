const Post = {
  view: ({
    attrs: {
      mdl,
      post: { comments_count, domain, id, points, time_ago, title, url, user },
    },
  }) => {
    return m(
      "ion-item",
      {
        detail: comments_count,
        lines: "none",
      },
      m(
        "ion-card",
        {
          id: "post-list-card",
          onclick: () => {
            console.log(id, title)
            mdl.state.title = title
            mdl.state.id = id
            mdl.state.showComment = !mdl.state.showComment
            comments_count && m.route.set("/item/:key", { key: id })
          },
        },
        m("ion-card-header", m("h1", title)),
        m(
          "ion-card-content",
          m(
            "ion-grid",
            m(
              "ion-row",
              m(
                "ion-link",
                "from ",
                m(
                  "a.",
                  { target: "_blank", href: url, rel: "noopener" },
                  `${domain}`
                )
              )
            ),
            m(
              "ion-row",
              m(
                "ion-label",
                `${time_ago} by `,
                m(
                  "ion-chip",
                  {
                    slot: "start",
                    color: "primary",
                    // onclick: () => mdl.toggleUser(mdl)(user),
                  },
                  user
                )
              )
            )
          ),
          m(
            "ion-item",
            { lines: "none" },
            m("ion-badge", { slot: "end" }, `${points} pts`),
            comments_count
              ? m("ion-badge", { slot: "start" }, `${comments_count} comments`)
              : null
          )
        )
      )
    )
  },
}

export default Post
