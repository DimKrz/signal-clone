import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb1Q2nTjJ93BtuWJPohCGZUWRHG3lggjM",
  authDomain: "signal-clone-5ee0b.firebaseapp.com",
  projectId: "signal-clone-5ee0b",
  storageBucket: "signal-clone-5ee0b.appspot.com",
  messagingSenderId: "578867818901",
  appId: "1:578867818901:web:557537aaeaef06c778069c",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { auth, db };
