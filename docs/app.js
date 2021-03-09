(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    var val = aliases[name];
    return (val && name !== val) ? expandAlias(val) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("app.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _layout = _interopRequireDefault(require("./components/layout.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var match = function match(mdl) {
  return function (_ref, path) {
    var title = _ref.title,
        key = _ref.key;

    var _path$split = path.split("/"),
        _path$split2 = _slicedToArray(_path$split, 2),
        _ = _path$split2[0],
        route = _path$split2[1];

    mdl.state.route = route;
    mdl.state.path = path;

    if (key) {
      mdl.state.title(title);
      mdl.state.id(key);
    } else {
      mdl.state.title(null);
      mdl.state.id(null);
    }
  };
};

var makeRoutes = function makeRoutes(mdl) {
  return function (routes, _ref2) {
    var component = _ref2.component,
        name = _ref2.name;
    routes["/".concat(name)] = {
      onmatch: function onmatch(params, path) {
        return match(mdl)(params, path);
      },
      render: function render() {
        return m(_layout["default"], {
          mdl: mdl
        }, m(component, {
          key: name,
          mdl: mdl
        }));
      }
    };
    return routes;
  };
};

var App = function App(mdl) {
  return mdl.routes.reduce(makeRoutes(mdl), {});
};

exports.App = App;
});

;require.register("components/action-sheet.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showSettings = void 0;

var _core = require("@ionic/core");

var showSettings = function showSettings(mdl) {
  var showAction = function showAction() {
    _core.actionSheetController.create({
      header: "Settings",
      buttons: [{
        handler: function handler() {
          mdl.state.mode = mdl.state.mode == "light" ? "dark" : "light";
          document.body.classList.toggle("dark");
          window.matchMedia("(prefers-color-scheme: dark)");
        },
        text: mdl.state.mode == "light" ? "Enter Dark Mode" : "Enter Light Mode"
      }]
    }).then(function (x) {
      return x.present();
    });
  };

  showAction();
};

exports.showSettings = showSettings;
});

;require.register("components/comment.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Comment = {
  view: function view(_ref) {
    var _ref$attrs = _ref.attrs,
        key = _ref$attrs.key,
        mdl = _ref$attrs.mdl,
        _ref$attrs$comment = _ref$attrs.comment,
        comments = _ref$attrs$comment.comments,
        comments_count = _ref$attrs$comment.comments_count,
        time_ago = _ref$attrs$comment.time_ago,
        content = _ref$attrs$comment.content,
        level = _ref$attrs$comment.level,
        user = _ref$attrs$comment.user;
    var state = {
      showComments: mdl.state.comment["".concat(key, "-").concat(level)] || false
    };
    return m("ion-card", {
      style: {
        minWidth: "60vw"
      }
    }, m("ion-card-header", m("ion-toolbar", m("ion-chip", {
      slot: "start",
      color: "primary"
    }, user), m("ion-note", {
      slot: "end"
    }, time_ago))), m("ion-card-content", m.trust(mdl.markup.render(content)), comments_count > 1 && m("ion-button", {
      expand: "full",
      onclick: function onclick() {
        return mdl.toggleComments({
          mdl: mdl,
          key: key,
          level: level
        });
      }
    }, ["".concat(comments_count, " comments"), state.showComments ? m("ion-icon", {
      slot: "end",
      name: "chevron-up-outline"
    }) : m("ion-icon", {
      slot: "end",
      name: "chevron-down-outline"
    })]), state.showComments && comments.map(function (c, idx) {
      return m(Comment, {
        key: idx,
        comment: c,
        mdl: mdl
      });
    })));
  }
};
var _default = Comment;
exports["default"] = _default;
});

;require.register("components/ionic-router.js", function(exports, require, module) {
"use strict";

var ionicRouter = function ionicRouter() {
  return m("ion-router", m("ion-route-redirect", {
    from: "!",
    to: "#!"
  }), mdl.routes.map(function (r) {
    console.log("r", "".concat(r.name)), [m("ion-route-redirect", {
      from: "!/".concat(r.name),
      to: "#!/".concat(r.name)
    }), m("ion-route", {
      root: "#/!",
      url: "#!/".concat(r.name),
      component: r.name
    })];
  }));
};
});

