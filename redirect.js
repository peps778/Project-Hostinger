document.addEventListener('DOMContentLoaded', () => {
    // Function to get URL parameters
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Get the scrambled URL from the query parameters
    const scrambledUrl = getQueryParam('page');

    // Mapping of scrambled URLs to actual URLs
    const urlMapping = {
        'a1b2c3d4': 'flowerpage.html',
        'e5f6g7h8': 'images.html',
        'i9j0k1l2': 'last.html'
    };

    // Redirect if scrambled URL exists in the mapping
    if (scrambledUrl && urlMapping[scrambledUrl]) {
        window.location.href = urlMapping[scrambledUrl];
    } else {
        console.error('Scrambled URL not found or invalid.');
    }
});
