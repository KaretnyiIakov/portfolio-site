document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: 20, delay: 0.5, duration: 1 });
    gsap.from(".buttons", { opacity: 0, scale: 0.8, delay: 1, duration: 0.5 });
    gsap.from(".about", { opacity: 0, x: -50, duration: 1, delay: 1 });
    gsap.from(".social-links", { opacity: 0, x: 50, duration: 1, delay: 1.5 });
    gsap.from(".profile-photo", { opacity: 0, scale: 0.8, duration: 1 });
});

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".project-slide");
    let currentSlide = 0;
  
    const nextButton = document.querySelector(".slider-next");
    const prevButton = document.querySelector(".slider-prev");
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }
  
    nextButton.addEventListener("click", function() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  
    prevButton.addEventListener("click", function() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  });

  
  const slides = document.querySelectorAll('.project-slide');
  let currentIndex = 0;
  
  function updateSlider() {
      slides.forEach((slide, index) => {
          slide.style.display = index === currentIndex ? 'block' : 'none';
      });
  }
  
  document.querySelector('.slider-prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
  });
  
  document.querySelector('.slider-next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
  });
  
  // Первоначальный вызов
  updateSlider();
    