;require.register("components/layout.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionSheet = require("./action-sheet");

var _modal = _interopRequireDefault(require("./modal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Header = {
  view: function view(_ref) {
    var mdl = _ref.attrs.mdl;
    return m("ion-header", m("ion-toolbar", mdl.state.id() ? [m("ion-back-button", {
      text: "",
      slot: "start",
      defaultHref: "/news",
      onclick: function onclick(e) {
        m.route.set(mdl.state.prev);
      }
    }, mdl.state.route), m("ion-sub-title.ion-text-center.ion-text-wrap", m("ion-label", m("ion-text", m("p", mdl.state.title().toUpperCase()))))] : m("ion-title.ion-text-center.ion-text-wrap", {
      size: "large"
    }, m("ion-label", m("ion-text", m("h1", mdl.state.route.toUpperCase()))))));
  }
};

var Footer = function Footer(_ref2) {
  var mdl = _ref2.attrs.mdl;
  var Routes = mdl.routes.filter(function (r) {
    return r.name.split("/").length == 1;
  });
  return {
    view: function view(_ref3) {
      var mdl = _ref3.attrs.mdl;
      return m("ion-footer", m("ion-toolbar", m("ion-tabs", [].concat(_toConsumableArray(Routes.map(function (_ref4) {
        var name = _ref4.name;
        return m("ion-tab", {
          tab: "".concat(name)
        });
      })), [m("ion-tab-bar", {
        slot: "bottom"
      }, [].concat(_toConsumableArray(Routes.map(function (_ref5) {
        var name = _ref5.name,
            icon = _ref5.icon;
        return m("ion-tab-button", {
          onclick: function onclick() {
            mdl.state.id(null);
            mdl.state.title(null);
            m.route.set("/".concat(name));
          },
          tab: "".concat(name)
        }, [m("ion-label", name), m("ion-icon", {
          name: icon
        })]);
      })), [m("ion-tab-button", {
        onclick: function onclick() {
          return (0, _actionSheet.showSettings)(mdl);
        }
      }, [m("ion-label", "settings"), m("ion-icon", {
        name: "ellipsis-vertical-outline"
      })])]))]))));
    }
  };
};

var Layout = function Layout(_ref6) {
  var mdl = _ref6.attrs.mdl;
  return {
    view: function view(_ref7) {
      var children = _ref7.children;
      return m("ion-app", children && [m(Header, {
        mdl: mdl
      }), m("ion-content", {
        fullscreen: true
      }, children), m(Footer, {
        mdl: mdl
      })]);
    }
  };
};

var _default = Layout;
exports["default"] = _default;
});

;require.register("components/modal.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@ionic/core");

var Modal = function Modal(_ref) {
  var mdl = _ref.attrs.mdl;
  return {
    onremove: function onremove(_ref2) {
      var dom = _ref2.dom;
      return dom.dismiss({
        dismissed: true
      });
    },
    oncreate: function oncreate(_ref3) {
      var dom = _ref3.dom;
      console.log(mdl);
      mdl.data.user.data && _core.modalController.create({
        component: dom,
        showBackdrop: true,
        backdropDismiss: true,
        cssClass: "",
        animated: true,
        swipeToClose: true,
        keyboardClose: true,
        id: mdl.state.user.id
      }).then(function (modal) {
        return modal.present();
      });
    },
    oninit: function oninit(_ref4) {
      var mdl = _ref4.attrs.mdl;
      return mdl.modal.init(mdl);
    },
    view: function view(_ref5) {
      var mdl = _ref5.attrs.mdl;
      return m("ion-modal", m("ion-header", m("ion-toolbar", m("ion-title", mdl.modal.title()), m("ion-buttons", {
        slot: "primary",
        onclick: function onclick() {
          return mdl.modal.close();
        }
      }, m("ion-icon", {
        clot: "icons-only",
        name: "close"
      })))), m("ion-content.ion-padding", mdl.modal.contents()));
    }
  };
};

