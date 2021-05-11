
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
const contactBtn_2 = document.querySelector('#contact-btn-2');
aboutMeBtn.addEventListener('click', (event) => {
     event.preventDefault();
 
     window.scrollBy({
         top: window.innerHeight * sections.about.position,
         left: 0,
         behavior: 'smooth'
     })
 })
contactBtn.addEventListener('click', (event) => {
    event.preventDefault();

    window.scrollBy({
        top: window.innerHeight * sections.contact.position,
        left: 0,
        behavior: 'smooth'
    })
})
contactBtn_2.addEventListener('click', (event) => {
     event.preventDefault();
 
     window.scrollBy({
         top: window.innerHeight * sections.contact.position,
         left: 0,
         behavior: 'smooth'
     })
 })

const backToTop = document.querySelector('#back-to-top');
console.log(backToTop)
backToTop.addEventListener('click', (event) => {
     event.preventDefault();
 
     window.scrollBy({
         top: window.innerHeight * 2 * -1,
         left: 0,
         behavior: 'smooth'
     })
 })