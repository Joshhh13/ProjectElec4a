const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');

function checkLoginButton() {
  loginBtn.disabled = !(emailInput.value.trim() && passwordInput.value.trim());
}

emailInput.addEventListener('input', checkLoginButton);
passwordInput.addEventListener('input', checkLoginButton);

loginBtn.addEventListener("click", function() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
        user => user.email === email && user.password === password
    );

    if (foundUser) {
        localStorage.setItem("loggedInUser", foundUser.email);

        alert(`Welcome back, ${foundUser.fullName}!`);
        window.location.href = "homepage2.html";
    } else {
        alert("Invalid email or password.");
    }
});





  