"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[6007],{61838:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=t(11527),n=t(25847);const i={sidebar_position:8},o="Images",r={id:"server-docs/images",title:"Images",description:"This page outlines how images are handled within the backend application.",source:"@site/docs/server-docs/images.md",sourceDirName:"server-docs",slug:"/server-docs/images",permalink:"/docs/server-docs/images",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/images.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docs",previous:{title:"Database Backup & Restoration",permalink:"/docs/server-docs/backup-and-restore"},next:{title:"WebSockets",permalink:"/docs/server-docs/websockets"}},c={},d=[{value:"Supported Image Types",id:"supported-image-types",level:2},{value:"Image Persistence",id:"image-persistence",level:2},{value:"Reusing Images",id:"reusing-images",level:2},{value:"Image Garbage Collection",id:"image-garbage-collection",level:2}];function l(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"images",children:"Images"}),"\n",(0,a.jsx)(s.p,{children:"This page outlines how images are handled within the backend application."}),"\n",(0,a.jsx)(s.h2,{id:"supported-image-types",children:"Supported Image Types"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:".bmp"}),", ",(0,a.jsx)(s.code,{children:".jpg"}),", ",(0,a.jsx)(s.code,{children:".jpeg"}),", ",(0,a.jsx)(s.code,{children:".png"}),", ",(0,a.jsx)(s.code,{children:".gif"}),", ",(0,a.jsx)(s.code,{children:".ico"}),", ",(0,a.jsx)(s.code,{children:".tif"}),", ",(0,a.jsx)(s.code,{children:".tiff"})]}),"\n",(0,a.jsx)(s.h2,{id:"image-persistence",children:"Image Persistence"}),"\n",(0,a.jsxs)(s.p,{children:["To ensure availability, performance, and efficient compression, GameVault persists all images on the filesystem using the images directory (by default ",(0,a.jsx)(s.code,{children:"/images"}),") and the database. This includes all types of images, such as box arts, screenshots, and thumbnails. The storage path for images can be customized by modifying the ",(0,a.jsx)(s.code,{children:"VOLUMES_IMAGES"})," environment variable."]}),"\n",(0,a.jsx)(s.h2,{id:"reusing-images",children:"Reusing Images"}),"\n",(0,a.jsx)(s.p,{children:"GameVault stores each image one-to-one, with no image recycling."}),"\n",(0,a.jsx)(s.p,{children:"In the past, GameVault used to recycle images to save space and reduce duplication. But we removed this feature because the process of removing repeated images became too complex, and it's very rare for the same image to be used multiple times on a server."}),"\n",(0,a.jsx)(s.h2,{id:"image-garbage-collection",children:"Image Garbage Collection"}),"\n",(0,a.jsx)(s.admonition,{title:"Potential data loss",type:"danger",children:(0,a.jsxs)(s.p,{children:["Garbage collection ",(0,a.jsx)(s.strong,{children:"can result in data loss"}),", as it will ",(0,a.jsx)(s.strong,{children:"delete any files inside the images folder"})," without an association in the database. For example if you set up a new, empty database. It is advisable to regularly back up your images just to be safe. If you don't want to lose any data, you can disable garbage collection by setting the ",(0,a.jsx)(s.code,{children:"IMAGE_GC_DISABLED"})," environment variable to ",(0,a.jsx)(s.code,{children:"true"}),"."]})}),"\n",(0,a.jsx)(s.p,{children:"GameVault regularly cleans up its images in the database and filesystem to keep things tidy. We call this process garbage collection."}),"\n",(0,a.jsxs)(s.p,{children:["You can control how often the garbage colletion happens by changing the value of ",(0,a.jsx)(s.code,{children:"IMAGE_GC_INTERVAL_IN_MINUTES"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"During cleanup, GameVault first gets rid of all images in the database that aren't used. Afterwards, it deletes all image files in the images folder that don't match any database entries. So please don't put any files in the images folder that you don't want to be deleted."}),"\n",(0,a.jsxs)(s.p,{children:["If you want to turn off this feature, you can use the ",(0,a.jsx)(s.code,{children:"IMAGE_GC_DISABLED"})," setting."]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},25847:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>o});var a=t(50959);const n={},i=a.createContext(n);function o(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);