(this.webpackJsonpdezva=this.webpackJsonpdezva||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(10),r=n.n(s),i=(n(88),n(14)),o=n(18),l=n(151),u=n(159),j=n(116),d=n(156),b=n(157),O=n(164),f=n(163),m=n(158),x=n(155),h=n(46),p=n.n(h),g=n(67),k=n.n(g),v=n(32),y=n.n(v),C=n(66),_=n.n(C),T=n(4),F=Object(l.a)((function(e){return{py5:{paddingTop:"4rem"},start:{margin:0}}}));function I(e){var t=e.tasks,n=e.users,a=e.setEditItem,s=e.deleteUser,r=F(),i=function(e){switch(e){case"0":return"action";case"1":return"primary";case"2":return"secondary";default:return"action"}};return Object(T.jsxs)(c.a.Fragment,{children:[Object(T.jsx)("div",{className:r.py5}),Object(T.jsx)(x.a,{container:!0,children:Object(T.jsx)(x.a,{item:!0,xs:12,children:Object(T.jsx)(u.a,{children:function(){if(t)return t.map((function(e){return Object(T.jsxs)(j.a,{children:[Object(T.jsx)("div",{className:r.start,children:Object(T.jsx)(x.a,{item:!0,xs:3,children:Object(T.jsx)(d.a,{children:e.assigned_to?Object(T.jsx)(f.a,{alt:n[e.assigned_to].name,src:n[e.assigned_to].picture}):Object(T.jsx)(f.a,{children:Object(T.jsx)(p.a,{})})})})}),Object(T.jsx)(x.a,{item:!0,xs:6,children:Object(T.jsx)(O.a,{primary:e.message,secondary:e.created_on})}),Object(T.jsx)(x.a,{item:!0,xs:3,children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(m.a,{edge:"end","aria-label":"delete",children:Object(T.jsx)(_.a,{color:i(e.priority)})}),Object(T.jsx)(m.a,{edge:"end","aria-label":"delete",children:Object(T.jsx)(y.a,{color:"action",onClick:function(){return a(e)}})}),Object(T.jsx)(m.a,{edge:"end","aria-label":"delete",children:Object(T.jsx)(k.a,{onClick:function(){return s(e.id)}})})]})})]},e.id)}))}()})})})]})}var S=n(162),w=n(68),E=n.n(w),L=n(70),D=n(160),N=n(47),U=n.n(N),B=Object(l.a)((function(e){return{root:{paddingLeft:"2rem"},py5:{paddingTop:"4rem"},mxAuto:{margin:"auto"}}}));function M(e){var t=e.users,n=e.handleCreateTask,s=e.editItem,r=e.editUser,l=B(),u=c.a.useState(null),j=Object(o.a)(u,2),d=j[0],b=j[1],O=c.a.useState(null),h=Object(o.a)(O,2),g=h[0],k=h[1],v=Object(a.useState)({message:"",due_date:"",priority:0,assigned_to:null}),C=Object(o.a)(v,2),_=C[0],F=C[1];Object(a.useEffect)((function(){F(s?Object(i.a)({},s):{message:"",due_date:"",priority:0,assigned_to:null})}),[s]),console.log(_);var I=[0,1,2],w=_.message,N=(_.due_date,_.priority),M=_.assigned_to,P=function(){b(null)},z=function(){k(null)};return Object(T.jsxs)("div",{className:"root",children:[Object(T.jsx)("div",{className:l.py5}),Object(T.jsxs)(x.a,{container:!0,children:[Object(T.jsx)(x.a,{item:!0,xs:8,children:Object(T.jsx)(S.a,{id:"standard-full-width",label:"Create a task",style:{margin:8},placeholder:"taskname",fullWidth:!0,margin:"normal",value:w,onChange:function(e){return F(Object(i.a)(Object(i.a)({},_),{},{message:e.target.value}))},InputLabelProps:{shrink:!0}})}),Object(T.jsxs)(x.a,{item:!0,xs:4,className:l.mxAuto,children:[Object(T.jsx)(m.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){b(e.currentTarget)},children:M?Object(T.jsx)(f.a,{alt:t[M].name,src:t[M].picture}):Object(T.jsx)(p.a,{})}),Object(T.jsx)(L.a,{id:"simple-menu",anchorEl:d,keepMounted:!0,open:Boolean(d),onClose:P,children:function(){if(t)return t.map((function(e){return Object(T.jsxs)(D.a,{onClick:function(){F(Object(i.a)(Object(i.a)({},_),{},{assigned_to:e.id})),P()},children:[Object(T.jsx)(f.a,{alt:e.name,src:e.picture}),e.name]},e.id)}))}()}),Object(T.jsxs)(m.a,{"aria-label":"add",children:[Object(T.jsx)(U.a,{color:function(){switch(parseInt(N)){case 1:return"primary";case 0:return"action";case 2:return"secondary";default:return"action"}}(),onClick:function(e){k(e.currentTarget)}}),Object(T.jsx)(L.a,{id:"simple-menu",anchorEl:g,keepMounted:!0,open:Boolean(g),onClose:z,children:I.map((function(e){return Object(T.jsx)(D.a,{onClick:function(){z(),F(Object(i.a)(Object(i.a)({},_),{},{priority:parseInt(e)}))},children:e},e)}))})]}),Object(T.jsx)(m.a,{"aria-label":"add",onClick:function(){F({message:"",due_date:"",priority:0,assigned_to:null}),s?r(_):n(_)},children:s?Object(T.jsx)(y.a,{color:"secondary"}):Object(T.jsx)(E.a,{color:"primary"})})]})]})]})}var P=n(161),z=n(69),A=n.n(z);n(111).config();var q=A.a.create({baseURL:"https://devza.com/tests/"});q.interceptors.request.use((function(e){return e.headers.AuthToken="xvF43K6mRV4xc6OZnfMbSfq5Y73EydD9",Object(i.a)({},e)}),(function(e){return Promise.reject(e)})),q.interceptors.response.use((function(e){return e.data}),(function(e){return e}));var J=q;var R=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),r=Object(o.a)(s,2),l=r[0],u=r[1],j=Object(a.useState)(null),d=Object(o.a)(j,2),b=d[0],O=d[1],f=Object(a.useState)(null),m=Object(o.a)(f,2),x=m[0],h=m[1];Object(a.useEffect)((function(){c(!0),p(),setTimeout((function(){g()}),1e3)}),[]);var p=function(){J.get("/tasks/listusers").then((function(e){O(e.users)}))},g=function(){J.get("/tasks/list").then((function(e){u(e.tasks),c(!1)}))},k=function(e,t){Object.keys(t).map((function(n){e.append(n,t[n])}))};return Object(T.jsxs)(P.a,{maxWidth:"sm",children:[Object(T.jsxs)("ul",{children:[Object(T.jsxs)("li",{children:["*To edit click on ",Object(T.jsx)(y.a,{})," in List Item. Form will update fields. You can change all the field and press on edit button to save."]}),Object(T.jsx)("li",{children:"*form is resusable "}),Object(T.jsxs)("li",{children:["Click on ",Object(T.jsx)(U.a,{})," to set priority"]})]}),Object(T.jsx)(M,{editUser:function(e){var t=new FormData;k(t,Object(i.a)(Object(i.a)({},e),{},{taskid:x.id}));c(!0),J.post("tasks/update",t).then((function(e){u(null),g(),c(!1),h(null)})).catch((function(e){c(!1)}))},editItem:x,users:b,tasks:l,handleCreateTask:function(e){var t=new FormData;k(t,e);J.post("/tasks/create",t).then((function(e){u(null),g(),c(!1)})).catch((function(e){return c(!1)}))}}),n?Object(T.jsx)("div",{children:"Loading..."}):Object(T.jsx)(I,{users:b,tasks:l,setEditItem:h,deleteUser:function(e){var t=new FormData;k(t,{taskid:e});c(!0),J.post("/tasks/delete",t).then((function(e){u(null),g(),c(!1)}))}})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,165)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(R,{})}),document.getElementById("root")),W()},88:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.e15a2abb.chunk.js.map