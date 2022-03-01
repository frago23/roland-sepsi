const sections = {
	home: {
		position: 0
	},
	music: {
		position: 1
	},
	about: {
		position: 2
	},
	contact: {
		position: 3
	}
};
const toMusic1h = document.querySelector('#toMusic1h');
const toMusic2h = document.querySelector('#toMusic2h');
const toMusic3 = document.querySelector("#toMusic3");
const aboutMeBtn1 = document.querySelector('#aboutMeBtn1');
const aboutMeBtn2 = document.querySelector('#aboutMeBtn2');
const contactBtn1 = document.querySelector('#contactBtn1');
const contactBtn2 = document.querySelector('#contactBtn2');

const triggerHamburgerMenu = () => {
	var x = document.getElementById("hamburger-menu");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

const scrollTo = (event, position, triggerMenu) => {
	event.preventDefault();
	window.scrollTo({
		top: window.innerHeight * position,
		left: 0,
		behavior: 'smooth'
	})

	if (triggerMenu) {
		triggerHamburgerMenu();
	}
}

toMusic1h.addEventListener('click', e => scrollTo(e, sections.music.position, true));
toMusic2h.addEventListener('click', e => scrollTo(e, sections.music.position, false));
toMusic3.addEventListener('click', e => scrollTo(e, sections.music.position, false));
aboutMeBtn1.addEventListener('click', e => scrollTo(e, sections.about.position, true));
aboutMeBtn2.addEventListener('click', e => scrollTo(e, sections.about.position, false));
contactBtn1.addEventListener('click', e => scrollTo(e, sections.contact.position, true));
contactBtn2.addEventListener('click', e => scrollTo(e, sections.contact.position, false));

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