document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('loggedIn') !== 'true') {
        const encodedLoginUrl = 'aW5kZXguaHRtbA=='; // Base64 encoded URL for index.html
        const decodedLoginUrl = atob(encodedLoginUrl);
        window.location.href = decodedLoginUrl; // Redirect to login page if not logged in
    }
});
