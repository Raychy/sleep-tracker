// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1hBCu0a24bng9ikJefEN46VDi5XR5gGI",
  authDomain: "sleep-tracker-f615e.firebaseapp.com",
  projectId: "sleep-tracker-f615e",
  storageBucket: "sleep-tracker-f615e.appspot.com",
  messagingSenderId: "263311293599",
  appId: "1:263311293599:web:5193dd9c08267bdc2136aa",
  measurementId: "G-X549JQ2W5P"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);