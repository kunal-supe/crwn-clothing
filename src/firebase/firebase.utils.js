import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAq2EHUGxZn7ecPWkCRsgocSS-YZRsahF4",
    authDomain: "crwn-db-ca067.firebaseapp.com",
    projectId: "crwn-db-ca067",
    storageBucket: "crwn-db-ca067.appspot.com",
    messagingSenderId: "652086979869",
    appId: "1:652086979869:web:f8528434a09f33032285f4",
    measurementId: "G-1LRSTJQ1D2"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;