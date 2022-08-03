"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9277],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?o.createElement(f,l(l({ref:n},p),{},{components:t})):o.createElement(f,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7469:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return m}});var o=t(3117),r=t(102),i=(t(7294),t(3905)),l=["components"],a={title:"Completions",sidebar_position:19},c=void 0,s={unversionedId:"commands/completions",id:"commands/completions",title:"Completions",description:"The completions commands can be used to install Scala CLI completions into your shell and uninstall them.",source:"@site/docs/commands/completions.md",sourceDirName:"commands",slug:"/commands/completions",permalink:"/docs/commands/completions",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/completions.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"Completions",sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Doc",permalink:"/docs/commands/doc"},next:{title:"Publish Setup",permalink:"/docs/commands/publishing/publish-setup"}},p={},m=[{value:"Installing completions",id:"installing-completions",level:2},{value:"Uninstalling completions",id:"uninstalling-completions",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The completions commands can be used to install Scala CLI completions into your shell and uninstall them."),(0,i.kt)("h2",{id:"installing-completions"},"Installing completions"),(0,i.kt)("p",null,"To install completions run the ",(0,i.kt)("inlineCode",{parentName:"p"},"install-completions")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli install-completions\n")),(0,i.kt)("h2",{id:"uninstalling-completions"},"Uninstalling completions"),(0,i.kt)("p",null,"To uninstall completions run the ",(0,i.kt)("inlineCode",{parentName:"p"},"uninstall-completions")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli uninstall-completions\n")))}d.isMDXComponent=!0}}]);