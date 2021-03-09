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
            if (comments_count) {
              mdl.state.prev = mdl.state.path
              m.route.set("/item/:key", { key: id, title })
            }
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
              user &&
                m(
                  "ion-label",
                  `${time_ago} by `,
                  m(
                    "ion-chip",
                    {
                      slot: "start",
                      color: "primary",
                    },
                    user
                  )
                )
            )
          ),
          m(
            "ion-item",
            { lines: "none" },
            points && m("ion-badge", { slot: "end" }, `${points} pts`),
            comments_count > 1 &&
              m("ion-badge", { slot: "start" }, `${comments_count} comments`)
          )
        )
      )
    )
  },
}

export default Post
