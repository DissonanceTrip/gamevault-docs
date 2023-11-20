"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[3559],{669:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var r=s(5893),i=s(1151);const n={sidebar_position:2},t="Configuration",c={id:"server-docs/configuration",title:"Configuration",description:"Check out configuration.ts for all possible environment variables incase we forgot to update this page.",source:"@site/docs/server-docs/configuration.md",sourceDirName:"server-docs",slug:"/server-docs/configuration",permalink:"/docs/server-docs/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Setting up a GameVault Server",permalink:"/docs/server-docs/setup"},next:{title:"File and Folder Structure",permalink:"/docs/server-docs/structure"}},l={},h=[{value:"Configuration Properties",id:"configuration-properties",level:2},{value:"SERVER",id:"server",level:2},{value:"VOLUMES",id:"volumes",level:2},{value:"DB",id:"db",level:2},{value:"RAWG_API",id:"rawg_api",level:2},{value:"GAMES",id:"games",level:2},{value:"USERS",id:"users",level:2},{value:"IMAGE",id:"image",level:2},{value:"TESTING",id:"testing",level:2}];function o(e){const d={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.h1,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(d.admonition,{type:"tip",children:(0,r.jsxs)(d.p,{children:["Check out ",(0,r.jsx)(d.a,{href:"https://github.com/Phalcode/gamevault-backend/blob/master/src/configuration.ts",children:"configuration.ts"})," for all possible environment variables incase we forgot to update this page."]})}),"\n",(0,r.jsx)(d.p,{children:"All configuration properties of your GameVault server are passed as environment variables or via a .env file. The following tables describe the available properties, their default values, explanations, and possible values."}),"\n",(0,r.jsx)(d.h2,{id:"configuration-properties",children:"Configuration Properties"}),"\n",(0,r.jsxs)(d.p,{children:["This page describes the various configuration properties used in the application. These properties can be configured in the environment variables or in a ",(0,r.jsx)(d.code,{children:".env"})," file."]}),"\n",(0,r.jsx)(d.h2,{id:"server",children:"SERVER"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"PUID"})}),(0,r.jsx)(d.td,{children:"The User-Identifer that should be used."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"1000"})}),(0,r.jsx)(d.td,{children:"Any user id (number)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"PGID"})}),(0,r.jsx)(d.td,{children:"The Group-Identifer that should be used."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"1000"})}),(0,r.jsx)(d.td,{children:"Any group id (number)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_LOG_LEVEL"})}),(0,r.jsx)(d.td,{children:"The log level of the server."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"info"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"debug"}),", ",(0,r.jsx)(d.code,{children:"info"}),", ",(0,r.jsx)(d.code,{children:"warn"}),", ",(0,r.jsx)(d.code,{children:"error"}),", ",(0,r.jsx)(d.code,{children:"fatal"}),", ",(0,r.jsx)(d.code,{children:"off"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_LOG_FILES_ENABLED"})}),(0,r.jsxs)(d.td,{children:["If the server should also write the logs to the ",(0,r.jsx)(d.code,{children:"VOLUMES_LOGS"})," directory via rolling file logger."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_REQUEST_LOG_FORMAT"})}),(0,r.jsxs)(d.td,{children:["The ",(0,r.jsx)(d.a,{href:"https://www.npmjs.com/package/morgan#predefined-formats",children:"morgan log format"})," for incoming HTTP Requests"]}),(0,r.jsx)(d.td,{children:"Custom Log Format"}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"short"}),", ",(0,r.jsx)(d.code,{children:"combined"})," ",(0,r.jsx)(d.a,{href:"https://www.npmjs.com/package/morgan#predefined-formats",children:"and many more"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_CORS_ALLOWED_ORIGINS"})}),(0,r.jsx)(d.td,{children:"Allowed CORS origins for the server."}),(0,r.jsx)(d.td,{children:"All Origins"}),(0,r.jsx)(d.td,{children:"A comma-separated list of origins"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_REGISTRATION_DISABLED"})}),(0,r.jsx)(d.td,{children:"If registration is enabled or not."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_ONLINE_ACTIVITIES_DISABLED"})}),(0,r.jsx)(d.td,{children:'Wether or not the server should listen to online activities like "ONLINE", "BUSY", "PLAYING" etc. If this is set to true, all users will always be shown as offline.'}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_ACCOUNT_ACTIVATION_DISABLED"})}),(0,r.jsx)(d.td,{children:"If accounts need to be activated by an admin before using them."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_ADMIN_USERNAME"})}),(0,r.jsx)(d.td,{children:"Automatically grants Admin Role to User with this Username on register, or startup."}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"Any username"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_ADMIN_PASSWORD"})}),(0,r.jsx)(d.td,{children:"Resets the admin user password to this password on startup. Only used for password reset in case of lockout. \u26a0\ufe0f CAUTION: This won't register a new account for you!"}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"Any password (No Length Validation)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_API_DOCS_ENABLED"})}),(0,r.jsxs)(d.td,{children:["Enables the API Specification Documenation on ",(0,r.jsx)(d.code,{children:"/api/docs"}),", ",(0,r.jsx)(d.code,{children:"/api/docs-json"})," & ",(0,r.jsx)(d.code,{children:"/api/docs/yaml"}),"."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_MAX_DOWNLOAD_BANDWIDTH_IN_KBPS"})}),(0,r.jsx)(d.td,{children:"Maximum bandwidth for downloads on this server in KB/s. \u26a0\ufe0f CAUTION: Too high number may crash the server upon game download."}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"10485760"})," (10 GiB/s)"]}),(0,r.jsx)(d.td,{children:"Any Number"})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"volumes",children:"VOLUMES"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"VOLUMES_FILES"})}),(0,r.jsx)(d.td,{children:"Folder inside container used for game files."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"/files"})}),(0,r.jsx)(d.td,{children:"Any valid folder path"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"VOLUMES_IMAGES"})}),(0,r.jsx)(d.td,{children:"Folder inside container used for images."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"/images"})}),(0,r.jsx)(d.td,{children:"Any valid folder path"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"VOLUMES_LOGS"})}),(0,r.jsx)(d.td,{children:"Folder inside container used for logs."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"/logs"})}),(0,r.jsx)(d.td,{children:"Any valid folder path"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"VOLUMES_SQLITEDB"})}),(0,r.jsxs)(d.td,{children:["Folder inside container used for ",(0,r.jsx)(d.code,{children:"SQLITE"})," database. (Not needed id you use ",(0,r.jsx)(d.code,{children:"POSTGRESQL"})," as database system)"]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"/db"})}),(0,r.jsx)(d.td,{children:"Any valid folder path"})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"db",children:"DB"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_SYSTEM"})}),(0,r.jsx)(d.td,{children:"The database system used (POSTGRESQL or SQLITE)."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"POSTGRESQL"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"POSTGRESQL"}),", ",(0,r.jsx)(d.code,{children:"SQLITE"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_HOST"})}),(0,r.jsx)(d.td,{children:"The host of the database (not needed for SQLITE)."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"localhost"})}),(0,r.jsx)(d.td,{children:"Any valid host name"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_PORT"})}),(0,r.jsx)(d.td,{children:"The port of the database (not needed for SQLITE)."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"5432"})}),(0,r.jsx)(d.td,{children:"Any valid port number"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_USERNAME"})}),(0,r.jsx)(d.td,{children:"The username for the database (not needed for SQLITE)."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"default"})}),(0,r.jsx)(d.td,{children:"Any valid username"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_PASSWORD"})}),(0,r.jsx)(d.td,{children:"The password for the database (not needed for SQLITE)."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"default"})}),(0,r.jsx)(d.td,{children:"Any valid password"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_DATABASE"})}),(0,r.jsx)(d.td,{children:"The database name (not needed for SQLITE)."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"gamevault"})}),(0,r.jsx)(d.td,{children:"Any valid database name"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_SYNCHRONIZE"})}),(0,r.jsx)(d.td,{children:"Force synchronizes the database with the entities. \u26a0\ufe0f CAUTION: This could break your db!"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_DEBUG"})}),(0,r.jsx)(d.td,{children:"Log all SQL Statements sent to the database."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"rawg_api",children:"RAWG_API"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"RAWG_API_URL"})}),(0,r.jsx)(d.td,{children:"Base URL of the RAWG API."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"https://api.rawg.io/api"})}),(0,r.jsx)(d.td,{children:"Any valid URL"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"RAWG_API_KEY"})}),(0,r.jsx)(d.td,{children:"API key for the RAWG API."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:'""'})}),(0,r.jsx)(d.td,{children:"Any valid RAWG API key"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"RAWG_API_CACHE_DAYS"})}),(0,r.jsx)(d.td,{children:"When to renew RAWG API cached data (in days)."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"30"})}),(0,r.jsx)(d.td,{children:"Any positive integer"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"RAWG_API_EXCLUDE_STORES"})}),(0,r.jsxs)(d.td,{children:["This is a list of stores that the RAWG matching algorithm will exclude. You can specify these stores as a comma-separated list with no spaces. To find the Store IDs, refer to ",(0,r.jsx)(d.a,{href:"https://github.com/Phalcode/gamevault-backend/blob/16a33507a190501005d39a88e2bbca3f08f95839/src/modules/providers/rawg/models/stores.enum.ts",children:"stores.enum.ts"}),". By default, we exclude itch.io to filter out a large number of asset flips."]}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"9"})," (itch.io)"]}),(0,r.jsx)(d.td,{children:"Any comma-separated string of store IDs"})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"games",children:"GAMES"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"GAMES_INDEX_INTERVAL_IN_MINUTES"})}),(0,r.jsx)(d.td,{children:"The index interval in minutes. Determines how often the server should index the list of games."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"5"})}),(0,r.jsx)(d.td,{children:"Any number"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"GAMES_SUPPORTED_FILE_FORMATS"})}),(0,r.jsx)(d.td,{children:"Comma-Seperated list of supported file-types GameVault should detect."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/server-docs/structure#supported-archive-formats",children:"see here"})}),(0,r.jsx)(d.td,{children:'".zip,.7z,.rar"'})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"GAMES_SEARCH_RECURSIVE"})}),(0,r.jsx)(d.td,{children:"If indexer should search for games in subfolders."}),(0,r.jsx)(d.td,{children:"true"}),(0,r.jsx)(d.td,{children:'"true", "false'})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"users",children:"USERS"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"USERS_REQUIRE_EMAIL"})}),(0,r.jsx)(d.td,{children:"Require Email Field for new registrations."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"USERS_REQUIRE_FIRST_NAME"})}),(0,r.jsx)(d.td,{children:"Require First Name Field for new registrations."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"USERS_REQUIRE_LAST_NAME"})}),(0,r.jsx)(d.td,{children:"Require Last Name Field for new registrations."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"image",children:"IMAGE"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"IMAGE_MAX_SIZE_IN_KB"})}),(0,r.jsx)(d.td,{children:"he maximum size for image uploads in kilobytes. Set it to 0 to disable image uploads."}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"10000"})," (10MB)"]}),(0,r.jsx)(d.td,{children:"Any number"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"IMAGE_GOOGLE_API_RATE_LIMIT_COOLDOWN_IN_HOURS"})}),(0,r.jsx)(d.td,{children:"The amount of time to wait when the server reaches the rate limit for the Google Images API."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"24"})}),(0,r.jsx)(d.td,{children:"Any number"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"IMAGE_SUPPORTED_IMAGE_FORMATS"})}),(0,r.jsx)(d.td,{children:"List of supported image formats (MIME Types) on this server, separated by commas."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"image/bmp, image/jpeg, image/png, image/tiff, image/gif, image/x-icon"})}),(0,r.jsxs)(d.td,{children:["List of ",(0,r.jsx)(d.code,{children:"image/*"})," content types."]})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"testing",children:"TESTING"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"TESTING_AUTHENTICATION_DISABLED"})}),(0,r.jsxs)(d.td,{children:["If ",(0,r.jsx)(d.code,{children:"true"}),", the API will accept any auth header. Useful for testing without authentication."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"TESTING_MOCK_FILES"})}),(0,r.jsxs)(d.td,{children:["If ",(0,r.jsx)(d.code,{children:"true"}),", the server will mock all files or ignore filesystem functionalities. Useful for testing without real files."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"TESTING_IN_MEMORY_DB"})}),(0,r.jsxs)(d.td,{children:["If ",(0,r.jsx)(d.code,{children:"true"}),", the server will use an in-memory database. Useful for testing without creating an actual database. Only works with SQLITE."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"TESTING_RAWG_API_DISABLED"})}),(0,r.jsxs)(d.td,{children:["If ",(0,r.jsx)(d.code,{children:"true"}),", the server will not make any external API calls to RAWG. Useful for testing without depending on the API."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"TESTING_GOOGLE_API_DISABLED"})}),(0,r.jsxs)(d.td,{children:["If ",(0,r.jsx)(d.code,{children:"true"}),", the server will not make any external API calls to Google. Useful for testing without depending on the API."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]})]})]})]})}function x(e={}){const{wrapper:d}={...(0,i.a)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1151:(e,d,s)=>{s.d(d,{Z:()=>c,a:()=>t});var r=s(7294);const i={},n=r.createContext(i);function t(e){const d=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(n.Provider,{value:d},e.children)}}}]);