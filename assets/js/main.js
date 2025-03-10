document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: 20, delay: 0.5, duration: 1 });
    gsap.from(".buttons", { opacity: 0, scale: 0.8, delay: 1, duration: 0.5 });
    gsap.from(".about", { opacity: 0, x: -50, duration: 1, delay: 1 });
    gsap.from(".social-links", { opacity: 0, x: 50, duration: 1, delay: 1.5 });
    gsap.from(".profile-photo", { opacity: 0, scale: 0.8, duration: 1 });
});

