(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{192:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return M});a(221);var n=a(0),r=a.n(n),i=a(195),c=a(204),u=a(198);t.default=function(e){var t=e.data.allMarkdownRemark.nodes,a=r.a.useMemo(function(){return t.length<=0?r.a.createElement("div",null,"No Such Posts. :("):t.map(function(e){var t=e.fields.slug;return r.a.createElement("div",{key:t,className:"item"},""!==e.frontmatter.thumb&&r.a.createElement(i.a,{href:t},r.a.createElement("img",{className:"thumb",src:e.frontmatter.thumb,alt:"thumbnail"})),r.a.createElement("div",{className:"info"},r.a.createElement(i.a,{href:t},r.a.createElement("h2",null,e.frontmatter.title)),r.a.createElement("div",null,r.a.createElement(i.a,{className:"category"},e.frontmatter.category)," · ",r.a.createElement("span",null,e.frontmatter.date))))})},[t]);return r.a.createElement(c.a,null,r.a.createElement(u.a,{className:"content"},a))};var M="3982741710"},195:function(e,t,a){"use strict";a(29),a(30),a(14),a(49),a(23),a(201);var n=a(0),r=a.n(n),i=a(22);t.a=function(e){var t=e.children,a=e.className,c=e.onClick,u=e.href,M=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["children","className","onClick","href"]),l=Object(n.useMemo)(function(){return["link",a].join(" ")},[a]),s=Object(n.useCallback)(function(e){c&&c(e),function(e){return/^https?:\/\//g.test(e)}(u)||(e.preventDefault(),Object(i.navigate)(u))},[c,u,i.navigate]);return r.a.createElement("a",Object.assign({className:l,onClick:s,href:u},M),t)}},196:function(e,t,a){"use strict";a(29),a(30),a(14),a(49),a(23),a(199),a(200);var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.className,i=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["children","className"]),c=Object(n.useMemo)(function(){return["layout",a].join(" ")},[a]);return r.a.createElement("div",Object.assign({},i,{className:c}),t)}},197:function(e,t,a){var n;e.exports=(n=a(203))&&n.default||n},198:function(e,t,a){"use strict";a(29),a(30),a(14),a(49),a(23),a(205);var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.className,i=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["children","className"]),c=Object(n.useMemo)(function(){return["card",a].join(" ")},[a]);return r.a.createElement("div",Object.assign({},i,{className:c}),t)}},202:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Dev Blog",defaultDescription:"OPNay's develop blog",titleTemplate:"Dev Blog · %s",siteUrl:"https://opnay.com",defaultImage:"/images/open-graph.png",twitterUsername:"@opnay_dev"}}}}},203:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),i=a(98);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},204:function(e,t,a){"use strict";a(29),a(30),a(14),a(49),a(206);var n=a(0),r=a.n(n),i=a(196),c=(a(207),a(195)),u=(a(23),r.a.createContext(void 0)),M=function(e){var t=e.children,a=function(){var e=Object(n.useState)({title:"Blog",src:"/"}),t=e[0],a=e[1];return Object(n.useMemo)(function(){return{set title(e){a(Object.assign({},t,{title:e}))},get title(){return t.title},get src(){return t.src},set src(e){a(Object.assign({},t,{title:e}))}}},[t,a])}(),i=Object(n.useMemo)(function(){return[a]},[]);return r.a.createElement(u.Provider,{value:i},t)};var l=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=Object(n.useContext)(u)[0],a=t.title,i=t.src;return r.a.createElement("div",{className:"blog-header"},r.a.createElement("div",{className:"content"},r.a.createElement(c.a,{href:i,className:"profile"},r.a.createElement("img",{src:"/images/profile.png",alt:"Profile"}),r.a.createElement("span",{className:"name"},a)),r.a.createElement("div",{className:"shortcut"},r.a.createElement(c.a,{href:"https://facebook.com/opnay"},r.a.createElement("img",{alt:"facebook",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTcsMlYySDE3VjZIMTVDMTQuMzEsNiAxNCw2LjgxIDE0LDcuNVYxMEgxNEwxNywxMFYxNEgxNFYyMkgxMFYxNEg3VjEwSDEwVjZBNCw0IDAgMCwxIDE0LDJIMTdaIi8+Cjwvc3ZnPg=="})),r.a.createElement(c.a,{href:"https://twitter.com/opnay_dev"},r.a.createElement("img",{alt:"twitter",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMjIuNDYsNkMyMS42OSw2LjM1IDIwLjg2LDYuNTggMjAsNi42OUMyMC44OCw2LjE2IDIxLjU2LDUuMzIgMjEuODgsNC4zMUMyMS4wNSw0LjgxIDIwLjEzLDUuMTYgMTkuMTYsNS4zNkMxOC4zNyw0LjUgMTcuMjYsNCAxNiw0QzEzLjY1LDQgMTEuNzMsNS45MiAxMS43Myw4LjI5QzExLjczLDguNjMgMTEuNzcsOC45NiAxMS44NCw5LjI3QzguMjgsOS4wOSA1LjExLDcuMzggMyw0Ljc5QzIuNjMsNS40MiAyLjQyLDYuMTYgMi40Miw2Ljk0QzIuNDIsOC40MyAzLjE3LDkuNzUgNC4zMywxMC41QzMuNjIsMTAuNSAyLjk2LDEwLjMgMi4zOCwxMEMyLjM4LDEwIDIuMzgsMTAgMi4zOCwxMC4wM0MyLjM4LDEyLjExIDMuODYsMTMuODUgNS44MiwxNC4yNEM1LjQ2LDE0LjM0IDUuMDgsMTQuMzkgNC42OSwxNC4zOUM0LjQyLDE0LjM5IDQuMTUsMTQuMzYgMy44OSwxNC4zMUM0LjQzLDE2IDYsMTcuMjYgNy44OSwxNy4yOUM2LjQzLDE4LjQ1IDQuNTgsMTkuMTMgMi41NiwxOS4xM0MyLjIyLDE5LjEzIDEuODgsMTkuMTEgMS41NCwxOS4wN0MzLjQ0LDIwLjI5IDUuNywyMSA4LjEyLDIxQzE2LDIxIDIwLjMzLDE0LjQ2IDIwLjMzLDguNzlDMjAuMzMsOC42IDIwLjMzLDguNDIgMjAuMzIsOC4yM0MyMS4xNiw3LjYzIDIxLjg4LDYuODcgMjIuNDYsNloiLz4KPC9zdmc+"})),r.a.createElement(c.a,{href:"https://github.com/opnay"},r.a.createElement("img",{alt:"github",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjM4IDguMTc1OThDMjAuNTQgNy43NzU5OCAyMS4wNiA2LjE4NTk4IDIwLjIxIDQuMDM1OThDMjAuMjEgNC4wMzU5OCAxOC45IDMuNjQ1OTggMTUuOTEgNS42NDU5OEMxNC42NiA1LjMxNTk4IDEzLjMzIDUuMjY1OTggMTIgNS4yNjU5OEMxMC42OCA1LjI2NTk4IDkuMzQgNS4zMTU5OCA4LjA5IDUuNjQ1OThDNS4xIDMuNjE1OTggMy43OSA0LjAzNTk4IDMuNzkgNC4wMzU5OEMyLjk0IDYuMTg1OTggMy40NiA3Ljc3NTk4IDMuNjMgOC4xNzU5OEMyLjYxIDkuMjY1OTggMiAxMC42NDYgMiAxMi4zNjZDMiAxOC44MDYgNi4xNiAyMC4yNTYgMTIgMjAuMjU2QzE3Ljc5IDIwLjI1NiAyMiAxOC44MDYgMjIgMTIuMzY2QzIyIDEwLjY0NiAyMS4zOSA5LjI2NTk4IDIwLjM4IDguMTc1OThaTTEyIDE5LjAyNkM3Ljg4IDE5LjAyNiA0LjUzIDE4LjgzNiA0LjUzIDE0LjgzNkM0LjUzIDEzLjg4NiA1IDEyLjk4NiA1LjggMTIuMjU2QzcuMTQgMTEuMDI2IDkuNDMgMTEuNjc2IDEyIDExLjY3NkMxNC41OSAxMS42NzYgMTYuODUgMTEuMDI2IDE4LjIgMTIuMjU2QzE5IDEyLjk4NiAxOS41IDEzLjg3NiAxOS41IDE0LjgzNkMxOS41IDE4LjgyNiAxNi4xMyAxOS4wMjYgMTIgMTkuMDI2Wk04Ljg2IDEyLjc2NkM4LjA0IDEyLjc2NiA3LjM2IDEzLjc2NiA3LjM2IDE0Ljk4NkM3LjM2IDE2LjIxNiA4LjA0IDE3LjIyNiA4Ljg2IDE3LjIyNkM5LjY5IDE3LjIyNiAxMC4zNiAxNi4yMjYgMTAuMzYgMTQuOTg2QzEwLjM2IDEzLjc1NiA5LjY5IDEyLjc2NiA4Ljg2IDEyLjc2NlpNMTUuMTQgMTIuNzY2QzE0LjMxIDEyLjc2NiAxMy42NCAxMy43NTYgMTMuNjQgMTQuOTg2QzEzLjY0IDE2LjIyNiAxNC4zMSAxNy4yMjYgMTUuMTQgMTcuMjI2QzE1Ljk2IDE3LjIyNiAxNi42NCAxNi4yMjYgMTYuNjQgMTQuOTg2QzE2LjY0IDEzLjc1NiAxNiAxMi43NjYgMTUuMTQgMTIuNzY2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="})))))},s=a(202),g=a(208),j=(a(66),a(197),a(9).default.enqueue,r.a.createContext({}));function m(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&i(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(j.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:a,render:n||i,staticQueryData:e})})};var N=function(e){var t=e.title,a=e.description,n=e.image,i=e.pathname,c=e.article;return r.a.createElement(o,{query:"59261791",render:function(e){var u=e.site.siteMetadata,M=u.defaultTitle,l=u.defaultDescription,s=u.titleTemplate,j=u.siteUrl,m=u.defaultImage,o=u.twitterUsername,N={title:t||M,description:a||l,image:""+j+(n||m),url:""+j+(i||"/")};return r.a.createElement(g.Helmet,{title:N.title,titleTemplate:s},r.a.createElement("meta",{name:"description",content:N.description}),r.a.createElement("meta",{name:"image",content:N.image}),N.url&&r.a.createElement("meta",{property:"og:url",content:N.url}),c?r.a.createElement("meta",{property:"og:type",content:"article"}):null,N.title&&r.a.createElement("meta",{property:"og:title",content:N.title}),N.description&&r.a.createElement("meta",{property:"og:description",content:N.description}),N.image&&r.a.createElement("meta",{property:"og:image",content:N.image}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o&&r.a.createElement("meta",{name:"twitter:creator",content:o}),N.title&&r.a.createElement("meta",{name:"twitter:title",content:N.title}),N.description&&r.a.createElement("meta",{name:"twitter:description",content:N.description}),N.image&&r.a.createElement("meta",{name:"twitter:image",content:N.image}))},data:s})};var I=function(e){var t=e.children,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["children"]);return r.a.createElement(n.Fragment,null,r.a.createElement(N,a),t)};t.a=function(e){var t=e.children,a=e.className,c=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["children","className"]),u=Object(n.useMemo)(function(){return["blog",a].join(" ")},[a]);return r.a.createElement(I,c,r.a.createElement(M,null,r.a.createElement(i.a,{className:u},r.a.createElement(l,null),t)))}}}]);
//# sourceMappingURL=component---src-pages-blog-index-tsx-34cdaa0b9c5efadbf86f.js.map