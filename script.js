// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true // Animations repeat when scrolling up
});

// Home Page Animations
sr.reveal('.reveal-top', { origin: 'top' });
sr.reveal('.reveal-bottom', { origin: 'bottom' });
sr.reveal('.reveal-left', { origin: 'left' });
sr.reveal('.reveal-right', { origin: 'right' });

// Staggered Animations for Grid items
sr.reveal('.service-card', { interval: 100 });
sr.reveal('.portfolio-item', { interval: 200 });

// Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
        header.style.padding = '1rem 2rem';
    } else {
        header.style.background = 'transparent';
        header.style.boxShadow = 'none';
        header.style.padding = '1.5rem 2rem';
    }
});

// Mobile Menu Toggle (Simplified)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Active class styling would be needed in CSS for a full dropdown
    alert('Mobile menu clicked! (In a real app, this would toggle a sidebar)');
});

// Smooth Scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Portfolio image click effect (Simulation)
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('h3').innerText;
        alert(`Opening details for: ${title}`);
    });
});

// Form Submission Simulation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Sending...';
        btn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you! Your inquiry for Akshar Graphics has been sent successfully.');
            btn.innerText = originalText;
            btn.disabled = false;
            contactForm.reset();
        }, 1500);
    });
}
