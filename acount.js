
const PROJECT_URL = 'https://dplouhkwmyrenhkzqxup.supabase.co'; 
const ANON_KEY = 'sb_publishable_z3gvIQGoxobO3jwqtwXCiw_irgvm6OB';


const supabase = supabase.createClient(PROJECT_URL, ANON_KEY);


console.log("Checking connection to Angelina...", supabaseClient);
let mode = 'login';

function toggleMode(newMode) {
    mode = newMode;
    const nameGroup = document.getElementById('name-group');
    const title = document.getElementById('form-title');
    const submitBtn = document.getElementById('submit-btn');
    
    // Update tabs
    document.getElementById('login-tab').classList.toggle('active', mode === 'login');
    document.getElementById('signup-tab').classList.toggle('active', mode === 'signup');

    if (mode === 'signup') {
        nameGroup.classList.remove('hidden');
        title.innerText = "Join the Elite";
        submitBtn.innerText = "Create Account";
    } else {
        nameGroup.classList.add('hidden');
        title.innerText = "Welcome Back";
        submitBtn.innerText = "Access Magazine";
    }
}

// Prepare for Database/API connection
document.getElementById('auth-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const status = document.getElementById('api-status');
    
    status.innerText = `Connecting to your database for ${email}...`;
    
    // Here you will eventually add your Supabase code:
    // supabase.auth.signInWithPassword({ email, password })
});
