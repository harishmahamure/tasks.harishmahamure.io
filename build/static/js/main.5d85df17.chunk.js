(this.webpackJsonpdezva=this.webpackJsonpdezva||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),s=n.n(r),i=(n(88),n(14)),o=n(18),u=n(151),l=n(159),j=n(116),d=n(156),b=n(157),O=n(164),f=n(163),m=n(158),h=n(155),p=n(45),x=n.n(p),g=n(66),k=n.n(g),v=n(46),y=n.n(v),C=n(65),_=n.n(C),T=n(5),F=Object(u.a)((function(e){return{py5:{paddingTop:"4rem"},start:{margin:0}}}));function I(e){var t=e.tasks,n=e.users,a=e.setEditItem,r=e.deleteUser,s=F(),i=function(e){switch(e){case"0":return"action";case"1":return"primary";case"2":return"secondary";default:return"action"}};return Object(T.jsxs)(c.a.Fragment,{children:[Object(T.jsx)("div",{className:s.py5}),Object(T.jsx)(h.a,{container:!0,children:Object(T.jsx)(h.a,{item:!0,xs:12,children:Object(T.jsx)(l.a,{children:function(){if(t)return t.map((function(e){return Object(T.jsxs)(j.a,{children:[Object(T.jsx)("div",{className:s.start,children:Object(T.jsx)(h.a,{item:!0,xs:3,children:Object(T.jsx)(d.a,{children:e.assigned_to?Object(T.jsx)(f.a,{alt:n[e.assigned_to].name,src:n[e.assigned_to].picture}):Object(T.jsx)(f.a,{children:Object(T.jsx)(x.a,{})})})})}),Object(T.jsx)(h.a,{item:!0,xs:6,children:Object(T.jsx)(O.a,{primary:e.message,secondary:e.created_on})}),Object(T.jsx)(h.a,{item:!0,xs:3,children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(m.a,{edge:"end","aria-label":"delete",children:Object(T.jsx)(_.a,{color:i(e.priority)})}),Object(T.jsx)(m.a,{edge:"end","aria-label":"delete",children:Object(T.jsx)(y.a,{color:"action",onClick:function(){return a(e)}})}),Object(T.jsx)(m.a,{edge:"end","aria-label":"delete",children:Object(T.jsx)(k.a,{onClick:function(){return r(e.id)}})})]})})]},e.id)}))}()})})})]})}var S=n(162),w=n(68),E=n.n(w),U=n(70),D=n(160),L=n(67),N=n.n(L),P=Object(u.a)((function(e){return{root:{paddingLeft:"2rem"},py5:{paddingTop:"4rem"},mxAuto:{margin:"auto"}}}));function A(e){var t=e.users,n=e.handleCreateTask,r=e.editItem,s=e.editUser,u=P(),l=c.a.useState(null),j=Object(o.a)(l,2),d=j[0],b=j[1],O=c.a.useState(null),p=Object(o.a)(O,2),g=p[0],k=p[1],v=Object(a.useState)({message:"",due_date:"",priority:0,assigned_to:null}),C=Object(o.a)(v,2),_=C[0],F=C[1];Object(a.useEffect)((function(){F(r?Object(i.a)({},r):{message:"",due_date:"",priority:0,assigned_to:null})}),[r]),console.log(_);var I=[0,1,2],w=_.message,L=(_.due_date,_.priority),A=_.assigned_to,B=function(){b(null)},M=function(){k(null)};return Object(T.jsxs)("div",{className:"root",children:[Object(T.jsx)("div",{className:u.py5}),Object(T.jsxs)(h.a,{container:!0,children:[Object(T.jsx)(h.a,{item:!0,xs:8,children:Object(T.jsx)(S.a,{id:"standard-full-width",label:"Create a task",style:{margin:8},placeholder:"taskname",fullWidth:!0,margin:"normal",value:w,onChange:function(e){return F(Object(i.a)(Object(i.a)({},_),{},{message:e.target.value}))},InputLabelProps:{shrink:!0}})}),Object(T.jsxs)(h.a,{item:!0,xs:4,className:u.mxAuto,children:[Object(T.jsx)(m.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){b(e.currentTarget)},children:A?Object(T.jsx)(f.a,{alt:t[A].name,src:t[A].picture}):Object(T.jsx)(x.a,{})}),Object(T.jsx)(U.a,{id:"simple-menu",anchorEl:d,keepMounted:!0,open:Boolean(d),onClose:B,children:function(){if(t)return t.map((function(e){return Object(T.jsxs)(D.a,{onClick:function(){F(Object(i.a)(Object(i.a)({},_),{},{assigned_to:e.id})),B()},children:[Object(T.jsx)(f.a,{alt:e.name,src:e.picture}),e.name]},e.id)}))}()}),Object(T.jsxs)(m.a,{"aria-label":"add",children:[Object(T.jsx)(N.a,{color:function(){switch(parseInt(L)){case 1:return"action";case 0:return"primary ";case 2:return"secondary";default:return"action"}}(),onClick:function(e){k(e.currentTarget)}}),Object(T.jsx)(U.a,{id:"simple-menu",anchorEl:g,keepMounted:!0,open:Boolean(g),onClose:M,children:I.map((function(e){return Object(T.jsx)(D.a,{onClick:function(){M(),F(Object(i.a)(Object(i.a)({},_),{},{priority:parseInt(e)}))},children:e},e)}))})]}),Object(T.jsx)(m.a,{"aria-label":"add",children:r?Object(T.jsx)(y.a,{color:"secondary",onClick:function(){return s(_)}}):Object(T.jsx)(E.a,{color:"primary",onClick:function(){return n(_)}})})]})]})]})}var B=n(161),M=n(69),z=n.n(M);n(111).config();var W=z.a.create({baseURL:"https://devza.com/tests/"});W.interceptors.request.use((function(e){return e.headers.AuthToken="0ruAaKiEo46PUYqMxFHH895DWivpeVrZ",Object(i.a)({},e)}),(function(e){return Promise.reject(e)})),W.interceptors.response.use((function(e){return e.data}),(function(e){return e}));var q=W;var H=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(o.a)(r,2),u=s[0],l=s[1],j=Object(a.useState)(null),d=Object(o.a)(j,2),b=d[0],O=d[1],f=Object(a.useState)(null),m=Object(o.a)(f,2),h=m[0],p=m[1];Object(a.useEffect)((function(){c(!0),x(),setTimeout((function(){g()}),1e3)}),[]);var x=function(){q.get("/tasks/listusers").then((function(e){O(e.users)}))},g=function(){q.get("/tasks/list").then((function(e){l(e.tasks),c(!1)}))},k=function(e,t){Object.keys(t).map((function(n){e.append(n,t[n])}))};return Object(T.jsxs)(B.a,{maxWidth:"sm",children:[Object(T.jsx)(A,{editUser:function(e){var t=new FormData;k(t,Object(i.a)(Object(i.a)({},e),{},{taskid:h.id}));c(!0),q.post("tasks/update",t).then((function(e){l(null),g(),c(!1),p(null)})).catch((function(e){c(!1)}))},editItem:h,users:b,tasks:u,handleCreateTask:function(e){var t=new FormData;k(t,e);c(!0),q.post("/tasks/create",t).then((function(e){l(null),g(),c(!1)})).catch((function(e){return c(!1)}))}}),n?null:Object(T.jsx)(I,{users:b,tasks:u,setEditItem:p,deleteUser:function(e){var t=new FormData;k(t,{taskid:e});q.post("/tasks/delete",t).then((function(e){console.log(e),c(!1),l(null),g()}))}})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,165)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(H,{})}),document.getElementById("root")),J()},88:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.5d85df17.chunk.js.map