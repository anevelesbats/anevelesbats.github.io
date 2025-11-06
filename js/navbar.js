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

  const burger = document.getElementById('burger');
  const menu = document.querySelector('.navbar-links');
  const navLinks = document.querySelectorAll('.navbar-links a');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      menu.classList.remove('active');
    });
  });

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) current = section.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});
