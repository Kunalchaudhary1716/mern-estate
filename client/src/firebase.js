// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9af01.firebaseapp.com",
  projectId: "mern-estate-9af01",
  storageBucket: "mern-estate-9af01.firebasestorage.app",
  messagingSenderId: "781683886384",
  appId: "1:781683886384:web:b1905ef11af682639f20f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);