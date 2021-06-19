const opt = {
    root: null,
    rootMargin: '-50px'
};

//#region section-1
const section1 = document.querySelector('.section-1');
const header = document.querySelector('header');
const aboutCont = document.querySelector('.about-container');
const imgOne = document.querySelector('.img-one');
const section1Obs = new IntersectionObserver(handleSection1Observe, opt);
function handleSection1Observe(entries) {
    if (!entries.length)
        return;

    const entry = entries[0];
    if (entry.intersectionRatio > 0) {
        header.classList.remove('header-faded');
        aboutCont.classList.toggle('move-in');
        imgOne.classList.toggle('move-in');
        return;
    }

    aboutCont.classList.remove('move-in');
    imgOne.classList.remove('move-in');
    header.classList.toggle('header-faded');
}
section1Obs.observe(section1);
//#endregion

//#region section-2
const section2 = document.querySelector('.section-2');
const section2Obs = new IntersectionObserver(handleSection2Observer, opt);
const video1 = document.querySelector('.video1');
const video2 = document.querySelector('.video2');
const video3 = document.querySelector('.video3');
const video4 = document.querySelector('.video4');
function handleSection2Observer(entires) {
    if (!entires.length)
        return;

    const entry = entires[0];
    if (!entry.isIntersecting)
        return;

    video1.classList.toggle('move-in');
    video2.classList.toggle('move-in');
    video3.classList.toggle('move-in');
    video4.classList.toggle('move-in');
    section2Obs.unobserve(entry.target);
}
section2Obs.observe(section2);
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
    if (!entry.isIntersecting)
        return;

    contactContaier.classList.toggle('move-in');
    section4Obs.unobserve(entry.target);
}
section4Obs.observe(section4);

//#endregion