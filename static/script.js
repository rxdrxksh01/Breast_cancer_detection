// Minimal JavaScript for micro-animations

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('predictionForm');
    const submitBtn = document.getElementById('submitBtn');
    const resultBox = document.getElementById('resultBox');
    
    // Button click animation
    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            // Add a subtle click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }
    
    // Fade-in animation for result (if result exists on page load)
    if (resultBox) {
        // Trigger animation
        setTimeout(() => {
            resultBox.style.opacity = '0';
            resultBox.style.transform = 'translateY(10px)';
            
            requestAnimationFrame(() => {
                resultBox.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                resultBox.style.opacity = '1';
                resultBox.style.transform = 'translateY(0)';
            });
        }, 100);
    }
});
