// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCeHdAVSqiBpD3c-UqNd7OmX1N-ee4ceY",
  authDomain: "sheba-edtech-school.firebaseapp.com",
  projectId: "sheba-edtech-school",
  storageBucket: "sheba-edtech-school.firebasestorage.app",
  messagingSenderId: "1070797039513",
  appId: "1:1070797039513:web:27f6233db2a8a8d7565508",
  measurementId: "G-8X9BSB040B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);