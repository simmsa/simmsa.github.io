(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});var n=a(0),r=a(164),l=a.n(r),i=a(160),A=a(170),c=a(171),o=(a(221),"3285212963");t.default=function(e){var t=e.data.markdownRemark;return n.createElement(i.a,{title:t.frontmatter.title},n.createElement("style",{type:"text/css"},"\n          li p {\n            margin-bottom: 0.25em;\n            padding-bottom: 0;\n          }\n          ol, ul {\n            margin-bottom: 1em;\n          }\n\n          ol ul {\n            margin-bottom: 1em;\n          }\n        "),n.createElement("h1",{className:"display-4"},t.frontmatter.title),n.createElement("div",{className:"mb-3"},n.createElement(c.a,{isMuted:!0},n.createElement(A.a,null,"Andrew Simms"),n.createElement(A.a,{hasSeparator:!0},t.frontmatter.date),n.createElement(A.a,{hasSeparator:!0},t.frontmatter.tags))),n.createElement(l.a,{fluid:t.frontmatter.hero.childImageSharp.fluid}),""!==t.frontmatter.hero_description?n.createElement("div",{className:"d-flex align-items-center justify-content-center mb-3 mt-1"},n.createElement(A.a,{isMuted:!0},t.frontmatter.hero_description)):null,n.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))}},152:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),A=a(32),c=a.n(A);a.d(t,"a",function(){return c.a});a(153);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},154:function(e,t,a){"use strict";t.a={brand_color:"#002233"}},155:function(e,t,a){"use strict";var n=a(159),r=a(152),l=a(0),i=a(169),A=a.n(i),c=a(154);t.a=function(e){return l.createElement(r.b,{query:"1025518380",render:function(t){var a=e.description||t.site.siteMetadata.description,n=e.keywords?e.keywords.join(", "):"",r=e.meta,i=[];return n.length>0&&i.concat({property:"keywords",content:n}),void 0!==r&&r.length>0&&i.concat(r),l.createElement(A.a,{htmlAttributes:{lang:e.lang},title:e.title,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{content:a,name:"description"},{content:e.title,property:"og:title"},{content:a,property:"og:description"},{content:"website",property:"og:type"},{content:"summary",name:"twitter:card"},{content:t.site.siteMetadata.author,name:"twitter:creator"},{content:e.title,name:"twitter:title"},{content:a,name:"twitter:description"},{content:c.a.brand_color,name:"msappliaction-TileColor"},{content:c.a.brand_color,name:"theme-color"}].concat(i),link:[{href:"/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"},{href:"/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"},{href:"/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"},{rel:"manifest",href:"/site.webmanifest"},{color:c.a.brand_color,href:"/safari-pinned-tab.svg",rel:"mask-icon"}]})},data:n})}},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Simms"}}}}},157:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),A=a(54),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(A.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},158:function(e){e.exports={data:{file:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAUABQDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABgcIBf/EABgBAQADAQAAAAAAAAAAAAAAAAUDBAYB/9oADAMBAAIQAxAAAAEmXIDKl1lJFZpLaMKcoPSZFbGolMVuUexf/8QAGxAAAwADAQEAAAAAAAAAAAAABAUGAgMHABL/2gAIAQEAAQUCftg5hNOX2bZ9uF+c6UUN1OKgFANhkz0k+kSyG/WeyzyeTHU7jRQf/8QAHxEAAQQCAwEBAAAAAAAAAAAAAQACAxEEEgUTMSGB/9oACAEDAQE/AcaDvl1WbgxwNtl/qpca+KPLG3h+LkhpC6hZWgCx2gRWnSySCnFdbHehf//EAB0RAAEEAwEBAAAAAAAAAAAAAAIAAQMEERIhE0H/2gAIAQIBAT8BsT+MeyqXJJXweFlXwkOs+PiovtK3UxKwRPLhRiETbC3V6mPGdf/EACUQAAIBBAEEAQUAAAAAAAAAAAECAwAEERIFISIxURQVQUJSwf/aAAgBAQAGPwI8ldOgJYJFv92/tRcXMY5YbltEZY9WjbHTI9VipbaeEvquyaNqQ3vNJ9TuPjpDOHWV5M+PA6UJ7aVJEYZV0OQasOHvpC1tHdgiH8Tqmwz761ccvwlikUz69367eceqUWnJ3MSv3FI5yBmv/8QAGxABAAMBAQEBAAAAAAAAAAAAAQARIVExYcH/2gAIAQEAAT8hOr8WRPhuBaIhvGt0/Qqv2CoJ47S0oQFGquOfsQeo2Aq3MmOthD6JLmzB0RB8B3krvFKXsi7c5PXZku9wZ//aAAwDAQACAAMAAAAQ3Xf4P//EAB4RAQACAQQDAAAAAAAAAAAAAAEAESEQMVFxQWGB/9oACAEDAQE/EHMdsWYhXbnQY0LLbUu2e6nric4Sr+RVSQOTL5hRKRzrGf/EABwRAQACAgMBAAAAAAAAAAAAAAEAETFRIUFxgf/aAAgBAgEBPxAG7TPg3jrUqxQutGs2GePIB2hn7r7ESyKW8HUUDNteag54E//EABsQAQEBAQEBAQEAAAAAAAAAAAERIQAxQWFx/9oACAEBAAE/EB3u+CqBuHoGahXiiPHmEDqrRajURvTPTmCimpU0NC00E+3nxKO1Ny1dIjU1KgCrXo+mifzqvT2rMaa4oxgdWaZTd97K4Ylh5LioFjNEhYfr61V7/9k=",width:30,height:30,src:"/static/cb0464da5ddb112e2c94f0cfb552615d/3f541/Andrew-Simms.jpg",srcSet:"/static/cb0464da5ddb112e2c94f0cfb552615d/3f541/Andrew-Simms.jpg 1x,\n/static/cb0464da5ddb112e2c94f0cfb552615d/7d2c5/Andrew-Simms.jpg 1.5x,\n/static/cb0464da5ddb112e2c94f0cfb552615d/c48cd/Andrew-Simms.jpg 2x,\n/static/cb0464da5ddb112e2c94f0cfb552615d/29a94/Andrew-Simms.jpg 3x"}}}}}},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Simms",description:"Programmer, photographer, guitar player and maker currently living in Golden, Colorado.",author:"@andrewdsimms"}}}}},160:function(e,t,a){"use strict";var n=a(156),r=a(152),l=a(0),i=(a(165),a(161),function(e){var t=void 0!==e.link&&e.link.length>0,a={letterSpacing:"1px"},n=function(e){return l.createElement("p",{className:"h6 mx-3 text-uppercase",style:a},l.createElement("small",null,e.text))},r=function(a){return t?l.createElement("a",{href:a.link},l.createElement(n,e)):l.createElement(n,a)};return l.createElement(function(t){return!0===e.hasSeparator?l.createElement("div",{className:"d-flex align-items-baseline"},l.createElement("small",{className:"text-muted"},"|"),l.createElement(r,t)):l.createElement(r,t)},e)}),A=function(e){return l.createElement("div",{className:"d-flex justify-content-center align-items-center mt-"+(e.marginTop||1)},e.children)},c=function(){return l.createElement("footer",{className:"mt-5"},l.createElement(A,null,l.createElement(i,{text:"© "+(new Date).getFullYear()+" Andrew Simms"})),l.createElement(A,null,l.createElement(i,{text:"Email",link:"mailto:simms.andrew@gmail.com"}),l.createElement(i,{text:"Github",link:"https://github.com/simmsa",hasSeparator:!0}),l.createElement(i,{text:"Twitter",link:"https://twitter.com/andrewdsimms",hasSeparator:!0})),l.createElement(A,null,l.createElement(i,{text:"Built With Gatsby",link:"https://www.gatsbyjs.org/"})))},o=(a(166),a(158)),m=a(164),s=a.n(m),d=a(168),u=a.n(d),E=a(167),g=a.n(E),p=a(154),f=function(e){return l.createElement("span",{className:(!1===e.isUppercase?"":"text-uppercase")+" small",style:{letterSpacing:!1===e.isUppercase?"0px":"1px"}},e.children)},h=function(e){return l.createElement(r.b,{query:"1658456242",render:function(t){return l.createElement("header",{style:{background:p.a.brand_color},className:"mb-5"},l.createElement(g.a,{variant:"dark",style:{backgroundColor:p.a.brand_color,margin:"0 auto",maxWidth:"960px"},className:"d-flex"},l.createElement(g.a.Brand,{href:"/",className:"d-flex flex-grow-1 align-items-center"},l.createElement(s.a,{fixed:t.file.childImageSharp.fixed,className:"rounded-circle mr-3",alt:"Andrew Simms"}),l.createElement(f,{isUppercase:!1},e.siteTitle)),l.createElement(u.a,null,l.createElement(u.a.Link,{href:"/about/",className:"d-flex align-items-center"},l.createElement(f,null,"About")),l.createElement(u.a.Link,{href:"/blog/",className:"d-flex align-items-center"},l.createElement(f,null,"Blog")),l.createElement(u.a.Link,{href:"/projects/",className:"d-flex align-items-center"},l.createElement(f,null,"Projects")),l.createElement(u.a.Link,{href:"/photography/",className:"d-flex align-items-center"},l.createElement(f,null,"Photography")))))},data:o})},x=a(155);t.a=function(e){return l.createElement(r.b,{query:"755544856",render:function(t){return l.createElement(l.Fragment,null,l.createElement(x.a,{title:e.title||t.site.siteMetadata.title}),l.createElement(h,{siteTitle:t.site.siteMetadata.title}),l.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.createElement("main",null,e.children),l.createElement(c,null)))},data:n})}},170:function(e,t,a){"use strict";a(161);var n=a(0);t.a=function(e){var t=void 0!==e.link&&e.link.length>0,a={letterSpacing:"1px"},r=function(t){return n.createElement("span",{className:"h6 text-uppercase",style:a},n.createElement("small",{className:e.isMuted?"text-muted":""},t.children))},l=function(a){return t?n.createElement("a",{href:a.link,className:e.hasSubtleLink||e.isMuted?"text-dark":""},n.createElement(r,e)):n.createElement(r,a)};return n.createElement("div",null,n.createElement(function(t){return!0===e.hasSeparator?n.createElement("span",null,n.createElement("small",{className:"text-muted px-2"},"|"),n.createElement(l,t)):n.createElement(l,t)},e))}},171:function(e,t,a){"use strict";a(33);var n=a(0);t.a=function(e){var t=Object.assign({},{bottom:1,left:0,right:0,top:1},e.margin),a=n.Children.map(e.children,function(t){return n.cloneElement(t,{isMuted:e.isMuted})});return n.createElement("div",{className:"d-flex flex-row mt-"+t.top+" mb-"+t.bottom+" mr-"+t.right+" ml-"+t.left+" justify-content-"+(e.justifyContent||"start")},e.isMuted?a:e.children)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-5d60be10d721ffa4591c.js.map