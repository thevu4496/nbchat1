import { auth } from "../services/firebase";

export function signup(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}
 
export function signin(email, password) {
	// auth().signInWithEmailAndPassword(email, password)
	//   .then((userCredential) => {
	//     var user = userCredential.user;
	//     console.log(user);
	//   })
	//   .catch((error) => {
	//     var errorCode = error.code;
	//     var errorMessage = error.message;
	//     console.log(error);
	//   });
  return auth().signInWithEmailAndPassword(email, password);
}

export function signInWithGoogle() {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
}

export function signInWithGitHub() {
  const provider = new auth.GithubAuthProvider();
  return auth().signInWithPopup(provider);
}

export function logout() {
  return auth().signOut();
}
