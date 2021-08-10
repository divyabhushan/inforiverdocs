"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[3936],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return f}});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},u=Object.keys(t);for(l=0;l<u.length;l++)n=u[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(l=0;l<u.length;l++)n=u[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=l.createContext({}),s=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return l.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,u=t.originalType,i=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),k=s(n),f=r,m=k["".concat(i,".").concat(f)]||k[f]||c[f]||u;return n?l.createElement(m,o(o({ref:e},d),{},{components:n})):l.createElement(m,o({ref:e},d))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var u=n.length,o=new Array(u);o[0]=k;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=t,a.mdxType="string"==typeof t?t:r,o[1]=a;for(var s=2;s<u;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6742:function(t,e,n){n.d(e,{Z:function(){return c}});var l=n(3366),r=n(7294),u=n(3727),o=n(3919),a=n(412),i=(0,r.createContext)({collectLink:function(){}}),s=n(4996),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var c=function(t){var e,n,c,k=t.isNavLink,f=t.to,m=t.href,h=t.activeClassName,v=t.isActive,p=t["data-noBrokenLinkCheck"],g=t.autoAddBaseUrl,R=void 0===g||g,E=(0,l.Z)(t,d),T=(0,s.C)().withBaseUrl,b=(0,r.useContext)(i),O=f||m,y=(0,o.Z)(O),Z=null==O?void 0:O.replace("pathname://",""),A=void 0!==Z?(n=Z,R&&function(t){return t.startsWith("/")}(n)?T(n):n):void 0,N=(0,r.useRef)(!1),x=k?u.OL:u.rU,L=a.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!L&&y&&null!=A&&window.docusaurus.prefetch(A),function(){L&&c&&c.disconnect()}}),[A,L,y]);var C=null!==(e=null==A?void 0:A.startsWith("#"))&&void 0!==e&&e,w=!A||!y||C;return A&&y&&!C&&!p&&b.collectLink(A),w?r.createElement("a",Object.assign({href:A},O&&!y&&{target:"_blank",rel:"noopener noreferrer"},E)):r.createElement(x,Object.assign({},E,{onMouseEnter:function(){N.current||null==A||(window.docusaurus.preload(A),N.current=!0)},innerRef:function(t){var e,n;L&&t&&y&&(e=t,n=function(){null!=A&&window.docusaurus.prefetch(A)},(c=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(c.unobserve(e),c.disconnect(),n())}))}))).observe(e))},to:A||""},k&&{isActive:v,activeClassName:h}))}},3919:function(t,e,n){function l(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!l(t)}n.d(e,{b:function(){return l},Z:function(){return r}})},4996:function(t,e,n){n.d(e,{C:function(){return u},Z:function(){return o}});var l=n(2263),r=n(3919);function u(){var t=(0,l.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,u=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,l){var u=void 0===l?{}:l,o=u.forcePrependBaseUrl,a=void 0!==o&&o,i=u.absolute,s=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;var d=n.startsWith(e)?n:e+n.replace(/^\//,"");return s?t+d:d}(u,n,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,u().withBaseUrl)(t,e)}},6755:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return f}});var l=n(7462),r=n(3366),u=(n(7294),n(3905)),o=n(4996),a=n(6742),i=["components"],s={id:"formula-list",title:"List of Formulas and Functions",hide_title:!0,slug:"/"},d={unversionedId:"formula-list",id:"formula-list",isDocsHomePage:!1,title:"List of Formulas and Functions",description:"Logical Functions",source:"@site/docs/formula-list.mdx",sourceDirName:".",slug:"/",permalink:"/",version:"current",frontMatter:{id:"formula-list",title:"List of Formulas and Functions",hide_title:!0,slug:"/"},sidebar:"functionSideBar",next:{title:"IF",permalink:"/references/formulas/if"}},c=[{value:"Logical Functions",id:"logical-functions",children:[]},{value:"Logical Operators",id:"logical-operators",children:[]},{value:"Text Formatting Functions",id:"text-formatting-functions",children:[]},{value:"Math Functions",id:"math-functions",children:[]},{value:"Other Operators",id:"other-operators",children:[]},{value:"Identifiers",id:"identifiers",children:[]}],k={toc:c};function f(t){var e=t.components,n=(0,r.Z)(t,i);return(0,u.kt)("wrapper",(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"logical-functions"},"Logical Functions"),(0,u.kt)("table",{className:"table"},(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"NAME"),(0,u.kt)("th",null,"SYNTAX"),(0,u.kt)("th",null,"DESCRIPTION"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/if"),mdxType:"Link"},"IF")),(0,u.kt)("td",null,(0,u.kt)("code",null,"If( logical_test, value_if_true, value_if_false )")),(0,u.kt)("td",null,"Checks whether a condition is met, and returns one value if TRUE, and another value if FALSE")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/switch"),mdxType:"Link"},"SWITCH")),(0,u.kt)("td",null,(0,u.kt)("code",null,"SWITCH ( expression, value1, result1, value2, result2, ... value_n, result_n [, default] )")),(0,u.kt)("td",null,"Evaluates; ;an expression against a list of values and returns the result corresponding to the first matching value. If there is no match, an  optional default value is returned.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/and"),mdxType:"Link"},"AND")),(0,u.kt)("td",null,(0,u.kt)("code",null,"AND( logical_test1, [logical_test2], ... )")),(0,u.kt)("td",null,"Checks whether all the arguments are TRUE, and returns TRUE if all arguments are TRUE")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/or"),mdxType:"Link"},"OR")),(0,u.kt)("td",null,(0,u.kt)("code",null,"OR( logical_test1, [logical_test2], ... )")),(0,u.kt)("td",null,"Checks whether any of the arguments are TRUE, and returns TRUE or FALSE. Returns FALSE only if all arguments are FALSE")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/not"),mdxType:"Link"},"NOT")),(0,u.kt)("td",null,(0,u.kt)("code",null,"NOT( logical_test )")),(0,u.kt)("td",null,"Changes FALSE to TRUE, or TRUE to FALSE")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/xor"),mdxType:"Link"},"XOR")),(0,u.kt)("td",null,(0,u.kt)("code",null,"XOR( logical_test1, [logical_test2], ... )")),(0,u.kt)("td",null,"Returns a logical 'Exclusive Or' of all arguments")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/isnumber"),mdxType:"Link"},"ISNUMBER")),(0,u.kt)("td",null,(0,u.kt)("code",null,"ISNUMBER(value)")),(0,u.kt)("td",null,"Checks whether value is a valid number")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/ifna"),mdxType:"Link"},"IFNA")),(0,u.kt)("td",null,(0,u.kt)("code",null,"IFNA(value1,value2)")),(0,u.kt)("td",null,"Return value2 if value1 is not number else returns value1")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/in"),mdxType:"Link"},"IN")),(0,u.kt)("td",null,(0,u.kt)("code",null,"IN(value,[Item1,Item2])")),(0,u.kt)("td",null,"Returns true if the given value is in list")))),(0,u.kt)("h2",{id:"logical-operators"},"Logical Operators"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,(0,u.kt)("strong",null,"OPERATORS")),(0,u.kt)("th",null,(0,u.kt)("strong",null,"DESCRIPTION")))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"&&"),(0,u.kt)("td",null,"Logical ",(0,u.kt)("a",{href:(0,o.Z)("references/formulas/and")},"AND"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"||"),(0,u.kt)("td",null,"Logical ",(0,u.kt)("a",{href:(0,o.Z)("references/formulas/or")},"OR"))))),(0,u.kt)("h2",{id:"text-formatting-functions"},"Text Formatting Functions"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"NAME"),(0,u.kt)("th",null,"SYNTAX"),(0,u.kt)("th",null,"DESCRIPTION"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/text"),mdxType:"Link"},"TEXT")),(0,u.kt)("td",null,(0,u.kt)("code",null,"TEXT(value, format)")),(0,u.kt)("td",null,"Format the value to the given format string")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/concatenate"),mdxType:"Link"},"CONCATENATE")),(0,u.kt)("td",null,(0,u.kt)("code",null,"CONCATENATE(string1, string2, ..)")),(0,u.kt)("td",null,"Concatenates all the arguments")))),(0,u.kt)("h2",{id:"math-functions"},"Math Functions"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"NAME"),(0,u.kt)("th",null,"SYNTAX"),(0,u.kt)("th",null,"DESCRIPTION"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/sum"),mdxType:"Link"},"SUM")),(0,u.kt)("td",null,(0,u.kt)("code",null,"Sum(value1,[value2]....)")),(0,u.kt)("td",null,"Add all numbers in the arguments, which can be numbers or cell references")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/average"),mdxType:"Link"},"AVERAGE")),(0,u.kt)("td",null,(0,u.kt)("code",null,"Average(value1,[value2]....)")),(0,u.kt)("td",null,"Returns the average (arithmetic mean) of its arguments, which can be numbers or cell references")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/averageexzero"),mdxType:"Link"},"AVERGAEEXZERO")),(0,u.kt)("td",null,(0,u.kt)("code",null,"AverageExZero(value1,[value2]....)")),(0,u.kt)("td",null,"Returns the average (arithmetic mean) of its arguments excluding zeros, which can be numbers or cell references")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/averageexneg"),mdxType:"Link"},"AVERAGEEXNEG")),(0,u.kt)("td",null,(0,u.kt)("code",null,"AverageExNeg(value1,[value2]....)")),(0,u.kt)("td",null,"Returns the average (arithmetic mean) of its arguments excluding negatives, which can be numbers or cell references")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/averageexzeroneg"),mdxType:"Link"},"AVERAGEEXZERONEG")),(0,u.kt)("td",null,(0,u.kt)("code",null,"AverageExZeroNeg(value1,[value2]....)")),(0,u.kt)("td",null,"Returns the average (arithmetic mean) of its arguments excluding zeros and negatives, which can be numbers or cell references")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/countif"),mdxType:"Link"},"COUNTIF")),(0,u.kt)("td",null,(0,u.kt)("code",null,"Count(list, condition)")),(0,u.kt)("td",null,"Returns the count of item matches the condition")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/abs"),mdxType:"Link"},"ABS")),(0,u.kt)("td",null,(0,u.kt)("code",null,"ABS(value)")),(0,u.kt)("td",null,"Returns the absolute value of a number, a number without its sign")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/min"),mdxType:"Link"},"MIN")),(0,u.kt)("td",null,(0,u.kt)("code",null,"Min(value1,[value2]....)")),(0,u.kt)("td",null,"Returns the smallest number in a set of values. Cell references also accepted as arguments")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/max"),mdxType:"Link"},"MAX")),(0,u.kt)("td",null,(0,u.kt)("code",null,"Max(value1,[value2]....)")),(0,u.kt)("td",null,"Returns the largest number in a set of values. Cell references also accepted as arguments")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/power"),mdxType:"Link"},"POWER")),(0,u.kt)("td",null,(0,u.kt)("code",null,"POW(value,power)")),(0,u.kt)("td",null,"Returns the result of a number raised to a power")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/sqrt"),mdxType:"Link"},"SQRT")),(0,u.kt)("td",null,(0,u.kt)("code",null,"SQRT(value)")),(0,u.kt)("td",null,"Returns the square root of a number")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/exp"),mdxType:"Link"},"EXP")),(0,u.kt)("td",null,(0,u.kt)("code",null,"EXP(value)")),(0,u.kt)("td",null,"Returns e raised to the power of a given number")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/log"),mdxType:"Link"},"LOG")),(0,u.kt)("td",null,(0,u.kt)("code",null,"LOG(value,base)")),(0,u.kt)("td",null,"Returns the logarithm of a number to the base you specify")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/round"),mdxType:"Link"},"ROUND")),(0,u.kt)("td",null,(0,u.kt)("code",null,"ROUND(value, significance)")),(0,u.kt)("td",null,"Returns the round of a number")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/ceiling"),mdxType:"Link"},"CEILING")),(0,u.kt)("td",null,(0,u.kt)("code",null,"CEILING(value, significance)")),(0,u.kt)("td",null,"Round a number up to nearest highest multiple")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)(a.Z,{to:(0,o.Z)("references/formulas/floor"),mdxType:"Link"},"FLOOR")),(0,u.kt)("td",null,(0,u.kt)("code",null,"FLOOR(value, significance)")),(0,u.kt)("td",null,"Round up a number up to nearest lowest multiple")))),(0,u.kt)("h2",{id:"other-operators"},"Other Operators"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"OPERATORS"),(0,u.kt)("th",null,"DESCRIPTION"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"()"),(0,u.kt)("td",null,"Parenthesis")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"+, -"),(0,u.kt)("td",null,"plus,minus(-1) sign")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"*, /"),(0,u.kt)("td",null,"Multiplication, Division")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"+, -"),(0,u.kt)("td",null,"Addition, Subtraction")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"==, !="),(0,u.kt)("td",null,"Equal to, Not equal to")),(0,u.kt)("tr",null,(0,u.kt)("td",null,">, >="),(0,u.kt)("td",null,"Greater than, Greater than or equal to")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"<, <="),(0,u.kt)("td",null,"Less than, Less than or equal to")))),(0,u.kt)("h2",{id:"identifiers"},"Identifiers"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"IDENTIFIER"),(0,u.kt)("th",null,"Usage"),(0,u.kt)("th",null,"DESCRIPTION"),(0,u.kt)("th",null,"Example"),(0,u.kt)("th",null,"Explanation"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"COLUMN_ID"),(0,u.kt)("td",null,"Calculated Column Formula"),(0,u.kt)("td",null,"Represents the particular column, used in column formula"),(0,u.kt)("td",null,"AC + PY"),(0,u.kt)("td",null,"Returns the sum of the column AC and PY")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"ROW_ID"),(0,u.kt)("td",null,"Calculated Row Formula"),(0,u.kt)("td",null,"Represents the particular row, used in row formula"),(0,u.kt)("td",null,"R_WEST.R_URBAN + R_EAST.R_URBAN"),(0,u.kt)("td",null,"Returns the sum row Urban under West and East")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"COLUMN"),(0,u.kt)("td",null,"Calculated Row Formula"),(0,u.kt)("td",null,"Represents the active column in row calculation"),(0,u.kt)("td",null,'IF(COLUMN == "AC", 5000, 6000)'),(0,u.kt)("td",null,"On using in the row formula, returns 5000 for AC column and 6000 for other columns")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"ROW.PARENT"),(0,u.kt)("td",null,"Calculated Column Formula, Used along with identifier PARENT and "),(0,u.kt)("td",null,"Represents the active row in column calculation"),(0,u.kt)("td",null,"ROW.PARENT.AC + ROW.PARENT.PY"),(0,u.kt)("td",null,"For each row it adds the value of its parent row's AC column and PY column")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"PARENT(Chaining)"),(0,u.kt)("td",null,"Calculated Column Formula, Used along with identifier PARENT and "),(0,u.kt)("td",null,"Multiple chaining of PARENT is possible"),(0,u.kt)("td",null,"ROW.PARENT.PARENT.AC + ROW.PARENT.PARENT.PY"),(0,u.kt)("td",null,"For each row it adds the value of its grandparent row's AC column and PY column")))))}f.isMDXComponent=!0}}]);