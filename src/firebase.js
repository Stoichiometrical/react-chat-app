import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyASSuHGDjwABzOfUwpyEnGBQ1Ufp_pzWv8",
    authDomain: "chat-3b9fe.firebaseapp.com",
    projectId: "chat-3b9fe",
    storageBucket: "chat-3b9fe.appspot.com",
    messagingSenderId: "397418179017",
    appId: "1:397418179017:web:d2783a22bc545e55cde018"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const storage = getStorage(app);
 export const db = getFirestore();
