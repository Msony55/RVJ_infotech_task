(this.webpackJsonpusers=this.webpackJsonpusers||[]).push([[0],{33:function(e,a,t){e.exports=t(63)},38:function(e,a,t){},39:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(30),l=t.n(c),o=(t(38),t(39),t(40),t(3)),s=t.n(o),i=t(10),m=t(11),u=t(9),p=t.n(u),d=t(31),b=t.n(d),f=t(7),g="https://gorest.co.in/public-api/users",E={Authorization:"Bearer ".concat("5b16a06ecae97431359d1dbc3dfb4b9a89442d7bc89d70203731e2fb0a6aec24"),"Content-type":"application/json"},v=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),o=Object(m.a)(l,2),u=o[0],d=o[1],v=Object(n.useState)(0),h=Object(m.a)(v,2),N=(h[0],h[1],u);Object(n.useEffect)((function(){x()}),[]);var x=function(){var e=Object(i.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(g),{params:{page:1}});case 2:a=e.sent,c(a.data.data),d(a.data.meta.pagination.pages);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("".concat(g,"/").concat(a),{headers:E}).catch((function(e){return console.log("err",e)}));case 2:x();case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-4"},r.a.createElement("table",{class:"table",style:{border:"collapse",textAlign:"center"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col",style:{border:"1px solid black"}},"#"),r.a.createElement("th",{scope:"col",style:{border:"1px solid black"}},"Name"),r.a.createElement("th",{style:{border:"1px solid black"}},"Action"))),r.a.createElement("tbody",null,t.map((function(e,a){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row",style:{border:"1px solid black"}},a+1),r.a.createElement("td",{style:{border:"1px solid black"}},e.name),r.a.createElement("td",{style:{border:"1px solid black"}},r.a.createElement(f.b,{class:"btn",style:{color:"blue",textDecorationLine:"underline"},to:"/users/".concat(e.id)},"View"),r.a.createElement(f.b,{class:"btn",style:{color:"blue",textDecorationLine:"underline"},to:"/users/edit/".concat(e.id)},"Edit"),r.a.createElement(f.b,{class:"btn",style:{color:"blue",textDecorationLine:"underline"},onClick:function(){return y(e.id)}},"Delete")))}))))),r.a.createElement("div",{className:"paginate-container"},r.a.createElement(b.a,{pageCount:N,pageRangeDisplayed:4,disableInitialCallback:!0,onPageChange:function(e){var a=e.selected+1;p.a.get("".concat(g),{params:{page:a}}).then((function(e){console.log(e.data.data),c(e.data.data),d(e.data.meta.pagination.pages)}))},containerClassName:"pagination",activeClassName:"active",pageLinkClassName:"page-link",breakLinkClassName:"page-link",nextLinkClassName:"page-link",previousLinkClassName:"page-link",pageClassName:"page-item",breakClassName:"page-item",nextClassName:"page-item",previousClassName:"page-item",previousLabel:"<",nextLabel:">"})))},h=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement(f.b,{className:"navbar-brand",to:"/"},"Home"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement(f.b,{className:"btn btn-outline-light",to:"/users/add"},"Add User")))},N=t(1),x=t(13),y=t(14),j={Authorization:"Bearer ".concat("5b16a06ecae97431359d1dbc3dfb4b9a89442d7bc89d70203731e2fb0a6aec24"),"Content-type":"application/json"},O=function(){var e=Object(N.f)(),a=Object(n.useState)({name:"",email:"",gender:"",status:""}),t=Object(m.a)(a,2),c=t[0],l=t[1],o=c.name,u=c.email,d=c.gender,b=c.status,f=function(e){l(Object(y.a)(Object(y.a)({},c),{},Object(x.a)({},e.target.name,e.target.value)))},g=function(){var a=Object(i.a)(s.a.mark((function a(t){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,p.a.post("".concat("https://gorest.co.in/public-api/users"),c,{headers:j});case 3:e.push("/");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"w-75 mx-auto shadow p-5",style:{marginTop:"10vh"}},r.a.createElement("h2",{className:"text-center mb-4"},"Add A User"),r.a.createElement("form",{onSubmit:function(e){return g(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg mb-2",placeholder:"Enter Your Name",name:"name",value:o,onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control form-control-lg mb-2",placeholder:"Enter Your E-mail Address",name:"email",value:u,onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg mb-2",placeholder:"gender",name:"gender",value:d,onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg mb-2",placeholder:"status",name:"status",value:b,onChange:function(e){return f(e)}})),r.a.createElement("button",{className:"btn btn-primary btn-block"},"Add User"))))},k={Authorization:"Bearer ".concat("5b16a06ecae97431359d1dbc3dfb4b9a89442d7bc89d70203731e2fb0a6aec24"),"Content-type":"application/json"},C=function(){var e=Object(N.f)(),a=Object(N.g)().id,t=Object(n.useState)({id:"",name:"",email:"",gender:"",status:""}),c=Object(m.a)(t,2),l=c[0],o=c[1],u=l.name,d=l.email,b=l.gender,f=l.status,g=function(e){o(Object(y.a)(Object(y.a)({},l),{},Object(x.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){v()}),[]);var E=function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,p.a.put("".concat("https://gorest.co.in/public-api/users","/").concat(a),l,{headers:k});case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat("https://gorest.co.in/public-api/users","/").concat(a),{headers:k});case 2:t=e.sent,o(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"w-75 mx-auto shadow p-5"},r.a.createElement("h2",{className:"text-center mb-4"},"Edit A User"),r.a.createElement("form",{onSubmit:function(e){return E(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Id",name:"id",value:a,onChange:function(e){return g(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:u,onChange:function(e){return g(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail ",name:"email",value:d,onChange:function(e){return g(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"gender",name:"gender",value:b,onChange:function(e){return g(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"status",name:"status",value:f,onChange:function(e){return g(e)}})),r.a.createElement("button",{className:"btn btn-warning btn-block"},"Update User"))))},w={Authorization:"Bearer ".concat("5b16a06ecae97431359d1dbc3dfb4b9a89442d7bc89d70203731e2fb0a6aec24"),"Content-type":"application/json"},A=function(){var e=Object(n.useState)({id:"",name:"",email:"",gender:"",status:""}),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(N.g)().id;Object(n.useEffect)((function(){o()}),[]);var o=function(){var e=Object(i.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat("https://gorest.co.in/public-api/users","/").concat(l),{headers:w});case 2:a=e.sent,c(a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container py-4"},r.a.createElement("h1",{className:"display-4"},"User Id: ",l),r.a.createElement("hr",null),r.a.createElement("ul",{className:"list-group w-50"},r.a.createElement("li",{className:"list-group-item"},"id: ",t.id),r.a.createElement("li",{className:"list-group-item"},"name: ",t.name),r.a.createElement("li",{className:"list-group-item"},"email: ",t.email),r.a.createElement("li",{className:"list-group-item"},"gender: ",t.gender),r.a.createElement("li",{className:"list-group-item"},"status: ",t.status)))};var S=function(e){return r.a.createElement(f.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/",component:v}),r.a.createElement(N.a,{exact:!0,path:"/users/add",component:O}),r.a.createElement(N.a,{exact:!0,path:"/users/edit/:id",component:C}),r.a.createElement(N.a,{exact:!0,path:"/users/:id",component:A}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.bc3b19d8.chunk.js.map