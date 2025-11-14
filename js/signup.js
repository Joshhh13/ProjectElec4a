
    const form = document.querySelector('.login-form form');
    const fullNameInput = document.getElementById('fullName');
    const dobInput = document.getElementById('dob');
    const addressInput = document.getElementById('address');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    
    form.addEventListener('submit', function(e) {
      e.preventDefault(); 

      
      const fullName = fullNameInput.value.trim();
      const dob = dobInput.value;
      const address = addressInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      
      if (!fullName || !dob || !address || !email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      
      let users = JSON.parse(localStorage.getItem('users')) || [];

      
      if (users.some(user => user.email === email)) {
        alert("Email already registered. Please log in instead.");
        return;
      }

      
      const newUser = {
        fullName,
        dob,
        address,
        email,
        password
      };

      
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      alert("Account created successfully! You can now log in.");
      window.location.href = "Login.html"; // Redirect to login
    });
