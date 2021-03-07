!function(){"use strict";var t="undefined"==typeof global?self:global;if("function"!=typeof t.require){var e={},n={},r={},o={}.hasOwnProperty,i=/^\.\.?(\/|$)/,a=function(t,e){for(var n,r=[],o=(i.test(e)?t+"/"+e:e).split("/"),a=0,c=o.length;a<c;a++)".."===(n=o[a])?r.pop():"."!==n&&""!==n&&r.push(n);return r.join("/")},c=function(t){return t.split("/").slice(0,-1).join("/")},s=function(e,r){var o,i={id:e,exports:{},hot:f&&f.createHot(e)};return n[e]=i,r(i.exports,(o=e,function(e){var n=a(c(o),e);return t.require(n,o)}),i),i.exports},u=function(t){var e=r[t];return e&&t!==e?u(e):t},l=function(t,r){null==r&&(r="/");var i=u(t);if(o.call(n,i))return n[i].exports;if(o.call(e,i))return s(i,e[i]);throw new Error("Cannot find module '"+t+"' from '"+r+"'")};l.alias=function(t,e){r[e]=t};var m=/\.[^.\/]+$/,d=/\/index(\.[^\/]+)?$/;l.register=l.define=function(t,i){if(t&&"object"==typeof t)for(var a in t)o.call(t,a)&&l.register(a,t[a]);else e[t]=i,delete n[t],function(t){if(m.test(t)){var e=t.replace(m,"");o.call(r,e)&&r[e].replace(m,"")!==e+"/index"||(r[e]=t)}if(d.test(t)){var n=t.replace(d,"");o.call(r,n)||(r[n]=t)}}(t)},l.list=function(){var t=[];for(var n in e)o.call(e,n)&&t.push(n);return t};var f=t._hmr&&new t._hmr((function(t,e){return u(a(c(t),e))}),l,e,n);l._cache=n,l.hmr=f&&f.wrap,l.brunch=!0,t.require=l}}(),function(){"undefined"==typeof window||window;require.register("action-sheet.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.showSettings=void 0;var r=e("@ionic/core");t.showSettings=function(t){r.actionSheetController.create({header:"Settings",buttons:[{handler:function(){t.state.mode="light"==t.state.mode?"dark":"light",document.body.classList.toggle("dark"),window.matchMedia("(prefers-color-scheme: dark)")},text:"light"==t.state.mode?"Enter Dark Mode":"Enter Light Mode"}]}).then((function(t){return t.present()}))}})),require.register("app.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var r=s(e("./components/layout.js")),o=s(e("./components/modal.js")),i=s(e("./components/post.js")),a=s(e("./components/comment.js")),c=e("./utils/index");function s(t){return t&&t.__esModule?t:{default:t}}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(t){return{init:function(t){return t.getDataById(t)("user")(t.state.user.id)},close:function(t){return t.toggleUser(t)("")},title:"User",contents:t.data.user&&t.data.user.data?[m("code.row",[m(".bold","id: "),t.data.user.data.id]),m("code.row",[m(".bold","created: "),t.data.user.data.created]),m("code.row",[m(".bold","about: "),t.data.user.data.about]),m("code.row",[m(".bold","karma: "),t.data.user.data.karma])]:[],footer:[]}},p=function(){var t=function(t){return t.map},e=function(t){return t.comments&&t.comments.map};return{view:function(n){var r=n.attrs.mdl,s=r.state.route,u=r.data[s].data;return m("ion-list",{route:r.state.route,onscroll:(0,c.infiniteScroll)(r)},[(0,c.isEmpty)(u)?m("ion-progress-bar[type='indeterminate']"):t(u)?[m("ion-refresher",{onionRefresh:function(t){r.getData(r)(r.state.route,!0).then(t.target.complete())},slot:"fixed"},m("ion-refresher-content",{pullingIcon:"chevron-down-circle-outline",loadingSpinner:"bubbles",pullingText:"Pull to refresh",closeDuration:"280ms"})),u.map((function(t,e){return m(i.default,{key:e,post:t,mdl:r})})),m("ion-infinite-scroll",{onionInfinite:function(t){r.state.page++,r.getData(r)(r.state.route).then(t.target.complete())},threshold:"100px",id:"infinite-scroll"},m("ion-infinite-scroll-content",{loadingSpinner:"bubbles",loadingText:"fetching more data"}))]:e(u)&&u.comments.map((function(t,e){return m(a.default,{key:e,comment:t,mdl:r})})),r.state.showUser&&r.state.user.id&&m(o.default,l(l({},f(r)),{},{mdl:r}))])}}};t.App=function(t){return t.routes.reduce(function(t){return function(e,n){return e["/".concat(n.name)]={onmatch:function(e,n){return(0,c.init)(t)(e,n)},render:function(){return m(r.default,{mdl:t},m(p,{mdl:t}))}},e}}(t),{})}})),require.register("components/action-sheet.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.showSettings=void 0;var r=e("@ionic/core");t.showSettings=function(t){r.actionSheetController.create({header:"Settings",buttons:[{handler:function(){t.state.mode="light"==t.state.mode?"dark":"light",document.body.classList.toggle("dark"),window.matchMedia("(prefers-color-scheme: dark)")},text:"light"==t.state.mode?"Enter Dark Mode":"Enter Light Mode"}]}).then((function(t){return t.present()}))}})),require.register("components/comment.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={oninit:function(t){t.attrs.mdl.state.id(m.route.get().split("/")[2])},view:function(t){var e=t.attrs,n=e.key,o=e.mdl,i=e.comment,a=i.comments,c=i.comments_count,s=(i.id,i.time_ago),u=i.content,l=i.level,d=i.user,f=o.state.comment["".concat(n,"-").concat(l)]||!1;return m("ion-card",{style:{minWidth:"60vw"}},m("ion-card-header",m("ion-toolbar",m("ion-chip",{slot:"start",color:"primary"},d),m("ion-note",{slot:"end"},s))),m("ion-card-content",m.trust(u),c?m("ion-button",{expand:"full",onclick:function(){return o.toggleComments({mdl:o,key:n,level:l})}},["".concat(c," comments"),f?m("ion-icon",{slot:"end",name:"chevron-up-outline"}):m("ion-icon",{slot:"end",name:"chevron-down-outline"})]):null,f?a.map((function(t,e){return m(r,{key:e,comment:t,mdl:o})})):null))}},o=r;t.default=o})),require.register("components/ionic-router.js",(function(t,e,n){"use strict"})),require.register("components/layout.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e("./action-sheet");e("./ionic-router");function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var a={view:function(t){var e=t.attrs.mdl;return m("ion-header",m("ion-toolbar",e.state.id()?[m("ion-back-button",{text:"",slot:"start",defaultHref:"/news",onclick:function(t){e.state.id(null),e.state.title(null),m.route.set(e.state.prev||"/news")}},e.getPath(e.state.prev||"/news")),m("ion-sub-title.ion-text-center.ion-text-wrap",m("ion-label",m("ion-text",m("p",e.state.title().toUpperCase()))))]:m("ion-title.ion-text-center.ion-text-wrap",{size:"large"},m("ion-label",m("ion-text",m("h1",e.getPath(e.state.route).toUpperCase()))))))}},c=function(t){var e=t.attrs.mdl.routes.filter((function(t){return 1==t.name.split("/").length}));return{view:function(t){var n=t.attrs.mdl;return m("ion-footer",m("ion-toolbar",m("ion-tabs",[].concat(o(e.map((function(t){return m("ion-tab",{tab:"".concat(t.name)})}))),[m("ion-tab-bar",{slot:"bottom"},[].concat(o(e.map((function(t){return m("ion-tab-button",{onclick:function(){n.state.id(null),n.state.title(null),m.route.set("/".concat(t.name))},tab:"".concat(t.name)},[m("ion-label",t.name),m("ion-icon",{name:t.icon})])}))),[m("ion-tab-button",{onclick:function(){return(0,r.showSettings)(n)}},[m("ion-label","settings"),m("ion-icon",{name:"ellipsis-vertical-outline"})])]))]))))}}},s=function(t){var e=t.attrs.mdl;return{view:function(t){var n=t.children;return m("ion-app",n&&[m(a,{mdl:e}),m("ion-content",{fullscreen:!0},n),m(c,{mdl:e})])}}};t.default=s})),require.register("components/modal.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={view:function(t){var e=t.attrs,n=e.title,r=e.model,o=e.close;return m(".modal-header",[m("h4.title",n),m("button.closeBtn",{onclick:function(){return o(r)}},"X")])}},o={view:function(t){var e=t.children;return m(".modal-contents",e)}},i={view:function(t){var e=t.children;return m(".modal-footer",e)}},a={oninit:function(t){var e=t.attrs;return(0,e.init)(e.model)},view:function(t){var e=t.attrs,n=e.title,a=e.contents,c=e.footer,s=e.model,u=e.close;return m("section.modalContainer",m(".modal",{},[m(r,{title:n,model:s,close:u}),m(o,a),m(i,c)]))}};t.default=a})),require.register("components/post.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={view:function(t){var e=t.attrs,n=e.mdl,r=e.post,o=r.comments_count,i=r.domain,a=r.id,c=r.points,s=r.time_ago,u=r.title,l=r.url,d=r.user;return m("ion-item",{detail:o,lines:"none"},m("ion-card",{id:"post-list-card",onclick:function(){n.state.showComment=!n.state.showComment,o&&m.route.set("/item/:key",{key:a,title:u})}},m("ion-card-header",m("h1",u)),m("ion-card-content",m("ion-grid",m("ion-row",m("ion-link","from ",m("a.",{target:"_blank",href:l,rel:"noopener"},"".concat(i)))),m("ion-row",d&&m("ion-label","".concat(s," by "),m("ion-chip",{slot:"start",color:"primary",onclick:function(){}},d)))),m("ion-item",{lines:"none"},c&&m("ion-badge",{slot:"end"},"".concat(c," pts")),o?m("ion-badge",{slot:"start"},"".concat(o," comments")):null))))}};t.default=r})),require.register("index.js",(function(t,e,n){"use strict";var r=e("./model.js"),o=e("./app.js"),i=document.body;function a(t){return t<668?"phone":t<920?"tablet":"desktop"}n.hot&&n.hot.accept(),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./service-worker.js").then((function(t){console.log("SW registered: ",t)})).catch((function(t){console.log("SW registration failed: ",t)}))}));var c=window.innerWidth;r.model.state.profile=a(c),function t(){var e=window.innerWidth;if(c!==e){c=e;var n=r.model.state.profile;r.model.state.profile=a(e),n!=r.model.state.profile&&m.redraw()}requestAnimationFrame(t)}(),m.route(i,"/news",(0,o.App)(r.model)),m.route.set("/news")})),require.register("initialize.js",(function(t,e,n){"use strict";document.addEventListener("DOMContentLoaded",(function(){e("./index.js")}))})),require.register("model.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.model=void 0;var r=[{name:"news",icon:"newspaper-outline"},{name:"newest",icon:"pulse-outline"},{name:"ask",icon:"chatbox-ellipses-outline"},{name:"show",icon:"eye-outline"},{name:"jobs",icon:"body-outline"},{name:"item/:key",icon:null},{name:"user/:key",icon:null}],o=r.reduce((function(t,e){return t[e.name]=function(t){return function(e){var n=t.split("/")[0];return"https://api.hnpwa.com/v0/".concat(n,"/").concat(e,".json")}}(e.name),t}),{}),i={getData:function(t){return function(e){t.state.showComment=!1,t.state.comment={},t.state.route=e;var n=t.getPath(e);return t.data[e]?t.data[e]:t.data[e]={data:[]},t.reqs.http(t)(t.reqs.urls[n](t.state.page))(e)}},getDataById:function(t){return function(e){return function(n){t.state.prev=t.state.route,"item"==e&&(t.state.route=e),t.data[e]?t.data[e]:t.data[e]={data:[]},t.reqs.http(t)(t.reqs.urls["".concat(e,"/:key")](n))(e)}}},routes:r,getPath:function(t){return t.split("/")[1]},reqs:{urls:o,http:function(t){return function(e){return function(n,r){return m.request({url:e,method:"GET"}).then((function(e){return t.data[n].data=r?e:t.data[n].data.concat(e),Promise.resolve(t)}))}}}},data:{},state:{id:Stream(null),title:Stream(null),key:"",url:"",route:"",page:1,profile:"",tabsShowing:!1,comment:{},showModal:!1,showUser:!1,user:{id:""},mode:"light"},toggleComments:function(t){var e=t.mdl,n=t.key,r=t.level;return e.state.comment["".concat(n,"-").concat(r)]?e.state.comment["".concat(n,"-").concat(r)]=!e.state.comment["".concat(n,"-").concat(r)]:e.state.comment["".concat(n,"-").concat(r)]=!0},toggleModal:function(t){return t.state.showModal=!t.state.showModal},toggleUser:function(t){return function(e){t.state.user.id=e,t.state.showUser=!t.state.showUser}}};t.model=i})),require.register("toast.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e("@ionic/core"),o=function(){return{view:function(t){var e=t.attrs.mdl;return m("ion-toast",{oncreate:function(t){var n=t.dom;r.toastController.create({component:n,message:e.toast.msg(),duration:e.toast.duration(),showCloseButton:!0,animated:!0,color:e.toast.status()?"success":"danger"}).then((function(t){return t.present()}))}})}}};t.default=o})),require.register("utils/animations.js",(function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.animateChildrenLimitsExit=t.slideOutAnimation=t.animate=t.animateChildrenLimitsEntrance=t.animateChildrenEntrance=t.animateFooterEntrance=t.animateModalEntrance=t.animateHeaderEntrance=t.animateComponentEntrance=void 0;t.animateComponentEntrance=function(t){return function(e){var n=e.dom;return n.style.opacity=0,setTimeout((function(){n.classList.toggle("expandOpen"),n.style.opacity=1}),100*t+20)}};t.animateHeaderEntrance=function(t){var e=t.dom;e.style.opacity=0,e.classList.toggle("slideRight"),e.style.opacity=1};t.animateModalEntrance=function(t){var e=t.dom;e.style.opacity=0,e.classList.toggle("expandOpen"),e.style.opacity=1};t.animateFooterEntrance=function(t){var e=t.dom;e.style.opacity=0,e.classList.toggle("slideLeft"),e.style.opacity=1};t.animateChildrenEntrance=function(t){return r(t.dom.children).map((function(t,e){t.style.opacity=0,setTimeout((function(){t.classList.toggle("slideRight"),t.style.opacity=1}),10*(e+1))}))};t.animateChildrenLimitsEntrance=function(t){return function(e){var n=e.dom;n.style.opacity=0,setTimeout((function(){n.classList.toggle("slideDown"),n.style.opacity=1}),200*(t+1))}};t.animate=function(t){return function(e){var n=e.dom;n.style.opacity=0,setTimeout((function(){n.classList.toggle(t),n.style.opacity=1}),200)}};t.slideOutAnimation=function(t){var e=t.dom;return console.log(e),new Promise((function(){return e.classList.remove("expandOpen"),setTimeout((function(){e.style.opacity=0}),200)}))};t.animateChildrenLimitsExit=function(t){var e=t.dom;return new Promise((function(){r(e.children).reverse().map((function(t,e){return setTimeout((function(){t.style.display="none"}),100*e)}))}))}})),require.register("utils/helpers.js",(function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.init=t.infiniteScroll=t.isEmpty=void 0;t.isEmpty=function(t){return 0==t.length};t.infiniteScroll=function(t){return function(e){console.log("infscroll");var n=t.state.route,r=t.data[n].data.length,o=10*r*t.state.scrollPos;e.target.scrollTop-t.state.scrollPos>=o&&(t.state.scrollPos++,e.target.scrollTop,r<t.data[n].limit&&t.getData(t)(n))}};t.init=function(t){return function(e,n){var o=e.title,i=e.key;t.state.page=1;var a=r(n.split("/"),2),c=(a[0],a[1]);i?(t.state.title(o),t.state.id(i),t.getDataById(t)(c)(i)):(console.log("PATH",n),t.getData(t)(n))}}})),require.register("utils/index.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("./animations.js");Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}}))}));var o=e("./helpers.js");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}))})),require.register("___globals___",(function(t,e,n){window.m=e("mithril"),window.Stream=e("mithril-stream")}))}(),require("___globals___");
