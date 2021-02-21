import React from 'react';
import { Link } from 'react-router-dom';
import { auth , db , dt } from '../services/firebase';
function Header(props) {
  let user_id = props.user_id;
  function remove(){
    var user = auth().currentUser;
    user.delete().then(function() {
    // User deleted.
  }).catch(function(error) {
    console.log(error);
  });
  }
  return (
    <header>
      <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
        <Link className="navbar-brand" to="/">Chatty</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          {auth().currentUser
            ? <div className="navbar-nav">
              <Link className="nav-item nav-link mr-3" to="/chat">Profile</Link>
              <button className="btn btn-primary mr-3" onClick={() => {let user = db.ref('users').child(user_id);user.child('logged').set(false);user.child('last_online').onDisconnect().set(dt.ServerValue.TIMESTAMP);auth().signOut();}}>Logout</button>
              <button className="btn btn-primary mr-3" onClick={() => remove()}>Remove</button>
            </div>
            : <div className="navbar-nav">
              <Link className="nav-item nav-link mr-3" to="/login">Sign In</Link>
              <Link className="nav-item nav-link mr-3" to="/signup">Sign Up</Link>
            </div>}
        </div>
      </nav>
    </header>
  );
}

export default Header;
