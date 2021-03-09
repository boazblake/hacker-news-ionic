import Comment from "./../components/comment.js"

const Comments = () => {
  return {
    oninit: ({ attrs: { mdl } }) => {
      mdl.data[mdl.state.route] = {}
      const onSuccess = (mdl) => (data) => (mdl.data[mdl.state.route] = data)
      const onError = (mdl) => (e) => console.log("error", mdl, e)
      mdl
        .getComments(mdl, mdl.state.route, mdl.state.id())
        .then(onSuccess(mdl), onError(mdl))
    },
    view: ({ attrs: { mdl } }) => {
      let route = mdl.state.route
      let data = mdl.data[route]
      return [
        !data.comments
          ? m("ion-progress-bar[type='indeterminate']")
          : m(
              "ion-list",
              {
                route,
              },
              data.length == 0 && m("ion-progress-bar[type='indeterminate']"),
              m(
                "ion-refresher",
                {
                  onionRefresh: (e) => {
                    setTimeout(() => {
                      console.log("Async operation has ended")
                      e.target.complete()
                    }, 2000)
                  },
                  slot: "fixed",
                },
                m("ion-refresher-content", {
                  pullingIcon: "chevron-down-circle-outline",
                  loadingSpinner: "bubbles",
                  pullingText: "Pull to refresh",
                  closeDuration: "280ms",
                })
              ),

              data.comments.map((c, idx) =>
                m(Comment, {
                  key: idx,
                  comment: c,
                  mdl,
                })
              )
            ),
      ]
    },
  }
}

export default Comments
