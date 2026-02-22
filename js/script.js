// Navbar scroll effect
window.addEventListener('scroll', function() {
	const navbar = document.querySelector('.navbar');
	if (window.scrollY > 0) {
		navbar.classList.add('scrolled');
	} else {
		navbar.classList.remove('scrolled');
	}
});

// Close burger menu when a link is clicked
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.querySelectorAll('.navbar-links a');

navbarLinks.forEach(link => {
	link.addEventListener('click', function() {
		navbarToggle.checked = false;
	});
});
