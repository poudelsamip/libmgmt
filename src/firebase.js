import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDW94Nsv8IX75X4-VDXCT9oNdWWPrP-ptg",
  authDomain: "mylibrary-9145a.firebaseapp.com",
  projectId: "mylibrary-9145a",
  storageBucket: "mylibrary-9145a.firebasestorage.app",
  messagingSenderId: "316539079016",
  appId: "1:316539079016:web:c3eab52b71d662a6882edd",
  measurementId: "G-EK5F16W1TX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
