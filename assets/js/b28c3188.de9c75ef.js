"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[3559],{1234:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var r=s(2676),i=s(8358);const n={sidebar_position:2},t="Configuration",c={id:"server-docs/configuration",title:"Configuration",description:"Check out configuration.ts for all possible environment variables in case we forgot to update this page.",source:"@site/docs/server-docs/configuration.md",sourceDirName:"server-docs",slug:"/server-docs/configuration",permalink:"/docs/server-docs/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/configuration.md",tags:[],version:"current",lastUpdatedBy:"Alper Alkan",lastUpdatedAt:173010786e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Using Native Approach",permalink:"/docs/server-docs/setup/native"},next:{title:"File and Folder Structure",permalink:"/docs/server-docs/structure"}},l={},h=[{value:"Configuration Properties",id:"configuration-properties",level:2},{value:"SERVER",id:"server",level:2},{value:"VOLUMES",id:"volumes",level:2},{value:"DB",id:"db",level:2},{value:"USERS",id:"users",level:2},{value:"PARENTAL",id:"parental",level:2},{value:"GAMES",id:"games",level:2},{value:"MEDIA",id:"media",level:2},{value:"METADATA",id:"metadata",level:2},{value:"TESTING",id:"testing",level:2}];function o(e){const d={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.header,{children:(0,r.jsx)(d.h1,{id:"configuration",children:"Configuration"})}),"\n",(0,r.jsx)(d.admonition,{type:"tip",children:(0,r.jsxs)(d.p,{children:["Check out ",(0,r.jsx)(d.a,{href:"https://github.com/Phalcode/gamevault-backend/blob/master/src/configuration.ts",children:"configuration.ts"})," for all possible environment variables in case we forgot to update this page."]})}),"\n",(0,r.jsx)(d.p,{children:"All configuration properties of your GameVault server are passed as environment variables or via a .env file. The following tables describe the available properties, their default values, explanations, and possible values."}),"\n",(0,r.jsx)(d.h2,{id:"configuration-properties",children:"Configuration Properties"}),"\n",(0,r.jsxs)(d.p,{children:["This page describes the various configuration properties used in the application. These properties can be configured in the environment variables or in a ",(0,r.jsx)(d.code,{children:".env"})," file."]}),"\n",(0,r.jsx)(d.h2,{id:"server",children:"SERVER"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"PUID"})}),(0,r.jsx)(d.td,{children:"The User-Identifer that should be used."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"1000"})}),(0,r.jsx)(d.td,{children:"Any user id (number)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"PGID"})}),(0,r.jsx)(d.td,{children:"The Group-Identifer that should be used."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"1000"})}),(0,r.jsx)(d.td,{children:"Any group id (number)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_PORT"})}),(0,r.jsx)(d.td,{children:"The port the server should use. (Only relevant if the server is run without docker on bare metal.)"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"8080"})}),(0,r.jsx)(d.td,{children:"Any non-reserved free port (1024 to 49151)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_LOG_LEVEL"})}),(0,r.jsx)(d.td,{children:"The log level of the server."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"info"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"debug"}),", ",(0,r.jsx)(d.code,{children:"info"}),", ",(0,r.jsx)(d.code,{children:"warn"}),", ",(0,r.jsx)(d.code,{children:"error"}),", ",(0,r.jsx)(d.code,{children:"fatal"}),", ",(0,r.jsx)(d.code,{children:"off"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_LOG_FILES_ENABLED"})}),(0,r.jsxs)(d.td,{children:["If the server should also write the logs to the ",(0,r.jsx)(d.code,{children:"VOLUMES_LOGS"})," directory via rolling file logger."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"true"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_REQUEST_LOG_FORMAT"})}),(0,r.jsxs)(d.td,{children:["The ",(0,r.jsx)(d.a,{href:"https://www.npmjs.com/package/morgan#predefined-formats",children:"morgan log format"})," for incoming HTTP Requests"]}),(0,r.jsx)(d.td,{children:"Custom Log Format"}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"short"}),", ",(0,r.jsx)(d.code,{children:"combined"})," ",(0,r.jsx)(d.a,{href:"https://www.npmjs.com/package/morgan#predefined-formats",children:"and many more"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_CORS_ALLOWED_ORIGINS"})}),(0,r.jsx)(d.td,{children:"Allowed CORS origins for the server."}),(0,r.jsx)(d.td,{children:"All Origins"}),(0,r.jsx)(d.td,{children:"A comma-separated list of origins"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_REGISTRATION_DISABLED"})}),(0,r.jsx)(d.td,{children:"If registration is enabled or not."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_ACCOUNT_ACTIVATION_DISABLED"})}),(0,r.jsx)(d.td,{children:"If accounts need to be activated by an admin before using them."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_ADMIN_USERNAME"})}),(0,r.jsxs)(d.td,{children:["Used for role recovery of existing users. The Server grants Admin Role to an existing User with this Username on register or startup. ",(0,r.jsx)(d.strong,{children:"\u26a0\ufe0f This won't register a new account!"})]}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"Any username"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_ADMIN_PASSWORD"})}),(0,r.jsxs)(d.td,{children:["Used for password recovery of existing users. Resets the password of the existing user with the username set in ",(0,r.jsx)(d.code,{children:"SERVER_ADMIN_USERNAME"})," to this password on startup. ",(0,r.jsx)(d.strong,{children:"\u26a0\ufe0f This won't register a new account!"})]}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"Any password (No Length Validation)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_API_DOCS_ENABLED"})}),(0,r.jsxs)(d.td,{children:["Enables the API Documentation on ",(0,r.jsx)(d.code,{children:"/api/docs"}),", ",(0,r.jsx)(d.code,{children:"/api/docs-json"})," & ",(0,r.jsx)(d.code,{children:"/api/docs/yaml"}),"."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_MAX_DOWNLOAD_BANDWIDTH_IN_KBPS"})}),(0,r.jsx)(d.td,{children:"Maximum bandwidth for downloads on this server in KB/s."}),(0,r.jsx)(d.td,{children:"- (Unlimited)"}),(0,r.jsx)(d.td,{children:"Any Number"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_ONLINE_ACTIVITIES_DISABLED"})}),(0,r.jsx)(d.td,{children:'Whether or not the server should listen to online activities like "ONLINE", "BUSY", "PLAYING" etc. If this is set to true, all users will always be shown as offline.'}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SERVER_STACK_TRACE_LIMIT"})}),(0,r.jsx)(d.td,{children:"Configures the maximum number of stack frames to display in error stack traces, with a higher value providing more detailed debugging information."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"10"})}),(0,r.jsx)(d.td,{children:"Any Number"})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"volumes",children:"VOLUMES"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"VOLUMES_CONFIG"})}),(0,r.jsx)(d.td,{children:"Folder inside container used for configuring GameVault."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"/config"})}),(0,r.jsx)(d.td,{children:"Any valid folder path"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"VOLUMES_FILES"})}),(0,r.jsx)(d.td,{children:"Folder inside container used for game files."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"/files"})}),(0,r.jsx)(d.td,{children:"Any valid folder path"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"VOLUMES_MEDIA"})}),(0,r.jsx)(d.td,{children:"Folder inside container used for media."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"/media"})}),(0,r.jsx)(d.td,{children:"Any valid folder path"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"VOLUMES_LOGS"})}),(0,r.jsx)(d.td,{children:"Folder inside container used for logs."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"/logs"})}),(0,r.jsx)(d.td,{children:"Any valid folder path"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"VOLUMES_SQLITEDB"})}),(0,r.jsxs)(d.td,{children:["Folder inside container used for ",(0,r.jsx)(d.code,{children:"SQLITE"})," database. (Not needed if ",(0,r.jsx)(d.code,{children:"DB_SYSTEM"})," is set to ",(0,r.jsx)(d.code,{children:"POSTGRESQL"}),")"]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"/db"})}),(0,r.jsx)(d.td,{children:"Any valid folder path"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"VOLUMES_PLUGINS"})}),(0,r.jsx)(d.td,{children:"Folder inside container used for plugins."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"/plugins"})}),(0,r.jsx)(d.td,{children:"Any valid folder path"})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"db",children:"DB"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_SYSTEM"})}),(0,r.jsx)(d.td,{children:"The database system used (POSTGRESQL or SQLITE)."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"POSTGRESQL"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"POSTGRESQL"}),", ",(0,r.jsx)(d.code,{children:"SQLITE"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_HOST"})}),(0,r.jsx)(d.td,{children:"The host of the database (not needed for SQLITE)."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"localhost"})}),(0,r.jsx)(d.td,{children:"Any valid host name"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_PORT"})}),(0,r.jsx)(d.td,{children:"The port of the database (not needed for SQLITE)."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"5432"})}),(0,r.jsx)(d.td,{children:"Any valid port number"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_USERNAME"})}),(0,r.jsx)(d.td,{children:"The username for the database (not needed for SQLITE)."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"default"})}),(0,r.jsx)(d.td,{children:"Any valid username"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_PASSWORD"})}),(0,r.jsx)(d.td,{children:"The password for the database (not needed for SQLITE)."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"default"})}),(0,r.jsx)(d.td,{children:"Any valid password"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_DATABASE"})}),(0,r.jsx)(d.td,{children:"The database name (not needed for SQLITE)."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"gamevault"})}),(0,r.jsx)(d.td,{children:"Any valid database name"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_DEBUG"})}),(0,r.jsx)(d.td,{children:"Log all SQL Statements sent to the database."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_SYNCHRONIZE"})}),(0,r.jsx)(d.td,{children:"Force synchronizes the database with the entities. (This could break your database!)"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_TLS_ENABLED"})}),(0,r.jsx)(d.td,{children:"Enables TLS for the database. (not needed for SQLITE)."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_TLS_REJECT_UNAUTHORIZED_ENABLED"})}),(0,r.jsx)(d.td,{children:"Whether the database will reject TLS connections that do not present a valid, trusted certificate."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_TLS_KEY_PATH"})}),(0,r.jsx)(d.td,{children:"The file path to the private key used for securing TLS connections to the database."}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"Any file path"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_TLS_CERTIFICATE_PATH"})}),(0,r.jsx)(d.td,{children:"The file path to the TLS certificate used for authenticating the database server."}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"Any file path"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DB_TLS_CA_CERTIFICATE_PATH"})}),(0,r.jsx)(d.td,{children:"The file path to the CA certificate used for verifying client certificates in TLS connections."}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"Any file path"})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"users",children:"USERS"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"USERS_REQUIRE_EMAIL"})}),(0,r.jsxs)(d.td,{children:["Require ",(0,r.jsx)(d.strong,{children:"Email"})," for new registrations."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"USERS_REQUIRE_FIRST_NAME"})}),(0,r.jsxs)(d.td,{children:["Require ",(0,r.jsx)(d.strong,{children:"First Name"})," for new registrations."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"USERS_REQUIRE_LAST_NAME"})}),(0,r.jsxs)(d.td,{children:["Require ",(0,r.jsx)(d.strong,{children:"Last Name"})," for new registrations."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"USERS_REQUIRE_BIRTH_DATE"})}),(0,r.jsxs)(d.td,{children:["Require ",(0,r.jsx)(d.strong,{children:"Birth Date"})," for new registrations. (",(0,r.jsxs)(d.strong,{children:["Automatically set to ",(0,r.jsx)(d.code,{children:"true"})," when ",(0,r.jsx)(d.code,{children:"PARENTAL_AGE_RESTRICTION_ENABLED"})," is true"]}),")"]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"parental",children:"PARENTAL"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"PARENTAL_AGE_RESTRICTION_ENABLED"})}),(0,r.jsx)(d.td,{children:"Determines whether age-based parental restrictions are enforced."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"PARENTAL_AGE_OF_MAJORITY"})}),(0,r.jsx)(d.td,{children:"The age at which an individual is legally recognized as an adult for parental restrictions."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"18"})}),(0,r.jsx)(d.td,{children:"Any number"})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"games",children:"GAMES"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"GAMES_INDEX_INTERVAL_IN_MINUTES"})}),(0,r.jsx)(d.td,{children:"The index interval, measured in minutes, decides how frequently the server should check for changes in games in the /files directory. This used to be essential before we implemented the filewatcher to the server. Nowadays, it's optional for rare situations where the filewatcher might miss changes. If set to 0, it won't regularly trigger reindexing and solely depend on the filewatcher."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"60"})}),(0,r.jsx)(d.td,{children:"Any number"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"GAMES_SUPPORTED_FILE_FORMATS"})}),(0,r.jsx)(d.td,{children:"Comma-Seperated list of supported file-types GameVault should detect."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/server-docs/structure#supported-archive-formats",children:"All Supported Formats"})}),(0,r.jsx)(d.td,{children:'".zip,.7z,.rar"'})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"GAMES_SEARCH_RECURSIVE"})}),(0,r.jsx)(d.td,{children:"If indexer should search for games in subfolders."}),(0,r.jsx)(d.td,{children:"true"}),(0,r.jsx)(d.td,{children:'"true", "false'})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"GAMES_DEFAULT_ARCHIVE_PASSWORD"})}),(0,r.jsx)(d.td,{children:"A default password for archives. Useful if you always use the same password for your games and want Game Type Detection to work with the encrypted files. Without this game type detection on encrypted archives depends on the file extension and if the headers are encrypted"}),(0,r.jsx)(d.td,{children:'"Anything"'}),(0,r.jsx)(d.td,{children:"Any string"})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"media",children:"MEDIA"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"MEDIA_MAX_SIZE"})}),(0,r.jsx)(d.td,{children:"The maximum size for media uploads. Set it to 0 to disable media uploads."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"10 mb"})}),(0,r.jsx)(d.td,{children:'e.g. "10 mb", "5 gb", "300 kb"'})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"MEDIA_SUPPORTED_FORMATS"})}),(0,r.jsx)(d.td,{children:"List of supported media formats (MIME Types) on this server, separated by commas."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/server-docs/media#supported-formats",children:"See here"})}),(0,r.jsx)(d.td,{children:"Comma separated list of MIME Types."})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"MEDIA_GC_DISABLED"})}),(0,r.jsx)(d.td,{children:"Whether or not media garbage collection is enabled. (Deletes unused media)"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"MEDIA_GC_INTERVAL_IN_MINUTES"})}),(0,r.jsx)(d.td,{children:"The interval in minutes for media garbage collection."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"60"})}),(0,r.jsx)(d.td,{children:"Any number"})]})]})]}),"\n",(0,r.jsx)(d.p,{children:"Here are the descriptions for the metadata properties:"}),"\n",(0,r.jsx)(d.h2,{id:"metadata",children:"METADATA"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"METADATA_TTL_IN_DAYS"})}),(0,r.jsx)(d.td,{children:"The number of days metadata is considered fresh before requiring an update."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"30"})}),(0,r.jsx)(d.td,{children:"Any number of days"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"METADATA_IGDB_ENABLED"})}),(0,r.jsx)(d.td,{children:"Enables or disables the built-in integration with IGDB for metadata retrieval."}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"true"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"METADATA_IGDB_PRIORITY"})}),(0,r.jsx)(d.td,{children:"The priority level for IGDB metadata sources when multiple metadata sources are available."}),(0,r.jsx)(d.td,{children:"1"}),(0,r.jsx)(d.td,{children:"Any number"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"METADATA_IGDB_REQUEST_INTERVAL_MS"})}),(0,r.jsxs)(d.td,{children:["The interval, in milliseconds, to wait between consecutive requests to prevent exceeding rate limits. This delay will be applied ",(0,r.jsx)(d.strong,{children:"before"})," each call to the provider."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"250"})}),(0,r.jsx)(d.td,{children:"Any number"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"METADATA_IGDB_CLIENT_ID"})}),(0,r.jsx)(d.td,{children:"The Client-ID used for authenticating requests to the IGDB API."}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"Your Client ID"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"METADATA_IGDB_CLIENT_SECRET"})}),(0,r.jsx)(d.td,{children:"The Client-Secret used for authenticating requests to the IGDB API."}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"Your Client Secret"})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"testing",children:"TESTING"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"TESTING_AUTHENTICATION_DISABLED"})}),(0,r.jsxs)(d.td,{children:["If ",(0,r.jsx)(d.code,{children:"true"}),", the API will accept any auth header. Useful for testing without authentication."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"TESTING_MOCK_FILES"})}),(0,r.jsxs)(d.td,{children:["If ",(0,r.jsx)(d.code,{children:"true"}),", the server will mock all files or ignore filesystem functionalities. Useful for testing without real files."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"TESTING_IN_MEMORY_DB"})}),(0,r.jsxs)(d.td,{children:["If ",(0,r.jsx)(d.code,{children:"true"}),", the server will use an in-memory database. Useful for testing without creating an actual database. Only works with SQLITE."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"TESTING_MOCK_PROVIDERS"})}),(0,r.jsxs)(d.td,{children:["If ",(0,r.jsx)(d.code,{children:"true"}),", the server will create two mock providers. (-9999 and 9999 Priority) Useful for testing metadata-merges."]}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"false"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]})]})]})]})}function x(e={}){const{wrapper:d}={...(0,i.a)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8358:(e,d,s)=>{s.d(d,{Z:()=>c,a:()=>t});var r=s(5271);const i={},n=r.createContext(i);function t(e){const d=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(n.Provider,{value:d},e.children)}}}]);