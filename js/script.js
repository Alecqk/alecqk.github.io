// Navbar scroll effect
 const navbar = document.querySelector('.navbar');
 window.addEventListener('scroll', function() {
 	if (!navbar) {
 		return;
 	}
 	if (window.scrollY > 0) {
 		navbar.classList.add('scrolled');
 	} else {
 		navbar.classList.remove('scrolled');
 	}
 }, { passive: true });

 window.addEventListener('scroll', handleNavbarScroll);
 // Initialize navbar state on page load
 handleNavbarScroll();

// Close burger menu when a link is clicked
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.querySelectorAll('.navbar-links a');

navbarLinks.forEach(link => {
	link.addEventListener('click', function() {
		navbarToggle.checked = false;
	});
});
