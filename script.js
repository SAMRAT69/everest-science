// JavaScript for dynamic effects (e.g., reveal images as they come into view)
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.8) {
                section.style.opacity = 1;
            }
        });
    });
});
