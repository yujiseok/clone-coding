import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnqJOA0Xw5GyvBRbTnVPRhQQqsdtORbgg",
  authDomain: "linkedin-clone-49ffa.firebaseapp.com",
  projectId: "linkedin-clone-49ffa",
  storageBucket: "linkedin-clone-49ffa.appspot.com",
  messagingSenderId: "928033776560",
  appId: "1:928033776560:web:30341aae4eaa407e016c75",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
