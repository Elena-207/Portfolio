// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

//Lazy animation on scroll

const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => observer.observe(section));

// Back to Top Button Logic
const backToTopButton = document.getElementById('backToTop');

// Show or hide the button based on scroll position
window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = 'block'; // Show the button
  } else {
    backToTopButton.style.display = 'none'; // Hide the button
  }
};

// Scroll smoothly to the top when the button is clicked
backToTopButton.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};