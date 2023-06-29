import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB25KRgUVS2TvlCY4WbexQtniYHyjLG74k",
  authDomain: "media-f190a.firebaseapp.com",
  projectId: "media-f190a",
  storageBucket: "media-f190a.appspot.com",
  messagingSenderId: "1043615957180",
  appId: "1:1043615957180:web:d051e94b6024c69a9b50b9",
  measurementId: "G-TLEFK6X2C1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
