document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar-nav');

	function addNav() {
		if (window.scrollY >= 160) {
			nav.classList.add('scroll-nav');
		} else {
			nav.classList.remove('scroll-nav');
		}
	}

	window.addEventListener('scroll', addNav);
});

const nav = document.querySelector('.navbar-nav');
const navItems = document.querySelector('.nav-link');
const btnNav = document.querySelector('.navbar-toggler');

document.querySelectorAll('.subpage-gallery-img img').forEach((image) => {
	image.onclick = () => {
		document.querySelector('.popup-image').style.display = 'block';
		document.querySelector('.popup-image img').src = image.getAttribute('src');
	};
});

document.querySelector('.popup-image span').onclick = () => {
	document.querySelector('.popup-image').style.display = 'none';
};

btnNav.addEventListener('click', handleNav);
