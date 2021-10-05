const sections = {
     home: {
          position: 0
     },
     newSong: {
          position: 1
     },
     about: {
          position: 2
     },
     contact: {
          position: 3
     }
};
const newSontBtn = document.querySelector('#new-song-btn');
const aboutMeBtn = document.querySelector('#about-me-btn');
const contactBtn = document.querySelector('#contact-btn');
const newSontBtn_h = document.querySelector('#new-song-btn-h');
const aboutMeBtn_h = document.querySelector('#about-me-btn-h');
const contactBtn_h = document.querySelector('#contact-btn-h');

newSontBtn.addEventListener('click', (event) => {
     event.preventDefault();
     window.scrollTo({
        top: window.innerHeight * sections.newSong.position,
        left: 0,
        behavior: 'smooth'  
     });
});

newSontBtn_h.addEventListener('click', (event) => {
     event.preventDefault();
     window.scrollTo({
        top: window.innerHeight * sections.newSong.position,
        left: 0,
        behavior: 'smooth'  
     });
     triggerHamburgerMenu();
});

aboutMeBtn.addEventListener('click', (event) => {
     event.preventDefault();

     window.scrollTo({
          top: window.innerHeight * sections.about.position,
          left: 0,
          behavior: 'smooth'
     })
});

aboutMeBtn_h.addEventListener('click', (event) => {
     event.preventDefault();

     window.scrollTo({
          top: window.innerHeight * sections.about.position,
          left: 0,
          behavior: 'smooth'
     })
     triggerHamburgerMenu();
});

contactBtn.addEventListener('click', (event) => {
     event.preventDefault();

     window.scrollTo({
          top: window.innerHeight * sections.contact.position,
          left: 0,
          behavior: 'smooth'
     })
});

contactBtn_h.addEventListener('click', (event) => {
     event.preventDefault();

     window.scrollTo({
          top: window.innerHeight * sections.contact.position,
          left: 0,
          behavior: 'smooth'
     })
     triggerHamburgerMenu();
});

const backToTop = document.querySelector('.header-brand');
backToTop.addEventListener('click', (event) => {
     event.preventDefault();

     window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
     });
});

const cRightYear = document.querySelector('#copyright_year');
if (cRightYear) {
     cRightYear.innerHTML = new Date().getFullYear();
} else {
     cRightYear.innerHTML = 2021;
}