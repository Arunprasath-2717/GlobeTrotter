import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyBilDLNBvHBIvQyG7P6Cr9qUztfLn1sNOg",
  authDomain: "globetrotter-d8850.firebaseapp.com",
  projectId: "globetrotter-d8850",
  storageBucket: "globetrotter-d8850.firebasestorage.app",
  messagingSenderId: "560629970704",
  appId: "1:560629970704:web:6a8febc9f5fc24ba1d5795",
  measurementId: "G-78Z0Q1HBPE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
