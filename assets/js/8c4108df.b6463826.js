"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[4145],{9287:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=o(2676),t=o(8358);const r={title:"Using Docker Compose",sidebar_position:2},i=void 0,a={id:"server-docs/setup/docker-compose",title:"Using Docker Compose",description:"Docker is a platform for developing, shipping, and running applications in containers, and Docker Compose is a tool for defining and managing multi-container Docker applications.",source:"@site/docs/server-docs/setup/docker-compose.md",sourceDirName:"server-docs/setup",slug:"/server-docs/setup/docker-compose",permalink:"/docs/server-docs/setup/docker-compose",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/setup/docker-compose.md",tags:[],version:"current",lastUpdatedBy:"Alper Alkan",lastUpdatedAt:1729842129e3,sidebarPosition:2,frontMatter:{title:"Using Docker Compose",sidebar_position:2},sidebar:"docs",previous:{title:"Setting up a GameVault Server",permalink:"/docs/server-docs/setup/"},next:{title:"Using CapRover",permalink:"/docs/server-docs/setup/caprover"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Creating a Docker Compose file",id:"step-1-creating-a-docker-compose-file",level:2},{value:"Things to consider when running on Docker for Windows",id:"things-to-consider-when-running-on-docker-for-windows",level:4},{value:"Alternative Step 1: Running without a PostgreSQL Database",id:"alternative-step-1-running-without-a-postgresql-database",level:3},{value:"Step 2: Start the Service",id:"step-2-start-the-service",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Additional Info",id:"additional-info",level:2},{value:"Stopping the server",id:"stopping-the-server",level:3},{value:"Reading the logs",id:"reading-the-logs",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.docker.com",children:"Docker"})," is a platform for developing, shipping, and running applications in containers, and ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/compose",children:"Docker Compose"})," is a tool for defining and managing multi-container Docker applications."]}),"\n",(0,s.jsx)(n.p,{children:"In this guide, you will learn how to set up GameVault using Docker and Docker Compose."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"Docker Engine"})," is installed on your system. (",(0,s.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker Desktop"})," should work too, but this guide is tailored for Docker Engine. Steps might look different on Desktop, but the gist is the same.)"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-1-creating-a-docker-compose-file",children:"Step 1: Creating a Docker Compose file"}),"\n",(0,s.jsxs)(n.p,{children:["Create a new file named ",(0,s.jsx)(n.code,{children:"docker-compose.yml"})," in a directory of your choice and copy the following code:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"services:\n  gamevault-backend:\n    image: phalcode/gamevault-backend:latest\n    restart: unless-stopped\n    environment:\n      DB_HOST: db\n      DB_USERNAME: gamevault\n      DB_PASSWORD: YOURPASSWORDHERE\n    volumes:\n      # Mount the folder where your games are\n      - /your/games/folder:/files\n      # Mount the folder where GameVault should store its media\n      - /your/media/folder:/media\n    ports:\n      - 8080:8080/tcp\n  db:\n    image: postgres:16\n    restart: unless-stopped\n    environment:\n      POSTGRES_USER: gamevault\n      POSTGRES_PASSWORD: YOURPASSWORDHERE\n      POSTGRES_DB: gamevault\n    volumes:\n      # Mount the folder where your PostgreSQL database files should land\n      - /your/database/folder:/var/lib/postgresql/data\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Replace the variables (",(0,s.jsx)(n.code,{children:"YOURPASSWORDHERE"}),", ",(0,s.jsx)(n.code,{children:"etc."}),"), as well as the folder paths with what suits you, of course. You can change the port on the left side of the colon aswell."]})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Password (YOURPASSWORDHERE) can't be empty! else the database will not work. If you don't want a password, consider running without a PostgreSQL Database (Not recommended)"})}),"\n",(0,s.jsx)(n.h4,{id:"things-to-consider-when-running-on-docker-for-windows",children:"Things to consider when running on Docker for Windows"}),"\n",(0,s.jsx)(n.p,{children:"The above yml file may not Windows and here is what it takes to make it work on Windows :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For paths in your volues, use Windows-style paths (backward slash)","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"volumes:\n  # Mount the folder where your games are\n  - C:\\Your\\Games\\Folder:/files\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["For the Postgres volume, you might need to use a docker volume instead of a mounted folder, because ",(0,s.jsx)(n.a,{href:"https://github.com/docker-library/postgres/issues/116",children:"Postgres has issues running under Docker for Windows"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"alternative-step-1-running-without-a-postgresql-database",children:"Alternative Step 1: Running without a PostgreSQL Database"}),"\n",(0,s.jsx)(n.p,{children:"We don't recommend it, but you can run GameVault without a PostgreSQL Database too using the following configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'services:\n  gamevault-backend:\n    image: phalcode/gamevault-backend:latest\n    restart: unless-stopped\n    environment:\n      DB_SYSTEM: "SQLITE"\n    volumes:\n      - /your/games/folder:/files\n      - /your/media/folder:/media\n      - /your/sqlite/database/folder:/db\n    ports:\n      - 8080:8080/tcp\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Replace the variables (",(0,s.jsx)(n.code,{children:"YOURPASSWORDHERE"}),", ",(0,s.jsx)(n.code,{children:"etc."}),"), as well as the folder paths with what suits you, of course. You can change the port on the left side of the colon aswell."]})}),"\n",(0,s.jsx)(n.h2,{id:"step-2-start-the-service",children:"Step 2: Start the Service"}),"\n",(0,s.jsxs)(n.p,{children:["Open a terminal, navigate to the directory where the ",(0,s.jsx)(n.code,{children:"docker-compose.yml"})," file is located, and run the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker compose up -d\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will start the GameVault server and PostgreSQL server in the background. The ",(0,s.jsx)(n.code,{children:"-d"})," parameter detaches the process from the terminal."]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:["Congratulations! Your GameVault Server has been successfully set up using Docker and Docker Compose. You can now access it using your server's IP address followed by the designated port, such as ",(0,s.jsx)(n.code,{children:"http://192.168.0.15:8080"})," for example."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/server-docs/setup/#what-next",children:"Click here to continue."})}),"\n",(0,s.jsx)(n.h2,{id:"additional-info",children:"Additional Info"}),"\n",(0,s.jsx)(n.h3,{id:"stopping-the-server",children:"Stopping the server"}),"\n",(0,s.jsxs)(n.p,{children:["Open a terminal, navigate to the directory where the ",(0,s.jsx)(n.code,{children:"docker-compose.yml"})," file is located, and run the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker compose down\n"})}),"\n",(0,s.jsx)(n.h3,{id:"reading-the-logs",children:"Reading the logs"}),"\n",(0,s.jsx)(n.p,{children:"Open a terminal and run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker logs gamevault-backend\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8358:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>i});var s=o(5271);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);