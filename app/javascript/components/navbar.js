function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-wagon');
  const navbarH = navbar.clientHeight;

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight - navbarH) {
        navbar.classList.add('navbar-wagon-bg');
      } else {
        navbar.classList.remove('navbar-wagon-bg');
      }
    });
  }

  const logo = document.querySelector('div[tabindex="-1"]');

  if (logo) {
    logo.addEventListener('click', e => {
      window.location.href = '/cocktails';
    });
  }
}

export { initUpdateNavbarOnScroll };
