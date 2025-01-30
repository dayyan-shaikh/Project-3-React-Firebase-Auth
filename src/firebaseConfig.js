// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3qZznnzW3c3J3TuZKAO3tv3L8XBPuxkI",
  authDomain: "react-firebase-auth-ed5d2.firebaseapp.com",
  projectId: "react-firebase-auth-ed5d2",
  storageBucket: "react-firebase-auth-ed5d2.firebasestorage.app",
  messagingSenderId: "1042188382473",
  appId: "1:1042188382473:web:5074ef16d190ecd89ae3d8",
  measurementId: "G-DG9C5P5E37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;