import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoONhOgLJAfNHrb2NYWtey6advigIy3Gg",
  authDomain: "gautamvphotography.firebaseapp.com",
  databaseURL: "https://gautamvphotography.firebaseio.com",
  projectId: "gautamvphotography",
  storageBucket: "gautamvphotography.appspot.com",
  messagingSenderId: "534864156758",
  appId: "1:534864156758:web:99900e13ed083dbaa5c3f7",
  measurementId: "G-ZT325VELGX",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
