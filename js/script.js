document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Scroll animation with IntersectionObserver
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in-up");
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll("section:not(#home)");
    sections.forEach(section => {
        const elements = section.querySelectorAll("h2, h3, p, div, span");
        elements.forEach(el => {
            el.classList.add("opacity-0");
            observer.observe(el);
        });
    });

    // Cursor-following gradient effect
    const gradientText = document.getElementById("gradient-name");
    if (gradientText) {
        gradientText.style.backgroundImage = `linear-gradient(90deg, #22c55e, #ec4899, #3b82f6)`;
        gradientText.style.backgroundSize = "200% 200%";
        gradientText.style.transition = "background-image 0.3s ease";

        document.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const x = clientX - innerWidth / 2;
            const y = clientY - innerHeight / 2;
            const angle = Math.atan2(y, x) * (180 / Math.PI);

            gradientText.style.backgroundImage = `linear-gradient(${angle + 90}deg, #22c55e, #ec4899, #3b82f6)`;
        });
    }
});

// Unicorn behavior removed