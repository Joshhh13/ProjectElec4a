
    const loginBtn = document.getElementById('loginBtn');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    function checkLoginButton() {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      loginBtn.disabled = !(email && password);
    }

    emailInput.addEventListener('input', checkLoginButton);
    passwordInput.addEventListener('input', checkLoginButton);

    loginBtn.addEventListener('click', function() {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (!email || !password) {
        alert("Please fill in both email and password.");
        return;
      }

      const users = JSON.parse(localStorage.getItem('users')) || [];

      const foundUser = users.find(user => user.email === email && user.password === password);

      if (foundUser) {
        alert(`Welcome back, ${foundUser.fullName}!`);
        
        localStorage.setItem('loggedInUser', email);

        window.location.href = "homepage2.html";
      } else {
        alert("Invalid email or password. Please sign up first or check your details.");
      }
    });




  