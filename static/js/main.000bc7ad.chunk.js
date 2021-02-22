(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{39:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(33),c=a.n(r),i=(a(39),a(14)),o=a(15),l=a(17),u=a(16),h=a(21),d=a(31),j=a(24);a(40),a(42);j.a.initializeApp({apiKey:"AIzaSyADdW9WsBiwihH4ToCdbLVBELIRBrKTBP8",authDomain:"chatty-b51b5.firebaseapp.com",databaseURL:"https://chatty-b51b5-default-rtdb.firebaseio.com/"});var b=j.a.auth,m=j.a.database(),p=j.a.database,f=a(6),v=a(9),g=a(1);var x=function(e){var t=e.user_id;return Object(g.jsx)("header",{children:Object(g.jsxs)("nav",{className:"navbar navbar-expand-sm fixed-top navbar-light bg-light",children:[Object(g.jsx)(v.b,{className:"navbar-brand",to:"/",children:"Chatty"}),Object(g.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(g.jsx)("span",{className:"navbar-toggler-icon"})}),Object(g.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup",children:b().currentUser?Object(g.jsxs)("div",{className:"navbar-nav",children:[Object(g.jsx)(v.b,{className:"nav-item nav-link mr-3",to:"/chat",children:"Profile"}),Object(g.jsx)("button",{className:"btn btn-primary mr-3",onClick:function(){var e=m.ref("users").child(t);e.child("logged").set(!1),e.child("last_online").onDisconnect().set(p.ServerValue.TIMESTAMP),b().signOut()},children:"Logout"}),Object(g.jsx)("button",{className:"btn btn-primary mr-3",onClick:function(){b().currentUser.delete().then((function(){})).catch((function(e){console.log(e)}))},children:"Remove"})]}):Object(g.jsxs)("div",{className:"navbar-nav",children:[Object(g.jsx)(v.b,{className:"nav-item nav-link mr-3",to:"/login",children:"Sign In"}),Object(g.jsx)(v.b,{className:"nav-item nav-link mr-3",to:"/signup",children:"Sign Up"})]})})]})})};var O=function(){return Object(g.jsx)("footer",{className:"pt-5",children:Object(g.jsx)("div",{className:"container text-center",children:Object(g.jsx)("p",{children:"\xa9 Chatty 2020."})})})},_=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"home",children:[Object(g.jsx)(x,{}),Object(g.jsx)("section",{children:Object(g.jsx)("div",{className:"jumbotron jumbotron-fluid py-5",children:Object(g.jsxs)("div",{className:"container text-center py-5",children:[Object(g.jsx)("h1",{className:"display-4",children:"Welcome to Chatty"}),Object(g.jsx)("p",{className:"lead",children:"A great place to share your thoughts with friends"}),Object(g.jsxs)("div",{className:"mt-4",children:[Object(g.jsx)(v.b,{className:"btn btn-primary px-5 mr-3",to:"/signup",children:"Create New Account"}),Object(g.jsx)(v.b,{className:"btn px-5",to:"/login",children:"Login to Your Account"})]})]})})}),Object(g.jsx)(O,{})]})}}]),a}(n.Component),N=a(5),y=a.n(N),S=a(11),k=a(8);var w=a(25),C=a.n(w);function E(e){var t=m.ref("users").child(e);t&&m.ref(".info/connected").on("value",(function(e){!0===e.val()&&(t.child("logged").set(!0),t.child("logged").onDisconnect().set(!1),t.child("last_online").onDisconnect().set(p.ServerValue.TIMESTAMP))}))}function I(e){m.ref("users").once("child_changed",(function(t){var a=t.val(),n=t.key;e.state.listUser.forEach((function(t){t.user_id==n&&(t.logged=a.logged,I(e))})),e.setState({listUser:e.state.listUser})}))}function A(e){m.ref("chats").on("child_added",(function(t){console.log(t),e.loadApp(!1)}))}var D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e))._isMounted=!1,n.state={user:n.props.user,conver_user:{},chats:[],users:[],listUser:[],content:"",search:"",readError:null,writeError:null,loadingChats:!1},n.handleChange=n.handleChange.bind(Object(k.a)(n)),n.handleChangeSearch=n.handleChangeSearch.bind(Object(k.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(k.a)(n)),n.checkEnter=n.checkEnter.bind(Object(k.a)(n)),n.myRef=s.a.createRef(),n}return Object(o.a)(a,[{key:"checkEnter",value:function(){var e=Object(S.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==t.keyCode){e.next=14;break}return this.setState({writeError:null}),a=this.myRef.current,e.prev=3,n={content:this.state.content,timestamp:Date.now(),from_uid:this.state.user.user_id,to_uid:this.state.conver_user.user_id},e.next=7,m.ref("chats").push(n);case 7:this.setState({content:""}),a.scrollBy(0,a.scrollHeight),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.setState({writeError:e.t0.message});case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._isMounted=!1;case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadApp",value:function(e){var t=this,a=this.myRef.current;m.ref("users").once("value",(function(n){var s=[],r=n.val();for(var c in r){var i=r[c];i.user_id=c,s.push(i)}t.setState({users:s}),m.ref("chats").once("value",(function(n){var r=[];n.forEach((function(e){var a=e.val();a.from_uid!=t.state.user.user_id&&a.to_uid!=t.state.user.user_id||r.push(a)})),r.sort((function(e,t){return e.timestamp-t.timestamp}));var c,i=[];if(r.forEach((function(e){if(e.from_uid==t.state.user.user_id){if(!i.find((function(t){return t.user_id==e.to_uid}))){var a=s.find((function(t){return t.user_id==e.to_uid}));"undefined"!=typeof a&&i.push(a)}}else if(!i.find((function(t){return t.user_id==e.from_uid}))){var n=s.find((function(t){return t.user_id==e.from_uid}));"undefined"!=typeof n&&i.push(n)}})),t.setState({listUser:i}),r.length&&e){c=r[0].from_uid==t.state.user.user_id?r[0].to_uid:r[0].from_uid;var o=s.filter((function(e){return e.user_id==c}));t.setState({conver_user:o[0]})}t.setState({chats:r}),a.scrollBy(0,a.scrollHeight),t.setState({loadingChats:!1})}))}))}},{key:"componentDidMount",value:function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._isMounted=!0,C()(document).ready((function(){C()("#action_menu_btn").click((function(){C()(".action_menu").toggle()}))})),this.setState({readError:null,loadingChats:!0}),E(this.props.user.user_id);try{this.loadApp(!0)}catch(t){this.setState({readError:t.message,loadingChats:!1})}I(this),A(this);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(S.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({writeError:null}),a=this.myRef.current,e.prev=3,n={content:this.state.content,timestamp:Date.now(),from_uid:this.state.user.user_id,to_uid:this.state.conver_user.user_id},e.next=7,m.ref("chats").push(n);case 7:this.setState({content:""}),a.scrollBy(0,a.scrollHeight),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.setState({writeError:e.t0.message});case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"formatTime",value:function(e){var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(t.getMinutes())}},{key:"renderElementLoading",value:function(){return this.state.loadingChats?Object(g.jsx)("div",{className:"spinner-border text-success",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})}):null}},{key:"hanldeSwitchConversation",value:function(e){this.setState({conver_user:e})}},{key:"handleChangeSearch",value:function(e){this.setState({search:e.target.value})}},{key:"renderUser",value:function(e,t,a){return-1!==e.username.indexOf(a)?Object(g.jsxs)("div",{className:"list__search",onClick:this.hanldeSwitchConversation.bind(this,e),children:[Object(g.jsx)("div",{className:"search__avatar",children:Object(g.jsx)("img",{src:e.profile_picture,alt:""})}),Object(g.jsxs)("div",{className:"search__info",children:[Object(g.jsx)("span",{className:"info__name",children:e.username}),Object(g.jsx)("span",{className:"info__status "+(e.logged?"online":"offline"),children:e.logged?"online":"offline"})]})]},t):null}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsx)(x,{user_id:this.state.user.user_id}),this.renderElementLoading(),Object(g.jsx)("div",{className:"container-fluid chat-page h-100",children:Object(g.jsxs)("div",{className:"row justify-content-center h-100",children:[Object(g.jsx)("div",{className:"col-md-4 col-xl-3 chat",children:Object(g.jsxs)("div",{className:"card mb-sm-3 mb-md-0 contacts_card",children:[Object(g.jsx)("div",{className:"card-header",children:Object(g.jsxs)("div",{className:"input-group",children:[Object(g.jsx)("input",{type:"text",placeholder:"Search...",onChange:this.handleChangeSearch,value:this.state.search,className:"form-control search"}),Object(g.jsx)("div",{className:"input-group-prepend",children:Object(g.jsx)("span",{className:"input-group-text search_btn",children:Object(g.jsx)("i",{className:"fas fa-search"})})}),""!==this.state.search?Object(g.jsxs)("div",{className:"box__search",children:[Object(g.jsx)("h3",{className:"title__search",children:"Discover"}),Object(g.jsx)("div",{className:"warpper__search",children:this.state.users.map((function(t,a){return e.renderUser(t,a,e.state.search)}))})]}):""]})}),Object(g.jsx)("div",{className:"card-body contacts_body",children:Object(g.jsx)("ul",{className:"contacts",children:this.state.listUser.map((function(t,a){return Object(g.jsx)("li",{className:"list__user "+(t.user_id==e.state.conver_user.user_id?"active":""),onClick:e.hanldeSwitchConversation.bind(e,t),children:Object(g.jsxs)("div",{className:"d-flex bd-highlight",children:[Object(g.jsxs)("div",{className:"img_cont",children:[Object(g.jsx)("img",{src:t.profile_picture,className:"rounded-circle user_img"}),Object(g.jsx)("span",{className:"online_icon "+(t.logged?"":"offline")})]}),Object(g.jsxs)("div",{className:"user_info",children:[Object(g.jsx)("span",{children:t.username}),t.logged?"":Object(g.jsxs)("p",{children:["left ",e.formatTime(t.last_online)]})]})]})},a)}))})}),Object(g.jsx)("div",{className:"card-footer"})]})}),Object(g.jsx)("div",{className:"col-md-8 col-xl-6 chat",children:Object(g.jsxs)("div",{className:"card",children:[Object(g.jsxs)("div",{className:"card-header msg_head",children:[Object(g.jsxs)("div",{className:"d-flex bd-highlight",children:[Object(g.jsxs)("div",{className:"img_cont",children:[Object(g.jsx)("img",{src:this.state.conver_user.profile_picture,className:"rounded-circle user_img"}),Object(g.jsx)("span",{className:"online_icon"+(this.state.conver_user.logged?"":"offline")})]}),Object(g.jsx)("div",{className:"user_info",children:Object(g.jsx)("span",{children:this.state.conver_user.username})}),Object(g.jsxs)("div",{className:"video_cam",children:[Object(g.jsx)("span",{children:Object(g.jsx)("i",{className:"fas fa-video"})}),Object(g.jsx)("span",{children:Object(g.jsx)("i",{className:"fas fa-phone"})})]})]}),Object(g.jsx)("span",{id:"action_menu_btn",children:Object(g.jsx)("i",{className:"fas fa-ellipsis-v"})}),Object(g.jsx)("div",{className:"action_menu",children:Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)("i",{className:"fas fa-user-circle"})," View profile"]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("i",{className:"fas fa-users"})," Add to close friends"]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("i",{className:"fas fa-plus"})," Add to group"]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("i",{className:"fas fa-ban"})," Block"]})]})})]}),Object(g.jsx)("div",{className:"card-body msg_card_body",ref:this.myRef,children:this.state.chats.map((function(t,a){if(t.from_uid==e.state.conver_user.user_id&&t.to_uid==e.state.user.user_id||t.to_uid==e.state.conver_user.user_id&&t.from_uid==e.state.user.user_id)return Object(g.jsxs)("div",{className:"d-flex "+(t.from_uid==e.state.conver_user.user_id?"justify-content-start":"justify-content-end")+" mb-4",children:[Object(g.jsx)("div",{className:"img_cont_msg",children:Object(g.jsx)("img",{src:t.from_uid==e.state.conver_user.user_id?e.state.conver_user.profile_picture:e.state.user.profile_picture,className:"rounded-circle user_img_msg"})}),Object(g.jsxs)("div",{className:"msg_cotainer",children:[t.content,Object(g.jsx)("span",{className:"msg_time",children:e.formatTime(t.timestamp)})]})]},a)}))}),Object(g.jsx)("div",{className:"card-footer",children:Object(g.jsx)("form",{onSubmit:this.handleSubmit,children:Object(g.jsxs)("div",{className:"input-group",children:[Object(g.jsx)("div",{className:"input-group-append",children:Object(g.jsx)("span",{className:"input-group-text attach_btn",children:Object(g.jsx)("i",{className:"fas fa-paperclip"})})}),Object(g.jsx)("textarea",{onKeyUp:this.checkEnter,onChange:this.handleChange,value:this.state.content,className:"form-control type_msg",placeholder:"Type your message..."}),Object(g.jsx)("div",{className:"input-group-append",children:Object(g.jsx)("button",{type:"submit",children:Object(g.jsx)("span",{className:"input-group-text send_btn",children:Object(g.jsx)("i",{className:"fas fa-location-arrow"})})})})]})})})]})})]})}),Object(g.jsxs)("div",{className:"py-5 mx-3",children:["Login in as: ",Object(g.jsx)("strong",{className:"text-info",children:this.state.user.email})]})]})}}]),a}(n.Component),U=a(22);function L(){var e=new b.GoogleAuthProvider;return b().signInWithPopup(e)}function M(){var e=new b.GithubAuthProvider;return b().signInWithPopup(e)}var P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={error:null,email:"",password:""},e.handleChange=e.handleChange.bind(Object(k.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(k.a)(e)),e.googleSignIn=e.googleSignIn.bind(Object(k.a)(e)),e.githubSignIn=e.githubSignIn.bind(Object(k.a)(e)),e}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(U.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(S.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,n=this.state.email,s=this.state.password,b().createUserWithEmailAndPassword(n,s);case 5:a=e.sent,console.log(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),this.setState({error:e.t0.message});case 12:case"end":return e.stop()}var n,s}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M();case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),this.setState({error:e.t0.message});case 9:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("form",{className:"mt-5 py-5 px-5",onSubmit:this.handleSubmit,children:[Object(g.jsxs)("h1",{children:["Sign Up to",Object(g.jsx)(v.b,{className:"title ml-2",to:"/",children:"Chatty"})]}),Object(g.jsx)("p",{className:"lead",children:"Fill in the form below to create an account."}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{className:"form-control",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})}),Object(g.jsxs)("div",{className:"form-group",children:[this.state.error?Object(g.jsx)("p",{className:"text-danger",children:this.state.error}):null,Object(g.jsx)("button",{className:"btn btn-primary px-5",type:"submit",children:"Sign up"})]}),Object(g.jsx)("p",{children:"You can also sign up with any of these services"}),Object(g.jsx)("button",{className:"btn btn-danger mr-2",type:"button",onClick:this.googleSignIn,children:"Sign up with Google"}),Object(g.jsx)("button",{className:"btn btn-secondary",type:"button",onClick:this.githubSignIn,children:"Sign up with GitHub"}),Object(g.jsx)("hr",{}),Object(g.jsxs)("p",{children:["Already have an account? ",Object(g.jsx)(v.b,{to:"/login",children:"Login"})]})]})})}}]),a}(n.Component),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={error:null,email:"",password:""},e.handleChange=e.handleChange.bind(Object(k.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(k.a)(e)),e.googleSignIn=e.googleSignIn.bind(Object(k.a)(e)),e.githubSignIn=e.githubSignIn.bind(Object(k.a)(e)),e}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(U.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(S.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,a=this.state.email,n=this.state.password,b().signInWithEmailAndPassword(a,n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({error:e.t0.message});case 10:case"end":return e.stop()}var a,n}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("form",{className:"mt-5 py-5 px-5",autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(g.jsxs)("h1",{children:["Login to",Object(g.jsx)(v.b,{className:"title ml-2",to:"/",children:"Chatty"})]}),Object(g.jsx)("p",{className:"lead",children:"Fill in the form below to login to your account."}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{className:"form-control",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})}),Object(g.jsxs)("div",{className:"form-group",children:[this.state.error?Object(g.jsx)("p",{className:"text-danger",children:this.state.error}):null,Object(g.jsx)("button",{className:"btn btn-primary px-5",type:"submit",children:"Login"})]}),Object(g.jsx)("p",{children:"You can also log in with any of these services"}),Object(g.jsx)("button",{className:"btn btn-danger mr-2",type:"button",onClick:this.googleSignIn,children:"Sign in with Google"}),Object(g.jsx)("button",{className:"btn btn-secondary",type:"button",onClick:this.githubSignIn,children:"Sign in with GitHub"}),Object(g.jsx)("hr",{}),Object(g.jsxs)("p",{children:["Don't have an account? ",Object(g.jsx)(v.b,{to:"/signup",children:"Sign up"})]})]})})}}]),a}(n.Component);a(52);function B(e){var t=e.component,a=e.authenticated,n=Object(d.a)(e,["component","authenticated"]);return Object(g.jsx)(f.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return!0===a?Object(g.jsx)(t,Object(h.a)({user:n.user},e)):Object(g.jsx)(f.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}function R(e){var t=e.component,a=e.authenticated,n=Object(d.a)(e,["component","authenticated"]);return Object(g.jsx)(f.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return!1===a?Object(g.jsx)(t,Object(h.a)({},e)):Object(g.jsx)(f.a,{to:"/chat"})}}))}var W=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={authenticated:!1,loading:!0},e}return Object(o.a)(a,[{key:"render",value:function(){return!0===this.state.loading?Object(g.jsx)("h2",{children:"Loading..."}):Object(g.jsx)(v.a,{children:Object(g.jsxs)(f.d,{children:[Object(g.jsx)(f.b,{exact:!0,path:"/nbchat1",component:_}),Object(g.jsx)(B,{path:"/chat",authenticated:this.state.authenticated,component:D,user:this.state.user}),Object(g.jsx)(R,{path:"/signup",authenticated:this.state.authenticated,component:P}),Object(g.jsx)(R,{path:"/login",authenticated:this.state.authenticated,component:T})]})})}},{key:"componentDidMount",value:function(){var e=this;b().onAuthStateChanged((function(t){if(t){var a=t.email,n=[];m.ref("users").on("value",(function(s){var r=s.val();for(var c in r){var i=r[c];i.user_id=c,n.push(i)}var o=null;n.forEach((function(e){e.email==a&&(o=e)})),null==o&&function(e,t,a){m.ref("users").push({username:t,email:e,profile_picture:a})}(a,t.displayName,t.photoURL),e.setState({authenticated:!0,loading:!1,user:o})}))}else e.setState({authenticated:!1,loading:!1})}))}}]),a}(n.Component),F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(W,{})}),document.getElementById("root")),F()}},[[53,1,2]]]);
//# sourceMappingURL=main.000bc7ad.chunk.js.map