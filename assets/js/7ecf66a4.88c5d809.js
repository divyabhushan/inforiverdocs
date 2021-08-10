"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[2606],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6742:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(3366),a=n(7294),i=n(3727),o=n(3919),u=n(412),l=(0,a.createContext)({collectLink:function(){}}),c=n(4996),s=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f,p=e.isNavLink,d=e.to,m=e.href,v=e.activeClassName,k=e.isActive,h=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,b=void 0===g||g,y=(0,r.Z)(e,s),N=(0,c.C)().withBaseUrl,O=(0,a.useContext)(l),w=d||m,C=(0,o.Z)(w),x=null==w?void 0:w.replace("pathname://",""),E=void 0!==x?(n=x,b&&function(e){return e.startsWith("/")}(n)?N(n):n):void 0,j=(0,a.useRef)(!1),T=p?i.OL:i.rU,U=u.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!U&&C&&null!=E&&window.docusaurus.prefetch(E),function(){U&&f&&f.disconnect()}}),[E,U,C]);var I=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,P=!E||!C||I;return E&&C&&!I&&!h&&O.collectLink(E),P?a.createElement("a",Object.assign({href:E},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},y)):a.createElement(T,Object.assign({},y,{onMouseEnter:function(){j.current||null==E||(window.docusaurus.preload(E),j.current=!0)},innerRef:function(e){var t,n;U&&e&&C&&(t=e,n=function(){null!=E&&window.docusaurus.prefetch(E)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:E||""},p&&{isActive:k,activeClassName:v}))}},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,u=void 0!==o&&o,l=i.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(u)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},5692:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=(n(4996),n(6742),["components"]),u={id:"countif",title:"COUNTIF"},l={unversionedId:"references/formulas/countif",id:"references/formulas/countif",isDocsHomePage:!1,title:"COUNTIF",description:"The COUNTIF function returns the count of item matching the condition.",source:"@site/docs/references/formulas/countif.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/countif",permalink:"/references/formulas/countif",version:"current",frontMatter:{id:"countif",title:"COUNTIF"},sidebar:"functionSideBar",previous:{title:"AVERAGEEXZERONEG",permalink:"/references/formulas/averageexzeroneg"},next:{title:"ABS",permalink:"/references/formulas/abs"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]},{value:"Returns",id:"returns",children:[]}],s={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"COUNTIF")," function returns the count of item matching the condition."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"COUNTIF([list],condition)\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"To get the count of columns with value lesser than 200, use the formula as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'COUNTIF([Sales,Finance,Inventory],"<200")\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Sales"),(0,i.kt)("th",{parentName:"tr",align:null},"Finance"),(0,i.kt)("th",{parentName:"tr",align:null},"Inventory"),(0,i.kt)("th",{parentName:"tr",align:null},"COUNTIF"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"-389"),(0,i.kt)("td",{parentName:"tr",align:null},"100"),(0,i.kt)("td",{parentName:"tr",align:null},"199"),(0,i.kt)("td",{parentName:"tr",align:null},"3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"201"),(0,i.kt)("td",{parentName:"tr",align:null},"1000"),(0,i.kt)("td",{parentName:"tr",align:null},"145"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"783"),(0,i.kt)("td",{parentName:"tr",align:null},"150"),(0,i.kt)("td",{parentName:"tr",align:null},"9091"),(0,i.kt)("td",{parentName:"tr",align:null},"1")))),(0,i.kt)("h2",{id:"returns"},"Returns"),(0,i.kt)("p",null,"The formula returns an integer."))}f.isMDXComponent=!0}}]);