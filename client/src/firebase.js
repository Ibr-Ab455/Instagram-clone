// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "instagram-f680a.firebaseapp.com",
  projectId: "instagram-f680a",
  storageBucket: "instagram-f680a.appspot.com",
  messagingSenderId: "374801393482",
  appId: "1:374801393482:web:4ebc7f806b63a85b8483b3"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);