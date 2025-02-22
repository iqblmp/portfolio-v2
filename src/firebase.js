import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAYtYBrF76anL6ci0EscwSlU4o4_d15qw",
    authDomain: "iqbalmp-portofolio.firebaseapp.com",
    projectId: "iqbalmp-portofolio",
    storageBucket: "iqbalmp-portofolio.firebasestorage.app",
    messagingSenderId: "654415480370",
    appId: "1:654415480370:web:e8787219b8b7e9ff5bde2b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
