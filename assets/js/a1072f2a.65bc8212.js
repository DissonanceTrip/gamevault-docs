"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[7650],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(911);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2564:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(911),a(4137));const l={sidebar_position:98},i="GUI",o={unversionedId:"client-docs/gui",id:"client-docs/gui",title:"GUI",description:"This page provides an overview of the Graphical User Interface (GUI) for GameVault. The GUI includes several tabs, each with its own set of functions",source:"@site/docs/client-docs/gui.md",sourceDirName:"client-docs",slug:"/client-docs/gui",permalink:"/docs/client-docs/gui",draft:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/client-docs/gui.md",tags:[],version:"current",sidebarPosition:98,frontMatter:{sidebar_position:98},sidebar:"docs",previous:{title:"Storage, Cache & Offline Usage",permalink:"/docs/client-docs/cache"},next:{title:"API Usage",permalink:"/docs/advanced-usage/api-usage"}},s={},u=[{value:"Setup Wizard",id:"setup-wizard",level:2},{value:"Library Tab",id:"library-tab",level:2},{value:"Game Page",id:"game-page",level:2},{value:"Downloads Tab",id:"downloads-tab",level:2},{value:"Installations Tab",id:"installations-tab",level:2},{value:"Community Tab",id:"community-tab",level:2},{value:"Settings Tab",id:"settings-tab",level:2},{value:"Application",id:"application",level:3},{value:"User",id:"user",level:3},{value:"Data",id:"data",level:3},{value:"Admin Tab (only visible for Admins)",id:"admin-tab-only-visible-for-admins",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gui"},"GUI"),(0,r.kt)("p",null,"This page provides an overview of the Graphical User Interface (GUI) for GameVault. The GUI includes several tabs, each with its own set of functions"),(0,r.kt)("h2",{id:"setup-wizard"},"Setup Wizard"),(0,r.kt)("p",null,"The Setup Wizard is a sub page that appears when the settings required to use GameVault are not set. The setup wizard guides you through all these settings with a more detailed explanation. You can exit it at any time by clicking on the tab bar on the left. This is optional, because you can do all the settings in the settings tab as well."),(0,r.kt)("h2",{id:"library-tab"},"Library Tab"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Browse, search, filter available games on the server."),(0,r.kt)("li",{parentName:"ul"},"Click on games to open the corresponding game page."),(0,r.kt)("li",{parentName:"ul"},"The Library is paged. A maximum of 80 Games are reloaded at once to save bandwidth and improve performance. When scrolling down, more pages are loaded.")),(0,r.kt)("h2",{id:"game-page"},"Game Page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find all available details for a game."),(0,r.kt)("li",{parentName:"ul"},"Set a progress state (e.g. completed or aborted)."),(0,r.kt)("li",{parentName:"ul"},"Add the game to the Download queue using the download button."),(0,r.kt)("li",{parentName:"ul"},"Remap the game. To do so, you have to search it in the RAWG serach field. If you found the right game click on the Remap Button."),(0,r.kt)("li",{parentName:"ul"},"Set a different thumbnail/background image. You can do this by passng an URL or upload a Image. (only available for Editors)"),(0,r.kt)("li",{parentName:"ul"},"By clicking the Re-cache button, the game data will be fetched from RAWG. Use this if the game have broken or old data. (only available for Editors or Administrators)"),(0,r.kt)("li",{parentName:"ul"},"Press the back-arrow button in the top left corner or ",(0,r.kt)("inlineCode",{parentName:"li"},"\xc8SC")," to return to the Library Tab.")),(0,r.kt)("h2",{id:"downloads-tab"},"Downloads Tab"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View all running and completed downloads."),(0,r.kt)("li",{parentName:"ul"},"See current download statistics and progress for running downloads."),(0,r.kt)("li",{parentName:"ul"},"Abort downloads at any time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/client-docs/how-to-use#1-extracting-the-game"},"Extract the Game Archive"),"."),(0,r.kt)("li",{parentName:"ul"},"See current extraction statistics and progress for running extractions."),(0,r.kt)("li",{parentName:"ul"},"Performs the ",(0,r.kt)("a",{parentName:"li",href:"/docs/client-docs/how-to-use#2-installing-the-game"},"Installation")," depending on the game type."),(0,r.kt)("li",{parentName:"ul"},"Open the corresponding folder."),(0,r.kt)("li",{parentName:"ul"},"Delete downloaded files using the delete icon.")),(0,r.kt)("h2",{id:"installations-tab"},"Installations Tab"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View all installed games."),(0,r.kt)("li",{parentName:"ul"},"Choose which .exe file you want to start."),(0,r.kt)("li",{parentName:"ul"},"Click on a game to see more details and launch it using the play button."),(0,r.kt)("li",{parentName:"ul"},"Open the corresponding folder.")),(0,r.kt)("h2",{id:"community-tab"},"Community Tab"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See a list of all users on the GameVault Server."),(0,r.kt)("li",{parentName:"ul"},"Select any user to see more details on their game progresses."),(0,r.kt)("li",{parentName:"ul"},"See your own progress by clicking on your own user."),(0,r.kt)("li",{parentName:"ul"},"Sort the progresses."),(0,r.kt)("li",{parentName:"ul"},"Delete your progresses."),(0,r.kt)("li",{parentName:"ul"},"Edit your User.")),(0,r.kt)("h2",{id:"settings-tab"},"Settings Tab"),(0,r.kt)("h3",{id:"application"},"Application"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Auto-Load Library from Server on Startup."),(0,r.kt)("li",{parentName:"ul"},"Auto-Extract Downloaded Games (truggers right after download completed)."),(0,r.kt)("li",{parentName:"ul"},"Set Server URL (Automatically add 'https' if not included)"),(0,r.kt)("li",{parentName:"ul"},"Set Download Limit. Control auto re-calculate the input."),(0,r.kt)("li",{parentName:"ul"},"Launch GameVault on Computer Startup."),(0,r.kt)("li",{parentName:"ul"},"Minimize GameVault to System Tray on Startup.")),(0,r.kt)("h3",{id:"user"},"User"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Login."),(0,r.kt)("li",{parentName:"ul"},"Logout."),(0,r.kt)("li",{parentName:"ul"},"Register new User.")),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select GameVault Root Path (Destination for Downloads ins Installs)."),(0,r.kt)("li",{parentName:"ul"},"Clear Image Cache (Shows size)."),(0,r.kt)("li",{parentName:"ul"},"Clear Offline Cache (Shows size).")),(0,r.kt)("h2",{id:"admin-tab-only-visible-for-admins"},"Admin Tab (only visible for Admins)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Administrate your Users"),(0,r.kt)("li",{parentName:"ul"},"Activate or Deactivate Users"),(0,r.kt)("li",{parentName:"ul"},"Change User Roles (also your own)"),(0,r.kt)("li",{parentName:"ul"},"Delete or Restore Users"),(0,r.kt)("li",{parentName:"ul"},"Re-index games on the server")))}p.isMDXComponent=!0}}]);