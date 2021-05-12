(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[2818],{5318:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9676:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var r=t(9603),o=t(120),a=(t(7378),t(5318)),l={id:"apollo-engine-loader",title:"@graphql-tools/apollo-engine-loader",sidebar_label:"apollo-engine-loader"},i={unversionedId:"api/modules/apollo-engine-loader",id:"api/modules/apollo-engine-loader",isDocsHomePage:!1,title:"@graphql-tools/apollo-engine-loader",description:"- ApolloEngineLoader",source:"@site/docs/api/modules/loaders_apollo_engine_src.md",sourceDirName:"api/modules",slug:"/api/modules/apollo-engine-loader",permalink:"/docs/api/modules/apollo-engine-loader",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/loaders_apollo_engine_src.md",version:"current",sidebar_label:"apollo-engine-loader",frontMatter:{id:"apollo-engine-loader",title:"@graphql-tools/apollo-engine-loader",sidebar_label:"apollo-engine-loader"},sidebar:"someSidebar",previous:{title:"@graphql-tools/wrap",permalink:"/docs/api/modules/wrap"},next:{title:"@graphql-tools/code-file-loader",permalink:"/docs/api/modules/code-file-loader"}},p=[{value:"Interfaces",id:"interfaces",children:[]},{value:"Variables",id:"variables",children:[]},{value:"Variables",id:"variables-1",children:[{value:"SCHEMA_QUERY",id:"schema_query",children:[]}]}],s={toc:p};function c(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_apollo_engine_src.apolloengineloader"},"ApolloEngineLoader"))),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_apollo_engine_src.apolloengineoptions"},"ApolloEngineOptions"))),(0,a.kt)("h3",{id:"variables"},"Variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/modules/apollo-engine-loader#schema_query"},"SCHEMA","_","QUERY"))),(0,a.kt)("h2",{id:"variables-1"},"Variables"),(0,a.kt)("h3",{id:"schema_query"},"SCHEMA","_","QUERY"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"SCHEMA","_","QUERY"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"\\n  query GetSchemaByTag($tag: String!, $id: ID!) {\\n    service(id: $id) {\\n      ... on Service {\\n        __typename\\n        schema(tag: $tag) {\\n          hash\\n          __schema: introspection {\\n            queryType {\\n              name\\n            }\\n            mutationType {\\n              name\\n            }\\n            subscriptionType {\\n              name\\n            }\\n            types(filter: { includeBuiltInTypes: true }) {\\n              ...IntrospectionFullType\\n            }\\n            directives {\\n              name\\n              description\\n              locations\\n              args {\\n                ...IntrospectionInputValue\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n\\n  fragment IntrospectionFullType on IntrospectionType {\\n    kind\\n    name\\n    description\\n    fields {\\n      name\\n      description\\n      args {\\n        ...IntrospectionInputValue\\n      }\\n      type {\\n        ...IntrospectionTypeRef\\n      }\\n      isDeprecated\\n      deprecationReason\\n    }\\n    inputFields {\\n      ...IntrospectionInputValue\\n    }\\n    interfaces {\\n      ...IntrospectionTypeRef\\n    }\\n    enumValues(includeDeprecated: true) {\\n      name\\n      description\\n      isDeprecated\\n      deprecationReason\\n    }\\n    possibleTypes {\\n      ...IntrospectionTypeRef\\n    }\\n  }\\n\\n  fragment IntrospectionInputValue on IntrospectionInputValue {\\n    name\\n    description\\n    type {\\n      ...IntrospectionTypeRef\\n    }\\n    defaultValue\\n  }\\n\\n  fragment IntrospectionTypeRef on IntrospectionType {\\n    kind\\n    name\\n    ofType {\\n      kind\\n      name\\n      ofType {\\n        kind\\n        name\\n        ofType {\\n          kind\\n          name\\n          ofType {\\n            kind\\n            name\\n            ofType {\\n              kind\\n              name\\n              ofType {\\n                kind\\n                name\\n                ofType {\\n                  kind\\n                  name\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n"')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"internal"))),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/apollo-engine/src/index.ts#L77"},"packages/loaders/apollo-engine/src/index.ts:77")))}c.isMDXComponent=!0}}]);