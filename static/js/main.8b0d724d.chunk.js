(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{25:function(e,t,n){e.exports=n(37)},34:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),l=n(11),i=n(12),u=n(15),s=n(14),m=n(4),b=n(5),d={addContact:Object(b.b)("phonebook/add"),deleteContact:Object(b.b)("phonebook/delete"),changeFilter:Object(b.b)("phonebook/filter")};var h={changeFilter:d.changeFilter},p=Object(m.b)((function(e){return{contacts:e.contacts.contacts}}),h)((function(e){var t=e.filter,n=e.changeFilter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{style:{display:"block",marginTop:"5px",marginBottom:"10px",width:"100%"},type:"text",name:"filter",value:t,onChange:function(e){return n(e.target.value)},placeholder:"find contact"}))})),f=n(8),E=n(40),g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],name:"",number:""},e.handleChange=function(t){var n=t.target.name;e.setState(Object(f.a)({},n,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.addContact({name:e.state.name,id:Object(E.a)(),number:e.state.number}),e.setState({name:"",number:""})},e}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit,style:{border:"1px solid whisper",width:"400px",height:"165px"}},c.a.createElement("label",null,"Name"),c.a.createElement("input",{name:"name",style:{display:"block",marginTop:"5px",marginBottom:"10px",width:"100%"},placeholder:"add name",value:this.state.name,onChange:this.handleChange}),c.a.createElement("label",null,"Number"),c.a.createElement("input",{name:"number",style:{display:"block",marginTop:"5px",marginBottom:"10px",width:"100%"},placeholder:"add number",value:this.state.number,onChange:this.handleChange}),c.a.createElement("button",{style:{marginTop:"15px",width:"100%",backgroundColor:"blue",color:"white",height:"35px"}},"Add contact"))}}]),n}(a.Component),O=Object(m.b)(null,d)(g),j=(n(34),n(41)),v=n(39);var y=Object(m.b)((function(e){return{contactsItems:e.contacts.contacts,filter:e.contacts.filter}}),(function(e){return{deleteContact:function(t){return e(d.deleteContact(t))}}}))((function(e){var t=e.contactsItems,n=e.deleteContact,a=e.filter;return c.a.createElement(j.a,{component:"ul",className:"list"},function(e,t){return t?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):e}(t,a).map((function(e){return c.a.createElement(v.a,{key:e.id,timeout:300,classNames:"list-fade"},c.a.createElement("li",{key:e.id,className:"item"},c.a.createElement("p",null,e.name),c.a.createElement("p",null,e.number),c.a.createElement("button",{className:"btn",onClick:function(){return n(e.id)}},"X")))})))})),C=(n(35),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isExsist:!1},e}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(v.a,{in:!0,appear:!0,classNames:"Phone-slideIn",timeout:1e3,unmountOnExit:!0},c.a.createElement("h1",{className:"Phone"},"PhoneBook")),c.a.createElement(v.a,{in:this.state.isExsist,classNames:"alert",timeout:500,unmountOnExit:!0},c.a.createElement("h2",{className:"alert"},"This name is already in contacts!")),c.a.createElement(O,null),c.a.createElement(v.a,{in:this.props.contactsItems.length>1||""!==this.props.filter,timeout:500,unmountOnExit:!0},c.a.createElement(p,null)),c.a.createElement(y,null))}}]),n}(a.Component)),x=Object(m.b)((function(e){return{contactsItems:e.contacts.contacts,filter:e.contacts.filter}}))(C);var k,w=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(x,null))},N=(n(36),n(13)),F=n(22),I=n.n(F),T=n(3),B=Object(b.c)([],(k={},Object(f.a)(k,d.addContact,(function(e,t){var n=t.payload;return[].concat(Object(N.a)(e),[n])})),Object(f.a)(k,d.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),k)),S=Object(b.c)("",Object(f.a)({},d.changeFilter,(function(e,t){return t.payload}))),A=Object(T.c)({contacts:B,filter:S}),P=[].concat(Object(N.a)(Object(b.d)()),[I.a]),J=Object(b.a)({reducer:{contacts:A},milldeware:P,devTools:!1});o.a.render(c.a.createElement(m.a,{store:J},c.a.createElement(w,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.8b0d724d.chunk.js.map