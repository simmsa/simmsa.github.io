(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,n){"use strict";n.r(t);var a=n(148),r=n(0),l=n(155),i=n(150);t.default=function(){return r.createElement(l.a,null,r.createElement(i.a,{title:"Page two"}),r.createElement("h1",null,"Hi from the second page"),r.createElement("p",null,"Welcome to page 2"),r.createElement(a.a,{to:"/"},"Go back to the homepage"))}},148:function(e,t,n){"use strict";n.d(t,"b",function(){return m});var a=n(0),r=n.n(a),l=n(4),i=n.n(l),c=n(32),o=n.n(c);n.d(t,"a",function(){return o.a});n(149);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},150:function(e,t,n){"use strict";var a=n(154),r=n(148),l=n(0),i=n(161),c=n.n(i);t.a=function(e){return l.createElement(r.b,{query:"1025518380",render:function(t){var n=e.description||t.site.siteMetadata.description,a=e.keywords?e.keywords.join(", "):"",r=e.meta,i=[];return a.length>0&&i.concat({property:"keywords",content:a}),void 0!==r&&r.length>0&&i.concat(r),l.createElement(c.a,{htmlAttributes:{lang:e.lang},title:e.title,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{content:n,name:"description"},{content:e.title,property:"og:title"},{content:n,property:"og:description"},{content:"website",property:"og:type"},{content:"summary",name:"twitter:card"},{content:t.site.siteMetadata.author,name:"twitter:creator"},{content:e.title,name:"twitter:title"},{content:n,name:"twitter:description"}].concat(i)})},data:a})}},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Simms"}}}}},152:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),l=n(4),i=n.n(l),c=n(54),o=n(2),s=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Simms",description:"Programmer, photographer, guitar player and maker currently living in Golden, Colorado.",author:"@andrewdsimms"}}}}},155:function(e,t,n){"use strict";var a=n(151),r=n(148),l=n(0),i=(n(157),n(158),function(e){var t=void 0!==e.link&&e.link.length>0,n={letterSpacing:"1px"},a=function(e){return l.createElement("p",{className:"h6 mx-3 text-uppercase",style:n},l.createElement("small",null,e.text))},r=function(n){return t?l.createElement("a",{href:n.link},l.createElement(a,e)):l.createElement(a,n)};return l.createElement(function(t){return!0===e.hasSeparator?l.createElement("div",{className:"d-flex align-items-baseline"},l.createElement("small",{className:"text-muted"},"|"),l.createElement(r,t)):l.createElement(r,t)},e)}),c=function(){return l.createElement("footer",{className:"d-flex justify-content-center align-items-center"},l.createElement(i,{text:"© "+(new Date).getFullYear()}),l.createElement(i,{text:"Email",link:"mailto:simms.andrew@gmail.com",hasSeparator:!0}),l.createElement(i,{text:"Github",link:"https://github.com/simmsa",hasSeparator:!0}),l.createElement(i,{text:"Twitter",link:"https://twitter.com/andrewdsimms",hasSeparator:!0}))},o=n(160),s=n.n(o),m=n(159),u=n.n(m),d={brand_color:"#002233"},p=function(e){return l.createElement("span",{className:"font-weight-light text-uppercase",style:{fontWeight:200,letterSpacing:"1px"}},l.createElement("small",null,e.children))},E=function(e){return l.createElement("header",{style:{background:d.brand_color},className:"mb-5"},l.createElement(u.a,{variant:"dark",style:{backgroundColor:d.brand_color,margin:"0 auto",maxWidth:"960px"},className:"d-flex"},l.createElement(u.a.Brand,{href:"/",className:"flex-grow-1"},l.createElement(p,null,e.siteTitle)),l.createElement(s.a,null,l.createElement(s.a.Link,{href:"/blog/"},l.createElement(p,null,"Blog")),l.createElement(s.a.Link,{href:"/projects/"},l.createElement(p,null,"Projects")),l.createElement(s.a.Link,{href:"/photography/"},l.createElement(p,null,"Photography")))))},f=n(150);t.a=function(e){return l.createElement(r.b,{query:"755544856",render:function(t){return l.createElement(l.Fragment,null,l.createElement(f.a,{title:e.title||t.site.siteMetadata.title}),l.createElement(E,{siteTitle:t.site.siteMetadata.title}),l.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.createElement("main",null,e.children),l.createElement(c,null)))},data:a})}}}]);
//# sourceMappingURL=component---src-pages-page-2-tsx-f48a32e3d6eb219047ec.js.map