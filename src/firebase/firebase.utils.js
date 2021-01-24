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
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;