(this.webpackJsonpcrud_app=this.webpackJsonpcrud_app||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),i=(a(14),a(8)),u=a(1),m=a(2),o=a(3),s=a(4),d=a(7),h=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).initialState={name:"",details:""},e.state=e.initialState,e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(d.a)({},n,r))},e.submitForm=function(t){t.preventDefault(),e.props.handleSubmit(e.state),e.setState(e.initialState)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.details;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("input",{type:"text",placeholder:"Enter Name",name:"name",id:"name",value:t,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Enter Details",name:"details",id:"details",value:a,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Submit")))}}]),a}(n.Component),p=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.data,t=this.props.removeUser;return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,e.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.details),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return t(a)}},"Delete")))})))))}}]),a}(n.Component),b=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e.removeUser=function(t){var a=e.state.data;e.setState({data:a.filter((function(e,a){return a!==t}))})},e.handleSubmit=function(t){e.setState({data:[].concat(Object(i.a)(e.state.data),[t])})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"App-header"}),r.a.createElement("br",null),r.a.createElement(h,{handleSubmit:this.handleSubmit}),r.a.createElement(p,{data:e,removeUser:this.removeUser}))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.25eca67f.chunk.js.map