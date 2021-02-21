import React, { Component } from "react";
import Header from "../components/Header";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import $ from 'jquery';
import { readUsers , addUser , filterUserFrontEnd , updateUserConnection , listenUsers } from '../helpers/db';
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      user: this.props.user,
      conver_user : {},
      chats: [],
      listUser: [],
      content: '',
      readError: null,
      writeError: null,
      loadingChats: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkEnter = this.checkEnter.bind(this);
    this.myRef = React.createRef();
  }
  async checkEnter(e) {
    if (e.keyCode === 13) {
      this.setState({ writeError: null });
      const chatArea = this.myRef.current;
      try {
        let data = {
          content: this.state.content,
          timestamp: Date.now(),
          from_uid: this.state.user.user_id,
          to_uid : this.state.conver_user.user_id,
        };
        await db.ref("chats").push(data);
        this.state.chats.push(data);
        this.setState({ content: '' });
        chatArea.scrollBy(0, chatArea.scrollHeight);
      } catch (error) {
        this.setState({ writeError: error.message });
      }
    }
  }
  async componentWillUnmount() {
    this._isMounted = false;
 }
  async componentDidMount() {
    this._isMounted = true;
    $(document).ready(function(){
      $('#action_menu_btn').click(function(){
        $('.action_menu').toggle();
      });
	  });
    this.setState({ readError: null, loadingChats: true });
    const chatArea = this.myRef.current;
    updateUserConnection(this.props.user.user_id);
    try {
    	db.ref("users").once("value", snapshot => {
		    let users = [];
		    let snap = snapshot.val();
		    for(var s in snap){
		      	let u = snap[s];
		      	u.user_id = s;
		     	users.push(u);
			}
	    	db.ref("chats").once("value", snapshot => {
	        let chats = [];
	        snapshot.forEach((snap) => {
	        	let mess = snap.val();
	        	if(mess.from_uid == this.state.user.user_id || mess.to_uid == this.state.user.user_id){
	        		chats.push(mess);
	        	}
	        });
	        chats.sort(function (a, b) { return a.timestamp - b.timestamp });
          let listUser = [];
          chats.forEach( mess => {
            if(mess.from_uid == this.state.user.user_id){
              if(!listUser.find(e => e.user_id == mess.to_uid)){
                let ur = users.find(u => u.user_id == mess.to_uid);
                if(typeof ur != "undefined"){
                  listUser.push(ur);
                }
              }
            }
            else{
              if(!listUser.find(e => e.user_id == mess.from_uid)){
                let ur = users.find(u => u.user_id == mess.from_uid);
                if(typeof ur != "undefined"){
                  listUser.push(ur);
                }
              }
            }
          })
          this.setState({ listUser : listUser });
	        let converId;
          if(chats.length){
            if(chats[0].from_uid == this.state.user.user_id){
              converId = chats[0].to_uid;
            }
            else{
              converId = chats[0].from_uid;
            }
            let converUser =  users.filter(us => us.user_id == converId);
            this.setState({ conver_user : converUser[0] });
          }
	        this.setState({ chats : chats });
	        chatArea.scrollBy(0, chatArea.scrollHeight);
	        this.setState({ loadingChats: false });
		    });
    	});
	    
    } catch (error) {
      this.setState({ readError: error.message, loadingChats: false });
    }
    listenUsers(this);
  }
  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    const chatArea = this.myRef.current;
    try {
      let data = {
        content: this.state.content,
        timestamp: Date.now(),
        from_uid: this.state.user.user_id,
        to_uid : this.state.conver_user.user_id,
      };
      await db.ref("chats").push(data);
      this.state.chats.push(data);
      this.setState({ content: '' });
      chatArea.scrollBy(0, chatArea.scrollHeight);
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }

  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    return time;
  }
  renderElementLoading(){
     if(this.state.loadingChats){
        return <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
     }
     return null;
  }
  hanldeSwitchConversation(user){
    this.setState({conver_user : user});
  }

  render() {
    
    return (
      <div>
        <Header user_id={this.state.user.user_id} />
        {this.renderElementLoading()}
        <div className="container-fluid chat-page h-100">
        <div className="row justify-content-center h-100">
          <div className="col-md-4 col-xl-3 chat"><div className="card mb-sm-3 mb-md-0 contacts_card">
              <div className="card-header">
                <div className="input-group">
                  <input type="text" placeholder="Search..." className="form-control search" />
                  <div className="input-group-prepend">
                    <span className="input-group-text search_btn"><i className="fas fa-search" /></span>
                  </div>
                </div>
              </div>
              <div className="card-body contacts_body">
                <ul className="contacts">
                  {this.state.listUser.map((user,index) => {
                    return <li key={index} className={"list__user " + (user.user_id == this.state.conver_user.user_id ? "active" : "")} onClick={this.hanldeSwitchConversation.bind(this, user)}>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src={user.profile_picture} className="rounded-circle user_img" />
                        <span className={"online_icon " + (user.logged ? '' : 'offline')} />
                      </div>
                      <div className="user_info">
                        <span>{user.username}</span>
                        {
                          user.logged ? "" : <p>left {this.formatTime(user.last_online)}</p>
                        }
                      </div>
                    </div>
                  </li>
                  })}
                </ul>
              </div>
              <div className="card-footer" />
            </div></div>
          <div className="col-md-8 col-xl-6 chat" >
            <div className="card">
              <div className="card-header msg_head">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src={this.state.conver_user.profile_picture} className="rounded-circle user_img" />
                    <span className={"online_icon" + (this.state.conver_user.logged ? '' : 'offline')} />
                  </div>
                  <div className="user_info">
                    <span>{this.state.conver_user.username}</span>
                  </div>
                  <div className="video_cam">
                    <span><i className="fas fa-video" /></span>
                    <span><i className="fas fa-phone" /></span>
                  </div>
                </div>
                <span id="action_menu_btn"><i className="fas fa-ellipsis-v" /></span>
                <div className="action_menu">
                  <ul>
                    <li><i className="fas fa-user-circle" /> View profile</li>
                    <li><i className="fas fa-users" /> Add to close friends</li>
                    <li><i className="fas fa-plus" /> Add to group</li>
                    <li><i className="fas fa-ban" /> Block</li>
                  </ul>
                </div>
              </div>
              <div className="card-body msg_card_body" ref={this.myRef}>
              {this.state.chats.map((chat, index) => {
                if((chat.from_uid == this.state.conver_user.user_id && chat.to_uid == this.state.user.user_id) || (chat.to_uid == this.state.conver_user.user_id && chat.from_uid == this.state.user.user_id) ){
                  return <div key={index} className={"d-flex " +(chat.from_uid == this.state.conver_user.user_id ? 'justify-content-start' : 'justify-content-end') + " mb-4"}>
                    <div className="img_cont_msg">
                      <img src={chat.from_uid == this.state.conver_user.user_id ? this.state.conver_user.profile_picture : this.state.user.profile_picture} className="rounded-circle user_img_msg" />
                    </div>
                    <div className="msg_cotainer">
                      {chat.content}
                      <span className="msg_time">{this.formatTime(chat.timestamp)}</span>
                    </div>
                  </div>
                } 
                  })}
              </div>
              <div className="card-footer">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-group">
                    <div className="input-group-append">
                      <span className="input-group-text attach_btn"><i className="fas fa-paperclip" /></span>
                    </div>
                    <textarea onKeyUp={this.checkEnter} onChange={this.handleChange} value={this.state.content} className="form-control type_msg" placeholder="Type your message..."></textarea>
                    <div className="input-group-append">
                      
                      <button type="submit"><span className="input-group-text send_btn"><i className="fas fa-location-arrow" /></span></button>
                      
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="py-5 mx-3">
          Login in as: <strong className="text-info">{this.state.user.email}</strong>
        </div>
      </div>
    );
  }
}
