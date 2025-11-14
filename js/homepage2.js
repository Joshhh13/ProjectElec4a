// ========== SIDEBAR TOGGLE ==========
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});


// ========== BOOK CARD SELECTION ==========
document.querySelectorAll('.book-card').forEach(card => {
  card.addEventListener('click', function() {
    document.querySelectorAll('.book-card').forEach(c => c.classList.remove('selected'));
    this.classList.add('selected');
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const bookCards = document.querySelectorAll('.book-card');
  bookCards.forEach(card => {
    if (card.getAttribute('data-valid') === 'false') {
      card.style.opacity = '0.6';
      card.style.pointerEvents = 'none';
    }
  });

  const loggedInEmail = localStorage.getItem('loggedInUser');
  if (!loggedInEmail) {
    
    window.location.href = "login.html";
  } else {
    console.log("Currently logged in:", loggedInEmail);

    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = users.find(user => user.email === loggedInEmail);

    if (currentUser) {
      
      const nameElement = document.querySelector('.sidebar-header h3');
      if (nameElement) {
        nameElement.textContent = currentUser.fullName;
      }
    } else {
      
      const nameElement = document.querySelector('.sidebar-header h3');
      if (nameElement) {
        nameElement.textContent = "Unknown User";
      }
    }
  }

  // ======== LOGOUT FUNCTION (for .sign-out button) ========
  const logoutBtn = document.querySelector(".sign-out");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      const confirmLogout = confirm("Are you sure you want to sign out?");
      if (confirmLogout) {
        localStorage.removeItem("loggedInUser"); 
        window.location.href = "login.html"; 
      }
    });
  }
});

