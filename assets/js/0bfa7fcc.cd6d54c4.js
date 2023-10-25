"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[6071],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(911);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),f=n,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return o?r.createElement(m,i(i({ref:t},u),{},{components:o})):r.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},3109:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=o(7462),n=(o(911),o(4137));const a={title:"A Closer Look at Crackpipes 'Source-Available' Nature",authors:["alfagun74"],tags:["source-available software","open-source","transparency","control","software development","code access","hybrid model","software licensing","revenue generation","user engagement"]},i=void 0,l={permalink:"/blog/2023/07/13/",editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/blog/2023-07-13.md",source:"@site/blog/2023-07-13.md",title:"A Closer Look at Crackpipes 'Source-Available' Nature",description:"Hey everyone,",date:"2023-07-13T00:00:00.000Z",formattedDate:"July 13, 2023",tags:[{label:"source-available software",permalink:"/blog/tags/source-available-software"},{label:"open-source",permalink:"/blog/tags/open-source"},{label:"transparency",permalink:"/blog/tags/transparency"},{label:"control",permalink:"/blog/tags/control"},{label:"software development",permalink:"/blog/tags/software-development"},{label:"code access",permalink:"/blog/tags/code-access"},{label:"hybrid model",permalink:"/blog/tags/hybrid-model"},{label:"software licensing",permalink:"/blog/tags/software-licensing"},{label:"revenue generation",permalink:"/blog/tags/revenue-generation"},{label:"user engagement",permalink:"/blog/tags/user-engagement"}],readingTime:2.535,hasTruncateMarker:!1,authors:[{name:"Alper Alkan",title:"Co-Founder of Phalcode",url:"https://github.com/Alfagun74",imageURL:"https://github.com/Alfagun74.png",key:"alfagun74"}],frontMatter:{title:"A Closer Look at Crackpipes 'Source-Available' Nature",authors:["alfagun74"],tags:["source-available software","open-source","transparency","control","software development","code access","hybrid model","software licensing","revenue generation","user engagement"]},prevItem:{title:"A New Name",permalink:"/blog/2023/07/15/"},nextItem:{title:"Battling Harassment and Trolls in Our App Community",permalink:"/blog/2023/07/09/"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Hey everyone,"),(0,n.kt)("p",null,'today i want to clarify why Crackpipe isn\'t considered "open-source" by definition.'),(0,n.kt)("p",null,"You see, Crackpipe is what we like to call ",(0,n.kt)("a",{parentName:"p",href:"https://wikipedia.org/wiki/Source-available_software"},'"source-available"')," software. This means that our code is open for you to explore and modify, but it doesn't fully meet all the criteria of being considered open-source. I want to take a moment to explain what open-source truly means and why we've taken a slightly different approach."),(0,n.kt)("p",null,"According to the widely recognized definitions, ",(0,n.kt)("a",{parentName:"p",href:"https://wikipedia.org/wiki/Open-source_software"},'"open-source"')," software, as one would think, not only provides access to the source code but also offers certain freedoms to its users. It allows them to use, modify, and distribute the software freely, even for commercial purposes."),(0,n.kt)("p",null,"For a self-hosted app like Crackpipe, we believe it's crucual to disclose the source code. We want you, our users, to have full transparency and control over the software you use on your servers. We don't want you to be unaware of what's happening behind the scenes, as is sometimes the case with closed-source applications like Plex, for example."),(0,n.kt)("p",null,"Now, you may be wondering why we didn't make Crackpipe fully open-source. The answer lies in our desire to protect our code from unauthorized use and commercial exploitation. While we absolutely encourage you to copy, modify, and share our code for personal use, we want to prevent others from profiting off our hard work by selling our software without our consent."),(0,n.kt)("p",null,"It's important to acknowledge that maintaining and developing a software project requires resources. While we admire the open-source community and its valuable contributions, sustaining Crackpipe solely through donations or offering it for free indefinitely is not feasible. For instance, Jellyfin, a popular open-source app developed over a decade, generates only around $13,500 per year (according to their opencollective page). In contrast, Plex, a closed-source alternative, earns a significant $8.5 million annually. Our company's main goal is to keep the core functionality of Crackpipe free, but we also need to explore ways to generate revenue in order to support its future growth and improvement. We are currently considering monetizing additional convenience features for the Client Application in the future, although nothing has been finalized yet."),(0,n.kt)("p",null,'We genuinely appreciate your understanding. As a small business with just two members, we strive to provide you with a valuable product but cannot continue to do so as volunteers indefinitely. Sustaining losses in the long term would not be sustainable, especially considering our local tax obligations. We have families and commitments that cannot be neglected, and this project is not our primary job. Therefore, please understand that Crackpipe may not strictly align with the traditional definition of "open-source," and we no longer characterize it as such. Our intention is to be transparent and present our perspective. Your understanding, support, and empathy mean a great deal to us.'),(0,n.kt)("p",null,"If you have any thoughts or comments on this topic, we'd be more than happy to hear from you. Feel free to share your feedback on our Discord server. We truly value your input and look forward to engaging with you there."))}d.isMDXComponent=!0}}]);