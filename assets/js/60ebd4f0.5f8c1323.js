"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},a="Recommended Folder Structure",l={unversionedId:"building-modules/structure",id:"building-modules/structure",title:"Recommended Folder Structure",description:"This document outlines the recommended structure of Cosmos SDK modules. These ideas are meant to be applied as suggestions. Application developers are encouraged to improve upon and contribute to module structure and development design.",source:"@site/docs/building-modules/10-structure.md",sourceDirName:"building-modules",slug:"/building-modules/structure",permalink:"/main/building-modules/structure",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Module Interfaces",permalink:"/main/building-modules/module-interfaces"},next:{title:"Errors",permalink:"/main/building-modules/errors"}},s={},d=[{value:"Structure",id:"structure",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"recommended-folder-structure"},"Recommended Folder Structure"),(0,i.kt)("admonition",{title:"Synopsis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This document outlines the recommended structure of Cosmos SDK modules. These ideas are meant to be applied as suggestions. Application developers are encouraged to improve upon and contribute to module structure and development design.")),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("p",null,"A typical Cosmos SDK module can be structured as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"proto\n\u2514\u2500\u2500 {project_name}\n \xa0\xa0 \u2514\u2500\u2500 {module_name}\n \xa0\xa0     \u2514\u2500\u2500 {proto_version}\n \xa0\xa0  \xa0\xa0     \u251c\u2500\u2500 {module_name}.proto\n \xa0\xa0  \xa0\xa0     \u251c\u2500\u2500 event.proto\n \xa0\xa0  \xa0\xa0     \u251c\u2500\u2500 genesis.proto\n \xa0\xa0  \xa0\xa0     \u251c\u2500\u2500 query.proto\n \xa0\xa0  \xa0\xa0     \u2514\u2500\u2500 tx.proto\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{module_name}.proto"),": The module's common message type definitions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event.proto"),": The module's message type definitions related to events."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"genesis.proto"),": The module's message type definitions related to genesis state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query.proto"),": The module's Query service and related message type definitions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tx.proto"),": The module's Msg service and related message type definitions.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"x/{module_name}\n\u251c\u2500\u2500 client\n\u2502\xa0\xa0 \u251c\u2500\u2500 cli\n\u2502\xa0\xa0 \u2502   \u251c\u2500\u2500 query.go\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tx.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 testutil\n\u2502\xa0\xa0     \u251c\u2500\u2500 cli_test.go\n\u2502\xa0\xa0     \u2514\u2500\u2500 suite.go\n\u251c\u2500\u2500 exported\n\u2502\xa0\xa0 \u2514\u2500\u2500 exported.go\n\u251c\u2500\u2500 keeper\n\u2502\xa0\xa0 \u251c\u2500\u2500 genesis.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 grpc_query.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 hooks.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 invariants.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 keeper.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 keys.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 msg_server.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 querier.go\n\u251c\u2500\u2500 module\n\u2502\xa0\xa0 \u2514\u2500\u2500 module.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 abci.go\n\u251c\u2500\u2500 simulation\n\u2502\xa0\xa0 \u251c\u2500\u2500 decoder.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 genesis.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 operations.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 params.go\n\u251c\u2500\u2500 {module_name}.pb.go\n\u251c\u2500\u2500 codec.go\n\u251c\u2500\u2500 errors.go\n\u251c\u2500\u2500 events.go\n\u251c\u2500\u2500 events.pb.go\n\u251c\u2500\u2500 expected_keepers.go\n\u251c\u2500\u2500 genesis.go\n\u251c\u2500\u2500 genesis.pb.go\n\u251c\u2500\u2500 keys.go\n\u251c\u2500\u2500 msgs.go\n\u251c\u2500\u2500 params.go\n\u251c\u2500\u2500 query.pb.go\n\u251c\u2500\u2500 tx.pb.go\n\u2514\u2500\u2500 README.md\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client/"),": The module's CLI client functionality implementation and the module's integration testing suite."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exported/"),": The module's exported types - typically interface types. If a module relies on keepers from another module, it is expected to receive the keepers as interface contracts through the ",(0,i.kt)("inlineCode",{parentName:"li"},"expected_keepers.go")," file (see below) in order to avoid a direct dependency on the module implementing the keepers. However, these interface contracts can define methods that operate on and/or return types that are specific to the module that is implementing the keepers and this is where ",(0,i.kt)("inlineCode",{parentName:"li"},"exported/")," comes into play. The interface types that are defined in ",(0,i.kt)("inlineCode",{parentName:"li"},"exported/")," use canonical types, allowing for the module to receive the keepers as interface contracts through the ",(0,i.kt)("inlineCode",{parentName:"li"},"expected_keepers.go")," file. This pattern allows for code to remain DRY and also alleviates import cycle chaos."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keeper/"),": The module's ",(0,i.kt)("inlineCode",{parentName:"li"},"Keeper")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"MsgServer")," implementation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"module/"),": The module's ",(0,i.kt)("inlineCode",{parentName:"li"},"AppModule")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"AppModuleBasic")," implementation.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"abci.go"),": The module's ",(0,i.kt)("inlineCode",{parentName:"li"},"BeginBlocker")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"EndBlocker")," implementations (this file is only required if ",(0,i.kt)("inlineCode",{parentName:"li"},"BeginBlocker")," and/or ",(0,i.kt)("inlineCode",{parentName:"li"},"EndBlocker")," need to be defined)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"simulation/"),": The module's ",(0,i.kt)("a",{parentName:"li",href:"/main/building-modules/simulator"},"simulation")," package defines functions used by the blockchain simulator application (",(0,i.kt)("inlineCode",{parentName:"li"},"simapp"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REAMDE.md"),": The module's specification documents outlining important concepts, state storage structure, and message and event type definitions. Learn more how to write module specs in the ",(0,i.kt)("a",{parentName:"li",href:"/main/spec/SPEC-SPEC"},"spec guidelines"),"."),(0,i.kt)("li",{parentName:"ul"},"The root directory includes type definitions for messages, events, and genesis state, including the type definitions generated by Protocol Buffers.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"codec.go"),": The module's registry methods for interface types."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"errors.go"),": The module's sentinel errors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"events.go"),": The module's event types and constructors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expected_keepers.go"),": The module's ",(0,i.kt)("a",{parentName:"li",href:"/main/building-modules/keeper#type-definition"},"expected keeper")," interfaces."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"genesis.go"),": The module's genesis state methods and helper functions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keys.go"),": The module's store keys and associated helper functions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"msgs.go"),": The module's message type definitions and associated methods."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params.go"),": The module's parameter type definitions and associated methods."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*.pb.go"),": The module's type definitions generated by Protocol Buffers (as defined in the respective ",(0,i.kt)("inlineCode",{parentName:"li"},"*.proto")," files above).")))))}m.isMDXComponent=!0}}]);