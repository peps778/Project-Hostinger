document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.typing-text');
    let currentIndex = 0;
    
    function typeWriter(element, text, speed, callback) {
        let index = 0;
        element.textContent = ''; // Clear the text
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }
    
    function startTyping() {
        if (currentIndex < elements.length) {
            const element = elements[currentIndex];
            const text = element.textContent;
            typeWriter(element, text, 100, () => {
                currentIndex++;
                startTyping();
            });
        } else {
            elements.forEach(element => element.classList.add('typing')); // Add typing class for cursor effect
        }
    }

    startTyping();
});
