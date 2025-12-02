document.getElementById("signupform").addEventListener("submit", function(e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!fullName || !dob || !address || !email || !password) {
        alert("Please fill in all required fields.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some(user => user.email === email);
    if (exists) {
        alert("Email already registered.");
        return;
    }

    const newUser = {
        fullName: fullName,
        dob: dob,
        address: address,
        email: email,
        password: password
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    window.location.href = "LogIn.html";
});



