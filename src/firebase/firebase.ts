import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs4W36amGzAuZsXNsRscgv0JDhFCo295E",
  authDomain: "oms-aav.firebaseapp.com",
  projectId: "oms-aav",
  storageBucket: "oms-aav.firebasestorage.app",
  messagingSenderId: "547917796361",
  appId: "1:547917796361:web:06c01f0bb913836bf954d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);