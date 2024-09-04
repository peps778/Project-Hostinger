document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const correctUsername = 'admin'; 
        const correctPassword = 'admin'; 
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === correctUsername && password === correctPassword) {
            localStorage.setItem('loggedIn', 'true'); // Set the flag for successful login
            
            Swal.fire({
                title: 'Success!',
                text: 'You are logged in!',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            }).then(() => {
                window.location.href = "flowerpage.html"; // Corrected URL
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Incorrect username or password. Please try again.',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    });
});
