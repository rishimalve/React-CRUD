(this.webpackJsonpcrud_app=this.webpackJsonpcrud_app||[]).push([[0],{12:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),u=a.n(l),c=(a(17),a(11)),i=a(8),s=a(7),m=a(1),o=a(2),d=a(4),p=a(3),h=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).initialState={id:null,name:"",userName:""},e.state=e.initialState,e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(s.a)({},n,r))},e.submitForm=function(t){t.preventDefault(),e.props.addUser(e.state),e.setState(e.initialState)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.userName;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange,required:!0}),r.a.createElement("label",null,"UserName"),r.a.createElement("input",{type:"text",name:"userName",id:"userName",value:a,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Add User")))}}]),a}(n.Component),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data,t=this.props.deleteUser,a=this.props.editUser;return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"id"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"UserName"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,e.map((function(e,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.userName),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return t(e.id)},className:"button muted-button"},"Delete"),r.a.createElement("button",{onClick:function(){return a(e)},className:"button muted-button"},"Edit")))})))))}}]),a}(n.Component),b=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).user=e.props.currentUser,e.initialState={id:null,name:"",userName:""},e.state=e.user,e.submitForm=function(t){t.preventDefault(),e.props.updateUser(e.user.id,e.state),e.setState(e.initialState)},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(s.a)({},n,r))},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.currentUser.id!==e.currentUser.id&&(this.user=this.props.currentUser,this.setState(this.props.currentUser))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",value:this.state.name,onChange:this.handleChange,required:!0}),r.a.createElement("label",null,"UserName"),r.a.createElement("input",{type:"text",name:"userName",id:"userName",value:this.state.userName,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"button"},"Update User"),r.a.createElement("button",{onClick:function(){return e.props.setEditing(!1)},className:"button muted-button"}," Cancel")))}}]),a}(n.Component),f=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],u=Object(n.useState)(!1),s=Object(i.a)(u,2),m=s[0],o=s[1],d=Object(n.useState)({id:null,name:"",userName:""}),p=Object(i.a)(d,2),f=p[0],v=p[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"React CRUD App with Hooks"),r.a.createElement("header",{className:"App-header"}),r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"flex-large"},m?r.a.createElement("div",null,r.a.createElement("h2",null,"Edit user"),r.a.createElement(b,{editing:m,setEditing:o,currentUser:f,updateUser:function(e,t){o(!1),l(a.map((function(a){return a.id===e?t:a})))}})):r.a.createElement("div",null,r.a.createElement("h2",null,"Add user"),r.a.createElement(h,{addUser:function(e){e.id=a.length+1,l([].concat(Object(c.a)(a),[e]))}}))),r.a.createElement("div",{className:"flex-large"},r.a.createElement("h2",null,"Users List"),r.a.createElement(E,{data:a,deleteUser:function(e){o(!1),l(a.filter((function(t){return t.id!==e})))},editUser:function(e){o(!0),v({id:e.id,name:e.name,userName:e.userName})}}))))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.acbb63f9.chunk.js.map