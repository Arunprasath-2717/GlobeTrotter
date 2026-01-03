// register.js - Fixes SVG overlap + form handling
document.addEventListener('DOMContentLoaded', function() {
  // Profile picture preview with SVG hide fix
  const profilePicInput = document.getElementById('profilePic');
  const preview = document.querySelector('.profile-pic-preview');
  const svgPlaceholder = document.querySelector('.profile-pic-placeholder');

  profilePicInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        // Set background image
        preview.style.backgroundImage = `url(${event.target.result})`;
        preview.style.backgroundSize = 'cover';
        preview.style.backgroundPosition = 'center';
        
        // Hide SVG completely
        if (svgPlaceholder) {
          svgPlaceholder.style.display = 'none';
        }
        
        // Add has-image class for CSS styling
        preview.classList.add('has-image');
      };
      reader.readAsDataURL(file);
    }
  });

  // Form submission with all data collection
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect all form data
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      country: document.getElementById('country').value,
      city: document.getElementById('city').value,
      additional: document.getElementById('additional').value,
      profilePic: profilePicInput.files[0] ? profilePicInput.files[0].name : null
    };

    console.log('Form Data:', formData); // For debugging
    
    // Simulate save (replace with Firebase/backend)
    alert(`Registration successful!\n\n${JSON.stringify(formData, null, 2)}`);
    
    // Save to localStorage (for profile page demo)
    localStorage.setItem('userData', JSON.stringify(formData));
    
    // Redirect to profile
    setTimeout(() => {
      window.location.href = '/frontend/profile.html';
    }, 1500);
  });
});
