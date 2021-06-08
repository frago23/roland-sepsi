const opt = {
     root: null,
     rootMargin: '-50px'
};

//#region section-1
const section1 = document.querySelector('.section-1');
const header = document.querySelector('header');
const section1Obs = new IntersectionObserver(handleSection1Observe, opt);
function handleSection1Observe(entries) {
     if (!entries.length)
          return;

     const entry = entries[0];
     console.log(entry);
     if (entry.intersectionRatio > 0) {
          header.classList.remove('header-faded');
          return;
     }

     header.classList.toggle('header-faded');
}
section1Obs.observe(section1);
//#endregion

//#region section-3
const section3 = document.querySelector('.section-3');
const imgTwo = document.querySelector('.img-two');
const aboutMeContainer = document.querySelector('.about-me-container');
const section3Obs = new IntersectionObserver(handleSection3Ovserve, opt);
function handleSection3Ovserve(entries) {
     if (!entries.length)
          return;

     const entry = entries[0];
     if (!entry.isIntersecting)
          return;

     imgTwo.classList.toggle('move-in');
     aboutMeContainer.classList.toggle('move-in');
     section3Obs.unobserve(entry.target);
}
section3Obs.observe(section3);
//#endregion

//#region section-4
const section4 = document.querySelector('.section-4');
const contactContaier = document.querySelector('.contact-container');
const section4Obs = new IntersectionObserver(handleSection4Ovserve, opt);
function handleSection4Ovserve(entries) {
     if (!entries.length)
          return;

     const entry = entries[0];
     console.log(entry);
     if (!entry.isIntersecting)
          return;

     contactContaier.classList.toggle('move-in');
     section4Obs.unobserve(entry.target);
}
section4Obs.observe(section4);

//#endregion