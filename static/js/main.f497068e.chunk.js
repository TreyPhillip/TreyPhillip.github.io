(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{56:function(e,t,c){},57:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var i=c(0),a=c.n(i),s=c(22),n=c.n(s),o=(c(56),c(21)),r=c(12),l=c(7),d=(c(57),c(34)),j=c(35),h=c(38),b=c(37),p=c(18),u=c(20),m=c(1),O=function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(e){var i;return Object(d.a)(this,c),(i=t.call(this,e)).state={collapsed:i.props.collapsed,toggled:i.props.toggled},i}return Object(j.a)(c,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"app  ".concat(this.state.toggled?"toggled":""),children:Object(m.jsxs)(p.c,{collapsed:this.props.collapsed,toggled:this.props.toggled,breakPoint:"md",onToggle:this.props.handleToggleSidebar,children:[Object(m.jsx)(p.e,{onClick:function(){return e.props.handleToggleSidebar(e.props.toggled)},children:Object(m.jsx)("div",{style:{padding:"30px",textTransform:"uppercase",fontWeight:"bold",fontSize:14,letterSpacing:"1px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Object(m.jsx)(u.a,{onClick:function(){return e.props.handleToggleSidebar(!0)}})})}),Object(m.jsx)(p.d,{children:Object(m.jsxs)(p.a,{iconShape:"circle",children:[Object(m.jsxs)(p.b,{icon:Object(m.jsx)(u.c,{}),children:["Home",Object(m.jsx)(r.b,{to:"/"})]}),Object(m.jsxs)(p.b,{icon:Object(m.jsx)(u.d,{}),children:["About me",Object(m.jsx)(r.b,{to:"/About"})]}),Object(m.jsxs)(p.b,{icon:Object(m.jsx)(u.f,{}),children:["Projects",Object(m.jsx)(r.b,{to:"/Projects"})]}),Object(m.jsxs)(p.b,{icon:Object(m.jsx)(u.e,{}),children:["Services",Object(m.jsx)(r.b,{to:"/Services"})]}),Object(m.jsxs)(p.b,{icon:Object(m.jsx)(u.b,{}),children:["Contact Me",Object(m.jsx)(r.b,{to:"/Contact"})]})]})})]})})}}]),c}(i.Component);function x(){return Object(m.jsx)("main",{children:Object(m.jsx)("header",{className:"intro",children:Object(m.jsx)("h1",{children:"Hi, I'm Trey. A junior developer"})})})}var g=c(85),f=c(98),y=c(88),v=c(92),w=c(90),k=c(89),N=c(93),P=c(91),I=Object(g.a)((function(e){return{root:{maxWidth:375,minHeight:375,maxHeight:375,backgroundColor:"white"},media:{height:340},control:{padding:e.spacing(2)}}}));function C(e){var t=I();return Object(m.jsxs)(f.a,{className:t.root,children:[Object(m.jsx)(y.a,{children:Object(m.jsxs)(r.b,{to:e.project.url,children:[Object(m.jsx)(k.a,{component:"img",height:"150",image:e.project.image,title:""}),Object(m.jsxs)(w.a,{children:[Object(m.jsx)(P.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.project.title}),Object(m.jsx)(P.a,{variant:"body2",color:"textSecondary",component:"p",children:e.project.description})]})]})}),Object(m.jsx)(v.a,{children:Object(m.jsx)("a",{href:e.project.github,rel:"noopener noreferrer",target:"_blank",children:Object(m.jsx)(N.a,{size:"small",color:"primary",label:"GitHub",children:"GitHub"})})})]})}var S=c(97),T=c(94),D=c(96),H=c(95),z=Object(H.a)()((function(e){var t,c=(t=e.width,Object(H.b)("xl",t)?5:Object(H.b)("lg",t)?4:Object(H.b)("md",t)?3:Object(H.b)("sm",t)?2:Object(H.b)("xs",t)?1:void 0);return Object(m.jsx)("div",{children:Object(m.jsx)(S.a,{className:"project-list",children:Object(m.jsx)(T.a,{cellHeight:460,cols:c,spacing:15,children:e.project.map((function(e){return Object(m.jsx)(D.a,{fullwidth:"true",className:"project-tile",children:Object(m.jsx)(C,{project:e})},e.projectid)}))})})})})),M=Object(g.a)((function(e){return{root:{maxWidth:375,minHeight:375,maxHeight:375,backgroundColor:"white"},media:{height:340},control:{padding:e.spacing(2)}}}));function A(e){var t=M();return Object(m.jsx)(f.a,{className:t.root,children:Object(m.jsx)(y.a,{children:Object(m.jsx)(w.a,{children:Object(m.jsxs)(P.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Total Cost: ",e.build.price," ",Object(m.jsx)("br",{})," ",Object(m.jsx)("br",{}),"Pictures coming soon"]})})})})}var B=Object(H.a)()((function(e){var t,c=(t=e.width,Object(H.b)("xl",t)?5:Object(H.b)("lg",t)?4:Object(H.b)("md",t)?3:Object(H.b)("sm",t)?2:Object(H.b)("xs",t)?1:void 0);return Object(m.jsx)("div",{children:Object(m.jsx)(S.a,{className:"project-list",children:Object(m.jsx)(T.a,{cellHeight:460,cols:c,spacing:15,children:e.build.map((function(e){return Object(m.jsx)(D.a,{fullwidth:"true",className:"project-tile",children:Object(m.jsx)(r.b,{to:"",children:Object(m.jsx)(A,{build:e})})},e.buildid)}))})})})})),W=c.p+"static/media/VisualizerImage1.4664219a.jpg",G=c.p+"static/media/DiceImage1.90ffd511.jpg",V=c.p+"static/media/PortfolioImage1.98e0ba73.jpg";function J(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)([]),n=Object(o.a)(s,2),r=n[0],l=n[1],d=Object(i.useState)(!0),j=Object(o.a)(d,2),h=j[0],b=j[1],p=function(){b(!h)};return Object(i.useEffect)((function(){a([{projectid:"1",title:"Path-finding Visualizer",description:"Pathfinding Visualizer in Python using the A* algorithm",image:W,github:"https://github.com/TreyPhillip/PathfindingVisualizer",url:"/Projects/Pathfinder"},{projectid:"2",title:"MrDiceGuy",description:"Discord bot developed using JavaScript and the Discord.js node module",image:G,github:"https://github.com/TreyPhillip/MrDiceGuy",url:"/Projects/DiceBot"},{projectid:"3",title:"My Porfolio",description:"A website that acts as my portfolio. The website you're on right now!",image:V,github:"https://github.com/TreyPhillip/TreyPhillip.github.io",url:"/Projects/Portfolio"}]),l([{buildid:"1",title:"My Personal Build",image:"",url:"/Builds/Personal",price:"$1,454.87 CAD",pcpp:""},{buildid:"2",title:"Mid Range PC",image:"",url:"/Builds/",price:"$1,489.98 CAD",pcpp:""},{buildid:"3",title:"Budget PC",image:"",url:"/Builds/",price:"$739.31 CAD",pcpp:""}])}),[]),Object(m.jsxs)("main",{children:[Object(m.jsx)("header",{className:"head",children:Object(m.jsxs)("h1",{children:["Stuff I've Done \xa0\xa0\xa0",Object(m.jsx)("button",{onClick:p,disabled:h,className:"swapper",children:"Projects"}),Object(m.jsx)("button",{onClick:p,disabled:!h,className:"swapper",children:"Builds"})]})}),h?Object(m.jsx)("div",{className:"projects",children:Object(m.jsx)(z,{project:c})}):Object(m.jsx)("div",{className:"projects",children:Object(m.jsx)(B,{build:r})})]})}function R(){return Object(m.jsxs)("main",{children:[Object(m.jsx)("header",{className:"head",children:Object(m.jsx)("h1",{children:"About Me"})}),Object(m.jsx)("p",{className:"block",children:"I live in Ontario, Canada and I recently graduated from Conestoga College with an Ontario College Advanced Diploma in Computer Science & IT. Since my graduation I have spent my time learning new technologies and looking for employment."}),Object(m.jsx)("header",{className:"head",children:Object(m.jsx)("h2",{children:"Education"})}),Object(m.jsx)("p",{className:"block",children:"My education focused on hands on work with a variety of languages and frameworks.Many of my classes used C# to teach the computer science concepts, but I also had classes on other languages like JavaScript. I am self taught in a number of other areas such as React and Python."}),Object(m.jsx)("header",{className:"head",children:Object(m.jsx)("h2",{children:"Skills"})}),Object(m.jsx)("p",{className:"block",children:"I am most confident in my skills for Web design and utilizing technologies such as React.js and Node.js. However, I am also proficient in other fields like Application and Database design. I have yet to gain any professional experience in these technologies, but I am confident in my ability to perform regardless"})]})}function E(){var e=Object(m.jsx)("a",{href:"mailto: treyphillip@live.com",children:"treyphillip@live.com"}),t=Object(m.jsx)("a",{href:"https://twitter.com/RealTreyPhillip",children:"Twitter"}),c=Object(m.jsx)("a",{href:"https://www.linkedin.com/in/treyphillip/",children:"LinkedIn"});return Object(m.jsxs)("main",{children:[Object(m.jsx)("header",{className:"head",children:Object(m.jsx)("h1",{children:"Contact Me"})}),Object(m.jsxs)("p",{className:"block",children:["I am currently interested in full time or short term/freelance work. I do a veriety of different programming work such as Web development or Application Development. I also do work building PCs. If you are interested, please send me a message on one of the platforms below.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),e,Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),t,Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),c]})]})}function $(){return Object(m.jsxs)("main",{children:[Object(m.jsx)("header",{className:"head",children:Object(m.jsx)("h1",{children:"What is Mr Dice Guy?"})}),Object(m.jsx)("p",{className:"block",children:"Mr Dice Guy is a discord chatbot made with the intention of being used for tabletop roleplaying games like Dungeons & Dragons. It was developed using JavaScript and the Discord.js node module. Currently MrDiceGuy is not hosted anywhere, but can be used locally and added to your discord servers through the developer portal"}),Object(m.jsx)("header",{className:"head",children:Object(m.jsx)("h1",{children:"Commands"})}),Object(m.jsxs)("p",{className:"block",children:["Roll single dice",Object(m.jsx)("pre",{className:"code-snippet",children:Object(m.jsxs)("code",{children:["!d20",Object(m.jsx)("br",{}),"# 16",Object(m.jsx)("br",{}),"details: d6"]})}),"Roll Multiple Dice",Object(m.jsx)("pre",{className:"code-snippet",children:Object(m.jsxs)("code",{children:["!2d20",Object(m.jsx)("br",{}),"# 28",Object(m.jsx)("br",{}),"details: 2d20",Object(m.jsx)("br",{}),"12 16"]})}),"Use ++ or -- to add or subract from each dice roll instead of just the total. this only works if you are rolling multiple dice at the same time",Object(m.jsx)("pre",{className:"code-snippet",children:Object(m.jsxs)("code",{children:["!10d6++7",Object(m.jsx)("br",{}),"# 110 ",Object(m.jsx)("br",{}),"details: 10d6++7",Object(m.jsx)("br",{}),"1(+7) 3(+7) 3(+7) 2(+7) 4(+7) 5(+7) 6(+7) 1(+7) 1(+7) 3(+7)"]})})]})]})}function F(){return Object(m.jsxs)("main",{children:[Object(m.jsx)("header",{className:"head",children:Object(m.jsx)("h1",{children:"What is Pathfinding Visualizer?"})}),Object(m.jsx)("p",{className:"block",children:"This Pathfinding Visualizer allows the user to select a Start node and an End node from a grid. The User can also create walls or obstacles for the pathfinder to navigate around. The application was developed using Python and the Pygame module."}),Object(m.jsx)("header",{className:"head",children:Object(m.jsx)("h1",{children:"How do you use it?"})}),Object(m.jsxs)("p",{className:"block",children:["To begin using the application, simply download and unzip the file from my ",Object(m.jsx)("a",{href:"https://github.com/TreyPhillip/PathfindingVisualizer",children:"GitHub"}),". The python file is packaged with a .exe file so you do not need to download anything other than the GitHub zip in order to use it. Navigate to the unzipped Pathfinding Visualizer folder and into dist then PathfindingVisualizer. Finally locate the PathfindingVisualizer.exe file and double click to run. Instructions for use will be along the top of the window."]})]})}function L(){return Object(m.jsxs)("main",{children:[Object(m.jsx)("header",{className:"head",children:Object(m.jsx)("h1",{children:"My Portfolio"})}),Object(m.jsx)("p",{className:"block",children:"I built this portfolio as a small demonstration of my knowledge in Web Design, JavaScript and React.js. Its also used as a platform to display information about the other projects I have worked on"}),Object(m.jsx)("header",{className:"head",children:Object(m.jsx)("h1",{children:"How was it built?"})}),Object(m.jsx)("p",{className:"block",children:"The app is currently just a React.js app hosted on GitHub Pages, but I have plans to add some features that will may require a backend (most likely Node.js). Some examples of those featutes include a Blog, comment system and a simple authentication with google or another third party system to make those comments."})]})}function U(){return Object(m.jsxs)("main",{children:[Object(m.jsx)("header",{className:"head",children:Object(m.jsx)("h1",{children:"Services"})}),Object(m.jsx)("p",{className:"block",children:"I offer a variety of services from Websites, Applications, and Computer Builds. I dont have any set prices, so contact me and we can discuss the price. Look below for more details."}),Object(m.jsx)("header",{className:"head",children:Object(m.jsx)("h2",{children:"Websites"})}),Object(m.jsx)("p",{className:"block",children:"I primarily work with React.js and Node.js for websites, using Passport.js for authentication. I am also planning on learning Wordpress and some other Web Dev Technologies."}),Object(m.jsx)("header",{className:"head",children:Object(m.jsx)("h2",{children:"Applications"})}),Object(m.jsx)("p",{className:"block",children:"For application development I am fairly well versed in a variety of programming languages such as JavaScript, C Sharp, Python, and a little Java."}),Object(m.jsx)("header",{className:"head",children:Object(m.jsx)("h2",{children:"Computer Builds"})}),Object(m.jsx)("p",{className:"block",children:"I have a few years of experience in computer assembly and repair, so if you are looking to buld a PC (gaming or work) then get in touch and we can discuss it"}),Object(m.jsx)("header",{className:"head",children:Object(m.jsx)("h2",{children:"Other"})}),Object(m.jsx)("p",{className:"block",children:"If you are looking for something that I dont have listed here, contact me and I may be able to help."})]})}function q(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)(!0),n=Object(o.a)(s,2),d=n[0],j=n[1],h=function(e){a(!e),j(c)};return document.title="Trey Phillip | Junior Developer",Object(m.jsx)(r.a,{basename:"",children:Object(m.jsxs)("div",{className:"app ".concat(c?"toggled":""),children:[Object(m.jsx)(O,{toggled:c,collapsed:d,handleToggleSidebar:h}),Object(m.jsxs)("main",{children:[Object(m.jsx)("div",{className:"btn-toggle",onClick:function(){return h(c)},children:Object(m.jsx)(u.a,{})}),Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/Home",component:x}),Object(m.jsx)(l.a,{exact:!0,path:"/",component:x}),Object(m.jsx)(l.a,{exact:!0,path:"/Projects",component:J}),Object(m.jsx)(l.a,{path:"/About",component:R}),Object(m.jsx)(l.a,{path:"/Contact",component:E}),Object(m.jsx)(l.a,{path:"/Projects/DiceBot",component:$}),Object(m.jsx)(l.a,{path:"/Projects/Pathfinder",component:F}),Object(m.jsx)(l.a,{path:"/Projects/Portfolio",component:L}),Object(m.jsx)(l.a,{path:"/Contact",component:E}),Object(m.jsx)(l.a,{path:"/Services",component:U})]})]})]})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.f497068e.chunk.js.map