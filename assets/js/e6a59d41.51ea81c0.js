"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[356],{7208:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=i(5893),n=i(1151);const r={sidebar_position:6},a="User Management",o={id:"server-docs/user-management",title:"User Management",description:"This documentation provides instructions on user management for the GameVault server. User management involves configuring the initial admin user, enabling/disabling user registration, managing user activation, and assigning roles. These features are crucial for controlling user access, maintaining security, and administering the server effectively.",source:"@site/docs/server-docs/user-management.md",sourceDirName:"server-docs",slug:"/server-docs/user-management",permalink:"/docs/server-docs/user-management",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/user-management.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Updating Games",permalink:"/docs/server-docs/updating-games"},next:{title:"Game Indexing and Information Retrieval",permalink:"/docs/server-docs/indexing-and-metadata"}},d={},c=[{value:"Admin User",id:"admin-user",level:2},{value:"Initial Setup",id:"initial-setup",level:3},{value:"Automatic Admin Permissions",id:"automatic-admin-permissions",level:3},{value:"Recovering Access to Admin User",id:"recovering-access-to-admin-user",level:2},{value:"User Registration",id:"user-registration",level:2},{value:"User Activation",id:"user-activation",level:2},{value:"User Roles",id:"user-roles",level:2}];function l(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"user-management",children:"User Management"}),"\n",(0,t.jsx)(s.p,{children:"This documentation provides instructions on user management for the GameVault server. User management involves configuring the initial admin user, enabling/disabling user registration, managing user activation, and assigning roles. These features are crucial for controlling user access, maintaining security, and administering the server effectively."}),"\n",(0,t.jsx)(s.h2,{id:"admin-user",children:"Admin User"}),"\n",(0,t.jsx)(s.h3,{id:"initial-setup",children:"Initial Setup"}),"\n",(0,t.jsxs)(s.p,{children:["To configure the initial admin user for the GameVault server, you can utilize Docker environment variables. By setting the ",(0,t.jsx)(s.code,{children:"SERVER_ADMIN_USERNAME"})," environment variable to the desired username for the admin user and afterwards manually registering that user in the GameVault App, you can establish the initial admin user account."]}),"\n",(0,t.jsx)(s.p,{children:"For example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-plaintext",children:"SERVER_ADMIN_USERNAME=adminuser\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["Replace ",(0,t.jsx)(s.code,{children:"adminuser"})," with your preferred username."]})}),"\n",(0,t.jsx)(s.p,{children:"Once the admin user is configured and registered, you can proceed with user registration, activation, and role assignment."}),"\n",(0,t.jsx)(s.h3,{id:"automatic-admin-permissions",children:"Automatic Admin Permissions"}),"\n",(0,t.jsx)(s.p,{children:"Upon registration of the initial admin user, the GameVault server will automatically grant administrative permissions to the user. This ensures that the admin user has the necessary privileges to administrate the server."}),"\n",(0,t.jsx)(s.p,{children:"If the admin user was misconfigured to not have admin permissions or if the user already exists, the server will automatically grant admin permissions to that user upon startup. This ensures that the admin user has the correct permissions even if there are configuration errors or existing users."}),"\n",(0,t.jsx)(s.p,{children:"By automatically assigning admin permissions, GameVault simplifies the setup process and ensures that the admin user has the appropriate access levels from the start."}),"\n",(0,t.jsx)(s.h2,{id:"recovering-access-to-admin-user",children:"Recovering Access to Admin User"}),"\n",(0,t.jsx)(s.p,{children:"In the event that the server owner gets locked out of the admin user account due to password loss or other reasons, the GameVault Server provides a way to recover access."}),"\n",(0,t.jsxs)(s.p,{children:["To regain access, set the ",(0,t.jsx)(s.code,{children:"SERVER_ADMIN_PASSWORD"})," environment variable to the desired password for the admin user."]}),"\n",(0,t.jsx)(s.p,{children:"For example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-plaintext",children:"SERVER_ADMIN_PASSWORD=mynewpassword\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["Replace ",(0,t.jsx)(s.code,{children:"mynewpassword"})," with your preferred password."]})}),"\n",(0,t.jsx)(s.p,{children:"Upon the next startup of the GameVault server, the admin user's password will be updated to the specified password, allowing the"}),"\n",(0,t.jsx)(s.h2,{id:"user-registration",children:"User Registration"}),"\n",(0,t.jsx)(s.p,{children:"GameVault offers a user registration feature that allows new users to create accounts and gain access to the application. However, in certain scenarios where tighter control over user access is required, you have the option to disable user registration."}),"\n",(0,t.jsxs)(s.p,{children:["By setting the ",(0,t.jsx)(s.code,{children:"SERVER_REGISTRATION_DISABLED"})," environment variable to ",(0,t.jsx)(s.code,{children:"true"}),", you can easily disable user registration in GameVault. Disabling registration prevents new users from creating accounts and accessing the application."]}),"\n",(0,t.jsx)(s.p,{children:"This feature provides administrators with flexibility and control over user onboarding, ensuring that only approved users can utilize the application."}),"\n",(0,t.jsx)(s.h2,{id:"user-activation",children:"User Activation"}),"\n",(0,t.jsx)(s.p,{children:"In GameVault, the activation process is a crucial step to authorize and activate new user accounts. By default, newly registered users are required to be activated by an administrator before they can fully utilize the application."}),"\n",(0,t.jsx)(s.p,{children:"Unactivated users have limited rights, even less than that of a guest. They are unable to access certain locked APIs within GameVault. Activation ensures that only authorized individuals can interact with the application and its sensitive functionalities."}),"\n",(0,t.jsx)(s.p,{children:"Admins, with their highest level of control, are exempt from activation checks. They can activate new users through the admin panel within the GameVault application."}),"\n",(0,t.jsxs)(s.p,{children:["However, if you wish to bypass the mandatory activation step and allow new users to immediately gain full access to GameVault, you can disable the activation process. Simply set the ",(0,t.jsx)(s.code,{children:"SERVER_ACCOUNT_ACTIVATION_DISABLED"})," environment variable to ",(0,t.jsx)(s.code,{children:"true"}),". This activates users automatically upon registration, removes the activation requirement and grants immediate access to new users."]}),"\n",(0,t.jsx)(s.h2,{id:"user-roles",children:"User Roles"}),"\n",(0,t.jsx)(s.p,{children:"Roles play a crucial role in ensuring the security and proper functioning of the GameVault server. They determine the permissions and access levels granted to users within the application."}),"\n",(0,t.jsx)(s.p,{children:"GameVault implements the following roles:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Role"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Level"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Guest"}),(0,t.jsx)(s.td,{children:"This role allows users to view all content within the application."}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Users (Default)"}),(0,t.jsx)(s.td,{children:"This role includes permissions such as downloading games, creating progresses, and editing the user's own profile."}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Editors"}),(0,t.jsx)(s.td,{children:"Editors have the ability to edit and remap games within the application."}),(0,t.jsx)(s.td,{children:"3"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Admins"}),(0,t.jsx)(s.td,{children:"Admins possess full control over user management and can edit user profiles."}),(0,t.jsx)(s.td,{children:"4"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"By assigning appropriate roles to users, you can ensure that they have the necessary access and privileges based on their responsibilities."})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>o,a:()=>a});var t=i(7294);const n={},r=t.createContext(n);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);