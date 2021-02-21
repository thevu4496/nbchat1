import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyADdW9WsBiwihH4ToCdbLVBELIRBrKTBP8",
  authDomain: "chatty-b51b5.firebaseapp.com",
  databaseURL: "https://chatty-b51b5-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
export const dt = firebase.database;
