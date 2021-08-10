"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[3861],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6742:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(3366),a=n(7294),o=n(3727),i=n(3919),l=n(412),u=(0,a.createContext)({collectLink:function(){}}),c=n(4996),s=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f,p=e.isNavLink,d=e.to,m=e.href,v=e.activeClassName,g=e.isActive,k=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,h=void 0===b||b,y=(0,r.Z)(e,s),O=(0,c.C)().withBaseUrl,N=(0,a.useContext)(u),w=d||m,C=(0,i.Z)(w),x=null==w?void 0:w.replace("pathname://",""),j=void 0!==x?(n=x,h&&function(e){return e.startsWith("/")}(n)?O(n):n):void 0,E=(0,a.useRef)(!1),L=p?o.OL:o.rU,P=l.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!P&&C&&null!=j&&window.docusaurus.prefetch(j),function(){P&&f&&f.disconnect()}}),[j,P,C]);var T=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,R=!j||!C||T;return j&&C&&!T&&!k&&N.collectLink(j),R?a.createElement("a",Object.assign({href:j},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},y)):a.createElement(L,Object.assign({},y,{onMouseEnter:function(){E.current||null==j||(window.docusaurus.preload(j),E.current=!0)},innerRef:function(e){var t,n;P&&e&&C&&(t=e,n=function(){null!=j&&window.docusaurus.prefetch(j)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:j||""},p&&{isActive:g,activeClassName:v}))}},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(2263),a=n(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,l=void 0!==i&&i,u=o.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},4063:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(4996),n(6742),["components"]),l={id:"floor",title:"FLOOR"},u={unversionedId:"references/formulas/floor",id:"references/formulas/floor",isDocsHomePage:!1,title:"FLOOR",description:"The FLOOR function rounds a given number down to the nearest significance multiple.",source:"@site/docs/references/formulas/floor.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/floor",permalink:"/references/formulas/floor",version:"current",frontMatter:{id:"floor",title:"FLOOR"},sidebar:"functionSideBar",previous:{title:"CEILING",permalink:"/references/formulas/ceiling"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],s={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"FLOOR")," function rounds a given number down to the nearest significance multiple."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"FLOOR (number, significance)\n")),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"number")," - The number that should be rounded.\n",(0,o.kt)("strong",{parentName:"p"},"significance")," - The multiple to use when rounding."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"To round each value in 'COLUMN1' to the lowest multiple value of column 'Function', use the formula as:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"COLUMN1"),(0,o.kt)("th",{parentName:"tr",align:null},"Formula"),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Result")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"10"),(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"8.00")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2.5"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"2.00")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.156"),(0,o.kt)("td",{parentName:"tr",align:null},"0.01"),(0,o.kt)("td",{parentName:"tr",align:null},"0.15")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"36"),(0,o.kt)("td",{parentName:"tr",align:null},"7"),(0,o.kt)("td",{parentName:"tr",align:null},"35.00")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-5.5"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"-6.00")))))}f.isMDXComponent=!0}}]);