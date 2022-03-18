import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpGo8wG5DzieOvNFthrSOUO8tiohaiwS0",
  authDomain: "react-house-marketplace-4f213.firebaseapp.com",
  projectId: "react-house-marketplace-4f213",
  storageBucket: "react-house-marketplace-4f213.appspot.com",
  messagingSenderId: "328952928000",
  appId: "1:328952928000:web:ee13238aac33c939b285e5",
};

// Initialize Firebase

initializeApp(firebaseConfig);
export const db = getFirestore();
