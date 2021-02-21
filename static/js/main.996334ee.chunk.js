(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),r=n(57),c=n.n(r),i=(n(64),n(14)),o=n(15),l=n(17),u=n(16),h=n(21),d=n(43),j=n(26);n(65),n(67);j.a.initializeApp({apiKey:"AIzaSyADdW9WsBiwihH4ToCdbLVBELIRBrKTBP8",authDomain:"chatty-b51b5.firebaseapp.com",databaseURL:"https://chatty-b51b5-default-rtdb.firebaseio.com/"});var b=j.a.auth,m=j.a.database(),p=j.a.database,f=n(58),v=n.n(f),g=n(6),x=n(8),O=n(1);var N=function(e){var t=e.user_id;return Object(O.jsx)("header",{children:Object(O.jsxs)("nav",{className:"navbar navbar-expand-sm fixed-top navbar-light bg-light",children:[Object(O.jsx)(x.b,{className:"navbar-brand",to:"/",children:"Chatty"}),Object(O.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(O.jsx)("span",{className:"navbar-toggler-icon"})}),Object(O.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup",children:b().currentUser?Object(O.jsxs)("div",{className:"navbar-nav",children:[Object(O.jsx)(x.b,{className:"nav-item nav-link mr-3",to:"/chat",children:"Profile"}),Object(O.jsx)("button",{className:"btn btn-primary mr-3",onClick:function(){var e=m.ref("users").child(t);e.child("logged").set(!1),e.child("last_online").onDisconnect().set(p.ServerValue.TIMESTAMP),b().signOut()},children:"Logout"}),Object(O.jsx)("button",{className:"btn btn-primary mr-3",onClick:function(){b().currentUser.delete().then((function(){})).catch((function(e){console.log(e)}))},children:"Remove"})]}):Object(O.jsxs)("div",{className:"navbar-nav",children:[Object(O.jsx)(x.b,{className:"nav-item nav-link mr-3",to:"/login",children:"Sign In"}),Object(O.jsx)(x.b,{className:"nav-item nav-link mr-3",to:"/signup",children:"Sign Up"})]})})]})})};var y=function(){return Object(O.jsx)("footer",{className:"pt-5",children:Object(O.jsx)("div",{className:"container text-center",children:Object(O.jsx)("p",{children:"\xa9 Chatty 2020."})})})},_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"home",children:[Object(O.jsx)(N,{}),Object(O.jsx)("section",{children:Object(O.jsx)("div",{className:"jumbotron jumbotron-fluid py-5",children:Object(O.jsxs)("div",{className:"container text-center py-5",children:[Object(O.jsx)("h1",{className:"display-4",children:"Welcome to Chatty"}),Object(O.jsx)("p",{className:"lead",children:"A great place to share your thoughts with friends"}),Object(O.jsxs)("div",{className:"mt-4",children:[Object(O.jsx)(x.b,{className:"btn btn-primary px-5 mr-3",to:"/signup",children:"Create New Account"}),Object(O.jsx)(x.b,{className:"btn px-5",to:"/login",children:"Login to Your Account"})]})]})})}),Object(O.jsx)(y,{})]})}}]),n}(a.Component),S=n(5),k=n.n(S),w=n(11),C=n(9),E=n(33),I=n.n(E);function A(e){var t=m.ref("users").child(e);t&&m.ref(".info/connected").on("value",(function(e){!0===e.val()&&(t.child("logged").set(!0),t.child("logged").onDisconnect().set(!1),t.child("last_online").onDisconnect().set(p.ServerValue.TIMESTAMP))}))}function D(e){m.ref("users").once("child_changed",(function(t){var n=t.val(),a=t.key;e.state.listUser.forEach((function(t){t.user_id==a&&(t.logged=n.logged,D(e))})),e.setState({listUser:e.state.listUser})}))}var L=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e))._isMounted=!1,a.state={user:a.props.user,conver_user:{},chats:[],listUser:[],content:"",readError:null,writeError:null,loadingChats:!1},a.handleChange=a.handleChange.bind(Object(C.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(C.a)(a)),a.checkEnter=a.checkEnter.bind(Object(C.a)(a)),a.myRef=s.a.createRef(),a}return Object(o.a)(n,[{key:"checkEnter",value:function(){var e=Object(w.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==t.keyCode){e.next=15;break}return this.setState({writeError:null}),n=this.myRef.current,e.prev=3,a={content:this.state.content,timestamp:Date.now(),from_uid:this.state.user.user_id,to_uid:this.state.conver_user.user_id},e.next=7,m.ref("chats").push(a);case 7:this.state.chats.push(a),this.setState({content:""}),n.scrollBy(0,n.scrollHeight),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),this.setState({writeError:e.t0.message});case 15:case"end":return e.stop()}}),e,this,[[3,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._isMounted=!1;case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(w.a)(k.a.mark((function e(){var t,n=this;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._isMounted=!0,I()(document).ready((function(){I()("#action_menu_btn").click((function(){I()(".action_menu").toggle()}))})),this.setState({readError:null,loadingChats:!0}),t=this.myRef.current,A(this.props.user.user_id);try{m.ref("users").once("value",(function(e){var a=[],s=e.val();for(var r in s){var c=s[r];c.user_id=r,a.push(c)}m.ref("chats").once("value",(function(e){var s=[];e.forEach((function(e){var t=e.val();t.from_uid!=n.state.user.user_id&&t.to_uid!=n.state.user.user_id||s.push(t)})),s.sort((function(e,t){return e.timestamp-t.timestamp}));var r,c=[];if(s.forEach((function(e){if(e.from_uid==n.state.user.user_id){if(!c.find((function(t){return t.user_id==e.to_uid}))){var t=a.find((function(t){return t.user_id==e.to_uid}));"undefined"!=typeof t&&c.push(t)}}else if(!c.find((function(t){return t.user_id==e.from_uid}))){var s=a.find((function(t){return t.user_id==e.from_uid}));"undefined"!=typeof s&&c.push(s)}})),n.setState({listUser:c}),s.length){r=s[0].from_uid==n.state.user.user_id?s[0].to_uid:s[0].from_uid;var i=a.filter((function(e){return e.user_id==r}));n.setState({conver_user:i[0]})}n.setState({chats:s}),t.scrollBy(0,t.scrollHeight),n.setState({loadingChats:!1})}))}))}catch(a){this.setState({readError:a.message,loadingChats:!1})}D(this);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(w.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({writeError:null}),n=this.myRef.current,e.prev=3,a={content:this.state.content,timestamp:Date.now(),from_uid:this.state.user.user_id,to_uid:this.state.conver_user.user_id},e.next=7,m.ref("chats").push(a);case 7:this.state.chats.push(a),this.setState({content:""}),n.scrollBy(0,n.scrollHeight),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),this.setState({writeError:e.t0.message});case 15:case"end":return e.stop()}}),e,this,[[3,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"formatTime",value:function(e){var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(t.getMinutes())}},{key:"renderElementLoading",value:function(){return this.state.loadingChats?Object(O.jsx)("div",{className:"spinner-border text-success",role:"status",children:Object(O.jsx)("span",{className:"sr-only",children:"Loading..."})}):null}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)(N,{user_id:this.state.user.user_id}),this.renderElementLoading(),Object(O.jsx)("div",{className:"container-fluid chat-page h-100",children:Object(O.jsxs)("div",{className:"row justify-content-center h-100",children:[Object(O.jsx)("div",{className:"col-md-4 col-xl-3 chat",children:Object(O.jsxs)("div",{className:"card mb-sm-3 mb-md-0 contacts_card",children:[Object(O.jsx)("div",{className:"card-header",children:Object(O.jsxs)("div",{className:"input-group",children:[Object(O.jsx)("input",{type:"text",placeholder:"Search...",className:"form-control search"}),Object(O.jsx)("div",{className:"input-group-prepend",children:Object(O.jsx)("span",{className:"input-group-text search_btn",children:Object(O.jsx)("i",{className:"fas fa-search"})})})]})}),Object(O.jsx)("div",{className:"card-body contacts_body",children:Object(O.jsx)("ul",{className:"contacts",children:this.state.listUser.map((function(t){return Object(O.jsx)("li",{children:Object(O.jsxs)("div",{className:"d-flex bd-highlight",children:[Object(O.jsxs)("div",{className:"img_cont",children:[Object(O.jsx)("img",{src:t.profile_picture,className:"rounded-circle user_img"}),Object(O.jsx)("span",{className:"online_icon "+(t.logged?"":"offline")})]}),Object(O.jsxs)("div",{className:"user_info",children:[Object(O.jsx)("span",{children:t.username}),t.logged?"":Object(O.jsxs)("p",{children:[t.username," left ",e.formatTime(t.last_online)," mins ago"]})]})]})},t.toString())}))})}),Object(O.jsx)("div",{className:"card-footer"})]})}),Object(O.jsx)("div",{className:"col-md-8 col-xl-6 chat",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("div",{className:"card-header msg_head",children:[Object(O.jsxs)("div",{className:"d-flex bd-highlight",children:[Object(O.jsxs)("div",{className:"img_cont",children:[Object(O.jsx)("img",{src:this.state.conver_user.profile_picture,className:"rounded-circle user_img"}),Object(O.jsx)("span",{className:"online_icon"+(this.state.conver_user.logged?"":"offline")})]}),Object(O.jsx)("div",{className:"user_info",children:Object(O.jsx)("span",{children:this.state.conver_user.username})}),Object(O.jsxs)("div",{className:"video_cam",children:[Object(O.jsx)("span",{children:Object(O.jsx)("i",{className:"fas fa-video"})}),Object(O.jsx)("span",{children:Object(O.jsx)("i",{className:"fas fa-phone"})})]})]}),Object(O.jsx)("span",{id:"action_menu_btn",children:Object(O.jsx)("i",{className:"fas fa-ellipsis-v"})}),Object(O.jsx)("div",{className:"action_menu",children:Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("i",{className:"fas fa-user-circle"})," View profile"]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("i",{className:"fas fa-users"})," Add to close friends"]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("i",{className:"fas fa-plus"})," Add to group"]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("i",{className:"fas fa-ban"})," Block"]})]})})]}),Object(O.jsx)("div",{className:"card-body msg_card_body",ref:this.myRef,children:this.state.chats.map((function(t,n){return Object(O.jsxs)("div",{className:"d-flex "+(t.from_uid==e.state.conver_user.user_id?"justify-content-start":"justify-content-end")+" mb-4",children:[Object(O.jsx)("div",{className:"img_cont_msg",children:Object(O.jsx)("img",{src:t.from_uid==e.state.conver_user.user_id?e.state.conver_user.profile_picture:e.state.user.profile_picture,className:"rounded-circle user_img_msg"})}),Object(O.jsxs)("div",{className:"msg_cotainer",children:[t.content,Object(O.jsx)("span",{className:"msg_time",children:e.formatTime(t.timestamp)})]})]},n)}))}),Object(O.jsx)("div",{className:"card-footer",children:Object(O.jsx)("form",{onSubmit:this.handleSubmit,children:Object(O.jsxs)("div",{className:"input-group",children:[Object(O.jsx)("div",{className:"input-group-append",children:Object(O.jsx)("span",{className:"input-group-text attach_btn",children:Object(O.jsx)("i",{className:"fas fa-paperclip"})})}),Object(O.jsx)("textarea",{onKeyUp:this.checkEnter,onChange:this.handleChange,value:this.state.content,className:"form-control type_msg",placeholder:"Type your message..."}),Object(O.jsx)("div",{className:"input-group-append",children:Object(O.jsx)("button",{type:"submit",children:Object(O.jsx)("span",{className:"input-group-text send_btn",children:Object(O.jsx)("i",{className:"fas fa-location-arrow"})})})})]})})})]})})]})}),Object(O.jsxs)("div",{className:"py-5 mx-3",children:["Login in as: ",Object(O.jsx)("strong",{className:"text-info",children:this.state.user.email})]})]})}}]),n}(a.Component),M=n(24);function U(){var e=new b.GoogleAuthProvider;return b().signInWithPopup(e)}function P(){var e=new b.GithubAuthProvider;return b().signInWithPopup(e)}var T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={error:null,email:"",password:""},e.handleChange=e.handleChange.bind(Object(C.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(C.a)(e)),e.googleSignIn=e.googleSignIn.bind(Object(C.a)(e)),e.githubSignIn=e.githubSignIn.bind(Object(C.a)(e)),e}return Object(o.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(w.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,a=this.state.email,s=this.state.password,b().createUserWithEmailAndPassword(a,s);case 5:n=e.sent,console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),this.setState({error:e.t0.message});case 12:case"end":return e.stop()}var a,s}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P();case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),this.setState({error:e.t0.message});case 9:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("form",{className:"mt-5 py-5 px-5",onSubmit:this.handleSubmit,children:[Object(O.jsxs)("h1",{children:["Sign Up to",Object(O.jsx)(x.b,{className:"title ml-2",to:"/",children:"Chatty"})]}),Object(O.jsx)("p",{className:"lead",children:"Fill in the form below to create an account."}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})}),Object(O.jsxs)("div",{className:"form-group",children:[this.state.error?Object(O.jsx)("p",{className:"text-danger",children:this.state.error}):null,Object(O.jsx)("button",{className:"btn btn-primary px-5",type:"submit",children:"Sign up"})]}),Object(O.jsx)("p",{children:"You can also sign up with any of these services"}),Object(O.jsx)("button",{className:"btn btn-danger mr-2",type:"button",onClick:this.googleSignIn,children:"Sign up with Google"}),Object(O.jsx)("button",{className:"btn btn-secondary",type:"button",onClick:this.githubSignIn,children:"Sign up with GitHub"}),Object(O.jsx)("hr",{}),Object(O.jsxs)("p",{children:["Already have an account? ",Object(O.jsx)(x.b,{to:"/login",children:"Login"})]})]})})}}]),n}(a.Component),B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={error:null,email:"",password:""},e.handleChange=e.handleChange.bind(Object(C.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(C.a)(e)),e.googleSignIn=e.googleSignIn.bind(Object(C.a)(e)),e.githubSignIn=e.githubSignIn.bind(Object(C.a)(e)),e}return Object(o.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(w.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,n=this.state.email,a=this.state.password,b().signInWithEmailAndPassword(n,a);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({error:e.t0.message});case 10:case"end":return e.stop()}var n,a}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("form",{className:"mt-5 py-5 px-5",autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(O.jsxs)("h1",{children:["Login to",Object(O.jsx)(x.b,{className:"title ml-2",to:"/",children:"Chatty"})]}),Object(O.jsx)("p",{className:"lead",children:"Fill in the form below to login to your account."}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})}),Object(O.jsxs)("div",{className:"form-group",children:[this.state.error?Object(O.jsx)("p",{className:"text-danger",children:this.state.error}):null,Object(O.jsx)("button",{className:"btn btn-primary px-5",type:"submit",children:"Login"})]}),Object(O.jsx)("p",{children:"You can also log in with any of these services"}),Object(O.jsx)("button",{className:"btn btn-danger mr-2",type:"button",onClick:this.googleSignIn,children:"Sign in with Google"}),Object(O.jsx)("button",{className:"btn btn-secondary",type:"button",onClick:this.githubSignIn,children:"Sign in with GitHub"}),Object(O.jsx)("hr",{}),Object(O.jsxs)("p",{children:["Don't have an account? ",Object(O.jsx)(x.b,{to:"/signup",children:"Sign up"})]})]})})}}]),n}(a.Component);n(104);function R(e){var t=e.component,n=e.authenticated,a=Object(d.a)(e,["component","authenticated"]);return Object(O.jsx)(g.b,Object(h.a)(Object(h.a)({},a),{},{render:function(e){return!0===n?Object(O.jsx)(t,Object(h.a)({user:a.user},e)):Object(O.jsx)(g.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}function W(e){var t=e.component,n=e.authenticated,a=Object(d.a)(e,["component","authenticated"]);return Object(O.jsx)(g.b,Object(h.a)(Object(h.a)({},a),{},{render:function(e){return!1===n?Object(O.jsx)(t,Object(h.a)({},e)):Object(O.jsx)(g.a,{to:"/chat"})}}))}var F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={authenticated:!1,loading:!0},e}return Object(o.a)(n,[{key:"render",value:function(){return!0===this.state.loading?Object(O.jsx)("h2",{children:"Loading..."}):Object(O.jsx)(x.a,{children:Object(O.jsxs)(g.d,{children:[Object(O.jsx)(g.b,{exact:!0,path:"/",component:_}),Object(O.jsx)(R,{path:"/chat",authenticated:this.state.authenticated,component:L,user:this.state.user}),Object(O.jsx)(W,{path:"/signup",authenticated:this.state.authenticated,component:T}),Object(O.jsx)(W,{path:"/login",authenticated:this.state.authenticated,component:B})]})})}},{key:"componentWillMount",value:function(){this.socket=v()("https://nbchatserver4.herokuapp.com/")}},{key:"componentDidMount",value:function(){var e=this;b().onAuthStateChanged((function(t){if(t){var n=t.email,a=[];m.ref("users").on("value",(function(s){var r=s.val();for(var c in r){var i=r[c];i.user_id=c,a.push(i)}var o=null;a.forEach((function(e){e.email==n&&(o=e)})),null==o&&function(e,t,n){m.ref("users").push({username:t,email:e,profile_picture:n})}(n,t.displayName,t.photoURL),e.setState({authenticated:!0,loading:!1,user:o})}))}else e.setState({authenticated:!1,loading:!1})}))}}]),n}(a.Component),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root")),H()},64:function(e,t,n){},95:function(e,t){}},[[105,1,2]]]);
//# sourceMappingURL=main.996334ee.chunk.js.map