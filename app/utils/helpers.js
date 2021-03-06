export const isEmpty = (data) => data.length == 0

export const infiniteScroll = (mdl) => (e) => {
  console.log("infscroll")
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

export const init = (mdl) => ({ title, key }, path) => {
  mdl.state.page = 1
  let [_, route, id] = path.split("/")
  if (key) {
    mdl.state.title(title)
    mdl.state.id(key)
    mdl.getDataById(mdl)(route)(key)
  } else {
    mdl.getData(mdl)(path)
  }
}
