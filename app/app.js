import Layout from "./components/layout.js"

const match = (mdl) => ({ title, key }, path) => {
  let [_, route] = path.split("/")
  mdl.state.route = route
  mdl.state.path = path
  if (key) {
    mdl.state.title(title)
    mdl.state.id(key)
    // mdl.getDataById(mdl)(route)(key)
  } else {
    mdl.state.title(null)
    mdl.state.id(null)
    // mdl.getData(mdl)(path, false)
  }
}

const makeRoutes = (mdl) => (routes, route) => {
  routes[`/${route.name}`] = {
    onmatch: (params, path) => match(mdl)(params, path),
    render: () =>
      m(
        Layout,
        {
          mdl,
        },
        m(route.component, {
          key: route.name,
          mdl,
        })
      ),
  }
  return routes
}

export const App = (mdl) => mdl.routes.reduce(makeRoutes(mdl), {})
