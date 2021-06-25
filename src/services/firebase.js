import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcQ-IFS6rmcLQhaMou6qIFCDXf9ZJQwIQ",
  authDomain: "clone-92a0a.firebaseapp.com",
  projectId: "clone-92a0a",
  storageBucket: "clone-92a0a.appspot.com",
  messagingSenderId: "230883388467",
  appId: "1:230883388467:web:59df120c1d55f6990d8746",
  measurementId: "G-4XZCRLB8H1",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
