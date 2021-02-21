import { db , dt } from "../services/firebase";

export function readChats() {
  let abc = [];
  db.ref("chats").on("value", snapshot => {
    snapshot.forEach(snap => {
      abc.push(snap.val())
    });
    return abc;
  });
}

export function updateUserConnection(user_id){
  let user = db.ref('users').child(user_id);
  if(!user){
    return;
  }
  db.ref('.info/connected').on('value', function (snap) {
    if ( snap.val() === true ) {
      user.child('logged').set(true);
      user.child('logged').onDisconnect().set(false);
      user.child('last_online').onDisconnect().set(dt.ServerValue.TIMESTAMP);
    }
});
}
export function filterUserFrontEnd(arr,user_id) {
  arr.forEach((a,index) =>{
    if(a.user_id == user_id){
      arr.splice(index, 1);
    }
  });
  return arr;
}
export function listenUsers(t){
  db.ref("users").once("child_changed", snapshot => {
    
    let users = [];
    let snap = snapshot.val();
    let user_id = snapshot.key;
    t.state.listUser.forEach(user => {
      if(user.user_id == user_id){
        user.logged = snap.logged;
        listenUsers(t);
      }
    });
    t.setState({listUser : t.state.listUser});
  });
  
}
export function readUsers() {
  db.ref("users").once("value", snapshot => {
    let users = [];
    let snap = snapshot.val();
    for(var s in snap){
      let u = snap[s];
      u.user_id = s;
      users.push(u);
    }
    return users;
  });
}
export function writeChats(message) {
  return db.ref("chats").push({
    content: message.content,
    timestamp: message.timestamp,
    uid: message.uid
  });
}

export function addUser(email,name,photo) {
  db.ref("users").push({
    username: name,
    email: email,
    profile_picture : photo,
  });
}
