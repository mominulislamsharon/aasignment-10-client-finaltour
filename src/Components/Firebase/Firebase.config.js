// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPy20mMHQ54n8n_z-04tRlCy1XYB3_2kM",
  authDomain: "assignment-10-art-craft-e2133.firebaseapp.com",
  projectId: "assignment-10-art-craft-e2133",
  storageBucket: "assignment-10-art-craft-e2133.appspot.com",
  messagingSenderId: "132908497718",
  appId: "1:132908497718:web:b601d0a939c4f491b15197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);