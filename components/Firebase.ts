// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIWEMcDQd3065rU8bUrPeOkhz9fFaIhe8",
  authDomain: "kevin-nextjs.firebaseapp.com",
  projectId: "kevin-nextjs",
  storageBucket: "kevin-nextjs.appspot.com",
  messagingSenderId: "900312125001",
  appId: "1:900312125001:web:6f046b14495e87711eb998",
  measurementId: "G-VRWC49H59H",
};
// Initialize Firebase
// firebase.analytics();
export let firestore;

export function initFirebase() {
  firebase.initializeApp(firebaseConfig);
  firestore = firebase.firestore();
}

export const MESSAGES_COLLECTION = "messages";
