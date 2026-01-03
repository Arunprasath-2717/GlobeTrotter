// login.js - Firebase Authentication
import { auth } from '/frontend/firebase/config.js';
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  onAuthStateChanged 
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';

const loginBtn = document.getElementById('loginBtn');
const googleSignInBtn = document.getElementById('googleSignInBtn');
const emailInput = document.getElementById('login-email');
const passwordInput = document.getElementById('login-password');

// Email/Password Login
loginBtn.addEventListener('click', async () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  
  if (!email || !password) {
    alert('Please fill email and password');
    return;
  }
  
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert('✅ Login successful!');
    window.location.href = 'profile.html'; // or dashboard
  } catch (error) {
    console.error('Login error:', error);
    alert('❌ Login failed: ' + error.message);
  }
});

// Google Sign-In
const googleProvider = new GoogleAuthProvider();
googleSignInBtn.addEventListener('click', async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    alert('✅ Google login successful!');
    window.location.href = 'profile.html';
  } catch (error) {
    console.error('Google login error:', error);
    alert('❌ Google login failed: ' + error.message);
  }
});

// Auto-redirect if already logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = 'profile.html';
  }
});
