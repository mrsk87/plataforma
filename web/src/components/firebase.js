import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMaxListeners } from 'process';


const firebaseConfig = {
  apiKey: "AIzaSyBNGZNXyOdwEil62qhNK6kyoxriMPyV0c8",
  authDomain: "rebotuca.firebaseapp.com",
  projectId: "rebotuca",
  storageBucket: "rebotuca.appspot.com",
  messagingSenderId: "96030305192",
  appId: "1:96030305192:web:d5622e2197daee23008b9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;
 