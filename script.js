document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    
    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.85) {
                section.classList.add('reveal');
            }
        });
    }

    window.addEventListener('scroll', revealSections);
    revealSections(); // Run once on load
});
