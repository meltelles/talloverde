import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "talloverde-54a25.firebaseapp.com",
  projectId: "talloverde-54a25",
  storageBucket: "talloverde-54a25.appspot.com",
  messagingSenderId: process.env.MESSAGING_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
