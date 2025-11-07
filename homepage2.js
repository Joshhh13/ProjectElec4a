// Get elements
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

// Toggle sidebar and overlay when menu icon is clicked
menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Close sidebar when clicking outside (overlay)
overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});