import Post from "./pages/posts"
import Comment from "./pages/comments"
import UserModel from "./components/user-modal"
import MarkdownIt from "markdown-it"

const routes = [
  { title: "news", name: "news", icon: "newspaper-outline", component: Post },
  { title: "top", name: "newest", icon: "pulse-outline", component: Post },
  {
    title: "ask",
    name: "ask",
    icon: "chatbox-ellipses-outline",
    component: Post,
  },
  { title: "show", name: "show", icon: "eye-outline", component: Post },
  { title: "jobs", name: "jobs", icon: "body-outline", component: Post },
  { title: "", name: "item/:key", icon: null, component: Comment },
  { title: "", name: "user/:key", icon: null, component: Comment },
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

const getDataById = (mdl, route, id) => http(mdl.reqs.urls[`${route}/:key`](id))

const getPath = (route) => route.split("/")[1]

const state = {
  id: Stream(null),
  title: Stream(null),
  key: "",
  url: "",
  route: "",
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
  // mdl.state.showUser = !mdl.state.showUser
  mdl.modal.title(`User: ${id}`)
  mdl.modal.contents(UserModel.contents(mdl))
  mdl.modal.init = (mdl) => UserModel.init(mdl)
  mdl.toggleModal(mdl)
}

const modal = {
  title: Stream(null),
  contents: Stream(),
  init: (mdl) => {},
  close: () => {},
}

const markup = new MarkdownIt({
  html: true,
  xhtmlOut: true,
  breaks: true,
  langPrefix: "",
  linkify: true,
  typographer: true,
  quotes: "“”‘’",
})

export const model = {
  markup,
  modal,
  getPosts,
  getComments: getDataById,
  getUser: getDataById,
  routes,
  getPath,
  reqs,
  data: {},
  state,
  toggleComments,
  toggleModal,
  toggleUser,
}
