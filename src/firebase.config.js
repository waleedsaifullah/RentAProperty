import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDXaGAttH8Wip3r7PYB9giNUjPAq02ULmQ",
  authDomain: "house-marketplace-app-143b5.firebaseapp.com",
  projectId: "house-marketplace-app-143b5",
  storageBucket: "house-marketplace-app-143b5.appspot.com",
  messagingSenderId: "390646899179",
  appId: "1:390646899179:web:92d35f0199c13b6ab2b9ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()