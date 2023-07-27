"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[452],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(1163),r=(n(9496),n(9613));const i={sidebar_position:2},l="File and Folder Structure",o={unversionedId:"server-docs/structure",id:"server-docs/structure",title:"File and Folder Structure",description:"If you want to set up a GameVault Server, you need to pay attention to the file and folder structure. The files volume that you map into the container must contain compressed archives with games. These games must be in one of the supported archive formats, and they must follow a specific naming convention in order to be detected correctly by GameVault.",source:"@site/docs/server-docs/structure.md",sourceDirName:"server-docs",slug:"/server-docs/structure",permalink:"/docs/server-docs/structure",draft:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/structure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/server-docs/configuration"},next:{title:"Adding Games to GameVault",permalink:"/docs/server-docs/adding-games"}},p={},m=[{value:"Supported Archive Formats",id:"supported-archive-formats",level:2},{value:"Naming Convention for Games",id:"naming-convention-for-games",level:2},{value:"Other Examples",id:"other-examples",level:3}],s={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"file-and-folder-structure"},"File and Folder Structure"),(0,r.kt)("p",null,"If you want to set up a GameVault Server, you need to pay attention to the file and folder structure. The files volume that you map into the container must contain compressed archives with games. These games must be in one of the supported archive formats, and they must follow a specific naming convention in order to be detected correctly by GameVault."),(0,r.kt)("h2",{id:"supported-archive-formats"},"Supported Archive Formats"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".zip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".7z")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".zip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".7z")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".rar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".tar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".tar.gz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".tar.bz2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".tar.xz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".tgz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".tbz2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".txz"))),(0,r.kt)("h2",{id:"naming-convention-for-games"},"Naming Convention for Games"),(0,r.kt)("p",null,"The name of each game file must follow this format:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Gamename (vVersion) (EA) (ReleaseYear).zip")),(0,r.kt)("p",null,"Note that the parentheses must be included, and the naming convention is ",(0,r.kt)("strong",{parentName:"p"},"case sensitive"),"."),(0,r.kt)("p",null,"Here's an explanation of each part of the naming convention:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Part"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value(s)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Gamename")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the game"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Far Cry 6"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"HITMAN 3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Version")),(0,r.kt)("td",{parentName:"tr",align:null},"An optional version tag that must begin with a lowercase ",(0,r.kt)("inlineCode",{parentName:"td"},"v")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(v1.0)"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"(v1.224)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"EA")),(0,r.kt)("td",{parentName:"tr",align:null},"An optional tag that indicates whether the game is in Early Access"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(EA)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ReleaseYear")),(0,r.kt)("td",{parentName:"tr",align:null},"The year of the game's release, for accurate detection"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(2021)"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"(2019)"))))),(0,r.kt)("p",null,"Here's an example of a full game name that follows this convention:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Far Cry 6 (v1.5.0) (2021).zip")),(0,r.kt)("p",null,"By following this naming convention and using the common values listed in the table above, you can ensure that your games are detected correctly by GameVault."),(0,r.kt)("h3",{id:"other-examples"},"Other Examples"),(0,r.kt)("p",null,"Here are some other valid examples of game names that follow the naming convention:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Star Wars Jedi - Fallen Order(v1.0.10.0) (2019).zip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HITMAN 3 (v3.10.1) (2021).7z")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"The Wandering Village (v0.1.32) (EA) (2022).zip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Saints Row (2022).zip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Stray (2022).7z")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Captain of Industry (v0.4.12b) (EA) (2022).zip"))))}d.isMDXComponent=!0}}]);