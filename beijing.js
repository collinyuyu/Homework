// Navigation and page handling
document.addEventListener('DOMContentLoaded', function() {
    // Cache elements
    const navbar = document.getElementById('navbar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const backToTopButton = document.getElementById('back-to-top');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, footer a[href$=".html"]');
    
    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Update navbar style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('bg-dark/90', 'bg-blur', 'shadow-lg');
            navbar.classList.remove('bg-transparent');
            backToTopButton.classList.remove('translate-y-20', 'opacity-0');
        } else {
            navbar.classList.remove('bg-dark/90', 'bg-blur', 'shadow-lg');
            navbar.classList.add('bg-transparent');
            backToTopButton.classList.add('translate-y-20', 'opacity-0');
        }
    });
    
    // Back to top functionality
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Highlight active page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop() || 'index.html';
        if (linkPage === currentPage) {
            link.classList.add('text-primary');
            link.classList.remove('text-white', 'hover:text-light');
        }
    });
});
