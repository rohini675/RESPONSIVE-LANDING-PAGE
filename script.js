// Smooth scrolling
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Form submission simulation
function submitForm(event) {
    event.preventDefault();
    alert("Your message has been sent!");
    event.target.reset();
}

// Hamburger toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});