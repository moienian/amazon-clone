import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "clone-51ecd.firebaseapp.com",
  projectId: "clone-51ecd",
  storageBucket: "clone-51ecd.appspot.com",
  messagingSenderId: "1094624246939",
  appId: "1:1094624246939:web:5c7c6d2d5e33210cbd9a3e",
  measurementId: "G-CBWQG4XKVQ",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };
