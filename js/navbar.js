document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');
  const homeLink = document.querySelector('.logo'); // le lien maison

  // Ouvre/ferme
  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    toggleButton.classList.toggle('active');
  });

  // Ferme après clic
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      toggleButton.classList.remove('active');
    });
  });

  // ✅ Scroll au header avec offset sur MOBILE
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        e.preventDefault();
        const header = document.querySelector('header');
        const navH = document.querySelector('.navbar')?.offsetHeight || 60;
        const y = header.getBoundingClientRect().top + window.pageYOffset - navH;
        window.scrollTo({ top: y, behavior: 'smooth' });

        // ferme le menu si ouvert
        navLinks.classList.remove('show');
        toggleButton.classList.remove('active');
      }
    });
  }
});
