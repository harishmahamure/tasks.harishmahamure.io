(this.webpackJsonpdezva=this.webpackJsonpdezva||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(10),r=n.n(s),i=(n(88),n(14)),o=n(18),u=n(151),l=n(159),j=n(116),d=n(156),b=n(157),O=n(164),f=n(163),m=n(158),h=n(155),x=n(46),p=n.n(x),g=n(66),k=n.n(g),v=n(32),y=n.n(v),C=n(65),T=n.n(C),_=n(5),F=Object(u.a)((function(e){return{py5:{paddingTop:"4rem"},start:{margin:0}}}));function I(e){var t=e.tasks,n=e.users,a=e.setEditItem,s=e.deleteUser,r=F(),i=function(e){switch(e){case"0":return"action";case"1":return"primary";case"2":return"secondary";default:return"action"}};return Object(_.jsxs)(c.a.Fragment,{children:[Object(_.jsx)("div",{className:r.py5}),Object(_.jsx)(h.a,{container:!0,children:Object(_.jsx)(h.a,{item:!0,xs:12,children:Object(_.jsx)(l.a,{children:function(){if(t)return t.map((function(e){return Object(_.jsxs)(j.a,{children:[Object(_.jsx)("div",{className:r.start,children:Object(_.jsx)(h.a,{item:!0,xs:3,children:Object(_.jsx)(d.a,{children:e.assigned_to?Object(_.jsx)(f.a,{alt:n[e.assigned_to].name,src:n[e.assigned_to].picture}):Object(_.jsx)(f.a,{children:Object(_.jsx)(p.a,{})})})})}),Object(_.jsx)(h.a,{item:!0,xs:6,children:Object(_.jsx)(O.a,{primary:e.message,secondary:e.created_on})}),Object(_.jsx)(h.a,{item:!0,xs:3,children:Object(_.jsxs)(b.a,{children:[Object(_.jsx)(m.a,{edge:"end","aria-label":"delete",children:Object(_.jsx)(T.a,{color:i(e.priority)})}),Object(_.jsx)(m.a,{edge:"end","aria-label":"delete",children:Object(_.jsx)(y.a,{color:"action",onClick:function(){return a(e)}})}),Object(_.jsx)(m.a,{edge:"end","aria-label":"delete",children:Object(_.jsx)(k.a,{onClick:function(){return s(e.id)}})})]})})]},e.id)}))}()})})})]})}var w=n(162),S=n(68),E=n.n(S),L=n(70),U=n(160),D=n(67),N=n.n(D),P=Object(u.a)((function(e){return{root:{paddingLeft:"2rem"},py5:{paddingTop:"4rem"},mxAuto:{margin:"auto"}}}));function A(e){var t=e.users,n=e.handleCreateTask,s=e.editItem,r=e.editUser,u=P(),l=c.a.useState(null),j=Object(o.a)(l,2),d=j[0],b=j[1],O=c.a.useState(null),x=Object(o.a)(O,2),g=x[0],k=x[1],v=Object(a.useState)({message:"",due_date:"",priority:0,assigned_to:null}),C=Object(o.a)(v,2),T=C[0],F=C[1];Object(a.useEffect)((function(){F(s?Object(i.a)({},s):{message:"",due_date:"",priority:0,assigned_to:null})}),[s]),console.log(T);var I=[0,1,2],S=T.message,D=(T.due_date,T.priority),A=T.assigned_to,B=function(){b(null)},M=function(){k(null)};return Object(_.jsxs)("div",{className:"root",children:[Object(_.jsx)("div",{className:u.py5}),Object(_.jsxs)(h.a,{container:!0,children:[Object(_.jsx)(h.a,{item:!0,xs:8,children:Object(_.jsx)(w.a,{id:"standard-full-width",label:"Create a task",style:{margin:8},placeholder:"taskname",fullWidth:!0,margin:"normal",value:S,onChange:function(e){return F(Object(i.a)(Object(i.a)({},T),{},{message:e.target.value}))},InputLabelProps:{shrink:!0}})}),Object(_.jsxs)(h.a,{item:!0,xs:4,className:u.mxAuto,children:[Object(_.jsx)(m.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){b(e.currentTarget)},children:A?Object(_.jsx)(f.a,{alt:t[A].name,src:t[A].picture}):Object(_.jsx)(p.a,{})}),Object(_.jsx)(L.a,{id:"simple-menu",anchorEl:d,keepMounted:!0,open:Boolean(d),onClose:B,children:function(){if(t)return t.map((function(e){return Object(_.jsxs)(U.a,{onClick:function(){F(Object(i.a)(Object(i.a)({},T),{},{assigned_to:e.id})),B()},children:[Object(_.jsx)(f.a,{alt:e.name,src:e.picture}),e.name]},e.id)}))}()}),Object(_.jsxs)(m.a,{"aria-label":"add",children:[Object(_.jsx)(N.a,{color:function(){switch(parseInt(D)){case 1:return"action";case 0:return"primary ";case 2:return"secondary";default:return"action"}}(),onClick:function(e){k(e.currentTarget)}}),Object(_.jsx)(L.a,{id:"simple-menu",anchorEl:g,keepMounted:!0,open:Boolean(g),onClose:M,children:I.map((function(e){return Object(_.jsx)(U.a,{onClick:function(){M(),F(Object(i.a)(Object(i.a)({},T),{},{priority:parseInt(e)}))},children:e},e)}))})]}),Object(_.jsx)(m.a,{"aria-label":"add",children:s?Object(_.jsx)(y.a,{color:"secondary",onClick:function(){return r(T)}}):Object(_.jsx)(E.a,{color:"primary",onClick:function(){return n(T)}})})]})]})]})}var B=n(161),M=n(69),z=n.n(M);n(111).config();var W=z.a.create({baseURL:"https://devza.com/tests/"});W.interceptors.request.use((function(e){return e.headers.AuthToken="0ruAaKiEo46PUYqMxFHH895DWivpeVrZ",Object(i.a)({},e)}),(function(e){return Promise.reject(e)})),W.interceptors.response.use((function(e){return e.data}),(function(e){return e}));var q=W;var H=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),r=Object(o.a)(s,2),u=r[0],l=r[1],j=Object(a.useState)(null),d=Object(o.a)(j,2),b=d[0],O=d[1],f=Object(a.useState)(null),m=Object(o.a)(f,2),h=m[0],x=m[1];Object(a.useEffect)((function(){c(!0),p(),setTimeout((function(){g()}),1e3)}),[]);var p=function(){q.get("/tasks/listusers").then((function(e){O(e.users)}))},g=function(){q.get("/tasks/list").then((function(e){l(e.tasks),c(!1)}))},k=function(e,t){Object.keys(t).map((function(n){e.append(n,t[n])}))};return Object(_.jsxs)(B.a,{maxWidth:"sm",children:[Object(_.jsxs)("ul",{children:[Object(_.jsxs)("li",{children:["*To edit click on ",Object(_.jsx)(y.a,{})," in List Item. Form will update fields. You can change all the field and press on edit button to save."]}),Object(_.jsx)("li",{children:"*form is resusable "})]}),Object(_.jsx)(A,{editUser:function(e){var t=new FormData;k(t,Object(i.a)(Object(i.a)({},e),{},{taskid:h.id}));c(!0),q.post("tasks/update",t).then((function(e){l(null),g(),c(!1),x(null)})).catch((function(e){c(!1)}))},editItem:h,users:b,tasks:u,handleCreateTask:function(e){var t=new FormData;k(t,e);c(!0),q.post("/tasks/create",t).then((function(e){l(null),g(),c(!1)})).catch((function(e){return c(!1)}))}}),n?Object(_.jsx)("div",{children:"Loading..."}):Object(_.jsx)(I,{users:b,tasks:u,setEditItem:x,deleteUser:function(e){var t=new FormData;k(t,{taskid:e});c(!0),q.post("/tasks/delete",t).then((function(e){console.log(e),c(!1),l(null),g(),c(!1)}))}})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,165)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(H,{})}),document.getElementById("root")),J()},88:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.dca84ad9.chunk.js.map