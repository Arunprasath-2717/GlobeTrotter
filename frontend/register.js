// register.js - Save to Firestore
import { auth, db } from './js/config.js'; // Your existing config
import { 
  createUserWithEmailAndPassword, 
  updateProfile 
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';
import { 
  doc, setDoc 
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

document.addEventListener('DOMContentLoaded', function() {
  // Profile picture (your existing code)
  const profilePicInput = document.getElementById('profilePic');
  let profilePicFile = null;
  
  profilePicInput.addEventListener('change', function(e) {
    profilePicFile = e.target.files[0];
    // Your existing preview code...
  });

  // Register form submission
  document.querySelector('form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      country: document.getElementById('country').value,
      city: document.getElementById('city').value,
      additional: document.getElementById('additional').value,
      profilePic: profilePicFile ? profilePicFile.name : null,
      createdAt: new Date().toISOString()
    };

    try {
      // 1. Create user with email/password
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        'tempPassword123' // Auto-generate or add password field
      );
      
      const user = userCredential.user;
      
      // 2. Update display name
      await updateProfile(user, {
        displayName: `${formData.firstName} ${formData.lastName}`
      });
      
      // 3. Save full profile to Firestore
      await setDoc(doc(db, 'users', user.uid), formData);
      
      alert('✅ Registration successful! Data saved to Firestore');
      window.location.href = '/frontend/profile.html';
      
    } catch (error) {
      console.error('Registration error:', error);
      alert('❌ Error: ' + error.message);
    }
  });
});