var _default = Modal;
exports["default"] = _default;
});

;require.register("components/post.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Post = {
  view: function view(_ref) {
    var _ref$attrs = _ref.attrs,
        mdl = _ref$attrs.mdl,
        _ref$attrs$post = _ref$attrs.post,
        comments_count = _ref$attrs$post.comments_count,
        domain = _ref$attrs$post.domain,
        id = _ref$attrs$post.id,
        points = _ref$attrs$post.points,
        time_ago = _ref$attrs$post.time_ago,
        title = _ref$attrs$post.title,
        url = _ref$attrs$post.url,
        user = _ref$attrs$post.user;
    return m("ion-item", {
      detail: comments_count,
      lines: "none"
    }, m("ion-card", {
      id: "post-list-card",
      onclick: function onclick() {
        if (comments_count) {
          mdl.state.prev = mdl.state.path;
          m.route.set("/item/:key", {
            key: id,
            title: title
          });
        }
      }
    }, m("ion-card-header", m("h1", title)), m("ion-card-content", m("ion-grid", m("ion-row", m("ion-link", "from ", m("a.", {
      target: "_blank",
      href: url,
      rel: "noopener"
    }, "".concat(domain)))), m("ion-row", user && m("ion-label", "".concat(time_ago, " by "), m("ion-chip", {
      slot: "start",
      color: "primary"
    }, user)))), m("ion-item", {
      lines: "none"
    }, points && m("ion-badge", {
      slot: "end"
    }, "".concat(points, " pts")), comments_count > 1 && m("ion-badge", {
      slot: "start"
    }, "".concat(comments_count, " comments"))))));
  }
};
var _default = Post;
exports["default"] = _default;
});

;require.register("components/toast.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@ionic/core");

var Toast = function Toast() {
  return {
    view: function view(_ref) {
      var mdl = _ref.attrs.mdl;
      return m('ion-toast', {
        oncreate: function oncreate(_ref2) {
          var dom = _ref2.dom;

          _core.toastController.create({
            component: dom,
            message: mdl.toast.msg(),
            duration: mdl.toast.duration(),
            showCloseButton: true,
            animated: true,
            color: mdl.toast.status() ? 'success' : 'danger'
          }).then(function (toast) {
            return toast.present();
          });
        }
      });
    }
  };
};

var _default = Toast;
exports["default"] = _default;
});

;require.register("components/user-modal.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var UserModel = {
  init: function init(mdl) {
    return mdl.getUser(mdl, "user", mdl.state.user.id).then(function (data) {
      return mdl.data.user = data;
    });
  },
  contents: function contents(mdl) {
    return mdl.data.user && [m("code.row", m(".bold", "id: "), mdl.data.user.id), m("code.row", m(".bold", "created: "), mdl.data.user.created), m("code.row", m(".bold", "about: "), mdl.data.user.about), m("code.row", m(".bold", "karma: "), mdl.data.user.karma)];
  }
};
var _default = UserModel;
exports["default"] = _default;
});

;require.register("index.js", function(exports, require, module) {
"use strict";

var _model = require("./model.js");

var _app = require("./app.js");

if (module.hot) {
  module.hot.accept();
}

if ('development' !== "production") {
  console.log("Looks like we are in development mode!");
} else {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("./service-worker.js").then(function (registration) {
        console.log("SW registered: ", registration);
      })["catch"](function (registrationError) {
        console.log("SW registration failed: ", registrationError);
      });
    });
  }
}

var getProfile = function getProfile(w) {
  if (w < 668) return "phone";
  if (w < 920) return "tablet";
  return "desktop";
};

var winW = window.innerWidth;
_model.model.state.profile = getProfile(winW);

var checkWidth = function checkWidth() {
  var w = window.innerWidth;

  if (winW !== w) {
    winW = w;
    var lastProfile = _model.model.state.profile;
    _model.model.state.profile = getProfile(w);
    if (lastProfile != _model.model.state.profile) m.redraw();
  }

  requestAnimationFrame(checkWidth);
};

