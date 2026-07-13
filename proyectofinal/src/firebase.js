import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeKN0bCWQLeI6C2E6AZbMxH534yUtXrqI",
  authDomain: "cookies-infernales.firebaseapp.com",
  projectId: "cookies-infernales",
  storageBucket: "cookies-infernales.firebasestorage.app",
  messagingSenderId: "649020343571",
  appId: "1:649020343571:web:070143e6987535b1b4c6e6",
  measurementId: "G-F1S4VNY783"
};

const app=initializeApp(firebaseConfig);

export const db=getFirestore(app);