(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(172);t.default=function(){return n.createElement(r.a,null)}},152:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),A=a(4),i=a.n(A),c=a(32),l=a.n(c);a.d(t,"a",function(){return l.a});a(153);var o=r.a.createContext({}),s=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},154:function(e,t,a){"use strict";t.a={brand_color:"#002233"}},155:function(e,t,a){"use strict";var n=a(159),r=a(152),A=a(0),i=a(169),c=a.n(i),l=a(154);t.a=function(e){return A.createElement(r.b,{query:"1025518380",render:function(t){var a=e.description||t.site.siteMetadata.description,n=e.keywords?e.keywords.join(", "):"",r=e.meta,i=[];return n.length>0&&i.concat({property:"keywords",content:n}),void 0!==r&&r.length>0&&i.concat(r),A.createElement(c.a,{htmlAttributes:{lang:e.lang},title:e.title,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{content:a,name:"description"},{content:e.title,property:"og:title"},{content:a,property:"og:description"},{content:"website",property:"og:type"},{content:"summary",name:"twitter:card"},{content:t.site.siteMetadata.author,name:"twitter:creator"},{content:e.title,name:"twitter:title"},{content:a,name:"twitter:description"},{content:l.a.brand_color,name:"msappliaction-TileColor"},{content:l.a.brand_color,name:"theme-color"}].concat(i),link:[{href:"/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"},{href:"/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"},{href:"/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"},{rel:"manifest",href:"/site.webmanifest"},{color:l.a.brand_color,href:"/safari-pinned-tab.svg",rel:"mask-icon"}]})},data:n})}},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Simms"}}}}},157:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),A=a(4),i=a.n(A),c=a(54),l=a(2),o=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},158:function(e){e.exports={data:{file:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAUABQDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABgcIBf/EABgBAQADAQAAAAAAAAAAAAAAAAUDBAYB/9oADAMBAAIQAxAAAAEmXIDKl1lJFZpLaMKcoPSZFbGolMVuUexf/8QAGxAAAwADAQEAAAAAAAAAAAAABAUGAgMHABL/2gAIAQEAAQUCftg5hNOX2bZ9uF+c6UUN1OKgFANhkz0k+kSyG/WeyzyeTHU7jRQf/8QAHxEAAQQCAwEBAAAAAAAAAAAAAQACAxEEEgUTMSGB/9oACAEDAQE/AcaDvl1WbgxwNtl/qpca+KPLG3h+LkhpC6hZWgCx2gRWnSySCnFdbHehf//EAB0RAAEEAwEBAAAAAAAAAAAAAAIAAQMEERIhE0H/2gAIAQIBAT8BsT+MeyqXJJXweFlXwkOs+PiovtK3UxKwRPLhRiETbC3V6mPGdf/EACUQAAIBBAEEAQUAAAAAAAAAAAECAwAEERIFISIxURQVQUJSwf/aAAgBAQAGPwI8ldOgJYJFv92/tRcXMY5YbltEZY9WjbHTI9VipbaeEvquyaNqQ3vNJ9TuPjpDOHWV5M+PA6UJ7aVJEYZV0OQasOHvpC1tHdgiH8Tqmwz761ccvwlikUz69367eceqUWnJ3MSv3FI5yBmv/8QAGxABAAMBAQEBAAAAAAAAAAAAAQARIVExYcH/2gAIAQEAAT8hOr8WRPhuBaIhvGt0/Qqv2CoJ47S0oQFGquOfsQeo2Aq3MmOthD6JLmzB0RB8B3krvFKXsi7c5PXZku9wZ//aAAwDAQACAAMAAAAQ3Xf4P//EAB4RAQACAQQDAAAAAAAAAAAAAAEAESEQMVFxQWGB/9oACAEDAQE/EHMdsWYhXbnQY0LLbUu2e6nric4Sr+RVSQOTL5hRKRzrGf/EABwRAQACAgMBAAAAAAAAAAAAAAEAETFRIUFxgf/aAAgBAgEBPxAG7TPg3jrUqxQutGs2GePIB2hn7r7ESyKW8HUUDNteag54E//EABsQAQEBAQEBAQEAAAAAAAAAAAERIQAxQWFx/9oACAEBAAE/EB3u+CqBuHoGahXiiPHmEDqrRajURvTPTmCimpU0NC00E+3nxKO1Ny1dIjU1KgCrXo+mifzqvT2rMaa4oxgdWaZTd97K4Ylh5LioFjNEhYfr61V7/9k=",width:30,height:30,src:"/static/cb0464da5ddb112e2c94f0cfb552615d/3f541/Andrew-Simms.jpg",srcSet:"/static/cb0464da5ddb112e2c94f0cfb552615d/3f541/Andrew-Simms.jpg 1x,\n/static/cb0464da5ddb112e2c94f0cfb552615d/7d2c5/Andrew-Simms.jpg 1.5x,\n/static/cb0464da5ddb112e2c94f0cfb552615d/c48cd/Andrew-Simms.jpg 2x,\n/static/cb0464da5ddb112e2c94f0cfb552615d/29a94/Andrew-Simms.jpg 3x"}}}}}},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Simms",description:"Programmer, photographer, guitar player and maker currently living in Golden, Colorado.",author:"@andrewdsimms"}}}}},160:function(e,t,a){"use strict";var n=a(156),r=a(152),A=a(0),i=(a(165),a(161),function(e){var t=void 0!==e.link&&e.link.length>0,a={letterSpacing:"1px"},n=function(e){return A.createElement("p",{className:"h6 mx-3 text-uppercase",style:a},A.createElement("small",null,e.text))},r=function(a){return t?A.createElement("a",{href:a.link},A.createElement(n,e)):A.createElement(n,a)};return A.createElement(function(t){return!0===e.hasSeparator?A.createElement("div",{className:"d-flex align-items-baseline"},A.createElement("small",{className:"text-muted"},"|"),A.createElement(r,t)):A.createElement(r,t)},e)}),c=function(e){return A.createElement("div",{className:"d-flex justify-content-center align-items-center mt-"+(e.marginTop||1)},e.children)},l=function(){return A.createElement("footer",{className:"mt-5"},A.createElement(c,null,A.createElement(i,{text:"© "+(new Date).getFullYear()+" Andrew Simms"})),A.createElement(c,null,A.createElement(i,{text:"Email",link:"mailto:simms.andrew@gmail.com"}),A.createElement(i,{text:"Github",link:"https://github.com/simmsa",hasSeparator:!0}),A.createElement(i,{text:"Twitter",link:"https://twitter.com/andrewdsimms",hasSeparator:!0})),A.createElement(c,null,A.createElement(i,{text:"Built With Gatsby",link:"https://www.gatsbyjs.org/"})))},o=(a(166),a(158)),s=a(164),m=a.n(s),d=a(168),u=a.n(d),g=a(167),E=a.n(g),p=a(154),f=function(e){return A.createElement("span",{className:(!1===e.isUppercase?"":"text-uppercase")+" small",style:{letterSpacing:!1===e.isUppercase?"0px":"1px"}},e.children)},h=function(e){return A.createElement(r.b,{query:"1658456242",render:function(t){return A.createElement("header",{style:{background:p.a.brand_color},className:"mb-5"},A.createElement(E.a,{variant:"dark",style:{backgroundColor:p.a.brand_color,margin:"0 auto",maxWidth:"960px"},className:"d-flex",expand:"sm"},A.createElement(E.a.Brand,{href:"/",className:"d-flex flex-grow-1 align-items-center"},A.createElement(m.a,{fixed:t.file.childImageSharp.fixed,className:"rounded-circle mr-3 d-none d-md-block",alt:"Andrew Simms"}),A.createElement(f,{isUppercase:!1},e.siteTitle)),A.createElement(E.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),A.createElement(E.a.Collapse,{bsPrefix:"navbar-collapse d-flex justify-content-end"},A.createElement(u.a,null,A.createElement(u.a.Link,{href:"/about/",className:"d-flex align-items-center"},A.createElement(f,null,"About")),A.createElement(u.a.Link,{href:"/blog/",className:"d-flex align-items-center"},A.createElement(f,null,"Blog")),A.createElement(u.a.Link,{href:"/projects/",className:"d-flex align-items-center"},A.createElement(f,null,"Projects")),A.createElement(u.a.Link,{href:"/photography/",className:"d-flex align-items-center"},A.createElement(f,null,"Photography"))))))},data:o})},x=a(155);t.a=function(e){return A.createElement(r.b,{query:"755544856",render:function(t){return A.createElement(A.Fragment,null,A.createElement(x.a,{title:e.title||t.site.siteMetadata.title}),A.createElement(h,{siteTitle:t.site.siteMetadata.title}),A.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},A.createElement("main",null,e.children),A.createElement(l,null)))},data:n})}},172:function(e,t,a){"use strict";var n=a(0),r=a(160);t.a=function(){return n.createElement(r.a,{title:"Coming Soon"},n.createElement("h1",null,"Coming Soon..."))}}}]);
//# sourceMappingURL=component---src-pages-photography-tsx-a159f4df7c76be4377d1.js.map