checkWidth();
m.route(document.body, "/news", (0, _app.App)(_model.model));
m.route.set("/news");
});

;require.register("initialize.js", function(exports, require, module) {
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  require("./index.js");
});
});

;require.register("model.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;

var _posts = _interopRequireDefault(require("./pages/posts"));

var _comments = _interopRequireDefault(require("./pages/comments"));

var _userModal = _interopRequireDefault(require("./components/user-modal"));

var _markdownIt = _interopRequireDefault(require("markdown-it"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  name: "news",
  icon: "newspaper-outline",
  component: _posts["default"]
}, {
  name: "newest",
  icon: "pulse-outline",
  component: _posts["default"]
}, {
  name: "ask",
  icon: "chatbox-ellipses-outline",
  component: _posts["default"]
}, {
  name: "show",
  icon: "eye-outline",
  component: _posts["default"]
}, {
  name: "jobs",
  icon: "body-outline",
  component: _posts["default"]
}, {
  name: "item/:key",
  icon: null,
  component: _comments["default"]
}, {
  name: "user/:key",
  icon: null,
  component: _comments["default"]
}];

var url = function url(route) {
  return function (page) {
    var path = route.split("/")[0];
    return "https://api.hnpwa.com/v0/".concat(path, "/").concat(page, ".json");
  };
};

var urls = routes.reduce(function (req, route) {
  req[route.name] = url(route.name);
  return req;
}, {});

var http = function http(url) {
  return m.request({
    url: url,
    method: "GET"
  });
};

var reqs = {
  urls: urls,
  http: http
};

var getPosts = function getPosts(mdl, route) {
  return http(mdl.reqs.urls[route](mdl.data[mdl.state.route].page));
};

var getDataById = function getDataById(mdl, route, id) {
  return http(mdl.reqs.urls["".concat(route, "/:key")](id));
};

var getPath = function getPath(route) {
  return route.split("/")[1];
};

var state = {
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
  user: {
    id: ""
  },
  mode: "light"
};

var toggleComments = function toggleComments(_ref) {
  var mdl = _ref.mdl,
      key = _ref.key,
      level = _ref.level;
  return mdl.state.comment["".concat(key, "-").concat(level)] ? mdl.state.comment["".concat(key, "-").concat(level)] = !mdl.state.comment["".concat(key, "-").concat(level)] : mdl.state.comment["".concat(key, "-").concat(level)] = true;
};

var toggleModal = function toggleModal(mdl) {
  return mdl.state.showModal = !mdl.state.showModal;
};

var toggleUser = function toggleUser(mdl) {
  return function (id) {
    mdl.state.user.id = id; // mdl.state.showUser = !mdl.state.showUser

    mdl.modal.title("User: ".concat(id));
    mdl.modal.contents(_userModal["default"].contents(mdl));

    mdl.modal.init = function (mdl) {
      return _userModal["default"].init(mdl);
    };

    mdl.toggleModal(mdl);
  };
};

var modal = {
  title: Stream(null),
  contents: Stream(),
  init: function init(mdl) {},
  close: function close() {}
};
var markup = new _markdownIt["default"]({
  html: true,
  xhtmlOut: true,
  breaks: true,
  langPrefix: "",
  linkify: true,
  typographer: true,
  quotes: "“”‘’"
});
var model = {
  markup: markup,
  modal: modal,
  getPosts: getPosts,
  getComments: getDataById,
  getUser: getDataById,
  routes: routes,
  getPath: getPath,
  reqs: reqs,
  data: {},
  state: state,
  toggleComments: toggleComments,
  toggleModal: toggleModal,
  toggleUser: toggleUser
};
exports.model = model;
});

