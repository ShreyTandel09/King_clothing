import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDQy-Reuabjb1-Cxo2mQGscVKzBdfvGUTA",
  authDomain: "king-clothing-db-708a2.firebaseapp.com",
  projectId: "king-clothing-db-708a2",
  storageBucket: "king-clothing-db-708a2.appspot.com",
  messagingSenderId: "337749154893",
  appId: "1:337749154893:web:b929175af696fcdb119004",
  measurementId: "${config.measurementId}",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
