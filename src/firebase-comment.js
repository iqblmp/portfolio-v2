import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCAYtYBrF76anL6ci0EscwSlU4o4_d15qw",
    authDomain: "iqbalmp-portofolio.firebaseapp.com",
    projectId: "iqbalmp-portofolio",
    storageBucket: "iqbalmp-portofolio.firebasestorage.app",
    messagingSenderId: "654415480370",
    appId: "1:654415480370:web:e8787219b8b7e9ff5bde2b",
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, "comments-app");
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
