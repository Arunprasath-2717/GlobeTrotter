// Load user data from register form (localStorage simulation)
function loadUserData() {
  // In real app: fetch from backend or localStorage
  const userData = {
    firstName: "Dulful",
    lastName: "Haresh",
    email: "dulful@example.com",
    phone: "+91 9876543210",
    country: "India",
    city: "Bengaluru",
    profilePic: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
  };

  // Update DOM
  document.getElementById('userFullName').textContent = `${userData.firstName} ${userData.lastName}`;
  document.getElementById('profileImage').src = userData.profilePic;
  
  console.log('User data loaded:', userData);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  loadUserData();

  // Edit buttons
  document.querySelector('.edit-image-btn').addEventListener('click', () => {
    alert('Upload new profile picture');
  });

  document.querySelector('.edit-profile-btn').addEventListener('click', () => {
    alert('Redirect to edit profile form');
  });

  // Trip cards
  document.querySelectorAll('.trip-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('trip-action')) {
        card.classList.toggle('active');
      }
    });
  });

  // Back button
  document.querySelector('.back-btn').addEventListener('click', () => {
    history.back();
  });
});
