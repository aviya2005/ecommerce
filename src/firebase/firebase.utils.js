import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBGW5HuRMIjbSsEI-RZB5HSkIOsx0s2K1k",
  authDomain: "ecommerce-db-fbccd.firebaseapp.com",
  databaseURL: "https://ecommerce-db-fbccd.firebaseio.com",
  projectId: "ecommerce-db-fbccd",
  storageBucket: "ecommerce-db-fbccd.appspot.com",
  messagingSenderId: "236987865433",
  appId: "1:236987865433:web:dd756f7d8ed15e7b805448",
  measurementId: "G-L0PKX0TP73"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)      
    }
  }
  return userRef;
  
}

export const signInWithGoogle = () => auth.signInWithPopup(provider);
//   .then(
//     result => {
//       // Success.
//     },
//     error => {
//       console.log(`error: ${error}`)
//     }
//   )

export default firebase;
