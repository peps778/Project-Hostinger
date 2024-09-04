document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html'; // Redirect to login page if not logged in
    }
});
