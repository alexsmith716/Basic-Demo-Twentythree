const navbarmenu = document.querySelector('.navbar');

document.addEventListener('click', function(event) {

	if (event.target.classList.contains('js-scroll-trigger')) {

		if (navbarmenu.querySelector('.active')) {
			navbarmenu.querySelector('.active').classList.remove('active');
		}
	}
});
