"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4195],{5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(6010),r="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(3117),l=a(7294),r=a(6010),i=a(2466),c=a(6775),o=a(1980),s=a(7392),u=a(12);function m(e){return function(e){return l.Children.map(e,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,l.useMemo)((function(){var e=null!=t?t:m(a);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,r=(0,c.k6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,o._X)(i),(0,l.useCallback)((function(e){if(i){var t=new URLSearchParams(r.location.search);t.set(i,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[i,r])]}function g(e){var t,a,n,r,i=e.defaultValue,c=e.queryString,o=void 0!==c&&c,s=e.groupId,m=d(e),g=(0,l.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var l=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:i,tabValues:m})})),E=g[0],v=g[1],b=f({queryString:o,groupId:s}),h=b[0],w=b[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,u.Nk)(t),n=a[0],r=a[1],[n,(0,l.useCallback)((function(e){t&&r.set(e)}),[t,r])]),N=y[0],S=y[1],I=function(){var e=null!=h?h:N;return p({value:e,tabValues:m})?e:null}();return(0,l.useLayoutEffect)((function(){I&&v(I)}),[I]),{selectedValue:E,selectValue:(0,l.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),w(e),S(e)}),[w,S,m]),tabValues:m}}var E=a(2389),v="tabList__CuJ",b="tabItem_LNqP";function h(e){var t=e.className,a=e.block,c=e.selectedValue,o=e.selectValue,s=e.tabValues,u=[],m=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=u.indexOf(t),n=s[a].value;n!==c&&(m(t),o(n))},p=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,l=u.indexOf(e.currentTarget)+1;a=null!=(n=u[l])?n:u[0];break;case"ArrowLeft":var r,i=u.indexOf(e.currentTarget)-1;a=null!=(r=u[i])?r:u[u.length-1]}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,i=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:function(e){return u.push(e)},onKeyDown:p,onClick:d},i,{className:(0,r.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":c===t})}),null!=a?a:t)})))}function w(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var r=a.find((function(e){return e.props.value===n}));return r?(0,l.cloneElement)(r,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function y(e){var t=g(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",v)},l.createElement(h,(0,n.Z)({},e,t)),l.createElement(w,(0,n.Z)({},e,t)))}function N(e){var t=(0,E.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},3518:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),l=a(4866),r=a(5162),i=a(2389);function c(e){var t=e.children,a=e.fallback;return(0,i.Z)()?n.createElement(n.Fragment,null,null==t?void 0:t()):null!=a?a:null}var o=a(1417);function s(e){return n.createElement(c,null,(function(){return n.createElement("div",null,n.createElement(l.Z,{groupId:"operating-systems",defaultValue:(0,o.l)(),values:[{label:"Windows",value:"windows"},{label:"macOS",value:"mac"},{label:"Linux",value:"linux"},{label:"GitHub Actions",value:"gha"}]},n.createElement(r.Z,{value:"windows"},n.createElement("a",{className:"no_monospace",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-win32.msi"},"Download Scala CLI for Windows")),n.createElement(r.Z,{value:"linux"},n.createElement("p",null,"Run the following one-line command in your terminal:"),n.createElement("code",null,"curl -sSLf https://scala-cli.virtuslab.org/get | sh")),n.createElement(r.Z,{value:"mac"},n.createElement("p",null,"Run the following one-line command in your terminal:"),n.createElement("code",null,"brew install Virtuslab/scala-cli/scala-cli")),n.createElement(r.Z,{value:"gha"},n.createElement("p",null,"Add the ",n.createElement("a",{href:"https://github.com/VirtusLab/scala-cli-setup"},"scala-cli-setup")," action to your workflow:"),n.createElement("code",null,"steps:",n.createElement("br",null),"\xa0\xa0\xa0\xa0- uses: coursier/cache-action@v6",n.createElement("br",null),"\xa0\xa0\xa0\xa0- uses: VirtusLab/scala-cli-setup@main",n.createElement("br",null)))))}))}},1434:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){return n.createElement("div",{className:"col col--"+e.colsize},n.createElement("h1",{className:"section-title"+(e.promptsign?" with-before":"")},e.title))}},1260:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(941);function r(e){return n.createElement("div",{className:"section-image-box__row row "},n.createElement("div",{className:"section-image-box__row-text col col--1 left-margin-stub"}),n.createElement("div",{className:"section-image-box__row-text col col--5 "},n.createElement("div",{className:"section-image-box__row-text-wrapper"},n.createElement("h3",null,e.title),n.createElement("div",{className:"content"},e.children))),n.createElement("div",{className:"section-image-box__row-image col col--6 "},n.createElement("div",{className:"section-image-box__row-image-wrapper"},e.image?n.createElement("div",{className:"green_border"},n.createElement(l.Z,{alt:e.image,sources:{light:"/img/"+e.image,dark:"/img/dark/"+e.image}})):"")),n.createElement("div",{className:"section-image-box__row-text col col--1 right-margin-stub"}))}},9882:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){return n.createElement("section",{className:"section "+e.className},e.children)}},115:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){var t=e.title.toLowerCase().split(" ").join("-"),a=e.colBigTitle||3,l=n.createElement("a",{href:"#"+t},">_");return n.createElement("div",{className:"section-about__wrapper row",id:t},n.createElement("div",{className:"col col--1 big-title pre-title"},l),n.createElement("div",{className:"col col--"+a+" big-title"},n.createElement("span",{className:"pre-title-mobile"},l)," ",e.title),n.createElement("div",{className:"col col--8 description"},e.children))}},3352:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(9882),r=a(941);function i(e){return n.createElement(l.Z,{className:"section-yellow-banner"},n.createElement("div",{className:"row row--align-center"},n.createElement("div",{className:"col col--6"},n.createElement("h1",null,e.title),n.createElement("div",{className:"description"},e.children)),n.createElement("div",{className:"col col--6"},n.createElement("div",{className:"image-wrapper"},n.createElement(r.Z,{className:"image",alt:e.image,sources:{light:"/img/"+e.image,dark:"/img/dark/"+e.image}})))))}},604:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(1260),r=[n.createElement(l.Z,{image:"gifs/versions.gif",title:"Scala versions, dependencies and JVMs",key:"versions",projects:"true"},n.createElement("p",null,"Scala CLI is built on top of coursier",n.createElement("br",null),"This allow us to manage Scala versions, dependencies and JVMs so you can test your code in different environments by changing single option."),n.createElement("p",null,"Scala CLI ships with all its dependencies",n.createElement("br",null),"No need to fluff with installing JVM or setting up PATH."),n.createElement("p",null,n.createElement("i",null,"Some additional setup may be required for ",n.createElement("a",{href:"/install#scala-js"},"JS")," and ",n.createElement("a",{href:"/install#scala-native"},"Native")))),n.createElement(l.Z,{image:"gifs/universal_tool.gif",title:"Universal tool",key:"universal",projects:"true"},n.createElement("p",null,"If you want to use older ",n.createElement("b",null,"version of Scala")," or run your code in ",n.createElement("b",null,"JS")," or ",n.createElement("b",null,"Native")," environments we've got you covered.",n.createElement("br",null)),n.createElement("p",null,"Switching between platforms or Scala versions is as easy as changing a parameter."),n.createElement("p",null," ",n.createElement("i",null,"Some additional setup may be required for ",n.createElement("a",{href:"/install#scala-js"},"JS")," and ",n.createElement("a",{href:"/install#scala-native"},"Native")))),n.createElement(l.Z,{image:"buildtools.png",title:"We do not call Scala CLI a build tool",key:"buildtool",projects:"true"},n.createElement("p",null,"Scala CLI shares some similarities with build tools, but doesn't aim at supporting multi-module projects, nor to be extended via a task system known from sbt, mill or bazel."),n.createElement("p",null,"Scala ecosystem has multiple amazing build tools, there is no need to create another multipurpose build tool.")),n.createElement(l.Z,{image:"gifs/complete-install.gif",title:"Complete installation",key:"complete-install",education:"true"},n.createElement("p",null,"Scala CLI comes with batteries included. No additional installation is required, no more fluffing with setting up the correct Java version or ",n.createElement("code",null,"PATH")),n.createElement("p",null,"Scala CLI manages JVMs, Scala and other used tools under the hood.")),n.createElement(l.Z,{image:"gifs/defaults.gif",title:"Solid defaults",key:"defaults",education:"true"},n.createElement("p",null,"No additional configuration is needed to most Scala CLI commands."),n.createElement("p",null,"Scala CLI is configured out of the box to use the latest stable versions and other commands such as formatter or compiler contain reasonable defaults.")),n.createElement(l.Z,{image:"gifs/learning_curve.gif",title:"No learning curve",key:"curve",education:"true"},n.createElement("p",null,"Scala CLI does not use complex configuration language, its options are simple and self-explanatory"),n.createElement("p",null,"There are no big differences in running repl or .scala files so expanding the results of repl session into a small project does not require learning new concepts from Scala CLI perspective")),n.createElement(l.Z,{image:"gifs/powerful_scripts.gif",title:"Scripts are as powerful as other programs",key:"scripts-as-apps",scripting:"true"},n.createElement("p",null,"Scripts in Scala CLI can use dependencies and other features as standard Scala programs. Scala CLI is command-line first giving access to all its features without need for any configuration file or specific project structure.")),n.createElement(l.Z,{image:"gifs/embeddable_scripts.gif",title:"Embeddable Scripts",key:"embed-scripts",scripting:"true"},n.createElement("p",null,"Scala CLI can be set up in shebang lines, making your *.scala or *.sc files runnable"),n.createElement("p",null,"Scala CLI supports piping inputs and is designed to be embeddable in other scripts, turning Scala into proper scripting language")),n.createElement(l.Z,{image:"gifs/self-contained-examples.gif",title:"Self-contained examples",key:"self-contained-examples",prototyping:"true"},n.createElement("p",null,"With Scala CLI, configuration can be included in source code so complex examples can be self-contained and shipped as e.g. gist. Moreover, Scala CLI can compile, run and test gists without any manual work!"),n.createElement("p",null,"Scala CLI is a perfect tool to submit and reproduce bugs"))];function i(){return r}},1417:function(e,t,a){a.d(t,{l:function(){return n}});var n=function(){var e=function(e){return"undefined"!=typeof window&&-1!==window.navigator.userAgent.indexOf(e)};return e("Win")?"windows":e("Mac")?"mac":"linux"}},7302:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),l=a(2263),r=a(4774),i=a(9882);a(1260);function c(e){return n.createElement("div",{className:"section__header"},n.createElement("h2",null,e.title),n.createElement("div",{className:"section__header-description"},e.children))}function o(e){return n.createElement("div",{className:"section-features__item col col--4"},n.createElement("div",{className:"section-features__item-wrapper"},n.createElement("div",{className:"icon"},e.icon?n.createElement("img",{src:e.icon,alt:e.title}):""),n.createElement("div",{className:"title"},e.title),n.createElement("div",{className:"desc"},e.children)))}var s=a(115);function u(e){return!!e.slug?n.createElement("a",{href:"/"+e.slug,className:"col col--4 use-box-wrapper"},n.createElement("div",{className:"use-box"},n.createElement("div",{className:"icon-wrapper"},n.createElement("img",{src:"img/ico-"+e.slug+".png",alt:e.slug+" icon"})),n.createElement("h3",null,e.title),n.createElement("p",null,e.description),n.createElement("div",{className:"read-more-wrap"},n.createElement("div",{className:"read-more with-before"},"Read more")))):n.createElement("div",{className:"col col--4 use-box-wrapper"},n.createElement("div",{className:"use-box your-case"},n.createElement("div",{className:"icon-wrapper"},n.createElement("img",{className:"light-theme",src:"img/ico-yours.png",alt:"your use case icon"}),n.createElement("img",{className:"dark-theme",src:"img/ico-yours-dark.png",alt:"your use case icon"})),n.createElement("h3",null,e.title),n.createElement("p",null,e.description)))}var m=a(1434),d=a(3518),p=a(3352),f=a(604),g=function(e){var t=(0,l.Z)().siteConfig;return n.createElement(r.Z,{title:t.title,description:t.tagline},n.createElement("div",{className:"container content"},n.createElement(p.Z,{title:"Scala CLI is a command-line tool to interact with the Scala language.",image:"gifs/demo.gif"},n.createElement("p",null,"It lets you compile, run, test, and package your Scala code (and more!)")),n.createElement(i.Z,{className:"section-about"},n.createElement(s.Z,{title:"Why Scala CLI?"},n.createElement("p",null,"Scala CLI combines ",n.createElement("em",null,"all")," the features you need to learn and use Scala in your scripts, playgrounds and (single-module) projects."),n.createElement("p",null,"To get started you can read ",n.createElement("a",{href:"/docs/overview"},"the documentation"),", or just ",n.createElement("a",{href:"/install"},"install")," and enjoy ",n.createElement("code",null,"scala-cli"),"."),n.createElement("p",null,"Scala CLI will soon become the default Scala runner and will be shipped as `scala` (",n.createElement("a",{href:"https://virtuslab.com/blog/scala-cli-the-new-scala-runner/"},"read more"),")."))),n.createElement(i.Z,{className:"section-features"},n.createElement("div",{className:"section-features__row row"},n.createElement(o,{title:"Intuitive, simple",icon:"img/hand.png"},n.createElement("strong",null,"No complicated mechanisms, tasks, plugins or extensions:")," just a single-module. All our commands have multiple aliases and follow well-known conventions."),n.createElement(o,{title:"Fast",icon:"img/rocket.png"},n.createElement("strong",null,"Scala CLI is optimized to be as fast as possible.")," CLI is compiled to native code and compilations are ",n.createElement("a",{href:"/docs/reference/bloop"},"offloaded to bloop"),"."),n.createElement(o,{title:"Command-line first",icon:"img/monitor.png"},n.createElement("strong",null,"Scala CLI does not require a configuration file, and all in-file configurations can be overridden by command-line.")," No additional installation or setup of an environment (such as a specific working directory) are required."))),n.createElement("div",{id:"use_cases"}),n.createElement(i.Z,{className:"section-use-tiles"},n.createElement("div",{className:"row"},n.createElement(m.Z,{title:"Who is Scala CLI designed for?",colsize:"12",promptsign:!0}),n.createElement("div",{className:"col col--12"},n.createElement("div",{className:"use-boxes row"},n.createElement(u,{title:"Education",slug:"education",description:"Scala CLI is a help \u2014 not a distraction \u2014 while learning Scala, a library or programming in general."}),n.createElement(u,{title:"Scripting",slug:"scripting",description:"Scala CLI has all the tools to create (or be integrated into) scripts with the whole power of the Scala ecosystem."}),n.createElement(u,{title:"Prototyping, Experimenting, Reproducing",slug:"prototyping",description:"With Scala CLI, experimenting with different libraries, Scala or JVM versions, or compiler options is easy and fun."}),n.createElement(u,{title:"Single-module projects",slug:"projects",description:"Scala CLI provides all the tools you need to manage single-module projects like CLI or basic web applications, or server-less lambdas."}),n.createElement(u,{title:"Your use case",slug:!1,description:n.createElement("span",null,"If you see other use cases for Scala CLI, let us know using ",n.createElement("a",{href:"https://github.com/VirtusLab/scala-cli/discussions/categories/ideas"},"GitHub Discussions!"))}))))),n.createElement(i.Z,{className:"section-install-cli"},n.createElement("div",{className:"row"},n.createElement(m.Z,{title:"Install Scala CLI",colsize:"4",promptsign:!0}),n.createElement("div",{className:"col col--8"},n.createElement(d.Z,null)))),n.createElement(i.Z,{className:"section-image-box"},n.createElement(c,{title:"Still undecided?"},"Here come our ",n.createElement("span",null,"main features")),(0,f.Z)())))}}}]);