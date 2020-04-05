import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB1MgwpqS-pvdxY1VjQp0z_QgrMDeRt-AA",
    authDomain: "crwn-db-9b53e.firebaseapp.com",
    databaseURL: "https://crwn-db-9b53e.firebaseio.com",
    projectId: "crwn-db-9b53e",
    storageBucket: "crwn-db-9b53e.appspot.com",
    messagingSenderId: "209707410832",
    appId: "1:209707410832:web:7c8958c17c673c14db3f15"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;