// profile.js - Load from Firestore
import { auth, db } from './js/config.js';
import { 
  onAuthStateChanged, 
  signOut 
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';
import { 
  doc, getDoc 
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

document.addEventListener('DOMContentLoaded', function() {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Get user profile from Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        
        // Update profile display
        document.getElementById('userFullName').textContent = 
          `${userData.firstName} ${userData.lastName}`;
        
        document.getElementById('profileEmail').textContent = userData.email;
        document.getElementById('profilePhone').textContent = userData.phone;
        document.getElementById('profileCity').textContent = `${userData.city}, ${userData.country}`;
        
        if (userData.profilePic) {
          document.getElementById('profileImage').src = 
            `https://your-storage-url/${userData.profilePic}`; // Later with Storage
        }
        
        console.log('✅ Profile loaded:', userData);
      }
    } else {
      window.location.href = '/frontend/register.html';
    }
  });

  // Logout
  document.getElementById('logoutBtn').addEventListener('click', async () => {
    await signOut(auth);
    window.location.href = '/frontend/index.html';
  });
});
