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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// firestore.collection('users').doc('11VopWlFRJuuv4GVzpzn').collection('cartItems').doc('GOrKnOeqHyQZ0dlcM0Kr');
// firestore.doc('/users/11VopWlFRJuuv4GVzpzn');
// firestore.collection('/users/11VopWlFRJuuv4GVzpzn');
export default firebase;