// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS9TAH2BFYeQTRIQF1gnmTfm05Ce-A-D8",
  authDomain: "react-eudaimonia.firebaseapp.com",
  projectId: "react-eudaimonia",
  storageBucket: "react-eudaimonia.appspot.com",
  messagingSenderId: "863733499079",
  appId: "1:863733499079:web:72ba68747c9b4a7fc96ae2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
