"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[5731],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),g=o(n),c=r,s=g["".concat(p,".").concat(c)]||g[c]||d[c]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6741:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},metadata:function(){return p},toc:function(){return o},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],u={id:"averageexzero",title:"AVERAGEEXZERO"},p={unversionedId:"references/formulas/averageexzero",id:"references/formulas/averageexzero",isDocsHomePage:!1,title:"AVERAGEEXZERO",description:"The AVERAGEEXZERO function returns the average (arithmetic mean) of its arguments excluding zeros, which can be numbers or node references.",source:"@site/docs/references/formulas/averageexzero.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/averageexzero",permalink:"/references/formulas/averageexzero",version:"current",frontMatter:{id:"averageexzero",title:"AVERAGEEXZERO"},sidebar:"functionSideBar",previous:{title:"AVERAGE",permalink:"/references/formulas/average"},next:{title:"AVERAGEEXNEG",permalink:"/references/formulas/averageexneg"}},o=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],m={toc:o};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"AVERAGEEXZERO")," function returns the average (arithmetic mean) of its arguments excluding zeros, which can be numbers or node references."),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"AVERAGEEXZERO (value1,[value2]....)\n")),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"value1")," \u2013 The first cell value or number to be averaged. This is a required argument."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"value2, \u2026"),"  \u2013 The additional cells or numbers to be averaged. These are optional arguments."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Consider sales of a particular product across different regions East, South, Central and West.\nAssume that if the sales for a particular period is zero, and the product was withdrawn from the market and hence that region need not be considered when calculating average sales.  "),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Average Sales")," is then calculated as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"AVERAGEEXZERO (East, South, Central, West)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Region"),(0,l.kt)("th",{parentName:"tr",align:null},"Jan"),(0,l.kt)("th",{parentName:"tr",align:null},"Feb"),(0,l.kt)("th",{parentName:"tr",align:null},"Mar"),(0,l.kt)("th",{parentName:"tr",align:null},"Apr"),(0,l.kt)("th",{parentName:"tr",align:null},"May"),(0,l.kt)("th",{parentName:"tr",align:null},"Jun"),(0,l.kt)("th",{parentName:"tr",align:null},"Jul"),(0,l.kt)("th",{parentName:"tr",align:null},"Aug"),(0,l.kt)("th",{parentName:"tr",align:null},"Sep"),(0,l.kt)("th",{parentName:"tr",align:null},"Oct"),(0,l.kt)("th",{parentName:"tr",align:null},"Nov"),(0,l.kt)("th",{parentName:"tr",align:null},"Dec"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"East"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"120"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"South"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"175"),(0,l.kt)("td",{parentName:"tr",align:null},"175"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"175")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Central"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"175")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"West"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"175"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"175"),(0,l.kt)("td",{parentName:"tr",align:null},"175"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,"Average Sales")),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"137.5"),(0,l.kt)("td",{parentName:"tr",align:null},"156.25"),(0,l.kt)("td",{parentName:"tr",align:null},"131.25"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"165"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"156.33"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"162.5"),(0,l.kt)("td",{parentName:"tr",align:null},"175")))),(0,l.kt)("h2",{id:"excel-equivalent"},"Excel Equivalent"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://support.office.com/en-us/article/AVERAGE-function-047BAC88-D466-426C-A32B-8F33EB960CF6"},"AVERAGE")))}d.isMDXComponent=!0}}]);