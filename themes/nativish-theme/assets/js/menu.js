document.addEventListener("DOMContentLoaded", function() {
  const menuOpen = { value: false };

  const isMobile = () => window.innerWidth <= 600;

  const toggleMenu = () => {
    if (!isMobile()) return;

    menuOpen.value = !menuOpen.value;
    const navWrapper = document.querySelector('.nav-wrapper');
    if (navWrapper) {
      navWrapper.classList.toggle('open', menuOpen.value);
    }
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav) {
      mobileNav.style.display = menuOpen.value ? 'block' : 'none';
    }
    const isClosedIcon = document.querySelector('.isClosedIcon');
    const isOpenIcon = document.querySelector('.isOpenIcon');
    if (isClosedIcon && isOpenIcon) {
      isClosedIcon.style.display = menuOpen.value ? 'none' : 'block';
      isOpenIcon.style.display = menuOpen.value ? 'block' : 'none';
    }
  };

  const closeMenu = (event) => {
    const navWrapper = document.querySelector('.nav-wrapper');
    if (navWrapper && !event.target.closest('.nav-wrapper')) {
      menuOpen.value = false;
      navWrapper.classList.remove('open');
    }
  };

  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  document.addEventListener('click', closeMenu);

  window.addEventListener('unload', () => {
    document.removeEventListener('click', closeMenu);
  });
});
