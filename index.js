document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const correctUsername = 'admin'; 
    const correctPassword = 'admin'; 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        Swal.fire({
            title: 'Success!',
            text: 'You are logged in!',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            window.location.href = 'flowerpage.html'; 
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

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Add your login logic here. This is a simple example:
        if (username && password) {
            // Simulate a successful login
            localStorage.setItem('loggedIn', 'true');
            
            // Use SweetAlert2 for feedback
            Swal.fire({
                title: 'Success!',
                text: 'You are now logged in.',
                icon: 'success',
                confirmButtonText: 'Continue'
            }).then(() => {
                window.location.href = 'flowerpage.html'; // Redirect after login
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter both username and password.',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    });
});
