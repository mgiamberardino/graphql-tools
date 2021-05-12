(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[6686],{5318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return k}});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(a),k=n,u=m["".concat(i,".").concat(k)]||m[k]||c[k]||o;return a?r.createElement(u,l(l({ref:t},s),{},{components:a})):r.createElement(u,l({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,l[1]=d;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3958:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return i},default:function(){return s}});var r=a(9603),n=a(120),o=(a(7378),a(5318)),l={},d={unversionedId:"api/classes/loaders_code_file_src.codefileloader",id:"api/classes/loaders_code_file_src.codefileloader",isDocsHomePage:!1,title:"Class: CodeFileLoader",description:"loaders/code-file/src.CodeFileLoader",source:"@site/docs/api/classes/loaders_code_file_src.codefileloader.md",sourceDirName:"api/classes",slug:"/api/classes/loaders_code_file_src.codefileloader",permalink:"/docs/api/classes/loaders_code_file_src.codefileloader",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/classes/loaders_code_file_src.codefileloader.md",version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Class: CheckResultAndHandleErrors",permalink:"/docs/api/classes/delegate_src.checkresultandhandleerrors"},next:{title:"Class: ExpandAbstractTypes",permalink:"/docs/api/classes/delegate_src.expandabstracttypes"}},i=[{value:"Implements",id:"implements",children:[]},{value:"Table of contents",id:"table-of-contents",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"canLoad",id:"canload",children:[]},{value:"canLoadSync",id:"canloadsync",children:[]},{value:"load",id:"load",children:[]},{value:"loadSync",id:"loadsync",children:[]},{value:"loaderId",id:"loaderid",children:[]}]}],p={toc:i};function s(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../modules/loaders_code_file_src"},"loaders/code-file/src"),".CodeFileLoader"),(0,o.kt)("p",null,"This loader loads GraphQL documents and type definitions from code files\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-tag-pluck"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const documents = await loadDocuments('queries/*.js', {\n  loaders: [\n    new CodeFileLoader()\n  ]\n});\n")),(0,o.kt)("p",null,"Supported extensions include: ",(0,o.kt)("inlineCode",{parentName:"p"},".ts"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".tsx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".js"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".jsx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".vue")),(0,o.kt)("h2",{id:"implements"},"Implements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/modules/utils#universalloader"},(0,o.kt)("em",{parentName:"a"},"UniversalLoader")),"<",(0,o.kt)("a",{parentName:"li",href:"/docs/api/modules/code-file-loader#codefileloaderoptions"},(0,o.kt)("em",{parentName:"a"},"CodeFileLoaderOptions")),"\\",">")),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"constructors"},"Constructors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_code_file_src.codefileloader#constructor"},"constructor"))),(0,o.kt)("h3",{id:"methods"},"Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_code_file_src.codefileloader#canload"},"canLoad")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_code_file_src.codefileloader#canloadsync"},"canLoadSync")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_code_file_src.codefileloader#load"},"load")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_code_file_src.codefileloader#loadsync"},"loadSync")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_code_file_src.codefileloader#loaderid"},"loaderId"))),(0,o.kt)("h2",{id:"constructors-1"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new CodeFileLoader"),"(): ",(0,o.kt)("a",{parentName:"p",href:"loaders_code_file_src.codefileloader"},(0,o.kt)("em",{parentName:"a"},"CodeFileLoader"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"loaders_code_file_src.codefileloader"},(0,o.kt)("em",{parentName:"a"},"CodeFileLoader"))),(0,o.kt)("h2",{id:"methods-1"},"Methods"),(0,o.kt)("h3",{id:"canload"},"canLoad"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"canLoad"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"pointer"),": ",(0,o.kt)("em",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/code-file-loader#codefileloaderoptions"},(0,o.kt)("em",{parentName:"a"},"CodeFileLoaderOptions")),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<","boolean\\",">"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"pointer")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/code-file-loader#codefileloaderoptions"},(0,o.kt)("em",{parentName:"a"},"CodeFileLoaderOptions")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<","boolean\\",">"),(0,o.kt)("p",null,"Implementation of: UniversalLoader.canLoad"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/code-file/src/index.ts#L57"},"packages/loaders/code-file/src/index.ts:57")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"canloadsync"},"canLoadSync"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"canLoadSync"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"pointer"),": ",(0,o.kt)("em",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/code-file-loader#codefileloaderoptions"},(0,o.kt)("em",{parentName:"a"},"CodeFileLoaderOptions")),"): ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"pointer")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/code-file-loader#codefileloaderoptions"},(0,o.kt)("em",{parentName:"a"},"CodeFileLoaderOptions")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Implementation of: UniversalLoader.canLoadSync"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/code-file/src/index.ts#L76"},"packages/loaders/code-file/src/index.ts:76")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"load"},"load"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"load"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"pointer"),": ",(0,o.kt)("em",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/code-file-loader#codefileloaderoptions"},(0,o.kt)("em",{parentName:"a"},"CodeFileLoaderOptions")),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/utils_src.source"},(0,o.kt)("em",{parentName:"a"},"Source")),"\\",">"),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"pointer")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/code-file-loader#codefileloaderoptions"},(0,o.kt)("em",{parentName:"a"},"CodeFileLoaderOptions")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/utils_src.source"},(0,o.kt)("em",{parentName:"a"},"Source")),"\\",">"),(0,o.kt)("p",null,"Implementation of: UniversalLoader.load"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/code-file/src/index.ts#L92"},"packages/loaders/code-file/src/index.ts:92")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"loadsync"},"loadSync"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"loadSync"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"pointer"),": ",(0,o.kt)("em",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/code-file-loader#codefileloaderoptions"},(0,o.kt)("em",{parentName:"a"},"CodeFileLoaderOptions")),"): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/utils_src.source"},(0,o.kt)("em",{parentName:"a"},"Source"))),(0,o.kt)("h4",{id:"parameters-3"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"pointer")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/code-file-loader#codefileloaderoptions"},(0,o.kt)("em",{parentName:"a"},"CodeFileLoaderOptions")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/utils_src.source"},(0,o.kt)("em",{parentName:"a"},"Source"))),(0,o.kt)("p",null,"Implementation of: UniversalLoader.loadSync"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/code-file/src/index.ts#L135"},"packages/loaders/code-file/src/index.ts:135")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"loaderid"},"loaderId"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"loaderId"),"(): ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Implementation of: UniversalLoader.loaderId"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/code-file/src/index.ts#L53"},"packages/loaders/code-file/src/index.ts:53")))}s.isMDXComponent=!0}}]);