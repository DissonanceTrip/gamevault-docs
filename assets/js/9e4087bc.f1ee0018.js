"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[3608],{28151:(e,a,s)=>{s.r(a),s.d(a,{default:()=>o});s(67294);var t=s(83699),r=s(97325),i=s(35463),c=s(93776),l=s(13899),n=s(85893);function d(e){let{year:a,posts:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{as:"h3",id:a,children:a}),(0,n.jsx)("ul",{children:s.map((e=>(0,n.jsx)("li",{children:(0,n.jsxs)(t.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function h(e){let{years:a}=e;return(0,n.jsx)("section",{className:"margin-vert--lg",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:a.map(((e,a)=>(0,n.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,n.jsx)(d,{...e})},a)))})})})}function o(e){let{archive:a}=e;const s=(0,r.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),t=(0,r.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),d=function(e){const a=e.reduce(((e,a)=>{const s=a.metadata.date.split("-")[0],t=e.get(s)??[];return e.set(s,[a,...t])}),new Map);return Array.from(a,(e=>{let[a,s]=e;return{year:a,posts:s}}))}(a.blogPosts);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.d,{title:s,description:t}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("header",{className:"hero hero--primary",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(l.Z,{as:"h1",className:"hero__title",children:s}),(0,n.jsx)("p",{className:"hero__subtitle",children:t})]})}),(0,n.jsx)("main",{children:d.length>0&&(0,n.jsx)(h,{years:d})})]})]})}}}]);