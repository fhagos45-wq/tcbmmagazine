
// Function to switch between Login and Sign Up views
function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.classList.toggle('hidden');
    signupForm.classList.toggle('hidden');
}

// Handle Login Submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-password').value;
    
    console.log("Logging in with:", email, pass);
    alert("Login attempt successful! (Check console)");
});

// Handle Sign Up Submission
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    
    console.log("Creating account for:", name, email);
    alert("Account created for " + name);
});
