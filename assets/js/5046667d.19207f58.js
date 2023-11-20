"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[4275],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(911);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7686:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(911),r(4137));const o={},a="WebSockets",s={unversionedId:"server-docs/websockets",id:"server-docs/websockets",title:"WebSockets",description:"In Gamevault Backend Version 9.0.0, we introduced an exciting feature \u2013 WebSockets. These WebSockets provide an asynchronous and bidirectional gateway for interactive communication with clients. Our implementation is based on Socket.io, which itself relies on the WebSocket protocol.",source:"@site/docs/server-docs/websockets.md",sourceDirName:"server-docs",slug:"/server-docs/websockets",permalink:"/docs/server-docs/websockets",draft:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/websockets.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Images",permalink:"/docs/server-docs/images"},next:{title:"Setting up a GameVault Client",permalink:"/docs/client-docs/setup"}},c={},l=[{value:"Activities",id:"activities",level:2},{value:"Disabling Activities",id:"disabling-activities",level:3},{value:"Security",id:"security",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"websockets"},"WebSockets"),(0,i.kt)("p",null,"In Gamevault Backend Version 9.0.0, we introduced an exciting feature \u2013 WebSockets. These WebSockets provide an asynchronous and bidirectional gateway for interactive communication with clients. Our implementation is based on ",(0,i.kt)("a",{parentName:"p",href:"https://socket.io/"},"Socket.io"),", which itself relies on the WebSocket protocol."),(0,i.kt)("p",null,"WebSockets enable real-time communication between the server and clients. This means that not only can the server send data to clients when they ask for it, but the server can also initiate conversations with the clients."),(0,i.kt)("p",null,"To use this feature effectively, you need to ensure that Web-Socket Support is enabled on your machine, network, or reverse proxy."),(0,i.kt)("p",null,"The API is documented via AsyncAPI standard in ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/docs/async"),". However, please note that, at the time of writing, this documentation may not run on Docker due to a bug. If you encounter this issue, you can refer to the source code for manual implementation."),(0,i.kt)("h2",{id:"activities"},"Activities"),(0,i.kt)("p",null,"Starting from Gamevault Backend Version 9.0.0, Gamevault allows clients to share their current activities on the server. These activities provide valuable information about what users are doing, making the platform more interactive. Activities can include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User 1 is online."),(0,i.kt)("li",{parentName:"ul"},"User 2 is offline."),(0,i.kt)("li",{parentName:"ul"},"User 3 is playing Mindustry."),(0,i.kt)("li",{parentName:"ul"},"User 4 is marked as busy.")),(0,i.kt)("p",null,"Once a user reports his activity, it will propagate to all other users. Clients have the freedom to report their activities. If they don't, the server will display them as offline by default."),(0,i.kt)("h3",{id:"disabling-activities"},"Disabling Activities"),(0,i.kt)("p",null,"For server owners who wish to disable activities, it's as simple as setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_ONLINE_ACTIVITIES_DISABLED")," environment variable to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". Please be aware that, depending on your clients implementation, this might result in everyone appearing as offline all the time."),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("p",null,"Each user is assigned a randomly generated Socket Secret that they can retrieve at ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/users/me"),". This secret must be included in the headers (X-Socket-Secret) of every subsequent Socket.IO Handshake request to the server."))}d.isMDXComponent=!0}}]);