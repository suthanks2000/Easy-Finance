// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjGcdSr-z4ueGnkd6DxWocT-HtVZ9-hh8",
  authDomain: "easy-finance-app-a26c6.firebaseapp.com",
  projectId: "easy-finance-app-a26c6",
  storageBucket: "easy-finance-app-a26c6.appspot.com",
  messagingSenderId: "646981227165",
  appId: "1:646981227165:web:e28361267ac1f18287ba74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export default app;
