(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,n){"use strict";n.r(t);n(33),n(164);var r=n(0),a=n(153),i=n(166),o=n.n(i),l=function(e){return r.createElement(o.a,{src:e.path,alt:e.altText||"",style:{maxWidth:"200px",margin:0,padding:0},rounded:e.rounded,roundedCircle:e.circle})},u=function(e){return r.createElement("div",{style:{alignItems:"center",display:"flex",justifyContent:"center",margin:0,padding:0,width:"100%"}},r.createElement(l,e))},c=n(170),s=n.n(c),d=function(e,t){return e.toString()+t},f={fontSize:d(2.25,"em"),lineHeight:d(1.125,"em")},p={fontSize:d(3.25,"em"),lineHeight:d(1.125,"em")},m=function(e){return r.createElement("h3",{style:Object.assign({},f)},e.children)};t.default=function(){return r.createElement(a.a,null,r.createElement("h1",{style:Object.assign({},p,{width:"100%",textAlign:"center"})},"Hello, I'm Andrew."),r.createElement(u,{path:s.a,circle:!0}),r.createElement(m,null,"I am a programmer, photographer, guitar player, and maker currently living in Golden, Colorado."))}},147:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(32),u=n.n(l);n.d(t,"a",function(){return u.a});n(148);var c=a.a.createContext({}),s=function(e){return a.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,n){var r;e.exports=(r=n(151))&&r.default||r},149:function(e,t,n){"use strict";var r=n(152),a=n(147),i=n(0),o=n(155),l=n.n(o);t.a=function(e){return i.createElement(a.b,{query:"1025518380",render:function(t){var n=e.description||t.site.siteMetadata.description,r=e.keywords?e.keywords.join(", "):"",a=e.meta,o=[];return r.length>0&&o.concat({property:"keywords",content:r}),void 0!==a&&a.length>0&&o.concat(a),i.createElement(l.a,{htmlAttributes:{lang:e.lang},title:e.title,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{content:n,name:"description"},{content:e.title,property:"og:title"},{content:n,property:"og:description"},{content:"website",property:"og:type"},{content:"summary",name:"twitter:card"},{content:t.site.siteMetadata.author,name:"twitter:creator"},{content:e.title,name:"twitter:title"},{content:n,name:"twitter:description"}].concat(o)})},data:r})}},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Simms"}}}}},151:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(54),u=n(2),c=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Simms",description:"Programmer, photographer, guitar player and maker currently living in Golden, Colorado.",author:"@andrewdsimms"}}}}},153:function(e,t,n){"use strict";var r=n(150),a=n(147),i=n(0),o=(n(154),{brand_color:"#002233"}),l=function(e){return i.createElement("header",{style:{background:o.brand_color,marginBottom:"1.45rem"}},i.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.createElement("h1",{style:{margin:0}},i.createElement(a.a,{to:"/",style:{color:"white",textDecoration:"none"}},e.siteTitle))))},u=n(149);t.a=function(e){return i.createElement(a.b,{query:"755544856",render:function(t){return i.createElement(i.Fragment,null,i.createElement(u.a,{title:e.title||t.site.siteMetadata.title}),i.createElement(l,{siteTitle:t.site.siteMetadata.title}),i.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.createElement("main",null,e.children),i.createElement("footer",{style:{alignItems:"center",display:"flex",justifyContent:"center",marginTop:"1.45rem"}},"© ",(new Date).getFullYear(),i.createElement("a",{href:"https://github.com/simmsa",style:{paddingLeft:"1em"}},"Github"),i.createElement("a",{href:"https://twitter.com/andrewdsimms",style:{paddingLeft:"1em"}},"Twitter"))))},data:r})}},164:function(e,t,n){"use strict";n(165);var r=n(5),a=n(73),i=n(17),o=/./.toString,l=function(e){n(19)(RegExp.prototype,"toString",e,!0)};n(18)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?l(function(){var e=r(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?a.call(e):void 0)}):"toString"!=o.name&&l(function(){return o.call(this)})},165:function(e,t,n){n(17)&&"g"!=/./g.flags&&n(25).f(RegExp.prototype,"flags",{configurable:!0,get:n(73)})},166:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.default=void 0;var a=r(n(74)),i=r(n(76)),o=r(n(7)),l=r(n(167)),u=r(n(0)),c=n(168),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,n=e.className,r=e.fluid,o=e.rounded,c=e.roundedCircle,s=e.thumbnail,d=(0,i.default)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]),f=(0,l.default)(r&&t+"-fluid",o&&"rounded",c&&"rounded-circle",s&&t+"-thumbnail");return u.default.createElement("img",(0,a.default)({},d,{className:(0,l.default)(n,f)}))},t}(u.default.Component);s.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var d=(0,c.createBootstrapComponent)(s,"img");t.default=d,e.exports=t.default},167:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},168:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.createBootstrapComponent=function(e,t){"string"==typeof t&&(t={prefix:t});var n=e.prototype&&e.prototype.isReactComponent,r=t,i=r.prefix,u=r.forwardRefAs,c=void 0===u?n?"ref":"innerRef":u;return(0,o.default)(function(t,n){var r=(0,a.default)({},t);return r[c]=n,l.default.createElement(s,null,function(t){return l.default.createElement(e,(0,a.default)({},r,{bsPrefix:r.bsPrefix||t.get(i)||i}))})},{displayName:"Bootstrap("+(e.displayName||e.name)+")"})},t.default=t.ThemeConsumer=void 0;var a=r(n(74)),i=r(n(7)),o=r(n(169)),l=r(n(0)),u=l.default.createContext(new Map),c=u.Provider,s=u.Consumer;t.ThemeConsumer=s;var d=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).prefixes=new Map,Object.keys(t.props.prefixes).forEach(function(e){t.prefixes.set(e,t.props.prefixes[e])}),t}return(0,i.default)(t,e),t.prototype.render=function(){return l.default.createElement(c,{value:this.prefixes},this.props.children)},t}(l.default.Component);t.default=d},169:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=t.displayName,r=t.propTypes,i=t.defaultProps,o=t.allowFallback,l=void 0!==o&&o,u=function(t,n){return e(t,n)};return Object.assign(u,{displayName:n}),a.default.forwardRef||!l?Object.assign(a.default.forwardRef(u),{propTypes:r,defaultProps:i}):Object.assign(function(e){return u(e,null)},{displayName:n,propTypes:r,defaultProps:i})};var r,a=(r=n(0))&&r.__esModule?r:{default:r}},170:function(e,t,n){e.exports=n.p+"static/Andrew-Simms-cb0464da5ddb112e2c94f0cfb552615d.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-bb991e181c8967b19a91.js.map