;require.register("pages/comments.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _comment = _interopRequireDefault(require("./../components/comment.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Comments = function Comments() {
  return {
    oninit: function oninit(_ref) {
      var mdl = _ref.attrs.mdl;
      mdl.data[mdl.state.route] = {};

      var onSuccess = function onSuccess(mdl) {
        return function (data) {
          return mdl.data[mdl.state.route] = data;
        };
      };

      var onError = function onError(mdl) {
        return function (e) {
          return console.log("error", mdl, e);
        };
      };

      mdl.getComments(mdl, mdl.state.route, mdl.state.id()).then(onSuccess(mdl), onError(mdl));
    },
    view: function view(_ref2) {
      var mdl = _ref2.attrs.mdl;
      var route = mdl.state.route;
      var data = mdl.data[route];
      return [!data.comments ? m("ion-progress-bar[type='indeterminate']") : m("ion-list", {
        route: route
      }, data.length == 0 && m("ion-progress-bar[type='indeterminate']"), m("ion-refresher", {
        onionRefresh: function onionRefresh(e) {
          setTimeout(function () {
            console.log("Async operation has ended");
            e.target.complete();
          }, 2000);
        },
        slot: "fixed"
      }, m("ion-refresher-content", {
        pullingIcon: "chevron-down-circle-outline",
        loadingSpinner: "bubbles",
        pullingText: "Pull to refresh",
        closeDuration: "280ms"
      })), data.comments.map(function (c, idx) {
        return m(_comment["default"], {
          key: idx,
          comment: c,
          mdl: mdl
        });
      }))];
    }
  };
};

var _default = Comments;
exports["default"] = _default;
});

;require.register("pages/posts.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _post2 = _interopRequireDefault(require("./../components/post.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Posts = function Posts() {
  return {
    oninit: function oninit(_ref) {
      var mdl = _ref.attrs.mdl;
      mdl.state.id(null);
      mdl.state.title(null);
      mdl.data.item = null;

      if (!mdl.data[mdl.state.route]) {
        mdl.data[mdl.state.route] = {
          data: [],
          page: 1
        };

        var onSuccess = function onSuccess(mdl) {
          return function (data) {
            return mdl.data[mdl.state.route].data = data;
          };
        };

        var onError = function onError(mdl) {
          return function (e) {
            return console.log("error", mdl, e);
          };
        };

        mdl.getPosts(mdl, mdl.state.route).then(onSuccess(mdl), onError(mdl));
      }
    },
    view: function view(_ref2) {
      var mdl = _ref2.attrs.mdl;
      var route = mdl.state.route;
      var data = mdl.data[route].data;
      return [!data ? m("ion-progress-bar[type='indeterminate']") : m("ion-list", {
        route: route
      }, m("ion-refresher", {
        onionRefresh: function onionRefresh(e) {
          setTimeout(function () {
            console.log("Async operation has ended");
            e.target.complete();
          }, 2000);
        },
        slot: "fixed"
      }, m("ion-refresher-content", {
        pullingIcon: "chevron-down-circle-outline",
        loadingSpinner: "bubbles",
        pullingText: "Pull to refresh",
        closeDuration: "280ms"
      })), data.map(function (_post, idx) {
        return m(_post2["default"], {
          key: idx,
          post: _post,
          mdl: mdl
        });
      }), m("ion-infinite-scroll", {
        onionInfinite: function onionInfinite(e) {
          mdl.data[mdl.state.route].page++;

          var onSuccess = function onSuccess(mdl) {
            return function (data) {
              data.length == 0 ? mdl.data[mdl.state.route].page-- : mdl.data[mdl.state.route].data = mdl.data[mdl.state.route].data.concat(data);
              e.target.complete();
            };
          };

          var onError = function onError(mdl) {
            return function (e) {
              console.log("error", mdl, e);
              e.target.complete();
            };
          };

          mdl.getPosts(mdl, mdl.state.route).then(onSuccess(mdl), onError(mdl));
        },
        threshold: "100px",
        id: "infinite-scroll"
      }, m("ion-infinite-scroll-content", {
        loadingSpinner: "bubbles",
        loadingText: "fetching more data"
      })))];
    }
  };
};

var _default = Posts;
exports["default"] = _default;
});

