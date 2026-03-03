// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  serverTimestamp,
  doc,
  setDoc,
  getDoc
} from "firebase/firestore";

// Your web app's Firebase configuration using Vite's environment variables
const firebaseConfig = {
  apiKey: "AIzaSyDOMXxCy7sD4K00gb8XY67iaeDb8CabhFk",
  authDomain: "portfolio-f107a.firebaseapp.com",
  projectId: "portfolio-f107a",
  storageBucket: "portfolio-f107a.firebasestorage.app",
  messagingSenderId: "577193229166",
  appId: "1:577193229166:web:ac49d62cd3b898662adf7f",
  measurementId: "G-R3FQTKSB33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Export Firestore functions for use in your components
export { 
  db, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  serverTimestamp,
  doc,
  setDoc,
  getDoc
};
