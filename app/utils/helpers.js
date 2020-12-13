export const isEmpty = (data) => data.length == 0

export const infiniteScroll = (mdl) => (e) => {
  let route = mdl.state.route
  let length = mdl.data[route].data.length
  let setpoint = 10 * length * mdl.state.scrollPos
  if (e.target.scrollTop - mdl.state.scrollPos >= setpoint) {
    mdl.state.scrollPos++ + e.target.scrollTop
    if (length < mdl.data[route].limit) {
      mdl.getData(mdl)(route)
    }
  }
}

export const init = (mdl) => (path) => {
  // window.scrollToTop()
  mdl.state.page = 1
  let [_, route, id] = path.split("/")
  if (id) {
    console.log("id", id)
    mdl.getDataById(mdl)(route)(id)
  } else {
    mdl.getData(mdl)(path)
  }
}
