// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const env = require("react-dotenv");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "pkfit-48d0f",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "250776908309",
  appId: "1:250776908309:web:d80495764943084fc1941c",
  measurementId: "G-XTG255W836"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);