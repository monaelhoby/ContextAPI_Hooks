(this.webpackJsonphookscontextapi=this.webpackJsonphookscontextapi||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),i=(n(17),n(18),n(11)),u=n(2),l=n(3),s=n(5),h=n(4),m=n(6),b=Object(a.createContext)(),d=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={isLightTheme:!0,light:{syntax:"#555",ui:"#DDD",bg:"#EEE"},dark:{syntax:"#DDD",ui:"#333",bg:"#555"}},n.ToggleTheme=function(){n.setState({isLightTheme:!n.state.isLightTheme})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(b.Provider,{value:Object(i.a)({},this.state,{ToggleTheme:this.ToggleTheme})},this.props.children)}}]),t}(a.Component),g=function(){var e=Object(a.useContext)(b),t=e.isLightTheme,n=e.light,r=e.dark,c=t?n:r;return o.a.createElement("div",{className:"navbar",style:{background:c.ui,color:c.syntax}},o.a.createElement("h2",null,"Reading List"))},p=n(1),k=n(10),f="ADD_BOOK",v="REMOVE_BOOK",O={AddBooksAction:function(e,t){return{type:f,book:{title:e,author:t}}},RemoveBooksAction:function(e){return{type:v,id:e}}},E=n(9),j=n.n(E),y=function(e,t){switch(t.type){case f:return[].concat(Object(k.a)(e),[{title:t.book.title,author:t.book.author,id:j()()}]);case v:return e.filter((function(e){return e.id!==t.id}));default:return e}},x=Object(a.createContext)(),T=function(e){var t=Object(a.useReducer)(y,[],(function(){var e=localStorage.getItem("books");return e?JSON.parse(e):[]})),n=Object(p.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){localStorage.setItem("books",JSON.stringify(r))}),[r]),o.a.createElement(x.Provider,{value:{books:r,dispatch:c}},e.children)},C=function(e){var t=e.book,n=Object(a.useContext)(x).dispatch;return o.a.createElement("div",{onClick:function(){return n(O.RemoveBooksAction(t.id))}},o.a.createElement("p",{className:"title"},t.title),o.a.createElement("span",{className:"author"},t.author))},w=function(){var e=Object(a.useContext)(b),t=e.isLightTheme,n=e.light,r=e.dark,c=Object(a.useContext)(x).books,i=t?n:r;return o.a.createElement("div",{className:"book-list",style:{background:i.bg,color:i.syntax}},c.length?o.a.createElement("ul",null,c.map((function(e){return o.a.createElement("li",{key:e.id,style:{background:i.ui}},o.a.createElement(C,{book:e}))}))):o.a.createElement("div",{className:"empty",style:{background:i.ui}},"No Books to read"))},A=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("button",{onClick:this.context.ToggleTheme},"Toggle Theme")}}]),t}(a.Component);A.contextType=b;var B=A,D=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(p.a)(c,2),u=i[0],l=i[1],s=Object(a.useContext)(x).dispatch,h=Object(a.useContext)(b),m=h.isLightTheme,d=h.light,g=h.dark,k=m?d:g;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s(O.AddBooksAction(n,u)),r(""),l("")},style:{background:k.ui,color:k.syntax}},o.a.createElement("input",{type:"text",placeholder:"book title",value:n,required:!0,onChange:function(e){return r(e.target.value)}}),o.a.createElement("input",{type:"text",placeholder:"book author",value:u,required:!0,onChange:function(e){return l(e.target.value)}}),o.a.createElement("input",{type:"submit",value:"Add Book"}))};var N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,null,o.a.createElement(B,null),o.a.createElement(g,null),o.a.createElement(T,null,o.a.createElement(D,null),o.a.createElement(w,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.a4a540ef.chunk.js.map