!function(){"use strict";var t="undefined"==typeof global?self:global;if("function"!=typeof t.require){var e={},n={},o={},r={}.hasOwnProperty,i=/^\.\.?(\/|$)/,a=function(t,e){for(var n,o=[],r=(i.test(e)?t+"/"+e:e).split("/"),a=0,s=r.length;a<s;a++)".."===(n=r[a])?o.pop():"."!==n&&""!==n&&o.push(n);return o.join("/")},s=function(t){return t.split("/").slice(0,-1).join("/")},u=function(e,o){var r,i={id:e,exports:{},hot:f&&f.createHot(e)};return n[e]=i,o(i.exports,(r=e,function(e){var n=a(s(r),e);return t.require(n,r)}),i),i.exports},c=function(t){var e=o[t];return e&&t!==e?c(e):t},l=function(t,o){null==o&&(o="/");var i=c(t);if(r.call(n,i))return n[i].exports;if(r.call(e,i))return u(i,e[i]);throw new Error("Cannot find module '"+t+"' from '"+o+"'")};l.alias=function(t,e){o[e]=t};var m=/\.[^.\/]+$/,d=/\/index(\.[^\/]+)?$/;l.register=l.define=function(t,i){if(t&&"object"==typeof t)for(var a in t)r.call(t,a)&&l.register(a,t[a]);else e[t]=i,delete n[t],function(t){if(m.test(t)){var e=t.replace(m,"");r.call(o,e)&&o[e].replace(m,"")!==e+"/index"||(o[e]=t)}if(d.test(t)){var n=t.replace(d,"");r.call(o,n)||(o[n]=t)}}(t)},l.list=function(){var t=[];for(var n in e)r.call(e,n)&&t.push(n);return t};var f=t._hmr&&new t._hmr((function(t,e){return c(a(s(t),e))}),l,e,n);l._cache=n,l.hmr=f&&f.wrap,l.brunch=!0,t.require=l}}(),function(){"undefined"==typeof window||window;require.register("app.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var o,r=(o=e("./components/layout.js"))&&o.__esModule?o:{default:o};function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var s=function(t){return function(e,n){var o=n.component,a=n.name;return e["/".concat(a)]={onmatch:function(e,n){return function(t){return function(e,n){var o=e.title,r=e.key,a=i(n.split("/"),2),s=(a[0],a[1]);t.state.route=s,t.state.path=n,r?(t.state.title(o),t.state.id(r)):(t.state.title(null),t.state.id(null))}}(t)(e,n)},render:function(){return m(r.default,{mdl:t},m(o,{key:a,mdl:t}))}},e}};t.App=function(t){return t.routes.reduce(s(t),{})}})),require.register("components/action-sheet.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.showSettings=void 0;var o=e("@ionic/core");t.showSettings=function(t){o.actionSheetController.create({header:"Settings",buttons:[{handler:function(){t.state.mode="light"==t.state.mode?"dark":"light",document.body.classList.toggle("dark"),window.matchMedia("(prefers-color-scheme: dark)")},text:"light"==t.state.mode?"Enter Dark Mode":"Enter Light Mode"}]}).then((function(t){return t.present()}))}})),require.register("components/comment.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={view:function(t){var e=t.attrs,n=e.key,r=e.mdl,i=e.comment,a=i.comments,s=i.comments_count,u=i.time_ago,c=i.content,l=i.level,d=i.user,f={showComments:r.state.comment["".concat(n,"-").concat(l)]||!1};return m("ion-card",{style:{minWidth:"60vw"}},m("ion-card-header",m("ion-toolbar",m("ion-chip",{slot:"start",color:"primary"},d),m("ion-note",{slot:"end"},u))),m("ion-card-content",m.trust(c),s>1&&m("ion-button",{expand:"full",onclick:function(){return r.toggleComments({mdl:r,key:n,level:l})}},["".concat(s," comments"),f.showComments?m("ion-icon",{slot:"end",name:"chevron-up-outline"}):m("ion-icon",{slot:"end",name:"chevron-down-outline"})]),f.showComments&&a.map((function(t,e){return m(o,{key:e,comment:t,mdl:r})}))))}},r=o;t.default=r})),require.register("components/ionic-router.js",(function(t,e,n){"use strict"})),require.register("components/layout.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=e("./action-sheet");(o=e("./modal.js"))&&o.__esModule;function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var s={view:function(t){var e=t.attrs.mdl;return m("ion-header",m("ion-toolbar",e.state.id()?[m("ion-back-button",{text:"",slot:"start",defaultHref:"/news",onclick:function(t){m.route.set(e.state.prev)}},e.state.route),m("ion-sub-title.ion-text-center.ion-text-wrap",m("ion-label",m("ion-text",m("p",e.state.title().toUpperCase()))))]:m("ion-title.ion-text-center.ion-text-wrap",{size:"large"},m("ion-label",m("ion-text",m("h1",e.state.route.toUpperCase()))))))}},u=function(t){var e=t.attrs.mdl.routes.filter((function(t){return 1==t.name.split("/").length}));return{view:function(t){var n=t.attrs.mdl;return m("ion-footer",m("ion-toolbar",m("ion-tabs",[].concat(i(e.map((function(t){var e=t.name;return m("ion-tab",{tab:"".concat(e)})}))),[m("ion-tab-bar",{slot:"bottom"},[].concat(i(e.map((function(t){var e=t.name,o=t.icon;return m("ion-tab-button",{onclick:function(){n.state.id(null),n.state.title(null),m.route.set("/".concat(e))},tab:"".concat(e)},[m("ion-label",e),m("ion-icon",{name:o})])}))),[m("ion-tab-button",{onclick:function(){return(0,r.showSettings)(n)}},[m("ion-label","settings"),m("ion-icon",{name:"ellipsis-vertical-outline"})])]))]))))}}},c=function(t){var e=t.attrs.mdl;return{view:function(t){var n=t.children;return m("ion-app",n&&[m(s,{mdl:e}),m("ion-content",{fullscreen:!0},n),m(u,{mdl:e})])}}};t.default=c})),require.register("components/modal.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("@ionic/core"),r=function(t){var e=t.attrs.mdl;return{onremove:function(t){return t.dom.dismiss({dismissed:!0})},oncreate:function(t){var n=t.dom;console.log(e),e.data.user.data&&o.modalController.create({component:n,showBackdrop:!0,backdropDismiss:!0,cssClass:"",animated:!0,swipeToClose:!0,keyboardClose:!0,id:e.state.user.id}).then((function(t){return t.present()}))},oninit:function(t){var e=t.attrs.mdl;return e.modal.init(e)},view:function(t){var e=t.attrs.mdl;return m("ion-modal",m("ion-header",m("ion-toolbar",m("ion-title",e.modal.title()),m("ion-buttons",{slot:"primary",onclick:function(){return e.modal.close()}},m("ion-icon",{clot:"icons-only",name:"close"})))),m("ion-content.ion-padding",e.modal.contents()))}}};t.default=r})),require.register("components/post.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={view:function(t){var e=t.attrs,n=e.mdl,o=e.post,r=o.comments_count,i=o.domain,a=o.id,s=o.points,u=o.time_ago,c=o.title,l=o.url,d=o.user;return m("ion-item",{detail:r,lines:"none"},m("ion-card",{id:"post-list-card",onclick:function(){r&&(n.state.prev=n.state.path,m.route.set("/item/:key",{key:a,title:c}))}},m("ion-card-header",m("h1",c)),m("ion-card-content",m("ion-grid",m("ion-row",m("ion-link","from ",m("a.",{target:"_blank",href:l,rel:"noopener"},"".concat(i)))),m("ion-row",d&&m("ion-label","".concat(u," by "),m("ion-chip",{slot:"start",color:"primary"},d)))),m("ion-item",{lines:"none"},s&&m("ion-badge",{slot:"end"},"".concat(s," pts")),r>1&&m("ion-badge",{slot:"start"},"".concat(r," comments"))))))}};t.default=o})),require.register("components/toast.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("@ionic/core"),r=function(){return{view:function(t){var e=t.attrs.mdl;return m("ion-toast",{oncreate:function(t){var n=t.dom;o.toastController.create({component:n,message:e.toast.msg(),duration:e.toast.duration(),showCloseButton:!0,animated:!0,color:e.toast.status()?"success":"danger"}).then((function(t){return t.present()}))}})}}};t.default=r})),require.register("components/user-modal.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={init:function(t){return t.getUser(t,"user",t.state.user.id).then((function(e){return t.data.user=e}))},contents:function(t){return t.data.user&&[m("code.row",m(".bold","id: "),t.data.user.id),m("code.row",m(".bold","created: "),t.data.user.created),m("code.row",m(".bold","about: "),t.data.user.about),m("code.row",m(".bold","karma: "),t.data.user.karma)]}};t.default=o})),require.register("index.js",(function(t,e,n){"use strict";var o=e("./model.js"),r=e("./app.js");n.hot&&n.hot.accept(),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./service-worker.js").then((function(t){console.log("SW registered: ",t)})).catch((function(t){console.log("SW registration failed: ",t)}))}));var i=function(t){return t<668?"phone":t<920?"tablet":"desktop"},a=window.innerWidth;o.model.state.profile=i(a);!function t(){var e=window.innerWidth;if(a!==e){a=e;var n=o.model.state.profile;o.model.state.profile=i(e),n!=o.model.state.profile&&m.redraw()}requestAnimationFrame(t)}(),m.route(document.body,"/news",(0,r.App)(o.model)),m.route.set("/news")})),require.register("initialize.js",(function(t,e,n){"use strict";document.addEventListener("DOMContentLoaded",(function(){e("./index.js")}))})),require.register("model.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.model=void 0;var o=a(e("./pages/posts")),r=a(e("./pages/comments")),i=a(e("./components/user-modal"));function a(t){return t&&t.__esModule?t:{default:t}}var s=[{name:"news",icon:"newspaper-outline",component:o.default},{name:"newest",icon:"pulse-outline",component:o.default},{name:"ask",icon:"chatbox-ellipses-outline",component:o.default},{name:"show",icon:"eye-outline",component:o.default},{name:"jobs",icon:"body-outline",component:o.default},{name:"item/:key",icon:null,component:r.default},{name:"user/:key",icon:null,component:r.default}],u=s.reduce((function(t,e){return t[e.name]=function(t){return function(e){var n=t.split("/")[0];return"https://api.hnpwa.com/v0/".concat(n,"/").concat(e,".json")}}(e.name),t}),{}),c=function(t){return m.request({url:t,method:"GET"})},l={urls:u,http:c},d=function(t,e,n){return c(t.reqs.urls["".concat(e,"/:key")](n))},f={id:Stream(null),title:Stream(null),key:"",url:"",route:"",profile:"",tabsShowing:!1,comment:{},showModal:!1,showUser:!1,user:{id:""},mode:"light"},p={modal:{title:Stream(null),contents:Stream(),init:function(t){},close:function(){}},getPosts:function(t,e){return c(t.reqs.urls[e](t.data[t.state.route].page))},getComments:d,getUser:d,routes:s,getPath:function(t){return t.split("/")[1]},reqs:l,data:{},state:f,toggleComments:function(t){var e=t.mdl,n=t.key,o=t.level;return e.state.comment["".concat(n,"-").concat(o)]?e.state.comment["".concat(n,"-").concat(o)]=!e.state.comment["".concat(n,"-").concat(o)]:e.state.comment["".concat(n,"-").concat(o)]=!0},toggleModal:function(t){return t.state.showModal=!t.state.showModal},toggleUser:function(t){return function(e){t.state.user.id=e,t.modal.title("User: ".concat(e)),t.modal.contents(i.default.contents(t)),t.modal.init=function(t){return i.default.init(t)},t.toggleModal(t)}}};t.model=p})),require.register("pages/comments.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=e("./../components/comment.js"))&&o.__esModule?o:{default:o};var i=function(){return{oninit:function(t){var e=t.attrs.mdl;e.data[e.state.route]={};e.getComments(e,e.state.route,e.state.id()).then(function(t){return function(e){return t.data[t.state.route]=e}}(e),function(t){return function(e){return console.log("error",t,e)}}(e))},view:function(t){var e=t.attrs.mdl,n=e.state.route,o=e.data[n];return[o.comments?m("ion-list",{route:n},0==o.length&&m("ion-progress-bar[type='indeterminate']"),m("ion-refresher",{onionRefresh:function(t){setTimeout((function(){console.log("Async operation has ended"),t.target.complete()}),2e3)},slot:"fixed"},m("ion-refresher-content",{pullingIcon:"chevron-down-circle-outline",loadingSpinner:"bubbles",pullingText:"Pull to refresh",closeDuration:"280ms"})),o.comments.map((function(t,n){return m(r.default,{key:n,comment:t,mdl:e})}))):m("ion-progress-bar[type='indeterminate']")]}}};t.default=i})),require.register("pages/posts.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=e("./../components/post.js"))&&o.__esModule?o:{default:o};var i=function(){return{oninit:function(t){var e=t.attrs.mdl;if(e.state.id(null),e.state.title(null),e.data.item=null,!e.data[e.state.route]){e.data[e.state.route]={data:[],page:1};e.getPosts(e,e.state.route).then(function(t){return function(e){return t.data[t.state.route].data=e}}(e),function(t){return function(e){return console.log("error",t,e)}}(e))}},view:function(t){var e=t.attrs.mdl,n=e.state.route,o=e.data[n].data;return[o?m("ion-list",{route:n},m("ion-refresher",{onionRefresh:function(t){setTimeout((function(){console.log("Async operation has ended"),t.target.complete()}),2e3)},slot:"fixed"},m("ion-refresher-content",{pullingIcon:"chevron-down-circle-outline",loadingSpinner:"bubbles",pullingText:"Pull to refresh",closeDuration:"280ms"})),o.map((function(t,n){return m(r.default,{key:n,post:t,mdl:e})})),m("ion-infinite-scroll",{onionInfinite:function(t){e.data[e.state.route].page++;e.getPosts(e,e.state.route).then(function(e){return function(n){0==n.length?e.data[e.state.route].page--:e.data[e.state.route].data=e.data[e.state.route].data.concat(n),t.target.complete()}}(e),function(t){return function(e){console.log("error",t,e),e.target.complete()}}(e))},threshold:"100px",id:"infinite-scroll"},m("ion-infinite-scroll-content",{loadingSpinner:"bubbles",loadingText:"fetching more data"}))):m("ion-progress-bar[type='indeterminate']")]}}};t.default=i})),require.register("utils/animations.js",(function(t,e,n){"use strict";function o(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}Object.defineProperty(t,"__esModule",{value:!0}),t.animateChildrenLimitsExit=t.slideOutAnimation=t.animate=t.animateChildrenLimitsEntrance=t.animateChildrenEntrance=t.animateFooterEntrance=t.animateModalEntrance=t.animateHeaderEntrance=t.animateComponentEntrance=void 0;t.animateComponentEntrance=function(t){return function(e){var n=e.dom;return n.style.opacity=0,setTimeout((function(){n.classList.toggle("expandOpen"),n.style.opacity=1}),100*t+20)}};t.animateHeaderEntrance=function(t){var e=t.dom;e.style.opacity=0,e.classList.toggle("slideRight"),e.style.opacity=1};t.animateModalEntrance=function(t){var e=t.dom;e.style.opacity=0,e.classList.toggle("expandOpen"),e.style.opacity=1};t.animateFooterEntrance=function(t){var e=t.dom;e.style.opacity=0,e.classList.toggle("slideLeft"),e.style.opacity=1};t.animateChildrenEntrance=function(t){return o(t.dom.children).map((function(t,e){t.style.opacity=0,setTimeout((function(){t.classList.toggle("slideRight"),t.style.opacity=1}),10*(e+1))}))};t.animateChildrenLimitsEntrance=function(t){return function(e){var n=e.dom;n.style.opacity=0,setTimeout((function(){n.classList.toggle("slideDown"),n.style.opacity=1}),200*(t+1))}};t.animate=function(t){return function(e){var n=e.dom;n.style.opacity=0,setTimeout((function(){n.classList.toggle(t),n.style.opacity=1}),200)}};t.slideOutAnimation=function(t){var e=t.dom;return console.log(e),new Promise((function(){return e.classList.remove("expandOpen"),setTimeout((function(){e.style.opacity=0}),200)}))};t.animateChildrenLimitsExit=function(t){var e=t.dom;return new Promise((function(){o(e.children).reverse().map((function(t,e){return setTimeout((function(){t.style.display="none"}),100*e)}))}))}})),require.register("utils/index.js",(function(t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("./animations.js");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}))})),require.register("___globals___",(function(t,e,n){window.m=e("mithril"),window.Stream=e("mithril-stream")}))}(),require("___globals___");
