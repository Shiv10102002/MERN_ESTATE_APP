// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-01-f4a1d.firebaseapp.com",
  projectId: "mern-estate-01-f4a1d",
  storageBucket: "mern-estate-01-f4a1d.appspot.com",
  messagingSenderId: "1097496197941",
  appId: "1:1097496197941:web:728058d3946970af936a7c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
