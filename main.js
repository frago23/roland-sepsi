const sections = {
    home: {
        position: 0
    },
    about: {
        position: 1
    },
    contact: {
        position: 2
    }
};
const aboutMeBtn = document.querySelector('#about-me-btn');
const contactBtn = document.querySelector('#contact-btn');
aboutMeBtn.addEventListener('click', (event) => {
    event.preventDefault();

    window.scrollTo({
        top: window.innerHeight * sections.about.position,
        left: 0,
        behavior: 'smooth'
    })
});
contactBtn.addEventListener('click', (event) => {
    event.preventDefault();

    window.scrollTo({
        top: window.innerHeight * sections.contact.position,
        left: 0,
        behavior: 'smooth'
    })
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