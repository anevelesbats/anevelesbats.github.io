window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const navbarHome = document.querySelector('.navbar-home');
  const photo = document.querySelector('.my-cv-picture-nav');
  const name = document.querySelector('.nav-name');

  if (window.scrollY > 200) {
    navbar.classList.add('shrink');
    navbarHome.classList.add('visible');
    photo.classList.add('visible');
    name.classList.add('visible');
  } else {
    navbar.classList.remove('shrink');
    navbarHome.classList.remove('visible');
    photo.classList.remove('visible');
    name.classList.remove('visible');
  }
});

document.querySelector('.my-cv-picture-nav').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});