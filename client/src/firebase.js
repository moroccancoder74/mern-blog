// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3f349.firebaseapp.com",
  projectId: "mern-blog-3f349",
  storageBucket: "mern-blog-3f349.appspot.com",
  messagingSenderId: "743270182799",
  appId: "1:743270182799:web:e32e3c8358a6d2cee4e5fa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
