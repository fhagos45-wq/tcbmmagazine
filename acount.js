// Function to show the Login form
function showLogin() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');

    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
}

// Function to show the Sign Up form
function showSignup() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');

    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    loginTab.classList.remove('active');
    signupTab.classList.add('active');
}

// Handle Form Submissions (Demo)
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("Login submitted with email:", document.getElementById('login-email').value);
    alert("Login Demo Successful");
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("Sign Up submitted for:", document.getElementById('signup-name').value);
    alert("Account Demo Created");
});
