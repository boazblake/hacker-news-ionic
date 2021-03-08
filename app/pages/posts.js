import Post from "./../components/post.js"

const Posts = () => {
  return {
    oninit: ({ attrs: { mdl } }) => {
      mdl.state.id(null)
      mdl.state.title(null)
      mdl.data.item = null
      if (!mdl.data[mdl.state.route]) {
        mdl.data[mdl.state.route] = { data: [], page: 1 }
        const onSuccess = (mdl) => (data) =>
          (mdl.data[mdl.state.route].data = data)
        const onError = (mdl) => (e) => console.log("error", mdl, e)
        mdl.getPosts(mdl, mdl.state.route).then(onSuccess(mdl), onError(mdl))
      }
    },
    view: ({ attrs: { mdl } }) => {
      let route = mdl.state.route
      let data = mdl.data[route].data
      return [
        !data
          ? m("ion-progress-bar[type='indeterminate']")
          : m(
              "ion-list",
              {
                route,
              },

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
              data.map((_post, idx) =>
                m(Post, {
                  key: idx,
                  post: _post,
                  mdl,
                })
              ),
              m(
                "ion-infinite-scroll",
                {
                  onionInfinite: (e) => {
                    mdl.data[mdl.state.route].page++
                    const onSuccess = (mdl) => (data) => {
                      data.length == 0
                        ? mdl.data[mdl.state.route].page--
                        : (mdl.data[mdl.state.route].data = mdl.data[
                            mdl.state.route
                          ].data.concat(data))
                      e.target.complete()
                    }
                    const onError = (mdl) => (e) => {
                      console.log("error", mdl, e)
                      e.target.complete()
                    }

                    mdl
                      .getPosts(mdl, mdl.state.route)
                      .then(onSuccess(mdl), onError(mdl))
                  },
                  threshold: "100px",
                  id: "infinite-scroll",
                },
                m("ion-infinite-scroll-content", {
                  loadingSpinner: "bubbles",
                  loadingText: "fetching more data",
                })
              )
            ),
      ]
    },
  }
}

export default Posts
