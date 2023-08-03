"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[3559],{9613:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var n=a(9496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=p(a),N=r,s=u["".concat(o,".").concat(N)]||u[N]||k[N]||l;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[u]="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},4486:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(1163),r=(a(9496),a(9613));const l={sidebar_position:2},i="Configuration",d={unversionedId:"server-docs/configuration",id:"server-docs/configuration",title:"Configuration",description:"Check out configuration.ts for all possible environment variables incase we forgot to update this page.",source:"@site/docs/server-docs/configuration.md",sourceDirName:"server-docs",slug:"/server-docs/configuration",permalink:"/docs/server-docs/configuration",draft:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Setting up a GameVault Server",permalink:"/docs/server-docs/setup"},next:{title:"File and Folder Structure",permalink:"/docs/server-docs/structure"}},o={},p=[{value:"Configuration Properties",id:"configuration-properties",level:2},{value:"SERVER",id:"server",level:2},{value:"VOLUMES",id:"volumes",level:2},{value:"DB",id:"db",level:2},{value:"RAWG_API",id:"rawg_api",level:2},{value:"GAMES",id:"games",level:2},{value:"IMAGE",id:"image",level:2},{value:"TESTING",id:"testing",level:2}],m={toc:p},u="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Phalcode/gamevault-backend/blob/master/src/configuration.ts"},"configuration.ts")," for all possible environment variables incase we forgot to update this page.")),(0,r.kt)("p",null,"All configuration properties of your GameVault server are passed as environment variables or via a .env file. The following tables describe the available properties, their default values, explanations, and possible values."),(0,r.kt)("h2",{id:"configuration-properties"},"Configuration Properties"),(0,r.kt)("p",null,"This page describes the various configuration properties used in the application. These properties can be configured in the environment variables or in a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("h2",{id:"server"},"SERVER"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PUID")),(0,r.kt)("td",{parentName:"tr",align:null},"The User-Identifer that should be used"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1000")),(0,r.kt)("td",{parentName:"tr",align:null},"any user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PGID")),(0,r.kt)("td",{parentName:"tr",align:null},"The Group-Identifer that should be used"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1000")),(0,r.kt)("td",{parentName:"tr",align:null},"any group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SERVER_LOG_LEVEL")),(0,r.kt)("td",{parentName:"tr",align:null},"The log level of the server"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"info")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"debug"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"info"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"warn"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"error"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"fatal"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"off"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SERVER_LOG_FILES_ENABLED")),(0,r.kt)("td",{parentName:"tr",align:null},"If the server should also write the logs to the ",(0,r.kt)("inlineCode",{parentName:"td"},"VOLUMES_LOGS")," directory via rolling file logger"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SERVER_REQUEST_LOG_FORMAT")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/morgan#predefined-formats"},"morgan log format")," for incoming HTTP Requests"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom Log Format"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"short"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"combined")," ",(0,r.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/morgan#predefined-formats"},"and many more"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SERVER_CORS_ALLOWED_ORIGINS")),(0,r.kt)("td",{parentName:"tr",align:null},"Allowed CORS origins for the server."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*")),(0,r.kt)("td",{parentName:"tr",align:null},"A comma-separated list of origins")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SERVER_REGISTRATION_DISABLED")),(0,r.kt)("td",{parentName:"tr",align:null},"If registration is enabled or not."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SERVER_ACCOUNT_ACTIVATION_DISABLED")),(0,r.kt)("td",{parentName:"tr",align:null},"If accounts need to be activated by an admin before using them."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SERVER_ADMIN_USERNAME")),(0,r.kt)("td",{parentName:"tr",align:null},"Automatically grants Admin Role to User with this Username on register, or startup"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Any username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SERVER_ADMIN_PASSWORD")),(0,r.kt)("td",{parentName:"tr",align:null},"Resets the admin user password to this password on startup"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Any password (No Length Validation)")))),(0,r.kt)("h2",{id:"volumes"},"VOLUMES"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"VOLUMES_FILES")),(0,r.kt)("td",{parentName:"tr",align:null},"Folder inside container used for game files"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/files")),(0,r.kt)("td",{parentName:"tr",align:null},"Any valid folder path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"VOLUMES_IMAGES")),(0,r.kt)("td",{parentName:"tr",align:null},"Folder inside container used for images"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/images")),(0,r.kt)("td",{parentName:"tr",align:null},"Any valid folder path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"VOLUMES_LOGS")),(0,r.kt)("td",{parentName:"tr",align:null},"Folder inside container used for logs."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/logs")),(0,r.kt)("td",{parentName:"tr",align:null},"Any valid folder path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"VOLUMES_SQLITEDB")),(0,r.kt)("td",{parentName:"tr",align:null},"Folder inside container used for ",(0,r.kt)("inlineCode",{parentName:"td"},"SQLITE")," database. (Not needed id you use ",(0,r.kt)("inlineCode",{parentName:"td"},"POSTGRESQL")," as database system)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/db")),(0,r.kt)("td",{parentName:"tr",align:null},"Any valid folder path")))),(0,r.kt)("h2",{id:"db"},"DB"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DB_SYSTEM")),(0,r.kt)("td",{parentName:"tr",align:null},"The database system used (POSTGRESQL or SQLITE)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POSTGRESQL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POSTGRESQL"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"SQLITE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DB_HOST")),(0,r.kt)("td",{parentName:"tr",align:null},"The host of the database (not needed for SQLITE)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"localhost")),(0,r.kt)("td",{parentName:"tr",align:null},"Any valid host name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DB_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},"The port of the database (not needed for SQLITE)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5432")),(0,r.kt)("td",{parentName:"tr",align:null},"Any valid port number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DB_USERNAME")),(0,r.kt)("td",{parentName:"tr",align:null},"The username for the database (not needed for SQLITE)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default")),(0,r.kt)("td",{parentName:"tr",align:null},"Any valid username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DB_PASSWORD")),(0,r.kt)("td",{parentName:"tr",align:null},"The password for the database (not needed for SQLITE)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default")),(0,r.kt)("td",{parentName:"tr",align:null},"Any valid password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DB_DATABASE")),(0,r.kt)("td",{parentName:"tr",align:null},"The database name (not needed for SQLITE)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gamevault")),(0,r.kt)("td",{parentName:"tr",align:null},"Any valid database name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DB_SYNCHRONIZE")),(0,r.kt)("td",{parentName:"tr",align:null},"Force synchronizes the database with the entities (it could break your db!)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DB_DEBUG")),(0,r.kt)("td",{parentName:"tr",align:null},"Log all SQL Statements sent to the database."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h2",{id:"rawg_api"},"RAWG_API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RAWG_API_URL")),(0,r.kt)("td",{parentName:"tr",align:null},"Base URL of the RAWG API."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://api.rawg.io/api")),(0,r.kt)("td",{parentName:"tr",align:null},"Any valid URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RAWG_API_KEY")),(0,r.kt)("td",{parentName:"tr",align:null},"API key for the RAWG API."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("td",{parentName:"tr",align:null},"Any valid RAWG API key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RAWG_API_CACHE_DAYS")),(0,r.kt)("td",{parentName:"tr",align:null},"When to renew RAWG API cached data (in days)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"7")),(0,r.kt)("td",{parentName:"tr",align:null},"Any positive integer")))),(0,r.kt)("h2",{id:"games"},"GAMES"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GAMES_INDEX_INTERVAL_IN_MINUTES")),(0,r.kt)("td",{parentName:"tr",align:null},"The index interval in minutes. Determines how often the server should index the list of games."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5")),(0,r.kt)("td",{parentName:"tr",align:null},"Any number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GAMES_SUPPORTED_FILE_FORMATS")),(0,r.kt)("td",{parentName:"tr",align:null},"Comma-Seperated list of supported file-types GameVault should detect"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/server-docs/structure#supported-archive-formats"},"see here")),(0,r.kt)("td",{parentName:"tr",align:null},'".zip,.7z,.rar"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GAMES_SEARCH_RECURSIVE")),(0,r.kt)("td",{parentName:"tr",align:null},"If indexer should search for games in subfolders"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'"true", "false')))),(0,r.kt)("h2",{id:"image"},"IMAGE"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IMAGE_GC_KEEP_DAYS")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of days to keep unused images. After this period, images that have not been accessed are deleted."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:null},"Any number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IMAGE_GC_INTERVAL_MINUTES")),(0,r.kt)("td",{parentName:"tr",align:null},"How often to run the image garbage collector, in minutes."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"60")),(0,r.kt)("td",{parentName:"tr",align:null},"Any number")))),(0,r.kt)("h2",{id:"testing"},"TESTING"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TESTING_AUTHENTICATION_DISABLED")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the API will accept any auth header. Useful for testing without authentication."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TESTING_MOCK_FILES")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the server will mock all files or ignore filesystem functionalities. Useful for testing without real files."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TESTING_IN_MEMORY_DB")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the server will use an in-memory database. Useful for testing without creating an actual database. Only works with SQLITE."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TESTING_RAWG_API_DISABLED")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the server will not make any external API calls to RAWG. Useful for testing without depending on the API."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TESTING_GOOGLE_API_DISABLED")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the server will not make any external API calls to Google. Useful for testing without depending on the API."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))))))}k.isMDXComponent=!0}}]);