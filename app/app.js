import { prop, propEq } from "ramda"
import Layout from "./components/layout.js"

const match = (mdl) => ({ title, key }, path) => {
  let [_, route] = path.split("/")
  mdl.state.route = route
  mdl.state.path = path
  if (key) {
    mdl.state.title(title)
    mdl.state.id(key)
  } else {
    mdl.state.title(prop("title", mdl.routes.find(propEq("name", route))))
    mdl.state.id(null)
  }
}

const makeRoutes = (mdl) => (routes, { component, name }) => {
  routes[`/${name}`] = {
    onmatch: (params, path) => match(mdl)(params, path),
    render: () => m(Layout, { mdl }, m(component, { key: name, mdl })),
  }
  return routes
}

export const App = (mdl) => mdl.routes.reduce(makeRoutes(mdl), {})
