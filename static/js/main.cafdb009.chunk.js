(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),a=n.n(s),o=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))}),i=(n(13),n(4)),h=n(5),l=n(7),b=n(6),d=n(0),j=function(e){var t=e.name,n=e.email,c=e.id;return Object(d.jsxs)("div",{className:" tc bg-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(c,"?200x200")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("p",{children:n})]})]})},u=function(e){var t=e.robots;return Object(d.jsx)("div",{children:t.map((function(e,n){return Object(d.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},f=function(e){e.searchfield;var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},g=function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"700px"},children:e.children})},O=(n(15),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLocaleLowerCase().includes(e.state.searchfield.toLocaleLowerCase())}));return 0===this.state.robots.length?Object(d.jsx)("h1",{children:"Loading"}):Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(d.jsx)(f,{searchChange:this.onSearchChange}),Object(d.jsx)(g,{children:Object(d.jsx)(u,{robots:t})})]})}}]),n}(r.a.Component));a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),o()}},[[16,1,2]]]);
//# sourceMappingURL=main.cafdb009.chunk.js.map