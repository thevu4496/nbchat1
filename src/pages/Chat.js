import React, { Component } from "react";
import Header from "../components/Header";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import { filter } from "../helpers/ultil";
import axios from 'axios';
import Result from '../pages/Result';
import $ from 'jquery';
import { readUsers , addUser , filterUserFrontEnd , updateUserConnection , listenUsers , listenNewMessage } from '../helpers/db';
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      user: this.props.user,
      conver_user : {},
      chats: [],
      users: [],
      listUser: [],
      content: '',
      search : '',
      readError: null,
      writeError: null,
      loadingChats: false,
      processing : 0,
      listFile : [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkEnter = this.checkEnter.bind(this);
    this.myRef = React.createRef();
  }
  async checkEnter(e) {
    if (e.keyCode === 13) {
      this.setState({ writeError: null });
      if(this.state.content.trim() != '' || this.state.listFile.length != 0){
        try {
          let data = {
            content: this.state.content,
            timestamp: Date.now(),
            from_uid: this.state.user.user_id,
            to_uid : this.state.conver_user.user_id,
          };
          if(this.state.listFile.length != 0){
            data.attach_files = this.state.listFile;
          }
          await db.ref("chats").push(data);
          this.setState({ content: '' });
          this.setState({ listFile: [] });
        } catch (error) {
          this.setState({ writeError: error.message });
        }
      }
      else{
        alert("Nhập chữ vào dkm !!!");
      }
    }
  }
  async componentWillUnmount() {
    this._isMounted = false;
 }
  loadApp(first){
    const chatArea = this.myRef.current;
    db.ref("users").once("value", snapshot => {
      let users = [];
      let snap = snapshot.val();
      for(var s in snap){
          let u = snap[s];
          u.user_id = s;
        users.push(u);
      }
      
      this.setState({ users : users });
      db.ref("chats").once("value", snapshot => {
        let chats = [];
        snapshot.forEach((snap) => {
          let mess = snap.val();
          if(mess.from_uid == this.state.user.user_id || mess.to_uid == this.state.user.user_id){
            chats.push(mess);
          }
        });
        chats.sort(function (a, b) { return b.timestamp - a.timestamp });
        let listUser = [];
        chats.forEach( mess => {
          if(mess.from_uid == this.state.user.user_id){
            if(!listUser.find(e => e.user_id == mess.to_uid)){
              let ur = users.find(u => u.user_id == mess.to_uid);
              if(typeof ur != "undefined"){
                ur.last_msg = mess.timestamp;
                listUser.push(ur);
              }
            }
          }
          else{
            if(!listUser.find(e => e.user_id == mess.from_uid)){
              let ur = users.find(u => u.user_id == mess.from_uid);
              if(typeof ur != "undefined"){
                ur.last_msg = mess.timestamp;
                listUser.push(ur);
              }
            }
          }
        })
        
        this.setState({ listUser : listUser });
        let converId;
        if(chats.length && first){
          if(chats[0].from_uid == this.state.user.user_id){
            converId = chats[0].to_uid;
          }
          else{
            converId = chats[0].from_uid;
          }
          chats.sort(function (a, b) { return a.timestamp - b.timestamp });
          let converUser =  users.filter(us => us.user_id == converId);
          this.setState({ conver_user : converUser[0] });
        }
        chats.sort(function (a, b) { return a.timestamp - b.timestamp });
        this.setState({ chats : chats });
        if(chatArea != null){
          setTimeout(function(){
            chatArea.scrollBy(0, chatArea.scrollHeight);
          },0)
          
        }
        
        this.setState({ loadingChats: false });
        listenUsers(this);
      });
    });
  }
  async componentDidMount() {
    this._isMounted = true;
    $(document).ready(function(){
      $('#action_menu_btn').click(function(){
        $('.action_menu').toggle();
      });
	  });
    this.setState({ readError: null, loadingChats: true });
    updateUserConnection(this.props.user.user_id);
    try {
    	this.loadApp(true);
	    listenNewMessage(this);
    } catch (error) {
      this.setState({ readError: error.message, loadingChats: false });
    }
  }
  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    if(this.state.content.trim() != '' || this.state.listFile.length != 0){
      try {
        let data = {
          content: this.state.content,
          timestamp: Date.now(),
          from_uid: this.state.user.user_id,
          to_uid : this.state.conver_user.user_id,
        };
        if(this.state.listFile.length != 0){
          data.attach_files = this.state.listFile;
        }
        console.log(data);
        await db.ref("chats").push(data);
        this.setState({ content: '' });
        this.setState({ listFile: [] });
      } catch (error) {
        this.setState({ writeError: error.message });
      }
    }
    else{
      alert("Nhập chữ vào dkm!!!!");
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
  handleChangeSearch(e){
    this.setState({
      search: e.target.value
    });
  }
  uploadFiles(files){
    const formData = new FormData();        
    let len = files.length;
    for(let i = 0; i< len; i++){
      formData.append('files', files[i]);
    }
    axios.post('https://servernbchat1.herokuapp.com/uploads', formData, {
        onUploadProgress: (ProgressEvent) => {
            let progress = Math.round( ProgressEvent.loaded / ProgressEvent.total * 100 );
            this.setState({processing : progress});
        }
    }).then(res => {
      this.setState({processing : 0});
      let data = res.data;
      let len = data.length;
      if(!len){
        if(data.error != 1){
          this.setState({listFile : [data]});
        }
        else{
          alert(data.msg);
        }
      }
      else{
        let files = [];
        data.forEach(d => {
          if(d.error != 1){
            files.push(d);
          }
          else{
            alert(d.msg);
          }
        });
        this.setState({listFile : files});
      }
    }).catch(err => console.log(err));
  }
  handleChangeFile(e){
    
    const files = e.target.files;
    const type = ["image/png", "image/jpg" , "image/jpeg" , "image/svg"];
    if(files.length == 0){
      return;
    }
    if(filter(files,"type",type)){
      this.uploadFiles(files);
    }
    else{
      alert("Chỉ được gửi file ảnh !!!!");
    }
  }
  removeImageUploadPreview(index){
    this.state.listFile.splice(index,1);
    this.setState({listFile : this.state.listFile});
  }
  renderUser(user,index,search){
      if(user.username.indexOf(search) !== -1){
        return <div key={index} className="list__search" onClick={this.hanldeSwitchConversation.bind(this, user)}>
                <div className="search__avatar"><img src={user.profile_picture} alt="" /></div>
                <div className="search__info">
                  <span className="info__name">{user.username}</span>
                  <span className={"info__status " + (user.logged ? 'online' : 'offline')}>{user.logged ? 'online' : 'offline'}</span>
                </div>
              </div>
      }
      return null;
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
                  <input type="text" placeholder="Search..." onChange={this.handleChangeSearch} value={this.state.search} className="form-control search" />
                  <div className="input-group-prepend">
                    <span className="input-group-text search_btn"><i className="fas fa-search" /></span>
                  </div>
                  {this.state.search !== '' ? <div className="box__search">
                    <h3 className="title__search">Discover</h3>
                    <div className="warpper__search">
                    {this.state.users.map((user,index) => this.renderUser(user,index,this.state.search))}
                    </div>
                  </div> : ''}
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
                    <div className="image_cotainer">
                      {chat.attach_files ? <div className="message__image">
                        { chat.attach_files.map((f,i) => {
                          return <img key={i} className="image_attach" src={f.path} alt="" />
                        })
                        }
                        {chat.content == '' ? <span className="msg_time_image">{this.formatTime(chat.timestamp)}</span> : '' }
                      </div> : ""}
                    </div>
                    {chat.content != '' ? <div className="msg_cotainer">
                       {chat.content}
                      <span className="msg_time">{this.formatTime(chat.timestamp)}</span>
                    </div>
                   : ''}
                   </div>
                } 
                  })}
              </div>
              <div className="card-footer">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-group">
                    <div className="list__upload">
                    {
                      this.state.listFile.map((file, index) => {
                        return <div key={index} title={file.name} className="image__upload">
                          <img className="image__preview" src={file.path} />
                          <span onClick={this.removeImageUploadPreview.bind(this, index)} className="remove__btn">x</span>
                        </div>
                      })
                    }
                    </div>
                    <div className="input-group-append">
                      <label className="input-group-text attach_btn"><i className="fas fa-paperclip" /><input onChange={this.handleChangeFile} className="hidden__field" multiple type="file" /></label>
                    </div>
                    <div className="message__field">
                      {this.state.processing > 0 ? <div style={{  width: this.state.processing + "%"}} className="process_bar"></div> : ""}
                      <textarea onKeyUp={this.checkEnter} onChange={this.handleChange} value={this.state.content} className="form-control type_msg" placeholder="Type your message..."></textarea>
                    </div>
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
