import Post from "./pages/posts"
import Comment from "./pages/comments"

const routes = [
  { name: "news", icon: "newspaper-outline", component: Post },
  { name: "newest", icon: "pulse-outline", component: Post },
  { name: "ask", icon: "chatbox-ellipses-outline", component: Post },
  { name: "show", icon: "eye-outline", component: Post },
  { name: "jobs", icon: "body-outline", component: Post },
  { name: "item/:key", icon: null, component: Comment },
  { name: "user/:key", icon: null, component: Comment },
]

const url = (route) => (page) => {
  let path = route.split("/")[0]
  return `https://api.hnpwa.com/v0/${path}/${page}.json`
}

const urls = routes.reduce((req, route) => {
  req[route.name] = url(route.name)
  return req
}, {})

const http = (url) =>
  m.request({
    url,
    method: "GET",
  })

const reqs = {
  urls,
  http,
}

const getPosts = (mdl, route) =>
  http(mdl.reqs.urls[route](mdl.data[mdl.state.route].page))

const getComments = (mdl, route, id) => {
  console.log(mdl.state.route, route, id)

  return http(mdl.reqs.urls[`${route}/:key`](id))
}

const getPath = (route) => route.split("/")[1]

const state = {
  id: Stream(null),
  title: Stream(null),
  key: "",
  url: "",
  route: "",
  page: 1,
  profile: "",
  tabsShowing: false,
  comment: {},
  showModal: false,
  showUser: false,
  user: { id: "" },
  mode: "light",
}

const toggleComments = ({ mdl, key, level }) =>
  mdl.state.comment[`${key}-${level}`]
    ? (mdl.state.comment[`${key}-${level}`] = !mdl.state.comment[
        `${key}-${level}`
      ])
    : (mdl.state.comment[`${key}-${level}`] = true)

const toggleModal = (mdl) => (mdl.state.showModal = !mdl.state.showModal)

const toggleUser = (mdl) => (id) => {
  mdl.state.user.id = id
  mdl.state.showUser = !mdl.state.showUser
}

export const model = {
  getPosts,
  getComments,
  routes,
  getPath,
  reqs,
  data: {},
  state,
  toggleComments,
  toggleModal,
  toggleUser,
}
