// nav.js — shared navigation & footer injected into every page

function getBasePath() {
  // Works whether files are in root or a subfolder
  return '';
}

function injectNav(activePage) {
  const nav = `
  <nav id="main-nav">
    <a href="index.html" class="nav-logo">Queen Empress Roland</a>
    <ul class="nav-links">
      <li><a href="music.html" ${activePage==='music'?'class="active"':''}>Music</a></li>
      <li><a href="videos.html" ${activePage==='videos'?'class="active"':''}>Videos</a></li>
      <li><a href="tour.html" ${activePage==='tour'?'class="active"':''}>Tour</a></li>
      <li><a href="about.html" ${activePage==='about'?'class="active"':''}>About</a></li>
      <li><a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <div class="mobile-menu" id="mobile-menu">
    <div class="mobile-divider"></div>
    <a href="music.html" class="mobile-link">Music</a>
    <div class="mobile-divider"></div>
    <a href="videos.html" class="mobile-link">Videos</a>
    <div class="mobile-divider"></div>
    <a href="tour.html" class="mobile-link">Tour</a>
    <div class="mobile-divider"></div>
    <a href="about.html" class="mobile-link">About</a>
    <div class="mobile-divider"></div>
    <a href="contact.html" class="mobile-link">Contact</a>
    <div class="mobile-divider"></div>
  </div>`;

  const socialsBar = `
  <div class="socials-bar">
    <p class="socials-bar-label">Follow the Journey</p>
    <div class="socials-list">
      <a href="https://www.facebook.com/queenempressroland" target="_blank" class="social-link">Facebook</a>
      <a href="https://www.instagram.com/queenempressroland/" target="_blank" class="social-link">Instagram</a>
      <a href="https://www.tiktok.com/@queenempressroland" target="_blank" class="social-link">TikTok</a>
      <a href="https://www.youtube.com/c/RolandSepsi?sub_confirmation=1" target="_blank" class="social-link">YouTube</a>
    </div>
  </div>`;

  const year = new Date().getFullYear();
  const footer = `
  <footer>
    <span class="footer-logo">Queen Empress Roland</span>
    <span class="footer-copy">© ${year} Roland Music. All rights reserved.</span>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.querySelector('#socials-placeholder').outerHTML = socialsBar;
  document.querySelector('#footer-placeholder').outerHTML = footer;

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => observer.observe(el));

  // Nav shadow
  const navEl = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    navEl.style.boxShadow = window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,0.08)' : 'none';
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}
