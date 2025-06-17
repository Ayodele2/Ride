document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('confirmationMsg').textContent = 'Your ride has been booked! 🚗';
  this.reset();
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('loginMsg').textContent = 'Logged in successfully! 🚀';
  this.reset();
});

// Toggle mobile nav menu
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll to About section if URL contains #about
window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash === '#about') {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// Animate About Section on Scroll
const aboutSection = document.getElementById('about');
if (aboutSection) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add('fade-in');
      }
    });
  }, {
    threshold: 0.3
  });
  observer.observe(aboutSection)
}