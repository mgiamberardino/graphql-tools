(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[8725],{5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8124:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var n=r(9603),o=r(120),a=(r(7378),r(5318)),i={id:"relay-operation-optimizer",title:"@graphql-tools/relay-operation-optimizer",sidebar_label:"relay-operation-optimizer"},p={unversionedId:"api/modules/relay-operation-optimizer",id:"api/modules/relay-operation-optimizer",isDocsHomePage:!1,title:"@graphql-tools/relay-operation-optimizer",description:"- OptimizeDocumentsOptions",source:"@site/docs/api/modules/relay_operation_optimizer_src.md",sourceDirName:"api/modules",slug:"/api/modules/relay-operation-optimizer",permalink:"/docs/api/modules/relay-operation-optimizer",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/relay_operation_optimizer_src.md",version:"current",sidebar_label:"relay-operation-optimizer",frontMatter:{id:"relay-operation-optimizer",title:"@graphql-tools/relay-operation-optimizer",sidebar_label:"relay-operation-optimizer"},sidebar:"someSidebar",previous:{title:"@graphql-tools/optimize",permalink:"/docs/api/modules/optimize"},next:{title:"@graphql-tools/resolvers-composition",permalink:"/docs/api/modules/resolvers-composition"}},l=[{value:"Functions",id:"functions",children:[]},{value:"Type aliases",id:"type-aliases",children:[{value:"OptimizeDocumentsOptions",id:"optimizedocumentsoptions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"optimizeDocuments",id:"optimizedocuments",children:[]}]}],m={toc:l};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/modules/relay-operation-optimizer#optimizedocumentsoptions"},"OptimizeDocumentsOptions"))),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/modules/relay-operation-optimizer#optimizedocuments"},"optimizeDocuments"))),(0,a.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,a.kt)("h3",{id:"optimizedocumentsoptions"},"OptimizeDocumentsOptions"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"OptimizeDocumentsOptions"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/utils_src.schemaprintoptions"},(0,a.kt)("em",{parentName:"a"},"SchemaPrintOptions"))," & ParseOptions & { ",(0,a.kt)("inlineCode",{parentName:"p"},"includeFragments?"),": ",(0,a.kt)("em",{parentName:"p"},"boolean"),"  }"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/relay-operation-optimizer/src/index.ts#L13"},"packages/relay-operation-optimizer/src/index.ts:13")),(0,a.kt)("h2",{id:"functions-1"},"Functions"),(0,a.kt)("h3",{id:"optimizedocuments"},"optimizeDocuments"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"optimizeDocuments"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"schema"),": GraphQLSchema, ",(0,a.kt)("inlineCode",{parentName:"p"},"documents"),": DocumentNode[], ",(0,a.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/relay-operation-optimizer#optimizedocumentsoptions"},(0,a.kt)("em",{parentName:"a"},"OptimizeDocumentsOptions")),"): DocumentNode[]"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"schema")),(0,a.kt)("td",{parentName:"tr",align:"left"},"GraphQLSchema"),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"documents")),(0,a.kt)("td",{parentName:"tr",align:"left"},"DocumentNode[]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"options")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/api/modules/relay-operation-optimizer#optimizedocumentsoptions"},(0,a.kt)("em",{parentName:"a"},"OptimizeDocumentsOptions"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"{}")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," DocumentNode[]"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/relay-operation-optimizer/src/index.ts#L18"},"packages/relay-operation-optimizer/src/index.ts:18")))}s.isMDXComponent=!0}}]);