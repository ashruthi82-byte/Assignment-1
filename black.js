const form = document.getElementById("registrationForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    let errors = [];

    // Username validation
    if (username.length < 5) {
        errors.push("Username must be at least 5 characters long.");
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email address.");
    }

    // Password length validation
    if (password.length <= 12) {
        errors.push("Password must be longer than 12 characters.");
    }

    // Special symbol validation
    const specialSymbol = /[!@#$%^&*(),.?":{}|<>_\-+=]/;

    if (!specialSymbol.test(password)) {
        errors.push("Password must contain at least one special symbol.");
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    // Show errors
    if (errors.length > 0) {
        errorMessage.innerHTML = errors.join("<br>");
        return;
    }

    // Success message
    errorMessage.innerHTML = "";
    alert("Form submitted successfully!");

});