(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(153),i=n(149);t.default=function(){return a.createElement(r.a,null,a.createElement(i.a,{title:"404: Not found"}),a.createElement("h1",null,"NOT FOUND"),a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},147:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(32),l=n.n(c);n.d(t,"a",function(){return l.a});n(148);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},149:function(e,t,n){"use strict";var a=n(152),r=n(147),i=n(0),o=n(157),c=n.n(o);t.a=function(e){return i.createElement(r.b,{query:"1025518380",render:function(t){var n=e.description||t.site.siteMetadata.description,a=e.keywords?e.keywords.join(", "):"",r=e.meta,o=[];return a.length>0&&o.concat({property:"keywords",content:a}),void 0!==r&&r.length>0&&o.concat(r),i.createElement(c.a,{htmlAttributes:{lang:e.lang},title:e.title,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{content:n,name:"description"},{content:e.title,property:"og:title"},{content:n,property:"og:description"},{content:"website",property:"og:type"},{content:"summary",name:"twitter:card"},{content:t.site.siteMetadata.author,name:"twitter:creator"},{content:e.title,name:"twitter:title"},{content:n,name:"twitter:description"}].concat(o)})},data:a})}},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Simms"}}}}},151:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(54),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Simms",description:"Programmer, photographer, guitar player and maker currently living in Golden, Colorado.",author:"@andrewdsimms"}}}}},153:function(e,t,n){"use strict";var a=n(150),r=n(147),i=n(0),o=(n(156),n(159)),c=n.n(o),l=n(158),s=n.n(l),u={brand_color:"#002233"},d=function(e){return i.createElement("header",{style:{background:u.brand_color,marginBottom:"1.45rem"}},i.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.createElement("h1",{style:{margin:0}},i.createElement(r.a,{to:"/",style:{color:"white",textDecoration:"none"}},e.siteTitle))))},m=n(149);t.a=function(e){return i.createElement(r.b,{query:"755544856",render:function(t){return i.createElement(i.Fragment,null,i.createElement(m.a,{title:e.title||t.site.siteMetadata.title}),i.createElement(d,{siteTitle:t.site.siteMetadata.title}),i.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.createElement("main",null,e.children),i.createElement("footer",{style:{alignItems:"center",display:"flex",justifyContent:"center",marginTop:"1.45rem"}},i.createElement(s.a,{"aria-label":"Links to websites where Andrew posts content"},i.createElement(c.a,{variant:"link"},"© ",(new Date).getFullYear()),i.createElement(c.a,{variant:"link"},i.createElement("a",{href:"https://github.com/simmsa"},"Github")),i.createElement(c.a,{variant:"link"},i.createElement("a",{href:"https://twitter.com/andrewdsimms"},"Titter"))))))},data:a})}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-e82539a12695028a0ca2.js.map