import firebase from 'firebase/app';
import 'firebase/firestore'; // db
import 'firebase/auth'; // authentication

const config = {
  apiKey: "AIzaSyActK4HECfBu0GG_VvFJLXELQPv6BlWjqU",
  authDomain: "crwn-db-8c8b2.firebaseapp.com",
  projectId: "crwn-db-8c8b2",
  storageBucket: "crwn-db-8c8b2.appspot.com",
  messagingSenderId: "734579039098",
  appId: "1:734579039098:web:5242f58a621961769e54c3",
  measurementId: "G-NGG8QGJHJ3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firesotre = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;