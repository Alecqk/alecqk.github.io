// Navbar scroll effect
const navbar = document.querySelector('.navbar');

function handleNavbarScroll() {
	if (!navbar) {
		return;
	}

	navbar.classList.toggle('scrolled', window.scrollY > 0);
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// Initialize navbar state on page load
handleNavbarScroll();

// Close burger menu when a link is clicked
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.querySelectorAll('.navbar-links a');

navbarLinks.forEach(link => {
	link.addEventListener('click', function() {
		if (navbarToggle) {
			navbarToggle.checked = false;
		}
	});
});
