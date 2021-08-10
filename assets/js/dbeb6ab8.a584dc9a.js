"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[7156],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return r?t.createElement(d,o(o({ref:n},s),{},{components:r})):t.createElement(d,o({ref:n},s))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var l=2;l<a;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6742:function(e,n,r){r.d(n,{Z:function(){return f}});var t=r(3366),i=r(7294),a=r(3727),o=r(3919),u=r(412),c=(0,i.createContext)({collectLink:function(){}}),l=r(4996),s=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var n,r,f,p=e.isNavLink,m=e.to,d=e.href,v=e.activeClassName,b=e.isActive,h=e["data-noBrokenLinkCheck"],k=e.autoAddBaseUrl,y=void 0===k||k,g=(0,t.Z)(e,s),O=(0,l.C)().withBaseUrl,w=(0,i.useContext)(c),N=m||d,E=(0,o.Z)(N),C=null==N?void 0:N.replace("pathname://",""),x=void 0!==C?(r=C,y&&function(e){return e.startsWith("/")}(r)?O(r):r):void 0,P=(0,i.useRef)(!1),j=p?a.OL:a.rU,B=u.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!B&&E&&null!=x&&window.docusaurus.prefetch(x),function(){B&&f&&f.disconnect()}}),[x,B,E]);var U=null!==(n=null==x?void 0:x.startsWith("#"))&&void 0!==n&&n,I=!x||!E||U;return x&&E&&!U&&!h&&w.collectLink(x),I?i.createElement("a",Object.assign({href:x},N&&!E&&{target:"_blank",rel:"noopener noreferrer"},g)):i.createElement(j,Object.assign({},g,{onMouseEnter:function(){P.current||null==x||(window.docusaurus.preload(x),P.current=!0)},innerRef:function(e){var n,r;B&&e&&E&&(n=e,r=function(){null!=x&&window.docusaurus.prefetch(x)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(n),f.disconnect(),r())}))}))).observe(n))},to:x||""},p&&{isActive:b,activeClassName:v}))}},3919:function(e,n,r){function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!t(e)}r.d(n,{b:function(){return t},Z:function(){return i}})},4996:function(e,n,r){r.d(n,{C:function(){return a},Z:function(){return o}});var t=r(2263),i=r(3919);function a(){var e=(0,t.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,t){var a=void 0===t?{}:t,o=a.forcePrependBaseUrl,u=void 0!==o&&o,c=a.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(u)return n+r;var s=r.startsWith(n)?r:n+r.replace(/^\//,"");return l?e+s:s}(a,r,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},5748:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var t=r(7462),i=r(3366),a=(r(7294),r(3905)),o=(r(4996),r(6742),["components"]),u={id:"isnumber",title:"ISNUMBER"},c={unversionedId:"references/formulas/isnumber",id:"references/formulas/isnumber",isDocsHomePage:!1,title:"ISNUMBER",description:"The ISNUMBER function checks if the value refers to a number.",source:"@site/docs/references/formulas/isnumber.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/isnumber",permalink:"/references/formulas/isnumber",version:"current",frontMatter:{id:"isnumber",title:"ISNUMBER"},sidebar:"functionSideBar",previous:{title:"XOR",permalink:"/references/formulas/xor"},next:{title:"IFNA",permalink:"/references/formulas/ifna"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Returns",id:"returns",children:[]}],s={toc:l};function f(e){var n=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ISNUMBER")," function checks if the value refers to a number."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"ISNUMBER(value)\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,"value: A Cell or a number"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To check every value in a column(Employee_id) is numeric, use the formula as:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"ISNUMBER(Employee_id)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'To set the value "0" if the expression ',(0,a.kt)("inlineCode",{parentName:"li"},"(AC-PY)/PY")," does not evaluates to a number, use the formula as:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"IF(ISNUMBER((AC-PY)/PY), (AC-PY)/PY , 0)\n")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AC-PY/PY")," if the value is a number else returns 0."))}f.isMDXComponent=!0}}]);