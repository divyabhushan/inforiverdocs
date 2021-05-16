(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[7018],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5791:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a={id:"get",title:"GET"},c={unversionedId:"references/formulas/get",id:"references/formulas/get",isDocsHomePage:!1,title:"GET",description:"The GET function returns the value of the node corresponding to the period index that is specified.",source:"@site/docs/references/formulas/get.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/get",permalink:"/inforiverdocs/references/formulas/get",version:"current",frontMatter:{id:"get",title:"GET"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],l={toc:u};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," function returns the value of the node corresponding to the period index that is specified."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Get (period_index)\n")),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"period_index")," \u2013 An integer that is less than the number of periods defined in the model ."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Consider a scenario where you want to refer to last period value of the node Discount. "),(0,i.kt)("p",null,"To achieve this, the formula should be "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Discount.Get(12)\n")))}s.isMDXComponent=!0}}]);