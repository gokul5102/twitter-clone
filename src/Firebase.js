import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlq7Y0H3TGB8O-0gcp7gnkeacuFjfnGRo",
  authDomain: "twitter-clone-7f95e.firebaseapp.com",
  projectId: "twitter-clone-7f95e",
  storageBucket: "twitter-clone-7f95e.appspot.com",
  messagingSenderId: "817444773403",
  appId: "1:817444773403:web:5956b0a37bdde9f2dfe2be",
  measurementId: "G-85KG0NXJ58",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
