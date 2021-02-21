import React, { Component } from 'react';
import { db } from "./services/firebase";
import io from 'socket.io-client';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { auth } from './services/firebase';
import { readUsers , addUser } from './helpers/db';
import './styles.css';
function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component user={rest.user} {...props} />
        ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
      }
    />
  )
}
function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/chat' />}
    />
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }
  render() {
    return this.state.loading === true ? <h2>Loading...</h2> : (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <PrivateRoute path="/chat" authenticated={this.state.authenticated} component={Chat} user = {this.state.user}></PrivateRoute>
          <PublicRoute path="/signup" authenticated={this.state.authenticated} component={Signup}></PublicRoute>
          <PublicRoute path="/login" authenticated={this.state.authenticated} component={Login}></PublicRoute>
        </Switch>
      </Router>
    );
  }
  componentWillMount() {
    this.socket = io('https://nbchatserver4.herokuapp.com/');
  }
  componentDidMount() {
  auth().onAuthStateChanged((user) => {
    if (user) {
      let email = user.email;
      let users = [];
    db.ref("users").on("value", snapshot => {
      let snap = snapshot.val();
      for(var s in snap){
        let u = snap[s];
        u.user_id = s;
        users.push(u);
      }
      let curent = null;
      users.forEach(u => {
        if(u.email == email){
          curent = u;
        }
      });
      if(curent == null){
        addUser(email,user.displayName,user.photoURL);
      }
      this.setState({
        authenticated: true,
        loading: false,
        user : curent,
      });
    });
    } else {
      this.setState({
        authenticated: false,
        loading: false,
      });
    }
  })
}
}

export default App;