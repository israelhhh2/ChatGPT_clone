import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC-7SP6lad2k0vgAZMvkvdfLI13Usq-1E",
  authDomain: "chatgpt-messenger-3dbe7.firebaseapp.com",
  projectId: "chatgpt-messenger-3dbe7",
  storageBucket: "chatgpt-messenger-3dbe7.appspot.com",
  messagingSenderId: "1092318422510",
  appId: "1:1092318422510:web:154580c78982278d745aff",
  measurementId: "G-WLKNMBKV2G",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
