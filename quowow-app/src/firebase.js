// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTWEUpdhaUbpVDHgFqT9J9qpELbjIFtSw",
  authDomain: "quowow-9c7a8.firebaseapp.com",
  projectId: "quowow-9c7a8",
  storageBucket: "quowow-9c7a8.appspot.com",
  messagingSenderId: "288935737346",
  appId: "1:288935737346:web:163278f1aea025e5c44f1b",
  measurementId: "G-8LYXHXDQPJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();

export { auth, provider };
export default db;
