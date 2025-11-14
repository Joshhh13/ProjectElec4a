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

// Function to show the return modal
function returnBook() {
  document.getElementById('returnModal').style.display = 'block';

  // Auto-fill book information
  document.querySelectorAll('.modal-right input')[0].value = "BK001"; // Book ID
  document.querySelectorAll('.modal-right input')[1].value = "To Kill a Mockingbird"; // Title
  document.querySelectorAll('.modal-right input')[2].value = "Harper Lee"; // Author
  document.querySelectorAll('.modal-right input')[3].value = "Fiction"; // Category
}

// Function to close modal when clicking the 'x' button
document.querySelector('.close').onclick = function() {
  document.getElementById('returnModal').style.display = 'none';
}

// Function to close modal when clicking outside the modal content
window.onclick = function(event) {
  const modal = document.getElementById('returnModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// Function to handle CONFIRM button click with validation
document.querySelector('.confirm-btn').addEventListener('click', function() {
  // Get all input fields
  const inputs = document.querySelectorAll('#returnModal input');

  let allFilled = true;

  // Check if any input is empty
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      allFilled = false;
    }
  });

  if (!allFilled) {
    alert("Please fill in all required fields before confirming.");
    return; // Stop here
  }

  // If all filled, close modal and show success message
  document.getElementById('returnModal').style.display = 'none';
  alert("You have successfully returned the book!");
});