;require.register("utils/animations.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animateChildrenLimitsExit = exports.slideOutAnimation = exports.animate = exports.animateChildrenLimitsEntrance = exports.animateChildrenEntrance = exports.animateFooterEntrance = exports.animateModalEntrance = exports.animateHeaderEntrance = exports.animateComponentEntrance = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var animateComponentEntrance = function animateComponentEntrance(idx) {
  return function (_ref) {
    var dom = _ref.dom;
    dom.style.opacity = 0;
    return setTimeout(function () {
      dom.classList.toggle('expandOpen');
      dom.style.opacity = 1;
    }, idx * 100 + 20);
  };
};

exports.animateComponentEntrance = animateComponentEntrance;

var animateHeaderEntrance = function animateHeaderEntrance(_ref2) {
  var dom = _ref2.dom;
  dom.style.opacity = 0;
  dom.classList.toggle('slideRight');
  dom.style.opacity = 1;
};

exports.animateHeaderEntrance = animateHeaderEntrance;

var animateModalEntrance = function animateModalEntrance(_ref3) {
  var dom = _ref3.dom;
  dom.style.opacity = 0;
  dom.classList.toggle('expandOpen');
  dom.style.opacity = 1;
};

exports.animateModalEntrance = animateModalEntrance;

var animateFooterEntrance = function animateFooterEntrance(_ref4) {
  var dom = _ref4.dom;
  dom.style.opacity = 0;
  dom.classList.toggle('slideLeft');
  dom.style.opacity = 1;
};

exports.animateFooterEntrance = animateFooterEntrance;

var animateChildrenEntrance = function animateChildrenEntrance(_ref5) {
  var dom = _ref5.dom;

  var children = _toConsumableArray(dom.children);

  return children.map(function (child, idx) {
    child.style.opacity = 0;
    setTimeout(function () {
      child.classList.toggle('slideRight');
      child.style.opacity = 1;
    }, (idx + 1) * 10);
  });
};

exports.animateChildrenEntrance = animateChildrenEntrance;

var animateChildrenLimitsEntrance = function animateChildrenLimitsEntrance(idx) {
  return function (_ref6) {
    var dom = _ref6.dom;
    dom.style.opacity = 0;
    setTimeout(function () {
      dom.classList.toggle('slideDown');
      dom.style.opacity = 1;
    }, (idx + 1) * 200);
  };
};

exports.animateChildrenLimitsEntrance = animateChildrenLimitsEntrance;

var animate = function animate(dir) {
  return function (_ref7) {
    var dom = _ref7.dom;
    dom.style.opacity = 0;
    setTimeout(function () {
      dom.classList.toggle(dir);
      dom.style.opacity = 1;
    }, 200);
  };
};

exports.animate = animate;

var slideOutAnimation = function slideOutAnimation(_ref8) {
  var dom = _ref8.dom;
  console.log(dom);
  return new Promise(function () {
    dom.classList.remove('expandOpen');
    return setTimeout(function () {
      dom.style.opacity = 0; // dom.classList.add('reverseAnimation', 'hatch')
    }, 200);
  });
};

exports.slideOutAnimation = slideOutAnimation;

var animateChildrenLimitsExit = function animateChildrenLimitsExit(_ref9) {
  var dom = _ref9.dom;
  return new Promise(function () {
    _toConsumableArray(dom.children).reverse().map(function (child, idx) {
      return setTimeout(function () {
        child.style.display = 'none';
      }, idx * 100);
    });
  });
};

exports.animateChildrenLimitsExit = animateChildrenLimitsExit;
});

;require.register("utils/index.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animations = require("./animations.js");

Object.keys(_animations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _animations[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animations[key];
    }
  });
});
});

;require.alias("process/browser.js", "process");
require.alias("node-browser-modules/node_modules/punycode/punycode.js", "punycode");process = require('process');require.register("___globals___", function(exports, require, module) {
  

// Auto-loaded modules from config.npm.globals.
window.m = require("mithril");
window.Stream = require("mithril-stream");


});})();require('___globals___');


//# sourceMappingURL=app.js.map