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
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentuser = ()=>{
  return new Promise((resolve, reject)=>{
    const unsuscribe = auth.onAuthStateChanged(userAuth=>{
      unsuscribe();
      resolve(userAuth);
    }, reject) 
  })
}

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformedCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  auth.signInWithPopup(googleProvider).catch(alert("try again"));

export default firebase;
