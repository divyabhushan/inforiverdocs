(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[3861],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(9756),a=n(7294),o=n(3727),i=n(3919),u=n(412),l=(0,a.createContext)({collectLink:function(){}}),c=n(4996);var s=function(e){var t,n,s,f=e.isNavLink,p=e.to,d=e.href,m=e.activeClassName,v=e.isActive,g=e["data-noBrokenLinkCheck"],k=e.autoAddBaseUrl,b=void 0===k||k,h=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=(0,c.C)().withBaseUrl,O=(0,a.useContext)(l),N=p||d,w=(0,i.Z)(N),C=null==N?void 0:N.replace("pathname://",""),x=void 0!==C?(n=C,b&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,j=(0,a.useRef)(!1),E=f?o.OL:o.rU,L=u.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!L&&w&&null!=x&&window.docusaurus.prefetch(x),function(){L&&s&&s.disconnect()}}),[x,L,w]);var P=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,T=!x||!w||P;return x&&w&&!P&&!g&&O.collectLink(x),T?a.createElement("a",Object.assign({href:x},N&&!w&&{target:"_blank",rel:"noopener noreferrer"},h)):a.createElement(E,Object.assign({},h,{onMouseEnter:function(){j.current||null==x||(window.docusaurus.preload(x),j.current=!0)},innerRef:function(e){var t,n;L&&e&&w&&(t=e,n=function(){null!=x&&window.docusaurus.prefetch(x)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),n())}))}))).observe(t))},to:x||""},f&&{isActive:v,activeClassName:m}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(2263),a=n(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,u=void 0!==i&&i,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(u)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},4063:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=(n(4996),n(6742),{id:"floor",title:"FLOOR"}),u={unversionedId:"references/formulas/floor",id:"references/formulas/floor",isDocsHomePage:!1,title:"FLOOR",description:"The FLOOR function rounds a given number down to the nearest significance multiple.",source:"@site/docs/references/formulas/floor.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/floor",permalink:"/inforiverdocs/references/formulas/floor",version:"current",frontMatter:{id:"floor",title:"FLOOR"},sidebar:"functionSideBar",previous:{title:"CEILING",permalink:"/inforiverdocs/references/formulas/ceiling"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],c={toc:l};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"FLOOR")," function rounds a given number down to the nearest significance multiple."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"FLOOR (number, significance)\n")),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"number")," - The number that should be rounded.\n",(0,o.kt)("strong",{parentName:"p"},"significance")," - The multiple to use when rounding."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"To round each value in 'COLUMN1' to the lowest multiple value of column 'Function', use the formula as:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"COLUMN1"),(0,o.kt)("th",{parentName:"tr",align:null},"Formula"),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Result")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"10"),(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"8.00")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2.5"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"2.00")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.156"),(0,o.kt)("td",{parentName:"tr",align:null},"0.01"),(0,o.kt)("td",{parentName:"tr",align:null},"0.15")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"36"),(0,o.kt)("td",{parentName:"tr",align:null},"7"),(0,o.kt)("td",{parentName:"tr",align:null},"35.00")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-5.5"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"-6.00")))))}s.isMDXComponent=!0}}]);