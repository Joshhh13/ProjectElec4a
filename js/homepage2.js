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


document.querySelectorAll('.book-card').forEach(card => {
  card.addEventListener('click', function() {
    // Remove selected from all
    document.querySelectorAll('.book-card').forEach(c => c.classList.remove('selected'));
    // Add selected to this
    this.classList.add('selected');
  });
});


// Example: Add "N/A" label or disable click dynamically 
document.addEventListener('DOMContentLoaded', function() {
    const bookCards = document.querySelectorAll('.book-card');

    bookCards.forEach(card => {
        if (card.getAttribute('data-valid') === 'false') {
            // You can add an N/A overlay here if needed
        }
    });
});

