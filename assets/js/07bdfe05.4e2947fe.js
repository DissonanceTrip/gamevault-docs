"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[3e3],{504:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(5893),s=t(1151);const o={sidebar_position:1},a="Setting up a GameVault Server",i={id:"server-docs/setup",title:"Setting up a GameVault Server",description:"Setting up a GameVault server can be done in a few simple steps. Before starting, there are some prerequisites you need to have in place.",source:"@site/docs/server-docs/setup.md",sourceDirName:"server-docs",slug:"/server-docs/setup",permalink:"/docs/server-docs/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Configuration",permalink:"/docs/server-docs/configuration"}},l={},d=[{value:"Methods",id:"methods",level:2},{value:"Method 1: Docker Setup",id:"method-1-docker-setup",level:3},{value:"1. Install Docker and Docker Compose",id:"1-install-docker-and-docker-compose",level:4},{value:"2. Create a Docker Compose file",id:"2-create-a-docker-compose-file",level:4},{value:"3. Start the GameVault server",id:"3-start-the-gamevault-server",level:4},{value:"Method 1.1: Docker Setup without PostgreSQL",id:"method-11-docker-setup-without-postgresql",level:5},{value:"Method 2: Caprover One Click App",id:"method-2-caprover-one-click-app",level:3},{value:"Method 3: TrueNAS Scale",id:"method-3-truenas-scale",level:3},{value:"Method 4: Installing Without Containers",id:"method-4-installing-without-containers",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Step 1: Clone the Source Code",id:"step-1-clone-the-source-code",level:4},{value:"Step 2: Install Dependencies",id:"step-2-install-dependencies",level:4},{value:"Step 3: Build",id:"step-3-build",level:4},{value:"Step 4: Set Up .env File",id:"step-4-set-up-env-file",level:4},{value:"Step 5: Start &amp; Stop the Server",id:"step-5-start--stop-the-server",level:4},{value:"More Methods",id:"more-methods",level:3},{value:"What Next?",id:"what-next",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"setting-up-a-gamevault-server",children:"Setting up a GameVault Server"}),"\n",(0,r.jsx)(n.p,{children:"Setting up a GameVault server can be done in a few simple steps. Before starting, there are some prerequisites you need to have in place."}),"\n",(0,r.jsx)(n.p,{children:"There are many ways to deploy a GameVault Server. You can choose one from below."}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"method-1-docker-setup",children:"Method 1: Docker Setup"}),"\n",(0,r.jsx)(n.h4,{id:"1-install-docker-and-docker-compose",children:"1. Install Docker and Docker Compose"}),"\n",(0,r.jsx)(n.p,{children:"Docker and Docker Compose are recommended to set up the GameVault server. If you do not have Docker and Docker Compose installed on your system, follow these steps to install them:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Docker"}),": You can download Docker from the official ",(0,r.jsx)(n.a,{href:"https://www.docker.com/get-started",children:"Docker website"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Docker Compose"}),": Docker Compose is already included in the current Docker installations for Windows, Linux and macOS users as ",(0,r.jsx)(n.code,{children:"docker compose"}),". If you are still using ",(0,r.jsx)(n.code,{children:"docker-compose"}),", follow the instructions on the ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/compose/migrate/",children:"Docker Compose Migration Guide"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"2-create-a-docker-compose-file",children:"2. Create a Docker Compose file"}),"\n",(0,r.jsxs)(n.p,{children:["Create a new file named ",(0,r.jsx)(n.code,{children:"docker-compose.yml"})," in a directory of your choice and copy the following code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: "3.8"\nservices:\n  gamevault-backend:\n    image: phalcode/gamevault-backend:latest\n    restart: unless-stopped\n    environment:\n      DB_HOST: db\n      DB_USERNAME: gamevault\n      DB_PASSWORD: RANDOMPASSWORD\n      # The Following Line grants Admin Role to account with this username upon registration.\n      SERVER_ADMIN_USERNAME: admin\n      # Uncomment and Insert your RAWG API Key here if you have one (http://rawg.io/login?forward=developer)\n      # RAWG_API_KEY: YOURAPIKEYHERE\n    volumes:\n      # Mount the folder where your games are\n      - /your/games/folder:/files\n      # Mount the folder where gamevault should store its images\n      - /your/images/folder:/images\n    ports:\n      - 8080:8080\n  db:\n    image: postgres:15\n    restart: unless-stopped\n    environment:\n      POSTGRES_USER: gamevault\n      POSTGRES_PASSWORD: RANDOMPASSWORD\n      POSTGRES_DB: gamevault\n    volumes:\n      # Mount the folder where your postgres database files should land\n      - /your/database/folder:/var/lib/postgresql/data\n'})}),"\n",(0,r.jsx)(n.h4,{id:"3-start-the-gamevault-server",children:"3. Start the GameVault server"}),"\n",(0,r.jsxs)(n.p,{children:["Open a terminal, navigate to the directory where the ",(0,r.jsx)(n.code,{children:"docker-compose.yml"})," file is located, and run the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose up -d\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will start the GameVault server and PostgreSQL server in the background. The ",(0,r.jsx)(n.code,{children:"-d"})," parameter detaches the process from the terminal."]}),"\n",(0,r.jsx)(n.p,{children:"Congratulations! You have successfully set up a GameVault server. You can now start adding games and managing your game library."}),"\n",(0,r.jsx)(n.h5,{id:"method-11-docker-setup-without-postgresql",children:"Method 1.1: Docker Setup without PostgreSQL"}),"\n",(0,r.jsx)(n.p,{children:"We don't recommend it but you can run GameVault without a PostgreSQL Database too using the following configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: "3.8"\nservices:\n  gamevault-backend:\n    image: phalcode/gamevault-backend:latest\n    restart: unless-stopped\n    environment:\n      DB_SYSTEM: "SQLITE"\n      # The Following Line grants Admin Role to account with this username upon registration.\n      SERVER_ADMIN_USERNAME: admin\n      # Uncomment and Insert your RAWG API Key here if you have one (https://gamevau.lt/docs/server-docs/indexing-and-metadata#rawg-api-key)\n      # RAWG_API_KEY: YOURAPIKEYHERE\n    volumes:\n      - /your/games/folder:/files\n      - /your/images/folder:/images\n      - /your/sqlite/database/folder:/db\n'})}),"\n",(0,r.jsx)(n.h3,{id:"method-2-caprover-one-click-app",children:"Method 2: Caprover One Click App"}),"\n",(0,r.jsxs)(n.p,{children:["If you're using ",(0,r.jsx)(n.a,{href:"https://caprover.com",children:"Caprover"}),", setting up a GameVault Server with a Postgres DB is just a click away."]}),"\n",(0,r.jsxs)(n.p,{children:["We have already created a Caprover One-Click-App Integration for this purpose. However, our app hasn't gained enough prominence to be included in the official One-Click-App Repository of Caprover. So, we decided to create our own ",(0,r.jsx)(n.a,{href:"https://github.com/Phalcode/caprover-one-click-apps",children:"third-party repository"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To use it, follow these simple steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Log in to your CapRover dashboard"}),"\n",(0,r.jsx)(n.li,{children:'Go to "Apps" and click on "One-Click Apps/Databases." Scroll down to the bottom'}),"\n",(0,r.jsxs)(n.li,{children:['Under "3rd party repositories", copy and paste the following link: ',(0,r.jsx)(n.code,{children:"https://phalcode.github.io/caprover-one-click-apps"})]}),"\n",(0,r.jsx)(n.li,{children:'Click the "Connect New Repository" button'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Now, all you need to do is search for 'GameVault' using the search box and follow the installation wizard."}),"\n",(0,r.jsx)(n.admonition,{title:"WebSocket-Support",type:"note",children:(0,r.jsx)(n.p,{children:"Make sure WebSocket-Support is enabled in Caprover."})}),"\n",(0,r.jsx)(n.h3,{id:"method-3-truenas-scale",children:"Method 3: TrueNAS Scale"}),"\n",(0,r.jsxs)(n.p,{children:["To add the gamevault server Truenas Scale, just add the ",(0,r.jsx)(n.a,{href:"https://truecharts.org/manual/SCALE/guides/getting-started",children:"truecharts catalog"}),", a community based catalog for Truenas Scale and install the ",(0,r.jsx)(n.strong,{children:"gamevault-backend"})," chart."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"gamevault-backend is pre-configured on your behalf with cloudnative-postgres as the default database which requires the prometheus-operator and cloudnative-pg operator to be installed prior."})}),"\n",(0,r.jsxs)(n.p,{children:["Setup your ",(0,r.jsx)(n.strong,{children:"Server Admin Username"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"You can enable these Menus to further configure your server:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Show Server Settings"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Show Games and Images Settings"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Show RAWG Server Settings"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Leave the Logs and Images storage options as PVC."}),"\n",(0,r.jsx)(n.p,{children:"Games storage option can be safely set hostpath if not using using any shares or switch to NFS otherwise."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Add your games/zips here."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"method-4-installing-without-containers",children:"Method 4: Installing Without Containers"}),"\n",(0,r.jsx)(n.p,{children:"If none of the methods above are suitable for you, you can also install Gamevault directly on your system without using containers."}),"\n",(0,r.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure Node is installed on your system (Check the required version in the first line of GameVaults Dockerfile)."}),"\n",(0,r.jsx)(n.li,{children:"Have a PostgreSQL server already running. (Or configure SQLITE later on)"}),"\n",(0,r.jsxs)(n.li,{children:["Install necessary packages: ",(0,r.jsx)(n.code,{children:"p7zip-full"}),", and ",(0,r.jsx)(n.code,{children:"p7zip-rar"})," (or their equivalents in your distribution)."]}),"\n",(0,r.jsxs)(n.li,{children:["Install the far superior package manager PNPM using the command: ",(0,r.jsx)(n.code,{children:"npm i -g pnpm"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"step-1-clone-the-source-code",children:"Step 1: Clone the Source Code"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Phalcode/gamevault-backend.git\ncd gamevault-backend\n"})}),"\n",(0,r.jsx)(n.h4,{id:"step-2-install-dependencies",children:"Step 2: Install Dependencies"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm install\n"})}),"\n",(0,r.jsx)(n.h4,{id:"step-3-build",children:"Step 3: Build"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run build\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Your production ready server is now in the ",(0,r.jsx)(n.code,{children:"dist/"})," folder."]}),"\n",(0,r.jsx)(n.h4,{id:"step-4-set-up-env-file",children:"Step 4: Set Up .env File"}),"\n",(0,r.jsxs)(n.p,{children:["Create a .env file in the ",(0,r.jsx)(n.code,{children:"dist/src/"})," directory and ",(0,r.jsx)(n.a,{href:"/docs/server-docs/configuration",children:"configure your GameVault as desired"})," or set them in your system / VM directly."]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"#dist/src/.env\nDB_SYSTEM=SQLITE\nSERVER_ADMIN_USERNAME=admin\n"})}),"\n",(0,r.jsx)(n.h4,{id:"step-5-start--stop-the-server",children:"Step 5: Start & Stop the Server"}),"\n",(0,r.jsx)(n.p,{children:"To start the Server run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"node dist/src/main\n"})}),"\n",(0,r.jsx)(n.p,{children:"Press CTRL + C to stop the Server."}),"\n",(0,r.jsx)(n.h3,{id:"more-methods",children:"More Methods"}),"\n",(0,r.jsx)(n.p,{children:"We're excited to announce that we're expanding our support for Setup Integrations! In the future, we plan to add more to our lineup."}),"\n",(0,r.jsx)(n.p,{children:"We do want to point out that each system has its own unique blueprint syntax, and it can take a bit of time to set up the blueprints of new Integrations just right."}),"\n",(0,r.jsx)(n.p,{children:"However, we're always looking for passionate individuals to join us in our mission! If you're interested in contributing and setting up an integration for any system, we'd love to have you on board. Together, we can make our platform even more accessible and user-friendly for everyone."}),"\n",(0,r.jsx)(n.h2,{id:"what-next",children:"What Next?"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Congratulations! \ud83e\udd73"})}),"\n",(0,r.jsx)(n.p,{children:"To set up and start using server, follow these steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Configure your server:"})," Customize the server settings to meet your specific needs. Refer to the ",(0,r.jsx)(n.a,{href:"/docs/server-docs/configuration",children:"configuration guide"})," for detailed instructions."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Add games:"})," Prepare your game files in the required format for GameVault to identify and install them correctly. Read the ",(0,r.jsx)(n.a,{href:"/docs/server-docs/structure",children:"structure chapter"})," for important information. Once ready, proceed to ",(0,r.jsx)(n.a,{href:"/docs/server-docs/adding-games",children:"add your games"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Enhance with Metadata:"})," Connect your server to RAWG, the world's largest video game database that GameVault utilizes for fetching game metadata. This will enrich your gaming experience. Learn how to establish the connection in the ",(0,r.jsx)(n.a,{href:"/docs/server-docs/indexing-and-metadata",children:"indexing and metadata guide"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Create an admin user:"})," Set up an admin user account to gain full administrative access to the application. Refer to the ",(0,r.jsx)(n.a,{href:"/docs/server-docs/user-management",children:"user management guide"})," for instructions on setting up the first user."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Enjoy your gaming experience with GameVault!"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(7294);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);