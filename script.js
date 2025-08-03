
function toggleMenu() {
  document.getElementById('menu').classList.toggle('show');
}
function revealOnScroll() {
  document.querySelectorAll('section').forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
setInterval(nextSlide, 3000);
